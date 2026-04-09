import { c as createLucideIcon, u as useTranslation, a as useToast, k as useAuth, r as reactExports, d as useQuery, ak as React, f as api, j as jsxRuntimeExports, L as LoaderCircle, A as Card, D as CardContent, n as CircleAlert, K as Printer, B as Button, a2 as Upload, T as Trash2, X, W as WifiOff, e as useMutation, b as useQueryClient, ar as Cloud, aC as LogOut, ax as Key, v as formatRelativeTime, Q as Layers, G as ChevronDown, l as TriangleAlert, aD as Code, ag as Eye } from "./index-CMdmMVx7.js";
import { R as RefreshCw } from "./refresh-cw-BiEoeHE_.js";
import { P as Plus } from "./plus-BP-iHzEt.js";
import { S as Search } from "./search-DmnJQGxg.js";
import { D as Download } from "./download-CY8JIv9P.js";
import { S as SquareCheckBig } from "./square-check-big-CobOqy0m.js";
import { G as Gauge } from "./gauge-BZwyDeCG.js";
import { S as Square } from "./square-DluflY8c.js";
import { S as StickyNote, G as GitCompare } from "./sticky-note-C7wtfcEM.js";
import { C as Copy } from "./copy-C0dS-OpP.js";
import { S as Sparkles } from "./sparkles-Dmm623Ny.js";
import { F as Funnel } from "./funnel-BE08Dc4r.js";
import { C as Clock } from "./clock-Cv3tr1BN.js";
import { D as Droplet } from "./droplet-CkNDjG7B.js";
import { S as Settings2 } from "./settings-2-7qvQ1FIQ.js";
import { A as ArrowUp } from "./arrow-up-DnGSd7Fn.js";
import { P as Pencil } from "./pencil-BFRAXbsR.js";
import { C as Check } from "./check-D4SLDLZy.js";
import { L as List } from "./list-B8cX6zNO.js";
import { S as Save } from "./save-zQqkFHJf.js";
import { E as EyeOff } from "./eye-off-DkrTi1ED.js";
import { M as Minus } from "./minus-C2GExSet.js";
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
const __iconNode$2 = [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]
];
const Equal = createLucideIcon("equal", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M12 21v-9", key: "17s77i" }],
  ["path", { d: "M12 8V3", key: "13r4qs" }],
  ["path", { d: "M17 16h4", key: "h1uq16" }],
  ["path", { d: "M19 12V3", key: "o1uvq1" }],
  ["path", { d: "M19 21v-5", key: "qua636" }],
  ["path", { d: "M3 14h4", key: "bcjad9" }],
  ["path", { d: "M5 10V3", key: "cb8scm" }],
  ["path", { d: "M5 21v-7", key: "1w1uti" }]
];
const SlidersVertical = createLucideIcon("sliders-vertical", __iconNode);
const truncateK = (value) => {
  const num = parseFloat(value);
  return (Math.trunc(num * 1e3) / 1e3).toFixed(3);
};
const getFlowTypeLabel = (nozzleId) => {
  if (nozzleId.startsWith("HH")) return "HF";
  return "S";
};
const getNozzleTypePrefix = (nozzleId) => {
  const match = nozzleId.match(/^([A-Z]{2}\d{2})/);
  return match ? match[1] : "HH00";
};
const extractFilamentName = (profileName) => {
  const prefixes = [
    "High Flow_",
    "High Flow ",
    // underscore or space
    "Standard_",
    "Standard ",
    "HF_",
    "HF ",
    "S_",
    "S "
  ];
  for (const prefix of prefixes) {
    if (profileName.startsWith(prefix)) {
      return profileName.slice(prefix.length);
    }
  }
  const underscoreIdx = profileName.indexOf("_");
  if (underscoreIdx > 0) {
    return profileName.slice(underscoreIdx + 1);
  }
  return profileName;
};
function KProfileCard({ profile, onEdit, onCopy, selectionMode, isSelected, onToggleSelect, note }) {
  const flowType = getFlowTypeLabel(profile.nozzle_id);
  const diameter = profile.nozzle_diameter;
  const handleClick = () => {
    if (selectionMode && onToggleSelect) {
      onToggleSelect();
    } else {
      onEdit();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    selectionMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onToggleSelect,
        className: "text-bambu-gray hover:text-white transition-colors p-1",
        children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-bambu-green" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: handleClick,
        className: `flex-1 text-left px-3 py-2 bg-bambu-dark rounded hover:bg-bambu-dark-tertiary transition-colors ${isSelected ? "ring-1 ring-bambu-green" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-green font-mono text-sm font-bold whitespace-nowrap", children: truncateK(profile.k_value) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm truncate flex-1", title: profile.name, children: profile.name || "Unnamed" }),
            note && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Has note", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "w-3 h-3 text-yellow-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray whitespace-nowrap", children: [
              flowType,
              " ",
              diameter
            ] })
          ] }),
          note && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-0.5 truncate text-yellow-500/70", title: note, children: [
            "Note: ",
            note.length > 50 ? note.substring(0, 50) + "..." : note
          ] })
        ]
      }
    ),
    !selectionMode && onCopy && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          onCopy();
        },
        className: "text-bambu-gray hover:text-white transition-colors p-1",
        title: "Copy profile",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" })
      }
    )
  ] });
}
function KProfileModal({
  profile,
  printerId,
  nozzleDiameter,
  existingProfiles = [],
  builtinFilaments = [],
  isDualNozzle = false,
  initialNote = "",
  initialNoteKey = null,
  onClose,
  onSave,
  onSaveNote,
  hasPermission
}) {
  const { t } = useTranslation();
  const { showToast } = useToast();
  const [name, setName] = reactExports.useState(profile?.name || "");
  const [kValue, setKValue] = reactExports.useState(
    profile?.k_value ? truncateK(profile.k_value) : "0.020"
  );
  const [filamentId, setFilamentId] = reactExports.useState(profile?.filament_id || "");
  const [nozzleType, setNozzleType] = reactExports.useState(
    profile?.nozzle_id ? getNozzleTypePrefix(profile.nozzle_id) : "HH00"
  );
  const [modalDiameter, setModalDiameter] = reactExports.useState(
    profile?.nozzle_diameter || nozzleDiameter
  );
  const [selectedExtruders, setSelectedExtruders] = reactExports.useState(
    profile ? [profile.extruder_id] : isDualNozzle ? [0, 1] : [0]
    // Default: both extruders for new dual-nozzle profiles
  );
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [savingProgress, setSavingProgress] = reactExports.useState({ current: 0, total: 0 });
  const [note, setNote] = reactExports.useState(initialNote);
  const knownFilaments = React.useMemo(() => {
    const builtinMap = /* @__PURE__ */ new Map();
    for (const bf of builtinFilaments) {
      builtinMap.set(bf.filament_id, bf.name);
    }
    const filamentMap = /* @__PURE__ */ new Map();
    for (const p of existingProfiles) {
      if (p.filament_id && !filamentMap.has(p.filament_id)) {
        const builtinName = builtinMap.get(p.filament_id);
        const filamentName = builtinName || extractFilamentName(p.name || "");
        filamentMap.set(p.filament_id, {
          id: p.filament_id,
          name: filamentName || p.filament_id
        });
      }
    }
    return Array.from(filamentMap.values()).sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }, [existingProfiles, builtinFilaments]);
  const saveMutation = useMutation({
    mutationFn: (data) => {
      console.log("[KProfile] Calling API...");
      return api.setKProfile(printerId, data);
    },
    onSuccess: (result) => {
      console.log("[KProfile] Save success:", result);
      showToast(t("kProfiles.toast.profileSaved"));
      if (onSaveNote && note !== initialNote) {
        let profileKey;
        if (note === "" && initialNoteKey) {
          profileKey = initialNoteKey;
        } else if (profile && profile.slot_id > 0) {
          profileKey = profile.setting_id || `slot_${profile.slot_id}_${profile.filament_id}_${profile.extruder_id}`;
        } else {
          profileKey = `name_${name}_${filamentId}`;
        }
        onSaveNote(profileKey, note);
      }
      setIsSyncing(true);
      setTimeout(() => {
        setIsSyncing(false);
        onSave();
      }, 2500);
    },
    onError: (error) => {
      console.error("[KProfile] Save error:", error);
      showToast(error.message, "error");
      setIsSyncing(false);
    }
  });
  const deleteMutation = useMutation({
    mutationFn: (data) => {
      console.log("[KProfile] Deleting profile...");
      return api.deleteKProfile(printerId, data);
    },
    onSuccess: (result) => {
      console.log("[KProfile] Delete success:", result);
      showToast(t("kProfiles.toast.profileDeleted"));
      setIsSyncing(true);
      setTimeout(() => {
        setIsSyncing(false);
        onClose();
      }, 4e3);
    },
    onError: (error) => {
      console.error("[KProfile] Delete error:", error);
      showToast(error.message, "error");
      setIsSyncing(false);
    }
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  const handleDelete = () => {
    if (!profile) return;
    deleteMutation.mutate({
      slot_id: profile.slot_id,
      extruder_id: profile.extruder_id,
      nozzle_id: profile.nozzle_id,
      nozzle_diameter: profile.nozzle_diameter,
      filament_id: profile.filament_id,
      setting_id: profile.setting_id
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDualNozzle && !profile && selectedExtruders.length === 0) {
      showToast(t("kProfiles.toast.selectAtLeastOneExtruder"), "error");
      return;
    }
    const formattedKValue = parseFloat(kValue).toFixed(6);
    const nozzleId = `${nozzleType}-${modalDiameter}`;
    if (profile || selectedExtruders.length === 1) {
      const payload = {
        name,
        k_value: formattedKValue,
        filament_id: filamentId,
        nozzle_id: nozzleId,
        nozzle_diameter: modalDiameter,
        extruder_id: profile ? profile.extruder_id : selectedExtruders[0],
        setting_id: profile?.setting_id,
        slot_id: profile?.slot_id ?? 0
      };
      console.log("[KProfile] Saving profile:", payload);
      saveMutation.mutate(payload);
      return;
    }
    setIsSyncing(true);
    setSavingProgress({ current: 1, total: selectedExtruders.length });
    const batchPayload = selectedExtruders.map((extruderId) => ({
      name,
      k_value: formattedKValue,
      filament_id: filamentId,
      nozzle_id: nozzleId,
      nozzle_diameter: modalDiameter,
      extruder_id: extruderId,
      setting_id: void 0,
      slot_id: 0
    }));
    console.log(`[KProfile] Saving ${batchPayload.length} profiles in batch:`, batchPayload);
    try {
      await api.setKProfilesBatch(printerId, batchPayload);
      showToast(t("kProfiles.toast.profilesSaved", { count: selectedExtruders.length }));
      if (onSaveNote && note) {
        const profileKey = `name_${name}_${filamentId}`;
        onSaveNote(profileKey, note);
      }
    } catch (error) {
      console.error("[KProfile] Failed to save batch:", error);
      showToast(t("kProfiles.toast.failedToSaveBatch"), "error");
      setIsSyncing(false);
      setSavingProgress({ current: 0, total: 0 });
      return;
    }
    setSavingProgress({ current: selectedExtruders.length, total: selectedExtruders.length });
    setTimeout(() => {
      setIsSyncing(false);
      setSavingProgress({ current: 0, total: 0 });
      onSave();
    }, 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md relative", children: [
      isSyncing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-bambu-dark-secondary/90 flex flex-col items-center justify-center z-10 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: savingProgress.total > 1 ? t("kProfiles.modal.savingExtruder", { current: savingProgress.current, total: savingProgress.total }) : t("kProfiles.modal.syncing") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-sm mt-1", children: t("kProfiles.modal.pleaseWait") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: profile ? t("kProfiles.modal.editTitle") : t("kProfiles.modal.addTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "text-bambu-gray hover:text-white transition-colors",
              disabled: isSyncing,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("kProfiles.modal.profileName") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: name,
                onChange: (e) => setName(e.target.value),
                disabled: !!profile,
                className: `w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none ${profile ? "opacity-60 cursor-not-allowed" : ""}`,
                placeholder: t("kProfiles.modal.profileNamePlaceholder"),
                required: !profile
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("kProfiles.modal.kValue") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                inputMode: "decimal",
                value: kValue,
                onChange: (e) => {
                  const val = e.target.value;
                  if (val === "" || /^\d*\.?\d*$/.test(val)) {
                    setKValue(val);
                  }
                },
                onBlur: (e) => {
                  const num = parseFloat(e.target.value);
                  if (!isNaN(num)) {
                    setKValue((Math.trunc(num * 1e3) / 1e3).toFixed(3));
                  }
                },
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none font-mono",
                placeholder: t("kProfiles.modal.kValuePlaceholder"),
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("kProfiles.modal.kValueHelp") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("kProfiles.modal.filament") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: filamentId,
                onChange: (e) => {
                  const newFilamentId = e.target.value;
                  setFilamentId(newFilamentId);
                  if (!profile && newFilamentId && !name) {
                    const selectedFilament = knownFilaments.find((f) => f.id === newFilamentId);
                    if (selectedFilament) {
                      const flowLabel = nozzleType === "HH00" ? "HF" : "S";
                      setName(`${flowLabel} ${selectedFilament.name}`);
                    }
                  }
                },
                disabled: !!profile,
                className: `w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none ${profile ? "opacity-60 cursor-not-allowed" : ""}`,
                required: !profile,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("kProfiles.modal.selectFilament") }),
                  profile?.filament_id && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: profile.filament_id, children: knownFilaments.find((f) => f.id === profile.filament_id)?.name || profile.filament_id }, profile.filament_id),
                  !profile && knownFilaments.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: f.id, children: f.name }, f.id))
                ]
              }
            ),
            !profile && knownFilaments.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("kProfiles.modal.noFilamentsHelp") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("kProfiles.modal.flowType") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: nozzleType,
                  onChange: (e) => {
                    const newNozzleType = e.target.value;
                    setNozzleType(newNozzleType);
                    if (!profile && filamentId && !name) {
                      const selectedFilament = knownFilaments.find((f) => f.id === filamentId);
                      if (selectedFilament) {
                        const flowLabel = newNozzleType === "HS00" ? "HF" : "S";
                        setName(`${flowLabel} ${selectedFilament.name}`);
                      }
                    }
                  },
                  disabled: !!profile,
                  className: `w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none ${profile ? "opacity-60 cursor-not-allowed" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "HH00", children: t("kProfiles.modal.highFlow") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "HS00", children: t("kProfiles.modal.standard") })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("kProfiles.modal.nozzleSize") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: modalDiameter,
                  onChange: (e) => setModalDiameter(e.target.value),
                  disabled: !!profile,
                  className: `w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none ${profile ? "opacity-60 cursor-not-allowed" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0.2", children: "0.2mm" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0.4", children: "0.4mm" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0.6", children: "0.6mm" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0.8", children: "0.8mm" })
                  ]
                }
              )
            ] })
          ] }),
          isDualNozzle && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: profile ? t("kProfiles.modal.extruder") : t("kProfiles.modal.extruders") }),
            profile ? (
              // Read-only display for editing
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white opacity-60", children: profile.extruder_id === 1 ? t("kProfiles.modal.left") : t("kProfiles.modal.right") })
            ) : (
              // Checkboxes for new profile - can select both
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: selectedExtruders.includes(1),
                      onChange: (e) => {
                        if (e.target.checked) {
                          setSelectedExtruders([...selectedExtruders, 1]);
                        } else {
                          setSelectedExtruders(selectedExtruders.filter((id) => id !== 1));
                        }
                      },
                      className: "w-4 h-4 rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green focus:ring-offset-0 accent-bambu-green"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: t("kProfiles.modal.left") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: selectedExtruders.includes(0),
                      onChange: (e) => {
                        if (e.target.checked) {
                          setSelectedExtruders([...selectedExtruders, 0]);
                        } else {
                          setSelectedExtruders(selectedExtruders.filter((id) => id !== 0));
                        }
                      },
                      className: "w-4 h-4 rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green focus:ring-offset-0 accent-bambu-green"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: t("kProfiles.modal.right") })
                ] })
              ] })
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("kProfiles.modal.notes") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: note,
                onChange: (e) => setNote(e.target.value),
                placeholder: t("kProfiles.modal.notesPlaceholder"),
                rows: 2,
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:border-bambu-green focus:outline-none resize-none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("kProfiles.modal.notesHelp") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-4", children: [
            profile && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "secondary",
                onClick: () => setShowDeleteConfirm(true),
                disabled: deleteMutation.isPending || isSyncing || !hasPermission("kprofiles:delete"),
                title: !hasPermission("kprofiles:delete") ? t("kProfiles.permission.noDelete") : void 0,
                className: "text-red-500 hover:bg-red-500/10",
                children: deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "secondary",
                onClick: onClose,
                disabled: isSyncing,
                className: "flex-1",
                children: t("common.cancel")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                disabled: saveMutation.isPending || isSyncing || !hasPermission(profile ? "kprofiles:update" : "kprofiles:create"),
                title: !hasPermission(profile ? "kprofiles:update" : "kprofiles:create") ? t(profile ? "kProfiles.permission.noUpdate" : "kProfiles.permission.noCreate") : void 0,
                className: "flex-1",
                children: [
                  saveMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-4 h-4" }),
                  t("common.save")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    showDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-[60]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-5 h-5 text-red-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: t("kProfiles.deleteConfirm.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("kProfiles.deleteConfirm.cannotUndo") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mb-6", children: t("kProfiles.deleteConfirm.message", { name: profile?.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            onClick: () => setShowDeleteConfirm(false),
            className: "flex-1",
            children: t("common.cancel")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: () => {
              setShowDeleteConfirm(false);
              handleDelete();
            },
            disabled: deleteMutation.isPending,
            className: "flex-1 bg-red-500 hover:bg-red-600 text-white",
            children: [
              deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
              t("common.delete")
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
}
const STORAGE_KEYS = {
  NOZZLE_DIAMETER: "bambusy_kprofiles_nozzle",
  SORT_OPTION: "bambusy_kprofiles_sort"
};
function KProfilesView() {
  const { t } = useTranslation();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [selectedPrinter, setSelectedPrinter] = reactExports.useState(null);
  const [nozzleDiameter, setNozzleDiameter] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.NOZZLE_DIAMETER);
    return saved || "0.4";
  });
  const [editingProfile, setEditingProfile] = reactExports.useState(null);
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const [copyingProfile, setCopyingProfile] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [extruderFilter, setExtruderFilter] = reactExports.useState("all");
  const [flowTypeFilter, setFlowTypeFilter] = reactExports.useState("all");
  const [sortOption, setSortOption] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SORT_OPTION);
    return saved || "name";
  });
  const [selectionMode, setSelectionMode] = reactExports.useState(false);
  const [selectedProfiles, setSelectedProfiles] = reactExports.useState(/* @__PURE__ */ new Set());
  const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = reactExports.useState(false);
  const [bulkDeleteInProgress, setBulkDeleteInProgress] = reactExports.useState(false);
  const getProfileKey = reactExports.useCallback((profile) => `${profile.slot_id}_${profile.extruder_id}`, []);
  reactExports.useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NOZZLE_DIAMETER, nozzleDiameter);
  }, [nozzleDiameter]);
  reactExports.useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SORT_OPTION, sortOption);
  }, [sortOption]);
  const { data: printers, isLoading: printersLoading } = useQuery({
    queryKey: ["printers"],
    queryFn: api.getPrinters
  });
  const {
    data: kprofiles,
    isLoading: kprofilesLoading,
    isFetching,
    error: kprofilesError,
    refetch: refetchProfiles
  } = useQuery({
    queryKey: ["kprofiles", selectedPrinter, nozzleDiameter],
    queryFn: async () => {
      console.log("[KProfiles] Fetching profiles for printer", selectedPrinter, "nozzle", nozzleDiameter);
      const result = await api.getKProfiles(selectedPrinter, nozzleDiameter);
      console.log("[KProfiles] Received profiles:", result?.profiles?.length || 0, "profiles");
      return result;
    },
    enabled: !!selectedPrinter,
    retry: false,
    staleTime: 0,
    // Always consider data stale to ensure fresh fetch
    gcTime: 0,
    // Don't cache results
    refetchOnMount: "always"
    // Always refetch when component mounts
  });
  const { data: allProfiles } = useQuery({
    queryKey: ["kprofiles", selectedPrinter, "0.4"],
    queryFn: () => api.getKProfiles(selectedPrinter, "0.4"),
    enabled: !!selectedPrinter,
    staleTime: 6e4
    // Cache for 1 minute
  });
  const { data: builtinFilaments } = useQuery({
    queryKey: ["builtinFilaments"],
    queryFn: () => api.getBuiltinFilaments(),
    staleTime: 3e5
    // Cache for 5 minutes (static data)
  });
  const { data: filamentIdMap } = useQuery({
    queryKey: ["filamentIdMap"],
    queryFn: () => api.getFilamentIdMap(),
    staleTime: 3e5
    // Cache for 5 minutes
  });
  const {
    data: notesData,
    refetch: refetchNotes
  } = useQuery({
    queryKey: ["kprofile-notes", selectedPrinter],
    queryFn: () => api.getKProfileNotes(selectedPrinter),
    enabled: !!selectedPrinter,
    staleTime: 3e4
    // Cache for 30 seconds
  });
  const isOfflineError = kprofilesError?.message?.includes("not connected");
  reactExports.useEffect(() => {
    if (!selectedPrinter && printers && printers.length > 0) {
      const activePrinter = printers.find((p) => p.is_active);
      if (activePrinter) {
        setSelectedPrinter(activePrinter.id);
      }
    }
  }, [selectedPrinter, printers]);
  reactExports.useEffect(() => {
    if (selectedPrinter) {
      const timer = setTimeout(() => {
        refetchProfiles();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedPrinter, nozzleDiameter]);
  const connectedPrinters = printers?.filter((p) => p.is_active) || [];
  const builtinFilamentMap = React.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    if (builtinFilaments) {
      for (const bf of builtinFilaments) {
        map.set(bf.filament_id, bf.name);
      }
    }
    if (filamentIdMap) {
      for (const [fid, name] of Object.entries(filamentIdMap)) {
        if (!map.has(fid)) {
          map.set(fid, name);
        }
      }
    }
    return map;
  }, [builtinFilaments, filamentIdMap]);
  const enrichedBuiltinFilaments = React.useMemo(() => {
    return Array.from(builtinFilamentMap.entries()).map(([fid, name]) => ({
      filament_id: fid,
      name
    }));
  }, [builtinFilamentMap]);
  const resolveFilamentName = React.useCallback((profile) => {
    return builtinFilamentMap.get(profile.filament_id) || extractFilamentName(profile.name);
  }, [builtinFilamentMap]);
  const filteredProfiles = React.useMemo(() => {
    if (!kprofiles?.profiles) return [];
    const filtered = kprofiles.profiles.filter((p) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch = !query || p.name.toLowerCase().includes(query) || p.filament_id.toLowerCase().includes(query);
      const matchesExtruder = extruderFilter === "all" || extruderFilter === "left" && p.extruder_id === 1 || extruderFilter === "right" && p.extruder_id === 0;
      const matchesFlowType = flowTypeFilter === "all" || flowTypeFilter === "hf" && p.nozzle_id.startsWith("HH") || flowTypeFilter === "s" && p.nozzle_id.startsWith("HS");
      return matchesSearch && matchesExtruder && matchesFlowType;
    });
    return filtered.sort((a, b) => {
      switch (sortOption) {
        case "k_value":
          return parseFloat(a.k_value) - parseFloat(b.k_value);
        case "filament":
          return resolveFilamentName(a).localeCompare(resolveFilamentName(b));
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [kprofiles?.profiles, searchQuery, extruderFilter, flowTypeFilter, sortOption, resolveFilamentName]);
  const selectedPrinterData = printers?.find((p) => p.id === selectedPrinter);
  const isDualNozzle = selectedPrinterData?.nozzle_count === 2;
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
        return;
      }
      if (editingProfile || showAddModal || copyingProfile) {
        return;
      }
      if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        refetchProfiles();
      } else if (e.key === "n" || e.key === "N") {
        e.preventDefault();
        setShowAddModal(true);
      } else if (e.key === "Escape" && selectionMode) {
        e.preventDefault();
        setSelectionMode(false);
        setSelectedProfiles(/* @__PURE__ */ new Set());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [editingProfile, showAddModal, copyingProfile, selectionMode, refetchProfiles]);
  const handleExport = reactExports.useCallback(() => {
    if (!kprofiles?.profiles || kprofiles.profiles.length === 0) {
      showToast(t("kProfiles.toast.noProfilesToExport"), "error");
      return;
    }
    const exportData = {
      version: 1,
      exported_at: (/* @__PURE__ */ new Date()).toISOString(),
      printer: selectedPrinterData?.name || "Unknown",
      nozzle_diameter: nozzleDiameter,
      profiles: kprofiles.profiles.map((p) => ({
        name: p.name,
        k_value: p.k_value,
        filament_id: p.filament_id,
        nozzle_id: p.nozzle_id,
        nozzle_diameter: p.nozzle_diameter,
        extruder_id: p.extruder_id
      }))
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kprofiles_${selectedPrinterData?.name || "printer"}_${nozzleDiameter}mm_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(t("kProfiles.toast.exportedProfiles", { count: kprofiles.profiles.length }));
  }, [kprofiles?.profiles, selectedPrinterData, nozzleDiameter, showToast, t]);
  const handleImport = reactExports.useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (!data.profiles || !Array.isArray(data.profiles)) {
          showToast(t("kProfiles.toast.invalidFileFormat"), "error");
          return;
        }
        let imported = 0;
        for (const p of data.profiles) {
          if (!p.name || !p.k_value || !p.filament_id) continue;
          try {
            await api.setKProfile(selectedPrinter, {
              name: p.name,
              k_value: parseFloat(p.k_value).toFixed(6),
              filament_id: p.filament_id,
              nozzle_id: p.nozzle_id || `HH00-${nozzleDiameter}`,
              nozzle_diameter: p.nozzle_diameter || nozzleDiameter,
              extruder_id: p.extruder_id ?? 0,
              slot_id: 0
              // Always create new
            });
            imported++;
            await new Promise((resolve) => setTimeout(resolve, 500));
          } catch (err) {
            console.error("Failed to import profile:", p.name, err);
          }
        }
        showToast(t("kProfiles.toast.importedProfiles", { count: imported, total: data.profiles.length }));
        refetchProfiles();
      } catch (err) {
        console.error("Import error:", err);
        showToast(t("kProfiles.toast.failedToParseImport"), "error");
      }
    };
    input.click();
  }, [selectedPrinter, nozzleDiameter, showToast, refetchProfiles, t]);
  const toggleProfileSelection = reactExports.useCallback((profileKey) => {
    setSelectedProfiles((prev) => {
      const next = new Set(prev);
      if (next.has(profileKey)) {
        next.delete(profileKey);
      } else {
        next.add(profileKey);
      }
      return next;
    });
  }, []);
  const selectAllProfiles = reactExports.useCallback(() => {
    setSelectedProfiles(new Set(filteredProfiles.map((p) => getProfileKey(p))));
  }, [filteredProfiles, getProfileKey]);
  const handleBulkDelete = reactExports.useCallback(() => {
    if (selectedProfiles.size === 0) return;
    setShowBulkDeleteConfirm(true);
  }, [selectedProfiles.size]);
  const executeBulkDelete = reactExports.useCallback(async () => {
    const profilesToDelete = filteredProfiles.filter((p) => selectedProfiles.has(getProfileKey(p)));
    setBulkDeleteInProgress(true);
    let deleted = 0;
    for (const profile of profilesToDelete) {
      try {
        await api.deleteKProfile(selectedPrinter, {
          slot_id: profile.slot_id,
          extruder_id: profile.extruder_id,
          nozzle_id: profile.nozzle_id,
          nozzle_diameter: profile.nozzle_diameter,
          filament_id: profile.filament_id,
          setting_id: profile.setting_id
        });
        deleted++;
        await new Promise((resolve) => setTimeout(resolve, 300));
      } catch (err) {
        console.error("Failed to delete profile:", profile.name, err);
      }
    }
    showToast(t("kProfiles.toast.profilesDeleted", { count: deleted }));
    setBulkDeleteInProgress(false);
    setShowBulkDeleteConfirm(false);
    setSelectionMode(false);
    setSelectedProfiles(/* @__PURE__ */ new Set());
    refetchProfiles();
  }, [selectedPrinter, selectedProfiles, filteredProfiles, showToast, refetchProfiles, getProfileKey, t]);
  const getProfileKeys = reactExports.useCallback((profile) => {
    const keys = [];
    if (profile.setting_id) {
      keys.push(profile.setting_id);
    }
    keys.push(`slot_${profile.slot_id}_${profile.filament_id}_${profile.extruder_id}`);
    keys.push(`name_${profile.name}_${profile.filament_id}`);
    return keys;
  }, []);
  const handleSaveNote = reactExports.useCallback(async (profileKey, noteText) => {
    if (!selectedPrinter) return;
    try {
      await api.setKProfileNote(selectedPrinter, profileKey, noteText);
      refetchNotes();
    } catch (err) {
      console.error("Failed to save note:", err);
      showToast(t("kProfiles.toast.failedToSaveNote"), "error");
    }
  }, [selectedPrinter, refetchNotes, showToast, t]);
  const getNoteWithKey = reactExports.useCallback((profile) => {
    if (!notesData?.notes) return { note: "", key: null };
    const keys = getProfileKeys(profile);
    for (const key of keys) {
      if (notesData.notes[key]) {
        return { note: notesData.notes[key], key };
      }
    }
    return { note: "", key: null };
  }, [notesData, getProfileKeys]);
  const getNote = reactExports.useCallback((profile) => {
    return getNoteWithKey(profile).note;
  }, [getNoteWithKey]);
  if (printersLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) });
  }
  if (!printers || printers.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-12 h-12 text-bambu-gray mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: t("kProfiles.noPrintersConfigured") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("kProfiles.addPrinterInSettings") })
    ] }) });
  }
  if (connectedPrinters.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-12 h-12 text-bambu-gray mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: t("kProfiles.noActivePrinters") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("kProfiles.enablePrinterConnection") })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    isFetching && !kprofilesLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-10 h-10 text-bambu-green animate-spin mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("kProfiles.loadingProfiles") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-48", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("kProfiles.printer") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: selectedPrinter || "",
            onChange: (e) => setSelectedPrinter(parseInt(e.target.value)),
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
            children: connectedPrinters.map((printer) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: printer.id, children: printer.name }, printer.id))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("kProfiles.nozzle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: nozzleDiameter,
            onChange: (e) => setNozzleDiameter(e.target.value),
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0.2", children: "0.2mm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0.4", children: "0.4mm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0.6", children: "0.6mm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0.8", children: "0.8mm" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => refetchProfiles(),
            disabled: isFetching || !hasPermission("kprofiles:read"),
            title: !hasPermission("kprofiles:read") ? t("kProfiles.permission.noRead") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isFetching ? "animate-spin" : ""}` }),
              t("kProfiles.refresh")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: () => setShowAddModal(true),
            disabled: !hasPermission("kprofiles:create"),
            title: !hasPermission("kprofiles:create") ? t("kProfiles.permission.noCreate") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              t("kProfiles.addProfile")
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-48 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: t("kProfiles.searchPlaceholder"),
            className: "w-full pl-10 pr-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:border-bambu-green focus:outline-none"
          }
        )
      ] }),
      isDualNozzle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: extruderFilter,
          onChange: (e) => setExtruderFilter(e.target.value),
          className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: t("kProfiles.allExtruders") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "left", children: t("kProfiles.leftOnly") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "right", children: t("kProfiles.rightOnly") })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: flowTypeFilter,
          onChange: (e) => setFlowTypeFilter(e.target.value),
          className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: t("kProfiles.allFlow") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hf", children: t("kProfiles.hfOnly") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "s", children: t("kProfiles.sOnly") })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: sortOption,
          onChange: (e) => setSortOption(e.target.value),
          className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: t("kProfiles.sortName") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "k_value", children: t("kProfiles.sortKValue") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "filament", children: t("kProfiles.sortFilament") })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          onClick: handleExport,
          disabled: !kprofiles?.profiles?.length || !hasPermission("kprofiles:read"),
          title: !hasPermission("kprofiles:read") ? t("kProfiles.permission.noExport") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
            t("kProfiles.export")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          onClick: handleImport,
          disabled: !hasPermission("kprofiles:create"),
          title: !hasPermission("kprofiles:create") ? t("kProfiles.permission.noImport") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
            t("kProfiles.import")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      selectionMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: selectAllProfiles,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4" }),
              t("kProfiles.selectAll")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: handleBulkDelete,
            disabled: selectedProfiles.size === 0 || !hasPermission("kprofiles:delete"),
            className: "text-red-500 hover:bg-red-500/10",
            title: !hasPermission("kprofiles:delete") ? t("kProfiles.permission.noDelete") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
              t("kProfiles.delete"),
              " (",
              selectedProfiles.size,
              ")"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => {
              setSelectionMode(false);
              setSelectedProfiles(/* @__PURE__ */ new Set());
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
              t("common.cancel")
            ]
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          onClick: () => setSelectionMode(true),
          disabled: !filteredProfiles.length || !hasPermission("kprofiles:delete"),
          title: !hasPermission("kprofiles:delete") ? t("kProfiles.permission.noDelete") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4" }),
            t("kProfiles.select")
          ]
        }
      )
    ] }),
    kprofilesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) }) : isOfflineError ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "w-12 h-12 text-bambu-gray mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: t("kProfiles.printerOffline") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mb-4", children: t("kProfiles.printerOfflineDesc") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => refetchProfiles(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
        t("common.refresh")
      ] })
    ] }) }) : filteredProfiles.length > 0 ? isDualNozzle ? (
      // Dual-nozzle: show Left/Right columns
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-bambu-gray mb-2 px-1", children: t("kProfiles.leftExtruder") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: filteredProfiles.filter((p) => p.extruder_id === 1).map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            KProfileCard,
            {
              profile,
              onEdit: () => setEditingProfile(profile),
              onCopy: () => setCopyingProfile(profile),
              selectionMode,
              isSelected: selectedProfiles.has(getProfileKey(profile)),
              onToggleSelect: () => toggleProfileSelection(getProfileKey(profile)),
              note: getNote(profile)
            },
            getProfileKey(profile)
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-bambu-gray mb-2 px-1", children: t("kProfiles.rightExtruder") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: filteredProfiles.filter((p) => p.extruder_id === 0).map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            KProfileCard,
            {
              profile,
              onEdit: () => setEditingProfile(profile),
              onCopy: () => setCopyingProfile(profile),
              selectionMode,
              isSelected: selectedProfiles.has(getProfileKey(profile)),
              onToggleSelect: () => toggleProfileSelection(getProfileKey(profile)),
              note: getNote(profile)
            },
            getProfileKey(profile)
          )) })
        ] })
      ] })
    ) : (
      // Single-nozzle: show all profiles in one list
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: filteredProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        KProfileCard,
        {
          profile,
          onEdit: () => setEditingProfile(profile),
          onCopy: () => setCopyingProfile(profile),
          selectionMode,
          isSelected: selectedProfiles.has(getProfileKey(profile)),
          onToggleSelect: () => toggleProfileSelection(getProfileKey(profile)),
          note: getNote(profile)
        },
        getProfileKey(profile)
      )) })
    ) : searchQuery || extruderFilter !== "all" || flowTypeFilter !== "all" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-12 h-12 text-bambu-gray mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: t("kProfiles.noMatchingProfiles") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("kProfiles.noMatchingProfilesDesc") })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-12 h-12 text-bambu-gray mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: t("kProfiles.noKProfiles") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mb-4", children: t("kProfiles.noKProfilesDesc", { diameter: nozzleDiameter }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowAddModal(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        t("kProfiles.createFirstProfile")
      ] })
    ] }) }),
    editingProfile && selectedPrinter && (() => {
      const { note, key } = getNoteWithKey(editingProfile);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        KProfileModal,
        {
          profile: editingProfile,
          printerId: selectedPrinter,
          nozzleDiameter,
          existingProfiles: allProfiles?.profiles || kprofiles?.profiles,
          builtinFilaments: enrichedBuiltinFilaments,
          isDualNozzle,
          initialNote: note,
          initialNoteKey: key,
          onSaveNote: handleSaveNote,
          hasPermission,
          onClose: () => {
            console.log("[KProfiles] Edit modal onClose - refetching profiles...");
            setEditingProfile(null);
            refetchProfiles();
          },
          onSave: () => {
            setEditingProfile(null);
            refetchProfiles();
          }
        }
      );
    })(),
    showAddModal && selectedPrinter && /* @__PURE__ */ jsxRuntimeExports.jsx(
      KProfileModal,
      {
        printerId: selectedPrinter,
        nozzleDiameter,
        existingProfiles: allProfiles?.profiles || kprofiles?.profiles,
        builtinFilaments: enrichedBuiltinFilaments,
        isDualNozzle,
        onSaveNote: handleSaveNote,
        hasPermission,
        onClose: () => {
          setShowAddModal(false);
          refetchProfiles();
        },
        onSave: () => {
          setShowAddModal(false);
          refetchProfiles();
        }
      }
    ),
    copyingProfile && selectedPrinter && /* @__PURE__ */ jsxRuntimeExports.jsx(
      KProfileModal,
      {
        printerId: selectedPrinter,
        nozzleDiameter,
        existingProfiles: allProfiles?.profiles || kprofiles?.profiles,
        builtinFilaments: enrichedBuiltinFilaments,
        isDualNozzle,
        onSaveNote: handleSaveNote,
        hasPermission,
        profile: {
          ...copyingProfile,
          slot_id: 0,
          // Force new profile creation
          name: `${copyingProfile.name} (Copy)`
          // Indicate it's a copy
        },
        onClose: () => {
          setCopyingProfile(null);
          refetchProfiles();
        },
        onSave: () => {
          setCopyingProfile(null);
          refetchProfiles();
        }
      }
    ),
    showBulkDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-5 h-5 text-red-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: t("kProfiles.bulkDelete.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("kProfiles.bulkDelete.cannotUndo") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mb-6", children: t("kProfiles.bulkDelete.message", { count: selectedProfiles.size }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            onClick: () => setShowBulkDeleteConfirm(false),
            disabled: bulkDeleteInProgress,
            className: "flex-1",
            children: t("common.cancel")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: executeBulkDelete,
            disabled: bulkDeleteInProgress,
            className: "flex-1 bg-red-500 hover:bg-red-600 text-white",
            children: [
              bulkDeleteInProgress ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
              t("common.delete")
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
}
function extractMetadata(name, inherits) {
  const searchIn = `${name} ${inherits || ""}`;
  const printerMatch = searchIn.match(/@?\s*(?:BBL\s+)?(?:Bambu\s+Lab\s+)?([XPAH][1-9][A-Z]?(?:\s*(?:Carbon|mini))?|H2D)/i);
  const printer = printerMatch ? printerMatch[1].trim() : null;
  const nozzleMatch = searchIn.match(/(\d+\.?\d*)\s*(?:mm\s*)?nozzle|nozzle\s*(\d+\.?\d*)/i);
  const nozzle = nozzleMatch ? (nozzleMatch[1] || nozzleMatch[2]) + "mm" : null;
  const layerMatch = searchIn.match(/(\d+\.?\d*)mm\s*(?:Standard|Fine|Extra Fine|Draft|Quality)?/i);
  const layerHeight = layerMatch ? layerMatch[1] + "mm" : null;
  const filamentMatch = searchIn.match(/\b(PLA|PETG|ABS|ASA|TPU|PC|PA|PVA|HIPS|PP|PET(?:-?CF)?|PA(?:-?CF)?|PLA(?:-?CF)?)\b/i);
  const filamentType = filamentMatch ? filamentMatch[1].toUpperCase() : null;
  return { printer, nozzle, layerHeight, filamentType };
}
function isUserPreset(settingId) {
  return /^(P[FPM]US|PF\d|PP\d)/.test(settingId);
}
function LoginForm({ onSuccess, t }) {
  const { showToast } = useToast();
  const [step, setStep] = reactExports.useState("email");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [code, setCode] = reactExports.useState("");
  const [token, setToken] = reactExports.useState("");
  const [region, setRegion] = reactExports.useState("global");
  const [verificationType, setVerificationType] = reactExports.useState(null);
  const [tfaKey, setTfaKey] = reactExports.useState(null);
  const loginMutation = useMutation({
    mutationFn: () => api.cloudLogin(email, password, region),
    onSuccess: (result) => {
      if (result.success) {
        showToast(t("profiles.login.toast.loggedIn"));
        onSuccess();
      } else if (result.needs_verification) {
        setVerificationType(result.verification_type || "email");
        setTfaKey(result.tfa_key || null);
        if (result.verification_type === "totp") {
          showToast(t("profiles.login.toast.enterTotp"));
        } else {
          showToast(t("profiles.login.toast.codeSent"));
        }
        setStep("code");
      } else {
        showToast(result.message, "error");
      }
    },
    onError: (error) => showToast(error.message, "error")
  });
  const verifyMutation = useMutation({
    mutationFn: () => api.cloudVerify(email, code, tfaKey || void 0),
    onSuccess: (result) => {
      if (result.success) {
        showToast(t("profiles.login.toast.loggedIn"));
        onSuccess();
      } else {
        showToast(result.message, "error");
      }
    },
    onError: (error) => showToast(error.message, "error")
  });
  const tokenMutation = useMutation({
    mutationFn: () => api.cloudSetToken(token),
    onSuccess: () => {
      showToast(t("profiles.login.toast.tokenSet"));
      onSuccess();
    },
    onError: (error) => showToast(error.message, "error")
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === "email") loginMutation.mutate();
    else if (step === "code") verifyMutation.mutate();
    else if (step === "token") tokenMutation.mutate();
  };
  const isPending = loginMutation.isPending || verifyMutation.isPending || tokenMutation.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bambu-green/20 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "w-6 h-6 text-bambu-green" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: t("profiles.login.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("profiles.login.subtitle") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      step === "email" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("profiles.login.email") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray-dark focus:border-bambu-green focus:outline-none",
              placeholder: "your@email.com",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("profiles.login.password") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray-dark focus:border-bambu-green focus:outline-none",
              placeholder: "••••••••",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("profiles.login.region") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: region,
              onChange: (e) => setRegion(e.target.value),
              className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "global", children: t("profiles.login.regionGlobal") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "china", children: t("profiles.login.regionChina") })
              ]
            }
          )
        ] })
      ] }),
      step === "code" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: verificationType === "totp" ? t("profiles.login.totpCode") : t("profiles.login.verificationCode") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-2", children: verificationType === "totp" ? t("profiles.login.enterTotpHint") : t("profiles.login.checkEmail", { email }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: code,
            onChange: (e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6)),
            className: "w-full px-3 py-3 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-center text-2xl tracking-widest font-mono focus:border-bambu-green focus:outline-none",
            placeholder: "000000",
            maxLength: 6,
            required: true
          }
        )
      ] }),
      step === "token" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("profiles.login.accessToken") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-2", children: t("profiles.login.accessTokenHint") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: token,
            onChange: (e) => setToken(e.target.value),
            className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-xs font-mono placeholder-bambu-gray-dark focus:border-bambu-green focus:outline-none resize-none",
            placeholder: "eyJ...",
            rows: 4,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 max-[550px]:flex-wrap max-[550px]:items-center", children: [
        step === "code" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: () => setStep("email"), className: "flex-1", children: t("profiles.login.back") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: isPending, className: "flex-1", children: [
          isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
          step === "email" ? t("profiles.login.loginButton") : step === "code" ? t("profiles.login.verifyButton") : t("profiles.login.setTokenButton")
        ] })
      ] }),
      step === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setStep("token"),
          className: "text-sm text-bambu-gray hover:text-white flex items-center gap-2 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-4 h-4" }),
            t("profiles.login.useToken")
          ]
        }
      ) }),
      step === "token" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setStep("email"),
          className: "text-sm text-bambu-gray hover:text-white flex items-center gap-2 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
            t("profiles.login.useEmail")
          ]
        }
      ) })
    ] })
  ] }) });
}
function FilterDropdown({
  label,
  value,
  options,
  onChange
}) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const selectedOption = options.find((o) => o.value === value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "flex items-center gap-2 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-sm text-white hover:border-bambu-gray-dark transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
            label,
            ":"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedOption?.label || "All" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 text-bambu-gray transition-transform ${isOpen ? "rotate-180" : ""}` })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setIsOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 mt-1 min-w-[160px] bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl z-20 py-1 max-h-60 overflow-y-auto", children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            onChange(option.value);
            setIsOpen(false);
          },
          className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-bambu-dark-tertiary transition-colors ${value === option.value ? "text-bambu-green" : "text-white"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: option.label }),
            option.count !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray text-xs", children: option.count })
          ]
        },
        option.value
      )) })
    ] })
  ] });
}
function ScrollToTop() {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: scrollToTop,
      className: "fixed bottom-6 right-6 p-3 bg-bambu-green hover:bg-bambu-green-light text-white rounded-full shadow-lg shadow-bambu-green/25 transition-all z-40",
      "aria-label": "Scroll to top",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-5 h-5" })
    }
  );
}
function PresetListItem({
  setting,
  onClick,
  onDuplicate,
  compareMode,
  isCompareSelected,
  compareIndex,
  compareDisabled,
  t
}) {
  const metadata = extractMetadata(setting.name);
  const isEditable = isUserPreset(setting.setting_id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick,
        disabled: compareDisabled,
        className: `flex-1 text-left px-3 py-2 rounded transition-colors ${isCompareSelected ? "bg-blue-500/20 border border-blue-500/50" : compareDisabled ? "bg-bambu-dark/50 opacity-40 cursor-not-allowed" : "bg-bambu-dark hover:bg-bambu-dark-tertiary"} ${compareMode && !compareDisabled ? "cursor-pointer" : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          isCompareSelected && compareIndex !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-medium", children: compareIndex + 1 }),
          !isCompareSelected && isEditable && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-1.5 h-1.5 rounded-full bg-bambu-green", title: t("profiles.presets.myPreset") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm truncate flex-1", title: setting.name, children: setting.name }),
          metadata.filamentType && setting.type === "filament" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray whitespace-nowrap", children: metadata.filamentType }),
          metadata.layerHeight && setting.type === "process" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray whitespace-nowrap", children: metadata.layerHeight }),
          metadata.printer && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray whitespace-nowrap", children: metadata.printer })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          onDuplicate();
        },
        className: "opacity-0 group-hover:opacity-100 text-bambu-gray hover:text-white transition-all p-1",
        title: t("profiles.presets.duplicate"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" })
      }
    )
  ] });
}
function formatJsonForDisplay(obj, indent = 0) {
  const spaces = "  ".repeat(indent);
  if (obj === null) return "null";
  if (obj === void 0) return "undefined";
  if (typeof obj === "string") {
    if (obj.includes("\\n") || obj.includes("\n")) {
      const formatted = obj.replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\t/g, "	");
      const lines = formatted.split("\n");
      if (lines.length > 1) {
        return '"""\n' + lines.map((l) => spaces + "  " + l).join("\n") + "\n" + spaces + '"""';
      }
    }
    return JSON.stringify(obj);
  }
  if (typeof obj === "number" || typeof obj === "boolean") {
    return String(obj);
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]";
    const items = obj.map((item) => spaces + "  " + formatJsonForDisplay(item, indent + 1));
    return "[\n" + items.join(",\n") + "\n" + spaces + "]";
  }
  if (typeof obj === "object") {
    const entries = Object.entries(obj);
    if (entries.length === 0) return "{}";
    const items = entries.map(
      ([key, val]) => spaces + "  " + JSON.stringify(key) + ": " + formatJsonForDisplay(val, indent + 1)
    );
    return "{\n" + items.join(",\n") + "\n" + spaces + "}";
  }
  return String(obj);
}
function PresetDetailModal({
  setting,
  onClose,
  onDeleted,
  onDuplicate,
  onEdit,
  hasPermission,
  t
}) {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  const { data: detail, isLoading } = useQuery({
    queryKey: ["cloudSettingDetail", setting.setting_id],
    queryFn: () => api.getCloudSettingDetail(setting.setting_id)
  });
  const deleteMutation = useMutation({
    mutationFn: () => api.deleteCloudSetting(setting.setting_id),
    onSuccess: () => {
      showToast(t("profiles.presets.toast.deleted"));
      queryClient.invalidateQueries({ queryKey: ["cloudSettings"] });
      onDeleted();
    },
    onError: (error) => showToast(error.message, "error")
  });
  const isEditable = isUserPreset(setting.setting_id);
  const metadata = extractMetadata(setting.name, detail?.setting?.inherits);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col min-h-0 flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white truncate", children: setting.name }),
          isEditable && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-xs font-medium bg-bambu-green/20 text-bambu-green rounded-full", children: t("profiles.presets.editable") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 text-sm text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: t(`profiles.presets.types.${setting.type}`) }),
          metadata.printer && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: metadata.printer })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-2 text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary rounded-lg transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto p-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) }) : detail ? /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-xs text-bambu-gray font-mono whitespace-pre-wrap break-all bg-bambu-dark p-4 rounded-lg border border-bambu-dark-tertiary overflow-x-auto max-w-full", children: formatJsonForDisplay(detail) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 text-bambu-gray", children: t("profiles.presets.failedToLoadDetails") }) }),
    showDeleteConfirm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 p-4 border-t border-bambu-dark-tertiary bg-red-500/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 text-red-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t("profiles.presets.deleteConfirm") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-4", children: t("profiles.presets.deleteWarning", { name: setting.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setShowDeleteConfirm(false), disabled: deleteMutation.isPending, className: "flex-1", children: t("common.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "danger", onClick: () => deleteMutation.mutate(), disabled: deleteMutation.isPending, className: "flex-1", children: [
          deleteMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
          t("common.delete")
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-4 border-t border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, className: "flex-1", children: t("common.close") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          onClick: onDuplicate,
          disabled: !hasPermission("cloud:auth"),
          title: !hasPermission("cloud:auth") ? t("profiles.presets.noDuplicatePermission") : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
            t("profiles.presets.duplicate")
          ]
        }
      ),
      isEditable && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: onEdit,
            disabled: isLoading || !detail || !hasPermission("cloud:auth"),
            title: !hasPermission("cloud:auth") ? t("profiles.presets.noEditPermission") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" }),
              t("common.edit")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "danger",
            onClick: () => setShowDeleteConfirm(true),
            disabled: !hasPermission("cloud:auth"),
            title: !hasPermission("cloud:auth") ? t("profiles.presets.noDeletePermission") : void 0,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }) })
  ] }) }) });
}
function loadCustomTemplates() {
  try {
    const stored = localStorage.getItem("bambusy_preset_templates");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}
function saveCustomTemplates(templates) {
  localStorage.setItem("bambusy_preset_templates", JSON.stringify(templates));
}
function TemplatesModal({
  onClose,
  onApply,
  t
}) {
  const { showToast } = useToast();
  const [templates, setTemplates] = reactExports.useState(loadCustomTemplates);
  const [filterType, setFilterType] = reactExports.useState("all");
  const [editingId, setEditingId] = reactExports.useState(null);
  const [editName, setEditName] = reactExports.useState("");
  const [editDesc, setEditDesc] = reactExports.useState("");
  const [editSettings, setEditSettings] = reactExports.useState("{}");
  const [editSettingsError, setEditSettingsError] = reactExports.useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = reactExports.useState(null);
  const filteredTemplates = filterType === "all" ? templates : templates.filter((tpl) => tpl.type === filterType);
  const saveTemplates = (updated) => {
    setTemplates(updated);
    saveCustomTemplates(updated);
  };
  const handleDelete = (id) => {
    const updated = templates.filter((tpl) => tpl.id !== id);
    saveTemplates(updated);
    setDeleteConfirmId(null);
    showToast(t("profiles.templates.toast.deleted"));
  };
  const handleEdit = (template) => {
    setEditingId(template.id);
    setEditName(template.name);
    setEditDesc(template.description);
    setEditSettings(JSON.stringify(template.settings, null, 2));
    setEditSettingsError(null);
  };
  const handleSaveEdit = () => {
    if (!editingId || !editName.trim()) return;
    try {
      const settings = JSON.parse(editSettings);
      const updated = templates.map(
        (tpl) => tpl.id === editingId ? { ...tpl, name: editName.trim(), description: editDesc.trim(), settings } : tpl
      );
      saveTemplates(updated);
      setEditingId(null);
      showToast(t("profiles.templates.toast.updated"));
    } catch (e) {
      setEditSettingsError(e.message);
    }
  };
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditDesc("");
    setEditSettings("{}");
    setEditSettingsError(null);
  };
  const toggleShowInModal = (id) => {
    const updated = templates.map(
      (tpl) => tpl.id === id ? { ...tpl, showInModal: !tpl.showInModal } : tpl
    );
    saveTemplates(updated);
  };
  const typeLabels = {
    filament: { label: t("profiles.presets.types.filament"), icon: Droplet, color: "text-amber-400" },
    print: { label: t("profiles.presets.types.process"), icon: Settings2, color: "text-blue-400" },
    printer: { label: t("profiles.presets.types.printer"), icon: Printer, color: "text-purple-400" }
  };
  const templateToDelete = deleteConfirmId ? templates.find((tpl) => tpl.id === deleteConfirmId) : null;
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (deleteConfirmId) {
          setDeleteConfirmId(null);
        } else if (editingId) {
          handleCancelEdit();
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [deleteConfirmId, editingId, onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: [
    templateToDelete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-red-500/20 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-red-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: t("profiles.templates.deleteTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("profiles.templates.deleteWarning") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white mb-6", children: t("profiles.templates.deleteConfirm", { name: templateToDelete.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setDeleteConfirmId(null), className: "flex-1", children: t("common.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => handleDelete(deleteConfirmId), className: "flex-1 bg-red-500 hover:bg-red-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
          t("common.delete")
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-2xl max-h-[80vh] flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-amber-400" }),
          t("profiles.templates.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-bambu-gray hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-4 border-b border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: t("profiles.templates.typeFilter") }),
        ["all", "filament", "print", "printer"].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setFilterType(type),
            className: `px-3 py-1 text-sm rounded-lg transition-colors ${filterType === type ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
            children: type === "all" ? t("common.all") : typeLabels[type].label
          },
          type
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: filteredTemplates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-bambu-gray", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-12 h-12 mx-auto mb-4 opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("profiles.templates.noTemplates") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: t("profiles.templates.createFirst") })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filteredTemplates.map((template) => {
        const typeInfo = typeLabels[template.type];
        const TypeIcon = typeInfo.icon;
        if (editingId === template.id) {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-4 bg-bambu-dark rounded-lg border border-bambu-green",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: editName,
                      onChange: (e) => setEditName(e.target.value),
                      placeholder: t("profiles.templates.namePlaceholder"),
                      className: "px-3 py-2 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-sm focus:border-bambu-green focus:outline-none",
                      autoFocus: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: editDesc,
                      onChange: (e) => setEditDesc(e.target.value),
                      placeholder: t("profiles.templates.descriptionPlaceholder"),
                      className: "px-3 py-2 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-sm focus:border-bambu-green focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-bambu-gray mb-1 block", children: t("profiles.templates.settingsJson") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      value: editSettings,
                      onChange: (e) => {
                        setEditSettings(e.target.value);
                        setEditSettingsError(null);
                      },
                      rows: 6,
                      className: `w-full px-3 py-2 bg-bambu-dark-secondary border rounded text-white text-sm font-mono focus:outline-none ${editSettingsError ? "border-red-500" : "border-bambu-dark-tertiary focus:border-bambu-green"}`
                    }
                  ),
                  editSettingsError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400 mt-1", children: editSettingsError })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: handleSaveEdit, disabled: !editName.trim(), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                    "Save"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: handleCancelEdit, children: "Cancel" })
                ] })
              ]
            },
            template.id
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 p-3 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary hover:border-bambu-gray-dark transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { className: `w-5 h-5 ${typeInfo.color} flex-shrink-0` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white", children: template.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray truncate", children: template.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray-dark px-2 py-1 bg-bambu-dark-secondary rounded", children: t("profiles.templates.fieldsCount", { count: Object.keys(template.settings).length }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => toggleShowInModal(template.id),
                  className: `p-1 transition-colors ${template.showInModal ? "text-bambu-green hover:text-bambu-green/70" : "text-bambu-gray hover:text-white"}`,
                  title: template.showInModal ? t("profiles.templates.shownInModals") : t("profiles.templates.hiddenInModals"),
                  children: template.showInModal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onApply(template),
                  className: "px-3 py-1 text-xs bg-bambu-green/20 text-bambu-green rounded hover:bg-bambu-green/30 transition-colors",
                  children: t("profiles.templates.apply")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleEdit(template),
                  className: "p-1 text-bambu-gray hover:text-white",
                  title: t("common.edit"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setDeleteConfirmId(template.id),
                  className: "p-1 text-bambu-gray hover:text-red-400",
                  title: t("common.delete"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ]
          },
          template.id
        );
      }) }) })
    ] }) })
  ] });
}
function DiffModal({
  onClose,
  leftPreset,
  rightPreset,
  leftLabel,
  rightLabel,
  t
}) {
  const [filterMode, setFilterMode] = reactExports.useState("changes");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const diffEntries = reactExports.useMemo(() => {
    const allKeys = /* @__PURE__ */ new Set([...Object.keys(leftPreset), ...Object.keys(rightPreset)]);
    const entries = [];
    for (const key of allKeys) {
      if (key === "inherits" || key === "version") continue;
      const leftVal = leftPreset[key];
      const rightVal = rightPreset[key];
      const leftExists = key in leftPreset;
      const rightExists = key in rightPreset;
      let status;
      if (!leftExists && rightExists) {
        status = "added";
      } else if (leftExists && !rightExists) {
        status = "removed";
      } else if (JSON.stringify(leftVal) !== JSON.stringify(rightVal)) {
        status = "changed";
      } else {
        status = "same";
      }
      entries.push({ key, left: leftVal, right: rightVal, status });
    }
    return entries.sort((a, b) => {
      const statusOrder = { changed: 0, added: 1, removed: 2, same: 3 };
      if (statusOrder[a.status] !== statusOrder[b.status]) {
        return statusOrder[a.status] - statusOrder[b.status];
      }
      return a.key.localeCompare(b.key);
    });
  }, [leftPreset, rightPreset]);
  const filteredEntries = reactExports.useMemo(() => {
    let entries = [...diffEntries];
    if (filterMode === "changes") {
      entries = entries.filter((e) => e.status !== "same");
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      entries = entries.filter(
        (e) => e.key.toLowerCase().includes(q) || String(e.left).toLowerCase().includes(q) || String(e.right).toLowerCase().includes(q)
      );
    }
    return entries;
  }, [diffEntries, filterMode, searchQuery]);
  const stats = reactExports.useMemo(() => {
    return {
      added: diffEntries.filter((e) => e.status === "added").length,
      removed: diffEntries.filter((e) => e.status === "removed").length,
      changed: diffEntries.filter((e) => e.status === "changed").length,
      same: diffEntries.filter((e) => e.status === "same").length
    };
  }, [diffEntries]);
  const formatValue = (val) => {
    if (val === void 0) return "—";
    if (val === null) return "null";
    if (Array.isArray(val)) {
      if (val.length === 0) return "[]";
      if (val.length === 1) return String(val[0]);
      return val.join(", ");
    }
    if (typeof val === "object") return JSON.stringify(val);
    const str = String(val);
    if (str.includes("\\n") || str.length > 100) {
      const lines = str.split("\\n").length;
      if (lines > 1) {
        return `[${lines} lines of G-code/script]`;
      }
      if (str.length > 100) {
        return str.substring(0, 100) + "…";
      }
    }
    return str;
  };
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col min-h-0 flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "w-5 h-5 text-blue-400" }),
        t("profiles.diff.title")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-bambu-gray hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 grid grid-cols-2 gap-4 p-4 border-b border-bambu-dark-tertiary bg-bambu-dark", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: t("profiles.diff.left") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium truncate", children: leftLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: t("profiles.diff.right") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium truncate", children: rightLabel })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-green-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
          stats.added,
          " ",
          t("profiles.diff.added")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-red-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5" }),
          stats.removed,
          " ",
          t("profiles.diff.removed")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-amber-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" }),
          stats.changed,
          " ",
          t("profiles.diff.changed")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Equal, { className: "w-3.5 h-3.5" }),
          stats.same,
          " ",
          t("profiles.diff.same")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: t("profiles.diff.searchFields"),
              className: "pl-8 pr-3 py-1.5 bg-bambu-dark border border-bambu-dark-tertiary rounded text-white text-sm focus:border-bambu-green focus:outline-none w-48"
            }
          )
        ] }),
        stats.same > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded overflow-hidden border border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setFilterMode("changes"),
              className: `px-3 py-1.5 text-sm transition-colors ${filterMode === "changes" ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
              children: t("profiles.diff.changes")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setFilterMode("all"),
              className: `px-3 py-1.5 text-sm transition-colors ${filterMode === "all" ? "bg-bambu-green text-white" : "bg-bambu-dark text-bambu-gray hover:text-white"}`,
              children: t("common.all")
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto", children: filteredEntries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-bambu-gray", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Equal, { className: "w-12 h-12 mx-auto mb-4 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: filterMode === "changes" ? t("profiles.diff.noDifferences") : t("profiles.diff.noFieldsMatch") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "sticky top-0 bg-bambu-dark-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-sm text-bambu-gray border-b border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 w-1/3", children: t("profiles.diff.field") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 w-1/3", children: leftLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 w-1/3", children: rightLabel })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filteredEntries.map((entry) => {
        const bgClass = {
          added: "bg-green-500/10",
          removed: "bg-red-500/10",
          changed: "bg-amber-500/10",
          same: ""
        }[entry.status];
        const statusIcon = {
          added: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 text-green-400" }),
          removed: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5 text-red-400" }),
          changed: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 text-amber-400" }),
          same: /* @__PURE__ */ jsxRuntimeExports.jsx(Equal, { className: "w-3.5 h-3.5 text-bambu-gray-dark" })
        }[entry.status];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `border-b border-bambu-dark-tertiary ${bgClass}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            statusIcon,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white font-mono", children: entry.key })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-mono break-all ${entry.status === "removed" ? "text-red-300" : entry.status === "changed" ? "text-white" : "text-bambu-gray"}`, children: formatValue(entry.left) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-mono break-all ${entry.status === "added" ? "text-green-300" : entry.status === "changed" ? "text-white" : "text-bambu-gray"}`, children: formatValue(entry.right) }) })
        ] }, entry.key);
      }) })
    ] }) })
  ] }) }) });
}
function CreatePresetModal({
  onClose,
  initialData,
  allPresets,
  t
}) {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const isEditMode = !!initialData?.setting_id;
  const [activeTab, setActiveTab] = reactExports.useState("common");
  const [presetType, setPresetType] = reactExports.useState(
    initialData?.type || "filament"
  );
  const [name, setName] = reactExports.useState(
    initialData?.name ? isEditMode ? initialData.name : `${initialData.name} (Copy)` : ""
  );
  const [baseId, setBaseId] = reactExports.useState(initialData?.base_id || "");
  const [baseName, setBaseName] = reactExports.useState("");
  const [settingsObj, setSettingsObj] = reactExports.useState(
    initialData?.setting || { inherits: "" }
  );
  const [jsonText, setJsonText] = reactExports.useState(JSON.stringify(initialData?.setting || { inherits: "" }, null, 2));
  const [jsonError, setJsonError] = reactExports.useState(null);
  const [fieldSearch, setFieldSearch] = reactExports.useState("");
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [customFieldKey, setCustomFieldKey] = reactExports.useState("");
  const [showCustomFieldInput, setShowCustomFieldInput] = reactExports.useState(false);
  const [customTemplates, setCustomTemplates] = reactExports.useState(loadCustomTemplates);
  const [showSaveTemplate, setShowSaveTemplate] = reactExports.useState(false);
  const [newTemplateName, setNewTemplateName] = reactExports.useState("");
  const [newTemplateDesc, setNewTemplateDesc] = reactExports.useState("");
  const [newTemplateShowInModal, setNewTemplateShowInModal] = reactExports.useState(true);
  const [appliedTemplateName, setAppliedTemplateName] = reactExports.useState(null);
  const [showDiffModal, setShowDiffModal] = reactExports.useState(false);
  const presetsOfType = reactExports.useMemo(() => {
    const typeMap = {
      filament: allPresets.filament,
      print: allPresets.process,
      printer: allPresets.printer
    };
    return typeMap[presetType] || [];
  }, [allPresets, presetType]);
  const userPresetsOfType = reactExports.useMemo(() => {
    return presetsOfType.filter((p) => isUserPreset(p.setting_id));
  }, [presetsOfType]);
  const { data: fieldDefinitions } = useQuery({
    queryKey: ["cloudFields", presetType],
    queryFn: () => api.getCloudFields(presetType === "print" ? "process" : presetType),
    staleTime: 1e3 * 60 * 60
    // Cache for 1 hour
  });
  const { data: allPresetDetails } = useQuery({
    queryKey: ["allPresetDetails", presetType, userPresetsOfType.map((p) => p.setting_id).join(",")],
    queryFn: async () => {
      const results = {};
      const batchSize = 5;
      for (let i = 0; i < userPresetsOfType.length; i += batchSize) {
        const batch = userPresetsOfType.slice(i, i + batchSize);
        const batchResults = await Promise.all(
          batch.map(async (preset) => {
            try {
              const detail = await api.getCloudSettingDetail(preset.setting_id);
              return { id: preset.setting_id, detail };
            } catch {
              return null;
            }
          })
        );
        batchResults.forEach((r) => {
          if (r) results[r.id] = r.detail;
        });
      }
      return results;
    },
    enabled: userPresetsOfType.length > 0,
    staleTime: 1e3 * 60 * 10
    // Cache for 10 minutes
  });
  const { data: basePresetDetail, isLoading: isLoadingBasePreset } = useQuery({
    queryKey: ["cloudSettingDetail", baseId],
    queryFn: () => api.getCloudSettingDetail(baseId),
    enabled: !!baseId
  });
  reactExports.useEffect(() => {
    if (activeTab !== "json") {
      setJsonText(JSON.stringify(settingsObj, null, 2));
    }
  }, [settingsObj, activeTab]);
  const availableBasePresets = reactExports.useMemo(() => {
    const typeMap = {
      filament: allPresets.filament,
      print: allPresets.process,
      printer: allPresets.printer
    };
    return (typeMap[presetType] || []).filter((p) => !isUserPreset(p.setting_id)).sort((a, b) => a.name.localeCompare(b.name));
  }, [allPresets, presetType]);
  reactExports.useEffect(() => {
    if (!baseId) return;
    const preset = availableBasePresets.find((p) => p.setting_id === baseId);
    if (preset) {
      setBaseName(preset.name);
      if (!isEditMode) {
        setSettingsObj({ inherits: preset.name });
        setJsonText(JSON.stringify({ inherits: preset.name }, null, 2));
      }
    }
  }, [baseId, availableBasePresets, isEditMode]);
  const dynamicFields = reactExports.useMemo(() => {
    const knownFields = fieldDefinitions?.fields || [];
    const knownKeySet = new Set(knownFields.map((f) => f.key));
    const discoveredKeys = /* @__PURE__ */ new Set();
    const excludeKeys = /* @__PURE__ */ new Set(["inherits", "updated_time", "compatible_printers", "compatible_prints"]);
    if (allPresetDetails) {
      Object.values(allPresetDetails).forEach((detail) => {
        if (detail?.setting) {
          Object.keys(detail.setting).forEach((key) => {
            if (!knownKeySet.has(key) && !excludeKeys.has(key)) {
              discoveredKeys.add(key);
            }
          });
        }
      });
    }
    Object.keys(settingsObj).forEach((key) => {
      if (!knownKeySet.has(key) && !excludeKeys.has(key)) {
        discoveredKeys.add(key);
      }
    });
    const discoveredFields = Array.from(discoveredKeys).sort().map((key) => ({
      key,
      label: key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      type: "text",
      category: "discovered",
      description: t("profiles.presets.discoveredFromPresets")
    }));
    return [...knownFields, ...discoveredFields];
  }, [fieldDefinitions, allPresetDetails, settingsObj, t]);
  const filteredFields = dynamicFields.filter(
    (f) => f.label.toLowerCase().includes(fieldSearch.toLowerCase()) || f.key.toLowerCase().includes(fieldSearch.toLowerCase())
  );
  const addCustomField = () => {
    if (customFieldKey.trim()) {
      const key = customFieldKey.trim().toLowerCase().replace(/\s+/g, "_");
      updateField(key, "");
      setCustomFieldKey("");
      setShowCustomFieldInput(false);
      showToast(t("profiles.presets.toast.fieldAdded", { key }));
    }
  };
  const updateField = (key, value) => {
    setSettingsObj((prev) => {
      const newObj = { ...prev };
      if (value === "" || value === void 0) {
        delete newObj[key];
      } else {
        newObj[key] = value;
      }
      return newObj;
    });
  };
  const applyTemplate = (template) => {
    setSettingsObj((prev) => ({ ...prev, ...template.settings }));
    setAppliedTemplateName(template.name);
    showToast(t("profiles.templates.toast.applied"));
  };
  const saveAsTemplate = () => {
    if (!newTemplateName.trim()) return;
    const overrides = { ...settingsObj };
    delete overrides.inherits;
    if (Object.keys(overrides).length === 0) {
      showToast(t("profiles.presets.noOverridesToSave"), "error");
      return;
    }
    const newTemplate = {
      id: Date.now().toString(),
      name: newTemplateName.trim(),
      description: newTemplateDesc.trim() || t("profiles.presets.customTemplate"),
      type: presetType,
      settings: overrides,
      showInModal: newTemplateShowInModal
    };
    const updated = [...customTemplates, newTemplate];
    setCustomTemplates(updated);
    saveCustomTemplates(updated);
    setShowSaveTemplate(false);
    setNewTemplateName("");
    setNewTemplateDesc("");
    setNewTemplateShowInModal(true);
    showToast(t("profiles.templates.toast.created"));
  };
  const templatesForType = reactExports.useMemo(() => {
    return customTemplates.filter((t2) => t2.type === presetType && t2.showInModal);
  }, [presetType, customTemplates]);
  const handleJsonChange = (text) => {
    setJsonText(text);
    try {
      const parsed = JSON.parse(text);
      setSettingsObj(parsed);
      setJsonError(null);
    } catch (e) {
      setJsonError(e.message);
    }
  };
  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith(".json")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target?.result;
          const parsed = JSON.parse(content);
          const settings = parsed.setting || parsed;
          setSettingsObj((prev) => ({ ...prev, ...settings }));
          setJsonText(JSON.stringify({ ...settingsObj, ...settings }, null, 2));
          showToast(t("profiles.presets.fileImported"));
        } catch {
          showToast(t("profiles.presets.invalidJsonFile"), "error");
        }
      };
      reader.readAsText(file);
    }
  };
  const createMutation = useMutation({
    mutationFn: () => {
      const finalSettings = { ...settingsObj };
      const settingsIdKey = presetType === "filament" ? "filament_settings_id" : presetType === "print" ? "print_settings_id" : "printer_settings_id";
      finalSettings[settingsIdKey] = `"${name}"`;
      const data = { type: presetType, name, base_id: baseId, setting: finalSettings };
      return api.createCloudSetting(data);
    },
    onSuccess: async () => {
      showToast(t("profiles.presets.toast.created"));
      await queryClient.refetchQueries({ queryKey: ["cloudSettings"] });
      onClose();
    },
    onError: (error) => showToast(error.message, "error")
  });
  const updateMutation = useMutation({
    mutationFn: () => {
      if (!initialData?.setting_id) throw new Error(t("profiles.presets.noSettingId"));
      return api.updateCloudSetting(initialData.setting_id, { name, setting: settingsObj });
    },
    onSuccess: async () => {
      showToast(t("profiles.presets.toast.updated"));
      queryClient.removeQueries({ queryKey: ["cloudSettingDetail"] });
      await queryClient.refetchQueries({ queryKey: ["cloudSettings"] });
      onClose();
    },
    onError: (error) => showToast(error.message, "error")
  });
  const saveMutation = isEditMode ? updateMutation : createMutation;
  const inheritedPresetName = basePresetDetail?.setting?.inherits;
  const inheritedPreset = inheritedPresetName ? availableBasePresets.find((p) => p.name === inheritedPresetName) : void 0;
  const { data: inheritedPresetDetail } = useQuery({
    queryKey: ["cloudSettingDetail", inheritedPreset?.setting_id],
    queryFn: () => api.getCloudSettingDetail(inheritedPreset.setting_id),
    enabled: !!inheritedPreset?.setting_id
  });
  const basePresetValues = reactExports.useMemo(() => {
    const inheritedValues = inheritedPresetDetail?.setting || {};
    const selectedValues = basePresetDetail?.setting || {};
    const fallbackValues = baseId && allPresetDetails?.[baseId]?.setting ? allPresetDetails[baseId].setting : {};
    return {
      ...inheritedValues,
      ...selectedValues,
      ...fallbackValues
    };
  }, [baseId, basePresetDetail, inheritedPresetDetail, allPresetDetails]);
  const formatValue = (val) => {
    if (val === void 0 || val === null) return "";
    if (Array.isArray(val)) {
      const unique = [...new Set(val.map((v) => String(v)))];
      return unique.length === 1 ? unique[0] : val.join(", ");
    }
    return String(val);
  };
  const renderFieldInput = (field) => {
    const value = settingsObj[field.key];
    const baseValue = basePresetValues[field.key];
    const formattedBaseValue = formatValue(baseValue);
    const placeholder = isLoadingBasePreset ? t("common.loading") : formattedBaseValue || "";
    const baseClass = "w-full px-3 py-1.5 bg-bambu-dark border border-bambu-dark-tertiary rounded text-white text-sm focus:border-bambu-green focus:outline-none";
    if (field.type === "boolean") {
      const isOn = value === "1" || value === void 0 && baseValue === "1";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => updateField(field.key, value === "1" ? "0" : "1"),
          className: `w-8 h-5 rounded-full transition-colors ${isOn ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full bg-white shadow transition-transform ${isOn ? "translate-x-3.5" : "translate-x-0.5"}` })
        }
      );
    }
    if (field.type === "select") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: value || "",
          onChange: (e) => updateField(field.key, e.target.value),
          className: baseClass,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: placeholder }),
            field.options?.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, children: opt.label }, opt.value))
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: field.type === "number" ? "number" : "text",
          value: value !== void 0 ? String(value) : "",
          onChange: (e) => updateField(field.key, e.target.value),
          step: field.step,
          min: field.min,
          max: field.max,
          placeholder,
          className: baseClass
        }
      ),
      field.unit && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray whitespace-nowrap", children: field.unit })
    ] });
  };
  const basePresetSettings = reactExports.useMemo(() => {
    if (!basePresetDetail?.setting) return {};
    return basePresetDetail.setting;
  }, [basePresetDetail]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
      onDragOver: (e) => {
        e.preventDefault();
        setIsDragging(true);
      },
      onDragLeave: () => setIsDragging(false),
      onDrop: handleFileDrop,
      children: [
        showDiffModal && baseId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          DiffModal,
          {
            onClose: () => setShowDiffModal(false),
            leftPreset: basePresetSettings,
            rightPreset: settingsObj,
            leftLabel: t("profiles.presets.baseLabel", { name: baseName || baseId }),
            rightLabel: t("profiles.presets.currentLabel", { name: name || t("profiles.presets.newPreset") }),
            t
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-6xl max-h-[90vh] flex flex-col overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-white", children: isEditMode ? t("profiles.presets.editPreset") : initialData ? t("profiles.presets.duplicatePreset") : t("profiles.presets.createNewPreset") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("profiles.presets.customizeSettings") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              baseId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setShowDiffModal(true),
                  className: "flex items-center gap-2 px-3 py-2 text-sm text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary rounded-lg transition-colors",
                  title: t("profiles.presets.compareWithBase"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "w-4 h-4" }),
                    t("profiles.presets.compare")
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-2 text-bambu-gray hover:text-white hover:bg-bambu-dark-tertiary rounded-lg transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
            ] })
          ] }),
          isDragging && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-bambu-green/10 border-2 border-dashed border-bambu-green rounded-lg flex items-center justify-center z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-12 h-12 text-bambu-green mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-green font-medium", children: t("profiles.presets.dropJsonToImport") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-bambu-dark-tertiary space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 max-[640px]:grid-cols-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("common.type") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: presetType,
                    onChange: (e) => {
                      setPresetType(e.target.value);
                      setBaseId("");
                    },
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "filament", children: t("profiles.presets.types.filament") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "print", children: t("profiles.presets.types.process") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "printer", children: t("profiles.presets.types.printer") })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("profiles.presets.basePreset") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: baseId,
                    onChange: (e) => setBaseId(e.target.value),
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm focus:border-bambu-green focus:outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("profiles.presets.selectBasePreset") }),
                      availableBasePresets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: preset.setting_id, children: preset.name }, preset.setting_id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-1", children: t("profiles.presets.presetName") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none",
                    placeholder: t("profiles.presets.myCustomPreset")
                  }
                )
              ] })
            ] }),
            baseName && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-bambu-green" }),
              t("profiles.presets.inheritsFrom"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: baseName }),
              isLoadingBasePreset && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin ml-1" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-bambu-dark-tertiary max-[640px]:flex-wrap max-[640px]:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActiveTab("common"),
                className: `flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === "common" ? "text-bambu-green border-bambu-green" : "text-bambu-gray hover:text-white border-transparent"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersVertical, { className: "w-4 h-4" }),
                  t("profiles.presets.tabs.common")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActiveTab("fields"),
                className: `flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === "fields" ? "text-bambu-green border-bambu-green" : "text-bambu-gray hover:text-white border-transparent"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-4 h-4" }),
                  t("profiles.presets.tabs.allFields")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActiveTab("json"),
                className: `flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === "json" ? "text-bambu-green border-bambu-green" : "text-bambu-gray hover:text-white border-transparent"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-4 h-4" }),
                  "JSON",
                  jsonError && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3 text-red-400" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 max-[640px]:hidden" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  const exportData = {
                    name,
                    type: presetType,
                    base_id: baseId,
                    setting: settingsObj
                  };
                  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `${name || "preset"}.json`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                  showToast(t("profiles.presets.toast.exported"));
                },
                className: "flex items-center gap-2 px-4 py-3 text-sm text-bambu-gray hover:text-white transition-colors",
                title: t("profiles.presets.exportToJson"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  t("common.download")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => document.getElementById("file-import")?.click(),
                className: "flex items-center gap-2 px-4 py-3 text-sm text-bambu-gray hover:text-white transition-colors",
                title: t("profiles.presets.importFromJson"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
                  t("common.upload")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "file-import",
                type: "file",
                accept: ".json",
                className: "hidden",
                onChange: (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      try {
                        const parsed = JSON.parse(event.target?.result);
                        const settings = parsed.setting || parsed;
                        setSettingsObj((prev) => ({ ...prev, ...settings }));
                        showToast(t("profiles.presets.fileImported"));
                      } catch {
                        showToast(t("profiles.presets.invalidJson"), "error");
                      }
                    };
                    reader.readAsText(file);
                  }
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-4", children: [
            activeTab === "common" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-medium text-white flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-400" }),
                    t("profiles.templates.title")
                  ] }),
                  Object.keys(settingsObj).filter((k) => k !== "inherits").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setShowSaveTemplate(!showSaveTemplate),
                      className: "text-xs text-bambu-gray hover:text-white flex items-center gap-1 transition-colors",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                        t("profiles.presets.saveAsTemplate")
                      ]
                    }
                  )
                ] }),
                showSaveTemplate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 p-3 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: newTemplateName,
                        onChange: (e) => setNewTemplateName(e.target.value),
                        placeholder: t("profiles.templates.namePlaceholder"),
                        className: "px-3 py-1.5 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-sm focus:border-bambu-green focus:outline-none",
                        autoFocus: true
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: newTemplateDesc,
                        onChange: (e) => setNewTemplateDesc(e.target.value),
                        placeholder: t("profiles.templates.descriptionPlaceholder"),
                        className: "px-3 py-1.5 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-sm focus:border-bambu-green focus:outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: saveAsTemplate, disabled: !newTemplateName.trim(), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3 h-3" }),
                        t("common.save")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => setShowSaveTemplate(false), children: t("common.cancel") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => setNewTemplateShowInModal(!newTemplateShowInModal),
                        className: `flex items-center gap-1.5 text-xs transition-colors ${newTemplateShowInModal ? "text-bambu-green" : "text-bambu-gray hover:text-white"}`,
                        children: [
                          newTemplateShowInModal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3.5 h-3.5" }),
                          newTemplateShowInModal ? t("profiles.templates.shownInModals") : t("profiles.templates.hiddenInModals")
                        ]
                      }
                    )
                  ] })
                ] }),
                appliedTemplateName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 px-3 py-2 bg-bambu-green/10 border border-bambu-green/30 rounded-lg flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-bambu-green" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-green", children: [
                    t("profiles.presets.templateApplied"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: appliedTemplateName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setAppliedTemplateName(null),
                      className: "ml-auto text-bambu-green/70 hover:text-bambu-green",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                  templatesForType.map((template) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => applyTemplate(template),
                      className: "p-3 text-left bg-bambu-dark border border-bambu-dark-tertiary rounded-lg hover:border-bambu-gray-dark transition-colors",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white", children: template.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: template.description })
                      ]
                    },
                    template.id
                  )),
                  templatesForType.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-3 text-center text-bambu-gray text-sm py-4", children: t("profiles.presets.noTemplatesSelected") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray-dark mt-2 text-center", children: t("profiles.presets.manageTemplatesHint") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white mb-3", children: t("profiles.presets.commonSettings") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-3", children: dynamicFields.slice(0, 10).map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 max-[640px]:flex-col max-[640px]:items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-bambu-gray flex-shrink-0", children: field.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 max-[640px]:w-full", children: renderFieldInput(field) })
                ] }, field.key)) })
              ] }),
              Object.keys(settingsObj).length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white mb-3", children: t("profiles.presets.currentOverrides") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.entries(settingsObj).filter(([k]) => k !== "inherits").map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 bg-bambu-green/10 text-bambu-green text-xs rounded", children: [
                  key,
                  ": ",
                  String(value).slice(0, 20),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateField(key, void 0), className: "hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }) })
                ] }, key)) })
              ] })
            ] }),
            activeTab === "fields" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6", style: { height: "400px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white", children: t("profiles.presets.availableFields") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: allPresetDetails ? t("profiles.templates.fieldsCount", { count: dynamicFields.length }) : t("common.loading") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: fieldSearch,
                      onChange: (e) => setFieldSearch(e.target.value),
                      placeholder: t("profiles.presets.searchFieldsPlaceholder"),
                      className: "w-full pl-10 pr-4 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder-bambu-gray-dark focus:border-bambu-green focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-1 pr-2 min-h-0", children: [
                  filteredFields.filter((f) => !(f.key in settingsObj)).map((field) => {
                    const baseVal = basePresetValues[field.key];
                    const formattedVal = formatValue(baseVal);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => {
                          setSettingsObj((prev) => ({ ...prev, [field.key]: formattedVal || "" }));
                        },
                        className: "flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-bambu-dark-tertiary transition-colors cursor-pointer group",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white truncate", children: field.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray-dark truncate", children: field.key })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                            formattedVal && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray bg-bambu-dark px-2 py-0.5 rounded max-w-32 truncate", title: formattedVal, children: [
                              formattedVal.slice(0, 20),
                              formattedVal.length > 20 ? "..." : ""
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 flex items-center justify-center rounded bg-bambu-dark-tertiary group-hover:bg-bambu-green/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-bambu-gray group-hover:text-bambu-green transition-colors" }) })
                          ] })
                        ]
                      },
                      field.key
                    );
                  }),
                  filteredFields.filter((f) => !(f.key in settingsObj)).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-bambu-gray py-4 text-sm", children: fieldSearch ? t("profiles.presets.noMatchingFields") : t("profiles.presets.allFieldsAdded") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 mt-3 border-t border-bambu-dark-tertiary flex-shrink-0", children: showCustomFieldInput ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: customFieldKey,
                      onChange: (e) => setCustomFieldKey(e.target.value),
                      onKeyDown: (e) => e.key === "Enter" && addCustomField(),
                      placeholder: "custom_field_name",
                      className: "flex-1 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white font-mono text-sm placeholder-bambu-gray-dark focus:border-bambu-green focus:outline-none",
                      autoFocus: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: addCustomField, disabled: !customFieldKey.trim(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => {
                    setShowCustomFieldInput(false);
                    setCustomFieldKey("");
                  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setShowCustomFieldInput(true),
                    className: "w-full flex items-center justify-center gap-2 p-2 text-sm text-bambu-gray hover:text-white border border-dashed border-bambu-dark-tertiary hover:border-bambu-gray-dark rounded-lg transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                      t("profiles.presets.addCustomField")
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white", children: t("profiles.presets.yourOverrides") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: t("profiles.templates.fieldsCount", { count: Object.keys(settingsObj).filter((k) => k !== "inherits").length }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-2 pr-2 min-h-0", children: [
                  Object.entries(settingsObj).filter(([key]) => key !== "inherits").map(([key, value]) => {
                    const fieldDef = dynamicFields.find((f) => f.key === key);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white", children: fieldDef?.label || key }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray-dark", children: key })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => updateField(key, void 0),
                            className: "p-1 text-bambu-gray hover:text-red-400 transition-colors",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                          }
                        )
                      ] }),
                      fieldDef ? renderFieldInput(fieldDef) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          value: String(value),
                          onChange: (e) => updateField(key, e.target.value),
                          className: "w-full px-3 py-1.5 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-white text-sm focus:border-bambu-green focus:outline-none"
                        }
                      )
                    ] }, key);
                  }),
                  Object.keys(settingsObj).filter((k) => k !== "inherits").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-bambu-gray", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersVertical, { className: "w-8 h-8 mx-auto mb-2 opacity-50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: t("profiles.presets.noOverridesYet") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: t("profiles.presets.clickFieldsToAdd") })
                  ] })
                ] }),
                Object.keys(settingsObj).filter((k) => k !== "inherits").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 mt-3 border-t border-bambu-dark-tertiary flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      setShowSaveTemplate(true);
                      setActiveTab("common");
                    },
                    className: "w-full flex items-center justify-center gap-2 p-2 text-sm text-bambu-gray hover:text-white border border-dashed border-bambu-dark-tertiary hover:border-bambu-gray-dark rounded-lg transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                      t("profiles.presets.saveAsTemplate")
                    ]
                  }
                ) })
              ] })
            ] }),
            activeTab === "json" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              jsonError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-red-400 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4" }),
                jsonError
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: jsonText,
                  onChange: (e) => handleJsonChange(e.target.value),
                  className: `w-full h-80 px-3 py-2 bg-bambu-dark border rounded-lg text-white text-xs font-mono focus:outline-none resize-none ${jsonError ? "border-red-500 focus:border-red-500" : "border-bambu-dark-tertiary focus:border-bambu-green"}`,
                  spellCheck: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: t("profiles.presets.jsonTip") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-bambu-dark-tertiary flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, className: "flex-1", children: t("common.cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => saveMutation.mutate(),
                disabled: saveMutation.isPending || !name.trim() || !isEditMode && !baseId || !!jsonError,
                className: "flex-1",
                children: [
                  saveMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : isEditMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                  isEditMode ? t("common.save") : initialData ? t("common.duplicate") : t("common.create")
                ]
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
function CloudProfilesView({
  settings,
  lastSyncTime,
  onRefresh,
  isRefreshing,
  printers,
  hasPermission,
  t
}) {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filterType, setFilterType] = reactExports.useState("all");
  const [filterOwner, setFilterOwner] = reactExports.useState("all");
  const [filterPrinter, setFilterPrinter] = reactExports.useState("all");
  const [filterNozzle, setFilterNozzle] = reactExports.useState("all");
  const [filterFilament, setFilterFilament] = reactExports.useState("all");
  const [filterLayerHeight, setFilterLayerHeight] = reactExports.useState("all");
  const [selectedSetting, setSelectedSetting] = reactExports.useState(null);
  const [showCreateModal, setShowCreateModal] = reactExports.useState(false);
  const [showTemplatesModal, setShowTemplatesModal] = reactExports.useState(false);
  const [duplicateData, setDuplicateData] = reactExports.useState(null);
  const [editData, setEditData] = reactExports.useState(null);
  const [templateData, setTemplateData] = reactExports.useState(null);
  const [compareMode, setCompareMode] = reactExports.useState(false);
  const [compareSelection, setCompareSelection] = reactExports.useState([null, null]);
  const [showCompareModal, setShowCompareModal] = reactExports.useState(false);
  const [comparePresets, setComparePresets] = reactExports.useState(null);
  const queryClient = useQueryClient();
  const allPresetsWithMeta = reactExports.useMemo(() => {
    const combined = [
      ...settings.filament.map((s) => ({ ...s, type: "filament" })),
      ...settings.printer.map((s) => ({ ...s, type: "printer" })),
      ...settings.process.map((s) => ({ ...s, type: "process" }))
    ];
    return combined.map((s) => ({ ...s, meta: extractMetadata(s.name) }));
  }, [settings]);
  const filterOptions = reactExports.useMemo(() => {
    const nozzles = /* @__PURE__ */ new Set();
    const filaments = /* @__PURE__ */ new Set();
    const layerHeights = /* @__PURE__ */ new Set();
    allPresetsWithMeta.forEach((p) => {
      if (p.meta.nozzle) nozzles.add(p.meta.nozzle);
      if (p.meta.filamentType) filaments.add(p.meta.filamentType);
      if (p.meta.layerHeight) layerHeights.add(p.meta.layerHeight);
    });
    return {
      printers: printers.map((p) => ({ id: p.id.toString(), name: p.name })),
      nozzles: Array.from(nozzles).sort((a, b) => parseFloat(a) - parseFloat(b)),
      filaments: Array.from(filaments).sort(),
      layerHeights: Array.from(layerHeights).sort((a, b) => parseFloat(a) - parseFloat(b))
    };
  }, [allPresetsWithMeta, printers]);
  const selectedPrinterModel = reactExports.useMemo(() => {
    if (filterPrinter === "all") return null;
    const printer = printers.find((p) => p.id.toString() === filterPrinter);
    return printer?.model || null;
  }, [filterPrinter, printers]);
  const filteredPresets = reactExports.useMemo(() => {
    return allPresetsWithMeta.filter((s) => filterType === "all" || s.type === filterType).filter((s) => {
      if (filterOwner === "all") return true;
      const isCustom = isUserPreset(s.setting_id);
      return filterOwner === "custom" ? isCustom : !isCustom;
    }).filter((s) => {
      if (filterPrinter === "all" || !selectedPrinterModel) return true;
      const presetPrinter = s.meta.printer?.toLowerCase() || "";
      const configuredModel = selectedPrinterModel.toLowerCase();
      return presetPrinter.includes(configuredModel) || configuredModel.includes(presetPrinter);
    }).filter((s) => filterNozzle === "all" || s.meta.nozzle === filterNozzle).filter((s) => filterFilament === "all" || s.meta.filamentType === filterFilament).filter((s) => filterLayerHeight === "all" || s.meta.layerHeight === filterLayerHeight).filter((s) => searchQuery === "" || s.name.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
  }, [allPresetsWithMeta, filterType, filterOwner, filterPrinter, selectedPrinterModel, filterNozzle, filterFilament, filterLayerHeight, searchQuery]);
  const handlePresetClick = (preset) => {
    if (compareMode) {
      const isFirst = compareSelection[0]?.setting_id === preset.setting_id;
      const isSecond = compareSelection[1]?.setting_id === preset.setting_id;
      if (isFirst) {
        setCompareSelection([compareSelection[1], null]);
      } else if (isSecond) {
        setCompareSelection([compareSelection[0], null]);
      } else if (!compareSelection[0]) {
        setCompareSelection([preset, null]);
      } else if (!compareSelection[1]) {
        if (compareSelection[0].type !== preset.type) {
          return;
        }
        setCompareSelection([compareSelection[0], preset]);
      } else {
        if (compareSelection[0].type !== preset.type) {
          return;
        }
        setCompareSelection([compareSelection[0], preset]);
      }
    } else {
      setSelectedSetting(preset);
    }
  };
  const getCompareIndex = (preset) => {
    if (compareSelection[0]?.setting_id === preset.setting_id) return 0;
    if (compareSelection[1]?.setting_id === preset.setting_id) return 1;
    return void 0;
  };
  const handleDuplicate = async (setting) => {
    try {
      const detail = await api.getCloudSettingDetail(setting.setting_id);
      const apiType = setting.type === "process" ? "print" : setting.type;
      setDuplicateData({
        type: apiType,
        name: setting.name,
        base_id: detail.base_id || "GFSA00",
        setting: detail.setting || {}
      });
      setSelectedSetting(null);
    } catch (error) {
      console.error("Failed to fetch preset details for duplication:", error);
    }
  };
  const handleEdit = async (setting) => {
    try {
      queryClient.removeQueries({ queryKey: ["cloudSettingDetail", setting.setting_id] });
      const detail = await api.getCloudSettingDetail(setting.setting_id);
      const apiType = setting.type === "process" ? "print" : setting.type;
      setEditData({
        type: apiType,
        name: setting.name,
        base_id: detail.base_id || "GFSA00",
        setting: detail.setting || {},
        setting_id: setting.setting_id
      });
      setSelectedSetting(null);
    } catch (error) {
      console.error("Failed to fetch preset details for editing:", error);
    }
  };
  const clearFilters = () => {
    setFilterType("all");
    setFilterOwner("all");
    setFilterPrinter("all");
    setFilterNozzle("all");
    setFilterFilament("all");
    setFilterLayerHeight("all");
    setSearchQuery("");
  };
  const hasActiveFilters = filterType !== "all" || filterOwner !== "all" || filterPrinter !== "all" || filterNozzle !== "all" || filterFilament !== "all" || filterLayerHeight !== "all" || searchQuery !== "";
  const totalCount = settings.filament.length + settings.printer.length + settings.process.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: t("profiles.cloudView.searchPlaceholder"),
              className: "w-full pl-10 pr-4 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray-dark focus:border-bambu-green focus:outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 max-[550px]:flex-wrap max-[550px]:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: compareMode ? "primary" : "secondary",
              onClick: () => {
                if (compareMode) {
                  setCompareMode(false);
                  setCompareSelection([null, null]);
                } else {
                  setCompareMode(true);
                }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "w-4 h-4" }),
                compareMode ? t("common.cancel") : t("profiles.presets.compare")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              onClick: () => setShowTemplatesModal(true),
              disabled: !hasPermission("cloud:auth"),
              title: !hasPermission("cloud:auth") ? t("profiles.cloudView.noTemplatesPermission") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                t("profiles.cloudView.templates")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              onClick: onRefresh,
              disabled: isRefreshing || !hasPermission("cloud:auth"),
              title: !hasPermission("cloud:auth") ? t("profiles.cloudView.noRefreshPermission") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isRefreshing ? "animate-spin" : ""}` }),
                t("profiles.cloudView.refresh")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setShowCreateModal(true),
              disabled: !hasPermission("cloud:auth"),
              title: !hasPermission("cloud:auth") ? t("profiles.cloudView.noCreatePermission") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                t("profiles.cloudView.newPreset")
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-bambu-gray" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterDropdown,
          {
            label: t("profiles.cloudView.filters.type"),
            value: filterType,
            options: [
              { value: "all", label: t("profiles.cloudView.filters.all"), count: totalCount },
              { value: "filament", label: t("profiles.cloudView.filters.filament"), count: settings.filament.length },
              { value: "printer", label: t("profiles.cloudView.filters.printer"), count: settings.printer.length },
              { value: "process", label: t("profiles.cloudView.filters.process"), count: settings.process.length }
            ],
            onChange: (v) => setFilterType(v)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterDropdown,
          {
            label: t("profiles.cloudView.filters.owner"),
            value: filterOwner,
            options: [
              { value: "all", label: t("profiles.cloudView.filters.all") },
              { value: "custom", label: t("profiles.cloudView.filters.myPresets") },
              { value: "builtin", label: t("profiles.cloudView.filters.builtIn") }
            ],
            onChange: (v) => setFilterOwner(v)
          }
        ),
        filterOptions.printers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterDropdown,
          {
            label: t("profiles.cloudView.filters.printer"),
            value: filterPrinter,
            options: [
              { value: "all", label: t("profiles.cloudView.filters.all") },
              ...filterOptions.printers.map((p) => ({ value: p.id, label: p.name }))
            ],
            onChange: setFilterPrinter
          }
        ),
        filterOptions.nozzles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterDropdown,
          {
            label: t("profiles.cloudView.filters.nozzle"),
            value: filterNozzle,
            options: [
              { value: "all", label: t("profiles.cloudView.filters.all") },
              ...filterOptions.nozzles.map((n) => ({ value: n, label: n }))
            ],
            onChange: setFilterNozzle
          }
        ),
        filterOptions.filaments.length > 0 && (filterType === "all" || filterType === "filament") && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterDropdown,
          {
            label: t("profiles.cloudView.filters.filament"),
            value: filterFilament,
            options: [
              { value: "all", label: t("profiles.cloudView.filters.all") },
              ...filterOptions.filaments.map((f) => ({ value: f, label: f }))
            ],
            onChange: setFilterFilament
          }
        ),
        filterOptions.layerHeights.length > 0 && (filterType === "all" || filterType === "process") && /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterDropdown,
          {
            label: t("profiles.cloudView.filters.layer"),
            value: filterLayerHeight,
            options: [
              { value: "all", label: t("profiles.cloudView.filters.all") },
              ...filterOptions.layerHeights.map((l) => ({ value: l, label: l }))
            ],
            onChange: setFilterLayerHeight
          }
        ),
        hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: clearFilters,
            className: "px-3 py-2 text-sm text-bambu-gray hover:text-white transition-colors",
            children: t("profiles.cloudView.clearFilters")
          }
        )
      ] })
    ] }),
    compareMode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "w-5 h-5 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: t("profiles.cloudView.compareMode") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: compareSelection[0] ? t("profiles.cloudView.selectAnotherPreset", { type: compareSelection[0].type }) : t("profiles.cloudView.clickTwoPresets") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 text-sm rounded truncate max-w-[200px] ${compareSelection[0] ? "bg-blue-500/30 text-blue-700 dark:text-blue-300" : "bg-bambu-dark text-bambu-gray"}`, children: compareSelection[0] ? compareSelection[0].name : t("profiles.cloudView.selectFirst") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-bambu-gray" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 text-sm rounded truncate max-w-[200px] ${compareSelection[1] ? "bg-blue-500/30 text-blue-700 dark:text-blue-300" : "bg-bambu-dark text-bambu-gray"}`, children: compareSelection[1] ? compareSelection[1].name : t("profiles.cloudView.selectSecond") })
        ] }),
        compareSelection[0] && compareSelection[1] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: async () => {
              try {
                const [left, right] = await Promise.all([
                  api.getCloudSettingDetail(compareSelection[0].setting_id),
                  api.getCloudSettingDetail(compareSelection[1].setting_id)
                ]);
                setComparePresets([
                  left.setting || {},
                  right.setting || {}
                ]);
                setShowCompareModal(true);
              } catch {
              }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "w-4 h-4" }),
              t("profiles.cloudView.compareNow")
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 mb-4 text-sm text-bambu-gray", children: [
      lastSyncTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
        t("profiles.cloudView.lastSynced"),
        " ",
        formatRelativeTime(lastSyncTime.toISOString(), "system", t)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("profiles.cloudView.showingCount", { showing: filteredPresets.length, total: totalCount }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-bambu-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "= ",
          t("profiles.presets.myPreset")
        ] })
      ] })
    ] }),
    filteredPresets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-12 h-12 text-bambu-gray-dark mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("profiles.cloudView.noPresetsFound") }),
      hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearFilters, className: "mt-2 text-sm text-bambu-green hover:text-bambu-green-light", children: t("profiles.cloudView.clearFilters") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "w-4 h-4 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-bambu-gray", children: t("profiles.cloudView.columns.filament") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray-dark", children: [
            "(",
            filteredPresets.filter((p) => p.type === "filament").length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1", children: [
          filteredPresets.filter((p) => p.type === "filament").map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            PresetListItem,
            {
              setting: preset,
              onClick: () => handlePresetClick(preset),
              onDuplicate: () => handleDuplicate(preset),
              compareMode,
              isCompareSelected: getCompareIndex(preset) !== void 0,
              compareIndex: getCompareIndex(preset),
              compareDisabled: compareMode && !!compareSelection[0] && compareSelection[0].type !== preset.type,
              t
            },
            preset.setting_id
          )),
          filteredPresets.filter((p) => p.type === "filament").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray-dark px-3 py-2", children: t("profiles.cloudView.noFilamentPresets") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4 text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-bambu-gray", children: t("profiles.cloudView.columns.process") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray-dark", children: [
            "(",
            filteredPresets.filter((p) => p.type === "process").length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1", children: [
          filteredPresets.filter((p) => p.type === "process").map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            PresetListItem,
            {
              setting: preset,
              onClick: () => handlePresetClick(preset),
              onDuplicate: () => handleDuplicate(preset),
              compareMode,
              isCompareSelected: getCompareIndex(preset) !== void 0,
              compareIndex: getCompareIndex(preset),
              compareDisabled: compareMode && !!compareSelection[0] && compareSelection[0].type !== preset.type,
              t
            },
            preset.setting_id
          )),
          filteredPresets.filter((p) => p.type === "process").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray-dark px-3 py-2", children: t("profiles.cloudView.noProcessPresets") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4 text-purple-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-bambu-gray", children: t("profiles.cloudView.columns.printer") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray-dark", children: [
            "(",
            filteredPresets.filter((p) => p.type === "printer").length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1", children: [
          filteredPresets.filter((p) => p.type === "printer").map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            PresetListItem,
            {
              setting: preset,
              onClick: () => handlePresetClick(preset),
              onDuplicate: () => handleDuplicate(preset),
              compareMode,
              isCompareSelected: getCompareIndex(preset) !== void 0,
              compareIndex: getCompareIndex(preset),
              compareDisabled: compareMode && !!compareSelection[0] && compareSelection[0].type !== preset.type,
              t
            },
            preset.setting_id
          )),
          filteredPresets.filter((p) => p.type === "printer").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray-dark px-3 py-2", children: t("profiles.cloudView.noPrinterPresets") })
        ] })
      ] })
    ] }),
    selectedSetting && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PresetDetailModal,
      {
        setting: selectedSetting,
        onClose: () => setSelectedSetting(null),
        onDeleted: () => setSelectedSetting(null),
        onDuplicate: () => handleDuplicate(selectedSetting),
        onEdit: () => handleEdit(selectedSetting),
        hasPermission,
        t
      }
    ),
    (showCreateModal || duplicateData || editData || templateData) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CreatePresetModal,
      {
        onClose: () => {
          setShowCreateModal(false);
          setDuplicateData(null);
          setEditData(null);
          setTemplateData(null);
        },
        initialData: editData || duplicateData || (templateData ? { type: templateData.type, name: "", base_id: "", setting: templateData.setting } : void 0),
        allPresets: settings,
        t
      }
    ),
    showTemplatesModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TemplatesModal,
      {
        onClose: () => setShowTemplatesModal(false),
        onApply: (template) => {
          setTemplateData({ type: template.type, setting: template.settings });
          setShowTemplatesModal(false);
        },
        t
      }
    ),
    showCompareModal && comparePresets && compareSelection[0] && compareSelection[1] && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiffModal,
      {
        onClose: () => {
          setShowCompareModal(false);
          setComparePresets(null);
        },
        leftPreset: comparePresets[0],
        rightPreset: comparePresets[1],
        leftLabel: compareSelection[0].name,
        rightLabel: compareSelection[1].name,
        t
      }
    )
  ] });
}
function ProfilesPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [activeTab, setActiveTab] = reactExports.useState("cloud");
  const [lastSyncTime, setLastSyncTime] = reactExports.useState();
  const { data: status, isLoading: statusLoading } = useQuery({
    queryKey: ["cloudStatus"],
    queryFn: api.getCloudStatus
  });
  const { data: printers = [] } = useQuery({
    queryKey: ["printers"],
    queryFn: api.getPrinters
  });
  const { data: settings, isLoading: settingsLoading, refetch: refetchSettings, dataUpdatedAt } = useQuery({
    queryKey: ["cloudSettings"],
    queryFn: () => api.getCloudSettings(),
    enabled: !!status?.is_authenticated,
    retry: false,
    staleTime: 1e3 * 60 * 5
  });
  reactExports.useEffect(() => {
    if (dataUpdatedAt) {
      setLastSyncTime(new Date(dataUpdatedAt));
    }
  }, [dataUpdatedAt]);
  const logoutMutation = useMutation({
    mutationFn: api.cloudLogout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cloudStatus"] });
      queryClient.removeQueries({ queryKey: ["cloudSettings"] });
      showToast(t("profiles.toast.loggedOut"));
    }
  });
  const handleLoginSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["cloudStatus"] });
  };
  if (statusLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 md:p-8 flex items-center justify-center min-h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: t("profiles.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("profiles.subtitle") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-bambu-dark-tertiary mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("cloud"),
          className: `flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === "cloud" ? "text-bambu-green border-bambu-green" : "text-bambu-gray hover:text-white border-transparent"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "w-4 h-4" }),
            t("profiles.tabs.cloud")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("kprofiles"),
          className: `flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === "kprofiles" ? "text-bambu-green border-bambu-green" : "text-bambu-gray hover:text-white border-transparent"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-4 h-4" }),
            t("profiles.tabs.kprofiles")
          ]
        }
      )
    ] }),
    activeTab === "cloud" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      status?.is_authenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 mb-6 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-bambu-green animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-gray", children: [
            t("profiles.connectedAs"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: status.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => logoutMutation.mutate(),
            disabled: logoutMutation.isPending || !hasPermission("cloud:auth"),
            title: !hasPermission("cloud:auth") ? t("profiles.noLogoutPermission") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
              t("profiles.logout")
            ]
          }
        )
      ] }),
      !status?.is_authenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, { onSuccess: handleLoginSuccess, t }) : settingsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) }) : settings ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        CloudProfilesView,
        {
          settings,
          lastSyncTime,
          onRefresh: () => refetchSettings(),
          isRefreshing: settingsLoading,
          printers,
          hasPermission,
          t
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mb-4", children: t("profiles.failedToLoad") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => refetchSettings(), children: t("profiles.retry") })
      ] })
    ] }),
    activeTab === "kprofiles" && /* @__PURE__ */ jsxRuntimeExports.jsx(KProfilesView, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {})
  ] });
}
export {
  ProfilesPage
};
