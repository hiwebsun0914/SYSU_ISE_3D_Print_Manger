import { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Layers, Loader2, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { api, type LibraryFileListItem, type LibraryFileUploadResponse } from '../api/client';
import { Button } from './Button';

interface SliceStlModalProps {
  file: LibraryFileListItem;
  onClose: () => void;
  onSuccess: (file: LibraryFileUploadResponse) => void;
}

export function SliceStlModal({ file, onClose, onSuccess }: SliceStlModalProps) {
  const { t } = useTranslation();
  const [printerPresetId, setPrinterPresetId] = useState<number | ''>('');
  const [processPresetId, setProcessPresetId] = useState<number | ''>('');
  const [filamentPresetId, setFilamentPresetId] = useState<number | ''>('');
  const [outputFilename, setOutputFilename] = useState(() => file.filename.replace(/\.stl$/i, ''));
  const [arrange, setArrange] = useState(true);
  const [orient, setOrient] = useState(true);

  const { data, isLoading, error } = useQuery({
    queryKey: ['library-slice-presets'],
    queryFn: () => api.getLibrarySlicePresets(),
  });

  const printerPresets = data?.printer ?? [];
  const processPresets = data?.process ?? [];
  const filamentPresets = data?.filament ?? [];

  useEffect(() => {
    if (printerPresetId === '' && printerPresets.length > 0) {
      setPrinterPresetId(printerPresets[0].id);
    }
  }, [printerPresetId, printerPresets]);

  useEffect(() => {
    if (processPresetId === '' && processPresets.length > 0) {
      setProcessPresetId(processPresets[0].id);
    }
  }, [processPresetId, processPresets]);

  useEffect(() => {
    if (filamentPresetId === '' && filamentPresets.length > 0) {
      setFilamentPresetId(filamentPresets[0].id);
    }
  }, [filamentPresetId, filamentPresets]);

  const missingPresetTypes = useMemo(() => {
    const missing: string[] = [];
    if (printerPresets.length === 0) missing.push(t('fileManager.slice.modal.printerPreset'));
    if (processPresets.length === 0) missing.push(t('fileManager.slice.modal.processPreset'));
    if (filamentPresets.length === 0) missing.push(t('fileManager.slice.modal.filamentPreset'));
    return missing;
  }, [filamentPresets.length, printerPresets.length, processPresets.length, t]);

  const sliceMutation = useMutation({
    mutationFn: () => {
      if (printerPresetId === '' || processPresetId === '' || filamentPresetId === '') {
        throw new Error(t('fileManager.slice.toast.selectAllPresets'));
      }
      return api.sliceLibraryFile(file.id, {
        printer_preset_id: printerPresetId,
        process_preset_id: processPresetId,
        filament_preset_id: filamentPresetId,
        output_filename: outputFilename,
        arrange,
        orient,
      });
    },
    onSuccess: (result) => {
      onSuccess(result);
    },
  });

  const canSlice = missingPresetTypes.length === 0 && !!outputFilename.trim();

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-bambu-dark-secondary rounded-lg w-full max-w-xl border border-bambu-dark-tertiary">
        <div className="p-4 border-b border-bambu-dark-tertiary flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-bambu-green" />
              {t('fileManager.slice.title')}
            </h2>
            <p className="text-sm text-bambu-gray mt-1">{file.filename}</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-bambu-dark rounded">
            <X className="w-5 h-5 text-bambu-gray" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="p-3 rounded-lg bg-bambu-green/10 border border-bambu-green/30">
            <p className="text-sm text-bambu-green font-medium">{t('fileManager.slice.description')}</p>
            <p className="text-xs text-bambu-green/80 mt-1">{t('fileManager.slice.hint')}</p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-bambu-green" />
            </div>
          ) : error ? (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-300">
              {error instanceof Error ? error.message : t('common.error')}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    {t('fileManager.slice.modal.printerPreset')}
                  </label>
                  <select
                    value={printerPresetId}
                    onChange={(e) => setPrinterPresetId(Number(e.target.value))}
                    className="w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green"
                    disabled={printerPresets.length === 0}
                  >
                    {printerPresets.map((preset) => (
                      <option key={preset.id} value={preset.id}>{preset.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    {t('fileManager.slice.modal.processPreset')}
                  </label>
                  <select
                    value={processPresetId}
                    onChange={(e) => setProcessPresetId(Number(e.target.value))}
                    className="w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green"
                    disabled={processPresets.length === 0}
                  >
                    {processPresets.map((preset) => (
                      <option key={preset.id} value={preset.id}>{preset.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  {t('fileManager.slice.modal.filamentPreset')}
                </label>
                <select
                  value={filamentPresetId}
                  onChange={(e) => setFilamentPresetId(Number(e.target.value))}
                  className="w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green"
                  disabled={filamentPresets.length === 0}
                >
                  {filamentPresets.map((preset) => (
                    <option key={preset.id} value={preset.id}>{preset.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  {t('fileManager.slice.modal.outputFilename')}
                </label>
                <input
                  type="text"
                  value={outputFilename}
                  onChange={(e) => setOutputFilename(e.target.value)}
                  className="w-full bg-bambu-dark border border-bambu-dark-tertiary rounded px-3 py-2 text-white focus:outline-none focus:border-bambu-green"
                  placeholder={t('fileManager.slice.modal.outputPlaceholder')}
                />
                <p className="text-xs text-bambu-gray mt-1">{t('fileManager.slice.modal.outputHelp')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex items-center gap-2 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary cursor-pointer">
                  <input
                    type="checkbox"
                    checked={orient}
                    onChange={(e) => setOrient(e.target.checked)}
                    className="rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
                  />
                  <div>
                    <div className="text-sm text-white">{t('fileManager.slice.modal.autoOrient')}</div>
                    <div className="text-xs text-bambu-gray">{t('fileManager.slice.modal.autoOrientHelp')}</div>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-lg bg-bambu-dark border border-bambu-dark-tertiary cursor-pointer">
                  <input
                    type="checkbox"
                    checked={arrange}
                    onChange={(e) => setArrange(e.target.checked)}
                    className="rounded border-bambu-dark-tertiary bg-bambu-dark text-bambu-green focus:ring-bambu-green"
                  />
                  <div>
                    <div className="text-sm text-white">{t('fileManager.slice.modal.autoArrange')}</div>
                    <div className="text-xs text-bambu-gray">{t('fileManager.slice.modal.autoArrangeHelp')}</div>
                  </div>
                </label>
              </div>

              {missingPresetTypes.length > 0 && (
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-sm text-amber-300">
                  {t('fileManager.slice.modal.missingPresets', { types: missingPresetTypes.join(', ') })}
                </div>
              )}

              {sliceMutation.error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-300">
                  {sliceMutation.error instanceof Error ? sliceMutation.error.message : t('common.error')}
                </div>
              )}
            </>
          )}
        </div>

        <div className="p-4 border-t border-bambu-dark-tertiary flex justify-end gap-2">
          <Button type="button" variant="secondary" onClick={onClose} disabled={sliceMutation.isPending}>
            {t('common.cancel')}
          </Button>
          <Button
            type="button"
            onClick={() => sliceMutation.mutate()}
            disabled={!canSlice || isLoading || sliceMutation.isPending}
          >
            {sliceMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Layers className="w-4 h-4" />}
            {t('fileManager.slice.submit')}
          </Button>
        </div>
      </div>
    </div>
  );
}
