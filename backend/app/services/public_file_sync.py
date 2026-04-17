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


def build_public_file_url(relative_path: str) -> str | None:
    """Build the public read URL for a relative Bambuddy data path."""
    normalized_path = normalize_public_relative_path(relative_path)
    if not normalized_path:
        return None

    public_base = settings.public_file_base_url.rstrip("/")
    if public_base:
        return f"{public_base}/{quote(normalized_path, safe='/')}"

    return build_public_file_upload_url(relative_path)


def _guess_content_type(path: Path, override: str | None = None) -> str:
    if override:
        return override
    guessed, _ = mimetypes.guess_type(str(path))
    return guessed or "application/octet-stream"


async def public_file_exists(relative_path: str | None, *, timeout_seconds: float = 20.0) -> bool:
    """Return True when the public read URL already serves the file."""
    if not relative_path:
        return False

    public_url = build_public_file_url(relative_path)
    if not public_url:
        return False

    try:
        async with httpx.AsyncClient(
            timeout=timeout_seconds,
            follow_redirects=True,
            trust_env=False,
        ) as client:
            response = await client.head(public_url)
            if response.status_code == 200:
                return True
            if response.status_code == 404:
                return False

            # Some object stores may reject HEAD but allow range GETs.
            if response.status_code in {403, 405}:
                response = await client.get(public_url, headers={"Range": "bytes=0-0"})
                if response.status_code in {200, 206}:
                    return True
                if response.status_code == 404:
                    return False

        logger.warning("Unexpected public file check status for %s: HTTP %s", relative_path, response.status_code)
    except Exception as exc:
        logger.warning("Failed to verify public file %s: %s", relative_path, exc)

    return False


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
        async with httpx.AsyncClient(
            timeout=timeout_seconds,
            follow_redirects=True,
            trust_env=False,
        ) as client:
            response = await client.put(upload_url, headers=headers, content=payload)
        if response.status_code >= 400:
            logger.warning(
                "Failed to sync public file %s -> %s: HTTP %s %s",
                source_path,
                upload_url,
                response.status_code,
                response.text[:200].strip(),
            )
            return False

        if not await public_file_exists(relative_path, timeout_seconds=min(timeout_seconds, 20.0)):
            logger.warning("Public file upload completed but was not readable yet: %s", relative_path)
            return False

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
        async with httpx.AsyncClient(
            timeout=timeout_seconds,
            follow_redirects=True,
            trust_env=False,
        ) as client:
            response = await client.delete(upload_url)
        if response.status_code in (200, 202, 204, 404):
            return True
        response.raise_for_status()
        return True
    except Exception as exc:
        logger.warning("Failed to delete public file %s: %s", relative_path, exc)
        return False
