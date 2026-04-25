"""API routes for print queue management."""

import asyncio
import json
import logging
import re
import secrets
import zipfile
from datetime import datetime, timezone
from pathlib import Path

import defusedxml.ElementTree as ET
from fastapi import APIRouter, Depends, HTTPException, Query, Request
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from sqlalchemy import and_, func, or_, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from backend.app.core.auth import (
    RequirePermissionIfAuthEnabled,
    is_auth_enabled,
    require_auth_if_enabled,
    require_ownership_permission,
)
from backend.app.core.config import settings
from backend.app.core.database import get_db
from backend.app.core.permissions import Permission
from backend.app.models.archive import PrintArchive
from backend.app.models.library import LibraryFile
from backend.app.models.print_queue import PrintQueueItem
from backend.app.models.printer import Printer
from backend.app.models.user import User
from backend.app.schemas.print_queue import (
    PrintQueueBulkUpdate,
    PrintQueueBulkUpdateResponse,
    PrintQueueItemCreate,
    PrintQueueItemResponse,
    PrintQueueItemStatusUpdate,
    PrintQueueItemUpdate,
    PrintQueueReorder,
    QueueContactAccessRequest,
    QueueContactAccessResponse,
)
from backend.app.services.makerworld_titles import is_exact_makerworld_slug_title, resolve_makerworld_model_title
from backend.app.services.notification_service import notification_service
from backend.app.utils.printer_models import normalize_printer_model, normalize_printer_model_id
from backend.app.utils.threemf_tools import extract_filament_usage_from_3mf

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/queue", tags=["queue"])
QUEUE_CONTACT_PASSWORD_HEADER = "X-Queue-Contact-Password"
QUEUE_ADMIN_PASSWORD_HEADER = "X-Queue-Admin-Password"
EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
MAKERWORLD_TITLE_RESOLUTION_TIMEOUT_SECONDS = 2.5


def _is_valid_makerworld_url(url: str) -> bool:
    """Allow MakerWorld China model links for manual queue requests."""
    normalized = url.strip().lower()
    return normalized.startswith("https://makerworld.com.cn/zh/")


def _is_valid_contact_email(email: str) -> bool:
    """Basic email validation for queue notification email."""
    return bool(EMAIL_RE.match(email.strip()))


def _contact_details_visible(request: Request) -> bool:
    """Whether request contact fields should be revealed in API responses."""
    password = request.headers.get(QUEUE_CONTACT_PASSWORD_HEADER)
    if password is None:
        return False
    if secrets.compare_digest(password, settings.queue_contact_view_password):
        return True
    raise HTTPException(403, "Invalid contact details password")


def _queue_admin_access_granted(request: Request) -> bool:
    """Whether the request includes the shared queue admin password."""
    password = request.headers.get(QUEUE_ADMIN_PASSWORD_HEADER)
    if password is None:
        raise HTTPException(403, "Queue admin password required")
    if secrets.compare_digest(password, settings.queue_admin_action_password):
        return True
    raise HTTPException(403, "Invalid queue admin password")


def _contact_details_cache_headers(reveal_contact_details: bool) -> dict[str, str]:
    """Prevent caching responses that reveal requester contact details."""
    if not reveal_contact_details:
        return {}
    return {
        "Cache-Control": "private, no-store",
        "Vary": QUEUE_CONTACT_PASSWORD_HEADER,
    }


async def _resolve_makerworld_title_quickly(url: str) -> str | None:
    """Resolve a MakerWorld title without blocking queue requests for long."""
    try:
        return await asyncio.wait_for(
            resolve_makerworld_model_title(url),
            timeout=MAKERWORLD_TITLE_RESOLUTION_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning(
            "Timed out resolving MakerWorld title for %s after %.1fs",
            url,
            MAKERWORLD_TITLE_RESOLUTION_TIMEOUT_SECONDS,
        )
    except Exception as exc:
        logger.warning("Failed to resolve MakerWorld title for %s during queue request: %s", url, exc)
    return None


async def _get_next_pending_position(db: AsyncSession, printer_id: int | None) -> int:
    """Get the next queue position for pending items in the same assignment bucket."""
    if printer_id is not None:
        result = await db.execute(
            select(func.max(PrintQueueItem.position))
            .where(PrintQueueItem.printer_id == printer_id)
            .where(PrintQueueItem.status == "pending")
            .where(PrintQueueItem.deleted_at.is_(None))
        )
    else:
        result = await db.execute(
            select(func.max(PrintQueueItem.position))
            .where(PrintQueueItem.printer_id.is_(None))
            .where(PrintQueueItem.status == "pending")
            .where(PrintQueueItem.deleted_at.is_(None))
        )
    return (result.scalar() or 0) + 1


def _active_queue_condition():
    """Only expose queue rows that have not been soft-deleted."""
    return PrintQueueItem.deleted_at.is_(None)


def _apply_deleted_custom_request_tombstone(item: PrintQueueItem) -> None:
    """Soft-delete custom requests so cloud/board nodes can reconcile later."""
    now = datetime.now(timezone.utc)
    item.status = "cancelled"
    item.completed_at = now
    item.deleted_at = now


def _extract_filament_types_from_3mf(file_path: Path, plate_id: int | None = None) -> list[str]:
    """Extract unique filament types from a 3MF file.

    Args:
        file_path: Path to the 3MF file
        plate_id: Optional plate index to filter for (for multi-plate files)

    Returns:
        List of unique filament types (e.g., ["PLA", "PETG"])
    """
    types: set[str] = set()

    try:
        with zipfile.ZipFile(file_path, "r") as zf:
            if "Metadata/slice_info.config" not in zf.namelist():
                return []

            content = zf.read("Metadata/slice_info.config").decode()
            root = ET.fromstring(content)

            if plate_id is not None:
                # Find the plate element with matching index
                for plate_elem in root.findall(".//plate"):
                    plate_index = None
                    for meta in plate_elem.findall("metadata"):
                        if meta.get("key") == "index":
                            try:
                                plate_index = int(meta.get("value", "0"))
                            except ValueError:
                                pass  # Skip plate with unparseable index
                            break

                    if plate_index == plate_id:
                        for filament_elem in plate_elem.findall("filament"):
                            filament_type = filament_elem.get("type", "")
                            used_g = filament_elem.get("used_g", "0")
                            try:
                                used_grams = float(used_g)
                            except (ValueError, TypeError):
                                used_grams = 0
                            if used_grams > 0 and filament_type:
                                types.add(filament_type)
                        break
            else:
                # No plate_id specified - extract all filaments with used_g > 0
                for filament_elem in root.findall(".//filament"):
                    filament_type = filament_elem.get("type", "")
                    used_g = filament_elem.get("used_g", "0")
                    try:
                        used_grams = float(used_g)
                    except (ValueError, TypeError):
                        used_grams = 0
                    if used_grams > 0 and filament_type:
                        types.add(filament_type)

    except Exception as e:
        logger.warning("Failed to extract filament types from %s: %s", file_path, e)

    return sorted(types)


def _extract_print_time_from_3mf(file_path: Path, plate_id: int | None = None) -> int | None:
    """Extract print time (prediction) from a 3MF file.

    Args:
        file_path: Path to the 3MF file
        plate_id: Optional plate index to filter for (for multi-plate files)

    Returns:
        Print time in seconds, or None if not found
    """
    try:
        with zipfile.ZipFile(file_path, "r") as zf:
            if "Metadata/slice_info.config" not in zf.namelist():
                return None

            content = zf.read("Metadata/slice_info.config").decode()
            root = ET.fromstring(content)

            if plate_id is not None:
                for plate_elem in root.findall(".//plate"):
                    plate_index = None
                    for meta in plate_elem.findall("metadata"):
                        if meta.get("key") == "index":
                            try:
                                plate_index = int(meta.get("value", "0"))
                            except ValueError:
                                pass  # Skip plate with unparseable index
                            break

                    if plate_index == plate_id:
                        for meta in plate_elem.findall("metadata"):
                            if meta.get("key") == "prediction":
                                try:
                                    return int(meta.get("value", "0"))
                                except ValueError:
                                    return None
                        break
            else:
                plate_elem = root.find(".//plate")
                if plate_elem is not None:
                    for meta in plate_elem.findall("metadata"):
                        if meta.get("key") == "prediction":
                            try:
                                return int(meta.get("value", "0"))
                            except ValueError:
                                return None
    except Exception as e:
        logger.warning("Failed to extract print time from %s: %s", file_path, e)

    return None


def _enrich_response(item: PrintQueueItem, reveal_contact_details: bool = False) -> PrintQueueItemResponse:
    """Add nested archive/printer/library_file info to response."""
    # Parse ams_mapping from JSON string BEFORE model_validate
    ams_mapping_parsed = None
    if item.ams_mapping:
        try:
            ams_mapping_parsed = json.loads(item.ams_mapping)
        except json.JSONDecodeError:
            ams_mapping_parsed = None

    # Parse required_filament_types from JSON string
    required_filament_types_parsed = None
    if item.required_filament_types:
        try:
            required_filament_types_parsed = json.loads(item.required_filament_types)
        except json.JSONDecodeError:
            required_filament_types_parsed = None

    # Parse filament_overrides from JSON string
    filament_overrides_parsed = None
    if item.filament_overrides:
        try:
            filament_overrides_parsed = json.loads(item.filament_overrides)
        except json.JSONDecodeError:
            filament_overrides_parsed = None

    contact_details_hidden = bool(
        item.custom_request and (item.requester_name or item.contact_email) and not reveal_contact_details
    )

    # Create response with parsed ams_mapping
    item_dict = {
        "id": item.id,
        "printer_id": item.printer_id,
        "target_model": item.target_model,
        "target_location": item.target_location,
        "required_filament_types": required_filament_types_parsed,
        "filament_overrides": filament_overrides_parsed,
        "waiting_reason": item.waiting_reason,
        "archive_id": item.archive_id,
        "library_file_id": item.library_file_id,
        "custom_request": item.custom_request,
        "student_id": item.student_id,
        "requester_name": None if contact_details_hidden else item.requester_name,
        "contact_email": None if contact_details_hidden else item.contact_email,
        "contact_details_hidden": contact_details_hidden,
        "request_model_url": item.request_model_url,
        "request_model_title": item.request_model_title,
        "request_notes": item.request_notes,
        "position": item.position,
        "scheduled_time": item.scheduled_time,
        "require_previous_success": item.require_previous_success,
        "auto_off_after": item.auto_off_after,
        "manual_start": item.manual_start,
        "ams_mapping": ams_mapping_parsed,
        "plate_id": item.plate_id,
        "bed_levelling": item.bed_levelling,
        "flow_cali": item.flow_cali,
        "vibration_cali": item.vibration_cali,
        "layer_inspect": item.layer_inspect,
        "timelapse": item.timelapse,
        "use_ams": item.use_ams,
        "status": item.status,
        "started_at": item.started_at,
        "completed_at": item.completed_at,
        "error_message": item.error_message,
        "created_at": item.created_at,
        # User tracking (Issue #206)
        "created_by_id": item.created_by_id,
        "created_by_username": item.created_by.username if item.created_by else None,
    }
    response = PrintQueueItemResponse(**item_dict)
    if item.archive:
        response.archive_name = item.archive.print_name or item.archive.filename
        response.archive_thumbnail = item.archive.thumbnail_path
        response.print_time_seconds = item.archive.print_time_seconds
        response.filament_used_grams = item.archive.filament_used_grams
        response.filament_type = item.archive.filament_type
        response.filament_color = item.archive.filament_color
        response.layer_height = item.archive.layer_height
        response.nozzle_diameter = item.archive.nozzle_diameter
        response.sliced_for_model = item.archive.sliced_for_model
        if item.plate_id:
            archive_path = settings.base_dir / item.archive.file_path
            if archive_path.exists():
                plate_time = _extract_print_time_from_3mf(archive_path, item.plate_id)
                plate_weight = sum(f["used_g"] for f in extract_filament_usage_from_3mf(archive_path, item.plate_id))
                if plate_time is not None:
                    response.print_time_seconds = plate_time
                if plate_weight > 0:
                    response.filament_used_grams = plate_weight
    if item.library_file:
        response.library_file_name = (
            item.library_file.file_metadata.get("print_name") if item.library_file.file_metadata else None
        )
        if not response.library_file_name:
            response.library_file_name = item.library_file.filename
        response.library_file_thumbnail = item.library_file.thumbnail_path
        # Get metadata from library file if no archive
        if not item.archive and item.library_file.file_metadata:
            response.print_time_seconds = item.library_file.file_metadata.get("print_time_seconds")
            response.filament_used_grams = item.library_file.file_metadata.get("filament_used_grams")
            response.filament_type = item.library_file.file_metadata.get("filament_type")
            response.filament_color = item.library_file.file_metadata.get("filament_color")
            response.layer_height = item.library_file.file_metadata.get("layer_height")
            response.nozzle_diameter = item.library_file.file_metadata.get("nozzle_diameter")
            response.sliced_for_model = item.library_file.file_metadata.get("sliced_for_model")
        if item.plate_id:
            lib_path = Path(item.library_file.file_path)
            library_file_path = lib_path if lib_path.is_absolute() else settings.base_dir / item.library_file.file_path
            if library_file_path.exists():
                plate_time = _extract_print_time_from_3mf(library_file_path, item.plate_id)
                plate_weight = sum(
                    f["used_g"] for f in extract_filament_usage_from_3mf(library_file_path, item.plate_id)
                )
                if plate_time is not None:
                    response.print_time_seconds = plate_time
                if plate_weight > 0:
                    response.filament_used_grams = plate_weight
    if item.printer:
        response.printer_name = item.printer.name
    return response


async def _populate_missing_request_model_titles(items: list[PrintQueueItem], db: AsyncSession) -> None:
    """Resolve and persist readable titles for manual MakerWorld requests."""
    pending_items = [
        item
        for item in items
        if item.custom_request
        and item.request_model_url
        and (
            not item.request_model_title
            or is_exact_makerworld_slug_title(item.request_model_title, item.request_model_url)
        )
    ]
    if not pending_items:
        return

    titles = await asyncio.gather(
        *(_resolve_makerworld_title_quickly(item.request_model_url) for item in pending_items),
    )

    updated = False
    for item, resolved_title in zip(pending_items, titles):
        if not resolved_title and is_exact_makerworld_slug_title(item.request_model_title, item.request_model_url):
            item.request_model_title = None
            updated = True
            continue
        if resolved_title and resolved_title != item.request_model_title:
            item.request_model_title = resolved_title
            updated = True

    if updated:
        await db.commit()


@router.get("/", response_model=list[PrintQueueItemResponse])
async def list_queue(
    request: Request,
    printer_id: int | None = Query(None, description="Filter by printer (-1 for unassigned)"),
    status: str | None = Query(None, description="Filter by status"),
    target_model: str | None = Query(
        None, description="Filter by target model (also includes model-based items when combined with printer_id)"
    ),
    db: AsyncSession = Depends(get_db),
    _: User | None = RequirePermissionIfAuthEnabled(Permission.QUEUE_READ),
):
    """List all queue items, optionally filtered by printer or status."""
    reveal_contact_details = _contact_details_visible(request)
    query = (
        select(PrintQueueItem)
        .options(
            selectinload(PrintQueueItem.archive),
            selectinload(PrintQueueItem.printer),
            selectinload(PrintQueueItem.library_file),
            selectinload(PrintQueueItem.created_by),
        )
        .where(_active_queue_condition())
        .order_by(PrintQueueItem.printer_id.nulls_first(), PrintQueueItem.position)
    )

    if printer_id is not None:
        if printer_id == -1:
            # Special value: filter for unassigned items
            query = query.where(PrintQueueItem.printer_id.is_(None))
        else:
            # Resolve effective model: prefer explicit param, fall back to printer's DB model.
            # This ensures model-based "Any X" items are returned even when the frontend
            # doesn't send target_model (e.g. printer.model is NULL on the client side).
            effective_model = target_model
            if not effective_model:
                printer_row = (
                    await db.execute(select(Printer.model).where(Printer.id == printer_id))
                ).scalar_one_or_none()
                effective_model = printer_row

            if effective_model:
                # Include both printer-specific items AND model-based (unassigned) items
                query = query.where(
                    or_(
                        PrintQueueItem.printer_id == printer_id,
                        and_(
                            PrintQueueItem.printer_id.is_(None),
                            func.lower(PrintQueueItem.target_model) == effective_model.lower(),
                        ),
                    )
                )
            else:
                query = query.where(PrintQueueItem.printer_id == printer_id)
    elif target_model:
        query = query.where(func.lower(PrintQueueItem.target_model) == target_model.lower())
    if status:
        query = query.where(PrintQueueItem.status == status)

    result = await db.execute(query)
    items = result.scalars().all()
    await _populate_missing_request_model_titles(items, db)
    response_items = [_enrich_response(item, reveal_contact_details=reveal_contact_details) for item in items]
    if reveal_contact_details:
        return JSONResponse(
            content=jsonable_encoder(response_items),
            headers=_contact_details_cache_headers(reveal_contact_details),
        )
    return response_items


@router.post("/", response_model=PrintQueueItemResponse)
async def add_to_queue(
    request: Request,
    data: PrintQueueItemCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User | None = RequirePermissionIfAuthEnabled(Permission.QUEUE_CREATE),
):
    """Add an item to the print queue."""
    # Normalize target_model (e.g., "Bambu Lab X1E" / "C13" -> "X1E")
    target_model_norm = None
    if data.target_model:
        target_model_norm = (
            normalize_printer_model(data.target_model)
            or normalize_printer_model_id(data.target_model)
            or data.target_model
        )

    is_custom_request = data.custom_request

    if is_custom_request:
        if not data.student_id or not data.student_id.strip():
            raise HTTPException(400, "Student ID is required for custom requests")
        if not data.requester_name or not data.requester_name.strip():
            raise HTTPException(400, "Requester name is required for custom requests")
        if not data.contact_email or not data.contact_email.strip():
            raise HTTPException(400, "Contact email is required for custom requests")
        if not _is_valid_contact_email(data.contact_email):
            raise HTTPException(400, "Please provide a valid contact email")
        if not data.request_model_url or not data.request_model_url.strip():
            raise HTTPException(400, "MakerWorld URL is required for custom requests")
        if not _is_valid_makerworld_url(data.request_model_url):
            raise HTTPException(400, "Custom requests must use a MakerWorld China URL")
    elif not data.archive_id and not data.library_file_id:
        raise HTTPException(400, "Either archive_id or library_file_id must be provided")

    # Cannot specify both printer_id and target_model
    if data.printer_id and target_model_norm:
        raise HTTPException(400, "Cannot specify both printer_id and target_model")

    # Validate printer exists (if assigned)
    if data.printer_id is not None:
        result = await db.execute(select(Printer).where(Printer.id == data.printer_id))
        if not result.scalar_one_or_none():
            raise HTTPException(400, "Printer not found")

    # Validate target_model has active printers
    if target_model_norm:
        result = await db.execute(
            select(Printer).where(Printer.model == target_model_norm).where(Printer.is_active == True)  # noqa: E712
        )
        if not result.scalars().first():
            raise HTTPException(400, f"No active printers for model: {target_model_norm}")

    archive = None
    if data.archive_id:
        result = await db.execute(select(PrintArchive).where(PrintArchive.id == data.archive_id))
        archive = result.scalar_one_or_none()
        if not archive:
            raise HTTPException(400, "Archive not found")

    library_file = None
    if data.library_file_id:
        result = await db.execute(select(LibraryFile).where(LibraryFile.id == data.library_file_id))
        library_file = result.scalar_one_or_none()
        if not library_file:
            raise HTTPException(400, "Library file not found")

    required_filament_types = None
    if target_model_norm and not is_custom_request:
        file_path = None
        if archive:
            file_path = settings.base_dir / archive.file_path
        elif library_file:
            lib_path = Path(library_file.file_path)
            file_path = lib_path if lib_path.is_absolute() else settings.base_dir / library_file.file_path

        if file_path and file_path.exists():
            filament_types = _extract_filament_types_from_3mf(file_path, data.plate_id)
            if filament_types:
                required_filament_types = json.dumps(filament_types)
                logger.info("Extracted filament types for model-based queue: %s", filament_types)

    filament_overrides_json = None
    if data.filament_overrides and target_model_norm:
        filament_overrides_json = json.dumps(data.filament_overrides)
        override_types = sorted({o["type"] for o in data.filament_overrides if "type" in o})
        if override_types:
            existing_types = set(json.loads(required_filament_types)) if required_filament_types else set()
            all_types = existing_types | set(override_types)
            required_filament_types = json.dumps(sorted(all_types))

    next_position = await _get_next_pending_position(db, data.printer_id)

    item = PrintQueueItem(
        printer_id=data.printer_id,
        target_model=target_model_norm,
        target_location=data.target_location,
        required_filament_types=required_filament_types,
        filament_overrides=filament_overrides_json,
        archive_id=data.archive_id,
        library_file_id=data.library_file_id,
        custom_request=is_custom_request,
        student_id=data.student_id.strip() if data.student_id else None,
        requester_name=data.requester_name.strip() if data.requester_name else None,
        contact_email=data.contact_email.strip() if data.contact_email else None,
        request_model_url=data.request_model_url.strip() if data.request_model_url else None,
        request_model_title=None,
        request_notes=data.request_notes.strip() if data.request_notes else None,
        scheduled_time=data.scheduled_time,
        require_previous_success=data.require_previous_success,
        auto_off_after=data.auto_off_after,
        manual_start=True if is_custom_request else data.manual_start,
        ams_mapping=json.dumps(data.ams_mapping) if data.ams_mapping else None,
        plate_id=data.plate_id,
        bed_levelling=data.bed_levelling,
        flow_cali=data.flow_cali,
        vibration_cali=data.vibration_cali,
        layer_inspect=data.layer_inspect,
        timelapse=data.timelapse,
        use_ams=data.use_ams,
        position=next_position,
        status="pending",
        created_by_id=current_user.id if current_user else None,
    )
    if item.custom_request and item.request_model_url:
        item.request_model_title = await _resolve_makerworld_title_quickly(item.request_model_url)
    db.add(item)
    await db.commit()
    await db.refresh(item)

    # Load relationships for response
    await db.refresh(item, ["archive", "printer", "library_file", "created_by"])

    source_name = (
        "custom request"
        if is_custom_request
        else f"archive {data.archive_id}"
        if data.archive_id
        else f"library file {data.library_file_id}"
    )
    target_desc = data.printer_id or (f"model {target_model_norm}" if target_model_norm else "unassigned")
    logger.info("Added %s to queue for %s", source_name, target_desc)

    if not is_custom_request:
        try:
            from backend.app.services.mqtt_relay import mqtt_relay

            await mqtt_relay.on_queue_job_added(
                job_id=item.id,
                filename=item.archive.filename if item.archive else "",
                printer_id=item.printer_id,
                printer_name=item.printer.name if item.printer else None,
            )
        except Exception:
            pass  # Don't fail queue add if MQTT fails

        try:
            job_name = (
                item.archive.filename
                if item.archive
                else item.library_file.filename
                if item.library_file
                else f"Job #{item.id}"
            )
            job_name = job_name.replace(".gcode.3mf", "").replace(".3mf", "")
            target = (
                item.printer.name if item.printer else (f"Any {item.target_model}" if target_model_norm else "Unassigned")
            )
            await notification_service.on_queue_job_added(
                job_name=job_name,
                target=target,
                db=db,
                printer_id=item.printer_id,
                printer_name=item.printer.name if item.printer else None,
            )
        except Exception:
            pass  # Don't fail queue add if notification fails

    return _enrich_response(item, reveal_contact_details=_contact_details_visible(request))


@router.patch("/bulk", response_model=PrintQueueBulkUpdateResponse)
async def bulk_update_queue_items(
    data: PrintQueueBulkUpdate,
    db: AsyncSession = Depends(get_db),
    auth_result: tuple[User | None, bool] = Depends(
        require_ownership_permission(
            Permission.QUEUE_UPDATE_ALL,
            Permission.QUEUE_UPDATE_OWN,
        )
    ),
):
    """Bulk update multiple queue items with the same values.

    Only pending items can be updated. Non-pending items are skipped.
    Items not owned by the user are also skipped (unless user has *_all permission).
    """
    user, can_modify_all = auth_result

    if not data.item_ids:
        raise HTTPException(400, "No item IDs provided")

    # Get fields to update (exclude item_ids and unset fields)
    update_data = data.model_dump(exclude={"item_ids"}, exclude_unset=True)
    if not update_data:
        raise HTTPException(400, "No fields to update")

    # Validate printer_id if being changed
    if "printer_id" in update_data and update_data["printer_id"] is not None:
        result = await db.execute(select(Printer).where(Printer.id == update_data["printer_id"]))
        if not result.scalar_one_or_none():
            raise HTTPException(400, "Printer not found")

    # Fetch all items
    result = await db.execute(
        select(PrintQueueItem).where(PrintQueueItem.id.in_(data.item_ids)).where(_active_queue_condition())
    )
    items = result.scalars().all()

    updated_count = 0
    skipped_count = 0

    for item in items:
        if item.status != "pending":
            skipped_count += 1
            continue

        # Ownership check
        if not can_modify_all and item.created_by_id != user.id:
            skipped_count += 1
            continue

        for field, value in update_data.items():
            setattr(item, field, value)
        updated_count += 1

    await db.commit()

    logger.info("Bulk updated %s queue items, skipped %s", updated_count, skipped_count)
    return PrintQueueBulkUpdateResponse(
        updated_count=updated_count,
        skipped_count=skipped_count,
        message=f"Updated {updated_count} items"
        + (f", skipped {skipped_count} non-pending/not-owned" if skipped_count else ""),
    )


@router.get("/{item_id}", response_model=PrintQueueItemResponse)
async def get_queue_item(
    request: Request,
    item_id: int,
    db: AsyncSession = Depends(get_db),
    _: User | None = RequirePermissionIfAuthEnabled(Permission.QUEUE_READ),
):
    """Get a specific queue item."""
    result = await db.execute(
        select(PrintQueueItem)
        .options(
            selectinload(PrintQueueItem.archive),
            selectinload(PrintQueueItem.printer),
            selectinload(PrintQueueItem.library_file),
            selectinload(PrintQueueItem.created_by),
        )
        .where(PrintQueueItem.id == item_id)
        .where(_active_queue_condition())
    )
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(404, "Queue item not found")
    await _populate_missing_request_model_titles([item], db)
    reveal_contact_details = _contact_details_visible(request)
    response_item = _enrich_response(item, reveal_contact_details=reveal_contact_details)
    if reveal_contact_details:
        return JSONResponse(
            content=jsonable_encoder(response_item),
            headers=_contact_details_cache_headers(reveal_contact_details),
        )
    return response_item


@router.patch("/{item_id}", response_model=PrintQueueItemResponse)
async def update_queue_item(
    request: Request,
    item_id: int,
    data: PrintQueueItemUpdate,
    db: AsyncSession = Depends(get_db),
    auth_result: tuple[User | None, bool] = Depends(
        require_ownership_permission(
            Permission.QUEUE_UPDATE_ALL,
            Permission.QUEUE_UPDATE_OWN,
        )
    ),
):
    """Update a queue item."""
    user, can_modify_all = auth_result

    result = await db.execute(select(PrintQueueItem).where(PrintQueueItem.id == item_id).where(_active_queue_condition()))
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(404, "Queue item not found")

    # Ownership check
    if not can_modify_all:
        if item.created_by_id != user.id:
            raise HTTPException(403, "You can only update your own queue items")

    if item.status != "pending":
        raise HTTPException(400, "Can only update pending items")

    update_data = data.model_dump(exclude_unset=True)

    # Normalize target_model if being updated
    if "target_model" in update_data and update_data["target_model"]:
        update_data["target_model"] = (
            normalize_printer_model(update_data["target_model"])
            or normalize_printer_model_id(update_data["target_model"])
            or update_data["target_model"]
        )

    # Cannot specify both printer_id and target_model
    new_printer_id = update_data.get("printer_id", item.printer_id)
    new_target_model = update_data.get("target_model", item.target_model)
    if new_printer_id and new_target_model:
        raise HTTPException(400, "Cannot specify both printer_id and target_model")

    # Validate new printer_id if being changed (and not None)
    if "printer_id" in update_data and update_data["printer_id"] is not None:
        result = await db.execute(select(Printer).where(Printer.id == update_data["printer_id"]))
        if not result.scalar_one_or_none():
            raise HTTPException(400, "Printer not found")

    # Validate target_model has active printers
    if "target_model" in update_data and update_data["target_model"]:
        result = await db.execute(
            select(Printer).where(Printer.model == update_data["target_model"]).where(Printer.is_active == True)  # noqa: E712
        )
        if not result.scalars().first():
            raise HTTPException(400, f"No active printers for model: {update_data['target_model']}")

    if item.custom_request:
        new_student_id = update_data.get("student_id", item.student_id)
        new_requester_name = update_data.get("requester_name", item.requester_name)
        new_contact_email = update_data.get("contact_email", item.contact_email)
        new_request_model_url = update_data.get("request_model_url", item.request_model_url)
        if not new_student_id or not str(new_student_id).strip():
            raise HTTPException(400, "Student ID is required for custom requests")
        if not new_requester_name or not str(new_requester_name).strip():
            raise HTTPException(400, "Requester name is required for custom requests")
        if not new_contact_email or not str(new_contact_email).strip():
            raise HTTPException(400, "Contact email is required for custom requests")
        if not _is_valid_contact_email(str(new_contact_email)):
            raise HTTPException(400, "Please provide a valid contact email")
        if not new_request_model_url or not str(new_request_model_url).strip():
            raise HTTPException(400, "MakerWorld URL is required for custom requests")
        if not _is_valid_makerworld_url(str(new_request_model_url)):
            raise HTTPException(400, "Custom requests must use a MakerWorld China URL")

    # Serialize ams_mapping to JSON for TEXT column storage
    if "ams_mapping" in update_data:
        update_data["ams_mapping"] = json.dumps(update_data["ams_mapping"]) if update_data["ams_mapping"] else None

    # Serialize filament_overrides to JSON for TEXT column storage
    if "filament_overrides" in update_data:
        update_data["filament_overrides"] = (
            json.dumps(update_data["filament_overrides"]) if update_data["filament_overrides"] else None
        )

    if "student_id" in update_data and update_data["student_id"] is not None:
        update_data["student_id"] = update_data["student_id"].strip()
    if "requester_name" in update_data and update_data["requester_name"] is not None:
        update_data["requester_name"] = update_data["requester_name"].strip()
    if "contact_email" in update_data and update_data["contact_email"] is not None:
        update_data["contact_email"] = update_data["contact_email"].strip()
    if "request_model_url" in update_data and update_data["request_model_url"] is not None:
        update_data["request_model_url"] = update_data["request_model_url"].strip()
        if item.custom_request and update_data["request_model_url"]:
            update_data["request_model_title"] = await _resolve_makerworld_title_quickly(
                update_data["request_model_url"]
            )
    if "request_notes" in update_data and update_data["request_notes"] is not None:
        update_data["request_notes"] = update_data["request_notes"].strip()
    if item.custom_request:
        update_data["manual_start"] = True

    for field, value in update_data.items():
        setattr(item, field, value)

    await db.commit()
    await db.refresh(item, ["archive", "printer", "library_file", "created_by"])

    logger.info("Updated queue item %s", item_id)
    return _enrich_response(item, reveal_contact_details=_contact_details_visible(request))


@router.patch("/{item_id}/status", response_model=PrintQueueItemResponse)
async def update_custom_queue_item_status(
    request: Request,
    item_id: int,
    data: PrintQueueItemStatusUpdate,
    db: AsyncSession = Depends(get_db),
    auth_result: tuple[User | None, bool] = Depends(
        require_ownership_permission(
            Permission.QUEUE_UPDATE_ALL,
            Permission.QUEUE_UPDATE_OWN,
        )
    ),
):
    """Update status for manual queue registrations."""
    user, can_modify_all = auth_result

    result = await db.execute(select(PrintQueueItem).where(PrintQueueItem.id == item_id).where(_active_queue_condition()))
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(404, "Queue item not found")

    if not item.custom_request:
        raise HTTPException(400, "Status updates on this endpoint are only supported for custom requests")

    # Custom request status changes are operational workflow actions.
    # Any user with queue update permission can move them through the queue,
    # even when the request was created by another user or predates ownership tracking.

    previous_status = item.status
    now = datetime.now(timezone.utc)

    if data.status == "pending":
        item.status = "pending"
        item.started_at = None
        item.completed_at = None
        item.error_message = None
        if previous_status != "pending":
            item.position = await _get_next_pending_position(db, item.printer_id)
    elif data.status == "printing":
        item.status = "printing"
        item.started_at = item.started_at or now
        item.completed_at = None
        item.error_message = None
    else:
        item.status = "completed"
        item.started_at = item.started_at or now
        item.completed_at = now
        item.error_message = None

    await db.commit()
    await db.refresh(item, ["archive", "printer", "library_file", "created_by"])

    logger.info("Updated custom queue item %s status to %s", item_id, data.status)
    return _enrich_response(item, reveal_contact_details=_contact_details_visible(request))


@router.post("/contact-access", response_model=QueueContactAccessResponse)
async def validate_queue_contact_access(
    data: QueueContactAccessRequest,
    _: User | None = RequirePermissionIfAuthEnabled(Permission.QUEUE_READ),
):
    """Validate the password used to reveal protected queue contact details."""
    if not secrets.compare_digest(data.password, settings.queue_contact_view_password):
        raise HTTPException(403, "Invalid contact details password")
    return QueueContactAccessResponse(success=True)


@router.post("/admin-access", response_model=QueueContactAccessResponse)
async def validate_queue_admin_access(
    data: QueueContactAccessRequest,
    _: User | None = Depends(require_auth_if_enabled),
):
    """Validate the shared password used for queue-admin actions."""
    if not secrets.compare_digest(data.password, settings.queue_admin_action_password):
        raise HTTPException(403, "Invalid queue admin password")
    return QueueContactAccessResponse(success=True)


@router.delete("/{item_id}")
async def delete_queue_item(
    item_id: int,
    request: Request,
    db: AsyncSession = Depends(get_db),
    auth_result: tuple[User | None, bool] = Depends(
        require_ownership_permission(
            Permission.QUEUE_DELETE_ALL,
            Permission.QUEUE_DELETE_OWN,
        )
    ),
):
    """Remove an item from the queue."""
    user, can_modify_all = auth_result

    result = await db.execute(select(PrintQueueItem).where(PrintQueueItem.id == item_id).where(_active_queue_condition()))
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(404, "Queue item not found")

    if await is_auth_enabled(db):
        if not can_modify_all and item.created_by_id != user.id:
            raise HTTPException(403, "You can only delete your own queue items")
    else:
        _queue_admin_access_granted(request)

    if item.status == "printing" and not item.custom_request:
        raise HTTPException(400, "Cannot delete item that is currently printing")

    if item.custom_request:
        _apply_deleted_custom_request_tombstone(item)
    else:
        await db.delete(item)
    await db.commit()

    logger.info("Deleted queue item %s", item_id)
    return {"message": "Queue item deleted"}


@router.post("/reorder")
async def reorder_queue(
    data: PrintQueueReorder,
    db: AsyncSession = Depends(get_db),
    _: User | None = RequirePermissionIfAuthEnabled(Permission.QUEUE_UPDATE_ALL),
):
    """Bulk update positions for queue items."""
    for reorder_item in data.items:
        result = await db.execute(
            select(PrintQueueItem).where(PrintQueueItem.id == reorder_item.id).where(_active_queue_condition())
        )
        item = result.scalar_one_or_none()
        if item and item.status == "pending":
            item.position = reorder_item.position

    await db.commit()
    logger.info("Reordered %s queue items", len(data.items))
    return {"message": f"Reordered {len(data.items)} items"}


@router.post("/{item_id}/cancel")
async def cancel_queue_item(
    item_id: int,
    db: AsyncSession = Depends(get_db),
    auth_result: tuple[User | None, bool] = Depends(
        require_ownership_permission(
            Permission.QUEUE_UPDATE_ALL,
            Permission.QUEUE_UPDATE_OWN,
        )
    ),
):
    """Cancel a pending queue item."""
    user, can_modify_all = auth_result

    result = await db.execute(select(PrintQueueItem).where(PrintQueueItem.id == item_id).where(_active_queue_condition()))
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(404, "Queue item not found")

    # Ownership check
    if not can_modify_all:
        if item.created_by_id != user.id:
            raise HTTPException(403, "You can only cancel your own queue items")

    if item.status not in ("pending",):
        raise HTTPException(400, f"Cannot cancel item with status '{item.status}'")

    item.status = "cancelled"
    item.completed_at = datetime.now(timezone.utc)
    await db.commit()

    logger.info("Cancelled queue item %s", item_id)
    return {"message": "Queue item cancelled"}


@router.post("/{item_id}/stop")
async def stop_queue_item(
    item_id: int,
    db: AsyncSession = Depends(get_db),
    _: User | None = RequirePermissionIfAuthEnabled(Permission.QUEUE_UPDATE_ALL),
):
    """Stop an actively printing queue item."""
    import asyncio

    from backend.app.models.smart_plug import SmartPlug
    from backend.app.services.printer_manager import printer_manager
    from backend.app.services.tasmota import tasmota_service

    result = await db.execute(select(PrintQueueItem).where(PrintQueueItem.id == item_id).where(_active_queue_condition()))
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(404, "Queue item not found")

    if item.status != "printing":
        raise HTTPException(400, f"Can only stop items that are printing, current status: '{item.status}'")

    # Capture values we need for background task
    printer_id = item.printer_id
    auto_off_after = item.auto_off_after

    # Try to send stop command to printer
    stop_sent = False
    try:
        stop_sent = printer_manager.stop_print(printer_id)
        if not stop_sent:
            logger.warning("stop_print returned False for printer %s - printer may not be connected", printer_id)
    except Exception as e:
        logger.error("Error sending stop command for queue item %s: %s", item_id, e)

    # Mark this printer as user-stopped BEFORE the first await so that if the
    # MQTT on_print_complete callback fires during the db.commit() yield the flag
    # is already set and the "failed" status will be correctly overridden to
    # "cancelled" (preventing a spurious "print failed" notification).
    try:
        from backend.app.main import mark_printer_stopped_by_user

        mark_printer_stopped_by_user(printer_id)
    except Exception as _mark_err:
        logger.warning("Failed to mark printer %s as user-stopped: %s", printer_id, _mark_err)

    # Update queue item status regardless - if printer is off, print is already stopped
    item.status = "cancelled"
    item.completed_at = datetime.now(timezone.utc)
    item.error_message = "Stopped by user" if stop_sent else "Stopped by user (printer was offline)"
    await db.commit()

    # Get smart plug info if auto-off is enabled
    plug_ip = None
    if auto_off_after:
        result = await db.execute(select(SmartPlug).where(SmartPlug.printer_id == printer_id))
        plug = result.scalar_one_or_none()
        if plug and plug.enabled:
            plug_ip = plug.ip_address

    logger.info("Stopped printing queue item %s (stop command sent: %s)", item_id, stop_sent)

    # Schedule background task for cooldown + power off
    if plug_ip:

        async def cooldown_and_poweroff():
            logger.info("Auto-off: Waiting for printer %s to cool down before power off...", printer_id)
            await printer_manager.wait_for_cooldown(printer_id, target_temp=50.0, timeout=600)
            # Re-fetch plug since we're in a new async context
            from backend.app.core.database import async_session

            async with async_session() as new_db:
                result = await new_db.execute(select(SmartPlug).where(SmartPlug.printer_id == printer_id))
                plug = result.scalar_one_or_none()
                if plug and plug.enabled:
                    logger.info("Auto-off: Powering off printer %s", printer_id)
                    await tasmota_service.turn_off(plug)

        asyncio.create_task(cooldown_and_poweroff())

    return {"message": "Print stopped" if stop_sent else "Queue item cancelled (printer was offline)"}


@router.post("/{item_id}/start")
async def start_queue_item(
    item_id: int,
    db: AsyncSession = Depends(get_db),
    _: User | None = RequirePermissionIfAuthEnabled(Permission.QUEUE_UPDATE_OWN),
):
    """Manually start a staged (manual_start) queue item.

    This clears the manual_start flag so the scheduler will pick it up,
    or starts immediately if the printer is ready.
    """
    result = await db.execute(
        select(PrintQueueItem)
        .options(selectinload(PrintQueueItem.archive), selectinload(PrintQueueItem.printer))
        .where(PrintQueueItem.id == item_id)
        .where(_active_queue_condition())
    )
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(404, "Queue item not found")

    if item.status != "pending":
        raise HTTPException(400, f"Can only start pending items, current status: '{item.status}'")

    # Clear manual_start flag so scheduler picks it up
    item.manual_start = False
    await db.commit()
    await db.refresh(item, ["archive", "printer", "library_file", "created_by"])

    logger.info("Manually started queue item %s (cleared manual_start flag)", item_id)
    return _enrich_response(item)
