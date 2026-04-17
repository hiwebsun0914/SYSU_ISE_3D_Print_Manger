import { aD as useParams, G as useNavigate, b as useQueryClient, u as useTranslation, a as useToast, r as reactExports, d as useQuery, e as useMutation, j as jsxRuntimeExports, L as LoaderCircle, T as TriangleAlert, B as Button, y as Card, f as api } from "./index-CeSodUhS.js";
import { A as ArrowLeft } from "./arrow-left-aI9VygVZ.js";
import { S as Search } from "./search-DTjW5Uxm.js";
import { C as Check } from "./check-RkcQbG5G.js";
import { M as Minus } from "./minus-D6fLunzP.js";
import { S as Shield } from "./shield-C0TCZxHm.js";
import { S as Save } from "./save-BgVATD4Y.js";
function GroupEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { showToast } = useToast();
  const isEditing = Boolean(id);
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [permissions, setPermissions] = reactExports.useState([]);
  const [search, setSearch] = reactExports.useState("");
  const [initialized, setInitialized] = reactExports.useState(false);
  const { data: groupData, isLoading: groupLoading } = useQuery({
    queryKey: ["group", id],
    queryFn: () => api.getGroup(Number(id)),
    enabled: isEditing
  });
  const { data: permissionsData, isLoading: permissionsLoading } = useQuery({
    queryKey: ["permissions"],
    queryFn: () => api.getPermissions()
  });
  if (isEditing && groupData && !initialized) {
    setName(groupData.name);
    setDescription(groupData.description || "");
    setPermissions(groupData.permissions);
    setInitialized(true);
  }
  const createMutation = useMutation({
    mutationFn: (data) => api.createGroup(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      showToast(t("groups.toast.created"));
      navigate("/settings?tab=users");
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const updateMutation = useMutation({
    mutationFn: (data) => api.updateGroup(Number(id), data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      showToast(t("groups.toast.updated"));
      navigate("/settings?tab=users");
    },
    onError: (error) => {
      showToast(error.message, "error");
    }
  });
  const isSaving = createMutation.isPending || updateMutation.isPending;
  const handleSave = () => {
    if (!name.trim()) {
      showToast(t("groups.toast.enterGroupName"), "error");
      return;
    }
    if (isEditing) {
      updateMutation.mutate({
        name: name !== groupData?.name ? name : void 0,
        description,
        permissions
      });
    } else {
      createMutation.mutate({
        name,
        description: description || void 0,
        permissions
      });
    }
  };
  const togglePermission = (perm) => {
    setPermissions(
      (prev) => prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };
  const toggleCategoryPermissions = (category, checked) => {
    const categoryPerms = category.permissions.map((p) => p.value);
    setPermissions((prev) => {
      const otherPerms = prev.filter((p) => !categoryPerms.includes(p));
      return checked ? [...otherPerms, ...categoryPerms] : otherPerms;
    });
  };
  const isCategoryFullySelected = (category) => category.permissions.every((p) => permissions.includes(p.value));
  const isCategoryPartiallySelected = (category) => {
    const count = category.permissions.filter((p) => permissions.includes(p.value)).length;
    return count > 0 && count < category.permissions.length;
  };
  const selectAll = () => {
    if (permissionsData) {
      setPermissions(permissionsData.all_permissions);
    }
  };
  const clearAll = () => {
    setPermissions([]);
  };
  const searchLower = search.toLowerCase();
  const filteredCategories = reactExports.useMemo(() => {
    if (!permissionsData) return [];
    if (!searchLower) return permissionsData.categories;
    return permissionsData.categories.map((cat) => ({
      ...cat,
      permissions: cat.permissions.filter(
        (p) => p.label.toLowerCase().includes(searchLower)
      )
    })).filter((cat) => cat.permissions.length > 0);
  }, [permissionsData, searchLower]);
  const totalPermissions = permissionsData?.all_permissions.length ?? 0;
  if (groupLoading || permissionsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 text-bambu-green animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => navigate("/settings?tab=users"),
          className: "p-2 rounded-lg hover:bg-bambu-dark-tertiary text-bambu-gray hover:text-white transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-white", children: isEditing ? t("groups.editor.title") : t("groups.editor.createTitle") })
    ] }),
    isEditing && groupData?.is_system && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 shrink-0" }),
      t("groups.form.systemGroupWarning")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("groups.form.groupName") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: name,
            onChange: (e) => setName(e.target.value),
            disabled: isEditing && groupData?.is_system,
            className: "w-full px-4 py-3 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors disabled:opacity-50",
            placeholder: t("groups.form.groupNamePlaceholder")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-white mb-2", children: t("groups.form.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: description,
            onChange: (e) => setDescription(e.target.value),
            className: "w-full px-4 py-3 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors",
            placeholder: t("groups.form.descriptionPlaceholder")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bambu-gray", children: [
          t("groups.editor.permissionsSelected", { count: permissions.length }),
          " / ",
          totalPermissions
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: selectAll, children: t("groups.editor.selectAll") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: clearAll, children: t("groups.editor.clearAll") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-bambu-gray" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: t("groups.editor.search"),
            className: "pl-9 pr-4 py-2 text-sm bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg text-white placeholder-bambu-gray focus:outline-none focus:ring-2 focus:ring-bambu-green/50 focus:border-bambu-green transition-colors w-64"
          }
        )
      ] })
    ] }),
    filteredCategories.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-bambu-gray", children: t("groups.editor.noResults") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: filteredCategories.map((category) => {
      const fullCategory = permissionsData.categories.find((c) => c.name === category.name);
      const selectedCount = fullCategory.permissions.filter((p) => permissions.includes(p.value)).length;
      const totalCount = fullCategory.permissions.length;
      const fullySelected = isCategoryFullySelected(fullCategory);
      const partiallySelected = isCategoryPartiallySelected(fullCategory);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-bambu-dark-secondary border-b border-bambu-dark-tertiary rounded-t-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => toggleCategoryPermissions(fullCategory, !fullySelected),
                className: `w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0 ${fullySelected ? "bg-bambu-green border-bambu-green" : partiallySelected ? "bg-bambu-green/50 border-bambu-green" : "border-bambu-gray hover:border-white"}`,
                children: [
                  fullySelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-white" }),
                  partiallySelected && !fullySelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3 text-white" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-bambu-gray shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium text-sm", children: category.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bambu-gray tabular-nums", children: [
            selectedCount,
            "/",
            totalCount
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 space-y-1", children: category.permissions.map((perm) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: "flex items-center gap-3 px-2 py-1.5 rounded hover:bg-bambu-dark-secondary cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: permissions.includes(perm.value),
                  onChange: () => togglePermission(perm.value),
                  className: "w-4 h-4 rounded border-bambu-gray text-bambu-green focus:ring-bambu-green focus:ring-offset-0 bg-bambu-dark-secondary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: perm.label })
            ]
          },
          perm.value
        )) })
      ] }, category.name);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-0 left-0 right-0 z-20 px-6 py-3 bg-bambu-dark-secondary border-t border-bambu-dark-tertiary flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => navigate("/settings?tab=users"), children: t("common.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSave, disabled: isSaving || !name.trim(), children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
        t("common.saving")
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
        t("common.save")
      ] }) })
    ] })
  ] });
}
export {
  GroupEditPage
};
