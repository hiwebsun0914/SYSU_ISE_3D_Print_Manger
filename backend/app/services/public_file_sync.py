"""Helpers for mirroring public assets to COS-compatible object storage."""

from __future__ import annotations

import asyncio
import logging
import mimetypes
from pathlib import Path
from urllib.parse import quote

import httpx

from backend.app.core.config import settings

logger = logging.getLogger(__name__)


def has_public_file_upload_target() -> bool:
    """Return True when a public upload base URL is configured."""
    return bool(settings.public_file_upload_base_url.strip())


def normalize_public_relative_path(relative_path: str) -> str:
    """Normalize relative paths so COS keys stay portable across platforms."""
    return relative_path.replace("\\", "/").lstrip("/")


def build_public_file_upload_url(relative_path: str) -> str | None:
    """Build the upload URL for a relative Bambuddy data path."""
    if not has_public_file_upload_target():
        return None

    normalized_base = settings.public_file_upload_base_url.rstrip("/")
    normalized_path = normalize_public_relative_path(relative_path)
    if not normalized_path:
        return None

    return f"{normalized_base}/{quote(normalized_path, safe='/')}"


def _guess_content_type(path: Path, override: str | None = None) -> str:
    if override:
        return override
    guessed, _ = mimetypes.guess_type(str(path))
    return guessed or "application/octet-stream"


async def sync_public_file(
    relative_path: str | None,
    source_path: Path,
    *,
    content_type: str | None = None,
    timeout_seconds: float = 120.0,
) -> bool:
    """Upload a local file to the configured public storage target."""
    if not relative_path or not has_public_file_upload_target():
        return False
    if not source_path.exists() or not source_path.is_file():
        logger.warning("Public file sync skipped; source file does not exist: %s", source_path)
        return False

    upload_url = build_public_file_upload_url(relative_path)
    if not upload_url:
        return False

    headers = {
        "Content-Type": _guess_content_type(source_path, override=content_type),
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": str(source_path.stat().st_size),
    }

    try:
        payload = await asyncio.to_thread(source_path.read_bytes)
        async with httpx.AsyncClient(timeout=timeout_seconds, follow_redirects=True) as client:
            response = await client.put(upload_url, headers=headers, content=payload)
        response.raise_for_status()
        logger.info("Synced public file to COS: %s", relative_path)
        return True
    except Exception as exc:
        logger.warning("Failed to sync public file %s -> %s: %s", source_path, upload_url, exc)
        return False


async def delete_public_file(relative_path: str | None, *, timeout_seconds: float = 60.0) -> bool:
    """Delete a previously mirrored public file."""
    if not relative_path or not has_public_file_upload_target():
        return False

    upload_url = build_public_file_upload_url(relative_path)
    if not upload_url:
        return False

    try:
        async with httpx.AsyncClient(timeout=timeout_seconds, follow_redirects=True) as client:
            response = await client.delete(upload_url)
        if response.status_code in (200, 202, 204, 404):
            return True
        response.raise_for_status()
        return True
    except Exception as exc:
        logger.warning("Failed to delete public file %s: %s", relative_path, exc)
        return False
