import { G as useNavigate, u as useTranslation, k as useAuth, a as useToast, r as reactExports, d as useQuery, e as useMutation, j as jsxRuntimeExports, aU as APP_LOGO_ALT, aV as APP_LOGO_SRC, y as Card, a5 as CardHeader, ac as Mail, B as Button, X, z as CardContent, f as api } from "./index-By7NB6Yd.js";
function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showForgotPassword, setShowForgotPassword] = reactExports.useState(false);
  const [forgotEmail, setForgotEmail] = reactExports.useState("");
  const { data: advancedAuthStatus } = useQuery({
    queryKey: ["advancedAuthStatus"],
    queryFn: () => api.getAdvancedAuthStatus()
  });
  const loginMutation = useMutation({
    mutationFn: () => login(username, password),
    onSuccess: () => {
      showToast(t("login.loginSuccess"));
      navigate("/");
    },
    onError: (error) => {
      showToast(error.message || t("login.loginFailed"), "error");
    }
  });
  const forgotPasswordMutation = useMutation({
    mutationFn: (email) => api.forgotPassword({ email }),
    onSuccess: (data) => {
      showToast(data.message, "success");
      setShowForgotPassword(false);
      setForgotEmail("");
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      showToast(t("login.enterCredentials"), "error");
      return;
    }
    loginMutation.mutate();
  };
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      showToast("Please enter your email address", "error");
      return;
    }
    forgotPasswordMutation.mutate(forgotEmail);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex items-center justify-center bg-bambu-dark p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full space-y-8 p-8 bg-gradient-to-br from-bambu-card to-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: APP_LOGO_SRC,
            alt: APP_LOGO_ALT,
            className: "h-16 w-auto max-w-full object-contain"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white", children: t("login.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-bambu-gray", children: t("login.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "username", className: "block text-sm font-medium text-white mb-2", children: advancedAuthStatus?.advanced_auth_enabled ? t("login.usernameOrEmail") || "Username or Email" : t("login.username") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "username",
                type: "text",
                required: true,
                value: username,
                onChange: (e) => setUsername(e.target.value),
                className: "block w-full px-4 py-3 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors",
                placeholder: advancedAuthStatus?.advanced_auth_enabled ? t("login.usernameOrEmailPlaceholder") || "Enter your username or email" : t("login.usernamePlaceholder"),
                autoComplete: "username"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-white mb-2", children: t("login.password") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "password",
                type: "password",
                required: true,
                value: password,
                onChange: (e) => setPassword(e.target.value),
                className: "block w-full px-4 py-3 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors",
                placeholder: t("login.passwordPlaceholder"),
                autoComplete: "current-password"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: loginMutation.isPending,
            className: "w-full flex justify-center py-3 px-4 bg-bambu-green hover:bg-bambu-green-light text-white font-medium rounded-lg shadow-lg shadow-bambu-green/20 hover:shadow-bambu-green/30 focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:ring-offset-2 focus:ring-offset-bambu-dark-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-bambu-green",
            children: loginMutation.isPending ? t("login.signingIn") : t("login.signIn")
          }
        ) }),
        advancedAuthStatus?.advanced_auth_enabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowForgotPassword(true),
            className: "text-sm text-bambu-gray hover:text-bambu-green transition-colors",
            children: t("login.forgotPassword")
          }
        ) })
      ] })
    ] }),
    showForgotPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
        onClick: () => setShowForgotPassword(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "w-full max-w-md",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-bambu-green" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-white", children: t("login.forgotPasswordTitle") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => {
                      setShowForgotPassword(false);
                      setForgotEmail("");
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: advancedAuthStatus?.advanced_auth_enabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleForgotPassword, className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-sm", children: t("login.forgotPasswordEmailMessage") || "Enter your email address and we'll send you a new password." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "forgot-email", className: "block text-sm font-medium text-white mb-2", children: t("login.emailAddress") || "Email Address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "forgot-email",
                      type: "email",
                      required: true,
                      value: forgotEmail,
                      onChange: (e) => setForgotEmail(e.target.value),
                      className: "block w-full px-4 py-3 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors",
                      placeholder: t("login.emailPlaceholder") || "your.email@example.com"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "secondary",
                      className: "flex-1",
                      onClick: () => {
                        setShowForgotPassword(false);
                        setForgotEmail("");
                      },
                      children: t("login.cancel") || "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      className: "flex-1",
                      disabled: forgotPasswordMutation.isPending,
                      children: forgotPasswordMutation.isPending ? t("login.sending") || "Sending..." : t("login.sendResetEmail") || "Send Reset Email"
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("login.forgotPasswordMessage") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium", children: t("login.howToReset") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm text-bambu-gray space-y-1 list-decimal list-inside", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("login.resetStep1") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("login.resetStep2") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("login.resetStep3") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("login.resetStep4") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "secondary",
                    className: "w-full",
                    onClick: () => setShowForgotPassword(false),
                    children: t("login.gotIt")
                  }
                )
              ] }) })
            ]
          }
        )
      }
    )
  ] });
}
export {
  LoginPage
};
