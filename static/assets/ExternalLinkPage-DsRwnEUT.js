import { u as useTranslation, aD as useParams, v as useTheme, d as useQuery, j as jsxRuntimeExports, L as LoaderCircle, T as TriangleAlert, f as api } from "./index-By7NB6Yd.js";
function ExternalLinkPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { mode } = useTheme();
  const { data: link, isLoading, error } = useQuery({
    queryKey: ["external-link", id],
    queryFn: () => api.getExternalLink(Number(id)),
    enabled: !!id
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) });
  }
  if (error || !link) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-4 text-bambu-gray", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-12 h-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("common.linkNotFound") })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "iframe",
    {
      src: link.url,
      className: "h-full w-full border-0",
      style: { colorScheme: mode },
      title: link.name,
      sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
    }
  );
}
export {
  ExternalLinkPage
};
