#!/usr/bin/env bash
set -euo pipefail

export DISPLAY="${DISPLAY:-:1}"
export ONLINE_SLICER_WORKSPACE="${ONLINE_SLICER_WORKSPACE:-/workspace/bambuddy}"
export HOME="${ONLINE_SLICER_HOME:-${ONLINE_SLICER_WORKSPACE}/home}"
export XDG_CONFIG_HOME="${XDG_CONFIG_HOME:-${HOME}/.config}"
export XDG_CACHE_HOME="${XDG_CACHE_HOME:-${HOME}/.cache}"
export XDG_DATA_HOME="${XDG_DATA_HOME:-${HOME}/.local/share}"
export VNC_PORT="${VNC_PORT:-5900}"
export NOVNC_PORT="${NOVNC_PORT:-6080}"
export XVFB_SCREEN="${XVFB_SCREEN:-1920x1080x24}"

mkdir -p "${ONLINE_SLICER_WORKSPACE}/requests" "${ONLINE_SLICER_WORKSPACE}/sessions"
mkdir -p "${XDG_CONFIG_HOME}" "${XDG_CACHE_HOME}" "${XDG_DATA_HOME}"
chmod -R 0777 "${ONLINE_SLICER_WORKSPACE}" || true

rm -f /tmp/.X1-lock
mkdir -p /tmp/.X11-unix

pids=()

# Disable X access control inside the isolated container so x11vnc can attach reliably.
Xvfb "${DISPLAY}" -screen 0 "${XVFB_SCREEN}" -ac >/tmp/xvfb.log 2>&1 &
pids+=($!)

openbox >/tmp/openbox.log 2>&1 &
pids+=($!)

x11vnc -display "${DISPLAY}" -forever -shared -nopw -rfbport "${VNC_PORT}" -xkb >/tmp/x11vnc.log 2>&1 &
pids+=($!)

/usr/share/novnc/utils/novnc_proxy --listen "${NOVNC_PORT}" --vnc "127.0.0.1:${VNC_PORT}" >/tmp/novnc.log 2>&1 &
pids+=($!)

python3 /usr/local/bin/session_watcher.py >/tmp/session_watcher.log 2>&1 &
pids+=($!)

cleanup() {
  for pid in "${pids[@]}"; do
    kill "${pid}" 2>/dev/null || true
  done
}

trap cleanup EXIT

wait -n "${pids[@]}"
