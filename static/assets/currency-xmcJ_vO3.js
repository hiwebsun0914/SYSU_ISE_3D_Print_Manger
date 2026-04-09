const CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  CHF: "Fr.",
  JPY: "¥",
  CNY: "¥",
  CAD: "$",
  AUD: "$",
  INR: "₹",
  HKD: "HK$",
  KRW: "₩",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  PLN: "zł",
  BRL: "R$",
  TWD: "NT$",
  SGD: "S$",
  NZD: "NZ$",
  MXN: "MX$",
  MYR: "RM",
  CZK: "Kč",
  THB: "฿",
  ZAR: "R",
  TRY: "₺",
  RUB: "₽",
  HUF: "Ft",
  ILS: "₪",
  UAH: "₴"
};
function getCurrencySymbol(currencyCode) {
  return CURRENCY_SYMBOLS[currencyCode.toUpperCase()] || currencyCode;
}
const SUPPORTED_CURRENCIES = Object.entries(CURRENCY_SYMBOLS).map(([code, symbol]) => ({
  code,
  label: `${code} (${symbol})`
}));
export {
  SUPPORTED_CURRENCIES as S,
  getCurrencySymbol as g
};
