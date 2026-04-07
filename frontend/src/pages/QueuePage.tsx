import { useState, useMemo, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueries, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Clock,
  Trash2,
  Play,
  Plus,
  X,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  Printer,
  GripVertical,
  SkipForward,
  ExternalLink,
  Power,
  StopCircle,
  Pencil,
  RefreshCw,
  Timer,
  ListOrdered,
  Layers,
  ArrowUp,
  ArrowDown,
  Hand,
  Check,
  CheckSquare,
  Square,
  User,
  Pause,
  Weight,
  Mail,
  EyeOff,
  Lock,
} from 'lucide-react';
import { api } from '../api/client';
import { type TimeFormat, formatETA, formatDuration, formatRelativeTime, parseUTCDate } from '../utils/date';
import type { PrintQueueItem, PrintQueueBulkUpdate, Permission } from '../api/client';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { ConfirmModal } from '../components/ConfirmModal';
import { PrintModal } from '../components/PrintModal';
import { useToast } from '../contexts/ToastContext';
import { useAuth } from '../contexts/AuthContext';

const MAKERWORLD_URL_PREFIX = 'https://makerworld.com.cn/zh/';
const CONTACT_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatWeight(g: number, useKg = false): string {
  if (useKg && g >= 1000) return `${(g / 1000).toFixed(1)}kg`;
  return `${Math.round(g)}g`;
}

function isValidContactEmail(email: string): boolean {
  return CONTACT_EMAIL_RE.test(email.trim());
}

function getCustomRequestTitle(item: PrintQueueItem, fallbackTitle: string): string {
  if (!item.request_model_url) return fallbackTitle;

  try {
    const pathname = new URL(item.request_model_url).pathname;
    const segments = pathname.split('/').filter(Boolean);
    const modelsIndex = segments.findIndex(segment => segment === 'models');
    const rawSlug = modelsIndex >= 0 ? segments[modelsIndex + 1] : segments[segments.length - 1];
    if (!rawSlug) return fallbackTitle;

    const decoded = decodeURIComponent(rawSlug).replace(/^\d+-/, '').replace(/[-_]+/g, ' ').trim();
    return decoded || rawSlug;
  } catch {
    return fallbackTitle;
  }
}

function getQueueItemDisplayName(item: PrintQueueItem, fallbackCustomTitle: string): string {
  if (item.custom_request) {
    return getCustomRequestTitle(item, fallbackCustomTitle);
  }
  return item.archive_name || item.library_file_name || `File #${item.archive_id || item.library_file_id}`;
}

function StatusBadge({ status, waitingReason, printerState, t }: { status: PrintQueueItem['status']; waitingReason?: string | null; printerState?: string | null; t: (key: string) => string }) {
  // Special case: pending with waiting_reason shows as "Waiting"
  if (status === 'pending' && waitingReason) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border text-purple-400 bg-purple-400/10 border-purple-400/20">
        <Clock className="w-3.5 h-3.5" />
        {t('queue.status.waiting')}
      </span>
    );
  }

  // Special case: printing but printer is paused
  if (status === 'printing' && printerState === 'PAUSE') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border text-yellow-400 bg-yellow-400/10 border-yellow-400/20">
        <Pause className="w-3.5 h-3.5" />
        {t('queue.status.paused')}
      </span>
    );
  }

  const config = {
    pending: { icon: Clock, color: 'text-status-warning bg-status-warning/10 border-status-warning/20', label: t('queue.status.pending') },
    printing: { icon: Play, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20', label: t('queue.status.printing') },
    completed: { icon: CheckCircle, color: 'text-status-ok bg-status-ok/10 border-status-ok/20', label: t('queue.status.completed') },
    failed: { icon: XCircle, color: 'text-status-error bg-status-error/10 border-status-error/20', label: t('queue.status.failed') },
    skipped: { icon: SkipForward, color: 'text-orange-400 bg-orange-400/10 border-orange-400/20', label: t('queue.status.skipped') },
    cancelled: { icon: X, color: 'text-gray-400 bg-gray-400/10 border-gray-400/20', label: t('queue.status.cancelled') },
  };

  const { icon: Icon, color, label } = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${color}`}>
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}

// Bulk edit modal for multiple queue items
function BulkEditModal({
  selectedCount,
  printers,
  onSave,
  onClose,
  isSaving,
  canControlPrinter,
  t,
}: {
  selectedCount: number;
  printers: { id: number; name: string }[];
  onSave: (data: Partial<PrintQueueBulkUpdate>) => void;
  onClose: () => void;
  isSaving: boolean;
  canControlPrinter: boolean;
  t: (key: string, options?: Record<string, unknown>) => string;
}) {
  const [printerId, setPrinterId] = useState<number | null | 'unchanged'>('unchanged');
  const [manualStart, setManualStart] = useState<boolean | 'unchanged'>('unchanged');
  const [autoOffAfter, setAutoOffAfter] = useState<boolean | 'unchanged'>('unchanged');
  const [requirePreviousSuccess, setRequirePreviousSuccess] = useState<boolean | 'unchanged'>('unchanged');
  const [bedLevelling, setBedLevelling] = useState<boolean | 'unchanged'>('unchanged');
  const [flowCali, setFlowCali] = useState<boolean | 'unchanged'>('unchanged');
  const [vibrationCali, setVibrationCali] = useState<boolean | 'unchanged'>('unchanged');
  const [layerInspect, setLayerInspect] = useState<boolean | 'unchanged'>('unchanged');
  const [timelapse, setTimelapse] = useState<boolean | 'unchanged'>('unchanged');
  const [useAms, setUseAms] = useState<boolean | 'unchanged'>('unchanged');

  const handleSave = () => {
    const data: Partial<PrintQueueBulkUpdate> = {};
    if (printerId !== 'unchanged') data.printer_id = printerId;
    if (manualStart !== 'unchanged') data.manual_start = manualStart;
    if (autoOffAfter !== 'unchanged') data.auto_off_after = autoOffAfter;
    if (requirePreviousSuccess !== 'unchanged') data.require_previous_success = requirePreviousSuccess;
    if (bedLevelling !== 'unchanged') data.bed_levelling = bedLevelling;
    if (flowCali !== 'unchanged') data.flow_cali = flowCali;
    if (vibrationCali !== 'unchanged') data.vibration_cali = vibrationCali;
    if (layerInspect !== 'unchanged') data.layer_inspect = layerInspect;
    if (timelapse !== 'unchanged') data.timelapse = timelapse;
    if (useAms !== 'unchanged') data.use_ams = useAms;
    onSave(data);
  };

  const hasChanges = printerId !== 'unchanged' || manualStart !== 'unchanged' || autoOffAfter !== 'unchanged' ||
    requirePreviousSuccess !== 'unchanged' || bedLevelling !== 'unchanged' || flowCali !== 'unchanged' ||
    vibrationCali !== 'unchanged' || layerInspect !== 'unchanged' || timelapse !== 'unchanged' || useAms !== 'unchanged';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-bambu-dark-tertiary">
          <h2 className="text-lg font-semibold text-white">
            {t('queue.bulkEdit.title', { count: selectedCount })}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-bambu-dark rounded">
            <X className="w-5 h-5 text-bambu-gray" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <p className="text-sm text-bambu-gray">
            {t('queue.bulkEdit.description')}
          </p>

          {/* Printer Assignment */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">{t('queue.bulkEdit.printer')}</label>
            <select
              value={printerId === null ? 'null' : printerId === 'unchanged' ? 'unchanged' : String(printerId)}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'unchanged') setPrinterId('unchanged');
                else if (val === 'null') setPrinterId(null);
                else setPrinterId(Number(val));
              }}
              className="w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
            >
              <option value="unchanged">{t('queue.bulkEdit.noChange')}</option>
              <option value="null">{t('queue.filter.unassigned')}</option>
              {printers.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Queue Options */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">{t('queue.bulkEdit.queueOptions')}</label>
            <div className="space-y-2">
              <TriStateToggle label={t('queue.bulkEdit.staged')} value={manualStart} onChange={setManualStart} t={t} />
              <TriStateToggle label={t('queue.bulkEdit.autoPowerOff')} value={autoOffAfter} onChange={setAutoOffAfter} disabled={!canControlPrinter} t={t} />
              <TriStateToggle label={t('queue.bulkEdit.requirePrevious')} value={requirePreviousSuccess} onChange={setRequirePreviousSuccess} t={t} />
            </div>
          </div>

          {/* Print Options */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">{t('queue.bulkEdit.printOptions')}</label>
            <div className="space-y-2">
              <TriStateToggle label={t('queue.bulkEdit.bedLevelling')} value={bedLevelling} onChange={setBedLevelling} t={t} />
              <TriStateToggle label={t('queue.bulkEdit.flowCalibration')} value={flowCali} onChange={setFlowCali} t={t} />
              <TriStateToggle label={t('queue.bulkEdit.vibrationCalibration')} value={vibrationCali} onChange={setVibrationCali} t={t} />
              <TriStateToggle label={t('queue.bulkEdit.layerInspection')} value={layerInspect} onChange={setLayerInspect} t={t} />
              <TriStateToggle label={t('queue.bulkEdit.timelapse')} value={timelapse} onChange={setTimelapse} t={t} />
              <TriStateToggle label={t('queue.bulkEdit.useAms')} value={useAms} onChange={setUseAms} t={t} />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-4 border-t border-bambu-dark-tertiary">
          <Button variant="secondary" onClick={onClose}>{t('common.cancel')}</Button>
          <Button
            onClick={handleSave}
            disabled={!hasChanges || isSaving}
          >
            {isSaving ? t('common.saving') : t('queue.bulkEdit.applyChanges')}
          </Button>
        </div>
      </div>
    </div>
  );
}

function QueueRequestModal({
  item,
  onClose,
  onSubmit,
  isSaving,
  t,
}: {
  item?: PrintQueueItem | null;
  onClose: () => void;
  onSubmit: (data: {
    student_id: string;
    requester_name: string;
    contact_email: string;
    request_model_url: string;
    request_notes: string;
  }) => void;
  isSaving: boolean;
  t: (key: string) => string;
}) {
  const [studentId, setStudentId] = useState(item?.student_id ?? '');
  const [requesterName, setRequesterName] = useState(item?.requester_name ?? '');
  const [contactEmail, setContactEmail] = useState(item?.contact_email ?? '');
  const [requestModelUrl, setRequestModelUrl] = useState(item?.request_model_url ?? '');
  const [requestNotes, setRequestNotes] = useState(item?.request_notes ?? '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStudentId(item?.student_id ?? '');
    setRequesterName(item?.requester_name ?? '');
    setContactEmail(item?.contact_email ?? '');
    setRequestModelUrl(item?.request_model_url ?? '');
    setRequestNotes(item?.request_notes ?? '');
    setError(null);
  }, [item]);

  const handleSubmit = () => {
    const trimmedStudentId = studentId.trim();
    const trimmedRequesterName = requesterName.trim();
    const trimmedContactEmail = contactEmail.trim();
    const trimmedRequestModelUrl = requestModelUrl.trim();
    const trimmedRequestNotes = requestNotes.trim();

    if (!trimmedStudentId || !trimmedRequesterName || !trimmedContactEmail || !trimmedRequestModelUrl) {
      setError(t('queue.request.requiredError'));
      return;
    }

    if (!isValidContactEmail(trimmedContactEmail)) {
      setError(t('queue.request.emailError'));
      return;
    }

    if (!trimmedRequestModelUrl.startsWith(MAKERWORLD_URL_PREFIX)) {
      setError(t('queue.request.urlError'));
      return;
    }

    setError(null);
    onSubmit({
      student_id: trimmedStudentId,
      requester_name: trimmedRequesterName,
      contact_email: trimmedContactEmail,
      request_model_url: trimmedRequestModelUrl,
      request_notes: trimmedRequestNotes,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-xl">
        <div className="flex items-center justify-between p-4 border-b border-bambu-dark-tertiary">
          <h2 className="text-lg font-semibold text-white">
            {item ? t('queue.request.edit') : t('queue.request.add')}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-bambu-dark rounded">
            <X className="w-5 h-5 text-bambu-gray" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <p className="text-sm text-bambu-gray">{t('queue.request.description')}</p>

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
            <label className="block text-sm font-medium text-white mb-2">{t('queue.request.modelUrl')}</label>
            <input
              value={requestModelUrl}
              onChange={(e) => setRequestModelUrl(e.target.value)}
              placeholder={t('queue.request.urlPlaceholder')}
              className="w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
            />
            <p className="text-xs text-bambu-gray mt-2">{t('queue.request.urlHint')}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">{t('queue.request.notes')}</label>
            <textarea
              value={requestNotes}
              onChange={(e) => setRequestNotes(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none resize-y"
            />
          </div>

          {error && (
            <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 p-4 border-t border-bambu-dark-tertiary">
          <Button variant="secondary" onClick={onClose}>{t('common.cancel')}</Button>
          <Button onClick={handleSubmit} disabled={isSaving}>
            {isSaving ? t('common.saving') : item ? t('queue.request.save') : t('queue.request.submit')}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Tri-state toggle for bulk edit (unchanged / on / off)
function TriStateToggle({
  label,
  value,
  onChange,
  disabled,
  t,
}: {
  label: string;
  value: boolean | 'unchanged';
  onChange: (val: boolean | 'unchanged') => void;
  disabled?: boolean;
  t: (key: string) => string;
}) {
  return (
    <div className={`flex items-center justify-between py-1 ${disabled ? 'opacity-50' : ''}`}>
      <span className="text-sm text-bambu-gray">{label}</span>
      <div className="flex items-center gap-1 bg-bambu-dark rounded-lg p-0.5">
        <button
          onClick={() => onChange('unchanged')}
          disabled={disabled}
          className={`px-2 py-1 text-xs rounded ${value === 'unchanged' ? 'bg-bambu-dark-tertiary text-white' : 'text-bambu-gray hover:text-white'} disabled:cursor-not-allowed`}
        >
          —
        </button>
        <button
          onClick={() => onChange(false)}
          disabled={disabled}
          className={`px-2 py-1 text-xs rounded ${value === false ? 'bg-red-500/20 text-red-400' : 'text-bambu-gray hover:text-white'} disabled:cursor-not-allowed`}
        >
          {t('common.off')}
        </button>
        <button
          onClick={() => onChange(true)}
          disabled={disabled}
          className={`px-2 py-1 text-xs rounded ${value === true ? 'bg-bambu-green/20 text-bambu-green' : 'text-bambu-gray hover:text-white'} disabled:cursor-not-allowed`}
        >
          {t('common.on')}
        </button>
      </div>
    </div>
  );
}

// Sortable queue item for drag and drop
function SortableQueueItem({
  item,
  position,
  onEdit,
  onCancel,
  onRemove,
  onStop,
  onRequeue,
  onStart,
  onSetCustomStatus,
  timeFormat = 'system',
  isSelected = false,
  isUpdatingStatus = false,
  onToggleSelect,
  hasPermission,
  canModify,
  printerState,
  t,
}: {
  item: PrintQueueItem;
  position?: number;
  onEdit: () => void;
  onCancel: () => void;
  onRemove: () => void;
  onStop: () => void;
  onRequeue: () => void;
  onStart: () => void;
  onSetCustomStatus?: (status: 'pending' | 'printing' | 'completed') => void;
  timeFormat?: TimeFormat;
  isSelected?: boolean;
  isUpdatingStatus?: boolean;
  onToggleSelect?: () => void;
  hasPermission: (permission: Permission) => boolean;
  canModify: (resource: 'queue' | 'archives' | 'library', action: 'update' | 'delete' | 'reprint', createdById: number | null | undefined) => boolean;
  printerState?: string | null;
  t: (key: string, options?: Record<string, unknown>) => string;
}) {
  const { data: status } = useQuery({
    queryKey: ['printerStatus', item.printer_id],
    queryFn: () => api.getPrinterStatus(item.printer_id!),
    refetchInterval: 30000,
    enabled: !item.custom_request && item.printer_id != null && printerState === 'printing',
  });

  const isLibraryFile = !!item.library_file_id && !item.archive_id;
  const { data: archivePlatesData } = useQuery({
    queryKey: ['archive-plates', item.archive_id],
    queryFn: () => api.getArchivePlates(item.archive_id!),
    enabled: !item.custom_request && !!item.archive_id && !isLibraryFile,
  });
  const { data: libraryPlatesData } = useQuery({
    queryKey: ['library-file-plates', item.library_file_id],
    queryFn: () => api.getLibraryFilePlates(item.library_file_id!),
    enabled: !item.custom_request && isLibraryFile && !!item.library_file_id,
  });

  const platesData = isLibraryFile ? libraryPlatesData : archivePlatesData;
  const plates = platesData?.plates ?? [];
  const canReorder = hasPermission('queue:reorder') && !item.custom_request;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, disabled: item.status !== 'pending' || !canReorder });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isPrinting = item.status === 'printing';
  const isPending = item.status === 'pending';
  const isHistory = ['completed', 'failed', 'skipped', 'cancelled'].includes(item.status);
  const isMobileSelectable = isPending && !item.custom_request && !!onToggleSelect;
  const displayName = getQueueItemDisplayName(item, t('queue.request.defaultTitle'));
  const canEdit = canModify('queue', 'update', item.created_by_id);
  const canDelete = canModify('queue', 'delete', item.created_by_id);
  const canEditCustomRequest = canEdit && !item.contact_details_hidden;
  const customStatusValue = item.status === 'printing' || item.status === 'completed' ? item.status : 'pending';

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        group relative bg-bambu-dark-secondary rounded-xl border transition-all duration-200
        ${isDragging ? 'opacity-50 scale-[1.02] shadow-xl z-50' : ''}
        ${isPrinting ? 'border-blue-500/30 bg-gradient-to-r from-blue-500/5 to-transparent' : ''}
        ${isSelected && isMobileSelectable ? 'sm:border-bambu-dark-tertiary border-bambu-green/40' : ''}
        ${!isSelected && !isPrinting ? 'border-bambu-dark-tertiary hover:border-bambu-dark-tertiary/80' : ''}
        ${isMobileSelectable ? 'sm:cursor-default' : ''}
      `}
      onClick={isMobileSelectable ? () => {
        if (window.innerWidth < 640) onToggleSelect?.();
      } : undefined}
    >
      {isMobileSelectable && isSelected && (
        <div className="sm:hidden absolute left-0 top-3 bottom-3 w-1 rounded-full bg-bambu-green" />
      )}

      <div className="flex items-start sm:items-center gap-2 sm:gap-4 p-3 sm:p-4">
        {isPending && !item.custom_request && onToggleSelect && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSelect?.();
            }}
            className={`hidden sm:flex items-center justify-center w-6 h-6 rounded border transition-colors shrink-0 ${
              isSelected
                ? 'bg-bambu-green border-bambu-green text-white'
                : 'border-white/30 bg-black/30 hover:border-bambu-green/50'
            }`}
          >
            {isSelected && <Check className="w-4 h-4" />}
          </button>
        )}

        {isPending ? (
          canReorder ? (
            <div
              {...attributes}
              {...listeners}
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-bambu-dark cursor-grab active:cursor-grabbing hover:bg-bambu-dark-tertiary transition-colors touch-manipulation shrink-0"
            >
              <GripVertical className="w-4 h-4 text-bambu-gray" />
            </div>
          ) : (
            <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-bambu-dark text-bambu-gray text-sm font-medium shrink-0">
              #{position ?? item.position}
            </div>
          )
        ) : position !== undefined ? (
          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-bambu-dark text-bambu-gray text-sm font-medium shrink-0">
            #{position}
          </div>
        ) : (
          <div className="hidden sm:block w-8 shrink-0" />
        )}

        <div className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 bg-bambu-dark rounded-lg overflow-hidden">
          {item.archive_thumbnail ? (
            <img
              src={
                item.plate_id != null
                  ? api.getArchivePlateThumbnail(item.archive_id!, item.plate_id)
                  : api.getArchiveThumbnail(item.archive_id!)
              }
              alt=""
              className="w-full h-full object-cover"
            />
          ) : item.library_file_thumbnail ? (
            <img
              src={
                item.plate_id != null
                  ? api.getLibraryFilePlateThumbnail(item.library_file_id!, item.plate_id)
                  : api.getLibraryFileThumbnailUrl(item.library_file_id!)
              }
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-bambu-gray">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm sm:text-base text-white font-medium truncate">
              {displayName}
              {!item.custom_request && (platesData?.is_multi_plate ?? false) && item.plate_id !== undefined && item.plate_id !== null && ` • ${plates.find(plate => plate.index === item.plate_id)?.name || t('queue.plateNumber', { index: item.plate_id })}`}
            </p>
            {item.custom_request && item.request_model_url ? (
              <a
                href={item.request_model_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bambu-gray hover:text-bambu-green transition-colors flex-shrink-0"
                title={t('queue.request.openLink')}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : item.archive_id ? (
              <Link
                to={`/archives?highlight=${item.archive_id}`}
                className="text-bambu-gray hover:text-bambu-green transition-colors flex-shrink-0"
                title={t('queue.viewArchive')}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            ) : item.library_file_id ? (
              <Link
                to={`/library?highlight=${item.library_file_id}`}
                className="text-bambu-gray hover:text-bambu-green transition-colors flex-shrink-0"
                title={t('queue.viewInFileManager')}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-bambu-gray">
            {item.custom_request ? (
              <>
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {t('queue.request.studentIdValue', { value: item.student_id || '-' })}
                </span>
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {t('queue.request.requesterNameValue', {
                    value: item.contact_details_hidden ? t('queue.request.hiddenValue') : (item.requester_name || '-'),
                  })}
                </span>
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {t('queue.request.contactEmailValue', {
                    value: item.contact_details_hidden ? t('queue.request.hiddenValue') : (item.contact_email || '-'),
                  })}
                </span>
                <span className={`flex items-center gap-1 sm:gap-1.5 ${item.printer_id === null ? 'text-orange-400' : ''}`}>
                  <Printer className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {item.printer_id === null
                    ? t('queue.filter.unassigned')
                    : (item.printer_name || `${t('common.printer')} #${item.printer_id}`)}
                </span>
              </>
            ) : (
              <>
                <span className={`flex items-center gap-1 sm:gap-1.5 ${item.printer_id === null && !item.target_model ? 'text-orange-400' : ''} ${item.target_model ? 'text-blue-400' : ''}`}>
                  <Printer className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="truncate max-w-[120px] sm:max-w-none">
                  {item.target_model
                    ? `${t('queue.filter.any')} ${item.target_model}${item.target_location ? ` @ ${item.target_location}` : ''}${item.required_filament_types?.length ? ` (${item.required_filament_types.join(', ')})` : ''}`
                    : item.printer_id === null
                      ? t('queue.filter.unassigned')
                      : (item.printer_name || `${t('common.printer')} #${item.printer_id}`)}
                  </span>
                </span>
                {item.print_time_seconds && (
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Timer className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {formatDuration(item.print_time_seconds)}
                  </span>
                )}
                {item.filament_used_grams && (
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Weight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {formatWeight(item.filament_used_grams)}
                  </span>
                )}
              </>
            )}
            {item.created_by_username && (
              <span className="hidden sm:flex items-center gap-1.5" title={t('queue.addedBy', { name: item.created_by_username })}>
                <User className="w-3.5 h-3.5" />
                {item.created_by_username}
              </span>
            )}
            {isPending && !item.manual_start && !item.custom_request && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {item.scheduled_time
                  ? ((parseUTCDate(item.scheduled_time)?.getTime() ?? 0) - Date.now() < -60000
                      ? t?.('queue.time.overdue') ?? 'Overdue'
                      : formatRelativeTime(item.scheduled_time, timeFormat, t))
                  : t?.('queue.time.asap') ?? 'ASAP'}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
            {item.custom_request ? (
              <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
                {t('queue.request.badge')}
              </span>
            ) : item.manual_start && (
              <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 flex items-center gap-1">
                <Hand className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {t('queue.badges.staged')}
              </span>
            )}
            {item.require_previous_success && (
              <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                {t('queue.badges.requiresPrevious')}
              </span>
            )}
            {item.auto_off_after && (
              <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 flex items-center gap-1">
                <Power className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {t('queue.badges.autoPowerOff')}
              </span>
            )}
          </div>

          {item.custom_request && item.request_notes && (
            <p className="text-[10px] sm:text-xs text-bambu-gray mt-1.5 sm:mt-2 whitespace-pre-wrap break-words">
              {item.request_notes}
            </p>
          )}

          {isPrinting && status && !item.custom_request && (
            <div className="mt-2 sm:mt-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex-1 bg-bambu-dark-tertiary rounded-full h-1.5 sm:h-2 mr-3">
                  <div
                    className="bg-bambu-green h-1.5 sm:h-2 rounded-full transition-all"
                    style={{ width: `${status.progress || 0}%` }}
                  />
                </div>
                <span className="text-white">{Math.round(status.progress || 0)}%</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-bambu-gray">
                {status.remaining_time != null && status.remaining_time > 0 && (
                  <>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDuration(status.remaining_time * 60)}
                    </span>
                    <span className="text-bambu-green font-medium" title={t('printers.estimatedCompletion')}>
                      ETA {formatETA(status.remaining_time, timeFormat, t)}
                    </span>
                  </>
                )}
                {status.layer_num != null && status.total_layers != null && status.total_layers > 0 && (
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    {status.layer_num}/{status.total_layers}
                  </span>
                )}
              </div>
            </div>
          )}

          {item.waiting_reason && item.status === 'pending' && !item.custom_request && (
            <p className="text-[10px] sm:text-xs text-purple-400 mt-1.5 sm:mt-2 flex items-start gap-1">
              <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <span>{item.waiting_reason}</span>
            </p>
          )}

          {item.error_message && (
            <p className="text-[10px] sm:text-xs text-red-400 mt-1.5 sm:mt-2 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {item.error_message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
          <StatusBadge status={item.status} waitingReason={item.waiting_reason} printerState={printerState} t={t} />

          <div className="flex items-center gap-0.5 sm:gap-1">
            {item.custom_request ? (
              <>
                <select
                  value={customStatusValue}
                  onChange={(e) => onSetCustomStatus?.(e.target.value as 'pending' | 'printing' | 'completed')}
                  disabled={!canEdit || isUpdatingStatus}
                  title={!canEdit ? t('queue.permissions.noStatusChange') : t('queue.request.status')}
                  className="px-2 py-1.5 text-xs sm:text-sm bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none disabled:opacity-50"
                >
                  <option value="pending">{t('queue.status.pending')}</option>
                  <option value="printing">{t('queue.status.printing')}</option>
                  <option value="completed">{t('queue.status.completed')}</option>
                </select>
                {isPending && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onEdit}
                    disabled={!canEditCustomRequest}
                    title={
                      item.contact_details_hidden
                        ? t('queue.permissions.unlockContactsFirst')
                        : !canEdit
                          ? t('queue.permissions.noEdit')
                          : t('common.edit')
                    }
                    className="p-1.5 sm:p-2"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onRemove}
                  disabled={!canDelete}
                  title={!canDelete ? t('queue.permissions.noRemove') : t('common.remove')}
                  className="p-1.5 sm:p-2"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                {isPrinting && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onStop}
                    disabled={!hasPermission('printers:control')}
                    title={!hasPermission('printers:control') ? t('queue.permissions.noStopPrint') : t('queue.actions.stopPrint')}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-1.5 sm:p-2"
                  >
                    <StopCircle className="w-4 h-4" />
                  </Button>
                )}
                {isPending && (
                  <>
                    {item.manual_start && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={onStart}
                        disabled={!hasPermission('printers:control')}
                        title={!hasPermission('printers:control') ? t('queue.permissions.noStartPrint') : t('queue.actions.startPrint')}
                        className="text-bambu-green hover:text-bambu-green-light hover:bg-bambu-green/10 p-1.5 sm:p-2"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onEdit}
                      disabled={!canEdit}
                      title={!canEdit ? t('queue.permissions.noEdit') : t('common.edit')}
                      className="p-1.5 sm:p-2"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onCancel}
                      disabled={!canDelete}
                      title={!canDelete ? t('queue.permissions.noCancel') : t('common.cancel')}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-1.5 sm:p-2"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </>
                )}
                {isHistory && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onRequeue}
                      disabled={!hasPermission('queue:create')}
                      title={!hasPermission('queue:create') ? t('queue.permissions.noRequeue') : t('queue.actions.requeue')}
                      className="text-bambu-green hover:text-bambu-green/80 hover:bg-bambu-green/10 p-1.5 sm:p-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onRemove}
                      disabled={!canDelete}
                      title={!canDelete ? t('queue.permissions.noRemove') : t('common.remove')}
                      className="p-1.5 sm:p-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function QueuePage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission, hasAnyPermission, canModify } = useAuth();
  const [filterPrinter, setFilterPrinter] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterLocation, setFilterLocation] = useState<string>('');
  const [showClearHistoryConfirm, setShowClearHistoryConfirm] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [editingRequestItem, setEditingRequestItem] = useState<PrintQueueItem | null>(null);
  const [contactRevealPassword, setContactRevealPassword] = useState<string | null>(null);
  const [showContactUnlockModal, setShowContactUnlockModal] = useState(false);
  const [contactPasswordInput, setContactPasswordInput] = useState('');
  const [editItem, setEditItem] = useState<PrintQueueItem | null>(null);
  const [requeueItem, setRequeueItem] = useState<PrintQueueItem | null>(null);
  const [confirmAction, setConfirmAction] = useState<{
    type: 'cancel' | 'remove' | 'stop';
    item: PrintQueueItem;
  } | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showBulkEditModal, setShowBulkEditModal] = useState(false);
  const [historySortBy, setHistorySortBy] = useState<'date' | 'name' | 'printer'>(() => {
    const saved = localStorage.getItem('queue.historySortBy');
    return (saved as 'date' | 'name' | 'printer') || 'date';
  });
  const [historySortAsc, setHistorySortAsc] = useState(() => {
    const saved = localStorage.getItem('queue.historySortAsc');
    return saved !== null ? saved === 'true' : false;
  });
  const [pendingSortBy, setPendingSortBy] = useState<'position' | 'name' | 'printer' | 'time'>(() => {
    const saved = localStorage.getItem('queue.pendingSortBy');
    return (saved as 'position' | 'name' | 'printer' | 'time') || 'position';
  });
  const [pendingSortAsc, setPendingSortAsc] = useState(() => {
    const saved = localStorage.getItem('queue.pendingSortAsc');
    return saved !== null ? saved === 'true' : true;
  });

  // Persist sort settings to localStorage
  useEffect(() => {
    localStorage.setItem('queue.historySortBy', historySortBy);
  }, [historySortBy]);

  useEffect(() => {
    localStorage.setItem('queue.historySortAsc', String(historySortAsc));
  }, [historySortAsc]);

  useEffect(() => {
    localStorage.setItem('queue.pendingSortBy', pendingSortBy);
  }, [pendingSortBy]);

  useEffect(() => {
    localStorage.setItem('queue.pendingSortAsc', String(pendingSortAsc));
  }, [pendingSortAsc]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const { data: settings } = useQuery({
    queryKey: ['settings'],
    queryFn: api.getSettings,
  });

  const timeFormat: TimeFormat = settings?.time_format || 'system';

  const { data: queue, isLoading } = useQuery({
    queryKey: ['queue', filterPrinter, filterStatus, !!contactRevealPassword],
    queryFn: () => api.getQueue(
      filterPrinter ?? undefined,
      filterStatus || undefined,
      undefined,
      contactRevealPassword ?? undefined,
    ),
    refetchInterval: 5000,
  });

  const { data: printers } = useQuery({
    queryKey: ['printers'],
    queryFn: () => api.getPrinters(),
  });

  const createRequestMutation = useMutation({
    mutationFn: (data: { student_id: string; requester_name: string; contact_email: string; request_model_url: string; request_notes: string }) =>
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
      setShowRequestModal(false);
      showToast(t('queue.toast.requestCreated'));
    },
    onError: () => showToast(t('queue.toast.requestCreateFailed'), 'error'),
  });

  const updateRequestMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: { student_id: string; requester_name: string; contact_email: string; request_model_url: string; request_notes: string } }) =>
      api.updateQueueItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      setEditingRequestItem(null);
      showToast(t('queue.toast.requestUpdated'));
    },
    onError: () => showToast(t('queue.toast.requestUpdateFailed'), 'error'),
  });

  const updateRequestStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: 'pending' | 'printing' | 'completed' }) =>
      api.updateCustomQueueItemStatus(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      showToast(t('queue.toast.statusUpdated'));
    },
    onError: () => showToast(t('queue.toast.statusUpdateFailed'), 'error'),
  });

  const unlockContactsMutation = useMutation({
    mutationFn: (password: string) => api.validateQueueContactAccess(password),
    onSuccess: (_, password) => {
      setContactRevealPassword(password);
      setContactPasswordInput('');
      setShowContactUnlockModal(false);
      showToast(t('queue.toast.contactsUnlocked'));
    },
    onError: () => showToast(t('queue.toast.unlockContactsFailed'), 'error'),
  });

  const cancelMutation = useMutation({
    mutationFn: (id: number) => api.cancelQueueItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      showToast(t('queue.toast.cancelled'));
    },
    onError: () => showToast(t('queue.toast.cancelFailed'), 'error'),
  });

  const removeMutation = useMutation({
    mutationFn: (id: number) => api.removeFromQueue(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      showToast(t('queue.toast.removed'));
    },
    onError: () => showToast(t('queue.toast.removeFailed'), 'error'),
  });

  const stopMutation = useMutation({
    mutationFn: (id: number) => api.stopQueueItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      showToast(t('queue.toast.stopped'));
    },
    onError: () => showToast(t('queue.toast.stopFailed'), 'error'),
  });

  const startMutation = useMutation({
    mutationFn: (id: number) => api.startQueueItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      showToast(t('queue.toast.released'));
    },
    onError: () => showToast(t('queue.toast.startFailed'), 'error'),
  });

  const reorderMutation = useMutation({
    mutationFn: (items: { id: number; position: number }[]) => api.reorderQueue(items),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
    },
    onError: () => showToast(t('queue.toast.reorderFailed'), 'error'),
  });

  const clearHistoryMutation = useMutation({
    mutationFn: async () => {
      const historyItems = queue?.filter(i =>
        ['completed', 'failed', 'skipped', 'cancelled'].includes(i.status)
      ) || [];
      for (const item of historyItems) {
        await api.removeFromQueue(item.id);
      }
      return historyItems.length;
    },
    onSuccess: (count) => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      showToast(t('queue.toast.historyCleared', { count }));
    },
    onError: () => showToast(t('queue.toast.clearHistoryFailed'), 'error'),
  });

  const bulkUpdateMutation = useMutation({
    mutationFn: (data: PrintQueueBulkUpdate) => api.bulkUpdateQueue(data),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      setSelectedItems([]);
      setShowBulkEditModal(false);
      showToast(result.message);
    },
    onError: () => showToast(t('queue.toast.updateFailed'), 'error'),
  });

  const bulkCancelMutation = useMutation({
    mutationFn: async (ids: number[]) => {
      for (const id of ids) {
        await api.cancelQueueItem(id);
      }
      return ids.length;
    },
    onSuccess: (count) => {
      queryClient.invalidateQueries({ queryKey: ['queue'] });
      setSelectedItems([]);
      showToast(t('queue.toast.bulkCancelled', { count }));
    },
    onError: () => showToast(t('queue.toast.bulkCancelFailed'), 'error'),
  });

  const handleToggleSelect = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Get unique locations from printers for the filter dropdown
  const uniqueLocations = useMemo(() => {
    const locations = new Set<string>();
    printers?.forEach(p => {
      if (p.location) locations.add(p.location);
    });
    // Also include locations from queue items (for model-based assignments)
    queue?.forEach(item => {
      if (item.target_location) locations.add(item.target_location);
    });
    return Array.from(locations).sort();
  }, [printers, queue]);

  // Helper to check if a queue item matches the location filter
  const matchesLocationFilter = useCallback((item: PrintQueueItem): boolean => {
    if (!filterLocation) return true;
    // For model-based assignments, check target_location
    if (item.target_location) return item.target_location === filterLocation;
    // For printer-based assignments, check the printer's location
    if (item.printer_id) {
      const printer = printers?.find(p => p.id === item.printer_id);
      return printer?.location === filterLocation;
    }
    return false;
  }, [filterLocation, printers]);

  const pendingItems = useMemo(() => {
    let items = queue?.filter(i => i.status === 'pending') || [];

    // Apply location filter
    if (filterLocation) {
      items = items.filter(matchesLocationFilter);
    }

    // Helper to get scheduled time as timestamp (ASAP/placeholder = 0 for earliest)
    const getScheduledTime = (item: PrintQueueItem): number => {
      if (!item.scheduled_time) return 0;
      const time = parseUTCDate(item.scheduled_time)?.getTime() ?? 0;
      // Placeholder dates (> 6 months out) are treated as ASAP
      const sixMonthsFromNow = Date.now() + (180 * 24 * 60 * 60 * 1000);
      return time > sixMonthsFromNow ? 0 : time;
    };

    return [...items].sort((a, b) => {
      let cmp: number;
      if (pendingSortBy === 'name') {
        const aName = getQueueItemDisplayName(a, t('queue.request.defaultTitle'));
        const bName = getQueueItemDisplayName(b, t('queue.request.defaultTitle'));
        cmp = aName.localeCompare(bName);
      } else if (pendingSortBy === 'printer') {
        cmp = (a.printer_name || '').localeCompare(b.printer_name || '');
      } else if (pendingSortBy === 'time') {
        // Sort by scheduled start time (when print will begin)
        cmp = getScheduledTime(a) - getScheduledTime(b);
      } else {
        cmp = a.position - b.position;
      }
      return pendingSortAsc ? cmp : -cmp;
    });
  }, [queue, pendingSortBy, pendingSortAsc, matchesLocationFilter, filterLocation, t]);

  const selectablePendingItems = useMemo(
    () => pendingItems.filter(item => !item.custom_request),
    [pendingItems]
  );

  const handleSelectAll = () => {
    const allPendingIds = selectablePendingItems.map(i => i.id);
    if (selectedItems.length === allPendingIds.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allPendingIds);
    }
  };

  const activeItems = useMemo(() => {
    let items = queue?.filter(i => i.status === 'printing') || [];
    if (filterLocation) {
      items = items.filter(matchesLocationFilter);
    }
    return items;
  }, [queue, filterLocation, matchesLocationFilter]);

  // Get unique printer IDs from active items to fetch their statuses
  const activePrinterIds = useMemo(() => {
    const ids = new Set<number>();
    activeItems.forEach(item => {
      if (item.printer_id) ids.add(item.printer_id);
    });
    return Array.from(ids);
  }, [activeItems]);

  // Fetch printer statuses for printers with active jobs
  const printerStatusQueries = useQueries({
    queries: activePrinterIds.map(printerId => ({
      queryKey: ['printerStatus', printerId],
      queryFn: () => api.getPrinterStatus(printerId),
      refetchInterval: 5000,
    })),
  });

  // Build a map of printer_id -> state for quick lookup
  const printerStateMap = useMemo(() => {
    const map: Record<number, string | null> = {};
    activePrinterIds.forEach((printerId, index) => {
      const result = printerStatusQueries[index];
      if (result?.data?.state) {
        map[printerId] = result.data.state;
      }
    });
    return map;
  }, [activePrinterIds, printerStatusQueries]);

  const historyItems = useMemo(() => {
    let items = queue?.filter(i => ['completed', 'failed', 'skipped', 'cancelled'].includes(i.status)) || [];
    if (filterLocation) {
      items = items.filter(matchesLocationFilter);
    }
    return [...items].sort((a, b) => {
      let cmp: number;
      if (historySortBy === 'name') {
        const aName = getQueueItemDisplayName(a, t('queue.request.defaultTitle'));
        const bName = getQueueItemDisplayName(b, t('queue.request.defaultTitle'));
        cmp = aName.localeCompare(bName);
      } else if (historySortBy === 'printer') {
        cmp = (a.printer_name || '').localeCompare(b.printer_name || '');
      } else {
        // Default: by date - most recent first (desc) is the natural order
        cmp = (parseUTCDate(b.completed_at || b.created_at)?.getTime() ?? 0) - (parseUTCDate(a.completed_at || a.created_at)?.getTime() ?? 0);
      }
      return historySortAsc ? -cmp : cmp;
    });
  }, [queue, historySortBy, historySortAsc, matchesLocationFilter, filterLocation, t]);

  // Calculate total queue time
  const totalQueueTime = useMemo(() => {
    return pendingItems.reduce((acc, item) => acc + (item.print_time_seconds || 0), 0);
  }, [pendingItems]);

  // Calculate total material weight
  const totalWeight = useMemo(() => {
    return pendingItems.reduce((acc, item) => acc + (item.filament_used_grams || 0), 0);
  }, [pendingItems]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = pendingItems.findIndex(i => i.id === active.id);
    const newIndex = pendingItems.findIndex(i => i.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const reordered = arrayMove(pendingItems, oldIndex, newIndex);
      const updates = reordered.map((item, index) => ({
        id: item.id,
        position: index + 1,
      }));
      reorderMutation.mutate(updates);
    }
  };

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <ListOrdered className="w-7 h-7 text-bambu-green" />
            {t('queue.title')}
          </h1>
          <p className="text-bambu-gray mt-1">{t('queue.subtitle')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={() => {
              if (contactRevealPassword) {
                setContactRevealPassword(null);
                setContactPasswordInput('');
                showToast(t('queue.toast.contactsHidden'));
              } else {
                setShowContactUnlockModal(true);
              }
            }}
          >
            {contactRevealPassword ? <EyeOff className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            {contactRevealPassword ? t('queue.request.hideContacts') : t('queue.request.unlockContacts')}
          </Button>
          {hasPermission('queue:create') && (
            <Button onClick={() => setShowRequestModal(true)}>
              <Plus className="w-4 h-4" />
              {t('queue.request.add')}
            </Button>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-white truncate">{activeItems.length}</p>
                <p className="text-xs sm:text-sm text-bambu-gray truncate">{t('queue.summary.printing')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/20">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-white truncate">{pendingItems.length}</p>
                <p className="text-xs sm:text-sm text-bambu-gray truncate">{t('queue.summary.queued')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-bambu-green/10 to-transparent border-bambu-green/20">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-bambu-green/20 flex items-center justify-center shrink-0">
                <Timer className="w-4 h-4 sm:w-5 sm:h-5 text-bambu-green" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-white truncate">{formatDuration(totalQueueTime)}</p>
                <p className="text-xs sm:text-sm text-bambu-gray truncate">{t('queue.summary.totalTime')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                <Weight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-white truncate">{formatWeight(totalWeight)}</p>
                <p className="text-xs sm:text-sm text-bambu-gray truncate">{t('queue.summary.totalWeight')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 sm:col-span-1 bg-gradient-to-br from-gray-500/10 to-transparent border-gray-500/20">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-500/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-white truncate">{historyItems.length}</p>
                <p className="text-xs sm:text-sm text-bambu-gray truncate">{t('queue.summary.history')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6">
        <select
          className="px-2 sm:px-3 py-2 text-sm sm:text-base bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none min-w-0 flex-1 sm:flex-none"
          value={filterPrinter === -1 ? 'unassigned' : (filterPrinter || '')}
          onChange={(e) => {
            const val = e.target.value;
            if (val === 'unassigned') setFilterPrinter(-1);
            else if (val === '') setFilterPrinter(null);
            else setFilterPrinter(Number(val));
          }}
        >
          <option value="">{t('queue.filter.allPrinters')}</option>
          <option value="unassigned">{t('queue.filter.unassigned')}</option>
          {printers?.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>

        <select
          className="px-2 sm:px-3 py-2 text-sm sm:text-base bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none min-w-0 flex-1 sm:flex-none"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">{t('queue.filter.allStatus')}</option>
          <option value="pending">{t('queue.status.pending')}</option>
          <option value="printing">{t('queue.status.printing')}</option>
          <option value="completed">{t('queue.status.completed')}</option>
          <option value="failed">{t('queue.status.failed')}</option>
          <option value="skipped">{t('queue.status.skipped')}</option>
          <option value="cancelled">{t('queue.status.cancelled')}</option>
        </select>

        {uniqueLocations.length > 0 && (
          <select
            className="px-2 sm:px-3 py-2 text-sm sm:text-base bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none min-w-0 flex-1 sm:flex-none"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            <option value="">{t('queue.filter.allLocations')}</option>
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        )}

        <div className="hidden sm:block flex-1" />

        {historyItems.length > 0 && (
          <Button
            className="w-full sm:w-auto"
            variant="secondary"
            size="sm"
            onClick={() => setShowClearHistoryConfirm(true)}
            disabled={!hasPermission('queue:delete_all')}
            title={!hasPermission('queue:delete_all') ? t('queue.permissions.noClearHistory') : undefined}
          >
            <Trash2 className="w-4 h-4" />
            {t('queue.clearHistory')}
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-bambu-gray">{t('common.loading')}</div>
      ) : queue?.length === 0 ? (
        <Card className="p-12 text-center border-dashed">
          <Calendar className="w-16 h-16 text-bambu-gray mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-medium text-white mb-2">{t('queue.empty.title')}</h3>
          <p className="text-bambu-gray max-w-md mx-auto">
            {t('queue.empty.description')}
          </p>
        </Card>
      ) : (
        <div className="space-y-6 sm:space-y-8">
          {/* Active Prints */}
          {activeItems.length > 0 && (
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {t('queue.sections.currentlyPrinting')}
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {activeItems.map((item) => (
                  <SortableQueueItem
                    key={item.id}
                    item={item}
                    onEdit={() => item.custom_request ? setEditingRequestItem(item) : undefined}
                    onCancel={() => {}}
                    onRemove={() => setConfirmAction({ type: 'remove', item })}
                    onStop={() => setConfirmAction({ type: 'stop', item })}
                    onRequeue={() => {}}
                    onStart={() => {}}
                    onSetCustomStatus={(status) => updateRequestStatusMutation.mutate({ id: item.id, status })}
                    timeFormat={timeFormat}
                    isUpdatingStatus={updateRequestStatusMutation.isPending && updateRequestStatusMutation.variables?.id === item.id}
                    hasPermission={hasPermission}
                    canModify={canModify}
                    printerState={item.printer_id ? printerStateMap[item.printer_id] : null}
                    t={t}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Pending Queue */}
          {pendingItems.length > 0 && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  {t('queue.sections.queued')}
                  <span className="text-xs sm:text-sm font-normal text-bambu-gray">
                    ({t('queue.itemCount', { count: pendingItems.length })})
                  </span>
                  <span className="hidden sm:inline text-xs text-bambu-gray ml-2" title={t('queue.reorderHint')}>
                    {t('queue.dragToReorder')}
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <select
                    className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                    value={pendingSortBy}
                    onChange={(e) => setPendingSortBy(e.target.value as 'position' | 'name' | 'printer' | 'time')}
                  >
                    <option value="position">{t('queue.sort.byPosition')}</option>
                    <option value="name">{t('queue.sort.byName')}</option>
                    <option value="printer">{t('queue.sort.byPrinter')}</option>
                    <option value="time">{t('queue.sort.bySchedule')}</option>
                  </select>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPendingSortAsc(!pendingSortAsc)}
                    title={pendingSortAsc ? t('common.ascending') : t('common.descending')}
                    className="px-2"
                  >
                    {pendingSortAsc ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Bulk action toolbar */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 p-2 sm:p-3 bg-bambu-dark rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSelectAll}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                >
                  {selectedItems.length === selectablePendingItems.length && selectablePendingItems.length > 0 ? (
                    <CheckSquare className="w-4 h-4 text-bambu-green" />
                  ) : (
                    <Square className="w-4 h-4" />
                  )}
                  {selectedItems.length === selectablePendingItems.length && selectablePendingItems.length > 0 ? t('queue.bulkEdit.deselectAll') : t('queue.bulkEdit.selectAll')}
                </Button>
                {selectedItems.length > 0 && (
                  <>
                    <span className="text-xs sm:text-sm text-bambu-gray">
                      {t('queue.bulkEdit.selected', { count: selectedItems.length })}
                    </span>
                    <div className="hidden sm:block h-4 w-px bg-bambu-dark-tertiary" />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowBulkEditModal(true)}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-bambu-green hover:text-bambu-green-light"
                      disabled={!hasAnyPermission('queue:update_own', 'queue:update_all')}
                      title={!hasAnyPermission('queue:update_own', 'queue:update_all') ? t('queue.permissions.noEditItems') : t('queue.bulkEdit.editSelected')}
                    >
                      <Pencil className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{t('queue.bulkEdit.editSelected')}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => bulkCancelMutation.mutate(selectedItems)}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-red-400 hover:text-red-300"
                      disabled={bulkCancelMutation.isPending || !hasAnyPermission('queue:delete_own', 'queue:delete_all')}
                      title={!hasAnyPermission('queue:delete_own', 'queue:delete_all') ? t('queue.permissions.noCancelItems') : t('queue.bulkEdit.cancelSelected')}
                    >
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{t('queue.bulkEdit.cancelSelected')}</span>
                    </Button>
                  </>
                )}
              </div>

              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={pendingItems.map(i => i.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-2 sm:space-y-3">
                    {pendingItems.map((item, index) => (
                      <SortableQueueItem
                        key={item.id}
                        item={item}
                        position={index + 1}
                        onEdit={() => item.custom_request ? setEditingRequestItem(item) : setEditItem(item)}
                        onCancel={() => setConfirmAction({ type: 'cancel', item })}
                        onRemove={() => setConfirmAction({ type: 'remove', item })}
                        onStop={() => {}}
                        onRequeue={() => {}}
                        onStart={() => startMutation.mutate(item.id)}
                        onSetCustomStatus={(status) => updateRequestStatusMutation.mutate({ id: item.id, status })}
                        timeFormat={timeFormat}
                        isSelected={selectedItems.includes(item.id)}
                        isUpdatingStatus={updateRequestStatusMutation.isPending && updateRequestStatusMutation.variables?.id === item.id}
                        onToggleSelect={() => handleToggleSelect(item.id)}
                        hasPermission={hasPermission}
                        canModify={canModify}
                        t={t}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </div>
          )}

          {/* History */}
          {historyItems.length > 0 && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-bambu-gray" />
                  {t('queue.sections.history')}
                  <span className="text-xs sm:text-sm font-normal text-bambu-gray">
                    ({t('queue.itemCount', { count: historyItems.length })})
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <select
                    className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                    value={historySortBy}
                    onChange={(e) => setHistorySortBy(e.target.value as 'date' | 'name' | 'printer')}
                  >
                    <option value="date">{t('queue.sort.byDate')}</option>
                    <option value="name">{t('queue.sort.byName')}</option>
                    <option value="printer">{t('queue.sort.byPrinter')}</option>
                  </select>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setHistorySortAsc(!historySortAsc)}
                    title={historySortAsc ? t('queue.sort.ascendingOldest') : t('queue.sort.descendingNewest')}
                    className="px-2"
                  >
                    {historySortAsc ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {historyItems.slice(0, 20).map((item, index) => (
                  <SortableQueueItem
                    key={item.id}
                    item={item}
                    position={index + 1}
                    onEdit={() => item.custom_request ? setEditingRequestItem(item) : undefined}
                    onCancel={() => {}}
                    onRemove={() => setConfirmAction({ type: 'remove', item })}
                    onStop={() => {}}
                    onRequeue={() => setRequeueItem(item)}
                    onStart={() => {}}
                    onSetCustomStatus={(status) => updateRequestStatusMutation.mutate({ id: item.id, status })}
                    timeFormat={timeFormat}
                    isUpdatingStatus={updateRequestStatusMutation.isPending && updateRequestStatusMutation.variables?.id === item.id}
                    hasPermission={hasPermission}
                    canModify={canModify}
                    t={t}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {(showRequestModal || editingRequestItem) && (
        <QueueRequestModal
          item={editingRequestItem}
          onClose={() => {
            setShowRequestModal(false);
            setEditingRequestItem(null);
          }}
          onSubmit={(data) => {
            if (editingRequestItem) {
              updateRequestMutation.mutate({ id: editingRequestItem.id, data });
            } else {
              createRequestMutation.mutate(data);
            }
          }}
          isSaving={createRequestMutation.isPending || updateRequestMutation.isPending}
          t={t}
        />
      )}

      {showContactUnlockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-bambu-dark-tertiary">
              <h2 className="text-lg font-semibold text-white">{t('queue.request.unlockTitle')}</h2>
              <button
                onClick={() => {
                  if (!unlockContactsMutation.isPending) {
                    setShowContactUnlockModal(false);
                    setContactPasswordInput('');
                  }
                }}
                className="p-1 hover:bg-bambu-dark rounded"
              >
                <X className="w-5 h-5 text-bambu-gray" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <p className="text-sm text-bambu-gray">{t('queue.request.unlockDescription')}</p>
              <div>
                <label className="block text-sm font-medium text-white mb-2">{t('queue.request.unlockPassword')}</label>
                <input
                  type="password"
                  value={contactPasswordInput}
                  onChange={(e) => setContactPasswordInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && contactPasswordInput.trim()) {
                      unlockContactsMutation.mutate(contactPasswordInput.trim());
                    }
                  }}
                  className="w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 p-4 border-t border-bambu-dark-tertiary">
              <Button
                variant="secondary"
                onClick={() => {
                  setShowContactUnlockModal(false);
                  setContactPasswordInput('');
                }}
                disabled={unlockContactsMutation.isPending}
              >
                {t('common.cancel')}
              </Button>
              <Button
                onClick={() => unlockContactsMutation.mutate(contactPasswordInput.trim())}
                disabled={unlockContactsMutation.isPending || !contactPasswordInput.trim()}
              >
                {unlockContactsMutation.isPending ? t('common.saving') : t('queue.request.unlockSubmit')}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editItem && (
        <PrintModal
          mode="edit-queue-item"
          archiveId={editItem.archive_id ?? undefined}
          libraryFileId={editItem.library_file_id ?? undefined}
          archiveName={editItem.archive_name || editItem.library_file_name || `File #${editItem.archive_id || editItem.library_file_id}`}
          queueItem={editItem}
          onClose={() => setEditItem(null)}
        />
      )}

      {/* Re-queue Modal */}
      {requeueItem && (
        <PrintModal
          mode="add-to-queue"
          archiveId={requeueItem.archive_id ?? undefined}
          libraryFileId={requeueItem.library_file_id ?? undefined}
          archiveName={requeueItem.archive_name || requeueItem.library_file_name || `File #${requeueItem.archive_id || requeueItem.library_file_id}`}
          onClose={() => setRequeueItem(null)}
        />
      )}

      {/* Confirm Action Modal */}
      {confirmAction && (
        <ConfirmModal
          title={
            confirmAction.type === 'cancel' ? t('queue.confirm.cancelTitle') :
            confirmAction.type === 'stop' ? t('queue.confirm.stopTitle') :
            t('queue.confirm.removeTitle')
          }
          message={
            confirmAction.type === 'cancel'
              ? t('queue.confirm.cancelMessage', { name: getQueueItemDisplayName(confirmAction.item, t('queue.request.defaultTitle')) || t('queue.confirm.thisPrint') })
              : confirmAction.type === 'stop'
              ? t('queue.confirm.stopMessage', { name: getQueueItemDisplayName(confirmAction.item, t('queue.request.defaultTitle')) || t('queue.confirm.thisPrint') })
              : t('queue.confirm.removeMessage', { name: getQueueItemDisplayName(confirmAction.item, t('queue.request.defaultTitle')) || t('queue.confirm.thisItem') })
          }
          confirmText={
            confirmAction.type === 'cancel' ? t('queue.confirm.cancelButton') :
            confirmAction.type === 'stop' ? t('queue.confirm.stopButton') :
            t('common.remove')
          }
          variant="danger"
          onConfirm={() => {
            if (confirmAction.type === 'cancel') {
              cancelMutation.mutate(confirmAction.item.id);
            } else if (confirmAction.type === 'stop') {
              stopMutation.mutate(confirmAction.item.id);
            } else {
              removeMutation.mutate(confirmAction.item.id);
            }
            setConfirmAction(null);
          }}
          onCancel={() => setConfirmAction(null)}
        />
      )}

      {/* Clear History Confirm Modal */}
      {showClearHistoryConfirm && (
        <ConfirmModal
          title={t('queue.confirm.clearHistoryTitle')}
          message={t('queue.confirm.clearHistoryMessage', { count: historyItems.length })}
          confirmText={t('queue.clearHistory')}
          variant="danger"
          onConfirm={() => {
            clearHistoryMutation.mutate();
            setShowClearHistoryConfirm(false);
          }}
          onCancel={() => setShowClearHistoryConfirm(false)}
        />
      )}

      {/* Bulk Edit Modal */}
      {showBulkEditModal && (
        <BulkEditModal
          selectedCount={selectedItems.length}
          printers={printers?.map(p => ({ id: p.id, name: p.name })) || []}
          onSave={(data) => {
            if (Object.keys(data).length > 0) {
              bulkUpdateMutation.mutate({ item_ids: selectedItems, ...data });
            }
          }}
          onClose={() => setShowBulkEditModal(false)}
          isSaving={bulkUpdateMutation.isPending}
          canControlPrinter={hasPermission('printers:control')}
          t={t}
        />
      )}
    </div>
  );
}
