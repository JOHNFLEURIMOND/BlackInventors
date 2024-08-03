const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home-BCinQKwi.js",
      "assets/vendor-CXoAby46.js",
      "assets/Home-BGCxU0oQ.css",
      "assets/NotFound-naTfQj7H.js",
      "assets/NotFound-BwN_YWFh.css",
    ]),
) => i.map((i) => d[i]);
import { r as w, a as Ra, R as K } from "./vendor-CXoAby46.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
    const a = {};
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = r(n);
    fetch(n.href, a);
  }
})();
var Js = { exports: {} },
  qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta = w,
  Ea = Symbol.for("react.element"),
  Pa = Symbol.for("react.fragment"),
  Fa = Object.prototype.hasOwnProperty,
  Ia = Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wa = { key: !0, ref: !0, __self: !0, __source: !0 };
function qs(e, t, r) {
  var s,
    n = {},
    a = null,
    i = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (s in t) Fa.call(t, s) && !Wa.hasOwnProperty(s) && (n[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) n[s] === void 0 && (n[s] = t[s]);
  return {
    $$typeof: Ea,
    type: e,
    key: a,
    ref: i,
    props: n,
    _owner: Ia.current,
  };
}
qt.Fragment = Pa;
qt.jsx = qs;
qt.jsxs = qs;
Js.exports = qt;
var p = Js.exports,
  Mr = {},
  Ds = Ra;
(Mr.createRoot = Ds.createRoot), (Mr.hydrateRoot = Ds.hydrateRoot);
const Aa = "modulepreload",
  La = function (e) {
    return "/" + e;
  },
  Ms = {},
  Qs = function (t, r, s) {
    let n = Promise.resolve();
    if (r && r.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      n = Promise.all(
        r.map((o) => {
          if (((o = La(o)), o in Ms)) return;
          Ms[o] = !0;
          const l = o.endsWith(".css"),
            u = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${o}"]${u}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = l ? "stylesheet" : Aa),
            l || ((d.as = "script"), (d.crossOrigin = "")),
            (d.href = o),
            i && d.setAttribute("nonce", i),
            document.head.appendChild(d),
            l)
          )
            return new Promise((f, y) => {
              d.addEventListener("load", f),
                d.addEventListener("error", () =>
                  y(new Error(`Unable to preload CSS for ${o}`)),
                );
            });
        }),
      );
    }
    return n
      .then(() => t())
      .catch((a) => {
        const i = new Event("vite:preloadError", { cancelable: !0 });
        if (((i.payload = a), window.dispatchEvent(i), !i.defaultPrevented))
          throw a;
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
 */ var Or;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Or || (Or = {}));
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ks(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Xs(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let s = e.indexOf("?");
    s >= 0 && ((t.search = e.substr(s)), (e = e.substr(0, s))),
      e && (t.pathname = e);
  }
  return t;
}
var Os;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Os || (Os = {}));
function ja(e, t, r) {
  return r === void 0 && (r = "/"), Ua(e, t, r, !1);
}
function Ua(e, t, r, s) {
  let n = typeof t == "string" ? Xs(t) : t,
    a = ei(n.pathname || "/", r);
  if (a == null) return null;
  let i = en(e);
  $a(i);
  let o = null;
  for (let l = 0; o == null && l < i.length; ++l) {
    let u = Xa(a);
    o = Qa(i[l], u, s);
  }
  return o;
}
function en(e, t, r, s) {
  t === void 0 && (t = []), r === void 0 && (r = []), s === void 0 && (s = "");
  let n = (a, i, o) => {
    let l = {
      relativePath: o === void 0 ? a.path || "" : o,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: i,
      route: a,
    };
    l.relativePath.startsWith("/") &&
      (X(
        l.relativePath.startsWith(s),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(s.length)));
    let u = Be([s, l.relativePath]),
      d = r.concat(l);
    a.children &&
      a.children.length > 0 &&
      (X(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      en(a.children, t, d, u)),
      !(a.path == null && !a.index) &&
        t.push({ path: u, score: Ja(u, a.index), routesMeta: d });
  };
  return (
    e.forEach((a, i) => {
      var o;
      if (a.path === "" || !((o = a.path) != null && o.includes("?"))) n(a, i);
      else for (let l of tn(a.path)) n(a, i, l);
    }),
    t
  );
}
function tn(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...s] = t,
    n = r.endsWith("?"),
    a = r.replace(/\?$/, "");
  if (s.length === 0) return n ? [a, ""] : [a];
  let i = tn(s.join("/")),
    o = [];
  return (
    o.push(...i.map((l) => (l === "" ? a : [a, l].join("/")))),
    n && o.push(...i),
    o.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function $a(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : qa(
          t.routesMeta.map((s) => s.childrenIndex),
          r.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
const Ha = /^:[\w-]+$/,
  Ga = 3,
  za = 2,
  Ba = 1,
  Va = 10,
  Za = -2,
  Ys = (e) => e === "*";
function Ja(e, t) {
  let r = e.split("/"),
    s = r.length;
  return (
    r.some(Ys) && (s += Za),
    t && (s += za),
    r
      .filter((n) => !Ys(n))
      .reduce((n, a) => n + (Ha.test(a) ? Ga : a === "" ? Ba : Va), s)
  );
}
function qa(e, t) {
  return e.length === t.length && e.slice(0, -1).every((s, n) => s === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Qa(e, t, r) {
  let { routesMeta: s } = e,
    n = {},
    a = "/",
    i = [];
  for (let o = 0; o < s.length; ++o) {
    let l = s[o],
      u = o === s.length - 1,
      d = a === "/" ? t : t.slice(a.length) || "/",
      f = Cs(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        d,
      ),
      y = l.route;
    if (
      (!f &&
        u &&
        r &&
        !s[s.length - 1].route.index &&
        (f = Cs(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d,
        )),
      !f)
    )
      return null;
    Object.assign(n, f.params),
      i.push({
        params: n,
        pathname: Be([a, f.pathname]),
        pathnameBase: ti(Be([a, f.pathnameBase])),
        route: y,
      }),
      f.pathnameBase !== "/" && (a = Be([a, f.pathnameBase]));
  }
  return i;
}
function Cs(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, s] = Ka(e.path, e.caseSensitive, e.end),
    n = t.match(r);
  if (!n) return null;
  let a = n[0],
    i = a.replace(/(.)\/+$/, "$1"),
    o = n.slice(1);
  return {
    params: s.reduce((u, d, f) => {
      let { paramName: y, isOptional: _ } = d;
      if (y === "*") {
        let Y = o[f] || "";
        i = a.slice(0, a.length - Y.length).replace(/(.)\/+$/, "$1");
      }
      const x = o[f];
      return (
        _ && !x ? (u[y] = void 0) : (u[y] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: a,
    pathnameBase: i,
    pattern: e,
  };
}
function Ka(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ks(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let s = [],
    n =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, o, l) => (
            s.push({ paramName: o, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (n += "\\/*$")
        : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"),
    [new RegExp(n, t ? void 0 : "i"), s]
  );
}
function Xa(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ks(
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
function ei(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    s = e.charAt(r);
  return s && s !== "/" ? null : e.slice(r) || "/";
}
const Be = (e) => e.join("/").replace(/\/\/+/g, "/"),
  ti = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function ri(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const rn = ["post", "put", "patch", "delete"];
new Set(rn);
const si = ["get", ...rn];
new Set(si);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yr() {
  return (
    (Yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
          }
          return e;
        }),
    Yr.apply(this, arguments)
  );
}
const ni = w.createContext(null),
  ai = w.createContext(null),
  ii = w.createContext(null),
  Jr = w.createContext(null),
  Qt = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  sn = w.createContext(null);
function nn() {
  return w.useContext(Jr) != null;
}
function oi() {
  return nn() || X(!1), w.useContext(Jr).location;
}
function li(e, t) {
  return ui(e, t);
}
function ui(e, t, r, s) {
  nn() || X(!1);
  let { navigator: n } = w.useContext(ii),
    { matches: a } = w.useContext(Qt),
    i = a[a.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let u = oi(),
    d;
  if (t) {
    var f;
    let N = typeof t == "string" ? Xs(t) : t;
    l === "/" || ((f = N.pathname) != null && f.startsWith(l)) || X(!1),
      (d = N);
  } else d = u;
  let y = d.pathname || "/",
    _ = y;
  if (l !== "/") {
    let N = l.replace(/^\//, "").split("/");
    _ = "/" + y.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let x = ja(e, { pathname: _ }),
    Y = mi(
      x &&
        x.map((N) =>
          Object.assign({}, N, {
            params: Object.assign({}, o, N.params),
            pathname: Be([
              l,
              n.encodeLocation
                ? n.encodeLocation(N.pathname).pathname
                : N.pathname,
            ]),
            pathnameBase:
              N.pathnameBase === "/"
                ? l
                : Be([
                    l,
                    n.encodeLocation
                      ? n.encodeLocation(N.pathnameBase).pathname
                      : N.pathnameBase,
                  ]),
          }),
        ),
      a,
      r,
      s,
    );
  return t && Y
    ? w.createElement(
        Jr.Provider,
        {
          value: {
            location: Yr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: Or.Pop,
          },
        },
        Y,
      )
    : Y;
}
function ci() {
  let e = _i(),
    t = ri(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? w.createElement("pre", { style: n }, r) : null,
    null,
  );
}
const di = w.createElement(ci, null);
class fi extends w.Component {
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
      ? w.createElement(
          Qt.Provider,
          { value: this.props.routeContext },
          w.createElement(sn.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function hi(e) {
  let { routeContext: t, match: r, children: s } = e,
    n = w.useContext(ni);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = r.route.id),
    w.createElement(Qt.Provider, { value: t }, s)
  );
}
function mi(e, t, r, s) {
  var n;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    s === void 0 && (s = null),
    e == null)
  ) {
    var a;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (a = s) != null &&
      a.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let i = e,
    o = (n = r) == null ? void 0 : n.errors;
  if (o != null) {
    let d = i.findIndex(
      (f) => f.route.id && (o == null ? void 0 : o[f.route.id]) !== void 0,
    );
    d >= 0 || X(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let l = !1,
    u = -1;
  if (r && s && s.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: y, errors: _ } = r,
          x =
            f.route.loader &&
            y[f.route.id] === void 0 &&
            (!_ || _[f.route.id] === void 0);
        if (f.route.lazy || x) {
          (l = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, f, y) => {
    let _,
      x = !1,
      Y = null,
      N = null;
    r &&
      ((_ = o && f.route.id ? o[f.route.id] : void 0),
      (Y = f.route.errorElement || di),
      l &&
        (u < 0 && y === 0
          ? ((x = !0), (N = null))
          : u === y &&
            ((x = !0), (N = f.route.hydrateFallbackElement || null))));
    let A = t.concat(i.slice(0, y + 1)),
      P = () => {
        let C;
        return (
          _
            ? (C = Y)
            : x
              ? (C = N)
              : f.route.Component
                ? (C = w.createElement(f.route.Component, null))
                : f.route.element
                  ? (C = f.route.element)
                  : (C = d),
          w.createElement(hi, {
            match: f,
            routeContext: { outlet: d, matches: A, isDataRoute: r != null },
            children: C,
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || y === 0)
      ? w.createElement(fi, {
          location: r.location,
          revalidation: r.revalidation,
          component: Y,
          error: _,
          children: P(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
        })
      : P();
  }, null);
}
var Cr = (function (e) {
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
})(Cr || {});
function pi(e) {
  let t = w.useContext(ai);
  return t || X(!1), t;
}
function yi(e) {
  let t = w.useContext(Qt);
  return t || X(!1), t;
}
function gi(e) {
  let t = yi(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || X(!1), r.route.id;
}
function _i() {
  var e;
  let t = w.useContext(sn),
    r = pi(Cr.UseRouteError),
    s = gi(Cr.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[s];
}
function Nr(e) {
  X(!1);
}
function vi(e) {
  let { children: t, location: r } = e;
  return li(Rr(t), r);
}
new Promise(() => {});
function Rr(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    w.Children.forEach(e, (s, n) => {
      if (!w.isValidElement(s)) return;
      let a = [...t, n];
      if (s.type === w.Fragment) {
        r.push.apply(r, Rr(s.props.children, a));
        return;
      }
      s.type !== Nr && X(!1), !s.props.index || !s.props.children || X(!1);
      let i = {
        id: s.props.id || a.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.ErrorBoundary != null || s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (i.children = Rr(s.props.children, a)), r.push(i);
    }),
    r
  );
}
class wi extends w.Component {
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
      ? p.jsx("h1", { children: "Something went wrong." })
      : this.props.children;
  }
}
const Si = w.lazy(() =>
    Qs(() => import("./Home-BCinQKwi.js"), __vite__mapDeps([0, 1, 2])),
  ),
  ki = w.lazy(() =>
    Qs(() => import("./NotFound-naTfQj7H.js"), __vite__mapDeps([3, 1, 4])),
  ),
  bi = () => p.jsx("div", { children: "Loading..." });
function xi() {
  return p.jsx(wi, {
    children: p.jsx(w.Suspense, {
      fallback: p.jsx(bi, {}),
      children: p.jsxs(vi, {
        children: [
          p.jsx(Nr, { path: "/", element: p.jsx(Si, {}) }),
          p.jsx(Nr, { path: "*", element: p.jsx(ki, {}) }),
        ],
      }),
    }),
  });
} //! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var an;
function h() {
  return an.apply(null, arguments);
}
function Di(e) {
  an = e;
}
function ae(e) {
  return (
    e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
  );
}
function Ie(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function M(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function qr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e) if (M(e, t)) return !1;
  return !0;
}
function Z(e) {
  return e === void 0;
}
function Se(e) {
  return (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  );
}
function wt(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function on(e, t) {
  var r = [],
    s,
    n = e.length;
  for (s = 0; s < n; ++s) r.push(t(e[s], s));
  return r;
}
function Ye(e, t) {
  for (var r in t) M(t, r) && (e[r] = t[r]);
  return (
    M(t, "toString") && (e.toString = t.toString),
    M(t, "valueOf") && (e.valueOf = t.valueOf),
    e
  );
}
function de(e, t, r, s) {
  return Nn(e, t, r, s, !0).utc();
}
function Mi() {
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
function v(e) {
  return e._pf == null && (e._pf = Mi()), e._pf;
}
var Tr;
Array.prototype.some
  ? (Tr = Array.prototype.some)
  : (Tr = function (e) {
      var t = Object(this),
        r = t.length >>> 0,
        s;
      for (s = 0; s < r; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
      return !1;
    });
function Qr(e) {
  var t = null,
    r = !1,
    s = e._d && !isNaN(e._d.getTime());
  if (
    (s &&
      ((t = v(e)),
      (r = Tr.call(t.parsedDateParts, function (n) {
        return n != null;
      })),
      (s =
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
        (s =
          s &&
          t.charsLeftOver === 0 &&
          t.unusedTokens.length === 0 &&
          t.bigHour === void 0)),
    Object.isFrozen == null || !Object.isFrozen(e))
  )
    e._isValid = s;
  else return s;
  return e._isValid;
}
function Kt(e) {
  var t = de(NaN);
  return e != null ? Ye(v(t), e) : (v(t).userInvalidated = !0), t;
}
var Ns = (h.momentProperties = []),
  _r = !1;
function Kr(e, t) {
  var r,
    s,
    n,
    a = Ns.length;
  if (
    (Z(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    Z(t._i) || (e._i = t._i),
    Z(t._f) || (e._f = t._f),
    Z(t._l) || (e._l = t._l),
    Z(t._strict) || (e._strict = t._strict),
    Z(t._tzm) || (e._tzm = t._tzm),
    Z(t._isUTC) || (e._isUTC = t._isUTC),
    Z(t._offset) || (e._offset = t._offset),
    Z(t._pf) || (e._pf = v(t)),
    Z(t._locale) || (e._locale = t._locale),
    a > 0)
  )
    for (r = 0; r < a; r++) (s = Ns[r]), (n = t[s]), Z(n) || (e[s] = n);
  return e;
}
function St(e) {
  Kr(this, e),
    (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
    this.isValid() || (this._d = new Date(NaN)),
    _r === !1 && ((_r = !0), h.updateOffset(this), (_r = !1));
}
function ie(e) {
  return e instanceof St || (e != null && e._isAMomentObject != null);
}
function ln(e) {
  h.suppressDeprecationWarnings === !1 &&
    typeof console < "u" &&
    console.warn &&
    console.warn("Deprecation warning: " + e);
}
function te(e, t) {
  var r = !0;
  return Ye(function () {
    if ((h.deprecationHandler != null && h.deprecationHandler(null, e), r)) {
      var s = [],
        n,
        a,
        i,
        o = arguments.length;
      for (a = 0; a < o; a++) {
        if (((n = ""), typeof arguments[a] == "object")) {
          n +=
            `
[` +
            a +
            "] ";
          for (i in arguments[0])
            M(arguments[0], i) && (n += i + ": " + arguments[0][i] + ", ");
          n = n.slice(0, -2);
        } else n = arguments[a];
        s.push(n);
      }
      ln(
        e +
          `
Arguments: ` +
          Array.prototype.slice.call(s).join("") +
          `
` +
          new Error().stack,
      ),
        (r = !1);
    }
    return t.apply(this, arguments);
  }, t);
}
var Rs = {};
function un(e, t) {
  h.deprecationHandler != null && h.deprecationHandler(e, t),
    Rs[e] || (ln(t), (Rs[e] = !0));
}
h.suppressDeprecationWarnings = !1;
h.deprecationHandler = null;
function fe(e) {
  return (
    (typeof Function < "u" && e instanceof Function) ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function Oi(e) {
  var t, r;
  for (r in e)
    M(e, r) && ((t = e[r]), fe(t) ? (this[r] = t) : (this["_" + r] = t));
  (this._config = e),
    (this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
        "|" +
        /\d{1,2}/.source,
    ));
}
function Er(e, t) {
  var r = Ye({}, e),
    s;
  for (s in t)
    M(t, s) &&
      (Ie(e[s]) && Ie(t[s])
        ? ((r[s] = {}), Ye(r[s], e[s]), Ye(r[s], t[s]))
        : t[s] != null
          ? (r[s] = t[s])
          : delete r[s]);
  for (s in e) M(e, s) && !M(t, s) && Ie(e[s]) && (r[s] = Ye({}, r[s]));
  return r;
}
function Xr(e) {
  e != null && this.set(e);
}
var Pr;
Object.keys
  ? (Pr = Object.keys)
  : (Pr = function (e) {
      var t,
        r = [];
      for (t in e) M(e, t) && r.push(t);
      return r;
    });
var Yi = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L",
};
function Ci(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return fe(s) ? s.call(t, r) : s;
}
function ce(e, t, r) {
  var s = "" + Math.abs(e),
    n = t - s.length,
    a = e >= 0;
  return (
    (a ? (r ? "+" : "") : "-") +
    Math.pow(10, Math.max(0, n)).toString().substr(1) +
    s
  );
}
var es =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  Ct = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  vr = {},
  Ve = {};
function g(e, t, r, s) {
  var n = s;
  typeof s == "string" &&
    (n = function () {
      return this[s]();
    }),
    e && (Ve[e] = n),
    t &&
      (Ve[t[0]] = function () {
        return ce(n.apply(this, arguments), t[1], t[2]);
      }),
    r &&
      (Ve[r] = function () {
        return this.localeData().ordinal(n.apply(this, arguments), e);
      });
}
function Ni(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Ri(e) {
  var t = e.match(es),
    r,
    s;
  for (r = 0, s = t.length; r < s; r++)
    Ve[t[r]] ? (t[r] = Ve[t[r]]) : (t[r] = Ni(t[r]));
  return function (n) {
    var a = "",
      i;
    for (i = 0; i < s; i++) a += fe(t[i]) ? t[i].call(n, e) : t[i];
    return a;
  };
}
function Et(e, t) {
  return e.isValid()
    ? ((t = cn(t, e.localeData())), (vr[t] = vr[t] || Ri(t)), vr[t](e))
    : e.localeData().invalidDate();
}
function cn(e, t) {
  var r = 5;
  function s(n) {
    return t.longDateFormat(n) || n;
  }
  for (Ct.lastIndex = 0; r >= 0 && Ct.test(e); )
    (e = e.replace(Ct, s)), (Ct.lastIndex = 0), (r -= 1);
  return e;
}
var Ti = {
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
        .match(es)
        .map(function (s) {
          return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd"
            ? s.slice(1)
            : s;
        })
        .join("")),
      this._longDateFormat[e]);
}
var Pi = "Invalid date";
function Fi() {
  return this._invalidDate;
}
var Ii = "%d",
  Wi = /\d{1,2}/;
function Ai(e) {
  return this._ordinal.replace("%d", e);
}
var Li = {
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
function ji(e, t, r, s) {
  var n = this._relativeTime[r];
  return fe(n) ? n(e, t, r, s) : n.replace(/%d/i, e);
}
function Ui(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return fe(r) ? r(t) : r.replace(/%s/i, t);
}
var Ts = {
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
function re(e) {
  return typeof e == "string" ? Ts[e] || Ts[e.toLowerCase()] : void 0;
}
function ts(e) {
  var t = {},
    r,
    s;
  for (s in e) M(e, s) && ((r = re(s)), r && (t[r] = e[s]));
  return t;
}
var $i = {
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
function Hi(e) {
  var t = [],
    r;
  for (r in e) M(e, r) && t.push({ unit: r, priority: $i[r] });
  return (
    t.sort(function (s, n) {
      return s.priority - n.priority;
    }),
    t
  );
}
var dn = /\d/,
  q = /\d\d/,
  fn = /\d{3}/,
  rs = /\d{4}/,
  Xt = /[+-]?\d{6}/,
  W = /\d\d?/,
  hn = /\d\d\d\d?/,
  mn = /\d\d\d\d\d\d?/,
  er = /\d{1,3}/,
  ss = /\d{1,4}/,
  tr = /[+-]?\d{1,6}/,
  et = /\d+/,
  rr = /[+-]?\d+/,
  Gi = /Z|[+-]\d\d:?\d\d/gi,
  sr = /Z|[+-]\d\d(?::?\d\d)?/gi,
  zi = /[+-]?\d+(\.\d{1,3})?/,
  kt =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  tt = /^[1-9]\d?/,
  ns = /^([1-9]\d|\d)/,
  Ut;
Ut = {};
function m(e, t, r) {
  Ut[e] = fe(t)
    ? t
    : function (s, n) {
        return s && r ? r : t;
      };
}
function Bi(e, t) {
  return M(Ut, e) ? Ut[e](t._strict, t._locale) : new RegExp(Vi(e));
}
function Vi(e) {
  return ve(
    e
      .replace("\\", "")
      .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, r, s, n, a) {
        return r || s || n || a;
      }),
  );
}
function ve(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Q(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function b(e) {
  var t = +e,
    r = 0;
  return t !== 0 && isFinite(t) && (r = Q(t)), r;
}
var Fr = {};
function T(e, t) {
  var r,
    s = t,
    n;
  for (
    typeof e == "string" && (e = [e]),
      Se(t) &&
        (s = function (a, i) {
          i[t] = b(a);
        }),
      n = e.length,
      r = 0;
    r < n;
    r++
  )
    Fr[e[r]] = s;
}
function bt(e, t) {
  T(e, function (r, s, n, a) {
    (n._w = n._w || {}), t(r, n._w, n, a);
  });
}
function Zi(e, t, r) {
  t != null && M(Fr, e) && Fr[e](t, r._a, r, e);
}
function nr(e) {
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
}
var V = 0,
  ge = 1,
  ue = 2,
  G = 3,
  se = 4,
  _e = 5,
  Pe = 6,
  Ji = 7,
  qi = 8;
g("Y", 0, 0, function () {
  var e = this.year();
  return e <= 9999 ? ce(e, 4) : "+" + e;
});
g(0, ["YY", 2], 0, function () {
  return this.year() % 100;
});
g(0, ["YYYY", 4], 0, "year");
g(0, ["YYYYY", 5], 0, "year");
g(0, ["YYYYYY", 6, !0], 0, "year");
m("Y", rr);
m("YY", W, q);
m("YYYY", ss, rs);
m("YYYYY", tr, Xt);
m("YYYYYY", tr, Xt);
T(["YYYYY", "YYYYYY"], V);
T("YYYY", function (e, t) {
  t[V] = e.length === 2 ? h.parseTwoDigitYear(e) : b(e);
});
T("YY", function (e, t) {
  t[V] = h.parseTwoDigitYear(e);
});
T("Y", function (e, t) {
  t[V] = parseInt(e, 10);
});
function dt(e) {
  return nr(e) ? 366 : 365;
}
h.parseTwoDigitYear = function (e) {
  return b(e) + (b(e) > 68 ? 1900 : 2e3);
};
var pn = rt("FullYear", !0);
function Qi() {
  return nr(this.year());
}
function rt(e, t) {
  return function (r) {
    return r != null
      ? (yn(this, e, r), h.updateOffset(this, t), this)
      : ht(this, e);
  };
}
function ht(e, t) {
  if (!e.isValid()) return NaN;
  var r = e._d,
    s = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return s ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return s ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return s ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return s ? r.getUTCHours() : r.getHours();
    case "Date":
      return s ? r.getUTCDate() : r.getDate();
    case "Day":
      return s ? r.getUTCDay() : r.getDay();
    case "Month":
      return s ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return s ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function yn(e, t, r) {
  var s, n, a, i, o;
  if (!(!e.isValid() || isNaN(r))) {
    switch (((s = e._d), (n = e._isUTC), t)) {
      case "Milliseconds":
        return void (n ? s.setUTCMilliseconds(r) : s.setMilliseconds(r));
      case "Seconds":
        return void (n ? s.setUTCSeconds(r) : s.setSeconds(r));
      case "Minutes":
        return void (n ? s.setUTCMinutes(r) : s.setMinutes(r));
      case "Hours":
        return void (n ? s.setUTCHours(r) : s.setHours(r));
      case "Date":
        return void (n ? s.setUTCDate(r) : s.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    (a = r),
      (i = e.month()),
      (o = e.date()),
      (o = o === 29 && i === 1 && !nr(a) ? 28 : o),
      n ? s.setUTCFullYear(a, i, o) : s.setFullYear(a, i, o);
  }
}
function Ki(e) {
  return (e = re(e)), fe(this[e]) ? this[e]() : this;
}
function Xi(e, t) {
  if (typeof e == "object") {
    e = ts(e);
    var r = Hi(e),
      s,
      n = r.length;
    for (s = 0; s < n; s++) this[r[s].unit](e[r[s].unit]);
  } else if (((e = re(e)), fe(this[e]))) return this[e](t);
  return this;
}
function eo(e, t) {
  return ((e % t) + t) % t;
}
var U;
Array.prototype.indexOf
  ? (U = Array.prototype.indexOf)
  : (U = function (e) {
      var t;
      for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    });
function as(e, t) {
  if (isNaN(e) || isNaN(t)) return NaN;
  var r = eo(t, 12);
  return (e += (t - r) / 12), r === 1 ? (nr(e) ? 29 : 28) : 31 - ((r % 7) % 2);
}
g("M", ["MM", 2], "Mo", function () {
  return this.month() + 1;
});
g("MMM", 0, 0, function (e) {
  return this.localeData().monthsShort(this, e);
});
g("MMMM", 0, 0, function (e) {
  return this.localeData().months(this, e);
});
m("M", W, tt);
m("MM", W, q);
m("MMM", function (e, t) {
  return t.monthsShortRegex(e);
});
m("MMMM", function (e, t) {
  return t.monthsRegex(e);
});
T(["M", "MM"], function (e, t) {
  t[ge] = b(e) - 1;
});
T(["MMM", "MMMM"], function (e, t, r, s) {
  var n = r._locale.monthsParse(e, s, r._strict);
  n != null ? (t[ge] = n) : (v(r).invalidMonth = e);
});
var to =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_",
    ),
  gn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  _n = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  ro = kt,
  so = kt;
function no(e, t) {
  return e
    ? ae(this._months)
      ? this._months[e.month()]
      : this._months[
          (this._months.isFormat || _n).test(t) ? "format" : "standalone"
        ][e.month()]
    : ae(this._months)
      ? this._months
      : this._months.standalone;
}
function ao(e, t) {
  return e
    ? ae(this._monthsShort)
      ? this._monthsShort[e.month()]
      : this._monthsShort[_n.test(t) ? "format" : "standalone"][e.month()]
    : ae(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone;
}
function io(e, t, r) {
  var s,
    n,
    a,
    i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (
      this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = [],
        s = 0;
      s < 12;
      ++s
    )
      (a = de([2e3, s])),
        (this._shortMonthsParse[s] = this.monthsShort(
          a,
          "",
        ).toLocaleLowerCase()),
        (this._longMonthsParse[s] = this.months(a, "").toLocaleLowerCase());
  return r
    ? t === "MMM"
      ? ((n = U.call(this._shortMonthsParse, i)), n !== -1 ? n : null)
      : ((n = U.call(this._longMonthsParse, i)), n !== -1 ? n : null)
    : t === "MMM"
      ? ((n = U.call(this._shortMonthsParse, i)),
        n !== -1
          ? n
          : ((n = U.call(this._longMonthsParse, i)), n !== -1 ? n : null))
      : ((n = U.call(this._longMonthsParse, i)),
        n !== -1
          ? n
          : ((n = U.call(this._shortMonthsParse, i)), n !== -1 ? n : null));
}
function oo(e, t, r) {
  var s, n, a;
  if (this._monthsParseExact) return io.call(this, e, t, r);
  for (
    this._monthsParse ||
      ((this._monthsParse = []),
      (this._longMonthsParse = []),
      (this._shortMonthsParse = [])),
      s = 0;
    s < 12;
    s++
  ) {
    if (
      ((n = de([2e3, s])),
      r &&
        !this._longMonthsParse[s] &&
        ((this._longMonthsParse[s] = new RegExp(
          "^" + this.months(n, "").replace(".", "") + "$",
          "i",
        )),
        (this._shortMonthsParse[s] = new RegExp(
          "^" + this.monthsShort(n, "").replace(".", "") + "$",
          "i",
        ))),
      !r &&
        !this._monthsParse[s] &&
        ((a = "^" + this.months(n, "") + "|^" + this.monthsShort(n, "")),
        (this._monthsParse[s] = new RegExp(a.replace(".", ""), "i"))),
      r && t === "MMMM" && this._longMonthsParse[s].test(e))
    )
      return s;
    if (r && t === "MMM" && this._shortMonthsParse[s].test(e)) return s;
    if (!r && this._monthsParse[s].test(e)) return s;
  }
}
function vn(e, t) {
  if (!e.isValid()) return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t)) t = b(t);
    else if (((t = e.localeData().monthsParse(t)), !Se(t))) return e;
  }
  var r = t,
    s = e.date();
  return (
    (s = s < 29 ? s : Math.min(s, as(e.year(), r))),
    e._isUTC ? e._d.setUTCMonth(r, s) : e._d.setMonth(r, s),
    e
  );
}
function wn(e) {
  return e != null
    ? (vn(this, e), h.updateOffset(this, !0), this)
    : ht(this, "Month");
}
function lo() {
  return as(this.year(), this.month());
}
function uo(e) {
  return this._monthsParseExact
    ? (M(this, "_monthsRegex") || Sn.call(this),
      e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    : (M(this, "_monthsShortRegex") || (this._monthsShortRegex = ro),
      this._monthsShortStrictRegex && e
        ? this._monthsShortStrictRegex
        : this._monthsShortRegex);
}
function co(e) {
  return this._monthsParseExact
    ? (M(this, "_monthsRegex") || Sn.call(this),
      e ? this._monthsStrictRegex : this._monthsRegex)
    : (M(this, "_monthsRegex") || (this._monthsRegex = so),
      this._monthsStrictRegex && e
        ? this._monthsStrictRegex
        : this._monthsRegex);
}
function Sn() {
  function e(l, u) {
    return u.length - l.length;
  }
  var t = [],
    r = [],
    s = [],
    n,
    a,
    i,
    o;
  for (n = 0; n < 12; n++)
    (a = de([2e3, n])),
      (i = ve(this.monthsShort(a, ""))),
      (o = ve(this.months(a, ""))),
      t.push(i),
      r.push(o),
      s.push(o),
      s.push(i);
  t.sort(e),
    r.sort(e),
    s.sort(e),
    (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
    (this._monthsShortRegex = this._monthsRegex),
    (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
    (this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function fo(e, t, r, s, n, a, i) {
  var o;
  return (
    e < 100 && e >= 0
      ? ((o = new Date(e + 400, t, r, s, n, a, i)),
        isFinite(o.getFullYear()) && o.setFullYear(e))
      : (o = new Date(e, t, r, s, n, a, i)),
    o
  );
}
function mt(e) {
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
function $t(e, t, r) {
  var s = 7 + t - r,
    n = (7 + mt(e, 0, s).getUTCDay() - t) % 7;
  return -n + s - 1;
}
function kn(e, t, r, s, n) {
  var a = (7 + r - s) % 7,
    i = $t(e, s, n),
    o = 1 + 7 * (t - 1) + a + i,
    l,
    u;
  return (
    o <= 0
      ? ((l = e - 1), (u = dt(l) + o))
      : o > dt(e)
        ? ((l = e + 1), (u = o - dt(e)))
        : ((l = e), (u = o)),
    { year: l, dayOfYear: u }
  );
}
function pt(e, t, r) {
  var s = $t(e.year(), t, r),
    n = Math.floor((e.dayOfYear() - s - 1) / 7) + 1,
    a,
    i;
  return (
    n < 1
      ? ((i = e.year() - 1), (a = n + we(i, t, r)))
      : n > we(e.year(), t, r)
        ? ((a = n - we(e.year(), t, r)), (i = e.year() + 1))
        : ((i = e.year()), (a = n)),
    { week: a, year: i }
  );
}
function we(e, t, r) {
  var s = $t(e, t, r),
    n = $t(e + 1, t, r);
  return (dt(e) - s + n) / 7;
}
g("w", ["ww", 2], "wo", "week");
g("W", ["WW", 2], "Wo", "isoWeek");
m("w", W, tt);
m("ww", W, q);
m("W", W, tt);
m("WW", W, q);
bt(["w", "ww", "W", "WW"], function (e, t, r, s) {
  t[s.substr(0, 1)] = b(e);
});
function ho(e) {
  return pt(e, this._week.dow, this._week.doy).week;
}
var mo = { dow: 0, doy: 6 };
function po() {
  return this._week.dow;
}
function yo() {
  return this._week.doy;
}
function go(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function _o(e) {
  var t = pt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
g("d", 0, "do", "day");
g("dd", 0, 0, function (e) {
  return this.localeData().weekdaysMin(this, e);
});
g("ddd", 0, 0, function (e) {
  return this.localeData().weekdaysShort(this, e);
});
g("dddd", 0, 0, function (e) {
  return this.localeData().weekdays(this, e);
});
g("e", 0, 0, "weekday");
g("E", 0, 0, "isoWeekday");
m("d", W);
m("e", W);
m("E", W);
m("dd", function (e, t) {
  return t.weekdaysMinRegex(e);
});
m("ddd", function (e, t) {
  return t.weekdaysShortRegex(e);
});
m("dddd", function (e, t) {
  return t.weekdaysRegex(e);
});
bt(["dd", "ddd", "dddd"], function (e, t, r, s) {
  var n = r._locale.weekdaysParse(e, s, r._strict);
  n != null ? (t.d = n) : (v(r).invalidWeekday = e);
});
bt(["d", "e", "E"], function (e, t, r, s) {
  t[s] = b(e);
});
function vo(e, t) {
  return typeof e != "string"
    ? e
    : isNaN(e)
      ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
      : parseInt(e, 10);
}
function wo(e, t) {
  return typeof e == "string"
    ? t.weekdaysParse(e) % 7 || 7
    : isNaN(e)
      ? null
      : e;
}
function is(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var So = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  bn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  ko = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  bo = kt,
  xo = kt,
  Do = kt;
function Mo(e, t) {
  var r = ae(this._weekdays)
    ? this._weekdays
    : this._weekdays[
        e && e !== !0 && this._weekdays.isFormat.test(t)
          ? "format"
          : "standalone"
      ];
  return e === !0 ? is(r, this._week.dow) : e ? r[e.day()] : r;
}
function Oo(e) {
  return e === !0
    ? is(this._weekdaysShort, this._week.dow)
    : e
      ? this._weekdaysShort[e.day()]
      : this._weekdaysShort;
}
function Yo(e) {
  return e === !0
    ? is(this._weekdaysMin, this._week.dow)
    : e
      ? this._weekdaysMin[e.day()]
      : this._weekdaysMin;
}
function Co(e, t, r) {
  var s,
    n,
    a,
    i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (
      this._weekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._minWeekdaysParse = [],
        s = 0;
      s < 7;
      ++s
    )
      (a = de([2e3, 1]).day(s)),
        (this._minWeekdaysParse[s] = this.weekdaysMin(
          a,
          "",
        ).toLocaleLowerCase()),
        (this._shortWeekdaysParse[s] = this.weekdaysShort(
          a,
          "",
        ).toLocaleLowerCase()),
        (this._weekdaysParse[s] = this.weekdays(a, "").toLocaleLowerCase());
  return r
    ? t === "dddd"
      ? ((n = U.call(this._weekdaysParse, i)), n !== -1 ? n : null)
      : t === "ddd"
        ? ((n = U.call(this._shortWeekdaysParse, i)), n !== -1 ? n : null)
        : ((n = U.call(this._minWeekdaysParse, i)), n !== -1 ? n : null)
    : t === "dddd"
      ? ((n = U.call(this._weekdaysParse, i)),
        n !== -1 || ((n = U.call(this._shortWeekdaysParse, i)), n !== -1)
          ? n
          : ((n = U.call(this._minWeekdaysParse, i)), n !== -1 ? n : null))
      : t === "ddd"
        ? ((n = U.call(this._shortWeekdaysParse, i)),
          n !== -1 || ((n = U.call(this._weekdaysParse, i)), n !== -1)
            ? n
            : ((n = U.call(this._minWeekdaysParse, i)), n !== -1 ? n : null))
        : ((n = U.call(this._minWeekdaysParse, i)),
          n !== -1 || ((n = U.call(this._weekdaysParse, i)), n !== -1)
            ? n
            : ((n = U.call(this._shortWeekdaysParse, i)), n !== -1 ? n : null));
}
function No(e, t, r) {
  var s, n, a;
  if (this._weekdaysParseExact) return Co.call(this, e, t, r);
  for (
    this._weekdaysParse ||
      ((this._weekdaysParse = []),
      (this._minWeekdaysParse = []),
      (this._shortWeekdaysParse = []),
      (this._fullWeekdaysParse = [])),
      s = 0;
    s < 7;
    s++
  ) {
    if (
      ((n = de([2e3, 1]).day(s)),
      r &&
        !this._fullWeekdaysParse[s] &&
        ((this._fullWeekdaysParse[s] = new RegExp(
          "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
          "i",
        )),
        (this._shortWeekdaysParse[s] = new RegExp(
          "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
          "i",
        )),
        (this._minWeekdaysParse[s] = new RegExp(
          "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
          "i",
        ))),
      this._weekdaysParse[s] ||
        ((a =
          "^" +
          this.weekdays(n, "") +
          "|^" +
          this.weekdaysShort(n, "") +
          "|^" +
          this.weekdaysMin(n, "")),
        (this._weekdaysParse[s] = new RegExp(a.replace(".", ""), "i"))),
      r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
    )
      return s;
    if (r && t === "ddd" && this._shortWeekdaysParse[s].test(e)) return s;
    if (r && t === "dd" && this._minWeekdaysParse[s].test(e)) return s;
    if (!r && this._weekdaysParse[s].test(e)) return s;
  }
}
function Ro(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = ht(this, "Day");
  return e != null ? ((e = vo(e, this.localeData())), this.add(e - t, "d")) : t;
}
function To(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Eo(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    var t = wo(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else return this.day() || 7;
}
function Po(e) {
  return this._weekdaysParseExact
    ? (M(this, "_weekdaysRegex") || os.call(this),
      e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    : (M(this, "_weekdaysRegex") || (this._weekdaysRegex = bo),
      this._weekdaysStrictRegex && e
        ? this._weekdaysStrictRegex
        : this._weekdaysRegex);
}
function Fo(e) {
  return this._weekdaysParseExact
    ? (M(this, "_weekdaysRegex") || os.call(this),
      e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    : (M(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = xo),
      this._weekdaysShortStrictRegex && e
        ? this._weekdaysShortStrictRegex
        : this._weekdaysShortRegex);
}
function Io(e) {
  return this._weekdaysParseExact
    ? (M(this, "_weekdaysRegex") || os.call(this),
      e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    : (M(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Do),
      this._weekdaysMinStrictRegex && e
        ? this._weekdaysMinStrictRegex
        : this._weekdaysMinRegex);
}
function os() {
  function e(d, f) {
    return f.length - d.length;
  }
  var t = [],
    r = [],
    s = [],
    n = [],
    a,
    i,
    o,
    l,
    u;
  for (a = 0; a < 7; a++)
    (i = de([2e3, 1]).day(a)),
      (o = ve(this.weekdaysMin(i, ""))),
      (l = ve(this.weekdaysShort(i, ""))),
      (u = ve(this.weekdays(i, ""))),
      t.push(o),
      r.push(l),
      s.push(u),
      n.push(o),
      n.push(l),
      n.push(u);
  t.sort(e),
    r.sort(e),
    s.sort(e),
    n.sort(e),
    (this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i")),
    (this._weekdaysShortRegex = this._weekdaysRegex),
    (this._weekdaysMinRegex = this._weekdaysRegex),
    (this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
    (this._weekdaysShortStrictRegex = new RegExp(
      "^(" + r.join("|") + ")",
      "i",
    )),
    (this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function ls() {
  return this.hours() % 12 || 12;
}
function Wo() {
  return this.hours() || 24;
}
g("H", ["HH", 2], 0, "hour");
g("h", ["hh", 2], 0, ls);
g("k", ["kk", 2], 0, Wo);
g("hmm", 0, 0, function () {
  return "" + ls.apply(this) + ce(this.minutes(), 2);
});
g("hmmss", 0, 0, function () {
  return "" + ls.apply(this) + ce(this.minutes(), 2) + ce(this.seconds(), 2);
});
g("Hmm", 0, 0, function () {
  return "" + this.hours() + ce(this.minutes(), 2);
});
g("Hmmss", 0, 0, function () {
  return "" + this.hours() + ce(this.minutes(), 2) + ce(this.seconds(), 2);
});
function xn(e, t) {
  g(e, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), t);
  });
}
xn("a", !0);
xn("A", !1);
function Dn(e, t) {
  return t._meridiemParse;
}
m("a", Dn);
m("A", Dn);
m("H", W, ns);
m("h", W, tt);
m("k", W, tt);
m("HH", W, q);
m("hh", W, q);
m("kk", W, q);
m("hmm", hn);
m("hmmss", mn);
m("Hmm", hn);
m("Hmmss", mn);
T(["H", "HH"], G);
T(["k", "kk"], function (e, t, r) {
  var s = b(e);
  t[G] = s === 24 ? 0 : s;
});
T(["a", "A"], function (e, t, r) {
  (r._isPm = r._locale.isPM(e)), (r._meridiem = e);
});
T(["h", "hh"], function (e, t, r) {
  (t[G] = b(e)), (v(r).bigHour = !0);
});
T("hmm", function (e, t, r) {
  var s = e.length - 2;
  (t[G] = b(e.substr(0, s))), (t[se] = b(e.substr(s))), (v(r).bigHour = !0);
});
T("hmmss", function (e, t, r) {
  var s = e.length - 4,
    n = e.length - 2;
  (t[G] = b(e.substr(0, s))),
    (t[se] = b(e.substr(s, 2))),
    (t[_e] = b(e.substr(n))),
    (v(r).bigHour = !0);
});
T("Hmm", function (e, t, r) {
  var s = e.length - 2;
  (t[G] = b(e.substr(0, s))), (t[se] = b(e.substr(s)));
});
T("Hmmss", function (e, t, r) {
  var s = e.length - 4,
    n = e.length - 2;
  (t[G] = b(e.substr(0, s))),
    (t[se] = b(e.substr(s, 2))),
    (t[_e] = b(e.substr(n)));
});
function Ao(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Lo = /[ap]\.?m?\.?/i,
  jo = rt("Hours", !0);
function Uo(e, t, r) {
  return e > 11 ? (r ? "pm" : "PM") : r ? "am" : "AM";
}
var Mn = {
    calendar: Yi,
    longDateFormat: Ti,
    invalidDate: Pi,
    ordinal: Ii,
    dayOfMonthOrdinalParse: Wi,
    relativeTime: Li,
    months: to,
    monthsShort: gn,
    week: mo,
    weekdays: So,
    weekdaysMin: ko,
    weekdaysShort: bn,
    meridiemParse: Lo,
  },
  L = {},
  lt = {},
  yt;
function $o(e, t) {
  var r,
    s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1) if (e[r] !== t[r]) return r;
  return s;
}
function Es(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Ho(e) {
  for (var t = 0, r, s, n, a; t < e.length; ) {
    for (
      a = Es(e[t]).split("-"),
        r = a.length,
        s = Es(e[t + 1]),
        s = s ? s.split("-") : null;
      r > 0;

    ) {
      if (((n = ar(a.slice(0, r).join("-"))), n)) return n;
      if (s && s.length >= r && $o(a, s) >= r - 1) break;
      r--;
    }
    t++;
  }
  return yt;
}
function Go(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ar(e) {
  var t = null,
    r;
  if (
    L[e] === void 0 &&
    typeof module < "u" &&
    module &&
    module.exports &&
    Go(e)
  )
    try {
      (t = yt._abbr), (r = require), r("./locale/" + e), Ne(t);
    } catch {
      L[e] = null;
    }
  return L[e];
}
function Ne(e, t) {
  var r;
  return (
    e &&
      (Z(t) ? (r = ke(e)) : (r = us(e, t)),
      r
        ? (yt = r)
        : typeof console < "u" &&
          console.warn &&
          console.warn(
            "Locale " + e + " not found. Did you forget to load it?",
          )),
    yt._abbr
  );
}
function us(e, t) {
  if (t !== null) {
    var r,
      s = Mn;
    if (((t.abbr = e), L[e] != null))
      un(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.",
      ),
        (s = L[e]._config);
    else if (t.parentLocale != null)
      if (L[t.parentLocale] != null) s = L[t.parentLocale]._config;
      else if (((r = ar(t.parentLocale)), r != null)) s = r._config;
      else
        return (
          lt[t.parentLocale] || (lt[t.parentLocale] = []),
          lt[t.parentLocale].push({ name: e, config: t }),
          null
        );
    return (
      (L[e] = new Xr(Er(s, t))),
      lt[e] &&
        lt[e].forEach(function (n) {
          us(n.name, n.config);
        }),
      Ne(e),
      L[e]
    );
  } else return delete L[e], null;
}
function zo(e, t) {
  if (t != null) {
    var r,
      s,
      n = Mn;
    L[e] != null && L[e].parentLocale != null
      ? L[e].set(Er(L[e]._config, t))
      : ((s = ar(e)),
        s != null && (n = s._config),
        (t = Er(n, t)),
        s == null && (t.abbr = e),
        (r = new Xr(t)),
        (r.parentLocale = L[e]),
        (L[e] = r)),
      Ne(e);
  } else
    L[e] != null &&
      (L[e].parentLocale != null
        ? ((L[e] = L[e].parentLocale), e === Ne() && Ne(e))
        : L[e] != null && delete L[e]);
  return L[e];
}
function ke(e) {
  var t;
  if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
    return yt;
  if (!ae(e)) {
    if (((t = ar(e)), t)) return t;
    e = [e];
  }
  return Ho(e);
}
function Bo() {
  return Pr(L);
}
function cs(e) {
  var t,
    r = e._a;
  return (
    r &&
      v(e).overflow === -2 &&
      ((t =
        r[ge] < 0 || r[ge] > 11
          ? ge
          : r[ue] < 1 || r[ue] > as(r[V], r[ge])
            ? ue
            : r[G] < 0 ||
                r[G] > 24 ||
                (r[G] === 24 && (r[se] !== 0 || r[_e] !== 0 || r[Pe] !== 0))
              ? G
              : r[se] < 0 || r[se] > 59
                ? se
                : r[_e] < 0 || r[_e] > 59
                  ? _e
                  : r[Pe] < 0 || r[Pe] > 999
                    ? Pe
                    : -1),
      v(e)._overflowDayOfYear && (t < V || t > ue) && (t = ue),
      v(e)._overflowWeeks && t === -1 && (t = Ji),
      v(e)._overflowWeekday && t === -1 && (t = qi),
      (v(e).overflow = t)),
    e
  );
}
var Vo =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  Zo =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  Jo = /Z|[+-]\d\d(?::?\d\d)?/,
  Nt = [
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
  wr = [
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
  qo = /^\/?Date\((-?\d+)/i,
  Qo =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  Ko = {
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
function On(e) {
  var t,
    r,
    s = e._i,
    n = Vo.exec(s) || Zo.exec(s),
    a,
    i,
    o,
    l,
    u = Nt.length,
    d = wr.length;
  if (n) {
    for (v(e).iso = !0, t = 0, r = u; t < r; t++)
      if (Nt[t][1].exec(n[1])) {
        (i = Nt[t][0]), (a = Nt[t][2] !== !1);
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, r = d; t < r; t++)
        if (wr[t][1].exec(n[3])) {
          o = (n[2] || " ") + wr[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && o != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (Jo.exec(n[4])) l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    (e._f = i + (o || "") + (l || "")), fs(e);
  } else e._isValid = !1;
}
function Xo(e, t, r, s, n, a) {
  var i = [
    el(e),
    gn.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(n, 10),
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function el(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function tl(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .replace(/^\s\s*/, "")
    .replace(/\s\s*$/, "");
}
function rl(e, t, r) {
  if (e) {
    var s = bn.indexOf(e),
      n = new Date(t[0], t[1], t[2]).getDay();
    if (s !== n) return (v(r).weekdayMismatch = !0), (r._isValid = !1), !1;
  }
  return !0;
}
function sl(e, t, r) {
  if (e) return Ko[e];
  if (t) return 0;
  var s = parseInt(r, 10),
    n = s % 100,
    a = (s - n) / 100;
  return a * 60 + n;
}
function Yn(e) {
  var t = Qo.exec(tl(e._i)),
    r;
  if (t) {
    if (((r = Xo(t[4], t[3], t[2], t[5], t[6], t[7])), !rl(t[1], r, e))) return;
    (e._a = r),
      (e._tzm = sl(t[8], t[9], t[10])),
      (e._d = mt.apply(null, e._a)),
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      (v(e).rfc2822 = !0);
  } else e._isValid = !1;
}
function nl(e) {
  var t = qo.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if ((On(e), e._isValid === !1)) delete e._isValid;
  else return;
  if ((Yn(e), e._isValid === !1)) delete e._isValid;
  else return;
  e._strict ? (e._isValid = !1) : h.createFromInputFallback(e);
}
h.createFromInputFallback = te(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  },
);
function He(e, t, r) {
  return e ?? t ?? r;
}
function al(e) {
  var t = new Date(h.now());
  return e._useUTC
    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
    : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ds(e) {
  var t,
    r,
    s = [],
    n,
    a,
    i;
  if (!e._d) {
    for (
      n = al(e),
        e._w && e._a[ue] == null && e._a[ge] == null && il(e),
        e._dayOfYear != null &&
          ((i = He(e._a[V], n[V])),
          (e._dayOfYear > dt(i) || e._dayOfYear === 0) &&
            (v(e)._overflowDayOfYear = !0),
          (r = mt(i, 0, e._dayOfYear)),
          (e._a[ge] = r.getUTCMonth()),
          (e._a[ue] = r.getUTCDate())),
        t = 0;
      t < 3 && e._a[t] == null;
      ++t
    )
      e._a[t] = s[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
    e._a[G] === 24 &&
      e._a[se] === 0 &&
      e._a[_e] === 0 &&
      e._a[Pe] === 0 &&
      ((e._nextDay = !0), (e._a[G] = 0)),
      (e._d = (e._useUTC ? mt : fo).apply(null, s)),
      (a = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
      e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      e._nextDay && (e._a[G] = 24),
      e._w &&
        typeof e._w.d < "u" &&
        e._w.d !== a &&
        (v(e).weekdayMismatch = !0);
  }
}
function il(e) {
  var t, r, s, n, a, i, o, l, u;
  (t = e._w),
    t.GG != null || t.W != null || t.E != null
      ? ((a = 1),
        (i = 4),
        (r = He(t.GG, e._a[V], pt(I(), 1, 4).year)),
        (s = He(t.W, 1)),
        (n = He(t.E, 1)),
        (n < 1 || n > 7) && (l = !0))
      : ((a = e._locale._week.dow),
        (i = e._locale._week.doy),
        (u = pt(I(), a, i)),
        (r = He(t.gg, e._a[V], u.year)),
        (s = He(t.w, u.week)),
        t.d != null
          ? ((n = t.d), (n < 0 || n > 6) && (l = !0))
          : t.e != null
            ? ((n = t.e + a), (t.e < 0 || t.e > 6) && (l = !0))
            : (n = a)),
    s < 1 || s > we(r, a, i)
      ? (v(e)._overflowWeeks = !0)
      : l != null
        ? (v(e)._overflowWeekday = !0)
        : ((o = kn(r, s, n, a, i)),
          (e._a[V] = o.year),
          (e._dayOfYear = o.dayOfYear));
}
h.ISO_8601 = function () {};
h.RFC_2822 = function () {};
function fs(e) {
  if (e._f === h.ISO_8601) {
    On(e);
    return;
  }
  if (e._f === h.RFC_2822) {
    Yn(e);
    return;
  }
  (e._a = []), (v(e).empty = !0);
  var t = "" + e._i,
    r,
    s,
    n,
    a,
    i,
    o = t.length,
    l = 0,
    u,
    d;
  for (n = cn(e._f, e._locale).match(es) || [], d = n.length, r = 0; r < d; r++)
    (a = n[r]),
      (s = (t.match(Bi(a, e)) || [])[0]),
      s &&
        ((i = t.substr(0, t.indexOf(s))),
        i.length > 0 && v(e).unusedInput.push(i),
        (t = t.slice(t.indexOf(s) + s.length)),
        (l += s.length)),
      Ve[a]
        ? (s ? (v(e).empty = !1) : v(e).unusedTokens.push(a), Zi(a, s, e))
        : e._strict && !s && v(e).unusedTokens.push(a);
  (v(e).charsLeftOver = o - l),
    t.length > 0 && v(e).unusedInput.push(t),
    e._a[G] <= 12 &&
      v(e).bigHour === !0 &&
      e._a[G] > 0 &&
      (v(e).bigHour = void 0),
    (v(e).parsedDateParts = e._a.slice(0)),
    (v(e).meridiem = e._meridiem),
    (e._a[G] = ol(e._locale, e._a[G], e._meridiem)),
    (u = v(e).era),
    u !== null && (e._a[V] = e._locale.erasConvertYear(u, e._a[V])),
    ds(e),
    cs(e);
}
function ol(e, t, r) {
  var s;
  return r == null
    ? t
    : e.meridiemHour != null
      ? e.meridiemHour(t, r)
      : (e.isPM != null &&
          ((s = e.isPM(r)),
          s && t < 12 && (t += 12),
          !s && t === 12 && (t = 0)),
        t);
}
function ll(e) {
  var t,
    r,
    s,
    n,
    a,
    i,
    o = !1,
    l = e._f.length;
  if (l === 0) {
    (v(e).invalidFormat = !0), (e._d = new Date(NaN));
    return;
  }
  for (n = 0; n < l; n++)
    (a = 0),
      (i = !1),
      (t = Kr({}, e)),
      e._useUTC != null && (t._useUTC = e._useUTC),
      (t._f = e._f[n]),
      fs(t),
      Qr(t) && (i = !0),
      (a += v(t).charsLeftOver),
      (a += v(t).unusedTokens.length * 10),
      (v(t).score = a),
      o
        ? a < s && ((s = a), (r = t))
        : (s == null || a < s || i) && ((s = a), (r = t), i && (o = !0));
  Ye(e, r || t);
}
function ul(e) {
  if (!e._d) {
    var t = ts(e._i),
      r = t.day === void 0 ? t.date : t.day;
    (e._a = on(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function (s) {
        return s && parseInt(s, 10);
      },
    )),
      ds(e);
  }
}
function cl(e) {
  var t = new St(cs(Cn(e)));
  return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
}
function Cn(e) {
  var t = e._i,
    r = e._f;
  return (
    (e._locale = e._locale || ke(e._l)),
    t === null || (r === void 0 && t === "")
      ? Kt({ nullInput: !0 })
      : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
        ie(t)
          ? new St(cs(t))
          : (wt(t) ? (e._d = t) : ae(r) ? ll(e) : r ? fs(e) : dl(e),
            Qr(e) || (e._d = null),
            e))
  );
}
function dl(e) {
  var t = e._i;
  Z(t)
    ? (e._d = new Date(h.now()))
    : wt(t)
      ? (e._d = new Date(t.valueOf()))
      : typeof t == "string"
        ? nl(e)
        : ae(t)
          ? ((e._a = on(t.slice(0), function (r) {
              return parseInt(r, 10);
            })),
            ds(e))
          : Ie(t)
            ? ul(e)
            : Se(t)
              ? (e._d = new Date(t))
              : h.createFromInputFallback(e);
}
function Nn(e, t, r, s, n) {
  var a = {};
  return (
    (t === !0 || t === !1) && ((s = t), (t = void 0)),
    (r === !0 || r === !1) && ((s = r), (r = void 0)),
    ((Ie(e) && qr(e)) || (ae(e) && e.length === 0)) && (e = void 0),
    (a._isAMomentObject = !0),
    (a._useUTC = a._isUTC = n),
    (a._l = r),
    (a._i = e),
    (a._f = t),
    (a._strict = s),
    cl(a)
  );
}
function I(e, t, r, s) {
  return Nn(e, t, r, s, !1);
}
var fl = te(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = I.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : Kt();
    },
  ),
  hl = te(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = I.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e > this ? this : e) : Kt();
    },
  );
function Rn(e, t) {
  var r, s;
  if ((t.length === 1 && ae(t[0]) && (t = t[0]), !t.length)) return I();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function ml() {
  var e = [].slice.call(arguments, 0);
  return Rn("isBefore", e);
}
function pl() {
  var e = [].slice.call(arguments, 0);
  return Rn("isAfter", e);
}
var yl = function () {
    return Date.now ? Date.now() : +new Date();
  },
  ut = [
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
function gl(e) {
  var t,
    r = !1,
    s,
    n = ut.length;
  for (t in e)
    if (M(e, t) && !(U.call(ut, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < n; ++s)
    if (e[ut[s]]) {
      if (r) return !1;
      parseFloat(e[ut[s]]) !== b(e[ut[s]]) && (r = !0);
    }
  return !0;
}
function _l() {
  return this._isValid;
}
function vl() {
  return oe(NaN);
}
function ir(e) {
  var t = ts(e),
    r = t.year || 0,
    s = t.quarter || 0,
    n = t.month || 0,
    a = t.week || t.isoWeek || 0,
    i = t.day || 0,
    o = t.hour || 0,
    l = t.minute || 0,
    u = t.second || 0,
    d = t.millisecond || 0;
  (this._isValid = gl(t)),
    (this._milliseconds = +d + u * 1e3 + l * 6e4 + o * 1e3 * 60 * 60),
    (this._days = +i + a * 7),
    (this._months = +n + s * 3 + r * 12),
    (this._data = {}),
    (this._locale = ke()),
    this._bubble();
}
function Pt(e) {
  return e instanceof ir;
}
function Ir(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function wl(e, t, r) {
  var s = Math.min(e.length, t.length),
    n = Math.abs(e.length - t.length),
    a = 0,
    i;
  for (i = 0; i < s; i++) b(e[i]) !== b(t[i]) && a++;
  return a + n;
}
function Tn(e, t) {
  g(e, 0, 0, function () {
    var r = this.utcOffset(),
      s = "+";
    return (
      r < 0 && ((r = -r), (s = "-")),
      s + ce(~~(r / 60), 2) + t + ce(~~r % 60, 2)
    );
  });
}
Tn("Z", ":");
Tn("ZZ", "");
m("Z", sr);
m("ZZ", sr);
T(["Z", "ZZ"], function (e, t, r) {
  (r._useUTC = !0), (r._tzm = hs(sr, e));
});
var Sl = /([\+\-]|\d\d)/gi;
function hs(e, t) {
  var r = (t || "").match(e),
    s,
    n,
    a;
  return r === null
    ? null
    : ((s = r[r.length - 1] || []),
      (n = (s + "").match(Sl) || ["-", 0, 0]),
      (a = +(n[1] * 60) + b(n[2])),
      a === 0 ? 0 : n[0] === "+" ? a : -a);
}
function ms(e, t) {
  var r, s;
  return t._isUTC
    ? ((r = t.clone()),
      (s = (ie(e) || wt(e) ? e.valueOf() : I(e).valueOf()) - r.valueOf()),
      r._d.setTime(r._d.valueOf() + s),
      h.updateOffset(r, !1),
      r)
    : I(e).local();
}
function Wr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
h.updateOffset = function () {};
function kl(e, t, r) {
  var s = this._offset || 0,
    n;
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (((e = hs(sr, e)), e === null)) return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return (
      !this._isUTC && t && (n = Wr(this)),
      (this._offset = e),
      (this._isUTC = !0),
      n != null && this.add(n, "m"),
      s !== e &&
        (!t || this._changeInProgress
          ? Fn(this, oe(e - s, "m"), 1, !1)
          : this._changeInProgress ||
            ((this._changeInProgress = !0),
            h.updateOffset(this, !0),
            (this._changeInProgress = null))),
      this
    );
  } else return this._isUTC ? s : Wr(this);
}
function bl(e, t) {
  return e != null
    ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
    : -this.utcOffset();
}
function xl(e) {
  return this.utcOffset(0, e);
}
function Dl(e) {
  return (
    this._isUTC &&
      (this.utcOffset(0, e),
      (this._isUTC = !1),
      e && this.subtract(Wr(this), "m")),
    this
  );
}
function Ml() {
  if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = hs(Gi, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ol(e) {
  return this.isValid()
    ? ((e = e ? I(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
    : !1;
}
function Yl() {
  return (
    this.utcOffset() > this.clone().month(0).utcOffset() ||
    this.utcOffset() > this.clone().month(5).utcOffset()
  );
}
function Cl() {
  if (!Z(this._isDSTShifted)) return this._isDSTShifted;
  var e = {},
    t;
  return (
    Kr(e, this),
    (e = Cn(e)),
    e._a
      ? ((t = e._isUTC ? de(e._a) : I(e._a)),
        (this._isDSTShifted = this.isValid() && wl(e._a, t.toArray()) > 0))
      : (this._isDSTShifted = !1),
    this._isDSTShifted
  );
}
function Nl() {
  return this.isValid() ? !this._isUTC : !1;
}
function Rl() {
  return this.isValid() ? this._isUTC : !1;
}
function En() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Tl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  El =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function oe(e, t) {
  var r = e,
    s = null,
    n,
    a,
    i;
  return (
    Pt(e)
      ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
      : Se(e) || !isNaN(+e)
        ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
        : (s = Tl.exec(e))
          ? ((n = s[1] === "-" ? -1 : 1),
            (r = {
              y: 0,
              d: b(s[ue]) * n,
              h: b(s[G]) * n,
              m: b(s[se]) * n,
              s: b(s[_e]) * n,
              ms: b(Ir(s[Pe] * 1e3)) * n,
            }))
          : (s = El.exec(e))
            ? ((n = s[1] === "-" ? -1 : 1),
              (r = {
                y: Ee(s[2], n),
                M: Ee(s[3], n),
                w: Ee(s[4], n),
                d: Ee(s[5], n),
                h: Ee(s[6], n),
                m: Ee(s[7], n),
                s: Ee(s[8], n),
              }))
            : r == null
              ? (r = {})
              : typeof r == "object" &&
                ("from" in r || "to" in r) &&
                ((i = Pl(I(r.from), I(r.to))),
                (r = {}),
                (r.ms = i.milliseconds),
                (r.M = i.months)),
    (a = new ir(r)),
    Pt(e) && M(e, "_locale") && (a._locale = e._locale),
    Pt(e) && M(e, "_isValid") && (a._isValid = e._isValid),
    a
  );
}
oe.fn = ir.prototype;
oe.invalid = vl;
function Ee(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Ps(e, t) {
  var r = {};
  return (
    (r.months = t.month() - e.month() + (t.year() - e.year()) * 12),
    e.clone().add(r.months, "M").isAfter(t) && --r.months,
    (r.milliseconds = +t - +e.clone().add(r.months, "M")),
    r
  );
}
function Pl(e, t) {
  var r;
  return e.isValid() && t.isValid()
    ? ((t = ms(t, e)),
      e.isBefore(t)
        ? (r = Ps(e, t))
        : ((r = Ps(t, e)),
          (r.milliseconds = -r.milliseconds),
          (r.months = -r.months)),
      r)
    : { milliseconds: 0, months: 0 };
}
function Pn(e, t) {
  return function (r, s) {
    var n, a;
    return (
      s !== null &&
        !isNaN(+s) &&
        (un(
          t,
          "moment()." +
            t +
            "(period, number) is deprecated. Please use moment()." +
            t +
            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.",
        ),
        (a = r),
        (r = s),
        (s = a)),
      (n = oe(r, s)),
      Fn(this, n, e),
      this
    );
  };
}
function Fn(e, t, r, s) {
  var n = t._milliseconds,
    a = Ir(t._days),
    i = Ir(t._months);
  e.isValid() &&
    ((s = s ?? !0),
    i && vn(e, ht(e, "Month") + i * r),
    a && yn(e, "Date", ht(e, "Date") + a * r),
    n && e._d.setTime(e._d.valueOf() + n * r),
    s && h.updateOffset(e, a || i));
}
var Fl = Pn(1, "add"),
  Il = Pn(-1, "subtract");
function In(e) {
  return typeof e == "string" || e instanceof String;
}
function Wl(e) {
  return (
    ie(e) ||
    wt(e) ||
    In(e) ||
    Se(e) ||
    Ll(e) ||
    Al(e) ||
    e === null ||
    e === void 0
  );
}
function Al(e) {
  var t = Ie(e) && !qr(e),
    r = !1,
    s = [
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
    n,
    a,
    i = s.length;
  for (n = 0; n < i; n += 1) (a = s[n]), (r = r || M(e, a));
  return t && r;
}
function Ll(e) {
  var t = ae(e),
    r = !1;
  return (
    t &&
      (r =
        e.filter(function (s) {
          return !Se(s) && In(e);
        }).length === 0),
    t && r
  );
}
function jl(e) {
  var t = Ie(e) && !qr(e),
    r = !1,
    s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
    n,
    a;
  for (n = 0; n < s.length; n += 1) (a = s[n]), (r = r || M(e, a));
  return t && r;
}
function Ul(e, t) {
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
function $l(e, t) {
  arguments.length === 1 &&
    (arguments[0]
      ? Wl(arguments[0])
        ? ((e = arguments[0]), (t = void 0))
        : jl(arguments[0]) && ((t = arguments[0]), (e = void 0))
      : ((e = void 0), (t = void 0)));
  var r = e || I(),
    s = ms(r, this).startOf("day"),
    n = h.calendarFormat(this, s) || "sameElse",
    a = t && (fe(t[n]) ? t[n].call(this, r) : t[n]);
  return this.format(a || this.localeData().calendar(n, this, I(r)));
}
function Hl() {
  return new St(this);
}
function Gl(e, t) {
  var r = ie(e) ? e : I(e);
  return this.isValid() && r.isValid()
    ? ((t = re(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() > r.valueOf()
        : r.valueOf() < this.clone().startOf(t).valueOf())
    : !1;
}
function zl(e, t) {
  var r = ie(e) ? e : I(e);
  return this.isValid() && r.isValid()
    ? ((t = re(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() < r.valueOf()
        : this.clone().endOf(t).valueOf() < r.valueOf())
    : !1;
}
function Bl(e, t, r, s) {
  var n = ie(e) ? e : I(e),
    a = ie(t) ? t : I(t);
  return this.isValid() && n.isValid() && a.isValid()
    ? ((s = s || "()"),
      (s[0] === "(" ? this.isAfter(n, r) : !this.isBefore(n, r)) &&
        (s[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r)))
    : !1;
}
function Vl(e, t) {
  var r = ie(e) ? e : I(e),
    s;
  return this.isValid() && r.isValid()
    ? ((t = re(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() === r.valueOf()
        : ((s = r.valueOf()),
          this.clone().startOf(t).valueOf() <= s &&
            s <= this.clone().endOf(t).valueOf()))
    : !1;
}
function Zl(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Jl(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function ql(e, t, r) {
  var s, n, a;
  if (!this.isValid()) return NaN;
  if (((s = ms(e, this)), !s.isValid())) return NaN;
  switch (((n = (s.utcOffset() - this.utcOffset()) * 6e4), (t = re(t)), t)) {
    case "year":
      a = Ft(this, s) / 12;
      break;
    case "month":
      a = Ft(this, s);
      break;
    case "quarter":
      a = Ft(this, s) / 3;
      break;
    case "second":
      a = (this - s) / 1e3;
      break;
    case "minute":
      a = (this - s) / 6e4;
      break;
    case "hour":
      a = (this - s) / 36e5;
      break;
    case "day":
      a = (this - s - n) / 864e5;
      break;
    case "week":
      a = (this - s - n) / 6048e5;
      break;
    default:
      a = this - s;
  }
  return r ? a : Q(a);
}
function Ft(e, t) {
  if (e.date() < t.date()) return -Ft(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
    s = e.clone().add(r, "months"),
    n,
    a;
  return (
    t - s < 0
      ? ((n = e.clone().add(r - 1, "months")), (a = (t - s) / (s - n)))
      : ((n = e.clone().add(r + 1, "months")), (a = (t - s) / (n - s))),
    -(r + a) || 0
  );
}
h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Ql() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Kl(e) {
  if (!this.isValid()) return null;
  var t = e !== !0,
    r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999
    ? Et(
        r,
        t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ",
      )
    : fe(Date.prototype.toISOString)
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
function Xl() {
  if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
  var e = "moment",
    t = "",
    r,
    s,
    n,
    a;
  return (
    this.isLocal() ||
      ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
      (t = "Z")),
    (r = "[" + e + '("]'),
    (s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
    (n = "-MM-DD[T]HH:mm:ss.SSS"),
    (a = t + '[")]'),
    this.format(r + s + n + a)
  );
}
function eu(e) {
  e || (e = this.isUtc() ? h.defaultFormatUtc : h.defaultFormat);
  var t = Et(this, e);
  return this.localeData().postformat(t);
}
function tu(e, t) {
  return this.isValid() && ((ie(e) && e.isValid()) || I(e).isValid())
    ? oe({ to: this, from: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function ru(e) {
  return this.from(I(), e);
}
function su(e, t) {
  return this.isValid() && ((ie(e) && e.isValid()) || I(e).isValid())
    ? oe({ from: this, to: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function nu(e) {
  return this.to(I(), e);
}
function Wn(e) {
  var t;
  return e === void 0
    ? this._locale._abbr
    : ((t = ke(e)), t != null && (this._locale = t), this);
}
var An = te(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function (e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  },
);
function Ln() {
  return this._locale;
}
var Ht = 1e3,
  Ze = 60 * Ht,
  Gt = 60 * Ze,
  jn = (365 * 400 + 97) * 24 * Gt;
function Je(e, t) {
  return ((e % t) + t) % t;
}
function Un(e, t, r) {
  return e < 100 && e >= 0
    ? new Date(e + 400, t, r) - jn
    : new Date(e, t, r).valueOf();
}
function $n(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - jn : Date.UTC(e, t, r);
}
function au(e) {
  var t, r;
  if (((e = re(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((r = this._isUTC ? $n : Un), e)) {
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
        (t -= Je(t + (this._isUTC ? 0 : this.utcOffset() * Ze), Gt));
      break;
    case "minute":
      (t = this._d.valueOf()), (t -= Je(t, Ze));
      break;
    case "second":
      (t = this._d.valueOf()), (t -= Je(t, Ht));
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function iu(e) {
  var t, r;
  if (((e = re(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((r = this._isUTC ? $n : Un), e)) {
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
        (t += Gt - Je(t + (this._isUTC ? 0 : this.utcOffset() * Ze), Gt) - 1);
      break;
    case "minute":
      (t = this._d.valueOf()), (t += Ze - Je(t, Ze) - 1);
      break;
    case "second":
      (t = this._d.valueOf()), (t += Ht - Je(t, Ht) - 1);
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function ou() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function lu() {
  return Math.floor(this.valueOf() / 1e3);
}
function uu() {
  return new Date(this.valueOf());
}
function cu() {
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
function du() {
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
function fu() {
  return this.isValid() ? this.toISOString() : null;
}
function hu() {
  return Qr(this);
}
function mu() {
  return Ye({}, v(this));
}
function pu() {
  return v(this).overflow;
}
function yu() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict,
  };
}
g("N", 0, 0, "eraAbbr");
g("NN", 0, 0, "eraAbbr");
g("NNN", 0, 0, "eraAbbr");
g("NNNN", 0, 0, "eraName");
g("NNNNN", 0, 0, "eraNarrow");
g("y", ["y", 1], "yo", "eraYear");
g("y", ["yy", 2], 0, "eraYear");
g("y", ["yyy", 3], 0, "eraYear");
g("y", ["yyyy", 4], 0, "eraYear");
m("N", ps);
m("NN", ps);
m("NNN", ps);
m("NNNN", Ou);
m("NNNNN", Yu);
T(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, r, s) {
  var n = r._locale.erasParse(e, s, r._strict);
  n ? (v(r).era = n) : (v(r).invalidEra = e);
});
m("y", et);
m("yy", et);
m("yyy", et);
m("yyyy", et);
m("yo", Cu);
T(["y", "yy", "yyy", "yyyy"], V);
T(["yo"], function (e, t, r, s) {
  var n;
  r._locale._eraYearOrdinalRegex &&
    (n = e.match(r._locale._eraYearOrdinalRegex)),
    r._locale.eraYearOrdinalParse
      ? (t[V] = r._locale.eraYearOrdinalParse(e, n))
      : (t[V] = parseInt(e, 10));
});
function gu(e, t) {
  var r,
    s,
    n,
    a = this._eras || ke("en")._eras;
  for (r = 0, s = a.length; r < s; ++r) {
    switch (typeof a[r].since) {
      case "string":
        (n = h(a[r].since).startOf("day")), (a[r].since = n.valueOf());
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        (n = h(a[r].until).startOf("day").valueOf()),
          (a[r].until = n.valueOf());
        break;
    }
  }
  return a;
}
function _u(e, t, r) {
  var s,
    n,
    a = this.eras(),
    i,
    o,
    l;
  for (e = e.toUpperCase(), s = 0, n = a.length; s < n; ++s)
    if (
      ((i = a[s].name.toUpperCase()),
      (o = a[s].abbr.toUpperCase()),
      (l = a[s].narrow.toUpperCase()),
      r)
    )
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e) return a[s];
          break;
        case "NNNN":
          if (i === e) return a[s];
          break;
        case "NNNNN":
          if (l === e) return a[s];
          break;
      }
    else if ([i, o, l].indexOf(e) >= 0) return a[s];
}
function vu(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0
    ? h(e.since).year()
    : h(e.since).year() + (t - e.offset) * r;
}
function wu() {
  var e,
    t,
    r,
    s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (s[e].since <= r && r <= s[e].until) ||
        (s[e].until <= r && r <= s[e].since))
    )
      return s[e].name;
  return "";
}
function Su() {
  var e,
    t,
    r,
    s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (s[e].since <= r && r <= s[e].until) ||
        (s[e].until <= r && r <= s[e].since))
    )
      return s[e].narrow;
  return "";
}
function ku() {
  var e,
    t,
    r,
    s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (
      ((r = this.clone().startOf("day").valueOf()),
      (s[e].since <= r && r <= s[e].until) ||
        (s[e].until <= r && r <= s[e].since))
    )
      return s[e].abbr;
  return "";
}
function bu() {
  var e,
    t,
    r,
    s,
    n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (
      ((r = n[e].since <= n[e].until ? 1 : -1),
      (s = this.clone().startOf("day").valueOf()),
      (n[e].since <= s && s <= n[e].until) ||
        (n[e].until <= s && s <= n[e].since))
    )
      return (this.year() - h(n[e].since).year()) * r + n[e].offset;
  return this.year();
}
function xu(e) {
  return (
    M(this, "_erasNameRegex") || ys.call(this),
    e ? this._erasNameRegex : this._erasRegex
  );
}
function Du(e) {
  return (
    M(this, "_erasAbbrRegex") || ys.call(this),
    e ? this._erasAbbrRegex : this._erasRegex
  );
}
function Mu(e) {
  return (
    M(this, "_erasNarrowRegex") || ys.call(this),
    e ? this._erasNarrowRegex : this._erasRegex
  );
}
function ps(e, t) {
  return t.erasAbbrRegex(e);
}
function Ou(e, t) {
  return t.erasNameRegex(e);
}
function Yu(e, t) {
  return t.erasNarrowRegex(e);
}
function Cu(e, t) {
  return t._eraYearOrdinalRegex || et;
}
function ys() {
  var e = [],
    t = [],
    r = [],
    s = [],
    n,
    a,
    i,
    o,
    l,
    u = this.eras();
  for (n = 0, a = u.length; n < a; ++n)
    (i = ve(u[n].name)),
      (o = ve(u[n].abbr)),
      (l = ve(u[n].narrow)),
      t.push(i),
      e.push(o),
      r.push(l),
      s.push(i),
      s.push(o),
      s.push(l);
  (this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
    (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
    (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
    (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
}
g(0, ["gg", 2], 0, function () {
  return this.weekYear() % 100;
});
g(0, ["GG", 2], 0, function () {
  return this.isoWeekYear() % 100;
});
function or(e, t) {
  g(0, [e, e.length], 0, t);
}
or("gggg", "weekYear");
or("ggggg", "weekYear");
or("GGGG", "isoWeekYear");
or("GGGGG", "isoWeekYear");
m("G", rr);
m("g", rr);
m("GG", W, q);
m("gg", W, q);
m("GGGG", ss, rs);
m("gggg", ss, rs);
m("GGGGG", tr, Xt);
m("ggggg", tr, Xt);
bt(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, r, s) {
  t[s.substr(0, 2)] = b(e);
});
bt(["gg", "GG"], function (e, t, r, s) {
  t[s] = h.parseTwoDigitYear(e);
});
function Nu(e) {
  return Hn.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy,
  );
}
function Ru(e) {
  return Hn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function Tu() {
  return we(this.year(), 1, 4);
}
function Eu() {
  return we(this.isoWeekYear(), 1, 4);
}
function Pu() {
  var e = this.localeData()._week;
  return we(this.year(), e.dow, e.doy);
}
function Fu() {
  var e = this.localeData()._week;
  return we(this.weekYear(), e.dow, e.doy);
}
function Hn(e, t, r, s, n) {
  var a;
  return e == null
    ? pt(this, s, n).year
    : ((a = we(e, s, n)), t > a && (t = a), Iu.call(this, e, t, r, s, n));
}
function Iu(e, t, r, s, n) {
  var a = kn(e, t, r, s, n),
    i = mt(a.year, 0, a.dayOfYear);
  return (
    this.year(i.getUTCFullYear()),
    this.month(i.getUTCMonth()),
    this.date(i.getUTCDate()),
    this
  );
}
g("Q", 0, "Qo", "quarter");
m("Q", dn);
T("Q", function (e, t) {
  t[ge] = (b(e) - 1) * 3;
});
function Wu(e) {
  return e == null
    ? Math.ceil((this.month() + 1) / 3)
    : this.month((e - 1) * 3 + (this.month() % 3));
}
g("D", ["DD", 2], "Do", "date");
m("D", W, tt);
m("DD", W, q);
m("Do", function (e, t) {
  return e
    ? t._dayOfMonthOrdinalParse || t._ordinalParse
    : t._dayOfMonthOrdinalParseLenient;
});
T(["D", "DD"], ue);
T("Do", function (e, t) {
  t[ue] = b(e.match(W)[0]);
});
var Gn = rt("Date", !0);
g("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
m("DDD", er);
m("DDDD", fn);
T(["DDD", "DDDD"], function (e, t, r) {
  r._dayOfYear = b(e);
});
function Au(e) {
  var t =
    Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5,
    ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
g("m", ["mm", 2], 0, "minute");
m("m", W, ns);
m("mm", W, q);
T(["m", "mm"], se);
var Lu = rt("Minutes", !1);
g("s", ["ss", 2], 0, "second");
m("s", W, ns);
m("ss", W, q);
T(["s", "ss"], _e);
var ju = rt("Seconds", !1);
g("S", 0, 0, function () {
  return ~~(this.millisecond() / 100);
});
g(0, ["SS", 2], 0, function () {
  return ~~(this.millisecond() / 10);
});
g(0, ["SSS", 3], 0, "millisecond");
g(0, ["SSSS", 4], 0, function () {
  return this.millisecond() * 10;
});
g(0, ["SSSSS", 5], 0, function () {
  return this.millisecond() * 100;
});
g(0, ["SSSSSS", 6], 0, function () {
  return this.millisecond() * 1e3;
});
g(0, ["SSSSSSS", 7], 0, function () {
  return this.millisecond() * 1e4;
});
g(0, ["SSSSSSSS", 8], 0, function () {
  return this.millisecond() * 1e5;
});
g(0, ["SSSSSSSSS", 9], 0, function () {
  return this.millisecond() * 1e6;
});
m("S", er, dn);
m("SS", er, q);
m("SSS", er, fn);
var Ce, zn;
for (Ce = "SSSS"; Ce.length <= 9; Ce += "S") m(Ce, et);
function Uu(e, t) {
  t[Pe] = b(("0." + e) * 1e3);
}
for (Ce = "S"; Ce.length <= 9; Ce += "S") T(Ce, Uu);
zn = rt("Milliseconds", !1);
g("z", 0, 0, "zoneAbbr");
g("zz", 0, 0, "zoneName");
function $u() {
  return this._isUTC ? "UTC" : "";
}
function Hu() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var c = St.prototype;
c.add = Fl;
c.calendar = $l;
c.clone = Hl;
c.diff = ql;
c.endOf = iu;
c.format = eu;
c.from = tu;
c.fromNow = ru;
c.to = su;
c.toNow = nu;
c.get = Ki;
c.invalidAt = pu;
c.isAfter = Gl;
c.isBefore = zl;
c.isBetween = Bl;
c.isSame = Vl;
c.isSameOrAfter = Zl;
c.isSameOrBefore = Jl;
c.isValid = hu;
c.lang = An;
c.locale = Wn;
c.localeData = Ln;
c.max = hl;
c.min = fl;
c.parsingFlags = mu;
c.set = Xi;
c.startOf = au;
c.subtract = Il;
c.toArray = cu;
c.toObject = du;
c.toDate = uu;
c.toISOString = Kl;
c.inspect = Xl;
typeof Symbol < "u" &&
  Symbol.for != null &&
  (c[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">";
  });
c.toJSON = fu;
c.toString = Ql;
c.unix = lu;
c.valueOf = ou;
c.creationData = yu;
c.eraName = wu;
c.eraNarrow = Su;
c.eraAbbr = ku;
c.eraYear = bu;
c.year = pn;
c.isLeapYear = Qi;
c.weekYear = Nu;
c.isoWeekYear = Ru;
c.quarter = c.quarters = Wu;
c.month = wn;
c.daysInMonth = lo;
c.week = c.weeks = go;
c.isoWeek = c.isoWeeks = _o;
c.weeksInYear = Pu;
c.weeksInWeekYear = Fu;
c.isoWeeksInYear = Tu;
c.isoWeeksInISOWeekYear = Eu;
c.date = Gn;
c.day = c.days = Ro;
c.weekday = To;
c.isoWeekday = Eo;
c.dayOfYear = Au;
c.hour = c.hours = jo;
c.minute = c.minutes = Lu;
c.second = c.seconds = ju;
c.millisecond = c.milliseconds = zn;
c.utcOffset = kl;
c.utc = xl;
c.local = Dl;
c.parseZone = Ml;
c.hasAlignedHourOffset = Ol;
c.isDST = Yl;
c.isLocal = Nl;
c.isUtcOffset = Rl;
c.isUtc = En;
c.isUTC = En;
c.zoneAbbr = $u;
c.zoneName = Hu;
c.dates = te("dates accessor is deprecated. Use date instead.", Gn);
c.months = te("months accessor is deprecated. Use month instead", wn);
c.years = te("years accessor is deprecated. Use year instead", pn);
c.zone = te(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  bl,
);
c.isDSTShifted = te(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Cl,
);
function Gu(e) {
  return I(e * 1e3);
}
function zu() {
  return I.apply(null, arguments).parseZone();
}
function Bn(e) {
  return e;
}
var O = Xr.prototype;
O.calendar = Ci;
O.longDateFormat = Ei;
O.invalidDate = Fi;
O.ordinal = Ai;
O.preparse = Bn;
O.postformat = Bn;
O.relativeTime = ji;
O.pastFuture = Ui;
O.set = Oi;
O.eras = gu;
O.erasParse = _u;
O.erasConvertYear = vu;
O.erasAbbrRegex = Du;
O.erasNameRegex = xu;
O.erasNarrowRegex = Mu;
O.months = no;
O.monthsShort = ao;
O.monthsParse = oo;
O.monthsRegex = co;
O.monthsShortRegex = uo;
O.week = ho;
O.firstDayOfYear = yo;
O.firstDayOfWeek = po;
O.weekdays = Mo;
O.weekdaysMin = Yo;
O.weekdaysShort = Oo;
O.weekdaysParse = No;
O.weekdaysRegex = Po;
O.weekdaysShortRegex = Fo;
O.weekdaysMinRegex = Io;
O.isPM = Ao;
O.meridiem = Uo;
function zt(e, t, r, s) {
  var n = ke(),
    a = de().set(s, t);
  return n[r](a, e);
}
function Vn(e, t, r) {
  if ((Se(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
    return zt(e, t, r, "month");
  var s,
    n = [];
  for (s = 0; s < 12; s++) n[s] = zt(e, s, r, "month");
  return n;
}
function gs(e, t, r, s) {
  typeof e == "boolean"
    ? (Se(t) && ((r = t), (t = void 0)), (t = t || ""))
    : ((t = e),
      (r = t),
      (e = !1),
      Se(t) && ((r = t), (t = void 0)),
      (t = t || ""));
  var n = ke(),
    a = e ? n._week.dow : 0,
    i,
    o = [];
  if (r != null) return zt(t, (r + a) % 7, s, "day");
  for (i = 0; i < 7; i++) o[i] = zt(t, (i + a) % 7, s, "day");
  return o;
}
function Bu(e, t) {
  return Vn(e, t, "months");
}
function Vu(e, t) {
  return Vn(e, t, "monthsShort");
}
function Zu(e, t, r) {
  return gs(e, t, r, "weekdays");
}
function Ju(e, t, r) {
  return gs(e, t, r, "weekdaysShort");
}
function qu(e, t, r) {
  return gs(e, t, r, "weekdaysMin");
}
Ne("en", {
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
        b((e % 100) / 10) === 1
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
h.lang = te("moment.lang is deprecated. Use moment.locale instead.", Ne);
h.langData = te(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ke,
);
var me = Math.abs;
function Qu() {
  var e = this._data;
  return (
    (this._milliseconds = me(this._milliseconds)),
    (this._days = me(this._days)),
    (this._months = me(this._months)),
    (e.milliseconds = me(e.milliseconds)),
    (e.seconds = me(e.seconds)),
    (e.minutes = me(e.minutes)),
    (e.hours = me(e.hours)),
    (e.months = me(e.months)),
    (e.years = me(e.years)),
    this
  );
}
function Zn(e, t, r, s) {
  var n = oe(t, r);
  return (
    (e._milliseconds += s * n._milliseconds),
    (e._days += s * n._days),
    (e._months += s * n._months),
    e._bubble()
  );
}
function Ku(e, t) {
  return Zn(this, e, t, 1);
}
function Xu(e, t) {
  return Zn(this, e, t, -1);
}
function Fs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ec() {
  var e = this._milliseconds,
    t = this._days,
    r = this._months,
    s = this._data,
    n,
    a,
    i,
    o,
    l;
  return (
    (e >= 0 && t >= 0 && r >= 0) ||
      (e <= 0 && t <= 0 && r <= 0) ||
      ((e += Fs(Ar(r) + t) * 864e5), (t = 0), (r = 0)),
    (s.milliseconds = e % 1e3),
    (n = Q(e / 1e3)),
    (s.seconds = n % 60),
    (a = Q(n / 60)),
    (s.minutes = a % 60),
    (i = Q(a / 60)),
    (s.hours = i % 24),
    (t += Q(i / 24)),
    (l = Q(Jn(t))),
    (r += l),
    (t -= Fs(Ar(l))),
    (o = Q(r / 12)),
    (r %= 12),
    (s.days = t),
    (s.months = r),
    (s.years = o),
    this
  );
}
function Jn(e) {
  return (e * 4800) / 146097;
}
function Ar(e) {
  return (e * 146097) / 4800;
}
function tc(e) {
  if (!this.isValid()) return NaN;
  var t,
    r,
    s = this._milliseconds;
  if (((e = re(e)), e === "month" || e === "quarter" || e === "year"))
    switch (((t = this._days + s / 864e5), (r = this._months + Jn(t)), e)) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (((t = this._days + Math.round(Ar(this._months))), e)) {
      case "week":
        return t / 7 + s / 6048e5;
      case "day":
        return t + s / 864e5;
      case "hour":
        return t * 24 + s / 36e5;
      case "minute":
        return t * 1440 + s / 6e4;
      case "second":
        return t * 86400 + s / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + s;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function be(e) {
  return function () {
    return this.as(e);
  };
}
var qn = be("ms"),
  rc = be("s"),
  sc = be("m"),
  nc = be("h"),
  ac = be("d"),
  ic = be("w"),
  oc = be("M"),
  lc = be("Q"),
  uc = be("y"),
  cc = qn;
function dc() {
  return oe(this);
}
function fc(e) {
  return (e = re(e)), this.isValid() ? this[e + "s"]() : NaN;
}
function je(e) {
  return function () {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var hc = je("milliseconds"),
  mc = je("seconds"),
  pc = je("minutes"),
  yc = je("hours"),
  gc = je("days"),
  _c = je("months"),
  vc = je("years");
function wc() {
  return Q(this.days() / 7);
}
var pe = Math.round,
  Ge = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
function Sc(e, t, r, s, n) {
  return n.relativeTime(t || 1, !!r, e, s);
}
function kc(e, t, r, s) {
  var n = oe(e).abs(),
    a = pe(n.as("s")),
    i = pe(n.as("m")),
    o = pe(n.as("h")),
    l = pe(n.as("d")),
    u = pe(n.as("M")),
    d = pe(n.as("w")),
    f = pe(n.as("y")),
    y =
      (a <= r.ss && ["s", a]) ||
      (a < r.s && ["ss", a]) ||
      (i <= 1 && ["m"]) ||
      (i < r.m && ["mm", i]) ||
      (o <= 1 && ["h"]) ||
      (o < r.h && ["hh", o]) ||
      (l <= 1 && ["d"]) ||
      (l < r.d && ["dd", l]);
  return (
    r.w != null && (y = y || (d <= 1 && ["w"]) || (d < r.w && ["ww", d])),
    (y = y ||
      (u <= 1 && ["M"]) ||
      (u < r.M && ["MM", u]) ||
      (f <= 1 && ["y"]) || ["yy", f]),
    (y[2] = t),
    (y[3] = +e > 0),
    (y[4] = s),
    Sc.apply(null, y)
  );
}
function bc(e) {
  return e === void 0 ? pe : typeof e == "function" ? ((pe = e), !0) : !1;
}
function xc(e, t) {
  return Ge[e] === void 0
    ? !1
    : t === void 0
      ? Ge[e]
      : ((Ge[e] = t), e === "s" && (Ge.ss = t - 1), !0);
}
function Dc(e, t) {
  if (!this.isValid()) return this.localeData().invalidDate();
  var r = !1,
    s = Ge,
    n,
    a;
  return (
    typeof e == "object" && ((t = e), (e = !1)),
    typeof e == "boolean" && (r = e),
    typeof t == "object" &&
      ((s = Object.assign({}, Ge, t)),
      t.s != null && t.ss == null && (s.ss = t.s - 1)),
    (n = this.localeData()),
    (a = kc(this, !r, s, n)),
    r && (a = n.pastFuture(+this, a)),
    n.postformat(a)
  );
}
var Sr = Math.abs;
function Ue(e) {
  return (e > 0) - (e < 0) || +e;
}
function lr() {
  if (!this.isValid()) return this.localeData().invalidDate();
  var e = Sr(this._milliseconds) / 1e3,
    t = Sr(this._days),
    r = Sr(this._months),
    s,
    n,
    a,
    i,
    o = this.asSeconds(),
    l,
    u,
    d,
    f;
  return o
    ? ((s = Q(e / 60)),
      (n = Q(s / 60)),
      (e %= 60),
      (s %= 60),
      (a = Q(r / 12)),
      (r %= 12),
      (i = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
      (l = o < 0 ? "-" : ""),
      (u = Ue(this._months) !== Ue(o) ? "-" : ""),
      (d = Ue(this._days) !== Ue(o) ? "-" : ""),
      (f = Ue(this._milliseconds) !== Ue(o) ? "-" : ""),
      l +
        "P" +
        (a ? u + a + "Y" : "") +
        (r ? u + r + "M" : "") +
        (t ? d + t + "D" : "") +
        (n || s || e ? "T" : "") +
        (n ? f + n + "H" : "") +
        (s ? f + s + "M" : "") +
        (e ? f + i + "S" : ""))
    : "P0D";
}
var D = ir.prototype;
D.isValid = _l;
D.abs = Qu;
D.add = Ku;
D.subtract = Xu;
D.as = tc;
D.asMilliseconds = qn;
D.asSeconds = rc;
D.asMinutes = sc;
D.asHours = nc;
D.asDays = ac;
D.asWeeks = ic;
D.asMonths = oc;
D.asQuarters = lc;
D.asYears = uc;
D.valueOf = cc;
D._bubble = ec;
D.clone = dc;
D.get = fc;
D.milliseconds = hc;
D.seconds = mc;
D.minutes = pc;
D.hours = yc;
D.days = gc;
D.weeks = wc;
D.months = _c;
D.years = vc;
D.humanize = Dc;
D.toISOString = lr;
D.toString = lr;
D.toJSON = lr;
D.locale = Wn;
D.localeData = Ln;
D.toIsoString = te(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  lr,
);
D.lang = An;
g("X", 0, 0, "unix");
g("x", 0, 0, "valueOf");
m("x", rr);
m("X", zi);
T("X", function (e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
T("x", function (e, t, r) {
  r._d = new Date(b(e));
}); //! moment.js
h.version = "2.30.1";
Di(I);
h.fn = c;
h.min = ml;
h.max = pl;
h.now = yl;
h.utc = de;
h.unix = Gu;
h.months = Bu;
h.isDate = wt;
h.locale = Ne;
h.invalid = Kt;
h.duration = oe;
h.isMoment = ie;
h.weekdays = Zu;
h.parseZone = zu;
h.localeData = ke;
h.isDuration = Pt;
h.monthsShort = Vu;
h.weekdaysMin = qu;
h.defineLocale = us;
h.updateLocale = zo;
h.locales = Bo;
h.weekdaysShort = Ju;
h.normalizeUnits = re;
h.relativeTimeRounding = bc;
h.relativeTimeThreshold = xc;
h.calendarFormat = Ul;
h.prototype = c;
h.HTML5_FMT = {
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
let Mc = class extends w.Component {
  render() {
    return p.jsx("div", {
      children: p.jsx("footer", {
        className: "footer",
        children: p.jsxs("div", {
          className: "footer-content",
          children: [
            p.jsx("ul", {
              className: "footer-list footer-list-right",
              children: p.jsx("li", {
                className: "footer-list-item",
                children: p.jsxs("a", {
                  href: "http://www.cityofboston.gov/311/",
                  className: "footer-link yellow-link",
                  children: [
                    p.jsx("span", {
                      className: "footer-date",
                      children: h().format("llll"),
                    }),
                    p.jsx("span", {
                      className: "tablet-hidden",
                      children: " - ",
                    }),
                  ],
                }),
              }),
            }),
            p.jsxs("ul", {
              className: "footer-list",
              children: [
                p.jsx("li", {
                  className: "footer-list-item",
                  children: p.jsx("a", {
                    href: "https://johnfleurimond.com",
                    className: "footer-link",
                    children: "John Fleurimond",
                  }),
                }),
                p.jsx("li", {
                  className: "footer-list-item",
                  children: p.jsx("a", {
                    href: "https://twitter.com/tcodemonger",
                    className: "footer-link",
                    children: "Twitter",
                  }),
                }),
                p.jsx("li", {
                  className: "footer-list-item",
                  children: p.jsx("a", {
                    href: "https://github.com/JOHNFLEURIMOND",
                    className: "footer-link",
                    children: "Github",
                  }),
                }),
                p.jsx("li", {
                  className: "footer-list-item",
                  children: p.jsx("a", {
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
const Oc = [
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
  Yc = () =>
    p.jsx("section", {
      className: "inventors-container",
      children: p.jsx("div", {
        className: "card-container",
        children: Oc.map((e, t) =>
          p.jsxs(
            "a",
            {
              href: "/",
              className: "card",
              "aria-labelledby": `card-title-${t}`,
              children: [
                p.jsx("div", {
                  className: "card-image",
                  style: {
                    backgroundImage: `url(${e.image || "default-image.jpg"})`,
                  },
                  "aria-hidden": "true",
                }),
                p.jsxs("div", {
                  className: "card-content",
                  children: [
                    p.jsxs("h2", {
                      id: `card-title-${t}`,
                      className: "card-name",
                      children: [e.first, " ", e.last],
                    }),
                    p.jsx("p", { className: "card-year", children: e.year }),
                    p.jsx("p", {
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
class Cc extends w.Component {
  render() {
    return p.jsx("div", {
      children: p.jsx("footer", {
        className: "ft",
        children: p.jsxs("div", {
          className: "ft-c",
          children: [
            p.jsx("ul", {
              className: "ft-ll ft-ll--r",
              children: p.jsx("li", {
                className: "ft-ll-i",
                children: p.jsxs("a", {
                  href: "http://www.cityofboston.gov/311/",
                  className: "ft-ll-a lnk--yellow",
                  children: [
                    p.jsx("span", {
                      className: "ft-ll",
                      children: h().format("llll"),
                    }),
                    p.jsx("span", { class: "tablet--hidden", children: " - " }),
                    " ",
                  ],
                }),
              }),
            }),
            p.jsxs("ul", {
              className: "ft-ll",
              children: [
                p.jsx("li", {
                  className: "ft-ll-i",
                  children: p.jsx("a", {
                    href: "https://johnfleurimond.com",
                    className: "ft-ll-a",
                    children: "John Fleurimond",
                  }),
                }),
                p.jsx("li", {
                  className: "ft-ll-i",
                  children: p.jsx("a", {
                    href: "https://twitter.com/tcodemonger",
                    className: "ft-ll-a",
                    children: "Twitter",
                  }),
                }),
                p.jsx("li", {
                  className: "ft-ll-i",
                  children: p.jsx("a", {
                    href: "https://github.com/JOHNFLEURIMOND",
                    className: "ft-ll-a",
                    children: "Github",
                  }),
                }),
                p.jsx("li", {
                  className: "ft-ll-i",
                  children: p.jsx("a", {
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
var B = function () {
  return (
    (B =
      Object.assign ||
      function (t) {
        for (var r, s = 1, n = arguments.length; s < n; s++) {
          r = arguments[s];
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    B.apply(this, arguments)
  );
};
function gt(e, t, r) {
  if (r || arguments.length === 2)
    for (var s = 0, n = t.length, a; s < n; s++)
      (a || !(s in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, s)), (a[s] = t[s]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var F = "-ms-",
  ft = "-moz-",
  R = "-webkit-",
  Qn = "comm",
  ur = "rule",
  _s = "decl",
  Nc = "@import",
  Kn = "@keyframes",
  Rc = "@layer",
  Xn = Math.abs,
  vs = String.fromCharCode,
  Lr = Object.assign;
function Tc(e, t) {
  return z(e, 0) ^ 45
    ? (((((((t << 2) ^ z(e, 0)) << 2) ^ z(e, 1)) << 2) ^ z(e, 2)) << 2) ^
        z(e, 3)
    : 0;
}
function ea(e) {
  return e.trim();
}
function ye(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function S(e, t, r) {
  return e.replace(t, r);
}
function It(e, t, r) {
  return e.indexOf(t, r);
}
function z(e, t) {
  return e.charCodeAt(t) | 0;
}
function qe(e, t, r) {
  return e.slice(t, r);
}
function le(e) {
  return e.length;
}
function ta(e) {
  return e.length;
}
function ct(e, t) {
  return t.push(e), e;
}
function Ec(e, t) {
  return e.map(t).join("");
}
function Is(e, t) {
  return e.filter(function (r) {
    return !ye(r, t);
  });
}
var cr = 1,
  Qe = 1,
  ra = 0,
  ee = 0,
  $ = 0,
  st = "";
function dr(e, t, r, s, n, a, i, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: s,
    props: n,
    children: a,
    line: cr,
    column: Qe,
    length: i,
    return: "",
    siblings: o,
  };
}
function Me(e, t) {
  return Lr(
    dr("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  );
}
function $e(e) {
  for (; e.root; ) e = Me(e.root, { children: [e] });
  ct(e, e.siblings);
}
function Pc() {
  return $;
}
function Fc() {
  return ($ = ee > 0 ? z(st, --ee) : 0), Qe--, $ === 10 && ((Qe = 1), cr--), $;
}
function ne() {
  return ($ = ee < ra ? z(st, ee++) : 0), Qe++, $ === 10 && ((Qe = 1), cr++), $;
}
function We() {
  return z(st, ee);
}
function Wt() {
  return ee;
}
function fr(e, t) {
  return qe(st, e, t);
}
function jr(e) {
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
function Ic(e) {
  return (cr = Qe = 1), (ra = le((st = e))), (ee = 0), [];
}
function Wc(e) {
  return (st = ""), e;
}
function kr(e) {
  return ea(fr(ee - 1, Ur(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ac(e) {
  for (; ($ = We()) && $ < 33; ) ne();
  return jr(e) > 2 || jr($) > 3 ? "" : " ";
}
function Lc(e, t) {
  for (
    ;
    --t &&
    ne() &&
    !($ < 48 || $ > 102 || ($ > 57 && $ < 65) || ($ > 70 && $ < 97));

  );
  return fr(e, Wt() + (t < 6 && We() == 32 && ne() == 32));
}
function Ur(e) {
  for (; ne(); )
    switch ($) {
      case e:
        return ee;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ur($);
        break;
      case 40:
        e === 41 && Ur(e);
        break;
      case 92:
        ne();
        break;
    }
  return ee;
}
function jc(e, t) {
  for (; ne() && e + $ !== 57; ) if (e + $ === 84 && We() === 47) break;
  return "/*" + fr(t, ee - 1) + "*" + vs(e === 47 ? e : ne());
}
function Uc(e) {
  for (; !jr(We()); ) ne();
  return fr(e, ee);
}
function $c(e) {
  return Wc(At("", null, null, null, [""], (e = Ic(e)), 0, [0], e));
}
function At(e, t, r, s, n, a, i, o, l) {
  for (
    var u = 0,
      d = 0,
      f = i,
      y = 0,
      _ = 0,
      x = 0,
      Y = 1,
      N = 1,
      A = 1,
      P = 0,
      C = "",
      j = n,
      H = a,
      E = s,
      k = C;
    N;

  )
    switch (((x = P), (P = ne()))) {
      case 40:
        if (x != 108 && z(k, f - 1) == 58) {
          It((k += S(kr(P), "&", "&\f")), "&\f", Xn(u ? o[u - 1] : 0)) != -1 &&
            (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += kr(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Ac(x);
        break;
      case 92:
        k += Lc(Wt() - 1, 7);
        continue;
      case 47:
        switch (We()) {
          case 42:
          case 47:
            ct(Hc(jc(ne(), Wt()), t, r, l), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * Y:
        o[u++] = le(k) * A;
      case 125 * Y:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            N = 0;
          case 59 + d:
            A == -1 && (k = S(k, /\f/g, "")),
              _ > 0 &&
                le(k) - f &&
                ct(
                  _ > 32
                    ? As(k + ";", s, r, f - 1, l)
                    : As(S(k, " ", "") + ";", s, r, f - 2, l),
                  l,
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (ct(
                (E = Ws(k, t, r, u, d, n, o, C, (j = []), (H = []), f, a)),
                a,
              ),
              P === 123)
            )
              if (d === 0) At(k, t, E, E, j, a, f, o, H);
              else
                switch (y === 99 && z(k, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    At(
                      e,
                      E,
                      E,
                      s && ct(Ws(e, E, E, 0, 0, n, o, C, n, (j = []), f, H), H),
                      n,
                      H,
                      f,
                      o,
                      s ? j : H,
                    );
                    break;
                  default:
                    At(k, E, E, E, [""], H, 0, o, H);
                }
        }
        (u = d = _ = 0), (Y = A = 1), (C = k = ""), (f = i);
        break;
      case 58:
        (f = 1 + le(k)), (_ = x);
      default:
        if (Y < 1) {
          if (P == 123) --Y;
          else if (P == 125 && Y++ == 0 && Fc() == 125) continue;
        }
        switch (((k += vs(P)), P * Y)) {
          case 38:
            A = d > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (o[u++] = (le(k) - 1) * A), (A = 1);
            break;
          case 64:
            We() === 45 && (k += kr(ne())),
              (y = We()),
              (d = f = le((C = k += Uc(Wt())))),
              P++;
            break;
          case 45:
            x === 45 && le(k) == 2 && (Y = 0);
        }
    }
  return a;
}
function Ws(e, t, r, s, n, a, i, o, l, u, d, f) {
  for (
    var y = n - 1, _ = n === 0 ? a : [""], x = ta(_), Y = 0, N = 0, A = 0;
    Y < s;
    ++Y
  )
    for (var P = 0, C = qe(e, y + 1, (y = Xn((N = i[Y])))), j = e; P < x; ++P)
      (j = ea(N > 0 ? _[P] + " " + C : S(C, /&\f/g, _[P]))) && (l[A++] = j);
  return dr(e, t, r, n === 0 ? ur : o, l, u, d, f);
}
function Hc(e, t, r, s) {
  return dr(e, t, r, Qn, vs(Pc()), qe(e, 2, -2), 0, s);
}
function As(e, t, r, s, n) {
  return dr(e, t, r, _s, qe(e, 0, s), qe(e, s + 1, -1), s, n);
}
function sa(e, t, r) {
  switch (Tc(e, t)) {
    case 5103:
      return R + "print-" + e + e;
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
      return R + e + e;
    case 4789:
      return ft + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + ft + e + F + e + e;
    case 5936:
      switch (z(e, t + 11)) {
        case 114:
          return R + e + F + S(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + F + S(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + F + S(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return R + e + F + e + e;
    case 6165:
      return R + e + F + "flex-" + e + e;
    case 5187:
      return (
        R + e + S(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + F + "flex-$1$2") + e
      );
    case 5443:
      return (
        R +
        e +
        F +
        "flex-item-" +
        S(e, /flex-|-self/g, "") +
        (ye(e, /flex-|baseline/)
          ? ""
          : F + "grid-row-" + S(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        R +
        e +
        F +
        "flex-line-pack" +
        S(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return R + e + F + S(e, "shrink", "negative") + e;
    case 5292:
      return R + e + F + S(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        R +
        "box-" +
        S(e, "-grow", "") +
        R +
        e +
        F +
        S(e, "grow", "positive") +
        e
      );
    case 4554:
      return R + S(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return (
        S(S(S(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return S(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return (
        S(
          S(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + F + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        R +
        e +
        e
      );
    case 4200:
      if (!ye(e, /flex-|baseline/))
        return F + "grid-column-align" + qe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return F + S(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r &&
        r.some(function (s, n) {
          return (t = n), ye(s.props, /grid-\w+-end/);
        })
        ? ~It(e + (r = r[t].value), "span", 0)
          ? e
          : F +
            S(e, "-start", "") +
            e +
            F +
            "grid-row-span:" +
            (~It(r, "span", 0) ? ye(r, /\d+/) : +ye(r, /\d+/) - +ye(e, /\d+/)) +
            ";"
        : F + S(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r &&
        r.some(function (s) {
          return ye(s.props, /grid-\w+-start/);
        })
        ? e
        : F + S(S(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(e, /(.+)-inline(.+)/, R + "$1$2") + e;
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
      if (le(e) - 1 - t > 6)
        switch (z(e, t + 1)) {
          case 109:
            if (z(e, t + 4) !== 45) break;
          case 102:
            return (
              S(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  R +
                  "$2-$3$1" +
                  ft +
                  (z(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~It(e, "stretch", 0)
              ? sa(S(e, "stretch", "fill-available"), t, r) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return S(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (s, n, a, i, o, l, u) {
          return (
            F +
            n +
            ":" +
            a +
            u +
            (i ? F + n + "-span:" + (o ? l : +l - +a) + u : "") +
            e
          );
        },
      );
    case 4949:
      if (z(e, t + 6) === 121) return S(e, ":", ":" + R) + e;
      break;
    case 6444:
      switch (z(e, z(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            S(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                R +
                (z(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                R +
                "$2$3$1" +
                F +
                "$2box$3",
            ) + e
          );
        case 100:
          return S(e, ":", ":" + F) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return S(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Bt(e, t) {
  for (var r = "", s = 0; s < e.length; s++) r += t(e[s], s, e, t) || "";
  return r;
}
function Gc(e, t, r, s) {
  switch (e.type) {
    case Rc:
      if (e.children.length) break;
    case Nc:
    case _s:
      return (e.return = e.return || e.value);
    case Qn:
      return "";
    case Kn:
      return (e.return = e.value + "{" + Bt(e.children, s) + "}");
    case ur:
      if (!le((e.value = e.props.join(",")))) return "";
  }
  return le((r = Bt(e.children, s)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function zc(e) {
  var t = ta(e);
  return function (r, s, n, a) {
    for (var i = "", o = 0; o < t; o++) i += e[o](r, s, n, a) || "";
    return i;
  };
}
function Bc(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Vc(e, t, r, s) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _s:
        e.return = sa(e.value, e.length, r);
        return;
      case Kn:
        return Bt([Me(e, { value: S(e.value, "@", "@" + R) })], s);
      case ur:
        if (e.length)
          return Ec((r = e.props), function (n) {
            switch (ye(n, (s = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                $e(Me(e, { props: [S(n, /:(read-\w+)/, ":" + ft + "$1")] })),
                  $e(Me(e, { props: [n] })),
                  Lr(e, { props: Is(r, s) });
                break;
              case "::placeholder":
                $e(
                  Me(e, { props: [S(n, /:(plac\w+)/, ":" + R + "input-$1")] }),
                ),
                  $e(Me(e, { props: [S(n, /:(plac\w+)/, ":" + ft + "$1")] })),
                  $e(Me(e, { props: [S(n, /:(plac\w+)/, F + "input-$1")] })),
                  $e(Me(e, { props: [n] })),
                  Lr(e, { props: Is(r, s) });
                break;
            }
            return "";
          });
    }
}
var Zc = {
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
  J = {},
  Ke =
    (typeof process < "u" &&
      J !== void 0 &&
      (J.REACT_APP_SC_ATTR || J.SC_ATTR)) ||
    "data-styled",
  na = "active",
  aa = "data-styled-version",
  hr = "6.1.12",
  ws = `/*!sc*/
`,
  Vt = typeof window < "u" && "HTMLElement" in window,
  Jc = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        J !== void 0 &&
        J.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        J.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? J.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        J.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        J !== void 0 &&
        J.SC_DISABLE_SPEEDY !== void 0 &&
        J.SC_DISABLE_SPEEDY !== "" &&
        J.SC_DISABLE_SPEEDY !== "false" &&
        J.SC_DISABLE_SPEEDY),
  qc = {},
  mr = Object.freeze([]),
  Xe = Object.freeze({});
function ia(e, t, r) {
  return (
    r === void 0 && (r = Xe), (e.theme !== r.theme && e.theme) || t || r.theme
  );
}
var oa = new Set([
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
  Qc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Kc = /(^-|-$)/g;
function Ls(e) {
  return e.replace(Qc, "-").replace(Kc, "");
}
var Xc = /(a)(d)/gi,
  Rt = 52,
  js = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function $r(e) {
  var t,
    r = "";
  for (t = Math.abs(e); t > Rt; t = (t / Rt) | 0) r = js(t % Rt) + r;
  return (js(t % Rt) + r).replace(Xc, "$1-$2");
}
var br,
  la = 5381,
  ze = function (e, t) {
    for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
    return e;
  },
  ua = function (e) {
    return ze(la, e);
  };
function ca(e) {
  return $r(ua(e) >>> 0);
}
function ed(e) {
  return e.displayName || e.name || "Component";
}
function xr(e) {
  return typeof e == "string" && !0;
}
var da = typeof Symbol == "function" && Symbol.for,
  fa = da ? Symbol.for("react.memo") : 60115,
  td = da ? Symbol.for("react.forward_ref") : 60112,
  rd = {
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
  sd = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  ha = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  nd =
    (((br = {})[td] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (br[fa] = ha),
    br);
function Us(e) {
  return ("type" in (t = e) && t.type.$$typeof) === fa
    ? ha
    : "$$typeof" in e
      ? nd[e.$$typeof]
      : rd;
  var t;
}
var ad = Object.defineProperty,
  id = Object.getOwnPropertyNames,
  $s = Object.getOwnPropertySymbols,
  od = Object.getOwnPropertyDescriptor,
  ld = Object.getPrototypeOf,
  Hs = Object.prototype;
function ma(e, t, r) {
  if (typeof t != "string") {
    if (Hs) {
      var s = ld(t);
      s && s !== Hs && ma(e, s, r);
    }
    var n = id(t);
    $s && (n = n.concat($s(t)));
    for (var a = Us(e), i = Us(t), o = 0; o < n.length; ++o) {
      var l = n[o];
      if (!(l in sd || (r && r[l]) || (i && l in i) || (a && l in a))) {
        var u = od(t, l);
        try {
          ad(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function Ae(e) {
  return typeof e == "function";
}
function Ss(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Hr(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], s = 1; s < e.length; s++) r += e[s];
  return r;
}
function _t(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Gr(e, t, r) {
  if ((r === void 0 && (r = !1), !r && !_t(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var s = 0; s < t.length; s++) e[s] = Gr(e[s], t[s]);
  else if (_t(t)) for (var s in t) e[s] = Gr(e[s], t[s]);
  return e;
}
function ks(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Le(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var ud = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var r = 0, s = 0; s < t; s++) r += this.groupSizes[s];
        return r;
      }),
      (e.prototype.insertRules = function (t, r) {
        if (t >= this.groupSizes.length) {
          for (var s = this.groupSizes, n = s.length, a = n; t >= a; )
            if ((a <<= 1) < 0) throw Le(16, "".concat(t));
          (this.groupSizes = new Uint32Array(a)),
            this.groupSizes.set(s),
            (this.length = a);
          for (var i = n; i < a; i++) this.groupSizes[i] = 0;
        }
        for (
          var o = this.indexOfGroup(t + 1), l = ((i = 0), r.length);
          i < l;
          i++
        )
          this.tag.insertRule(o, r[i]) && (this.groupSizes[t]++, o++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var r = this.groupSizes[t],
            s = this.indexOfGroup(t),
            n = s + r;
          this.groupSizes[t] = 0;
          for (var a = s; a < n; a++) this.tag.deleteRule(s);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var r = "";
        if (t >= this.length || this.groupSizes[t] === 0) return r;
        for (
          var s = this.groupSizes[t],
            n = this.indexOfGroup(t),
            a = n + s,
            i = n;
          i < a;
          i++
        )
          r += "".concat(this.tag.getRule(i)).concat(ws);
        return r;
      }),
      e
    );
  })(),
  Lt = new Map(),
  Zt = new Map(),
  jt = 1,
  Tt = function (e) {
    if (Lt.has(e)) return Lt.get(e);
    for (; Zt.has(jt); ) jt++;
    var t = jt++;
    return Lt.set(e, t), Zt.set(t, e), t;
  },
  cd = function (e, t) {
    (jt = t + 1), Lt.set(e, t), Zt.set(t, e);
  },
  dd = "style[".concat(Ke, "][").concat(aa, '="').concat(hr, '"]'),
  fd = new RegExp(
    "^".concat(Ke, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  hd = function (e, t, r) {
    for (var s, n = r.split(","), a = 0, i = n.length; a < i; a++)
      (s = n[a]) && e.registerName(t, s);
  },
  md = function (e, t) {
    for (
      var r,
        s = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(ws),
        n = [],
        a = 0,
        i = s.length;
      a < i;
      a++
    ) {
      var o = s[a].trim();
      if (o) {
        var l = o.match(fd);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            d = l[2];
          u !== 0 && (cd(d, u), hd(e, d, l[3]), e.getTag().insertRules(u, n)),
            (n.length = 0);
        } else n.push(o);
      }
    }
  },
  Gs = function (e) {
    for (
      var t = document.querySelectorAll(dd), r = 0, s = t.length;
      r < s;
      r++
    ) {
      var n = t[r];
      n &&
        n.getAttribute(Ke) !== na &&
        (md(e, n), n.parentNode && n.parentNode.removeChild(n));
    }
  };
function pd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var pa = function (e) {
    var t = document.head,
      r = e || t,
      s = document.createElement("style"),
      n = (function (o) {
        var l = Array.from(o.querySelectorAll("style[".concat(Ke, "]")));
        return l[l.length - 1];
      })(r),
      a = n !== void 0 ? n.nextSibling : null;
    s.setAttribute(Ke, na), s.setAttribute(aa, hr);
    var i = pd();
    return i && s.setAttribute("nonce", i), r.insertBefore(s, a), s;
  },
  yd = (function () {
    function e(t) {
      (this.element = pa(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (r) {
          if (r.sheet) return r.sheet;
          for (var s = document.styleSheets, n = 0, a = s.length; n < a; n++) {
            var i = s[n];
            if (i.ownerNode === r) return i;
          }
          throw Le(17);
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
  gd = (function () {
    function e(t) {
      (this.element = pa(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        if (t <= this.length && t >= 0) {
          var s = document.createTextNode(r);
          return (
            this.element.insertBefore(s, this.nodes[t] || null),
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
  _d = (function () {
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
  zs = Vt,
  vd = { isServer: !Vt, useCSSOMInjection: !Jc },
  Jt = (function () {
    function e(t, r, s) {
      t === void 0 && (t = Xe), r === void 0 && (r = {});
      var n = this;
      (this.options = B(B({}, vd), t)),
        (this.gs = r),
        (this.names = new Map(s)),
        (this.server = !!t.isServer),
        !this.server && Vt && zs && ((zs = !1), Gs(this)),
        ks(this, function () {
          return (function (a) {
            for (
              var i = a.getTag(),
                o = i.length,
                l = "",
                u = function (f) {
                  var y = (function (A) {
                    return Zt.get(A);
                  })(f);
                  if (y === void 0) return "continue";
                  var _ = a.names.get(y),
                    x = i.getGroup(f);
                  if (_ === void 0 || !_.size || x.length === 0)
                    return "continue";
                  var Y = ""
                      .concat(Ke, ".g")
                      .concat(f, '[id="')
                      .concat(y, '"]'),
                    N = "";
                  _ !== void 0 &&
                    _.forEach(function (A) {
                      A.length > 0 && (N += "".concat(A, ","));
                    }),
                    (l += ""
                      .concat(x)
                      .concat(Y, '{content:"')
                      .concat(N, '"}')
                      .concat(ws));
                },
                d = 0;
              d < o;
              d++
            )
              u(d);
            return l;
          })(n);
        });
    }
    return (
      (e.registerId = function (t) {
        return Tt(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && Vt && Gs(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, r) {
        return (
          r === void 0 && (r = !0),
          new e(B(B({}, this.options), t), this.gs, (r && this.names) || void 0)
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
              var s = r.useCSSOMInjection,
                n = r.target;
              return r.isServer ? new _d(n) : s ? new yd(n) : new gd(n);
            })(this.options)),
            new ud(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, r) {
        return this.names.has(t) && this.names.get(t).has(r);
      }),
      (e.prototype.registerName = function (t, r) {
        if ((Tt(t), this.names.has(t))) this.names.get(t).add(r);
        else {
          var s = new Set();
          s.add(r), this.names.set(t, s);
        }
      }),
      (e.prototype.insertRules = function (t, r, s) {
        this.registerName(t, r), this.getTag().insertRules(Tt(t), s);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Tt(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  wd = /&/g,
  Sd = /^\s*\/\/.*$/gm;
function ya(e, t) {
  return e.map(function (r) {
    return (
      r.type === "rule" &&
        ((r.value = "".concat(t, " ").concat(r.value)),
        (r.value = r.value.replaceAll(",", ",".concat(t, " "))),
        (r.props = r.props.map(function (s) {
          return "".concat(t, " ").concat(s);
        }))),
      Array.isArray(r.children) &&
        r.type !== "@keyframes" &&
        (r.children = ya(r.children, t)),
      r
    );
  });
}
function kd(e) {
  var t,
    r,
    s,
    n = Xe,
    a = n.options,
    i = a === void 0 ? Xe : a,
    o = n.plugins,
    l = o === void 0 ? mr : o,
    u = function (y, _, x) {
      return x.startsWith(r) && x.endsWith(r) && x.replaceAll(r, "").length > 0
        ? ".".concat(t)
        : y;
    },
    d = l.slice();
  d.push(function (y) {
    y.type === ur &&
      y.value.includes("&") &&
      (y.props[0] = y.props[0].replace(wd, r).replace(s, u));
  }),
    i.prefix && d.push(Vc),
    d.push(Gc);
  var f = function (y, _, x, Y) {
    _ === void 0 && (_ = ""),
      x === void 0 && (x = ""),
      Y === void 0 && (Y = "&"),
      (t = Y),
      (r = _),
      (s = new RegExp("\\".concat(r, "\\b"), "g"));
    var N = y.replace(Sd, ""),
      A = $c(x || _ ? "".concat(x, " ").concat(_, " { ").concat(N, " }") : N);
    i.namespace && (A = ya(A, i.namespace));
    var P = [];
    return (
      Bt(
        A,
        zc(
          d.concat(
            Bc(function (C) {
              return P.push(C);
            }),
          ),
        ),
      ),
      P
    );
  };
  return (
    (f.hash = l.length
      ? l
          .reduce(function (y, _) {
            return _.name || Le(15), ze(y, _.name);
          }, la)
          .toString()
      : ""),
    f
  );
}
var bd = new Jt(),
  zr = kd(),
  ga = K.createContext({
    shouldForwardProp: void 0,
    styleSheet: bd,
    stylis: zr,
  });
ga.Consumer;
K.createContext(void 0);
function Br() {
  return w.useContext(ga);
}
var xd = (function () {
    function e(t, r) {
      var s = this;
      (this.inject = function (n, a) {
        a === void 0 && (a = zr);
        var i = s.name + a.hash;
        n.hasNameForId(s.id, i) ||
          n.insertRules(s.id, i, a(s.rules, i, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = r),
        ks(this, function () {
          throw Le(12, String(s.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = zr), this.name + t.hash;
      }),
      e
    );
  })(),
  Dd = function (e) {
    return e >= "A" && e <= "Z";
  };
function Bs(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var s = e[r];
    if (r === 1 && s === "-" && e[0] === "-") return e;
    Dd(s) ? (t += "-" + s.toLowerCase()) : (t += s);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var _a = function (e) {
    return e == null || e === !1 || e === "";
  },
  va = function (e) {
    var t,
      r,
      s = [];
    for (var n in e) {
      var a = e[n];
      e.hasOwnProperty(n) &&
        !_a(a) &&
        ((Array.isArray(a) && a.isCss) || Ae(a)
          ? s.push("".concat(Bs(n), ":"), a, ";")
          : _t(a)
            ? s.push.apply(
                s,
                gt(gt(["".concat(n, " {")], va(a), !1), ["}"], !1),
              )
            : s.push(
                ""
                  .concat(Bs(n), ": ")
                  .concat(
                    ((t = n),
                    (r = a) == null || typeof r == "boolean" || r === ""
                      ? ""
                      : typeof r != "number" ||
                          r === 0 ||
                          t in Zc ||
                          t.startsWith("--")
                        ? String(r).trim()
                        : "".concat(r, "px")),
                    ";",
                  ),
              ));
    }
    return s;
  };
function Re(e, t, r, s) {
  if (_a(e)) return [];
  if (Ss(e)) return [".".concat(e.styledComponentId)];
  if (Ae(e)) {
    if (!Ae((a = e)) || (a.prototype && a.prototype.isReactComponent) || !t)
      return [e];
    var n = e(t);
    return Re(n, t, r, s);
  }
  var a;
  return e instanceof xd
    ? r
      ? (e.inject(r, s), [e.getName(s)])
      : [e]
    : _t(e)
      ? va(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            mr,
            e.map(function (i) {
              return Re(i, t, r, s);
            }),
          )
        : [e.toString()];
}
function wa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ae(r) && !Ss(r)) return !1;
  }
  return !0;
}
var Md = ua(hr),
  Od = (function () {
    function e(t, r, s) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (s === void 0 || s.isStatic) && wa(t)),
        (this.componentId = r),
        (this.baseHash = ze(Md, r)),
        (this.baseStyle = s),
        Jt.registerId(r);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, r, s) {
        var n = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, r, s)
          : "";
        if (this.isStatic && !s.hash)
          if (
            this.staticRulesId &&
            r.hasNameForId(this.componentId, this.staticRulesId)
          )
            n = Fe(n, this.staticRulesId);
          else {
            var a = Hr(Re(this.rules, t, r, s)),
              i = $r(ze(this.baseHash, a) >>> 0);
            if (!r.hasNameForId(this.componentId, i)) {
              var o = s(a, ".".concat(i), void 0, this.componentId);
              r.insertRules(this.componentId, i, o);
            }
            (n = Fe(n, i)), (this.staticRulesId = i);
          }
        else {
          for (
            var l = ze(this.baseHash, s.hash), u = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var f = this.rules[d];
            if (typeof f == "string") u += f;
            else if (f) {
              var y = Hr(Re(f, t, r, s));
              (l = ze(l, y + d)), (u += y);
            }
          }
          if (u) {
            var _ = $r(l >>> 0);
            r.hasNameForId(this.componentId, _) ||
              r.insertRules(
                this.componentId,
                _,
                s(u, ".".concat(_), void 0, this.componentId),
              ),
              (n = Fe(n, _));
          }
        }
        return n;
      }),
      e
    );
  })(),
  vt = K.createContext(void 0);
vt.Consumer;
function Yd(e) {
  var t = K.useContext(vt),
    r = w.useMemo(
      function () {
        return (function (s, n) {
          if (!s) throw Le(14);
          if (Ae(s)) {
            var a = s(n);
            return a;
          }
          if (Array.isArray(s) || typeof s != "object") throw Le(8);
          return n ? B(B({}, n), s) : s;
        })(e.theme, t);
      },
      [e.theme, t],
    );
  return e.children
    ? K.createElement(vt.Provider, { value: r }, e.children)
    : null;
}
var Dr = {};
function Cd(e, t, r) {
  var s = Ss(e),
    n = e,
    a = !xr(e),
    i = t.attrs,
    o = i === void 0 ? mr : i,
    l = t.componentId,
    u =
      l === void 0
        ? (function (j, H) {
            var E = typeof j != "string" ? "sc" : Ls(j);
            Dr[E] = (Dr[E] || 0) + 1;
            var k = "".concat(E, "-").concat(ca(hr + E + Dr[E]));
            return H ? "".concat(H, "-").concat(k) : k;
          })(t.displayName, t.parentComponentId)
        : l,
    d = t.displayName,
    f =
      d === void 0
        ? (function (j) {
            return xr(j) ? "styled.".concat(j) : "Styled(".concat(ed(j), ")");
          })(e)
        : d,
    y =
      t.displayName && t.componentId
        ? "".concat(Ls(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    _ = s && n.attrs ? n.attrs.concat(o).filter(Boolean) : o,
    x = t.shouldForwardProp;
  if (s && n.shouldForwardProp) {
    var Y = n.shouldForwardProp;
    if (t.shouldForwardProp) {
      var N = t.shouldForwardProp;
      x = function (j, H) {
        return Y(j, H) && N(j, H);
      };
    } else x = Y;
  }
  var A = new Od(r, y, s ? n.componentStyle : void 0);
  function P(j, H) {
    return (function (E, k, nt) {
      var xt = E.attrs,
        xa = E.componentStyle,
        Da = E.defaultProps,
        Ma = E.foldedComponentIds,
        Oa = E.styledComponentId,
        Ya = E.target,
        Ca = K.useContext(vt),
        Na = Br(),
        pr = E.shouldForwardProp || Na.shouldForwardProp,
        bs = ia(k, Ca, Da) || Xe,
        he = (function (Mt, it, Ot) {
          for (
            var ot, Te = B(B({}, it), { className: void 0, theme: Ot }), gr = 0;
            gr < Mt.length;
            gr += 1
          ) {
            var Yt = Ae((ot = Mt[gr])) ? ot(Te) : ot;
            for (var De in Yt)
              Te[De] =
                De === "className"
                  ? Fe(Te[De], Yt[De])
                  : De === "style"
                    ? B(B({}, Te[De]), Yt[De])
                    : Yt[De];
          }
          return (
            it.className && (Te.className = Fe(Te.className, it.className)), Te
          );
        })(xt, k, bs),
        Dt = he.as || Ya,
        at = {};
      for (var xe in he)
        he[xe] === void 0 ||
          xe[0] === "$" ||
          xe === "as" ||
          (xe === "theme" && he.theme === bs) ||
          (xe === "forwardedAs"
            ? (at.as = he.forwardedAs)
            : (pr && !pr(xe, Dt)) || (at[xe] = he[xe]));
      var xs = (function (Mt, it) {
          var Ot = Br(),
            ot = Mt.generateAndInjectStyles(it, Ot.styleSheet, Ot.stylis);
          return ot;
        })(xa, he),
        yr = Fe(Ma, Oa);
      return (
        xs && (yr += " " + xs),
        he.className && (yr += " " + he.className),
        (at[xr(Dt) && !oa.has(Dt) ? "class" : "className"] = yr),
        (at.ref = nt),
        w.createElement(Dt, at)
      );
    })(C, j, H);
  }
  P.displayName = f;
  var C = K.forwardRef(P);
  return (
    (C.attrs = _),
    (C.componentStyle = A),
    (C.displayName = f),
    (C.shouldForwardProp = x),
    (C.foldedComponentIds = s
      ? Fe(n.foldedComponentIds, n.styledComponentId)
      : ""),
    (C.styledComponentId = y),
    (C.target = s ? n.target : e),
    Object.defineProperty(C, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (j) {
        this._foldedDefaultProps = s
          ? (function (H) {
              for (var E = [], k = 1; k < arguments.length; k++)
                E[k - 1] = arguments[k];
              for (var nt = 0, xt = E; nt < xt.length; nt++) Gr(H, xt[nt], !0);
              return H;
            })({}, n.defaultProps, j)
          : j;
      },
    }),
    ks(C, function () {
      return ".".concat(C.styledComponentId);
    }),
    a &&
      ma(C, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    C
  );
}
function Vs(e, t) {
  for (var r = [e[0]], s = 0, n = t.length; s < n; s += 1)
    r.push(t[s], e[s + 1]);
  return r;
}
var Zs = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Sa(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Ae(e) || _t(e)) return Zs(Re(Vs(mr, gt([e], t, !0))));
  var s = e;
  return t.length === 0 && s.length === 1 && typeof s[0] == "string"
    ? Re(s)
    : Zs(Re(Vs(s, t)));
}
function Vr(e, t, r) {
  if ((r === void 0 && (r = Xe), !t)) throw Le(1, t);
  var s = function (n) {
    for (var a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
    return e(t, r, Sa.apply(void 0, gt([n], a, !1)));
  };
  return (
    (s.attrs = function (n) {
      return Vr(
        e,
        t,
        B(B({}, r), {
          attrs: Array.prototype.concat(r.attrs, n).filter(Boolean),
        }),
      );
    }),
    (s.withConfig = function (n) {
      return Vr(e, t, B(B({}, r), n));
    }),
    s
  );
}
var ka = function (e) {
    return Vr(Cd, e);
  },
  Nd = ka;
oa.forEach(function (e) {
  Nd[e] = ka(e);
});
var Rd = (function () {
  function e(t, r) {
    (this.rules = t),
      (this.componentId = r),
      (this.isStatic = wa(t)),
      Jt.registerId(this.componentId + 1);
  }
  return (
    (e.prototype.createStyles = function (t, r, s, n) {
      var a = n(Hr(Re(this.rules, r, s, n)), ""),
        i = this.componentId + t;
      s.insertRules(i, i, a);
    }),
    (e.prototype.removeStyles = function (t, r) {
      r.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, r, s, n) {
      t > 2 && Jt.registerId(this.componentId + t),
        this.removeStyles(t, s),
        this.createStyles(t, r, s, n);
    }),
    e
  );
})();
function Td(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var s = Sa.apply(void 0, gt([e], t, !1)),
    n = "sc-global-".concat(ca(JSON.stringify(s))),
    a = new Rd(s, n),
    i = function (l) {
      var u = Br(),
        d = K.useContext(vt),
        f = K.useRef(u.styleSheet.allocateGSInstance(n)).current;
      return (
        u.styleSheet.server && o(f, l, u.styleSheet, d, u.stylis),
        K.useLayoutEffect(
          function () {
            if (!u.styleSheet.server)
              return (
                o(f, l, u.styleSheet, d, u.stylis),
                function () {
                  return a.removeStyles(f, u.styleSheet);
                }
              );
          },
          [f, l, u.styleSheet, d, u.stylis],
        ),
        null
      );
    };
  function o(l, u, d, f, y) {
    if (a.isStatic) a.renderStyles(l, qc, d, y);
    else {
      var _ = B(B({}, u), { theme: ia(u, f, i.defaultProps) });
      a.renderStyles(l, _, d, y);
    }
  }
  return K.memo(i);
}
const Oe = {
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
  Zr = { tab: "768px", mobile: "480px" },
  Ed = Td`
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
    --color-background: ${Oe.background};
    --color-primary-text: ${Oe.primaryText};
    --color-accent: ${Oe.accent};
    --color-border: ${Oe.border};
    --color-button-primary-bg: ${Oe.button.primary.backgroundColor};
    --color-button-primary-text: ${Oe.button.primary.color};
    --color-shadow: ${Oe.shadow};
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

  @media (max-width: ${Zr.tab}) {
    .container {
      padding: 0 3.2rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${Zr.mobile}) {
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
  Pd = { colors: Oe, media: Zr },
  Fd = () =>
    p.jsxs(Yd, {
      theme: Pd,
      children: [
        p.jsx(Ed, {}),
        p.jsx(Mc, {}),
        p.jsxs("main", {
          role: "main",
          className: "main-content",
          children: [p.jsx(xi, {}), p.jsx(Yc, {})],
        }),
        p.jsx(Cc, {}),
      ],
    }),
  ba = document.getElementById("root");
if (!ba) throw new Error("Root element with id 'root' not found.");
const Id = Mr.createRoot(ba);
Id.render(
  p.jsx(K.StrictMode, { children: p.jsx("div", { children: p.jsx(Fd, {}) }) }),
);
export { p as j };
