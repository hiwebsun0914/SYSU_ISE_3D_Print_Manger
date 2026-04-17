import { c as createLucideIcon, u as useTranslation, b as useQueryClient, a as useToast, k as useAuth, aD as useParams, r as reactExports, d as useQuery, e as useMutation, aS as APP_TITLE, f as api, j as jsxRuntimeExports, a1 as Camera, W as WifiOff, T as TriangleAlert } from "./index-CeSodUhS.js";
import { C as ChamberLight, S as SkipObjectsIcon, M as Minimize, a as SkipObjectsModal } from "./SkipObjectsModal-B5a6HGQj.js";
import { R as RefreshCw } from "./refresh-cw-DqzYoyVU.js";
import { Z as ZoomOut, a as ZoomIn } from "./zoom-out-DtyoYJQc.js";
import "./box-CIh9yAhv.js";
import "./maximize-2-DQBUNz8w.js";
const __iconNode = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
];
const Maximize = createLucideIcon("maximize", __iconNode);
const MAX_RECONNECT_ATTEMPTS = 5;
const INITIAL_RECONNECT_DELAY = 2e3;
const MAX_RECONNECT_DELAY = 3e4;
const STALL_CHECK_INTERVAL = 5e3;
function CameraPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const { printerId } = useParams();
  const id = parseInt(printerId || "0", 10);
  const [streamMode, setStreamMode] = reactExports.useState("stream");
  const [showSkipObjectsModal, setShowSkipObjectsModal] = reactExports.useState(false);
  const [streamError, setStreamError] = reactExports.useState(false);
  const [streamLoading, setStreamLoading] = reactExports.useState(true);
  const [imageKey, setImageKey] = reactExports.useState(Date.now());
  const [transitioning, setTransitioning] = reactExports.useState(false);
  const [isFullscreen, setIsFullscreen] = reactExports.useState(false);
  const [reconnectAttempts, setReconnectAttempts] = reactExports.useState(0);
  const [isReconnecting, setIsReconnecting] = reactExports.useState(false);
  const [reconnectCountdown, setReconnectCountdown] = reactExports.useState(0);
  const [zoomLevel, setZoomLevel] = reactExports.useState(1);
  const [panOffset, setPanOffset] = reactExports.useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = reactExports.useState(false);
  const [panStart, setPanStart] = reactExports.useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = reactExports.useState(null);
  const [lastTouchCenter, setLastTouchCenter] = reactExports.useState(null);
  const imgRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const reconnectTimerRef = reactExports.useRef(null);
  const countdownIntervalRef = reactExports.useRef(null);
  const stallCheckIntervalRef = reactExports.useRef(null);
  const { data: printer } = useQuery({
    queryKey: ["printer", id],
    queryFn: () => api.getPrinter(id),
    enabled: id > 0
  });
  const { data: status } = useQuery({
    queryKey: ["printerStatus", id],
    queryFn: () => api.getPrinterStatus(id),
    refetchInterval: 3e4,
    enabled: id > 0
  });
  const chamberLightMutation = useMutation({
    mutationFn: (on) => api.setChamberLight(id, on),
    onMutate: async (on) => {
      await queryClient.cancelQueries({ queryKey: ["printerStatus", id] });
      const previousStatus = queryClient.getQueryData(["printerStatus", id]);
      queryClient.setQueryData(["printerStatus", id], (old) => ({
        ...old,
        chamber_light: on
      }));
      return { previousStatus };
    },
    onSuccess: (_, on) => {
      showToast(`Chamber light ${on ? "on" : "off"}`);
    },
    onError: (error, _, context) => {
      if (context?.previousStatus) {
        queryClient.setQueryData(["printerStatus", id], context.previousStatus);
      }
      showToast(error.message || t("printers.toast.failedToControlChamberLight"), "error");
    }
  });
  const isPrintingWithObjects = (status?.state === "RUNNING" || status?.state === "PAUSE") && (status?.printable_objects_count ?? 0) >= 2;
  reactExports.useEffect(() => {
    document.title = APP_TITLE;
    return () => {
      document.title = APP_TITLE;
    };
  }, []);
  const stopSentRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    stopSentRef.current = false;
    const handleBeforeUnload = () => {
      stopSentRef.current = true;
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    const imgElement = imgRef.current;
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (imgElement) {
        imgElement.src = "";
      }
      stopSentRef.current = true;
    };
  }, [id]);
  reactExports.useEffect(() => {
    if (streamLoading && !transitioning) {
      const timeout = streamMode === "stream" ? 3e3 : 2e4;
      const timer = setTimeout(() => {
        setStreamLoading(false);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [streamMode, streamLoading, imageKey, transitioning]);
  reactExports.useEffect(() => {
    const handleFullscreenChange = () => {
      const nowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(nowFullscreen);
      setZoomLevel(1);
      setPanOffset({ x: 0, y: 0 });
      if (streamMode === "stream" && !transitioning) {
        if (imgRef.current) {
          imgRef.current.src = "";
        }
        setTimeout(() => {
          setStreamLoading(true);
          setImageKey(Date.now());
        }, 200);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [streamMode, transitioning]);
  reactExports.useEffect(() => {
    let saveTimeout;
    const saveWindowState = () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        localStorage.setItem("cameraWindowState", JSON.stringify({
          width: window.outerWidth,
          height: window.outerHeight,
          left: window.screenX,
          top: window.screenY
        }));
      }, 500);
    };
    window.addEventListener("resize", saveWindowState);
    return () => {
      clearTimeout(saveTimeout);
      window.removeEventListener("resize", saveWindowState);
    };
  }, []);
  reactExports.useEffect(() => {
    return () => {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      if (stallCheckIntervalRef.current) {
        clearInterval(stallCheckIntervalRef.current);
      }
    };
  }, []);
  const attemptReconnect = reactExports.useCallback(() => {
    if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
      setIsReconnecting(false);
      setStreamError(true);
      return;
    }
    const delay = Math.min(
      INITIAL_RECONNECT_DELAY * Math.pow(2, reconnectAttempts),
      MAX_RECONNECT_DELAY
    );
    setIsReconnecting(true);
    setReconnectCountdown(Math.ceil(delay / 1e3));
    countdownIntervalRef.current = setInterval(() => {
      setReconnectCountdown((prev) => {
        if (prev <= 1) {
          if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    reconnectTimerRef.current = setTimeout(() => {
      setReconnectAttempts((prev) => prev + 1);
      setIsReconnecting(false);
      setStreamLoading(true);
      setStreamError(false);
      if (imgRef.current) {
        imgRef.current.src = "";
      }
      setImageKey(Date.now());
    }, delay);
  }, [reconnectAttempts]);
  reactExports.useEffect(() => {
    if (streamMode !== "stream" || streamLoading || isReconnecting || transitioning) {
      if (stallCheckIntervalRef.current) {
        clearInterval(stallCheckIntervalRef.current);
        stallCheckIntervalRef.current = null;
      }
      return;
    }
    stallCheckIntervalRef.current = setInterval(async () => {
      try {
        const status2 = await api.getCameraStatus(id);
        if (status2.stalled || !status2.active && !streamError) {
          console.log(`Stream issue detected: stalled=${status2.stalled}, active=${status2.active}, reconnecting...`);
          if (stallCheckIntervalRef.current) {
            clearInterval(stallCheckIntervalRef.current);
            stallCheckIntervalRef.current = null;
          }
          setStreamLoading(false);
          attemptReconnect();
        }
      } catch {
      }
    }, STALL_CHECK_INTERVAL);
    return () => {
      if (stallCheckIntervalRef.current) {
        clearInterval(stallCheckIntervalRef.current);
        stallCheckIntervalRef.current = null;
      }
    };
  }, [streamMode, streamLoading, streamError, isReconnecting, transitioning, id, attemptReconnect]);
  const handleStreamError = () => {
    setStreamLoading(false);
    if (streamMode === "stream" && reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      attemptReconnect();
    } else {
      setStreamError(true);
    }
  };
  const handleStreamLoad = () => {
    setStreamLoading(false);
    setStreamError(false);
    setReconnectAttempts(0);
    setIsReconnecting(false);
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
    if (imgRef.current && !localStorage.getItem("cameraWindowState")) {
      const img = imgRef.current;
      const videoWidth = img.naturalWidth;
      const videoHeight = img.naturalHeight;
      if (videoWidth > 0 && videoHeight > 0) {
        const headerHeight = 45;
        const padding = 16;
        const chromeWidth = window.outerWidth - window.innerWidth;
        const chromeHeight = window.outerHeight - window.innerHeight;
        const targetWidth = videoWidth + padding + chromeWidth;
        const targetHeight = videoHeight + headerHeight + padding + chromeHeight;
        try {
          window.resizeTo(targetWidth, targetHeight);
        } catch {
        }
      }
    }
  };
  const switchToMode = (newMode) => {
    if (streamMode === newMode || transitioning) return;
    setTransitioning(true);
    setStreamLoading(true);
    setStreamError(false);
    setReconnectAttempts(0);
    setIsReconnecting(false);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
    if (imgRef.current) {
      imgRef.current.src = "";
    }
    setTimeout(() => {
      setStreamMode(newMode);
      setImageKey(Date.now());
      setTransitioning(false);
    }, 100);
  };
  const refresh = () => {
    if (transitioning) return;
    setTransitioning(true);
    setStreamLoading(true);
    setStreamError(false);
    setReconnectAttempts(0);
    setIsReconnecting(false);
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
    if (imgRef.current) {
      imgRef.current.src = "";
    }
    setTimeout(() => {
      setImageKey(Date.now());
      setTransitioning(false);
    }, 100);
  };
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 4));
  };
  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) setPanOffset({ x: 0, y: 0 });
      return newZoom;
    });
  };
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };
  const handleImageMouseDown = (e) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      setIsPanning(true);
      setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };
  const getMaxPan = reactExports.useCallback(() => {
    if (!containerRef.current) {
      return { x: 300, y: 200 };
    }
    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width * (zoomLevel - 1) / 2;
    const maxY = container.height * (zoomLevel - 1) / 2;
    return { x: Math.max(50, maxX), y: Math.max(50, maxY) };
  }, [zoomLevel]);
  const handleImageMouseMove = (e) => {
    if (isPanning && zoomLevel > 1) {
      const newX = e.clientX - panStart.x;
      const newY = e.clientY - panStart.y;
      const maxPan = getMaxPan();
      setPanOffset({
        x: Math.max(-maxPan.x, Math.min(maxPan.x, newX)),
        y: Math.max(-maxPan.y, Math.min(maxPan.y, newY))
      });
    }
  };
  const handleImageMouseUp = () => {
    setIsPanning(false);
  };
  const getTouchDistance = (touches) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };
  const getTouchCenter = (touches) => {
    if (touches.length < 2) {
      return { x: touches[0].clientX, y: touches[0].clientY };
    }
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2
    };
  };
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      setLastTouchDistance(getTouchDistance(e.touches));
      setLastTouchCenter(getTouchCenter(e.touches));
    } else if (e.touches.length === 1 && zoomLevel > 1) {
      e.preventDefault();
      setIsPanning(true);
      setPanStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y
      });
    }
  };
  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && lastTouchDistance !== null) {
      e.preventDefault();
      const newDistance = getTouchDistance(e.touches);
      const scale = newDistance / lastTouchDistance;
      setZoomLevel((prev) => {
        const newZoom = Math.max(1, Math.min(4, prev * scale));
        if (newZoom === 1) {
          setPanOffset({ x: 0, y: 0 });
        }
        return newZoom;
      });
      setLastTouchDistance(newDistance);
      const newCenter = getTouchCenter(e.touches);
      if (lastTouchCenter) {
        const maxPan = getMaxPan();
        setPanOffset((prev) => ({
          x: Math.max(-maxPan.x, Math.min(maxPan.x, prev.x + (newCenter.x - lastTouchCenter.x))),
          y: Math.max(-maxPan.y, Math.min(maxPan.y, prev.y + (newCenter.y - lastTouchCenter.y)))
        }));
      }
      setLastTouchCenter(newCenter);
    } else if (e.touches.length === 1 && isPanning && zoomLevel > 1) {
      e.preventDefault();
      const newX = e.touches[0].clientX - panStart.x;
      const newY = e.touches[0].clientY - panStart.y;
      const maxPan = getMaxPan();
      setPanOffset({
        x: Math.max(-maxPan.x, Math.min(maxPan.x, newX)),
        y: Math.max(-maxPan.y, Math.min(maxPan.y, newY))
      });
    }
  };
  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      setLastTouchDistance(null);
      setLastTouchCenter(null);
    }
    if (e.touches.length === 0) {
      setIsPanning(false);
    }
  };
  const resetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };
  const currentUrl = transitioning ? "" : streamMode === "stream" ? `${api.getCameraStreamUrl(id, 15)}&t=${imageKey}` : `/api/v1/printers/${id}/camera/snapshot?t=${imageKey}`;
  const isDisabled = streamLoading || transitioning || isReconnecting;
  if (!id) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: t("camera.invalidPrinterId") }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "min-h-screen bg-black flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-bambu-dark-secondary border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-sm font-medium text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
        printer?.name || `Printer ${id}`
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-bambu-dark rounded p-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => switchToMode("stream"),
              disabled: isDisabled,
              className: `px-3 py-1 text-xs rounded transition-colors ${streamMode === "stream" ? "bg-bambu-green text-white" : "text-bambu-gray hover:text-white disabled:opacity-50"}`,
              children: t("camera.live")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => switchToMode("snapshot"),
              disabled: isDisabled,
              className: `px-3 py-1 text-xs rounded transition-colors ${streamMode === "snapshot" ? "bg-bambu-green text-white" : "text-bambu-gray hover:text-white disabled:opacity-50"}`,
              children: t("camera.snapshot")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => chamberLightMutation.mutate(!status?.chamber_light),
            disabled: !status?.connected || chamberLightMutation.isPending || !hasPermission("printers:control"),
            className: `p-1.5 rounded disabled:opacity-50 ${status?.chamber_light ? "bg-yellow-500/20 hover:bg-yellow-500/30" : "hover:bg-bambu-dark-tertiary"}`,
            title: !hasPermission("printers:control") ? t("printers.permission.noControl") : t("camera.chamberLight"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChamberLight, { on: status?.chamber_light ?? false, className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setShowSkipObjectsModal(true),
            disabled: !isPrintingWithObjects || !hasPermission("printers:control"),
            className: `p-1.5 rounded disabled:opacity-50 ${isPrintingWithObjects && hasPermission("printers:control") ? "hover:bg-bambu-dark-tertiary" : ""}`,
            title: !hasPermission("printers:control") ? t("printers.permission.noControl") : !isPrintingWithObjects ? t("printers.skipObjects.onlyWhilePrinting") : t("printers.skipObjects.tooltip"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipObjectsIcon, { className: "w-4 h-4 text-bambu-gray" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: refresh,
            disabled: isDisabled,
            className: "p-1.5 hover:bg-bambu-dark-tertiary rounded disabled:opacity-50",
            title: streamMode === "stream" ? t("camera.restartStream") : t("camera.refreshSnapshot"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 text-bambu-gray ${isDisabled ? "animate-spin" : ""}` })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: toggleFullscreen,
            className: "p-1.5 hover:bg-bambu-dark-tertiary rounded",
            title: isFullscreen ? t("camera.exitFullscreen") : t("camera.fullscreen"),
            children: isFullscreen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize, { className: "w-4 h-4 text-bambu-gray" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: "w-4 h-4 text-bambu-gray" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-1 flex items-center justify-center p-2 overflow-hidden",
        onWheel: handleWheel,
        onMouseMove: handleImageMouseMove,
        onMouseUp: handleImageMouseUp,
        onMouseLeave: handleImageMouseUp,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        style: { touchAction: "none" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full flex items-center justify-center", children: [
          (streamLoading || transitioning) && !isReconnecting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-bambu-gray animate-spin mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: streamMode === "stream" ? t("camera.connectingToCamera") : t("camera.capturingSnapshot") })
          ] }) }),
          isReconnecting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/80 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "w-10 h-10 text-orange-400 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white mb-2", children: t("camera.connectionLost") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-3", children: t("camera.reconnecting", { countdown: reconnectCountdown, attempt: reconnectAttempts + 1, max: MAX_RECONNECT_ATTEMPTS }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: refresh,
                className: "px-4 py-2 bg-bambu-green text-white text-sm rounded hover:bg-bambu-green/80 transition-colors",
                children: t("camera.reconnectNow")
              }
            )
          ] }) }),
          streamError && !isReconnecting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-12 h-12 text-orange-400 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white mb-2", children: t("camera.cameraUnavailable") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-4 max-w-md", children: t("camera.cameraUnavailableDesc") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: refresh,
                className: "px-4 py-2 bg-bambu-green text-white rounded hover:bg-bambu-green/80 transition-colors",
                children: t("camera.retry")
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              ref: imgRef,
              src: currentUrl,
              alt: t("camera.cameraStream"),
              className: "max-w-full max-h-full object-contain select-none",
              style: {
                transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px) rotate(${printer?.camera_rotation || 0}deg)`,
                ...printer?.camera_rotation === 90 || printer?.camera_rotation === 270 ? { maxWidth: "100vh", maxHeight: "100vw" } : {},
                cursor: zoomLevel > 1 ? isPanning ? "grabbing" : "grab" : "default"
              },
              onError: currentUrl ? handleStreamError : void 0,
              onLoad: currentUrl ? handleStreamLoad : void 0,
              onMouseDown: handleImageMouseDown,
              draggable: false
            },
            String(imageKey)
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/60 rounded-lg px-2 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleZoomOut,
                disabled: zoomLevel <= 1,
                className: "p-1.5 hover:bg-white/10 rounded disabled:opacity-30",
                title: t("camera.zoomOut"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomOut, { className: "w-4 h-4 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: resetZoom,
                className: "px-2 py-1 text-sm text-white hover:bg-white/10 rounded min-w-[48px]",
                title: t("camera.resetZoom"),
                children: [
                  Math.round(zoomLevel * 100),
                  "%"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleZoomIn,
                disabled: zoomLevel >= 4,
                className: "p-1.5 hover:bg-white/10 rounded disabled:opacity-30",
                title: t("camera.zoomIn"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-4 h-4 text-white" })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SkipObjectsModal,
      {
        printerId: id,
        isOpen: showSkipObjectsModal,
        onClose: () => setShowSkipObjectsModal(false)
      }
    )
  ] });
}
export {
  CameraPage
};
