"""Helpers for detecting and repairing obviously bad device-side timestamps."""

from __future__ import annotations

from datetime import datetime, timedelta, timezone
from typing import Protocol

SANITY_TIME_FLOOR = datetime(2020, 1, 1, tzinfo=timezone.utc)
MAX_REASONABLE_PRINT_DURATION_SECONDS = 7 * 24 * 3600
MAX_REASONABLE_RUNTIME_SECONDS = 5 * 365 * 24 * 3600
MAX_REASONABLE_RUNTIME_GAP_SECONDS = 7 * 24 * 3600


class ArchiveTimeLike(Protocol):
    status: str
    print_time_seconds: int | None
    started_at: datetime | None
    completed_at: datetime | None
    created_at: datetime


def ensure_utc(dt: datetime | None) -> datetime | None:
    """Normalize datetimes to UTC for safe comparisons."""
    if dt is None:
        return None
    if dt.tzinfo is None:
        return dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc)


def is_reasonable_wall_clock(dt: datetime | None) -> bool:
    """Return True when a timestamp looks like a sane real-world clock value."""
    normalized = ensure_utc(dt)
    return normalized is not None and normalized >= SANITY_TIME_FLOOR


def compute_reasonable_duration_seconds(
    started_at: datetime | None,
    completed_at: datetime | None,
    *,
    max_seconds: int = MAX_REASONABLE_PRINT_DURATION_SECONDS,
) -> int | None:
    """Compute a duration only when both timestamps and the elapsed time are sane."""
    started = ensure_utc(started_at)
    completed = ensure_utc(completed_at)
    if not is_reasonable_wall_clock(started) or not is_reasonable_wall_clock(completed):
        return None

    elapsed = int((completed - started).total_seconds())
    if elapsed <= 0 or elapsed > max_seconds:
        return None
    return elapsed


def estimate_archive_duration_seconds(
    archive: ArchiveTimeLike,
    *,
    progress: float | None = None,
) -> int | None:
    """Pick the best duration estimate available for an archive."""
    actual = compute_reasonable_duration_seconds(archive.started_at, archive.completed_at)
    if actual is not None:
        return actual

    estimate = archive.print_time_seconds or 0
    if estimate <= 0:
        return None

    if progress is not None and archive.status != "completed":
        bounded_progress = max(1.0, min(100.0, float(progress)))
        estimate = max(1, int(estimate * (bounded_progress / 100.0)))

    return estimate


def repair_archive_timestamps(
    archive: ArchiveTimeLike,
    *,
    completed_at: datetime | None = None,
    progress: float | None = None,
) -> bool:
    """Repair obviously bogus archive timestamps caused by unsynchronized clocks."""
    final_completed_at = ensure_utc(completed_at or archive.completed_at)
    if not is_reasonable_wall_clock(final_completed_at):
        return False

    sane_duration = compute_reasonable_duration_seconds(archive.started_at, final_completed_at)
    if sane_duration is None:
        repaired_duration = estimate_archive_duration_seconds(archive, progress=progress)
        if repaired_duration is None:
            return False
        archive.started_at = final_completed_at - timedelta(seconds=repaired_duration)
        started_at = ensure_utc(archive.started_at)
        changed = True
    else:
        started_at = ensure_utc(archive.started_at)
        changed = False

    created_at = ensure_utc(archive.created_at)
    if not is_reasonable_wall_clock(created_at) or (started_at and created_at > started_at):
        archive.created_at = started_at.replace(microsecond=0) if started_at else final_completed_at.replace(microsecond=0)
        changed = True

    return changed


def is_suspicious_runtime_seconds(runtime_seconds: int | None) -> bool:
    """Return True when runtime counters are far beyond any plausible printer usage."""
    return bool(runtime_seconds and runtime_seconds > MAX_REASONABLE_RUNTIME_SECONDS)
