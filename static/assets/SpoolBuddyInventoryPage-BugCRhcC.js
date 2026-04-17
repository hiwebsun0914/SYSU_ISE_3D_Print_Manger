import { u as useTranslation, r as reactExports, d as useQuery, j as jsxRuntimeExports, X, f as api } from "./index-CeSodUhS.js";
import { r as resolveSpoolColorName } from "./colors-lMyZBYSI.js";
import { f as formatSlotLabel } from "./amsHelpers-BrH_pr4r.js";
import { S as Search } from "./search-DTjW5Uxm.js";
import { P as Package } from "./package-D76dkLyW.js";
function spoolColor(spool) {
  if (spool.rgba) return `#${spool.rgba.substring(0, 6)}`;
  return "#808080";
}
function spoolRemaining(spool) {
  return Math.max(0, spool.label_weight - spool.weight_used);
}
function spoolPct(spool) {
  if (spool.label_weight <= 0) return 0;
  return Math.max(0, Math.min(100, (spool.label_weight - spool.weight_used) / spool.label_weight * 100));
}
function spoolDisplayName(spool) {
  const parts = [spool.material];
  if (spool.subtype) parts.push(spool.subtype);
  return parts.join(" ");
}
function assignmentLabel(a) {
  const isExternal = a.ams_id === 254 || a.ams_id === 255;
  const isHt = !isExternal && a.ams_id >= 128;
  return formatSlotLabel(a.ams_id, a.tray_id, isHt, isExternal);
}
function SpoolCircle({ color, size = 56 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 56 56", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "26", fill: color }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "20", fill: color, style: { filter: "brightness(0.85)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "20", cy: "20", rx: "6", ry: "4", fill: "white", opacity: "0.3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "8", fill: "#2d2d2d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "5", fill: "#1a1a1a" })
  ] });
}
function SpoolBuddyInventoryPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filterMode, setFilterMode] = reactExports.useState("all");
  const [selectedSpoolId, setSelectedSpoolId] = reactExports.useState(null);
  const { data: spoolmanSettings } = useQuery({
    queryKey: ["spoolman-settings"],
    queryFn: api.getSpoolmanSettings,
    staleTime: 5 * 60 * 1e3
  });
  const { data: spools = [], isLoading } = useQuery({
    queryKey: ["inventory-spools"],
    queryFn: () => api.getSpools(false),
    refetchInterval: 3e4
  });
  const { data: assignments = [] } = useQuery({
    queryKey: ["spool-assignments"],
    queryFn: () => api.getAssignments(),
    refetchInterval: 3e4
  });
  const assignmentMap = reactExports.useMemo(() => {
    const map = {};
    assignments.forEach((a) => {
      map[a.spool_id] = a;
    });
    return map;
  }, [assignments]);
  const activeSpools = reactExports.useMemo(() => spools.filter((s) => !s.archived_at), [spools]);
  const assignedSpoolIds = reactExports.useMemo(() => new Set(assignments.map((a) => a.spool_id)), [assignments]);
  const inAmsCount = reactExports.useMemo(() => activeSpools.filter((s) => assignedSpoolIds.has(s.id)).length, [activeSpools, assignedSpoolIds]);
  const materials = reactExports.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    activeSpools.forEach((s) => set.add(s.material));
    return Array.from(set).sort();
  }, [activeSpools]);
  const filteredSpools = reactExports.useMemo(() => {
    let list = activeSpools;
    if (filterMode === "in_ams") {
      list = list.filter((s) => assignedSpoolIds.has(s.id));
    } else if (filterMode !== "all") {
      list = list.filter((s) => s.material === filterMode);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (s) => s.material.toLowerCase().includes(q) || s.subtype && s.subtype.toLowerCase().includes(q) || s.brand && s.brand.toLowerCase().includes(q) || s.color_name && s.color_name.toLowerCase().includes(q) || s.note && s.note.toLowerCase().includes(q)
      );
    }
    return [...list].sort((a, b) => {
      const aAssigned = assignedSpoolIds.has(a.id) ? 0 : 1;
      const bAssigned = assignedSpoolIds.has(b.id) ? 0 : 1;
      if (aAssigned !== bAssigned) return aAssigned - bAssigned;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
  }, [activeSpools, filterMode, searchQuery, assignedSpoolIds]);
  const spoolmanEnabled = spoolmanSettings?.spoolman_enabled === "true" && spoolmanSettings?.spoolman_url;
  if (spoolmanEnabled) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        src: `${spoolmanSettings.spoolman_url.replace(/\/+$/, "")}/spool`,
        className: "flex-1 w-full border-0",
        title: "Spoolman",
        sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 pb-2 space-y-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: t("spoolbuddy.inventory.searchPlaceholder", "Search spools..."),
            className: "w-full pl-9 pr-8 py-2 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-bambu-green"
          }
        ),
        searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSearchQuery(""),
            className: "absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 overflow-x-auto no-scrollbar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterPill,
          {
            active: filterMode === "all",
            onClick: () => setFilterMode("all"),
            label: `${t("spoolbuddy.inventory.all", "All")} (${activeSpools.length})`,
            green: true
          }
        ),
        inAmsCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterPill,
          {
            active: filterMode === "in_ams",
            onClick: () => setFilterMode("in_ams"),
            label: `${t("spoolbuddy.inventory.inAms", "In AMS")} (${inAmsCount})`
          }
        ),
        materials.map((mat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterPill,
          {
            active: filterMode === mat,
            onClick: () => setFilterMode(filterMode === mat ? "all" : mat),
            label: mat
          },
          mat
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-3 pb-3", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-bambu-green border-t-transparent rounded-full animate-spin" }) }) : filteredSpools.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-white/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: searchQuery || filterMode !== "all" ? t("spoolbuddy.inventory.noResults", "No spools match your filters") : t("spoolbuddy.inventory.empty", "No spools in inventory") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2", children: filteredSpools.map((spool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      CatalogCard,
      {
        spool,
        assignment: assignmentMap[spool.id],
        onClick: () => setSelectedSpoolId(spool.id)
      },
      spool.id
    )) }) }),
    selectedSpoolId != null && (() => {
      const liveSpool = spools.find((s) => s.id === selectedSpoolId);
      if (!liveSpool) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        SpoolDetailModal,
        {
          spool: liveSpool,
          assignment: assignmentMap[liveSpool.id],
          onClose: () => setSelectedSpoolId(null)
        }
      );
    })()
  ] });
}
function FilterPill({ active, onClick, label, green }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick,
      className: `px-4 py-1.5 rounded-full text-sm font-medium border whitespace-nowrap shrink-0 transition-colors ${active ? green ? "bg-bambu-green/20 text-bambu-green border-bambu-green/50" : "bg-white/10 text-white border-white/20" : "bg-transparent text-white/40 border-bambu-dark-tertiary hover:text-white/60"}`,
      children: label
    }
  );
}
function CatalogCard({ spool, assignment, onClick }) {
  const color = spoolColor(spool);
  const pct = spoolPct(spool);
  const remaining = spoolRemaining(spool);
  const colorName = resolveSpoolColorName(spool.color_name, spool.rgba);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "bg-bambu-dark-secondary rounded-xl p-3 flex flex-col items-center text-center gap-1.5 border border-transparent hover:border-bambu-green/50 transition-colors",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpoolCircle, { color, size: 56 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-white leading-tight truncate w-full", children: spoolDisplayName(spool) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 min-w-0 max-w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "w-2.5 h-2.5 rounded-full shrink-0 border border-white/10",
              style: { backgroundColor: color }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-white/50 truncate", children: colorName || "-" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-bambu-dark-tertiary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-full rounded-full ${pct > 50 ? "bg-bambu-green" : pct > 20 ? "bg-yellow-500" : "bg-red-500"}`,
              style: { width: `${Math.min(pct, 100)}%` }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white/40", children: [
            Math.round(remaining),
            "g (",
            Math.round(pct),
            "%)"
          ] })
        ] }),
        assignment && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold bg-bambu-green/20 text-bambu-green", children: assignmentLabel(assignment) })
      ]
    }
  );
}
function SpoolDetailModal({ spool, assignment, onClose }) {
  const { t } = useTranslation();
  const color = spoolColor(spool);
  const pct = spoolPct(spool);
  const remaining = spoolRemaining(spool);
  const colorName = resolveSpoolColorName(spool.color_name, spool.rgba);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "h-full w-full bg-bambu-dark overflow-y-auto",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-4 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SpoolCircle, { color, size: 72 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: spoolDisplayName(spool) }),
            spool.brand && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50", children: spool.brand }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-3 h-3 rounded-full border border-white/10",
                  style: { backgroundColor: color }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: colorName || "-" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-white/50 mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("spoolbuddy.inventory.remaining", "Remaining") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                Math.round(remaining),
                "g (",
                Math.round(pct),
                "%)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-bambu-dark-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-full rounded-full transition-all ${pct > 50 ? "bg-bambu-green" : pct > 20 ? "bg-yellow-500" : "bg-red-500"}`,
                style: { width: `${Math.min(pct, 100)}%` }
              }
            ) })
          ] }),
          assignment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-md text-xs font-bold bg-bambu-green/20 text-bambu-green", children: assignmentLabel(assignment) }),
            assignment.printer_name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40", children: assignment.printer_name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.labelWeight", "Label Weight"),
                value: `${spool.label_weight}g`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.weightUsed", "Used"),
                value: spool.weight_used > 0 ? `${Math.round(spool.weight_used)}g` : "-"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.coreWeight", "Core Weight"),
                value: spool.core_weight > 0 ? `${spool.core_weight}g` : "-"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.grossWeight", "Gross Weight"),
                value: `${spool.label_weight + spool.core_weight}g`
              }
            ),
            spool.nozzle_temp_min != null && spool.nozzle_temp_max != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.nozzleTemp", "Nozzle Temp"),
                value: `${spool.nozzle_temp_min}-${spool.nozzle_temp_max}°C`
              }
            ),
            spool.cost_per_kg != null && spool.cost_per_kg > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.costPerKg", "Cost/kg"),
                value: `${spool.cost_per_kg.toFixed(2)}/kg`
              }
            ),
            spool.last_scale_weight != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.lastScaleWeight", "Scale Weight"),
                value: `${Math.round(spool.last_scale_weight)}g`
              }
            ),
            spool.tag_uid && /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.tagId", "Tag"),
                value: spool.tag_uid,
                mono: true
              }
            ),
            (spool.slicer_filament_name || spool.slicer_filament) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              DetailItem,
              {
                label: t("spoolbuddy.inventory.slicerFilament", "Slicer Filament"),
                value: spool.slicer_filament_name || spool.slicer_filament || ""
              }
            )
          ] }),
          spool.k_profiles && spool.k_profiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/40 mb-1.5", children: t("spoolbuddy.inventory.kProfiles", "PA K-Profiles") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: spool.k_profiles.map((kp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-bambu-dark-secondary rounded-lg px-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/70 truncate", children: kp.name || `${kp.nozzle_diameter}mm ${kp.nozzle_type || ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-mono text-bambu-green shrink-0 ml-2", children: kp.k_value.toFixed(3) })
            ] }, kp.id)) })
          ] }),
          spool.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/40 mb-1", children: t("spoolbuddy.inventory.note", "Note") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70", children: spool.note })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "w-full py-3 rounded-xl bg-bambu-dark-secondary hover:bg-bambu-dark-tertiary text-white/60 hover:text-white text-sm font-medium transition-colors",
              children: t("spoolbuddy.inventory.close", "Close")
            }
          )
        ] })
      ]
    }
  ) });
}
function DetailItem({ label, value, mono }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/40 uppercase tracking-wide", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm text-white mt-0.5 truncate ${mono ? "font-mono text-xs" : ""}`, children: value })
  ] });
}
export {
  SpoolBuddyInventoryPage
};
