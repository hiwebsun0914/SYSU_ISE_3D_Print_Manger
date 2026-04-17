import { u as useTranslation, b as useQueryClient, a as useToast, r as reactExports, d as useQuery, e as useMutation, f as api, j as jsxRuntimeExports, M as Link, X, L as LoaderCircle, B as Button, h as ConfirmModal, A as ChevronDown } from "./index-By7NB6Yd.js";
import { S as Search } from "./search-RLowFFFz.js";
import { P as Package } from "./package-C_EJMjbO.js";
import { S as Settings2 } from "./settings-2-D5pvtvi2.js";
import { C as CircleCheck } from "./circle-check-CXINnHIF.js";
import { R as RotateCcw } from "./rotate-ccw-DINMEq3g.js";
function LinkSpoolModal({ isOpen, onClose, tagUid, trayUuid, printerId, amsId, trayId }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [search, setSearch] = reactExports.useState("");
  const spoolTag = trayUuid || tagUid;
  const { data: spools, isLoading } = useQuery({
    queryKey: ["unlinked-spools"],
    queryFn: api.getUnlinkedSpools,
    enabled: isOpen
  });
  const filteredSpools = reactExports.useMemo(() => {
    if (!spools) return [];
    return spools.filter((s) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return s.filament_name && s.filament_name.toLowerCase().includes(q) || s.filament_material && s.filament_material.toLowerCase().includes(q) || String(s.id).includes(q);
    });
  }, [spools, search]);
  const linkMutation = useMutation({
    mutationFn: (spoolId) => api.linkSpool(spoolId, {
      spoolTag,
      printerId,
      amsId,
      trayId
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["unlinked-spools"] });
      queryClient.invalidateQueries({ queryKey: ["linked-spools"] });
      showToast(t("spoolman.linkSuccess"), "success");
      onClose();
    },
    onError: (err) => {
      showToast(err.message || t("spoolman.linkFailed"), "error");
    }
  });
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-bambu-dark-secondary rounded-xl shadow-xl w-full max-w-md mx-4 max-h-[80vh] flex flex-col border border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "w-5 h-5 text-bambu-green" }),
            t("spoolman.selectSpool")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray mt-1", children: [
            "AMS ",
            amsId,
            " T",
            trayId,
            " · Printer #",
            printerId
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 text-bambu-gray hover:text-white rounded transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: t("inventory.searchSpools"),
              className: "w-full pl-9 pr-3 py-2 bg-bambu-dark rounded-lg border border-white/10 text-white text-sm placeholder:text-bambu-gray focus:outline-none focus:border-bambu-green"
            }
          )
        ] }),
        (trayUuid || tagUid) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray mt-2 font-mono truncate", title: trayUuid || tagUid, children: [
          "Tag: ",
          trayUuid || tagUid
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-2 min-h-0", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-green" }) }) : filteredSpools.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-bambu-gray py-8 text-sm", children: t("inventory.noSpoolsMatch") }) : filteredSpools.map((spool) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => linkMutation.mutate(spool.id),
          disabled: linkMutation.isPending || !spoolTag,
          className: "w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "w-6 h-6 rounded-full border border-black/20 flex-shrink-0",
                style: { backgroundColor: spool.filament_color_hex ? `#${spool.filament_color_hex}` : "#808080" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white font-medium truncate", children: spool.filament_name || t("spoolman.spoolId") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-bambu-gray truncate", children: [
                spool.filament_material || "Unknown",
                " · #",
                spool.id
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray", children: spool.remaining_weight != null ? `${Math.round(spool.remaining_weight)}g` : "—" })
          ]
        },
        spool.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-white/10 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: onClose, children: t("inventory.cancel") || "Cancel" }) })
    ] })
  ] });
}
function AssignSpoolModal({ isOpen, onClose, printerId, amsId, trayId, trayInfo }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [selectedSpoolId, setSelectedSpoolId] = reactExports.useState(null);
  const [searchFilter, setSearchFilter] = reactExports.useState("");
  const [pendingAssignId, setPendingAssignId] = reactExports.useState(null);
  const [showMismatchConfirm, setShowMismatchConfirm] = reactExports.useState(false);
  const [mismatchDetails, setMismatchDetails] = reactExports.useState(null);
  const { data: spools, isLoading } = useQuery({
    queryKey: ["inventory-spools"],
    queryFn: () => api.getSpools(),
    enabled: isOpen
  });
  const { data: assignments } = useQuery({
    queryKey: ["spool-assignments"],
    queryFn: () => api.getAssignments(),
    enabled: isOpen
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: () => api.getSettings(),
    enabled: isOpen
  });
  const assignMutation = useMutation({
    mutationFn: (spoolId) => api.assignSpool({ spool_id: spoolId, printer_id: printerId, ams_id: amsId, tray_id: trayId }),
    onSuccess: (newAssignment) => {
      queryClient.setQueryData(["spool-assignments"], (old) => {
        const filtered = (old || []).filter(
          (a) => !(a.printer_id === printerId && a.ams_id === amsId && a.tray_id === trayId)
        );
        filtered.push(newAssignment);
        return filtered;
      });
      queryClient.invalidateQueries({ queryKey: ["spool-assignments"] });
      showToast(t("inventory.assignSuccess"), "success");
      setShowMismatchConfirm(false);
      setPendingAssignId(null);
      setMismatchDetails(null);
      onClose();
    },
    onError: (error) => {
      showToast(`${t("inventory.assignFailed")}: ${error.message}`, "error");
    }
  });
  const normalizeValue = (value) => (value ?? "").trim().toUpperCase();
  const checkMaterialMatch = (spoolMaterial, trayMaterial) => {
    const normalizedSpool = normalizeValue(spoolMaterial);
    const normalizedTray = normalizeValue(trayMaterial);
    if (!normalizedSpool || !normalizedTray) return "none";
    if (normalizedSpool === normalizedTray) return "exact";
    if (normalizedTray.includes(normalizedSpool) || normalizedSpool.includes(normalizedTray)) {
      return "partial";
    }
    return "none";
  };
  const checkProfileMatch = (spoolProfile, trayProfile) => {
    const normalizedSpoolProfile = normalizeValue(spoolProfile);
    const normalizedTrayProfile = normalizeValue(trayProfile);
    if (!normalizedSpoolProfile || !normalizedTrayProfile) return false;
    return normalizedSpoolProfile === normalizedTrayProfile;
  };
  if (!isOpen) return null;
  const assignedSpoolIds = new Set(
    (assignments || []).filter((a) => !(a.printer_id === printerId && a.ams_id === amsId && a.tray_id === trayId)).map((a) => a.spool_id)
  );
  const isExternalSlot = amsId === 254 || amsId === 255;
  const manualSpools = spools?.filter(
    (spool) => !assignedSpoolIds.has(spool.id) && (isExternalSlot || !spool.tag_uid && !spool.tray_uuid)
  );
  const filteredSpools = manualSpools?.filter((spool) => {
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    return spool.material.toLowerCase().includes(q) || (spool.brand?.toLowerCase().includes(q) ?? false) || (spool.color_name?.toLowerCase().includes(q) ?? false) || (spool.subtype?.toLowerCase().includes(q) ?? false);
  });
  const handleAssign = () => {
    if (!selectedSpoolId) return;
    const selectedSpool = spools?.find((spool) => spool.id === selectedSpoolId);
    if (!selectedSpool) {
      showToast(t("inventory.assignFailed"), "error");
      return;
    }
    if (!settings?.disable_filament_warnings && trayInfo) {
      const trayMaterial = trayInfo.material || trayInfo.type;
      const materialMatchResult = checkMaterialMatch(selectedSpool.material, trayMaterial);
      const spoolProfile = selectedSpool.slicer_filament_name || selectedSpool.slicer_filament;
      const trayProfile = trayInfo.profile || trayInfo.type;
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
        setPendingAssignId(selectedSpoolId);
        setMismatchDetails({
          type: mismatchType,
          spoolMaterial: selectedSpool.material || "",
          trayMaterial: trayMaterial || "",
          spoolProfile: spoolProfile || void 0,
          trayProfile: trayProfile || void 0
        });
        setShowMismatchConfirm(true);
        return;
      }
    }
    assignMutation.mutate(selectedSpoolId);
  };
  const handleConfirmMismatch = () => {
    if (!pendingAssignId) return;
    assignMutation.mutate(pendingAssignId);
    setShowMismatchConfirm(false);
    setPendingAssignId(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
          onClick: onClose
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-2xl mx-4 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-xl shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-bambu-green" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("inventory.assignSpool") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "p-1 text-bambu-gray hover:text-white rounded transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
          trayInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray mb-1", children: [
              t("inventory.selectSpool"),
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              trayInfo.color && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-4 h-4 rounded-full border border-black/20",
                  style: { backgroundColor: `#${trayInfo.color}` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: trayInfo.type || t("ams.emptySlot") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
                "(",
                trayInfo.location,
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: searchFilter,
                onChange: (e) => setSearchFilter(e.target.value),
                placeholder: t("inventory.searchSpools"),
                className: "w-full pl-9 pr-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white text-sm placeholder:text-bambu-gray focus:outline-none focus:border-bambu-green"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 text-bambu-green animate-spin" }) }) : filteredSpools && filteredSpools.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-96 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-2", children: filteredSpools.map((spool) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setSelectedSpoolId(spool.id),
              title: spool.note || void 0,
              className: `p-2.5 rounded-lg border text-left transition-colors ${selectedSpoolId === spool.id ? "bg-bambu-green/20 border-bambu-green" : "bg-bambu-dark border-bambu-dark-tertiary hover:border-bambu-gray"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-sm font-medium truncate", children: [
                  spool.brand ? `${spool.brand} ` : "",
                  spool.material,
                  spool.subtype ? ` ${spool.subtype}` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1", children: [
                  spool.rgba && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-3 h-3 rounded-full border border-black/20 flex-shrink-0",
                      style: { backgroundColor: `#${spool.rgba.substring(0, 6)}` }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray truncate", children: spool.color_name || "" })
                ] }),
                spool.label_weight && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray mt-1", children: [
                  Math.max(0, Math.round(spool.label_weight - spool.weight_used)),
                  " / ",
                  spool.label_weight,
                  "g"
                ] })
              ]
            },
            spool.id
          )) }) : manualSpools && manualSpools.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-bambu-gray", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("inventory.noManualSpools") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-bambu-gray", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("inventory.noSpoolsMatch") }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 p-4 border-t border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("common.cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleAssign,
              disabled: !selectedSpoolId || assignMutation.isPending,
              children: assignMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                t("inventory.assigning")
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
                t("inventory.assignSpool")
              ] })
            }
          )
        ] }),
        assignMutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 mb-4 p-2 bg-red-500/20 border border-red-500/50 rounded text-sm text-red-400", children: assignMutation.error.message })
      ] })
    ] }),
    showMismatchConfirm && trayInfo && selectedSpoolId && mismatchDetails && (() => {
      let message = "";
      if (mismatchDetails.type === "material") {
        message = t("inventory.assignMismatchMessage", {
          spoolMaterial: mismatchDetails.spoolMaterial,
          trayMaterial: mismatchDetails.trayMaterial,
          location: trayInfo.location
        });
      } else if (mismatchDetails.type === "partial") {
        message = t("inventory.assignPartialMismatchMessage", {
          spoolMaterial: mismatchDetails.spoolMaterial,
          trayMaterial: mismatchDetails.trayMaterial,
          location: trayInfo.location
        });
      } else if (mismatchDetails.type === "material_profile") {
        message = `${t("inventory.assignMismatchMessage", {
          spoolMaterial: mismatchDetails.spoolMaterial,
          trayMaterial: mismatchDetails.trayMaterial,
          location: trayInfo.location
        })}

${t("inventory.assignProfileMismatchMessage", {
          spoolProfile: mismatchDetails.spoolProfile || t("common.unknown"),
          trayProfile: mismatchDetails.trayProfile || t("common.unknown"),
          location: trayInfo.location
        })}`;
      } else if (mismatchDetails.type === "partial_profile") {
        message = `${t("inventory.assignPartialMismatchMessage", {
          spoolMaterial: mismatchDetails.spoolMaterial,
          trayMaterial: mismatchDetails.trayMaterial,
          location: trayInfo.location
        })}

${t("inventory.assignProfileMismatchMessage", {
          spoolProfile: mismatchDetails.spoolProfile || t("common.unknown"),
          trayProfile: mismatchDetails.trayProfile || t("common.unknown"),
          location: trayInfo.location
        })}`;
      } else if (mismatchDetails.type === "profile") {
        message = t("inventory.assignProfileMismatchMessage", {
          spoolProfile: mismatchDetails.spoolProfile || t("common.unknown"),
          trayProfile: mismatchDetails.trayProfile || t("common.unknown"),
          location: trayInfo.location
        });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ConfirmModal,
        {
          title: t("inventory.assignMismatchTitle"),
          message,
          confirmText: t("inventory.assignMismatchConfirm"),
          variant: "warning",
          isLoading: assignMutation.isPending,
          onConfirm: handleConfirmMismatch,
          onCancel: () => {
            if (!assignMutation.isPending) {
              setShowMismatchConfirm(false);
              setPendingAssignId(null);
              setMismatchDetails(null);
            }
          }
        }
      );
    })()
  ] });
}
function getAmsLabel(amsId, trayCount) {
  if (amsId === 255) return "External";
  let normalizedId;
  let isHt = false;
  if (amsId >= 128 && amsId <= 135) {
    normalizedId = amsId - 128;
    isHt = true;
  } else if (amsId >= 0 && amsId <= 3) {
    normalizedId = amsId;
    isHt = trayCount === 1;
  } else {
    normalizedId = 0;
  }
  normalizedId = Math.max(0, Math.min(normalizedId, 7));
  const letter = String.fromCharCode(65 + normalizedId);
  return isHt ? `HT-${letter}` : `AMS-${letter}`;
}
function convertToTrayInfoIdx(settingId) {
  const baseId = settingId.includes("_") ? settingId.split("_")[0] : settingId;
  if (baseId.startsWith("GFS")) {
    return "GF" + baseId.slice(3);
  }
  if (baseId.startsWith("PFUS") || baseId.startsWith("PFSP")) {
    return baseId;
  }
  return baseId;
}
const MATERIAL_TYPES = ["PLA", "PETG", "PCTG", "ABS", "ASA", "TPU", "PC", "PA", "NYLON", "PVA", "HIPS", "PP", "PET"];
function parsePresetName(name) {
  const withoutSuffix = name.replace(/@.+$/, "").trim();
  const upperName = withoutSuffix.toUpperCase();
  const supportMatch = upperName.match(/\bSUPPORT\s+FOR\s+/);
  if (supportMatch) {
    const afterSupport = upperName.slice(supportMatch.index + supportMatch[0].length);
    for (const mat of MATERIAL_TYPES) {
      const regex = new RegExp(`\\b${mat}\\b`);
      if (regex.test(afterSupport)) {
        const brand = withoutSuffix.slice(0, supportMatch.index).trim();
        return { material: mat, brand, variant: "Support" };
      }
    }
  }
  for (const mat of MATERIAL_TYPES) {
    const regex = new RegExp(`\\b${mat}\\b`, "i");
    if (regex.test(upperName)) {
      const parts2 = withoutSuffix.split(regex);
      const brand = parts2[0]?.trim() || "";
      const variant = parts2[1]?.trim() || "";
      return { material: mat, brand, variant };
    }
  }
  const parts = withoutSuffix.split(/\s+/);
  if (parts.length >= 2) {
    return { material: parts[1], brand: parts[0], variant: parts.slice(2).join(" ") };
  }
  return { material: withoutSuffix, brand: "", variant: "" };
}
function isUserPreset(settingId) {
  return !settingId.startsWith("GF") && !settingId.startsWith("P1");
}
const COLOR_NAME_MAP = {
  // Basic colors
  "white": "FFFFFF",
  "black": "000000",
  "red": "FF0000",
  "green": "00FF00",
  "blue": "0000FF",
  "yellow": "FFFF00",
  "cyan": "00FFFF",
  "magenta": "FF00FF",
  "orange": "FFA500",
  "purple": "800080",
  "pink": "FFC0CB",
  "brown": "8B4513",
  "gray": "808080",
  "grey": "808080",
  // Filament-specific colors
  "jade white": "FFFEF2",
  "ivory": "FFFFF0",
  "beige": "F5F5DC",
  "cream": "FFFDD0",
  "silver": "C0C0C0",
  "gold": "FFD700",
  "bronze": "CD7F32",
  "copper": "B87333",
  "navy": "000080",
  "teal": "008080",
  "olive": "808000",
  "maroon": "800000",
  "coral": "FF7F50",
  "salmon": "FA8072",
  "lime": "32CD32",
  "mint": "98FF98",
  "forest green": "228B22",
  "sky blue": "87CEEB",
  "royal blue": "4169E1",
  "turquoise": "40E0D0",
  "lavender": "E6E6FA",
  "violet": "EE82EE",
  "plum": "DDA0DD",
  "tan": "D2B48C",
  "chocolate": "D2691E",
  "charcoal": "36454F",
  "slate": "708090",
  "transparent": "000000",
  // Will need special handling
  "natural": "F5F5DC",
  "wood": "DEB887"
};
const QUICK_COLORS_BASIC = [
  { name: "White", hex: "FFFFFF" },
  { name: "Black", hex: "000000" },
  { name: "Red", hex: "FF0000" },
  { name: "Blue", hex: "0000FF" },
  { name: "Green", hex: "00AA00" },
  { name: "Yellow", hex: "FFFF00" },
  { name: "Orange", hex: "FFA500" },
  { name: "Gray", hex: "808080" }
];
const QUICK_COLORS_EXTENDED = [
  { name: "Cyan", hex: "00FFFF" },
  { name: "Magenta", hex: "FF00FF" },
  { name: "Purple", hex: "800080" },
  { name: "Pink", hex: "FFC0CB" },
  { name: "Brown", hex: "8B4513" },
  { name: "Beige", hex: "F5F5DC" },
  { name: "Navy", hex: "000080" },
  { name: "Teal", hex: "008080" },
  { name: "Lime", hex: "32CD32" },
  { name: "Gold", hex: "FFD700" },
  { name: "Silver", hex: "C0C0C0" },
  { name: "Maroon", hex: "800000" },
  { name: "Olive", hex: "808000" },
  { name: "Coral", hex: "FF7F50" },
  { name: "Salmon", hex: "FA8072" },
  { name: "Turquoise", hex: "40E0D0" },
  { name: "Violet", hex: "EE82EE" },
  { name: "Indigo", hex: "4B0082" },
  { name: "Chocolate", hex: "D2691E" },
  { name: "Tan", hex: "D2B48C" },
  { name: "Slate", hex: "708090" },
  { name: "Charcoal", hex: "36454F" },
  { name: "Ivory", hex: "FFFFF0" },
  { name: "Cream", hex: "FFFDD0" }
];
function colorNameToHex(name) {
  const normalized = name.toLowerCase().trim();
  return COLOR_NAME_MAP[normalized] || null;
}
function extractPresetModel(name) {
  const atIdx = name.indexOf("@");
  if (atIdx < 0) return null;
  const suffix = name.slice(atIdx + 1).trim();
  const bblMatch = suffix.match(/^BBL\s+(.+?)(?:\s+[\d.]+\s*nozzle)?$/i);
  if (bblMatch) return bblMatch[1].trim();
  return null;
}
function ConfigureAmsSlotModal({
  isOpen,
  onClose,
  printerId,
  slotInfo,
  nozzleDiameter = "0.4",
  printerModel,
  onSuccess,
  fullScreen
}) {
  const { t } = useTranslation();
  const [selectedPresetId, setSelectedPresetId] = reactExports.useState("");
  const [selectedKProfile, setSelectedKProfile] = reactExports.useState(null);
  const [colorHex, setColorHex] = reactExports.useState("");
  const [colorInput, setColorInput] = reactExports.useState("");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [showSuccess, setShowSuccess] = reactExports.useState(false);
  const [showExtendedColors, setShowExtendedColors] = reactExports.useState(false);
  const scrolledToRef = reactExports.useRef("");
  const { data: cloudSettings, isLoading: settingsLoading, isError: cloudError } = useQuery({
    queryKey: ["cloudSettings"],
    queryFn: () => api.getCloudSettings(),
    enabled: isOpen,
    retry: false
  });
  const { data: localPresets, isLoading: localLoading } = useQuery({
    queryKey: ["localPresets"],
    queryFn: () => api.getLocalPresets(),
    enabled: isOpen
  });
  const { data: builtinFilaments, isLoading: builtinLoading } = useQuery({
    queryKey: ["builtinFilaments"],
    queryFn: () => api.getBuiltinFilaments(),
    enabled: isOpen,
    staleTime: Infinity
  });
  const { data: kprofilesData, isLoading: kprofilesLoading } = useQuery({
    queryKey: ["kprofiles", printerId, nozzleDiameter],
    queryFn: () => api.getKProfiles(printerId, nozzleDiameter),
    enabled: isOpen && !!printerId
  });
  const { data: colorCatalog } = useQuery({
    queryKey: ["colorCatalog"],
    queryFn: () => api.getColorCatalog(),
    enabled: isOpen,
    staleTime: Infinity
  });
  const configureMutation = useMutation({
    mutationFn: async () => {
      if (!selectedPresetId) throw new Error("No filament preset selected");
      const isLocal = selectedPresetId.startsWith("local_");
      const isBuiltin = selectedPresetId.startsWith("builtin_");
      const localId = isLocal ? parseInt(selectedPresetId.replace("local_", ""), 10) : null;
      const builtinFilamentId = isBuiltin ? selectedPresetId.replace("builtin_", "") : null;
      const localPreset = isLocal ? localPresets?.filament.find((p) => p.id === localId) : null;
      const builtinPreset = isBuiltin ? builtinFilaments?.find((b) => b.filament_id === builtinFilamentId) : null;
      const selectedPreset = !isLocal && !isBuiltin ? cloudSettings?.filament.find((p) => p.setting_id === selectedPresetId) : null;
      if (!isLocal && !isBuiltin && !selectedPreset) throw new Error("Selected preset not found");
      if (isLocal && !localPreset) throw new Error("Selected local preset not found");
      if (isBuiltin && !builtinPreset) throw new Error("Selected builtin preset not found");
      const presetName = isLocal ? localPreset.name : isBuiltin ? builtinPreset.name : selectedPreset.name;
      const parsed = parsePresetName(presetName);
      const caliIdx = selectedKProfile?.slot_id ?? -1;
      const color = colorHex || slotInfo.trayColor?.slice(0, 6) || "FFFFFF";
      const traySubBrands = presetName.replace(/@.+$/, "").trim();
      let trayInfoIdx;
      let settingId;
      const parsedMat = parsed.material.toUpperCase();
      if (isLocal) {
        const material = (MATERIAL_TYPES.includes(parsedMat) ? parsedMat : localPreset?.filament_type || parsed.material || "").toUpperCase();
        const GENERIC_IDS = {
          "PLA": "GFL99",
          "PLA-CF": "GFL98",
          "PLA SILK": "GFL96",
          "PLA HIGH SPEED": "GFL95",
          "PETG": "GFG99",
          "PETG HF": "GFG96",
          "PETG-CF": "GFG98",
          "PCTG": "GFG97",
          "ABS": "GFB99",
          "ASA": "GFB98",
          "PC": "GFC99",
          "PA": "GFN99",
          "PA-CF": "GFN98",
          "NYLON": "GFN99",
          "TPU": "GFU99",
          "PVA": "GFS99",
          "HIPS": "GFS98",
          "PE": "GFP99",
          "PP": "GFP97"
        };
        trayInfoIdx = GENERIC_IDS[material] || GENERIC_IDS[material.replace(/[-\s]?CF$/, "")] || GENERIC_IDS[material.replace(/\+$/, "")] || GENERIC_IDS[material.split(/[-\s]/)[0]] || "";
        settingId = "";
      } else if (isBuiltin) {
        trayInfoIdx = builtinFilamentId;
        settingId = "";
      } else {
        trayInfoIdx = convertToTrayInfoIdx(selectedPresetId);
        settingId = selectedPresetId;
        if (!selectedPresetId.startsWith("GFS")) {
          try {
            const detail = await api.getCloudSettingDetail(selectedPresetId);
            if (detail.filament_id) {
              trayInfoIdx = detail.filament_id;
            } else if (detail.base_id) {
              trayInfoIdx = convertToTrayInfoIdx(detail.base_id);
              console.log(`Derived tray_info_idx from base_id: ${detail.base_id} -> ${trayInfoIdx}`);
            }
          } catch (e) {
            console.warn("Failed to fetch preset detail for filament_id:", e);
          }
        }
      }
      let tempMin = isLocal && localPreset?.nozzle_temp_min ? localPreset.nozzle_temp_min : 190;
      let tempMax = isLocal && localPreset?.nozzle_temp_max ? localPreset.nozzle_temp_max : 230;
      if (!isLocal || isBuiltin || !localPreset?.nozzle_temp_min && !localPreset?.nozzle_temp_max) {
        const material = (isLocal ? MATERIAL_TYPES.includes(parsedMat) ? parsedMat : localPreset?.filament_type || parsed.material || "" : parsed.material).toUpperCase();
        if (material.includes("PLA")) {
          tempMin = 190;
          tempMax = 230;
        } else if (material.includes("PETG")) {
          tempMin = 220;
          tempMax = 260;
        } else if (material.includes("ABS")) {
          tempMin = 240;
          tempMax = 280;
        } else if (material.includes("ASA")) {
          tempMin = 240;
          tempMax = 280;
        } else if (material.includes("TPU")) {
          tempMin = 200;
          tempMax = 240;
        } else if (material === "PCTG") {
          tempMin = 220;
          tempMax = 260;
        } else if (material.includes("PC")) {
          tempMin = 260;
          tempMax = 300;
        } else if (material.includes("PA") || material.includes("NYLON")) {
          tempMin = 250;
          tempMax = 290;
        }
      }
      const kValue = selectedKProfile?.k_value ? parseFloat(selectedKProfile.k_value) : 0;
      const trayType = isLocal ? MATERIAL_TYPES.includes(parsedMat) ? parsedMat : localPreset?.filament_type || parsed.material || "PLA" : parsed.material || "PLA";
      const result = await api.configureAmsSlot(printerId, slotInfo.amsId, slotInfo.trayId, {
        tray_info_idx: trayInfoIdx,
        tray_type: trayType,
        tray_sub_brands: traySubBrands,
        tray_color: color + "FF",
        // Add alpha
        nozzle_temp_min: tempMin,
        nozzle_temp_max: tempMax,
        cali_idx: caliIdx,
        nozzle_diameter: nozzleDiameter,
        setting_id: settingId,
        // Full setting ID for slicer compatibility (empty for local)
        // Pass K profile's filament_id and setting_id for proper linking
        kprofile_filament_id: selectedKProfile?.filament_id,
        kprofile_setting_id: selectedKProfile?.setting_id || void 0,
        // Also pass the K value directly for extrusion_cali_set command
        k_value: kValue
      });
      const mappingPresetId = isLocal ? `local_${localId}` : isBuiltin ? `builtin_${builtinFilamentId}` : selectedPresetId;
      const mappingSource = isLocal ? "local" : isBuiltin ? "builtin" : "cloud";
      try {
        await api.saveSlotPreset(printerId, slotInfo.amsId, slotInfo.trayId, mappingPresetId, traySubBrands, mappingSource);
      } catch (e) {
        console.warn("Failed to save slot preset mapping:", e);
      }
      return result;
    },
    onSuccess: () => {
      setShowSuccess(true);
      onSuccess?.();
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1500);
    }
  });
  const resetMutation = useMutation({
    mutationFn: async () => {
      return api.resetAmsSlot(printerId, slotInfo.amsId, slotInfo.trayId);
    },
    onSuccess: () => {
      setShowSuccess(true);
      onSuccess?.();
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1500);
    }
  });
  const filteredPresets = reactExports.useMemo(() => {
    const query = searchQuery.toLowerCase();
    const items = [];
    const coveredIds = /* @__PURE__ */ new Set();
    const savedId = slotInfo.savedPresetId;
    const trayIdx = slotInfo.trayInfoIdx;
    if (cloudSettings?.filament) {
      for (const cp of cloudSettings.filament) {
        coveredIds.add(cp.setting_id);
        const isSavedPreset = savedId === cp.setting_id;
        const isCurrentPreset = isSavedPreset || trayIdx && (cp.setting_id === trayIdx || convertToTrayInfoIdx(cp.setting_id) === trayIdx);
        if (query && !cp.name.toLowerCase().includes(query)) continue;
        if (!isCurrentPreset && printerModel) {
          const presetModel = extractPresetModel(cp.name);
          if (presetModel && presetModel.toUpperCase() !== printerModel.toUpperCase()) continue;
        }
        items.push({ id: cp.setting_id, name: cp.name, source: "cloud", isUser: isUserPreset(cp.setting_id) });
      }
    }
    if (localPresets?.filament) {
      for (const lp of localPresets.filament) {
        const localId = `local_${lp.id}`;
        if (query && !lp.name.toLowerCase().includes(query)) continue;
        items.push({ id: localId, name: lp.name, source: "local", isUser: false });
      }
    }
    if (builtinFilaments) {
      for (const bf of builtinFilaments) {
        if (coveredIds.has(bf.filament_id)) continue;
        const settingId = bf.filament_id.startsWith("GF") ? "GFS" + bf.filament_id.slice(2) : bf.filament_id;
        if (coveredIds.has(settingId)) continue;
        if (!query || bf.name.toLowerCase().includes(query)) {
          items.push({ id: `builtin_${bf.filament_id}`, name: bf.name, source: "builtin", isUser: false });
        }
      }
    }
    return items.sort((a, b) => {
      const sourceOrder = { cloud: 0, local: 1, builtin: 2 };
      if (a.source !== b.source) return sourceOrder[a.source] - sourceOrder[b.source];
      if (a.isUser && !b.isUser) return -1;
      if (!a.isUser && b.isUser) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [cloudSettings?.filament, localPresets?.filament, builtinFilaments, searchQuery, printerModel, slotInfo.savedPresetId, slotInfo.trayInfoIdx]);
  const selectedPresetInfo = reactExports.useMemo(() => {
    if (!selectedPresetId) return null;
    let presetName = null;
    if (selectedPresetId.startsWith("local_")) {
      const localId = parseInt(selectedPresetId.replace("local_", ""), 10);
      const lp = localPresets?.filament.find((p) => p.id === localId);
      presetName = lp?.name || null;
    } else if (selectedPresetId.startsWith("builtin_")) {
      const filamentId = selectedPresetId.replace("builtin_", "");
      const bf = builtinFilaments?.find((b) => b.filament_id === filamentId);
      presetName = bf?.name || null;
    } else if (cloudSettings?.filament) {
      const cp = cloudSettings.filament.find((p) => p.setting_id === selectedPresetId);
      presetName = cp?.name || null;
    } else ;
    if (!presetName) {
      return null;
    }
    let nameWithoutSuffix = presetName.replace(/@.+$/, "").trim();
    if (nameWithoutSuffix.startsWith("# ")) {
      nameWithoutSuffix = nameWithoutSuffix.slice(2).trim();
    }
    const parsed = parsePresetName(nameWithoutSuffix);
    return {
      fullName: nameWithoutSuffix,
      material: parsed.material,
      brand: parsed.brand
    };
  }, [selectedPresetId, cloudSettings?.filament, localPresets?.filament, builtinFilaments]);
  const selectedMaterial = selectedPresetInfo?.fullName || "";
  const catalogColors = reactExports.useMemo(() => {
    if (!colorCatalog || !selectedPresetInfo) return [];
    const { fullName, brand } = selectedPresetInfo;
    const materialVariant = fullName.replace(/^(Bambu\s*(Lab)?|eSUN|Polymaker|Overture|Sunlu|Hatchbox)\s*/i, "").trim();
    return colorCatalog.filter((entry) => {
      const entryMaterial = (entry.material || "").toUpperCase();
      const entryManufacturer = entry.manufacturer.toUpperCase();
      const materialMatch = entryMaterial === materialVariant.toUpperCase() || entryMaterial.includes(materialVariant.toUpperCase()) || materialVariant.toUpperCase().includes(entryMaterial);
      if (!materialMatch) return false;
      if (brand) {
        const upperBrand = brand.toUpperCase();
        if (!entryManufacturer.includes(upperBrand) && !upperBrand.includes(entryManufacturer)) {
          return false;
        }
      }
      return true;
    });
  }, [colorCatalog, selectedPresetInfo]);
  const matchingKProfiles = reactExports.useMemo(() => {
    if (!kprofilesData?.profiles || !selectedPresetInfo) return [];
    const { fullName, material, brand } = selectedPresetInfo;
    const upperFullName = fullName.toUpperCase();
    const upperMaterial = material.toUpperCase();
    const upperBrand = brand.toUpperCase();
    if (!upperMaterial || upperMaterial.length < 2) return [];
    const filtered = kprofilesData.profiles.filter((p) => {
      const profileName = p.name.toUpperCase();
      if (upperBrand) {
        if (!profileName.includes(upperBrand)) {
          return false;
        }
        if (!profileName.includes(upperMaterial)) {
          return false;
        }
        return true;
      }
      if (profileName.includes(upperFullName)) {
        return true;
      }
      if (profileName.includes(upperMaterial)) {
        return true;
      }
      const aliases = {
        "NYLON": ["PA", "PA-CF", "PA6"],
        "PA": ["NYLON"]
      };
      const materialAliases = aliases[upperMaterial] || [];
      for (const alias of materialAliases) {
        if (profileName.includes(alias)) {
          return true;
        }
      }
      return false;
    });
    const seen = /* @__PURE__ */ new Map();
    for (const profile of filtered) {
      const key = `${profile.name}|${profile.k_value}`;
      const existing = seen.get(key);
      if (!existing) {
        seen.set(key, profile);
      } else if (slotInfo.extruderId !== void 0 && profile.extruder_id === slotInfo.extruderId && existing.extruder_id !== slotInfo.extruderId) {
        seen.set(key, profile);
      }
    }
    return Array.from(seen.values());
  }, [kprofilesData?.profiles, selectedPresetInfo, slotInfo.extruderId]);
  reactExports.useEffect(() => {
    if (isOpen) {
      if (slotInfo.savedPresetId) {
        setSelectedPresetId(slotInfo.savedPresetId);
      } else if (slotInfo.trayInfoIdx && cloudSettings?.filament) {
        let currentPreset = cloudSettings.filament.find(
          (p) => p.setting_id === slotInfo.trayInfoIdx
        );
        if (!currentPreset) {
          currentPreset = cloudSettings.filament.find(
            (p) => convertToTrayInfoIdx(p.setting_id) === slotInfo.trayInfoIdx
          );
        }
        if (currentPreset) {
          setSelectedPresetId(currentPreset.setting_id);
        }
      } else if (slotInfo.trayInfoIdx && builtinFilaments?.length) {
        const trayIdx = slotInfo.trayInfoIdx;
        const match = builtinFilaments.find((bf) => bf.filament_id === trayIdx);
        if (match) {
          setSelectedPresetId(`builtin_${match.filament_id}`);
        }
      }
      if (slotInfo.trayColor) {
        const hex = slotInfo.trayColor.slice(0, 6);
        if (hex) {
          setColorHex(hex);
        }
      }
    } else {
      setSelectedPresetId("");
      setSelectedKProfile(null);
      setColorHex("");
      setColorInput("");
      setSearchQuery("");
      setShowSuccess(false);
      scrolledToRef.current = "";
    }
  }, [isOpen, slotInfo.savedPresetId, slotInfo.trayInfoIdx, slotInfo.trayColor, cloudSettings?.filament, builtinFilaments]);
  reactExports.useEffect(() => {
    if (matchingKProfiles.length > 0) {
      if (slotInfo.caliIdx != null && slotInfo.caliIdx > 0) {
        const active = matchingKProfiles.find((p) => p.slot_id === slotInfo.caliIdx);
        if (active) {
          setSelectedKProfile(active);
          return;
        }
      }
      setSelectedKProfile(matchingKProfiles[0]);
    } else {
      setSelectedKProfile(null);
    }
  }, [selectedPresetId, matchingKProfiles, slotInfo.caliIdx]);
  const handleKeyDown = reactExports.useCallback((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);
  reactExports.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);
  const isLoading = settingsLoading && !cloudError || localLoading || builtinLoading || kprofilesLoading;
  reactExports.useEffect(() => {
    if (!isLoading && selectedPresetId && selectedPresetId !== scrolledToRef.current) {
      const raf = requestAnimationFrame(() => {
        const modal = document.querySelector('[class*="fixed inset-0 z-50"]');
        const el = modal?.querySelector(`[data-preset-id="${CSS.escape(selectedPresetId)}"]`);
        if (el) {
          scrolledToRef.current = selectedPresetId;
          el.scrollIntoView({ block: "nearest" });
        }
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [selectedPresetId, isLoading]);
  if (!isOpen) return null;
  const canSave = selectedPresetId && !configureMutation.isPending;
  const displayColor = colorHex || slotInfo.trayColor?.slice(0, 6) || "FFFFFF";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `fixed inset-0 z-50 flex ${fullScreen ? "" : "items-center justify-center"}`, children: [
    !fullScreen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: fullScreen ? "relative w-full h-full bg-bambu-dark-secondary flex flex-col" : "relative w-full max-w-lg mx-4 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-xl shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-bambu-dark-tertiary shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-5 h-5 text-bambu-blue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("configureAmsSlot.title") }),
          fullScreen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ml-4 text-sm text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "|" }),
            slotInfo.trayColor && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "w-4 h-4 rounded-full border border-black/20",
                style: { backgroundColor: `#${slotInfo.trayColor.slice(0, 6)}` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: t("configureAmsSlot.slotLabel", { ams: getAmsLabel(slotInfo.amsId, slotInfo.trayCount), slot: slotInfo.trayId + 1 }) }),
            slotInfo.traySubBrands && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "(",
              slotInfo.traySubBrands,
              ")"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "p-1 text-bambu-gray hover:text-white rounded transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 overflow-y-auto ${fullScreen ? "flex-1 min-h-0" : "space-y-4 max-h-[60vh]"}`, children: [
        showSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-bambu-dark-secondary/95 z-10 flex items-center justify-center rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-16 h-16 text-bambu-green mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-white", children: t("configureAmsSlot.slotConfigured") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("configureAmsSlot.settingsSentToPrinter") })
        ] }) }),
        !fullScreen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-bambu-dark rounded-lg border border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-1", children: t("configureAmsSlot.configuringSlot") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            slotInfo.trayColor && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "w-4 h-4 rounded-full border border-black/20",
                style: { backgroundColor: `#${slotInfo.trayColor.slice(0, 6)}` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: t("configureAmsSlot.slotLabel", { ams: getAmsLabel(slotInfo.amsId, slotInfo.trayCount), slot: slotInfo.trayId + 1 }) }),
            slotInfo.traySubBrands && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
              "(",
              slotInfo.traySubBrands,
              ")"
            ] })
          ] })
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 text-bambu-green animate-spin" }) }) : fullScreen ? (
          /* Two-column layout for kiosk display */
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/2 flex flex-col min-h-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm text-bambu-gray mb-2", children: [
                t("configureAmsSlot.filamentProfile"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: t("configureAmsSlot.searchPresets"),
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder:text-bambu-gray focus:border-bambu-green focus:outline-none mb-2 shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto space-y-1", children: filteredPresets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-4 text-bambu-gray", children: cloudSettings?.filament?.length === 0 && !localPresets?.filament?.length ? t("configureAmsSlot.noPresetsAvailable") : t("configureAmsSlot.noMatchingPresets") }) : filteredPresets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "data-preset-id": preset.id,
                  onClick: () => setSelectedPresetId(preset.id),
                  className: `w-full p-2 rounded-lg border text-left transition-colors ${selectedPresetId === preset.id ? "bg-bambu-green/20 border-bambu-green" : "bg-bambu-dark border-bambu-dark-tertiary hover:border-bambu-gray"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm truncate", children: preset.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
                      preset.source === "local" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-400", children: t("profiles.localProfiles.badge") }),
                      preset.source === "builtin" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400", children: t("configureAmsSlot.builtin") }),
                      preset.isUser && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded bg-bambu-blue/20 text-bambu-blue", children: t("configureAmsSlot.custom") })
                    ] })
                  ] })
                },
                preset.id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/2 flex flex-col gap-4 min-h-0 overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm text-bambu-gray mb-2", children: [
                  t("configureAmsSlot.kProfileLabel"),
                  selectedMaterial && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-bambu-blue", children: t("configureAmsSlot.filteringFor", { material: selectedMaterial }) })
                ] }),
                matchingKProfiles.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: selectedKProfile?.name || "",
                      onChange: (e) => {
                        const profile = matchingKProfiles.find((p) => p.name === e.target.value);
                        setSelectedKProfile(profile || null);
                      },
                      className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none appearance-none pr-10",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("configureAmsSlot.noKProfile") }),
                        matchingKProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: profile.name, children: [
                          profile.name,
                          " (K=",
                          profile.k_value,
                          ")"
                        ] }, `${profile.name}-${profile.extruder_id}`))
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray pointer-events-none" })
                ] }) : selectedPresetId ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray italic py-2", children: t("configureAmsSlot.noMatchingKProfiles") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30", children: t("configureAmsSlot.selectFilamentFirst") }),
                selectedKProfile && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-green mt-1", children: t("configureAmsSlot.kFromCalibration", { value: selectedKProfile.k_value }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-2", children: t("configureAmsSlot.customColorLabel") }),
                catalogColors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-1.5", children: t("configureAmsSlot.presetColors", { name: selectedPresetInfo?.fullName }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: catalogColors.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => {
                        const hex = entry.hex_color.replace("#", "").toUpperCase();
                        setColorHex(hex);
                        setColorInput(entry.color_name);
                      },
                      className: `h-7 px-2 rounded-md border-2 transition-all flex items-center gap-1.5 ${colorHex === entry.hex_color.replace("#", "").toUpperCase() ? "border-bambu-green scale-105" : "border-white/20 hover:border-white/40"}`,
                      title: entry.color_name,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "w-4 h-4 rounded-full border border-black/20 flex-shrink-0",
                            style: { backgroundColor: entry.hex_color }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/80 whitespace-nowrap", children: entry.color_name })
                      ]
                    },
                    entry.id
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mb-2", children: [
                  QUICK_COLORS_BASIC.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        setColorHex(color.hex);
                        setColorInput(color.name);
                      },
                      className: `w-7 h-7 rounded-md border-2 transition-all ${colorHex === color.hex ? "border-bambu-green scale-110" : "border-white/20 hover:border-white/40"}`,
                      style: { backgroundColor: `#${color.hex}` },
                      title: color.name
                    },
                    color.hex
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setShowExtendedColors(!showExtendedColors),
                      className: "w-7 h-7 rounded-md border-2 border-white/20 hover:border-white/40 flex items-center justify-center text-white/60 hover:text-white/80 transition-all text-xs",
                      title: showExtendedColors ? t("configureAmsSlot.showLessColors") : t("configureAmsSlot.showMoreColors"),
                      children: showExtendedColors ? "−" : "+"
                    }
                  )
                ] }),
                showExtendedColors && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-2", children: QUICK_COLORS_EXTENDED.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      setColorHex(color.hex);
                      setColorInput(color.name);
                    },
                    className: `w-7 h-7 rounded-md border-2 transition-all ${colorHex === color.hex ? "border-bambu-green scale-110" : "border-white/20 hover:border-white/40"}`,
                    style: { backgroundColor: `#${color.hex}` },
                    title: color.name
                  },
                  color.hex
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-lg border-2 border-white/20 flex-shrink-0",
                      style: { backgroundColor: `#${displayColor}` }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: t("configureAmsSlot.colorPlaceholder"),
                      value: colorInput,
                      onChange: (e) => {
                        const input = e.target.value;
                        setColorInput(input);
                        const nameHex = colorNameToHex(input);
                        if (nameHex) {
                          setColorHex(nameHex);
                        } else {
                          const cleaned = input.replace(/[^0-9A-Fa-f]/g, "").toUpperCase();
                          if (cleaned.length === 6) {
                            setColorHex(cleaned);
                          } else if (cleaned.length === 3) {
                            setColorHex(cleaned.split("").map((c) => c + c).join(""));
                          }
                        }
                      },
                      className: "flex-1 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder:text-bambu-gray focus:border-bambu-green focus:outline-none text-sm"
                    }
                  ),
                  colorHex && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        setColorHex("");
                        setColorInput("");
                      },
                      className: "px-2 py-1 text-xs text-bambu-gray hover:text-white bg-bambu-dark-tertiary rounded",
                      title: t("configureAmsSlot.clearCustomColor"),
                      children: t("configureAmsSlot.clear")
                    }
                  )
                ] }),
                colorHex && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1.5", children: t("configureAmsSlot.hexLabel", { hex: colorHex }) })
              ] })
            ] })
          ] })
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm text-bambu-gray mb-2", children: [
              t("configureAmsSlot.filamentProfile"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: t("configureAmsSlot.searchPresets"),
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder:text-bambu-gray focus:border-bambu-green focus:outline-none mb-2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-48 overflow-y-auto space-y-1", children: filteredPresets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-4 text-bambu-gray", children: cloudSettings?.filament?.length === 0 && !localPresets?.filament?.length ? t("configureAmsSlot.noPresetsAvailable") : t("configureAmsSlot.noMatchingPresets") }) : filteredPresets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "data-preset-id": preset.id,
                  onClick: () => setSelectedPresetId(preset.id),
                  className: `w-full p-2 rounded-lg border text-left transition-colors ${selectedPresetId === preset.id ? "bg-bambu-green/20 border-bambu-green" : "bg-bambu-dark border-bambu-dark-tertiary hover:border-bambu-gray"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm truncate", children: preset.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
                      preset.source === "local" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-400", children: t("profiles.localProfiles.badge") }),
                      preset.source === "builtin" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400", children: t("configureAmsSlot.builtin") }),
                      preset.isUser && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-1.5 py-0.5 rounded bg-bambu-blue/20 text-bambu-blue", children: t("configureAmsSlot.custom") })
                    ] })
                  ] })
                },
                preset.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm text-bambu-gray mb-2", children: [
              t("configureAmsSlot.kProfileLabel"),
              selectedMaterial && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-bambu-blue", children: t("configureAmsSlot.filteringFor", { material: selectedMaterial }) })
            ] }),
            matchingKProfiles.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: selectedKProfile?.name || "",
                  onChange: (e) => {
                    const profile = matchingKProfiles.find((p) => p.name === e.target.value);
                    setSelectedKProfile(profile || null);
                  },
                  className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none appearance-none pr-10",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("configureAmsSlot.noKProfile") }),
                    matchingKProfiles.map((profile) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: profile.name, children: [
                      profile.name,
                      " (K=",
                      profile.k_value,
                      ")"
                    ] }, `${profile.name}-${profile.extruder_id}`))
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray pointer-events-none" })
            ] }) : selectedPresetId ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray italic py-2", children: t("configureAmsSlot.noMatchingKProfiles") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30", children: t("configureAmsSlot.selectFilamentFirst") }),
            selectedKProfile && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-green mt-1", children: t("configureAmsSlot.kFromCalibration", { value: selectedKProfile.k_value }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bambu-gray mb-2", children: t("configureAmsSlot.customColorLabel") }),
            catalogColors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mb-1.5", children: t("configureAmsSlot.presetColors", { name: selectedPresetInfo?.fullName }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: catalogColors.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    const hex = entry.hex_color.replace("#", "").toUpperCase();
                    setColorHex(hex);
                    setColorInput(entry.color_name);
                  },
                  className: `h-7 px-2 rounded-md border-2 transition-all flex items-center gap-1.5 ${colorHex === entry.hex_color.replace("#", "").toUpperCase() ? "border-bambu-green scale-105" : "border-white/20 hover:border-white/40"}`,
                  title: entry.color_name,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-4 h-4 rounded-full border border-black/20 flex-shrink-0",
                        style: { backgroundColor: entry.hex_color }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/80 whitespace-nowrap", children: entry.color_name })
                  ]
                },
                entry.id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mb-2", children: [
              QUICK_COLORS_BASIC.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setColorHex(color.hex);
                    setColorInput(color.name);
                  },
                  className: `w-7 h-7 rounded-md border-2 transition-all ${colorHex === color.hex ? "border-bambu-green scale-110" : "border-white/20 hover:border-white/40"}`,
                  style: { backgroundColor: `#${color.hex}` },
                  title: color.name
                },
                color.hex
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setShowExtendedColors(!showExtendedColors),
                  className: "w-7 h-7 rounded-md border-2 border-white/20 hover:border-white/40 flex items-center justify-center text-white/60 hover:text-white/80 transition-all text-xs",
                  title: showExtendedColors ? t("configureAmsSlot.showLessColors") : t("configureAmsSlot.showMoreColors"),
                  children: showExtendedColors ? "−" : "+"
                }
              )
            ] }),
            showExtendedColors && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-2", children: QUICK_COLORS_EXTENDED.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  setColorHex(color.hex);
                  setColorInput(color.name);
                },
                className: `w-7 h-7 rounded-md border-2 transition-all ${colorHex === color.hex ? "border-bambu-green scale-110" : "border-white/20 hover:border-white/40"}`,
                style: { backgroundColor: `#${color.hex}` },
                title: color.name
              },
              color.hex
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-lg border-2 border-white/20 flex-shrink-0",
                  style: { backgroundColor: `#${displayColor}` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: t("configureAmsSlot.colorPlaceholder"),
                  value: colorInput,
                  onChange: (e) => {
                    const input = e.target.value;
                    setColorInput(input);
                    const nameHex = colorNameToHex(input);
                    if (nameHex) {
                      setColorHex(nameHex);
                    } else {
                      const cleaned = input.replace(/[^0-9A-Fa-f]/g, "").toUpperCase();
                      if (cleaned.length === 6) {
                        setColorHex(cleaned);
                      } else if (cleaned.length === 3) {
                        setColorHex(cleaned.split("").map((c) => c + c).join(""));
                      }
                    }
                  },
                  className: "flex-1 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white placeholder:text-bambu-gray focus:border-bambu-green focus:outline-none text-sm"
                }
              ),
              colorHex && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setColorHex("");
                    setColorInput("");
                  },
                  className: "px-2 py-1 text-xs text-bambu-gray hover:text-white bg-bambu-dark-tertiary rounded",
                  title: t("configureAmsSlot.clearCustomColor"),
                  children: t("configureAmsSlot.clear")
                }
              )
            ] }),
            colorHex && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1.5", children: t("configureAmsSlot.hexLabel", { hex: colorHex }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-4 border-t border-bambu-dark-tertiary shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            onClick: () => resetMutation.mutate(),
            disabled: resetMutation.isPending || configureMutation.isPending,
            className: "text-red-400 hover:text-red-300 hover:bg-red-500/10",
            children: resetMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              t("configureAmsSlot.resetting")
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
              t("configureAmsSlot.resetSlot")
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("configureAmsSlot.cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => configureMutation.mutate(),
              disabled: !canSave,
              children: configureMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                t("configureAmsSlot.configuring")
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4" }),
                t("configureAmsSlot.configureSlot")
              ] })
            }
          )
        ] })
      ] }),
      (configureMutation.isError || resetMutation.isError) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 mb-4 p-2 bg-red-500/20 border border-red-500/50 rounded text-sm text-red-400", children: configureMutation.error?.message || resetMutation.error?.message })
    ] })
  ] });
}
export {
  AssignSpoolModal as A,
  ConfigureAmsSlotModal as C,
  LinkSpoolModal as L
};
