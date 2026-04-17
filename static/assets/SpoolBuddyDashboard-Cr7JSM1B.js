import { j as jsxRuntimeExports, u as useTranslation, r as reactExports, T as TriangleAlert, aY as spoolbuddyApi, b as useQueryClient, d as useQuery, e as useMutation, f as api, X, L as LoaderCircle, Q as CircleCheckBig, _ as CircleX, O as Layers, h as ConfirmModal, b0 as useOutletContext, ab as useQueries } from "./index-By7NB6Yd.js";
import { C as Check } from "./check-B2KZNztd.js";
import { R as RefreshCw } from "./refresh-cw-DSbBo49o.js";
import { A as AmsUnitCard, N as NozzleBadge } from "./AmsUnitCard-CKWbYpdE.js";
import { b as getFillBarColor } from "./amsHelpers-DxzYuS95.js";
function SpoolIcon({ color, isEmpty, size = 32 }) {
  if (isEmpty) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-full border-2 border-dashed border-zinc-500 flex items-center justify-center",
        style: { width: size, height: size },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-zinc-600" })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "14", fill: color, stroke: "white", strokeWidth: "1.5", strokeOpacity: "0.7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "11", fill: color, style: { filter: "brightness(0.85)" } })
  ] });
}
const DEFAULT_CORE_WEIGHT_KEY = "spoolbuddy-default-core-weight";
function getDefaultCoreWeight() {
  try {
    const stored = localStorage.getItem(DEFAULT_CORE_WEIGHT_KEY);
    if (stored) {
      const weight = parseInt(stored, 10);
      if (weight >= 0 && weight <= 500) return weight;
    }
  } catch {
  }
  return 250;
}
function SpoolInfoCard({ spool, scaleWeight, onClose, onSyncWeight, onAssignToAms }) {
  const { t } = useTranslation();
  const [syncing, setSyncing] = reactExports.useState(false);
  const [synced, setSynced] = reactExports.useState(false);
  const colorHex = spool.rgba ? `#${spool.rgba.slice(0, 6)}` : "#808080";
  const coreWeight = spool.core_weight && spool.core_weight > 0 ? spool.core_weight : getDefaultCoreWeight();
  const grossWeight = scaleWeight !== null ? Math.round(Math.max(0, scaleWeight)) : null;
  const remaining = grossWeight !== null ? Math.round(Math.max(0, grossWeight - coreWeight)) : null;
  const labelWeight = Math.round(spool.label_weight || 1e3);
  const fillPercent = remaining !== null ? Math.min(100, Math.round(remaining / labelWeight * 100)) : null;
  const fillColor = fillPercent !== null ? fillPercent > 50 ? "#22c55e" : fillPercent > 20 ? "#eab308" : "#ef4444" : "#808080";
  const netWeight = Math.max(
    0,
    (spool.label_weight || 0) - (spool.weight_used || 0)
  );
  const calculatedWeight = netWeight + coreWeight;
  const difference = grossWeight !== null ? grossWeight - calculatedWeight : null;
  const isMatch = difference !== null ? Math.abs(difference) <= 50 : null;
  const handleSyncWeight = async () => {
    if (scaleWeight === null) return;
    setSyncing(true);
    try {
      await spoolbuddyApi.updateSpoolWeight(spool.id, Math.round(scaleWeight));
      setSynced(true);
      onSyncWeight?.();
      setTimeout(() => setSynced(false), 3e3);
    } catch (e) {
      console.error("Failed to sync weight:", e);
    } finally {
      setSyncing(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4 max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpoolIcon, { color: colorHex, isEmpty: false, size: 100 }),
        fillPercent !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold text-white shadow-lg",
            style: { backgroundColor: fillColor },
            children: [
              fillPercent,
              "%"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-zinc-100", children: spool.color_name || "Unknown color" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-zinc-400", children: [
          spool.brand,
          " • ",
          spool.material,
          spool.subtype && ` ${spool.subtype}`
        ] }),
        remaining !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-bold font-mono text-zinc-100", children: [
              remaining,
              "g"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-zinc-500", children: [
              "/ ",
              labelWeight,
              "g"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-500 mt-0.5", children: t("spoolbuddy.spool.remaining", "Remaining") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-zinc-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full transition-all duration-500",
              style: { width: `${fillPercent}%`, backgroundColor: fillColor }
            }
          ) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-2 text-sm bg-zinc-800 rounded-lg p-4 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.dashboard.grossWeight", "Gross weight") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-zinc-300", children: grossWeight !== null ? `${grossWeight}g` : "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.spool.coreWeight", "Core") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-zinc-300", children: [
          coreWeight,
          "g"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.dashboard.spoolSize", "Spool size") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-zinc-300", children: [
          labelWeight,
          "g"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.spool.scaleWeight", "Scale") }),
        grossWeight !== null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 font-mono ${isMatch ? "text-green-500" : "text-yellow-500"}`, children: [
          grossWeight,
          "g",
          isMatch ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleSyncWeight,
                className: "p-1 hover:bg-green-500/20 rounded transition-colors text-green-500",
                title: t("spoolbuddy.dashboard.syncWeight", "Sync Weight"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: t("spoolbuddy.dashboard.tagId", "Tag") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-zinc-400 truncate max-w-[120px]", title: spool.tag_uid || "", children: spool.tag_uid ? spool.tag_uid.slice(-8) : "—" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-center", children: [
      onAssignToAms && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onAssignToAms,
          className: "px-5 py-2.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors min-h-[44px]",
          children: t("spoolbuddy.modal.assignToAms", "Assign to AMS")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleSyncWeight,
          disabled: scaleWeight === null || syncing,
          className: `px-5 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${synced ? "bg-green-600/20 text-green-400" : onAssignToAms ? "bg-zinc-700 text-zinc-300 hover:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed"}`,
          children: syncing ? "..." : synced ? t("spoolbuddy.dashboard.weightSynced", "Synced!") : t("spoolbuddy.dashboard.syncWeight", "Sync Weight")
        }
      ),
      onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "px-5 py-2.5 rounded-lg text-sm font-medium bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors min-h-[44px]",
          children: t("spoolbuddy.dashboard.close", "Close")
        }
      )
    ] })
  ] });
}
function UnknownTagCard({ tagUid, scaleWeight, coreWeight, onLinkSpool, onAddToInventory, onClose }) {
  const { t } = useTranslation();
  const defaultCoreWeight = coreWeight ?? getDefaultCoreWeight();
  const grossWeight = scaleWeight !== null ? Math.round(Math.max(0, scaleWeight)) : null;
  const estimatedRemaining = grossWeight !== null ? Math.round(Math.max(0, grossWeight - defaultCoreWeight)) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl bg-green-500/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-10 h-10 text-green-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-zinc-100", children: t("spoolbuddy.dashboard.newTag", "New Tag Detected") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-500 font-mono mt-1", children: tagUid })
    ] }),
    grossWeight !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-zinc-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold", children: [
        grossWeight,
        "g"
      ] }),
      " ",
      t("spoolbuddy.dashboard.onScale", "on scale"),
      estimatedRemaining !== null && estimatedRemaining > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-zinc-500", children: [
        " • ~",
        estimatedRemaining,
        "g filament"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 justify-center", children: [
      onAddToInventory && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onAddToInventory,
          className: "px-5 py-2.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors min-h-[44px]",
          children: t("spoolbuddy.modal.addToInventory", "Add to Inventory")
        }
      ),
      onLinkSpool && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onLinkSpool,
          className: "px-5 py-2.5 rounded-lg text-sm font-medium bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors min-h-[44px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 inline-block mr-1.5 -mt-0.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }) }),
            t("spoolbuddy.dashboard.linkSpool", "Link to Spool")
          ]
        }
      ),
      onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "px-5 py-2.5 rounded-lg text-sm font-medium bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors min-h-[44px]",
          children: t("spoolbuddy.dashboard.close", "Close")
        }
      )
    ] })
  ] });
}
function getAmsName(id) {
  if (id <= 3) return `AMS ${String.fromCharCode(65 + id)}`;
  if (id >= 128 && id <= 135) return `AMS HT ${String.fromCharCode(65 + id - 128)}`;
  return `AMS ${id}`;
}
function isTrayEmpty(tray) {
  return !tray.tray_type || tray.tray_type === "";
}
function trayColorToCSS(color) {
  if (!color) return "#808080";
  return `#${color.slice(0, 6)}`;
}
const normalizeValue = (value) => (value ?? "").trim().toUpperCase();
function checkMaterialMatch(spoolMaterial, trayMaterial) {
  const normalizedSpool = normalizeValue(spoolMaterial);
  const normalizedTray = normalizeValue(trayMaterial);
  if (!normalizedSpool || !normalizedTray) return "none";
  if (normalizedSpool === normalizedTray) return "exact";
  if (normalizedTray.includes(normalizedSpool) || normalizedSpool.includes(normalizedTray)) {
    return "partial";
  }
  return "none";
}
function checkProfileMatch(spoolProfile, trayProfile) {
  const normalizedSpoolProfile = normalizeValue(spoolProfile);
  const normalizedTrayProfile = normalizeValue(trayProfile);
  if (!normalizedSpoolProfile || !normalizedTrayProfile) return false;
  return normalizedSpoolProfile === normalizedTrayProfile;
}
function AssignToAmsModal({ isOpen, onClose, spool, printerId }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [statusMessage, setStatusMessage] = reactExports.useState(null);
  const [statusType, setStatusType] = reactExports.useState(null);
  const [showMismatchConfirm, setShowMismatchConfirm] = reactExports.useState(false);
  const [mismatchDetails, setMismatchDetails] = reactExports.useState(null);
  const [pendingSlot, setPendingSlot] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (isOpen) {
      setStatusMessage(null);
      setStatusType(null);
      setShowMismatchConfirm(false);
      setMismatchDetails(null);
      setPendingSlot(null);
    }
  }, [isOpen]);
  const handleKeyDown = reactExports.useCallback((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);
  reactExports.useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);
  const { data: status } = useQuery({
    queryKey: ["printerStatus", printerId],
    queryFn: () => api.getPrinterStatus(printerId),
    enabled: isOpen && printerId !== null,
    refetchInterval: 5e3
  });
  const { data: printer } = useQuery({
    queryKey: ["printer", printerId],
    queryFn: () => api.getPrinter(printerId),
    enabled: isOpen && printerId !== null
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: () => api.getSettings(),
    enabled: isOpen,
    staleTime: 5 * 60 * 1e3
  });
  const { data: assignments } = useQuery({
    queryKey: ["spool-assignments", printerId],
    queryFn: () => api.getAssignments(printerId),
    enabled: isOpen && printerId !== null,
    staleTime: 30 * 1e3
  });
  const fillOverrides = reactExports.useMemo(() => {
    const map = {};
    if (!assignments) return map;
    for (const a of assignments) {
      const sp = a.spool;
      if (sp && sp.label_weight > 0 && sp.weight_used != null) {
        const fill = Math.round(Math.max(0, sp.label_weight - sp.weight_used) / sp.label_weight * 100);
        map[`${a.ams_id}-${a.tray_id}`] = fill;
      }
    }
    return map;
  }, [assignments]);
  const amsThresholds = settings ? {
    humidityGood: Number(settings.ams_humidity_good) || 40,
    humidityFair: Number(settings.ams_humidity_fair) || 60,
    tempGood: Number(settings.ams_temp_good) || 28,
    tempFair: Number(settings.ams_temp_fair) || 35
  } : void 0;
  const isConnected = status?.connected ?? false;
  const amsUnits = reactExports.useMemo(() => status?.ams ?? [], [status?.ams]);
  const regularAms = reactExports.useMemo(() => amsUnits.filter((u) => !u.is_ams_ht), [amsUnits]);
  const htAms = reactExports.useMemo(() => amsUnits.filter((u) => u.is_ams_ht), [amsUnits]);
  const vtTrays = reactExports.useMemo(() => [...status?.vt_tray ?? []].sort((a, b) => (a.id ?? 254) - (b.id ?? 254)), [status?.vt_tray]);
  const isDualNozzle = printer?.nozzle_count === 2 || status?.temperatures?.nozzle_2 !== void 0;
  const cachedAmsExtruderMap = reactExports.useRef({});
  reactExports.useEffect(() => {
    if (status?.ams_extruder_map && Object.keys(status.ams_extruder_map).length > 0) {
      cachedAmsExtruderMap.current = status.ams_extruder_map;
    }
  }, [status?.ams_extruder_map]);
  const amsExtruderMap = status?.ams_extruder_map && Object.keys(status.ams_extruder_map).length > 0 ? status.ams_extruder_map : cachedAmsExtruderMap.current;
  const getNozzleSide = reactExports.useCallback((amsId) => {
    if (!isDualNozzle) return null;
    const mappedExtruderId = amsExtruderMap[String(amsId)];
    const normalizedId = amsId >= 128 ? amsId - 128 : amsId;
    const extruderId = mappedExtruderId !== void 0 ? mappedExtruderId : normalizedId;
    return extruderId === 1 ? "L" : "R";
  }, [isDualNozzle, amsExtruderMap]);
  const configureMutation = useMutation({
    mutationFn: async ({ amsId, trayId }) => {
      if (!printerId) throw new Error("No printer selected");
      await api.assignSpool({
        spool_id: spool.id,
        printer_id: printerId,
        ams_id: amsId,
        tray_id: trayId
      });
    },
    onSuccess: () => {
      setStatusType("success");
      setStatusMessage(t("spoolbuddy.modal.assignSuccess", "Assigned!"));
      queryClient.invalidateQueries({ queryKey: ["slotPresets"] });
      setTimeout(() => onClose(), 1500);
    },
    onError: (err) => {
      setStatusType("error");
      setStatusMessage(err instanceof Error ? err.message : t("spoolbuddy.modal.assignError", "Failed to assign spool."));
    }
  });
  const isWaiting = configureMutation.isPending;
  const getTrayForSlot = reactExports.useCallback((amsId, trayId) => {
    if (amsId === 254 || amsId === 255) {
      const extTrayId = amsId === 254 ? 254 : 254 + trayId;
      return vtTrays.find((t2) => (t2.id ?? 254) === extTrayId) || null;
    }
    const unit = amsUnits.find((u) => u.id === amsId);
    return unit?.tray?.find((t2) => t2.id === trayId) || null;
  }, [amsUnits, vtTrays]);
  const getSlotLocationLabel = reactExports.useCallback((amsId, trayId) => {
    if (amsId <= 3) return `${getAmsName(amsId)} ${t("ams.slot", "Slot")} ${trayId + 1}`;
    if (amsId >= 128 && amsId <= 135) return getAmsName(amsId);
    if (amsId === 254) return t("printers.extL", "Ext-L");
    return isDualNozzle ? t("printers.extR", "Ext-R") : t("printers.ext", "Ext");
  }, [t, isDualNozzle]);
  const doAssign = reactExports.useCallback((amsId, trayId) => {
    setStatusType("info");
    setStatusMessage(t("spoolbuddy.modal.assigning", "Configuring slot..."));
    configureMutation.mutate({ amsId, trayId });
  }, [configureMutation, t]);
  const handleSlotClick = reactExports.useCallback((amsId, trayId) => {
    if (isWaiting) return;
    if (!settings?.disable_filament_warnings) {
      const tray = getTrayForSlot(amsId, trayId);
      if (tray && !isTrayEmpty(tray)) {
        const trayMaterial = tray.tray_sub_brands || tray.tray_type || "";
        const materialMatchResult = checkMaterialMatch(spool.material, trayMaterial);
        const spoolProfile = spool.slicer_filament_name || spool.slicer_filament;
        const trayProfile = tray.tray_type || "";
        const profileMatches = checkProfileMatch(spoolProfile, trayProfile);
        if (materialMatchResult !== "exact" || !profileMatches) {
          let mismatchType = "profile";
          if (materialMatchResult === "none" && !profileMatches) {
            mismatchType = "material_profile";
          } else if (materialMatchResult === "partial" && !profileMatches) {
            mismatchType = "partial_profile";
          } else if (materialMatchResult === "none") {
            mismatchType = "material";
          } else if (materialMatchResult === "partial") {
            mismatchType = "partial";
          }
          const location = getSlotLocationLabel(amsId, trayId);
          setPendingSlot({ amsId, trayId });
          setMismatchDetails({
            type: mismatchType,
            spoolMaterial: spool.material || "",
            trayMaterial: trayMaterial || "",
            spoolProfile: spoolProfile || void 0,
            trayProfile: trayProfile || void 0,
            location
          });
          setShowMismatchConfirm(true);
          return;
        }
      }
    }
    doAssign(amsId, trayId);
  }, [isWaiting, settings?.disable_filament_warnings, spool, getTrayForSlot, getSlotLocationLabel, doAssign]);
  const handleConfirmMismatch = reactExports.useCallback(() => {
    if (!pendingSlot) return;
    setShowMismatchConfirm(false);
    setMismatchDetails(null);
    doAssign(pendingSlot.amsId, pendingSlot.trayId);
    setPendingSlot(null);
  }, [pendingSlot, doAssign]);
  const singleSlots = reactExports.useMemo(() => {
    const items = [];
    for (const unit of htAms) {
      const tray = unit.tray?.[0] || {
        id: 0,
        tray_color: null,
        tray_type: "",
        tray_sub_brands: null,
        tray_id_name: null,
        tray_info_idx: null,
        remain: -1,
        k: null,
        cali_idx: null,
        tag_uid: null,
        tray_uuid: null,
        nozzle_temp_min: null,
        nozzle_temp_max: null
      };
      const invFill = fillOverrides[`${unit.id}-0`] ?? null;
      const amsFill = tray.remain != null && tray.remain >= 0 ? tray.remain : null;
      const resolvedInvFill = invFill === 0 && amsFill !== null && amsFill > 0 ? null : invFill;
      items.push({
        key: `ht-${unit.id}`,
        label: getAmsName(unit.id),
        amsId: unit.id,
        trayId: 0,
        tray,
        isEmpty: isTrayEmpty(tray),
        nozzleSide: getNozzleSide(unit.id),
        effectiveFill: resolvedInvFill ?? amsFill
      });
    }
    for (const extTray of vtTrays) {
      const extTrayId = extTray.id ?? 254;
      const extSlotTrayId = extTrayId - 254;
      const extInvFill = fillOverrides[`255-${extSlotTrayId}`] ?? null;
      const extAmsFill = extTray.remain != null && extTray.remain >= 0 ? extTray.remain : null;
      const extResolvedInvFill = extInvFill === 0 && extAmsFill !== null && extAmsFill > 0 ? null : extInvFill;
      items.push({
        key: `ext-${extTrayId}`,
        label: isDualNozzle ? extTrayId === 254 ? t("printers.extL", "Ext-L") : t("printers.extR", "Ext-R") : t("printers.ext", "Ext"),
        amsId: 255,
        trayId: extSlotTrayId,
        tray: extTray,
        isEmpty: isTrayEmpty(extTray),
        nozzleSide: isDualNozzle ? extTrayId === 254 ? "L" : "R" : null,
        effectiveFill: extResolvedInvFill ?? extAmsFill
      });
    }
    return items;
  }, [htAms, vtTrays, isDualNozzle, t, getNozzleSide, fillOverrides]);
  if (!isOpen) return null;
  const colorHex = spool.rgba ? `#${spool.rgba.slice(0, 6)}` : "#808080";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[60] bg-bambu-dark flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-zinc-800 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full shrink-0", style: { backgroundColor: colorHex } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-zinc-100 truncate", children: [
            t("spoolbuddy.modal.assignToAmsTitle", "Assign to AMS"),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-zinc-500 ml-2", children: [
              spool.color_name || "Unknown",
              " • ",
              spool.brand,
              " ",
              spool.material,
              spool.subtype && ` ${spool.subtype}`
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            disabled: isWaiting,
            className: "p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors shrink-0 disabled:opacity-50",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      statusMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mx-5 mt-3 p-3 rounded-lg flex items-center gap-3 border shrink-0 ${statusType === "info" ? "bg-blue-500/10 border-blue-500/40" : statusType === "success" ? "bg-green-500/10 border-green-500/40" : "bg-red-500/10 border-red-500/40"}`, children: [
        statusType === "info" && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 text-blue-400 animate-spin shrink-0" }),
        statusType === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-green-400 shrink-0" }),
        statusType === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-red-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${statusType === "info" ? "text-blue-300" : statusType === "success" ? "text-green-300" : "text-red-300"}`, children: statusMessage })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col gap-3 p-4 min-h-0 overflow-y-auto", children: !isConnected && printerId ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-2", children: t("spoolbuddy.ams.printerDisconnected", "Printer disconnected") }) }) }) : amsUnits.length === 0 && vtTrays.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-12 h-12 mx-auto mb-3 opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-2", children: t("spoolbuddy.ams.noData", "No AMS detected") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("spoolbuddy.ams.connectAms", "Connect an AMS to see filament slots") })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        regularAms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 min-h-0", children: regularAms.map((unit) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AmsUnitCard,
          {
            unit,
            activeSlot: null,
            onConfigureSlot: (_amsId, trayId) => handleSlotClick(unit.id, trayId),
            isDualNozzle,
            nozzleSide: getNozzleSide(unit.id),
            thresholds: amsThresholds,
            fillOverrides
          },
          unit.id
        )) }),
        singleSlots.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 shrink-0", children: singleSlots.map(({ key, label, amsId, trayId, tray, isEmpty, nozzleSide, effectiveFill }) => {
          const color = trayColorToCSS(tray.tray_color);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => handleSlotClick(amsId, trayId),
              className: `bg-bambu-dark-secondary rounded-lg px-3 py-2 cursor-pointer hover:bg-bambu-dark-secondary/80 transition-all flex items-center gap-2 ${isWaiting ? "opacity-50 pointer-events-none" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-10 h-10 shrink-0", children: isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-gray-600" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 56 56", className: "w-full h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "26", fill: color }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "20", fill: color, style: { filter: "brightness(0.85)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "20", cy: "20", rx: "6", ry: "4", fill: "white", opacity: "0.3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "8", fill: "#2d2d2d" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "5", fill: "#1a1a1a" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50 font-medium", children: label }),
                    nozzleSide && /* @__PURE__ */ jsxRuntimeExports.jsx(NozzleBadge, { side: nozzleSide })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/80 truncate", children: isEmpty ? "Empty" : tray.tray_type || "?" })
                ] }),
                !isEmpty && effectiveFill != null && effectiveFill >= 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-8 bg-bambu-dark-tertiary rounded-full overflow-hidden shrink-0 flex flex-col-reverse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-full rounded-full",
                    style: {
                      height: `${effectiveFill}%`,
                      backgroundColor: getFillBarColor(effectiveFill)
                    }
                  }
                ) })
              ]
            },
            key
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end gap-3 px-5 py-3 border-t border-zinc-800 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          disabled: isWaiting,
          className: "px-5 py-2.5 rounded-lg text-sm font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors min-h-[44px] disabled:opacity-50",
          children: statusType === "success" ? t("spoolbuddy.dashboard.close", "Close") : t("spoolbuddy.modal.cancel", "Cancel")
        }
      ) })
    ] }),
    showMismatchConfirm && mismatchDetails && (() => {
      let message = "";
      if (mismatchDetails.type === "material") {
        message = t("inventory.assignMismatchMessage", {
          spoolMaterial: mismatchDetails.spoolMaterial,
          trayMaterial: mismatchDetails.trayMaterial,
          location: mismatchDetails.location
        });
      } else if (mismatchDetails.type === "partial") {
        message = t("inventory.assignPartialMismatchMessage", {
          spoolMaterial: mismatchDetails.spoolMaterial,
          trayMaterial: mismatchDetails.trayMaterial,
          location: mismatchDetails.location
        });
      } else if (mismatchDetails.type === "material_profile") {
        message = `${t("inventory.assignMismatchMessage", {
          spoolMaterial: mismatchDetails.spoolMaterial,
          trayMaterial: mismatchDetails.trayMaterial,
          location: mismatchDetails.location
        })}

${t("inventory.assignProfileMismatchMessage", {
          spoolProfile: mismatchDetails.spoolProfile || t("common.unknown"),
          trayProfile: mismatchDetails.trayProfile || t("common.unknown"),
          location: mismatchDetails.location
        })}`;
      } else if (mismatchDetails.type === "partial_profile") {
        message = `${t("inventory.assignPartialMismatchMessage", {
          spoolMaterial: mismatchDetails.spoolMaterial,
          trayMaterial: mismatchDetails.trayMaterial,
          location: mismatchDetails.location
        })}

${t("inventory.assignProfileMismatchMessage", {
          spoolProfile: mismatchDetails.spoolProfile || t("common.unknown"),
          trayProfile: mismatchDetails.trayProfile || t("common.unknown"),
          location: mismatchDetails.location
        })}`;
      } else if (mismatchDetails.type === "profile") {
        message = t("inventory.assignProfileMismatchMessage", {
          spoolProfile: mismatchDetails.spoolProfile || t("common.unknown"),
          trayProfile: mismatchDetails.trayProfile || t("common.unknown"),
          location: mismatchDetails.location
        });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ConfirmModal,
        {
          title: t("inventory.assignMismatchTitle"),
          message,
          confirmText: t("inventory.assignMismatchConfirm"),
          variant: "warning",
          isLoading: configureMutation.isPending,
          onConfirm: handleConfirmMismatch,
          onCancel: () => {
            if (!configureMutation.isPending) {
              setShowMismatchConfirm(false);
              setPendingSlot(null);
              setMismatchDetails(null);
            }
          }
        }
      );
    })()
  ] });
}
function LinkSpoolModal({
  isOpen,
  onClose,
  tagId,
  untaggedSpools,
  onLink
}) {
  const { t } = useTranslation();
  const [selectedSpool, setSelectedSpool] = reactExports.useState(null);
  const handleClose = reactExports.useCallback(() => {
    setSelectedSpool(null);
    onClose();
  }, [onClose]);
  const handleKeyDown = reactExports.useCallback((e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);
  reactExports.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);
  if (!isOpen) return null;
  const handleConfirm = () => {
    if (selectedSpool) {
      onLink(selectedSpool);
      setSelectedSpool(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in", onClick: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-zinc-800 rounded-xl shadow-2xl w-full max-w-lg mx-4 animate-slide-up",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-zinc-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-zinc-100", children: t("spoolbuddy.dashboard.linkTagTitle", "Link Tag to Spool") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-500 font-mono", children: tagId })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleClose,
              className: "p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-3 max-h-[400px] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400", children: t("spoolbuddy.dashboard.selectSpool", "Select a spool to link this tag to:") }),
          untaggedSpools.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-zinc-500", children: t("spoolbuddy.dashboard.noUntagged", "No spools without tags found") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: untaggedSpools.map((spool) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSelectedSpool(spool),
              className: `w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all text-left ${selectedSpool?.id === spool.id ? "border-green-500 bg-green-500/10" : "border-zinc-700 hover:border-green-500/50 hover:bg-zinc-700/50"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SpoolIcon,
                  {
                    color: spool.rgba ? `#${spool.rgba.slice(0, 6)}` : "#808080",
                    isEmpty: false,
                    size: 40
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-zinc-100 truncate", children: spool.color_name || "Unknown color" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-zinc-400 truncate", children: [
                    spool.brand,
                    " • ",
                    spool.material,
                    spool.subtype && ` ${spool.subtype}`
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-mono text-zinc-500", children: [
                  Math.max(0, spool.label_weight - spool.weight_used),
                  "g"
                ] })
              ]
            },
            spool.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 px-5 py-4 border-t border-zinc-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleClose,
              className: "px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors min-h-[44px]",
              children: t("common.cancel", "Cancel")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleConfirm,
              disabled: !selectedSpool,
              className: "px-4 py-2.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors min-h-[44px]",
              children: t("spoolbuddy.dashboard.linkTag", "Link Tag")
            }
          )
        ] })
      ]
    }
  ) });
}
const SPOOL_COLORS = [
  "#00AE42",
  "#FF6B35",
  "#3B82F6",
  "#EF4444",
  "#A855F7",
  "#FBBF24",
  "#14B8A6",
  "#EC4899",
  "#F97316",
  "#22C55E"
];
function normalizeHexTag(value) {
  if (!value) return "";
  return value.replace(/[^0-9a-f]/gi, "").toUpperCase();
}
function tagsEquivalent(a, b) {
  const aNorm = normalizeHexTag(a);
  const bNorm = normalizeHexTag(b);
  if (!aNorm || !bNorm) return false;
  if (aNorm === bNorm) return true;
  return aNorm.endsWith(bNorm) || bNorm.endsWith(aNorm);
}
function ColorCyclingSpool() {
  const { t } = useTranslation();
  const [colorIndex, setColorIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % SPOOL_COLORS.length);
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  const currentColor = SPOOL_COLORS[colorIndex];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6 flex items-center justify-center", style: { width: 160, height: 160 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-24 h-24 rounded-full border-2 border-green-500/30 animate-ping", style: { animationDuration: "2.5s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-32 h-32 rounded-full border border-green-500/20 animate-ping", style: { animationDuration: "2.5s", animationDelay: "0.4s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-40 h-40 rounded-full border border-green-500/10 animate-ping", style: { animationDuration: "2.5s", animationDelay: "0.8s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -inset-4 rounded-full blur-2xl opacity-30 transition-colors duration-1000",
            style: { backgroundColor: currentColor }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transition-all duration-1000", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpoolIcon, { color: currentColor, isEmpty: false, size: 100 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium text-zinc-300", children: t("spoolbuddy.dashboard.readyToScan", "Ready to scan") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-500", children: t("spoolbuddy.dashboard.idleMessage", "Place a spool on the scale to identify it") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2 text-sm text-zinc-600", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("spoolbuddy.dashboard.nfcHint", "NFC tag will be read automatically") })
    ] })
  ] });
}
function DeviceOfflineState() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-6 flex items-center justify-center", style: { width: 160, height: 160 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-12 h-12 text-zinc-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M18.364 5.636a9 9 0 010 12.728m0 0l-12.728-12.728m12.728 12.728L5.636 5.636m12.728 0a9 9 0 00-12.728 0m0 12.728a9 9 0 010-12.728" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-zinc-500", children: t("spoolbuddy.status.deviceOffline", "Device Offline") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-600", children: t("spoolbuddy.status.connectDisplay", "Connect the SpoolBuddy display to scan spools") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2 text-xs text-zinc-600", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("spoolbuddy.status.waitingConnection", "Waiting for device connection...") })
    ] })
  ] });
}
function SpoolBuddyDashboard() {
  const { sbState, selectedPrinterId } = useOutletContext();
  const { t } = useTranslation();
  const { data: spools = [], refetch: refetchSpools } = useQuery({
    queryKey: ["inventory-spools"],
    queryFn: () => api.getSpools(false)
  });
  const { data: printers = [] } = useQuery({
    queryKey: ["printers"],
    queryFn: () => api.getPrinters()
  });
  const statusQueries = useQueries({
    queries: printers.map((printer) => ({
      queryKey: ["printerStatus", printer.id],
      queryFn: () => api.getPrinterStatus(printer.id),
      refetchInterval: 1e4
    }))
  });
  const [displayedTagId, setDisplayedTagId] = reactExports.useState(null);
  const [displayedWeight, setDisplayedWeight] = reactExports.useState(null);
  const [hiddenTagId, setHiddenTagId] = reactExports.useState(null);
  const [showLinkModal, setShowLinkModal] = reactExports.useState(false);
  const [showAssignAmsModal, setShowAssignAmsModal] = reactExports.useState(false);
  const [showQuickAddModal, setShowQuickAddModal] = reactExports.useState(false);
  const [quickAddBusy, setQuickAddBusy] = reactExports.useState(false);
  const currentTagId = sbState.matchedSpool?.tag_uid ?? sbState.unknownTagUid ?? null;
  const currentWeight = sbState.weight;
  const weightStable = sbState.weightStable;
  const stableDisplayWeight = reactExports.useRef(null);
  const WEIGHT_THRESHOLD = 3;
  if (currentWeight === null) {
    stableDisplayWeight.current = null;
  } else if (stableDisplayWeight.current === null || Math.abs(currentWeight - stableDisplayWeight.current) >= WEIGHT_THRESHOLD || weightStable) {
    stableDisplayWeight.current = currentWeight;
  }
  const scaleDisplayValue = stableDisplayWeight.current;
  const displayedSpool = reactExports.useMemo(() => {
    if (sbState.matchedSpool?.id) {
      const byId = spools.find((s) => s.id === sbState.matchedSpool?.id);
      if (byId) return byId;
    }
    if (!displayedTagId) return null;
    return spools.find((s) => tagsEquivalent(s.tag_uid, displayedTagId)) ?? null;
  }, [displayedTagId, sbState.matchedSpool, spools]);
  const untaggedSpools = reactExports.useMemo(() => {
    return spools.filter((s) => !s.tag_uid && !s.archived_at);
  }, [spools]);
  reactExports.useEffect(() => {
    if (currentTagId) {
      const isHidden = hiddenTagId === currentTagId;
      const isDifferentTag = displayedTagId !== null && displayedTagId !== currentTagId;
      if (isDifferentTag || !isHidden && displayedTagId !== currentTagId) {
        setDisplayedTagId(currentTagId);
        setDisplayedWeight(null);
        setHiddenTagId(null);
      }
      if (!isHidden && currentWeight !== null && weightStable) {
        setDisplayedWeight(Math.round(Math.max(0, currentWeight)));
      }
    } else {
      if (hiddenTagId) {
        setDisplayedTagId(null);
        setHiddenTagId(null);
        setDisplayedWeight(null);
      }
    }
  }, [currentTagId, currentWeight, weightStable, displayedTagId, hiddenTagId]);
  const handleCloseSpoolCard = () => {
    setHiddenTagId(displayedTagId);
  };
  const handleLinkTagToSpool = async (spool) => {
    if (!displayedTagId) return;
    try {
      await api.linkTagToSpool(spool.id, {
        tag_uid: displayedTagId,
        tag_type: "generic",
        data_origin: "nfc_link"
      });
      setShowLinkModal(false);
      refetchSpools();
    } catch (e) {
      console.error("Failed to link tag:", e);
    }
  };
  const handleQuickAddToInventory = async () => {
    if (!displayedTagId) return;
    setQuickAddBusy(true);
    try {
      const weight = liveWeight ?? displayedWeight;
      await api.createSpool({
        material: "PLA",
        subtype: null,
        color_name: null,
        rgba: null,
        brand: null,
        label_weight: 1e3,
        core_weight: 250,
        core_weight_catalog_id: null,
        weight_used: 0,
        slicer_filament: null,
        slicer_filament_name: null,
        nozzle_temp_min: null,
        nozzle_temp_max: null,
        note: null,
        added_full: null,
        last_used: null,
        encode_time: null,
        tag_uid: displayedTagId,
        tray_uuid: null,
        data_origin: "spoolbuddy",
        tag_type: "generic",
        cost_per_kg: null,
        last_scale_weight: weight,
        last_weighed_at: weight !== null ? (/* @__PURE__ */ new Date()).toISOString() : null
      });
      setShowQuickAddModal(false);
      refetchSpools();
    } catch (e) {
      console.error("Failed to quick-add spool:", e);
    } finally {
      setQuickAddBusy(false);
    }
  };
  const useScaleWeight = currentWeight !== null && (currentTagId === displayedTagId || currentTagId === null && displayedTagId !== null);
  const liveWeight = useScaleWeight ? currentWeight : null;
  const totalSpools = spools.length;
  const materials = new Set(spools.map((s) => s.material)).size;
  const brands = new Set(spools.filter((s) => s.brand).map((s) => s.brand)).size;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 px-4 py-1.5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 mb-3 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-zinc-100", children: totalSpools }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-zinc-500", children: t("spoolbuddy.inventory.spools", "Spools") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-5 bg-zinc-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-zinc-100", children: materials }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-zinc-500", children: t("spoolbuddy.spool.material", "Materials") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-5 bg-zinc-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-zinc-100", children: brands }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-zinc-500", children: t("spoolbuddy.spool.brand", "Brands") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex gap-4 min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-5/12 flex flex-col min-h-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-dashed border-zinc-700/50 rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3", children: t("spoolbuddy.dashboard.device", "Device") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2.5 h-2.5 rounded-full ${sbState.deviceOnline ? "bg-green-500 animate-pulse" : "bg-red-500"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-zinc-400", children: sbState.deviceOnline ? t("spoolbuddy.status.online", "Online") : t("spoolbuddy.status.offline", "Disconnected") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: `w-4 h-4 ${sbState.deviceOnline ? "text-green-500" : "text-zinc-500"}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-zinc-500", children: t("spoolbuddy.spool.scaleWeight", "Scale") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-mono font-semibold text-zinc-100", children: scaleDisplayValue !== null ? `${Math.abs(scaleDisplayValue) <= 20 ? 0 : Math.round(Math.max(0, scaleDisplayValue))}g` : "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: `w-4 h-4 ${sbState.deviceOnline ? "text-green-500" : "text-zinc-500"}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-zinc-500", children: "NFC" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium ${currentTagId ? "text-green-500" : "text-zinc-500"}`, children: currentTagId ? t("spoolbuddy.dashboard.tagDetected", "Tag detected") : t("spoolbuddy.dashboard.noTag", "No tag") })
            ] })
          ] })
        ] }),
        printers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 border border-dashed border-zinc-700/50 rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-2.5", children: t("spoolbuddy.dashboard.printers", "Printers") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 overflow-hidden", children: printers.map((printer, i) => {
            const isOnline = statusQueries[i]?.data?.connected ?? false;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1.5 px-2.5 py-1 bg-zinc-800/50 rounded-lg",
                title: `${printer.name} — ${isOnline ? "Online" : "Offline"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full shrink-0 ${isOnline ? "bg-green-500" : "bg-zinc-600"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-zinc-400 truncate max-w-[100px]", children: printer.name })
                ]
              },
              printer.id
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7/12 min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-dashed border-zinc-700/50 rounded-xl p-6 h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4 shrink-0", children: t("spoolbuddy.dashboard.currentSpool", "Current Spool") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center min-h-0", children: !sbState.deviceOnline ? /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceOfflineState, {}) : (displayedSpool || sbState.matchedSpool) && displayedTagId && hiddenTagId !== displayedTagId ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          SpoolInfoCard,
          {
            spool: {
              id: displayedSpool?.id ?? sbState.matchedSpool.id,
              tag_uid: displayedTagId,
              material: displayedSpool?.material ?? sbState.matchedSpool.material,
              subtype: displayedSpool?.subtype ?? sbState.matchedSpool.subtype,
              color_name: displayedSpool?.color_name ?? sbState.matchedSpool.color_name,
              rgba: displayedSpool?.rgba ?? sbState.matchedSpool.rgba,
              brand: displayedSpool?.brand ?? sbState.matchedSpool.brand,
              label_weight: displayedSpool?.label_weight ?? sbState.matchedSpool.label_weight,
              core_weight: displayedSpool?.core_weight ?? sbState.matchedSpool.core_weight,
              weight_used: displayedSpool?.weight_used ?? sbState.matchedSpool.weight_used
            },
            scaleWeight: liveWeight ?? displayedWeight,
            onSyncWeight: () => refetchSpools(),
            onAssignToAms: () => setShowAssignAmsModal(true),
            onClose: handleCloseSpoolCard
          }
        ) : currentTagId && displayedTagId && !displayedSpool && !sbState.matchedSpool && hiddenTagId !== displayedTagId ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          UnknownTagCard,
          {
            tagUid: displayedTagId,
            scaleWeight: liveWeight ?? displayedWeight,
            onLinkSpool: untaggedSpools.length > 0 ? () => setShowLinkModal(true) : void 0,
            onAddToInventory: () => setShowQuickAddModal(true),
            onClose: handleCloseSpoolCard
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ColorCyclingSpool, {}) })
      ] }) })
    ] }),
    displayedSpool && displayedTagId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AssignToAmsModal,
      {
        isOpen: showAssignAmsModal,
        onClose: () => setShowAssignAmsModal(false),
        spool: displayedSpool,
        printerId: selectedPrinterId
      }
    ),
    displayedTagId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      LinkSpoolModal,
      {
        isOpen: showLinkModal,
        onClose: () => setShowLinkModal(false),
        tagId: displayedTagId,
        untaggedSpools,
        onLink: handleLinkTagToSpool
      }
    ),
    showQuickAddModal && displayedTagId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-2xl p-6 mx-4 max-w-sm w-full border border-zinc-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-zinc-100 mb-3", children: t("spoolbuddy.modal.addToInventory", "Add to Inventory") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-200/80", children: t("spoolbuddy.modal.quickAddHint", 'For best results, add the spool in the Bambuddy web interface first (with material, color, brand), then use "Link to Spool" here to assign the NFC tag.') })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400 mb-1", children: t("spoolbuddy.modal.quickAddDesc", "This will create a basic PLA spool entry with this NFC tag. You can edit the details later in Bambuddy.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-zinc-500 font-mono mb-5", children: displayedTagId }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setShowQuickAddModal(false),
            className: "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors min-h-[44px]",
            children: t("common.cancel", "Cancel")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleQuickAddToInventory,
            disabled: quickAddBusy,
            className: "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 transition-colors min-h-[44px]",
            children: quickAddBusy ? t("common.saving", "Saving...") : t("spoolbuddy.modal.addAnyway", "Add Anyway")
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  SpoolBuddyDashboard
};
