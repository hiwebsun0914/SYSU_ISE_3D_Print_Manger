const MAKERWORLD_CN_HOSTS = new Set(['makerworld.com.cn', 'www.makerworld.com.cn']);

export const MAKERWORLD_CN_ORIGIN = 'https://makerworld.com.cn';
export const MAKERWORLD_CN_EXPLORE_URL = `${MAKERWORLD_CN_ORIGIN}/zh/3d-models`;

export function buildMakerWorldCnSearchUrl(keyword: string): string {
  const trimmedKeyword = keyword.trim();
  if (!trimmedKeyword) {
    return MAKERWORLD_CN_EXPLORE_URL;
  }

  const url = new URL('/zh/search/models', MAKERWORLD_CN_ORIGIN);
  url.searchParams.set('keyword', trimmedKeyword);
  return url.toString();
}

export function isMakerWorldCnModelUrl(value: string): boolean {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || !MAKERWORLD_CN_HOSTS.has(url.hostname)) {
      return false;
    }

    const segments = url.pathname.split('/').filter(Boolean);
    const modelsIndex = segments.findIndex((segment) => segment === 'models');
    return modelsIndex !== -1 && Boolean(segments[modelsIndex + 1]);
  } catch {
    return false;
  }
}

export function getMakerWorldModelDisplayName(value: string, fallbackTitle: string): string {
  try {
    const pathname = new URL(value.trim()).pathname;
    const segments = pathname.split('/').filter(Boolean);
    const modelsIndex = segments.findIndex((segment) => segment === 'models');
    const rawSlug = modelsIndex >= 0 ? segments[modelsIndex + 1] : segments[segments.length - 1];
    if (!rawSlug) {
      return fallbackTitle;
    }

    const decoded = decodeURIComponent(rawSlug).replace(/^\d+-/, '').replace(/[-_]+/g, ' ').trim();
    return decoded || rawSlug;
  } catch {
    return fallbackTitle;
  }
}
