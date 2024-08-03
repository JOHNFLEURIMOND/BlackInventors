import { j as f } from "./index-fBSlcwz0.js";
import { c as x, r as ee } from "./vendor-CXoAby46.js";
var T = {},
  re = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var r = {}.hasOwnProperty;
    function t() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        u && (o = a(o, n(u)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return t.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var i = "";
      for (var u in o) r.call(o, u) && o[u] && (i = a(i, u));
      return i;
    }
    function a(o, i) {
      return i ? (o ? o + " " + i : o + i) : o;
    }
    e.exports ? ((t.default = t), (e.exports = t)) : (window.classNames = t);
  })();
})(re);
var Ee = re.exports,
  l = {};
Object.defineProperty(l, "__esModule", { value: !0 });
var Ne =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  Me = typeof window < "u" && typeof window.document < "u",
  Le =
    (typeof self > "u" ? "undefined" : Ne(self)) === "object" &&
    self.constructor &&
    self.constructor.name === "DedicatedWorkerGlobalScope",
  Ue =
    typeof process < "u" &&
    process.versions != null &&
    process.versions.node != null,
  ke = function () {
    return (
      (typeof window < "u" && window.name === "nodejs") ||
      navigator.userAgent.includes("Node.js") ||
      navigator.userAgent.includes("jsdom")
    );
  };
l.isBrowser = Me;
l.isWebWorker = Le;
l.isNode = Ue;
l.isJsDom = ke;
var A = {},
  We = typeof x == "object" && x && x.Object === Object && x,
  Fe = We,
  Ve = Fe,
  ze = typeof self == "object" && self && self.Object === Object && self,
  Be = Ve || ze || Function("return this")(),
  Ge = Be,
  Ze = Ge,
  He = Ze.Symbol,
  j = He,
  N = j,
  te = Object.prototype,
  Je = te.hasOwnProperty,
  Ye = te.toString,
  g = N ? N.toStringTag : void 0;
function qe(e) {
  var r = Je.call(e, g),
    t = e[g];
  try {
    e[g] = void 0;
    var n = !0;
  } catch {}
  var a = Ye.call(e);
  return n && (r ? (e[g] = t) : delete e[g]), a;
}
var Xe = qe,
  Qe = Object.prototype,
  Ke = Qe.toString;
function er(e) {
  return Ke.call(e);
}
var rr = er,
  M = j,
  tr = Xe,
  nr = rr,
  ar = "[object Null]",
  or = "[object Undefined]",
  L = M ? M.toStringTag : void 0;
function ir(e) {
  return e == null
    ? e === void 0
      ? or
      : ar
    : L && L in Object(e)
      ? tr(e)
      : nr(e);
}
var ne = ir;
function ur(e, r) {
  return function (t) {
    return e(r(t));
  };
}
var sr = ur,
  cr = sr,
  fr = cr(Object.getPrototypeOf, Object),
  lr = fr;
function dr(e) {
  return e != null && typeof e == "object";
}
var ae = dr,
  pr = ne,
  mr = lr,
  vr = ae,
  br = "[object Object]",
  gr = Function.prototype,
  yr = Object.prototype,
  oe = gr.toString,
  xr = yr.hasOwnProperty,
  Or = oe.call(Object);
function Sr(e) {
  if (!vr(e) || pr(e) != br) return !1;
  var r = mr(e);
  if (r === null) return !0;
  var t = xr.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && oe.call(t) == Or;
}
var hr = Sr,
  C = {};
Object.defineProperty(C, "__esModule", { value: !0 });
var _r =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    },
  Rr = l,
  m = { css: "", js: "" };
if (Rr.isBrowser) {
  var U = window.getComputedStyle(document.documentElement),
    k = Array.prototype.slice.call(U).join(""),
    $r = k.match(/-(moz|webkit|ms)-/),
    wr = k.match(U.OLink === "" && ["", "o"]),
    W = $r || wr,
    F = W ? W[1] : "";
  (m = { css: "-" + F + "-", js: F }),
    m.js !== "ms" &&
      (m = _r({}, m, {
        js: "" + m.js.charAt(0).toUpperCase() + m.js.slice(1),
      }));
}
C.default = m;
var P = {};
function Tr(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n; )
    a[t] = r(e[t], t, e);
  return a;
}
var Ar = Tr,
  jr = Array.isArray,
  Cr = jr,
  Pr = ne,
  Dr = ae,
  Ir = "[object Symbol]";
function Er(e) {
  return typeof e == "symbol" || (Dr(e) && Pr(e) == Ir);
}
var Nr = Er,
  V = j,
  Mr = Ar,
  Lr = Cr,
  Ur = Nr,
  kr = 1 / 0,
  z = V ? V.prototype : void 0,
  B = z ? z.toString : void 0;
function ie(e) {
  if (typeof e == "string") return e;
  if (Lr(e)) return Mr(e, ie) + "";
  if (Ur(e)) return B ? B.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -kr ? "-0" : r;
}
var Wr = ie,
  Fr = Wr;
function Vr(e) {
  return e == null ? "" : Fr(e);
}
var h = Vr;
function zr(e, r, t) {
  var n = -1,
    a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r),
    (t = t > a ? a : t),
    t < 0 && (t += a),
    (a = r > t ? 0 : (t - r) >>> 0),
    (r >>>= 0);
  for (var o = Array(a); ++n < a; ) o[n] = e[n + r];
  return o;
}
var Br = zr,
  Gr = Br;
function Zr(e, r, t) {
  var n = e.length;
  return (t = t === void 0 ? n : t), !r && t >= n ? e : Gr(e, r, t);
}
var Hr = Zr,
  Jr = "\\ud800-\\udfff",
  Yr = "\\u0300-\\u036f",
  qr = "\\ufe20-\\ufe2f",
  Xr = "\\u20d0-\\u20ff",
  Qr = Yr + qr + Xr,
  Kr = "\\ufe0e\\ufe0f",
  et = "\\u200d",
  rt = RegExp("[" + et + Jr + Qr + Kr + "]");
function tt(e) {
  return rt.test(e);
}
var ue = tt;
function nt(e) {
  return e.split("");
}
var at = nt,
  se = "\\ud800-\\udfff",
  ot = "\\u0300-\\u036f",
  it = "\\ufe20-\\ufe2f",
  ut = "\\u20d0-\\u20ff",
  st = ot + it + ut,
  ct = "\\ufe0e\\ufe0f",
  ft = "[" + se + "]",
  $ = "[" + st + "]",
  w = "\\ud83c[\\udffb-\\udfff]",
  lt = "(?:" + $ + "|" + w + ")",
  ce = "[^" + se + "]",
  fe = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  le = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  dt = "\\u200d",
  de = lt + "?",
  pe = "[" + ct + "]?",
  pt = "(?:" + dt + "(?:" + [ce, fe, le].join("|") + ")" + pe + de + ")*",
  mt = pe + de + pt,
  vt = "(?:" + [ce + $ + "?", $, fe, le, ft].join("|") + ")",
  bt = RegExp(w + "(?=" + w + ")|" + vt + mt, "g");
function gt(e) {
  return e.match(bt) || [];
}
var yt = gt,
  xt = at,
  Ot = ue,
  St = yt;
function ht(e) {
  return Ot(e) ? St(e) : xt(e);
}
var _t = ht,
  Rt = Hr,
  $t = ue,
  wt = _t,
  Tt = h;
function At(e) {
  return function (r) {
    r = Tt(r);
    var t = $t(r) ? wt(r) : void 0,
      n = t ? t[0] : r.charAt(0),
      a = t ? Rt(t, 1).join("") : r.slice(1);
    return n[e]() + a;
  };
}
var jt = At,
  Ct = jt,
  Pt = Ct("toUpperCase"),
  Dt = Pt,
  It = h,
  Et = Dt;
function Nt(e) {
  return Et(It(e).toLowerCase());
}
var Mt = Nt;
function Lt(e, r, t, n) {
  var a = -1,
    o = e == null ? 0 : e.length;
  for (n && o && (t = e[++a]); ++a < o; ) t = r(t, e[a], a, e);
  return t;
}
var Ut = Lt;
function kt(e) {
  return function (r) {
    return e == null ? void 0 : e[r];
  };
}
var Wt = kt,
  Ft = Wt,
  Vt = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s",
  },
  zt = Ft(Vt),
  Bt = zt,
  Gt = Bt,
  Zt = h,
  Ht = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  Jt = "\\u0300-\\u036f",
  Yt = "\\ufe20-\\ufe2f",
  qt = "\\u20d0-\\u20ff",
  Xt = Jt + Yt + qt,
  Qt = "[" + Xt + "]",
  Kt = RegExp(Qt, "g");
function en(e) {
  return (e = Zt(e)), e && e.replace(Ht, Gt).replace(Kt, "");
}
var rn = en,
  tn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function nn(e) {
  return e.match(tn) || [];
}
var an = nn,
  on = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function un(e) {
  return on.test(e);
}
var sn = un,
  me = "\\ud800-\\udfff",
  cn = "\\u0300-\\u036f",
  fn = "\\ufe20-\\ufe2f",
  ln = "\\u20d0-\\u20ff",
  dn = cn + fn + ln,
  ve = "\\u2700-\\u27bf",
  be = "a-z\\xdf-\\xf6\\xf8-\\xff",
  pn = "\\xac\\xb1\\xd7\\xf7",
  mn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  vn = "\\u2000-\\u206f",
  bn =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  ge = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  gn = "\\ufe0e\\ufe0f",
  ye = pn + mn + vn + bn,
  xe = "['’]",
  G = "[" + ye + "]",
  yn = "[" + dn + "]",
  Oe = "\\d+",
  xn = "[" + ve + "]",
  Se = "[" + be + "]",
  he = "[^" + me + ye + Oe + ve + be + ge + "]",
  On = "\\ud83c[\\udffb-\\udfff]",
  Sn = "(?:" + yn + "|" + On + ")",
  hn = "[^" + me + "]",
  _e = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Re = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  b = "[" + ge + "]",
  _n = "\\u200d",
  Z = "(?:" + Se + "|" + he + ")",
  Rn = "(?:" + b + "|" + he + ")",
  H = "(?:" + xe + "(?:d|ll|m|re|s|t|ve))?",
  J = "(?:" + xe + "(?:D|LL|M|RE|S|T|VE))?",
  $e = Sn + "?",
  we = "[" + gn + "]?",
  $n = "(?:" + _n + "(?:" + [hn, _e, Re].join("|") + ")" + we + $e + ")*",
  wn = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  Tn = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  An = we + $e + $n,
  jn = "(?:" + [xn, _e, Re].join("|") + ")" + An,
  Cn = RegExp(
    [
      b + "?" + Se + "+" + H + "(?=" + [G, b, "$"].join("|") + ")",
      Rn + "+" + J + "(?=" + [G, b + Z, "$"].join("|") + ")",
      b + "?" + Z + "+" + H,
      b + "+" + J,
      Tn,
      wn,
      Oe,
      jn,
    ].join("|"),
    "g",
  );
function Pn(e) {
  return e.match(Cn) || [];
}
var Dn = Pn,
  In = an,
  En = sn,
  Nn = h,
  Mn = Dn;
function Ln(e, r, t) {
  return (
    (e = Nn(e)),
    (r = t ? void 0 : r),
    r === void 0 ? (En(e) ? Mn(e) : In(e)) : e.match(r) || []
  );
}
var Un = Ln,
  kn = Ut,
  Wn = rn,
  Fn = Un,
  Vn = "['’]",
  zn = RegExp(Vn, "g");
function Bn(e) {
  return function (r) {
    return kn(Fn(Wn(r).replace(zn, "")), e, "");
  };
}
var Gn = Bn,
  Zn = Mt,
  Hn = Gn,
  Jn = Hn(function (e, r, t) {
    return (r = r.toLowerCase()), e + (t ? Zn(r) : r);
  }),
  Yn = Jn;
Object.defineProperty(P, "__esModule", { value: !0 });
var qn = l,
  Xn = Yn,
  Qn = Kn(Xn);
function Kn(e) {
  return e && e.__esModule ? e : { default: e };
}
var ea = function (r, t) {
  if (qn.isBrowser) {
    if ("CSS" in window && "supports" in window.CSS)
      return window.CSS.supports(r, t);
    if ("supportsCSS" in window) return window.supportsCSS(r, t);
    var n = (0, Qn.default)(r),
      a = document.createElement("div"),
      o = n in a.style;
    return (a.style.cssText = r + ":" + t), o && a.style[n] !== "";
  }
  return !1;
};
P.default = ea;
var _ = {};
Object.defineProperty(_, "__esModule", { value: !0 });
_.ANIMATABLE_VALUES = [
  "columnCount",
  "columnGap",
  "columnRule",
  "columnRuleColor",
  "columnRuleWidth",
  "columns",
  "flex",
  "flexBasis",
  "flexGrow",
  "flexShrink",
  "order",
  "perspective",
  "perspectiveOrigin",
  "perspectiveOriginX",
  "perspectiveOriginY",
  "scrollSnapCoordinate",
  "scrollSnapDirection",
  "textDecoration",
  "textDecorationColor",
  "transform",
  "transformOrigin",
  "transformOriginX",
  "transformOriginY",
  "transformOriginZ",
  "transformStyle",
];
_.CSS_PROPERTIES = [
  "alignContent",
  "alignItems",
  "alignSelf",
  "animation",
  "animationDelay",
  "animationDirection",
  "animationDuration",
  "animationFillMode",
  "animationIterationCount",
  "animationName",
  "animationPlayState",
  "animationTimingFunction",
  "appearance",
  "aspectRatio",
  "backfaceVisibility",
  "backgroundClip",
  "borderImage",
  "borderImageSlice",
  "boxShadow",
  "columnCount",
  "columnFill",
  "columnGap",
  "columnRule",
  "columnRuleColor",
  "columnRuleStyle",
  "columnRuleWidth",
  "columnSpan",
  "columnWidth",
  "columns",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexFlow",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "fontFeatureSettings",
  "fontKearning",
  "fontVariantLigatures",
  "justifyContent",
  "grid",
  "gridArea",
  "gridAutoColumns",
  "gridAutoFlow",
  "gridAutoRows",
  "gridColumn",
  "gridColumnEnd",
  "gridColumnStart",
  "gridRow",
  "gridRowEnd",
  "gridRowStart",
  "gridTemplate",
  "gridTemplateAreas",
  "gridTemplateColumns",
  "gridTemplateRows",
  "hyphens",
  "lineBreak",
  "perspective",
  "perspectiveOrigin",
  "perspectiveOriginX",
  "perspectiveOriginY",
  "rubyPosition",
  "scrollSnapCoordinate",
  "scrollSnapDestination",
  "scrollSnapPoints",
  "scrollSnapPointsX",
  "scrollSnapPointsY",
  "scrollSnapType",
  "tabSize",
  "textDecoration",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationStyle",
  "textOrientation",
  "textSizeAdjust",
  "transform",
  "transition",
  "transformOrigin",
  "transformOriginX",
  "transformOriginY",
  "transformOriginZ",
  "transformStyle",
  "transitionProperty",
  "transitionDuration",
  "transitionTimingFunction",
  "transitionDelay",
  "userModify",
  "userSelect",
];
Object.defineProperty(A, "__esModule", { value: !0 });
var y =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    },
  ra = hr,
  Y = D(ra),
  ta = C,
  O = D(ta),
  na = P,
  R = D(na),
  q = _;
function D(e) {
  return e && e.__esModule ? e : { default: e };
}
function S(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
var X = function (r) {
    return r.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  },
  aa = function e(r) {
    if (!(0, Y.default)(r)) return r;
    var t = void 0;
    return Object.keys(r).reduce(function (n, a) {
      var o = a;
      if (((t = r[o]), (0, Y.default)(t))) return y({}, n, S({}, o, e(t)));
      if (
        (q.CSS_PROPERTIES.indexOf(o) !== -1 &&
          !(0, R.default)(X(o), t) &&
          (o = "" + O.default.js + o.charAt(0).toUpperCase() + o.slice(1)),
        a === "display" &&
          r[a] === "flex" &&
          !(0, R.default)("display", "flex"))
      )
        return y(
          {},
          n,
          S(
            {},
            o,
            O.default.js === "ms" ? "-ms-flexbox" : O.default.css + "flex",
          ),
        );
      if (a === "transition") {
        var i = q.ANIMATABLE_VALUES.reduce(function (u, d) {
          var s = X(d),
            p = new RegExp(s, "g");
          if (p.test(r[a]) && !(0, R.default)(s)) {
            var v = r[a].replace(p, "" + O.default.css + s);
            return y({}, u, S({}, o, v));
          }
          return u;
        }, {});
        return y({}, n, i);
      }
      return y({}, n, S({}, o, t));
    }, {});
  };
A.default = aa;
var Te = { exports: {} },
  oa = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ia = oa,
  ua = ia;
function Ae() {}
function je() {}
je.resetWarningCache = Ae;
var sa = function () {
  function e(n, a, o, i, u, d) {
    if (d !== ua) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function r() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: r,
    element: e,
    elementType: e,
    instanceOf: r,
    node: e,
    objectOf: r,
    oneOf: r,
    oneOfType: r,
    shape: r,
    exact: r,
    checkPropTypes: je,
    resetWarningCache: Ae,
  };
  return (t.PropTypes = t), t;
};
Te.exports = sa();
var ca = Te.exports;
Object.defineProperty(T, "__esModule", { value: !0 });
var Ce = (T.Animated = void 0),
  Q =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    },
  fa = (function () {
    function e(r, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(r, a.key, a);
      }
    }
    return function (r, t, n) {
      return t && e(r.prototype, t), n && e(r, n), r;
    };
  })(),
  la = ee,
  K = I(la),
  da = Ee,
  pa = I(da),
  ma = l,
  va = A,
  ba = I(va),
  c = ca;
function I(e) {
  return e && e.__esModule ? e : { default: e };
}
function ga(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function ya(e, r) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function xa(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof r,
    );
  (e.prototype = Object.create(r && r.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    r &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
}
var Oa = (function () {
    var e = ma.isBrowser ? window.navigator.userAgent : "",
      r = e.indexOf("MSIE ");
    return r > -1 && parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) <= 9;
  })(),
  E =
    (Ce =
    T.Animated =
      (function (e) {
        xa(r, e);
        function r(t) {
          ga(this, r);
          var n = ya(
            this,
            (r.__proto__ || Object.getPrototypeOf(r)).call(this, t),
          );
          return (
            (n.getNewState = function (a) {
              var o = a.isVisible,
                i = a.animationIn,
                u = a.animationOut,
                d = a.animationInDuration,
                s = a.animationOutDuration,
                p = a.animationInDelay,
                v = a.animationOutDelay;
              return o
                ? { animation: i, duration: d, delay: p }
                : { animation: u, duration: s, delay: v };
            }),
            (n.state = t.animateOnMount ? n.getNewState(t) : {}),
            n
          );
        }
        return (
          fa(r, [
            {
              key: "componentWillReceiveProps",
              value: function (n) {
                var a = this.props.isVisible;
                a !== n.isVisible &&
                  this.setState(this.getNewState(Q({}, this.props, n)));
              },
            },
            {
              key: "render",
              value: function () {
                var n = this.props,
                  a = n.children,
                  o = n.style,
                  i = n.isVisible,
                  u = n.innerRef,
                  d = n.className,
                  s = this.state,
                  p = s.animation,
                  v = s.delay,
                  Pe = s.duration,
                  De = (0, pa.default)("animated", p, d),
                  Ie =
                    Oa || !p
                      ? {
                          opacity: i ? 1 : 0,
                          transition: "opacity " + v + "ms",
                        }
                      : {};
                return K.default.createElement(
                  "div",
                  {
                    className: De,
                    ref: u,
                    style: (0, ba.default)(
                      Q(
                        {
                          animationDelay: v + "ms",
                          animationDuration: Pe + "ms",
                          pointerEvents: i ? "all" : "none",
                        },
                        o,
                        Ie,
                      ),
                    ),
                  },
                  a,
                );
              },
            },
          ]),
          r
        );
      })(K.default.Component));
E.displayName = "Animated";
E.propTypes = {
  animateOnMount: c.bool,
  isVisible: c.bool,
  animationIn: c.string,
  animationOut: c.string,
  animationInDelay: c.number,
  animationOutDelay: c.number,
  animationInDuration: c.number,
  animationOutDuration: c.number,
  className: c.string,
  style: c.object,
  innerRef: c.func,
};
E.defaultProps = {
  animateOnMount: !0,
  isVisible: !0,
  animationIn: "fadeIn",
  animationOut: "fadeOut",
  animationInDelay: 0,
  animationOutDelay: 0,
  animationInDuration: 1e3,
  animationOutDuration: 1e3,
  className: "",
  style: {},
};
class _a extends ee.Component {
  render() {
    return f.jsx("div", {
      className: "home-container",
      children: f.jsx("div", {
        className: "home-content",
        children: f.jsx(Ce, {
          animationInDelay: 100,
          animationIn: "fadeIn",
          animationOut: "fadeOut",
          isVisible: !0,
          children: f.jsxs("section", {
            className: "hero-section",
            children: [
              f.jsx("h1", {
                className: "hero-title",
                children: "Black Inventors",
              }),
              f.jsx("p", {
                className: "hero-description",
                children:
                  "This is an application that shows famous Black inventors' history.",
              }),
              f.jsx("p", {
                className: "hero-details",
                children:
                  "Higher order functions like reduce to show long-lived inventors, map the inventors alphabetically by first & last name, and filter the inventors from oldest to youngest.",
              }),
              f.jsx("p", {
                className: "hero-action",
                children: f.jsx("a", {
                  className: "hero-button",
                  href: "https://github.com/JOHNFLEURIMOND/BlackInventors",
                  role: "button",
                  "aria-label": "Learn more about Black Inventors",
                  children: "Learn More",
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }
}
export { _a as default };
