"""Periodic pull-based queue sync between the cloud server and the board."""

from __future__ import annotations

import asyncio
import logging
from datetime import datetime, timezone

import httpx
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from backend.app.core.config import settings
from backend.app.core.database import async_session
from backend.app.models.print_queue import PrintQueueItem
from backend.app.models.printer import Printer
from backend.app.schemas.queue_sync import QueueSyncCustomRequestPayload, QueueSyncExportResponse

logger = logging.getLogger(__name__)
_queue_sync_task: asyncio.Task | None = None


def queue_sync_enabled() -> bool:
    """Return True when queue sync has enough configuration to run."""
    return bool(settings.queue_sync_remote_base_url.strip() and settings.queue_sync_shared_secret.strip())


def _normalize_dt(value: datetime | None) -> datetime | None:
    if value is None:
        return None
    if value.tzinfo is None:
        return value.replace(tzinfo=timezone.utc)
    return value.astimezone(timezone.utc)


def _version_ts(updated_at: datetime | None, deleted_at: datetime | None, created_at: datetime | None) -> datetime:
    candidates = [dt for dt in (_normalize_dt(updated_at), _normalize_dt(deleted_at), _normalize_dt(created_at)) if dt]
    return max(candidates) if candidates else datetime.min.replace(tzinfo=timezone.utc)


async def merge_remote_custom_requests(
    db: AsyncSession, items: list[QueueSyncCustomRequestPayload]
) -> dict[str, int]:
    """Apply remote custom-request rows using last-write-wins timestamps."""
    stats = {"created": 0, "updated": 0, "deleted": 0, "skipped": 0}
    if not items:
        return stats

    existing_rows = await db.execute(
        select(PrintQueueItem)
        .where(PrintQueueItem.custom_request == True)  # noqa: E712
        .where(PrintQueueItem.sync_uuid.in_([item.sync_uuid for item in items]))
    )
    existing_by_uuid = {row.sync_uuid: row for row in existing_rows.scalars().all() if row.sync_uuid}

    printer_rows = await db.execute(select(Printer.id))
    known_printer_ids = set(printer_rows.scalars().all())

    for remote_item in items:
        local_item = existing_by_uuid.get(remote_item.sync_uuid)
        remote_version = _version_ts(remote_item.updated_at, remote_item.deleted_at, remote_item.created_at)
        created_new = False

        if local_item is None:
            if remote_item.deleted_at is not None:
                stats["skipped"] += 1
                continue

            local_item = PrintQueueItem(
                sync_uuid=remote_item.sync_uuid,
                custom_request=True,
                archive_id=None,
                library_file_id=None,
                target_model=None,
                target_location=None,
                required_filament_types=None,
                waiting_reason=None,
                filament_overrides=None,
                require_previous_success=False,
                auto_off_after=False,
                ams_mapping=None,
                plate_id=None,
                bed_levelling=True,
                flow_cali=False,
                vibration_cali=True,
                layer_inspect=False,
                timelapse=False,
                use_ams=True,
                created_by_id=None,
            )
            db.add(local_item)
            existing_by_uuid[remote_item.sync_uuid] = local_item
            stats["created"] += 1
            created_new = True
        else:
            local_version = _version_ts(local_item.updated_at, local_item.deleted_at, local_item.created_at)
            if remote_version <= local_version:
                stats["skipped"] += 1
                continue

        local_item.student_id = remote_item.student_id
        local_item.requester_name = remote_item.requester_name
        local_item.contact_email = remote_item.contact_email
        local_item.request_model_url = remote_item.request_model_url
        local_item.request_model_title = remote_item.request_model_title
        local_item.request_notes = remote_item.request_notes
        local_item.printer_id = remote_item.printer_id if remote_item.printer_id in known_printer_ids else None
        local_item.position = remote_item.position
        local_item.scheduled_time = remote_item.scheduled_time
        local_item.manual_start = remote_item.manual_start
        local_item.status = remote_item.status
        local_item.started_at = remote_item.started_at
        local_item.completed_at = remote_item.completed_at
        local_item.created_at = remote_item.created_at
        local_item.updated_at = remote_item.updated_at
        local_item.deleted_at = remote_item.deleted_at

        if remote_item.deleted_at is not None:
            local_item.status = "cancelled"
            stats["deleted"] += 1
        elif not created_new:
            stats["updated"] += 1

    return stats


async def sync_queue_once() -> dict[str, int] | None:
    """Fetch remote custom requests and merge them into the local database."""
    remote_base_url = settings.queue_sync_remote_base_url.strip().rstrip("/")
    if not remote_base_url:
        return None

    endpoint = f"{remote_base_url}{settings.api_prefix}/queue-sync/custom-requests"
    headers = {"X-Queue-Sync-Secret": settings.queue_sync_shared_secret}

    async with httpx.AsyncClient(timeout=20.0, follow_redirects=True, trust_env=False) as client:
        response = await client.get(endpoint, headers=headers)
        response.raise_for_status()
        payload = QueueSyncExportResponse.model_validate(response.json())

    async with async_session() as db:
        stats = await merge_remote_custom_requests(db, payload.items)
        await db.commit()
        return stats


async def _queue_sync_loop() -> None:
    remote_base_url = settings.queue_sync_remote_base_url.strip().rstrip("/")
    interval_seconds = max(5, settings.queue_sync_interval_seconds)
    logger.info("Queue sync enabled: peer=%s interval=%ss", remote_base_url, interval_seconds)

    while True:
        try:
            stats = await sync_queue_once()
            if stats and (stats["created"] or stats["updated"] or stats["deleted"]):
                logger.info(
                    "Queue sync merged custom requests: created=%s updated=%s deleted=%s skipped=%s",
                    stats["created"],
                    stats["updated"],
                    stats["deleted"],
                    stats["skipped"],
                )
        except asyncio.CancelledError:
            raise
        except Exception as exc:
            logger.warning("Queue sync failed: %s", exc)

        await asyncio.sleep(interval_seconds)


def start_queue_sync() -> None:
    """Start the background queue sync task when configured."""
    global _queue_sync_task
    if _queue_sync_task or not queue_sync_enabled():
        return
    _queue_sync_task = asyncio.create_task(_queue_sync_loop())


def stop_queue_sync() -> None:
    """Stop the background queue sync task."""
    global _queue_sync_task
    if _queue_sync_task:
        _queue_sync_task.cancel()
        _queue_sync_task = None
