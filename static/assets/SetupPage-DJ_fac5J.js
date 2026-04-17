import { G as useNavigate, u as useTranslation, a as useToast, k as useAuth, r as reactExports, e as useMutation, j as jsxRuntimeExports, aU as APP_LOGO_ALT, aV as APP_LOGO_SRC, m as Info, f as api } from "./index-By7NB6Yd.js";
function SetupPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { showToast } = useToast();
  const { refreshAuth } = useAuth();
  const [authEnabled, setAuthEnabled] = reactExports.useState(false);
  const [adminUsername, setAdminUsername] = reactExports.useState("");
  const [adminPassword, setAdminPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const setupMutation = useMutation({
    mutationFn: () => api.setupAuth({
      auth_enabled: authEnabled,
      admin_username: authEnabled ? adminUsername : void 0,
      admin_password: authEnabled ? adminPassword : void 0
    }),
    onSuccess: async (data) => {
      await refreshAuth();
      if (data.auth_enabled) {
        if (data.admin_created) {
          showToast(t("setup.toast.authEnabledAdminCreated"));
          navigate("/login");
        } else {
          showToast(t("setup.toast.authEnabledExistingAdmins"));
          navigate("/login");
        }
      } else {
        showToast(t("setup.toast.setupCompleted"));
        navigate("/");
      }
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (authEnabled) {
      if (adminUsername || adminPassword) {
        if (!adminUsername || !adminPassword) {
          showToast(t("setup.toast.enterBothCredentials"), "error");
          return;
        }
        if (adminPassword !== confirmPassword) {
          showToast(t("setup.toast.passwordsDoNotMatch"), "error");
          return;
        }
        if (adminPassword.length < 6) {
          showToast(t("setup.toast.passwordTooShort"), "error");
          return;
        }
      }
    }
    setupMutation.mutate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-bambu-dark p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full space-y-8 p-8 bg-gradient-to-br from-bambu-card to-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary shadow-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: APP_LOGO_SRC,
          alt: APP_LOGO_ALT,
          className: "h-16 w-auto max-w-full object-contain"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white", children: t("setup.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-bambu-gray", children: t("setup.subtitle") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center p-4 bg-bambu-dark-secondary/50 rounded-lg border border-bambu-dark-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "auth-enabled",
              type: "checkbox",
              checked: authEnabled,
              onChange: (e) => setAuthEnabled(e.target.checked),
              className: "h-4 w-4 text-bambu-green focus:ring-bambu-green border-bambu-dark-tertiary rounded bg-bambu-dark-secondary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "auth-enabled", className: "ml-3 block text-sm font-medium text-white", children: t("setup.enableAuth") })
        ] }),
        authEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-bambu-dark-secondary/50 border border-bambu-dark-tertiary rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-bambu-green mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-bambu-gray", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium mb-1", children: t("setup.adminAccount") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("setup.adminAccountDesc") })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "admin-username", className: "block text-sm font-medium text-white mb-2", children: [
              t("setup.adminUsername"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray text-xs", children: t("setup.optionalIfAdminExists") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "admin-username",
                type: "text",
                value: adminUsername,
                onChange: (e) => setAdminUsername(e.target.value),
                className: "block w-full px-4 py-3 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors",
                placeholder: t("setup.adminUsernamePlaceholder"),
                autoComplete: "username"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "admin-password", className: "block text-sm font-medium text-white mb-2", children: [
              t("setup.adminPassword"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray text-xs", children: t("setup.optionalIfAdminExists") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "admin-password",
                type: "password",
                value: adminPassword,
                onChange: (e) => setAdminPassword(e.target.value),
                className: "block w-full px-4 py-3 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors",
                placeholder: t("setup.adminPasswordPlaceholder"),
                minLength: 6,
                autoComplete: "new-password"
              }
            )
          ] }),
          adminPassword && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "confirm-password", className: "block text-sm font-medium text-white mb-2", children: t("setup.confirmPassword") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "confirm-password",
                type: "password",
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value),
                className: "block w-full px-4 py-3 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors",
                placeholder: t("setup.confirmPasswordPlaceholder"),
                minLength: 6,
                autoComplete: "new-password"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: setupMutation.isPending,
          className: "w-full flex justify-center py-3 px-4 bg-bambu-green hover:bg-bambu-green-light text-white font-medium rounded-lg shadow-lg shadow-bambu-green/20 hover:shadow-bambu-green/30 focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:ring-offset-2 focus:ring-offset-bambu-dark-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-bambu-green",
          children: setupMutation.isPending ? t("setup.settingUp") : t("setup.completeSetup")
        }
      ) })
    ] })
  ] }) });
}
export {
  SetupPage
};
