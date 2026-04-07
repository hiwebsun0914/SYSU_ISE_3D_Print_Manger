import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import {
  Server,
  Database,
  HardDrive,
  Cpu,
  MemoryStick,
  Printer,
  Archive,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  RefreshCw,
  Plug,
  FolderKanban,
  Palette,
  Bug,
  Download,
  Headphones,
  FolderOpen,
} from 'lucide-react';
import { api, supportApi } from '../api/client';
import { Card } from '../components/Card';
import { LogViewer } from '../components/LogViewer';
import { formatDateTime, type TimeFormat } from '../utils/date';

function formatBytes(bytes: number): string {
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
  color = 'text-bambu-green',
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  subValue?: string;
  color?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className={`rounded-lg bg-gray-100 p-2 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="truncate text-lg font-semibold text-gray-900">{value}</p>
        {subValue && <p className="mt-0.5 text-xs text-gray-500">{subValue}</p>}
      </div>
    </div>
  );
}

function ProgressBar({ percent, color = 'bg-bambu-green' }: { percent: number; color?: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className={`h-full ${color} transition-all duration-300`}
        style={{ width: `${Math.min(100, percent)}%` }}
      />
    </div>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-bambu-green" />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </Card>
  );
}

export function SystemInfoPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [bundleError, setBundleError] = useState<string | null>(null);
  const [bundleDownloading, setBundleDownloading] = useState(false);
  const [debugToggling, setDebugToggling] = useState(false);

  const { data: systemInfo, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['systemInfo'],
    queryFn: api.getSystemInfo,
    refetchInterval: 30000, // Auto-refresh every 30 seconds
  });

  const { data: debugLoggingState } = useQuery({
    queryKey: ['debugLogging'],
    queryFn: supportApi.getDebugLoggingState,
    staleTime: 10 * 1000, // 10 seconds
    refetchInterval: 10 * 1000,
  });

  const { data: settings } = useQuery({
    queryKey: ['settings'],
    queryFn: api.getSettings,
  });

  const { data: libraryStats } = useQuery({
    queryKey: ['library-stats'],
    queryFn: api.getLibraryStats,
  });

  const timeFormat: TimeFormat = settings?.time_format || 'system';

  const handleToggleDebugLogging = async () => {
    setDebugToggling(true);
    try {
      const newState = await supportApi.setDebugLogging(!debugLoggingState?.enabled);
      // Immediately update the cache with the new state (includes fresh enabled_at timestamp)
      queryClient.setQueryData(['debugLogging'], newState);
    } catch (err) {
      console.error('Failed to toggle debug logging:', err);
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
      setBundleError(err instanceof Error ? err.message : 'Failed to download support bundle');
    } finally {
      setBundleDownloading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-bambu-green animate-spin" />
      </div>
    );
  }

  if (!systemInfo) {
    return (
      <div className="p-6 text-center text-gray-500">
        {t('system.failedToLoad', 'Failed to load system information')}
      </div>
    );
  }

  const diskColor =
    systemInfo.storage.disk_percent_used > 90
      ? 'bg-red-500'
      : systemInfo.storage.disk_percent_used > 75
      ? 'bg-yellow-500'
      : 'bg-bambu-green';

  const memoryColor =
    systemInfo.memory.percent_used > 90
      ? 'bg-red-500'
      : systemInfo.memory.percent_used > 75
      ? 'bg-yellow-500'
      : 'bg-bambu-green';

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('system.title', 'System Information')}</h1>
          <p className="mt-1 text-gray-600">
            {t('system.subtitle', 'Monitor system resources and database statistics')}
          </p>
        </div>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isFetching ? 'animate-spin' : ''}`} />
          {t('common.refresh', 'Refresh')}
        </button>
      </div>

      {/* Application Info */}
      <Section title={t('system.application', 'Application')} icon={Server}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            icon={Server}
            label={t('system.version', 'Version')}
            value={`v${systemInfo.app.version}`}
          />
          <StatCard
            icon={Clock}
            label={t('system.uptime', 'System Uptime')}
            value={systemInfo.system.uptime_formatted}
          />
          <StatCard
            icon={Server}
            label={t('system.hostname', 'Hostname')}
            value={systemInfo.system.hostname}
          />
        </div>
      </Section>

      {/* Support & Troubleshooting */}
      <Section title={t('support.title', 'Support & Troubleshooting')} icon={Headphones}>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            {t('support.description', 'Enable debug logging to capture detailed information, then download a support bundle to share when reporting issues.')}
          </p>

          {/* Debug Logging Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <div className={`rounded-lg p-2 ${debugLoggingState?.enabled ? 'bg-amber-100 text-amber-600' : 'bg-gray-200 text-gray-500'}`}>
                <Bug className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{t('support.debugLogging', 'Debug Logging')}</p>
                <p className="text-sm text-gray-600">
                  {debugLoggingState?.enabled
                    ? t('support.debugLoggingEnabled', 'Capturing detailed logs')
                    : t('support.debugLoggingDisabled', 'Normal logging level')}
                  {debugLoggingState?.enabled && debugLoggingState.duration_seconds !== null && (
                    <span className="text-amber-400 ml-2">
                      ({Math.floor(debugLoggingState.duration_seconds / 60)}m {debugLoggingState.duration_seconds % 60}s)
                    </span>
                  )}
                </p>
              </div>
            </div>
            <button
              onClick={handleToggleDebugLogging}
              disabled={debugToggling}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                debugLoggingState?.enabled
                  ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                  : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
              } disabled:opacity-50`}
            >
              {debugToggling && <Loader2 className="w-4 h-4 animate-spin" />}
              {debugLoggingState?.enabled
                ? t('support.disableDebug', 'Disable')
                : t('support.enableDebug', 'Enable')}
            </button>
          </div>

          {/* Support Bundle Download */}
          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{t('support.supportBundle', 'Support Bundle')}</p>
                <p className="text-sm text-gray-600">
                  {t('support.supportBundleDescription', 'Download system info and logs as a ZIP file')}
                </p>
              </div>
            </div>
            <button
              onClick={handleDownloadBundle}
              disabled={bundleDownloading || !debugLoggingState?.enabled}
              className="flex items-center gap-2 rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-700 transition-colors hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-50"
              title={!debugLoggingState?.enabled ? t('support.enableDebugFirst', 'Enable debug logging first') : undefined}
            >
              {bundleDownloading && <Loader2 className="w-4 h-4 animate-spin" />}
              {t('common.download', 'Download')}
            </button>
          </div>

          {/* Error message */}
          {bundleError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {bundleError}
            </div>
          )}

          {/* Instructions */}
          {!debugLoggingState?.enabled && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-gray-700">
                <span className="font-medium text-amber-700">{t('support.instructions', 'To report an issue:')}</span>
                <br />
                1. {t('support.step1', 'Enable debug logging')}
                <br />
                2. {t('support.step2', 'Reproduce the issue')}
                <br />
                3. {t('support.step3', 'Download the support bundle')}
                <br />
                4. {t('support.step4', 'Attach the ZIP file to your issue report')}
              </p>
            </div>
          )}

          {/* Privacy Info */}
          <div className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-900">{t('support.privacyTitle', 'What\'s in the support bundle?')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="mb-1 font-medium text-emerald-700">{t('support.collected', 'Collected:')}</p>
                <ul className="space-y-0.5 text-gray-600">
                  <li>• {t('support.collectItem1', 'App version and debug mode')}</li>
                  <li>• {t('support.collectItem2', 'OS, architecture, Python version')}</li>
                  <li>• {t('support.collectItem3', 'Database statistics (counts only)')}</li>
                  <li>• {t('support.collectItem4', 'Printer models and nozzle counts')}</li>
                  <li>• {t('support.collectItem5', 'Non-sensitive settings (themes, formats)')}</li>
                  <li>• {t('support.collectItem6', 'Debug logs (sanitized)')}</li>
                  <li>• {t('support.collectItem7', 'Printer connectivity and firmware versions')}</li>
                  <li>• {t('support.collectItem8', 'Integration status (Spoolman, MQTT, HA)')}</li>
                  <li>• {t('support.collectItem9', 'Network interfaces (subnets only)')}</li>
                  <li>• {t('support.collectItem10', 'Python package versions')}</li>
                  <li>• {t('support.collectItem11', 'Database health checks')}</li>
                  <li>• {t('support.collectItem12', 'Docker environment details')}</li>
                </ul>
              </div>
              <div>
                <p className="mb-1 font-medium text-red-700">{t('support.notCollected', 'NOT collected:')}</p>
                <ul className="space-y-0.5 text-gray-600">
                  <li>• {t('support.notItem1', 'Printer names and serial numbers')}</li>
                  <li>• {t('support.notItem2', 'Access codes and passwords')}</li>
                  <li>• {t('support.notItem3', 'Email addresses')}</li>
                  <li>• {t('support.notItem4', 'API keys and tokens')}</li>
                  <li>• {t('support.notItem5', 'Webhook URLs')}</li>
                  <li>• {t('support.notItem6', 'Your hostname or username')}</li>
                  <li>• {t('support.notItem7', 'IP addresses')}</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {t('support.privacyNote', 'Email addresses in logs are replaced with [EMAIL], printer names with [PRINTER], serial numbers with [SERIAL], and IP addresses with [IP].')}
            </p>
          </div>

          {/* Log Viewer */}
          <LogViewer />
        </div>
      </Section>

      {/* Database Stats */}
      <Section title={t('system.database', 'Database')} icon={Database}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <StatCard
            icon={Archive}
            label={t('system.totalArchives', 'Total Archives')}
            value={systemInfo.database.archives}
          />
          <StatCard
            icon={CheckCircle2}
            label={t('system.completed', 'Completed')}
            value={systemInfo.database.archives_completed}
            color="text-green-500"
          />
          <StatCard
            icon={XCircle}
            label={t('system.failed', 'Failed')}
            value={systemInfo.database.archives_failed}
            color="text-red-500"
          />
          <StatCard
            icon={Loader2}
            label={t('system.printing', 'Printing')}
            value={systemInfo.database.archives_printing}
            color="text-yellow-500"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={Printer}
            label={t('system.printers', 'Printers')}
            value={systemInfo.database.printers}
          />
          <StatCard
            icon={Palette}
            label={t('system.filaments', 'Filaments')}
            value={systemInfo.database.filaments}
          />
          <StatCard
            icon={FolderKanban}
            label={t('system.projects', 'Projects')}
            value={systemInfo.database.projects}
          />
          <StatCard
            icon={Plug}
            label={t('system.smartPlugs', 'Smart Plugs')}
            value={systemInfo.database.smart_plugs}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <StatCard
            icon={Clock}
            label={t('system.totalPrintTime', 'Total Print Time')}
            value={systemInfo.database.total_print_time_formatted}
          />
          <StatCard
            icon={Archive}
            label={t('system.totalFilament', 'Total Filament Used')}
            value={`${systemInfo.database.total_filament_kg} kg`}
            subValue={`${systemInfo.database.total_filament_grams.toLocaleString()} g`}
          />
        </div>
      </Section>

      {/* Connected Printers */}
      <Section title={t('system.connectedPrinters', 'Connected Printers')} icon={Printer}>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl font-bold text-bambu-green">
            {systemInfo.printers.connected}
          </div>
          <div className="text-gray-600">
            {t('system.ofTotal', 'of {{total}} printers connected', {
              total: systemInfo.printers.total,
            })}
          </div>
        </div>
        {systemInfo.printers.connected_list.length > 0 ? (
          <div className="space-y-2">
            {systemInfo.printers.connected_list.map((printer) => (
              <div
                key={printer.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-bambu-green" />
                  <span className="font-medium text-gray-900">{printer.name}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{printer.model}</span>
                  <span
                    className={`px-2 py-0.5 rounded ${
                      printer.state === 'RUNNING'
                        ? 'bg-emerald-100 text-emerald-700'
                        : printer.state === 'IDLE'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {printer.state}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">{t('system.noPrintersConnected', 'No printers connected')}</p>
        )}
      </Section>

      {/* Storage */}
      <Section title={t('system.storage', 'Storage')} icon={HardDrive}>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">{t('system.diskUsage', 'Disk Usage')}</span>
              <span className="text-gray-900">
                {systemInfo.storage.disk_used_formatted} / {systemInfo.storage.disk_total_formatted}
              </span>
            </div>
            <ProgressBar percent={systemInfo.storage.disk_percent_used} color={diskColor} />
            <p className="mt-1 text-xs text-gray-500">
              {systemInfo.storage.disk_free_formatted} {t('system.free', 'free')} (
              {(100 - systemInfo.storage.disk_percent_used).toFixed(1)}%)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              icon={Archive}
              label={t('system.archiveStorage', 'Archive Storage')}
              value={systemInfo.storage.archive_size_formatted}
            />
            <StatCard
              icon={Database}
              label={t('system.databaseSize', 'Database Size')}
              value={systemInfo.storage.database_size_formatted}
            />
            {libraryStats && (
              <StatCard
                icon={FolderOpen}
                label={t('system.fileManagerStorage', 'File Manager')}
                value={formatBytes(libraryStats.total_size_bytes)}
                subValue={`${libraryStats.total_files} files, ${libraryStats.total_folders} folders`}
              />
            )}
          </div>
        </div>
      </Section>

      {/* System Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Memory */}
        <Section title={t('system.memory', 'Memory')} icon={MemoryStick}>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{t('system.memoryUsage', 'Memory Usage')}</span>
                <span className="text-gray-900">
                  {systemInfo.memory.used_formatted} / {systemInfo.memory.total_formatted}
                </span>
              </div>
              <ProgressBar percent={systemInfo.memory.percent_used} color={memoryColor} />
              <p className="mt-1 text-xs text-gray-500">
                {systemInfo.memory.available_formatted} {t('system.available', 'available')}
              </p>
            </div>
          </div>
        </Section>

        {/* CPU */}
        <Section title={t('system.cpu', 'CPU')} icon={Cpu}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                icon={Cpu}
                label={t('system.cores', 'Cores')}
                value={systemInfo.cpu.count}
                subValue={`${systemInfo.cpu.count_logical} logical`}
              />
              <StatCard
                icon={Cpu}
                label={t('system.usage', 'Usage')}
                value={`${systemInfo.cpu.percent}%`}
              />
            </div>
          </div>
        </Section>
      </div>

      {/* System Details */}
      <Section title={t('system.systemDetails', 'System Details')} icon={Server}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={Server}
            label={t('system.os', 'Operating System')}
            value={systemInfo.system.platform}
            subValue={systemInfo.system.platform_release}
          />
          <StatCard
            icon={Cpu}
            label={t('system.architecture', 'Architecture')}
            value={systemInfo.system.architecture}
          />
          <StatCard
            icon={Server}
            label={t('system.python', 'Python')}
            value={systemInfo.system.python_version}
          />
          <StatCard
            icon={Clock}
            label={t('system.bootTime', 'Boot Time')}
            value={formatDateTime(systemInfo.system.boot_time, timeFormat)}
          />
        </div>
      </Section>
    </div>
  );
}
