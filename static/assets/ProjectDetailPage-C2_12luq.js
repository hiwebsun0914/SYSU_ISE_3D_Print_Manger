import { c as createLucideIcon, aD as useParams, G as useNavigate, u as useTranslation, b as useQueryClient, a as useToast, k as useAuth, r as reactExports, d as useQuery, e as useMutation, j as jsxRuntimeExports, L as LoaderCircle, B as Button, q as Link, t as ChevronRight, y as Card, z as CardContent, aE as formatDurationFromHours, J as Printer, O as Layers, o as Calendar, x as formatDateOnly, i as FileText, X, aF as ShoppingCart, Q as CircleCheckBig, E as ExternalLink, _ as CircleX, h as ConfirmModal, f as api, T as TriangleAlert, p as parseUTCDate, a9 as formatDateTime } from "./index-CeSodUhS.js";
import { R as RichTextEditor, p as purify } from "./RichTextEditor-B1QS3QOE.js";
import { L as ListTodo, P as ProjectModal } from "./ProjectsPage-CqYjrTwT.js";
import { g as getCurrencySymbol } from "./currency-xmcJ_vO3.js";
import { A as ArrowLeft } from "./arrow-left-aI9VygVZ.js";
import { D as Download } from "./download-CXWYytre.js";
import { P as PenLine } from "./pen-line-Bvr2Ex69.js";
import { P as Package } from "./package-D76dkLyW.js";
import { C as Clock } from "./clock-rmajxGGN.js";
import { T as Tag } from "./tag-BDj73JCm.js";
import { S as Save } from "./save-BgVATD4Y.js";
import { F as FolderOpen } from "./folder-open-CEXD4jgP.js";
import { P as Plus } from "./plus-D6b2aHzR.js";
import { P as Pencil } from "./pencil-tqzNN1qN.js";
import { T as Trash2 } from "./trash-2-V7jM6WFN.js";
import { H as History } from "./history-BCt9pJfe.js";
import { C as Copy } from "./copy-B9sBU3eE.js";
import "./index-ByI6E0fo.js";
import "./with-selector-BmcBLQvQ.js";
import "./list-Bwvg-lzc.js";
import "./list-ordered-CcrV6GTp.js";
import "./unlink-BZwhJ8ZI.js";
import "./folder-kanban-CQFTu7OB.js";
import "./upload-B0438ydo.js";
import "./circle-check-DVmqo4P3.js";
import "./ellipsis-vertical-CvkYUaYw.js";
const __iconNode = [
  [
    "path",
    {
      d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "hod4my"
    }
  ],
  [
    "path",
    {
      d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "w4yl2u"
    }
  ],
  ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
  ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]
];
const FolderTree = createLucideIcon("folder-tree", __iconNode);
function formatFilament(grams) {
  if (grams >= 1e3) {
    return `${(grams / 1e3).toFixed(2)}kg`;
  }
  return `${Math.round(grams)}g`;
}
function StatusBadge({ status, t }) {
  const colors = {
    active: "bg-bambu-green/20 text-bambu-green",
    completed: "bg-blue-500/20 text-blue-400",
    archived: "bg-bambu-gray/20 text-bambu-gray"
  };
  const color = colors[status] || colors.active;
  const labels = {
    active: t("projectDetail.status.active"),
    completed: t("projectDetail.status.completed"),
    archived: t("projectDetail.status.archived")
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 rounded text-sm font-medium ${color}`, children: labels[status] || status.charAt(0).toUpperCase() + status.slice(1) });
}
function StatCard({
  icon: Icon,
  label,
  value,
  subValue,
  hint,
  color = "text-bambu-gray"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", title: hint, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg bg-bambu-dark ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-white", children: value }),
      subValue && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray/70", children: subValue })
    ] })
  ] }) }) });
}
function ArchiveGrid({ archives, t }) {
  if (archives.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-bambu-gray", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 mx-auto mb-2 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("projectDetail.noPrints") })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3", children: archives.map((archive) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: `/archives?search=${encodeURIComponent(archive.print_name || "")}`,
      className: "group relative aspect-square rounded-lg bg-bambu-dark border border-bambu-dark-tertiary overflow-hidden hover:border-bambu-green transition-colors",
      children: [
        archive.thumbnail_path || archive.filename.toLowerCase().endsWith(".3mf") ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: api.getArchiveThumbnail(archive.id, archive.thumbnail_path),
            alt: archive.print_name || "Print",
            className: "w-full h-full object-cover"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-bambu-gray", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-8 h-8" }) }),
        archive.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-red-500/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-8 h-8 text-white" }) }),
        archive.status === "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1 right-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-bambu-green" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white truncate", children: archive.print_name || "Unknown" }) })
      ]
    },
    archive.id
  )) });
}
function PriorityBadge({ priority, t }) {
  const config = {
    low: { color: "bg-gray-500/20 text-gray-400", label: t("projectDetail.priority.low") },
    normal: { color: "bg-blue-500/20 text-blue-400", label: t("projectDetail.priority.normal") },
    high: { color: "bg-orange-500/20 text-orange-400", label: t("projectDetail.priority.high") },
    urgent: { color: "bg-red-500/20 text-red-400", label: t("projectDetail.priority.urgent") }
  };
  const { color, label } = config[priority] || config.normal;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${color}`, children: [
    priority === "urgent" && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
    label
  ] });
}
function getDueDateStatus(dateString, t) {
  if (!dateString) return null;
  const dueDate = parseUTCDate(dateString);
  if (!dueDate) return null;
  const now = /* @__PURE__ */ new Date();
  const diffDays = Math.ceil((dueDate.getTime() - now.getTime()) / (1e3 * 60 * 60 * 24));
  if (diffDays < 0) return { color: "text-red-400", label: t("projectDetail.dueDate.overdue") };
  if (diffDays === 0) return { color: "text-orange-400", label: t("projectDetail.dueDate.today") };
  if (diffDays <= 3) return { color: "text-yellow-400", label: t("projectDetail.dueDate.daysLeft", { count: diffDays }) };
  return { color: "text-bambu-gray", label: t("projectDetail.dueDate.daysLeft", { count: diffDays }) };
}
function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [showEditModal, setShowEditModal] = reactExports.useState(false);
  const [editingNotes, setEditingNotes] = reactExports.useState(false);
  const [notesContent, setNotesContent] = reactExports.useState("");
  const projectId = parseInt(id || "0", 10);
  const { data: project, isLoading: projectLoading, error: projectError } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => api.getProject(projectId),
    enabled: projectId > 0
  });
  const { data: archives, isLoading: archivesLoading } = useQuery({
    queryKey: ["project-archives", projectId],
    queryFn: () => api.getProjectArchives(projectId),
    enabled: projectId > 0
  });
  const { data: bomItems, isLoading: bomLoading } = useQuery({
    queryKey: ["project-bom", projectId],
    queryFn: () => api.getProjectBOM(projectId),
    enabled: projectId > 0
  });
  const { data: timeline, isLoading: timelineLoading } = useQuery({
    queryKey: ["project-timeline", projectId],
    queryFn: () => api.getProjectTimeline(projectId, 20),
    enabled: projectId > 0
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const { data: linkedFolders } = useQuery({
    queryKey: ["project-folders", projectId],
    queryFn: () => api.getLibraryFoldersByProject(projectId),
    enabled: projectId > 0
  });
  const currency = getCurrencySymbol(settings?.currency || "USD");
  const timeFormat = settings?.time_format || "system";
  const updateMutation = useMutation({
    mutationFn: (data) => api.updateProject(projectId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      setShowEditModal(false);
      setEditingNotes(false);
      showToast(t("projectDetail.toast.projectUpdated"), "success");
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const handleStartEditNotes = () => {
    setNotesContent(project?.notes || "");
    setEditingNotes(true);
  };
  const handleSaveNotes = () => {
    updateMutation.mutate({ notes: notesContent });
  };
  const handleCancelNotes = () => {
    setEditingNotes(false);
    setNotesContent("");
  };
  const [newBomName, setNewBomName] = reactExports.useState("");
  const [newBomQty, setNewBomQty] = reactExports.useState(1);
  const [newBomPrice, setNewBomPrice] = reactExports.useState("");
  const [newBomUrl, setNewBomUrl] = reactExports.useState("");
  const [newBomRemarks, setNewBomRemarks] = reactExports.useState("");
  const [showBomForm, setShowBomForm] = reactExports.useState(false);
  const [hideBomCompleted, setHideBomCompleted] = reactExports.useState(false);
  const [editingBomItem, setEditingBomItem] = reactExports.useState(null);
  const [editBomName, setEditBomName] = reactExports.useState("");
  const [editBomQty, setEditBomQty] = reactExports.useState(1);
  const [editBomPrice, setEditBomPrice] = reactExports.useState("");
  const [editBomUrl, setEditBomUrl] = reactExports.useState("");
  const [editBomRemarks, setEditBomRemarks] = reactExports.useState("");
  const [confirmModal, setConfirmModal] = reactExports.useState({ isOpen: false, title: "", message: "", onConfirm: () => {
  } });
  const createBomMutation = useMutation({
    mutationFn: (data) => api.createBOMItem(projectId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-bom", projectId] });
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      setNewBomName("");
      setNewBomQty(1);
      setNewBomPrice("");
      setNewBomUrl("");
      setNewBomRemarks("");
      setShowBomForm(false);
      showToast(t("projectDetail.toast.partAdded"), "success");
    },
    onError: (error) => showToast(error.message, "error")
  });
  const updateBomMutation = useMutation({
    mutationFn: ({ itemId, data }) => api.updateBOMItem(projectId, itemId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-bom", projectId] });
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      setEditingBomItem(null);
    },
    onError: (error) => showToast(error.message, "error")
  });
  const deleteBomMutation = useMutation({
    mutationFn: (itemId) => api.deleteBOMItem(projectId, itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-bom", projectId] });
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      showToast(t("projectDetail.toast.partRemoved"), "success");
    },
    onError: (error) => showToast(error.message, "error")
  });
  const handleAddBomItem = (e) => {
    e.preventDefault();
    if (!newBomName.trim()) return;
    createBomMutation.mutate({
      name: newBomName.trim(),
      quantity_needed: newBomQty,
      unit_price: newBomPrice ? parseFloat(newBomPrice) : void 0,
      sourcing_url: newBomUrl.trim() || void 0,
      remarks: newBomRemarks.trim() || void 0
    });
  };
  const handleToggleAcquired = (item) => {
    const newQty = item.is_complete ? 0 : item.quantity_needed;
    updateBomMutation.mutate({
      itemId: item.id,
      data: { quantity_acquired: newQty }
    });
  };
  const handleDeleteBomItem = (itemId, itemName) => {
    setConfirmModal({
      isOpen: true,
      title: t("projectDetail.bom.deletePart"),
      message: t("projectDetail.bom.deleteConfirm", { name: itemName }),
      onConfirm: () => {
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
        deleteBomMutation.mutate(itemId);
      }
    });
  };
  const handleEditBomItem = (item) => {
    setEditingBomItem(item);
    setEditBomName(item.name);
    setEditBomQty(item.quantity_needed);
    setEditBomPrice(item.unit_price?.toString() || "");
    setEditBomUrl(item.sourcing_url || "");
    setEditBomRemarks(item.remarks || "");
  };
  const handleSaveBomEdit = (e) => {
    e.preventDefault();
    if (!editingBomItem || !editBomName.trim()) return;
    updateBomMutation.mutate({
      itemId: editingBomItem.id,
      data: {
        name: editBomName.trim(),
        quantity_needed: editBomQty,
        unit_price: editBomPrice ? parseFloat(editBomPrice) : void 0,
        sourcing_url: editBomUrl.trim() || void 0,
        remarks: editBomRemarks.trim() || void 0
      }
    });
  };
  const handleCancelBomEdit = () => {
    setEditingBomItem(null);
  };
  const handleExportProject = async () => {
    try {
      const { blob, filename } = await api.exportProjectZip(Number(projectId));
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || `${project?.name || "project"}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.zip`;
      a.click();
      URL.revokeObjectURL(url);
      showToast(t("projectDetail.toast.projectExported"), "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };
  const createTemplateMutation = useMutation({
    mutationFn: () => api.createTemplateFromProject(projectId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      showToast(t("projectDetail.toast.templateCreated"), "success");
    },
    onError: (error) => showToast(error.message, "error")
  });
  const formatTimelineDate = (timestamp) => {
    return formatDateTime(timestamp, timeFormat, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  if (projectLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-bambu-green" }) });
  }
  if (projectError || !project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: projectError ? `${t("common.error")}: ${projectError.message}` : t("projectDetail.notFound") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", className: "mt-4", onClick: () => navigate("/projects"), children: t("projectDetail.backToProjects") })
    ] });
  }
  const stats = project.stats;
  const platesProgressPercent = stats?.progress_percent ?? 0;
  const partsProgressPercent = stats?.parts_progress_percent ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-bambu-gray", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "hover:text-white transition-colors", children: t("navigation.projects") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: project.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => navigate("/projects"),
            className: "p-2 rounded-lg bg-bambu-card hover:bg-bambu-dark-tertiary transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5 text-bambu-gray" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-4 h-4 rounded-full flex-shrink-0",
              style: { backgroundColor: project.color || "#6b7280" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: project.name }),
            project.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mt-1", children: project.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: project.status, t })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: handleExportProject,
            disabled: !hasPermission("projects:read"),
            title: !hasPermission("projects:read") ? t("projectDetail.noExportPermission") : t("projectDetail.exportProject"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
              t("projectDetail.export")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: () => setShowEditModal(true),
            disabled: !hasPermission("projects:update"),
            title: !hasPermission("projects:update") ? t("projectDetail.noEditPermission") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4 mr-2" }),
              t("common.edit")
            ]
          }
        )
      ] })
    ] }),
    (project.target_count || project.target_parts_count) && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-4", children: [
      project.target_count && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: t("projectDetail.progress.platesProgress") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-white", children: [
            stats?.total_archives || 0,
            " / ",
            project.target_count,
            " ",
            t("projectDetail.progress.printJobs")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-bambu-dark rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full transition-all duration-500",
            style: {
              width: `${Math.min(platesProgressPercent, 100)}%`,
              backgroundColor: platesProgressPercent >= 100 ? "#22c55e" : project.color || "#6b7280"
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray/70", children: t("projectDetail.progress.percentComplete", { percent: platesProgressPercent.toFixed(0) }) }),
          stats?.remaining_prints != null && stats.remaining_prints > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray/70", children: t("projectDetail.progress.remaining", { count: stats.remaining_prints }) })
        ] })
      ] }),
      project.target_parts_count && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: t("projectDetail.progress.partsProgress") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-white", children: [
            stats?.completed_prints || 0,
            " / ",
            project.target_parts_count,
            " ",
            t("projectDetail.progress.parts")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-bambu-dark rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full transition-all duration-500",
            style: {
              width: `${Math.min(partsProgressPercent, 100)}%`,
              backgroundColor: partsProgressPercent >= 100 ? "#22c55e" : project.color || "#6b7280"
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray/70", children: t("projectDetail.progress.percentComplete", { percent: partsProgressPercent.toFixed(0) }) }),
          stats?.remaining_parts != null && stats.remaining_parts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray/70", children: t("projectDetail.progress.remaining", { count: stats.remaining_parts }) })
        ] })
      ] })
    ] }) }),
    stats && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-bambu-dark text-bambu-green", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("projectDetail.stats.printJobs") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-semibold text-white", children: [
            stats.total_archives,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-bambu-gray", children: t("projectDetail.stats.total") })
          ] }),
          stats.failed_prints > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-status-error", children: t("projectDetail.stats.failed", { count: stats.failed_prints }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("projectDetail.stats.partsPrinted", { count: stats.completed_prints }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Clock,
          label: t("projectDetail.stats.printTime"),
          value: formatDurationFromHours(stats.total_print_time_hours),
          color: "text-yellow-400"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Printer,
          label: t("projectDetail.stats.filamentUsed"),
          value: formatFilament(stats.total_filament_grams),
          color: "text-purple-400"
        }
      )
    ] }),
    stats && (() => {
      const totalCost = stats.estimated_cost + stats.total_energy_cost + stats.bom_cost;
      return stats.estimated_cost > 0 || totalCost > 0 || project.budget !== null;
    })() && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white mb-3", children: t("projectDetail.cost.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray uppercase", children: t("projectDetail.cost.filamentCost") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-white", children: [
            currency,
            stats.estimated_cost.toFixed(2)
          ] })
        ] }),
        stats.total_energy_kwh > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray uppercase", children: t("projectDetail.cost.energy") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-white", children: [
            stats.total_energy_kwh.toFixed(3),
            " kWh",
            stats.total_energy_cost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-gray ml-1", children: [
              "(",
              currency,
              stats.total_energy_cost.toFixed(2),
              ")"
            ] })
          ] })
        ] }),
        (() => {
          const totalCost = stats.estimated_cost + stats.total_energy_cost + stats.bom_cost;
          if (totalCost <= 0) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray uppercase", children: t("projectDetail.cost.totalCost") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-bambu-green", children: [
              currency,
              totalCost.toFixed(2)
            ] }),
            stats.bom_cost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray/70", children: t("projectDetail.cost.includesBom") })
          ] });
        })(),
        project.budget !== null && (() => {
          const totalCost = stats.estimated_cost + stats.total_energy_cost + stats.bom_cost;
          const remaining = project.budget - totalCost;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray uppercase", children: t("projectDetail.cost.budget") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-bambu-gray", children: [
              t("projectDetail.cost.total"),
              ": ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-semibold", children: [
                currency,
                project.budget.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-sm ${remaining >= 0 ? "text-bambu-green" : "text-red-400"}`, children: [
              t("projectDetail.cost.remaining"),
              ": ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                currency,
                remaining.toFixed(2)
              ] })
            ] })
          ] });
        })()
      ] })
    ] }) }),
    project.children && project.children.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderTree, { className: "w-5 h-5" }),
        t("projectDetail.subProjects.title", { count: project.children.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: project.children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: `/projects/${child.id}`,
          className: "flex items-center justify-between p-3 bg-bambu-dark rounded-lg hover:bg-bambu-dark-tertiary transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-full",
                  style: { backgroundColor: child.color || "#6b7280" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: child.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded ${child.status === "completed" ? "bg-status-ok/20 text-status-ok" : child.status === "archived" ? "bg-bambu-gray/20 text-bambu-gray" : "bg-blue-500/20 text-blue-400"}`, children: child.status })
            ] }),
            child.progress_percent !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-gray", children: [
              child.progress_percent.toFixed(0),
              "%"
            ] })
          ]
        },
        child.id
      )) })
    ] }) }),
    project.parent_id && project.parent_name && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-bambu-gray" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("projectDetail.partOf") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: `/projects/${project.parent_id}`,
          className: "text-bambu-green hover:underline",
          children: project.parent_name
        }
      )
    ] }),
    (project.tags || project.due_date || project.priority !== "normal") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
      project.priority && project.priority !== "normal" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray uppercase", children: t("projectDetail.priorityLabel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: project.priority, t })
      ] }),
      project.due_date && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-bambu-gray" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: formatDateOnly(project.due_date, { year: "numeric", month: "short", day: "numeric" }) }),
        getDueDateStatus(project.due_date, t) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs ${getDueDateStatus(project.due_date, t).color}`, children: [
          "(",
          getDueDateStatus(project.due_date, t).label,
          ")"
        ] })
      ] }),
      project.tags && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-bambu-gray" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: project.tags.split(",").map((tag, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "px-2 py-0.5 bg-bambu-dark-tertiary text-bambu-gray text-xs rounded",
            children: tag.trim()
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }),
          t("projectDetail.notes.title")
        ] }),
        !editingNotes ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            size: "sm",
            onClick: handleStartEditNotes,
            disabled: !hasPermission("projects:update"),
            title: !hasPermission("projects:update") ? t("projectDetail.notes.noEditPermission") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4 mr-1" }),
              t("common.edit")
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: handleCancelNotes,
              disabled: updateMutation.isPending,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1" }),
                t("common.cancel")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              onClick: handleSaveNotes,
              disabled: updateMutation.isPending,
              children: [
                updateMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4 mr-1" }),
                t("common.save")
              ]
            }
          )
        ] })
      ] }),
      editingNotes ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        RichTextEditor,
        {
          content: notesContent,
          onChange: setNotesContent,
          placeholder: t("projectDetail.notes.placeholder")
        }
      ) : project.notes ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "prose prose-invert prose-sm max-w-none",
          dangerouslySetInnerHTML: { __html: purify.sanitize(project.notes) }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray/70 text-sm italic", children: t("projectDetail.notes.empty") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-5 h-5" }),
        t("projectDetail.files.title")
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/files", className: "text-bambu-green hover:underline", children: t("projectDetail.files.linkFolders") }),
        " ",
        t("projectDetail.files.forQuickAccess")
      ] }),
      linkedFolders && linkedFolders.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: linkedFolders.map((folder) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: `/files?folder=${folder.id}`,
          className: "flex items-center justify-between p-3 bg-bambu-dark rounded-lg hover:bg-bambu-dark-tertiary transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-5 h-5 text-bambu-green flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white truncate", children: folder.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("projectDetail.files.fileCount", { count: folder.file_count }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-bambu-gray flex-shrink-0" })
          ]
        },
        folder.id
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray/70 text-sm italic", children: t("projectDetail.files.empty") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
          t("projectDetail.bom.title"),
          stats && stats.bom_total_items > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-bambu-gray", children: [
            "(",
            t("projectDetail.bom.acquired", { completed: stats.bom_completed_items, total: stats.bom_total_items }),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          bomItems && bomItems.some((item) => item.is_complete) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setHideBomCompleted(!hideBomCompleted),
              className: `text-xs px-2 py-1 rounded transition-colors ${hideBomCompleted ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
              children: hideBomCompleted ? t("projectDetail.bom.showAll") : t("projectDetail.bom.hideDone")
            }
          ),
          !showBomForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => setShowBomForm(true),
              disabled: !hasPermission("projects:update"),
              title: !hasPermission("projects:update") ? t("projectDetail.bom.noAddPermission") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
                t("projectDetail.bom.addPart")
              ]
            }
          )
        ] })
      ] }),
      showBomForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddBomItem, className: "bg-bambu-dark rounded-lg p-4 mb-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: newBomName,
              onChange: (e) => setNewBomName(e.target.value),
              className: "bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
              placeholder: t("projectDetail.bom.partNamePlaceholder"),
              autoFocus: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: newBomQty,
                onChange: (e) => setNewBomQty(parseInt(e.target.value) || 1),
                className: "w-20 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-bambu-green",
                min: "1",
                placeholder: t("projectDetail.bom.qty")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                step: "0.01",
                value: newBomPrice,
                onChange: (e) => setNewBomPrice(e.target.value),
                className: "flex-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
                placeholder: t("projectDetail.bom.price", { currency })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "url",
            value: newBomUrl,
            onChange: (e) => setNewBomUrl(e.target.value),
            className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
            placeholder: t("projectDetail.bom.sourcingUrlPlaceholder")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: newBomRemarks,
            onChange: (e) => setNewBomRemarks(e.target.value),
            className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
            placeholder: t("projectDetail.bom.remarksPlaceholder")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", size: "sm", onClick: () => setShowBomForm(false), children: t("common.cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "sm", disabled: !newBomName.trim() || createBomMutation.isPending, children: createBomMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : t("projectDetail.bom.addPart") })
        ] })
      ] }),
      bomLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-green" }) }) : bomItems && bomItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        bomItems.filter((item) => !hideBomCompleted || !item.is_complete).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `p-3 rounded-lg transition-colors ${item.is_complete ? "bg-status-ok/10" : "bg-bambu-dark"}`,
            children: editingBomItem?.id === item.id ? (
              // Edit form for this BOM item
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveBomEdit, className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: editBomName,
                      onChange: (e) => setEditBomName(e.target.value),
                      className: "bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
                      placeholder: t("projectDetail.bom.partName"),
                      autoFocus: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "number",
                        value: editBomQty,
                        onChange: (e) => setEditBomQty(parseInt(e.target.value) || 1),
                        className: "w-20 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-bambu-green",
                        min: "1",
                        placeholder: t("projectDetail.bom.qty")
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "number",
                        step: "0.01",
                        value: editBomPrice,
                        onChange: (e) => setEditBomPrice(e.target.value),
                        className: "flex-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
                        placeholder: t("projectDetail.bom.price", { currency })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "url",
                    value: editBomUrl,
                    onChange: (e) => setEditBomUrl(e.target.value),
                    className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
                    placeholder: t("projectDetail.bom.sourcingUrlPlaceholder")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: editBomRemarks,
                    onChange: (e) => setEditBomRemarks(e.target.value),
                    className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded px-3 py-2 text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
                    placeholder: t("projectDetail.bom.remarksPlaceholder")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", size: "sm", onClick: handleCancelBomEdit, children: t("common.cancel") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "sm", disabled: !editBomName.trim() || updateBomMutation.isPending, children: updateBomMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : t("common.save") })
                ] })
              ] })
            ) : (
              // Display mode
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => hasPermission("projects:update") && handleToggleAcquired(item),
                    disabled: updateBomMutation.isPending || !hasPermission("projects:update"),
                    title: !hasPermission("projects:update") ? t("projectDetail.bom.noUpdatePermission") : void 0,
                    className: `w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${item.is_complete ? "bg-status-ok border-status-ok text-white" : hasPermission("projects:update") ? "border-bambu-gray hover:border-bambu-green" : "border-bambu-gray/50 cursor-not-allowed"}`,
                    children: item.is_complete && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-sm font-medium ${item.is_complete ? "text-bambu-gray line-through" : "text-white"}`, children: [
                        item.name,
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray font-normal ml-2", children: [
                          "x",
                          item.quantity_needed
                        ] })
                      ] }),
                      item.unit_price !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-green whitespace-nowrap", children: [
                        currency,
                        (item.unit_price * item.quantity_needed).toFixed(2)
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => hasPermission("projects:update") && handleEditBomItem(item),
                          disabled: !hasPermission("projects:update"),
                          className: `p-1 rounded transition-colors flex-shrink-0 ${hasPermission("projects:update") ? "hover:bg-bambu-dark-tertiary text-bambu-gray hover:text-white" : "text-bambu-gray/50 cursor-not-allowed"}`,
                          title: !hasPermission("projects:update") ? t("projectDetail.bom.noEditPermission") : t("common.edit"),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => hasPermission("projects:update") && handleDeleteBomItem(item.id, item.name),
                          disabled: !hasPermission("projects:update"),
                          className: `p-1 rounded transition-colors flex-shrink-0 ${hasPermission("projects:update") ? "hover:bg-bambu-dark-tertiary text-bambu-gray hover:text-red-400" : "text-bambu-gray/50 cursor-not-allowed"}`,
                          title: !hasPermission("projects:update") ? t("projectDetail.bom.noDeletePermission") : t("common.delete"),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                        }
                      )
                    ] })
                  ] }),
                  item.sourcing_url && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: item.sourcing_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center gap-1 mt-1 text-xs text-blue-400 hover:text-blue-300 transition-colors",
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: (() => {
                          try {
                            return new URL(item.sourcing_url).hostname.replace("www.", "");
                          } catch {
                            return item.sourcing_url;
                          }
                        })() })
                      ]
                    }
                  ),
                  item.remarks && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-bambu-gray/80 italic", children: item.remarks })
                ] })
              ] })
            )
          },
          item.id
        )),
        stats && stats.bom_cost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 mt-2 border-t border-bambu-dark-tertiary flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("projectDetail.bom.totalCost") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-medium", children: [
            currency,
            stats.bom_cost.toFixed(2)
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray/70 text-sm italic", children: t("projectDetail.bom.empty") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-5 h-5" }),
        t("projectDetail.timeline.title")
      ] }) }),
      timelineLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-green" }) }) : timeline && timeline.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: timeline.slice(0, 10).map((event, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${event.event_type === "print_completed" ? "bg-status-ok/20 text-status-ok" : event.event_type === "print_failed" ? "bg-status-error/20 text-status-error" : event.event_type === "print_started" ? "bg-yellow-500/20 text-yellow-400" : "bg-bambu-dark-tertiary text-bambu-gray"}`, children: [
          event.event_type === "print_completed" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
          event.event_type === "print_failed" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
          event.event_type === "print_started" && /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
          event.event_type === "queued" && /* @__PURE__ */ jsxRuntimeExports.jsx(ListTodo, { className: "w-4 h-4" }),
          event.event_type === "project_created" && /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white", children: event.title }),
          event.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray truncate", children: event.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray/70", children: formatTimelineDate(event.timestamp) })
        ] })
      ] }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray/70 text-sm italic", children: t("projectDetail.timeline.empty") })
    ] }) }),
    !project.is_template && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "secondary",
        size: "sm",
        onClick: () => createTemplateMutation.mutate(),
        disabled: createTemplateMutation.isPending || !hasPermission("projects:create"),
        title: !hasPermission("projects:create") ? t("projectDetail.template.noCreatePermission") : void 0,
        children: [
          createTemplateMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin mr-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4 mr-2" }),
          t("projectDetail.template.saveAsTemplate")
        ]
      }
    ) }),
    stats && (stats.queued_prints > 0 || stats.in_progress_prints > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListTodo, { className: "w-5 h-5" }),
          t("projectDetail.queue.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/queue?project=${projectId}`,
            className: "text-sm text-bambu-green hover:underline",
            children: t("projectDetail.queue.viewAll")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
        stats.in_progress_prints > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400", children: t("projectDetail.queue.printing", { count: stats.in_progress_prints }) }),
        stats.queued_prints > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("projectDetail.queue.queued", { count: stats.queued_prints }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5" }),
        t("projectDetail.prints.title", { count: archives?.length || 0 })
      ] }) }),
      archivesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-green" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArchiveGrid, { archives: archives || [], t })
    ] }),
    showEditModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProjectModal,
      {
        t,
        currencySymbol: currency,
        project: {
          ...project,
          archive_count: stats?.total_archives || 0,
          total_items: stats?.total_items || 0,
          completed_count: stats?.completed_prints || 0,
          failed_count: stats?.failed_prints || 0,
          queue_count: stats?.queued_prints || 0,
          progress_percent: stats?.progress_percent || null,
          archives: []
        },
        onClose: () => setShowEditModal(false),
        onSave: (data) => updateMutation.mutate(data),
        isLoading: updateMutation.isPending
      }
    ),
    confirmModal.isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: confirmModal.title,
        message: confirmModal.message,
        confirmText: t("common.delete"),
        variant: "danger",
        onConfirm: confirmModal.onConfirm,
        onCancel: () => setConfirmModal((prev) => ({ ...prev, isOpen: false }))
      }
    )
  ] });
}
export {
  ProjectDetailPage
};
