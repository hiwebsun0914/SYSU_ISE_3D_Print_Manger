import { u as useTranslation, r as reactExports, d as useQuery, e as useMutation, f as api, j as jsxRuntimeExports, Q as Layers, X, L as LoaderCircle, B as Button, J as useNavigate, b as useQueryClient, a as useToast, av as useSearchParams, A as Card, a7 as CardHeader, D as CardContent, l as TriangleAlert } from "./index-CMdmMVx7.js";
import { r as resolveOnlineSlicerUrlTemplate } from "./onlineSlicer-DCE9QPxG.js";
import { A as ArrowLeft } from "./arrow-left-BzxMPwph.js";
import { S as Settings2 } from "./settings-2-7qvQ1FIQ.js";
import { C as Copy } from "./copy-C0dS-OpP.js";
import { F as FolderOpen } from "./folder-open-C5fOkWbI.js";
import { D as Download } from "./download-CY8JIv9P.js";
import { A as ArrowUpRight } from "./arrow-up-right-Day1wTam.js";
function SliceStlModal({ file, onClose, onSuccess }) {
  const { t } = useTranslation();
  const [printerPresetId, setPrinterPresetId] = reactExports.useState("");
  const [processPresetId, setProcessPresetId] = reactExports.useState("");
  const [filamentPresetId, setFilamentPresetId] = reactExports.useState("");
  const [outputFilename, setOutputFilename] = reactExports.useState(() => file.filename.replace(/\.stl$/i, ""));
  const [arrange, setArrange] = reactExports.useState(true);
  const [orient, setOrient] = reactExports.useState(true);
  const { data, isLoading, error } = useQuery({
    queryKey: ["library-slice-presets"],
    queryFn: () => api.getLibrarySlicePresets()
  });
  const printerPresets = reactExports.useMemo(() => data?.printer ?? [], [data?.printer]);
  const processPresets = reactExports.useMemo(() => data?.process ?? [], [data?.process]);
  const filamentPresets = reactExports.useMemo(() => data?.filament ?? [], [data?.filament]);
  reactExports.useEffect(() => {
    if (printerPresetId === "" && printerPresets.length > 0) {
      setPrinterPresetId(printerPresets[0].id);
    }
  }, [printerPresetId, printerPresets]);
  reactExports.useEffect(() => {
    if (processPresetId === "" && processPresets.length > 0) {
      setProcessPresetId(processPresets[0].id);
    }
  }, [processPresetId, processPresets]);
  reactExports.useEffect(() => {
    if (filamentPresetId === "" && filamentPresets.length > 0) {
      setFilamentPresetId(filamentPresets[0].id);
    }
  }, [filamentPresetId, filamentPresets]);
  const missingPresetTypes = reactExports.useMemo(() => {
    const missing = [];
    if (printerPresets.length === 0) missing.push(t("fileManager.slice.modal.printerPreset"));
    if (processPresets.length === 0) missing.push(t("fileManager.slice.modal.processPreset"));
    if (filamentPresets.length === 0) missing.push(t("fileManager.slice.modal.filamentPreset"));
    return missing;
  }, [filamentPresets.length, printerPresets.length, processPresets.length, t]);
  const sliceMutation = useMutation({
    mutationFn: () => {
      if (printerPresetId === "" || processPresetId === "" || filamentPresetId === "") {
        throw new Error(t("fileManager.slice.toast.selectAllPresets"));
      }
      return api.sliceLibraryFile(file.id, {
        printer_preset_id: printerPresetId,
        process_preset_id: processPresetId,
        filament_preset_id: filamentPresetId,
        output_filename: outputFilename,
        arrange,
        orient
      });
    },
    onSuccess: (result) => {
      onSuccess(result);
    }
  });
  const canSlice = missingPresetTypes.length === 0 && !!outputFilename.trim();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg w-full max-w-xl border border-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-bambu-dark-tertiary flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-5 h-5 text-bambu-green" }),
          t("fileManager.slice.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: file.filename })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-bambu-dark rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-bambu-green/10 border border-bambu-green/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-green font-medium", children: t("fileManager.slice.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-green/80 mt-1", children: t("fileManager.slice.hint") })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-bambu-green" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-300", children: error instanceof Error ? error.message : t("common.error") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("fileManager.slice.modal.printerPreset") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: printerPresetId,
                onChange: (e) => setPrinterPresetId(Number(e.target.value)),
                className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green",
                disabled: printerPresets.length === 0,
                children: printerPresets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: preset.id, children: preset.name }, preset.id))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("fileManager.slice.modal.processPreset") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: processPresetId,
                onChange: (e) => setProcessPresetId(Number(e.target.value)),
                className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green",
                disabled: processPresets.length === 0,
                children: processPresets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: preset.id, children: preset.name }, preset.id))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("fileManager.slice.modal.filamentPreset") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: filamentPresetId,
              onChange: (e) => setFilamentPresetId(Number(e.target.value)),
              className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green",
              disabled: filamentPresets.length === 0,
              children: filamentPresets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: preset.id, children: preset.name }, preset.id))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("fileManager.slice.modal.outputFilename") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: outputFilename,
              onChange: (e) => setOutputFilename(e.target.value),
              className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green",
              placeholder: t("fileManager.slice.modal.outputPlaceholder")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("fileManager.slice.modal.outputHelp") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: orient,
                onChange: (e) => setOrient(e.target.checked),
                className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white", children: t("fileManager.slice.modal.autoOrient") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray", children: t("fileManager.slice.modal.autoOrientHelp") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: arrange,
                onChange: (e) => setArrange(e.target.checked),
                className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white", children: t("fileManager.slice.modal.autoArrange") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-bambu-gray", children: t("fileManager.slice.modal.autoArrangeHelp") })
            ] })
          ] })
        ] }),
        missingPresetTypes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-sm text-amber-300", children: t("fileManager.slice.modal.missingPresets", { types: missingPresetTypes.join(", ") }) }),
        sliceMutation.error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-300", children: sliceMutation.error instanceof Error ? sliceMutation.error.message : t("common.error") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-bambu-dark-tertiary flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, disabled: sliceMutation.isPending, children: t("common.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          onClick: () => sliceMutation.mutate(),
          disabled: !canSlice || isLoading || sliceMutation.isPending,
          children: [
            sliceMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
            t("fileManager.slice.submit")
          ]
        }
      )
    ] })
  ] }) });
}
function getProviderRoute(provider) {
  return provider === "orcaslicer" ? "/orca-slicer" : "/slicer";
}
function OnlineSlicerPage({ provider = "bambu_studio" }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [searchParams] = useSearchParams();
  const [session, setSession] = reactExports.useState(null);
  const [showQuickSlice, setShowQuickSlice] = reactExports.useState(false);
  const providerName = provider === "orcaslicer" ? t("settings.slicerOrcaSlicer") : t("settings.slicerBambuStudio");
  const fileId = Number(searchParams.get("fileId") || "");
  const requestedFolderIdParam = searchParams.get("folderId");
  const requestedFolderId = requestedFolderIdParam ? Number(requestedFolderIdParam) : null;
  const hasValidFileId = Number.isInteger(fileId) && fileId > 0;
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const { data: file } = useQuery({
    queryKey: ["library-file", fileId],
    queryFn: () => api.getLibraryFile(fileId),
    enabled: hasValidFileId
  });
  const configuredLaunchUrl = provider === "orcaslicer" ? (settings?.online_orca_slicer_url || "").trim() : (settings?.online_slicer_url || "").trim();
  const configuredEmbed = provider === "orcaslicer" ? settings?.online_orca_slicer_embed ?? true : settings?.online_slicer_embed ?? true;
  const prepareSessionMutation = useMutation({
    mutationFn: () => api.createLibraryOnlineSlicerSession(fileId, {
      folder_id: requestedFolderId,
      provider
    }),
    onSuccess: (result) => setSession(result)
  });
  const prepareSession = prepareSessionMutation.mutate;
  const prepareSessionStatus = prepareSessionMutation.status;
  const importOutputsMutation = useMutation({
    mutationFn: () => {
      if (!session) {
        throw new Error(t("onlineSlicer.noActiveSession"));
      }
      return api.importLibraryOnlineSlicerSessionOutputs(session.session_id);
    },
    onSuccess: (result) => {
      if (result.imported.length === 0) {
        showToast(t("onlineSlicer.toast.noOutputs"), "warning");
        return;
      }
      showToast(t("onlineSlicer.toast.imported", { count: result.imported.length }), "success");
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      queryClient.invalidateQueries({ queryKey: ["library-stats"] });
      queryClient.invalidateQueries({ queryKey: ["library-file"] });
    }
  });
  reactExports.useEffect(() => {
    if (!hasValidFileId || session || prepareSessionStatus !== "idle") {
      return;
    }
    prepareSession();
  }, [hasValidFileId, prepareSession, prepareSessionStatus, session]);
  const goBack = () => {
    const params = new URLSearchParams();
    const folderId = session?.target_folder_id ?? requestedFolderId ?? file?.folder_id ?? null;
    if (folderId !== null && folderId !== void 0) {
      params.set("folder", String(folderId));
    }
    navigate(`/files${params.toString() ? `?${params.toString()}` : ""}`);
  };
  const copyToClipboard = async (value, successMessage) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast(successMessage, "success");
    } catch {
      showToast(t("onlineSlicer.toast.copyFailed"), "error");
    }
  };
  const sourceFilename = file?.filename || session?.source_filename || "";
  const canQuickSlice = file?.file_type === "stl" || sourceFilename.toLowerCase().endsWith(".stl");
  const activeLaunchUrl = session?.launch_url || resolveOnlineSlicerUrlTemplate(configuredLaunchUrl);
  const activeEmbed = session ? session.embed : configuredEmbed;
  const isUnavailable = hasValidFileId ? prepareSessionMutation.isError : !activeLaunchUrl;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col gap-4 p-4 md:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-5 h-5 text-bambu-green" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: providerName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: sourceFilename ? t("onlineSlicer.descriptionWithFile", { filename: sourceFilename }) : t("onlineSlicer.description") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: goBack, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          t("onlineSlicer.backToFiles")
        ] }),
        canQuickSlice && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => setShowQuickSlice(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
          t("onlineSlicer.quickSlice")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => navigate("/settings?tab=network"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4" }),
          t("onlineSlicer.settings")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 xl:grid-cols-[360px_minmax(0,1fr)] flex-1 min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: session ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("onlineSlicer.workspaceTitle") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("onlineSlicer.workspaceDescription") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-bambu-gray", children: t("onlineSlicer.inputPath") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-bambu-dark-tertiary bg-bambu-dark px-3 py-2 text-xs text-white break-all", children: session.workspace_input_file }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => copyToClipboard(session.workspace_input_file, t("onlineSlicer.toast.inputCopied")),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
                    t("onlineSlicer.copyInputPath")
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-bambu-gray", children: t("onlineSlicer.outputPath") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-bambu-dark-tertiary bg-bambu-dark px-3 py-2 text-xs text-white break-all", children: session.workspace_output_dir }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => copyToClipboard(session.workspace_output_dir, t("onlineSlicer.toast.outputCopied")),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-4 h-4" }),
                    t("onlineSlicer.copyOutputPath")
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-bambu-gray", children: t("onlineSlicer.downloadLink") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-bambu-dark-tertiary bg-bambu-dark px-3 py-2 text-xs text-white break-all", children: session.download_url }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => window.open(session.download_url, "_blank", "noopener,noreferrer"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                    t("onlineSlicer.openDownloadLink")
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("onlineSlicer.instructionsTitle") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-sm text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("onlineSlicer.instructions.step1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("onlineSlicer.instructions.step2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("onlineSlicer.instructions.step3") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                disabled: importOutputsMutation.isPending,
                onClick: () => importOutputsMutation.mutate(),
                children: [
                  importOutputsMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  t("onlineSlicer.importOutputs")
                ]
              }
            )
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("onlineSlicer.manualModeTitle") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-sm text-bambu-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("onlineSlicer.manualModeDescription", { provider: providerName }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("onlineSlicer.manualModeHint") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => navigate("/files"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-4 h-4" }),
            t("onlineSlicer.backToFiles")
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "min-h-[540px] flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: providerName }),
          activeLaunchUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "secondary",
              onClick: () => window.open(activeLaunchUrl, "_blank", "noopener,noreferrer"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" }),
                t("onlineSlicer.openInNewTab")
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex-1 min-h-0", children: [
          prepareSessionMutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center gap-3 text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-10 h-10 text-bambu-green animate-spin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("onlineSlicer.preparing") })
          ] }),
          !prepareSessionMutation.isPending && isUnavailable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center gap-4 text-center text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-12 h-12 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("onlineSlicer.unavailableTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: prepareSessionMutation.error instanceof Error ? prepareSessionMutation.error.message : t("onlineSlicer.unavailableDescription") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => navigate("/settings?tab=network"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4" }),
                t("onlineSlicer.settings")
              ] }),
              canQuickSlice && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowQuickSlice(true), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
                t("onlineSlicer.quickSlice")
              ] })
            ] })
          ] }),
          !prepareSessionMutation.isPending && !isUnavailable && activeLaunchUrl && (activeEmbed ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              src: activeLaunchUrl,
              title: providerName,
              className: "h-full w-full border-0 rounded-lg bg-black",
              sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center gap-4 text-center text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-12 h-12 text-bambu-green" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("onlineSlicer.openExternallyTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: t("onlineSlicer.openExternallyDescription") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => window.open(activeLaunchUrl, "_blank", "noopener,noreferrer"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" }),
              t("onlineSlicer.openInNewTab")
            ] })
          ] }))
        ] })
      ] })
    ] }),
    showQuickSlice && file && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliceStlModal,
      {
        file,
        onClose: () => setShowQuickSlice(false),
        onSuccess: (result) => {
          setShowQuickSlice(false);
          queryClient.invalidateQueries({ queryKey: ["library-files"] });
          queryClient.invalidateQueries({ queryKey: ["library-stats"] });
          showToast(t("fileManager.slice.toast.success", { filename: result.filename }), "success");
          navigate(`${getProviderRoute(provider)}?fileId=${file.id}`);
        }
      }
    )
  ] });
}
export {
  OnlineSlicerPage
};
