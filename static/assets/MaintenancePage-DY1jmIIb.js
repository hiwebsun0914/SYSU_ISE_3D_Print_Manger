import { c as createLucideIcon, u as useTranslation, b as useQueryClient, a as useToast, k as useAuth, r as reactExports, d as useQuery, e as useMutation, j as jsxRuntimeExports, L as LoaderCircle, y as Card, z as CardContent, N as Wrench, f as api, T as TriangleAlert, a7 as ChevronUp, A as ChevronDown, B as Button, O as Layers, Z as Zap, o as Calendar, J as Printer, h as ConfirmModal, E as ExternalLink } from "./index-CeSodUhS.js";
import { T as Toggle } from "./Toggle-Baq_Nz0x.js";
import { C as Clock } from "./clock-rmajxGGN.js";
import { C as Check } from "./check-RkcQbG5G.js";
import { T as Timer } from "./timer-indwNqib.js";
import { P as PenLine } from "./pen-line-Bvr2Ex69.js";
import { P as Plus } from "./plus-D6b2aHzR.js";
import { F as Funnel } from "./funnel-DeSL-Qb3.js";
import { S as Settings } from "./settings-ZMEjdRzt.js";
import { R as RefreshCw } from "./refresh-cw-DqzYoyVU.js";
import { T as Target } from "./target-C1lOXUxZ.js";
import { B as Box } from "./box-CIh9yAhv.js";
import { T as Thermometer, F as Flame } from "./thermometer-C3iKLPSw.js";
import { W as Wind, F as Fan, C as Cable } from "./wind-DlFG24wC.js";
import { S as Square } from "./square-C8lG918a.js";
import { S as Sparkles } from "./sparkles-CZhBbNMC.js";
import { D as Droplet } from "./droplet-DVA4SgsI.js";
import { T as Trash2 } from "./trash-2-V7jM6WFN.js";
import { R as RotateCcw } from "./rotate-ccw-B9yPDYYb.js";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
];
const CircleDot = createLucideIcon("circle-dot", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }]
];
const Cog = createLucideIcon("cog", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
];
const Ruler = createLucideIcon("ruler", __iconNode);
const iconMap = {
  Droplet,
  Flame,
  Ruler,
  Sparkles,
  Square,
  Cable,
  Wrench,
  Calendar,
  Timer,
  Cog,
  Fan,
  Zap,
  Wind,
  Thermometer,
  Layers,
  Box,
  Target,
  RefreshCw,
  Settings,
  Filter: Funnel,
  CircleDot
};
function getIcon(iconName) {
  if (!iconName) return Wrench;
  return iconMap[iconName] || Wrench;
}
const maintenanceTypeKeyMap = {
  "Lubricate Carbon Rods": "lubricateCarbonRods",
  "Lubricate Linear Rails": "lubricateRails",
  "Clean Nozzle/Hotend": "cleanNozzle",
  "Check Belt Tension": "checkBelts",
  "Clean Build Plate": "cleanBuildPlate",
  "Check Extruder Gears": "checkExtruder",
  "Check Cooling Fans": "checkCooling",
  "General Inspection": "generalInspection",
  "Clean Carbon Rods": "cleanCarbonRods",
  "Lubricate Steel Rods": "lubricateSteelRods",
  "Clean Steel Rods": "cleanSteelRods",
  "Clean Linear Rails": "cleanLinearRails",
  "Check PTFE Tube": "checkPtfeTube",
  "Replace HEPA Filter": "replaceHepaFilter",
  "HEPA Filter": "replaceHepaFilter",
  "Replace Carbon Filter": "replaceCarbonFilter",
  "Carbon Filter": "replaceCarbonFilter",
  "Lubricate Left Nozzle Rail": "lubricateLeftNozzleRail",
  "Left Nozzle Rail": "lubricateLeftNozzleRail"
};
function getMaintenanceTypeLabel(typeName, t) {
  const key = maintenanceTypeKeyMap[typeName];
  return key ? t(`maintenance.types.${key}`) : typeName;
}
function formatDuration(value, type, t) {
  if (type === "days") {
    if (value < 1) return t ? t("common.today") : "Today";
    if (value === 1) return t ? t("maintenance.day") : "1 day";
    if (value < 7) {
      const days = Math.round(value);
      return t ? t("maintenance.days", { count: days }) : `${days} days`;
    }
    if (value < 180) {
      const weeks = Math.round(value / 7);
      if (weeks === 1) return t ? t("maintenance.week") : "1 week";
      return t ? t("maintenance.weeks", { count: weeks }) : `${weeks} weeks`;
    }
    const months = Math.round(value / 30);
    if (months === 1) return t ? t("maintenance.month") : "1 month";
    return t ? t("maintenance.months", { count: months }) : `${months} months`;
  } else {
    if (value < 1) {
      const minutes = Math.max(1, Math.round(value * 60));
      if (!t) return `${minutes}m`;
      return minutes === 1 ? t("maintenance.minute") : t("maintenance.minutes", { count: minutes });
    }
    if (value < 24) {
      const hours = value < 10 ? Number(value.toFixed(1)) : Math.round(value);
      if (!t) return `${hours}h`;
      return hours === 1 ? t("maintenance.hour") : t("maintenance.hoursCount", { count: hours });
    }
    const days = value / 24;
    if (days < 7) {
      const displayDays = days < 2 ? Number(days.toFixed(1)) : Math.round(days);
      if (!t) return `${displayDays}d`;
      return displayDays === 1 ? t("maintenance.day") : t("maintenance.days", { count: displayDays });
    }
    const weeks = days / 7;
    if (weeks < 12) {
      const displayWeeks = weeks < 2 ? Number(weeks.toFixed(1)) : Math.round(weeks);
      if (!t) return `${displayWeeks}w`;
      return displayWeeks === 1 ? t("maintenance.week") : t("maintenance.weeks", { count: displayWeeks });
    }
    const months = Math.round(weeks / 4);
    if (!t) return `${months}mo`;
    return months === 1 ? t("maintenance.month") : t("maintenance.months", { count: months });
  }
}
function formatIntervalLabel(value, type, t) {
  if (type === "days") {
    if (value === 1) return t ? t("maintenance.day") : "1 day";
    if (value === 7) return t ? t("maintenance.week") : "1 week";
    if (value === 14) return t ? t("maintenance.weeks", { count: 2 }) : "2 weeks";
    if (value === 30) return t ? t("maintenance.month") : "1 month";
    if (value === 60) return t ? t("maintenance.months", { count: 2 }) : "2 months";
    if (value === 90) return t ? t("maintenance.months", { count: 3 }) : "3 months";
    if (value === 180) return t ? t("maintenance.months", { count: 6 }) : "6 months";
    if (value === 365) return t ? t("maintenance.year") : "1 year";
    return t ? t("maintenance.days", { count: value }) : `${value} days`;
  }
  if (!t) return `${value}h`;
  return value === 1 ? t("maintenance.hour") : t("maintenance.hoursCount", { count: value });
}
function getMaintenanceWikiUrl(typeName, printerModel) {
  const model = (printerModel || "").toUpperCase().replace(/[- ]/g, "");
  const isX1 = model.includes("X1");
  const isP1 = model.includes("P1");
  const isA1Mini = model.includes("A1MINI");
  const isA1 = model.includes("A1") && !isA1Mini;
  const isH2D = model.includes("H2D");
  const isH2C = model.includes("H2C");
  const isH2S = model.includes("H2S");
  const isH2 = isH2D || isH2C || isH2S;
  const isP2S = model.includes("P2S");
  switch (typeName) {
    case "Lubricate Steel Rods":
      if (isP2S) return "https://wiki.bambulab.com/en/p2s/maintenance/lubricate-x-y-z-axis";
      return null;
    case "Clean Steel Rods":
      if (isP2S) return "https://wiki.bambulab.com/en/p2s/maintenance/lubricate-x-y-z-axis";
      return null;
    case "Lubricate Linear Rails":
      if (isA1Mini) return "https://wiki.bambulab.com/en/a1-mini/maintenance/lubricate-y-axis";
      if (isA1) return "https://wiki.bambulab.com/en/a1/maintenance/lubricate-y-axis";
      if (isH2) return "https://wiki.bambulab.com/en/h2/maintenance/x-axis-lubrication";
      return null;
    case "Clean Nozzle/Hotend":
      if (isX1 || isP1) return "https://wiki.bambulab.com/en/x1/troubleshooting/nozzle-clog";
      if (isA1Mini || isA1) return "https://wiki.bambulab.com/en/a1-mini/troubleshooting/nozzle-clog";
      if (isH2) return "https://wiki.bambulab.com/en/h2/maintenance/nozzl-cold-pull-maintenance-and-cleaning";
      if (isP2S) return "https://wiki.bambulab.com/en/p2s/maintenance/cold-pull-maintenance-hotend";
      return "https://wiki.bambulab.com/en/x1/troubleshooting/nozzle-clog";
    case "Check Belt Tension":
      if (isX1) return "https://wiki.bambulab.com/en/x1/maintenance/belt-tension";
      if (isP1) return "https://wiki.bambulab.com/en/p1/maintenance/p1p-maintenance";
      if (isA1Mini) return "https://wiki.bambulab.com/en/a1-mini/maintenance/belt_tension";
      if (isA1) return "https://wiki.bambulab.com/en/a1/maintenance/belt_tension";
      if (isH2D) return "https://wiki.bambulab.com/en/h2/maintenance/belt-tension";
      if (isH2C) return "https://wiki.bambulab.com/en/h2c/maintenance/belt-tension";
      if (isH2S) return "https://wiki.bambulab.com/en/h2s/maintenance/belt-tension";
      if (isP2S) return "https://wiki.bambulab.com/en/p2s/maintenance/belt-tension";
      return "https://wiki.bambulab.com/en/x1/maintenance/belt-tension";
    case "Clean Carbon Rods":
      if (isX1 || isP1) return "https://wiki.bambulab.com/en/general/carbon-rods-clearance";
      return null;
    case "Clean Linear Rails":
      if (isA1Mini) return "https://wiki.bambulab.com/en/a1-mini/maintenance/lubricate-y-axis";
      if (isA1) return "https://wiki.bambulab.com/en/a1/maintenance/lubricate-y-axis";
      if (isH2) return "https://wiki.bambulab.com/en/h2/maintenance/x-axis-lubrication";
      return null;
    case "Clean Build Plate":
      return "https://wiki.bambulab.com/en/filament-acc/acc/pei-plate-clean-guide";
    case "Check PTFE Tube":
      if (isX1 || isP1) return "https://wiki.bambulab.com/en/x1/maintenance/replace-ptfe-tube";
      if (isA1Mini || isA1) return "https://wiki.bambulab.com/en/a1-mini/maintenance/ptfe-tube";
      if (isH2D) return "https://wiki.bambulab.com/en/h2/maintenance/replace-ptfe-tube-on-h2d-printer";
      if (isH2S) return "https://wiki.bambulab.com/en/h2s/maintenance/replace-ptfe-tube-on-h2s-printer";
      if (isH2C) return "https://wiki.bambulab.com/en/h2/maintenance/replace-ptfe-tube-on-h2d-printer";
      if (isP2S) return "https://wiki.bambulab.com/en/x1/maintenance/replace-ptfe-tube";
      return "https://wiki.bambulab.com/en/x1/maintenance/replace-ptfe-tube";
    case "Replace HEPA Filter":
    case "HEPA Filter":
    case "Replace Carbon Filter":
    case "Carbon Filter":
      if (isH2) return "https://wiki.bambulab.com/en/h2/maintenance/replace-smoke-purifier-air-filte";
      return "https://wiki.bambulab.com/en/x1/maintenance/replace-carbon-filter";
    case "Lubricate Left Nozzle Rail":
    case "Left Nozzle Rail":
      if (isH2) return "https://wiki.bambulab.com/en/h2/maintenance/x-axis-lubrication";
      return null;
    default:
      return null;
  }
}
function MaintenanceCard({
  item,
  onPerform,
  onToggle,
  hasPermission,
  t
}) {
  const Icon = getIcon(item.maintenance_type_icon);
  const intervalType = item.interval_type || "hours";
  const getProgress = () => {
    if (intervalType === "days") {
      const daysSince = item.days_since_maintenance ?? 0;
      return Math.max(0, Math.min(100, daysSince / item.interval_hours * 100));
    }
    return Math.max(0, Math.min(
      100,
      (item.interval_hours - item.hours_until_due) / item.interval_hours * 100
    ));
  };
  const progressPercent = getProgress();
  const getStatusColor = () => {
    if (!item.enabled) return "text-bambu-gray";
    if (item.is_due) return "text-red-400";
    if (item.is_warning) return "text-amber-400";
    return "text-bambu-green";
  };
  const getProgressColor = () => {
    if (!item.enabled) return "bg-bambu-gray/30";
    if (item.is_due) return "bg-red-500";
    if (item.is_warning) return "bg-amber-500";
    return "bg-bambu-green";
  };
  const getBgColor = () => {
    if (!item.enabled) return "bg-bambu-dark-secondary/50";
    if (item.is_due) return "bg-red-500/5 border-red-500/20";
    if (item.is_warning) return "bg-amber-500/5 border-amber-500/20";
    return "bg-bambu-dark-secondary border-bambu-dark-tertiary";
  };
  const getStatusText = () => {
    if (!item.enabled) return t("common.disabled");
    if (intervalType === "days") {
      const daysUntil = item.days_until_due ?? 0;
      if (item.is_due) return t("maintenance.overdueBy", { duration: formatDuration(Math.abs(daysUntil), "days", t) });
      if (item.is_warning) return t("maintenance.dueIn", { duration: formatDuration(daysUntil, "days", t) });
      return t("maintenance.timeLeft", { duration: formatDuration(daysUntil, "days", t) });
    } else {
      if (item.is_due) return t("maintenance.overdueBy", { duration: formatDuration(Math.abs(item.hours_until_due), "hours", t) });
      if (item.is_warning) return t("maintenance.dueIn", { duration: formatDuration(item.hours_until_due, "hours", t) });
      return t("maintenance.timeLeft", { duration: formatDuration(item.hours_until_due, "hours", t) });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl border p-4 transition-all ${getBgColor()}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 max-[550px]:flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative p-2.5 rounded-lg shrink-0 ${item.is_due ? "bg-red-500/20" : item.is_warning ? "bg-amber-500/20" : item.enabled ? "bg-bambu-dark" : "bg-bambu-dark/50"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${getStatusColor()}` }),
      item.enabled && (item.is_due || item.is_warning) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${item.is_due ? "bg-red-500" : "bg-amber-500"} animate-pulse` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-medium truncate ${item.enabled ? "text-white" : "text-bambu-gray"}`, children: getMaintenanceTypeLabel(item.maintenance_type_name, t) }),
        intervalType === "days" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: t("maintenance.timeBasedInterval"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-bambu-gray shrink-0" }) }),
        (() => {
          const wikiUrl = item.maintenance_type_wiki_url || getMaintenanceWikiUrl(item.maintenance_type_name, item.printer_model);
          return wikiUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: wikiUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-bambu-gray hover:text-bambu-green transition-colors shrink-0",
              title: t("maintenance.viewDocumentation"),
              onClick: (e) => e.stopPropagation(),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
            }
          ) : null;
        })()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 mb-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1.5 bg-bambu-dark rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-full rounded-full transition-all duration-500 ${getProgressColor()}`,
          style: { width: `${progressPercent}%` }
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs flex items-center gap-1 ${getStatusColor()}`, children: [
        item.is_due && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
        item.is_warning && !item.is_due && /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
        !item.is_due && !item.is_warning && item.enabled && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }),
        getStatusText()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0 max-[550px]:w-full max-[550px]:justify-end max-[550px]:mt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: !hasPermission("maintenance:update") ? t("maintenance.noPermissionUpdate") : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Toggle,
        {
          checked: item.enabled,
          onChange: (checked) => onToggle(item.id, checked),
          disabled: !hasPermission("maintenance:update")
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: item.is_due ? "primary" : "secondary",
          onClick: () => onPerform(item.id),
          disabled: !item.enabled || !hasPermission("maintenance:update"),
          title: !hasPermission("maintenance:update") ? t("maintenance.noPermissionPerform") : void 0,
          className: "!px-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5" }),
            t("common.reset")
          ]
        }
      )
    ] })
  ] }) });
}
function PrinterSection({
  overview,
  onPerform,
  onToggle,
  onSetHours,
  hasPermission,
  t
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const [editingHours, setEditingHours] = reactExports.useState(false);
  const [hoursInput, setHoursInput] = reactExports.useState(overview.total_print_hours.toFixed(1));
  const sortedItems = [...overview.maintenance_items].sort((a, b) => {
    if (a.is_due && !b.is_due) return -1;
    if (!a.is_due && b.is_due) return 1;
    if (a.is_warning && !b.is_warning) return -1;
    if (!a.is_warning && b.is_warning) return 1;
    return a.maintenance_type_id - b.maintenance_type_id;
  });
  const nextTask = sortedItems.find((item) => item.enabled && (item.is_due || item.is_warning));
  const handleSaveHours = () => {
    const hours = parseFloat(hoursInput);
    if (!isNaN(hours) && hours >= 0) {
      onSetHours(overview.printer_id, hours);
      setEditingHours(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: overview.printer_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            overview.due_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
              t("maintenance.overdueCount", { count: overview.due_count })
            ] }),
            overview.warning_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              t("maintenance.dueSoonCount", { count: overview.warning_count })
            ] }),
            overview.due_count === 0 && overview.warning_count === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 bg-bambu-green/20 text-bambu-green text-xs font-medium rounded-full flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }),
              t("maintenance.allGood")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setExpanded(!expanded),
            className: "flex items-center gap-1.5 px-3 py-1.5 text-sm text-bambu-gray hover:text-white hover:bg-bambu-dark rounded-lg transition-colors",
            children: [
              expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" }),
              expanded ? t("common.collapse") : t("common.expand")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-bambu-dark/50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-4 h-4 text-bambu-gray" }) }),
          editingHours ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: hoursInput,
                onChange: (e) => setHoursInput(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter") handleSaveHours();
                  if (e.key === "Escape") setEditingHours(false);
                },
                className: "w-24 px-2 py-1 bg-bambu-dark border border-bambu-dark-tertiary rounded text-white text-sm",
                min: "0",
                step: "1",
                autoFocus: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: t("common.hours") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: handleSaveHours, children: t("common.save") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setEditingHours(false), children: t("common.cancel") })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                if (!hasPermission("maintenance:update")) return;
                setHoursInput(Math.round(overview.total_print_hours).toString());
                setEditingHours(true);
              },
              className: `group ${!hasPermission("maintenance:update") ? "cursor-not-allowed opacity-60" : ""}`,
              title: !hasPermission("maintenance:update") ? t("maintenance.noPermissionEditHours") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-sm font-medium text-white ${hasPermission("maintenance:update") ? "group-hover:text-bambu-green" : ""} transition-colors flex items-center gap-1`, children: [
                  Math.round(overview.total_print_hours),
                  " ",
                  t("common.hours"),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: `w-3 h-3 text-bambu-gray ${hasPermission("maintenance:update") ? "group-hover:text-bambu-green" : ""}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray", children: t("maintenance.totalPrintTime") })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-10 bg-bambu-dark-tertiary" }),
        nextTask && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg ${nextTask.is_due ? "bg-red-500/20" : "bg-amber-500/20"}`, children: (() => {
            const Icon = getIcon(nextTask.maintenance_type_icon);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 ${nextTask.is_due ? "text-red-400" : "text-amber-400"}` });
          })() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-medium ${nextTask.is_due ? "text-red-400" : "text-amber-400"}`, children: getMaintenanceTypeLabel(nextTask.maintenance_type_name, t) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${nextTask.is_due ? "text-red-400/70" : "text-amber-400/70"}`, children: nextTask.is_due ? t("common.overdue") : t("maintenance.dueSoon") })
          ] })
        ] })
      ] })
    ] }),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0 border-t border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-3 pt-4", children: sortedItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      MaintenanceCard,
      {
        item,
        onPerform,
        onToggle,
        hasPermission,
        t
      },
      item.id
    )) }) })
  ] });
}
function SettingsSection({
  overview,
  types,
  onUpdateInterval,
  onAddType,
  onUpdateType,
  onDeleteType,
  onRestoreDefaults,
  isRestoringDefaults,
  onAssignType,
  onRemoveItem,
  hasPermission,
  t
}) {
  const [editingInterval, setEditingInterval] = reactExports.useState(null);
  const [intervalInput, setIntervalInput] = reactExports.useState("");
  const [intervalTypeInput, setIntervalTypeInput] = reactExports.useState("hours");
  const [showAddType, setShowAddType] = reactExports.useState(false);
  const [newTypeName, setNewTypeName] = reactExports.useState("");
  const [newTypeInterval, setNewTypeInterval] = reactExports.useState("100");
  const [newTypeIntervalType, setNewTypeIntervalType] = reactExports.useState("hours");
  const [newTypeIcon, setNewTypeIcon] = reactExports.useState("Wrench");
  const [newTypeWikiUrl, setNewTypeWikiUrl] = reactExports.useState("");
  const [selectedPrinters, setSelectedPrinters] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expandedType, setExpandedType] = reactExports.useState(null);
  const [pendingSystemDelete, setPendingSystemDelete] = reactExports.useState(null);
  const printers = reactExports.useMemo(() => {
    if (!overview) return [];
    return overview.map((o) => ({ id: o.printer_id, name: o.printer_name }));
  }, [overview]);
  const getAssignedPrinters = (typeId) => {
    if (!overview) return [];
    return overview.filter((p) => p.maintenance_items.some((item) => item.maintenance_type_id === typeId)).map((p) => ({
      printerId: p.printer_id,
      printerName: p.printer_name,
      itemId: p.maintenance_items.find((item) => item.maintenance_type_id === typeId)?.id
    }));
  };
  const getUnassignedPrinters = (typeId) => {
    if (!overview) return [];
    const assignedIds = new Set(getAssignedPrinters(typeId).map((p) => p.printerId));
    return printers.filter((p) => !assignedIds.has(p.id));
  };
  const [editingType, setEditingType] = reactExports.useState(null);
  const [editTypeName, setEditTypeName] = reactExports.useState("");
  const [editTypeInterval, setEditTypeInterval] = reactExports.useState("");
  const [editTypeIntervalType, setEditTypeIntervalType] = reactExports.useState("hours");
  const [editTypeIcon, setEditTypeIcon] = reactExports.useState("Wrench");
  const [editTypeWikiUrl, setEditTypeWikiUrl] = reactExports.useState("");
  const startEditType = (type) => {
    setEditingType(type);
    setEditTypeName(type.name);
    setEditTypeInterval(type.default_interval_hours.toString());
    setEditTypeIntervalType(type.interval_type || "hours");
    setEditTypeIcon(type.icon || "Wrench");
    setEditTypeWikiUrl(type.wiki_url || "");
  };
  const handleSaveEditType = () => {
    if (editingType && editTypeName.trim() && parseFloat(editTypeInterval) > 0) {
      onUpdateType(editingType.id, {
        name: editTypeName.trim(),
        default_interval_hours: parseFloat(editTypeInterval),
        interval_type: editTypeIntervalType,
        icon: editTypeIcon,
        wiki_url: editTypeWikiUrl.trim() || null
      });
      setEditingType(null);
    }
  };
  const handleSaveInterval = (itemId, defaultInterval, defaultIntervalType) => {
    const newInterval = parseFloat(intervalInput);
    if (!isNaN(newInterval) && newInterval > 0) {
      const customInterval = Math.abs(newInterval - defaultInterval) < 0.01 ? null : newInterval;
      const customIntervalType = intervalTypeInput !== defaultIntervalType ? intervalTypeInput : null;
      onUpdateInterval(itemId, {
        custom_interval_hours: customInterval,
        custom_interval_type: customIntervalType
      });
    }
    setEditingInterval(null);
  };
  const handleAddType = (e) => {
    e.preventDefault();
    if (newTypeName.trim() && parseFloat(newTypeInterval) > 0 && selectedPrinters.size > 0) {
      onAddType({
        name: newTypeName.trim(),
        default_interval_hours: parseFloat(newTypeInterval),
        interval_type: newTypeIntervalType,
        icon: newTypeIcon,
        wiki_url: newTypeWikiUrl.trim() || null
      }, Array.from(selectedPrinters));
      setNewTypeName("");
      setNewTypeInterval("100");
      setNewTypeIntervalType("hours");
      setNewTypeWikiUrl("");
      setSelectedPrinters(/* @__PURE__ */ new Set());
      setShowAddType(false);
    }
  };
  const togglePrinterSelection = (printerId) => {
    setSelectedPrinters((prev) => {
      const next = new Set(prev);
      if (next.has(printerId)) {
        next.delete(printerId);
      } else {
        next.add(printerId);
      }
      return next;
    });
  };
  const printerItems = overview?.map((p) => ({
    printerId: p.printer_id,
    printerName: p.printer_name,
    items: p.maintenance_items.sort((a, b) => a.maintenance_type_id - b.maintenance_type_id)
  })).sort((a, b) => a.printerName.localeCompare(b.printerName)) || [];
  const systemTypes = types.filter((t2) => t2.is_system);
  const customTypes = types.filter((t2) => !t2.is_system);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("maintenance.maintenanceTypes") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("maintenance.maintenanceTypesDescription") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "secondary",
              onClick: onRestoreDefaults,
              disabled: !hasPermission("maintenance:delete") || isRestoringDefaults,
              title: !hasPermission("maintenance:delete") ? t("maintenance.noPermissionDeleteTypes") : void 0,
              children: t("maintenance.restoreDefaults")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setShowAddType(!showAddType),
              disabled: !hasPermission("maintenance:create"),
              title: !hasPermission("maintenance:create") ? t("maintenance.noPermissionEditTypes") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                t("maintenance.addCustomType")
              ]
            }
          )
        ] })
      ] }),
      showAddType && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddType, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-bambu-gray mb-1.5", children: t("common.name") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: newTypeName,
                onChange: (e) => setNewTypeName(e.target.value),
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
                placeholder: t("maintenance.exampleName"),
                autoFocus: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-bambu-gray mb-1.5", children: t("maintenance.intervalType") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: newTypeIntervalType,
                onChange: (e) => {
                  setNewTypeIntervalType(e.target.value);
                  if (e.target.value === "days") {
                    setNewTypeInterval("30");
                  } else {
                    setNewTypeInterval("100");
                  }
                },
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hours", children: t("maintenance.printHours") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "days", children: t("maintenance.calendarDays") })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-bambu-gray mb-1.5", children: t("maintenance.intervalValue", { type: newTypeIntervalType === "days" ? t("maintenance.calendarDays").toLowerCase() : t("common.hours") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: newTypeInterval,
                onChange: (e) => setNewTypeInterval(e.target.value),
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
                min: "1"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-end justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-bambu-gray mb-1.5", children: t("maintenance.icon") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: Object.keys(iconMap).map((iconName) => {
            const IconComp = iconMap[iconName];
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setNewTypeIcon(iconName),
                className: `p-2 rounded-lg transition-colors ${newTypeIcon === iconName ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComp, { className: "w-4 h-4" })
              },
              iconName
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-bambu-gray mb-1.5", children: t("maintenance.documentationLink") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              value: newTypeWikiUrl,
              onChange: (e) => setNewTypeWikiUrl(e.target.value),
              className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
              placeholder: "https://wiki.bambulab.com/..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-bambu-gray mb-1.5", children: t("maintenance.assignToPrinters") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: printers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => togglePrinterSelection(p.id),
              className: `px-3 py-1.5 rounded-lg text-sm transition-colors ${selectedPrinters.has(p.id) ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary"}`,
              children: p.name
            },
            p.id
          )) }),
          selectedPrinters.size === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-400 mt-1", children: t("maintenance.selectAtLeastOnePrinter") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: () => {
            setShowAddType(false);
            setSelectedPrinters(/* @__PURE__ */ new Set());
          }, children: t("common.cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: !newTypeName.trim() || selectedPrinters.size === 0, children: t("maintenance.addType") })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: [
        systemTypes.map((type) => {
          const Icon = getIcon(type.icon);
          const intervalType = type.interval_type || "hours";
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-bambu-dark-secondary rounded-xl p-4 border border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-bambu-dark rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-bambu-gray" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-white truncate", children: getMaintenanceTypeLabel(type.name, t) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-bambu-gray mt-0.5 flex items-center gap-1", children: [
                intervalType === "days" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3 h-3" }),
                formatIntervalLabel(type.default_interval_hours, intervalType, t)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  if (!hasPermission("maintenance:delete")) return;
                  setPendingSystemDelete(type);
                },
                disabled: !hasPermission("maintenance:delete"),
                title: !hasPermission("maintenance:delete") ? t("maintenance.noPermissionDeleteTypes") : void 0,
                className: `p-2 rounded-lg hover:bg-bambu-dark text-bambu-gray hover:text-red-400 transition-colors ${!hasPermission("maintenance:delete") ? "opacity-50 cursor-not-allowed" : ""}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            )
          ] }) }, type.id);
        }),
        customTypes.map((type) => {
          const Icon = getIcon(type.icon);
          const intervalType = type.interval_type || "hours";
          const isEditing = editingType?.id === type.id;
          if (isEditing) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-bambu-dark-secondary rounded-xl p-4 border border-bambu-green", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: editTypeName,
                  onChange: (e) => setEditTypeName(e.target.value),
                  className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
                  placeholder: t("common.name"),
                  autoFocus: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: editTypeIntervalType,
                    onChange: (e) => setEditTypeIntervalType(e.target.value),
                    className: "flex-1 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hours", children: t("maintenance.printHours") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "days", children: t("maintenance.calendarDays") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    value: editTypeInterval,
                    onChange: (e) => setEditTypeInterval(e.target.value),
                    className: "w-24 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
                    min: "1"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: Object.keys(iconMap).map((iconName) => {
                const IconComp = iconMap[iconName];
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setEditTypeIcon(iconName),
                    className: `p-1.5 rounded transition-colors ${editTypeIcon === iconName ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComp, { className: "w-3.5 h-3.5" })
                  },
                  iconName
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "url",
                  value: editTypeWikiUrl,
                  onChange: (e) => setEditTypeWikiUrl(e.target.value),
                  className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
                  placeholder: t("maintenance.documentationLink")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: handleSaveEditType, disabled: !editTypeName.trim(), children: t("common.save") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setEditingType(null), children: t("common.cancel") })
              ] })
            ] }) }, type.id);
          }
          const assignedPrinters = getAssignedPrinters(type.id);
          const unassignedPrinters = getUnassignedPrinters(type.id);
          const isExpanded = expandedType === type.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-xl p-4 border border-bambu-green/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-bambu-green/20 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-bambu-green" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white truncate", children: type.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 bg-bambu-green/20 text-bambu-green text-[10px] font-medium rounded", children: t("maintenance.custom") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-bambu-gray mt-0.5 flex items-center gap-1", children: [
                  intervalType === "days" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3 h-3" }),
                  formatIntervalLabel(type.default_interval_hours, intervalType, t)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setExpandedType(isExpanded ? null : type.id),
                  className: `px-2 py-1 rounded-lg border transition-colors flex items-center gap-1 ${assignedPrinters.length > 0 ? "border-bambu-green/50 bg-bambu-green/10 text-bambu-green hover:bg-bambu-green/20" : "border-orange-400/50 bg-orange-400/10 text-orange-400 hover:bg-orange-400/20"}`,
                  title: t("maintenance.printersAssignedClick", { count: assignedPrinters.length }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: assignedPrinters.length }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}` })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => startEditType(type),
                  disabled: !hasPermission("maintenance:update"),
                  title: !hasPermission("maintenance:update") ? t("maintenance.noPermissionEditTypes") : void 0,
                  className: `p-2 rounded-lg hover:bg-bambu-dark text-bambu-gray hover:text-white transition-colors ${!hasPermission("maintenance:update") ? "opacity-50 cursor-not-allowed" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    if (confirm(t("maintenance.deleteTypeConfirm", { name: type.name }))) {
                      onDeleteType(type.id);
                    }
                  },
                  disabled: !hasPermission("maintenance:delete"),
                  title: !hasPermission("maintenance:delete") ? t("maintenance.noPermissionDeleteTypes") : void 0,
                  className: `p-2 rounded-lg hover:bg-bambu-dark text-bambu-gray hover:text-red-400 transition-colors ${!hasPermission("maintenance:delete") ? "opacity-50 cursor-not-allowed" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ] }),
            isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-bambu-dark-tertiary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-2", children: t("maintenance.assignedToPrinters") }),
              assignedPrinters.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-400", children: t("maintenance.noPrintersAssigned") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-2", children: assignedPrinters.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1 px-2 py-1 bg-bambu-dark rounded text-xs text-white",
                  children: [
                    p.printerName,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => p.itemId && onRemoveItem(p.itemId),
                        disabled: !hasPermission("maintenance:delete"),
                        title: !hasPermission("maintenance:delete") ? t("maintenance.noPermissionRemovePrinter") : t("maintenance.removeFromPrinter"),
                        className: `ml-1 ${hasPermission("maintenance:delete") ? "hover:text-red-400" : "opacity-50 cursor-not-allowed"}`,
                        children: "×"
                      }
                    )
                  ]
                },
                p.printerId
              )) }),
              unassignedPrinters.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray mr-1", children: t("maintenance.addPrinterShort") }),
                unassignedPrinters.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => onAssignType(p.id, type.id),
                    disabled: !hasPermission("maintenance:create"),
                    title: !hasPermission("maintenance:create") ? t("maintenance.noPermissionAssignPrinter") : void 0,
                    className: `px-2 py-1 bg-bambu-dark rounded text-xs transition-colors ${hasPermission("maintenance:create") ? "hover:bg-bambu-green/20 text-bambu-gray hover:text-bambu-green" : "opacity-50 cursor-not-allowed text-bambu-gray"}`,
                    children: [
                      "+ ",
                      p.name
                    ]
                  },
                  p.id
                ))
              ] })
            ] })
          ] }, type.id);
        })
      ] })
    ] }),
    printerItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("maintenance.intervalOverrides") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("maintenance.intervalOverridesDescription") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: printerItems.map((printer) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white mb-3", children: printer.printerName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2", children: printer.items.map((item) => {
          const Icon = getIcon(item.maintenance_type_icon);
          const typeInfo = types.find((t2) => t2.id === item.maintenance_type_id);
          const defaultInterval = typeInfo?.default_interval_hours || item.interval_hours;
          const defaultIntervalType = typeInfo?.interval_type || "hours";
          const intervalType = item.interval_type || "hours";
          const isEditing = editingInterval === item.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2.5 bg-bambu-dark rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-bambu-gray shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray flex-1 truncate", children: getMaintenanceTypeLabel(item.maintenance_type_name, t) }),
            isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              intervalTypeInput === "days" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-bambu-gray shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3.5 h-3.5 text-bambu-gray shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: intervalTypeInput,
                  onChange: (e) => setIntervalTypeInput(e.target.value),
                  className: "px-1.5 py-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-xs",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hours", children: t("maintenance.printHours") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "days", children: t("maintenance.calendarDays") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  value: intervalInput,
                  onChange: (e) => setIntervalInput(e.target.value),
                  onKeyDown: (e) => {
                    if (e.key === "Enter") handleSaveInterval(item.id, defaultInterval, defaultIntervalType);
                    if (e.key === "Escape") setEditingInterval(null);
                  },
                  className: "w-16 px-2 py-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-xs",
                  min: "1"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => handleSaveInterval(item.id, defaultInterval, defaultIntervalType), children: t("common.save") })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  if (!hasPermission("maintenance:update")) return;
                  setEditingInterval(item.id);
                  setIntervalInput(item.interval_hours.toString());
                  setIntervalTypeInput(intervalType);
                },
                disabled: !hasPermission("maintenance:update"),
                title: !hasPermission("maintenance:update") ? t("maintenance.noPermissionEditIntervals") : void 0,
                className: `px-2 py-1 bg-bambu-dark-tertiary border border-bambu-dark-tertiary rounded text-xs font-medium text-white transition-colors flex items-center gap-1 ${hasPermission("maintenance:update") ? "hover:bg-bambu-dark-secondary hover:border-bambu-green" : "opacity-50 cursor-not-allowed"}`,
                children: [
                  intervalType === "days" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3 h-3" }),
                  formatIntervalLabel(item.interval_hours, intervalType, t),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-3 h-3 text-bambu-gray" })
                ]
              }
            )
          ] }, item.id);
        }) })
      ] }) }, printer.printerId)) })
    ] }),
    printerItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-12 h-12 mx-auto mb-4 text-bambu-gray/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("common.noPrinters") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray/70 mt-1", children: t("maintenance.intervalOverridesDescription") })
    ] }) }),
    pendingSystemDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: t("maintenance.deleteSystemTypeTitle"),
        message: t("maintenance.deleteSystemTypeMessage", { name: getMaintenanceTypeLabel(pendingSystemDelete.name, t) }),
        confirmText: t("common.delete"),
        cancelText: t("common.cancel"),
        variant: "danger",
        cancelVariant: "primary",
        cardClassName: "bg-red-950/70 border border-red-800/70",
        onConfirm: () => {
          onDeleteType(pendingSystemDelete.id);
          setPendingSystemDelete(null);
        },
        onCancel: () => setPendingSystemDelete(null)
      }
    )
  ] });
}
function MaintenancePage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [activeTab, setActiveTab] = reactExports.useState("status");
  const { data: overview, isLoading } = useQuery({
    queryKey: ["maintenanceOverview"],
    queryFn: api.getMaintenanceOverview
  });
  const { data: types } = useQuery({
    queryKey: ["maintenanceTypes"],
    queryFn: api.getMaintenanceTypes
  });
  const performMutation = useMutation({
    mutationFn: ({ id, notes }) => api.performMaintenance(id, notes),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
      queryClient.invalidateQueries({ queryKey: ["maintenanceSummary"] });
      showToast(t("maintenance.maintenanceComplete"));
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateMaintenanceItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const updateTypeMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateMaintenanceType(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenanceTypes"] });
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
      showToast(t("maintenance.typeUpdated"));
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const deleteTypeMutation = useMutation({
    mutationFn: api.deleteMaintenanceType,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenanceTypes"] });
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
      showToast(t("maintenance.typeDeleted"));
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const restoreDefaultsMutation = useMutation({
    mutationFn: api.restoreDefaultMaintenanceTypes,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["maintenanceTypes"] });
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
      showToast(t("maintenance.defaultsRestored", { count: data.restored }));
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const setHoursMutation = useMutation({
    mutationFn: ({ printerId, hours }) => api.setPrinterHours(printerId, hours),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
      queryClient.invalidateQueries({ queryKey: ["maintenanceSummary"] });
      showToast(t("maintenance.printHoursUpdated"));
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const assignTypeMutation = useMutation({
    mutationFn: ({ printerId, typeId }) => api.assignMaintenanceType(printerId, typeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
      showToast(t("maintenance.printerAssigned"));
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const removeItemMutation = useMutation({
    mutationFn: api.removeMaintenanceItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
      showToast(t("maintenance.printerRemoved"));
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const handlePerform = (id) => {
    performMutation.mutate({ id });
  };
  const handleToggle = (id, enabled) => {
    updateMutation.mutate({ id, data: { enabled } });
  };
  const handleSetHours = (printerId, hours) => {
    setHoursMutation.mutate({ printerId, hours });
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 md:p-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) });
  }
  const totalDue = overview?.reduce((sum, p) => sum + p.due_count, 0) || 0;
  const totalWarning = overview?.reduce((sum, p) => sum + p.warning_count, 0) || 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: t("maintenance.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-sm mt-1", children: activeTab === "status" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        totalDue > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: t("maintenance.dueCount", { count: totalDue }) }),
        totalDue > 0 && totalWarning > 0 && " · ",
        totalWarning > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: t("maintenance.warningCount", { count: totalWarning }) }),
        totalDue === 0 && totalWarning === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-green", children: t("maintenance.allOk") })
      ] }) : t("maintenance.configureSettings") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 mb-6 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveTab("status"),
          className: `px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${activeTab === "status" ? "text-bambu-green border-bambu-green" : "text-bambu-gray border-transparent hover:text-white"}`,
          children: t("maintenance.statusTab")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveTab("settings"),
          className: `px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${activeTab === "settings" ? "text-bambu-green border-bambu-green" : "text-bambu-gray border-transparent hover:text-white"}`,
          children: t("maintenance.settingsTab")
        }
      )
    ] }),
    activeTab === "status" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: overview && overview.length > 0 ? [...overview].sort((a, b) => {
      const aScore = a.due_count * 10 + a.warning_count;
      const bScore = b.due_count * 10 + b.warning_count;
      if (aScore !== bScore) return bScore - aScore;
      return a.printer_name.localeCompare(b.printer_name);
    }).map((printerOverview) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      PrinterSection,
      {
        overview: printerOverview,
        onPerform: handlePerform,
        onToggle: handleToggle,
        onSetHours: handleSetHours,
        hasPermission,
        t
      },
      printerOverview.printer_id
    )) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-16 h-16 mx-auto mb-4 text-bambu-gray/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-white mb-2", children: t("common.noPrinters") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("maintenance.configureSettings") })
    ] }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      SettingsSection,
      {
        overview,
        types: types || [],
        onUpdateInterval: (id, data) => updateMutation.mutate({ id, data }),
        onAddType: async (data, printerIds) => {
          const newType = await api.createMaintenanceType(data);
          for (const printerId of printerIds) {
            await api.assignMaintenanceType(printerId, newType.id);
          }
          queryClient.invalidateQueries({ queryKey: ["maintenanceTypes"] });
          queryClient.invalidateQueries({ queryKey: ["maintenanceOverview"] });
          showToast(t("maintenance.typeUpdated"));
        },
        onUpdateType: (id, data) => updateTypeMutation.mutate({ id, data }),
        onDeleteType: (id) => deleteTypeMutation.mutate(id),
        onRestoreDefaults: () => restoreDefaultsMutation.mutate(),
        isRestoringDefaults: restoreDefaultsMutation.isPending,
        onAssignType: (printerId, typeId) => assignTypeMutation.mutate({ printerId, typeId }),
        onRemoveItem: (itemId) => removeItemMutation.mutate(itemId),
        hasPermission,
        t
      }
    )
  ] });
}
export {
  MaintenancePage
};
