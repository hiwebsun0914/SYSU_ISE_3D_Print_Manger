import { b1 as useOutletContext, u as useTranslation, J as useNavigate, d as useQuery, j as jsxRuntimeExports, r as reactExports, aZ as spoolbuddyApi } from "./index-CMdmMVx7.js";
function ScaleCalibration({ device, weight, weightStable, rawAdc }) {
  const { t } = useTranslation();
  const [calibrating, setCalibrating] = reactExports.useState(false);
  const [calStep, setCalStep] = reactExports.useState("idle");
  const [knownWeight, setKnownWeight] = reactExports.useState("500");
  const [tareRawAdc, setTareRawAdc] = reactExports.useState(null);
  const [taring, setTaring] = reactExports.useState(false);
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
    setTaring(true);
    try {
      await spoolbuddyApi.tare(device.device_id);
    } catch (e) {
      console.error("Failed to tare:", e);
    } finally {
      setTaring(false);
    }
  };
  const startCalibration = () => {
    setCalStep("tare");
  };
  const handleCalStep = async () => {
    if (calStep === "tare") {
      setCalibrating(true);
      try {
        setTareRawAdc(rawAdc);
        await spoolbuddyApi.tare(device.device_id);
        setCalStep("weight");
      } catch (e) {
        console.error("Failed to tare:", e);
      } finally {
        setCalibrating(false);
      }
    } else if (calStep === "weight") {
      const weightNum = parseFloat(knownWeight);
      if (rawAdc === null || !weightNum || weightNum <= 0) return;
      setCalibrating(true);
      try {
        await spoolbuddyApi.setCalibrationFactor(device.device_id, weightNum, rawAdc, tareRawAdc ?? void 0);
        setCalStep("idle");
      } catch (e) {
        console.error("Failed to calibrate:", e);
      } finally {
        setCalibrating(false);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-zinc-400", children: t("spoolbuddy.settings.currentWeight", "Current weight") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${weightStable ? "bg-green-500" : "bg-amber-500 animate-pulse"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-mono text-zinc-200", children: weight !== null ? `${weight.toFixed(1)} g` : "-- g" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mt-3 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.tareOffset", "Tare offset") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400 font-mono", children: device.tare_offset })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.settings.calFactor", "Cal. factor") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400 font-mono", children: device.calibration_factor.toFixed(2) })
        ] })
      ] })
    ] }),
    calStep === "idle" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleTare,
          disabled: taring,
          className: "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-700 text-zinc-200 hover:bg-zinc-600 disabled:opacity-40 transition-colors min-h-[44px]",
          children: taring ? "..." : t("spoolbuddy.weight.tare", "Tare")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: startCalibration,
          className: "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors min-h-[44px]",
          children: t("spoolbuddy.weight.calibrate", "Calibrate")
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 border border-zinc-700 rounded-lg p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-zinc-200", children: calStep === "tare" ? t("spoolbuddy.settings.calStep1", "Step 1: Remove all items from the scale") : t("spoolbuddy.settings.calStep2", "Step 2: Place known weight on scale") }),
      calStep === "weight" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-zinc-400", children: t("spoolbuddy.settings.knownWeight", "Known weight (g)") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-zinc-900 border border-zinc-600 rounded px-3 py-1.5 text-right text-base font-mono text-zinc-100", children: [
            knownWeight || "0",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500 ml-1", children: "g" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1", children: ["7", "8", "9", "backspace", "4", "5", "6", ".", "1", "2", "3", "0"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => numpadPress(key),
            className: `py-2 rounded text-sm font-medium transition-colors min-h-[36px] ${key === "backspace" ? "bg-zinc-700 text-zinc-300 hover:bg-zinc-600" : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700"}`,
            children: key === "backspace" ? "⌫" : key
          },
          key
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setCalStep("idle"),
            className: "flex-1 px-4 py-2 rounded-lg text-sm bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors min-h-[40px]",
            children: t("common.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleCalStep,
            disabled: calibrating,
            className: "flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-40 transition-colors min-h-[40px]",
            children: calibrating ? "..." : calStep === "tare" ? t("spoolbuddy.settings.setZero", "Set Zero") : t("spoolbuddy.settings.calibrateNow", "Calibrate")
          }
        )
      ] })
    ] })
  ] });
}
function SpoolBuddyCalibrationPage() {
  const { sbState } = useOutletContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: devices = [] } = useQuery({
    queryKey: ["spoolbuddy-devices"],
    queryFn: () => spoolbuddyApi.getDevices(),
    refetchInterval: 1e4
  });
  const device = sbState.deviceId ? devices.find((d) => d.device_id === sbState.deviceId) ?? devices[0] : devices[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => navigate("/spoolbuddy/settings"),
          className: "p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-zinc-100", children: t("spoolbuddy.settings.scaleCalibration", "Scale Calibration") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto", children: !device ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-zinc-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("spoolbuddy.settings.noDevice", "No SpoolBuddy device found") }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScaleCalibration,
      {
        device,
        weight: sbState.weight,
        weightStable: sbState.weightStable,
        rawAdc: sbState.rawAdc
      }
    ) })
  ] });
}
export {
  SpoolBuddyCalibrationPage
};
