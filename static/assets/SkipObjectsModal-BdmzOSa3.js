import { c as createLucideIcon, j as jsxRuntimeExports, u as useTranslation, a as useToast, k as useAuth, r as reactExports, d as useQuery, e as useMutation, f as api, X, L as LoaderCircle, l as CircleAlert, h as ConfirmModal } from "./index-By7NB6Yd.js";
import { B as Box } from "./box-DMwc6M-V.js";
import { M as Maximize2 } from "./maximize-2-BQEEmz5s.js";
const __iconNode$1 = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
];
const Minimize = createLucideIcon("minimize", __iconNode$1);
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = createLucideIcon("monitor", __iconNode);
function ChamberLight({ on, className = "w-5 h-5" }) {
  const bulbFill = on ? "#facc15" : "none";
  const strokeColor = on ? "#78350f" : "currentColor";
  const rayOpacity = on ? 1 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 32 32",
      fill: "none",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { stroke: strokeColor, opacity: rayOpacity, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6.1", y1: "6.1", x2: "8.9", y2: "8.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "25.9", y1: "6.1", x2: "23.1", y2: "8.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "2", y1: "16", x2: "6", y2: "16" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "30", y1: "16", x2: "26", y2: "16" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M12 24v-2.3c0-.9-.4-1.7-1-2.3C9.2 17.6 8 15.4 8 13c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.4-1.2 4.6-3 6.4-.6.6-1 1.4-1 2.3V24",
            fill: bulbFill,
            stroke: strokeColor
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 24h8", stroke: strokeColor }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 27h8", stroke: strokeColor }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 30h6", stroke: strokeColor })
      ]
    }
  );
}
const SkipObjectsIcon = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "15", width: "5", height: "5", rx: "0.5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "9.5", y: "15", width: "5", height: "5", rx: "0.5", fill: "currentColor", opacity: "0.3" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "17", y: "15", width: "5", height: "5", rx: "0.5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 12 C4 6, 14 6, 14 12" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "12,10 14,12 12,14" })
] });
function SkipObjectsModal({ printerId, isOpen, onClose }) {
  const { t } = useTranslation();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [pendingSkip, setPendingSkip] = reactExports.useState(null);
  const [enlarged, setEnlarged] = reactExports.useState(false);
  const { data: status } = useQuery({
    queryKey: ["printerStatus", printerId],
    queryFn: () => api.getPrinterStatus(printerId),
    refetchInterval: 3e4,
    enabled: isOpen
  });
  const { data: objectsData, refetch: refetchObjects } = useQuery({
    queryKey: ["printableObjects", printerId],
    queryFn: () => api.getPrintableObjects(printerId),
    enabled: isOpen,
    refetchInterval: isOpen ? 5e3 : false
  });
  const skipObjectsMutation = useMutation({
    mutationFn: (objectIds) => api.skipObjects(printerId, objectIds),
    onSuccess: (data) => {
      showToast(data.message || t("printers.skipObjects.objectsSkipped"));
      setPendingSkip(null);
      refetchObjects();
    },
    onError: (error) => showToast(error.message || t("printers.toast.failedToSkipObjects"), "error")
  });
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        onClick: onClose,
        onKeyDown: (e) => {
          if (e.key === "Escape") {
            if (enlarged) setEnlarged(false);
            else onClose();
          }
        },
        tabIndex: -1,
        ref: (el) => el?.focus(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 z-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative z-10 bg-white dark:bg-bambu-dark border border-gray-200 dark:border-bambu-dark-tertiary rounded-xl shadow-2xl w-[560px] max-h-[85vh] flex flex-col overflow-hidden",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-bambu-dark-tertiary bg-gray-50 dark:bg-bambu-dark", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SkipObjectsIcon, { className: "w-4 h-4 text-bambu-green" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-900 dark:text-white", children: t("printers.skipObjects.title") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: onClose,
                      className: "p-1 text-gray-500 dark:text-bambu-gray hover:text-gray-900 dark:hover:text-white rounded transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  )
                ] }),
                !objectsData ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin text-bambu-gray" }) }) : objectsData.objects.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 px-4 text-bambu-gray", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("printers.noObjectsFound") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1 opacity-70", children: t("printers.objectsLoadedOnPrintStart") })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-2.5 bg-blue-50 dark:bg-blue-500/10 border-b border-gray-200 dark:border-bambu-dark-tertiary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-4 h-4 text-blue-500 dark:text-blue-400" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600 dark:text-blue-300", children: t("printers.skipObjects.matchIdsInfo") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-blue-500/70 dark:text-blue-300/60", children: t("printers.skipObjects.printerShowsIds") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-xs text-gray-500 dark:text-bambu-gray", children: [
                      objectsData.skipped_count,
                      "/",
                      objectsData.total,
                      " ",
                      t("printers.skipObjects.skipped")
                    ] })
                  ] }),
                  (status?.layer_num ?? 0) <= 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-500/10 border-b border-gray-200 dark:border-bambu-dark-tertiary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 dark:text-amber-400", children: t("printers.skipObjects.waitForLayer", { layer: status?.layer_num ?? 0 }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-52 flex-shrink-0 p-4 border-r border-gray-200 dark:border-bambu-dark-tertiary bg-gray-50 dark:bg-bambu-dark-secondary overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative cursor-pointer group", onClick: () => setEnlarged(true), children: [
                      status?.cover_url ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: `${status.cover_url}?view=top`,
                          alt: t("printers.printPreview"),
                          className: "w-full aspect-square object-contain rounded-lg bg-gray-900 dark:bg-gray-900 border border-gray-300 dark:border-gray-600"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-square rounded-lg bg-gray-100 dark:bg-bambu-dark flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-8 h-8 text-gray-300 dark:text-bambu-gray/30" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 p-1 bg-black/60 rounded opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-3.5 h-3.5 text-white" }) }),
                      objectsData.objects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: objectsData.objects.map((obj, idx) => {
                        let x, y;
                        if (obj.x != null && obj.y != null && objectsData.bbox_all) {
                          const [xMin, yMin, xMax, yMax] = objectsData.bbox_all;
                          const bboxWidth = xMax - xMin;
                          const bboxHeight = yMax - yMin;
                          const padding = 8;
                          const contentArea = 100 - padding * 2;
                          x = padding + (obj.x - xMin) / bboxWidth * contentArea;
                          y = padding + (yMax - obj.y) / bboxHeight * contentArea;
                          x = Math.max(5, Math.min(95, x));
                          y = Math.max(5, Math.min(95, y));
                        } else if (obj.x != null && obj.y != null) {
                          const buildPlate = 256;
                          x = obj.x / buildPlate * 100;
                          y = 100 - obj.y / buildPlate * 100;
                          x = Math.max(5, Math.min(95, x));
                          y = Math.max(5, Math.min(95, y));
                        } else {
                          const cols = Math.ceil(Math.sqrt(objectsData.objects.length));
                          const row = Math.floor(idx / cols);
                          const col = idx % cols;
                          const rows = Math.ceil(objectsData.objects.length / cols);
                          x = 15 + col * (70 / cols) + 35 / cols;
                          y = 15 + row * (70 / rows) + 35 / rows;
                        }
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `absolute flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold shadow-lg ${obj.skipped ? "bg-red-500 text-white line-through" : "bg-bambu-green text-black"}`,
                            style: {
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)"
                            },
                            title: obj.name,
                            children: obj.id
                          },
                          obj.id
                        );
                      }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2 px-2 py-1 bg-white/90 dark:bg-black/80 rounded text-[10px] text-gray-700 dark:text-white shadow-sm", children: t("printers.skipObjects.activeCount", { count: objectsData.objects.filter((o) => !o.skipped).length }) })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0 overflow-y-auto", children: objectsData.objects.map((obj) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `
                      flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-bambu-dark-tertiary/50 last:border-0
                      ${obj.skipped ? "bg-red-50 dark:bg-red-500/10" : "hover:bg-gray-50 dark:hover:bg-bambu-dark/50"}
                    `,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `
                      w-12 h-12 flex-shrink-0 rounded-lg flex flex-col items-center justify-center
                      ${obj.skipped ? "bg-red-100 dark:bg-red-500/20 border border-red-300 dark:border-red-500/40" : "bg-green-100 dark:bg-bambu-green/20 border border-green-300 dark:border-bambu-green/40"}
                    `, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-lg font-mono font-bold ${obj.skipped ? "text-red-500 dark:text-red-400" : "text-green-600 dark:text-bambu-green"}`, children: obj.id }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] uppercase tracking-wider ${obj.skipped ? "text-red-400/60" : "text-green-500/60 dark:text-bambu-green/60"}`, children: "ID" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block text-sm truncate ${obj.skipped ? "text-red-500 dark:text-red-400 line-through" : "text-gray-900 dark:text-white"}`, children: obj.name }),
                            obj.skipped && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-red-400/60", children: t("printers.willBeSkipped") })
                          ] }),
                          !obj.skipped ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => setPendingSkip({ id: obj.id, name: obj.name }),
                              disabled: skipObjectsMutation.isPending || (status?.layer_num ?? 0) <= 1 || !hasPermission("printers:control"),
                              className: `px-4 py-2 text-xs font-medium rounded-lg transition-colors ${(status?.layer_num ?? 0) <= 1 || !hasPermission("printers:control") ? "bg-gray-100 dark:bg-bambu-dark text-gray-400 dark:text-bambu-gray/50 cursor-not-allowed" : "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-500/30 border border-red-300 dark:border-red-500/30"}`,
                              title: !hasPermission("printers:control") ? t("printers.permission.noControl") : (status?.layer_num ?? 0) <= 1 ? t("printers.skipObjects.waitForLayer", { layer: status?.layer_num ?? 0 }) : t("printers.skipObjects.skip"),
                              children: t("printers.skipObjects.skip")
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-2 text-xs text-red-500 dark:text-red-400/70 bg-red-100 dark:bg-red-500/10 rounded-lg", children: t("printers.skipObjects.skipped") })
                        ]
                      },
                      obj.id
                    )) })
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ),
    pendingSkip && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        variant: "warning",
        title: t("printers.skipObjects.confirmTitle"),
        message: t("printers.skipObjects.confirmMessage", { name: pendingSkip.name }),
        confirmText: t("printers.skipObjects.skip"),
        isLoading: skipObjectsMutation.isPending,
        onConfirm: () => skipObjectsMutation.mutate([pendingSkip.id]),
        onCancel: () => setPendingSkip(null)
      }
    ),
    enlarged && objectsData && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 bg-black/90 flex items-center justify-center z-60",
        onClick: () => setEnlarged(false),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setEnlarged(false),
              className: "absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative max-w-[600px] max-h-[80vh] aspect-square",
              onClick: (e) => e.stopPropagation(),
              children: [
                status?.cover_url ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: `${status.cover_url}?view=top`,
                    alt: t("printers.printPreview"),
                    className: "w-full h-full object-contain rounded-lg bg-gray-900"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-lg bg-gray-800 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-16 h-16 text-gray-500" }) }),
                objectsData.objects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: objectsData.objects.map((obj, idx) => {
                  let x, y;
                  if (obj.x != null && obj.y != null && objectsData.bbox_all) {
                    const [xMin, yMin, xMax, yMax] = objectsData.bbox_all;
                    const bboxWidth = xMax - xMin;
                    const bboxHeight = yMax - yMin;
                    const padding = 8;
                    const contentArea = 100 - padding * 2;
                    x = padding + (obj.x - xMin) / bboxWidth * contentArea;
                    y = padding + (yMax - obj.y) / bboxHeight * contentArea;
                    x = Math.max(5, Math.min(95, x));
                    y = Math.max(5, Math.min(95, y));
                  } else if (obj.x != null && obj.y != null) {
                    const buildPlate = 256;
                    x = obj.x / buildPlate * 100;
                    y = 100 - obj.y / buildPlate * 100;
                    x = Math.max(5, Math.min(95, x));
                    y = Math.max(5, Math.min(95, y));
                  } else {
                    const cols = Math.ceil(Math.sqrt(objectsData.objects.length));
                    const row = Math.floor(idx / cols);
                    const col = idx % cols;
                    const rows = Math.ceil(objectsData.objects.length / cols);
                    x = 15 + col * (70 / cols) + 35 / cols;
                    y = 15 + row * (70 / rows) + 35 / rows;
                  }
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `absolute flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold shadow-lg ${obj.skipped ? "bg-red-500 text-white line-through" : "bg-bambu-green text-black"}`,
                      style: {
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)"
                      },
                      title: obj.name,
                      children: obj.id
                    },
                    obj.id
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2 px-2 py-1 bg-white/90 dark:bg-black/80 rounded text-[10px] text-gray-700 dark:text-white shadow-sm", children: t("printers.skipObjects.activeCount", { count: objectsData.objects.filter((o) => !o.skipped).length }) })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  ChamberLight as C,
  Minimize as M,
  SkipObjectsIcon as S,
  SkipObjectsModal as a
};
