from unittest.mock import AsyncMock, patch

import pytest

from backend.app.core.config import settings
from backend.app.services.public_file_sync import sync_public_file


class _FakeResponse:
    def __init__(self, status_code: int, text: str = ""):
        self.status_code = status_code
        self.text = text


class _FakeAsyncClient:
    last_instance = None

    def __init__(self, *args, **kwargs):
        _FakeAsyncClient.last_instance = self
        self.kwargs = kwargs

    async def __aenter__(self):
        return self

    async def __aexit__(self, exc_type, exc, tb):
        return False

    async def put(self, url, headers=None, content=None):
        self.url = url
        self.headers = headers
        self.content = content
        return _FakeResponse(200)


@pytest.mark.asyncio
async def test_sync_public_file_disables_env_proxy_and_verifies_upload(tmp_path, monkeypatch):
    source_file = tmp_path / "example.3mf"
    source_file.write_bytes(b"payload")

    monkeypatch.setattr(settings, "public_file_upload_base_url", "https://upload.example.test/BAMBUDDY")
    monkeypatch.setattr(settings, "public_file_base_url", "https://public.example.test/BAMBUDDY")

    with (
        patch("backend.app.services.public_file_sync.httpx.AsyncClient", new=_FakeAsyncClient),
        patch("backend.app.services.public_file_sync.public_file_exists", new=AsyncMock(return_value=True)) as mock_exists,
    ):
        synced = await sync_public_file("archive/test/example.3mf", source_file)

    assert synced is True
    assert mock_exists.await_count == 1
    assert _FakeAsyncClient.last_instance is not None
    assert _FakeAsyncClient.last_instance.kwargs["trust_env"] is False
