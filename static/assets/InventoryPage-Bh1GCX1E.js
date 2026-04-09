import { c as createLucideIcon, u as useTranslation, b as useQueryClient, a as useToast, d as useQuery, e as useMutation, f as api, j as jsxRuntimeExports, L as LoaderCircle, B as Button, T as Trash2, r as reactExports, X, Z as Zap, A as Card, D as CardContent, a9 as ChevronUp, G as ChevronDown, ag as Eye, Q as Layers, K as Printer, l as TriangleAlert, a8 as Archive, C as ChevronLeft, w as ChevronRight, h as ConfirmModal, aZ as spoolbuddyApi, p as parseUTCDate, aN as formatDateInput } from "./index-CMdmMVx7.js";
import { d as defaultFormData, l as loadRecentColors, b as buildFilamentOptions, e as extractBrandsFromPresets, M as MATERIALS, p as parsePresetName, f as findPresetOption, F as FilamentSection, C as ColorSection, A as AdditionalSection, P as PAProfileSection, s as saveRecentColor, v as validateForm } from "./PAProfileSection-Czn_s2iR.js";
import { C as Clock } from "./clock-Cv3tr1BN.js";
import { P as Palette } from "./palette-pog5uBPH.js";
import { T as Tag } from "./tag-CyVwFBKL.js";
import { U as Unlink } from "./unlink-_irBZk_Q.js";
import { S as Save } from "./save-zQqkFHJf.js";
import { G as GripVertical } from "./grip-vertical-SGCzASiX.js";
import { E as EyeOff } from "./eye-off-DkrTi1ED.js";
import { R as RotateCcw } from "./rotate-ccw-BgDYbz8N.js";
import { r as resolveSpoolColorName } from "./colors-lMyZBYSI.js";
import { g as getCurrencySymbol } from "./currency-xmcJ_vO3.js";
import { f as formatSlotLabel } from "./amsHelpers-CeYQrZcW.js";
import { P as Package } from "./package-Dsgdf_zv.js";
import { P as Plus } from "./plus-BP-iHzEt.js";
import { T as TrendingDown } from "./trending-down-Cxs_EVQA.js";
import { P as Pen } from "./pen-BzRec-DJ.js";
import { S as Search } from "./search-DmnJQGxg.js";
import { L as LayoutGrid } from "./layout-grid-CbZ-Id5G.js";
import { A as ArrowUp } from "./arrow-up-DnGSd7Fn.js";
import { A as ArrowDown } from "./arrow-down-KSy9Bjnf.js";
import { A as ArrowUpDown } from "./arrow-up-down-CV9bGln-.js";
import { C as Check } from "./check-D4SLDLZy.js";
import { R as RefreshCw } from "./refresh-cw-BiEoeHE_.js";
import "./sparkles-Dmm623Ny.js";
const __iconNode$5 = [
  ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
  ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }]
];
const Beaker = createLucideIcon("beaker", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
const ChevronsLeft = createLucideIcon("chevrons-left", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
const ChevronsRight = createLucideIcon("chevrons-right", __iconNode$3);
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
];
const Columns2 = createLucideIcon("columns-2", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
  ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
  ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
  ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
  ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }],
  ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }]
];
const Group = createLucideIcon("group", __iconNode$1);
const __iconNode = [
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
];
const TableProperties = createLucideIcon("table-properties", __iconNode);
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }) + " " + date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}
const STATUS_COLORS = {
  completed: "text-bambu-green",
  failed: "text-red-400",
  aborted: "text-yellow-400"
};
function SpoolUsageHistory({ spoolId }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { data: history, isLoading } = useQuery({
    queryKey: ["spool-usage", spoolId],
    queryFn: () => api.getSpoolUsageHistory(spoolId)
  });
  const clearMutation = useMutation({
    mutationFn: () => api.clearSpoolUsageHistory(spoolId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spool-usage", spoolId] });
      showToast(t("inventory.historyCleared"), "success");
    }
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin text-bambu-green" }) });
  }
  if (!history || history.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 text-bambu-gray text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 mx-auto mb-2 opacity-50" }),
      t("inventory.noUsageHistory")
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-white", children: t("inventory.usageHistory") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => clearMutation.mutate(),
          disabled: clearMutation.isPending,
          className: "text-xs text-bambu-gray hover:text-red-400",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3 mr-1" }),
            t("inventory.clearHistory")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-48 overflow-y-auto space-y-1", children: history.map((record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-2 rounded bg-bambu-dark/50 text-xs",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: formatDate(record.created_at) }),
            record.print_name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white ml-2 truncate", title: record.print_name, children: record.print_name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0 ml-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-medium", children: [
              record.weight_used.toFixed(1),
              "g"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
              "(",
              record.percent_used,
              "%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: STATUS_COLORS[record.status] || "text-bambu-gray", children: record.status })
          ] })
        ]
      },
      record.id
    )) })
  ] });
}
function SpoolFormModal({
  isOpen,
  onClose,
  spool,
  printersWithCalibrations = [],
  currencySymbol,
  onSpoolsCreated
}) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const isEditing = !!spool;
  const [formData, setFormData] = reactExports.useState(defaultFormData);
  const [errors, setErrors] = reactExports.useState({});
  const [activeTab, setActiveTab] = reactExports.useState("filament");
  const [weightTouched, setWeightTouched] = reactExports.useState(false);
  const [quickAdd, setQuickAdd] = reactExports.useState(false);
  const [quantity, setQuantity] = reactExports.useState(1);
  const [cloudAuthenticated, setCloudAuthenticated] = reactExports.useState(false);
  const [loadingCloudPresets, setLoadingCloudPresets] = reactExports.useState(false);
  const [cloudPresets, setCloudPresets] = reactExports.useState([]);
  const [presetInputValue, setPresetInputValue] = reactExports.useState("");
  const [spoolCatalog, setSpoolCatalog] = reactExports.useState([]);
  const [localPresets, setLocalPresets] = reactExports.useState([]);
  const [colorCatalog, setColorCatalog] = reactExports.useState([]);
  const [recentColors, setRecentColors] = reactExports.useState([]);
  const [fetchedCalibrations, setFetchedCalibrations] = reactExports.useState([]);
  const [selectedProfiles, setSelectedProfiles] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expandedPrinters, setExpandedPrinters] = reactExports.useState(/* @__PURE__ */ new Set());
  const resolvedCalibrations = printersWithCalibrations.length > 0 ? printersWithCalibrations : fetchedCalibrations;
  const selectedProfileCount = reactExports.useMemo(() => {
    return selectedProfiles.size;
  }, [selectedProfiles]);
  reactExports.useEffect(() => {
    setRecentColors(loadRecentColors());
  }, []);
  reactExports.useEffect(() => {
    if (isOpen) {
      const fetchData = async () => {
        setLoadingCloudPresets(true);
        try {
          const status = await api.getCloudStatus();
          setCloudAuthenticated(status.is_authenticated);
          if (status.is_authenticated) {
            const presets = await api.getFilamentPresets();
            setCloudPresets(presets);
          }
        } catch (e) {
          console.error("Failed to fetch cloud presets:", e);
          setCloudAuthenticated(false);
        } finally {
          setLoadingCloudPresets(false);
        }
      };
      fetchData();
      api.getSpoolCatalog().then(setSpoolCatalog).catch(console.error);
      api.getColorCatalog().then(setColorCatalog).catch(console.error);
      api.getLocalPresets().then((r) => setLocalPresets(r.filament)).catch(console.error);
      if (printersWithCalibrations.length === 0) {
        (async () => {
          try {
            const printers = await api.getPrinters();
            const statuses = await Promise.all(
              printers.map((p) => api.getPrinterStatus(p.id).catch(() => null))
            );
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
            setFetchedCalibrations(results);
          } catch (e) {
            console.error("Failed to fetch printer calibrations:", e);
          }
        })();
      }
    }
  }, [isOpen, printersWithCalibrations.length]);
  const filamentOptions = reactExports.useMemo(
    () => buildFilamentOptions(cloudPresets, /* @__PURE__ */ new Set(), localPresets),
    [cloudPresets, localPresets]
  );
  const baseAvailableBrands = reactExports.useMemo(() => {
    const presetBrands = extractBrandsFromPresets(cloudPresets, localPresets);
    const catalogBrands = colorCatalog.map((entry) => entry.manufacturer?.trim()).filter((brand) => !!brand);
    const brandSet = /* @__PURE__ */ new Set([...presetBrands, ...catalogBrands]);
    return Array.from(brandSet).sort((a, b) => a.localeCompare(b));
  }, [cloudPresets, localPresets, colorCatalog]);
  const baseAvailableMaterials = reactExports.useMemo(() => {
    const catalogMaterials = colorCatalog.map((entry) => entry.material?.trim()).filter((material) => !!material);
    const materialSet = /* @__PURE__ */ new Set([...MATERIALS, ...catalogMaterials]);
    return Array.from(materialSet).sort((a, b) => a.localeCompare(b));
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
      if (parsed.brand && parsed.material) {
        pairs.push({ brand: parsed.brand, material: parsed.material });
      }
    }
    for (const preset of localPresets) {
      const parsed = parsePresetName(preset.name);
      const brand = preset.filament_vendor?.trim() || parsed.brand;
      const material = parsed.material;
      if (brand && material) {
        pairs.push({ brand, material });
      }
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
  const selectedPresetOption = reactExports.useMemo(
    () => findPresetOption(formData.slicer_filament, filamentOptions),
    [formData.slicer_filament, filamentOptions]
  );
  reactExports.useEffect(() => {
    if (isOpen) {
      if (spool) {
        setFormData({
          material: spool.material || "",
          subtype: spool.subtype || "",
          brand: spool.brand || "",
          color_name: spool.color_name || "",
          rgba: spool.rgba || "808080FF",
          label_weight: spool.label_weight || 1e3,
          core_weight: spool.core_weight || 250,
          core_weight_catalog_id: spool.core_weight_catalog_id ?? null,
          weight_used: spool.weight_used || 0,
          slicer_filament: spool.slicer_filament || "",
          note: spool.note || "",
          cost_per_kg: spool.cost_per_kg ?? null
        });
        setPresetInputValue(spool.slicer_filament_name || spool.slicer_filament || "");
        if (spool.k_profiles && spool.k_profiles.length > 0) {
          const profileKeys = /* @__PURE__ */ new Set();
          for (const p of spool.k_profiles) {
            if (p.cali_idx !== null && p.cali_idx !== void 0) {
              profileKeys.add(`${p.printer_id}:${p.cali_idx}:${p.extruder ?? "null"}`);
            }
          }
          setSelectedProfiles(profileKeys);
        } else {
          setSelectedProfiles(/* @__PURE__ */ new Set());
        }
      } else {
        setFormData(defaultFormData);
        setPresetInputValue("");
        setSelectedProfiles(/* @__PURE__ */ new Set());
        setQuickAdd(false);
        setQuantity(1);
      }
      setErrors({});
      setActiveTab("filament");
      setWeightTouched(false);
    }
  }, [isOpen, spool]);
  reactExports.useEffect(() => {
    if (isOpen && resolvedCalibrations.length > 0) {
      setExpandedPrinters(new Set(resolvedCalibrations.map((p) => String(p.printer.id))));
    }
  }, [isOpen, resolvedCalibrations]);
  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (key === "weight_used") setWeightTouched(true);
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: void 0 }));
    }
  };
  const handleColorUsed = (color) => {
    setRecentColors((prev) => saveRecentColor(color, prev));
  };
  const createMutation = useMutation({
    mutationFn: (data) => api.createSpool(data),
    onSuccess: async (newSpool) => {
      if (selectedProfiles.size > 0 && newSpool?.id) {
        await saveKProfiles(newSpool.id);
      }
      await queryClient.invalidateQueries({ queryKey: ["inventory-spools"] });
      if (onSpoolsCreated) onSpoolsCreated([newSpool]);
      showToast(t("inventory.spoolCreated"), "success");
      onClose();
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const bulkCreateMutation = useMutation({
    mutationFn: ({ data, qty }) => api.bulkCreateSpools(data, qty),
    onSuccess: async (newSpools) => {
      if (selectedProfiles.size > 0) {
        for (const spool2 of newSpools) {
          await saveKProfiles(spool2.id);
        }
      }
      await queryClient.invalidateQueries({ queryKey: ["inventory-spools"] });
      if (onSpoolsCreated) onSpoolsCreated(newSpools);
      showToast(t("inventory.spoolsCreated", { count: newSpools.length }), "success");
      onClose();
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const updateMutation = useMutation({
    mutationFn: (data) => api.updateSpool(spool.id, data),
    onSuccess: async () => {
      if (spool?.id) {
        await saveKProfiles(spool.id);
      }
      await queryClient.invalidateQueries({ queryKey: ["inventory-spools"] });
      showToast(t("inventory.spoolUpdated"), "success");
      onClose();
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const deleteTagMutation = useMutation({
    mutationFn: () => api.updateSpool(spool.id, { tag_uid: null, tray_uuid: null, tag_type: null, data_origin: null }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["inventory-spools"] });
      showToast(t("inventory.tagDeleted", "Tag removed"), "success");
      onClose();
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const { data: assignments } = useQuery({
    queryKey: ["spool-assignments"],
    queryFn: () => api.getAssignments(),
    enabled: isOpen && isEditing
  });
  const spoolAssignment = spool ? assignments?.find((a) => a.spool_id === spool.id) : void 0;
  const unassignMutation = useMutation({
    mutationFn: () => {
      if (!spoolAssignment) throw new Error("No assignment");
      return api.unassignSpool(spoolAssignment.printer_id, spoolAssignment.ams_id, spoolAssignment.tray_id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["spool-assignments"] });
      showToast(t("inventory.unassignSuccess", "Spool unassigned"), "success");
      onClose();
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
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
      const pc = resolvedCalibrations.find((p) => p.printer.id === printerId);
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
      try {
        await api.saveSpoolKProfiles(spoolId, profiles);
      } catch (e) {
        console.error("Failed to save K-profiles:", e);
      }
    }
  };
  reactExports.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const handleSubmit = () => {
    const validation = validateForm(formData, quickAdd);
    if (!validation.isValid) {
      setErrors(validation.errors);
      if (validation.errors.slicer_filament || validation.errors.material || validation.errors.brand || validation.errors.subtype) {
        setActiveTab("filament");
      }
      return;
    }
    const presetName = selectedPresetOption?.displayName || presetInputValue || null;
    const data = {
      material: formData.material,
      subtype: formData.subtype || null,
      brand: formData.brand || null,
      color_name: formData.color_name || null,
      rgba: formData.rgba || null,
      label_weight: formData.label_weight,
      core_weight: formData.core_weight,
      core_weight_catalog_id: formData.core_weight_catalog_id,
      slicer_filament: formData.slicer_filament || null,
      slicer_filament_name: presetName,
      nozzle_temp_min: null,
      nozzle_temp_max: null,
      note: formData.note || null,
      cost_per_kg: formData.cost_per_kg
    };
    if (!isEditing || weightTouched) {
      data.weight_used = formData.weight_used;
    }
    if (isEditing) {
      updateMutation.mutate(data);
    } else if (quantity > 1) {
      bulkCreateMutation.mutate({ data, qty: quantity });
    } else {
      createMutation.mutate(data);
    }
  };
  const isPending = createMutation.isPending || bulkCreateMutation.isPending || updateMutation.isPending || deleteTagMutation.isPending || unassignMutation.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-xl mx-4 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-xl shadow-2xl max-h-[90vh] flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: isEditing ? t("inventory.editSpool") : t("inventory.addSpool") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "p-1 text-bambu-gray hover:text-white rounded transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b border-bambu-dark-tertiary flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: t("inventory.quickAdd") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setQuickAdd(!quickAdd);
              if (!quickAdd) setActiveTab("filament");
            },
            className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${quickAdd ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${quickAdd ? "translate-x-4" : "translate-x-0.5"}`
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-bambu-dark-tertiary flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveTab("filament"),
            className: `flex-1 px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === "filament" ? "text-bambu-green border-b-2 border-bambu-green" : "text-bambu-gray hover:text-white"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-4 h-4" }),
              t("inventory.filamentInfoTab")
            ]
          }
        ),
        !quickAdd && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveTab("pa-profile"),
            className: `flex-1 px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === "pa-profile" ? "text-bambu-green border-b-2 border-bambu-green" : "text-bambu-gray hover:text-white"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Beaker, { className: "w-4 h-4" }),
              t("inventory.paProfileTab"),
              selectedProfileCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded-full bg-bambu-green/20 text-bambu-green", children: selectedProfileCount })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 overflow-y-auto flex-1", style: { scrollbarGutter: "stable" }, children: activeTab === "filament" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-bambu-gray uppercase tracking-wide mb-3", children: t("inventory.filamentInfo") }),
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
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-bambu-gray uppercase tracking-wide mb-3", children: t("inventory.color") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ColorSection,
            {
              formData,
              updateField,
              recentColors,
              onColorUsed: handleColorUsed,
              catalogColors: colorCatalog
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-bambu-gray uppercase tracking-wide mb-3", children: t("inventory.additional") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AdditionalSection,
            {
              formData,
              updateField,
              spoolCatalog,
              currencySymbol
            }
          )
        ] }),
        isEditing && spool && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpoolUsageHistory, { spoolId: spool.id }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        PAProfileSection,
        {
          formData,
          updateField,
          printersWithCalibrations: resolvedCalibrations,
          selectedProfiles,
          setSelectedProfiles,
          expandedPrinters,
          setExpandedPrinters
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 p-4 border-t border-bambu-dark-tertiary flex-shrink-0", children: [
        isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mr-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              onClick: () => deleteTagMutation.mutate(),
              disabled: isPending || !spool?.tag_uid,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4" }),
                t("inventory.deleteTag", "Delete Tag")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              onClick: () => unassignMutation.mutate(),
              disabled: isPending || !spoolAssignment,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Unlink, { className: "w-4 h-4" }),
                t("inventory.unassignSpool", "Unassign")
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 ml-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("common.cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleSubmit,
              disabled: isPending,
              children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                t("common.saving")
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                isEditing ? t("common.save") : t("inventory.addSpool")
              ] })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function ColumnConfigModal({ isOpen, onClose, columns, defaultColumns, onSave }) {
  const { t } = useTranslation();
  const [localColumns, setLocalColumns] = reactExports.useState(columns);
  const [draggedIndex, setDraggedIndex] = reactExports.useState(null);
  const draggedIndexRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isOpen) {
      setLocalColumns(columns.map((c) => ({ ...c })));
    }
  }, [isOpen, columns]);
  reactExports.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const toggleVisibility = (index) => {
    setLocalColumns(
      (prev) => prev.map((col, i) => i === index ? { ...col, visible: !col.visible } : col)
    );
  };
  const moveColumn = (fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= localColumns.length) return;
    setLocalColumns((prev) => {
      const newColumns = [...prev];
      const [moved] = newColumns.splice(fromIndex, 1);
      newColumns.splice(toIndex, 0, moved);
      return newColumns;
    });
  };
  const handleDragStart = (e, index) => {
    draggedIndexRef.current = index;
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const from = draggedIndexRef.current;
    if (from !== null && from !== index) {
      moveColumn(from, index);
      draggedIndexRef.current = index;
      setDraggedIndex(index);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
  };
  const handleDragEnd = () => {
    draggedIndexRef.current = null;
    setDraggedIndex(null);
  };
  const resetToDefaults = () => {
    setLocalColumns(defaultColumns.map((c) => ({ ...c })));
  };
  const handleSave = () => {
    onSave(localColumns);
    onClose();
  };
  const visibleCount = localColumns.filter((c) => c.visible).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md max-h-[80vh] flex flex-col", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: t("inventory.configureColumns") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-bambu-gray mb-4", children: [
      t("inventory.configureColumnsDesc"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-bambu-gray/60", children: [
        "(",
        visibleCount,
        " ",
        t("inventory.of"),
        " ",
        localColumns.length,
        " ",
        t("inventory.visible"),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 overflow-y-auto flex-1 min-h-0 pr-1", children: localColumns.map((column, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex items-center gap-2 p-2 rounded-lg border transition-colors ${draggedIndex === index ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary bg-bambu-dark-tertiary/50"} ${!column.visible ? "opacity-50" : ""}`,
        draggable: true,
        onDragStart: (e) => handleDragStart(e, index),
        onDragOver: (e) => handleDragOver(e, index),
        onDrop: handleDrop,
        onDragEnd: handleDragEnd,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cursor-grab text-bambu-gray/50 hover:text-bambu-gray", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 font-medium text-sm text-white", children: column.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => moveColumn(index, index - 1),
                disabled: index === 0,
                className: "p-1 rounded text-bambu-gray hover:bg-bambu-dark-secondary disabled:opacity-30 disabled:cursor-not-allowed",
                title: t("inventory.moveUp"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => moveColumn(index, index + 1),
                disabled: index === localColumns.length - 1,
                className: "p-1 rounded text-bambu-gray hover:bg-bambu-dark-secondary disabled:opacity-30 disabled:cursor-not-allowed",
                title: t("inventory.moveDown"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toggleVisibility(index),
              className: `p-1.5 rounded transition-colors ${column.visible ? "text-bambu-green hover:bg-bambu-green/10" : "text-bambu-gray/50 hover:bg-bambu-dark-secondary"}`,
              title: column.visible ? t("inventory.hideColumn") : t("inventory.showColumn"),
              children: column.visible ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" })
            }
          )
        ]
      },
      column.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-4 pt-4 border-t border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: resetToDefaults, className: "mr-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
        t("inventory.reset")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("inventory.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSave, children: t("inventory.applyChanges") })
    ] })
  ] }) }) });
}
function spoolGroupKey(s) {
  return `${s.material}|${s.subtype || ""}|${s.brand || ""}|${s.color_name || ""}|${s.rgba || ""}|${s.label_weight}`;
}
const COLUMN_CONFIG_KEY = "bambuddy-inventory-columns";
const DEFAULT_COLUMNS = [
  { id: "id", label: "#", visible: true },
  { id: "added_time", label: "Added", visible: true },
  { id: "encode_time", label: "Encoded", visible: false },
  { id: "last_used_time", label: "Last Used", visible: false },
  { id: "rgba", label: "Color", visible: true },
  { id: "material", label: "Material", visible: true },
  { id: "subtype", label: "Subtype", visible: true },
  { id: "color_name", label: "Color Name", visible: false },
  { id: "brand", label: "Brand", visible: true },
  { id: "slicer_filament", label: "Slicer Filament", visible: false },
  { id: "location", label: "Location", visible: true },
  { id: "label_weight", label: "Label", visible: true },
  { id: "net", label: "Net", visible: true },
  { id: "gross", label: "Gross", visible: false },
  { id: "added_full", label: "Full", visible: false },
  { id: "used", label: "Used", visible: false },
  { id: "printed_total", label: "Printed Total", visible: false },
  { id: "printed_since_weight", label: "Printed Since Weight", visible: false },
  { id: "note", label: "Note", visible: false },
  { id: "pa_k", label: "PA(K)", visible: true },
  { id: "tag_id", label: "Tag ID", visible: false },
  { id: "data_origin", label: "Data Origin", visible: false },
  { id: "tag_type", label: "Linked Tag Type", visible: false },
  { id: "stock", label: "Stock", visible: false },
  { id: "remaining", label: "Remaining", visible: true },
  { id: "spool_name", label: "Spool", visible: false },
  { id: "cost_per_kg", label: "Cost/kg", visible: false },
  { id: "weight_check", label: "Weight Check", visible: false }
];
function loadColumnConfig() {
  try {
    const stored = localStorage.getItem(COLUMN_CONFIG_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const defaultIds = new Set(DEFAULT_COLUMNS.map((c) => c.id));
      const storedIds = new Set(parsed.map((c) => c.id));
      const validStored = parsed.filter((c) => defaultIds.has(c.id));
      const newColumns = DEFAULT_COLUMNS.filter((c) => !storedIds.has(c.id));
      return [...validStored, ...newColumns];
    }
  } catch {
  }
  return DEFAULT_COLUMNS.map((c) => ({ ...c }));
}
function saveColumnConfig(config) {
  try {
    localStorage.setItem(COLUMN_CONFIG_KEY, JSON.stringify(config));
  } catch {
  }
}
function formatWeight(g, useKg = false) {
  if (useKg && g >= 1e3) return `${(g / 1e3).toFixed(1)}kg`;
  return `${Math.round(g)}g`;
}
const MATERIAL_COLORS = {
  PLA: "bg-green-500/20 text-green-400",
  ABS: "bg-red-500/20 text-red-400",
  PETG: "bg-blue-500/20 text-blue-400",
  TPU: "bg-purple-500/20 text-purple-400",
  ASA: "bg-orange-500/20 text-orange-400",
  PA: "bg-yellow-500/20 text-yellow-400",
  PC: "bg-cyan-500/20 text-cyan-400",
  PET: "bg-sky-500/20 text-sky-400"
};
function formatInventoryDate(dateStr, dateFormat = "system") {
  if (!dateStr) return "-";
  const date = parseUTCDate(dateStr);
  if (!date) return "-";
  return formatDateInput(date, dateFormat);
}
const columnHeaders = {
  id: () => "#",
  added_time: () => "Added",
  encode_time: () => "Encoded",
  last_used_time: () => "Last Used",
  rgba: (t) => t("inventory.color"),
  material: (t) => t("inventory.material"),
  subtype: (t) => t("inventory.subtype"),
  color_name: (t) => t("inventory.colorName"),
  brand: (t) => t("inventory.brand"),
  slicer_filament: (t) => t("inventory.slicerFilament"),
  location: () => "Location",
  label_weight: (t) => t("inventory.labelWeight"),
  net: (t) => t("inventory.net"),
  gross: () => "Gross",
  added_full: () => "Full",
  used: (t) => t("inventory.weightUsed"),
  printed_total: () => "Printed Total",
  printed_since_weight: () => "Printed Since Weight",
  note: (t) => t("inventory.note"),
  pa_k: () => "PA(K)",
  tag_id: () => "Tag ID",
  data_origin: () => "Data Origin",
  tag_type: () => "Linked Tag Type",
  stock: (t) => t("inventory.stock"),
  remaining: (t) => t("inventory.remaining"),
  spool_name: (t) => t("inventory.spoolName"),
  cost_per_kg: (t) => t("inventory.costPerKg"),
  weight_check: (t) => t("inventory.weightCheck")
};
const columnCells = {
  id: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: spool.id }),
  added_time: ({ spool, dateFormat }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: formatInventoryDate(spool.created_at, dateFormat) }),
  encode_time: ({ spool, dateFormat }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: formatInventoryDate(spool.encode_time, dateFormat) }),
  last_used_time: ({ spool, dateFormat }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: spool.last_used ? formatInventoryDate(spool.last_used, dateFormat) : "Never" }),
  rgba: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "w-5 h-5 rounded-full border border-black/20 flex-shrink-0",
      style: { backgroundColor: spool.rgba ? `#${spool.rgba.substring(0, 6)}` : "#808080" },
      title: spool.rgba ? `#${spool.rgba.substring(0, 6)}` : void 0
    }
  ) }),
  material: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: spool.material }),
  subtype: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: spool.subtype || "-" }),
  color_name: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: resolveSpoolColorName(spool.color_name, spool.rgba) || "-" }),
  brand: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: spool.brand || "-" }),
  slicer_filament: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", title: spool.slicer_filament || void 0, children: spool.slicer_filament_name || spool.slicer_filament || "-" }),
  location: ({ spool, assignmentMap }) => {
    const assignment = assignmentMap[spool.id];
    if (!assignment) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: "-" });
    const printerLabel = assignment.printer_name || `Printer ${assignment.printer_id}`;
    const isExternal = assignment.ams_id === 254 || assignment.ams_id === 255;
    const isHt = !isExternal && assignment.ams_id >= 128;
    const slotLabel = formatSlotLabel(assignment.ams_id, assignment.tray_id, isHt, isExternal);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-purple-500/20 text-purple-400", children: [
      printerLabel,
      " ",
      slotLabel,
      assignment.ams_label ? ` (${assignment.ams_label})` : ""
    ] });
  },
  label_weight: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: formatWeight(spool.label_weight) }),
  net: ({ remaining }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: formatWeight(remaining) }),
  gross: ({ spool, remaining }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: formatWeight(remaining + spool.core_weight) }),
  added_full: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: spool.added_full == null ? "-" : spool.added_full ? "Yes" : "No" }),
  used: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: spool.weight_used > 0 ? formatWeight(spool.weight_used) : "-" }),
  printed_total: () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray/50", children: "-" }),
  printed_since_weight: () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray/50", children: "-" }),
  note: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray max-w-[150px] truncate block", title: spool.note || void 0, children: spool.note || "-" }),
  pa_k: ({ spool }) => {
    const count = spool.k_profiles?.length ?? 0;
    if (count === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: "-" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-bambu-green/20 text-bambu-green", children: "K" });
  },
  tag_id: ({ spool }) => {
    const tag = spool.tag_uid || spool.tray_uuid;
    if (!tag) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray/50", children: "-" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray font-mono", title: tag, children: tag.length > 12 ? `${tag.slice(0, 6)}...${tag.slice(-4)}` : tag });
  },
  data_origin: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: spool.data_origin || "-" }),
  tag_type: ({ spool }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: spool.tag_type || "-" }),
  stock: ({ spool, t }) => {
    if (!spool.slicer_filament) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-amber-500/20 text-amber-400", children: t("inventory.stock") });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: "-" });
  },
  remaining: ({ remaining, pct }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-bambu-dark-tertiary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-full rounded-full ${pct > 50 ? "bg-bambu-green" : pct > 20 ? "bg-yellow-500" : "bg-red-500"}`,
        style: { width: `${Math.min(pct, 100)}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray min-w-[40px] text-right", children: [
      Math.round(remaining),
      "g"
    ] })
  ] }),
  spool_name: ({ spool, catalogMap }) => {
    const entry = spool.core_weight_catalog_id != null ? catalogMap[spool.core_weight_catalog_id] : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: entry?.name || "-" });
  },
  cost_per_kg: ({ spool, currencySymbol }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: spool.cost_per_kg != null ? `${currencySymbol}${spool.cost_per_kg.toFixed(2)}` : "-" }),
  weight_check: ({ spool, onSyncWeight }) => {
    const scaleWeight = spool.last_scale_weight;
    if (scaleWeight == null) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray/50", title: "No scale measurement", children: "-" });
    const coreWeight = spool.core_weight || 0;
    const calculatedWeight = Math.max(0, spool.label_weight - spool.weight_used) + coreWeight;
    let difference;
    let isMatch;
    if (scaleWeight < coreWeight) {
      difference = scaleWeight - coreWeight;
      isMatch = true;
    } else {
      difference = scaleWeight - calculatedWeight;
      isMatch = Math.abs(difference) <= 50;
    }
    const diffStr = difference > 0 ? `+${Math.round(difference)}` : `${Math.round(difference)}`;
    const tooltip = isMatch ? `Scale: ${Math.round(scaleWeight)}g
Calculated: ${Math.round(calculatedWeight)}g
Difference: ${diffStr}g (within tolerance)` : `Scale: ${Math.round(scaleWeight)}g
Calculated: ${Math.round(calculatedWeight)}g
Difference: ${diffStr}g (mismatch!)`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex items-center gap-1 text-sm font-medium ${isMatch ? "text-green-400" : "text-yellow-400"}`,
        title: tooltip,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            Math.round(scaleWeight),
            "g"
          ] }),
          isMatch ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
            onSyncWeight && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSyncWeight(spool);
                },
                className: "p-1 hover:bg-bambu-green/20 rounded transition-colors text-bambu-green",
                title: "Sync: trust scale weight and reset tracking",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ]
      }
    );
  }
};
const columnSortValues = {
  id: (s) => s.id,
  added_time: (s) => s.created_at || "",
  encode_time: (s) => s.encode_time || "",
  last_used_time: (s) => s.last_used || "",
  material: (s) => (s.material || "").toLowerCase(),
  subtype: (s) => (s.subtype || "").toLowerCase(),
  color_name: (s) => (s.color_name || "").toLowerCase(),
  brand: (s) => (s.brand || "").toLowerCase(),
  slicer_filament: (s) => (s.slicer_filament_name || s.slicer_filament || "").toLowerCase(),
  location: (s, am) => {
    const a = am[s.id];
    if (!a) return "";
    const isExt = a.ams_id === 254 || a.ams_id === 255;
    const isHt = !isExt && a.ams_id >= 128;
    const label = a.ams_label ? ` (${a.ams_label})` : "";
    return `${a.printer_name || ""} ${formatSlotLabel(a.ams_id, a.tray_id, isHt, isExt)}${label}`;
  },
  label_weight: (s) => s.label_weight,
  net: (s) => Math.max(0, s.label_weight - s.weight_used),
  gross: (s) => Math.max(0, s.label_weight - s.weight_used) + s.core_weight,
  used: (s) => s.weight_used,
  remaining: (s) => s.label_weight > 0 ? Math.max(0, s.label_weight - s.weight_used) / s.label_weight : 0,
  note: (s) => (s.note || "").toLowerCase(),
  data_origin: (s) => (s.data_origin || "").toLowerCase(),
  tag_type: (s) => (s.tag_type || "").toLowerCase(),
  stock: (s) => s.slicer_filament ? 1 : 0,
  spool_name: (s) => s.core_weight_catalog_id ?? 0,
  cost_per_kg: (s) => s.cost_per_kg ?? 0,
  weight_check: (s) => {
    if (s.last_scale_weight == null) return -1;
    const expectedGross = Math.max(0, s.label_weight - s.weight_used) + s.core_weight;
    return Math.abs(s.last_scale_weight - expectedGross);
  }
};
const SORT_STATE_KEY = "bambuddy-inventory-sort";
function loadSortState() {
  try {
    const stored = localStorage.getItem(SORT_STATE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
  }
  return null;
}
function saveSortState(state) {
  try {
    if (state) {
      localStorage.setItem(SORT_STATE_KEY, JSON.stringify(state));
    } else {
      localStorage.removeItem(SORT_STATE_KEY);
    }
  } catch {
  }
}
function InventoryPageRouter() {
  const { data: spoolmanSettings } = useQuery({
    queryKey: ["spoolman-settings"],
    queryFn: api.getSpoolmanSettings,
    staleTime: 5 * 60 * 1e3
  });
  if (spoolmanSettings?.spoolman_enabled === "true" && spoolmanSettings?.spoolman_url) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        src: `${spoolmanSettings.spoolman_url.replace(/\/+$/, "")}/spool`,
        className: "h-full w-full border-0",
        title: "Spoolman",
        sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InventoryPage, {});
}
function InventoryPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [formModal, setFormModal] = reactExports.useState(null);
  const [confirmAction, setConfirmAction] = reactExports.useState(null);
  const [archiveFilter, setArchiveFilter] = reactExports.useState("active");
  const [usageFilter, setUsageFilter] = reactExports.useState("all");
  const [materialFilter, setMaterialFilter] = reactExports.useState("");
  const [brandFilter, setBrandFilter] = reactExports.useState("");
  const [spoolFilter, setSpoolFilter] = reactExports.useState("");
  const [stockFilter, setStockFilter] = reactExports.useState("all");
  const [search, setSearch] = reactExports.useState("");
  const [viewMode, setViewMode] = reactExports.useState("table");
  const [sortState, setSortState] = reactExports.useState(loadSortState);
  const [columnConfig, setColumnConfig] = reactExports.useState(loadColumnConfig);
  const [showColumnModal, setShowColumnModal] = reactExports.useState(false);
  const [groupSimilar, setGroupSimilar] = reactExports.useState(() => {
    try {
      return localStorage.getItem("bambuddy-inventory-group") === "true";
    } catch {
      return false;
    }
  });
  const [expandedGroups, setExpandedGroups] = reactExports.useState(/* @__PURE__ */ new Set());
  const [pageIndex, setPageIndex] = reactExports.useState(0);
  const [pageSize, setPageSize] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("bambuddy-inventory-pageSize");
      if (stored) {
        const n = Number(stored);
        if ([15, 30, 50, 100, -1].includes(n)) return n;
      }
    } catch {
    }
    return 15;
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const dateFormat = settings?.date_format || "system";
  const { data: spools, isLoading } = useQuery({
    queryKey: ["inventory-spools"],
    queryFn: () => api.getSpools(true),
    // Always fetch all, filter client-side
    refetchInterval: 3e4
  });
  const { data: assignments } = useQuery({
    queryKey: ["spool-assignments"],
    queryFn: () => api.getAssignments(),
    refetchInterval: 3e4
  });
  const { data: catalogEntries } = useQuery({
    queryKey: ["spool-catalog"],
    queryFn: () => api.getSpoolCatalog()
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => api.deleteSpool(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventory-spools"] });
      showToast(t("inventory.spoolDeleted"), "success");
    }
  });
  const archiveMutation = useMutation({
    mutationFn: (id) => api.archiveSpool(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventory-spools"] });
      showToast(t("inventory.spoolArchived"), "success");
    }
  });
  const restoreMutation = useMutation({
    mutationFn: (id) => api.restoreSpool(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventory-spools"] });
      showToast(t("inventory.spoolRestored"), "success");
    }
  });
  const handleSyncWeight = async (spool) => {
    if (spool.last_scale_weight == null) return;
    try {
      await spoolbuddyApi.updateSpoolWeight(spool.id, spool.last_scale_weight);
      queryClient.invalidateQueries({ queryKey: ["inventory-spools"] });
      const spoolName = [spool.brand, spool.material, spool.color_name].filter(Boolean).join(" ");
      showToast(`Synced "${spoolName}" to scale weight`, "success");
    } catch {
      showToast("Failed to sync weight", "error");
    }
  };
  const lowStockThreshold = settings?.low_stock_threshold ?? 20;
  const [showThresholdInput, setShowThresholdInput] = reactExports.useState(false);
  const [thresholdInput, setThresholdInput] = reactExports.useState(lowStockThreshold.toString());
  reactExports.useEffect(() => {
    if (!showThresholdInput) {
      setThresholdInput(lowStockThreshold.toString());
    }
  }, [lowStockThreshold, showThresholdInput]);
  const updateThresholdMutation = useMutation({
    mutationFn: (threshold) => api.updateSettings({ low_stock_threshold: threshold }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      showToast(t("common.saved"), "success");
      setShowThresholdInput(false);
    },
    onError: () => {
      showToast(t("inventory.lowStockThresholdError"), "error");
    }
  });
  const stats = reactExports.useMemo(() => {
    if (!spools) return null;
    let totalWeight = 0;
    let totalConsumed = 0;
    let lowStock = 0;
    let activeCount = 0;
    const byMaterial = {};
    for (const s of spools) {
      if (s.archived_at) continue;
      activeCount++;
      const remaining = Math.max(0, s.label_weight - s.weight_used);
      totalWeight += remaining;
      totalConsumed += s.weight_used;
      const pct = s.label_weight > 0 ? remaining / s.label_weight * 100 : 0;
      if (pct < lowStockThreshold) lowStock++;
      const mat = s.material || "Unknown";
      if (!byMaterial[mat]) byMaterial[mat] = { count: 0, weight: 0 };
      byMaterial[mat].count++;
      byMaterial[mat].weight += remaining;
    }
    return { totalWeight, totalConsumed, lowStock, byMaterial, totalSpools: activeCount };
  }, [spools, lowStockThreshold]);
  const inPrinterCount = assignments?.length ?? 0;
  const currencySymbol = getCurrencySymbol(settings?.currency || "USD");
  const assignmentMap = reactExports.useMemo(() => {
    const map = {};
    for (const a of assignments || []) {
      map[a.spool_id] = a;
    }
    return map;
  }, [assignments]);
  const catalogMap = reactExports.useMemo(() => {
    const map = {};
    for (const e of catalogEntries || []) {
      map[e.id] = e;
    }
    return map;
  }, [catalogEntries]);
  const topMaterials = reactExports.useMemo(() => {
    if (!stats) return [];
    return Object.entries(stats.byMaterial).sort((a, b) => b[1].weight - a[1].weight).slice(0, 4);
  }, [stats]);
  const filteredSpools = reactExports.useMemo(() => {
    let filtered = spools || [];
    if (archiveFilter === "active") {
      filtered = filtered.filter((s) => !s.archived_at);
    } else {
      filtered = filtered.filter((s) => !!s.archived_at);
    }
    if (usageFilter === "used") {
      filtered = filtered.filter((s) => s.weight_used > 0);
    } else if (usageFilter === "new") {
      filtered = filtered.filter((s) => s.weight_used === 0);
    } else if (usageFilter === "lowstock") {
      filtered = filtered.filter((s) => {
        const remaining = Math.max(0, s.label_weight - s.weight_used);
        const pct = s.label_weight > 0 ? remaining / s.label_weight * 100 : 0;
        return pct < lowStockThreshold;
      });
    }
    if (materialFilter) {
      filtered = filtered.filter((s) => s.material === materialFilter);
    }
    if (brandFilter) {
      filtered = filtered.filter((s) => s.brand === brandFilter);
    }
    if (spoolFilter) {
      const catalogId = Number(spoolFilter);
      filtered = filtered.filter((s) => s.core_weight_catalog_id === catalogId);
    }
    if (stockFilter === "stock") {
      filtered = filtered.filter((s) => !s.slicer_filament);
    } else if (stockFilter === "configured") {
      filtered = filtered.filter((s) => !!s.slicer_filament);
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (s) => s.brand?.toLowerCase().includes(q) || s.material.toLowerCase().includes(q) || s.color_name?.toLowerCase().includes(q) || s.subtype?.toLowerCase().includes(q) || s.note?.toLowerCase().includes(q) || s.slicer_filament_name?.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [spools, archiveFilter, usageFilter, materialFilter, brandFilter, spoolFilter, stockFilter, search, lowStockThreshold]);
  const resetPage = () => setPageIndex(0);
  const uniqueMaterials = [...new Set(spools?.map((s) => s.material) || [])].sort();
  const uniqueBrands = [...new Set(spools?.map((s) => s.brand).filter(Boolean) || [])].sort();
  const uniqueSpoolCatalogIds = [...new Set(spools?.map((s) => s.core_weight_catalog_id).filter((id) => id != null) || [])].sort((a, b) => {
    const nameA = (catalogMap[a]?.name || "").toLowerCase();
    const nameB = (catalogMap[b]?.name || "").toLowerCase();
    return nameA.localeCompare(nameB);
  });
  const hasActiveFilters = archiveFilter !== "active" || usageFilter !== "all" || !!materialFilter || !!brandFilter || !!spoolFilter || stockFilter !== "all" || !!search;
  const handleColumnConfigSave = (config) => {
    setColumnConfig(config);
    saveColumnConfig(config);
  };
  const visibleColumns = reactExports.useMemo(
    () => columnConfig.filter((c) => c.visible).map((c) => c.id),
    [columnConfig]
  );
  const handleSort = (colId) => {
    if (!columnSortValues[colId]) return;
    setSortState((prev) => {
      let next;
      if (prev?.column === colId) {
        next = prev.direction === "asc" ? { column: colId, direction: "desc" } : null;
      } else {
        next = { column: colId, direction: "asc" };
      }
      saveSortState(next);
      return next;
    });
    resetPage();
  };
  const sortedSpools = reactExports.useMemo(() => {
    if (!sortState) return filteredSpools;
    const extractor = columnSortValues[sortState.column];
    if (!extractor) return filteredSpools;
    const sorted = [...filteredSpools].sort((a, b) => {
      const va = extractor(a, assignmentMap);
      const vb = extractor(b, assignmentMap);
      if (va < vb) return sortState.direction === "asc" ? -1 : 1;
      if (va > vb) return sortState.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredSpools, sortState, assignmentMap]);
  const displayItems = reactExports.useMemo(() => {
    if (!groupSimilar) return sortedSpools.map((s) => ({ type: "single", spool: s }));
    const groups = /* @__PURE__ */ new Map();
    for (const spool of sortedSpools) {
      if (spool.weight_used > 0 || assignmentMap[spool.id]) ;
      else {
        const key = spoolGroupKey(spool);
        const arr = groups.get(key);
        if (arr) arr.push(spool);
        else groups.set(key, [spool]);
      }
    }
    const items = [];
    const processedKeys = /* @__PURE__ */ new Set();
    for (const spool of sortedSpools) {
      if (spool.weight_used > 0 || assignmentMap[spool.id]) {
        items.push({ type: "single", spool });
        continue;
      }
      const key = spoolGroupKey(spool);
      if (processedKeys.has(key)) continue;
      processedKeys.add(key);
      const members = groups.get(key);
      if (members.length === 1) {
        items.push({ type: "single", spool: members[0] });
      } else {
        items.push({ type: "group", key, spools: members, representative: members[0] });
      }
    }
    return items;
  }, [sortedSpools, groupSimilar, assignmentMap]);
  const showAll = pageSize === -1;
  const totalDisplayItems = displayItems.length;
  const effectivePageSize = showAll ? totalDisplayItems || 1 : pageSize;
  const totalPages = Math.max(1, Math.ceil(totalDisplayItems / effectivePageSize));
  const safePageIndex = showAll ? 0 : Math.min(pageIndex, totalPages - 1);
  const pagedItems = showAll ? displayItems : displayItems.slice(safePageIndex * effectivePageSize, (safePageIndex + 1) * effectivePageSize);
  const toggleGroupSimilar = () => {
    const next = !groupSimilar;
    setGroupSimilar(next);
    setExpandedGroups(/* @__PURE__ */ new Set());
    resetPage();
    try {
      localStorage.setItem("bambuddy-inventory-group", String(next));
    } catch {
    }
  };
  const toggleGroupExpand = (key) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setPageIndex(0);
    try {
      localStorage.setItem("bambuddy-inventory-pageSize", String(size));
    } catch {
    }
  };
  const clearAllFilters = () => {
    setArchiveFilter("active");
    setUsageFilter("all");
    setMaterialFilter("");
    setBrandFilter("");
    setSpoolFilter("");
    setStockFilter("all");
    setSearch("");
    resetPage();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-6 h-6 text-bambu-green" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: t("inventory.title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1 ml-9", children: t("inventory.noSpools").split(".")[0] ? "" : "" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setFormModal({ spool: null }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        t("inventory.addSpool")
      ] })
    ] }),
    stats && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-bambu-green" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray font-medium uppercase tracking-wide", children: t("inventory.totalInventory") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-white", children: formatWeight(stats.totalWeight, true) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-bambu-gray mt-1", children: [
          stats.totalSpools,
          " ",
          stats.totalSpools !== 1 ? t("inventory.spools") : t("inventory.spool")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray font-medium uppercase tracking-wide", children: t("inventory.totalConsumed") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-white", children: formatWeight(stats.totalConsumed, true) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray mt-1", children: t("inventory.sinceTracking") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-green-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray font-medium uppercase tracking-wide", children: t("inventory.byMaterial") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-1", children: topMaterials.map(([mat, data]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${MATERIAL_COLORS[mat] || "bg-bambu-dark-tertiary text-bambu-gray"}`,
            children: [
              mat,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70", children: formatWeight(data.weight, true) })
            ]
          },
          mat
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4 text-purple-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray font-medium uppercase tracking-wide", children: t("inventory.inPrinter") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-white", children: inPrinterCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray mt-1", children: t("inventory.loadedInAms") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray font-medium uppercase tracking-wide", children: t("inventory.lowStock") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-bold ${stats.lowStock > 0 ? "text-yellow-400" : "text-white"}`, children: stats.lowStock }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray mt-1 flex items-center gap-2", children: showThresholdInput ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              const val = parseFloat(thresholdInput);
              if (!isNaN(val) && val >= 0.1 && val <= 99.9) {
                updateThresholdMutation.mutate(val);
              } else {
                showToast(t("inventory.lowStockThresholdError"), "error");
              }
            },
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: "<" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  inputMode: "decimal",
                  pattern: "^\\d{0,2}(\\.\\d?)?$",
                  maxLength: 4,
                  value: thresholdInput,
                  onChange: (e) => {
                    const val = e.target.value.replace(/[^\d.]/g, "");
                    if (/^\d{0,2}(\.\d?)?$/.test(val)) {
                      setThresholdInput(val);
                    }
                  },
                  className: "px-1.5 py-1 rounded border border-bambu-dark-tertiary text-xs text-white bg-bambu-dark-secondary focus:outline-none focus:border-bambu-green w-14 text-center",
                  onWheel: (e) => e.currentTarget.blur(),
                  disabled: updateThresholdMutation.isPending
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: "%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "sm", disabled: updateThresholdMutation.isPending, children: t("common.save") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", size: "sm", variant: "ghost", onClick: () => setShowThresholdInput(false), disabled: updateThresholdMutation.isPending, children: t("common.cancel") })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
            "< ",
            lowStockThreshold,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "p-1.5 text-bambu-gray hover:text-white rounded transition-colors",
              title: t("common.edit"),
              onClick: () => {
                setThresholdInput(lowStockThreshold.toString());
                setShowThresholdInput(true);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4" })
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray/50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: search,
            onChange: (e) => {
              setSearch(e.target.value);
              resetPage();
            },
            placeholder: t("inventory.search"),
            className: "w-full pl-10 pr-8 py-2 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green"
          }
        ),
        search && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setSearch("");
              resetPage();
            },
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-bambu-gray hover:text-white",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        viewMode === "table" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowColumnModal(true),
            className: "flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-bambu-gray border border-bambu-dark-tertiary rounded-lg hover:bg-bambu-dark-tertiary transition-colors",
            title: t("inventory.configureColumns"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Columns2, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("inventory.columns") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: toggleGroupSimilar,
            className: `flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border rounded-lg transition-colors ${groupSimilar ? "bg-bambu-green/20 text-bambu-green border-bambu-green/30" : "text-bambu-gray border-bambu-dark-tertiary hover:bg-bambu-dark-tertiary"}`,
            title: t("inventory.groupSimilar"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("inventory.groupSimilar") })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-bambu-dark-primary border border-bambu-dark-tertiary rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setViewMode("table"),
              className: `flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors ${viewMode === "table" ? "bg-bambu-green text-white" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableProperties, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("inventory.table") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setViewMode("cards"),
              className: `flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors ${viewMode === "cards" ? "bg-bambu-green text-white" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("inventory.cards") })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-lg border border-bambu-dark-tertiary overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setArchiveFilter("active");
              resetPage();
            },
            className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${archiveFilter === "active" ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5" }),
              t("inventory.active")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setArchiveFilter("archived");
              resetPage();
            },
            className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${archiveFilter === "archived" ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-3.5 h-3.5" }),
              t("inventory.archived")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-5 bg-bambu-dark-tertiary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-lg border border-bambu-dark-tertiary overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setUsageFilter("all");
              resetPage();
            },
            className: `px-3 py-1.5 text-xs font-medium transition-colors ${usageFilter === "all" ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: t("inventory.all")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setUsageFilter("used");
              resetPage();
            },
            className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${usageFilter === "used" ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
              t("inventory.used")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setUsageFilter("new");
              resetPage();
            },
            className: `px-3 py-1.5 text-xs font-medium transition-colors ${usageFilter === "new" ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: t("inventory.new")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setUsageFilter("lowstock");
              resetPage();
            },
            className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${usageFilter === "lowstock" ? "bg-yellow-500/20 text-yellow-400" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
              t("inventory.lowStock")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-lg border border-bambu-dark-tertiary overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setStockFilter("all");
              resetPage();
            },
            className: `px-3 py-1.5 text-xs font-medium transition-colors ${stockFilter === "all" ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: t("inventory.all")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setStockFilter("stock");
              resetPage();
            },
            className: `px-3 py-1.5 text-xs font-medium transition-colors ${stockFilter === "stock" ? "bg-amber-500/20 text-amber-400" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: t("inventory.stock")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setStockFilter("configured");
              resetPage();
            },
            className: `px-3 py-1.5 text-xs font-medium transition-colors ${stockFilter === "configured" ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:bg-bambu-dark-tertiary"}`,
            children: t("inventory.configured")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-5 bg-bambu-dark-tertiary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: materialFilter,
          onChange: (e) => {
            setMaterialFilter(e.target.value);
            resetPage();
          },
          className: `px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer focus:outline-none ${materialFilter ? "bg-bambu-green/20 text-bambu-green border-bambu-green/30" : "bg-transparent text-bambu-gray border-bambu-dark-tertiary hover:bg-bambu-dark-tertiary"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("inventory.material") }),
            uniqueMaterials.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, children: m }, m))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: brandFilter,
          onChange: (e) => {
            setBrandFilter(e.target.value);
            resetPage();
          },
          className: `px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer focus:outline-none ${brandFilter ? "bg-bambu-green/20 text-bambu-green border-bambu-green/30" : "bg-transparent text-bambu-gray border-bambu-dark-tertiary hover:bg-bambu-dark-tertiary"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("inventory.brand") }),
            uniqueBrands.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b, children: b }, b))
          ]
        }
      ),
      uniqueSpoolCatalogIds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: spoolFilter,
          onChange: (e) => {
            setSpoolFilter(e.target.value);
            resetPage();
          },
          className: `px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer focus:outline-none ${spoolFilter ? "bg-bambu-green/20 text-bambu-green border-bambu-green/30" : "bg-transparent text-bambu-gray border-bambu-dark-tertiary hover:bg-bambu-dark-tertiary"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("inventory.spoolName") }),
            uniqueSpoolCatalogIds.map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: id, children: catalogMap[id]?.name || `#${id}` }, id))
          ]
        }
      ),
      hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-5 bg-bambu-dark-tertiary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: clearAllFilters,
            className: "flex items-center gap-1 text-xs text-bambu-gray hover:text-bambu-green transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
              t("inventory.clearFilters")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs text-bambu-gray", children: [
        sortedSpools.length,
        " ",
        sortedSpools.length !== 1 ? t("inventory.spools") : t("inventory.spool"),
        groupSimilar && totalDisplayItems < sortedSpools.length && ` (${totalDisplayItems} ${t("inventory.groupedRows")})`
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) }) : viewMode === "cards" ? (
      /* Cards view */
      pagedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: pagedItems.map((item) => {
          if (item.type === "group") {
            const { key, spools: groupSpools, representative: rep } = item;
            const colorStyle2 = rep.rgba ? `#${rep.rgba.substring(0, 6)}` : "#808080";
            const isExpanded = expandedGroups.has(key);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-bambu-dark-secondary rounded-lg overflow-hidden border border-bambu-green/30 hover:border-bambu-green transition-colors cursor-pointer",
                  onClick: () => toggleGroupExpand(key),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 flex items-center px-4 gap-3", style: { backgroundColor: colorStyle2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/90 text-gray-800 px-3 py-0.5 rounded-full text-sm font-medium", children: resolveSpoolColorName(rep.color_name, rep.rgba) || "-" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 text-bambu-gray transition-transform ${isExpanded ? "" : "-rotate-90"}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-white", children: [
                            rep.material,
                            rep.subtype ? ` ${rep.subtype}` : ""
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: rep.brand || "-" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: formatWeight(rep.label_weight) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium bg-bambu-green/20 text-bambu-green px-2 py-0.5 rounded-full", children: t("inventory.groupedSpools", { count: groupSpools.length }) })
                      ] })
                    ] })
                  ]
                }
              ),
              isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2 ml-4", children: groupSpools.map((spool2) => {
                const remaining2 = Math.max(0, spool2.label_weight - spool2.weight_used);
                const pct2 = spool2.label_weight > 0 ? remaining2 / spool2.label_weight * 100 : 0;
                const spoolColor = spool2.rgba ? `#${spool2.rgba.substring(0, 6)}` : "#808080";
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SpoolCard,
                  {
                    spool: spool2,
                    remaining: remaining2,
                    pct: pct2,
                    colorStyle: spoolColor,
                    onClick: () => setFormModal({ spool: spool2 }),
                    t
                  },
                  spool2.id
                );
              }) })
            ] }, `group-${key}`);
          }
          const spool = item.spool;
          const remaining = Math.max(0, spool.label_weight - spool.weight_used);
          const pct = spool.label_weight > 0 ? remaining / spool.label_weight * 100 : 0;
          const colorStyle = spool.rgba ? `#${spool.rgba.substring(0, 6)}` : "#808080";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            SpoolCard,
            {
              spool,
              remaining,
              pct,
              colorStyle,
              onClick: () => setFormModal({ spool }),
              t
            },
            spool.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PaginationBar,
          {
            pageIndex: safePageIndex,
            pageSize,
            totalRows: totalDisplayItems,
            totalPages,
            onPageChange: setPageIndex,
            onPageSizeChange: handlePageSizeChange,
            t
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyFilterState,
        {
          hasFilters: hasActiveFilters,
          onAddSpool: () => setFormModal({ spool: null }),
          t
        }
      )
    ) : (
      /* Table view */
      pagedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg overflow-hidden border border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-bambu-dark-tertiary bg-bambu-dark-tertiary/30", children: [
            visibleColumns.map((colId) => {
              const sortable = !!columnSortValues[colId];
              const isActive = sortState?.column === colId;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: `text-left py-3 px-4 text-xs font-medium uppercase tracking-wide select-none ${colId === "remaining" ? "min-w-[150px]" : ""} ${sortable ? "cursor-pointer hover:text-bambu-green transition-colors" : ""} ${isActive ? "text-bambu-green" : "text-bambu-gray"}`,
                  onClick: sortable ? () => handleSort(colId) : void 0,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                    columnHeaders[colId]?.(t) ?? colId,
                    sortable && (isActive ? sortState.direction === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "w-3 h-3 opacity-30" }))
                  ] })
                },
                colId
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 text-xs font-medium text-bambu-gray uppercase tracking-wide", children: t("common.actions") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: pagedItems.map((item) => {
            if (item.type === "group") {
              const { key, spools: groupSpools, representative: rep } = item;
              const isExpanded = expandedGroups.has(key);
              const remaining2 = Math.max(0, rep.label_weight - rep.weight_used);
              const pct2 = rep.label_weight > 0 ? remaining2 / rep.label_weight * 100 : 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                SpoolTableGroup,
                {
                  spools: groupSpools,
                  representative: rep,
                  remaining: remaining2,
                  pct: pct2,
                  isExpanded,
                  onToggle: () => toggleGroupExpand(key),
                  onEdit: (s) => setFormModal({ spool: s }),
                  onArchive: (id) => setConfirmAction({ type: "archive", spoolId: id }),
                  onDelete: (id) => setConfirmAction({ type: "delete", spoolId: id }),
                  visibleColumns,
                  assignmentMap,
                  catalogMap,
                  currencySymbol,
                  dateFormat,
                  t,
                  onSyncWeight: handleSyncWeight
                },
                `group-${key}`
              );
            }
            const spool = item.spool;
            const remaining = Math.max(0, spool.label_weight - spool.weight_used);
            const pct = spool.label_weight > 0 ? remaining / spool.label_weight * 100 : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              SpoolTableRow,
              {
                spool,
                remaining,
                pct,
                onEdit: () => setFormModal({ spool }),
                onRestore: () => restoreMutation.mutate(spool.id),
                onArchive: () => setConfirmAction({ type: "archive", spoolId: spool.id }),
                onDelete: () => setConfirmAction({ type: "delete", spoolId: spool.id }),
                visibleColumns,
                assignmentMap,
                catalogMap,
                currencySymbol,
                dateFormat,
                t,
                onSyncWeight: handleSyncWeight
              },
              spool.id
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-bambu-dark-tertiary/50 border-t border-bambu-dark-tertiary text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: showAll ? `${totalDisplayItems} ${totalDisplayItems !== 1 ? t("inventory.spools") : t("inventory.spool")}` : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            t("inventory.showing"),
            " ",
            safePageIndex * effectivePageSize + 1,
            " ",
            t("inventory.to"),
            " ",
            Math.min((safePageIndex + 1) * effectivePageSize, totalDisplayItems),
            " ",
            t("inventory.of"),
            " ",
            totalDisplayItems,
            " ",
            t("inventory.spools")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("inventory.show") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: pageSize,
                onChange: (e) => handlePageSizeChange(Number(e.target.value)),
                className: "px-2 py-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-sm focus:outline-none focus:border-bambu-green",
                children: [
                  [15, 30, 50, 100].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n, children: n }, n)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: -1, children: t("inventory.all") })
                ]
              }
            ),
            !showAll && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setPageIndex(0),
                  disabled: safePageIndex === 0,
                  className: "p-1.5 rounded text-bambu-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                  title: "First page",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsLeft, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setPageIndex((p) => Math.max(0, p - 1)),
                  disabled: safePageIndex === 0,
                  className: "p-1.5 rounded text-bambu-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray px-2 whitespace-nowrap", children: [
                t("inventory.page"),
                " ",
                safePageIndex + 1,
                " ",
                t("inventory.of"),
                " ",
                totalPages
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setPageIndex((p) => Math.min(totalPages - 1, p + 1)),
                  disabled: safePageIndex >= totalPages - 1,
                  className: "p-1.5 rounded text-bambu-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setPageIndex(totalPages - 1),
                  disabled: safePageIndex >= totalPages - 1,
                  className: "p-1.5 rounded text-bambu-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                  title: "Last page",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsRight, { className: "w-4 h-4" })
                }
              )
            ] })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyFilterState,
        {
          hasFilters: hasActiveFilters,
          onAddSpool: () => setFormModal({ spool: null }),
          t
        }
      )
    ),
    formModal !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SpoolFormModal,
      {
        isOpen: true,
        onClose: () => setFormModal(null),
        spool: formModal.spool,
        currencySymbol
      }
    ),
    confirmAction && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: confirmAction.type === "delete" ? t("common.delete") : t("inventory.archive"),
        message: confirmAction.type === "delete" ? t("inventory.deleteConfirm") : t("inventory.archiveConfirm"),
        confirmText: confirmAction.type === "delete" ? t("common.delete") : t("inventory.archive"),
        variant: confirmAction.type === "delete" ? "danger" : "warning",
        onConfirm: () => {
          if (confirmAction.type === "delete") {
            deleteMutation.mutate(confirmAction.spoolId);
          } else {
            archiveMutation.mutate(confirmAction.spoolId);
          }
          setConfirmAction(null);
        },
        onCancel: () => setConfirmAction(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ColumnConfigModal,
      {
        isOpen: showColumnModal,
        onClose: () => setShowColumnModal(false),
        columns: columnConfig,
        defaultColumns: DEFAULT_COLUMNS,
        onSave: handleColumnConfigSave
      }
    )
  ] });
}
function PaginationBar({
  pageIndex,
  pageSize,
  totalRows,
  totalPages,
  onPageChange,
  onPageSizeChange,
  t
}) {
  const isShowAll = pageSize === -1;
  if (totalPages <= 1 && !isShowAll) return null;
  const effectiveSize = isShowAll ? totalRows || 1 : pageSize;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: isShowAll ? `${totalRows} ${totalRows !== 1 ? t("inventory.spools") : t("inventory.spool")}` : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t("inventory.showing"),
      " ",
      pageIndex * effectiveSize + 1,
      " ",
      t("inventory.to"),
      " ",
      Math.min((pageIndex + 1) * effectiveSize, totalRows),
      " ",
      t("inventory.of"),
      " ",
      totalRows,
      " ",
      t("inventory.spools")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("inventory.show") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: pageSize,
          onChange: (e) => onPageSizeChange(Number(e.target.value)),
          className: "px-2 py-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-sm focus:outline-none focus:border-bambu-green",
          children: [
            [15, 30, 50, 100].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n, children: n }, n)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: -1, children: t("inventory.all") })
          ]
        }
      ),
      !isShowAll && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onPageChange(0),
            disabled: pageIndex === 0,
            className: "p-1.5 rounded text-bambu-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsLeft, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onPageChange(Math.max(0, pageIndex - 1)),
            disabled: pageIndex === 0,
            className: "p-1.5 rounded text-bambu-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray px-2 whitespace-nowrap", children: [
          t("inventory.page"),
          " ",
          pageIndex + 1,
          " ",
          t("inventory.of"),
          " ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onPageChange(Math.min(totalPages - 1, pageIndex + 1)),
            disabled: pageIndex >= totalPages - 1,
            className: "p-1.5 rounded text-bambu-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onPageChange(totalPages - 1),
            disabled: pageIndex >= totalPages - 1,
            className: "p-1.5 rounded text-bambu-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsRight, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}
function SpoolCard({
  spool,
  remaining,
  pct,
  colorStyle,
  onClick,
  t
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `bg-bambu-dark-secondary rounded-lg overflow-hidden border border-bambu-dark-tertiary hover:border-bambu-green transition-colors cursor-pointer ${spool.archived_at ? "opacity-50" : ""}`,
      onClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 flex items-center justify-center", style: { backgroundColor: colorStyle }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/90 text-gray-800 px-3 py-0.5 rounded-full text-sm font-medium", children: resolveSpoolColorName(spool.color_name, spool.rgba) || "-" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-white", children: [
                spool.material,
                spool.subtype ? ` ${spool.subtype}` : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: spool.brand || "-" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono text-bambu-gray bg-bambu-dark-tertiary px-2 py-1 rounded", children: [
              "#",
              spool.id
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-bambu-gray mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("inventory.remaining") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                Math.round(pct),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-bambu-dark-tertiary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `h-full rounded-full ${pct > 50 ? "bg-bambu-green" : pct > 20 ? "bg-yellow-500" : "bg-red-500"}`,
                  style: { width: `${Math.min(pct, 100)}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray min-w-[40px] text-right", children: [
                Math.round(remaining),
                "g"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray/60", children: [
                t("inventory.labelWeight"),
                ": "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: formatWeight(spool.label_weight) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray/60", children: [
                t("inventory.weightUsed"),
                ": "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: spool.weight_used > 0 ? formatWeight(spool.weight_used) : "-" })
            ] })
          ] }),
          spool.note && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-xs text-bambu-gray/60 pt-2 border-t border-bambu-dark-tertiary truncate",
              title: spool.note,
              children: spool.note
            }
          )
        ] })
      ]
    }
  );
}
function SpoolTableRow({
  spool,
  remaining,
  pct,
  onEdit,
  onRestore,
  onArchive,
  onDelete,
  visibleColumns,
  assignmentMap,
  catalogMap,
  currencySymbol,
  dateFormat,
  t,
  onSyncWeight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "tr",
    {
      className: `border-b border-bambu-dark-tertiary/50 hover:bg-bambu-dark-tertiary/30 transition-colors cursor-pointer ${spool.archived_at ? "opacity-50" : ""}`,
      onClick: onEdit,
      children: [
        visibleColumns.map((colId) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: columnCells[colId]?.({ spool, remaining, pct, assignmentMap, catalogMap, currencySymbol, dateFormat, t, onSyncWeight }) }, colId)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onEdit, className: "p-1.5 text-bambu-gray hover:text-white rounded transition-colors", title: t("common.edit"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4" }) }),
          spool.archived_at ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onRestore, className: "p-1.5 text-bambu-gray hover:text-bambu-green rounded transition-colors", title: t("inventory.restore"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onArchive, className: "p-1.5 text-bambu-gray hover:text-yellow-400 rounded transition-colors", title: t("inventory.archive"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onDelete, className: "p-1.5 text-bambu-gray hover:text-red-400 rounded transition-colors", title: t("common.delete"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
        ] }) })
      ]
    }
  );
}
function SpoolTableGroup({
  spools,
  representative,
  remaining,
  pct,
  isExpanded,
  onToggle,
  onEdit,
  onArchive,
  onDelete,
  visibleColumns,
  assignmentMap,
  catalogMap,
  currencySymbol,
  dateFormat,
  t,
  onSyncWeight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        className: "border-b border-bambu-dark-tertiary/50 hover:bg-bambu-dark-tertiary/30 transition-colors cursor-pointer bg-bambu-green/5",
        onClick: onToggle,
        children: [
          visibleColumns.map((colId, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: idx === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 text-bambu-gray transition-transform ${isExpanded ? "" : "-rotate-90"}` }),
            columnCells[colId]?.({ spool: representative, remaining, pct, assignmentMap, catalogMap, currencySymbol, dateFormat, t, onSyncWeight })
          ] }) : colId === "id" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium bg-bambu-green/20 text-bambu-green px-2 py-0.5 rounded-full", children: t("inventory.groupedSpools", { count: spools.length }) }) : columnCells[colId]?.({ spool: representative, remaining, pct, assignmentMap, catalogMap, currencySymbol, dateFormat, t, onSyncWeight }) }, colId)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: spools.map((s) => `#${s.id}`).join(", ") }) })
        ]
      }
    ),
    isExpanded && spools.map((spool) => {
      const r = Math.max(0, spool.label_weight - spool.weight_used);
      const p = spool.label_weight > 0 ? r / spool.label_weight * 100 : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        SpoolTableRow,
        {
          spool,
          remaining: r,
          pct: p,
          onEdit: () => onEdit(spool),
          onRestore: () => {
          },
          onArchive: () => onArchive(spool.id),
          onDelete: () => onDelete(spool.id),
          visibleColumns,
          assignmentMap,
          catalogMap,
          currencySymbol,
          dateFormat,
          t,
          onSyncWeight
        },
        spool.id
      );
    })
  ] });
}
function EmptyFilterState({
  hasFilters,
  onAddSpool,
  t
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-16 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -m-4 bg-bambu-green/5 rounded-full blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-bambu-dark-secondary to-bambu-dark-tertiary border border-bambu-dark-tertiary shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 -right-1 w-3 h-3 rounded-full bg-bambu-green/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-bambu-green/20" }),
        hasFilters ? /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-10 h-10 text-bambu-gray/40", strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full border-4 border-bambu-gray/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-bambu-gray/10 border-2 border-bambu-gray/20" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-bambu-green flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-lg font-bold leading-none", children: "+" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2 text-center", children: hasFilters ? t("inventory.noSpoolsMatch") : t("inventory.noSpools").split(".")[0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray text-center max-w-sm mb-6", children: hasFilters ? t("inventory.noSpoolsMatchDesc") : t("inventory.noSpools") }),
    !hasFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onAddSpool, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
      t("inventory.addSpool")
    ] })
  ] });
}
export {
  InventoryPageRouter as default
};
