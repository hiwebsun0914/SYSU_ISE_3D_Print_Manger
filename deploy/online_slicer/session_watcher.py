#!/usr/bin/env python3
"""Launch a desktop slicer whenever Bambuddy drops a new online slicing request."""

from __future__ import annotations

import json
import os
import signal
import shlex
import shutil
import subprocess
import time
from pathlib import Path


WORKSPACE_DIR = Path(os.environ.get("ONLINE_SLICER_WORKSPACE", "/workspace/bambuddy"))
REQUESTS_DIR = WORKSPACE_DIR / "requests"
SLICER_BIN = os.environ.get("ONLINE_SLICER_BIN") or os.environ.get(
    "BAMBU_STUDIO_BIN",
    "/usr/local/bin/BambuStudio",
)
SLICER_COMMAND = os.environ.get("ONLINE_SLICER_COMMAND", "").strip()
WORKSPACE_MOUNT_PATH = os.environ.get("ONLINE_SLICER_MOUNT_PATH", "").rstrip("/")
SLICER_NAME = os.environ.get("ONLINE_SLICER_NAME", "BambuStudio")
POLL_SECONDS = float(os.environ.get("ONLINE_SLICER_POLL_SECONDS", "2"))
XDG_CACHE_HOME = Path(os.environ.get("XDG_CACHE_HOME", str(WORKSPACE_DIR / "home" / ".cache")))
XDG_RUNTIME_DIR = Path(os.environ.get("XDG_RUNTIME_DIR", str(WORKSPACE_DIR / "home" / "runtime")))


def log(message: str) -> None:
    print(message, flush=True)


def stop_active_process(process: subprocess.Popen[str] | None) -> None:
    if process is None or process.poll() is not None:
        return

    try:
        process.terminate()
        process.wait(timeout=10)
    except subprocess.TimeoutExpired:
        process.kill()
        process.wait(timeout=5)


def cleanup_flatpak_runtime_artifacts() -> None:
    """Remove stale Flatpak proxy/doc directories before launching a new desktop process."""
    for path in (XDG_CACHE_HOME / ".dbus-proxy",):
        if not path.exists():
            continue
        try:
            shutil.rmtree(path, ignore_errors=True)
        except OSError:
            log(f"Failed to clean stale runtime path: {path}")

    if XDG_RUNTIME_DIR.exists():
        for child in XDG_RUNTIME_DIR.iterdir():
            try:
                if child.is_dir() and not child.is_symlink():
                    shutil.rmtree(child, ignore_errors=True)
                else:
                    child.unlink(missing_ok=True)
            except OSError:
                log(f"Failed to clean stale runtime path: {child}")


def launch_online_slicer(input_path: Path) -> subprocess.Popen[str]:
    env = os.environ.copy()
    cleanup_flatpak_runtime_artifacts()
    if SLICER_COMMAND:
        command = [*shlex.split(SLICER_COMMAND), str(input_path)]
    else:
        command = [SLICER_BIN, str(input_path)]
    log(f"Launching {SLICER_NAME} with {input_path}")
    return subprocess.Popen(command, cwd=str(input_path.parent), env=env)


def load_request(path: Path) -> dict[str, str] | None:
    try:
        with path.open(encoding="utf-8") as handle:
            data = json.load(handle)
    except (OSError, json.JSONDecodeError) as exc:
        log(f"Failed to read slicer request {path}: {exc}")
        return None

    if not isinstance(data, dict):
        log(f"Ignoring invalid slicer request {path}")
        return None

    return data  # type: ignore[return-value]


def resolve_workspace_path(raw_path: str) -> Path:
    """Translate manifest paths from the slicer mount namespace into the local filesystem."""
    path = Path(raw_path)
    if path.exists() or not WORKSPACE_MOUNT_PATH or not raw_path.startswith(f"{WORKSPACE_MOUNT_PATH}/"):
        return path

    relative_path = raw_path.removeprefix(f"{WORKSPACE_MOUNT_PATH}/")
    return WORKSPACE_DIR / relative_path


def main() -> None:
    REQUESTS_DIR.mkdir(parents=True, exist_ok=True)
    seen_requests: set[str] = set()
    active_process: subprocess.Popen[str] | None = None

    def handle_signal(_signum: int, _frame) -> None:
        stop_active_process(active_process)
        raise SystemExit(0)

    signal.signal(signal.SIGTERM, handle_signal)
    signal.signal(signal.SIGINT, handle_signal)

    log("Online slicer watcher started")

    while True:
        request_files = sorted(REQUESTS_DIR.glob("*.json"), key=lambda item: item.stat().st_mtime)
        pending_requests = [request_file for request_file in request_files if request_file.name not in seen_requests]
        if pending_requests:
            request_file = pending_requests[-1]
            seen_requests.update(pending.name for pending in pending_requests)

            request = load_request(request_file)
            if request:
                input_path = resolve_workspace_path(request.get("workspace_input_file", ""))
                if not input_path.exists():
                    log(f"Input file missing for slicer request {request_file}: {input_path}")
                else:
                    stop_active_process(active_process)
                    active_process = launch_online_slicer(input_path)

        time.sleep(POLL_SECONDS)


if __name__ == "__main__":
    main()
