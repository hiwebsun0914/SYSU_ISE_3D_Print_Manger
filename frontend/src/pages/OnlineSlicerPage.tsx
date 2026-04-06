import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Copy,
  Download,
  FolderOpen,
  Layers,
  Loader2,
  Settings2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api, type AppSettings, type LibraryFile, type LibraryOnlineSlicerSessionResponse, type OnlineSlicerProvider } from '../api/client';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader } from '../components/Card';
import { SliceStlModal } from '../components/SliceStlModal';
import { useToast } from '../contexts/ToastContext';
import { resolveOnlineSlicerUrlTemplate } from '../utils/onlineSlicer';

interface OnlineSlicerPageProps {
  provider?: OnlineSlicerProvider;
}

function getProviderRoute(provider: OnlineSlicerProvider) {
  return provider === 'orcaslicer' ? '/orca-slicer' : '/slicer';
}

export function OnlineSlicerPage({ provider = 'bambu_studio' }: OnlineSlicerPageProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [searchParams] = useSearchParams();
  const [session, setSession] = useState<LibraryOnlineSlicerSessionResponse | null>(null);
  const [showQuickSlice, setShowQuickSlice] = useState(false);

  const providerName = provider === 'orcaslicer'
    ? t('settings.slicerOrcaSlicer')
    : t('settings.slicerBambuStudio');

  const fileId = Number(searchParams.get('fileId') || '');
  const requestedFolderIdParam = searchParams.get('folderId');
  const requestedFolderId = requestedFolderIdParam ? Number(requestedFolderIdParam) : null;
  const hasValidFileId = Number.isInteger(fileId) && fileId > 0;

  const { data: settings } = useQuery<AppSettings>({
    queryKey: ['settings'],
    queryFn: api.getSettings,
  });

  const { data: file } = useQuery<LibraryFile>({
    queryKey: ['library-file', fileId],
    queryFn: () => api.getLibraryFile(fileId),
    enabled: hasValidFileId,
  });

  const configuredLaunchUrl = provider === 'orcaslicer'
    ? (settings?.online_orca_slicer_url || '').trim()
    : (settings?.online_slicer_url || '').trim();
  const configuredEmbed = provider === 'orcaslicer'
    ? (settings?.online_orca_slicer_embed ?? true)
    : (settings?.online_slicer_embed ?? true);

  const prepareSessionMutation = useMutation({
    mutationFn: () => api.createLibraryOnlineSlicerSession(fileId, {
      folder_id: requestedFolderId,
      provider,
    }),
    onSuccess: (result) => setSession(result),
  });

  const importOutputsMutation = useMutation({
    mutationFn: () => {
      if (!session) {
        throw new Error(t('onlineSlicer.noActiveSession'));
      }
      return api.importLibraryOnlineSlicerSessionOutputs(session.session_id);
    },
    onSuccess: (result) => {
      if (result.imported.length === 0) {
        showToast(t('onlineSlicer.toast.noOutputs'), 'warning');
        return;
      }

      showToast(t('onlineSlicer.toast.imported', { count: result.imported.length }), 'success');
      queryClient.invalidateQueries({ queryKey: ['library-files'] });
      queryClient.invalidateQueries({ queryKey: ['library-stats'] });
      queryClient.invalidateQueries({ queryKey: ['library-file'] });
    },
  });

  useEffect(() => {
    if (!hasValidFileId || session || prepareSessionMutation.status !== 'idle') {
      return;
    }
    prepareSessionMutation.mutate();
  }, [hasValidFileId, prepareSessionMutation.status, prepareSessionMutation.mutate, session, provider]);

  const goBack = () => {
    const params = new URLSearchParams();
    const folderId = session?.target_folder_id ?? requestedFolderId ?? file?.folder_id ?? null;
    if (folderId !== null && folderId !== undefined) {
      params.set('folder', String(folderId));
    }
    navigate(`/files${params.toString() ? `?${params.toString()}` : ''}`);
  };

  const copyToClipboard = async (value: string, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast(successMessage, 'success');
    } catch {
      showToast(t('onlineSlicer.toast.copyFailed'), 'error');
    }
  };

  const sourceFilename = file?.filename || session?.source_filename || '';
  const canQuickSlice = file?.file_type === 'stl' || sourceFilename.toLowerCase().endsWith('.stl');
  const activeLaunchUrl = session?.launch_url || resolveOnlineSlicerUrlTemplate(configuredLaunchUrl);
  const activeEmbed = session ? session.embed : configuredEmbed;
  const isUnavailable = hasValidFileId ? prepareSessionMutation.isError : !activeLaunchUrl;

  return (
    <div className="h-full flex flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-white">
            <Layers className="w-5 h-5 text-bambu-green" />
            <h1 className="text-xl font-semibold">{providerName}</h1>
          </div>
          <p className="text-sm text-bambu-gray mt-1">
            {sourceFilename
              ? t('onlineSlicer.descriptionWithFile', { filename: sourceFilename })
              : t('onlineSlicer.description')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary" onClick={goBack}>
            <ArrowLeft className="w-4 h-4" />
            {t('onlineSlicer.backToFiles')}
          </Button>
          {canQuickSlice && (
            <Button variant="secondary" onClick={() => setShowQuickSlice(true)}>
              <Layers className="w-4 h-4" />
              {t('onlineSlicer.quickSlice')}
            </Button>
          )}
          <Button variant="secondary" onClick={() => navigate('/settings?tab=network')}>
            <Settings2 className="w-4 h-4" />
            {t('onlineSlicer.settings')}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[360px_minmax(0,1fr)] flex-1 min-h-0">
        <div className="space-y-4">
          {session ? (
            <>
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-white">{t('onlineSlicer.workspaceTitle')}</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-bambu-gray">{t('onlineSlicer.workspaceDescription')}</p>

                  <div className="space-y-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-bambu-gray">
                      {t('onlineSlicer.inputPath')}
                    </div>
                    <div className="rounded-lg border border-bambu-dark-tertiary bg-bambu-dark px-3 py-2 text-xs text-white break-all">
                      {session.workspace_input_file}
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => copyToClipboard(session.workspace_input_file, t('onlineSlicer.toast.inputCopied'))}
                    >
                      <Copy className="w-4 h-4" />
                      {t('onlineSlicer.copyInputPath')}
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-bambu-gray">
                      {t('onlineSlicer.outputPath')}
                    </div>
                    <div className="rounded-lg border border-bambu-dark-tertiary bg-bambu-dark px-3 py-2 text-xs text-white break-all">
                      {session.workspace_output_dir}
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => copyToClipboard(session.workspace_output_dir, t('onlineSlicer.toast.outputCopied'))}
                    >
                      <FolderOpen className="w-4 h-4" />
                      {t('onlineSlicer.copyOutputPath')}
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-medium uppercase tracking-wide text-bambu-gray">
                      {t('onlineSlicer.downloadLink')}
                    </div>
                    <div className="rounded-lg border border-bambu-dark-tertiary bg-bambu-dark px-3 py-2 text-xs text-white break-all">
                      {session.download_url}
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(session.download_url, '_blank', 'noopener,noreferrer')}
                    >
                      <Download className="w-4 h-4" />
                      {t('onlineSlicer.openDownloadLink')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-white">{t('onlineSlicer.instructionsTitle')}</h2>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-bambu-gray">
                  <p>{t('onlineSlicer.instructions.step1')}</p>
                  <p>{t('onlineSlicer.instructions.step2')}</p>
                  <p>{t('onlineSlicer.instructions.step3')}</p>
                  <Button
                    disabled={importOutputsMutation.isPending}
                    onClick={() => importOutputsMutation.mutate()}
                  >
                    {importOutputsMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                    {t('onlineSlicer.importOutputs')}
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold text-white">{t('onlineSlicer.manualModeTitle')}</h2>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-bambu-gray">
                <p>{t('onlineSlicer.manualModeDescription', { provider: providerName })}</p>
                <p>{t('onlineSlicer.manualModeHint')}</p>
                <Button variant="secondary" onClick={() => navigate('/files')}>
                  <FolderOpen className="w-4 h-4" />
                  {t('onlineSlicer.backToFiles')}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="min-h-[540px] flex flex-col overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-white">{providerName}</h2>
              {activeLaunchUrl && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => window.open(activeLaunchUrl, '_blank', 'noopener,noreferrer')}
                >
                  <ArrowUpRight className="w-4 h-4" />
                  {t('onlineSlicer.openInNewTab')}
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-1 min-h-0">
            {prepareSessionMutation.isPending && (
              <div className="h-full flex flex-col items-center justify-center gap-3 text-bambu-gray">
                <Loader2 className="w-10 h-10 text-bambu-green animate-spin" />
                <p>{t('onlineSlicer.preparing')}</p>
              </div>
            )}

            {!prepareSessionMutation.isPending && isUnavailable && (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center text-bambu-gray">
                <AlertTriangle className="w-12 h-12 text-yellow-400" />
                <div>
                  <p className="text-white font-medium">{t('onlineSlicer.unavailableTitle')}</p>
                  <p className="mt-1">
                    {prepareSessionMutation.error instanceof Error
                      ? prepareSessionMutation.error.message
                      : t('onlineSlicer.unavailableDescription')}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Button variant="secondary" onClick={() => navigate('/settings?tab=network')}>
                    <Settings2 className="w-4 h-4" />
                    {t('onlineSlicer.settings')}
                  </Button>
                  {canQuickSlice && (
                    <Button onClick={() => setShowQuickSlice(true)}>
                      <Layers className="w-4 h-4" />
                      {t('onlineSlicer.quickSlice')}
                    </Button>
                  )}
                </div>
              </div>
            )}

            {!prepareSessionMutation.isPending && !isUnavailable && activeLaunchUrl && (
              activeEmbed ? (
                <iframe
                  src={activeLaunchUrl}
                  title={providerName}
                  className="h-full w-full border-0 rounded-lg bg-black"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center text-bambu-gray">
                  <ArrowUpRight className="w-12 h-12 text-bambu-green" />
                  <div>
                    <p className="text-white font-medium">{t('onlineSlicer.openExternallyTitle')}</p>
                    <p className="mt-1">{t('onlineSlicer.openExternallyDescription')}</p>
                  </div>
                  <Button onClick={() => window.open(activeLaunchUrl, '_blank', 'noopener,noreferrer')}>
                    <ArrowUpRight className="w-4 h-4" />
                    {t('onlineSlicer.openInNewTab')}
                  </Button>
                </div>
              )
            )}
          </CardContent>
        </Card>
      </div>

      {showQuickSlice && file && (
        <SliceStlModal
          file={file}
          onClose={() => setShowQuickSlice(false)}
          onSuccess={(result) => {
            setShowQuickSlice(false);
            queryClient.invalidateQueries({ queryKey: ['library-files'] });
            queryClient.invalidateQueries({ queryKey: ['library-stats'] });
            showToast(t('fileManager.slice.toast.success', { filename: result.filename }), 'success');
            navigate(`${getProviderRoute(provider)}?fileId=${file.id}`);
          }}
        />
      )}
    </div>
  );
}
