import { c as createLucideIcon, r as reactExports, ab as useQueries, f as api, u as useTranslation, b as useQueryClient, d as useQuery, j as jsxRuntimeExports, a7 as ChevronUp, A as ChevronDown, T as TriangleAlert, O as Layers, D as formatDuration, L as LoaderCircle, l as CircleAlert, J as Printer, an as Users, aK as toDateTimeLocalValue, aL as formatDateInput, aM as formatTimeInput, o as Calendar, aN as getDatePlaceholder, aO as getTimePlaceholder, P as Power, aP as parseDateInput, aQ as parseTimeInput, a as useToast, k as useAuth, p as parseUTCDate, e as useMutation, y as Card, z as CardContent, B as Button, X, h as ConfirmModal } from "./index-By7NB6Yd.js";
import { g as getColorName } from "./colors-lMyZBYSI.js";
import { n as normalizeColorForCompare, d as colorsAreSimilar, e as normalizeColor, c as getGlobalTrayId, f as formatSlotLabel, h as canonicalFilamentType, i as autoMatchFilament, j as filterFilamentsByNozzle, k as isPlaceholderDate } from "./amsHelpers-DxzYuS95.js";
import { g as getCurrencySymbol } from "./currency-xmcJ_vO3.js";
import { R as RefreshCw } from "./refresh-cw-DSbBo49o.js";
import { C as Check } from "./check-B2KZNztd.js";
import { R as RotateCcw } from "./rotate-ccw-DINMEq3g.js";
import { P as Palette } from "./palette-DbvAKoIq.js";
import { S as SquareCheckBig } from "./square-check-big-Bfmxku0O.js";
import { S as Square } from "./square-DTe5xTuV.js";
import { W as WandSparkles } from "./wand-sparkles-BvxI5tcI.js";
import { S as Settings } from "./settings-DKzQs5ej.js";
import { C as Clock } from "./clock-Ct4GjfBN.js";
import { P as Pencil } from "./pencil-C-P5BunJ.js";
const __iconNode$1 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
];
const Hand = createLucideIcon("hand", __iconNode);
function buildLoadedFilaments(printerStatus) {
  const filaments = [];
  const amsExtruderMap = printerStatus?.ams_extruder_map;
  const hasDualNozzle = amsExtruderMap && Object.keys(amsExtruderMap).length > 0;
  printerStatus?.ams?.forEach((amsUnit) => {
    const isHt = amsUnit.tray.length === 1;
    amsUnit.tray.forEach((tray) => {
      if (tray.tray_type) {
        const color = normalizeColor(tray.tray_color);
        filaments.push({
          type: tray.tray_type,
          color,
          colorName: getColorName(color),
          amsId: amsUnit.id,
          trayId: tray.id,
          isHt,
          isExternal: false,
          label: formatSlotLabel(amsUnit.id, tray.id, isHt, false),
          globalTrayId: getGlobalTrayId(amsUnit.id, tray.id, false),
          trayInfoIdx: tray.tray_info_idx || "",
          traySubBrands: tray.tray_sub_brands || "",
          extruderId: amsExtruderMap?.[String(amsUnit.id)]
        });
      }
    });
  });
  for (const extTray of printerStatus?.vt_tray ?? []) {
    if (extTray.tray_type) {
      const color = normalizeColor(extTray.tray_color);
      const trayId = extTray.id ?? 254;
      const hasDualExternal = (printerStatus?.vt_tray?.length ?? 0) > 1;
      filaments.push({
        type: extTray.tray_type,
        color,
        colorName: getColorName(color),
        amsId: -1,
        trayId: trayId - 254,
        isHt: false,
        isExternal: true,
        label: hasDualExternal ? trayId === 254 ? "Ext-L" : "Ext-R" : "External",
        globalTrayId: trayId,
        trayInfoIdx: extTray.tray_info_idx || "",
        traySubBrands: extTray.tray_sub_brands || "",
        extruderId: hasDualNozzle ? 255 - trayId : void 0
      });
    }
  }
  return filaments;
}
function computeAmsMapping(filamentReqs, printerStatus) {
  if (!filamentReqs?.filaments || filamentReqs.filaments.length === 0) return void 0;
  const loadedFilaments = buildLoadedFilaments(printerStatus);
  if (loadedFilaments.length === 0) return void 0;
  const usedTrayIds = /* @__PURE__ */ new Set();
  const comparisons = filamentReqs.filaments.map((req) => {
    const reqTrayInfoIdx = req.tray_info_idx || "";
    let available = loadedFilaments.filter((f) => !usedTrayIds.has(f.globalTrayId));
    if (req.nozzle_id != null) {
      available = available.filter((f) => f.extruderId === req.nozzle_id);
    }
    let idxMatch;
    let exactMatch;
    let similarMatch;
    let typeOnlyMatch;
    if (reqTrayInfoIdx) {
      const idxMatches = available.filter((f) => f.trayInfoIdx === reqTrayInfoIdx);
      if (idxMatches.length === 1) {
        idxMatch = idxMatches[0];
      } else if (idxMatches.length > 1) {
        exactMatch = idxMatches.find(
          (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && normalizeColorForCompare(f.color) === normalizeColorForCompare(req.color)
        );
        if (!exactMatch) {
          similarMatch = idxMatches.find(
            (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && colorsAreSimilar(f.color, req.color)
          );
        }
        if (!exactMatch && !similarMatch) {
          typeOnlyMatch = idxMatches.find(
            (f) => f.type?.toUpperCase() === req.type?.toUpperCase()
          );
        }
      }
    }
    if (!idxMatch && !exactMatch && !similarMatch && !typeOnlyMatch) {
      exactMatch = available.find(
        (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && normalizeColorForCompare(f.color) === normalizeColorForCompare(req.color)
      );
      if (!exactMatch) {
        similarMatch = available.find(
          (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && colorsAreSimilar(f.color, req.color)
        );
      }
      if (!exactMatch && !similarMatch) {
        typeOnlyMatch = available.find(
          (f) => f.type?.toUpperCase() === req.type?.toUpperCase()
        );
      }
    }
    const loaded = idxMatch || exactMatch || similarMatch || typeOnlyMatch || void 0;
    if (loaded) {
      usedTrayIds.add(loaded.globalTrayId);
    }
    return {
      slot_id: req.slot_id,
      globalTrayId: loaded?.globalTrayId ?? -1
    };
  });
  const maxSlotId = Math.max(...comparisons.map((f) => f.slot_id || 0));
  if (maxSlotId <= 0) return void 0;
  const mapping = new Array(maxSlotId).fill(-1);
  comparisons.forEach((f) => {
    if (f.slot_id && f.slot_id > 0) {
      mapping[f.slot_id - 1] = f.globalTrayId;
    }
  });
  return mapping;
}
function useLoadedFilaments(printerStatus) {
  return reactExports.useMemo(() => {
    return buildLoadedFilaments(printerStatus);
  }, [printerStatus]);
}
function useFilamentMapping(filamentReqs, printerStatus, manualMappings) {
  const loadedFilaments = useLoadedFilaments(printerStatus);
  const filamentComparison = reactExports.useMemo(() => {
    if (!filamentReqs?.filaments || filamentReqs.filaments.length === 0) return [];
    const usedTrayIds = new Set(Object.values(manualMappings));
    return filamentReqs.filaments.map((req) => {
      const slotId = req.slot_id || 0;
      if (slotId > 0 && manualMappings[slotId] !== void 0) {
        const manualTrayId = manualMappings[slotId];
        const manualLoaded = loadedFilaments.find((f) => f.globalTrayId === manualTrayId);
        if (manualLoaded) {
          const typeMatch2 = manualLoaded.type?.toUpperCase() === req.type?.toUpperCase();
          const colorMatch2 = normalizeColorForCompare(manualLoaded.color) === normalizeColorForCompare(req.color) || colorsAreSimilar(manualLoaded.color, req.color);
          let status2;
          if (typeMatch2 && colorMatch2) {
            status2 = "match";
          } else if (typeMatch2) {
            status2 = "type_only";
          } else {
            status2 = "mismatch";
          }
          return {
            ...req,
            loaded: manualLoaded,
            hasFilament: true,
            typeMatch: typeMatch2,
            colorMatch: colorMatch2,
            status: status2,
            isManual: true
          };
        }
      }
      const reqTrayInfoIdx = req.tray_info_idx || "";
      let available = loadedFilaments.filter((f) => !usedTrayIds.has(f.globalTrayId));
      if (req.nozzle_id != null) {
        available = available.filter((f) => f.extruderId === req.nozzle_id);
      }
      let idxMatch;
      let exactMatch;
      let similarMatch;
      let typeOnlyMatch;
      if (reqTrayInfoIdx) {
        const idxMatches = available.filter((f) => f.trayInfoIdx === reqTrayInfoIdx);
        if (idxMatches.length === 1) {
          idxMatch = idxMatches[0];
        } else if (idxMatches.length > 1) {
          exactMatch = idxMatches.find(
            (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && normalizeColorForCompare(f.color) === normalizeColorForCompare(req.color)
          );
          if (!exactMatch) {
            similarMatch = idxMatches.find(
              (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && colorsAreSimilar(f.color, req.color)
            );
          }
          if (!exactMatch && !similarMatch) {
            typeOnlyMatch = idxMatches.find(
              (f) => f.type?.toUpperCase() === req.type?.toUpperCase()
            );
          }
        }
      }
      if (!idxMatch && !exactMatch && !similarMatch && !typeOnlyMatch) {
        exactMatch = available.find(
          (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && normalizeColorForCompare(f.color) === normalizeColorForCompare(req.color)
        );
        if (!exactMatch) {
          similarMatch = available.find(
            (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && colorsAreSimilar(f.color, req.color)
          );
        }
        if (!exactMatch && !similarMatch) {
          typeOnlyMatch = available.find(
            (f) => f.type?.toUpperCase() === req.type?.toUpperCase()
          );
        }
      }
      const loaded = idxMatch || exactMatch || similarMatch || typeOnlyMatch || void 0;
      if (loaded) {
        usedTrayIds.add(loaded.globalTrayId);
      }
      const hasFilament = !!loaded;
      const typeMatch = hasFilament;
      const colorMatch = !!idxMatch || !!exactMatch || !!similarMatch;
      let status;
      if (idxMatch || exactMatch || similarMatch) {
        status = "match";
      } else if (typeOnlyMatch) {
        status = "type_only";
      } else {
        status = "mismatch";
      }
      return {
        ...req,
        loaded,
        hasFilament,
        typeMatch,
        colorMatch,
        status,
        isManual: false
      };
    });
  }, [filamentReqs, loadedFilaments, manualMappings]);
  const amsMapping = reactExports.useMemo(() => {
    if (filamentComparison.length === 0) return void 0;
    const maxSlotId = Math.max(...filamentComparison.map((f) => f.slot_id || 0));
    if (maxSlotId <= 0) return void 0;
    const mapping = new Array(maxSlotId).fill(-1);
    filamentComparison.forEach((f) => {
      if (f.slot_id && f.slot_id > 0) {
        mapping[f.slot_id - 1] = f.loaded?.globalTrayId ?? -1;
      }
    });
    return mapping;
  }, [filamentComparison]);
  const hasTypeMismatch = filamentComparison.some((f) => f.status === "mismatch");
  const hasColorMismatch = filamentComparison.some((f) => f.status === "type_only");
  return {
    loadedFilaments,
    filamentComparison,
    amsMapping,
    hasTypeMismatch,
    hasColorMismatch
  };
}
function computeMatchDetails(filamentReqs, loadedFilaments, manualMappings) {
  if (!filamentReqs || filamentReqs.length === 0) {
    return { exactMatches: 0, typeOnlyMatches: 0, missingTypes: 0, totalSlots: 0, status: "full" };
  }
  let exactMatches = 0;
  let typeOnlyMatches = 0;
  let missingTypes = 0;
  const usedTrayIds = new Set(Object.values(manualMappings));
  for (const req of filamentReqs) {
    const slotId = req.slot_id || 0;
    if (slotId > 0 && manualMappings[slotId] !== void 0) {
      const manualTrayId = manualMappings[slotId];
      const manualLoaded = loadedFilaments.find((f) => f.globalTrayId === manualTrayId);
      if (manualLoaded) {
        const typeMatch = manualLoaded.type?.toUpperCase() === req.type?.toUpperCase();
        const colorMatch = normalizeColorForCompare(manualLoaded.color) === normalizeColorForCompare(req.color) || colorsAreSimilar(manualLoaded.color, req.color);
        if (typeMatch && colorMatch) {
          exactMatches++;
        } else if (typeMatch) {
          typeOnlyMatches++;
        } else {
          missingTypes++;
        }
        continue;
      }
    }
    let candidates = loadedFilaments.filter((f) => !usedTrayIds.has(f.globalTrayId));
    if (req.nozzle_id != null) {
      const nozzleFiltered = candidates.filter((f) => f.extruderId === req.nozzle_id);
      if (nozzleFiltered.length > 0) {
        candidates = nozzleFiltered;
      }
    }
    const exactMatch = candidates.find(
      (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && normalizeColorForCompare(f.color) === normalizeColorForCompare(req.color)
    );
    const similarMatch = exactMatch ? void 0 : candidates.find(
      (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && colorsAreSimilar(f.color, req.color)
    );
    const typeOnlyMatch = exactMatch || similarMatch ? void 0 : candidates.find(
      (f) => f.type?.toUpperCase() === req.type?.toUpperCase()
    );
    const loaded = exactMatch ?? similarMatch ?? typeOnlyMatch;
    if (loaded) {
      usedTrayIds.add(loaded.globalTrayId);
    }
    if (exactMatch || similarMatch) {
      exactMatches++;
    } else if (typeOnlyMatch) {
      typeOnlyMatches++;
    } else {
      missingTypes++;
    }
  }
  const totalSlots = filamentReqs.length;
  let status = "full";
  if (missingTypes > 0) {
    status = "missing";
  } else if (typeOnlyMatches > 0) {
    status = "partial";
  }
  return { exactMatches, typeOnlyMatches, missingTypes, totalSlots, status };
}
function computeMappingWithOverrides(filamentReqs, printerStatus, manualMappings) {
  if (!filamentReqs?.filaments || filamentReqs.filaments.length === 0) return void 0;
  const loadedFilaments = buildLoadedFilaments(printerStatus);
  if (loadedFilaments.length === 0) return void 0;
  const usedTrayIds = new Set(Object.values(manualMappings));
  const comparisons = [];
  for (const req of filamentReqs.filaments) {
    const slotId = req.slot_id || 0;
    if (slotId > 0 && manualMappings[slotId] !== void 0) {
      comparisons.push({ slot_id: slotId, globalTrayId: manualMappings[slotId] });
      continue;
    }
    let candidates = loadedFilaments.filter((f) => !usedTrayIds.has(f.globalTrayId));
    if (req.nozzle_id != null) {
      const nozzleFiltered = candidates.filter((f) => f.extruderId === req.nozzle_id);
      if (nozzleFiltered.length > 0) {
        candidates = nozzleFiltered;
      }
    }
    const exactMatch = candidates.find(
      (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && normalizeColorForCompare(f.color) === normalizeColorForCompare(req.color)
    );
    const similarMatch = exactMatch ? void 0 : candidates.find(
      (f) => f.type?.toUpperCase() === req.type?.toUpperCase() && colorsAreSimilar(f.color, req.color)
    );
    const typeOnlyMatch = exactMatch || similarMatch ? void 0 : candidates.find(
      (f) => f.type?.toUpperCase() === req.type?.toUpperCase()
    );
    const loaded = exactMatch ?? similarMatch ?? typeOnlyMatch;
    if (loaded) {
      usedTrayIds.add(loaded.globalTrayId);
    }
    comparisons.push({ slot_id: slotId, globalTrayId: loaded?.globalTrayId ?? -1 });
  }
  const maxSlotId = Math.max(...comparisons.map((f) => f.slot_id || 0));
  if (maxSlotId <= 0) return void 0;
  const mapping = new Array(maxSlotId).fill(-1);
  comparisons.forEach((f) => {
    if (f.slot_id && f.slot_id > 0) {
      mapping[f.slot_id - 1] = f.globalTrayId;
    }
  });
  return mapping;
}
const DEFAULT_PRINTER_CONFIG = {
  useDefault: true,
  manualMappings: {},
  autoConfigured: false
};
function useMultiPrinterFilamentMapping(selectedPrinterIds, printers, filamentReqs, defaultMappings, perPrinterConfigs, setPerPrinterConfigs) {
  const statusQueries = useQueries({
    queries: selectedPrinterIds.map((printerId) => ({
      queryKey: ["printer-status", printerId],
      queryFn: () => api.getPrinterStatus(printerId),
      enabled: selectedPrinterIds.length > 0,
      staleTime: 5e3
      // Consider data fresh for 5 seconds
    }))
  });
  const printerResults = reactExports.useMemo(() => {
    return selectedPrinterIds.map((printerId, index) => {
      const query = statusQueries[index];
      const printerStatus = query?.data;
      const printer = printers?.find((p) => p.id === printerId);
      const printerName = printer?.name || `Printer ${printerId}`;
      const loadedFilaments = buildLoadedFilaments(printerStatus);
      const config = perPrinterConfigs[printerId] || DEFAULT_PRINTER_CONFIG;
      const autoMapping = computeAmsMapping(filamentReqs, printerStatus);
      const effectiveMappings = !config.useDefault ? config.manualMappings : defaultMappings;
      const finalMapping = computeMappingWithOverrides(filamentReqs, printerStatus, effectiveMappings);
      const matchDetails = computeMatchDetails(
        filamentReqs?.filaments,
        loadedFilaments,
        effectiveMappings
      );
      return {
        printerId,
        printerName,
        status: printerStatus,
        isLoading: query?.isLoading ?? false,
        loadedFilaments,
        autoMapping,
        finalMapping,
        matchStatus: matchDetails.status,
        exactMatches: matchDetails.exactMatches,
        typeOnlyMatches: matchDetails.typeOnlyMatches,
        missingTypes: matchDetails.missingTypes,
        totalSlots: matchDetails.totalSlots,
        config
      };
    });
  }, [selectedPrinterIds, statusQueries, printers, filamentReqs, perPrinterConfigs, defaultMappings]);
  const isLoading = statusQueries.some((q) => q.isLoading);
  const updatePrinterConfig = (printerId, updates) => {
    setPerPrinterConfigs((prev) => ({
      ...prev,
      [printerId]: {
        ...prev[printerId] || DEFAULT_PRINTER_CONFIG,
        ...updates
      }
    }));
  };
  const autoConfigurePrinter = (printerId) => {
    const result = printerResults.find((r) => r.printerId === printerId);
    if (!result || !result.status || !filamentReqs?.filaments) return;
    const autoMapping = computeAmsMapping(filamentReqs, result.status);
    if (!autoMapping) return;
    const manualMappings = {};
    autoMapping.forEach((globalTrayId, index) => {
      if (globalTrayId !== -1) {
        manualMappings[index + 1] = globalTrayId;
      }
    });
    updatePrinterConfig(printerId, {
      useDefault: false,
      manualMappings,
      autoConfigured: true
    });
  };
  const autoConfigureAll = () => {
    for (const printerId of selectedPrinterIds) {
      autoConfigurePrinter(printerId);
    }
  };
  const getFinalMapping = (printerId) => {
    const result = printerResults.find((r) => r.printerId === printerId);
    return result?.finalMapping;
  };
  const allPrintersReady = printerResults.every((r) => r.matchStatus !== "missing");
  return {
    printerResults,
    isLoading,
    perPrinterConfigs,
    updatePrinterConfig,
    autoConfigureAll,
    autoConfigurePrinter,
    getFinalMapping,
    allPrintersReady
  };
}
function FilamentMapping({
  printerId,
  filamentReqs,
  manualMappings,
  onManualMappingChange,
  currencySymbol,
  defaultCostPerKg,
  defaultExpanded = false
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = reactExports.useState(false);
  const [isExpanded, setIsExpanded] = reactExports.useState(defaultExpanded);
  const { data: printerStatus } = useQuery({
    queryKey: ["printer-status", printerId],
    queryFn: () => api.getPrinterStatus(printerId),
    enabled: !!printerId
  });
  const { data: assignments } = useQuery({
    queryKey: ["spool-assignments", printerId],
    queryFn: () => api.getAssignments(printerId),
    enabled: !!printerId
  });
  const { loadedFilaments, filamentComparison, hasTypeMismatch, hasColorMismatch } = useFilamentMapping(filamentReqs, printerStatus, manualMappings);
  const trayCostMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const assignment of assignments || []) {
      const isExternal = assignment.ams_id === 255;
      const globalTrayId = getGlobalTrayId(assignment.ams_id, assignment.tray_id, isExternal);
      map.set(globalTrayId, assignment.spool?.cost_per_kg ?? null);
    }
    return map;
  }, [assignments]);
  const trayRemainingWeightMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const assignment of assignments || []) {
      const isExternal = assignment.ams_id === 255;
      const globalTrayId = getGlobalTrayId(assignment.ams_id, assignment.tray_id, isExternal);
      const spool = assignment.spool;
      if (!spool) {
        map.set(globalTrayId, null);
        continue;
      }
      map.set(globalTrayId, Math.max(0, Math.round((spool.label_weight ?? 0) - (spool.weight_used ?? 0))));
    }
    return map;
  }, [assignments]);
  const totalCost = reactExports.useMemo(() => {
    let total = 0;
    for (const item of filamentComparison) {
      const trayId = item.loaded?.globalTrayId;
      if (trayId == null) continue;
      const assignedCost = trayCostMap.get(trayId) ?? null;
      const costPerKg = assignedCost ?? defaultCostPerKg;
      if (costPerKg > 0) {
        total += item.used_grams / 1e3 * costPerKg;
      }
    }
    return total;
  }, [filamentComparison, trayCostMap, defaultCostPerKg]);
  const hasAnyCost = reactExports.useMemo(
    () => Array.from(trayCostMap.values()).some((v) => v != null && v > 0),
    [trayCostMap]
  );
  const hasFilamentReqs = filamentReqs?.filaments && filamentReqs.filaments.length > 0;
  const isDualNozzle = filamentReqs?.filaments?.some((f) => f.nozzle_id != null) ?? false;
  if (!hasFilamentReqs) {
    return null;
  }
  if (!printerStatus) {
    return null;
  }
  const statusColor = hasTypeMismatch ? "#f97316" : hasColorMismatch ? "#facc15" : "#00ae42";
  const handleSlotChange = (slotId, value) => {
    if (slotId > 0) {
      if (value === "") {
        const next = { ...manualMappings };
        delete next[slotId];
        onManualMappingChange(next);
      } else {
        onManualMappingChange({
          ...manualMappings,
          [slotId]: parseInt(value, 10)
        });
      }
    }
  };
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await api.refreshPrinterStatus(printerId);
      await new Promise((r) => setTimeout(r, 500));
      await queryClient.refetchQueries({ queryKey: ["printer-status", printerId] });
    } finally {
      setIsRefreshing(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsExpanded(!isExpanded),
        className: "flex items-center gap-2 text-sm text-bambu-gray hover:text-white transition-colors w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-4 h-4", fill: statusColor, stroke: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("printModal.filamentMapping") }),
          hasTypeMismatch ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-orange-400", children: "(Type not found)" }) : hasColorMismatch ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-yellow-400", children: "(Color mismatch)" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-green", children: "(Ready)" }),
          isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 ml-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 ml-auto" })
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 bg-bambu-dark rounded-lg p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: "Click to change slot assignment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleRefresh,
            className: "flex items-center gap-1 px-2 py-0.5 text-xs rounded border border-bambu-gray/30 hover:border-bambu-gray hover:bg-bambu-dark-tertiary transition-colors text-bambu-gray hover:text-white",
            disabled: isRefreshing,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3 h-3 ${isRefreshing ? "animate-spin" : ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Re-read" })
            ]
          }
        )
      ] }),
      filamentComparison.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "grid items-center gap-2 text-xs",
          style: { gridTemplateColumns: "16px minmax(70px, 1fr) auto 2fr 16px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: `Required: ${item.type} - ${getColorName(item.color)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-3 h-3", fill: item.color, stroke: item.color }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white truncate flex items-center gap-1", children: [
              isDualNozzle && item.nozzle_id != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-flex items-center justify-center w-3.5 h-3.5 rounded text-[9px] font-bold leading-none bg-bambu-gray/20 text-bambu-gray shrink-0",
                  title: item.nozzle_id === 1 ? t("printModal.leftNozzleTooltip") : t("printModal.rightNozzleTooltip"),
                  children: item.nozzle_id === 1 ? t("printModal.leftNozzle") : t("printModal.rightNozzle")
                }
              ),
              item.type,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
                "(",
                item.used_grams,
                "g)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: item.loaded?.globalTrayId ?? "",
                onChange: (e) => handleSlotChange(item.slot_id || 0, e.target.value),
                className: `flex-1 px-2 py-1 rounded border text-xs bg-bambu-dark-secondary focus:outline-none focus:ring-1 focus:ring-bambu-green ${item.status === "match" ? "border-bambu-green/50 text-bambu-green" : item.status === "type_only" ? "border-yellow-400/50 text-yellow-400" : "border-orange-400/50 text-orange-400"} ${item.isManual ? "ring-1 ring-blue-400/50" : ""}`,
                title: item.isManual ? "Manually selected" : "Auto-matched",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", className: "bg-bambu-dark text-bambu-gray", children: "-- Select slot --" }),
                  loadedFilaments.filter((f) => item.nozzle_id == null || f.extruderId === item.nozzle_id).map((f) => {
                    const remainingWeight = trayRemainingWeightMap.get(f.globalTrayId);
                    const remainingLabel = remainingWeight != null ? t("printModal.slotRemainingShort", {
                      grams: remainingWeight,
                      defaultValue: ` - ${remainingWeight}g left`
                    }) : "";
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: f.globalTrayId, className: "bg-bambu-dark text-white", children: [
                      f.label,
                      ": ",
                      f.traySubBrands || f.type,
                      " (",
                      f.colorName,
                      ")",
                      remainingLabel
                    ] }, f.globalTrayId);
                  })
                ]
              }
            ),
            item.status === "match" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-bambu-green" }) : item.status === "type_only" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Same type, different color", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 text-yellow-400" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Filament type not loaded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 text-orange-400" }) })
          ]
        },
        idx
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-bambu-gray", children: [
        t("printModal.totalCost"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: totalCost > 0 || hasAnyCost ? `${currencySymbol}${totalCost.toFixed(2)}` : "N/A" })
      ] }),
      hasTypeMismatch && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-400 mt-2", children: "Required filament type not found in printer." })
    ] })
  ] });
}
function FilamentOverride({
  filamentReqs,
  availableFilaments,
  overrides,
  onChange,
  forceColorMatch,
  onForceColorMatchChange
}) {
  const { t } = useTranslation();
  const filamentsByType = reactExports.useMemo(() => {
    const map = {};
    for (const f of availableFilaments) {
      const key = canonicalFilamentType(f.type);
      if (!map[key]) map[key] = [];
      map[key].push(f);
    }
    return map;
  }, [availableFilaments]);
  const filaments = filamentReqs?.filaments;
  if (!filaments || filaments.length === 0 || availableFilaments.length === 0) {
    return null;
  }
  const handleChange = (slotId, value) => {
    if (value === "") {
      const next = { ...overrides };
      delete next[slotId];
      onChange(next);
    } else {
      const [type, color] = value.split("|");
      onChange({ ...overrides, [slotId]: { type, color } });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-sm text-bambu-gray mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("printModal.filamentOverride") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-2", children: t("printModal.filamentOverrideHint") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-bambu-dark rounded-lg p-3 space-y-2", children: filaments.map((req) => {
      const override = overrides[req.slot_id];
      const isOverridden = !!override;
      const sameType = filamentsByType[canonicalFilamentType(req.type)] || [];
      const compatible = req.nozzle_id != null ? sameType.filter((f) => f.extruder_id == null || f.extruder_id === req.nozzle_id) : sameType;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid items-center gap-2 text-xs",
            style: { gridTemplateColumns: "16px minmax(70px, 1fr) auto 2fr 20px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: `${t("printModal.originalFilament")}: ${req.type} - ${getColorName(req.color)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-3 h-3", fill: req.color, stroke: req.color }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white truncate", children: [
                req.type,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
                  "(",
                  req.used_grams,
                  "g)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: "→" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: isOverridden ? `${override.type}|${override.color}` : "",
                  onChange: (e) => handleChange(req.slot_id, e.target.value),
                  disabled: compatible.length === 0,
                  className: `flex-1 px-2 py-1 rounded border text-xs bg-bambu-dark-secondary focus:outline-none focus:ring-1 focus:ring-bambu-green ${isOverridden ? "border-blue-400/50 text-blue-400" : "border-bambu-gray/30 text-bambu-gray"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "", className: "bg-bambu-dark text-bambu-gray", children: [
                      t("printModal.originalFilament"),
                      ": ",
                      req.type,
                      " (",
                      getColorName(req.color),
                      ")"
                    ] }),
                    compatible.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "option",
                      {
                        value: `${f.type}|${f.color}`,
                        className: "bg-bambu-dark text-white",
                        children: [
                          f.tray_sub_brands || f.type,
                          " (",
                          getColorName(f.color),
                          ")"
                        ]
                      },
                      `${f.type}-${f.color}-${f.tray_sub_brands}-${idx}`
                    ))
                  ]
                }
              ),
              isOverridden ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleChange(req.slot_id, ""),
                  className: "text-bambu-gray hover:text-white transition-colors",
                  title: t("printModal.resetToOriginal"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" })
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-1.5 text-xs text-bambu-gray cursor-pointer select-none pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: forceColorMatch?.[req.slot_id] ?? false,
              onChange: (e) => onForceColorMatchChange?.(req.slot_id, e.target.checked),
              className: "accent-bambu-green w-3 h-3"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-3 h-3" }),
          t("printModal.forceColorMatch")
        ] })
      ] }, req.slot_id);
    }) })
  ] });
}
function PlateSelector({
  plates,
  isMultiPlate,
  selectedPlates,
  onToggle,
  onSelectAll,
  onDeselectAll,
  multiSelect
}) {
  const { t } = useTranslation();
  if (!isMultiPlate || plates.length <= 1) {
    return null;
  }
  const allSelected = selectedPlates.size === plates.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-bambu-gray" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-gray", children: [
        "Select Plate",
        multiSelect ? "s" : "",
        " to Print"
      ] }),
      selectedPlates.size === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-orange-400 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
        "Selection required"
      ] }),
      multiSelect && onSelectAll && onDeselectAll && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: allSelected ? onDeselectAll : onSelectAll,
          className: `ml-auto text-xs px-2 py-0.5 rounded-full border transition-colors ${allSelected ? "border-bambu-green bg-bambu-green/10 text-bambu-green" : "border-bambu-dark-tertiary text-bambu-gray hover:border-bambu-gray"}`,
          children: allSelected ? t("queue.deselectAll") : t("queue.selectAllPlates", { count: plates.length })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: plates.map((plate) => {
      const isSelected = selectedPlates.has(plate.index);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onToggle(plate.index),
          className: `flex items-center gap-2 p-2 rounded-lg border transition-colors text-left ${isSelected ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary bg-bambu-dark hover:border-bambu-gray"}`,
          children: [
            multiSelect && (isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-bambu-green flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4 text-bambu-gray flex-shrink-0" })),
            plate.has_thumbnail && plate.thumbnail_url != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: plate.thumbnail_url,
                alt: `Plate ${plate.index}`,
                className: "w-10 h-10 rounded object-cover bg-bambu-dark-tertiary"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-bambu-dark-tertiary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-5 h-5 text-bambu-gray" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium truncate", children: plate.name || `Plate ${plate.index}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray truncate", children: [
                plate.objects.length > 0 ? plate.objects.slice(0, 3).join(", ") + (plate.objects.length > 3 ? "..." : "") : `${plate.filaments.length} filament${plate.filaments.length !== 1 ? "s" : ""}`,
                plate.print_time_seconds != null ? ` • ${formatDuration(plate.print_time_seconds)}` : ""
              ] })
            ] }),
            !multiSelect && isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-bambu-green flex-shrink-0" })
          ]
        },
        plate.index
      );
    }) })
  ] });
}
const AVAILABLE_STATES = /* @__PURE__ */ new Set(["IDLE", "FINISH", "FAILED"]);
function InlineMappingEditor({
  printerResult,
  filamentReqs,
  onUpdateConfig
}) {
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = reactExports.useState(false);
  const handleSlotChange = (slotId, value) => {
    if (slotId <= 0) return;
    const newMappings = { ...printerResult.config.manualMappings };
    if (value === "") {
      delete newMappings[slotId];
    } else {
      newMappings[slotId] = parseInt(value, 10);
    }
    onUpdateConfig({
      useDefault: false,
      manualMappings: newMappings,
      autoConfigured: false
    });
  };
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await api.refreshPrinterStatus(printerResult.printerId);
      await new Promise((r) => setTimeout(r, 500));
      await queryClient.refetchQueries({ queryKey: ["printer-status", printerResult.printerId] });
    } finally {
      setIsRefreshing(false);
    }
  };
  const slotAssignments = filamentReqs.map((req) => {
    const slotId = req.slot_id || 0;
    const currentMapping = printerResult.config.manualMappings[slotId];
    let loaded;
    let isManual = false;
    if (currentMapping !== void 0) {
      loaded = printerResult.loadedFilaments.find((f) => f.globalTrayId === currentMapping);
      isManual = true;
    } else {
      const usedTrayIds = new Set(Object.values(printerResult.config.manualMappings));
      loaded = autoMatchFilament(req, printerResult.loadedFilaments, usedTrayIds);
    }
    let status = "mismatch";
    if (loaded) {
      const typeMatch = loaded.type?.toUpperCase() === req.type?.toUpperCase();
      const colorMatch = normalizeColorForCompare(loaded.color) === normalizeColorForCompare(req.color) || colorsAreSimilar(loaded.color, req.color);
      if (typeMatch && colorMatch) {
        status = "match";
      } else if (typeMatch) {
        status = "type_only";
      }
    }
    return { req, loaded, status, isManual };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 bg-bambu-dark rounded-lg p-3 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: "Custom slot mapping" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleRefresh,
          className: "flex items-center gap-1 px-2 py-0.5 text-xs rounded border border-bambu-gray/30 hover:border-bambu-gray hover:bg-bambu-dark-tertiary transition-colors text-bambu-gray hover:text-white",
          disabled: isRefreshing,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3 h-3 ${isRefreshing ? "animate-spin" : ""}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Re-read" })
          ]
        }
      )
    ] }),
    slotAssignments.map(({ req, loaded, status, isManual }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid items-center gap-2 text-xs",
        style: { gridTemplateColumns: "16px minmax(70px, 1fr) auto 2fr 16px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: `Required: ${req.type} - ${getColorName(req.color)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-3 h-3", fill: req.color, stroke: req.color }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white truncate", children: [
            req.type,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
              "(",
              req.used_grams,
              "g)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: loaded?.globalTrayId ?? "",
              onChange: (e) => handleSlotChange(req.slot_id || 0, e.target.value),
              className: `flex-1 px-2 py-1 rounded border text-xs bg-bambu-dark-secondary focus:outline-none focus:ring-1 focus:ring-bambu-green ${status === "match" ? "border-bambu-green/50 text-bambu-green" : status === "type_only" ? "border-yellow-400/50 text-yellow-400" : "border-orange-400/50 text-orange-400"} ${isManual ? "ring-1 ring-blue-400/50" : ""}`,
              title: isManual ? "Manually selected" : "Auto-matched",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", className: "bg-bambu-dark text-bambu-gray", children: "-- Select slot --" }),
                filterFilamentsByNozzle(printerResult.loadedFilaments, req.nozzle_id).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: f.globalTrayId, className: "bg-bambu-dark text-white", children: [
                  f.label,
                  ": ",
                  f.traySubBrands || f.type,
                  " (",
                  f.colorName,
                  ")"
                ] }, f.globalTrayId))
              ]
            }
          ),
          status === "match" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-bambu-green" }) : status === "type_only" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Same type, different color", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 text-yellow-400" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Filament type not loaded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 text-orange-400" }) })
        ]
      },
      idx
    ))
  ] });
}
function PrinterSelector({
  printers,
  selectedPrinterIds,
  onMultiSelect,
  isLoading = false,
  allowMultiple = false,
  showInactive = false,
  disableBusy = false,
  printerMappingResults,
  filamentReqs,
  onAutoConfigurePrinter,
  onUpdatePrinterConfig,
  assignmentMode = "printer",
  onAssignmentModeChange,
  targetModel,
  onTargetModelChange,
  targetLocation,
  onTargetLocationChange,
  slicedForModel
}) {
  const [showAllPrinters, setShowAllPrinters] = reactExports.useState(false);
  const activePrinters = showInactive ? printers : printers.filter((p) => p.is_active);
  const statusQueries = useQueries({
    queries: activePrinters.map((printer) => ({
      queryKey: ["printerStatus", printer.id],
      queryFn: () => api.getPrinterStatus(printer.id),
      staleTime: 5e3
    }))
  });
  const printerStatusMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    activePrinters.forEach((printer, idx) => {
      const query = statusQueries[idx];
      if (query?.data) {
        map.set(printer.id, query.data);
      }
    });
    return map;
  }, [activePrinters, statusQueries]);
  const isPrinterBusy = (printerId) => {
    const status = printerStatusMap.get(printerId);
    if (!status) return false;
    if (!status.connected) return true;
    return !AVAILABLE_STATES.has(status.state ?? "");
  };
  const getPrinterStateLabel = (printerId) => {
    const status = printerStatusMap.get(printerId);
    if (!status) return null;
    if (!status.connected) return "Offline";
    const state = status.state;
    if (!state) return null;
    if (state === "RUNNING") return status.stg_cur_name || "Printing";
    if (state === "PREPARE") return "Preparing";
    if (state === "PAUSE") return "Paused";
    if (state === "IDLE") return "Idle";
    if (state === "FINISH") return "Finished";
    if (state === "FAILED") return "Failed";
    return state;
  };
  const displayPrinters = reactExports.useMemo(() => {
    if (assignmentMode !== "printer" || !slicedForModel || showAllPrinters) {
      return activePrinters;
    }
    const matching = activePrinters.filter((p) => p.model === slicedForModel);
    return matching.length > 0 ? matching : activePrinters;
  }, [activePrinters, assignmentMode, slicedForModel, showAllPrinters]);
  const hiddenPrinterCount = activePrinters.length - displayPrinters.length;
  const uniqueModels = reactExports.useMemo(() => {
    const models = activePrinters.map((p) => p.model).filter((m) => Boolean(m));
    return [...new Set(models)].sort();
  }, [activePrinters]);
  const uniqueLocations = reactExports.useMemo(() => {
    if (!targetModel) return [];
    const locations = activePrinters.filter((p) => p.model === targetModel && p.location).map((p) => p.location).filter((l) => Boolean(l));
    return [...new Set(locations)].sort();
  }, [activePrinters, targetModel]);
  const modelAssignmentAvailable = onAssignmentModeChange && onTargetModelChange && uniqueModels.length > 0;
  const showMappingOptions = allowMultiple && selectedPrinterIds.length > 1 && printerMappingResults && filamentReqs?.filaments && filamentReqs.filaments.length > 0 && onAutoConfigurePrinter && onUpdatePrinterConfig;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 text-bambu-green animate-spin" }) });
  }
  if (displayPrinters.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-red-400 text-sm mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4" }),
      "No ",
      showInactive ? "" : "active ",
      "printers available"
    ] });
  }
  const handlePrinterClick = (printerId) => {
    if (disableBusy && isPrinterBusy(printerId)) return;
    if (allowMultiple) {
      if (selectedPrinterIds.includes(printerId)) {
        onMultiSelect(selectedPrinterIds.filter((id) => id !== printerId));
      } else {
        onMultiSelect([...selectedPrinterIds, printerId]);
      }
    } else {
      onMultiSelect([printerId]);
    }
  };
  const handleSelectAll = () => {
    const selectable = disableBusy ? displayPrinters.filter((p) => !isPrinterBusy(p.id)) : displayPrinters;
    onMultiSelect(selectable.map((p) => p.id));
  };
  const handleDeselectAll = () => {
    onMultiSelect([]);
  };
  const handleOverrideToggle = (printerId, enabled, e) => {
    e.stopPropagation();
    if (!onAutoConfigurePrinter || !onUpdatePrinterConfig) return;
    if (enabled) {
      onAutoConfigurePrinter(printerId);
    } else {
      onUpdatePrinterConfig(printerId, {
        useDefault: true,
        manualMappings: {},
        autoConfigured: false
      });
    }
  };
  const isSelected = (printerId) => selectedPrinterIds.includes(printerId);
  const selectedCount = selectedPrinterIds.length;
  const getPrinterMappingResult = (printerId) => {
    return printerMappingResults?.find((r) => r.printerId === printerId);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-6", children: [
    modelAssignmentAvailable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            onAssignmentModeChange("printer");
            onTargetModelChange(null);
          },
          className: `flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors ${assignmentMode === "printer" ? "border-bambu-green bg-bambu-green/10 text-white" : "border-bambu-dark-tertiary bg-bambu-dark text-bambu-gray hover:border-bambu-gray"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Specific Printer" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            onAssignmentModeChange("model");
            onMultiSelect([]);
            const defaultModel = slicedForModel && uniqueModels.includes(slicedForModel) ? slicedForModel : uniqueModels[0];
            onTargetModelChange(defaultModel);
          },
          className: `flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors ${assignmentMode === "model" ? "border-bambu-green bg-bambu-green/10 text-white" : "border-bambu-dark-tertiary bg-bambu-dark text-bambu-gray hover:border-bambu-gray"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              "Any ",
              slicedForModel || "Model"
            ] })
          ]
        }
      )
    ] }),
    assignmentMode === "model" && modelAssignmentAvailable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
      !slicedForModel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-bambu-gray mb-1", children: "Target Model" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: targetModel || "",
            onChange: (e) => {
              onTargetModelChange(e.target.value || null);
              if (onTargetLocationChange) {
                onTargetLocationChange(null);
              }
            },
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a model..." }),
              uniqueModels.map((model) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: model, children: model }, model))
            ]
          }
        )
      ] }),
      targetModel && uniqueLocations.length > 0 && onTargetLocationChange && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-bambu-gray mb-1", children: "Location Filter (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: targetLocation || "",
            onChange: (e) => onTargetLocationChange(e.target.value || null),
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Any location" }),
              uniqueLocations.map((location) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: location, children: location }, location))
            ]
          }
        )
      ] }),
      targetModel && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
        "Scheduler will assign to first available idle ",
        targetModel,
        " printer",
        targetLocation ? ` in ${targetLocation}` : ""
      ] })
    ] }),
    assignmentMode === "printer" && allowMultiple && displayPrinters.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-bambu-gray mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedCount === 0 ? "Select printers" : `${selectedCount} printer${selectedCount !== 1 ? "s" : ""} selected` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        selectedCount < displayPrinters.length && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleSelectAll,
            className: "text-bambu-green hover:text-bambu-green/80 transition-colors",
            children: "Select all"
          }
        ),
        selectedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleDeselectAll,
            className: "text-bambu-gray hover:text-white transition-colors",
            children: "Clear"
          }
        )
      ] })
    ] }),
    assignmentMode === "printer" && displayPrinters.map((printer) => {
      const selected = isSelected(printer.id);
      const mappingResult = getPrinterMappingResult(printer.id);
      const hasOverride = mappingResult && !mappingResult.config.useDefault;
      const busy = isPrinterBusy(printer.id);
      const disabled = disableBusy && busy;
      const stateLabel = getPrinterStateLabel(printer.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => handlePrinterClick(printer.id),
            disabled,
            className: `w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${disabled ? "border-bambu-dark-tertiary bg-bambu-dark opacity-50 cursor-not-allowed" : selected ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary bg-bambu-dark hover:border-bambu-gray"} ${!printer.is_active ? "opacity-60" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `p-2 rounded-lg ${disabled ? "bg-bambu-dark-tertiary" : selected ? "bg-bambu-green/20" : "bg-bambu-dark-tertiary"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Printer,
                    {
                      className: `w-5 h-5 ${disabled ? "text-bambu-gray/50" : selected ? "text-bambu-green" : "text-bambu-gray"}`
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `font-medium ${disabled ? "text-bambu-gray" : "text-white"}`, children: [
                  printer.name,
                  !printer.is_active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray text-xs ml-2", children: "(inactive)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
                  printer.model || "Unknown model",
                  " • ",
                  printer.ip_address
                ] })
              ] }),
              stateLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full ${busy ? "bg-yellow-500/20 text-yellow-400" : "bg-bambu-green/20 text-bambu-green"}`, children: stateLabel }),
              allowMultiple && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${disabled ? "border-bambu-gray/30" : selected ? "bg-bambu-green border-bambu-green" : "border-bambu-gray/50"}`,
                  children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-white" })
                }
              )
            ]
          }
        ),
        selected && showMappingOptions && mappingResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-4 mt-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "flex items-center gap-2 cursor-pointer",
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: hasOverride,
                      onChange: (e) => handleOverrideToggle(printer.id, e.target.checked, e),
                      className: "w-3.5 h-3.5 rounded border-bambu-gray/30 bg-bambu-dark-secondary text-bambu-green focus:ring-bambu-green focus:ring-offset-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: "Custom mapping" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs ml-2 ${mappingResult.matchStatus === "full" ? "text-bambu-green" : mappingResult.matchStatus === "partial" ? "text-yellow-400" : "text-orange-400"}`, children: [
              "(",
              mappingResult.exactMatches,
              "/",
              mappingResult.totalSlots,
              " matched)"
            ] }),
            mappingResult.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3 text-bambu-gray animate-spin" }),
            hasOverride && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  onAutoConfigurePrinter(printer.id);
                },
                className: "ml-auto flex items-center gap-1 px-2 py-0.5 text-xs rounded border border-bambu-gray/30 hover:border-bambu-gray hover:bg-bambu-dark-tertiary transition-colors text-bambu-gray hover:text-white",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-3 h-3" }),
                  "Auto"
                ]
              }
            )
          ] }),
          hasOverride && /* @__PURE__ */ jsxRuntimeExports.jsx(
            InlineMappingEditor,
            {
              printerResult: mappingResult,
              filamentReqs: filamentReqs.filaments,
              onUpdateConfig: (config) => onUpdatePrinterConfig(printer.id, config)
            }
          )
        ] })
      ] }, printer.id);
    }),
    assignmentMode === "printer" && hiddenPrinterCount > 0 && !showAllPrinters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setShowAllPrinters(true),
        className: "text-xs text-bambu-gray hover:text-white transition-colors mt-2 flex items-center gap-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 text-yellow-400" }),
          hiddenPrinterCount,
          " other printer",
          hiddenPrinterCount > 1 ? "s" : "",
          " hidden (different model) —",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline", children: "show all" })
        ]
      }
    ),
    assignmentMode === "printer" && showAllPrinters && slicedForModel && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setShowAllPrinters(false),
        className: "text-xs text-bambu-gray hover:text-white transition-colors mt-2",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "underline", children: [
          "Show only ",
          slicedForModel,
          " printers"
        ] })
      }
    ),
    assignmentMode === "printer" && selectedCount === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-orange-400 mt-1 flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
      "Select at least one printer"
    ] }),
    assignmentMode === "model" && !targetModel && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-orange-400 mt-1 flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
      "Select a target printer model"
    ] })
  ] });
}
const PRINT_OPTIONS_CONFIG = [
  { key: "bed_levelling", label: "Bed Levelling", desc: "Auto-level bed before print" },
  { key: "flow_cali", label: "Flow Calibration", desc: "Calibrate extrusion flow" },
  { key: "vibration_cali", label: "Vibration Calibration", desc: "Reduce ringing artifacts" },
  { key: "layer_inspect", label: "First Layer Inspection", desc: "AI inspection of first layer" },
  { key: "timelapse", label: "Timelapse", desc: "Record timelapse video" }
];
function PrintOptionsPanel({
  options,
  onChange,
  defaultExpanded = false
}) {
  const [isExpanded, setIsExpanded] = reactExports.useState(defaultExpanded);
  const handleToggle = (key) => {
    onChange({ ...options, [key]: !options[key] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsExpanded(!isExpanded),
        className: "flex items-center gap-2 text-sm text-bambu-gray hover:text-white transition-colors w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Print Options" }),
          isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 ml-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 ml-auto" })
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 bg-bambu-dark rounded-lg p-3 space-y-2", children: PRINT_OPTIONS_CONFIG.map(({ key, label, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between cursor-pointer group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `relative w-10 h-5 rounded-full transition-colors ${options[key] ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
          onClick: () => handleToggle(key),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${options[key] ? "translate-x-5" : "translate-x-0.5"}`
            }
          )
        }
      )
    ] }, key)) })
  ] });
}
function ScheduleOptionsPanel({
  options,
  onChange,
  dateFormat = "system",
  timeFormat = "system",
  canControlPrinter = true
}) {
  const [dateValue, setDateValue] = reactExports.useState("");
  const [timeValue, setTimeValue] = reactExports.useState("");
  const [isDateValid, setIsDateValid] = reactExports.useState(true);
  const [isTimeValid, setIsTimeValid] = reactExports.useState(true);
  const hiddenInputRef = reactExports.useRef(null);
  const isInitializedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (options.scheduleType !== "scheduled") {
      isInitializedRef.current = false;
      return;
    }
    if (!isInitializedRef.current) {
      isInitializedRef.current = true;
      let date;
      if (options.scheduledTime) {
        date = new Date(options.scheduledTime);
        if (isNaN(date.getTime())) {
          date = /* @__PURE__ */ new Date();
          date.setHours(date.getHours() + 1, 0, 0, 0);
        }
      } else {
        date = /* @__PURE__ */ new Date();
        date.setHours(date.getHours() + 1, 0, 0, 0);
        onChange({ ...options, scheduledTime: toDateTimeLocalValue(date) });
      }
      setDateValue(formatDateInput(date, dateFormat));
      setTimeValue(formatTimeInput(date, timeFormat));
      setIsDateValid(true);
      setIsTimeValid(true);
    }
  }, [options.scheduleType, options.scheduledTime, dateFormat, timeFormat, onChange, options]);
  const handleScheduleTypeChange = (scheduleType) => {
    onChange({ ...options, scheduleType });
  };
  const updateScheduledTime = (newDateValue, newTimeValue) => {
    const parsedDate = parseDateInput(newDateValue, dateFormat);
    const parsedTime = parseTimeInput(newTimeValue);
    setIsDateValid(!!parsedDate);
    setIsTimeValid(!!parsedTime);
    if (parsedDate && parsedTime) {
      parsedDate.setHours(parsedTime.hours, parsedTime.minutes, 0, 0);
      const now = /* @__PURE__ */ new Date();
      if (parsedDate > now) {
        onChange({ ...options, scheduledTime: toDateTimeLocalValue(parsedDate) });
      }
    }
  };
  const handleDateChange = (value) => {
    setDateValue(value);
    updateScheduledTime(value, timeValue);
  };
  const handleTimeChange = (value) => {
    setTimeValue(value);
    updateScheduledTime(dateValue, value);
  };
  const handleCalendarChange = (e) => {
    const value = e.target.value;
    if (value) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        setDateValue(formatDateInput(date, dateFormat));
        setTimeValue(formatTimeInput(date, timeFormat));
        setIsDateValid(true);
        setIsTimeValid(true);
        onChange({ ...options, scheduledTime: value });
      }
    }
  };
  const openCalendar = () => {
    hiddenInputRef.current?.showPicker();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-2", children: "When to print" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `flex-1 px-2 py-2 rounded-lg border text-sm flex items-center justify-center gap-1.5 transition-colors ${options.scheduleType === "asap" ? "bg-bambu-green border-bambu-green text-white" : "bg-bambu-dark border-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
            onClick: () => handleScheduleTypeChange("asap"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
              "ASAP"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `flex-1 px-2 py-2 rounded-lg border text-sm flex items-center justify-center gap-1.5 transition-colors ${options.scheduleType === "scheduled" ? "bg-bambu-green border-bambu-green text-white" : "bg-bambu-dark border-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
            onClick: () => handleScheduleTypeChange("scheduled"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
              "Scheduled"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `flex-1 px-2 py-2 rounded-lg border text-sm flex items-center justify-center gap-1.5 transition-colors ${options.scheduleType === "manual" ? "bg-bambu-green border-bambu-green text-white" : "bg-bambu-dark border-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
            onClick: () => handleScheduleTypeChange("manual"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "w-4 h-4" }),
              "Queue Only"
            ]
          }
        )
      ] })
    ] }),
    options.scheduleType === "scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: "Date & Time" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: `w-full px-3 py-2 pr-10 bg-bambu-dark border rounded-lg text-white focus:outline-none ${isDateValid ? "border-bambu-dark-tertiary focus:border-bambu-green" : "border-red-500"}`,
              value: dateValue,
              onChange: (e) => handleDateChange(e.target.value),
              placeholder: getDatePlaceholder(dateFormat)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: openCalendar,
              className: "absolute right-2 top-1/2 -translate-y-1/2 text-bambu-gray hover:text-white",
              title: "Open calendar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: `w-full px-3 py-2 bg-bambu-dark border rounded-lg text-white focus:outline-none ${isTimeValid ? "border-bambu-dark-tertiary focus:border-bambu-green" : "border-red-500"}`,
            value: timeValue,
            onChange: (e) => handleTimeChange(e.target.value),
            placeholder: getTimePlaceholder(timeFormat)
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: hiddenInputRef,
          type: "datetime-local",
          className: "sr-only",
          value: options.scheduledTime,
          onChange: handleCalendarChange,
          tabIndex: -1
        }
      ),
      (!isDateValid || !isTimeValid) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-400", children: "Please enter a valid date and time" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          id: "requirePrevious",
          checked: options.requirePreviousSuccess,
          onChange: (e) => onChange({ ...options, requirePreviousSuccess: e.target.checked }),
          className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "requirePrevious", className: "text-sm text-bambu-gray", children: "Only start if previous print succeeded" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          id: "autoOffAfter",
          checked: options.autoOffAfter,
          onChange: (e) => onChange({ ...options, autoOffAfter: e.target.checked }),
          disabled: !canControlPrinter,
          className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "autoOffAfter", className: `text-sm flex items-center gap-1 ${canControlPrinter ? "text-bambu-gray" : "text-bambu-gray/50"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-3.5 h-3.5" }),
        "Power off printer when done"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: options.scheduleType === "asap" ? "Print will start as soon as the printer is idle." : options.scheduleType === "scheduled" ? "Print will start at the scheduled time if the printer is idle. If busy, it will wait until the printer becomes available." : "Print will be staged but won't start automatically. Use the Start button to release it to the queue." })
  ] });
}
const DEFAULT_PRINT_OPTIONS = {
  bed_levelling: true,
  flow_cali: false,
  vibration_cali: true,
  layer_inspect: false,
  timelapse: false
};
const DEFAULT_SCHEDULE_OPTIONS = {
  scheduleType: "asap",
  scheduledTime: "",
  requirePreviousSuccess: false,
  autoOffAfter: false
};
function PrintModal({
  mode,
  archiveId,
  libraryFileId,
  archiveName,
  queueItem,
  initialSelectedPrinterIds,
  onClose,
  onSuccess
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const isLibraryFile = !!libraryFileId && !archiveId;
  const [selectedPrinters, setSelectedPrinters] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem?.printer_id) {
      return [queueItem.printer_id];
    }
    if (initialSelectedPrinterIds?.length) {
      return initialSelectedPrinterIds;
    }
    return [];
  });
  const [selectedPlates, setSelectedPlates] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem?.plate_id != null) {
      return /* @__PURE__ */ new Set([queueItem.plate_id]);
    }
    return /* @__PURE__ */ new Set();
  });
  const selectedPlate = selectedPlates.size === 1 ? [...selectedPlates][0] : null;
  const [printOptions, setPrintOptions] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem) {
      return {
        bed_levelling: queueItem.bed_levelling ?? DEFAULT_PRINT_OPTIONS.bed_levelling,
        flow_cali: queueItem.flow_cali ?? DEFAULT_PRINT_OPTIONS.flow_cali,
        vibration_cali: queueItem.vibration_cali ?? DEFAULT_PRINT_OPTIONS.vibration_cali,
        layer_inspect: queueItem.layer_inspect ?? DEFAULT_PRINT_OPTIONS.layer_inspect,
        timelapse: queueItem.timelapse ?? DEFAULT_PRINT_OPTIONS.timelapse
      };
    }
    return DEFAULT_PRINT_OPTIONS;
  });
  const [scheduleOptions, setScheduleOptions] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem) {
      let scheduleType = "asap";
      if (queueItem.manual_start) {
        scheduleType = "manual";
      } else if (queueItem.scheduled_time && !isPlaceholderDate(queueItem.scheduled_time)) {
        scheduleType = "scheduled";
      }
      let scheduledTime = "";
      if (queueItem.scheduled_time && !isPlaceholderDate(queueItem.scheduled_time)) {
        const date = parseUTCDate(queueItem.scheduled_time) ?? /* @__PURE__ */ new Date();
        scheduledTime = toDateTimeLocalValue(date);
      }
      return {
        scheduleType,
        scheduledTime,
        requirePreviousSuccess: queueItem.require_previous_success,
        autoOffAfter: queueItem.auto_off_after
      };
    }
    return DEFAULT_SCHEDULE_OPTIONS;
  });
  const [manualMappings, setManualMappings] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem?.ams_mapping && Array.isArray(queueItem.ams_mapping)) {
      const mappings = {};
      queueItem.ams_mapping.forEach((globalTrayId, idx) => {
        if (globalTrayId !== -1) {
          mappings[idx + 1] = globalTrayId;
        }
      });
      return mappings;
    }
    return {};
  });
  const [perPrinterConfigs, setPerPrinterConfigs] = reactExports.useState({});
  const [assignmentMode, setAssignmentMode] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem?.target_model) {
      return "model";
    }
    return "printer";
  });
  const [targetModel, setTargetModel] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem?.target_model) {
      return queueItem.target_model;
    }
    return null;
  });
  const [targetLocation, setTargetLocation] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem?.target_location) {
      return queueItem.target_location;
    }
    return null;
  });
  const [filamentOverrides, setFilamentOverrides] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem?.filament_overrides) {
      const overrides = {};
      for (const o of queueItem.filament_overrides) {
        overrides[o.slot_id] = { type: o.type, color: o.color };
      }
      return overrides;
    }
    return {};
  });
  const [forceColorMatch, setForceColorMatch] = reactExports.useState(() => {
    if (mode === "edit-queue-item" && queueItem?.filament_overrides) {
      const flags = {};
      for (const o of queueItem.filament_overrides) {
        flags[o.slot_id] = o.force_color_match === true;
      }
      return flags;
    }
    return {};
  });
  const [initialPrinterIds] = reactExports.useState(() => mode === "edit-queue-item" && queueItem?.printer_id ? [queueItem.printer_id] : []);
  const [initialPlateId] = reactExports.useState(() => mode === "edit-queue-item" && queueItem ? queueItem.plate_id : null);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitProgress, setSubmitProgress] = reactExports.useState({ current: 0, total: 0 });
  const [filamentWarningItems, setFilamentWarningItems] = reactExports.useState(null);
  const [initialExpandApplied, setInitialExpandApplied] = reactExports.useState(/* @__PURE__ */ new Set());
  const effectivePrinterCount = selectedPrinters.length;
  const effectivePrinterId = selectedPrinters.length > 0 ? selectedPrinters[0] : null;
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const currencySymbol = getCurrencySymbol(settings?.currency || "USD");
  const defaultCostPerKg = settings?.default_filament_cost ?? 0;
  const { data: printers, isLoading: loadingPrinters } = useQuery({
    queryKey: ["printers"],
    queryFn: api.getPrinters
  });
  const { data: spoolAssignments } = useQuery({
    queryKey: ["spool-assignments"],
    queryFn: () => api.getAssignments(),
    staleTime: 30 * 1e3,
    enabled: (mode === "reprint" || mode === "add-to-queue") && assignmentMode === "printer" || isLibraryFile && mode === "reprint"
  });
  const { data: archiveDetails } = useQuery({
    queryKey: ["archive", archiveId],
    queryFn: () => api.getArchive(archiveId),
    enabled: !!archiveId && !isLibraryFile
  });
  const { data: libraryFileDetails } = useQuery({
    queryKey: ["library-file", libraryFileId],
    queryFn: () => api.getLibraryFile(libraryFileId),
    enabled: isLibraryFile && !!libraryFileId
  });
  const slicedForModel = archiveDetails?.sliced_for_model || libraryFileDetails?.sliced_for_model || null;
  const { data: archivePlatesData, isError: archivePlatesError } = useQuery({
    queryKey: ["archive-plates", archiveId],
    queryFn: () => api.getArchivePlates(archiveId),
    enabled: !!archiveId && !isLibraryFile,
    retry: false
  });
  const { data: libraryPlatesData } = useQuery({
    queryKey: ["library-file-plates", libraryFileId],
    queryFn: () => api.getLibraryFilePlates(libraryFileId),
    enabled: isLibraryFile && !!libraryFileId
  });
  const platesData = isLibraryFile ? libraryPlatesData : archivePlatesData;
  const { data: archiveFilamentReqs, isError: archiveFilamentReqsError } = useQuery({
    queryKey: ["archive-filaments", archiveId, selectedPlate],
    queryFn: () => api.getArchiveFilamentRequirements(archiveId, selectedPlate ?? void 0),
    enabled: !!archiveId && !isLibraryFile && (selectedPlate !== null || !platesData?.is_multi_plate),
    retry: false
  });
  const { data: libraryFilamentReqs } = useQuery({
    queryKey: ["library-file-filaments", libraryFileId, selectedPlate],
    queryFn: () => api.getLibraryFileFilamentRequirements(libraryFileId, selectedPlate ?? void 0),
    enabled: isLibraryFile && !!libraryFileId && (selectedPlate !== null || !platesData?.is_multi_plate)
  });
  const archiveDataMissing = !isLibraryFile && (archivePlatesError || archiveFilamentReqsError);
  const effectiveFilamentReqs = isLibraryFile ? libraryFilamentReqs : archiveFilamentReqs;
  const selectedPlateName = reactExports.useMemo(() => {
    if (selectedPlate === null || !platesData?.plates?.length) {
      return void 0;
    }
    return platesData.plates.find((plate) => plate.index === selectedPlate)?.name || void 0;
  }, [platesData, selectedPlate]);
  const { data: availableFilaments } = useQuery({
    queryKey: ["available-filaments", targetModel, targetLocation],
    queryFn: () => api.getAvailableFilaments(targetModel, targetLocation ?? void 0),
    enabled: assignmentMode === "model" && !!targetModel
  });
  const { data: printerStatus } = useQuery({
    queryKey: ["printer-status", effectivePrinterId],
    queryFn: () => api.getPrinterStatus(effectivePrinterId),
    enabled: !!effectivePrinterId
  });
  const { amsMapping } = useFilamentMapping(effectiveFilamentReqs, printerStatus, manualMappings);
  const multiPrinterMapping = useMultiPrinterFilamentMapping(
    selectedPrinters,
    printers,
    effectiveFilamentReqs,
    manualMappings,
    perPrinterConfigs,
    setPerPrinterConfigs
  );
  reactExports.useEffect(() => {
    if (platesData?.plates && platesData.plates.length >= 1 && selectedPlates.size === 0) {
      setSelectedPlates(/* @__PURE__ */ new Set([platesData.plates[0].index]));
    }
  }, [platesData, selectedPlates.size]);
  reactExports.useEffect(() => {
    if (mode === "edit-queue-item") return;
    const activePrinters = printers?.filter((p) => p.is_active) || [];
    if (activePrinters.length === 1 && selectedPrinters.length === 0) {
      setSelectedPrinters([activePrinters[0].id]);
    }
  }, [mode, printers, selectedPrinters.length]);
  reactExports.useEffect(() => {
    if (mode === "edit-queue-item") {
      const printersChanged = JSON.stringify(selectedPrinters.sort()) !== JSON.stringify(initialPrinterIds.sort());
      if (printersChanged || selectedPlate !== initialPlateId) {
        setManualMappings({});
        setPerPrinterConfigs({});
        setInitialExpandApplied(/* @__PURE__ */ new Set());
      }
    } else {
      setManualMappings({});
      setPerPrinterConfigs({});
      setInitialExpandApplied(/* @__PURE__ */ new Set());
    }
  }, [mode, selectedPrinters, selectedPlate, initialPrinterIds, initialPlateId]);
  const [prevTargetModel, setPrevTargetModel] = reactExports.useState(targetModel);
  const [prevPlateForOverrides, setPrevPlateForOverrides] = reactExports.useState(selectedPlate);
  reactExports.useEffect(() => {
    if (targetModel !== prevTargetModel || selectedPlate !== prevPlateForOverrides) {
      setPrevTargetModel(targetModel);
      setPrevPlateForOverrides(selectedPlate);
      if (mode !== "edit-queue-item" || prevTargetModel !== null) {
        setFilamentOverrides({});
        setForceColorMatch({});
      }
    }
  }, [targetModel, selectedPlate, prevTargetModel, prevPlateForOverrides, mode]);
  reactExports.useEffect(() => {
    if (!settings?.per_printer_mapping_expanded) return;
    if (selectedPrinters.length <= 1) return;
    const printersReadyForExpand = selectedPrinters.filter((printerId) => {
      if (initialExpandApplied.has(printerId)) return false;
      const result = multiPrinterMapping.printerResults.find((r) => r.printerId === printerId);
      return result && result.status && !result.isLoading;
    });
    if (printersReadyForExpand.length > 0) {
      setInitialExpandApplied((prev) => {
        const next = new Set(prev);
        printersReadyForExpand.forEach((id) => next.add(id));
        return next;
      });
      printersReadyForExpand.forEach((printerId) => {
        multiPrinterMapping.autoConfigurePrinter(printerId);
      });
    }
  }, [settings?.per_printer_mapping_expanded, selectedPrinters, initialExpandApplied, multiPrinterMapping]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !isSubmitting) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, isSubmitting]);
  const isMultiPlate = platesData?.is_multi_plate ?? false;
  const plates = platesData?.plates ?? [];
  const spoolAssignmentsByPrinter = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    if (!spoolAssignments) return map;
    spoolAssignments.forEach((assignment) => {
      const isExternal = assignment.ams_id === 255;
      const globalTrayId = getGlobalTrayId(
        assignment.ams_id,
        assignment.tray_id,
        isExternal
      );
      const printerMap = map.get(assignment.printer_id) ?? /* @__PURE__ */ new Map();
      printerMap.set(globalTrayId, assignment);
      map.set(assignment.printer_id, printerMap);
    });
    return map;
  }, [spoolAssignments]);
  const filamentWarningMessage = reactExports.useMemo(() => {
    if (!filamentWarningItems || filamentWarningItems.length === 0) return "";
    const lines = filamentWarningItems.map(
      (item) => t("printModal.insufficientFilamentLine", {
        printer: item.printerName,
        slot: item.slotLabel,
        required: Math.round(item.requiredGrams),
        remaining: Math.round(item.remainingGrams)
      })
    );
    return [t("printModal.insufficientFilamentMessage"), ...lines].join("\n");
  }, [filamentWarningItems, t]);
  const addToQueueMutation = useMutation({
    mutationFn: (data) => api.addToQueue(data)
  });
  const updateQueueMutation = useMutation({
    mutationFn: (data) => api.updateQueueItem(queueItem.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      showToast("Queue item updated");
      onSuccess?.();
      onClose();
    },
    onError: (error) => {
      showToast(error.message || "Failed to update queue item", "error");
    }
  });
  const handleSubmit = async (e, options) => {
    e?.preventDefault();
    if (!options?.skipFilamentCheck && !settings?.disable_filament_warnings && (mode === "reprint" || mode === "add-to-queue") && assignmentMode === "printer") {
      const warningItems = [];
      const filamentReqs = effectiveFilamentReqs?.filaments ?? [];
      if (filamentReqs.length > 0 && spoolAssignmentsByPrinter.size > 0) {
        const getRemainingWeight = (labelWeight, weightUsed) => {
          if (!Number.isFinite(labelWeight) || labelWeight <= 0) return null;
          if (!Number.isFinite(weightUsed) || weightUsed < 0) return null;
          return Math.max(0, labelWeight - weightUsed);
        };
        for (const printerId of selectedPrinters) {
          const printerMapping = selectedPrinters.length > 1 ? multiPrinterMapping.getFinalMapping(printerId) : amsMapping;
          if (!printerMapping) continue;
          const printerStatusForWarning = selectedPrinters.length > 1 ? multiPrinterMapping.printerResults.find((result) => result.printerId === printerId)?.status : printerStatus;
          const loadedFilaments = buildLoadedFilaments(printerStatusForWarning);
          const slotLabelByTray = new Map(loadedFilaments.map((f) => [f.globalTrayId, f.label]));
          const assignments = spoolAssignmentsByPrinter.get(printerId);
          const printerName = printers?.find((p) => p.id === printerId)?.name ?? `Printer ${printerId}`;
          if (!assignments) continue;
          filamentReqs.forEach((req) => {
            if (!req.slot_id || req.slot_id <= 0) return;
            const globalTrayId = printerMapping[req.slot_id - 1];
            if (!Number.isFinite(globalTrayId) || globalTrayId < 0) return;
            const assignment = assignments.get(globalTrayId);
            const spool = assignment?.spool;
            if (!spool) return;
            const remainingGrams = getRemainingWeight(spool.label_weight, spool.weight_used);
            if (remainingGrams === null) return;
            if (remainingGrams >= req.used_grams) return;
            warningItems.push({
              printerName,
              slotLabel: slotLabelByTray.get(globalTrayId) ?? `Slot ${req.slot_id}`,
              requiredGrams: req.used_grams,
              remainingGrams
            });
          });
        }
      }
      if (warningItems.length > 0) {
        setFilamentWarningItems(warningItems);
        return;
      }
    }
    if (assignmentMode === "printer" && selectedPrinters.length === 0) {
      showToast("Please select at least one printer", "error");
      return;
    }
    if (assignmentMode === "model" && !targetModel) {
      showToast("Please select a target printer model", "error");
      return;
    }
    setIsSubmitting(true);
    const platesToQueue = selectedPlates.size > 1 ? plates.filter((p) => selectedPlates.has(p.index)) : [null];
    const totalCount = assignmentMode === "model" ? platesToQueue.length : selectedPrinters.length * platesToQueue.length;
    setSubmitProgress({ current: 0, total: totalCount });
    const results = {
      success: 0,
      failed: 0,
      errors: []
    };
    const getMappingForPrinter = (printerId) => {
      if (selectedPrinters.length > 1) {
        const printerConfig = perPrinterConfigs[printerId];
        if (printerConfig && !printerConfig.useDefault) {
          return multiPrinterMapping.getFinalMapping(printerId);
        }
      }
      return amsMapping;
    };
    const buildFilamentOverridesArray = () => {
      const entries = [];
      if (effectiveFilamentReqs?.filaments) {
        for (const req of effectiveFilamentReqs.filaments) {
          const userOverride = filamentOverrides[req.slot_id];
          const isForceColor = forceColorMatch[req.slot_id] ?? false;
          const effectiveType = userOverride?.type ?? req.type;
          const effectiveColor = userOverride?.color ?? req.color;
          if (userOverride || isForceColor) {
            entries.push({ slot_id: req.slot_id, type: effectiveType, color: effectiveColor, color_name: getColorName(effectiveColor), force_color_match: isForceColor });
          }
        }
      } else {
        for (const [slotId, { type, color }] of Object.entries(filamentOverrides)) {
          const id = parseInt(slotId, 10);
          const isForceColor = forceColorMatch[id] ?? false;
          entries.push({ slot_id: id, type, color, color_name: getColorName(color), force_color_match: isForceColor });
        }
      }
      return entries.length > 0 ? entries : void 0;
    };
    const filamentOverridesArray = buildFilamentOverridesArray();
    const getQueueData = (printerId, plateOverride) => ({
      printer_id: assignmentMode === "printer" ? printerId : null,
      target_model: assignmentMode === "model" ? targetModel : null,
      target_location: assignmentMode === "model" ? targetLocation : null,
      filament_overrides: assignmentMode === "model" ? filamentOverridesArray : void 0,
      // Use library_file_id for library files, archive_id for archives
      archive_id: isLibraryFile ? void 0 : archiveId,
      library_file_id: isLibraryFile ? libraryFileId : void 0,
      require_previous_success: scheduleOptions.requirePreviousSuccess,
      auto_off_after: scheduleOptions.autoOffAfter,
      manual_start: scheduleOptions.scheduleType === "manual",
      ams_mapping: printerId ? getMappingForPrinter(printerId) : void 0,
      plate_id: plateOverride !== void 0 ? plateOverride : selectedPlate,
      scheduled_time: scheduleOptions.scheduleType === "scheduled" && scheduleOptions.scheduledTime ? new Date(scheduleOptions.scheduledTime).toISOString() : void 0,
      ...printOptions
    });
    if (assignmentMode === "model") {
      if (mode === "reprint") {
        showToast("Model-based assignment only works with queue mode", "error");
        setIsSubmitting(false);
        return;
      }
      let progressCounter = 0;
      for (const plate of platesToQueue) {
        progressCounter++;
        setSubmitProgress({ current: progressCounter, total: totalCount });
        const plateId = plate ? plate.index : selectedPlate;
        try {
          if (mode === "edit-queue-item" && !plate) {
            const updateData = {
              printer_id: null,
              target_model: targetModel,
              target_location: targetLocation,
              filament_overrides: filamentOverridesArray || null,
              require_previous_success: scheduleOptions.requirePreviousSuccess,
              auto_off_after: scheduleOptions.autoOffAfter,
              manual_start: scheduleOptions.scheduleType === "manual",
              ams_mapping: void 0,
              plate_id: plateId,
              scheduled_time: scheduleOptions.scheduleType === "scheduled" && scheduleOptions.scheduledTime ? new Date(scheduleOptions.scheduledTime).toISOString() : null,
              ...printOptions
            };
            await updateQueueMutation.mutateAsync(updateData);
          } else {
            await addToQueueMutation.mutateAsync(getQueueData(null, plateId));
          }
          results.success++;
        } catch (error) {
          results.failed++;
          const plateName = plate ? plate.name || `Plate ${plate.index}` : "";
          results.errors.push(plateName ? `${plateName}: ${error.message}` : error.message);
        }
      }
    } else {
      let progressCounter = 0;
      for (const plate of platesToQueue) {
        const plateId = plate ? plate.index : selectedPlate;
        for (let i = 0; i < selectedPrinters.length; i++) {
          const printerId = selectedPrinters[i];
          progressCounter++;
          setSubmitProgress({ current: progressCounter, total: totalCount });
          try {
            if (mode === "reprint") {
              const printerMapping = getMappingForPrinter(printerId);
              if (isLibraryFile) {
                await api.printLibraryFile(libraryFileId, printerId, {
                  plate_id: selectedPlate ?? void 0,
                  plate_name: selectedPlateName,
                  ams_mapping: printerMapping,
                  ...printOptions
                });
              } else {
                await api.reprintArchive(archiveId, printerId, {
                  plate_id: selectedPlate ?? void 0,
                  plate_name: selectedPlateName,
                  ams_mapping: printerMapping,
                  ...printOptions
                });
              }
            } else if (mode === "edit-queue-item" && progressCounter === 1) {
              const printerMapping = getMappingForPrinter(printerId);
              const updateData = {
                printer_id: printerId,
                target_model: null,
                target_location: null,
                require_previous_success: scheduleOptions.requirePreviousSuccess,
                auto_off_after: scheduleOptions.autoOffAfter,
                manual_start: scheduleOptions.scheduleType === "manual",
                ams_mapping: printerMapping,
                plate_id: plateId,
                scheduled_time: scheduleOptions.scheduleType === "scheduled" && scheduleOptions.scheduledTime ? new Date(scheduleOptions.scheduledTime).toISOString() : null,
                ...printOptions
              };
              await updateQueueMutation.mutateAsync(updateData);
            } else {
              await addToQueueMutation.mutateAsync(getQueueData(printerId, plateId));
            }
            results.success++;
          } catch (error) {
            results.failed++;
            const printerName = printers?.find((p) => p.id === printerId)?.name || `Printer ${printerId}`;
            const plateName = plate ? plate.name || `Plate ${plate.index}` : "";
            const label = plateName ? `${printerName} (${plateName})` : printerName;
            results.errors.push(`${label}: ${error.message}`);
          }
        }
      }
    }
    setIsSubmitting(false);
    if (results.failed === 0) {
      if (mode !== "reprint") {
        if (mode === "edit-queue-item") {
          showToast("Queue item updated");
        } else if (results.success === 1) {
          showToast(assignmentMode === "model" ? `Queued for any ${targetModel}` : t("queue.printQueued"));
        } else {
          showToast(t("queue.itemsQueued", { count: results.success }));
        }
      }
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      onSuccess?.();
      onClose();
    } else if (results.success === 0) {
      showToast(`Failed: ${results.errors[0]}`, "error");
    } else {
      showToast(`${results.success} succeeded, ${results.failed} failed`, "error");
      queryClient.invalidateQueries({ queryKey: ["queue"] });
    }
  };
  const isPending = isSubmitting || updateQueueMutation.isPending;
  const canSubmit = reactExports.useMemo(() => {
    if (isPending) return false;
    if (assignmentMode === "printer" && selectedPrinters.length === 0) return false;
    if (assignmentMode === "model" && !targetModel) return false;
    if (assignmentMode === "model" && mode === "reprint") return false;
    if (isMultiPlate && selectedPlates.size === 0) return false;
    return true;
  }, [selectedPrinters.length, assignmentMode, targetModel, mode, isMultiPlate, selectedPlates.size, isPending]);
  const getModalConfig = () => {
    const printerCount = selectedPrinters.length;
    if (mode === "reprint") {
      return {
        title: isLibraryFile ? t("queue.print") : t("queue.reprint"),
        icon: Printer,
        submitText: printerCount > 1 ? t("queue.printToPrinters", { count: printerCount }) : t("queue.print"),
        submitIcon: Printer,
        loadingText: submitProgress.total > 1 ? t("queue.sendingProgress", { current: submitProgress.current, total: submitProgress.total }) : t("queue.sending")
      };
    }
    if (mode === "add-to-queue") {
      let submitText = t("queue.addToQueue");
      if (selectedPlates.size > 1) {
        submitText = t("queue.queueSelectedPlates", { count: selectedPlates.size });
      } else if (printerCount > 1) {
        submitText = t("queue.queueToPrinters", { count: printerCount });
      }
      return {
        title: t("queue.schedulePrint"),
        icon: Calendar,
        submitText,
        submitIcon: Calendar,
        loadingText: submitProgress.total > 1 ? t("queue.addingProgress", { current: submitProgress.current, total: submitProgress.total }) : t("queue.adding")
      };
    }
    return {
      title: t("queue.editQueueItem"),
      icon: Pencil,
      submitText: t("common.save"),
      submitIcon: Pencil,
      loadingText: submitProgress.total > 1 ? t("queue.savingProgress", { current: submitProgress.current, total: submitProgress.total }) : t("common.saving")
    };
  };
  const modalConfig = getModalConfig();
  const TitleIcon = modalConfig.icon;
  const SubmitIcon = modalConfig.submitIcon;
  const showFilamentMapping = effectivePrinterId && selectedPlates.size <= 1 && (isLibraryFile || (isMultiPlate ? selectedPlate !== null : true));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
      onClick: isSubmitting ? void 0 : onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "w-full max-w-2xl max-h-[90vh] overflow-y-auto",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: mode === "reprint" ? "" : "p-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center justify-between ${mode === "reprint" ? "mb-4" : "p-4 border-b border-bambu-dark-tertiary"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TitleIcon, { className: "w-5 h-5 text-bambu-green" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: modalConfig.title })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, disabled: isSubmitting, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: mode === "reprint" ? "" : "p-4 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm text-bambu-gray ${mode === "reprint" ? "mb-4" : ""}`, children: mode === "reprint" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "Send ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: archiveName }),
                  " to",
                  " ",
                  initialSelectedPrinterIds?.length === 1 && printers ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: printers.find((p) => p.id === initialSelectedPrinterIds[0])?.name ?? "printer(s)" }) : "printer(s)"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-bambu-gray mb-1", children: "Print Job" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium truncate block", children: archiveName })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PlateSelector,
                  {
                    plates,
                    isMultiPlate,
                    selectedPlates,
                    onToggle: (plateIndex) => {
                      setSelectedPlates((prev) => {
                        const next = new Set(prev);
                        if (mode === "add-to-queue") {
                          if (next.has(plateIndex)) {
                            next.delete(plateIndex);
                          } else {
                            next.add(plateIndex);
                          }
                        } else {
                          next.clear();
                          next.add(plateIndex);
                        }
                        return next;
                      });
                    },
                    onSelectAll: mode === "add-to-queue" ? () => setSelectedPlates(new Set(plates.map((p) => p.index))) : void 0,
                    onDeselectAll: mode === "add-to-queue" ? () => setSelectedPlates(/* @__PURE__ */ new Set()) : void 0,
                    multiSelect: mode === "add-to-queue"
                  }
                ),
                !initialSelectedPrinterIds?.length && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PrinterSelector,
                  {
                    printers: printers || [],
                    selectedPrinterIds: selectedPrinters,
                    onMultiSelect: setSelectedPrinters,
                    isLoading: loadingPrinters,
                    allowMultiple: true,
                    showInactive: mode === "edit-queue-item",
                    disableBusy: mode === "reprint",
                    printerMappingResults: multiPrinterMapping.printerResults,
                    filamentReqs: effectiveFilamentReqs,
                    onAutoConfigurePrinter: multiPrinterMapping.autoConfigurePrinter,
                    onUpdatePrinterConfig: multiPrinterMapping.updatePrinterConfig,
                    assignmentMode: mode === "reprint" ? "printer" : assignmentMode,
                    onAssignmentModeChange: mode !== "reprint" ? setAssignmentMode : void 0,
                    targetModel,
                    onTargetModelChange: mode !== "reprint" ? setTargetModel : void 0,
                    targetLocation,
                    onTargetLocationChange: mode !== "reprint" ? setTargetLocation : void 0,
                    slicedForModel
                  }
                ),
                assignmentMode === "model" && targetModel && effectiveFilamentReqs && availableFilaments && availableFilaments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FilamentOverride,
                  {
                    filamentReqs: effectiveFilamentReqs,
                    availableFilaments,
                    overrides: filamentOverrides,
                    onChange: setFilamentOverrides,
                    forceColorMatch,
                    onForceColorMatchChange: (slotId, value) => setForceColorMatch((prev) => ({ ...prev, [slotId]: value }))
                  }
                ),
                slicedForModel && assignmentMode === "printer" && selectedPrinters.length === 1 && (() => {
                  const selectedPrinter = printers?.find((p) => p.id === selectedPrinters[0]);
                  if (selectedPrinter && selectedPrinter.model && slicedForModel !== selectedPrinter.model) {
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 mb-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-yellow-400 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-yellow-400", children: [
                        "File was sliced for ",
                        slicedForModel,
                        ", but printing on ",
                        selectedPrinter.model
                      ] })
                    ] });
                  }
                  return null;
                })(),
                archiveDataMissing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-3 mb-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-400", children: "Archive data unavailable. The source file may have been deleted. Filament mapping is disabled." })
                ] }),
                showFilamentMapping && !archiveDataMissing && selectedPrinters.length === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FilamentMapping,
                  {
                    printerId: effectivePrinterId,
                    filamentReqs: effectiveFilamentReqs,
                    manualMappings,
                    onManualMappingChange: setManualMappings,
                    defaultExpanded: !!initialSelectedPrinterIds?.length || (settings?.per_printer_mapping_expanded ?? false),
                    currencySymbol,
                    defaultCostPerKg
                  }
                ),
                (mode === "reprint" || effectivePrinterCount > 0 || assignmentMode === "model" && targetModel) && /* @__PURE__ */ jsxRuntimeExports.jsx(PrintOptionsPanel, { options: printOptions, onChange: setPrintOptions, defaultExpanded: !!initialSelectedPrinterIds?.length }),
                mode !== "reprint" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ScheduleOptionsPanel,
                  {
                    options: scheduleOptions,
                    onChange: setScheduleOptions,
                    dateFormat: settings?.date_format || "system",
                    timeFormat: settings?.time_format || "system",
                    canControlPrinter: hasPermission("printers:control")
                  }
                ),
                updateQueueMutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-sm text-red-400", children: updateQueueMutation.error?.message || "Failed to complete operation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-3 ${mode === "reprint" ? "" : "pt-2"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, className: "flex-1", disabled: isSubmitting, children: "Cancel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      disabled: !canSubmit,
                      className: "flex-1",
                      children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                        modalConfig.loadingText
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SubmitIcon, { className: "w-4 h-4" }),
                        modalConfig.submitText
                      ] })
                    }
                  )
                ] })
              ] })
            ] })
          }
        ),
        filamentWarningItems && filamentWarningItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ConfirmModal,
          {
            title: t("printModal.insufficientFilamentTitle"),
            message: filamentWarningMessage,
            confirmText: t("printModal.printAnyway"),
            cancelText: t("common.cancel"),
            variant: "warning",
            onConfirm: () => {
              setFilamentWarningItems(null);
              void handleSubmit(void 0, { skipFilamentCheck: true });
            },
            onCancel: () => setFilamentWarningItems(null)
          }
        )
      ]
    }
  );
}
export {
  Hand as H,
  PrintModal as P
};
