import { c as createLucideIcon, u as useTranslation, b as useQueryClient, a as useToast, r as reactExports, e as useMutation, f as api, j as jsxRuntimeExports, y as Card, z as CardContent, X, B as Button, L as LoaderCircle, Q as CircleCheckBig, l as CircleAlert, d as useQuery, M as Link, a1 as Camera, t as ChevronRight, _ as CircleX, p as parseUTCDate, C as ChevronLeft, h as ConfirmModal, i as FileText, U as User, E as ExternalLink, o as Calendar, I as Image, a2 as formatMediaTime, a3 as Music, T as TriangleAlert, a4 as pendingUploadsApi, a5 as CardHeader, a6 as Archive, g as formatFileSize, a7 as ChevronUp, A as ChevronDown, k as useAuth, a8 as Star, a9 as formatDateTime, D as formatDuration, J as Printer, aa as Globe, O as Layers, q as Link$1, Z as Zap, x as formatDateOnly } from "./index-By7NB6Yd.js";
import { u as useIsMobile, M as ModelViewerModal, o as openInSlicer } from "./ModelViewerModal-C7KkhF9N.js";
import { g as getCurrencySymbol } from "./currency-xmcJ_vO3.js";
import { P as PrintModal } from "./index-B3Y3YfVS.js";
import { U as Upload } from "./upload-vqTQNziJ.js";
import { F as File, a as FileBox } from "./GcodeViewer-CKJccwqx.js";
import { F as FolderKanban } from "./folder-kanban-WZ7BtMOf.js";
import { T as Tag } from "./tag-BlOT3eVc.js";
import { T as Trash2 } from "./trash-2-ClCdzOpT.js";
import { P as Plus } from "./plus-DFJfJrzz.js";
import { S as Save } from "./save-DNvYnpaM.js";
import { D as Download } from "./download-BIvootwA.js";
import { R as RichTextEditor, p as purify } from "./RichTextEditor-K0K_aKLx.js";
import { P as PenLine } from "./pen-line-C3AG3W8F.js";
import { F as Film, S as ScanSearch } from "./scan-search-D6W9quII.js";
import { P as Play } from "./play-Cg_XO2GL.js";
import { P as Pause } from "./pause-A8-2-76u.js";
import { G as Gauge } from "./gauge-DI20NGM5.js";
import { P as Pencil } from "./pencil-C-P5BunJ.js";
import { S as SkipForward } from "./skip-forward-D8nV-10w.js";
import { C as Check } from "./check-B2KZNztd.js";
import { C as Clock } from "./clock-Ct4GjfBN.js";
import { S as Search } from "./search-RLowFFFz.js";
import { F as FileSpreadsheet } from "./file-spreadsheet-CRirn5qv.js";
import { G as GitCompare, S as StickyNote } from "./sticky-note-8wYMrHFC.js";
import { S as SquareCheckBig } from "./square-check-big-Bfmxku0O.js";
import { L as LayoutGrid } from "./layout-grid-BRwQRxmB.js";
import { L as List } from "./list-DvQRef4l.js";
import { F as Funnel } from "./funnel-CFDzz5mk.js";
import { P as Package } from "./package-C_EJMjbO.js";
import { C as Copy } from "./copy-C7D2ACX3.js";
import { S as Settings } from "./settings-DKzQs5ej.js";
import { A as ArrowUpDown } from "./arrow-up-down-CyB77Kkb.js";
import { F as FolderOpen } from "./folder-open-DFzFHQYK.js";
import { B as Box } from "./box-DMwc6M-V.js";
import { S as Square } from "./square-DTe5xTuV.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-qlbyUepS.js";
import "./minimize-2-CNI_eOWW.js";
import "./maximize-2-BQEEmz5s.js";
import "./colors-lMyZBYSI.js";
import "./amsHelpers-DxzYuS95.js";
import "./refresh-cw-DSbBo49o.js";
import "./rotate-ccw-DINMEq3g.js";
import "./palette-DbvAKoIq.js";
import "./wand-sparkles-BvxI5tcI.js";
import "./zoom-out-C4fHhYfX.js";
import "./index-DZBj6hbJ.js";
import "./with-selector-B1rnstS8.js";
import "./list-ordered-B9A7kg-Z.js";
import "./unlink-pfEIdfQ3.js";
const __iconNode$a = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$a);
const __iconNode$9 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode$9);
const __iconNode$8 = [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
];
const Coins = createLucideIcon("coins", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }],
  ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }]
];
const FileCode = createLucideIcon("file-code", __iconNode$7);
const __iconNode$6 = [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
];
const GitBranch = createLucideIcon("git-branch", __iconNode$6);
const __iconNode$5 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode$5);
const __iconNode$4 = [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
];
const QrCode = createLucideIcon("qr-code", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
];
const Scissors = createLucideIcon("scissors", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
      key: "15892j"
    }
  ],
  ["path", { d: "M3 20V4", key: "1ptbpl" }]
];
const SkipBack = createLucideIcon("skip-back", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
];
const Volume2 = createLucideIcon("volume-2", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
];
const VolumeX = createLucideIcon("volume-x", __iconNode);
function UploadModal({ onClose, initialFiles }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const fileInputRef = reactExports.useRef(null);
  const [files, setFiles] = reactExports.useState(
    () => initialFiles?.filter((f) => f.name.endsWith(".3mf")).map((file) => ({ file, status: "pending" })) || []
  );
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [uploadResult, setUploadResult] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const uploadMutation = useMutation({
    mutationFn: (filesToUpload) => api.uploadArchivesBulk(filesToUpload),
    onSuccess: (result) => {
      setUploadResult(result);
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      queryClient.invalidateQueries({ queryKey: ["archiveStats"] });
      setFiles(
        (prev) => prev.map((f) => {
          const success = result.results.find((r) => r.filename === f.file.name);
          const error = result.errors.find((e) => e.filename === f.file.name);
          if (success) {
            return { ...f, status: "success", archiveId: success.id };
          }
          if (error) {
            return { ...f, status: "error", error: error.error };
          }
          return f;
        })
      );
      if (result.failed === 0) {
        showToast(`${result.uploaded} file${result.uploaded !== 1 ? "s" : ""} uploaded`);
      } else if (result.uploaded === 0) {
        showToast(`Failed to upload ${result.failed} file${result.failed !== 1 ? "s" : ""}`, "error");
      } else {
        showToast(`${result.uploaded} uploaded, ${result.failed} failed`, "warning");
      }
    },
    onError: () => {
      setFiles(
        (prev) => prev.map((f) => ({ ...f, status: "error", error: "Upload failed" }))
      );
      showToast("Upload failed", "error");
    }
  });
  const handleDragOver = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const handleDragLeave = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  const handleDrop = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (f) => f.name.endsWith(".3mf")
    );
    if (droppedFiles.length > 0) {
      setFiles((prev) => [
        ...prev,
        ...droppedFiles.map((file) => ({ file, status: "pending" }))
      ]);
    }
  }, []);
  const handleFileSelect = reactExports.useCallback((e) => {
    const selectedFiles = Array.from(e.target.files || []).filter(
      (f) => f.name.endsWith(".3mf")
    );
    if (selectedFiles.length > 0) {
      setFiles((prev) => [
        ...prev,
        ...selectedFiles.map((file) => ({ file, status: "pending" }))
      ]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);
  const removeFile = reactExports.useCallback((index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);
  const handleUpload = () => {
    if (files.length === 0) return;
    const pendingFiles = files.filter((f) => f.status === "pending");
    if (pendingFiles.length === 0) return;
    setFiles(
      (prev) => prev.map(
        (f) => f.status === "pending" ? { ...f, status: "uploading" } : f
      )
    );
    uploadMutation.mutate(pendingFiles.map((f) => f.file));
  };
  const pendingCount = files.filter((f) => f.status === "pending").length;
  const isUploading = uploadMutation.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-2xl max-h-[90vh] flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: t("uploadModal.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "text-bambu-gray hover:text-white transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary hover:border-bambu-gray"}`,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-12 h-12 mx-auto mb-4 text-bambu-gray" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white mb-2", children: t("uploadModal.dragDrop") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-sm mb-4", children: t("uploadModal.or") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "secondary",
              onClick: () => fileInputRef.current?.click(),
              disabled: isUploading,
              children: t("uploadModal.browseFiles")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: ".3mf",
              multiple: true,
              className: "hidden",
              onChange: handleFileSelect
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("uploadModal.extractionInfo") }) }),
    files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 max-h-60 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: files.map((f, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-3 p-3 bg-bambu-dark rounded-lg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(File, { className: "w-5 h-5 text-bambu-gray flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-white text-sm truncate", children: f.file.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray", children: [
            (f.file.size / (1024 * 1024)).toFixed(1),
            " MB"
          ] }),
          f.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeFile(index),
              className: "text-bambu-gray hover:text-red-400 transition-colors",
              disabled: isUploading,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          ),
          f.status === "uploading" && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 text-bambu-green animate-spin" }),
          f.status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-bambu-green" }),
          f.status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-400", children: f.error }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-red-400" })
          ] })
        ]
      },
      `${f.file.name}-${index}`
    )) }) }),
    uploadResult && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-bambu-dark rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-green", children: uploadResult.uploaded }),
      " ",
      t("uploadModal.uploaded"),
      uploadResult.failed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: uploadResult.failed }),
        " ",
        t("uploadModal.failed")
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-4 border-t border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, className: "flex-1", children: uploadResult ? t("common.close") : t("common.cancel") }),
      !uploadResult && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleUpload,
          disabled: pendingCount === 0 || isUploading,
          className: "flex-1",
          children: isUploading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
            t("uploadModal.uploading")
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
            t("uploadModal.upload"),
            " ",
            pendingCount > 0 && `(${pendingCount})`
          ] })
        }
      )
    ] })
  ] }) }) });
}
const FAILURE_REASON_KEYS = [
  "adhesionFailure",
  "spaghettiDetached",
  "layerShift",
  "cloggedNozzle",
  "filamentRunout",
  "warping",
  "stringing",
  "underExtrusion",
  "powerFailure",
  "userCancelled",
  "other"
];
const ARCHIVE_STATUS_KEYS = ["completed", "failed", "aborted", "printing"];
function EditArchiveModal({ archive, onClose, existingTags = [] }) {
  const { t } = useTranslation();
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const queryClient = useQueryClient();
  const [printName, setPrintName] = reactExports.useState(archive.print_name || "");
  const [printerId, setPrinterId] = reactExports.useState(archive.printer_id);
  const [projectId, setProjectId] = reactExports.useState(archive.project_id ?? null);
  const [notes, setNotes] = reactExports.useState(archive.notes || "");
  const [tags, setTags] = reactExports.useState(archive.tags || "");
  const [failureReason, setFailureReason] = reactExports.useState(archive.failure_reason || "");
  const [status, setStatus] = reactExports.useState(archive.status);
  const [quantity, setQuantity] = reactExports.useState(archive.quantity ?? 1);
  const [photos, setPhotos] = reactExports.useState(archive.photos || []);
  const [externalUrl, setExternalUrl] = reactExports.useState(archive.external_url || "");
  const [uploadingPhoto, setUploadingPhoto] = reactExports.useState(false);
  const [showTagSuggestions, setShowTagSuggestions] = reactExports.useState(false);
  const tagInputRef = reactExports.useRef(null);
  const photoInputRef = reactExports.useRef(null);
  const blurTimeoutRef = reactExports.useRef(null);
  const { data: printers } = useQuery({
    queryKey: ["printers"],
    queryFn: api.getPrinters
  });
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => api.getProjects()
  });
  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: api.getTags,
    enabled: existingTags.length === 0
  });
  const allTags = existingTags.length > 0 ? existingTags : tagsData?.map((t2) => t2.name) || [];
  const currentTags = tags.split(",").map((t2) => t2.trim()).filter(Boolean);
  const currentInput = tags.includes(",") ? tags.substring(tags.lastIndexOf(",") + 1).trim().toLowerCase() : tags.trim().toLowerCase();
  const tagSuggestions = allTags.filter(
    (t2) => !currentTags.includes(t2) && (currentInput === "" || t2.toLowerCase().includes(currentInput))
  );
  const addTag = (tag) => {
    let baseTags;
    if (currentInput && !allTags.includes(currentInput)) {
      baseTags = tags.includes(",") ? tags.substring(0, tags.lastIndexOf(",")).split(",").map((t2) => t2.trim()).filter(Boolean) : [];
    } else {
      baseTags = currentTags;
    }
    if (!baseTags.includes(tag)) {
      const newTags = [...baseTags, tag].join(", ");
      setTags(newTags);
    }
    if (blurTimeoutRef.current !== null) {
      clearTimeout(blurTimeoutRef.current);
    }
    tagInputRef.current?.focus();
  };
  const removeTag = (tagToRemove) => {
    const newTags = currentTags.filter((t2) => t2 !== tagToRemove).join(", ");
    setTags(newTags);
  };
  const updateMutation = useMutation({
    mutationFn: (data) => api.updateArchive(archive.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      onClose();
    }
  });
  const handlePhotoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingPhoto(true);
    try {
      const result = await api.uploadArchivePhoto(archive.id, file);
      setPhotos(result.photos);
      queryClient.invalidateQueries({ queryKey: ["archives"] });
    } catch (error) {
      console.error("Failed to upload photo:", error);
    } finally {
      setUploadingPhoto(false);
      if (photoInputRef.current) {
        photoInputRef.current.value = "";
      }
    }
  };
  const handlePhotoDelete = async (filename) => {
    try {
      const result = await api.deleteArchivePhoto(archive.id, filename);
      setPhotos(result.photos || []);
      queryClient.invalidateQueries({ queryKey: ["archives"] });
    } catch (error) {
      console.error("Failed to delete photo:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      print_name: printName || void 0,
      printer_id: printerId,
      project_id: projectId,
      notes: notes || void 0,
      tags: tags || void 0,
      quantity,
      external_url: externalUrl || null
    };
    if (status !== archive.status) {
      updateData.status = status;
    }
    if (status === "failed" || status === "aborted") {
      updateData.failure_reason = failureReason || void 0;
    } else if (archive.status === "failed" || archive.status === "aborted") {
      updateData.failure_reason = null;
    }
    updateMutation.mutate(updateData);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-md max-h-[90vh] flex flex-col",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-bambu-dark-tertiary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("editArchive.title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "text-bambu-gray hover:text-white transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-4 overflow-y-auto flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("editArchive.name") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: printName,
                    onChange: (e) => setPrintName(e.target.value),
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    placeholder: t("editArchive.namePlaceholder")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("editArchive.printer") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: printerId ?? "",
                    onChange: (e) => setPrinterId(e.target.value ? Number(e.target.value) : null),
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("editArchive.noPrinter") }),
                      printers?.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm text-bambu-gray mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-4 h-4 inline mr-1" }),
                  t("editArchive.project")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: projectId ?? "",
                    onChange: (e) => setProjectId(e.target.value ? Number(e.target.value) : null),
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("editArchive.noProject") }),
                      projects?.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm text-bambu-gray mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "w-4 h-4 inline mr-1" }),
                  t("editArchive.itemsPrinted")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    min: 1,
                    value: quantity,
                    onChange: (e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1)),
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    placeholder: "1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("editArchive.itemsPrintedHelp") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("editArchive.notes") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    value: notes,
                    onChange: (e) => setNotes(e.target.value),
                    rows: 3,
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none resize-none",
                    placeholder: t("editArchive.notesPlaceholder")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm text-bambu-gray mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-4 h-4 inline mr-1" }),
                  t("editArchive.externalLink")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "url",
                    value: externalUrl,
                    onChange: (e) => setExternalUrl(e.target.value),
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    placeholder: "https://printables.com/model/..."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("editArchive.externalLinkHelp") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("editArchive.tags") }),
                currentTags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-2", children: currentTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 bg-bambu-dark-tertiary rounded text-sm text-white",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" }),
                      tag,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => removeTag(tag),
                          className: "ml-0.5 text-bambu-gray hover:text-white",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                        }
                      )
                    ]
                  },
                  tag
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      ref: tagInputRef,
                      type: "text",
                      value: tags,
                      onChange: (e) => setTags(e.target.value),
                      onFocus: () => {
                        if (blurTimeoutRef.current !== null) {
                          clearTimeout(blurTimeoutRef.current);
                        }
                        setShowTagSuggestions(true);
                      },
                      onBlur: () => {
                        blurTimeoutRef.current = window.setTimeout(() => setShowTagSuggestions(false), 200);
                      },
                      className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                      placeholder: currentTags.length > 0 ? t("editArchive.addMoreTags") : t("editArchive.tagsPlaceholder")
                    }
                  ),
                  showTagSuggestions && tagSuggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-0 right-0 mt-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 text-xs text-bambu-gray border-b border-bambu-dark-tertiary", children: [
                      currentInput ? t("editArchive.matchingTags", { query: currentInput }) : t("editArchive.existingTags"),
                      " ",
                      t("editArchive.clickToAdd")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 flex flex-wrap gap-1.5", children: tagSuggestions.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => addTag(tag),
                        className: "px-2 py-0.5 bg-bambu-dark-tertiary hover:bg-bambu-green/20 rounded text-sm text-bambu-gray hover:text-white transition-colors",
                        children: tag
                      },
                      tag
                    )) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("editArchive.status") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    value: status,
                    onChange: (e) => {
                      setStatus(e.target.value);
                      if (e.target.value === "completed") {
                        setFailureReason("");
                      }
                    },
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    children: ARCHIVE_STATUS_KEYS.map((statusKey) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: statusKey, children: t(`editArchive.statuses.${statusKey}`) }, statusKey))
                  }
                )
              ] }),
              (status === "failed" || status === "aborted") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("editArchive.failureReason") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: failureReason,
                    onChange: (e) => setFailureReason(e.target.value),
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("editArchive.selectReason") }),
                      FAILURE_REASON_KEYS.map((reasonKey) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t(`editArchive.failureReasons.${reasonKey}`), children: t(`editArchive.failureReasons.${reasonKey}`) }, reasonKey))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm text-bambu-gray mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4 inline mr-1" }),
                  t("editArchive.photos")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-2", children: [
                  photos.map((filename) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: api.getArchivePhotoUrl(archive.id, filename),
                        alt: t("editArchive.printResult"),
                        className: "w-20 h-20 object-cover rounded-lg border border-bambu-dark-tertiary"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => handlePhotoDelete(filename),
                        className: "absolute -top-1 -right-1 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 text-white" })
                      }
                    )
                  ] }, filename)),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-20 h-20 flex items-center justify-center border-2 border-dashed border-bambu-dark-tertiary rounded-lg cursor-pointer hover:border-bambu-green transition-colors", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        ref: photoInputRef,
                        type: "file",
                        accept: "image/jpeg,image/png,image/webp",
                        onChange: handlePhotoUpload,
                        className: "hidden",
                        disabled: uploadingPhoto
                      }
                    ),
                    uploadingPhoto ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 text-bambu-gray animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-6 h-6 text-bambu-gray" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("editArchive.photosHelp") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "secondary",
                    onClick: onClose,
                    className: "flex-1",
                    children: t("common.cancel")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "submit",
                    disabled: updateMutation.isPending,
                    className: "flex-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                      updateMutation.isPending ? t("common.saving") : t("common.save")
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function ContextMenu({ x, y, items, onClose }) {
  const menuRef = reactExports.useRef(null);
  const [activeSubmenu, setActiveSubmenu] = reactExports.useState(null);
  const submenuTimeoutRef = reactExports.useRef(null);
  const [position, setPosition] = reactExports.useState({ x, y, visible: false });
  const [openSubmenuLeft, setOpenSubmenuLeft] = reactExports.useState(false);
  const [submenuPositions, setSubmenuPositions] = reactExports.useState({});
  reactExports.useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    const handleScroll = () => {
      onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("scroll", handleScroll, true);
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current);
      }
    };
  }, [onClose]);
  reactExports.useLayoutEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.visibility = "hidden";
      menuRef.current.style.display = "block";
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const padding = 8;
      let adjustedX = x;
      let adjustedY = y;
      if (x + rect.width > viewportWidth - padding) {
        adjustedX = Math.max(padding, viewportWidth - rect.width - padding);
      }
      if (adjustedX < padding) {
        adjustedX = padding;
      }
      if (y + rect.height > viewportHeight - padding) {
        adjustedY = Math.max(padding, viewportHeight - rect.height - padding);
      }
      if (adjustedY < padding) {
        adjustedY = padding;
      }
      const submenuWidth = 180;
      const spaceOnRight = viewportWidth - adjustedX - rect.width;
      const spaceOnLeft = adjustedX;
      setOpenSubmenuLeft(spaceOnRight < submenuWidth && spaceOnLeft > submenuWidth);
      setPosition({ x: adjustedX, y: adjustedY, visible: true });
    }
  }, [x, y]);
  const handleMouseEnterSubmenu = (index, element) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const submenuMaxHeight = 300;
    const padding = 8;
    const spaceBelow = viewportHeight - rect.top - padding;
    const shouldOpenUpward = spaceBelow < submenuMaxHeight && rect.top > submenuMaxHeight;
    setSubmenuPositions((prev) => ({ ...prev, [index]: shouldOpenUpward ? "bottom" : "top" }));
    setActiveSubmenu(index);
  };
  const handleMouseLeaveSubmenu = () => {
    submenuTimeoutRef.current = window.setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: menuRef,
      className: "fixed z-50 min-w-[180px] max-w-[280px] bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl py-1",
      style: {
        left: position.x,
        top: position.y,
        visibility: position.visible ? "visible" : "hidden"
      },
      children: items.map((item, index) => {
        if (item.divider) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-1 border-t border-bambu-dark-tertiary" }, index);
        }
        const hasSubmenu = item.submenu && item.submenu.length > 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: (e) => hasSubmenu && handleMouseEnterSubmenu(index, e.currentTarget),
            onMouseLeave: () => hasSubmenu && handleMouseLeaveSubmenu(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onMouseEnter: (e) => hasSubmenu && handleMouseEnterSubmenu(index, e.currentTarget.parentElement),
                  onClick: () => {
                    if (hasSubmenu) {
                      setActiveSubmenu(activeSubmenu === index ? null : index);
                    } else if (!item.disabled) {
                      item.onClick();
                      onClose();
                    }
                  },
                  disabled: item.disabled,
                  title: item.title,
                  className: `w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors ${item.disabled ? "text-bambu-gray cursor-not-allowed" : item.danger ? "text-red-400 hover:bg-red-400/10" : "text-white hover:bg-bambu-dark-tertiary"} ${hasSubmenu && activeSubmenu === index ? "bg-bambu-dark-tertiary" : ""}`,
                  children: [
                    item.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 flex-shrink-0 flex items-center justify-center", children: item.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: item.label }),
                    hasSubmenu && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-bambu-gray" })
                  ]
                }
              ),
              hasSubmenu && activeSubmenu === index && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute min-w-[160px] bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl py-1 overflow-hidden max-h-[300px] overflow-y-auto z-[60] ${openSubmenuLeft ? "right-full mr-1" : "left-full ml-1"} ${submenuPositions[index] === "bottom" ? "bottom-0" : "top-0"}`,
                  onMouseEnter: () => {
                    if (submenuTimeoutRef.current) {
                      clearTimeout(submenuTimeoutRef.current);
                      submenuTimeoutRef.current = null;
                    }
                  },
                  onMouseLeave: () => handleMouseLeaveSubmenu(),
                  children: item.submenu.map((subItem, subIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => {
                        if (!subItem.disabled) {
                          subItem.onClick();
                          onClose();
                        }
                      },
                      disabled: subItem.disabled,
                      className: `w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors ${subItem.disabled ? "text-bambu-gray cursor-not-allowed" : subItem.danger ? "text-red-400 hover:bg-red-400/10" : "text-white hover:bg-bambu-dark-tertiary"}`,
                      children: [
                        subItem.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 flex-shrink-0 flex items-center justify-center", children: subItem.icon }),
                        subItem.label
                      ]
                    },
                    subIndex
                  ))
                }
              )
            ]
          },
          index
        );
      })
    }
  );
}
function BatchTagModal({ selectedIds, existingTags, onClose }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [newTag, setNewTag] = reactExports.useState("");
  const [selectedTags, setSelectedTags] = reactExports.useState(/* @__PURE__ */ new Set());
  const [mode, setMode] = reactExports.useState("add");
  reactExports.useEffect(() => {
    const handleKeyDown2 = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown2);
    return () => window.removeEventListener("keydown", handleKeyDown2);
  }, [onClose]);
  const batchTagMutation = useMutation({
    mutationFn: async () => {
      const tagsArray = Array.from(selectedTags);
      let successCount = 0;
      for (const id of selectedIds) {
        try {
          const archive = await api.getArchive(id);
          const currentTags = archive.tags ? archive.tags.split(",").map((t2) => t2.trim()).filter(Boolean) : [];
          let newTags;
          if (mode === "add") {
            newTags = [.../* @__PURE__ */ new Set([...currentTags, ...tagsArray])];
          } else {
            newTags = currentTags.filter((t2) => !selectedTags.has(t2));
          }
          await api.updateArchive(id, { tags: newTags.join(", ") });
          successCount++;
        } catch (err) {
          console.error(`Failed to update archive ${id}:`, err);
          throw new Error(
            `${t("batchTag.updateFailed")} (#${id}): ${err instanceof Error ? err.message : t("common.unknownError")}`
          );
        }
      }
      return { count: successCount, mode, tags: tagsArray };
    },
    onSuccess: ({ count, mode: mode2, tags }) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(
        mode2 === "add" ? t("batchTag.addSuccess", { count, tags: tags.length }) : t("batchTag.removeSuccess", { count, tags: tags.length })
      );
      onClose();
    },
    onError: (error) => {
      showToast(error.message || t("batchTag.updateFailed"), "error");
    }
  });
  const toggleTag = (tag) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };
  const addNewTag = () => {
    if (newTag.trim() && !selectedTags.has(newTag.trim())) {
      setSelectedTags((prev) => /* @__PURE__ */ new Set([...prev, newTag.trim()]));
      setNewTag("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewTag();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-5 h-5 text-bambu-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: mode === "add" ? t("batchTag.titleAdd") : t("batchTag.titleRemove") })
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: mode === "add" ? t("batchTag.descriptionAdd", { count: selectedIds.length }) : t("batchTag.descriptionRemove", { count: selectedIds.length }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: mode === "add" ? "primary" : "secondary",
            onClick: () => setMode("add"),
            children: t("batchTag.addTags")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: mode === "remove" ? "primary" : "secondary",
            onClick: () => setMode("remove"),
            children: t("batchTag.removeTags")
          }
        )
      ] }),
      mode === "add" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: t("batchTag.placeholders.newTag"),
            className: "flex-1 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
            value: newTag,
            onChange: (e) => setNewTag(e.target.value),
            onKeyDown: handleKeyDown
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: addNewTag, disabled: !newTag.trim(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }) })
      ] }),
      existingTags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-2", children: t("batchTag.existingTags") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: existingTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => toggleTag(tag),
            className: `px-2 py-1 rounded text-sm transition-colors ${selectedTags.has(tag) ? "bg-bambu-green text-white" : "bg-bambu-dark-tertiary text-bambu-gray-light hover:bg-bambu-dark"}`,
            children: tag
          },
          tag
        )) })
      ] }),
      selectedTags.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-2", children: mode === "add" ? t("batchTag.tagsToAdd") : t("batchTag.tagsToRemove") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Array.from(selectedTags).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: `px-2 py-1 rounded text-sm flex items-center gap-1 ${mode === "add" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`,
            children: [
              tag,
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleTag(tag), className: "hover:opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }) })
            ]
          },
          tag
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-4 border-t border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, className: "flex-1", children: t("common.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => batchTagMutation.mutate(),
          disabled: selectedTags.size === 0 || batchTagMutation.isPending,
          className: "flex-1",
          children: batchTagMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
            t("batchTag.processing")
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4" }),
            mode === "add" ? t("batchTag.addTags") : t("batchTag.removeTags")
          ] })
        }
      )
    ] })
  ] }) }) });
}
function BatchProjectModal({ selectedIds, onClose }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => api.getProjects()
  });
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const invalidateProjectQueries = () => {
    queryClient.invalidateQueries({ queryKey: ["archives"] });
    queryClient.invalidateQueries({ queryKey: ["projects"] });
    queryClient.invalidateQueries({ queryKey: ["project"] });
    queryClient.invalidateQueries({ queryKey: ["project-archives"] });
  };
  const assignMutation = useMutation({
    mutationFn: async (projectId) => {
      await api.addArchivesToProject(projectId, selectedIds);
      return projectId;
    },
    onSuccess: (projectId) => {
      const project = projects?.find((p) => p.id === projectId);
      invalidateProjectQueries();
      showToast(t("batchProject.assignSuccess", { count: selectedIds.length, name: project?.name || "" }));
      onClose();
    },
    onError: () => {
      showToast(t("batchProject.assignFailed"), "error");
    }
  });
  const removeMutation = useMutation({
    mutationFn: async () => {
      for (const id of selectedIds) {
        await api.updateArchive(id, { project_id: null });
      }
      return selectedIds.length;
    },
    onSuccess: (count) => {
      invalidateProjectQueries();
      showToast(t("batchProject.removeSuccess", { count }));
      onClose();
    },
    onError: () => {
      showToast(t("batchProject.removeFailed"), "error");
    }
  });
  const isPending = assignMutation.isPending || removeMutation.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md max-h-[80vh] flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-5 h-5 text-bambu-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: t("batchProject.title") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "text-bambu-gray hover:text-white transition-colors",
          disabled: isPending,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 overflow-y-auto min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("batchProject.description", { count: selectedIds.length }) }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-gray" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => removeMutation.mutate(),
            disabled: isPending,
            className: "w-full flex items-center gap-3 p-3 rounded-lg bg-bambu-dark hover:bg-bambu-dark-tertiary border border-bambu-dark-tertiary transition-colors text-left disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-red-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("batchProject.removeFromProject") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray truncate", children: t("batchProject.clearProjectAssignment") })
              ] }),
              removeMutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin text-bambu-gray shrink-0" })
            ]
          }
        ),
        projects && projects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-bambu-dark-tertiary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: t("batchProject.orAssignTo") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-bambu-dark-tertiary" })
        ] }),
        projects?.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => assignMutation.mutate(project.id),
            disabled: isPending,
            className: "w-full flex items-center gap-3 p-3 rounded-lg bg-bambu-dark hover:bg-bambu-dark-tertiary border border-bambu-dark-tertiary transition-colors text-left disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  style: { backgroundColor: project.color ? `${project.color}20` : "rgb(var(--bambu-green) / 0.2)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FolderKanban,
                    {
                      className: "w-4 h-4",
                      style: { color: project.color || "rgb(var(--bambu-green))" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium truncate", children: project.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-bambu-gray truncate", children: [
                  t("batchProject.projectCount", { count: project.archive_count }),
                  project.status && ` • ${project.status}`
                ] })
              ] }),
              assignMutation.isPending && assignMutation.variables === project.id && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin text-bambu-gray shrink-0" })
            ]
          },
          project.id
        )),
        (!projects || projects.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-bambu-gray py-4", children: t("batchProject.noProjects") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 p-4 border-t border-bambu-dark-tertiary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, className: "flex-1", disabled: isPending, children: t("common.cancel") }) })
  ] }) }) });
}
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function CalendarView({ archives, onArchiveClick, highlightedArchiveId }) {
  const today = /* @__PURE__ */ new Date();
  const [currentMonth, setCurrentMonth] = reactExports.useState(today.getMonth());
  const [currentYear, setCurrentYear] = reactExports.useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = reactExports.useState(null);
  const [selectedArchiveId, setSelectedArchiveId] = reactExports.useState(null);
  const archivesByDate = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    archives.forEach((archive) => {
      const date = parseUTCDate(archive.completed_at || archive.created_at) || /* @__PURE__ */ new Date();
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      const existing = map.get(key) || [];
      existing.push(archive);
      map.set(key, existing);
    });
    return map;
  }, [archives]);
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const goToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  const selectedArchives = selectedDate ? archivesByDate.get(selectedDate) || [] : [];
  const handleDateSelect = (dateKey) => {
    if (dateKey !== selectedDate) {
      setSelectedArchiveId(null);
    }
    setSelectedDate(dateKey);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prevMonth,
            className: "p-2 hover:bg-bambu-dark-tertiary rounded-lg transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5 text-bambu-gray" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white", children: [
            MONTH_NAMES[currentMonth],
            " ",
            currentYear
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: goToToday,
              className: "px-2 py-1 text-xs bg-bambu-dark-tertiary hover:bg-bambu-green/20 text-bambu-gray hover:text-white rounded transition-colors",
              children: "Today"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextMonth,
            className: "p-2 hover:bg-bambu-dark-tertiary rounded-lg transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-bambu-gray" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 mb-1", children: DAY_NAMES.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs text-bambu-gray py-2", children: day }, day)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: calendarDays.map((day, index) => {
        if (day === null) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square" }, `empty-${index}`);
        }
        const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dayArchives = archivesByDate.get(dateKey) || [];
        const hasArchives = dayArchives.length > 0;
        const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
        const isSelected = dateKey === selectedDate;
        const successCount = dayArchives.filter((a) => a.status === "completed").length;
        const failedCount = dayArchives.filter((a) => a.status === "failed").length;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleDateSelect(isSelected ? null : dateKey),
            className: `aspect-square rounded-lg p-1 flex flex-col items-center justify-center transition-colors relative ${isSelected ? "bg-bambu-green text-white" : isToday ? "bg-bambu-green/20 text-white ring-2 ring-bambu-green" : hasArchives ? "bg-bambu-dark-tertiary hover:bg-bambu-dark-tertiary/70 text-white" : "hover:bg-bambu-dark-tertiary/50 text-bambu-gray"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium ${isToday && !isSelected ? "text-bambu-green" : ""}`, children: day }),
              hasArchives && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${failedCount > 0 && successCount === 0 ? "bg-red-400" : failedCount > 0 ? "bg-yellow-400" : "bg-green-400"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: dayArchives.length })
              ] })
            ]
          },
          day
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white", children: archives.filter((a) => {
            const d = parseUTCDate(a.completed_at || a.created_at) || /* @__PURE__ */ new Date();
            return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
          }).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray", children: "Prints this month" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-400", children: archives.filter((a) => {
            const d = parseUTCDate(a.completed_at || a.created_at) || /* @__PURE__ */ new Date();
            return d.getMonth() === currentMonth && d.getFullYear() === currentYear && a.status === "completed";
          }).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray", children: "Successful" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-red-400", children: archives.filter((a) => {
            const d = parseUTCDate(a.completed_at || a.created_at) || /* @__PURE__ */ new Date();
            return d.getMonth() === currentMonth && d.getFullYear() === currentYear && a.status === "failed";
          }).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray", children: "Failed" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-80 bg-bambu-dark rounded-xl p-4", children: selectedDate ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-bambu-gray mb-3", children: (/* @__PURE__ */ new Date(selectedDate + "T12:00:00")).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }) }),
      selectedArchives.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "calendar-scroll space-y-2 max-h-96 overflow-y-auto", children: selectedArchives.map((archive) => {
        const isHighlighted = archive.id === selectedArchiveId || archive.id === highlightedArchiveId;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setSelectedArchiveId(archive.id);
              onArchiveClick?.(archive);
            },
            className: `w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${!isHighlighted ? "hover:bg-bambu-dark-tertiary" : ""}`,
            style: isHighlighted ? { outline: "4px solid #facc15", outlineOffset: "2px" } : void 0,
            children: [
              archive.thumbnail_path || archive.filename.toLowerCase().endsWith(".3mf") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: api.getArchiveThumbnail(archive.id, archive.thumbnail_path),
                  alt: "",
                  className: "w-12 h-12 rounded object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded bg-bambu-dark-tertiary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: "3MF" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white truncate", children: archive.print_name || archive.filename }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: archive.status === "failed" ? "text-red-400" : "text-green-400", children: archive.status === "failed" ? "Failed" : "Completed" }),
                  archive.filament_color && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: archive.filament_color.split(",").map((color, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-3 h-3 rounded-full border border-black/20",
                      style: { backgroundColor: color }
                    },
                    i
                  )) })
                ] })
              ] })
            ]
          },
          archive.id
        );
      }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: "No prints on this day" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: "Select a day to see prints" }) }) })
  ] });
}
function QRCodeModal({ archiveId, archiveName, onClose }) {
  const { t } = useTranslation();
  const qrCodeUrl = api.getArchiveQRCodeUrl(archiveId, 300);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `${archiveName}_qrcode.png`;
    link.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-sm",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-bambu-dark-tertiary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("qrCodeModal.title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "text-bambu-gray hover:text-white transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-4 text-center truncate max-w-full", children: archiveName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 rounded-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: qrCodeUrl,
                  alt: t("qrCodeModal.title"),
                  className: "w-64 h-64"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-4 text-center", children: t("qrCodeModal.scanHint") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleDownload, className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                t("qrCodeModal.download")
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function PhotoGalleryModal({
  archiveId,
  archiveName,
  photos,
  onClose,
  onDelete
}) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setCurrentIndex((i) => Math.min(photos.length - 1, i + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, photos.length]);
  reactExports.useEffect(() => {
    if (currentIndex >= photos.length) {
      setCurrentIndex(Math.max(0, photos.length - 1));
    }
  }, [photos.length, currentIndex]);
  if (photos.length === 0) {
    onClose();
    return null;
  }
  const currentPhoto = photos[currentIndex];
  const photoUrl = api.getArchivePhotoUrl(archiveId, currentPhoto);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = photoUrl;
    link.download = `${archiveName}_photo_${currentIndex + 1}.jpg`;
    link.click();
  };
  const handleDelete = () => {
    if (onDelete) {
      setShowDeleteConfirm(true);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 bg-black/90 flex items-center justify-center z-50",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full h-full flex flex-col",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 bg-black/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: archiveName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("photoGallery.photoCount", { current: currentIndex + 1, total: photos.length }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: handleDownload, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                    t("common.download")
                  ] }),
                  onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: handleDelete, className: "text-red-400 hover:text-red-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: onClose,
                      className: "p-2 text-bambu-gray hover:text-white transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex items-center justify-center p-4 relative overflow-hidden", children: [
                currentIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCurrentIndex((i) => i - 1),
                    className: "absolute left-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-8 h-8 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: photoUrl,
                    alt: t("photoGallery.photoCount", { current: currentIndex + 1, total: photos.length }),
                    className: "max-w-full max-h-full object-contain rounded-lg",
                    style: { maxHeight: "calc(100vh - 200px)" }
                  }
                ),
                currentIndex < photos.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCurrentIndex((i) => i + 1),
                    className: "absolute right-4 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-8 h-8 text-white" })
                  }
                )
              ] }),
              photos.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 p-4 bg-black/50", children: photos.map((photo, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCurrentIndex(index),
                  className: `w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${index === currentIndex ? "border-bambu-green" : "border-transparent hover:border-bambu-gray"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: api.getArchivePhotoUrl(archiveId, photo),
                      alt: `Thumbnail ${index + 1}`,
                      className: "w-full h-full object-cover"
                    }
                  )
                },
                photo
              )) })
            ]
          }
        ),
        showDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("photoGallery.deletePhoto"),
            message: t("photoGallery.deleteConfirm"),
            confirmText: t("common.delete"),
            variant: "danger",
            onConfirm: () => {
              onDelete?.(currentPhoto);
              setShowDeleteConfirm(false);
            },
            onCancel: () => setShowDeleteConfirm(false)
          }
        )
      ]
    }
  );
}
function ProjectPageModal({ archiveId, archiveName, onClose }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = reactExports.useState(null);
  const [editData, setEditData] = reactExports.useState({});
  const { data: projectPage, isLoading, error } = useQuery({
    queryKey: ["archive-project-page", archiveId],
    queryFn: () => api.getArchiveProjectPage(archiveId)
  });
  const updateMutation = useMutation({
    mutationFn: (data) => api.updateArchiveProjectPage(archiveId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archive-project-page", archiveId] });
      setIsEditing(false);
      setEditData({});
    }
  });
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedImageIndex !== null) {
          setSelectedImageIndex(null);
        } else if (isEditing) {
          handleCancelEdit();
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, isEditing, onClose]);
  const allImages = [
    ...projectPage?.model_pictures || [],
    ...projectPage?.profile_pictures || []
  ];
  const handleStartEdit = () => {
    setEditData({
      title: projectPage?.title || "",
      description: projectPage?.description || "",
      designer: projectPage?.designer || "",
      license: projectPage?.license || "",
      profile_title: projectPage?.profile_title || "",
      profile_description: projectPage?.profile_description || ""
    });
    setIsEditing(true);
  };
  const handleSave = () => {
    updateMutation.mutate(editData);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditData({});
  };
  const sanitizeHtml = (html) => {
    return purify.sanitize(html, {
      ALLOWED_TAGS: ["p", "br", "b", "strong", "i", "em", "u", "a", "ul", "ol", "li", "figure", "img"],
      ALLOWED_ATTR: ["href", "src", "target", "rel", "style"],
      ADD_ATTR: ["target"]
    });
  };
  const hasContent = projectPage && (projectPage.title || projectPage.description || projectPage.designer || projectPage.profile_title || allImages.length > 0);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
      onClick: handleBackdropClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-bambu-green" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white", children: [
                t("projectPageModal.title"),
                archiveName && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray ml-2", children: [
                  "- ",
                  archiveName
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              !isEditing && hasContent && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: handleStartEdit, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4 mr-1" }),
                t("common.edit")
              ] }),
              isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: handleCancelEdit, children: t("common.cancel") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "primary",
                    size: "sm",
                    onClick: handleSave,
                    disabled: updateMutation.isPending,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4 mr-1" }),
                      t("common.save")
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "p-2 hover:bg-bambu-dark-tertiary rounded-lg transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [
            isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-2 border-bambu-green border-t-transparent" }) }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-400 text-center py-12", children: t("projectPageModal.loadFailed") }),
            projectPage && !hasContent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-bambu-gray text-center py-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("projectPageModal.emptyTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: t("projectPageModal.emptyDescription") })
            ] }),
            projectPage && hasContent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: editData.title || "",
                    onChange: (e) => setEditData({ ...editData, title: e.target.value }),
                    placeholder: t("projectPageModal.titlePlaceholder"),
                    className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded-lg px-4 py-2 text-white text-xl font-semibold"
                  }
                ) : projectPage.title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white", children: projectPage.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 text-sm", children: [
                  isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-bambu-gray" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: editData.designer || "",
                        onChange: (e) => setEditData({ ...editData, designer: e.target.value }),
                        placeholder: t("projectPageModal.designerPlaceholder"),
                        className: "bg-bambu-dark border border-bambu-dark-tertiary rounded px-2 py-1 text-white"
                      }
                    )
                  ] }) : projectPage.designer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-bambu-gray", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: projectPage.designer }),
                    projectPage.designer_user_id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `https://makerworld.com/en/@${projectPage.designer_user_id}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-bambu-green hover:underline",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" })
                      }
                    )
                  ] }),
                  projectPage.creation_date && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-bambu-gray", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: projectPage.creation_date })
                  ] }),
                  isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-bambu-gray" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: editData.license || "",
                        onChange: (e) => setEditData({ ...editData, license: e.target.value }),
                        placeholder: t("projectPageModal.licensePlaceholder"),
                        className: "bg-bambu-dark border border-bambu-dark-tertiary rounded px-2 py-1 text-white"
                      }
                    )
                  ] }) : projectPage.license && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-bambu-gray", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: projectPage.license })
                  ] }),
                  projectPage.origin && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-bambu-dark rounded text-bambu-gray", children: projectPage.origin })
                ] })
              ] }),
              (projectPage.description || isEditing) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray uppercase tracking-wide", children: t("projectPageModal.description") }),
                isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RichTextEditor,
                  {
                    content: editData.description || "",
                    onChange: (html) => setEditData({ ...editData, description: html }),
                    placeholder: t("projectPageModal.descriptionPlaceholder")
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "prose prose-invert prose-sm max-w-none text-bambu-gray-light",
                    dangerouslySetInnerHTML: {
                      __html: sanitizeHtml(projectPage.description || "")
                    }
                  }
                )
              ] }),
              (projectPage.profile_title || projectPage.profile_description || isEditing) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 p-4 bg-bambu-dark rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray uppercase tracking-wide", children: t("projectPageModal.printProfile") }),
                isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: editData.profile_title || "",
                      onChange: (e) => setEditData({ ...editData, profile_title: e.target.value }),
                      placeholder: t("projectPageModal.profileTitlePlaceholder"),
                      className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-white"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    RichTextEditor,
                    {
                      content: editData.profile_description || "",
                      onChange: (html) => setEditData({ ...editData, profile_description: html }),
                      placeholder: t("projectPageModal.profileDescriptionPlaceholder")
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  projectPage.profile_title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: projectPage.profile_title }),
                  projectPage.profile_description && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "prose prose-invert prose-sm max-w-none text-bambu-gray-light",
                      dangerouslySetInnerHTML: {
                        __html: sanitizeHtml(projectPage.profile_description)
                      }
                    }
                  ),
                  projectPage.profile_user_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("projectPageModal.byAuthor", { name: projectPage.profile_user_name }) })
                ] })
              ] }),
              allImages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-medium text-bambu-gray uppercase tracking-wide flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4" }),
                  t("projectPageModal.images", { count: allImages.length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2", children: allImages.map((img, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelectedImageIndex(index),
                    className: "aspect-square rounded-lg overflow-hidden border border-bambu-dark-tertiary hover:border-bambu-green transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: img.url,
                        alt: img.name,
                        className: "w-full h-full object-cover"
                      }
                    )
                  },
                  img.path
                )) })
              ] }),
              projectPage.design_model_id && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `https://makerworld.com/en/models/${projectPage.design_model_id}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 text-bambu-green hover:underline",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
                    t("projectPageModal.viewOnMakerWorld")
                  ]
                }
              ) })
            ] })
          ] })
        ] }),
        selectedImageIndex !== null && allImages[selectedImageIndex] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "fixed inset-0 bg-black/90 flex items-center justify-center z-60",
            onClick: () => setSelectedImageIndex(null),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(Math.max(0, selectedImageIndex - 1));
                  },
                  disabled: selectedImageIndex === 0,
                  className: "absolute left-4 p-2 bg-bambu-dark-secondary rounded-full hover:bg-bambu-dark-tertiary disabled:opacity-30",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-6 h-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: allImages[selectedImageIndex].url,
                  alt: allImages[selectedImageIndex].name,
                  className: "max-w-[90vw] max-h-[90vh] object-contain",
                  onClick: (e) => e.stopPropagation()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(Math.min(allImages.length - 1, selectedImageIndex + 1));
                  },
                  disabled: selectedImageIndex === allImages.length - 1,
                  className: "absolute right-4 p-2 bg-bambu-dark-secondary rounded-full hover:bg-bambu-dark-tertiary disabled:opacity-30",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-6 h-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedImageIndex(null),
                  className: "absolute top-4 right-4 p-2 bg-bambu-dark-secondary rounded-full hover:bg-bambu-dark-tertiary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 text-white text-sm", children: [
                selectedImageIndex + 1,
                " / ",
                allImages.length
              ] })
            ]
          }
        )
      ]
    }
  );
}
const SPEED_OPTIONS$1 = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4];
function TimelapseEditorModal({
  archiveId,
  timelapseSrc,
  onClose,
  onSave
}) {
  const { showToast } = useToast();
  const videoRef = reactExports.useRef(null);
  const audioRef = reactExports.useRef(null);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [currentTime, setCurrentTime] = reactExports.useState(0);
  const [duration, setDuration] = reactExports.useState(0);
  const [trimStart, setTrimStart] = reactExports.useState(0);
  const [trimEnd, setTrimEnd] = reactExports.useState(0);
  const [speed, setSpeed] = reactExports.useState(1);
  const [audioFile, setAudioFile] = reactExports.useState(null);
  const [audioUrl, setAudioUrl] = reactExports.useState(null);
  const [audioVolume, setAudioVolume] = reactExports.useState(0.8);
  const [audioMuted, setAudioMuted] = reactExports.useState(false);
  const { data: videoInfo, isLoading: isLoadingInfo } = useQuery({
    queryKey: ["timelapse-info", archiveId],
    queryFn: () => api.getTimelapseInfo(archiveId)
  });
  const { data: thumbnailData } = useQuery({
    queryKey: ["timelapse-thumbnails", archiveId],
    queryFn: () => api.getTimelapseThumbnails(archiveId, 15)
  });
  const processMutation = useMutation({
    mutationFn: () => api.processTimelapse(
      archiveId,
      {
        trimStart,
        trimEnd,
        speed,
        saveMode: "replace"
      },
      audioFile || void 0
    ),
    onSuccess: (data) => {
      showToast(data.message, "success");
      onSave?.();
      onClose();
    },
    onError: (error) => {
      showToast(error.message || "Processing failed", "error");
    }
  });
  reactExports.useEffect(() => {
    if (videoInfo?.duration && trimEnd === 0) {
      setTrimEnd(videoInfo.duration);
    }
  }, [videoInfo?.duration, trimEnd]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  reactExports.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => {
      const time = video.currentTime;
      setCurrentTime(time);
      if (time >= trimEnd) {
        video.currentTime = trimStart;
      }
    };
    const handleDurationChange = () => {
      setDuration(video.duration);
      if (trimEnd === 0) {
        setTrimEnd(video.duration);
      }
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [trimStart, trimEnd]);
  reactExports.useEffect(() => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (!audio || !video || !audioUrl) return;
    audio.currentTime = video.currentTime;
    audio.playbackRate = video.playbackRate;
    if (isPlaying && !audioMuted) {
      audio.play().catch(() => {
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, audioUrl, audioMuted]);
  reactExports.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audioMuted ? 0 : audioVolume;
    }
  }, [audioVolume, audioMuted]);
  reactExports.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);
  const togglePlay = reactExports.useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      if (video.currentTime < trimStart) {
        video.currentTime = trimStart;
      }
      video.play();
    }
  }, [isPlaying, trimStart]);
  const handleSeek = (time) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(trimStart, Math.min(trimEnd, time));
  };
  const handleAudioUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioFile(file);
    setAudioUrl(URL.createObjectURL(file));
  };
  const removeAudio = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioFile(null);
    setAudioUrl(null);
  };
  reactExports.useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);
  const trimmedDuration = trimEnd - trimStart;
  const outputDuration = trimmedDuration / speed;
  if (isLoadingInfo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin" }),
      "Loading video info..."
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-bambu-dark-secondary rounded-xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-5 h-5 text-bambu-green" }),
        "Edit Timelapse"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "primary",
            size: "sm",
            onClick: () => processMutation.mutate(),
            disabled: processMutation.isPending,
            children: processMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              "Processing..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              "Save"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "p-1 hover:bg-bambu-dark-tertiary rounded transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "video",
          {
            ref: videoRef,
            src: timelapseSrc,
            className: "w-full rounded-lg bg-black",
            onClick: togglePlay,
            muted: !!audioUrl
          }
        ),
        !isPlaying && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: togglePlay,
            className: "absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-bambu-green rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-8 h-8 text-white" }) })
          }
        ),
        audioUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { ref: audioRef, src: audioUrl, loop: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trim" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto", children: [
            formatMediaTime(trimStart),
            " - ",
            formatMediaTime(trimEnd),
            " (",
            formatMediaTime(trimmedDuration),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 bg-bambu-dark rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex", children: thumbnailData?.thumbnails.map((thumb, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex-1 bg-cover bg-center",
              style: {
                backgroundImage: `url(data:image/jpeg;base64,${thumb})`
              }
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-y-0 left-0 bg-black/60",
              style: { width: `${trimStart / duration * 100}%` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-y-0 right-0 bg-black/60",
              style: { width: `${(duration - trimEnd) / duration * 100}%` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-y-0 border-2 border-bambu-green",
              style: {
                left: `${trimStart / duration * 100}%`,
                right: `${(duration - trimEnd) / duration * 100}%`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 bottom-0 w-0.5 bg-white shadow-lg",
              style: { left: `${currentTime / duration * 100}%` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: duration,
              step: 0.1,
              value: trimStart,
              onChange: (e) => {
                const val = parseFloat(e.target.value);
                if (val < trimEnd - 1) {
                  setTrimStart(val);
                  if (videoRef.current && videoRef.current.currentTime < val) {
                    videoRef.current.currentTime = val;
                  }
                }
              },
              className: "absolute inset-0 w-full opacity-0 cursor-ew-resize",
              style: { clipPath: "inset(0 50% 0 0)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: duration,
              step: 0.1,
              value: trimEnd,
              onChange: (e) => {
                const val = parseFloat(e.target.value);
                if (val > trimStart + 1) {
                  setTrimEnd(val);
                }
              },
              className: "absolute inset-0 w-full opacity-0 cursor-ew-resize",
              style: { clipPath: "inset(0 0 0 50%)" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: duration,
            step: 0.1,
            value: currentTime,
            onChange: (e) => handleSeek(parseFloat(e.target.value)),
            className: "w-full h-1 bg-bambu-dark-tertiary rounded-lg appearance-none cursor-pointer\n                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3\n                [&::-webkit-slider-thumb]:bg-bambu-green [&::-webkit-slider-thumb]:rounded-full\n                [&::-webkit-slider-thumb]:cursor-pointer"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: togglePlay,
            className: "p-2 bg-bambu-green hover:bg-bambu-green-dark rounded-lg transition-colors",
            children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-5 h-5 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 text-white" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Speed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto", children: [
            speed,
            "x (output: ",
            formatMediaTime(outputDuration),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: SPEED_OPTIONS$1.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setSpeed(s),
            className: `flex-1 px-2 py-2 text-sm rounded transition-colors ${speed === s ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: [
              s,
              "x"
            ]
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Music Overlay" })
        ] }),
        audioFile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-bambu-dark rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-5 h-5 text-bambu-green" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white truncate", children: audioFile.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
              (audioFile.size / 1024 / 1024).toFixed(1),
              " MB"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setAudioMuted(!audioMuted),
              className: "p-2 hover:bg-bambu-dark-tertiary rounded transition-colors",
              children: audioMuted ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-4 h-4 text-bambu-gray" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4 text-bambu-green" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 1,
              step: 0.1,
              value: audioVolume,
              onChange: (e) => setAudioVolume(parseFloat(e.target.value)),
              className: "w-20 h-1 bg-bambu-dark-tertiary rounded-lg appearance-none cursor-pointer\n                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3\n                    [&::-webkit-slider-thumb]:bg-bambu-green [&::-webkit-slider-thumb]:rounded-full"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: removeAudio,
              className: "p-2 hover:bg-red-500/20 rounded transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-red-400" })
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-bambu-dark-tertiary rounded-lg cursor-pointer hover:border-bambu-green/50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-8 h-8 text-bambu-gray" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: "Drop audio file or click to upload" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray/60", children: "MP3, WAV, M4A, AAC, OGG" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: ".mp3,.wav,.m4a,.aac,.ogg,audio/*",
              onChange: handleAudioUpload,
              className: "hidden"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-bambu-dark rounded-lg text-sm space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Original:" }),
          " ",
          formatMediaTime(duration),
          " @ ",
          videoInfo?.width,
          "x",
          videoInfo?.height
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Output:" }),
          " ",
          formatMediaTime(outputDuration),
          " @ ",
          speed,
          "x speed",
          audioFile && ` + music overlay`
        ] })
      ] })
    ] }),
    processMutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-12 h-12 text-bambu-green animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-lg", children: "Processing timelapse..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-sm", children: "This may take a few moments" })
    ] })
  ] }) });
}
const SPEED_OPTIONS = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4];
function TimelapseViewer({
  src,
  title,
  downloadFilename,
  archiveId,
  onClose,
  onEdit
}) {
  const videoRef = reactExports.useRef(null);
  const [isPlaying, setIsPlaying] = reactExports.useState(true);
  const [playbackRate, setPlaybackRate] = reactExports.useState(1);
  const [currentTime, setCurrentTime] = reactExports.useState(0);
  const [duration, setDuration] = reactExports.useState(0);
  const [showEditor, setShowEditor] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = playbackRate;
    }
  }, [playbackRate]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  reactExports.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };
  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = parseFloat(e.target.value);
  };
  const skipBackward = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, video.currentTime - 5);
  };
  const skipForward = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(duration, video.currentTime + 5);
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = downloadFilename;
    link.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-bambu-dark-secondary rounded-xl max-w-4xl w-full mx-4 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-5 h-5 text-bambu-green" }),
          title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          archiveId && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: () => setShowEditor(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" }),
            "Edit"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: handleDownload, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
            "Download"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "p-1 hover:bg-bambu-dark-tertiary rounded transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "video",
          {
            ref: videoRef,
            src,
            autoPlay: true,
            className: "w-full rounded-lg",
            onClick: togglePlay
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray w-12 text-right", children: formatMediaTime(currentTime) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: duration || 100,
                value: currentTime,
                onChange: handleSeek,
                className: "flex-1 h-1 bg-bambu-dark-tertiary rounded-lg appearance-none cursor-pointer\n                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3\n                  [&::-webkit-slider-thumb]:bg-bambu-green [&::-webkit-slider-thumb]:rounded-full\n                  [&::-webkit-slider-thumb]:cursor-pointer"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray w-12", children: formatMediaTime(duration) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: skipBackward,
                  className: "p-2 hover:bg-bambu-dark-tertiary rounded-lg transition-colors",
                  title: "Skip back 5s",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipBack, { className: "w-5 h-5 text-bambu-gray" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: togglePlay,
                  className: "p-2 bg-bambu-green hover:bg-bambu-green-dark rounded-lg transition-colors",
                  children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-5 h-5 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: skipForward,
                  className: "p-2 hover:bg-bambu-dark-tertiary rounded-lg transition-colors",
                  title: "Skip forward 5s",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, { className: "w-5 h-5 text-bambu-gray" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: "Speed:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: SPEED_OPTIONS.map((speed) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setPlaybackRate(speed),
                  className: `px-2 py-1 text-xs rounded transition-colors ${playbackRate === speed ? "bg-bambu-green text-white" : "bg-bambu-dark-tertiary text-bambu-gray hover:bg-bambu-dark-tertiary/80"}`,
                  children: [
                    speed,
                    "x"
                  ]
                },
                speed
              )) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    showEditor && archiveId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TimelapseEditorModal,
      {
        archiveId,
        timelapseSrc: src,
        onClose: () => setShowEditor(false),
        onSave: onEdit
      }
    )
  ] });
}
function getArchiveStatusLabel(status, t) {
  switch (status) {
    case "completed":
      return t("archives.status.completed");
    case "failed":
      return t("archives.status.failed");
    case "stopped":
      return t("archives.status.stopped");
    case "cancelled":
      return t("archives.log.cancelled");
    case "skipped":
      return t("archives.log.skipped");
    default:
      return status;
  }
}
function CompareArchivesModal({ archiveIds, onClose }) {
  const { t } = useTranslation();
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const { data: comparison, isLoading, error } = useQuery({
    queryKey: ["archive-comparison", archiveIds],
    queryFn: () => api.compareArchives(archiveIds)
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col border border-bambu-dark-tertiary", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: t("compareArchives.title", { count: archiveIds.length }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "text-bambu-gray hover:text-white p-1",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto p-4 bg-bambu-dark-secondary", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-red-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("compareArchives.loadFailed") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-2", children: error instanceof Error ? error.message : t("common.unknownError") })
    ] }) : comparison ? /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonContent, { comparison }) : null }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, className: "w-full", children: t("common.close") }) })
  ] }) });
}
function ComparisonContent({ comparison }) {
  const { t } = useTranslation();
  const correlationMessage = comparison.success_correlation.message === "Need both successful and failed prints to analyze correlation" ? t("compareArchives.needBothOutcomes") : comparison.success_correlation.message;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-sm text-bambu-gray font-medium pb-2 pr-4 min-w-[150px]", children: t("compareArchives.setting") }),
        comparison.archives.map((archive) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "th",
          {
            className: "text-left text-sm font-medium pb-2 px-2 min-w-[120px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white truncate max-w-[150px]", title: archive.print_name, children: archive.print_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${archive.status === "completed" ? "text-status-ok" : archive.status === "failed" ? "text-status-error" : "text-bambu-gray"}`, children: getArchiveStatusLabel(archive.status, t) })
            ]
          },
          archive.id
        ))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-bambu-gray/20", children: comparison.comparison.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: field.has_difference ? "bg-yellow-500/5" : "",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              field.has_difference && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 text-yellow-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: field.has_difference ? "text-yellow-400" : "text-bambu-gray", children: field.label })
            ] }) }),
            field.values.map((value, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 text-sm text-white", children: [
              value ?? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray/50", children: "-" }),
              field.unit && value !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray ml-1", children: field.unit })
            ] }, idx))
          ]
        },
        field.field
      )) })
    ] }) }),
    comparison.differences.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-medium text-yellow-400 mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
        t("compareArchives.differencesFound", { count: comparison.differences.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-white/80 space-y-1", children: [
        comparison.differences.slice(0, 5).map((diff) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400", children: diff.label }),
          ": ",
          diff.values.join(" vs "),
          " ",
          diff.unit || ""
        ] }, diff.field)),
        comparison.differences.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-bambu-gray", children: t("compareArchives.moreDifferences", { count: comparison.differences.length - 5 }) })
      ] })
    ] }),
    comparison.success_correlation.has_both_outcomes ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-bambu-dark rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-medium text-white mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-bambu-green" }),
        t("compareArchives.analysis")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-green", children: t("compareArchives.successful", { count: comparison.success_correlation.successful_count }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: t("compareArchives.failed", { count: comparison.success_correlation.failed_count }) })
      ] }),
      comparison.success_correlation.insights && comparison.success_correlation.insights.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: comparison.success_correlation.insights.map((insight) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm p-2 bg-bambu-dark-secondary rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-medium", children: [
          insight.label,
          ":"
        ] }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: insight.insight })
      ] }, insight.field)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("compareArchives.noCorrelations") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-bambu-dark rounded-lg text-sm text-bambu-gray", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: correlationMessage || t("compareArchives.needBothOutcomes") }) })
  ] });
}
function formatTimeAgo(dateStr, t) {
  const date = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 6e4);
  if (diffMins < 1) return t("pendingUploads.timeAgo.justNow");
  if (diffMins < 60) return t("pendingUploads.timeAgo.minutesAgo", { minutes: diffMins });
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return t("pendingUploads.timeAgo.hoursAgo", { hours: diffHours });
  const diffDays = Math.floor(diffHours / 24);
  return t("pendingUploads.timeAgo.daysAgo", { days: diffDays });
}
function PendingUploadItem({
  upload,
  projects,
  onArchive,
  onDiscard,
  isArchiving,
  isDiscarding,
  t
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const [tags, setTags] = reactExports.useState(upload.tags || "");
  const [notes, setNotes] = reactExports.useState(upload.notes || "");
  const [projectId, setProjectId] = reactExports.useState(upload.project_id);
  const [showDiscardConfirm, setShowDiscardConfirm] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileBox, { className: "w-8 h-8 text-bambu-green flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: upload.filename }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatFileSize(upload.file_size) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              formatTimeAgo(upload.uploaded_at, t)
            ] }),
            upload.source_ip && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("pendingUploads.sourceIp", { ip: upload.source_ip }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setExpanded(!expanded),
            className: "p-1 text-bambu-gray hover:text-white transition-colors",
            children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "primary",
            size: "sm",
            onClick: () => onArchive(upload.id, { tags, notes, project_id: projectId || void 0 }),
            disabled: isArchiving,
            children: isArchiving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-4 h-4" }),
              t("pendingUploads.archive")
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => setShowDiscardConfirm(true),
            disabled: isDiscarding,
            children: isDiscarding ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-red-400" })
          }
        )
      ] })
    ] }),
    showDiscardConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("pendingUploads.discardUpload"),
        message: t("pendingUploads.confirmDiscardMessage", { name: upload.filename }),
        confirmText: t("pendingUploads.discardUpload"),
        variant: "danger",
        onConfirm: () => {
          onDiscard(upload.id);
          setShowDiscardConfirm(false);
        },
        onCancel: () => setShowDiscardConfirm(false)
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-bambu-dark-tertiary space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("pendingUploads.tags") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: tags,
            onChange: (e) => setTags(e.target.value),
            placeholder: t("pendingUploads.placeholders.tags"),
            className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-md px-3 py-2 text-white placeholder-bambu-gray text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("pendingUploads.notes") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: notes,
            onChange: (e) => setNotes(e.target.value),
            placeholder: t("pendingUploads.placeholders.notes"),
            rows: 2,
            className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-md px-3 py-2 text-white placeholder-bambu-gray text-sm resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("pendingUploads.project") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: projectId || "",
            onChange: (e) => setProjectId(e.target.value ? Number(e.target.value) : null),
            className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-md px-3 py-2 text-white text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("pendingUploads.noProject") }),
              projects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: project.id, children: project.name }, project.id))
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function PendingUploadsPanel() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [showArchiveAllConfirm, setShowArchiveAllConfirm] = reactExports.useState(false);
  const [showDiscardAllConfirm, setShowDiscardAllConfirm] = reactExports.useState(false);
  const [archivingIds, setArchivingIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [discardingIds, setDiscardingIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const { data: uploads, isLoading: uploadsLoading } = useQuery({
    queryKey: ["pending-uploads"],
    queryFn: pendingUploadsApi.list,
    refetchInterval: 1e4
    // Refresh every 10 seconds
  });
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => api.getProjects()
  });
  const archiveMutation = useMutation({
    mutationFn: ({ id, data }) => pendingUploadsApi.archive(id, data),
    onMutate: ({ id }) => {
      setArchivingIds((prev) => new Set(prev).add(id));
    },
    onSettled: (_, __, { id }) => {
      setArchivingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["pending-uploads"] });
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("pendingUploads.archiveSuccess", { name: data.print_name }));
    },
    onError: (error) => {
      showToast(error.message || t("pendingUploads.archiveFailed"), "error");
    }
  });
  const discardMutation = useMutation({
    mutationFn: (id) => pendingUploadsApi.discard(id),
    onMutate: (id) => {
      setDiscardingIds((prev) => new Set(prev).add(id));
    },
    onSettled: (_, __, id) => {
      setDiscardingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pending-uploads"] });
      showToast(t("pendingUploads.discardSuccess"));
    },
    onError: (error) => {
      showToast(error.message || t("pendingUploads.discardFailed"), "error");
    }
  });
  const archiveAllMutation = useMutation({
    mutationFn: pendingUploadsApi.archiveAll,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["pending-uploads"] });
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(
        data.failed > 0 ? t("pendingUploads.archiveAllSuccessWithFailed", { archived: data.archived, failed: data.failed }) : t("pendingUploads.archiveAllSuccess", { archived: data.archived })
      );
    },
    onError: (error) => {
      showToast(error.message || t("pendingUploads.archiveAllFailed"), "error");
    }
  });
  const discardAllMutation = useMutation({
    mutationFn: pendingUploadsApi.discardAll,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["pending-uploads"] });
      showToast(t("pendingUploads.discardAllSuccess", { discarded: data.discarded }));
    },
    onError: (error) => {
      showToast(error.message || t("pendingUploads.discardAllFailed"), "error");
    }
  });
  if (uploadsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "py-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-green" }) }) });
  }
  if (!uploads || uploads.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-l-4 border-l-yellow-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-5 h-5 text-yellow-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white", children: [
            t("pendingUploads.title"),
            " (",
            uploads.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "primary",
              size: "sm",
              onClick: () => setShowArchiveAllConfirm(true),
              disabled: archiveAllMutation.isPending,
              children: archiveAllMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-4 h-4" }),
                t("pendingUploads.archiveAll")
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => setShowDiscardAllConfirm(true),
              disabled: discardAllMutation.isPending,
              children: discardAllMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
                t("pendingUploads.discardAll")
              ] })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-4", children: t("pendingUploads.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: uploads.map((upload) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PendingUploadItem,
          {
            upload,
            projects: projects || [],
            onArchive: (id, data) => archiveMutation.mutate({ id, data }),
            onDiscard: (id) => discardMutation.mutate(id),
            isArchiving: archivingIds.has(upload.id),
            isDiscarding: discardingIds.has(upload.id),
            t
          },
          upload.id
        )) })
      ] })
    ] }),
    showArchiveAllConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("pendingUploads.archiveAllUploads"),
        message: t("pendingUploads.confirmArchiveAllMessage", { count: uploads.length }),
        confirmText: t("pendingUploads.archiveAll"),
        onConfirm: () => {
          archiveAllMutation.mutate();
          setShowArchiveAllConfirm(false);
        },
        onCancel: () => setShowArchiveAllConfirm(false)
      }
    ),
    showDiscardAllConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("pendingUploads.discardAllUploads"),
        message: t("pendingUploads.confirmDiscardAllMessage", { count: uploads.length }),
        confirmText: t("pendingUploads.discardAll"),
        variant: "danger",
        onConfirm: () => {
          discardAllMutation.mutate();
          setShowDiscardAllConfirm(false);
        },
        onCancel: () => setShowDiscardAllConfirm(false)
      }
    )
  ] });
}
function TagManagementModal({ onClose }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [search, setSearch] = reactExports.useState("");
  const [editingTag, setEditingTag] = reactExports.useState(null);
  const [editValue, setEditValue] = reactExports.useState("");
  const [deleteConfirm, setDeleteConfirm] = reactExports.useState(null);
  const [sortBy, setSortBy] = reactExports.useState("count");
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (editingTag) {
          setEditingTag(null);
        } else if (deleteConfirm) {
          setDeleteConfirm(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, editingTag, deleteConfirm]);
  const { data: tags, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: api.getTags
  });
  const renameMutation = useMutation({
    mutationFn: ({ oldName, newName }) => api.renameTag(oldName, newName),
    onSuccess: (data, { oldName, newName }) => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("tagManagement.renameSuccess", { oldName, newName, count: data.affected }));
      setEditingTag(null);
    },
    onError: (error) => {
      showToast(error.message || t("tagManagement.renameFailed"), "error");
    }
  });
  const deleteMutation = useMutation({
    mutationFn: (name) => api.deleteTag(name),
    onSuccess: (data, name) => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("tagManagement.deleteSuccess", { name, count: data.affected }));
      setDeleteConfirm(null);
    },
    onError: (error) => {
      showToast(error.message || t("tagManagement.deleteFailed"), "error");
    }
  });
  const startEdit = (tag) => {
    setEditingTag(tag.name);
    setEditValue(tag.name);
    setDeleteConfirm(null);
  };
  const cancelEdit = () => {
    setEditingTag(null);
    setEditValue("");
  };
  const submitEdit = () => {
    if (!editingTag || !editValue.trim()) return;
    const newName = editValue.trim();
    if (newName === editingTag) {
      cancelEdit();
      return;
    }
    renameMutation.mutate({ oldName: editingTag, newName });
  };
  const handleEditKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitEdit();
    } else if (e.key === "Escape") {
      e.preventDefault();
      cancelEdit();
    }
  };
  const confirmDelete = (name) => {
    setDeleteConfirm(name);
    setEditingTag(null);
  };
  const executeDelete = () => {
    if (deleteConfirm) {
      deleteMutation.mutate(deleteConfirm);
    }
  };
  const filteredTags = tags?.filter((t2) => t2.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
    if (sortBy === "count") {
      return b.count - a.count || a.name.localeCompare(b.name);
    }
    return a.name.localeCompare(b.name);
  });
  const totalUsage = tags?.reduce((sum, t2) => sum + t2.count, 0) || 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-lg max-h-[80vh] flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-5 h-5 text-bambu-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: t("tagManagement.title") })
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-bambu-dark-tertiary flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: t("tagManagement.searchTags"),
              className: "w-full pl-9 pr-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
              value: search,
              onChange: (e) => setSearch(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
            value: sortBy,
            onChange: (e) => setSortBy(e.target.value),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "count", children: t("tagManagement.sortByCount") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: t("tagManagement.sortByName") })
            ]
          }
        )
      ] }),
      tags && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-2", children: t("tagManagement.summary", { tags: tags.length, usage: totalUsage }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto min-h-0 p-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-gray" }) }) : !filteredTags?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-bambu-gray", children: search ? t("tagManagement.noMatch") : t("tagManagement.empty") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filteredTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center gap-2 p-2 rounded-lg bg-bambu-dark hover:bg-bambu-dark-tertiary transition-colors group",
        children: editingTag === tag.name ? (
          // Edit mode
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "flex-1 px-2 py-1 bg-bambu-dark-tertiary border border-bambu-green rounded text-white text-sm focus:outline-none",
                value: editValue,
                onChange: (e) => setEditValue(e.target.value),
                onKeyDown: handleEditKeyDown,
                autoFocus: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "primary",
                onClick: submitEdit,
                disabled: !editValue.trim() || renameMutation.isPending,
                className: "p-1.5",
                children: renameMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                onClick: cancelEdit,
                className: "p-1.5",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] })
        ) : deleteConfirm === tag.name ? (
          // Delete confirmation
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-yellow-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray-light flex-1", children: t("tagManagement.deleteConfirm", { name: tag.name, count: tag.count }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "danger",
                onClick: executeDelete,
                disabled: deleteMutation.isPending,
                className: "p-1.5",
                children: deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                onClick: () => setDeleteConfirm(null),
                className: "p-1.5",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] })
        ) : (
          // Normal display
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-bambu-gray flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white flex-1 truncate", children: tag.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-bambu-dark-tertiary text-bambu-gray text-xs", children: tag.count }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => startEdit(tag),
                  className: "p-1.5 rounded hover:bg-bambu-dark text-bambu-gray hover:text-white transition-colors",
                  title: t("tagManagement.renameTag"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => confirmDelete(tag.name),
                  className: "p-1.5 rounded hover:bg-bambu-dark text-bambu-gray hover:text-red-400 transition-colors",
                  title: t("tagManagement.deleteTag"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ] })
          ] })
        )
      },
      tag.name
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 p-4 border-t border-bambu-dark-tertiary flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, className: "flex-1", children: t("common.close") }) })
  ] }) }) });
}
function getArchivePrinterLabel(archive, printerMap, t) {
  if (archive.printer_id) {
    return printerMap.get(archive.printer_id) || t("common.unknown");
  }
  if (archive.sliced_for_model) {
    return t("archives.card.slicedFor", { model: archive.sliced_for_model });
  }
  return t("archives.page.noPrinter");
}
function getArchiveLogStatusLabel(status, t) {
  switch (status) {
    case "completed":
      return t("archives.status.completed");
    case "failed":
      return t("archives.status.failed");
    case "stopped":
      return t("archives.status.stopped");
    case "cancelled":
      return t("archives.log.cancelled");
    case "skipped":
      return t("archives.log.skipped");
    default:
      return status;
  }
}
function isSlicedFile(archive) {
  const filename = archive.filename;
  if (filename) {
    const lower = filename.toLowerCase();
    if (lower.endsWith(".gcode") || lower.includes(".gcode.")) return true;
  }
  if (archive.total_layers || archive.print_time_seconds) return true;
  return false;
}
function getArchiveFileType(filename) {
  if (!filename) return void 0;
  const lower = filename.toLowerCase();
  if (lower.endsWith(".3mf")) return "3mf";
  if (lower.endsWith(".stl")) return "stl";
  if (lower.endsWith(".gcode") || lower.includes(".gcode.")) return "gcode";
  return lower.split(".").pop();
}
async function openInSlicerWithToken(archiveId, filename, resourceType, slicer) {
  try {
    if (resourceType === "source") {
      const { token } = await api.createSourceSlicerToken(archiveId);
      const path = api.getSourceSlicerDownloadUrl(archiveId, token, filename);
      openInSlicer(`${window.location.origin}${path}`, slicer);
    } else {
      const { token } = await api.createArchiveSlicerToken(archiveId);
      const path = api.getArchiveSlicerDownloadUrl(archiveId, token, filename);
      openInSlicer(`${window.location.origin}${path}`, slicer);
    }
  } catch {
    const path = resourceType === "source" ? api.getSource3mfForSlicer(archiveId, filename) : api.getArchiveForSlicer(archiveId, filename);
    openInSlicer(`${window.location.origin}${path}`, slicer);
  }
}
function ArchiveCard({
  archive,
  printerName,
  isSelected,
  onSelect,
  selectionMode,
  projects,
  isHighlighted,
  timeFormat = "system",
  preferredSlicer = "bambu_studio",
  currency,
  t,
  onNavigateToArchive
}) {
  if (isHighlighted) {
    console.log("ArchiveCard isHighlighted=true for archive:", archive.id);
  }
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission, canModify } = useAuth();
  const isMobile = useIsMobile();
  const [showViewer, setShowViewer] = reactExports.useState(false);
  const [showReprint, setShowReprint] = reactExports.useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  const [showEdit, setShowEdit] = reactExports.useState(false);
  const [showTimelapse, setShowTimelapse] = reactExports.useState(false);
  const [showTimelapseSelect, setShowTimelapseSelect] = reactExports.useState(false);
  const [availableTimelapses, setAvailableTimelapses] = reactExports.useState([]);
  const [showQRCode, setShowQRCode] = reactExports.useState(false);
  const [showPhotos, setShowPhotos] = reactExports.useState(false);
  const [showProjectPage, setShowProjectPage] = reactExports.useState(false);
  const [showSchedule, setShowSchedule] = reactExports.useState(false);
  const [showDeleteSource3mfConfirm, setShowDeleteSource3mfConfirm] = reactExports.useState(false);
  const [showDeleteF3dConfirm, setShowDeleteF3dConfirm] = reactExports.useState(false);
  const [showDeleteTimelapseConfirm, setShowDeleteTimelapseConfirm] = reactExports.useState(false);
  const [contextMenu, setContextMenu] = reactExports.useState(null);
  const [currentPlateIndex, setCurrentPlateIndex] = reactExports.useState(null);
  const [showPlateNav, setShowPlateNav] = reactExports.useState(false);
  const source3mfInputRef = reactExports.useRef(null);
  const f3dInputRef = reactExports.useRef(null);
  const timelapseInputRef = reactExports.useRef(null);
  const { data: platesData } = useQuery({
    queryKey: ["archive-plates", archive.id],
    queryFn: () => api.getArchivePlates(archive.id),
    enabled: showPlateNav,
    // Only fetch when user hovers to see navigation
    staleTime: 5 * 60 * 1e3
    // Cache for 5 minutes
  });
  const duplicateSequence = archive.duplicate_sequence ?? 0;
  const originalArchiveId = archive.original_archive_id ?? null;
  const plates = platesData?.plates ?? [];
  const isMultiPlate = platesData?.is_multi_plate ?? false;
  const displayPlateIndex = currentPlateIndex ?? 0;
  const timelapseDeleteMutation = useMutation({
    mutationFn: () => api.deleteArchiveTimelapse(archive.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.timelapseRemoved"));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedRemoveTimelapse"), "error");
    }
  });
  const timelapseUploadMutation = useMutation({
    mutationFn: (file) => api.uploadArchiveTimelapse(archive.id, file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.timelapseUploaded", { filename: data.filename }));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedUploadTimelapse"), "error");
    }
  });
  const source3mfUploadMutation = useMutation({
    mutationFn: (file) => api.uploadSource3mf(archive.id, file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.source3mfAttached", { filename: data.filename }));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedUploadSource3mf"), "error");
    }
  });
  const source3mfDeleteMutation = useMutation({
    mutationFn: () => api.deleteSource3mf(archive.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.source3mfRemoved"));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedRemoveSource3mf"), "error");
    }
  });
  const f3dUploadMutation = useMutation({
    mutationFn: (file) => api.uploadF3d(archive.id, file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.f3dAttached", { filename: data.filename }));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedUploadF3d"), "error");
    }
  });
  const f3dDeleteMutation = useMutation({
    mutationFn: () => api.deleteF3d(archive.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.f3dRemoved"));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedRemoveF3d"), "error");
    }
  });
  const timelapseScanMutation = useMutation({
    mutationFn: () => api.scanArchiveTimelapse(archive.id),
    onSuccess: (data) => {
      if (data.status === "attached") {
        queryClient.invalidateQueries({ queryKey: ["archives"] });
        showToast(t("archives.toast.timelapseAttached", { filename: data.filename }));
      } else if (data.status === "exists") {
        showToast(t("archives.toast.timelapseAlreadyAttached"));
      } else if (data.status === "not_found" && data.available_files && data.available_files.length > 0) {
        setAvailableTimelapses(data.available_files);
        setShowTimelapseSelect(true);
      } else {
        showToast(data.message || t("archives.toast.noMatchingTimelapse"), "warning");
      }
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedScanTimelapse"), "error");
    }
  });
  const timelapseSelectMutation = useMutation({
    mutationFn: (filename) => api.selectArchiveTimelapse(archive.id, filename),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.timelapseAttached", { filename: data.filename }));
      setShowTimelapseSelect(false);
      setAvailableTimelapses([]);
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedAttachTimelapse"), "error");
    }
  });
  const deleteMutation = useMutation({
    mutationFn: () => api.deleteArchive(archive.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.archiveDeleted"));
    },
    onError: () => {
      showToast(t("archives.toast.failedDeleteArchive"), "error");
    }
  });
  const favoriteMutation = useMutation({
    mutationFn: () => api.toggleFavorite(archive.id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(data.is_favorite ? t("archives.toast.addedToFavorites") : t("archives.toast.removedFromFavorites"));
    }
  });
  const { data: linkedFolders } = useQuery({
    queryKey: ["archive-folders", archive.id],
    queryFn: () => api.getLibraryFoldersByArchive(archive.id)
  });
  const assignProjectMutation = useMutation({
    mutationFn: (projectId) => api.updateArchive(archive.id, { project_id: projectId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      showToast(t("archives.toast.projectUpdated"));
    },
    onError: () => {
      showToast(t("archives.toast.failedUpdateProject"), "error");
    }
  });
  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };
  const isGcodeFile = isSlicedFile(archive);
  const contextMenuItems = [
    // For gcode files: show Print option
    // For source files: show Slice as the primary action
    ...isGcodeFile ? [
      {
        label: t("archives.menu.print"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
        onClick: () => setShowReprint(true),
        disabled: !archive.file_path || !canModify("archives", "reprint", archive.created_by_id),
        title: !archive.file_path ? t("archives.card.noFileForReprint") : !canModify("archives", "reprint", archive.created_by_id) ? t("archives.permission.noReprint") : void 0
      },
      {
        label: t("archives.menu.schedule"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
        onClick: () => setShowSchedule(true),
        disabled: !archive.file_path || !hasPermission("queue:create"),
        title: !archive.file_path ? t("archives.card.noFileForReprint") : !hasPermission("queue:create") ? t("archives.permission.noAddToQueue") : void 0
      },
      {
        label: t("archives.menu.openInBambuStudio"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
        onClick: () => {
          const filename = archive.print_name || archive.filename || "model";
          openInSlicerWithToken(archive.id, filename, "file", preferredSlicer);
        },
        disabled: !archive.file_path,
        title: !archive.file_path ? t("archives.card.noFileForReprint") : void 0
      }
    ] : [
      {
        label: t("archives.menu.slice"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
        onClick: () => {
          const filename = archive.print_name || archive.filename || "model";
          openInSlicerWithToken(archive.id, filename, "file", preferredSlicer);
        }
      }
    ],
    {
      label: archive.external_url ? t("archives.menu.externalLink") : t("archives.menu.viewOnMakerWorld"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" }),
      onClick: () => {
        const url = archive.external_url || archive.makerworld_url;
        if (url) window.open(url, "_blank");
      },
      disabled: !archive.external_url && !archive.makerworld_url
    },
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: t("archives.menu.preview3d"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
      onClick: () => setShowViewer(true)
    },
    {
      label: t("archives.menu.viewTimelapse"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4" }),
      onClick: () => setShowTimelapse(true),
      disabled: !archive.timelapse_path
    },
    {
      label: t("archives.menu.scanForTimelapse"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ScanSearch, { className: "w-4 h-4" }),
      onClick: () => timelapseScanMutation.mutate(),
      disabled: !archive.printer_id || !!archive.timelapse_path || timelapseScanMutation.isPending || !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    {
      label: t("archives.menu.uploadTimelapse"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
      onClick: () => timelapseInputRef.current?.click(),
      disabled: !!archive.timelapse_path || !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    ...archive.timelapse_path ? [{
      label: t("archives.menu.removeTimelapse"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
      onClick: () => setShowDeleteTimelapseConfirm(true),
      danger: true,
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    }] : [],
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: archive.source_3mf_path ? t("archives.menu.downloadSource3mf") : t("archives.menu.uploadSource3mf"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCode, { className: "w-4 h-4" }),
      onClick: () => {
        if (archive.source_3mf_path) {
          api.downloadSource3mf(archive.id).catch((err) => {
            console.error("Source 3MF download failed:", err);
          });
        } else {
          source3mfInputRef.current?.click();
        }
      },
      disabled: !archive.source_3mf_path && !canModify("archives", "update", archive.created_by_id),
      title: !archive.source_3mf_path && !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUploadFiles") : void 0
    },
    ...archive.source_3mf_path ? [
      {
        label: t("archives.menu.replaceSource3mf"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
        onClick: () => source3mfInputRef.current?.click(),
        disabled: !canModify("archives", "update", archive.created_by_id),
        title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
      },
      {
        label: t("archives.menu.removeSource3mf"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
        onClick: () => setShowDeleteSource3mfConfirm(true),
        danger: true,
        disabled: !canModify("archives", "update", archive.created_by_id),
        title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
      }
    ] : [],
    {
      label: archive.f3d_path ? t("archives.menu.replaceF3d") : t("archives.menu.uploadF3d"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
      onClick: () => f3dInputRef.current?.click(),
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    ...archive.f3d_path ? [
      {
        label: t("archives.menu.downloadF3d"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
        onClick: () => {
          api.downloadF3d(archive.id).catch((err) => {
            console.error("F3D download failed:", err);
          });
        }
      },
      {
        label: t("archives.menu.removeF3d"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
        onClick: () => setShowDeleteF3dConfirm(true),
        danger: true,
        disabled: !canModify("archives", "update", archive.created_by_id),
        title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
      }
    ] : [],
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: t("archives.menu.download"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
      onClick: () => {
        api.downloadArchive(archive.id, `${archive.print_name || archive.filename}.3mf`).catch((err) => {
          console.error("Archive download failed:", err);
        });
      },
      disabled: !hasPermission("archives:read"),
      title: !hasPermission("archives:read") ? t("archives.permission.noDownload") : void 0
    },
    {
      label: t("archives.menu.copyDownloadLink"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
      onClick: () => {
        const url = `${window.location.origin}${api.getArchiveDownload(archive.id)}`;
        navigator.clipboard.writeText(url).then(() => {
          showToast(t("archives.toast.linkCopied"));
        }).catch(() => {
          showToast(t("archives.toast.failedCopyLink"), "error");
        });
      },
      disabled: !hasPermission("archives:read"),
      title: !hasPermission("archives:read") ? t("archives.permission.noCopyLink") : void 0
    },
    {
      label: t("archives.menu.qrCode"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "w-4 h-4" }),
      onClick: () => setShowQRCode(true)
    },
    {
      label: archive.photos?.length ? t("archives.menu.viewPhotosCount", { count: archive.photos.length }) : t("archives.menu.viewPhotos"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
      onClick: () => setShowPhotos(true),
      disabled: !archive.photos?.length
    },
    {
      label: t("archives.menu.projectPage"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
      onClick: () => setShowProjectPage(true)
    },
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: archive.is_favorite ? t("archives.menu.removeFromFavorites") : t("archives.menu.addToFavorites"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-4 h-4 ${archive.is_favorite ? "fill-yellow-400 text-yellow-400" : ""}` }),
      onClick: () => favoriteMutation.mutate(),
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    {
      label: t("archives.menu.edit"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" }),
      onClick: () => setShowEdit(true),
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    ...archive.project_id && archive.project_name ? [{
      label: t("archives.menu.goToProject", { name: archive.project_name }),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-4 h-4 text-bambu-green" }),
      onClick: () => window.location.href = "/projects"
    }] : [],
    {
      label: t("archives.menu.addToProject"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-4 h-4" }),
      onClick: () => {
      },
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0,
      submenu: (() => {
        const items = [];
        if (archive.project_id) {
          items.push({
            label: t("archives.menu.removeFromProject"),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
            onClick: () => assignProjectMutation.mutate(null),
            disabled: !canModify("archives", "update", archive.created_by_id)
          });
        }
        if (!projects) {
          items.push({
            label: t("archives.menu.loading"),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
            onClick: () => {
            },
            disabled: true
          });
        } else {
          const activeProjects = projects.filter((p) => p.status === "active");
          if (activeProjects.length === 0) {
            items.push({
              label: t("archives.menu.noProjectsAvailable"),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-4 h-4 opacity-50" }),
              onClick: () => {
              },
              disabled: true
            });
          } else {
            activeProjects.forEach((p) => {
              items.push({
                label: p.name,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full flex-shrink-0", style: { backgroundColor: p.color || "#888" } }),
                onClick: () => assignProjectMutation.mutate(p.id),
                disabled: archive.project_id === p.id || !canModify("archives", "update", archive.created_by_id)
              });
            });
          }
        }
        return items;
      })()
    },
    {
      label: isSelected ? t("archives.menu.deselect") : t("archives.menu.select"),
      icon: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4" }),
      onClick: () => onSelect(archive.id)
    },
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: t("archives.menu.delete"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
      onClick: () => setShowDeleteConfirm(true),
      danger: true,
      disabled: !canModify("archives", "delete", archive.created_by_id),
      title: !canModify("archives", "delete", archive.created_by_id) ? t("archives.permission.noDelete") : void 0
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      "data-archive-id": archive.id,
      className: `relative flex flex-col group ${isSelected ? "ring-2 ring-bambu-green" : ""} ${selectionMode ? "cursor-pointer" : ""}`,
      style: isHighlighted ? { outline: "4px solid #facc15", outlineOffset: "2px" } : void 0,
      onContextMenu: handleContextMenu,
      onClick: selectionMode ? () => onSelect(archive.id) : void 0,
      children: [
        selectionMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "absolute top-2 left-2 z-10 p-1 rounded bg-black/50 hover:bg-black/70 transition-colors",
            onClick: (e) => {
              e.stopPropagation();
              onSelect(archive.id);
            },
            children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-5 h-5 text-bambu-green" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-5 h-5 text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "aspect-video bg-bambu-dark relative flex-shrink-0 overflow-hidden rounded-t-xl",
            onMouseEnter: () => setShowPlateNav(true),
            onMouseLeave: () => setShowPlateNav(false),
            children: [
              archive.thumbnail_path || archive.filename.toLowerCase().endsWith(".3mf") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: currentPlateIndex !== null && plates.length > 0 ? api.getArchivePlateThumbnail(archive.id, plates[displayPlateIndex]?.index ?? 0) : api.getArchiveThumbnail(archive.id, archive.thumbnail_path),
                  alt: archive.print_name || archive.filename,
                  className: "w-full h-full object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-12 h-12 text-bambu-dark-tertiary" }) }),
              isMultiPlate && plates.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: `absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 hover:bg-black/80 transition-all ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
                    onClick: (e) => {
                      e.stopPropagation();
                      setCurrentPlateIndex((prev) => {
                        const current = prev ?? 0;
                        return current > 0 ? current - 1 : plates.length - 1;
                      });
                    },
                    title: t("archives.card.previousPlate"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: `absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 hover:bg-black/80 transition-all ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
                    onClick: (e) => {
                      e.stopPropagation();
                      setCurrentPlateIndex((prev) => {
                        const current = prev ?? 0;
                        return current < plates.length - 1 ? current + 1 : 0;
                      });
                    },
                    title: t("archives.card.nextPlate"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1 px-2 py-1 rounded-full bg-black/50 transition-all ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
                    children: plates.map((plate, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        className: `w-2 h-2 rounded-full transition-colors ${idx === displayPlateIndex ? "bg-bambu-green" : "bg-white/50 hover:bg-white/80"}`,
                        onClick: (e) => {
                          e.stopPropagation();
                          setCurrentPlateIndex(idx);
                        },
                        title: plate.name || t("archives.card.plateNumber", { index: plate.index })
                      },
                      plate.index
                    ))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: `absolute top-2 left-2 p-1.5 rounded bg-black/50 hover:bg-black/70 transition-all ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"} ${selectionMode ? "left-10" : ""}`,
                  onClick: (e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setContextMenu({ x: rect.left, y: rect.bottom + 4 });
                  },
                  title: t("archives.card.moreOptions"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-5 h-5 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: `absolute top-2 right-2 p-1 rounded transition-colors ${canModify("archives", "update", archive.created_by_id) ? "bg-black/50 hover:bg-black/70" : "bg-black/30 cursor-not-allowed"}`,
                  onClick: (e) => {
                    e.stopPropagation();
                    if (canModify("archives", "update", archive.created_by_id)) {
                      favoriteMutation.mutate();
                    }
                  },
                  disabled: !canModify("archives", "update", archive.created_by_id),
                  title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : archive.is_favorite ? t("archives.card.removeFromFavorites") : t("archives.card.addToFavorites"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Star,
                    {
                      className: `w-5 h-5 ${archive.is_favorite ? "text-yellow-400 fill-yellow-400" : "text-white"} ${!canModify("archives", "update", archive.created_by_id) ? "opacity-50" : ""}`
                    }
                  )
                }
              ),
              (archive.status === "failed" || archive.status === "aborted") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-12 px-2 py-1 rounded text-xs bg-status-error/80 text-white", children: archive.status === "aborted" ? t("archives.card.cancelled") : t("archives.card.failed") }),
              archive.duplicate_count > 0 && duplicateSequence > 0 && originalArchiveId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    onNavigateToArchive?.(originalArchiveId);
                  },
                  className: "absolute top-2 right-12 px-2 py-1 rounded text-xs bg-purple-500/80 hover:bg-purple-600/90 text-white flex items-center gap-1 transition-colors cursor-pointer",
                  title: t("archives.viewOriginalPrint", { id: originalArchiveId }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
                    "#",
                    duplicateSequence
                  ]
                }
              ),
              archive.duplicate_count > 0 && duplicateSequence === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "absolute top-2 right-12 px-2 py-1 rounded text-xs bg-purple-500/80 text-white flex items-center gap-1",
                  title: `${archive.duplicate_count} reprint${archive.duplicate_count === 1 ? "" : "s"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "w-3 h-3" }),
                    "+",
                    archive.duplicate_count
                  ]
                }
              ),
              archive.source_3mf_path && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "absolute bottom-2 left-2 p-1.5 rounded bg-black/60 hover:bg-black/80 transition-colors",
                  onClick: (e) => {
                    e.stopPropagation();
                    const sourceName = (archive.print_name || archive.filename || "source").replace(/\.gcode\.3mf$/i, "") + "_source";
                    openInSlicerWithToken(archive.id, sourceName, "source", preferredSlicer);
                  },
                  title: t("archives.card.openSource3mf"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCode, { className: "w-4 h-4 text-orange-400" })
                }
              ),
              archive.f3d_path && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: `absolute bottom-2 ${archive.source_3mf_path ? "left-12" : "left-2"} p-1.5 rounded bg-black/60 hover:bg-black/80 transition-colors`,
                  onClick: (e) => {
                    e.stopPropagation();
                    api.downloadF3d(archive.id).catch((err) => {
                      console.error("F3D download failed:", err);
                    });
                  },
                  title: t("archives.card.downloadF3d"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4 text-cyan-400" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "absolute bottom-2 right-2 p-1.5 rounded bg-black/60 hover:bg-black/80 transition-colors",
                  onClick: (e) => {
                    e.stopPropagation();
                    setShowViewer(true);
                  },
                  title: t("archives.card.preview3d"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-white" })
                }
              ),
              archive.timelapse_path && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "absolute bottom-2 right-12 p-1.5 rounded bg-black/60 hover:bg-black/80 transition-colors",
                  onClick: (e) => {
                    e.stopPropagation();
                    setShowTimelapse(true);
                  },
                  title: t("archives.card.viewTimelapse"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4 text-bambu-green" })
                }
              ),
              archive.photos && archive.photos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `absolute bottom-2 ${archive.timelapse_path ? "right-[5.5rem]" : "right-12"} p-1.5 rounded bg-black/60 hover:bg-black/80 transition-colors`,
                  onClick: (e) => {
                    e.stopPropagation();
                    setShowPhotos(true);
                  },
                  title: archive.photos.length === 1 ? t("archives.card.viewPhoto") : t("archives.card.viewPhotos", { count: archive.photos.length }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4 text-blue-400" }),
                    archive.photos.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-[10px] text-white flex items-center justify-center", children: archive.photos.length })
                  ]
                }
              ),
              linkedFolders && linkedFolders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link$1,
                {
                  to: `/files?folder=${linkedFolders[0].id}`,
                  className: "absolute bottom-2 p-1.5 rounded bg-black/60 hover:bg-black/80 transition-colors",
                  onClick: (e) => e.stopPropagation(),
                  title: t("archives.card.openFolder", { name: linkedFolders[0].name }),
                  style: { left: archive.source_3mf_path ? archive.f3d_path ? "5.5rem" : "3rem" : archive.f3d_path ? "3rem" : "0.5rem" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-4 h-4 text-yellow-400" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-bambu-gray/70 mb-1", children: [
            "#",
            archive.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "min-w-0 font-medium text-white truncate", children: archive.print_name || archive.filename }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 sm:p-1.5 shrink-0",
                onClick: () => setShowEdit(true),
                disabled: !canModify("archives", "update", archive.created_by_id),
                title: !canModify("archives", "update", archive.created_by_id) ? t("archives.card.noPermissionEdit") : t("archives.card.edit"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3 h-3 sm:w-4 sm:h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: printerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-[10px] px-1.5 py-0.5 rounded font-medium ${isSlicedFile(archive) ? "bg-bambu-green/20 text-bambu-green" : "bg-orange-500/20 text-orange-400"}`,
                title: isSlicedFile(archive) ? t("archives.card.slicedFile") : t("archives.card.sourceFile"),
                children: isSlicedFile(archive) ? t("archives.card.gcode") : t("archives.card.source")
              }
            ),
            archive.content_hash && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[10px] px-1.5 py-0.5 rounded font-mono bg-bambu-dark-tertiary/50 text-bambu-gray-light opacity-0 transition-opacity duration-150 group-hover:opacity-100",
                title: `SHA256: ${archive.content_hash}`,
                children: archive.content_hash.slice(0, 8).toUpperCase()
              }
            ),
            archive.project_name && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs px-1.5 py-0.5 rounded-full truncate max-w-[120px]",
                style: {
                  backgroundColor: `${projects?.find((p) => p.id === archive.project_id)?.color || "#6b7280"}20`,
                  color: projects?.find((p) => p.id === archive.project_id)?.color || "#6b7280"
                },
                title: t("archives.card.project", { name: archive.project_name }),
                children: archive.project_name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs mb-4 min-h-[48px]", children: [
            (archive.print_time_seconds || archive.actual_time_seconds) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-bambu-gray", title: archive.time_accuracy ? `Estimated: ${formatDuration(archive.print_time_seconds || 0)}
Actual: ${formatDuration(archive.actual_time_seconds || 0)}
Accuracy: ${archive.time_accuracy.toFixed(0)}%` : archive.actual_time_seconds ? `Actual: ${formatDuration(archive.actual_time_seconds)}` : `Estimated: ${formatDuration(archive.print_time_seconds || 0)}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              formatDuration(archive.actual_time_seconds || archive.print_time_seconds || 0),
              archive.time_accuracy && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] px-1 rounded ${archive.time_accuracy >= 95 && archive.time_accuracy <= 105 ? "bg-bambu-green/20 text-bambu-green" : archive.time_accuracy > 105 ? "bg-blue-500/20 text-blue-400" : "bg-orange-500/20 text-orange-400"}`, children: [
                archive.time_accuracy > 100 ? "+" : "",
                (archive.time_accuracy - 100).toFixed(0),
                "%"
              ] })
            ] }),
            archive.filament_used_grams != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-bambu-gray", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3 h-3" }),
              archive.filament_used_grams.toFixed(1),
              "g"
            ] }),
            (archive.cost != null || archive.energy_cost != null) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-bambu-gray", children: [
              archive.cost != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "w-3 h-3" }),
                currency,
                archive.cost.toFixed(2)
              ] }),
              archive.energy_cost != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", title: `${t("stats.energyUsed")}: ${archive.energy_kwh?.toFixed(3) || "N/A"} kWh`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
                currency,
                archive.energy_cost.toFixed(2)
              ] })
            ] }),
            (archive.layer_height || archive.total_layers) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-bambu-gray", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3" }),
              archive.total_layers && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: archive.total_layers === 1 ? t("archives.card.layer", { count: archive.total_layers }) : t("archives.card.layers", { count: archive.total_layers }) }),
              archive.total_layers && archive.layer_height && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray/50", children: "·" }),
              archive.layer_height && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                archive.layer_height,
                "mm"
              ] })
            ] }),
            archive.object_count != null && archive.object_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-bambu-gray", title: archive.object_count === 1 ? t("archives.card.object", { count: archive.object_count }) : t("archives.card.objects", { count: archive.object_count }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-3 h-3" }),
              archive.object_count === 1 ? t("archives.card.object", { count: archive.object_count }) : t("archives.card.objects", { count: archive.object_count })
            ] }),
            archive.sliced_for_model && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-bambu-gray", title: t("archives.card.slicedFor", { model: archive.sliced_for_model }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
              archive.sliced_for_model
            ] }),
            archive.filament_type && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray text-xs", children: archive.filament_type }),
              archive.filament_color && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 flex-wrap", children: archive.filament_color.split(",").map((color, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-full border border-black/20",
                  style: { backgroundColor: color },
                  title: color
                },
                i
              )) })
            ] })
          ] }),
          (archive.tags || archive.notes) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 mb-3", children: [
            archive.notes && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex items-center gap-1 px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded text-xs",
                title: archive.notes,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "w-3 h-3" })
              }
            ),
            archive.tags?.split(",").map((tag, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-1.5 py-0.5 bg-bambu-dark-tertiary text-bambu-gray-light rounded text-xs",
                children: tag.trim()
              },
              i
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-bambu-gray border-t border-bambu-dark-tertiary pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDateTime(archive.created_at, timeFormat) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              archive.created_by_username && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", title: t("archives.card.uploadedBy", { name: archive.created_by_username }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
                archive.created_by_username
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatFileSize(archive.file_size) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 mt-3", children: [
            isSlicedFile(archive) ? (
              // Sliced file - can print directly
              /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "primary",
                    size: "sm",
                    className: "flex-1 min-w-0 overflow-hidden",
                    onClick: () => setShowReprint(true),
                    disabled: !archive.file_path || !canModify("archives", "reprint", archive.created_by_id),
                    title: !archive.file_path ? t("archives.card.noFileForReprint") : !canModify("archives", "reprint", archive.created_by_id) ? t("archives.card.noPermissionReprint") : void 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline truncate", children: t("archives.card.reprint") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "secondary",
                    size: "sm",
                    className: "flex-1 min-w-0 overflow-hidden",
                    onClick: () => setShowSchedule(true),
                    disabled: !archive.file_path || !hasPermission("queue:create"),
                    title: !archive.file_path ? t("archives.card.noFileForReprint") : !hasPermission("queue:create") ? t("archives.permission.noAddToQueue") : t("archives.card.schedulePrint"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline truncate", children: t("archives.card.schedule") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "secondary",
                    size: "sm",
                    className: "min-w-0 p-1 sm:p-1.5",
                    onClick: () => {
                      const filename = archive.print_name || archive.filename || "model";
                      openInSlicerWithToken(archive.id, filename, "file", preferredSlicer);
                    },
                    title: t("archives.card.openInBambuStudio"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 sm:w-4 sm:h-4" })
                  }
                )
              ] })
            ) : (
              // Source file only - must open in slicer first
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "primary",
                  size: "sm",
                  className: "flex-1 min-w-0 overflow-hidden",
                  onClick: () => {
                    const filename = archive.print_name || archive.filename || "model";
                    openInSlicerWithToken(archive.id, filename, "file", preferredSlicer);
                  },
                  title: t("archives.card.openInBambuStudioToSlice"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline truncate", children: t("archives.card.slice") })
                  ]
                }
              )
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "secondary",
                size: "sm",
                className: "min-w-0 p-1 sm:p-1.5",
                onClick: () => {
                  const url = archive.external_url || archive.makerworld_url;
                  if (url) window.open(url, "_blank");
                },
                disabled: !archive.external_url && !archive.makerworld_url,
                title: archive.external_url ? t("archives.card.externalLink") : archive.makerworld_url ? t("archives.card.makerWorld", { designer: archive.designer || t("archives.card.viewProject") }) : t("archives.card.noExternalLink"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: `w-3 h-3 sm:w-4 sm:h-4 ${!archive.external_url && !archive.makerworld_url ? "opacity-20" : ""}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "secondary",
                size: "sm",
                className: "min-w-0 p-1 sm:p-1.5",
                onClick: () => {
                  api.downloadArchive(archive.id, `${archive.print_name || archive.filename}.3mf`).catch((err) => {
                    console.error("Archive download failed:", err);
                  });
                },
                title: t("archives.card.download"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3 sm:w-4 sm:h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "min-w-0 p-1 sm:p-1.5",
                onClick: () => setShowDeleteConfirm(true),
                disabled: !canModify("archives", "delete", archive.created_by_id),
                title: !canModify("archives", "delete", archive.created_by_id) ? t("archives.card.noPermissionDelete") : t("archives.card.delete"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 sm:w-4 sm:h-4 text-red-400" })
              }
            )
          ] })
        ] }),
        showEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditArchiveModal,
          {
            archive,
            onClose: () => setShowEdit(false)
          }
        ),
        showViewer && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ModelViewerModal,
          {
            archiveId: archive.id,
            title: archive.print_name || archive.filename,
            fileType: getArchiveFileType(archive.filename),
            onClose: () => setShowViewer(false)
          }
        ),
        showReprint && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrintModal,
          {
            mode: "reprint",
            archiveId: archive.id,
            archiveName: archive.print_name || archive.filename,
            onClose: () => setShowReprint(false)
          }
        ),
        showDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("archives.modal.deleteArchive"),
            message: t("archives.modal.deleteConfirm", { name: archive.print_name || archive.filename }),
            confirmText: t("archives.modal.deleteButton"),
            variant: "danger",
            onConfirm: () => {
              deleteMutation.mutate();
              setShowDeleteConfirm(false);
            },
            onCancel: () => setShowDeleteConfirm(false)
          }
        ),
        showDeleteSource3mfConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("archives.modal.removeSource3mf"),
            message: t("archives.modal.removeSource3mfConfirm", { name: archive.print_name || archive.filename }),
            confirmText: t("archives.modal.removeButton"),
            variant: "danger",
            onConfirm: () => {
              source3mfDeleteMutation.mutate();
              setShowDeleteSource3mfConfirm(false);
            },
            onCancel: () => setShowDeleteSource3mfConfirm(false)
          }
        ),
        showDeleteF3dConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("archives.modal.removeF3d"),
            message: t("archives.modal.removeF3dConfirm", { name: archive.print_name || archive.filename }),
            confirmText: t("archives.modal.removeButton"),
            variant: "danger",
            onConfirm: () => {
              f3dDeleteMutation.mutate();
              setShowDeleteF3dConfirm(false);
            },
            onCancel: () => setShowDeleteF3dConfirm(false)
          }
        ),
        showDeleteTimelapseConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("archives.modal.removeTimelapse"),
            message: t("archives.modal.removeTimelapseConfirm", { name: archive.print_name || archive.filename }),
            confirmText: t("archives.modal.removeButton"),
            variant: "danger",
            onConfirm: () => {
              timelapseDeleteMutation.mutate();
              setShowDeleteTimelapseConfirm(false);
            },
            onCancel: () => setShowDeleteTimelapseConfirm(false)
          }
        ),
        contextMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ContextMenu,
          {
            x: contextMenu.x,
            y: contextMenu.y,
            items: contextMenuItems,
            onClose: () => setContextMenu(null)
          }
        ),
        showTimelapse && archive.timelapse_path && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TimelapseViewer,
          {
            src: api.getArchiveTimelapse(archive.id, archive.timelapse_path),
            title: t("archives.modal.timelapse", { name: archive.print_name || archive.filename }),
            downloadFilename: `${archive.print_name || archive.filename}_timelapse.mp4`,
            archiveId: archive.id,
            onClose: () => setShowTimelapse(false),
            onEdit: () => {
              queryClient.invalidateQueries({ queryKey: ["archives"] });
              setShowTimelapse(false);
            }
          }
        ),
        showTimelapseSelect && availableTimelapses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card-dark rounded-lg max-w-lg w-full max-h-[80vh] flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: t("archives.modal.selectTimelapse") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mt-1", children: t("archives.modal.selectTimelapseDesc") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  setShowTimelapseSelect(false);
                  setAvailableTimelapses([]);
                },
                className: "text-gray-400 hover:text-white p-1",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 p-2", children: availableTimelapses.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => timelapseSelectMutation.mutate(file.name),
              disabled: timelapseSelectMutation.isPending,
              className: "w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-3 disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-8 h-8 text-bambu-green flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium truncate", children: file.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400", children: [
                    formatFileSize(file.size),
                    file.mtime && ` • ${formatDateTime(file.mtime, timeFormat)}`
                  ] })
                ] })
              ]
            },
            file.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "secondary",
              onClick: () => {
                setShowTimelapseSelect(false);
                setAvailableTimelapses([]);
              },
              className: "w-full",
              children: t("common.cancel")
            }
          ) })
        ] }) }),
        showQRCode && /* @__PURE__ */ jsxRuntimeExports.jsx(
          QRCodeModal,
          {
            archiveId: archive.id,
            archiveName: archive.print_name || archive.filename,
            onClose: () => setShowQRCode(false)
          }
        ),
        showPhotos && archive.photos && archive.photos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoGalleryModal,
          {
            archiveId: archive.id,
            archiveName: archive.print_name || archive.filename,
            photos: archive.photos,
            onClose: () => setShowPhotos(false),
            onDelete: async (filename) => {
              try {
                await api.deleteArchivePhoto(archive.id, filename);
                queryClient.invalidateQueries({ queryKey: ["archives"] });
                showToast(t("archives.toast.photoDeleted"));
              } catch {
                showToast(t("archives.toast.failedDeletePhoto"), "error");
              }
            }
          }
        ),
        showProjectPage && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProjectPageModal,
          {
            archiveId: archive.id,
            archiveName: archive.print_name || archive.filename,
            onClose: () => setShowProjectPage(false)
          }
        ),
        showSchedule && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrintModal,
          {
            mode: "add-to-queue",
            archiveId: archive.id,
            archiveName: archive.print_name || archive.filename,
            onClose: () => setShowSchedule(false)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: source3mfInputRef,
            type: "file",
            accept: ".3mf",
            className: "hidden",
            onChange: (e) => {
              const file = e.target.files?.[0];
              if (file) {
                source3mfUploadMutation.mutate(file);
              }
              e.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: f3dInputRef,
            type: "file",
            accept: ".f3d",
            className: "hidden",
            onChange: (e) => {
              const file = e.target.files?.[0];
              if (file) {
                f3dUploadMutation.mutate(file);
              }
              e.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: timelapseInputRef,
            type: "file",
            accept: ".mp4,.avi,.mkv",
            className: "hidden",
            onChange: (e) => {
              const file = e.target.files?.[0];
              if (file) {
                timelapseUploadMutation.mutate(file);
              }
              e.target.value = "";
            }
          }
        )
      ]
    }
  );
}
function ArchiveListRow({
  archive,
  printerName,
  isSelected,
  onSelect,
  selectionMode,
  projects,
  isHighlighted,
  preferredSlicer = "bambu_studio",
  t,
  onNavigateToArchive
}) {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission, canModify } = useAuth();
  const [showEdit, setShowEdit] = reactExports.useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  const [showReprint, setShowReprint] = reactExports.useState(false);
  const [showSchedule, setShowSchedule] = reactExports.useState(false);
  const [showViewer, setShowViewer] = reactExports.useState(false);
  const [showTimelapse, setShowTimelapse] = reactExports.useState(false);
  const [showTimelapseSelect, setShowTimelapseSelect] = reactExports.useState(false);
  const [availableTimelapses, setAvailableTimelapses] = reactExports.useState([]);
  const [showQRCode, setShowQRCode] = reactExports.useState(false);
  const [showPhotos, setShowPhotos] = reactExports.useState(false);
  const [showProjectPage, setShowProjectPage] = reactExports.useState(false);
  const [showDeleteSource3mfConfirm, setShowDeleteSource3mfConfirm] = reactExports.useState(false);
  const [showDeleteF3dConfirm, setShowDeleteF3dConfirm] = reactExports.useState(false);
  const [showDeleteTimelapseConfirm, setShowDeleteTimelapseConfirm] = reactExports.useState(false);
  const [contextMenu, setContextMenu] = reactExports.useState(null);
  const source3mfInputRef = reactExports.useRef(null);
  const f3dInputRef = reactExports.useRef(null);
  const timelapseInputRef = reactExports.useRef(null);
  const duplicateSequence = archive.duplicate_sequence ?? 0;
  const originalArchiveId = archive.original_archive_id ?? null;
  const timelapseDeleteMutation = useMutation({
    mutationFn: () => api.deleteArchiveTimelapse(archive.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.timelapseRemoved"));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedRemoveTimelapse"), "error");
    }
  });
  const timelapseUploadMutation = useMutation({
    mutationFn: (file) => api.uploadArchiveTimelapse(archive.id, file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.timelapseUploaded", { filename: data.filename }));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedUploadTimelapse"), "error");
    }
  });
  const source3mfUploadMutation = useMutation({
    mutationFn: (file) => api.uploadSource3mf(archive.id, file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.source3mfAttached", { filename: data.filename }));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedUploadSource3mf"), "error");
    }
  });
  const source3mfDeleteMutation = useMutation({
    mutationFn: () => api.deleteSource3mf(archive.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.source3mfRemoved"));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedRemoveSource3mf"), "error");
    }
  });
  const f3dUploadMutation = useMutation({
    mutationFn: (file) => api.uploadF3d(archive.id, file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.f3dAttached", { filename: data.filename }));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedUploadF3d"), "error");
    }
  });
  const f3dDeleteMutation = useMutation({
    mutationFn: () => api.deleteF3d(archive.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.f3dRemoved"));
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedRemoveF3d"), "error");
    }
  });
  const timelapseScanMutation = useMutation({
    mutationFn: () => api.scanArchiveTimelapse(archive.id),
    onSuccess: (data) => {
      if (data.status === "attached") {
        queryClient.invalidateQueries({ queryKey: ["archives"] });
        showToast(t("archives.toast.timelapseAttached", { filename: data.filename }));
      } else if (data.status === "exists") {
        showToast(t("archives.toast.timelapseAlreadyAttached"));
      } else if (data.status === "not_found" && data.available_files && data.available_files.length > 0) {
        setAvailableTimelapses(data.available_files);
        setShowTimelapseSelect(true);
      } else {
        showToast(data.message || t("archives.toast.noMatchingTimelapse"), "warning");
      }
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedScanTimelapse"), "error");
    }
  });
  const timelapseSelectMutation = useMutation({
    mutationFn: (filename) => api.selectArchiveTimelapse(archive.id, filename),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.timelapseAttached", { filename: data.filename }));
      setShowTimelapseSelect(false);
      setAvailableTimelapses([]);
    },
    onError: (error) => {
      showToast(error.message || t("archives.toast.failedAttachTimelapse"), "error");
    }
  });
  const deleteMutation = useMutation({
    mutationFn: () => api.deleteArchive(archive.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(t("archives.toast.archiveDeleted"));
    },
    onError: () => {
      showToast(t("archives.toast.failedDeleteArchive"), "error");
    }
  });
  const favoriteMutation = useMutation({
    mutationFn: () => api.toggleFavorite(archive.id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      showToast(data.is_favorite ? t("archives.toast.addedToFavorites") : t("archives.toast.removedFromFavorites"));
    }
  });
  const { data: linkedFolders } = useQuery({
    queryKey: ["archive-folders", archive.id],
    queryFn: () => api.getLibraryFoldersByArchive(archive.id)
  });
  const assignProjectMutation = useMutation({
    mutationFn: (projectId) => api.updateArchive(archive.id, { project_id: projectId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      showToast(t("archives.toast.projectUpdated"));
    },
    onError: () => {
      showToast(t("archives.toast.failedUpdateProject"), "error");
    }
  });
  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };
  const isGcodeFile = isSlicedFile(archive);
  const contextMenuItems = [
    ...isGcodeFile ? [
      {
        label: t("archives.menu.print"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
        onClick: () => setShowReprint(true),
        disabled: !archive.file_path || !canModify("archives", "reprint", archive.created_by_id),
        title: !archive.file_path ? t("archives.card.noFileForReprint") : !canModify("archives", "reprint", archive.created_by_id) ? t("archives.permission.noReprint") : void 0
      },
      {
        label: t("archives.menu.schedule"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
        onClick: () => setShowSchedule(true),
        disabled: !archive.file_path || !hasPermission("queue:create"),
        title: !archive.file_path ? t("archives.card.noFileForReprint") : !hasPermission("queue:create") ? t("archives.permission.noAddToQueue") : void 0
      },
      {
        label: t("archives.menu.openInBambuStudio"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
        onClick: () => {
          const filename = archive.print_name || archive.filename || "model";
          openInSlicerWithToken(archive.id, filename, "file", preferredSlicer);
        },
        disabled: !archive.file_path,
        title: !archive.file_path ? t("archives.card.noFileForReprint") : void 0
      }
    ] : [
      {
        label: t("archives.menu.slice"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
        onClick: () => {
          const filename = archive.print_name || archive.filename || "model";
          openInSlicerWithToken(archive.id, filename, "file", preferredSlicer);
        }
      }
    ],
    {
      label: archive.external_url ? t("archives.menu.externalLink") : t("archives.menu.viewOnMakerWorld"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" }),
      onClick: () => {
        const url = archive.external_url || archive.makerworld_url;
        if (url) window.open(url, "_blank");
      },
      disabled: !archive.external_url && !archive.makerworld_url
    },
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: t("archives.menu.preview3d"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
      onClick: () => setShowViewer(true)
    },
    {
      label: t("archives.menu.viewTimelapse"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4" }),
      onClick: () => setShowTimelapse(true),
      disabled: !archive.timelapse_path
    },
    {
      label: t("archives.menu.scanForTimelapse"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ScanSearch, { className: "w-4 h-4" }),
      onClick: () => timelapseScanMutation.mutate(),
      disabled: !archive.printer_id || !!archive.timelapse_path || timelapseScanMutation.isPending || !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    {
      label: t("archives.menu.uploadTimelapse"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
      onClick: () => timelapseInputRef.current?.click(),
      disabled: !!archive.timelapse_path || !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    ...archive.timelapse_path ? [{
      label: t("archives.menu.removeTimelapse"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
      onClick: () => setShowDeleteTimelapseConfirm(true),
      danger: true,
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    }] : [],
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: archive.source_3mf_path ? t("archives.menu.downloadSource3mf") : t("archives.menu.uploadSource3mf"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCode, { className: "w-4 h-4" }),
      onClick: () => {
        if (archive.source_3mf_path) {
          api.downloadSource3mf(archive.id).catch((err) => {
            console.error("Source 3MF download failed:", err);
          });
        } else {
          source3mfInputRef.current?.click();
        }
      },
      disabled: !archive.source_3mf_path && !canModify("archives", "update", archive.created_by_id),
      title: !archive.source_3mf_path && !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUploadFiles") : void 0
    },
    ...archive.source_3mf_path ? [
      {
        label: t("archives.menu.replaceSource3mf"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
        onClick: () => source3mfInputRef.current?.click(),
        disabled: !canModify("archives", "update", archive.created_by_id),
        title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
      },
      {
        label: t("archives.menu.removeSource3mf"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
        onClick: () => setShowDeleteSource3mfConfirm(true),
        danger: true,
        disabled: !canModify("archives", "update", archive.created_by_id),
        title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
      }
    ] : [],
    {
      label: archive.f3d_path ? t("archives.menu.replaceF3d") : t("archives.menu.uploadF3d"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" }),
      onClick: () => f3dInputRef.current?.click(),
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    ...archive.f3d_path ? [
      {
        label: t("archives.menu.downloadF3d"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
        onClick: () => {
          api.downloadF3d(archive.id).catch((err) => {
            console.error("F3D download failed:", err);
          });
        }
      },
      {
        label: t("archives.menu.removeF3d"),
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
        onClick: () => setShowDeleteF3dConfirm(true),
        danger: true,
        disabled: !canModify("archives", "update", archive.created_by_id),
        title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
      }
    ] : [],
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: t("archives.menu.download"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
      onClick: () => {
        api.downloadArchive(archive.id, `${archive.print_name || archive.filename}.3mf`).catch((err) => {
          console.error("Archive download failed:", err);
        });
      },
      disabled: !hasPermission("archives:read"),
      title: !hasPermission("archives:read") ? t("archives.permission.noDownload") : void 0
    },
    {
      label: t("archives.menu.copyDownloadLink"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
      onClick: () => {
        const url = `${window.location.origin}${api.getArchiveDownload(archive.id)}`;
        navigator.clipboard.writeText(url).then(() => {
          showToast(t("archives.toast.linkCopied"));
        }).catch(() => {
          showToast(t("archives.toast.failedCopyLink"), "error");
        });
      },
      disabled: !hasPermission("archives:read"),
      title: !hasPermission("archives:read") ? t("archives.permission.noCopyLink") : void 0
    },
    {
      label: t("archives.menu.qrCode"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "w-4 h-4" }),
      onClick: () => setShowQRCode(true)
    },
    {
      label: archive.photos?.length ? t("archives.menu.viewPhotosCount", { count: archive.photos.length }) : t("archives.menu.viewPhotos"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
      onClick: () => setShowPhotos(true),
      disabled: !archive.photos?.length
    },
    {
      label: t("archives.menu.projectPage"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
      onClick: () => setShowProjectPage(true)
    },
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: archive.is_favorite ? t("archives.menu.removeFromFavorites") : t("archives.menu.addToFavorites"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-4 h-4 ${archive.is_favorite ? "fill-yellow-400 text-yellow-400" : ""}` }),
      onClick: () => favoriteMutation.mutate(),
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    {
      label: t("archives.menu.edit"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" }),
      onClick: () => setShowEdit(true),
      disabled: !canModify("archives", "update", archive.created_by_id),
      title: !canModify("archives", "update", archive.created_by_id) ? t("archives.permission.noUpdateArchives") : void 0
    },
    ...archive.project_id && archive.project_name ? [{
      label: t("archives.menu.goToProject", { name: archive.project_name }),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-4 h-4 text-bambu-green" }),
      onClick: () => window.location.href = "/projects"
    }] : [],
    {
      label: t("archives.menu.addToProject"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-4 h-4" }),
      onClick: () => {
      },
      submenu: (() => {
        const items = [];
        if (archive.project_id) {
          items.push({
            label: t("archives.menu.removeFromProject"),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
            onClick: () => assignProjectMutation.mutate(null)
          });
        }
        if (!projects) {
          items.push({
            label: t("archives.menu.loading"),
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
            onClick: () => {
            },
            disabled: true
          });
        } else {
          const activeProjects = projects.filter((p) => p.status === "active");
          if (activeProjects.length === 0) {
            items.push({
              label: t("archives.menu.noProjectsAvailable"),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-4 h-4 opacity-50" }),
              onClick: () => {
              },
              disabled: true
            });
          } else {
            activeProjects.forEach((p) => {
              items.push({
                label: p.name,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full flex-shrink-0", style: { backgroundColor: p.color || "#888" } }),
                onClick: () => assignProjectMutation.mutate(p.id),
                disabled: archive.project_id === p.id
              });
            });
          }
        }
        return items;
      })()
    },
    {
      label: isSelected ? t("archives.menu.deselect") : t("archives.menu.select"),
      icon: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4" }),
      onClick: () => onSelect(archive.id)
    },
    { label: "", divider: true, onClick: () => {
    } },
    {
      label: t("archives.menu.delete"),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
      onClick: () => setShowDeleteConfirm(true),
      danger: true,
      disabled: !canModify("archives", "delete", archive.created_by_id),
      title: !canModify("archives", "delete", archive.created_by_id) ? t("archives.permission.noDelete") : void 0
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-archive-id": archive.id,
        className: `grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-bambu-dark-tertiary/30 ${isSelected ? "bg-bambu-green/10" : ""}`,
        style: isHighlighted ? { outline: "4px solid #facc15", outlineOffset: "-4px" } : void 0,
        onContextMenu: handleContextMenu,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1 flex items-center gap-2", children: [
            selectionMode && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onSelect(archive.id), children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-bambu-green" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4 text-bambu-gray" }) }),
            archive.thumbnail_path || archive.filename.toLowerCase().endsWith(".3mf") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: api.getArchiveThumbnail(archive.id, archive.thumbnail_path),
                alt: "",
                className: "w-10 h-10 object-cover rounded"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-bambu-dark rounded flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-5 h-5 text-bambu-dark-tertiary" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm truncate", children: archive.print_name || archive.filename }),
              (archive.status === "failed" || archive.status === "aborted") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] leading-tight bg-status-error/80 text-white flex-shrink-0", children: archive.status === "aborted" ? t("archives.card.cancelled") : t("archives.card.failed") }),
              archive.duplicate_count > 0 && duplicateSequence > 0 && originalArchiveId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    onNavigateToArchive?.(originalArchiveId);
                  },
                  className: "px-1.5 py-0.5 rounded text-[10px] leading-tight bg-purple-500/80 hover:bg-purple-600/90 text-white flex-shrink-0 transition-colors flex items-center gap-1",
                  title: t("archives.viewOriginalPrint", { id: originalArchiveId }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
                    "#",
                    duplicateSequence
                  ]
                }
              ),
              archive.duplicate_count > 0 && duplicateSequence === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "px-1.5 py-0.5 rounded text-[10px] leading-tight bg-purple-500/80 text-white flex-shrink-0 flex items-center gap-1",
                  title: `${archive.duplicate_count} reprint${archive.duplicate_count === 1 ? "" : "s"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "w-3 h-3" }),
                    "+",
                    archive.duplicate_count
                  ]
                }
              ),
              archive.timelapse_path && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: t("archives.list.hasTimelapse"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-3.5 h-3.5 text-bambu-green flex-shrink-0" }) }),
              linkedFolders && linkedFolders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link$1,
                {
                  to: `/files?folder=${linkedFolders[0].id}`,
                  className: "flex-shrink-0",
                  title: t("archives.card.openFolder", { name: linkedFolders[0].name }),
                  onClick: (e) => e.stopPropagation(),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-3.5 h-3.5 text-yellow-400" })
                }
              )
            ] }),
            (archive.filament_type || archive.sliced_for_model) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
              archive.sliced_for_model && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray flex items-center gap-1", title: t("archives.card.slicedFor", { model: archive.sliced_for_model }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-2.5 h-2.5" }),
                archive.sliced_for_model
              ] }),
              archive.sliced_for_model && archive.filament_type && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray/50", children: "·" }),
              archive.filament_type && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: archive.filament_type }),
              archive.filament_color && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 flex-wrap", children: archive.filament_color.split(",").map((color, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-2.5 h-2.5 rounded-full border border-black/20",
                  style: { backgroundColor: color },
                  title: color
                },
                i
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-sm text-bambu-gray truncate", children: printerName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-sm text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: formatDateOnly(archive.created_at) }),
            archive.created_by_username && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs opacity-75", title: t("archives.card.uploadedBy", { name: archive.created_by_username }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
              archive.created_by_username
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-sm text-bambu-gray", children: formatFileSize(archive.file_size) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex justify-end gap-1", children: [
            isSlicedFile(archive) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setShowReprint(true),
                disabled: !canModify("archives", "reprint", archive.created_by_id),
                title: !canModify("archives", "reprint", archive.created_by_id) ? t("archives.card.noPermissionReprint") : t("archives.card.reprint"),
                className: "text-bambu-green hover:text-bambu-green-light hover:bg-bambu-green/10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  const filename = archive.print_name || archive.filename || "model";
                  openInSlicerWithToken(archive.id, filename, "file", preferredSlicer);
                },
                title: t("archives.card.openInBambuStudio"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" })
              }
            ),
            (archive.external_url || archive.makerworld_url) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => window.open(archive.external_url || archive.makerworld_url, "_blank"),
                title: archive.external_url ? t("archives.card.externalLink") : "MakerWorld",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  api.downloadArchive(archive.id, `${archive.print_name || archive.filename}.3mf`).catch((err) => {
                    console.error("Archive download failed:", err);
                  });
                },
                title: t("archives.card.download"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setShowEdit(true),
                disabled: !canModify("archives", "update", archive.created_by_id),
                title: !canModify("archives", "update", archive.created_by_id) ? t("archives.card.noPermissionEdit") : t("archives.card.edit"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setShowDeleteConfirm(true),
                disabled: !canModify("archives", "delete", archive.created_by_id),
                title: !canModify("archives", "delete", archive.created_by_id) ? t("archives.card.noPermissionDelete") : t("archives.card.delete"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 text-red-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: (e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setContextMenu({ x: rect.left, y: rect.bottom + 4 });
                },
                title: t("archives.card.moreOptions"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4" })
              }
            )
          ] })
        ]
      }
    ),
    showEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditArchiveModal,
      {
        archive,
        onClose: () => setShowEdit(false)
      }
    ),
    showViewer && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModelViewerModal,
      {
        archiveId: archive.id,
        title: archive.print_name || archive.filename,
        fileType: getArchiveFileType(archive.filename),
        onClose: () => setShowViewer(false)
      }
    ),
    showReprint && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PrintModal,
      {
        mode: "reprint",
        archiveId: archive.id,
        archiveName: archive.print_name || archive.filename,
        onClose: () => setShowReprint(false)
      }
    ),
    showDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("archives.modal.deleteArchive"),
        message: t("archives.modal.deleteConfirm", { name: archive.print_name || archive.filename }),
        confirmText: t("archives.modal.deleteButton"),
        variant: "danger",
        onConfirm: () => {
          deleteMutation.mutate();
          setShowDeleteConfirm(false);
        },
        onCancel: () => setShowDeleteConfirm(false)
      }
    ),
    showDeleteSource3mfConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("archives.modal.removeSource3mf"),
        message: t("archives.modal.removeSource3mfConfirm", { name: archive.print_name || archive.filename }),
        confirmText: t("archives.modal.removeButton"),
        variant: "danger",
        onConfirm: () => {
          source3mfDeleteMutation.mutate();
          setShowDeleteSource3mfConfirm(false);
        },
        onCancel: () => setShowDeleteSource3mfConfirm(false)
      }
    ),
    showDeleteF3dConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("archives.modal.removeF3d"),
        message: t("archives.modal.removeF3dConfirm", { name: archive.print_name || archive.filename }),
        confirmText: t("archives.modal.removeButton"),
        variant: "danger",
        onConfirm: () => {
          f3dDeleteMutation.mutate();
          setShowDeleteF3dConfirm(false);
        },
        onCancel: () => setShowDeleteF3dConfirm(false)
      }
    ),
    showDeleteTimelapseConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("archives.modal.removeTimelapse"),
        message: t("archives.modal.removeTimelapseConfirm", { name: archive.print_name || archive.filename }),
        confirmText: t("archives.modal.removeButton"),
        variant: "danger",
        onConfirm: () => {
          timelapseDeleteMutation.mutate();
          setShowDeleteTimelapseConfirm(false);
        },
        onCancel: () => setShowDeleteTimelapseConfirm(false)
      }
    ),
    contextMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ContextMenu,
      {
        x: contextMenu.x,
        y: contextMenu.y,
        items: contextMenuItems,
        onClose: () => setContextMenu(null)
      }
    ),
    showTimelapse && archive.timelapse_path && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TimelapseViewer,
      {
        src: api.getArchiveTimelapse(archive.id, archive.timelapse_path),
        title: t("archives.modal.timelapse", { name: archive.print_name || archive.filename }),
        downloadFilename: `${archive.print_name || archive.filename}_timelapse.mp4`,
        archiveId: archive.id,
        onClose: () => setShowTimelapse(false),
        onEdit: () => {
          queryClient.invalidateQueries({ queryKey: ["archives"] });
          setShowTimelapse(false);
        }
      }
    ),
    showTimelapseSelect && availableTimelapses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card-dark rounded-lg max-w-lg w-full max-h-[80vh] flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: t("archives.modal.selectTimelapse") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 mt-1", children: t("archives.modal.selectTimelapseDesc") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setShowTimelapseSelect(false);
              setAvailableTimelapses([]);
            },
            className: "text-gray-400 hover:text-white p-1",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 p-2", children: availableTimelapses.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => timelapseSelectMutation.mutate(file.name),
          disabled: timelapseSelectMutation.isPending,
          className: "w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors mb-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-white", children: file.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-400 flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatFileSize(file.size) }),
              file.mtime && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDateOnly(file.mtime) })
            ] })
          ]
        },
        file.name
      )) })
    ] }) }),
    showQRCode && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QRCodeModal,
      {
        archiveId: archive.id,
        archiveName: archive.print_name || archive.filename,
        onClose: () => setShowQRCode(false)
      }
    ),
    showPhotos && archive.photos && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PhotoGalleryModal,
      {
        archiveId: archive.id,
        archiveName: archive.print_name || archive.filename,
        photos: archive.photos,
        onClose: () => setShowPhotos(false),
        onDelete: async (filename) => {
          try {
            await api.deleteArchivePhoto(archive.id, filename);
            queryClient.invalidateQueries({ queryKey: ["archives"] });
            showToast(t("archives.toast.photoDeleted"));
          } catch {
            showToast(t("archives.toast.failedDeletePhoto"), "error");
          }
        }
      }
    ),
    showProjectPage && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProjectPageModal,
      {
        archiveId: archive.id,
        archiveName: archive.print_name || archive.filename,
        onClose: () => setShowProjectPage(false)
      }
    ),
    showSchedule && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PrintModal,
      {
        mode: "add-to-queue",
        archiveId: archive.id,
        archiveName: archive.print_name || archive.filename,
        onClose: () => setShowSchedule(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: source3mfInputRef,
        type: "file",
        accept: ".3mf",
        className: "hidden",
        onChange: (e) => {
          const file = e.target.files?.[0];
          if (file) {
            source3mfUploadMutation.mutate(file);
          }
          e.target.value = "";
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: f3dInputRef,
        type: "file",
        accept: ".f3d",
        className: "hidden",
        onChange: (e) => {
          const file = e.target.files?.[0];
          if (file) {
            f3dUploadMutation.mutate(file);
          }
          e.target.value = "";
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: timelapseInputRef,
        type: "file",
        accept: ".mp4,.avi,.mkv",
        className: "hidden",
        onChange: (e) => {
          const file = e.target.files?.[0];
          if (file) {
            timelapseUploadMutation.mutate(file);
          }
          e.target.value = "";
        }
      }
    )
  ] });
}
function getArchiveCollections(t) {
  return [
    { id: "all", label: t("archives.page.allArchives"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-4 h-4" }) },
    { id: "recent", label: t("archives.page.last24Hours"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }) },
    { id: "this-week", label: t("archives.page.thisWeek"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }) },
    { id: "this-month", label: t("archives.page.thisMonth"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }) },
    { id: "favorites", label: t("archives.page.favorites"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }) },
    { id: "failed", label: t("archives.page.failedPrints"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4" }) },
    { id: "duplicates", label: t("archives.page.duplicates"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }) }
  ];
}
function ArchivesPage() {
  const { t } = useTranslation();
  const collections = getArchiveCollections(t);
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission, hasAnyPermission } = useAuth();
  const searchInputRef = reactExports.useRef(null);
  const [search, setSearch] = reactExports.useState("");
  const [filterPrinter, setFilterPrinter] = reactExports.useState(() => {
    const saved = localStorage.getItem("archiveFilterPrinter");
    return saved ? Number(saved) : null;
  });
  const [filterMaterial, setFilterMaterial] = reactExports.useState(
    () => localStorage.getItem("archiveFilterMaterial")
  );
  const [filterColors, setFilterColors] = reactExports.useState(() => {
    const saved = localStorage.getItem("archiveFilterColors");
    return saved ? new Set(JSON.parse(saved)) : /* @__PURE__ */ new Set();
  });
  const [colorFilterMode, setColorFilterMode] = reactExports.useState(
    () => localStorage.getItem("archiveColorFilterMode") || "or"
  );
  const [filterFavorites, setFilterFavorites] = reactExports.useState(
    () => localStorage.getItem("archiveFilterFavorites") === "true"
  );
  const [hideFailed, setHideFailed] = reactExports.useState(
    () => localStorage.getItem("archiveHideFailed") === "true"
  );
  const [hideDuplicates, setHideDuplicates] = reactExports.useState(
    () => localStorage.getItem("archiveHideDuplicates") === "true"
  );
  const [filterTag, setFilterTag] = reactExports.useState(
    () => localStorage.getItem("archiveFilterTag")
  );
  const [filterFileType, setFilterFileType] = reactExports.useState(
    () => localStorage.getItem("archiveFilterFileType") || "all"
  );
  const [showUpload, setShowUpload] = reactExports.useState(false);
  const [uploadFiles, setUploadFiles] = reactExports.useState([]);
  const [isDraggingOver, setIsDraggingOver] = reactExports.useState(false);
  const [selectedIds, setSelectedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [isSelectionMode, setIsSelectionMode] = reactExports.useState(false);
  const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = reactExports.useState(false);
  const [showBatchTag, setShowBatchTag] = reactExports.useState(false);
  const [showBatchProject, setShowBatchProject] = reactExports.useState(false);
  const [viewMode, setViewMode] = reactExports.useState(
    () => localStorage.getItem("archiveViewMode") || "grid"
  );
  const [sortBy, setSortBy] = reactExports.useState(
    () => localStorage.getItem("archiveSortBy") || "date-desc"
  );
  const [collection, setCollection] = reactExports.useState(
    () => localStorage.getItem("archiveCollection") || "all"
  );
  const [showExportMenu, setShowExportMenu] = reactExports.useState(false);
  const [isExporting, setIsExporting] = reactExports.useState(false);
  const [showCompareModal, setShowCompareModal] = reactExports.useState(false);
  const [showTagManagement, setShowTagManagement] = reactExports.useState(false);
  const [highlightedArchiveId, setHighlightedArchiveId] = reactExports.useState(null);
  const [pendingNavigationArchiveId, setPendingNavigationArchiveId] = reactExports.useState(null);
  const [logFilterUser, setLogFilterUser] = reactExports.useState(
    () => localStorage.getItem("logFilterUser") || null
  );
  const [logFilterStatus, setLogFilterStatus] = reactExports.useState(
    () => localStorage.getItem("logFilterStatus")
  );
  const [logFilterDateFrom, setLogFilterDateFrom] = reactExports.useState(
    () => localStorage.getItem("logFilterDateFrom") || ""
  );
  const [logFilterDateTo, setLogFilterDateTo] = reactExports.useState(
    () => localStorage.getItem("logFilterDateTo") || ""
  );
  const [logOffset, setLogOffset] = reactExports.useState(() => {
    const saved = localStorage.getItem("logOffset");
    return saved ? Number(saved) : 0;
  });
  const [showClearLogConfirm, setShowClearLogConfirm] = reactExports.useState(false);
  const [logPageSize, setLogPageSize] = reactExports.useState(() => {
    const saved = localStorage.getItem("logPageSize");
    return saved ? Number(saved) : 25;
  });
  const handleNavigateToArchive = reactExports.useCallback((archiveId) => {
    setPendingNavigationArchiveId(archiveId);
    setHighlightedArchiveId(archiveId);
  }, []);
  reactExports.useEffect(() => {
    if (highlightedArchiveId) {
      const scrollTimer = setTimeout(() => {
        const element = document.querySelector(`[data-archive-id="${highlightedArchiveId}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (pendingNavigationArchiveId === highlightedArchiveId) {
          showToast(t("archives.originalPrintNotVisible"), "warning");
        }
        if (pendingNavigationArchiveId === highlightedArchiveId) {
          setPendingNavigationArchiveId(null);
        }
      }, 100);
      const clearTimer = setTimeout(() => setHighlightedArchiveId(null), 5e3);
      return () => {
        clearTimeout(scrollTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [highlightedArchiveId, pendingNavigationArchiveId, showToast, t]);
  const { data: archives, isLoading } = useQuery({
    queryKey: ["archives", filterPrinter],
    queryFn: () => api.getArchives(filterPrinter || void 0)
  });
  const { data: printers } = useQuery({
    queryKey: ["printers"],
    queryFn: api.getPrinters
  });
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => api.getProjects()
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: api.getUsers,
    enabled: viewMode === "log"
  });
  const { data: printLogData, isLoading: isLogLoading } = useQuery({
    queryKey: ["print-log", filterPrinter, logFilterUser, logFilterStatus, logFilterDateFrom, logFilterDateTo, search, logOffset, logPageSize],
    queryFn: () => api.getPrintLog({
      search: search || void 0,
      printerId: filterPrinter || void 0,
      username: logFilterUser || void 0,
      status: logFilterStatus || void 0,
      dateFrom: logFilterDateFrom || void 0,
      dateTo: logFilterDateTo || void 0,
      limit: logPageSize,
      offset: logOffset
    }),
    enabled: viewMode === "log"
  });
  const timeFormat = settings?.time_format || "system";
  const preferredSlicer = settings?.preferred_slicer || "bambu_studio";
  const currency = getCurrencySymbol(settings?.currency || "USD");
  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids) => {
      await Promise.all(ids.map((id) => api.deleteArchive(id)));
      return ids.length;
    },
    onSuccess: (count) => {
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      setSelectedIds(/* @__PURE__ */ new Set());
      showToast(t("archives.page.archivesDeleted", { count }));
    },
    onError: () => {
      showToast(t("archives.toast.failedDeleteArchives"), "error");
    }
  });
  const clearLogMutation = useMutation({
    mutationFn: () => api.clearPrintLog(),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["print-log"] });
      setLogOffset(0);
      showToast(t("archives.log.cleared", { count: data.deleted }));
    },
    onError: () => {
      showToast(t("archives.log.clearFailed"), "error");
    }
  });
  reactExports.useEffect(() => {
    if (filterPrinter !== null) {
      localStorage.setItem("archiveFilterPrinter", filterPrinter.toString());
    } else {
      localStorage.removeItem("archiveFilterPrinter");
    }
  }, [filterPrinter]);
  reactExports.useEffect(() => {
    if (filterMaterial) {
      localStorage.setItem("archiveFilterMaterial", filterMaterial);
    } else {
      localStorage.removeItem("archiveFilterMaterial");
    }
  }, [filterMaterial]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveFilterColors", JSON.stringify([...filterColors]));
  }, [filterColors]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveColorFilterMode", colorFilterMode);
  }, [colorFilterMode]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveFilterFavorites", filterFavorites.toString());
  }, [filterFavorites]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveHideFailed", hideFailed.toString());
  }, [hideFailed]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveHideDuplicates", hideDuplicates.toString());
  }, [hideDuplicates]);
  reactExports.useEffect(() => {
    if (filterTag) {
      localStorage.setItem("archiveFilterTag", filterTag);
    } else {
      localStorage.removeItem("archiveFilterTag");
    }
  }, [filterTag]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveFilterFileType", filterFileType);
  }, [filterFileType]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveViewMode", viewMode);
  }, [viewMode]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveSortBy", sortBy);
  }, [sortBy]);
  reactExports.useEffect(() => {
    localStorage.setItem("archiveCollection", collection);
  }, [collection]);
  reactExports.useEffect(() => {
    if (logFilterUser) {
      localStorage.setItem("logFilterUser", logFilterUser);
    } else {
      localStorage.removeItem("logFilterUser");
    }
  }, [logFilterUser]);
  reactExports.useEffect(() => {
    if (logFilterStatus) {
      localStorage.setItem("logFilterStatus", logFilterStatus);
    } else {
      localStorage.removeItem("logFilterStatus");
    }
  }, [logFilterStatus]);
  reactExports.useEffect(() => {
    if (logFilterDateFrom) {
      localStorage.setItem("logFilterDateFrom", logFilterDateFrom);
    } else {
      localStorage.removeItem("logFilterDateFrom");
    }
  }, [logFilterDateFrom]);
  reactExports.useEffect(() => {
    if (logFilterDateTo) {
      localStorage.setItem("logFilterDateTo", logFilterDateTo);
    } else {
      localStorage.removeItem("logFilterDateTo");
    }
  }, [logFilterDateTo]);
  reactExports.useEffect(() => {
    localStorage.setItem("logOffset", logOffset.toString());
  }, [logOffset]);
  reactExports.useEffect(() => {
    localStorage.setItem("logPageSize", logPageSize.toString());
  }, [logPageSize]);
  const printerMap = new Map(printers?.map((p) => [p.id, p.name]) || []);
  const uniqueMaterials = [...new Set(
    archives?.flatMap((a) => a.filament_type?.split(", ") || []).filter(Boolean) || []
  )].sort();
  const uniqueColors = [...new Set(
    archives?.flatMap((a) => a.filament_color?.split(",") || []).filter(Boolean) || []
  )];
  const uniqueTags = [...new Set(
    archives?.flatMap((a) => a.tags?.split(",").map((t2) => t2.trim()) || []).filter(Boolean) || []
  )].sort();
  const filteredArchives = archives?.filter((a) => {
    const now = /* @__PURE__ */ new Date();
    const archiveDate = parseUTCDate(a.created_at) || /* @__PURE__ */ new Date(0);
    let matchesCollection = true;
    switch (collection) {
      case "recent":
        matchesCollection = now.getTime() - archiveDate.getTime() < 24 * 60 * 60 * 1e3;
        break;
      case "this-week":
        matchesCollection = now.getTime() - archiveDate.getTime() < 7 * 24 * 60 * 60 * 1e3;
        break;
      case "this-month":
        matchesCollection = archiveDate.getMonth() === now.getMonth() && archiveDate.getFullYear() === now.getFullYear();
        break;
      case "favorites":
        matchesCollection = a.is_favorite === true;
        break;
      case "failed":
        matchesCollection = a.status === "failed" || a.status === "aborted";
        break;
      case "duplicates":
        matchesCollection = a.duplicate_count > 0;
        break;
    }
    const matchesSearch = (a.print_name || a.filename).toLowerCase().includes(search.toLowerCase());
    const matchesMaterial = !filterMaterial || a.filament_type?.split(", ").includes(filterMaterial);
    const archiveColors = a.filament_color?.split(",") || [];
    const matchesColor = filterColors.size === 0 || (colorFilterMode === "or" ? archiveColors.some((c) => filterColors.has(c)) : [...filterColors].every((c) => archiveColors.includes(c)));
    const matchesFavorites = collection === "favorites" || !filterFavorites || a.is_favorite;
    const matchesHideFailed = collection === "failed" || !hideFailed || a.status !== "failed" && a.status !== "aborted";
    const matchesHideDuplicates = collection === "duplicates" || !hideDuplicates || a.duplicate_count === 0 || a.duplicate_sequence === 0;
    const archiveTags = a.tags?.split(",").map((t2) => t2.trim()) || [];
    const matchesTag = !filterTag || archiveTags.includes(filterTag);
    const isGcodeFile = isSlicedFile(a);
    const matchesFileType = filterFileType === "all" || filterFileType === "gcode" && isGcodeFile || filterFileType === "source" && !isGcodeFile;
    return matchesCollection && matchesSearch && matchesMaterial && matchesColor && matchesFavorites && matchesHideFailed && matchesHideDuplicates && matchesTag && matchesFileType;
  }).sort((a, b) => {
    switch (sortBy) {
      case "date-desc":
        return (parseUTCDate(b.created_at)?.getTime() || 0) - (parseUTCDate(a.created_at)?.getTime() || 0);
      case "date-asc":
        return (parseUTCDate(a.created_at)?.getTime() || 0) - (parseUTCDate(b.created_at)?.getTime() || 0);
      case "name-asc":
        return (a.print_name || a.filename).localeCompare(b.print_name || b.filename);
      case "name-desc":
        return (b.print_name || b.filename).localeCompare(a.print_name || a.filename);
      case "size-desc":
        return b.file_size - a.file_size;
      case "size-asc":
        return a.file_size - b.file_size;
      default:
        return 0;
    }
  });
  const selectionMode = isSelectionMode || selectedIds.size > 0;
  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  const selectAll = () => {
    if (filteredArchives) {
      setSelectedIds(new Set(filteredArchives.map((a) => a.id)));
    }
  };
  const clearSelection = () => {
    setSelectedIds(/* @__PURE__ */ new Set());
    setIsSelectionMode(false);
  };
  const toggleColor = (color) => {
    setFilterColors((prev) => {
      const next = new Set(prev);
      if (next.has(color)) {
        next.delete(color);
      } else {
        next.add(color);
      }
      return next;
    });
  };
  const clearColorFilter = () => {
    setFilterColors(/* @__PURE__ */ new Set());
  };
  const clearTopFilters = () => {
    setSearch("");
    setFilterPrinter(null);
    setFilterMaterial(null);
    setFilterFavorites(false);
    setHideFailed(false);
    setHideDuplicates(false);
    setFilterTag(null);
    setFilterFileType("all");
  };
  const hasTopFilters = search || filterPrinter || filterMaterial || filterFavorites || hideFailed || hideDuplicates || filterTag || filterFileType !== "all";
  const handleDragOver = reactExports.useCallback((e) => {
    e.preventDefault();
    if (e.dataTransfer.types.includes("Files")) {
      setIsDraggingOver(true);
    }
  }, []);
  const handleDragLeave = reactExports.useCallback((e) => {
    e.preventDefault();
    if (e.currentTarget === e.target) {
      setIsDraggingOver(false);
    }
  }, []);
  const handleDrop = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files).filter((f) => f.name.endsWith(".3mf"));
    if (droppedFiles.length > 0) {
      setUploadFiles(droppedFiles);
      setShowUpload(true);
    } else if (e.dataTransfer.files.length > 0) {
      showToast(t("archives.page.only3mfSupported"), "warning");
    }
  }, [showToast, t]);
  const handleKeyDown = reactExports.useCallback((e) => {
    const target = e.target;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
      if (e.key === "Escape") {
        target.blur();
      }
      return;
    }
    switch (e.key) {
      case "/":
        e.preventDefault();
        searchInputRef.current?.focus();
        break;
      case "u":
      case "U":
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          setShowUpload(true);
        }
        break;
      case "Escape":
        if (selectionMode) {
          clearSelection();
        }
        break;
    }
  }, [selectionMode]);
  reactExports.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-4 md:p-8 relative",
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      children: [
        isDraggingOver && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-bambu-dark/90 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-4 border-dashed border-bambu-green rounded-xl p-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-16 h-16 mx-auto mb-4 text-bambu-green" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-white mb-2", children: t("archives.page.dropFilesHere") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("archives.releaseToUpload") })
        ] }) }),
        selectionMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl px-4 py-3 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: clearSelection, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
            t("archives.page.close")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-6 bg-bambu-dark-tertiary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: t("archives.page.selected", { count: selectedIds.size }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-6 bg-bambu-dark-tertiary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: selectAll, children: t("archives.page.selectAll") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-6 bg-bambu-dark-tertiary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => setShowBatchTag(true),
              disabled: !hasAnyPermission("archives:update_own", "archives:update_all"),
              title: !hasAnyPermission("archives:update_own", "archives:update_all") ? t("archives.permission.noUpdateArchives") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4" }),
                t("archives.page.tags")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => setShowBatchProject(true),
              disabled: !hasAnyPermission("archives:update_own", "archives:update_all"),
              title: !hasAnyPermission("archives:update_own", "archives:update_all") ? t("archives.permission.noUpdateArchives") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-4 h-4" }),
                t("archives.page.project")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "sm",
              disabled: !hasAnyPermission("archives:update_own", "archives:update_all"),
              title: !hasAnyPermission("archives:update_own", "archives:update_all") ? t("archives.permission.noUpdateArchives") : void 0,
              onClick: () => {
                const ids = Array.from(selectedIds);
                Promise.all(ids.map((id) => api.toggleFavorite(id))).then(() => {
                  queryClient.invalidateQueries({ queryKey: ["archives"] });
                  showToast(t("archives.page.toggledFavorites", { count: ids.length }));
                }).catch(() => {
                  showToast(t("archives.toast.failedUpdateFavorites"), "error");
                });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }),
                t("archives.page.favorite")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-red-500 hover:bg-red-600",
              onClick: () => setShowBulkDeleteConfirm(true),
              disabled: !hasAnyPermission("archives:delete_own", "archives:delete_all"),
              title: !hasAnyPermission("archives:delete_own", "archives:delete_all") ? t("archives.permission.noDelete") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
                t("archives.page.delete")
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: t("archives.page.title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  className: "px-3 py-1.5 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-bambu-gray-light text-sm focus:border-bambu-green focus:outline-none",
                  value: collection,
                  onChange: (e) => setCollection(e.target.value),
                  children: collections.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.label }, c.id))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("archives.page.printsCount", {
              filtered: filteredArchives?.length || 0,
              total: archives?.length || 0
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "secondary",
                  onClick: () => setShowExportMenu(!showExportMenu),
                  disabled: isExporting,
                  children: [
                    isExporting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4" }),
                    t("common.export")
                  ]
                }
              ),
              showExportMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-full mt-1 w-48 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl z-20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: "w-full px-4 py-2 text-left text-white hover:bg-bambu-dark-tertiary transition-colors flex items-center gap-2 rounded-t-lg",
                    onClick: async () => {
                      setShowExportMenu(false);
                      setIsExporting(true);
                      try {
                        const { blob, filename } = await api.exportArchives({
                          format: "csv",
                          printerId: filterPrinter || void 0,
                          status: collection === "failed" ? "failed" : void 0,
                          search: search || void 0
                        });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = filename;
                        a.click();
                        URL.revokeObjectURL(url);
                        showToast(t("archives.toast.exportDownloaded"));
                      } catch {
                        showToast(t("archives.toast.exportFailed"), "error");
                      } finally {
                        setIsExporting(false);
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                      t("archives.page.exportCsv")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: "w-full px-4 py-2 text-left text-white hover:bg-bambu-dark-tertiary transition-colors flex items-center gap-2 rounded-b-lg",
                    onClick: async () => {
                      setShowExportMenu(false);
                      setIsExporting(true);
                      try {
                        const { blob, filename } = await api.exportArchives({
                          format: "xlsx",
                          printerId: filterPrinter || void 0,
                          status: collection === "failed" ? "failed" : void 0,
                          search: search || void 0
                        });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = filename;
                        a.click();
                        URL.revokeObjectURL(url);
                        showToast(t("archives.toast.exportDownloaded"));
                      } catch {
                        showToast(t("archives.toast.exportFailed"), "error");
                      } finally {
                        setIsExporting(false);
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4" }),
                      t("archives.page.exportExcel")
                    ]
                  }
                )
              ] })
            ] }),
            selectedIds.size >= 2 && selectedIds.size <= 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "secondary",
                onClick: () => setShowCompareModal(true),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "w-4 h-4" }),
                  t("archives.page.compare"),
                  " (",
                  selectedIds.size,
                  ")"
                ]
              }
            ),
            !selectionMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => setIsSelectionMode(true), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4" }),
              t("archives.page.select")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => setShowUpload(true),
                disabled: !hasPermission("archives:create"),
                title: !hasPermission("archives:create") ? t("archives.permission.noCreate") : void 0,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
                  t("archives.page.upload3mf")
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-bambu-dark-tertiary rounded-lg overflow-hidden flex-shrink-0 w-fit mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `p-2 ${viewMode === "grid" ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
              onClick: () => setViewMode("grid"),
              title: t("archives.gridView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `p-2 ${viewMode === "list" ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
              onClick: () => setViewMode("list"),
              title: t("archives.listView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `p-2 ${viewMode === "calendar" ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
              onClick: () => setViewMode("calendar"),
              title: t("archives.calendarView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `p-2 ${viewMode === "log" ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
              onClick: () => setViewMode("log"),
              title: t("archives.logView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4" })
            }
          )
        ] }),
        viewMode !== "log" && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:flex-1 relative md:min-w-[200px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: searchInputRef,
                  type: "text",
                  placeholder: t("archives.searchPlaceholder"),
                  className: "w-full pl-10 pr-4 py-3 md:py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                  value: search,
                  onChange: (e) => setSearch(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 md:gap-4 overflow-x-auto pb-1 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap scrollbar-hide", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-bambu-gray hidden md:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: filterPrinter || "",
                    onChange: (e) => setFilterPrinter(e.target.value ? Number(e.target.value) : null),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("archives.page.allPrinters") }),
                      printers?.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-bambu-gray hidden md:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: filterMaterial || "",
                    onChange: (e) => setFilterMaterial(e.target.value || null),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("archives.page.allMaterials") }),
                      uniqueMaterials.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, children: m }, m))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileCode, { className: "w-4 h-4 text-bambu-gray hidden md:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: filterFileType,
                    onChange: (e) => setFilterFileType(e.target.value),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: t("archives.page.allFiles") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "gcode", children: t("archives.page.slicedGcode") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "source", children: t("archives.page.sourceOnly") })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setFilterFavorites(!filterFavorites),
                  className: `flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors flex-shrink-0 ${filterFavorites ? "bg-yellow-500/20 border-yellow-500 text-yellow-400" : "bg-bambu-dark border-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
                  title: filterFavorites ? t("archives.showAll") : t("archives.showFavoritesOnly"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-4 h-4 ${filterFavorites ? "fill-yellow-400" : ""}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm hidden md:inline", children: t("archives.page.favorites") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setHideFailed(!hideFailed),
                  className: `flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors flex-shrink-0 ${hideFailed ? "bg-red-500/20 border-red-500 text-red-400" : "bg-bambu-dark border-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
                  title: hideFailed ? t("archives.showFailedPrints") : t("archives.hideFailedPrints"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: `w-4 h-4 ${hideFailed ? "" : ""}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm hidden md:inline", children: t("archives.page.hideFailed") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setHideDuplicates(!hideDuplicates),
                  className: `flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors flex-shrink-0 ${hideDuplicates ? "bg-purple-500/20 border-purple-500 text-purple-400" : "bg-bambu-dark border-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
                  title: t("archives.hideDuplicates"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm hidden md:inline", children: t("archives.hideDuplicates") })
                  ]
                }
              ),
              uniqueTags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-bambu-gray hidden md:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: filterTag || "",
                    onChange: (e) => setFilterTag(e.target.value || null),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("archives.page.allTags") }),
                      uniqueTags.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t2, children: t2 }, t2))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setShowTagManagement(true),
                    className: "p-2 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary text-bambu-gray hover:text-white hover:border-bambu-green transition-colors",
                    title: t("archives.manageTags"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "w-4 h-4 text-bambu-gray hidden md:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    value: sortBy,
                    onChange: (e) => setSortBy(e.target.value),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date-desc", children: t("archives.sortNewest") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date-asc", children: t("archives.sortOldest") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "name-asc", children: [
                        t("archives.sortName"),
                        " A-Z"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "name-desc", children: [
                        t("archives.sortName"),
                        " Z-A"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "size-desc", children: t("archives.sortLargest") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "size-asc", children: t("archives.sortSmallest") })
                    ]
                  }
                )
              ] })
            ] }),
            hasTopFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: clearTopFilters,
                className: "text-bambu-gray hover:text-white",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                  t("common.reset")
                ]
              }
            )
          ] }),
          uniqueColors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-4 pt-4 border-t border-bambu-dark-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: t("archives.page.colors") }),
            filterColors.size > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setColorFilterMode((m) => m === "or" ? "and" : "or"),
                className: `px-2 py-0.5 text-xs rounded transition-colors ${colorFilterMode === "and" ? "bg-bambu-green text-white" : "bg-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
                title: colorFilterMode === "or" ? t("archives.page.matchAnySelectedColor") : t("archives.page.matchAllSelectedColors"),
                children: colorFilterMode.toUpperCase()
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 flex-wrap", children: uniqueColors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleColor(color),
                className: `w-6 h-6 rounded-full border-2 transition-all ${filterColors.has(color) ? "border-bambu-green scale-110" : "border-white/20 hover:border-white/40"}`,
                style: { backgroundColor: color },
                title: color
              },
              color
            )) }),
            filterColors.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: clearColorFilter,
                className: "text-xs text-bambu-gray hover:text-white flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                  t("common.clear")
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PendingUploadsPanel, {}),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-bambu-gray", children: t("archives.loadingArchives") }) : filteredArchives?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: search ? t("archives.noArchivesSearch") : t("archives.noArchivesYet") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-2", children: t("archives.page.createdAutomatically") })
        ] }) }) : viewMode === "calendar" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CalendarView,
          {
            archives: filteredArchives || [],
            onArchiveClick: (archive) => {
              setSearch("");
              setViewMode("grid");
              setHighlightedArchiveId(archive.id);
            },
            highlightedArchiveId
          }
        ) }) : viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filteredArchives?.map((archive) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArchiveCard,
          {
            archive,
            printerName: getArchivePrinterLabel(archive, printerMap, t),
            isSelected: selectedIds.has(archive.id),
            onSelect: toggleSelect,
            selectionMode,
            projects,
            isHighlighted: archive.id === highlightedArchiveId,
            timeFormat,
            preferredSlicer,
            currency,
            t,
            onNavigateToArchive: handleNavigateToArchive
          },
          archive.id
        )) }) : viewMode === "list" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 px-4 py-3 text-xs text-bambu-gray font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-4", children: t("archives.list.name") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: t("archives.list.printer") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: t("archives.list.date") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1", children: t("archives.list.size") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-right", children: t("archives.list.actions") })
          ] }),
          filteredArchives?.map((archive) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ArchiveListRow,
            {
              archive,
              printerName: getArchivePrinterLabel(archive, printerMap, t),
              isSelected: selectedIds.has(archive.id),
              onSelect: toggleSelect,
              selectionMode,
              projects,
              isHighlighted: archive.id === highlightedArchiveId,
              preferredSlicer,
              t,
              onNavigateToArchive: handleNavigateToArchive
            },
            archive.id
          ))
        ] }) }) : viewMode === "log" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-3 md:items-center md:flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative md:min-w-[200px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: t("archives.searchPlaceholder"),
                  className: "w-full pl-10 pr-4 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
                  value: search,
                  onChange: (e) => {
                    setSearch(e.target.value);
                    setLogOffset(0);
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
                value: filterPrinter || "",
                onChange: (e) => {
                  setFilterPrinter(e.target.value ? Number(e.target.value) : null);
                  setLogOffset(0);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("archives.log.allPrinters") }),
                  printers?.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
                value: logFilterUser || "",
                onChange: (e) => {
                  setLogFilterUser(e.target.value || null);
                  setLogOffset(0);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("archives.log.allUsers") }),
                  users?.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: u.username, children: u.username }, u.id))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
                value: logFilterStatus || "",
                onChange: (e) => {
                  setLogFilterStatus(e.target.value || null);
                  setLogOffset(0);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("archives.log.allStatuses") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: t("archives.status.completed") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "failed", children: t("archives.status.failed") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "stopped", children: t("archives.status.stopped") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: t("archives.log.cancelled") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "skipped", children: t("archives.log.skipped") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-bambu-gray", children: t("archives.log.dateFrom") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
                  value: logFilterDateFrom,
                  onChange: (e) => {
                    setLogFilterDateFrom(e.target.value);
                    setLogOffset(0);
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-bambu-gray", children: t("archives.log.dateTo") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
                  value: logFilterDateTo,
                  onChange: (e) => {
                    setLogFilterDateTo(e.target.value);
                    setLogOffset(0);
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "danger",
                size: "sm",
                onClick: () => setShowClearLogConfirm(true),
                disabled: !hasPermission("archives:delete_all") || clearLogMutation.isPending,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
                  t("archives.log.clearLog")
                ]
              }
            ) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: isLogLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-green" }) }) : !printLogData?.items.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-bambu-gray", children: t("archives.log.noEntries") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-bambu-dark-tertiary text-bambu-gray text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: t("archives.log.date") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: t("archives.log.printName") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: t("archives.log.printer") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: t("archives.log.user") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: t("archives.log.status") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: t("archives.log.duration") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: t("archives.log.filament") })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-bambu-dark-tertiary", children: printLogData.items.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-bambu-dark-secondary/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white whitespace-nowrap", children: formatDateTime(entry.started_at || entry.created_at, timeFormat) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  entry.thumbnail_path && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: api.getPrintLogThumbnail(entry.id),
                      alt: "",
                      className: "w-8 h-8 rounded object-cover flex-shrink-0",
                      onError: (e) => {
                        e.target.style.display = "none";
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white truncate max-w-[200px]", children: entry.print_name || "—" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-bambu-gray-light", children: entry.printer_name || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-bambu-gray-light", children: entry.created_by_username || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${entry.status === "completed" ? "bg-green-500/20 text-green-400" : entry.status === "failed" ? "bg-red-500/20 text-red-400" : entry.status === "stopped" ? "bg-yellow-500/20 text-yellow-400" : entry.status === "cancelled" ? "bg-orange-500/20 text-orange-400" : entry.status === "skipped" ? "bg-blue-500/20 text-blue-400" : "bg-gray-500/20 text-gray-400"}`, children: getArchiveLogStatusLabel(entry.status, t) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-bambu-gray-light whitespace-nowrap", children: entry.duration_seconds ? formatDuration(entry.duration_seconds) : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  entry.filament_color && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-3 h-3 rounded-full border border-black/20 flex-shrink-0",
                      style: { backgroundColor: entry.filament_color.startsWith("#") ? entry.filament_color : void 0 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray-light text-xs", children: entry.filament_type || "—" })
                ] }) })
              ] }, entry.id)) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-t border-bambu-dark-tertiary flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: t("archives.log.showing", { count: Math.min(logOffset + logPageSize, printLogData.total), total: printLogData.total }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-bambu-gray", children: t("archives.log.rowsPerPage") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      className: "px-2 py-1 bg-bambu-dark border border-bambu-dark-tertiary rounded text-white text-xs focus:border-bambu-green focus:outline-none",
                      value: logPageSize,
                      onChange: (e) => {
                        setLogPageSize(Number(e.target.value));
                        setLogOffset(0);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 10, children: "10" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 25, children: "25" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 50, children: "50" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 100, children: "100" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-gray", children: [
                  t("archives.log.page"),
                  " ",
                  Math.floor(logOffset / logPageSize) + 1,
                  " / ",
                  Math.max(1, Math.ceil(printLogData.total / logPageSize))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: () => setLogOffset(Math.max(0, logOffset - logPageSize)), disabled: logOffset === 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "sm", onClick: () => setLogOffset(logOffset + logPageSize), disabled: logOffset + logPageSize >= printLogData.total, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" }) })
              ] })
            ] })
          ] }) })
        ] }) : null,
        showUpload && /* @__PURE__ */ jsxRuntimeExports.jsx(
          UploadModal,
          {
            onClose: () => {
              setShowUpload(false);
              setUploadFiles([]);
            },
            initialFiles: uploadFiles
          }
        ),
        showBulkDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("archives.modal.deleteArchives"),
            message: t("archives.modal.deleteArchivesConfirm", { count: selectedIds.size }),
            confirmText: t("archives.modal.deleteCount", { count: selectedIds.size }),
            variant: "danger",
            onConfirm: () => {
              bulkDeleteMutation.mutate(Array.from(selectedIds));
              setShowBulkDeleteConfirm(false);
            },
            onCancel: () => setShowBulkDeleteConfirm(false)
          }
        ),
        showBatchTag && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BatchTagModal,
          {
            selectedIds: Array.from(selectedIds),
            existingTags: uniqueTags,
            onClose: () => setShowBatchTag(false)
          }
        ),
        showBatchProject && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BatchProjectModal,
          {
            selectedIds: Array.from(selectedIds),
            onClose: () => setShowBatchProject(false)
          }
        ),
        showCompareModal && selectedIds.size >= 2 && selectedIds.size <= 5 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          CompareArchivesModal,
          {
            archiveIds: Array.from(selectedIds),
            onClose: () => {
              setShowCompareModal(false);
              setSelectedIds(/* @__PURE__ */ new Set());
              setIsSelectionMode(false);
            }
          }
        ),
        showTagManagement && /* @__PURE__ */ jsxRuntimeExports.jsx(TagManagementModal, { onClose: () => setShowTagManagement(false) }),
        showClearLogConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("archives.log.clearLogTitle"),
            message: t("archives.log.clearLogConfirm"),
            confirmText: t("archives.log.clearLogButton"),
            variant: "danger",
            onConfirm: () => {
              clearLogMutation.mutate();
              setShowClearLogConfirm(false);
            },
            onCancel: () => setShowClearLogConfirm(false)
          }
        )
      ]
    }
  );
}
export {
  ArchivesPage
};
