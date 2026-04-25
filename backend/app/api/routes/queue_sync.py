"""Internal queue synchronization endpoints for cloud/board reconciliation."""

import secrets
from datetime import datetime, timezone

from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from backend.app.core.config import settings
from backend.app.core.database import get_db
from backend.app.models.print_queue import PrintQueueItem
from backend.app.schemas.queue_sync import QueueSyncCustomRequestPayload, QueueSyncExportResponse

router = APIRouter(prefix="/queue-sync", tags=["queue-sync"])
QUEUE_SYNC_SECRET_HEADER = "X-Queue-Sync-Secret"


def _validate_queue_sync_secret(secret: str | None) -> None:
    configured_secret = settings.queue_sync_shared_secret.strip()
    if not configured_secret:
        raise HTTPException(503, "Queue sync secret is not configured")
    if secret is None or not secrets.compare_digest(secret, configured_secret):
        raise HTTPException(403, "Invalid queue sync secret")


def _to_sync_payload(item: PrintQueueItem) -> QueueSyncCustomRequestPayload:
    return QueueSyncCustomRequestPayload(
        sync_uuid=item.sync_uuid,
        student_id=item.student_id,
        requester_name=item.requester_name,
        contact_email=item.contact_email,
        request_model_url=item.request_model_url,
        request_model_title=item.request_model_title,
        request_notes=item.request_notes,
        printer_id=item.printer_id,
        position=item.position,
        scheduled_time=item.scheduled_time,
        manual_start=item.manual_start,
        status=item.status,
        started_at=item.started_at,
        completed_at=item.completed_at,
        created_at=item.created_at,
        updated_at=item.updated_at,
        deleted_at=item.deleted_at,
    )


@router.get("/custom-requests", response_model=QueueSyncExportResponse)
async def export_custom_requests_for_sync(
    db: AsyncSession = Depends(get_db),
    x_queue_sync_secret: str | None = Header(default=None, alias=QUEUE_SYNC_SECRET_HEADER),
):
    """Export manual queue registrations, including tombstones, for peer sync."""
    _validate_queue_sync_secret(x_queue_sync_secret)

    result = await db.execute(
        select(PrintQueueItem)
        .where(PrintQueueItem.custom_request == True)  # noqa: E712
        .order_by(PrintQueueItem.created_at, PrintQueueItem.id)
    )
    items = result.scalars().all()
    return QueueSyncExportResponse(
        generated_at=datetime.now(timezone.utc),
        items=[_to_sync_payload(item) for item in items if item.sync_uuid],
    )
