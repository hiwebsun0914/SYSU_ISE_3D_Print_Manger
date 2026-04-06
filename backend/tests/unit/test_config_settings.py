"""Unit tests for application settings parsing."""

from pathlib import Path

from backend.app.core.config import Settings


class TestSettingsParsing:
    def test_debug_accepts_release_string(self):
        settings = Settings(debug="release")

        assert settings.debug is False

    def test_debug_accepts_debug_string(self):
        settings = Settings(debug="debug")

        assert settings.debug is True

    def test_ignores_extra_keys_from_env_file(self, tmp_path: Path):
        env_file = tmp_path / "test.env"
        env_file.write_text(
            "\n".join(
                [
                    "PUID=0",
                    "PGID=0",
                    "TZ=Asia/Shanghai",
                    "PORT=8000",
                    "ONLINE_KIRI_MOTO_URL=https://grid.space/kiri/custom/",
                ]
            ),
            encoding="utf-8",
        )

        settings = Settings(_env_file=env_file)

        assert settings.online_orca_slicer_base_url == "https://grid.space/kiri/custom/"
