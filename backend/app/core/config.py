import logging
import os
from pathlib import Path

from pydantic import AliasChoices, Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

# Application version - single source of truth
APP_VERSION = "0.2.2.2"
GITHUB_REPO = "maziggy/bambuddy"
BUG_REPORT_RELAY_URL = os.environ.get("BUG_REPORT_RELAY_URL", "https://bambuddy.cool/api/bug-report")

# App directory - where the application is installed (for static files)
_app_dir = Path(__file__).resolve().parent.parent.parent.parent

# Data directory - for persistent data (database, archives)
# Use DATA_DIR env var if set (Docker), otherwise use project root (local dev)
_data_dir_env = os.environ.get("DATA_DIR")
_data_dir = Path(_data_dir_env) if _data_dir_env else _app_dir

# Plate calibration directory - special handling to maintain backwards compatibility
# Docker: DATA_DIR/plate_calibration (e.g., /data/plate_calibration)
# Local dev: project_root/data/plate_calibration (original location)
_plate_cal_dir = Path(_data_dir_env) / "plate_calibration" if _data_dir_env else _app_dir / "data" / "plate_calibration"

# Log directory - use LOG_DIR env var if set, otherwise use app_dir/logs
_log_dir_env = os.environ.get("LOG_DIR")
_log_dir = Path(_log_dir_env) if _log_dir_env else _app_dir / "logs"


def _migrate_database() -> Path:
    """Migrate database from old name to new name if needed."""
    old_db = _data_dir / "bambutrack.db"
    new_db = _data_dir / "bambuddy.db"

    # If old database exists and new one doesn't, rename it
    if old_db.exists() and not new_db.exists():
        try:
            old_db.rename(new_db)
            logging.info("Migrated database: %s -> %s", old_db, new_db)
        except Exception as e:
            logging.warning("Could not migrate database: %s. Using old location.", e)
            return old_db

    # If old database exists (and new one now exists too), it was migrated
    # If only new exists, use new
    # If neither exists, use new (will be created)
    return new_db if new_db.exists() or not old_db.exists() else old_db


# Determine database path (handles migration)
_db_path = _migrate_database()


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "Bambuddy"
    debug: bool = False  # Default to production mode

    # Paths
    base_dir: Path = _data_dir  # For backwards compatibility
    archive_dir: Path = _data_dir / "archive"
    plate_calibration_dir: Path = _plate_cal_dir  # Plate detection references
    static_dir: Path = _app_dir / "static"  # Static files are part of app, not data
    log_dir: Path = _log_dir
    database_url: str = f"sqlite+aiosqlite:///{_db_path}"

    # Logging
    log_level: str = "INFO"  # Override with LOG_LEVEL env var or DEBUG=true
    log_to_file: bool = True  # Set to false to disable file logging

    # API
    api_prefix: str = "/api/v1"
    queue_contact_view_password: str = "sysuzgxytj"
    queue_admin_action_password: str = "sysuzgxytj"
    queue_sync_remote_base_url: str = ""
    queue_sync_shared_secret: str = ""
    queue_sync_interval_seconds: int = 15
    cors_allowed_origins: list[str] = Field(default_factory=list, alias="CORS_ALLOWED_ORIGINS")
    public_file_base_url: str = Field(
        default="",
        validation_alias=AliasChoices("PUBLIC_FILE_BASE_URL", "VITE_PUBLIC_FILE_BASE_URL"),
    )
    public_file_upload_base_url: str = Field(
        default="",
        validation_alias=AliasChoices("PUBLIC_FILE_UPLOAD_BASE_URL", "PUBLIC_FILE_BASE_URL", "VITE_PUBLIC_FILE_BASE_URL"),
    )
    makerworld_title_ai_api_key: str = Field(
        default="",
        validation_alias=AliasChoices("MAKERWORLD_TITLE_AI_API_KEY", "ZHIPUAI_API_KEY"),
    )
    makerworld_title_ai_model: str = Field(
        default="glm-4-plus",
        validation_alias=AliasChoices("MAKERWORLD_TITLE_AI_MODEL", "ZHIPUAI_MODEL"),
    )
    public_live_camera_frame_interval_seconds: float = Field(
        default=0.5,
        validation_alias=AliasChoices(
            "PUBLIC_LIVE_CAMERA_FRAME_INTERVAL_SECONDS",
            "PUBLIC_LIVE_CAMERA_UPLOAD_INTERVAL_SECONDS",
        ),
    )
    public_live_camera_rotation_seconds: float = 10.0
    public_live_camera_idle_timeout_seconds: float = 10.0
    public_live_camera_capture_timeout_seconds: int = 20
    public_live_camera_upload_timeout_seconds: int = 20

    # Headless slicing
    bambu_studio_cli: str = "bambu-studio"
    bambu_studio_timeout_seconds: int = 600
    online_slicer_base_url: str = ""
    online_slicer_embed_default: bool = True
    online_orca_slicer_base_url: str = Field(
        default="https://grid.space/kiri/",
        validation_alias=AliasChoices("ONLINE_KIRI_MOTO_URL", "ONLINE_ORCA_SLICER_BASE_URL"),
    )
    online_orca_slicer_embed_default: bool = Field(
        default=True,
        validation_alias=AliasChoices("ONLINE_KIRI_MOTO_EMBED_DEFAULT", "ONLINE_ORCA_SLICER_EMBED_DEFAULT"),
    )
    online_slicer_workspace_dir: Path = _data_dir / "online_slicer"
    online_slicer_mount_path: str = "/workspace/bambuddy"
    online_slicer_session_retention_hours: int = 72

    @field_validator("debug", mode="before")
    @classmethod
    def normalize_debug_value(cls, value):
        """Accept common deployment strings in addition to plain booleans."""
        if isinstance(value, str):
            normalized = value.strip().lower()
            if normalized in {"1", "true", "yes", "on", "debug", "dev", "development"}:
                return True
            if normalized in {"0", "false", "no", "off", "release", "prod", "production"}:
                return False
        return value

    @field_validator("cors_allowed_origins", mode="before")
    @classmethod
    def normalize_cors_allowed_origins(cls, value):
        """Accept comma-separated strings for CORS origins."""
        if value is None or value == "":
            return []
        if isinstance(value, str):
            return [part.strip() for part in value.split(",") if part.strip()]
        return value

settings = Settings()

# Ensure directories exist
settings.archive_dir.mkdir(parents=True, exist_ok=True)
settings.plate_calibration_dir.mkdir(parents=True, exist_ok=True)
settings.static_dir.mkdir(exist_ok=True)
settings.online_slicer_workspace_dir.mkdir(parents=True, exist_ok=True)
if settings.log_to_file:
    settings.log_dir.mkdir(exist_ok=True)
