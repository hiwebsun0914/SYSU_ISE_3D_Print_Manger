"""Tests for printer connection error reporting."""

from unittest.mock import MagicMock

import paho.mqtt.client as mqtt
from paho.mqtt.reasoncodes import ReasonCode

from backend.app.services.bambu_mqtt import BambuMQTTClient
from backend.app.services.printer_manager import printer_state_to_dict


def test_mqtt_not_authorized_sets_clear_connection_error():
    client = BambuMQTTClient(
        ip_address="192.168.1.100",
        serial_number="TEST123",
        access_code="12345678",
    )
    state_changes = []
    client.on_state_change = lambda s: state_changes.append((s.connected, s.connection_error))
    mock_client = MagicMock()
    rc = ReasonCode(mqtt.CONNACK >> 4, identifier=0x87)

    client._on_connect(mock_client, None, None, rc)

    assert client.state.connected is False
    assert client.state.connection_error is not None
    assert "Not authorized" in client.state.connection_error
    assert "Developer Mode" in client.state.connection_error
    assert state_changes == [(False, client.state.connection_error)]
    mock_client.subscribe.assert_not_called()


def test_printer_state_to_dict_preserves_connection_error():
    state = MagicMock()
    state.connected = False
    state.connection_error = "Not authorized - check printer access code and ensure Developer Mode/LAN mode is enabled"
    state.state = "unknown"
    state.current_print = None
    state.subtask_name = None
    state.gcode_file = None
    state.progress = 0
    state.remaining_time = 0
    state.layer_num = 0
    state.total_layers = 0
    state.temperatures = {}
    state.hms_errors = []
    state.ams_status_main = 0
    state.ams_status_sub = 0
    state.tray_now = 255
    state.wifi_signal = None
    state.raw_data = {}
    state.stg_cur = -1
    state.firmware_version = None
    state.kprofiles = []
    state.sdcard = False
    state.store_to_sdcard = False
    state.timelapse = False
    state.ipcam = False
    state.wired_network = False
    state.nozzles = []
    state.nozzle_rack = []
    state.print_options = None
    state.stg = []
    state.airduct_mode = 0
    state.speed_level = 2
    state.chamber_light = False
    state.active_extruder = 0
    state.ams_mapping = []
    state.ams_extruder_map = {}
    state.mc_print_sub_stage = 0
    state.last_ams_update = 0.0
    state.printable_objects = {}
    state.cooling_fan_speed = None
    state.big_fan1_speed = None
    state.big_fan2_speed = None
    state.heatbreak_fan_speed = None

    result = printer_state_to_dict(state)

    assert result["connected"] is False
    assert "Not authorized" in result["connection_error"]
