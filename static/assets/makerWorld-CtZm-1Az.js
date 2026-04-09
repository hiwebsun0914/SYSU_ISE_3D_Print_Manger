const MAKERWORLD_CN_HOSTS = /* @__PURE__ */ new Set(["makerworld.com.cn", "www.makerworld.com.cn"]);
const MAKERWORLD_CN_ORIGIN = "https://makerworld.com.cn";
const MAKERWORLD_CN_EXPLORE_URL = `${MAKERWORLD_CN_ORIGIN}/zh/3d-models`;
function buildMakerWorldCnSearchUrl(keyword) {
  const trimmedKeyword = keyword.trim();
  if (!trimmedKeyword) {
    return MAKERWORLD_CN_EXPLORE_URL;
  }
  const url = new URL("/zh/search/models", MAKERWORLD_CN_ORIGIN);
  url.searchParams.set("keyword", trimmedKeyword);
  return url.toString();
}
function isMakerWorldCnModelUrl(value) {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || !MAKERWORLD_CN_HOSTS.has(url.hostname)) {
      return false;
    }
    const segments = url.pathname.split("/").filter(Boolean);
    const modelsIndex = segments.findIndex((segment) => segment === "models");
    return modelsIndex !== -1 && Boolean(segments[modelsIndex + 1]);
  } catch {
    return false;
  }
}
function getMakerWorldModelDisplayName(value, fallbackTitle) {
  try {
    const pathname = new URL(value.trim()).pathname;
    const segments = pathname.split("/").filter(Boolean);
    const modelsIndex = segments.findIndex((segment) => segment === "models");
    const rawSlug = modelsIndex >= 0 ? segments[modelsIndex + 1] : segments[segments.length - 1];
    if (!rawSlug) {
      return fallbackTitle;
    }
    const decoded = decodeURIComponent(rawSlug).replace(/^\d+-/, "").replace(/[-_]+/g, " ").trim();
    return decoded || rawSlug;
  } catch {
    return fallbackTitle;
  }
}
export {
  MAKERWORLD_CN_EXPLORE_URL as M,
  buildMakerWorldCnSearchUrl as b,
  getMakerWorldModelDisplayName as g,
  isMakerWorldCnModelUrl as i
};
