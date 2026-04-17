import { aD as useParams, au as useSearchParams, u as useTranslation, b as useQueryClient, r as reactExports, d as useQuery, aS as APP_TITLE, j as jsxRuntimeExports, aT as getApiBaseUrl, aU as APP_LOGO_ALT, aV as APP_LOGO_SRC, J as Printer, O as Layers, D as formatDuration, R as formatETA, aW as getWebSocketBaseUrl, aX as getPublicPrinterLiveFrameUrl, f as api } from "./index-CeSodUhS.js";
import { T as Timer } from "./timer-indwNqib.js";
import { C as Clock } from "./clock-rmajxGGN.js";
const PUBLIC_LIVE_FRAME_REFRESH_INTERVAL = 500;
function parseConfig(params) {
  const show = params.get("show")?.split(",") || ["progress", "layers", "eta", "filename", "status"];
  const fpsParam = parseInt(params.get("fps") || "15", 10);
  const fps = Math.min(Math.max(isNaN(fpsParam) ? 15 : fpsParam, 1), 30);
  const cameraParam = params.get("camera");
  const showCamera = cameraParam !== "false" && cameraParam !== "0";
  return {
    size: params.get("size") || "medium",
    fps,
    showCamera,
    showProgress: show.includes("progress"),
    showLayers: show.includes("layers"),
    showEta: show.includes("eta"),
    showFilename: show.includes("filename"),
    showStatus: show.includes("status"),
    showPrinter: show.includes("printer")
  };
}
function getStatusText(status, t) {
  if (status.stg_cur_name) return status.stg_cur_name;
  switch (status.state) {
    case "RUNNING":
      return t("streamOverlay.status.printing");
    case "PAUSE":
      return t("streamOverlay.status.paused");
    case "FINISH":
      return t("streamOverlay.status.finished");
    case "FAILED":
      return t("streamOverlay.status.failed");
    case "IDLE":
      return t("streamOverlay.status.idle");
    default:
      return status.state || t("streamOverlay.status.unknown");
  }
}
function getSizeClasses(size) {
  switch (size) {
    case "small":
      return {
        container: "p-3",
        text: "text-sm",
        textLarge: "text-lg",
        progressHeight: "h-2",
        icon: "w-3 h-3",
        gap: "gap-2",
        logoHeight: "h-12"
      };
    case "large":
      return {
        container: "p-6",
        text: "text-xl",
        textLarge: "text-3xl",
        progressHeight: "h-4",
        icon: "w-6 h-6",
        gap: "gap-4",
        logoHeight: "h-24"
      };
    case "medium":
    default:
      return {
        container: "p-4",
        text: "text-base",
        textLarge: "text-xl",
        progressHeight: "h-3",
        icon: "w-4 h-4",
        gap: "gap-3",
        logoHeight: "h-16"
      };
  }
}
function StreamOverlayPage() {
  const { printerId } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const id = parseInt(printerId || "0", 10);
  const [imageKey, setImageKey] = reactExports.useState(Date.now());
  const publicLiveFrameUrl = getPublicPrinterLiveFrameUrl(id, imageKey);
  const usesPublicLiveFrames = publicLiveFrameUrl !== null;
  const config = reactExports.useMemo(() => parseConfig(searchParams), [searchParams]);
  const sizes = getSizeClasses(config.size);
  const { data: printer } = useQuery({
    queryKey: ["printer", id],
    queryFn: () => api.getPrinter(id),
    enabled: id > 0
  });
  const { data: status } = useQuery({
    queryKey: ["printerStatus", id],
    queryFn: () => api.getPrinterStatus(id),
    enabled: id > 0,
    refetchInterval: 2e3
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const timeFormat = settings?.time_format || "system";
  reactExports.useEffect(() => {
    if (!id) return;
    const wsUrl = `${getWebSocketBaseUrl()}/api/v1/ws`;
    const ws = new WebSocket(wsUrl);
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "printer_status" && data.printer_id === id) {
          queryClient.setQueryData(["printerStatus", id], data.status);
        }
      } catch {
      }
    };
    ws.onerror = () => {
    };
    return () => {
      ws.close();
    };
  }, [id, queryClient]);
  reactExports.useEffect(() => {
    document.title = APP_TITLE;
    return () => {
      document.title = APP_TITLE;
    };
  }, []);
  const handleStreamError = () => {
    setTimeout(() => {
      setImageKey(Date.now());
    }, 3e3);
  };
  reactExports.useEffect(() => {
    if (!usesPublicLiveFrames) {
      return;
    }
    const intervalId = setInterval(() => {
      setImageKey(Date.now());
    }, PUBLIC_LIVE_FRAME_REFRESH_INTERVAL);
    return () => clearInterval(intervalId);
  }, [usesPublicLiveFrames]);
  if (!id) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: t("streamOverlay.invalidPrinterId") }) });
  }
  if (!status) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: t("common.loading") }) });
  }
  const isPrinting = status.state === "RUNNING" || status.state === "PAUSE";
  const progress = status.progress || 0;
  const streamUrl = publicLiveFrameUrl ?? `${getApiBaseUrl()}/printers/${id}/camera/stream?fps=${config.fps}&t=${imageKey}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-black relative overflow-hidden", children: [
    config.showCamera && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: streamUrl,
        alt: t("streamOverlay.cameraStream"),
        className: "absolute inset-0 w-full h-full object-contain",
        style: printer?.camera_rotation ? { transform: `rotate(${printer.camera_rotation}deg)` } : void 0,
        onError: handleStreamError
      },
      usesPublicLiveFrames ? `stream-overlay-public-live-${id}` : String(imageKey)
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://github.com/maziggy/bambuddy",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "absolute top-4 right-4 z-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: APP_LOGO_SRC,
            alt: APP_LOGO_ALT,
            className: `${sizes.logoHeight} w-auto max-w-[40vw] object-contain drop-shadow-lg hover:scale-105 transition-transform`
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${sizes.container}`, children: [
      config.showPrinter && printer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center ${sizes.gap} mb-2`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: `${sizes.icon} text-white/70` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${sizes.text} text-white font-medium`, children: printer.name })
      ] }),
      config.showFilename && status.current_print && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${sizes.textLarge} text-white font-semibold mb-2 truncate drop-shadow-md`, children: status.current_print.replace(/\.gcode\.3mf$|\.3mf$|\.gcode$/i, "") }),
      config.showStatus && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${sizes.text} text-white/70 mb-2`, children: getStatusText(status, t) }),
      config.showProgress && isPrinting && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between mb-1 ${sizes.text}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: t("streamOverlay.progress") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold", children: [
            Math.round(progress),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full bg-white/20 rounded-full ${sizes.progressHeight}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `bg-bambu-green ${sizes.progressHeight} rounded-full transition-all duration-500`,
            style: { width: `${progress}%` }
          }
        ) })
      ] }),
      isPrinting && (config.showLayers || config.showEta) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center ${sizes.gap} flex-wrap`, children: [
        config.showLayers && status.layer_num != null && status.total_layers != null && status.total_layers > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center ${sizes.gap} text-white/70`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: sizes.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: sizes.text, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: status.layer_num }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: status.total_layers })
          ] })
        ] }),
        config.showEta && status.remaining_time != null && status.remaining_time > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center ${sizes.gap} text-white/70`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: sizes.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${sizes.text} text-white`, children: formatDuration(status.remaining_time * 60) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center ${sizes.gap} text-white/70`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: sizes.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${sizes.text} text-white`, children: [
              t("streamOverlay.eta"),
              " ",
              formatETA(status.remaining_time, timeFormat, t)
            ] })
          ] })
        ] })
      ] }),
      !isPrinting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${sizes.text} text-white/70 py-2`, children: status.connected ? t("streamOverlay.printerIdle") : t("streamOverlay.printerOffline") })
    ] }) })
  ] });
}
export {
  StreamOverlayPage
};
