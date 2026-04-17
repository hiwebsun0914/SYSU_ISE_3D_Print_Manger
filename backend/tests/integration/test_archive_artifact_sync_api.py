from unittest.mock import AsyncMock, patch

import pytest
from httpx import AsyncClient

from backend.app.core.config import settings


def _prepare_archive_file(tmp_path, archive) -> None:
    archive_path = tmp_path / archive.file_path
    archive_path.parent.mkdir(parents=True, exist_ok=True)
    archive_path.write_bytes(b"archived print payload")


@pytest.mark.asyncio
@pytest.mark.integration
async def test_source_3mf_upload_and_delete_sync_public_storage(
    async_client: AsyncClient,
    archive_factory,
    printer_factory,
    tmp_path,
    monkeypatch,
):
    monkeypatch.setattr(settings, "base_dir", tmp_path)
    monkeypatch.setattr(settings, "archive_dir", tmp_path / "archive")

    printer = await printer_factory()
    archive = await archive_factory(printer.id)
    _prepare_archive_file(tmp_path, archive)

    with (
        patch("backend.app.api.routes.archives.sync_public_file", new=AsyncMock(return_value=True)) as mock_sync,
        patch("backend.app.api.routes.archives.delete_public_file", new=AsyncMock(return_value=True)) as mock_delete,
    ):
        upload_response = await async_client.post(
            f"/api/v1/archives/{archive.id}/source",
            files={"file": ("source.3mf", b"source payload", "application/octet-stream")},
        )

        assert upload_response.status_code == 200
        uploaded_path = upload_response.json()["source_3mf_path"]
        mock_sync.assert_awaited_once()
        assert mock_sync.await_args.args[0] == uploaded_path

        delete_response = await async_client.delete(f"/api/v1/archives/{archive.id}/source")

        assert delete_response.status_code == 200
        mock_delete.assert_awaited_once_with(uploaded_path)


@pytest.mark.asyncio
@pytest.mark.integration
async def test_f3d_upload_and_delete_sync_public_storage(
    async_client: AsyncClient,
    archive_factory,
    printer_factory,
    tmp_path,
    monkeypatch,
):
    monkeypatch.setattr(settings, "base_dir", tmp_path)
    monkeypatch.setattr(settings, "archive_dir", tmp_path / "archive")

    printer = await printer_factory()
    archive = await archive_factory(printer.id)
    _prepare_archive_file(tmp_path, archive)

    with (
        patch("backend.app.api.routes.archives.sync_public_file", new=AsyncMock(return_value=True)) as mock_sync,
        patch("backend.app.api.routes.archives.delete_public_file", new=AsyncMock(return_value=True)) as mock_delete,
    ):
        upload_response = await async_client.post(
            f"/api/v1/archives/{archive.id}/f3d",
            files={"file": ("design.f3d", b"f3d payload", "application/octet-stream")},
        )

        assert upload_response.status_code == 200
        uploaded_path = upload_response.json()["f3d_path"]
        mock_sync.assert_awaited_once()
        assert mock_sync.await_args.args[0] == uploaded_path

        delete_response = await async_client.delete(f"/api/v1/archives/{archive.id}/f3d")

        assert delete_response.status_code == 200
        mock_delete.assert_awaited_once_with(uploaded_path)
