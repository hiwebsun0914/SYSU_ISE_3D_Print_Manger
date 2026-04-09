import { c as createLucideIcon, r as reactExports, u as useTranslation, d as useQuery, f as api, j as jsxRuntimeExports, B as Button, E as ExternalLink, X, L as LoaderCircle, Q as Layers } from "./index-CMdmMVx7.js";
import { M as ModelViewer, G as GcodeViewer } from "./GcodeViewer-CLM1xa0x.js";
import { M as Minimize2 } from "./minimize-2-BnjAwjol.js";
import { M as Maximize2 } from "./maximize-2-Bj0OEczk.js";
import { B as Box } from "./box-qq33dTHR.js";
import { C as Check } from "./check-D4SLDLZy.js";
const __iconNode = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode);
function detectPlatform() {
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform?.toLowerCase() || "";
  if (userAgent.includes("win") || platform.includes("win")) {
    return "windows";
  }
  if (userAgent.includes("mac") || platform.includes("mac")) {
    return "macos";
  }
  if (userAgent.includes("linux") || platform.includes("linux")) {
    return "linux";
  }
  return "unknown";
}
function openInSlicer(downloadUrl, slicer = "bambu_studio") {
  let url;
  if (slicer === "orcaslicer") {
    url = `orcaslicer://open?file=${downloadUrl}`;
  } else {
    const platform = detectPlatform();
    if (platform === "macos") {
      url = `bambustudioopen://${encodeURIComponent(downloadUrl)}`;
    } else {
      url = `bambustudio://open?file=${downloadUrl}`;
    }
  }
  const link = document.createElement("a");
  link.href = url;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(
    () => typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );
  reactExports.useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handleChange = (e) => {
      setIsMobile(e.matches);
    };
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return isMobile;
}
function ModelViewerModal({ archiveId, libraryFileId, title, fileType, onClose }) {
  const { t } = useTranslation();
  const { data: settings } = useQuery({ queryKey: ["settings"], queryFn: api.getSettings });
  const preferredSlicer = settings?.preferred_slicer || "bambu_studio";
  const isLibrary = libraryFileId != null;
  const [activeTab, setActiveTab] = reactExports.useState(null);
  const [capabilities, setCapabilities] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [platesData, setPlatesData] = reactExports.useState(null);
  const [platesLoading, setPlatesLoading] = reactExports.useState(false);
  const [selectedPlateId, setSelectedPlateId] = reactExports.useState(null);
  const [platePage, setPlatePage] = reactExports.useState(0);
  const [isFullscreen, setIsFullscreen] = reactExports.useState(false);
  const [platePanelHeight, setPlatePanelHeight] = reactExports.useState(null);
  const [isDraggingDivider, setIsDraggingDivider] = reactExports.useState(false);
  const [hasCustomSplit, setHasCustomSplit] = reactExports.useState(false);
  const splitContainerRef = reactExports.useRef(null);
  const platesPanelRef = reactExports.useRef(null);
  const dividerHeight = 10;
  const minPlateHeight = 160;
  const minViewerPx = 240;
  const minViewerRatio = 0.35;
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  reactExports.useEffect(() => {
    setLoading(true);
    if (isLibrary) {
      const normalizedType = (fileType || "").toLowerCase();
      const hasModel = normalizedType === "3mf" || normalizedType === "stl";
      const hasGcode = normalizedType === "gcode" || normalizedType === "3mf";
      setCapabilities({
        has_model: hasModel,
        has_gcode: hasGcode,
        has_source: false,
        build_volume: { x: 256, y: 256, z: 256 },
        filament_colors: []
      });
      setActiveTab(hasModel ? "3d" : hasGcode ? "gcode" : null);
      setLoading(false);
      return;
    }
    if (!archiveId) {
      setCapabilities(null);
      setActiveTab(null);
      setLoading(false);
      return;
    }
    api.getArchiveCapabilities(archiveId).then((caps) => {
      setCapabilities(caps);
      if (caps.has_model) {
        setActiveTab("3d");
      } else if (caps.has_gcode) {
        setActiveTab("gcode");
      }
      setLoading(false);
    }).catch(() => {
      setCapabilities({ has_model: true, has_gcode: false, has_source: false, build_volume: { x: 256, y: 256, z: 256 }, filament_colors: [] });
      setActiveTab("3d");
      setLoading(false);
    });
  }, [archiveId, fileType, isLibrary]);
  reactExports.useEffect(() => {
    setPlatesLoading(true);
    setSelectedPlateId(null);
    setPlatePage(0);
    if (isLibrary) {
      const normalizedType = (fileType || "").toLowerCase();
      if (!libraryFileId || normalizedType !== "3mf") {
        setPlatesData(null);
        setPlatesLoading(false);
        return;
      }
      api.getLibraryFilePlates(libraryFileId).then((data) => setPlatesData(data)).catch(() => setPlatesData(null)).finally(() => setPlatesLoading(false));
      return;
    }
    if (!archiveId) {
      setPlatesData(null);
      setPlatesLoading(false);
      return;
    }
    api.getArchivePlates(archiveId).then((data) => setPlatesData(data)).catch(() => setPlatesData(null)).finally(() => setPlatesLoading(false));
  }, [archiveId, fileType, isLibrary, libraryFileId]);
  const plates = reactExports.useMemo(() => platesData?.plates ?? [], [platesData]);
  const hasMultiplePlates = (platesData?.is_multi_plate ?? false) && plates.length > 1;
  const splitFullscreen = isFullscreen && hasMultiplePlates;
  const selectedPlate = selectedPlateId == null ? null : plates.find((plate) => plate.index === selectedPlateId) ?? null;
  const getPlateObjectCount = (plate) => plate.object_count ?? plate.objects?.length ?? 0;
  const totalObjectCount = plates.reduce((sum, plate) => sum + getPlateObjectCount(plate), 0);
  const selectedObjectCount = selectedPlate ? getPlateObjectCount(selectedPlate) : totalObjectCount;
  const objectCountLabel = selectedPlate ? t("modelViewer.plateNumber", { number: selectedPlate.index }) : t("modelViewer.allPlates");
  const hasObjectCount = plates.length > 0;
  const platesGridRef = reactExports.useRef(null);
  const platesViewportRef = reactExports.useRef(null);
  const [platesPerPage, setPlatesPerPage] = reactExports.useState(10);
  const [plateColumns, setPlateColumns] = reactExports.useState(3);
  const shouldPaginatePlates = plates.length > platesPerPage;
  const totalPlatePages = Math.max(1, Math.ceil(plates.length / platesPerPage));
  const pagedPlates = shouldPaginatePlates ? plates.slice(platePage * platesPerPage, (platePage + 1) * platesPerPage) : plates;
  reactExports.useEffect(() => {
    if (!splitFullscreen) {
      setPlatesPerPage(10);
      setPlateColumns(3);
      return;
    }
    const grid = platesGridRef.current;
    const viewport = platesViewportRef.current;
    if (!grid || !viewport) return;
    let rafId = 0;
    const updateLayout = () => {
      const availableWidth = viewport.clientWidth;
      const minButtonWidth = 210;
      const computedCols = Math.floor(availableWidth / minButtonWidth);
      const nextCols = Math.max(3, Math.min(5, computedCols || 3));
      setPlateColumns((prev) => prev === nextCols ? prev : nextCols);
      const computed = window.getComputedStyle(grid);
      const rowGap = Number.parseFloat(computed.rowGap || "0");
      const firstItem = grid.querySelector("button");
      const rowHeight = firstItem?.getBoundingClientRect().height ?? 44;
      const availableHeight = viewport.clientHeight;
      const rows = Math.max(1, Math.floor((availableHeight + rowGap) / (rowHeight + rowGap)));
      const maxSlots = rows * nextCols;
      const nextPerPage = Math.max(1, maxSlots - 1);
      setPlatesPerPage((prev) => prev === nextPerPage ? prev : nextPerPage);
    };
    const scheduleUpdate = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateLayout);
    };
    scheduleUpdate();
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(viewport);
    resizeObserver.observe(grid);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [splitFullscreen, plates.length]);
  reactExports.useEffect(() => {
    if (!shouldPaginatePlates) {
      setPlatePage(0);
      return;
    }
    setPlatePage((prev) => Math.min(prev, totalPlatePages - 1));
  }, [plates.length, shouldPaginatePlates, totalPlatePages]);
  reactExports.useEffect(() => {
    if (!shouldPaginatePlates || selectedPlateId == null) return;
    const selectedIndex = plates.findIndex((plate) => plate.index === selectedPlateId);
    if (selectedIndex < 0) return;
    const nextPage = Math.floor(selectedIndex / platesPerPage);
    setPlatePage((prev) => prev === nextPage ? prev : nextPage);
  }, [plates, platesPerPage, selectedPlateId, shouldPaginatePlates]);
  reactExports.useEffect(() => {
    if (!splitFullscreen) {
      setPlatePanelHeight(null);
      setHasCustomSplit(false);
      return;
    }
    if (hasCustomSplit) return;
    const container = splitContainerRef.current;
    const panel = platesPanelRef.current;
    if (!container || !panel) return;
    const containerHeight = container.clientHeight;
    if (!containerHeight) return;
    const minViewerHeight = Math.max(minViewerPx, containerHeight * minViewerRatio);
    const maxPlateHeight = Math.max(minPlateHeight, containerHeight - dividerHeight - minViewerHeight);
    const desiredHeight = Math.min(panel.scrollHeight, maxPlateHeight);
    setPlatePanelHeight(Math.max(minPlateHeight, desiredHeight));
  }, [splitFullscreen, hasCustomSplit, plates.length, platePage, dividerHeight, minPlateHeight, minViewerPx, minViewerRatio]);
  reactExports.useEffect(() => {
    if (!isDraggingDivider) return;
    const handleMouseMove = (event) => {
      const container = splitContainerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;
      if (!containerHeight) return;
      const minViewerHeight = Math.max(minViewerPx, containerHeight * minViewerRatio);
      const maxPlateHeight = Math.max(minPlateHeight, containerHeight - dividerHeight - minViewerHeight);
      const nextHeight = Math.min(maxPlateHeight, Math.max(minPlateHeight, event.clientY - rect.top));
      setPlatePanelHeight(nextHeight);
    };
    const handleMouseUp = () => {
      setIsDraggingDivider(false);
      setHasCustomSplit(true);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "row-resize";
    document.body.style.userSelect = "none";
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDraggingDivider, dividerHeight, minPlateHeight, minViewerPx, minViewerRatio]);
  const canOpenInSlicer = isLibrary ? (fileType || "").toLowerCase() === "3mf" : true;
  const handleOpenInSlicer = async () => {
    if (!canOpenInSlicer) return;
    const filename = title || "model";
    try {
      if (isLibrary) {
        const { token } = await api.createLibrarySlicerToken(libraryFileId);
        const path = api.getLibrarySlicerDownloadUrl(libraryFileId, token, filename);
        openInSlicer(`${window.location.origin}${path}`, preferredSlicer);
      } else {
        const { token } = await api.createArchiveSlicerToken(archiveId);
        const path = api.getArchiveSlicerDownloadUrl(archiveId, token, filename);
        openInSlicer(`${window.location.origin}${path}`, preferredSlicer);
      }
    } catch {
      if (isLibrary) {
        const downloadUrl = `${window.location.origin}${api.getLibraryFileDownloadUrl(libraryFileId)}`;
        openInSlicer(downloadUrl, preferredSlicer);
      } else {
        const downloadUrl = `${window.location.origin}${api.getArchiveForSlicer(archiveId, filename)}`;
        openInSlicer(downloadUrl, preferredSlicer);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 bg-black/70 flex items-center justify-center z-50 ${isFullscreen ? "p-0" : "p-8"}`,
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-bambu-dark-secondary border border-bambu-dark-tertiary w-full flex flex-col ${isFullscreen ? "h-full max-w-none rounded-none" : "h-[80vh] max-w-4xl rounded-xl"}`,
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-bambu-dark-tertiary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1 mr-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white truncate", children: title }),
                hasObjectCount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray bg-bambu-dark-tertiary/70 px-2 py-1 rounded whitespace-nowrap", children: [
                  objectCountLabel,
                  ": ",
                  t("modelViewer.objectCount", { count: selectedObjectCount })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: handleOpenInSlicer, disabled: !canOpenInSlicer, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
                  t("modelViewer.openInSlicer")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => setIsFullscreen((prev) => !prev),
                    title: isFullscreen ? "Exit fullscreen" : "Enter fullscreen",
                    children: isFullscreen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
              ] })
            ] }),
            capabilities && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-bambu-dark-tertiary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => capabilities.has_model && setActiveTab("3d"),
                  disabled: !capabilities.has_model,
                  className: `flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "3d" ? "text-bambu-green border-b-2 border-bambu-green" : capabilities.has_model ? "text-bambu-gray hover:text-white" : "text-bambu-gray/30 cursor-not-allowed"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
                    t("modelViewer.tabs.model"),
                    !capabilities.has_model && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
                      "(",
                      t("modelViewer.notAvailable"),
                      ")"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => capabilities.has_gcode && setActiveTab("gcode"),
                  disabled: !capabilities.has_gcode,
                  className: `flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "gcode" ? "text-bambu-green border-b-2 border-bambu-green" : capabilities.has_gcode ? "text-bambu-gray hover:text-white" : "text-bambu-gray/30 cursor-not-allowed"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "w-4 h-4" }),
                    t("modelViewer.tabs.gcode"),
                    !capabilities.has_gcode && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
                      "(",
                      t("modelViewer.notSliced"),
                      ")"
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden p-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-bambu-green" }) }) : activeTab === "3d" && capabilities ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: splitContainerRef,
                className: `w-full h-full flex flex-col ${splitFullscreen ? "gap-0 min-h-0" : "gap-3"}`,
                children: [
                  hasMultiplePlates && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      ref: platesPanelRef,
                      style: splitFullscreen && platePanelHeight != null ? { height: platePanelHeight } : void 0,
                      className: `rounded-lg border border-bambu-dark-tertiary bg-bambu-dark p-3 ${splitFullscreen ? "flex flex-col shrink-0" : ""}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-bambu-gray mb-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
                          t("modelViewer.plates"),
                          platesLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: splitFullscreen ? "flex flex-col min-h-0 flex-1" : void 0, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              ref: platesViewportRef,
                              className: splitFullscreen ? "min-h-0 overflow-hidden pr-1 flex-1" : void 0,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  ref: platesGridRef,
                                  className: splitFullscreen ? "grid gap-2" : "grid grid-cols-2 md:grid-cols-3 gap-2",
                                  style: splitFullscreen ? { gridTemplateColumns: `repeat(${plateColumns}, minmax(0, 1fr))` } : void 0,
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => setSelectedPlateId(null),
                                        className: `flex items-center rounded-lg border text-left transition-colors ${splitFullscreen ? "gap-1.5 p-1.5 w-full" : "gap-2 p-2"} ${selectedPlateId == null ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary bg-bambu-dark-secondary hover:border-bambu-gray"}`,
                                        children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded bg-bambu-dark-tertiary flex items-center justify-center ${splitFullscreen ? "w-8 h-8" : "w-10 h-10"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: `${splitFullscreen ? "w-4 h-4" : "w-5 h-5"} text-bambu-gray` }) }),
                                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${splitFullscreen ? "text-xs" : "text-sm"} text-white font-medium truncate`, children: t("modelViewer.allPlates") }),
                                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${splitFullscreen ? "text-[10px]" : "text-xs"} text-bambu-gray truncate`, children: t("modelViewer.plateCount", { count: plates.length }) })
                                          ] }),
                                          selectedPlateId == null && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `${splitFullscreen ? "w-3.5 h-3.5" : "w-4 h-4"} text-bambu-green flex-shrink-0` })
                                        ]
                                      }
                                    ),
                                    pagedPlates.map((plate) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => setSelectedPlateId(plate.index),
                                        className: `flex items-center rounded-lg border text-left transition-colors ${splitFullscreen ? "gap-1.5 p-1.5 w-full" : "gap-2 p-2"} ${selectedPlateId === plate.index ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary bg-bambu-dark-secondary hover:border-bambu-gray"}`,
                                        children: [
                                          plate.has_thumbnail && plate.thumbnail_url ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                            "img",
                                            {
                                              src: plate.thumbnail_url,
                                              alt: `Plate ${plate.index}`,
                                              className: `${splitFullscreen ? "w-8 h-8" : "w-10 h-10"} rounded object-cover bg-bambu-dark-tertiary`
                                            }
                                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded bg-bambu-dark-tertiary flex items-center justify-center ${splitFullscreen ? "w-8 h-8" : "w-10 h-10"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: `${splitFullscreen ? "w-4 h-4" : "w-5 h-5"} text-bambu-gray` }) }),
                                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${splitFullscreen ? "text-xs" : "text-sm"} text-white font-medium truncate`, children: plate.name || t("modelViewer.plateNumber", { number: plate.index }) }),
                                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${splitFullscreen ? "text-[10px]" : "text-xs"} text-bambu-gray truncate`, children: t("modelViewer.objectCount", { count: plate.object_count ?? plate.objects?.length ?? 0 }) })
                                          ] }),
                                          selectedPlateId === plate.index && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `${splitFullscreen ? "w-3.5 h-3.5" : "w-4 h-4"} text-bambu-green flex-shrink-0` })
                                        ]
                                      },
                                      plate.index
                                    ))
                                  ]
                                }
                              )
                            }
                          ),
                          (selectedPlate || shouldPaginatePlates) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 flex items-center gap-4 text-xs text-bambu-gray overflow-x-auto", children: [
                            selectedPlate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 whitespace-nowrap", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("modelViewer.plateNumber", { number: selectedPlate.index }) }),
                              selectedPlate.print_time_seconds != null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("modelViewer.eta", { minutes: Math.round(selectedPlate.print_time_seconds / 60) }) }),
                              selectedPlate.filament_used_grams != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                selectedPlate.filament_used_grams.toFixed(1),
                                " g"
                              ] }),
                              selectedPlate.filaments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("modelViewer.filamentCount", { count: selectedPlate.filaments.length }) })
                            ] }),
                            shouldPaginatePlates && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 whitespace-nowrap ${selectedPlate ? "ml-auto" : ""}`, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("modelViewer.pagination.pageOf", { current: platePage + 1, total: totalPlatePages }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => setPlatePage((prev) => Math.max(prev - 1, 0)),
                                    disabled: platePage === 0,
                                    className: `px-2 py-1 rounded border text-xs ${platePage === 0 ? "border-bambu-dark-tertiary text-bambu-gray/40 cursor-not-allowed" : "border-bambu-dark-tertiary text-bambu-gray hover:text-white hover:border-bambu-gray"}`,
                                    children: t("modelViewer.pagination.prev")
                                  }
                                ),
                                (() => {
                                  const maxVisible = 5;
                                  let start = Math.max(0, platePage - Math.floor(maxVisible / 2));
                                  const end = Math.min(totalPlatePages, start + maxVisible);
                                  if (end - start < maxVisible) {
                                    start = Math.max(0, end - maxVisible);
                                  }
                                  const pages = Array.from({ length: end - start }, (_, i) => start + i);
                                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                    start > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => setPlatePage(0),
                                        className: `px-2 py-1 rounded border text-xs ${platePage === 0 ? "border-bambu-green text-bambu-green" : "border-bambu-dark-tertiary text-bambu-gray hover:text-white hover:border-bambu-gray"}`,
                                        children: "1"
                                      }
                                    ),
                                    start > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1", children: "…" }),
                                    pages.map((pageNumber) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => setPlatePage(pageNumber),
                                        className: `px-2 py-1 rounded border text-xs ${platePage === pageNumber ? "border-bambu-green text-bambu-green" : "border-bambu-dark-tertiary text-bambu-gray hover:text-white hover:border-bambu-gray"}`,
                                        children: pageNumber + 1
                                      },
                                      pageNumber
                                    )),
                                    end < totalPlatePages - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1", children: "…" }),
                                    end < totalPlatePages && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => setPlatePage(totalPlatePages - 1),
                                        className: `px-2 py-1 rounded border text-xs ${platePage === totalPlatePages - 1 ? "border-bambu-green text-bambu-green" : "border-bambu-dark-tertiary text-bambu-gray hover:text-white hover:border-bambu-gray"}`,
                                        children: totalPlatePages
                                      }
                                    )
                                  ] });
                                })(),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => setPlatePage((prev) => Math.min(prev + 1, totalPlatePages - 1)),
                                    disabled: platePage >= totalPlatePages - 1,
                                    className: `px-2 py-1 rounded border text-xs ${platePage >= totalPlatePages - 1 ? "border-bambu-dark-tertiary text-bambu-gray/40 cursor-not-allowed" : "border-bambu-dark-tertiary text-bambu-gray hover:text-white hover:border-bambu-gray"}`,
                                    children: t("modelViewer.pagination.next")
                                  }
                                )
                              ] })
                            ] })
                          ] })
                        ] })
                      ]
                    }
                  ),
                  splitFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      role: "separator",
                      "aria-orientation": "horizontal",
                      onMouseDown: (event) => {
                        event.preventDefault();
                        setIsDraggingDivider(true);
                        setHasCustomSplit(true);
                      },
                      className: `h-2 cursor-row-resize flex items-center justify-center ${isDraggingDivider ? "bg-bambu-dark-tertiary" : "bg-bambu-dark-secondary/60 hover:bg-bambu-dark-tertiary"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 rounded-full bg-bambu-gray/50" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 ${splitFullscreen ? "min-h-0" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ModelViewer,
                    {
                      url: isLibrary ? api.getLibraryFileDownloadUrl(libraryFileId) : capabilities.has_source ? api.getSource3mfDownloadUrl(archiveId) : api.getArchiveDownload(archiveId),
                      fileType,
                      buildVolume: capabilities.build_volume,
                      filamentColors: capabilities.filament_colors,
                      selectedPlateId,
                      className: "w-full h-full"
                    }
                  ) })
                ]
              }
            ) : activeTab === "gcode" && capabilities ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              GcodeViewer,
              {
                gcodeUrl: isLibrary ? api.getLibraryFileGcodeUrl(libraryFileId) : api.getArchiveGcode(archiveId),
                filamentColors: capabilities.filament_colors,
                className: "w-full h-full"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-bambu-gray", children: t("modelViewer.noPreview") }) })
          ]
        }
      )
    }
  );
}
export {
  ModelViewerModal as M,
  openInSlicer as o,
  useIsMobile as u
};
