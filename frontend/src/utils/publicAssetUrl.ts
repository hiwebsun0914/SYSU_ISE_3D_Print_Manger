const BASE_URL = import.meta.env.BASE_URL || '/';

const normalizedBaseUrl = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;

export function publicAssetUrl(path: string): string {
  const normalizedPath = path.replace(/^\/+/, '');

  if (normalizedBaseUrl === '/') {
    return `/${normalizedPath}`;
  }

  return `${normalizedBaseUrl}${normalizedPath}`;
}
