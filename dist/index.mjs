import { defineComponent as x, computed as m, createElementBlock as l, openBlock as a, normalizeClass as $, renderSlot as b, Fragment as C, createCommentVNode as c, createElementVNode as v, toDisplayString as y, ref as k, createTextVNode as B, withDirectives as V, vModelDynamic as P, createVNode as S, unref as j } from "vue";
import q from "primevue/dropdown";
const z = ["disabled"], I = {
  key: 0,
  class: "text-button"
}, D = /* @__PURE__ */ x({
  __name: "ProButton",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !1 },
    iconOnly: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: d }) {
    const t = e, o = d, n = m(() => {
      const s = "inline-flex items-center justify-center font-medium rounded transition-all focus:outline-none shadow-xs";
      if (t.iconOnly) {
        const h = "w-8 h-8 flex items-center justify-center", p = {
          primary: "bg-blue-500 hover:bg-blue-600 text-white",
          secondary: "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900",
          dark: "bg-gray-900 hover:bg-black text-white",
          plain: "text-gray-900 hover:bg-gray-100"
        }, w = t.disabled || t.loading ? t.variant === "plain" ? "text-gray-400 cursor-not-allowed" : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed" : "";
        return [h, p[t.variant], w].filter(Boolean).join(" ");
      }
      const g = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
        secondary: "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900",
        dark: "bg-gray-900 hover:bg-black text-white",
        plain: "text-gray-900 hover:bg-gray-100"
      }, i = {
        sm: "px-3 py-1.5 text-xs gap-1.5",
        md: "px-3 py-1.5 text-sm gap-1.5",
        lg: "px-4 py-2 text-base gap-2"
      }, f = t.disabled || t.loading ? "opacity-50 cursor-not-allowed" : "", r = t.fullWidth ? "w-full" : "";
      return [s, g[t.variant], i[t.size], f, r].filter(Boolean).join(" ");
    }), u = (s) => {
      !t.disabled && !t.loading && o("click", s);
    };
    return (s, g) => (a(), l("button", {
      class: $(n.value),
      disabled: e.disabled || e.loading,
      onClick: u
    }, [
      e.iconOnly ? b(s.$slots, "default", { key: 0 }, void 0, !0) : (a(), l(C, { key: 1 }, [
        b(s.$slots, "iconLeft", {}, void 0, !0),
        s.$slots.default ? (a(), l("span", I, [
          b(s.$slots, "default", {}, void 0, !0)
        ])) : c("", !0),
        b(s.$slots, "iconRight", {}, void 0, !0)
      ], 64))
    ], 10, z));
  }
}), F = (e, d) => {
  const t = e.__vccOpts || e;
  for (const [o, n] of d)
    t[o] = n;
  return t;
}, N = /* @__PURE__ */ F(D, [["__scopeId", "data-v-c8f3f8df"]]), O = {
  key: 0,
  class: "px-6 py-4 border-b border-gray-200"
}, L = { class: "text-lg font-semibold text-gray-900" }, M = { class: "px-6 py-4" }, U = {
  key: 1,
  class: "px-6 py-4 border-t border-gray-200 bg-gray-50"
}, E = /* @__PURE__ */ x({
  __name: "ProCard",
  props: {
    title: { default: "" },
    elevated: { type: Boolean, default: !0 },
    bordered: { type: Boolean, default: !1 },
    hoverable: { type: Boolean, default: !1 }
  },
  setup(e) {
    const d = e, t = m(() => {
      const o = "bg-white rounded-lg overflow-hidden", n = d.elevated ? "shadow-md" : "", u = d.bordered ? "border border-gray-200" : "", s = d.hoverable ? "transition-shadow hover:shadow-lg" : "";
      return [o, n, u, s].filter(Boolean).join(" ");
    });
    return (o, n) => (a(), l("div", {
      class: $(t.value)
    }, [
      o.$slots.header || e.title ? (a(), l("div", O, [
        b(o.$slots, "header", {}, () => [
          v("h3", L, y(e.title), 1)
        ])
      ])) : c("", !0),
      v("div", M, [
        b(o.$slots, "default")
      ]),
      o.$slots.footer ? (a(), l("div", U, [
        b(o.$slots, "footer")
      ])) : c("", !0)
    ], 2));
  }
}), W = { class: "flex flex-col gap-1.5" }, R = ["for"], T = {
  key: 0,
  class: "text-red-500"
}, A = { class: "relative" }, G = ["id", "type", "placeholder", "disabled", "required"], H = {
  key: 0,
  class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
}, J = {
  key: 1,
  class: "text-sm text-red-600"
}, K = {
  key: 2,
  class: "text-sm text-gray-500"
}, Q = /* @__PURE__ */ x({
  __name: "ProInput",
  props: {
    modelValue: { default: "" },
    label: {},
    placeholder: {},
    type: { default: "text" },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    error: {},
    hint: {},
    size: { default: "md" }
  },
  emits: ["update:modelValue", "blur", "focus"],
  setup(e, { emit: d }) {
    const t = e, o = d, n = k(`input-${Math.random().toString(36).substr(2, 9)}`), u = k(!1), s = m({
      get: () => t.modelValue,
      set: (r) => o("update:modelValue", r)
    }), g = m(() => {
      const r = "block w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0", h = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg"
      }, p = t.error ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-primary-500 focus:ring-primary-500", w = t.disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "bg-white";
      return [r, h[t.size], p, w].join(" ");
    }), i = (r) => {
      u.value = !1, o("blur", r);
    }, f = (r) => {
      u.value = !0, o("focus", r);
    };
    return (r, h) => (a(), l("div", W, [
      e.label ? (a(), l("label", {
        key: 0,
        for: n.value,
        class: "text-sm font-medium text-gray-700"
      }, [
        B(y(e.label) + " ", 1),
        e.required ? (a(), l("span", T, "*")) : c("", !0)
      ], 8, R)) : c("", !0),
      v("div", A, [
        V(v("input", {
          id: n.value,
          "onUpdate:modelValue": h[0] || (h[0] = (p) => s.value = p),
          type: e.type,
          placeholder: e.placeholder,
          disabled: e.disabled,
          required: e.required,
          class: $(g.value),
          onBlur: i,
          onFocus: f
        }, null, 42, G), [
          [P, s.value]
        ]),
        r.$slots.icon ? (a(), l("div", H, [
          b(r.$slots, "icon")
        ])) : c("", !0)
      ]),
      e.error ? (a(), l("p", J, y(e.error), 1)) : e.hint ? (a(), l("p", K, y(e.hint), 1)) : c("", !0)
    ]));
  }
}), X = { class: "flex flex-col gap-2" }, Y = ["for"], Z = {
  key: 0,
  class: "text-red-500"
}, _ = {
  key: 1,
  class: "text-sm text-red-600"
}, ee = {
  key: 2,
  class: "text-sm text-gray-500"
}, te = /* @__PURE__ */ x({
  __name: "ProSelect",
  props: {
    modelValue: {},
    options: {},
    label: {},
    placeholder: { default: "Select an option" },
    optionLabel: { default: "label" },
    optionValue: { default: "value" },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    error: {},
    hint: {},
    filter: { type: Boolean, default: !1 },
    showClear: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: d }) {
    const t = e, o = d, n = k(`select-${Math.random().toString(36).substr(2, 9)}`), u = m({
      get: () => t.modelValue,
      set: (i) => o("update:modelValue", i)
    }), s = m(() => {
      const i = "w-full", f = t.error ? "p-invalid" : "";
      return [i, f].filter(Boolean).join(" ");
    }), g = (i) => {
      o("change", i);
    };
    return (i, f) => (a(), l("div", X, [
      e.label ? (a(), l("label", {
        key: 0,
        for: n.value,
        class: "text-sm font-medium text-gray-700"
      }, [
        B(y(e.label) + " ", 1),
        e.required ? (a(), l("span", Z, "*")) : c("", !0)
      ], 8, Y)) : c("", !0),
      S(j(q), {
        id: n.value,
        modelValue: u.value,
        "onUpdate:modelValue": f[0] || (f[0] = (r) => u.value = r),
        options: e.options,
        "option-label": e.optionLabel,
        "option-value": e.optionValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        filter: e.filter,
        "show-clear": e.showClear,
        class: $(s.value),
        onChange: g
      }, null, 8, ["id", "modelValue", "options", "option-label", "option-value", "placeholder", "disabled", "filter", "show-clear", "class"]),
      e.error ? (a(), l("p", _, y(e.error), 1)) : e.hint ? (a(), l("p", ee, y(e.hint), 1)) : c("", !0)
    ]));
  }
}), ae = {
  install(e) {
    e.component("ProButton", N), e.component("ProCard", E), e.component("ProInput", Q), e.component("ProSelect", te);
  }
};
export {
  N as ProButton,
  E as ProCard,
  Q as ProInput,
  te as ProSelect,
  ae as ProsyncUIComponents,
  ae as default
};
