import { u as useTranslation, r as reactExports, j as jsxRuntimeExports, X, a6 as Archive, J as Printer, I as Image, L as LoaderCircle, Q as CircleCheckBig, _ as CircleX, B as Button, f as api } from "./index-By7NB6Yd.js";
import { U as Upload } from "./upload-vqTQNziJ.js";
import { F as File } from "./GcodeViewer-CKJccwqx.js";
function FileUploadModal({ folderId, onClose, onUploadComplete, onFileUploaded, autoUpload, validateFile, accept }) {
  const { t } = useTranslation();
  const [files, setFiles] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [isUploading, setIsUploading] = reactExports.useState(false);
  const [preserveZipStructure, setPreserveZipStructure] = reactExports.useState(true);
  const [createFolderFromZip, setCreateFolderFromZip] = reactExports.useState(false);
  const [generateStlThumbnails, setGenerateStlThumbnails] = reactExports.useState(true);
  const [uploadError, setUploadError] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(Array.from(e.dataTransfer.files));
  };
  const handleFileSelect = (e) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
    }
  };
  const updateFileStatus = (file, update) => {
    setFiles((prev) => prev.map((f) => f.file === file ? { ...f, ...update } : f));
  };
  const uploadFiles = async (filesToUpload) => {
    setIsUploading(true);
    for (const uf of filesToUpload) {
      if (uf.status !== "pending") continue;
      updateFileStatus(uf.file, { status: "uploading" });
      try {
        if (uf.isZip) {
          const result = await api.extractZipFile(uf.file, folderId, preserveZipStructure, createFolderFromZip, generateStlThumbnails);
          updateFileStatus(uf.file, {
            status: result.errors.length > 0 && result.extracted === 0 ? "error" : "success",
            extractedCount: result.extracted,
            error: result.errors.length > 0 ? t("fileManager.zipFilesFailed", "{{count}} files failed", { count: result.errors.length }) : void 0
          });
        } else {
          const result = await api.uploadLibraryFile(uf.file, folderId, generateStlThumbnails);
          updateFileStatus(uf.file, { status: "success" });
          const error = onFileUploaded?.(result);
          if (error) {
            setUploadError(error);
            setFiles([]);
            setIsUploading(false);
            return;
          }
        }
      } catch (err) {
        updateFileStatus(uf.file, {
          status: "error",
          error: err instanceof Error ? err.message : t("fileManager.uploadFailed", "Upload failed")
        });
      }
    }
    setIsUploading(false);
    onUploadComplete();
    onClose();
  };
  const addFiles = (newFiles) => {
    setUploadError(null);
    if (validateFile) {
      for (const file of newFiles) {
        const error = validateFile(file);
        if (error) {
          setUploadError(error);
          return;
        }
      }
    }
    const toUpload = newFiles.map((file) => ({
      file,
      status: "pending",
      isZip: file.name.toLowerCase().endsWith(".zip"),
      is3mf: file.name.toLowerCase().endsWith(".3mf")
    }));
    setFiles((prev) => [...prev, ...toUpload]);
    if (autoUpload && newFiles.length > 0) {
      uploadFiles(toUpload);
    }
  };
  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };
  const hasZipFiles = files.some((f) => f.isZip && f.status === "pending");
  const hasStlFiles = files.some((f) => f.file.name.toLowerCase().endsWith(".stl") && f.status === "pending");
  const has3mfFiles = files.some((f) => f.is3mf && f.status === "pending");
  const pendingCount = files.filter((f) => f.status === "pending").length;
  const allDone = files.length > 0 && pendingCount === 0 && !isUploading;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg w-full max-w-lg border border-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-bambu-dark-tertiary flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("fileManager.uploadFiles") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-bambu-dark rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          onDrop: handleDrop,
          onClick: () => fileInputRef.current?.click(),
          className: `border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragging ? "border-bambu-green bg-bambu-green/10" : "border-bambu-dark-tertiary hover:border-bambu-green/50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: `w-10 h-10 mx-auto mb-3 ${isDragging ? "text-bambu-green" : "text-bambu-gray"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: isDragging ? t("fileManager.dropFilesHere") : t("fileManager.dragDropFiles") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("fileManager.orClickToBrowse") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray/70 mt-2", children: t("fileManager.allFileTypesSupported") })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: fileInputRef,
          type: "file",
          multiple: true,
          accept,
          className: "hidden",
          onChange: handleFileSelect
        }
      ),
      hasZipFiles && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-300 font-medium", children: t("fileManager.zipFilesDetected") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-300/70 mt-1", children: t("fileManager.zipExtractOptions") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 mt-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: preserveZipStructure,
                onChange: (e) => setPreserveZipStructure(e.target.checked),
                className: "w-4 h-4 rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: t("fileManager.preserveZipStructure") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 mt-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: createFolderFromZip,
                onChange: (e) => setCreateFolderFromZip(e.target.checked),
                className: "w-4 h-4 rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: t("fileManager.createFolderFromZip") })
          ] })
        ] })
      ] }) }),
      has3mfFiles && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-300 font-medium", children: t("fileManager.threemfDetected") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-purple-300/70 mt-1", children: t("fileManager.threemfExtractionInfo") })
        ] })
      ] }) }),
      (hasStlFiles || hasZipFiles) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-bambu-green/10 border border-bambu-green/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-5 h-5 text-bambu-green mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-green font-medium", children: t("fileManager.stlThumbnailGeneration") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-green/70 mt-1", children: hasZipFiles && !hasStlFiles ? t("fileManager.zipMayContainStl") : t("fileManager.thumbnailsCanBeGenerated") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 mt-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: generateStlThumbnails,
                onChange: (e) => setGenerateStlThumbnails(e.target.checked),
                className: "w-4 h-4 rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: t("fileManager.generateThumbnailsForStl") })
          ] })
        ] })
      ] }) }),
      files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-48 overflow-y-auto space-y-2", children: files.map((uploadFile, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 p-2 bg-bambu-dark rounded-lg",
          children: [
            uploadFile.isZip ? /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(File, { className: "w-4 h-4 text-bambu-gray flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white truncate", children: uploadFile.file.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
                (uploadFile.file.size / 1024 / 1024).toFixed(2),
                " MB",
                uploadFile.isZip && uploadFile.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-blue-400 ml-2", children: [
                  "• ",
                  t("fileManager.willBeExtracted")
                ] }),
                uploadFile.extractedCount !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-400 ml-2", children: [
                  "• ",
                  t("fileManager.filesExtracted", { count: uploadFile.extractedCount })
                ] })
              ] })
            ] }),
            uploadFile.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => removeFile(index),
                className: "p-1 hover:bg-bambu-dark-tertiary rounded",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-bambu-gray" })
              }
            ),
            uploadFile.status === "uploading" && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 text-bambu-green animate-spin" }),
            uploadFile.status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-green-500" }),
            uploadFile.status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: uploadFile.error, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-red-500" }) })
          ]
        },
        index
      )) }),
      uploadError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-red-500/10 border border-red-500/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-300", children: uploadError })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-bambu-dark-tertiary flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("common.cancel") }),
      !allDone && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => uploadFiles(files),
          disabled: pendingCount === 0 || isUploading,
          children: isUploading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
            t("fileManager.uploading")
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4 mr-2" }),
            t("common.upload"),
            " ",
            pendingCount > 0 ? `(${pendingCount})` : ""
          ] })
        }
      )
    ] })
  ] }) });
}
export {
  FileUploadModal as F
};
