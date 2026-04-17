import { c as createLucideIcon, u as useTranslation, r as reactExports, aY as spoolbuddyApi, j as jsxRuntimeExports, X, b0 as useOutletContext, d as useQuery, Z as Zap, i as FileText } from "./index-By7NB6Yd.js";
import { P as Play } from "./play-Cg_XO2GL.js";
import { W as WandSparkles } from "./wand-sparkles-BvxI5tcI.js";
const __iconNode = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
];
const RotateCw = createLucideIcon("rotate-cw", __iconNode);
function DiagnosticModal({ type, deviceId, onClose }) {
  const { t } = useTranslation();
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const [output, setOutput] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [hasRun, setHasRun] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !isRunning) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRunning, onClose]);
  const runDiagnostic = reactExports.useCallback(async () => {
    setIsRunning(true);
    setOutput("");
    setError("");
    setHasRun(true);
    try {
      setOutput(t("spoolbuddy.diagnostic.queuing", "Queuing diagnostic on device...\n"));
      await spoolbuddyApi.queueDiagnostics(deviceId, type);
      let result = null;
      const maxRetries = 60;
      let retryCount = 0;
      while (retryCount < maxRetries && !result) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        try {
          result = await spoolbuddyApi.getDiagnosticResult(deviceId, type);
          break;
        } catch {
          retryCount++;
          if (retryCount % 4 === 0) {
            setOutput((prev) => prev + ".");
          }
        }
      }
      if (!result) {
        throw new Error("Diagnostic timed out - device did not report results");
      }
      setOutput(result.output);
      if (!result.success) {
        setError(`Exit code: ${result.exit_code}`);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setOutput("");
    } finally {
      setIsRunning(false);
    }
  }, [type, deviceId, t]);
  const title = type === "scale" ? t("spoolbuddy.diagnostic.scaleTitle", "Scale Diagnostic") : type === "read_tag" ? t("spoolbuddy.diagnostic.readTagTitle", "Read Tag Diagnostic") : t("spoolbuddy.diagnostic.nfcTitle", "NFC Reader Diagnostic");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-zinc-800 rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col animate-slide-up",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4 border-b border-zinc-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "text-zinc-400 hover:text-white transition-colors",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto p-4 bg-black/50 font-mono text-sm", children: isRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-green-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("spoolbuddy.diagnostic.running", "Running diagnostic on device...") })
            ] }) : output ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 whitespace-pre-wrap break-words", children: output }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-400 mt-2", children: [
                "❌ ",
                error
              ] })
            ] }) : hasRun ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-400", children: [
              "ERROR: ",
              error
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: t("spoolbuddy.diagnostic.completed", "Diagnostic completed successfully.") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-zinc-500", children: [
              t("spoolbuddy.diagnostic.clickStart", 'Click "Run Diagnostic" to start the hardware diagnostic on'),
              " ",
              deviceId,
              "."
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 p-4 border-t border-zinc-700 bg-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: runDiagnostic,
                  disabled: isRunning,
                  className: "flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-4 py-2 rounded font-semibold text-white transition-colors",
                  children: isRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" }),
                    t("spoolbuddy.diagnostic.runningBtn", "Running...")
                  ] }) : hasRun ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { size: 16 }),
                    t("spoolbuddy.diagnostic.runAgain", "Run Again")
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16 }),
                    t("spoolbuddy.diagnostic.runBtn", "Run Diagnostic")
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600 text-white font-semibold transition-colors",
                  children: t("spoolbuddy.diagnostic.close", "Close")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function formatUptime(seconds) {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  return `${h}h ${m}m`;
}
function formatDateTime(iso) {
  if (!iso) return "-";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(void 0, { month: "short", day: "numeric" }) + " " + d.toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "-";
  }
}
const BLANK_OPTIONS = [
  { label: "Off", value: 0 },
  { label: "1m", value: 60 },
  { label: "2m", value: 120 },
  { label: "5m", value: 300 },
  { label: "10m", value: 600 },
  { label: "30m", value: 1800 }
];
function DeviceTab({ device }) {
  const { t } = useTranslation();
  const [diagnosticOpen, setDiagnosticOpen] = reactExports.useState(null);
  const [backendUrl, setBackendUrl] = reactExports.useState("");
  const [apiToken, setApiToken] = reactExports.useState("");
  const [systemBusy, setSystemBusy] = reactExports.useState(false);
  const [systemMsg, setSystemMsg] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!backendUrl && device.backend_url) {
      setBackendUrl(device.backend_url);
    }
  }, [device.backend_url, backendUrl]);
  const saveConfig = async () => {
    if (!backendUrl.trim()) {
      setSystemMsg({ type: "error", text: t("spoolbuddy.settings.systemFieldsRequired", "Backend URL is required.") });
      return;
    }
    setSystemBusy(true);
    setSystemMsg(null);
    try {
      await spoolbuddyApi.updateSystemConfig(
        device.device_id,
        backendUrl.trim(),
        apiToken.trim() || void 0
      );
      setSystemMsg({ type: "ok", text: t("spoolbuddy.settings.systemQueued", "Config queued.") });
    } catch (e) {
      setSystemMsg({ type: "error", text: e instanceof Error ? e.message : t("common.error", "Error") });
    } finally {
      setSystemBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300 mb-2", children: t("spoolbuddy.settings.nfcReader", "NFC Reader") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.type", "Type") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: device.nfc_reader_type || "N/A" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.connection", "Connection") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: device.nfc_connection || "N/A" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.status.status", "Status") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${device.nfc_ok ? "bg-green-500" : device.nfc_reader_type ? "bg-red-500" : "bg-zinc-600"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: device.nfc_ok ? "text-green-400" : device.nfc_reader_type ? "text-red-400" : "text-zinc-500", children: device.nfc_ok ? t("spoolbuddy.status.nfcReady", "Ready") : device.nfc_reader_type ? t("common.error", "Error") : t("spoolbuddy.settings.notConnected", "N/A") })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300 mb-2", children: t("spoolbuddy.settings.deviceInfo", "Device Info") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.hostname", "Host") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 truncate ml-2", children: device.hostname })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: "IP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300", children: device.ip_address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.uptime", "Uptime") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300", children: formatUptime(device.uptime_s) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: "ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400 font-mono truncate ml-2", children: device.device_id })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300", children: t("spoolbuddy.settings.systemConfig", "Backend & Auth") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: backendUrl,
            onChange: (e) => setBackendUrl(e.target.value),
            placeholder: "http://192.168.1.100:5000",
            className: "w-full px-2 py-1.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 text-xs"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              value: apiToken,
              onChange: (e) => setApiToken(e.target.value),
              placeholder: t("spoolbuddy.settings.apiTokenPlaceholder", "API token"),
              className: "flex-1 px-2 py-1.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 text-xs"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: saveConfig,
              disabled: systemBusy,
              className: "px-3 py-1.5 rounded bg-green-700 hover:bg-green-600 disabled:bg-zinc-700 text-xs font-medium text-zinc-100",
              children: t("spoolbuddy.settings.saveConfig", "Save")
            }
          )
        ] }),
        systemMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${systemMsg.type === "ok" ? "text-green-400" : "text-red-400"}`, children: systemMsg.text })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setDiagnosticOpen("nfc"),
            className: "flex-1 bg-blue-700 hover:bg-blue-600 transition-colors rounded-lg p-2 flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-4 h-4 text-blue-300 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-blue-100", children: t("spoolbuddy.settings.nfcDiagnostic", "NFC Diagnostic") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setDiagnosticOpen("scale"),
            className: "flex-1 bg-yellow-700 hover:bg-yellow-600 transition-colors rounded-lg p-2 flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-yellow-300 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-yellow-100", children: t("spoolbuddy.settings.scaleDiagnostic", "Scale Diagnostic") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setDiagnosticOpen("read_tag"),
            className: "flex-1 bg-emerald-700 hover:bg-emerald-600 transition-colors rounded-lg p-2 flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-emerald-300 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-emerald-100", children: t("spoolbuddy.settings.readTagDiagnostic", "Read Tag") })
            ]
          }
        )
      ] })
    ] }),
    diagnosticOpen && device && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiagnosticModal,
      {
        type: diagnosticOpen,
        deviceId: device.device_id,
        onClose: () => setDiagnosticOpen(null)
      }
    )
  ] });
}
function DisplayTab({ device, onBrightnessChange, onBlankTimeoutChange }) {
  const { t } = useTranslation();
  const [brightness, setBrightness] = reactExports.useState(device.display_brightness);
  const [blankTimeout, setBlankTimeout] = reactExports.useState(device.display_blank_timeout);
  const [saved, setSaved] = reactExports.useState(false);
  const debounceRef = reactExports.useRef(void 0);
  const savedTimerRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    setBrightness(device.display_brightness);
    setBlankTimeout(device.display_blank_timeout);
  }, [device.display_brightness, device.display_blank_timeout]);
  const showSaved = reactExports.useCallback(() => {
    setSaved(true);
    if (savedTimerRef.current) clearTimeout(savedTimerRef.current);
    savedTimerRef.current = setTimeout(() => setSaved(false), 1500);
  }, []);
  const sendDisplayUpdate = reactExports.useCallback((b, bt) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      spoolbuddyApi.updateDisplay(device.device_id, b, bt).then(() => showSaved()).catch((e) => console.error("Failed to update display:", e));
    }, 300);
  }, [device.device_id, showSaved]);
  const handleBrightnessChange = (value) => {
    setBrightness(value);
    onBrightnessChange(value);
    sendDisplayUpdate(value, blankTimeout);
  };
  const handleBlankTimeoutChange = (value) => {
    setBlankTimeout(value);
    onBlankTimeoutChange(value);
    sendDisplayUpdate(brightness, value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300", children: t("spoolbuddy.settings.brightness", "Brightness") }),
        saved && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-green-400 flex items-center gap-1 animate-pulse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-3 h-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
          t("spoolbuddy.settings.saved", "Saved")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 text-zinc-500 flex-shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 100,
            value: brightness,
            onChange: (e) => handleBrightnessChange(parseInt(e.target.value)),
            className: "flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono text-zinc-400 w-10 text-right", children: [
          brightness,
          "%"
        ] })
      ] }),
      !device.has_backlight && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-600 mt-2", children: t("spoolbuddy.settings.noBacklight", "No DSI backlight detected. Brightness control requires a DSI display.") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300 mb-1", children: t("spoolbuddy.settings.screenBlank", "Screen Blank Timeout") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-500 mb-3", children: t("spoolbuddy.settings.screenBlankDesc", "Screen turns off after inactivity. Touch to wake.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: BLANK_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handleBlankTimeoutChange(opt.value),
          className: `px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[40px] ${blankTimeout === opt.value ? "bg-green-600 text-white" : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"}`,
          children: opt.label
        },
        opt.value
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-600 text-center", children: t("spoolbuddy.settings.displayNote", "Brightness is applied as a software filter.") })
  ] });
}
function StepIndicator({ step, labels }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-16 shrink-0 pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${step === "tare" ? "bg-green-600 text-white" : "bg-green-600/20 text-green-400"}`, children: step === "weight" ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-3.5 h-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) : "1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] mt-0.5 ${step === "tare" ? "text-green-400 font-medium" : "text-green-400/60"}`, children: labels.tare }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-px h-5 my-1 ${step === "weight" ? "bg-green-600/40" : "bg-zinc-700"}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${step === "weight" ? "bg-green-600 text-white" : "bg-zinc-700 text-zinc-500"}`, children: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] mt-0.5 ${step === "weight" ? "text-green-400 font-medium" : "text-zinc-600"}`, children: labels.weight })
  ] });
}
function ScaleTab({ device, weight, weightStable, rawAdc }) {
  const { t } = useTranslation();
  const [calStep, setCalStep] = reactExports.useState("idle");
  const [knownWeight, setKnownWeight] = reactExports.useState("500");
  const [tareRawAdc, setTareRawAdc] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  const [status, setStatus] = reactExports.useState(null);
  const numpadPress = (key) => {
    if (key === "backspace") {
      setKnownWeight((v) => v.slice(0, -1) || "");
    } else if (key === "." && !knownWeight.includes(".")) {
      setKnownWeight((v) => v + ".");
    } else if (key >= "0" && key <= "9") {
      setKnownWeight((v) => v === "0" ? key : v + key);
    }
  };
  const handleTare = async () => {
    setBusy(true);
    setStatus(null);
    try {
      await spoolbuddyApi.tare(device.device_id);
      setStatus({ type: "ok", msg: t("spoolbuddy.settings.tareSet", "Tare command sent. Waiting for device...") });
    } catch {
      setStatus({ type: "error", msg: t("spoolbuddy.settings.tareFailed", "Failed to send tare command") });
    } finally {
      setBusy(false);
    }
  };
  const handleCalStep = async () => {
    if (calStep === "tare") {
      setBusy(true);
      setStatus(null);
      try {
        setTareRawAdc(rawAdc);
        await spoolbuddyApi.tare(device.device_id);
        setStatus({ type: "ok", msg: t("spoolbuddy.settings.zeroSet", "Zero point set. Place known weight on scale.") });
        setCalStep("weight");
      } catch {
        setStatus({ type: "error", msg: t("spoolbuddy.settings.tareFailed", "Failed to send tare command") });
      } finally {
        setBusy(false);
      }
    } else if (calStep === "weight") {
      const weightNum = parseFloat(knownWeight);
      if (rawAdc === null || !weightNum || weightNum <= 0) return;
      setBusy(true);
      setStatus(null);
      try {
        await spoolbuddyApi.setCalibrationFactor(device.device_id, weightNum, rawAdc, tareRawAdc ?? void 0);
        setStatus({ type: "ok", msg: t("spoolbuddy.settings.calibrationDone", "Calibration complete!") });
        setCalStep("idle");
      } catch {
        setStatus({ type: "error", msg: t("spoolbuddy.settings.calibrationFailed", "Calibration failed") });
      } finally {
        setBusy(false);
      }
    }
  };
  if (calStep === "idle") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${weightStable ? "bg-green-500" : "bg-amber-500 animate-pulse"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-mono text-zinc-200", children: weight !== null ? `${weight.toFixed(1)} g` : "-- g" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-zinc-500 text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              t("spoolbuddy.settings.tareOffset", "Tare"),
              ": ",
              device.tare_offset
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1.5", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              t("spoolbuddy.settings.calFactor", "Factor"),
              ": ",
              device.calibration_factor.toFixed(2)
            ] })
          ] })
        ] }),
        device.last_calibrated_at && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-zinc-600 mt-1", children: [
          t("spoolbuddy.settings.lastCalibrated", "Last calibrated"),
          ": ",
          formatDateTime(device.last_calibrated_at)
        ] })
      ] }),
      status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg px-3 py-2 mb-3 text-sm ${status.type === "ok" ? "bg-green-900/30 text-green-300 border border-green-800" : "bg-red-900/30 text-red-300 border border-red-800"}`, children: status.msg }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleTare,
            disabled: busy,
            className: "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-700 text-zinc-200 hover:bg-zinc-600 disabled:opacity-40 transition-colors min-h-[44px] flex items-center justify-center gap-2",
            children: [
              busy && /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
              ] }),
              t("spoolbuddy.weight.tare", "Tare")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setCalStep("tare");
              setStatus(null);
            },
            className: "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors min-h-[44px]",
            children: t("spoolbuddy.weight.calibrate", "Calibrate")
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { step: calStep, labels: { tare: t("spoolbuddy.weight.tare", "Tare"), weight: t("spoolbuddy.settings.knownWeight", "Known weight") } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-1.5 mb-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full shrink-0 ${weightStable ? "bg-green-500" : "bg-amber-500 animate-pulse"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-mono text-zinc-200", children: weight !== null ? `${weight.toFixed(1)} g` : "-- g" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs ml-auto ${weightStable ? "text-green-400" : "text-amber-400"}`, children: weightStable ? t("spoolbuddy.settings.stable", "Stable") : t("spoolbuddy.settings.settling", "Settling...") })
      ] }),
      status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg px-3 py-1.5 mb-1.5 text-xs ${status.type === "ok" ? "bg-green-900/30 text-green-300 border border-green-800" : "bg-red-900/30 text-red-300 border border-red-800"}`, children: status.msg }),
      calStep === "tare" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-300 mb-3", children: t("spoolbuddy.settings.calStep1", "Remove all items from the scale and press Set Zero.") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-zinc-400 shrink-0", children: t("spoolbuddy.settings.knownWeight", "Known weight") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-zinc-900 border border-zinc-600 rounded px-3 py-1 text-right text-lg font-mono text-zinc-100", children: [
            knownWeight || "0",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 ml-1", children: "g" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1 mb-1.5", children: ["7", "8", "9", "backspace", "4", "5", "6", ".", "1", "2", "3", "0"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => numpadPress(key),
            className: `rounded text-lg font-medium transition-colors h-[48px] active:scale-95 ${key === "backspace" ? "bg-zinc-700 text-zinc-300 hover:bg-zinc-600" : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700"}`,
            children: key === "backspace" ? "⌫" : key
          },
          key
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setCalStep("idle");
              setStatus(null);
            },
            className: "flex-1 px-4 py-2 rounded-lg text-sm bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors h-[40px]",
            children: t("common.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleCalStep,
            disabled: busy,
            className: "flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-40 transition-colors h-[40px] flex items-center justify-center gap-2",
            children: [
              busy && /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
              ] }),
              calStep === "tare" ? t("spoolbuddy.settings.setZero", "Set Zero") : t("spoolbuddy.settings.calibrateNow", "Calibrate")
            ]
          }
        )
      ] })
    ] })
  ] });
}
function UpdatesTab({ device }) {
  const { t } = useTranslation();
  const [busy, setBusy] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [sshExpanded, setSSHExpanded] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const isUpdating = device.update_status === "pending" || device.update_status === "updating";
  reactExports.useEffect(() => {
    if (isUpdating && busy === "applying") {
      setBusy(null);
    }
  }, [isUpdating, busy]);
  reactExports.useEffect(() => {
    const handleOnline = () => {
      if (isUpdating) {
        setTimeout(() => window.location.reload(), 1e3);
      }
    };
    window.addEventListener("spoolbuddy-online", handleOnline);
    return () => window.removeEventListener("spoolbuddy-online", handleOnline);
  }, [isUpdating]);
  const { data: updateResult, refetch } = useQuery({
    queryKey: ["spoolbuddy-update-check", device.device_id],
    queryFn: () => spoolbuddyApi.checkDaemonUpdate(device.device_id),
    staleTime: 0
  });
  const { data: sshKeyData } = useQuery({
    queryKey: ["spoolbuddy-ssh-key"],
    queryFn: () => spoolbuddyApi.getSSHPublicKey(),
    enabled: sshExpanded,
    staleTime: Infinity
  });
  const checkForUpdates = async () => {
    setBusy("checking");
    setError(null);
    try {
      await refetch();
    } finally {
      setBusy(null);
    }
  };
  const applyUpdate = async () => {
    setBusy("applying");
    setError(null);
    try {
      await spoolbuddyApi.triggerUpdate(device.device_id);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to trigger update");
      setBusy(null);
    }
  };
  const showSpinner = busy != null || isUpdating;
  const copyKey = () => {
    if (sshKeyData?.public_key) {
      navigator.clipboard.writeText(sshKeyData.public_key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  const displayVersion = device.firmware_version || (updateResult?.current_version && updateResult.current_version !== "0.0.0" ? updateResult.current_version : null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.currentVersion", "Current Version") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-200 font-mono", children: displayVersion || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 italic text-xs", children: t("spoolbuddy.settings.versionPending", "Waiting for daemon...") }) })
      ] }),
      showSpinner ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin text-green-400 flex-shrink-0", viewBox: "0 0 24 24", fill: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-xs", children: busy === "checking" ? t("spoolbuddy.settings.checking", "Checking for updates...") : device.update_message || t("spoolbuddy.settings.updateWaiting", "Updating...") })
      ] }) : device.update_status === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-300", children: device.update_message || t("spoolbuddy.settings.updateFailed", "Update failed") }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-300", children: error }) : updateResult?.update_available ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-300", children: [
        t("spoolbuddy.settings.updateAvailable", "Update available"),
        ": ",
        displayVersion,
        " → ",
        updateResult.latest_version
      ] }) : null,
      !showSpinner && (updateResult?.update_available ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: applyUpdate,
          disabled: !device.online,
          className: "w-full px-3 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-40 transition-colors",
          children: !device.online ? t("spoolbuddy.settings.deviceOffline", "Device Offline") : t("spoolbuddy.settings.applyUpdate", "Apply Update")
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: checkForUpdates,
            className: "flex-1 px-3 py-2 rounded-lg text-xs font-medium bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors",
            children: t("spoolbuddy.settings.checkUpdates", "Check for Updates")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: applyUpdate,
            disabled: !device.online,
            className: "px-3 py-2 rounded-lg text-xs font-medium bg-zinc-700 text-zinc-400 hover:bg-zinc-600 hover:text-zinc-200 disabled:opacity-40 transition-colors",
            children: t("spoolbuddy.settings.forceUpdate", "Force Update")
          }
        )
      ] }))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSSHExpanded(!sshExpanded),
          className: "w-full flex justify-between items-center text-xs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-zinc-400", children: t("spoolbuddy.settings.sshSetup", "SSH Setup") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: `w-3 h-3 text-zinc-500 transition-transform ${sshExpanded ? "rotate-180" : ""}`,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 2,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
              }
            )
          ]
        }
      ),
      sshExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-500", children: t("spoolbuddy.settings.sshDescription", "SSH key is deployed automatically. For manual setup, add this key to ~/.ssh/authorized_keys on the device.") }),
        sshKeyData?.public_key ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-zinc-900 rounded p-2 text-[10px] text-zinc-400 font-mono break-all whitespace-pre-wrap", children: sshKeyData.public_key }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: copyKey,
              className: "absolute top-1 right-1 px-1.5 py-0.5 rounded text-[10px] bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors",
              children: copied ? t("common.copied", "Copied!") : t("common.copy", "Copy")
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-zinc-500 italic", children: t("spoolbuddy.settings.sshKeyLoading", "Loading...") })
      ] })
    ] })
  ] });
}
function UsageBar({ percent, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-2 bg-zinc-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `h-full rounded-full transition-all ${color}`,
      style: { width: `${Math.min(100, Math.max(0, percent))}%` }
    }
  ) });
}
function formatSystemUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor(seconds % 86400 / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}
function SystemTab({ device }) {
  const { t } = useTranslation();
  const stats = device.system_stats;
  if (!stats) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-500", children: t("spoolbuddy.settings.systemStatsWaiting", "Waiting for system stats...") }) });
  }
  const mem = stats.memory;
  const disk = stats.disk;
  const tempColor = (stats.cpu_temp_c ?? 0) >= 80 ? "text-red-400" : (stats.cpu_temp_c ?? 0) >= 65 ? "text-amber-400" : "text-green-400";
  const memColor = (mem?.percent ?? 0) >= 90 ? "bg-red-500" : (mem?.percent ?? 0) >= 70 ? "bg-amber-500" : "bg-green-500";
  const diskColor = (disk?.percent ?? 0) >= 90 ? "bg-red-500" : (disk?.percent ?? 0) >= 70 ? "bg-amber-500" : "bg-green-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300 mb-2", children: "CPU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.cores", "Cores") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: stats.cpu_count ?? "-" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.loadAvg", "Load Avg") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: stats.load_avg ? stats.load_avg.join(" / ") : "-" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.temp", "Temp") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono font-medium ${tempColor}`, children: stats.cpu_temp_c != null ? `${stats.cpu_temp_c}°C` : "-" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300 mb-2", children: t("spoolbuddy.settings.memory", "Memory") }),
        mem ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UsageBar, { percent: mem.percent ?? 0, color: memColor }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.used", "Used") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-zinc-300 font-mono", children: [
                mem.used_mb,
                " / ",
                mem.total_mb,
                " MB"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.available", "Free") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-zinc-300 font-mono", children: [
                mem.available_mb,
                " MB"
              ] })
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-zinc-500", children: "-" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zinc-800 rounded-lg px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300 shrink-0", children: t("spoolbuddy.settings.disk", "Disk") }),
      disk ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UsageBar, { percent: disk.percent ?? 0, color: diskColor }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-zinc-300 font-mono shrink-0", children: [
          disk.used_gb,
          " / ",
          disk.total_gb,
          " GB"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-zinc-500", children: "-" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300 mb-1.5", children: t("spoolbuddy.settings.osInfo", "OS") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
          stats.os?.os && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.distro", "Distro") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 truncate ml-2", children: stats.os.os })
          ] }),
          stats.os?.kernel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.kernel", "Kernel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono truncate ml-2", children: stats.os.kernel })
          ] }),
          stats.os?.arch && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.arch", "Arch") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: stats.os.arch })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-zinc-300 mb-1.5", children: t("spoolbuddy.settings.runtime", "Runtime") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
          stats.os?.python && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: "Python" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300 font-mono", children: stats.os.python })
          ] }),
          stats.system_uptime_s != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.systemUptime", "Uptime") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-300", children: formatSystemUptime(stats.system_uptime_s) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function SpoolBuddySettingsPage() {
  const { sbState, setDisplayBrightness, setDisplayBlankTimeout } = useOutletContext();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = reactExports.useState("device");
  const { data: devices = [] } = useQuery({
    queryKey: ["spoolbuddy-devices"],
    queryFn: () => spoolbuddyApi.getDevices(),
    refetchInterval: 1e4
  });
  const device = sbState.deviceId ? devices.find((d) => d.device_id === sbState.deviceId) ?? devices[0] : devices[0];
  const tabs = [
    { id: "device", label: t("spoolbuddy.settings.tabDevice", "Device") },
    { id: "display", label: t("spoolbuddy.settings.tabDisplay", "Display") },
    { id: "scale", label: t("spoolbuddy.settings.tabScale", "Scale") },
    { id: "updates", label: t("spoolbuddy.settings.tabUpdates", "Updates") },
    { id: "system", label: t("spoolbuddy.settings.tabSystem", "System") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-zinc-100 mb-3", children: t("spoolbuddy.nav.settings", "Settings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 bg-zinc-800/50 rounded-lg p-1 mb-4", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActiveTab(tab.id),
        className: `flex-1 px-2 py-2 rounded-md text-sm font-medium transition-colors min-h-[36px] ${activeTab === tab.id ? "bg-zinc-700 text-zinc-100" : "text-zinc-500 hover:text-zinc-300"}`,
        children: tab.label
      },
      tab.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto", children: !device ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-zinc-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("spoolbuddy.settings.noDevice", "No SpoolBuddy device found") }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      activeTab === "device" && /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceTab, { device }),
      activeTab === "display" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        DisplayTab,
        {
          device,
          onBrightnessChange: setDisplayBrightness,
          onBlankTimeoutChange: setDisplayBlankTimeout
        }
      ),
      activeTab === "scale" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScaleTab,
        {
          device,
          weight: sbState.weight,
          weightStable: sbState.weightStable,
          rawAdc: sbState.rawAdc
        }
      ),
      activeTab === "updates" && /* @__PURE__ */ jsxRuntimeExports.jsx(UpdatesTab, { device }),
      activeTab === "system" && /* @__PURE__ */ jsxRuntimeExports.jsx(SystemTab, { device })
    ] }) })
  ] });
}
export {
  SpoolBuddySettingsPage
};
