import { c as createLucideIcon, u as useTranslation, G as useNavigate, b as useQueryClient, a as useToast, k as useAuth, r as reactExports, e as useMutation, j as jsxRuntimeExports, ad as BookOpen, B as Button, E as ExternalLink, y as Card, z as CardContent, aR as ShieldAlert, a5 as CardHeader, f as api } from "./index-By7NB6Yd.js";
import { i as isMakerWorldCnModelUrl, g as getMakerWorldModelDisplayName, b as buildMakerWorldCnSearchUrl, M as MAKERWORLD_CN_EXPLORE_URL } from "./makerWorld-CtZm-1Az.js";
import { A as ArrowUpRight } from "./arrow-up-right-DYnagzzf.js";
import { S as Search } from "./search-RLowFFFz.js";
import { L as Link2 } from "./link-2-Cux3y_Sw.js";
import { S as Send } from "./send-D0WmLRJ_.js";
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
];
const Clipboard = createLucideIcon("clipboard", __iconNode);
const CONTACT_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidContactEmail(email) {
  return CONTACT_EMAIL_RE.test(email.trim());
}
function openExternalUrl(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
function ModelLibraryPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [searchKeyword, setSearchKeyword] = reactExports.useState("");
  const [studentId, setStudentId] = reactExports.useState("");
  const [requesterName, setRequesterName] = reactExports.useState("");
  const [contactEmail, setContactEmail] = reactExports.useState("");
  const [modelUrl, setModelUrl] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState("");
  const [error, setError] = reactExports.useState(null);
  const trimmedModelUrl = modelUrl.trim();
  const trimmedSearchKeyword = searchKeyword.trim();
  const canSubmitRequest = hasPermission("queue:create");
  const isValidModelUrl = isMakerWorldCnModelUrl(trimmedModelUrl);
  const modelTitlePreview = isValidModelUrl ? getMakerWorldModelDisplayName(trimmedModelUrl, t("queue.request.defaultTitle")) : null;
  const createRequestMutation = useMutation({
    mutationFn: (data) => api.addToQueue({
      custom_request: true,
      student_id: data.student_id,
      requester_name: data.requester_name,
      contact_email: data.contact_email,
      request_model_url: data.request_model_url,
      request_notes: data.request_notes,
      manual_start: true
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queue"] });
      showToast(t("modelLibrary.toast.requestSubmitted"));
      navigate("/queue");
    },
    onError: () => {
      showToast(t("modelLibrary.toast.requestFailed"), "error");
    }
  });
  const handleSubmit = () => {
    const trimmedStudentId = studentId.trim();
    const trimmedRequesterName = requesterName.trim();
    const trimmedContactEmail = contactEmail.trim();
    const trimmedNotes = notes.trim();
    if (!trimmedStudentId || !trimmedRequesterName || !trimmedContactEmail || !trimmedModelUrl) {
      setError(t("queue.request.requiredError"));
      return;
    }
    if (!isValidContactEmail(trimmedContactEmail)) {
      setError(t("queue.request.emailError"));
      return;
    }
    if (!isMakerWorldCnModelUrl(trimmedModelUrl)) {
      setError(t("queue.request.urlError"));
      return;
    }
    setError(null);
    createRequestMutation.mutate({
      student_id: trimmedStudentId,
      requester_name: trimmedRequesterName,
      contact_email: trimmedContactEmail,
      request_model_url: trimmedModelUrl,
      request_notes: trimmedNotes
    });
  };
  const handleReadClipboard = async () => {
    if (!navigator.clipboard?.readText || !window.isSecureContext) {
      showToast(t("modelLibrary.toast.clipboardUnavailable"), "error");
      return;
    }
    try {
      const clipboardValue = (await navigator.clipboard.readText()).trim();
      if (!clipboardValue) {
        showToast(t("modelLibrary.toast.clipboardEmpty"), "error");
        return;
      }
      setModelUrl(clipboardValue);
      setError(null);
      showToast(t("modelLibrary.toast.clipboardLoaded"));
    } catch {
      showToast(t("modelLibrary.toast.clipboardFailed"), "error");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-onboarding": "model-library-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-7 h-7 text-bambu-green" }),
          t("modelLibrary.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray mt-1 max-w-3xl", children: t("modelLibrary.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => openExternalUrl(MAKERWORLD_CN_EXPLORE_URL), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" }),
          t("modelLibrary.openExplore")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: () => navigate("/queue"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
          t("modelLibrary.viewQueue")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-amber-500/30 bg-amber-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col gap-3 sm:flex-row sm:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-5 h-5 text-amber-300" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-semibold", children: t("modelLibrary.embedNoticeTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("modelLibrary.embedNoticeDescription") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.05fr,0.95fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("modelLibrary.quickLinksTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("modelLibrary.quickLinksDescription") })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-onboarding": "model-library-search", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("modelLibrary.searchLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: searchKeyword,
                  onChange: (e) => setSearchKeyword(e.target.value),
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      openExternalUrl(buildMakerWorldCnSearchUrl(trimmedSearchKeyword));
                    }
                  },
                  placeholder: t("modelLibrary.searchPlaceholder"),
                  className: "flex-1 px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => openExternalUrl(buildMakerWorldCnSearchUrl(trimmedSearchKeyword)), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" }),
                t("modelLibrary.openSearch")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => openExternalUrl(MAKERWORLD_CN_EXPLORE_URL),
                className: "text-left rounded-xl border border-bambu-dark-tertiary bg-bambu-dark p-4 hover:border-bambu-green/40 hover:bg-bambu-dark-tertiary/60 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 text-bambu-green" }),
                    t("modelLibrary.openExplore")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-bambu-gray", children: t("modelLibrary.howToStep1") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => openExternalUrl(buildMakerWorldCnSearchUrl(trimmedSearchKeyword)),
                className: "text-left rounded-xl border border-bambu-dark-tertiary bg-bambu-dark p-4 hover:border-bambu-green/40 hover:bg-bambu-dark-tertiary/60 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-bambu-green" }),
                    t("modelLibrary.openSearch")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-bambu-gray", children: t("modelLibrary.howToStep2") })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-bambu-dark-tertiary bg-bambu-dark p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-medium mb-3", children: t("modelLibrary.howToTitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-bambu-gray", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("modelLibrary.howToStep1") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("modelLibrary.howToStep2") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("modelLibrary.howToStep3") })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("modelLibrary.requestTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("modelLibrary.requestDescription") })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.studentId") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: studentId,
                  onChange: (e) => setStudentId(e.target.value),
                  className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.requesterName") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: requesterName,
                  onChange: (e) => setRequesterName(e.target.value),
                  className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.contactEmail") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                value: contactEmail,
                onChange: (e) => setContactEmail(e.target.value),
                placeholder: t("queue.request.contactEmailPlaceholder"),
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white", children: t("queue.request.modelUrl") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", size: "sm", variant: "ghost", onClick: handleReadClipboard, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard, { className: "w-4 h-4" }),
                  t("modelLibrary.readClipboard")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "ghost",
                    disabled: !trimmedModelUrl,
                    onClick: () => openExternalUrl(trimmedModelUrl),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-4 h-4" }),
                      t("modelLibrary.openModel")
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: modelUrl,
                onChange: (e) => setModelUrl(e.target.value),
                placeholder: t("queue.request.urlPlaceholder"),
                className: `w-full px-3 py-2 bg-bambu-dark border rounded-lg text-white focus:border-bambu-green focus:outline-none ${trimmedModelUrl && !isValidModelUrl ? "border-red-500/60" : "border-bambu-dark-tertiary"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-2", children: t("queue.request.urlHint") }),
            modelTitlePreview && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-lg border border-bambu-green/20 bg-bambu-green/10 px-3 py-2 text-sm text-bambu-green-light", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t("modelLibrary.previewLabel") }),
              " ",
              modelTitlePreview
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("queue.request.notes") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: notes,
                onChange: (e) => setNotes(e.target.value),
                rows: 4,
                placeholder: t("modelLibrary.notesPlaceholder"),
                className: "w-full px-3 py-2 bg-bambu-dark border border-bambu-dark-tertiary rounded-lg text-white focus:border-bambu-green focus:outline-none resize-y"
              }
            )
          ] }),
          !canSubmitRequest && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2", children: t("modelLibrary.permissionHint") }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "secondary", onClick: () => navigate("/queue"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
              t("modelLibrary.viewQueue")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                onClick: handleSubmit,
                disabled: !canSubmitRequest || createRequestMutation.isPending,
                title: !canSubmitRequest ? t("modelLibrary.permissionHint") : void 0,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                  createRequestMutation.isPending ? t("common.saving") : t("modelLibrary.submit")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ModelLibraryPage
};
