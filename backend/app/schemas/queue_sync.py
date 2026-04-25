from datetime import datetime
from typing import Literal

from pydantic import BaseModel

from backend.app.schemas.print_queue import UTCDatetime


class QueueSyncCustomRequestPayload(BaseModel):
    sync_uuid: str
    student_id: str | None = None
    requester_name: str | None = None
    contact_email: str | None = None
    request_model_url: str | None = None
    request_model_title: str | None = None
    request_notes: str | None = None
    printer_id: int | None = None
    position: int
    scheduled_time: UTCDatetime = None
    manual_start: bool = True
    status: Literal["pending", "printing", "completed", "failed", "skipped", "cancelled"]
    started_at: UTCDatetime = None
    completed_at: UTCDatetime = None
    created_at: datetime
    updated_at: datetime
    deleted_at: UTCDatetime = None


class QueueSyncExportResponse(BaseModel):
    generated_at: datetime
    items: list[QueueSyncCustomRequestPayload]
