from datetime import datetime, timezone

from backend.app.models.archive import PrintArchive
from backend.app.utils.time_sanity import (
    compute_reasonable_duration_seconds,
    repair_archive_timestamps,
)


def test_compute_reasonable_duration_rejects_epoch_skew():
    started_at = datetime(1970, 1, 1, tzinfo=timezone.utc)
    completed_at = datetime(2026, 4, 17, tzinfo=timezone.utc)

    assert compute_reasonable_duration_seconds(started_at, completed_at) is None


def test_repair_archive_timestamps_uses_estimated_duration():
    archive = PrintArchive(
        filename="broken.3mf",
        file_path="archive/test/broken.3mf",
        file_size=123,
        print_name="Broken Print",
        print_time_seconds=1800,
        status="completed",
        started_at=datetime(1970, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
        completed_at=datetime(2026, 4, 17, 8, 0, 0, tzinfo=timezone.utc),
        created_at=datetime(1970, 1, 1, 0, 0, 0, tzinfo=timezone.utc),
    )

    changed = repair_archive_timestamps(archive)

    assert changed is True
    assert archive.started_at == datetime(2026, 4, 17, 7, 30, 0, tzinfo=timezone.utc)
    assert archive.created_at == datetime(2026, 4, 17, 7, 30, 0, tzinfo=timezone.utc)
