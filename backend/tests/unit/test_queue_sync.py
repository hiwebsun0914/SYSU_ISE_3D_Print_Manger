from datetime import datetime, timedelta, timezone

import pytest
from sqlalchemy import select

from backend.app.models.print_queue import PrintQueueItem
from backend.app.models.printer import Printer
from backend.app.schemas.queue_sync import QueueSyncCustomRequestPayload
from backend.app.services.queue_sync import merge_remote_custom_requests


def _as_utc(value: datetime | None) -> datetime | None:
    if value is None:
        return None
    if value.tzinfo is None:
        return value.replace(tzinfo=timezone.utc)
    return value.astimezone(timezone.utc)


def _payload(
    *,
    sync_uuid: str,
    updated_at: datetime,
    deleted_at: datetime | None = None,
    printer_id: int | None = None,
    requester_name: str = "Queue User",
) -> QueueSyncCustomRequestPayload:
    created_at = updated_at - timedelta(minutes=5)
    return QueueSyncCustomRequestPayload(
        sync_uuid=sync_uuid,
        student_id="22330001",
        requester_name=requester_name,
        contact_email="queue@example.com",
        request_model_url="https://makerworld.com.cn/zh/models/example",
        request_model_title="Example Model",
        request_notes="sync test",
        printer_id=printer_id,
        position=3,
        scheduled_time=None,
        manual_start=True,
        status="cancelled" if deleted_at else "pending",
        started_at=None,
        completed_at=deleted_at,
        created_at=created_at,
        updated_at=updated_at,
        deleted_at=deleted_at,
    )


@pytest.mark.asyncio
async def test_merge_remote_custom_requests_creates_new_row(db_session):
    printer = Printer(
        name="Sync Printer",
        ip_address="192.168.1.40",
        serial_number="SYNC-0001",
        access_code="12345678",
        model="A1",
    )
    db_session.add(printer)
    await db_session.commit()

    remote_updated_at = datetime.now(timezone.utc)
    stats = await merge_remote_custom_requests(
        db_session,
        [_payload(sync_uuid="queue-sync-1", updated_at=remote_updated_at, printer_id=printer.id)],
    )
    await db_session.commit()

    assert stats == {"created": 1, "updated": 0, "deleted": 0, "skipped": 0}

    row = (
        await db_session.execute(select(PrintQueueItem).where(PrintQueueItem.sync_uuid == "queue-sync-1"))
    ).scalar_one()
    assert row.custom_request is True
    assert row.printer_id == printer.id
    assert row.requester_name == "Queue User"
    assert _as_utc(row.updated_at) == remote_updated_at


@pytest.mark.asyncio
async def test_merge_remote_custom_requests_respects_newer_timestamp(db_session):
    initial_updated_at = datetime.now(timezone.utc)
    local_item = PrintQueueItem(
        sync_uuid="queue-sync-2",
        custom_request=True,
        student_id="22330002",
        requester_name="Local Winner",
        contact_email="local@example.com",
        request_model_url="https://makerworld.com.cn/zh/models/local",
        request_model_title="Local Model",
        request_notes="local",
        position=1,
        status="pending",
        manual_start=True,
        created_at=initial_updated_at - timedelta(minutes=10),
        updated_at=initial_updated_at,
    )
    db_session.add(local_item)
    await db_session.commit()

    older_remote = _payload(
        sync_uuid="queue-sync-2",
        updated_at=initial_updated_at - timedelta(minutes=1),
        requester_name="Older Remote",
    )
    stats = await merge_remote_custom_requests(db_session, [older_remote])
    await db_session.commit()

    assert stats == {"created": 0, "updated": 0, "deleted": 0, "skipped": 1}
    await db_session.refresh(local_item)
    assert local_item.requester_name == "Local Winner"

    newer_deleted_remote = _payload(
        sync_uuid="queue-sync-2",
        updated_at=initial_updated_at + timedelta(minutes=1),
        deleted_at=initial_updated_at + timedelta(minutes=1),
        requester_name="Remote Delete",
    )
    stats = await merge_remote_custom_requests(db_session, [newer_deleted_remote])
    await db_session.commit()

    assert stats == {"created": 0, "updated": 0, "deleted": 1, "skipped": 0}
    await db_session.refresh(local_item)
    assert _as_utc(local_item.deleted_at) == newer_deleted_remote.deleted_at
    assert local_item.status == "cancelled"
