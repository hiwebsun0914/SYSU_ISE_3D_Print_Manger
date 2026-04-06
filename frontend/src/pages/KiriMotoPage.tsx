import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Download,
  FolderOpen,
  Layers,
  Loader2,
  Settings2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api, getAuthToken, type AppSettings, type LibraryFile } from '../api/client';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader } from '../components/Card';
import { useToast } from '../contexts/ToastContext';
import { resolveOnlineSlicerUrlTemplate } from '../utils/onlineSlicer';

declare global {
  interface Window {
    kiri?: {
      frame?: KiriFrameApi;
    };
  }
}

interface KiriFrameApi {
  setFrame: (frame: HTMLIFrameElement, targetOrigin?: string) => void;
  onevent: (event: string, fn: (data: unknown, event: string) => void) => void;
  on: (event: string, fn: (data: unknown, event: string) => void) => void;
  clear: () => void;
  parse: (data: ArrayBuffer | string, type: 'stl' | 'svg') => void;
  setMode: (mode: 'FDM' | 'CAM' | 'LASER' | 'SLA') => void;
}

let kiriBridgePromise: Promise<void> | null = null;

function loadKiriBridge(scriptUrl: string): Promise<void> {
  if (window.kiri?.frame) {
    return Promise.resolve();
  }

  if (kiriBridgePromise) {
    return kiriBridgePromise;
  }

  kiriBridgePromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-kiri-bridge="true"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Kiri:Moto bridge')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.dataset.kiriBridge = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Kiri:Moto bridge'));
    document.head.appendChild(script);
  });

  return kiriBridgePromise;
}

function getKiriOrigin(url: string): string {
  try {
    return new URL(url).origin;
  } catch {
    return 'https://grid.space';
  }
}

function isStlFile(fileType: string | undefined, filename: string): boolean {
  return (fileType || '').toLowerCase() === 'stl' || filename.toLowerCase().endsWith('.stl');
}

export function KiriMotoPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [searchParams] = useSearchParams();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const pendingModelRef = useRef<{ key: string; buffer: ArrayBuffer } | null>(null);
  const loadedModelKeyRef = useRef<string | null>(null);
  const frameBoundRef = useRef(false);

  const [bridgeReady, setBridgeReady] = useState(false);
  const [kiriReady, setKiriReady] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [loadError, setLoadError] = useState<string | null>(null);

  const fileId = Number(searchParams.get('fileId') || '');
  const requestedFolderIdParam = searchParams.get('folderId');
  const requestedFolderId = requestedFolderIdParam ? Number(requestedFolderIdParam) : null;
  const directDownloadUrl = searchParams.get('downloadUrl') || '';
  const directFilename = searchParams.get('filename') || '';
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

  const sourceFilename = file?.filename || directFilename;
  const sourceFileType = file?.file_type || '';
  const autoLoadSupported = isStlFile(sourceFileType, sourceFilename);
  const activeLaunchUrl = resolveOnlineSlicerUrlTemplate((settings?.online_orca_slicer_url || '').trim());
  const activeEmbed = settings?.online_orca_slicer_embed ?? true;
  const kiriOrigin = getKiriOrigin(activeLaunchUrl || 'https://grid.space/kiri/');
  const kiriBridgeUrl = `${kiriOrigin}/lib/kiri/run/frame.js`;
  const sourceDownloadUrl = hasValidFileId ? api.getLibraryFileDownloadUrl(fileId) : directDownloadUrl;

  function goBack() {
    const params = new URLSearchParams();
    const folderId = requestedFolderId ?? file?.folder_id ?? null;
    if (folderId !== null && folderId !== undefined) {
      params.set('folder', String(folderId));
    }
    navigate(`/files${params.toString() ? `?${params.toString()}` : ''}`);
  }

  function pushPendingModelIntoKiri() {
    const pendingModel = pendingModelRef.current;
    const frameApi = window.kiri?.frame;

    if (!kiriReady || !pendingModel || !frameApi || loadedModelKeyRef.current === pendingModel.key) {
      return;
    }

    try {
      setStatusMessage(t('kiriMoto.status.pushingModel'));
      setLoadError(null);
      frameApi.setMode('FDM');
      frameApi.clear();
      frameApi.parse(pendingModel.buffer.slice(0), 'stl');
      loadedModelKeyRef.current = pendingModel.key;
    } catch (error) {
      const message = error instanceof Error ? error.message : t('kiriMoto.status.modelLoadFailed');
      setLoadError(message);
      setStatusMessage(t('kiriMoto.status.modelLoadFailed'));
    }
  }

  useEffect(() => {
    if (!activeEmbed || !activeLaunchUrl) {
      return;
    }

    setStatusMessage(t('kiriMoto.status.loadingBridge'));

    loadKiriBridge(kiriBridgeUrl)
      .then(() => {
        setBridgeReady(true);
      })
      .catch((error) => {
        const message = error instanceof Error ? error.message : t('kiriMoto.status.bridgeFailed');
        setLoadError(message);
        setStatusMessage(t('kiriMoto.status.bridgeFailed'));
      });
  }, [activeEmbed, activeLaunchUrl, kiriBridgeUrl, t]);

  useEffect(() => {
    if (!bridgeReady || !iframeRef.current || !activeLaunchUrl || frameBoundRef.current || !window.kiri?.frame) {
      return;
    }

    const frameApi = window.kiri.frame;
    frameApi.setFrame(iframeRef.current, kiriOrigin);
    frameApi.on('init-done', () => {
      setKiriReady(true);
      setStatusMessage(t('kiriMoto.status.workspaceReady'));
    });
    frameApi.on('widget.add', () => {
      setStatusMessage(t('kiriMoto.status.modelLoaded'));
      setLoadError(null);
    });
    frameApi.on('slice.error', () => {
      setLoadError(t('kiriMoto.status.modelLoadFailed'));
    });
    frameBoundRef.current = true;
  }, [activeLaunchUrl, bridgeReady, kiriOrigin, t]);

  useEffect(() => {
    if (!autoLoadSupported || !sourceDownloadUrl || !sourceFilename) {
      return;
    }

    let cancelled = false;
    const key = `${sourceFilename}:${sourceDownloadUrl}`;
    setStatusMessage(t('kiriMoto.status.fetchingModel'));

    const headers: Record<string, string> = {};
    const authToken = getAuthToken();
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    fetch(sourceDownloadUrl, { headers })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.arrayBuffer();
      })
      .then((buffer) => {
        if (cancelled) {
          return;
        }
        pendingModelRef.current = { key, buffer };
        if (kiriReady) {
          pushPendingModelIntoKiri();
        } else {
          setStatusMessage(t('kiriMoto.status.waitingForWorkspace'));
        }
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }
        const message = error instanceof Error ? error.message : t('kiriMoto.status.modelLoadFailed');
        setLoadError(message);
        setStatusMessage(t('kiriMoto.status.modelLoadFailed'));
      });

    return () => {
      cancelled = true;
    };
  }, [autoLoadSupported, kiriReady, sourceDownloadUrl, sourceFilename, t]);

  useEffect(() => {
    pushPendingModelIntoKiri();
  }, [kiriReady]);

  async function handleDownloadSource() {
    try {
      if (hasValidFileId) {
        await api.downloadLibraryFile(fileId, sourceFilename || undefined);
        return;
      }

      if (sourceDownloadUrl) {
        window.open(sourceDownloadUrl, '_blank', 'noopener,noreferrer');
      }
    } catch {
      showToast(t('kiriMoto.toast.downloadFailed'), 'error');
    }
  }

  const unavailable = !activeLaunchUrl;

  return (
    <div className="h-full flex flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-white">
            <Layers className="w-5 h-5 text-bambu-green" />
            <h1 className="text-xl font-semibold">{t('settings.slicerOrcaSlicer')}</h1>
          </div>
          <p className="text-sm text-bambu-gray mt-1">
            {sourceFilename
              ? t('kiriMoto.descriptionWithFile', { filename: sourceFilename })
              : t('kiriMoto.description')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary" onClick={goBack}>
            <ArrowLeft className="w-4 h-4" />
            {t('kiriMoto.backToFiles')}
          </Button>
          <Button variant="secondary" onClick={() => navigate('/settings?tab=network')}>
            <Settings2 className="w-4 h-4" />
            {t('kiriMoto.settings')}
          </Button>
          {activeLaunchUrl && (
            <Button variant="secondary" onClick={() => window.open(activeLaunchUrl, '_blank', 'noopener,noreferrer')}>
              <ArrowUpRight className="w-4 h-4" />
              {t('kiriMoto.openInNewTab')}
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[360px_minmax(0,1fr)] flex-1 min-h-0">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-white">{t('kiriMoto.sourceTitle')}</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-bambu-gray">
              {sourceFilename ? (
                <>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-bambu-gray">
                      {t('kiriMoto.sourceFile')}
                    </div>
                    <div className="mt-2 rounded-lg border border-bambu-dark-tertiary bg-bambu-dark px-3 py-2 text-xs text-white break-all">
                      {sourceFilename}
                    </div>
                  </div>
                  <p>
                    {autoLoadSupported
                      ? t('kiriMoto.autoLoadReady')
                      : t('kiriMoto.autoLoadUnsupported')}
                  </p>
                  {sourceDownloadUrl && (
                    <Button variant="secondary" onClick={handleDownloadSource}>
                      <Download className="w-4 h-4" />
                      {t('kiriMoto.downloadSource')}
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <p>{t('kiriMoto.manualLaunchDescription')}</p>
                  <Button variant="secondary" onClick={() => navigate('/files')}>
                    <FolderOpen className="w-4 h-4" />
                    {t('kiriMoto.backToFiles')}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-white">{t('kiriMoto.instructionsTitle')}</h2>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-bambu-gray">
              <p>{t('kiriMoto.instructions.step1')}</p>
              <p>{t('kiriMoto.instructions.step2')}</p>
              <p>{t('kiriMoto.instructions.step3')}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="min-h-[540px] flex flex-col overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-white">{t('kiriMoto.browserTitle')}</h2>
              {statusMessage && (
                <div className="flex items-center gap-2 text-xs text-bambu-gray">
                  {!loadError && <Loader2 className={`w-4 h-4 ${statusMessage === t('kiriMoto.status.modelLoaded') ? '' : 'animate-spin'}`} />}
                  <span>{statusMessage}</span>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-1 min-h-0">
            {unavailable && (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center text-bambu-gray">
                <AlertTriangle className="w-12 h-12 text-yellow-400" />
                <div>
                  <p className="text-white font-medium">{t('kiriMoto.unavailableTitle')}</p>
                  <p className="mt-1">{t('kiriMoto.unavailableDescription')}</p>
                </div>
                <Button variant="secondary" onClick={() => navigate('/settings?tab=network')}>
                  <Settings2 className="w-4 h-4" />
                  {t('kiriMoto.settings')}
                </Button>
              </div>
            )}

            {!unavailable && loadError && (
              <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                {loadError}
              </div>
            )}

            {!unavailable && !activeEmbed && (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center text-bambu-gray">
                <ArrowUpRight className="w-12 h-12 text-bambu-green" />
                <div>
                  <p className="text-white font-medium">{t('kiriMoto.externalModeTitle')}</p>
                  <p className="mt-1">{t('kiriMoto.externalModeDescription')}</p>
                </div>
                <Button onClick={() => window.open(activeLaunchUrl, '_blank', 'noopener,noreferrer')}>
                  <ArrowUpRight className="w-4 h-4" />
                  {t('kiriMoto.openInNewTab')}
                </Button>
              </div>
            )}

            {!unavailable && activeEmbed && (
              <iframe
                ref={iframeRef}
                src={activeLaunchUrl}
                title={t('settings.slicerOrcaSlicer')}
                className="h-full w-full border-0 rounded-lg bg-black"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
