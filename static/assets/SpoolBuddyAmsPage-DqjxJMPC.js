import { b0 as useOutletContext, u as useTranslation, b as useQueryClient, a as useToast, d as useQuery, r as reactExports, e as useMutation, j as jsxRuntimeExports, O as Layers, X, f as api } from "./index-By7NB6Yd.js";
import { g as getFallbackSpoolTag, a as getSpoolmanFillLevel, c as getGlobalTrayId, f as formatSlotLabel, b as getFillBarColor } from "./amsHelpers-DxzYuS95.js";
import { A as AmsUnitCard, N as NozzleBadge, T as TemperatureIndicator, H as HumidityIndicator } from "./AmsUnitCard-CKWbYpdE.js";
import { C as ConfigureAmsSlotModal, A as AssignSpoolModal, L as LinkSpoolModal } from "./ConfigureAmsSlotModal-Bt6zk7u5.js";
import { S as Settings2 } from "./settings-2-D5pvtvi2.js";
import { U as Unlink } from "./unlink-pfEIdfQ3.js";
import { P as Package } from "./package-C_EJMjbO.js";
import { L as Link2 } from "./link-2-Cux3y_Sw.js";
import "./search-RLowFFFz.js";
import "./circle-check-CXINnHIF.js";
import "./rotate-ccw-DINMEq3g.js";
function getAmsName(amsId) {
  if (amsId <= 3) return `AMS ${String.fromCharCode(65 + amsId)}`;
  if (amsId >= 128 && amsId <= 135) return `AMS HT ${String.fromCharCode(65 + amsId - 128)}`;
  return `AMS ${amsId}`;
}
function mapModelCode(ssdpModel) {
  if (!ssdpModel) return "";
  const modelMap = {
    "O1D": "H2D",
    "O1E": "H2D Pro",
    "O2D": "H2D Pro",
    "O1C": "H2C",
    "O1C2": "H2C",
    "O1S": "H2S",
    "BL-P001": "X1C",
    "BL-P002": "X1",
    "BL-P003": "X1E",
    "C11": "P1S",
    "C12": "P1P",
    "C13": "P2S",
    "N2S": "A1",
    "N1": "A1 Mini",
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
function isTrayEmpty(tray) {
  return !tray.tray_type || tray.tray_type === "";
}
function trayColorToCSS(color) {
  if (!color) return "#808080";
  return `#${color.slice(0, 6)}`;
}
function SpoolBuddyAmsPage() {
  const { selectedPrinterId, setAlert } = useOutletContext();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { data: status } = useQuery({
    queryKey: ["printerStatus", selectedPrinterId],
    queryFn: () => api.getPrinterStatus(selectedPrinterId),
    enabled: selectedPrinterId !== null,
    staleTime: 30 * 1e3
  });
  const { data: printer } = useQuery({
    queryKey: ["printer", selectedPrinterId],
    queryFn: () => api.getPrinter(selectedPrinterId),
    enabled: selectedPrinterId !== null,
    staleTime: 60 * 1e3
  });
  const { data: slotPresets } = useQuery({
    queryKey: ["slotPresets", selectedPrinterId],
    queryFn: () => api.getSlotPresets(selectedPrinterId),
    enabled: selectedPrinterId !== null,
    staleTime: 2 * 60 * 1e3
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: () => api.getSettings(),
    staleTime: 5 * 60 * 1e3
  });
  const { data: spoolmanStatus } = useQuery({
    queryKey: ["spoolman-status"],
    queryFn: api.getSpoolmanStatus,
    staleTime: 60 * 1e3
  });
  const spoolmanEnabled = spoolmanStatus?.enabled && spoolmanStatus?.connected;
  const { data: linkedSpoolsData } = useQuery({
    queryKey: ["linked-spools"],
    queryFn: api.getLinkedSpools,
    enabled: !!spoolmanEnabled,
    staleTime: 30 * 1e3
  });
  const linkedSpools = linkedSpoolsData?.linked;
  const { data: assignments } = useQuery({
    queryKey: ["spool-assignments", selectedPrinterId],
    queryFn: () => api.getAssignments(selectedPrinterId),
    enabled: selectedPrinterId !== null,
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
  const printerSerial = printer?.serial_number ?? "";
  const getSpoolmanFillForSlot = reactExports.useCallback((amsId, trayId, tray) => {
    if (!linkedSpools || !printerSerial) return null;
    const tag = (tray?.tray_uuid || tray?.tag_uid || getFallbackSpoolTag(printerSerial, amsId, trayId))?.toUpperCase();
    const linkedSpool = tag ? linkedSpools[tag] : void 0;
    return getSpoolmanFillLevel(linkedSpool);
  }, [linkedSpools, printerSerial]);
  const isConnected = status?.connected ?? false;
  const cachedAmsData = reactExports.useRef([]);
  reactExports.useEffect(() => {
    if (status?.ams && status.ams.length > 0) {
      cachedAmsData.current = status.ams;
    }
  }, [status?.ams]);
  const amsUnits = reactExports.useMemo(() => {
    const live = status?.ams;
    return live && live.length > 0 ? live : cachedAmsData.current ?? [];
  }, [status?.ams]);
  const regularAms = reactExports.useMemo(() => amsUnits.filter((u) => !u.is_ams_ht), [amsUnits]);
  const htAms = reactExports.useMemo(() => amsUnits.filter((u) => u.is_ams_ht), [amsUnits]);
  const spoolmanFillOverrides = reactExports.useMemo(() => {
    const map = {};
    if (!linkedSpools || !printerSerial) return map;
    for (const unit of regularAms) {
      for (let i = 0; i < (unit.tray?.length ?? 0); i++) {
        const tray = unit.tray[i];
        const fill = getSpoolmanFillForSlot(unit.id, i, isTrayEmpty(tray) ? null : tray);
        if (fill !== null) map[`${unit.id}-${i}`] = fill;
      }
    }
    return map;
  }, [linkedSpools, printerSerial, regularAms, getSpoolmanFillForSlot]);
  const cachedTrayNow = reactExports.useRef(void 0);
  const currentTrayNow = status?.tray_now;
  if (currentTrayNow !== void 0 && currentTrayNow !== 255) {
    cachedTrayNow.current = currentTrayNow;
  } else if (currentTrayNow === 255) {
    cachedTrayNow.current = void 0;
  }
  const effectiveTrayNow = currentTrayNow !== void 0 && currentTrayNow !== 255 ? currentTrayNow : cachedTrayNow.current;
  const isDualNozzle = printer?.nozzle_count === 2 || status?.temperatures?.nozzle_2 !== void 0;
  const vtTrays = reactExports.useMemo(() => [...status?.vt_tray ?? []].sort((a, b) => (a.id ?? 254) - (b.id ?? 254)), [status?.vt_tray]);
  const amsThresholds = settings ? {
    humidityGood: Number(settings.ams_humidity_good) || 40,
    humidityFair: Number(settings.ams_humidity_fair) || 60,
    tempGood: Number(settings.ams_temp_good) || 28,
    tempFair: Number(settings.ams_temp_fair) || 35
  } : void 0;
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
  const [configureSlotModal, setConfigureSlotModal] = reactExports.useState(null);
  const [slotActionPicker, setSlotActionPicker] = reactExports.useState(null);
  const [assignSpoolModal, setAssignSpoolModal] = reactExports.useState(null);
  const [linkSpoolModal, setLinkSpoolModal] = reactExports.useState(null);
  const getAssignment = reactExports.useCallback((amsId, trayId) => {
    return assignments?.find((a) => a.ams_id === Number(amsId) && a.tray_id === Number(trayId));
  }, [assignments]);
  const getLinkedSpool = reactExports.useCallback((amsId, trayId, tray) => {
    if (!linkedSpools || !printerSerial) return void 0;
    const tag = (tray?.tray_uuid || tray?.tag_uid || getFallbackSpoolTag(printerSerial, amsId, trayId))?.toUpperCase();
    return tag ? linkedSpools[tag] : void 0;
  }, [linkedSpools, printerSerial]);
  const unassignMutation = useMutation({
    mutationFn: ({ printerId, amsId, trayId }) => api.unassignSpool(printerId, amsId, trayId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spool-assignments", selectedPrinterId] });
      showToast(t("inventory.unassignSuccess", "Spool unassigned"), "success");
      setSlotActionPicker(null);
    }
  });
  const unlinkSpoolMutation = useMutation({
    mutationFn: (spoolId) => api.unlinkSpool(spoolId),
    onSuccess: (result) => {
      showToast(t("spoolman.unlinkSuccess") || result?.message, "success");
      queryClient.invalidateQueries({ queryKey: ["linked-spools"] });
      queryClient.invalidateQueries({ queryKey: ["unlinked-spools"] });
      setSlotActionPicker(null);
    },
    onError: (error) => {
      showToast(error.message || t("spoolman.unlinkFailed"), "error");
    }
  });
  const getActiveSlotForAms = reactExports.useCallback((amsId) => {
    if (effectiveTrayNow === void 0) return null;
    if (amsId <= 3) {
      const activeAmsId = Math.floor(effectiveTrayNow / 4);
      if (activeAmsId === amsId) return effectiveTrayNow % 4;
    }
    if (amsId >= 128 && amsId <= 135) {
      if (effectiveTrayNow === getGlobalTrayId(amsId, 0, false)) return 0;
    }
    return null;
  }, [effectiveTrayNow]);
  const handleAmsSlotClick = reactExports.useCallback((amsId, trayId, tray) => {
    const globalTrayId = amsId >= 128 ? (amsId - 128) * 4 + trayId + 64 : amsId * 4 + trayId;
    const slotPreset = slotPresets?.[globalTrayId];
    const mappedExtruderId = amsExtruderMap[String(amsId)];
    const normalizedId = amsId >= 128 ? amsId - 128 : amsId;
    const extruderId = mappedExtruderId !== void 0 ? mappedExtruderId : normalizedId;
    const slotData = {
      amsId,
      trayId,
      trayCount: tray ? amsId >= 128 ? 1 : 4 : 4,
      tray,
      trayType: tray?.tray_type || void 0,
      trayColor: tray?.tray_color || void 0,
      traySubBrands: tray?.tray_sub_brands || void 0,
      trayInfoIdx: tray?.tray_info_idx || void 0,
      extruderId: isDualNozzle ? extruderId : void 0,
      caliIdx: tray?.cali_idx,
      savedPresetId: slotPreset?.preset_id,
      location: `${getAmsName(amsId)} Slot ${trayId + 1}`
    };
    setSlotActionPicker(slotData);
  }, [slotPresets, amsExtruderMap, isDualNozzle]);
  const handleExtSlotClick = reactExports.useCallback((extTray) => {
    const extTrayId = extTray.id ?? 254;
    const slotTrayId = extTrayId - 254;
    const extSlotPreset = slotPresets?.[255 * 4 + slotTrayId];
    const slotData = {
      amsId: 255,
      trayId: slotTrayId,
      trayCount: 1,
      tray: isTrayEmpty(extTray) ? null : extTray,
      trayType: extTray.tray_type || void 0,
      trayColor: extTray.tray_color || void 0,
      traySubBrands: extTray.tray_sub_brands || void 0,
      trayInfoIdx: extTray.tray_info_idx || void 0,
      extruderId: isDualNozzle ? extTrayId === 254 ? 1 : 0 : void 0,
      caliIdx: extTray.cali_idx,
      savedPresetId: extSlotPreset?.preset_id,
      location: isDualNozzle ? extTrayId === 254 ? "Ext-L" : "Ext-R" : "External"
    };
    setSlotActionPicker(slotData);
  }, [slotPresets, isDualNozzle]);
  const openConfigureFromPicker = reactExports.useCallback(() => {
    if (!slotActionPicker) return;
    const { tray, location, ...configData } = slotActionPicker;
    setSlotActionPicker(null);
    setConfigureSlotModal(configData);
  }, [slotActionPicker]);
  const openAssignFromPicker = reactExports.useCallback(() => {
    if (!slotActionPicker || !selectedPrinterId) return;
    const { amsId, trayId, trayType, trayColor, location } = slotActionPicker;
    setSlotActionPicker(null);
    setAssignSpoolModal({
      printerId: selectedPrinterId,
      amsId,
      trayId,
      trayInfo: {
        type: trayType || "",
        material: trayType,
        color: trayColor?.slice(0, 6) || "",
        location
      }
    });
  }, [slotActionPicker, selectedPrinterId]);
  const openLinkFromPicker = reactExports.useCallback(() => {
    if (!slotActionPicker || !selectedPrinterId) return;
    const { amsId, trayId, tray } = slotActionPicker;
    const linkTag = (tray?.tray_uuid || tray?.tag_uid || getFallbackSpoolTag(printerSerial, amsId, trayId))?.toUpperCase() || "";
    setSlotActionPicker(null);
    setLinkSpoolModal({
      tagUid: tray?.tag_uid || linkTag,
      trayUuid: tray?.tray_uuid || "",
      printerId: selectedPrinterId,
      amsId,
      trayId
    });
  }, [slotActionPicker, selectedPrinterId, printerSerial]);
  const handleUnassignFromPicker = reactExports.useCallback(() => {
    if (!slotActionPicker || !selectedPrinterId) return;
    const { amsId, trayId } = slotActionPicker;
    unassignMutation.mutate({ printerId: selectedPrinterId, amsId, trayId });
  }, [slotActionPicker, selectedPrinterId, unassignMutation]);
  reactExports.useEffect(() => {
    if (!isConnected && selectedPrinterId) {
      setAlert({ type: "warning", message: t("spoolbuddy.ams.printerDisconnected", "Printer disconnected") });
      return;
    }
    for (const unit of amsUnits) {
      const trays = unit.tray || [];
      for (let i = 0; i < trays.length; i++) {
        const tray = trays[i];
        if (tray.remain !== null && tray.remain >= 0 && tray.remain < 15 && tray.tray_type) {
          const isExternal = unit.id === 254 || unit.id === 255;
          const isHt = !isExternal && unit.id >= 128;
          const slot = formatSlotLabel(unit.id, i, isHt, isExternal);
          setAlert({
            type: "warning",
            message: `Low Filament: ${tray.tray_type} (${slot}) - ${tray.remain}% remaining`
          });
          return;
        }
      }
    }
    setAlert(null);
  }, [amsUnits, isConnected, selectedPrinterId, setAlert, t]);
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
      const spoolmanFill = getSpoolmanFillForSlot(unit.id, 0, isTrayEmpty(tray) ? null : tray);
      const invFill = fillOverrides[`${unit.id}-0`] ?? null;
      const amsFill = tray.remain != null && tray.remain >= 0 ? tray.remain : null;
      const resolvedInvFill = invFill === 0 && amsFill !== null && amsFill > 0 ? null : invFill;
      items.push({
        key: `ht-${unit.id}`,
        label: getAmsName(unit.id),
        tray,
        isEmpty: isTrayEmpty(tray),
        isActive: getActiveSlotForAms(unit.id) === 0,
        temp: unit.temp,
        humidity: unit.humidity,
        nozzleSide: getNozzleSide(unit.id),
        effectiveFill: spoolmanFill ?? resolvedInvFill ?? amsFill,
        onClick: () => handleAmsSlotClick(unit.id, 0, isTrayEmpty(tray) ? null : tray)
      });
    }
    for (const extTray of vtTrays) {
      const extTrayId = extTray.id ?? 254;
      const isExtActive = isDualNozzle && effectiveTrayNow === 254 ? extTrayId === 254 && status?.active_extruder === 1 || extTrayId === 255 && status?.active_extruder === 0 : effectiveTrayNow === extTrayId;
      const extSlotTrayId = extTrayId - 254;
      const extSpoolmanFill = getSpoolmanFillForSlot(255, extSlotTrayId, isTrayEmpty(extTray) ? null : extTray);
      const extInvFill = fillOverrides[`255-${extSlotTrayId}`] ?? null;
      const extAmsFill = extTray.remain != null && extTray.remain >= 0 ? extTray.remain : null;
      const extResolvedInvFill = extInvFill === 0 && extAmsFill !== null && extAmsFill > 0 ? null : extInvFill;
      items.push({
        key: `ext-${extTrayId}`,
        label: isDualNozzle ? extTrayId === 254 ? t("printers.extL", "Ext-L") : t("printers.extR", "Ext-R") : t("printers.ext", "Ext"),
        tray: extTray,
        isEmpty: isTrayEmpty(extTray),
        isActive: isExtActive,
        nozzleSide: null,
        effectiveFill: extSpoolmanFill ?? extResolvedInvFill ?? extAmsFill,
        onClick: () => handleExtSlotClick(extTray)
      });
    }
    return items;
  }, [htAms, vtTrays, isDualNozzle, effectiveTrayNow, status?.active_extruder, t, getActiveSlotForAms, getNozzleSide, handleAmsSlotClick, handleExtSlotClick, fillOverrides, getSpoolmanFillForSlot]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0", children: !selectedPrinterId ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-2", children: t("spoolbuddy.ams.noPrinter", "No printer selected") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("spoolbuddy.ams.selectPrinter", "Select a printer from the top bar") })
    ] }) }) : !isConnected ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-2", children: t("spoolbuddy.ams.printerDisconnected", "Printer disconnected") }) }) }) : amsUnits.length === 0 && vtTrays.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-12 h-12 mx-auto mb-3 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-2", children: t("spoolbuddy.ams.noData", "No AMS detected") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("spoolbuddy.ams.connectAms", "Connect an AMS to see filament slots") })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: regularAms.map((unit) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        AmsUnitCard,
        {
          unit,
          activeSlot: getActiveSlotForAms(unit.id),
          onConfigureSlot: handleAmsSlotClick,
          isDualNozzle,
          nozzleSide: getNozzleSide(unit.id),
          thresholds: amsThresholds,
          fillOverrides,
          spoolmanFillOverrides
        },
        unit.id
      )) }),
      singleSlots.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: singleSlots.map(({ key, label, tray, isEmpty, isActive, temp, humidity, nozzleSide, effectiveFill, onClick }) => {
        const color = trayColorToCSS(tray.tray_color);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-bambu-dark-secondary rounded-lg px-3 py-2 cursor-pointer hover:bg-bambu-dark-secondary/80 transition-all flex items-center gap-3 ${isActive ? "ring-2 ring-bambu-green" : ""}`,
            onClick,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-10 h-10 flex-shrink-0", children: [
                isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-gray-600" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 56 56", className: "w-full h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "26", fill: color }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "20", fill: color, style: { filter: "brightness(0.85)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "20", cy: "20", rx: "6", ry: "4", fill: "white", opacity: "0.3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "8", fill: "#2d2d2d" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "5", fill: "#1a1a1a" })
                ] }),
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-bambu-green rounded-full" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50 font-medium truncate", children: label }),
                  nozzleSide && /* @__PURE__ */ jsxRuntimeExports.jsx(NozzleBadge, { side: nozzleSide })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/80 truncate", children: isEmpty ? "Empty" : tray.tray_type || "?" }),
                (temp != null || humidity != null) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  temp != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TemperatureIndicator,
                    {
                      temp,
                      goodThreshold: amsThresholds?.tempGood,
                      fairThreshold: amsThresholds?.tempFair
                    }
                  ),
                  humidity != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    HumidityIndicator,
                    {
                      humidity,
                      goodThreshold: amsThresholds?.humidityGood,
                      fairThreshold: amsThresholds?.humidityFair
                    }
                  )
                ] })
              ] }),
              !isEmpty && effectiveFill != null && effectiveFill >= 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-8 bg-bambu-dark-tertiary rounded-full overflow-hidden flex-shrink-0 flex flex-col-reverse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    configureSlotModal && selectedPrinterId && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfigureAmsSlotModal,
      {
        isOpen: !!configureSlotModal,
        onClose: () => setConfigureSlotModal(null),
        printerId: selectedPrinterId,
        slotInfo: configureSlotModal,
        printerModel: mapModelCode(printer?.model ?? null) || void 0,
        fullScreen: true,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["slotPresets", selectedPrinterId] });
          queryClient.invalidateQueries({ queryKey: ["printerStatus", selectedPrinterId] });
        }
      }
    ),
    slotActionPicker && selectedPrinterId && (() => {
      const assignment = getAssignment(slotActionPicker.amsId, slotActionPicker.trayId);
      const linked = getLinkedSpool(slotActionPicker.amsId, slotActionPicker.trayId, slotActionPicker.tray);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
            onClick: () => setSlotActionPicker(null)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-sm mx-4 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-xl shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              slotActionPicker.trayColor && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-4 h-4 rounded-full border border-black/20",
                  style: { backgroundColor: `#${slotActionPicker.trayColor.slice(0, 6)}` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: slotActionPicker.location }),
              slotActionPicker.traySubBrands && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-gray", children: [
                "(",
                slotActionPicker.traySubBrands,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setSlotActionPicker(null),
                className: "p-1 text-bambu-gray hover:text-white rounded transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
            !spoolmanEnabled && assignment?.spool && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-1", children: t("inventory.assignedSpool", "Assigned spool") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                assignment.spool.rgba && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-3 h-3 rounded-full border border-black/20 flex-shrink-0",
                    style: { backgroundColor: `#${assignment.spool.rgba.substring(0, 6)}` }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-white", children: [
                  assignment.spool.brand ? `${assignment.spool.brand} ` : "",
                  assignment.spool.material,
                  assignment.spool.color_name ? ` - ${assignment.spool.color_name}` : ""
                ] })
              ] })
            ] }),
            spoolmanEnabled && linked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-1", children: t("spoolman.linkedSpool", "Linked spool") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-white", children: [
                "Spoolman #",
                linked.id,
                linked.remaining_weight != null ? ` (${Math.round(linked.remaining_weight)}g)` : ""
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: openConfigureFromPicker,
                className: "w-full flex items-center gap-3 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary hover:border-bambu-blue transition-colors text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-5 h-5 text-bambu-blue flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("configureAmsSlot.title") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("spoolbuddy.ams.configureDesc", "Set filament preset, K-profile, and color") })
                  ] })
                ]
              }
            ),
            !spoolmanEnabled && (assignment ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleUnassignFromPicker,
                disabled: unassignMutation.isPending,
                className: "w-full flex items-center gap-3 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary hover:border-amber-500 transition-colors text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Unlink, { className: "w-5 h-5 text-amber-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-400 font-medium", children: t("inventory.unassignSpool", "Unassign") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("spoolbuddy.ams.unassignDesc", "Remove inventory spool from this slot") })
                  ] })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: openAssignFromPicker,
                className: "w-full flex items-center gap-3 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary hover:border-bambu-green transition-colors text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-bambu-green flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("inventory.assignSpool") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("spoolbuddy.ams.assignDesc", "Track a spool from your inventory") })
                  ] })
                ]
              }
            )),
            spoolmanEnabled && (linked?.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => unlinkSpoolMutation.mutate(linked.id),
                disabled: unlinkSpoolMutation.isPending,
                className: "w-full flex items-center gap-3 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary hover:border-amber-500 transition-colors text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Unlink, { className: "w-5 h-5 text-amber-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-400 font-medium", children: t("spoolman.unlinkSpool") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("spoolbuddy.ams.unlinkDesc", "Remove Spoolman link from this slot") })
                  ] })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: openLinkFromPicker,
                className: "w-full flex items-center gap-3 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary hover:border-bambu-green transition-colors text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-5 h-5 text-bambu-green flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("spoolman.linkToSpoolman") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("spoolbuddy.ams.linkDesc", "Link a Spoolman spool to this slot") })
                  ] })
                ]
              }
            ))
          ] })
        ] })
      ] });
    })(),
    assignSpoolModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AssignSpoolModal,
      {
        isOpen: !!assignSpoolModal,
        onClose: () => {
          setAssignSpoolModal(null);
          queryClient.invalidateQueries({ queryKey: ["spool-assignments", selectedPrinterId] });
        },
        printerId: assignSpoolModal.printerId,
        amsId: assignSpoolModal.amsId,
        trayId: assignSpoolModal.trayId,
        trayInfo: assignSpoolModal.trayInfo
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
    )
  ] });
}
export {
  SpoolBuddyAmsPage
};
