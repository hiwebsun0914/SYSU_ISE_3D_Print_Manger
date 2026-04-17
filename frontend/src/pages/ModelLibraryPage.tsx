import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ArrowUpRight,
  BookOpen,
  Clipboard,
  ExternalLink,
  Link2,
  Search,
  Send,
  ShieldAlert,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader } from '../components/Card';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import {
  buildMakerWorldCnSearchUrl,
  getMakerWorldModelDisplayName,
  isMakerWorldCnModelUrl,
  MAKERWORLD_CN_EXPLORE_URL,
} from '../utils/makerWorld';

const CONTACT_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidContactEmail(email: string): boolean {
  return CONTACT_EMAIL_RE.test(email.trim());
}

function openExternalUrl(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function ModelLibraryPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [requesterName, setRequesterName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [modelUrl, setModelUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);

  const trimmedModelUrl = modelUrl.trim();
  const trimmedSearchKeyword = searchKeyword.trim();
  const canSubmitRequest = hasPermission('queue:create');
  const isValidModelUrl = isMakerWorldCnModelUrl(trimmedModelUrl);
  const modelTitlePreview = isValidModelUrl
    ? getMakerWorldModelDisplayName(trimmedModelUrl, t('queue.request.defaultTitle'))
    : null;

  const createRequestMutation = useMutation({
    mutationFn: (data: {
      student_id: string;
      requester_name: string;
      contact_email: string;
      request_model_url: string;
      request_notes: string;
    }) =>
      api.addToQueue({
        custom_request: true,
        student_id: data.student_id,
        requester_name: data.requester_name,
        contact_email: data.contact_email,
        request_model_url: data.request_model_url,
        request_notes: data.request_notes,
        manual_start: true,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      showToast(t('modelLibrary.toast.requestSubmitted'));
      navigate('/queue');
    },
    onError: () => {
      showToast(t('modelLibrary.toast.requestFailed'), 'error');
    },
  });

  const handleSubmit = () => {
    const trimmedStudentId = studentId.trim();
    const trimmedRequesterName = requesterName.trim();
    const trimmedContactEmail = contactEmail.trim();
    const trimmedNotes = notes.trim();

    if (!trimmedStudentId || !trimmedRequesterName || !trimmedContactEmail || !trimmedModelUrl) {
      setError(t('queue.request.requiredError'));
      return;
    }

    if (!isValidContactEmail(trimmedContactEmail)) {
      setError(t('queue.request.emailError'));
      return;
    }

    if (!isMakerWorldCnModelUrl(trimmedModelUrl)) {
      setError(t('queue.request.urlError'));
      return;
    }

    setError(null);
    createRequestMutation.mutate({
      student_id: trimmedStudentId,
      requester_name: trimmedRequesterName,
      contact_email: trimmedContactEmail,
      request_model_url: trimmedModelUrl,
      request_notes: trimmedNotes,
    });
  };

  const handleReadClipboard = async () => {
    if (!navigator.clipboard?.readText || !window.isSecureContext) {
      showToast(t('modelLibrary.toast.clipboardUnavailable'), 'error');
      return;
    }

    try {
      const clipboardValue = (await navigator.clipboard.readText()).trim();
      if (!clipboardValue) {
        showToast(t('modelLibrary.toast.clipboardEmpty'), 'error');
        return;
      }

      setModelUrl(clipboardValue);
      setError(null);
      showToast(t('modelLibrary.toast.clipboardLoaded'));
    } catch {
      showToast(t('modelLibrary.toast.clipboardFailed'), 'error');
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div data-onboarding="model-library-heading">
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-bambu-green" />
            {t('modelLibrary.title')}
          </h1>
          <p className="text-bambu-gray mt-1 max-w-3xl">{t('modelLibrary.subtitle')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => openExternalUrl(MAKERWORLD_CN_EXPLORE_URL)}>
            <ArrowUpRight className="w-4 h-4" />
            {t('modelLibrary.openExplore')}
          </Button>
          <Button variant="ghost" onClick={() => navigate('/queue')}>
            <ExternalLink className="w-4 h-4" />
            {t('modelLibrary.viewQueue')}
          </Button>
        </div>
      </div>

      <Card className="border-amber-500/30 bg-amber-500/10">
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-amber-300" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-white font-semibold">{t('modelLibrary.embedNoticeTitle')}</h2>
            <p className="text-sm text-bambu-gray">{t('modelLibrary.embedNoticeDescription')}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <Card>
          <CardHeader>
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-white">{t('modelLibrary.quickLinksTitle')}</h2>
              <p className="text-sm text-bambu-gray">{t('modelLibrary.quickLinksDescription')}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div data-onboarding="model-library-search">
              <label className="block text-sm font-medium text-white mb-2">{t('modelLibrary.searchLabel')}</label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      openExternalUrl(buildMakerWorldCnSearchUrl(trimmedSearchKeyword));
                    }
                  }}
                  placeholder={t('modelLibrary.searchPlaceholder')}
                  className="flex-1 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                />
                <Button onClick={() => openExternalUrl(buildMakerWorldCnSearchUrl(trimmedSearchKeyword))}>
                  <Search className="w-4 h-4" />
                  {t('modelLibrary.openSearch')}
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => openExternalUrl(MAKERWORLD_CN_EXPLORE_URL)}
                className="text-left rounded-xl border border-bambu-dark-tertiary bg-bambu-dark p-4 hover:border-bambu-green/40 hover:bg-bambu-dark-tertiary/60 transition-colors"
              >
                <div className="flex items-center gap-2 text-white font-medium">
                  <ArrowUpRight className="w-4 h-4 text-bambu-green" />
                  {t('modelLibrary.openExplore')}
                </div>
                <p className="mt-2 text-sm text-bambu-gray">{t('modelLibrary.howToStep1')}</p>
              </button>

              <button
                type="button"
                onClick={() => openExternalUrl(buildMakerWorldCnSearchUrl(trimmedSearchKeyword))}
                className="text-left rounded-xl border border-bambu-dark-tertiary bg-bambu-dark p-4 hover:border-bambu-green/40 hover:bg-bambu-dark-tertiary/60 transition-colors"
              >
                <div className="flex items-center gap-2 text-white font-medium">
                  <Search className="w-4 h-4 text-bambu-green" />
                  {t('modelLibrary.openSearch')}
                </div>
                <p className="mt-2 text-sm text-bambu-gray">{t('modelLibrary.howToStep2')}</p>
              </button>
            </div>

            <div className="rounded-xl border border-bambu-dark-tertiary bg-bambu-dark p-4">
              <h3 className="text-white font-medium mb-3">{t('modelLibrary.howToTitle')}</h3>
              <div className="space-y-2 text-sm text-bambu-gray">
                <p>{t('modelLibrary.howToStep1')}</p>
                <p>{t('modelLibrary.howToStep2')}</p>
                <p>{t('modelLibrary.howToStep3')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-white">{t('modelLibrary.requestTitle')}</h2>
              <p className="text-sm text-bambu-gray">{t('modelLibrary.requestDescription')}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">{t('queue.request.studentId')}</label>
                <input
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">{t('queue.request.requesterName')}</label>
                <input
                  value={requesterName}
                  onChange={(e) => setRequesterName(e.target.value)}
                  className="w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">{t('queue.request.contactEmail')}</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder={t('queue.request.contactEmailPlaceholder')}
                className="w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <label className="block text-sm font-medium text-white">{t('queue.request.modelUrl')}</label>
                <div className="flex items-center gap-2">
                  <Button type="button" size="sm" variant="ghost" onClick={handleReadClipboard}>
                    <Clipboard className="w-4 h-4" />
                    {t('modelLibrary.readClipboard')}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    disabled={!trimmedModelUrl}
                    onClick={() => openExternalUrl(trimmedModelUrl)}
                  >
                    <Link2 className="w-4 h-4" />
                    {t('modelLibrary.openModel')}
                  </Button>
                </div>
              </div>
              <input
                value={modelUrl}
                onChange={(e) => setModelUrl(e.target.value)}
                placeholder={t('queue.request.urlPlaceholder')}
                className={`w-full px-3 py-2 bg-bambu-dark border rounded-lg text-white focus:border-bambu-green focus:outline-none ${
                  trimmedModelUrl && !isValidModelUrl ? 'border-red-500/60' : 'border-bambu-dark-tertiary'
                }`}
              />
              <p className="text-xs text-bambu-gray mt-2">{t('queue.request.urlHint')}</p>
              {modelTitlePreview && (
                <div className="mt-3 rounded-lg border border-bambu-green/20 bg-bambu-green/10 px-3 py-2 text-sm text-bambu-green-light">
                  <span className="font-medium">{t('modelLibrary.previewLabel')}</span> {modelTitlePreview}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">{t('queue.request.notes')}</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder={t('modelLibrary.notesPlaceholder')}
                className="w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none resize-y"
              />
            </div>

            {!canSubmitRequest && (
              <div className="text-sm text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
                {t('modelLibrary.permissionHint')}
              </div>
            )}

            {error && (
              <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <Button type="button" variant="secondary" onClick={() => navigate('/queue')}>
                <ExternalLink className="w-4 h-4" />
                {t('modelLibrary.viewQueue')}
              </Button>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmitRequest || createRequestMutation.isPending}
                title={!canSubmitRequest ? t('modelLibrary.permissionHint') : undefined}
              >
                <Send className="w-4 h-4" />
                {createRequestMutation.isPending ? t('common.saving') : t('modelLibrary.submit')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
