import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, L as LoaderCircle, u as useTranslation, J as useNavigate, b as useQueryClient, a as useToast, k as useAuth, d as useQuery, e as useMutation, a2 as Upload, s as CircleCheck, a8 as Archive, h as ConfirmModal, f as api, T as Trash2, l as TriangleAlert, Q as Layers, w as ChevronRight } from "./index-CMdmMVx7.js";
import { g as getCurrencySymbol } from "./currency-xmcJ_vO3.js";
import { F as FolderKanban } from "./folder-kanban-SUBZ8FyH.js";
import { D as Download } from "./download-CY8JIv9P.js";
import { P as Plus } from "./plus-BP-iHzEt.js";
import { C as Clock } from "./clock-Cv3tr1BN.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-BnP8umru.js";
import { P as PenLine } from "./pen-line-CytKXcZp.js";
import { P as Package } from "./package-Dsgdf_zv.js";
const __iconNode = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }]
];
const ListTodo = createLucideIcon("list-todo", __iconNode);
const PROJECT_COLORS = [
  "#ef4444",
  // red
  "#f97316",
  // orange
  "#eab308",
  // yellow
  "#22c55e",
  // green
  "#06b6d4",
  // cyan
  "#3b82f6",
  // blue
  "#8b5cf6",
  // violet
  "#ec4899",
  // pink
  "#6b7280"
  // gray
];
function ProjectModal({ project, onClose, onSave, isLoading, currencySymbol, t }) {
  const [name, setName] = reactExports.useState(project?.name || "");
  const [description, setDescription] = reactExports.useState(project?.description || "");
  const [color, setColor] = reactExports.useState(project?.color || PROJECT_COLORS[0]);
  const [targetCount, setTargetCount] = reactExports.useState(project?.target_count?.toString() || "");
  const [targetPartsCount, setTargetPartsCount] = reactExports.useState(project?.target_parts_count?.toString() || "");
  const [status, setStatus] = reactExports.useState(project?.status || "active");
  const [tags, setTags] = reactExports.useState(project?.tags || "");
  const [dueDate, setDueDate] = reactExports.useState(project?.due_date?.split("T")[0] || "");
  const [priority, setPriority] = reactExports.useState(project?.priority || "normal");
  const [budget, setBudget] = reactExports.useState(project?.budget?.toString() || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: name.trim(),
      description: description.trim() || void 0,
      color,
      target_count: targetCount ? parseInt(targetCount, 10) : void 0,
      target_parts_count: targetPartsCount ? parseInt(targetPartsCount, 10) : void 0,
      tags: tags.trim() || void 0,
      due_date: dueDate || void 0,
      priority,
      budget: budget.trim() ? parseFloat(budget) : null,
      ...project && { status }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg w-full max-w-md border border-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: project ? t("projects.editProject") : t("projects.newProject") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("common.name") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: name,
            onChange: (e) => setName(e.target.value),
            className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
            placeholder: t("projects.namePlaceholder"),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("common.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: description,
            onChange: (e) => setDescription(e.target.value),
            className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green resize-none",
            placeholder: t("projects.descriptionPlaceholder"),
            rows: 2
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("projects.color") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: PROJECT_COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setColor(c),
            className: `w-8 h-8 rounded-full transition-transform ${color === c ? "ring-2 ring-white ring-offset-2 ring-offset-bambu-dark-secondary scale-110" : ""}`,
            style: { backgroundColor: c }
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("projects.targetPlates") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: targetCount,
              onChange: (e) => setTargetCount(e.target.value),
              className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
              placeholder: t("projects.targetPlatesPlaceholder"),
              min: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("projects.targetPlatesHelp") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("projects.targetParts") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: targetPartsCount,
              onChange: (e) => setTargetPartsCount(e.target.value),
              className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
              placeholder: t("projects.targetPartsPlaceholder"),
              min: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("projects.targetPartsHelp") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("projects.tagsLabel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: tags,
            onChange: (e) => setTags(e.target.value),
            className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
            placeholder: t("projects.tagsPlaceholder")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("projects.dueDate") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: dueDate,
              onChange: (e) => setDueDate(e.target.value),
              className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("projects.priority") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: priority,
              onChange: (e) => setPriority(e.target.value),
              className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: t("projects.priorityLow") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "normal", children: t("projects.priorityNormal") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: t("projects.priorityHigh") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "urgent", children: t("projects.priorityUrgent") })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("projectDetail.cost.budget") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-bambu-gray pointer-events-none", children: currencySymbol }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              step: "0.01",
              min: "0",
              value: budget,
              onChange: (e) => setBudget(e.target.value),
              className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded pl-8 pr-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
              placeholder: "0.00"
            }
          )
        ] })
      ] }),
      project && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("common.status") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: status,
            onChange: (e) => setStatus(e.target.value),
            className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: t("projects.statusActive") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: t("projects.statusCompleted") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "archived", children: t("projects.statusArchived") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, children: t("common.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: !name.trim() || isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : project ? t("common.save") : t("projects.create") })
      ] })
    ] })
  ] }) });
}
function ProjectCard({ project, onClick, onEdit, onDelete, hasPermission, t }) {
  const platesProgressPercent = project.target_count ? Math.round(project.archive_count / project.target_count * 100) : 0;
  const partsProgressPercent = project.target_parts_count ? Math.round(project.completed_count / project.target_parts_count * 100) : 0;
  const isCompleted = project.status === "completed";
  const isArchived = project.status === "archived";
  const [showActions, setShowActions] = reactExports.useState(false);
  const getStatusConfig = () => {
    if (isCompleted) return { icon: CircleCheck, color: "text-bambu-green", bg: "bg-bambu-green/10" };
    if (isArchived) return { icon: Archive, color: "text-bambu-gray", bg: "bg-bambu-gray/10" };
    if (project.queue_count > 0) return { icon: Clock, color: "text-blue-400", bg: "bg-blue-400/10" };
    return { icon: FolderKanban, color: "text-bambu-gray", bg: "bg-bambu-gray/10" };
  };
  const statusConfig = getStatusConfig();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative bg-gradient-to-br from-bambu-card to-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary hover:border-bambu-green/50 hover:shadow-lg hover:shadow-bambu-green/5 transition-all duration-300 cursor-pointer overflow-hidden",
      onClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 w-1.5 h-full",
            style: {
              backgroundColor: project.color || "#6b7280",
              boxShadow: `0 0 12px ${project.color || "#6b7280"}40`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 pl-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg ${statusConfig.bg} flex-shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(statusConfig.icon, { className: `w-5 h-5 ${statusConfig.color}` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white truncate", children: project.name }),
                  project.target_parts_count ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-0.5 rounded-full whitespace-nowrap font-medium ${partsProgressPercent >= 100 ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark text-bambu-gray"}`, children: [
                    project.completed_count,
                    "/",
                    project.target_parts_count,
                    " ",
                    t("projects.parts")
                  ] }) : project.target_count ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-0.5 rounded-full whitespace-nowrap font-medium ${platesProgressPercent >= 100 ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark text-bambu-gray"}`, children: [
                    project.archive_count,
                    "/",
                    project.target_count,
                    " ",
                    t("projects.plates")
                  ] }) : project.completed_count > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-2 py-0.5 rounded-full whitespace-nowrap font-medium bg-bambu-dark text-bambu-gray", children: [
                    project.completed_count,
                    " ",
                    t("projects.parts")
                  ] }) : null,
                  isCompleted && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-bambu-green/20 text-bambu-green px-2 py-0.5 rounded-full whitespace-nowrap", children: t("projects.done") }),
                  isArchived && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-bambu-gray/20 text-bambu-gray px-2 py-0.5 rounded-full whitespace-nowrap", children: t("projects.statusArchived") })
                ] }),
                project.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray/70 mt-1 line-clamp-1", children: project.description }),
                project.archives && project.archives.length > 0 && (() => {
                  const allMaterials = project.archives.map((a) => a.filament_type).filter(Boolean).flatMap((m) => m.split(",").map((s) => s.trim())).filter(Boolean);
                  const materials = [...new Set(allMaterials)];
                  const allColors = project.archives.map((a) => a.filament_color).filter(Boolean).flatMap((c) => c.split(",").map((s) => s.trim())).filter((c) => c.startsWith("#") || /^[0-9A-Fa-f]{6}$/.test(c));
                  const colors = [...new Set(allColors)];
                  if (materials.length === 0 && colors.length === 0) return null;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5", children: [
                    materials.slice(0, 3).map((mat) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 bg-bambu-dark text-bambu-gray rounded", children: mat }, mat)),
                    colors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
                      colors.slice(0, 5).map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-3 h-3 rounded-full border border-black/20",
                          style: { backgroundColor: col.startsWith("#") ? col : `#${col}` },
                          title: col
                        },
                        col
                      )),
                      colors.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-bambu-gray ml-0.5", children: [
                        "+",
                        colors.length - 5
                      ] })
                    ] })
                  ] });
                })()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", onClick: (e) => e.stopPropagation(), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "p-1.5 rounded-lg hover:bg-bambu-dark text-bambu-gray hover:text-white transition-colors opacity-0 group-hover:opacity-100",
                  onClick: () => setShowActions(!showActions),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4" })
                }
              ),
              showActions && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setShowActions(false) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-8 z-20 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl py-1 min-w-[120px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      className: `w-full px-3 py-2 text-left text-sm flex items-center gap-2 ${hasPermission("projects:update") ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                      onClick: () => {
                        if (hasPermission("projects:update")) {
                          onEdit();
                          setShowActions(false);
                        }
                      },
                      disabled: !hasPermission("projects:update"),
                      title: !hasPermission("projects:update") ? t("projects.noEditPermission") : void 0,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4" }),
                        t("common.edit")
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      className: `w-full px-3 py-2 text-left text-sm flex items-center gap-2 ${hasPermission("projects:delete") ? "text-red-400 hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                      onClick: () => {
                        if (hasPermission("projects:delete")) {
                          onDelete();
                          setShowActions(false);
                        }
                      },
                      disabled: !hasPermission("projects:delete"),
                      title: !hasPermission("projects:delete") ? t("projects.noDeletePermission") : void 0,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: project.target_count || project.target_parts_count ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            project.target_count && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("projects.plates") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: platesProgressPercent >= 100 ? "text-bambu-green font-medium" : "text-white", children: [
                  project.archive_count,
                  " / ",
                  project.target_count
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-bambu-dark/80 rounded-full overflow-hidden backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full transition-all duration-500 ease-out rounded-full relative",
                  style: {
                    width: `${Math.min(platesProgressPercent, 100)}%`,
                    background: platesProgressPercent >= 100 ? "linear-gradient(90deg, #22c55e, #4ade80)" : `linear-gradient(90deg, ${project.color || "#6b7280"}, ${project.color || "#6b7280"}cc)`,
                    boxShadow: `0 0 8px ${platesProgressPercent >= 100 ? "#22c55e" : project.color || "#6b7280"}60`
                  }
                }
              ) })
            ] }),
            project.target_parts_count && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("projects.parts") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: partsProgressPercent >= 100 ? "text-bambu-green font-medium" : "text-white", children: [
                  project.completed_count,
                  " / ",
                  project.target_parts_count
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-bambu-dark/80 rounded-full overflow-hidden backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full transition-all duration-500 ease-out rounded-full relative",
                  style: {
                    width: `${Math.min(partsProgressPercent, 100)}%`,
                    background: partsProgressPercent >= 100 ? "linear-gradient(90deg, #22c55e, #4ade80)" : `linear-gradient(90deg, ${project.color || "#6b7280"}, ${project.color || "#6b7280"}cc)`,
                    boxShadow: `0 0 8px ${partsProgressPercent >= 100 ? "#22c55e" : project.color || "#6b7280"}60`
                  }
                }
              ) })
            ] }),
            project.failed_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-red-400", children: [
              project.failed_count,
              " ",
              t("projects.failed")
            ] })
          ] }) : project.completed_count > 0 || project.failed_count > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs", children: [
            project.completed_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-bambu-gray", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                project.completed_count,
                " ",
                t("projects.completed")
              ] })
            ] }),
            project.failed_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-red-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                project.failed_count,
                " ",
                t("projects.failed")
              ] })
            ] }),
            project.queue_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-blue-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                project.queue_count,
                " ",
                t("projects.inQueue")
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray/60 italic", children: t("projects.noPrintsYet") }) }),
          project.archives && project.archives.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: project.archives.slice(0, 4).map((archive) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative aspect-square rounded-lg bg-bambu-dark overflow-hidden border border-bambu-dark-tertiary",
                title: archive.print_name || "Unknown",
                children: [
                  archive.thumbnail_path ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: api.getArchiveThumbnail(archive.id),
                      alt: archive.print_name || "",
                      className: "w-full h-full object-cover"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-bambu-gray/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-6 h-6" }) }),
                  archive.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-red-500/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-white" }) })
                ]
              },
              archive.id
            )) }),
            project.archive_count > 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1.5 text-center", children: t("common.more", { count: project.archive_count - 4 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-bambu-dark-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-bambu-gray", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", title: t("projects.printJobs"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5 text-blue-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  project.archive_count,
                  " ",
                  t("projects.plates")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", title: t("projects.partsPrinted"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5 text-bambu-green" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  project.completed_count,
                  " ",
                  t("projects.parts")
                ] })
              ] }),
              project.failed_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-red-400", title: t("projects.failedParts"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.failed_count })
              ] }),
              project.queue_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-yellow-400", title: t("projects.inQueue"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ListTodo, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.queue_count })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-bambu-gray/50 group-hover:text-bambu-gray transition-colors" })
          ] })
        ] })
      ]
    }
  );
}
function ProjectsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [showModal, setShowModal] = reactExports.useState(false);
  const [editingProject, setEditingProject] = reactExports.useState();
  const [statusFilter, setStatusFilter] = reactExports.useState("active");
  const [deleteConfirm, setDeleteConfirm] = reactExports.useState(null);
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const currencySymbol = getCurrencySymbol(settings?.currency || "USD");
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", statusFilter === "all" ? void 0 : statusFilter],
    queryFn: () => api.getProjects(statusFilter === "all" ? void 0 : statusFilter)
  });
  const createMutation = useMutation({
    mutationFn: (data) => api.createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      setShowModal(false);
      showToast(t("projects.toast.created"), "success");
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateProject(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      setShowModal(false);
      setEditingProject(void 0);
      showToast(t("projects.toast.updated"), "success");
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => api.deleteProject(id),
    onSuccess: () => {
      setDeleteConfirm(null);
      showToast(t("projects.toast.deleted"), "success");
      setTimeout(() => window.location.reload(), 100);
    },
    onError: (error) => {
      setDeleteConfirm(null);
      showToast(error.message, "error");
    }
  });
  const importMutation = useMutation({
    mutationFn: (data) => api.importProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      showToast(t("projects.toast.imported"), "success");
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const fileInputRef = reactExports.useRef(null);
  const handleExportAll = async () => {
    try {
      const allProjects = await api.getProjects();
      const exports$1 = await Promise.all(
        allProjects.map(async (p) => {
          const exported = await api.exportProjectJson(p.id);
          return exported;
        })
      );
      const blob = new Blob([JSON.stringify(exports$1, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bambuddy_projects_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast(t("projects.toast.exported"), "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };
  const handleImportClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const filename = file.name.toLowerCase();
      if (filename.endsWith(".zip")) {
        await api.importProjectFile(file);
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        showToast(t("projects.toast.imported"), "success");
      } else {
        const text = await file.text();
        const data = JSON.parse(text);
        const projectsToImport = Array.isArray(data) ? data : [data];
        for (const project of projectsToImport) {
          await importMutation.mutateAsync(project);
        }
        if (projectsToImport.length > 1) {
          showToast(t("projects.toast.multipleImported", { count: projectsToImport.length }), "success");
        }
      }
    } catch (error) {
      showToast(`${t("projects.toast.importFailed")}: ${error.message}`, "error");
    }
    e.target.value = "";
  };
  const handleSave = (data) => {
    if (editingProject) {
      updateMutation.mutate({ id: editingProject.id, data });
    } else {
      createMutation.mutate(data);
    }
  };
  const handleEdit = (project) => {
    setEditingProject(project);
    setShowModal(true);
  };
  const handleClick = (project) => {
    navigate(`/projects/${project.id}`);
  };
  const handleDeleteClick = (id) => {
    setDeleteConfirm(id);
  };
  const handleDeleteConfirm = () => {
    if (deleteConfirm !== null) {
      deleteMutation.mutate(deleteConfirm);
    }
  };
  const projectCounts = projects?.reduce((acc, p) => {
    acc[p.status] = (acc[p.status] || 0) + 1;
    acc.all = (acc.all || 0) + 1;
    return acc;
  }, {}) || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: ".json,.zip",
        onChange: handleFileChange,
        className: "hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-bambu-green/10 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-6 h-6 text-bambu-green" }) }),
          t("projects.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-2 ml-14", children: t("projects.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: handleImportClick,
            disabled: !hasPermission("projects:create"),
            title: !hasPermission("projects:create") ? t("projects.noImportPermission") : t("projects.importProject"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4 mr-2" }),
              t("projects.import")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: handleExportAll,
            disabled: !hasPermission("projects:read"),
            title: !hasPermission("projects:read") ? t("projects.noExportPermission") : t("projects.exportAll"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
              t("projects.export")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: () => setShowModal(true),
            className: "sm:w-auto w-full",
            disabled: !hasPermission("projects:create"),
            title: !hasPermission("projects:create") ? t("projects.noCreatePermission") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
              t("projects.newProject")
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 p-1 bg-bambu-dark rounded-xl w-fit", children: [
      { key: "active", label: t("projects.statusActive"), icon: Clock },
      { key: "completed", label: t("projects.statusCompleted"), icon: CircleCheck },
      { key: "archived", label: t("projects.statusArchived"), icon: Archive },
      { key: "all", label: t("common.all"), icon: FolderKanban }
    ].map(({ key, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setStatusFilter(key),
        className: `flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all ${statusFilter === key ? "bg-bambu-card text-white shadow-sm" : "text-bambu-gray hover:text-white"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
          projectCounts[key] > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-1.5 py-0.5 rounded-full ${statusFilter === key ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark-tertiary"}`, children: projectCounts[key] })
        ]
      },
      key
    )) }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-bambu-green" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("projects.loading") })
    ] }) }) : projects?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-bambu-dark rounded-2xl mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "w-12 h-12 text-bambu-gray/50" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-white mb-2", children: statusFilter === "all" ? t("projects.noProjects") : t("projects.noProjectsFiltered", { status: statusFilter }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center max-w-md mb-6", children: statusFilter === "all" ? t("projects.createFirst") : t("projects.noProjectsFilteredHelp", { status: statusFilter }) }),
      statusFilter === "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => setShowModal(true),
          disabled: !hasPermission("projects:create"),
          title: !hasPermission("projects:create") ? t("projects.noCreatePermission") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
            t("projects.createFirstButton")
          ]
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8", children: projects?.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProjectCard,
      {
        project,
        onClick: () => handleClick(project),
        onEdit: () => handleEdit(project),
        onDelete: () => handleDeleteClick(project.id),
        hasPermission,
        t
      },
      project.id
    )) }),
    deleteConfirm !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("projects.deleteProject"),
        message: t("projects.deleteConfirm"),
        confirmText: t("projects.deleteProject"),
        variant: "danger",
        onConfirm: handleDeleteConfirm,
        onCancel: () => setDeleteConfirm(null)
      }
    ),
    showModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProjectModal,
      {
        project: editingProject,
        onClose: () => {
          setShowModal(false);
          setEditingProject(void 0);
        },
        onSave: handleSave,
        isLoading: createMutation.isPending || updateMutation.isPending,
        currencySymbol,
        t
      }
    )
  ] });
}
const ProjectsPage$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProjectModal,
  ProjectsPage
}, Symbol.toStringTag, { value: "Module" }));
export {
  ListTodo as L,
  ProjectModal as P,
  ProjectsPage$1 as a
};
