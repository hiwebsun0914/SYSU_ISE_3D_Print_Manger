from unittest.mock import AsyncMock, patch

import pytest

from backend.app.core.config import settings
from backend.app.models.archive import PrintArchive
from backend.app.services.public_archive_backfill import sync_missing_public_archive_artifacts


@pytest.mark.asyncio
async def test_sync_missing_public_archive_artifacts_only_uploads_missing_files(db_session, tmp_path, monkeypatch):
    monkeypatch.setattr(settings, "base_dir", tmp_path)
    monkeypatch.setattr(settings, "public_file_upload_base_url", "https://upload.example.test/BAMBUDDY")

    archive_dir = tmp_path / "archive" / "unassigned" / "20260417_test"
    archive_dir.mkdir(parents=True, exist_ok=True)

    main_file = archive_dir / "main.3mf"
    thumb_file = archive_dir / "thumbnail.png"
    main_file.write_bytes(b"main")
    thumb_file.write_bytes(b"thumb")

    archive = PrintArchive(
        printer_id=None,
        filename="main.3mf",
        print_name="Main",
        file_path=str(main_file.relative_to(tmp_path)),
        thumbnail_path=str(thumb_file.relative_to(tmp_path)),
        file_size=main_file.stat().st_size,
        status="completed",
    )
    db_session.add(archive)
    await db_session.commit()

    async def fake_exists(relative_path: str) -> bool:
        return relative_path.endswith("thumbnail.png")

    with (
        patch("backend.app.services.public_archive_backfill.public_file_exists", new=AsyncMock(side_effect=fake_exists)),
        patch("backend.app.services.public_archive_backfill.sync_public_file", new=AsyncMock(return_value=True)) as mock_sync,
    ):
        stats = await sync_missing_public_archive_artifacts(db_session)

    assert stats == {
        "archives_scanned": 1,
        "already_public": 1,
        "synced": 1,
        "missing_local": 0,
        "failed": 0,
    }
    assert mock_sync.await_count == 1
    synced_relative_path, synced_local_path = mock_sync.await_args.args
    assert synced_relative_path == archive.file_path
    assert synced_local_path == main_file
