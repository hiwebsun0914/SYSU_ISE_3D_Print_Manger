"""Unit tests for application settings parsing."""

from backend.app.core.config import Settings


class TestSettingsParsing:
    def test_debug_accepts_release_string(self):
        settings = Settings(debug="release")

        assert settings.debug is False

    def test_debug_accepts_debug_string(self):
        settings = Settings(debug="debug")

        assert settings.debug is True
