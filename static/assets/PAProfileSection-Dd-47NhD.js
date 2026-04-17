import { c as createLucideIcon, u as useTranslation, r as reactExports, j as jsxRuntimeExports, L as LoaderCircle, ap as Cloud, A as ChevronDown, a7 as ChevronUp, a as useToast, t as ChevronRight } from "./index-CeSodUhS.js";
import { S as Search } from "./search-DTjW5Uxm.js";
import { C as Clock } from "./clock-rmajxGGN.js";
import { S as Sparkles } from "./sparkles-CZhBbNMC.js";
const __iconNode$1 = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }],
  [
    "path",
    { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }
  ]
];
const CloudOff = createLucideIcon("cloud-off", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
  ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" }],
  ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }]
];
const Scale = createLucideIcon("scale", __iconNode);
const defaultFormData = {
  material: "",
  subtype: "",
  brand: "",
  color_name: "",
  rgba: "808080FF",
  label_weight: 1e3,
  core_weight: 250,
  core_weight_catalog_id: null,
  weight_used: 0,
  slicer_filament: "",
  note: "",
  cost_per_kg: null
};
function validateForm(formData, quickAdd = false) {
  const errors = {};
  if (quickAdd) {
    if (!formData.material) {
      errors.material = "Material is required";
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
  if (!formData.slicer_filament) {
    errors.slicer_filament = "Slicer preset is required";
  }
  if (!formData.material) {
    errors.material = "Material is required";
  }
  if (!formData.brand) {
    errors.brand = "Brand is required";
  }
  if (!formData.subtype) {
    errors.subtype = "Subtype is required";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
const MATERIALS = [
  "PLA",
  "PETG",
  "ABS",
  "TPU",
  "ASA",
  "PC",
  "PA",
  "PVA",
  "HIPS",
  "PA-CF",
  "PETG-CF",
  "PLA-CF"
];
const DEFAULT_BRANDS = [
  "Bambu",
  "PolyLite",
  "PolyTerra",
  "eSUN",
  "Overture",
  "Fiberon",
  "SUNLU",
  "Inland",
  "Hatchbox",
  "Generic"
];
const KNOWN_VARIANTS = [
  "Basic",
  "Matte",
  "Silk",
  "Tough",
  "HF",
  "High Flow",
  "Engineering",
  "Galaxy",
  "Glow",
  "Marble",
  "Metal",
  "Rainbow",
  "Sparkle",
  "Wood",
  "Translucent",
  "Transparent",
  "Clear",
  "Lite",
  "Pro",
  "Plus",
  "Max",
  "Super",
  "Ultra",
  "Flex",
  "Soft",
  "Hard",
  "Strong",
  "Impact",
  "Heat Resistant",
  "UV Resistant",
  "ESD",
  "Conductive",
  "Magnetic",
  "Gradient",
  "Dual Color",
  "Tri Color",
  "Multicolor"
];
const QUICK_COLORS = [
  { name: "Black", hex: "000000" },
  { name: "White", hex: "FFFFFF" },
  { name: "Gray", hex: "808080" },
  { name: "Red", hex: "FF0000" },
  { name: "Orange", hex: "FFA500" },
  { name: "Yellow", hex: "FFFF00" },
  { name: "Green", hex: "00AE42" },
  { name: "Blue", hex: "0066FF" },
  { name: "Purple", hex: "8B00FF" },
  { name: "Pink", hex: "FF69B4" },
  { name: "Brown", hex: "8B4513" },
  { name: "Silver", hex: "C0C0C0" }
];
const EXTENDED_COLORS = [
  // Reds
  { name: "Dark Red", hex: "8B0000" },
  { name: "Crimson", hex: "DC143C" },
  { name: "Coral", hex: "FF7F50" },
  { name: "Salmon", hex: "FA8072" },
  // Oranges
  { name: "Dark Orange", hex: "FF8C00" },
  { name: "Peach", hex: "FFDAB9" },
  // Yellows
  { name: "Gold", hex: "FFD700" },
  { name: "Khaki", hex: "F0E68C" },
  { name: "Lemon", hex: "FFF44F" },
  // Greens
  { name: "Lime", hex: "32CD32" },
  { name: "Forest Green", hex: "228B22" },
  { name: "Olive", hex: "808000" },
  { name: "Mint", hex: "98FF98" },
  { name: "Teal", hex: "008080" },
  // Blues
  { name: "Navy", hex: "000080" },
  { name: "Sky Blue", hex: "87CEEB" },
  { name: "Royal Blue", hex: "4169E1" },
  { name: "Cyan", hex: "00FFFF" },
  { name: "Turquoise", hex: "40E0D0" },
  // Purples
  { name: "Violet", hex: "EE82EE" },
  { name: "Magenta", hex: "FF00FF" },
  { name: "Indigo", hex: "4B0082" },
  { name: "Lavender", hex: "E6E6FA" },
  { name: "Plum", hex: "DDA0DD" },
  // Pinks
  { name: "Hot Pink", hex: "FF69B4" },
  { name: "Rose", hex: "FF007F" },
  { name: "Blush", hex: "FFB6C1" },
  // Browns
  { name: "Chocolate", hex: "D2691E" },
  { name: "Tan", hex: "D2B48C" },
  { name: "Beige", hex: "F5F5DC" },
  { name: "Maroon", hex: "800000" },
  // Neutrals
  { name: "Dark Gray", hex: "404040" },
  { name: "Light Gray", hex: "D3D3D3" },
  { name: "Charcoal", hex: "36454F" },
  { name: "Ivory", hex: "FFFFF0" },
  // Bambu specific
  { name: "Bambu Green", hex: "00AE42" },
  { name: "Jade White", hex: "E8E8E8" },
  { name: "Titan Gray", hex: "5A5A5A" }
];
const ALL_COLORS = [...QUICK_COLORS, ...EXTENDED_COLORS];
const RECENT_COLORS_KEY = "bambuddy-recent-colors";
const MAX_RECENT_COLORS = 8;
const FALLBACK_PRESETS = [
  { code: "GFL00", name: "Bambu PLA Basic", displayName: "Bambu PLA Basic", isCustom: false, allCodes: ["GFL00"] },
  { code: "GFL01", name: "Bambu PLA Matte", displayName: "Bambu PLA Matte", isCustom: false, allCodes: ["GFL01"] },
  { code: "GFL05", name: "Generic PLA", displayName: "Generic PLA", isCustom: false, allCodes: ["GFL05"] },
  { code: "GFG00", name: "Bambu PETG Basic", displayName: "Bambu PETG Basic", isCustom: false, allCodes: ["GFG00"] },
  { code: "GFG05", name: "Generic PETG", displayName: "Generic PETG", isCustom: false, allCodes: ["GFG05"] },
  { code: "GFB00", name: "Bambu ABS Basic", displayName: "Bambu ABS Basic", isCustom: false, allCodes: ["GFB00"] },
  { code: "GFB05", name: "Generic ABS", displayName: "Generic ABS", isCustom: false, allCodes: ["GFB05"] },
  { code: "GFA00", name: "Bambu ASA Basic", displayName: "Bambu ASA Basic", isCustom: false, allCodes: ["GFA00"] },
  { code: "GFU00", name: "Bambu TPU 95A", displayName: "Bambu TPU 95A", isCustom: false, allCodes: ["GFU00"] },
  { code: "GFU05", name: "Generic TPU", displayName: "Generic TPU", isCustom: false, allCodes: ["GFU05"] },
  { code: "GFC00", name: "Bambu PC Basic", displayName: "Bambu PC Basic", isCustom: false, allCodes: ["GFC00"] },
  { code: "GFN00", name: "Bambu PA Basic", displayName: "Bambu PA Basic", isCustom: false, allCodes: ["GFN00"] },
  { code: "GFN05", name: "Generic PA", displayName: "Generic PA", isCustom: false, allCodes: ["GFN05"] },
  { code: "GFS00", name: "Bambu PLA-CF", displayName: "Bambu PLA-CF", isCustom: false, allCodes: ["GFS00"] },
  { code: "GFT00", name: "Bambu PETG-CF", displayName: "Bambu PETG-CF", isCustom: false, allCodes: ["GFT00"] },
  { code: "GFNC0", name: "Bambu PA-CF", displayName: "Bambu PA-CF", isCustom: false, allCodes: ["GFNC0"] },
  { code: "GFV00", name: "Bambu PVA", displayName: "Bambu PVA", isCustom: false, allCodes: ["GFV00"] }
];
function parsePresetName(name) {
  let cleanName = name.replace(/@.*$/, "").trim();
  cleanName = cleanName.replace(/\(Custom\)/i, "").trim();
  cleanName = cleanName.replace(/^[#*]+\s*/, "").trim();
  const materials = [
    "PLA-CF",
    "PETG-CF",
    "ABS-GF",
    "ASA-CF",
    "PA-CF",
    "PAHT-CF",
    "PA6-CF",
    "PA6-GF",
    "PPA-CF",
    "PPA-GF",
    "PET-CF",
    "PPS-CF",
    "PC-CF",
    "PC-ABS",
    "ABS-GF",
    "PCTG",
    "PETG",
    "PLA",
    "ABS",
    "ASA",
    "PC",
    "PA",
    "TPU",
    "PVA",
    "HIPS",
    "BVOH",
    "PPS",
    "PEEK",
    "PEI"
  ];
  let material = "";
  let materialIdx = -1;
  for (const m of materials) {
    const idx = cleanName.toUpperCase().indexOf(m.toUpperCase());
    if (idx !== -1) {
      material = m;
      materialIdx = idx;
      break;
    }
  }
  let brand = "";
  if (materialIdx > 0) {
    brand = cleanName.substring(0, materialIdx).trim();
    brand = brand.replace(/[-_\s]+$/, "");
  }
  let afterMaterial = "";
  if (materialIdx !== -1 && material) {
    afterMaterial = cleanName.substring(materialIdx + material.length).trim();
    afterMaterial = afterMaterial.replace(/^[-_\s]+/, "");
  }
  let variant = "";
  for (const v of KNOWN_VARIANTS) {
    if (afterMaterial.toLowerCase().includes(v.toLowerCase())) {
      variant = v;
      break;
    }
  }
  if (!variant && brand) {
    for (const v of KNOWN_VARIANTS) {
      const variantPattern = new RegExp(`\\s+${v}$`, "i");
      if (variantPattern.test(brand)) {
        variant = v;
        brand = brand.replace(variantPattern, "").trim();
        break;
      }
    }
  }
  return { brand, material, variant };
}
function extractBrandsFromPresets(presets, localPresets) {
  const brandSet = new Set(DEFAULT_BRANDS);
  for (const preset of presets) {
    const { brand } = parsePresetName(preset.name);
    if (brand && brand.length > 1) {
      brandSet.add(brand);
    }
  }
  if (localPresets) {
    for (const preset of localPresets) {
      if (preset.filament_vendor && preset.filament_vendor.length > 1) {
        brandSet.add(preset.filament_vendor);
      } else {
        const { brand } = parsePresetName(preset.name);
        if (brand && brand.length > 1) {
          brandSet.add(brand);
        }
      }
    }
  }
  return Array.from(brandSet).sort((a, b) => a.localeCompare(b));
}
function buildLocalFilamentOptions(localPresets) {
  const filamentPresets = localPresets.filter((p) => p.preset_type === "filament");
  if (filamentPresets.length === 0) return [];
  const presetsMap = /* @__PURE__ */ new Map();
  for (const preset of filamentPresets) {
    const baseName = preset.name.replace(/@.*$/, "").trim();
    const existing = presetsMap.get(baseName);
    if (existing) {
      existing.allCodes.push(String(preset.id));
    } else {
      const code = preset.filament_type || String(preset.id);
      presetsMap.set(baseName, {
        code,
        name: baseName,
        displayName: baseName,
        isCustom: false,
        allCodes: [code]
      });
    }
  }
  return Array.from(presetsMap.values()).sort((a, b) => a.displayName.localeCompare(b.displayName));
}
function buildFilamentOptions(cloudPresets, configuredPrinterModels, localPresets) {
  if (cloudPresets.length > 0) {
    const customPresets = [];
    const defaultPresetsMap = /* @__PURE__ */ new Map();
    for (const preset of cloudPresets) {
      if (preset.is_custom) {
        const presetNameUpper = preset.name.toUpperCase();
        const matchesPrinter = configuredPrinterModels.size === 0 || Array.from(configuredPrinterModels).some((model) => presetNameUpper.includes(model)) || !presetNameUpper.includes("@");
        if (matchesPrinter) {
          customPresets.push({
            code: preset.setting_id,
            name: preset.name,
            displayName: `${preset.name} (Custom)`,
            isCustom: true,
            allCodes: [preset.setting_id]
          });
        }
      } else {
        const baseName = preset.name.replace(/@.*$/, "").trim();
        const existing = defaultPresetsMap.get(baseName);
        if (existing) {
          existing.allCodes.push(preset.setting_id);
        } else {
          defaultPresetsMap.set(baseName, {
            code: preset.setting_id,
            name: baseName,
            displayName: baseName,
            isCustom: false,
            allCodes: [preset.setting_id]
          });
        }
      }
    }
    return [
      ...customPresets,
      ...Array.from(defaultPresetsMap.values())
    ].sort((a, b) => a.displayName.localeCompare(b.displayName));
  }
  if (localPresets && localPresets.length > 0) {
    const localOptions = buildLocalFilamentOptions(localPresets);
    if (localOptions.length > 0) return localOptions;
  }
  return FALLBACK_PRESETS;
}
function findPresetOption(slicerFilament, filamentOptions) {
  if (!slicerFilament) return void 0;
  let option = filamentOptions.find((o) => o.code === slicerFilament);
  if (!option) {
    option = filamentOptions.find((o) => o.allCodes.includes(slicerFilament));
  }
  if (!option) {
    const slicerLower = slicerFilament.toLowerCase();
    option = filamentOptions.find(
      (o) => o.code.toLowerCase() === slicerLower || o.allCodes.some((c) => c.toLowerCase() === slicerLower)
    );
  }
  return option;
}
function loadRecentColors() {
  try {
    const stored = localStorage.getItem(RECENT_COLORS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
  }
  return [];
}
function saveRecentColor(color, currentRecent) {
  const filtered = currentRecent.filter(
    (c) => c.hex.toUpperCase() !== color.hex.toUpperCase()
  );
  const updated = [color, ...filtered].slice(0, MAX_RECENT_COLORS);
  try {
    localStorage.setItem(RECENT_COLORS_KEY, JSON.stringify(updated));
  } catch {
  }
  return updated;
}
function isMatchingCalibration(cal, formData) {
  if (!formData.material) return false;
  const profileName = cal.name || "";
  const cleanName = profileName.replace(/^High Flow[_\s]+/i, "").replace(/^Standard[_\s]+/i, "").replace(/^HF[_\s]+/i, "").replace(/^S[_\s]+/i, "").trim();
  const parsed = parsePresetName(cleanName);
  const materialMatch = parsed.material.toUpperCase() === formData.material.toUpperCase();
  if (!materialMatch) return false;
  if (formData.brand) {
    const brandMatch = parsed.brand.toLowerCase().includes(formData.brand.toLowerCase()) || formData.brand.toLowerCase().includes(parsed.brand.toLowerCase());
    if (!brandMatch) return false;
  }
  if (formData.subtype) {
    const variantMatch = parsed.variant.toLowerCase().includes(formData.subtype.toLowerCase()) || formData.subtype.toLowerCase().includes(parsed.variant.toLowerCase()) || cleanName.toLowerCase().includes(formData.subtype.toLowerCase());
    if (!variantMatch) return false;
  }
  return true;
}
function FilamentSection({
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
  onQuantityChange,
  errors
}) {
  const { t } = useTranslation();
  const [presetDropdownOpen, setPresetDropdownOpen] = reactExports.useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = reactExports.useState(false);
  const [subtypeDropdownOpen, setSubtypeDropdownOpen] = reactExports.useState(false);
  const [materialDropdownOpen, setMaterialDropdownOpen] = reactExports.useState(false);
  const [brandSearch, setBrandSearch] = reactExports.useState("");
  const [subtypeSearch, setSubtypeSearch] = reactExports.useState("");
  const [materialSearch, setMaterialSearch] = reactExports.useState("");
  const [labelInput, setLabelInput] = reactExports.useState(String(formData.label_weight));
  const [isLabelFocused, setIsLabelFocused] = reactExports.useState(false);
  const presetRef = reactExports.useRef(null);
  const brandRef = reactExports.useRef(null);
  const subtypeRef = reactExports.useRef(null);
  const materialRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleClick = (e) => {
      if (presetRef.current && !presetRef.current.contains(e.target)) {
        setPresetDropdownOpen(false);
      }
      if (materialRef.current && !materialRef.current.contains(e.target)) {
        setMaterialDropdownOpen(false);
      }
      if (brandRef.current && !brandRef.current.contains(e.target)) {
        setBrandDropdownOpen(false);
      }
      if (subtypeRef.current && !subtypeRef.current.contains(e.target)) {
        setSubtypeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const filteredPresets = reactExports.useMemo(() => {
    if (!presetInputValue) return filamentOptions;
    const search = presetInputValue.toLowerCase();
    return filamentOptions.filter(
      (o) => o.displayName.toLowerCase().includes(search) || o.code.toLowerCase().includes(search)
    );
  }, [filamentOptions, presetInputValue]);
  const filteredBrands = reactExports.useMemo(() => {
    if (!brandSearch) return availableBrands;
    const search = brandSearch.toLowerCase();
    const filtered = availableBrands.filter((b) => b.toLowerCase().includes(search));
    return filtered.sort((a, b) => {
      const aExact = a.toLowerCase() === search;
      const bExact = b.toLowerCase() === search;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return a.localeCompare(b);
    });
  }, [availableBrands, brandSearch]);
  const filteredVariants = reactExports.useMemo(() => {
    if (!subtypeSearch) return KNOWN_VARIANTS;
    const search = subtypeSearch.toLowerCase();
    return KNOWN_VARIANTS.filter((v) => v.toLowerCase().includes(search));
  }, [subtypeSearch]);
  const filteredMaterials = reactExports.useMemo(() => {
    if (!materialSearch) return availableMaterials;
    const search = materialSearch.toLowerCase();
    const filtered = availableMaterials.filter((m) => m.toLowerCase().includes(search));
    return filtered.sort((a, b) => {
      const aExact = a.toLowerCase() === search;
      const bExact = b.toLowerCase() === search;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return a.localeCompare(b);
    });
  }, [materialSearch, availableMaterials]);
  reactExports.useEffect(() => {
    if (!isLabelFocused) {
      setLabelInput(String(formData.label_weight));
    }
  }, [formData.label_weight, isLabelFocused]);
  const handlePresetSelect = (option) => {
    updateField("slicer_filament", option.code);
    setPresetInputValue(option.displayName);
    setPresetDropdownOpen(false);
    const parsed = parsePresetName(option.name);
    if (parsed.material) updateField("material", parsed.material);
    if (parsed.brand) updateField("brand", parsed.brand);
    if (parsed.variant) updateField("subtype", parsed.variant);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    !quickAdd && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-xs text-bambu-gray", children: loadingCloudPresets ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }),
      " ",
      t("inventory.loadingPresets")
    ] }) : cloudAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "w-3 h-3 text-bambu-green" }),
      " ",
      t("inventory.cloudConnected")
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CloudOff, { className: "w-3 h-3" }),
      " ",
      t("inventory.cloudNotConnected")
    ] }) }),
    !quickAdd && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: [
        t("inventory.slicerPreset"),
        " *"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: presetRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray/50 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "w-full pl-9 pr-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green",
            placeholder: t("inventory.searchPresets"),
            value: presetInputValue,
            onChange: (e) => {
              setPresetInputValue(e.target.value);
              setPresetDropdownOpen(true);
            },
            onFocus: () => {
              setPresetDropdownOpen(true);
              setPresetInputValue("");
            }
          }
        ),
        presetDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-50 w-full mt-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-lg max-h-64 overflow-y-auto", children: filteredPresets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 text-sm text-bambu-gray", children: t("inventory.noPresetsFound") }) : filteredPresets.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: `w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary truncate ${selectedPresetOption?.code === option.code ? "bg-bambu-green/10 text-bambu-green" : "text-white"}`,
            onClick: () => handlePresetSelect(option),
            children: option.displayName
          },
          option.code
        )) })
      ] }),
      selectedPresetOption && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-bambu-gray", children: [
        t("inventory.selectedPreset"),
        ": ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-bambu-green", children: selectedPresetOption.code })
      ] }),
      errors?.slicer_filament && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-400", children: errors.slicer_filament })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: [
        t("inventory.material"),
        " *"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: materialRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green",
            placeholder: t("inventory.selectMaterial"),
            value: materialDropdownOpen ? materialSearch : formData.material,
            onChange: (e) => {
              setMaterialSearch(e.target.value);
              setMaterialDropdownOpen(true);
            },
            onFocus: () => {
              setMaterialDropdownOpen(true);
              setMaterialSearch("");
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray/50 pointer-events-none" }),
        materialDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-50 w-full mt-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-lg max-h-48 overflow-y-auto", children: [
          filteredMaterials.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 text-sm text-bambu-gray", children: t("inventory.noResults") }) : filteredMaterials.map((material) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: `w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary ${formData.material === material ? "bg-bambu-green/10 text-bambu-green" : "text-white"}`,
              onClick: () => {
                updateField("material", material);
                setMaterialDropdownOpen(false);
                setMaterialSearch("");
              },
              children: material
            },
            material
          )),
          materialSearch && !filteredMaterials.includes(materialSearch) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary text-bambu-green border-t border-bambu-dark-tertiary",
              onClick: () => {
                updateField("material", materialSearch);
                setMaterialDropdownOpen(false);
                setMaterialSearch("");
              },
              children: t("inventory.useCustomMaterial", { material: materialSearch })
            }
          )
        ] })
      ] }),
      errors?.material && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-400", children: errors.material })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: [
        t("inventory.brand"),
        !quickAdd && " *"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: brandRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green",
            placeholder: t("inventory.searchBrand"),
            value: brandDropdownOpen ? brandSearch : formData.brand,
            onChange: (e) => {
              setBrandSearch(e.target.value);
              setBrandDropdownOpen(true);
            },
            onFocus: () => {
              setBrandDropdownOpen(true);
              setBrandSearch("");
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray/50 pointer-events-none" }),
        brandDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-50 w-full mt-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-lg max-h-48 overflow-y-auto", children: [
          filteredBrands.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 text-sm text-bambu-gray", children: t("inventory.noResults") }) : filteredBrands.map((brand) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: `w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary ${formData.brand === brand ? "bg-bambu-green/10 text-bambu-green" : "text-white"}`,
              onClick: () => {
                updateField("brand", brand);
                setBrandDropdownOpen(false);
                setBrandSearch("");
              },
              children: brand
            },
            brand
          )),
          brandSearch && !filteredBrands.includes(brandSearch) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary text-bambu-green border-t border-bambu-dark-tertiary",
              onClick: () => {
                updateField("brand", brandSearch);
                setBrandDropdownOpen(false);
                setBrandSearch("");
              },
              children: t("inventory.useCustomBrand", { brand: brandSearch })
            }
          )
        ] })
      ] }),
      errors?.brand && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-400", children: errors.brand })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: [
        t("inventory.subtype"),
        !quickAdd && " *"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: subtypeRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: subtypeDropdownOpen ? subtypeSearch : formData.subtype,
            onChange: (e) => {
              setSubtypeSearch(e.target.value);
              setSubtypeDropdownOpen(true);
            },
            onFocus: () => {
              setSubtypeDropdownOpen(true);
              setSubtypeSearch("");
            },
            placeholder: "Basic, Matte, Silk...",
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray/50 pointer-events-none" }),
        subtypeDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-50 w-full mt-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-lg max-h-48 overflow-y-auto", children: [
          filteredVariants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 text-sm text-bambu-gray", children: t("inventory.noResults") }) : filteredVariants.map((variant) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: `w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary ${formData.subtype === variant ? "bg-bambu-green/10 text-bambu-green" : "text-white"}`,
              onClick: () => {
                updateField("subtype", variant);
                setSubtypeDropdownOpen(false);
                setSubtypeSearch("");
              },
              children: variant
            },
            variant
          )),
          subtypeSearch && !KNOWN_VARIANTS.some((v) => v.toLowerCase() === subtypeSearch.toLowerCase().trim()) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary text-bambu-green border-t border-bambu-dark-tertiary",
              onClick: () => {
                updateField("subtype", subtypeSearch);
                setSubtypeDropdownOpen(false);
                setSubtypeSearch("");
              },
              children: t("inventory.useCustomBrand", { brand: subtypeSearch })
            }
          )
        ] })
      ] }),
      errors?.subtype && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-400", children: errors.subtype })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: t("inventory.labelWeight") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            className: "w-full px-3 py-2 pr-7 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:outline-none focus:border-bambu-green",
            value: labelInput,
            min: 0,
            onFocus: () => setIsLabelFocused(true),
            onChange: (e) => setLabelInput(e.target.value),
            onBlur: () => {
              setIsLabelFocused(false);
              const raw = labelInput.trim();
              const next = Number(raw);
              if (!raw || !Number.isFinite(next) || next < 0) {
                setLabelInput(String(formData.label_weight));
                return;
              }
              const rounded = Math.round(next);
              updateField("label_weight", rounded);
              setLabelInput(String(rounded));
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-bambu-gray", children: "g" })
      ] })
    ] }),
    quickAdd && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: t("inventory.quantity") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "number",
          className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:outline-none focus:border-bambu-green",
          value: quantity,
          min: 1,
          max: 100,
          onChange: (e) => {
            const val = Math.max(1, Math.min(100, parseInt(e.target.value) || 1));
            onQuantityChange(val);
          }
        }
      )
    ] })
  ] });
}
function ColorSection({
  formData,
  updateField,
  recentColors,
  onColorUsed,
  catalogColors
}) {
  const { t } = useTranslation();
  const [showAllColors, setShowAllColors] = reactExports.useState(false);
  const [colorSearch, setColorSearch] = reactExports.useState("");
  const currentHex = formData.rgba.replace("#", "").substring(0, 6);
  const isSelected = (hex) => {
    return currentHex.toUpperCase() === hex.toUpperCase();
  };
  const selectColor = (hex, name) => {
    updateField("rgba", hex.toUpperCase() + "FF");
    updateField("color_name", name);
    onColorUsed({ name, hex });
  };
  const matchedCatalogColors = reactExports.useMemo(() => {
    if (catalogColors.length === 0) return [];
    const brand = formData.brand?.trim();
    const material = formData.material?.toLowerCase().trim();
    const subtype = formData.subtype?.toLowerCase().trim();
    if (!brand && !material) return [];
    const brandWords = brand ? brand.toLowerCase().split(/[\s\-_]+/).filter((w) => w.length >= 2) : [];
    const brandMatches = (manufacturer) => {
      if (brandWords.length === 0) return true;
      const mfrLower = manufacturer.toLowerCase();
      return brandWords.some((w) => mfrLower.includes(w));
    };
    if (brand && !material) {
      const byBrand = catalogColors.filter((c) => brandMatches(c.manufacturer));
      if (byBrand.length > 0) {
        return byBrand.map((c) => ({
          name: c.color_name,
          hex: c.hex_color.replace("#", "").substring(0, 6),
          manufacturer: c.manufacturer,
          material: typeof c.material === "string" ? c.material : void 0
        }));
      }
    }
    const fullMaterial = material && subtype ? `${material} ${subtype}` : "";
    if (fullMaterial) {
      const exact = catalogColors.filter(
        (c) => brandMatches(c.manufacturer) && c.material?.toLowerCase() === fullMaterial
      );
      if (exact.length > 0) {
        return exact.map((c) => ({
          name: c.color_name,
          hex: c.hex_color.replace("#", "").substring(0, 6),
          manufacturer: c.manufacturer,
          material: typeof c.material === "string" ? c.material : void 0
        }));
      }
      const normalized = fullMaterial.replace(/\+$/, "");
      if (normalized !== fullMaterial) {
        const normMatch = catalogColors.filter(
          (c) => brandMatches(c.manufacturer) && c.material?.toLowerCase() === normalized
        );
        if (normMatch.length > 0) {
          return normMatch.map((c) => ({
            name: c.color_name,
            hex: c.hex_color.replace("#", "").substring(0, 6),
            manufacturer: c.manufacturer,
            material: typeof c.material === "string" ? c.material : void 0
          }));
        }
      }
    }
    if (material) {
      const byMaterial = catalogColors.filter(
        (c) => brandMatches(c.manufacturer) && (!c.material || c.material.toLowerCase().startsWith(material))
      );
      if (byMaterial.length > 0) {
        return byMaterial.map((c) => ({
          name: c.color_name,
          hex: c.hex_color.replace("#", "").substring(0, 6),
          manufacturer: c.manufacturer,
          material: typeof c.material === "string" ? c.material : void 0
        }));
      }
    }
    return [];
  }, [catalogColors, formData.brand, formData.material, formData.subtype]);
  const catalogSearchResults = reactExports.useMemo(() => {
    if (!colorSearch) return matchedCatalogColors;
    if (matchedCatalogColors.length === 0) return [];
    const q = colorSearch.toLowerCase();
    const matches = matchedCatalogColors.filter(
      (c) => c.name.toLowerCase().includes(q) || (c.manufacturer?.toLowerCase().includes(q) ?? false) || (c.material?.toLowerCase().includes(q) ?? false)
    );
    return matches;
  }, [colorSearch, matchedCatalogColors]);
  const showCatalogSection = matchedCatalogColors.length > 0;
  const filteredFallbackColors = reactExports.useMemo(() => {
    if (colorSearch) {
      return ALL_COLORS.filter(
        (c) => c.name.toLowerCase().includes(colorSearch.toLowerCase())
      );
    }
    return showAllColors ? ALL_COLORS : QUICK_COLORS;
  }, [colorSearch, showAllColors]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-10 rounded-lg border border-bambu-dark-tertiary",
        style: { backgroundColor: `#${currentHex}` }
      }
    ),
    recentColors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-bambu-gray shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("inventory.recentColors") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: recentColors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => selectColor(color.hex, color.name),
          className: `w-6 h-6 rounded border-2 transition-all hover:scale-110 ${isSelected(color.hex) ? "border-bambu-green ring-1 ring-bambu-green/30 scale-110" : "border-bambu-dark-tertiary"}`,
          style: { backgroundColor: `#${color.hex}` },
          title: color.name
        },
        color.hex
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray/50 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          className: "w-full pl-9 pr-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green",
          placeholder: t("inventory.searchColors"),
          value: colorSearch,
          onChange: (e) => setColorSearch(e.target.value)
        }
      )
    ] }),
    showCatalogSection ? (
      /* Catalog colors matching selected brand/material */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: colorSearch ? t("inventory.searchResults") : `${formData.brand}${formData.material ? ` ${formData.material}` : ""}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          catalogSearchResults.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => selectColor(color.hex, color.name),
              className: `w-6 h-6 rounded border-2 transition-all hover:scale-110 hover:z-20 relative group ${isSelected(color.hex) ? "border-bambu-green ring-1 ring-bambu-green/30 scale-110" : "border-bambu-dark-tertiary"}`,
              style: { backgroundColor: `#${color.hex}` },
              title: color.manufacturer && color.material ? `${color.name} (${color.manufacturer} — ${color.material})` : color.manufacturer ? `${color.name} (${color.manufacturer})` : color.name,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg text-white", children: color.manufacturer && color.material ? `${color.name} (${color.manufacturer} — ${color.material})` : color.manufacturer ? `${color.name} (${color.manufacturer})` : color.name })
            },
            `${color.hex}-${color.name}-${color.manufacturer ?? ""}`
          )),
          catalogSearchResults.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray py-1", children: t("inventory.noColorsFound") })
        ] })
      ] })
    ) : (
      /* Fallback: hardcoded color palette (no brand/material selected or no catalog matches) */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: colorSearch ? t("inventory.searchResults") : showAllColors ? t("inventory.allColors") : t("inventory.commonColors") }),
          !colorSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowAllColors(!showAllColors),
              className: "flex items-center gap-1 hover:text-white transition-colors",
              children: showAllColors ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                t("inventory.showLess"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                t("inventory.showAll"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          filteredFallbackColors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => selectColor(color.hex, color.name),
              className: `w-6 h-6 rounded border-2 transition-all hover:scale-110 hover:z-20 relative group ${isSelected(color.hex) ? "border-bambu-green ring-1 ring-bambu-green/30 scale-110" : "border-bambu-dark-tertiary"}`,
              style: { backgroundColor: `#${color.hex}` },
              title: color.name,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg text-white", children: color.name })
            },
            color.hex
          )),
          filteredFallbackColors.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray py-1", children: t("inventory.noColorsFound") })
        ] })
      ] })
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: t("inventory.colorName") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green",
            placeholder: t("inventory.colorNamePlaceholder"),
            value: formData.color_name,
            onChange: (e) => updateField("color_name", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: t("inventory.hexColor") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-bambu-gray", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "w-full pl-7 pr-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm font-mono uppercase focus:outline-none focus:border-bambu-green",
                placeholder: "RRGGBB",
                value: currentHex.toUpperCase(),
                onChange: (e) => {
                  const val = e.target.value.replace("#", "").replace(/[^0-9A-Fa-f]/g, "");
                  if (val.length <= 8) updateField("rgba", val.toUpperCase() + (val.length <= 6 ? "FF" : ""));
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "color",
              className: "w-11 h-[38px] rounded-lg cursor-pointer border border-bambu-dark-tertiary shrink-0 bg-transparent",
              value: `#${currentHex}`,
              onChange: (e) => {
                const hex = e.target.value.replace("#", "").toUpperCase();
                updateField("rgba", hex + "FF");
              },
              title: t("inventory.pickColor")
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function SpoolWeightPicker({
  catalog,
  value,
  onChange,
  catalogId,
  onCatalogIdChange
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const dropdownRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  reactExports.useEffect(() => {
    if (catalog.length === 0) {
      return;
    }
    const matches = catalog.filter((e) => e.weight === value);
    if (catalogId) {
      const selected = catalog.find((e) => e.id === catalogId);
      if (selected && selected.weight === value) {
        return;
      }
    }
    if (matches.length === 1) {
      onCatalogIdChange(matches[0].id);
    } else if (matches.length === 0) {
      if (catalogId !== null) {
        onCatalogIdChange(null);
      }
    }
  }, [value, catalog, catalogId, onCatalogIdChange]);
  const filtered = reactExports.useMemo(() => {
    if (!search) return catalog;
    const s = search.toLowerCase();
    return catalog.filter(
      (e) => e.name.toLowerCase().includes(s) || e.weight.toString().includes(s)
    );
  }, [catalog, search]);
  const matchingEntries = reactExports.useMemo(() => {
    return catalog.filter((e) => e.weight === value);
  }, [catalog, value]);
  const displayValue = reactExports.useMemo(() => {
    if (isOpen) return search;
    if (catalogId) {
      const entry = catalog.find((e) => e.id === catalogId);
      if (entry) return entry.name;
    }
    if (matchingEntries.length > 0) {
      return matchingEntries[0].name;
    }
    return "";
  }, [isOpen, search, catalogId, catalog, matchingEntries]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "w-3.5 h-3.5 text-bambu-gray" }),
      t("inventory.coreWeight")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 relative", ref: dropdownRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: inputRef,
            type: "text",
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green",
            placeholder: t("inventory.searchSpoolWeight"),
            value: displayValue,
            onFocus: () => {
              setIsOpen(true);
              setSearch("");
            },
            onChange: (e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }
          }
        ),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-50 w-full mt-1 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-lg max-h-64 overflow-y-auto", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 text-sm text-bambu-gray", children: t("inventory.noResults") }) : filtered.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary flex justify-between items-center ${(catalogId ? entry.id === catalogId : entry.weight === value) ? "bg-bambu-green/10 text-bambu-green" : "text-white"}`,
            onClick: () => {
              onCatalogIdChange(entry.id);
              onChange(entry.weight);
              setIsOpen(false);
              setSearch("");
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: entry.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-bambu-gray ml-2 shrink-0", children: [
                entry.weight,
                "g"
              ] })
            ]
          },
          entry.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            className: "w-16 px-2 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm text-center font-mono focus:outline-none focus:border-bambu-green",
            value,
            min: 0,
            max: 2e3,
            onChange: (e) => {
              const val = parseInt(e.target.value);
              if (!isNaN(val) && val >= 0) onChange(val);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray text-sm", children: "g" })
      ] })
    ] })
  ] });
}
function AdditionalSection({
  formData,
  updateField,
  spoolCatalog,
  currencySymbol
}) {
  const { t } = useTranslation();
  const { showToast } = useToast();
  const [measuredInput, setMeasuredInput] = reactExports.useState("");
  const [isMeasuredFocused, setIsMeasuredFocused] = reactExports.useState(false);
  const [remainingInput, setRemainingInput] = reactExports.useState("");
  const [isRemainingFocused, setIsRemainingFocused] = reactExports.useState(false);
  const remainingWeight = Math.max(0, formData.label_weight - formData.weight_used);
  const measuredDefault = formData.core_weight + remainingWeight;
  reactExports.useEffect(() => {
    if (!isMeasuredFocused) {
      setMeasuredInput(String(measuredDefault));
    }
  }, [isMeasuredFocused, measuredDefault]);
  reactExports.useEffect(() => {
    if (!isRemainingFocused) {
      setRemainingInput(String(remainingWeight));
    }
  }, [isRemainingFocused, remainingWeight]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SpoolWeightPicker,
      {
        catalog: spoolCatalog,
        value: formData.core_weight,
        onChange: (weight) => updateField("core_weight", weight),
        catalogId: formData.core_weight_catalog_id,
        onCatalogIdChange: (id) => updateField("core_weight_catalog_id", id)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: t("inventory.currentWeight") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: remainingInput,
              min: 0,
              max: formData.label_weight,
              onFocus: () => setIsRemainingFocused(true),
              onChange: (e) => {
                setRemainingInput(e.target.value);
              },
              onBlur: () => {
                setIsRemainingFocused(false);
                const raw = remainingInput.trim();
                const remaining = Number(raw);
                if (!raw || !Number.isFinite(remaining) || remaining < 0 || remaining > formData.label_weight) {
                  setRemainingInput(String(remainingWeight));
                  return;
                }
                const rounded = Math.round(remaining);
                updateField("weight_used", Math.max(0, formData.label_weight - rounded));
                setRemainingInput(String(rounded));
              },
              className: "w-full px-3 py-2 pr-7 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:outline-none focus:border-bambu-green"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-bambu-gray", children: "g" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray shrink-0", children: [
          "/ ",
          formData.label_weight,
          "g"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: t("inventory.measuredWeight") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: measuredInput,
              min: 0,
              onFocus: () => setIsMeasuredFocused(true),
              onChange: (e) => {
                setMeasuredInput(e.target.value);
              },
              onBlur: () => {
                setIsMeasuredFocused(false);
                const raw = measuredInput.trim();
                const measured = Number(raw);
                const minAllowed = formData.core_weight;
                const maxAllowed = formData.core_weight + formData.label_weight;
                if (!raw || !Number.isFinite(measured) || measured < minAllowed || measured > maxAllowed) {
                  showToast(t("inventory.measuredWeightError", { min: minAllowed, max: maxAllowed }), "error");
                  setMeasuredInput(String(measuredDefault));
                  return;
                }
                const rounded = Math.round(measured);
                const remaining = Math.max(0, Math.min(formData.label_weight, rounded - formData.core_weight));
                updateField("weight_used", Math.max(0, formData.label_weight - remaining));
                setMeasuredInput(String(rounded));
              },
              className: "w-full px-3 py-2 pr-7 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:outline-none focus:border-bambu-green"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-bambu-gray", children: "g" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray shrink-0", children: [
          "/ ",
          formData.core_weight + formData.label_weight,
          "g"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: t("inventory.costPerKg", "Cost per kg") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-bambu-gray text-sm pointer-events-none", children: currencySymbol }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: formData.cost_per_kg ?? "",
            min: 0,
            step: 0.01,
            placeholder: "0.00",
            onChange: (e) => {
              const value = e.target.value === "" ? null : parseFloat(e.target.value);
              updateField("cost_per_kg", value);
            },
            style: { paddingLeft: `${Math.max(2, currencySymbol.length * 0.6 + 1)}rem` },
            className: "w-full py-2 pr-3 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:outline-none focus:border-bambu-green"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-bambu-gray mb-1", children: t("inventory.note") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray/50 focus:outline-none focus:border-bambu-green resize-none min-h-[80px]",
          placeholder: t("inventory.notePlaceholder"),
          value: formData.note,
          onChange: (e) => updateField("note", e.target.value)
        }
      )
    ] })
  ] });
}
function PAProfileSection({
  formData,
  printersWithCalibrations,
  selectedProfiles,
  setSelectedProfiles,
  expandedPrinters,
  setExpandedPrinters
}) {
  const { t } = useTranslation();
  const togglePrinterExpanded = (printerId) => {
    setExpandedPrinters((prev) => {
      const next = new Set(prev);
      if (next.has(printerId)) next.delete(printerId);
      else next.add(printerId);
      return next;
    });
  };
  const toggleProfileSelected = (printerId, caliIdx, extruderId) => {
    const key = `${printerId}:${caliIdx}:${extruderId ?? "null"}`;
    const printerNozzleKey = `${printerId}:${extruderId ?? "null"}`;
    setSelectedProfiles((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        for (const existingKey of Array.from(next)) {
          const parts = existingKey.split(":");
          const existingPrinterNozzle = `${parts[0]}:${parts[2]}`;
          if (existingPrinterNozzle === printerNozzleKey) {
            next.delete(existingKey);
          }
        }
        next.add(key);
      }
      return next;
    });
  };
  const autoSelectProfiles = () => {
    const newSelection = /* @__PURE__ */ new Set();
    for (const { printer, calibrations } of printersWithCalibrations) {
      if (!printer.connected) continue;
      const matchingCals = calibrations.filter(
        (cal) => isMatchingCalibration(cal, formData)
      );
      const byExtruder = /* @__PURE__ */ new Map();
      for (const cal of matchingCals) {
        const extKey = `${cal.extruder_id ?? "null"}`;
        if (!byExtruder.has(extKey)) byExtruder.set(extKey, []);
        byExtruder.get(extKey).push(cal);
      }
      for (const [extKey, cals] of byExtruder) {
        if (cals.length > 0) {
          const sorted = [...cals].sort((a, b) => b.k_value - a.k_value);
          const best = sorted[0];
          newSelection.add(`${printer.id}:${best.cali_idx}:${extKey}`);
        }
      }
    }
    setSelectedProfiles(newSelection);
  };
  if (!formData.material) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-bambu-dark rounded-lg text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("inventory.selectMaterialFirst") }) });
  }
  if (printersWithCalibrations.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-bambu-dark rounded-lg text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("inventory.noPrintersConfigured") }) });
  }
  const totalMatching = printersWithCalibrations.reduce((sum, { printer, calibrations }) => {
    if (!printer.connected) return sum;
    return sum + calibrations.filter((cal) => isMatchingCalibration(cal, formData)).length;
  }, 0);
  const renderProfile = (printer, cal) => {
    const key = `${printer.id}:${cal.cali_idx}:${cal.extruder_id ?? "null"}`;
    const isSelected = selectedProfiles.has(key);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        className: `flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border ${isSelected ? "bg-bambu-green/10 border-bambu-green/30" : "bg-bambu-dark border-transparent hover:bg-bambu-dark/80"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: isSelected,
              onChange: () => toggleProfileSelected(String(printer.id), cal.cali_idx, cal.extruder_id),
              className: "w-4 h-4 rounded border-bambu-dark-tertiary text-bambu-green focus:ring-bambu-green"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium ${isSelected ? "text-bambu-green" : "text-white"}`, children: cal.name || cal.filament_id }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono px-2 py-0.5 rounded bg-bambu-dark text-bambu-gray", children: [
            "K=",
            cal.k_value.toFixed(3)
          ] }) })
        ]
      },
      `${cal.cali_idx}-${cal.extruder_id}`
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
        t("inventory.matchingFilter"),
        ": ",
        formData.brand || t("inventory.anyBrand"),
        " / ",
        formData.material,
        " / ",
        formData.subtype || t("inventory.anyVariant")
      ] }),
      totalMatching > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: autoSelectProfiles,
          className: "flex items-center gap-1.5 px-2 py-1 text-xs bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-bambu-gray hover:text-white hover:border-bambu-green transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
            t("inventory.autoSelect"),
            " (",
            totalMatching,
            ")"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: printersWithCalibrations.map(({ printer, calibrations }) => {
      const isExpanded = expandedPrinters.has(String(printer.id));
      const matchingCals = calibrations.filter((cal) => isMatchingCalibration(cal, formData));
      const matchingCount = matchingCals.length;
      const isMultiNozzle = matchingCals.some(
        (cal) => cal.extruder_id !== void 0 && cal.extruder_id !== null && cal.extruder_id > 0
      );
      const leftNozzleCals = matchingCals.filter((cal) => cal.extruder_id === 1);
      const rightNozzleCals = matchingCals.filter(
        (cal) => cal.extruder_id === 0 || cal.extruder_id === void 0 || cal.extruder_id === null
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-bambu-dark-tertiary rounded-lg overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => togglePrinterExpanded(String(printer.id)),
                className: "w-full px-4 py-3 flex items-center justify-between bg-bambu-dark-secondary hover:bg-bambu-dark-tertiary transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-bambu-gray" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-bambu-gray" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-white", children: printer.name }),
                    matchingCount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-2 py-0.5 rounded-full bg-bambu-green/20 text-bambu-green", children: [
                      matchingCount,
                      " ",
                      matchingCount !== 1 ? t("inventory.matches") : t("inventory.match")
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-bambu-dark-tertiary text-bambu-gray", children: t("inventory.noMatches") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${printer.connected ? "bg-green-500/20 text-green-500" : "bg-bambu-gray/20 text-bambu-gray"}`, children: printer.connected ? t("inventory.connected") : t("inventory.offline") })
                ]
              }
            ),
            isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 space-y-3 bg-bambu-dark border-t border-bambu-dark-tertiary", children: !printer.connected ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray italic py-2", children: t("inventory.printerOffline") }) : matchingCount === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray italic py-2", children: t("inventory.noKProfilesMatch") }) : isMultiNozzle ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              leftNozzleCals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-bambu-gray uppercase tracking-wide", children: t("inventory.leftNozzle") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: leftNozzleCals.map((cal) => renderProfile(printer, cal)) })
              ] }),
              rightNozzleCals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-bambu-gray uppercase tracking-wide", children: t("inventory.rightNozzle") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: rightNozzleCals.map((cal) => renderProfile(printer, cal)) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: matchingCals.map((cal) => renderProfile(printer, cal)) }) })
          ]
        },
        printer.id
      );
    }) }),
    selectedProfiles.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-bambu-green/10 border border-bambu-green/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: selectedProfiles.size }),
      " ",
      t("inventory.profilesSelected")
    ] }) })
  ] });
}
export {
  AdditionalSection as A,
  ColorSection as C,
  FilamentSection as F,
  MATERIALS as M,
  PAProfileSection as P,
  buildFilamentOptions as b,
  defaultFormData as d,
  extractBrandsFromPresets as e,
  findPresetOption as f,
  loadRecentColors as l,
  parsePresetName as p,
  saveRecentColor as s,
  validateForm as v
};
