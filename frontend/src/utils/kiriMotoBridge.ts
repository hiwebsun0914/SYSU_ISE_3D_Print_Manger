let kiriBridgePromise: Promise<void> | null = null;
let prewarmedKiriIframe: HTMLIFrameElement | null = null;
let prewarmedKiriIframeUrl: string | null = null;

export const KIRI_IFRAME_SANDBOX = 'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads';

function ensureHeadLink(
  rel: 'preconnect' | 'prefetch' | 'preload',
  href: string,
  options?: {
    as?: string;
    crossOrigin?: boolean;
  },
) {
  const selectorParts = [`link[rel="${rel}"][href="${href}"]`];
  if (options?.as) {
    selectorParts.push(`[as="${options.as}"]`);
  }
  const selector = selectorParts.join('');
  let link = document.head.querySelector<HTMLLinkElement>(selector);

  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (options?.as) {
      link.as = options.as;
    }
    if (options?.crossOrigin) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  }
}

function ensurePrewarmedKiriIframe(launchUrl: string) {
  if (!launchUrl || typeof document === 'undefined') {
    return;
  }

  if (
    prewarmedKiriIframe &&
    prewarmedKiriIframeUrl === launchUrl &&
    prewarmedKiriIframe.isConnected
  ) {
    return;
  }

  clearPrewarmedKiriIframe();

  const iframe = document.createElement('iframe');
  iframe.src = launchUrl;
  iframe.title = 'Kiri:Moto Preload';
  iframe.tabIndex = -1;
  iframe.setAttribute('aria-hidden', 'true');
  iframe.setAttribute('sandbox', KIRI_IFRAME_SANDBOX);
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '1px';
  iframe.style.height = '1px';
  iframe.style.opacity = '0';
  iframe.style.pointerEvents = 'none';
  iframe.style.border = '0';
  iframe.style.zIndex = '-1';
  iframe.dataset.kiriPrewarm = 'true';

  document.body.appendChild(iframe);
  prewarmedKiriIframe = iframe;
  prewarmedKiriIframeUrl = launchUrl;
}

export function getKiriOrigin(url: string): string {
  try {
    return new URL(url).origin;
  } catch {
    return 'https://grid.space';
  }
}

export function loadKiriBridge(scriptUrl: string): Promise<void> {
  const kiriWindow = window as Window & { kiri?: { frame?: unknown } };

  if (kiriWindow.kiri?.frame) {
    return Promise.resolve();
  }

  if (kiriBridgePromise) {
    return kiriBridgePromise;
  }

  kiriBridgePromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-kiri-bridge="true"]');
    if (existingScript) {
      if (existingScript.dataset.loaded === 'true') {
        resolve();
        return;
      }
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Kiri:Moto bridge')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.dataset.kiriBridge = 'true';
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error('Failed to load Kiri:Moto bridge'));
    document.head.appendChild(script);
  }).catch((error) => {
    kiriBridgePromise = null;
    throw error;
  });

  return kiriBridgePromise;
}

export function clearPrewarmedKiriIframe(launchUrl?: string) {
  if (!prewarmedKiriIframe) {
    return;
  }

  if (launchUrl && prewarmedKiriIframeUrl && prewarmedKiriIframeUrl !== launchUrl) {
    return;
  }

  prewarmedKiriIframe.remove();
  prewarmedKiriIframe = null;
  prewarmedKiriIframeUrl = null;
}

export function warmKiriMotoResources(launchUrl: string) {
  if (typeof document === 'undefined' || !launchUrl) {
    return;
  }

  const origin = getKiriOrigin(launchUrl);
  const isCrossOrigin = origin !== window.location.origin;
  ensureHeadLink('preconnect', origin, { crossOrigin: isCrossOrigin });
  ensureHeadLink('preload', `${origin}/lib/kiri/run/frame.js`, { as: 'script', crossOrigin: isCrossOrigin });
  ensureHeadLink('prefetch', launchUrl, { as: 'document', crossOrigin: isCrossOrigin });
  void loadKiriBridge(`${origin}/lib/kiri/run/frame.js`).catch(() => undefined);
  ensurePrewarmedKiriIframe(launchUrl);
}
