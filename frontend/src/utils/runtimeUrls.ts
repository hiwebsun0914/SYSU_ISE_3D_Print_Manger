function trimTrailingSlash(value: string): string {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

export function getApiBaseUrl(): string {
  const configured = import.meta.env.VITE_API_BASE as string | undefined;
  if (configured) {
    return trimTrailingSlash(configured);
  }
  return trimTrailingSlash(window.location.origin) + '/api/v1';
}

export function getWebSocketBaseUrl(): string {
  const configured = import.meta.env.VITE_WS_BASE as string | undefined;
  if (configured) {
    return trimTrailingSlash(configured);
  }
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${window.location.host}`;
}
