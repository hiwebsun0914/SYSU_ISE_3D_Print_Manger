import { u as useTranslation, J as useNavigate, av as useSearchParams, r as reactExports, d as useQuery, j as jsxRuntimeExports, Q as Layers, L as LoaderCircle, B as Button, l as TriangleAlert, f as api, m as getAuthToken } from "./index-CMdmMVx7.js";
import { r as resolveOnlineSlicerUrlTemplate } from "./onlineSlicer-DCE9QPxG.js";
import { A as ArrowLeft } from "./arrow-left-BzxMPwph.js";
import { S as Settings2 } from "./settings-2-7qvQ1FIQ.js";
import { A as ArrowUpRight } from "./arrow-up-right-Day1wTam.js";
let kiriBridgePromise = null;
function loadKiriBridge(scriptUrl) {
  if (window.kiri?.frame) {
    return Promise.resolve();
  }
  if (kiriBridgePromise) {
    return kiriBridgePromise;
  }
  kiriBridgePromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-kiri-bridge="true"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Failed to load Kiri:Moto bridge")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.dataset.kiriBridge = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Kiri:Moto bridge"));
    document.head.appendChild(script);
  });
  return kiriBridgePromise;
}
function getKiriOrigin(url) {
  try {
    return new URL(url).origin;
  } catch {
    return "https://grid.space";
  }
}
function isStlFile(fileType, filename) {
  return (fileType || "").toLowerCase() === "stl" || filename.toLowerCase().endsWith(".stl");
}
function KiriMotoPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const iframeRef = reactExports.useRef(null);
  const pendingModelRef = reactExports.useRef(null);
  const loadedModelKeyRef = reactExports.useRef(null);
  const frameBoundRef = reactExports.useRef(false);
  const pageRef = reactExports.useRef(null);
  const [bridgeReady, setBridgeReady] = reactExports.useState(false);
  const [kiriReady, setKiriReady] = reactExports.useState(false);
  const [statusMessage, setStatusMessage] = reactExports.useState("");
  const [loadError, setLoadError] = reactExports.useState(null);
  const [workspaceHeight, setWorkspaceHeight] = reactExports.useState(null);
  const fileId = Number(searchParams.get("fileId") || "");
  const requestedFolderIdParam = searchParams.get("folderId");
  const requestedFolderId = requestedFolderIdParam ? Number(requestedFolderIdParam) : null;
  const directDownloadUrl = searchParams.get("downloadUrl") || "";
  const directFilename = searchParams.get("filename") || "";
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
  const sourceFilename = file?.filename || directFilename;
  const sourceFileType = file?.file_type || "";
  const autoLoadSupported = isStlFile(sourceFileType, sourceFilename);
  const activeLaunchUrl = resolveOnlineSlicerUrlTemplate((settings?.online_orca_slicer_url || "").trim());
  const activeEmbed = settings?.online_orca_slicer_embed ?? true;
  const kiriOrigin = getKiriOrigin(activeLaunchUrl || "https://grid.space/kiri/");
  const kiriBridgeUrl = `${kiriOrigin}/lib/kiri/run/frame.js`;
  const sourceDownloadUrl = hasValidFileId ? api.getLibraryFileDownloadUrl(fileId) : directDownloadUrl;
  function goBack() {
    const params = new URLSearchParams();
    const folderId = requestedFolderId ?? file?.folder_id ?? null;
    if (folderId !== null && folderId !== void 0) {
      params.set("folder", String(folderId));
    }
    navigate(`/files${params.toString() ? `?${params.toString()}` : ""}`);
  }
  const pushPendingModelIntoKiri = reactExports.useCallback(() => {
    const pendingModel = pendingModelRef.current;
    const frameApi = window.kiri?.frame;
    if (!kiriReady || !pendingModel || !frameApi || loadedModelKeyRef.current === pendingModel.key) {
      return;
    }
    try {
      setStatusMessage(t("kiriMoto.status.pushingModel"));
      setLoadError(null);
      frameApi.setMode("FDM");
      frameApi.clear();
      frameApi.parse(pendingModel.buffer.slice(0), "stl");
      loadedModelKeyRef.current = pendingModel.key;
    } catch (error) {
      const message = error instanceof Error ? error.message : t("kiriMoto.status.modelLoadFailed");
      setLoadError(message);
      setStatusMessage(t("kiriMoto.status.modelLoadFailed"));
    }
  }, [kiriReady, t]);
  reactExports.useEffect(() => {
    if (!activeEmbed || !activeLaunchUrl) {
      return;
    }
    setStatusMessage(t("kiriMoto.status.loadingBridge"));
    loadKiriBridge(kiriBridgeUrl).then(() => {
      setBridgeReady(true);
    }).catch((error) => {
      const message = error instanceof Error ? error.message : t("kiriMoto.status.bridgeFailed");
      setLoadError(message);
      setStatusMessage(t("kiriMoto.status.bridgeFailed"));
    });
  }, [activeEmbed, activeLaunchUrl, kiriBridgeUrl, t]);
  reactExports.useEffect(() => {
    if (!bridgeReady || !iframeRef.current || !activeLaunchUrl || frameBoundRef.current || !window.kiri?.frame) {
      return;
    }
    const frameApi = window.kiri.frame;
    frameApi.setFrame(iframeRef.current, kiriOrigin);
    frameApi.on("init-done", () => {
      setKiriReady(true);
      setStatusMessage(t("kiriMoto.status.workspaceReady"));
    });
    frameApi.on("widget.add", () => {
      setStatusMessage(t("kiriMoto.status.modelLoaded"));
      setLoadError(null);
    });
    frameApi.on("slice.error", () => {
      setLoadError(t("kiriMoto.status.modelLoadFailed"));
    });
    frameBoundRef.current = true;
  }, [activeLaunchUrl, bridgeReady, kiriOrigin, t]);
  reactExports.useEffect(() => {
    if (!autoLoadSupported || !sourceDownloadUrl || !sourceFilename) {
      return;
    }
    let cancelled = false;
    const key = `${sourceFilename}:${sourceDownloadUrl}`;
    setStatusMessage(t("kiriMoto.status.fetchingModel"));
    const headers = {};
    const authToken = getAuthToken();
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }
    fetch(sourceDownloadUrl, { headers }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.arrayBuffer();
    }).then((buffer) => {
      if (cancelled) {
        return;
      }
      pendingModelRef.current = { key, buffer };
      if (kiriReady) {
        pushPendingModelIntoKiri();
      } else {
        setStatusMessage(t("kiriMoto.status.waitingForWorkspace"));
      }
    }).catch((error) => {
      if (cancelled) {
        return;
      }
      const message = error instanceof Error ? error.message : t("kiriMoto.status.modelLoadFailed");
      setLoadError(message);
      setStatusMessage(t("kiriMoto.status.modelLoadFailed"));
    });
    return () => {
      cancelled = true;
    };
  }, [autoLoadSupported, kiriReady, pushPendingModelIntoKiri, sourceDownloadUrl, sourceFilename, t]);
  reactExports.useEffect(() => {
    pushPendingModelIntoKiri();
  }, [pushPendingModelIntoKiri]);
  reactExports.useEffect(() => {
    function updateWorkspaceHeight() {
      if (!pageRef.current) {
        return;
      }
      const nextHeight = Math.max(window.innerHeight - Math.max(pageRef.current.getBoundingClientRect().top, 0), 480);
      setWorkspaceHeight((currentHeight) => currentHeight === nextHeight ? currentHeight : nextHeight);
    }
    updateWorkspaceHeight();
    window.addEventListener("resize", updateWorkspaceHeight);
    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => updateWorkspaceHeight()) : null;
    if (resizeObserver) {
      resizeObserver.observe(document.body);
    }
    return () => {
      window.removeEventListener("resize", updateWorkspaceHeight);
      resizeObserver?.disconnect();
    };
  }, []);
  const unavailable = !activeLaunchUrl;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: pageRef,
      className: "flex flex-col overflow-hidden",
      style: workspaceHeight ? { height: `${workspaceHeight}px` } : { minHeight: "640px" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-bambu-dark-tertiary bg-bambu-dark-secondary/95 px-4 py-3 backdrop-blur md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-5 h-5 text-bambu-green" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: t("settings.slicerOrcaSlicer") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-bambu-gray", children: sourceFilename ? t("kiriMoto.descriptionWithFile", { filename: sourceFilename }) : t("kiriMoto.description") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 xl:items-end", children: [
            statusMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-bambu-gray", children: [
              !loadError && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: `w-4 h-4 ${statusMessage === t("kiriMoto.status.modelLoaded") ? "" : "animate-spin"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: statusMessage })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: goBack, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                t("kiriMoto.backToFiles")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => navigate("/settings?tab=network"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4" }),
                t("kiriMoto.settings")
              ] }),
              activeLaunchUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => window.open(activeLaunchUrl, "_blank", "noopener,noreferrer"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" }),
                t("kiriMoto.openInNewTab")
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-h-0 bg-black", children: [
          unavailable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-4 bg-bambu-dark px-4 text-center text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-12 h-12 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-white", children: t("kiriMoto.unavailableTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: t("kiriMoto.unavailableDescription") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => navigate("/settings?tab=network"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "w-4 h-4" }),
              t("kiriMoto.settings")
            ] })
          ] }),
          !unavailable && loadError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-4 right-4 top-4 z-10 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200 shadow-lg", children: loadError }),
          !unavailable && !activeEmbed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-4 bg-bambu-dark px-4 text-center text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-12 h-12 text-bambu-green" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-white", children: t("kiriMoto.externalModeTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: t("kiriMoto.externalModeDescription") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => window.open(activeLaunchUrl, "_blank", "noopener,noreferrer"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" }),
              t("kiriMoto.openInNewTab")
            ] })
          ] }),
          !unavailable && activeEmbed && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              ref: iframeRef,
              src: activeLaunchUrl,
              title: t("settings.slicerOrcaSlicer"),
              className: "h-full w-full border-0 bg-black",
              sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
            }
          )
        ] })
      ]
    }
  );
}
export {
  KiriMotoPage
};
