import { c as createLucideIcon, u as useTranslation, b as useQueryClient, a as useToast, k as useAuth, r as reactExports, d as useQuery, e as useMutation, ad as useQueries, f as api, p as parseUTCDate, j as jsxRuntimeExports, B as Button, A as Card, D as CardContent, H as formatDuration, R as CircleCheckBig, T as Trash2, q as Calendar, X, h as ConfirmModal, Q as Layers, E as ExternalLink, t as Link, U as User, ae as Mail, K as Printer, v as formatRelativeTime, P as Power, S as formatETA, n as CircleAlert, af as BookOpen, $ as CircleX } from "./index-CMdmMVx7.js";
import { u as useSensors, a as useSensor, D as DndContext, c as closestCenter, S as SortableContext, v as verticalListSortingStrategy, b as useSortable, C as CSS, d as arrayMove, s as sortableKeyboardCoordinates, K as KeyboardSensor, P as PointerSensor } from "./sortable.esm-B4eOkVM3.js";
import { P as PrintModal, H as Hand } from "./index-D4wGiEoO.js";
import { g as getMakerWorldModelDisplayName, i as isMakerWorldCnModelUrl } from "./makerWorld-CtZm-1Az.js";
import { L as ListOrdered } from "./list-ordered-DkAjjzJB.js";
import { E as EyeOff } from "./eye-off-DkrTi1ED.js";
import { L as Lock } from "./lock-BX3QeMq5.js";
import { P as Plus } from "./plus-BP-iHzEt.js";
import { P as Play } from "./play-CqUWqFNe.js";
import { C as Clock } from "./clock-Cv3tr1BN.js";
import { T as Timer } from "./timer-BMm9OMwa.js";
import { A as ArrowUp } from "./arrow-up-DnGSd7Fn.js";
import { A as ArrowDown } from "./arrow-down-KSy9Bjnf.js";
import { S as SquareCheckBig } from "./square-check-big-CobOqy0m.js";
import { S as Square } from "./square-DluflY8c.js";
import { P as Pencil } from "./pencil-BFRAXbsR.js";
import { C as Check } from "./check-D4SLDLZy.js";
import { G as GripVertical } from "./grip-vertical-SGCzASiX.js";
import { R as RefreshCw } from "./refresh-cw-BiEoeHE_.js";
import { P as Pause } from "./pause-Bz2nbd3F.js";
import { S as SkipForward } from "./skip-forward-DFHJj1B4.js";
import "./index-DiT7BGs-.js";
import "./colors-lMyZBYSI.js";
import "./amsHelpers-CeYQrZcW.js";
import "./currency-xmcJ_vO3.js";
import "./rotate-ccw-BgDYbz8N.js";
import "./palette-pog5uBPH.js";
import "./wand-sparkles-BC31NUYn.js";
import "./settings-DvCyRkVD.js";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }]
];
const CircleStop = createLucideIcon("circle-stop", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
      key: "56o5sh"
    }
  ]
];
const Weight = createLucideIcon("weight", __iconNode);
const CONTACT_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function formatWeight(g, useKg = false) {
  if (useKg && g >= 1e3) return `${(g / 1e3).toFixed(1)}kg`;
  return `${Math.round(g)}g`;
}
function isValidContactEmail(email) {
  return CONTACT_EMAIL_RE.test(email.trim());
}
function getCustomRequestTitle(item, fallbackTitle) {
  if (!item.request_model_url) return fallbackTitle;
  return getMakerWorldModelDisplayName(item.request_model_url, fallbackTitle);
}
function getQueueItemDisplayName(item, fallbackCustomTitle) {
  if (item.custom_request) {
    return getCustomRequestTitle(item, fallbackCustomTitle);
  }
  return item.archive_name || item.library_file_name || `File #${item.archive_id || item.library_file_id}`;
}
function StatusBadge({ status, waitingReason, printerState, t }) {
  if (status === "pending" && waitingReason) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border text-purple-400 bg-purple-400/10 border-purple-400/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
      t("queue.status.waiting")
    ] });
  }
  if (status === "printing" && printerState === "PAUSE") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border text-yellow-400 bg-yellow-400/10 border-yellow-400/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-3.5 h-3.5" }),
      t("queue.status.paused")
    ] });
  }
  const config = {
    pending: { icon: Clock, color: "text-status-warning bg-status-warning/10 border-status-warning/20", label: t("queue.status.pending") },
    printing: { icon: Play, color: "text-blue-400 bg-blue-400/10 border-blue-400/20", label: t("queue.status.printing") },
    completed: { icon: CircleCheckBig, color: "text-status-ok bg-status-ok/10 border-status-ok/20", label: t("queue.status.completed") },
    failed: { icon: CircleX, color: "text-status-error bg-status-error/10 border-status-error/20", label: t("queue.status.failed") },
    skipped: { icon: SkipForward, color: "text-orange-400 bg-orange-400/10 border-orange-400/20", label: t("queue.status.skipped") },
    cancelled: { icon: X, color: "text-gray-400 bg-gray-400/10 border-gray-400/20", label: t("queue.status.cancelled") }
  };
  const { icon: Icon, color, label } = config[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${color}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" }),
    label
  ] });
}
function BulkEditModal({
  selectedCount,
  printers,
  onSave,
  onClose,
  isSaving,
  canControlPrinter,
  t
}) {
  const [printerId, setPrinterId] = reactExports.useState("unchanged");
  const [manualStart, setManualStart] = reactExports.useState("unchanged");
  const [autoOffAfter, setAutoOffAfter] = reactExports.useState("unchanged");
  const [requirePreviousSuccess, setRequirePreviousSuccess] = reactExports.useState("unchanged");
  const [bedLevelling, setBedLevelling] = reactExports.useState("unchanged");
  const [flowCali, setFlowCali] = reactExports.useState("unchanged");
  const [vibrationCali, setVibrationCali] = reactExports.useState("unchanged");
  const [layerInspect, setLayerInspect] = reactExports.useState("unchanged");
  const [timelapse, setTimelapse] = reactExports.useState("unchanged");
  const [useAms, setUseAms] = reactExports.useState("unchanged");
  const handleSave = () => {
    const data = {};
    if (printerId !== "unchanged") data.printer_id = printerId;
    if (manualStart !== "unchanged") data.manual_start = manualStart;
    if (autoOffAfter !== "unchanged") data.auto_off_after = autoOffAfter;
    if (requirePreviousSuccess !== "unchanged") data.require_previous_success = requirePreviousSuccess;
    if (bedLevelling !== "unchanged") data.bed_levelling = bedLevelling;
    if (flowCali !== "unchanged") data.flow_cali = flowCali;
    if (vibrationCali !== "unchanged") data.vibration_cali = vibrationCali;
    if (layerInspect !== "unchanged") data.layer_inspect = layerInspect;
    if (timelapse !== "unchanged") data.timelapse = timelapse;
    if (useAms !== "unchanged") data.use_ams = useAms;
    onSave(data);
  };
  const hasChanges = printerId !== "unchanged" || manualStart !== "unchanged" || autoOffAfter !== "unchanged" || requirePreviousSuccess !== "unchanged" || bedLevelling !== "unchanged" || flowCali !== "unchanged" || vibrationCali !== "unchanged" || layerInspect !== "unchanged" || timelapse !== "unchanged" || useAms !== "unchanged";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-lg max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("queue.bulkEdit.title", { count: selectedCount }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-bambu-dark rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("queue.bulkEdit.description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.bulkEdit.printer") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: printerId === null ? "null" : printerId === "unchanged" ? "unchanged" : String(printerId),
            onChange: (e) => {
              const val = e.target.value;
              if (val === "unchanged") setPrinterId("unchanged");
              else if (val === "null") setPrinterId(null);
              else setPrinterId(Number(val));
            },
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "unchanged", children: t("queue.bulkEdit.noChange") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "null", children: t("queue.filter.unassigned") }),
              printers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.bulkEdit.queueOptions") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.staged"), value: manualStart, onChange: setManualStart, t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.autoPowerOff"), value: autoOffAfter, onChange: setAutoOffAfter, disabled: !canControlPrinter, t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.requirePrevious"), value: requirePreviousSuccess, onChange: setRequirePreviousSuccess, t })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.bulkEdit.printOptions") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.bedLevelling"), value: bedLevelling, onChange: setBedLevelling, t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.flowCalibration"), value: flowCali, onChange: setFlowCali, t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.vibrationCalibration"), value: vibrationCali, onChange: setVibrationCali, t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.layerInspection"), value: layerInspect, onChange: setLayerInspect, t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.timelapse"), value: timelapse, onChange: setTimelapse, t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriStateToggle, { label: t("queue.bulkEdit.useAms"), value: useAms, onChange: setUseAms, t })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 p-4 border-t border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("common.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleSave,
          disabled: !hasChanges || isSaving,
          children: isSaving ? t("common.saving") : t("queue.bulkEdit.applyChanges")
        }
      )
    ] })
  ] }) });
}
function QueueRequestModal({
  item,
  onClose,
  onSubmit,
  isSaving,
  t
}) {
  const [studentId, setStudentId] = reactExports.useState(item?.student_id ?? "");
  const [requesterName, setRequesterName] = reactExports.useState(item?.requester_name ?? "");
  const [contactEmail, setContactEmail] = reactExports.useState(item?.contact_email ?? "");
  const [requestModelUrl, setRequestModelUrl] = reactExports.useState(item?.request_model_url ?? "");
  const [requestNotes, setRequestNotes] = reactExports.useState(item?.request_notes ?? "");
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setStudentId(item?.student_id ?? "");
    setRequesterName(item?.requester_name ?? "");
    setContactEmail(item?.contact_email ?? "");
    setRequestModelUrl(item?.request_model_url ?? "");
    setRequestNotes(item?.request_notes ?? "");
    setError(null);
  }, [item]);
  const handleSubmit = () => {
    const trimmedStudentId = studentId.trim();
    const trimmedRequesterName = requesterName.trim();
    const trimmedContactEmail = contactEmail.trim();
    const trimmedRequestModelUrl = requestModelUrl.trim();
    const trimmedRequestNotes = requestNotes.trim();
    if (!trimmedStudentId || !trimmedRequesterName || !trimmedContactEmail || !trimmedRequestModelUrl) {
      setError(t("queue.request.requiredError"));
      return;
    }
    if (!isValidContactEmail(trimmedContactEmail)) {
      setError(t("queue.request.emailError"));
      return;
    }
    if (!isMakerWorldCnModelUrl(trimmedRequestModelUrl)) {
      setError(t("queue.request.urlError"));
      return;
    }
    setError(null);
    onSubmit({
      student_id: trimmedStudentId,
      requester_name: trimmedRequesterName,
      contact_email: trimmedContactEmail,
      request_model_url: trimmedRequestModelUrl,
      request_notes: trimmedRequestNotes
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: item ? t("queue.request.edit") : t("queue.request.add") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-bambu-dark rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("queue.request.description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-bambu-dark-tertiary bg-bambu-dark px-3 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium", children: t("nav.modelLibrary") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("modelLibrary.quickLinksDescription") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/model-library",
            className: "inline-flex items-center gap-1.5 rounded-lg bg-bambu-green px-3 py-2 text-sm font-medium text-white hover:bg-bambu-green-light transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
              t("nav.modelLibrary")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.studentId") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: studentId,
              onChange: (e) => setStudentId(e.target.value),
              className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.requesterName") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: requesterName,
              onChange: (e) => setRequesterName(e.target.value),
              className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.contactEmail") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: contactEmail,
            onChange: (e) => setContactEmail(e.target.value),
            placeholder: t("queue.request.contactEmailPlaceholder"),
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.modelUrl") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: requestModelUrl,
            onChange: (e) => setRequestModelUrl(e.target.value),
            placeholder: t("queue.request.urlPlaceholder"),
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-2", children: t("queue.request.urlHint") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.notes") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: requestNotes,
            onChange: (e) => setRequestNotes(e.target.value),
            rows: 4,
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none resize-y"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2", children: error })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 p-4 border-t border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("common.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSubmit, disabled: isSaving, children: isSaving ? t("common.saving") : item ? t("queue.request.save") : t("queue.request.submit") })
    ] })
  ] }) });
}
function TriStateToggle({
  label,
  value,
  onChange,
  disabled,
  t
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between py-1 ${disabled ? "opacity-50" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-bambu-dark rounded-lg p-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => onChange("unchanged"),
          disabled,
          className: `px-2 py-1 text-xs rounded ${value === "unchanged" ? "bg-bambu-dark-tertiary text-white" : "text-bambu-gray hover:text-white"} disabled:cursor-not-allowed`,
          children: "—"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => onChange(false),
          disabled,
          className: `px-2 py-1 text-xs rounded ${value === false ? "bg-red-500/20 text-red-400" : "text-bambu-gray hover:text-white"} disabled:cursor-not-allowed`,
          children: t("common.off")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => onChange(true),
          disabled,
          className: `px-2 py-1 text-xs rounded ${value === true ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:text-white"} disabled:cursor-not-allowed`,
          children: t("common.on")
        }
      )
    ] })
  ] });
}
function SortableQueueItem({
  item,
  position,
  onEdit,
  onCancel,
  onRemove,
  onStop,
  onRequeue,
  onStart,
  onSetCustomStatus,
  timeFormat = "system",
  isSelected = false,
  isUpdatingStatus = false,
  onToggleSelect,
  hasPermission,
  canModify,
  printerState,
  t
}) {
  const { data: status } = useQuery({
    queryKey: ["printerStatus", item.printer_id],
    queryFn: () => api.getPrinterStatus(item.printer_id),
    refetchInterval: 3e4,
    enabled: !item.custom_request && item.printer_id != null && printerState === "printing"
  });
  const isLibraryFile = !!item.library_file_id && !item.archive_id;
  const { data: archivePlatesData } = useQuery({
    queryKey: ["archive-plates", item.archive_id],
    queryFn: () => api.getArchivePlates(item.archive_id),
    enabled: !item.custom_request && !!item.archive_id && !isLibraryFile
  });
  const { data: libraryPlatesData } = useQuery({
    queryKey: ["library-file-plates", item.library_file_id],
    queryFn: () => api.getLibraryFilePlates(item.library_file_id),
    enabled: !item.custom_request && isLibraryFile && !!item.library_file_id
  });
  const platesData = isLibraryFile ? libraryPlatesData : archivePlatesData;
  const plates = platesData?.plates ?? [];
  const canReorder = hasPermission("queue:reorder") && !item.custom_request;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: item.id, disabled: item.status !== "pending" || !canReorder });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  const isPrinting = item.status === "printing";
  const isPending = item.status === "pending";
  const isHistory = ["completed", "failed", "skipped", "cancelled"].includes(item.status);
  const isMobileSelectable = isPending && !item.custom_request && !!onToggleSelect;
  const displayName = getQueueItemDisplayName(item, t("queue.request.defaultTitle"));
  const canEdit = canModify("queue", "update", item.created_by_id);
  const canDelete = canModify("queue", "delete", item.created_by_id);
  const canEditCustomRequest = canEdit && !item.contact_details_hidden;
  const customStatusValue = item.status === "printing" || item.status === "completed" ? item.status : "pending";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: setNodeRef,
      style,
      className: `
        group relative bg-bambu-dark-secondary rounded-xl border transition-all duration-200
        ${isDragging ? "opacity-50 scale-[1.02] shadow-xl z-50" : ""}
        ${isPrinting ? "border-blue-500/30 bg-gradient-to-r from-blue-500/5 to-transparent" : ""}
        ${isSelected && isMobileSelectable ? "sm:border-bambu-dark-tertiary border-bambu-green/40" : ""}
        ${!isSelected && !isPrinting ? "border-bambu-dark-tertiary hover:border-bambu-dark-tertiary/80" : ""}
        ${isMobileSelectable ? "sm:cursor-default" : ""}
      `,
      onClick: isMobileSelectable ? () => {
        if (window.innerWidth < 640) onToggleSelect?.();
      } : void 0,
      children: [
        isMobileSelectable && isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden absolute left-0 top-3 bottom-3 w-1 rounded-full bg-bambu-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start sm:items-center gap-2 sm:gap-4 p-3 sm:p-4", children: [
          isPending && !item.custom_request && onToggleSelect && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                onToggleSelect?.();
              },
              className: `hidden sm:flex items-center justify-center w-6 h-6 rounded border transition-colors shrink-0 ${isSelected ? "bg-bambu-green border-bambu-green text-white" : "border-white/30 bg-black/30 hover:border-bambu-green/50"}`,
              children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" })
            }
          ),
          isPending ? canReorder ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ...attributes,
              ...listeners,
              className: "hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-bambu-dark cursor-grab active:cursor-grabbing hover:bg-bambu-dark-tertiary transition-colors touch-manipulation shrink-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "w-4 h-4 text-bambu-gray" })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-bambu-dark text-bambu-gray text-sm font-medium shrink-0", children: [
            "#",
            position ?? item.position
          ] }) : position !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-bambu-dark text-bambu-gray text-sm font-medium shrink-0", children: [
            "#",
            position
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block w-8 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 bg-bambu-dark rounded-lg overflow-hidden", children: item.archive_thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.plate_id != null ? api.getArchivePlateThumbnail(item.archive_id, item.plate_id) : api.getArchiveThumbnail(item.archive_id),
              alt: "",
              className: "w-full h-full object-cover"
            }
          ) : item.library_file_thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.plate_id != null ? api.getLibraryFilePlateThumbnail(item.library_file_id, item.plate_id) : api.getLibraryFileThumbnailUrl(item.library_file_id),
              alt: "",
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-bambu-gray", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-5 h-5 sm:w-6 sm:h-6" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base text-white font-medium truncate", children: [
                displayName,
                !item.custom_request && (platesData?.is_multi_plate ?? false) && item.plate_id !== void 0 && item.plate_id !== null && ` • ${plates.find((plate) => plate.index === item.plate_id)?.name || t("queue.plateNumber", { index: item.plate_id })}`
              ] }),
              item.custom_request && item.request_model_url ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: item.request_model_url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-bambu-gray hover:text-bambu-green transition-colors flex-shrink-0",
                  title: t("queue.request.openLink"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
                }
              ) : item.archive_id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: `/archives?highlight=${item.archive_id}`,
                  className: "text-bambu-gray hover:text-bambu-green transition-colors flex-shrink-0",
                  title: t("queue.viewArchive"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
                }
              ) : item.library_file_id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: `/library?highlight=${item.library_file_id}`,
                  className: "text-bambu-gray hover:text-bambu-green transition-colors flex-shrink-0",
                  title: t("queue.viewInFileManager"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
                }
              ) : null
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-bambu-gray", children: [
              item.custom_request ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 sm:gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                  t("queue.request.studentIdValue", { value: item.student_id || "-" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 sm:gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                  t("queue.request.requesterNameValue", {
                    value: item.contact_details_hidden ? t("queue.request.hiddenValue") : item.requester_name || "-"
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 sm:gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                  t("queue.request.contactEmailValue", {
                    value: item.contact_details_hidden ? t("queue.request.hiddenValue") : item.contact_email || "-"
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 sm:gap-1.5 ${item.printer_id === null ? "text-orange-400" : ""}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                  item.printer_id === null ? t("queue.filter.unassigned") : item.printer_name || `${t("common.printer")} #${item.printer_id}`
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 sm:gap-1.5 ${item.printer_id === null && !item.target_model ? "text-orange-400" : ""} ${item.target_model ? "text-blue-400" : ""}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[120px] sm:max-w-none", children: item.target_model ? `${t("queue.filter.any")} ${item.target_model}${item.target_location ? ` @ ${item.target_location}` : ""}${item.required_filament_types?.length ? ` (${item.required_filament_types.join(", ")})` : ""}` : item.printer_id === null ? t("queue.filter.unassigned") : item.printer_name || `${t("common.printer")} #${item.printer_id}` })
                ] }),
                item.print_time_seconds && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 sm:gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                  formatDuration(item.print_time_seconds)
                ] }),
                item.filament_used_grams && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 sm:gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Weight, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                  formatWeight(item.filament_used_grams)
                ] })
              ] }),
              item.created_by_username && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:flex items-center gap-1.5", title: t("queue.addedBy", { name: item.created_by_username }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                item.created_by_username
              ] }),
              isPending && !item.manual_start && !item.custom_request && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                item.scheduled_time ? (parseUTCDate(item.scheduled_time)?.getTime() ?? 0) - Date.now() < -6e4 ? t?.("queue.time.overdue") ?? "Overdue" : formatRelativeTime(item.scheduled_time, timeFormat, t) : t?.("queue.time.asap") ?? "ASAP"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2", children: [
              item.custom_request ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20", children: t("queue.request.badge") }) : item.manual_start && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" }),
                t("queue.badges.staged")
              ] }),
              item.require_previous_success && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20", children: t("queue.badges.requiresPrevious") }),
              item.auto_off_after && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3" }),
                t("queue.badges.autoPowerOff")
              ] })
            ] }),
            item.custom_request && item.request_notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs text-bambu-gray mt-1.5 sm:mt-2 whitespace-pre-wrap break-words", children: item.request_notes }),
            isPrinting && status && !item.custom_request && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 sm:mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs sm:text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-bambu-dark-tertiary rounded-full h-1.5 sm:h-2 mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "bg-bambu-green h-1.5 sm:h-2 rounded-full transition-all",
                    style: { width: `${status.progress || 0}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white", children: [
                  Math.round(status.progress || 0),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-bambu-gray", children: [
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
                ] })
              ] })
            ] }),
            item.waiting_reason && item.status === "pending" && !item.custom_request && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] sm:text-xs text-purple-400 mt-1.5 sm:mt-2 flex items-start gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.waiting_reason })
            ] }),
            item.error_message && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] sm:text-xs text-red-400 mt-1.5 sm:mt-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
              item.error_message
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-1 shrink-0", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: item.status, waitingReason: item.waiting_reason, printerState, t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 sm:gap-1", children: item.custom_request ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: customStatusValue,
                  onChange: (e) => onSetCustomStatus?.(e.target.value),
                  disabled: !canEdit || isUpdatingStatus,
                  title: !canEdit ? t("queue.permissions.noStatusChange") : t("queue.request.status"),
                  className: "px-2 py-1.5 text-xs sm:text-sm bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none disabled:opacity-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: t("queue.status.pending") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "printing", children: t("queue.status.printing") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: t("queue.status.completed") })
                  ]
                }
              ),
              isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: onEdit,
                  disabled: !canEditCustomRequest,
                  title: item.contact_details_hidden ? t("queue.permissions.unlockContactsFirst") : !canEdit ? t("queue.permissions.noEdit") : t("common.edit"),
                  className: "p-1.5 sm:p-2",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: onRemove,
                  disabled: !canDelete,
                  title: !canDelete ? t("queue.permissions.noRemove") : t("common.remove"),
                  className: "p-1.5 sm:p-2",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              isPrinting && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: onStop,
                  disabled: !hasPermission("printers:control"),
                  title: !hasPermission("printers:control") ? t("queue.permissions.noStopPrint") : t("queue.actions.stopPrint"),
                  className: "text-red-400 hover:text-red-300 hover:bg-red-500/10 p-1.5 sm:p-2",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleStop, { className: "w-4 h-4" })
                }
              ),
              isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                item.manual_start && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: onStart,
                    disabled: !hasPermission("printers:control"),
                    title: !hasPermission("printers:control") ? t("queue.permissions.noStartPrint") : t("queue.actions.startPrint"),
                    className: "text-bambu-green hover:text-bambu-green-light hover:bg-bambu-green/10 p-1.5 sm:p-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: onEdit,
                    disabled: !canEdit,
                    title: !canEdit ? t("queue.permissions.noEdit") : t("common.edit"),
                    className: "p-1.5 sm:p-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: onCancel,
                    disabled: !canDelete,
                    title: !canDelete ? t("queue.permissions.noCancel") : t("common.cancel"),
                    className: "text-red-400 hover:text-red-300 hover:bg-red-500/10 p-1.5 sm:p-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              isHistory && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: onRequeue,
                    disabled: !hasPermission("queue:create"),
                    title: !hasPermission("queue:create") ? t("queue.permissions.noRequeue") : t("queue.actions.requeue"),
                    className: "text-bambu-green hover:text-bambu-green/80 hover:bg-bambu-green/10 p-1.5 sm:p-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: onRemove,
                    disabled: !canDelete,
                    title: !canDelete ? t("queue.permissions.noRemove") : t("common.remove"),
                    className: "p-1.5 sm:p-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] }) })
          ] })
        ] })
      ]
    }
  );
}
function QueuePage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission, hasAnyPermission, canModify } = useAuth();
  const [filterPrinter, setFilterPrinter] = reactExports.useState(null);
  const [filterStatus, setFilterStatus] = reactExports.useState("");
  const [filterLocation, setFilterLocation] = reactExports.useState("");
  const [showClearHistoryConfirm, setShowClearHistoryConfirm] = reactExports.useState(false);
  const [showRequestModal, setShowRequestModal] = reactExports.useState(false);
  const [editingRequestItem, setEditingRequestItem] = reactExports.useState(null);
  const [contactRevealPassword, setContactRevealPassword] = reactExports.useState(null);
  const [showContactUnlockModal, setShowContactUnlockModal] = reactExports.useState(false);
  const [contactPasswordInput, setContactPasswordInput] = reactExports.useState("");
  const [editItem, setEditItem] = reactExports.useState(null);
  const [requeueItem, setRequeueItem] = reactExports.useState(null);
  const [confirmAction, setConfirmAction] = reactExports.useState(null);
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const [showBulkEditModal, setShowBulkEditModal] = reactExports.useState(false);
  const [historySortBy, setHistorySortBy] = reactExports.useState(() => {
    const saved = localStorage.getItem("queue.historySortBy");
    return saved || "date";
  });
  const [historySortAsc, setHistorySortAsc] = reactExports.useState(() => {
    const saved = localStorage.getItem("queue.historySortAsc");
    return saved !== null ? saved === "true" : false;
  });
  const [pendingSortBy, setPendingSortBy] = reactExports.useState(() => {
    const saved = localStorage.getItem("queue.pendingSortBy");
    return saved || "position";
  });
  const [pendingSortAsc, setPendingSortAsc] = reactExports.useState(() => {
    const saved = localStorage.getItem("queue.pendingSortAsc");
    return saved !== null ? saved === "true" : true;
  });
  reactExports.useEffect(() => {
    localStorage.setItem("queue.historySortBy", historySortBy);
  }, [historySortBy]);
  reactExports.useEffect(() => {
    localStorage.setItem("queue.historySortAsc", String(historySortAsc));
  }, [historySortAsc]);
  reactExports.useEffect(() => {
    localStorage.setItem("queue.pendingSortBy", pendingSortBy);
  }, [pendingSortBy]);
  reactExports.useEffect(() => {
    localStorage.setItem("queue.pendingSortAsc", String(pendingSortAsc));
  }, [pendingSortAsc]);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const timeFormat = settings?.time_format || "system";
  const { data: queue, isLoading } = useQuery({
    queryKey: ["queue", filterPrinter, filterStatus, !!contactRevealPassword],
    queryFn: () => api.getQueue(
      filterPrinter ?? void 0,
      filterStatus || void 0,
      void 0,
      contactRevealPassword ?? void 0
    ),
    refetchInterval: 5e3
  });
  const { data: printers } = useQuery({
    queryKey: ["printers"],
    queryFn: () => api.getPrinters()
  });
  const createRequestMutation = useMutation({
    mutationFn: (data) => api.addToQueue({
      custom_request: true,
      student_id: data.student_id,
      requester_name: data.requester_name,
      contact_email: data.contact_email,
      request_model_url: data.request_model_url,
      request_notes: data.request_notes,
      manual_start: true
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      setShowRequestModal(false);
      showToast(t("queue.toast.requestCreated"));
    },
    onError: () => showToast(t("queue.toast.requestCreateFailed"), "error")
  });
  const updateRequestMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateQueueItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      setEditingRequestItem(null);
      showToast(t("queue.toast.requestUpdated"));
    },
    onError: () => showToast(t("queue.toast.requestUpdateFailed"), "error")
  });
  const updateRequestStatusMutation = useMutation({
    mutationFn: ({ id, status }) => api.updateCustomQueueItemStatus(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      showToast(t("queue.toast.statusUpdated"));
    },
    onError: () => showToast(t("queue.toast.statusUpdateFailed"), "error")
  });
  const unlockContactsMutation = useMutation({
    mutationFn: (password) => api.validateQueueContactAccess(password),
    onSuccess: (_, password) => {
      setContactRevealPassword(password);
      setContactPasswordInput("");
      setShowContactUnlockModal(false);
      showToast(t("queue.toast.contactsUnlocked"));
    },
    onError: () => showToast(t("queue.toast.unlockContactsFailed"), "error")
  });
  const cancelMutation = useMutation({
    mutationFn: (id) => api.cancelQueueItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      showToast(t("queue.toast.cancelled"));
    },
    onError: () => showToast(t("queue.toast.cancelFailed"), "error")
  });
  const removeMutation = useMutation({
    mutationFn: (id) => api.removeFromQueue(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      showToast(t("queue.toast.removed"));
    },
    onError: () => showToast(t("queue.toast.removeFailed"), "error")
  });
  const stopMutation = useMutation({
    mutationFn: (id) => api.stopQueueItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      showToast(t("queue.toast.stopped"));
    },
    onError: () => showToast(t("queue.toast.stopFailed"), "error")
  });
  const startMutation = useMutation({
    mutationFn: (id) => api.startQueueItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      showToast(t("queue.toast.released"));
    },
    onError: () => showToast(t("queue.toast.startFailed"), "error")
  });
  const reorderMutation = useMutation({
    mutationFn: (items) => api.reorderQueue(items),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
    },
    onError: () => showToast(t("queue.toast.reorderFailed"), "error")
  });
  const clearHistoryMutation = useMutation({
    mutationFn: async () => {
      const historyItems2 = queue?.filter(
        (i) => ["completed", "failed", "skipped", "cancelled"].includes(i.status)
      ) || [];
      for (const item of historyItems2) {
        await api.removeFromQueue(item.id);
      }
      return historyItems2.length;
    },
    onSuccess: (count) => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      showToast(t("queue.toast.historyCleared", { count }));
    },
    onError: () => showToast(t("queue.toast.clearHistoryFailed"), "error")
  });
  const bulkUpdateMutation = useMutation({
    mutationFn: (data) => api.bulkUpdateQueue(data),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      setSelectedItems([]);
      setShowBulkEditModal(false);
      showToast(result.message);
    },
    onError: () => showToast(t("queue.toast.updateFailed"), "error")
  });
  const bulkCancelMutation = useMutation({
    mutationFn: async (ids) => {
      for (const id of ids) {
        await api.cancelQueueItem(id);
      }
      return ids.length;
    },
    onSuccess: (count) => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      setSelectedItems([]);
      showToast(t("queue.toast.bulkCancelled", { count }));
    },
    onError: () => showToast(t("queue.toast.bulkCancelFailed"), "error")
  });
  const handleToggleSelect = (id) => {
    setSelectedItems(
      (prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  const uniqueLocations = reactExports.useMemo(() => {
    const locations = /* @__PURE__ */ new Set();
    printers?.forEach((p) => {
      if (p.location) locations.add(p.location);
    });
    queue?.forEach((item) => {
      if (item.target_location) locations.add(item.target_location);
    });
    return Array.from(locations).sort();
  }, [printers, queue]);
  const matchesLocationFilter = reactExports.useCallback((item) => {
    if (!filterLocation) return true;
    if (item.target_location) return item.target_location === filterLocation;
    if (item.printer_id) {
      const printer = printers?.find((p) => p.id === item.printer_id);
      return printer?.location === filterLocation;
    }
    return false;
  }, [filterLocation, printers]);
  const pendingItems = reactExports.useMemo(() => {
    let items = queue?.filter((i) => i.status === "pending") || [];
    if (filterLocation) {
      items = items.filter(matchesLocationFilter);
    }
    const getScheduledTime = (item) => {
      if (!item.scheduled_time) return 0;
      const time = parseUTCDate(item.scheduled_time)?.getTime() ?? 0;
      const sixMonthsFromNow = Date.now() + 180 * 24 * 60 * 60 * 1e3;
      return time > sixMonthsFromNow ? 0 : time;
    };
    return [...items].sort((a, b) => {
      let cmp;
      if (pendingSortBy === "name") {
        const aName = getQueueItemDisplayName(a, t("queue.request.defaultTitle"));
        const bName = getQueueItemDisplayName(b, t("queue.request.defaultTitle"));
        cmp = aName.localeCompare(bName);
      } else if (pendingSortBy === "printer") {
        cmp = (a.printer_name || "").localeCompare(b.printer_name || "");
      } else if (pendingSortBy === "time") {
        cmp = getScheduledTime(a) - getScheduledTime(b);
      } else {
        cmp = a.position - b.position;
      }
      return pendingSortAsc ? cmp : -cmp;
    });
  }, [queue, pendingSortBy, pendingSortAsc, matchesLocationFilter, filterLocation, t]);
  const selectablePendingItems = reactExports.useMemo(
    () => pendingItems.filter((item) => !item.custom_request),
    [pendingItems]
  );
  const handleSelectAll = () => {
    const allPendingIds = selectablePendingItems.map((i) => i.id);
    if (selectedItems.length === allPendingIds.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allPendingIds);
    }
  };
  const activeItems = reactExports.useMemo(() => {
    let items = queue?.filter((i) => i.status === "printing") || [];
    if (filterLocation) {
      items = items.filter(matchesLocationFilter);
    }
    return items;
  }, [queue, filterLocation, matchesLocationFilter]);
  const activePrinterIds = reactExports.useMemo(() => {
    const ids = /* @__PURE__ */ new Set();
    activeItems.forEach((item) => {
      if (item.printer_id) ids.add(item.printer_id);
    });
    return Array.from(ids);
  }, [activeItems]);
  const printerStatusQueries = useQueries({
    queries: activePrinterIds.map((printerId) => ({
      queryKey: ["printerStatus", printerId],
      queryFn: () => api.getPrinterStatus(printerId),
      refetchInterval: 5e3
    }))
  });
  const printerStateMap = reactExports.useMemo(() => {
    const map = {};
    activePrinterIds.forEach((printerId, index) => {
      const result = printerStatusQueries[index];
      if (result?.data?.state) {
        map[printerId] = result.data.state;
      }
    });
    return map;
  }, [activePrinterIds, printerStatusQueries]);
  const historyItems = reactExports.useMemo(() => {
    let items = queue?.filter((i) => ["completed", "failed", "skipped", "cancelled"].includes(i.status)) || [];
    if (filterLocation) {
      items = items.filter(matchesLocationFilter);
    }
    return [...items].sort((a, b) => {
      let cmp;
      if (historySortBy === "name") {
        const aName = getQueueItemDisplayName(a, t("queue.request.defaultTitle"));
        const bName = getQueueItemDisplayName(b, t("queue.request.defaultTitle"));
        cmp = aName.localeCompare(bName);
      } else if (historySortBy === "printer") {
        cmp = (a.printer_name || "").localeCompare(b.printer_name || "");
      } else {
        cmp = (parseUTCDate(b.completed_at || b.created_at)?.getTime() ?? 0) - (parseUTCDate(a.completed_at || a.created_at)?.getTime() ?? 0);
      }
      return historySortAsc ? -cmp : cmp;
    });
  }, [queue, historySortBy, historySortAsc, matchesLocationFilter, filterLocation, t]);
  const totalQueueTime = reactExports.useMemo(() => {
    return pendingItems.reduce((acc, item) => acc + (item.print_time_seconds || 0), 0);
  }, [pendingItems]);
  const totalWeight = reactExports.useMemo(() => {
    return pendingItems.reduce((acc, item) => acc + (item.filament_used_grams || 0), 0);
  }, [pendingItems]);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = pendingItems.findIndex((i) => i.id === active.id);
    const newIndex = pendingItems.findIndex((i) => i.id === over.id);
    if (oldIndex !== -1 && newIndex !== -1) {
      const reordered = arrayMove(pendingItems, oldIndex, newIndex);
      const updates = reordered.map((item, index) => ({
        id: item.id,
        position: index + 1
      }));
      reorderMutation.mutate(updates);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { className: "w-7 h-7 text-bambu-green" }),
          t("queue.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mt-1", children: t("queue.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => {
              if (contactRevealPassword) {
                setContactRevealPassword(null);
                setContactPasswordInput("");
                showToast(t("queue.toast.contactsHidden"));
              } else {
                setShowContactUnlockModal(true);
              }
            },
            children: [
              contactRevealPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
              contactRevealPassword ? t("queue.request.hideContacts") : t("queue.request.unlockContacts")
            ]
          }
        ),
        hasPermission("queue:create") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowRequestModal(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          t("queue.request.add")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 sm:w-5 sm:h-5 text-blue-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-bold text-white truncate", children: activeItems.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-bambu-gray truncate", children: t("queue.summary.printing") })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-bold text-white truncate", children: pendingItems.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-bambu-gray truncate", children: t("queue.summary.queued") })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-bambu-green/10 to-transparent border-bambu-green/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-bambu-green/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-4 h-4 sm:w-5 sm:h-5 text-bambu-green" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-bold text-white truncate", children: formatDuration(totalQueueTime) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-bambu-gray truncate", children: t("queue.summary.totalTime") })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Weight, { className: "w-4 h-4 sm:w-5 sm:h-5 text-purple-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-bold text-white truncate", children: formatWeight(totalWeight) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-bambu-gray truncate", children: t("queue.summary.totalWeight") })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-2 sm:col-span-1 bg-gradient-to-br from-gray-500/10 to-transparent border-gray-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-500/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-bold text-white truncate", children: historyItems.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-bambu-gray truncate", children: t("queue.summary.history") })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "px-2 sm:px-3 py-2 text-sm sm:text-base bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none min-w-0 flex-1 sm:flex-none",
          value: filterPrinter === -1 ? "unassigned" : filterPrinter || "",
          onChange: (e) => {
            const val = e.target.value;
            if (val === "unassigned") setFilterPrinter(-1);
            else if (val === "") setFilterPrinter(null);
            else setFilterPrinter(Number(val));
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("queue.filter.allPrinters") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "unassigned", children: t("queue.filter.unassigned") }),
            printers?.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "px-2 sm:px-3 py-2 text-sm sm:text-base bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none min-w-0 flex-1 sm:flex-none",
          value: filterStatus,
          onChange: (e) => setFilterStatus(e.target.value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("queue.filter.allStatus") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: t("queue.status.pending") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "printing", children: t("queue.status.printing") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: t("queue.status.completed") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "failed", children: t("queue.status.failed") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "skipped", children: t("queue.status.skipped") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: t("queue.status.cancelled") })
          ]
        }
      ),
      uniqueLocations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "px-2 sm:px-3 py-2 text-sm sm:text-base bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none min-w-0 flex-1 sm:flex-none",
          value: filterLocation,
          onChange: (e) => setFilterLocation(e.target.value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("queue.filter.allLocations") }),
            uniqueLocations.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: loc, children: loc }, loc))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block flex-1" }),
      historyItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full sm:w-auto",
          variant: "secondary",
          size: "sm",
          onClick: () => setShowClearHistoryConfirm(true),
          disabled: !hasPermission("queue:delete_all"),
          title: !hasPermission("queue:delete_all") ? t("queue.permissions.noClearHistory") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
            t("queue.clearHistory")
          ]
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-bambu-gray", children: t("common.loading") }) : queue?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-12 text-center border-dashed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-16 h-16 text-bambu-gray mx-auto mb-4 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium text-white mb-2", children: t("queue.empty.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray max-w-md mx-auto", children: t("queue.empty.description") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 sm:space-y-8", children: [
      activeItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-blue-400 animate-pulse" }),
          t("queue.sections.currentlyPrinting")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 sm:space-y-3", children: activeItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SortableQueueItem,
          {
            item,
            onEdit: () => item.custom_request ? setEditingRequestItem(item) : void 0,
            onCancel: () => {
            },
            onRemove: () => setConfirmAction({ type: "remove", item }),
            onStop: () => setConfirmAction({ type: "stop", item }),
            onRequeue: () => {
            },
            onStart: () => {
            },
            onSetCustomStatus: (status) => updateRequestStatusMutation.mutate({ id: item.id, status }),
            timeFormat,
            isUpdatingStatus: updateRequestStatusMutation.isPending && updateRequestStatusMutation.variables?.id === item.id,
            hasPermission,
            canModify,
            printerState: item.printer_id ? printerStateMap[item.printer_id] : null,
            t
          },
          item.id
        )) })
      ] }),
      pendingItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base sm:text-lg font-semibold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" }),
            t("queue.sections.queued"),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-normal text-bambu-gray", children: [
              "(",
              t("queue.itemCount", { count: pendingItems.length }),
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-xs text-bambu-gray ml-2", title: t("queue.reorderHint"), children: t("queue.dragToReorder") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "px-2 sm:px-3 py-1.5 text-xs sm:text-sm bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                value: pendingSortBy,
                onChange: (e) => setPendingSortBy(e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "position", children: t("queue.sort.byPosition") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: t("queue.sort.byName") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "printer", children: t("queue.sort.byPrinter") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "time", children: t("queue.sort.bySchedule") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setPendingSortAsc(!pendingSortAsc),
                title: pendingSortAsc ? t("common.ascending") : t("common.descending"),
                className: "px-2",
                children: pendingSortAsc ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 p-2 sm:p-3 bg-bambu-dark rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleSelectAll,
              className: "flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm",
              children: [
                selectedItems.length === selectablePendingItems.length && selectablePendingItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-bambu-green" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4" }),
                selectedItems.length === selectablePendingItems.length && selectablePendingItems.length > 0 ? t("queue.bulkEdit.deselectAll") : t("queue.bulkEdit.selectAll")
              ]
            }
          ),
          selectedItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm text-bambu-gray", children: t("queue.bulkEdit.selected", { count: selectedItems.length }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block h-4 w-px bg-bambu-dark-tertiary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setShowBulkEditModal(true),
                className: "flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-bambu-green hover:text-bambu-green-light",
                disabled: !hasAnyPermission("queue:update_own", "queue:update_all"),
                title: !hasAnyPermission("queue:update_own", "queue:update_all") ? t("queue.permissions.noEditItems") : t("queue.bulkEdit.editSelected"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("queue.bulkEdit.editSelected") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => bulkCancelMutation.mutate(selectedItems),
                className: "flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-red-400 hover:text-red-300",
                disabled: bulkCancelMutation.isPending || !hasAnyPermission("queue:delete_own", "queue:delete_all"),
                title: !hasAnyPermission("queue:delete_own", "queue:delete_all") ? t("queue.permissions.noCancelItems") : t("queue.bulkEdit.cancelSelected"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("queue.bulkEdit.cancelSelected") })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DndContext,
          {
            sensors,
            collisionDetection: closestCenter,
            onDragEnd: handleDragEnd,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SortableContext,
              {
                items: pendingItems.map((i) => i.id),
                strategy: verticalListSortingStrategy,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 sm:space-y-3", children: pendingItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SortableQueueItem,
                  {
                    item,
                    position: index + 1,
                    onEdit: () => item.custom_request ? setEditingRequestItem(item) : setEditItem(item),
                    onCancel: () => setConfirmAction({ type: "cancel", item }),
                    onRemove: () => setConfirmAction({ type: "remove", item }),
                    onStop: () => {
                    },
                    onRequeue: () => {
                    },
                    onStart: () => startMutation.mutate(item.id),
                    onSetCustomStatus: (status) => updateRequestStatusMutation.mutate({ id: item.id, status }),
                    timeFormat,
                    isSelected: selectedItems.includes(item.id),
                    isUpdatingStatus: updateRequestStatusMutation.isPending && updateRequestStatusMutation.variables?.id === item.id,
                    onToggleSelect: () => handleToggleSelect(item.id),
                    hasPermission,
                    canModify,
                    t
                  },
                  item.id
                )) })
              }
            )
          }
        )
      ] }),
      historyItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base sm:text-lg font-semibold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 sm:w-5 sm:h-5 text-bambu-gray" }),
            t("queue.sections.history"),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm font-normal text-bambu-gray", children: [
              "(",
              t("queue.itemCount", { count: historyItems.length }),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "px-2 sm:px-3 py-1.5 text-xs sm:text-sm bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                value: historySortBy,
                onChange: (e) => setHistorySortBy(e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date", children: t("queue.sort.byDate") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: t("queue.sort.byName") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "printer", children: t("queue.sort.byPrinter") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setHistorySortAsc(!historySortAsc),
                title: historySortAsc ? t("queue.sort.ascendingOldest") : t("queue.sort.descendingNewest"),
                className: "px-2",
                children: historySortAsc ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 sm:space-y-3", children: historyItems.slice(0, 20).map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SortableQueueItem,
          {
            item,
            position: index + 1,
            onEdit: () => item.custom_request ? setEditingRequestItem(item) : void 0,
            onCancel: () => {
            },
            onRemove: () => setConfirmAction({ type: "remove", item }),
            onStop: () => {
            },
            onRequeue: () => setRequeueItem(item),
            onStart: () => {
            },
            onSetCustomStatus: (status) => updateRequestStatusMutation.mutate({ id: item.id, status }),
            timeFormat,
            isUpdatingStatus: updateRequestStatusMutation.isPending && updateRequestStatusMutation.variables?.id === item.id,
            hasPermission,
            canModify,
            t
          },
          item.id
        )) })
      ] })
    ] }),
    (showRequestModal || editingRequestItem) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QueueRequestModal,
      {
        item: editingRequestItem,
        onClose: () => {
          setShowRequestModal(false);
          setEditingRequestItem(null);
        },
        onSubmit: (data) => {
          if (editingRequestItem) {
            updateRequestMutation.mutate({ id: editingRequestItem.id, data });
          } else {
            createRequestMutation.mutate(data);
          }
        },
        isSaving: createRequestMutation.isPending || updateRequestMutation.isPending,
        t
      }
    ),
    showContactUnlockModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("queue.request.unlockTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              if (!unlockContactsMutation.isPending) {
                setShowContactUnlockModal(false);
                setContactPasswordInput("");
              }
            },
            className: "p-1 hover:bg-bambu-dark rounded",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("queue.request.unlockDescription") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.unlockPassword") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              value: contactPasswordInput,
              onChange: (e) => setContactPasswordInput(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter" && contactPasswordInput.trim()) {
                  unlockContactsMutation.mutate(contactPasswordInput.trim());
                }
              },
              className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 p-4 border-t border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            onClick: () => {
              setShowContactUnlockModal(false);
              setContactPasswordInput("");
            },
            disabled: unlockContactsMutation.isPending,
            children: t("common.cancel")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => unlockContactsMutation.mutate(contactPasswordInput.trim()),
            disabled: unlockContactsMutation.isPending || !contactPasswordInput.trim(),
            children: unlockContactsMutation.isPending ? t("common.saving") : t("queue.request.unlockSubmit")
          }
        )
      ] })
    ] }) }),
    editItem && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PrintModal,
      {
        mode: "edit-queue-item",
        archiveId: editItem.archive_id ?? void 0,
        libraryFileId: editItem.library_file_id ?? void 0,
        archiveName: editItem.archive_name || editItem.library_file_name || `File #${editItem.archive_id || editItem.library_file_id}`,
        queueItem: editItem,
        onClose: () => setEditItem(null)
      }
    ),
    requeueItem && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PrintModal,
      {
        mode: "add-to-queue",
        archiveId: requeueItem.archive_id ?? void 0,
        libraryFileId: requeueItem.library_file_id ?? void 0,
        archiveName: requeueItem.archive_name || requeueItem.library_file_name || `File #${requeueItem.archive_id || requeueItem.library_file_id}`,
        onClose: () => setRequeueItem(null)
      }
    ),
    confirmAction && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: confirmAction.type === "cancel" ? t("queue.confirm.cancelTitle") : confirmAction.type === "stop" ? t("queue.confirm.stopTitle") : t("queue.confirm.removeTitle"),
        message: confirmAction.type === "cancel" ? t("queue.confirm.cancelMessage", { name: getQueueItemDisplayName(confirmAction.item, t("queue.request.defaultTitle")) || t("queue.confirm.thisPrint") }) : confirmAction.type === "stop" ? t("queue.confirm.stopMessage", { name: getQueueItemDisplayName(confirmAction.item, t("queue.request.defaultTitle")) || t("queue.confirm.thisPrint") }) : t("queue.confirm.removeMessage", { name: getQueueItemDisplayName(confirmAction.item, t("queue.request.defaultTitle")) || t("queue.confirm.thisItem") }),
        confirmText: confirmAction.type === "cancel" ? t("queue.confirm.cancelButton") : confirmAction.type === "stop" ? t("queue.confirm.stopButton") : t("common.remove"),
        variant: "danger",
        onConfirm: () => {
          if (confirmAction.type === "cancel") {
            cancelMutation.mutate(confirmAction.item.id);
          } else if (confirmAction.type === "stop") {
            stopMutation.mutate(confirmAction.item.id);
          } else {
            removeMutation.mutate(confirmAction.item.id);
          }
          setConfirmAction(null);
        },
        onCancel: () => setConfirmAction(null)
      }
    ),
    showClearHistoryConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("queue.confirm.clearHistoryTitle"),
        message: t("queue.confirm.clearHistoryMessage", { count: historyItems.length }),
        confirmText: t("queue.clearHistory"),
        variant: "danger",
        onConfirm: () => {
          clearHistoryMutation.mutate();
          setShowClearHistoryConfirm(false);
        },
        onCancel: () => setShowClearHistoryConfirm(false)
      }
    ),
    showBulkEditModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      BulkEditModal,
      {
        selectedCount: selectedItems.length,
        printers: printers?.map((p) => ({ id: p.id, name: p.name })) || [],
        onSave: (data) => {
          if (Object.keys(data).length > 0) {
            bulkUpdateMutation.mutate({ item_ids: selectedItems, ...data });
          }
        },
        onClose: () => setShowBulkEditModal(false),
        isSaving: bulkUpdateMutation.isPending,
        canControlPrinter: hasPermission("printers:control"),
        t
      }
    )
  ] });
}
export {
  QueuePage
};
