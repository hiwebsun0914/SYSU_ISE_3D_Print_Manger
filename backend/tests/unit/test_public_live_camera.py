"""Unit tests for on-demand public live camera caching."""

from __future__ import annotations

import pytest

from backend.app.services import public_live_camera as public_live_camera_module
from backend.app.services.public_live_camera import PublicLiveCameraService


@pytest.mark.asyncio
async def test_get_frame_reuses_cached_frame_within_interval(tmp_path):
    service = PublicLiveCameraService(
        frame_interval_seconds=0.5,
        rotation_seconds=10.0,
        idle_timeout_seconds=10.0,
        cache_dir=tmp_path,
    )

    capture_calls = 0

    async def capture_frame() -> bytes:
        nonlocal capture_calls
        capture_calls += 1
        return f"frame-{capture_calls}".encode()

    first_frame = await service.get_frame(1, capture_frame)
    second_frame = await service.get_frame(1, capture_frame)

    assert first_frame == b"frame-1"
    assert second_frame == b"frame-1"
    assert capture_calls == 1


@pytest.mark.asyncio
async def test_get_frame_rotates_slot_and_deletes_previous_file(tmp_path, monkeypatch):
    clock = {"wall": 100.0, "mono": 100.0}

    monkeypatch.setattr(public_live_camera_module.time, "time", lambda: clock["wall"])
    monkeypatch.setattr(public_live_camera_module.time, "monotonic", lambda: clock["mono"])

    service = PublicLiveCameraService(
        frame_interval_seconds=0.5,
        rotation_seconds=10.0,
        idle_timeout_seconds=10.0,
        cache_dir=tmp_path,
    )

    capture_calls = 0

    async def capture_frame() -> bytes:
        nonlocal capture_calls
        capture_calls += 1
        return f"frame-{capture_calls}".encode()

    await service.get_frame(7, capture_frame)
    first_path = service._states[7].current_path
    assert first_path is not None
    assert first_path.exists()

    clock["wall"] = 111.0
    clock["mono"] = 111.0

    await service.get_frame(7, capture_frame)
    second_path = service._states[7].current_path

    assert second_path is not None
    assert second_path != first_path
    assert second_path.exists()
    assert not first_path.exists()


@pytest.mark.asyncio
async def test_cleanup_expired_deletes_cached_file_and_state(tmp_path, monkeypatch):
    clock = {"wall": 50.0, "mono": 50.0}

    monkeypatch.setattr(public_live_camera_module.time, "time", lambda: clock["wall"])
    monkeypatch.setattr(public_live_camera_module.time, "monotonic", lambda: clock["mono"])

    service = PublicLiveCameraService(
        frame_interval_seconds=0.5,
        rotation_seconds=1.0,
        idle_timeout_seconds=1.0,
        cache_dir=tmp_path,
    )

    async def capture_frame() -> bytes:
        return b"cached-frame"

    await service.get_frame(3, capture_frame)
    cached_path = service._states[3].current_path
    assert cached_path is not None
    assert cached_path.exists()

    clock["mono"] = 52.5
    await service.cleanup_expired()

    assert 3 not in service._states
    assert not cached_path.exists()
