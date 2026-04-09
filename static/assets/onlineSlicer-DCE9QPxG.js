function formatUrlHost(hostname) {
  if (hostname.includes(":") && !hostname.startsWith("[")) {
    return `[${hostname}]`;
  }
  return hostname;
}
function resolveOnlineSlicerUrlTemplate(rawUrl, locationLike = window.location) {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return "";
  }
  const replacements = {
    requestScheme: locationLike.protocol.replace(/:$/, ""),
    requestHost: formatUrlHost(locationLike.hostname),
    requestPort: locationLike.port,
    requestNetloc: locationLike.host,
    requestOrigin: locationLike.origin
  };
  let resolved = trimmed;
  for (const [key, value] of Object.entries(replacements)) {
    resolved = resolved.replaceAll(`{{${key}}}`, value);
    resolved = resolved.replaceAll(`{{${key}Encoded}}`, encodeURIComponent(value));
  }
  return resolved;
}
export {
  resolveOnlineSlicerUrlTemplate as r
};
