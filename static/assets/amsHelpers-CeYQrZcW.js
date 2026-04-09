import { p as parseUTCDate } from "./index-CMdmMVx7.js";
function normalizeColor(color) {
  if (!color) return "#808080";
  const hex = color.replace("#", "").substring(0, 6);
  return `#${hex}`;
}
function normalizeColorForCompare(color) {
  if (!color) return "";
  return color.replace("#", "").toLowerCase().substring(0, 6);
}
const FILAMENT_TYPE_GROUPS = [
  ["PA-CF", "PA12-CF", "PAHT-CF"]
];
const _equivalenceMap = {};
for (const group of FILAMENT_TYPE_GROUPS) {
  const canonical = group[0];
  for (const t of group) {
    _equivalenceMap[t.toUpperCase()] = canonical.toUpperCase();
  }
}
function canonicalFilamentType(type) {
  if (!type) return "";
  const upper = type.toUpperCase();
  return _equivalenceMap[upper] ?? upper;
}
function filamentTypesCompatible(a, b) {
  return canonicalFilamentType(a) === canonicalFilamentType(b);
}
function colorsAreSimilar(color1, color2, threshold = 40) {
  const hex1 = normalizeColorForCompare(color1);
  const hex2 = normalizeColorForCompare(color2);
  if (!hex1 || !hex2 || hex1.length < 6 || hex2.length < 6) return false;
  const r1 = parseInt(hex1.substring(0, 2), 16);
  const g1 = parseInt(hex1.substring(2, 4), 16);
  const b1 = parseInt(hex1.substring(4, 6), 16);
  const r2 = parseInt(hex2.substring(0, 2), 16);
  const g2 = parseInt(hex2.substring(2, 4), 16);
  const b2 = parseInt(hex2.substring(4, 6), 16);
  return Math.abs(r1 - r2) <= threshold && Math.abs(g1 - g2) <= threshold && Math.abs(b1 - b2) <= threshold;
}
function formatSlotLabel(amsId, trayId, isHt, isExternal) {
  if (isExternal) return "Ext";
  const letter = String.fromCharCode(65 + (amsId >= 128 ? amsId - 128 : amsId));
  if (isHt) return `HT-${letter}`;
  return `${letter}${trayId + 1}`;
}
function getGlobalTrayId(amsId, trayId, isExternal) {
  if (isExternal) return 254 + trayId;
  if (amsId >= 128) return amsId;
  return amsId * 4 + trayId;
}
function getFillBarColor(fillLevel) {
  if (fillLevel > 50) return "#00ae42";
  if (fillLevel >= 15) return "#f59e0b";
  return "#ef4444";
}
function getSpoolmanFillLevel(linkedSpool) {
  if (!linkedSpool?.remaining_weight || !linkedSpool?.filament_weight || linkedSpool.filament_weight <= 0) return null;
  return Math.min(100, Math.round(
    linkedSpool.remaining_weight / linkedSpool.filament_weight * 100
  ));
}
function toFixedHex(value, width) {
  const safe = Number.isFinite(value) ? Math.max(0, Math.trunc(value)) : 0;
  return safe.toString(16).toUpperCase().padStart(width, "0").slice(-width);
}
function hashSerialToHex32(serial) {
  const input = (serial || "").trim().toUpperCase();
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).toUpperCase().padStart(8, "0");
}
function getFallbackSpoolTag(printerSerial, amsId, trayId) {
  return `${hashSerialToHex32(printerSerial)}${toFixedHex(amsId, 4)}${toFixedHex(trayId, 4)}`;
}
function isPlaceholderDate(scheduledTime) {
  if (!scheduledTime) return false;
  const sixMonthsFromNow = Date.now() + 180 * 24 * 60 * 60 * 1e3;
  return (parseUTCDate(scheduledTime)?.getTime() ?? 0) > sixMonthsFromNow;
}
function autoMatchFilament(req, loadedFilaments, usedTrayIds) {
  const nozzleFilaments = filterFilamentsByNozzle(loadedFilaments, req.nozzle_id);
  const exactMatch = nozzleFilaments.find(
    (f) => !usedTrayIds.has(f.globalTrayId) && filamentTypesCompatible(f.type, req.type) && normalizeColorForCompare(f.color) === normalizeColorForCompare(req.color)
  );
  const similarMatch = exactMatch ? void 0 : nozzleFilaments.find(
    (f) => !usedTrayIds.has(f.globalTrayId) && filamentTypesCompatible(f.type, req.type) && colorsAreSimilar(f.color, req.color)
  );
  const typeOnlyMatch = exactMatch || similarMatch ? void 0 : nozzleFilaments.find(
    (f) => !usedTrayIds.has(f.globalTrayId) && filamentTypesCompatible(f.type, req.type)
  );
  return exactMatch ?? similarMatch ?? typeOnlyMatch;
}
function filterFilamentsByNozzle(loadedFilaments, nozzleId) {
  return loadedFilaments.filter(
    (f) => nozzleId == null || f.extruderId === nozzleId
  );
}
export {
  getSpoolmanFillLevel as a,
  getFillBarColor as b,
  getGlobalTrayId as c,
  colorsAreSimilar as d,
  normalizeColor as e,
  formatSlotLabel as f,
  getFallbackSpoolTag as g,
  canonicalFilamentType as h,
  autoMatchFilament as i,
  filterFilamentsByNozzle as j,
  isPlaceholderDate as k,
  normalizeColorForCompare as n
};
