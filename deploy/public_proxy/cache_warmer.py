#!/usr/bin/env python3
"""Warm Bambuddy API cache and persist JSON snapshots on the public server."""

from __future__ import annotations

import argparse
import json
import logging
import os
import ssl
import sys
import tempfile
import urllib.error
import urllib.request
from pathlib import Path

DEFAULT_ENDPOINTS = (
    "/api/v1/auth/status",
    "/api/v1/version",
    "/api/v1/settings/",
    "/api/v1/printers/",
    "/api/v1/queue/",
    "/api/v1/maintenance/overview",
    "/api/v1/archives/stats",
    "/api/v1/archives/slim",
    "/api/v1/projects/",
    "/api/v1/groups/",
    "/api/v1/users/",
    "/api/v1/external-links/",
)

PRINTER_ENDPOINT_TEMPLATES = (
    "/api/v1/printers/{printer_id}",
    "/api/v1/printers/{printer_id}/status",
)


def build_snapshot_path(snapshot_root: Path, endpoint: str) -> Path:
    clean_path = endpoint.split("?", 1)[0]
    stripped = clean_path.lstrip("/")
    if not stripped:
        return snapshot_root / "index.json"
    if clean_path.endswith("/"):
        return snapshot_root / stripped / "index.json"
    return snapshot_root / f"{stripped}.json"


def write_snapshot(path: Path, payload: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.parent.chmod(0o755)
    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as tmp_file:
        tmp_file.write(payload)
        temp_path = Path(tmp_file.name)
    temp_path.replace(path)
    path.chmod(0o644)


def fetch_json(base_url: str, endpoint: str, headers: dict[str, str], ssl_context) -> tuple[int, bytes]:
    request = urllib.request.Request(
        url=f"{base_url.rstrip('/')}{endpoint}",
        headers=headers,
        method="GET",
    )
    try:
        with urllib.request.urlopen(request, timeout=30, context=ssl_context) as response:
            return response.status, response.read()
    except urllib.error.HTTPError as exc:
        body = exc.read()
        return exc.code, body


def warm_endpoint(base_url: str, endpoint: str, snapshot_root: Path, headers: dict[str, str], ssl_context) -> object | None:
    status_code, payload = fetch_json(base_url, endpoint, headers, ssl_context)
    if status_code != 200:
        logging.warning("Warm failed for %s: HTTP %s", endpoint, status_code)
        return None

    snapshot_path = build_snapshot_path(snapshot_root, endpoint)
    write_snapshot(snapshot_path, payload)
    logging.info("Warmed %s -> %s", endpoint, snapshot_path)

    try:
        return json.loads(payload.decode("utf-8"))
    except Exception:
        logging.warning("Snapshot payload for %s is not valid JSON", endpoint)
        return None


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", default="https://sysuzgxytj.top", help="Public Bambuddy base URL")
    parser.add_argument(
        "--snapshot-root",
        default="/var/cache/bambuddy_snapshots",
        help="Directory for JSON snapshot files",
    )
    parser.add_argument(
        "--insecure",
        action="store_true",
        help="Disable TLS certificate verification",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")

    ssl_context = None
    if args.insecure:
        ssl_context = ssl._create_unverified_context()  # noqa: S323

    headers = {
        "Accept": "application/json",
        "User-Agent": "bambuddy-cache-warmer/1.0",
    }

    authorization_header = os.environ.get("BAMBUDDY_CACHE_AUTHORIZATION_HEADER", "").strip()
    bearer_token = os.environ.get("BAMBUDDY_CACHE_BEARER_TOKEN", "").strip()
    if authorization_header:
        headers["Authorization"] = authorization_header
    elif bearer_token:
        headers["Authorization"] = f"Bearer {bearer_token}"

    snapshot_root = Path(args.snapshot_root)

    printers_payload = None
    for endpoint in DEFAULT_ENDPOINTS:
        payload = warm_endpoint(args.base_url, endpoint, snapshot_root, headers, ssl_context)
        if endpoint == "/api/v1/printers/":
            printers_payload = payload

    if isinstance(printers_payload, list):
        for printer in printers_payload:
            printer_id = printer.get("id")
            if not isinstance(printer_id, int):
                continue
            for template in PRINTER_ENDPOINT_TEMPLATES:
                warm_endpoint(
                    args.base_url,
                    template.format(printer_id=printer_id),
                    snapshot_root,
                    headers,
                    ssl_context,
                )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
