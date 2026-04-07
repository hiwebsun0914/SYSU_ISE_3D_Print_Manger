import { useState, useEffect, useRef, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Play,
  Square,
  Trash2,
  RefreshCw,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  AlertTriangle,
  Info,
  Bug,
} from 'lucide-react';
import { supportApi, type LogEntry } from '../api/client';

const LOG_LEVELS = ['DEBUG', 'INFO', 'WARNING', 'ERROR'] as const;
type LogLevel = (typeof LOG_LEVELS)[number];

const levelColors: Record<LogLevel, string> = {
  DEBUG: 'text-gray-500',
  INFO: 'text-blue-600',
  WARNING: 'text-amber-600',
  ERROR: 'text-red-600',
};

const levelIcons: Record<LogLevel, typeof Info> = {
  DEBUG: Bug,
  INFO: Info,
  WARNING: AlertTriangle,
  ERROR: AlertCircle,
};

export function LogViewer() {
  const queryClient = useQueryClient();
  const [autoScroll, setAutoScroll] = useState(true);
  const [expandedLogs, setExpandedLogs] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<LogLevel | 'ALL'>('ALL');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Fetch logs with polling when streaming is enabled
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['application-logs', levelFilter, searchQuery],
    queryFn: () =>
      supportApi.getLogs({
        limit: 200,
        level: levelFilter === 'ALL' ? undefined : levelFilter,
        search: searchQuery || undefined,
      }),
    refetchInterval: isStreaming ? 2000 : false, // Poll every 2 seconds when streaming
    enabled: isExpanded, // Only fetch when viewer is expanded
  });

  // Stop streaming when viewer is collapsed
  useEffect(() => {
    if (!isExpanded) {
      setIsStreaming(false);
    }
  }, [isExpanded]);

  const clearMutation = useMutation({
    mutationFn: () => supportApi.clearLogs(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['application-logs'] });
    },
  });

  // Auto-scroll to bottom when new logs arrive
  useEffect(() => {
    if (autoScroll && logContainerRef.current && data?.entries) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [data?.entries, autoScroll]);

  const toggleExpand = (index: number) => {
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

  const formatTimestamp = (timestamp: string) => {
    // Input format: "2024-01-15 10:30:45,123"
    const parts = timestamp.split(' ');
    if (parts.length >= 2) {
      return parts[1]; // Return just the time part
    }
    return timestamp;
  };

  const entries = useMemo(() => data?.entries ?? [], [data?.entries]);

  // Reverse to show newest at bottom (better for auto-scroll UX)
  const displayEntries = useMemo(() => [...entries].reverse(), [entries]);

  const LevelIcon = ({ level }: { level: string }) => {
    const Icon = levelIcons[level as LogLevel] || Info;
    return <Icon className={`w-3.5 h-3.5 ${levelColors[level as LogLevel] || 'text-gray-400'}`} />;
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Header - always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between p-4 transition-colors hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg ${
              isStreaming
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            <Bug className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900">Application Logs</p>
            <p className="text-sm text-gray-600">
              {isStreaming
                ? `Live streaming - ${data?.filtered_count ?? 0} entries`
                : 'View and filter application logs'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isStreaming && (
            <span className="flex items-center gap-1.5 rounded bg-emerald-100 px-2 py-1 text-xs text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Live
            </span>
          )}
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="border-t border-gray-200">
          {/* Controls */}
          <div className="flex flex-col gap-2 border-b border-gray-200 p-4">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Start/Stop streaming button */}
              {isStreaming ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsStreaming(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded transition-colors"
                >
                  <Square className="w-4 h-4" />
                  Stop
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsStreaming(true);
                    refetch(); // Immediately fetch when starting
                  }}
                  className="flex items-center gap-1.5 rounded bg-emerald-100 px-3 py-1.5 text-sm text-emerald-700 transition-colors hover:bg-emerald-200"
                >
                  <Play className="w-4 h-4" />
                  Start
                </button>
              )}

              {/* Clear button */}
              <button
                onClick={() => clearMutation.mutate()}
                disabled={clearMutation.isPending || entries.length === 0}
                className="flex items-center gap-1.5 rounded border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>

              {/* Refresh button */}
              <button
                onClick={() => refetch()}
                disabled={isLoading}
                className="flex items-center gap-1.5 rounded border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>

              <div className="flex-1" />

              {/* Auto-scroll toggle */}
              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={autoScroll}
                  onChange={(e) => setAutoScroll(e.target.checked)}
                  className="rounded border-gray-300 bg-white text-emerald-600"
                />
                Auto-scroll
              </label>

              {/* Entry count */}
              <span className="text-sm text-gray-600">
                {data?.filtered_count ?? 0}/{data?.total_in_file ?? 0}
              </span>
            </div>

            {/* Search and Filter Row */}
            <div className="flex items-center gap-2">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search message or logger name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-white py-1.5 pl-8 pr-8 text-sm text-gray-900 placeholder:text-gray-400 focus:border-bambu-green focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Level filter */}
              <div className="flex items-center gap-1 rounded border border-gray-200 bg-white">
                <button
                  onClick={() => setLevelFilter('ALL')}
                  className={`px-2 py-1.5 text-xs rounded-l transition-colors ${
                    levelFilter === 'ALL'
                      ? 'bg-bambu-green text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  All
                </button>
                {LOG_LEVELS.map((level, idx) => (
                  <button
                    key={level}
                    onClick={() => setLevelFilter(level)}
                    className={`px-2 py-1.5 text-xs transition-colors flex items-center gap-1 ${
                      idx === LOG_LEVELS.length - 1 ? 'rounded-r' : ''
                    } ${
                      levelFilter === level
                        ? `${levelColors[level]} bg-gray-100`
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Log Content */}
          <div
            ref={logContainerRef}
            className="min-h-[300px] max-h-[500px] overflow-auto bg-gray-50 font-mono text-xs"
          >
            {entries.length === 0 ? (
              <div className="flex h-[300px] flex-col items-center justify-center text-gray-500">
                <p className="mb-2">No log entries found</p>
                <p className="text-sm">Log file may be empty or cleared</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {displayEntries.map((log: LogEntry, index: number) => {
                  const isEntryExpanded = expandedLogs.has(index);
                  const hasMultiLine = log.message.includes('\n');

                  return (
                    <div
                      key={index}
                      className={`cursor-pointer p-2 transition-colors hover:bg-white ${
                        isEntryExpanded ? 'bg-white' : ''
                      }`}
                      onClick={() => hasMultiLine && toggleExpand(index)}
                    >
                      <div className="flex items-start gap-2">
                        <span className="w-20 shrink-0 text-gray-500">
                          {formatTimestamp(log.timestamp)}
                        </span>
                        <span className="shrink-0">
                          <LevelIcon level={log.level} />
                        </span>
                        <span className="max-w-[200px] shrink-0 truncate text-purple-700" title={log.logger_name}>
                          [{log.logger_name}]
                        </span>
                        <span
                          className={`flex-1 ${levelColors[log.level as LogLevel] || 'text-gray-800'} ${
                            !isEntryExpanded && hasMultiLine ? 'truncate' : ''
                          }`}
                        >
                          {isEntryExpanded ? (
                            <pre className="whitespace-pre-wrap break-all">{log.message}</pre>
                          ) : (
                            log.message.split('\n')[0]
                          )}
                        </span>
                        {hasMultiLine && (
                          <span className="shrink-0 text-gray-400">
                            {isEntryExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-200 p-3 text-sm text-gray-600">
            {isStreaming ? (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Auto-refreshing every 2 seconds
              </span>
            ) : (
              <span>Click Start to enable live log streaming</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
