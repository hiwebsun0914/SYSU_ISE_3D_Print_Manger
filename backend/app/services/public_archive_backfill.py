"""Helpers for backfilling archive artifacts into public object storage."""

from __future__ import annotations

import logging
from collections.abc import Iterator
from pathlib import Path

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from backend.app.core.config import settings
from backend.app.models.archive import PrintArchive
from backend.app.services.public_file_sync import has_public_file_upload_target, public_file_exists, sync_public_file

logger = logging.getLogger(__name__)

PUBLIC_ARCHIVE_PATH_FIELDS = (
    "file_path",
    "thumbnail_path",
    "timelapse_path",
    "source_3mf_path",
    "f3d_path",
)


def iter_archive_artifact_paths(archive: PrintArchive) -> Iterator[str]:
    """Yield relative archive artifact paths that may need public backfill."""
    for field_name in PUBLIC_ARCHIVE_PATH_FIELDS:
        relative_path = getattr(archive, field_name, None)
        if relative_path:
            yield relative_path


async def sync_missing_public_archive_artifacts(
    db: AsyncSession,
    *,
    archive_limit: int | None = None,
) -> dict[str, int]:
    """Ensure archive artifacts exist in public object storage.

    Returns a small stats dictionary for logging and operational visibility.
    """
    stats = {
        "archives_scanned": 0,
        "already_public": 0,
        "synced": 0,
        "missing_local": 0,
        "failed": 0,
    }

    if not has_public_file_upload_target():
        return stats

    stmt = select(PrintArchive).order_by(PrintArchive.created_at.desc(), PrintArchive.id.desc())
    if archive_limit is not None:
        stmt = stmt.limit(archive_limit)

    result = await db.execute(stmt)
    archives = result.scalars().all()
    stats["archives_scanned"] = len(archives)

    for archive in archives:
        for relative_path in iter_archive_artifact_paths(archive):
            local_path = Path(settings.base_dir) / relative_path
            if not local_path.is_file():
                stats["missing_local"] += 1
                continue

            if await public_file_exists(relative_path):
                stats["already_public"] += 1
                continue

            if await sync_public_file(relative_path, local_path):
                stats["synced"] += 1
            else:
                logger.warning("Public archive backfill failed for archive %s path %s", archive.id, relative_path)
                stats["failed"] += 1

    return stats
