import { u as useTranslation, b0 as useOutletContext, r as reactExports, d as useQuery, j as jsxRuntimeExports, aY as spoolbuddyApi, f as api } from "./index-CeSodUhS.js";
import { g as getCurrencySymbol } from "./currency-xmcJ_vO3.js";
import { d as defaultFormData, l as loadRecentColors, b as buildFilamentOptions, f as findPresetOption, e as extractBrandsFromPresets, M as MATERIALS, p as parsePresetName, F as FilamentSection, C as ColorSection, A as AdditionalSection, P as PAProfileSection, v as validateForm, s as saveRecentColor } from "./PAProfileSection-Dd-47NhD.js";
import "./search-DTjW5Uxm.js";
import "./clock-rmajxGGN.js";
import "./sparkles-CZhBbNMC.js";
const SIMPLE_COMMON_MATERIALS = ["PLA", "PETG", "ABS", "ASA", "TPU", "PA", "PC", "PVA", "HIPS"];
function SpoolBuddyWriteTagPage() {
  const { t } = useTranslation();
  const { sbState } = useOutletContext();
  const [activeTab, setActiveTab] = reactExports.useState("existing");
  const [selectedSpool, setSelectedSpool] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [writeStatus, setWriteStatus] = reactExports.useState("idle");
  const [writeMessage, setWriteMessage] = reactExports.useState("");
  const [untagging, setUntagging] = reactExports.useState(false);
  const [tagOnReader, setTagOnReader] = reactExports.useState(false);
  const [tagUid, setTagUid] = reactExports.useState(null);
  const { data: spools = [], refetch: refetchSpools } = useQuery({
    queryKey: ["inventory-spools"],
    queryFn: () => api.getSpools(false),
    refetchInterval: 1e4
  });
  const { data: devices = [] } = useQuery({
    queryKey: ["spoolbuddy-devices"],
    queryFn: () => spoolbuddyApi.getDevices(),
    refetchInterval: 5e3
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const device = devices[0];
  const deviceOnline = sbState.deviceOnline;
  const currencySymbol = getCurrencySymbol(settings?.currency || "USD");
  const filteredSpools = reactExports.useMemo(() => {
    let list;
    if (activeTab === "existing") {
      list = spools.filter((s) => !s.tag_uid && !s.archived_at);
    } else if (activeTab === "replace") {
      list = spools.filter((s) => (s.tag_uid || s.tray_uuid) && !s.archived_at);
    } else {
      return [];
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) => s.material?.toLowerCase().includes(q) || s.color_name?.toLowerCase().includes(q) || s.brand?.toLowerCase().includes(q) || s.subtype?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [spools, activeTab, searchQuery]);
  const handleUnknownTag = reactExports.useCallback((e) => {
    const detail = e.detail;
    const sak = detail.sak ?? detail.data?.sak;
    if (sak === 0) {
      setTagOnReader(true);
      setTagUid(detail.tag_uid ?? detail.data?.tag_uid ?? null);
    }
  }, []);
  const handleTagMatched = reactExports.useCallback((e) => {
    const detail = e.detail;
    setTagOnReader(true);
    setTagUid(detail.tag_uid ?? detail.data?.tag_uid ?? null);
  }, []);
  const handleTagRemoved = reactExports.useCallback(() => {
    setTagOnReader(false);
    setTagUid(null);
  }, []);
  const handleTagWritten = reactExports.useCallback((e) => {
    const detail = e.detail;
    if (detail.spool_id === selectedSpool?.id || detail.data?.spool_id === selectedSpool?.id) {
      setWriteStatus("success");
      setWriteMessage(t("spoolbuddy.writeTag.writeSuccess", "Tag written successfully!"));
      refetchSpools();
      setTimeout(() => {
        setWriteStatus("idle");
        setSelectedSpool(null);
        setWriteMessage("");
      }, 5e3);
    }
  }, [selectedSpool, t, refetchSpools]);
  const handleWriteFailed = reactExports.useCallback((e) => {
    const detail = e.detail;
    if (detail.spool_id === selectedSpool?.id || detail.data?.spool_id === selectedSpool?.id) {
      setWriteStatus("error");
      setWriteMessage(detail.message ?? detail.data?.message ?? t("spoolbuddy.writeTag.writeFailed", "Write failed"));
    }
  }, [selectedSpool, t]);
  reactExports.useEffect(() => {
    window.addEventListener("spoolbuddy-unknown-tag", handleUnknownTag);
    window.addEventListener("spoolbuddy-tag-matched", handleTagMatched);
    window.addEventListener("spoolbuddy-tag-removed", handleTagRemoved);
    window.addEventListener("spoolbuddy-tag-written", handleTagWritten);
    window.addEventListener("spoolbuddy-tag-write-failed", handleWriteFailed);
    return () => {
      window.removeEventListener("spoolbuddy-unknown-tag", handleUnknownTag);
      window.removeEventListener("spoolbuddy-tag-matched", handleTagMatched);
      window.removeEventListener("spoolbuddy-tag-removed", handleTagRemoved);
      window.removeEventListener("spoolbuddy-tag-written", handleTagWritten);
      window.removeEventListener("spoolbuddy-tag-write-failed", handleWriteFailed);
    };
  }, [handleUnknownTag, handleTagMatched, handleTagRemoved, handleTagWritten, handleWriteFailed]);
  reactExports.useEffect(() => {
    setSelectedSpool(null);
    setWriteStatus("idle");
    setWriteMessage("");
    setSearchQuery("");
  }, [activeTab]);
  const handleWriteTag = async () => {
    if (!selectedSpool || !device) return;
    setWriteStatus("writing");
    setWriteMessage(t("spoolbuddy.writeTag.waiting", "Waiting for SpoolBuddy..."));
    try {
      await spoolbuddyApi.writeTag(device.device_id, selectedSpool.id);
    } catch {
      setWriteStatus("error");
      setWriteMessage(t("spoolbuddy.writeTag.queueFailed", "Failed to queue write command"));
    }
  };
  const handleCancelWrite = async () => {
    if (!device) return;
    try {
      await spoolbuddyApi.cancelWrite(device.device_id);
    } catch {
    }
    setWriteStatus("idle");
    setWriteMessage("");
  };
  const handleUntagSpool = async () => {
    if (!selectedSpool || !isReplaceTagged(selectedSpool)) return;
    setUntagging(true);
    setWriteStatus("idle");
    setWriteMessage("");
    try {
      await api.linkTagToSpool(selectedSpool.id, {
        tag_uid: "",
        tray_uuid: "",
        data_origin: "manual"
      });
      await refetchSpools();
      setSelectedSpool(null);
      setWriteStatus("success");
      setWriteMessage(t("spoolbuddy.writeTag.untagSuccess", "Tag removed from spool"));
      setTimeout(() => {
        setWriteStatus("idle");
        setWriteMessage("");
      }, 2500);
    } catch {
      setWriteStatus("error");
      setWriteMessage(t("spoolbuddy.writeTag.untagFailed", "Failed to remove tag from spool"));
    } finally {
      setUntagging(false);
    }
  };
  const handleSpoolCreated = reactExports.useCallback((createdSpool) => {
    setSelectedSpool(createdSpool);
    setWriteStatus("idle");
    setWriteMessage("");
    void refetchSpools();
  }, [refetchSpools]);
  const canWrite = selectedSpool && deviceOnline && writeStatus !== "writing" && writeStatus !== "success";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-bambu-dark-tertiary shrink-0", children: [
      { key: "existing", label: t("spoolbuddy.writeTag.tabExisting", "Existing Spool") },
      { key: "new", label: t("spoolbuddy.writeTag.tabNew", "New Spool") },
      { key: "replace", label: t("spoolbuddy.writeTag.tabReplace", "Replace Tag") }
    ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActiveTab(tab.key),
        className: `flex-1 py-3 text-sm font-medium transition-colors ${activeTab === tab.key ? "text-bambu-green border-b-2 border-bambu-green bg-bambu-dark" : "text-zinc-400 hover:text-zinc-200 hover:bg-bambu-dark-tertiary"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col overflow-hidden border-r border-bambu-dark-tertiary", children: activeTab === "new" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        NewSpoolTouchForm,
        {
          currencySymbol,
          onCreated: handleSpoolCreated,
          selectedSpool,
          t
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: t("spoolbuddy.writeTag.searchPlaceholder", "Search by material, color, brand..."),
            className: "w-full px-3 py-2 bg-bambu-dark-tertiary border border-bambu-dark-tertiary rounded text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-bambu-green"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-3 pb-3 space-y-2", children: filteredSpools.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-zinc-500 py-8 text-sm", children: activeTab === "existing" ? t("spoolbuddy.writeTag.noUntaggedSpools", "No spools without tags") : t("spoolbuddy.writeTag.noTaggedSpools", "No spools with tags") }) : filteredSpools.map((spool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SpoolListItem,
          {
            spool,
            selected: selectedSpool?.id === spool.id,
            showTag: activeTab === "replace",
            onClick: () => {
              setSelectedSpool(spool);
              setWriteStatus("idle");
              setWriteMessage("");
            }
          },
          spool.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[340px] flex flex-col items-center justify-center p-6 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        NfcStatusPanel,
        {
          writeStatus,
          writeMessage,
          selectedSpool,
          tagOnReader,
          tagUid,
          deviceOnline,
          canWrite: !!canWrite,
          isReplace: activeTab === "replace",
          canUntag: activeTab === "replace" && !!selectedSpool && isReplaceTagged(selectedSpool),
          untagging,
          onWrite: handleWriteTag,
          onUntag: handleUntagSpool,
          onCancel: handleCancelWrite,
          onRetry: () => {
            setWriteStatus("idle");
            setWriteMessage("");
          },
          t
        }
      ) })
    ] })
  ] });
}
function isReplaceTagged(spool) {
  return !!(spool.tag_uid || spool.tray_uuid);
}
function SpoolListItem({ spool, selected, showTag, onClick }) {
  const color = spool.rgba ? `#${spool.rgba.slice(0, 6)}` : "#666";
  const remaining = Math.max(0, spool.label_weight - spool.weight_used);
  const pct = spool.label_weight > 0 ? Math.round(remaining / spool.label_weight * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: `w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${selected ? "bg-bambu-green/15 border border-bambu-green/50" : "bg-bambu-dark-secondary hover:bg-bambu-dark-tertiary border border-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-8 h-8 rounded-full shrink-0 border border-white/10",
            style: { backgroundColor: color }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-white truncate", children: [
            spool.brand ? `${spool.brand} ` : "",
            spool.material,
            spool.subtype ? ` ${spool.subtype}` : ""
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-zinc-400", children: [
            spool.color_name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: spool.color_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              remaining,
              "g / ",
              spool.label_weight,
              "g (",
              pct,
              "%)"
            ] })
          ] }),
          showTag && spool.tag_uid && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-zinc-500 mt-0.5 font-mono", children: spool.tag_uid })
        ] }),
        selected && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 text-bambu-green shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) })
      ]
    }
  );
}
function NewSpoolTouchForm({ currencySymbol, onCreated, selectedSpool, t }) {
  const [viewMode, setViewMode] = reactExports.useState("simple");
  const [activeSubTab, setActiveSubTab] = reactExports.useState("filament");
  const [formData, setFormData] = reactExports.useState(defaultFormData);
  const [errors, setErrors] = reactExports.useState({});
  const [quickAdd, setQuickAdd] = reactExports.useState(false);
  const [quantity, setQuantity] = reactExports.useState(1);
  const [creating, setCreating] = reactExports.useState(false);
  const [createError, setCreateError] = reactExports.useState(null);
  const [cloudAuthenticated, setCloudAuthenticated] = reactExports.useState(false);
  const [loadingCloudPresets, setLoadingCloudPresets] = reactExports.useState(false);
  const [cloudPresets, setCloudPresets] = reactExports.useState([]);
  const [localPresets, setLocalPresets] = reactExports.useState([]);
  const [spoolCatalog, setSpoolCatalog] = reactExports.useState([]);
  const [colorCatalog, setColorCatalog] = reactExports.useState([]);
  const [presetInputValue, setPresetInputValue] = reactExports.useState("");
  const [recentColors, setRecentColors] = reactExports.useState([]);
  const [printersWithCalibrations, setPrintersWithCalibrations] = reactExports.useState([]);
  const [selectedProfiles, setSelectedProfiles] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expandedPrinters, setExpandedPrinters] = reactExports.useState(/* @__PURE__ */ new Set());
  reactExports.useEffect(() => {
    setRecentColors(loadRecentColors());
  }, []);
  reactExports.useEffect(() => {
    const fetchData = async () => {
      if (viewMode !== "full") {
        return;
      }
      setLoadingCloudPresets(true);
      try {
        const status = await api.getCloudStatus();
        setCloudAuthenticated(status.is_authenticated);
        if (status.is_authenticated) {
          const presets = await api.getFilamentPresets();
          setCloudPresets(presets);
        }
      } catch {
        setCloudAuthenticated(false);
      } finally {
        setLoadingCloudPresets(false);
      }
      api.getSpoolCatalog().then(setSpoolCatalog).catch(() => void 0);
      api.getColorCatalog().then(setColorCatalog).catch(() => void 0);
      api.getLocalPresets().then((r) => setLocalPresets(r.filament)).catch(() => void 0);
      try {
        const printers = await api.getPrinters();
        const statuses = await Promise.all(printers.map((p) => api.getPrinterStatus(p.id).catch(() => null)));
        const results = [];
        for (let i = 0; i < printers.length; i++) {
          const printer = printers[i];
          const status = statuses[i];
          const connected = status?.connected ?? false;
          let calibrations = [];
          if (connected) {
            try {
              const kRes = await api.getKProfiles(printer.id);
              calibrations = kRes.profiles.map((p) => ({
                cali_idx: p.slot_id,
                filament_id: p.filament_id,
                setting_id: p.setting_id || "",
                name: p.name,
                k_value: parseFloat(p.k_value) || 0,
                n_coef: parseFloat(p.n_coef) || 0,
                extruder_id: p.extruder_id,
                nozzle_diameter: p.nozzle_diameter
              }));
            } catch {
            }
          }
          results.push({ printer: { ...printer, connected }, calibrations });
        }
        setPrintersWithCalibrations(results);
      } catch {
      }
    };
    fetchData();
  }, [viewMode]);
  reactExports.useEffect(() => {
    if (printersWithCalibrations.length > 0) {
      setExpandedPrinters(new Set(printersWithCalibrations.map((p) => String(p.printer.id))));
    }
  }, [printersWithCalibrations]);
  const filamentOptions = reactExports.useMemo(
    () => buildFilamentOptions(cloudPresets, /* @__PURE__ */ new Set(), localPresets),
    [cloudPresets, localPresets]
  );
  const selectedPresetOption = reactExports.useMemo(
    () => findPresetOption(formData.slicer_filament, filamentOptions),
    [formData.slicer_filament, filamentOptions]
  );
  const baseAvailableBrands = reactExports.useMemo(() => {
    const presetBrands = extractBrandsFromPresets(cloudPresets, localPresets);
    const catalogBrands = colorCatalog.map((entry) => entry.manufacturer?.trim()).filter((brand) => !!brand);
    return Array.from(/* @__PURE__ */ new Set([...presetBrands, ...catalogBrands])).sort((a, b) => a.localeCompare(b));
  }, [cloudPresets, localPresets, colorCatalog]);
  const baseAvailableMaterials = reactExports.useMemo(() => {
    const catalogMaterials = colorCatalog.map((entry) => entry.material?.trim()).filter((material) => !!material);
    return Array.from(/* @__PURE__ */ new Set([...MATERIALS, ...catalogMaterials])).sort((a, b) => a.localeCompare(b));
  }, [colorCatalog]);
  const brandMaterialPairs = reactExports.useMemo(() => {
    const pairs = [];
    for (const entry of colorCatalog) {
      const brand = entry.manufacturer?.trim();
      const material = entry.material?.trim();
      if (brand && material) pairs.push({ brand, material });
    }
    for (const preset of cloudPresets) {
      const parsed = parsePresetName(preset.name);
      if (parsed.brand && parsed.material) pairs.push({ brand: parsed.brand, material: parsed.material });
    }
    for (const preset of localPresets) {
      const parsed = parsePresetName(preset.name);
      const brand = preset.filament_vendor?.trim() || parsed.brand;
      const material = parsed.material;
      if (brand && material) pairs.push({ brand, material });
    }
    return pairs;
  }, [cloudPresets, colorCatalog, localPresets]);
  const brandToMaterials = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const pair of brandMaterialPairs) {
      const brandKey = pair.brand.toLowerCase();
      const materialKey = pair.material.toLowerCase();
      if (!map.has(brandKey)) map.set(brandKey, /* @__PURE__ */ new Set());
      map.get(brandKey).add(materialKey);
    }
    return map;
  }, [brandMaterialPairs]);
  const materialToBrands = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const pair of brandMaterialPairs) {
      const brandKey = pair.brand.toLowerCase();
      const materialKey = pair.material.toLowerCase();
      if (!map.has(materialKey)) map.set(materialKey, /* @__PURE__ */ new Set());
      map.get(materialKey).add(brandKey);
    }
    return map;
  }, [brandMaterialPairs]);
  const availableBrands = reactExports.useMemo(() => {
    if (!formData.material) return baseAvailableBrands;
    const materialKey = formData.material.toLowerCase();
    const brandKeys = materialToBrands.get(materialKey);
    if (!brandKeys || brandKeys.size === 0) return baseAvailableBrands;
    return baseAvailableBrands.filter((brand) => brandKeys.has(brand.toLowerCase()));
  }, [baseAvailableBrands, formData.material, materialToBrands]);
  const availableMaterials = reactExports.useMemo(() => {
    if (!formData.brand) return baseAvailableMaterials;
    const brandKey = formData.brand.toLowerCase();
    const materialKeys = brandToMaterials.get(brandKey);
    if (!materialKeys || materialKeys.size === 0) return baseAvailableMaterials;
    return baseAvailableMaterials.filter((material) => materialKeys.has(material.toLowerCase()));
  }, [baseAvailableMaterials, formData.brand, brandToMaterials]);
  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: void 0 }));
    }
  };
  const handleColorUsed = (color) => {
    setRecentColors((prev) => saveRecentColor(color, prev));
  };
  const saveKProfiles = async (spoolId) => {
    if (selectedProfiles.size === 0) {
      try {
        await api.saveSpoolKProfiles(spoolId, []);
      } catch {
      }
      return;
    }
    const profiles = [];
    for (const key of selectedProfiles) {
      const [printerIdStr, caliIdxStr, extruderStr] = key.split(":");
      const printerId = parseInt(printerIdStr);
      const caliIdx = parseInt(caliIdxStr);
      const extruder = extruderStr === "null" ? 0 : parseInt(extruderStr);
      const pc = printersWithCalibrations.find((p) => p.printer.id === printerId);
      if (pc) {
        const cal = pc.calibrations.find((c) => c.cali_idx === caliIdx);
        if (cal) {
          profiles.push({
            printer_id: printerId,
            extruder,
            nozzle_diameter: cal.nozzle_diameter || "0.4",
            k_value: cal.k_value,
            name: cal.name || null,
            cali_idx: cal.cali_idx,
            setting_id: cal.setting_id || null
          });
        }
      }
    }
    if (profiles.length > 0) {
      await api.saveSpoolKProfiles(spoolId, profiles);
    }
  };
  const handleCreate = async () => {
    setCreateError(null);
    const validation = validateForm(formData, viewMode === "simple" ? true : quickAdd);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setActiveSubTab("filament");
      return;
    }
    const presetName = selectedPresetOption?.displayName || presetInputValue || null;
    const payload = {
      material: formData.material,
      subtype: formData.subtype || null,
      brand: formData.brand || null,
      color_name: formData.color_name || null,
      rgba: formData.rgba || null,
      label_weight: formData.label_weight,
      core_weight: formData.core_weight,
      core_weight_catalog_id: formData.core_weight_catalog_id,
      weight_used: formData.weight_used,
      slicer_filament: formData.slicer_filament || null,
      slicer_filament_name: presetName,
      nozzle_temp_min: null,
      nozzle_temp_max: null,
      note: formData.note || null,
      cost_per_kg: formData.cost_per_kg,
      added_full: null,
      last_used: null,
      encode_time: null,
      tag_uid: null,
      tray_uuid: null,
      data_origin: null,
      tag_type: null,
      last_scale_weight: null,
      last_weighed_at: null
    };
    setCreating(true);
    try {
      if (quantity > 1) {
        const created = await api.bulkCreateSpools(payload, quantity);
        for (const spool of created) {
          await saveKProfiles(spool.id);
        }
        if (created.length > 0) onCreated(created[0]);
      } else {
        const created = await api.createSpool(payload);
        await saveKProfiles(created.id);
        onCreated(created);
      }
    } catch {
      setCreateError(t("spoolbuddy.writeTag.createFailed", "Failed to create spool"));
    } finally {
      setCreating(false);
    }
  };
  const simpleColorHex = `#${(formData.rgba || "808080FF").slice(0, 6)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-3 overflow-y-auto h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-2 bg-bambu-dark-secondary rounded-lg border border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-zinc-200", children: t("spoolbuddy.writeTag.viewMode", "View") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded-lg overflow-hidden border border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setViewMode("simple"),
            className: `px-3 py-1.5 text-xs font-medium ${viewMode === "simple" ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark text-zinc-400"}`,
            children: t("spoolbuddy.writeTag.simpleView", "Simple")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setViewMode("full"),
            className: `px-3 py-1.5 text-xs font-medium ${viewMode === "full" ? "bg-bambu-green/20 text-bambu-green" : "bg-bambu-dark text-zinc-400"}`,
            children: t("spoolbuddy.writeTag.fullView", "Full")
          }
        )
      ] })
    ] }),
    viewMode === "simple" ? selectedSpool ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full p-6 text-center bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-12 h-12 rounded-full mb-4 border border-white/10",
          style: { backgroundColor: selectedSpool.rgba ? `#${selectedSpool.rgba.slice(0, 6)}` : "#666" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-medium", children: [
        selectedSpool.brand ? `${selectedSpool.brand} ` : "",
        selectedSpool.material
      ] }),
      selectedSpool.color_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 text-sm", children: selectedSpool.color_name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-zinc-500 text-xs mt-1", children: [
        selectedSpool.label_weight,
        "g"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-green text-sm mt-4", children: t("spoolbuddy.writeTag.spoolCreated", "Spool created! Ready to write.") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4 overflow-y-auto bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-zinc-400 mb-1", children: t("spoolbuddy.writeTag.material", "Material") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: formData.material,
            onChange: (e) => updateField("material", e.target.value),
            className: "w-full px-3 py-2 bg-bambu-dark-tertiary border border-bambu-dark-tertiary rounded text-sm text-white focus:outline-none focus:border-bambu-green",
            children: SIMPLE_COMMON_MATERIALS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, children: m }, m))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-zinc-400 mb-1", children: t("spoolbuddy.writeTag.colorName", "Color Name") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: formData.color_name,
              onChange: (e) => updateField("color_name", e.target.value),
              placeholder: "Jade White",
              className: "w-full px-3 py-2 bg-bambu-dark-tertiary border border-bambu-dark-tertiary rounded text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-bambu-green"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-zinc-400 mb-1", children: t("spoolbuddy.writeTag.color", "Color") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "color",
              value: simpleColorHex,
              onChange: (e) => updateField("rgba", e.target.value.replace("#", "").toUpperCase() + "FF"),
              className: "w-10 h-9 bg-transparent border border-bambu-dark-tertiary rounded cursor-pointer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-zinc-400 mb-1", children: t("spoolbuddy.writeTag.brand", "Brand") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: formData.brand,
            onChange: (e) => updateField("brand", e.target.value),
            placeholder: "Polymaker",
            className: "w-full px-3 py-2 bg-bambu-dark-tertiary border border-bambu-dark-tertiary rounded text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-bambu-green"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-zinc-400 mb-1", children: t("spoolbuddy.writeTag.weight", "Weight (g)") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: formData.label_weight,
            onChange: (e) => updateField("label_weight", parseInt(e.target.value) || 0),
            min: 0,
            max: 1e4,
            className: "w-full px-3 py-2 bg-bambu-dark-tertiary border border-bambu-dark-tertiary rounded text-sm text-white focus:outline-none focus:border-bambu-green"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleCreate,
          disabled: creating || !formData.material,
          className: "w-full py-2.5 bg-bambu-green hover:bg-bambu-green/80 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded transition-colors",
          children: creating ? t("spoolbuddy.writeTag.creating", "Creating...") : t("spoolbuddy.writeTag.createSpool", "Create Spool")
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-2 bg-bambu-dark-secondary rounded-lg border border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-zinc-200", children: t("inventory.quickAdd", "Quick Add") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setQuickAdd((prev) => !prev),
            className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${quickAdd ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block h-4.5 w-4.5 rounded-full bg-white transition-transform ${quickAdd ? "translate-x-6" : "translate-x-1"}` })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border border-bambu-dark-tertiary rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveSubTab("filament"),
            className: `flex-1 py-2.5 text-sm font-medium ${activeSubTab === "filament" ? "bg-bambu-green/15 text-bambu-green" : "bg-bambu-dark-secondary text-zinc-400"}`,
            children: t("inventory.filamentInfoTab", "Filament")
          }
        ),
        !quickAdd && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveSubTab("pa-profile"),
            className: `flex-1 py-2.5 text-sm font-medium ${activeSubTab === "pa-profile" ? "bg-bambu-green/15 text-bambu-green" : "bg-bambu-dark-secondary text-zinc-400"}`,
            children: t("inventory.paProfileTab", "PA Profile")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg p-3", children: activeSubTab === "filament" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilamentSection,
          {
            formData,
            updateField,
            cloudAuthenticated,
            loadingCloudPresets,
            presetInputValue,
            setPresetInputValue,
            selectedPresetOption,
            filamentOptions,
            availableBrands,
            availableMaterials,
            quickAdd,
            quantity,
            onQuantityChange: setQuantity,
            errors
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ColorSection,
          {
            formData,
            updateField,
            recentColors,
            onColorUsed: handleColorUsed,
            catalogColors: colorCatalog
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AdditionalSection,
          {
            formData,
            updateField,
            spoolCatalog,
            currencySymbol
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        PAProfileSection,
        {
          formData,
          updateField,
          printersWithCalibrations,
          selectedProfiles,
          setSelectedProfiles,
          expandedPrinters,
          setExpandedPrinters
        }
      ) })
    ] }),
    createError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-red-400 bg-red-900/20 border border-red-900/40 rounded-lg px-3 py-2", children: createError }),
    viewMode === "full" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleCreate,
        disabled: creating,
        className: "w-full py-3 bg-bambu-green hover:bg-bambu-green/80 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded transition-colors",
        children: creating ? t("spoolbuddy.writeTag.creating", "Creating...") : t("spoolbuddy.writeTag.createSpool", "Create Spool")
      }
    ),
    viewMode === "full" && selectedSpool && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center p-4 text-center bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-12 h-12 rounded-full mb-4 border border-white/10",
          style: { backgroundColor: selectedSpool.rgba ? `#${selectedSpool.rgba.slice(0, 6)}` : "#666" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-medium", children: [
        selectedSpool.brand ? `${selectedSpool.brand} ` : "",
        selectedSpool.material
      ] }),
      selectedSpool.color_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 text-sm", children: selectedSpool.color_name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-zinc-500 text-xs mt-1", children: [
        selectedSpool.label_weight,
        "g"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-green text-sm mt-4", children: t("spoolbuddy.writeTag.spoolCreated", "Spool created! Ready to write.") })
    ] })
  ] });
}
function NfcStatusPanel({ writeStatus, writeMessage, selectedSpool, tagOnReader, tagUid, deviceOnline, canWrite, isReplace, canUntag, untagging, onWrite, onUntag, onCancel, onRetry, t }) {
  if (writeStatus === "success") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-green-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400 font-medium", children: writeMessage }),
      selectedSpool && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-zinc-400 text-sm", children: [
        selectedSpool.brand ? `${selectedSpool.brand} ` : "",
        selectedSpool.material,
        selectedSpool.color_name ? ` - ${selectedSpool.color_name}` : ""
      ] })
    ] });
  }
  if (writeStatus === "error") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-8 h-8 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 font-medium", children: writeMessage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onRetry,
          className: "px-4 py-2 bg-bambu-dark-tertiary hover:bg-bambu-dark-secondary text-white text-sm rounded transition-colors",
          children: t("spoolbuddy.writeTag.tryAgain", "Try Again")
        }
      )
    ] });
  }
  if (writeStatus === "writing") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-16 h-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border-2 border-bambu-green/30 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-full border-2 border-bambu-green/50 animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NfcIcon, { className: "w-8 h-8 text-bambu-green" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-green font-medium", children: t("spoolbuddy.writeTag.writing", "Writing tag...") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-500 text-xs", children: writeMessage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onCancel,
          className: "px-4 py-2 bg-bambu-dark-tertiary hover:bg-bambu-dark-secondary text-zinc-400 text-sm rounded transition-colors",
          children: t("spoolbuddy.writeTag.cancel", "Cancel")
        }
      )
    ] });
  }
  if (!deviceOnline) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NfcIcon, { className: "w-12 h-12 text-zinc-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-500 text-sm", children: t("spoolbuddy.writeTag.deviceOffline", "SpoolBuddy is offline") })
    ] });
  }
  if (!selectedSpool) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NfcIcon, { className: "w-12 h-12 text-zinc-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 text-sm", children: t("spoolbuddy.writeTag.selectSpool", "Select a spool, then place a blank NTAG on the reader") })
    ] });
  }
  const spoolColor = selectedSpool.rgba ? `#${selectedSpool.rgba.slice(0, 6)}` : "#666";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-4 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-16 h-16", children: tagOnReader ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-bambu-green/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NfcIcon, { className: "w-8 h-8 text-bambu-green" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border-2 border-zinc-600 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NfcIcon, { className: "w-8 h-8 text-zinc-500" }) })
    ] }) }),
    tagOnReader ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-green text-sm font-medium", children: t("spoolbuddy.writeTag.tagReady", "Tag detected — ready to write") }),
      tagUid && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-500 text-xs font-mono", children: tagUid })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 text-sm", children: t("spoolbuddy.writeTag.placeTag", "Place an NTAG on the reader") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-bambu-dark-secondary rounded-lg p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border border-white/10 shrink-0", style: { backgroundColor: spoolColor } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-sm font-medium truncate", children: [
            selectedSpool.brand ? `${selectedSpool.brand} ` : "",
            selectedSpool.material
          ] }),
          selectedSpool.color_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 text-xs", children: selectedSpool.color_name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-zinc-500", children: [
        selectedSpool.label_weight,
        "g"
      ] })
    ] }),
    isReplace && selectedSpool.tag_uid && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-500/80 text-xs", children: t("spoolbuddy.writeTag.replaceWarning", "Old tag will be unlinked. New tag will replace it.") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onWrite,
        disabled: !canWrite,
        className: "w-full py-3 bg-bambu-green hover:bg-bambu-green/80 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors text-sm",
        children: isReplace ? t("spoolbuddy.writeTag.replaceTag", "Replace Tag") : t("spoolbuddy.writeTag.writeTag", "Write Tag")
      }
    ),
    isReplace && canUntag && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onUntag,
        disabled: untagging,
        className: "w-full py-2.5 bg-bambu-dark-tertiary hover:bg-bambu-dark-secondary disabled:opacity-40 disabled:cursor-not-allowed text-zinc-200 rounded-lg transition-colors text-sm",
        children: untagging ? t("spoolbuddy.writeTag.untagging", "Removing tag...") : t("spoolbuddy.writeTag.untagSpool", "Untag Selected Spool")
      }
    )
  ] });
}
function NfcIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" })
  ] });
}
export {
  SpoolBuddyWriteTagPage
};
