import { c as createLucideIcon, u as useTranslation, G as useNavigate, b as useQueryClient, a as useToast, k as useAuth, au as useSearchParams, r as reactExports, d as useQuery, p as parseUTCDate, e as useMutation, j as jsxRuntimeExports, B as Button, L as LoaderCircle, I as Image, T as TriangleAlert, g as formatFileSize, X, f as api, U as User, J as Printer, O as Layers, h as ConfirmModal, t as ChevronRight, a6 as Archive, D as formatDuration } from "./index-By7NB6Yd.js";
import { P as PrintModal } from "./index-B3Y3YfVS.js";
import { u as useIsMobile, M as ModelViewerModal } from "./ModelViewerModal-C7KkhF9N.js";
import { F as FileUploadModal } from "./FileUploadModal-KgvI41iT.js";
import { F as FolderOpen } from "./folder-open-DFzFHQYK.js";
import { L as LayoutGrid } from "./layout-grid-BRwQRxmB.js";
import { L as List } from "./list-DvQRef4l.js";
import { U as Upload } from "./upload-vqTQNziJ.js";
import { F as File, a as FileBox } from "./GcodeViewer-CKJccwqx.js";
import { H as HardDrive } from "./hard-drive-BqrO9meH.js";
import { L as Lock } from "./lock-D2yZyqzw.js";
import { R as RefreshCw } from "./refresh-cw-DSbBo49o.js";
import { S as Search } from "./search-RLowFFFz.js";
import { F as Funnel } from "./funnel-CFDzz5mk.js";
import { S as Square } from "./square-DTe5xTuV.js";
import { S as SquareCheckBig } from "./square-check-big-Bfmxku0O.js";
import { P as Play } from "./play-Cg_XO2GL.js";
import { C as Clock } from "./clock-Ct4GjfBN.js";
import { T as Trash2 } from "./trash-2-ClCdzOpT.js";
import { P as Plus } from "./plus-DFJfJrzz.js";
import { B as Box } from "./box-DMwc6M-V.js";
import { D as Download } from "./download-BIvootwA.js";
import { P as Pencil } from "./pencil-C-P5BunJ.js";
import { L as Link2 } from "./link-2-Cux3y_Sw.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-qlbyUepS.js";
import { U as Unlink } from "./unlink-pfEIdfQ3.js";
import "./colors-lMyZBYSI.js";
import "./amsHelpers-DxzYuS95.js";
import "./currency-xmcJ_vO3.js";
import "./check-B2KZNztd.js";
import "./rotate-ccw-DINMEq3g.js";
import "./palette-DbvAKoIq.js";
import "./wand-sparkles-BvxI5tcI.js";
import "./settings-DKzQs5ej.js";
import "./minimize-2-CNI_eOWW.js";
import "./maximize-2-BQEEmz5s.js";
import "./zoom-out-C4fHhYfX.js";
const __iconNode$5 = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
];
const ArrowDownWideNarrow = createLucideIcon("arrow-down-wide-narrow", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
];
const ArrowUpNarrowWide = createLucideIcon("arrow-up-narrow-wide", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
];
const FolderPlus = createLucideIcon("folder-plus", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
      key: "y8kt7d"
    }
  ],
  ["path", { d: "m8 16 3-3-3-3", key: "rlqrt1" }]
];
const FolderSymlink = createLucideIcon("folder-symlink", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
];
const MoveRight = createLucideIcon("move-right", __iconNode);
function NewFolderModal({ parentId, onClose, onSave, isLoading, t }) {
  const [name, setName] = reactExports.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name: name.trim(), parent_id: parentId });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg w-full max-w-sm border border-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("fileManager.newFolder") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("fileManager.folderName") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: name,
            onChange: (e) => setName(e.target.value),
            className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
            placeholder: t("fileManager.folderNamePlaceholder"),
            autoFocus: true,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, children: t("common.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: !name.trim() || isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : t("common.create") })
      ] })
    ] })
  ] }) });
}
function ExternalFolderModal({ onClose, onSave, isLoading, t }) {
  const [name, setName] = reactExports.useState("");
  const [path, setPath] = reactExports.useState("");
  const [readonly, setReadonly] = reactExports.useState(true);
  const [showHidden, setShowHidden] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: name.trim(),
      external_path: path.trim(),
      readonly,
      show_hidden: showHidden
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg w-full max-w-md border border-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderSymlink, { className: "w-5 h-5 text-bambu-green" }),
        t("fileManager.linkExternalFolder")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("fileManager.linkExternalFolderDescription") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("fileManager.folderName") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: name,
            onChange: (e) => setName(e.target.value),
            className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green",
            placeholder: t("fileManager.externalFolderNamePlaceholder"),
            autoFocus: true,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("fileManager.externalPath") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: path,
            onChange: (e) => setPath(e.target.value),
            className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green font-mono text-sm",
            placeholder: "/mnt/nas/3d-prints",
            required: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-1", children: t("fileManager.externalPathHelp") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: readonly,
              onChange: (e) => setReadonly(e.target.checked),
              className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: t("fileManager.readOnly") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray", children: [
            "(",
            t("fileManager.readOnlyHelp"),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: showHidden,
              onChange: (e) => setShowHidden(e.target.checked),
              className: "rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white", children: t("fileManager.showHiddenFiles") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, children: t("common.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: !name.trim() || !path.trim() || isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : t("fileManager.linkFolder") })
      ] })
    ] })
  ] }) });
}
function RenameModal({ type, currentName, onClose, onSave, isLoading, t }) {
  const fileExtension = type === "file" ? currentName.match(/(\.gcode\.3mf|\.3mf|\.gcode)$/i)?.[1] ?? "" : "";
  const baseName = type === "file" && fileExtension ? currentName.slice(0, -fileExtension.length) : currentName;
  const [name, setName] = reactExports.useState(baseName);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = type === "file" ? name.trim() + fileExtension : name.trim();
    if (name.trim() && fullName !== currentName) {
      onSave(fullName);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg w-full max-w-sm border border-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: type === "file" ? t("fileManager.renameFile") : t("fileManager.renameFolder") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-1", children: t("common.name") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-bambu-dark border border-bambu-dark-tertiary rounded focus-within:border-bambu-green", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "flex-1 bg-transparent px-3 py-2 text-white placeholder-bambu-gray focus:outline-none min-w-0",
              autoFocus: true,
              required: true
            }
          ),
          fileExtension && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pr-3 text-bambu-gray text-sm select-none whitespace-nowrap", children: fileExtension })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, children: t("common.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: !name.trim() || name.trim() === baseName || isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : t("common.rename") })
      ] })
    ] })
  ] }) });
}
function MoveFilesModal({ folders, selectedFiles, currentFolderId, onClose, onMove, isLoading, t }) {
  const [targetFolder, setTargetFolder] = reactExports.useState(null);
  const flattenFolders = (items, depth = 0) => {
    const result = [];
    for (const item of items) {
      result.push({ id: item.id, name: item.name, depth });
      if (item.children.length > 0) {
        result.push(...flattenFolders(item.children, depth + 1));
      }
    }
    return result;
  };
  const flatFolders = [{ id: null, name: t("fileManager.rootNoFolder"), depth: 0 }, ...flattenFolders(folders)];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg w-full max-w-sm border border-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-bambu-dark-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("fileManager.moveFiles", { count: selectedFiles.length }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 overflow-y-auto space-y-1", children: flatFolders.map((folder) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setTargetFolder(folder.id),
          disabled: folder.id === currentFolderId,
          className: `w-full text-left px-3 py-2 rounded transition-colors flex items-center gap-2 ${targetFolder === folder.id ? "bg-bambu-green/20 text-bambu-green" : folder.id === currentFolderId ? "opacity-50 cursor-not-allowed text-bambu-gray" : "hover:bg-bambu-dark text-white"}`,
          style: { paddingLeft: `${12 + folder.depth * 16}px` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-4 h-4" }),
            folder.name,
            folder.id === currentFolderId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray ml-auto", children: [
              "(",
              t("fileManager.current"),
              ")"
            ] })
          ]
        },
        folder.id ?? "root"
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: onClose, children: t("common.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onMove(targetFolder), disabled: isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : t("common.move") })
      ] })
    ] })
  ] }) });
}
function LinkFolderModal({ folder, onClose, onLink, isLoading, t }) {
  const [linkType, setLinkType] = reactExports.useState("project");
  const [selectedId, setSelectedId] = reactExports.useState(
    folder.project_id || folder.archive_id || null
  );
  reactExports.useState(() => {
    if (folder.archive_id) setLinkType("archive");
  });
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => api.getProjects()
  });
  const { data: archives } = useQuery({
    queryKey: ["archives-for-link"],
    queryFn: () => api.getArchives(void 0, void 0, 100)
  });
  const handleSave = () => {
    if (linkType === "project") {
      onLink({
        project_id: selectedId,
        archive_id: 0
        // Unlink archive
      });
    } else {
      onLink({
        project_id: 0,
        // Unlink project
        archive_id: selectedId
      });
    }
  };
  const handleUnlink = () => {
    onLink({
      project_id: 0,
      archive_id: 0
    });
  };
  const isLinked = folder.project_id || folder.archive_id;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg w-full max-w-md border border-bambu-dark-tertiary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-bambu-dark-tertiary flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-5 h-5 text-bambu-green" }),
        t("fileManager.linkFolder")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:bg-bambu-dark rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-bambu-gray" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("fileManager.linkFolderDescription", { name: folder.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setLinkType("project");
              setSelectedId(null);
            },
            className: `flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors ${linkType === "project" ? "border-bambu-green bg-bambu-green/10 text-bambu-green" : "border-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4" }),
              t("fileManager.project")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setLinkType("archive");
              setSelectedId(null);
            },
            className: `flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors ${linkType === "archive" ? "border-bambu-green bg-bambu-green/10 text-bambu-green" : "border-bambu-dark-tertiary text-bambu-gray hover:text-white"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-4 h-4" }),
              t("fileManager.archive")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 overflow-y-auto space-y-1 bg-bambu-dark rounded-lg p-2", children: linkType === "project" ? projects && projects.length > 0 ? projects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSelectedId(project.id),
          className: `w-full text-left px-3 py-2 rounded transition-colors flex items-center gap-2 ${selectedId === project.id ? "bg-bambu-green/20 text-bambu-green" : "hover:bg-bambu-dark-tertiary text-white"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-3 h-3 rounded-full flex-shrink-0",
                style: { backgroundColor: project.color || "#00ae42" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: project.name })
          ]
        },
        project.id
      )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray text-center py-4", children: t("fileManager.noProjectsFound") }) : archives && archives.length > 0 ? archives.map((archive) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSelectedId(archive.id),
          className: `w-full text-left px-3 py-2 rounded transition-colors flex items-center gap-2 ${selectedId === archive.id ? "bg-bambu-green/20 text-bambu-green" : "hover:bg-bambu-dark-tertiary text-white"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileBox, { className: "w-4 h-4 text-bambu-gray flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: archive.print_name || archive.filename })
          ]
        },
        archive.id
      )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray text-center py-4", children: t("fileManager.noArchivesFound") }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-bambu-dark-tertiary flex justify-between", children: [
      isLinked && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "danger", onClick: handleUnlink, disabled: isLoading, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Unlink, { className: "w-4 h-4 mr-2" }),
        t("fileManager.unlink")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2 ${!isLinked ? "ml-auto" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: onClose, children: t("common.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSave, disabled: !selectedId || isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : t("fileManager.link") })
      ] })
    ] })
  ] }) });
}
function FolderTreeItem({ folder, selectedFolderId, onSelect, onDelete, onLink, onRename, depth = 0, wrapNames = false, hasPermission, t }) {
  const [expanded, setExpanded] = reactExports.useState(true);
  const [showActions, setShowActions] = reactExports.useState(false);
  const hasChildren = folder.children.length > 0;
  const isLinked = folder.project_id || folder.archive_id;
  const isExternal = folder.is_external;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `group flex items-center gap-1 px-2 py-1.5 rounded cursor-pointer transition-colors ${selectedFolderId === folder.id ? "bg-bambu-green/20 text-bambu-green" : "hover:bg-bambu-dark text-white"}`,
        style: { paddingLeft: `${8 + depth * 12}px` },
        onClick: () => onSelect(folder.id),
        children: [
          hasChildren ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              },
              className: "p-0.5 hover:bg-bambu-dark-tertiary rounded",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `w-3.5 h-3.5 transition-transform ${expanded ? "rotate-90" : ""}` })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4.5" }),
          isExternal ? /* @__PURE__ */ jsxRuntimeExports.jsx(FolderSymlink, { className: "w-4 h-4 text-purple-400 flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-4 h-4 text-bambu-green flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm flex-1 min-w-0 ${wrapNames ? "break-all" : "truncate"}`, title: folder.name, children: folder.name }),
          isLinked && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                onLink(folder);
              },
              className: "flex-shrink-0 flex items-center gap-1 text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors",
              title: `${folder.project_name ? `Project: ${folder.project_name}` : `Archive: ${folder.archive_name}`} (click to change)`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-3 h-3" }),
                folder.project_name ? /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-3 h-3" })
              ]
            }
          ),
          isExternal && folder.external_readonly && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: t("fileManager.readOnly"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 text-amber-400 flex-shrink-0" }) }),
          folder.file_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 text-xs text-bambu-gray", children: folder.file_count }),
          !isLinked && !isExternal && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                onLink(folder);
              },
              className: "flex-shrink-0 p-1 rounded hover:bg-bambu-dark-tertiary",
              title: t("fileManager.linkToProjectOrArchive"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-3.5 h-3.5 text-bambu-gray hover:text-bambu-green" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-shrink-0 flex items-center gap-0.5 transition-opacity ${wrapNames ? "" : "opacity-0 group-hover:opacity-100"}`, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setShowActions(!showActions),
                className: "p-1 rounded hover:bg-bambu-dark-tertiary",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-3.5 h-3.5 text-bambu-gray" })
              }
            ),
            showActions && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setShowActions(false) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-full mt-1 z-20 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl py-1 min-w-[120px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${hasPermission("library:update_all") ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                    onClick: () => {
                      if (hasPermission("library:update_all")) {
                        onRename(folder);
                        setShowActions(false);
                      }
                    },
                    disabled: !hasPermission("library:update_all"),
                    title: !hasPermission("library:update_all") ? t("fileManager.noPermissionRenameFolder") : void 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" }),
                      t("common.rename")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${hasPermission("library:update_all") ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                    onClick: () => {
                      if (hasPermission("library:update_all")) {
                        onLink(folder);
                        setShowActions(false);
                      }
                    },
                    disabled: !hasPermission("library:update_all"),
                    title: !hasPermission("library:update_all") ? t("fileManager.noPermissionLinkFolder") : void 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-3.5 h-3.5" }),
                      isLinked ? t("fileManager.changeLink") : t("fileManager.linkTo")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${hasPermission("library:delete_all") ? "text-red-400 hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                    onClick: () => {
                      if (hasPermission("library:delete_all")) {
                        onDelete(folder.id);
                        setShowActions(false);
                      }
                    },
                    disabled: !hasPermission("library:delete_all"),
                    title: !hasPermission("library:delete_all") ? t("fileManager.noPermissionDeleteFolder") : void 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                      t("common.delete")
                    ]
                  }
                )
              ] })
            ] })
          ] }) })
        ]
      }
    ),
    hasChildren && expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: folder.children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FolderTreeItem,
      {
        folder: child,
        selectedFolderId,
        onSelect,
        onDelete,
        onLink,
        onRename,
        depth: depth + 1,
        wrapNames,
        hasPermission,
        t
      },
      child.id
    )) })
  ] });
}
function isSlicedFilename(filename) {
  const lower = filename.toLowerCase();
  return lower.endsWith(".gcode") || lower.includes(".gcode.");
}
function isThreemfFileType(fileType) {
  const lower = fileType.toLowerCase();
  return lower === "3mf" || lower === "gcode.3mf";
}
function isPreviewable3dFileType(fileType) {
  const lower = fileType.toLowerCase();
  return isThreemfFileType(fileType) || lower === "gcode" || lower === "stl";
}
function FileCard({ file, isSelected, isMobile, onSelect, onDelete, onDownload, onAddToQueue, onPrint, onSlice, onPreview3d, onRename, onGenerateThumbnail, thumbnailVersion, hasPermission, canModify, authEnabled, t }) {
  const [showActions, setShowActions] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `group relative bg-bambu-dark-secondary rounded-lg border transition-all cursor-pointer overflow-hidden ${isSelected ? "border-bambu-green ring-1 ring-bambu-green" : "border-bambu-dark-tertiary hover:border-bambu-green/50"}`,
      onClick: () => onSelect(file.id),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square bg-bambu-dark flex items-center justify-center overflow-hidden", children: [
          file.thumbnail_path || isThreemfFileType(file.file_type) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: `${api.getLibraryFileThumbnailUrl(file.id, file.thumbnail_path)}${thumbnailVersion ? `?v=${thumbnailVersion}` : ""}`,
              alt: file.filename,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileBox, { className: "w-12 h-12 text-bambu-gray/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-2 right-2 text-xs px-1.5 py-0.5 rounded font-medium ${isThreemfFileType(file.file_type) ? "bg-bambu-green/90 text-white" : file.file_type === "gcode" ? "bg-blue-500/90 text-white" : file.file_type === "stl" ? "bg-purple-500/90 text-white" : "bg-bambu-gray/90 text-white"}`, children: file.file_type.toUpperCase() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white truncate", title: file.print_name || file.filename, children: file.print_name || file.filename }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1 text-xs text-bambu-gray", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatFileSize(file.file_size) }),
            file.print_time_seconds && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              formatDuration(file.print_time_seconds)
            ] })
          ] }),
          file.sliced_for_model && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-bambu-gray flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
            file.sliced_for_model
          ] }),
          file.print_count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-bambu-green", children: t("fileManager.printedCount", { count: file.print_count }) }),
          authEnabled && file.created_by_username && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-bambu-gray flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
            file.created_by_username
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute bottom-2 right-2 transition-opacity ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`, onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setShowActions(!showActions),
              className: "p-1.5 rounded bg-bambu-dark-secondary/90 hover:bg-bambu-dark-tertiary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "w-4 h-4 text-bambu-gray" })
            }
          ),
          showActions && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setShowActions(false) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 bottom-8 z-20 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl py-1 min-w-[140px]", children: [
              onPrint && isSlicedFilename(file.filename) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${hasPermission("printers:control") ? "text-bambu-green hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                  onClick: () => {
                    if (hasPermission("printers:control")) {
                      onPrint(file);
                      setShowActions(false);
                    }
                  },
                  disabled: !hasPermission("printers:control"),
                  title: !hasPermission("printers:control") ? t("fileManager.noPermissionPrint") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5" }),
                    t("common.print")
                  ]
                }
              ),
              onAddToQueue && isSlicedFilename(file.filename) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${hasPermission("queue:create") ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                  onClick: () => {
                    if (hasPermission("queue:create")) {
                      onAddToQueue(file.id);
                      setShowActions(false);
                    }
                  },
                  disabled: !hasPermission("queue:create"),
                  title: !hasPermission("queue:create") ? t("fileManager.noPermissionAddToQueue") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                    t("fileManager.schedulePrint")
                  ]
                }
              ),
              onSlice && file.file_type === "stl" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${hasPermission("library:upload") ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                  onClick: () => {
                    if (hasPermission("library:upload")) {
                      onSlice(file);
                      setShowActions(false);
                    }
                  },
                  disabled: !hasPermission("library:upload"),
                  title: !hasPermission("library:upload") ? t("fileManager.noPermissionUpload") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5" }),
                    t("fileManager.slice.action")
                  ]
                }
              ),
              onPreview3d && isPreviewable3dFileType(file.file_type) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${hasPermission("library:read") ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                  onClick: () => {
                    if (hasPermission("library:read")) {
                      onPreview3d(file);
                      setShowActions(false);
                    }
                  },
                  disabled: !hasPermission("library:read"),
                  title: !hasPermission("library:read") ? "You do not have permission to preview files" : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-3.5 h-3.5" }),
                    "3D Preview"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${hasPermission("library:read") ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                  onClick: () => {
                    if (hasPermission("library:read")) {
                      onDownload(file.id);
                      setShowActions(false);
                    }
                  },
                  disabled: !hasPermission("library:read"),
                  title: !hasPermission("library:read") ? t("fileManager.noPermissionDownload") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                    t("common.download")
                  ]
                }
              ),
              onRename && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${canModify("library", "update", file.created_by_id) ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                  onClick: () => {
                    if (canModify("library", "update", file.created_by_id)) {
                      onRename(file);
                      setShowActions(false);
                    }
                  },
                  disabled: !canModify("library", "update", file.created_by_id),
                  title: !canModify("library", "update", file.created_by_id) ? t("fileManager.noPermissionRenameFile") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" }),
                    t("common.rename")
                  ]
                }
              ),
              onGenerateThumbnail && file.file_type === "stl" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${canModify("library", "update", file.created_by_id) ? "text-white hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                  onClick: () => {
                    if (canModify("library", "update", file.created_by_id)) {
                      onGenerateThumbnail(file);
                      setShowActions(false);
                    }
                  },
                  disabled: !canModify("library", "update", file.created_by_id),
                  title: !canModify("library", "update", file.created_by_id) ? t("fileManager.noPermissionGenerateThumbnail") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-3.5 h-3.5" }),
                    t("fileManager.generateThumbnail")
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `w-full px-3 py-1.5 text-left text-sm flex items-center gap-2 ${canModify("library", "delete", file.created_by_id) ? "text-red-400 hover:bg-bambu-dark" : "text-bambu-gray cursor-not-allowed"}`,
                  onClick: () => {
                    if (canModify("library", "delete", file.created_by_id)) {
                      onDelete(file.id);
                      setShowActions(false);
                    }
                  },
                  disabled: !canModify("library", "delete", file.created_by_id),
                  title: !canModify("library", "delete", file.created_by_id) ? t("fileManager.noPermissionDeleteFile") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                    t("common.delete")
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-2 left-2 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${isSelected ? "bg-bambu-green border-bambu-green" : `border-white/30 bg-black/30 ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-white rounded-sm" }) })
      ]
    }
  );
}
function FileManagerPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission, hasAnyPermission, canModify, authEnabled } = useAuth();
  const [searchParams] = useSearchParams();
  const folderIdFromUrl = searchParams.get("folder");
  const initialFolderId = folderIdFromUrl ? parseInt(folderIdFromUrl, 10) : null;
  const [selectedFolderId, setSelectedFolderId] = reactExports.useState(initialFolderId);
  const [selectedFiles, setSelectedFiles] = reactExports.useState([]);
  const [showNewFolderModal, setShowNewFolderModal] = reactExports.useState(false);
  const [showExternalFolderModal, setShowExternalFolderModal] = reactExports.useState(false);
  const [showMoveModal, setShowMoveModal] = reactExports.useState(false);
  const [showUploadModal, setShowUploadModal] = reactExports.useState(false);
  const [linkFolder, setLinkFolder] = reactExports.useState(null);
  const [deleteConfirm, setDeleteConfirm] = reactExports.useState(null);
  const [printFile, setPrintFile] = reactExports.useState(null);
  const [printMultiFile, setPrintMultiFile] = reactExports.useState(null);
  const [scheduleFile, setScheduleFile] = reactExports.useState(null);
  const [renameItem, setRenameItem] = reactExports.useState(null);
  const [thumbnailVersions, setThumbnailVersions] = reactExports.useState({});
  const [viewerFile, setViewerFile] = reactExports.useState(null);
  const [viewMode, setViewMode] = reactExports.useState(() => {
    return localStorage.getItem("library-view-mode") || "grid";
  });
  const [wrapFolderNames, setWrapFolderNames] = reactExports.useState(() => {
    return localStorage.getItem("library-wrap-folders") === "true";
  });
  const [sidebarWidth, setSidebarWidth] = reactExports.useState(() => {
    const saved = localStorage.getItem("library-sidebar-width");
    return saved ? parseInt(saved, 10) : 256;
  });
  const [isResizing, setIsResizing] = reactExports.useState(false);
  const sidebarRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!isResizing) return;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "col-resize";
    const handleMouseMove = (e) => {
      if (!sidebarRef.current) return;
      const containerRect = sidebarRef.current.parentElement?.getBoundingClientRect();
      if (!containerRect) return;
      const newWidth = e.clientX - containerRect.left;
      const clampedWidth = Math.min(500, Math.max(200, newWidth));
      setSidebarWidth(clampedWidth);
    };
    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      localStorage.setItem("library-sidebar-width", String(sidebarWidth));
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, [isResizing, sidebarWidth]);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filterType, setFilterType] = reactExports.useState("all");
  const [filterUsername, setFilterUsername] = reactExports.useState("");
  const [sortField, setSortField] = reactExports.useState(() => {
    const saved = localStorage.getItem("library-sort-field");
    return saved || "name";
  });
  const [sortDirection, setSortDirection] = reactExports.useState(() => {
    const saved = localStorage.getItem("library-sort-direction");
    return saved || "asc";
  });
  const isMobile = useIsMobile();
  reactExports.useEffect(() => {
    const folderParam = searchParams.get("folder");
    if (folderParam) {
      const newFolderId = parseInt(folderParam, 10);
      setSelectedFolderId(newFolderId);
    }
  }, [searchParams]);
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: () => api.getSettings()
  });
  const { data: folders, isLoading: foldersLoading } = useQuery({
    queryKey: ["library-folders"],
    queryFn: () => api.getLibraryFolders()
  });
  const { data: files, isLoading: filesLoading } = useQuery({
    queryKey: ["library-files", selectedFolderId],
    queryFn: () => api.getLibraryFiles(selectedFolderId, selectedFolderId === null)
  });
  const { data: stats } = useQuery({
    queryKey: ["library-stats"],
    queryFn: () => api.getLibraryStats()
  });
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.getUsers()
  });
  const fileTypes = reactExports.useMemo(() => {
    if (!files) return [];
    const types = new Set(files.map((f) => f.file_type));
    return Array.from(types).sort();
  }, [files]);
  const filteredAndSortedFiles = reactExports.useMemo(() => {
    if (!files) return [];
    let result = [...files];
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (f) => f.filename.toLowerCase().includes(query) || f.print_name && f.print_name.toLowerCase().includes(query)
      );
    }
    if (filterType !== "all") {
      result = result.filter((f) => f.file_type === filterType);
    }
    if (filterUsername.trim()) {
      const query = filterUsername.toLowerCase();
      result = result.filter(
        (f) => f.created_by_username && f.created_by_username.toLowerCase().includes(query)
      );
    }
    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case "name":
          comparison = (a.print_name || a.filename).localeCompare(b.print_name || b.filename);
          break;
        case "date":
          comparison = (parseUTCDate(a.created_at)?.getTime() ?? 0) - (parseUTCDate(b.created_at)?.getTime() ?? 0);
          break;
        case "size":
          comparison = a.file_size - b.file_size;
          break;
        case "type":
          comparison = a.file_type.localeCompare(b.file_type);
          break;
        case "prints":
          comparison = a.print_count - b.print_count;
          break;
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });
    return result;
  }, [files, searchQuery, filterType, filterUsername, sortField, sortDirection]);
  const isDiskSpaceLow = reactExports.useMemo(() => {
    if (!stats || !settings) return false;
    const thresholdBytes = (settings.library_disk_warning_gb || 5) * 1024 * 1024 * 1024;
    return stats.disk_free_bytes < thresholdBytes;
  }, [stats, settings]);
  const createFolderMutation = useMutation({
    mutationFn: (data) => api.createLibraryFolder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      setShowNewFolderModal(false);
      showToast(t("fileManager.toast.folderCreated"), "success");
    },
    onError: (error) => showToast(error.message, "error")
  });
  const createExternalFolderMutation = useMutation({
    mutationFn: async (data) => {
      const folder = await api.createExternalFolder(data);
      await api.scanExternalFolder(folder.id);
      return folder;
    },
    onSuccess: (folder) => {
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      queryClient.invalidateQueries({ queryKey: ["library-stats"] });
      setShowExternalFolderModal(false);
      setSelectedFolderId(folder.id);
      showToast(t("fileManager.toast.externalFolderLinked"), "success");
    },
    onError: (error) => showToast(error.message, "error")
  });
  const scanExternalFolderMutation = useMutation({
    mutationFn: (folderId) => api.scanExternalFolder(folderId),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      queryClient.invalidateQueries({ queryKey: ["library-stats"] });
      showToast(t("fileManager.toast.folderScanned", { added: result.added, removed: result.removed }), "success");
    },
    onError: (error) => showToast(error.message, "error")
  });
  const deleteFolderMutation = useMutation({
    mutationFn: (id) => api.deleteLibraryFolder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      queryClient.invalidateQueries({ queryKey: ["library-stats"] });
      if (selectedFolderId === deleteConfirm?.id) {
        setSelectedFolderId(null);
      }
      setDeleteConfirm(null);
      showToast(t("fileManager.toast.folderDeleted"), "success");
    },
    onError: (error) => {
      setDeleteConfirm(null);
      showToast(error.message, "error");
    }
  });
  const deleteFileMutation = useMutation({
    mutationFn: (id) => api.deleteLibraryFile(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      queryClient.invalidateQueries({ queryKey: ["library-stats"] });
      setSelectedFiles((prev) => prev.filter((id) => id !== deleteConfirm?.id));
      setDeleteConfirm(null);
      showToast(t("fileManager.toast.fileDeleted"), "success");
    },
    onError: (error) => {
      setDeleteConfirm(null);
      showToast(error.message, "error");
    }
  });
  const bulkDeleteMutation = useMutation({
    mutationFn: (fileIds) => api.bulkDeleteLibrary(fileIds, []),
    onSuccess: (_, fileIds) => {
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      queryClient.invalidateQueries({ queryKey: ["library-stats"] });
      showToast(t("fileManager.toast.filesDeleted", { count: fileIds.length }), "success");
      setSelectedFiles([]);
      setDeleteConfirm(null);
    },
    onError: (error) => {
      setDeleteConfirm(null);
      showToast(error.message, "error");
    }
  });
  const moveFilesMutation = useMutation({
    mutationFn: ({ fileIds, folderId }) => api.moveLibraryFiles(fileIds, folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      setSelectedFiles([]);
      setShowMoveModal(false);
      showToast(t("fileManager.toast.filesMoved"), "success");
    },
    onError: (error) => showToast(error.message, "error")
  });
  const updateFolderMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateLibraryFolder(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      queryClient.invalidateQueries({ queryKey: ["project-folders"] });
      queryClient.invalidateQueries({ queryKey: ["archive-folders"] });
      setLinkFolder(null);
      const isUnlink = variables.data.project_id === 0 && variables.data.archive_id === 0;
      showToast(isUnlink ? t("fileManager.toast.folderUnlinked") : t("fileManager.toast.folderLinked"), "success");
    },
    onError: (error) => showToast(error.message, "error")
  });
  const renameFileMutation = useMutation({
    mutationFn: ({ id, filename }) => api.updateLibraryFile(id, { filename }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      setRenameItem(null);
      showToast(t("fileManager.toast.fileRenamed"), "success");
    },
    onError: (error) => {
      setRenameItem(null);
      showToast(error.message, "error");
    }
  });
  const renameFolderMutation = useMutation({
    mutationFn: ({ id, name }) => api.updateLibraryFolder(id, { name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["library-folders"] });
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      setRenameItem(null);
      showToast(t("fileManager.toast.folderRenamed"), "success");
    },
    onError: (error) => {
      setRenameItem(null);
      showToast(error.message, "error");
    }
  });
  const batchThumbnailMutation = useMutation({
    mutationFn: () => api.batchGenerateStlThumbnails({ all_missing: true }),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      if (result.succeeded > 0) {
        const now = Date.now();
        const newVersions = {};
        result.results.forEach((r) => {
          if (r.success) {
            newVersions[r.file_id] = now;
          }
        });
        setThumbnailVersions((prev) => ({ ...prev, ...newVersions }));
      }
      if (result.succeeded > 0 && result.failed === 0) {
        showToast(t("fileManager.toast.thumbnailsGenerated", { count: result.succeeded }), "success");
      } else if (result.succeeded > 0 && result.failed > 0) {
        showToast(t("fileManager.toast.thumbnailsGeneratedPartial", { succeeded: result.succeeded, failed: result.failed }), "success");
      } else if (result.processed === 0) {
        showToast(t("fileManager.toast.noStlMissingThumbnails"), "info");
      } else {
        showToast(t("fileManager.toast.failedToGenerateThumbnails", { error: result.results[0]?.error || "Unknown error" }), "error");
      }
    },
    onError: (error) => showToast(error.message, "error")
  });
  const singleThumbnailMutation = useMutation({
    mutationFn: (fileId) => api.batchGenerateStlThumbnails({ file_ids: [fileId] }),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["library-files"] });
      if (result.succeeded > 0) {
        const fileId = result.results[0]?.file_id;
        if (fileId) {
          setThumbnailVersions((prev) => ({ ...prev, [fileId]: Date.now() }));
        }
        showToast(t("fileManager.toast.thumbnailGenerated"), "success");
      } else {
        showToast(t("fileManager.toast.failedToGenerateThumbnail", { error: result.results[0]?.error || "Unknown error" }), "error");
      }
    },
    onError: (error) => showToast(error.message, "error")
  });
  const isSlicedFile = reactExports.useCallback((filename) => {
    const lower = filename.toLowerCase();
    return lower.endsWith(".gcode") || lower.includes(".gcode.");
  }, []);
  const selectedSlicedFiles = reactExports.useMemo(() => {
    if (!files) return [];
    return files.filter((f) => selectedFiles.includes(f.id) && isSlicedFile(f.filename));
  }, [files, selectedFiles, isSlicedFile]);
  const handleFileSelect = reactExports.useCallback((id) => {
    setSelectedFiles((prev) => {
      return prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
    });
  }, []);
  const handleSelectAll = reactExports.useCallback(() => {
    if (filteredAndSortedFiles.length > 0) {
      setSelectedFiles(filteredAndSortedFiles.map((f) => f.id));
    }
  }, [filteredAndSortedFiles]);
  const handleDeselectAll = reactExports.useCallback(() => {
    setSelectedFiles([]);
  }, []);
  const handleUploadComplete = () => {
    queryClient.invalidateQueries({ queryKey: ["library-files"] });
    queryClient.invalidateQueries({ queryKey: ["library-folders"] });
    queryClient.invalidateQueries({ queryKey: ["library-stats"] });
  };
  const handleDownload = (id) => {
    api.downloadLibraryFile(id).catch((err) => {
      console.error("Library file download failed:", err);
    });
  };
  const handleOpenOnlineSlicer = (file) => {
    const params = new URLSearchParams({ fileId: String(file.id) });
    if (selectedFolderId !== null) {
      params.set("folderId", String(selectedFolderId));
    }
    navigate(`/kiri-moto?${params.toString()}`);
  };
  const handleDeleteConfirm = () => {
    if (!deleteConfirm) return;
    if (deleteConfirm.type === "file") {
      deleteFileMutation.mutate(deleteConfirm.id);
    } else if (deleteConfirm.type === "folder") {
      deleteFolderMutation.mutate(deleteConfirm.id);
    } else if (deleteConfirm.type === "bulk") {
      bulkDeleteMutation.mutate(selectedFiles);
    }
  };
  const isDeleting = deleteFolderMutation.isPending || deleteFileMutation.isPending || bulkDeleteMutation.isPending;
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    localStorage.setItem("library-view-mode", mode);
  };
  const isLoading = foldersLoading || filesLoading;
  const selectedFolder = reactExports.useMemo(() => {
    if (!selectedFolderId || !folders) return null;
    const findFolder = (items) => {
      for (const item of items) {
        if (item.id === selectedFolderId) return item;
        const found = findFolder(item.children);
        if (found) return found;
      }
      return null;
    };
    return findFolder(folders);
  }, [selectedFolderId, folders]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8 min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-onboarding": "files-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-bambu-green/10 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-6 h-6 text-bambu-green" }) }),
          t("fileManager.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-2 ml-14", children: t("fileManager.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-bambu-dark rounded-lg p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleViewModeChange("grid"),
              className: `p-1.5 rounded transition-colors ${viewMode === "grid" ? "bg-bambu-dark-secondary text-white" : "text-bambu-gray hover:text-white"}`,
              title: t("fileManager.gridView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleViewModeChange("list"),
              className: `p-1.5 rounded transition-colors ${viewMode === "list" ? "bg-bambu-dark-secondary text-white" : "text-bambu-gray hover:text-white"}`,
              title: t("fileManager.listView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => batchThumbnailMutation.mutate(),
            disabled: batchThumbnailMutation.isPending || !hasAnyPermission("library:update_own", "library:update_all"),
            title: !hasAnyPermission("library:update_own", "library:update_all") ? t("fileManager.noPermissionGenerateThumbnail") : t("fileManager.generateThumbnailsForMissing"),
            children: [
              batchThumbnailMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4 mr-2" }),
              t("fileManager.generateThumbnails")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => setShowExternalFolderModal(true),
            disabled: !hasPermission("library:upload"),
            title: !hasPermission("library:upload") ? t("fileManager.noPermissionCreateFolder") : t("fileManager.linkExternalFolder"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderSymlink, { className: "w-4 h-4 mr-2" }),
              t("fileManager.linkExternal")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => setShowNewFolderModal(true),
            disabled: !hasPermission("library:upload"),
            title: !hasPermission("library:upload") ? t("fileManager.noPermissionCreateFolder") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "w-4 h-4 mr-2" }),
              t("fileManager.newFolder")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-onboarding": "files-upload",
            onClick: () => setShowUploadModal(true),
            disabled: !hasPermission("library:upload"),
            title: !hasPermission("library:upload") ? t("fileManager.noPermissionUpload") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4 mr-2" }),
              t("common.upload")
            ]
          }
        )
      ] })
    ] }),
    isDiskSpaceLow && stats && settings && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-amber-500 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-500 font-medium", children: t("fileManager.lowDiskSpaceWarning") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-500/80", children: t("fileManager.lowDiskSpaceDetails", { free: formatFileSize(stats.disk_free_bytes), total: formatFileSize(stats.disk_total_bytes), threshold: settings.library_disk_warning_gb }) })
      ] })
    ] }),
    stats && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 sm:gap-6 mb-6 p-3 bg-bambu-dark-secondary rounded-lg border border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(File, { className: "w-4 h-4 text-bambu-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
          t("fileManager.files"),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: stats.total_files })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
          t("fileManager.folders"),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: stats.total_folders })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, { className: "w-4 h-4 text-amber-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
          t("fileManager.size"),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: formatFileSize(stats.total_size_bytes) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm sm:ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray", children: [
          t("fileManager.free"),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-medium ${isDiskSpaceLow ? "text-amber-500" : "text-white"}`, children: formatFileSize(stats.disk_free_bytes) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: selectedFolderId ?? "",
          onChange: (e) => setSelectedFolderId(e.target.value ? parseInt(e.target.value, 10) : null),
          className: "w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-bambu-green",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "", children: [
              "📁 ",
              t("fileManager.allFiles")
            ] }),
            folders && (() => {
              const flattenFolders = (items, depth = 0) => {
                const result = [];
                for (const item of items) {
                  result.push({ id: item.id, name: item.name, fileCount: item.file_count, depth });
                  if (item.children.length > 0) {
                    result.push(...flattenFolders(item.children, depth + 1));
                  }
                }
                return result;
              };
              return flattenFolders(folders).map((folder) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: folder.id, children: [
                "│ ".repeat(folder.depth),
                "📂 ",
                folder.name,
                " ",
                folder.fileCount > 0 ? `(${folder.fileCount})` : ""
              ] }, folder.id));
            })()
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: sidebarRef,
          className: "hidden lg:flex flex-shrink-0 bg-bambu-dark-secondary rounded-lg border border-bambu-dark-tertiary overflow-hidden flex-col relative",
          style: { width: `${sidebarWidth}px` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `absolute right-0 top-0 bottom-0 w-1.5 cursor-col-resize z-10 group/resize flex items-center justify-center transition-colors ${isResizing ? "bg-bambu-green" : "hover:bg-bambu-green/50"}`,
                onMouseDown: (e) => {
                  e.preventDefault();
                  setIsResizing(true);
                },
                onDoubleClick: () => {
                  setSidebarWidth(256);
                  localStorage.setItem("library-sidebar-width", "256");
                },
                title: t("fileManager.dragToResizeTooltip"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col gap-1 opacity-0 group-hover/resize:opacity-100 transition-opacity ${isResizing ? "opacity-100" : ""}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-0.5 rounded-full bg-white/70" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-0.5 rounded-full bg-white/70" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-0.5 rounded-full bg-white/70" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-b border-bambu-dark-tertiary flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-medium text-white", children: t("fileManager.folders") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    const newValue = !wrapFolderNames;
                    setWrapFolderNames(newValue);
                    localStorage.setItem("library-wrap-folders", String(newValue));
                  },
                  className: `text-xs px-1.5 py-0.5 rounded transition-colors ${wrapFolderNames ? "bg-bambu-green/20 text-bambu-green" : "text-bambu-gray hover:text-white hover:bg-bambu-dark"}`,
                  title: wrapFolderNames ? t("fileManager.disableTextWrapping") : t("fileManager.enableTextWrapping"),
                  children: t("fileManager.wrap")
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors ${selectedFolderId === null ? "bg-bambu-green/20 text-bambu-green" : "hover:bg-bambu-dark text-white"}`,
                  onClick: () => setSelectedFolderId(null),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileBox, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: t("fileManager.allFiles") })
                  ]
                }
              ),
              folders?.map((folder) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                FolderTreeItem,
                {
                  folder,
                  selectedFolderId,
                  onSelect: setSelectedFolderId,
                  onDelete: (id) => setDeleteConfirm({ type: "folder", id }),
                  onLink: setLinkFolder,
                  onRename: (f) => setRenameItem({ type: "folder", id: f.id, name: f.name }),
                  wrapNames: wrapFolderNames,
                  hasPermission,
                  t
                },
                folder.id
              ))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0 min-h-0", children: [
        selectedFolder?.is_external && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FolderSymlink, { className: "w-5 h-5 text-purple-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-purple-300", children: t("fileManager.externalFolder") }),
              selectedFolder.external_readonly && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
                t("fileManager.readOnly")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray truncate font-mono", title: selectedFolder.external_path || "", children: selectedFolder.external_path })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => selectedFolderId && scanExternalFolderMutation.mutate(selectedFolderId),
              disabled: scanExternalFolderMutation.isPending,
              title: t("fileManager.scanFolder"),
              children: [
                scanExternalFolderMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5", children: t("fileManager.scanFolder") })
              ]
            }
          )
        ] }),
        files && files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3 mb-4 p-2 sm:p-3 bg-bambu-dark-secondary rounded-lg border border-bambu-dark-tertiary sticky top-0 z-10 lg:static", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-auto sm:flex-1 sm:max-w-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bambu-gray" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: t("fileManager.searchFiles"),
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full pl-9 pr-3 py-1.5 bg-bambu-dark border border-bambu-dark-tertiary rounded text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-bambu-gray hidden sm:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: filterType,
                onChange: (e) => setFilterType(e.target.value),
                className: "bg-bambu-dark border border-bambu-dark-tertiary rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:border-bambu-green",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: t("fileManager.allTypes") }),
                  fileTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: type, children: type.toUpperCase() }, type))
                ]
              }
            )
          ] }),
          authEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: t("fileManager.filterByUser", { defaultValue: "Filter by user" }),
                value: filterUsername,
                onChange: (e) => setFilterUsername(e.target.value),
                list: "usernames-list",
                className: `w-32 sm:w-40 px-2 py-1.5 bg-bambu-dark border border-bambu-dark-tertiary rounded text-sm text-white placeholder-bambu-gray focus:outline-none focus:border-bambu-green ${filterUsername ? "pr-7" : ""}`,
                style: filterUsername ? { WebkitAppearance: "none", MozAppearance: "textfield" } : void 0
              }
            ),
            filterUsername && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setFilterUsername(""),
                className: "absolute right-2 top-1/2 -translate-y-1/2 text-bambu-gray hover:text-white z-10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "usernames-list", children: users?.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: user.username }, user.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: sortField,
                onChange: (e) => {
                  const newField = e.target.value;
                  setSortField(newField);
                  localStorage.setItem("library-sort-field", newField);
                },
                className: "bg-bambu-dark border border-bambu-dark-tertiary rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:border-bambu-green",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: t("common.name") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date", children: t("common.date") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "size", children: t("fileManager.size") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "type", children: t("common.type") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "prints", children: t("fileManager.prints") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setSortDirection((d) => {
                  const newDir = d === "asc" ? "desc" : "asc";
                  localStorage.setItem("library-sort-direction", newDir);
                  return newDir;
                }),
                className: "p-1.5 rounded bg-bambu-dark border border-bambu-dark-tertiary hover:border-bambu-green transition-colors",
                title: sortDirection === "asc" ? t("fileManager.ascending") : t("fileManager.descending"),
                children: sortDirection === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpNarrowWide, { className: "w-4 h-4 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownWideNarrow, { className: "w-4 h-4 text-white" })
              }
            )
          ] }),
          (searchQuery || filterType !== "all" || filterUsername) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray hidden sm:inline", children: t("fileManager.resultsCount", { showing: filteredAndSortedFiles.length, total: files.length }) })
        ] }),
        filteredAndSortedFiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-4 p-2 bg-bambu-dark-secondary rounded-lg border border-bambu-dark-tertiary sticky top-[52px] z-10 lg:static", children: [
          selectedFiles.length === filteredAndSortedFiles.length && selectedFiles.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: handleDeselectAll,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4 sm:mr-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("fileManager.deselectAll") })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: handleSelectAll,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 sm:mr-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("fileManager.selectAll") })
              ]
            }
          ),
          selectedFiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray ml-2", children: t("fileManager.selected", { count: selectedFiles.length }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block flex-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full sm:w-auto flex flex-wrap items-center gap-2 mt-2 sm:mt-0", children: [
              selectedSlicedFiles.length === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "primary",
                  size: "sm",
                  onClick: () => setPrintMultiFile(selectedSlicedFiles[0]),
                  disabled: !hasPermission("printers:control"),
                  title: !hasPermission("printers:control") ? t("fileManager.noPermissionPrint") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 sm:mr-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("common.print") })
                  ]
                }
              ),
              selectedSlicedFiles.length === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => setScheduleFile(selectedSlicedFiles[0]),
                  disabled: !hasPermission("queue:create"),
                  title: !hasPermission("queue:create") ? t("fileManager.noPermissionAddToQueue") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 sm:mr-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("fileManager.schedulePrint") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => setShowMoveModal(true),
                  disabled: !hasAnyPermission("library:update_own", "library:update_all"),
                  title: !hasAnyPermission("library:update_own", "library:update_all") ? t("fileManager.noPermissionMoveFiles") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MoveRight, { className: "w-4 h-4 sm:mr-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("common.move") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "danger",
                  size: "sm",
                  onClick: () => {
                    if (selectedFiles.length === 1) {
                      setDeleteConfirm({ type: "file", id: selectedFiles[0] });
                    } else {
                      setDeleteConfirm({ type: "bulk", id: 0, count: selectedFiles.length });
                    }
                  },
                  disabled: !hasAnyPermission("library:delete_own", "library:delete_all"),
                  title: !hasAnyPermission("library:delete_own", "library:delete_all") ? t("fileManager.noPermissionDeleteFiles") : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 sm:mr-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("common.delete") })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "secondary",
                  size: "sm",
                  onClick: handleDeselectAll,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 sm:mr-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t("common.clear") })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-bambu-green" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("fileManager.loadingFiles") })
        ] }) }) : files?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-bambu-dark rounded-2xl mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileBox, { className: "w-12 h-12 text-bambu-gray/50" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-white mb-2", children: selectedFolderId !== null ? t("fileManager.folderIsEmpty") : t("fileManager.noFilesYet") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center max-w-md mb-6", children: selectedFolderId !== null ? t("fileManager.folderEmptyDescription") : t("fileManager.noFilesDescription") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setShowUploadModal(true),
              disabled: !hasPermission("library:upload"),
              title: !hasPermission("library:upload") ? t("fileManager.noPermissionUpload") : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                t("fileManager.uploadFiles")
              ]
            }
          )
        ] }) : filteredAndSortedFiles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-bambu-dark rounded-2xl mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-12 h-12 text-bambu-gray/50" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-white mb-2", children: t("fileManager.noMatchingFiles") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center max-w-md mb-6", children: t("fileManager.noMatchingFilesDescription") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
            setSearchQuery("");
            setFilterType("all");
          }, children: t("fileManager.clearFilters") })
        ] }) : viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 lg:overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4", children: filteredAndSortedFiles.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FileCard,
          {
            file,
            isSelected: selectedFiles.includes(file.id),
            isMobile,
            t,
            onSelect: handleFileSelect,
            onDelete: (id) => setDeleteConfirm({ type: "file", id }),
            onDownload: handleDownload,
            onAddToQueue: (id) => {
              const file2 = files?.find((f) => f.id === id);
              if (file2) setScheduleFile(file2);
            },
            onPrint: setPrintFile,
            onSlice: handleOpenOnlineSlicer,
            onPreview3d: setViewerFile,
            onRename: (f) => setRenameItem({ type: "file", id: f.id, name: f.filename }),
            onGenerateThumbnail: (f) => singleThumbnailMutation.mutate(f.id),
            thumbnailVersion: thumbnailVersions[file.id],
            hasPermission,
            canModify,
            authEnabled
          },
          file.id
        )) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 lg:overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark-secondary rounded-lg border border-bambu-dark-tertiary overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `hidden sm:grid ${authEnabled ? "grid-cols-[auto_1fr_120px_100px_100px_100px_80px]" : "grid-cols-[auto_1fr_100px_100px_100px_80px]"} gap-4 px-4 py-2 bg-bambu-dark-secondary border-b border-bambu-dark-tertiary text-xs text-bambu-gray font-medium`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("common.name") }),
            authEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("fileManager.uploadedBy", { defaultValue: "Uploaded By" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("common.type") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("fileManager.size") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("fileManager.prints") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
          ] }),
          filteredAndSortedFiles.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `grid ${authEnabled ? "grid-cols-[auto_1fr_120px_100px_100px_100px_80px]" : "grid-cols-[auto_1fr_100px_100px_100px_80px]"} gap-4 px-4 py-3 items-center border-b border-bambu-dark-tertiary last:border-b-0 cursor-pointer hover:bg-bambu-dark/50 transition-colors ${selectedFiles.includes(file.id) ? "bg-bambu-green/10" : ""}`,
              onClick: () => handleFileSelect(file.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 rounded border-2 flex items-center justify-center ${selectedFiles.includes(file.id) ? "bg-bambu-green border-bambu-green" : "border-bambu-gray/50"}`, children: selectedFiles.includes(file.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-white rounded-sm" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/thumb", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-bambu-dark flex-shrink-0 overflow-hidden", children: file.thumbnail_path || isThreemfFileType(file.file_type) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: `${api.getLibraryFileThumbnailUrl(file.id, file.thumbnail_path)}${thumbnailVersions[file.id] ? `?v=${thumbnailVersions[file.id]}` : ""}`,
                        alt: "",
                        className: "w-full h-full object-cover"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileBox, { className: "w-5 h-5 text-bambu-gray/50" }) }) }),
                    (file.thumbnail_path || isThreemfFileType(file.file_type)) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-full mt-2 z-50 hidden group-hover/thumb:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 h-48 rounded-lg bg-bambu-dark-secondary border border-bambu-dark-tertiary shadow-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: `${api.getLibraryFileThumbnailUrl(file.id, file.thumbnail_path)}${thumbnailVersions[file.id] ? `?v=${thumbnailVersions[file.id]}` : ""}`,
                        alt: file.filename,
                        className: "w-full h-full object-contain"
                      }
                    ) }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white truncate", children: file.print_name || file.filename }) })
                ] }),
                authEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-bambu-gray flex items-center gap-1", children: file.created_by_username ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: file.created_by_username })
                ] }) : "-" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${isThreemfFileType(file.file_type) ? "bg-bambu-green/20 text-bambu-green" : file.file_type === "gcode" ? "bg-blue-500/20 text-blue-400" : file.file_type === "stl" ? "bg-purple-500/20 text-purple-400" : "bg-bambu-gray/20 text-bambu-gray"}`, children: file.file_type.toUpperCase() }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-bambu-gray", children: formatFileSize(file.file_size) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-bambu-gray", children: file.print_count > 0 ? `${file.print_count}x` : "-" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", onClick: (e) => e.stopPropagation(), children: [
                  isSlicedFilename(file.filename) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => hasPermission("printers:control") && setPrintFile(file),
                        className: `p-1.5 rounded transition-colors ${hasPermission("printers:control") ? "hover:bg-bambu-dark text-bambu-gray hover:text-bambu-green" : "text-bambu-gray/50 cursor-not-allowed"}`,
                        title: hasPermission("printers:control") ? t("common.print") : t("fileManager.noPermissionPrint"),
                        disabled: !hasPermission("printers:control"),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => {
                          if (hasPermission("queue:create")) {
                            setScheduleFile(file);
                          }
                        },
                        className: `p-1.5 rounded transition-colors ${hasPermission("queue:create") ? "hover:bg-bambu-dark text-bambu-gray hover:text-white" : "text-bambu-gray/50 cursor-not-allowed"}`,
                        title: hasPermission("queue:create") ? t("fileManager.schedulePrint") : t("fileManager.noPermissionAddToQueue"),
                        disabled: !hasPermission("queue:create"),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" })
                      }
                    )
                  ] }),
                  isPreviewable3dFileType(file.file_type) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => hasPermission("library:read") && setViewerFile(file),
                      className: `p-1.5 rounded transition-colors ${hasPermission("library:read") ? "hover:bg-bambu-dark text-bambu-gray hover:text-bambu-green" : "text-bambu-gray/50 cursor-not-allowed"}`,
                      title: hasPermission("library:read") ? "3D Preview" : "You do not have permission to preview files",
                      disabled: !hasPermission("library:read"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => hasPermission("library:read") && handleDownload(file.id),
                      className: `p-1.5 rounded transition-colors ${hasPermission("library:read") ? "hover:bg-bambu-dark text-bambu-gray hover:text-white" : "text-bambu-gray/50 cursor-not-allowed"}`,
                      title: hasPermission("library:read") ? t("common.download") : t("fileManager.noPermissionDownload"),
                      disabled: !hasPermission("library:read"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => canModify("library", "update", file.created_by_id) && setRenameItem({ type: "file", id: file.id, name: file.filename }),
                      className: `p-1.5 rounded transition-colors ${canModify("library", "update", file.created_by_id) ? "hover:bg-bambu-dark text-bambu-gray hover:text-white" : "text-bambu-gray/50 cursor-not-allowed"}`,
                      title: canModify("library", "update", file.created_by_id) ? t("common.rename") : t("fileManager.noPermissionRenameFile"),
                      disabled: !canModify("library", "update", file.created_by_id),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4" })
                    }
                  ),
                  file.file_type === "stl" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => hasPermission("library:upload") && handleOpenOnlineSlicer(file),
                      className: `p-1.5 rounded transition-colors ${hasPermission("library:upload") ? "hover:bg-bambu-dark text-bambu-gray hover:text-white" : "text-bambu-gray/50 cursor-not-allowed"}`,
                      title: hasPermission("library:upload") ? t("fileManager.slice.action") : t("fileManager.noPermissionUpload"),
                      disabled: !hasPermission("library:upload"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" })
                    }
                  ),
                  file.file_type === "stl" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => canModify("library", "update", file.created_by_id) && singleThumbnailMutation.mutate(file.id),
                      className: `p-1.5 rounded transition-colors ${canModify("library", "update", file.created_by_id) ? "hover:bg-bambu-dark text-bambu-gray hover:text-bambu-green" : "text-bambu-gray/50 cursor-not-allowed"}`,
                      title: canModify("library", "update", file.created_by_id) ? t("fileManager.generateThumbnail") : t("fileManager.noPermissionGenerateThumbnail"),
                      disabled: singleThumbnailMutation.isPending || !canModify("library", "update", file.created_by_id),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => canModify("library", "delete", file.created_by_id) && setDeleteConfirm({ type: "file", id: file.id }),
                      className: `p-1.5 rounded transition-colors ${canModify("library", "delete", file.created_by_id) ? "hover:bg-bambu-dark text-bambu-gray hover:text-red-400" : "text-bambu-gray/50 cursor-not-allowed"}`,
                      title: canModify("library", "delete", file.created_by_id) ? t("common.delete") : t("fileManager.noPermissionDeleteFile"),
                      disabled: !canModify("library", "delete", file.created_by_id),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ]
            },
            file.id
          ))
        ] }) })
      ] })
    ] }),
    showNewFolderModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      NewFolderModal,
      {
        parentId: selectedFolderId,
        onClose: () => setShowNewFolderModal(false),
        onSave: (data) => createFolderMutation.mutate(data),
        isLoading: createFolderMutation.isPending,
        t
      }
    ),
    showExternalFolderModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExternalFolderModal,
      {
        onClose: () => setShowExternalFolderModal(false),
        onSave: (data) => createExternalFolderMutation.mutate(data),
        isLoading: createExternalFolderMutation.isPending,
        t
      }
    ),
    showMoveModal && folders && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MoveFilesModal,
      {
        folders,
        selectedFiles,
        currentFolderId: selectedFolderId,
        onClose: () => setShowMoveModal(false),
        onMove: (folderId) => moveFilesMutation.mutate({ fileIds: selectedFiles, folderId }),
        isLoading: moveFilesMutation.isPending,
        t
      }
    ),
    showUploadModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FileUploadModal,
      {
        folderId: selectedFolderId,
        onClose: () => setShowUploadModal(false),
        onUploadComplete: handleUploadComplete
      }
    ),
    linkFolder && /* @__PURE__ */ jsxRuntimeExports.jsx(
      LinkFolderModal,
      {
        folder: linkFolder,
        onClose: () => setLinkFolder(null),
        onLink: (data) => updateFolderMutation.mutate({ id: linkFolder.id, data }),
        isLoading: updateFolderMutation.isPending,
        t
      }
    ),
    deleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmModal,
      {
        title: deleteConfirm.type === "folder" ? t("fileManager.deleteFolder") : deleteConfirm.type === "bulk" ? t("fileManager.deleteFilesCount", { count: deleteConfirm.count }) : t("fileManager.deleteFile"),
        message: deleteConfirm.type === "folder" ? t("fileManager.deleteFolderConfirm") : deleteConfirm.type === "bulk" ? t("fileManager.deleteFilesConfirm", { count: deleteConfirm.count }) : t("fileManager.deleteFileConfirm"),
        confirmText: t("common.delete"),
        variant: "danger",
        isLoading: isDeleting,
        loadingText: t("fileManager.deleting"),
        onConfirm: handleDeleteConfirm,
        onCancel: () => setDeleteConfirm(null)
      }
    ),
    printFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PrintModal,
      {
        mode: "reprint",
        libraryFileId: printFile.id,
        archiveName: printFile.print_name || printFile.filename,
        onClose: () => setPrintFile(null),
        onSuccess: () => {
          setPrintFile(null);
          queryClient.invalidateQueries({ queryKey: ["library-files"] });
          queryClient.invalidateQueries({ queryKey: ["archives"] });
        }
      }
    ),
    printMultiFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PrintModal,
      {
        mode: "reprint",
        libraryFileId: printMultiFile.id,
        archiveName: printMultiFile.print_name || printMultiFile.filename,
        onClose: () => setPrintMultiFile(null),
        onSuccess: () => {
          setPrintMultiFile(null);
          setSelectedFiles([]);
          queryClient.invalidateQueries({ queryKey: ["library-files"] });
          queryClient.invalidateQueries({ queryKey: ["archives"] });
        }
      }
    ),
    scheduleFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PrintModal,
      {
        mode: "add-to-queue",
        libraryFileId: scheduleFile.id,
        archiveName: scheduleFile.print_name || scheduleFile.filename,
        onClose: () => setScheduleFile(null),
        onSuccess: () => {
          setScheduleFile(null);
          setSelectedFiles([]);
          queryClient.invalidateQueries({ queryKey: ["library-files"] });
          queryClient.invalidateQueries({ queryKey: ["queue"] });
          queryClient.invalidateQueries({ queryKey: ["archives"] });
        }
      }
    ),
    viewerFile && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModelViewerModal,
      {
        libraryFileId: viewerFile.id,
        title: viewerFile.print_name || viewerFile.filename,
        fileType: viewerFile.file_type,
        onClose: () => setViewerFile(null)
      }
    ),
    renameItem && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RenameModal,
      {
        type: renameItem.type,
        currentName: renameItem.name,
        onClose: () => setRenameItem(null),
        onSave: (newName) => {
          if (renameItem.type === "file") {
            renameFileMutation.mutate({ id: renameItem.id, filename: newName });
          } else {
            renameFolderMutation.mutate({ id: renameItem.id, name: newName });
          }
        },
        isLoading: renameFileMutation.isPending || renameFolderMutation.isPending,
        t
      }
    )
  ] });
}
export {
  FileManagerPage
};
