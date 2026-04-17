import { startTransition, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { api, type AppSettings } from '../api/client';
import { useIsSidebarCompact } from '../hooks/useIsSidebarCompact';
import { clearPrewarmedKiriIframe, warmKiriMotoResources } from '../utils/kiriMotoBridge';
import { resolveOnlineSlicerUrlTemplate } from '../utils/onlineSlicer';
import { Button } from './Button';

const ONBOARDING_COOKIE_NAME = 'bambuddy_new_user_onboarding_seen';
const ONBOARDING_COOKIE_VALUE = '1';
const ONBOARDING_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const GUIDE_START_DELAY_MS = 180;
const GUIDE_TARGET_TIMEOUT_MS = 4000;
const GUIDE_TARGET_POLL_MS = 90;
const GUIDE_BACKGROUND_SLICER_WARM_DELAY_MS = 900;
const MOBILE_SKIP_TOP_OFFSET = 68;
const MOBILE_DIALOG_BOTTOM_OFFSET = 12;

type DialogPlacement = 'top' | 'bottom' | 'auto';

interface OnboardingStep {
  id: string;
  route: string;
  navId: string;
  selectors: string[];
  includeNavSpotlight?: boolean;
  title: string;
  description: string;
  dialogPlacement?: DialogPlacement;
  scrollBlock?: ScrollLogicalPosition;
}

interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

function readOnboardingCookie(): boolean {
  if (typeof document === 'undefined') {
    return true;
  }

  return document.cookie
    .split(';')
    .map((part) => part.trim())
    .includes(`${ONBOARDING_COOKIE_NAME}=${ONBOARDING_COOKIE_VALUE}`);
}

function writeOnboardingCookie() {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = `${ONBOARDING_COOKIE_NAME}=${ONBOARDING_COOKIE_VALUE}; Max-Age=${ONBOARDING_COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
}

function findFirstElement(selectors: string[]): HTMLElement | null {
  for (const selector of selectors) {
    const element = document.querySelector<HTMLElement>(selector);
    if (element) {
      return element;
    }
  }

  return null;
}

// eslint-disable-next-line react-refresh/only-export-components
export function hasSeenNewUserOnboarding(): boolean {
  return readOnboardingCookie();
}

function findNavElement(navId: string): HTMLElement | null {
  return document.querySelector<HTMLElement>(`[data-onboarding-nav="${navId}"]`);
}

function findScrollContainer(element: HTMLElement): HTMLElement | null {
  let current: HTMLElement | null = element.parentElement;

  while (current) {
    const { overflowY } = window.getComputedStyle(current);
    if ((overflowY === 'auto' || overflowY === 'scroll') && current.scrollHeight > current.clientHeight) {
      return current;
    }
    current = current.parentElement;
  }

  return null;
}

function positionElementForMobileGuide(
  element: HTMLElement,
  dialogHeight: number,
  block: ScrollLogicalPosition = 'start',
) {
  const scrollContainer = findScrollContainer(element);
  if (!scrollContainer) {
    element.scrollIntoView({ block, inline: 'nearest', behavior: 'auto' });
    return;
  }

  const rect = element.getBoundingClientRect();
  const containerRect = scrollContainer.getBoundingClientRect();
  const topSafe = Math.max(containerRect.top + 8, MOBILE_SKIP_TOP_OFFSET + 6);
  const bottomSafe = Math.min(
    containerRect.bottom - 8,
    window.innerHeight - Math.max(dialogHeight || 156, 156) - MOBILE_DIALOG_BOTTOM_OFFSET - 8,
  );

  if (bottomSafe <= topSafe) {
    element.scrollIntoView({ block, inline: 'nearest', behavior: 'auto' });
    return;
  }

  let delta = 0;
  if (block === 'center') {
    const targetCenter = rect.top + rect.height / 2;
    const safeCenter = (topSafe + bottomSafe) / 2;
    delta = targetCenter - safeCenter;
  } else {
    const safeHeight = bottomSafe - topSafe;
    if (rect.height >= safeHeight) {
      delta = rect.top - topSafe;
    } else if (rect.top < topSafe) {
      delta = rect.top - topSafe;
    } else if (rect.bottom > bottomSafe) {
      delta = rect.bottom - bottomSafe;
    }
  }

  if (Math.abs(delta) > 2) {
    scrollContainer.scrollBy({ top: delta, behavior: 'auto' });
  }
}

function areSameElements(current: HTMLElement[], next: HTMLElement[]): boolean {
  if (current.length !== next.length) {
    return false;
  }

  return current.every((element, index) => element === next[index]);
}

function areSameRects(current: TargetRect[], next: TargetRect[]): boolean {
  if (current.length !== next.length) {
    return false;
  }

  return current.every((rect, index) => {
    const other = next[index];
    return (
      Math.round(rect.top) === Math.round(other.top) &&
      Math.round(rect.left) === Math.round(other.left) &&
      Math.round(rect.width) === Math.round(other.width) &&
      Math.round(rect.height) === Math.round(other.height)
    );
  });
}

const onboardingPageLoaders: Partial<Record<string, () => Promise<unknown>>> = {
  queue: () => import('../pages/QueuePage'),
  stats: () => import('../pages/StatsPage'),
  inventory: () => import('../pages/InventoryPage'),
  'model-library': () => import('../pages/ModelLibraryPage'),
  slicer: () => import('../pages/KiriMotoPage'),
};

const preloadedOnboardingStepIds = new Set<string>();

function preloadOnboardingStepPage(stepId: string): Promise<void> {
  if (preloadedOnboardingStepIds.has(stepId)) {
    return Promise.resolve();
  }

  const loader = onboardingPageLoaders[stepId];
  if (!loader) {
    preloadedOnboardingStepIds.add(stepId);
    return Promise.resolve();
  }

  preloadedOnboardingStepIds.add(stepId);
  return loader().then(() => undefined).catch(() => undefined);
}

function scheduleGuideWork(task: () => void, timeout = 240) {
  const idleWindow = window as Window & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

  if (typeof idleWindow.requestIdleCallback === 'function') {
    const handle = idleWindow.requestIdleCallback(task, { timeout });
    return () => {
      idleWindow.cancelIdleCallback?.(handle);
    };
  }

  const timer = window.setTimeout(task, timeout);
  return () => {
    window.clearTimeout(timer);
  };
}

export function NewUserOnboarding({
  enabled,
  onFinish,
}: {
  enabled: boolean;
  onFinish: () => void;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const isSidebarCompact = useIsSidebarCompact();
  const overlayMaskId = useId().replace(/:/g, '');
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const prefetchedStepIdsRef = useRef<Set<string>>(new Set());

  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [targetElements, setTargetElements] = useState<HTMLElement[]>([]);
  const [targetRects, setTargetRects] = useState<TargetRect[]>([]);
  const [dialogHeight, setDialogHeight] = useState(0);

  const stepText = useMemo(() => ({
    printers: {
      title: t('onboarding.steps.printers.title', { defaultValue: 'Printers' }),
      description: t('onboarding.steps.printers.description', {
        defaultValue: 'This is your printer home. Start here to see device status, jobs, and common controls.',
      }),
    },
    camera: {
      title: t('onboarding.steps.camera.title', { defaultValue: 'Live Camera' }),
      description: t('onboarding.steps.camera.description', {
        defaultValue: 'Use this button to open the printer camera and quickly check progress or spot issues.',
      }),
    },
    queue: {
      title: t('onboarding.steps.queue.title', { defaultValue: 'Queue' }),
      description: t('onboarding.steps.queue.description', {
        defaultValue: 'Use the queue to arrange print order, hold jobs for later, and manage who prints next.',
      }),
    },
    stats: {
      title: t('onboarding.steps.stats.title', { defaultValue: 'Statistics' }),
      description: t('onboarding.steps.stats.description', {
        defaultValue: 'Here you can review print counts, duration, materials, failures, and long-term usage trends.',
      }),
    },
    inventory: {
      title: t('onboarding.steps.inventory.title', { defaultValue: 'Material Management' }),
      description: t('onboarding.steps.inventory.description', {
        defaultValue: 'Manage spools, check remaining weight, and see which materials are loaded in printers.',
      }),
    },
    modelLibrary: {
      title: t('onboarding.steps.modelLibrary.title', { defaultValue: 'Model Library' }),
      description: t('onboarding.steps.modelLibrary.description', {
        defaultValue: 'Search models here first. After finding one, you can submit the link into the queue or upload your own file from File Manager.',
      }),
    },
    slicer: {
      title: t('onboarding.steps.slicer.title', { defaultValue: 'Slicing Workspace' }),
      description: t('onboarding.steps.slicer.description', {
        defaultValue: 'Open the online slicer here to place a model, adjust settings, and try the slicing workflow.',
      }),
    },
  }), [t]);

  const desktopSteps = useMemo<OnboardingStep[]>(() => [
    {
      id: 'printers',
      route: '/',
      navId: 'printers',
      selectors: ['[data-onboarding="printers-heading"]'],
      includeNavSpotlight: false,
      title: stepText.printers.title,
      description: stepText.printers.description,
    },
    {
      id: 'camera',
      route: '/',
      navId: 'printers',
      selectors: [
        '[data-onboarding="printer-camera"]',
        '[data-onboarding="printer-card"]',
        '[data-onboarding="printers-heading"]',
      ],
      title: stepText.camera.title,
      description: stepText.camera.description,
      scrollBlock: 'center',
    },
    {
      id: 'queue',
      route: '/queue',
      navId: 'queue',
      selectors: [
        '[data-onboarding="queue-header"]',
      ],
      title: stepText.queue.title,
      description: stepText.queue.description,
    },
    {
      id: 'stats',
      route: '/stats',
      navId: 'stats',
      selectors: [
        '[data-onboarding="stats-header"]',
      ],
      title: stepText.stats.title,
      description: stepText.stats.description,
    },
    {
      id: 'inventory',
      route: '/inventory',
      navId: 'inventory',
      selectors: [
        '[data-onboarding="inventory-header"]',
        '[data-onboarding="inventory-add"]',
      ],
      title: stepText.inventory.title,
      description: stepText.inventory.description,
    },
    {
      id: 'model-library',
      route: '/model-library',
      navId: 'model-library',
      selectors: [
        '[data-onboarding="model-library-search"]',
        '[data-onboarding="model-library-heading"]',
      ],
      title: stepText.modelLibrary.title,
      description: stepText.modelLibrary.description,
    },
    {
      id: 'slicer',
      route: '/kiri-moto',
      navId: 'kiri-moto',
      selectors: [
        '[data-onboarding="kiri-workspace"]',
        '[data-onboarding="kiri-heading"]',
      ],
      title: stepText.slicer.title,
      description: stepText.slicer.description,
    },
  ], [stepText]);

  const mobileSteps = useMemo<OnboardingStep[]>(() => [
    {
      id: 'printers',
      route: '/',
      navId: 'printers',
      selectors: ['[data-onboarding="printers-heading"]'],
      includeNavSpotlight: false,
      title: stepText.printers.title,
      description: stepText.printers.description,
      scrollBlock: 'start',
    },
    {
      id: 'camera',
      route: '/',
      navId: 'printers',
      selectors: [
        '[data-onboarding="printer-camera-mobile"]',
        '[data-onboarding="printer-camera"]',
        '[data-onboarding="printer-card"]',
      ],
      title: stepText.camera.title,
      description: stepText.camera.description,
      scrollBlock: 'center',
    },
    {
      id: 'queue',
      route: '/queue',
      navId: 'queue',
      selectors: [
        '[data-onboarding="queue-content"]',
        '[data-onboarding="queue-header"]',
      ],
      title: stepText.queue.title,
      description: stepText.queue.description,
      scrollBlock: 'start',
    },
    {
      id: 'stats',
      route: '/stats',
      navId: 'stats',
      selectors: [
        '[data-onboarding="stats-dashboard"]',
        '[data-onboarding="stats-header"]',
      ],
      title: stepText.stats.title,
      description: stepText.stats.description,
      scrollBlock: 'start',
    },
    {
      id: 'inventory',
      route: '/inventory',
      navId: 'inventory',
      selectors: [
        '[data-onboarding="inventory-stats"]',
        '[data-onboarding="inventory-add"]',
        '[data-onboarding="inventory-header"]',
      ],
      title: stepText.inventory.title,
      description: stepText.inventory.description,
      scrollBlock: 'start',
    },
    {
      id: 'model-library',
      route: '/model-library',
      navId: 'model-library',
      selectors: [
        '[data-onboarding="model-library-search"]',
        '[data-onboarding="model-library-heading"]',
      ],
      title: stepText.modelLibrary.title,
      description: stepText.modelLibrary.description,
      scrollBlock: 'start',
    },
    {
      id: 'slicer',
      route: '/kiri-moto',
      navId: 'kiri-moto',
      selectors: [
        '[data-onboarding="kiri-workspace"]',
        '[data-onboarding="kiri-heading"]',
      ],
      title: stepText.slicer.title,
      description: stepText.slicer.description,
      scrollBlock: 'start',
    },
  ], [stepText]);

  const steps = isSidebarCompact ? mobileSteps : desktopSteps;

  const finishGuide = useCallback(() => {
    writeOnboardingCookie();
    setStarted(false);
    setStepIndex(0);
    setTargetElements([]);
    setTargetRects([]);
    onFinish();
  }, [onFinish]);

  const isActive = enabled && started && stepIndex < steps.length;
  const activeStep = isActive ? steps[stepIndex] : null;
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  const goToStep = useCallback((nextIndex: number) => {
    const nextStep = steps[nextIndex];

    setTargetElements([]);
    setTargetRects([]);
    if (nextStep && location.pathname !== nextStep.route) {
      startTransition(() => {
        navigate(nextStep.route, { replace: true });
      });
    }
    startTransition(() => {
      setStepIndex(nextIndex);
    });
  }, [location.pathname, navigate, steps]);

  const goToPreviousStep = useCallback(() => {
    if (isFirstStep) {
      return;
    }
    goToStep(stepIndex - 1);
  }, [goToStep, isFirstStep, stepIndex]);

  const goToNextStep = useCallback(() => {
    if (isLastStep) {
      finishGuide();
      return;
    }
    goToStep(stepIndex + 1);
  }, [finishGuide, goToStep, isLastStep, stepIndex]);

  useEffect(() => {
    if (!enabled) {
      setStarted(false);
      setStepIndex(0);
      setTargetElements([]);
      setTargetRects([]);
      return;
    }

    const timer = window.setTimeout(() => {
      setStarted(true);
    }, GUIDE_START_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [enabled]);

  const prefetchStepResources = useCallback((stepId: string) => {
    if (prefetchedStepIdsRef.current.has(stepId)) {
      return;
    }

    prefetchedStepIdsRef.current.add(stepId);
    void preloadOnboardingStepPage(stepId);

    if (stepId === 'queue') {
      void queryClient.prefetchQuery({
        queryKey: ['queue', null, '', false],
        queryFn: () => api.getQueue(undefined, undefined, undefined, undefined),
        staleTime: 30 * 1000,
      });
      void queryClient.prefetchQuery({
        queryKey: ['printers'],
        queryFn: api.getPrinters,
        staleTime: 60 * 1000,
      });
      return;
    }

    if (stepId === 'stats') {
      void queryClient.prefetchQuery({
        queryKey: ['archiveStats', undefined, undefined],
        queryFn: () => api.getArchiveStats({}),
        staleTime: 60 * 1000,
      });
      void queryClient.prefetchQuery({
        queryKey: ['archivesSlim', undefined, undefined],
        queryFn: () => api.getArchivesSlim(undefined, undefined),
        staleTime: 60 * 1000,
      });
      void queryClient.prefetchQuery({
        queryKey: ['printers'],
        queryFn: api.getPrinters,
        staleTime: 60 * 1000,
      });
      return;
    }

    if (stepId === 'inventory') {
      void Promise.allSettled([
        queryClient.prefetchQuery({
          queryKey: ['inventory-spools'],
          queryFn: () => api.getSpools(true),
          staleTime: 30 * 1000,
        }),
        queryClient.prefetchQuery({
          queryKey: ['spool-assignments'],
          queryFn: () => api.getAssignments(),
          staleTime: 30 * 1000,
        }),
        queryClient.prefetchQuery({
          queryKey: ['spool-catalog'],
          queryFn: api.getSpoolCatalog,
          staleTime: 60 * 1000,
        }),
        queryClient.prefetchQuery({
          queryKey: ['spoolman-settings'],
          queryFn: api.getSpoolmanSettings,
          staleTime: 5 * 60 * 1000,
        }),
      ]);
      return;
    }

    if (stepId === 'slicer') {
      void queryClient.ensureQueryData<AppSettings>({
        queryKey: ['settings'],
        queryFn: api.getSettings,
        staleTime: 5 * 60 * 1000,
      }).then((settings) => {
        const launchUrl = resolveOnlineSlicerUrlTemplate(settings.online_orca_slicer_url || '');
        warmKiriMotoResources(launchUrl);
      }).catch(() => undefined);
      return;
    }

    if (stepId === 'printers' || stepId === 'camera') {
      void queryClient.prefetchQuery({
        queryKey: ['printers'],
        queryFn: api.getPrinters,
        staleTime: 60 * 1000,
      });
    }
  }, [queryClient]);

  useEffect(() => {
    if (!enabled) {
      clearPrewarmedKiriIframe();
      prefetchedStepIdsRef.current.clear();
      return;
    }

    const candidateIds = [
      steps[stepIndex]?.id,
      steps[stepIndex + 1]?.id,
    ].filter((id): id is string => Boolean(id));

    return scheduleGuideWork(() => {
      candidateIds.forEach((id) => prefetchStepResources(id));
    }, 180);
  }, [enabled, prefetchStepResources, stepIndex, steps]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    return scheduleGuideWork(() => {
      prefetchStepResources('slicer');
    }, GUIDE_BACKGROUND_SLICER_WARM_DELAY_MS);
  }, [enabled, prefetchStepResources]);

  useEffect(() => {
    if (!isActive || !activeStep) {
      return;
    }

    if (location.pathname !== activeStep.route) {
      setTargetElements([]);
      setTargetRects([]);
      navigate(activeStep.route, { replace: true });
      return;
    }

    let cancelled = false;
    let timeoutId: number | null = null;
    const deadline = Date.now() + GUIDE_TARGET_TIMEOUT_MS;

    const resolveTarget = () => {
      if (cancelled) {
        return;
      }

      const primaryTarget = findFirstElement(activeStep.selectors);
      const navTarget = isSidebarCompact || activeStep.includeNavSpotlight === false
        ? null
        : findNavElement(activeStep.navId);
      const nextTargets = [primaryTarget, navTarget].filter((target): target is HTMLElement => Boolean(target));

      setTargetElements((currentTargets) => (areSameElements(currentTargets, nextTargets) ? currentTargets : nextTargets));

      if (primaryTarget) {
        if (isSidebarCompact) {
          positionElementForMobileGuide(primaryTarget, dialogHeight, activeStep.scrollBlock || 'start');
        } else {
          primaryTarget.scrollIntoView({
            block: activeStep.scrollBlock || 'center',
            inline: 'nearest',
            behavior: 'auto',
          });
        }
        return;
      }

      if (Date.now() >= deadline) {
        if (nextTargets.length === 0) {
          setTargetElements([]);
          setTargetRects([]);
        }
        return;
      }

      timeoutId = window.setTimeout(resolveTarget, GUIDE_TARGET_POLL_MS);
    };

    resolveTarget();

    return () => {
      cancelled = true;
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [activeStep, dialogHeight, isActive, isSidebarCompact, location.pathname, navigate]);

  useEffect(() => {
    if (targetElements.length === 0) {
      setTargetRects([]);
      return;
    }

    const updateRect = () => {
      const connectedTargets = targetElements.filter((element) => element.isConnected);
      const nextRects = connectedTargets
        .map((element) => element.getBoundingClientRect())
        .filter((rect) => rect.width > 0 && rect.height > 0)
        .map((rect) => ({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        }));

      setTargetElements((currentTargets) => (areSameElements(currentTargets, connectedTargets) ? currentTargets : connectedTargets));
      setTargetRects((currentRects) => (areSameRects(currentRects, nextRects) ? currentRects : nextRects));
    };

    updateRect();

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => updateRect())
      : null;

    targetElements.forEach((element) => resizeObserver?.observe(element));
    window.addEventListener('resize', updateRect);
    document.addEventListener('scroll', updateRect, true);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateRect);
      document.removeEventListener('scroll', updateRect, true);
    };
  }, [targetElements]);

  useEffect(() => {
    if (!isActive || !dialogRef.current) {
      return;
    }

    const updateHeight = () => {
      const nextHeight = dialogRef.current?.getBoundingClientRect().height || 0;
      setDialogHeight((current) => (Math.round(current) === Math.round(nextHeight) ? current : nextHeight));
    };

    updateHeight();

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => updateHeight())
      : null;

    resizeObserver?.observe(dialogRef.current);
    window.addEventListener('resize', updateHeight);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, [activeStep?.id, isActive]);

  const spotlightRects = useMemo(() => {
    if (targetRects.length === 0) {
      return [];
    }

    const padding = 12;
    const minInset = 8;
    return targetRects.map((targetRect) => {
      const width = Math.min(targetRect.width + padding * 2, window.innerWidth - minInset * 2);
      const height = Math.min(targetRect.height + padding * 2, window.innerHeight - minInset * 2);
      const left = Math.min(
        Math.max(targetRect.left - padding, minInset),
        Math.max(window.innerWidth - width - minInset, minInset),
      );
      const top = Math.min(
        Math.max(targetRect.top - padding, minInset),
        Math.max(window.innerHeight - height - minInset, minInset),
      );

      return {
        top,
        left,
        width,
        height,
      };
    });
  }, [targetRects]);

  if (!isActive || !activeStep) {
    return null;
  }

  return (
    <>
      {spotlightRects.length > 0 ? (
        <>
          <svg
            className="pointer-events-none fixed inset-0 z-[109] h-full w-full"
            width={window.innerWidth}
            height={window.innerHeight}
            viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <mask id={overlayMaskId}>
                <rect width="100%" height="100%" fill="white" />
                {spotlightRects.map((rect, index) => (
                  <rect
                    key={`${activeStep.id}-${index}`}
                    x={rect.left}
                    y={rect.top}
                    width={rect.width}
                    height={rect.height}
                    rx="24"
                    ry="24"
                    fill="black"
                  />
                ))}
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#020617" fillOpacity="0.78" mask={`url(#${overlayMaskId})`} />
          </svg>

          {spotlightRects.map((rect, index) => (
            <div
              key={`${activeStep.id}-outline-${index}`}
              className="pointer-events-none fixed z-[110] rounded-[24px] border-2 border-bambu-green shadow-[0_18px_48px_rgba(0,0,0,0.45)]"
              style={{
                top: `${rect.top}px`,
                left: `${rect.left}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
              }}
            />
          ))}
        </>
      ) : (
        <div className="fixed inset-0 z-[109] bg-black/75" />
      )}

      <div className={`fixed z-[130] ${isSidebarCompact ? 'right-3 top-[4.25rem]' : 'right-4 top-4'}`}>
        <Button
          variant="secondary"
          size="sm"
          onClick={finishGuide}
          className={isSidebarCompact ? 'px-3' : undefined}
        >
          {t('onboarding.skip', { defaultValue: 'Skip' })}
        </Button>
      </div>

      <div
        className={`fixed inset-x-0 z-[130] flex justify-center ${isSidebarCompact ? 'bottom-2 px-2' : 'bottom-4 px-4'}`}
      >
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="new-user-onboarding-title"
          className={`w-full border border-white/10 bg-bambu-dark-secondary/95 shadow-2xl backdrop-blur ${
            isSidebarCompact ? 'max-w-full rounded-xl p-3' : 'max-w-md rounded-3xl p-5'
          }`}
        >
          <div className={`flex items-center gap-2 font-semibold uppercase tracking-[0.22em] text-bambu-green ${isSidebarCompact ? 'text-[10px]' : 'text-xs'}`}>
            <Sparkles className="w-4 h-4" />
            <span>{t('onboarding.label', { defaultValue: 'Quick Start' })}</span>
          </div>

          <div className={`flex items-start justify-between ${isSidebarCompact ? 'mt-2 gap-2' : 'mt-4 gap-4'}`}>
            <div className="min-w-0">
              <h2 id="new-user-onboarding-title" className={`font-semibold text-white ${isSidebarCompact ? 'text-base' : 'text-lg'}`}>
                {activeStep.title}
              </h2>
              <p className={`mt-2 text-bambu-gray-light ${isSidebarCompact ? 'text-xs leading-5' : 'text-sm leading-6'}`}>
                {activeStep.description}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-bambu-gray-light">
              {t('onboarding.stepCounter', {
                current: stepIndex + 1,
                total: steps.length,
                defaultValue: '{{current}} / {{total}}',
              })}
            </span>
          </div>

          <p className={`text-bambu-gray ${isSidebarCompact ? 'mt-2 text-[10px] leading-4' : 'mt-4 text-xs'}`}>
            {t('onboarding.autoAdvance', {
              defaultValue: 'Use the buttons below to continue step by step. You can skip it in the top-right corner.',
            })}
          </p>

          <div className={`flex items-center justify-between ${isSidebarCompact ? 'mt-3 gap-2' : 'mt-5 gap-3'}`}>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPreviousStep}
              disabled={isFirstStep}
              className={isSidebarCompact ? 'min-h-[38px] px-2.5 py-1 text-xs' : undefined}
            >
              {t('onboarding.previous', { defaultValue: 'Previous' })}
            </Button>

            <Button size="sm" onClick={goToNextStep} className={isSidebarCompact ? 'min-h-[38px] px-2.5 py-1 text-xs' : undefined}>
              {isLastStep
                ? t('onboarding.finish', { defaultValue: 'Finish' })
                : t('onboarding.next', { defaultValue: 'Next' })}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
