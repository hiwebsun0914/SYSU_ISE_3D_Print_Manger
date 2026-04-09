import { u as useTranslation, k as useAuth, a as useToast, b as useQueryClient, J as useNavigate, r as reactExports, d as useQuery, e as useMutation, j as jsxRuntimeExports, L as LoaderCircle, A as Card, D as CardContent, ae as Mail, a7 as CardHeader, s as CircleCheck, B as Button, f as api } from "./index-CMdmMVx7.js";
import { B as Bell } from "./bell-C-P97fk4.js";
import { S as Save } from "./save-zQqkFHJf.js";
function NotificationsPage() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [notifyPrintStart, setNotifyPrintStart] = reactExports.useState(true);
  const [notifyPrintComplete, setNotifyPrintComplete] = reactExports.useState(true);
  const [notifyPrintFailed, setNotifyPrintFailed] = reactExports.useState(true);
  const [notifyPrintStopped, setNotifyPrintStopped] = reactExports.useState(true);
  const [isDirty, setIsDirty] = reactExports.useState(false);
  const { data: advancedAuthStatus, isLoading: isAdvancedAuthLoading } = useQuery({
    queryKey: ["advancedAuthStatus"],
    queryFn: api.getAdvancedAuthStatus,
    staleTime: 5 * 60 * 1e3
    // 5 minutes
  });
  const { data: settings, isLoading: isSettingsLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings,
    staleTime: 5 * 60 * 1e3
  });
  const { data: preferences, isLoading } = useQuery({
    queryKey: ["user-email-preferences"],
    queryFn: () => api.getUserEmailPreferences()
  });
  reactExports.useEffect(() => {
    if (advancedAuthStatus && !advancedAuthStatus.advanced_auth_enabled || settings && !settings.user_notifications_enabled) {
      navigate("/settings", { replace: true });
    }
  }, [advancedAuthStatus, settings, navigate]);
  reactExports.useEffect(() => {
    if (preferences) {
      setNotifyPrintStart(preferences.notify_print_start);
      setNotifyPrintComplete(preferences.notify_print_complete);
      setNotifyPrintFailed(preferences.notify_print_failed);
      setNotifyPrintStopped(preferences.notify_print_stopped);
      setIsDirty(false);
    }
  }, [preferences]);
  const saveMutation = useMutation({
    mutationFn: () => api.updateUserEmailPreferences({
      notify_print_start: notifyPrintStart,
      notify_print_complete: notifyPrintComplete,
      notify_print_failed: notifyPrintFailed,
      notify_print_stopped: notifyPrintStopped
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-email-preferences"] });
      setIsDirty(false);
      showToast(t("notifications.userEmail.saveSuccess"), "success");
    },
    onError: (err) => {
      showToast(err.message || t("notifications.userEmail.saveError"), "error");
    }
  });
  const handleToggle = (setter, value) => {
    setter(!value);
    setIsDirty(true);
  };
  if (isLoading || isAdvancedAuthLoading || isSettingsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-bambu-green" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-7 h-7 text-bambu-green" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: t("notifications.userEmail.title") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-6 border-blue-500/30 bg-blue-500/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/20 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-blue-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-medium", children: t("notifications.userEmail.emailNotifications") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("notifications.userEmail.emailNotificationsDesc") }),
        user?.email ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-400 mt-2", children: [
          t("notifications.userEmail.sendingTo"),
          ": ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: user.email })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-400 mt-2", children: t("notifications.userEmail.noEmailWarning") })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("notifications.userEmail.printJobNotifications") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mt-1", children: t("notifications.userEmail.printJobNotificationsDesc") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-bambu-dark rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-full flex items-center justify-center ${notifyPrintStart ? "bg-bambu-green/20" : "bg-bambu-dark-tertiary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `w-5 h-5 ${notifyPrintStart ? "text-bambu-green" : "text-bambu-gray"}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("notifications.userEmail.printJobStarts") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("notifications.userEmail.printJobStartsDesc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleToggle(setNotifyPrintStart, notifyPrintStart),
              className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-bambu-green focus:ring-offset-2 focus:ring-offset-bambu-dark ${notifyPrintStart ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
              role: "switch",
              "aria-checked": notifyPrintStart,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifyPrintStart ? "translate-x-6" : "translate-x-1"}`
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-bambu-dark rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-full flex items-center justify-center ${notifyPrintComplete ? "bg-bambu-green/20" : "bg-bambu-dark-tertiary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `w-5 h-5 ${notifyPrintComplete ? "text-bambu-green" : "text-bambu-gray"}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("notifications.userEmail.printJobFinishes") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("notifications.userEmail.printJobFinishesDesc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleToggle(setNotifyPrintComplete, notifyPrintComplete),
              className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-bambu-green focus:ring-offset-2 focus:ring-offset-bambu-dark ${notifyPrintComplete ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
              role: "switch",
              "aria-checked": notifyPrintComplete,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifyPrintComplete ? "translate-x-6" : "translate-x-1"}`
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-bambu-dark rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-full flex items-center justify-center ${notifyPrintFailed ? "bg-bambu-green/20" : "bg-bambu-dark-tertiary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `w-5 h-5 ${notifyPrintFailed ? "text-bambu-green" : "text-bambu-gray"}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("notifications.userEmail.printErrors") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("notifications.userEmail.printErrorsDesc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleToggle(setNotifyPrintFailed, notifyPrintFailed),
              className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-bambu-green focus:ring-offset-2 focus:ring-offset-bambu-dark ${notifyPrintFailed ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
              role: "switch",
              "aria-checked": notifyPrintFailed,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifyPrintFailed ? "translate-x-6" : "translate-x-1"}`
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-bambu-dark rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-full flex items-center justify-center ${notifyPrintStopped ? "bg-bambu-green/20" : "bg-bambu-dark-tertiary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: `w-5 h-5 ${notifyPrintStopped ? "text-bambu-green" : "text-bambu-gray"}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: t("notifications.userEmail.printJobStops") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray", children: t("notifications.userEmail.printJobStopsDesc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleToggle(setNotifyPrintStopped, notifyPrintStopped),
              className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-bambu-green focus:ring-offset-2 focus:ring-offset-bambu-dark ${notifyPrintStopped ? "bg-bambu-green" : "bg-bambu-dark-tertiary"}`,
              role: "switch",
              "aria-checked": notifyPrintStopped,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifyPrintStopped ? "translate-x-6" : "translate-x-1"}`
                }
              )
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        onClick: () => saveMutation.mutate(),
        disabled: !isDirty || saveMutation.isPending || !user?.email,
        children: saveMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
          t("common.saving")
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
          t("common.save")
        ] })
      }
    ) })
  ] });
}
export {
  NotificationsPage
};
