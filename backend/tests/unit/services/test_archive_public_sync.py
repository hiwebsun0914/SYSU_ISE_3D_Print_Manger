from unittest.mock import AsyncMock, patch

import pytest

from backend.app.core.config import settings
from backend.app.models.archive import PrintArchive
from backend.app.services.archive import ArchiveService


@pytest.mark.asyncio
async def test_archive_print_syncs_primary_3mf_to_public_storage(db_session, tmp_path, monkeypatch):
    archive_dir = tmp_path / "archive"
    archive_dir.mkdir(parents=True, exist_ok=True)
    monkeypatch.setattr(settings, "base_dir", tmp_path)
    monkeypatch.setattr(settings, "archive_dir", archive_dir)

    source_file = tmp_path / "local-print.3mf"
    source_file.write_bytes(b"dummy 3mf payload")

    with patch("backend.app.services.archive.sync_public_file", new=AsyncMock(return_value=True)) as mock_sync:
        service = ArchiveService(db_session)
        archive = await service.archive_print(printer_id=None, source_file=source_file)

    assert archive is not None
    assert archive.file_path.startswith("archive/unassigned/")
    mock_sync.assert_awaited_once()
    relative_path, synced_file = mock_sync.await_args.args
    assert relative_path == archive.file_path
    assert synced_file == settings.base_dir / archive.file_path


@pytest.mark.asyncio
async def test_delete_archive_removes_all_public_artifacts(db_session, tmp_path, monkeypatch):
    archive_dir = tmp_path / "archive"
    archive_dir.mkdir(parents=True, exist_ok=True)
    monkeypatch.setattr(settings, "base_dir", tmp_path)
    monkeypatch.setattr(settings, "archive_dir", archive_dir)

    record_dir = archive_dir / "unassigned" / "20260417_test"
    record_dir.mkdir(parents=True, exist_ok=True)

    main_file = record_dir / "main.3mf"
    thumb_file = record_dir / "thumbnail.png"
    timelapse_file = record_dir / "timelapse.mp4"
    source_file = record_dir / "source" / "project.3mf"
    f3d_file = record_dir / "f3d" / "design.f3d"
    source_file.parent.mkdir(parents=True, exist_ok=True)
    f3d_file.parent.mkdir(parents=True, exist_ok=True)

    for file_path in [main_file, thumb_file, timelapse_file, source_file, f3d_file]:
        file_path.write_bytes(b"artifact")

    archive = PrintArchive(
        printer_id=None,
        filename="main.3mf",
        print_name="Main",
        file_path=str(main_file.relative_to(settings.base_dir)),
        thumbnail_path=str(thumb_file.relative_to(settings.base_dir)),
        timelapse_path=str(timelapse_file.relative_to(settings.base_dir)),
        source_3mf_path=str(source_file.relative_to(settings.base_dir)),
        f3d_path=str(f3d_file.relative_to(settings.base_dir)),
        file_size=main_file.stat().st_size,
        status="completed",
    )
    db_session.add(archive)
    await db_session.commit()
    await db_session.refresh(archive)

    with patch("backend.app.services.archive.delete_public_file", new=AsyncMock(return_value=True)) as mock_delete:
        service = ArchiveService(db_session)
        deleted = await service.delete_archive(archive.id)

    assert deleted is True
    deleted_paths = [call.args[0] for call in mock_delete.await_args_list]
    assert deleted_paths == [
        archive.file_path,
        archive.thumbnail_path,
        archive.timelapse_path,
        archive.source_3mf_path,
        archive.f3d_path,
    ]
    assert not record_dir.exists()
