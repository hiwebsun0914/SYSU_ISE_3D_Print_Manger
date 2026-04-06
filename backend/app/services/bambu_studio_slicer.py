"""Headless STL slicing helpers built around the BambuStudio CLI."""

from __future__ import annotations

import json
import logging
import shutil
import subprocess
from pathlib import Path

from backend.app.core.config import settings as app_settings

logger = logging.getLogger(__name__)


class BambuStudioUnavailableError(RuntimeError):
    """Raised when the configured BambuStudio CLI is not available."""


class BambuStudioSliceError(RuntimeError):
    """Raised when BambuStudio fails to slice a model."""


def resolve_bambu_studio_executable() -> str:
    """Resolve the configured BambuStudio executable."""
    configured = app_settings.bambu_studio_cli.strip()
    if not configured:
        raise BambuStudioUnavailableError("BambuStudio CLI is not configured. Set BAMBU_STUDIO_CLI.")

    configured_path = Path(configured)
    if configured_path.is_absolute():
        if configured_path.exists():
            return str(configured_path)
        raise BambuStudioUnavailableError(
            f"BambuStudio CLI not found at configured path: {configured_path}"
        )

    resolved = shutil.which(configured)
    if resolved:
        return resolved

    raise BambuStudioUnavailableError(
        "BambuStudio CLI not found. Install `bambu-studio` or set BAMBU_STUDIO_CLI to the executable path."
    )


def _write_json(path: Path, data: dict) -> None:
    """Write a preset file for the CLI."""
    path.write_text(json.dumps(data, indent=2), encoding="utf-8")


def _trim_output(text: str, limit: int = 1200) -> str:
    """Keep command output readable in API errors."""
    normalized = text.strip()
    if len(normalized) <= limit:
        return normalized
    return normalized[-limit:]


def slice_stl_with_bambu_studio(
    *,
    source_file: Path,
    printer_preset: dict,
    process_preset: dict,
    filament_preset: dict,
    output_filename: str,
    work_dir: Path,
    arrange: bool = True,
    orient: bool = True,
) -> Path:
    """Slice an STL file into a 3MF using BambuStudio CLI."""
    executable = resolve_bambu_studio_executable()

    if not source_file.exists():
        raise FileNotFoundError(f"Source STL not found: {source_file}")

    work_dir.mkdir(parents=True, exist_ok=True)
    presets_dir = work_dir / "presets"
    presets_dir.mkdir(exist_ok=True)
    output_dir = work_dir / "output"
    output_dir.mkdir(exist_ok=True)

    printer_path = presets_dir / "printer.json"
    process_path = presets_dir / "process.json"
    filament_path = presets_dir / "filament.json"

    _write_json(printer_path, printer_preset)
    _write_json(process_path, process_preset)
    _write_json(filament_path, filament_preset)

    command = [
        executable,
        "--debug",
        "2",
        "--load-settings",
        f"{printer_path};{process_path}",
        "--load-filaments",
        str(filament_path),
        "--arrange",
        "1" if arrange else "0",
    ]
    if orient:
        command.append("--orient")
    command.extend(
        [
            "--slice",
            "0",
            "--outputdir",
            str(output_dir),
            "--export-3mf",
            output_filename,
            str(source_file),
        ]
    )

    logger.info("Running BambuStudio slice command for %s", source_file.name)

    try:
        result = subprocess.run(
            command,
            cwd=work_dir,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=app_settings.bambu_studio_timeout_seconds,
            check=False,
        )
    except subprocess.TimeoutExpired as exc:
        raise BambuStudioSliceError(
            f"BambuStudio slice timed out after {app_settings.bambu_studio_timeout_seconds} seconds."
        ) from exc

    if result.returncode != 0:
        combined_output = "\n".join(
            part for part in (_trim_output(result.stdout), _trim_output(result.stderr)) if part
        )
        message = "BambuStudio failed to slice the STL."
        if combined_output:
            message = f"{message} {combined_output}"
        raise BambuStudioSliceError(message)

    expected_output = output_dir / output_filename
    if expected_output.exists():
        return expected_output

    fallback_outputs = sorted(output_dir.glob("*.3mf"))
    if len(fallback_outputs) == 1:
        return fallback_outputs[0]

    raise BambuStudioSliceError("BambuStudio completed without producing a sliced 3MF output.")
