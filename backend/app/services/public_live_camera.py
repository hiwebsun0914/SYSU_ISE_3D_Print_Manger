"""On-demand public live camera frame caching."""

from __future__ import annotations

import asyncio
import logging
import time
from collections.abc import Awaitable, Callable
from dataclasses import dataclass, field
from pathlib import Path

from backend.app.core.config import settings

logger = logging.getLogger(__name__)


@dataclass(slots=True)
class LiveFrameState:
    """Mutable per-printer cache state for public live frames."""

    printer_id: int
    last_request_monotonic: float
    last_capture_monotonic: float = 0.0
    cached_frame: bytes | None = None
    current_slot: int | None = None
    current_path: Path | None = None
    lock: asyncio.Lock = field(default_factory=asyncio.Lock)


class PublicLiveCameraService:
    """Capture public live frames only while viewers are requesting them."""

    def __init__(
        self,
        *,
        frame_interval_seconds: float | None = None,
        rotation_seconds: float | None = None,
        idle_timeout_seconds: float | None = None,
        cache_dir: Path | None = None,
    ) -> None:
        self.frame_interval_seconds = max(
            0.1,
            frame_interval_seconds
            if frame_interval_seconds is not None
            else settings.public_live_camera_frame_interval_seconds,
        )
        self.rotation_seconds = max(
            1.0,
            rotation_seconds if rotation_seconds is not None else settings.public_live_camera_rotation_seconds,
        )
        self.idle_timeout_seconds = max(
            self.rotation_seconds,
            idle_timeout_seconds if idle_timeout_seconds is not None else settings.public_live_camera_idle_timeout_seconds,
        )
        self.cache_dir = cache_dir or (settings.base_dir / "cache" / "public_live_camera")
        self.cache_dir.mkdir(parents=True, exist_ok=True)

        self._states: dict[int, LiveFrameState] = {}
        self._task: asyncio.Task | None = None

    def start(self) -> None:
        if self._task is None or self._task.done():
            self._task = asyncio.create_task(self._cleanup_loop())
            logger.info(
                "Public live camera cache started (interval=%ss rotation=%ss idle_timeout=%ss)",
                self.frame_interval_seconds,
                self.rotation_seconds,
                self.idle_timeout_seconds,
            )

    def stop(self) -> None:
        if self._task is not None:
            self._task.cancel()
            self._task = None
        for printer_id, state in list(self._states.items()):
            self._delete_cached_path(state.current_path)
            printer_dir = self.cache_dir / str(printer_id)
            try:
                printer_dir.rmdir()
            except OSError:
                pass
        self._states.clear()
        if self.cache_dir.exists():
            try:
                self.cache_dir.rmdir()
            except OSError:
                pass
        logger.info("Public live camera cache stopped")

    async def get_frame(
        self,
        printer_id: int,
        capture_frame: Callable[[], Awaitable[bytes | None]],
    ) -> bytes | None:
        """Return a cached frame, refreshing it only when the cache is stale."""
        state = self._states.get(printer_id)
        now_monotonic = time.monotonic()
        if state is None:
            state = LiveFrameState(printer_id=printer_id, last_request_monotonic=now_monotonic)
            self._states[printer_id] = state
        else:
            state.last_request_monotonic = now_monotonic

        if self._should_reuse_cached_frame(state, now_monotonic):
            return state.cached_frame

        async with state.lock:
            now_monotonic = time.monotonic()
            state.last_request_monotonic = now_monotonic
            if self._should_reuse_cached_frame(state, now_monotonic):
                return state.cached_frame

            frame = await capture_frame()
            if not frame:
                return state.cached_frame

            self._store_frame(state, frame)
            return state.cached_frame

    async def cleanup_expired(self) -> None:
        """Delete cached frame files for printers that no one requested recently."""
        now_monotonic = time.monotonic()
        expired_printer_ids = [
            printer_id
            for printer_id, state in self._states.items()
            if not state.lock.locked() and now_monotonic - state.last_request_monotonic > self.idle_timeout_seconds
        ]

        for printer_id in expired_printer_ids:
            state = self._states.pop(printer_id, None)
            if state is None:
                continue
            self._delete_cached_path(state.current_path)
            printer_dir = self.cache_dir / str(printer_id)
            try:
                printer_dir.rmdir()
            except OSError:
                pass

    def _should_reuse_cached_frame(self, state: LiveFrameState, now_monotonic: float) -> bool:
        return state.cached_frame is not None and now_monotonic - state.last_capture_monotonic < self.frame_interval_seconds

    def _store_frame(self, state: LiveFrameState, frame: bytes) -> None:
        slot = int(time.time() // self.rotation_seconds)
        printer_dir = self.cache_dir / str(state.printer_id)
        printer_dir.mkdir(parents=True, exist_ok=True)
        slot_path = printer_dir / f"{slot}.jpg"

        old_path = state.current_path if state.current_path != slot_path else None
        slot_path.write_bytes(frame)

        state.cached_frame = frame
        state.current_slot = slot
        state.current_path = slot_path
        state.last_capture_monotonic = time.monotonic()

        self._delete_cached_path(old_path)

    def _delete_cached_path(self, path: Path | None) -> None:
        if not path:
            return
        try:
            path.unlink(missing_ok=True)
        except OSError as exc:
            logger.debug("Failed to delete cached public live frame %s: %s", path, exc)

    async def _cleanup_loop(self) -> None:
        sleep_interval = min(self.frame_interval_seconds, 1.0)
        try:
            while True:
                await asyncio.sleep(sleep_interval)
                await self.cleanup_expired()
        except asyncio.CancelledError:
            raise


public_live_camera_service = PublicLiveCameraService()
