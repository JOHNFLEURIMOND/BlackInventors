const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home-CfWCJoNO.js",
      "assets/vendor-CXoAby46.js",
      "assets/Home-BGCxU0oQ.css",
      "assets/NotFound-B7T3oxzp.js",
      "assets/NotFound-BwN_YWFh.css",
    ]),
) => i.map((i) => d[i]);
import { r as S, a as Ta, R as X } from "./vendor-CXoAby46.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const i of a)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const i = {};
    return (
      a.integrity && (i.integrity = a.integrity),
      a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const i = r(a);
    fetch(a.href, i);
  }
})();
var qs = { exports: {} },
  Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa = S,
  Ea = Symbol.for("react.element"),
  Fa = Symbol.for("react.fragment"),
  Ia = Object.prototype.hasOwnProperty,
  Wa = Pa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Aa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qs(e, t, r) {
  var n,
    a = {},
    i = null,
    o = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (n in t) Ia.call(t, n) && !Aa.hasOwnProperty(n) && (a[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) a[n] === void 0 && (a[n] = t[n]);
  return {
    $$typeof: Ea,
    type: e,
    key: i,
    ref: o,
    props: a,
    _owner: Wa.current,
  };
}
Qt.Fragment = Fa;
Qt.jsx = Qs;
Qt.jsxs = Qs;
qs.exports = Qt;
var y = qs.exports,
  Or = {},
  Ms = Ta;
(Or.createRoot = Ms.createRoot), (Or.hydrateRoot = Ms.hydrateRoot);
const La = "modulepreload",
  ja = function (e) {
    return "/" + e;
  },
  Os = {},
  Ks = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        o =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      a = Promise.all(
        r.map((l) => {
          if (((l = ja(l)), l in Os)) return;
          Os[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : La),
            u || ((f.as = "script"), (f.crossOrigin = "")),
            (f.href = l),
            o && f.setAttribute("nonce", o),
            document.head.appendChild(f),
            u)
          )
            return new Promise((h, g) => {
              f.addEventListener("load", h),
                f.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${l}`)),
                );
            });
        }),
      );
    }
    return a
      .then(() => t())
      .catch((i) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
          throw i;
      });
  };
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Yr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Yr || (Yr = {}));
function ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Xs(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function en(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
var Ys;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ys || (Ys = {}));
function Ua(e, t, r) {
  return r === void 0 && (r = "/"), $a(e, t, r, !1);
}
function $a(e, t, r, n) {
  let a = typeof t == "string" ? en(t) : t,
    i = ti(a.pathname || "/", r);
  if (i == null) return null;
  let o = tn(e);
  Ha(o);
  let l = null;
  for (let u = 0; l == null && u < o.length; ++u) {
    let c = ei(i);
    l = Ka(o[u], c, n);
  }
  return l;
}
function tn(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (i, o, l) => {
    let u = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (ee(
        u.relativePath.startsWith(n),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(n.length)));
    let c = Ve([n, u.relativePath]),
      f = r.concat(u);
    i.children &&
      i.children.length > 0 &&
      (ee(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      tn(i.children, t, f, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: qa(c, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, o) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) a(i, o);
      else for (let u of rn(i.path)) a(i, o, u);
    }),
    t
  );
}
function rn(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return a ? [i, ""] : [i];
  let o = rn(n.join("/")),
    l = [];
  return (
    l.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    a && l.push(...o),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Ha(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Qa(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const Ga = /^:[\w-]+$/,
  za = 3,
  Ba = 2,
  Va = 1,
  Za = 10,
  Ja = -2,
  Cs = (e) => e === "*";
function qa(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Cs) && (n += Ja),
    t && (n += Ba),
    r
      .filter((a) => !Cs(a))
      .reduce((a, i) => a + (Ga.test(i) ? za : i === "" ? Va : Za), n)
  );
}
function Qa(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ka(e, t, r) {
  let { routesMeta: n } = e,
    a = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      c = l === n.length - 1,
      f = i === "/" ? t : t.slice(i.length) || "/",
      h = Ns(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        f,
      ),
      g = u.route;
    if (
      (!h &&
        c &&
        r &&
        !n[n.length - 1].route.index &&
        (h = Ns(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          f,
        )),
      !h)
    )
      return null;
    Object.assign(a, h.params),
      o.push({
        params: a,
        pathname: Ve([i, h.pathname]),
        pathnameBase: ri(Ve([i, h.pathnameBase])),
        route: g,
      }),
      h.pathnameBase !== "/" && (i = Ve([i, h.pathnameBase]));
  }
  return o;
}
function Ns(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Xa(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let i = a[0],
    o = i.replace(/(.)\/+$/, "$1"),
    l = a.slice(1);
  return {
    params: n.reduce((c, f, h) => {
      let { paramName: g, isOptional: v } = f;
      if (g === "*") {
        let C = l[h] || "";
        o = i.slice(0, i.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const D = l[h];
      return (
        v && !D ? (c[g] = void 0) : (c[g] = (D || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Xa(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Xs(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let n = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, u) => (
            n.push({ paramName: l, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (a += "\\/*$")
        : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), n]
  );
}
function ei(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Xs(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function ti(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
const Ve = (e) => e.join("/").replace(/\/\/+/g, "/"),
  ri = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function si(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const sn = ["post", "put", "patch", "delete"];
new Set(sn);
const ni = ["get", ...sn];
new Set(ni);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cr() {
  return (
    (Cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Cr.apply(this, arguments)
  );
}
const ai = S.createContext(null),
  ii = S.createContext(null),
  oi = S.createContext(null),
  qr = S.createContext(null),
  Kt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  nn = S.createContext(null);
function an() {
  return S.useContext(qr) != null;
}
function li() {
  return an() || ee(!1), S.useContext(qr).location;
}
function ui(e, t) {
  return ci(e, t);
}
function ci(e, t, r, n) {
  an() || ee(!1);
  let { navigator: a } = S.useContext(oi),
    { matches: i } = S.useContext(Kt),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let c = li(),
    f;
  if (t) {
    var h;
    let R = typeof t == "string" ? en(t) : t;
    u === "/" || ((h = R.pathname) != null && h.startsWith(u)) || ee(!1),
      (f = R);
  } else f = c;
  let g = f.pathname || "/",
    v = g;
  if (u !== "/") {
    let R = u.replace(/^\//, "").split("/");
    v = "/" + g.replace(/^\//, "").split("/").slice(R.length).join("/");
  }
  let D = Ua(e, { pathname: v }),
    C = pi(
      D &&
        D.map((R) =>
          Object.assign({}, R, {
            params: Object.assign({}, l, R.params),
            pathname: Ve([
              u,
              a.encodeLocation
                ? a.encodeLocation(R.pathname).pathname
                : R.pathname,
            ]),
            pathnameBase:
              R.pathnameBase === "/"
                ? u
                : Ve([
                    u,
                    a.encodeLocation
                      ? a.encodeLocation(R.pathnameBase).pathname
                      : R.pathnameBase,
                  ]),
          }),
        ),
      i,
      r,
      n,
    );
  return t && C
    ? S.createElement(
        qr.Provider,
        {
          value: {
            location: Cr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f,
            ),
            navigationType: Yr.Pop,
          },
        },
        C,
      )
    : C;
}
function di() {
  let e = vi(),
    t = si(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? S.createElement("pre", { style: a }, r) : null,
    null,
  );
}
const fi = S.createElement(di, null);
class hi extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Kt.Provider,
          { value: this.props.routeContext },
          S.createElement(nn.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function mi(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = S.useContext(ai);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    S.createElement(Kt.Provider, { value: t }, n)
  );
}
function pi(e, t, r, n) {
  var a;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (i = n) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let o = e,
    l = (a = r) == null ? void 0 : a.errors;
  if (l != null) {
    let f = o.findIndex(
      (h) => h.route.id && (l == null ? void 0 : l[h.route.id]) !== void 0,
    );
    f >= 0 || ee(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let u = !1,
    c = -1;
  if (r && n && n.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let h = o[f];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = f),
        h.route.id)
      ) {
        let { loaderData: g, errors: v } = r,
          D =
            h.route.loader &&
            g[h.route.id] === void 0 &&
            (!v || v[h.route.id] === void 0);
        if (h.route.lazy || D) {
          (u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, h, g) => {
    let v,
      D = !1,
      C = null,
      R = null;
    r &&
      ((v = l && h.route.id ? l[h.route.id] : void 0),
      (C = h.route.errorElement || fi),
      u &&
        (c < 0 && g === 0
          ? ((D = !0), (R = null))
          : c === g &&
            ((D = !0), (R = h.route.hydrateFallbackElement || null))));
    let L = t.concat(o.slice(0, g + 1)),
      F = () => {
        let N;
        return (
          v
            ? (N = C)
            : D
              ? (N = R)
              : h.route.Component
                ? (N = S.createElement(h.route.Component, null))
                : h.route.element
                  ? (N = h.route.element)
                  : (N = f),
          S.createElement(mi, {
            match: h,
            routeContext: { outlet: f, matches: L, isDataRoute: r != null },
            children: N,
          })
        );
      };
    return r && (h.route.ErrorBoundary || h.route.errorElement || g === 0)
      ? S.createElement(hi, {
          location: r.location,
          revalidation: r.revalidation,
          component: C,
          error: v,
          children: F(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
        })
      : F();
  }, null);
}
var Nr = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Nr || {});
function yi(e) {
  let t = S.useContext(ii);
  return t || ee(!1), t;
}
function gi(e) {
  let t = S.useContext(Kt);
  return t || ee(!1), t;
}
function _i(e) {
  let t = gi(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || ee(!1), r.route.id;
}
function vi() {
  var e;
  let t = S.useContext(nn),
    r = yi(Nr.UseRouteError),
    n = _i(Nr.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function Rr(e) {
  ee(!1);
}
function wi(e) {
  let { children: t, location: r } = e;
  return ui(Tr(t), r);
}
new Promise(() => {});
function Tr(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    S.Children.forEach(e, (n, a) => {
      if (!S.isValidElement(n)) return;
      let i = [...t, a];
      if (n.type === S.Fragment) {
        r.push.apply(r, Tr(n.props.children, i));
        return;
      }
      n.type !== Rr && ee(!1), !n.props.index || !n.props.children || ee(!1);
      let o = {
        id: n.props.id || i.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (o.children = Tr(n.props.children, i)), r.push(o);
    }),
    r
  );
}
class Si extends S.Component {
  constructor(t) {
    super(t), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    console.error("ErrorBoundary caught an error", t, r);
  }
  render() {
    return this.state.hasError
      ? y.jsx("h1", { children: "Something went wrong." })
      : this.props.children;
  }
}
s;
const ki = S.lazy(() =>
    Ks(() => import("./Home-CfWCJoNO.js"), __vite__mapDeps([0, 1, 2])),
  ),
  bi = S.lazy(() =>
    Ks(() => import("./NotFound-B7T3oxzp.js"), __vite__mapDeps([3, 1, 4])),
  ),
  xi = () => y.jsx("div", { children: "Loading..." });
function Di() {
  return y.jsx(Si, {
    children: y.jsx(S.Suspense, {
      fallback: y.jsx(xi, {}),
      children: y.jsxs(wi, {
        children: [
          y.jsx(Rr, { path: "/", element: y.jsx(ki, {}) }),
          y.jsx(Rr, { path: "*", element: y.jsx(bi, {}) }),
        ],
      }),
    }),
  });
} //! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var on;
function m() {
  return on.apply(null, arguments);
}
function Mi(e) {
  on = e;
}
function ie(e) {
  return (
    e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
  );
}
function We(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function O(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Qr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e) if (O(e, t)) return !1;
  return !0;
}
function J(e) {
  return e === void 0;
}
function ke(e) {
  return (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  );
}
function St(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function ln(e, t) {
  var r = [],
    n,
    a = e.length;
  for (n = 0; n < a; ++n) r.push(t(e[n], n));
  return r;
}
function Ce(e, t) {
  for (var r in t) O(t, r) && (e[r] = t[r]);
  return (
    O(t, "toString") && (e.toString = t.toString),
    O(t, "valueOf") && (e.valueOf = t.valueOf),
    e
  );
}
function fe(e, t, r, n) {
  return Rn(e, t, r, n, !0).utc();
}
function Oi() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1,
  };
}
function w(e) {
  return e._pf == null && (e._pf = Oi()), e._pf;
}
var Pr;
Array.prototype.some
  ? (Pr = Array.prototype.some)
  : (Pr = function (e) {
      var t = Object(this),
        r = t.length >>> 0,
        n;
      for (n = 0; n < r; n++) if (n in t && e.call(this, t[n], n, t)) return !0;
      return !1;
    });
function Kr(e) {
  var t = null,
    r = !1,
    n = e._d && !isNaN(e._d.getTime());
  if (
    (n &&
      ((t = w(e)),
      (r = Pr.call(t.parsedDateParts, function (a) {
        return a != null;
      })),
      (n =
        t.overflow < 0 &&
        !t.empty &&
        !t.invalidEra &&
        !t.invalidMonth &&
        !t.invalidWeekday &&
        !t.weekdayMismatch &&
        !t.nullInput &&
        !t.invalidFormat &&
        !t.userInvalidated &&
        (!t.meridiem || (t.meridiem && r))),
      e._strict &&
        (n =
          n &&
          t.charsLeftOver === 0 &&
          t.unusedTokens.length === 0 &&
          t.bigHour === void 0)),
    Object.isFrozen == null || !Object.isFrozen(e))
  )
    e._isValid = n;
  else return n;
  return e._isValid;
}
function Xt(e) {
  var t = fe(NaN);
  return e != null ? Ce(w(t), e) : (w(t).userInvalidated = !0), t;
}
var Rs = (m.momentProperties = []),
  vr = !1;
function Xr(e, t) {
  var r,
    n,
    a,
    i = Rs.length;
  if (
    (J(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    J(t._i) || (e._i = t._i),
    J(t._f) || (e._f = t._f),
    J(t._l) || (e._l = t._l),
    J(t._strict) || (e._strict = t._strict),
    J(t._tzm) || (e._tzm = t._tzm),
    J(t._isUTC) || (e._isUTC = t._isUTC),
    J(t._offset) || (e._offset = t._offset),
    J(t._pf) || (e._pf = w(t)),
    J(t._locale) || (e._locale = t._locale),
    i > 0)
  )
    for (r = 0; r < i; r++) (n = Rs[r]), (a = t[n]), J(a) || (e[n] = a);
  return e;
}
function kt(e) {
  Xr(this, e),
    (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
    this.isValid() || (this._d = new Date(NaN)),
    vr === !1 && ((vr = !0), m.updateOffset(this), (vr = !1));
}
function oe(e) {
  return e instanceof kt || (e != null && e._isAMomentObject != null);
}
function un(e) {
  m.suppressDeprecationWarnings === !1 &&
    typeof console < "u" &&
    console.warn &&
    console.warn("Deprecation warning: " + e);
}
function re(e, t) {
  var r = !0;
  return Ce(function () {
    if ((m.deprecationHandler != null && m.deprecationHandler(null, e), r)) {
      var n = [],
        a,
        i,
        o,
        l = arguments.length;
      for (i = 0; i < l; i++) {
        if (((a = ""), typeof arguments[i] == "object")) {
          a +=
            `
[` +
            i +
            "] ";
          for (o in arguments[0])
            O(arguments[0], o) && (a += o + ": " + arguments[0][o] + ", ");
          a = a.slice(0, -2);
        } else a = arguments[i];
        n.push(a);
      }
      un(
        e +
          `
Arguments: ` +
          Array.prototype.slice.call(n).join("") +
          `
` +
          new Error().stack,
      ),
        (r = !1);
    }
    return t.apply(this, arguments);
  }, t);
}
var Ts = {};
function cn(e, t) {
  m.deprecationHandler != null && m.deprecationHandler(e, t),
    Ts[e] || (un(t), (Ts[e] = !0));
}
m.suppressDeprecationWarnings = !1;
m.deprecationHandler = null;
function he(e) {
  return (
    (typeof Function < "u" && e instanceof Function) ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function Yi(e) {
  var t, r;
  for (r in e)
    O(e, r) && ((t = e[r]), he(t) ? (this[r] = t) : (this["_" + r] = t));
  (this._config = e),
    (this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
        "|" +
        /\d{1,2}/.source,
    ));
}
function Er(e, t) {
  var r = Ce({}, e),
    n;
  for (n in t)
    O(t, n) &&
      (We(e[n]) && We(t[n])
        ? ((r[n] = {}), Ce(r[n], e[n]), Ce(r[n], t[n]))
        : t[n] != null
          ? (r[n] = t[n])
          : delete r[n]);
  for (n in e) O(e, n) && !O(t, n) && We(e[n]) && (r[n] = Ce({}, r[n]));
  return r;
}
function es(e) {
  e != null && this.set(e);
}
var Fr;
Object.keys
  ? (Fr = Object.keys)
  : (Fr = function (e) {
      var t,
        r = [];
      for (t in e) O(e, t) && r.push(t);
      return r;
    });
var Ci = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L",
};
function Ni(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return he(n) ? n.call(t, r) : n;
}
function de(e, t, r) {
  var n = "" + Math.abs(e),
    a = t - n.length,
    i = e >= 0;
  return (
    (i ? (r ? "+" : "") : "-") +
    Math.pow(10, Math.max(0, a)).toString().substr(1) +
    n
  );
}
var ts =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  Nt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  wr = {},
  Ze = {};
function _(e, t, r, n) {
  var a = n;
  typeof n == "string" &&
    (a = function () {
      return this[n]();
    }),
    e && (Ze[e] = a),
    t &&
      (Ze[t[0]] = function () {
        return de(a.apply(this, arguments), t[1], t[2]);
      }),
    r &&
      (Ze[r] = function () {
        return this.localeData().ordinal(a.apply(this, arguments), e);
      });
}
function Ri(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Ti(e) {
  var t = e.match(ts),
    r,
    n;
  for (r = 0, n = t.length; r < n; r++)
    Ze[t[r]] ? (t[r] = Ze[t[r]]) : (t[r] = Ri(t[r]));
  return function (a) {
    var i = "",
      o;
    for (o = 0; o < n; o++) i += he(t[o]) ? t[o].call(a, e) : t[o];
    return i;
  };
}
function Et(e, t) {
  return e.isValid()
    ? ((t = dn(t, e.localeData())), (wr[t] = wr[t] || Ti(t)), wr[t](e))
    : e.localeData().invalidDate();
}
function dn(e, t) {
  var r = 5;
  function n(a) {
    return t.longDateFormat(a) || a;
  }
  for (Nt.lastIndex = 0; r >= 0 && Nt.test(e); )
    (e = e.replace(Nt, n)), (Nt.lastIndex = 0), (r -= 1);
  return e;
}
var Pi = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A",
};
function Ei(e) {
  var t = this._longDateFormat[e],
    r = this._longDateFormat[e.toUpperCase()];
  return t || !r
    ? t
    : ((this._longDateFormat[e] = r
        .match(ts)
        .map(function (n) {
          return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd"
            ? n.slice(1)
            : n;
        })
        .join("")),
      this._longDateFormat[e]);
}
var Fi = "Invalid date";
function Ii() {
  return this._invalidDate;
}
var Wi = "%d",
  Ai = /\d{1,2}/;
function Li(e) {
  return this._ordinal.replace("%d", e);
}
var ji = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years",
};
function Ui(e, t, r, n) {
  var a = this._relativeTime[r];
  return he(a) ? a(e, t, r, n) : a.replace(/%d/i, e);
}
function $i(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return he(r) ? r(t) : r.replace(/%s/i, t);
}
var Ps = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year",
};
function se(e) {
  return typeof e == "string" ? Ps[e] || Ps[e.toLowerCase()] : void 0;
}
function rs(e) {
  var t = {},
    r,
    n;
  for (n in e) O(e, n) && ((r = se(n)), r && (t[r] = e[n]));
  return t;
}
var Hi = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1,
};
function Gi(e) {
  var t = [],
    r;
  for (r in e) O(e, r) && t.push({ unit: r, priority: Hi[r] });
  return (
    t.sort(function (n, a) {
      return n.priority - a.priority;
    }),
    t
  );
}
var fn = /\d/,
  Q = /\d\d/,
  hn = /\d{3}/,
  ss = /\d{4}/,
  er = /[+-]?\d{6}/,
  A = /\d\d?/,
  mn = /\d\d\d\d?/,
  pn = /\d\d\d\d\d\d?/,
  tr = /\d{1,3}/,
  ns = /\d{1,4}/,
  rr = /[+-]?\d{1,6}/,
  tt = /\d+/,
  sr = /[+-]?\d+/,
  zi = /Z|[+-]\d\d:?\d\d/gi,
  nr = /Z|[+-]\d\d(?::?\d\d)?/gi,
  Bi = /[+-]?\d+(\.\d{1,3})?/,
  bt =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  rt = /^[1-9]\d?/,
  as = /^([1-9]\d|\d)/,
  $t;
$t = {};
function p(e, t, r) {
  $t[e] = he(t)
    ? t
    : function (n, a) {
        return n && r ? r : t;
      };
}
function Vi(e, t) {
  return O($t, e) ? $t[e](t._strict, t._locale) : new RegExp(Zi(e));
}
function Zi(e) {
  return we(
    e
      .replace("\\", "")
      .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, r, n, a, i) {
        return r || n || a || i;
      }),
  );
}
function we(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function K(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function x(e) {
  var t = +e,
    r = 0;
  return t !== 0 && isFinite(t) && (r = K(t)), r;
}
var Ir = {};
function P(e, t) {
  var r,
    n = t,
    a;
  for (
    typeof e == "string" && (e = [e]),
      ke(t) &&
        (n = function (i, o) {
          o[t] = x(i);
        }),
      a = e.length,
      r = 0;
    r < a;
    r++
  )
    Ir[e[r]] = n;
}
function xt(e, t) {
  P(e, function (r, n, a, i) {
    (a._w = a._w || {}), t(r, a._w, a, i);
  });
}
function Ji(e, t, r) {
  t != null && O(Ir, e) && Ir[e](t, r._a, r, e);
}
function ar(e) {
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
}
var Z = 0,
  _e = 1,
  ce = 2,
  z = 3,
  ne = 4,
  ve = 5,
  Fe = 6,
  qi = 7,
  Qi = 8;
_("Y", 0, 0, function () {
  var e = this.year();
  return e <= 9999 ? de(e, 4) : "+" + e;
});
_(0, ["YY", 2], 0, function () {
  return this.year() % 100;
});
_(0, ["YYYY", 4], 0, "year");
_(0, ["YYYYY", 5], 0, "year");
_(0, ["YYYYYY", 6, !0], 0, "year");
p("Y", sr);
p("YY", A, Q);
p("YYYY", ns, ss);
p("YYYYY", rr, er);
p("YYYYYY", rr, er);
P(["YYYYY", "YYYYYY"], Z);
P("YYYY", function (e, t) {
  t[Z] = e.length === 2 ? m.parseTwoDigitYear(e) : x(e);
});
P("YY", function (e, t) {
  t[Z] = m.parseTwoDigitYear(e);
});
P("Y", function (e, t) {
  t[Z] = parseInt(e, 10);
});
function ft(e) {
  return ar(e) ? 366 : 365;
}
m.parseTwoDigitYear = function (e) {
  return x(e) + (x(e) > 68 ? 1900 : 2e3);
};
var yn = st("FullYear", !0);
function Ki() {
  return ar(this.year());
}
function st(e, t) {
  return function (r) {
    return r != null
      ? (gn(this, e, r), m.updateOffset(this, t), this)
      : mt(this, e);
  };
}
function mt(e, t) {
  if (!e.isValid()) return NaN;
  var r = e._d,
    n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return n ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return n ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return n ? r.getUTCHours() : r.getHours();
    case "Date":
      return n ? r.getUTCDate() : r.getDate();
    case "Day":
      return n ? r.getUTCDay() : r.getDay();
    case "Month":
      return n ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return n ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function gn(e, t, r) {
  var n, a, i, o, l;
  if (!(!e.isValid() || isNaN(r))) {
    switch (((n = e._d), (a = e._isUTC), t)) {
      case "Milliseconds":
        return void (a ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
      case "Seconds":
        return void (a ? n.setUTCSeconds(r) : n.setSeconds(r));
      case "Minutes":
        return void (a ? n.setUTCMinutes(r) : n.setMinutes(r));
      case "Hours":
        return void (a ? n.setUTCHours(r) : n.setHours(r));
      case "Date":
        return void (a ? n.setUTCDate(r) : n.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    (i = r),
      (o = e.month()),
      (l = e.date()),
      (l = l === 29 && o === 1 && !ar(i) ? 28 : l),
      a ? n.setUTCFullYear(i, o, l) : n.setFullYear(i, o, l);
  }
}
function Xi(e) {
  return (e = se(e)), he(this[e]) ? this[e]() : this;
}
function eo(e, t) {
  if (typeof e == "object") {
    e = rs(e);
    var r = Gi(e),
      n,
      a = r.length;
    for (n = 0; n < a; n++) this[r[n].unit](e[r[n].unit]);
  } else if (((e = se(e)), he(this[e]))) return this[e](t);
  return this;
}
function to(e, t) {
  return ((e % t) + t) % t;
}
var $;
Array.prototype.indexOf
  ? ($ = Array.prototype.indexOf)
  : ($ = function (e) {
      var t;
      for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    });
function is(e, t) {
  if (isNaN(e) || isNaN(t)) return NaN;
  var r = to(t, 12);
  return (e += (t - r) / 12), r === 1 ? (ar(e) ? 29 : 28) : 31 - ((r % 7) % 2);
}
_("M", ["MM", 2], "Mo", function () {
  return this.month() + 1;
});
_("MMM", 0, 0, function (e) {
  return this.localeData().monthsShort(this, e);
});
_("MMMM", 0, 0, function (e) {
  return this.localeData().months(this, e);
});
p("M", A, rt);
p("MM", A, Q);
p("MMM", function (e, t) {
  return t.monthsShortRegex(e);
});
p("MMMM", function (e, t) {
  return t.monthsRegex(e);
});
P(["M", "MM"], function (e, t) {
  t[_e] = x(e) - 1;
});
P(["MMM", "MMMM"], function (e, t, r, n) {
  var a = r._locale.monthsParse(e, n, r._strict);
  a != null ? (t[_e] = a) : (w(r).invalidMonth = e);
});
var ro =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_",
    ),
  _n = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  vn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  so = bt,
  no = bt;
function ao(e, t) {
  return e
    ? ie(this._months)
      ? this._months[e.month()]
      : this._months[
          (this._months.isFormat || vn).test(t) ? "format" : "standalone"
        ][e.month()]
    : ie(this._months)
      ? this._months
      : this._months.standalone;
}
function io(e, t) {
  return e
    ? ie(this._monthsShort)
      ? this._monthsShort[e.month()]
      : this._monthsShort[vn.test(t) ? "format" : "standalone"][e.month()]
    : ie(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone;
}
function oo(e, t, r) {
  var n,
    a,
    i,
    o = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (
      this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = [],
        n = 0;
      n < 12;
      ++n
    )
      (i = fe([2e3, n])),
        (this._shortMonthsParse[n] = this.monthsShort(
          i,
          "",
        ).toLocaleLowerCase()),
        (this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase());
  return r
    ? t === "MMM"
      ? ((a = $.call(this._shortMonthsParse, o)), a !== -1 ? a : null)
      : ((a = $.call(this._longMonthsParse, o)), a !== -1 ? a : null)
    : t === "MMM"
      ? ((a = $.call(this._shortMonthsParse, o)),
        a !== -1
          ? a
          : ((a = $.call(this._longMonthsParse, o)), a !== -1 ? a : null))
      : ((a = $.call(this._longMonthsParse, o)),
        a !== -1
          ? a
          : ((a = $.call(this._shortMonthsParse, o)), a !== -1 ? a : null));
}
function lo(e, t, r) {
  var n, a, i;
  if (this._monthsParseExact) return oo.call(this, e, t, r);
  for (
    this._monthsParse ||
      ((this._monthsParse = []),
      (this._longMonthsParse = []),
      (this._shortMonthsParse = [])),
      n = 0;
    n < 12;
    n++
  ) {
    if (
      ((a = fe([2e3, n])),
      r &&
        !this._longMonthsParse[n] &&
        ((this._longMonthsParse[n] = new RegExp(
          "^" + this.months(a, "").replace(".", "") + "$",
          "i",
        )),
        (this._shortMonthsParse[n] = new RegExp(
          "^" + this.monthsShort(a, "").replace(".", "") + "$",
          "i",
        ))),
      !r &&
        !this._monthsParse[n] &&
        ((i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, "")),
        (this._monthsParse[n] = new RegExp(i.replace(".", ""), "i"))),
      r && t === "MMMM" && this._longMonthsParse[n].test(e))
    )
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e)) return n;
    if (!r && this._monthsParse[n].test(e)) return n;
  }
}
function wn(e, t) {
  if (!e.isValid()) return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t)) t = x(t);
    else if (((t = e.localeData().monthsParse(t)), !ke(t))) return e;
  }
  var r = t,
    n = e.date();
  return (
    (n = n < 29 ? n : Math.min(n, is(e.year(), r))),
    e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n),
    e
  );
}
function Sn(e) {
  return e != null
    ? (wn(this, e), m.updateOffset(this, !0), this)
    : mt(this, "Month");
}
function uo() {
  return is(this.year(), this.month());
}
function co(e) {
  return this._monthsParseExact
    ? (O(this, "_monthsRegex") || kn.call(this),
      e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    : (O(this, "_monthsShortRegex") || (this._monthsShortRegex = so),
      this._monthsShortStrictRegex && e
        ? this._monthsShortStrictRegex
        : this._monthsShortRegex);
}
function fo(e) {
  return this._monthsParseExact
    ? (O(this, "_monthsRegex") || kn.call(this),
      e ? this._monthsStrictRegex : this._monthsRegex)
    : (O(this, "_monthsRegex") || (this._monthsRegex = no),
      this._monthsStrictRegex && e
        ? this._monthsStrictRegex
        : this._monthsRegex);
}
function kn() {
  function e(u, c) {
    return c.length - u.length;
  }
  var t = [],
    r = [],
    n = [],
    a,
    i,
    o,
    l;
  for (a = 0; a < 12; a++)
    (i = fe([2e3, a])),
      (o = we(this.monthsShort(i, ""))),
      (l = we(this.months(i, ""))),
      t.push(o),
      r.push(l),
      n.push(l),
      n.push(o);
  t.sort(e),
    r.sort(e),
    n.sort(e),
    (this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i")),
    (this._monthsShortRegex = this._monthsRegex),
    (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
    (this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function ho(e, t, r, n, a, i, o) {
  var l;
  return (
    e < 100 && e >= 0
      ? ((l = new Date(e + 400, t, r, n, a, i, o)),
        isFinite(l.getFullYear()) && l.setFullYear(e))
      : (l = new Date(e, t, r, n, a, i, o)),
    l
  );
}
function pt(e) {
  var t, r;
  return (
    e < 100 && e >= 0
      ? ((r = Array.prototype.slice.call(arguments)),
        (r[0] = e + 400),
        (t = new Date(Date.UTC.apply(null, r))),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
      : (t = new Date(Date.UTC.apply(null, arguments))),
    t
  );
}
function Ht(e, t, r) {
  var n = 7 + t - r,
    a = (7 + pt(e, 0, n).getUTCDay() - t) % 7;
  return -a + n - 1;
}
function bn(e, t, r, n, a) {
  var i = (7 + r - n) % 7,
    o = Ht(e, n, a),
    l = 1 + 7 * (t - 1) + i + o,
    u,
    c;
  return (
    l <= 0
      ? ((u = e - 1), (c = ft(u) + l))
      : l > ft(e)
        ? ((u = e + 1), (c = l - ft(e)))
        : ((u = e), (c = l)),
    { year: u, dayOfYear: c }
  );
}
function yt(e, t, r) {
  var n = Ht(e.year(), t, r),
    a = Math.floor((e.dayOfYear() - n - 1) / 7) + 1,
    i,
    o;
  return (
    a < 1
      ? ((o = e.year() - 1), (i = a + Se(o, t, r)))
      : a > Se(e.year(), t, r)
        ? ((i = a - Se(e.year(), t, r)), (o = e.year() + 1))
        : ((o = e.year()), (i = a)),
    { week: i, year: o }
  );
}
function Se(e, t, r) {
  var n = Ht(e, t, r),
    a = Ht(e + 1, t, r);
  return (ft(e) - n + a) / 7;
}
_("w", ["ww", 2], "wo", "week");
_("W", ["WW", 2], "Wo", "isoWeek");
p("w", A, rt);
p("ww", A, Q);
p("W", A, rt);
p("WW", A, Q);
xt(["w", "ww", "W", "WW"], function (e, t, r, n) {
  t[n.substr(0, 1)] = x(e);
});
function mo(e) {
  return yt(e, this._week.dow, this._week.doy).week;
}
var po = { dow: 0, doy: 6 };
function yo() {
  return this._week.dow;
}
function go() {
  return this._week.doy;
}
function _o(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function vo(e) {
  var t = yt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
_("d", 0, "do", "day");
_("dd", 0, 0, function (e) {
  return this.localeData().weekdaysMin(this, e);
});
_("ddd", 0, 0, function (e) {
  return this.localeData().weekdaysShort(this, e);
});
_("dddd", 0, 0, function (e) {
  return this.localeData().weekdays(this, e);
});
_("e", 0, 0, "weekday");
_("E", 0, 0, "isoWeekday");
p("d", A);
p("e", A);
p("E", A);
p("dd", function (e, t) {
  return t.weekdaysMinRegex(e);
});
p("ddd", function (e, t) {
  return t.weekdaysShortRegex(e);
});
p("dddd", function (e, t) {
  return t.weekdaysRegex(e);
});
xt(["dd", "ddd", "dddd"], function (e, t, r, n) {
  var a = r._locale.weekdaysParse(e, n, r._strict);
  a != null ? (t.d = a) : (w(r).invalidWeekday = e);
});
xt(["d", "e", "E"], function (e, t, r, n) {
  t[n] = x(e);
});
function wo(e, t) {
  return typeof e != "string"
    ? e
    : isNaN(e)
      ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
      : parseInt(e, 10);
}
function So(e, t) {
  return typeof e == "string"
    ? t.weekdaysParse(e) % 7 || 7
    : isNaN(e)
      ? null
      : e;
}
function os(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var ko = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  xn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  bo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  xo = bt,
  Do = bt,
  Mo = bt;
function Oo(e, t) {
  var r = ie(this._weekdays)
    ? this._weekdays
    : this._weekdays[
        e && e !== !0 && this._weekdays.isFormat.test(t)
          ? "format"
          : "standalone"
      ];
  return e === !0 ? os(r, this._week.dow) : e ? r[e.day()] : r;
}
function Yo(e) {
  return e === !0
    ? os(this._weekdaysShort, this._week.dow)
    : e
      ? this._weekdaysShort[e.day()]
      : this._weekdaysShort;
}
function Co(e) {
  return e === !0
    ? os(this._weekdaysMin, this._week.dow)
    : e
      ? this._weekdaysMin[e.day()]
      : this._weekdaysMin;
}
function No(e, t, r) {
  var n,
    a,
    i,
    o = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (
      this._weekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._minWeekdaysParse = [],
        n = 0;
      n < 7;
      ++n
    )
      (i = fe([2e3, 1]).day(n)),
        (this._minWeekdaysParse[n] = this.weekdaysMin(
          i,
          "",
        ).toLocaleLowerCase()),
        (this._shortWeekdaysParse[n] = this.weekdaysShort(
          i,
          "",
        ).toLocaleLowerCase()),
        (this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase());
  return r
    ? t === "dddd"
      ? ((a = $.call(this._weekdaysParse, o)), a !== -1 ? a : null)
      : t === "ddd"
        ? ((a = $.call(this._shortWeekdaysParse, o)), a !== -1 ? a : null)
        : ((a = $.call(this._minWeekdaysParse, o)), a !== -1 ? a : null)
    : t === "dddd"
      ? ((a = $.call(this._weekdaysParse, o)),
        a !== -1 || ((a = $.call(this._shortWeekdaysParse, o)), a !== -1)
          ? a
          : ((a = $.call(this._minWeekdaysParse, o)), a !== -1 ? a : null))
      : t === "ddd"
        ? ((a = $.call(this._shortWeekdaysParse, o)),
          a !== -1 || ((a = $.call(this._weekdaysParse, o)), a !== -1)
            ? a
            : ((a = $.call(this._minWeekdaysParse, o)), a !== -1 ? a : null))
        : ((a = $.call(this._minWeekdaysParse, o)),
          a !== -1 || ((a = $.call(this._weekdaysParse, o)), a !== -1)
            ? a
            : ((a = $.call(this._shortWeekdaysParse, o)), a !== -1 ? a : null));
}
function Ro(e, t, r) {
  var n, a, i;
  if (this._weekdaysParseExact) return No.call(this, e, t, r);
  for (
    this._weekdaysParse ||
      ((this._weekdaysParse = []),
      (this._minWeekdaysParse = []),
      (this._shortWeekdaysParse = []),
      (this._fullWeekdaysParse = [])),
      n = 0;
    n < 7;
    n++
  ) {
    if (
      ((a = fe([2e3, 1]).day(n)),
      r &&
        !this._fullWeekdaysParse[n] &&
        ((this._fullWeekdaysParse[n] = new RegExp(
          "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
          "i",
        )),
        (this._shortWeekdaysParse[n] = new RegExp(
          "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
          "i",
        )),
        (this._minWeekdaysParse[n] = new RegExp(
          "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
          "i",
        ))),
      this._weekdaysParse[n] ||
        ((i =
          "^" +
          this.weekdays(a, "") +
          "|^" +
          this.weekdaysShort(a, "") +
          "|^" +
          this.weekdaysMin(a, "")),
        (this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i"))),
      r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
    )
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e)) return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e)) return n;
    if (!r && this._weekdaysParse[n].test(e)) return n;
  }
}
function To(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = mt(this, "Day");
  return e != null ? ((e = wo(e, this.localeData())), this.add(e - t, "d")) : t;
}
function Po(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Eo(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    var t = So(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else return this.day() || 7;
}
function Fo(e) {
  return this._weekdaysParseExact
    ? (O(this, "_weekdaysRegex") || ls.call(this),
      e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    : (O(this, "_weekdaysRegex") || (this._weekdaysRegex = xo),
      this._weekdaysStrictRegex && e
        ? this._weekdaysStrictRegex
        : this._weekdaysRegex);
}
function Io(e) {
  return this._weekdaysParseExact
    ? (O(this, "_weekdaysRegex") || ls.call(this),
      e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    : (O(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Do),
      this._weekdaysShortStrictRegex && e
        ? this._weekdaysShortStrictRegex
        : this._weekdaysShortRegex);
}
function Wo(e) {
  return this._weekdaysParseExact
    ? (O(this, "_weekdaysRegex") || ls.call(this),
      e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    : (O(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Mo),
      this._weekdaysMinStrictRegex && e
        ? this._weekdaysMinStrictRegex
        : this._weekdaysMinRegex);
}
function ls() {
  function e(f, h) {
    return h.length - f.length;
  }
  var t = [],
    r = [],
    n = [],
    a = [],
    i,
    o,
    l,
    u,
    c;
  for (i = 0; i < 7; i++)
    (o = fe([2e3, 1]).day(i)),
      (l = we(this.weekdaysMin(o, ""))),
      (u = we(this.weekdaysShort(o, ""))),
      (c = we(this.weekdays(o, ""))),
      t.push(l),
      r.push(u),
      n.push(c),
      a.push(l),
      a.push(u),
      a.push(c);
  t.sort(e),
    r.sort(e),
    n.sort(e),
    a.sort(e),
    (this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i")),
    (this._weekdaysShortRegex = this._weekdaysRegex),
    (this._weekdaysMinRegex = this._weekdaysRegex),
    (this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")),
    (this._weekdaysShortStrictRegex = new RegExp(
      "^(" + r.join("|") + ")",
      "i",
    )),
    (this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function us() {
  return this.hours() % 12 || 12;
}
function Ao() {
  return this.hours() || 24;
}
_("H", ["HH", 2], 0, "hour");
_("h", ["hh", 2], 0, us);
_("k", ["kk", 2], 0, Ao);
_("hmm", 0, 0, function () {
  return "" + us.apply(this) + de(this.minutes(), 2);
});
_("hmmss", 0, 0, function () {
  return "" + us.apply(this) + de(this.minutes(), 2) + de(this.seconds(), 2);
});
_("Hmm", 0, 0, function () {
  return "" + this.hours() + de(this.minutes(), 2);
});
_("Hmmss", 0, 0, function () {
  return "" + this.hours() + de(this.minutes(), 2) + de(this.seconds(), 2);
});
function Dn(e, t) {
  _(e, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), t);
  });
}
Dn("a", !0);
Dn("A", !1);
function Mn(e, t) {
  return t._meridiemParse;
}
p("a", Mn);
p("A", Mn);
p("H", A, as);
p("h", A, rt);
p("k", A, rt);
p("HH", A, Q);
p("hh", A, Q);
p("kk", A, Q);
p("hmm", mn);
p("hmmss", pn);
p("Hmm", mn);
p("Hmmss", pn);
P(["H", "HH"], z);
P(["k", "kk"], function (e, t, r) {
  var n = x(e);
  t[z] = n === 24 ? 0 : n;
});
P(["a", "A"], function (e, t, r) {
  (r._isPm = r._locale.isPM(e)), (r._meridiem = e);
});
P(["h", "hh"], function (e, t, r) {
  (t[z] = x(e)), (w(r).bigHour = !0);
});
P("hmm", function (e, t, r) {
  var n = e.length - 2;
  (t[z] = x(e.substr(0, n))), (t[ne] = x(e.substr(n))), (w(r).bigHour = !0);
});
P("hmmss", function (e, t, r) {
  var n = e.length - 4,
    a = e.length - 2;
  (t[z] = x(e.substr(0, n))),
    (t[ne] = x(e.substr(n, 2))),
    (t[ve] = x(e.substr(a))),
    (w(r).bigHour = !0);
});
P("Hmm", function (e, t, r) {
  var n = e.length - 2;
  (t[z] = x(e.substr(0, n))), (t[ne] = x(e.substr(n)));
});
P("Hmmss", function (e, t, r) {
  var n = e.length - 4,
    a = e.length - 2;
  (t[z] = x(e.substr(0, n))),
    (t[ne] = x(e.substr(n, 2))),
    (t[ve] = x(e.substr(a)));
});
function Lo(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var jo = /[ap]\.?m?\.?/i,
  Uo = st("Hours", !0);
function $o(e, t, r) {
  return e > 11 ? (r ? "pm" : "PM") : r ? "am" : "AM";
}
var On = {
    calendar: Ci,
    longDateFormat: Pi,
    invalidDate: Fi,
    ordinal: Wi,
    dayOfMonthOrdinalParse: Ai,
    relativeTime: ji,
    months: ro,
    monthsShort: _n,
    week: po,
    weekdays: ko,
    weekdaysMin: bo,
    weekdaysShort: xn,
    meridiemParse: jo,
  },
  j = {},
  ut = {},
  gt;
function Ho(e, t) {
  var r,
    n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1) if (e[r] !== t[r]) return r;
  return n;
}
function Es(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Go(e) {
  for (var t = 0, r, n, a, i; t < e.length; ) {
    for (
      i = Es(e[t]).split("-"),
        r = i.length,
        n = Es(e[t + 1]),
        n = n ? n.split("-") : null;
      r > 0;

    ) {
      if (((a = ir(i.slice(0, r).join("-"))), a)) return a;
      if (n && n.length >= r && Ho(i, n) >= r - 1) break;
      r--;
    }
    t++;
  }
  return gt;
}
function zo(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ir(e) {
  var t = null,
    r;
  if (
    j[e] === void 0 &&
    typeof module < "u" &&
    module &&
    module.exports &&
    zo(e)
  )
    try {
      (t = gt._abbr), (r = require), r("./locale/" + e), Re(t);
    } catch {
      j[e] = null;
    }
  return j[e];
}
function Re(e, t) {
  var r;
  return (
    e &&
      (J(t) ? (r = be(e)) : (r = cs(e, t)),
      r
        ? (gt = r)
        : typeof console < "u" &&
          console.warn &&
          console.warn(
            "Locale " + e + " not found. Did you forget to load it?",
          )),
    gt._abbr
  );
}
function cs(e, t) {
  if (t !== null) {
    var r,
      n = On;
    if (((t.abbr = e), j[e] != null))
      cn(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.",
      ),
        (n = j[e]._config);
    else if (t.parentLocale != null)
      if (j[t.parentLocale] != null) n = j[t.parentLocale]._config;
      else if (((r = ir(t.parentLocale)), r != null)) n = r._config;
      else
        return (
          ut[t.parentLocale] || (ut[t.parentLocale] = []),
          ut[t.parentLocale].push({ name: e, config: t }),
          null
        );
    return (
      (j[e] = new es(Er(n, t))),
      ut[e] &&
        ut[e].forEach(function (a) {
          cs(a.name, a.config);
        }),
      Re(e),
      j[e]
    );
  } else return delete j[e], null;
}
function Bo(e, t) {
  if (t != null) {
    var r,
      n,
      a = On;
    j[e] != null && j[e].parentLocale != null
      ? j[e].set(Er(j[e]._config, t))
      : ((n = ir(e)),
        n != null && (a = n._config),
        (t = Er(a, t)),
        n == null && (t.abbr = e),
        (r = new es(t)),
        (r.parentLocale = j[e]),
        (j[e] = r)),
      Re(e);
  } else
    j[e] != null &&
      (j[e].parentLocale != null
        ? ((j[e] = j[e].parentLocale), e === Re() && Re(e))
        : j[e] != null && delete j[e]);
  return j[e];
}
function be(e) {
  var t;
  if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
    return gt;
  if (!ie(e)) {
    if (((t = ir(e)), t)) return t;
    e = [e];
  }
  return Go(e);
}
function Vo() {
  return Fr(j);
}
function ds(e) {
  var t,
    r = e._a;
  return (
    r &&
      w(e).overflow === -2 &&
      ((t =
        r[_e] < 0 || r[_e] > 11
          ? _e
          : r[ce] < 1 || r[ce] > is(r[Z], r[_e])
            ? ce
            : r[z] < 0 ||
                r[z] > 24 ||
                (r[z] === 24 && (r[ne] !== 0 || r[ve] !== 0 || r[Fe] !== 0))
              ? z
              : r[ne] < 0 || r[ne] > 59
                ? ne
                : r[ve] < 0 || r[ve] > 59
                  ? ve
                  : r[Fe] < 0 || r[Fe] > 999
                    ? Fe
                    : -1),
      w(e)._overflowDayOfYear && (t < Z || t > ce) && (t = ce),
      w(e)._overflowWeeks && t === -1 && (t = qi),
      w(e)._overflowWeekday && t === -1 && (t = Qi),
      (w(e).overflow = t)),
    e
  );
}
var Zo =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  Jo =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  qo = /Z|[+-]\d\d(?::?\d\d)?/,
  Rt = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, !1],
    ["YYYY", /\d{4}/, !1],
  ],
  Sr = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/],
  ],
  Qo = /^\/?Date\((-?\d+)/i,
  Ko =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  Xo = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
  };
function Yn(e) {
  var t,
    r,
    n = e._i,
    a = Zo.exec(n) || Jo.exec(n),
    i,
    o,
    l,
    u,
    c = Rt.length,
    f = Sr.length;
  if (a) {
    for (w(e).iso = !0, t = 0, r = c; t < r; t++)
      if (Rt[t][1].exec(a[1])) {
        (o = Rt[t][0]), (i = Rt[t][2] !== !1);
        break;
      }
    if (o == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = f; t < r; t++)
        if (Sr[t][1].exec(a[3])) {
          l = (a[2] || " ") + Sr[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && l != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (qo.exec(a[4])) u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    (e._f = o + (l || "") + (u || "")), hs(e);
  } else e._isValid = !1;
}
function el(e, t, r, n, a, i) {
  var o = [
    tl(e),
    _n.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(a, 10),
  ];
  return i && o.push(parseInt(i, 10)), o;
}
function tl(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function rl(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .replace(/^\s\s*/, "")
    .replace(/\s\s*$/, "");
}
function sl(e, t, r) {
  if (e) {
    var n = xn.indexOf(e),
      a = new Date(t[0], t[1], t[2]).getDay();
    if (n !== a) return (w(r).weekdayMismatch = !0), (r._isValid = !1), !1;
  }
  return !0;
}
function nl(e, t, r) {
  if (e) return Xo[e];
  if (t) return 0;
  var n = parseInt(r, 10),
    a = n % 100,
    i = (n - a) / 100;
  return i * 60 + a;
}
function Cn(e) {
  var t = Ko.exec(rl(e._i)),
    r;
  if (t) {
    if (((r = el(t[4], t[3], t[2], t[5], t[6], t[7])), !sl(t[1], r, e))) return;
    (e._a = r),
      (e._tzm = nl(t[8], t[9], t[10])),
      (e._d = pt.apply(null, e._a)),
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      (w(e).rfc2822 = !0);
  } else e._isValid = !1;
}
function al(e) {
  var t = Qo.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if ((Yn(e), e._isValid === !1)) delete e._isValid;
  else return;
  if ((Cn(e), e._isValid === !1)) delete e._isValid;
  else return;
  e._strict ? (e._isValid = !1) : m.createFromInputFallback(e);
}
m.createFromInputFallback = re(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  },
);
function Ge(e, t, r) {
  return e ?? t ?? r;
}
function il(e) {
  var t = new Date(m.now());
  return e._useUTC
    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
    : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function fs(e) {
  var t,
    r,
    n = [],
    a,
    i,
    o;
  if (!e._d) {
    for (
      a = il(e),
        e._w && e._a[ce] == null && e._a[_e] == null && ol(e),
        e._dayOfYear != null &&
          ((o = Ge(e._a[Z], a[Z])),
          (e._dayOfYear > ft(o) || e._dayOfYear === 0) &&
            (w(e)._overflowDayOfYear = !0),
          (r = pt(o, 0, e._dayOfYear)),
          (e._a[_e] = r.getUTCMonth()),
          (e._a[ce] = r.getUTCDate())),
        t = 0;
      t < 3 && e._a[t] == null;
      ++t
    )
      e._a[t] = n[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
    e._a[z] === 24 &&
      e._a[ne] === 0 &&
      e._a[ve] === 0 &&
      e._a[Fe] === 0 &&
      ((e._nextDay = !0), (e._a[z] = 0)),
      (e._d = (e._useUTC ? pt : ho).apply(null, n)),
      (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
      e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      e._nextDay && (e._a[z] = 24),
      e._w &&
        typeof e._w.d < "u" &&
        e._w.d !== i &&
        (w(e).weekdayMismatch = !0);
  }
}
function ol(e) {
  var t, r, n, a, i, o, l, u, c;
  (t = e._w),
    t.GG != null || t.W != null || t.E != null
      ? ((i = 1),
        (o = 4),
        (r = Ge(t.GG, e._a[Z], yt(W(), 1, 4).year)),
        (n = Ge(t.W, 1)),
        (a = Ge(t.E, 1)),
        (a < 1 || a > 7) && (u = !0))
      : ((i = e._locale._week.dow),
        (o = e._locale._week.doy),
        (c = yt(W(), i, o)),
        (r = Ge(t.gg, e._a[Z], c.year)),
        (n = Ge(t.w, c.week)),
        t.d != null
          ? ((a = t.d), (a < 0 || a > 6) && (u = !0))
          : t.e != null
            ? ((a = t.e + i), (t.e < 0 || t.e > 6) && (u = !0))
            : (a = i)),
    n < 1 || n > Se(r, i, o)
      ? (w(e)._overflowWeeks = !0)
      : u != null
        ? (w(e)._overflowWeekday = !0)
        : ((l = bn(r, n, a, i, o)),
          (e._a[Z] = l.year),
          (e._dayOfYear = l.dayOfYear));
}
m.ISO_8601 = function () {};
m.RFC_2822 = function () {};
function hs(e) {
  if (e._f === m.ISO_8601) {
    Yn(e);
    return;
  }
  if (e._f === m.RFC_2822) {
    Cn(e);
    return;
  }
  (e._a = []), (w(e).empty = !0);
  var t = "" + e._i,
    r,
    n,
    a,
    i,
    o,
    l = t.length,
    u = 0,
    c,
    f;
  for (a = dn(e._f, e._locale).match(ts) || [], f = a.length, r = 0; r < f; r++)
    (i = a[r]),
      (n = (t.match(Vi(i, e)) || [])[0]),
      n &&
        ((o = t.substr(0, t.indexOf(n))),
        o.length > 0 && w(e).unusedInput.push(o),
        (t = t.slice(t.indexOf(n) + n.length)),
        (u += n.length)),
      Ze[i]
        ? (n ? (w(e).empty = !1) : w(e).unusedTokens.push(i), Ji(i, n, e))
        : e._strict && !n && w(e).unusedTokens.push(i);
  (w(e).charsLeftOver = l - u),
    t.length > 0 && w(e).unusedInput.push(t),
    e._a[z] <= 12 &&
      w(e).bigHour === !0 &&
      e._a[z] > 0 &&
      (w(e).bigHour = void 0),
    (w(e).parsedDateParts = e._a.slice(0)),
    (w(e).meridiem = e._meridiem),
    (e._a[z] = ll(e._locale, e._a[z], e._meridiem)),
    (c = w(e).era),
    c !== null && (e._a[Z] = e._locale.erasConvertYear(c, e._a[Z])),
    fs(e),
    ds(e);
}
function ll(e, t, r) {
  var n;
  return r == null
    ? t
    : e.meridiemHour != null
      ? e.meridiemHour(t, r)
      : (e.isPM != null &&
          ((n = e.isPM(r)),
          n && t < 12 && (t += 12),
          !n && t === 12 && (t = 0)),
        t);
}
function ul(e) {
  var t,
    r,
    n,
    a,
    i,
    o,
    l = !1,
    u = e._f.length;
  if (u === 0) {
    (w(e).invalidFormat = !0), (e._d = new Date(NaN));
    return;
  }
  for (a = 0; a < u; a++)
    (i = 0),
      (o = !1),
      (t = Xr({}, e)),
      e._useUTC != null && (t._useUTC = e._useUTC),
      (t._f = e._f[a]),
      hs(t),
      Kr(t) && (o = !0),
      (i += w(t).charsLeftOver),
      (i += w(t).unusedTokens.length * 10),
      (w(t).score = i),
      l
        ? i < n && ((n = i), (r = t))
        : (n == null || i < n || o) && ((n = i), (r = t), o && (l = !0));
  Ce(e, r || t);
}
function cl(e) {
  if (!e._d) {
    var t = rs(e._i),
      r = t.day === void 0 ? t.date : t.day;
    (e._a = ln(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function (n) {
        return n && parseInt(n, 10);
      },
    )),
      fs(e);
  }
}
function dl(e) {
  var t = new kt(ds(Nn(e)));
  return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
}
function Nn(e) {
  var t = e._i,
    r = e._f;
  return (
    (e._locale = e._locale || be(e._l)),
    t === null || (r === void 0 && t === "")
      ? Xt({ nullInput: !0 })
      : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
        oe(t)
          ? new kt(ds(t))
          : (St(t) ? (e._d = t) : ie(r) ? ul(e) : r ? hs(e) : fl(e),
            Kr(e) || (e._d = null),
            e))
  );
}
function fl(e) {
  var t = e._i;
  J(t)
    ? (e._d = new Date(m.now()))
    : St(t)
      ? (e._d = new Date(t.valueOf()))
      : typeof t == "string"
        ? al(e)
        : ie(t)
          ? ((e._a = ln(t.slice(0), function (r) {
              return parseInt(r, 10);
            })),
            fs(e))
          : We(t)
            ? cl(e)
            : ke(t)
              ? (e._d = new Date(t))
              : m.createFromInputFallback(e);
}
function Rn(e, t, r, n, a) {
  var i = {};
  return (
    (t === !0 || t === !1) && ((n = t), (t = void 0)),
    (r === !0 || r === !1) && ((n = r), (r = void 0)),
    ((We(e) && Qr(e)) || (ie(e) && e.length === 0)) && (e = void 0),
    (i._isAMomentObject = !0),
    (i._useUTC = i._isUTC = a),
    (i._l = r),
    (i._i = e),
    (i._f = t),
    (i._strict = n),
    dl(i)
  );
}
function W(e, t, r, n) {
  return Rn(e, t, r, n, !1);
}
var hl = re(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = W.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : Xt();
    },
  ),
  ml = re(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = W.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e > this ? this : e) : Xt();
    },
  );
function Tn(e, t) {
  var r, n;
  if ((t.length === 1 && ie(t[0]) && (t = t[0]), !t.length)) return W();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function pl() {
  var e = [].slice.call(arguments, 0);
  return Tn("isBefore", e);
}
function yl() {
  var e = [].slice.call(arguments, 0);
  return Tn("isAfter", e);
}
var gl = function () {
    return Date.now ? Date.now() : +new Date();
  },
  ct = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
function _l(e) {
  var t,
    r = !1,
    n,
    a = ct.length;
  for (t in e)
    if (O(e, t) && !($.call(ct, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < a; ++n)
    if (e[ct[n]]) {
      if (r) return !1;
      parseFloat(e[ct[n]]) !== x(e[ct[n]]) && (r = !0);
    }
  return !0;
}
function vl() {
  return this._isValid;
}
function wl() {
  return le(NaN);
}
function or(e) {
  var t = rs(e),
    r = t.year || 0,
    n = t.quarter || 0,
    a = t.month || 0,
    i = t.week || t.isoWeek || 0,
    o = t.day || 0,
    l = t.hour || 0,
    u = t.minute || 0,
    c = t.second || 0,
    f = t.millisecond || 0;
  (this._isValid = _l(t)),
    (this._milliseconds = +f + c * 1e3 + u * 6e4 + l * 1e3 * 60 * 60),
    (this._days = +o + i * 7),
    (this._months = +a + n * 3 + r * 12),
    (this._data = {}),
    (this._locale = be()),
    this._bubble();
}
function Ft(e) {
  return e instanceof or;
}
function Wr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Sl(e, t, r) {
  var n = Math.min(e.length, t.length),
    a = Math.abs(e.length - t.length),
    i = 0,
    o;
  for (o = 0; o < n; o++) x(e[o]) !== x(t[o]) && i++;
  return i + a;
}
function Pn(e, t) {
  _(e, 0, 0, function () {
    var r = this.utcOffset(),
      n = "+";
    return (
      r < 0 && ((r = -r), (n = "-")),
      n + de(~~(r / 60), 2) + t + de(~~r % 60, 2)
    );
  });
}
Pn("Z", ":");
Pn("ZZ", "");
p("Z", nr);
p("ZZ", nr);
P(["Z", "ZZ"], function (e, t, r) {
  (r._useUTC = !0), (r._tzm = ms(nr, e));
});
var kl = /([\+\-]|\d\d)/gi;
function ms(e, t) {
  var r = (t || "").match(e),
    n,
    a,
    i;
  return r === null
    ? null
    : ((n = r[r.length - 1] || []),
      (a = (n + "").match(kl) || ["-", 0, 0]),
      (i = +(a[1] * 60) + x(a[2])),
      i === 0 ? 0 : a[0] === "+" ? i : -i);
}
function ps(e, t) {
  var r, n;
  return t._isUTC
    ? ((r = t.clone()),
      (n = (oe(e) || St(e) ? e.valueOf() : W(e).valueOf()) - r.valueOf()),
      r._d.setTime(r._d.valueOf() + n),
      m.updateOffset(r, !1),
      r)
    : W(e).local();
}
function Ar(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
m.updateOffset = function () {};
function bl(e, t, r) {
  var n = this._offset || 0,
    a;
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (((e = ms(nr, e)), e === null)) return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return (
      !this._isUTC && t && (a = Ar(this)),
      (this._offset = e),
      (this._isUTC = !0),
      a != null && this.add(a, "m"),
      n !== e &&
        (!t || this._changeInProgress
          ? In(this, le(e - n, "m"), 1, !1)
          : this._changeInProgress ||
            ((this._changeInProgress = !0),
            m.updateOffset(this, !0),
            (this._changeInProgress = null))),
      this
    );
  } else return this._isUTC ? n : Ar(this);
}
function xl(e, t) {
  return e != null
    ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
    : -this.utcOffset();
}
function Dl(e) {
  return this.utcOffset(0, e);
}
function Ml(e) {
  return (
    this._isUTC &&
      (this.utcOffset(0, e),
      (this._isUTC = !1),
      e && this.subtract(Ar(this), "m")),
    this
  );
}
function Ol() {
  if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ms(zi, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Yl(e) {
  return this.isValid()
    ? ((e = e ? W(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
    : !1;
}
function Cl() {
  return (
    this.utcOffset() > this.clone().month(0).utcOffset() ||
    this.utcOffset() > this.clone().month(5).utcOffset()
  );
}
function Nl() {
  if (!J(this._isDSTShifted)) return this._isDSTShifted;
  var e = {},
    t;
  return (
    Xr(e, this),
    (e = Nn(e)),
    e._a
      ? ((t = e._isUTC ? fe(e._a) : W(e._a)),
        (this._isDSTShifted = this.isValid() && Sl(e._a, t.toArray()) > 0))
      : (this._isDSTShifted = !1),
    this._isDSTShifted
  );
}
function Rl() {
  return this.isValid() ? !this._isUTC : !1;
}
function Tl() {
  return this.isValid() ? this._isUTC : !1;
}
function En() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Pl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  El =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function le(e, t) {
  var r = e,
    n = null,
    a,
    i,
    o;
  return (
    Ft(e)
      ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
      : ke(e) || !isNaN(+e)
        ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
        : (n = Pl.exec(e))
          ? ((a = n[1] === "-" ? -1 : 1),
            (r = {
              y: 0,
              d: x(n[ce]) * a,
              h: x(n[z]) * a,
              m: x(n[ne]) * a,
              s: x(n[ve]) * a,
              ms: x(Wr(n[Fe] * 1e3)) * a,
            }))
          : (n = El.exec(e))
            ? ((a = n[1] === "-" ? -1 : 1),
              (r = {
                y: Ee(n[2], a),
                M: Ee(n[3], a),
                w: Ee(n[4], a),
                d: Ee(n[5], a),
                h: Ee(n[6], a),
                m: Ee(n[7], a),
                s: Ee(n[8], a),
              }))
            : r == null
              ? (r = {})
              : typeof r == "object" &&
                ("from" in r || "to" in r) &&
                ((o = Fl(W(r.from), W(r.to))),
                (r = {}),
                (r.ms = o.milliseconds),
                (r.M = o.months)),
    (i = new or(r)),
    Ft(e) && O(e, "_locale") && (i._locale = e._locale),
    Ft(e) && O(e, "_isValid") && (i._isValid = e._isValid),
    i
  );
}
le.fn = or.prototype;
le.invalid = wl;
function Ee(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Fs(e, t) {
  var r = {};
  return (
    (r.months = t.month() - e.month() + (t.year() - e.year()) * 12),
    e.clone().add(r.months, "M").isAfter(t) && --r.months,
    (r.milliseconds = +t - +e.clone().add(r.months, "M")),
    r
  );
}
function Fl(e, t) {
  var r;
  return e.isValid() && t.isValid()
    ? ((t = ps(t, e)),
      e.isBefore(t)
        ? (r = Fs(e, t))
        : ((r = Fs(t, e)),
          (r.milliseconds = -r.milliseconds),
          (r.months = -r.months)),
      r)
    : { milliseconds: 0, months: 0 };
}
function Fn(e, t) {
  return function (r, n) {
    var a, i;
    return (
      n !== null &&
        !isNaN(+n) &&
        (cn(
          t,
          "moment()." +
            t +
            "(period, number) is deprecated. Please use moment()." +
            t +
            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.",
        ),
        (i = r),
        (r = n),
        (n = i)),
      (a = le(r, n)),
      In(this, a, e),
      this
    );
  };
}
function In(e, t, r, n) {
  var a = t._milliseconds,
    i = Wr(t._days),
    o = Wr(t._months);
  e.isValid() &&
    ((n = n ?? !0),
    o && wn(e, mt(e, "Month") + o * r),
    i && gn(e, "Date", mt(e, "Date") + i * r),
    a && e._d.setTime(e._d.valueOf() + a * r),
    n && m.updateOffset(e, i || o));
}
var Il = Fn(1, "add"),
  Wl = Fn(-1, "subtract");
function Wn(e) {
  return typeof e == "string" || e instanceof String;
}
function Al(e) {
  return (
    oe(e) ||
    St(e) ||
    Wn(e) ||
    ke(e) ||
    jl(e) ||
    Ll(e) ||
    e === null ||
    e === void 0
  );
}
function Ll(e) {
  var t = We(e) && !Qr(e),
    r = !1,
    n = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms",
    ],
    a,
    i,
    o = n.length;
  for (a = 0; a < o; a += 1) (i = n[a]), (r = r || O(e, i));
  return t && r;
}
function jl(e) {
  var t = ie(e),
    r = !1;
  return (
    t &&
      (r =
        e.filter(function (n) {
          return !ke(n) && Wn(e);
        }).length === 0),
    t && r
  );
}
function Ul(e) {
  var t = We(e) && !Qr(e),
    r = !1,
    n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
    a,
    i;
  for (a = 0; a < n.length; a += 1) (i = n[a]), (r = r || O(e, i));
  return t && r;
}
function $l(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6
    ? "sameElse"
    : r < -1
      ? "lastWeek"
      : r < 0
        ? "lastDay"
        : r < 1
          ? "sameDay"
          : r < 2
            ? "nextDay"
            : r < 7
              ? "nextWeek"
              : "sameElse";
}
function Hl(e, t) {
  arguments.length === 1 &&
    (arguments[0]
      ? Al(arguments[0])
        ? ((e = arguments[0]), (t = void 0))
        : Ul(arguments[0]) && ((t = arguments[0]), (e = void 0))
      : ((e = void 0), (t = void 0)));
  var r = e || W(),
    n = ps(r, this).startOf("day"),
    a = m.calendarFormat(this, n) || "sameElse",
    i = t && (he(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(i || this.localeData().calendar(a, this, W(r)));
}
function Gl() {
  return new kt(this);
}
function zl(e, t) {
  var r = oe(e) ? e : W(e);
  return this.isValid() && r.isValid()
    ? ((t = se(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() > r.valueOf()
        : r.valueOf() < this.clone().startOf(t).valueOf())
    : !1;
}
function Bl(e, t) {
  var r = oe(e) ? e : W(e);
  return this.isValid() && r.isValid()
    ? ((t = se(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() < r.valueOf()
        : this.clone().endOf(t).valueOf() < r.valueOf())
    : !1;
}
function Vl(e, t, r, n) {
  var a = oe(e) ? e : W(e),
    i = oe(t) ? t : W(t);
  return this.isValid() && a.isValid() && i.isValid()
    ? ((n = n || "()"),
      (n[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) &&
        (n[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r)))
    : !1;
}
function Zl(e, t) {
  var r = oe(e) ? e : W(e),
    n;
  return this.isValid() && r.isValid()
    ? ((t = se(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() === r.valueOf()
        : ((n = r.valueOf()),
          this.clone().startOf(t).valueOf() <= n &&
            n <= this.clone().endOf(t).valueOf()))
    : !1;
}
function Jl(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function ql(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ql(e, t, r) {
  var n, a, i;
  if (!this.isValid()) return NaN;
  if (((n = ps(e, this)), !n.isValid())) return NaN;
  switch (((a = (n.utcOffset() - this.utcOffset()) * 6e4), (t = se(t)), t)) {
    case "year":
      i = It(this, n) / 12;
      break;
    case "month":
      i = It(this, n);
      break;
    case "quarter":
      i = It(this, n) / 3;
      break;
    case "second":
      i = (this - n) / 1e3;
      break;
    case "minute":
      i = (this - n) / 6e4;
      break;
    case "hour":
      i = (this - n) / 36e5;
      break;
    case "day":
      i = (this - n - a) / 864e5;
      break;
    case "week":
      i = (this - n - a) / 6048e5;
      break;
    default:
      i = this - n;
  }
  return r ? i : K(i);
}
function It(e, t) {
  if (e.date() < t.date()) return -It(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
    n = e.clone().add(r, "months"),
    a,
    i;
  return (
    t - n < 0
      ? ((a = e.clone().add(r - 1, "months")), (i = (t - n) / (n - a)))
      : ((a = e.clone().add(r + 1, "months")), (i = (t - n) / (a - n))),
    -(r + i) || 0
  );
}
m.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
m.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Kl() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Xl(e) {
  if (!this.isValid()) return null;
  var t = e !== !0,
    r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999
    ? Et(
        r,
        t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ",
      )
    : he(Date.prototype.toISOString)
      ? t
        ? this.toDate().toISOString()
        : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
            .toISOString()
            .replace("Z", Et(r, "Z"))
      : Et(
          r,
          t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
        );
}
function eu() {
  if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
  var e = "moment",
    t = "",
    r,
    n,
    a,
    i;
  return (
    this.isLocal() ||
      ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
      (t = "Z")),
    (r = "[" + e + '("]'),
    (n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
    (a = "-MM-DD[T]HH:mm:ss.SSS"),
    (i = t + '[")]'),
    this.format(r + n + a + i)
  );
}
function tu(e) {
  e || (e = this.isUtc() ? m.defaultFormatUtc : m.defaultFormat);
  var t = Et(this, e);
  return this.localeData().postformat(t);
}
function ru(e, t) {
  return this.isValid() && ((oe(e) && e.isValid()) || W(e).isValid())
    ? le({ to: this, from: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function su(e) {
  return this.from(W(), e);
}
function nu(e, t) {
  return this.isValid() && ((oe(e) && e.isValid()) || W(e).isValid())
    ? le({ from: this, to: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function au(e) {
  return this.to(W(), e);
}
function An(e) {
  var t;
  return e === void 0
    ? this._locale._abbr
    : ((t = be(e)), t != null && (this._locale = t), this);
}
var Ln = re(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function (e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  },
);
function jn() {
  return this._locale;
}
var Gt = 1e3,
  Je = 60 * Gt,
  zt = 60 * Je,
  Un = (365 * 400 + 97) * 24 * zt;
function qe(e, t) {
  return ((e % t) + t) % t;
}
function $n(e, t, r) {
  return e < 100 && e >= 0
    ? new Date(e + 400, t, r) - Un
    : new Date(e, t, r).valueOf();
}
function Hn(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Un : Date.UTC(e, t, r);
}
function iu(e) {
  var t, r;
  if (((e = se(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((r = this._isUTC ? Hn : $n), e)) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(this.year(), this.month() - (this.month() % 3), 1);
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t -= qe(t + (this._isUTC ? 0 : this.utcOffset() * Je), zt));
      break;
    case "minute":
      (t = this._d.valueOf()), (t -= qe(t, Je));
      break;
    case "second":
      (t = this._d.valueOf()), (t -= qe(t, Gt));
      break;
  }
  return this._d.setTime(t), m.updateOffset(this, !0), this;
}
function ou(e) {
  var t, r;
  if (((e = se(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((r = this._isUTC ? Hn : $n), e)) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      t =
        r(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7,
        ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t += zt - qe(t + (this._isUTC ? 0 : this.utcOffset() * Je), zt) - 1);
      break;
    case "minute":
      (t = this._d.valueOf()), (t += Je - qe(t, Je) - 1);
      break;
    case "second":
      (t = this._d.valueOf()), (t += Gt - qe(t, Gt) - 1);
      break;
  }
  return this._d.setTime(t), m.updateOffset(this, !0), this;
}
function lu() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function uu() {
  return Math.floor(this.valueOf() / 1e3);
}
function cu() {
  return new Date(this.valueOf());
}
function du() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond(),
  ];
}
function fu() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds(),
  };
}
function hu() {
  return this.isValid() ? this.toISOString() : null;
}
function mu() {
  return Kr(this);
}
function pu() {
  return Ce({}, w(this));
}
function yu() {
  return w(this).overflow;
}
function gu() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict,
  };
}
_("N", 0, 0, "eraAbbr");
_("NN", 0, 0, "eraAbbr");
_("NNN", 0, 0, "eraAbbr");
_("NNNN", 0, 0, "eraName");
_("NNNNN", 0, 0, "eraNarrow");
_("y", ["y", 1], "yo", "eraYear");
_("y", ["yy", 2], 0, "eraYear");
_("y", ["yyy", 3], 0, "eraYear");
_("y", ["yyyy", 4], 0, "eraYear");
p("N", ys);
p("NN", ys);
p("NNN", ys);
p("NNNN", Yu);
p("NNNNN", Cu);
P(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, r, n) {
  var a = r._locale.erasParse(e, n, r._strict);
  a ? (w(r).era = a) : (w(r).invalidEra = e);
});
p("y", tt);
p("yy", tt);
p("yyy", tt);
p("yyyy", tt);
p("yo", Nu);
P(["y", "yy", "yyy", "yyyy"], Z);
P(["yo"], function (e, t, r, n) {
  var a;
  r._locale._eraYearOrdinalRegex &&
    (a = e.match(r._locale._eraYearOrdinalRegex)),
    r._locale.eraYearOrdinalParse
      ? (t[Z] = r._locale.eraYearOrdinalParse(e, a))
      : (t[Z] = parseInt(e, 10));
});
function _u(e, t) {
  var r,
    n,
    a,
    i = this._eras || be("en")._eras;
  for (r = 0, n = i.length; r < n; ++r) {
    switch (typeof i[r].since) {
      case "string":
        (a = m(i[r].since).startOf("day")), (i[r].since = a.valueOf());
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        (a = m(i[r].until).startOf("day").valueOf()),
          (i[r].until = a.valueOf());
        break;
    }
  }
  return i;
}
function vu(e, t, r) {
  var n,
    a,
    i = this.eras(),
    o,
    l,
    u;
  for (e = e.toUpperCase(), n = 0, a = i.length; n < a; ++n)
    if (
      ((o = i[n].name.toUpperCase()),
      (l = i[n].abbr.toUpperCase()),
      (u = i[n].narrow.toUpperCase()),
      r)
    )
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e) return i[n];
          break;
        case "NNNN":
          if (o === e) return i[n];
          break;
        case "NNNNN":
          if (u === e) return i[n];
          break;
      }
    else if ([o, l, u].indexOf(e) >= 0) return i[n];
}
function wu(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0
    ? m(e.since).year()
    : m(e.since).year() + (t - e.offset) * r;
}
function Su() {
  var e,
    t,
    r,
    n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (n[e].since <= r && r <= n[e].until) ||
        (n[e].until <= r && r <= n[e].since))
    )
      return n[e].name;
  return "";
}
function ku() {
  var e,
    t,
    r,
    n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (n[e].since <= r && r <= n[e].until) ||
        (n[e].until <= r && r <= n[e].since))
    )
      return n[e].narrow;
  return "";
}
function bu() {
  var e,
    t,
    r,
    n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (n[e].since <= r && r <= n[e].until) ||
        (n[e].until <= r && r <= n[e].since))
    )
      return n[e].abbr;
  return "";
}
function xu() {
  var e,
    t,
    r,
    n,
    a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (
      ((r = a[e].since <= a[e].until ? 1 : -1),
      (n = this.clone().startOf("day").valueOf()),
      (a[e].since <= n && n <= a[e].until) ||
        (a[e].until <= n && n <= a[e].since))
    )
      return (this.year() - m(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function Du(e) {
  return (
    O(this, "_erasNameRegex") || gs.call(this),
    e ? this._erasNameRegex : this._erasRegex
  );
}
function Mu(e) {
  return (
    O(this, "_erasAbbrRegex") || gs.call(this),
    e ? this._erasAbbrRegex : this._erasRegex
  );
}
function Ou(e) {
  return (
    O(this, "_erasNarrowRegex") || gs.call(this),
    e ? this._erasNarrowRegex : this._erasRegex
  );
}
function ys(e, t) {
  return t.erasAbbrRegex(e);
}
function Yu(e, t) {
  return t.erasNameRegex(e);
}
function Cu(e, t) {
  return t.erasNarrowRegex(e);
}
function Nu(e, t) {
  return t._eraYearOrdinalRegex || tt;
}
function gs() {
  var e = [],
    t = [],
    r = [],
    n = [],
    a,
    i,
    o,
    l,
    u,
    c = this.eras();
  for (a = 0, i = c.length; a < i; ++a)
    (o = we(c[a].name)),
      (l = we(c[a].abbr)),
      (u = we(c[a].narrow)),
      t.push(o),
      e.push(l),
      r.push(u),
      n.push(o),
      n.push(l),
      n.push(u);
  (this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i")),
    (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
    (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
    (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
}
_(0, ["gg", 2], 0, function () {
  return this.weekYear() % 100;
});
_(0, ["GG", 2], 0, function () {
  return this.isoWeekYear() % 100;
});
function lr(e, t) {
  _(0, [e, e.length], 0, t);
}
lr("gggg", "weekYear");
lr("ggggg", "weekYear");
lr("GGGG", "isoWeekYear");
lr("GGGGG", "isoWeekYear");
p("G", sr);
p("g", sr);
p("GG", A, Q);
p("gg", A, Q);
p("GGGG", ns, ss);
p("gggg", ns, ss);
p("GGGGG", rr, er);
p("ggggg", rr, er);
xt(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, r, n) {
  t[n.substr(0, 2)] = x(e);
});
xt(["gg", "GG"], function (e, t, r, n) {
  t[n] = m.parseTwoDigitYear(e);
});
function Ru(e) {
  return Gn.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy,
  );
}
function Tu(e) {
  return Gn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function Pu() {
  return Se(this.year(), 1, 4);
}
function Eu() {
  return Se(this.isoWeekYear(), 1, 4);
}
function Fu() {
  var e = this.localeData()._week;
  return Se(this.year(), e.dow, e.doy);
}
function Iu() {
  var e = this.localeData()._week;
  return Se(this.weekYear(), e.dow, e.doy);
}
function Gn(e, t, r, n, a) {
  var i;
  return e == null
    ? yt(this, n, a).year
    : ((i = Se(e, n, a)), t > i && (t = i), Wu.call(this, e, t, r, n, a));
}
function Wu(e, t, r, n, a) {
  var i = bn(e, t, r, n, a),
    o = pt(i.year, 0, i.dayOfYear);
  return (
    this.year(o.getUTCFullYear()),
    this.month(o.getUTCMonth()),
    this.date(o.getUTCDate()),
    this
  );
}
_("Q", 0, "Qo", "quarter");
p("Q", fn);
P("Q", function (e, t) {
  t[_e] = (x(e) - 1) * 3;
});
function Au(e) {
  return e == null
    ? Math.ceil((this.month() + 1) / 3)
    : this.month((e - 1) * 3 + (this.month() % 3));
}
_("D", ["DD", 2], "Do", "date");
p("D", A, rt);
p("DD", A, Q);
p("Do", function (e, t) {
  return e
    ? t._dayOfMonthOrdinalParse || t._ordinalParse
    : t._dayOfMonthOrdinalParseLenient;
});
P(["D", "DD"], ce);
P("Do", function (e, t) {
  t[ce] = x(e.match(A)[0]);
});
var zn = st("Date", !0);
_("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
p("DDD", tr);
p("DDDD", hn);
P(["DDD", "DDDD"], function (e, t, r) {
  r._dayOfYear = x(e);
});
function Lu(e) {
  var t =
    Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5,
    ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
_("m", ["mm", 2], 0, "minute");
p("m", A, as);
p("mm", A, Q);
P(["m", "mm"], ne);
var ju = st("Minutes", !1);
_("s", ["ss", 2], 0, "second");
p("s", A, as);
p("ss", A, Q);
P(["s", "ss"], ve);
var Uu = st("Seconds", !1);
_("S", 0, 0, function () {
  return ~~(this.millisecond() / 100);
});
_(0, ["SS", 2], 0, function () {
  return ~~(this.millisecond() / 10);
});
_(0, ["SSS", 3], 0, "millisecond");
_(0, ["SSSS", 4], 0, function () {
  return this.millisecond() * 10;
});
_(0, ["SSSSS", 5], 0, function () {
  return this.millisecond() * 100;
});
_(0, ["SSSSSS", 6], 0, function () {
  return this.millisecond() * 1e3;
});
_(0, ["SSSSSSS", 7], 0, function () {
  return this.millisecond() * 1e4;
});
_(0, ["SSSSSSSS", 8], 0, function () {
  return this.millisecond() * 1e5;
});
_(0, ["SSSSSSSSS", 9], 0, function () {
  return this.millisecond() * 1e6;
});
p("S", tr, fn);
p("SS", tr, Q);
p("SSS", tr, hn);
var Ne, Bn;
for (Ne = "SSSS"; Ne.length <= 9; Ne += "S") p(Ne, tt);
function $u(e, t) {
  t[Fe] = x(("0." + e) * 1e3);
}
for (Ne = "S"; Ne.length <= 9; Ne += "S") P(Ne, $u);
Bn = st("Milliseconds", !1);
_("z", 0, 0, "zoneAbbr");
_("zz", 0, 0, "zoneName");
function Hu() {
  return this._isUTC ? "UTC" : "";
}
function Gu() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var d = kt.prototype;
d.add = Il;
d.calendar = Hl;
d.clone = Gl;
d.diff = Ql;
d.endOf = ou;
d.format = tu;
d.from = ru;
d.fromNow = su;
d.to = nu;
d.toNow = au;
d.get = Xi;
d.invalidAt = yu;
d.isAfter = zl;
d.isBefore = Bl;
d.isBetween = Vl;
d.isSame = Zl;
d.isSameOrAfter = Jl;
d.isSameOrBefore = ql;
d.isValid = mu;
d.lang = Ln;
d.locale = An;
d.localeData = jn;
d.max = ml;
d.min = hl;
d.parsingFlags = pu;
d.set = eo;
d.startOf = iu;
d.subtract = Wl;
d.toArray = du;
d.toObject = fu;
d.toDate = cu;
d.toISOString = Xl;
d.inspect = eu;
typeof Symbol < "u" &&
  Symbol.for != null &&
  (d[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">";
  });
d.toJSON = hu;
d.toString = Kl;
d.unix = uu;
d.valueOf = lu;
d.creationData = gu;
d.eraName = Su;
d.eraNarrow = ku;
d.eraAbbr = bu;
d.eraYear = xu;
d.year = yn;
d.isLeapYear = Ki;
d.weekYear = Ru;
d.isoWeekYear = Tu;
d.quarter = d.quarters = Au;
d.month = Sn;
d.daysInMonth = uo;
d.week = d.weeks = _o;
d.isoWeek = d.isoWeeks = vo;
d.weeksInYear = Fu;
d.weeksInWeekYear = Iu;
d.isoWeeksInYear = Pu;
d.isoWeeksInISOWeekYear = Eu;
d.date = zn;
d.day = d.days = To;
d.weekday = Po;
d.isoWeekday = Eo;
d.dayOfYear = Lu;
d.hour = d.hours = Uo;
d.minute = d.minutes = ju;
d.second = d.seconds = Uu;
d.millisecond = d.milliseconds = Bn;
d.utcOffset = bl;
d.utc = Dl;
d.local = Ml;
d.parseZone = Ol;
d.hasAlignedHourOffset = Yl;
d.isDST = Cl;
d.isLocal = Rl;
d.isUtcOffset = Tl;
d.isUtc = En;
d.isUTC = En;
d.zoneAbbr = Hu;
d.zoneName = Gu;
d.dates = re("dates accessor is deprecated. Use date instead.", zn);
d.months = re("months accessor is deprecated. Use month instead", Sn);
d.years = re("years accessor is deprecated. Use year instead", yn);
d.zone = re(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  xl,
);
d.isDSTShifted = re(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Nl,
);
function zu(e) {
  return W(e * 1e3);
}
function Bu() {
  return W.apply(null, arguments).parseZone();
}
function Vn(e) {
  return e;
}
var Y = es.prototype;
Y.calendar = Ni;
Y.longDateFormat = Ei;
Y.invalidDate = Ii;
Y.ordinal = Li;
Y.preparse = Vn;
Y.postformat = Vn;
Y.relativeTime = Ui;
Y.pastFuture = $i;
Y.set = Yi;
Y.eras = _u;
Y.erasParse = vu;
Y.erasConvertYear = wu;
Y.erasAbbrRegex = Mu;
Y.erasNameRegex = Du;
Y.erasNarrowRegex = Ou;
Y.months = ao;
Y.monthsShort = io;
Y.monthsParse = lo;
Y.monthsRegex = fo;
Y.monthsShortRegex = co;
Y.week = mo;
Y.firstDayOfYear = go;
Y.firstDayOfWeek = yo;
Y.weekdays = Oo;
Y.weekdaysMin = Co;
Y.weekdaysShort = Yo;
Y.weekdaysParse = Ro;
Y.weekdaysRegex = Fo;
Y.weekdaysShortRegex = Io;
Y.weekdaysMinRegex = Wo;
Y.isPM = Lo;
Y.meridiem = $o;
function Bt(e, t, r, n) {
  var a = be(),
    i = fe().set(n, t);
  return a[r](i, e);
}
function Zn(e, t, r) {
  if ((ke(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
    return Bt(e, t, r, "month");
  var n,
    a = [];
  for (n = 0; n < 12; n++) a[n] = Bt(e, n, r, "month");
  return a;
}
function _s(e, t, r, n) {
  typeof e == "boolean"
    ? (ke(t) && ((r = t), (t = void 0)), (t = t || ""))
    : ((t = e),
      (r = t),
      (e = !1),
      ke(t) && ((r = t), (t = void 0)),
      (t = t || ""));
  var a = be(),
    i = e ? a._week.dow : 0,
    o,
    l = [];
  if (r != null) return Bt(t, (r + i) % 7, n, "day");
  for (o = 0; o < 7; o++) l[o] = Bt(t, (o + i) % 7, n, "day");
  return l;
}
function Vu(e, t) {
  return Zn(e, t, "months");
}
function Zu(e, t) {
  return Zn(e, t, "monthsShort");
}
function Ju(e, t, r) {
  return _s(e, t, r, "weekdays");
}
function qu(e, t, r) {
  return _s(e, t, r, "weekdaysShort");
}
function Qu(e, t, r) {
  return _s(e, t, r, "weekdaysMin");
}
Re("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD",
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC",
    },
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function (e) {
    var t = e % 10,
      r =
        x((e % 100) / 10) === 1
          ? "th"
          : t === 1
            ? "st"
            : t === 2
              ? "nd"
              : t === 3
                ? "rd"
                : "th";
    return e + r;
  },
});
m.lang = re("moment.lang is deprecated. Use moment.locale instead.", Re);
m.langData = re(
  "moment.langData is deprecated. Use moment.localeData instead.",
  be,
);
var pe = Math.abs;
function Ku() {
  var e = this._data;
  return (
    (this._milliseconds = pe(this._milliseconds)),
    (this._days = pe(this._days)),
    (this._months = pe(this._months)),
    (e.milliseconds = pe(e.milliseconds)),
    (e.seconds = pe(e.seconds)),
    (e.minutes = pe(e.minutes)),
    (e.hours = pe(e.hours)),
    (e.months = pe(e.months)),
    (e.years = pe(e.years)),
    this
  );
}
function Jn(e, t, r, n) {
  var a = le(t, r);
  return (
    (e._milliseconds += n * a._milliseconds),
    (e._days += n * a._days),
    (e._months += n * a._months),
    e._bubble()
  );
}
function Xu(e, t) {
  return Jn(this, e, t, 1);
}
function ec(e, t) {
  return Jn(this, e, t, -1);
}
function Is(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function tc() {
  var e = this._milliseconds,
    t = this._days,
    r = this._months,
    n = this._data,
    a,
    i,
    o,
    l,
    u;
  return (
    (e >= 0 && t >= 0 && r >= 0) ||
      (e <= 0 && t <= 0 && r <= 0) ||
      ((e += Is(Lr(r) + t) * 864e5), (t = 0), (r = 0)),
    (n.milliseconds = e % 1e3),
    (a = K(e / 1e3)),
    (n.seconds = a % 60),
    (i = K(a / 60)),
    (n.minutes = i % 60),
    (o = K(i / 60)),
    (n.hours = o % 24),
    (t += K(o / 24)),
    (u = K(qn(t))),
    (r += u),
    (t -= Is(Lr(u))),
    (l = K(r / 12)),
    (r %= 12),
    (n.days = t),
    (n.months = r),
    (n.years = l),
    this
  );
}
function qn(e) {
  return (e * 4800) / 146097;
}
function Lr(e) {
  return (e * 146097) / 4800;
}
function rc(e) {
  if (!this.isValid()) return NaN;
  var t,
    r,
    n = this._milliseconds;
  if (((e = se(e)), e === "month" || e === "quarter" || e === "year"))
    switch (((t = this._days + n / 864e5), (r = this._months + qn(t)), e)) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (((t = this._days + Math.round(Lr(this._months))), e)) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function xe(e) {
  return function () {
    return this.as(e);
  };
}
var Qn = xe("ms"),
  sc = xe("s"),
  nc = xe("m"),
  ac = xe("h"),
  ic = xe("d"),
  oc = xe("w"),
  lc = xe("M"),
  uc = xe("Q"),
  cc = xe("y"),
  dc = Qn;
function fc() {
  return le(this);
}
function hc(e) {
  return (e = se(e)), this.isValid() ? this[e + "s"]() : NaN;
}
function Ue(e) {
  return function () {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var mc = Ue("milliseconds"),
  pc = Ue("seconds"),
  yc = Ue("minutes"),
  gc = Ue("hours"),
  _c = Ue("days"),
  vc = Ue("months"),
  wc = Ue("years");
function Sc() {
  return K(this.days() / 7);
}
var ye = Math.round,
  ze = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
function kc(e, t, r, n, a) {
  return a.relativeTime(t || 1, !!r, e, n);
}
function bc(e, t, r, n) {
  var a = le(e).abs(),
    i = ye(a.as("s")),
    o = ye(a.as("m")),
    l = ye(a.as("h")),
    u = ye(a.as("d")),
    c = ye(a.as("M")),
    f = ye(a.as("w")),
    h = ye(a.as("y")),
    g =
      (i <= r.ss && ["s", i]) ||
      (i < r.s && ["ss", i]) ||
      (o <= 1 && ["m"]) ||
      (o < r.m && ["mm", o]) ||
      (l <= 1 && ["h"]) ||
      (l < r.h && ["hh", l]) ||
      (u <= 1 && ["d"]) ||
      (u < r.d && ["dd", u]);
  return (
    r.w != null && (g = g || (f <= 1 && ["w"]) || (f < r.w && ["ww", f])),
    (g = g ||
      (c <= 1 && ["M"]) ||
      (c < r.M && ["MM", c]) ||
      (h <= 1 && ["y"]) || ["yy", h]),
    (g[2] = t),
    (g[3] = +e > 0),
    (g[4] = n),
    kc.apply(null, g)
  );
}
function xc(e) {
  return e === void 0 ? ye : typeof e == "function" ? ((ye = e), !0) : !1;
}
function Dc(e, t) {
  return ze[e] === void 0
    ? !1
    : t === void 0
      ? ze[e]
      : ((ze[e] = t), e === "s" && (ze.ss = t - 1), !0);
}
function Mc(e, t) {
  if (!this.isValid()) return this.localeData().invalidDate();
  var r = !1,
    n = ze,
    a,
    i;
  return (
    typeof e == "object" && ((t = e), (e = !1)),
    typeof e == "boolean" && (r = e),
    typeof t == "object" &&
      ((n = Object.assign({}, ze, t)),
      t.s != null && t.ss == null && (n.ss = t.s - 1)),
    (a = this.localeData()),
    (i = bc(this, !r, n, a)),
    r && (i = a.pastFuture(+this, i)),
    a.postformat(i)
  );
}
var kr = Math.abs;
function $e(e) {
  return (e > 0) - (e < 0) || +e;
}
function ur() {
  if (!this.isValid()) return this.localeData().invalidDate();
  var e = kr(this._milliseconds) / 1e3,
    t = kr(this._days),
    r = kr(this._months),
    n,
    a,
    i,
    o,
    l = this.asSeconds(),
    u,
    c,
    f,
    h;
  return l
    ? ((n = K(e / 60)),
      (a = K(n / 60)),
      (e %= 60),
      (n %= 60),
      (i = K(r / 12)),
      (r %= 12),
      (o = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
      (u = l < 0 ? "-" : ""),
      (c = $e(this._months) !== $e(l) ? "-" : ""),
      (f = $e(this._days) !== $e(l) ? "-" : ""),
      (h = $e(this._milliseconds) !== $e(l) ? "-" : ""),
      u +
        "P" +
        (i ? c + i + "Y" : "") +
        (r ? c + r + "M" : "") +
        (t ? f + t + "D" : "") +
        (a || n || e ? "T" : "") +
        (a ? h + a + "H" : "") +
        (n ? h + n + "M" : "") +
        (e ? h + o + "S" : ""))
    : "P0D";
}
var M = or.prototype;
M.isValid = vl;
M.abs = Ku;
M.add = Xu;
M.subtract = ec;
M.as = rc;
M.asMilliseconds = Qn;
M.asSeconds = sc;
M.asMinutes = nc;
M.asHours = ac;
M.asDays = ic;
M.asWeeks = oc;
M.asMonths = lc;
M.asQuarters = uc;
M.asYears = cc;
M.valueOf = dc;
M._bubble = tc;
M.clone = fc;
M.get = hc;
M.milliseconds = mc;
M.seconds = pc;
M.minutes = yc;
M.hours = gc;
M.days = _c;
M.weeks = Sc;
M.months = vc;
M.years = wc;
M.humanize = Mc;
M.toISOString = ur;
M.toString = ur;
M.toJSON = ur;
M.locale = An;
M.localeData = jn;
M.toIsoString = re(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ur,
);
M.lang = Ln;
_("X", 0, 0, "unix");
_("x", 0, 0, "valueOf");
p("x", sr);
p("X", Bi);
P("X", function (e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
P("x", function (e, t, r) {
  r._d = new Date(x(e));
}); //! moment.js
m.version = "2.30.1";
Mi(W);
m.fn = d;
m.min = pl;
m.max = yl;
m.now = gl;
m.utc = fe;
m.unix = zu;
m.months = Vu;
m.isDate = St;
m.locale = Re;
m.invalid = Xt;
m.duration = le;
m.isMoment = oe;
m.weekdays = Ju;
m.parseZone = Bu;
m.localeData = be;
m.isDuration = Ft;
m.monthsShort = Zu;
m.weekdaysMin = Qu;
m.defineLocale = cs;
m.updateLocale = Bo;
m.locales = Vo;
m.weekdaysShort = qu;
m.normalizeUnits = se;
m.relativeTimeRounding = xc;
m.relativeTimeThreshold = Dc;
m.calendarFormat = $l;
m.prototype = d;
m.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM",
};
let Oc = class extends S.Component {
  render() {
    return y.jsx("div", {
      children: y.jsx("footer", {
        className: "footer",
        children: y.jsxs("div", {
          className: "footer-content",
          children: [
            y.jsx("ul", {
              className: "footer-list footer-list-right",
              children: y.jsx("li", {
                className: "footer-list-item",
                children: y.jsxs("a", {
                  href: "http://www.cityofboston.gov/311/",
                  className: "footer-link yellow-link",
                  children: [
                    y.jsx("span", {
                      className: "footer-date",
                      children: m().format("llll"),
                    }),
                    y.jsx("span", {
                      className: "tablet-hidden",
                      children: " - ",
                    }),
                  ],
                }),
              }),
            }),
            y.jsxs("ul", {
              className: "footer-list",
              children: [
                y.jsx("li", {
                  className: "footer-list-item",
                  children: y.jsx("a", {
                    href: "https://johnfleurimond.com",
                    className: "footer-link",
                    children: "John Fleurimond",
                  }),
                }),
                y.jsx("li", {
                  className: "footer-list-item",
                  children: y.jsx("a", {
                    href: "https://twitter.com/tcodemonger",
                    className: "footer-link",
                    children: "Twitter",
                  }),
                }),
                y.jsx("li", {
                  className: "footer-list-item",
                  children: y.jsx("a", {
                    href: "https://github.com/JOHNFLEURIMOND",
                    className: "footer-link",
                    children: "Github",
                  }),
                }),
                y.jsx("li", {
                  className: "footer-list-item",
                  children: y.jsx("a", {
                    href: "https://www.linkedin.com/in/john-fleurimond/",
                    className: "footer-link",
                    title: "Linkedin",
                    children: "Linkedin",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }
};
const Yc = [
    { first: "Mary", last: "Johnson", year: 1921, passed: 2005 },
    { first: "Lewis", last: "Latimer", year: 1848, passed: 1928 },
    { first: "Marie", last: "Van Brittan Brown", year: 1922, passed: 1999 },
    { first: "Otis", last: "Boykin", year: 1920, passed: 1982 },
    { first: "Jan", last: "Ernst Matzeliger", year: 1852, passed: 1889 },
    { first: "Garret", last: "Morgan", year: 1877, passed: 1963 },
    { first: "Charles Richard", last: "Drew", year: 1904, passed: 1950 },
    { first: "Frederick", last: "Jones", year: 1893, passed: 1961 },
    { first: "Daniel", last: "Hale Williams", year: 1856, passed: 1931 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Edward", last: "Bouchet", year: 1852, passed: 1918 },
    { first: "Charles W.", last: "Chappelle", year: 1872, passed: 1941 },
    { first: "George Edward Jr.", last: "Alcorn", year: 1940, passed: 1992 },
    { first: "Archie", last: "Alexander", year: 1910, passed: 1995 },
    { first: "Harold", last: "Amos", year: 1936, passed: 2020 },
    { first: "James J.", last: "Andrews", year: 1930, passed: 2022 },
    { first: "Leonard C.", last: "Bailey", year: 1903, passed: 1978 },
    { first: "Alice Augusta", last: "Ball", year: 1892, passed: 1916 },
    { first: "Benjamin", last: "Banneker", year: 1731, passed: 1806 },
    { first: "Augustin", last: "Banyaga", year: 1961, passed: 2009 },
    { first: "Janet", last: "Bashen", year: 1929, passed: 2021 },
    { first: "Patricia", last: "Bath", year: 1942, passed: 2019 },
    { first: "Andrew", last: "Beard", year: 1960, passed: null },
    { first: "Earl S.", last: "Bell", year: 1936, passed: null },
    { first: "Miriam", last: "Benjamin", year: 1940, passed: null },
    { first: "Leonidas", last: "Berry", year: 1947, passed: 2017 },
    { first: "Albert T.", last: "Bharucha-Reid", year: 1920, passed: 1988 },
    { first: "Keith", last: "Black", year: 1949, passed: 2020 },
    { first: "David", last: "Blackwell", year: 1963, passed: null },
    { first: "Henry", last: "Blair", year: 1866, passed: 1924 },
    { first: "Kwabena", last: "Boahen", year: 1949, passed: 2013 },
    { first: "Sarah", last: "Boone", year: 1930, passed: null },
    { first: "Edward", last: "Bouchet", year: 1852, passed: 1918 },
    { first: "James", last: "Bowman", year: 1952, passed: 2021 },
    { first: "St. Elmo", last: "Brady", year: 1884, passed: 1966 },
    { first: "Herman", last: "Branson", year: 1901, passed: 1974 },
    { first: "Toussaint", last: "Louverture", year: 1743, passed: 1803 },
    { first: "Henri", last: "Christophe", year: 1767, passed: 1820 },
    { first: "John Uzo", last: "Ogbu", year: 1938, passed: 2021 },
    { first: "Roger Arliner", last: "Young", year: 1903, passed: 1994 },
    { first: "Lonnie", last: "Johnson", year: 1931, passed: 2022 },
    { first: "John E.", last: "Hodge", year: 1920, passed: 1994 },
    { first: "Charles", last: "Brooks", year: 1944, passed: null },
    { first: "Sandra", last: "Bernhard", year: 1942, passed: 2023 },
    { first: "Oscar E.", last: "Brown", year: 1900, passed: 1974 },
    { first: "George Washington", last: "Carver", year: 1864, passed: 1943 },
    { first: "Lyda D.", last: "Newman", year: 1895, passed: 1997 },
    { first: "François", last: "Fournier de Pescay", year: 1740, passed: 1794 },
    { first: "Yvonne", last: "Sylvain", year: 1906, passed: 1995 },
    { first: "Jocelyn", last: "Borgella", year: 1953, passed: 2021 },
    { first: "Dr. James Edward", last: "Maceo West", year: 1940, passed: 2021 },
    { first: "Ellen", last: "Eglin", year: 1836, passed: 1899 },
    { first: "Dr. Betty", last: "Wright Harris", year: 1931, passed: 2023 },
    { first: "Mary", last: "Jones De Leon", year: 1950, passed: null },
    { first: "Walter Lincoln", last: "Hawkins", year: 1912, passed: 1994 },
    { first: "Bisi", last: "Ezerioha", year: 1961, passed: null },
    { first: "John", last: "Dabiri", year: 1962, passed: null },
    { first: "Marie Maynard", last: "Daly", year: 1931, passed: 2001 },
    { first: "Emmit", last: "Chappelle", year: 1933, passed: 2018 },
    { first: "Archie Alphonso", last: "Alexander", year: 1911, passed: 1991 },
    { first: "Percy", last: "Julian", year: 1899, passed: 1975 },
  ],
  Cc = () =>
    y.jsx("section", {
      className: "inventors-container",
      children: y.jsx("div", {
        className: "card-container",
        children: Yc.map((e, t) =>
          y.jsxs(
            "a",
            {
              href: "/",
              className: "card",
              "aria-labelledby": `card-title-${t}`,
              children: [
                y.jsx("div", {
                  className: "card-image",
                  style: {
                    backgroundImage: `url(${e.image || "default-image.jpg"})`,
                  },
                  "aria-hidden": "true",
                }),
                y.jsxs("div", {
                  className: "card-content",
                  children: [
                    y.jsxs("h2", {
                      id: `card-title-${t}`,
                      className: "card-name",
                      children: [e.first, " ", e.last],
                    }),
                    y.jsx("p", { className: "card-year", children: e.year }),
                    y.jsx("p", {
                      className: "card-passed",
                      children: e.passed,
                    }),
                  ],
                }),
              ],
            },
            t,
          ),
        ),
      }),
    });
class Nc extends S.Component {
  render() {
    return y.jsx("div", {
      children: y.jsx("footer", {
        className: "ft",
        children: y.jsxs("div", {
          className: "ft-c",
          children: [
            y.jsx("ul", {
              className: "ft-ll ft-ll--r",
              children: y.jsx("li", {
                className: "ft-ll-i",
                children: y.jsxs("a", {
                  href: "http://www.cityofboston.gov/311/",
                  className: "ft-ll-a lnk--yellow",
                  children: [
                    y.jsx("span", {
                      className: "ft-ll",
                      children: m().format("llll"),
                    }),
                    y.jsx("span", { class: "tablet--hidden", children: " - " }),
                    " ",
                  ],
                }),
              }),
            }),
            y.jsxs("ul", {
              className: "ft-ll",
              children: [
                y.jsx("li", {
                  className: "ft-ll-i",
                  children: y.jsx("a", {
                    href: "https://johnfleurimond.com",
                    className: "ft-ll-a",
                    children: "John Fleurimond",
                  }),
                }),
                y.jsx("li", {
                  className: "ft-ll-i",
                  children: y.jsx("a", {
                    href: "https://twitter.com/tcodemonger",
                    className: "ft-ll-a",
                    children: "Twitter",
                  }),
                }),
                y.jsx("li", {
                  className: "ft-ll-i",
                  children: y.jsx("a", {
                    href: "https://github.com/JOHNFLEURIMOND",
                    className: "ft-ll-a",
                    children: "Github",
                  }),
                }),
                y.jsx("li", {
                  className: "ft-ll-i",
                  children: y.jsx("a", {
                    href: "https://www.linkedin.com/in/john-fleurimond/",
                    className: "ft-ll-a",
                    title: "Linked",
                    children: "Linkedin",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }
}
var V = function () {
  return (
    (V =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    V.apply(this, arguments)
  );
};
function _t(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var I = "-ms-",
  ht = "-moz-",
  T = "-webkit-",
  Kn = "comm",
  cr = "rule",
  vs = "decl",
  Rc = "@import",
  Xn = "@keyframes",
  Tc = "@layer",
  ea = Math.abs,
  ws = String.fromCharCode,
  jr = Object.assign;
function Pc(e, t) {
  return B(e, 0) ^ 45
    ? (((((((t << 2) ^ B(e, 0)) << 2) ^ B(e, 1)) << 2) ^ B(e, 2)) << 2) ^
        B(e, 3)
    : 0;
}
function ta(e) {
  return e.trim();
}
function ge(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function k(e, t, r) {
  return e.replace(t, r);
}
function Wt(e, t, r) {
  return e.indexOf(t, r);
}
function B(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qe(e, t, r) {
  return e.slice(t, r);
}
function ue(e) {
  return e.length;
}
function ra(e) {
  return e.length;
}
function dt(e, t) {
  return t.push(e), e;
}
function Ec(e, t) {
  return e.map(t).join("");
}
function Ws(e, t) {
  return e.filter(function (r) {
    return !ge(r, t);
  });
}
var dr = 1,
  Ke = 1,
  sa = 0,
  te = 0,
  H = 0,
  nt = "";
function fr(e, t, r, n, a, i, o, l) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: dr,
    column: Ke,
    length: o,
    return: "",
    siblings: l,
  };
}
function Oe(e, t) {
  return jr(
    fr("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  );
}
function He(e) {
  for (; e.root; ) e = Oe(e.root, { children: [e] });
  dt(e, e.siblings);
}
function Fc() {
  return H;
}
function Ic() {
  return (H = te > 0 ? B(nt, --te) : 0), Ke--, H === 10 && ((Ke = 1), dr--), H;
}
function ae() {
  return (H = te < sa ? B(nt, te++) : 0), Ke++, H === 10 && ((Ke = 1), dr++), H;
}
function Ae() {
  return B(nt, te);
}
function At() {
  return te;
}
function hr(e, t) {
  return Qe(nt, e, t);
}
function Ur(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Wc(e) {
  return (dr = Ke = 1), (sa = ue((nt = e))), (te = 0), [];
}
function Ac(e) {
  return (nt = ""), e;
}
function br(e) {
  return ta(hr(te - 1, $r(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Lc(e) {
  for (; (H = Ae()) && H < 33; ) ae();
  return Ur(e) > 2 || Ur(H) > 3 ? "" : " ";
}
function jc(e, t) {
  for (
    ;
    --t &&
    ae() &&
    !(H < 48 || H > 102 || (H > 57 && H < 65) || (H > 70 && H < 97));

  );
  return hr(e, At() + (t < 6 && Ae() == 32 && ae() == 32));
}
function $r(e) {
  for (; ae(); )
    switch (H) {
      case e:
        return te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $r(H);
        break;
      case 40:
        e === 41 && $r(e);
        break;
      case 92:
        ae();
        break;
    }
  return te;
}
function Uc(e, t) {
  for (; ae() && e + H !== 57; ) if (e + H === 84 && Ae() === 47) break;
  return "/*" + hr(t, te - 1) + "*" + ws(e === 47 ? e : ae());
}
function $c(e) {
  for (; !Ur(Ae()); ) ae();
  return hr(e, te);
}
function Hc(e) {
  return Ac(Lt("", null, null, null, [""], (e = Wc(e)), 0, [0], e));
}
function Lt(e, t, r, n, a, i, o, l, u) {
  for (
    var c = 0,
      f = 0,
      h = o,
      g = 0,
      v = 0,
      D = 0,
      C = 1,
      R = 1,
      L = 1,
      F = 0,
      N = "",
      U = a,
      G = i,
      E = n,
      b = N;
    R;

  )
    switch (((D = F), (F = ae()))) {
      case 40:
        if (D != 108 && B(b, h - 1) == 58) {
          Wt((b += k(br(F), "&", "&\f")), "&\f", ea(c ? l[c - 1] : 0)) != -1 &&
            (L = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += br(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += Lc(D);
        break;
      case 92:
        b += jc(At() - 1, 7);
        continue;
      case 47:
        switch (Ae()) {
          case 42:
          case 47:
            dt(Gc(Uc(ae(), At()), t, r, u), u);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * C:
        l[c++] = ue(b) * L;
      case 125 * C:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            R = 0;
          case 59 + f:
            L == -1 && (b = k(b, /\f/g, "")),
              v > 0 &&
                ue(b) - h &&
                dt(
                  v > 32
                    ? Ls(b + ";", n, r, h - 1, u)
                    : Ls(k(b, " ", "") + ";", n, r, h - 2, u),
                  u,
                );
            break;
          case 59:
            b += ";";
          default:
            if (
              (dt(
                (E = As(b, t, r, c, f, a, l, N, (U = []), (G = []), h, i)),
                i,
              ),
              F === 123)
            )
              if (f === 0) Lt(b, t, E, E, U, i, h, l, G);
              else
                switch (g === 99 && B(b, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Lt(
                      e,
                      E,
                      E,
                      n && dt(As(e, E, E, 0, 0, a, l, N, a, (U = []), h, G), G),
                      a,
                      G,
                      h,
                      l,
                      n ? U : G,
                    );
                    break;
                  default:
                    Lt(b, E, E, E, [""], G, 0, l, G);
                }
        }
        (c = f = v = 0), (C = L = 1), (N = b = ""), (h = o);
        break;
      case 58:
        (h = 1 + ue(b)), (v = D);
      default:
        if (C < 1) {
          if (F == 123) --C;
          else if (F == 125 && C++ == 0 && Ic() == 125) continue;
        }
        switch (((b += ws(F)), F * C)) {
          case 38:
            L = f > 0 ? 1 : ((b += "\f"), -1);
            break;
          case 44:
            (l[c++] = (ue(b) - 1) * L), (L = 1);
            break;
          case 64:
            Ae() === 45 && (b += br(ae())),
              (g = Ae()),
              (f = h = ue((N = b += $c(At())))),
              F++;
            break;
          case 45:
            D === 45 && ue(b) == 2 && (C = 0);
        }
    }
  return i;
}
function As(e, t, r, n, a, i, o, l, u, c, f, h) {
  for (
    var g = a - 1, v = a === 0 ? i : [""], D = ra(v), C = 0, R = 0, L = 0;
    C < n;
    ++C
  )
    for (var F = 0, N = Qe(e, g + 1, (g = ea((R = o[C])))), U = e; F < D; ++F)
      (U = ta(R > 0 ? v[F] + " " + N : k(N, /&\f/g, v[F]))) && (u[L++] = U);
  return fr(e, t, r, a === 0 ? cr : l, u, c, f, h);
}
function Gc(e, t, r, n) {
  return fr(e, t, r, Kn, ws(Fc()), Qe(e, 2, -2), 0, n);
}
function Ls(e, t, r, n, a) {
  return fr(e, t, r, vs, Qe(e, 0, n), Qe(e, n + 1, -1), n, a);
}
function na(e, t, r) {
  switch (Pc(e, t)) {
    case 5103:
      return T + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return T + e + e;
    case 4789:
      return ht + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return T + e + ht + e + I + e + e;
    case 5936:
      switch (B(e, t + 11)) {
        case 114:
          return T + e + I + k(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return T + e + I + k(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return T + e + I + k(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return T + e + I + e + e;
    case 6165:
      return T + e + I + "flex-" + e + e;
    case 5187:
      return (
        T + e + k(e, /(\w+).+(:[^]+)/, T + "box-$1$2" + I + "flex-$1$2") + e
      );
    case 5443:
      return (
        T +
        e +
        I +
        "flex-item-" +
        k(e, /flex-|-self/g, "") +
        (ge(e, /flex-|baseline/)
          ? ""
          : I + "grid-row-" + k(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        T +
        e +
        I +
        "flex-line-pack" +
        k(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return T + e + I + k(e, "shrink", "negative") + e;
    case 5292:
      return T + e + I + k(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        T +
        "box-" +
        k(e, "-grow", "") +
        T +
        e +
        I +
        k(e, "grow", "positive") +
        e
      );
    case 4554:
      return T + k(e, /([^-])(transform)/g, "$1" + T + "$2") + e;
    case 6187:
      return (
        k(k(k(e, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return k(e, /(image-set\([^]*)/, T + "$1$`$1");
    case 4968:
      return (
        k(
          k(e, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + I + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        T +
        e +
        e
      );
    case 4200:
      if (!ge(e, /flex-|baseline/))
        return I + "grid-column-align" + Qe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return I + k(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r &&
        r.some(function (n, a) {
          return (t = a), ge(n.props, /grid-\w+-end/);
        })
        ? ~Wt(e + (r = r[t].value), "span", 0)
          ? e
          : I +
            k(e, "-start", "") +
            e +
            I +
            "grid-row-span:" +
            (~Wt(r, "span", 0) ? ge(r, /\d+/) : +ge(r, /\d+/) - +ge(e, /\d+/)) +
            ";"
        : I + k(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r &&
        r.some(function (n) {
          return ge(n.props, /grid-\w+-start/);
        })
        ? e
        : I + k(k(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return k(e, /(.+)-inline(.+)/, T + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ue(e) - 1 - t > 6)
        switch (B(e, t + 1)) {
          case 109:
            if (B(e, t + 4) !== 45) break;
          case 102:
            return (
              k(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  T +
                  "$2-$3$1" +
                  ht +
                  (B(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Wt(e, "stretch", 0)
              ? na(k(e, "stretch", "fill-available"), t, r) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return k(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (n, a, i, o, l, u, c) {
          return (
            I +
            a +
            ":" +
            i +
            c +
            (o ? I + a + "-span:" + (l ? u : +u - +i) + c : "") +
            e
          );
        },
      );
    case 4949:
      if (B(e, t + 6) === 121) return k(e, ":", ":" + T) + e;
      break;
    case 6444:
      switch (B(e, B(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            k(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                T +
                (B(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                T +
                "$2$3$1" +
                I +
                "$2box$3",
            ) + e
          );
        case 100:
          return k(e, ":", ":" + I) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return k(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Vt(e, t) {
  for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
  return r;
}
function zc(e, t, r, n) {
  switch (e.type) {
    case Tc:
      if (e.children.length) break;
    case Rc:
    case vs:
      return (e.return = e.return || e.value);
    case Kn:
      return "";
    case Xn:
      return (e.return = e.value + "{" + Vt(e.children, n) + "}");
    case cr:
      if (!ue((e.value = e.props.join(",")))) return "";
  }
  return ue((r = Vt(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function Bc(e) {
  var t = ra(e);
  return function (r, n, a, i) {
    for (var o = "", l = 0; l < t; l++) o += e[l](r, n, a, i) || "";
    return o;
  };
}
function Vc(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Zc(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case vs:
        e.return = na(e.value, e.length, r);
        return;
      case Xn:
        return Vt([Oe(e, { value: k(e.value, "@", "@" + T) })], n);
      case cr:
        if (e.length)
          return Ec((r = e.props), function (a) {
            switch (ge(a, (n = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                He(Oe(e, { props: [k(a, /:(read-\w+)/, ":" + ht + "$1")] })),
                  He(Oe(e, { props: [a] })),
                  jr(e, { props: Ws(r, n) });
                break;
              case "::placeholder":
                He(
                  Oe(e, { props: [k(a, /:(plac\w+)/, ":" + T + "input-$1")] }),
                ),
                  He(Oe(e, { props: [k(a, /:(plac\w+)/, ":" + ht + "$1")] })),
                  He(Oe(e, { props: [k(a, /:(plac\w+)/, I + "input-$1")] })),
                  He(Oe(e, { props: [a] })),
                  jr(e, { props: Ws(r, n) });
                break;
            }
            return "";
          });
    }
}
var Jc = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  q = {},
  Xe =
    (typeof process < "u" &&
      q !== void 0 &&
      (q.REACT_APP_SC_ATTR || q.SC_ATTR)) ||
    "data-styled",
  aa = "active",
  ia = "data-styled-version",
  mr = "6.1.12",
  Ss = `/*!sc*/
`,
  Zt = typeof window < "u" && "HTMLElement" in window,
  qc = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        q !== void 0 &&
        q.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        q.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        q.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        q !== void 0 &&
        q.SC_DISABLE_SPEEDY !== void 0 &&
        q.SC_DISABLE_SPEEDY !== "" &&
        q.SC_DISABLE_SPEEDY !== "false" &&
        q.SC_DISABLE_SPEEDY),
  Qc = {},
  pr = Object.freeze([]),
  et = Object.freeze({});
function oa(e, t, r) {
  return (
    r === void 0 && (r = et), (e.theme !== r.theme && e.theme) || t || r.theme
  );
}
var la = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Kc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Xc = /(^-|-$)/g;
function js(e) {
  return e.replace(Kc, "-").replace(Xc, "");
}
var ed = /(a)(d)/gi,
  Tt = 52,
  Us = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Hr(e) {
  var t,
    r = "";
  for (t = Math.abs(e); t > Tt; t = (t / Tt) | 0) r = Us(t % Tt) + r;
  return (Us(t % Tt) + r).replace(ed, "$1-$2");
}
var xr,
  ua = 5381,
  Be = function (e, t) {
    for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
    return e;
  },
  ca = function (e) {
    return Be(ua, e);
  };
function da(e) {
  return Hr(ca(e) >>> 0);
}
function td(e) {
  return e.displayName || e.name || "Component";
}
function Dr(e) {
  return typeof e == "string" && !0;
}
var fa = typeof Symbol == "function" && Symbol.for,
  ha = fa ? Symbol.for("react.memo") : 60115,
  rd = fa ? Symbol.for("react.forward_ref") : 60112,
  sd = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  nd = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  ma = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ad =
    (((xr = {})[rd] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (xr[ha] = ma),
    xr);
function $s(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ha
    ? ma
    : "$$typeof" in e
      ? ad[e.$$typeof]
      : sd;
  var t;
}
var id = Object.defineProperty,
  od = Object.getOwnPropertyNames,
  Hs = Object.getOwnPropertySymbols,
  ld = Object.getOwnPropertyDescriptor,
  ud = Object.getPrototypeOf,
  Gs = Object.prototype;
function pa(e, t, r) {
  if (typeof t != "string") {
    if (Gs) {
      var n = ud(t);
      n && n !== Gs && pa(e, n, r);
    }
    var a = od(t);
    Hs && (a = a.concat(Hs(t)));
    for (var i = $s(e), o = $s(t), l = 0; l < a.length; ++l) {
      var u = a[l];
      if (!(u in nd || (r && r[u]) || (o && u in o) || (i && u in i))) {
        var c = ld(t, u);
        try {
          id(e, u, c);
        } catch {}
      }
    }
  }
  return e;
}
function Le(e) {
  return typeof e == "function";
}
function ks(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Ie(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Gr(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function vt(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function zr(e, t, r) {
  if ((r === void 0 && (r = !1), !r && !vt(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++) e[n] = zr(e[n], t[n]);
  else if (vt(t)) for (var n in t) e[n] = zr(e[n], t[n]);
  return e;
}
function bs(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function je(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var cd = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
        return r;
      }),
      (e.prototype.insertRules = function (t, r) {
        if (t >= this.groupSizes.length) {
          for (var n = this.groupSizes, a = n.length, i = a; t >= i; )
            if ((i <<= 1) < 0) throw je(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(n),
            (this.length = i);
          for (var o = a; o < i; o++) this.groupSizes[o] = 0;
        }
        for (
          var l = this.indexOfGroup(t + 1), u = ((o = 0), r.length);
          o < u;
          o++
        )
          this.tag.insertRule(l, r[o]) && (this.groupSizes[t]++, l++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var r = this.groupSizes[t],
            n = this.indexOfGroup(t),
            a = n + r;
          this.groupSizes[t] = 0;
          for (var i = n; i < a; i++) this.tag.deleteRule(n);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var r = "";
        if (t >= this.length || this.groupSizes[t] === 0) return r;
        for (
          var n = this.groupSizes[t],
            a = this.indexOfGroup(t),
            i = a + n,
            o = a;
          o < i;
          o++
        )
          r += "".concat(this.tag.getRule(o)).concat(Ss);
        return r;
      }),
      e
    );
  })(),
  jt = new Map(),
  Jt = new Map(),
  Ut = 1,
  Pt = function (e) {
    if (jt.has(e)) return jt.get(e);
    for (; Jt.has(Ut); ) Ut++;
    var t = Ut++;
    return jt.set(e, t), Jt.set(t, e), t;
  },
  dd = function (e, t) {
    (Ut = t + 1), jt.set(e, t), Jt.set(t, e);
  },
  fd = "style[".concat(Xe, "][").concat(ia, '="').concat(mr, '"]'),
  hd = new RegExp(
    "^".concat(Xe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  md = function (e, t, r) {
    for (var n, a = r.split(","), i = 0, o = a.length; i < o; i++)
      (n = a[i]) && e.registerName(t, n);
  },
  pd = function (e, t) {
    for (
      var r,
        n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Ss),
        a = [],
        i = 0,
        o = n.length;
      i < o;
      i++
    ) {
      var l = n[i].trim();
      if (l) {
        var u = l.match(hd);
        if (u) {
          var c = 0 | parseInt(u[1], 10),
            f = u[2];
          c !== 0 && (dd(f, c), md(e, f, u[3]), e.getTag().insertRules(c, a)),
            (a.length = 0);
        } else a.push(l);
      }
    }
  },
  zs = function (e) {
    for (
      var t = document.querySelectorAll(fd), r = 0, n = t.length;
      r < n;
      r++
    ) {
      var a = t[r];
      a &&
        a.getAttribute(Xe) !== aa &&
        (pd(e, a), a.parentNode && a.parentNode.removeChild(a));
    }
  };
function yd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ya = function (e) {
    var t = document.head,
      r = e || t,
      n = document.createElement("style"),
      a = (function (l) {
        var u = Array.from(l.querySelectorAll("style[".concat(Xe, "]")));
        return u[u.length - 1];
      })(r),
      i = a !== void 0 ? a.nextSibling : null;
    n.setAttribute(Xe, aa), n.setAttribute(ia, mr);
    var o = yd();
    return o && n.setAttribute("nonce", o), r.insertBefore(n, i), n;
  },
  gd = (function () {
    function e(t) {
      (this.element = ya(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (r) {
          if (r.sheet) return r.sheet;
          for (var n = document.styleSheets, a = 0, i = n.length; a < i; a++) {
            var o = n[a];
            if (o.ownerNode === r) return o;
          }
          throw je(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        try {
          return this.sheet.insertRule(r, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var r = this.sheet.cssRules[t];
        return r && r.cssText ? r.cssText : "";
      }),
      e
    );
  })(),
  _d = (function () {
    function e(t) {
      (this.element = ya(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        if (t <= this.length && t >= 0) {
          var n = document.createTextNode(r);
          return (
            this.element.insertBefore(n, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  vd = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        return (
          t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Bs = Zt,
  wd = { isServer: !Zt, useCSSOMInjection: !qc },
  qt = (function () {
    function e(t, r, n) {
      t === void 0 && (t = et), r === void 0 && (r = {});
      var a = this;
      (this.options = V(V({}, wd), t)),
        (this.gs = r),
        (this.names = new Map(n)),
        (this.server = !!t.isServer),
        !this.server && Zt && Bs && ((Bs = !1), zs(this)),
        bs(this, function () {
          return (function (i) {
            for (
              var o = i.getTag(),
                l = o.length,
                u = "",
                c = function (h) {
                  var g = (function (L) {
                    return Jt.get(L);
                  })(h);
                  if (g === void 0) return "continue";
                  var v = i.names.get(g),
                    D = o.getGroup(h);
                  if (v === void 0 || !v.size || D.length === 0)
                    return "continue";
                  var C = ""
                      .concat(Xe, ".g")
                      .concat(h, '[id="')
                      .concat(g, '"]'),
                    R = "";
                  v !== void 0 &&
                    v.forEach(function (L) {
                      L.length > 0 && (R += "".concat(L, ","));
                    }),
                    (u += ""
                      .concat(D)
                      .concat(C, '{content:"')
                      .concat(R, '"}')
                      .concat(Ss));
                },
                f = 0;
              f < l;
              f++
            )
              c(f);
            return u;
          })(a);
        });
    }
    return (
      (e.registerId = function (t) {
        return Pt(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && Zt && zs(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, r) {
        return (
          r === void 0 && (r = !0),
          new e(V(V({}, this.options), t), this.gs, (r && this.names) || void 0)
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (r) {
              var n = r.useCSSOMInjection,
                a = r.target;
              return r.isServer ? new vd(a) : n ? new gd(a) : new _d(a);
            })(this.options)),
            new cd(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, r) {
        return this.names.has(t) && this.names.get(t).has(r);
      }),
      (e.prototype.registerName = function (t, r) {
        if ((Pt(t), this.names.has(t))) this.names.get(t).add(r);
        else {
          var n = new Set();
          n.add(r), this.names.set(t, n);
        }
      }),
      (e.prototype.insertRules = function (t, r, n) {
        this.registerName(t, r), this.getTag().insertRules(Pt(t), n);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Pt(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  Sd = /&/g,
  kd = /^\s*\/\/.*$/gm;
function ga(e, t) {
  return e.map(function (r) {
    return (
      r.type === "rule" &&
        ((r.value = "".concat(t, " ").concat(r.value)),
        (r.value = r.value.replaceAll(",", ",".concat(t, " "))),
        (r.props = r.props.map(function (n) {
          return "".concat(t, " ").concat(n);
        }))),
      Array.isArray(r.children) &&
        r.type !== "@keyframes" &&
        (r.children = ga(r.children, t)),
      r
    );
  });
}
function bd(e) {
  var t,
    r,
    n,
    a = et,
    i = a.options,
    o = i === void 0 ? et : i,
    l = a.plugins,
    u = l === void 0 ? pr : l,
    c = function (g, v, D) {
      return D.startsWith(r) && D.endsWith(r) && D.replaceAll(r, "").length > 0
        ? ".".concat(t)
        : g;
    },
    f = u.slice();
  f.push(function (g) {
    g.type === cr &&
      g.value.includes("&") &&
      (g.props[0] = g.props[0].replace(Sd, r).replace(n, c));
  }),
    o.prefix && f.push(Zc),
    f.push(zc);
  var h = function (g, v, D, C) {
    v === void 0 && (v = ""),
      D === void 0 && (D = ""),
      C === void 0 && (C = "&"),
      (t = C),
      (r = v),
      (n = new RegExp("\\".concat(r, "\\b"), "g"));
    var R = g.replace(kd, ""),
      L = Hc(D || v ? "".concat(D, " ").concat(v, " { ").concat(R, " }") : R);
    o.namespace && (L = ga(L, o.namespace));
    var F = [];
    return (
      Vt(
        L,
        Bc(
          f.concat(
            Vc(function (N) {
              return F.push(N);
            }),
          ),
        ),
      ),
      F
    );
  };
  return (
    (h.hash = u.length
      ? u
          .reduce(function (g, v) {
            return v.name || je(15), Be(g, v.name);
          }, ua)
          .toString()
      : ""),
    h
  );
}
var xd = new qt(),
  Br = bd(),
  _a = X.createContext({
    shouldForwardProp: void 0,
    styleSheet: xd,
    stylis: Br,
  });
_a.Consumer;
X.createContext(void 0);
function Vr() {
  return S.useContext(_a);
}
var Dd = (function () {
    function e(t, r) {
      var n = this;
      (this.inject = function (a, i) {
        i === void 0 && (i = Br);
        var o = n.name + i.hash;
        a.hasNameForId(n.id, o) ||
          a.insertRules(n.id, o, i(n.rules, o, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = r),
        bs(this, function () {
          throw je(12, String(n.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Br), this.name + t.hash;
      }),
      e
    );
  })(),
  Md = function (e) {
    return e >= "A" && e <= "Z";
  };
function Vs(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Md(n) ? (t += "-" + n.toLowerCase()) : (t += n);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var va = function (e) {
    return e == null || e === !1 || e === "";
  },
  wa = function (e) {
    var t,
      r,
      n = [];
    for (var a in e) {
      var i = e[a];
      e.hasOwnProperty(a) &&
        !va(i) &&
        ((Array.isArray(i) && i.isCss) || Le(i)
          ? n.push("".concat(Vs(a), ":"), i, ";")
          : vt(i)
            ? n.push.apply(
                n,
                _t(_t(["".concat(a, " {")], wa(i), !1), ["}"], !1),
              )
            : n.push(
                ""
                  .concat(Vs(a), ": ")
                  .concat(
                    ((t = a),
                    (r = i) == null || typeof r == "boolean" || r === ""
                      ? ""
                      : typeof r != "number" ||
                          r === 0 ||
                          t in Jc ||
                          t.startsWith("--")
                        ? String(r).trim()
                        : "".concat(r, "px")),
                    ";",
                  ),
              ));
    }
    return n;
  };
function Te(e, t, r, n) {
  if (va(e)) return [];
  if (ks(e)) return [".".concat(e.styledComponentId)];
  if (Le(e)) {
    if (!Le((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var a = e(t);
    return Te(a, t, r, n);
  }
  var i;
  return e instanceof Dd
    ? r
      ? (e.inject(r, n), [e.getName(n)])
      : [e]
    : vt(e)
      ? wa(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            pr,
            e.map(function (o) {
              return Te(o, t, r, n);
            }),
          )
        : [e.toString()];
}
function Sa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Le(r) && !ks(r)) return !1;
  }
  return !0;
}
var Od = ca(mr),
  Yd = (function () {
    function e(t, r, n) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (n === void 0 || n.isStatic) && Sa(t)),
        (this.componentId = r),
        (this.baseHash = Be(Od, r)),
        (this.baseStyle = n),
        qt.registerId(r);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, r, n) {
        var a = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, r, n)
          : "";
        if (this.isStatic && !n.hash)
          if (
            this.staticRulesId &&
            r.hasNameForId(this.componentId, this.staticRulesId)
          )
            a = Ie(a, this.staticRulesId);
          else {
            var i = Gr(Te(this.rules, t, r, n)),
              o = Hr(Be(this.baseHash, i) >>> 0);
            if (!r.hasNameForId(this.componentId, o)) {
              var l = n(i, ".".concat(o), void 0, this.componentId);
              r.insertRules(this.componentId, o, l);
            }
            (a = Ie(a, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var u = Be(this.baseHash, n.hash), c = "", f = 0;
            f < this.rules.length;
            f++
          ) {
            var h = this.rules[f];
            if (typeof h == "string") c += h;
            else if (h) {
              var g = Gr(Te(h, t, r, n));
              (u = Be(u, g + f)), (c += g);
            }
          }
          if (c) {
            var v = Hr(u >>> 0);
            r.hasNameForId(this.componentId, v) ||
              r.insertRules(
                this.componentId,
                v,
                n(c, ".".concat(v), void 0, this.componentId),
              ),
              (a = Ie(a, v));
          }
        }
        return a;
      }),
      e
    );
  })(),
  wt = X.createContext(void 0);
wt.Consumer;
function Cd(e) {
  var t = X.useContext(wt),
    r = S.useMemo(
      function () {
        return (function (n, a) {
          if (!n) throw je(14);
          if (Le(n)) {
            var i = n(a);
            return i;
          }
          if (Array.isArray(n) || typeof n != "object") throw je(8);
          return a ? V(V({}, a), n) : n;
        })(e.theme, t);
      },
      [e.theme, t],
    );
  return e.children
    ? X.createElement(wt.Provider, { value: r }, e.children)
    : null;
}
var Mr = {};
function Nd(e, t, r) {
  var n = ks(e),
    a = e,
    i = !Dr(e),
    o = t.attrs,
    l = o === void 0 ? pr : o,
    u = t.componentId,
    c =
      u === void 0
        ? (function (U, G) {
            var E = typeof U != "string" ? "sc" : js(U);
            Mr[E] = (Mr[E] || 0) + 1;
            var b = "".concat(E, "-").concat(da(mr + E + Mr[E]));
            return G ? "".concat(G, "-").concat(b) : b;
          })(t.displayName, t.parentComponentId)
        : u,
    f = t.displayName,
    h =
      f === void 0
        ? (function (U) {
            return Dr(U) ? "styled.".concat(U) : "Styled(".concat(td(U), ")");
          })(e)
        : f,
    g =
      t.displayName && t.componentId
        ? "".concat(js(t.displayName), "-").concat(t.componentId)
        : t.componentId || c,
    v = n && a.attrs ? a.attrs.concat(l).filter(Boolean) : l,
    D = t.shouldForwardProp;
  if (n && a.shouldForwardProp) {
    var C = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var R = t.shouldForwardProp;
      D = function (U, G) {
        return C(U, G) && R(U, G);
      };
    } else D = C;
  }
  var L = new Yd(r, g, n ? a.componentStyle : void 0);
  function F(U, G) {
    return (function (E, b, at) {
      var Dt = E.attrs,
        Da = E.componentStyle,
        Ma = E.defaultProps,
        Oa = E.foldedComponentIds,
        Ya = E.styledComponentId,
        Ca = E.target,
        Na = X.useContext(wt),
        Ra = Vr(),
        yr = E.shouldForwardProp || Ra.shouldForwardProp,
        xs = oa(b, Na, Ma) || et,
        me = (function (Ot, ot, Yt) {
          for (
            var lt, Pe = V(V({}, ot), { className: void 0, theme: Yt }), _r = 0;
            _r < Ot.length;
            _r += 1
          ) {
            var Ct = Le((lt = Ot[_r])) ? lt(Pe) : lt;
            for (var Me in Ct)
              Pe[Me] =
                Me === "className"
                  ? Ie(Pe[Me], Ct[Me])
                  : Me === "style"
                    ? V(V({}, Pe[Me]), Ct[Me])
                    : Ct[Me];
          }
          return (
            ot.className && (Pe.className = Ie(Pe.className, ot.className)), Pe
          );
        })(Dt, b, xs),
        Mt = me.as || Ca,
        it = {};
      for (var De in me)
        me[De] === void 0 ||
          De[0] === "$" ||
          De === "as" ||
          (De === "theme" && me.theme === xs) ||
          (De === "forwardedAs"
            ? (it.as = me.forwardedAs)
            : (yr && !yr(De, Mt)) || (it[De] = me[De]));
      var Ds = (function (Ot, ot) {
          var Yt = Vr(),
            lt = Ot.generateAndInjectStyles(ot, Yt.styleSheet, Yt.stylis);
          return lt;
        })(Da, me),
        gr = Ie(Oa, Ya);
      return (
        Ds && (gr += " " + Ds),
        me.className && (gr += " " + me.className),
        (it[Dr(Mt) && !la.has(Mt) ? "class" : "className"] = gr),
        (it.ref = at),
        S.createElement(Mt, it)
      );
    })(N, U, G);
  }
  F.displayName = h;
  var N = X.forwardRef(F);
  return (
    (N.attrs = v),
    (N.componentStyle = L),
    (N.displayName = h),
    (N.shouldForwardProp = D),
    (N.foldedComponentIds = n
      ? Ie(a.foldedComponentIds, a.styledComponentId)
      : ""),
    (N.styledComponentId = g),
    (N.target = n ? a.target : e),
    Object.defineProperty(N, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (U) {
        this._foldedDefaultProps = n
          ? (function (G) {
              for (var E = [], b = 1; b < arguments.length; b++)
                E[b - 1] = arguments[b];
              for (var at = 0, Dt = E; at < Dt.length; at++) zr(G, Dt[at], !0);
              return G;
            })({}, a.defaultProps, U)
          : U;
      },
    }),
    bs(N, function () {
      return ".".concat(N.styledComponentId);
    }),
    i &&
      pa(N, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    N
  );
}
function Zs(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var Js = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function ka(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Le(e) || vt(e)) return Js(Te(Zs(pr, _t([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string"
    ? Te(n)
    : Js(Te(Zs(n, t)));
}
function Zr(e, t, r) {
  if ((r === void 0 && (r = et), !t)) throw je(1, t);
  var n = function (a) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return e(t, r, ka.apply(void 0, _t([a], i, !1)));
  };
  return (
    (n.attrs = function (a) {
      return Zr(
        e,
        t,
        V(V({}, r), {
          attrs: Array.prototype.concat(r.attrs, a).filter(Boolean),
        }),
      );
    }),
    (n.withConfig = function (a) {
      return Zr(e, t, V(V({}, r), a));
    }),
    n
  );
}
var ba = function (e) {
    return Zr(Nd, e);
  },
  Rd = ba;
la.forEach(function (e) {
  Rd[e] = ba(e);
});
var Td = (function () {
  function e(t, r) {
    (this.rules = t),
      (this.componentId = r),
      (this.isStatic = Sa(t)),
      qt.registerId(this.componentId + 1);
  }
  return (
    (e.prototype.createStyles = function (t, r, n, a) {
      var i = a(Gr(Te(this.rules, r, n, a)), ""),
        o = this.componentId + t;
      n.insertRules(o, o, i);
    }),
    (e.prototype.removeStyles = function (t, r) {
      r.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, r, n, a) {
      t > 2 && qt.registerId(this.componentId + t),
        this.removeStyles(t, n),
        this.createStyles(t, r, n, a);
    }),
    e
  );
})();
function Pd(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = ka.apply(void 0, _t([e], t, !1)),
    a = "sc-global-".concat(da(JSON.stringify(n))),
    i = new Td(n, a),
    o = function (u) {
      var c = Vr(),
        f = X.useContext(wt),
        h = X.useRef(c.styleSheet.allocateGSInstance(a)).current;
      return (
        c.styleSheet.server && l(h, u, c.styleSheet, f, c.stylis),
        X.useLayoutEffect(
          function () {
            if (!c.styleSheet.server)
              return (
                l(h, u, c.styleSheet, f, c.stylis),
                function () {
                  return i.removeStyles(h, c.styleSheet);
                }
              );
          },
          [h, u, c.styleSheet, f, c.stylis],
        ),
        null
      );
    };
  function l(u, c, f, h, g) {
    if (i.isStatic) i.renderStyles(u, Qc, f, g);
    else {
      var v = V(V({}, c), { theme: oa(c, h, o.defaultProps) });
      i.renderStyles(u, v, f, g);
    }
  }
  return X.memo(o);
}
const Ye = {
    background: "#F9F9F9",
    primaryText: "#333333",
    accent: "#236990",
    secondaryText: "#4A4A4A",
    border: "#DDDDDD",
    hover: "#25abe2",
    button: {
      primary: {
        color: "#FFFFFF",
        backgroundColor: "#236990",
        borderColor: "#236990",
        hover: { backgroundColor: "#004a75", borderColor: "#004a75" },
        disabled: {
          backgroundColor: "#CCCCCC",
          borderColor: "#CCCCCC",
          color: "#8C8C8C",
        },
      },
      secondary: {
        color: "#236990",
        backgroundColor: "#FFFFFF",
        borderColor: "#25abe2",
        hover: {
          backgroundColor: "#E6F7FF",
          borderColor: "#25abe2",
          color: "#25abe2",
        },
        disabled: {
          backgroundColor: "#FFFFFF",
          borderColor: "#E6E6E6",
          color: "#E6E6E6",
        },
      },
    },
    footer: {
      backgroundColor: "#236990",
      textColor: "#FFFFFF",
      padding: "2rem",
      textAlign: "center",
      link: {
        color: "#FFFFFF",
        textDecoration: "none",
        hover: { textDecoration: "underline" },
      },
    },
    shadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    highContrast: { text: "#000000", background: "#FFFFFF" },
  },
  Jr = { tab: "768px", mobile: "480px" },
  Ed = Pd`
  :root {
    --font-body: 'Work Sans', sans-serif;
    --font-heading: 'Quicksand', sans-serif;
    --font-size-base: 62.5%;
    --font-size-lg: 6rem;
    --font-size-md: 4.4rem;
    --font-size-sm: 1.8rem;
    --font-size-xs: 1.65rem;
    --font-weight-heading: 700;
    --font-weight-subheading: 400;
    --font-weight-body: 400;
    --color-background: ${Ye.background};
    --color-primary-text: ${Ye.primaryText};
    --color-accent: ${Ye.accent};
    --color-border: ${Ye.border};
    --color-button-primary-bg: ${Ye.button.primary.backgroundColor};
    --color-button-primary-text: ${Ye.button.primary.color};
    --color-shadow: ${Ye.shadow};
    --scrollbar-width: 1.5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-body);
  }

  html {
    font-size: var(--font-size-base);
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    background-color: var(--color-background);
    color: var(--color-primary-text);
    scrollbar-color: var(--color-accent);
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar {
    width: var(--scrollbar-width);
  }

  body::-webkit-scrollbar-track {
    background-color: var(--color-background);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }

  h1 {
    color: var(--color-primary-text);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-heading);
    font-family: var(--font-heading);
  }

  h2 {
    color: var(--color-primary-text);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-subheading);
    text-align: center;
    font-family: var(--font-heading);
  }

  h3 {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-body);
    font-family: var(--font-heading);
  }

  p {
    color: var(--color-primary-text);
    opacity: 0.7;
    font-size: var(--font-size-xs);
    line-height: 1.5;
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--color-accent);
  }

  li {
    list-style: none;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-four-column {
    grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
  }

  .common-heading {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
    font-family: var(--font-heading);
  }

  input, textarea {
    max-width: 50rem;
    color: var(--color-primary-text);
    padding: 1.6rem 2.4rem;
    border: 1px solid var(--color-border);
    text-transform: uppercase;
    box-shadow: var(--color-shadow);
  }

  input[type="submit"] {
    max-width: 16rem;
    margin-top: 2rem;
    background-color: var(--color-button-primary-bg);
    color: var(--color-button-primary-text);
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: 0.1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media (max-width: ${Jr.tab}) {
    .container {
      padding: 0 3.2rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${Jr.mobile}) {
    html {
      font-size: 50%;
    }

    .grid {
      gap: 3.2rem;
    }

    .grid-two-column, .grid-three-column, .grid-four-column {
      grid-template-columns: 1fr;
    }
  }
`,
  Fd = { colors: Ye, media: Jr },
  Id = () =>
    y.jsxs(Cd, {
      theme: Fd,
      children: [
        y.jsx(Ed, {}),
        y.jsx(Oc, {}),
        y.jsxs("main", {
          role: "main",
          className: "main-content",
          children: [y.jsx(Di, {}), y.jsx(Cc, {})],
        }),
        y.jsx(Nc, {}),
      ],
    }),
  xa = document.getElementById("root");
if (!xa) throw new Error("Root element with id 'root' not found.");
const Wd = Or.createRoot(xa);
Wd.render(
  y.jsx(X.StrictMode, {
    children: y.jsx(AppProvider, { children: y.jsx(Id, {}) }),
  }),
);
export { y as j };
