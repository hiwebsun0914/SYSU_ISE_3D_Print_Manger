import { c as createLucideIcon, b as useQueryClient, r as reactExports, d as useQuery, e as useMutation, a_ as supportApi, j as jsxRuntimeExports, a$ as Bug, a9 as ChevronUp, G as ChevronDown, T as Trash2, X, n as CircleAlert, l as TriangleAlert, o as Info, u as useTranslation, L as LoaderCircle, b0 as Server, aq as Database, a8 as Archive, s as CircleCheck, $ as CircleX, K as Printer, am as Plug, ab as formatDateTime, A as Card, f as api } from "./index-CMdmMVx7.js";
import { S as Square } from "./square-DluflY8c.js";
import { P as Play } from "./play-CqUWqFNe.js";
import { R as RefreshCw } from "./refresh-cw-BiEoeHE_.js";
import { S as Search } from "./search-DmnJQGxg.js";
import { C as Clock } from "./clock-Cv3tr1BN.js";
import { D as Download } from "./download-CY8JIv9P.js";
import { P as Palette } from "./palette-pog5uBPH.js";
import { F as FolderKanban } from "./folder-kanban-SUBZ8FyH.js";
import { H as HardDrive } from "./hard-drive-aQL1vowS.js";
import { F as FolderOpen } from "./folder-open-C5fOkWbI.js";
const __iconNode$2 = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
];
const Cpu = createLucideIcon("cpu", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode$1);
const __iconNode = [
  ["path", { d: "M6 19v-3", key: "1nvgqn" }],
  ["path", { d: "M10 19v-3", key: "iu8nkm" }],
  ["path", { d: "M14 19v-3", key: "kcehxu" }],
  ["path", { d: "M18 19v-3", key: "1vh91z" }],
  ["path", { d: "M8 11V9", key: "63erz4" }],
  ["path", { d: "M16 11V9", key: "fru6f3" }],
  ["path", { d: "M12 11V9", key: "ha00sb" }],
  ["path", { d: "M2 15h20", key: "16ne18" }],
  [
    "path",
    {
      d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
      key: "lhddv3"
    }
  ]
];
const MemoryStick = createLucideIcon("memory-stick", __iconNode);
const LOG_LEVELS = ["DEBUG", "INFO", "WARNING", "ERROR"];
const levelColors = {
  DEBUG: "text-gray-500",
  INFO: "text-blue-600",
  WARNING: "text-amber-600",
  ERROR: "text-red-600"
};
const levelIcons = {
  DEBUG: Bug,
  INFO: Info,
  WARNING: TriangleAlert,
  ERROR: CircleAlert
};
function LogViewer() {
  const queryClient = useQueryClient();
  const [autoScroll, setAutoScroll] = reactExports.useState(true);
  const [expandedLogs, setExpandedLogs] = reactExports.useState(/* @__PURE__ */ new Set());
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [levelFilter, setLevelFilter] = reactExports.useState("ALL");
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  const [isStreaming, setIsStreaming] = reactExports.useState(false);
  const logContainerRef = reactExports.useRef(null);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["application-logs", levelFilter, searchQuery],
    queryFn: () => supportApi.getLogs({
      limit: 200,
      level: levelFilter === "ALL" ? void 0 : levelFilter,
      search: searchQuery || void 0
    }),
    refetchInterval: isStreaming ? 2e3 : false,
    // Poll every 2 seconds when streaming
    enabled: isExpanded
    // Only fetch when viewer is expanded
  });
  reactExports.useEffect(() => {
    if (!isExpanded) {
      setIsStreaming(false);
    }
  }, [isExpanded]);
  const clearMutation = useMutation({
    mutationFn: () => supportApi.clearLogs(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["application-logs"] });
    }
  });
  reactExports.useEffect(() => {
    if (autoScroll && logContainerRef.current && data?.entries) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [data?.entries, autoScroll]);
  const toggleExpand = (index) => {
    setExpandedLogs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  const formatTimestamp = (timestamp) => {
    const parts = timestamp.split(" ");
    if (parts.length >= 2) {
      return parts[1];
    }
    return timestamp;
  };
  const entries = reactExports.useMemo(() => data?.entries ?? [], [data?.entries]);
  const displayEntries = reactExports.useMemo(() => [...entries].reverse(), [entries]);
  const LevelIcon = ({ level }) => {
    const Icon = levelIcons[level] || Info;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-3.5 h-3.5 ${levelColors[level] || "text-gray-400"}` });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-gray-200 bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsExpanded(!isExpanded),
        className: "flex w-full items-center justify-between p-4 transition-colors hover:bg-gray-50",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `p-2 rounded-lg ${isStreaming ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bug, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-900", children: "Application Logs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: isStreaming ? `Live streaming - ${data?.filtered_count ?? 0} entries` : "View and filter application logs" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            isStreaming && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 rounded bg-emerald-100 px-2 py-1 text-xs text-emerald-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" }),
              "Live"
            ] }),
            isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-5 w-5 text-gray-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5 text-gray-500" })
          ] })
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 border-b border-gray-200 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          isStreaming ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setIsStreaming(false);
              },
              className: "flex items-center gap-1.5 px-3 py-1.5 text-sm bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4" }),
                "Stop"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setIsStreaming(true);
                refetch();
              },
              className: "flex items-center gap-1.5 rounded bg-emerald-100 px-3 py-1.5 text-sm text-emerald-700 transition-colors hover:bg-emerald-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
                "Start"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => clearMutation.mutate(),
              disabled: clearMutation.isPending || entries.length === 0,
              className: "flex items-center gap-1.5 rounded border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
                "Clear"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => refetch(),
              disabled: isLoading,
              className: "flex items-center gap-1.5 rounded border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isLoading ? "animate-spin" : ""}` })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: autoScroll,
                onChange: (e) => setAutoScroll(e.target.checked),
                className: "rounded border-gray-300 bg-white text-emerald-600"
              }
            ),
            "Auto-scroll"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-600", children: [
            data?.filtered_count ?? 0,
            "/",
            data?.total_in_file ?? 0
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search message or logger name...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full rounded border border-gray-300 bg-white py-1.5 pl-8 pr-8 text-sm text-gray-900 placeholder:text-gray-400 focus:border-bambu-green focus:outline-none"
              }
            ),
            searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setSearchQuery(""),
                className: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 rounded border border-gray-200 bg-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setLevelFilter("ALL"),
                className: `px-2 py-1.5 text-xs rounded-l transition-colors ${levelFilter === "ALL" ? "bg-bambu-green text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,
                children: "All"
              }
            ),
            LOG_LEVELS.map((level, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setLevelFilter(level),
                className: `px-2 py-1.5 text-xs transition-colors flex items-center gap-1 ${idx === LOG_LEVELS.length - 1 ? "rounded-r" : ""} ${levelFilter === level ? `${levelColors[level]} bg-gray-100` : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,
                children: level
              },
              level
            ))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: logContainerRef,
          className: "min-h-[300px] max-h-[500px] overflow-auto bg-gray-50 font-mono text-xs",
          children: entries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[300px] flex-col items-center justify-center text-gray-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "No log entries found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Log file may be empty or cleared" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gray-200", children: displayEntries.map((log, index) => {
            const isEntryExpanded = expandedLogs.has(index);
            const hasMultiLine = log.message.includes("\n");
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `cursor-pointer p-2 transition-colors hover:bg-white ${isEntryExpanded ? "bg-white" : ""}`,
                onClick: () => hasMultiLine && toggleExpand(index),
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-20 shrink-0 text-gray-500", children: formatTimestamp(log.timestamp) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LevelIcon, { level: log.level }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "max-w-[200px] shrink-0 truncate text-purple-700", title: log.logger_name, children: [
                    "[",
                    log.logger_name,
                    "]"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `flex-1 ${levelColors[log.level] || "text-gray-800"} ${!isEntryExpanded && hasMultiLine ? "truncate" : ""}`,
                      children: isEntryExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "whitespace-pre-wrap break-all", children: log.message }) : log.message.split("\n")[0]
                    }
                  ),
                  hasMultiLine && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-gray-400", children: isEntryExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" }) })
                ] })
              },
              index
            );
          }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-t border-gray-200 p-3 text-sm text-gray-600", children: isStreaming ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }),
        "Auto-refreshing every 2 seconds"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Click Start to enable live log streaming" }) })
    ] })
  ] });
}
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
function StatCard({
  icon: Icon,
  label,
  value,
  subValue,
  color = "text-bambu-green"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg bg-gray-100 p-2 ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-lg font-semibold text-gray-900", children: value }),
      subValue && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-gray-500", children: subValue })
    ] })
  ] });
}
function ProgressBar({ percent, color = "bg-bambu-green" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `h-full ${color} transition-all duration-300`,
      style: { width: `${Math.min(100, percent)}%` }
    }
  ) });
}
function Section({
  title,
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-gray-200 bg-white p-6 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-bambu-green" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: title })
    ] }),
    children
  ] });
}
function SystemInfoPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [bundleError, setBundleError] = reactExports.useState(null);
  const [bundleDownloading, setBundleDownloading] = reactExports.useState(false);
  const [debugToggling, setDebugToggling] = reactExports.useState(false);
  const { data: systemInfo, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["systemInfo"],
    queryFn: api.getSystemInfo,
    refetchInterval: 3e4
    // Auto-refresh every 30 seconds
  });
  const { data: debugLoggingState } = useQuery({
    queryKey: ["debugLogging"],
    queryFn: supportApi.getDebugLoggingState,
    staleTime: 10 * 1e3,
    // 10 seconds
    refetchInterval: 10 * 1e3
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const { data: libraryStats } = useQuery({
    queryKey: ["library-stats"],
    queryFn: api.getLibraryStats
  });
  const timeFormat = settings?.time_format || "system";
  const handleToggleDebugLogging = async () => {
    setDebugToggling(true);
    try {
      const newState = await supportApi.setDebugLogging(!debugLoggingState?.enabled);
      queryClient.setQueryData(["debugLogging"], newState);
    } catch (err) {
      console.error("Failed to toggle debug logging:", err);
    } finally {
      setDebugToggling(false);
    }
  };
  const handleDownloadBundle = async () => {
    setBundleError(null);
    setBundleDownloading(true);
    try {
      await supportApi.downloadSupportBundle();
    } catch (err) {
      setBundleError(err instanceof Error ? err.message : "Failed to download support bundle");
    } finally {
      setBundleDownloading(false);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) });
  }
  if (!systemInfo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center text-gray-500", children: t("system.failedToLoad", "Failed to load system information") });
  }
  const diskColor = systemInfo.storage.disk_percent_used > 90 ? "bg-red-500" : systemInfo.storage.disk_percent_used > 75 ? "bg-yellow-500" : "bg-bambu-green";
  const memoryColor = systemInfo.memory.percent_used > 90 ? "bg-red-500" : systemInfo.memory.percent_used > 75 ? "bg-yellow-500" : "bg-bambu-green";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: t("system.title", "System Information") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-gray-600", children: t("system.subtitle", "Monitor system resources and database statistics") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => refetch(),
          disabled: isFetching,
          className: "flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isFetching ? "animate-spin" : ""}` }),
            t("common.refresh", "Refresh")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: t("system.application", "Application"), icon: Server, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Server,
          label: t("system.version", "Version"),
          value: `v${systemInfo.app.version}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Clock,
          label: t("system.uptime", "System Uptime"),
          value: systemInfo.system.uptime_formatted
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Server,
          label: t("system.hostname", "Hostname"),
          value: systemInfo.system.hostname
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: t("support.title", "Support & Troubleshooting"), icon: Headphones, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: t("support.description", "Enable debug logging to capture detailed information, then download a support bundle to share when reporting issues.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg p-2 ${debugLoggingState?.enabled ? "bg-amber-100 text-amber-600" : "bg-gray-200 text-gray-500"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bug, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-900", children: t("support.debugLogging", "Debug Logging") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600", children: [
              debugLoggingState?.enabled ? t("support.debugLoggingEnabled", "Capturing detailed logs") : t("support.debugLoggingDisabled", "Normal logging level"),
              debugLoggingState?.enabled && debugLoggingState.duration_seconds !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-400 ml-2", children: [
                "(",
                Math.floor(debugLoggingState.duration_seconds / 60),
                "m ",
                debugLoggingState.duration_seconds % 60,
                "s)"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleToggleDebugLogging,
            disabled: debugToggling,
            className: `px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${debugLoggingState?.enabled ? "bg-amber-100 text-amber-700 hover:bg-amber-200" : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"} disabled:opacity-50`,
            children: [
              debugToggling && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              debugLoggingState?.enabled ? t("support.disableDebug", "Disable") : t("support.enableDebug", "Enable")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-emerald-100 p-2 text-emerald-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-900", children: t("support.supportBundle", "Support Bundle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: t("support.supportBundleDescription", "Download system info and logs as a ZIP file") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleDownloadBundle,
            disabled: bundleDownloading || !debugLoggingState?.enabled,
            className: "flex items-center gap-2 rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-700 transition-colors hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-50",
            title: !debugLoggingState?.enabled ? t("support.enableDebugFirst", "Enable debug logging first") : void 0,
            children: [
              bundleDownloading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              t("common.download", "Download")
            ]
          }
        )
      ] }),
      bundleError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700", children: bundleError }),
      !debugLoggingState?.enabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-amber-200 bg-amber-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-amber-700", children: t("support.instructions", "To report an issue:") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "1. ",
        t("support.step1", "Enable debug logging"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "2. ",
        t("support.step2", "Reproduce the issue"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "3. ",
        t("support.step3", "Download the support bundle"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "4. ",
        t("support.step4", "Attach the ZIP file to your issue report")
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900", children: t("support.privacyTitle", "What's in the support bundle?") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 font-medium text-emerald-700", children: t("support.collected", "Collected:") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-0.5 text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem1", "App version and debug mode")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem2", "OS, architecture, Python version")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem3", "Database statistics (counts only)")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem4", "Printer models and nozzle counts")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem5", "Non-sensitive settings (themes, formats)")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem6", "Debug logs (sanitized)")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem7", "Printer connectivity and firmware versions")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem8", "Integration status (Spoolman, MQTT, HA)")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem9", "Network interfaces (subnets only)")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem10", "Python package versions")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem11", "Database health checks")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.collectItem12", "Docker environment details")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 font-medium text-red-700", children: t("support.notCollected", "NOT collected:") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-0.5 text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.notItem1", "Printer names and serial numbers")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.notItem2", "Access codes and passwords")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.notItem3", "Email addresses")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.notItem4", "API keys and tokens")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.notItem5", "Webhook URLs")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.notItem6", "Your hostname or username")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                t("support.notItem7", "IP addresses")
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: t("support.privacyNote", "Email addresses in logs are replaced with [EMAIL], printer names with [PRINTER], serial numbers with [SERIAL], and IP addresses with [IP].") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogViewer, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: t("system.database", "Database"), icon: Database, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Archive,
            label: t("system.totalArchives", "Total Archives"),
            value: systemInfo.database.archives
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: CircleCheck,
            label: t("system.completed", "Completed"),
            value: systemInfo.database.archives_completed,
            color: "text-green-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: CircleX,
            label: t("system.failed", "Failed"),
            value: systemInfo.database.archives_failed,
            color: "text-red-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: LoaderCircle,
            label: t("system.printing", "Printing"),
            value: systemInfo.database.archives_printing,
            color: "text-yellow-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Printer,
            label: t("system.printers", "Printers"),
            value: systemInfo.database.printers
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Palette,
            label: t("system.filaments", "Filaments"),
            value: systemInfo.database.filaments
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: FolderKanban,
            label: t("system.projects", "Projects"),
            value: systemInfo.database.projects
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Plug,
            label: t("system.smartPlugs", "Smart Plugs"),
            value: systemInfo.database.smart_plugs
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Clock,
            label: t("system.totalPrintTime", "Total Print Time"),
            value: systemInfo.database.total_print_time_formatted
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Archive,
            label: t("system.totalFilament", "Total Filament Used"),
            value: `${systemInfo.database.total_filament_kg} kg`,
            subValue: `${systemInfo.database.total_filament_grams.toLocaleString()} g`
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: t("system.connectedPrinters", "Connected Printers"), icon: Printer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-bambu-green", children: systemInfo.printers.connected }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: t("system.ofTotal", "of {{total}} printers connected", {
          total: systemInfo.printers.total
        }) })
      ] }),
      systemInfo.printers.connected_list.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: systemInfo.printers.connected_list.map((printer) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-bambu-green" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: printer.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: printer.model }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `px-2 py-0.5 rounded ${printer.state === "RUNNING" ? "bg-emerald-100 text-emerald-700" : printer.state === "IDLE" ? "bg-blue-100 text-blue-700" : "bg-gray-200 text-gray-700"}`,
                  children: printer.state
                }
              )
            ] })
          ]
        },
        printer.id
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: t("system.noPrintersConnected", "No printers connected") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: t("system.storage", "Storage"), icon: HardDrive, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: t("system.diskUsage", "Disk Usage") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-900", children: [
            systemInfo.storage.disk_used_formatted,
            " / ",
            systemInfo.storage.disk_total_formatted
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { percent: systemInfo.storage.disk_percent_used, color: diskColor }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500", children: [
          systemInfo.storage.disk_free_formatted,
          " ",
          t("system.free", "free"),
          " (",
          (100 - systemInfo.storage.disk_percent_used).toFixed(1),
          "%)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Archive,
            label: t("system.archiveStorage", "Archive Storage"),
            value: systemInfo.storage.archive_size_formatted
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Database,
            label: t("system.databaseSize", "Database Size"),
            value: systemInfo.storage.database_size_formatted
          }
        ),
        libraryStats && /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: FolderOpen,
            label: t("system.fileManagerStorage", "File Manager"),
            value: formatBytes(libraryStats.total_size_bytes),
            subValue: `${libraryStats.total_files} files, ${libraryStats.total_folders} folders`
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: t("system.memory", "Memory"), icon: MemoryStick, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: t("system.memoryUsage", "Memory Usage") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-900", children: [
            systemInfo.memory.used_formatted,
            " / ",
            systemInfo.memory.total_formatted
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { percent: systemInfo.memory.percent_used, color: memoryColor }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500", children: [
          systemInfo.memory.available_formatted,
          " ",
          t("system.available", "available")
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: t("system.cpu", "CPU"), icon: Cpu, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Cpu,
            label: t("system.cores", "Cores"),
            value: systemInfo.cpu.count,
            subValue: `${systemInfo.cpu.count_logical} logical`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            icon: Cpu,
            label: t("system.usage", "Usage"),
            value: `${systemInfo.cpu.percent}%`
          }
        )
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: t("system.systemDetails", "System Details"), icon: Server, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Server,
          label: t("system.os", "Operating System"),
          value: systemInfo.system.platform,
          subValue: systemInfo.system.platform_release
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Cpu,
          label: t("system.architecture", "Architecture"),
          value: systemInfo.system.architecture
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Server,
          label: t("system.python", "Python"),
          value: systemInfo.system.python_version
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Clock,
          label: t("system.bootTime", "Boot Time"),
          value: formatDateTime(systemInfo.system.boot_time, timeFormat)
        }
      )
    ] }) })
  ] });
}
export {
  SystemInfoPage
};
