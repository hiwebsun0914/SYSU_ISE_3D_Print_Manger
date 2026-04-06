interface LocationLike {
  protocol: string;
  hostname: string;
  host: string;
  port: string;
  origin: string;
}

function formatUrlHost(hostname: string): string {
  if (hostname.includes(':') && !hostname.startsWith('[')) {
    return `[${hostname}]`;
  }
  return hostname;
}

export function resolveOnlineSlicerUrlTemplate(
  rawUrl: string,
  locationLike: LocationLike = window.location,
): string {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return '';
  }

  const replacements: Record<string, string> = {
    requestScheme: locationLike.protocol.replace(/:$/, ''),
    requestHost: formatUrlHost(locationLike.hostname),
    requestPort: locationLike.port,
    requestNetloc: locationLike.host,
    requestOrigin: locationLike.origin,
  };

  let resolved = trimmed;
  for (const [key, value] of Object.entries(replacements)) {
    resolved = resolved.replaceAll(`{{${key}}}`, value);
    resolved = resolved.replaceAll(`{{${key}Encoded}}`, encodeURIComponent(value));
  }

  return resolved;
}
