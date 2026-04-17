import { c as createLucideIcon, u as useTranslation, a as useToast, b as useQueryClient, r as reactExports, d as useQuery, e as useMutation, f as api, j as jsxRuntimeExports, X, B as Button, C as ChevronLeft, L as LoaderCircle, p as parseUTCDate, g as formatFileSize, h as ConfirmModal, F as Folder, I as Image, i as FileText, k as useAuth, W as WifiOff, T as TriangleAlert, l as CircleAlert, E as ExternalLink, m as Info, n as publicAssetUrl, o as Calendar, q as Link, s as formatRelativeTime, t as ChevronRight, v as useTheme, w as applyTimeFormat, x as formatDateOnly, y as Card, z as CardContent, P as Power, A as ChevronDown, D as formatDuration, G as useNavigate, H as useIsSidebarCompact, J as Printer, V as Video, K as Terminal, M as Link$1, N as Wrench, O as Layers, Q as CircleCheckBig, R as formatETA, U as User, Z as Zap, S as PowerOff, Y as House, _ as CircleX, $ as discoveryApi, a0 as firmwareApi } from "./index-CeSodUhS.js";
import { F as File, a as FileBox, M as ModelViewer, G as GcodeViewer } from "./GcodeViewer-BZeFRjld.js";
import { H as HardDrive } from "./hard-drive-0IcoSKXe.js";
import { S as Search } from "./search-DTjW5Uxm.js";
import { A as ArrowUpDown } from "./arrow-up-down-C4b8B9qQ.js";
import { R as RefreshCw } from "./refresh-cw-DqzYoyVU.js";
import { S as SquareCheckBig } from "./square-check-big-BfuuDPAX.js";
import { S as Square } from "./square-C8lG918a.js";
import { B as Box } from "./box-CIh9yAhv.js";
import { D as Download } from "./download-CXWYytre.js";
import { T as Trash2 } from "./trash-2-V7jM6WFN.js";
import { F as Film, S as ScanSearch } from "./scan-search-A8aBYSch.js";
import { C as ChamberLight, S as SkipObjectsIcon, M as Minimize, a as SkipObjectsModal } from "./SkipObjectsModal-B5a6HGQj.js";
import { G as GripVertical } from "./grip-vertical-BDz0Ue96.js";
import { M as Maximize2 } from "./maximize-2-DQBUNz8w.js";
import { M as Minimize2 } from "./minimize-2-DgmNW2qh.js";
import { Z as ZoomOut, a as ZoomIn } from "./zoom-out-DtyoYJQc.js";
import { P as Play } from "./play-BLPamHtp.js";
import { A as ArrowDown } from "./arrow-down-CmLOqQ-y.js";
import { A as ArrowUp } from "./arrow-up-DvPrTI5b.js";
import { C as CircleCheck } from "./circle-check-DVmqo4P3.js";
import { C as Clock } from "./clock-rmajxGGN.js";
import { D as Droplets, T as TrendingUp } from "./trending-up-BWHpasw_.js";
import { T as Thermometer, F as Flame } from "./thermometer-C3iKLPSw.js";
import { r as resolveDefaultProps, c as clsx, a as adaptEventsOfChild, S as Surface, b as Symbols, u as useAppSelector, s as selectLegendPayload, d as useLegendPortal, e as useMargin, f as useElementOffset, g as useChartWidth, h as useChartHeight, i as useAppDispatch, j as setLegendSettings, k as setLegendSize, l as getUniqPayload, m as addLine, n as removeLine, D as DefaultZIndexes, o as useIsPanorama, p as useClipPathId, q as selectXAxisSettings, t as selectYAxisSettings, v as selectAxisScale, w as useViewBox, x as svgPropertiesAndEvents, Z as ZIndexLayer, L as Layer, C as CartesianLabelContextProvider, y as CartesianLabelFromLabelProp, z as isWellBehavedNumber, A as isNumOrStr, B as rectWithCoords, E as createSelector, F as selectChartLayout, G as selectChartDataWithIndexesIfNotInPanoramaPosition4, H as selectAxisWithScale, I as selectTicksOfGraphicalItem, J as selectUnfilteredCartesianItems, K as isCategoricalAxis, M as getBandSizeOfAxis, N as propsAreEqual, R as RegisterGraphicalItemId, O as SetLegendPayload, P as SetCartesianGraphicalItem, Q as getTooltipNameProp, T as SetTooltipEntrySettings, U as noop, V as useNeedsClip, W as usePlotArea, X as useChartLayout, Y as getRadiusAndStrokeWidthFromDot, _ as isClipDot, $ as GraphicalItemClipPath, a0 as SetErrorBarContext, a1 as ActivePoints, a2 as getValueByDataKey, a3 as getCateCoordinateOfLine, a4 as isNullish, a5 as useAnimationId, a6 as JavascriptAnimate, a7 as interpolate, a8 as LabelListFromLabelProp, a9 as CartesianLabelListContextProvider, aa as Shape, ab as svgPropertiesNoEvents, ac as Dots, ad as CartesianChart, ae as arrayTooltipSearcher, af as ResponsiveContainer, ag as CartesianGrid, ah as XAxis, ai as YAxis, aj as Tooltip } from "./CartesianChart-B0ZoVXmr.js";
import { r as reactDomExports } from "./index-ByI6E0fo.js";
import { T as TrendingDown } from "./trending-down-CFRGaplt.js";
import { M as Minus } from "./minus-D6fLunzP.js";
import { i as isLightColor, h as hexToColorName, p as parseFilamentColor } from "./colors-lMyZBYSI.js";
import { C as Check } from "./check-RkcQbG5G.js";
import { C as Copy } from "./copy-B9sBU3eE.js";
import { U as Unlink } from "./unlink-BZwhJ8ZI.js";
import { L as Link2 } from "./link-2-CugW1euu.js";
import { P as Package } from "./package-D76dkLyW.js";
import { S as Settings2 } from "./settings-2-CPFxmKQ8.js";
import { L as LinkSpoolModal, A as AssignSpoolModal, C as ConfigureAmsSlotModal } from "./ConfigureAmsSlotModal-B26IxWyC.js";
import { F as FileUploadModal } from "./FileUploadModal-DAQAmcJZ.js";
import { P as PrintModal } from "./index-D29HEcrm.js";
import { C as Cable, F as Fan, W as Wind } from "./wind-DlFG24wC.js";
import { g as getFallbackSpoolTag, a as getSpoolmanFillLevel, b as getFillBarColor, c as getGlobalTrayId } from "./amsHelpers-BrH_pr4r.js";
import { P as Plus } from "./plus-D6b2aHzR.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-CvkYUaYw.js";
import { P as Pencil } from "./pencil-tqzNN1qN.js";
import { G as Gauge } from "./gauge-C_WpVlSy.js";
import "./rotate-ccw-B9yPDYYb.js";
import "./with-selector-BmcBLQvQ.js";
import "./upload-B0438ydo.js";
import "./currency-xmcJ_vO3.js";
import "./palette-DCYh8Upq.js";
import "./wand-sparkles-vpsCWT-3.js";
import "./settings-ZMEjdRzt.js";
const __iconNode$3 = [
  ["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12", key: "yd12zl" }],
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "larmp2"
    }
  ],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5", key: "1x1kqn" }]
];
const AirVent = createLucideIcon("air-vent", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1", key: "vys8me" }]
];
const Fullscreen = createLucideIcon("fullscreen", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
];
const Signal = createLucideIcon("signal", __iconNode$1);
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
];
const SquareMinus = createLucideIcon("square-minus", __iconNode);
function PrinterFileViewerModal({ printerId, filePath, filename, onClose }) {
  const [activeTab, setActiveTab] = reactExports.useState(null);
  const [plates, setPlates] = reactExports.useState([]);
  const [platesLoading, setPlatesLoading] = reactExports.useState(false);
  const [selectedPlateId, setSelectedPlateId] = reactExports.useState(null);
  const ext = filename.toLowerCase().split(".").pop() || "";
  const hasModel = ext === "3mf" || ext === "stl";
  const hasGcode = ext === "gcode" || ext === "3mf";
  reactExports.useEffect(() => {
    setActiveTab(hasModel ? "3d" : hasGcode ? "gcode" : null);
  }, [hasModel, hasGcode]);
  reactExports.useEffect(() => {
    setPlates([]);
    setSelectedPlateId(null);
    if (!hasModel) return;
    setPlatesLoading(true);
    api.getPrinterFilePlates(printerId, filePath).then((data) => setPlates(data.plates || [])).catch(() => setPlates([])).finally(() => setPlatesLoading(false));
  }, [filePath, hasModel, printerId]);
  const hasMultiplePlates = plates.length > 1;
  const selectedPlate = selectedPlateId == null ? null : plates.find((plate) => plate.index === selectedPlateId) ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-4xl h-[80vh] flex flex-col",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white truncate flex-1 mr-4", children: filename }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => hasModel && setActiveTab("3d"),
              disabled: !hasModel,
              className: `flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "3d" ? "text-bambu-green border-b-2 border-bambu-green" : hasModel ? "text-bambu-gray hover:text-white" : "text-bambu-gray/30 cursor-not-allowed"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
                "3D Model",
                !hasModel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "(not available)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => hasGcode && setActiveTab("gcode"),
              disabled: !hasGcode,
              className: `flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "gcode" ? "text-bambu-green border-b-2 border-bambu-green" : hasGcode ? "text-bambu-gray hover:text-white" : "text-bambu-gray/30 cursor-not-allowed"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                "G-code Preview",
                !hasGcode && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "(not sliced)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden p-4", children: activeTab === "3d" && hasModel ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col gap-3", children: [
          hasMultiplePlates && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-bambu-dark-tertiary bg-bambu-dark p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-bambu-gray mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
              "Plates",
              platesLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedPlateId(null),
                  className: `flex items-center gap-2 rounded-lg border p-2 text-left transition-colors ${selectedPlateId == null ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary bg-bambu-dark-secondary hover:border-bambu-gray"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-bambu-dark-tertiary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-5 h-5 text-bambu-gray" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium truncate", children: "All Plates" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray truncate", children: [
                        plates.length,
                        " plate",
                        plates.length !== 1 ? "s" : ""
                      ] })
                    ] }),
                    selectedPlateId == null && /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-bambu-green flex-shrink-0" })
                  ]
                }
              ),
              plates.map((plate) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedPlateId(plate.index),
                  className: `flex items-center gap-2 rounded-lg border p-2 text-left transition-colors ${selectedPlateId === plate.index ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary bg-bambu-dark-secondary hover:border-bambu-gray"}`,
                  children: [
                    plate.has_thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: api.getPrinterFilePlateThumbnail(printerId, plate.index, filePath),
                        alt: `Plate ${plate.index}`,
                        className: "w-10 h-10 rounded object-cover bg-bambu-dark-tertiary"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-bambu-dark-tertiary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-5 h-5 text-bambu-gray" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium truncate", children: plate.name || `Plate ${plate.index}` }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray truncate", children: plate.objects.length > 0 ? plate.objects.slice(0, 2).join(", ") + (plate.objects.length > 2 ? "…" : "") : `${plate.filaments.length} filament${plate.filaments.length !== 1 ? "s" : ""}` })
                    ] }),
                    selectedPlateId === plate.index && /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-bambu-green flex-shrink-0" })
                  ]
                },
                plate.index
              ))
            ] }),
            selectedPlate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-bambu-gray flex flex-wrap gap-x-4 gap-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Plate ",
                selectedPlate.index
              ] }),
              selectedPlate.print_time_seconds != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "ETA ",
                Math.round(selectedPlate.print_time_seconds / 60),
                " min"
              ] }),
              selectedPlate.filament_used_grams != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                selectedPlate.filament_used_grams.toFixed(1),
                " g"
              ] }),
              selectedPlate.filaments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                selectedPlate.filaments.length,
                " filament",
                selectedPlate.filaments.length !== 1 ? "s" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ModelViewer,
            {
              url: api.getPrinterFileDownloadUrl(printerId, filePath),
              fileType: ext,
              selectedPlateId,
              className: "w-full h-full"
            }
          ) })
        ] }) : activeTab === "gcode" && hasGcode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          GcodeViewer,
          {
            gcodeUrl: api.getPrinterFileGcodeUrl(printerId, filePath),
            className: "w-full h-full"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-bambu-gray", children: "No preview available for this file" }) })
      ]
    }
  ) });
}
function formatStorageSize(bytes) {
  if (bytes === 0) return "0 GB";
  const gb = bytes / (1024 * 1024 * 1024);
  if (gb >= 1) {
    return `${gb.toFixed(1)} GB`;
  }
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(0)} MB`;
}
function getFileIcon(filename, isDirectory) {
  if (isDirectory) return Folder;
  const ext = filename.toLowerCase().split(".").pop() || "";
  switch (ext) {
    case "3mf":
      return FileBox;
    case "gcode":
      return FileText;
    case "mp4":
    case "avi":
      return Film;
    case "png":
    case "jpg":
    case "jpeg":
      return Image;
    default:
      return File;
  }
}
const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "size-asc", label: "Size (smallest)" },
  { value: "size-desc", label: "Size (largest)" },
  { value: "date-asc", label: "Date (oldest)" },
  { value: "date-desc", label: "Date (newest)" }
];
function FileManagerModal({ printerId, printerName, onClose }) {
  const { t } = useTranslation();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const [currentPath, setCurrentPath] = reactExports.useState("/");
  const [selectedFiles, setSelectedFiles] = reactExports.useState(/* @__PURE__ */ new Set());
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filesToDelete, setFilesToDelete] = reactExports.useState([]);
  const [sortBy, setSortBy] = reactExports.useState("name-asc");
  const [downloadProgress, setDownloadProgress] = reactExports.useState(null);
  const [viewerFile, setViewerFile] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["printerFiles", printerId, currentPath],
    queryFn: () => api.getPrinterFiles(printerId, currentPath),
    refetchInterval: 3e4
  });
  const { data: storageData } = useQuery({
    queryKey: ["printerStorage", printerId],
    queryFn: () => api.getPrinterStorage(printerId),
    staleTime: 3e4
    // Cache for 30 seconds
  });
  const deleteMutation = useMutation({
    mutationFn: async (paths) => {
      for (const path of paths) {
        await api.deletePrinterFile(printerId, path);
      }
    },
    onSuccess: () => {
      showToast(t("printerFiles.toast.filesDeleted", { count: filesToDelete.length }));
      queryClient.invalidateQueries({ queryKey: ["printerFiles", printerId] });
      setSelectedFiles(/* @__PURE__ */ new Set());
      setFilesToDelete([]);
    },
    onError: (error) => {
      showToast(t("printerFiles.toast.deleteFailed", { error: error.message }), "error");
    }
  });
  const navigateToFolder = (path) => {
    setCurrentPath(path);
    setSelectedFiles(/* @__PURE__ */ new Set());
  };
  const navigateUp = () => {
    if (currentPath === "/") return;
    const parts = currentPath.split("/").filter(Boolean);
    parts.pop();
    setCurrentPath(parts.length ? "/" + parts.join("/") : "/");
    setSelectedFiles(/* @__PURE__ */ new Set());
  };
  const toggleFileSelection = (path, e) => {
    e.stopPropagation();
    setSelectedFiles((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };
  const selectAllFiles = () => {
    if (!data?.files) return;
    const filePaths = data.files.filter((f) => !f.is_directory && (!searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()))).map((f) => f.path);
    setSelectedFiles(new Set(filePaths));
  };
  const deselectAllFiles = () => {
    setSelectedFiles(/* @__PURE__ */ new Set());
  };
  const handleDownload = async () => {
    if (selectedFiles.size === 0) return;
    const paths = Array.from(selectedFiles);
    if (paths.length === 1) {
      api.downloadPrinterFile(printerId, paths[0]).catch((err) => {
        console.error("Printer file download failed:", err);
      });
      setSelectedFiles(/* @__PURE__ */ new Set());
      return;
    }
    setDownloadProgress({ current: 0, total: paths.length });
    try {
      const blob = await api.downloadPrinterFilesAsZip(printerId, paths);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${printerName.replace(/[^a-zA-Z0-9]/g, "_")}-files.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(`Downloaded ${paths.length} files as ZIP`);
      setSelectedFiles(/* @__PURE__ */ new Set());
    } catch (error) {
      showToast(`Download failed: ${error instanceof Error ? error.message : "Unknown error"}`, "error");
    } finally {
      setDownloadProgress(null);
    }
  };
  const handleDelete = () => {
    if (selectedFiles.size === 0) return;
    setFilesToDelete(Array.from(selectedFiles));
  };
  const quickDirs = [
    { path: "/", label: "Root" },
    { path: "/cache", label: "Cache" },
    { path: "/model", label: "Models" },
    { path: "/timelapse", label: "Timelapse" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-3xl max-h-[85vh] flex flex-col bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary overflow-hidden",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, { className: "w-5 h-5 text-bambu-green" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("printerFiles.title") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: printerName })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  storageData && (storageData.used_bytes != null || storageData.free_bytes != null) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-bambu-gray flex items-center gap-2", children: [
                    storageData.used_bytes != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      t("printerFiles.storageUsed"),
                      " ",
                      formatStorageSize(storageData.used_bytes)
                    ] }),
                    storageData.used_bytes != null && storageData.free_bytes != null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-dark-tertiary", children: "|" }),
                    storageData.free_bytes != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      t("printerFiles.storageFree"),
                      " ",
                      formatStorageSize(storageData.free_bytes)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: onClose,
                      className: "text-bambu-gray hover:text-white transition-colors",
                      title: "Close file manager",
                      "aria-label": "Close file manager",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 border-b border-bambu-dark-tertiary bg-bambu-dark/50 flex-shrink-0", children: [
                quickDirs.map((dir) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      navigateToFolder(dir.path);
                      setSearchQuery("");
                    },
                    className: `px-3 py-1 text-sm rounded-full transition-colors ${currentPath === dir.path ? "bg-bambu-green text-white" : "bg-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
                    children: dir.label
                  },
                  dir.path
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: t("printerFiles.filterPlaceholder"),
                      value: searchQuery,
                      onChange: (e) => setSearchQuery(e.target.value),
                      className: "w-40 pl-8 pr-3 py-1.5 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "w-4 h-4 text-bambu-gray" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      value: sortBy,
                      onChange: (e) => setSortBy(e.target.value),
                      className: "appearance-none bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm py-1.5 pl-2 pr-6 focus:border-bambu-green focus:outline-none cursor-pointer",
                      title: "Sort files",
                      "aria-label": "Sort files",
                      children: SORT_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => refetch(),
                    disabled: isLoading,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isLoading ? "animate-spin" : ""}` })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-bambu-dark text-sm flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: navigateUp,
                    disabled: currentPath === "/",
                    className: "p-1 rounded hover:bg-bambu-dark-tertiary disabled:opacity-50 disabled:cursor-not-allowed",
                    title: "Go to parent folder",
                    "aria-label": "Go to parent folder",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray font-mono", children: currentPath })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-2 min-h-0", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) }) : !data?.files?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-bambu-gray", children: "No files in this directory" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: [...data.files].filter(
                (file) => !searchQuery || file.name.toLowerCase().includes(searchQuery.toLowerCase())
              ).sort((a, b) => {
                if (a.is_directory && !b.is_directory) return -1;
                if (!a.is_directory && b.is_directory) return 1;
                switch (sortBy) {
                  case "name-asc":
                    return a.name.localeCompare(b.name);
                  case "name-desc":
                    return b.name.localeCompare(a.name);
                  case "size-asc":
                    return a.size - b.size;
                  case "size-desc":
                    return b.size - a.size;
                  case "date-asc": {
                    const aTime = a.mtime ? parseUTCDate(a.mtime)?.getTime() ?? 0 : 0;
                    const bTime = b.mtime ? parseUTCDate(b.mtime)?.getTime() ?? 0 : 0;
                    return aTime - bTime;
                  }
                  case "date-desc": {
                    const aTime = a.mtime ? parseUTCDate(a.mtime)?.getTime() ?? 0 : 0;
                    const bTime = b.mtime ? parseUTCDate(b.mtime)?.getTime() ?? 0 : 0;
                    return bTime - aTime;
                  }
                  default:
                    return a.name.localeCompare(b.name);
                }
              }).map((file) => {
                const FileIcon = getFileIcon(file.name, file.is_directory);
                const isSelected = selectedFiles.has(file.path);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${isSelected ? "bg-bambu-green/20 border border-bambu-green/50" : "hover:bg-bambu-dark-tertiary"}`,
                    onClick: () => {
                      if (file.is_directory) {
                        navigateToFolder(file.path);
                      }
                    },
                    children: [
                      !file.is_directory ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: (e) => toggleFileSelection(file.path, e),
                          className: "flex-shrink-0 text-bambu-gray hover:text-white",
                          children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-5 h-5 text-bambu-green" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-5 h-5" })
                        }
                      ) : null,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FileIcon,
                        {
                          className: `w-5 h-5 flex-shrink-0 ${file.is_directory ? "text-bambu-green" : "text-bambu-gray"}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-white truncate", children: file.name }),
                      !file.is_directory && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: formatFileSize(file.size) }),
                        (file.name.toLowerCase().endsWith(".3mf") || file.name.toLowerCase().endsWith(".gcode") || file.name.toLowerCase().endsWith(".stl")) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: (e) => {
                              e.stopPropagation();
                              setViewerFile({ path: file.path, name: file.name });
                            },
                            className: "p-1 rounded hover:bg-bambu-dark text-bambu-gray hover:text-bambu-green",
                            title: "3D View",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" })
                          }
                        )
                      ] }),
                      file.is_directory && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4 text-bambu-gray rotate-180" })
                    ]
                  },
                  file.path
                );
              }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-t border-bambu-dark-tertiary bg-bambu-dark/50 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-bambu-gray", children: selectedFiles.size > 0 ? `${selectedFiles.size} selected` : searchQuery ? `${data?.files?.filter((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase())).length || 0} of ${data?.files?.length || 0} items` : `${data?.files?.length || 0} items` }),
                  data?.files?.some((f) => !f.is_directory) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: selectedFiles.size > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: deselectAllFiles,
                      className: "flex items-center gap-1 text-xs text-bambu-gray hover:text-white transition-colors",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SquareMinus, { className: "w-4 h-4" }),
                        "Deselect All"
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: selectAllFiles,
                      className: "flex items-center gap-1 text-xs text-bambu-gray hover:text-white transition-colors",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4" }),
                        "Select All"
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "secondary",
                      disabled: selectedFiles.size === 0 || downloadProgress !== null,
                      onClick: handleDownload,
                      children: downloadProgress ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                        downloadProgress.current,
                        "/",
                        downloadProgress.total
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                        "Download",
                        selectedFiles.size > 1 ? ` (${selectedFiles.size})` : ""
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "secondary",
                      disabled: selectedFiles.size === 0 || deleteMutation.isPending,
                      onClick: handleDelete,
                      className: "text-red-400 hover:text-red-300",
                      children: [
                        deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
                        t("printerFiles.deleteButton"),
                        selectedFiles.size > 1 ? ` (${selectedFiles.size})` : ""
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        filesToDelete.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: filesToDelete.length > 1 ? t("printerFiles.deleteFiles", { count: filesToDelete.length }) : t("fileManager.deleteFile"),
            message: filesToDelete.length > 1 ? t("printerFiles.deleteFilesConfirm", { count: filesToDelete.length }) : t("printerFiles.deleteFileConfirm", { name: filesToDelete[0].split("/").pop() }),
            confirmText: t("common.delete"),
            variant: "danger",
            onConfirm: () => {
              deleteMutation.mutate(filesToDelete);
            },
            onCancel: () => setFilesToDelete([])
          }
        ),
        viewerFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrinterFileViewerModal,
          {
            printerId,
            filePath: viewerFile.path,
            filename: viewerFile.name,
            onClose: () => setViewerFile(null)
          }
        )
      ]
    }
  );
}
const STORAGE_KEY_PREFIX = "embeddedCameraState_";
const MAX_RECONNECT_ATTEMPTS = 5;
const INITIAL_RECONNECT_DELAY = 2e3;
const MAX_RECONNECT_DELAY = 3e4;
const STALL_CHECK_INTERVAL = 5e3;
const DEFAULT_STATE = {
  x: window.innerWidth - 420,
  y: 20,
  width: 400,
  height: 300
};
function EmbeddedCameraViewer({ printerId, printerName, viewerIndex = 0, onClose }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const storageKey = `${STORAGE_KEY_PREFIX}${printerId}`;
  const loadState = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const state2 = JSON.parse(saved);
        return {
          x: Math.min(Math.max(0, state2.x), window.innerWidth - 100),
          y: Math.min(Math.max(0, state2.y), window.innerHeight - 100),
          width: Math.max(200, Math.min(state2.width, window.innerWidth - 20)),
          height: Math.max(150, Math.min(state2.height, window.innerHeight - 20))
        };
      }
    } catch {
    }
    const offset = viewerIndex * 30;
    return {
      ...DEFAULT_STATE,
      x: Math.max(0, DEFAULT_STATE.x - offset),
      y: Math.max(0, DEFAULT_STATE.y + offset)
    };
  };
  const [state, setState] = reactExports.useState(loadState);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [isResizing, setIsResizing] = reactExports.useState(false);
  const [dragOffset, setDragOffset] = reactExports.useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = reactExports.useState(false);
  const [isFullscreen, setIsFullscreen] = reactExports.useState(false);
  const [zoomLevel, setZoomLevel] = reactExports.useState(1);
  const [panOffset, setPanOffset] = reactExports.useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = reactExports.useState(false);
  const [panStart, setPanStart] = reactExports.useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = reactExports.useState(null);
  const [lastTouchCenter, setLastTouchCenter] = reactExports.useState(null);
  const [streamError, setStreamError] = reactExports.useState(false);
  const [streamLoading, setStreamLoading] = reactExports.useState(true);
  const [imageKey, setImageKey] = reactExports.useState(Date.now());
  const [reconnectAttempts, setReconnectAttempts] = reactExports.useState(0);
  const [isReconnecting, setIsReconnecting] = reactExports.useState(false);
  const [reconnectCountdown, setReconnectCountdown] = reactExports.useState(0);
  const containerRef = reactExports.useRef(null);
  const imgRef = reactExports.useRef(null);
  const reconnectTimerRef = reactExports.useRef(null);
  const countdownIntervalRef = reactExports.useRef(null);
  const stallCheckIntervalRef = reactExports.useRef(null);
  const [showSkipObjectsModal, setShowSkipObjectsModal] = reactExports.useState(false);
  const { data: printer } = useQuery({
    queryKey: ["printer", printerId],
    queryFn: () => api.getPrinter(printerId),
    enabled: printerId > 0
  });
  const { data: status } = useQuery({
    queryKey: ["printerStatus", printerId],
    queryFn: () => api.getPrinterStatus(printerId),
    refetchInterval: 3e4,
    enabled: printerId > 0
  });
  const chamberLightMutation = useMutation({
    mutationFn: (on) => api.setChamberLight(printerId, on),
    onMutate: async (on) => {
      await queryClient.cancelQueries({ queryKey: ["printerStatus", printerId] });
      const previousStatus = queryClient.getQueryData(["printerStatus", printerId]);
      queryClient.setQueryData(["printerStatus", printerId], (old) => ({
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
        queryClient.setQueryData(["printerStatus", printerId], context.previousStatus);
      }
      showToast(error.message || t("printers.toast.failedToControlChamberLight"), "error");
    }
  });
  const isPrintingWithObjects = (status?.state === "RUNNING" || status?.state === "PAUSE") && (status?.printable_objects_count ?? 0) >= 2;
  reactExports.useEffect(() => {
    const saveTimeout = setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(state));
    }, 500);
    return () => clearTimeout(saveTimeout);
  }, [state, storageKey]);
  const stopSentRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    stopSentRef.current = false;
    const imgElement = imgRef.current;
    return () => {
      if (imgElement) {
        imgElement.src = "";
      }
      stopSentRef.current = true;
      if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
      if (stallCheckIntervalRef.current) clearInterval(stallCheckIntervalRef.current);
    };
  }, [printerId]);
  reactExports.useEffect(() => {
    if (streamLoading) {
      const timer = setTimeout(() => setStreamLoading(false), 3e3);
      return () => clearTimeout(timer);
    }
  }, [streamLoading, imageKey]);
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
          if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
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
      if (imgRef.current) imgRef.current.src = "";
      setImageKey(Date.now());
    }, delay);
  }, [reconnectAttempts]);
  reactExports.useEffect(() => {
    if (streamLoading || isReconnecting || isMinimized) {
      if (stallCheckIntervalRef.current) {
        clearInterval(stallCheckIntervalRef.current);
        stallCheckIntervalRef.current = null;
      }
      return;
    }
    stallCheckIntervalRef.current = setInterval(async () => {
      try {
        const status2 = await api.getCameraStatus(printerId);
        if (status2.stalled || !status2.active && !streamError) {
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
  }, [streamLoading, streamError, isReconnecting, isMinimized, printerId, attemptReconnect]);
  reactExports.useEffect(() => {
    const handleFullscreenChange = () => {
      const nowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(nowFullscreen);
      if (!nowFullscreen) {
        setZoomLevel(1);
        setPanOffset({ x: 0, y: 0 });
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);
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
    if (!containerRef.current || !imgRef.current) {
      return { x: 200, y: 150 };
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
  const handleStreamError = () => {
    setStreamLoading(false);
    if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
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
    if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
  };
  const refresh = () => {
    setStreamLoading(true);
    setStreamError(false);
    setReconnectAttempts(0);
    setIsReconnecting(false);
    if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    if (imgRef.current) imgRef.current.src = "";
    setTimeout(() => setImageKey(Date.now()), 100);
  };
  const streamUrl = `${api.getCameraStreamUrl(printerId, 15)}&t=${imageKey}`;
  const handleMouseDown = (e) => {
    if (e.target.closest(".no-drag")) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - state.x,
      y: e.clientY - state.y
    });
  };
  const handleDragTouchStart = (e) => {
    if (e.target.closest(".no-drag")) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setDragOffset({
      x: touch.clientX - state.x,
      y: touch.clientY - state.y
    });
  };
  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
  };
  const handleResizeTouchStart = (e) => {
    e.stopPropagation();
    setIsResizing(true);
  };
  reactExports.useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setState((prev) => ({
          ...prev,
          x: Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - prev.width)),
          y: Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - prev.height))
        }));
      } else if (isResizing && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setState((prev) => ({
          ...prev,
          width: Math.max(200, Math.min(e.clientX - rect.left, window.innerWidth - prev.x - 10)),
          height: Math.max(150, Math.min(e.clientY - rect.top, window.innerHeight - prev.y - 10))
        }));
      }
    };
    const handleTouchMove2 = (e) => {
      if (!isDragging && !isResizing) return;
      e.preventDefault();
      const touch = e.touches[0];
      if (isDragging) {
        setState((prev) => ({
          ...prev,
          x: Math.max(0, Math.min(touch.clientX - dragOffset.x, window.innerWidth - prev.width)),
          y: Math.max(0, Math.min(touch.clientY - dragOffset.y, window.innerHeight - prev.height))
        }));
      } else if (isResizing && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setState((prev) => ({
          ...prev,
          width: Math.max(200, Math.min(touch.clientX - rect.left, window.innerWidth - prev.x - 10)),
          height: Math.max(150, Math.min(touch.clientY - rect.top, window.innerHeight - prev.y - 10))
        }));
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };
    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove2, { passive: false });
      document.addEventListener("touchend", handleMouseUp);
      document.addEventListener("touchcancel", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove2);
        document.removeEventListener("touchend", handleMouseUp);
        document.removeEventListener("touchcancel", handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragOffset]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: `${isFullscreen ? "fixed inset-0 z-[100]" : "fixed z-40 rounded-lg shadow-2xl border border-bambu-dark-tertiary"} bg-bambu-dark-secondary overflow-hidden`,
      style: isFullscreen ? void 0 : {
        left: state.x,
        top: state.y,
        width: isMinimized ? 200 : state.width,
        height: isMinimized ? 40 : state.height,
        cursor: isDragging ? "grabbing" : "default"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between px-3 py-2 bg-bambu-dark border-b border-bambu-dark-tertiary cursor-grab active:cursor-grabbing",
            onMouseDown: handleMouseDown,
            onTouchStart: handleDragTouchStart,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-white truncate", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "w-4 h-4 text-bambu-gray flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: printer?.name || printerName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 no-drag", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => chamberLightMutation.mutate(!status?.chamber_light),
                    disabled: !status?.connected || chamberLightMutation.isPending || !hasPermission("printers:control"),
                    className: `p-1 rounded disabled:opacity-50 ${status?.chamber_light ? "bg-yellow-500/20 hover:bg-yellow-500/30" : "hover:bg-bambu-dark-tertiary"}`,
                    title: !hasPermission("printers:control") ? t("printers.permission.noControl") : t("camera.chamberLight"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChamberLight, { on: status?.chamber_light ?? false, className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setShowSkipObjectsModal(true),
                    disabled: !isPrintingWithObjects || !hasPermission("printers:control"),
                    className: `p-1 rounded disabled:opacity-50 ${isPrintingWithObjects && hasPermission("printers:control") ? "hover:bg-bambu-dark-tertiary" : ""}`,
                    title: !hasPermission("printers:control") ? t("printers.permission.noControl") : !isPrintingWithObjects ? t("printers.skipObjects.onlyWhilePrinting") : t("printers.skipObjects.tooltip"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipObjectsIcon, { className: "w-3.5 h-3.5 text-bambu-gray" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: refresh,
                    disabled: streamLoading || isReconnecting,
                    className: "p-1 hover:bg-bambu-dark-tertiary rounded disabled:opacity-50",
                    title: "Refresh stream",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3.5 h-3.5 text-bambu-gray ${streamLoading ? "animate-spin" : ""}` })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: toggleFullscreen,
                    className: "p-1 hover:bg-bambu-dark-tertiary rounded",
                    title: isFullscreen ? "Exit fullscreen" : "Fullscreen",
                    children: isFullscreen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize, { className: "w-3.5 h-3.5 text-bambu-gray" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Fullscreen, { className: "w-3.5 h-3.5 text-bambu-gray" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setIsMinimized(!isMinimized),
                    className: "p-1 hover:bg-bambu-dark-tertiary rounded",
                    title: isMinimized ? "Expand" : "Minimize",
                    children: isMinimized ? /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-3.5 h-3.5 text-bambu-gray" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "w-3.5 h-3.5 text-bambu-gray" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "p-1 hover:bg-red-500/20 rounded",
                    title: "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 text-bambu-gray hover:text-red-400" })
                  }
                )
              ] })
            ]
          }
        ),
        !isMinimized && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative w-full bg-black flex items-center justify-center overflow-hidden ${isFullscreen ? "h-[calc(100%-40px)]" : "h-[calc(100%-40px)]"}`,
            onWheel: handleWheel,
            onMouseMove: handleImageMouseMove,
            onMouseUp: handleImageMouseUp,
            onMouseLeave: handleImageMouseUp,
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
            style: { touchAction: "none" },
            children: [
              streamLoading && !isReconnecting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 text-bambu-gray animate-spin" }) }),
              isReconnecting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/80 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "w-6 h-6 text-orange-400 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
                  "Reconnecting in ",
                  reconnectCountdown,
                  "s..."
                ] })
              ] }) }),
              streamError && !isReconnecting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-orange-400 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-2", children: "Camera unavailable" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: refresh,
                    className: "px-2 py-1 text-xs bg-bambu-green text-white rounded hover:bg-bambu-green/80",
                    children: "Retry"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  ref: imgRef,
                  src: streamUrl,
                  alt: "Camera stream",
                  className: "max-w-full max-h-full object-contain select-none",
                  style: {
                    transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px) rotate(${printer?.camera_rotation || 0}deg)`,
                    ...printer?.camera_rotation === 90 || printer?.camera_rotation === 270 ? { maxWidth: "100%", maxHeight: "100%" } : {},
                    cursor: zoomLevel > 1 ? isPanning ? "grabbing" : "grab" : "default"
                  },
                  onError: handleStreamError,
                  onLoad: handleStreamLoad,
                  onMouseDown: handleImageMouseDown,
                  draggable: false
                },
                String(imageKey)
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 rounded px-1.5 py-1 no-drag", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: handleZoomOut,
                    disabled: zoomLevel <= 1,
                    className: "p-1 hover:bg-white/10 rounded disabled:opacity-30",
                    title: "Zoom out",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomOut, { className: "w-3.5 h-3.5 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: resetZoom,
                    className: "px-1.5 py-0.5 text-xs text-white hover:bg-white/10 rounded min-w-[32px]",
                    title: "Reset zoom",
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
                    className: "p-1 hover:bg-white/10 rounded disabled:opacity-30",
                    title: "Zoom in",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "w-3.5 h-3.5 text-white" })
                  }
                )
              ] }),
              !isFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 right-0 w-6 h-6 cursor-se-resize no-drag hover:bg-white/10 rounded-tl transition-colors",
                  onMouseDown: handleResizeMouseDown,
                  onTouchStart: handleResizeTouchStart,
                  title: "Drag to resize",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: "w-6 h-6 text-bambu-gray/70 hover:text-bambu-gray",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 22H20V20H22V22ZM22 18H20V16H22V18ZM18 22H16V20H18V22ZM22 14H20V12H22V14ZM18 18H16V16H18V18ZM14 22H12V20H14V22ZM22 10H20V8H22V10ZM18 14H16V12H18V14ZM14 18H12V16H14V18ZM10 22H8V20H10V22Z" })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SkipObjectsModal,
          {
            printerId,
            isOpen: showSkipObjectsModal,
            onClose: () => setShowSkipObjectsModal(false)
          }
        )
      ]
    }
  );
}
function MQTTDebugModal({ printerId, printerName, onClose }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [autoScroll, setAutoScroll] = reactExports.useState(true);
  const [expandedLogs, setExpandedLogs] = reactExports.useState(/* @__PURE__ */ new Set());
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [directionFilter, setDirectionFilter] = reactExports.useState("all");
  const logContainerRef = reactExports.useRef(null);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["mqtt-logs", printerId],
    queryFn: () => api.getMQTTLogs(printerId),
    refetchInterval: 1e3
    // Poll every second when logging is enabled
  });
  const enableMutation = useMutation({
    mutationFn: () => api.enableMQTTLogging(printerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mqtt-logs", printerId] });
    }
  });
  const disableMutation = useMutation({
    mutationFn: () => api.disableMQTTLogging(printerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mqtt-logs", printerId] });
    }
  });
  const clearMutation = useMutation({
    mutationFn: () => api.clearMQTTLogs(printerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mqtt-logs", printerId] });
    }
  });
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  reactExports.useEffect(() => {
    if (autoScroll && logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [data?.logs, autoScroll]);
  const toggleExpand = (index) => {
    setExpandedLogs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", { hour12: false, fractionalSecondDigits: 3 });
  };
  const formatPayload = (payload, expanded) => {
    if (payload === void 0 || payload === null) {
      return "<empty>";
    }
    const obj = typeof payload === "string" ? JSON.parse(payload) : payload;
    const json = JSON.stringify(obj, null, expanded ? 2 : 0);
    if (!expanded && json.length > 100) {
      return json.substring(0, 100) + "...";
    }
    return json;
  };
  const loggingEnabled = data?.logging_enabled ?? false;
  const logs = reactExports.useMemo(() => data?.logs ?? [], [data?.logs]);
  const filteredLogs = reactExports.useMemo(() => {
    return logs.filter((log) => {
      if (directionFilter !== "all" && log.direction !== directionFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const topicMatch = log.topic.toLowerCase().includes(query);
        const payloadStr = JSON.stringify(log.payload).toLowerCase();
        const payloadMatch = payloadStr.includes(query);
        return topicMatch || payloadMatch;
      }
      return true;
    });
  }, [logs, searchQuery, directionFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg max-w-4xl w-full max-h-[85vh] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("mqttDebug.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: printerName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "text-bambu-gray hover:text-white transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        loggingEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "secondary",
            onClick: () => disableMutation.mutate(),
            disabled: disableMutation.isPending,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4" }),
              t("mqttDebug.stopLogging")
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: () => enableMutation.mutate(),
            disabled: enableMutation.isPending,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
              t("mqttDebug.startLogging")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "secondary",
            onClick: () => clearMutation.mutate(),
            disabled: clearMutation.isPending || logs.length === 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
              t("mqttDebug.clearLog")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "secondary",
            onClick: () => refetch(),
            disabled: isLoading,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isLoading ? "animate-spin" : ""}` })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-bambu-gray cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: autoScroll,
              onChange: (e) => setAutoScroll(e.target.checked),
              className: "rounded border-bambu-dark-tertiary"
            }
          ),
          "Auto-scroll"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-gray", children: [
          filteredLogs.length,
          "/",
          logs.length
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: t("mqttDebug.searchPlaceholder"),
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "w-full pl-8 pr-3 py-1.5 text-sm bg-bambu-dark border border-bambu-dark-tertiary rounded text-white placeholder-bambu-gray focus:border-bambu-green focus:outline-none"
            }
          ),
          searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSearchQuery(""),
              className: "absolute right-2 top-1/2 -translate-y-1/2 text-bambu-gray hover:text-white",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-bambu-dark rounded border border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setDirectionFilter("all"),
              className: `px-2 py-1.5 text-xs rounded-l transition-colors ${directionFilter === "all" ? "bg-bambu-green text-white" : "text-bambu-gray hover:text-white"}`,
              children: t("mqttDebug.all")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setDirectionFilter("in"),
              className: `px-2 py-1.5 text-xs transition-colors flex items-center gap-1 ${directionFilter === "in" ? "bg-blue-500 text-white" : "text-bambu-gray hover:text-white"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-3 h-3" }),
                t("mqttDebug.incoming")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setDirectionFilter("out"),
              className: `px-2 py-1.5 text-xs rounded-r transition-colors flex items-center gap-1 ${directionFilter === "out" ? "bg-green-500 text-white" : "text-bambu-gray hover:text-white"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-3 h-3" }),
                t("mqttDebug.outgoing")
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: logContainerRef,
        className: "flex-1 overflow-auto p-4 font-mono text-xs bg-black min-h-[400px]",
        children: logs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: t("mqttDebug.noMessages") }),
          !loggingEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("mqttDebug.startLoggingHint") })
        ] }) : filteredLogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: t("mqttDebug.noMessagesMatch") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("mqttDebug.adjustFilterHint") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: filteredLogs.map((log, index) => {
          const isExpanded = expandedLogs.has(index);
          const isIncoming = log.direction === "in";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-2 rounded cursor-pointer hover:bg-bambu-dark-secondary transition-colors ${isExpanded ? "bg-bambu-dark-secondary" : ""}`,
              onClick: () => toggleExpand(index),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray shrink-0", children: formatTimestamp(log.timestamp) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `shrink-0 ${isIncoming ? "text-blue-400" : "text-green-400"}`,
                      title: isIncoming ? t("mqttDebug.incoming") : t("mqttDebug.outgoing"),
                      children: isIncoming ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400 shrink-0", children: log.topic })
                ] }),
                isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-2 p-3 bg-gray-900 border border-gray-700 rounded text-green-400 overflow-x-auto whitespace-pre-wrap break-all max-h-96 overflow-y-auto text-xs", children: formatPayload(log.payload, true) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-1 text-white/80 truncate", children: formatPayload(log.payload, false) })
              ]
            },
            index
          );
        }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-t border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-bambu-gray", children: loggingEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }),
        t("mqttDebug.loggingActive")
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("mqttDebug.loggingStopped") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("common.close") })
    ] })
  ] }) });
}
const ERROR_DESCRIPTIONS = {
  "0300_4000": "Z axis homing failed; the task has been stopped.",
  "0300_4001": "The printer timed out waiting for the nozzle to cool down before homing.",
  "0300_4002": "Auto Bed Leveling failed; the task has been stopped.",
  "0300_4005": "The hotend cooling fan speed is abnormal.",
  "0300_4006": "The nozzle is clogged.",
  "0300_4008": "The AMS failed to change filament.",
  "0300_4009": "Homing XY axis failed.",
  "0300_400A": "Mechanical resonance frequency identification failed.",
  "0300_400B": "Internal communication exception",
  "0300_400C": "The task was canceled.",
  "0300_400D": "Resume failed after power loss.",
  "0300_400E": "The motor self-check failed.",
  "0300_400F": "The power supply voltage does not match the printer.",
  "0300_4010": "Nozzle offset calibration failed.",
  "0300_4011": "Flow Dynamics Calibration failed; please reinitiate printing or calibration.",
  "0300_4013": "Printing cannot be initiated while AMS is drying.",
  "0300_4014": "Homing Z axis failed: temperature control abnormality.",
  "0300_4015": "Nozzle clumping detection calibration failed. Please go to 'Assistant' for troubleshooting.",
  "0300_4016": "Nozzle cleaning failed. Please click the Assistant for troubleshooting.",
  "0300_401F": "The hotend is not installed, and the toolhead cannot perform homing. Please install the hotend and then continue.",
  "0300_4020": "The nozzle presence detection failed. Please check the Assistant for details.",
  "0300_4021": "Nozzle offset calibration sensor signal abnormality detected. Please check the sensor and retry.",
  "0300_4042": "The Laser Safety Window is not properly installed. The task has been stopped.",
  "0300_4044": "The Flame Sensor is abnormal. The sensor may be short-circuited. Please troubleshoot the issue before starting a print job.",
  "0300_404B": "Task aborted because the front door or top cover is open.",
  "0300_404D": "The current temperature of the hotend, heatbed, or chamber is too high. Please wait for it to cool down to room temperature before restarting the task.",
  "0300_4050": "Liveview Camera calibration timeout; please restart the printer.",
  "0300_4052": "Blade Z-axis homing failed",
  "0300_4057": "Z-axis step loss detected. The task has stopped. Please check if there are any obstructions beneath the heatbed.",
  "0300_4066": "Calibration of motion precision failed.",
  "0300_4067": "Calibration result is over the threshold.",
  "0300_4068": "Step loss occurred during the motion accuracy enhancement process. Please try again.",
  "0300_8000": "Printing was paused for unknown reason. You can select 'Resume' to resume the print job.",
  "0300_8001": "Printing was paused by the user. You can select 'Resume' to continue printing.",
  "0300_8002": "First layer defects were detected by the Micro Lidar. Please check the quality of the printed model before continuing your print.",
  "0300_8003": "Spaghetti defects were detected by the AI Print Monitoring. Please check the quality of the printed model before continuing your print.",
  "0300_8004": "Filament ran out. Please load new filament.",
  "0300_8005": "Toolhead front cover fell off. Please remount the front cover and check to make sure your print is going okay.",
  "0300_8006": "The build plate marker was not detected. Please confirm the build plate is correctly positioned on the heatbed with all four corners aligned, and the marker is visible.",
  "0300_8007": "There was an unfinished print job when the printer lost power. If the model is still adhered to the build plate, you can try resuming the print job.",
  "0300_8008": "Nozzle temperature malfunction",
  "0300_8009": "Heatbed temperature malfunction",
  "0300_800A": "A Filament pile-up was detected by AI Print Monitoring. Please clean filament from the waste chute.",
  "0300_800B": "The cutter is stuck. Please make sure the cutter handle is out and check the filament sensor cable connection.",
  "0300_800C": "Skipped step detected: auto-recover complete; please resume print and check if there are any layer shift problems.",
  "0300_800D": "Detected that the extruder is not extruding normally. If the defects are acceptable, select 'Resume' to resume the print job.",
  "0300_800E": "The print file is not available. Please check to see if the storage media has been removed.",
  "0300_800F": "The door seems to be open, so printing was paused.",
  "0300_8010": "The hotend cooling fan speed is abnormal.",
  "0300_8011": "Detected build plate is not the same as the Gcode file. Please adjust slicer settings or use the correct plate.",
  "0300_8013": "Printing paused due to the pause command added to the printing file.",
  "0300_8014": "The nozzle is covered with filament, or the build plate is installed incorrectly. Please cancel this print and clean the nozzle or adjust the build plate according to the actual status. You can als...",
  "0300_8015": "The filament on external spool has run out; please load new filament. If the filament is loaded, please select 'Resume'.",
  "0300_8016": "The nozzle is clogged with filament. Please cancel this print and clean the nozzle or select 'Resume' to resume the print job.",
  "0300_8017": "Foreign objects detected on heatbed. Please check and clean the heatbed. Then, select 'Resume' to resume the print job.",
  "0300_8018": "Chamber temperature malfunction.",
  "0300_8019": "No build plate is placed.",
  "0300_801A": "Filament extrusion error; please check the assistant for troubleshooting. After resolving the issue, decide whether to cancel or resume the print job based on the actual print status.",
  "0300_801B": "Nozzle temperature problem detected. Refer to Assistant to re-connect the hotend connector. POWER OFF the printer before this operation to avoid short circuits.",
  "0300_801C": "The extrusion resistance is abnormal. The extruder may be clogged; please refer to the assistant. After trouble shooting, you can select 'Resume' to resume the print job.",
  "0300_801D": "The extruder servo motor position sensor is malfunctioning. Please power off the printer first and check if the connection cable is loose.",
  "0300_801E": "The extrusion motor is overloaded, please check the Assistant for details.",
  "0300_8021": "The nozzle may not be installed or not properly installed. Please ensure the nozzle is correctly installed before proceeding.",
  "0300_8022": "The heatbed may be obstructed while moving downward. Please clear any objects beneath the heatbed and check for any resistance or jamming during its movement.",
  "0300_8028": "Nozzle offset calibration sensor error. If using a single hotend or the calibration function is disabled, you may ignore this and continue printing; otherwise, it is recommended to check the sensor...",
  "0300_8041": "Platform detection timeout: please restart the printer.",
  "0300_8042": "Task paused because the door is open.",
  "0300_8043": "The laser module is abnormal.",
  "0300_8044": "Fire was detected inside the chamber.",
  "0300_8045": "Material detection timeout: please restart the printer.",
  "0300_8046": "Foreign object detect timeout: please restart the printer.",
  "0300_8047": "Quick-release lever detection time out: please restart the printer.",
  "0300_8048": "Laser Module unlock has timed out, and the task cannot proceed. Please restart the printer and try again.",
  "0300_8049": "The current plate is invalid.",
  "0300_804A": "Emergency stop button improperly installed. Please reinstall according to the Wiki before proceeding.",
  "0300_804B": "Task paused. The Laser Safety Window is open.",
  "0300_804E": "This is a printing task. Please detach the Laser/Cutting Module from the Toolhead.",
  "0300_804F": "The loading/unloading process is currently ongoing. Please stop the process or remove the laser/cutting module.",
  "0300_8050": "This device does not support the 40W Laser Module. Please remove it or replace it with a 10W Laser Module.",
  "0300_8051": "The cutting module has dropped or the cutting module cable is disconnected; please check the module.",
  "0300_8053": "Laser module detected. Please install the right nozzle correctly to ensure proper Laser Module Mounting Calibration.",
  "0300_8054": "Please place the paper required for Print Then Cut.",
  "0300_8055": "The module mounted on the toolhead does not match the task. Please install the correct module.",
  "0300_8057": "The rotary attachment is disconnected. Please ensure it is properly installed and the cable is securely plugged in.",
  "0300_8058": "The rotary attachment is detected. Please remove it before continuing.",
  "0300_8061": "The mode of Airflow System failed to activate; check the air door condition.",
  "0300_8062": "The chamber temperature is too high. It may be due to high environmental temperature.",
  "0300_8063": "The chamber temperature is too high. Please open the top cover and front door to cool down.",
  "0300_8064": "The chamber temperature is too high. Please open the top cover and front door to cool down. (Open door detection for this print job will be set to 'Notification' level)",
  "0300_8065": "The temperature of the MC module is too high. Please check the Wiki for possible explanations.",
  "0300_8071": "The Toolhead Enhanced Cooling Fan module is malfunctioning.",
  "0300_807D": "Fire Extinguisher not detected, the automatic extinguishing function will be unavailable.",
  "0300_807E": "Fire Extinguisher not detected, the automatic extinguishing function will be unavailable.",
  "0300_807F": "Fire Extinguisher is malfunctioning.",
  "0300_8080": "Fire extinguisher motor reset failed.",
  "0300_8081": "Fire extinguisher cylinder not installed. Please confirm on the extinguisher page.",
  "0300_8082": "The Fire Extinguisher Gas Cylinder is empty.",
  "0300_C012": "Please heat the nozzle to above 170°C.",
  "0300_C056": "A minor fire was detected inside the chamber, and the Auto Fire Extinguishing process has been aborted.",
  "0300_C070": "The fire extinguisher has been detected and is ready for use after the laser module is connected.",
  "0500_4001": "Failed to connect to Bambu Cloud. Please check your network connection.",
  "0500_4002": "Unsupported print file path or name. Please resend the print job.",
  "0500_4003": "Printing stopped because the printer was unable to parse the file. Please resend your print job.",
  "0500_4004": "Device is busy and cannot start new task. Please wait for current task to complete before sending new task.",
  "0500_4005": "Print jobs are not allowed to be sent while updating firmware.",
  "0500_4006": "There is not enough free storage space for the print job. Restoring to factory settings can free up available space.",
  "0500_4007": "The device requires a repair upgrade, and printing is currently unavailable.",
  "0500_4008": "Starting printing failed; please power cycle the printer and resend the print job.",
  "0500_4009": "Print jobs are not allowed to be sent while updating logs.",
  "0500_400A": "The file name is not supported. Please rename and restart the print job.",
  "0500_400B": "There was a problem downloading a file. Please check your network connection and resend the print job.",
  "0500_400C": "Please insert a MicroSD card and restart the print job.",
  "0500_400D": "Please run a self-test and restart the print job.",
  "0500_400E": "Printing was cancelled.",
  "0500_400F": "AMS is initializing and cannot be upgraded at the moment. Please try again later.",
  "0500_4010": "AMS is drying and cannot be upgraded at the moment. Please try again later.",
  "0500_4011": "The printer is loading or unloading filament and cannot be upgraded at the moment. Please try again later.",
  "0500_4012": "The device is printing and cannot be upgraded at the moment. Please try again later.",
  "0500_4013": "AMS is in operation and cannot be upgraded at the moment. Please try again when it is idle.",
  "0500_4014": "Slicing for the print job failed. Please check your settings and restart the print job.",
  "0500_4015": "There is not enough free storage space for the print job. Please format or clear files from the MicroSD card to free up space.",
  "0500_4016": "The MicroSD Card is write-protected. Please replace the MicroSD Card.",
  "0500_4017": "Binding failed. Please retry or restart the printer and retry.",
  "0500_4018": "Binding configuration information parsing failed; please try again.",
  "0500_4019": "The printer has already been bound. Please unbind it and try again.",
  "0500_401A": "Cloud access failed. Possible reasons include network instability caused by interference, inability to access the internet, or router firewall configuration restrictions. You can try moving the pri...",
  "0500_401B": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_401C": "Cloud access is rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_401D": "Cloud access failed, which may be caused by network instability due to interference. You can try moving the printer closer to the router before you try again.",
  "0500_401E": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_401F": "Authorization timed out. Please make sure that your phone or PC has access to the internet, and ensure that the Bambu Studio/Bambu Handy APP is running in the foreground during the binding operation.",
  "0500_4020": "Cloud access rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_4021": "Cloud access failed, which may be caused by network instability due to interference. You can try moving the printer closer to the router before you try again.",
  "0500_4022": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_4023": "Cloud access rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_4024": "Cloud access failed. Possible reasons include network instability caused by interference, inability to access the internet, or router firewall configuration restrictions. You can try moving the pri...",
  "0500_4025": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_4026": "Cloud access rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_4027": "Cloud access failed; this may be caused by network instability due to interference. You can try moving the printer closer to the router before you try again.",
  "0500_4028": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_4029": "Cloud access is rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0500_402A": "Failed to connect to the router, which may be caused by wireless interference or being too far away from the router. Please try again or move the printer closer to the router and try again.",
  "0500_402B": "Router connection failed due to incorrect password. Please check the password and try again.",
  "0500_402C": "Failed to obtain IP address, which may be caused by wireless interference resulting in data transmission failure or the DHCP address pool of the router being full. Please move the printer closer to...",
  "0500_402D": "System exception",
  "0500_402E": "System does not support the file system currently used by the USB flash drive. Please replace or format the USB flash drive to FAT32.",
  "0500_402F": "The MicroSD card sector data is damaged. Please use the SD card repair tool to repair or format it. If it still cannot be identified, please replace the MicroSD card.",
  "0500_4030": "The device is currently upgrading. Please try again when it is idle.",
  "0500_4031": "The accessory firmware does not match the printer. Please update it on the 'Firmware' page.",
  "0500_4033": "The AMS firmware does not match the printer. Please update it on the 'Firmware' page.",
  "0500_4034": "The Laser Module firmware does not match the printer. Please update it on the 'Firmware' page.",
  "0500_4035": "The BirdsEye Camera is malfunctioning. Please try restarting the device. If the issue persists after multiple restarts, check the camera connection status or contact customer support.",
  "0500_4037": "Your sliced file is not compatible with current printer model. This file can't be printed on this printer.",
  "0500_4038": "The nozzle diameter in sliced file is not consistent with the current nozzle setting. This file can't be printed.",
  "0500_4039": "The current task does not allow the installation of the laser/cutting module, and the task has been halted.",
  "0500_403A": "The current temperature is too low. In order to protect you and your printer, printing tasks, moving an axis and other operations are disabled. Please move the printer to an environment above 10 de...",
  "0500_403B": "Laser/cutting tasks cannot be initiated on the machine at the moment. Please use the computer software to start the task.",
  "0500_403C": "The current nozzle setting does not match the slicing file. Continuing to print may affect print quality. It is recommended to re-slice before starting the print.",
  "0500_403D": "The toolhead module is not set up. Please set it up before initiating the task.",
  "0500_403E": "The current tool head does not support initialization.",
  "0500_403F": "Failed to download print job; please check your network connection.",
  "0500_4040": "The printer has reached its power limit. Please connect a dedicated power adapter to this AMS to enable drying.",
  "0500_4041": "The AMS drying cannot be started during printing.",
  "0500_4042": "Due to power limitations, starting AMS drying will pause current operations such as nozzle heating and fan running. Do you want to proceed with drying?",
  "0500_4043": "Due to power limitations, only one AMS is allowed to use the device's power for drying.",
  "0500_4044": "BirdsEye Camera malfunction: please contact customer support.",
  "0500_4045": "Hotend check in progress. This operation is temporarily unavailable. Please wait.",
  "0500_4050": "Error detected on the print board.",
  "0500_4052": "Error detected on the hot end.",
  "0500_4054": "Error detected on the mat.",
  "0500_405D": "Laser module Serial Number error: unable to calibrate or make project.",
  "0500_4065": "The task requires a Laser Platform, but the current one is a Cutting Platform. Please replace it, measure the material thickness in the software, and then restart the task.",
  "0500_4070": "The laser or cutter module is connected, so the device cannot initiate a 3D printing task.",
  "0500_4075": "No Laser Platform was detected, which may affect thickness measurement accuracy. Please place the laser platform correctly and ensure the rear markers are not blocked, then restart the thickness me...",
  "0500_4076": "Please place the Laser Platform correctly and ensure the rear markers are not blocked, then restart the thickness measurement in the software before initiating the task.",
  "0500_4097": "The device cannot detect the Laser Module. Please reconnect the module cable or restart the printer.",
  "0500_4098": "The device cannot detect AMS A. Please reconnect the AMS cable or restart the printer.",
  "0500_4099": "The firmware of Cutting Module does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0500_409A": "The firmware of the Air Pump does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0500_409B": "The firmware of the Laser Module does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0500_409D": "The firmware of AMS A does not match the printer; the device cannot continue working. Please upgrade it on the 'Firmware' page.",
  "0500_409E": "The device cannot detect the Cutting Module. Please reconnect the module cable or restart the printer.",
  "0500_409F": "The device cannot detect the Air Pump.  Please reconnect the module cable or restart the printer.",
  "0500_40A0": "The Rotary Attachment module is not detected. Please reconnect the cable or restart the printer.",
  "0500_40A1": "The Auto Fire Extinguishing System is not detected.  Please reconnect the module cable or restart the printer.",
  "0500_40A3": "AMS(or AMS lite) A communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0500_40A4": "The current firmware only supports 1 AMS Lite. Please remove all AMS units before reconnecting the supported AMS Lite device.",
  "0500_40A5": "The current firmware only supports AMS/AMS 2 Pro/AMS HT, with a maximum of 4 units. Please remove all AMS units before reconnecting the supported one.",
  "0500_8013": "The print file is not available. Please check to see if the storage media has been removed.",
  "0500_8036": "Your sliced file is not consistent with the current printer model. Continue?",
  "0500_803C": "The current nozzle setting does not match the slicing file. Continuing to print may affect print quality. It is recommended to re-slice before starting the print.",
  "0500_8040": "Toolhead front cover is detached. Moving the toolhead may damage the printer. Do you want to continue?",
  "0500_8041": "The filament in hotend is too cold. Extrusion may damage the extruder. Still feeding in/out the filament?",
  "0500_8048": "The module on the toolhead is not calibrated. Please cancel the task to perform calibration or switch to a calibrated module.",
  "0500_8051": "Detected build plate is not the same as the Gcode file. Please adjust slicer settings or use the correct plate.",
  "0500_8053": "Nozzle mismatch was detected during printing. Please initiate the print after re-slicing, or continue printing after replacing with the correct nozzle. Caution: the hotend temperature is high.",
  "0500_8055": "Laser module is installed, but a Cutting Platform is detected. Please place a Laser Platform and perform laser calibration.",
  "0500_8056": "Cutting module is installed, but the laser platform is detected. Please place the cutting platform for calibration.",
  "0500_8058": "Please place the light grip cutting mat correctly and ensure the marker is exposed.",
  "0500_8059": "Cutting platform base is not correctly aligned. Please ensure that the four corners of the platform are aligned with the heatbed.",
  "0500_805A": "Please place the cutting mat on cutting protection base.",
  "0500_805B": "The cutting mat type is unknown; please replace it with the correct cutting mat.",
  "0500_805C": "The grip cutting mat type does not match; please place a LightGrip cutting mat.",
  "0500_805E": "Cutting module Serial Number error: unable to calibrate or make project.",
  "0500_8060": "The current module on toolhead does not meet requirements. Please replace the module as per the on-screen instructions.",
  "0500_8061": "No print plate detected. Please make sure it is placed correctly.",
  "0500_8062": "The print plate marker was not detected. Please confirm the print plate is correctly positioned on the heatbed with all four corners aligned, and the marker is visible. If strong light is shining o...",
  "0500_8063": "The platform is not detected during calibration; please make sure the Laser Platform is properly placed.",
  "0500_8064": "Please place the Laser Platform correctly and ensure the rear markers are not blocked for laser calibration.",
  "0500_8066": "The task requires a Cutting Platform, but the current one is a Laser Platform. Please replace it with a Cutting Platform (Cutting Protection Base + LightGrip cutting mat).",
  "0500_8067": "Please place a LightGrip cutting mat on the cutting protection base.",
  "0500_8068": "Please place the strong grip cutting mat correctly and ensure the marker is exposed.",
  "0500_8069": "Unable to recognize the left and right hotends. They might be third party hotends, or the hotend marks may be dirty. Please manually set the hotend types.",
  "0500_806A": "Unable to recognize the left and right hotends. They might be third party hotends, or the hotend marks may be dirty. Please set hotend types on printer screen before next print.",
  "0500_806B": "Quick-release Lever is not locked. Please press down the external toolhead module to ensure it is properly seated, then push down the level to lock it in place.",
  "0500_806C": "Please place the cutting platform correctly and ensure the marker is exposed.",
  "0500_806D": "Material not detected. Please confirm placement and continue.",
  "0500_806E": "Foreign objects detected on heatbed; please check and clean up the heatbed.",
  "0500_806F": "The grip cutting mat type does not match; please place a StrongGrip cutting mat.",
  "0500_8071": "No cutting platform was detected. Please confirm that it has been correctly placed.",
  "0500_8072": "Live View camera is blocked",
  "0500_8073": "Heatbed limit block is obstructed or contaminated. Please clean and ensure the limit block is visible, otherwise platform position offset detection may be inaccurate.",
  "0500_8074": "The Laser Platform is offset. Please ensure that the four corners of the platform are aligned with the heatbed, and the marker is not obstructed.",
  "0500_8077": "The visual marker was not detected. Please ensure the paper is properly placed.",
  "0500_8078": "Current material does not match the sliced file settings. Please load the correct material and ensure the QR code on the material is not damaged or dirty.",
  "0500_8079": "Please place the Laser Test Material (350g paperboard) and position support strips underneath to prevent material warping.",
  "0500_807A": "The foreign object detection function is not working. You can continue the task or check the assistant for troubleshooting.",
  "0500_807B": "Please place the cutting platform (cutting protection base + LightGrip cutting mat).",
  "0500_807C": "Please place the cutting platform (cutting protection base + StrongGrip cutting mat).",
  "0500_807D": "This task requires a Cutting Platform, but the current one is a Laser Platform. Please replace it with a Cutting Platform (Cutting Protection Base + StrongGrip Cutting Mat).",
  "0500_807E": "Please place a StrongGrip cutting mat on the cutting protection base.",
  "0500_8080": "The left and right hotends are not installed.",
  "0500_8081": "The left and right hotends are not installed.",
  "0500_8082": "Please remove the protective film on the Opaque Glossy Acrylic before processing",
  "0500_8083": "Material is not allowed in Mounting Calibration. Please remove the material from the platform.",
  "0500_8084": "The Live View Camera is dirty; please clean it and continue.",
  "0500_8085": "Toolhead camera is obstructed",
  "0500_8086": "Toolhead Camera is dirty, which affects the AI function; please clean the lens surface.",
  "0500_8087": "BirdsEye camera is obstructed",
  "0500_8088": "The Birdseye Camera is dirty",
  "0500_8089": "Task paused due to Presence Check failed. Please check the printer to continue.",
  "0500_808A": "The BirdsEye Camera is installed offset. Please refer to the assistant to reinstall it.",
  "0500_808B": "The BirdsEye Camera setup failed. Please remove all objects and the mat on the heatbed to ensure the heatbed markers are visible. Meanwhile, please ensure the BirdsEye Camera is installed correctly...",
  "0500_808C": "Detected build plate offset. Please align the build plate with the heatbed, and then continue.",
  "0500_808D": "The Cutting Module offset calibration failed, which may result in inaccurate cuts. Please ensure the cutting material is properly positioned and check whether the cutting blade tip is worn.",
  "0500_808E": "BirdsEye Camera initialization failed. The toolhead camera did not detect the Heatbed features. Please clean the Heatbed, remove all objects and pads, and ensure the bed markings are visible. Check...",
  "0500_808F": "Nozzle camera lens is dirty, affecting AI monitoring. Clean the lens with a non-woven cloth and a small amount of alcohol. Beware of hotend heat; wait for it to cool before handling.",
  "0500_8090": "Please attach the 80g White Printing Paper to the center area of the platform.",
  "0500_8091": "The Cutting Module offset calibration failed, which may result in inaccurate cuts. Please ensure the 80g white printer paper(letter paper thickness) is properly positioned and check whether the cut...",
  "0500_8092": "Toolhead Camera initialization failed. This print can still continue, but some AI functions will be disabled. If you encounter this issue again after restarting, please contact customer support.",
  "0500_8093": "The nozzle silicone sleeve is not installed; there is a risk of temperature control failure. Please install it correctly and try again.",
  "0500_80A0": "The visual encoder board was not detected. Please check if the board is properly placed and aligned at all four corners, and ensure the positioning markings are clear and free from wear.",
  "0500_C010": "MicroSD Card read/write exception: please reinsert or replace the MicroSD Card.",
  "0500_C032": "Laser/Cutting module connected to the toolhead. The drying process has been automatically stopped.",
  "0500_C036": "This is a printing task. Please detach the Laser/Cutting Module from the Toolhead.",
  "0500_C07F": "Device is busy and cannot perform this operation. To proceed, please pause or stop the current task.",
  "0501_4017": "Binding failed. Please retry or restart the printer and retry.",
  "0501_4018": "Binding configuration information parsing failed; please try again.",
  "0501_4019": "The printer has already been bound. Please unbind it and try again.",
  "0501_401A": "Cloud access failed. Possible reasons include network instability caused by interference, inability to access the internet, or router firewall configuration restrictions. You can try moving the pri...",
  "0501_401B": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_401C": "Cloud access is rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_401D": "Cloud access failed, which may be caused by network instability due to interference. You can try moving the printer closer to the router before you try again.",
  "0501_401E": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_401F": "Authorization timed out. Please make sure that your phone or PC has access to the internet, and ensure that the Bambu Studio/Bambu Handy APP is running in the foreground during the binding operation.",
  "0501_4020": "Cloud access rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_4021": "Cloud access failed, which may be caused by network instability due to interference. You can try moving the printer closer to the router before you try again.",
  "0501_4022": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_4023": "Cloud access rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_4024": "Cloud access failed. Possible reasons include network instability caused by interference, inability to access the internet, or router firewall configuration restrictions. You can try moving the pri...",
  "0501_4025": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_4026": "Cloud access rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_4027": "Cloud access failed; this may be caused by network instability due to interference. You can try moving the printer closer to the router before you try again.",
  "0501_4028": "Cloud response is invalid. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_4029": "Cloud access is rejected. If you have tried multiple times and are still failing, please contact customer support.",
  "0501_4031": "Device discovery binding is in progress, and the QR code cannot be displayed on the screen. You can wait for the binding to finish or abort the device discovery binding process in the APP/Studio an...",
  "0501_4032": "QR code binding is in progress, so device discovery binding cannot be performed. You can scan the QR code on the screen for binding or exit the QR code display page on screen and try device discove...",
  "0501_4033": "Your APP region does not match with your printer; please download the APP in the corresponding region and register your account again.",
  "0501_4034": "The slicing progress has not been updated for a long time, and the printing task has exited. Please confirm the parameters and reinitiate printing.",
  "0501_4035": "The device is in the process of binding and cannot respond to new binding requests.",
  "0501_4038": "The regional settings do not match the printer; please check the printer's regional settings.",
  "0501_4039": "Device login has expired; please try to bind again.",
  "0501_4098": "The device cannot detect AMS B. Please reconnect the AMS cable or restart the printer.",
  "0501_409D": "The firmware of AMS B does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0501_40A3": "AMS(or AMS lite) B communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0502_4001": "Current filament will be used in this print job. Settings cannot be changed.",
  "0502_4002": "Please go to “Settings > Calibration” to run the Motion Accuracy Enhancement Calibration before turning on Motion Accuracy Enhancement mode.",
  "0502_4003": "The printer is currently printing and the motion accuracy enhancement feature cannot be turned on or off.",
  "0502_4004": "Some features are not supported by the current device. Please check the Studio feature settings or update the firmware to the latest version.",
  "0502_4005": "The AMS has not been calibrated yet, so printing cannot be initiated.",
  "0502_4006": "Unknown module detected; please try updating the firmware to the latest version.",
  "0502_400D": "Failed to start a new task: filament loading/unloading not completed.",
  "0502_400E": "Failed to start a new task: The nozzle cold pull was not completed.",
  "0502_4013": "This device is not compatible with the 40W laser module. Please replace it with a 10W laser module or remove it.",
  "0502_4098": "The device cannot detect AMS C. Please reconnect the AMS cable or restart the printer.",
  "0502_409D": "The firmware of AMS C does not match the printer; the device cannot continue working. Please upgrade it on the 'Firmware' page.",
  "0502_40A3": "AMS(or AMS lite) C communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0502_C00F": "The device is busy and cannot perform nozzle identification.",
  "0502_C010": "Due to printer power limitations, printing, calibration, controls and other actions cannot be performed during AMS drying. Please stop the drying process before proceeding with any other operation.",
  "0502_C011": "Currently in 2D production mode. Please continue the operation on the printer",
  "0502_C012": "The task cannot be paused.",
  "0502_C014": "The AMS Remaining Filament Estimation is enabled by default and cannot be disabled.",
  "0502_C024": "The flow dynamic calibration records have exceeded the storage limit. Please delete some historical records in the slicer software before adding new calibration data.",
  "0503_4098": "The device cannot detect AMS D. Please reconnect the AMS cable or restart the printer.",
  "0503_409D": "The firmware of AMS D does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0503_40A3": "AMS(or AMS lite) D communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0580_4096": "The device cannot detect AMS-HT A. Please reconnect the AMS-HT cable or restart the printer.",
  "0580_409C": "The firmware of AMS-HT A does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0580_40A2": "AMS-HT A communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0581_4096": "The device cannot detect AMS-HT B. Please reconnect the AMS-HT cable or restart the printer.",
  "0581_409C": "The firmware of AMS-HT B does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0581_40A2": "AMS-HT B communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0582_4096": "The device cannot detect AMS-HT C. Please reconnect the AMS-HT cable or restart the printer.",
  "0582_409C": "The firmware of AMS-HT C does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0582_40A2": "AMS-HT C communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0583_4096": "The device cannot detect AMS-HT D. Please reconnect the AMS-HT cable or restart the printer.",
  "0583_409C": "The firmware of AMS-HT D does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0583_40A2": "AMS-HT D communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0584_4096": "The device cannot detect AMS-HT F. Please reconnect the AMS-HT cable or restart the printer.",
  "0584_409C": "The firmware of AMS-HT E does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0584_40A2": "AMS-HT E communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0585_4096": "The device cannot detect AMS-HT E. Please reconnect the AMS-HT cable or restart the printer.",
  "0585_409C": "The firmware of AMS-HT F does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0585_40A2": "AMS-HT F communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0586_4096": "The device cannot detect AMS-HT G. Please reconnect the AMS-HT cable or restart the printer.",
  "0586_409C": "The firmware of AMS-HT G does not match the printer; the device cannot continue working. Please update it on the 'Firmware' page.",
  "0586_40A2": "AMS-HT G communication is abnormal. Please reconnect the module cable or restart the printer.",
  "0587_4096": "The device cannot detect AMS-HT H. Please reconnect the AMS-HT cable or restart the printer.",
  "0587_409C": "The firmware of AMS-HT H does not match the printer; the device cannot continue working. Please upgrade it on the 'Firmware' page.",
  "0587_40A2": "AMS-HT H communication is abnormal. Please reconnect the module cable or restart the printer.",
  "05FE_8053": "The left nozzle is not matched with slicing file. Please initiate the print after re-slicing, or continue printing after replacing with the correct nozzle. Caution: the hotend temperature is high.",
  "05FE_8069": "Unable to recognize the left hotend. It might be a third party hotend, or the hotend mark may be dirty. Please manually set the hotend type.",
  "05FE_806A": "Unable to recognize the left hotend. It might be a third party hotend, or the hotend mark may be dirty. Please set hotend type on printer screen before next print.",
  "05FE_8080": "The left hotend is not installed.",
  "05FE_8081": "The left hotend is not installed.",
  "05FF_8053": "The right nozzle is not matched with slicing file. Please initiate the print after re-slicing, or continue printing after replacing with the correct nozzle. Caution: the hotend temperature is high.",
  "05FF_8069": "Unable to recognize the right hotend. It might be a third party hotend, or the hotend mark may be dirty. Please manually set the hotend type.",
  "05FF_806A": "Unable to recognize the right hotend. It might be a third party hotend, or the hotend mark may be dirty. Please set hotend type on printer screen before next print.",
  "05FF_8080": "The right hotend is not installed.",
  "05FF_8081": "The right hotend is not installed.",
  "0700_4001": "The AMS has been disabled for a print, but it still has filament loaded. Please unload the AMS filament and switch to the spool holder filament for printing.",
  "0700_4025": "Failed to read the filament information.",
  "0700_8001": "Failed to cut the filament. Please check the cutter.",
  "0700_8002": "The cutter is stuck. Please make sure the cutter handle is out.",
  "0700_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "0700_8004": "AMS failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "0700_8005": "The AMS failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "0700_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "0700_8007": "Extruding filament failed. The extruder might be clogged.",
  "0700_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS A to the extruder is properly connected.",
  "0700_8010": "The AMS assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "0700_8011": "AMS filament ran out. Please insert a new filament into the same AMS slot.",
  "0700_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "0700_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "0700_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "0700_8017": "AMS A is drying. Please stop drying process before loading/unloading material.",
  "0700_8021": "AMS setup failed; please refer to the assistant.",
  "0700_8023": "AMS A cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "0700_C069": "An error occurred during AMS A drying. Please go to Assistant for more details.",
  "0700_C06A": "AMS A is reading RFID. Unable to start drying. Please try again later.",
  "0700_C06B": "AMS A is changing filament. Unable to start drying. Please try again later.",
  "0700_C06C": "AMS A is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "0700_C06D": "AMS A is assisting in filament insertion. Unable to start drying. Please try again later.",
  "0700_C06E": "AMS A motor is performing self-test. Unable to start drying. Please try again later.",
  "0701_4001": "Filament is still loaded from the AMS after it has been disabled. Please unload the filament, load from the spool holder, and restart printing.",
  "0701_4025": "Failed to read the filament information.",
  "0701_8001": "Failed to cut the filament. Please check the cutter.",
  "0701_8002": "The cutter is stuck. Please make sure the cutter handle is out.",
  "0701_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "0701_8004": "AMS failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "0701_8005": "The AMS failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "0701_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "0701_8007": "Extruding filament failed. The extruder might be clogged.",
  "0701_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS B to the extruder is properly connected.",
  "0701_8010": "The AMS assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "0701_8011": "AMS filament ran out. Please insert a new filament into the same AMS slot.",
  "0701_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "0701_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "0701_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "0701_8017": "AMS B is drying. Please stop drying process before loading/unloading material.",
  "0701_8021": "AMS setup failed; please refer to the assistant.",
  "0701_8023": "AMS B cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "0701_C069": "An error occurred during AMS B drying. Please go to Assistant for more details.",
  "0701_C06A": "AMS B is reading RFID. Unable to start drying. Please try again later.",
  "0701_C06B": "AMS B is changing filament. Unable to start drying. Please try again later.",
  "0701_C06C": "AMS B is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "0701_C06D": "AMS B is assisting in filament insertion. Unable to start drying. Please try again later.",
  "0701_C06E": "AMS B motor is performing self-test. Unable to start drying. Please try again later.",
  "0702_4001": "Filament is still loaded from the AMS after it has been disabled. Please unload the filament, load from the spool holder, and restart printing.",
  "0702_4025": "Failed to read the filament information.",
  "0702_8001": "Failed to cut the filament. Please check the cutter.",
  "0702_8002": "The cutter is stuck. Please make sure the cutter handle is out.",
  "0702_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "0702_8004": "AMS failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "0702_8005": "The AMS failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "0702_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "0702_8007": "Extruding filament failed. The extruder might be clogged.",
  "0702_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS C to the extruder is properly connected.",
  "0702_8010": "The AMS assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "0702_8011": "AMS filament ran out. Please insert a new filament into the same AMS slot.",
  "0702_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "0702_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "0702_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "0702_8017": "AMS C is drying. Please stop drying process before loading/unloading material.",
  "0702_8021": "AMS setup failed; please refer to the assistant.",
  "0702_8023": "AMS C cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "0702_C069": "An error occurred during AMS C drying. Please go to Assistant for more details.",
  "0702_C06A": "AMS C is reading RFID. Unable to start drying. Please try again later.",
  "0702_C06B": "AMS C is changing filament. Unable to start drying. Please try again later.",
  "0702_C06C": "AMS C is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "0702_C06D": "AMS C is assisting in filament insertion. Unable to start drying. Please try again later.",
  "0702_C06E": "AMS C motor is performing self-test. Unable to start drying. Please try again later.",
  "0703_4001": "Filament is still loaded from the AMS after it has been disabled. Please unload the filament, load from the spool holder, and restart printing.",
  "0703_4025": "Failed to read the filament information.",
  "0703_8001": "Failed to cut the filament. Please check the cutter.",
  "0703_8002": "The cutter is stuck. Please make sure the cutter handle is out.",
  "0703_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "0703_8004": "AMS failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "0703_8005": "The AMS failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "0703_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "0703_8007": "Extruding filament failed. The extruder might be clogged.",
  "0703_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS D to the extruder is properly connected.",
  "0703_8010": "The AMS assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "0703_8011": "AMS filament ran out. Please insert a new filament into the same AMS slot.",
  "0703_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "0703_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "0703_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "0703_8017": "AMS D is drying. Please stop drying process before loading/unloading material.",
  "0703_8021": "AMS setup failed; please refer to the assistant.",
  "0703_8023": "AMS D cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "0703_C069": "An error occurred during AMS D drying. Please go to Assistant for more details.",
  "0703_C06A": "AMS D is reading RFID. Unable to start drying. Please try again later.",
  "0703_C06B": "AMS D is changing filament. Unable to start drying. Please try again later.",
  "0703_C06C": "AMS D is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "0703_C06D": "AMS D is assisting in filament insertion. Unable to start drying. Please try again later.",
  "0703_C06E": "AMS D motor is performing self-test. Unable to start drying. Please try again later.",
  "0704_4025": "Failed to read the filament information.",
  "0704_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "0704_8004": "AMS failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "0704_8005": "The AMS failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "0704_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "0704_8007": "Extruding filament failed. The extruder might be clogged.",
  "0704_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS E to the extruder is properly connected.",
  "0704_8010": "The AMS assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "0704_8011": "AMS filament ran out. Please insert a new filament into the same AMS slot.",
  "0704_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "0704_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "0704_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "0704_8021": "AMS setup failed; please refer to the assistant.",
  "0704_8023": "AMS E cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "0705_4025": "Failed to read the filament information.",
  "0705_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "0705_8004": "AMS failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "0705_8005": "The AMS failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "0705_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "0705_8007": "Extruding filament failed. The extruder might be clogged.",
  "0705_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS F to the extruder is properly connected.",
  "0705_8010": "The AMS assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "0705_8011": "AMS filament ran out. Please insert a new filament into the same AMS slot.",
  "0705_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "0705_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "0705_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "0705_8021": "AMS setup failed; please refer to the assistant.",
  "0705_8023": "AMS F cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "0706_4025": "Failed to read the filament information.",
  "0706_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "0706_8004": "AMS failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "0706_8005": "The AMS failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "0706_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "0706_8007": "Extruding filament failed. The extruder might be clogged.",
  "0706_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS G to the extruder is properly connected.",
  "0706_8010": "The AMS assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "0706_8011": "AMS filament ran out. Please insert a new filament into the same AMS slot.",
  "0706_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "0706_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "0706_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "0706_8021": "AMS setup failed; please refer to the assistant.",
  "0706_8023": "AMS G cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "0707_4025": "Failed to read the filament information.",
  "0707_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "0707_8004": "AMS failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "0707_8005": "The AMS failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "0707_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "0707_8007": "Extruding filament failed. The extruder might be clogged.",
  "0707_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS H to the extruder is properly connected.",
  "0707_8010": "The AMS assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "0707_8011": "AMS filament ran out. Please insert a new filament into the same AMS slot.",
  "0707_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "0707_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "0707_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "0707_8021": "AMS setup failed; please refer to the assistant.",
  "0707_8023": "AMS H cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "07FE_8001": "Failed to cut the filament of the left extruder. Please check the cutter.",
  "07FE_8002": "The cutter of the left extruder is stuck. Please pull out the cutter handle.",
  "07FE_8003": "Please pull out the filament on the spool holder  of the left extruder. If this message persists, please check to see if there is filament broken in the extruder. (Connect a PTFE tube if you are ab...",
  "07FE_8004": "Failed to pull back the filament from the left extruder. Please check whether the filament is stuck inside the extruder.",
  "07FE_8005": "Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
  "07FE_8006": "Please feed filament into the PTFE tube of the left extruder until it can not be pushed any farther.",
  "07FE_8007": "Please observe the nozzle of the left extruder. If the filament has been extruded, select 'Continue'; if it has not, please push the filament forward slightly, and then select 'Retry'.",
  "07FE_8010": "Check if the left external filament spool or filament is stuck.",
  "07FE_8011": "The external filament connected to the left extruder has run out; please load a new filament.",
  "07FE_8012": "Failed to get mapping table; please select 'Resume' to retry.",
  "07FE_8013": "Timeout purging old filament of the left extruder: Please check if the filament is stuck or the extruder is clogged.",
  "07FE_8020": "Extruder change failed; please refer to the assistant.",
  "07FE_8021": "AMS setup failed; please refer to the assistant.",
  "07FE_8024": "Extruder position calibration failed; please refer to the assistant.",
  "07FE_8025": "Cold pull timed out. Please promptly operate or check whether the filament is broken inside the extruder, and click the Assistant for details.",
  "07FE_8030": "The filament specified in the slicer has been used up. Printing is paused. Please go to the machine to replace the material and resume printing.",
  "07FE_C003": "Please pull out the filament on the spool holder of the left extruder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube i...",
  "07FE_C006": "Please feed filament into the PTFE tube of the left extruder until it can not be pushed any farther.",
  "07FE_C008": "Please pull out the filament on the spool holder of the left extruder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube i...",
  "07FE_C009": "Please feed filament into the PTFE tube of the left extruder until it can not be pushed any farther.",
  "07FE_C00A": "Please observe the nozzle of the left extruder. If the filament has been extruded, select 'Continue'; if not, please push the filament forward slightly and then select 'Retry'.",
  "07FE_C010": "Insert the filament (over 30cm long) until it stops. You might see slight smoke during flushing. After insertion, close the front door and top cover.",
  "07FE_C011": "Please manually and slowly pull out the filament from the extruder. Then click “Continue”.",
  "07FE_C012": "Press the black PTFE tube coupler and unplug the PTFE tube. After completing the operation, click 'Continue.'",
  "07FF_4001": "Filament is still loaded from the AMS after it has been disabled. Please unload the filament, load from the spool holder, and restart printing.",
  "07FF_8001": "Failed to cut the filament of the right extruder. Please check the cutter.",
  "07FF_8002": "The cutter is stuck. Please make sure the cutter handle is out.",
  "07FF_8003": "Please pull out the filament on the spool holder  of the right extruder. If this message persists, please check to see if there is filament broken in the extruder. (Connect a PTFE tube if you are a...",
  "07FF_8004": "Failed to pull back the filament from the right extruder. Please check whether the filament is stuck inside the extruder.",
  "07FF_8005": "Failed to feed the filament outside the AMS. Please clip the end of the filament flat and check to see if the spool is stuck.",
  "07FF_8006": "Please feed filament into the PTFE tube of the right extruder until it can not be pushed any farther.",
  "07FF_8007": "Please observe the nozzle of the right extruder. If the filament has been extruded, select 'Continue'; if it has not, please push the filament forward slightly, and then select 'Retry'.",
  "07FF_8010": "Check if the external filament spool or filament is stuck.",
  "07FF_8011": "External filament has run out; please load a new filament.",
  "07FF_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "07FF_8013": "Timeout purging old filament of the right extruder: Please check if the filament is stuck or the extruder is clogged.",
  "07FF_8020": "Extruder change failed; please refer to the assistant.",
  "07FF_8021": "AMS setup failed; please refer to the assistant.",
  "07FF_8024": "Extruder position calibration failed; please refer to the assistant.",
  "07FF_8025": "Cold pull timed out. Please promptly operate or check whether the filament is broken inside the extruder, and click the Assistant for details.",
  "07FF_8030": "The filament specified in the slicer has been used up. Printing is paused. Please go to the machine to replace the material and resume printing.",
  "07FF_C003": "Please pull out the filament on the spool holder of the right extruder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube ...",
  "07FF_C006": "Please feed filament into the PTFE tube of the right extruder until it can not be pushed any farther.",
  "07FF_C008": "Please pull out the filament on the spool holder of the right extruder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube ...",
  "07FF_C009": "Please feed filament into the PTFE tube of the right extruder until it can not be pushed any farther.",
  "07FF_C00A": "Please observe the nozzle of the right extruder. If the filament has been extruded, select 'Continue'; if not, please push the filament forward slightly and then select 'Retry'.",
  "07FF_C010": "Insert the filament (over 30cm long) until it stops. You might see slight smoke during flushing. After insertion, close the front door and top cover.",
  "07FF_C011": "Hold the driven wheel bracket, slowly pull the filament from the extruder, then press 'Continue'.",
  "07FF_C012": "Press the black PTFE tube coupler and unplug the PTFE tube. After completing the operation, click 'Continue.'",
  "0C00_4020": "The setup of BirdsEye Camera failed. Please clear all objects and remove the mat. Make sure the marker is not obstructed. Meanwhile, clean both the BirdsEye Camera and Toolhead Camera, and remove a...",
  "0C00_4021": "The setup of BirdsEye Camera failed; please reboot the printer.",
  "0C00_4022": "The setup of BirdsEye Camera failed.  Please check if the laser module is working properly.",
  "0C00_4024": "The Birdseye Camera is installed offset. Please refer to the assistant to reinstall it.",
  "0C00_4025": "The Birdseye Camera is dirty. Please clean it and restart the process.",
  "0C00_4026": "The Live View Camera initialization failed; please reboot the printer.",
  "0C00_4027": "The Live View Camera calibration failed. Please refer to the assistant for details and recalibrate the camera after processing.",
  "0C00_4029": "Material not detected. Please confirm placement and continue.",
  "0C00_402A": "The visual marker was not detected. Please re-paste the paper in the correct position.",
  "0C00_402C": "Device data link error. Please reboot the printer",
  "0C00_402D": "The toolhead camera is not working properly; please reboot the device.",
  "0C00_403D": "The vision encoder plate was not detected. Please confirm it is correctly positioned on the heatbed.",
  "0C00_403E": "The high-precision nozzle offset calibration has failed, possibly due to a damaged pattern or the similarity of the colors of the two selected filaments. Please clear the printed pattern and replac...",
  "0C00_4041": "Toolhead camera calibration failed. Please ensure the Calibration Marker on the heatbed or Height Calibration Marker on the homing area is clean and undamaged, then re-run the calibration process.",
  "0C00_8001": "First layer defects were detected. If the defects are acceptable, select 'Resume' to resume the print job.",
  "0C00_8005": "Purged filament has piled up in the waste chute, which may cause a tool head collision.",
  "0C00_8009": "Build plate localization marker was not found.",
  "0C00_800B": "The heatbed marker was not detected. Please clear all objects and remove the mat. Make sure the marker is not obstructed.",
  "0C00_8015": "Objects detected on the platform; please clean them up in a timely manner.",
  "0C00_8016": "The foreign object detection function is not working. You can continue the task or check assistant for solutions.",
  "0C00_8017": "Foreign objects detected on the platform; please clean them up on time.",
  "0C00_8018": "The foreign object detection function is not working. You can continue the task or view the assistant for troubleshooting.",
  "0C00_8033": "Quick-release Lever is not locked. Please push it down to secure.",
  "0C00_8034": "Liveview Camera initialization failed. This print can still continue, but some AI functions will be disabled. If you encounter this issue again after restarting, please contact customer support.",
  "0C00_803F": "AI detected nozzle clumping. Please check the nozzle condition. Refer to assistant for solutions.",
  "0C00_8040": "AI detected air-printing defect. Please check the hotend extrusion status. Refer to assistant for solutions.",
  "0C00_8042": "The AI print monitor has detected a spaghetti defect. Please check the print and take the necessary action.",
  "0C00_8043": "AI detected nozzle clumping. Please check the nozzle condition. Refer to assistant for solutions.",
  "0C00_C003": "Possible defects were detected in the first layer.",
  "0C00_C004": "Possible spaghetti failure was detected.",
  "0C00_C006": "Purged filament may have piled up in the waste chute.",
  "1000_C001": "High bed temperature may lead to filament clogging in the nozzle. You may open the chamber door.",
  "1000_C002": "Printing CF material with stainless steel may cause nozzle damage.",
  "1000_C003": "Enabling Timelapse in traditional mode may cause defects; please activate this feature as needed.",
  "1001_4001": "Timelapse is not supported as Spiral Vase mode is enabled in slicing presets.",
  "1001_4002": "Timelapse is not supported as the Print sequence is set to 'By object'.",
  "1001_8003": "The time-lapse mode is set to Traditional in the slicing file. This may cause surface defects. Would you like to enable it?",
  "1001_8004": "Prime Tower is not enabled and time-lapse mode is set to Smooth in slicing file. This may cause surface defects. Would you like to enable it?",
  "1200_4001": "Filament is still loaded from the AMS when it has been disabled. Please unload AMS filament, load from spool holder, and restart print job.",
  "1200_8001": "Cutting the filament failed. Please check to see if the cutter is stuck. Refer to the Assistant for solutions.",
  "1200_8002": "The cutter is stuck. Please pull out the cutter handle.",
  "1200_8003": "Failed to pull out the filament from the extruder. Please check whether the extruder is clogged or whether the filament is broken inside the extruder.",
  "1200_8004": "Failed to pull back the filament from the toolhead. Please check whether the filament is stuck.",
  "1200_8005": "The filament is not inserted. Please insert the filament.",
  "1200_8006": "Unable to feed filament into the extruder. This could be due to tangled filament or a stuck spool. If not, please check if the AMS PTFE tube is connected.",
  "1200_8007": "Failed to extrude the filament. This might be caused by clogged extruder or stuck filament. Refer to the Assistant for solutions.",
  "1200_8010": "Filament or spool may be stuck.",
  "1200_8011": "AMS filament has run out. Please insert a new filament into the same AMS slot.",
  "1200_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1200_8013": "Timeout while purging old filament. Please check if the filament is stuck or the extruder clogged.",
  "1200_8014": "The filament location in the toolhead was not found. Refer to the Assistant for solutions.",
  "1200_8015": "Failed to pull out the filament from the toolhead. Please check if the filament is stuck, or if it is broken inside the extruder or PTFE tube.",
  "1200_8016": "The extruder is not extruding normally. Refer to the Assistant for troubleshooting. There may be defects in this layer, but you may resume if the defects are acceptable.",
  "1201_4001": "Filament is still loaded from the AMS when it has been disabled. Please unload AMS filament, load from spool holder, and restart print job.",
  "1201_8001": "Failed to cut the filament. Please check the cutter.",
  "1201_8002": "The cutter is stuck. Please pull out the cutter handle.",
  "1201_8003": "Failed to pull out the filament from the extruder. Please check whether the extruder is clogged or whether the filament is broken inside the extruder.",
  "1201_8004": "Failed to pull back the filament from the toolhead. Please check whether the filament is stuck.",
  "1201_8005": "Failed to feed the filament. Please load the filament and then select 'Retry'.",
  "1201_8006": "Failed to feed the filament into the toolhead. Please check whether the filament is stuck.",
  "1201_8007": "Failed to extrude the filament. The extruder may be clogged or the filament may be stuck; please refer to HMS.",
  "1201_8010": "Please check if the spool or filament is stuck.",
  "1201_8011": "AMS filament has run out. Please insert a new filament into the same AMS slot.",
  "1201_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1201_8013": "Timeout while purging old filament. Please check if the filament is stuck or the extruder clogged.",
  "1201_8014": "Failed to check the filament location in the tool head; please refer to the HMS.",
  "1201_8015": "Failed to pull back the filament from the toolhead. Please check if the filament is stuck or the filament is broken inside the extruder.",
  "1201_8016": "The extruder is not extruding normally; please refer to the HMS. After trouble shooting, if the defects are acceptable, please resume printing.",
  "1202_4001": "Filament is still loaded from the AMS when it has been disabled. Please unload AMS filament, load from spool holder, and restart print job.",
  "1202_8001": "Failed to cut the filament. Please check the cutter.",
  "1202_8002": "The cutter is stuck. Please pull out the cutter handle.",
  "1202_8003": "Failed to pull out the filament from the extruder. Please check whether the extruder is clogged or whether the filament is broken inside the extruder.",
  "1202_8004": "Failed to pull back the filament from the toolhead. Please check whether the filament is stuck.",
  "1202_8005": "The filament is not inserted. Please insert the filament.",
  "1202_8006": "Failed to feed the filament into the toolhead. Please check whether the filament is stuck.",
  "1202_8007": "Failed to extrude the filament. The extruder may be clogged or the filament may be stuck; please refer to HMS.",
  "1202_8010": "Please check if the spool or filament is stuck.",
  "1202_8011": "AMS filament has run out. Please insert a new filament into the same AMS slot.",
  "1202_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1202_8013": "Timeout while purging old filament. Please check if the filament is stuck or the extruder clogged.",
  "1202_8014": "Failed to check the filament location in the tool head; please refer to the HMS.",
  "1202_8015": "Failed to pull back the filament from the toolhead. Please check if the filament is stuck or is broken inside the extruder.",
  "1202_8016": "The extruder is not extruding normally; please refer to the HMS. After trouble shooting, if the defects are acceptable, please resume printing.",
  "1203_4001": "Filament is still loaded from the AMS when it has been disabled. Please unload AMS filament, load from spool holder, and restart print job.",
  "1203_8001": "Failed to cut the filament. Please check the cutter.",
  "1203_8002": "The cutter is stuck. Please pull out the cutter handle.",
  "1203_8003": "Failed to pull out the filament from the extruder. Please check whether the extruder is clogged or whether the filament is broken inside the extruder.",
  "1203_8004": "Failed to pull back the filament from the toolhead. Please check whether the filament is stuck.",
  "1203_8005": "The filament is not inserted. Please insert the filament.",
  "1203_8006": "Failed to feed the filament into the toolhead. Please check whether the filament is stuck.",
  "1203_8007": "Failed to extrude the filament. The extruder may be clogged or the filament may be stuck; please refer to HMS.",
  "1203_8010": "Please check if the spool or filament is stuck.",
  "1203_8011": "AMS filament has run out. Please insert a new filament into the same AMS slot.",
  "1203_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1203_8013": "Timeout while purging old filament. Please check if the filament is stuck or the extruder clogged.",
  "1203_8014": "Failed to check the filament location in the tool head; please refer to the HMS.",
  "1203_8015": "Failed to pull back the filament from the toolhead. Please check if the filament is stuck or is broken inside the extruder.",
  "1203_8016": "The extruder is not extruding normally; please refer to the HMS. After trouble shooting, if the defects are acceptable, please resume printing.",
  "12FF_4001": "Filament is still loaded from the AMS when it has been disabled. Please unload AMS filament, load from spool holder, and restart print job.",
  "12FF_8001": "Failed to cut the filament. Please check the cutter.",
  "12FF_8002": "The cutter is stuck. Please pull out the cutter handle.",
  "12FF_8003": "Please pull out the filament on the spool holder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube if you are about to us...",
  "12FF_8004": "Failed to pull back the filament from the toolhead. Please check whether the filament is stuck.",
  "12FF_8005": "The filament is not inserted. Please insert the filament.",
  "12FF_8006": "Please feed filament into the PTFE tube until it can not be pushed any farther.",
  "12FF_8007": "Check nozzle. Select 'Done' if filament was extruded, otherwise push filament forward slightly and select 'Retry.'",
  "12FF_8010": "Please check if the filament or the spool is stuck.",
  "12FF_8011": "AMS filament has run out. Please insert a new filament into the same AMS slot.",
  "12FF_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "12FF_8013": "Timeout while purging old filament. Please check if the filament is stuck or the extruder clogged.",
  "12FF_C003": "Please pull out the filament on the spool holder. If this message persists, please check to see if there is filament broken in the extruder or PTFE Tube. (Connect a PTFE tube if you are about to us...",
  "12FF_C006": "Please feed filament into the PTFE tube until it can not be pushed any farther.",
  "1800_4025": "Failed to read the filament information.",
  "1800_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "1800_8004": "AMS-HT failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "1800_8005": "The AMS-HT failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "1800_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "1800_8007": "Extruding filament failed. The extruder might be clogged.",
  "1800_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS-HT A to the extruder is properly connected.",
  "1800_8010": "The AMS-HT assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "1800_8011": "AMS-HT filament ran out. Please insert a new filament into the same AMS-HT slot.",
  "1800_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1800_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "1800_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "1800_8017": "AMS-HT A is drying. Please stop drying process before loading/unloading material.",
  "1800_8021": "AMS setup failed; please refer to the assistant.",
  "1800_8023": "AMS-HT A cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "1800_C069": "An error occurred during AMS-HT A drying. Please go to Assistant for more details.",
  "1800_C06A": "AMS-HT A is reading RFID. Unable to start drying. Please try again later.",
  "1800_C06B": "AMS-HT A is changing filament. Unable to start drying. Please try again later.",
  "1800_C06C": "AMS-HT A is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "1800_C06D": "AMS-HT A is assisting in filament insertion. Unable to start drying. Please try again later.",
  "1800_C06E": "AMS-HT A motor is performing self-test. Unable to start drying. Please try again later.",
  "1801_4025": "Failed to read the filament information.",
  "1801_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "1801_8004": "AMS-HT failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "1801_8005": "The AMS-HT failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "1801_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "1801_8007": "Extruding filament failed. The extruder might be clogged.",
  "1801_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS-HT B to the extruder is properly connected.",
  "1801_8010": "The AMS-HT assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "1801_8011": "AMS-HT filament ran out. Please insert a new filament into the same AMS-HT slot.",
  "1801_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1801_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "1801_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "1801_8017": "AMS-HT B is drying. Please stop drying process before loading/unloading material.",
  "1801_8021": "AMS setup failed; please refer to the assistant.",
  "1801_8023": "AMS-HT B cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "1801_C069": "An error occurred during AMS-HT B drying. Please go to Assistant for more details.",
  "1801_C06A": "AMS-HT B is reading RFID. Unable to start drying. Please try again later.",
  "1801_C06B": "AMS-HT B is changing filament. Unable to start drying. Please try again later.",
  "1801_C06C": "AMS-HT B is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "1801_C06D": "AMS-HT B is assisting in filament insertion. Unable to start drying. Please try again later.",
  "1801_C06E": "AMS-HT B motor is performing self-test. Unable to start drying. Please try again later.",
  "1802_4025": "Failed to read the filament information.",
  "1802_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "1802_8004": "AMS-HT failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "1802_8005": "The AMS-HT failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "1802_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "1802_8007": "Extruding filament failed. The extruder might be clogged.",
  "1802_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS-HT C to the extruder is properly connected.",
  "1802_8010": "The AMS-HT assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "1802_8011": "AMS-HT filament ran out. Please insert a new filament into the same AMS-HT slot.",
  "1802_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1802_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "1802_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "1802_8017": "AMS-HT C is drying. Please stop drying process before loading/unloading material.",
  "1802_8021": "AMS setup failed; please refer to the assistant.",
  "1802_8023": "AMS-HT C cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "1802_C069": "An error occurred during AMS-HT C drying. Please go to Assistant for more details.",
  "1802_C06A": "AMS-HT C is reading RFID. Unable to start drying. Please try again later.",
  "1802_C06B": "AMS-HT C is changing filament. Unable to start drying. Please try again later.",
  "1802_C06C": "AMS-HT C is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "1802_C06D": "AMS-HT C is assisting in filament insertion. Unable to start drying. Please try again later.",
  "1802_C06E": "AMS-HT C motor is performing self-test. Unable to start drying. Please try again later.",
  "1803_4025": "Failed to read the filament information.",
  "1803_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "1803_8004": "AMS-HT failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "1803_8005": "The AMS-HT failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "1803_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "1803_8007": "Extruding filament failed. The extruder might be clogged.",
  "1803_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS-HT D to the extruder is properly connected.",
  "1803_8010": "The AMS-HT assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "1803_8011": "AMS-HT filament ran out. Please insert a new filament into the same AMS-HT slot.",
  "1803_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1803_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "1803_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "1803_8017": "AMS-HT D is drying. Please stop drying process before loading/unloading material.",
  "1803_8021": "AMS setup failed; please refer to the assistant.",
  "1803_8023": "AMS-HT D cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "1803_C069": "An error occurred during AMS-HT D drying. Please go to Assistant for more details.",
  "1803_C06A": "AMS-HT D is reading RFID. Unable to start drying. Please try again later.",
  "1803_C06B": "AMS-HT D is changing filament. Unable to start drying. Please try again later.",
  "1803_C06C": "AMS-HT D is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "1803_C06D": "AMS-HT D is assisting in filament insertion. Unable to start drying. Please try again later.",
  "1803_C06E": "AMS-HT D motor is performing self-test. Unable to start drying. Please try again later.",
  "1804_4025": "Failed to read the filament information.",
  "1804_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "1804_8004": "AMS-HT failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "1804_8005": "The AMS-HT failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "1804_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "1804_8007": "Extruding filament failed. The extruder might be clogged.",
  "1804_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS-HT E to the extruder is properly connected.",
  "1804_8010": "The AMS-HT assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "1804_8011": "AMS-HT filament ran out. Please insert a new filament into the same AMS-HT slot.",
  "1804_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1804_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "1804_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "1804_8021": "AMS setup failed; please refer to the assistant.",
  "1804_8023": "AMS-HT E cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "1804_C069": "An error occurred during AMS-HT E drying. Please go to Assistant for more details.",
  "1804_C06A": "AMS-HT E is reading RFID. Unable to start drying. Please try again later.",
  "1804_C06B": "AMS-HT E is changing filament. Unable to start drying. Please try again later.",
  "1804_C06C": "AMS-HT E is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "1804_C06D": "AMS-HT E is assisting in filament insertion. Unable to start drying. Please try again later.",
  "1804_C06E": "AMS-HT E motor is performing self-test. Unable to start drying. Please try again later.",
  "1805_4025": "Failed to read the filament information.",
  "1805_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "1805_8004": "AMS-HT failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "1805_8005": "The AMS-HT failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "1805_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "1805_8007": "Extruding filament failed. The extruder might be clogged.",
  "1805_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS-HT F to the extruder is properly connected.",
  "1805_8010": "The AMS-HT assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "1805_8011": "AMS-HT filament ran out. Please insert a new filament into the same AMS-HT slot.",
  "1805_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1805_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "1805_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "1805_8021": "AMS setup failed; please refer to the assistant.",
  "1805_8023": "AMS-HT F cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "1805_C069": "An error occurred during AMS-HT F drying. Please go to Assistant for more details.",
  "1805_C06A": "AMS-HT F is reading RFID. Unable to start drying. Please try again later.",
  "1805_C06B": "AMS-HT F is changing filament. Unable to start drying. Please try again later.",
  "1805_C06C": "AMS-HT F is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "1805_C06D": "AMS-HT F is assisting in filament insertion. Unable to start drying. Please try again later.",
  "1805_C06E": "AMS-HT F motor is performing self-test. Unable to start drying. Please try again later.",
  "1806_4025": "Failed to read the filament information.",
  "1806_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "1806_8004": "AMS-HT failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "1806_8005": "The AMS-HT failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "1806_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "1806_8007": "Extruding filament failed. The extruder might be clogged.",
  "1806_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS-HT G to the extruder is properly connected.",
  "1806_8010": "The AMS-HT assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "1806_8011": "AMS-HT filament ran out. Please insert a new filament into the same AMS-HT slot.",
  "1806_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1806_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "1806_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "1806_8021": "AMS setup failed; please refer to the assistant.",
  "1806_8023": "AMS-HT G cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "1806_C069": "An error occurred during AMS-HT G drying. Please go to Assistant for more details.",
  "1806_C06A": "AMS-HT G is reading RFID. Unable to start drying. Please try again later.",
  "1806_C06B": "AMS-HT G is changing filament. Unable to start drying. Please try again later.",
  "1806_C06C": "AMS-HT G is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "1806_C06D": "AMS-HT G is assisting in filament insertion. Unable to start drying. Please try again later.",
  "1806_C06E": "AMS-HT G motor is performing self-test. Unable to start drying. Please try again later.",
  "1807_4025": "Failed to read the filament information.",
  "1807_8003": "Failed to pull out the filament from the extruder. This might be caused by clogged extruder or filament broken inside the extruder.",
  "1807_8004": "AMS-HT failed to pull back filament. This could be due to a stuck spool or the end of the filament being stuck in the path.",
  "1807_8005": "The AMS-HT failed to send out filament. You can clip the end of your filament flat, and reinsert. If this message persists, please check the PTFE tubes in AMS for any signs of wear and tear.",
  "1807_8006": "Unable to feed filament into the extruder. The AMS may be mismatched with the extruder. You can rerun the AMS Setup. This could also be due to an entangled filament or a stuck spool. If not, please...",
  "1807_8007": "Extruding filament failed. The extruder might be clogged.",
  "1807_800A": "PTFE tube disconnection detected. Please check if the PTFE tube from AMS-HT H to the extruder is properly connected.",
  "1807_8010": "The AMS-HT assist motor is overloaded. This could be due to entangled filament or a stuck spool.",
  "1807_8011": "AMS-HT filament ran out. Please insert a new filament into the same AMS-HT slot.",
  "1807_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "1807_8013": "Timeout purging old filament: Please check if the filament is stuck or the extruder is clogged.",
  "1807_8016": "The extruder is not extruding normally; please refer to the Assistant. After trouble shooting. If the defects are acceptable, please resume.",
  "1807_8021": "AMS setup failed; please refer to the assistant.",
  "1807_8023": "AMS-HT H cooling failed. The ambient temperature may be too high. Please operate the device in a suitable environment.",
  "1807_C069": "An error occurred during AMS-HT H drying. Please go to Assistant for more details.",
  "1807_C06A": "AMS-HT H is reading RFID. Unable to start drying. Please try again later.",
  "1807_C06B": "AMS-HT H is changing filament. Unable to start drying. Please try again later.",
  "1807_C06C": "AMS-HT H is in Feed Assist Mode. Unable to start drying. Please try again later.",
  "1807_C06D": "AMS-HT H is assisting in filament insertion. Unable to start drying. Please try again later.",
  "1807_C06E": "AMS-HT H motor is performing self-test. Unable to start drying. Please try again later.",
  "18FE_8001": "Failed to cut the filament of the left extruder. Please check the cutter.",
  "18FE_8002": "The cutter of the left extruder is stuck. Please pull out the cutter handle.",
  "18FE_8003": "Please pull out the filament on the spool holder  of the left extruder. If this message persists, please check to see if there is filament broken in the extruder. (Connect a PTFE tube if you are ab...",
  "18FE_8004": "Failed to pull back the filament from the left extruder. Please check whether the filament is stuck inside the extruder.",
  "18FE_8005": "Failed to feed the filament outside the AMS-HT. Please clip the end of the filament flat and check to see if the spool is stuck.",
  "18FE_8006": "Please feed filament into the PTFE tube of the left extruder until it can not be pushed any farther.",
  "18FE_8007": "Please observe the nozzle of the left extruder. If the filament has been extruded, select 'Continue'; if it has not, please push the filament forward slightly, and then select 'Retry'.",
  "18FE_8011": "The external filament connected to the left extruder has run out; please load a new filament.",
  "18FE_8012": "Failed to get mapping table; please select 'Resume' to retry.",
  "18FE_8013": "Timeout purging old filament of the left extruder: Please check if the filament is stuck or the extruder is clogged.",
  "18FE_8020": "Extruder change failed; please refer to the assistant.",
  "18FE_8021": "AMS setup failed; please refer to the assistant.",
  "18FE_8024": "Extruder position calibration failed; please refer to the assistant.",
  "18FE_C003": "Please pull out the filament on the spool holder of the left extruder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube i...",
  "18FE_C006": "Please feed filament into the PTFE tube of the left extruder until it can not be pushed any farther.",
  "18FE_C008": "Please pull out the filament on the spool holder of the left extruder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube i...",
  "18FE_C009": "Please feed filament into the PTFE tube of the left extruder until it can not be pushed any farther.",
  "18FE_C00A": "Please observe the nozzle of the left extruder. If the filament has been extruded, select 'Continue'; if not, please push the filament forward slightly and then select 'Retry'.",
  "18FF_8001": "Failed to cut the filament of the right extruder. Please check the cutter.",
  "18FF_8002": "The cutter of the right extruder is stuck. Please pull out the cutter handle.",
  "18FF_8003": "Please pull out the filament on the spool holder  of the right extruder. If this message persists, please check to see if there is filament broken in the extruder. (Connect a PTFE tube if you are a...",
  "18FF_8004": "Failed to pull back the filament from the right extruder. Please check whether the filament is stuck inside the extruder.",
  "18FF_8005": "Failed to feed the filament outside the AMS-HT. Please clip the end of the filament flat and check to see if the spool is stuck.",
  "18FF_8006": "Please feed filament into the PTFE tube of the right extruder until it can not be pushed any farther.",
  "18FF_8007": "Please observe the nozzle of the right extruder. If the filament has been extruded, select 'Continue'; if it has not, please push the filament forward slightly, and then select 'Retry'.",
  "18FF_8011": "The external filament connected to the right extruder has run out; please load a new filament.",
  "18FF_8012": "Failed to get AMS mapping table; please select 'Resume' to retry.",
  "18FF_8013": "Timeout purging old filament of the right extruder: Please check if the filament is stuck or the extruder is clogged.",
  "18FF_8020": "Extruder change failed; please refer to the assistant.",
  "18FF_8021": "AMS setup failed; please refer to the assistant.",
  "18FF_8024": "Extruder position calibration failed; please refer to the assistant.",
  "18FF_C003": "Please pull out the filament on the spool holder of the right extruder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube ...",
  "18FF_C006": "Please feed filament into the PTFE tube of the right extruder until it can not be pushed any farther.",
  "18FF_C008": "Please pull out the filament on the spool holder of the right extruder. If this message persists, please check to see if there is filament broken in the extruder or PTFE tube. (Connect a PTFE tube ...",
  "18FF_C009": "Please feed filament into the PTFE tube of the right extruder until it can not be pushed any farther.",
  "18FF_C00A": "Please observe the nozzle of the right extruder. If the filament has been extruded, select 'Continue'; if not, please push the filament forward slightly and then select 'Retry'."
};
function getSeverityInfo(severity) {
  switch (severity) {
    case 1:
      return { label: "Fatal", color: "text-red-500", bgColor: "bg-red-500/20", Icon: TriangleAlert };
    case 2:
      return { label: "Serious", color: "text-red-400", bgColor: "bg-red-500/15", Icon: TriangleAlert };
    case 3:
      return { label: "Warning", color: "text-orange-400", bgColor: "bg-orange-500/20", Icon: CircleAlert };
    case 4:
    default:
      return { label: "Info", color: "text-blue-400", bgColor: "bg-blue-500/20", Icon: Info };
  }
}
function getShortCode(attr, code) {
  const module = attr >> 16 & 65535 || (attr >> 8 & 255) << 8 | attr & 255;
  const codeNum = code & 65535;
  return `${module.toString(16).padStart(4, "0").toUpperCase()}_${codeNum.toString(16).padStart(4, "0").toUpperCase()}`;
}
function filterKnownHMSErrors(errors) {
  return errors.filter((error) => {
    const codeNum = parseInt(error.code.replace("0x", ""), 16) || 0;
    const shortCode = getShortCode(error.attr, codeNum);
    return ERROR_DESCRIPTIONS[shortCode] !== void 0;
  });
}
function getHMSHomeUrl() {
  return `https://wiki.bambulab.com/en/hms/home`;
}
function HMSErrorModal({ printerName, errors, onClose, printerId, hasPermission }) {
  const { t } = useTranslation();
  const { showToast } = useToast();
  const clearMutation = useMutation({
    mutationFn: () => api.clearHMSErrors(printerId),
    onSuccess: () => {
      showToast(t("hmsErrors.clearSuccess"), "success");
      onClose();
    },
    onError: () => {
      showToast(t("hmsErrors.clearFailed"), "error");
    }
  });
  const knownErrors = errors.filter((error) => {
    const codeNum = parseInt(error.code.replace("0x", ""), 16) || 0;
    const shortCode = getShortCode(error.attr, codeNum);
    return ERROR_DESCRIPTIONS[shortCode] !== void 0;
  });
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-orange-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("hmsErrors.title", { name: printerName }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "p-1 hover:bg-bambu-dark-tertiary rounded-lg transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: knownErrors.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-bambu-gray", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-12 h-12 mx-auto mb-3 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("hmsErrors.noErrors") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: knownErrors.map((error, index) => {
      const { label, color, bgColor, Icon: Icon2 } = getSeverityInfo(error.severity);
      const codeNum = parseInt(error.code.replace("0x", ""), 16) || 0;
      const shortCode = getShortCode(error.attr, codeNum);
      const description = ERROR_DESCRIPTIONS[shortCode];
      const hmsHomeUrl = getHMSHomeUrl();
      const displayCode = shortCode.replace("_", "-");
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `p-4 rounded-lg ${bgColor} border border-white/10`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: `w-5 h-5 ${color} flex-shrink-0 mt-0.5` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono text-sm ${color}`, children: [
                  "[",
                  displayCode,
                  "]"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full ${bgColor} ${color}`, children: label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-2", children: description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: hmsHomeUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-1 text-xs text-bambu-green hover:underline",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                    t("hmsErrors.viewOnWiki")
                  ]
                }
              )
            ] })
          ] })
        },
        `${error.code}-${index}`
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-bambu-dark-tertiary flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("hmsErrors.clearInstructions") }),
      knownErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => clearMutation.mutate(),
          disabled: !hasPermission("printers:control") || clearMutation.isPending,
          className: "flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0",
          children: [
            clearMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
            t("hmsErrors.clearErrors")
          ]
        }
      )
    ] })
  ] }) });
}
function getPrinterImage(model) {
  if (!model) return publicAssetUrl("/img/printers/default.png");
  const m = model.toLowerCase().replace(/\s+/g, "");
  if (m.includes("x1e")) return publicAssetUrl("/img/printers/x1e.png");
  if (m.includes("x1c") || m.includes("x1carbon")) return publicAssetUrl("/img/printers/x1c.png");
  if (m.includes("x1")) return publicAssetUrl("/img/printers/x1c.png");
  if (m.includes("h2dpro") || m.includes("h2d-pro")) return publicAssetUrl("/img/printers/h2dpro.png");
  if (m.includes("h2d")) return publicAssetUrl("/img/printers/h2d.png");
  if (m.includes("h2c")) return publicAssetUrl("/img/printers/h2c.png");
  if (m.includes("h2s")) return publicAssetUrl("/img/printers/h2d.png");
  if (m.includes("p2s")) return publicAssetUrl("/img/printers/p1s.png");
  if (m.includes("p1s")) return publicAssetUrl("/img/printers/p1s.png");
  if (m.includes("p1p")) return publicAssetUrl("/img/printers/p1p.png");
  if (m.includes("a1mini")) return publicAssetUrl("/img/printers/a1mini.png");
  if (m.includes("a1")) return publicAssetUrl("/img/printers/a1.png");
  return publicAssetUrl("/img/printers/default.png");
}
function getWifiStrength(rssi) {
  if (rssi >= -50) return { labelKey: "printers.wifiSignal.excellent", color: "text-bambu-green", bars: 4 };
  if (rssi >= -60) return { labelKey: "printers.wifiSignal.good", color: "text-bambu-green", bars: 3 };
  if (rssi >= -70) return { labelKey: "printers.wifiSignal.fair", color: "text-yellow-400", bars: 2 };
  if (rssi >= -80) return { labelKey: "printers.wifiSignal.weak", color: "text-orange-400", bars: 1 };
  return { labelKey: "printers.wifiSignal.veryWeak", color: "text-red-400", bars: 1 };
}
function filterCompatibleQueueItems(items, loadedFilamentTypes, loadedFilaments) {
  return items.filter((item) => {
    if (item.required_filament_types && item.required_filament_types.length > 0 && loadedFilamentTypes !== void 0) {
      if (!item.required_filament_types.every((t) => loadedFilamentTypes.has(t.toUpperCase()))) {
        return false;
      }
    }
    if (item.filament_overrides && item.filament_overrides.length > 0 && loadedFilaments !== void 0) {
      const forceOverrides = item.filament_overrides.filter((o) => o.force_color_match === true);
      const prefOverrides = item.filament_overrides.filter((o) => o.force_color_match !== true);
      if (forceOverrides.length > 0) {
        const allForceMatch = forceOverrides.every((o) => {
          const oType = (o.type || "").toUpperCase();
          const oColor = (o.color || "").replace("#", "").toLowerCase().slice(0, 6);
          return loadedFilaments.has(`${oType}:${oColor}`);
        });
        if (!allForceMatch) return false;
      }
      if (prefOverrides.length > 0 && forceOverrides.length === 0) {
        const hasColorMatch = prefOverrides.some((o) => {
          const oType = (o.type || "").toUpperCase();
          const oColor = (o.color || "").replace("#", "").toLowerCase().slice(0, 6);
          return loadedFilaments.has(`${oType}:${oColor}`);
        });
        if (!hasColorMatch) return false;
      }
    }
    return true;
  });
}
function filterQueueItemsForPrinter(items, printerId, printerModel) {
  const normalizedModel = printerModel?.toLowerCase() ?? null;
  return items.filter((item) => {
    if (item.printer_id === printerId) {
      return true;
    }
    if (item.printer_id != null) {
      return false;
    }
    if (!normalizedModel || !item.target_model) {
      return false;
    }
    return item.target_model.toLowerCase() === normalizedModel;
  });
}
function PrinterQueueWidget({
  printerId,
  printerModel,
  printerState,
  plateCleared,
  queueItems,
  loadedFilamentTypes,
  loadedFilaments
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const sharedQueueProvided = queueItems !== void 0;
  const { data: fetchedQueue } = useQuery({
    queryKey: ["queue", printerId, "pending", printerModel],
    queryFn: () => api.getQueue(printerId, "pending", printerModel || void 0),
    enabled: !sharedQueueProvided,
    refetchInterval: 3e4
  });
  const queue = sharedQueueProvided ? queueItems : fetchedQueue;
  const clearPlateMutation = useMutation({
    mutationFn: () => api.clearPlate(printerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue", printerId] });
      queryClient.invalidateQueries({ queryKey: ["printerStatus", printerId] });
      showToast(t("queue.clearPlateSuccess"), "success");
    },
    onError: (err) => {
      showToast(err.message, "error");
    }
  });
  const compatibleQueue = queue ? filterCompatibleQueueItems(queue, loadedFilamentTypes, loadedFilaments) : void 0;
  const autoDispatchQueue = compatibleQueue?.filter((item) => !item.manual_start) ?? [];
  const totalPending = compatibleQueue?.length || 0;
  if (totalPending === 0) {
    return null;
  }
  const nextAutoItem = autoDispatchQueue[0];
  const nextItem = compatibleQueue?.[0];
  const needsClearPlate = (printerState === "FINISH" || printerState === "FAILED") && !plateCleared && autoDispatchQueue.length > 0;
  if (needsClearPlate) {
    const displayItem = nextAutoItem || nextItem;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 p-3 bg-bambu-dark rounded-lg border border-yellow-400/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-yellow-400 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("queue.nextInQueue") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white truncate", children: displayItem?.archive_name || displayItem?.library_file_name || `File #${displayItem?.archive_id || displayItem?.library_file_id}` })
        ] }),
        totalPending > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-1.5 py-0.5 bg-yellow-400/20 text-yellow-400 rounded flex-shrink-0", children: [
          "+",
          totalPending - 1
        ] })
      ] }),
      clearPlateMutation.isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full py-2 px-3 rounded-lg bg-bambu-green/10 border border-bambu-green/20 text-bambu-green text-sm flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
        t("queue.plateReady")
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => clearPlateMutation.mutate(),
          disabled: clearPlateMutation.isPending || !hasPermission("printers:clear_plate"),
          className: "w-full py-2 px-3 rounded-lg bg-bambu-green/20 border border-bambu-green/40 text-bambu-green hover:bg-bambu-green/30 transition-colors text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50",
          children: [
            clearPlateMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
            t("queue.clearPlate")
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/queue",
      className: "block mb-3 p-3 bg-bambu-dark rounded-lg hover:bg-bambu-dark-tertiary transition-colors",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-yellow-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("queue.nextInQueue") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white truncate", children: nextItem?.archive_name || nextItem?.library_file_name || `File #${nextItem?.archive_id || nextItem?.library_file_id}` })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
            nextItem?.scheduled_time ? formatRelativeTime(nextItem.scheduled_time, "system", t) : t("time.waiting")
          ] }),
          totalPending > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-1.5 py-0.5 bg-yellow-400/20 text-yellow-400 rounded", children: [
            "+",
            totalPending - 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-bambu-gray" })
        ] })
      ] })
    }
  );
}
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$3(e, r, t) {
  return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$3(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var SIZE = 32;
var defaultLegendContentDefaultProps = {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  layout: "horizontal",
  verticalAlign: "middle"
};
function Icon(_ref) {
  var {
    data,
    iconType,
    inactiveColor
  } = _ref;
  var halfSize = SIZE / 2;
  var sixthSize = SIZE / 6;
  var thirdSize = SIZE / 3;
  var color = data.inactive ? inactiveColor : data.color;
  var preferredIcon = iconType !== null && iconType !== void 0 ? iconType : data.type;
  if (preferredIcon === "none") {
    return null;
  }
  if (preferredIcon === "plainline") {
    var _data$payload;
    return /* @__PURE__ */ reactExports.createElement("line", {
      strokeWidth: 4,
      fill: "none",
      stroke: color,
      strokeDasharray: (_data$payload = data.payload) === null || _data$payload === void 0 ? void 0 : _data$payload.strokeDasharray,
      x1: 0,
      y1: halfSize,
      x2: SIZE,
      y2: halfSize,
      className: "recharts-legend-icon"
    });
  }
  if (preferredIcon === "line") {
    return /* @__PURE__ */ reactExports.createElement("path", {
      strokeWidth: 4,
      fill: "none",
      stroke: color,
      d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
      className: "recharts-legend-icon"
    });
  }
  if (preferredIcon === "rect") {
    return /* @__PURE__ */ reactExports.createElement("path", {
      stroke: "none",
      fill: color,
      d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
      className: "recharts-legend-icon"
    });
  }
  if (/* @__PURE__ */ reactExports.isValidElement(data.legendIcon)) {
    var iconProps = _objectSpread$3({}, data);
    delete iconProps.legendIcon;
    return /* @__PURE__ */ reactExports.cloneElement(data.legendIcon, iconProps);
  }
  return /* @__PURE__ */ reactExports.createElement(Symbols, {
    fill: color,
    cx: halfSize,
    cy: halfSize,
    size: SIZE,
    sizeType: "diameter",
    type: preferredIcon
  });
}
function Items(props) {
  var {
    payload,
    iconSize,
    layout,
    formatter,
    inactiveColor,
    iconType
  } = props;
  var viewBox = {
    x: 0,
    y: 0,
    width: SIZE,
    height: SIZE
  };
  var itemStyle = {
    display: layout === "horizontal" ? "inline-block" : "block",
    marginRight: 10
  };
  var svgStyle = {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: 4
  };
  return payload.map((entry, i) => {
    var finalFormatter = entry.formatter || formatter;
    var className = clsx({
      "recharts-legend-item": true,
      ["legend-item-".concat(i)]: true,
      inactive: entry.inactive
    });
    if (entry.type === "none") {
      return null;
    }
    var color = entry.inactive ? inactiveColor : entry.color;
    var finalValue = finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value;
    return /* @__PURE__ */ reactExports.createElement("li", _extends$3({
      className,
      style: itemStyle,
      key: "legend-item-".concat(i)
    }, adaptEventsOfChild(props, entry, i)), /* @__PURE__ */ reactExports.createElement(Surface, {
      width: iconSize,
      height: iconSize,
      viewBox,
      style: svgStyle,
      "aria-label": "".concat(finalValue, " legend icon")
    }, /* @__PURE__ */ reactExports.createElement(Icon, {
      data: entry,
      iconType,
      inactiveColor
    })), /* @__PURE__ */ reactExports.createElement("span", {
      className: "recharts-legend-item-text",
      style: {
        color
      }
    }, finalValue));
  });
}
var DefaultLegendContent = (outsideProps) => {
  var props = resolveDefaultProps(outsideProps, defaultLegendContentDefaultProps);
  var {
    payload,
    layout,
    align
  } = props;
  if (!payload || !payload.length) {
    return null;
  }
  var finalStyle = {
    padding: 0,
    margin: 0,
    textAlign: layout === "horizontal" ? align : "left"
  };
  return /* @__PURE__ */ reactExports.createElement("ul", {
    className: "recharts-default-legend",
    style: finalStyle
  }, /* @__PURE__ */ reactExports.createElement(Items, _extends$3({}, props, {
    payload
  })));
};
function useLegendPayload() {
  return useAppSelector(selectLegendPayload);
}
var _excluded$1 = ["contextPayload"];
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$1(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function defaultUniqBy(entry) {
  return entry.value;
}
function LegendContent(props) {
  var {
    contextPayload
  } = props, otherProps = _objectWithoutProperties$1(props, _excluded$1);
  var finalPayload = getUniqPayload(contextPayload, props.payloadUniqBy, defaultUniqBy);
  var contentProps = _objectSpread$2(_objectSpread$2({}, otherProps), {}, {
    payload: finalPayload
  });
  if (/* @__PURE__ */ reactExports.isValidElement(props.content)) {
    return /* @__PURE__ */ reactExports.cloneElement(props.content, contentProps);
  }
  if (typeof props.content === "function") {
    return /* @__PURE__ */ reactExports.createElement(props.content, contentProps);
  }
  return /* @__PURE__ */ reactExports.createElement(DefaultLegendContent, contentProps);
}
function getDefaultPosition(style, props, margin, chartWidth, chartHeight, box) {
  var {
    layout,
    align,
    verticalAlign
  } = props;
  var hPos, vPos;
  if (!style || (style.left === void 0 || style.left === null) && (style.right === void 0 || style.right === null)) {
    if (align === "center" && layout === "vertical") {
      hPos = {
        left: ((chartWidth || 0) - box.width) / 2
      };
    } else {
      hPos = align === "right" ? {
        right: margin && margin.right || 0
      } : {
        left: margin && margin.left || 0
      };
    }
  }
  if (!style || (style.top === void 0 || style.top === null) && (style.bottom === void 0 || style.bottom === null)) {
    if (verticalAlign === "middle") {
      vPos = {
        top: ((chartHeight || 0) - box.height) / 2
      };
    } else {
      vPos = verticalAlign === "bottom" ? {
        bottom: margin && margin.bottom || 0
      } : {
        top: margin && margin.top || 0
      };
    }
  }
  return _objectSpread$2(_objectSpread$2({}, hPos), vPos);
}
function LegendSettingsDispatcher(props) {
  var dispatch = useAppDispatch();
  reactExports.useEffect(() => {
    dispatch(setLegendSettings(props));
  }, [dispatch, props]);
  return null;
}
function LegendSizeDispatcher(props) {
  var dispatch = useAppDispatch();
  reactExports.useEffect(() => {
    dispatch(setLegendSize(props));
    return () => {
      dispatch(setLegendSize({
        width: 0,
        height: 0
      }));
    };
  }, [dispatch, props]);
  return null;
}
function getWidthOrHeight(layout, height, width, maxWidth) {
  if (layout === "vertical" && height != null) {
    return {
      height
    };
  }
  if (layout === "horizontal") {
    return {
      width: width || maxWidth
    };
  }
  return null;
}
var legendDefaultProps = {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  itemSorter: "value",
  layout: "horizontal",
  verticalAlign: "bottom"
};
function Legend(outsideProps) {
  var props = resolveDefaultProps(outsideProps, legendDefaultProps);
  var contextPayload = useLegendPayload();
  var legendPortalFromContext = useLegendPortal();
  var margin = useMargin();
  var {
    width: widthFromProps,
    height: heightFromProps,
    wrapperStyle,
    portal: portalFromProps
  } = props;
  var [lastBoundingBox, updateBoundingBox] = useElementOffset([contextPayload]);
  var chartWidth = useChartWidth();
  var chartHeight = useChartHeight();
  if (chartWidth == null || chartHeight == null) {
    return null;
  }
  var maxWidth = chartWidth - ((margin === null || margin === void 0 ? void 0 : margin.left) || 0) - ((margin === null || margin === void 0 ? void 0 : margin.right) || 0);
  var widthOrHeight = getWidthOrHeight(props.layout, heightFromProps, widthFromProps, maxWidth);
  var outerStyle = portalFromProps ? wrapperStyle : _objectSpread$2(_objectSpread$2({
    position: "absolute",
    width: (widthOrHeight === null || widthOrHeight === void 0 ? void 0 : widthOrHeight.width) || widthFromProps || "auto",
    height: (widthOrHeight === null || widthOrHeight === void 0 ? void 0 : widthOrHeight.height) || heightFromProps || "auto"
  }, getDefaultPosition(wrapperStyle, props, margin, chartWidth, chartHeight, lastBoundingBox)), wrapperStyle);
  var legendPortal = portalFromProps !== null && portalFromProps !== void 0 ? portalFromProps : legendPortalFromContext;
  if (legendPortal == null || contextPayload == null) {
    return null;
  }
  var legendElement = /* @__PURE__ */ reactExports.createElement("div", {
    className: "recharts-legend-wrapper",
    style: outerStyle,
    ref: updateBoundingBox
  }, /* @__PURE__ */ reactExports.createElement(LegendSettingsDispatcher, {
    layout: props.layout,
    align: props.align,
    verticalAlign: props.verticalAlign,
    itemSorter: props.itemSorter
  }), !portalFromProps && /* @__PURE__ */ reactExports.createElement(LegendSizeDispatcher, {
    width: lastBoundingBox.width,
    height: lastBoundingBox.height
  }), /* @__PURE__ */ reactExports.createElement(LegendContent, _extends$2({}, props, widthOrHeight, {
    margin,
    chartWidth,
    chartHeight,
    contextPayload
  })));
  return /* @__PURE__ */ reactDomExports.createPortal(legendElement, legendPortal);
}
Legend.displayName = "Legend";
class CartesianScaleHelperImpl {
  constructor(_ref) {
    var {
      x,
      y
    } = _ref;
    this.xAxisScale = x;
    this.yAxisScale = y;
  }
  map(value, _ref2) {
    var _this$xAxisScale$map, _this$yAxisScale$map;
    var {
      position
    } = _ref2;
    return {
      x: (_this$xAxisScale$map = this.xAxisScale.map(value.x, {
        position
      })) !== null && _this$xAxisScale$map !== void 0 ? _this$xAxisScale$map : 0,
      y: (_this$yAxisScale$map = this.yAxisScale.map(value.y, {
        position
      })) !== null && _this$yAxisScale$map !== void 0 ? _this$yAxisScale$map : 0
    };
  }
  mapWithFallback(value, _ref3) {
    var _this$xAxisScale$map2, _this$yAxisScale$map2;
    var {
      position,
      fallback
    } = _ref3;
    var fallbackY, fallbackX;
    if (fallback === "rangeMin") {
      fallbackY = this.yAxisScale.rangeMin();
    } else if (fallback === "rangeMax") {
      fallbackY = this.yAxisScale.rangeMax();
    } else {
      fallbackY = 0;
    }
    if (fallback === "rangeMin") {
      fallbackX = this.xAxisScale.rangeMin();
    } else if (fallback === "rangeMax") {
      fallbackX = this.xAxisScale.rangeMax();
    } else {
      fallbackX = 0;
    }
    return {
      x: (_this$xAxisScale$map2 = this.xAxisScale.map(value.x, {
        position
      })) !== null && _this$xAxisScale$map2 !== void 0 ? _this$xAxisScale$map2 : fallbackX,
      y: (_this$yAxisScale$map2 = this.yAxisScale.map(value.y, {
        position
      })) !== null && _this$yAxisScale$map2 !== void 0 ? _this$yAxisScale$map2 : fallbackY
    };
  }
  isInRange(_ref4) {
    var {
      x,
      y
    } = _ref4;
    var xInRange = x == null || this.xAxisScale.isInRange(x);
    var yInRange = y == null || this.yAxisScale.isInRange(y);
    return xInRange && yInRange;
  }
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}
var renderLine = (option, props) => {
  var line;
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    line = /* @__PURE__ */ reactExports.cloneElement(option, props);
  } else if (typeof option === "function") {
    line = option(props);
  } else {
    if (!isWellBehavedNumber(props.x1) || !isWellBehavedNumber(props.y1) || !isWellBehavedNumber(props.x2) || !isWellBehavedNumber(props.y2)) {
      return null;
    }
    line = /* @__PURE__ */ reactExports.createElement("line", _extends$1({}, props, {
      className: "recharts-reference-line-line"
    }));
  }
  return line;
};
var getHorizontalLineEndPoints = (yCoord, ifOverflow, position, yAxisOrientation, yAxisScale, viewBox) => {
  var {
    x,
    width
  } = viewBox;
  var coord = yAxisScale.map(yCoord, {
    position
  });
  if (!isWellBehavedNumber(coord)) {
    return null;
  }
  if (ifOverflow === "discard" && !yAxisScale.isInRange(coord)) {
    return null;
  }
  var points = [{
    x: x + width,
    y: coord
  }, {
    x,
    y: coord
  }];
  return yAxisOrientation === "left" ? points.reverse() : points;
};
var getVerticalLineEndPoints = (xCoord, ifOverflow, position, xAxisOrientation, xAxisScale, viewBox) => {
  var {
    y,
    height
  } = viewBox;
  var coord = xAxisScale.map(xCoord, {
    position
  });
  if (!isWellBehavedNumber(coord)) {
    return null;
  }
  if (ifOverflow === "discard" && !xAxisScale.isInRange(coord)) {
    return null;
  }
  var points = [{
    x: coord,
    y: y + height
  }, {
    x: coord,
    y
  }];
  return xAxisOrientation === "top" ? points.reverse() : points;
};
var getSegmentLineEndPoints = (segment, ifOverflow, position, scales) => {
  var points = [scales.mapWithFallback(segment[0], {
    position,
    fallback: "rangeMin"
  }), scales.mapWithFallback(segment[1], {
    position,
    fallback: "rangeMax"
  })];
  if (ifOverflow === "discard" && points.some((p) => !scales.isInRange(p))) {
    return null;
  }
  return points;
};
var getEndPoints = (xAxisScale, yAxisScale, viewBox, position, xAxisOrientation, yAxisOrientation, props) => {
  var {
    x: xCoord,
    y: yCoord,
    segment,
    ifOverflow
  } = props;
  var isFixedX = isNumOrStr(xCoord);
  var isFixedY = isNumOrStr(yCoord);
  if (isFixedY) {
    return getHorizontalLineEndPoints(yCoord, ifOverflow, position, yAxisOrientation, yAxisScale, viewBox);
  }
  if (isFixedX) {
    return getVerticalLineEndPoints(xCoord, ifOverflow, position, xAxisOrientation, xAxisScale, viewBox);
  }
  if (segment != null && segment.length === 2) {
    return getSegmentLineEndPoints(segment, ifOverflow, position, new CartesianScaleHelperImpl({
      x: xAxisScale,
      y: yAxisScale
    }));
  }
  return null;
};
function ReportReferenceLine(props) {
  var dispatch = useAppDispatch();
  reactExports.useEffect(() => {
    dispatch(addLine(props));
    return () => {
      dispatch(removeLine(props));
    };
  });
  return null;
}
function ReferenceLineImpl(props) {
  var {
    xAxisId,
    yAxisId,
    shape,
    className,
    ifOverflow
  } = props;
  var isPanorama = useIsPanorama();
  var clipPathId = useClipPathId();
  var xAxis = useAppSelector((state) => selectXAxisSettings(state, xAxisId));
  var yAxis = useAppSelector((state) => selectYAxisSettings(state, yAxisId));
  var xAxisScale = useAppSelector((state) => selectAxisScale(state, "xAxis", xAxisId, isPanorama));
  var yAxisScale = useAppSelector((state) => selectAxisScale(state, "yAxis", yAxisId, isPanorama));
  var viewBox = useViewBox();
  if (!clipPathId || !viewBox || xAxis == null || yAxis == null || xAxisScale == null || yAxisScale == null) {
    return null;
  }
  var endPoints = getEndPoints(xAxisScale, yAxisScale, viewBox, props.position, xAxis.orientation, yAxis.orientation, props);
  if (!endPoints) {
    return null;
  }
  var point1 = endPoints[0];
  var point2 = endPoints[1];
  if (point1 == null || point2 == null) {
    return null;
  }
  var {
    x: x1,
    y: y1
  } = point1;
  var {
    x: x2,
    y: y2
  } = point2;
  var clipPath = ifOverflow === "hidden" ? "url(#".concat(clipPathId, ")") : void 0;
  var lineProps = _objectSpread$1(_objectSpread$1({
    clipPath
  }, svgPropertiesAndEvents(props)), {}, {
    x1,
    y1,
    x2,
    y2
  });
  var rect = rectWithCoords({
    x1,
    y1,
    x2,
    y2
  });
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: props.zIndex
  }, /* @__PURE__ */ reactExports.createElement(Layer, {
    className: clsx("recharts-reference-line", className)
  }, renderLine(shape, lineProps), /* @__PURE__ */ reactExports.createElement(CartesianLabelContextProvider, _extends$1({}, rect, {
    lowerWidth: rect.width,
    upperWidth: rect.width
  }), /* @__PURE__ */ reactExports.createElement(CartesianLabelFromLabelProp, {
    label: props.label
  }), props.children)));
}
var referenceLineDefaultProps = {
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  label: false,
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
  zIndex: DefaultZIndexes.line
};
function ReferenceLine(outsideProps) {
  var props = resolveDefaultProps(outsideProps, referenceLineDefaultProps);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(ReportReferenceLine, {
    yAxisId: props.yAxisId,
    xAxisId: props.xAxisId,
    ifOverflow: props.ifOverflow,
    x: props.x,
    y: props.y,
    segment: props.segment
  }), /* @__PURE__ */ reactExports.createElement(ReferenceLineImpl, props));
}
ReferenceLine.displayName = "ReferenceLine";
var selectXAxisWithScale = (state, xAxisId, _yAxisId, isPanorama) => selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
var selectXAxisTicks = (state, xAxisId, _yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
var selectYAxisWithScale = (state, _xAxisId, yAxisId, isPanorama) => selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
var selectYAxisTicks = (state, _xAxisId, yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
var selectBandSize = createSelector([selectChartLayout, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
  if (isCategoricalAxis(layout, "xAxis")) {
    return getBandSizeOfAxis(xAxis, xAxisTicks, false);
  }
  return getBandSizeOfAxis(yAxis, yAxisTicks, false);
});
var pickLineId = (_state, _xAxisId, _yAxisId, _isPanorama, id) => id;
function isLineSettings(item) {
  return item.type === "line";
}
var selectSynchronisedLineSettings = createSelector([selectUnfilteredCartesianItems, pickLineId], (graphicalItems, id) => graphicalItems.filter(isLineSettings).find((x) => x.id === id));
var selectLinePoints = createSelector([selectChartLayout, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks, selectSynchronisedLineSettings, selectBandSize, selectChartDataWithIndexesIfNotInPanoramaPosition4], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks, lineSettings, bandSize, _ref) => {
  var {
    chartData,
    dataStartIndex,
    dataEndIndex
  } = _ref;
  if (lineSettings == null || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || xAxisTicks.length === 0 || yAxisTicks.length === 0 || bandSize == null || layout !== "horizontal" && layout !== "vertical") {
    return void 0;
  }
  var {
    dataKey,
    data
  } = lineSettings;
  var displayedData;
  if (data != null && data.length > 0) {
    displayedData = data;
  } else {
    displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
  }
  if (displayedData == null) {
    return void 0;
  }
  return computeLinePoints({
    layout,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    dataKey,
    bandSize,
    displayedData
  });
});
var _excluded = ["id"], _excluded2 = ["type", "layout", "connectNulls", "needClip", "shape"], _excluded3 = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var computeLegendPayloadFromAreaData = (props) => {
  var {
    dataKey,
    name,
    stroke,
    legendType,
    hide
  } = props;
  return [{
    inactive: hide,
    dataKey,
    type: legendType,
    color: stroke,
    value: getTooltipNameProp(name, dataKey),
    payload: props
  }];
};
var SetLineTooltipEntrySettings = /* @__PURE__ */ reactExports.memo((_ref) => {
  var {
    dataKey,
    data,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    unit,
    tooltipType,
    id
  } = _ref;
  var tooltipEntrySettings = {
    dataDefinedOnItem: data,
    getPosition: noop,
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey: void 0,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: stroke,
      unit,
      graphicalItemId: id
    }
  };
  return /* @__PURE__ */ reactExports.createElement(SetTooltipEntrySettings, {
    tooltipEntrySettings
  });
});
var generateSimpleStrokeDasharray = (totalLength, length) => {
  return "".concat(length, "px ").concat(totalLength - length, "px");
};
function repeat(lines, count) {
  var linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
  var result = [];
  for (var i = 0; i < count; ++i) {
    result = [...result, ...linesUnit];
  }
  return result;
}
var getStrokeDasharray = (length, totalLength, lines) => {
  var lineLength = lines.reduce((pre, next) => pre + next);
  if (!lineLength) {
    return generateSimpleStrokeDasharray(totalLength, length);
  }
  var count = Math.floor(length / lineLength);
  var remainLength = length % lineLength;
  var restLength = totalLength - length;
  var remainLines = [];
  for (var i = 0, sum = 0; i < lines.length; sum += (_lines$i = lines[i]) !== null && _lines$i !== void 0 ? _lines$i : 0, ++i) {
    var _lines$i;
    var lineValue = lines[i];
    if (lineValue != null && sum + lineValue > remainLength) {
      remainLines = [...lines.slice(0, i), remainLength - sum];
      break;
    }
  }
  var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
  return [...repeat(lines, count), ...remainLines, ...emptyLines].map((line) => "".concat(line, "px")).join(", ");
};
function LineDotsWrapper(_ref2) {
  var {
    clipPathId,
    points,
    props
  } = _ref2;
  var {
    dot,
    dataKey,
    needClip
  } = props;
  var {
    id
  } = props, propsWithoutId = _objectWithoutProperties(props, _excluded);
  var lineProps = svgPropertiesNoEvents(propsWithoutId);
  return /* @__PURE__ */ reactExports.createElement(Dots, {
    points,
    dot,
    className: "recharts-line-dots",
    dotClassName: "recharts-line-dot",
    dataKey,
    baseProps: lineProps,
    needClip,
    clipPathId
  });
}
function LineLabelListProvider(_ref3) {
  var {
    showLabels,
    children,
    points
  } = _ref3;
  var labelListEntries = reactExports.useMemo(() => {
    return points === null || points === void 0 ? void 0 : points.map((point) => {
      var _point$x, _point$y;
      var viewBox = {
        x: (_point$x = point.x) !== null && _point$x !== void 0 ? _point$x : 0,
        y: (_point$y = point.y) !== null && _point$y !== void 0 ? _point$y : 0,
        width: 0,
        lowerWidth: 0,
        upperWidth: 0,
        height: 0
      };
      return _objectSpread(_objectSpread({}, viewBox), {}, {
        value: point.value,
        payload: point.payload,
        viewBox,
        /*
         * Line is not passing parentViewBox to the LabelList so the labels can escape - looks like a bug, should we pass parentViewBox?
         * Or should this just be the root chart viewBox?
         */
        parentViewBox: void 0,
        fill: void 0
      });
    });
  }, [points]);
  return /* @__PURE__ */ reactExports.createElement(CartesianLabelListContextProvider, {
    value: showLabels ? labelListEntries : void 0
  }, children);
}
function StaticCurve(_ref4) {
  var {
    clipPathId,
    pathRef,
    points,
    strokeDasharray,
    props
  } = _ref4;
  var {
    type,
    layout,
    connectNulls,
    needClip,
    shape
  } = props, others = _objectWithoutProperties(props, _excluded2);
  var curveProps = _objectSpread(_objectSpread({}, svgPropertiesAndEvents(others)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0,
    points,
    type,
    layout,
    connectNulls,
    strokeDasharray: strokeDasharray !== null && strokeDasharray !== void 0 ? strokeDasharray : props.strokeDasharray
  });
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, (points === null || points === void 0 ? void 0 : points.length) > 1 && /* @__PURE__ */ reactExports.createElement(Shape, _extends({
    shapeType: "curve",
    option: shape
  }, curveProps, {
    pathRef
  })), /* @__PURE__ */ reactExports.createElement(LineDotsWrapper, {
    points,
    clipPathId,
    props
  }));
}
function getTotalLength(mainCurve) {
  try {
    return mainCurve && mainCurve.getTotalLength && mainCurve.getTotalLength() || 0;
  } catch (_unused) {
    return 0;
  }
}
function CurveWithAnimation(_ref5) {
  var {
    clipPathId,
    props,
    pathRef,
    previousPointsRef,
    longestAnimatedLengthRef
  } = _ref5;
  var {
    points,
    strokeDasharray,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    animateNewValues,
    width,
    height,
    onAnimationEnd,
    onAnimationStart
  } = props;
  var prevPoints = previousPointsRef.current;
  var animationId = useAnimationId(points, "recharts-line-");
  var animationIdRef = reactExports.useRef(animationId);
  var [isAnimating, setIsAnimating] = reactExports.useState(false);
  var showLabels = !isAnimating;
  var handleAnimationEnd = reactExports.useCallback(() => {
    if (typeof onAnimationEnd === "function") {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);
  var handleAnimationStart = reactExports.useCallback(() => {
    if (typeof onAnimationStart === "function") {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);
  var totalLength = getTotalLength(pathRef.current);
  var startingPointRef = reactExports.useRef(0);
  if (animationIdRef.current !== animationId) {
    startingPointRef.current = longestAnimatedLengthRef.current;
    animationIdRef.current = animationId;
  }
  var startingPoint = startingPointRef.current;
  return /* @__PURE__ */ reactExports.createElement(LineLabelListProvider, {
    points,
    showLabels
  }, props.children, /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    begin: animationBegin,
    duration: animationDuration,
    isActive: isAnimationActive,
    easing: animationEasing,
    onAnimationEnd: handleAnimationEnd,
    onAnimationStart: handleAnimationStart,
    key: animationId
  }, (t) => {
    var lengthInterpolated = interpolate(startingPoint, totalLength + startingPoint, t);
    var curLength = Math.min(lengthInterpolated, totalLength);
    var currentStrokeDasharray;
    if (isAnimationActive) {
      if (strokeDasharray) {
        var lines = "".concat(strokeDasharray).split(/[,\s]+/gim).map((num) => parseFloat(num));
        currentStrokeDasharray = getStrokeDasharray(curLength, totalLength, lines);
      } else {
        currentStrokeDasharray = generateSimpleStrokeDasharray(totalLength, curLength);
      }
    } else {
      currentStrokeDasharray = strokeDasharray == null ? void 0 : String(strokeDasharray);
    }
    if (t > 0 && totalLength > 0) {
      previousPointsRef.current = points;
      longestAnimatedLengthRef.current = Math.max(longestAnimatedLengthRef.current, curLength);
    }
    if (prevPoints) {
      var prevPointsDiffFactor = prevPoints.length / points.length;
      var stepData = t === 1 ? points : points.map((entry, index) => {
        var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
        if (prevPoints[prevPointIndex]) {
          var prev = prevPoints[prevPointIndex];
          return _objectSpread(_objectSpread({}, entry), {}, {
            x: interpolate(prev.x, entry.x, t),
            y: interpolate(prev.y, entry.y, t)
          });
        }
        if (animateNewValues) {
          return _objectSpread(_objectSpread({}, entry), {}, {
            x: interpolate(width * 2, entry.x, t),
            y: interpolate(height / 2, entry.y, t)
          });
        }
        return _objectSpread(_objectSpread({}, entry), {}, {
          x: entry.x,
          y: entry.y
        });
      });
      previousPointsRef.current = stepData;
      return /* @__PURE__ */ reactExports.createElement(StaticCurve, {
        props,
        points: stepData,
        clipPathId,
        pathRef,
        strokeDasharray: currentStrokeDasharray
      });
    }
    return /* @__PURE__ */ reactExports.createElement(StaticCurve, {
      props,
      points,
      clipPathId,
      pathRef,
      strokeDasharray: currentStrokeDasharray
    });
  }), /* @__PURE__ */ reactExports.createElement(LabelListFromLabelProp, {
    label: props.label
  }));
}
function RenderCurve(_ref6) {
  var {
    clipPathId,
    props
  } = _ref6;
  var previousPointsRef = reactExports.useRef(null);
  var longestAnimatedLengthRef = reactExports.useRef(0);
  var pathRef = reactExports.useRef(null);
  return /* @__PURE__ */ reactExports.createElement(CurveWithAnimation, {
    props,
    clipPathId,
    previousPointsRef,
    longestAnimatedLengthRef,
    pathRef
  });
}
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
  var _dataPoint$x, _dataPoint$y;
  return {
    x: (_dataPoint$x = dataPoint.x) !== null && _dataPoint$x !== void 0 ? _dataPoint$x : void 0,
    y: (_dataPoint$y = dataPoint.y) !== null && _dataPoint$y !== void 0 ? _dataPoint$y : void 0,
    value: dataPoint.value,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: getValueByDataKey(dataPoint.payload, dataKey)
  };
};
class LineWithState extends reactExports.Component {
  render() {
    var {
      hide,
      dot,
      points,
      className,
      xAxisId,
      yAxisId,
      top,
      left,
      width,
      height,
      id,
      needClip,
      zIndex
    } = this.props;
    if (hide) {
      return null;
    }
    var layerClass = clsx("recharts-line", className);
    var clipPathId = id;
    var {
      r,
      strokeWidth
    } = getRadiusAndStrokeWidthFromDot(dot);
    var clipDot = isClipDot(dot);
    var dotSize = r * 2 + strokeWidth;
    var activePointsClipPath = needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : void 0;
    return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
      zIndex
    }, /* @__PURE__ */ reactExports.createElement(Layer, {
      className: layerClass
    }, needClip && /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement(GraphicalItemClipPath, {
      clipPathId,
      xAxisId,
      yAxisId
    }), !clipDot && /* @__PURE__ */ reactExports.createElement("clipPath", {
      id: "clipPath-dots-".concat(clipPathId)
    }, /* @__PURE__ */ reactExports.createElement("rect", {
      x: left - dotSize / 2,
      y: top - dotSize / 2,
      width: width + dotSize,
      height: height + dotSize
    }))), /* @__PURE__ */ reactExports.createElement(SetErrorBarContext, {
      xAxisId,
      yAxisId,
      data: points,
      dataPointFormatter: errorBarDataPointFormatter,
      errorBarOffset: 0
    }, /* @__PURE__ */ reactExports.createElement(RenderCurve, {
      props: this.props,
      clipPathId
    }))), /* @__PURE__ */ reactExports.createElement(ActivePoints, {
      activeDot: this.props.activeDot,
      points,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey,
      clipPath: activePointsClipPath
    }));
  }
}
var defaultLineProps = {
  activeDot: true,
  animateNewValues: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: false,
  dot: true,
  fill: "#fff",
  hide: false,
  isAnimationActive: "auto",
  label: false,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.line,
  type: "linear"
};
function LineImpl(props) {
  var _resolveDefaultProps = resolveDefaultProps(props, defaultLineProps), {
    activeDot,
    animateNewValues,
    animationBegin,
    animationDuration,
    animationEasing,
    connectNulls,
    dot,
    hide,
    isAnimationActive,
    label,
    legendType,
    xAxisId,
    yAxisId,
    id
  } = _resolveDefaultProps, everythingElse = _objectWithoutProperties(_resolveDefaultProps, _excluded3);
  var {
    needClip
  } = useNeedsClip(xAxisId, yAxisId);
  var plotArea = usePlotArea();
  var layout = useChartLayout();
  var isPanorama = useIsPanorama();
  var points = useAppSelector((state) => selectLinePoints(state, xAxisId, yAxisId, isPanorama, id));
  if (layout !== "horizontal" && layout !== "vertical" || points == null || plotArea == null) {
    return null;
  }
  var {
    height,
    width,
    x: left,
    y: top
  } = plotArea;
  return /* @__PURE__ */ reactExports.createElement(LineWithState, _extends({}, everythingElse, {
    id,
    connectNulls,
    dot,
    activeDot,
    animateNewValues,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive,
    hide,
    label,
    legendType,
    xAxisId,
    yAxisId,
    points,
    layout,
    height,
    width,
    left,
    top,
    needClip
  }));
}
function computeLinePoints(_ref7) {
  var {
    layout,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    dataKey,
    bandSize,
    displayedData
  } = _ref7;
  return displayedData.map((entry, index) => {
    var value = getValueByDataKey(entry, dataKey);
    if (layout === "horizontal") {
      var _x = getCateCoordinateOfLine({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize,
        entry,
        index
      });
      var _y = isNullish(value) ? null : yAxis.scale.map(value);
      return {
        x: _x,
        y: _y !== null && _y !== void 0 ? _y : null,
        value,
        payload: entry
      };
    }
    var x = isNullish(value) ? null : xAxis.scale.map(value);
    var y = getCateCoordinateOfLine({
      axis: yAxis,
      ticks: yAxisTicks,
      bandSize,
      entry,
      index
    });
    if (x == null || y == null) {
      return null;
    }
    return {
      x,
      y,
      value,
      payload: entry
    };
  }).filter(Boolean);
}
function LineFn(outsideProps) {
  var props = resolveDefaultProps(outsideProps, defaultLineProps);
  var isPanorama = useIsPanorama();
  return /* @__PURE__ */ reactExports.createElement(RegisterGraphicalItemId, {
    id: props.id,
    type: "line"
  }, (id) => /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetLegendPayload, {
    legendPayload: computeLegendPayloadFromAreaData(props)
  }), /* @__PURE__ */ reactExports.createElement(SetLineTooltipEntrySettings, {
    dataKey: props.dataKey,
    data: props.data,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    fill: props.fill,
    name: props.name,
    hide: props.hide,
    unit: props.unit,
    tooltipType: props.tooltipType,
    id
  }), /* @__PURE__ */ reactExports.createElement(SetCartesianGraphicalItem, {
    type: "line",
    id,
    data: props.data,
    xAxisId: props.xAxisId,
    yAxisId: props.yAxisId,
    zAxisId: 0,
    dataKey: props.dataKey,
    hide: props.hide,
    isPanorama
  }), /* @__PURE__ */ reactExports.createElement(LineImpl, _extends({}, props, {
    id
  }))));
}
var Line = /* @__PURE__ */ reactExports.memo(LineFn, propsAreEqual);
Line.displayName = "Line";
var allowedTooltipTypes = ["axis"];
var LineChart = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  return /* @__PURE__ */ reactExports.createElement(CartesianChart, {
    chartName: "LineChart",
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: allowedTooltipTypes,
    tooltipPayloadSearcher: arrayTooltipSearcher,
    categoricalChartProps: props,
    ref
  });
});
const TIME_RANGES = [
  { value: "6h", label: "6h", hours: 6 },
  { value: "24h", label: "24h", hours: 24 },
  { value: "48h", label: "48h", hours: 48 },
  { value: "7d", label: "7d", hours: 168 }
];
function AMSHistoryModal({
  isOpen,
  onClose,
  printerId,
  printerName,
  amsId,
  amsLabel,
  initialMode = "humidity",
  thresholds
}) {
  const { t } = useTranslation();
  const { mode: themeMode } = useTheme();
  const [timeRange, setTimeRange] = reactExports.useState("24h");
  const [mode, setMode] = reactExports.useState(initialMode);
  const isDark = themeMode === "dark";
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const timeFormat = settings?.time_format || "system";
  reactExports.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  const hours = TIME_RANGES.find((r) => r.value === timeRange)?.hours || 24;
  const { data, isLoading, error } = useQuery({
    queryKey: ["ams-history", printerId, amsId, hours],
    queryFn: () => api.getAMSHistory(printerId, amsId, hours),
    enabled: isOpen,
    refetchInterval: 6e4
    // Refresh every minute
  });
  if (!isOpen) return null;
  const rawPoints = data?.data.map((point) => {
    const date = parseUTCDate(point.recorded_at) || /* @__PURE__ */ new Date();
    return {
      time: date.getTime(),
      humidity: point.humidity,
      temperature: point.temperature
    };
  }) || [];
  const domainStart = Date.now() - hours * 60 * 60 * 1e3;
  const domainEnd = Date.now();
  const chartData = [...rawPoints];
  if (chartData.length > 0) {
    const first = chartData[0];
    if (first.time > domainStart) {
      chartData.unshift({ ...first, time: domainStart });
    }
    const last = chartData[chartData.length - 1];
    if (last.time < domainEnd) {
      chartData.push({ ...last, time: domainEnd });
    }
  }
  const humidityGood = thresholds?.humidityGood || 40;
  const humidityFair = thresholds?.humidityFair || 60;
  const tempGood = thresholds?.tempGood || 30;
  const tempFair = thresholds?.tempFair || 35;
  const lastPoint = chartData[chartData.length - 1];
  const currentHumidity = lastPoint?.humidity;
  const currentTemp = lastPoint?.temperature;
  const getTrend = (values) => {
    const filtered = values.filter((v) => v != null);
    if (filtered.length < 4) return "stable";
    const firstQuarter = filtered.slice(0, Math.floor(filtered.length / 4));
    const lastQuarter = filtered.slice(-Math.floor(filtered.length / 4));
    const firstAvg = firstQuarter.reduce((a, b) => a + b, 0) / firstQuarter.length;
    const lastAvg = lastQuarter.reduce((a, b) => a + b, 0) / lastQuarter.length;
    const diff = lastAvg - firstAvg;
    if (Math.abs(diff) < 2) return "stable";
    return diff > 0 ? "up" : "down";
  };
  const humidityTrend = getTrend(chartData.map((d) => d.humidity));
  const tempTrend = getTrend(chartData.map((d) => d.temperature));
  const TrendIcon = ({ trend }) => {
    if (trend === "up") return /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-red-400" });
    if (trend === "down") return /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-green-400" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4 text-gray-400 dark:text-bambu-gray" });
  };
  const getHumidityColor = (value) => {
    if (value == null) return "#9ca3af";
    if (value <= humidityGood) return "#22a352";
    if (value <= humidityFair) return "#d4a017";
    return "#c62828";
  };
  const getTempColor = (value) => {
    if (value == null) return "#9ca3af";
    if (value <= tempGood) return "#22a352";
    if (value <= tempFair) return "#d4a017";
    return "#c62828";
  };
  const modalBg = isDark ? "#2d2d2d" : "#ffffff";
  const cardBg = isDark ? "#1d1d1d" : "#f3f4f6";
  const borderColor = isDark ? "#3d3d3d" : "#e5e7eb";
  const textPrimary = isDark ? "#ffffff" : "#111827";
  const textSecondary = isDark ? "#9ca3af" : "#4b5563";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl",
      style: { backgroundColor: modalBg },
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between px-6 py-4 border-b",
            style: { borderColor },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold", style: { color: textPrimary }, children: [
                  amsLabel,
                  " ",
                  t("common.history", "History")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: textSecondary }, children: printerName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "p-2 rounded-lg transition-colors",
                  style: { color: textSecondary },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-80px)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex gap-1 rounded-lg p-1 max-w-full flex-wrap w-fit", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setMode("humidity"),
                  className: `flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${mode === "humidity" ? "bg-blue-600 text-white" : ""}`,
                  style: mode !== "humidity" ? { color: textSecondary } : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-4 h-4" }),
                    t("common.humidity", "Humidity")
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setMode("temperature"),
                  className: `flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${mode === "temperature" ? "bg-orange-600 text-white" : ""}`,
                  style: mode !== "temperature" ? { color: textSecondary } : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "w-4 h-4" }),
                    t("common.temperature", "Temperature")
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex gap-1 rounded-lg p-1 max-w-full flex-wrap w-fit", style: { backgroundColor: cardBg }, children: TIME_RANGES.map((range) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setTimeRange(range.value),
                className: `px-3 py-1 text-sm rounded-md transition-colors ${timeRange === range.value ? "bg-bambu-green text-white" : ""}`,
                style: timeRange !== range.value ? { color: textSecondary } : void 0,
                children: range.label
              },
              range.value
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-4 max-[550px]:grid-cols-2", children: mode === "humidity" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 max-[550px]:order-2", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: textSecondary }, children: t("common.current", "Current") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", style: { color: getHumidityColor(currentHumidity) }, children: currentHumidity != null ? `${currentHumidity}%` : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendIcon, { trend: humidityTrend })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 max-[550px]:order-4", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: textSecondary }, children: t("common.average", "Average") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", style: { color: textPrimary }, children: data?.avg_humidity != null ? `${data.avg_humidity}%` : "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 max-[550px]:order-1", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: textSecondary }, children: t("common.min", "Min") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-green-500", children: data?.min_humidity != null ? `${data.min_humidity}%` : "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 max-[550px]:order-3", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: textSecondary }, children: t("common.max", "Max") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-red-500", children: data?.max_humidity != null ? `${data.max_humidity}%` : "—" })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 max-[550px]:order-2", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: textSecondary }, children: t("common.current", "Current") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", style: { color: getTempColor(currentTemp) }, children: currentTemp != null ? `${currentTemp}°C` : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendIcon, { trend: tempTrend })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 max-[550px]:order-4", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: textSecondary }, children: t("common.average", "Average") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", style: { color: textPrimary }, children: data?.avg_temperature != null ? `${data.avg_temperature}°C` : "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 max-[550px]:order-1", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: textSecondary }, children: t("common.min", "Min") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-blue-500", children: data?.min_temperature != null ? `${data.min_temperature}°C` : "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 max-[550px]:order-3", style: { backgroundColor: cardBg }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: textSecondary }, children: t("common.max", "Max") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-red-500", children: data?.max_temperature != null ? `${data.max_temperature}°C` : "—" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg p-4", style: { backgroundColor: cardBg }, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[300px] flex items-center justify-center", style: { color: textSecondary }, children: t("common.loading", "Loading...") }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[300px] flex items-center justify-center text-red-500", children: t("common.error", "Error loading data") }) : chartData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[300px] flex items-center justify-center", style: { color: textSecondary }, children: t("common.noData", "No data available for this time range") }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: chartData, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: isDark ? "#3d3d3d" : "#e5e7eb" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "time",
                type: "number",
                domain: [Date.now() - hours * 60 * 60 * 1e3, Date.now()],
                tickFormatter: (ts) => {
                  const date = new Date(ts);
                  if (hours > 24) {
                    return date.toLocaleDateString([], { day: "numeric", month: "short" });
                  }
                  return date.toLocaleTimeString([], applyTimeFormat({ hour: "2-digit", minute: "2-digit" }, timeFormat));
                },
                stroke: isDark ? "#9ca3af" : "#6b7280",
                tick: { fontSize: 12 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                stroke: isDark ? "#9ca3af" : "#6b7280",
                tick: { fontSize: 12 },
                domain: mode === "humidity" ? [0, 100] : ["auto", "auto"],
                tickFormatter: (value) => mode === "humidity" ? `${value}%` : `${value}°C`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: {
                  backgroundColor: isDark ? "#2d2d2d" : "#ffffff",
                  border: `1px solid ${isDark ? "#3d3d3d" : "#e5e7eb"}`,
                  borderRadius: "8px",
                  color: isDark ? "#fff" : "#000"
                },
                labelFormatter: (ts) => new Date(ts).toLocaleString(void 0, applyTimeFormat({
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                }, timeFormat)),
                formatter: (value) => [
                  mode === "humidity" ? `${value ?? 0}%` : `${value ?? 0}°C`,
                  mode === "humidity" ? "Humidity" : "Temperature"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
            mode === "humidity" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { y: humidityGood, stroke: "#22a352", strokeDasharray: "5 5", label: { value: "Good", fill: "#22a352", fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { y: humidityFair, stroke: "#d4a017", strokeDasharray: "5 5", label: { value: "Fair", fill: "#d4a017", fontSize: 10 } })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { y: tempGood, stroke: "#22a352", strokeDasharray: "5 5", label: { value: "Good", fill: "#22a352", fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { y: tempFair, stroke: "#d4a017", strokeDasharray: "5 5", label: { value: "Fair", fill: "#d4a017", fontSize: 10 } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                type: "monotone",
                dataKey: mode,
                name: mode === "humidity" ? "Humidity" : "Temperature",
                stroke: mode === "humidity" ? "#3b82f6" : "#f97316",
                strokeWidth: 2,
                dot: false,
                activeDot: { r: 4 },
                connectNulls: true
              }
            )
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-center", style: { color: textSecondary }, children: t("amsHistory.recordingInfo", "Data is recorded every 5 minutes while the printer is connected") })
        ] })
      ]
    }
  ) });
}
function FilamentHoverCard({ data, children, disabled, className = "", spoolman, inventory, configureSlot }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [position, setPosition] = reactExports.useState("top");
  const [copied, setCopied] = reactExports.useState(false);
  const [showUnlinkConfirm, setShowUnlinkConfirm] = reactExports.useState(false);
  const triggerRef = reactExports.useRef(null);
  const cardRef = reactExports.useRef(null);
  const timeoutRef = reactExports.useRef(null);
  const handleCopyUuid = () => {
    const uuid = data.trayUuid;
    if (!uuid) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(uuid).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      }).catch(() => {
        fallbackCopy(uuid);
      });
    } else {
      fallbackCopy(uuid);
    }
  };
  const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch {
      console.error("Failed to copy to clipboard");
    }
    document.body.removeChild(textarea);
  };
  reactExports.useEffect(() => {
    if (isVisible && triggerRef.current && cardRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const cardHeight = cardRef.current.offsetHeight;
      const headerHeight = 56;
      const spaceAbove = triggerRect.top - headerHeight;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      if (spaceAbove < cardHeight + 12 && spaceBelow > spaceAbove) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  }, [isVisible]);
  const handleMouseEnter = () => {
    if (disabled) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), 80);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(false), 100);
  };
  reactExports.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  const getFillColor = (fill) => {
    if (fill <= 15) return "#ef4444";
    if (fill <= 30) return "#f97316";
    if (fill <= 50) return "#eab308";
    return "#22c55e";
  };
  const colorHex = data.colorHex ? `#${data.colorHex.replace("#", "")}` : null;
  const assignedRemainingWeight = inventory?.assignedSpool?.remainingWeightGrams ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: triggerRef,
      className: `relative ${className}`,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        children,
        isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: cardRef,
            className: `
            absolute left-1/2 -translate-x-1/2 z-50
            ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"}
            animate-in fade-in-0 zoom-in-95 duration-150
          `,
            style: {
              // Ensure card doesn't go off-screen horizontally
              maxWidth: "calc(100vw - 24px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "\n            w-52 bg-bambu-dark-secondary border border-bambu-dark-tertiary\n            rounded-lg shadow-xl overflow-hidden\n            backdrop-blur-sm\n          ", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "h-12 relative overflow-hidden",
                    style: {
                      backgroundColor: colorHex || "#3d3d3d"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `
                absolute inset-0 flex items-center justify-center
                font-semibold text-sm tracking-wide
                ${isLightColor(colorHex) ? "text-black/80" : "text-white/90"}
              `, children: data.colorName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `
                absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider
                ${data.vendor === "Bambu Lab" ? "bg-black/60 text-white" : "bg-black/50 text-white/90"}
              `, children: data.vendor === "Bambu Lab" ? "BBL" : "GEN" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("ams.profile") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white font-semibold truncate max-w-[120px]", children: data.profile })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("ams.kFactor") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-green font-mono font-bold", children: data.kFactor })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-3 h-3" }),
                        t("ams.fill")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white font-semibold flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: data.fillLevel !== null ? `${data.fillLevel}%` : "—" }),
                        assignedRemainingWeight !== null && data.fillLevel !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-bambu-gray font-normal", children: [
                          "• ",
                          assignedRemainingWeight,
                          "g"
                        ] }),
                        data.fillSource === "spoolman" && data.fillLevel !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-bambu-gray font-normal", children: t("spoolman.fillSourceLabel") }),
                        data.fillSource === "inventory" && data.fillLevel !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-bambu-gray font-normal", children: t("inventory.fillSourceLabel") })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-black/40 rounded-full overflow-hidden", children: data.fillLevel !== null ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full transition-all duration-300",
                        style: {
                          width: `${data.fillLevel}%`,
                          backgroundColor: getFillColor(data.fillLevel)
                        }
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full bg-bambu-gray/30 rounded-full" }) })
                  ] }),
                  spoolman?.enabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 mt-2 border-t border-bambu-dark-tertiary space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("spoolman.spoolId") }),
                      data.trayUuid ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: (e) => {
                            e.stopPropagation();
                            handleCopyUuid();
                          },
                          className: "flex items-center gap-1 text-xs text-bambu-gray hover:text-white transition-colors",
                          title: "Copy spool UUID",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] truncate max-w-[80px]", children: [
                              data.trayUuid.slice(0, 8),
                              "..."
                            ] }),
                            copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-bambu-green" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" })
                          ]
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: "—" })
                    ] }),
                    spoolman.linkedSpoolId && spoolman.spoolmanUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: `${spoolman.spoolmanUrl.replace(/\/$/, "")}/spool/show/${spoolman.linkedSpoolId}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          onClick: (e) => e.stopPropagation(),
                          className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-colors bg-bambu-green/20 hover:bg-bambu-green/30 text-bambu-green",
                          title: t("spoolman.openInSpoolman"),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" }),
                            t("spoolman.openInSpoolman")
                          ]
                        }
                      ),
                      spoolman.onUnlinkSpool && (data.vendor !== "Bambu Lab" || spoolman.syncMode === "manual") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: (e) => {
                            e.stopPropagation();
                            setShowUnlinkConfirm(true);
                          },
                          className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-colors bg-red-500/20 hover:bg-red-500/30 text-red-400",
                          title: t("spoolman.unlinkSpool"),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Unlink, { className: "w-3.5 h-3.5" }),
                            t("spoolman.unlinkSpool")
                          ]
                        }
                      )
                    ] }),
                    !spoolman.linkedSpoolId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          if (spoolman.onLinkSpool) {
                            spoolman.onLinkSpool?.();
                          }
                        },
                        disabled: !spoolman.onLinkSpool,
                        className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-colors ${!spoolman.onLinkSpool ? "bg-bambu-gray/10 text-bambu-gray cursor-not-allowed" : "bg-bambu-green/20 hover:bg-bambu-green/30 text-bambu-green"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-3.5 h-3.5" }),
                          t("spoolman.linkToSpoolman")
                        ]
                      }
                    )
                  ] }),
                  inventory && data.vendor !== "Bambu Lab" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 mt-2 border-t border-bambu-dark-tertiary space-y-2", children: inventory.assignedSpool ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3 h-3 text-bambu-green" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("inventory.assigned") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white truncate", children: [
                      inventory.assignedSpool.brand ? `${inventory.assignedSpool.brand} ` : "",
                      inventory.assignedSpool.material,
                      inventory.assignedSpool.color_name ? ` - ${inventory.assignedSpool.color_name}` : ""
                    ] }),
                    inventory.onUnassignSpool && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          inventory.onUnassignSpool?.();
                        },
                        className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-colors bg-red-500/20 hover:bg-red-500/30 text-red-400",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Unlink, { className: "w-3.5 h-3.5" }),
                          t("inventory.unassignSpool")
                        ]
                      }
                    )
                  ] }) : inventory.onAssignSpool ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        inventory.onAssignSpool?.();
                      },
                      className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-colors bg-bambu-blue/20 hover:bg-bambu-blue/30 text-bambu-blue",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5" }),
                        t("inventory.assignSpool")
                      ]
                    }
                  ) : null }),
                  configureSlot?.enabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${spoolman?.enabled && data.trayUuid ? "" : "pt-2 mt-2 border-t border-bambu-dark-tertiary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        configureSlot.onConfigure?.();
                      },
                      className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-colors bg-bambu-blue/20 hover:bg-bambu-blue/30 text-bambu-blue",
                      title: t("ams.configureSlot"),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-3.5 h-3.5" }),
                        t("ams.configure")
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `
              absolute left-1/2 -translate-x-1/2 w-0 h-0
              border-l-[6px] border-l-transparent
              border-r-[6px] border-r-transparent
              ${position === "top" ? "top-full border-t-[6px] border-t-bambu-dark-tertiary" : "bottom-full border-b-[6px] border-b-bambu-dark-tertiary"}
            `
                }
              )
            ]
          }
        ),
        showUnlinkConfirm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center", onClick: () => setShowUnlinkConfirm(false), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "relative bg-bambu-dark-secondary rounded-lg shadow-xl w-full max-w-sm mx-4 border border-bambu-dark-tertiary",
              onClick: (e) => e.stopPropagation(),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-white", children: t("spoolman.unlinkConfirmTitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("spoolman.unlinkConfirmMessage") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setShowUnlinkConfirm(false),
                      className: "flex-1 px-3 py-2 text-sm font-medium rounded transition-colors bg-bambu-dark hover:bg-bambu-dark-tertiary text-white",
                      children: t("common.cancel")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        spoolman?.onUnlinkSpool?.();
                        setShowUnlinkConfirm(false);
                      },
                      className: "flex-1 px-3 py-2 text-sm font-medium rounded transition-colors bg-red-500/20 hover:bg-red-500/30 text-red-400",
                      children: t("spoolman.unlinkSpool")
                    }
                  )
                ] })
              ] })
            }
          )
        ] })
      ]
    }
  );
}
function EmptySlotHoverCard({ children, className = "", configureSlot, inventory }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const timeoutRef = reactExports.useRef(null);
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), 80);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(false), 100);
  };
  reactExports.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative ${className}`,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        children,
        isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "\n          absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50\n          animate-in fade-in-0 zoom-in-95 duration-150\n        ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "\n            bg-bambu-dark-secondary border border-bambu-dark-tertiary\n            rounded-md shadow-lg overflow-hidden\n          ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 text-xs text-bambu-gray whitespace-nowrap", children: t("ams.emptySlot") }),
            configureSlot?.enabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  configureSlot.onConfigure?.();
                },
                className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-colors bg-bambu-blue/20 hover:bg-bambu-blue/30 text-bambu-blue",
                title: t("ams.configureSlot"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-3.5 h-3.5" }),
                  t("ams.configure")
                ]
              }
            ) }),
            inventory?.onAssignSpool && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  inventory.onAssignSpool?.();
                },
                className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-colors bg-bambu-blue/20 hover:bg-bambu-blue/30 text-bambu-blue",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5" }),
                  t("inventory.assignSpool")
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\n            absolute left-1/2 -translate-x-1/2 top-full w-0 h-0\n            border-l-[5px] border-l-transparent\n            border-r-[5px] border-r-transparent\n            border-t-[5px] border-t-bambu-dark-tertiary\n          " })
        ] })
      ]
    }
  );
}
function CopyButton({ value }) {
  const { t } = useTranslation();
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: handleCopy,
      className: "ml-2 p-1 rounded hover:bg-bambu-dark-tertiary text-bambu-gray hover:text-white transition-colors",
      title: copied ? t("printers.copied") : t("printers.copyToClipboard"),
      children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-bambu-green" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" })
    }
  );
}
function PrinterInfoModal({ printer, status, totalPrintHours, onClose }) {
  const { t } = useTranslation();
  reactExports.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);
  const rows = [];
  rows.push({
    label: t("printers.model"),
    value: printer.model ?? "—"
  });
  rows.push({
    label: t("common.status"),
    value: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${status?.connected ? "bg-bambu-green/20 text-bambu-green" : "bg-red-500/20 text-red-400"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${status?.connected ? "bg-bambu-green" : "bg-red-400"}` }),
      status?.connected ? t("printers.status.available") : t("printers.status.offline")
    ] })
  });
  if (status?.state) {
    const stateMap = {
      IDLE: "printers.status.idle",
      RUNNING: "printers.status.printing",
      PAUSE: "printers.status.paused",
      FINISH: "printers.status.finished",
      FAILED: "printers.status.error"
    };
    rows.push({
      label: t("printers.state"),
      value: t(stateMap[status.state] ?? "printers.status.unknown")
    });
  }
  rows.push({
    label: t("printers.ipAddress"),
    value: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: printer.ip_address }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { value: printer.ip_address })
    ] })
  });
  rows.push({
    label: t("printers.serialNumber"),
    value: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono truncate", children: printer.serial_number }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { value: printer.serial_number })
    ] })
  });
  if (status?.wired_network) {
    rows.push({
      label: t("printers.networkLabel", "Network"),
      value: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cable, { className: "w-4 h-4 text-bambu-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-green", children: t("printers.connection.ethernet", "Ethernet") })
      ] })
    });
  } else if (status?.wifi_signal != null) {
    const wifi = getWifiStrength(status.wifi_signal);
    rows.push({
      label: t("printers.wifiSignalLabel"),
      value: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Signal, { className: `w-4 h-4 ${wifi.color}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: wifi.color, children: t(wifi.labelKey) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray text-xs", children: [
          "(",
          status.wifi_signal,
          " dBm)"
        ] })
      ] })
    });
  }
  rows.push({
    label: t("printers.firmware"),
    value: status?.firmware_version ?? "—"
  });
  if (status?.developer_mode != null) {
    rows.push({
      label: t("printers.developerMode"),
      value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${status.developer_mode ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark-tertiary text-bambu-gray"}`, children: status.developer_mode ? t("printers.enabled") : t("printers.disabled") })
    });
  }
  rows.push({
    label: t("printers.nozzleCount"),
    value: printer.nozzle_count
  });
  if (status?.sdcard != null) {
    rows.push({
      label: t("printers.sdCard"),
      value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${status.sdcard ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark-tertiary text-bambu-gray"}`, children: status.sdcard ? t("printers.inserted") : t("printers.notInserted") })
    });
  }
  rows.push({
    label: t("printers.autoArchive"),
    value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${printer.auto_archive ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark-tertiary text-bambu-gray"}`, children: printer.auto_archive ? t("printers.enabled") : t("printers.disabled") })
  });
  if (totalPrintHours != null && totalPrintHours > 0) {
    rows.push({
      label: t("printers.totalPrintHours"),
      value: `${Math.round(totalPrintHours)}h`
    });
  }
  if (printer.location) {
    rows.push({
      label: t("printers.sort.location"),
      value: printer.location
    });
  }
  rows.push({
    label: t("printers.addedOn"),
    value: formatDateOnly(printer.created_at)
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
      role: "dialog",
      "aria-modal": "true",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: printer.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-bambu-dark rounded flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: getPrinterImage(printer.model),
            alt: printer.model ?? printer.name,
            className: "h-24 object-contain"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 py-2.5 border-b border-bambu-dark-tertiary last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray whitespace-nowrap", children: row.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white text-right", children: row.value })
        ] }, i)) })
      ] }) })
    }
  );
}
function isLightFilamentColor(hex) {
  if (!hex || hex.length < 6) return false;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6;
}
function FilamentSlotCircle({ trayColor, trayType, isEmpty, slotNumber }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "w-3.5 h-3.5 rounded-full mx-auto mb-0.5 border-2 flex items-center justify-center",
      style: {
        backgroundColor: trayColor ? `#${trayColor}` : trayType ? "#333" : "transparent",
        borderColor: isEmpty ? "#666" : "rgba(255,255,255,0.1)",
        borderStyle: isEmpty ? "dashed" : "solid"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-[6px] font-bold leading-none select-none",
          style: { color: trayColor && isLightFilamentColor(trayColor) ? "#000" : "#fff" },
          children: slotNumber
        }
      )
    }
  );
}
const BAMBU_FILAMENT_COLORS = {
  // PLA Basic (A00)
  "A00-W1": "Jade White",
  "A00-P0": "Beige",
  "A00-D2": "Light Gray",
  "A00-Y0": "Yellow",
  "A00-Y2": "Sunflower Yellow",
  "A00-A1": "Pumpkin Orange",
  "A00-A0": "Orange",
  "A00-Y4": "Gold",
  "A00-G3": "Bright Green",
  "A00-G1": "Bambu Green",
  "A00-G2": "Mistletoe Green",
  "A00-R3": "Hot Pink",
  "A00-P6": "Magenta",
  "A00-R0": "Red",
  "A00-R2": "Maroon Red",
  "A00-P5": "Purple",
  "A00-P2": "Indigo Purple",
  "A00-B5": "Turquoise",
  "A00-B8": "Cyan",
  "A00-B3": "Cobalt Blue",
  "A00-N0": "Brown",
  "A00-N1": "Cocoa Brown",
  "A00-Y3": "Bronze",
  "A00-D0": "Gray",
  "A00-D1": "Silver",
  "A00-B1": "Blue Grey",
  "A00-D3": "Dark Gray",
  "A00-K0": "Black",
  // PLA Basic Gradient (A00-M*)
  "A00-M3": "Pink Citrus",
  "A00-M6": "Dusk Glare",
  "A00-M0": "Arctic Whisper",
  "A00-M1": "Solar Breeze",
  "A00-M5": "Blueberry Bubblegum",
  "A00-M4": "Mint Lime",
  "A00-M2": "Ocean to Meadow",
  "A00-M7": "Cotton Candy Cloud",
  // PLA Lite (A18)
  "A18-K0": "Black",
  "A18-D0": "Gray",
  "A18-W0": "White",
  "A18-R0": "Red",
  "A18-Y0": "Yellow",
  "A18-B0": "Cyan",
  "A18-B1": "Blue",
  "A18-P0": "Matte Beige",
  // PLA Matte (A01)
  "A01-W2": "Ivory White",
  "A01-W3": "Bone White",
  "A01-Y2": "Lemon Yellow",
  "A01-A2": "Mandarin Orange",
  "A01-P3": "Sakura Pink",
  "A01-P4": "Lilac Purple",
  "A01-R3": "Plum",
  "A01-R1": "Scarlet Red",
  "A01-R4": "Dark Red",
  "A01-G0": "Apple Green",
  "A01-G1": "Grass Green",
  "A01-G7": "Dark Green",
  "A01-B4": "Ice Blue",
  "A01-B0": "Sky Blue",
  "A01-B3": "Marine Blue",
  "A01-B6": "Dark Blue",
  "A01-Y3": "Desert Tan",
  "A01-N1": "Latte Brown",
  "A01-N3": "Caramel",
  "A01-R2": "Terracotta",
  "A01-N2": "Dark Brown",
  "A01-N0": "Dark Chocolate",
  "A01-D3": "Ash Gray",
  "A01-D0": "Nardo Gray",
  "A01-K1": "Charcoal",
  // PLA Glow (A12)
  "A12-G0": "Green",
  "A12-R0": "Pink",
  "A12-A0": "Orange",
  "A12-Y0": "Yellow",
  "A12-B0": "Blue",
  // PLA Marble (A07)
  "A07-R5": "Red Granite",
  "A07-D4": "White Marble",
  // PLA Aero (A11)
  "A11-W0": "White",
  "A11-K0": "Black",
  // PLA Sparkle (A08)
  "A08-G3": "Alpine Green Sparkle",
  "A08-D5": "Slate Gray Sparkle",
  "A08-B7": "Royal Purple Sparkle",
  "A08-R2": "Crimson Red Sparkle",
  "A08-K2": "Onyx Black Sparkle",
  "A08-Y1": "Classic Gold Sparkle",
  // PLA Metal (A02)
  "A02-B2": "Cobalt Blue Metallic",
  "A02-G2": "Oxide Green Metallic",
  "A02-Y1": "Iridium Gold Metallic",
  "A02-D2": "Iron Gray Metallic",
  // PLA Translucent (A17)
  "A17-B1": "Blue",
  "A17-A0": "Orange",
  "A17-P0": "Purple",
  // PLA Silk+ (A06)
  "A06-Y1": "Gold",
  "A06-D0": "Titan Gray",
  "A06-D1": "Silver",
  "A06-W0": "White",
  "A06-R0": "Candy Red",
  "A06-G0": "Candy Green",
  "A06-G1": "Mint",
  "A06-B1": "Blue",
  "A06-B0": "Baby Blue",
  "A06-P0": "Purple",
  "A06-R1": "Rose Gold",
  "A06-R2": "Pink",
  "A06-Y0": "Champagne",
  // PLA Silk Multi-Color (A05)
  "A05-M8": "Dawn Radiance",
  "A05-M4": "Aurora Purple",
  "A05-M1": "South Beach",
  "A05-T3": "Neon City",
  "A05-T2": "Midnight Blaze",
  "A05-T1": "Gilded Rose",
  "A05-T4": "Blue Hawaii",
  "A05-T5": "Velvet Eclipse",
  // PLA Galaxy (A15)
  "A15-B0": "Purple",
  "A15-G0": "Green",
  "A15-G1": "Nebulae",
  "A15-R0": "Brown",
  // PLA Wood (A16)
  "A16-K0": "Black Walnut",
  "A16-R0": "Rosewood",
  "A16-N0": "Clay Brown",
  "A16-G0": "Classic Birch",
  "A16-W0": "White Oak",
  "A16-Y0": "Ochre Yellow",
  // PLA-CF (A50)
  "A50-D6": "Lava Gray",
  "A50-K0": "Black",
  "A50-B6": "Royal Blue",
  // PLA Tough+ (A10)
  "A10-W0": "White",
  "A10-D0": "Gray",
  // PLA Tough (A09)
  "A09-B5": "Lavender Blue",
  "A09-B4": "Light Blue",
  "A09-A0": "Orange",
  "A09-D1": "Silver",
  "A09-R3": "Vermilion Red",
  "A09-Y0": "Yellow",
  // PETG HF (G02)
  "G02-K0": "Black",
  "G02-W0": "White",
  "G02-R0": "Red",
  "G02-D0": "Gray",
  "G02-D1": "Dark Gray",
  "G02-Y1": "Cream",
  "G02-Y0": "Yellow",
  "G02-A0": "Orange",
  "G02-N1": "Peanut Brown",
  "G02-G1": "Lime Green",
  "G02-G0": "Green",
  "G02-G2": "Forest Green",
  "G02-B1": "Lake Blue",
  "G02-B0": "Blue",
  // PETG Translucent (G01)
  "G01-G1": "Translucent Teal",
  "G01-B0": "Translucent Light Blue",
  "G01-C0": "Clear",
  "G01-D0": "Translucent Gray",
  "G01-G0": "Translucent Olive",
  "G01-N0": "Translucent Brown",
  "G01-A0": "Translucent Orange",
  "G01-P1": "Translucent Pink",
  "G01-P0": "Translucent Purple",
  // PETG-CF (G50)
  "G50-P7": "Violet Purple",
  "G50-K0": "Black",
  // ABS (B00)
  "B00-D1": "Silver",
  "B00-K0": "Black",
  "B00-W0": "White",
  "B00-G6": "Bambu Green",
  "B00-G7": "Olive",
  "B00-Y1": "Tangerine Yellow",
  "B00-A0": "Orange",
  "B00-R0": "Red",
  "B00-B4": "Azure",
  "B00-B0": "Blue",
  "B00-B6": "Navy Blue",
  // ABS-GF (B50)
  "B50-A0": "Orange",
  "B50-K0": "Black",
  // ASA (B01)
  "B01-W0": "White",
  "B01-K0": "Black",
  "B01-D0": "Gray",
  // ASA Aero (B02)
  "B02-W0": "White",
  // PC (C00)
  "C00-C1": "Transparent",
  "C00-C0": "Clear Black",
  "C00-K0": "Black",
  "C00-W0": "White",
  // PC FR (C01)
  "C01-K0": "Black",
  // TPU for AMS (U02)
  "U02-B0": "Blue",
  "U02-D0": "Gray",
  "U02-K0": "Black",
  // PAHT-CF (N04)
  "N04-K0": "Black",
  // PA6-GF (N08)
  "N08-K0": "Black",
  // Support for PLA/PETG (S02, S05)
  "S02-W0": "Nature",
  "S02-W1": "White",
  "S05-C0": "Black",
  // Support for ABS (S06)
  "S06-W0": "White",
  // Support for PA/PET (S03)
  "S03-G1": "Green",
  // PVA (S04)
  "S04-Y0": "Clear"
};
const BAMBU_COLOR_CODE_FALLBACK = {
  "W0": "White",
  "W1": "Jade White",
  "W2": "Ivory White",
  "W3": "Bone White",
  "Y0": "Yellow",
  "Y1": "Gold",
  "Y2": "Sunflower Yellow",
  "Y3": "Bronze",
  "Y4": "Gold",
  "A0": "Orange",
  "A1": "Pumpkin Orange",
  "A2": "Mandarin Orange",
  "R0": "Red",
  "R1": "Scarlet Red",
  "R2": "Maroon Red",
  "R3": "Hot Pink",
  "R4": "Dark Red",
  "R5": "Red Granite",
  "P0": "Beige",
  "P1": "Pink",
  "P2": "Indigo Purple",
  "P3": "Sakura Pink",
  "P4": "Lilac Purple",
  "P5": "Purple",
  "P6": "Magenta",
  "P7": "Violet Purple",
  "B0": "Blue",
  "B1": "Blue Grey",
  "B2": "Cobalt Blue",
  "B3": "Cobalt Blue",
  "B4": "Ice Blue",
  "B5": "Turquoise",
  "B6": "Navy Blue",
  "B7": "Royal Purple",
  "B8": "Cyan",
  "G0": "Green",
  "G1": "Grass Green",
  "G2": "Mistletoe Green",
  "G3": "Bright Green",
  "G6": "Bambu Green",
  "G7": "Dark Green",
  "N0": "Brown",
  "N1": "Peanut Brown",
  "N2": "Dark Brown",
  "N3": "Caramel",
  "D0": "Gray",
  "D1": "Silver",
  "D2": "Light Gray",
  "D3": "Dark Gray",
  "D4": "White Marble",
  "D5": "Slate Gray",
  "D6": "Lava Gray",
  "K0": "Black",
  "K1": "Charcoal",
  "K2": "Onyx Black",
  "C0": "Clear Black",
  "C1": "Transparent",
  "M0": "Arctic Whisper",
  "M1": "Solar Breeze",
  "M2": "Ocean to Meadow",
  "M3": "Pink Citrus",
  "M4": "Aurora Purple",
  "M5": "Blueberry Bubblegum",
  "M6": "Dusk Glare",
  "M7": "Cotton Candy Cloud",
  "M8": "Dawn Radiance",
  "T1": "Gilded Rose",
  "T2": "Midnight Blaze",
  "T3": "Neon City",
  "T4": "Blue Hawaii",
  "T5": "Velvet Eclipse"
};
function getBambuColorName(trayIdName) {
  if (!trayIdName) return null;
  if (BAMBU_FILAMENT_COLORS[trayIdName]) {
    return BAMBU_FILAMENT_COLORS[trayIdName];
  }
  const parts = trayIdName.split("-");
  if (parts.length < 2) return null;
  const colorCode = parts[1];
  return BAMBU_COLOR_CODE_FALLBACK[colorCode] || null;
}
function formatKValue(k) {
  const value = k ?? 0.02;
  return value.toFixed(3);
}
function NozzleBadge({ side }) {
  const { mode } = useTheme();
  const bgColor = mode === "dark" ? "#1a4d2e" : "#e7f5e9";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold rounded",
      style: { backgroundColor: bgColor, color: "#00ae42" },
      children: side
    }
  );
}
function nozzleTypeName(type, t) {
  if (!type) return "";
  if (type.includes("hardened")) return t("printers.nozzleHardenedSteel");
  if (type.includes("stainless")) return t("printers.nozzleStainlessSteel");
  if (type.includes("tungsten")) return t("printers.nozzleTungstenCarbide");
  if (type.length >= 4) {
    const material = type.slice(2, 4);
    if (material === "00") return t("printers.nozzleStainlessSteel");
    if (material === "01") return t("printers.nozzleHardenedSteel");
    if (material === "05") return t("printers.nozzleTungstenCarbide");
  }
  if (type === "00") return t("printers.nozzleStainlessSteel");
  if (type === "01") return t("printers.nozzleHardenedSteel");
  if (type === "05") return t("printers.nozzleTungstenCarbide");
  if (type.startsWith("H")) return t("printers.nozzleHardenedSteel");
  return type;
}
function nozzleFlowName(type, t) {
  if (!type) return "";
  if (type.startsWith("HH")) return t("printers.nozzleHighFlow");
  if (type.startsWith("HS")) return t("printers.nozzleStandardFlow");
  return "";
}
function NozzleSlotHoverCard({ slot, index, activeStatus, filamentName, children }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [position, setPosition] = reactExports.useState("top");
  const triggerRef = reactExports.useRef(null);
  const cardRef = reactExports.useRef(null);
  const timeoutRef = reactExports.useRef(null);
  const isEmpty = !slot.nozzle_diameter && !slot.nozzle_type;
  const isMounted = slot.stat === 1;
  reactExports.useEffect(() => {
    if (isVisible && triggerRef.current && cardRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const cardHeight = cardRef.current.offsetHeight;
      const headerHeight = 56;
      const spaceAbove = triggerRect.top - headerHeight;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      if (spaceAbove < cardHeight + 12 && spaceBelow > spaceAbove) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  }, [isVisible]);
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), 80);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(false), 100);
  };
  reactExports.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  const filamentCss = parseFilamentColor(slot.filament_color);
  const typeFull = nozzleTypeName(slot.nozzle_type, t);
  const flowFull = nozzleFlowName(slot.nozzle_type, t);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: triggerRef,
      className: "relative",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        children,
        isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: cardRef,
            className: `
            absolute left-1/2 -translate-x-1/2 z-50
            ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"}
            animate-in fade-in-0 zoom-in-95 duration-150
          `,
            style: { maxWidth: "calc(100vw - 24px)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-44 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl overflow-hidden backdrop-blur-sm", children: isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 text-xs text-bambu-gray text-center whitespace-nowrap", children: [
                "Slot ",
                index + 1,
                " — Empty"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.nozzleDiameter") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white font-semibold", children: [
                    slot.nozzle_diameter,
                    " mm"
                  ] })
                ] }),
                typeFull && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.nozzleType") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white font-semibold truncate max-w-[100px]", children: typeFull })
                ] }),
                flowFull && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.nozzleFlow") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white font-semibold", children: flowFull })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.nozzleStatus") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold px-1.5 py-0.5 rounded ${activeStatus || isMounted ? "bg-green-900/50 text-green-400" : "bg-bambu-dark-tertiary text-bambu-gray"}`, children: activeStatus ? t("printers.nozzleActive") : isMounted ? t("printers.nozzleMounted") : t("printers.nozzleDocked") })
                ] }),
                slot.wear != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.nozzleWear") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white font-semibold", children: [
                    slot.wear,
                    "%"
                  ] })
                ] }),
                slot.max_temp > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.nozzleMaxTemp") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white font-semibold", children: [
                    slot.max_temp,
                    "°C"
                  ] })
                ] }),
                slot.serial_number && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.nozzleSerial") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-mono truncate max-w-[80px]", children: slot.serial_number })
                ] }),
                (filamentCss || slot.filament_type) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.nozzleFilament") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                    filamentCss && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-sm border border-white/20", style: { backgroundColor: filamentCss } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-semibold truncate max-w-[100px]", children: filamentName || slot.filament_type || slot.filament_id || "" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `
              absolute left-1/2 -translate-x-1/2 w-0 h-0
              border-l-[6px] border-l-transparent
              border-r-[6px] border-r-transparent
              ${position === "top" ? "top-full border-t-[6px] border-t-bambu-dark-tertiary" : "bottom-full border-b-[6px] border-b-bambu-dark-tertiary"}
            `
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function DualNozzleHoverCard({ leftSlot, rightSlot, activeNozzle, filamentInfo, children }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [position, setPosition] = reactExports.useState("top");
  const triggerRef = reactExports.useRef(null);
  const cardRef = reactExports.useRef(null);
  const timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isVisible && triggerRef.current && cardRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const cardHeight = cardRef.current.offsetHeight;
      const headerHeight = 56;
      const spaceAbove = triggerRect.top - headerHeight;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      if (spaceAbove < cardHeight + 12 && spaceBelow > spaceAbove) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  }, [isVisible]);
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), 80);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(false), 100);
  };
  reactExports.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  if (!leftSlot && !rightSlot) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  const renderColumn = (slot, side) => {
    const isActive = activeNozzle === side;
    const typeFull = nozzleTypeName(slot.nozzle_type, t);
    const flowFull = nozzleFlowName(slot.nozzle_type, t);
    const filamentCss = parseFilamentColor(slot.filament_color);
    const filamentName = slot.filament_id ? filamentInfo?.[slot.filament_id]?.name : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] font-bold pb-1 border-b border-bambu-dark-tertiary/50 ${isActive ? "text-amber-400" : "text-bambu-gray"}`, children: side === "L" ? t("common.left") : t("common.right") }),
      slot.nozzle_diameter && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.nozzleDiameter") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white font-semibold", children: [
          slot.nozzle_diameter,
          " mm"
        ] })
      ] }),
      typeFull && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.nozzleType") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-semibold", children: typeFull })
      ] }),
      flowFull && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.nozzleFlow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-semibold", children: flowFull })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.nozzleStatus") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold px-1.5 py-0.5 rounded ${isActive ? "bg-green-900/50 text-green-400" : "bg-bambu-dark-tertiary text-bambu-gray"}`, children: isActive ? t("printers.nozzleActive") : t("printers.nozzleIdle") })
      ] }),
      slot.wear != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.nozzleWear") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white font-semibold", children: [
          slot.wear,
          "%"
        ] })
      ] }),
      side === "R" && slot.max_temp > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.nozzleMaxTemp") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white font-semibold", children: [
          slot.max_temp,
          "°C"
        ] })
      ] }),
      side === "R" && slot.serial_number && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.nozzleSerial") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-mono", children: slot.serial_number })
      ] }),
      (filamentCss || slot.filament_type || slot.filament_id) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.nozzleFilament") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          filamentCss && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-sm border border-white/20", style: { backgroundColor: filamentCss } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-semibold truncate max-w-[100px]", children: filamentName || slot.filament_type || slot.filament_id || "" })
        ] })
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: triggerRef,
      className: "relative flex-1",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        children,
        isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: cardRef,
            className: `
            absolute left-1/2 -translate-x-1/2 z-50
            ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"}
            animate-in fade-in-0 zoom-in-95 duration-150
          `,
            style: { maxWidth: "calc(100vw - 24px)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-96 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl overflow-hidden backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 flex gap-3", children: [
                leftSlot && renderColumn(leftSlot, "L"),
                leftSlot && rightSlot && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px bg-bambu-dark-tertiary/50" }),
                rightSlot && renderColumn(rightSlot, "R")
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `
              absolute left-1/2 -translate-x-1/2 w-0 h-0
              border-l-[6px] border-l-transparent
              border-r-[6px] border-r-transparent
              ${position === "top" ? "top-full border-t-[6px] border-t-bambu-dark-tertiary" : "bottom-full border-b-[6px] border-b-bambu-dark-tertiary"}
            `
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function NozzleRackCard({ slots, filamentInfo }) {
  const { t } = useTranslation();
  const rackNozzles = slots.filter((s) => s.id >= 2);
  const RACK_SIZE = 6;
  const minRackId = rackNozzles.length > 0 ? Math.min(...rackNozzles.map((s) => s.id)) : 16;
  const rackSlots = Array.from(
    { length: RACK_SIZE },
    (_, i) => rackNozzles.find((s) => s.id === minRackId + i) ?? {
      id: -(i + 1),
      nozzle_type: "",
      nozzle_diameter: "",
      wear: null,
      stat: null,
      max_temp: 0,
      serial_number: "",
      filament_color: "",
      filament_id: "",
      filament_type: ""
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-2.5 py-1.5 bg-bambu-dark rounded-lg flex-[2_1_190px] flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-bambu-gray mb-1", children: t("printers.nozzleRack") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-[3px] justify-center", children: rackSlots.map((slot, i) => {
      const isEmpty = !slot.nozzle_diameter && !slot.nozzle_type;
      const filamentBg = !isEmpty ? parseFilamentColor(slot.filament_color) : null;
      const lightBg = filamentBg ? isLightColor(slot.filament_color) : false;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(NozzleSlotHoverCard, { slot, index: i, filamentName: slot.filament_id ? filamentInfo?.[slot.filament_id]?.name : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-7 h-7 rounded flex items-center justify-center cursor-default transition-colors border-b-2 ${isEmpty ? "bg-bambu-dark-tertiary/20 border-bambu-dark-tertiary/20" : "bg-bambu-dark-tertiary/40 border-bambu-dark-tertiary/40"}`,
          style: filamentBg ? { backgroundColor: filamentBg } : void 0,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-[10px] font-semibold ${isEmpty ? "text-bambu-gray/30" : lightBg ? "text-black/80" : "text-white"}`,
              style: filamentBg && !lightBg ? { textShadow: "0 1px 3px rgba(0,0,0,0.9)" } : void 0,
              children: isEmpty ? "—" : slot.nozzle_diameter || "?"
            }
          )
        }
      ) }, slot.id >= 0 ? slot.id : `empty-${i}`);
    }) })
  ] });
}
function WaterDropEmpty({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 36 54", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.8131 0.00538C18.4463 -0.15091 20.3648 3.14642 20.8264 3.84781C25.4187 10.816 35.3089 26.9368 35.9383 34.8694C37.4182 53.5822 11.882 61.3357 2.53721 45.3789C-1.73471 38.0791 0.016 32.2049 3.178 25.0232C6.99221 16.3662 12.6411 7.90372 17.8131 0.00538ZM18.3738 7.24807L17.5881 7.48441C14.4452 12.9431 10.917 18.2341 8.19369 23.9368C4.6808 31.29 1.18317 38.5479 7.69403 45.5657C17.3058 55.9228 34.9847 46.8808 31.4604 32.8681C29.2558 24.0969 22.4207 15.2913 18.3776 7.24807H18.3738Z", fill: "#C3C2C1" }) });
}
function WaterDropHalf({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 35 53", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.3165 0.0038C17.932 -0.14959 19.7971 3.08645 20.2458 3.77481C24.7103 10.6135 34.3251 26.4346 34.937 34.2198C36.3757 52.5848 11.5505 60.1942 2.46584 44.534C-1.68714 37.3735 0.0148 31.6085 3.08879 24.5603C6.79681 16.0605 12.2884 7.75907 17.3165 0.0038ZM17.8615 7.11561L17.0977 7.34755C14.0423 12.7048 10.6124 17.8974 7.96483 23.4941C4.54975 30.7107 1.14949 37.8337 7.47908 44.721C16.8233 54.8856 34.01 46.0117 30.5838 32.2595C28.4405 23.6512 21.7957 15.0093 17.8652 7.11561H17.8615Z", fill: "#C3C2C1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5.03547 30.112C9.64453 30.4936 11.632 35.7985 16.4154 35.791C19.6339 35.7873 20.2161 33.2283 22.3853 31.6197C31.6776 24.7286 33.5835 37.4894 27.9881 44.4254C18.1878 56.5653 -1.16063 44.6013 5.03917 30.1158L5.03547 30.112Z", fill: "#1F8FEB" })
  ] });
}
function WaterDropFull({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 36 54", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.9625 4.48059L4.77216 26.3154L2.08228 40.2175L10.0224 50.8414H23.1594L33.3246 42.1693V30.2455L17.9625 4.48059Z", fill: "#1F8FEB" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.7948 0.00538C18.4273 -0.15091 20.3438 3.14642 20.8048 3.84781C25.3921 10.816 35.2715 26.9368 35.9001 34.8694C37.3784 53.5822 11.8702 61.3357 2.53562 45.3789C-1.73163 38.0829 0.0134 32.2087 3.1757 25.027C6.98574 16.3662 12.6284 7.90372 17.7948 0.00538ZM18.3549 7.24807L17.57 7.48441C14.4306 12.9431 10.9063 18.2341 8.1859 23.9368C4.67686 31.29 1.18305 38.5479 7.68679 45.5657C17.2881 55.9228 34.9476 46.8808 31.4271 32.8681C29.2249 24.0969 22.3974 15.2913 18.3587 7.24807H18.3549Z", fill: "#C3C2C1" })
  ] });
}
function ThermometerEmpty({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 12 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 0.5C4.6 0.5 3.5 1.6 3.5 3V12.1C2.6 12.8 2 13.9 2 15C2 17.2 3.8 19 6 19C8.2 19 10 17.2 10 15C10 13.9 9.4 12.8 8.5 12.1V3C8.5 1.6 7.4 0.5 6 0.5Z", stroke: "#C3C2C1", strokeWidth: "1", fill: "none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "15", r: "2.5", stroke: "#C3C2C1", strokeWidth: "1", fill: "none" })
  ] });
}
function ThermometerHalf({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 12 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4.5", y: "8", width: "3", height: "4.5", fill: "#d4a017", rx: "0.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "15", r: "2", fill: "#d4a017" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 0.5C4.6 0.5 3.5 1.6 3.5 3V12.1C2.6 12.8 2 13.9 2 15C2 17.2 3.8 19 6 19C8.2 19 10 17.2 10 15C10 13.9 9.4 12.8 8.5 12.1V3C8.5 1.6 7.4 0.5 6 0.5Z", stroke: "#C3C2C1", strokeWidth: "1", fill: "none" })
  ] });
}
function ThermometerFull({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 12 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4.5", y: "3", width: "3", height: "9.5", fill: "#c62828", rx: "0.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "15", r: "2", fill: "#c62828" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 0.5C4.6 0.5 3.5 1.6 3.5 3V12.1C2.6 12.8 2 13.9 2 15C2 17.2 3.8 19 6 19C8.2 19 10 17.2 10 15C10 13.9 9.4 12.8 8.5 12.1V3C8.5 1.6 7.4 0.5 6 0.5Z", stroke: "#C3C2C1", strokeWidth: "1", fill: "none" })
  ] });
}
function HeaterThermometer({ className, color, isHeating }) {
  const colorMap = {
    "text-orange-400": "#fb923c",
    "text-blue-400": "#60a5fa",
    "text-green-400": "#4ade80"
  };
  const fillColor = colorMap[color] || "#888";
  const glowStyle = isHeating ? {
    filter: `drop-shadow(0 0 4px ${fillColor}) drop-shadow(0 0 8px ${fillColor})`
  } : {};
  if (isHeating) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, style: glowStyle, viewBox: "0 0 12 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4.5", y: "3", width: "3", height: "9.5", fill: fillColor, rx: "0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "15", r: "2", fill: fillColor }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 0.5C4.6 0.5 3.5 1.6 3.5 3V12.1C2.6 12.8 2 13.9 2 15C2 17.2 3.8 19 6 19C8.2 19 10 17.2 10 15C10 13.9 9.4 12.8 8.5 12.1V3C8.5 1.6 7.4 0.5 6 0.5Z", stroke: fillColor, strokeWidth: "1", fill: "none" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 12 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 0.5C4.6 0.5 3.5 1.6 3.5 3V12.1C2.6 12.8 2 13.9 2 15C2 17.2 3.8 19 6 19C8.2 19 10 17.2 10 15C10 13.9 9.4 12.8 8.5 12.1V3C8.5 1.6 7.4 0.5 6 0.5Z", stroke: fillColor, strokeWidth: "1", fill: "none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "15", r: "2.5", stroke: fillColor, strokeWidth: "1", fill: "none" })
  ] });
}
function HumidityIndicator({ humidity, goodThreshold = 40, fairThreshold = 60, onClick, compact }) {
  const humidityValue = typeof humidity === "string" ? parseInt(humidity, 10) : humidity;
  const good = typeof goodThreshold === "number" ? goodThreshold : 40;
  const fair = typeof fairThreshold === "number" ? fairThreshold : 60;
  let textColor;
  let statusText;
  if (isNaN(humidityValue)) {
    textColor = "#C3C2C1";
    statusText = "Unknown";
  } else if (humidityValue <= good) {
    textColor = "#22a352";
    statusText = "Good";
  } else if (humidityValue <= fair) {
    textColor = "#d4a017";
    statusText = "Fair";
  } else {
    textColor = "#c62828";
    statusText = "Bad";
  }
  let DropComponent;
  if (isNaN(humidityValue)) {
    DropComponent = WaterDropEmpty;
  } else if (humidityValue <= good) {
    DropComponent = WaterDropEmpty;
  } else if (humidityValue <= fair) {
    DropComponent = WaterDropHalf;
  } else {
    DropComponent = WaterDropFull;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: `flex items-center gap-1 ${onClick ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}`,
      title: `Humidity: ${humidityValue}% - ${statusText}${onClick ? " (click for history)" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropComponent, { className: compact ? "w-2.5 h-3" : "w-3 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-medium tabular-nums ${compact ? "text-[10px]" : "text-xs"}`, style: { color: textColor }, children: [
          humidityValue,
          "%"
        ] })
      ]
    }
  );
}
function TemperatureIndicator({ temp, goodThreshold = 28, fairThreshold = 35, onClick, compact }) {
  const good = typeof goodThreshold === "number" ? goodThreshold : 28;
  const fair = typeof fairThreshold === "number" ? fairThreshold : 35;
  let textColor;
  let statusText;
  let ThermoComponent;
  if (temp <= good) {
    textColor = "#22a352";
    statusText = "Good";
    ThermoComponent = ThermometerEmpty;
  } else if (temp <= fair) {
    textColor = "#d4a017";
    statusText = "Fair";
    ThermoComponent = ThermometerHalf;
  } else {
    textColor = "#c62828";
    statusText = "Bad";
    ThermoComponent = ThermometerFull;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: `flex items-center gap-1 ${onClick ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}`,
      title: `Temperature: ${temp}°C - ${statusText}${onClick ? " (click for history)" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThermoComponent, { className: compact ? "w-2.5 h-3" : "w-3 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `tabular-nums text-right ${compact ? "text-[10px] w-8" : "w-12"}`, style: { color: textColor }, children: [
          temp,
          "°C"
        ] })
      ]
    }
  );
}
function getAmsLabel(amsId, trayCount) {
  const id = typeof amsId === "string" ? parseInt(amsId, 10) : amsId;
  const safeId = isNaN(id) ? 0 : id;
  const isHt = trayCount === 1;
  const normalizedId = safeId >= 128 ? safeId - 128 : safeId;
  const letter = String.fromCharCode(65 + normalizedId);
  return isHt ? `HT-${letter}` : `AMS-${letter}`;
}
function isBambuLabSpool(tray) {
  if (!tray) return false;
  if (tray.tray_uuid && tray.tray_uuid !== "00000000000000000000000000000000") {
    return true;
  }
  if (tray.tag_uid && tray.tag_uid !== "0000000000000000") {
    return true;
  }
  return false;
}
function CoverImage({ url, printName }) {
  const { t } = useTranslation();
  const [loaded, setLoaded] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const [showOverlay, setShowOverlay] = reactExports.useState(false);
  const cacheBustedUrl = reactExports.useMemo(() => {
    if (!url) return null;
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}v=${encodeURIComponent(printName || Date.now().toString())}`;
  }, [url, printName]);
  reactExports.useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [cacheBustedUrl]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-bambu-dark-tertiary flex items-center justify-center ${cacheBustedUrl && loaded ? "cursor-pointer" : ""}`,
        onClick: () => cacheBustedUrl && loaded && setShowOverlay(true),
        children: cacheBustedUrl && !error ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: cacheBustedUrl,
              alt: t("printers.printPreview"),
              className: `w-full h-full object-cover ${loaded ? "block" : "hidden"}`,
              onLoad: () => setLoaded(true),
              onError: () => setError(true)
            }
          ),
          !loaded && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-8 h-8 text-bambu-gray" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-8 h-8 text-bambu-gray" })
      }
    ),
    showOverlay && cacheBustedUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-8",
        onClick: () => setShowOverlay(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl max-h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: cacheBustedUrl,
              alt: t("printers.printPreview"),
              className: "max-w-full max-h-[80vh] rounded-lg shadow-2xl"
            }
          ),
          printName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-center mt-4 text-lg", children: printName })
        ] })
      }
    )
  ] });
}
function StatusSummaryBar({ printers }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [cacheTick, setCacheTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let pending = false;
    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(() => {
          setCacheTick((t2) => t2 + 1);
          pending = false;
        });
      }
    });
    return () => unsubscribe();
  }, [queryClient]);
  const { counts, nextFinish } = reactExports.useMemo(() => {
    let printing = 0;
    let idle = 0;
    let offline = 0;
    let loading = 0;
    let problem = 0;
    let nextPrinterName = null;
    let nextRemainingMin = null;
    let nextProgress = 0;
    printers?.forEach((printer) => {
      const status = queryClient.getQueryData(["printerStatus", printer.id]);
      if (status === void 0) {
        loading++;
      } else if (!status.connected) {
        offline++;
      } else {
        if (status.hms_errors && filterKnownHMSErrors(status.hms_errors).length > 0) {
          problem++;
        }
        if (status.state === "RUNNING") {
          printing++;
          if (status.remaining_time != null && status.remaining_time > 0) {
            if (nextRemainingMin === null || status.remaining_time < nextRemainingMin) {
              nextRemainingMin = status.remaining_time;
              nextPrinterName = printer.name;
              nextProgress = status.progress || 0;
            }
          }
        } else {
          idle++;
        }
      }
    });
    return {
      counts: { printing, idle, offline, loading, problem, total: printers?.length || 0 },
      nextFinish: nextPrinterName && nextRemainingMin ? { name: nextPrinterName, remainingMin: nextRemainingMin, progress: nextProgress } : null
    };
  }, [printers, queryClient, cacheTick]);
  if (!printers?.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 gap-y-2 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${counts.idle > 0 ? "bg-bambu-green" : "bg-gray-500"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: counts.idle }),
        " ",
        t("printers.status.available").toLowerCase()
      ] })
    ] }),
    counts.printing > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-bambu-green animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: counts.printing }),
        " ",
        t("printers.status.printing").toLowerCase()
      ] })
    ] }),
    counts.offline > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: counts.offline }),
        " ",
        t("printers.status.offline").toLowerCase()
      ] })
    ] }),
    counts.problem > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-status-error" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: counts.problem }),
        " ",
        t("printers.status.problem").toLowerCase()
      ] })
    ] }),
    nextFinish && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-4 bg-bambu-dark-tertiary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-green font-medium", children: [
            t("printers.nextAvailable"),
            ":"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: nextFinish.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-16 bg-bambu-dark-tertiary rounded-full h-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-bambu-green h-1.5 rounded-full transition-all",
              style: { width: `${nextFinish.progress}%` }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-medium", children: [
            Math.round(nextFinish.progress),
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
            "(",
            formatDuration(nextFinish.remainingMin * 60),
            ")"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function getStatusDisplay(state, stg_cur_name) {
  if (stg_cur_name) {
    return stg_cur_name;
  }
  switch (state) {
    case "RUNNING":
      return "Printing";
    case "PAUSE":
      return "Paused";
    case "FINISH":
      return "Finished";
    case "FAILED":
      return "Failed";
    case "IDLE":
      return "Idle";
    default:
      return state ? state.charAt(0) + state.slice(1).toLowerCase() : "Idle";
  }
}
function mapModelCode(ssdpModel) {
  if (!ssdpModel) return "";
  const modelMap = {
    // H2 Series
    "O1D": "H2D",
    "O1E": "H2D Pro",
    "O2D": "H2D Pro",
    "O1C": "H2C",
    "O1C2": "H2C",
    "O1S": "H2S",
    // X1 Series
    "BL-P001": "X1C",
    "BL-P002": "X1",
    "BL-P003": "X1E",
    // P Series
    "C11": "P1S",
    "C12": "P1P",
    "C13": "P2S",
    // A1 Series
    "N2S": "A1",
    "N1": "A1 Mini",
    // Direct matches
    "X1C": "X1C",
    "X1": "X1",
    "X1E": "X1E",
    "P1S": "P1S",
    "P1P": "P1P",
    "P2S": "P2S",
    "A1": "A1",
    "A1 Mini": "A1 Mini",
    "H2D": "H2D",
    "H2D Pro": "H2D Pro",
    "H2C": "H2C",
    "H2S": "H2S"
  };
  return modelMap[ssdpModel] || ssdpModel;
}
function AmsNameHoverCard({
  ams,
  printerId,
  label,
  amsLabels,
  canEdit,
  onSaved,
  children
}) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [position, setPosition] = reactExports.useState("top");
  const [editValue, setEditValue] = reactExports.useState("");
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [saveError, setSaveError] = reactExports.useState(null);
  const [isInputFocused, setIsInputFocused] = reactExports.useState(false);
  const triggerRef = reactExports.useRef(null);
  const cardRef = reactExports.useRef(null);
  const timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isVisible) {
      setEditValue(amsLabels?.[ams.id] ?? "");
      setSaveError(null);
      requestAnimationFrame(() => {
        if (triggerRef.current && cardRef.current) {
          const rect = triggerRef.current.getBoundingClientRect();
          const spaceAbove = rect.top - 56;
          const spaceBelow = window.innerHeight - rect.bottom;
          setPosition(spaceAbove < cardRef.current.offsetHeight + 12 && spaceBelow > spaceAbove ? "bottom" : "top");
        }
      });
    }
  }, [isVisible, amsLabels, ams.id]);
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), 80);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isInputFocused) {
      timeoutRef.current = setTimeout(() => setIsVisible(false), 200);
    }
  };
  reactExports.useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);
  const handleSave = async () => {
    if (!canEdit) return;
    setIsSaving(true);
    setSaveError(null);
    try {
      const trimmed = editValue.trim();
      if (trimmed) {
        await api.saveAmsLabel(printerId, ams.id, trimmed, ams.serial_number);
      } else {
        await api.deleteAmsLabel(printerId, ams.id, ams.serial_number);
      }
      onSaved();
      setIsVisible(false);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSaving(false);
    }
  };
  const handleClear = async () => {
    if (!canEdit) return;
    setIsSaving(true);
    setSaveError(null);
    try {
      await api.deleteAmsLabel(printerId, ams.id, ams.serial_number);
      onSaved();
      setIsVisible(false);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: triggerRef,
      className: "relative inline-block",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        children,
        isVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: cardRef,
            className: `
            absolute left-0 z-50
            ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"}
            animate-in fade-in-0 zoom-in-95 duration-150
          `,
            style: { maxWidth: "calc(100vw - 24px)" },
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-52 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl overflow-hidden backdrop-blur-sm p-2.5 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-wide text-bambu-gray font-medium shrink-0", children: t("printers.amsPopup.serialNumber") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-mono truncate", children: ams.serial_number || "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-wide text-bambu-gray font-medium shrink-0", children: t("printers.amsPopup.firmwareVersion") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-mono truncate", children: ams.sw_ver || "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-bambu-dark-tertiary/50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray font-medium block", children: t("printers.amsPopup.friendlyName") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: editValue,
                    onChange: (e) => canEdit && setEditValue(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && handleSave(),
                    onFocus: () => setIsInputFocused(true),
                    onBlur: () => {
                      setIsInputFocused(false);
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      timeoutRef.current = setTimeout(() => setIsVisible(false), 200);
                    },
                    placeholder: canEdit ? t("printers.amsPopup.friendlyNamePlaceholder") : amsLabels?.[ams.id] || "—",
                    disabled: !canEdit,
                    title: !canEdit ? t("printers.amsPopup.noEditPermission") : void 0,
                    className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-2 py-1 text-xs text-white placeholder-bambu-gray/60 focus:outline-none focus:border-bambu-green disabled:opacity-50 disabled:cursor-not-allowed",
                    maxLength: 100
                  }
                ),
                canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  saveError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-red-400 break-words", children: saveError }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 justify-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: handleSave,
                        disabled: isSaving,
                        className: "px-2 py-0.5 text-[10px] bg-bambu-green text-white rounded hover:bg-bambu-green/80 disabled:opacity-50",
                        children: t("printers.amsPopup.save")
                      }
                    ),
                    amsLabels?.[ams.id] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: handleClear,
                        disabled: isSaving,
                        className: "px-2 py-0.5 text-[10px] bg-bambu-dark-tertiary text-bambu-gray rounded hover:bg-bambu-dark-tertiary/70 disabled:opacity-50",
                        children: t("printers.amsPopup.clear")
                      }
                    )
                  ] })
                ] })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
const DRYING_PRESETS = {
  "PLA": { n3f: 45, n3s: 45, n3f_hours: 12, n3s_hours: 12 },
  "PETG": { n3f: 65, n3s: 65, n3f_hours: 12, n3s_hours: 12 },
  "TPU": { n3f: 65, n3s: 75, n3f_hours: 12, n3s_hours: 18 },
  "ABS": { n3f: 65, n3s: 80, n3f_hours: 12, n3s_hours: 8 },
  "ASA": { n3f: 65, n3s: 80, n3f_hours: 12, n3s_hours: 8 },
  "PA": { n3f: 65, n3s: 85, n3f_hours: 12, n3s_hours: 12 },
  "PC": { n3f: 65, n3s: 80, n3f_hours: 12, n3s_hours: 8 },
  "PVA": { n3f: 65, n3s: 85, n3f_hours: 12, n3s_hours: 18 }
};
function PrinterCard({
  printer,
  hideIfDisconnected,
  maintenanceInfo,
  viewMode = "expanded",
  cardSize = 2,
  amsThresholds,
  spoolmanEnabled = false,
  useSharedStatusCache = false,
  sharedSmartPlug,
  pendingQueueItems,
  printingQueueItems,
  linkedSpools,
  spoolmanUrl,
  spoolmanSyncMode,
  onGetAssignment,
  onUnassignSpool,
  timeFormat = "system",
  cameraViewMode = "window",
  onOpenEmbeddedCamera,
  checkPrinterFirmware = true,
  dryingPresets = DRYING_PRESETS
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const isSidebarCompact = useIsSidebarCompact();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [showMenu, setShowMenu] = reactExports.useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  const [deleteArchives, setDeleteArchives] = reactExports.useState(true);
  const [showEditModal, setShowEditModal] = reactExports.useState(false);
  const [showFileManager, setShowFileManager] = reactExports.useState(false);
  const [showMQTTDebug, setShowMQTTDebug] = reactExports.useState(false);
  const [showPowerOnConfirm, setShowPowerOnConfirm] = reactExports.useState(false);
  const [showPowerOffConfirm, setShowPowerOffConfirm] = reactExports.useState(false);
  const [showHMSModal, setShowHMSModal] = reactExports.useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = reactExports.useState(null);
  const [showResumeConfirm, setShowResumeConfirm] = reactExports.useState(false);
  const [showSkipObjectsModal, setShowSkipObjectsModal] = reactExports.useState(false);
  const [showUploadForPrint, setShowUploadForPrint] = reactExports.useState(false);
  const [showPrinterInfo, setShowPrinterInfo] = reactExports.useState(false);
  const closePrinterInfo = reactExports.useCallback(() => setShowPrinterInfo(false), []);
  const [printAfterUpload, setPrintAfterUpload] = reactExports.useState(null);
  const [dryingPopoverAmsId, setDryingPopoverAmsId] = reactExports.useState(null);
  const [dryingPopoverModuleType, setDryingPopoverModuleType] = reactExports.useState("n3f");
  const [dryingFilament, setDryingFilament] = reactExports.useState("PLA");
  const [dryingTemp, setDryingTemp] = reactExports.useState(50);
  const [dryingDuration, setDryingDuration] = reactExports.useState(4);
  const [dryingRotateTray, setDryingRotateTray] = reactExports.useState(false);
  const [dryingPopoverPos, setDryingPopoverPos] = reactExports.useState(null);
  const [isDraggingFile, setIsDraggingFile] = reactExports.useState(false);
  const [isDropUploading, setIsDropUploading] = reactExports.useState(false);
  const dragCounterRef = reactExports.useRef(0);
  const [amsHistoryModal, setAmsHistoryModal] = reactExports.useState(null);
  const [linkSpoolModal, setLinkSpoolModal] = reactExports.useState(null);
  const [assignSpoolModal, setAssignSpoolModal] = reactExports.useState(null);
  const [configureSlotModal, setConfigureSlotModal] = reactExports.useState(null);
  const [showFirmwareModal, setShowFirmwareModal] = reactExports.useState(false);
  const [plateCheckResult, setPlateCheckResult] = reactExports.useState(null);
  const [isCheckingPlate, setIsCheckingPlate] = reactExports.useState(false);
  const [isCalibrating, setIsCalibrating] = reactExports.useState(false);
  const [editingRoi, setEditingRoi] = reactExports.useState(null);
  const [isSavingRoi, setIsSavingRoi] = reactExports.useState(false);
  const [plateCheckLightWasOff, setPlateCheckLightWasOff] = reactExports.useState(false);
  const openCameraView = reactExports.useCallback(() => {
    if (cameraViewMode === "embedded" && onOpenEmbeddedCamera) {
      onOpenEmbeddedCamera(printer.id, printer.name);
      return;
    }
    const saved = localStorage.getItem("cameraWindowState");
    const state = saved ? JSON.parse(saved) : { width: 640, height: 400 };
    const features = [
      `width=${state.width}`,
      `height=${state.height}`,
      state.left !== void 0 ? `left=${state.left}` : "",
      state.top !== void 0 ? `top=${state.top}` : "",
      "menubar=no,toolbar=no,location=no,status=no,noopener"
    ].filter(Boolean).join(",");
    window.open(`/camera/${printer.id}`, `camera-${printer.id}`, features);
  }, [cameraViewMode, onOpenEmbeddedCamera, printer.id, printer.name]);
  const { data: status } = useQuery({
    queryKey: ["printerStatus", printer.id],
    queryFn: () => api.getPrinterStatus(printer.id),
    enabled: !useSharedStatusCache,
    refetchInterval: useSharedStatusCache ? false : 3e4
    // Fallback polling, WebSocket handles real-time
  });
  const { data: firmwareInfo } = useQuery({
    queryKey: ["firmwareUpdate", printer.id],
    queryFn: () => firmwareApi.checkPrinterUpdate(printer.id),
    staleTime: 5 * 60 * 1e3,
    refetchInterval: 5 * 60 * 1e3,
    enabled: checkPrinterFirmware && hasPermission("firmware:read")
  });
  const trayInfoIds = reactExports.useMemo(() => {
    const ids = /* @__PURE__ */ new Set();
    if (status?.ams) {
      for (const ams of status.ams) {
        for (const tray of ams.tray || []) {
          if (tray.tray_info_idx) {
            ids.add(tray.tray_info_idx);
          }
        }
      }
    }
    for (const vt of status?.vt_tray ?? []) {
      if (vt.tray_info_idx) ids.add(vt.tray_info_idx);
    }
    if (status?.nozzle_rack) {
      for (const slot of status.nozzle_rack) {
        if (slot.filament_id) {
          ids.add(slot.filament_id);
        }
      }
    }
    return Array.from(ids);
  }, [status?.ams, status?.vt_tray, status?.nozzle_rack]);
  const loadedFilamentTypes = reactExports.useMemo(() => {
    const types = /* @__PURE__ */ new Set();
    if (status?.ams) {
      for (const ams of status.ams) {
        for (const tray of ams.tray || []) {
          if (tray.tray_type) types.add(tray.tray_type.toUpperCase());
        }
      }
    }
    for (const vt of status?.vt_tray ?? []) {
      if (vt.tray_type) types.add(vt.tray_type.toUpperCase());
    }
    return types;
  }, [status?.ams, status?.vt_tray]);
  const loadedFilaments = reactExports.useMemo(() => {
    const filaments = /* @__PURE__ */ new Set();
    if (status?.ams) {
      for (const ams of status.ams) {
        for (const tray of ams.tray || []) {
          if (tray.tray_type && tray.tray_color) {
            const color = tray.tray_color.replace("#", "").toLowerCase().slice(0, 6);
            filaments.add(`${tray.tray_type.toUpperCase()}:${color}`);
          }
        }
      }
    }
    for (const vt of status?.vt_tray ?? []) {
      if (vt.tray_type && vt.tray_color) {
        const color = vt.tray_color.replace("#", "").toLowerCase().slice(0, 6);
        filaments.add(`${vt.tray_type.toUpperCase()}:${color}`);
      }
    }
    return filaments;
  }, [status?.ams, status?.vt_tray]);
  const { data: filamentInfo } = useQuery({
    queryKey: ["filamentInfo", trayInfoIds],
    queryFn: () => api.getFilamentInfo(trayInfoIds),
    enabled: trayInfoIds.length > 0,
    staleTime: 5 * 60 * 1e3
    // 5 minutes
  });
  const { data: slotPresets } = useQuery({
    queryKey: ["slotPresets", printer.id],
    queryFn: () => api.getSlotPresets(printer.id),
    staleTime: 2 * 60 * 1e3
    // 2 minutes
  });
  const { data: amsLabels, refetch: refetchAmsLabels } = useQuery({
    queryKey: ["amsLabels", printer.id],
    queryFn: () => api.getAmsLabels(printer.id),
    staleTime: 5 * 60 * 1e3
    // 5 minutes
  });
  const [cachedWifiSignal, setCachedWifiSignal] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (status?.wifi_signal != null) {
      setCachedWifiSignal(status.wifi_signal);
    }
  }, [status?.wifi_signal]);
  const wifiSignal = status?.wifi_signal ?? cachedWifiSignal;
  const cachedConnected = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    if (status?.connected !== void 0) {
      cachedConnected.current = status.connected;
    }
  }, [status?.connected]);
  const isConnected = status?.connected ?? cachedConnected.current;
  const cachedAmsExtruderMap = reactExports.useRef({});
  reactExports.useEffect(() => {
    if (status?.ams_extruder_map && Object.keys(status.ams_extruder_map).length > 0) {
      cachedAmsExtruderMap.current = status.ams_extruder_map;
    }
  }, [status?.ams_extruder_map]);
  const amsExtruderMap = status?.ams_extruder_map && Object.keys(status.ams_extruder_map).length > 0 ? status.ams_extruder_map : cachedAmsExtruderMap.current;
  const cachedAmsData = reactExports.useRef([]);
  reactExports.useEffect(() => {
    if (status?.ams && status.ams.length > 0) {
      cachedAmsData.current = status.ams;
    }
  }, [status?.ams]);
  const amsData = status?.ams && status.ams.length > 0 ? status.ams : cachedAmsData.current;
  const cachedTrayNow = reactExports.useRef(void 0);
  const currentTrayNow = status?.tray_now;
  if (currentTrayNow !== void 0 && currentTrayNow !== 255) {
    cachedTrayNow.current = currentTrayNow;
  } else if (currentTrayNow === 255) {
    cachedTrayNow.current = void 0;
  }
  const effectiveTrayNow = currentTrayNow !== void 0 && currentTrayNow !== 255 ? currentTrayNow : cachedTrayNow.current;
  const sharedSmartPlugProvided = sharedSmartPlug !== void 0;
  const { data: fetchedSmartPlug } = useQuery({
    queryKey: ["smartPlugByPrinter", printer.id],
    queryFn: () => api.getSmartPlugByPrinter(printer.id),
    enabled: !sharedSmartPlugProvided
  });
  const smartPlug = sharedSmartPlugProvided ? sharedSmartPlug : fetchedSmartPlug;
  const { data: scriptPlugs } = useQuery({
    queryKey: ["scriptPlugsByPrinter", printer.id],
    queryFn: () => api.getScriptPlugsByPrinter(printer.id)
  });
  const { data: plugStatus } = useQuery({
    queryKey: ["smartPlugStatus", smartPlug?.id],
    queryFn: () => smartPlug ? api.getSmartPlugStatus(smartPlug.id) : null,
    enabled: !!smartPlug,
    refetchInterval: 1e4
    // 10 seconds for real-time power display
  });
  const sharedPendingQueueProvided = pendingQueueItems !== void 0;
  const { data: fetchedPendingQueueItems } = useQuery({
    queryKey: ["queue", printer.id, "pending"],
    queryFn: () => api.getQueue(printer.id, "pending"),
    enabled: !sharedPendingQueueProvided
  });
  const effectivePendingQueueItems = sharedPendingQueueProvided ? pendingQueueItems : fetchedPendingQueueItems;
  const queueCount = reactExports.useMemo(() => {
    if (!effectivePendingQueueItems?.length) return 0;
    return filterCompatibleQueueItems(effectivePendingQueueItems, loadedFilamentTypes, loadedFilaments).length;
  }, [effectivePendingQueueItems, loadedFilamentTypes, loadedFilaments]);
  const sharedPrintingQueueProvided = printingQueueItems !== void 0;
  const { data: fetchedPrintingQueueItems } = useQuery({
    queryKey: ["queue", printer.id, "printing"],
    queryFn: () => api.getQueue(printer.id, "printing"),
    enabled: !sharedPrintingQueueProvided && status?.state === "RUNNING"
  });
  const effectivePrintingQueueItems = sharedPrintingQueueProvided ? printingQueueItems : fetchedPrintingQueueItems;
  const { data: reprintUser } = useQuery({
    queryKey: ["currentPrintUser", printer.id],
    queryFn: () => api.getCurrentPrintUser(printer.id),
    enabled: status?.state === "RUNNING" && !effectivePrintingQueueItems?.length
  });
  const currentPrintUser = effectivePrintingQueueItems?.[0]?.created_by_username || reprintUser?.username;
  const { data: lastPrints } = useQuery({
    queryKey: ["archives", printer.id, "last"],
    queryFn: () => api.getArchives(printer.id, 1, 0),
    enabled: status?.connected && status?.state !== "RUNNING"
  });
  const lastPrint = lastPrints?.[0];
  const shouldHide = hideIfDisconnected && isConnected === false;
  const deleteMutation = useMutation({
    mutationFn: (options) => api.deletePrinter(printer.id, options.deleteArchives),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["printers"] });
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToDelete"), "error")
  });
  const connectMutation = useMutation({
    mutationFn: () => api.connectPrinter(printer.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["printerStatus", printer.id] });
    }
  });
  const unlinkSpoolMutation = useMutation({
    mutationFn: (spoolId) => api.unlinkSpool(spoolId),
    onSuccess: (result) => {
      showToast(t("spoolman.unlinkSuccess") || result?.message, "success");
      queryClient.invalidateQueries({ queryKey: ["linked-spools"] });
      queryClient.invalidateQueries({ queryKey: ["unlinked-spools"] });
    },
    onError: (error) => {
      showToast(error.message || t("spoolman.unlinkFailed"), "error");
    }
  });
  const startDryingMutation = useMutation({
    mutationFn: ({ amsId, temp, duration, filament, rotateTray }) => api.startDrying(printer.id, amsId, temp, duration, filament, rotateTray),
    onSuccess: () => {
      setDryingPopoverAmsId(null);
      queryClient.invalidateQueries({ queryKey: ["printerStatus", printer.id] });
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToSendCommand"), "error")
  });
  const stopDryingMutation = useMutation({
    mutationFn: (amsId) => api.stopDrying(printer.id, amsId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["printerStatus", printer.id] });
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToSendCommand"), "error")
  });
  const powerControlMutation = useMutation({
    mutationFn: (action) => smartPlug ? api.controlSmartPlug(smartPlug.id, action) : Promise.reject("No plug"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["smartPlugStatus", smartPlug?.id] });
    }
  });
  const toggleAutoOffMutation = useMutation({
    mutationFn: (enabled) => smartPlug ? api.updateSmartPlug(smartPlug.id, { auto_off: enabled }) : Promise.reject("No plug"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["smartPlugByPrinter", printer.id] });
      queryClient.invalidateQueries({ queryKey: ["smart-plugs"] });
    }
  });
  const runScriptMutation = useMutation({
    mutationFn: ({ id, action }) => api.controlSmartPlug(id, action),
    onSuccess: () => {
      showToast(t("printers.toast.scriptTriggered"));
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToRunScript"), "error")
  });
  const resumePrintMutation = useMutation({
    mutationFn: () => api.resumePrint(printer.id),
    onSuccess: () => {
      showToast(t("printers.toast.printResumed"));
      queryClient.invalidateQueries({ queryKey: ["printerStatus", printer.id] });
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToResumePrint"), "error")
  });
  const chamberLightMutation = useMutation({
    mutationFn: (on) => api.setChamberLight(printer.id, on),
    onMutate: async (on) => {
      await queryClient.cancelQueries({ queryKey: ["printerStatus", printer.id] });
      const previousStatus = queryClient.getQueryData(["printerStatus", printer.id]);
      queryClient.setQueryData(["printerStatus", printer.id], (old) => ({
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
        queryClient.setQueryData(["printerStatus", printer.id], context.previousStatus);
      }
      showToast(error.message || t("printers.toast.failedToControlChamberLight"), "error");
    }
  });
  const printSpeedMutation = useMutation({
    mutationFn: (mode) => api.setPrintSpeed(printer.id, mode),
    onMutate: async (mode) => {
      await queryClient.cancelQueries({ queryKey: ["printerStatus", printer.id] });
      const previousStatus = queryClient.getQueryData(["printerStatus", printer.id]);
      queryClient.setQueryData(["printerStatus", printer.id], (old) => ({
        ...old,
        speed_level: mode
      }));
      return { previousStatus };
    },
    onError: (error, _, context) => {
      if (context?.previousStatus) {
        queryClient.setQueryData(["printerStatus", printer.id], context.previousStatus);
      }
      showToast(error.message || t("printers.toast.failedToSetSpeed"), "error");
    }
  });
  const plateDetectionMutation = useMutation({
    mutationFn: (enabled) => api.updatePrinter(printer.id, { plate_detection_enabled: enabled }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["printers"] });
      showToast(plateDetectionMutation.variables ? t("printers.toast.plateCheckEnabled") : t("printers.toast.plateCheckDisabled"));
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToUpdateSetting"), "error")
  });
  const isPrintingWithObjects = (status?.state === "RUNNING" || status?.state === "PAUSE") && (status?.printable_objects_count ?? 0) >= 2;
  const { data: objectsData } = useQuery({
    queryKey: ["printableObjects", printer.id],
    queryFn: () => api.getPrintableObjects(printer.id),
    enabled: showSkipObjectsModal || isPrintingWithObjects,
    refetchInterval: showSkipObjectsModal ? 5e3 : isPrintingWithObjects ? 3e4 : false
    // 5s when modal open, 30s otherwise
  });
  const [refreshingSlot, setRefreshingSlot] = reactExports.useState(null);
  const seenBusyStateRef = reactExports.useRef(false);
  const refreshTimeoutRef = reactExports.useRef(null);
  const minTimePassedRef = reactExports.useRef(false);
  const refreshAmsSlotMutation = useMutation({
    mutationFn: ({ amsId, slotId }) => api.refreshAmsSlot(printer.id, amsId, slotId),
    onMutate: ({ amsId, slotId }) => {
      if (refreshTimeoutRef.current) {
        clearTimeout(refreshTimeoutRef.current);
      }
      seenBusyStateRef.current = false;
      minTimePassedRef.current = false;
      setRefreshingSlot({ amsId, slotId });
      setTimeout(() => {
        minTimePassedRef.current = true;
      }, 2e3);
      refreshTimeoutRef.current = setTimeout(() => {
        setRefreshingSlot(null);
      }, 3e4);
    },
    onSuccess: (data) => {
      showToast(data.message || t("printers.toast.rfidRereadInitiated"));
    },
    onError: (error) => {
      showToast(error.message || t("printers.toast.failedToRereadRfid"), "error");
      if (refreshTimeoutRef.current) {
        clearTimeout(refreshTimeoutRef.current);
      }
      setRefreshingSlot(null);
    }
  });
  const [plateReferences, setPlateReferences] = reactExports.useState(null);
  const [editingRefLabel, setEditingRefLabel] = reactExports.useState(null);
  const fetchPlateReferences = async () => {
    try {
      const data = await api.getPlateReferences(printer.id);
      setPlateReferences(data);
    } catch {
    }
  };
  const handleTogglePlateDetection = () => {
    plateDetectionMutation.mutate(!printer.plate_detection_enabled);
  };
  const handleOpenPlateManagement = async () => {
    setIsCheckingPlate(true);
    setPlateCheckResult(null);
    const lightWasOff = status?.chamber_light === false;
    setPlateCheckLightWasOff(lightWasOff);
    if (lightWasOff) {
      await api.setChamberLight(printer.id, true);
      await new Promise((resolve) => setTimeout(resolve, 2500));
    }
    try {
      const result = await api.checkPlateEmpty(printer.id, { includeDebugImage: true });
      setPlateCheckResult(result);
      fetchPlateReferences();
    } catch (error) {
      showToast(error instanceof Error ? error.message : t("printers.toast.failedToCheckPlate"), "error");
      if (lightWasOff) {
        await api.setChamberLight(printer.id, false);
        setPlateCheckLightWasOff(false);
      }
    } finally {
      setIsCheckingPlate(false);
    }
  };
  const closePlateCheckModal = reactExports.useCallback(async () => {
    setPlateCheckResult(null);
    if (plateCheckLightWasOff) {
      await api.setChamberLight(printer.id, false);
      setPlateCheckLightWasOff(false);
    }
  }, [plateCheckLightWasOff, printer.id]);
  const handleCalibratePlate = async (label) => {
    setIsCalibrating(true);
    try {
      const result = await api.calibratePlateDetection(printer.id, { label });
      if (result.success) {
        showToast(result.message || t("printers.toast.calibrationSaved"), "success");
        fetchPlateReferences();
        const checkResult = await api.checkPlateEmpty(printer.id, { includeDebugImage: true });
        setPlateCheckResult(checkResult);
      } else {
        showToast(result.message || t("printers.toast.calibrationFailed"), "error");
      }
    } catch (error) {
      showToast(error instanceof Error ? error.message : t("printers.toast.calibrationFailed"), "error");
    } finally {
      setIsCalibrating(false);
    }
  };
  const handleUpdateRefLabel = async (index, label) => {
    try {
      await api.updatePlateReferenceLabel(printer.id, index, label);
      setEditingRefLabel(null);
      fetchPlateReferences();
    } catch (error) {
      showToast(error instanceof Error ? error.message : t("printers.toast.failedToUpdateLabel"), "error");
    }
  };
  const handleDeleteRef = async (index) => {
    try {
      await api.deletePlateReference(printer.id, index);
      showToast(t("printers.toast.referenceDeleted"), "success");
      fetchPlateReferences();
      const checkResult = await api.checkPlateEmpty(printer.id, { includeDebugImage: true });
      setPlateCheckResult(checkResult);
    } catch (error) {
      showToast(error instanceof Error ? error.message : t("printers.toast.failedToDeleteReference"), "error");
    }
  };
  const handleSaveRoi = async () => {
    if (!editingRoi) return;
    setIsSavingRoi(true);
    try {
      await api.updatePrinter(printer.id, { plate_detection_roi: editingRoi });
      showToast(t("printers.toast.detectionAreaSaved"), "success");
      setEditingRoi(null);
      const checkResult = await api.checkPlateEmpty(printer.id, { includeDebugImage: true });
      setPlateCheckResult(checkResult);
    } catch (error) {
      showToast(error instanceof Error ? error.message : t("printers.toast.failedToSaveDetectionArea"), "error");
    } finally {
      setIsSavingRoi(false);
    }
  };
  reactExports.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && plateCheckResult) {
        closePlateCheckModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [plateCheckResult, closePlateCheckModal]);
  const deferredClearRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!refreshingSlot) return;
    const amsStatus = status?.ams_status_main ?? 0;
    if (amsStatus !== 0) {
      seenBusyStateRef.current = true;
      if (deferredClearRef.current) {
        clearTimeout(deferredClearRef.current);
        deferredClearRef.current = null;
      }
    }
    if (seenBusyStateRef.current && amsStatus === 0) {
      if (minTimePassedRef.current) {
        if (refreshTimeoutRef.current) {
          clearTimeout(refreshTimeoutRef.current);
        }
        setRefreshingSlot(null);
      } else {
        if (!deferredClearRef.current) {
          deferredClearRef.current = setTimeout(() => {
            if (refreshTimeoutRef.current) {
              clearTimeout(refreshTimeoutRef.current);
            }
            setRefreshingSlot(null);
          }, 2e3);
        }
      }
    }
    return () => {
      if (deferredClearRef.current) {
        clearTimeout(deferredClearRef.current);
      }
    };
  }, [status?.ams_status_main, refreshingSlot]);
  const [amsSlotMenu, setAmsSlotMenu] = reactExports.useState(null);
  if (shouldHide) {
    return null;
  }
  const getImageSize = () => {
    switch (cardSize) {
      case 1:
        return "w-10 h-10";
      case 2:
        return "w-14 h-14";
      case 3:
        return "w-16 h-16";
      case 4:
        return "w-20 h-20";
      default:
        return "w-14 h-14";
    }
  };
  const getTitleSize = () => {
    switch (cardSize) {
      case 1:
        return "text-base truncate";
      case 2:
        return "text-lg";
      case 3:
        return "text-xl";
      case 4:
        return "text-2xl";
      default:
        return "text-lg";
    }
  };
  const getSpacing = () => {
    switch (cardSize) {
      case 1:
        return "mb-2";
      case 2:
        return "mb-4";
      case 3:
        return "mb-5";
      case 4:
        return "mb-6";
      default:
        return "mb-4";
    }
  };
  const canDrop = isConnected && status?.state !== "RUNNING" && status?.state !== "PAUSE" && hasPermission("printers:control");
  const handleCardDragEnter = (e) => {
    e.preventDefault();
    dragCounterRef.current++;
    if (dragCounterRef.current === 1) setIsDraggingFile(true);
  };
  const handleCardDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = canDrop ? "copy" : "none";
  };
  const handleCardDragLeave = (e) => {
    e.preventDefault();
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) setIsDraggingFile(false);
  };
  const handleCardDrop = async (e) => {
    e.preventDefault();
    dragCounterRef.current = 0;
    setIsDraggingFile(false);
    if (!canDrop) return;
    const droppedFiles = Array.from(e.dataTransfer.files);
    const file = droppedFiles[0];
    if (!file) return;
    const lower = file.name.toLowerCase();
    if (!lower.endsWith(".gcode") && !lower.includes(".gcode.")) {
      showToast(t("printers.dropNotPrintable", "Only .gcode and .gcode.3mf files can be printed"), "error");
      return;
    }
    setIsDropUploading(true);
    try {
      const result = await api.uploadLibraryFile(file, null);
      const slicedFor = result.metadata?.sliced_for_model;
      const printerModel = mapModelCode(printer.model);
      if (slicedFor && printerModel && slicedFor.toLowerCase() !== printerModel.toLowerCase()) {
        await api.deleteLibraryFile(result.id).catch(() => {
        });
        showToast(
          t("printers.incompatibleFile", "This file was sliced for {{slicedFor}}, but this printer is a {{printerModel}}", { slicedFor, printerModel }),
          "error"
        );
        return;
      }
      setPrintAfterUpload({ id: result.id, filename: result.filename });
    } catch {
      showToast(t("common.uploadFailed", "Upload failed"), "error");
    } finally {
      setIsDropUploading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      "data-onboarding": "printer-card",
      className: "relative",
      onDragEnter: handleCardDragEnter,
      onDragOver: handleCardDragOver,
      onDragLeave: handleCardDragLeave,
      onDrop: handleCardDrop,
      children: [
        (isDraggingFile || isDropUploading) && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute inset-0 z-10 rounded-xl border-2 border-dashed flex items-center justify-center transition-colors ${isDropUploading ? "bg-bambu-green/10 border-bambu-green/50" : canDrop ? "bg-bambu-green/10 border-bambu-green" : "bg-red-500/10 border-red-500/50"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: isDropUploading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 mx-auto mb-2 text-bambu-green animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-bambu-green", children: t("common.uploading", "Uploading...") })
            ] }) : canDrop ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-8 h-8 mx-auto mb-2 text-bambu-green" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-bambu-green", children: t("printers.dropToPrint", "Drop to print") })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-8 h-8 mx-auto mb-2 text-red-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-red-400", children: t("printers.cannotPrint", "Printer busy") })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: cardSize >= 3 ? "p-5" : "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getSpacing(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: getPrinterImage(printer.model),
                    alt: printer.model || t("common.printer"),
                    className: `object-contain rounded-lg bg-bambu-dark flex-shrink-0 ${getImageSize()}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-white ${getTitleSize()}`, children: printer.name }),
                    viewMode === "compact" && (() => {
                      const hmsErrors = status?.connected && status.hms_errors ? filterKnownHMSErrors(status.hms_errors) : [];
                      const hasSevere = hmsErrors.some((e) => e.severity <= 2);
                      const hasWarning = hmsErrors.length > 0;
                      const pipColor = !status?.connected ? "bg-status-error" : hasSevere ? "bg-status-error" : hasWarning ? "bg-status-warning" : "bg-status-ok";
                      const pipTitle = !status?.connected ? t("printers.connection.offline") : hasWarning ? `${hmsErrors.length} HMS ${hmsErrors.length === 1 ? "error" : "errors"}` : t("printers.connection.connected");
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full flex-shrink-0 ${pipColor}`,
                          title: pipTitle
                        }
                      );
                    })()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-bambu-gray", children: [
                    printer.model || "Unknown Model",
                    viewMode === "expanded" && status?.nozzles && status.nozzles[0]?.nozzle_diameter && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5 text-bambu-gray", title: status.nozzles[0].nozzle_type || "Nozzle", children: [
                      "• ",
                      status.nozzles[0].nozzle_diameter,
                      "mm"
                    ] }),
                    viewMode === "expanded" && maintenanceInfo && maintenanceInfo.total_print_hours > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-bambu-gray", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 inline-block mr-1" }),
                      Math.round(maintenanceInfo.total_print_hours),
                      "h"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
                isSidebarCompact && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    "data-onboarding": "printer-camera-mobile",
                    onClick: openCameraView,
                    disabled: !status?.connected || !hasPermission("camera:view"),
                    title: !hasPermission("camera:view") ? t("printers.permission.noCamera") : cameraViewMode === "embedded" ? t("printers.openCameraOverlay") : t("printers.openCameraWindow"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => setShowMenu(!showMenu),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4" })
                    }
                  ),
                  showMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-lg z-20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        className: `w-full px-4 py-2 text-left text-sm flex items-center gap-2 ${hasPermission("printers:update") ? "hover:bg-bambu-dark-tertiary" : "opacity-50 cursor-not-allowed"}`,
                        onClick: () => {
                          if (!hasPermission("printers:update")) return;
                          setShowEditModal(true);
                          setShowMenu(false);
                        },
                        title: !hasPermission("printers:update") ? t("printers.permission.noEdit") : void 0,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" }),
                          t("common.edit")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        className: "w-full px-4 py-2 text-left text-sm hover:bg-bambu-dark-tertiary flex items-center gap-2",
                        onClick: () => {
                          setShowPrinterInfo(true);
                          setShowMenu(false);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4" }),
                          t("printers.printerInformation")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        className: "w-full px-4 py-2 text-left text-sm hover:bg-bambu-dark-tertiary flex items-center gap-2",
                        onClick: () => {
                          connectMutation.mutate();
                          setShowMenu(false);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                          t("printers.reconnect")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        className: "w-full px-4 py-2 text-left text-sm hover:bg-bambu-dark-tertiary flex items-center gap-2",
                        onClick: () => {
                          setShowMQTTDebug(true);
                          setShowMenu(false);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "w-4 h-4" }),
                          t("printers.mqttDebug")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        className: `w-full px-4 py-2 text-left text-sm flex items-center gap-2 ${hasPermission("printers:delete") ? "text-red-400 hover:bg-bambu-dark-tertiary" : "text-red-400/50 cursor-not-allowed"}`,
                        onClick: () => {
                          if (!hasPermission("printers:delete")) return;
                          setShowDeleteConfirm(true);
                          setShowMenu(false);
                        },
                        title: !hasPermission("printers:delete") ? t("printers.permission.noDelete") : void 0,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
                          t("common.delete")
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            viewMode === "expanded" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${status?.connected ? "bg-status-ok/20 text-status-ok" : "bg-status-error/20 text-status-error"}`,
                  children: [
                    status?.connected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Unlink, { className: "w-3 h-3" }),
                    status?.connected ? t("printers.connection.connected") : t("printers.connection.offline")
                  ]
                }
              ),
              status?.connected && status?.wired_network && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-status-ok/20 text-status-ok",
                  title: t("printers.connection.ethernet", "Ethernet"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Cable, { className: "w-3 h-3" }),
                    t("printers.connection.ethernet", "Ethernet")
                  ]
                }
              ),
              status?.connected && !status?.wired_network && wifiSignal != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `flex items-center gap-1 px-2 py-1 rounded-full text-xs ${wifiSignal >= -50 ? "bg-status-ok/20 text-status-ok" : wifiSignal >= -60 ? "bg-status-ok/20 text-status-ok" : wifiSignal >= -70 ? "bg-status-warning/20 text-status-warning" : wifiSignal >= -80 ? "bg-orange-500/20 text-orange-600" : "bg-status-error/20 text-status-error"}`,
                  title: `WiFi: ${wifiSignal} dBm - ${t(getWifiStrength(wifiSignal).labelKey)}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Signal, { className: "w-3 h-3" }),
                    wifiSignal,
                    "dBm"
                  ]
                }
              ),
              status?.connected && (() => {
                const knownErrors = status.hms_errors ? filterKnownHMSErrors(status.hms_errors) : [];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setShowHMSModal(true),
                    className: `flex items-center gap-1 px-2 py-1 rounded-full text-xs cursor-pointer hover:opacity-80 transition-opacity ${knownErrors.length > 0 ? knownErrors.some((e) => e.severity <= 2) ? "bg-status-error/20 text-status-error" : "bg-status-warning/20 text-status-warning" : "bg-status-ok/20 text-status-ok"}`,
                    title: t("printers.clickToViewHmsErrors"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
                      knownErrors.length > 0 ? knownErrors.length : "OK"
                    ]
                  }
                );
              })(),
              maintenanceInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate("/maintenance"),
                  className: `flex items-center gap-1 px-2 py-1 rounded-full text-xs cursor-pointer hover:opacity-80 transition-opacity ${maintenanceInfo.due_count > 0 ? "bg-status-error/20 text-status-error" : maintenanceInfo.warning_count > 0 ? "bg-status-warning/20 text-status-warning" : "bg-status-ok/20 text-status-ok"}`,
                  title: maintenanceInfo.due_count > 0 || maintenanceInfo.warning_count > 0 ? `${maintenanceInfo.due_count > 0 ? `${maintenanceInfo.due_count} maintenance due` : ""}${maintenanceInfo.due_count > 0 && maintenanceInfo.warning_count > 0 ? ", " : ""}${maintenanceInfo.warning_count > 0 ? `${maintenanceInfo.warning_count} due soon` : ""} - Click to view` : t("printers.maintenanceUpToDate"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-3 h-3" }),
                    maintenanceInfo.due_count > 0 || maintenanceInfo.warning_count > 0 ? maintenanceInfo.due_count + maintenanceInfo.warning_count : "OK"
                  ]
                }
              ),
              queueCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => navigate("/queue"),
                  className: "flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400 hover:opacity-80 transition-opacity",
                  title: t("printers.queue.inQueue", { count: queueCount }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3" }),
                    queueCount
                  ]
                }
              ),
              checkPrinterFirmware && firmwareInfo?.current_version && firmwareInfo?.latest_version ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setShowFirmwareModal(true),
                  className: `flex items-center gap-1 px-2 py-1 rounded-full text-xs hover:opacity-80 transition-opacity ${firmwareInfo.update_available ? "bg-orange-500/20 text-orange-400" : "bg-status-ok/20 text-status-ok"}`,
                  title: firmwareInfo.update_available ? t("printers.firmwareUpdateAvailable", { current: firmwareInfo.current_version, latest: firmwareInfo.latest_version }) : t("printers.firmwareUpToDate", { version: firmwareInfo.current_version }),
                  children: [
                    firmwareInfo.update_available ? /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" }),
                    firmwareInfo.current_version
                  ]
                }
              ) : status?.firmware_version ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-bambu-dark-tertiary/50 text-bambu-gray", children: status.firmware_version }) : null
            ] })
          ] }),
          showDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md mx-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-full bg-red-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-red-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: t("printers.confirm.deleteTitle") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("printers.confirm.deleteMessage", { name: printer.name }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-bambu-dark rounded-lg p-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: deleteArchives,
                  onChange: (e) => setDeleteArchives(e.target.checked),
                  className: "mt-0.5 w-4 h-4 rounded border-bambu-gray bg-bambu-dark-secondary text-bambu-green focus:ring-bambu-green focus:ring-offset-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: t("printers.deleteArchives") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-0.5", children: deleteArchives ? t("printers.confirm.deleteArchivesNote") : t("printers.confirm.keepArchivesNote") })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "secondary",
                  onClick: () => {
                    setShowDeleteConfirm(false);
                    setDeleteArchives(true);
                  },
                  children: t("common.cancel")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "danger",
                  onClick: () => {
                    deleteMutation.mutate({ deleteArchives });
                    setShowDeleteConfirm(false);
                    setDeleteArchives(true);
                  },
                  children: "Delete"
                }
              )
            ] })
          ] }) }) }),
          status?.connected && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            viewMode === "compact" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: status.state === "RUNNING" || status.state === "PAUSE" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-bambu-dark-tertiary rounded-full h-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `${status.state === "PAUSE" ? "bg-status-warning" : "bg-bambu-green"} h-1.5 rounded-full transition-all`,
                  style: { width: `${status.progress || 0}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white", children: [
                Math.round(status.progress || 0),
                "%"
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: getStatusDisplay(status.state, status.stg_cur_name) }) }) : (
              /* Expanded: Full status section */
              /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-3 bg-bambu-dark rounded-lg relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setShowSkipObjectsModal(true),
                      disabled: !(status.state === "RUNNING" || status.state === "PAUSE") || (status.printable_objects_count ?? 0) < 2 || !hasPermission("printers:control"),
                      className: `absolute top-2 right-2 p-1.5 rounded transition-colors z-10 ${(status.state === "RUNNING" || status.state === "PAUSE") && (status.printable_objects_count ?? 0) >= 2 && hasPermission("printers:control") ? "text-bambu-gray hover:text-white hover:bg-white/10" : "text-bambu-gray/30 cursor-not-allowed"}`,
                      title: !hasPermission("printers:control") ? t("printers.permission.noControl") : !(status.state === "RUNNING" || status.state === "PAUSE") ? t("printers.skipObjects.onlyWhilePrinting") : (status.printable_objects_count ?? 0) >= 2 ? t("printers.skipObjects.tooltip") : t("printers.skipObjects.requiresMultiple"),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SkipObjectsIcon, { className: "w-4 h-4" }),
                        objectsData && objectsData.skipped_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 min-w-[16px] h-4 px-1 flex items-center justify-center text-[10px] font-bold bg-red-500 text-white rounded-full", children: objectsData.skipped_count })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CoverImage,
                      {
                        url: status.state === "RUNNING" || status.state === "PAUSE" ? status.cover_url : null,
                        printName: status.state === "RUNNING" || status.state === "PAUSE" ? status.subtask_name || status.current_print || void 0 : void 0
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: status.current_print && (status.state === "RUNNING" || status.state === "PAUSE") ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-1", children: getStatusDisplay(status.state, status.stg_cur_name) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm mb-2 truncate", children: status.subtask_name || status.current_print }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-bambu-dark-tertiary rounded-full h-2 mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `${status.state === "PAUSE" ? "bg-status-warning" : "bg-bambu-green"} h-2 rounded-full transition-all`,
                            style: { width: `${status.progress || 0}%` }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white", children: [
                          Math.round(status.progress || 0),
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2 text-xs text-bambu-gray", children: [
                        status.remaining_time != null && status.remaining_time > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                            formatDuration(status.remaining_time * 60)
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-green font-medium", title: t("printers.estimatedCompletion"), children: [
                            "ETA ",
                            formatETA(status.remaining_time, timeFormat, t)
                          ] })
                        ] }),
                        status.layer_num != null && status.total_layers != null && status.total_layers > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3" }),
                          status.layer_num,
                          "/",
                          status.total_layers
                        ] }),
                        currentPrintUser && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", title: `Started by ${currentPrintUser}`, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
                          currentPrintUser
                        ] })
                      ] })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-1", children: t("printers.sort.status") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm mb-2", children: getStatusDisplay(status.state, status.stg_cur_name) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-bambu-dark-tertiary rounded-full h-2 mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-bambu-dark-tertiary h-2 rounded-full" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: "—" })
                      ] }),
                      lastPrint ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray mt-2 truncate", title: lastPrint.print_name || lastPrint.filename, children: [
                        "Last: ",
                        lastPrint.print_name || lastPrint.filename,
                        lastPrint.completed_at && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-bambu-gray/60", children: [
                          "• ",
                          formatDateOnly(lastPrint.completed_at, { month: "short", day: "numeric" })
                        ] })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-2", children: t("printers.readyToPrint") })
                    ] }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PrinterQueueWidget,
                  {
                    printerId: printer.id,
                    printerModel: printer.model,
                    printerState: status.state,
                    plateCleared: status.plate_cleared,
                    queueItems: effectivePendingQueueItems,
                    loadedFilamentTypes,
                    loadedFilaments
                  }
                )
              ] })
            ),
            status.temperatures && viewMode === "expanded" && (() => {
              const nozzleHeating = status.temperatures.nozzle_heating || status.temperatures.nozzle_2_heating || false;
              const bedHeating = status.temperatures.bed_heating || false;
              const chamberHeating = status.temperatures.chamber_heating || false;
              const isDualNozzle = printer.nozzle_count === 2 || status.temperatures.nozzle_2 !== void 0;
              const activeNozzle = status.active_extruder === 1 ? "L" : "R";
              const leftNozzleSlot = status.nozzle_rack?.find((s) => s.id === 1);
              const rightNozzleSlot = status.nozzle_rack?.find((s) => s.id === 0);
              const singleNozzleSlot = rightNozzleSlot || leftNozzleSlot;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch gap-1.5 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-2 py-1.5 bg-bambu-dark rounded-lg flex-1 flex flex-col justify-center items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HeaterThermometer, { className: "w-3.5 h-3.5 mb-0.5", color: "text-orange-400", isHeating: nozzleHeating }),
                  status.temperatures.nozzle_2 !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-bambu-gray", children: "L / R" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white", children: [
                      Math.round(status.temperatures.nozzle || 0),
                      "° / ",
                      Math.round(status.temperatures.nozzle_2 || 0),
                      "°"
                    ] })
                  ] }) : singleNozzleSlot ? /* @__PURE__ */ jsxRuntimeExports.jsx(NozzleSlotHoverCard, { slot: singleNozzleSlot, index: 0, activeStatus: true, filamentName: singleNozzleSlot.filament_id ? filamentInfo?.[singleNozzleSlot.filament_id]?.name : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cursor-default", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-bambu-gray", children: t("printers.temperatures.nozzle") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white", children: [
                      Math.round(status.temperatures.nozzle || 0),
                      "°C"
                    ] })
                  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-bambu-gray", children: t("printers.temperatures.nozzle") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white", children: [
                      Math.round(status.temperatures.nozzle || 0),
                      "°C"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-2 py-1.5 bg-bambu-dark rounded-lg flex-1 flex flex-col justify-center items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HeaterThermometer, { className: "w-3.5 h-3.5 mb-0.5", color: "text-blue-400", isHeating: bedHeating }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-bambu-gray", children: t("printers.temperatures.bed") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white", children: [
                    Math.round(status.temperatures.bed || 0),
                    "°C"
                  ] })
                ] }),
                status.temperatures.chamber !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-2 py-1.5 bg-bambu-dark rounded-lg flex-1 flex flex-col justify-center items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HeaterThermometer, { className: "w-3.5 h-3.5 mb-0.5", color: "text-green-400", isHeating: chamberHeating }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-bambu-gray", children: t("printers.temperatures.chamber") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white", children: [
                    Math.round(status.temperatures.chamber || 0),
                    "°C"
                  ] })
                ] }),
                isDualNozzle && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DualNozzleHoverCard,
                  {
                    leftSlot: leftNozzleSlot,
                    rightSlot: rightNozzleSlot,
                    activeNozzle,
                    filamentInfo,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-3 py-1.5 bg-bambu-dark rounded-lg h-full flex flex-col justify-center items-center cursor-default", title: t("printers.activeNozzle", { nozzle: activeNozzle === "L" ? t("common.left") : t("common.right") }), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[11px] font-bold ${activeNozzle === "L" ? "text-amber-400" : "text-gray-500"}`, children: [
                          "L",
                          leftNozzleSlot?.nozzle_diameter ? ` ${leftNozzleSlot.nozzle_diameter}` : ""
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-bambu-gray/40", children: "·" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[11px] font-bold ${activeNozzle === "R" ? "text-amber-400" : "text-gray-500"}`, children: [
                          "R",
                          rightNozzleSlot?.nozzle_diameter ? ` ${rightNozzleSlot.nozzle_diameter}` : ""
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-bambu-gray", children: t("printers.temperatures.nozzle") })
                    ] })
                  }
                ),
                status.nozzle_rack && status.nozzle_rack.some((s) => s.id >= 2) && /* @__PURE__ */ jsxRuntimeExports.jsx(NozzleRackCard, { slots: status.nozzle_rack, filamentInfo })
              ] });
            })(),
            viewMode === "expanded" && (() => {
              const isPaused = status.state === "PAUSE";
              const isPrinting = status.state === "RUNNING" || isPaused;
              const isControlBusy = resumePrintMutation.isPending;
              const partFan = status.cooling_fan_speed;
              const auxFan = status.big_fan1_speed;
              const chamberFan = status.big_fan2_speed;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.controls") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-bambu-dark-tertiary/30" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 max-[550px]:items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 max-[550px]:flex-wrap max-[550px]:items-start max-[550px]:gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `flex items-center gap-1 px-1.5 py-1 rounded ${partFan && partFan > 0 ? "bg-cyan-500/10" : "bg-bambu-dark"}`,
                        title: t("printers.fans.partCooling"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Fan, { className: `w-3.5 h-3.5 ${partFan && partFan > 0 ? "text-cyan-400" : "text-bambu-gray/50"}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] ${partFan && partFan > 0 ? "text-cyan-400" : "text-bambu-gray/50"}`, children: [
                            partFan ?? 0,
                            "%"
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `flex items-center gap-1 px-1.5 py-1 rounded ${auxFan && auxFan > 0 ? "bg-blue-500/10" : "bg-bambu-dark"}`,
                        title: t("printers.fans.auxiliary"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: `w-3.5 h-3.5 ${auxFan && auxFan > 0 ? "text-blue-400" : "text-bambu-gray/50"}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] ${auxFan && auxFan > 0 ? "text-blue-400" : "text-bambu-gray/50"}`, children: [
                            auxFan ?? 0,
                            "%"
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `flex items-center gap-1 px-1.5 py-1 rounded ${chamberFan && chamberFan > 0 ? "bg-green-500/10" : "bg-bambu-dark"}`,
                        title: t("printers.fans.chamber"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AirVent, { className: `w-3.5 h-3.5 ${chamberFan && chamberFan > 0 ? "text-green-400" : "text-bambu-gray/50"}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] ${chamberFan && chamberFan > 0 ? "text-green-400" : "text-bambu-gray/50"}`, children: [
                            chamberFan ?? 0,
                            "%"
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-5 bg-bambu-gray/30" }),
                    (() => {
                      const speedLabels = { 1: "50%", 2: "100%", 3: "124%", 4: "166%" };
                      const speedPct = speedLabels[status.speed_level] || "100%";
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => setShowSpeedMenu(showSpeedMenu === printer.id ? null : printer.id),
                            disabled: !isPrinting || !hasPermission("printers:control"),
                            className: `flex items-center gap-1 px-1.5 py-1 rounded transition-colors ${isPrinting ? "bg-amber-500/10 hover:bg-amber-500/20" : "bg-bambu-dark cursor-not-allowed"}`,
                            title: isPrinting ? t("printers.speed.title") : void 0,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: `w-3.5 h-3.5 ${isPrinting ? "text-amber-400" : "text-bambu-gray/50"}` }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] ${isPrinting ? "text-amber-400" : "text-bambu-gray/50"}`, children: speedPct })
                            ]
                          }
                        ),
                        showSpeedMenu === printer.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40", onClick: () => setShowSpeedMenu(null) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-full left-0 mb-1 z-50 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-lg py-1 min-w-[130px]", children: [
                            { mode: 1, label: t("printers.speed.silent") },
                            { mode: 2, label: t("printers.speed.standard") },
                            { mode: 3, label: t("printers.speed.sport") },
                            { mode: 4, label: t("printers.speed.ludicrous") }
                          ].map(({ mode, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => {
                                printSpeedMutation.mutate(mode);
                                setShowSpeedMenu(null);
                              },
                              className: `w-full text-left px-3 py-1.5 text-xs transition-colors ${status.speed_level === mode ? "text-bambu-green bg-bambu-green/10" : "text-white hover:bg-bambu-dark-tertiary"}`,
                              children: label
                            },
                            mode
                          )) })
                        ] })
                      ] });
                    })()
                  ] }),
                  isPaused && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-shrink-0 max-[550px]:self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setShowResumeConfirm(true),
                      disabled: isControlBusy || !hasPermission("printers:control"),
                      className: `
                            flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium
                            transition-colors
                            ${hasPermission("printers:control") ? "bg-bambu-green/20 text-bambu-green hover:bg-bambu-green/30" : "bg-bambu-dark text-bambu-gray/50 cursor-not-allowed"}
                          `,
                      title: !hasPermission("printers:control") ? t("printers.permission.noControl") : t("printers.resume"),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3" }),
                        t("printers.resume")
                      ]
                    }
                  ) })
                ] })
              ] });
            })(),
            (amsData?.length > 0 || status.vt_tray.length > 0) && viewMode === "expanded" && (() => {
              const regularAms = amsData.filter((ams) => ams.tray.length > 1);
              const htAms = amsData.filter((ams) => ams.tray.length === 1);
              const isDualNozzle = printer.nozzle_count === 2 || status?.temperatures?.nozzle_2 !== void 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-bambu-gray font-medium", children: t("printers.filaments") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-bambu-dark-tertiary/30" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  regularAms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: regularAms.map((ams) => {
                    const mappedExtruderId = amsExtruderMap[String(ams.id)];
                    const normalizedId = ams.id >= 128 ? ams.id - 128 : ams.id;
                    const extruderId = mappedExtruderId !== void 0 ? mappedExtruderId : normalizedId;
                    const isLeftNozzle = extruderId === 1;
                    const isRightNozzle = extruderId === 0;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary/30", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            AmsNameHoverCard,
                            {
                              ams,
                              printerId: printer.id,
                              label: getAmsLabel(ams.id, ams.tray.length),
                              amsLabels,
                              canEdit: hasPermission("printers:update"),
                              onSaved: refetchAmsLabels,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-medium cursor-default select-none", children: amsLabels?.[ams.id] || getAmsLabel(ams.id, ams.tray.length) })
                            }
                          ),
                          isDualNozzle && (isLeftNozzle || isRightNozzle) && /* @__PURE__ */ jsxRuntimeExports.jsx(NozzleBadge, { side: isLeftNozzle ? "L" : "R" })
                        ] }),
                        (ams.humidity != null || ams.temp != null) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 max-[550px]:flex-col max-[550px]:items-start", children: [
                          ams.humidity != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            HumidityIndicator,
                            {
                              humidity: ams.humidity,
                              goodThreshold: amsThresholds?.humidityGood,
                              fairThreshold: amsThresholds?.humidityFair,
                              onClick: () => setAmsHistoryModal({
                                amsId: ams.id,
                                amsLabel: getAmsLabel(ams.id, ams.tray.length),
                                mode: "humidity"
                              }),
                              compact: true
                            }
                          ),
                          ams.temp != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TemperatureIndicator,
                            {
                              temp: ams.temp,
                              goodThreshold: amsThresholds?.tempGood,
                              fairThreshold: amsThresholds?.tempFair,
                              onClick: () => setAmsHistoryModal({
                                amsId: ams.id,
                                amsLabel: getAmsLabel(ams.id, ams.tray.length),
                                mode: "temperature"
                              }),
                              compact: true
                            }
                          ),
                          status.supports_drying && (ams.module_type === "n3f" || ams.module_type === "n3s") && hasPermission("printers:control") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              disabled: !!(ams.dry_sf_reason?.length && ams.dry_time === 0),
                              onClick: (e) => {
                                if (ams.dry_time > 0) {
                                  stopDryingMutation.mutate(ams.id);
                                } else if (dryingPopoverAmsId === ams.id) {
                                  setDryingPopoverAmsId(null);
                                } else {
                                  const firstTray = ams.tray.find((t2) => t2.tray_type);
                                  const filType = (firstTray?.tray_type || "PLA").split(" ")[0].toUpperCase();
                                  const preset = dryingPresets[filType] || dryingPresets["PLA"];
                                  const moduleType = ams.module_type;
                                  setDryingFilament(filType);
                                  setDryingTemp(preset[moduleType] || preset.n3f);
                                  setDryingDuration(moduleType === "n3s" ? preset.n3s_hours : preset.n3f_hours);
                                  setDryingRotateTray(false);
                                  setDryingPopoverModuleType(ams.module_type);
                                  setDryingPopoverAmsId(ams.id);
                                  const rect = e.currentTarget.getBoundingClientRect();
                                  setDryingPopoverPos({ top: rect.bottom + 4, left: Math.max(8, rect.right - 240) });
                                }
                              },
                              className: `flex items-center gap-0.5 px-1 py-0.5 rounded text-[9px] transition-colors ${ams.dry_time > 0 ? "bg-amber-500/20 text-amber-400" : ams.dry_sf_reason?.length ? "bg-bambu-dark-tertiary/30 text-bambu-gray/50 cursor-not-allowed" : "bg-bambu-dark-tertiary/50 text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary"}`,
                              title: ams.dry_time > 0 ? t("printers.drying.stop") : ams.dry_sf_reason?.length ? t("printers.drying.powerRequired") : t("printers.drying.start"),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3" })
                            }
                          )
                        ] })
                      ] }),
                      ams.dry_time > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-2 py-1 mb-1 bg-amber-500/10 border border-amber-500/20 rounded text-[9px]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 text-amber-400 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 font-medium", children: t("printers.drying.active") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/70", children: t("printers.drying.timeRemaining", {
                          time: ams.dry_time >= 60 ? `${Math.floor(ams.dry_time / 60)}h ${ams.dry_time % 60}m` : `${ams.dry_time}m`
                        }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => stopDryingMutation.mutate(ams.id),
                            disabled: stopDryingMutation.isPending,
                            className: "ml-auto text-amber-400 hover:text-amber-300 transition-colors disabled:opacity-50",
                            title: t("printers.drying.stop"),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: [0, 1, 2, 3].map((slotIdx) => {
                        const tray = ams.tray[slotIdx] || ams.tray.find((t2) => t2.id === slotIdx);
                        const hasFillLevel = tray?.tray_type && tray.remain >= 0;
                        const isEmpty = !tray?.tray_type;
                        const globalTrayId = ams.id * 4 + slotIdx;
                        const isActive = effectiveTrayNow === globalTrayId;
                        const cloudInfo = tray?.tray_info_idx ? filamentInfo?.[tray.tray_info_idx] : null;
                        const slotPreset = slotPresets?.[globalTrayId];
                        const trayTag = (tray?.tray_uuid || tray?.tag_uid || getFallbackSpoolTag(printer.serial_number, ams.id, slotIdx))?.toUpperCase();
                        const linkedSpool = trayTag ? linkedSpools?.[trayTag] : void 0;
                        const spoolmanFill = getSpoolmanFillLevel(linkedSpool);
                        const inventoryAssignment = onGetAssignment?.(printer.id, ams.id, slotIdx);
                        const inventoryFill = (() => {
                          const sp = inventoryAssignment?.spool;
                          if (sp && sp.label_weight > 0 && sp.weight_used != null) {
                            return Math.round(Math.max(0, sp.label_weight - sp.weight_used) / sp.label_weight * 100);
                          }
                          return null;
                        })();
                        const resolvedInventoryFill = inventoryFill === 0 && hasFillLevel && tray.remain > 0 ? null : inventoryFill;
                        const effectiveFill = spoolmanFill ?? resolvedInventoryFill ?? (hasFillLevel ? tray.remain : null);
                        const fillSource = spoolmanFill !== null ? "spoolman" : resolvedInventoryFill !== null ? "inventory" : hasFillLevel ? "ams" : void 0;
                        const filamentData = tray?.tray_type ? {
                          vendor: isBambuLabSpool(tray) ? "Bambu Lab" : "Generic",
                          profile: slotPreset?.preset_name || cloudInfo?.name || inventoryAssignment?.spool?.slicer_filament_name || tray.tray_sub_brands || tray.tray_type,
                          colorName: getBambuColorName(tray.tray_id_name) || hexToColorName(tray.tray_color),
                          colorHex: tray.tray_color || null,
                          kFactor: formatKValue(tray.k),
                          fillLevel: effectiveFill,
                          trayUuid: tray.tray_uuid || null,
                          tagUid: tray.tag_uid || null,
                          fillSource
                        } : null;
                        const isRefreshing = refreshingSlot?.amsId === ams.id && refreshingSlot?.slotId === slotIdx;
                        const slotVisual = /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: `bg-bambu-dark-tertiary rounded p-1 text-center ${isEmpty ? "opacity-50" : ""} ${isActive ? "ring-2 ring-bambu-green ring-offset-1 ring-offset-bambu-dark" : ""}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                FilamentSlotCircle,
                                {
                                  trayColor: tray?.tray_color,
                                  trayType: tray?.tray_type,
                                  isEmpty,
                                  slotNumber: slotIdx + 1
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white font-bold truncate", children: tray?.tray_type || "—" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1.5 bg-black/30 rounded-full overflow-hidden", children: effectiveFill !== null && effectiveFill >= 0 && !isEmpty && tray && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "h-full rounded-full transition-all",
                                  style: {
                                    width: `${effectiveFill}%`,
                                    backgroundColor: getFillBarColor(effectiveFill)
                                  }
                                }
                              ) })
                            ]
                          }
                        );
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                          isRefreshing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-bambu-dark-tertiary/80 rounded flex items-center justify-center z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 text-bambu-green animate-spin" }) }),
                          status?.state !== "RUNNING" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: (e) => {
                                e.stopPropagation();
                                setAmsSlotMenu(
                                  amsSlotMenu?.amsId === ams.id && amsSlotMenu?.slotId === slotIdx ? null : { amsId: ams.id, slotId: slotIdx }
                                );
                              },
                              className: "absolute -top-1 -right-1 w-4 h-4 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-bambu-dark-tertiary",
                              title: t("printers.slotOptions"),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-2.5 h-2.5 text-bambu-gray" })
                            }
                          ),
                          status?.state !== "RUNNING" && amsSlotMenu?.amsId === ams.id && amsSlotMenu?.slotId === slotIdx && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 mt-1 z-50 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl py-1 min-w-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              className: `w-full px-3 py-1.5 text-left text-xs flex items-center gap-2 ${hasPermission("printers:ams_rfid") ? "text-white hover:bg-bambu-dark-tertiary" : "text-bambu-gray/50 cursor-not-allowed"}`,
                              onClick: (e) => {
                                e.stopPropagation();
                                if (!hasPermission("printers:ams_rfid")) return;
                                refreshAmsSlotMutation.mutate({ amsId: ams.id, slotId: slotIdx });
                                setAmsSlotMenu(null);
                              },
                              disabled: isRefreshing || !hasPermission("printers:ams_rfid"),
                              title: !hasPermission("printers:ams_rfid") ? t("printers.permission.noAmsRfid") : void 0,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3 h-3 ${isRefreshing ? "animate-spin" : ""}` }),
                                t("printers.rfid.reread")
                              ]
                            }
                          ) }),
                          filamentData ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            FilamentHoverCard,
                            {
                              data: filamentData,
                              spoolman: {
                                enabled: spoolmanEnabled,
                                linkedSpoolId: trayTag ? linkedSpools?.[trayTag]?.id : void 0,
                                spoolmanUrl,
                                syncMode: spoolmanSyncMode,
                                onLinkSpool: spoolmanEnabled ? () => {
                                  const linkTag = (filamentData.trayUuid || filamentData.tagUid || getFallbackSpoolTag(printer.serial_number, ams.id, slotIdx)).toUpperCase();
                                  setLinkSpoolModal({
                                    tagUid: filamentData.tagUid || linkTag,
                                    trayUuid: filamentData.trayUuid || "",
                                    printerId: printer.id,
                                    amsId: ams.id,
                                    trayId: slotIdx
                                  });
                                } : void 0,
                                onUnlinkSpool: linkedSpool?.id ? () => unlinkSpoolMutation.mutate(linkedSpool.id) : void 0
                              },
                              inventory: spoolmanEnabled ? void 0 : (() => {
                                const assignment = onGetAssignment?.(printer.id, ams.id, slotIdx);
                                return {
                                  assignedSpool: assignment?.spool ? {
                                    id: assignment.spool.id,
                                    material: assignment.spool.material,
                                    brand: assignment.spool.brand,
                                    color_name: assignment.spool.color_name,
                                    remainingWeightGrams: Math.max(0, Math.round(assignment.spool.label_weight - assignment.spool.weight_used))
                                  } : null,
                                  onAssignSpool: filamentData.vendor !== "Bambu Lab" ? () => setAssignSpoolModal({
                                    printerId: printer.id,
                                    amsId: ams.id,
                                    trayId: slotIdx,
                                    trayInfo: {
                                      type: tray?.tray_type || filamentData.profile,
                                      material: tray?.tray_type ?? void 0,
                                      profile: filamentData.profile,
                                      color: filamentData.colorHex || "",
                                      location: `${getAmsLabel(ams.id, ams.tray.length)} Slot ${slotIdx + 1}`
                                    }
                                  }) : void 0,
                                  onUnassignSpool: assignment && filamentData.vendor !== "Bambu Lab" ? () => onUnassignSpool?.(printer.id, ams.id, slotIdx) : void 0
                                };
                              })(),
                              configureSlot: {
                                enabled: hasPermission("printers:control"),
                                onConfigure: () => setConfigureSlotModal({
                                  amsId: ams.id,
                                  trayId: slotIdx,
                                  trayCount: ams.tray.length,
                                  trayType: tray?.tray_type || void 0,
                                  trayColor: tray?.tray_color || void 0,
                                  traySubBrands: tray?.tray_sub_brands || void 0,
                                  trayInfoIdx: tray?.tray_info_idx || void 0,
                                  extruderId: mappedExtruderId,
                                  caliIdx: tray?.cali_idx,
                                  savedPresetId: slotPreset?.preset_id
                                })
                              },
                              children: slotVisual
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                            EmptySlotHoverCard,
                            {
                              configureSlot: tray?.state === 10 ? {
                                enabled: hasPermission("printers:control"),
                                onConfigure: () => setConfigureSlotModal({
                                  amsId: ams.id,
                                  trayId: slotIdx,
                                  trayCount: ams.tray.length,
                                  extruderId: mappedExtruderId
                                })
                              } : void 0,
                              inventory: tray?.state === 10 && !spoolmanEnabled ? {
                                onAssignSpool: () => setAssignSpoolModal({
                                  printerId: printer.id,
                                  amsId: ams.id,
                                  trayId: slotIdx,
                                  trayInfo: {
                                    type: "",
                                    color: "",
                                    location: `${getAmsLabel(ams.id, ams.tray.length)} Slot ${slotIdx + 1}`
                                  }
                                })
                              } : void 0,
                              children: slotVisual
                            }
                          )
                        ] }, slotIdx);
                      }) })
                    ] }, ams.id);
                  }) }),
                  (htAms.length > 0 || status.vt_tray.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-3", children: [
                    htAms.map((ams) => {
                      const mappedExtruderId = amsExtruderMap[String(ams.id)];
                      const normalizedId = ams.id >= 128 ? ams.id - 128 : ams.id;
                      const extruderId = mappedExtruderId !== void 0 ? mappedExtruderId : normalizedId;
                      const isLeftNozzle = extruderId === 1;
                      const isRightNozzle = extruderId === 0;
                      const tray = ams.tray[0];
                      const hasFillLevel = tray?.tray_type && tray.remain >= 0;
                      const isEmpty = !tray?.tray_type;
                      const globalTrayId = getGlobalTrayId(ams.id, tray?.id ?? 0, false);
                      const isActive = effectiveTrayNow === globalTrayId;
                      const cloudInfo = tray?.tray_info_idx ? filamentInfo?.[tray.tray_info_idx] : null;
                      const slotPreset = slotPresets?.[globalTrayId];
                      const htSlotId = tray?.id ?? 0;
                      const htTrayTag = (tray?.tray_uuid || tray?.tag_uid || getFallbackSpoolTag(printer.serial_number, ams.id, htSlotId))?.toUpperCase();
                      const htLinkedSpool = htTrayTag ? linkedSpools?.[htTrayTag] : void 0;
                      const htSpoolmanFill = getSpoolmanFillLevel(htLinkedSpool);
                      const htInventoryAssignment = onGetAssignment?.(printer.id, ams.id, htSlotId);
                      const htInventoryFill = (() => {
                        const sp = htInventoryAssignment?.spool;
                        if (sp && sp.label_weight > 0 && sp.weight_used != null) {
                          return Math.round(Math.max(0, sp.label_weight - sp.weight_used) / sp.label_weight * 100);
                        }
                        return null;
                      })();
                      const htResolvedInventoryFill = htInventoryFill === 0 && hasFillLevel && tray.remain > 0 ? null : htInventoryFill;
                      const htEffectiveFill = htSpoolmanFill ?? htResolvedInventoryFill ?? (hasFillLevel ? tray.remain : null);
                      const htFillSource = htSpoolmanFill !== null ? "spoolman" : htResolvedInventoryFill !== null ? "inventory" : hasFillLevel ? "ams" : void 0;
                      const filamentData = tray?.tray_type ? {
                        vendor: isBambuLabSpool(tray) ? "Bambu Lab" : "Generic",
                        profile: slotPreset?.preset_name || cloudInfo?.name || htInventoryAssignment?.spool?.slicer_filament_name || tray.tray_sub_brands || tray.tray_type,
                        colorName: getBambuColorName(tray.tray_id_name) || hexToColorName(tray.tray_color),
                        colorHex: tray.tray_color || null,
                        kFactor: formatKValue(tray.k),
                        fillLevel: htEffectiveFill,
                        trayUuid: tray.tray_uuid || null,
                        tagUid: tray.tag_uid || null,
                        fillSource: htFillSource
                      } : null;
                      const isHtRefreshing = refreshingSlot?.amsId === ams.id && refreshingSlot?.slotId === htSlotId;
                      const slotVisual = /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `bg-bambu-dark-tertiary rounded p-1 text-center ${isEmpty ? "opacity-50" : ""} ${isActive ? "ring-2 ring-bambu-green ring-offset-1 ring-offset-bambu-dark" : ""}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              FilamentSlotCircle,
                              {
                                trayColor: tray?.tray_color,
                                trayType: tray?.tray_type,
                                isEmpty,
                                slotNumber: 1
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white font-bold truncate", children: tray?.tray_type || "—" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1.5 bg-black/30 rounded-full overflow-hidden", children: htEffectiveFill !== null && htEffectiveFill >= 0 && !isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "h-full rounded-full transition-all",
                                style: {
                                  width: `${htEffectiveFill}%`,
                                  backgroundColor: getFillBarColor(htEffectiveFill)
                                }
                              }
                            ) })
                          ]
                        }
                      );
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary/30", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            AmsNameHoverCard,
                            {
                              ams,
                              printerId: printer.id,
                              label: getAmsLabel(ams.id, ams.tray.length),
                              amsLabels,
                              canEdit: hasPermission("printers:update"),
                              onSaved: refetchAmsLabels,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-medium cursor-default select-none", children: amsLabels?.[ams.id] || getAmsLabel(ams.id, ams.tray.length) })
                            }
                          ),
                          isDualNozzle && (isLeftNozzle || isRightNozzle) && /* @__PURE__ */ jsxRuntimeExports.jsx(NozzleBadge, { side: isLeftNozzle ? "L" : "R" }),
                          status.supports_drying && (ams.module_type === "n3f" || ams.module_type === "n3s") && hasPermission("printers:control") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: (e) => {
                                if (ams.dry_time > 0) {
                                  stopDryingMutation.mutate(ams.id);
                                } else if (dryingPopoverAmsId === ams.id) {
                                  setDryingPopoverAmsId(null);
                                } else {
                                  const firstTray = ams.tray.find((t2) => t2.tray_type);
                                  const filType = (firstTray?.tray_type || "PLA").split(" ")[0].toUpperCase();
                                  const preset = dryingPresets[filType] || dryingPresets["PLA"];
                                  const moduleType = ams.module_type;
                                  setDryingFilament(filType);
                                  setDryingTemp(preset[moduleType] || preset.n3f);
                                  setDryingDuration(moduleType === "n3s" ? preset.n3s_hours : preset.n3f_hours);
                                  setDryingRotateTray(false);
                                  setDryingPopoverModuleType(ams.module_type);
                                  setDryingPopoverAmsId(ams.id);
                                  const rect = e.currentTarget.getBoundingClientRect();
                                  setDryingPopoverPos({ top: rect.bottom + 4, left: Math.max(8, rect.right - 240) });
                                }
                              },
                              className: `flex items-center gap-0.5 px-1 py-0.5 rounded text-[9px] transition-colors ${ams.dry_time > 0 ? "bg-amber-500/20 text-amber-400" : "bg-bambu-dark-tertiary/50 text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary"}`,
                              title: ams.dry_time > 0 ? t("printers.drying.stop") : t("printers.drying.start"),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3" })
                            }
                          ) })
                        ] }),
                        ams.dry_time > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 mb-1 bg-amber-500/10 border border-amber-500/20 rounded text-[9px] whitespace-nowrap overflow-hidden", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 text-amber-400 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300/70 text-[8px] truncate", children: ams.dry_time >= 60 ? `${Math.floor(ams.dry_time / 60)}h ${ams.dry_time % 60}m` : `${ams.dry_time}m` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => stopDryingMutation.mutate(ams.id),
                              disabled: stopDryingMutation.isPending,
                              className: "ml-auto text-amber-400 hover:text-amber-300 transition-colors disabled:opacity-50 shrink-0",
                              title: t("printers.drying.stop"),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 max-[550px]:flex-col max-[550px]:items-start", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group flex-1 max-[550px]:w-full", children: [
                            isHtRefreshing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-bambu-dark-tertiary/80 rounded flex items-center justify-center z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 text-bambu-green animate-spin" }) }),
                            status?.state !== "RUNNING" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: (e) => {
                                  e.stopPropagation();
                                  setAmsSlotMenu(
                                    amsSlotMenu?.amsId === ams.id && amsSlotMenu?.slotId === htSlotId ? null : { amsId: ams.id, slotId: htSlotId }
                                  );
                                },
                                className: "absolute -top-1 -right-1 w-4 h-4 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-bambu-dark-tertiary",
                                title: t("printers.slotOptions"),
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-2.5 h-2.5 text-bambu-gray" })
                              }
                            ),
                            status?.state !== "RUNNING" && amsSlotMenu?.amsId === ams.id && amsSlotMenu?.slotId === htSlotId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 mt-1 z-50 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl py-1 min-w-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "button",
                              {
                                className: `w-full px-3 py-1.5 text-left text-xs flex items-center gap-2 ${hasPermission("printers:ams_rfid") ? "text-white hover:bg-bambu-dark-tertiary" : "text-bambu-gray/50 cursor-not-allowed"}`,
                                onClick: (e) => {
                                  e.stopPropagation();
                                  if (!hasPermission("printers:ams_rfid")) return;
                                  refreshAmsSlotMutation.mutate({ amsId: ams.id, slotId: htSlotId });
                                  setAmsSlotMenu(null);
                                },
                                disabled: isHtRefreshing || !hasPermission("printers:ams_rfid"),
                                title: !hasPermission("printers:ams_rfid") ? t("printers.permission.noAmsRfid") : void 0,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3 h-3 ${isHtRefreshing ? "animate-spin" : ""}` }),
                                  t("printers.rfid.reread")
                                ]
                              }
                            ) }),
                            filamentData ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                              FilamentHoverCard,
                              {
                                data: filamentData,
                                spoolman: {
                                  enabled: spoolmanEnabled,
                                  linkedSpoolId: htTrayTag ? linkedSpools?.[htTrayTag]?.id : void 0,
                                  spoolmanUrl,
                                  syncMode: spoolmanSyncMode,
                                  onLinkSpool: spoolmanEnabled ? () => {
                                    const linkTag = (filamentData.trayUuid || filamentData.tagUid || getFallbackSpoolTag(printer.serial_number, ams.id, htSlotId)).toUpperCase();
                                    setLinkSpoolModal({
                                      tagUid: filamentData.tagUid || linkTag,
                                      trayUuid: filamentData.trayUuid || "",
                                      printerId: printer.id,
                                      amsId: ams.id,
                                      trayId: htSlotId
                                    });
                                  } : void 0,
                                  onUnlinkSpool: htLinkedSpool?.id ? () => unlinkSpoolMutation.mutate(htLinkedSpool.id) : void 0
                                },
                                inventory: spoolmanEnabled ? void 0 : (() => {
                                  const assignment = onGetAssignment?.(printer.id, ams.id, htSlotId);
                                  return {
                                    assignedSpool: assignment?.spool ? {
                                      id: assignment.spool.id,
                                      material: assignment.spool.material,
                                      brand: assignment.spool.brand,
                                      color_name: assignment.spool.color_name,
                                      remainingWeightGrams: Math.max(0, Math.round(assignment.spool.label_weight - assignment.spool.weight_used))
                                    } : null,
                                    onAssignSpool: filamentData.vendor !== "Bambu Lab" ? () => setAssignSpoolModal({
                                      printerId: printer.id,
                                      amsId: ams.id,
                                      trayId: htSlotId,
                                      trayInfo: {
                                        type: tray?.tray_type || filamentData.profile,
                                        material: tray?.tray_type ?? void 0,
                                        profile: filamentData.profile,
                                        color: filamentData.colorHex || "",
                                        location: getAmsLabel(ams.id, ams.tray.length)
                                      }
                                    }) : void 0,
                                    onUnassignSpool: assignment && filamentData.vendor !== "Bambu Lab" ? () => onUnassignSpool?.(printer.id, ams.id, htSlotId) : void 0
                                  };
                                })(),
                                configureSlot: {
                                  enabled: hasPermission("printers:control"),
                                  onConfigure: () => setConfigureSlotModal({
                                    amsId: ams.id,
                                    trayId: htSlotId,
                                    trayCount: ams.tray.length,
                                    trayType: tray?.tray_type || void 0,
                                    trayColor: tray?.tray_color || void 0,
                                    traySubBrands: tray?.tray_sub_brands || void 0,
                                    trayInfoIdx: tray?.tray_info_idx || void 0,
                                    extruderId: mappedExtruderId,
                                    caliIdx: tray?.cali_idx,
                                    savedPresetId: slotPreset?.preset_id
                                  })
                                },
                                children: slotVisual
                              }
                            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                              EmptySlotHoverCard,
                              {
                                configureSlot: tray?.state === 10 ? {
                                  enabled: hasPermission("printers:control"),
                                  onConfigure: () => setConfigureSlotModal({
                                    amsId: ams.id,
                                    trayId: htSlotId,
                                    trayCount: ams.tray.length,
                                    extruderId: mappedExtruderId
                                  })
                                } : void 0,
                                inventory: tray?.state === 10 && !spoolmanEnabled ? {
                                  onAssignSpool: () => setAssignSpoolModal({
                                    printerId: printer.id,
                                    amsId: ams.id,
                                    trayId: htSlotId,
                                    trayInfo: {
                                      type: "",
                                      color: "",
                                      location: getAmsLabel(ams.id, ams.tray.length)
                                    }
                                  })
                                } : void 0,
                                children: slotVisual
                              }
                            )
                          ] }),
                          (ams.humidity != null || ams.temp != null) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-1 shrink-0 max-[550px]:w-full", children: [
                            ams.temp != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              TemperatureIndicator,
                              {
                                temp: ams.temp,
                                goodThreshold: amsThresholds?.tempGood,
                                fairThreshold: amsThresholds?.tempFair,
                                onClick: () => setAmsHistoryModal({
                                  amsId: ams.id,
                                  amsLabel: getAmsLabel(ams.id, ams.tray.length),
                                  mode: "temperature"
                                }),
                                compact: true
                              }
                            ),
                            ams.humidity != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              HumidityIndicator,
                              {
                                humidity: ams.humidity,
                                goodThreshold: amsThresholds?.humidityGood,
                                fairThreshold: amsThresholds?.humidityFair,
                                onClick: () => setAmsHistoryModal({
                                  amsId: ams.id,
                                  amsLabel: getAmsLabel(ams.id, ams.tray.length),
                                  mode: "humidity"
                                }),
                                compact: true
                              }
                            )
                          ] })
                        ] })
                      ] }, ams.id);
                    }),
                    status.vt_tray.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary/30 ${status.vt_tray.length === 1 ? "max-w-[50%]" : ""}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white font-medium", children: t("printers.external") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid ${status.vt_tray.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-1.5`, children: [...status.vt_tray].sort((a, b) => (a.id ?? 254) - (b.id ?? 254)).map((extTray) => {
                        const extTrayId = extTray.id ?? 254;
                        const isExtActive = isDualNozzle && effectiveTrayNow === 254 ? extTrayId === 254 && status.active_extruder === 1 || extTrayId === 255 && status.active_extruder === 0 : effectiveTrayNow === extTrayId;
                        const slotTrayId = extTrayId - 254;
                        const extLabel = isDualNozzle ? extTrayId === 254 ? t("printers.extL") : t("printers.extR") : "";
                        const extCloudInfo = extTray.tray_info_idx ? filamentInfo?.[extTray.tray_info_idx] : null;
                        const extSlotPreset = slotPresets?.[255 * 4 + slotTrayId];
                        const extTrayTag = (extTray.tray_uuid || extTray.tag_uid || getFallbackSpoolTag(printer.serial_number, 255, slotTrayId))?.toUpperCase();
                        const extLinkedSpool = extTrayTag ? linkedSpools?.[extTrayTag] : void 0;
                        const extSpoolmanFill = getSpoolmanFillLevel(extLinkedSpool);
                        const extInventoryAssignment = onGetAssignment?.(printer.id, 255, slotTrayId);
                        const extInventoryFill = (() => {
                          const sp = extInventoryAssignment?.spool;
                          if (sp && sp.label_weight > 0 && sp.weight_used != null) {
                            return Math.round(Math.max(0, sp.label_weight - sp.weight_used) / sp.label_weight * 100);
                          }
                          return null;
                        })();
                        const extHasFillLevel = extTray.tray_type && extTray.remain >= 0;
                        const extResolvedInventoryFill = extInventoryFill === 0 && extHasFillLevel && extTray.remain > 0 ? null : extInventoryFill;
                        const extEffectiveFill = extSpoolmanFill ?? extResolvedInventoryFill ?? (extHasFillLevel ? extTray.remain : null);
                        const extFillSource = extSpoolmanFill !== null ? "spoolman" : extResolvedInventoryFill !== null ? "inventory" : extHasFillLevel ? "ams" : void 0;
                        const extFilamentData = {
                          vendor: isBambuLabSpool(extTray) ? "Bambu Lab" : "Generic",
                          profile: extSlotPreset?.preset_name || extCloudInfo?.name || extInventoryAssignment?.spool?.slicer_filament_name || extTray.tray_sub_brands || extTray.tray_type || "Unknown",
                          colorName: getBambuColorName(extTray.tray_id_name) || hexToColorName(extTray.tray_color),
                          colorHex: extTray.tray_color || null,
                          kFactor: formatKValue(extTray.k),
                          fillLevel: extEffectiveFill,
                          trayUuid: extTray.tray_uuid || null,
                          tagUid: extTray.tag_uid || null,
                          fillSource: extFillSource
                        };
                        const isEmpty = !extTray.tray_type;
                        const extSlotContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-bambu-dark-tertiary rounded p-1 text-center ${isEmpty ? "opacity-50" : ""} ${isExtActive ? "ring-2 ring-bambu-green ring-offset-1 ring-offset-bambu-dark" : ""}`, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            FilamentSlotCircle,
                            {
                              trayColor: extTray.tray_color,
                              trayType: extTray.tray_type,
                              isEmpty,
                              slotNumber: slotTrayId + 1
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[9px] font-bold truncate ${isEmpty ? "text-white/40" : "text-white"}`, children: extTray.tray_type || "—" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1.5 bg-black/30 rounded-full overflow-hidden", children: extEffectiveFill !== null && extEffectiveFill >= 0 && !isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "h-full rounded-full transition-all",
                              style: {
                                width: `${extEffectiveFill}%`,
                                backgroundColor: getFillBarColor(extEffectiveFill)
                              }
                            }
                          ) }),
                          extLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7px] text-white/40 mt-0.5 truncate", children: extLabel })
                        ] });
                        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative group", children: !isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          FilamentHoverCard,
                          {
                            data: extFilamentData,
                            spoolman: {
                              enabled: spoolmanEnabled,
                              linkedSpoolId: extTrayTag ? linkedSpools?.[extTrayTag]?.id : void 0,
                              spoolmanUrl,
                              syncMode: spoolmanSyncMode,
                              onLinkSpool: spoolmanEnabled ? () => {
                                const linkTag = (extFilamentData.trayUuid || extFilamentData.tagUid || getFallbackSpoolTag(printer.serial_number, 255, slotTrayId)).toUpperCase();
                                setLinkSpoolModal({
                                  tagUid: extFilamentData.tagUid || linkTag,
                                  trayUuid: extFilamentData.trayUuid || "",
                                  printerId: printer.id,
                                  amsId: 255,
                                  trayId: slotTrayId
                                });
                              } : void 0,
                              onUnlinkSpool: extLinkedSpool?.id ? () => unlinkSpoolMutation.mutate(extLinkedSpool.id) : void 0
                            },
                            inventory: spoolmanEnabled ? void 0 : (() => {
                              const assignment = onGetAssignment?.(printer.id, 255, slotTrayId);
                              return {
                                assignedSpool: assignment?.spool ? {
                                  id: assignment.spool.id,
                                  material: assignment.spool.material,
                                  brand: assignment.spool.brand,
                                  color_name: assignment.spool.color_name,
                                  remainingWeightGrams: Math.max(0, Math.round(assignment.spool.label_weight - assignment.spool.weight_used))
                                } : null,
                                onAssignSpool: () => setAssignSpoolModal({
                                  printerId: printer.id,
                                  amsId: 255,
                                  trayId: slotTrayId,
                                  trayInfo: {
                                    type: extTray.tray_type || extFilamentData.profile,
                                    material: extTray.tray_type ?? void 0,
                                    profile: extFilamentData.profile,
                                    color: extFilamentData.colorHex || "",
                                    location: extLabel || t("printers.external")
                                  }
                                }),
                                onUnassignSpool: assignment ? () => onUnassignSpool?.(printer.id, 255, slotTrayId) : void 0
                              };
                            })(),
                            configureSlot: {
                              enabled: hasPermission("printers:control"),
                              onConfigure: () => setConfigureSlotModal({
                                amsId: 255,
                                trayId: slotTrayId,
                                trayCount: 1,
                                trayType: extTray.tray_type || void 0,
                                trayColor: extTray.tray_color || void 0,
                                traySubBrands: extTray.tray_sub_brands || void 0,
                                trayInfoIdx: extTray.tray_info_idx || void 0,
                                extruderId: isDualNozzle ? extTrayId === 254 ? 1 : 0 : void 0,
                                caliIdx: extTray.cali_idx,
                                savedPresetId: extSlotPreset?.preset_id
                              })
                            },
                            children: extSlotContent
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                          EmptySlotHoverCard,
                          {
                            configureSlot: {
                              enabled: hasPermission("printers:control"),
                              onConfigure: () => setConfigureSlotModal({
                                amsId: 255,
                                trayId: slotTrayId,
                                trayCount: 1,
                                extruderId: isDualNozzle ? extTrayId === 254 ? 1 : 0 : void 0
                              })
                            },
                            inventory: spoolmanEnabled ? void 0 : {
                              onAssignSpool: () => setAssignSpoolModal({
                                printerId: printer.id,
                                amsId: 255,
                                trayId: slotTrayId,
                                trayInfo: {
                                  type: "",
                                  color: "",
                                  location: extLabel || t("printers.external")
                                }
                              })
                            },
                            children: extSlotContent
                          }
                        ) }, extTrayId);
                      }) })
                    ] })
                  ] })
                ] })
              ] });
            })()
          ] }),
          smartPlug && viewMode === "expanded" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-bambu-dark-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-bambu-gray flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white truncate", children: smartPlug.name }),
                plugStatus && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${plugStatus.state === "ON" ? "bg-bambu-green/20 text-bambu-green" : plugStatus.state === "OFF" ? "bg-red-500/20 text-red-400" : "bg-bambu-gray/20 text-bambu-gray"}`,
                    children: [
                      plugStatus.state || "?",
                      plugStatus.state === "ON" && plugStatus.energy?.power != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-400 ml-1.5", children: [
                        "· ",
                        plugStatus.energy.power,
                        "W"
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setShowPowerOnConfirm(true),
                    disabled: powerControlMutation.isPending || plugStatus?.state === "ON" || !hasPermission("smart_plugs:control"),
                    className: `px-2 py-1 text-xs rounded transition-colors flex items-center gap-1 ${!hasPermission("smart_plugs:control") ? "bg-bambu-dark text-bambu-gray/50 cursor-not-allowed" : plugStatus?.state === "ON" ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary"}`,
                    title: !hasPermission("smart_plugs:control") ? t("printers.permission.noSmartPlugControl") : void 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-3 h-3" }),
                      "On"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setShowPowerOffConfirm(true),
                    disabled: powerControlMutation.isPending || plugStatus?.state === "OFF" || !hasPermission("smart_plugs:control"),
                    className: `px-2 py-1 text-xs rounded transition-colors flex items-center gap-1 ${!hasPermission("smart_plugs:control") ? "bg-bambu-dark text-bambu-gray/50 cursor-not-allowed" : plugStatus?.state === "OFF" ? "bg-red-500/30 text-red-400" : "bg-bambu-dark text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary"}`,
                    title: !hasPermission("smart_plugs:control") ? t("printers.permission.noSmartPlugControl") : void 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PowerOff, { className: "w-3 h-3" }),
                      "Off"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs hidden sm:inline ${smartPlug.auto_off_executed ? "text-bambu-green" : "text-bambu-gray"}`, children: smartPlug.auto_off_executed ? "Auto-off done" : "Auto-off" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => toggleAutoOffMutation.mutate(!smartPlug.auto_off),
                    disabled: toggleAutoOffMutation.isPending || smartPlug.auto_off_executed || !hasPermission("smart_plugs:control"),
                    title: !hasPermission("smart_plugs:control") ? t("printers.permission.noSmartPlugControl") : smartPlug.auto_off_executed ? t("printers.autoOffExecuted") : t("printers.autoOffAfterPrint"),
                    className: `relative w-9 h-5 rounded-full transition-colors flex-shrink-0 ${!hasPermission("smart_plugs:control") ? "bg-bambu-dark-tertiary/50 cursor-not-allowed" : smartPlug.auto_off_executed ? "bg-bambu-green/50 cursor-not-allowed" : smartPlug.auto_off ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform ${smartPlug.auto_off || smartPlug.auto_off_executed ? "translate-x-4" : "translate-x-0"}`
                      }
                    )
                  }
                )
              ] })
            ] }),
            scriptPlugs && scriptPlugs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2 pt-2 border-t border-bambu-dark-tertiary/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-3.5 h-3.5 text-blue-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: "HA:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: scriptPlugs.map((script) => {
                const isScript = script.ha_entity_id?.startsWith("script.");
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => runScriptMutation.mutate({ id: script.id, action: isScript ? "on" : "toggle" }),
                    disabled: runScriptMutation.isPending,
                    title: `${isScript ? "Run" : "Toggle"} ${script.ha_entity_id}`,
                    className: "px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded transition-colors flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-2.5 h-2.5" }),
                      script.name
                    ]
                  },
                  script.id
                );
              }) })
            ] })
          ] }),
          viewMode === "expanded" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-bambu-dark-tertiary flex items-center justify-end gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "secondary",
                size: "sm",
                onClick: () => chamberLightMutation.mutate(!status?.chamber_light),
                disabled: !status?.connected || chamberLightMutation.isPending || !hasPermission("printers:control"),
                title: !hasPermission("printers:control") ? t("printers.permission.noControl") : status?.chamber_light ? t("printers.chamberLightOff") : t("printers.chamberLightOn"),
                className: status?.chamber_light ? "!border-yellow-500 !text-yellow-400 hover:!bg-yellow-500/20" : "",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChamberLight, { on: status?.chamber_light ?? false, className: `w-4 h-4 ${status?.chamber_light ? "text-yellow-400" : ""}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "secondary",
                size: "sm",
                "data-onboarding": "printer-camera",
                onClick: openCameraView,
                disabled: !status?.connected || !hasPermission("camera:view"),
                title: !hasPermission("camera:view") ? t("printers.permission.noCamera") : cameraViewMode === "embedded" ? t("printers.openCameraOverlay") : t("printers.openCameraWindow"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex rounded-md ${printer.plate_detection_enabled ? "ring-1 ring-green-500" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "secondary",
                  size: "sm",
                  onClick: handleTogglePlateDetection,
                  disabled: !status?.connected || plateDetectionMutation.isPending || !hasPermission("printers:update"),
                  title: !hasPermission("printers:update") ? t("printers.plateDetection.noPermission") : printer.plate_detection_enabled ? t("printers.plateDetection.enabledClick") : t("printers.plateDetection.disabledClick"),
                  className: `!rounded-r-none !border-r-0 ${printer.plate_detection_enabled ? "!border-green-500 !text-green-400 hover:!bg-green-500/20" : ""}`,
                  children: plateDetectionMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ScanSearch, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "secondary",
                  size: "sm",
                  onClick: handleOpenPlateManagement,
                  disabled: !status?.connected || isCheckingPlate || !hasPermission("printers:update"),
                  title: !hasPermission("printers:update") ? t("printers.plateDetection.noPermission") : t("printers.plateDetection.manageCalibration"),
                  className: `!rounded-l-none !px-1.5 ${printer.plate_detection_enabled ? "!border-green-500 !text-green-400 hover:!bg-green-500/20" : ""}`,
                  children: isCheckingPlate ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "secondary",
                size: "sm",
                onClick: () => setShowFileManager(true),
                disabled: !isConnected || !hasPermission("printers:files"),
                title: !hasPermission("printers:files") ? t("printers.permission.noFiles") : t("printers.browseFiles"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, { className: "w-4 h-4" }),
                  t("printers.files")
                ]
              }
            ),
            isConnected && status?.state !== "RUNNING" && status?.state !== "PAUSE" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                onClick: () => setShowUploadForPrint(true),
                disabled: !hasPermission("printers:control"),
                title: !hasPermission("printers:control") ? t("printers.permission.noControl") : t("common.print"),
                className: "!bg-bambu-green hover:!bg-bambu-green/80 !text-white",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
                  t("common.print")
                ]
              }
            )
          ] })
        ] }),
        showFileManager && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FileManagerModal,
          {
            printerId: printer.id,
            printerName: printer.name,
            onClose: () => setShowFileManager(false)
          }
        ),
        showUploadForPrint && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FileUploadModal,
          {
            folderId: null,
            onClose: () => setShowUploadForPrint(false),
            onUploadComplete: () => {
            },
            autoUpload: true,
            accept: ".gcode,.3mf",
            validateFile: (file) => {
              const lower = file.name.toLowerCase();
              if (!lower.endsWith(".gcode") && !lower.includes(".gcode.")) {
                return t("printers.dropNotPrintable", "Only .gcode and .gcode.3mf files can be printed");
              }
            },
            onFileUploaded: (uploadedFile) => {
              const slicedFor = uploadedFile.metadata?.sliced_for_model;
              const printerModel = mapModelCode(printer.model);
              if (slicedFor && printerModel && slicedFor.toLowerCase() !== printerModel.toLowerCase()) {
                api.deleteLibraryFile(uploadedFile.id).catch(() => {
                });
                return t("printers.incompatibleFile", "This file was sliced for {{slicedFor}}, but this printer is a {{printerModel}}", { slicedFor, printerModel });
              }
              setPrintAfterUpload({ id: uploadedFile.id, filename: uploadedFile.filename });
            }
          }
        ),
        printAfterUpload && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrintModal,
          {
            mode: "reprint",
            libraryFileId: printAfterUpload.id,
            archiveName: printAfterUpload.filename,
            initialSelectedPrinterIds: [printer.id],
            onClose: () => setPrintAfterUpload(null),
            onSuccess: () => setPrintAfterUpload(null)
          }
        ),
        showMQTTDebug && /* @__PURE__ */ jsxRuntimeExports.jsx(
          MQTTDebugModal,
          {
            printerId: printer.id,
            printerName: printer.name,
            onClose: () => setShowMQTTDebug(false)
          }
        ),
        showPrinterInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrinterInfoModal,
          {
            printer,
            status,
            totalPrintHours: maintenanceInfo?.total_print_hours,
            onClose: closePrinterInfo
          }
        ),
        plateCheckResult && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", onClick: () => closePlateCheckModal(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-xl shadow-2xl max-w-lg w-full", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              plateCheckResult.needs_calibration ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScanSearch, { className: "w-5 h-5 text-blue-500" }) : plateCheckResult.is_empty ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-yellow-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: "Build Plate Check" }),
              plateCheckResult.reference_count !== void 0 && plateCheckResult.max_references && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray bg-bambu-dark-tertiary px-2 py-1 rounded", children: [
                plateCheckResult.reference_count,
                "/",
                plateCheckResult.max_references,
                " refs"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => closePlateCheckModal(),
                className: "p-1 text-bambu-gray hover:text-white rounded transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
            plateCheckResult.needs_calibration ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-blue-500/20 border border-blue-500/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-blue-400", children: t("printers.plateDetection.calibrationRequired") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", dangerouslySetInnerHTML: { __html: t("printers.plateDetection.calibrationInstructions") } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-bambu-gray space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("printers.plateDetection.calibrationDescription") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { dangerouslySetInnerHTML: { __html: t("printers.plateDetection.calibrationTip") } })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 rounded-lg ${plateCheckResult.is_empty ? "bg-green-500/20 border border-green-500/50" : "bg-yellow-500/20 border border-yellow-500/50"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-medium ${plateCheckResult.is_empty ? "text-green-400" : "text-yellow-400"}`, children: plateCheckResult.is_empty ? t("printers.plateDetection.plateEmpty") : t("printers.plateDetection.objectsDetected") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-bambu-gray mt-1", children: [
                  t("printers.plateDetection.confidence"),
                  ": ",
                  Math.round(plateCheckResult.confidence * 100),
                  "% | ",
                  t("printers.plateDetection.difference"),
                  ": ",
                  plateCheckResult.difference_percent.toFixed(1),
                  "%"
                ] })
              ] }),
              plateCheckResult.debug_image_url && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-2", children: t("printers.plateDetection.analysisPreview") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: plateCheckResult.debug_image_url,
                    alt: t("printers.plateDetection.analysisPreview"),
                    className: "w-full rounded-lg border border-bambu-dark-tertiary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-2", children: t("printers.plateDetection.analysisLegend") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: plateCheckResult.message })
            ] }),
            plateReferences && plateReferences.references.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-bambu-dark-tertiary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white mb-2", children: t("printers.plateDetection.savedReferences", { count: plateReferences.references.length, max: plateReferences.max_references }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: plateReferences.references.map((ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: api.getPlateReferenceThumbnailUrl(printer.id, ref.index),
                    alt: ref.label || `Reference ${ref.index + 1}`,
                    className: "w-full aspect-video object-cover rounded border border-bambu-dark-tertiary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleDeleteRef(ref.index),
                    className: "absolute top-1 right-1 p-0.5 bg-red-500/80 rounded opacity-0 group-hover:opacity-100 transition-opacity",
                    title: t("printers.plateDetection.deleteReference"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3 text-white" })
                  }
                ),
                editingRefLabel?.index === ref.index ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: editingRefLabel.label,
                    onChange: (e) => setEditingRefLabel({ ...editingRefLabel, label: e.target.value }),
                    onBlur: () => handleUpdateRefLabel(ref.index, editingRefLabel.label),
                    onKeyDown: (e) => {
                      if (e.key === "Enter") handleUpdateRefLabel(ref.index, editingRefLabel.label);
                      if (e.key === "Escape") setEditingRefLabel(null);
                    },
                    className: "w-full mt-1 px-1 py-0.5 text-xs bg-bambu-dark-tertiary border border-bambu-green rounded text-white",
                    autoFocus: true,
                    placeholder: t("printers.plateDetection.labelPlaceholder")
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs text-bambu-gray mt-1 truncate cursor-pointer hover:text-white",
                    onClick: () => setEditingRefLabel({ index: ref.index, label: ref.label }),
                    title: ref.label ? t("printers.plateDetection.clickToEdit", { label: ref.label }) : t("printers.plateDetection.clickToAddLabel"),
                    children: ref.label || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic opacity-50", children: t("printers.noLabel") })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-bambu-gray/60", children: ref.timestamp ? parseUTCDate(ref.timestamp)?.toLocaleDateString() ?? "" : "" })
              ] }, ref.index)) })
            ] }),
            !plateCheckResult.needs_calibration && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-bambu-dark-tertiary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white", children: t("printers.roi.title") }),
                !editingRoi ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => setEditingRoi(plateCheckResult.roi || { x: 0.15, y: 0.35, w: 0.7, h: 0.55 }),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3 h-3 mr-1" }),
                      t("common.edit")
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => setEditingRoi(null),
                      disabled: isSavingRoi,
                      children: t("common.cancel")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      onClick: handleSaveRoi,
                      disabled: isSavingRoi,
                      children: isSavingRoi ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : t("common.save")
                    }
                  )
                ] })
              ] }),
              editingRoi ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-bambu-dark-tertiary/50 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-bambu-gray", children: t("printers.roi.xStart") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "range",
                        min: "0",
                        max: "0.9",
                        step: "0.01",
                        value: editingRoi.x,
                        onChange: (e) => setEditingRoi({ ...editingRoi, x: parseFloat(e.target.value) }),
                        className: "w-full h-1.5 bg-bambu-dark-tertiary rounded-lg cursor-pointer accent-green-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray", children: [
                      Math.round(editingRoi.x * 100),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-bambu-gray", children: t("printers.roi.yStart") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "range",
                        min: "0",
                        max: "0.9",
                        step: "0.01",
                        value: editingRoi.y,
                        onChange: (e) => setEditingRoi({ ...editingRoi, y: parseFloat(e.target.value) }),
                        className: "w-full h-1.5 bg-bambu-dark-tertiary rounded-lg cursor-pointer accent-green-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray", children: [
                      Math.round(editingRoi.y * 100),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-bambu-gray", children: t("printers.width") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "range",
                        min: "0.1",
                        max: "1",
                        step: "0.01",
                        value: editingRoi.w,
                        onChange: (e) => setEditingRoi({ ...editingRoi, w: parseFloat(e.target.value) }),
                        className: "w-full h-1.5 bg-bambu-dark-tertiary rounded-lg cursor-pointer accent-green-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray", children: [
                      Math.round(editingRoi.w * 100),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-bambu-gray", children: t("printers.height") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "range",
                        min: "0.1",
                        max: "1",
                        step: "0.01",
                        value: editingRoi.h,
                        onChange: (e) => setEditingRoi({ ...editingRoi, h: parseFloat(e.target.value) }),
                        className: "w-full h-1.5 bg-bambu-dark-tertiary rounded-lg cursor-pointer accent-green-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray", children: [
                      Math.round(editingRoi.h * 100),
                      "%"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("printers.roi.instruction") })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
                "Current: X=",
                Math.round((plateCheckResult.roi?.x || 0.15) * 100),
                "%, Y=",
                Math.round((plateCheckResult.roi?.y || 0.35) * 100),
                "%, W=",
                Math.round((plateCheckResult.roi?.w || 0.7) * 100),
                "%, H=",
                Math.round((plateCheckResult.roi?.h || 0.55) * 100),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end gap-2 p-4 border-t border-bambu-dark-tertiary", children: plateCheckResult.needs_calibration ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => closePlateCheckModal(), children: t("common.cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => handleCalibratePlate(),
                disabled: isCalibrating,
                children: isCalibrating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                  "Calibrating..."
                ] }) : "Calibrate Empty Plate"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => handleCalibratePlate(), disabled: isCalibrating, children: isCalibrating ? "Adding..." : `Add Reference (${plateReferences?.references.length || 0}/${plateReferences?.max_references || 5})` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => closePlateCheckModal(), children: "Close" })
          ] }) })
        ] }) }),
        showPowerOnConfirm && smartPlug && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("printers.confirm.powerOnTitle"),
            message: t("printers.confirm.powerOnMessage", { name: printer.name }),
            confirmText: t("printers.confirm.powerOnButton"),
            variant: "default",
            onConfirm: () => {
              powerControlMutation.mutate("on");
              setShowPowerOnConfirm(false);
            },
            onCancel: () => setShowPowerOnConfirm(false)
          }
        ),
        showPowerOffConfirm && smartPlug && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("printers.confirm.powerOffTitle"),
            message: status?.state === "RUNNING" ? t("printers.confirm.powerOffWarning", { name: printer.name }) : t("printers.confirm.powerOffMessage", { name: printer.name }),
            confirmText: t("printers.confirm.powerOffButton"),
            variant: "danger",
            onConfirm: () => {
              powerControlMutation.mutate("off");
              setShowPowerOffConfirm(false);
            },
            onCancel: () => setShowPowerOffConfirm(false)
          }
        ),
        showResumeConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("printers.confirm.resumeTitle"),
            message: t("printers.confirm.resumeMessage", { name: printer.name }),
            confirmText: t("printers.confirm.resumeButton"),
            variant: "default",
            onConfirm: () => {
              resumePrintMutation.mutate();
              setShowResumeConfirm(false);
            },
            onCancel: () => setShowResumeConfirm(false)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SkipObjectsModal,
          {
            printerId: printer.id,
            isOpen: showSkipObjectsModal,
            onClose: () => setShowSkipObjectsModal(false)
          }
        ),
        showHMSModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          HMSErrorModal,
          {
            printerName: printer.name,
            errors: status?.hms_errors || [],
            onClose: () => setShowHMSModal(false),
            printerId: printer.id,
            hasPermission
          }
        ),
        amsHistoryModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          AMSHistoryModal,
          {
            isOpen: !!amsHistoryModal,
            onClose: () => setAmsHistoryModal(null),
            printerId: printer.id,
            printerName: printer.name,
            amsId: amsHistoryModal.amsId,
            amsLabel: amsHistoryModal.amsLabel,
            initialMode: amsHistoryModal.mode,
            thresholds: amsThresholds
          }
        ),
        linkSpoolModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinkSpoolModal,
          {
            isOpen: !!linkSpoolModal,
            onClose: () => setLinkSpoolModal(null),
            tagUid: linkSpoolModal.tagUid,
            trayUuid: linkSpoolModal.trayUuid,
            printerId: linkSpoolModal.printerId,
            amsId: linkSpoolModal.amsId,
            trayId: linkSpoolModal.trayId
          }
        ),
        assignSpoolModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          AssignSpoolModal,
          {
            isOpen: !!assignSpoolModal,
            onClose: () => setAssignSpoolModal(null),
            printerId: assignSpoolModal.printerId,
            amsId: assignSpoolModal.amsId,
            trayId: assignSpoolModal.trayId,
            trayInfo: assignSpoolModal.trayInfo
          }
        ),
        configureSlotModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfigureAmsSlotModal,
          {
            isOpen: !!configureSlotModal,
            onClose: () => setConfigureSlotModal(null),
            printerId: printer.id,
            slotInfo: configureSlotModal,
            printerModel: mapModelCode(printer.model) || void 0,
            onSuccess: () => {
              queryClient.invalidateQueries({ queryKey: ["slotPresets", printer.id] });
              queryClient.invalidateQueries({ queryKey: ["printerStatus", printer.id] });
            }
          }
        ),
        showEditModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditPrinterModal,
          {
            printer,
            onClose: () => setShowEditModal(false)
          }
        ),
        showFirmwareModal && firmwareInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FirmwareUpdateModal,
          {
            printer,
            firmwareInfo,
            onClose: () => setShowFirmwareModal(false)
          }
        ),
        amsSlotMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "fixed inset-0 z-40",
            onClick: () => setAmsSlotMenu(null)
          }
        ),
        dryingPopoverAmsId !== null && dryingPopoverPos && (() => {
          const maxTemp = dryingPopoverModuleType === "n3s" ? 85 : 65;
          const sliderMin = 35;
          const sliderMax = maxTemp + 10;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100]", onClick: () => setDryingPopoverAmsId(null) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "fixed z-[101] w-[240px] bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-xl shadow-2xl overflow-hidden",
                style: { top: dryingPopoverPos.top, left: dryingPopoverPos.left },
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-bambu-dark-tertiary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-amber-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white font-medium", children: t("printers.drying.start") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2.5 space-y-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] text-bambu-gray mb-1 block", children: t("printers.filaments") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "select",
                        {
                          value: dryingFilament,
                          onChange: (e) => {
                            const fil = e.target.value;
                            setDryingFilament(fil);
                            const preset = dryingPresets[fil];
                            if (preset) {
                              const key = dryingPopoverModuleType === "n3s" ? "n3s" : "n3f";
                              setDryingTemp(preset[key]);
                              setDryingDuration(dryingPopoverModuleType === "n3s" ? preset.n3s_hours : preset.n3f_hours);
                            }
                          },
                          className: "w-full px-2 py-1.5 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50",
                          children: Object.keys(dryingPresets).map((fil) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: fil, children: fil }, fil))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] text-bambu-gray", children: t("printers.drying.temperature") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "number",
                              min: 45,
                              max: maxTemp,
                              value: dryingTemp,
                              onChange: (e) => setDryingTemp(Math.min(maxTemp, Math.max(45, Number(e.target.value) || 45))),
                              className: "w-12 px-1 py-0.5 bg-bambu-dark border border-bambu-dark-tertiary rounded text-white text-[11px] text-center focus:outline-none focus:border-amber-500/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: "°C" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "range",
                          min: sliderMin,
                          max: sliderMax,
                          value: dryingTemp,
                          onChange: (e) => setDryingTemp(Math.min(maxTemp, Math.max(45, Number(e.target.value)))),
                          className: "w-full h-1 accent-amber-500 cursor-pointer"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] text-bambu-gray/50 mt-0.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "45°C" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          maxTemp,
                          "°C"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] text-bambu-gray", children: t("printers.drying.duration") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "number",
                              min: 1,
                              max: 24,
                              value: dryingDuration,
                              onChange: (e) => setDryingDuration(Math.min(24, Math.max(1, Number(e.target.value) || 1))),
                              className: "w-10 px-1 py-0.5 bg-bambu-dark border border-bambu-dark-tertiary rounded text-white text-[11px] text-center focus:outline-none focus:border-amber-500/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-bambu-gray", children: t("printers.drying.hours") })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "range",
                          min: 1,
                          max: 24,
                          value: dryingDuration,
                          onChange: (e) => setDryingDuration(Number(e.target.value)),
                          className: "w-full h-1 accent-amber-500 cursor-pointer"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] text-bambu-gray/50 mt-0.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1h" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "24h" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: dryingRotateTray,
                          onChange: (e) => setDryingRotateTray(e.target.checked),
                          className: "w-3.5 h-3.5 accent-amber-500 rounded cursor-pointer"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-bambu-gray", children: t("printers.drying.rotateTray") })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        if (dryingPopoverAmsId !== null) {
                          startDryingMutation.mutate({ amsId: dryingPopoverAmsId, temp: dryingTemp, duration: dryingDuration, filament: dryingFilament, rotateTray: dryingRotateTray });
                        }
                      },
                      disabled: startDryingMutation.isPending,
                      className: "w-full py-1.5 bg-amber-500 hover:bg-amber-400 text-white text-xs font-medium rounded-lg transition-colors disabled:opacity-50",
                      children: startDryingMutation.isPending ? t("printers.drying.startingDrying") : t("printers.drying.start")
                    }
                  ) })
                ]
              }
            )
          ] });
        })()
      ]
    }
  );
}
function AddPrinterModal({
  onClose,
  onAdd,
  existingSerials
}) {
  const { t } = useTranslation();
  const [form, setForm] = reactExports.useState({
    name: "",
    serial_number: "",
    ip_address: "",
    access_code: "",
    model: "",
    location: "",
    auto_archive: true
  });
  const [discovering, setDiscovering] = reactExports.useState(false);
  const [discovered, setDiscovered] = reactExports.useState([]);
  const [discoveryError, setDiscoveryError] = reactExports.useState("");
  const [hasScanned, setHasScanned] = reactExports.useState(false);
  const [isDocker, setIsDocker] = reactExports.useState(false);
  const [detectedSubnets, setDetectedSubnets] = reactExports.useState([]);
  const [subnet, setSubnet] = reactExports.useState("");
  const [scanProgress, setScanProgress] = reactExports.useState({ scanned: 0, total: 0 });
  reactExports.useEffect(() => {
    discoveryApi.getInfo().then((info) => {
      setIsDocker(info.is_docker);
      if (info.subnets.length > 0) {
        setDetectedSubnets(info.subnets);
        setSubnet(info.subnets[0]);
      }
    }).catch(() => {
    });
  }, []);
  const newPrinters = discovered.filter((p) => !existingSerials.includes(p.serial));
  const startDiscovery = async () => {
    setDiscoveryError("");
    setDiscovered([]);
    setDiscovering(true);
    setHasScanned(false);
    setScanProgress({ scanned: 0, total: 0 });
    try {
      if (isDocker) {
        await discoveryApi.startSubnetScan(subnet);
        const pollInterval = setInterval(async () => {
          try {
            const status = await discoveryApi.getScanStatus();
            setScanProgress({ scanned: status.scanned, total: status.total });
            const printers = await discoveryApi.getDiscoveredPrinters();
            setDiscovered(printers);
            if (!status.running) {
              clearInterval(pollInterval);
              setDiscovering(false);
              setHasScanned(true);
            }
          } catch (e) {
            console.error("Failed to get scan status:", e);
          }
        }, 500);
      } else {
        await discoveryApi.startDiscovery(10);
        const pollInterval = setInterval(async () => {
          try {
            const printers = await discoveryApi.getDiscoveredPrinters();
            setDiscovered(printers);
          } catch (e) {
            console.error("Failed to get discovered printers:", e);
          }
        }, 1e3);
        setTimeout(async () => {
          clearInterval(pollInterval);
          try {
            await discoveryApi.stopDiscovery();
          } catch {
          }
          setDiscovering(false);
          setHasScanned(true);
          try {
            const printers = await discoveryApi.getDiscoveredPrinters();
            setDiscovered(printers);
          } catch (e) {
            console.error("Failed to get final discovered printers:", e);
          }
        }, 1e4);
      }
    } catch (e) {
      console.error("Failed to start discovery:", e);
      setDiscoveryError(e instanceof Error ? e.message : t("printers.discovery.failedToStart"));
      setDiscovering(false);
      setHasScanned(true);
    }
  };
  const selectPrinter = (printer) => {
    const serialNumber = printer.serial.startsWith("unknown-") ? "" : printer.serial;
    setForm({
      ...form,
      name: printer.name || "",
      serial_number: serialNumber,
      ip_address: printer.ip_address,
      model: mapModelCode(printer.model)
    });
    setDiscovered([]);
  };
  reactExports.useEffect(() => {
    return () => {
      discoveryApi.stopDiscovery().catch(() => {
      });
      discoveryApi.stopSubnetScan().catch(() => {
      });
    };
  }, []);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4", children: t("printers.addPrinter") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 pb-4 border-b border-bambu-dark-tertiary", children: [
          isDocker && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.discovery.subnetToScan") }),
            detectedSubnets.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
                value: subnet,
                onChange: (e) => setSubnet(e.target.value),
                disabled: discovering,
                children: detectedSubnets.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
                value: subnet,
                onChange: (e) => setSubnet(e.target.value),
                placeholder: "192.168.1.0/24",
                disabled: discovering
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-bambu-gray", children: t("printers.discovery.dockerNote") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "secondary",
              onClick: startDiscovery,
              disabled: discovering,
              className: "w-full",
              children: discovering ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                isDocker && scanProgress.total > 0 ? t("printers.discovery.scanProgress", { scanned: scanProgress.scanned, total: scanProgress.total }) : t("printers.discovery.scanning")
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" }),
                isDocker ? t("printers.discovery.scanSubnet") : t("printers.discovery.discoverNetwork")
              ] })
            }
          ),
          discoveryError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-red-400", children: discoveryError }),
          newPrinters.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2 max-h-40 overflow-y-auto", children: newPrinters.map((printer) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between p-2 bg-bambu-dark rounded-lg hover:bg-bambu-dark-secondary cursor-pointer transition-colors",
              onClick: () => selectPrinter(printer),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-white text-sm truncate", children: printer.name || printer.serial }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray truncate", children: [
                    mapModelCode(printer.model) || t("printers.discovery.unknown"),
                    " • ",
                    printer.ip_address,
                    printer.serial.startsWith("unknown-") && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-500", children: [
                      " • ",
                      t("printers.discovery.serialRequired")
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-bambu-gray -rotate-90 flex-shrink-0 ml-2" })
              ]
            },
            printer.serial
          )) }),
          discovering && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-bambu-gray text-center", children: isDocker ? t("printers.discovery.scanningSubnet") : t("printers.discovery.scanningNetwork") }),
          hasScanned && !discovering && discovered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-bambu-gray text-center", children: isDocker ? t("printers.discovery.noPrintersFoundSubnet") : t("printers.discovery.noPrintersFoundNetwork") }),
          hasScanned && !discovering && discovered.length > 0 && newPrinters.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-bambu-gray text-center", children: t("printers.discovery.allConfigured") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              onAdd(form);
            },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.name") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: form.name,
                    onChange: (e) => setForm({ ...form, name: e.target.value }),
                    placeholder: t("printers.modal.myPrinter")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.ipAddress") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    pattern: "(\\d{1,3}(\\.\\d{1,3}){3}|[a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(\\.[a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)",
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: form.ip_address,
                    onChange: (e) => setForm({ ...form, ip_address: e.target.value }),
                    placeholder: "192.168.1.100 or printer.local"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.serialNumber") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: form.serial_number,
                    onChange: (e) => setForm({ ...form, serial_number: e.target.value }),
                    placeholder: "01P00A000000000"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.accessCode") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "password",
                    required: true,
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: form.access_code,
                    onChange: (e) => setForm({ ...form, access_code: e.target.value }),
                    placeholder: t("printers.modal.fromPrinterSettings")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.modal.modelOptional") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: form.model || "",
                    onChange: (e) => setForm({ ...form, model: e.target.value }),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("printers.modal.selectModel") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "H2 Series", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "H2C", children: "H2C" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "H2D", children: "H2D" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "H2D Pro", children: "H2D Pro" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "H2S", children: "H2S" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "X1 Series", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "X1E", children: "X1E" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "X1C", children: "X1 Carbon" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "X1", children: "X1" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "P Series", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "P2S", children: "P2S" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "P1S", children: "P1S" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "P1P", children: "P1P" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "A1 Series", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "A1", children: "A1" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "A1 Mini", children: "A1 Mini" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.modal.locationGroup") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: form.location || "",
                    onChange: (e) => setForm({ ...form, location: e.target.value }),
                    placeholder: t("printers.modal.locationPlaceholder")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("printers.locationHelp") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "auto_archive",
                    checked: form.auto_archive,
                    onChange: (e) => setForm({ ...form, auto_archive: e.target.checked }),
                    className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "auto_archive", className: "text-sm text-bambu-gray", children: t("printers.modal.autoArchiveLabel") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, className: "flex-1", children: t("common.cancel") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "flex-1", children: t("printers.addPrinter") })
              ] })
            ]
          }
        )
      ] }) })
    }
  );
}
function FirmwareUpdateModal({
  printer,
  firmwareInfo,
  onClose
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const canUpdate = hasPermission("firmware:update");
  const [uploadStatus, setUploadStatus] = reactExports.useState(null);
  const [isUploading, setIsUploading] = reactExports.useState(false);
  const [pollInterval, setPollInterval] = reactExports.useState(null);
  const { data: prepareInfo, isLoading: isPreparing } = useQuery({
    queryKey: ["firmwarePrepare", printer.id],
    queryFn: () => firmwareApi.prepareUpload(printer.id),
    staleTime: 3e4,
    enabled: firmwareInfo.update_available && canUpdate
  });
  const uploadMutation = useMutation({
    mutationFn: () => firmwareApi.startUpload(printer.id),
    onSuccess: () => {
      setIsUploading(true);
      const interval = setInterval(async () => {
        try {
          const status = await firmwareApi.getUploadStatus(printer.id);
          setUploadStatus(status);
          if (status.status === "complete" || status.status === "error") {
            clearInterval(interval);
            setPollInterval(null);
            setIsUploading(false);
            if (status.status === "complete") {
              showToast(t("printers.firmwareModal.uploadedToast"), "success");
              queryClient.invalidateQueries({ queryKey: ["firmwareUpdate", printer.id] });
            }
          }
        } catch {
        }
      }, 2e3);
      setPollInterval(interval);
    },
    onError: (error) => {
      showToast(t("printers.firmwareModal.uploadFailed", { error: error.message }), "error");
      setIsUploading(false);
    }
  });
  reactExports.useEffect(() => {
    return () => {
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [pollInterval]);
  const handleStartUpload = () => {
    setUploadStatus(null);
    uploadMutation.mutate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md mx-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-full ${firmwareInfo.update_available ? "bg-orange-500/20" : "bg-status-ok/20"}`, children: firmwareInfo.update_available ? /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-5 h-5 text-orange-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-status-ok" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: firmwareInfo.update_available ? t("printers.firmwareModal.title") : t("printers.firmwareModal.titleUpToDate") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: printer.name })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("printers.firmwareModal.currentVersion") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono ${firmwareInfo.update_available ? "text-white" : "text-status-ok"}`, children: firmwareInfo.current_version || t("common.unknown") })
      ] }),
      firmwareInfo.update_available && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("printers.firmwareModal.latestVersion") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400 font-mono", children: firmwareInfo.latest_version })
      ] }),
      firmwareInfo.release_notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-3 text-sm", open: !firmwareInfo.update_available, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: `cursor-pointer hover:underline ${firmwareInfo.update_available ? "text-orange-400" : "text-status-ok"}`, children: t("printers.firmwareModal.releaseNotes") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-bambu-gray text-xs max-h-40 overflow-y-auto whitespace-pre-wrap", children: firmwareInfo.release_notes })
      ] })
    ] }),
    !firmwareInfo.update_available ? null : isPreparing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-bambu-gray text-sm mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
      t("printers.firmwareModal.checkingPrereqs")
    ] }) : prepareInfo && !isUploading && !uploadStatus ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: prepareInfo.can_proceed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-bambu-green text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
      t("printers.firmwareModal.sdCardReady")
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: prepareInfo.errors.map((error, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-red-400 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 flex-shrink-0" }),
      error
    ] }, i)) }) }) : null,
    (isUploading || uploadStatus) && uploadStatus && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray capitalize", children: uploadStatus.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white", children: [
          uploadStatus.progress,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-bambu-dark-tertiary rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-2 rounded-full transition-all ${uploadStatus.status === "error" ? "bg-status-error" : uploadStatus.status === "complete" ? "bg-status-ok" : "bg-orange-500"} ${uploadStatus.status === "uploading" ? "animate-pulse" : ""}`,
          style: { width: `${uploadStatus.progress}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: uploadStatus.message }),
      uploadStatus.error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400 mt-1", children: uploadStatus.error })
    ] }),
    uploadStatus?.status === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-green/10 border border-bambu-green/30 rounded-lg p-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-green font-medium mb-2", children: t("printers.firmwareModal.uploadedSuccess") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("printers.firmwareModal.applyInstructions") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-xs text-bambu-gray mt-1 list-decimal list-inside space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { dangerouslySetInnerHTML: { __html: t("printers.firmwareModal.step1") } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { dangerouslySetInnerHTML: { __html: t("printers.firmwareModal.step2") } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { dangerouslySetInnerHTML: { __html: t("printers.firmwareModal.step3") } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("printers.firmwareModal.step4") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: uploadStatus?.status === "complete" ? t("printers.firmwareModal.done") : t("common.cancel") }),
      prepareInfo?.can_proceed && !isUploading && uploadStatus?.status !== "complete" && canUpdate && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleStartUpload,
          disabled: uploadMutation.isPending,
          children: uploadMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin mr-2" }),
            t("printers.firmwareModal.starting")
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
            t("printers.firmwareModal.uploadFirmware")
          ] })
        }
      )
    ] })
  ] }) }) });
}
function EditPrinterModal({
  printer,
  onClose
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [form, setForm] = reactExports.useState({
    name: printer.name,
    ip_address: printer.ip_address,
    access_code: "",
    model: printer.model || "",
    location: printer.location || "",
    auto_archive: printer.auto_archive
  });
  const updateMutation = useMutation({
    mutationFn: (data) => api.updatePrinter(printer.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["printers"] });
      queryClient.invalidateQueries({ queryKey: ["printerStatus", printer.id] });
      onClose();
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToUpdate"), "error")
  });
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: form.name,
      ip_address: form.ip_address,
      model: form.model || void 0,
      location: form.location || void 0,
      auto_archive: form.auto_archive
    };
    if (form.access_code) {
      data.access_code = form.access_code;
    }
    updateMutation.mutate(data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4", children: t("printers.editPrinter") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.name") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                value: form.name,
                onChange: (e) => setForm({ ...form, name: e.target.value }),
                placeholder: t("printers.modal.myPrinter")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.ipAddress") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                pattern: "(\\d{1,3}(\\.\\d{1,3}){3}|[a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(\\.[a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)",
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                value: form.ip_address,
                onChange: (e) => setForm({ ...form, ip_address: e.target.value }),
                placeholder: "192.168.1.100 or printer.local"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.serialNumber") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                disabled: true,
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-bambu-gray cursor-not-allowed",
                value: printer.serial_number
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("printers.serialCannotBeChanged") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.accessCode") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                value: form.access_code,
                onChange: (e) => setForm({ ...form, access_code: e.target.value }),
                placeholder: t("printers.accessCodePlaceholder")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("printers.model") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                value: form.model,
                onChange: (e) => setForm({ ...form, model: e.target.value }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("printers.modal.selectModel") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "H2 Series", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "H2C", children: "H2C" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "H2D", children: "H2D" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "H2D Pro", children: "H2D Pro" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "H2S", children: "H2S" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "X1 Series", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "X1E", children: "X1E" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "X1C", children: "X1 Carbon" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "X1", children: "X1" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "P Series", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "P2S", children: "P2S" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "P1S", children: "P1S" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "P1P", children: "P1P" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "A1 Series", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "A1", children: "A1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "A1 Mini", children: "A1 Mini" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: "Location / Group" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                value: form.location,
                onChange: (e) => setForm({ ...form, location: e.target.value }),
                placeholder: t("printers.modal.locationPlaceholder")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("printers.locationHelp") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                id: "edit_auto_archive",
                checked: form.auto_archive,
                onChange: (e) => setForm({ ...form, auto_archive: e.target.checked }),
                className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "edit_auto_archive", className: "text-sm text-bambu-gray", children: t("printers.modal.autoArchiveLabel") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, className: "flex-1", children: t("common.cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "flex-1", disabled: updateMutation.isPending, children: updateMutation.isPending ? t("common.saving") : t("printers.modal.saveChanges") })
          ] })
        ] })
      ] }) })
    }
  );
}
function usePrinterOfflineStatus(printerId) {
  const { data: status } = useQuery({
    queryKey: ["printerStatus", printerId],
    queryFn: () => api.getPrinterStatus(printerId),
    refetchInterval: 3e4
  });
  return !status?.connected;
}
function PowerDropdownItem({
  printer,
  plug,
  onPowerOn,
  isPowering
}) {
  const isOffline = usePrinterOfflineStatus(printer.id);
  const { data: plugStatus } = useQuery({
    queryKey: ["smartPlugStatus", plug.id],
    queryFn: () => api.getSmartPlugStatus(plug.id),
    refetchInterval: 1e4
  });
  if (!isOffline) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-900 dark:text-white truncate", children: printer.name }),
      plugStatus && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-xs px-1.5 py-0.5 rounded ${plugStatus.state === "ON" ? "bg-bambu-green/20 text-bambu-green" : "bg-red-500/20 text-red-400"}`,
          children: plugStatus.state || "?"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => onPowerOn(plug.id),
        disabled: isPowering || plugStatus?.state === "ON",
        className: `px-2 py-1 text-xs rounded transition-colors flex items-center gap-1 ${plugStatus?.state === "ON" ? "bg-bambu-green/20 text-bambu-green cursor-default" : "bg-bambu-green/20 text-bambu-green hover:bg-bambu-green hover:text-white"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-3 h-3" }),
          isPowering ? "..." : "On"
        ]
      }
    )
  ] });
}
function PrintersPage() {
  const { t } = useTranslation();
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const [hideDisconnected, setHideDisconnected] = reactExports.useState(() => {
    return localStorage.getItem("hideDisconnectedPrinters") === "true";
  });
  const [showPowerDropdown, setShowPowerDropdown] = reactExports.useState(false);
  const [poweringOn, setPoweringOn] = reactExports.useState(null);
  const [sortBy, setSortBy] = reactExports.useState(() => {
    return localStorage.getItem("printerSortBy") || "name";
  });
  const [sortAsc, setSortAsc] = reactExports.useState(() => {
    return localStorage.getItem("printerSortAsc") !== "false";
  });
  const [cardSize, setCardSize] = reactExports.useState(() => {
    const saved = localStorage.getItem("printerCardSize");
    return saved ? parseInt(saved, 10) : 2;
  });
  const viewMode = cardSize === 1 ? "compact" : "expanded";
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [embeddedCameraPrinters, setEmbeddedCameraPrinters] = reactExports.useState(() => {
    const saved = localStorage.getItem("openEmbeddedCameras");
    if (saved) {
      try {
        const cameras = JSON.parse(saved);
        return new Map(cameras.map((c) => [c.id, c]));
      } catch {
        return /* @__PURE__ */ new Map();
      }
    }
    return /* @__PURE__ */ new Map();
  });
  reactExports.useEffect(() => {
    const cameras = Array.from(embeddedCameraPrinters.values());
    if (cameras.length > 0) {
      localStorage.setItem("openEmbeddedCameras", JSON.stringify(cameras));
    } else {
      localStorage.removeItem("openEmbeddedCameras");
    }
  }, [embeddedCameraPrinters]);
  const { data: printers, isLoading } = useQuery({
    queryKey: ["printers"],
    queryFn: api.getPrinters
  });
  const printerIds = reactExports.useMemo(() => printers?.map((printer) => printer.id) ?? [], [printers]);
  const {
    data: batchedPrinterStatuses,
    isLoading: areStatusesLoading,
    isError: didBatchStatusesFail
  } = useQuery({
    queryKey: ["printer-statuses", printerIds],
    queryFn: async () => {
      const statuses = await api.getPrinterStatuses(printerIds);
      statuses.forEach((status) => {
        queryClient.setQueryData(["printerStatus", status.id], status);
      });
      return statuses;
    },
    enabled: printerIds.length > 0,
    staleTime: 30 * 1e3,
    refetchInterval: 30 * 1e3
  });
  const useSharedStatusCache = !didBatchStatusesFail && printerIds.length > 0;
  const hasRunningPrinters = reactExports.useMemo(
    () => batchedPrinterStatuses?.some((status) => status.state === "RUNNING") ?? false,
    [batchedPrinterStatuses]
  );
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const effectiveDryingPresets = reactExports.useMemo(() => {
    if (settings?.drying_presets) {
      try {
        const userPresets = JSON.parse(settings.drying_presets);
        if (typeof userPresets === "object" && userPresets !== null && Object.keys(userPresets).length > 0) {
          return { ...DRYING_PRESETS, ...userPresets };
        }
      } catch {
      }
    }
    return DRYING_PRESETS;
  }, [settings?.drying_presets]);
  reactExports.useEffect(() => {
    if (settings?.camera_view_mode === "window" && embeddedCameraPrinters.size > 0) {
      setEmbeddedCameraPrinters(/* @__PURE__ */ new Map());
    }
  }, [settings?.camera_view_mode, embeddedCameraPrinters.size]);
  const { data: smartPlugs } = useQuery({
    queryKey: ["smart-plugs"],
    queryFn: api.getSmartPlugs
  });
  const { data: allPendingQueueItems } = useQuery({
    queryKey: ["queue", "pending"],
    queryFn: () => api.getQueue(void 0, "pending"),
    enabled: printerIds.length > 0,
    staleTime: 5 * 1e3
  });
  const { data: allPrintingQueueItems } = useQuery({
    queryKey: ["queue", "printing"],
    queryFn: () => api.getQueue(void 0, "printing"),
    enabled: printerIds.length > 0 && hasRunningPrinters,
    staleTime: 5 * 1e3
  });
  const { data: maintenanceOverview } = useQuery({
    queryKey: ["maintenanceOverview"],
    queryFn: api.getMaintenanceOverview,
    staleTime: 60 * 1e3
    // 1 minute
  });
  const { data: spoolmanStatus } = useQuery({
    queryKey: ["spoolman-status"],
    queryFn: api.getSpoolmanStatus,
    staleTime: 60 * 1e3
    // 1 minute
  });
  const spoolmanEnabled = spoolmanStatus?.enabled && spoolmanStatus?.connected;
  const { data: spoolmanSettings } = useQuery({
    queryKey: ["spoolman-settings"],
    queryFn: api.getSpoolmanSettings,
    enabled: !!spoolmanEnabled,
    staleTime: 60 * 1e3
    // 1 minute
  });
  const spoolmanSyncMode = spoolmanSettings?.spoolman_sync_mode;
  const { data: unlinkedSpools } = useQuery({
    queryKey: ["unlinked-spools"],
    queryFn: api.getUnlinkedSpools,
    enabled: !!spoolmanEnabled,
    staleTime: 30 * 1e3
    // 30 seconds
  });
  const hasUnlinkedSpools = unlinkedSpools && unlinkedSpools.length > 0;
  const { data: linkedSpoolsData } = useQuery({
    queryKey: ["linked-spools"],
    queryFn: api.getLinkedSpools,
    enabled: !!spoolmanEnabled,
    staleTime: 30 * 1e3
    // 30 seconds
  });
  const linkedSpools = linkedSpoolsData?.linked;
  const { data: spoolAssignments } = useQuery({
    queryKey: ["spool-assignments"],
    queryFn: () => api.getAssignments(),
    enabled: hasPermission("inventory:view_assignments"),
    staleTime: 30 * 1e3
  });
  const unassignMutation = useMutation({
    mutationFn: ({ printerId, amsId, trayId }) => api.unassignSpool(printerId, amsId, trayId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spool-assignments"] });
    }
  });
  const getAssignment = (printerId, amsId, trayId) => {
    return spoolAssignments?.find(
      (a) => a.printer_id === printerId && a.ams_id === Number(amsId) && a.tray_id === Number(trayId)
    );
  };
  const maintenanceByPrinter = maintenanceOverview?.reduce(
    (acc, overview) => {
      acc[overview.printer_id] = {
        due_count: overview.due_count,
        warning_count: overview.warning_count,
        total_print_hours: overview.total_print_hours
      };
      return acc;
    },
    {}
  ) || {};
  const smartPlugByPrinter = smartPlugs?.reduce(
    (acc, plug) => {
      if (plug.printer_id) {
        acc[plug.printer_id] = plug;
      }
      return acc;
    },
    {}
  ) || {};
  const pendingQueueByPrinter = reactExports.useMemo(() => {
    const grouped = {};
    if (!printers?.length || !allPendingQueueItems?.length) {
      return grouped;
    }
    printers.forEach((printer) => {
      grouped[printer.id] = filterQueueItemsForPrinter(allPendingQueueItems, printer.id, printer.model);
    });
    return grouped;
  }, [allPendingQueueItems, printers]);
  const printingQueueByPrinter = reactExports.useMemo(() => {
    const grouped = {};
    if (!allPrintingQueueItems?.length) {
      return grouped;
    }
    allPrintingQueueItems.forEach((item) => {
      if (item.printer_id == null) {
        return;
      }
      if (!grouped[item.printer_id]) {
        grouped[item.printer_id] = [];
      }
      grouped[item.printer_id].push(item);
    });
    return grouped;
  }, [allPrintingQueueItems]);
  const addMutation = useMutation({
    mutationFn: api.createPrinter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["printers"] });
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
      setShowAddModal(false);
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToAdd"), "error")
  });
  const powerOnMutation = useMutation({
    mutationFn: (plugId) => api.controlSmartPlug(plugId, "on"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["smart-plugs"] });
      setPoweringOn(null);
    },
    onError: () => {
      setPoweringOn(null);
    }
  });
  const toggleHideDisconnected = () => {
    const newValue = !hideDisconnected;
    setHideDisconnected(newValue);
    localStorage.setItem("hideDisconnectedPrinters", String(newValue));
  };
  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    localStorage.setItem("printerSortBy", newSort);
  };
  const toggleSortDirection = () => {
    const newAsc = !sortAsc;
    setSortAsc(newAsc);
    localStorage.setItem("printerSortAsc", String(newAsc));
  };
  const getGridClasses = () => {
    switch (cardSize) {
      case 1:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
      // S: many small cards
      case 2:
        return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";
      // M: medium cards
      case 3:
        return "grid-cols-1 lg:grid-cols-2";
      // L: large cards, 2 columns max
      case 4:
        return "grid-cols-1";
      // XL: single column, full width
      default:
        return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";
    }
  };
  const cardSizeLabels = ["S", "M", "L", "XL"];
  const sortedPrinters = reactExports.useMemo(() => {
    if (!printers) return [];
    const sorted = [...printers];
    switch (sortBy) {
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "model":
        sorted.sort((a, b) => (a.model || "").localeCompare(b.model || ""));
        break;
      case "location":
        sorted.sort((a, b) => {
          const locA = a.location || "";
          const locB = b.location || "";
          if (!locA && locB) return 1;
          if (locA && !locB) return -1;
          return locA.localeCompare(locB) || a.name.localeCompare(b.name);
        });
        break;
      case "status":
        sorted.sort((a, b) => {
          const statusA = queryClient.getQueryData(["printerStatus", a.id]);
          const statusB = queryClient.getQueryData(["printerStatus", b.id]);
          const getPriority = (s) => {
            if (!s?.connected) return 3;
            const hmsErrors = s.hms_errors ? filterKnownHMSErrors(s.hms_errors) : [];
            if (hmsErrors.length > 0) return 0;
            if (s.state === "RUNNING") return 1;
            return 2;
          };
          return getPriority(statusA) - getPriority(statusB);
        });
        break;
    }
    if (!sortAsc) {
      sorted.reverse();
    }
    return sorted;
  }, [printers, sortBy, sortAsc, queryClient]);
  const groupedPrinters = reactExports.useMemo(() => {
    if (sortBy !== "location") return null;
    const groups = {};
    sortedPrinters.forEach((printer) => {
      const location = printer.location || "Ungrouped";
      if (!groups[location]) groups[location] = [];
      groups[location].push(printer);
    });
    return groups;
  }, [sortBy, sortedPrinters]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { "data-onboarding": "printers-heading", className: "text-2xl font-bold text-white", children: t("printers.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusSummaryBar, { printers })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: sortBy,
              onChange: (e) => handleSortChange(e.target.value),
              className: "text-sm bg-bambu-dark border border-bambu-dark-tertiary rounded-lg px-2 py-1.5 text-white focus:border-bambu-green focus:outline-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: t("printers.sort.name") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "status", children: t("printers.sort.status") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "model", children: t("printers.sort.model") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "location", children: t("printers.sort.location") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: toggleSortDirection,
              className: "p-1.5 rounded-lg hover:bg-bambu-dark-tertiary transition-colors",
              title: sortAsc ? t("printers.sort.descending") : t("printers.sort.ascending"),
              children: sortAsc ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-4 h-4 text-bambu-gray" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4 text-bambu-gray" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center bg-bambu-dark rounded-lg border border-bambu-dark-tertiary", children: cardSizeLabels.map((label, index) => {
          const size = index + 1;
          const isSelected = cardSize === size;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setCardSize(size);
                localStorage.setItem("printerCardSize", String(size));
              },
              className: `px-2 py-1.5 text-xs font-medium transition-colors ${index === 0 ? "rounded-l-lg" : ""} ${index === cardSizeLabels.length - 1 ? "rounded-r-lg" : ""} ${isSelected ? "bg-bambu-green text-white" : "text-bambu-gray hover:bg-bambu-dark-tertiary hover:text-white"}`,
              title: label === "S" ? t("printers.cardSize.small") : label === "M" ? t("printers.cardSize.medium") : label === "L" ? t("printers.cardSize.large") : t("printers.cardSize.extraLarge"),
              children: label
            },
            label
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-6 bg-bambu-dark-tertiary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-bambu-gray cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: hideDisconnected,
              onChange: toggleHideDisconnected,
              className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
            }
          ),
          t("printers.hideOffline")
        ] }),
        hideDisconnected && Object.keys(smartPlugByPrinter).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShowPowerDropdown(!showPowerDropdown),
              className: "flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white dark:bg-bambu-dark-secondary border border-gray-200 dark:border-bambu-dark-tertiary rounded-lg text-gray-600 dark:text-bambu-gray hover:text-gray-900 dark:hover:text-white hover:border-bambu-green transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-4 h-4" }),
                t("printers.powerOn"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-3 h-3 transition-transform ${showPowerDropdown ? "rotate-180" : ""}` })
              ]
            }
          ),
          showPowerDropdown && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "fixed inset-0 z-10",
                onClick: () => setShowPowerDropdown(false)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 mt-2 w-56 bg-white dark:bg-bambu-dark-secondary border border-gray-200 dark:border-bambu-dark-tertiary rounded-lg shadow-lg z-20 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 text-xs text-gray-500 dark:text-bambu-gray border-b border-gray-200 dark:border-bambu-dark-tertiary", children: t("printers.offlinePrintersWithPlugs") }),
              printers?.filter((p) => smartPlugByPrinter[p.id]).map((printer) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                PowerDropdownItem,
                {
                  printer,
                  plug: smartPlugByPrinter[printer.id],
                  onPowerOn: (plugId) => {
                    setPoweringOn(plugId);
                    powerOnMutation.mutate(plugId);
                  },
                  isPowering: poweringOn === smartPlugByPrinter[printer.id]?.id
                },
                printer.id
              )),
              printers?.filter((p) => smartPlugByPrinter[p.id]).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 text-sm text-bambu-gray", children: "No printers with smart plugs" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-onboarding": "printers-add",
            onClick: () => setShowAddModal(true),
            disabled: !hasPermission("printers:create"),
            title: !hasPermission("printers:create") ? t("printers.permission.noAdd") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              t("printers.addPrinter")
            ]
          }
        )
      ] })
    ] }),
    isLoading || useSharedStatusCache && areStatusesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-bambu-gray", children: t("common.loading") }) : printers?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mb-4", children: t("printers.noPrintersConfigured") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-onboarding": "printers-add",
          onClick: () => setShowAddModal(true),
          disabled: !hasPermission("printers:create"),
          title: !hasPermission("printers:create") ? t("printers.permission.noAdd") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            t("printers.addPrinter")
          ]
        }
      )
    ] }) }) : groupedPrinters ? (
      /* Grouped by location view */
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: Object.entries(groupedPrinters).map(([location, locationPrinters]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-bambu-green" }),
          location,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-bambu-gray", children: [
            "(",
            locationPrinters.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-4 ${cardSize >= 3 ? "gap-6" : ""} ${getGridClasses()}`, children: locationPrinters.map((printer) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrinterCard,
          {
            printer,
            hideIfDisconnected: hideDisconnected,
            maintenanceInfo: maintenanceByPrinter[printer.id],
            viewMode,
            cardSize,
            useSharedStatusCache,
            sharedSmartPlug: smartPlugByPrinter[printer.id] ?? null,
            pendingQueueItems: pendingQueueByPrinter[printer.id] ?? [],
            printingQueueItems: printingQueueByPrinter[printer.id] ?? [],
            amsThresholds: settings ? {
              humidityGood: Number(settings.ams_humidity_good) || 40,
              humidityFair: Number(settings.ams_humidity_fair) || 60,
              tempGood: Number(settings.ams_temp_good) || 28,
              tempFair: Number(settings.ams_temp_fair) || 35
            } : void 0,
            spoolmanEnabled,
            hasUnlinkedSpools,
            linkedSpools,
            spoolmanUrl: spoolmanStatus?.url,
            spoolmanSyncMode,
            onGetAssignment: getAssignment,
            onUnassignSpool: (pid, aid, tid) => unassignMutation.mutate({ printerId: pid, amsId: aid, trayId: tid }),
            timeFormat: settings?.time_format || "system",
            cameraViewMode: settings?.camera_view_mode || "window",
            onOpenEmbeddedCamera: (id, name) => setEmbeddedCameraPrinters((prev) => new Map(prev).set(id, { id, name })),
            checkPrinterFirmware: settings?.check_printer_firmware !== false,
            dryingPresets: effectiveDryingPresets
          },
          printer.id
        )) })
      ] }, location)) })
    ) : (
      /* Regular grid view */
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-4 ${cardSize >= 3 ? "gap-6" : ""} ${getGridClasses()}`, children: sortedPrinters.map((printer) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        PrinterCard,
        {
          printer,
          hideIfDisconnected: hideDisconnected,
          maintenanceInfo: maintenanceByPrinter[printer.id],
          viewMode,
          cardSize,
          useSharedStatusCache,
          sharedSmartPlug: smartPlugByPrinter[printer.id] ?? null,
          pendingQueueItems: pendingQueueByPrinter[printer.id] ?? [],
          printingQueueItems: printingQueueByPrinter[printer.id] ?? [],
          spoolmanEnabled,
          hasUnlinkedSpools,
          linkedSpools,
          spoolmanUrl: spoolmanStatus?.url,
          spoolmanSyncMode,
          onGetAssignment: getAssignment,
          onUnassignSpool: (pid, aid, tid) => unassignMutation.mutate({ printerId: pid, amsId: aid, trayId: tid }),
          amsThresholds: settings ? {
            humidityGood: Number(settings.ams_humidity_good) || 40,
            humidityFair: Number(settings.ams_humidity_fair) || 60,
            tempGood: Number(settings.ams_temp_good) || 28,
            tempFair: Number(settings.ams_temp_fair) || 35
          } : void 0,
          timeFormat: settings?.time_format || "system",
          cameraViewMode: settings?.camera_view_mode || "window",
          onOpenEmbeddedCamera: (id, name) => setEmbeddedCameraPrinters((prev) => new Map(prev).set(id, { id, name })),
          checkPrinterFirmware: settings?.check_printer_firmware !== false,
          dryingPresets: effectiveDryingPresets
        },
        printer.id
      )) })
    ),
    showAddModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddPrinterModal,
      {
        onClose: () => setShowAddModal(false),
        onAdd: (data) => addMutation.mutate(data),
        existingSerials: printers?.map((p) => p.serial_number) || []
      }
    ),
    Array.from(embeddedCameraPrinters.values()).map((camera, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmbeddedCameraViewer,
      {
        printerId: camera.id,
        printerName: camera.name,
        viewerIndex: index,
        onClose: () => setEmbeddedCameraPrinters((prev) => {
          const next = new Map(prev);
          next.delete(camera.id);
          return next;
        })
      },
      camera.id
    ))
  ] });
}
export {
  AmsNameHoverCard,
  PrintersPage
};
