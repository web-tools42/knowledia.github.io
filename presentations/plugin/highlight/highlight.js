/*! highlight.js v9.18.0 | BSD3 License | git.io/hljslicense */
!(function (e) {
  var n =
    ("object" == typeof window && window) || ("object" == typeof self && self);
  "undefined" == typeof exports || exports.nodeType
    ? n &&
      ((n.hljs = e({})),
      "function" == typeof define &&
        define.amd &&
        define([], function () {
          return n.hljs;
        }))
    : e(exports);
})(function (a) {
  var f = [],
    o = Object.keys,
    _ = {},
    g = {},
    C = !0,
    n = /^(no-?highlight|plain|text)$/i,
    E = /\blang(?:uage)?-([\w-]+)\b/i,
    t = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
    r = {
      case_insensitive: "cI",
      lexemes: "l",
      contains: "c",
      keywords: "k",
      subLanguage: "sL",
      className: "cN",
      begin: "b",
      beginKeywords: "bK",
      end: "e",
      endsWithParent: "eW",
      illegal: "i",
      excludeBegin: "eB",
      excludeEnd: "eE",
      returnBegin: "rB",
      returnEnd: "rE",
      variants: "v",
      IDENT_RE: "IR",
      UNDERSCORE_IDENT_RE: "UIR",
      NUMBER_RE: "NR",
      C_NUMBER_RE: "CNR",
      BINARY_NUMBER_RE: "BNR",
      RE_STARTERS_RE: "RSR",
      BACKSLASH_ESCAPE: "BE",
      APOS_STRING_MODE: "ASM",
      QUOTE_STRING_MODE: "QSM",
      PHRASAL_WORDS_MODE: "PWM",
      C_LINE_COMMENT_MODE: "CLCM",
      C_BLOCK_COMMENT_MODE: "CBCM",
      HASH_COMMENT_MODE: "HCM",
      NUMBER_MODE: "NM",
      C_NUMBER_MODE: "CNM",
      BINARY_NUMBER_MODE: "BNM",
      CSS_NUMBER_MODE: "CSSNM",
      REGEXP_MODE: "RM",
      TITLE_MODE: "TM",
      UNDERSCORE_TITLE_MODE: "UTM",
      COMMENT: "C",
      beginRe: "bR",
      endRe: "eR",
      illegalRe: "iR",
      lexemesRe: "lR",
      terminators: "t",
      terminator_end: "tE",
    },
    m = "</span>",
    O =
      "Could not find the language '{}', did you forget to load/include a language module?",
    B = {
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: void 0,
    },
    c = "of and for in not or if then".split(" ");
  function x(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function d(e) {
    return e.nodeName.toLowerCase();
  }
  function R(e) {
    return n.test(e);
  }
  function i(e) {
    var n,
      t = {},
      r = Array.prototype.slice.call(arguments, 1);
    for (n in e) t[n] = e[n];
    return (
      r.forEach(function (e) {
        for (n in e) t[n] = e[n];
      }),
      t
    );
  }
  function p(e) {
    var a = [];
    return (
      (function e(n, t) {
        for (var r = n.firstChild; r; r = r.nextSibling)
          3 === r.nodeType
            ? (t += r.nodeValue.length)
            : 1 === r.nodeType &&
              (a.push({ event: "start", offset: t, node: r }),
              (t = e(r, t)),
              d(r).match(/br|hr|img|input/) ||
                a.push({ event: "stop", offset: t, node: r }));
        return t;
      })(e, 0),
      a
    );
  }
  function v(e, n, t) {
    var r = 0,
      a = "",
      i = [];
    function o() {
      return e.length && n.length
        ? e[0].offset !== n[0].offset
          ? e[0].offset < n[0].offset
            ? e
            : n
          : "start" === n[0].event
          ? e
          : n
        : e.length
        ? e
        : n;
    }
    function c(e) {
      a +=
        "<" +
        d(e) +
        f.map
          .call(e.attributes, function (e) {
            return (
              " " + e.nodeName + '="' + x(e.value).replace(/"/g, "&quot;") + '"'
            );
          })
          .join("") +
        ">";
    }
    function l(e) {
      a += "</" + d(e) + ">";
    }
    function u(e) {
      ("start" === e.event ? c : l)(e.node);
    }
    for (; e.length || n.length; ) {
      var s = o();
      if (((a += x(t.substring(r, s[0].offset))), (r = s[0].offset), s === e)) {
        for (
          i.reverse().forEach(l);
          u(s.splice(0, 1)[0]),
            (s = o()) === e && s.length && s[0].offset === r;

        );
        i.reverse().forEach(c);
      } else
        "start" === s[0].event ? i.push(s[0].node) : i.pop(),
          u(s.splice(0, 1)[0]);
    }
    return a + x(t.substr(r));
  }
  function l(n) {
    return (
      n.v &&
        !n.cached_variants &&
        (n.cached_variants = n.v.map(function (e) {
          return i(n, { v: null }, e);
        })),
      n.cached_variants
        ? n.cached_variants
        : (function e(n) {
            return !!n && (n.eW || e(n.starts));
          })(n)
        ? [i(n, { starts: n.starts ? i(n.starts) : null })]
        : Object.isFrozen(n)
        ? [i(n)]
        : [n]
    );
  }
  function u(e) {
    if (r && !e.langApiRestored) {
      for (var n in ((e.langApiRestored = !0), r)) e[n] && (e[r[n]] = e[n]);
      (e.c || []).concat(e.v || []).forEach(u);
    }
  }
  function M(n, t) {
    var i = {};
    return (
      "string" == typeof n
        ? r("keyword", n)
        : o(n).forEach(function (e) {
            r(e, n[e]);
          }),
      i
    );
    function r(a, e) {
      t && (e = e.toLowerCase()),
        e.split(" ").forEach(function (e) {
          var n,
            t,
            r = e.split("|");
          i[r[0]] = [
            a,
            ((n = r[0]),
            (t = r[1])
              ? Number(t)
              : (function (e) {
                  return -1 != c.indexOf(e.toLowerCase());
                })(n)
              ? 0
              : 1),
          ];
        });
    }
  }
  function S(r) {
    function s(e) {
      return (e && e.source) || e;
    }
    function f(e, n) {
      return new RegExp(s(e), "m" + (r.cI ? "i" : "") + (n ? "g" : ""));
    }
    function a(a) {
      var i,
        e,
        o = {},
        c = [],
        l = {},
        t = 1;
      function n(e, n) {
        (o[t] = e),
          c.push([e, n]),
          (t += new RegExp(n.toString() + "|").exec("").length - 1 + 1);
      }
      for (var r = 0; r < a.c.length; r++) {
        n((e = a.c[r]), e.bK ? "\\.?(?:" + e.b + ")\\.?" : e.b);
      }
      a.tE && n("end", a.tE), a.i && n("illegal", a.i);
      var u = c.map(function (e) {
        return e[1];
      });
      return (
        (i = f(
          (function (e, n) {
            for (
              var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                r = 0,
                a = "",
                i = 0;
              i < e.length;
              i++
            ) {
              var o = (r += 1),
                c = s(e[i]);
              for (0 < i && (a += n), a += "("; 0 < c.length; ) {
                var l = t.exec(c);
                if (null == l) {
                  a += c;
                  break;
                }
                (a += c.substring(0, l.index)),
                  (c = c.substring(l.index + l[0].length)),
                  "\\" == l[0][0] && l[1]
                    ? (a += "\\" + String(Number(l[1]) + o))
                    : ((a += l[0]), "(" == l[0] && r++);
              }
              a += ")";
            }
            return a;
          })(u, "|"),
          !0
        )),
        (l.lastIndex = 0),
        (l.exec = function (e) {
          var n;
          if (0 === c.length) return null;
          i.lastIndex = l.lastIndex;
          var t = i.exec(e);
          if (!t) return null;
          for (var r = 0; r < t.length; r++)
            if (null != t[r] && null != o["" + r]) {
              n = o["" + r];
              break;
            }
          return (
            "string" == typeof n
              ? ((t.type = n), (t.extra = [a.i, a.tE]))
              : ((t.type = "begin"), (t.rule = n)),
            t
          );
        }),
        l
      );
    }
    if (r.c && -1 != r.c.indexOf("self")) {
      if (!C)
        throw new Error(
          "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
        );
      r.c = r.c.filter(function (e) {
        return "self" != e;
      });
    }
    !(function n(t, e) {
      t.compiled ||
        ((t.compiled = !0),
        (t.k = t.k || t.bK),
        t.k && (t.k = M(t.k, r.cI)),
        (t.lR = f(t.l || /\w+/, !0)),
        e &&
          (t.bK && (t.b = "\\b(" + t.bK.split(" ").join("|") + ")\\b"),
          t.b || (t.b = /\B|\b/),
          (t.bR = f(t.b)),
          t.endSameAsBegin && (t.e = t.b),
          t.e || t.eW || (t.e = /\B|\b/),
          t.e && (t.eR = f(t.e)),
          (t.tE = s(t.e) || ""),
          t.eW && e.tE && (t.tE += (t.e ? "|" : "") + e.tE)),
        t.i && (t.iR = f(t.i)),
        null == t.relevance && (t.relevance = 1),
        t.c || (t.c = []),
        (t.c = Array.prototype.concat.apply(
          [],
          t.c.map(function (e) {
            return l("self" === e ? t : e);
          })
        )),
        t.c.forEach(function (e) {
          n(e, t);
        }),
        t.starts && n(t.starts, e),
        (t.t = a(t)));
    })(r);
  }
  function T(n, e, a, t) {
    var i = e;
    function c(e, n, t, r) {
      if (!t && "" === n) return "";
      if (!e) return n;
      var a = '<span class="' + (r ? "" : B.classPrefix);
      return (a += e + '">') + n + (t ? "" : m);
    }
    function o() {
      (p += (
        null != d.sL
          ? function () {
              var e = "string" == typeof d.sL;
              if (e && !_[d.sL]) return x(v);
              var n = e
                ? T(d.sL, v, !0, R[d.sL])
                : w(v, d.sL.length ? d.sL : void 0);
              return (
                0 < d.relevance && (M += n.relevance),
                e && (R[d.sL] = n.top),
                c(n.language, n.value, !1, !0)
              );
            }
          : function () {
              var e, n, t, r, a, i, o;
              if (!d.k) return x(v);
              for (r = "", n = 0, d.lR.lastIndex = 0, t = d.lR.exec(v); t; )
                (r += x(v.substring(n, t.index))),
                  (a = d),
                  (i = t),
                  (o = g.cI ? i[0].toLowerCase() : i[0]),
                  (e = a.k.hasOwnProperty(o) && a.k[o])
                    ? ((M += e[1]), (r += c(e[0], x(t[0]))))
                    : (r += x(t[0])),
                  (n = d.lR.lastIndex),
                  (t = d.lR.exec(v));
              return r + x(v.substr(n));
            }
      )()),
        (v = "");
    }
    function l(e) {
      (p += e.cN ? c(e.cN, "", !0) : ""),
        (d = Object.create(e, { parent: { value: d } }));
    }
    function u(e) {
      var n = e[0],
        t = e.rule;
      return (
        t &&
          t.endSameAsBegin &&
          (t.eR = new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")),
        t.skip ? (v += n) : (t.eB && (v += n), o(), t.rB || t.eB || (v = n)),
        l(t),
        t.rB ? 0 : n.length
      );
    }
    function s(e) {
      var n = e[0],
        t = i.substr(e.index),
        r = (function e(n, t) {
          if (((r = n.eR), (a = t), (i = r && r.exec(a)) && 0 === i.index)) {
            for (; n.endsParent && n.parent; ) n = n.parent;
            return n;
          }
          var r, a, i;
          if (n.eW) return e(n.parent, t);
        })(d, t);
      if (r) {
        var a = d;
        for (
          a.skip ? (v += n) : (a.rE || a.eE || (v += n), o(), a.eE && (v = n));
          d.cN && (p += m),
            d.skip || d.sL || (M += d.relevance),
            (d = d.parent) !== r.parent;

        );
        return (
          r.starts && (r.endSameAsBegin && (r.starts.eR = r.eR), l(r.starts)),
          a.rE ? 0 : n.length
        );
      }
    }
    var f = {};
    function r(e, n) {
      var t = n && n[0];
      if (((v += e), null == t)) return o(), 0;
      if (
        "begin" == f.type &&
        "end" == n.type &&
        f.index == n.index &&
        "" === t
      )
        return (v += i.slice(n.index, n.index + 1)), 1;
      if ("begin" === (f = n).type) return u(n);
      if ("illegal" === n.type && !a)
        throw new Error(
          'Illegal lexeme "' + t + '" for mode "' + (d.cN || "<unnamed>") + '"'
        );
      if ("end" === n.type) {
        var r = s(n);
        if (null != r) return r;
      }
      return (v += t), t.length;
    }
    var g = D(n);
    if (!g)
      throw (
        (console.error(O.replace("{}", n)),
        new Error('Unknown language: "' + n + '"'))
      );
    S(g);
    var E,
      d = t || g,
      R = {},
      p = "";
    for (E = d; E !== g; E = E.parent) E.cN && (p = c(E.cN, "", !0) + p);
    var v = "",
      M = 0;
    try {
      for (var b, h, N = 0; (d.t.lastIndex = N), (b = d.t.exec(i)); )
        (h = r(i.substring(N, b.index), b)), (N = b.index + h);
      for (r(i.substr(N)), E = d; E.parent; E = E.parent) E.cN && (p += m);
      return { relevance: M, value: p, i: !1, language: n, top: d };
    } catch (e) {
      if (e.message && -1 !== e.message.indexOf("Illegal"))
        return { i: !0, relevance: 0, value: x(i) };
      if (C)
        return {
          relevance: 0,
          value: x(i),
          language: n,
          top: d,
          errorRaised: e,
        };
      throw e;
    }
  }
  function w(t, e) {
    e = e || B.languages || o(_);
    var r = { relevance: 0, value: x(t) },
      a = r;
    return (
      e
        .filter(D)
        .filter(L)
        .forEach(function (e) {
          var n = T(e, t, !1);
          (n.language = e),
            n.relevance > a.relevance && (a = n),
            n.relevance > r.relevance && ((a = r), (r = n));
        }),
      a.language && (r.second_best = a),
      r
    );
  }
  function b(e) {
    return B.tabReplace || B.useBR
      ? e.replace(t, function (e, n) {
          return B.useBR && "\n" === e
            ? "<br>"
            : B.tabReplace
            ? n.replace(/\t/g, B.tabReplace)
            : "";
        })
      : e;
  }
  function s(e) {
    var n,
      t,
      r,
      a,
      i,
      o,
      c,
      l,
      u,
      s,
      f = (function (e) {
        var n,
          t,
          r,
          a,
          i = e.className + " ";
        if (
          ((i += e.parentNode ? e.parentNode.className : ""), (t = E.exec(i)))
        ) {
          var o = D(t[1]);
          return (
            o ||
              (console.warn(O.replace("{}", t[1])),
              console.warn(
                "Falling back to no-highlight mode for this block.",
                e
              )),
            o ? t[1] : "no-highlight"
          );
        }
        for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++)
          if (R((a = i[n])) || D(a)) return a;
      })(e);
    R(f) ||
      (B.useBR
        ? ((n = document.createElement("div")).innerHTML = e.innerHTML
            .replace(/\n/g, "")
            .replace(/<br[ \/]*>/g, "\n"))
        : (n = e),
      (i = n.textContent),
      (r = f ? T(f, i, !0) : w(i)),
      (t = p(n)).length &&
        (((a = document.createElement("div")).innerHTML = r.value),
        (r.value = v(t, p(a), i))),
      (r.value = b(r.value)),
      (e.innerHTML = r.value),
      (e.className =
        ((o = e.className),
        (c = f),
        (l = r.language),
        (u = c ? g[c] : l),
        (s = [o.trim()]),
        o.match(/\bhljs\b/) || s.push("hljs"),
        -1 === o.indexOf(u) && s.push(u),
        s.join(" ").trim())),
      (e.result = { language: r.language, re: r.relevance }),
      r.second_best &&
        (e.second_best = {
          language: r.second_best.language,
          re: r.second_best.relevance,
        }));
  }
  function h() {
    if (!h.called) {
      h.called = !0;
      var e = document.querySelectorAll("pre code");
      f.forEach.call(e, s);
    }
  }
  var N = { disableAutodetect: !0 };
  function D(e) {
    return (e = (e || "").toLowerCase()), _[e] || _[g[e]];
  }
  function L(e) {
    var n = D(e);
    return n && !n.disableAutodetect;
  }
  return (
    (a.highlight = T),
    (a.highlightAuto = w),
    (a.fixMarkup = b),
    (a.highlightBlock = s),
    (a.configure = function (e) {
      B = i(B, e);
    }),
    (a.initHighlighting = h),
    (a.initHighlightingOnLoad = function () {
      window.addEventListener("DOMContentLoaded", h, !1),
        window.addEventListener("load", h, !1);
    }),
    (a.registerLanguage = function (n, e) {
      var t;
      try {
        t = e(a);
      } catch (e) {
        if (
          (console.error(
            "Language definition for '{}' could not be registered.".replace(
              "{}",
              n
            )
          ),
          !C)
        )
          throw e;
        console.error(e), (t = N);
      }
      u((_[n] = t)),
        (t.rawDefinition = e.bind(null, a)),
        t.aliases &&
          t.aliases.forEach(function (e) {
            g[e] = n;
          });
    }),
    (a.listLanguages = function () {
      return o(_);
    }),
    (a.getLanguage = D),
    (a.requireLanguage = function (e) {
      var n = D(e);
      if (n) return n;
      throw new Error(
        "The '{}' language is required, but not loaded.".replace("{}", e)
      );
    }),
    (a.autoDetection = L),
    (a.inherit = i),
    (a.debugMode = function () {
      C = !1;
    }),
    (a.IR = a.IDENT_RE = "[a-zA-Z]\\w*"),
    (a.UIR = a.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
    (a.NR = a.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
    (a.CNR = a.C_NUMBER_RE =
      "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
    (a.BNR = a.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
    (a.RSR = a.RE_STARTERS_RE =
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
    (a.BE = a.BACKSLASH_ESCAPE = { b: "\\\\[\\s\\S]", relevance: 0 }),
    (a.ASM = a.APOS_STRING_MODE =
      { cN: "string", b: "'", e: "'", i: "\\n", c: [a.BE] }),
    (a.QSM = a.QUOTE_STRING_MODE =
      { cN: "string", b: '"', e: '"', i: "\\n", c: [a.BE] }),
    (a.PWM = a.PHRASAL_WORDS_MODE =
      {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
      }),
    (a.C = a.COMMENT =
      function (e, n, t) {
        var r = a.inherit({ cN: "comment", b: e, e: n, c: [] }, t || {});
        return (
          r.c.push(a.PWM),
          r.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            relevance: 0,
          }),
          r
        );
      }),
    (a.CLCM = a.C_LINE_COMMENT_MODE = a.C("//", "$")),
    (a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C("/\\*", "\\*/")),
    (a.HCM = a.HASH_COMMENT_MODE = a.C("#", "$")),
    (a.NM = a.NUMBER_MODE = { cN: "number", b: a.NR, relevance: 0 }),
    (a.CNM = a.C_NUMBER_MODE = { cN: "number", b: a.CNR, relevance: 0 }),
    (a.BNM = a.BINARY_NUMBER_MODE = { cN: "number", b: a.BNR, relevance: 0 }),
    (a.CSSNM = a.CSS_NUMBER_MODE =
      {
        cN: "number",
        b:
          a.NR +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0,
      }),
    (a.RM = a.REGEXP_MODE =
      {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [a.BE, { b: /\[/, e: /\]/, relevance: 0, c: [a.BE] }],
      }),
    (a.TM = a.TITLE_MODE = { cN: "title", b: a.IR, relevance: 0 }),
    (a.UTM = a.UNDERSCORE_TITLE_MODE = { cN: "title", b: a.UIR, relevance: 0 }),
    (a.METHOD_GUARD = { b: "\\.\\s*" + a.UIR, relevance: 0 }),
    [
      a.BE,
      a.ASM,
      a.QSM,
      a.PWM,
      a.C,
      a.CLCM,
      a.CBCM,
      a.HCM,
      a.NM,
      a.CNM,
      a.BNM,
      a.CSSNM,
      a.RM,
      a.TM,
      a.UTM,
      a.METHOD_GUARD,
    ].forEach(function (e) {
      !(function n(t) {
        Object.freeze(t);
        var r = "function" == typeof t;
        Object.getOwnPropertyNames(t).forEach(function (e) {
          !t.hasOwnProperty(e) ||
            null === t[e] ||
            ("object" != typeof t[e] && "function" != typeof t[e]) ||
            (r && ("caller" === e || "callee" === e || "arguments" === e)) ||
            Object.isFrozen(t[e]) ||
            n(t[e]);
        });
        return t;
      })(e);
    }),
    a
  );
});
hljs.registerLanguage("nimrod", function (t) {
  return {
    aliases: ["nim"],
    k: {
      keyword:
        "addr and as asm bind block break case cast const continue converter discard distinct div do elif else end enum except export finally for from generic if import in include interface is isnot iterator let macro method mixin mod nil not notin object of or out proc ptr raise ref return shl shr static template try tuple type using var when while with without xor yield",
      literal: "shared guarded stdin stdout stderr result true false",
      built_in:
        "int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float float32 float64 bool char string cstring pointer expr stmt void auto any range array openarray varargs seq set clong culong cchar cschar cshort cint csize clonglong cfloat cdouble clongdouble cuchar cushort cuint culonglong cstringarray semistatic",
    },
    c: [
      { cN: "meta", b: /{\./, e: /\.}/, relevance: 10 },
      { cN: "string", b: /[a-zA-Z]\w*"/, e: /"/, c: [{ b: /""/ }] },
      { cN: "string", b: /([a-zA-Z]\w*)?"""/, e: /"""/ },
      t.QSM,
      { cN: "type", b: /\b[A-Z]\w+\b/, relevance: 0 },
      {
        cN: "number",
        relevance: 0,
        v: [
          { b: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/ },
          { b: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/ },
          { b: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/ },
          { b: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/ },
        ],
      },
      t.HCM,
    ],
  };
});
hljs.registerLanguage("sas", function (e) {
  return {
    aliases: ["sas", "SAS"],
    cI: !0,
    k: {
      literal:
        "null missing _all_ _automatic_ _character_ _infile_ _n_ _name_ _null_ _numeric_ _user_ _webout_",
      meta: "do if then else end until while abort array attrib by call cards cards4 catname continue datalines datalines4 delete delim delimiter display dm drop endsas error file filename footnote format goto in infile informat input keep label leave length libname link list lostcard merge missing modify options output out page put redirect remove rename replace retain return select set skip startsas stop title update waitsas where window x systask add and alter as cascade check create delete describe distinct drop foreign from group having index insert into in key like message modify msgtype not null on or order primary references reset restrict select set table unique update validate view where",
    },
    c: [
      { cN: "keyword", b: /^\s*(proc [\w\d_]+|data|run|quit)[\s\;]/ },
      { cN: "variable", b: /\&[a-zA-Z_\&][a-zA-Z0-9_]*\.?/ },
      { cN: "emphasis", b: /^\s*datalines|cards.*;/, e: /^\s*;\s*$/ },
      {
        cN: "built_in",
        b: "%(bquote|nrbquote|cmpres|qcmpres|compstor|datatyp|display|do|else|end|eval|global|goto|if|index|input|keydef|label|left|length|let|local|lowcase|macro|mend|nrbquote|nrquote|nrstr|put|qcmpres|qleft|qlowcase|qscan|qsubstr|qsysfunc|qtrim|quote|qupcase|scan|str|substr|superq|syscall|sysevalf|sysexec|sysfunc|sysget|syslput|sysprod|sysrc|sysrput|then|to|trim|unquote|until|upcase|verify|while|window)",
      },
      { cN: "name", b: /%[a-zA-Z_][a-zA-Z_0-9]*/ },
      {
        cN: "meta",
        b: "[^%](abs|addr|airy|arcos|arsin|atan|attrc|attrn|band|betainv|blshift|bnot|bor|brshift|bxor|byte|cdf|ceil|cexist|cinv|close|cnonct|collate|compbl|compound|compress|cos|cosh|css|curobs|cv|daccdb|daccdbsl|daccsl|daccsyd|dacctab|dairy|date|datejul|datepart|datetime|day|dclose|depdb|depdbsl|depdbsl|depsl|depsl|depsyd|depsyd|deptab|deptab|dequote|dhms|dif|digamma|dim|dinfo|dnum|dopen|doptname|doptnum|dread|dropnote|dsname|erf|erfc|exist|exp|fappend|fclose|fcol|fdelete|fetch|fetchobs|fexist|fget|fileexist|filename|fileref|finfo|finv|fipname|fipnamel|fipstate|floor|fnonct|fnote|fopen|foptname|foptnum|fpoint|fpos|fput|fread|frewind|frlen|fsep|fuzz|fwrite|gaminv|gamma|getoption|getvarc|getvarn|hbound|hms|hosthelp|hour|ibessel|index|indexc|indexw|input|inputc|inputn|int|intck|intnx|intrr|irr|jbessel|juldate|kurtosis|lag|lbound|left|length|lgamma|libname|libref|log|log10|log2|logpdf|logpmf|logsdf|lowcase|max|mdy|mean|min|minute|mod|month|mopen|mort|n|netpv|nmiss|normal|note|npv|open|ordinal|pathname|pdf|peek|peekc|pmf|point|poisson|poke|probbeta|probbnml|probchi|probf|probgam|probhypr|probit|probnegb|probnorm|probt|put|putc|putn|qtr|quote|ranbin|rancau|ranexp|rangam|range|rank|rannor|ranpoi|rantbl|rantri|ranuni|repeat|resolve|reverse|rewind|right|round|saving|scan|sdf|second|sign|sin|sinh|skewness|soundex|spedis|sqrt|std|stderr|stfips|stname|stnamel|substr|sum|symget|sysget|sysmsg|sysprod|sysrc|system|tan|tanh|time|timepart|tinv|tnonct|today|translate|tranwrd|trigamma|trim|trimn|trunc|uniform|upcase|uss|var|varfmt|varinfmt|varlabel|varlen|varname|varnum|varray|varrayx|vartype|verify|vformat|vformatd|vformatdx|vformatn|vformatnx|vformatw|vformatwx|vformatx|vinarray|vinarrayx|vinformat|vinformatd|vinformatdx|vinformatn|vinformatnx|vinformatw|vinformatwx|vinformatx|vlabel|vlabelx|vlength|vlengthx|vname|vnamex|vtype|vtypex|weekday|year|yyq|zipfips|zipname|zipnamel|zipstate)[(]",
      },
      { cN: "string", v: [e.ASM, e.QSM] },
      e.C("\\*", ";"),
      e.CBCM,
    ],
  };
});
hljs.registerLanguage("armasm", function (s) {
  return {
    cI: !0,
    aliases: ["arm"],
    l: "\\.?" + s.IR,
    k: {
      meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ",
      built_in:
        "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @",
    },
    c: [
      {
        cN: "keyword",
        b: "\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?",
        e: "\\s",
      },
      s.C("[;@]", "$", { relevance: 0 }),
      s.CBCM,
      s.QSM,
      { cN: "string", b: "'", e: "[^\\\\]'", relevance: 0 },
      { cN: "title", b: "\\|", e: "\\|", i: "\\n", relevance: 0 },
      {
        cN: "number",
        v: [
          { b: "[#$=]?0x[0-9a-f]+" },
          { b: "[#$=]?0b[01]+" },
          { b: "[#$=]\\d+" },
          { b: "\\b\\d+" },
        ],
        relevance: 0,
      },
      {
        cN: "symbol",
        v: [
          { b: "^[a-z_\\.\\$][a-z0-9_\\.\\$]+" },
          { b: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:" },
          { b: "[=#]\\w+" },
        ],
        relevance: 0,
      },
    ],
  };
});
hljs.registerLanguage("taggerscript", function (e) {
  return {
    c: [
      {
        cN: "comment",
        b: /\$noop\(/,
        e: /\)/,
        c: [{ b: /\(/, e: /\)/, c: ["self", { b: /\\./ }] }],
        relevance: 10,
      },
      { cN: "keyword", b: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/, e: /\(/, eE: !0 },
      { cN: "variable", b: /%[_a-zA-Z0-9:]*/, e: "%" },
      { cN: "symbol", b: /\\./ },
    ],
  };
});
hljs.registerLanguage("flix", function (e) {
  var t = {
    cN: "function",
    bK: "def",
    e: /[:={\[(\n;]/,
    eE: !0,
    c: [
      {
        cN: "title",
        b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
      },
    ],
  };
  return {
    k: {
      literal: "true false",
      keyword:
        "case class def else enum if impl import in lat rel index let match namespace switch type yield with",
    },
    c: [
      e.CLCM,
      e.CBCM,
      { cN: "string", b: /'(.|\\[xXuU][a-zA-Z0-9]+)'/ },
      { cN: "string", v: [{ b: '"', e: '"' }] },
      t,
      e.CNM,
    ],
  };
});
hljs.registerLanguage("1c", function (s) {
  var x = "[A-Za-zА-Яа-яёЁ_][A-Za-zА-Яа-яёЁ_0-9]+",
    o =
      "далее возврат вызватьисключение выполнить для если и из или иначе иначеесли исключение каждого конецесли конецпопытки конеццикла не новый перейти перем по пока попытка прервать продолжить тогда цикл экспорт ",
    m = "null истина ложь неопределено",
    t = s.inherit(s.NM),
    l = { cN: "string", b: '"|\\|', e: '"|$', c: [{ b: '""' }] },
    e = {
      b: "'",
      e: "'",
      eB: !0,
      eE: !0,
      c: [{ cN: "number", b: "\\d{4}([\\.\\\\/:-]?\\d{2}){0,5}" }],
    },
    n = s.inherit(s.CLCM);
  return {
    cI: !0,
    l: x,
    k: {
      keyword: o,
      built_in:
        "разделительстраниц разделительстрок символтабуляции ansitooem oemtoansi ввестивидсубконто ввестиперечисление ввестипериод ввестиплансчетов выбранныйплансчетов датагод датамесяц датачисло заголовоксистемы значениевстроку значениеизстроки каталогиб каталогпользователя кодсимв конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца коннедели лог лог10 максимальноеколичествосубконто названиеинтерфейса названиенабораправ назначитьвид назначитьсчет найтиссылки началопериодаби началостандартногоинтервала начгода начквартала начмесяца начнедели номерднягода номерднянедели номернеделигода обработкаожидания основнойжурналрасчетов основнойплансчетов основнойязык очиститьокносообщений периодстр получитьвремята получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта префиксавтонумерации пропись пустоезначение разм разобратьпозициюдокумента рассчитатьрегистрына рассчитатьрегистрыпо симв создатьобъект статусвозврата стрколичествострок сформироватьпозициюдокумента счетпокоду текущеевремя типзначения типзначениястр установитьтана установитьтапо фиксшаблон шаблон acos asin atan base64значение base64строка cos exp log log10 pow sin sqrt tan xmlзначение xmlстрока xmlтип xmlтипзнч активноеокно безопасныйрежим безопасныйрежимразделенияданных булево ввестидату ввестизначение ввестистроку ввестичисло возможностьчтенияxml вопрос восстановитьзначение врег выгрузитьжурналрегистрации выполнитьобработкуоповещения выполнитьпроверкуправдоступа вычислить год данныеформывзначение дата день деньгода деньнедели добавитьмесяц заблокироватьданныедляредактирования заблокироватьработупользователя завершитьработусистемы загрузитьвнешнююкомпоненту закрытьсправку записатьjson записатьxml записатьдатуjson записьжурналарегистрации заполнитьзначениясвойств запроситьразрешениепользователя запуститьприложение запуститьсистему зафиксироватьтранзакцию значениевданныеформы значениевстрокувнутр значениевфайл значениезаполнено значениеизстрокивнутр значениеизфайла изxmlтипа импортмоделиxdto имякомпьютера имяпользователя инициализироватьпредопределенныеданные информацияобошибке каталогбиблиотекимобильногоустройства каталогвременныхфайлов каталогдокументов каталогпрограммы кодироватьстроку кодлокализацииинформационнойбазы кодсимвола командасистемы конецгода конецдня конецквартала конецмесяца конецминуты конецнедели конецчаса конфигурациябазыданныхизмененадинамически конфигурацияизменена копироватьданныеформы копироватьфайл краткоепредставлениеошибки лев макс местноевремя месяц мин минута монопольныйрежим найти найтинедопустимыесимволыxml найтиокнопонавигационнойссылке найтипомеченныенаудаление найтипоссылкам найтифайлы началогода началодня началоквартала началомесяца началоминуты началонедели началочаса начатьзапросразрешенияпользователя начатьзапускприложения начатькопированиефайла начатьперемещениефайла начатьподключениевнешнейкомпоненты начатьподключениерасширенияработыскриптографией начатьподключениерасширенияработысфайлами начатьпоискфайлов начатьполучениекаталогавременныхфайлов начатьполучениекаталогадокументов начатьполучениерабочегокаталогаданныхпользователя начатьполучениефайлов начатьпомещениефайла начатьпомещениефайлов начатьсозданиедвоичныхданныхизфайла начатьсозданиекаталога начатьтранзакцию начатьудалениефайлов начатьустановкувнешнейкомпоненты начатьустановкурасширенияработыскриптографией начатьустановкурасширенияработысфайлами неделягода необходимостьзавершениясоединения номерсеансаинформационнойбазы номерсоединенияинформационнойбазы нрег нстр обновитьинтерфейс обновитьнумерациюобъектов обновитьповторноиспользуемыезначения обработкапрерыванияпользователя объединитьфайлы окр описаниеошибки оповестить оповеститьобизменении отключитьобработчикзапросанастроекклиенталицензирования отключитьобработчикожидания отключитьобработчикоповещения открытьзначение открытьиндекссправки открытьсодержаниесправки открытьсправку открытьформу открытьформумодально отменитьтранзакцию очиститьжурналрегистрации очиститьнастройкипользователя очиститьсообщения параметрыдоступа перейтипонавигационнойссылке переместитьфайл подключитьвнешнююкомпоненту подключитьобработчикзапросанастроекклиенталицензирования подключитьобработчикожидания подключитьобработчикоповещения подключитьрасширениеработыскриптографией подключитьрасширениеработысфайлами подробноепредставлениеошибки показатьвводдаты показатьвводзначения показатьвводстроки показатьвводчисла показатьвопрос показатьзначение показатьинформациюобошибке показатьнакарте показатьоповещениепользователя показатьпредупреждение полноеимяпользователя получитьcomобъект получитьxmlтип получитьадреспоместоположению получитьблокировкусеансов получитьвремязавершенияспящегосеанса получитьвремязасыпанияпассивногосеанса получитьвремяожиданияблокировкиданных получитьданныевыбора получитьдополнительныйпараметрклиенталицензирования получитьдопустимыекодылокализации получитьдопустимыечасовыепояса получитьзаголовокклиентскогоприложения получитьзаголовоксистемы получитьзначенияотборажурналарегистрации получитьидентификаторконфигурации получитьизвременногохранилища получитьимявременногофайла получитьимяклиенталицензирования получитьинформациюэкрановклиента получитьиспользованиежурналарегистрации получитьиспользованиесобытияжурналарегистрации получитькраткийзаголовокприложения получитьмакетоформления получитьмаскувсефайлы получитьмаскувсефайлыклиента получитьмаскувсефайлысервера получитьместоположениепоадресу получитьминимальнуюдлинупаролейпользователей получитьнавигационнуюссылку получитьнавигационнуюссылкуинформационнойбазы получитьобновлениеконфигурациибазыданных получитьобновлениепредопределенныхданныхинформационнойбазы получитьобщиймакет получитьобщуюформу получитьокна получитьоперативнуюотметкувремени получитьотключениебезопасногорежима получитьпараметрыфункциональныхопцийинтерфейса получитьполноеимяпредопределенногозначения получитьпредставлениянавигационныхссылок получитьпроверкусложностипаролейпользователей получитьразделительпути получитьразделительпутиклиента получитьразделительпутисервера получитьсеансыинформационнойбазы получитьскоростьклиентскогосоединения получитьсоединенияинформационнойбазы получитьсообщенияпользователю получитьсоответствиеобъектаиформы получитьсоставстандартногоинтерфейсаodata получитьструктурухранениябазыданных получитьтекущийсеансинформационнойбазы получитьфайл получитьфайлы получитьформу получитьфункциональнуюопцию получитьфункциональнуюопциюинтерфейса получитьчасовойпоясинформационнойбазы пользователиос поместитьвовременноехранилище поместитьфайл поместитьфайлы прав праводоступа предопределенноезначение представлениекодалокализации представлениепериода представлениеправа представлениеприложения представлениесобытияжурналарегистрации представлениечасовогопояса предупреждение прекратитьработусистемы привилегированныйрежим продолжитьвызов прочитатьjson прочитатьxml прочитатьдатуjson пустаястрока рабочийкаталогданныхпользователя разблокироватьданныедляредактирования разделитьфайл разорватьсоединениесвнешнимисточникомданных раскодироватьстроку рольдоступна секунда сигнал символ скопироватьжурналрегистрации смещениелетнеговремени смещениестандартноговремени соединитьбуферыдвоичныхданных создатькаталог создатьфабрикуxdto сокрл сокрлп сокрп сообщить состояние сохранитьзначение сохранитьнастройкипользователя сред стрдлина стрзаканчиваетсяна стрзаменить стрнайти стрначинаетсяс строка строкасоединенияинформационнойбазы стрполучитьстроку стрразделить стрсоединить стрсравнить стрчисловхождений стрчислострок стршаблон текущаядата текущаядатасеанса текущаяуниверсальнаядата текущаяуниверсальнаядатавмиллисекундах текущийвариантинтерфейсаклиентскогоприложения текущийвариантосновногошрифтаклиентскогоприложения текущийкодлокализации текущийрежимзапуска текущийязык текущийязыксистемы тип типзнч транзакцияактивна трег удалитьданныеинформационнойбазы удалитьизвременногохранилища удалитьобъекты удалитьфайлы универсальноевремя установитьбезопасныйрежим установитьбезопасныйрежимразделенияданных установитьблокировкусеансов установитьвнешнююкомпоненту установитьвремязавершенияспящегосеанса установитьвремязасыпанияпассивногосеанса установитьвремяожиданияблокировкиданных установитьзаголовокклиентскогоприложения установитьзаголовоксистемы установитьиспользованиежурналарегистрации установитьиспользованиесобытияжурналарегистрации установитькраткийзаголовокприложения установитьминимальнуюдлинупаролейпользователей установитьмонопольныйрежим установитьнастройкиклиенталицензирования установитьобновлениепредопределенныхданныхинформационнойбазы установитьотключениебезопасногорежима установитьпараметрыфункциональныхопцийинтерфейса установитьпривилегированныйрежим установитьпроверкусложностипаролейпользователей установитьрасширениеработыскриптографией установитьрасширениеработысфайлами установитьсоединениесвнешнимисточникомданных установитьсоответствиеобъектаиформы установитьсоставстандартногоинтерфейсаodata установитьчасовойпоясинформационнойбазы установитьчасовойпояссеанса формат цел час часовойпояс часовойпояссеанса число числопрописью этоадресвременногохранилища wsссылки библиотекакартинок библиотекамакетовоформлениякомпоновкиданных библиотекастилей бизнеспроцессы внешниеисточникиданных внешниеобработки внешниеотчеты встроенныепокупки главныйинтерфейс главныйстиль документы доставляемыеуведомления журналыдокументов задачи информацияобинтернетсоединении использованиерабочейдаты историяработыпользователя константы критерииотбора метаданные обработки отображениерекламы отправкадоставляемыхуведомлений отчеты панельзадачос параметрзапуска параметрысеанса перечисления планывидоврасчета планывидовхарактеристик планыобмена планысчетов полнотекстовыйпоиск пользователиинформационнойбазы последовательности проверкавстроенныхпокупок рабочаядата расширенияконфигурации регистрыбухгалтерии регистрынакопления регистрырасчета регистрысведений регламентныезадания сериализаторxdto справочники средствагеопозиционирования средствакриптографии средствамультимедиа средстваотображениярекламы средствапочты средствателефонии фабрикаxdto файловыепотоки фоновыезадания хранилищанастроек хранилищевариантовотчетов хранилищенастроекданныхформ хранилищеобщихнастроек хранилищепользовательскихнастроекдинамическихсписков хранилищепользовательскихнастроекотчетов хранилищесистемныхнастроек ",
      class:
        "webцвета windowsцвета windowsшрифты библиотекакартинок рамкистиля символы цветастиля шрифтыстиля автоматическоесохранениеданныхформывнастройках автонумерациявформе автораздвижениесерий анимациядиаграммы вариантвыравниванияэлементовизаголовков вариантуправлениявысотойтаблицы вертикальнаяпрокруткаформы вертикальноеположение вертикальноеположениеэлемента видгруппыформы виддекорацииформы виддополненияэлементаформы видизмененияданных видкнопкиформы видпереключателя видподписейкдиаграмме видполяформы видфлажка влияниеразмеранапузырекдиаграммы горизонтальноеположение горизонтальноеположениеэлемента группировкаколонок группировкаподчиненныхэлементовформы группыиэлементы действиеперетаскивания дополнительныйрежимотображения допустимыедействияперетаскивания интервалмеждуэлементамиформы использованиевывода использованиеполосыпрокрутки используемоезначениеточкибиржевойдиаграммы историявыборапривводе источникзначенийоситочекдиаграммы источникзначенияразмерапузырькадиаграммы категориягруппыкоманд максимумсерий начальноеотображениедерева начальноеотображениесписка обновлениетекстаредактирования ориентациядендрограммы ориентациядиаграммы ориентацияметокдиаграммы ориентацияметоксводнойдиаграммы ориентацияэлементаформы отображениевдиаграмме отображениевлегендедиаграммы отображениегруппыкнопок отображениезаголовкашкалыдиаграммы отображениезначенийсводнойдиаграммы отображениезначенияизмерительнойдиаграммы отображениеинтерваладиаграммыганта отображениекнопки отображениекнопкивыбора отображениеобсужденийформы отображениеобычнойгруппы отображениеотрицательныхзначенийпузырьковойдиаграммы отображениепанелипоиска отображениеподсказки отображениепредупрежденияприредактировании отображениеразметкиполосырегулирования отображениестраницформы отображениетаблицы отображениетекстазначениядиаграммыганта отображениеуправленияобычнойгруппы отображениефигурыкнопки палитрацветовдиаграммы поведениеобычнойгруппы поддержкамасштабадендрограммы поддержкамасштабадиаграммыганта поддержкамасштабасводнойдиаграммы поисквтаблицепривводе положениезаголовкаэлементаформы положениекартинкикнопкиформы положениекартинкиэлементаграфическойсхемы положениекоманднойпанелиформы положениекоманднойпанелиэлементаформы положениеопорнойточкиотрисовки положениеподписейкдиаграмме положениеподписейшкалызначенийизмерительнойдиаграммы положениесостоянияпросмотра положениестрокипоиска положениетекстасоединительнойлинии положениеуправленияпоиском положениешкалывремени порядокотображенияточекгоризонтальнойгистограммы порядоксерийвлегендедиаграммы размеркартинки расположениезаголовкашкалыдиаграммы растягиваниеповертикалидиаграммыганта режимавтоотображениясостояния режимвводастроктаблицы режимвыборанезаполненного режимвыделениядаты режимвыделениястрокитаблицы режимвыделениятаблицы режимизмененияразмера режимизменениясвязанногозначения режимиспользованиядиалогапечати режимиспользованияпараметракоманды режиммасштабированияпросмотра режимосновногоокнаклиентскогоприложения режимоткрытияокнаформы режимотображениявыделения режимотображениягеографическойсхемы режимотображениязначенийсерии режимотрисовкисеткиграфическойсхемы режимполупрозрачностидиаграммы режимпробеловдиаграммы режимразмещениянастранице режимредактированияколонки режимсглаживаниядиаграммы режимсглаживанияиндикатора режимсписказадач сквозноевыравнивание сохранениеданныхформывнастройках способзаполнениятекстазаголовкашкалыдиаграммы способопределенияограничивающегозначениядиаграммы стандартнаягруппакоманд стандартноеоформление статусоповещенияпользователя стильстрелки типаппроксимациилиниитрендадиаграммы типдиаграммы типединицышкалывремени типимпортасерийслоягеографическойсхемы типлиниигеографическойсхемы типлиниидиаграммы типмаркерагеографическойсхемы типмаркерадиаграммы типобластиоформления типорганизацииисточникаданныхгеографическойсхемы типотображениясериислоягеографическойсхемы типотображенияточечногообъектагеографическойсхемы типотображенияшкалыэлементалегендыгеографическойсхемы типпоискаобъектовгеографическойсхемы типпроекциигеографическойсхемы типразмещенияизмерений типразмещенияреквизитовизмерений типрамкиэлементауправления типсводнойдиаграммы типсвязидиаграммыганта типсоединениязначенийпосериямдиаграммы типсоединенияточекдиаграммы типсоединительнойлинии типстороныэлементаграфическойсхемы типформыотчета типшкалырадарнойдиаграммы факторлиниитрендадиаграммы фигуракнопки фигурыграфическойсхемы фиксациявтаблице форматдняшкалывремени форматкартинки ширинаподчиненныхэлементовформы виддвижениябухгалтерии виддвижениянакопления видпериодарегистрарасчета видсчета видточкимаршрутабизнеспроцесса использованиеагрегатарегистранакопления использованиегруппиэлементов использованиережимапроведения использованиесреза периодичностьагрегатарегистранакопления режимавтовремя режимзаписидокумента режимпроведениядокумента авторегистрацияизменений допустимыйномерсообщения отправкаэлементаданных получениеэлементаданных использованиерасшифровкитабличногодокумента ориентациястраницы положениеитоговколоноксводнойтаблицы положениеитоговстроксводнойтаблицы положениетекстаотносительнокартинки расположениезаголовкагруппировкитабличногодокумента способчтениязначенийтабличногодокумента типдвустороннейпечати типзаполненияобластитабличногодокумента типкурсоровтабличногодокумента типлиниирисункатабличногодокумента типлинииячейкитабличногодокумента типнаправленияпереходатабличногодокумента типотображениявыделениятабличногодокумента типотображениялинийсводнойтаблицы типразмещениятекстатабличногодокумента типрисункатабличногодокумента типсмещениятабличногодокумента типузоратабличногодокумента типфайлатабличногодокумента точностьпечати чередованиерасположениястраниц отображениевремениэлементовпланировщика типфайлаформатированногодокумента обходрезультатазапроса типзаписизапроса видзаполнениярасшифровкипостроителяотчета типдобавленияпредставлений типизмеренияпостроителяотчета типразмещенияитогов доступкфайлу режимдиалогавыборафайла режимоткрытияфайла типизмеренияпостроителязапроса видданныханализа методкластеризации типединицыинтервалавременианализаданных типзаполнениятаблицырезультатаанализаданных типиспользованиячисловыхзначенийанализаданных типисточникаданныхпоискаассоциаций типколонкианализаданныхдереворешений типколонкианализаданныхкластеризация типколонкианализаданныхобщаястатистика типколонкианализаданныхпоискассоциаций типколонкианализаданныхпоискпоследовательностей типколонкимоделипрогноза типмерырасстоянияанализаданных типотсеченияправилассоциации типполяанализаданных типстандартизациианализаданных типупорядочиванияправилассоциациианализаданных типупорядочиванияшаблоновпоследовательностейанализаданных типупрощениядереварешений wsнаправлениепараметра вариантxpathxs вариантзаписидатыjson вариантпростоготипаxs видгруппымоделиxs видфасетаxdto действиепостроителяdom завершенностьпростоготипаxs завершенностьсоставноготипаxs завершенностьсхемыxs запрещенныеподстановкиxs исключениягруппподстановкиxs категорияиспользованияатрибутаxs категорияограниченияидентичностиxs категорияограниченияпространствименxs методнаследованияxs модельсодержимогоxs назначениетипаxml недопустимыеподстановкиxs обработкапробельныхсимволовxs обработкасодержимогоxs ограничениезначенияxs параметрыотбораузловdom переносстрокjson позициявдокументеdom пробельныесимволыxml типатрибутаxml типзначенияjson типканоническогоxml типкомпонентыxs типпроверкиxml типрезультатаdomxpath типузлаdom типузлаxml формаxml формапредставленияxs форматдатыjson экранированиесимволовjson видсравнениякомпоновкиданных действиеобработкирасшифровкикомпоновкиданных направлениесортировкикомпоновкиданных расположениевложенныхэлементоврезультатакомпоновкиданных расположениеитоговкомпоновкиданных расположениегруппировкикомпоновкиданных расположениеполейгруппировкикомпоновкиданных расположениеполякомпоновкиданных расположениереквизитовкомпоновкиданных расположениересурсовкомпоновкиданных типбухгалтерскогоостаткакомпоновкиданных типвыводатекстакомпоновкиданных типгруппировкикомпоновкиданных типгруппыэлементовотборакомпоновкиданных типдополненияпериодакомпоновкиданных типзаголовкаполейкомпоновкиданных типмакетагруппировкикомпоновкиданных типмакетаобластикомпоновкиданных типостаткакомпоновкиданных типпериодакомпоновкиданных типразмещениятекстакомпоновкиданных типсвязинаборовданныхкомпоновкиданных типэлементарезультатакомпоновкиданных расположениелегендыдиаграммыкомпоновкиданных типпримененияотборакомпоновкиданных режимотображенияэлементанастройкикомпоновкиданных режимотображениянастроеккомпоновкиданных состояниеэлементанастройкикомпоновкиданных способвосстановлениянастроеккомпоновкиданных режимкомпоновкирезультата использованиепараметракомпоновкиданных автопозицияресурсовкомпоновкиданных вариантиспользованиягруппировкикомпоновкиданных расположениересурсоввдиаграммекомпоновкиданных фиксациякомпоновкиданных использованиеусловногооформлениякомпоновкиданных важностьинтернетпочтовогосообщения обработкатекстаинтернетпочтовогосообщения способкодированияинтернетпочтовоговложения способкодированиянеasciiсимволовинтернетпочтовогосообщения типтекстапочтовогосообщения протоколинтернетпочты статусразборапочтовогосообщения режимтранзакциизаписижурналарегистрации статустранзакциизаписижурналарегистрации уровеньжурналарегистрации расположениехранилищасертификатовкриптографии режимвключениясертификатовкриптографии режимпроверкисертификатакриптографии типхранилищасертификатовкриптографии кодировкаименфайловвzipфайле методсжатияzip методшифрованияzip режимвосстановленияпутейфайловzip режимобработкиподкаталоговzip режимсохраненияпутейzip уровеньсжатияzip звуковоеоповещение направлениепереходакстроке позициявпотоке порядокбайтов режимблокировкиданных режимуправленияблокировкойданных сервисвстроенныхпокупок состояниефоновогозадания типподписчикадоставляемыхуведомлений уровеньиспользованиязащищенногосоединенияftp направлениепорядкасхемызапроса типдополненияпериодамисхемызапроса типконтрольнойточкисхемызапроса типобъединениясхемызапроса типпараметрадоступнойтаблицысхемызапроса типсоединениясхемызапроса httpметод автоиспользованиеобщегореквизита автопрефиксномеразадачи вариантвстроенногоязыка видиерархии видрегистранакопления видтаблицывнешнегоисточникаданных записьдвиженийприпроведении заполнениепоследовательностей индексирование использованиебазыпланавидоврасчета использованиебыстроговыбора использованиеобщегореквизита использованиеподчинения использованиеполнотекстовогопоиска использованиеразделяемыхданныхобщегореквизита использованиереквизита назначениеиспользованияприложения назначениерасширенияконфигурации направлениепередачи обновлениепредопределенныхданных оперативноепроведение основноепредставлениевидарасчета основноепредставлениевидахарактеристики основноепредставлениезадачи основноепредставлениепланаобмена основноепредставлениесправочника основноепредставлениесчета перемещениеграницыприпроведении периодичностьномерабизнеспроцесса периодичностьномерадокумента периодичностьрегистрарасчета периодичностьрегистрасведений повторноеиспользованиевозвращаемыхзначений полнотекстовыйпоискпривводепостроке принадлежностьобъекта проведение разделениеаутентификацииобщегореквизита разделениеданныхобщегореквизита разделениерасширенийконфигурацииобщегореквизита режимавтонумерацииобъектов режимзаписирегистра режимиспользованиямодальности режимиспользованиясинхронныхвызововрасширенийплатформыивнешнихкомпонент режимповторногоиспользованиясеансов режимполученияданныхвыборапривводепостроке режимсовместимости режимсовместимостиинтерфейса режимуправленияблокировкойданныхпоумолчанию сериикодовпланавидовхарактеристик сериикодовпланасчетов сериикодовсправочника созданиепривводе способвыбора способпоискастрокипривводепостроке способредактирования типданныхтаблицывнешнегоисточникаданных типкодапланавидоврасчета типкодасправочника типмакета типномерабизнеспроцесса типномерадокумента типномеразадачи типформы удалениедвижений важностьпроблемыприменениярасширенияконфигурации вариантинтерфейсаклиентскогоприложения вариантмасштабаформклиентскогоприложения вариантосновногошрифтаклиентскогоприложения вариантстандартногопериода вариантстандартнойдатыначала видграницы видкартинки видотображенияполнотекстовогопоиска видрамки видсравнения видцвета видчисловогозначения видшрифта допустимаядлина допустимыйзнак использованиеbyteordermark использованиеметаданныхполнотекстовогопоиска источникрасширенийконфигурации клавиша кодвозвратадиалога кодировкаxbase кодировкатекста направлениепоиска направлениесортировки обновлениепредопределенныхданных обновлениеприизмененииданных отображениепанелиразделов проверказаполнения режимдиалогавопрос режимзапускаклиентскогоприложения режимокругления режимоткрытияформприложения режимполнотекстовогопоиска скоростьклиентскогосоединения состояниевнешнегоисточникаданных состояниеобновленияконфигурациибазыданных способвыборасертификатаwindows способкодированиястроки статуссообщения типвнешнейкомпоненты типплатформы типповеденияклавишиenter типэлементаинформацииовыполненииобновленияконфигурациибазыданных уровеньизоляциитранзакций хешфункция частидаты",
      type: "comобъект ftpсоединение httpзапрос httpсервисответ httpсоединение wsопределения wsпрокси xbase анализданных аннотацияxs блокировкаданных буфердвоичныхданных включениеxs выражениекомпоновкиданных генераторслучайныхчисел географическаясхема географическиекоординаты графическаясхема группамоделиxs данныерасшифровкикомпоновкиданных двоичныеданные дендрограмма диаграмма диаграммаганта диалогвыборафайла диалогвыборацвета диалогвыборашрифта диалограсписаниярегламентногозадания диалогредактированиястандартногопериода диапазон документdom документhtml документацияxs доставляемоеуведомление записьdom записьfastinfoset записьhtml записьjson записьxml записьzipфайла записьданных записьтекста записьузловdom запрос защищенноесоединениеopenssl значенияполейрасшифровкикомпоновкиданных извлечениетекста импортxs интернетпочта интернетпочтовоесообщение интернетпочтовыйпрофиль интернетпрокси интернетсоединение информациядляприложенияxs использованиеатрибутаxs использованиесобытияжурналарегистрации источникдоступныхнастроеккомпоновкиданных итераторузловdom картинка квалификаторыдаты квалификаторыдвоичныхданных квалификаторыстроки квалификаторычисла компоновщикмакетакомпоновкиданных компоновщикнастроеккомпоновкиданных конструктормакетаоформлениякомпоновкиданных конструкторнастроеккомпоновкиданных конструкторформатнойстроки линия макеткомпоновкиданных макетобластикомпоновкиданных макетоформлениякомпоновкиданных маскаxs менеджеркриптографии наборсхемxml настройкикомпоновкиданных настройкисериализацииjson обработкакартинок обработкарасшифровкикомпоновкиданных обходдереваdom объявлениеатрибутаxs объявлениенотацииxs объявлениеэлементаxs описаниеиспользованиясобытиядоступжурналарегистрации описаниеиспользованиясобытияотказвдоступежурналарегистрации описаниеобработкирасшифровкикомпоновкиданных описаниепередаваемогофайла описаниетипов определениегруппыатрибутовxs определениегруппымоделиxs определениеограниченияидентичностиxs определениепростоготипаxs определениесоставноготипаxs определениетипадокументаdom определенияxpathxs отборкомпоновкиданных пакетотображаемыхдокументов параметрвыбора параметркомпоновкиданных параметрызаписиjson параметрызаписиxml параметрычтенияxml переопределениеxs планировщик полеанализаданных полекомпоновкиданных построительdom построительзапроса построительотчета построительотчетаанализаданных построительсхемxml поток потоквпамяти почта почтовоесообщение преобразованиеxsl преобразованиекканоническомуxml процессорвыводарезультатакомпоновкиданныхвколлекциюзначений процессорвыводарезультатакомпоновкиданныхвтабличныйдокумент процессоркомпоновкиданных разыменовательпространствименdom рамка расписаниерегламентногозадания расширенноеимяxml результатчтенияданных своднаядиаграмма связьпараметравыбора связьпотипу связьпотипукомпоновкиданных сериализаторxdto сертификатклиентаwindows сертификатклиентафайл сертификаткриптографии сертификатыудостоверяющихцентровwindows сертификатыудостоверяющихцентровфайл сжатиеданных системнаяинформация сообщениепользователю сочетаниеклавиш сравнениезначений стандартнаядатаначала стандартныйпериод схемаxml схемакомпоновкиданных табличныйдокумент текстовыйдокумент тестируемоеприложение типданныхxml уникальныйидентификатор фабрикаxdto файл файловыйпоток фасетдлиныxs фасетколичестваразрядовдробнойчастиxs фасетмаксимальноговключающегозначенияxs фасетмаксимальногоисключающегозначенияxs фасетмаксимальнойдлиныxs фасетминимальноговключающегозначенияxs фасетминимальногоисключающегозначенияxs фасетминимальнойдлиныxs фасетобразцаxs фасетобщегоколичестваразрядовxs фасетперечисленияxs фасетпробельныхсимволовxs фильтрузловdom форматированнаястрока форматированныйдокумент фрагментxs хешированиеданных хранилищезначения цвет чтениеfastinfoset чтениеhtml чтениеjson чтениеxml чтениеzipфайла чтениеданных чтениетекста чтениеузловdom шрифт элементрезультатакомпоновкиданных comsafearray деревозначений массив соответствие списокзначений структура таблицазначений фиксированнаяструктура фиксированноесоответствие фиксированныймассив ",
      literal: m,
    },
    c: [
      {
        cN: "meta",
        l: x,
        b: "#|&",
        e: "$",
        k: {
          "meta-keyword":
            o +
            "загрузитьизфайла вебклиент вместо внешнеесоединение клиент конецобласти мобильноеприложениеклиент мобильноеприложениесервер наклиенте наклиентенасервере наклиентенасерверебезконтекста насервере насерверебезконтекста область перед после сервер толстыйклиентобычноеприложение толстыйклиентуправляемоеприложение тонкийклиент ",
        },
        c: [n],
      },
      {
        cN: "function",
        l: x,
        v: [
          { b: "процедура|функция", e: "\\)", k: "процедура функция" },
          {
            b: "конецпроцедуры|конецфункции",
            k: "конецпроцедуры конецфункции",
          },
        ],
        c: [
          {
            b: "\\(",
            e: "\\)",
            endsParent: !0,
            c: [
              {
                cN: "params",
                l: x,
                b: x,
                e: ",",
                eE: !0,
                eW: !0,
                k: { keyword: "знач", literal: m },
                c: [t, l, e],
              },
              n,
            ],
          },
          s.inherit(s.TM, { b: x }),
        ],
      },
      n,
      { cN: "symbol", b: "~", e: ";|:", eE: !0 },
      t,
      l,
      e,
    ],
  };
});
hljs.registerLanguage("hy", function (e) {
  var t = "a-zA-Z_\\-!.?+*=<>&#'",
    a = "[" + t + "][" + t + "0-9/;:]*",
    i = { b: a, relevance: 0 },
    r = { cN: "number", b: "[-+]?\\d+(\\.\\d+)?", relevance: 0 },
    o = e.inherit(e.QSM, { i: null }),
    n = e.C(";", "$", { relevance: 0 }),
    s = { cN: "literal", b: /\b([Tt]rue|[Ff]alse|nil|None)\b/ },
    l = { b: "[\\[\\{]", e: "[\\]\\}]" },
    c = { cN: "comment", b: "\\^" + a },
    d = e.C("\\^\\{", "\\}"),
    p = { cN: "symbol", b: "[:]{1,2}" + a },
    m = { b: "\\(", e: "\\)" },
    u = { eW: !0, relevance: 0 },
    f = {
      k: {
        "builtin-name":
          "!= % %= & &= * ** **= *= *map + += , --build-class-- --import-- -= . / // //= /= < << <<= <= = > >= >> >>= @ @= ^ ^= abs accumulate all and any ap-compose ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast callable calling-module-name car case cdr chain chr coll? combinations compile compress cond cons cons? continue count curry cut cycle dec def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first flatten float? fn fnc fnr for for* format fraction genexpr gensym get getattr global globals group-by hasattr hash hex id identity if if* if-not if-python2 import in inc input instance? integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass iter iterable? iterate iterator? keyword keyword? lambda last len let lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all map max merge-with method-decorator min multi-decorator multicombinations name neg? next none? nonlocal not not-in not? nth numeric? oct odd? open or ord partition permutations pos? post-route postwalk pow prewalk print product profile/calls profile/cpu put-route quasiquote quote raise range read read-str recursive-replace reduce remove repeat repeatedly repr require rest round route route-with-methods rwm second seq set-comp setattr setv some sorted string string? sum switch symbol? take take-nth take-while tee try unless unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms xi xor yield yield-from zero? zip zip-longest | |= ~",
      },
      l: a,
      cN: "name",
      b: a,
      starts: u,
    },
    h = [m, o, c, d, n, p, l, r, s, i];
  return (
    (m.c = [e.C("comment", ""), f, u]),
    (u.c = h),
    (l.c = h),
    {
      aliases: ["hylang"],
      i: /\S/,
      c: [{ cN: "meta", b: "^#!", e: "$" }, m, o, c, d, n, p, l, r, s],
    }
  );
});
hljs.registerLanguage("prolog", function (e) {
  var c = { b: /\(/, e: /\)/, relevance: 0 },
    b = { b: /\[/, e: /\]/ },
    n = { cN: "comment", b: /%/, e: /$/, c: [e.PWM] },
    r = { cN: "string", b: /`/, e: /`/, c: [e.BE] },
    a = [
      { b: /[a-z][A-Za-z0-9_]*/, relevance: 0 },
      {
        cN: "symbol",
        v: [{ b: /[A-Z][a-zA-Z0-9_]*/ }, { b: /_[A-Za-z0-9_]*/ }],
        relevance: 0,
      },
      c,
      { b: /:-/ },
      b,
      n,
      e.CBCM,
      e.QSM,
      e.ASM,
      r,
      { cN: "string", b: /0\'(\\\'|.)/ },
      { cN: "string", b: /0\'\\s/ },
      e.CNM,
    ];
  return (c.c = a), { c: (b.c = a).concat([{ b: /\.$/ }]) };
});
hljs.registerLanguage("nginx", function (e) {
  var r = {
      cN: "variable",
      v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: "[\\$\\@]" + e.UIR }],
    },
    b = {
      eW: !0,
      l: "[a-z/_]+",
      k: {
        literal:
          "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll",
      },
      relevance: 0,
      i: "=>",
      c: [
        e.HCM,
        {
          cN: "string",
          c: [e.BE, r],
          v: [
            { b: /"/, e: /"/ },
            { b: /'/, e: /'/ },
          ],
        },
        { b: "([a-z]+):/", e: "\\s", eW: !0, eE: !0, c: [r] },
        {
          cN: "regexp",
          c: [e.BE, r],
          v: [
            { b: "\\s\\^", e: "\\s|{|;", rE: !0 },
            { b: "~\\*?\\s+", e: "\\s|{|;", rE: !0 },
            { b: "\\*(\\.[a-z\\-]+)+" },
            { b: "([a-z\\-]+\\.)+\\*" },
          ],
        },
        {
          cN: "number",
          b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b",
        },
        { cN: "number", b: "\\b\\d+[kKmMgGdshdwy]*\\b", relevance: 0 },
        r,
      ],
    };
  return {
    aliases: ["nginxconf"],
    c: [
      e.HCM,
      {
        b: e.UIR + "\\s+{",
        rB: !0,
        e: "{",
        c: [{ cN: "section", b: e.UIR }],
        relevance: 0,
      },
      {
        b: e.UIR + "\\s",
        e: ";|{",
        rB: !0,
        c: [{ cN: "attribute", b: e.UIR, starts: b }],
        relevance: 0,
      },
    ],
    i: "[^\\s\\}]",
  };
});
hljs.registerLanguage("gradle", function (e) {
  return {
    cI: !0,
    k: {
      keyword:
        "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine",
    },
    c: [e.CLCM, e.CBCM, e.ASM, e.QSM, e.NM, e.RM],
  };
});
hljs.registerLanguage("perl", function (e) {
  var t =
      "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
    r = { cN: "subst", b: "[$@]\\{", e: "\\}", k: t },
    s = { b: "->{", e: "}" },
    n = {
      v: [
        { b: /\$\d/ },
        { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ },
        { b: /[\$%@][^\s\w{]/, relevance: 0 },
      ],
    },
    c = [e.BE, r, n],
    a = [
      n,
      e.HCM,
      e.C("^\\=\\w", "\\=cut", { eW: !0 }),
      s,
      {
        cN: "string",
        c: c,
        v: [
          { b: "q[qwxr]?\\s*\\(", e: "\\)", relevance: 5 },
          { b: "q[qwxr]?\\s*\\[", e: "\\]", relevance: 5 },
          { b: "q[qwxr]?\\s*\\{", e: "\\}", relevance: 5 },
          { b: "q[qwxr]?\\s*\\|", e: "\\|", relevance: 5 },
          { b: "q[qwxr]?\\s*\\<", e: "\\>", relevance: 5 },
          { b: "qw\\s+q", e: "q", relevance: 5 },
          { b: "'", e: "'", c: [e.BE] },
          { b: '"', e: '"' },
          { b: "`", e: "`", c: [e.BE] },
          { b: "{\\w+}", c: [], relevance: 0 },
          { b: "-?\\w+\\s*\\=\\>", c: [], relevance: 0 },
        ],
      },
      {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        relevance: 0,
      },
      {
        b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        relevance: 0,
        c: [
          e.HCM,
          {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            relevance: 10,
          },
          {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [e.BE],
            relevance: 0,
          },
        ],
      },
      {
        cN: "function",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        eE: !0,
        relevance: 5,
        c: [e.TM],
      },
      { b: "-\\w\\b", relevance: 0 },
      {
        b: "^__DATA__$",
        e: "^__END__$",
        sL: "mojolicious",
        c: [{ b: "^@@.*", e: "$", cN: "comment" }],
      },
    ];
  return (r.c = a), { aliases: ["pl", "pm"], l: /[\w\.]+/, k: t, c: (s.c = a) };
});
hljs.registerLanguage("gherkin", function (e) {
  return {
    aliases: ["feature"],
    k: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
    c: [
      { cN: "symbol", b: "\\*", relevance: 0 },
      { cN: "meta", b: "@[^@\\s]+" },
      { b: "\\|", e: "\\|\\w*$", c: [{ cN: "string", b: "[^|]+" }] },
      { cN: "variable", b: "<", e: ">" },
      e.HCM,
      { cN: "string", b: '"""', e: '"""' },
      e.QSM,
    ],
  };
});
hljs.registerLanguage("r", function (e) {
  var r = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
  return {
    c: [
      e.HCM,
      {
        b: r,
        l: r,
        k: {
          keyword:
            "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
          literal:
            "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        },
        relevance: 0,
      },
      { cN: "number", b: "0[xX][0-9a-fA-F]+[Li]?\\b", relevance: 0 },
      { cN: "number", b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b", relevance: 0 },
      { cN: "number", b: "\\d+\\.(?!\\d)(?:i\\b)?", relevance: 0 },
      {
        cN: "number",
        b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0,
      },
      { cN: "number", b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b", relevance: 0 },
      { b: "`", e: "`", relevance: 0 },
      {
        cN: "string",
        c: [e.BE],
        v: [
          { b: '"', e: '"' },
          { b: "'", e: "'" },
        ],
      },
    ],
  };
});
hljs.registerLanguage("subunit", function (s) {
  return {
    cI: !0,
    c: [
      { cN: "string", b: "\\[\n(multipart)?", e: "\\]\n" },
      {
        cN: "string",
        b: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z",
      },
      { cN: "string", b: "(\\+|-)\\d+" },
      {
        cN: "keyword",
        relevance: 10,
        v: [
          {
            b: "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?",
          },
          { b: "^progress(:?)(\\s+)?(pop|push)?" },
          { b: "^tags:" },
          { b: "^time:" },
        ],
      },
    ],
  };
});
hljs.registerLanguage("gcode", function (N) {
  var e = [
    N.CLCM,
    N.CBCM,
    N.C(/\(/, /\)/),
    N.inherit(N.CNM, { b: "([-+]?([0-9]*\\.?[0-9]+\\.?))|" + N.CNR }),
    N.inherit(N.ASM, { i: null }),
    N.inherit(N.QSM, { i: null }),
    { cN: "name", b: "([G])([0-9]+\\.?[0-9]?)" },
    { cN: "name", b: "([M])([0-9]+\\.?[0-9]?)" },
    { cN: "attr", b: "(VC|VS|#)", e: "(\\d+)" },
    { cN: "attr", b: "(VZOFX|VZOFY|VZOFZ)" },
    {
      cN: "built_in",
      b: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
      e: "([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])",
    },
    { cN: "symbol", v: [{ b: "N", e: "\\d+", i: "\\W" }] },
  ];
  return {
    aliases: ["nc"],
    cI: !0,
    l: "[A-Z_][A-Z0-9_.]*",
    k: "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR",
    c: [
      { cN: "meta", b: "\\%" },
      { cN: "meta", b: "([O])([0-9]+)" },
    ].concat(e),
  };
});
hljs.registerLanguage("haxe", function (e) {
  return {
    aliases: ["hx"],
    k: {
      keyword:
        "break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while Int Float String Bool Dynamic Void Array ",
      built_in: "trace this",
      literal: "true false null _",
    },
    c: [
      {
        cN: "string",
        b: "'",
        e: "'",
        c: [
          e.BE,
          { cN: "subst", b: "\\$\\{", e: "\\}" },
          { cN: "subst", b: "\\$", e: "\\W}" },
        ],
      },
      e.QSM,
      e.CLCM,
      e.CBCM,
      e.CNM,
      { cN: "meta", b: "@:", e: "$" },
      {
        cN: "meta",
        b: "#",
        e: "$",
        k: { "meta-keyword": "if else elseif end error" },
      },
      {
        cN: "type",
        b: ":[ \t]*",
        e: "[^A-Za-z0-9_ \t\\->]",
        eB: !0,
        eE: !0,
        relevance: 0,
      },
      { cN: "type", b: ":[ \t]*", e: "\\W", eB: !0, eE: !0 },
      { cN: "type", b: "new *", e: "\\W", eB: !0, eE: !0 },
      { cN: "class", bK: "enum", e: "\\{", c: [e.TM] },
      {
        cN: "class",
        bK: "abstract",
        e: "[\\{$]",
        c: [
          { cN: "type", b: "\\(", e: "\\)", eB: !0, eE: !0 },
          { cN: "type", b: "from +", e: "\\W", eB: !0, eE: !0 },
          { cN: "type", b: "to +", e: "\\W", eB: !0, eE: !0 },
          e.TM,
        ],
        k: { keyword: "abstract from to" },
      },
      {
        cN: "class",
        b: "\\b(class|interface) +",
        e: "[\\{$]",
        eE: !0,
        k: "class interface",
        c: [
          {
            cN: "keyword",
            b: "\\b(extends|implements) +",
            k: "extends implements",
            c: [{ cN: "type", b: e.IR, relevance: 0 }],
          },
          e.TM,
        ],
      },
      { cN: "function", bK: "function", e: "\\(", eE: !0, i: "\\S", c: [e.TM] },
    ],
    i: /<\//,
  };
});
hljs.registerLanguage("diff", function (e) {
  return {
    aliases: ["patch"],
    c: [
      {
        cN: "meta",
        relevance: 10,
        v: [
          { b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ },
          { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
          { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ },
        ],
      },
      {
        cN: "comment",
        v: [
          { b: /Index: /, e: /$/ },
          { b: /={3,}/, e: /$/ },
          { b: /^\-{3}/, e: /$/ },
          { b: /^\*{3} /, e: /$/ },
          { b: /^\+{3}/, e: /$/ },
          { b: /^\*{15}$/ },
        ],
      },
      { cN: "addition", b: "^\\+", e: "$" },
      { cN: "deletion", b: "^\\-", e: "$" },
      { cN: "addition", b: "^\\!", e: "$" },
    ],
  };
});
hljs.registerLanguage("clean", function (e) {
  return {
    aliases: ["clean", "icl", "dcl"],
    k: {
      keyword:
        "if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",
      built_in: "Int Real Char Bool",
      literal: "True False",
    },
    c: [
      e.CLCM,
      e.CBCM,
      e.ASM,
      e.QSM,
      e.CNM,
      { b: "->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>" },
    ],
  };
});
hljs.registerLanguage("applescript", function (e) {
  var t = e.inherit(e.QSM, { i: "" }),
    r = { cN: "params", b: "\\(", e: "\\)", c: ["self", e.CNM, t] },
    i = e.C("--", "$"),
    o = [i, e.C("\\(\\*", "\\*\\)", { c: ["self", i] }), e.HCM];
  return {
    aliases: ["osascript"],
    k: {
      keyword:
        "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
      literal:
        "AppleScript false linefeed return pi quote result space tab true",
      built_in:
        "alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year",
    },
    c: [
      t,
      e.CNM,
      {
        cN: "built_in",
        b: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b",
      },
      {
        cN: "literal",
        b: "\\b(text item delimiters|current application|missing value)\\b",
      },
      {
        cN: "keyword",
        b: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference)|POSIX file|POSIX path|(date|time) string|quoted form)\\b",
      },
      { bK: "on", i: "[${=;\\n]", c: [e.UTM, r] },
    ].concat(o),
    i: "//|->|=>|\\[\\[",
  };
});
hljs.registerLanguage("vhdl", function (e) {
  return {
    cI: !0,
    k: {
      keyword:
        "abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package parameter port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable view vmode vprop vunit wait when while with xnor xor",
      built_in:
        "boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed real_vector time_vector",
      literal: "false true note warning error failure line text side width",
    },
    i: "{",
    c: [
      e.CBCM,
      e.C("--", "$"),
      e.QSM,
      {
        cN: "number",
        b: "\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",
        relevance: 0,
      },
      { cN: "string", b: "'(U|X|0|1|Z|W|L|H|-)'", c: [e.BE] },
      { cN: "symbol", b: "'[A-Za-z](_?[A-Za-z0-9])*", c: [e.BE] },
    ],
  };
});
hljs.registerLanguage("scilab", function (e) {
  var s = [
    e.CNM,
    { cN: "string", b: "'|\"", e: "'|\"", c: [e.BE, { b: "''" }] },
  ];
  return {
    aliases: ["sci"],
    l: /%?\w+/,
    k: {
      keyword:
        "abort break case clear catch continue do elseif else endfunction end for function global if pause return resume select try then while",
      literal: "%f %F %t %T %pi %eps %inf %nan %e %i %z %s",
      built_in:
        "abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan type typename warning zeros matrix",
    },
    i: '("|#|/\\*|\\s+/\\w+)',
    c: [
      {
        cN: "function",
        bK: "function",
        e: "$",
        c: [e.UTM, { cN: "params", b: "\\(", e: "\\)" }],
      },
      { b: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)", e: "", relevance: 0 },
      { b: "\\[", e: "\\]'*[\\.']*", relevance: 0, c: s },
      e.C("//", "$"),
    ].concat(s),
  };
});
hljs.registerLanguage("pony", function (e) {
  return {
    k: {
      keyword:
        "actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",
      meta: "iso val tag trn box ref",
      literal: "this false true",
    },
    c: [
      { cN: "type", b: "\\b_?[A-Z][\\w]*", relevance: 0 },
      { cN: "string", b: '"""', e: '"""', relevance: 10 },
      { cN: "string", b: '"', e: '"', c: [e.BE] },
      { cN: "string", b: "'", e: "'", c: [e.BE], relevance: 0 },
      { b: e.IR + "'", relevance: 0 },
      {
        cN: "number",
        b: "(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        relevance: 0,
      },
      e.CLCM,
      e.CBCM,
    ],
  };
});
hljs.registerLanguage("d", function (e) {
  var a = "(0|[1-9][\\d_]*)",
    d =
      "(" +
      a +
      "|0[bB][01_]+|0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))",
    t =
      "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",
    _ = { cN: "number", b: "\\b" + d + "(L|u|U|Lu|LU|uL|UL)?", relevance: 0 },
    r = {
      cN: "number",
      b:
        "\\b(((0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))|((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)))|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))?))([fF]|L|i|[fF]i|Li)?|" +
        d +
        "(i|[fF]i|Li))",
      relevance: 0,
    },
    i = { cN: "string", b: "'(" + t + "|.)", e: "'", i: "." },
    n = { cN: "string", b: '"', c: [{ b: t, relevance: 0 }], e: '"[cwd]?' },
    c = e.C("\\/\\+", "\\+\\/", { c: ["self"], relevance: 10 });
  return {
    l: e.UIR,
    k: {
      keyword:
        "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
      built_in:
        "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
      literal: "false null true",
    },
    c: [
      e.CLCM,
      e.CBCM,
      c,
      { cN: "string", b: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?', relevance: 10 },
      n,
      { cN: "string", b: '[rq]"', e: '"[cwd]?', relevance: 5 },
      { cN: "string", b: "`", e: "`[cwd]?" },
      { cN: "string", b: 'q"\\{', e: '\\}"' },
      r,
      _,
      i,
      { cN: "meta", b: "^#!", e: "$", relevance: 5 },
      { cN: "meta", b: "#(line)", e: "$", relevance: 5 },
      { cN: "keyword", b: "@[a-zA-Z_][a-zA-Z_\\d]*" },
    ],
  };
});
hljs.registerLanguage("makefile", function (e) {
  var i = {
      cN: "variable",
      v: [{ b: "\\$\\(" + e.UIR + "\\)", c: [e.BE] }, { b: /\$[@%<?\^\+\*]/ }],
    },
    r = { cN: "string", b: /"/, e: /"/, c: [e.BE, i] },
    a = {
      cN: "variable",
      b: /\$\([\w-]+\s/,
      e: /\)/,
      k: {
        built_in:
          "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
      },
      c: [i],
    },
    n = { b: "^" + e.UIR + "\\s*(?=[:+?]?=)" },
    t = { cN: "section", b: /^[^\s]+:/, e: /$/, c: [i] };
  return {
    aliases: ["mk", "mak"],
    k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
    l: /[\w-]+/,
    c: [
      e.HCM,
      i,
      r,
      a,
      n,
      {
        cN: "meta",
        b: /^\.PHONY:/,
        e: /$/,
        k: { "meta-keyword": ".PHONY" },
        l: /[\.\w]+/,
      },
      t,
    ],
  };
});
hljs.registerLanguage("livescript", function (e) {
  var t = {
      keyword:
        "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native list map __hasProp __extends __slice __bind __indexOf",
      literal: "true false null undefined yes no on off it that void",
      built_in: "npm require console print module global window document",
    },
    s = "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",
    n = e.inherit(e.TM, { b: s }),
    i = { cN: "subst", b: /#\{/, e: /}/, k: t },
    a = {
      cN: "subst",
      b: /#[A-Za-z$_]/,
      e: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
      k: t,
    },
    c = [
      e.BNM,
      {
        cN: "number",
        b: "(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",
        relevance: 0,
        starts: { e: "(\\s*/)?", relevance: 0 },
      },
      {
        cN: "string",
        v: [
          { b: /'''/, e: /'''/, c: [e.BE] },
          { b: /'/, e: /'/, c: [e.BE] },
          { b: /"""/, e: /"""/, c: [e.BE, i, a] },
          { b: /"/, e: /"/, c: [e.BE, i, a] },
          { b: /\\/, e: /(\s|$)/, eE: !0 },
        ],
      },
      {
        cN: "regexp",
        v: [
          { b: "//", e: "//[gim]*", c: [i, e.HCM] },
          { b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W)/ },
        ],
      },
      { b: "@" + s },
      { b: "``", e: "``", eB: !0, eE: !0, sL: "javascript" },
    ];
  i.c = c;
  var r = {
    cN: "params",
    b: "\\(",
    rB: !0,
    c: [{ b: /\(/, e: /\)/, k: t, c: ["self"].concat(c) }],
  };
  return {
    aliases: ["ls"],
    k: t,
    i: /\/\*/,
    c: c.concat([
      e.C("\\/\\*", "\\*\\/"),
      e.HCM,
      { b: "(#=>|=>|\\|>>|-?->|\\!->)" },
      {
        cN: "function",
        c: [n, r],
        rB: !0,
        v: [
          {
            b: "(" + s + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",
            e: "\\->\\*?",
          },
          {
            b: "(" + s + "\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",
            e: "[-~]{1,2}>\\*?",
          },
          {
            b: "(" + s + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",
            e: "!?[-~]{1,2}>\\*?",
          },
        ],
      },
      {
        cN: "class",
        bK: "class",
        e: "$",
        i: /[:="\[\]]/,
        c: [{ bK: "extends", eW: !0, i: /[:="\[\]]/, c: [n] }, n],
      },
      { b: s + ":", e: ":", rB: !0, rE: !0, relevance: 0 },
    ]),
  };
});
hljs.registerLanguage("kotlin", function (e) {
  var t = {
      keyword:
        "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual trait volatile transient native default",
      built_in:
        "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null",
    },
    a = { cN: "symbol", b: e.UIR + "@" },
    n = { cN: "subst", b: "\\${", e: "}", c: [e.CNM] },
    c = { cN: "variable", b: "\\$" + e.UIR },
    r = {
      cN: "string",
      v: [
        { b: '"""', e: '"""(?=[^"])', c: [c, n] },
        { b: "'", e: "'", i: /\n/, c: [e.BE] },
        { b: '"', e: '"', i: /\n/, c: [e.BE, c, n] },
      ],
    };
  n.c.push(r);
  var i = {
      cN: "meta",
      b:
        "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
        e.UIR +
        ")?",
    },
    l = {
      cN: "meta",
      b: "@" + e.UIR,
      c: [{ b: /\(/, e: /\)/, c: [e.inherit(r, { cN: "meta-string" })] }],
    },
    s = {
      cN: "number",
      b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
      relevance: 0,
    },
    b = e.C("/\\*", "\\*/", { c: [e.CBCM] }),
    o = {
      v: [
        { cN: "type", b: e.UIR },
        { b: /\(/, e: /\)/, c: [] },
      ],
    },
    d = o;
  return (
    (d.v[1].c = [o]),
    (o.v[1].c = [d]),
    {
      aliases: ["kt"],
      k: t,
      c: [
        e.C("/\\*\\*", "\\*/", {
          relevance: 0,
          c: [{ cN: "doctag", b: "@[A-Za-z]+" }],
        }),
        e.CLCM,
        b,
        {
          cN: "keyword",
          b: /\b(break|continue|return|this)\b/,
          starts: { c: [{ cN: "symbol", b: /@\w+/ }] },
        },
        a,
        i,
        l,
        {
          cN: "function",
          bK: "fun",
          e: "[(]|$",
          rB: !0,
          eE: !0,
          k: t,
          i: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
          relevance: 5,
          c: [
            { b: e.UIR + "\\s*\\(", rB: !0, relevance: 0, c: [e.UTM] },
            { cN: "type", b: /</, e: />/, k: "reified", relevance: 0 },
            {
              cN: "params",
              b: /\(/,
              e: /\)/,
              endsParent: !0,
              k: t,
              relevance: 0,
              c: [
                {
                  b: /:/,
                  e: /[=,\/]/,
                  eW: !0,
                  c: [o, e.CLCM, b],
                  relevance: 0,
                },
                e.CLCM,
                b,
                i,
                l,
                r,
                e.CNM,
              ],
            },
            b,
          ],
        },
        {
          cN: "class",
          bK: "class interface trait",
          e: /[:\{(]|$/,
          eE: !0,
          i: "extends implements",
          c: [
            { bK: "public protected internal private constructor" },
            e.UTM,
            { cN: "type", b: /</, e: />/, eB: !0, eE: !0, relevance: 0 },
            { cN: "type", b: /[,:]\s*/, e: /[<\(,]|$/, eB: !0, rE: !0 },
            i,
            l,
          ],
        },
        r,
        { cN: "meta", b: "^#!/usr/bin/env", e: "$", i: "\n" },
        s,
      ],
    }
  );
});
hljs.registerLanguage("ruby", function (e) {
  var c =
      "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    b = {
      keyword:
        "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
      literal: "true false nil",
    },
    r = { cN: "doctag", b: "@[A-Za-z]+" },
    a = { b: "#<", e: ">" },
    n = [
      e.C("#", "$", { c: [r] }),
      e.C("^\\=begin", "^\\=end", { c: [r], relevance: 10 }),
      e.C("^__END__", "\\n$"),
    ],
    s = { cN: "subst", b: "#\\{", e: "}", k: b },
    t = {
      cN: "string",
      c: [e.BE, s],
      v: [
        { b: /'/, e: /'/ },
        { b: /"/, e: /"/ },
        { b: /`/, e: /`/ },
        { b: "%[qQwWx]?\\(", e: "\\)" },
        { b: "%[qQwWx]?\\[", e: "\\]" },
        { b: "%[qQwWx]?{", e: "}" },
        { b: "%[qQwWx]?<", e: ">" },
        { b: "%[qQwWx]?/", e: "/" },
        { b: "%[qQwWx]?%", e: "%" },
        { b: "%[qQwWx]?-", e: "-" },
        { b: "%[qQwWx]?\\|", e: "\\|" },
        { b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ },
        {
          b: /<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,
          rB: !0,
          c: [
            { b: /<<[-~]?'?/ },
            { b: /\w+/, endSameAsBegin: !0, c: [e.BE, s] },
          ],
        },
      ],
    },
    i = { cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: b },
    l = [
      t,
      a,
      {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [
          e.inherit(e.TM, { b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }),
          { b: "<\\s*", c: [{ b: "(" + e.IR + "::)?" + e.IR }] },
        ].concat(n),
      },
      {
        cN: "function",
        bK: "def",
        e: "$|;",
        c: [e.inherit(e.TM, { b: c }), i].concat(n),
      },
      { b: e.IR + "::" },
      { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", relevance: 0 },
      { cN: "symbol", b: ":(?!\\s)", c: [t, { b: c }], relevance: 0 },
      {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        relevance: 0,
      },
      { b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
      { cN: "params", b: /\|/, e: /\|/, k: b },
      {
        b: "(" + e.RSR + "|unless)\\s*",
        k: "unless",
        c: [
          a,
          {
            cN: "regexp",
            c: [e.BE, s],
            i: /\n/,
            v: [
              { b: "/", e: "/[a-z]*" },
              { b: "%r{", e: "}[a-z]*" },
              { b: "%r\\(", e: "\\)[a-z]*" },
              { b: "%r!", e: "![a-z]*" },
              { b: "%r\\[", e: "\\][a-z]*" },
            ],
          },
        ].concat(n),
        relevance: 0,
      },
    ].concat(n);
  s.c = l;
  var d = [
    { b: /^\s*=>/, starts: { e: "$", c: (i.c = l) } },
    {
      cN: "meta",
      b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
      starts: { e: "$", c: l },
    },
  ];
  return {
    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
    k: b,
    i: /\/\*/,
    c: n.concat(d).concat(l),
  };
});
hljs.registerLanguage("bash", function (e) {
  var t = {
      cN: "variable",
      v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
    },
    a = {
      cN: "string",
      b: /"/,
      e: /"/,
      c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }],
    };
  return {
    aliases: ["sh", "zsh"],
    l: /\b-?[a-z\._]+\b/,
    k: {
      keyword: "if then else elif fi for while in do done case esac function",
      literal: "true false",
      built_in:
        "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      _: "-ne -eq -lt -gt -f -d -e -s -l -a",
    },
    c: [
      { cN: "meta", b: /^#![^\n]+sh\s*$/, relevance: 10 },
      {
        cN: "function",
        b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        rB: !0,
        c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })],
        relevance: 0,
      },
      e.HCM,
      a,
      { cN: "", b: /\\"/ },
      { cN: "string", b: /'/, e: /'/ },
      t,
    ],
  };
});
hljs.registerLanguage("dockerfile", function (e) {
  return {
    aliases: ["docker"],
    cI: !0,
    k: "from maintainer expose env arg user onbuild stopsignal",
    c: [
      e.HCM,
      e.ASM,
      e.QSM,
      e.NM,
      {
        bK: "run cmd entrypoint volume add copy workdir label healthcheck shell",
        starts: { e: /[^\\]$/, sL: "bash" },
      },
    ],
    i: "</",
  };
});
hljs.registerLanguage("protobuf", function (e) {
  return {
    k: {
      keyword: "package import option optional required repeated group oneof",
      built_in:
        "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
      literal: "true false",
    },
    c: [
      e.QSM,
      e.NM,
      e.CLCM,
      {
        cN: "class",
        bK: "message enum service",
        e: /\{/,
        i: /\n/,
        c: [e.inherit(e.TM, { starts: { eW: !0, eE: !0 } })],
      },
      { cN: "function", bK: "rpc", e: /;/, eE: !0, k: "rpc returns" },
      { b: /^\s*[A-Z_]+/, e: /\s*=/, eE: !0 },
    ],
  };
});
hljs.registerLanguage("yaml", function (e) {
  var b = "true false yes no null",
    a = {
      cN: "string",
      relevance: 0,
      v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /\S+/ }],
      c: [
        e.BE,
        {
          cN: "template-variable",
          v: [
            { b: "{{", e: "}}" },
            { b: "%{", e: "}" },
          ],
        },
      ],
    };
  return {
    cI: !0,
    aliases: ["yml", "YAML", "yaml"],
    c: [
      {
        cN: "attr",
        v: [
          { b: "\\w[\\w :\\/.-]*:(?=[ \t]|$)" },
          { b: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
          { b: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" },
        ],
      },
      { cN: "meta", b: "^---s*$", relevance: 10 },
      {
        cN: "string",
        b: "[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*",
      },
      { b: "<%[%=-]?", e: "[%-]?%>", sL: "ruby", eB: !0, eE: !0, relevance: 0 },
      { cN: "type", b: "!" + e.UIR },
      { cN: "type", b: "!!" + e.UIR },
      { cN: "meta", b: "&" + e.UIR + "$" },
      { cN: "meta", b: "\\*" + e.UIR + "$" },
      { cN: "bullet", b: "\\-(?=[ ]|$)", relevance: 0 },
      e.HCM,
      { bK: b, k: { literal: b } },
      { cN: "number", b: e.CNR + "\\b" },
      a,
    ],
  };
});
hljs.registerLanguage("ceylon", function (e) {
  var a =
      "assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",
    t = { cN: "subst", eB: !0, eE: !0, b: /``/, e: /``/, k: a, relevance: 10 },
    s = [
      { cN: "string", b: '"""', e: '"""', relevance: 10 },
      { cN: "string", b: '"', e: '"', c: [t] },
      { cN: "string", b: "'", e: "'" },
      {
        cN: "number",
        b: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
        relevance: 0,
      },
    ];
  return (
    (t.c = s),
    {
      k: {
        keyword:
          a +
          " shared abstract formal default actual variable late native deprecatedfinal sealed annotation suppressWarnings small",
        meta: "doc by license see throws tagged",
      },
      i: "\\$[^01]|#[^0-9a-fA-F]",
      c: [
        e.CLCM,
        e.C("/\\*", "\\*/", { c: ["self"] }),
        { cN: "meta", b: '@[a-z]\\w*(?:\\:"[^"]*")?' },
      ].concat(s),
    }
  );
});
hljs.registerLanguage("vim", function (e) {
  return {
    l: /[!#@\w]+/,
    k: {
      keyword:
        "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
      built_in:
        "synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp",
    },
    i: /;/,
    c: [
      e.NM,
      { cN: "string", b: "'", e: "'", i: "\\n" },
      { cN: "string", b: /"(\\"|\n\\|[^"\n])*"/ },
      e.C('"', "$"),
      { cN: "variable", b: /[bwtglsav]:[\w\d_]*/ },
      {
        cN: "function",
        bK: "function function!",
        e: "$",
        relevance: 0,
        c: [e.TM, { cN: "params", b: "\\(", e: "\\)" }],
      },
      { cN: "symbol", b: /<[\w-]+>/ },
    ],
  };
});
hljs.registerLanguage("isbl", function (S) {
  var E = "[A-Za-zА-Яа-яёЁ_!][A-Za-zА-Яа-яёЁ_0-9]*",
    _ = { cN: "number", b: S.NR, relevance: 0 },
    T = {
      cN: "string",
      v: [
        { b: '"', e: '"' },
        { b: "'", e: "'" },
      ],
    },
    R = {
      cN: "doctag",
      b: "\\b(?:TODO|DONE|BEGIN|END|STUB|CHG|FIXME|NOTE|BUG|XXX)\\b",
      relevance: 0,
    },
    O = {
      v: [
        { cN: "comment", b: "//", e: "$", relevance: 0, c: [S.PWM, R] },
        { cN: "comment", b: "/\\*", e: "\\*/", relevance: 0, c: [S.PWM, R] },
      ],
    },
    C = {
      keyword:
        "and и else иначе endexcept endfinally endforeach конецвсе endif конецесли endwhile конецпока except exitfor finally foreach все if если in в not не or или try while пока ",
      built_in:
        "SYSRES_CONST_ACCES_RIGHT_TYPE_EDIT SYSRES_CONST_ACCES_RIGHT_TYPE_FULL SYSRES_CONST_ACCES_RIGHT_TYPE_VIEW SYSRES_CONST_ACCESS_MODE_REQUISITE_CODE SYSRES_CONST_ACCESS_NO_ACCESS_VIEW SYSRES_CONST_ACCESS_NO_ACCESS_VIEW_CODE SYSRES_CONST_ACCESS_RIGHTS_ADD_REQUISITE_CODE SYSRES_CONST_ACCESS_RIGHTS_ADD_REQUISITE_YES_CODE SYSRES_CONST_ACCESS_RIGHTS_CHANGE_REQUISITE_CODE SYSRES_CONST_ACCESS_RIGHTS_CHANGE_REQUISITE_YES_CODE SYSRES_CONST_ACCESS_RIGHTS_DELETE_REQUISITE_CODE SYSRES_CONST_ACCESS_RIGHTS_DELETE_REQUISITE_YES_CODE SYSRES_CONST_ACCESS_RIGHTS_EXECUTE_REQUISITE_CODE SYSRES_CONST_ACCESS_RIGHTS_EXECUTE_REQUISITE_YES_CODE SYSRES_CONST_ACCESS_RIGHTS_NO_ACCESS_REQUISITE_CODE SYSRES_CONST_ACCESS_RIGHTS_NO_ACCESS_REQUISITE_YES_CODE SYSRES_CONST_ACCESS_RIGHTS_RATIFY_REQUISITE_CODE SYSRES_CONST_ACCESS_RIGHTS_RATIFY_REQUISITE_YES_CODE SYSRES_CONST_ACCESS_RIGHTS_REQUISITE_CODE SYSRES_CONST_ACCESS_RIGHTS_VIEW SYSRES_CONST_ACCESS_RIGHTS_VIEW_CODE SYSRES_CONST_ACCESS_RIGHTS_VIEW_REQUISITE_CODE SYSRES_CONST_ACCESS_RIGHTS_VIEW_REQUISITE_YES_CODE SYSRES_CONST_ACCESS_TYPE_CHANGE SYSRES_CONST_ACCESS_TYPE_CHANGE_CODE SYSRES_CONST_ACCESS_TYPE_EXISTS SYSRES_CONST_ACCESS_TYPE_EXISTS_CODE SYSRES_CONST_ACCESS_TYPE_FULL SYSRES_CONST_ACCESS_TYPE_FULL_CODE SYSRES_CONST_ACCESS_TYPE_VIEW SYSRES_CONST_ACCESS_TYPE_VIEW_CODE SYSRES_CONST_ACTION_TYPE_ABORT SYSRES_CONST_ACTION_TYPE_ACCEPT SYSRES_CONST_ACTION_TYPE_ACCESS_RIGHTS SYSRES_CONST_ACTION_TYPE_ADD_ATTACHMENT SYSRES_CONST_ACTION_TYPE_CHANGE_CARD SYSRES_CONST_ACTION_TYPE_CHANGE_KIND SYSRES_CONST_ACTION_TYPE_CHANGE_STORAGE SYSRES_CONST_ACTION_TYPE_CONTINUE SYSRES_CONST_ACTION_TYPE_COPY SYSRES_CONST_ACTION_TYPE_CREATE SYSRES_CONST_ACTION_TYPE_CREATE_VERSION SYSRES_CONST_ACTION_TYPE_DELETE SYSRES_CONST_ACTION_TYPE_DELETE_ATTACHMENT SYSRES_CONST_ACTION_TYPE_DELETE_VERSION SYSRES_CONST_ACTION_TYPE_DISABLE_DELEGATE_ACCESS_RIGHTS SYSRES_CONST_ACTION_TYPE_ENABLE_DELEGATE_ACCESS_RIGHTS SYSRES_CONST_ACTION_TYPE_ENCRYPTION_BY_CERTIFICATE SYSRES_CONST_ACTION_TYPE_ENCRYPTION_BY_CERTIFICATE_AND_PASSWORD SYSRES_CONST_ACTION_TYPE_ENCRYPTION_BY_PASSWORD SYSRES_CONST_ACTION_TYPE_EXPORT_WITH_LOCK SYSRES_CONST_ACTION_TYPE_EXPORT_WITHOUT_LOCK SYSRES_CONST_ACTION_TYPE_IMPORT_WITH_UNLOCK SYSRES_CONST_ACTION_TYPE_IMPORT_WITHOUT_UNLOCK SYSRES_CONST_ACTION_TYPE_LIFE_CYCLE_STAGE SYSRES_CONST_ACTION_TYPE_LOCK SYSRES_CONST_ACTION_TYPE_LOCK_FOR_SERVER SYSRES_CONST_ACTION_TYPE_LOCK_MODIFY SYSRES_CONST_ACTION_TYPE_MARK_AS_READED SYSRES_CONST_ACTION_TYPE_MARK_AS_UNREADED SYSRES_CONST_ACTION_TYPE_MODIFY SYSRES_CONST_ACTION_TYPE_MODIFY_CARD SYSRES_CONST_ACTION_TYPE_MOVE_TO_ARCHIVE SYSRES_CONST_ACTION_TYPE_OFF_ENCRYPTION SYSRES_CONST_ACTION_TYPE_PASSWORD_CHANGE SYSRES_CONST_ACTION_TYPE_PERFORM SYSRES_CONST_ACTION_TYPE_RECOVER_FROM_LOCAL_COPY SYSRES_CONST_ACTION_TYPE_RESTART SYSRES_CONST_ACTION_TYPE_RESTORE_FROM_ARCHIVE SYSRES_CONST_ACTION_TYPE_REVISION SYSRES_CONST_ACTION_TYPE_SEND_BY_MAIL SYSRES_CONST_ACTION_TYPE_SIGN SYSRES_CONST_ACTION_TYPE_START SYSRES_CONST_ACTION_TYPE_UNLOCK SYSRES_CONST_ACTION_TYPE_UNLOCK_FROM_SERVER SYSRES_CONST_ACTION_TYPE_VERSION_STATE SYSRES_CONST_ACTION_TYPE_VERSION_VISIBILITY SYSRES_CONST_ACTION_TYPE_VIEW SYSRES_CONST_ACTION_TYPE_VIEW_SHADOW_COPY SYSRES_CONST_ACTION_TYPE_WORKFLOW_DESCRIPTION_MODIFY SYSRES_CONST_ACTION_TYPE_WRITE_HISTORY SYSRES_CONST_ACTIVE_VERSION_STATE_PICK_VALUE SYSRES_CONST_ADD_REFERENCE_MODE_NAME SYSRES_CONST_ADDITION_REQUISITE_CODE SYSRES_CONST_ADDITIONAL_PARAMS_REQUISITE_CODE SYSRES_CONST_ADITIONAL_JOB_END_DATE_REQUISITE_NAME SYSRES_CONST_ADITIONAL_JOB_READ_REQUISITE_NAME SYSRES_CONST_ADITIONAL_JOB_START_DATE_REQUISITE_NAME SYSRES_CONST_ADITIONAL_JOB_STATE_REQUISITE_NAME SYSRES_CONST_ADMINISTRATION_HISTORY_ADDING_USER_TO_GROUP_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_ADDING_USER_TO_GROUP_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_CREATION_COMP_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_CREATION_COMP_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_CREATION_GROUP_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_CREATION_GROUP_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_CREATION_USER_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_CREATION_USER_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_DATABASE_USER_CREATION SYSRES_CONST_ADMINISTRATION_HISTORY_DATABASE_USER_CREATION_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_DATABASE_USER_DELETION SYSRES_CONST_ADMINISTRATION_HISTORY_DATABASE_USER_DELETION_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_DELETION_COMP_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_DELETION_COMP_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_DELETION_GROUP_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_DELETION_GROUP_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_DELETION_USER_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_DELETION_USER_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_DELETION_USER_FROM_GROUP_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_DELETION_USER_FROM_GROUP_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_GRANTING_FILTERER_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_GRANTING_FILTERER_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_GRANTING_FILTERER_RESTRICTION_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_GRANTING_FILTERER_RESTRICTION_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_GRANTING_PRIVILEGE_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_GRANTING_PRIVILEGE_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_GRANTING_RIGHTS_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_GRANTING_RIGHTS_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_IS_MAIN_SERVER_CHANGED_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_IS_MAIN_SERVER_CHANGED_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_IS_PUBLIC_CHANGED_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_IS_PUBLIC_CHANGED_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_REMOVING_FILTERER_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_REMOVING_FILTERER_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_REMOVING_FILTERER_RESTRICTION_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_REMOVING_FILTERER_RESTRICTION_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_REMOVING_PRIVILEGE_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_REMOVING_PRIVILEGE_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_REMOVING_RIGHTS_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_REMOVING_RIGHTS_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_SERVER_LOGIN_CREATION SYSRES_CONST_ADMINISTRATION_HISTORY_SERVER_LOGIN_CREATION_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_SERVER_LOGIN_DELETION SYSRES_CONST_ADMINISTRATION_HISTORY_SERVER_LOGIN_DELETION_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_CATEGORY_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_CATEGORY_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_COMP_TITLE_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_COMP_TITLE_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_FULL_NAME_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_FULL_NAME_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_GROUP_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_GROUP_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_PARENT_GROUP_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_PARENT_GROUP_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_USER_AUTH_TYPE_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_USER_AUTH_TYPE_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_USER_LOGIN_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_USER_LOGIN_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_USER_STATUS_ACTION SYSRES_CONST_ADMINISTRATION_HISTORY_UPDATING_USER_STATUS_ACTION_CODE SYSRES_CONST_ADMINISTRATION_HISTORY_USER_PASSWORD_CHANGE SYSRES_CONST_ADMINISTRATION_HISTORY_USER_PASSWORD_CHANGE_ACTION SYSRES_CONST_ALL_ACCEPT_CONDITION_RUS SYSRES_CONST_ALL_USERS_GROUP SYSRES_CONST_ALL_USERS_GROUP_NAME SYSRES_CONST_ALL_USERS_SERVER_GROUP_NAME SYSRES_CONST_ALLOWED_ACCESS_TYPE_CODE SYSRES_CONST_ALLOWED_ACCESS_TYPE_NAME SYSRES_CONST_APP_VIEWER_TYPE_REQUISITE_CODE SYSRES_CONST_APPROVING_SIGNATURE_NAME SYSRES_CONST_APPROVING_SIGNATURE_REQUISITE_CODE SYSRES_CONST_ASSISTANT_SUBSTITUE_TYPE SYSRES_CONST_ASSISTANT_SUBSTITUE_TYPE_CODE SYSRES_CONST_ATTACH_TYPE_COMPONENT_TOKEN SYSRES_CONST_ATTACH_TYPE_DOC SYSRES_CONST_ATTACH_TYPE_EDOC SYSRES_CONST_ATTACH_TYPE_FOLDER SYSRES_CONST_ATTACH_TYPE_JOB SYSRES_CONST_ATTACH_TYPE_REFERENCE SYSRES_CONST_ATTACH_TYPE_TASK SYSRES_CONST_AUTH_ENCODED_PASSWORD SYSRES_CONST_AUTH_ENCODED_PASSWORD_CODE SYSRES_CONST_AUTH_NOVELL SYSRES_CONST_AUTH_PASSWORD SYSRES_CONST_AUTH_PASSWORD_CODE SYSRES_CONST_AUTH_WINDOWS SYSRES_CONST_AUTHENTICATING_SIGNATURE_NAME SYSRES_CONST_AUTHENTICATING_SIGNATURE_REQUISITE_CODE SYSRES_CONST_AUTO_ENUM_METHOD_FLAG SYSRES_CONST_AUTO_NUMERATION_CODE SYSRES_CONST_AUTO_STRONG_ENUM_METHOD_FLAG SYSRES_CONST_AUTOTEXT_NAME_REQUISITE_CODE SYSRES_CONST_AUTOTEXT_TEXT_REQUISITE_CODE SYSRES_CONST_AUTOTEXT_USAGE_ALL SYSRES_CONST_AUTOTEXT_USAGE_ALL_CODE SYSRES_CONST_AUTOTEXT_USAGE_SIGN SYSRES_CONST_AUTOTEXT_USAGE_SIGN_CODE SYSRES_CONST_AUTOTEXT_USAGE_WORK SYSRES_CONST_AUTOTEXT_USAGE_WORK_CODE SYSRES_CONST_AUTOTEXT_USE_ANYWHERE_CODE SYSRES_CONST_AUTOTEXT_USE_ON_SIGNING_CODE SYSRES_CONST_AUTOTEXT_USE_ON_WORK_CODE SYSRES_CONST_BEGIN_DATE_REQUISITE_CODE SYSRES_CONST_BLACK_LIFE_CYCLE_STAGE_FONT_COLOR SYSRES_CONST_BLUE_LIFE_CYCLE_STAGE_FONT_COLOR SYSRES_CONST_BTN_PART SYSRES_CONST_CALCULATED_ROLE_TYPE_CODE SYSRES_CONST_CALL_TYPE_VARIABLE_BUTTON_VALUE SYSRES_CONST_CALL_TYPE_VARIABLE_PROGRAM_VALUE SYSRES_CONST_CANCEL_MESSAGE_FUNCTION_RESULT SYSRES_CONST_CARD_PART SYSRES_CONST_CARD_REFERENCE_MODE_NAME SYSRES_CONST_CERTIFICATE_TYPE_REQUISITE_ENCRYPT_VALUE SYSRES_CONST_CERTIFICATE_TYPE_REQUISITE_SIGN_AND_ENCRYPT_VALUE SYSRES_CONST_CERTIFICATE_TYPE_REQUISITE_SIGN_VALUE SYSRES_CONST_CHECK_PARAM_VALUE_DATE_PARAM_TYPE SYSRES_CONST_CHECK_PARAM_VALUE_FLOAT_PARAM_TYPE SYSRES_CONST_CHECK_PARAM_VALUE_INTEGER_PARAM_TYPE SYSRES_CONST_CHECK_PARAM_VALUE_PICK_PARAM_TYPE SYSRES_CONST_CHECK_PARAM_VALUE_REEFRENCE_PARAM_TYPE SYSRES_CONST_CLOSED_RECORD_FLAG_VALUE_FEMININE SYSRES_CONST_CLOSED_RECORD_FLAG_VALUE_MASCULINE SYSRES_CONST_CODE_COMPONENT_TYPE_ADMIN SYSRES_CONST_CODE_COMPONENT_TYPE_DEVELOPER SYSRES_CONST_CODE_COMPONENT_TYPE_DOCS SYSRES_CONST_CODE_COMPONENT_TYPE_EDOC_CARDS SYSRES_CONST_CODE_COMPONENT_TYPE_EXTERNAL_EXECUTABLE SYSRES_CONST_CODE_COMPONENT_TYPE_OTHER SYSRES_CONST_CODE_COMPONENT_TYPE_REFERENCE SYSRES_CONST_CODE_COMPONENT_TYPE_REPORT SYSRES_CONST_CODE_COMPONENT_TYPE_SCRIPT SYSRES_CONST_CODE_COMPONENT_TYPE_URL SYSRES_CONST_CODE_REQUISITE_ACCESS SYSRES_CONST_CODE_REQUISITE_CODE SYSRES_CONST_CODE_REQUISITE_COMPONENT SYSRES_CONST_CODE_REQUISITE_DESCRIPTION SYSRES_CONST_CODE_REQUISITE_EXCLUDE_COMPONENT SYSRES_CONST_CODE_REQUISITE_RECORD SYSRES_CONST_COMMENT_REQ_CODE SYSRES_CONST_COMMON_SETTINGS_REQUISITE_CODE SYSRES_CONST_COMP_CODE_GRD SYSRES_CONST_COMPONENT_GROUP_TYPE_REQUISITE_CODE SYSRES_CONST_COMPONENT_TYPE_ADMIN_COMPONENTS SYSRES_CONST_COMPONENT_TYPE_DEVELOPER_COMPONENTS SYSRES_CONST_COMPONENT_TYPE_DOCS SYSRES_CONST_COMPONENT_TYPE_EDOC_CARDS SYSRES_CONST_COMPONENT_TYPE_EDOCS SYSRES_CONST_COMPONENT_TYPE_EXTERNAL_EXECUTABLE SYSRES_CONST_COMPONENT_TYPE_OTHER SYSRES_CONST_COMPONENT_TYPE_REFERENCE_TYPES SYSRES_CONST_COMPONENT_TYPE_REFERENCES SYSRES_CONST_COMPONENT_TYPE_REPORTS SYSRES_CONST_COMPONENT_TYPE_SCRIPTS SYSRES_CONST_COMPONENT_TYPE_URL SYSRES_CONST_COMPONENTS_REMOTE_SERVERS_VIEW_CODE SYSRES_CONST_CONDITION_BLOCK_DESCRIPTION SYSRES_CONST_CONST_FIRM_STATUS_COMMON SYSRES_CONST_CONST_FIRM_STATUS_INDIVIDUAL SYSRES_CONST_CONST_NEGATIVE_VALUE SYSRES_CONST_CONST_POSITIVE_VALUE SYSRES_CONST_CONST_SERVER_STATUS_DONT_REPLICATE SYSRES_CONST_CONST_SERVER_STATUS_REPLICATE SYSRES_CONST_CONTENTS_REQUISITE_CODE SYSRES_CONST_DATA_TYPE_BOOLEAN SYSRES_CONST_DATA_TYPE_DATE SYSRES_CONST_DATA_TYPE_FLOAT SYSRES_CONST_DATA_TYPE_INTEGER SYSRES_CONST_DATA_TYPE_PICK SYSRES_CONST_DATA_TYPE_REFERENCE SYSRES_CONST_DATA_TYPE_STRING SYSRES_CONST_DATA_TYPE_TEXT SYSRES_CONST_DATA_TYPE_VARIANT SYSRES_CONST_DATE_CLOSE_REQ_CODE SYSRES_CONST_DATE_FORMAT_DATE_ONLY_CHAR SYSRES_CONST_DATE_OPEN_REQ_CODE SYSRES_CONST_DATE_REQUISITE SYSRES_CONST_DATE_REQUISITE_CODE SYSRES_CONST_DATE_REQUISITE_NAME SYSRES_CONST_DATE_REQUISITE_TYPE SYSRES_CONST_DATE_TYPE_CHAR SYSRES_CONST_DATETIME_FORMAT_VALUE SYSRES_CONST_DEA_ACCESS_RIGHTS_ACTION_CODE SYSRES_CONST_DESCRIPTION_LOCALIZE_ID_REQUISITE_CODE SYSRES_CONST_DESCRIPTION_REQUISITE_CODE SYSRES_CONST_DET1_PART SYSRES_CONST_DET2_PART SYSRES_CONST_DET3_PART SYSRES_CONST_DET4_PART SYSRES_CONST_DET5_PART SYSRES_CONST_DET6_PART SYSRES_CONST_DETAIL_DATASET_KEY_REQUISITE_CODE SYSRES_CONST_DETAIL_PICK_REQUISITE_CODE SYSRES_CONST_DETAIL_REQ_CODE SYSRES_CONST_DO_NOT_USE_ACCESS_TYPE_CODE SYSRES_CONST_DO_NOT_USE_ACCESS_TYPE_NAME SYSRES_CONST_DO_NOT_USE_ON_VIEW_ACCESS_TYPE_CODE SYSRES_CONST_DO_NOT_USE_ON_VIEW_ACCESS_TYPE_NAME SYSRES_CONST_DOCUMENT_STORAGES_CODE SYSRES_CONST_DOCUMENT_TEMPLATES_TYPE_NAME SYSRES_CONST_DOUBLE_REQUISITE_CODE SYSRES_CONST_EDITOR_CLOSE_FILE_OBSERV_TYPE_CODE SYSRES_CONST_EDITOR_CLOSE_PROCESS_OBSERV_TYPE_CODE SYSRES_CONST_EDITOR_TYPE_REQUISITE_CODE SYSRES_CONST_EDITORS_APPLICATION_NAME_REQUISITE_CODE SYSRES_CONST_EDITORS_CREATE_SEVERAL_PROCESSES_REQUISITE_CODE SYSRES_CONST_EDITORS_EXTENSION_REQUISITE_CODE SYSRES_CONST_EDITORS_OBSERVER_BY_PROCESS_TYPE SYSRES_CONST_EDITORS_REFERENCE_CODE SYSRES_CONST_EDITORS_REPLACE_SPEC_CHARS_REQUISITE_CODE SYSRES_CONST_EDITORS_USE_PLUGINS_REQUISITE_CODE SYSRES_CONST_EDITORS_VIEW_DOCUMENT_OPENED_TO_EDIT_CODE SYSRES_CONST_EDOC_CARD_TYPE_REQUISITE_CODE SYSRES_CONST_EDOC_CARD_TYPES_LINK_REQUISITE_CODE SYSRES_CONST_EDOC_CERTIFICATE_AND_PASSWORD_ENCODE_CODE SYSRES_CONST_EDOC_CERTIFICATE_ENCODE_CODE SYSRES_CONST_EDOC_DATE_REQUISITE_CODE SYSRES_CONST_EDOC_KIND_REFERENCE_CODE SYSRES_CONST_EDOC_KINDS_BY_TEMPLATE_ACTION_CODE SYSRES_CONST_EDOC_MANAGE_ACCESS_CODE SYSRES_CONST_EDOC_NONE_ENCODE_CODE SYSRES_CONST_EDOC_NUMBER_REQUISITE_CODE SYSRES_CONST_EDOC_PASSWORD_ENCODE_CODE SYSRES_CONST_EDOC_READONLY_ACCESS_CODE SYSRES_CONST_EDOC_SHELL_LIFE_TYPE_VIEW_VALUE SYSRES_CONST_EDOC_SIZE_RESTRICTION_PRIORITY_REQUISITE_CODE SYSRES_CONST_EDOC_STORAGE_CHECK_ACCESS_RIGHTS_REQUISITE_CODE SYSRES_CONST_EDOC_STORAGE_COMPUTER_NAME_REQUISITE_CODE SYSRES_CONST_EDOC_STORAGE_DATABASE_NAME_REQUISITE_CODE SYSRES_CONST_EDOC_STORAGE_EDIT_IN_STORAGE_REQUISITE_CODE SYSRES_CONST_EDOC_STORAGE_LOCAL_PATH_REQUISITE_CODE SYSRES_CONST_EDOC_STORAGE_SHARED_SOURCE_NAME_REQUISITE_CODE SYSRES_CONST_EDOC_TEMPLATE_REQUISITE_CODE SYSRES_CONST_EDOC_TYPES_REFERENCE_CODE SYSRES_CONST_EDOC_VERSION_ACTIVE_STAGE_CODE SYSRES_CONST_EDOC_VERSION_DESIGN_STAGE_CODE SYSRES_CONST_EDOC_VERSION_OBSOLETE_STAGE_CODE SYSRES_CONST_EDOC_WRITE_ACCES_CODE SYSRES_CONST_EDOCUMENT_CARD_REQUISITES_REFERENCE_CODE_SELECTED_REQUISITE SYSRES_CONST_ENCODE_CERTIFICATE_TYPE_CODE SYSRES_CONST_END_DATE_REQUISITE_CODE SYSRES_CONST_ENUMERATION_TYPE_REQUISITE_CODE SYSRES_CONST_EXECUTE_ACCESS_RIGHTS_TYPE_CODE SYSRES_CONST_EXECUTIVE_FILE_STORAGE_TYPE SYSRES_CONST_EXIST_CONST SYSRES_CONST_EXIST_VALUE SYSRES_CONST_EXPORT_LOCK_TYPE_ASK SYSRES_CONST_EXPORT_LOCK_TYPE_WITH_LOCK SYSRES_CONST_EXPORT_LOCK_TYPE_WITHOUT_LOCK SYSRES_CONST_EXPORT_VERSION_TYPE_ASK SYSRES_CONST_EXPORT_VERSION_TYPE_LAST SYSRES_CONST_EXPORT_VERSION_TYPE_LAST_ACTIVE SYSRES_CONST_EXTENSION_REQUISITE_CODE SYSRES_CONST_FILTER_NAME_REQUISITE_CODE SYSRES_CONST_FILTER_REQUISITE_CODE SYSRES_CONST_FILTER_TYPE_COMMON_CODE SYSRES_CONST_FILTER_TYPE_COMMON_NAME SYSRES_CONST_FILTER_TYPE_USER_CODE SYSRES_CONST_FILTER_TYPE_USER_NAME SYSRES_CONST_FILTER_VALUE_REQUISITE_NAME SYSRES_CONST_FLOAT_NUMBER_FORMAT_CHAR SYSRES_CONST_FLOAT_REQUISITE_TYPE SYSRES_CONST_FOLDER_AUTHOR_VALUE SYSRES_CONST_FOLDER_KIND_ANY_OBJECTS SYSRES_CONST_FOLDER_KIND_COMPONENTS SYSRES_CONST_FOLDER_KIND_EDOCS SYSRES_CONST_FOLDER_KIND_JOBS SYSRES_CONST_FOLDER_KIND_TASKS SYSRES_CONST_FOLDER_TYPE_COMMON SYSRES_CONST_FOLDER_TYPE_COMPONENT SYSRES_CONST_FOLDER_TYPE_FAVORITES SYSRES_CONST_FOLDER_TYPE_INBOX SYSRES_CONST_FOLDER_TYPE_OUTBOX SYSRES_CONST_FOLDER_TYPE_QUICK_LAUNCH SYSRES_CONST_FOLDER_TYPE_SEARCH SYSRES_CONST_FOLDER_TYPE_SHORTCUTS SYSRES_CONST_FOLDER_TYPE_USER SYSRES_CONST_FROM_DICTIONARY_ENUM_METHOD_FLAG SYSRES_CONST_FULL_SUBSTITUTE_TYPE SYSRES_CONST_FULL_SUBSTITUTE_TYPE_CODE SYSRES_CONST_FUNCTION_CANCEL_RESULT SYSRES_CONST_FUNCTION_CATEGORY_SYSTEM SYSRES_CONST_FUNCTION_CATEGORY_USER SYSRES_CONST_FUNCTION_FAILURE_RESULT SYSRES_CONST_FUNCTION_SAVE_RESULT SYSRES_CONST_GENERATED_REQUISITE SYSRES_CONST_GREEN_LIFE_CYCLE_STAGE_FONT_COLOR SYSRES_CONST_GROUP_ACCOUNT_TYPE_VALUE_CODE SYSRES_CONST_GROUP_CATEGORY_NORMAL_CODE SYSRES_CONST_GROUP_CATEGORY_NORMAL_NAME SYSRES_CONST_GROUP_CATEGORY_SERVICE_CODE SYSRES_CONST_GROUP_CATEGORY_SERVICE_NAME SYSRES_CONST_GROUP_COMMON_CATEGORY_FIELD_VALUE SYSRES_CONST_GROUP_FULL_NAME_REQUISITE_CODE SYSRES_CONST_GROUP_NAME_REQUISITE_CODE SYSRES_CONST_GROUP_RIGHTS_T_REQUISITE_CODE SYSRES_CONST_GROUP_SERVER_CODES_REQUISITE_CODE SYSRES_CONST_GROUP_SERVER_NAME_REQUISITE_CODE SYSRES_CONST_GROUP_SERVICE_CATEGORY_FIELD_VALUE SYSRES_CONST_GROUP_USER_REQUISITE_CODE SYSRES_CONST_GROUPS_REFERENCE_CODE SYSRES_CONST_GROUPS_REQUISITE_CODE SYSRES_CONST_HIDDEN_MODE_NAME SYSRES_CONST_HIGH_LVL_REQUISITE_CODE SYSRES_CONST_HISTORY_ACTION_CREATE_CODE SYSRES_CONST_HISTORY_ACTION_DELETE_CODE SYSRES_CONST_HISTORY_ACTION_EDIT_CODE SYSRES_CONST_HOUR_CHAR SYSRES_CONST_ID_REQUISITE_CODE SYSRES_CONST_IDSPS_REQUISITE_CODE SYSRES_CONST_IMAGE_MODE_COLOR SYSRES_CONST_IMAGE_MODE_GREYSCALE SYSRES_CONST_IMAGE_MODE_MONOCHROME SYSRES_CONST_IMPORTANCE_HIGH SYSRES_CONST_IMPORTANCE_LOW SYSRES_CONST_IMPORTANCE_NORMAL SYSRES_CONST_IN_DESIGN_VERSION_STATE_PICK_VALUE SYSRES_CONST_INCOMING_WORK_RULE_TYPE_CODE SYSRES_CONST_INT_REQUISITE SYSRES_CONST_INT_REQUISITE_TYPE SYSRES_CONST_INTEGER_NUMBER_FORMAT_CHAR SYSRES_CONST_INTEGER_TYPE_CHAR SYSRES_CONST_IS_GENERATED_REQUISITE_NEGATIVE_VALUE SYSRES_CONST_IS_PUBLIC_ROLE_REQUISITE_CODE SYSRES_CONST_IS_REMOTE_USER_NEGATIVE_VALUE SYSRES_CONST_IS_REMOTE_USER_POSITIVE_VALUE SYSRES_CONST_IS_STORED_REQUISITE_NEGATIVE_VALUE SYSRES_CONST_IS_STORED_REQUISITE_STORED_VALUE SYSRES_CONST_ITALIC_LIFE_CYCLE_STAGE_DRAW_STYLE SYSRES_CONST_JOB_BLOCK_DESCRIPTION SYSRES_CONST_JOB_KIND_CONTROL_JOB SYSRES_CONST_JOB_KIND_JOB SYSRES_CONST_JOB_KIND_NOTICE SYSRES_CONST_JOB_STATE_ABORTED SYSRES_CONST_JOB_STATE_COMPLETE SYSRES_CONST_JOB_STATE_WORKING SYSRES_CONST_KIND_REQUISITE_CODE SYSRES_CONST_KIND_REQUISITE_NAME SYSRES_CONST_KINDS_CREATE_SHADOW_COPIES_REQUISITE_CODE SYSRES_CONST_KINDS_DEFAULT_EDOC_LIFE_STAGE_REQUISITE_CODE SYSRES_CONST_KINDS_EDOC_ALL_TEPLATES_ALLOWED_REQUISITE_CODE SYSRES_CONST_KINDS_EDOC_ALLOW_LIFE_CYCLE_STAGE_CHANGING_REQUISITE_CODE SYSRES_CONST_KINDS_EDOC_ALLOW_MULTIPLE_ACTIVE_VERSIONS_REQUISITE_CODE SYSRES_CONST_KINDS_EDOC_SHARE_ACCES_RIGHTS_BY_DEFAULT_CODE SYSRES_CONST_KINDS_EDOC_TEMPLATE_REQUISITE_CODE SYSRES_CONST_KINDS_EDOC_TYPE_REQUISITE_CODE SYSRES_CONST_KINDS_SIGNERS_REQUISITES_CODE SYSRES_CONST_KOD_INPUT_TYPE SYSRES_CONST_LAST_UPDATE_DATE_REQUISITE_CODE SYSRES_CONST_LIFE_CYCLE_START_STAGE_REQUISITE_CODE SYSRES_CONST_LILAC_LIFE_CYCLE_STAGE_FONT_COLOR SYSRES_CONST_LINK_OBJECT_KIND_COMPONENT SYSRES_CONST_LINK_OBJECT_KIND_DOCUMENT SYSRES_CONST_LINK_OBJECT_KIND_EDOC SYSRES_CONST_LINK_OBJECT_KIND_FOLDER SYSRES_CONST_LINK_OBJECT_KIND_JOB SYSRES_CONST_LINK_OBJECT_KIND_REFERENCE SYSRES_CONST_LINK_OBJECT_KIND_TASK SYSRES_CONST_LINK_REF_TYPE_REQUISITE_CODE SYSRES_CONST_LIST_REFERENCE_MODE_NAME SYSRES_CONST_LOCALIZATION_DICTIONARY_MAIN_VIEW_CODE SYSRES_CONST_MAIN_VIEW_CODE SYSRES_CONST_MANUAL_ENUM_METHOD_FLAG SYSRES_CONST_MASTER_COMP_TYPE_REQUISITE_CODE SYSRES_CONST_MASTER_TABLE_REC_ID_REQUISITE_CODE SYSRES_CONST_MAXIMIZED_MODE_NAME SYSRES_CONST_ME_VALUE SYSRES_CONST_MESSAGE_ATTENTION_CAPTION SYSRES_CONST_MESSAGE_CONFIRMATION_CAPTION SYSRES_CONST_MESSAGE_ERROR_CAPTION SYSRES_CONST_MESSAGE_INFORMATION_CAPTION SYSRES_CONST_MINIMIZED_MODE_NAME SYSRES_CONST_MINUTE_CHAR SYSRES_CONST_MODULE_REQUISITE_CODE SYSRES_CONST_MONITORING_BLOCK_DESCRIPTION SYSRES_CONST_MONTH_FORMAT_VALUE SYSRES_CONST_NAME_LOCALIZE_ID_REQUISITE_CODE SYSRES_CONST_NAME_REQUISITE_CODE SYSRES_CONST_NAME_SINGULAR_REQUISITE_CODE SYSRES_CONST_NAMEAN_INPUT_TYPE SYSRES_CONST_NEGATIVE_PICK_VALUE SYSRES_CONST_NEGATIVE_VALUE SYSRES_CONST_NO SYSRES_CONST_NO_PICK_VALUE SYSRES_CONST_NO_SIGNATURE_REQUISITE_CODE SYSRES_CONST_NO_VALUE SYSRES_CONST_NONE_ACCESS_RIGHTS_TYPE_CODE SYSRES_CONST_NONOPERATING_RECORD_FLAG_VALUE SYSRES_CONST_NONOPERATING_RECORD_FLAG_VALUE_MASCULINE SYSRES_CONST_NORMAL_ACCESS_RIGHTS_TYPE_CODE SYSRES_CONST_NORMAL_LIFE_CYCLE_STAGE_DRAW_STYLE SYSRES_CONST_NORMAL_MODE_NAME SYSRES_CONST_NOT_ALLOWED_ACCESS_TYPE_CODE SYSRES_CONST_NOT_ALLOWED_ACCESS_TYPE_NAME SYSRES_CONST_NOTE_REQUISITE_CODE SYSRES_CONST_NOTICE_BLOCK_DESCRIPTION SYSRES_CONST_NUM_REQUISITE SYSRES_CONST_NUM_STR_REQUISITE_CODE SYSRES_CONST_NUMERATION_AUTO_NOT_STRONG SYSRES_CONST_NUMERATION_AUTO_STRONG SYSRES_CONST_NUMERATION_FROM_DICTONARY SYSRES_CONST_NUMERATION_MANUAL SYSRES_CONST_NUMERIC_TYPE_CHAR SYSRES_CONST_NUMREQ_REQUISITE_CODE SYSRES_CONST_OBSOLETE_VERSION_STATE_PICK_VALUE SYSRES_CONST_OPERATING_RECORD_FLAG_VALUE SYSRES_CONST_OPERATING_RECORD_FLAG_VALUE_CODE SYSRES_CONST_OPERATING_RECORD_FLAG_VALUE_FEMININE SYSRES_CONST_OPERATING_RECORD_FLAG_VALUE_MASCULINE SYSRES_CONST_OPTIONAL_FORM_COMP_REQCODE_PREFIX SYSRES_CONST_ORANGE_LIFE_CYCLE_STAGE_FONT_COLOR SYSRES_CONST_ORIGINALREF_REQUISITE_CODE SYSRES_CONST_OURFIRM_REF_CODE SYSRES_CONST_OURFIRM_REQUISITE_CODE SYSRES_CONST_OURFIRM_VAR SYSRES_CONST_OUTGOING_WORK_RULE_TYPE_CODE SYSRES_CONST_PICK_NEGATIVE_RESULT SYSRES_CONST_PICK_POSITIVE_RESULT SYSRES_CONST_PICK_REQUISITE SYSRES_CONST_PICK_REQUISITE_TYPE SYSRES_CONST_PICK_TYPE_CHAR SYSRES_CONST_PLAN_STATUS_REQUISITE_CODE SYSRES_CONST_PLATFORM_VERSION_COMMENT SYSRES_CONST_PLUGINS_SETTINGS_DESCRIPTION_REQUISITE_CODE SYSRES_CONST_POSITIVE_PICK_VALUE SYSRES_CONST_POWER_TO_CREATE_ACTION_CODE SYSRES_CONST_POWER_TO_SIGN_ACTION_CODE SYSRES_CONST_PRIORITY_REQUISITE_CODE SYSRES_CONST_QUALIFIED_TASK_TYPE SYSRES_CONST_QUALIFIED_TASK_TYPE_CODE SYSRES_CONST_RECSTAT_REQUISITE_CODE SYSRES_CONST_RED_LIFE_CYCLE_STAGE_FONT_COLOR SYSRES_CONST_REF_ID_T_REF_TYPE_REQUISITE_CODE SYSRES_CONST_REF_REQUISITE SYSRES_CONST_REF_REQUISITE_TYPE SYSRES_CONST_REF_REQUISITES_REFERENCE_CODE_SELECTED_REQUISITE SYSRES_CONST_REFERENCE_RECORD_HISTORY_CREATE_ACTION_CODE SYSRES_CONST_REFERENCE_RECORD_HISTORY_DELETE_ACTION_CODE SYSRES_CONST_REFERENCE_RECORD_HISTORY_MODIFY_ACTION_CODE SYSRES_CONST_REFERENCE_TYPE_CHAR SYSRES_CONST_REFERENCE_TYPE_REQUISITE_NAME SYSRES_CONST_REFERENCES_ADD_PARAMS_REQUISITE_CODE SYSRES_CONST_REFERENCES_DISPLAY_REQUISITE_REQUISITE_CODE SYSRES_CONST_REMOTE_SERVER_STATUS_WORKING SYSRES_CONST_REMOTE_SERVER_TYPE_MAIN SYSRES_CONST_REMOTE_SERVER_TYPE_SECONDARY SYSRES_CONST_REMOTE_USER_FLAG_VALUE_CODE SYSRES_CONST_REPORT_APP_EDITOR_INTERNAL SYSRES_CONST_REPORT_BASE_REPORT_ID_REQUISITE_CODE SYSRES_CONST_REPORT_BASE_REPORT_REQUISITE_CODE SYSRES_CONST_REPORT_SCRIPT_REQUISITE_CODE SYSRES_CONST_REPORT_TEMPLATE_REQUISITE_CODE SYSRES_CONST_REPORT_VIEWER_CODE_REQUISITE_CODE SYSRES_CONST_REQ_ALLOW_COMPONENT_DEFAULT_VALUE SYSRES_CONST_REQ_ALLOW_RECORD_DEFAULT_VALUE SYSRES_CONST_REQ_ALLOW_SERVER_COMPONENT_DEFAULT_VALUE SYSRES_CONST_REQ_MODE_AVAILABLE_CODE SYSRES_CONST_REQ_MODE_EDIT_CODE SYSRES_CONST_REQ_MODE_HIDDEN_CODE SYSRES_CONST_REQ_MODE_NOT_AVAILABLE_CODE SYSRES_CONST_REQ_MODE_VIEW_CODE SYSRES_CONST_REQ_NUMBER_REQUISITE_CODE SYSRES_CONST_REQ_SECTION_VALUE SYSRES_CONST_REQ_TYPE_VALUE SYSRES_CONST_REQUISITE_FORMAT_BY_UNIT SYSRES_CONST_REQUISITE_FORMAT_DATE_FULL SYSRES_CONST_REQUISITE_FORMAT_DATE_TIME SYSRES_CONST_REQUISITE_FORMAT_LEFT SYSRES_CONST_REQUISITE_FORMAT_RIGHT SYSRES_CONST_REQUISITE_FORMAT_WITHOUT_UNIT SYSRES_CONST_REQUISITE_NUMBER_REQUISITE_CODE SYSRES_CONST_REQUISITE_SECTION_ACTIONS SYSRES_CONST_REQUISITE_SECTION_BUTTON SYSRES_CONST_REQUISITE_SECTION_BUTTONS SYSRES_CONST_REQUISITE_SECTION_CARD SYSRES_CONST_REQUISITE_SECTION_TABLE SYSRES_CONST_REQUISITE_SECTION_TABLE10 SYSRES_CONST_REQUISITE_SECTION_TABLE11 SYSRES_CONST_REQUISITE_SECTION_TABLE12 SYSRES_CONST_REQUISITE_SECTION_TABLE13 SYSRES_CONST_REQUISITE_SECTION_TABLE14 SYSRES_CONST_REQUISITE_SECTION_TABLE15 SYSRES_CONST_REQUISITE_SECTION_TABLE16 SYSRES_CONST_REQUISITE_SECTION_TABLE17 SYSRES_CONST_REQUISITE_SECTION_TABLE18 SYSRES_CONST_REQUISITE_SECTION_TABLE19 SYSRES_CONST_REQUISITE_SECTION_TABLE2 SYSRES_CONST_REQUISITE_SECTION_TABLE20 SYSRES_CONST_REQUISITE_SECTION_TABLE21 SYSRES_CONST_REQUISITE_SECTION_TABLE22 SYSRES_CONST_REQUISITE_SECTION_TABLE23 SYSRES_CONST_REQUISITE_SECTION_TABLE24 SYSRES_CONST_REQUISITE_SECTION_TABLE3 SYSRES_CONST_REQUISITE_SECTION_TABLE4 SYSRES_CONST_REQUISITE_SECTION_TABLE5 SYSRES_CONST_REQUISITE_SECTION_TABLE6 SYSRES_CONST_REQUISITE_SECTION_TABLE7 SYSRES_CONST_REQUISITE_SECTION_TABLE8 SYSRES_CONST_REQUISITE_SECTION_TABLE9 SYSRES_CONST_REQUISITES_PSEUDOREFERENCE_REQUISITE_NUMBER_REQUISITE_CODE SYSRES_CONST_RIGHT_ALIGNMENT_CODE SYSRES_CONST_ROLES_REFERENCE_CODE SYSRES_CONST_ROUTE_STEP_AFTER_RUS SYSRES_CONST_ROUTE_STEP_AND_CONDITION_RUS SYSRES_CONST_ROUTE_STEP_OR_CONDITION_RUS SYSRES_CONST_ROUTE_TYPE_COMPLEX SYSRES_CONST_ROUTE_TYPE_PARALLEL SYSRES_CONST_ROUTE_TYPE_SERIAL SYSRES_CONST_SBDATASETDESC_NEGATIVE_VALUE SYSRES_CONST_SBDATASETDESC_POSITIVE_VALUE SYSRES_CONST_SBVIEWSDESC_POSITIVE_VALUE SYSRES_CONST_SCRIPT_BLOCK_DESCRIPTION SYSRES_CONST_SEARCH_BY_TEXT_REQUISITE_CODE SYSRES_CONST_SEARCHES_COMPONENT_CONTENT SYSRES_CONST_SEARCHES_CRITERIA_ACTION_NAME SYSRES_CONST_SEARCHES_EDOC_CONTENT SYSRES_CONST_SEARCHES_FOLDER_CONTENT SYSRES_CONST_SEARCHES_JOB_CONTENT SYSRES_CONST_SEARCHES_REFERENCE_CODE SYSRES_CONST_SEARCHES_TASK_CONTENT SYSRES_CONST_SECOND_CHAR SYSRES_CONST_SECTION_REQUISITE_ACTIONS_VALUE SYSRES_CONST_SECTION_REQUISITE_CARD_VALUE SYSRES_CONST_SECTION_REQUISITE_CODE SYSRES_CONST_SECTION_REQUISITE_DETAIL_1_VALUE SYSRES_CONST_SECTION_REQUISITE_DETAIL_2_VALUE SYSRES_CONST_SECTION_REQUISITE_DETAIL_3_VALUE SYSRES_CONST_SECTION_REQUISITE_DETAIL_4_VALUE SYSRES_CONST_SECTION_REQUISITE_DETAIL_5_VALUE SYSRES_CONST_SECTION_REQUISITE_DETAIL_6_VALUE SYSRES_CONST_SELECT_REFERENCE_MODE_NAME SYSRES_CONST_SELECT_TYPE_SELECTABLE SYSRES_CONST_SELECT_TYPE_SELECTABLE_ONLY_CHILD SYSRES_CONST_SELECT_TYPE_SELECTABLE_WITH_CHILD SYSRES_CONST_SELECT_TYPE_UNSLECTABLE SYSRES_CONST_SERVER_TYPE_MAIN SYSRES_CONST_SERVICE_USER_CATEGORY_FIELD_VALUE SYSRES_CONST_SETTINGS_USER_REQUISITE_CODE SYSRES_CONST_SIGNATURE_AND_ENCODE_CERTIFICATE_TYPE_CODE SYSRES_CONST_SIGNATURE_CERTIFICATE_TYPE_CODE SYSRES_CONST_SINGULAR_TITLE_REQUISITE_CODE SYSRES_CONST_SQL_SERVER_AUTHENTIFICATION_FLAG_VALUE_CODE SYSRES_CONST_SQL_SERVER_ENCODE_AUTHENTIFICATION_FLAG_VALUE_CODE SYSRES_CONST_STANDART_ROUTE_REFERENCE_CODE SYSRES_CONST_STANDART_ROUTE_REFERENCE_COMMENT_REQUISITE_CODE SYSRES_CONST_STANDART_ROUTES_GROUPS_REFERENCE_CODE SYSRES_CONST_STATE_REQ_NAME SYSRES_CONST_STATE_REQUISITE_ACTIVE_VALUE SYSRES_CONST_STATE_REQUISITE_CLOSED_VALUE SYSRES_CONST_STATE_REQUISITE_CODE SYSRES_CONST_STATIC_ROLE_TYPE_CODE SYSRES_CONST_STATUS_PLAN_DEFAULT_VALUE SYSRES_CONST_STATUS_VALUE_AUTOCLEANING SYSRES_CONST_STATUS_VALUE_BLUE_SQUARE SYSRES_CONST_STATUS_VALUE_COMPLETE SYSRES_CONST_STATUS_VALUE_GREEN_SQUARE SYSRES_CONST_STATUS_VALUE_ORANGE_SQUARE SYSRES_CONST_STATUS_VALUE_PURPLE_SQUARE SYSRES_CONST_STATUS_VALUE_RED_SQUARE SYSRES_CONST_STATUS_VALUE_SUSPEND SYSRES_CONST_STATUS_VALUE_YELLOW_SQUARE SYSRES_CONST_STDROUTE_SHOW_TO_USERS_REQUISITE_CODE SYSRES_CONST_STORAGE_TYPE_FILE SYSRES_CONST_STORAGE_TYPE_SQL_SERVER SYSRES_CONST_STR_REQUISITE SYSRES_CONST_STRIKEOUT_LIFE_CYCLE_STAGE_DRAW_STYLE SYSRES_CONST_STRING_FORMAT_LEFT_ALIGN_CHAR SYSRES_CONST_STRING_FORMAT_RIGHT_ALIGN_CHAR SYSRES_CONST_STRING_REQUISITE_CODE SYSRES_CONST_STRING_REQUISITE_TYPE SYSRES_CONST_STRING_TYPE_CHAR SYSRES_CONST_SUBSTITUTES_PSEUDOREFERENCE_CODE SYSRES_CONST_SUBTASK_BLOCK_DESCRIPTION SYSRES_CONST_SYSTEM_SETTING_CURRENT_USER_PARAM_VALUE SYSRES_CONST_SYSTEM_SETTING_EMPTY_VALUE_PARAM_VALUE SYSRES_CONST_SYSTEM_VERSION_COMMENT SYSRES_CONST_TASK_ACCESS_TYPE_ALL SYSRES_CONST_TASK_ACCESS_TYPE_ALL_MEMBERS SYSRES_CONST_TASK_ACCESS_TYPE_MANUAL SYSRES_CONST_TASK_ENCODE_TYPE_CERTIFICATION SYSRES_CONST_TASK_ENCODE_TYPE_CERTIFICATION_AND_PASSWORD SYSRES_CONST_TASK_ENCODE_TYPE_NONE SYSRES_CONST_TASK_ENCODE_TYPE_PASSWORD SYSRES_CONST_TASK_ROUTE_ALL_CONDITION SYSRES_CONST_TASK_ROUTE_AND_CONDITION SYSRES_CONST_TASK_ROUTE_OR_CONDITION SYSRES_CONST_TASK_STATE_ABORTED SYSRES_CONST_TASK_STATE_COMPLETE SYSRES_CONST_TASK_STATE_CONTINUED SYSRES_CONST_TASK_STATE_CONTROL SYSRES_CONST_TASK_STATE_INIT SYSRES_CONST_TASK_STATE_WORKING SYSRES_CONST_TASK_TITLE SYSRES_CONST_TASK_TYPES_GROUPS_REFERENCE_CODE SYSRES_CONST_TASK_TYPES_REFERENCE_CODE SYSRES_CONST_TEMPLATES_REFERENCE_CODE SYSRES_CONST_TEST_DATE_REQUISITE_NAME SYSRES_CONST_TEST_DEV_DATABASE_NAME SYSRES_CONST_TEST_DEV_SYSTEM_CODE SYSRES_CONST_TEST_EDMS_DATABASE_NAME SYSRES_CONST_TEST_EDMS_MAIN_CODE SYSRES_CONST_TEST_EDMS_MAIN_DB_NAME SYSRES_CONST_TEST_EDMS_SECOND_CODE SYSRES_CONST_TEST_EDMS_SECOND_DB_NAME SYSRES_CONST_TEST_EDMS_SYSTEM_CODE SYSRES_CONST_TEST_NUMERIC_REQUISITE_NAME SYSRES_CONST_TEXT_REQUISITE SYSRES_CONST_TEXT_REQUISITE_CODE SYSRES_CONST_TEXT_REQUISITE_TYPE SYSRES_CONST_TEXT_TYPE_CHAR SYSRES_CONST_TYPE_CODE_REQUISITE_CODE SYSRES_CONST_TYPE_REQUISITE_CODE SYSRES_CONST_UNDEFINED_LIFE_CYCLE_STAGE_FONT_COLOR SYSRES_CONST_UNITS_SECTION_ID_REQUISITE_CODE SYSRES_CONST_UNITS_SECTION_REQUISITE_CODE SYSRES_CONST_UNOPERATING_RECORD_FLAG_VALUE_CODE SYSRES_CONST_UNSTORED_DATA_REQUISITE_CODE SYSRES_CONST_UNSTORED_DATA_REQUISITE_NAME SYSRES_CONST_USE_ACCESS_TYPE_CODE SYSRES_CONST_USE_ACCESS_TYPE_NAME SYSRES_CONST_USER_ACCOUNT_TYPE_VALUE_CODE SYSRES_CONST_USER_ADDITIONAL_INFORMATION_REQUISITE_CODE SYSRES_CONST_USER_AND_GROUP_ID_FROM_PSEUDOREFERENCE_REQUISITE_CODE SYSRES_CONST_USER_CATEGORY_NORMAL SYSRES_CONST_USER_CERTIFICATE_REQUISITE_CODE SYSRES_CONST_USER_CERTIFICATE_STATE_REQUISITE_CODE SYSRES_CONST_USER_CERTIFICATE_SUBJECT_NAME_REQUISITE_CODE SYSRES_CONST_USER_CERTIFICATE_THUMBPRINT_REQUISITE_CODE SYSRES_CONST_USER_COMMON_CATEGORY SYSRES_CONST_USER_COMMON_CATEGORY_CODE SYSRES_CONST_USER_FULL_NAME_REQUISITE_CODE SYSRES_CONST_USER_GROUP_TYPE_REQUISITE_CODE SYSRES_CONST_USER_LOGIN_REQUISITE_CODE SYSRES_CONST_USER_REMOTE_CONTROLLER_REQUISITE_CODE SYSRES_CONST_USER_REMOTE_SYSTEM_REQUISITE_CODE SYSRES_CONST_USER_RIGHTS_T_REQUISITE_CODE SYSRES_CONST_USER_SERVER_NAME_REQUISITE_CODE SYSRES_CONST_USER_SERVICE_CATEGORY SYSRES_CONST_USER_SERVICE_CATEGORY_CODE SYSRES_CONST_USER_STATUS_ADMINISTRATOR_CODE SYSRES_CONST_USER_STATUS_ADMINISTRATOR_NAME SYSRES_CONST_USER_STATUS_DEVELOPER_CODE SYSRES_CONST_USER_STATUS_DEVELOPER_NAME SYSRES_CONST_USER_STATUS_DISABLED_CODE SYSRES_CONST_USER_STATUS_DISABLED_NAME SYSRES_CONST_USER_STATUS_SYSTEM_DEVELOPER_CODE SYSRES_CONST_USER_STATUS_USER_CODE SYSRES_CONST_USER_STATUS_USER_NAME SYSRES_CONST_USER_STATUS_USER_NAME_DEPRECATED SYSRES_CONST_USER_TYPE_FIELD_VALUE_USER SYSRES_CONST_USER_TYPE_REQUISITE_CODE SYSRES_CONST_USERS_CONTROLLER_REQUISITE_CODE SYSRES_CONST_USERS_IS_MAIN_SERVER_REQUISITE_CODE SYSRES_CONST_USERS_REFERENCE_CODE SYSRES_CONST_USERS_REGISTRATION_CERTIFICATES_ACTION_NAME SYSRES_CONST_USERS_REQUISITE_CODE SYSRES_CONST_USERS_SYSTEM_REQUISITE_CODE SYSRES_CONST_USERS_USER_ACCESS_RIGHTS_TYPR_REQUISITE_CODE SYSRES_CONST_USERS_USER_AUTHENTICATION_REQUISITE_CODE SYSRES_CONST_USERS_USER_COMPONENT_REQUISITE_CODE SYSRES_CONST_USERS_USER_GROUP_REQUISITE_CODE SYSRES_CONST_USERS_VIEW_CERTIFICATES_ACTION_NAME SYSRES_CONST_VIEW_DEFAULT_CODE SYSRES_CONST_VIEW_DEFAULT_NAME SYSRES_CONST_VIEWER_REQUISITE_CODE SYSRES_CONST_WAITING_BLOCK_DESCRIPTION SYSRES_CONST_WIZARD_FORM_LABEL_TEST_STRING  SYSRES_CONST_WIZARD_QUERY_PARAM_HEIGHT_ETALON_STRING SYSRES_CONST_WIZARD_REFERENCE_COMMENT_REQUISITE_CODE SYSRES_CONST_WORK_RULES_DESCRIPTION_REQUISITE_CODE SYSRES_CONST_WORK_TIME_CALENDAR_REFERENCE_CODE SYSRES_CONST_WORK_WORKFLOW_HARD_ROUTE_TYPE_VALUE SYSRES_CONST_WORK_WORKFLOW_HARD_ROUTE_TYPE_VALUE_CODE SYSRES_CONST_WORK_WORKFLOW_HARD_ROUTE_TYPE_VALUE_CODE_RUS SYSRES_CONST_WORK_WORKFLOW_SOFT_ROUTE_TYPE_VALUE_CODE_RUS SYSRES_CONST_WORKFLOW_ROUTE_TYPR_HARD SYSRES_CONST_WORKFLOW_ROUTE_TYPR_SOFT SYSRES_CONST_XML_ENCODING SYSRES_CONST_XREC_STAT_REQUISITE_CODE SYSRES_CONST_XRECID_FIELD_NAME SYSRES_CONST_YES SYSRES_CONST_YES_NO_2_REQUISITE_CODE SYSRES_CONST_YES_NO_REQUISITE_CODE SYSRES_CONST_YES_NO_T_REF_TYPE_REQUISITE_CODE SYSRES_CONST_YES_PICK_VALUE SYSRES_CONST_YES_VALUE CR FALSE nil NO_VALUE NULL TAB TRUE YES_VALUE ADMINISTRATORS_GROUP_NAME CUSTOMIZERS_GROUP_NAME DEVELOPERS_GROUP_NAME SERVICE_USERS_GROUP_NAME DECISION_BLOCK_FIRST_OPERAND_PROPERTY DECISION_BLOCK_NAME_PROPERTY DECISION_BLOCK_OPERATION_PROPERTY DECISION_BLOCK_RESULT_TYPE_PROPERTY DECISION_BLOCK_SECOND_OPERAND_PROPERTY ANY_FILE_EXTENTION COMPRESSED_DOCUMENT_EXTENSION EXTENDED_DOCUMENT_EXTENSION SHORT_COMPRESSED_DOCUMENT_EXTENSION SHORT_EXTENDED_DOCUMENT_EXTENSION JOB_BLOCK_ABORT_DEADLINE_PROPERTY JOB_BLOCK_AFTER_FINISH_EVENT JOB_BLOCK_AFTER_QUERY_PARAMETERS_EVENT JOB_BLOCK_ATTACHMENT_PROPERTY JOB_BLOCK_ATTACHMENTS_RIGHTS_GROUP_PROPERTY JOB_BLOCK_ATTACHMENTS_RIGHTS_TYPE_PROPERTY JOB_BLOCK_BEFORE_QUERY_PARAMETERS_EVENT JOB_BLOCK_BEFORE_START_EVENT JOB_BLOCK_CREATED_JOBS_PROPERTY JOB_BLOCK_DEADLINE_PROPERTY JOB_BLOCK_EXECUTION_RESULTS_PROPERTY JOB_BLOCK_IS_PARALLEL_PROPERTY JOB_BLOCK_IS_RELATIVE_ABORT_DEADLINE_PROPERTY JOB_BLOCK_IS_RELATIVE_DEADLINE_PROPERTY JOB_BLOCK_JOB_TEXT_PROPERTY JOB_BLOCK_NAME_PROPERTY JOB_BLOCK_NEED_SIGN_ON_PERFORM_PROPERTY JOB_BLOCK_PERFORMER_PROPERTY JOB_BLOCK_RELATIVE_ABORT_DEADLINE_TYPE_PROPERTY JOB_BLOCK_RELATIVE_DEADLINE_TYPE_PROPERTY JOB_BLOCK_SUBJECT_PROPERTY ENGLISH_LANGUAGE_CODE RUSSIAN_LANGUAGE_CODE smHidden smMaximized smMinimized smNormal wmNo wmYes COMPONENT_TOKEN_LINK_KIND DOCUMENT_LINK_KIND EDOCUMENT_LINK_KIND FOLDER_LINK_KIND JOB_LINK_KIND REFERENCE_LINK_KIND TASK_LINK_KIND COMPONENT_TOKEN_LOCK_TYPE EDOCUMENT_VERSION_LOCK_TYPE MONITOR_BLOCK_AFTER_FINISH_EVENT MONITOR_BLOCK_BEFORE_START_EVENT MONITOR_BLOCK_DEADLINE_PROPERTY MONITOR_BLOCK_INTERVAL_PROPERTY MONITOR_BLOCK_INTERVAL_TYPE_PROPERTY MONITOR_BLOCK_IS_RELATIVE_DEADLINE_PROPERTY MONITOR_BLOCK_NAME_PROPERTY MONITOR_BLOCK_RELATIVE_DEADLINE_TYPE_PROPERTY MONITOR_BLOCK_SEARCH_SCRIPT_PROPERTY NOTICE_BLOCK_AFTER_FINISH_EVENT NOTICE_BLOCK_ATTACHMENT_PROPERTY NOTICE_BLOCK_ATTACHMENTS_RIGHTS_GROUP_PROPERTY NOTICE_BLOCK_ATTACHMENTS_RIGHTS_TYPE_PROPERTY NOTICE_BLOCK_BEFORE_START_EVENT NOTICE_BLOCK_CREATED_NOTICES_PROPERTY NOTICE_BLOCK_DEADLINE_PROPERTY NOTICE_BLOCK_IS_RELATIVE_DEADLINE_PROPERTY NOTICE_BLOCK_NAME_PROPERTY NOTICE_BLOCK_NOTICE_TEXT_PROPERTY NOTICE_BLOCK_PERFORMER_PROPERTY NOTICE_BLOCK_RELATIVE_DEADLINE_TYPE_PROPERTY NOTICE_BLOCK_SUBJECT_PROPERTY dseAfterCancel dseAfterClose dseAfterDelete dseAfterDeleteOutOfTransaction dseAfterInsert dseAfterOpen dseAfterScroll dseAfterUpdate dseAfterUpdateOutOfTransaction dseBeforeCancel dseBeforeClose dseBeforeDelete dseBeforeDetailUpdate dseBeforeInsert dseBeforeOpen dseBeforeUpdate dseOnAnyRequisiteChange dseOnCloseRecord dseOnDeleteError dseOnOpenRecord dseOnPrepareUpdate dseOnUpdateError dseOnUpdateRatifiedRecord dseOnValidDelete dseOnValidUpdate reOnChange reOnChangeValues SELECTION_BEGIN_ROUTE_EVENT SELECTION_END_ROUTE_EVENT CURRENT_PERIOD_IS_REQUIRED PREVIOUS_CARD_TYPE_NAME SHOW_RECORD_PROPERTIES_FORM ACCESS_RIGHTS_SETTING_DIALOG_CODE ADMINISTRATOR_USER_CODE ANALYTIC_REPORT_TYPE asrtHideLocal asrtHideRemote CALCULATED_ROLE_TYPE_CODE COMPONENTS_REFERENCE_DEVELOPER_VIEW_CODE DCTS_TEST_PROTOCOLS_FOLDER_PATH E_EDOC_VERSION_ALREADY_APPROVINGLY_SIGNED E_EDOC_VERSION_ALREADY_APPROVINGLY_SIGNED_BY_USER E_EDOC_VERSION_ALREDY_SIGNED E_EDOC_VERSION_ALREDY_SIGNED_BY_USER EDOC_TYPES_CODE_REQUISITE_FIELD_NAME EDOCUMENTS_ALIAS_NAME FILES_FOLDER_PATH FILTER_OPERANDS_DELIMITER FILTER_OPERATIONS_DELIMITER FORMCARD_NAME FORMLIST_NAME GET_EXTENDED_DOCUMENT_EXTENSION_CREATION_MODE GET_EXTENDED_DOCUMENT_EXTENSION_IMPORT_MODE INTEGRATED_REPORT_TYPE IS_BUILDER_APPLICATION_ROLE IS_BUILDER_APPLICATION_ROLE2 IS_BUILDER_USERS ISBSYSDEV LOG_FOLDER_PATH mbCancel mbNo mbNoToAll mbOK mbYes mbYesToAll MEMORY_DATASET_DESRIPTIONS_FILENAME mrNo mrNoToAll mrYes mrYesToAll MULTIPLE_SELECT_DIALOG_CODE NONOPERATING_RECORD_FLAG_FEMININE NONOPERATING_RECORD_FLAG_MASCULINE OPERATING_RECORD_FLAG_FEMININE OPERATING_RECORD_FLAG_MASCULINE PROFILING_SETTINGS_COMMON_SETTINGS_CODE_VALUE PROGRAM_INITIATED_LOOKUP_ACTION ratDelete ratEdit ratInsert REPORT_TYPE REQUIRED_PICK_VALUES_VARIABLE rmCard rmList SBRTE_PROGID_DEV SBRTE_PROGID_RELEASE STATIC_ROLE_TYPE_CODE SUPPRESS_EMPTY_TEMPLATE_CREATION SYSTEM_USER_CODE UPDATE_DIALOG_DATASET USED_IN_OBJECT_HINT_PARAM USER_INITIATED_LOOKUP_ACTION USER_NAME_FORMAT USER_SELECTION_RESTRICTIONS WORKFLOW_TEST_PROTOCOLS_FOLDER_PATH ELS_SUBTYPE_CONTROL_NAME ELS_FOLDER_KIND_CONTROL_NAME REPEAT_PROCESS_CURRENT_OBJECT_EXCEPTION_NAME PRIVILEGE_COMPONENT_FULL_ACCESS PRIVILEGE_DEVELOPMENT_EXPORT PRIVILEGE_DEVELOPMENT_IMPORT PRIVILEGE_DOCUMENT_DELETE PRIVILEGE_ESD PRIVILEGE_FOLDER_DELETE PRIVILEGE_MANAGE_ACCESS_RIGHTS PRIVILEGE_MANAGE_REPLICATION PRIVILEGE_MANAGE_SESSION_SERVER PRIVILEGE_OBJECT_FULL_ACCESS PRIVILEGE_OBJECT_VIEW PRIVILEGE_RESERVE_LICENSE PRIVILEGE_SYSTEM_CUSTOMIZE PRIVILEGE_SYSTEM_DEVELOP PRIVILEGE_SYSTEM_INSTALL PRIVILEGE_TASK_DELETE PRIVILEGE_USER_PLUGIN_SETTINGS_CUSTOMIZE PRIVILEGES_PSEUDOREFERENCE_CODE ACCESS_TYPES_PSEUDOREFERENCE_CODE ALL_AVAILABLE_COMPONENTS_PSEUDOREFERENCE_CODE ALL_AVAILABLE_PRIVILEGES_PSEUDOREFERENCE_CODE ALL_REPLICATE_COMPONENTS_PSEUDOREFERENCE_CODE AVAILABLE_DEVELOPERS_COMPONENTS_PSEUDOREFERENCE_CODE COMPONENTS_PSEUDOREFERENCE_CODE FILTRATER_SETTINGS_CONFLICTS_PSEUDOREFERENCE_CODE GROUPS_PSEUDOREFERENCE_CODE RECEIVE_PROTOCOL_PSEUDOREFERENCE_CODE REFERENCE_REQUISITE_PSEUDOREFERENCE_CODE REFERENCE_REQUISITES_PSEUDOREFERENCE_CODE REFTYPES_PSEUDOREFERENCE_CODE REPLICATION_SEANCES_DIARY_PSEUDOREFERENCE_CODE SEND_PROTOCOL_PSEUDOREFERENCE_CODE SUBSTITUTES_PSEUDOREFERENCE_CODE SYSTEM_SETTINGS_PSEUDOREFERENCE_CODE UNITS_PSEUDOREFERENCE_CODE USERS_PSEUDOREFERENCE_CODE VIEWERS_PSEUDOREFERENCE_CODE CERTIFICATE_TYPE_ENCRYPT CERTIFICATE_TYPE_SIGN CERTIFICATE_TYPE_SIGN_AND_ENCRYPT STORAGE_TYPE_FILE STORAGE_TYPE_NAS_CIFS STORAGE_TYPE_SAPERION STORAGE_TYPE_SQL_SERVER COMPTYPE2_REQUISITE_DOCUMENTS_VALUE COMPTYPE2_REQUISITE_TASKS_VALUE COMPTYPE2_REQUISITE_FOLDERS_VALUE COMPTYPE2_REQUISITE_REFERENCES_VALUE SYSREQ_CODE SYSREQ_COMPTYPE2 SYSREQ_CONST_AVAILABLE_FOR_WEB SYSREQ_CONST_COMMON_CODE SYSREQ_CONST_COMMON_VALUE SYSREQ_CONST_FIRM_CODE SYSREQ_CONST_FIRM_STATUS SYSREQ_CONST_FIRM_VALUE SYSREQ_CONST_SERVER_STATUS SYSREQ_CONTENTS SYSREQ_DATE_OPEN SYSREQ_DATE_CLOSE SYSREQ_DESCRIPTION SYSREQ_DESCRIPTION_LOCALIZE_ID SYSREQ_DOUBLE SYSREQ_EDOC_ACCESS_TYPE SYSREQ_EDOC_AUTHOR SYSREQ_EDOC_CREATED SYSREQ_EDOC_DELEGATE_RIGHTS_REQUISITE_CODE SYSREQ_EDOC_EDITOR SYSREQ_EDOC_ENCODE_TYPE SYSREQ_EDOC_ENCRYPTION_PLUGIN_NAME SYSREQ_EDOC_ENCRYPTION_PLUGIN_VERSION SYSREQ_EDOC_EXPORT_DATE SYSREQ_EDOC_EXPORTER SYSREQ_EDOC_KIND SYSREQ_EDOC_LIFE_STAGE_NAME SYSREQ_EDOC_LOCKED_FOR_SERVER_CODE SYSREQ_EDOC_MODIFIED SYSREQ_EDOC_NAME SYSREQ_EDOC_NOTE SYSREQ_EDOC_QUALIFIED_ID SYSREQ_EDOC_SESSION_KEY SYSREQ_EDOC_SESSION_KEY_ENCRYPTION_PLUGIN_NAME SYSREQ_EDOC_SESSION_KEY_ENCRYPTION_PLUGIN_VERSION SYSREQ_EDOC_SIGNATURE_TYPE SYSREQ_EDOC_SIGNED SYSREQ_EDOC_STORAGE SYSREQ_EDOC_STORAGES_ARCHIVE_STORAGE SYSREQ_EDOC_STORAGES_CHECK_RIGHTS SYSREQ_EDOC_STORAGES_COMPUTER_NAME SYSREQ_EDOC_STORAGES_EDIT_IN_STORAGE SYSREQ_EDOC_STORAGES_EXECUTIVE_STORAGE SYSREQ_EDOC_STORAGES_FUNCTION SYSREQ_EDOC_STORAGES_INITIALIZED SYSREQ_EDOC_STORAGES_LOCAL_PATH SYSREQ_EDOC_STORAGES_SAPERION_DATABASE_NAME SYSREQ_EDOC_STORAGES_SEARCH_BY_TEXT SYSREQ_EDOC_STORAGES_SERVER_NAME SYSREQ_EDOC_STORAGES_SHARED_SOURCE_NAME SYSREQ_EDOC_STORAGES_TYPE SYSREQ_EDOC_TEXT_MODIFIED SYSREQ_EDOC_TYPE_ACT_CODE SYSREQ_EDOC_TYPE_ACT_DESCRIPTION SYSREQ_EDOC_TYPE_ACT_DESCRIPTION_LOCALIZE_ID SYSREQ_EDOC_TYPE_ACT_ON_EXECUTE SYSREQ_EDOC_TYPE_ACT_ON_EXECUTE_EXISTS SYSREQ_EDOC_TYPE_ACT_SECTION SYSREQ_EDOC_TYPE_ADD_PARAMS SYSREQ_EDOC_TYPE_COMMENT SYSREQ_EDOC_TYPE_EVENT_TEXT SYSREQ_EDOC_TYPE_NAME_IN_SINGULAR SYSREQ_EDOC_TYPE_NAME_IN_SINGULAR_LOCALIZE_ID SYSREQ_EDOC_TYPE_NAME_LOCALIZE_ID SYSREQ_EDOC_TYPE_NUMERATION_METHOD SYSREQ_EDOC_TYPE_PSEUDO_REQUISITE_CODE SYSREQ_EDOC_TYPE_REQ_CODE SYSREQ_EDOC_TYPE_REQ_DESCRIPTION SYSREQ_EDOC_TYPE_REQ_DESCRIPTION_LOCALIZE_ID SYSREQ_EDOC_TYPE_REQ_IS_LEADING SYSREQ_EDOC_TYPE_REQ_IS_REQUIRED SYSREQ_EDOC_TYPE_REQ_NUMBER SYSREQ_EDOC_TYPE_REQ_ON_CHANGE SYSREQ_EDOC_TYPE_REQ_ON_CHANGE_EXISTS SYSREQ_EDOC_TYPE_REQ_ON_SELECT SYSREQ_EDOC_TYPE_REQ_ON_SELECT_KIND SYSREQ_EDOC_TYPE_REQ_SECTION SYSREQ_EDOC_TYPE_VIEW_CARD SYSREQ_EDOC_TYPE_VIEW_CODE SYSREQ_EDOC_TYPE_VIEW_COMMENT SYSREQ_EDOC_TYPE_VIEW_IS_MAIN SYSREQ_EDOC_TYPE_VIEW_NAME SYSREQ_EDOC_TYPE_VIEW_NAME_LOCALIZE_ID SYSREQ_EDOC_VERSION_AUTHOR SYSREQ_EDOC_VERSION_CRC SYSREQ_EDOC_VERSION_DATA SYSREQ_EDOC_VERSION_EDITOR SYSREQ_EDOC_VERSION_EXPORT_DATE SYSREQ_EDOC_VERSION_EXPORTER SYSREQ_EDOC_VERSION_HIDDEN SYSREQ_EDOC_VERSION_LIFE_STAGE SYSREQ_EDOC_VERSION_MODIFIED SYSREQ_EDOC_VERSION_NOTE SYSREQ_EDOC_VERSION_SIGNATURE_TYPE SYSREQ_EDOC_VERSION_SIGNED SYSREQ_EDOC_VERSION_SIZE SYSREQ_EDOC_VERSION_SOURCE SYSREQ_EDOC_VERSION_TEXT_MODIFIED SYSREQ_EDOCKIND_DEFAULT_VERSION_STATE_CODE SYSREQ_FOLDER_KIND SYSREQ_FUNC_CATEGORY SYSREQ_FUNC_COMMENT SYSREQ_FUNC_GROUP SYSREQ_FUNC_GROUP_COMMENT SYSREQ_FUNC_GROUP_NUMBER SYSREQ_FUNC_HELP SYSREQ_FUNC_PARAM_DEF_VALUE SYSREQ_FUNC_PARAM_IDENT SYSREQ_FUNC_PARAM_NUMBER SYSREQ_FUNC_PARAM_TYPE SYSREQ_FUNC_TEXT SYSREQ_GROUP_CATEGORY SYSREQ_ID SYSREQ_LAST_UPDATE SYSREQ_LEADER_REFERENCE SYSREQ_LINE_NUMBER SYSREQ_MAIN_RECORD_ID SYSREQ_NAME SYSREQ_NAME_LOCALIZE_ID SYSREQ_NOTE SYSREQ_ORIGINAL_RECORD SYSREQ_OUR_FIRM SYSREQ_PROFILING_SETTINGS_BATCH_LOGING SYSREQ_PROFILING_SETTINGS_BATCH_SIZE SYSREQ_PROFILING_SETTINGS_PROFILING_ENABLED SYSREQ_PROFILING_SETTINGS_SQL_PROFILING_ENABLED SYSREQ_PROFILING_SETTINGS_START_LOGGED SYSREQ_RECORD_STATUS SYSREQ_REF_REQ_FIELD_NAME SYSREQ_REF_REQ_FORMAT SYSREQ_REF_REQ_GENERATED SYSREQ_REF_REQ_LENGTH SYSREQ_REF_REQ_PRECISION SYSREQ_REF_REQ_REFERENCE SYSREQ_REF_REQ_SECTION SYSREQ_REF_REQ_STORED SYSREQ_REF_REQ_TOKENS SYSREQ_REF_REQ_TYPE SYSREQ_REF_REQ_VIEW SYSREQ_REF_TYPE_ACT_CODE SYSREQ_REF_TYPE_ACT_DESCRIPTION SYSREQ_REF_TYPE_ACT_DESCRIPTION_LOCALIZE_ID SYSREQ_REF_TYPE_ACT_ON_EXECUTE SYSREQ_REF_TYPE_ACT_ON_EXECUTE_EXISTS SYSREQ_REF_TYPE_ACT_SECTION SYSREQ_REF_TYPE_ADD_PARAMS SYSREQ_REF_TYPE_COMMENT SYSREQ_REF_TYPE_COMMON_SETTINGS SYSREQ_REF_TYPE_DISPLAY_REQUISITE_NAME SYSREQ_REF_TYPE_EVENT_TEXT SYSREQ_REF_TYPE_MAIN_LEADING_REF SYSREQ_REF_TYPE_NAME_IN_SINGULAR SYSREQ_REF_TYPE_NAME_IN_SINGULAR_LOCALIZE_ID SYSREQ_REF_TYPE_NAME_LOCALIZE_ID SYSREQ_REF_TYPE_NUMERATION_METHOD SYSREQ_REF_TYPE_REQ_CODE SYSREQ_REF_TYPE_REQ_DESCRIPTION SYSREQ_REF_TYPE_REQ_DESCRIPTION_LOCALIZE_ID SYSREQ_REF_TYPE_REQ_IS_CONTROL SYSREQ_REF_TYPE_REQ_IS_FILTER SYSREQ_REF_TYPE_REQ_IS_LEADING SYSREQ_REF_TYPE_REQ_IS_REQUIRED SYSREQ_REF_TYPE_REQ_NUMBER SYSREQ_REF_TYPE_REQ_ON_CHANGE SYSREQ_REF_TYPE_REQ_ON_CHANGE_EXISTS SYSREQ_REF_TYPE_REQ_ON_SELECT SYSREQ_REF_TYPE_REQ_ON_SELECT_KIND SYSREQ_REF_TYPE_REQ_SECTION SYSREQ_REF_TYPE_VIEW_CARD SYSREQ_REF_TYPE_VIEW_CODE SYSREQ_REF_TYPE_VIEW_COMMENT SYSREQ_REF_TYPE_VIEW_IS_MAIN SYSREQ_REF_TYPE_VIEW_NAME SYSREQ_REF_TYPE_VIEW_NAME_LOCALIZE_ID SYSREQ_REFERENCE_TYPE_ID SYSREQ_STATE SYSREQ_STATЕ SYSREQ_SYSTEM_SETTINGS_VALUE SYSREQ_TYPE SYSREQ_UNIT SYSREQ_UNIT_ID SYSREQ_USER_GROUPS_GROUP_FULL_NAME SYSREQ_USER_GROUPS_GROUP_NAME SYSREQ_USER_GROUPS_GROUP_SERVER_NAME SYSREQ_USERS_ACCESS_RIGHTS SYSREQ_USERS_AUTHENTICATION SYSREQ_USERS_CATEGORY SYSREQ_USERS_COMPONENT SYSREQ_USERS_COMPONENT_USER_IS_PUBLIC SYSREQ_USERS_DOMAIN SYSREQ_USERS_FULL_USER_NAME SYSREQ_USERS_GROUP SYSREQ_USERS_IS_MAIN_SERVER SYSREQ_USERS_LOGIN SYSREQ_USERS_REFERENCE_USER_IS_PUBLIC SYSREQ_USERS_STATUS SYSREQ_USERS_USER_CERTIFICATE SYSREQ_USERS_USER_CERTIFICATE_INFO SYSREQ_USERS_USER_CERTIFICATE_PLUGIN_NAME SYSREQ_USERS_USER_CERTIFICATE_PLUGIN_VERSION SYSREQ_USERS_USER_CERTIFICATE_STATE SYSREQ_USERS_USER_CERTIFICATE_SUBJECT_NAME SYSREQ_USERS_USER_CERTIFICATE_THUMBPRINT SYSREQ_USERS_USER_DEFAULT_CERTIFICATE SYSREQ_USERS_USER_DESCRIPTION SYSREQ_USERS_USER_GLOBAL_NAME SYSREQ_USERS_USER_LOGIN SYSREQ_USERS_USER_MAIN_SERVER SYSREQ_USERS_USER_TYPE SYSREQ_WORK_RULES_FOLDER_ID RESULT_VAR_NAME RESULT_VAR_NAME_ENG AUTO_NUMERATION_RULE_ID CANT_CHANGE_ID_REQUISITE_RULE_ID CANT_CHANGE_OURFIRM_REQUISITE_RULE_ID CHECK_CHANGING_REFERENCE_RECORD_USE_RULE_ID CHECK_CODE_REQUISITE_RULE_ID CHECK_DELETING_REFERENCE_RECORD_USE_RULE_ID CHECK_FILTRATER_CHANGES_RULE_ID CHECK_RECORD_INTERVAL_RULE_ID CHECK_REFERENCE_INTERVAL_RULE_ID CHECK_REQUIRED_DATA_FULLNESS_RULE_ID CHECK_REQUIRED_REQUISITES_FULLNESS_RULE_ID MAKE_RECORD_UNRATIFIED_RULE_ID RESTORE_AUTO_NUMERATION_RULE_ID SET_FIRM_CONTEXT_FROM_RECORD_RULE_ID SET_FIRST_RECORD_IN_LIST_FORM_RULE_ID SET_IDSPS_VALUE_RULE_ID SET_NEXT_CODE_VALUE_RULE_ID SET_OURFIRM_BOUNDS_RULE_ID SET_OURFIRM_REQUISITE_RULE_ID SCRIPT_BLOCK_AFTER_FINISH_EVENT SCRIPT_BLOCK_BEFORE_START_EVENT SCRIPT_BLOCK_EXECUTION_RESULTS_PROPERTY SCRIPT_BLOCK_NAME_PROPERTY SCRIPT_BLOCK_SCRIPT_PROPERTY SUBTASK_BLOCK_ABORT_DEADLINE_PROPERTY SUBTASK_BLOCK_AFTER_FINISH_EVENT SUBTASK_BLOCK_ASSIGN_PARAMS_EVENT SUBTASK_BLOCK_ATTACHMENTS_PROPERTY SUBTASK_BLOCK_ATTACHMENTS_RIGHTS_GROUP_PROPERTY SUBTASK_BLOCK_ATTACHMENTS_RIGHTS_TYPE_PROPERTY SUBTASK_BLOCK_BEFORE_START_EVENT SUBTASK_BLOCK_CREATED_TASK_PROPERTY SUBTASK_BLOCK_CREATION_EVENT SUBTASK_BLOCK_DEADLINE_PROPERTY SUBTASK_BLOCK_IMPORTANCE_PROPERTY SUBTASK_BLOCK_INITIATOR_PROPERTY SUBTASK_BLOCK_IS_RELATIVE_ABORT_DEADLINE_PROPERTY SUBTASK_BLOCK_IS_RELATIVE_DEADLINE_PROPERTY SUBTASK_BLOCK_JOBS_TYPE_PROPERTY SUBTASK_BLOCK_NAME_PROPERTY SUBTASK_BLOCK_PARALLEL_ROUTE_PROPERTY SUBTASK_BLOCK_PERFORMERS_PROPERTY SUBTASK_BLOCK_RELATIVE_ABORT_DEADLINE_TYPE_PROPERTY SUBTASK_BLOCK_RELATIVE_DEADLINE_TYPE_PROPERTY SUBTASK_BLOCK_REQUIRE_SIGN_PROPERTY SUBTASK_BLOCK_STANDARD_ROUTE_PROPERTY SUBTASK_BLOCK_START_EVENT SUBTASK_BLOCK_STEP_CONTROL_PROPERTY SUBTASK_BLOCK_SUBJECT_PROPERTY SUBTASK_BLOCK_TASK_CONTROL_PROPERTY SUBTASK_BLOCK_TEXT_PROPERTY SUBTASK_BLOCK_UNLOCK_ATTACHMENTS_ON_STOP_PROPERTY SUBTASK_BLOCK_USE_STANDARD_ROUTE_PROPERTY SUBTASK_BLOCK_WAIT_FOR_TASK_COMPLETE_PROPERTY SYSCOMP_CONTROL_JOBS SYSCOMP_FOLDERS SYSCOMP_JOBS SYSCOMP_NOTICES SYSCOMP_TASKS SYSDLG_CREATE_EDOCUMENT SYSDLG_CREATE_EDOCUMENT_VERSION SYSDLG_CURRENT_PERIOD SYSDLG_EDIT_FUNCTION_HELP SYSDLG_EDOCUMENT_KINDS_FOR_TEMPLATE SYSDLG_EXPORT_MULTIPLE_EDOCUMENTS SYSDLG_EXPORT_SINGLE_EDOCUMENT SYSDLG_IMPORT_EDOCUMENT SYSDLG_MULTIPLE_SELECT SYSDLG_SETUP_ACCESS_RIGHTS SYSDLG_SETUP_DEFAULT_RIGHTS SYSDLG_SETUP_FILTER_CONDITION SYSDLG_SETUP_SIGN_RIGHTS SYSDLG_SETUP_TASK_OBSERVERS SYSDLG_SETUP_TASK_ROUTE SYSDLG_SETUP_USERS_LIST SYSDLG_SIGN_EDOCUMENT SYSDLG_SIGN_MULTIPLE_EDOCUMENTS SYSREF_ACCESS_RIGHTS_TYPES SYSREF_ADMINISTRATION_HISTORY SYSREF_ALL_AVAILABLE_COMPONENTS SYSREF_ALL_AVAILABLE_PRIVILEGES SYSREF_ALL_REPLICATING_COMPONENTS SYSREF_AVAILABLE_DEVELOPERS_COMPONENTS SYSREF_CALENDAR_EVENTS SYSREF_COMPONENT_TOKEN_HISTORY SYSREF_COMPONENT_TOKENS SYSREF_COMPONENTS SYSREF_CONSTANTS SYSREF_DATA_RECEIVE_PROTOCOL SYSREF_DATA_SEND_PROTOCOL SYSREF_DIALOGS SYSREF_DIALOGS_REQUISITES SYSREF_EDITORS SYSREF_EDOC_CARDS SYSREF_EDOC_TYPES SYSREF_EDOCUMENT_CARD_REQUISITES SYSREF_EDOCUMENT_CARD_TYPES SYSREF_EDOCUMENT_CARD_TYPES_REFERENCE SYSREF_EDOCUMENT_CARDS SYSREF_EDOCUMENT_HISTORY SYSREF_EDOCUMENT_KINDS SYSREF_EDOCUMENT_REQUISITES SYSREF_EDOCUMENT_SIGNATURES SYSREF_EDOCUMENT_TEMPLATES SYSREF_EDOCUMENT_TEXT_STORAGES SYSREF_EDOCUMENT_VIEWS SYSREF_FILTERER_SETUP_CONFLICTS SYSREF_FILTRATER_SETTING_CONFLICTS SYSREF_FOLDER_HISTORY SYSREF_FOLDERS SYSREF_FUNCTION_GROUPS SYSREF_FUNCTION_PARAMS SYSREF_FUNCTIONS SYSREF_JOB_HISTORY SYSREF_LINKS SYSREF_LOCALIZATION_DICTIONARY SYSREF_LOCALIZATION_LANGUAGES SYSREF_MODULES SYSREF_PRIVILEGES SYSREF_RECORD_HISTORY SYSREF_REFERENCE_REQUISITES SYSREF_REFERENCE_TYPE_VIEWS SYSREF_REFERENCE_TYPES SYSREF_REFERENCES SYSREF_REFERENCES_REQUISITES SYSREF_REMOTE_SERVERS SYSREF_REPLICATION_SESSIONS_LOG SYSREF_REPLICATION_SESSIONS_PROTOCOL SYSREF_REPORTS SYSREF_ROLES SYSREF_ROUTE_BLOCK_GROUPS SYSREF_ROUTE_BLOCKS SYSREF_SCRIPTS SYSREF_SEARCHES SYSREF_SERVER_EVENTS SYSREF_SERVER_EVENTS_HISTORY SYSREF_STANDARD_ROUTE_GROUPS SYSREF_STANDARD_ROUTES SYSREF_STATUSES SYSREF_SYSTEM_SETTINGS SYSREF_TASK_HISTORY SYSREF_TASK_KIND_GROUPS SYSREF_TASK_KINDS SYSREF_TASK_RIGHTS SYSREF_TASK_SIGNATURES SYSREF_TASKS SYSREF_UNITS SYSREF_USER_GROUPS SYSREF_USER_GROUPS_REFERENCE SYSREF_USER_SUBSTITUTION SYSREF_USERS SYSREF_USERS_REFERENCE SYSREF_VIEWERS SYSREF_WORKING_TIME_CALENDARS ACCESS_RIGHTS_TABLE_NAME EDMS_ACCESS_TABLE_NAME EDOC_TYPES_TABLE_NAME TEST_DEV_DB_NAME TEST_DEV_SYSTEM_CODE TEST_EDMS_DB_NAME TEST_EDMS_MAIN_CODE TEST_EDMS_MAIN_DB_NAME TEST_EDMS_SECOND_CODE TEST_EDMS_SECOND_DB_NAME TEST_EDMS_SYSTEM_CODE TEST_ISB5_MAIN_CODE TEST_ISB5_SECOND_CODE TEST_SQL_SERVER_2005_NAME TEST_SQL_SERVER_NAME ATTENTION_CAPTION cbsCommandLinks cbsDefault CONFIRMATION_CAPTION ERROR_CAPTION INFORMATION_CAPTION mrCancel mrOk EDOC_VERSION_ACTIVE_STAGE_CODE EDOC_VERSION_DESIGN_STAGE_CODE EDOC_VERSION_OBSOLETE_STAGE_CODE cpDataEnciphermentEnabled cpDigitalSignatureEnabled cpID cpIssuer cpPluginVersion cpSerial cpSubjectName cpSubjSimpleName cpValidFromDate cpValidToDate ISBL_SYNTAX NO_SYNTAX XML_SYNTAX WAIT_BLOCK_AFTER_FINISH_EVENT WAIT_BLOCK_BEFORE_START_EVENT WAIT_BLOCK_DEADLINE_PROPERTY WAIT_BLOCK_IS_RELATIVE_DEADLINE_PROPERTY WAIT_BLOCK_NAME_PROPERTY WAIT_BLOCK_RELATIVE_DEADLINE_TYPE_PROPERTY SYSRES_COMMON SYSRES_CONST SYSRES_MBFUNC SYSRES_SBDATA SYSRES_SBGUI SYSRES_SBINTF SYSRES_SBREFDSC SYSRES_SQLERRORS SYSRES_SYSCOMP atUser atGroup atRole aemEnabledAlways aemDisabledAlways aemEnabledOnBrowse aemEnabledOnEdit aemDisabledOnBrowseEmpty apBegin apEnd alLeft alRight asmNever asmNoButCustomize asmAsLastTime asmYesButCustomize asmAlways cirCommon cirRevoked ctSignature ctEncode ctSignatureEncode clbUnchecked clbChecked clbGrayed ceISB ceAlways ceNever ctDocument ctReference ctScript ctUnknown ctReport ctDialog ctFunction ctFolder ctEDocument ctTask ctJob ctNotice ctControlJob cfInternal cfDisplay ciUnspecified ciWrite ciRead ckFolder ckEDocument ckTask ckJob ckComponentToken ckAny ckReference ckScript ckReport ckDialog ctISBLEditor ctBevel ctButton ctCheckListBox ctComboBox ctComboEdit ctGrid ctDBCheckBox ctDBComboBox ctDBEdit ctDBEllipsis ctDBMemo ctDBNavigator ctDBRadioGroup ctDBStatusLabel ctEdit ctGroupBox ctInplaceHint ctMemo ctPanel ctListBox ctRadioButton ctRichEdit ctTabSheet ctWebBrowser ctImage ctHyperLink ctLabel ctDBMultiEllipsis ctRibbon ctRichView ctInnerPanel ctPanelGroup ctBitButton cctDate cctInteger cctNumeric cctPick cctReference cctString cctText cltInternal cltPrimary cltGUI dseBeforeOpen dseAfterOpen dseBeforeClose dseAfterClose dseOnValidDelete dseBeforeDelete dseAfterDelete dseAfterDeleteOutOfTransaction dseOnDeleteError dseBeforeInsert dseAfterInsert dseOnValidUpdate dseBeforeUpdate dseOnUpdateRatifiedRecord dseAfterUpdate dseAfterUpdateOutOfTransaction dseOnUpdateError dseAfterScroll dseOnOpenRecord dseOnCloseRecord dseBeforeCancel dseAfterCancel dseOnUpdateDeadlockError dseBeforeDetailUpdate dseOnPrepareUpdate dseOnAnyRequisiteChange dssEdit dssInsert dssBrowse dssInActive dftDate dftShortDate dftDateTime dftTimeStamp dotDays dotHours dotMinutes dotSeconds dtkndLocal dtkndUTC arNone arView arEdit arFull ddaView ddaEdit emLock emEdit emSign emExportWithLock emImportWithUnlock emChangeVersionNote emOpenForModify emChangeLifeStage emDelete emCreateVersion emImport emUnlockExportedWithLock emStart emAbort emReInit emMarkAsReaded emMarkAsUnreaded emPerform emAccept emResume emChangeRights emEditRoute emEditObserver emRecoveryFromLocalCopy emChangeWorkAccessType emChangeEncodeTypeToCertificate emChangeEncodeTypeToPassword emChangeEncodeTypeToNone emChangeEncodeTypeToCertificatePassword emChangeStandardRoute emGetText emOpenForView emMoveToStorage emCreateObject emChangeVersionHidden emDeleteVersion emChangeLifeCycleStage emApprovingSign emExport emContinue emLockFromEdit emUnLockForEdit emLockForServer emUnlockFromServer emDelegateAccessRights emReEncode ecotFile ecotProcess eaGet eaCopy eaCreate eaCreateStandardRoute edltAll edltNothing edltQuery essmText essmCard esvtLast esvtLastActive esvtSpecified edsfExecutive edsfArchive edstSQLServer edstFile edvstNone edvstEDocumentVersionCopy edvstFile edvstTemplate edvstScannedFile vsDefault vsDesign vsActive vsObsolete etNone etCertificate etPassword etCertificatePassword ecException ecWarning ecInformation estAll estApprovingOnly evtLast evtLastActive evtQuery fdtString fdtNumeric fdtInteger fdtDate fdtText fdtUnknown fdtWideString fdtLargeInteger ftInbox ftOutbox ftFavorites ftCommonFolder ftUserFolder ftComponents ftQuickLaunch ftShortcuts ftSearch grhAuto grhX1 grhX2 grhX3 hltText hltRTF hltHTML iffBMP iffJPEG iffMultiPageTIFF iffSinglePageTIFF iffTIFF iffPNG im8bGrayscale im24bRGB im1bMonochrome itBMP itJPEG itWMF itPNG ikhInformation ikhWarning ikhError ikhNoIcon icUnknown icScript icFunction icIntegratedReport icAnalyticReport icDataSetEventHandler icActionHandler icFormEventHandler icLookUpEventHandler icRequisiteChangeEventHandler icBeforeSearchEventHandler icRoleCalculation icSelectRouteEventHandler icBlockPropertyCalculation icBlockQueryParamsEventHandler icChangeSearchResultEventHandler icBlockEventHandler icSubTaskInitEventHandler icEDocDataSetEventHandler icEDocLookUpEventHandler icEDocActionHandler icEDocFormEventHandler icEDocRequisiteChangeEventHandler icStructuredConversionRule icStructuredConversionEventBefore icStructuredConversionEventAfter icWizardEventHandler icWizardFinishEventHandler icWizardStepEventHandler icWizardStepFinishEventHandler icWizardActionEnableEventHandler icWizardActionExecuteEventHandler icCreateJobsHandler icCreateNoticesHandler icBeforeLookUpEventHandler icAfterLookUpEventHandler icTaskAbortEventHandler icWorkflowBlockActionHandler icDialogDataSetEventHandler icDialogActionHandler icDialogLookUpEventHandler icDialogRequisiteChangeEventHandler icDialogFormEventHandler icDialogValidCloseEventHandler icBlockFormEventHandler icTaskFormEventHandler icReferenceMethod icEDocMethod icDialogMethod icProcessMessageHandler isShow isHide isByUserSettings jkJob jkNotice jkControlJob jtInner jtLeft jtRight jtFull jtCross lbpAbove lbpBelow lbpLeft lbpRight eltPerConnection eltPerUser sfcUndefined sfcBlack sfcGreen sfcRed sfcBlue sfcOrange sfcLilac sfsItalic sfsStrikeout sfsNormal ldctStandardRoute ldctWizard ldctScript ldctFunction ldctRouteBlock ldctIntegratedReport ldctAnalyticReport ldctReferenceType ldctEDocumentType ldctDialog ldctServerEvents mrcrtNone mrcrtUser mrcrtMaximal mrcrtCustom vtEqual vtGreaterOrEqual vtLessOrEqual vtRange rdYesterday rdToday rdTomorrow rdThisWeek rdThisMonth rdThisYear rdNextMonth rdNextWeek rdLastWeek rdLastMonth rdWindow rdFile rdPrinter rdtString rdtNumeric rdtInteger rdtDate rdtReference rdtAccount rdtText rdtPick rdtUnknown rdtLargeInteger rdtDocument reOnChange reOnChangeValues ttGlobal ttLocal ttUser ttSystem ssmBrowse ssmSelect ssmMultiSelect ssmBrowseModal smSelect smLike smCard stNone stAuthenticating stApproving sctString sctStream sstAnsiSort sstNaturalSort svtEqual svtContain soatString soatNumeric soatInteger soatDatetime soatReferenceRecord soatText soatPick soatBoolean soatEDocument soatAccount soatIntegerCollection soatNumericCollection soatStringCollection soatPickCollection soatDatetimeCollection soatBooleanCollection soatReferenceRecordCollection soatEDocumentCollection soatAccountCollection soatContents soatUnknown tarAbortByUser tarAbortByWorkflowException tvtAllWords tvtExactPhrase tvtAnyWord usNone usCompleted usRedSquare usBlueSquare usYellowSquare usGreenSquare usOrangeSquare usPurpleSquare usFollowUp utUnknown utUser utDeveloper utAdministrator utSystemDeveloper utDisconnected btAnd btDetailAnd btOr btNotOr btOnly vmView vmSelect vmNavigation vsmSingle vsmMultiple vsmMultipleCheck vsmNoSelection wfatPrevious wfatNext wfatCancel wfatFinish wfepUndefined wfepText3 wfepText6 wfepText9 wfepSpinEdit wfepDropDown wfepRadioGroup wfepFlag wfepText12 wfepText15 wfepText18 wfepText21 wfepText24 wfepText27 wfepText30 wfepRadioGroupColumn1 wfepRadioGroupColumn2 wfepRadioGroupColumn3 wfetQueryParameter wfetText wfetDelimiter wfetLabel wptString wptInteger wptNumeric wptBoolean wptDateTime wptPick wptText wptUser wptUserList wptEDocumentInfo wptEDocumentInfoList wptReferenceRecordInfo wptReferenceRecordInfoList wptFolderInfo wptTaskInfo wptContents wptFileName wptDate wsrComplete wsrGoNext wsrGoPrevious wsrCustom wsrCancel wsrGoFinal wstForm wstEDocument wstTaskCard wstReferenceRecordCard wstFinal waAll waPerformers waManual wsbStart wsbFinish wsbNotice wsbStep wsbDecision wsbWait wsbMonitor wsbScript wsbConnector wsbSubTask wsbLifeCycleStage wsbPause wdtInteger wdtFloat wdtString wdtPick wdtDateTime wdtBoolean wdtTask wdtJob wdtFolder wdtEDocument wdtReferenceRecord wdtUser wdtGroup wdtRole wdtIntegerCollection wdtFloatCollection wdtStringCollection wdtPickCollection wdtDateTimeCollection wdtBooleanCollection wdtTaskCollection wdtJobCollection wdtFolderCollection wdtEDocumentCollection wdtReferenceRecordCollection wdtUserCollection wdtGroupCollection wdtRoleCollection wdtContents wdtUserList wdtSearchDescription wdtDeadLine wdtPickSet wdtAccountCollection wiLow wiNormal wiHigh wrtSoft wrtHard wsInit wsRunning wsDone wsControlled wsAborted wsContinued wtmFull wtmFromCurrent wtmOnlyCurrent ",
      class:
        "AltState Application CallType ComponentTokens CreatedJobs CreatedNotices ControlState DialogResult Dialogs EDocuments EDocumentVersionSource Folders GlobalIDs Job Jobs InputValue LookUpReference LookUpRequisiteNames LookUpSearch Object ParentComponent Processes References Requisite ReportName Reports Result Scripts Searches SelectedAttachments SelectedItems SelectMode Sender ServerEvents ServiceFactory ShiftState SubTask SystemDialogs Tasks Wizard Wizards Work ВызовСпособ ИмяОтчета РеквЗнач ",
      literal: "null true false nil ",
    },
    I = { b: "\\.\\s*" + S.UIR, k: C, relevance: 0 },
    N = {
      cN: "type",
      b:
        ":[ \\t]*(" +
        "IApplication IAccessRights IAccountRepository IAccountSelectionRestrictions IAction IActionList IAdministrationHistoryDescription IAnchors IApplication IArchiveInfo IAttachment IAttachmentList ICheckListBox ICheckPointedList IColumn IComponent IComponentDescription IComponentToken IComponentTokenFactory IComponentTokenInfo ICompRecordInfo IConnection IContents IControl IControlJob IControlJobInfo IControlList ICrypto ICrypto2 ICustomJob ICustomJobInfo ICustomListBox ICustomObjectWizardStep ICustomWork ICustomWorkInfo IDataSet IDataSetAccessInfo IDataSigner IDateCriterion IDateRequisite IDateRequisiteDescription IDateValue IDeaAccessRights IDeaObjectInfo IDevelopmentComponentLock IDialog IDialogFactory IDialogPickRequisiteItems IDialogsFactory IDICSFactory IDocRequisite IDocumentInfo IDualListDialog IECertificate IECertificateInfo IECertificates IEditControl IEditorForm IEdmsExplorer IEdmsObject IEdmsObjectDescription IEdmsObjectFactory IEdmsObjectInfo IEDocument IEDocumentAccessRights IEDocumentDescription IEDocumentEditor IEDocumentFactory IEDocumentInfo IEDocumentStorage IEDocumentVersion IEDocumentVersionListDialog IEDocumentVersionSource IEDocumentWizardStep IEDocVerSignature IEDocVersionState IEnabledMode IEncodeProvider IEncrypter IEvent IEventList IException IExternalEvents IExternalHandler IFactory IField IFileDialog IFolder IFolderDescription IFolderDialog IFolderFactory IFolderInfo IForEach IForm IFormTitle IFormWizardStep IGlobalIDFactory IGlobalIDInfo IGrid IHasher IHistoryDescription IHyperLinkControl IImageButton IImageControl IInnerPanel IInplaceHint IIntegerCriterion IIntegerList IIntegerRequisite IIntegerValue IISBLEditorForm IJob IJobDescription IJobFactory IJobForm IJobInfo ILabelControl ILargeIntegerCriterion ILargeIntegerRequisite ILargeIntegerValue ILicenseInfo ILifeCycleStage IList IListBox ILocalIDInfo ILocalization ILock IMemoryDataSet IMessagingFactory IMetadataRepository INotice INoticeInfo INumericCriterion INumericRequisite INumericValue IObject IObjectDescription IObjectImporter IObjectInfo IObserver IPanelGroup IPickCriterion IPickProperty IPickRequisite IPickRequisiteDescription IPickRequisiteItem IPickRequisiteItems IPickValue IPrivilege IPrivilegeList IProcess IProcessFactory IProcessMessage IProgress IProperty IPropertyChangeEvent IQuery IReference IReferenceCriterion IReferenceEnabledMode IReferenceFactory IReferenceHistoryDescription IReferenceInfo IReferenceRecordCardWizardStep IReferenceRequisiteDescription IReferencesFactory IReferenceValue IRefRequisite IReport IReportFactory IRequisite IRequisiteDescription IRequisiteDescriptionList IRequisiteFactory IRichEdit IRouteStep IRule IRuleList ISchemeBlock IScript IScriptFactory ISearchCriteria ISearchCriterion ISearchDescription ISearchFactory ISearchFolderInfo ISearchForObjectDescription ISearchResultRestrictions ISecuredContext ISelectDialog IServerEvent IServerEventFactory IServiceDialog IServiceFactory ISignature ISignProvider ISignProvider2 ISignProvider3 ISimpleCriterion IStringCriterion IStringList IStringRequisite IStringRequisiteDescription IStringValue ISystemDialogsFactory ISystemInfo ITabSheet ITask ITaskAbortReasonInfo ITaskCardWizardStep ITaskDescription ITaskFactory ITaskInfo ITaskRoute ITextCriterion ITextRequisite ITextValue ITreeListSelectDialog IUser IUserList IValue IView IWebBrowserControl IWizard IWizardAction IWizardFactory IWizardFormElement IWizardParam IWizardPickParam IWizardReferenceParam IWizardStep IWorkAccessRights IWorkDescription IWorkflowAskableParam IWorkflowAskableParams IWorkflowBlock IWorkflowBlockResult IWorkflowEnabledMode IWorkflowParam IWorkflowPickParam IWorkflowReferenceParam IWorkState IWorkTreeCustomNode IWorkTreeJobNode IWorkTreeTaskNode IXMLEditorForm SBCrypto "
          .trim()
          .replace(/\s/g, "|") +
        ")",
      e: "[ \\t]*=",
      eE: !0,
    },
    A = { cN: "variable", l: E, k: C, b: E, relevance: 0, c: [N, I] },
    e = "[A-Za-zА-Яа-яёЁ_][A-Za-zА-Яа-яёЁ_0-9]*\\(";
  return {
    aliases: ["isbl"],
    cI: !0,
    l: E,
    k: C,
    i: "\\$|\\?|%|,|;$|~|#|@|</",
    c: [
      {
        cN: "function",
        b: e,
        e: "\\)$",
        rB: !0,
        l: E,
        k: C,
        i: "[\\[\\]\\|\\$\\?%,~#@]",
        c: [
          {
            cN: "title",
            l: E,
            k: {
              built_in:
                "AddSubString AdjustLineBreaks AmountInWords Analysis ArrayDimCount ArrayHighBound ArrayLowBound ArrayOf ArrayReDim Assert Assigned BeginOfMonth BeginOfPeriod BuildProfilingOperationAnalysis CallProcedure CanReadFile CArrayElement CDataSetRequisite ChangeDate ChangeReferenceDataset Char CharPos CheckParam CheckParamValue CompareStrings ConstantExists ControlState ConvertDateStr Copy CopyFile CreateArray CreateCachedReference CreateConnection CreateDialog CreateDualListDialog CreateEditor CreateException CreateFile CreateFolderDialog CreateInputDialog CreateLinkFile CreateList CreateLock CreateMemoryDataSet CreateObject CreateOpenDialog CreateProgress CreateQuery CreateReference CreateReport CreateSaveDialog CreateScript CreateSQLPivotFunction CreateStringList CreateTreeListSelectDialog CSelectSQL CSQL CSubString CurrentUserID CurrentUserName CurrentVersion DataSetLocateEx DateDiff DateTimeDiff DateToStr DayOfWeek DeleteFile DirectoryExists DisableCheckAccessRights DisableCheckFullShowingRestriction DisableMassTaskSendingRestrictions DropTable DupeString EditText EnableCheckAccessRights EnableCheckFullShowingRestriction EnableMassTaskSendingRestrictions EndOfMonth EndOfPeriod ExceptionExists ExceptionsOff ExceptionsOn Execute ExecuteProcess Exit ExpandEnvironmentVariables ExtractFileDrive ExtractFileExt ExtractFileName ExtractFilePath ExtractParams FileExists FileSize FindFile FindSubString FirmContext ForceDirectories Format FormatDate FormatNumeric FormatSQLDate FormatString FreeException GetComponent GetComponentLaunchParam GetConstant GetLastException GetReferenceRecord GetRefTypeByRefID GetTableID GetTempFolder IfThen In IndexOf InputDialog InputDialogEx InteractiveMode IsFileLocked IsGraphicFile IsNumeric Length LoadString LoadStringFmt LocalTimeToUTC LowerCase Max MessageBox MessageBoxEx MimeDecodeBinary MimeDecodeString MimeEncodeBinary MimeEncodeString Min MoneyInWords MoveFile NewID Now OpenFile Ord Precision Raise ReadCertificateFromFile ReadFile ReferenceCodeByID ReferenceNumber ReferenceRequisiteMode ReferenceRequisiteValue RegionDateSettings RegionNumberSettings RegionTimeSettings RegRead RegWrite RenameFile Replace Round SelectServerCode SelectSQL ServerDateTime SetConstant SetManagedFolderFieldsState ShowConstantsInputDialog ShowMessage Sleep Split SQL SQL2XLSTAB SQLProfilingSendReport StrToDate SubString SubStringCount SystemSetting Time TimeDiff Today Transliterate Trim UpperCase UserStatus UTCToLocalTime ValidateXML VarIsClear VarIsEmpty VarIsNull WorkTimeDiff WriteFile WriteFileEx WriteObjectHistory Анализ БазаДанных БлокЕсть БлокЕстьРасш БлокИнфо БлокСнять БлокСнятьРасш БлокУстановить Ввод ВводМеню ВедС ВедСпр ВерхняяГраницаМассива ВнешПрогр Восст ВременнаяПапка Время ВыборSQL ВыбратьЗапись ВыделитьСтр Вызвать Выполнить ВыпПрогр ГрафическийФайл ГруппаДополнительно ДатаВремяСерв ДеньНедели ДиалогДаНет ДлинаСтр ДобПодстр ЕПусто ЕслиТо ЕЧисло ЗамПодстр ЗаписьСправочника ЗначПоляСпр ИДТипСпр ИзвлечьДиск ИзвлечьИмяФайла ИзвлечьПуть ИзвлечьРасширение ИзмДат ИзменитьРазмерМассива ИзмеренийМассива ИмяОрг ИмяПоляСпр Индекс ИндикаторЗакрыть ИндикаторОткрыть ИндикаторШаг ИнтерактивныйРежим ИтогТблСпр КодВидВедСпр КодВидСпрПоИД КодПоAnalit КодСимвола КодСпр КолПодстр КолПроп КонМес Конст КонстЕсть КонстЗнач КонТран КопироватьФайл КопияСтр КПериод КСтрТблСпр Макс МаксСтрТблСпр Массив Меню МенюРасш Мин НаборДанныхНайтиРасш НаимВидСпр НаимПоAnalit НаимСпр НастроитьПереводыСтрок НачМес НачТран НижняяГраницаМассива НомерСпр НПериод Окно Окр Окружение ОтлИнфДобавить ОтлИнфУдалить Отчет ОтчетАнал ОтчетИнт ПапкаСуществует Пауза ПВыборSQL ПереименоватьФайл Переменные ПереместитьФайл Подстр ПоискПодстр ПоискСтр ПолучитьИДТаблицы ПользовательДополнительно ПользовательИД ПользовательИмя ПользовательСтатус Прервать ПроверитьПараметр ПроверитьПараметрЗнач ПроверитьУсловие РазбСтр РазнВремя РазнДат РазнДатаВремя РазнРабВремя РегУстВрем РегУстДат РегУстЧсл РедТекст РеестрЗапись РеестрСписокИменПарам РеестрЧтение РеквСпр РеквСпрПр Сегодня Сейчас Сервер СерверПроцессИД СертификатФайлСчитать СжПроб Символ СистемаДиректумКод СистемаИнформация СистемаКод Содержит СоединениеЗакрыть СоединениеОткрыть СоздатьДиалог СоздатьДиалогВыбораИзДвухСписков СоздатьДиалогВыбораПапки СоздатьДиалогОткрытияФайла СоздатьДиалогСохраненияФайла СоздатьЗапрос СоздатьИндикатор СоздатьИсключение СоздатьКэшированныйСправочник СоздатьМассив СоздатьНаборДанных СоздатьОбъект СоздатьОтчет СоздатьПапку СоздатьРедактор СоздатьСоединение СоздатьСписок СоздатьСписокСтрок СоздатьСправочник СоздатьСценарий СоздСпр СостСпр Сохр СохрСпр СписокСистем Спр Справочник СпрБлокЕсть СпрБлокСнять СпрБлокСнятьРасш СпрБлокУстановить СпрИзмНабДан СпрКод СпрНомер СпрОбновить СпрОткрыть СпрОтменить СпрПарам СпрПолеЗнач СпрПолеИмя СпрРекв СпрРеквВведЗн СпрРеквНовые СпрРеквПр СпрРеквПредЗн СпрРеквРежим СпрРеквТипТекст СпрСоздать СпрСост СпрСохранить СпрТблИтог СпрТблСтр СпрТблСтрКол СпрТблСтрМакс СпрТблСтрМин СпрТблСтрПред СпрТблСтрСлед СпрТблСтрСозд СпрТблСтрУд СпрТекПредст СпрУдалить СравнитьСтр СтрВерхРегистр СтрНижнРегистр СтрТблСпр СумПроп Сценарий СценарийПарам ТекВерсия ТекОрг Точн Тран Транслитерация УдалитьТаблицу УдалитьФайл УдСпр УдСтрТблСпр Уст УстановкиКонстант ФайлАтрибутСчитать ФайлАтрибутУстановить ФайлВремя ФайлВремяУстановить ФайлВыбрать ФайлЗанят ФайлЗаписать ФайлИскать ФайлКопировать ФайлМожноЧитать ФайлОткрыть ФайлПереименовать ФайлПерекодировать ФайлПереместить ФайлПросмотреть ФайлРазмер ФайлСоздать ФайлСсылкаСоздать ФайлСуществует ФайлСчитать ФайлУдалить ФмтSQLДат ФмтДат ФмтСтр ФмтЧсл Формат ЦМассивЭлемент ЦНаборДанныхРеквизит ЦПодстр ",
            },
            b: e,
            e: "\\(",
            rB: !0,
            eE: !0,
          },
          I,
          A,
          T,
          _,
          O,
        ],
      },
      N,
      I,
      A,
      T,
      _,
      O,
    ],
  };
});
hljs.registerLanguage("arcade", function (e) {
  var t = "[A-Za-z_][0-9A-Za-z_]*",
    a = {
      keyword: "if for while var new function do return void else break",
      literal:
        "BackSlash DoubleQuote false ForwardSlash Infinity NaN NewLine null PI SingleQuote Tab TextFormatting true undefined",
      built_in:
        "Abs Acos Angle Attachments Area AreaGeodetic Asin Atan Atan2 Average Bearing Boolean Buffer BufferGeodetic Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance DistanceGeodetic Distinct DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetByAssociation FeatureSetById FeatureSetByPortalItem FeatureSetByRelationshipName FeatureSetByTitle FeatureSetByUrl Filter First Floor Geometry GroupBy Guid HasKey Hour IIf IndexOf Intersection Intersects IsEmpty IsNan IsSelfIntersecting Length LengthGeodetic Log Max Mean Millisecond Min Minute Month MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon Polyline Portal Pow Random Relate Reverse RingIsClockWise Round Second SetGeometry Sin Sort Sqrt Stdev Sum SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TrackCurrentTime TrackGeometryWindow TrackIndex TrackStartTime TrackWindow TypeOf Union UrlEncode Variance Weekday When Within Year ",
    },
    r = {
      cN: "number",
      v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }],
      relevance: 0,
    },
    n = { cN: "subst", b: "\\$\\{", e: "\\}", k: a, c: [] },
    i = { cN: "string", b: "`", e: "`", c: [e.BE, n] };
  n.c = [e.ASM, e.QSM, i, r, e.RM];
  var o = n.c.concat([e.CBCM, e.CLCM]);
  return {
    aliases: ["arcade"],
    k: a,
    c: [
      e.ASM,
      e.QSM,
      i,
      e.CLCM,
      e.CBCM,
      {
        cN: "symbol",
        b: "\\$[datastore|feature|layer|map|measure|sourcefeature|sourcelayer|targetfeature|targetlayer|value|view]+",
      },
      r,
      {
        b: /[{,]\s*/,
        relevance: 0,
        c: [
          {
            b: t + "\\s*:",
            rB: !0,
            relevance: 0,
            c: [{ cN: "attr", b: t, relevance: 0 }],
          },
        ],
      },
      {
        b: "(" + e.RSR + "|\\b(return)\\b)\\s*",
        k: "return",
        c: [
          e.CLCM,
          e.CBCM,
          e.RM,
          {
            cN: "function",
            b: "(\\(.*?\\)|" + t + ")\\s*=>",
            rB: !0,
            e: "\\s*=>",
            c: [
              {
                cN: "params",
                v: [
                  { b: t },
                  { b: /\(\s*\)/ },
                  { b: /\(/, e: /\)/, eB: !0, eE: !0, k: a, c: o },
                ],
              },
            ],
          },
        ],
        relevance: 0,
      },
      {
        cN: "function",
        bK: "function",
        e: /\{/,
        eE: !0,
        c: [
          e.inherit(e.TM, { b: t }),
          { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: o },
        ],
        i: /\[|%/,
      },
      { b: /\$[(.]/ },
    ],
    i: /#(?!!)/,
  };
});
hljs.registerLanguage("gams", function (e) {
  var a = {
      keyword:
        "abort acronym acronyms alias all and assign binary card diag display else eq file files for free ge gt if integer le loop lt maximizing minimizing model models ne negative no not option options or ord positive prod put putpage puttl repeat sameas semicont semiint smax smin solve sos1 sos2 sum system table then until using while xor yes",
      literal: "eps inf na",
      "built-in":
        "abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power randBinomial randLinear randTriangle round rPower sigmoid sign signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion handleCollect handleDelete handleStatus handleSubmit heapFree heapLimit heapSize jobHandle jobKill jobStatus jobTerminate licenseLevel licenseStatus maxExecError sleep timeClose timeComp timeElapsed timeExec timeStart",
    },
    o = { cN: "symbol", v: [{ b: /\=[lgenxc]=/ }, { b: /\$/ }] },
    r = {
      cN: "comment",
      v: [
        { b: "'", e: "'" },
        { b: '"', e: '"' },
      ],
      i: "\\n",
      c: [e.BE],
    },
    t = { b: "/", e: "/", k: a, c: [r, e.CLCM, e.CBCM, e.QSM, e.ASM, e.CNM] },
    l = {
      b: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
      eB: !0,
      e: "$",
      eW: !0,
      c: [
        r,
        t,
        {
          cN: "comment",
          b: /([ ]*[a-z0-9&#*=?@>\\<:\-,()$\[\]_.{}!+%^]+)+/,
          relevance: 0,
        },
      ],
    };
  return {
    aliases: ["gms"],
    cI: !0,
    k: a,
    c: [
      e.C(/^\$ontext/, /^\$offtext/),
      {
        cN: "meta",
        b: "^\\$[a-z0-9]+",
        e: "$",
        rB: !0,
        c: [{ cN: "meta-keyword", b: "^\\$[a-z0-9]+" }],
      },
      e.C("^\\*", "$"),
      e.CLCM,
      e.CBCM,
      e.QSM,
      e.ASM,
      {
        bK: "set sets parameter parameters variable variables scalar scalars equation equations",
        e: ";",
        c: [e.C("^\\*", "$"), e.CLCM, e.CBCM, e.QSM, e.ASM, t, l],
      },
      {
        bK: "table",
        e: ";",
        rB: !0,
        c: [
          { bK: "table", e: "$", c: [l] },
          e.C("^\\*", "$"),
          e.CLCM,
          e.CBCM,
          e.QSM,
          e.ASM,
          e.CNM,
        ],
      },
      {
        cN: "function",
        b: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
        rB: !0,
        c: [
          { cN: "title", b: /^[a-z0-9_]+/ },
          { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0 },
          o,
        ],
      },
      e.CNM,
      o,
    ],
  };
});
hljs.registerLanguage("objectivec", function (e) {
  var t = /[a-zA-Z@][a-zA-Z0-9_]*/,
    i = "@interface @class @protocol @implementation";
  return {
    aliases: ["mm", "objc", "obj-c"],
    k: {
      keyword:
        "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
      literal: "false true FALSE TRUE nil YES NO NULL",
      built_in:
        "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once",
    },
    l: t,
    i: "</",
    c: [
      {
        cN: "built_in",
        b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+",
      },
      e.CLCM,
      e.CBCM,
      e.CNM,
      e.QSM,
      e.ASM,
      { cN: "string", v: [{ b: '@"', e: '"', i: "\\n", c: [e.BE] }] },
      {
        cN: "meta",
        b: /#\s*[a-z]+\b/,
        e: /$/,
        k: {
          "meta-keyword":
            "if else elif endif define undef warning error line pragma ifdef ifndef include",
        },
        c: [
          { b: /\\\n/, relevance: 0 },
          e.inherit(e.QSM, { cN: "meta-string" }),
          { cN: "meta-string", b: /<.*?>/, e: /$/, i: "\\n" },
          e.CLCM,
          e.CBCM,
        ],
      },
      {
        cN: "class",
        b: "(" + i.split(" ").join("|") + ")\\b",
        e: "({|$)",
        eE: !0,
        k: i,
        l: t,
        c: [e.UTM],
      },
      { b: "\\." + e.UIR, relevance: 0 },
    ],
  };
});
hljs.registerLanguage("xml", function (e) {
  var c = { cN: "symbol", b: "&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;" },
    s = {
      b: "\\s",
      c: [{ cN: "meta-keyword", b: "#?[a-z_][a-z1-9_-]+", i: "\\n" }],
    },
    a = e.inherit(s, { b: "\\(", e: "\\)" }),
    t = e.inherit(e.ASM, { cN: "meta-string" }),
    l = e.inherit(e.QSM, { cN: "meta-string" }),
    r = {
      eW: !0,
      i: /</,
      relevance: 0,
      c: [
        { cN: "attr", b: "[A-Za-z0-9\\._:-]+", relevance: 0 },
        {
          b: /=\s*/,
          relevance: 0,
          c: [
            {
              cN: "string",
              endsParent: !0,
              v: [
                { b: /"/, e: /"/, c: [c] },
                { b: /'/, e: /'/, c: [c] },
                { b: /[^\s"'=<>`]+/ },
              ],
            },
          ],
        },
      ],
    };
  return {
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg",
    ],
    cI: !0,
    c: [
      {
        cN: "meta",
        b: "<![a-z]",
        e: ">",
        relevance: 10,
        c: [
          s,
          l,
          t,
          a,
          {
            b: "\\[",
            e: "\\]",
            c: [{ cN: "meta", b: "<![a-z]", e: ">", c: [s, a, l, t] }],
          },
        ],
      },
      e.C("\x3c!--", "--\x3e", { relevance: 10 }),
      { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", relevance: 10 },
      c,
      { cN: "meta", b: /<\?xml/, e: /\?>/, relevance: 10 },
      {
        b: /<\?(php)?/,
        e: /\?>/,
        sL: "php",
        c: [
          { b: "/\\*", e: "\\*/", skip: !0 },
          { b: 'b"', e: '"', skip: !0 },
          { b: "b'", e: "'", skip: !0 },
          e.inherit(e.ASM, { i: null, cN: null, c: null, skip: !0 }),
          e.inherit(e.QSM, { i: null, cN: null, c: null, skip: !0 }),
        ],
      },
      {
        cN: "tag",
        b: "<style(?=\\s|>)",
        e: ">",
        k: { name: "style" },
        c: [r],
        starts: { e: "</style>", rE: !0, sL: ["css", "xml"] },
      },
      {
        cN: "tag",
        b: "<script(?=\\s|>)",
        e: ">",
        k: { name: "script" },
        c: [r],
        starts: {
          e: "</script>",
          rE: !0,
          sL: ["actionscript", "javascript", "handlebars", "xml"],
        },
      },
      {
        cN: "tag",
        b: "</?",
        e: "/?>",
        c: [{ cN: "name", b: /[^\/><\s]+/, relevance: 0 }, r],
      },
    ],
  };
});
hljs.registerLanguage("django", function (e) {
  var t = {
    b: /\|[A-Za-z]+:?/,
    k: {
      name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",
    },
    c: [e.QSM, e.ASM],
  };
  return {
    aliases: ["jinja"],
    cI: !0,
    sL: "xml",
    c: [
      e.C(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/),
      e.C(/\{#/, /#}/),
      {
        cN: "template-tag",
        b: /\{%/,
        e: /%}/,
        c: [
          {
            cN: "name",
            b: /\w+/,
            k: {
              name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",
            },
            starts: { eW: !0, k: "in by as", c: [t], relevance: 0 },
          },
        ],
      },
      { cN: "template-variable", b: /\{\{/, e: /}}/, c: [t] },
    ],
  };
});
hljs.registerLanguage("irpf90", function (e) {
  return {
    cI: !0,
    k: {
      literal: ".False. .True.",
      keyword:
        "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read",
      built_in:
        "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image IRP_ALIGN irp_here",
    },
    i: /\/\*/,
    c: [
      e.inherit(e.ASM, { cN: "string", relevance: 0 }),
      e.inherit(e.QSM, { cN: "string", relevance: 0 }),
      {
        cN: "function",
        bK: "subroutine function program",
        i: "[${=\\n]",
        c: [e.UTM, { cN: "params", b: "\\(", e: "\\)" }],
      },
      e.C("!", "$", { relevance: 0 }),
      e.C("begin_doc", "end_doc", { relevance: 10 }),
      {
        cN: "number",
        b: "(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?",
        relevance: 0,
      },
    ],
  };
});
hljs.registerLanguage("tcl", function (e) {
  return {
    aliases: ["tk"],
    k: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
    c: [
      e.C(";[ \\t]*#", "$"),
      e.C("^[ \\t]*#", "$"),
      {
        bK: "proc",
        e: "[\\{]",
        eE: !0,
        c: [
          {
            cN: "title",
            b: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
            e: "[ \\t\\n\\r]",
            eW: !0,
            eE: !0,
          },
        ],
      },
      {
        eE: !0,
        v: [
          {
            b: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)",
            e: "[^a-zA-Z0-9_\\}\\$]",
          },
          {
            b: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
            e: "(\\))?[^a-zA-Z0-9_\\}\\$]",
          },
        ],
      },
      { cN: "string", c: [e.BE], v: [e.inherit(e.QSM, { i: null })] },
      { cN: "number", v: [e.BNM, e.CNM] },
    ],
  };
});
hljs.registerLanguage("http", function (e) {
  var t = "HTTP/[0-9\\.]+";
  return {
    aliases: ["https"],
    i: "\\S",
    c: [
      { b: "^" + t, e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] },
      {
        b: "^[A-Z]+ (.*?) " + t + "$",
        rB: !0,
        e: "$",
        c: [
          { cN: "string", b: " ", e: " ", eB: !0, eE: !0 },
          { b: t },
          { cN: "keyword", b: "[A-Z]+" },
        ],
      },
      {
        cN: "attribute",
        b: "^\\w",
        e: ": ",
        eE: !0,
        i: "\\n|\\s|=",
        starts: { e: "$", relevance: 0 },
      },
      { b: "\\n\\n", starts: { sL: [], eW: !0 } },
    ],
  };
});
hljs.registerLanguage("llvm", function (e) {
  var n = "([-a-zA-Z$._][\\w\\-$.]*)";
  return {
    k: "begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double",
    c: [
      { cN: "keyword", b: "i\\d+" },
      e.C(";", "\\n", { relevance: 0 }),
      e.QSM,
      { cN: "string", v: [{ b: '"', e: '[^\\\\]"' }], relevance: 0 },
      {
        cN: "title",
        v: [{ b: "@" + n }, { b: "@\\d+" }, { b: "!" + n }, { b: "!\\d+" + n }],
      },
      { cN: "symbol", v: [{ b: "%" + n }, { b: "%\\d+" }, { b: "#\\d+" }] },
      {
        cN: "number",
        v: [
          { b: "0[xX][a-fA-F0-9]+" },
          { b: "-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?" },
        ],
        relevance: 0,
      },
    ],
  };
});
hljs.registerLanguage("erlang", function (e) {
  var r = "[a-z'][a-zA-Z0-9_']*",
    c = "(" + r + ":" + r + "|" + r + ")",
    n = {
      keyword:
        "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
      literal: "false true",
    },
    a = e.C("%", "$"),
    b = {
      cN: "number",
      b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
      relevance: 0,
    },
    i = { b: "fun\\s+" + r + "/\\d+" },
    l = {
      b: c + "\\(",
      e: "\\)",
      rB: !0,
      relevance: 0,
      c: [
        { b: c, relevance: 0 },
        { b: "\\(", e: "\\)", eW: !0, rE: !0, relevance: 0 },
      ],
    },
    d = { b: "{", e: "}", relevance: 0 },
    o = { b: "\\b_([A-Z][A-Za-z0-9_]*)?", relevance: 0 },
    t = { b: "[A-Z][a-zA-Z0-9_]*", relevance: 0 },
    v = {
      b: "#" + e.UIR,
      relevance: 0,
      rB: !0,
      c: [
        { b: "#" + e.UIR, relevance: 0 },
        { b: "{", e: "}", relevance: 0 },
      ],
    },
    f = { bK: "fun receive if try case", e: "end", k: n };
  f.c = [a, i, e.inherit(e.ASM, { cN: "" }), f, l, e.QSM, b, d, o, t, v];
  var s = [a, i, f, l, e.QSM, b, d, o, t, v];
  (l.c[1].c = s), (d.c = s);
  var u = { cN: "params", b: "\\(", e: "\\)", c: (v.c[1].c = s) };
  return {
    aliases: ["erl"],
    k: n,
    i: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
    c: [
      {
        cN: "function",
        b: "^" + r + "\\s*\\(",
        e: "->",
        rB: !0,
        i: "\\(|#|//|/\\*|\\\\|:|;",
        c: [u, e.inherit(e.TM, { b: r })],
        starts: { e: ";|\\.", k: n, c: s },
      },
      a,
      {
        b: "^-",
        e: "\\.",
        relevance: 0,
        eE: !0,
        rB: !0,
        l: "-" + e.IR,
        k: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",
        c: [u],
      },
      b,
      e.QSM,
      v,
      o,
      t,
      d,
      { b: /\.$/ },
    ],
  };
});
hljs.registerLanguage("powershell", function (e) {
  var t = {
      keyword:
        "if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
    },
    n = { b: "`[\\s\\S]", relevance: 0 },
    c = {
      cN: "variable",
      v: [
        { b: /\$\B/ },
        { cN: "keyword", b: /\$this/ },
        { b: /\$[\w\d][\w\d_:]*/ },
      ],
    },
    i = {
      cN: "string",
      v: [
        { b: /"/, e: /"/ },
        { b: /@"/, e: /^"@/ },
      ],
      c: [n, c, { cN: "variable", b: /\$[A-z]/, e: /[^A-z]/ }],
    },
    a = {
      cN: "string",
      v: [
        { b: /'/, e: /'/ },
        { b: /@'/, e: /^'@/ },
      ],
    },
    r = e.inherit(e.C(null, null), {
      v: [
        { b: /#/, e: /$/ },
        { b: /<#/, e: /#>/ },
      ],
      c: [
        {
          cN: "doctag",
          v: [
            {
              b: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/,
            },
            {
              b: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/,
            },
          ],
        },
      ],
    }),
    o = {
      cN: "built_in",
      v: [
        {
          b: "(".concat(
            "Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|New|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Complete|Confirm|Deny|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",
            ")+(-)[\\w\\d]+"
          ),
        },
      ],
    },
    l = {
      cN: "class",
      bK: "class enum",
      e: /\s*[{]/,
      eE: !0,
      relevance: 0,
      c: [e.TM],
    },
    s = {
      cN: "function",
      b: /function\s+/,
      e: /\s*\{|$/,
      eE: !0,
      rB: !0,
      relevance: 0,
      c: [
        { b: "function", relevance: 0, cN: "keyword" },
        { cN: "title", b: /\w[\w\d]*((-)[\w\d]+)*/, relevance: 0 },
        { b: /\(/, e: /\)/, cN: "params", relevance: 0, c: [c] },
      ],
    },
    p = {
      b: /using\s/,
      e: /$/,
      rB: !0,
      c: [
        i,
        a,
        { cN: "keyword", b: /(using|assembly|command|module|namespace|type)/ },
      ],
    },
    b = {
      v: [
        {
          cN: "operator",
          b: "(".concat(
            "-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",
            ")\\b"
          ),
        },
        { cN: "literal", b: /(-)[\w\d]+/, relevance: 0 },
      ],
    },
    d = {
      cN: "function",
      b: /\[.*\]\s*[\w]+[ ]??\(/,
      e: /$/,
      rB: !0,
      relevance: 0,
      c: [
        {
          cN: "keyword",
          b: "(".concat(t.keyword.toString().replace(/\s/g, "|"), ")\\b"),
          endsParent: !0,
          relevance: 0,
        },
        e.inherit(e.TM, { endsParent: !0 }),
      ],
    },
    u = [
      d,
      r,
      n,
      e.NM,
      i,
      a,
      o,
      c,
      { cN: "literal", b: /\$(null|true|false)\b/ },
      { cN: "selector-tag", b: /\@\B/, relevance: 0 },
    ],
    m = {
      b: /\[/,
      e: /\]/,
      eB: !0,
      eE: !0,
      relevance: 0,
      c: [].concat(
        "self",
        u,
        {
          b:
            "(" +
            [
              "string",
              "char",
              "byte",
              "int",
              "long",
              "bool",
              "decimal",
              "single",
              "double",
              "DateTime",
              "xml",
              "array",
              "hashtable",
              "void",
            ].join("|") +
            ")",
          cN: "built_in",
          relevance: 0,
        },
        { cN: "type", b: /[\.\w\d]+/, relevance: 0 }
      ),
    };
  return (
    d.c.unshift(m),
    {
      aliases: ["ps", "ps1"],
      l: /-?[A-z\.\-]+/,
      cI: !0,
      k: t,
      c: u.concat(l, s, p, b, m),
    }
  );
});
hljs.registerLanguage("tex", function (e) {
  var c = {
    cN: "tag",
    b: /\\/,
    relevance: 0,
    c: [
      {
        cN: "name",
        v: [
          { b: /[a-zA-Z\u0430-\u044f\u0410-\u042f]+[*]?/ },
          { b: /[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9]/ },
        ],
        starts: {
          eW: !0,
          relevance: 0,
          c: [
            {
              cN: "string",
              v: [
                { b: /\[/, e: /\]/ },
                { b: /\{/, e: /\}/ },
              ],
            },
            {
              b: /\s*=\s*/,
              eW: !0,
              relevance: 0,
              c: [
                { cN: "number", b: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/ },
              ],
            },
          ],
        },
      },
    ],
  };
  return {
    c: [
      c,
      {
        cN: "formula",
        c: [c],
        relevance: 0,
        v: [
          { b: /\$\$/, e: /\$\$/ },
          { b: /\$/, e: /\$/ },
        ],
      },
      e.C("%", "$", { relevance: 0 }),
    ],
  };
});
hljs.registerLanguage("clojure", function (e) {
  var t = "a-zA-Z_\\-!.?+*=<>&#'",
    n = "[" + t + "][" + t + "0-9/;:]*",
    r = { b: n, relevance: 0 },
    a = { cN: "number", b: "[-+]?\\d+(\\.\\d+)?", relevance: 0 },
    o = e.inherit(e.QSM, { i: null }),
    s = e.C(";", "$", { relevance: 0 }),
    c = { cN: "literal", b: /\b(true|false|nil)\b/ },
    i = { b: "[\\[\\{]", e: "[\\]\\}]" },
    d = { cN: "comment", b: "\\^" + n },
    l = e.C("\\^\\{", "\\}"),
    m = { cN: "symbol", b: "[:]{1,2}" + n },
    p = { b: "\\(", e: "\\)" },
    u = { eW: !0, relevance: 0 },
    f = {
      k: {
        "builtin-name":
          "def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize",
      },
      l: n,
      cN: "name",
      b: n,
      starts: u,
    },
    h = [p, o, d, l, s, m, i, a, c, r];
  return (
    (p.c = [e.C("comment", ""), f, u]),
    (u.c = h),
    (i.c = h),
    (l.c = [i]),
    { aliases: ["clj"], i: /\S/, c: [p, o, d, l, s, m, i, a, c] }
  );
});
hljs.registerLanguage("clojure-repl", function (e) {
  return {
    c: [
      {
        cN: "meta",
        b: /^([\w.-]+|\s*#_)?=>/,
        starts: { e: /$/, sL: "clojure" },
      },
    ],
  };
});
hljs.registerLanguage("lisp", function (e) {
  var b =
      "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",
    c = "\\|[^]*?\\|",
    a =
      "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",
    l = { cN: "literal", b: "\\b(t{1}|nil)\\b" },
    n = {
      cN: "number",
      v: [
        { b: a, relevance: 0 },
        { b: "#(b|B)[0-1]+(/[0-1]+)?" },
        { b: "#(o|O)[0-7]+(/[0-7]+)?" },
        { b: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?" },
        { b: "#(c|C)\\(" + a + " +" + a, e: "\\)" },
      ],
    },
    r = e.inherit(e.QSM, { i: null }),
    i = e.C(";", "$", { relevance: 0 }),
    t = { b: "\\*", e: "\\*" },
    v = { cN: "symbol", b: "[:&]" + b },
    s = { b: b, relevance: 0 },
    u = { b: c },
    d = {
      c: [n, r, t, v, { b: "\\(", e: "\\)", c: ["self", l, r, n, s] }, s],
      v: [
        { b: "['`]\\(", e: "\\)" },
        { b: "\\(quote ", e: "\\)", k: { name: "quote" } },
        { b: "'" + c },
      ],
    },
    f = { v: [{ b: "'" + b }, { b: "#'" + b + "(::" + b + ")*" }] },
    m = { b: "\\(\\s*", e: "\\)" },
    o = { eW: !0, relevance: 0 };
  return (
    (m.c = [{ cN: "name", v: [{ b: b }, { b: c }] }, o]),
    (o.c = [d, f, m, l, n, r, i, t, v, u, s]),
    { i: /\S/, c: [n, { cN: "meta", b: "^#!", e: "$" }, l, r, i, d, f, m, s] }
  );
});
hljs.registerLanguage("oxygene", function (e) {
  var r =
      "abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained",
    t = e.C("{", "}", { relevance: 0 }),
    a = e.C("\\(\\*", "\\*\\)", { relevance: 10 }),
    n = { cN: "string", b: "'", e: "'", c: [{ b: "''" }] },
    o = { cN: "string", b: "(#\\d+)+" },
    i = {
      cN: "function",
      bK: "function constructor destructor procedure method",
      e: "[:;]",
      k: "function constructor|10 destructor|10 procedure|10 method|10",
      c: [e.TM, { cN: "params", b: "\\(", e: "\\)", k: r, c: [n, o] }, t, a],
    };
  return {
    cI: !0,
    l: /\.?\w+/,
    k: r,
    i: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
    c: [
      t,
      a,
      e.CLCM,
      n,
      o,
      e.NM,
      i,
      {
        cN: "class",
        b: "=\\bclass\\b",
        e: "end;",
        k: r,
        c: [n, o, t, a, e.CLCM, i],
      },
    ],
  };
});
hljs.registerLanguage("routeros", function (e) {
  var r = "foreach do while for if from to step else on-error and or not in",
    i = "true false yes no nothing nil null",
    o = {
      cN: "variable",
      v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
    },
    t = {
      cN: "string",
      b: /"/,
      e: /"/,
      c: [e.BE, o, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }],
    },
    s = { cN: "string", b: /'/, e: /'/ };
  return {
    aliases: ["routeros", "mikrotik"],
    cI: !0,
    l: /:?[\w-]+/,
    k: {
      literal: i,
      keyword:
        r +
        " :" +
        r.split(" ").join(" :") +
        " :" +
        "global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime"
          .split(" ")
          .join(" :"),
    },
    c: [
      {
        v: [
          { b: /^@/, e: /$/ },
          { b: /\/\*/, e: /\*\// },
          { b: /%%/, e: /$/ },
          { b: /^'/, e: /$/ },
          { b: /^\s*\/[\w-]+=/, e: /$/ },
          { b: /\/\//, e: /$/ },
          { b: /^\[\</, e: /\>\]$/ },
          { b: /<\//, e: />/ },
          { b: /^facet /, e: /\}/ },
          { b: "^1\\.\\.(\\d+)$", e: /$/ },
        ],
        i: /./,
      },
      e.C("^#", "$"),
      t,
      s,
      o,
      {
        b: /[\w-]+\=([^\s\{\}\[\]\(\)]+)/,
        relevance: 0,
        rB: !0,
        c: [
          { cN: "attribute", b: /[^=]+/ },
          {
            b: /=/,
            eW: !0,
            relevance: 0,
            c: [
              t,
              s,
              o,
              { cN: "literal", b: "\\b(" + i.split(" ").join("|") + ")\\b" },
              { b: /("[^"]*"|[^\s\{\}\[\]]+)/ },
            ],
          },
        ],
      },
      { cN: "number", b: /\*[0-9a-fA-F]+/ },
      {
        b:
          "\\b(" +
          "add remove enable disable set get print export edit find run debug error info warning"
            .split(" ")
            .join("|") +
          ")([\\s[(]|])",
        rB: !0,
        c: [{ cN: "builtin-name", b: /\w+/ }],
      },
      {
        cN: "built_in",
        v: [
          {
            b:
              "(\\.\\./|/|\\s)((" +
              "traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firewall firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw"
                .split(" ")
                .join("|") +
              ");?\\s)+",
            relevance: 10,
          },
          { b: /\.\./ },
        ],
      },
    ],
  };
});
hljs.registerLanguage("actionscript", function (e) {
  var a = {
    cN: "rest_arg",
    b: "[.]{3}",
    e: "[a-zA-Z_$][a-zA-Z0-9_$]*",
    relevance: 10,
  };
  return {
    aliases: ["as"],
    k: {
      keyword:
        "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
      literal: "true false null undefined",
    },
    c: [
      e.ASM,
      e.QSM,
      e.CLCM,
      e.CBCM,
      e.CNM,
      { cN: "class", bK: "package", e: "{", c: [e.TM] },
      {
        cN: "class",
        bK: "class interface",
        e: "{",
        eE: !0,
        c: [{ bK: "extends implements" }, e.TM],
      },
      {
        cN: "meta",
        bK: "import include",
        e: ";",
        k: { "meta-keyword": "import include" },
      },
      {
        cN: "function",
        bK: "function",
        e: "[{;]",
        eE: !0,
        i: "\\S",
        c: [
          e.TM,
          {
            cN: "params",
            b: "\\(",
            e: "\\)",
            c: [e.ASM, e.QSM, e.CLCM, e.CBCM, a],
          },
          { b: ":\\s*([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)" },
        ],
      },
      e.METHOD_GUARD,
    ],
    i: /#/,
  };
});
hljs.registerLanguage("cal", function (e) {
  var r =
      "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",
    c = [
      e.CLCM,
      e.C(/\{/, /\}/, { relevance: 0 }),
      e.C(/\(\*/, /\*\)/, { relevance: 10 }),
    ],
    n = { cN: "string", b: /'/, e: /'/, c: [{ b: /''/ }] },
    t = { cN: "string", b: /(#\d+)+/ },
    a = {
      cN: "function",
      bK: "procedure",
      e: /[:;]/,
      k: "procedure|10",
      c: [e.TM, { cN: "params", b: /\(/, e: /\)/, k: r, c: [n, t] }].concat(c),
    },
    o = {
      cN: "class",
      b: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
      rB: !0,
      c: [e.TM, a],
    };
  return {
    cI: !0,
    k: { keyword: r, literal: "false true" },
    i: /\/\*/,
    c: [
      n,
      t,
      { cN: "number", b: "\\b\\d+(\\.\\d+)?(DT|D|T)", relevance: 0 },
      { cN: "string", b: '"', e: '"' },
      e.NM,
      o,
      a,
    ],
  };
});
hljs.registerLanguage("fix", function (u) {
  return {
    c: [
      {
        b: /[^\u2401\u0001]+/,
        e: /[\u2401\u0001]/,
        eE: !0,
        rB: !0,
        rE: !1,
        c: [
          {
            b: /([^\u2401\u0001=]+)/,
            e: /=([^\u2401\u0001=]+)/,
            rE: !0,
            rB: !1,
            cN: "attr",
          },
          { b: /=/, e: /([\u2401\u0001])/, eE: !0, eB: !0, cN: "string" },
        ],
      },
    ],
    cI: !0,
  };
});
hljs.registerLanguage("ocaml", function (e) {
  return {
    aliases: ["ml"],
    k: {
      keyword:
        "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
      built_in:
        "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
      literal: "true false",
    },
    i: /\/\/|>>/,
    l: "[a-z_]\\w*!?",
    c: [
      { cN: "literal", b: "\\[(\\|\\|)?\\]|\\(\\)", relevance: 0 },
      e.C("\\(\\*", "\\*\\)", { c: ["self"] }),
      { cN: "symbol", b: "'[A-Za-z_](?!')[\\w']*" },
      { cN: "type", b: "`[A-Z][\\w']*" },
      { cN: "type", b: "\\b[A-Z][\\w']*", relevance: 0 },
      { b: "[a-z_]\\w*'[\\w']*", relevance: 0 },
      e.inherit(e.ASM, { cN: "string", relevance: 0 }),
      e.inherit(e.QSM, { i: null }),
      {
        cN: "number",
        b: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        relevance: 0,
      },
      { b: /[-=]>/ },
    ],
  };
});
hljs.registerLanguage("scala", function (e) {
  var t = {
      cN: "subst",
      v: [{ b: "\\$[A-Za-z0-9_]+" }, { b: "\\${", e: "}" }],
    },
    a = {
      cN: "string",
      v: [
        { b: '"', e: '"', i: "\\n", c: [e.BE] },
        { b: '"""', e: '"""', relevance: 10 },
        { b: '[a-z]+"', e: '"', i: "\\n", c: [e.BE, t] },
        { cN: "string", b: '[a-z]+"""', e: '"""', c: [t], relevance: 10 },
      ],
    },
    c = { cN: "type", b: "\\b[A-Z][A-Za-z0-9_]*", relevance: 0 },
    r = {
      cN: "title",
      b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
      relevance: 0,
    },
    n = {
      cN: "class",
      bK: "class object trait type",
      e: /[:={\[\n;]/,
      eE: !0,
      c: [
        { bK: "extends with", relevance: 10 },
        { b: /\[/, e: /\]/, eB: !0, eE: !0, relevance: 0, c: [c] },
        {
          cN: "params",
          b: /\(/,
          e: /\)/,
          eB: !0,
          eE: !0,
          relevance: 0,
          c: [c],
        },
        r,
      ],
    },
    l = { cN: "function", bK: "def", e: /[:={\[(\n;]/, eE: !0, c: [r] };
  return {
    k: {
      literal: "true false null",
      keyword:
        "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit",
    },
    c: [
      e.CLCM,
      e.CBCM,
      a,
      { cN: "symbol", b: "'\\w[\\w\\d_]*(?!')" },
      c,
      l,
      n,
      e.CNM,
      { cN: "meta", b: "@[A-Za-z]+" },
    ],
  };
});
hljs.registerLanguage("asciidoc", function (e) {
  return {
    aliases: ["adoc"],
    c: [
      e.C("^/{4,}\\n", "\\n/{4,}$", { relevance: 10 }),
      e.C("^//", "$", { relevance: 0 }),
      { cN: "title", b: "^\\.\\w.*$" },
      { b: "^[=\\*]{4,}\\n", e: "\\n^[=\\*]{4,}$", relevance: 10 },
      {
        cN: "section",
        relevance: 10,
        v: [
          { b: "^(={1,5}) .+?( \\1)?$" },
          { b: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$" },
        ],
      },
      { cN: "meta", b: "^:.+?:", e: "\\s", eE: !0, relevance: 10 },
      { cN: "meta", b: "^\\[.+?\\]$", relevance: 0 },
      { cN: "quote", b: "^_{4,}\\n", e: "\\n_{4,}$", relevance: 10 },
      {
        cN: "code",
        b: "^[\\-\\.]{4,}\\n",
        e: "\\n[\\-\\.]{4,}$",
        relevance: 10,
      },
      {
        b: "^\\+{4,}\\n",
        e: "\\n\\+{4,}$",
        c: [{ b: "<", e: ">", sL: "xml", relevance: 0 }],
        relevance: 10,
      },
      { cN: "bullet", b: "^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+" },
      {
        cN: "symbol",
        b: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
        relevance: 10,
      },
      {
        cN: "strong",
        b: "\\B\\*(?![\\*\\s])",
        e: "(\\n{2}|\\*)",
        c: [{ b: "\\\\*\\w", relevance: 0 }],
      },
      {
        cN: "emphasis",
        b: "\\B'(?!['\\s])",
        e: "(\\n{2}|')",
        c: [{ b: "\\\\'\\w", relevance: 0 }],
        relevance: 0,
      },
      { cN: "emphasis", b: "_(?![_\\s])", e: "(\\n{2}|_)", relevance: 0 },
      { cN: "string", v: [{ b: "``.+?''" }, { b: "`.+?'" }] },
      { cN: "code", b: "(`.+?`|\\+.+?\\+)", relevance: 0 },
      { cN: "code", b: "^[ \\t]", e: "$", relevance: 0 },
      { b: "^'{3,}[ \\t]*$", relevance: 10 },
      {
        b: "(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",
        rB: !0,
        c: [
          { b: "(link|image:?):", relevance: 0 },
          { cN: "link", b: "\\w", e: "[^\\[]+", relevance: 0 },
          { cN: "string", b: "\\[", e: "\\]", eB: !0, eE: !0, relevance: 0 },
        ],
        relevance: 10,
      },
    ],
  };
});
hljs.registerLanguage("moonscript", function (e) {
  var t = {
      keyword:
        "if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",
      literal: "true false nil",
      built_in:
        "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table",
    },
    r = "[A-Za-z$_][0-9A-Za-z$_]*",
    a = { cN: "subst", b: /#\{/, e: /}/, k: t },
    s = [
      e.inherit(e.CNM, { starts: { e: "(\\s*/)?", relevance: 0 } }),
      {
        cN: "string",
        v: [
          { b: /'/, e: /'/, c: [e.BE] },
          { b: /"/, e: /"/, c: [e.BE, a] },
        ],
      },
      { cN: "built_in", b: "@__" + e.IR },
      { b: "@" + e.IR },
      { b: e.IR + "\\\\" + e.IR },
    ];
  a.c = s;
  var c = e.inherit(e.TM, { b: r }),
    n = "(\\(.*\\))?\\s*\\B[-=]>",
    i = {
      cN: "params",
      b: "\\([^\\(]",
      rB: !0,
      c: [{ b: /\(/, e: /\)/, k: t, c: ["self"].concat(s) }],
    };
  return {
    aliases: ["moon"],
    k: t,
    i: /\/\*/,
    c: s.concat([
      e.C("--", "$"),
      {
        cN: "function",
        b: "^\\s*" + r + "\\s*=\\s*" + n,
        e: "[-=]>",
        rB: !0,
        c: [c, i],
      },
      {
        b: /[\(,:=]\s*/,
        relevance: 0,
        c: [{ cN: "function", b: n, e: "[-=]>", rB: !0, c: [i] }],
      },
      {
        cN: "class",
        bK: "class",
        e: "$",
        i: /[:="\[\]]/,
        c: [{ bK: "extends", eW: !0, i: /[:="\[\]]/, c: [c] }, c],
      },
      { cN: "name", b: r + ":", e: ":", rB: !0, rE: !0, relevance: 0 },
    ]),
  };
});
hljs.registerLanguage("crmsh", function (e) {
  var t =
    "group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml";
  return {
    aliases: ["crm", "pcmk"],
    cI: !0,
    k: {
      keyword:
        "params meta operations op rule attributes utilization read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\ number string",
      literal:
        "Master Started Slave Stopped start promote demote stop monitor true false",
    },
    c: [
      e.HCM,
      {
        bK: "node",
        starts: {
          e: "\\s*([\\w_-]+:)?",
          starts: { cN: "title", e: "\\s*[\\$\\w_][\\w_-]*" },
        },
      },
      {
        bK: "primitive rsc_template",
        starts: {
          cN: "title",
          e: "\\s*[\\$\\w_][\\w_-]*",
          starts: { e: "\\s*@?[\\w_][\\w_\\.:-]*" },
        },
      },
      {
        b: "\\b(" + t.split(" ").join("|") + ")\\s+",
        k: t,
        starts: { cN: "title", e: "[\\$\\w_][\\w_-]*" },
      },
      {
        bK: "property rsc_defaults op_defaults",
        starts: { cN: "title", e: "\\s*([\\w_-]+:)?" },
      },
      e.QSM,
      { cN: "meta", b: "(ocf|systemd|service|lsb):[\\w_:-]+", relevance: 0 },
      { cN: "number", b: "\\b\\d+(\\.\\d+)?(ms|s|h|m)?", relevance: 0 },
      { cN: "literal", b: "[-]?(infinity|inf)", relevance: 0 },
      { cN: "attr", b: /([A-Za-z\$_\#][\w_-]+)=/, relevance: 0 },
      { cN: "tag", b: "</?", e: "/?>", relevance: 0 },
    ],
  };
});
hljs.registerLanguage("openscad", function (e) {
  var r = { cN: "keyword", b: "\\$(f[asn]|t|vp[rtd]|children)" },
    n = { cN: "number", b: "\\b\\d+(\\.\\d+)?(e-?\\d+)?", relevance: 0 },
    o = e.inherit(e.QSM, { i: null }),
    i = {
      cN: "function",
      bK: "module function",
      e: "\\=|\\{",
      c: [
        {
          cN: "params",
          b: "\\(",
          e: "\\)",
          c: ["self", n, o, r, { cN: "literal", b: "false|true|PI|undef" }],
        },
        e.UTM,
      ],
    };
  return {
    aliases: ["scad"],
    k: {
      keyword: "function module include use for intersection_for if else \\%",
      literal: "false true PI undef",
      built_in:
        "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign",
    },
    c: [
      e.CLCM,
      e.CBCM,
      n,
      {
        cN: "meta",
        k: { "meta-keyword": "include use" },
        b: "include|use <",
        e: ">",
      },
      o,
      r,
      { b: "[*!#%]", relevance: 0 },
      i,
    ],
  };
});
hljs.registerLanguage("vbscript", function (e) {
  return {
    aliases: ["vbs"],
    cI: !0,
    k: {
      keyword:
        "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
      built_in:
        "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",
      literal: "true false null nothing empty",
    },
    i: "//",
    c: [
      e.inherit(e.QSM, { c: [{ b: '""' }] }),
      e.C(/'/, /$/, { relevance: 0 }),
      e.CNM,
    ],
  };
});
hljs.registerLanguage("vbscript-html", function (r) {
  return { sL: "xml", c: [{ b: "<%", e: "%>", sL: "vbscript" }] };
});
hljs.registerLanguage("zephir", function (e) {
  var i = {
      cN: "string",
      c: [e.BE],
      v: [
        { b: 'b"', e: '"' },
        { b: "b'", e: "'" },
        e.inherit(e.ASM, { i: null }),
        e.inherit(e.QSM, { i: null }),
      ],
    },
    n = { v: [e.BNM, e.CNM] };
  return {
    aliases: ["zep"],
    cI: !0,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var let while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally int uint long ulong char uchar double float bool boolean stringlikely unlikely",
    c: [
      e.CLCM,
      e.HCM,
      e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }),
      e.C("__halt_compiler.+?;", !1, {
        eW: !0,
        k: "__halt_compiler",
        l: e.UIR,
      }),
      { cN: "string", b: "<<<['\"]?\\w+['\"]?$", e: "^\\w+;", c: [e.BE] },
      { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
      {
        cN: "function",
        bK: "function",
        e: /[;{]/,
        eE: !0,
        i: "\\$|\\[|%",
        c: [
          e.UTM,
          { cN: "params", b: "\\(", e: "\\)", c: ["self", e.CBCM, i, n] },
        ],
      },
      {
        cN: "class",
        bK: "class interface",
        e: "{",
        eE: !0,
        i: /[:\(\$"]/,
        c: [{ bK: "extends implements" }, e.UTM],
      },
      { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] },
      { bK: "use", e: ";", c: [e.UTM] },
      { b: "=>" },
      i,
      n,
    ],
  };
});
hljs.registerLanguage("ini", function (e) {
  var b = {
      cN: "number",
      relevance: 0,
      v: [{ b: /([\+\-]+)?[\d]+_[\d_]+/ }, { b: e.NR }],
    },
    a = e.C();
  a.v = [
    { b: /;/, e: /$/ },
    { b: /#/, e: /$/ },
  ];
  var c = {
      cN: "variable",
      v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
    },
    r = { cN: "literal", b: /\bon|off|true|false|yes|no\b/ },
    n = {
      cN: "string",
      c: [e.BE],
      v: [
        { b: "'''", e: "'''", relevance: 10 },
        { b: '"""', e: '"""', relevance: 10 },
        { b: '"', e: '"' },
        { b: "'", e: "'" },
      ],
    };
  return {
    aliases: ["toml"],
    cI: !0,
    i: /\S/,
    c: [
      a,
      { cN: "section", b: /\[+/, e: /\]+/ },
      {
        b: /^[a-z0-9\[\]_\.-]+(?=\s*=\s*)/,
        cN: "attr",
        starts: {
          e: /$/,
          c: [
            a,
            { b: /\[/, e: /\]/, c: [a, r, c, n, b, "self"], relevance: 0 },
            r,
            c,
            n,
            b,
          ],
        },
      },
    ],
  };
});
hljs.registerLanguage("livecodeserver", function (e) {
  var r = {
      cN: "variable",
      v: [
        { b: "\\b([gtps][A-Z]{1}[a-zA-Z0-9]*)(\\[.+\\])?(?:\\s*?)" },
        { b: "\\$_[A-Z]+" },
      ],
      relevance: 0,
    },
    t = [e.CBCM, e.HCM, e.C("--", "$"), e.C("[^:]//", "$")],
    a = e.inherit(e.TM, {
      v: [{ b: "\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*" }, { b: "\\b_[a-z0-9\\-]+" }],
    }),
    o = e.inherit(e.TM, { b: "\\b([A-Za-z0-9_\\-]+)\\b" });
  return {
    cI: !1,
    k: {
      keyword:
        "$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph after byte bytes english the until http forever descending using line real8 with seventh for stdout finally element word words fourth before black ninth sixth characters chars stderr uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat end repeat URL in try into switch to words https token binfile each tenth as ticks tick system real4 by dateItems without char character ascending eighth whole dateTime numeric short first ftp integer abbreviated abbr abbrev private case while if div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within contains ends with begins the keys of keys",
      literal:
        "SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five quote empty one true return cr linefeed right backslash null seven tab three two RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK",
      built_in:
        "put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress constantNames cos date dateFormat decompress difference directories diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge messageAuthenticationCode messageDigest millisec millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process combine constant convert create new alias folder directory decrypt delete variable word line folder directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetDriver libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime libURLSetStatusCallback load extension loadedExtensions multiply socket prepare process post seek rel relative read from process rename replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop subtract symmetric union unload vectorDotProduct wait write",
    },
    c: [
      r,
      { cN: "keyword", b: "\\bend\\sif\\b" },
      {
        cN: "function",
        bK: "function",
        e: "$",
        c: [r, o, e.ASM, e.QSM, e.BNM, e.CNM, a],
      },
      {
        cN: "function",
        b: "\\bend\\s+",
        e: "$",
        k: "end",
        c: [o, a],
        relevance: 0,
      },
      { bK: "command on", e: "$", c: [r, o, e.ASM, e.QSM, e.BNM, e.CNM, a] },
      {
        cN: "meta",
        v: [
          { b: "<\\?(rev|lc|livecode)", relevance: 10 },
          { b: "<\\?" },
          { b: "\\?>" },
        ],
      },
      e.ASM,
      e.QSM,
      e.BNM,
      e.CNM,
      a,
    ].concat(t),
    i: ";$|^\\[|^=|&|{",
  };
});
hljs.registerLanguage("mipsasm", function (e) {
  return {
    cI: !0,
    aliases: ["mips"],
    l: "\\.?" + e.IR,
    k: {
      meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ",
      built_in:
        "$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt ",
    },
    c: [
      {
        cN: "keyword",
        b: "\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(.hb)?|jr(.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs.[sd]|add.[sd]|alnv.ps|bc1[ft]l?|c.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et]).[sd]|(ceil|floor|round|trunc).[lw].[sd]|cfc1|cvt.d.[lsw]|cvt.l.[dsw]|cvt.ps.s|cvt.s.[dlw]|cvt.s.p[lu]|cvt.w.[dls]|div.[ds]|ldx?c1|luxc1|lwx?c1|madd.[sd]|mfc1|mov[fntz]?.[ds]|msub.[sd]|mth?c1|mul.[ds]|neg.[ds]|nmadd.[ds]|nmsub.[ds]|p[lu][lu].ps|recip.fmt|r?sqrt.[ds]|sdx?c1|sub.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)",
        e: "\\s",
      },
      e.C("[;#](?!s*$)", "$"),
      e.CBCM,
      e.QSM,
      { cN: "string", b: "'", e: "[^\\\\]'", relevance: 0 },
      { cN: "title", b: "\\|", e: "\\|", i: "\\n", relevance: 0 },
      {
        cN: "number",
        v: [{ b: "0x[0-9a-f]+" }, { b: "\\b-?\\d+" }],
        relevance: 0,
      },
      {
        cN: "symbol",
        v: [
          { b: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:" },
          { b: "^\\s*[0-9]+:" },
          { b: "[0-9]+[bf]" },
        ],
        relevance: 0,
      },
    ],
    i: "/",
  };
});
hljs.registerLanguage("php", function (e) {
  var c = { b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" },
    i = { cN: "meta", b: /<\?(php)?|\?>/ },
    t = {
      cN: "string",
      c: [e.BE, i],
      v: [
        { b: 'b"', e: '"' },
        { b: "b'", e: "'" },
        e.inherit(e.ASM, { i: null }),
        e.inherit(e.QSM, { i: null }),
      ],
    },
    a = { v: [e.BNM, e.CNM] };
  return {
    aliases: ["php", "php3", "php4", "php5", "php6", "php7"],
    cI: !0,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
    c: [
      e.HCM,
      e.C("//", "$", { c: [i] }),
      e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }),
      e.C("__halt_compiler.+?;", !1, {
        eW: !0,
        k: "__halt_compiler",
        l: e.UIR,
      }),
      {
        cN: "string",
        b: /<<<['"]?\w+['"]?$/,
        e: /^\w+;?$/,
        c: [e.BE, { cN: "subst", v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] }],
      },
      i,
      { cN: "keyword", b: /\$this\b/ },
      c,
      { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
      {
        cN: "function",
        bK: "function",
        e: /[;{]/,
        eE: !0,
        i: "\\$|\\[|%",
        c: [
          e.UTM,
          { cN: "params", b: "\\(", e: "\\)", c: ["self", c, e.CBCM, t, a] },
        ],
      },
      {
        cN: "class",
        bK: "class interface",
        e: "{",
        eE: !0,
        i: /[:\(\$"]/,
        c: [{ bK: "extends implements" }, e.UTM],
      },
      { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] },
      { bK: "use", e: ";", c: [e.UTM] },
      { b: "=>" },
      t,
      a,
    ],
  };
});
hljs.registerLanguage("delphi", function (e) {
  var r =
      "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ",
    t = [
      e.CLCM,
      e.C(/\{/, /\}/, { relevance: 0 }),
      e.C(/\(\*/, /\*\)/, { relevance: 10 }),
    ],
    a = {
      cN: "meta",
      v: [
        { b: /\{\$/, e: /\}/ },
        { b: /\(\*\$/, e: /\*\)/ },
      ],
    },
    c = { cN: "string", b: /'/, e: /'/, c: [{ b: /''/ }] },
    i = { cN: "string", b: /(#\d+)+/ },
    n = { b: e.IR + "\\s*=\\s*class\\s*\\(", rB: !0, c: [e.TM] },
    o = {
      cN: "function",
      bK: "function constructor destructor procedure",
      e: /[:;]/,
      k: "function constructor|10 destructor|10 procedure|10",
      c: [
        e.TM,
        { cN: "params", b: /\(/, e: /\)/, k: r, c: [c, i, a].concat(t) },
        a,
      ].concat(t),
    };
  return {
    aliases: [
      "dpr",
      "dfm",
      "pas",
      "pascal",
      "freepascal",
      "lazarus",
      "lpr",
      "lfm",
    ],
    cI: !0,
    k: r,
    i: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
    c: [c, i, e.NM, n, o, a].concat(t),
  };
});
hljs.registerLanguage("xquery", function (e) {
  var t = [
    { cN: "variable", b: /[\$][\w-:]+/ },
    {
      cN: "built_in",
      v: [
        {
          b: /\barray\:/,
          e: /(?:append|filter|flatten|fold\-(?:left|right)|for-each(?:\-pair)?|get|head|insert\-before|join|put|remove|reverse|size|sort|subarray|tail)\b/,
        },
        {
          b: /\bmap\:/,
          e: /(?:contains|entry|find|for\-each|get|keys|merge|put|remove|size)\b/,
        },
        {
          b: /\bmath\:/,
          e: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/,
        },
        { b: /\bop\:/, e: /\(/, eE: !0 },
        { b: /\bfn\:/, e: /\(/, eE: !0 },
        {
          b: /[^<\/\$\:'"-]\b(?:abs|accumulator\-(?:after|before)|adjust\-(?:date(?:Time)?|time)\-to\-timezone|analyze\-string|apply|available\-(?:environment\-variables|system\-properties)|avg|base\-uri|boolean|ceiling|codepoints?\-(?:equal|to\-string)|collation\-key|collection|compare|concat|contains(?:\-token)?|copy\-of|count|current(?:\-)?(?:date(?:Time)?|time|group(?:ing\-key)?|output\-uri|merge\-(?:group|key))?data|dateTime|days?\-from\-(?:date(?:Time)?|duration)|deep\-equal|default\-(?:collation|language)|distinct\-values|document(?:\-uri)?|doc(?:\-available)?|element\-(?:available|with\-id)|empty|encode\-for\-uri|ends\-with|environment\-variable|error|escape\-html\-uri|exactly\-one|exists|false|filter|floor|fold\-(?:left|right)|for\-each(?:\-pair)?|format\-(?:date(?:Time)?|time|integer|number)|function\-(?:arity|available|lookup|name)|generate\-id|has\-children|head|hours\-from\-(?:dateTime|duration|time)|id(?:ref)?|implicit\-timezone|in\-scope\-prefixes|index\-of|innermost|insert\-before|iri\-to\-uri|json\-(?:doc|to\-xml)|key|lang|last|load\-xquery\-module|local\-name(?:\-from\-QName)?|(?:lower|upper)\-case|matches|max|minutes\-from\-(?:dateTime|duration|time)|min|months?\-from\-(?:date(?:Time)?|duration)|name(?:space\-uri\-?(?:for\-prefix|from\-QName)?)?|nilled|node\-name|normalize\-(?:space|unicode)|not|number|one\-or\-more|outermost|parse\-(?:ietf\-date|json)|path|position|(?:prefix\-from\-)?QName|random\-number\-generator|regex\-group|remove|replace|resolve\-(?:QName|uri)|reverse|root|round(?:\-half\-to\-even)?|seconds\-from\-(?:dateTime|duration|time)|snapshot|sort|starts\-with|static\-base\-uri|stream\-available|string\-?(?:join|length|to\-codepoints)?|subsequence|substring\-?(?:after|before)?|sum|system\-property|tail|timezone\-from\-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type\-available|unordered|unparsed\-(?:entity|text)?\-?(?:public\-id|uri|available|lines)?|uri\-collection|xml\-to\-json|years?\-from\-(?:date(?:Time)?|duration)|zero\-or\-one)\b/,
        },
        { b: /\blocal\:/, e: /\(/, eE: !0 },
        {
          b: /\bzip\:/,
          e: /(?:zip\-file|(?:xml|html|text|binary)\-entry| (?:update\-)?entries)\b/,
        },
        { b: /\b(?:util|db|functx|app|xdmp|xmldb)\:/, e: /\(/, eE: !0 },
      ],
    },
    {
      cN: "string",
      v: [
        { b: /"/, e: /"/, c: [{ b: /""/, relevance: 0 }] },
        { b: /'/, e: /'/, c: [{ b: /''/, relevance: 0 }] },
      ],
    },
    {
      cN: "number",
      b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      relevance: 0,
    },
    {
      cN: "comment",
      b: "\\(:",
      e: ":\\)",
      relevance: 10,
      c: [{ cN: "doctag", b: "@\\w+" }],
    },
    { cN: "meta", b: /%[\w-:]+/ },
    {
      cN: "title",
      b: /\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,
      e: /;/,
    },
    {
      bK: "element attribute comment document processing-instruction",
      e: "{",
      eE: !0,
    },
    {
      b: /<([\w\._:\-]+)((\s*.*)=('|").*('|"))?>/,
      e: /(\/[\w\._:\-]+>)/,
      sL: "xml",
      c: [{ b: "{", e: "}", sL: "xquery" }, "self"],
    },
  ];
  return {
    aliases: ["xpath", "xq"],
    cI: !1,
    l: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
    i: /(proc)|(abstract)|(extends)|(until)|(#)/,
    k: {
      keyword:
        "module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit declare import option function validate variable for at in let where order group by return if then else tumbling sliding window start when only end previous next stable ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch and or to union intersect instance of treat as castable cast map array delete insert into replace value rename copy modify update",
      type: "item document-node node attribute document element comment namespace namespace-node processing-instruction text construction xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration",
      literal:
        "eq ne lt le gt ge is self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: NaN",
    },
    c: t,
  };
});
hljs.registerLanguage("julia", function (e) {
  var r = {
      keyword:
        "in isa where baremodule begin break catch ccall const continue do else elseif end export false finally for function global if import importall let local macro module quote return true try using while type immutable abstract bitstype typealias ",
      literal:
        "true false ARGS C_NULL DevNull ENDIAN_BOM ENV I Inf Inf16 Inf32 Inf64 InsertionSort JULIA_HOME LOAD_PATH MergeSort NaN NaN16 NaN32 NaN64 PROGRAM_FILE QuickSort RoundDown RoundFromZero RoundNearest RoundNearestTiesAway RoundNearestTiesUp RoundToZero RoundUp STDERR STDIN STDOUT VERSION catalan e|0 eu|0 eulergamma golden im nothing pi γ π φ ",
      built_in:
        "ANY AbstractArray AbstractChannel AbstractFloat AbstractMatrix AbstractRNG AbstractSerializer AbstractSet AbstractSparseArray AbstractSparseMatrix AbstractSparseVector AbstractString AbstractUnitRange AbstractVecOrMat AbstractVector Any ArgumentError Array AssertionError Associative Base64DecodePipe Base64EncodePipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError BufferStream CachingPool CapturedException CartesianIndex CartesianRange Cchar Cdouble Cfloat Channel Char Cint Cintmax_t Clong Clonglong ClusterManager Cmd CodeInfo Colon Complex Complex128 Complex32 Complex64 CompositeException Condition ConjArray ConjMatrix ConjVector Cptrdiff_t Cshort Csize_t Cssize_t Cstring Cuchar Cuint Cuintmax_t Culong Culonglong Cushort Cwchar_t Cwstring DataType Date DateFormat DateTime DenseArray DenseMatrix DenseVecOrMat DenseVector Diagonal Dict DimensionMismatch Dims DirectIndexString Display DivideError DomainError EOFError EachLine Enum Enumerate ErrorException Exception ExponentialBackOff Expr Factorization FileMonitor Float16 Float32 Float64 Function Future GlobalRef GotoNode HTML Hermitian IO IOBuffer IOContext IOStream IPAddr IPv4 IPv6 IndexCartesian IndexLinear IndexStyle InexactError InitError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException InvalidStateException Irrational KeyError LabelNode LinSpace LineNumberNode LoadError LowerTriangular MIME Matrix MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode NullException Nullable Number ObjectIdDict OrdinalRange OutOfMemoryError OverflowError Pair ParseError PartialQuickSort PermutedDimsArray Pipe PollingFileWatcher ProcessExitedException Ptr QuoteNode RandomDevice Range RangeIndex Rational RawFD ReadOnlyMemoryError Real ReentrantLock Ref Regex RegexMatch RemoteChannel RemoteException RevString RoundingMode RowVector SSAValue SegmentationFault SerializationState Set SharedArray SharedMatrix SharedVector Signed SimpleVector Slot SlotNumber SparseMatrixCSC SparseVector StackFrame StackOverflowError StackTrace StepRange StepRangeLen StridedArray StridedMatrix StridedVecOrMat StridedVector String SubArray SubString SymTridiagonal Symbol Symmetric SystemError TCPSocket Task Text TextDisplay Timer Tridiagonal Tuple Type TypeError TypeMapEntry TypeMapLevel TypeName TypeVar TypedSlot UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UndefRefError UndefVarError UnicodeError UniformScaling Union UnionAll UnitRange Unsigned UpperTriangular Val Vararg VecElement VecOrMat Vector VersionNumber Void WeakKeyDict WeakRef WorkerConfig WorkerPool ",
    },
    t = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",
    a = { l: t, k: r, i: /<\// },
    n = { cN: "subst", b: /\$\(/, e: /\)/, k: r },
    o = { cN: "variable", b: "\\$" + t },
    i = {
      cN: "string",
      c: [e.BE, n, o],
      v: [
        { b: /\w*"""/, e: /"""\w*/, relevance: 10 },
        { b: /\w*"/, e: /"\w*/ },
      ],
    },
    l = { cN: "string", c: [e.BE, n, o], b: "`", e: "`" },
    c = { cN: "meta", b: "@" + t };
  return (
    (a.c = [
      {
        cN: "number",
        b: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
        relevance: 0,
      },
      { cN: "string", b: /'(.|\\[xXuU][a-zA-Z0-9]+)'/ },
      i,
      l,
      c,
      {
        cN: "comment",
        v: [
          { b: "#=", e: "=#", relevance: 10 },
          { b: "#", e: "$" },
        ],
      },
      e.HCM,
      {
        cN: "keyword",
        b: "\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b",
      },
      { b: /<:/ },
    ]),
    (n.c = a.c),
    a
  );
});
hljs.registerLanguage("julia-repl", function (e) {
  return {
    c: [
      {
        cN: "meta",
        b: /^julia>/,
        relevance: 10,
        starts: { e: /^(?![ ]{6})/, sL: "julia" },
        aliases: ["jldoctest"],
      },
    ],
  };
});
hljs.registerLanguage("xl", function (e) {
  var t = {
      keyword:
        "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
      literal: "true false nil",
      built_in:
        "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts",
    },
    o = { cN: "string", b: '"', e: '"', i: "\\n" },
    a = { bK: "import", e: "$", k: t, c: [o] },
    r = {
      cN: "function",
      b: /[a-z][^\n]*->/,
      rB: !0,
      e: /->/,
      c: [e.inherit(e.TM, { starts: { eW: !0, k: t } })],
    };
  return {
    aliases: ["tao"],
    l: /[a-zA-Z][a-zA-Z0-9_?]*/,
    k: t,
    c: [
      e.CLCM,
      e.CBCM,
      o,
      { cN: "string", b: "'", e: "'", i: "\\n" },
      { cN: "string", b: "<<", e: ">>" },
      r,
      a,
      {
        cN: "number",
        b: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?",
      },
      e.NM,
    ],
  };
});
hljs.registerLanguage("mercury", function (e) {
  var i = e.C("%", "$"),
    r = e.inherit(e.ASM, { relevance: 0 }),
    t = e.inherit(e.QSM, { relevance: 0 });
  (t.c = t.c.slice()),
    t.c.push({
      cN: "subst",
      b: "\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]",
      relevance: 0,
    });
  return {
    aliases: ["m", "moo"],
    k: {
      keyword:
        "module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure",
      meta: "inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing",
      built_in:
        "some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure",
    },
    c: [
      {
        cN: "built_in",
        v: [
          { b: "<=>" },
          { b: "<=", relevance: 0 },
          { b: "=>", relevance: 0 },
          { b: "/\\\\" },
          { b: "\\\\/" },
        ],
      },
      { cN: "built_in", v: [{ b: ":-\\|--\x3e" }, { b: "=", relevance: 0 }] },
      i,
      e.CBCM,
      { cN: "number", b: "0'.\\|0[box][0-9a-fA-F]*" },
      e.NM,
      r,
      t,
      { b: /:-/ },
      { b: /\.$/ },
    ],
  };
});
hljs.registerLanguage("mathematica", function (e) {
  return {
    aliases: ["mma", "wl"],
    l: "(\\$|\\b)" + e.IR + "\\b",
    k: "AASTriangle AbelianGroup Abort AbortKernels AbortProtect AbortScheduledTask Above Abs AbsArg AbsArgPlot Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AcceptanceThreshold AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Activate Active ActiveClassification ActiveClassificationObject ActiveItem ActivePrediction ActivePredictionObject ActiveStyle AcyclicGraphQ AddOnHelpPath AddSides AddTo AddToSearchIndex AddUsers AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AdministrativeDivisionData AffineHalfSpace AffineSpace AffineStateSpaceModel AffineTransform After AggregatedEntityClass AggregationLayer AircraftData AirportData AirPressureData AirTemperatureData AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowAdultContent AllowedCloudExtraParameters AllowedCloudParameterExtensions AllowedDimensions AllowedFrequencyRange AllowedHeads AllowGroupClose AllowIncomplete AllowInlineCells AllowKernelInitialization AllowLooseGrammar AllowReverseGroupClose AllowScriptLevelChange AllTrue Alphabet AlphabeticOrder AlphabeticSort AlphaChannel AlternateImage AlternatingFactorial AlternatingGroup AlternativeHypothesis Alternatives AltitudeMethod AmbientLight AmbiguityFunction AmbiguityList Analytic AnatomyData AnatomyForm AnatomyPlot3D AnatomySkinStyle AnatomyStyling AnchoredSearch And AndersonDarlingTest AngerJ AngleBisector AngleBracket AnglePath AnglePath3D AngleVector AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning AnimationRunTime AnimationTimeIndex Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotate Annotation AnnotationDelete AnnotationNames AnnotationRules AnnotationValue Annuity AnnuityDue Annulus AnomalyDetection AnomalyDetectorFunction Anonymous Antialiasing AntihermitianMatrixQ Antisymmetric AntisymmetricMatrixQ Antonyms AnyOrder AnySubset AnyTrue Apart ApartSquareFree APIFunction Appearance AppearanceElements AppearanceRules AppellF1 Append AppendCheck AppendLayer AppendTo ApplicationIdentificationKey Apply ApplySides ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcCurvature ARCHProcess ArcLength ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Area Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess Around AroundReplace ARProcess Array ArrayComponents ArrayDepth ArrayFilter ArrayFlatten ArrayMesh ArrayPad ArrayPlot ArrayQ ArrayResample ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads ASATriangle Ask AskAppend AskConfirm AskDisplay AskedQ AskedValue AskFunction AskState AskTemplateDisplay AspectRatio AspectRatioFixed Assert AssociateTo Association AssociationFormat AssociationMap AssociationQ AssociationThread AssumeDeterministic Assuming Assumptions AstronomicalData AsymptoticDSolveValue AsymptoticEqual AsymptoticEquivalent AsymptoticGreater AsymptoticGreaterEqual AsymptoticIntegrate AsymptoticLess AsymptoticLessEqual AsymptoticOutputTracker AsymptoticRSolveValue AsymptoticSolve AsymptoticSum Asynchronous AsynchronousTaskObject AsynchronousTasks Atom AtomCoordinates AtomCount AtomDiagramCoordinates AtomList AtomQ AttentionLayer Attributes Audio AudioAmplify AudioAnnotate AudioAnnotationLookup AudioBlockMap AudioCapture AudioChannelAssignment AudioChannelCombine AudioChannelMix AudioChannels AudioChannelSeparate AudioData AudioDelay AudioDelete AudioDevice AudioDistance AudioFade AudioFrequencyShift AudioGenerator AudioIdentify AudioInputDevice AudioInsert AudioIntervals AudioJoin AudioLabel AudioLength AudioLocalMeasurements AudioLooping AudioLoudness AudioMeasurements AudioNormalize AudioOutputDevice AudioOverlay AudioPad AudioPan AudioPartition AudioPause AudioPitchShift AudioPlay AudioPlot AudioQ AudioRecord AudioReplace AudioResample AudioReverb AudioSampleRate AudioSpectralMap AudioSpectralTransformation AudioSplit AudioStop AudioStream AudioStreams AudioTimeStretch AudioTrim AudioType AugmentedPolyhedron AugmentedSymmetricPolynomial Authenticate Authentication AuthenticationDialog AutoAction Autocomplete AutocompletionFunction AutoCopy AutocorrelationTest AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutoQuoteCharacters AutoRefreshed AutoRemove AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords AutoSubmitting Axes AxesEdge AxesLabel AxesOrigin AxesStyle AxiomaticTheory AxisBabyMonsterGroupB Back Background BackgroundAppearance BackgroundTasksSettings Backslash Backsubstitution Backward Ball Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarcodeImage BarcodeRecognize BaringhausHenzeTest BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseDecode BaseEncode BaseForm Baseline BaselinePosition BaseStyle BasicRecurrentLayer BatchNormalizationLayer BatchSize BatesDistribution BattleLemarieWavelet BayesianMaximization BayesianMaximizationObject BayesianMinimization BayesianMinimizationObject Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized Between BetweennessCentrality BeveledPolyhedron BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryDeserialize BinaryDistance BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinarySerialize BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BiquadraticFilterModel BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor BiweightLocation BiweightMidvariance Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockchainAddressData BlockchainBase BlockchainBlockData BlockchainContractValue BlockchainData BlockchainGet BlockchainKeyEncode BlockchainPut BlockchainTokenData BlockchainTransaction BlockchainTransactionData BlockchainTransactionSign BlockchainTransactionSubmit BlockMap BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bond BondCount BondList BondQ Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms BooleanQ BooleanRegion Booleans BooleanStrings BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryDiscretizeGraphics BoundaryDiscretizeRegion BoundaryMesh BoundaryMeshRegion BoundaryMeshRegionQ BoundaryStyle BoundedRegionQ BoundingRegion Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxObject BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break BridgeData BrightnessEqualize BroadcastStationData Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurve3DBoxOptions BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BSplineSurface3DBoxOptions BubbleChart BubbleChart3D BubbleScale BubbleSizes BuildingData BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteArray ByteArrayFormat ByteArrayQ ByteArrayToString ByteCount ByteOrderingC CachedValue CacheGraphics CachePersistence CalendarConvert CalendarData CalendarType Callout CalloutMarker CalloutStyle CallPacket CanberraDistance Cancel CancelButton CandlestickChart CanonicalGraph CanonicalizePolygon CanonicalizePolyhedron CanonicalName CanonicalWarpingCorrespondence CanonicalWarpingDistance CantorMesh CantorStaircase Cap CapForm CapitalDifferentialD Capitalize CapsuleShape CaptureRunning CardinalBSplineBasis CarlemanLinearize CarmichaelLambda CaseOrdering Cases CaseSensitive Cashflow Casoratian Catalan CatalanNumber Catch Catenate CatenateLayer CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling CelestialSystem Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEvaluationLanguage CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellLabelStyle CellLabelTemplate CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterArray CenterDot CentralFeature CentralMoment CentralMomentGeneratingFunction Cepstrogram CepstrogramArray CepstrumArray CForm ChampernowneNumber ChangeOptions ChannelBase ChannelBrokerAction ChannelDatabin ChannelHistoryLength ChannelListen ChannelListener ChannelListeners ChannelListenerWait ChannelObject ChannelPreSendFunction ChannelReceiverFunction ChannelSend ChannelSubscribers ChanVeseBinarize Character CharacterCounts CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterName CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop ChromaticityPlot ChromaticityPlot3D ChromaticPolynomial Circle CircleBox CircleDot CircleMinus CirclePlus CirclePoints CircleThrough CircleTimes CirculantGraph CircularOrthogonalMatrixDistribution CircularQuaternionMatrixDistribution CircularRealMatrixDistribution CircularSymplecticMatrixDistribution CircularUnitaryMatrixDistribution Circumsphere CityData ClassifierFunction ClassifierInformation ClassifierMeasurements ClassifierMeasurementsObject Classify ClassPriors Clear ClearAll ClearAttributes ClearCookies ClearPermissions ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipPlanesStyle ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent CloudAccountData CloudBase CloudConnect CloudDeploy CloudDirectory CloudDisconnect CloudEvaluate CloudExport CloudExpression CloudExpressions CloudFunction CloudGet CloudImport CloudLoggingData CloudObject CloudObjectInformation CloudObjectInformationData CloudObjectNameFormat CloudObjects CloudObjectURLType CloudPublish CloudPut CloudRenderingMethod CloudSave CloudShare CloudSubmit CloudSymbol CloudUnshare ClusterClassify ClusterDissimilarityFunction ClusteringComponents ClusteringTree CMYKColor Coarse CodeAssistOptions Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorBalance ColorCombine ColorConvert ColorCoverage ColorData ColorDataFunction ColorDetect ColorDistance ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQ ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorsNear ColorSpace ColorToneMapping Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CombinedEntityClass CombinerFunction CometData CommonDefaultFormatTypes Commonest CommonestFilter CommonName CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompanyData CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledCodeFunction CompiledFunction CompilerOptions Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComplexListPlot ComplexPlot ComplexPlot3D ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries CompositeQ Composition CompoundElement CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData ComputeUncertainty Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath ConformAudio ConformImages Congruent ConicHullRegion ConicHullRegion3DBox ConicHullRegionBox ConicOptimization Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphComponents ConnectedGraphQ ConnectedMeshComponents ConnectedMoleculeComponents ConnectedMoleculeQ ConnectionSettings ConnectLibraryCallbackFunction ConnectSystemModelComponents ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray ConstantArrayLayer ConstantImage ConstantPlusLayer ConstantRegionQ Constants ConstantTimesLayer ConstellationData ConstrainedMax ConstrainedMin Construct Containing ContainsAll ContainsAny ContainsExactly ContainsNone ContainsOnly ContentFieldOptions ContentLocationFunction ContentObject ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTask ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean ContrastiveLossLayer Control ControlActive ControlAlignment ControlGroupContentsBox ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket ConvexHullMesh ConvexPolygonQ ConvexPolyhedronQ ConvolutionLayer Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CookieFunction Cookies CoordinateBoundingBox CoordinateBoundingBoxArray CoordinateBounds CoordinateBoundsArray CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDatabin CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CountDistinct CountDistinctBy CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Counts CountsBy Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateCellID CreateChannel CreateCloudExpression CreateDatabin CreateDataSystemModel CreateDialog CreateDirectory CreateDocument CreateFile CreateIntermediateDirectories CreateManagedLibraryExpression CreateNotebook CreatePalette CreatePalettePacket CreatePermissionsGroup CreateScheduledTask CreateSearchIndex CreateSystemModel CreateTemporary CreateUUID CreateWindow CriterionFunction CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossEntropyLossLayer CrossingCount CrossingDetect CrossingPolygon CrossMatrix Csc Csch CTCLossLayer Cube CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrencyConvert CurrentDate CurrentImage CurrentlySpeakingPacket CurrentNotebookImage CurrentScreenImage CurrentValue Curry CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecompositionD DagumDistribution DamData DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DatabaseConnect DatabaseDisconnect DatabaseReference Databin DatabinAdd DatabinRemove Databins DatabinUpload DataCompression DataDistribution DataRange DataReversed Dataset Date DateBounds Dated DateDelimiters DateDifference DatedUnit DateFormat DateFunction DateHistogram DateList DateListLogPlot DateListPlot DateListStepPlot DateObject DateObjectQ DateOverlapsQ DatePattern DatePlus DateRange DateReduction DateString DateTicksFormat DateValue DateWithinQ DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayHemisphere DaylightQ DayMatchQ DayName DayNightTerminator DayPlus DayRange DayRound DeBruijnGraph DeBruijnSequence Debug DebugTag Decapitalize Decimal DecimalForm DeclareKnownSymbols DeclarePackage Decompose DeconvolutionLayer Decrement Decrypt DecryptFile DedekindEta DeepSpaceProbeData Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultPrintPrecision DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValue DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod DefineResourceFunction Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic DEigensystem DEigenvalues Deinitialization Del DelaunayMesh Delayed Deletable Delete DeleteAnomalies DeleteBorderComponents DeleteCases DeleteChannel DeleteCloudExpression DeleteContents DeleteDirectory DeleteDuplicates DeleteDuplicatesBy DeleteFile DeleteMissing DeleteObject DeletePermissionsKey DeleteSearchIndex DeleteSmallComponents DeleteStopwords DeleteWithContents DeletionWarning DelimitedArray DelimitedSequence Delimiter DelimiterFlashTime DelimiterMatching Delimiters DeliveryFunction Dendrogram Denominator DensityGraphics DensityHistogram DensityPlot DensityPlot3D DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DerivedKey DescriptorStateSpace DesignMatrix DestroyAfterEvaluation Det DeviceClose DeviceConfigure DeviceExecute DeviceExecuteAsynchronous DeviceObject DeviceOpen DeviceOpenQ DeviceRead DeviceReadBuffer DeviceReadLatest DeviceReadList DeviceReadTimeSeries Devices DeviceStreams DeviceWrite DeviceWriteBuffer DGaussianWavelet DiacriticalPositioning Diagonal DiagonalizableMatrixQ DiagonalMatrix DiagonalMatrixQ Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DictionaryWordQ DifferenceDelta DifferenceOrder DifferenceQuotient DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitalSignature DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralAngle DihedralGroup Dilation DimensionalCombinations DimensionalMeshComponents DimensionReduce DimensionReducerFunction DimensionReduction Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletBeta DirichletCharacter DirichletCondition DirichletConvolve DirichletDistribution DirichletEta DirichletL DirichletLambda DirichletTransform DirichletWindow DisableConsolePrintPacket DisableFormatting DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLimit DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscreteMaxLimit DiscreteMinLimit DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform DiscretizeGraphics DiscretizeRegion Discriminant DisjointQ Disjunction Disk DiskBox DiskMatrix DiskSegment Dispatch DispatchQ DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceMatrix DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers DivideSides Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentGenerator DocumentGeneratorInformation DocumentGeneratorInformationData DocumentGenerators DocumentNotebook DocumentWeightingRules Dodecahedron DomainRegistrationInformation DominantColors DOSTextFormat Dot DotDashed DotEqual DotLayer DotPlusLayer Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DropoutLayer DSolve DSolveValue Dt DualLinearProgramming DualPolyhedron DualSystemsModel DumpGet DumpSave DuplicateFreeQ Duration Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicGeoGraphics DynamicImage DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptionsE EarthImpactData EarthquakeData EccentricityCentrality Echo EchoFunction EclipseType EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeContract EdgeCost EdgeCount EdgeCoverQ EdgeCycleMatrix EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight EdgeWeightedGraphQ Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData ElementwiseLayer ElidedForms Eliminate EliminationOrder Ellipsoid EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmbedCode EmbeddedHTML EmbeddedService EmbeddingLayer EmbeddingObject EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EmptyRegion EnableConsolePrintPacket Enabled Encode Encrypt EncryptedObject EncryptFile End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfBuffer EndOfFile EndOfLine EndOfString EndPackage EngineEnvironment EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entity EntityClass EntityClassList EntityCopies EntityFunction EntityGroup EntityInstance EntityList EntityPrefetch EntityProperties EntityProperty EntityPropertyClass EntityRegister EntityStore EntityStores EntityTypeName EntityUnregister EntityValue Entropy EntropyFilter Environment Epilog EpilogFunction Equal EqualColumns EqualRows EqualTilde EqualTo EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EscapeRadius EstimatedBackground EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerAngles EulerCharacteristic EulerE EulerGamma EulerianGraphQ EulerMatrix EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluateScheduledTask EvaluationBox EvaluationCell EvaluationCompletionAction EvaluationData EvaluationElements EvaluationEnvironment EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels EventSeries ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludedLines ExcludedPhysicalQuantities ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog ExoplanetData Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi ExpirationDate Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportByteArray ExportForm ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpressionUUID ExpToTrig ExtendedEntityClass ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalBundle ExternalCall ExternalDataCharacterEncoding ExternalEvaluate ExternalFunction ExternalFunctionName ExternalObject ExternalOptions ExternalSessionObject ExternalSessions ExternalTypeSignature ExternalValue Extract ExtractArchive ExtractLayer ExtremeValueDistributionFaceForm FaceGrids FaceGridsStyle FacialFeatures Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail Failure FailureAction FailureDistribution FailureQ False FareySequence FARIMAProcess FeatureDistance FeatureExtract FeatureExtraction FeatureExtractor FeatureExtractorFunction FeatureNames FeatureNearest FeatureSpacePlot FeatureSpacePlot3D FeatureTypes FEDisableConsolePrintPacket FeedbackLinearize FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket FetalGrowthData Fibonacci Fibonorial FieldCompletionFunction FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileConvert FileDate FileExistsQ FileExtension FileFormat FileHandler FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameForms FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileSize FileSystemMap FileSystemScan FileTemplate FileTemplateApply FileType FilledCurve FilledCurveBox FilledCurveBoxOptions Filling FillingStyle FillingTransform FilteredEntityClass FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindAnomalies FindArgMax FindArgMin FindChannels FindClique FindClusters FindCookies FindCurvePath FindCycle FindDevices FindDistribution FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEdgeIndependentPaths FindEquationalProof FindEulerianCycle FindExternalEvaluators FindFaces FindFile FindFit FindFormula FindFundamentalCycles FindGeneratingFunction FindGeoLocation FindGeometricConjectures FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindHamiltonianPath FindHiddenMarkovStates FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMatchingColor FindMaximum FindMaximumFlow FindMaxValue FindMeshDefects FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindMoleculeSubstructure FindPath FindPeaks FindPermutation FindPostmanTour FindProcessParameters FindRepeat FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindSpanningTree FindSystemModelEquilibrium FindTextualAnswer FindThreshold FindTransientRepeat FindVertexCover FindVertexCut FindVertexIndependentPaths Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstCase FirstPassageTimeDistribution FirstPosition FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FitRegularization FittedModel FixedOrder FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlattenLayer FlatTopWindow FlipView Floor FlowPolynomial FlushPrintOutputPacket Fold FoldList FoldPair FoldPairList FollowRedirects Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FormControl FormFunction FormLayoutFunction FormObject FormPage FormTheme FormulaData FormulaLookup FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalGaussianNoiseProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameRate FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrenetSerretSystem FrequencySamplingFilterKernel FresnelC FresnelF FresnelG FresnelS Friday FrobeniusNumber FrobeniusSolve FromAbsoluteTime FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS FromEntity FromJulianDate FromLetterNumber FromPolarCoordinates FromRomanNumeral FromSphericalCoordinates FromUnixTime Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullInformationOutputRegulator FullOptions FullRegion FullSimplify Function FunctionCompile FunctionCompileExport FunctionCompileExportByteArray FunctionCompileExportLibrary FunctionCompileExportString FunctionDomain FunctionExpand FunctionInterpolation FunctionPeriod FunctionRange FunctionSpace FussellVeselyImportanceGaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins GalaxyData GalleryView Gamma GammaDistribution GammaRegularized GapPenalty GARCHProcess GatedRecurrentLayer Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianOrthogonalMatrixDistribution GaussianSymplecticMatrixDistribution GaussianUnitaryMatrixDistribution GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateAsymmetricKeyPair GenerateConditions GeneratedCell GeneratedDocumentBinding GenerateDerivedKey GenerateDigitalSignature GenerateDocument GeneratedParameters GeneratedQuantityMagnitudes GenerateHTTPResponse GenerateSecuredAuthenticationKey GenerateSymmetricKey GeneratingFunction GeneratorDescription GeneratorHistoryLength GeneratorOutputType Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeoAntipode GeoArea GeoArraySize GeoBackground GeoBoundingBox GeoBounds GeoBoundsRegion GeoBubbleChart GeoCenter GeoCircle GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDisk GeoDisplacement GeoDistance GeoDistanceList GeoElevationData GeoEntities GeoGraphics GeogravityModelData GeoGridDirectionDifference GeoGridLines GeoGridLinesStyle GeoGridPosition GeoGridRange GeoGridRangePadding GeoGridUnitArea GeoGridUnitDistance GeoGridVector GeoGroup GeoHemisphere GeoHemisphereBoundary GeoHistogram GeoIdentify GeoImage GeoLabels GeoLength GeoListPlot GeoLocation GeologicalPeriodData GeomagneticModelData GeoMarker GeometricAssertion GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricScene GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoModel GeoNearest GeoPath GeoPosition GeoPositionENU GeoPositionXYZ GeoProjection GeoProjectionData GeoRange GeoRangePadding GeoRegionValuePlot GeoResolution GeoScaleBar GeoServer GeoSmoothHistogram GeoStreamPlot GeoStyling GeoStylingImageFunction GeoVariant GeoVector GeoVectorENU GeoVectorPlot GeoVectorXYZ GeoVisibleRegion GeoVisibleRegionBoundary GeoWithinQ GeoZoomLevel GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenAngle GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter GrammarApply GrammarRules GrammarToken Graph Graph3D GraphAssortativity GraphAutomorphismGroup GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel Greater GreaterEqual GreaterEqualLess GreaterEqualThan GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterThan GreaterTilde Green GreenFunction Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupBy GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators Groupings GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain GroupTogetherGrouping GroupTogetherNestedGrouping GrowCutComponents Gudermannian GuidedFilter GumbelDistributionHaarWavelet HadamardMatrix HalfLine HalfNormalDistribution HalfPlane HalfSpace HamiltonianGraphQ HammingDistance HammingWindow HandlerFunctions HandlerFunctionsKeys HankelH1 HankelH2 HankelMatrix HankelTransform HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash Haversine HazardFunction Head HeadCompose HeaderLines Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings Here HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenMarkovProcess HiddenSurface Highlighted HighlightGraph HighlightImage HighlightMesh HighpassFilter HigmanSimsGroupHS HilbertCurve HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HistoricalPeriodData HitMissTransform HITSCentrality HjorthDistribution HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HostLookup HotellingTSquareDistribution HoytDistribution HTMLSave HTTPErrorResponse HTTPRedirect HTTPRequest HTTPRequestData HTTPResponse Hue HumanGrowthData HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyperplane Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestDataI IconData Iconize IconizedObject IconRules Icosahedron Identity IdentityMatrix If IgnoreCase IgnoreDiacritics IgnorePunctuation IgnoreSpellCheck IgnoringInactive Im Image Image3D Image3DProjection Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageApplyIndexed ImageAspectRatio ImageAssemble ImageAugmentationLayer ImageBoundingBoxes ImageCache ImageCacheValid ImageCapture ImageCaptureFunction ImageCases ImageChannels ImageClip ImageCollage ImageColorSpace ImageCompose ImageContainsQ ImageContents ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDisplacements ImageDistance ImageEffect ImageExposureCombine ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageFocusCombine ImageForestingComponents ImageFormattingWidth ImageForwardTransformation ImageGraphics ImageHistogram ImageIdentify ImageInstanceQ ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarker ImageMarkers ImageMeasurements ImageMesh ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImagePosition ImagePreviewFunction ImagePyramid ImagePyramidApply ImageQ ImageRangeCache ImageRecolor ImageReflect ImageRegion ImageResize ImageResolution ImageRestyle ImageRotate ImageRotated ImageSaliencyFilter ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions ImagingDevice ImplicitRegion Implies Import ImportAutoReplacements ImportByteArray ImportOptions ImportString ImprovementImportance In Inactivate Inactive IncidenceGraph IncidenceList IncidenceMatrix IncludeAromaticBonds IncludeConstantBasis IncludeDefinitions IncludeDirectories IncludeFileExtension IncludeGeneratorTasks IncludeHydrogens IncludeInflections IncludeMetaInformation IncludePods IncludeQuantities IncludeRelatedTables IncludeSingularTerm IncludeWindowTimes Increment IndefiniteMatrixQ Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentPhysicalQuantity IndependentUnit IndependentUnitDimension IndependentVertexSetQ Indeterminate IndeterminateThreshold IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers InfiniteLine InfinitePlane Infinity Infix InflationAdjust InflationMethod Information InformationData InformationDataGrid Inherited InheritScope InhomogeneousPoissonProcess InitialEvaluationHistory Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InitializationObjects InitializationValue Initialize InitialSeeding InlineCounterAssignments InlineCounterIncrements InlineRules Inner InnerPolygon InnerPolyhedron Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionFunction InsertionPointObject InsertLinebreaks InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Insphere Install InstallService InstanceNormalizationLayer InString Integer IntegerDigits IntegerExponent IntegerLength IntegerName IntegerPart IntegerPartitions IntegerQ IntegerReverse Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction Interpreter InterpretTemplate InterquartileRange Interrupt InterruptSettings IntersectingQ Intersection Interval IntervalIntersection IntervalMarkers IntervalMarkersStyle IntervalMemberQ IntervalSlider IntervalUnion Into Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHankelTransform InverseHaversine InverseImagePyramid InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InverseMellinTransform InversePermutation InverseRadon InverseRadonTransform InverseSeries InverseShortTimeFourier InverseSpectrogram InverseSurvivalFunction InverseTransformedRegion InverseWaveletTransform InverseWeierstrassP InverseWishartMatrixDistribution InverseZTransform Invisible InvisibleApplication InvisibleTimes IPAddress IrreduciblePolynomialQ IslandData IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemAspectRatio ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcessJaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join JoinAcross Joined JoinedCurve JoinedCurveBox JoinedCurveBoxOptions JoinForm JordanDecomposition JordanModelDecomposition JulianDate JuliaSetBoettcher JuliaSetIterationCount JuliaSetPlot JuliaSetPointsK KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KEdgeConnectedComponents KEdgeConnectedGraphQ KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelFunction KernelMixtureDistribution Kernels Ket Key KeyCollisionFunction KeyComplement KeyDrop KeyDropFrom KeyExistsQ KeyFreeQ KeyIntersection KeyMap KeyMemberQ KeypointStrength Keys KeySelect KeySort KeySortBy KeyTake KeyUnion KeyValueMap KeyValuePattern Khinchin KillProcess KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnapsackSolve KnightTourGraph KnotData KnownUnitQ KochCurve KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter KVertexConnectedComponents KVertexConnectedGraphQLABColor Label Labeled LabeledSlider LabelingFunction LabelingSize LabelStyle LabelVisibility LaguerreL LakeData LambdaComponents LambertW LaminaData LanczosWindow LandauDistribution Language LanguageCategory LanguageData LanguageIdentify LanguageOptions LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCHColor LCM LeaderSize LeafCount LeapYearQ LearnDistribution LearnedDistribution LearningRate LearningRateMultipliers LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessEqualThan LessFullEqual LessGreater LessLess LessSlantEqual LessThan LessTilde LetterCharacter LetterCounts LetterNumber LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryDataType LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox Line3DBoxOptions LinearFilter LinearFractionalOptimization LinearFractionalTransform LinearGradientImage LinearizingTransformationData LinearLayer LinearModelFit LinearOffsetFunction LinearOptimization LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBoxOptions LineBreak LinebreakAdjustments LineBreakChart LinebreakSemicolonWeighting LineBreakWithin LineColor LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRankCentrality LinkRead LinkReadHeld LinkReadyQ Links LinkService LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot ListDensityPlot3D Listen ListFormat ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListSliceContourPlot3D ListSliceDensityPlot3D ListSliceVectorPlot3D ListStepPlot ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalAdaptiveBinarize LocalCache LocalClusteringCoefficient LocalizeDefinitions LocalizeVariables LocalObject LocalObjects LocalResponseNormalizationLayer LocalSubmit LocalSymbol LocalTime LocalTimeZone LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogisticSigmoid LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongestOrderedSequence LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow LongShortTermMemoryLayer Lookup Loopback LoopFreeGraphQ LossFunction LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowerTriangularMatrixQ LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LunarEclipse LUVColor LyapunovSolve LyonsGroupLyMachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MailAddressValidation MailExecute MailFolder MailItem MailReceiverFunction MailResponseFunction MailSearch MailServerConnect MailServerConnection MailSettings MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules ManagedLibraryExpressionID ManagedLibraryExpressionQ MandelbrotSetBoettcher MandelbrotSetDistance MandelbrotSetIterationCount MandelbrotSetMemberQ MandelbrotSetPlot MangoldtLambda ManhattanDistance Manipulate Manipulator MannedSpaceMissionData MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarchenkoPasturDistribution MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicalFunctionData MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixNormalDistribution MatrixPlot MatrixPower MatrixPropertyDistribution MatrixQ MatrixRank MatrixTDistribution Max MaxBend MaxCellMeasure MaxColorDistance MaxDetect MaxDuration MaxExtraBandwidths MaxExtraConditions MaxFeatureDisplacement MaxFeatures MaxFilter MaximalBy Maximize MaxItems MaxIterations MaxLimit MaxMemoryUsed MaxMixtureKernels MaxOverlapFraction MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxTrainingRounds MaxValue MaxwellDistribution MaxWordGap McLaughlinGroupMcL Mean MeanAbsoluteLossLayer MeanAround MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter MeanSquaredLossLayer Median MedianDeviation MedianFilter MedicalTestData Medium MeijerG MeijerGReduce MeixnerDistribution MellinConvolve MellinTransform MemberQ MemoryAvailable MemoryConstrained MemoryConstraint MemoryInUse MengerMesh Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuList MenuPacket MenuSortingValue MenuStyle MenuView Merge MergeDifferences MergingFunction MersennePrimeExponent MersennePrimeExponentQ Mesh MeshCellCentroid MeshCellCount MeshCellHighlight MeshCellIndex MeshCellLabel MeshCellMarker MeshCellMeasure MeshCellQuality MeshCells MeshCellShapeFunction MeshCellStyle MeshCoordinates MeshFunctions MeshPrimitives MeshQualityGoal MeshRange MeshRefinementFunction MeshRegion MeshRegionQ MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageObject MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation MeteorShowerData Method MethodOptions MexicanHatWavelet MeyerWavelet Midpoint Min MinColorDistance MinDetect MineralData MinFilter MinimalBy MinimalPolynomial MinimalStateSpaceModel Minimize MinimumTimeIncrement MinIntervalSize MinkowskiQuestionMark MinLimit MinMax MinorPlanetData Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingBehavior MissingDataMethod MissingDataRules MissingQ MissingString MissingStyle MissingValuePattern MittagLefflerE MixedFractionParts MixedGraphQ MixedMagnitude MixedRadix MixedRadixQuantity MixedUnit MixtureDistribution Mod Modal Mode Modular ModularInverse ModularLambda Module Modulus MoebiusMu Molecule MoleculeContainsQ MoleculeEquivalentQ MoleculeGraph MoleculeModify MoleculePattern MoleculePlot MoleculePlot3D MoleculeProperty MoleculeQ MoleculeValue Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction MomentOfInertia Monday Monitor MonomialList MonomialOrder MonsterGroupM MoonPhase MoonPosition MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform MortalityData Most MountainData MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovieData MovingAverage MovingMap MovingMedian MoyalDistribution Multicolumn MultiedgeStyle MultigraphQ MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity MultiplySides Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistributionN NakagamiDistribution NameQ Names NamespaceBox NamespaceBoxOptions Nand NArgMax NArgMin NBernoulliB NBodySimulation NBodySimulationData NCache NDEigensystem NDEigenvalues NDSolve NDSolveValue Nearest NearestFunction NearestNeighborGraph NearestTo NebulaData NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeDefiniteMatrixQ NegativeIntegers NegativeMultinomialDistribution NegativeRationals NegativeReals NegativeSemidefiniteMatrixQ NeighborhoodData NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestGraph NestList NestWhile NestWhileList NetAppend NetBidirectionalOperator NetChain NetDecoder NetDelete NetDrop NetEncoder NetEvaluationMode NetExtract NetFlatten NetFoldOperator NetGraph NetInformation NetInitialize NetInsert NetInsertSharedArrays NetJoin NetMapOperator NetMapThreadOperator NetMeasurements NetModel NetNestOperator NetPairEmbeddingOperator NetPort NetPortGradient NetPrepend NetRename NetReplace NetReplacePart NetSharedArray NetStateObject NetTake NetTrain NetTrainResultsObject NetworkPacketCapture NetworkPacketRecording NetworkPacketRecordingDuring NetworkPacketTrace NeumannValue NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextCell NextDate NextPrime NextScheduledTaskTime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NightHemisphere NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants NondimensionalizationTransform None NoneTrue NonlinearModelFit NonlinearStateSpaceModel NonlocalMeansFilter NonNegative NonNegativeIntegers NonNegativeRationals NonNegativeReals NonPositive NonPositiveIntegers NonPositiveRationals NonPositiveReals Nor NorlundB Norm Normal NormalDistribution NormalGrouping NormalizationLayer Normalize Normalized NormalizedSquaredEuclideanDistance NormalMatrixQ NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookImport NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookTemplate NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde Nothing NotHumpDownHump NotHumpEqual NotificationFunction NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar Now NoWhitespace NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms NuclearExplosionData NuclearReactorData Null NullRecords NullSpace NullWords Number NumberCompose NumberDecompose NumberExpand NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberLinePlot NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumeratorDenominator NumericalOrder NumericalSort NumericArray NumericArrayQ NumericArrayType NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlotO ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OceanData Octahedron OddQ Off Offset OLEData On ONanGroupON Once OneIdentity Opacity OpacityFunction OpacityFunctionScaling Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionalElement OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering OrderingBy OrderingLayer Orderless OrderlessPatternSequence OrnsteinUhlenbeckProcess Orthogonalize OrthogonalMatrixQ Out Outer OuterPolygon OuterPolyhedron OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OverwriteTarget OwenT OwnValuesPackage PackingMethod PaddedForm Padding PaddingLayer PaddingSize PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageTheme PageWidth Pagination PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath PalindromeQ Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo Parallelepiped ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds Parallelogram ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParametricRegion ParentBox ParentCell ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParentNotebook ParetoDistribution ParetoPickandsDistribution ParkData Part PartBehavior PartialCorrelationFunction PartialD ParticleAcceleratorData ParticleData Partition PartitionGranularity PartitionsP PartitionsQ PartLayer PartOfSpeech PartProtection ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteAutoQuoteCharacters PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PeakDetect PeanoCurve PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PercentForm PerfectNumber PerfectNumberQ PerformanceGoal Perimeter PeriodicBoundaryCondition PeriodicInterpolation Periodogram PeriodogramArray Permanent Permissions PermissionsGroup PermissionsGroupMemberQ PermissionsGroups PermissionsKey PermissionsKeys PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PerpendicularBisector PersistenceLocation PersistenceTime PersistentObject PersistentObjects PersistentValue PersonData PERTDistribution PetersenGraph PhaseMargins PhaseRange PhysicalSystemData Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest PingTime Pink PitchRecognize Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarAngle PlanarGraph PlanarGraphQ PlanckRadiationLaw PlaneCurveData PlanetaryMoonData PlanetData PlantData Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLabels PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangeClipPlanesStyle PlotRangePadding PlotRegion PlotStyle PlotTheme Pluralize Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox Point3DBoxOptions PointBox PointBoxOptions PointFigureChart PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonalNumber PolygonAngle PolygonBox PolygonBoxOptions PolygonCoordinates PolygonDecomposition PolygonHoleScale PolygonIntersections PolygonScale Polyhedron PolyhedronAngle PolyhedronCoordinates PolyhedronData PolyhedronDecomposition PolyhedronGenus PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PoolingLayer PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position PositionIndex Positive PositiveDefiniteMatrixQ PositiveIntegers PositiveRationals PositiveReals PositiveSemidefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerRange PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement Predict PredictionRoot PredictorFunction PredictorInformation PredictorMeasurements PredictorMeasurementsObject PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependLayer PrependTo PreprocessingRules PreserveColor PreserveImageOptions Previous PreviousCell PreviousDate PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitivePolynomialQ PrimitiveRoot PrimitiveRootList PrincipalComponents PrincipalValue Print PrintableASCIIQ PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment Printout3D Printout3DPreviewer PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateKey PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessConnection ProcessDirectory ProcessEnvironment Processes ProcessEstimator ProcessInformation ProcessObject ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessStatus ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm ProofObject Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse PsychrometricPropertyData PublicKey PublisherID PulsarData PunctuationCharacter Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptionsQBinomial QFactorial QGamma QHypergeometricPFQ QnDispersion QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ QuadraticOptimization Quantile QuantilePlot Quantity QuantityArray QuantityDistribution QuantityForm QuantityMagnitude QuantityQ QuantityUnit QuantityVariable QuantityVariableCanonicalUnit QuantityVariableDimensions QuantityVariableIdentifier QuantityVariablePhysicalQuantity Quartics QuartileDeviation Quartiles QuartileSkewness Query QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainderRadialGradientImage RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RadonTransform RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Ramp Random RandomChoice RandomColor RandomComplex RandomEntity RandomFunction RandomGeoPosition RandomGraph RandomImage RandomInstance RandomInteger RandomPermutation RandomPoint RandomPolygon RandomPolyhedron RandomPrime RandomReal RandomSample RandomSeed RandomSeeding RandomVariate RandomWalkProcess RandomWord Range RangeFilter RangeSpecification RankedMax RankedMin RarerProbability Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadByteArray ReadLine ReadList ReadProtected ReadString Real RealAbs RealBlockDiagonalForm RealDigits RealExponent Reals RealSign Reap RecognitionPrior RecognitionThreshold Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RectangularRepeatingElement RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate Region RegionBinarize RegionBoundary RegionBounds RegionCentroid RegionDifference RegionDimension RegionDisjoint RegionDistance RegionDistanceFunction RegionEmbeddingDimension RegionEqual RegionFunction RegionImage RegionIntersection RegionMeasure RegionMember RegionMemberFunction RegionMoment RegionNearest RegionNearestFunction RegionPlot RegionPlot3D RegionProduct RegionQ RegionResize RegionSize RegionSymmetricDifference RegionUnion RegionWithin RegisterExternalEvaluator RegularExpression Regularization RegularlySampledQ RegularPolygon ReIm ReImLabels ReImPlot ReImStyle Reinstall RelationalDatabase RelationGraph Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot RemoteAuthorizationCaching RemoteConnect RemoteConnectionObject RemoteFile RemoteRun RemoteRunProcess Remove RemoveAlphaChannel RemoveAsynchronousTask RemoveAudioStream RemoveBackground RemoveChannelListener RemoveChannelSubscribers Removed RemoveDiacritics RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RemoveUsers RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart RepairMesh Repeated RepeatedNull RepeatedString RepeatedTiming RepeatingElement Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated ReplicateLayer RequiredPhysicalQuantities Resampling ResamplingAlgorithmData ResamplingMethod Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask ReshapeLayer Residue ResizeLayer Resolve ResourceAcquire ResourceData ResourceFunction ResourceObject ResourceRegister ResourceRemove ResourceSearch ResourceSubmissionObject ResourceSubmit ResourceSystemBase ResourceUpdate ResponseForm Rest RestartInterval Restricted Resultant ResumePacket Return ReturnEntersInput ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnReceiptFunction ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseSort ReverseSortBy ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ RiemannXi Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightComposition RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity RollPitchYawAngles RollPitchYawMatrix RomanNumeral Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RSolveValue RudinShapiro RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulePlot RulerUnits Run RunProcess RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilaritySameQ SameTest SampledEntityClass SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SASTriangle SatelliteData SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveConnection SaveDefinitions SavitzkyGolayMatrix SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTask ScheduledTaskActiveQ ScheduledTaskInformation ScheduledTaskInformationData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScientificNotationThreshold ScorerGi ScorerGiPrime ScorerHi ScorerHiPrime ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptForm ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition SearchAdjustment SearchIndexObject SearchIndices SearchQueryString SearchResultObject Sec Sech SechDistribution SecondOrderConeOptimization SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SecuredAuthenticationKey SecuredAuthenticationKeys SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook SelectFirst Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemanticImport SemanticImportString SemanticInterpretation SemialgebraicComponentInstances SemidefiniteOptimization SendMail SendMessage Sequence SequenceAlignment SequenceAttentionLayer SequenceCases SequenceCount SequenceFold SequenceFoldList SequenceForm SequenceHold SequenceLastLayer SequenceMostLayer SequencePosition SequencePredict SequencePredictorFunction SequenceReplace SequenceRestLayer SequenceReverseLayer SequenceSplit Series SeriesCoefficient SeriesData ServiceConnect ServiceDisconnect ServiceExecute ServiceObject ServiceRequest ServiceResponse ServiceSubmit SessionSubmit SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetCloudDirectory SetCookies SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPermissions SetPrecision SetProperty SetSecuredAuthenticationKey SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemModel SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetUsers SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share SharingList Sharpen ShearingMatrix ShearingTransform ShellRegion ShenCastanMatrix ShiftedGompertzDistribution ShiftRegisterSequence Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortTimeFourier ShortTimeFourierData ShortUpArrow Show ShowAutoConvert ShowAutoSpellCheck ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowCodeAssist ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiderealTime SiegelTheta SiegelTukeyTest SierpinskiCurve SierpinskiMesh Sign Signature SignedRankTest SignedRegionDistance SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ SimplePolygonQ SimplePolyhedronQ Simplex Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution SkinStyle Skip SliceContourPlot3D SliceDensityPlot3D SliceDistribution SliceVectorPlot3D Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDecomposition SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SnDispersion Snippet SnubPolyhedron SocialMediaData Socket SocketConnect SocketListen SocketListener SocketObject SocketOpen SocketReadMessage SocketReadyQ Sockets SocketWaitAll SocketWaitNext SoftmaxLayer SokalSneathDissimilarity SolarEclipse SolarSystemFeatureData SolidAngle SolidData SolidRegionQ Solve SolveAlways SolveDelayed Sort SortBy SortedBy SortedEntityClass Sound SoundAndGraphics SoundNote SoundVolume SourceLink Sow Space SpaceCurveData SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution SpatialMedian SpatialTransformationLayer Speak SpeakTextPacket SpearmanRankTest SpearmanRho SpeciesData SpecificityGoal SpectralLineData Spectrogram SpectrogramArray Specularity SpeechRecognize SpeechSynthesize SpellingCorrection SpellingCorrectionList SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SpherePoints SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SphericalShell SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquareMatrixQ SquareRepeatingElement SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave SSSTriangle StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackedDateListPlot StackedListPlot StackInhibit StadiumShape StandardAtmosphereData StandardDeviation StandardDeviationFilter StandardForm Standardize Standardized StandardOceanData StandbyDistribution Star StarClusterData StarData StarGraph StartAsynchronousTask StartExternalSession StartingStepSize StartOfLine StartOfString StartProcess StartScheduledTask StartupSound StartWebSession StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StateTransformationLinearize StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StereochemistryElements StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StoppingPowerData StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamMarkers StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringContainsQ StringCount StringDelete StringDrop StringEndsQ StringExpression StringExtract StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPadLeft StringPadRight StringPart StringPartition StringPosition StringQ StringRepeat StringReplace StringReplaceList StringReplacePart StringReverse StringRiffle StringRotateLeft StringRotateRight StringSkeleton StringSplit StringStartsQ StringTake StringTemplate StringToByteArray StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleData StyleDefinitions StyleForm StyleHints StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subdivide Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subsequences Subset SubsetEqual SubsetMap SubsetQ Subsets SubStar SubstitutionSystem Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubtractSides SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde Success SuchThat Sum SumConvergence SummationLayer Sunday SunPosition Sunrise Sunset SuperDagger SuperMinus SupernovaData SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceArea SurfaceColor SurfaceData SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricKey SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Synonyms Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SynthesizeMissingValues SystemDialogInput SystemException SystemGet SystemHelpPath SystemInformation SystemInformationData SystemInstall SystemModel SystemModeler SystemModelExamples SystemModelLinearize SystemModelParametricSimulate SystemModelPlot SystemModelProgressReporting SystemModelReliability SystemModels SystemModelSimulate SystemModelSimulateSensitivity SystemModelSimulationData SystemOpen SystemOptions SystemProcessData SystemProcesses SystemsConnectionsModel SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelLinearity SystemsModelMerge SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemsModelVectorRelativeOrders SystemStub SystemTestTab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TableViewBoxBackground TableViewBoxOptions TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeDrop TakeLargest TakeLargestBy TakeList TakeSmallest TakeSmallestBy TakeWhile Tally Tan Tanh TargetDevice TargetFunctions TargetSystem TargetUnits TaskAbort TaskExecute TaskObject TaskRemove TaskResume Tasks TaskSuspend TaskWait TautologyQ TelegraphProcess TemplateApply TemplateArgBox TemplateBox TemplateBoxOptions TemplateEvaluate TemplateExpression TemplateIf TemplateObject TemplateSequence TemplateSlot TemplateSlotSequence TemplateUnevaluated TemplateVerbatim TemplateWith TemporalData TemporalRegularity Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge TestID TestReport TestReportObject TestResultObject Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCases TextCell TextClipboardType TextContents TextData TextElement TextForm TextGrid TextJustification TextLine TextPacket TextParagraph TextPosition TextRecognize TextSearch TextSearchReport TextSentences TextString TextStructure TextStyle TextTranslation Texture TextureCoordinateFunction TextureCoordinateScaling TextWords Therefore ThermodynamicData ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreadingLayer ThreeJSymbol Threshold Through Throw ThueMorse Thumbnail Thursday Ticks TicksStyle TideData Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint TimeDirection TimeFormat TimeGoal TimelinePlot TimeObject TimeObjectQ Times TimesBy TimeSeries TimeSeriesAggregate TimeSeriesForecast TimeSeriesInsert TimeSeriesInvertibility TimeSeriesMap TimeSeriesMapThread TimeSeriesModel TimeSeriesModelFit TimeSeriesResample TimeSeriesRescale TimeSeriesShift TimeSeriesThread TimeSeriesWindow TimeUsed TimeValue TimeWarpingCorrespondence TimeWarpingDistance TimeZone TimeZoneConvert TimeZoneOffset Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate Today ToDiscreteTimeModel ToEntity ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase Tomorrow ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform ToPolarCoordinates TopologicalSort ToRadicals ToRules ToSphericalCoordinates ToString Total TotalHeight TotalLayer TotalVariationFilter TotalWidth TouchPosition TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TrackingFunction TracyWidomDistribution TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TrainingProgressCheckpointing TrainingProgressFunction TrainingProgressMeasurements TrainingProgressReporting TrainingStoppingCriterion TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationClass TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField TransformedProcess TransformedRegion TransitionDirection TransitionDuration TransitionEffect TransitiveClosureGraph TransitiveReductionGraph Translate TranslationOptions TranslationTransform Transliterate Transparent TransparentColor Transpose TransposeLayer TrapSelection TravelDirections TravelDirectionsData TravelDistance TravelDistanceList TravelMethod TravelTime TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle Triangle TriangleCenter TriangleConstruct TriangleMeasurement TriangleWave TriangularDistribution TriangulateMesh Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean TrimmedVariance TropicalStormData True TrueQ TruncatedDistribution TruncatedPolyhedron TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBoxOptions TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow TunnelData Tuples TuranGraph TuringMachine TuttePolynomial TwoWayRule Typed TypeSpecifierUnateQ Uncompress UnconstrainedParameters Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UnderseaFeatureData UndirectedEdge UndirectedGraph UndirectedGraphQ UndoOptions UndoTrackedVariables Unequal UnequalTo Unevaluated UniformDistribution UniformGraphDistribution UniformPolyhedron UniformSumDistribution Uninstall Union UnionPlus Unique UnitaryMatrixQ UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitSystem UnitTriangle UnitVector UnitVectorLayer UnityDimensions UniverseModelData UniversityData UnixTime Unprotect UnregisterExternalEvaluator UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpdateSearchIndex UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize UpperTriangularMatrixQ Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpTo UpValues URL URLBuild URLDecode URLDispatcher URLDownload URLDownloadSubmit URLEncode URLExecute URLExpand URLFetch URLFetchAsynchronous URLParse URLQueryDecode URLQueryEncode URLRead URLResponseTime URLSave URLSaveAsynchronous URLShorten URLSubmit UseGraphicsRange UserDefinedWavelet Using UsingFrontEnd UtilityFunctionV2Get ValenceErrorHandling ValidationLength ValidationSet Value ValueBox ValueBoxOptions ValueDimensions ValueForm ValuePreprocessingFunction ValueQ Values ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorAround VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorGreater VectorGreaterEqual VectorLess VectorLessEqual VectorMarkers VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerificationTest VerifyConvergence VerifyDerivedKey VerifyDigitalSignature VerifyInterpretation VerifySecurityCertificates VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexContract VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight VertexWeightedGraphQ Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewProjection ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoiceStyleData VoigtDistribution VolcanoData Volume VonMisesDistribution VoronoiMeshWaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WarpingCorrespondence WarpingDistance WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeatherForecastData WebAudioSearch WebElementObject WeberE WebExecute WebImage WebImageSearch WebSearch WebSessionObject WebSessions WebWindowObject Wedge Wednesday WeibullDistribution WeierstrassE1 WeierstrassE2 WeierstrassE3 WeierstrassEta1 WeierstrassEta2 WeierstrassEta3 WeierstrassHalfPeriods WeierstrassHalfPeriodW1 WeierstrassHalfPeriodW2 WeierstrassHalfPeriodW3 WeierstrassInvariantG2 WeierstrassInvariantG3 WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White WhiteNoiseProcess WhitePoint Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WikipediaData WikipediaSearch WilksW WilksWTest WindDirectionData WindingCount WindingPolygon WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowPersistentStyles WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth WindSpeedData WindVectorData WinsorizedMean WinsorizedVariance WishartMatrixDistribution With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult WolframLanguageData Word WordBoundary WordCharacter WordCloud WordCount WordCounts WordData WordDefinition WordFrequency WordFrequencyData WordList WordOrientation WordSearch WordSelectionFunction WordSeparators WordSpacings WordStem WordTranslation WorkingPrecision WrapAround Write WriteLine WriteString WronskianXMLElement XMLObject XMLTemplate Xnor Xor XYZColorYellow Yesterday YuleDissimilarityZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZIPCodeData ZipfDistribution ZoomCenter ZoomFactor ZTest ZTransform$Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AllowExternalChannelFunctions $AssertFunction $Assumptions $AsynchronousTask $AudioInputDevices $AudioOutputDevices $BaseDirectory $BatchInput $BatchOutput $BlockchainBase $BoxForms $ByteOrdering $CacheBaseDirectory $Canceled $ChannelBase $CharacterEncoding $CharacterEncodings $CloudBase $CloudConnected $CloudCreditsAvailable $CloudEvaluation $CloudExpressionBase $CloudObjectNameFormat $CloudObjectURLType $CloudRootDirectory $CloudSymbolBase $CloudUserID $CloudUserUUID $CloudVersion $CloudVersionNumber $CloudWolframEngineVersionNumber $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $Cookies $CookieStore $CreationDate $CurrentLink $CurrentTask $CurrentWebSession $DateStringFormat $DefaultAudioInputDevice $DefaultAudioOutputDevice $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultLocalBase $DefaultMailbox $DefaultNetworkInterface $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $EmbedCodeEnvironments $EmbeddableServices $EntityStores $Epilog $EvaluationCloudBase $EvaluationCloudObject $EvaluationEnvironment $ExportFormats $Failed $FinancialDataSource $FontFamilies $FormatType $FrontEnd $FrontEndSession $GeoEntityTypes $GeoLocation $GeoLocationCity $GeoLocationCountry $GeoLocationPrecision $GeoLocationSource $HistoryLength $HomeDirectory $HTMLExportRules $HTTPCookies $HTTPRequest $IgnoreEOF $ImageFormattingWidth $ImagingDevice $ImagingDevices $ImportFormats $IncomingMailSettings $InitialDirectory $Initialization $InitializationContexts $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $InterpreterTypes $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $LocalBase $LocalSymbolBase $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $MobilePhone $ModuleNumber $NetworkConnected $NetworkInterfaces $NetworkLicense $NewMessage $NewSymbol $Notebooks $NoValue $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $Permissions $PermissionsGroupBase $PersistenceBase $PersistencePath $PipeSupported $PlotTheme $Post $Pre $PreferencesDirectory $PreInitialization $PrePrint $PreRead $PrintForms $PrintLiteral $Printout3DPreviewer $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $PublisherID $RandomState $RecursionLimit $RegisteredDeviceClasses $RegisteredUserName $ReleaseNumber $RequesterAddress $RequesterWolframID $RequesterWolframUUID $ResourceSystemBase $RootDirectory $ScheduledTask $ScriptCommandLine $ScriptInputString $SecuredAuthenticationKeyTokens $ServiceCreditsAvailable $Services $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SourceLink $SSHAuthentication $SummaryBoxDataSizeLimit $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemMemory $SystemShell $SystemTimeZone $SystemWordLength $TemplatePath $TemporaryDirectory $TemporaryPrefix $TestFileName $TextStyle $TimedOut $TimeUnit $TimeZone $TimeZoneEntity $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $UnitSystem $Urgent $UserAddOnsDirectory $UserAgentLanguages $UserAgentMachine $UserAgentName $UserAgentOperatingSystem $UserAgentString $UserAgentVersion $UserBaseDirectory $UserDocumentsDirectory $Username $UserName $UserURLBase $Version $VersionNumber $VoiceStyles $WolframID $WolframUUID",
    c: [e.C("\\(\\*", "\\*\\)", { c: ["self"] }), e.QSM, e.CNM],
  };
});
hljs.registerLanguage("ruleslanguage", function (T) {
  return {
    k: {
      keyword:
        "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",
      built_in:
        "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME",
    },
    c: [
      T.CLCM,
      T.CBCM,
      T.ASM,
      T.QSM,
      T.CNM,
      {
        cN: "literal",
        v: [
          { b: "#\\s+[a-zA-Z\\ \\.]*", relevance: 0 },
          { b: "#[a-zA-Z\\ \\.]+" },
        ],
      },
    ],
  };
});
hljs.registerLanguage("cos", function (e) {
  return {
    cI: !0,
    aliases: ["cos", "cls"],
    k: "property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii",
    c: [
      { cN: "number", b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)", relevance: 0 },
      { cN: "string", v: [{ b: '"', e: '"', c: [{ b: '""', relevance: 0 }] }] },
      e.CLCM,
      e.CBCM,
      { cN: "comment", b: /;/, e: "$", relevance: 0 },
      { cN: "built_in", b: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/ },
      { cN: "built_in", b: /\$\$\$[a-zA-Z]+/ },
      { cN: "built_in", b: /%[a-z]+(?:\.[a-z]+)*/ },
      { cN: "symbol", b: /\^%?[a-zA-Z][\w]*/ },
      { cN: "keyword", b: /##class|##super|#define|#dim/ },
      { b: /&sql\(/, e: /\)/, eB: !0, eE: !0, sL: "sql" },
      {
        b: /&(js|jscript|javascript)</,
        e: />/,
        eB: !0,
        eE: !0,
        sL: "javascript",
      },
      { b: /&html<\s*</, e: />\s*>/, sL: "xml" },
    ],
  };
});
hljs.registerLanguage("twig", function (e) {
  var t =
      "attribute block constant cycle date dump include max min parent random range source template_from_string",
    a = {
      bK: t,
      k: { name: t },
      relevance: 0,
      c: [{ cN: "params", b: "\\(", e: "\\)" }],
    },
    r = {
      b: /\|[A-Za-z_]+:?/,
      k: "abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",
      c: [a],
    },
    c =
      "apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";
  return (
    (c =
      c +
      " " +
      c
        .split(" ")
        .map(function (e) {
          return "end" + e;
        })
        .join(" ")),
    {
      aliases: ["craftcms"],
      cI: !0,
      sL: "xml",
      c: [
        e.C(/\{#/, /#}/),
        {
          cN: "template-tag",
          b: /\{%/,
          e: /%}/,
          c: [
            {
              cN: "name",
              b: /\w+/,
              k: c,
              starts: { eW: !0, c: [r, a], relevance: 0 },
            },
          ],
        },
        { cN: "template-variable", b: /\{\{/, e: /}}/, c: ["self", r, a] },
      ],
    }
  );
});
hljs.registerLanguage("autohotkey", function (e) {
  var a = { b: "`[\\s\\S]" };
  return {
    cI: !0,
    aliases: ["ahk"],
    k: {
      keyword:
        "Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
      literal: "true false NOT AND OR",
      built_in: "ComSpec Clipboard ClipboardAll ErrorLevel",
    },
    c: [
      a,
      e.inherit(e.QSM, { c: [a] }),
      e.C(";", "$", { relevance: 0 }),
      e.CBCM,
      { cN: "number", b: e.NR, relevance: 0 },
      { cN: "variable", b: "%[a-zA-Z0-9#_$@]+%" },
      { cN: "built_in", b: "^\\s*\\w+\\s*(,|%)" },
      {
        cN: "title",
        v: [
          { b: '^[^\\n";]+::(?!=)' },
          { b: '^[^\\n";]+:(?!=)', relevance: 0 },
        ],
      },
      { cN: "meta", b: "^\\s*#\\w+", e: "$", relevance: 0 },
      { cN: "built_in", b: "A_[a-zA-Z0-9]+" },
      { b: ",\\s*," },
    ],
  };
});
hljs.registerLanguage("lua", function (e) {
  var t = "\\[=*\\[",
    a = "\\]=*\\]",
    n = { b: t, e: a, c: ["self"] },
    l = [
      e.C("--(?!" + t + ")", "$"),
      e.C("--" + t, a, { c: [n], relevance: 10 }),
    ];
  return {
    l: e.UIR,
    k: {
      literal: "true false nil",
      keyword:
        "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in:
        "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove",
    },
    c: l.concat([
      {
        cN: "function",
        bK: "function",
        e: "\\)",
        c: [
          e.inherit(e.TM, {
            b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
          }),
          { cN: "params", b: "\\(", eW: !0, c: l },
        ].concat(l),
      },
      e.CNM,
      e.ASM,
      e.QSM,
      { cN: "string", b: t, e: a, c: [n], relevance: 5 },
    ]),
  };
});
hljs.registerLanguage("javascript", function (e) {
  var r = "<>",
    a = "</>",
    t = { b: /<[A-Za-z0-9\\._:-]+/, e: /\/[A-Za-z0-9\\._:-]+>|\/>/ },
    c = "[A-Za-z$_][0-9A-Za-z$_]*",
    n = {
      keyword:
        "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
      literal: "true false null undefined NaN Infinity",
      built_in:
        "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
    },
    s = {
      cN: "number",
      v: [
        { b: "\\b(0[bB][01]+)n?" },
        { b: "\\b(0[oO][0-7]+)n?" },
        { b: e.CNR + "n?" },
      ],
      relevance: 0,
    },
    o = { cN: "subst", b: "\\$\\{", e: "\\}", k: n, c: [] },
    i = {
      b: "html`",
      e: "",
      starts: { e: "`", rE: !1, c: [e.BE, o], sL: "xml" },
    },
    b = {
      b: "css`",
      e: "",
      starts: { e: "`", rE: !1, c: [e.BE, o], sL: "css" },
    },
    l = { cN: "string", b: "`", e: "`", c: [e.BE, o] };
  o.c = [e.ASM, e.QSM, i, b, l, s, e.RM];
  var u = o.c.concat([e.CBCM, e.CLCM]);
  return {
    aliases: ["js", "jsx", "mjs", "cjs"],
    k: n,
    c: [
      { cN: "meta", relevance: 10, b: /^\s*['"]use (strict|asm)['"]/ },
      { cN: "meta", b: /^#!/, e: /$/ },
      e.ASM,
      e.QSM,
      i,
      b,
      l,
      e.CLCM,
      e.C("/\\*\\*", "\\*/", {
        relevance: 0,
        c: [
          {
            cN: "doctag",
            b: "@[A-Za-z]+",
            c: [
              { cN: "type", b: "\\{", e: "\\}", relevance: 0 },
              {
                cN: "variable",
                b: c + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0,
              },
              { b: /(?=[^\n])\s/, relevance: 0 },
            ],
          },
        ],
      }),
      e.CBCM,
      s,
      {
        b: /[{,\n]\s*/,
        relevance: 0,
        c: [
          {
            b: c + "\\s*:",
            rB: !0,
            relevance: 0,
            c: [{ cN: "attr", b: c, relevance: 0 }],
          },
        ],
      },
      {
        b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [
          e.CLCM,
          e.CBCM,
          e.RM,
          {
            cN: "function",
            b: "(\\(.*?\\)|" + c + ")\\s*=>",
            rB: !0,
            e: "\\s*=>",
            c: [
              {
                cN: "params",
                v: [
                  { b: c },
                  { b: /\(\s*\)/ },
                  { b: /\(/, e: /\)/, eB: !0, eE: !0, k: n, c: u },
                ],
              },
            ],
          },
          { cN: "", b: /\s/, e: /\s*/, skip: !0 },
          {
            v: [
              { b: r, e: a },
              { b: t.b, e: t.e },
            ],
            sL: "xml",
            c: [{ b: t.b, e: t.e, skip: !0, c: ["self"] }],
          },
        ],
        relevance: 0,
      },
      {
        cN: "function",
        bK: "function",
        e: /\{/,
        eE: !0,
        c: [
          e.inherit(e.TM, { b: c }),
          { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: u },
        ],
        i: /\[|%/,
      },
      { b: /\$[(.]/ },
      e.METHOD_GUARD,
      {
        cN: "class",
        bK: "class",
        e: /[{;=]/,
        eE: !0,
        i: /[:"\[\]]/,
        c: [{ bK: "extends" }, e.UTM],
      },
      { bK: "constructor get set", e: /\{/, eE: !0 },
    ],
    i: /#(?!!)/,
  };
});
hljs.registerLanguage("qml", function (e) {
  var r = "[a-zA-Z_][a-zA-Z0-9\\._]*",
    t = {
      cN: "attribute",
      b: "\\bid\\s*:",
      starts: { cN: "string", e: r, rE: !1 },
    },
    a = {
      b: r + "\\s*:",
      rB: !0,
      c: [{ cN: "attribute", b: r, e: "\\s*:", eE: !0, relevance: 0 }],
      relevance: 0,
    },
    n = {
      b: r + "\\s*{",
      e: "{",
      rB: !0,
      relevance: 0,
      c: [e.inherit(e.TM, { b: r })],
    };
  return {
    aliases: ["qt"],
    cI: !1,
    k: {
      keyword:
        "in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",
      literal: "true false null undefined NaN Infinity",
      built_in:
        "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4dPromise",
    },
    c: [
      { cN: "meta", b: /^\s*['"]use (strict|asm)['"]/ },
      e.ASM,
      e.QSM,
      {
        cN: "string",
        b: "`",
        e: "`",
        c: [e.BE, { cN: "subst", b: "\\$\\{", e: "\\}" }],
      },
      e.CLCM,
      e.CBCM,
      {
        cN: "number",
        v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }],
        relevance: 0,
      },
      {
        b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [
          e.CLCM,
          e.CBCM,
          e.RM,
          { b: /</, e: />\s*[);\]]/, relevance: 0, sL: "xml" },
        ],
        relevance: 0,
      },
      {
        cN: "keyword",
        b: "\\bsignal\\b",
        starts: { cN: "string", e: "(\\(|:|=|;|,|//|/\\*|$)", rE: !0 },
      },
      {
        cN: "keyword",
        b: "\\bproperty\\b",
        starts: { cN: "string", e: "(:|=|;|,|//|/\\*|$)", rE: !0 },
      },
      {
        cN: "function",
        bK: "function",
        e: /\{/,
        eE: !0,
        c: [
          e.inherit(e.TM, { b: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            eB: !0,
            eE: !0,
            c: [e.CLCM, e.CBCM],
          },
        ],
        i: /\[|%/,
      },
      { b: "\\." + e.IR, relevance: 0 },
      t,
      a,
      n,
    ],
    i: /#/,
  };
});
hljs.registerLanguage("elixir", function (e) {
  var b = "[a-zA-Z_][a-zA-Z0-9_.]*(\\!|\\?)?",
    c =
      "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0",
    n = { cN: "subst", b: "#\\{", e: "}", l: b, k: c },
    r = "[/|([{<\"']",
    a = {
      cN: "string",
      b: "~[a-z](?=" + r + ")",
      c: [
        {
          endsParent: !0,
          c: [
            {
              c: [e.BE, n],
              v: [
                { b: /"/, e: /"/ },
                { b: /'/, e: /'/ },
                { b: /\//, e: /\// },
                { b: /\|/, e: /\|/ },
                { b: /\(/, e: /\)/ },
                { b: /\[/, e: /\]/ },
                { b: /\{/, e: /\}/ },
                { b: /</, e: />/ },
              ],
            },
          ],
        },
      ],
    },
    i = {
      cN: "string",
      b: "~[A-Z](?=" + r + ")",
      c: [
        { b: /"/, e: /"/ },
        { b: /'/, e: /'/ },
        { b: /\//, e: /\// },
        { b: /\|/, e: /\|/ },
        { b: /\(/, e: /\)/ },
        { b: /\[/, e: /\]/ },
        { b: /\{/, e: /\}/ },
        { b: /\</, e: /\>/ },
      ],
    },
    l = {
      cN: "string",
      c: [e.BE, n],
      v: [
        { b: /"""/, e: /"""/ },
        { b: /'''/, e: /'''/ },
        { b: /~S"""/, e: /"""/, c: [] },
        { b: /~S"/, e: /"/, c: [] },
        { b: /~S'''/, e: /'''/, c: [] },
        { b: /~S'/, e: /'/, c: [] },
        { b: /'/, e: /'/ },
        { b: /"/, e: /"/ },
      ],
    },
    s = {
      cN: "function",
      bK: "def defp defmacro",
      e: /\B\b/,
      c: [e.inherit(e.TM, { b: b, endsParent: !0 })],
    },
    t = e.inherit(s, {
      cN: "class",
      bK: "defimpl defmodule defprotocol defrecord",
      e: /\bdo\b|$|;/,
    }),
    d = [
      l,
      i,
      a,
      e.HCM,
      t,
      s,
      { b: "::" },
      {
        cN: "symbol",
        b: ":(?![\\s:])",
        c: [
          l,
          {
            b: "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
          },
        ],
        relevance: 0,
      },
      { cN: "symbol", b: b + ":(?!:)", relevance: 0 },
      {
        cN: "number",
        b: "(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(.[0-9_]+([eE][-+]?[0-9]+)?)?)",
        relevance: 0,
      },
      { cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
      { b: "->" },
      {
        b: "(" + e.RSR + ")\\s*",
        c: [
          e.HCM,
          {
            cN: "regexp",
            i: "\\n",
            c: [e.BE, n],
            v: [
              { b: "/", e: "/[a-z]*" },
              { b: "%r\\[", e: "\\][a-z]*" },
            ],
          },
        ],
        relevance: 0,
      },
    ];
  return { l: b, k: c, c: (n.c = d) };
});
hljs.registerLanguage("smali", function (e) {
  var n = [
    "add",
    "and",
    "cmp",
    "cmpg",
    "cmpl",
    "const",
    "div",
    "double",
    "float",
    "goto",
    "if",
    "int",
    "long",
    "move",
    "mul",
    "neg",
    "new",
    "nop",
    "not",
    "or",
    "rem",
    "return",
    "shl",
    "shr",
    "sput",
    "sub",
    "throw",
    "ushr",
    "xor",
  ];
  return {
    aliases: ["smali"],
    c: [
      { cN: "string", b: '"', e: '"', relevance: 0 },
      e.C("#", "$", { relevance: 0 }),
      {
        cN: "keyword",
        v: [
          { b: "\\s*\\.end\\s[a-zA-Z0-9]*" },
          { b: "^[ ]*\\.[a-zA-Z]*", relevance: 0 },
          { b: "\\s:[a-zA-Z_0-9]*", relevance: 0 },
          {
            b:
              "\\s(" +
              [
                "transient",
                "constructor",
                "abstract",
                "final",
                "synthetic",
                "public",
                "private",
                "protected",
                "static",
                "bridge",
                "system",
              ].join("|") +
              ")",
          },
        ],
      },
      {
        cN: "built_in",
        v: [
          { b: "\\s(" + n.join("|") + ")\\s" },
          {
            b: "\\s(" + n.join("|") + ")((\\-|/)[a-zA-Z0-9]+)+\\s",
            relevance: 10,
          },
          {
            b:
              "\\s(" +
              [
                "aget",
                "aput",
                "array",
                "check",
                "execute",
                "fill",
                "filled",
                "goto/16",
                "goto/32",
                "iget",
                "instance",
                "invoke",
                "iput",
                "monitor",
                "packed",
                "sget",
                "sparse",
              ].join("|") +
              ")((\\-|/)[a-zA-Z0-9]+)*\\s",
            relevance: 10,
          },
        ],
      },
      { cN: "class", b: "L[^(;:\n]*;", relevance: 0 },
      { b: "[vp][0-9]+" },
    ],
  };
});
hljs.registerLanguage("reasonml", function (e) {
  var a = "~?[a-z$_][0-9a-zA-Z$_]*",
    r = "`?[A-Z$_][0-9a-zA-Z$_]*",
    c =
      "(" +
      ["||", "&&", "++", "**", "+.", "*", "/", "*.", "/.", "...", "|>"]
        .map(function (e) {
          return e
            .split("")
            .map(function (e) {
              return "\\" + e;
            })
            .join("");
        })
        .join("|") +
      "|==|===)",
    n = "\\s+" + c + "\\s+",
    l = {
      keyword:
        "and as asr assert begin class constraint do done downto else end exception externalfor fun function functor if in include inherit initializerland lazy let lor lsl lsr lxor match method mod module mutable new nonrecobject of open or private rec sig struct then to try type val virtual when while with",
      built_in:
        "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",
      literal: "true false",
    },
    t =
      "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
    i = {
      cN: "number",
      relevance: 0,
      v: [{ b: t }, { b: "\\(\\-" + t + "\\)" }],
    },
    s = { cN: "operator", relevance: 0, b: c },
    b = [{ cN: "identifier", relevance: 0, b: a }, s, i],
    o = [
      e.QSM,
      s,
      {
        cN: "module",
        b: "\\b" + r,
        rB: !0,
        e: ".",
        c: [{ cN: "identifier", b: r, relevance: 0 }],
      },
    ],
    v = [
      {
        cN: "module",
        b: "\\b" + r,
        rB: !0,
        e: ".",
        relevance: 0,
        c: [{ cN: "identifier", b: r, relevance: 0 }],
      },
    ],
    u = {
      cN: "function",
      relevance: 0,
      k: l,
      v: [
        {
          b: "\\s(\\(\\.?.*?\\)|" + a + ")\\s*=>",
          e: "\\s*=>",
          rB: !0,
          relevance: 0,
          c: [
            {
              cN: "params",
              v: [
                { b: a },
                {
                  b: "~?[a-z$_][0-9a-zA-Z$_]*(s*:s*[a-z$_][0-9a-z$_]*((s*('?[a-z$_][0-9a-z$_]*s*(,'?[a-z$_][0-9a-z$_]*)*)?s*))?)?(s*:s*[a-z$_][0-9a-z$_]*((s*('?[a-z$_][0-9a-z$_]*s*(,'?[a-z$_][0-9a-z$_]*)*)?s*))?)?",
                },
                { b: /\(\s*\)/ },
              ],
            },
          ],
        },
        {
          b: "\\s\\(\\.?[^;\\|]*\\)\\s*=>",
          e: "\\s=>",
          rB: !0,
          relevance: 0,
          c: [
            {
              cN: "params",
              relevance: 0,
              v: [
                {
                  b: a,
                  e: "(,|\\n|\\))",
                  relevance: 0,
                  c: [
                    s,
                    {
                      cN: "typing",
                      b: ":",
                      e: "(,|\\n)",
                      rB: !0,
                      relevance: 0,
                      c: v,
                    },
                  ],
                },
              ],
            },
          ],
        },
        { b: "\\(\\.\\s" + a + "\\)\\s*=>" },
      ],
    };
  o.push(u);
  var _ = {
      cN: "constructor",
      b: r + "\\(",
      e: "\\)",
      i: "\\n",
      k: l,
      c: [e.QSM, s, { cN: "params", b: "\\b" + a }],
    },
    N = {
      cN: "pattern-match",
      b: "\\|",
      rB: !0,
      k: l,
      e: "=>",
      relevance: 0,
      c: [_, s, { relevance: 0, cN: "constructor", b: r }],
    },
    d = {
      cN: "module-access",
      k: l,
      rB: !0,
      v: [
        { b: "\\b(" + r + "\\.)+" + a },
        {
          b: "\\b(" + r + "\\.)+\\(",
          e: "\\)",
          rB: !0,
          c: [u, { b: "\\(", e: "\\)", skip: !0 }].concat(o),
        },
        { b: "\\b(" + r + "\\.)+{", e: "}" },
      ],
      c: o,
    };
  return (
    v.push(d),
    {
      aliases: ["re"],
      k: l,
      i: "(:\\-|:=|\\${|\\+=)",
      c: [
        e.C("/\\*", "\\*/", { i: "^(\\#,\\/\\/)" }),
        { cN: "character", b: "'(\\\\[^']+|[^'])'", i: "\\n", relevance: 0 },
        e.QSM,
        { cN: "literal", b: "\\(\\)", relevance: 0 },
        { cN: "literal", b: "\\[\\|", e: "\\|\\]", relevance: 0, c: b },
        { cN: "literal", b: "\\[", e: "\\]", relevance: 0, c: b },
        _,
        { cN: "operator", b: n, i: "\\-\\->", relevance: 0 },
        i,
        e.CLCM,
        N,
        u,
        {
          cN: "module-def",
          b: "\\bmodule\\s+" + a + "\\s+" + r + "\\s+=\\s+{",
          e: "}",
          rB: !0,
          k: l,
          relevance: 0,
          c: [
            { cN: "module", relevance: 0, b: r },
            { b: "{", e: "}", skip: !0 },
          ].concat(o),
        },
        d,
      ],
    }
  );
});
hljs.registerLanguage("handlebars", function (e) {
  var t = {
      "builtin-name":
        "each in with if else unless bindattr action collection debugger log outlet template unbound view yield lookup",
    },
    a = { b: /".*?"|'.*?'|\[.*?\]|\w+/ },
    l = e.inherit(a, {
      k: t,
      starts: { eW: !0, relevance: 0, c: [e.inherit(a, { relevance: 0 })] },
    }),
    i = e.inherit(l, { cN: "name" }),
    n = e.inherit(l, { relevance: 0 });
  return {
    aliases: ["hbs", "html.hbs", "html.handlebars"],
    cI: !0,
    sL: "xml",
    c: [
      { b: /\\\{\{/, skip: !0 },
      { b: /\\\\(?=\{\{)/, skip: !0 },
      e.C(/\{\{!--/, /--\}\}/),
      e.C(/\{\{!/, /\}\}/),
      {
        cN: "template-tag",
        b: /\{\{\{\{(?!\/)/,
        e: /\}\}\}\}/,
        c: [i],
        starts: { e: /\{\{\{\{\//, rE: !0, sL: "xml" },
      },
      { cN: "template-tag", b: /\{\{\{\{\//, e: /\}\}\}\}/, c: [i] },
      { cN: "template-tag", b: /\{\{[#\/]/, e: /\}\}/, c: [i] },
      { cN: "template-variable", b: /\{\{\{/, e: /\}\}\}/, k: t, c: [n] },
      { cN: "template-variable", b: /\{\{/, e: /\}\}/, k: t, c: [n] },
    ],
  };
});
hljs.registerLanguage("verilog", function (e) {
  return {
    aliases: ["v", "sv", "svh"],
    cI: !1,
    k: {
      keyword:
        "accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor",
      literal: "null",
      built_in:
        "$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror",
    },
    l: /[\w\$]+/,
    c: [
      e.CBCM,
      e.CLCM,
      e.QSM,
      {
        cN: "number",
        c: [e.BE],
        v: [
          { b: "\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)" },
          { b: "\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)" },
          { b: "\\b([0-9_])+", relevance: 0 },
        ],
      },
      {
        cN: "variable",
        v: [{ b: "#\\((?!parameter).+\\)" }, { b: "\\.\\w+", relevance: 0 }],
      },
      {
        cN: "meta",
        b: "`",
        e: "$",
        k: {
          "meta-keyword":
            "define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall",
        },
        relevance: 0,
      },
    ],
  };
});
hljs.registerLanguage("mel", function (e) {
  return {
    k: "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
    i: "</",
    c: [
      e.CNM,
      e.ASM,
      e.QSM,
      { cN: "string", b: "`", e: "`", c: [e.BE] },
      { b: "[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)" },
      e.CLCM,
      e.CBCM,
    ],
  };
});
hljs.registerLanguage("thrift", function (e) {
  var t = "bool byte i16 i32 i64 double string binary";
  return {
    k: {
      keyword:
        "namespace const typedef struct enum service exception void oneway set list map required optional",
      built_in: t,
      literal: "true false",
    },
    c: [
      e.QSM,
      e.NM,
      e.CLCM,
      e.CBCM,
      {
        cN: "class",
        bK: "struct enum service exception",
        e: /\{/,
        i: /\n/,
        c: [e.inherit(e.TM, { starts: { eW: !0, eE: !0 } })],
      },
      { b: "\\b(set|list|map)\\s*<", e: ">", k: t, c: ["self"] },
    ],
  };
});
hljs.registerLanguage("stylus", function (e) {
  var t = { cN: "variable", b: "\\$" + e.IR },
    o = { cN: "number", b: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})" },
    i = "(?=[\\.\\s\\n\\[\\:,])";
  return {
    aliases: ["styl"],
    cI: !1,
    k: "if else for in",
    i:
      "(" +
      [
        "\\?",
        "(\\bReturn\\b)",
        "(\\bEnd\\b)",
        "(\\bend\\b)",
        "(\\bdef\\b)",
        ";",
        "#\\s",
        "\\*\\s",
        "===\\s",
        "\\|",
        "%",
      ].join("|") +
      ")",
    c: [
      e.QSM,
      e.ASM,
      e.CLCM,
      e.CBCM,
      o,
      { b: "\\.[a-zA-Z][a-zA-Z0-9_-]*" + i, cN: "selector-class" },
      { b: "\\#[a-zA-Z][a-zA-Z0-9_-]*" + i, cN: "selector-id" },
      {
        b:
          "\\b(" +
          [
            "a",
            "abbr",
            "address",
            "article",
            "aside",
            "audio",
            "b",
            "blockquote",
            "body",
            "button",
            "canvas",
            "caption",
            "cite",
            "code",
            "dd",
            "del",
            "details",
            "dfn",
            "div",
            "dl",
            "dt",
            "em",
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
            "html",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "mark",
            "menu",
            "nav",
            "object",
            "ol",
            "p",
            "q",
            "quote",
            "samp",
            "section",
            "span",
            "strong",
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
            "ul",
            "var",
            "video",
          ].join("|") +
          ")" +
          i,
        cN: "selector-tag",
      },
      {
        b:
          "&?:?:\\b(" +
          [
            "after",
            "before",
            "first-letter",
            "first-line",
            "active",
            "first-child",
            "focus",
            "hover",
            "lang",
            "link",
            "visited",
          ].join("|") +
          ")" +
          i,
      },
      {
        b:
          "@(" +
          [
            "charset",
            "css",
            "debug",
            "extend",
            "font-face",
            "for",
            "import",
            "include",
            "media",
            "mixin",
            "page",
            "warn",
            "while",
          ].join("|") +
          ")\\b",
      },
      t,
      e.CSSNM,
      e.NM,
      {
        cN: "function",
        b: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
        i: "[\\n]",
        rB: !0,
        c: [
          { cN: "title", b: "\\b[a-zA-Z][a-zA-Z0-9_-]*" },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: [o, t, e.ASM, e.CSSNM, e.NM, e.QSM],
          },
        ],
      },
      {
        cN: "attribute",
        b:
          "\\b(" +
          [
            "align-content",
            "align-items",
            "align-self",
            "animation",
            "animation-delay",
            "animation-direction",
            "animation-duration",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-name",
            "animation-play-state",
            "animation-timing-function",
            "auto",
            "backface-visibility",
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-repeat",
            "background-size",
            "border",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-style",
            "border-bottom-width",
            "border-collapse",
            "border-color",
            "border-image",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice",
            "border-image-source",
            "border-image-width",
            "border-left",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-radius",
            "border-right",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-spacing",
            "border-style",
            "border-top",
            "border-top-color",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-top-style",
            "border-top-width",
            "border-width",
            "bottom",
            "box-decoration-break",
            "box-shadow",
            "box-sizing",
            "break-after",
            "break-before",
            "break-inside",
            "caption-side",
            "clear",
            "clip",
            "clip-path",
            "color",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-span",
            "column-width",
            "columns",
            "content",
            "counter-increment",
            "counter-reset",
            "cursor",
            "direction",
            "display",
            "empty-cells",
            "filter",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "float",
            "font",
            "font-family",
            "font-feature-settings",
            "font-kerning",
            "font-language-override",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-variant-ligatures",
            "font-weight",
            "height",
            "hyphens",
            "icon",
            "image-orientation",
            "image-rendering",
            "image-resolution",
            "ime-mode",
            "inherit",
            "initial",
            "justify-content",
            "left",
            "letter-spacing",
            "line-height",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "margin",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "marks",
            "mask",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "nav-down",
            "nav-index",
            "nav-left",
            "nav-right",
            "nav-up",
            "none",
            "normal",
            "object-fit",
            "object-position",
            "opacity",
            "order",
            "orphans",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "overflow",
            "overflow-wrap",
            "overflow-x",
            "overflow-y",
            "padding",
            "padding-bottom",
            "padding-left",
            "padding-right",
            "padding-top",
            "page-break-after",
            "page-break-before",
            "page-break-inside",
            "perspective",
            "perspective-origin",
            "pointer-events",
            "position",
            "quotes",
            "resize",
            "right",
            "tab-size",
            "table-layout",
            "text-align",
            "text-align-last",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-style",
            "text-indent",
            "text-overflow",
            "text-rendering",
            "text-shadow",
            "text-transform",
            "text-underline-position",
            "top",
            "transform",
            "transform-origin",
            "transform-style",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
            "unicode-bidi",
            "vertical-align",
            "visibility",
            "white-space",
            "widows",
            "width",
            "word-break",
            "word-spacing",
            "word-wrap",
            "z-index",
          ]
            .reverse()
            .join("|") +
          ")\\b",
        starts: {
          e: /;|$/,
          c: [o, t, e.ASM, e.QSM, e.CSSNM, e.NM, e.CBCM],
          i: /\./,
          relevance: 0,
        },
      },
    ],
  };
});
hljs.registerLanguage("accesslog", function (e) {
  var n = [
    "GET",
    "POST",
    "HEAD",
    "PUT",
    "DELETE",
    "CONNECT",
    "OPTIONS",
    "PATCH",
    "TRACE",
  ];
  return {
    c: [
      {
        cN: "number",
        b: "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b",
        relevance: 5,
      },
      { cN: "number", b: "\\b\\d+\\b", relevance: 0 },
      {
        cN: "string",
        b: '"(' + n.join("|") + ")",
        e: '"',
        k: n.join(" "),
        i: "\\n",
        relevance: 5,
        c: [{ b: "HTTP/[12]\\.\\d", relevance: 5 }],
      },
      { cN: "string", b: /\[\d[^\]\n]{8,}\]/, i: "\\n", relevance: 1 },
      { cN: "string", b: /\[/, e: /\]/, i: "\\n", relevance: 0 },
      {
        cN: "string",
        b: '"Mozilla/\\d\\.\\d \\(',
        e: '"',
        i: "\\n",
        relevance: 3,
      },
      { cN: "string", b: '"', e: '"', i: "\\n", relevance: 0 },
    ],
  };
});
hljs.registerLanguage("q", function (e) {
  return {
    aliases: ["k", "kdb"],
    k: {
      keyword: "do while select delete by update from",
      literal: "0b 1b",
      built_in:
        "neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",
      type: "`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid",
    },
    l: /(`?)[A-Za-z0-9_]+\b/,
    c: [e.CLCM, e.QSM, e.CNM],
  };
});
hljs.registerLanguage("nix", function (e) {
  var r = {
      keyword: "rec with let in inherit assert if else then",
      literal: "true false or and null",
      built_in:
        "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation",
    },
    t = { cN: "subst", b: /\$\{/, e: /}/, k: r },
    i = {
      cN: "string",
      c: [t],
      v: [
        { b: "''", e: "''" },
        { b: '"', e: '"' },
      ],
    },
    a = [
      e.NM,
      e.HCM,
      e.CBCM,
      i,
      {
        b: /[a-zA-Z0-9-_]+(\s*=)/,
        rB: !0,
        relevance: 0,
        c: [{ cN: "attr", b: /\S+/ }],
      },
    ];
  return { aliases: ["nixos"], k: r, c: (t.c = a) };
});
hljs.registerLanguage("avrasm", function (r) {
  return {
    cI: !0,
    l: "\\.?" + r.IR,
    k: {
      keyword:
        "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
      built_in:
        "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
      meta: ".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set",
    },
    c: [
      r.CBCM,
      r.C(";", "$", { relevance: 0 }),
      r.CNM,
      r.BNM,
      { cN: "number", b: "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)" },
      r.QSM,
      { cN: "string", b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" },
      { cN: "symbol", b: "^[A-Za-z0-9_.$]+:" },
      { cN: "meta", b: "#", e: "$" },
      { cN: "subst", b: "@[0-9]+" },
    ],
  };
});
hljs.registerLanguage("mojolicious", function (e) {
  return {
    sL: "xml",
    c: [
      { cN: "meta", b: "^__(END|DATA)__$" },
      { b: "^\\s*%{1,2}={0,2}", e: "$", sL: "perl" },
      { b: "<%{1,2}={0,2}", e: "={0,1}%>", sL: "perl", eB: !0, eE: !0 },
    ],
  };
});
hljs.registerLanguage("rsl", function (e) {
  return {
    k: {
      keyword:
        "float color point normal vector matrix while for if do return else break extern continue",
      built_in:
        "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp",
    },
    i: "</",
    c: [
      e.CLCM,
      e.CBCM,
      e.QSM,
      e.ASM,
      e.CNM,
      { cN: "meta", b: "#", e: "$" },
      { cN: "class", bK: "surface displacement light volume imager", e: "\\(" },
      { bK: "illuminate illuminance gather", e: "\\(" },
    ],
  };
});
hljs.registerLanguage("n1ql", function (e) {
  return {
    cI: !0,
    c: [
      {
        bK: "build create index delete drop explain infer|10 insert merge prepare select update upsert|10",
        e: /;/,
        eW: !0,
        k: {
          keyword:
            "all alter analyze and any array as asc begin between binary boolean break bucket build by call case cast cluster collate collection commit connect continue correlate cover create database dataset datastore declare decrement delete derived desc describe distinct do drop each element else end every except exclude execute exists explain fetch first flatten for force from function grant group gsi having if ignore ilike in include increment index infer inline inner insert intersect into is join key keys keyspace known last left let letting like limit lsm map mapping matched materialized merge minus namespace nest not number object offset on option or order outer over parse partition password path pool prepare primary private privilege procedure public raw realm reduce rename return returning revoke right role rollback satisfies schema select self semi set show some start statistics string system then to transaction trigger truncate under union unique unknown unnest unset update upsert use user using validate value valued values via view when where while with within work xor",
          literal: "true false null missing|5",
          built_in:
            "array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring",
        },
        c: [
          { cN: "string", b: "'", e: "'", c: [e.BE], relevance: 0 },
          { cN: "string", b: '"', e: '"', c: [e.BE], relevance: 0 },
          { cN: "symbol", b: "`", e: "`", c: [e.BE], relevance: 2 },
          e.CNM,
          e.CBCM,
        ],
      },
      e.CBCM,
    ],
  };
});
hljs.registerLanguage("sml", function (e) {
  return {
    aliases: ["ml"],
    k: {
      keyword:
        "abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
      built_in:
        "array bool char exn int list option order real ref string substring vector unit word",
      literal: "true false NONE SOME LESS EQUAL GREATER nil",
    },
    i: /\/\/|>>/,
    l: "[a-z_]\\w*!?",
    c: [
      { cN: "literal", b: /\[(\|\|)?\]|\(\)/, relevance: 0 },
      e.C("\\(\\*", "\\*\\)", { c: ["self"] }),
      { cN: "symbol", b: "'[A-Za-z_](?!')[\\w']*" },
      { cN: "type", b: "`[A-Z][\\w']*" },
      { cN: "type", b: "\\b[A-Z][\\w']*", relevance: 0 },
      { b: "[a-z_]\\w*'[\\w']*" },
      e.inherit(e.ASM, { cN: "string", relevance: 0 }),
      e.inherit(e.QSM, { i: null }),
      {
        cN: "number",
        b: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        relevance: 0,
      },
      { b: /[-=]>/ },
    ],
  };
});
hljs.registerLanguage("stan", function (_) {
  return {
    aliases: ["stanfuncs"],
    k: {
      title: [
        "functions",
        "model",
        "data",
        "parameters",
        "quantities",
        "transformed",
        "generated",
      ].join(" "),
      keyword: [
        "for",
        "in",
        "if",
        "else",
        "while",
        "break",
        "continue",
        "return",
      ]
        .concat([
          "int",
          "real",
          "vector",
          "ordered",
          "positive_ordered",
          "simplex",
          "unit_vector",
          "row_vector",
          "matrix",
          "cholesky_factor_corr|10",
          "cholesky_factor_cov|10",
          "corr_matrix|10",
          "cov_matrix|10",
          "void",
        ])
        .concat([
          "print",
          "reject",
          "increment_log_prob|10",
          "integrate_ode|10",
          "integrate_ode_rk45|10",
          "integrate_ode_bdf|10",
          "algebra_solver",
        ])
        .join(" "),
      built_in: [
        "Phi",
        "Phi_approx",
        "abs",
        "acos",
        "acosh",
        "algebra_solver",
        "append_array",
        "append_col",
        "append_row",
        "asin",
        "asinh",
        "atan",
        "atan2",
        "atanh",
        "bernoulli_cdf",
        "bernoulli_lccdf",
        "bernoulli_lcdf",
        "bernoulli_logit_lpmf",
        "bernoulli_logit_rng",
        "bernoulli_lpmf",
        "bernoulli_rng",
        "bessel_first_kind",
        "bessel_second_kind",
        "beta_binomial_cdf",
        "beta_binomial_lccdf",
        "beta_binomial_lcdf",
        "beta_binomial_lpmf",
        "beta_binomial_rng",
        "beta_cdf",
        "beta_lccdf",
        "beta_lcdf",
        "beta_lpdf",
        "beta_rng",
        "binary_log_loss",
        "binomial_cdf",
        "binomial_coefficient_log",
        "binomial_lccdf",
        "binomial_lcdf",
        "binomial_logit_lpmf",
        "binomial_lpmf",
        "binomial_rng",
        "block",
        "categorical_logit_lpmf",
        "categorical_logit_rng",
        "categorical_lpmf",
        "categorical_rng",
        "cauchy_cdf",
        "cauchy_lccdf",
        "cauchy_lcdf",
        "cauchy_lpdf",
        "cauchy_rng",
        "cbrt",
        "ceil",
        "chi_square_cdf",
        "chi_square_lccdf",
        "chi_square_lcdf",
        "chi_square_lpdf",
        "chi_square_rng",
        "cholesky_decompose",
        "choose",
        "col",
        "cols",
        "columns_dot_product",
        "columns_dot_self",
        "cos",
        "cosh",
        "cov_exp_quad",
        "crossprod",
        "csr_extract_u",
        "csr_extract_v",
        "csr_extract_w",
        "csr_matrix_times_vector",
        "csr_to_dense_matrix",
        "cumulative_sum",
        "determinant",
        "diag_matrix",
        "diag_post_multiply",
        "diag_pre_multiply",
        "diagonal",
        "digamma",
        "dims",
        "dirichlet_lpdf",
        "dirichlet_rng",
        "distance",
        "dot_product",
        "dot_self",
        "double_exponential_cdf",
        "double_exponential_lccdf",
        "double_exponential_lcdf",
        "double_exponential_lpdf",
        "double_exponential_rng",
        "e",
        "eigenvalues_sym",
        "eigenvectors_sym",
        "erf",
        "erfc",
        "exp",
        "exp2",
        "exp_mod_normal_cdf",
        "exp_mod_normal_lccdf",
        "exp_mod_normal_lcdf",
        "exp_mod_normal_lpdf",
        "exp_mod_normal_rng",
        "expm1",
        "exponential_cdf",
        "exponential_lccdf",
        "exponential_lcdf",
        "exponential_lpdf",
        "exponential_rng",
        "fabs",
        "falling_factorial",
        "fdim",
        "floor",
        "fma",
        "fmax",
        "fmin",
        "fmod",
        "frechet_cdf",
        "frechet_lccdf",
        "frechet_lcdf",
        "frechet_lpdf",
        "frechet_rng",
        "gamma_cdf",
        "gamma_lccdf",
        "gamma_lcdf",
        "gamma_lpdf",
        "gamma_p",
        "gamma_q",
        "gamma_rng",
        "gaussian_dlm_obs_lpdf",
        "get_lp",
        "gumbel_cdf",
        "gumbel_lccdf",
        "gumbel_lcdf",
        "gumbel_lpdf",
        "gumbel_rng",
        "head",
        "hypergeometric_lpmf",
        "hypergeometric_rng",
        "hypot",
        "inc_beta",
        "int_step",
        "integrate_ode",
        "integrate_ode_bdf",
        "integrate_ode_rk45",
        "inv",
        "inv_Phi",
        "inv_chi_square_cdf",
        "inv_chi_square_lccdf",
        "inv_chi_square_lcdf",
        "inv_chi_square_lpdf",
        "inv_chi_square_rng",
        "inv_cloglog",
        "inv_gamma_cdf",
        "inv_gamma_lccdf",
        "inv_gamma_lcdf",
        "inv_gamma_lpdf",
        "inv_gamma_rng",
        "inv_logit",
        "inv_sqrt",
        "inv_square",
        "inv_wishart_lpdf",
        "inv_wishart_rng",
        "inverse",
        "inverse_spd",
        "is_inf",
        "is_nan",
        "lbeta",
        "lchoose",
        "lgamma",
        "lkj_corr_cholesky_lpdf",
        "lkj_corr_cholesky_rng",
        "lkj_corr_lpdf",
        "lkj_corr_rng",
        "lmgamma",
        "lmultiply",
        "log",
        "log10",
        "log1m",
        "log1m_exp",
        "log1m_inv_logit",
        "log1p",
        "log1p_exp",
        "log2",
        "log_determinant",
        "log_diff_exp",
        "log_falling_factorial",
        "log_inv_logit",
        "log_mix",
        "log_rising_factorial",
        "log_softmax",
        "log_sum_exp",
        "logistic_cdf",
        "logistic_lccdf",
        "logistic_lcdf",
        "logistic_lpdf",
        "logistic_rng",
        "logit",
        "lognormal_cdf",
        "lognormal_lccdf",
        "lognormal_lcdf",
        "lognormal_lpdf",
        "lognormal_rng",
        "machine_precision",
        "matrix_exp",
        "max",
        "mdivide_left_spd",
        "mdivide_left_tri_low",
        "mdivide_right_spd",
        "mdivide_right_tri_low",
        "mean",
        "min",
        "modified_bessel_first_kind",
        "modified_bessel_second_kind",
        "multi_gp_cholesky_lpdf",
        "multi_gp_lpdf",
        "multi_normal_cholesky_lpdf",
        "multi_normal_cholesky_rng",
        "multi_normal_lpdf",
        "multi_normal_prec_lpdf",
        "multi_normal_rng",
        "multi_student_t_lpdf",
        "multi_student_t_rng",
        "multinomial_lpmf",
        "multinomial_rng",
        "multiply_log",
        "multiply_lower_tri_self_transpose",
        "neg_binomial_2_cdf",
        "neg_binomial_2_lccdf",
        "neg_binomial_2_lcdf",
        "neg_binomial_2_log_lpmf",
        "neg_binomial_2_log_rng",
        "neg_binomial_2_lpmf",
        "neg_binomial_2_rng",
        "neg_binomial_cdf",
        "neg_binomial_lccdf",
        "neg_binomial_lcdf",
        "neg_binomial_lpmf",
        "neg_binomial_rng",
        "negative_infinity",
        "normal_cdf",
        "normal_lccdf",
        "normal_lcdf",
        "normal_lpdf",
        "normal_rng",
        "not_a_number",
        "num_elements",
        "ordered_logistic_lpmf",
        "ordered_logistic_rng",
        "owens_t",
        "pareto_cdf",
        "pareto_lccdf",
        "pareto_lcdf",
        "pareto_lpdf",
        "pareto_rng",
        "pareto_type_2_cdf",
        "pareto_type_2_lccdf",
        "pareto_type_2_lcdf",
        "pareto_type_2_lpdf",
        "pareto_type_2_rng",
        "pi",
        "poisson_cdf",
        "poisson_lccdf",
        "poisson_lcdf",
        "poisson_log_lpmf",
        "poisson_log_rng",
        "poisson_lpmf",
        "poisson_rng",
        "positive_infinity",
        "pow",
        "print",
        "prod",
        "qr_Q",
        "qr_R",
        "quad_form",
        "quad_form_diag",
        "quad_form_sym",
        "rank",
        "rayleigh_cdf",
        "rayleigh_lccdf",
        "rayleigh_lcdf",
        "rayleigh_lpdf",
        "rayleigh_rng",
        "reject",
        "rep_array",
        "rep_matrix",
        "rep_row_vector",
        "rep_vector",
        "rising_factorial",
        "round",
        "row",
        "rows",
        "rows_dot_product",
        "rows_dot_self",
        "scaled_inv_chi_square_cdf",
        "scaled_inv_chi_square_lccdf",
        "scaled_inv_chi_square_lcdf",
        "scaled_inv_chi_square_lpdf",
        "scaled_inv_chi_square_rng",
        "sd",
        "segment",
        "sin",
        "singular_values",
        "sinh",
        "size",
        "skew_normal_cdf",
        "skew_normal_lccdf",
        "skew_normal_lcdf",
        "skew_normal_lpdf",
        "skew_normal_rng",
        "softmax",
        "sort_asc",
        "sort_desc",
        "sort_indices_asc",
        "sort_indices_desc",
        "sqrt",
        "sqrt2",
        "square",
        "squared_distance",
        "step",
        "student_t_cdf",
        "student_t_lccdf",
        "student_t_lcdf",
        "student_t_lpdf",
        "student_t_rng",
        "sub_col",
        "sub_row",
        "sum",
        "tail",
        "tan",
        "tanh",
        "target",
        "tcrossprod",
        "tgamma",
        "to_array_1d",
        "to_array_2d",
        "to_matrix",
        "to_row_vector",
        "to_vector",
        "trace",
        "trace_gen_quad_form",
        "trace_quad_form",
        "trigamma",
        "trunc",
        "uniform_cdf",
        "uniform_lccdf",
        "uniform_lcdf",
        "uniform_lpdf",
        "uniform_rng",
        "variance",
        "von_mises_lpdf",
        "von_mises_rng",
        "weibull_cdf",
        "weibull_lccdf",
        "weibull_lcdf",
        "weibull_lpdf",
        "weibull_rng",
        "wiener_lpdf",
        "wishart_lpdf",
        "wishart_rng",
      ].join(" "),
    },
    l: _.IR,
    c: [
      _.CLCM,
      _.C(/#/, /$/, { relevance: 0, k: { "meta-keyword": "include" } }),
      _.C(/\/\*/, /\*\//, {
        relevance: 0,
        c: [{ cN: "doctag", b: /@(return|param)/ }],
      }),
      { b: /<\s*lower\s*=/, k: "lower" },
      { b: /[<,]*upper\s*=/, k: "upper" },
      { cN: "keyword", b: /\btarget\s*\+=/, relevance: 10 },
      {
        b: "~\\s*(" + _.IR + ")\\s*\\(",
        k: [
          "bernoulli",
          "bernoulli_logit",
          "beta",
          "beta_binomial",
          "binomial",
          "binomial_logit",
          "categorical",
          "categorical_logit",
          "cauchy",
          "chi_square",
          "dirichlet",
          "double_exponential",
          "exp_mod_normal",
          "exponential",
          "frechet",
          "gamma",
          "gaussian_dlm_obs",
          "gumbel",
          "hypergeometric",
          "inv_chi_square",
          "inv_gamma",
          "inv_wishart",
          "lkj_corr",
          "lkj_corr_cholesky",
          "logistic",
          "lognormal",
          "multi_gp",
          "multi_gp_cholesky",
          "multi_normal",
          "multi_normal_cholesky",
          "multi_normal_prec",
          "multi_student_t",
          "multinomial",
          "neg_binomial",
          "neg_binomial_2",
          "neg_binomial_2_log",
          "normal",
          "ordered_logistic",
          "pareto",
          "pareto_type_2",
          "poisson",
          "poisson_log",
          "rayleigh",
          "scaled_inv_chi_square",
          "skew_normal",
          "student_t",
          "uniform",
          "von_mises",
          "weibull",
          "wiener",
          "wishart",
        ].join(" "),
      },
      {
        cN: "number",
        v: [
          { b: /\b\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/ },
          { b: /\.\d+(?:[eE][+-]?\d+)?\b/ },
        ],
        relevance: 0,
      },
      { cN: "string", b: '"', e: '"', relevance: 0 },
    ],
  };
});
hljs.registerLanguage("gml", function (e) {
  return {
    aliases: ["gml", "GML"],
    cI: !1,
    k: {
      keyword:
        "begin end if then else while do for break continue with until repeat exit and or xor not return mod div switch case default var globalvar enum #macro #region #endregion",
      built_in:
        "is_real is_string is_array is_undefined is_int32 is_int64 is_ptr is_vec3 is_vec4 is_matrix is_bool typeof variable_global_exists variable_global_get variable_global_set variable_instance_exists variable_instance_get variable_instance_set variable_instance_get_names array_length_1d array_length_2d array_height_2d array_equals array_create array_copy random random_range irandom irandom_range random_set_seed random_get_seed randomize randomise choose abs round floor ceil sign frac sqrt sqr exp ln log2 log10 sin cos tan arcsin arccos arctan arctan2 dsin dcos dtan darcsin darccos darctan darctan2 degtorad radtodeg power logn min max mean median clamp lerp dot_product dot_product_3d dot_product_normalised dot_product_3d_normalised dot_product_normalized dot_product_3d_normalized math_set_epsilon math_get_epsilon angle_difference point_distance_3d point_distance point_direction lengthdir_x lengthdir_y real string int64 ptr string_format chr ansi_char ord string_length string_byte_length string_pos string_copy string_char_at string_ord_at string_byte_at string_set_byte_at string_delete string_insert string_lower string_upper string_repeat string_letters string_digits string_lettersdigits string_replace string_replace_all string_count string_hash_to_newline clipboard_has_text clipboard_set_text clipboard_get_text date_current_datetime date_create_datetime date_valid_datetime date_inc_year date_inc_month date_inc_week date_inc_day date_inc_hour date_inc_minute date_inc_second date_get_year date_get_month date_get_week date_get_day date_get_hour date_get_minute date_get_second date_get_weekday date_get_day_of_year date_get_hour_of_year date_get_minute_of_year date_get_second_of_year date_year_span date_month_span date_week_span date_day_span date_hour_span date_minute_span date_second_span date_compare_datetime date_compare_date date_compare_time date_date_of date_time_of date_datetime_string date_date_string date_time_string date_days_in_month date_days_in_year date_leap_year date_is_today date_set_timezone date_get_timezone game_set_speed game_get_speed motion_set motion_add place_free place_empty place_meeting place_snapped move_random move_snap move_towards_point move_contact_solid move_contact_all move_outside_solid move_outside_all move_bounce_solid move_bounce_all move_wrap distance_to_point distance_to_object position_empty position_meeting path_start path_end mp_linear_step mp_potential_step mp_linear_step_object mp_potential_step_object mp_potential_settings mp_linear_path mp_potential_path mp_linear_path_object mp_potential_path_object mp_grid_create mp_grid_destroy mp_grid_clear_all mp_grid_clear_cell mp_grid_clear_rectangle mp_grid_add_cell mp_grid_get_cell mp_grid_add_rectangle mp_grid_add_instances mp_grid_path mp_grid_draw mp_grid_to_ds_grid collision_point collision_rectangle collision_circle collision_ellipse collision_line collision_point_list collision_rectangle_list collision_circle_list collision_ellipse_list collision_line_list instance_position_list instance_place_list point_in_rectangle point_in_triangle point_in_circle rectangle_in_rectangle rectangle_in_triangle rectangle_in_circle instance_find instance_exists instance_number instance_position instance_nearest instance_furthest instance_place instance_create_depth instance_create_layer instance_copy instance_change instance_destroy position_destroy position_change instance_id_get instance_deactivate_all instance_deactivate_object instance_deactivate_region instance_activate_all instance_activate_object instance_activate_region room_goto room_goto_previous room_goto_next room_previous room_next room_restart game_end game_restart game_load game_save game_save_buffer game_load_buffer event_perform event_user event_perform_object event_inherited show_debug_message show_debug_overlay debug_event debug_get_callstack alarm_get alarm_set font_texture_page_size keyboard_set_map keyboard_get_map keyboard_unset_map keyboard_check keyboard_check_pressed keyboard_check_released keyboard_check_direct keyboard_get_numlock keyboard_set_numlock keyboard_key_press keyboard_key_release keyboard_clear io_clear mouse_check_button mouse_check_button_pressed mouse_check_button_released mouse_wheel_up mouse_wheel_down mouse_clear draw_self draw_sprite draw_sprite_pos draw_sprite_ext draw_sprite_stretched draw_sprite_stretched_ext draw_sprite_tiled draw_sprite_tiled_ext draw_sprite_part draw_sprite_part_ext draw_sprite_general draw_clear draw_clear_alpha draw_point draw_line draw_line_width draw_rectangle draw_roundrect draw_roundrect_ext draw_triangle draw_circle draw_ellipse draw_set_circle_precision draw_arrow draw_button draw_path draw_healthbar draw_getpixel draw_getpixel_ext draw_set_colour draw_set_color draw_set_alpha draw_get_colour draw_get_color draw_get_alpha merge_colour make_colour_rgb make_colour_hsv colour_get_red colour_get_green colour_get_blue colour_get_hue colour_get_saturation colour_get_value merge_color make_color_rgb make_color_hsv color_get_red color_get_green color_get_blue color_get_hue color_get_saturation color_get_value merge_color screen_save screen_save_part draw_set_font draw_set_halign draw_set_valign draw_text draw_text_ext string_width string_height string_width_ext string_height_ext draw_text_transformed draw_text_ext_transformed draw_text_colour draw_text_ext_colour draw_text_transformed_colour draw_text_ext_transformed_colour draw_text_color draw_text_ext_color draw_text_transformed_color draw_text_ext_transformed_color draw_point_colour draw_line_colour draw_line_width_colour draw_rectangle_colour draw_roundrect_colour draw_roundrect_colour_ext draw_triangle_colour draw_circle_colour draw_ellipse_colour draw_point_color draw_line_color draw_line_width_color draw_rectangle_color draw_roundrect_color draw_roundrect_color_ext draw_triangle_color draw_circle_color draw_ellipse_color draw_primitive_begin draw_vertex draw_vertex_colour draw_vertex_color draw_primitive_end sprite_get_uvs font_get_uvs sprite_get_texture font_get_texture texture_get_width texture_get_height texture_get_uvs draw_primitive_begin_texture draw_vertex_texture draw_vertex_texture_colour draw_vertex_texture_color texture_global_scale surface_create surface_create_ext surface_resize surface_free surface_exists surface_get_width surface_get_height surface_get_texture surface_set_target surface_set_target_ext surface_reset_target surface_depth_disable surface_get_depth_disable draw_surface draw_surface_stretched draw_surface_tiled draw_surface_part draw_surface_ext draw_surface_stretched_ext draw_surface_tiled_ext draw_surface_part_ext draw_surface_general surface_getpixel surface_getpixel_ext surface_save surface_save_part surface_copy surface_copy_part application_surface_draw_enable application_get_position application_surface_enable application_surface_is_enabled display_get_width display_get_height display_get_orientation display_get_gui_width display_get_gui_height display_reset display_mouse_get_x display_mouse_get_y display_mouse_set display_set_ui_visibility window_set_fullscreen window_get_fullscreen window_set_caption window_set_min_width window_set_max_width window_set_min_height window_set_max_height window_get_visible_rects window_get_caption window_set_cursor window_get_cursor window_set_colour window_get_colour window_set_color window_get_color window_set_position window_set_size window_set_rectangle window_center window_get_x window_get_y window_get_width window_get_height window_mouse_get_x window_mouse_get_y window_mouse_set window_view_mouse_get_x window_view_mouse_get_y window_views_mouse_get_x window_views_mouse_get_y audio_listener_position audio_listener_velocity audio_listener_orientation audio_emitter_position audio_emitter_create audio_emitter_free audio_emitter_exists audio_emitter_pitch audio_emitter_velocity audio_emitter_falloff audio_emitter_gain audio_play_sound audio_play_sound_on audio_play_sound_at audio_stop_sound audio_resume_music audio_music_is_playing audio_resume_sound audio_pause_sound audio_pause_music audio_channel_num audio_sound_length audio_get_type audio_falloff_set_model audio_play_music audio_stop_music audio_master_gain audio_music_gain audio_sound_gain audio_sound_pitch audio_stop_all audio_resume_all audio_pause_all audio_is_playing audio_is_paused audio_exists audio_sound_set_track_position audio_sound_get_track_position audio_emitter_get_gain audio_emitter_get_pitch audio_emitter_get_x audio_emitter_get_y audio_emitter_get_z audio_emitter_get_vx audio_emitter_get_vy audio_emitter_get_vz audio_listener_set_position audio_listener_set_velocity audio_listener_set_orientation audio_listener_get_data audio_set_master_gain audio_get_master_gain audio_sound_get_gain audio_sound_get_pitch audio_get_name audio_sound_set_track_position audio_sound_get_track_position audio_create_stream audio_destroy_stream audio_create_sync_group audio_destroy_sync_group audio_play_in_sync_group audio_start_sync_group audio_stop_sync_group audio_pause_sync_group audio_resume_sync_group audio_sync_group_get_track_pos audio_sync_group_debug audio_sync_group_is_playing audio_debug audio_group_load audio_group_unload audio_group_is_loaded audio_group_load_progress audio_group_name audio_group_stop_all audio_group_set_gain audio_create_buffer_sound audio_free_buffer_sound audio_create_play_queue audio_free_play_queue audio_queue_sound audio_get_recorder_count audio_get_recorder_info audio_start_recording audio_stop_recording audio_sound_get_listener_mask audio_emitter_get_listener_mask audio_get_listener_mask audio_sound_set_listener_mask audio_emitter_set_listener_mask audio_set_listener_mask audio_get_listener_count audio_get_listener_info audio_system show_message show_message_async clickable_add clickable_add_ext clickable_change clickable_change_ext clickable_delete clickable_exists clickable_set_style show_question show_question_async get_integer get_string get_integer_async get_string_async get_login_async get_open_filename get_save_filename get_open_filename_ext get_save_filename_ext show_error highscore_clear highscore_add highscore_value highscore_name draw_highscore sprite_exists sprite_get_name sprite_get_number sprite_get_width sprite_get_height sprite_get_xoffset sprite_get_yoffset sprite_get_bbox_left sprite_get_bbox_right sprite_get_bbox_top sprite_get_bbox_bottom sprite_save sprite_save_strip sprite_set_cache_size sprite_set_cache_size_ext sprite_get_tpe sprite_prefetch sprite_prefetch_multi sprite_flush sprite_flush_multi sprite_set_speed sprite_get_speed_type sprite_get_speed font_exists font_get_name font_get_fontname font_get_bold font_get_italic font_get_first font_get_last font_get_size font_set_cache_size path_exists path_get_name path_get_length path_get_time path_get_kind path_get_closed path_get_precision path_get_number path_get_point_x path_get_point_y path_get_point_speed path_get_x path_get_y path_get_speed script_exists script_get_name timeline_add timeline_delete timeline_clear timeline_exists timeline_get_name timeline_moment_clear timeline_moment_add_script timeline_size timeline_max_moment object_exists object_get_name object_get_sprite object_get_solid object_get_visible object_get_persistent object_get_mask object_get_parent object_get_physics object_is_ancestor room_exists room_get_name sprite_set_offset sprite_duplicate sprite_assign sprite_merge sprite_add sprite_replace sprite_create_from_surface sprite_add_from_surface sprite_delete sprite_set_alpha_from_sprite sprite_collision_mask font_add_enable_aa font_add_get_enable_aa font_add font_add_sprite font_add_sprite_ext font_replace font_replace_sprite font_replace_sprite_ext font_delete path_set_kind path_set_closed path_set_precision path_add path_assign path_duplicate path_append path_delete path_add_point path_insert_point path_change_point path_delete_point path_clear_points path_reverse path_mirror path_flip path_rotate path_rescale path_shift script_execute object_set_sprite object_set_solid object_set_visible object_set_persistent object_set_mask room_set_width room_set_height room_set_persistent room_set_background_colour room_set_background_color room_set_view room_set_viewport room_get_viewport room_set_view_enabled room_add room_duplicate room_assign room_instance_add room_instance_clear room_get_camera room_set_camera asset_get_index asset_get_type file_text_open_from_string file_text_open_read file_text_open_write file_text_open_append file_text_close file_text_write_string file_text_write_real file_text_writeln file_text_read_string file_text_read_real file_text_readln file_text_eof file_text_eoln file_exists file_delete file_rename file_copy directory_exists directory_create directory_destroy file_find_first file_find_next file_find_close file_attributes filename_name filename_path filename_dir filename_drive filename_ext filename_change_ext file_bin_open file_bin_rewrite file_bin_close file_bin_position file_bin_size file_bin_seek file_bin_write_byte file_bin_read_byte parameter_count parameter_string environment_get_variable ini_open_from_string ini_open ini_close ini_read_string ini_read_real ini_write_string ini_write_real ini_key_exists ini_section_exists ini_key_delete ini_section_delete ds_set_precision ds_exists ds_stack_create ds_stack_destroy ds_stack_clear ds_stack_copy ds_stack_size ds_stack_empty ds_stack_push ds_stack_pop ds_stack_top ds_stack_write ds_stack_read ds_queue_create ds_queue_destroy ds_queue_clear ds_queue_copy ds_queue_size ds_queue_empty ds_queue_enqueue ds_queue_dequeue ds_queue_head ds_queue_tail ds_queue_write ds_queue_read ds_list_create ds_list_destroy ds_list_clear ds_list_copy ds_list_size ds_list_empty ds_list_add ds_list_insert ds_list_replace ds_list_delete ds_list_find_index ds_list_find_value ds_list_mark_as_list ds_list_mark_as_map ds_list_sort ds_list_shuffle ds_list_write ds_list_read ds_list_set ds_map_create ds_map_destroy ds_map_clear ds_map_copy ds_map_size ds_map_empty ds_map_add ds_map_add_list ds_map_add_map ds_map_replace ds_map_replace_map ds_map_replace_list ds_map_delete ds_map_exists ds_map_find_value ds_map_find_previous ds_map_find_next ds_map_find_first ds_map_find_last ds_map_write ds_map_read ds_map_secure_save ds_map_secure_load ds_map_secure_load_buffer ds_map_secure_save_buffer ds_map_set ds_priority_create ds_priority_destroy ds_priority_clear ds_priority_copy ds_priority_size ds_priority_empty ds_priority_add ds_priority_change_priority ds_priority_find_priority ds_priority_delete_value ds_priority_delete_min ds_priority_find_min ds_priority_delete_max ds_priority_find_max ds_priority_write ds_priority_read ds_grid_create ds_grid_destroy ds_grid_copy ds_grid_resize ds_grid_width ds_grid_height ds_grid_clear ds_grid_set ds_grid_add ds_grid_multiply ds_grid_set_region ds_grid_add_region ds_grid_multiply_region ds_grid_set_disk ds_grid_add_disk ds_grid_multiply_disk ds_grid_set_grid_region ds_grid_add_grid_region ds_grid_multiply_grid_region ds_grid_get ds_grid_get_sum ds_grid_get_max ds_grid_get_min ds_grid_get_mean ds_grid_get_disk_sum ds_grid_get_disk_min ds_grid_get_disk_max ds_grid_get_disk_mean ds_grid_value_exists ds_grid_value_x ds_grid_value_y ds_grid_value_disk_exists ds_grid_value_disk_x ds_grid_value_disk_y ds_grid_shuffle ds_grid_write ds_grid_read ds_grid_sort ds_grid_set ds_grid_get effect_create_below effect_create_above effect_clear part_type_create part_type_destroy part_type_exists part_type_clear part_type_shape part_type_sprite part_type_size part_type_scale part_type_orientation part_type_life part_type_step part_type_death part_type_speed part_type_direction part_type_gravity part_type_colour1 part_type_colour2 part_type_colour3 part_type_colour_mix part_type_colour_rgb part_type_colour_hsv part_type_color1 part_type_color2 part_type_color3 part_type_color_mix part_type_color_rgb part_type_color_hsv part_type_alpha1 part_type_alpha2 part_type_alpha3 part_type_blend part_system_create part_system_create_layer part_system_destroy part_system_exists part_system_clear part_system_draw_order part_system_depth part_system_position part_system_automatic_update part_system_automatic_draw part_system_update part_system_drawit part_system_get_layer part_system_layer part_particles_create part_particles_create_colour part_particles_create_color part_particles_clear part_particles_count part_emitter_create part_emitter_destroy part_emitter_destroy_all part_emitter_exists part_emitter_clear part_emitter_region part_emitter_burst part_emitter_stream external_call external_define external_free window_handle window_device matrix_get matrix_set matrix_build_identity matrix_build matrix_build_lookat matrix_build_projection_ortho matrix_build_projection_perspective matrix_build_projection_perspective_fov matrix_multiply matrix_transform_vertex matrix_stack_push matrix_stack_pop matrix_stack_multiply matrix_stack_set matrix_stack_clear matrix_stack_top matrix_stack_is_empty browser_input_capture os_get_config os_get_info os_get_language os_get_region os_lock_orientation display_get_dpi_x display_get_dpi_y display_set_gui_size display_set_gui_maximise display_set_gui_maximize device_mouse_dbclick_enable display_set_timing_method display_get_timing_method display_set_sleep_margin display_get_sleep_margin virtual_key_add virtual_key_hide virtual_key_delete virtual_key_show draw_enable_drawevent draw_enable_swf_aa draw_set_swf_aa_level draw_get_swf_aa_level draw_texture_flush draw_flush gpu_set_blendenable gpu_set_ztestenable gpu_set_zfunc gpu_set_zwriteenable gpu_set_lightingenable gpu_set_fog gpu_set_cullmode gpu_set_blendmode gpu_set_blendmode_ext gpu_set_blendmode_ext_sepalpha gpu_set_colorwriteenable gpu_set_colourwriteenable gpu_set_alphatestenable gpu_set_alphatestref gpu_set_alphatestfunc gpu_set_texfilter gpu_set_texfilter_ext gpu_set_texrepeat gpu_set_texrepeat_ext gpu_set_tex_filter gpu_set_tex_filter_ext gpu_set_tex_repeat gpu_set_tex_repeat_ext gpu_set_tex_mip_filter gpu_set_tex_mip_filter_ext gpu_set_tex_mip_bias gpu_set_tex_mip_bias_ext gpu_set_tex_min_mip gpu_set_tex_min_mip_ext gpu_set_tex_max_mip gpu_set_tex_max_mip_ext gpu_set_tex_max_aniso gpu_set_tex_max_aniso_ext gpu_set_tex_mip_enable gpu_set_tex_mip_enable_ext gpu_get_blendenable gpu_get_ztestenable gpu_get_zfunc gpu_get_zwriteenable gpu_get_lightingenable gpu_get_fog gpu_get_cullmode gpu_get_blendmode gpu_get_blendmode_ext gpu_get_blendmode_ext_sepalpha gpu_get_blendmode_src gpu_get_blendmode_dest gpu_get_blendmode_srcalpha gpu_get_blendmode_destalpha gpu_get_colorwriteenable gpu_get_colourwriteenable gpu_get_alphatestenable gpu_get_alphatestref gpu_get_alphatestfunc gpu_get_texfilter gpu_get_texfilter_ext gpu_get_texrepeat gpu_get_texrepeat_ext gpu_get_tex_filter gpu_get_tex_filter_ext gpu_get_tex_repeat gpu_get_tex_repeat_ext gpu_get_tex_mip_filter gpu_get_tex_mip_filter_ext gpu_get_tex_mip_bias gpu_get_tex_mip_bias_ext gpu_get_tex_min_mip gpu_get_tex_min_mip_ext gpu_get_tex_max_mip gpu_get_tex_max_mip_ext gpu_get_tex_max_aniso gpu_get_tex_max_aniso_ext gpu_get_tex_mip_enable gpu_get_tex_mip_enable_ext gpu_push_state gpu_pop_state gpu_get_state gpu_set_state draw_light_define_ambient draw_light_define_direction draw_light_define_point draw_light_enable draw_set_lighting draw_light_get_ambient draw_light_get draw_get_lighting shop_leave_rating url_get_domain url_open url_open_ext url_open_full get_timer achievement_login achievement_logout achievement_post achievement_increment achievement_post_score achievement_available achievement_show_achievements achievement_show_leaderboards achievement_load_friends achievement_load_leaderboard achievement_send_challenge achievement_load_progress achievement_reset achievement_login_status achievement_get_pic achievement_show_challenge_notifications achievement_get_challenges achievement_event achievement_show achievement_get_info cloud_file_save cloud_string_save cloud_synchronise ads_enable ads_disable ads_setup ads_engagement_launch ads_engagement_available ads_engagement_active ads_event ads_event_preload ads_set_reward_callback ads_get_display_height ads_get_display_width ads_move ads_interstitial_available ads_interstitial_display device_get_tilt_x device_get_tilt_y device_get_tilt_z device_is_keypad_open device_mouse_check_button device_mouse_check_button_pressed device_mouse_check_button_released device_mouse_x device_mouse_y device_mouse_raw_x device_mouse_raw_y device_mouse_x_to_gui device_mouse_y_to_gui iap_activate iap_status iap_enumerate_products iap_restore_all iap_acquire iap_consume iap_product_details iap_purchase_details facebook_init facebook_login facebook_status facebook_graph_request facebook_dialog facebook_logout facebook_launch_offerwall facebook_post_message facebook_send_invite facebook_user_id facebook_accesstoken facebook_check_permission facebook_request_read_permissions facebook_request_publish_permissions gamepad_is_supported gamepad_get_device_count gamepad_is_connected gamepad_get_description gamepad_get_button_threshold gamepad_set_button_threshold gamepad_get_axis_deadzone gamepad_set_axis_deadzone gamepad_button_count gamepad_button_check gamepad_button_check_pressed gamepad_button_check_released gamepad_button_value gamepad_axis_count gamepad_axis_value gamepad_set_vibration gamepad_set_colour gamepad_set_color os_is_paused window_has_focus code_is_compiled http_get http_get_file http_post_string http_request json_encode json_decode zip_unzip load_csv base64_encode base64_decode md5_string_unicode md5_string_utf8 md5_file os_is_network_connected sha1_string_unicode sha1_string_utf8 sha1_file os_powersave_enable analytics_event analytics_event_ext win8_livetile_tile_notification win8_livetile_tile_clear win8_livetile_badge_notification win8_livetile_badge_clear win8_livetile_queue_enable win8_secondarytile_pin win8_secondarytile_badge_notification win8_secondarytile_delete win8_livetile_notification_begin win8_livetile_notification_secondary_begin win8_livetile_notification_expiry win8_livetile_notification_tag win8_livetile_notification_text_add win8_livetile_notification_image_add win8_livetile_notification_end win8_appbar_enable win8_appbar_add_element win8_appbar_remove_element win8_settingscharm_add_entry win8_settingscharm_add_html_entry win8_settingscharm_add_xaml_entry win8_settingscharm_set_xaml_property win8_settingscharm_get_xaml_property win8_settingscharm_remove_entry win8_share_image win8_share_screenshot win8_share_file win8_share_url win8_share_text win8_search_enable win8_search_disable win8_search_add_suggestions win8_device_touchscreen_available win8_license_initialize_sandbox win8_license_trial_version winphone_license_trial_version winphone_tile_title winphone_tile_count winphone_tile_back_title winphone_tile_back_content winphone_tile_back_content_wide winphone_tile_front_image winphone_tile_front_image_small winphone_tile_front_image_wide winphone_tile_back_image winphone_tile_back_image_wide winphone_tile_background_colour winphone_tile_background_color winphone_tile_icon_image winphone_tile_small_icon_image winphone_tile_wide_content winphone_tile_cycle_images winphone_tile_small_background_image physics_world_create physics_world_gravity physics_world_update_speed physics_world_update_iterations physics_world_draw_debug physics_pause_enable physics_fixture_create physics_fixture_set_kinematic physics_fixture_set_density physics_fixture_set_awake physics_fixture_set_restitution physics_fixture_set_friction physics_fixture_set_collision_group physics_fixture_set_sensor physics_fixture_set_linear_damping physics_fixture_set_angular_damping physics_fixture_set_circle_shape physics_fixture_set_box_shape physics_fixture_set_edge_shape physics_fixture_set_polygon_shape physics_fixture_set_chain_shape physics_fixture_add_point physics_fixture_bind physics_fixture_bind_ext physics_fixture_delete physics_apply_force physics_apply_impulse physics_apply_angular_impulse physics_apply_local_force physics_apply_local_impulse physics_apply_torque physics_mass_properties physics_draw_debug physics_test_overlap physics_remove_fixture physics_set_friction physics_set_density physics_set_restitution physics_get_friction physics_get_density physics_get_restitution physics_joint_distance_create physics_joint_rope_create physics_joint_revolute_create physics_joint_prismatic_create physics_joint_pulley_create physics_joint_wheel_create physics_joint_weld_create physics_joint_friction_create physics_joint_gear_create physics_joint_enable_motor physics_joint_get_value physics_joint_set_value physics_joint_delete physics_particle_create physics_particle_delete physics_particle_delete_region_circle physics_particle_delete_region_box physics_particle_delete_region_poly physics_particle_set_flags physics_particle_set_category_flags physics_particle_draw physics_particle_draw_ext physics_particle_count physics_particle_get_data physics_particle_get_data_particle physics_particle_group_begin physics_particle_group_circle physics_particle_group_box physics_particle_group_polygon physics_particle_group_add_point physics_particle_group_end physics_particle_group_join physics_particle_group_delete physics_particle_group_count physics_particle_group_get_data physics_particle_group_get_mass physics_particle_group_get_inertia physics_particle_group_get_centre_x physics_particle_group_get_centre_y physics_particle_group_get_vel_x physics_particle_group_get_vel_y physics_particle_group_get_ang_vel physics_particle_group_get_x physics_particle_group_get_y physics_particle_group_get_angle physics_particle_set_group_flags physics_particle_get_group_flags physics_particle_get_max_count physics_particle_get_radius physics_particle_get_density physics_particle_get_damping physics_particle_get_gravity_scale physics_particle_set_max_count physics_particle_set_radius physics_particle_set_density physics_particle_set_damping physics_particle_set_gravity_scale network_create_socket network_create_socket_ext network_create_server network_create_server_raw network_connect network_connect_raw network_send_packet network_send_raw network_send_broadcast network_send_udp network_send_udp_raw network_set_timeout network_set_config network_resolve network_destroy buffer_create buffer_write buffer_read buffer_seek buffer_get_surface buffer_set_surface buffer_delete buffer_exists buffer_get_type buffer_get_alignment buffer_poke buffer_peek buffer_save buffer_save_ext buffer_load buffer_load_ext buffer_load_partial buffer_copy buffer_fill buffer_get_size buffer_tell buffer_resize buffer_md5 buffer_sha1 buffer_base64_encode buffer_base64_decode buffer_base64_decode_ext buffer_sizeof buffer_get_address buffer_create_from_vertex_buffer buffer_create_from_vertex_buffer_ext buffer_copy_from_vertex_buffer buffer_async_group_begin buffer_async_group_option buffer_async_group_end buffer_load_async buffer_save_async gml_release_mode gml_pragma steam_activate_overlay steam_is_overlay_enabled steam_is_overlay_activated steam_get_persona_name steam_initialised steam_is_cloud_enabled_for_app steam_is_cloud_enabled_for_account steam_file_persisted steam_get_quota_total steam_get_quota_free steam_file_write steam_file_write_file steam_file_read steam_file_delete steam_file_exists steam_file_size steam_file_share steam_is_screenshot_requested steam_send_screenshot steam_is_user_logged_on steam_get_user_steam_id steam_user_owns_dlc steam_user_installed_dlc steam_set_achievement steam_get_achievement steam_clear_achievement steam_set_stat_int steam_set_stat_float steam_set_stat_avg_rate steam_get_stat_int steam_get_stat_float steam_get_stat_avg_rate steam_reset_all_stats steam_reset_all_stats_achievements steam_stats_ready steam_create_leaderboard steam_upload_score steam_upload_score_ext steam_download_scores_around_user steam_download_scores steam_download_friends_scores steam_upload_score_buffer steam_upload_score_buffer_ext steam_current_game_language steam_available_languages steam_activate_overlay_browser steam_activate_overlay_user steam_activate_overlay_store steam_get_user_persona_name steam_get_app_id steam_get_user_account_id steam_ugc_download steam_ugc_create_item steam_ugc_start_item_update steam_ugc_set_item_title steam_ugc_set_item_description steam_ugc_set_item_visibility steam_ugc_set_item_tags steam_ugc_set_item_content steam_ugc_set_item_preview steam_ugc_submit_item_update steam_ugc_get_item_update_progress steam_ugc_subscribe_item steam_ugc_unsubscribe_item steam_ugc_num_subscribed_items steam_ugc_get_subscribed_items steam_ugc_get_item_install_info steam_ugc_get_item_update_info steam_ugc_request_item_details steam_ugc_create_query_user steam_ugc_create_query_user_ex steam_ugc_create_query_all steam_ugc_create_query_all_ex steam_ugc_query_set_cloud_filename_filter steam_ugc_query_set_match_any_tag steam_ugc_query_set_search_text steam_ugc_query_set_ranked_by_trend_days steam_ugc_query_add_required_tag steam_ugc_query_add_excluded_tag steam_ugc_query_set_return_long_description steam_ugc_query_set_return_total_only steam_ugc_query_set_allow_cached_response steam_ugc_send_query shader_set shader_get_name shader_reset shader_current shader_is_compiled shader_get_sampler_index shader_get_uniform shader_set_uniform_i shader_set_uniform_i_array shader_set_uniform_f shader_set_uniform_f_array shader_set_uniform_matrix shader_set_uniform_matrix_array shader_enable_corner_id texture_set_stage texture_get_texel_width texture_get_texel_height shaders_are_supported vertex_format_begin vertex_format_end vertex_format_delete vertex_format_add_position vertex_format_add_position_3d vertex_format_add_colour vertex_format_add_color vertex_format_add_normal vertex_format_add_texcoord vertex_format_add_textcoord vertex_format_add_custom vertex_create_buffer vertex_create_buffer_ext vertex_delete_buffer vertex_begin vertex_end vertex_position vertex_position_3d vertex_colour vertex_color vertex_argb vertex_texcoord vertex_normal vertex_float1 vertex_float2 vertex_float3 vertex_float4 vertex_ubyte4 vertex_submit vertex_freeze vertex_get_number vertex_get_buffer_size vertex_create_buffer_from_buffer vertex_create_buffer_from_buffer_ext push_local_notification push_get_first_local_notification push_get_next_local_notification push_cancel_local_notification skeleton_animation_set skeleton_animation_get skeleton_animation_mix skeleton_animation_set_ext skeleton_animation_get_ext skeleton_animation_get_duration skeleton_animation_get_frames skeleton_animation_clear skeleton_skin_set skeleton_skin_get skeleton_attachment_set skeleton_attachment_get skeleton_attachment_create skeleton_collision_draw_set skeleton_bone_data_get skeleton_bone_data_set skeleton_bone_state_get skeleton_bone_state_set skeleton_get_minmax skeleton_get_num_bounds skeleton_get_bounds skeleton_animation_get_frame skeleton_animation_set_frame draw_skeleton draw_skeleton_time draw_skeleton_instance draw_skeleton_collision skeleton_animation_list skeleton_skin_list skeleton_slot_data layer_get_id layer_get_id_at_depth layer_get_depth layer_create layer_destroy layer_destroy_instances layer_add_instance layer_has_instance layer_set_visible layer_get_visible layer_exists layer_x layer_y layer_get_x layer_get_y layer_hspeed layer_vspeed layer_get_hspeed layer_get_vspeed layer_script_begin layer_script_end layer_shader layer_get_script_begin layer_get_script_end layer_get_shader layer_set_target_room layer_get_target_room layer_reset_target_room layer_get_all layer_get_all_elements layer_get_name layer_depth layer_get_element_layer layer_get_element_type layer_element_move layer_force_draw_depth layer_is_draw_depth_forced layer_get_forced_depth layer_background_get_id layer_background_exists layer_background_create layer_background_destroy layer_background_visible layer_background_change layer_background_sprite layer_background_htiled layer_background_vtiled layer_background_stretch layer_background_yscale layer_background_xscale layer_background_blend layer_background_alpha layer_background_index layer_background_speed layer_background_get_visible layer_background_get_sprite layer_background_get_htiled layer_background_get_vtiled layer_background_get_stretch layer_background_get_yscale layer_background_get_xscale layer_background_get_blend layer_background_get_alpha layer_background_get_index layer_background_get_speed layer_sprite_get_id layer_sprite_exists layer_sprite_create layer_sprite_destroy layer_sprite_change layer_sprite_index layer_sprite_speed layer_sprite_xscale layer_sprite_yscale layer_sprite_angle layer_sprite_blend layer_sprite_alpha layer_sprite_x layer_sprite_y layer_sprite_get_sprite layer_sprite_get_index layer_sprite_get_speed layer_sprite_get_xscale layer_sprite_get_yscale layer_sprite_get_angle layer_sprite_get_blend layer_sprite_get_alpha layer_sprite_get_x layer_sprite_get_y layer_tilemap_get_id layer_tilemap_exists layer_tilemap_create layer_tilemap_destroy tilemap_tileset tilemap_x tilemap_y tilemap_set tilemap_set_at_pixel tilemap_get_tileset tilemap_get_tile_width tilemap_get_tile_height tilemap_get_width tilemap_get_height tilemap_get_x tilemap_get_y tilemap_get tilemap_get_at_pixel tilemap_get_cell_x_at_pixel tilemap_get_cell_y_at_pixel tilemap_clear draw_tilemap draw_tile tilemap_set_global_mask tilemap_get_global_mask tilemap_set_mask tilemap_get_mask tilemap_get_frame tile_set_empty tile_set_index tile_set_flip tile_set_mirror tile_set_rotate tile_get_empty tile_get_index tile_get_flip tile_get_mirror tile_get_rotate layer_tile_exists layer_tile_create layer_tile_destroy layer_tile_change layer_tile_xscale layer_tile_yscale layer_tile_blend layer_tile_alpha layer_tile_x layer_tile_y layer_tile_region layer_tile_visible layer_tile_get_sprite layer_tile_get_xscale layer_tile_get_yscale layer_tile_get_blend layer_tile_get_alpha layer_tile_get_x layer_tile_get_y layer_tile_get_region layer_tile_get_visible layer_instance_get_instance instance_activate_layer instance_deactivate_layer camera_create camera_create_view camera_destroy camera_apply camera_get_active camera_get_default camera_set_default camera_set_view_mat camera_set_proj_mat camera_set_update_script camera_set_begin_script camera_set_end_script camera_set_view_pos camera_set_view_size camera_set_view_speed camera_set_view_border camera_set_view_angle camera_set_view_target camera_get_view_mat camera_get_proj_mat camera_get_update_script camera_get_begin_script camera_get_end_script camera_get_view_x camera_get_view_y camera_get_view_width camera_get_view_height camera_get_view_speed_x camera_get_view_speed_y camera_get_view_border_x camera_get_view_border_y camera_get_view_angle camera_get_view_target view_get_camera view_get_visible view_get_xport view_get_yport view_get_wport view_get_hport view_get_surface_id view_set_camera view_set_visible view_set_xport view_set_yport view_set_wport view_set_hport view_set_surface_id gesture_drag_time gesture_drag_distance gesture_flick_speed gesture_double_tap_time gesture_double_tap_distance gesture_pinch_distance gesture_pinch_angle_towards gesture_pinch_angle_away gesture_rotate_time gesture_rotate_angle gesture_tap_count gesture_get_drag_time gesture_get_drag_distance gesture_get_flick_speed gesture_get_double_tap_time gesture_get_double_tap_distance gesture_get_pinch_distance gesture_get_pinch_angle_towards gesture_get_pinch_angle_away gesture_get_rotate_time gesture_get_rotate_angle gesture_get_tap_count keyboard_virtual_show keyboard_virtual_hide keyboard_virtual_status keyboard_virtual_height",
      literal:
        "self other all noone global local undefined pointer_invalid pointer_null path_action_stop path_action_restart path_action_continue path_action_reverse true false pi GM_build_date GM_version GM_runtime_version  timezone_local timezone_utc gamespeed_fps gamespeed_microseconds  ev_create ev_destroy ev_step ev_alarm ev_keyboard ev_mouse ev_collision ev_other ev_draw ev_draw_begin ev_draw_end ev_draw_pre ev_draw_post ev_keypress ev_keyrelease ev_trigger ev_left_button ev_right_button ev_middle_button ev_no_button ev_left_press ev_right_press ev_middle_press ev_left_release ev_right_release ev_middle_release ev_mouse_enter ev_mouse_leave ev_mouse_wheel_up ev_mouse_wheel_down ev_global_left_button ev_global_right_button ev_global_middle_button ev_global_left_press ev_global_right_press ev_global_middle_press ev_global_left_release ev_global_right_release ev_global_middle_release ev_joystick1_left ev_joystick1_right ev_joystick1_up ev_joystick1_down ev_joystick1_button1 ev_joystick1_button2 ev_joystick1_button3 ev_joystick1_button4 ev_joystick1_button5 ev_joystick1_button6 ev_joystick1_button7 ev_joystick1_button8 ev_joystick2_left ev_joystick2_right ev_joystick2_up ev_joystick2_down ev_joystick2_button1 ev_joystick2_button2 ev_joystick2_button3 ev_joystick2_button4 ev_joystick2_button5 ev_joystick2_button6 ev_joystick2_button7 ev_joystick2_button8 ev_outside ev_boundary ev_game_start ev_game_end ev_room_start ev_room_end ev_no_more_lives ev_animation_end ev_end_of_path ev_no_more_health ev_close_button ev_user0 ev_user1 ev_user2 ev_user3 ev_user4 ev_user5 ev_user6 ev_user7 ev_user8 ev_user9 ev_user10 ev_user11 ev_user12 ev_user13 ev_user14 ev_user15 ev_step_normal ev_step_begin ev_step_end ev_gui ev_gui_begin ev_gui_end ev_cleanup ev_gesture ev_gesture_tap ev_gesture_double_tap ev_gesture_drag_start ev_gesture_dragging ev_gesture_drag_end ev_gesture_flick ev_gesture_pinch_start ev_gesture_pinch_in ev_gesture_pinch_out ev_gesture_pinch_end ev_gesture_rotate_start ev_gesture_rotating ev_gesture_rotate_end ev_global_gesture_tap ev_global_gesture_double_tap ev_global_gesture_drag_start ev_global_gesture_dragging ev_global_gesture_drag_end ev_global_gesture_flick ev_global_gesture_pinch_start ev_global_gesture_pinch_in ev_global_gesture_pinch_out ev_global_gesture_pinch_end ev_global_gesture_rotate_start ev_global_gesture_rotating ev_global_gesture_rotate_end vk_nokey vk_anykey vk_enter vk_return vk_shift vk_control vk_alt vk_escape vk_space vk_backspace vk_tab vk_pause vk_printscreen vk_left vk_right vk_up vk_down vk_home vk_end vk_delete vk_insert vk_pageup vk_pagedown vk_f1 vk_f2 vk_f3 vk_f4 vk_f5 vk_f6 vk_f7 vk_f8 vk_f9 vk_f10 vk_f11 vk_f12 vk_numpad0 vk_numpad1 vk_numpad2 vk_numpad3 vk_numpad4 vk_numpad5 vk_numpad6 vk_numpad7 vk_numpad8 vk_numpad9 vk_divide vk_multiply vk_subtract vk_add vk_decimal vk_lshift vk_lcontrol vk_lalt vk_rshift vk_rcontrol vk_ralt  mb_any mb_none mb_left mb_right mb_middle c_aqua c_black c_blue c_dkgray c_fuchsia c_gray c_green c_lime c_ltgray c_maroon c_navy c_olive c_purple c_red c_silver c_teal c_white c_yellow c_orange fa_left fa_center fa_right fa_top fa_middle fa_bottom pr_pointlist pr_linelist pr_linestrip pr_trianglelist pr_trianglestrip pr_trianglefan bm_complex bm_normal bm_add bm_max bm_subtract bm_zero bm_one bm_src_colour bm_inv_src_colour bm_src_color bm_inv_src_color bm_src_alpha bm_inv_src_alpha bm_dest_alpha bm_inv_dest_alpha bm_dest_colour bm_inv_dest_colour bm_dest_color bm_inv_dest_color bm_src_alpha_sat tf_point tf_linear tf_anisotropic mip_off mip_on mip_markedonly audio_falloff_none audio_falloff_inverse_distance audio_falloff_inverse_distance_clamped audio_falloff_linear_distance audio_falloff_linear_distance_clamped audio_falloff_exponent_distance audio_falloff_exponent_distance_clamped audio_old_system audio_new_system audio_mono audio_stereo audio_3d cr_default cr_none cr_arrow cr_cross cr_beam cr_size_nesw cr_size_ns cr_size_nwse cr_size_we cr_uparrow cr_hourglass cr_drag cr_appstart cr_handpoint cr_size_all spritespeed_framespersecond spritespeed_framespergameframe asset_object asset_unknown asset_sprite asset_sound asset_room asset_path asset_script asset_font asset_timeline asset_tiles asset_shader fa_readonly fa_hidden fa_sysfile fa_volumeid fa_directory fa_archive  ds_type_map ds_type_list ds_type_stack ds_type_queue ds_type_grid ds_type_priority ef_explosion ef_ring ef_ellipse ef_firework ef_smoke ef_smokeup ef_star ef_spark ef_flare ef_cloud ef_rain ef_snow pt_shape_pixel pt_shape_disk pt_shape_square pt_shape_line pt_shape_star pt_shape_circle pt_shape_ring pt_shape_sphere pt_shape_flare pt_shape_spark pt_shape_explosion pt_shape_cloud pt_shape_smoke pt_shape_snow ps_distr_linear ps_distr_gaussian ps_distr_invgaussian ps_shape_rectangle ps_shape_ellipse ps_shape_diamond ps_shape_line ty_real ty_string dll_cdecl dll_stdcall matrix_view matrix_projection matrix_world os_win32 os_windows os_macosx os_ios os_android os_symbian os_linux os_unknown os_winphone os_tizen os_win8native os_wiiu os_3ds  os_psvita os_bb10 os_ps4 os_xboxone os_ps3 os_xbox360 os_uwp os_tvos os_switch browser_not_a_browser browser_unknown browser_ie browser_firefox browser_chrome browser_safari browser_safari_mobile browser_opera browser_tizen browser_edge browser_windows_store browser_ie_mobile  device_ios_unknown device_ios_iphone device_ios_iphone_retina device_ios_ipad device_ios_ipad_retina device_ios_iphone5 device_ios_iphone6 device_ios_iphone6plus device_emulator device_tablet display_landscape display_landscape_flipped display_portrait display_portrait_flipped tm_sleep tm_countvsyncs of_challenge_win of_challen ge_lose of_challenge_tie leaderboard_type_number leaderboard_type_time_mins_secs cmpfunc_never cmpfunc_less cmpfunc_equal cmpfunc_lessequal cmpfunc_greater cmpfunc_notequal cmpfunc_greaterequal cmpfunc_always cull_noculling cull_clockwise cull_counterclockwise lighttype_dir lighttype_point iap_ev_storeload iap_ev_product iap_ev_purchase iap_ev_consume iap_ev_restore iap_storeload_ok iap_storeload_failed iap_status_uninitialised iap_status_unavailable iap_status_loading iap_status_available iap_status_processing iap_status_restoring iap_failed iap_unavailable iap_available iap_purchased iap_canceled iap_refunded fb_login_default fb_login_fallback_to_webview fb_login_no_fallback_to_webview fb_login_forcing_webview fb_login_use_system_account fb_login_forcing_safari  phy_joint_anchor_1_x phy_joint_anchor_1_y phy_joint_anchor_2_x phy_joint_anchor_2_y phy_joint_reaction_force_x phy_joint_reaction_force_y phy_joint_reaction_torque phy_joint_motor_speed phy_joint_angle phy_joint_motor_torque phy_joint_max_motor_torque phy_joint_translation phy_joint_speed phy_joint_motor_force phy_joint_max_motor_force phy_joint_length_1 phy_joint_length_2 phy_joint_damping_ratio phy_joint_frequency phy_joint_lower_angle_limit phy_joint_upper_angle_limit phy_joint_angle_limits phy_joint_max_length phy_joint_max_torque phy_joint_max_force phy_debug_render_aabb phy_debug_render_collision_pairs phy_debug_render_coms phy_debug_render_core_shapes phy_debug_render_joints phy_debug_render_obb phy_debug_render_shapes  phy_particle_flag_water phy_particle_flag_zombie phy_particle_flag_wall phy_particle_flag_spring phy_particle_flag_elastic phy_particle_flag_viscous phy_particle_flag_powder phy_particle_flag_tensile phy_particle_flag_colourmixing phy_particle_flag_colormixing phy_particle_group_flag_solid phy_particle_group_flag_rigid phy_particle_data_flag_typeflags phy_particle_data_flag_position phy_particle_data_flag_velocity phy_particle_data_flag_colour phy_particle_data_flag_color phy_particle_data_flag_category  achievement_our_info achievement_friends_info achievement_leaderboard_info achievement_achievement_info achievement_filter_all_players achievement_filter_friends_only achievement_filter_favorites_only achievement_type_achievement_challenge achievement_type_score_challenge achievement_pic_loaded  achievement_show_ui achievement_show_profile achievement_show_leaderboard achievement_show_achievement achievement_show_bank achievement_show_friend_picker achievement_show_purchase_prompt network_socket_tcp network_socket_udp network_socket_bluetooth network_type_connect network_type_disconnect network_type_data network_type_non_blocking_connect network_config_connect_timeout network_config_use_non_blocking_socket network_config_enable_reliable_udp network_config_disable_reliable_udp buffer_fixed buffer_grow buffer_wrap buffer_fast buffer_vbuffer buffer_network buffer_u8 buffer_s8 buffer_u16 buffer_s16 buffer_u32 buffer_s32 buffer_u64 buffer_f16 buffer_f32 buffer_f64 buffer_bool buffer_text buffer_string buffer_surface_copy buffer_seek_start buffer_seek_relative buffer_seek_end buffer_generalerror buffer_outofspace buffer_outofbounds buffer_invalidtype  text_type button_type input_type ANSI_CHARSET DEFAULT_CHARSET EASTEUROPE_CHARSET RUSSIAN_CHARSET SYMBOL_CHARSET SHIFTJIS_CHARSET HANGEUL_CHARSET GB2312_CHARSET CHINESEBIG5_CHARSET JOHAB_CHARSET HEBREW_CHARSET ARABIC_CHARSET GREEK_CHARSET TURKISH_CHARSET VIETNAMESE_CHARSET THAI_CHARSET MAC_CHARSET BALTIC_CHARSET OEM_CHARSET  gp_face1 gp_face2 gp_face3 gp_face4 gp_shoulderl gp_shoulderr gp_shoulderlb gp_shoulderrb gp_select gp_start gp_stickl gp_stickr gp_padu gp_padd gp_padl gp_padr gp_axislh gp_axislv gp_axisrh gp_axisrv ov_friends ov_community ov_players ov_settings ov_gamegroup ov_achievements lb_sort_none lb_sort_ascending lb_sort_descending lb_disp_none lb_disp_numeric lb_disp_time_sec lb_disp_time_ms ugc_result_success ugc_filetype_community ugc_filetype_microtrans ugc_visibility_public ugc_visibility_friends_only ugc_visibility_private ugc_query_RankedByVote ugc_query_RankedByPublicationDate ugc_query_AcceptedForGameRankedByAcceptanceDate ugc_query_RankedByTrend ugc_query_FavoritedByFriendsRankedByPublicationDate ugc_query_CreatedByFriendsRankedByPublicationDate ugc_query_RankedByNumTimesReported ugc_query_CreatedByFollowedUsersRankedByPublicationDate ugc_query_NotYetRated ugc_query_RankedByTotalVotesAsc ugc_query_RankedByVotesUp ugc_query_RankedByTextSearch ugc_sortorder_CreationOrderDesc ugc_sortorder_CreationOrderAsc ugc_sortorder_TitleAsc ugc_sortorder_LastUpdatedDesc ugc_sortorder_SubscriptionDateDesc ugc_sortorder_VoteScoreDesc ugc_sortorder_ForModeration ugc_list_Published ugc_list_VotedOn ugc_list_VotedUp ugc_list_VotedDown ugc_list_WillVoteLater ugc_list_Favorited ugc_list_Subscribed ugc_list_UsedOrPlayed ugc_list_Followed ugc_match_Items ugc_match_Items_Mtx ugc_match_Items_ReadyToUse ugc_match_Collections ugc_match_Artwork ugc_match_Videos ugc_match_Screenshots ugc_match_AllGuides ugc_match_WebGuides ugc_match_IntegratedGuides ugc_match_UsableInGame ugc_match_ControllerBindings  vertex_usage_position vertex_usage_colour vertex_usage_color vertex_usage_normal vertex_usage_texcoord vertex_usage_textcoord vertex_usage_blendweight vertex_usage_blendindices vertex_usage_psize vertex_usage_tangent vertex_usage_binormal vertex_usage_fog vertex_usage_depth vertex_usage_sample vertex_type_float1 vertex_type_float2 vertex_type_float3 vertex_type_float4 vertex_type_colour vertex_type_color vertex_type_ubyte4 layerelementtype_undefined layerelementtype_background layerelementtype_instance layerelementtype_oldtilemap layerelementtype_sprite layerelementtype_tilemap layerelementtype_particlesystem layerelementtype_tile tile_rotate tile_flip tile_mirror tile_index_mask kbv_type_default kbv_type_ascii kbv_type_url kbv_type_email kbv_type_numbers kbv_type_phone kbv_type_phone_name kbv_returnkey_default kbv_returnkey_go kbv_returnkey_google kbv_returnkey_join kbv_returnkey_next kbv_returnkey_route kbv_returnkey_search kbv_returnkey_send kbv_returnkey_yahoo kbv_returnkey_done kbv_returnkey_continue kbv_returnkey_emergency kbv_autocapitalize_none kbv_autocapitalize_words kbv_autocapitalize_sentences kbv_autocapitalize_characters",
      symbol:
        "argument_relative argument argument0 argument1 argument2 argument3 argument4 argument5 argument6 argument7 argument8 argument9 argument10 argument11 argument12 argument13 argument14 argument15 argument_count x y xprevious yprevious xstart ystart hspeed vspeed direction speed friction gravity gravity_direction path_index path_position path_positionprevious path_speed path_scale path_orientation path_endaction object_index id solid persistent mask_index instance_count instance_id room_speed fps fps_real current_time current_year current_month current_day current_weekday current_hour current_minute current_second alarm timeline_index timeline_position timeline_speed timeline_running timeline_loop room room_first room_last room_width room_height room_caption room_persistent score lives health show_score show_lives show_health caption_score caption_lives caption_health event_type event_number event_object event_action application_surface gamemaker_pro gamemaker_registered gamemaker_version error_occurred error_last debug_mode keyboard_key keyboard_lastkey keyboard_lastchar keyboard_string mouse_x mouse_y mouse_button mouse_lastbutton cursor_sprite visible sprite_index sprite_width sprite_height sprite_xoffset sprite_yoffset image_number image_index image_speed depth image_xscale image_yscale image_angle image_alpha image_blend bbox_left bbox_right bbox_top bbox_bottom layer background_colour  background_showcolour background_color background_showcolor view_enabled view_current view_visible view_xview view_yview view_wview view_hview view_xport view_yport view_wport view_hport view_angle view_hborder view_vborder view_hspeed view_vspeed view_object view_surface_id view_camera game_id game_display_name game_project_name game_save_id working_directory temp_directory program_directory browser_width browser_height os_type os_device os_browser os_version display_aa async_load delta_time webgl_enabled event_data iap_data phy_rotation phy_position_x phy_position_y phy_angular_velocity phy_linear_velocity_x phy_linear_velocity_y phy_speed_x phy_speed_y phy_speed phy_angular_damping phy_linear_damping phy_bullet phy_fixed_rotation phy_active phy_mass phy_inertia phy_com_x phy_com_y phy_dynamic phy_kinematic phy_sleeping phy_collision_points phy_collision_x phy_collision_y phy_col_normal_x phy_col_normal_y phy_position_xprevious phy_position_yprevious",
    },
    c: [e.CLCM, e.CBCM, e.ASM, e.QSM, e.CNM],
  };
});
hljs.registerLanguage("pgsql", function (E) {
  var T = E.C("--", "$"),
    N =
      "BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 ",
    A = N.trim()
      .split(" ")
      .map(function (E) {
        return E.split("|")[0];
      })
      .join("|"),
    R =
      "ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAPLEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILYINET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST "
        .trim()
        .split(" ")
        .map(function (E) {
          return E.split("|")[0];
        })
        .join("|");
  return {
    aliases: ["postgres", "postgresql"],
    cI: !0,
    k: {
      keyword:
        "ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS ",
      built_in:
        "CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED ",
    },
    i: /:==|\W\s*\(\*|(^|\s)\$[a-z]|{{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
    c: [
      {
        cN: "keyword",
        v: [
          { b: /\bTEXT\s*SEARCH\b/ },
          { b: /\b(PRIMARY|FOREIGN|FOR(\s+NO)?)\s+KEY\b/ },
          { b: /\bPARALLEL\s+(UNSAFE|RESTRICTED|SAFE)\b/ },
          { b: /\bSTORAGE\s+(PLAIN|EXTERNAL|EXTENDED|MAIN)\b/ },
          { b: /\bMATCH\s+(FULL|PARTIAL|SIMPLE)\b/ },
          { b: /\bNULLS\s+(FIRST|LAST)\b/ },
          { b: /\bEVENT\s+TRIGGER\b/ },
          { b: /\b(MAPPING|OR)\s+REPLACE\b/ },
          { b: /\b(FROM|TO)\s+(PROGRAM|STDIN|STDOUT)\b/ },
          { b: /\b(SHARE|EXCLUSIVE)\s+MODE\b/ },
          { b: /\b(LEFT|RIGHT)\s+(OUTER\s+)?JOIN\b/ },
          {
            b: /\b(FETCH|MOVE)\s+(NEXT|PRIOR|FIRST|LAST|ABSOLUTE|RELATIVE|FORWARD|BACKWARD)\b/,
          },
          { b: /\bPRESERVE\s+ROWS\b/ },
          { b: /\bDISCARD\s+PLANS\b/ },
          { b: /\bREFERENCING\s+(OLD|NEW)\b/ },
          { b: /\bSKIP\s+LOCKED\b/ },
          { b: /\bGROUPING\s+SETS\b/ },
          { b: /\b(BINARY|INSENSITIVE|SCROLL|NO\s+SCROLL)\s+(CURSOR|FOR)\b/ },
          { b: /\b(WITH|WITHOUT)\s+HOLD\b/ },
          { b: /\bWITH\s+(CASCADED|LOCAL)\s+CHECK\s+OPTION\b/ },
          { b: /\bEXCLUDE\s+(TIES|NO\s+OTHERS)\b/ },
          { b: /\bFORMAT\s+(TEXT|XML|JSON|YAML)\b/ },
          { b: /\bSET\s+((SESSION|LOCAL)\s+)?NAMES\b/ },
          { b: /\bIS\s+(NOT\s+)?UNKNOWN\b/ },
          { b: /\bSECURITY\s+LABEL\b/ },
          { b: /\bSTANDALONE\s+(YES|NO|NO\s+VALUE)\b/ },
          { b: /\bWITH\s+(NO\s+)?DATA\b/ },
          { b: /\b(FOREIGN|SET)\s+DATA\b/ },
          { b: /\bSET\s+(CATALOG|CONSTRAINTS)\b/ },
          { b: /\b(WITH|FOR)\s+ORDINALITY\b/ },
          { b: /\bIS\s+(NOT\s+)?DOCUMENT\b/ },
          { b: /\bXML\s+OPTION\s+(DOCUMENT|CONTENT)\b/ },
          { b: /\b(STRIP|PRESERVE)\s+WHITESPACE\b/ },
          { b: /\bNO\s+(ACTION|MAXVALUE|MINVALUE)\b/ },
          { b: /\bPARTITION\s+BY\s+(RANGE|LIST|HASH)\b/ },
          { b: /\bAT\s+TIME\s+ZONE\b/ },
          { b: /\bGRANTED\s+BY\b/ },
          { b: /\bRETURN\s+(QUERY|NEXT)\b/ },
          { b: /\b(ATTACH|DETACH)\s+PARTITION\b/ },
          { b: /\bFORCE\s+ROW\s+LEVEL\s+SECURITY\b/ },
          {
            b: /\b(INCLUDING|EXCLUDING)\s+(COMMENTS|CONSTRAINTS|DEFAULTS|IDENTITY|INDEXES|STATISTICS|STORAGE|ALL)\b/,
          },
          {
            b: /\bAS\s+(ASSIGNMENT|IMPLICIT|PERMISSIVE|RESTRICTIVE|ENUM|RANGE)\b/,
          },
        ],
      },
      { b: /\b(FORMAT|FAMILY|VERSION)\s*\(/ },
      { b: /\bINCLUDE\s*\(/, k: "INCLUDE" },
      { b: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/ },
      {
        b: /\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/,
      },
      { b: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/, relevance: 10 },
      {
        b: /\bEXTRACT\s*\(/,
        e: /\bFROM\b/,
        rE: !0,
        k: {
          type: "CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR",
        },
      },
      { b: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/, k: { keyword: "NAME" } },
      {
        b: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/,
        k: { keyword: "DOCUMENT CONTENT" },
      },
      {
        bK: "CACHE INCREMENT MAXVALUE MINVALUE",
        e: E.CNR,
        rE: !0,
        k: "BY CACHE INCREMENT MAXVALUE MINVALUE",
      },
      { cN: "type", b: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/ },
      {
        cN: "type",
        b: /\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/,
      },
      {
        b: /\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/,
        k: {
          keyword: "RETURNS",
          type: "LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER",
        },
      },
      { b: "\\b(" + R + ")\\s*\\(" },
      { b: "\\.(" + A + ")\\b" },
      {
        b: "\\b(" + A + ")\\s+PATH\\b",
        k: { keyword: "PATH", type: N.replace("PATH ", "") },
      },
      { cN: "type", b: "\\b(" + A + ")\\b" },
      { cN: "string", b: "'", e: "'", c: [{ b: "''" }] },
      {
        cN: "string",
        b: "(e|E|u&|U&)'",
        e: "'",
        c: [{ b: "\\\\." }],
        relevance: 10,
      },
      {
        b: "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$",
        endSameAsBegin: !0,
        c: [
          {
            sL: [
              "pgsql",
              "perl",
              "python",
              "tcl",
              "r",
              "lua",
              "java",
              "php",
              "ruby",
              "bash",
              "scheme",
              "xml",
              "json",
            ],
            eW: !0,
          },
        ],
      },
      { b: '"', e: '"', c: [{ b: '""' }] },
      E.CNM,
      E.CBCM,
      T,
      {
        cN: "meta",
        v: [
          { b: "%(ROW)?TYPE", relevance: 10 },
          { b: "\\$\\d+" },
          { b: "^#\\w", e: "$" },
        ],
      },
      { cN: "symbol", b: "<<\\s*[a-zA-Z_][a-zA-Z_0-9$]*\\s*>>", relevance: 10 },
    ],
  };
});
hljs.registerLanguage("ada", function (e) {
  var r = "[A-Za-z](_?[A-Za-z0-9.])*",
    t = "[]{}%#'\"",
    n = e.C("--", "$"),
    a = {
      b: "\\s+:\\s+",
      e: "\\s*(:=|;|\\)|=>|$)",
      i: t,
      c: [
        { bK: "loop for declare others", endsParent: !0 },
        {
          cN: "keyword",
          bK: "not null constant access function procedure in out aliased exception",
        },
        { cN: "type", b: r, endsParent: !0, relevance: 0 },
      ],
    };
  return {
    cI: !0,
    k: {
      keyword:
        "abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",
      literal: "True False",
    },
    c: [
      n,
      { cN: "string", b: /"/, e: /"/, c: [{ b: /""/, relevance: 0 }] },
      { cN: "string", b: /'.'/ },
      {
        cN: "number",
        b: "\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",
        relevance: 0,
      },
      { cN: "symbol", b: "'" + r },
      {
        cN: "title",
        b: "(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
        e: "(is|$)",
        k: "package body",
        eB: !0,
        eE: !0,
        i: t,
      },
      {
        b: "(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
        e: "(\\bis|\\bwith|\\brenames|\\)\\s*;)",
        k: "overriding function procedure with is renames return",
        rB: !0,
        c: [
          n,
          {
            cN: "title",
            b: "(\\bwith\\s+)?\\b(function|procedure)\\s+",
            e: "(\\(|\\s+|$)",
            eB: !0,
            eE: !0,
            i: t,
          },
          a,
          {
            cN: "type",
            b: "\\breturn\\s+",
            e: "(\\s+|;|$)",
            k: "return",
            eB: !0,
            eE: !0,
            endsParent: !0,
            i: t,
          },
        ],
      },
      {
        cN: "type",
        b: "\\b(sub)?type\\s+",
        e: "\\s+",
        k: "type",
        eB: !0,
        i: t,
      },
      a,
    ],
  };
});
hljs.registerLanguage("vbnet", function (e) {
  return {
    aliases: ["vb"],
    cI: !0,
    k: {
      keyword:
        "addhandler addressof alias and andalso aggregate ansi as async assembly auto await binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue iterator join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass nameof namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor yield",
      built_in:
        "boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort",
      literal: "true false nothing",
    },
    i: "//|{|}|endif|gosub|variant|wend|^\\$ ",
    c: [
      e.inherit(e.QSM, { c: [{ b: '""' }] }),
      e.C("'", "$", {
        rB: !0,
        c: [
          { cN: "doctag", b: "'''|\x3c!--|--\x3e", c: [e.PWM] },
          { cN: "doctag", b: "</?", e: ">", c: [e.PWM] },
        ],
      }),
      e.CNM,
      {
        cN: "meta",
        b: "#",
        e: "$",
        k: { "meta-keyword": "if else elseif end region externalsource" },
      },
    ],
  };
});
hljs.registerLanguage("json", function (e) {
  var i = { literal: "true false null" },
    n = [e.CLCM, e.CBCM],
    c = [e.QSM, e.CNM],
    r = { e: ",", eW: !0, eE: !0, c: c, k: i },
    t = {
      b: "{",
      e: "}",
      c: [
        { cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n" },
        e.inherit(r, { b: /:/ }),
      ].concat(n),
      i: "\\S",
    },
    a = { b: "\\[", e: "\\]", c: [e.inherit(r)], i: "\\S" };
  return (
    c.push(t, a),
    n.forEach(function (e) {
      c.push(e);
    }),
    { c: c, k: i, i: "\\S" }
  );
});
hljs.registerLanguage("abnf", function (b) {
  var A = "^[a-zA-Z][a-zA-Z0-9-]*",
    s = "[!@#$^&',?+~`|:]",
    a = b.C(";", "$"),
    c = { cN: "attribute", b: A + "(?=\\s*=)" };
  return {
    i: s,
    k: [
      "ALPHA",
      "BIT",
      "CHAR",
      "CR",
      "CRLF",
      "CTL",
      "DIGIT",
      "DQUOTE",
      "HEXDIG",
      "HTAB",
      "LF",
      "LWSP",
      "OCTET",
      "SP",
      "VCHAR",
      "WSP",
    ].join(" "),
    c: [
      c,
      a,
      { cN: "symbol", b: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/ },
      { cN: "symbol", b: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/ },
      { cN: "symbol", b: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/ },
      { cN: "symbol", b: /%[si]/ },
      b.QSM,
      b.NM,
    ],
  };
});
hljs.registerLanguage("cmake", function (e) {
  return {
    aliases: ["cmake.in"],
    cI: !0,
    k: {
      keyword:
        "break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined",
    },
    c: [{ cN: "variable", b: "\\${", e: "}" }, e.HCM, e.QSM, e.NM],
  };
});
hljs.registerLanguage("ldif", function (e) {
  return {
    c: [
      {
        cN: "attribute",
        b: "^dn",
        e: ": ",
        eE: !0,
        starts: { e: "$", relevance: 0 },
        relevance: 10,
      },
      {
        cN: "attribute",
        b: "^\\w",
        e: ": ",
        eE: !0,
        starts: { e: "$", relevance: 0 },
      },
      { cN: "literal", b: "^-", e: "$" },
      e.HCM,
    ],
  };
});
hljs.registerLanguage("dts", function (e) {
  var a = {
      cN: "string",
      v: [
        e.inherit(e.QSM, { b: '((u8?|U)|L)?"' }),
        { b: '(u8?|U)?R"', e: '"', c: [e.BE] },
        { b: "'\\\\?.", e: "'", i: "." },
      ],
    },
    c = {
      cN: "number",
      v: [
        { b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)" },
        { b: e.CNR },
      ],
      relevance: 0,
    },
    b = {
      cN: "meta",
      b: "#",
      e: "$",
      k: { "meta-keyword": "if else elif endif define undef ifdef ifndef" },
      c: [
        { b: /\\\n/, relevance: 0 },
        {
          bK: "include",
          e: "$",
          k: { "meta-keyword": "include" },
          c: [
            e.inherit(a, { cN: "meta-string" }),
            { cN: "meta-string", b: "<", e: ">", i: "\\n" },
          ],
        },
        a,
        e.CLCM,
        e.CBCM,
      ],
    },
    n = { cN: "variable", b: "\\&[a-z\\d_]*\\b" },
    i = { cN: "meta-keyword", b: "/[a-z][a-z\\d-]*/" },
    r = { cN: "symbol", b: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:" },
    d = { cN: "params", b: "<", e: ">", c: [c, n] },
    s = {
      cN: "class",
      b: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
      e: /[{;=]/,
      rB: !0,
      eE: !0,
    };
  return {
    k: "",
    c: [
      {
        cN: "class",
        b: "/\\s*{",
        e: "};",
        relevance: 10,
        c: [n, i, r, s, d, e.CLCM, e.CBCM, c, a],
      },
      n,
      i,
      r,
      s,
      d,
      e.CLCM,
      e.CBCM,
      c,
      a,
      b,
      { b: e.IR + "::", k: "" },
    ],
  };
});
hljs.registerLanguage("groovy", function (e) {
  return {
    k: {
      literal: "true false null",
      keyword:
        "byte short char int long boolean float double void def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof",
    },
    c: [
      e.C("/\\*\\*", "\\*/", {
        relevance: 0,
        c: [
          { b: /\w+@/, relevance: 0 },
          { cN: "doctag", b: "@[A-Za-z]+" },
        ],
      }),
      e.CLCM,
      e.CBCM,
      { cN: "string", b: '"""', e: '"""' },
      { cN: "string", b: "'''", e: "'''" },
      { cN: "string", b: "\\$/", e: "/\\$", relevance: 10 },
      e.ASM,
      { cN: "regexp", b: /~?\/[^\/\n]+\//, c: [e.BE] },
      e.QSM,
      { cN: "meta", b: "^#!/usr/bin/env", e: "$", i: "\n" },
      e.BNM,
      {
        cN: "class",
        bK: "class interface trait enum",
        e: "{",
        i: ":",
        c: [{ bK: "extends implements" }, e.UTM],
      },
      e.CNM,
      { cN: "meta", b: "@[A-Za-z]+" },
      { cN: "string", b: /[^\?]{0}[A-Za-z0-9_$]+ *:/ },
      { b: /\?/, e: /\:/ },
      { cN: "symbol", b: "^\\s*[A-Za-z0-9_$]+:", relevance: 0 },
    ],
    i: /#|<\//,
  };
});
hljs.registerLanguage("excel", function (E) {
  return {
    aliases: ["xlsx", "xls"],
    cI: !0,
    l: /[a-zA-Z][\w\.]*/,
    k: {
      built_in:
        "ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST",
    },
    c: [
      { b: /^=/, e: /[^=]/, rE: !0, i: /=/, relevance: 10 },
      {
        cN: "symbol",
        b: /\b[A-Z]{1,2}\d+\b/,
        e: /[^\d]/,
        eE: !0,
        relevance: 0,
      },
      { cN: "symbol", b: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/, relevance: 0 },
      E.BE,
      E.QSM,
      { cN: "number", b: E.NR + "(%)?", relevance: 0 },
      E.C(/\bN\(/, /\)/, { eB: !0, eE: !0, i: /\n/ }),
    ],
  };
});
hljs.registerLanguage("matlab", function (e) {
  var a = "('|\\.')+",
    s = { relevance: 0, c: [{ b: a }] };
  return {
    k: {
      keyword:
        "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
      built_in:
        "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell ",
    },
    i: '(//|"|#|/\\*|\\s+/\\w+)',
    c: [
      {
        cN: "function",
        bK: "function",
        e: "$",
        c: [
          e.UTM,
          {
            cN: "params",
            v: [
              { b: "\\(", e: "\\)" },
              { b: "\\[", e: "\\]" },
            ],
          },
        ],
      },
      { cN: "built_in", b: /true|false/, relevance: 0, starts: s },
      { b: "[a-zA-Z][a-zA-Z_0-9]*" + a, relevance: 0 },
      { cN: "number", b: e.CNR, relevance: 0, starts: s },
      { cN: "string", b: "'", e: "'", c: [e.BE, { b: "''" }] },
      { b: /\]|}|\)/, relevance: 0, starts: s },
      { cN: "string", b: '"', e: '"', c: [e.BE, { b: '""' }], starts: s },
      e.C("^\\s*\\%\\{\\s*$", "^\\s*\\%\\}\\s*$"),
      e.C("\\%", "$"),
    ],
  };
});
hljs.registerLanguage("puppet", function (e) {
  var s = e.C("#", "$"),
    r = "([A-Za-z_]|::)(\\w|::)*",
    a = e.inherit(e.TM, { b: r }),
    i = { cN: "variable", b: "\\$" + r },
    n = {
      cN: "string",
      c: [e.BE, i],
      v: [
        { b: /'/, e: /'/ },
        { b: /"/, e: /"/ },
      ],
    };
  return {
    aliases: ["pp"],
    c: [
      s,
      i,
      n,
      { bK: "class", e: "\\{|;", i: /=/, c: [a, s] },
      {
        bK: "define",
        e: /\{/,
        c: [{ cN: "section", b: e.IR, endsParent: !0 }],
      },
      {
        b: e.IR + "\\s+\\{",
        rB: !0,
        e: /\S/,
        c: [
          { cN: "keyword", b: e.IR },
          {
            b: /\{/,
            e: /\}/,
            k: {
              keyword:
                "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
              literal:
                "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
              built_in:
                "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version",
            },
            relevance: 0,
            c: [
              n,
              s,
              {
                b: "[a-zA-Z_]+\\s*=>",
                rB: !0,
                e: "=>",
                c: [{ cN: "attr", b: e.IR }],
              },
              {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                relevance: 0,
              },
              i,
            ],
          },
        ],
        relevance: 0,
      },
    ],
  };
});
hljs.registerLanguage("htmlbars", function (e) {
  var a =
      "action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view",
    t =
      (e.QSM,
      {
        eW: !0,
        relevance: 0,
        k: { keyword: "as", built_in: a },
        c: [
          e.QSM,
          {
            i: /\}\}/,
            b: /[a-zA-Z0-9_]+=/,
            rB: !0,
            relevance: 0,
            c: [{ cN: "attr", b: /[a-zA-Z0-9_]+/ }],
          },
          e.NM,
        ],
      });
  return {
    cI: !0,
    sL: "xml",
    c: [
      e.C("{{!(--)?", "(--)?}}"),
      {
        cN: "template-tag",
        b: /\{\{[#\/]/,
        e: /\}\}/,
        c: [
          {
            cN: "name",
            b: /[a-zA-Z\.\-]+/,
            k: { "builtin-name": a },
            starts: t,
          },
        ],
      },
      {
        cN: "template-variable",
        b: /\{\{[a-zA-Z][a-zA-Z\-]+/,
        e: /\}\}/,
        k: { keyword: "as", built_in: a },
        c: [e.QSM],
      },
    ],
  };
});
hljs.registerLanguage("golo", function (e) {
  return {
    k: {
      keyword:
        "println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array",
      literal: "true false null",
    },
    c: [e.HCM, e.QSM, e.CNM, { cN: "meta", b: "@[A-Za-z]+" }],
  };
});
hljs.registerLanguage("capnproto", function (t) {
  return {
    aliases: ["capnp"],
    k: {
      keyword:
        "struct enum interface union group import using const annotation extends in of on as with from fixed",
      built_in:
        "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
      literal: "true false",
    },
    c: [
      t.QSM,
      t.NM,
      t.HCM,
      { cN: "meta", b: /@0x[\w\d]{16};/, i: /\n/ },
      { cN: "symbol", b: /@\d+\b/ },
      {
        cN: "class",
        bK: "struct enum",
        e: /\{/,
        i: /\n/,
        c: [t.inherit(t.TM, { starts: { eW: !0, eE: !0 } })],
      },
      {
        cN: "class",
        bK: "interface",
        e: /\{/,
        i: /\n/,
        c: [t.inherit(t.TM, { starts: { eW: !0, eE: !0 } })],
      },
    ],
  };
});
hljs.registerLanguage("tp", function (O) {
  var R = { cN: "number", b: "[1-9][0-9]*", relevance: 0 },
    E = { cN: "symbol", b: ":[^\\]]+" };
  return {
    k: {
      keyword:
        "ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",
      literal: "ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET",
    },
    c: [
      {
        cN: "built_in",
        b: "(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",
        e: "\\]",
        c: ["self", R, E],
      },
      {
        cN: "built_in",
        b: "(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",
        e: "\\]",
        c: ["self", R, O.QSM, E],
      },
      { cN: "keyword", b: "/(PROG|ATTR|MN|POS|END)\\b" },
      { cN: "keyword", b: "(CALL|RUN|POINT_LOGIC|LBL)\\b" },
      {
        cN: "keyword",
        b: "\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)",
      },
      {
        cN: "number",
        b: "\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",
        relevance: 0,
      },
      O.C("//", "[;$]"),
      O.C("!", "[;$]"),
      O.C("--eg:", "$"),
      O.QSM,
      { cN: "string", b: "'", e: "'" },
      O.CNM,
      { cN: "variable", b: "\\$[A-Za-z0-9_]+" },
    ],
  };
});
hljs.registerLanguage("aspectj", function (e) {
  var t =
      "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance",
    i = "get set args call";
  return {
    k: t,
    i: /<\/|#/,
    c: [
      e.C("/\\*\\*", "\\*/", {
        relevance: 0,
        c: [
          { b: /\w+@/, relevance: 0 },
          { cN: "doctag", b: "@[A-Za-z]+" },
        ],
      }),
      e.CLCM,
      e.CBCM,
      e.ASM,
      e.QSM,
      {
        cN: "class",
        bK: "aspect",
        e: /[{;=]/,
        eE: !0,
        i: /[:;"\[\]]/,
        c: [
          {
            bK: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton",
          },
          e.UTM,
          { b: /\([^\)]*/, e: /[)]+/, k: t + " " + i, eE: !1 },
        ],
      },
      {
        cN: "class",
        bK: "class interface",
        e: /[{;=]/,
        eE: !0,
        relevance: 0,
        k: "class interface",
        i: /[:"\[\]]/,
        c: [{ bK: "extends implements" }, e.UTM],
      },
      {
        bK: "pointcut after before around throwing returning",
        e: /[)]/,
        eE: !1,
        i: /["\[\]]/,
        c: [{ b: e.UIR + "\\s*\\(", rB: !0, c: [e.UTM] }],
      },
      {
        b: /[:]/,
        rB: !0,
        e: /[{;]/,
        relevance: 0,
        eE: !1,
        k: t,
        i: /["\[\]]/,
        c: [{ b: e.UIR + "\\s*\\(", k: t + " " + i, relevance: 0 }, e.QSM],
      },
      { bK: "new throw", relevance: 0 },
      {
        cN: "function",
        b: /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
        rB: !0,
        e: /[{;=]/,
        k: t,
        eE: !0,
        c: [
          { b: e.UIR + "\\s*\\(", rB: !0, relevance: 0, c: [e.UTM] },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            relevance: 0,
            k: t,
            c: [e.ASM, e.QSM, e.CNM, e.CBCM],
          },
          e.CLCM,
          e.CBCM,
        ],
      },
      e.CNM,
      { cN: "meta", b: "@[A-Za-z]+" },
    ],
  };
});
hljs.registerLanguage("csp", function (r) {
  return {
    cI: !1,
    l: "[a-zA-Z][a-zA-Z0-9_-]*",
    k: {
      keyword:
        "base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src",
    },
    c: [
      { cN: "string", b: "'", e: "'" },
      { cN: "attribute", b: "^Content", e: ":", eE: !0 },
    ],
  };
});
hljs.registerLanguage("maxima", function (e) {
  return {
    l: "[A-Za-z_%][0-9A-Za-z_%]*",
    k: {
      keyword:
        "if then else elseif for thru do while unless step in and or not",
      literal: "true false unknown inf minf ind und %e %i %pi %phi %gamma",
      built_in:
        " abasep abs absint absolute_real_time acos acosh acot acoth acsc acsch activate addcol add_edge add_edges addmatrices addrow add_vertex add_vertices adjacency_matrix adjoin adjoint af agd airy airy_ai airy_bi airy_dai airy_dbi algsys alg_type alias allroots alphacharp alphanumericp amortization %and annuity_fv annuity_pv antid antidiff AntiDifference append appendfile apply apply1 apply2 applyb1 apropos args arit_amortization arithmetic arithsum array arrayapply arrayinfo arraymake arraysetapply ascii asec asech asin asinh askinteger asksign assoc assoc_legendre_p assoc_legendre_q assume assume_external_byte_order asympa at atan atan2 atanh atensimp atom atvalue augcoefmatrix augmented_lagrangian_method av average_degree backtrace bars barsplot barsplot_description base64 base64_decode bashindices batch batchload bc2 bdvac belln benefit_cost bern bernpoly bernstein_approx bernstein_expand bernstein_poly bessel bessel_i bessel_j bessel_k bessel_simplify bessel_y beta beta_incomplete beta_incomplete_generalized beta_incomplete_regularized bezout bfallroots bffac bf_find_root bf_fmin_cobyla bfhzeta bfloat bfloatp bfpsi bfpsi0 bfzeta biconnected_components bimetric binomial bipartition block blockmatrixp bode_gain bode_phase bothcoef box boxplot boxplot_description break bug_report build_info|10 buildq build_sample burn cabs canform canten cardinality carg cartan cartesian_product catch cauchy_matrix cbffac cdf_bernoulli cdf_beta cdf_binomial cdf_cauchy cdf_chi2 cdf_continuous_uniform cdf_discrete_uniform cdf_exp cdf_f cdf_gamma cdf_general_finite_discrete cdf_geometric cdf_gumbel cdf_hypergeometric cdf_laplace cdf_logistic cdf_lognormal cdf_negative_binomial cdf_noncentral_chi2 cdf_noncentral_student_t cdf_normal cdf_pareto cdf_poisson cdf_rank_sum cdf_rayleigh cdf_signed_rank cdf_student_t cdf_weibull cdisplay ceiling central_moment cequal cequalignore cf cfdisrep cfexpand cgeodesic cgreaterp cgreaterpignore changename changevar chaosgame charat charfun charfun2 charlist charp charpoly chdir chebyshev_t chebyshev_u checkdiv check_overlaps chinese cholesky christof chromatic_index chromatic_number cint circulant_graph clear_edge_weight clear_rules clear_vertex_label clebsch_gordan clebsch_graph clessp clesspignore close closefile cmetric coeff coefmatrix cograd col collapse collectterms columnop columnspace columnswap columnvector combination combine comp2pui compare compfile compile compile_file complement_graph complete_bipartite_graph complete_graph complex_number_p components compose_functions concan concat conjugate conmetderiv connected_components connect_vertices cons constant constantp constituent constvalue cont2part content continuous_freq contortion contour_plot contract contract_edge contragrad contrib_ode convert coord copy copy_file copy_graph copylist copymatrix cor cos cosh cot coth cov cov1 covdiff covect covers crc24sum create_graph create_list csc csch csetup cspline ctaylor ct_coordsys ctransform ctranspose cube_graph cuboctahedron_graph cunlisp cv cycle_digraph cycle_graph cylindrical days360 dblint deactivate declare declare_constvalue declare_dimensions declare_fundamental_dimensions declare_fundamental_units declare_qty declare_translated declare_unit_conversion declare_units declare_weights decsym defcon define define_alt_display define_variable defint defmatch defrule defstruct deftaylor degree_sequence del delete deleten delta demo demoivre denom depends derivdegree derivlist describe desolve determinant dfloat dgauss_a dgauss_b dgeev dgemm dgeqrf dgesv dgesvd diag diagmatrix diag_matrix diagmatrixp diameter diff digitcharp dimacs_export dimacs_import dimension dimensionless dimensions dimensions_as_list direct directory discrete_freq disjoin disjointp disolate disp dispcon dispform dispfun dispJordan display disprule dispterms distrib divide divisors divsum dkummer_m dkummer_u dlange dodecahedron_graph dotproduct dotsimp dpart draw draw2d draw3d drawdf draw_file draw_graph dscalar echelon edge_coloring edge_connectivity edges eigens_by_jacobi eigenvalues eigenvectors eighth einstein eivals eivects elapsed_real_time elapsed_run_time ele2comp ele2polynome ele2pui elem elementp elevation_grid elim elim_allbut eliminate eliminate_using ellipse elliptic_e elliptic_ec elliptic_eu elliptic_f elliptic_kc elliptic_pi ematrix empty_graph emptyp endcons entermatrix entertensor entier equal equalp equiv_classes erf erfc erf_generalized erfi errcatch error errormsg errors euler ev eval_string evenp every evolution evolution2d evundiff example exp expand expandwrt expandwrt_factored expint expintegral_chi expintegral_ci expintegral_e expintegral_e1 expintegral_ei expintegral_e_simplify expintegral_li expintegral_shi expintegral_si explicit explose exponentialize express expt exsec extdiff extract_linear_equations extremal_subset ezgcd %f f90 facsum factcomb factor factorfacsum factorial factorout factorsum facts fast_central_elements fast_linsolve fasttimes featurep fernfale fft fib fibtophi fifth filename_merge file_search file_type fillarray findde find_root find_root_abs find_root_error find_root_rel first fix flatten flength float floatnump floor flower_snark flush flush1deriv flushd flushnd flush_output fmin_cobyla forget fortran fourcos fourexpand fourier fourier_elim fourint fourintcos fourintsin foursimp foursin fourth fposition frame_bracket freeof freshline fresnel_c fresnel_s from_adjacency_matrix frucht_graph full_listify fullmap fullmapl fullratsimp fullratsubst fullsetify funcsolve fundamental_dimensions fundamental_units fundef funmake funp fv g0 g1 gamma gamma_greek gamma_incomplete gamma_incomplete_generalized gamma_incomplete_regularized gauss gauss_a gauss_b gaussprob gcd gcdex gcdivide gcfac gcfactor gd generalized_lambert_w genfact gen_laguerre genmatrix gensym geo_amortization geo_annuity_fv geo_annuity_pv geomap geometric geometric_mean geosum get getcurrentdirectory get_edge_weight getenv get_lu_factors get_output_stream_string get_pixel get_plot_option get_tex_environment get_tex_environment_default get_vertex_label gfactor gfactorsum ggf girth global_variances gn gnuplot_close gnuplot_replot gnuplot_reset gnuplot_restart gnuplot_start go Gosper GosperSum gr2d gr3d gradef gramschmidt graph6_decode graph6_encode graph6_export graph6_import graph_center graph_charpoly graph_eigenvalues graph_flow graph_order graph_periphery graph_product graph_size graph_union great_rhombicosidodecahedron_graph great_rhombicuboctahedron_graph grid_graph grind grobner_basis grotzch_graph hamilton_cycle hamilton_path hankel hankel_1 hankel_2 harmonic harmonic_mean hav heawood_graph hermite hessian hgfred hilbertmap hilbert_matrix hipow histogram histogram_description hodge horner hypergeometric i0 i1 %ibes ic1 ic2 ic_convert ichr1 ichr2 icosahedron_graph icosidodecahedron_graph icurvature ident identfor identity idiff idim idummy ieqn %if ifactors iframes ifs igcdex igeodesic_coords ilt image imagpart imetric implicit implicit_derivative implicit_plot indexed_tensor indices induced_subgraph inferencep inference_result infix info_display init_atensor init_ctensor in_neighbors innerproduct inpart inprod inrt integerp integer_partitions integrate intersect intersection intervalp intopois intosum invariant1 invariant2 inverse_fft inverse_jacobi_cd inverse_jacobi_cn inverse_jacobi_cs inverse_jacobi_dc inverse_jacobi_dn inverse_jacobi_ds inverse_jacobi_nc inverse_jacobi_nd inverse_jacobi_ns inverse_jacobi_sc inverse_jacobi_sd inverse_jacobi_sn invert invert_by_adjoint invert_by_lu inv_mod irr is is_biconnected is_bipartite is_connected is_digraph is_edge_in_graph is_graph is_graph_or_digraph ishow is_isomorphic isolate isomorphism is_planar isqrt isreal_p is_sconnected is_tree is_vertex_in_graph items_inference %j j0 j1 jacobi jacobian jacobi_cd jacobi_cn jacobi_cs jacobi_dc jacobi_dn jacobi_ds jacobi_nc jacobi_nd jacobi_ns jacobi_p jacobi_sc jacobi_sd jacobi_sn JF jn join jordan julia julia_set julia_sin %k kdels kdelta kill killcontext kostka kron_delta kronecker_product kummer_m kummer_u kurtosis kurtosis_bernoulli kurtosis_beta kurtosis_binomial kurtosis_chi2 kurtosis_continuous_uniform kurtosis_discrete_uniform kurtosis_exp kurtosis_f kurtosis_gamma kurtosis_general_finite_discrete kurtosis_geometric kurtosis_gumbel kurtosis_hypergeometric kurtosis_laplace kurtosis_logistic kurtosis_lognormal kurtosis_negative_binomial kurtosis_noncentral_chi2 kurtosis_noncentral_student_t kurtosis_normal kurtosis_pareto kurtosis_poisson kurtosis_rayleigh kurtosis_student_t kurtosis_weibull label labels lagrange laguerre lambda lambert_w laplace laplacian_matrix last lbfgs lc2kdt lcharp lc_l lcm lc_u ldefint ldisp ldisplay legendre_p legendre_q leinstein length let letrules letsimp levi_civita lfreeof lgtreillis lhs li liediff limit Lindstedt linear linearinterpol linear_program linear_regression line_graph linsolve listarray list_correlations listify list_matrix_entries list_nc_monomials listoftens listofvars listp lmax lmin load loadfile local locate_matrix_entry log logcontract log_gamma lopow lorentz_gauge lowercasep lpart lratsubst lreduce lriemann lsquares_estimates lsquares_estimates_approximate lsquares_estimates_exact lsquares_mse lsquares_residual_mse lsquares_residuals lsum ltreillis lu_backsub lucas lu_factor %m macroexpand macroexpand1 make_array makebox makefact makegamma make_graph make_level_picture makelist makeOrders make_poly_continent make_poly_country make_polygon make_random_state make_rgb_picture makeset make_string_input_stream make_string_output_stream make_transform mandelbrot mandelbrot_set map mapatom maplist matchdeclare matchfix mat_cond mat_fullunblocker mat_function mathml_display mat_norm matrix matrixmap matrixp matrix_size mattrace mat_trace mat_unblocker max max_clique max_degree max_flow maximize_lp max_independent_set max_matching maybe md5sum mean mean_bernoulli mean_beta mean_binomial mean_chi2 mean_continuous_uniform mean_deviation mean_discrete_uniform mean_exp mean_f mean_gamma mean_general_finite_discrete mean_geometric mean_gumbel mean_hypergeometric mean_laplace mean_logistic mean_lognormal mean_negative_binomial mean_noncentral_chi2 mean_noncentral_student_t mean_normal mean_pareto mean_poisson mean_rayleigh mean_student_t mean_weibull median median_deviation member mesh metricexpandall mgf1_sha1 min min_degree min_edge_cut minfactorial minimalPoly minimize_lp minimum_spanning_tree minor minpack_lsquares minpack_solve min_vertex_cover min_vertex_cut mkdir mnewton mod mode_declare mode_identity ModeMatrix moebius mon2schur mono monomial_dimensions multibernstein_poly multi_display_for_texinfo multi_elem multinomial multinomial_coeff multi_orbit multiplot_mode multi_pui multsym multthru mycielski_graph nary natural_unit nc_degree ncexpt ncharpoly negative_picture neighbors new newcontext newdet new_graph newline newton new_variable next_prime nicedummies niceindices ninth nofix nonarray noncentral_moment nonmetricity nonnegintegerp nonscalarp nonzeroandfreeof notequal nounify nptetrad npv nroots nterms ntermst nthroot nullity nullspace num numbered_boundaries numberp number_to_octets num_distinct_partitions numerval numfactor num_partitions nusum nzeta nzetai nzetar octets_to_number octets_to_oid odd_girth oddp ode2 ode_check odelin oid_to_octets op opena opena_binary openr openr_binary openw openw_binary operatorp opsubst optimize %or orbit orbits ordergreat ordergreatp orderless orderlessp orthogonal_complement orthopoly_recur orthopoly_weight outermap out_neighbors outofpois pade parabolic_cylinder_d parametric parametric_surface parg parGosper parse_string parse_timedate part part2cont partfrac partition partition_set partpol path_digraph path_graph pathname_directory pathname_name pathname_type pdf_bernoulli pdf_beta pdf_binomial pdf_cauchy pdf_chi2 pdf_continuous_uniform pdf_discrete_uniform pdf_exp pdf_f pdf_gamma pdf_general_finite_discrete pdf_geometric pdf_gumbel pdf_hypergeometric pdf_laplace pdf_logistic pdf_lognormal pdf_negative_binomial pdf_noncentral_chi2 pdf_noncentral_student_t pdf_normal pdf_pareto pdf_poisson pdf_rank_sum pdf_rayleigh pdf_signed_rank pdf_student_t pdf_weibull pearson_skewness permanent permut permutation permutations petersen_graph petrov pickapart picture_equalp picturep piechart piechart_description planar_embedding playback plog plot2d plot3d plotdf ploteq plsquares pochhammer points poisdiff poisexpt poisint poismap poisplus poissimp poissubst poistimes poistrim polar polarform polartorect polar_to_xy poly_add poly_buchberger poly_buchberger_criterion poly_colon_ideal poly_content polydecomp poly_depends_p poly_elimination_ideal poly_exact_divide poly_expand poly_expt poly_gcd polygon poly_grobner poly_grobner_equal poly_grobner_member poly_grobner_subsetp poly_ideal_intersection poly_ideal_polysaturation poly_ideal_polysaturation1 poly_ideal_saturation poly_ideal_saturation1 poly_lcm poly_minimization polymod poly_multiply polynome2ele polynomialp poly_normal_form poly_normalize poly_normalize_list poly_polysaturation_extension poly_primitive_part poly_pseudo_divide poly_reduced_grobner poly_reduction poly_saturation_extension poly_s_polynomial poly_subtract polytocompanion pop postfix potential power_mod powerseries powerset prefix prev_prime primep primes principal_components print printf printfile print_graph printpois printprops prodrac product properties propvars psi psubst ptriangularize pui pui2comp pui2ele pui2polynome pui_direct puireduc push put pv qput qrange qty quad_control quad_qag quad_qagi quad_qagp quad_qags quad_qawc quad_qawf quad_qawo quad_qaws quadrilateral quantile quantile_bernoulli quantile_beta quantile_binomial quantile_cauchy quantile_chi2 quantile_continuous_uniform quantile_discrete_uniform quantile_exp quantile_f quantile_gamma quantile_general_finite_discrete quantile_geometric quantile_gumbel quantile_hypergeometric quantile_laplace quantile_logistic quantile_lognormal quantile_negative_binomial quantile_noncentral_chi2 quantile_noncentral_student_t quantile_normal quantile_pareto quantile_poisson quantile_rayleigh quantile_student_t quantile_weibull quartile_skewness quit qunit quotient racah_v racah_w radcan radius random random_bernoulli random_beta random_binomial random_bipartite_graph random_cauchy random_chi2 random_continuous_uniform random_digraph random_discrete_uniform random_exp random_f random_gamma random_general_finite_discrete random_geometric random_graph random_graph1 random_gumbel random_hypergeometric random_laplace random_logistic random_lognormal random_negative_binomial random_network random_noncentral_chi2 random_noncentral_student_t random_normal random_pareto random_permutation random_poisson random_rayleigh random_regular_graph random_student_t random_tournament random_tree random_weibull range rank rat ratcoef ratdenom ratdiff ratdisrep ratexpand ratinterpol rational rationalize ratnumer ratnump ratp ratsimp ratsubst ratvars ratweight read read_array read_binary_array read_binary_list read_binary_matrix readbyte readchar read_hashed_array readline read_list read_matrix read_nested_list readonly read_xpm real_imagpart_to_conjugate realpart realroots rearray rectangle rectform rectform_log_if_constant recttopolar rediff reduce_consts reduce_order region region_boundaries region_boundaries_plus rem remainder remarray rembox remcomps remcon remcoord remfun remfunction remlet remove remove_constvalue remove_dimensions remove_edge remove_fundamental_dimensions remove_fundamental_units remove_plot_option remove_vertex rempart remrule remsym remvalue rename rename_file reset reset_displays residue resolvante resolvante_alternee1 resolvante_bipartite resolvante_diedrale resolvante_klein resolvante_klein3 resolvante_produit_sym resolvante_unitaire resolvante_vierer rest resultant return reveal reverse revert revert2 rgb2level rhs ricci riemann rinvariant risch rk rmdir rncombine romberg room rootscontract round row rowop rowswap rreduce run_testsuite %s save saving scalarp scaled_bessel_i scaled_bessel_i0 scaled_bessel_i1 scalefactors scanmap scatterplot scatterplot_description scene schur2comp sconcat scopy scsimp scurvature sdowncase sec sech second sequal sequalignore set_alt_display setdifference set_draw_defaults set_edge_weight setelmx setequalp setify setp set_partitions set_plot_option set_prompt set_random_state set_tex_environment set_tex_environment_default setunits setup_autoload set_up_dot_simplifications set_vertex_label seventh sexplode sf sha1sum sha256sum shortest_path shortest_weighted_path show showcomps showratvars sierpinskiale sierpinskimap sign signum similaritytransform simp_inequality simplify_sum simplode simpmetderiv simtran sin sinh sinsert sinvertcase sixth skewness skewness_bernoulli skewness_beta skewness_binomial skewness_chi2 skewness_continuous_uniform skewness_discrete_uniform skewness_exp skewness_f skewness_gamma skewness_general_finite_discrete skewness_geometric skewness_gumbel skewness_hypergeometric skewness_laplace skewness_logistic skewness_lognormal skewness_negative_binomial skewness_noncentral_chi2 skewness_noncentral_student_t skewness_normal skewness_pareto skewness_poisson skewness_rayleigh skewness_student_t skewness_weibull slength smake small_rhombicosidodecahedron_graph small_rhombicuboctahedron_graph smax smin smismatch snowmap snub_cube_graph snub_dodecahedron_graph solve solve_rec solve_rec_rat some somrac sort sparse6_decode sparse6_encode sparse6_export sparse6_import specint spherical spherical_bessel_j spherical_bessel_y spherical_hankel1 spherical_hankel2 spherical_harmonic spherical_to_xyz splice split sposition sprint sqfr sqrt sqrtdenest sremove sremovefirst sreverse ssearch ssort sstatus ssubst ssubstfirst staircase standardize standardize_inverse_trig starplot starplot_description status std std1 std_bernoulli std_beta std_binomial std_chi2 std_continuous_uniform std_discrete_uniform std_exp std_f std_gamma std_general_finite_discrete std_geometric std_gumbel std_hypergeometric std_laplace std_logistic std_lognormal std_negative_binomial std_noncentral_chi2 std_noncentral_student_t std_normal std_pareto std_poisson std_rayleigh std_student_t std_weibull stemplot stirling stirling1 stirling2 strim striml strimr string stringout stringp strong_components struve_h struve_l sublis sublist sublist_indices submatrix subsample subset subsetp subst substinpart subst_parallel substpart substring subvar subvarp sum sumcontract summand_to_rec supcase supcontext symbolp symmdifference symmetricp system take_channel take_inference tan tanh taylor taylorinfo taylorp taylor_simplifier taytorat tcl_output tcontract tellrat tellsimp tellsimpafter tentex tenth test_mean test_means_difference test_normality test_proportion test_proportions_difference test_rank_sum test_sign test_signed_rank test_variance test_variance_ratio tex tex1 tex_display texput %th third throw time timedate timer timer_info tldefint tlimit todd_coxeter toeplitz tokens to_lisp topological_sort to_poly to_poly_solve totaldisrep totalfourier totient tpartpol trace tracematrix trace_options transform_sample translate translate_file transpose treefale tree_reduce treillis treinat triangle triangularize trigexpand trigrat trigreduce trigsimp trunc truncate truncated_cube_graph truncated_dodecahedron_graph truncated_icosahedron_graph truncated_tetrahedron_graph tr_warnings_get tube tutte_graph ueivects uforget ultraspherical underlying_graph undiff union unique uniteigenvectors unitp units unit_step unitvector unorder unsum untellrat untimer untrace uppercasep uricci uriemann uvect vandermonde_matrix var var1 var_bernoulli var_beta var_binomial var_chi2 var_continuous_uniform var_discrete_uniform var_exp var_f var_gamma var_general_finite_discrete var_geometric var_gumbel var_hypergeometric var_laplace var_logistic var_lognormal var_negative_binomial var_noncentral_chi2 var_noncentral_student_t var_normal var_pareto var_poisson var_rayleigh var_student_t var_weibull vector vectorpotential vectorsimp verbify vers vertex_coloring vertex_connectivity vertex_degree vertex_distance vertex_eccentricity vertex_in_degree vertex_out_degree vertices vertices_to_cycle vertices_to_path %w weyl wheel_graph wiener_index wigner_3j wigner_6j wigner_9j with_stdout write_binary_data writebyte write_data writefile wronskian xreduce xthru %y Zeilberger zeroequiv zerofor zeromatrix zeromatrixp zeta zgeev zheev zlange zn_add_table zn_carmichael_lambda zn_characteristic_factors zn_determinant zn_factor_generators zn_invert_by_lu zn_log zn_mult_table absboxchar activecontexts adapt_depth additive adim aform algebraic algepsilon algexact aliases allbut all_dotsimp_denoms allocation allsym alphabetic animation antisymmetric arrays askexp assume_pos assume_pos_pred assumescalar asymbol atomgrad atrig1 axes axis_3d axis_bottom axis_left axis_right axis_top azimuth background background_color backsubst berlefact bernstein_explicit besselexpand beta_args_sum_to_integer beta_expand bftorat bftrunc bindtest border boundaries_array box boxchar breakup %c capping cauchysum cbrange cbtics center cflength cframe_flag cnonmet_flag color color_bar color_bar_tics colorbox columns commutative complex cone context contexts contour contour_levels cosnpiflag ctaypov ctaypt ctayswitch ctayvar ct_coords ctorsion_flag ctrgsimp cube current_let_rule_package cylinder data_file_name debugmode decreasing default_let_rule_package delay dependencies derivabbrev derivsubst detout diagmetric diff dim dimensions dispflag display2d|10 display_format_internal distribute_over doallmxops domain domxexpt domxmxops domxnctimes dontfactor doscmxops doscmxplus dot0nscsimp dot0simp dot1simp dotassoc dotconstrules dotdistrib dotexptsimp dotident dotscrules draw_graph_program draw_realpart edge_color edge_coloring edge_partition edge_type edge_width %edispflag elevation %emode endphi endtheta engineering_format_floats enhanced3d %enumer epsilon_lp erfflag erf_representation errormsg error_size error_syms error_type %e_to_numlog eval even evenfun evflag evfun ev_point expandwrt_denom expintexpand expintrep expon expop exptdispflag exptisolate exptsubst facexpand facsum_combine factlim factorflag factorial_expand factors_only fb feature features file_name file_output_append file_search_demo file_search_lisp file_search_maxima|10 file_search_tests file_search_usage file_type_lisp file_type_maxima|10 fill_color fill_density filled_func fixed_vertices flipflag float2bf font font_size fortindent fortspaces fpprec fpprintprec functions gamma_expand gammalim gdet genindex gensumnum GGFCFMAX GGFINFINITY globalsolve gnuplot_command gnuplot_curve_styles gnuplot_curve_titles gnuplot_default_term_command gnuplot_dumb_term_command gnuplot_file_args gnuplot_file_name gnuplot_out_file gnuplot_pdf_term_command gnuplot_pm3d gnuplot_png_term_command gnuplot_postamble gnuplot_preamble gnuplot_ps_term_command gnuplot_svg_term_command gnuplot_term gnuplot_view_args Gosper_in_Zeilberger gradefs grid grid2d grind halfangles head_angle head_both head_length head_type height hypergeometric_representation %iargs ibase icc1 icc2 icounter idummyx ieqnprint ifb ifc1 ifc2 ifg ifgi ifr iframe_bracket_form ifri igeowedge_flag ikt1 ikt2 imaginary inchar increasing infeval infinity inflag infolists inm inmc1 inmc2 intanalysis integer integervalued integrate_use_rootsof integration_constant integration_constant_counter interpolate_color intfaclim ip_grid ip_grid_in irrational isolate_wrt_times iterations itr julia_parameter %k1 %k2 keepfloat key key_pos kinvariant kt label label_alignment label_orientation labels lassociative lbfgs_ncorrections lbfgs_nfeval_max leftjust legend letrat let_rule_packages lfg lg lhospitallim limsubst linear linear_solver linechar linel|10 linenum line_type linewidth line_width linsolve_params linsolvewarn lispdisp listarith listconstvars listdummyvars lmxchar load_pathname loadprint logabs logarc logcb logconcoeffp logexpand lognegint logsimp logx logx_secondary logy logy_secondary logz lriem m1pbranch macroexpansion macros mainvar manual_demo maperror mapprint matrix_element_add matrix_element_mult matrix_element_transpose maxapplydepth maxapplyheight maxima_tempdir|10 maxima_userdir|10 maxnegex MAX_ORD maxposex maxpsifracdenom maxpsifracnum maxpsinegint maxpsiposint maxtayorder mesh_lines_color method mod_big_prime mode_check_errorp mode_checkp mode_check_warnp mod_test mod_threshold modular_linear_solver modulus multiplicative multiplicities myoptions nary negdistrib negsumdispflag newline newtonepsilon newtonmaxiter nextlayerfactor niceindicespref nm nmc noeval nolabels nonegative_lp noninteger nonscalar noun noundisp nouns np npi nticks ntrig numer numer_pbranch obase odd oddfun opacity opproperties opsubst optimprefix optionset orientation origin orthopoly_returns_intervals outative outchar packagefile palette partswitch pdf_file pfeformat phiresolution %piargs piece pivot_count_sx pivot_max_sx plot_format plot_options plot_realpart png_file pochhammer_max_index points pointsize point_size points_joined point_type poislim poisson poly_coefficient_ring poly_elimination_order polyfactor poly_grobner_algorithm poly_grobner_debug poly_monomial_order poly_primary_elimination_order poly_return_term_list poly_secondary_elimination_order poly_top_reduction_only posfun position powerdisp pred prederror primep_number_of_tests product_use_gamma program programmode promote_float_to_bigfloat prompt proportional_axes props psexpand ps_file radexpand radius radsubstflag rassociative ratalgdenom ratchristof ratdenomdivide rateinstein ratepsilon ratfac rational ratmx ratprint ratriemann ratsimpexpons ratvarswitch ratweights ratweyl ratwtlvl real realonly redraw refcheck resolution restart resultant ric riem rmxchar %rnum_list rombergabs rombergit rombergmin rombergtol rootsconmode rootsepsilon run_viewer same_xy same_xyz savedef savefactors scalar scalarmatrixp scale scale_lp setcheck setcheckbreak setval show_edge_color show_edges show_edge_type show_edge_width show_id show_label showtime show_vertex_color show_vertex_size show_vertex_type show_vertices show_weight simp simplified_output simplify_products simpproduct simpsum sinnpiflag solvedecomposes solveexplicit solvefactors solvenullwarn solveradcan solvetrigwarn space sparse sphere spring_embedding_depth sqrtdispflag stardisp startphi starttheta stats_numer stringdisp structures style sublis_apply_lambda subnumsimp sumexpand sumsplitfact surface surface_hide svg_file symmetric tab taylordepth taylor_logexpand taylor_order_coefficients taylor_truncate_polynomials tensorkill terminal testsuite_files thetaresolution timer_devalue title tlimswitch tr track transcompile transform transform_xy translate_fast_arrays transparent transrun tr_array_as_ref tr_bound_function_applyp tr_file_tty_messagesp tr_float_can_branch_complex tr_function_call_default trigexpandplus trigexpandtimes triginverses trigsign trivial_solutions tr_numer tr_optimize_max_loop tr_semicompile tr_state_vars tr_warn_bad_function_calls tr_warn_fexpr tr_warn_meval tr_warn_mode tr_warn_undeclared tr_warn_undefined_variable tstep ttyoff tube_extremes ufg ug %unitexpand unit_vectors uric uriem use_fast_arrays user_preamble usersetunits values vect_cross verbose vertex_color vertex_coloring vertex_partition vertex_size vertex_type view warnings weyl width windowname windowtitle wired_surface wireframe xaxis xaxis_color xaxis_secondary xaxis_type xaxis_width xlabel xlabel_secondary xlength xrange xrange_secondary xtics xtics_axis xtics_rotate xtics_rotate_secondary xtics_secondary xtics_secondary_axis xu_grid x_voxel xy_file xyplane xy_scale yaxis yaxis_color yaxis_secondary yaxis_type yaxis_width ylabel ylabel_secondary ylength yrange yrange_secondary ytics ytics_axis ytics_rotate ytics_rotate_secondary ytics_secondary ytics_secondary_axis yv_grid y_voxel yx_ratio zaxis zaxis_color zaxis_type zaxis_width zeroa zerob zerobern zeta%pi zlabel zlabel_rotate zlength zmin zn_primroot_limit zn_primroot_pretest",
      symbol: "_ __ %|0 %%|0",
    },
    c: [
      { cN: "comment", b: "/\\*", e: "\\*/", c: ["self"] },
      e.QSM,
      {
        cN: "number",
        relevance: 0,
        v: [
          { b: "\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Ee][-+]?\\d+\\b" },
          {
            b: "\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Bb][-+]?\\d+\\b",
            relevance: 10,
          },
          { b: "\\b(\\.\\d+|\\d+\\.\\d+)\\b" },
          { b: "\\b(\\d+|0[0-9A-Za-z]+)\\.?\\b" },
        ],
      },
    ],
    i: /@/,
  };
});
hljs.registerLanguage("apache", function (e) {
  var r = { cN: "number", b: "[\\$%]\\d+" };
  return {
    aliases: ["apacheconf"],
    cI: !0,
    c: [
      e.HCM,
      { cN: "section", b: "</?", e: ">" },
      {
        cN: "attribute",
        b: /\w+/,
        relevance: 0,
        k: {
          nomarkup:
            "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername",
        },
        starts: {
          e: /$/,
          relevance: 0,
          k: { literal: "on off all" },
          c: [
            { cN: "meta", b: "\\s\\[", e: "\\]$" },
            { cN: "variable", b: "[\\$%]\\{", e: "\\}", c: ["self", r] },
            r,
            e.QSM,
          ],
        },
      },
    ],
    i: /\S/,
  };
});
hljs.registerLanguage("typescript", function (e) {
  var r = "[A-Za-z$_][0-9A-Za-z$_]*",
    t = {
      keyword:
        "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",
      literal: "true false null undefined NaN Infinity",
      built_in:
        "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise",
    },
    n = { cN: "meta", b: "@" + r },
    a = { b: "\\(", e: /\)/, k: t, c: ["self", e.QSM, e.ASM, e.NM] },
    c = {
      cN: "params",
      b: /\(/,
      e: /\)/,
      eB: !0,
      eE: !0,
      k: t,
      c: [e.CLCM, e.CBCM, n, a],
    },
    s = {
      cN: "number",
      v: [
        { b: "\\b(0[bB][01]+)n?" },
        { b: "\\b(0[oO][0-7]+)n?" },
        { b: e.CNR + "n?" },
      ],
      relevance: 0,
    },
    o = { cN: "subst", b: "\\$\\{", e: "\\}", k: t, c: [] },
    i = {
      b: "html`",
      e: "",
      starts: { e: "`", rE: !1, c: [e.BE, o], sL: "xml" },
    },
    l = {
      b: "css`",
      e: "",
      starts: { e: "`", rE: !1, c: [e.BE, o], sL: "css" },
    },
    b = { cN: "string", b: "`", e: "`", c: [e.BE, o] };
  return (
    (o.c = [e.ASM, e.QSM, i, l, b, s, e.RM]),
    {
      aliases: ["ts"],
      k: t,
      c: [
        { cN: "meta", b: /^\s*['"]use strict['"]/ },
        e.ASM,
        e.QSM,
        i,
        l,
        b,
        e.CLCM,
        e.CBCM,
        s,
        {
          b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
          k: "return throw case",
          c: [
            e.CLCM,
            e.CBCM,
            e.RM,
            {
              cN: "function",
              b: "(\\(.*?\\)|" + e.IR + ")\\s*=>",
              rB: !0,
              e: "\\s*=>",
              c: [
                {
                  cN: "params",
                  v: [
                    { b: e.IR },
                    { b: /\(\s*\)/ },
                    {
                      b: /\(/,
                      e: /\)/,
                      eB: !0,
                      eE: !0,
                      k: t,
                      c: ["self", e.CLCM, e.CBCM],
                    },
                  ],
                },
              ],
            },
          ],
          relevance: 0,
        },
        {
          cN: "function",
          bK: "function",
          e: /[\{;]/,
          eE: !0,
          k: t,
          c: ["self", e.inherit(e.TM, { b: r }), c],
          i: /%/,
          relevance: 0,
        },
        { bK: "constructor", e: /[\{;]/, eE: !0, c: ["self", c] },
        { b: /module\./, k: { built_in: "module" }, relevance: 0 },
        { bK: "module", e: /\{/, eE: !0 },
        { bK: "interface", e: /\{/, eE: !0, k: "interface extends" },
        { b: /\$[(.]/ },
        { b: "\\." + e.IR, relevance: 0 },
        n,
        a,
      ],
    }
  );
});
hljs.registerLanguage("autoit", function (e) {
  var t = {
      v: [
        e.C(";", "$", { relevance: 0 }),
        e.C("#cs", "#ce"),
        e.C("#comments-start", "#comments-end"),
      ],
    },
    r = { b: "\\$[A-z0-9_]+" },
    i = {
      cN: "string",
      v: [
        { b: /"/, e: /"/, c: [{ b: /""/, relevance: 0 }] },
        { b: /'/, e: /'/, c: [{ b: /''/, relevance: 0 }] },
      ],
    },
    l = { v: [e.BNM, e.CNM] };
  return {
    cI: !0,
    i: /\/\*/,
    k: {
      keyword:
        "ByRef Case Const ContinueCase ContinueLoop Default Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With",
      built_in:
        "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait",
      literal: "True False And Null Not Or",
    },
    c: [
      t,
      r,
      i,
      l,
      {
        cN: "meta",
        b: "#",
        e: "$",
        k: {
          "meta-keyword":
            "comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin",
        },
        c: [
          { b: /\\\n/, relevance: 0 },
          {
            bK: "include",
            k: { "meta-keyword": "include" },
            e: "$",
            c: [
              i,
              {
                cN: "meta-string",
                v: [
                  { b: "<", e: ">" },
                  { b: /"/, e: /"/, c: [{ b: /""/, relevance: 0 }] },
                  { b: /'/, e: /'/, c: [{ b: /''/, relevance: 0 }] },
                ],
              },
            ],
          },
          i,
          t,
        ],
      },
      { cN: "symbol", b: "@[A-z0-9_]+" },
      {
        cN: "function",
        bK: "Func",
        e: "$",
        i: "\\$|\\[|%",
        c: [e.UTM, { cN: "params", b: "\\(", e: "\\)", c: [r, i, l] }],
      },
    ],
  };
});
hljs.registerLanguage("awk", function (e) {
  return {
    k: {
      keyword:
        "BEGIN END if else while do for in break continue delete next nextfile function func exit|10",
    },
    c: [
      { cN: "variable", v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
      {
        cN: "string",
        c: [e.BE],
        v: [
          { b: /(u|b)?r?'''/, e: /'''/, relevance: 10 },
          { b: /(u|b)?r?"""/, e: /"""/, relevance: 10 },
          { b: /(u|r|ur)'/, e: /'/, relevance: 10 },
          { b: /(u|r|ur)"/, e: /"/, relevance: 10 },
          { b: /(b|br)'/, e: /'/ },
          { b: /(b|br)"/, e: /"/ },
          e.ASM,
          e.QSM,
        ],
      },
      e.RM,
      e.HCM,
      e.NM,
    ],
  };
});
hljs.registerLanguage("monkey", function (e) {
  var n = { cN: "number", relevance: 0, v: [{ b: "[$][a-fA-F0-9]+" }, e.NM] };
  return {
    cI: !0,
    k: {
      keyword:
        "public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import",
      built_in:
        "DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI",
      literal: "true false null and or shl shr mod",
    },
    i: /\/\*/,
    c: [
      e.C("#rem", "#end"),
      e.C("'", "$", { relevance: 0 }),
      {
        cN: "function",
        bK: "function method",
        e: "[(=:]|$",
        i: /\n/,
        c: [e.UTM],
      },
      {
        cN: "class",
        bK: "class interface",
        e: "$",
        c: [{ bK: "extends implements" }, e.UTM],
      },
      { cN: "built_in", b: "\\b(self|super)\\b" },
      {
        cN: "meta",
        b: "\\s*#",
        e: "$",
        k: { "meta-keyword": "if else elseif endif end then" },
      },
      { cN: "meta", b: "^\\s*strict\\b" },
      { bK: "alias", e: "=", c: [e.UTM] },
      e.QSM,
      n,
    ],
  };
});
hljs.registerLanguage("nsis", function (e) {
  var t = { cN: "variable", b: /\$+{[\w\.:-]+}/ },
    n = { cN: "variable", b: /\$+\w+/, i: /\(\){}/ },
    i = { cN: "variable", b: /\$+\([\w\^\.:-]+\)/ },
    r = {
      cN: "string",
      v: [
        { b: '"', e: '"' },
        { b: "'", e: "'" },
        { b: "`", e: "`" },
      ],
      i: /\n/,
      c: [
        { cN: "meta", b: /\$(\\[nrt]|\$)/ },
        {
          cN: "variable",
          b: /\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)/,
        },
        t,
        n,
        i,
      ],
    };
  return {
    cI: !1,
    k: {
      keyword:
        "Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecShellWait ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText Int64Cmp Int64CmpU Int64Fmt IntCmp IntCmpU IntFmt IntOp IntPtrCmp IntPtrCmpU IntPtrOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegMultiStr WriteRegNone WriteRegStr WriteUninstaller XPStyle",
      literal:
        "admin all auto both bottom bzip2 colored components current custom directory false force hide highest ifdiff ifnewer instfiles lastused leave left license listonly lzma nevershow none normal notset off on open print right show silent silentlog smooth textonly top true try un.components un.custom un.directory un.instfiles un.license uninstConfirm user Win10 Win7 Win8 WinVista zlib",
    },
    c: [
      e.HCM,
      e.CBCM,
      e.C(";", "$", { relevance: 0 }),
      { cN: "function", bK: "Function PageEx Section SectionGroup", e: "$" },
      r,
      {
        cN: "keyword",
        b: /\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|if|ifdef|ifmacrodef|ifmacrondef|ifndef|include|insertmacro|macro|macroend|makensis|packhdr|searchparse|searchreplace|system|tempfile|undef|verbose|warning)/,
      },
      t,
      n,
      i,
      {
        cN: "params",
        b: "(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)",
      },
      { cN: "class", b: /\w+\:\:\w+/ },
      e.NM,
    ],
  };
});
hljs.registerLanguage("step21", function (e) {
  return {
    aliases: ["p21", "step", "stp"],
    cI: !0,
    l: "[A-Z_][A-Z0-9_.]*",
    k: { keyword: "HEADER ENDSEC DATA" },
    c: [
      { cN: "meta", b: "ISO-10303-21;", relevance: 10 },
      { cN: "meta", b: "END-ISO-10303-21;", relevance: 10 },
      e.CLCM,
      e.CBCM,
      e.C("/\\*\\*!", "\\*/"),
      e.CNM,
      e.inherit(e.ASM, { i: null }),
      e.inherit(e.QSM, { i: null }),
      { cN: "string", b: "'", e: "'" },
      { cN: "symbol", v: [{ b: "#", e: "\\d+", i: "\\W" }] },
    ],
  };
});
hljs.registerLanguage("angelscript", function (e) {
  var i = {
      cN: "built_in",
      b: "\\b(void|bool|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)",
    },
    t = { cN: "symbol", b: "[a-zA-Z0-9_]+@" },
    n = { cN: "keyword", b: "<", e: ">", c: [i, t] };
  return (
    (i.c = [n]),
    (t.c = [n]),
    {
      aliases: ["asc"],
      k: "for in|0 break continue while do|0 return if else case switch namespace is cast or and xor not get|0 in inout|10 out override set|0 private public const default|0 final shared external mixin|10 enum typedef funcdef this super import from interface abstract|0 try catch protected explicit property",
      i: "(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunctions*[^\\(])",
      c: [
        { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE], relevance: 0 },
        { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE], relevance: 0 },
        { cN: "string", b: '"""', e: '"""' },
        e.CLCM,
        e.CBCM,
        {
          bK: "interface namespace",
          e: "{",
          i: "[;.\\-]",
          c: [{ cN: "symbol", b: "[a-zA-Z0-9_]+" }],
        },
        {
          bK: "class",
          e: "{",
          i: "[;.\\-]",
          c: [
            {
              cN: "symbol",
              b: "[a-zA-Z0-9_]+",
              c: [{ b: "[:,]\\s*", c: [{ cN: "symbol", b: "[a-zA-Z0-9_]+" }] }],
            },
          ],
        },
        i,
        t,
        { cN: "literal", b: "\\b(null|true|false)" },
        {
          cN: "number",
          b: "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)",
        },
      ],
    }
  );
});
hljs.registerLanguage("haml", function (e) {
  return {
    cI: !0,
    c: [
      {
        cN: "meta",
        b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
        relevance: 10,
      },
      e.C("^\\s*(!=#|=#|-#|/).*$", !1, { relevance: 0 }),
      { b: "^\\s*(-|=|!=)(?!#)", starts: { e: "\\n", sL: "ruby" } },
      {
        cN: "tag",
        b: "^\\s*%",
        c: [
          { cN: "selector-tag", b: "\\w+" },
          { cN: "selector-id", b: "#[\\w-]+" },
          { cN: "selector-class", b: "\\.[\\w-]+" },
          {
            b: "{\\s*",
            e: "\\s*}",
            c: [
              {
                b: ":\\w+\\s*=>",
                e: ",\\s+",
                rB: !0,
                eW: !0,
                c: [
                  { cN: "attr", b: ":\\w+" },
                  e.ASM,
                  e.QSM,
                  { b: "\\w+", relevance: 0 },
                ],
              },
            ],
          },
          {
            b: "\\(\\s*",
            e: "\\s*\\)",
            eE: !0,
            c: [
              {
                b: "\\w+\\s*=",
                e: "\\s+",
                rB: !0,
                eW: !0,
                c: [
                  { cN: "attr", b: "\\w+", relevance: 0 },
                  e.ASM,
                  e.QSM,
                  { b: "\\w+", relevance: 0 },
                ],
              },
            ],
          },
        ],
      },
      { b: "^\\s*[=~]\\s*" },
      { b: "#{", starts: { e: "}", sL: "ruby" } },
    ],
  };
});
hljs.registerLanguage("lsl", function (E) {
  var T = {
      cN: "string",
      b: '"',
      e: '"',
      c: [{ cN: "subst", b: /\\[tn"\\]/ }],
    },
    A = { cN: "number", b: E.CNR };
  return {
    i: ":",
    c: [
      T,
      { cN: "comment", v: [E.C("//", "$"), E.C("/\\*", "\\*/")], relevance: 0 },
      A,
      {
        cN: "section",
        v: [
          { b: "\\b(?:state|default)\\b" },
          {
            b: "\\b(?:state_(?:entry|exit)|touch(?:_(?:start|end))?|(?:land_)?collision(?:_(?:start|end))?|timer|listen|(?:no_)?sensor|control|(?:not_)?at_(?:rot_)?target|money|email|experience_permissions(?:_denied)?|run_time_permissions|changed|attach|dataserver|moving_(?:start|end)|link_message|(?:on|object)_rez|remote_data|http_re(?:sponse|quest)|path_update|transaction_result)\\b",
          },
        ],
      },
      {
        cN: "built_in",
        b: "\\b(?:ll(?:AgentInExperience|(?:Create|DataSize|Delete|KeyCount|Keys|Read|Update)KeyValue|GetExperience(?:Details|ErrorMessage)|ReturnObjectsBy(?:ID|Owner)|Json(?:2List|[GS]etValue|ValueType)|Sin|Cos|Tan|Atan2|Sqrt|Pow|Abs|Fabs|Frand|Floor|Ceil|Round|Vec(?:Mag|Norm|Dist)|Rot(?:Between|2(?:Euler|Fwd|Left|Up))|(?:Euler|Axes)2Rot|Whisper|(?:Region|Owner)?Say|Shout|Listen(?:Control|Remove)?|Sensor(?:Repeat|Remove)?|Detected(?:Name|Key|Owner|Type|Pos|Vel|Grab|Rot|Group|LinkNumber)|Die|Ground|Wind|(?:[GS]et)(?:AnimationOverride|MemoryLimit|PrimMediaParams|ParcelMusicURL|Object(?:Desc|Name)|PhysicsMaterial|Status|Scale|Color|Alpha|Texture|Pos|Rot|Force|Torque)|ResetAnimationOverride|(?:Scale|Offset|Rotate)Texture|(?:Rot)?Target(?:Remove)?|(?:Stop)?MoveToTarget|Apply(?:Rotational)?Impulse|Set(?:KeyframedMotion|ContentType|RegionPos|(?:Angular)?Velocity|Buoyancy|HoverHeight|ForceAndTorque|TimerEvent|ScriptState|Damage|TextureAnim|Sound(?:Queueing|Radius)|Vehicle(?:Type|(?:Float|Vector|Rotation)Param)|(?:Touch|Sit)?Text|Camera(?:Eye|At)Offset|PrimitiveParams|ClickAction|Link(?:Alpha|Color|PrimitiveParams(?:Fast)?|Texture(?:Anim)?|Camera|Media)|RemoteScriptAccessPin|PayPrice|LocalRot)|ScaleByFactor|Get(?:(?:Max|Min)ScaleFactor|ClosestNavPoint|StaticPath|SimStats|Env|PrimitiveParams|Link(?:PrimitiveParams|Number(?:OfSides)?|Key|Name|Media)|HTTPHeader|FreeURLs|Object(?:Details|PermMask|PrimCount)|Parcel(?:MaxPrims|Details|Prim(?:Count|Owners))|Attached(?:List)?|(?:SPMax|Free|Used)Memory|Region(?:Name|TimeDilation|FPS|Corner|AgentCount)|Root(?:Position|Rotation)|UnixTime|(?:Parcel|Region)Flags|(?:Wall|GMT)clock|SimulatorHostname|BoundingBox|GeometricCenter|Creator|NumberOf(?:Prims|NotecardLines|Sides)|Animation(?:List)?|(?:Camera|Local)(?:Pos|Rot)|Vel|Accel|Omega|Time(?:stamp|OfDay)|(?:Object|CenterOf)?Mass|MassMKS|Energy|Owner|(?:Owner)?Key|SunDirection|Texture(?:Offset|Scale|Rot)|Inventory(?:Number|Name|Key|Type|Creator|PermMask)|Permissions(?:Key)?|StartParameter|List(?:Length|EntryType)|Date|Agent(?:Size|Info|Language|List)|LandOwnerAt|NotecardLine|Script(?:Name|State))|(?:Get|Reset|GetAndReset)Time|PlaySound(?:Slave)?|LoopSound(?:Master|Slave)?|(?:Trigger|Stop|Preload)Sound|(?:(?:Get|Delete)Sub|Insert)String|To(?:Upper|Lower)|Give(?:InventoryList|Money)|RezObject|(?:Stop)?LookAt|Sleep|CollisionFilter|(?:Take|Release)Controls|DetachFromAvatar|AttachToAvatar(?:Temp)?|InstantMessage|(?:GetNext)?Email|StopHover|MinEventDelay|RotLookAt|String(?:Length|Trim)|(?:Start|Stop)Animation|TargetOmega|Request(?:Experience)?Permissions|(?:Create|Break)Link|BreakAllLinks|(?:Give|Remove)Inventory|Water|PassTouches|Request(?:Agent|Inventory)Data|TeleportAgent(?:Home|GlobalCoords)?|ModifyLand|CollisionSound|ResetScript|MessageLinked|PushObject|PassCollisions|AxisAngle2Rot|Rot2(?:Axis|Angle)|A(?:cos|sin)|AngleBetween|AllowInventoryDrop|SubStringIndex|List2(?:CSV|Integer|Json|Float|String|Key|Vector|Rot|List(?:Strided)?)|DeleteSubList|List(?:Statistics|Sort|Randomize|(?:Insert|Find|Replace)List)|EdgeOfWorld|AdjustSoundVolume|Key2Name|TriggerSoundLimited|EjectFromLand|(?:CSV|ParseString)2List|OverMyLand|SameGroup|UnSit|Ground(?:Slope|Normal|Contour)|GroundRepel|(?:Set|Remove)VehicleFlags|SitOnLink|(?:AvatarOn)?(?:Link)?SitTarget|Script(?:Danger|Profiler)|Dialog|VolumeDetect|ResetOtherScript|RemoteLoadScriptPin|(?:Open|Close)RemoteDataChannel|SendRemoteData|RemoteDataReply|(?:Integer|String)ToBase64|XorBase64|Log(?:10)?|Base64To(?:String|Integer)|ParseStringKeepNulls|RezAtRoot|RequestSimulatorData|ForceMouselook|(?:Load|Release|(?:E|Une)scape)URL|ParcelMedia(?:CommandList|Query)|ModPow|MapDestination|(?:RemoveFrom|AddTo|Reset)Land(?:Pass|Ban)List|(?:Set|Clear)CameraParams|HTTP(?:Request|Response)|TextBox|DetectedTouch(?:UV|Face|Pos|(?:N|Bin)ormal|ST)|(?:MD5|SHA1|DumpList2)String|Request(?:Secure)?URL|Clear(?:Prim|Link)Media|(?:Link)?ParticleSystem|(?:Get|Request)(?:Username|DisplayName)|RegionSayTo|CastRay|GenerateKey|TransferLindenDollars|ManageEstateAccess|(?:Create|Delete)Character|ExecCharacterCmd|Evade|FleeFrom|NavigateTo|PatrolPoints|Pursue|UpdateCharacter|WanderWithin))\\b",
      },
      {
        cN: "literal",
        v: [
          { b: "\\b(?:PI|TWO_PI|PI_BY_TWO|DEG_TO_RAD|RAD_TO_DEG|SQRT2)\\b" },
          {
            b: "\\b(?:XP_ERROR_(?:EXPERIENCES_DISABLED|EXPERIENCE_(?:DISABLED|SUSPENDED)|INVALID_(?:EXPERIENCE|PARAMETERS)|KEY_NOT_FOUND|MATURITY_EXCEEDED|NONE|NOT_(?:FOUND|PERMITTED(?:_LAND)?)|NO_EXPERIENCE|QUOTA_EXCEEDED|RETRY_UPDATE|STORAGE_EXCEPTION|STORE_DISABLED|THROTTLED|UNKNOWN_ERROR)|JSON_APPEND|STATUS_(?:PHYSICS|ROTATE_[XYZ]|PHANTOM|SANDBOX|BLOCK_GRAB(?:_OBJECT)?|(?:DIE|RETURN)_AT_EDGE|CAST_SHADOWS|OK|MALFORMED_PARAMS|TYPE_MISMATCH|BOUNDS_ERROR|NOT_(?:FOUND|SUPPORTED)|INTERNAL_ERROR|WHITELIST_FAILED)|AGENT(?:_(?:BY_(?:LEGACY_|USER)NAME|FLYING|ATTACHMENTS|SCRIPTED|MOUSELOOK|SITTING|ON_OBJECT|AWAY|WALKING|IN_AIR|TYPING|CROUCHING|BUSY|ALWAYS_RUN|AUTOPILOT|LIST_(?:PARCEL(?:_OWNER)?|REGION)))?|CAMERA_(?:PITCH|DISTANCE|BEHINDNESS_(?:ANGLE|LAG)|(?:FOCUS|POSITION)(?:_(?:THRESHOLD|LOCKED|LAG))?|FOCUS_OFFSET|ACTIVE)|ANIM_ON|LOOP|REVERSE|PING_PONG|SMOOTH|ROTATE|SCALE|ALL_SIDES|LINK_(?:ROOT|SET|ALL_(?:OTHERS|CHILDREN)|THIS)|ACTIVE|PASS(?:IVE|_(?:ALWAYS|IF_NOT_HANDLED|NEVER))|SCRIPTED|CONTROL_(?:FWD|BACK|(?:ROT_)?(?:LEFT|RIGHT)|UP|DOWN|(?:ML_)?LBUTTON)|PERMISSION_(?:RETURN_OBJECTS|DEBIT|OVERRIDE_ANIMATIONS|SILENT_ESTATE_MANAGEMENT|TAKE_CONTROLS|TRIGGER_ANIMATION|ATTACH|CHANGE_LINKS|(?:CONTROL|TRACK)_CAMERA|TELEPORT)|INVENTORY_(?:TEXTURE|SOUND|OBJECT|SCRIPT|LANDMARK|CLOTHING|NOTECARD|BODYPART|ANIMATION|GESTURE|ALL|NONE)|CHANGED_(?:INVENTORY|COLOR|SHAPE|SCALE|TEXTURE|LINK|ALLOWED_DROP|OWNER|REGION(?:_START)?|TELEPORT|MEDIA)|OBJECT_(?:CLICK_ACTION|HOVER_HEIGHT|LAST_OWNER_ID|(?:PHYSICS|SERVER|STREAMING)_COST|UNKNOWN_DETAIL|CHARACTER_TIME|PHANTOM|PHYSICS|TEMP_(?:ATTACHED|ON_REZ)|NAME|DESC|POS|PRIM_(?:COUNT|EQUIVALENCE)|RETURN_(?:PARCEL(?:_OWNER)?|REGION)|REZZER_KEY|ROO?T|VELOCITY|OMEGA|OWNER|GROUP(?:_TAG)?|CREATOR|ATTACHED_(?:POINT|SLOTS_AVAILABLE)|RENDER_WEIGHT|(?:BODY_SHAPE|PATHFINDING)_TYPE|(?:RUNNING|TOTAL)_SCRIPT_COUNT|TOTAL_INVENTORY_COUNT|SCRIPT_(?:MEMORY|TIME))|TYPE_(?:INTEGER|FLOAT|STRING|KEY|VECTOR|ROTATION|INVALID)|(?:DEBUG|PUBLIC)_CHANNEL|ATTACH_(?:AVATAR_CENTER|CHEST|HEAD|BACK|PELVIS|MOUTH|CHIN|NECK|NOSE|BELLY|[LR](?:SHOULDER|HAND|FOOT|EAR|EYE|[UL](?:ARM|LEG)|HIP)|(?:LEFT|RIGHT)_PEC|HUD_(?:CENTER_[12]|TOP_(?:RIGHT|CENTER|LEFT)|BOTTOM(?:_(?:RIGHT|LEFT))?)|[LR]HAND_RING1|TAIL_(?:BASE|TIP)|[LR]WING|FACE_(?:JAW|[LR]EAR|[LR]EYE|TOUNGE)|GROIN|HIND_[LR]FOOT)|LAND_(?:LEVEL|RAISE|LOWER|SMOOTH|NOISE|REVERT)|DATA_(?:ONLINE|NAME|BORN|SIM_(?:POS|STATUS|RATING)|PAYINFO)|PAYMENT_INFO_(?:ON_FILE|USED)|REMOTE_DATA_(?:CHANNEL|REQUEST|REPLY)|PSYS_(?:PART_(?:BF_(?:ZERO|ONE(?:_MINUS_(?:DEST_COLOR|SOURCE_(ALPHA|COLOR)))?|DEST_COLOR|SOURCE_(ALPHA|COLOR))|BLEND_FUNC_(DEST|SOURCE)|FLAGS|(?:START|END)_(?:COLOR|ALPHA|SCALE|GLOW)|MAX_AGE|(?:RIBBON|WIND|INTERP_(?:COLOR|SCALE)|BOUNCE|FOLLOW_(?:SRC|VELOCITY)|TARGET_(?:POS|LINEAR)|EMISSIVE)_MASK)|SRC_(?:MAX_AGE|PATTERN|ANGLE_(?:BEGIN|END)|BURST_(?:RATE|PART_COUNT|RADIUS|SPEED_(?:MIN|MAX))|ACCEL|TEXTURE|TARGET_KEY|OMEGA|PATTERN_(?:DROP|EXPLODE|ANGLE(?:_CONE(?:_EMPTY)?)?)))|VEHICLE_(?:REFERENCE_FRAME|TYPE_(?:NONE|SLED|CAR|BOAT|AIRPLANE|BALLOON)|(?:LINEAR|ANGULAR)_(?:FRICTION_TIMESCALE|MOTOR_DIRECTION)|LINEAR_MOTOR_OFFSET|HOVER_(?:HEIGHT|EFFICIENCY|TIMESCALE)|BUOYANCY|(?:LINEAR|ANGULAR)_(?:DEFLECTION_(?:EFFICIENCY|TIMESCALE)|MOTOR_(?:DECAY_)?TIMESCALE)|VERTICAL_ATTRACTION_(?:EFFICIENCY|TIMESCALE)|BANKING_(?:EFFICIENCY|MIX|TIMESCALE)|FLAG_(?:NO_DEFLECTION_UP|LIMIT_(?:ROLL_ONLY|MOTOR_UP)|HOVER_(?:(?:WATER|TERRAIN|UP)_ONLY|GLOBAL_HEIGHT)|MOUSELOOK_(?:STEER|BANK)|CAMERA_DECOUPLED))|PRIM_(?:ALLOW_UNSIT|ALPHA_MODE(?:_(?:BLEND|EMISSIVE|MASK|NONE))?|NORMAL|SPECULAR|TYPE(?:_(?:BOX|CYLINDER|PRISM|SPHERE|TORUS|TUBE|RING|SCULPT))?|HOLE_(?:DEFAULT|CIRCLE|SQUARE|TRIANGLE)|MATERIAL(?:_(?:STONE|METAL|GLASS|WOOD|FLESH|PLASTIC|RUBBER))?|SHINY_(?:NONE|LOW|MEDIUM|HIGH)|BUMP_(?:NONE|BRIGHT|DARK|WOOD|BARK|BRICKS|CHECKER|CONCRETE|TILE|STONE|DISKS|GRAVEL|BLOBS|SIDING|LARGETILE|STUCCO|SUCTION|WEAVE)|TEXGEN_(?:DEFAULT|PLANAR)|SCRIPTED_SIT_ONLY|SCULPT_(?:TYPE_(?:SPHERE|TORUS|PLANE|CYLINDER|MASK)|FLAG_(?:MIRROR|INVERT))|PHYSICS(?:_(?:SHAPE_(?:CONVEX|NONE|PRIM|TYPE)))?|(?:POS|ROT)_LOCAL|SLICE|TEXT|FLEXIBLE|POINT_LIGHT|TEMP_ON_REZ|PHANTOM|POSITION|SIT_TARGET|SIZE|ROTATION|TEXTURE|NAME|OMEGA|DESC|LINK_TARGET|COLOR|BUMP_SHINY|FULLBRIGHT|TEXGEN|GLOW|MEDIA_(?:ALT_IMAGE_ENABLE|CONTROLS|(?:CURRENT|HOME)_URL|AUTO_(?:LOOP|PLAY|SCALE|ZOOM)|FIRST_CLICK_INTERACT|(?:WIDTH|HEIGHT)_PIXELS|WHITELIST(?:_ENABLE)?|PERMS_(?:INTERACT|CONTROL)|PARAM_MAX|CONTROLS_(?:STANDARD|MINI)|PERM_(?:NONE|OWNER|GROUP|ANYONE)|MAX_(?:URL_LENGTH|WHITELIST_(?:SIZE|COUNT)|(?:WIDTH|HEIGHT)_PIXELS)))|MASK_(?:BASE|OWNER|GROUP|EVERYONE|NEXT)|PERM_(?:TRANSFER|MODIFY|COPY|MOVE|ALL)|PARCEL_(?:MEDIA_COMMAND_(?:STOP|PAUSE|PLAY|LOOP|TEXTURE|URL|TIME|AGENT|UNLOAD|AUTO_ALIGN|TYPE|SIZE|DESC|LOOP_SET)|FLAG_(?:ALLOW_(?:FLY|(?:GROUP_)?SCRIPTS|LANDMARK|TERRAFORM|DAMAGE|CREATE_(?:GROUP_)?OBJECTS)|USE_(?:ACCESS_(?:GROUP|LIST)|BAN_LIST|LAND_PASS_LIST)|LOCAL_SOUND_ONLY|RESTRICT_PUSHOBJECT|ALLOW_(?:GROUP|ALL)_OBJECT_ENTRY)|COUNT_(?:TOTAL|OWNER|GROUP|OTHER|SELECTED|TEMP)|DETAILS_(?:NAME|DESC|OWNER|GROUP|AREA|ID|SEE_AVATARS))|LIST_STAT_(?:MAX|MIN|MEAN|MEDIAN|STD_DEV|SUM(?:_SQUARES)?|NUM_COUNT|GEOMETRIC_MEAN|RANGE)|PAY_(?:HIDE|DEFAULT)|REGION_FLAG_(?:ALLOW_DAMAGE|FIXED_SUN|BLOCK_TERRAFORM|SANDBOX|DISABLE_(?:COLLISIONS|PHYSICS)|BLOCK_FLY|ALLOW_DIRECT_TELEPORT|RESTRICT_PUSHOBJECT)|HTTP_(?:METHOD|MIMETYPE|BODY_(?:MAXLENGTH|TRUNCATED)|CUSTOM_HEADER|PRAGMA_NO_CACHE|VERBOSE_THROTTLE|VERIFY_CERT)|SIT_(?:INVALID_(?:AGENT|LINK_OBJECT)|NO(?:T_EXPERIENCE|_(?:ACCESS|EXPERIENCE_PERMISSION|SIT_TARGET)))|STRING_(?:TRIM(?:_(?:HEAD|TAIL))?)|CLICK_ACTION_(?:NONE|TOUCH|SIT|BUY|PAY|OPEN(?:_MEDIA)?|PLAY|ZOOM)|TOUCH_INVALID_FACE|PROFILE_(?:NONE|SCRIPT_MEMORY)|RC_(?:DATA_FLAGS|DETECT_PHANTOM|GET_(?:LINK_NUM|NORMAL|ROOT_KEY)|MAX_HITS|REJECT_(?:TYPES|AGENTS|(?:NON)?PHYSICAL|LAND))|RCERR_(?:CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN)|ESTATE_ACCESS_(?:ALLOWED_(?:AGENT|GROUP)_(?:ADD|REMOVE)|BANNED_AGENT_(?:ADD|REMOVE))|DENSITY|FRICTION|RESTITUTION|GRAVITY_MULTIPLIER|KFM_(?:COMMAND|CMD_(?:PLAY|STOP|PAUSE)|MODE|FORWARD|LOOP|PING_PONG|REVERSE|DATA|ROTATION|TRANSLATION)|ERR_(?:GENERIC|PARCEL_PERMISSIONS|MALFORMED_PARAMS|RUNTIME_PERMISSIONS|THROTTLED)|CHARACTER_(?:CMD_(?:(?:SMOOTH_)?STOP|JUMP)|DESIRED_(?:TURN_)?SPEED|RADIUS|STAY_WITHIN_PARCEL|LENGTH|ORIENTATION|ACCOUNT_FOR_SKIPPED_FRAMES|AVOIDANCE_MODE|TYPE(?:_(?:[ABCD]|NONE))?|MAX_(?:DECEL|TURN_RADIUS|(?:ACCEL|SPEED)))|PURSUIT_(?:OFFSET|FUZZ_FACTOR|GOAL_TOLERANCE|INTERCEPT)|REQUIRE_LINE_OF_SIGHT|FORCE_DIRECT_PATH|VERTICAL|HORIZONTAL|AVOID_(?:CHARACTERS|DYNAMIC_OBSTACLES|NONE)|PU_(?:EVADE_(?:HIDDEN|SPOTTED)|FAILURE_(?:DYNAMIC_PATHFINDING_DISABLED|INVALID_(?:GOAL|START)|NO_(?:NAVMESH|VALID_DESTINATION)|OTHER|TARGET_GONE|(?:PARCEL_)?UNREACHABLE)|(?:GOAL|SLOWDOWN_DISTANCE)_REACHED)|TRAVERSAL_TYPE(?:_(?:FAST|NONE|SLOW))?|CONTENT_TYPE_(?:ATOM|FORM|HTML|JSON|LLSD|RSS|TEXT|XHTML|XML)|GCNP_(?:RADIUS|STATIC)|(?:PATROL|WANDER)_PAUSE_AT_WAYPOINTS|OPT_(?:AVATAR|CHARACTER|EXCLUSION_VOLUME|LEGACY_LINKSET|MATERIAL_VOLUME|OTHER|STATIC_OBSTACLE|WALKABLE)|SIM_STAT_PCT_CHARS_STEPPED)\\b",
          },
          { b: "\\b(?:FALSE|TRUE)\\b" },
          { b: "\\b(?:ZERO_ROTATION)\\b" },
          {
            b: "\\b(?:EOF|JSON_(?:ARRAY|DELETE|FALSE|INVALID|NULL|NUMBER|OBJECT|STRING|TRUE)|NULL_KEY|TEXTURE_(?:BLANK|DEFAULT|MEDIA|PLYWOOD|TRANSPARENT)|URL_REQUEST_(?:GRANTED|DENIED))\\b",
          },
          { b: "\\b(?:ZERO_VECTOR|TOUCH_INVALID_(?:TEXCOORD|VECTOR))\\b" },
        ],
      },
      {
        cN: "type",
        b: "\\b(?:integer|float|string|key|vector|quaternion|rotation|list)\\b",
      },
    ],
  };
});
hljs.registerLanguage("tap", function (e) {
  return {
    cI: !0,
    c: [
      e.HCM,
      {
        cN: "meta",
        v: [{ b: "^TAP version (\\d+)$" }, { b: "^1\\.\\.(\\d+)$" }],
      },
      { b: "(s+)?---$", e: "\\.\\.\\.$", sL: "yaml", relevance: 0 },
      { cN: "number", b: " (\\d+) " },
      { cN: "symbol", v: [{ b: "^ok" }, { b: "^not ok" }] },
    ],
  };
});
hljs.registerLanguage("leaf", function (e) {
  return {
    c: [
      {
        cN: "function",
        b: "#+[A-Za-z_0-9]*\\(",
        e: " {",
        rB: !0,
        eE: !0,
        c: [
          { cN: "keyword", b: "#+" },
          { cN: "title", b: "[A-Za-z_][A-Za-z_0-9]*" },
          {
            cN: "params",
            b: "\\(",
            e: "\\)",
            endsParent: !0,
            c: [
              { cN: "string", b: '"', e: '"' },
              { cN: "variable", b: "[A-Za-z_][A-Za-z_0-9]*" },
            ],
          },
        ],
      },
    ],
  };
});
hljs.registerLanguage("mizar", function (e) {
  return {
    k: "environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity",
    c: [e.C("::", "$")],
  };
});
hljs.registerLanguage("swift", function (e) {
  var i = {
      keyword:
        "#available #colorLiteral #column #else #elseif #endif #file #fileLiteral #function #if #imageLiteral #line #selector #sourceLocation _ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
      literal: "true false nil",
      built_in:
        "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip",
    },
    t = e.C("/\\*", "\\*/", { c: ["self"] }),
    n = { cN: "subst", b: /\\\(/, e: "\\)", k: i, c: [] },
    r = {
      cN: "string",
      c: [e.BE, n],
      v: [
        { b: /"""/, e: /"""/ },
        { b: /"/, e: /"/ },
      ],
    },
    a = {
      cN: "number",
      b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
      relevance: 0,
    };
  return (
    (n.c = [a]),
    {
      k: i,
      c: [
        r,
        e.CLCM,
        t,
        { cN: "type", b: "\\b[A-Z][\\wÀ-ʸ']*[!?]" },
        { cN: "type", b: "\\b[A-Z][\\wÀ-ʸ']*", relevance: 0 },
        a,
        {
          cN: "function",
          bK: "func",
          e: "{",
          eE: !0,
          c: [
            e.inherit(e.TM, { b: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
            { b: /</, e: />/ },
            {
              cN: "params",
              b: /\(/,
              e: /\)/,
              endsParent: !0,
              k: i,
              c: ["self", a, r, e.CBCM, { b: ":" }],
              i: /["']/,
            },
          ],
          i: /\[|%/,
        },
        {
          cN: "class",
          bK: "struct protocol class extension enum",
          k: i,
          e: "\\{",
          eE: !0,
          c: [e.inherit(e.TM, { b: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/ })],
        },
        {
          cN: "meta",
          b: "(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain|@dynamicMemberLookup|@propertyWrapper)",
        },
        { bK: "import", e: /$/, c: [e.CLCM, t] },
      ],
    }
  );
});
hljs.registerLanguage("elm", function (e) {
  var i = { v: [e.C("--", "$"), e.C("{-", "-}", { c: ["self"] })] },
    t = { cN: "type", b: "\\b[A-Z][\\w']*", relevance: 0 },
    c = {
      b: "\\(",
      e: "\\)",
      i: '"',
      c: [{ cN: "type", b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?" }, i],
    };
  return {
    k: "let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
    c: [
      {
        bK: "port effect module",
        e: "exposing",
        k: "port effect module where command subscription exposing",
        c: [c, i],
        i: "\\W\\.|;",
      },
      {
        b: "import",
        e: "$",
        k: "import as exposing",
        c: [c, i],
        i: "\\W\\.|;",
      },
      {
        b: "type",
        e: "$",
        k: "type alias",
        c: [t, c, { b: "{", e: "}", c: c.c }, i],
      },
      { bK: "infix infixl infixr", e: "$", c: [e.CNM, i] },
      { b: "port", e: "$", k: "port", c: [i] },
      { cN: "string", b: "'\\\\?.", e: "'", i: "." },
      e.QSM,
      e.CNM,
      t,
      e.inherit(e.TM, { b: "^[_a-z][\\w']*" }),
      i,
      { b: "->|<-" },
    ],
    i: /;/,
  };
});
hljs.registerLanguage("shell", function (s) {
  return {
    aliases: ["console"],
    c: [
      {
        cN: "meta",
        b: "^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",
        starts: { e: "$", sL: "bash" },
      },
    ],
  };
});
hljs.registerLanguage("smalltalk", function (e) {
  var a = "[a-z][a-zA-Z0-9_]*",
    s = { cN: "string", b: "\\$.{1}" },
    l = { cN: "symbol", b: "#" + e.UIR };
  return {
    aliases: ["st"],
    k: "self super nil true false thisContext",
    c: [
      e.C('"', '"'),
      e.ASM,
      { cN: "type", b: "\\b[A-Z][A-Za-z0-9_]*", relevance: 0 },
      { b: a + ":", relevance: 0 },
      e.CNM,
      l,
      s,
      {
        b: "\\|[ ]*" + a + "([ ]+" + a + ")*[ ]*\\|",
        rB: !0,
        e: /\|/,
        i: /\S/,
        c: [{ b: "(\\|[ ]*)?" + a }],
      },
      { b: "\\#\\(", e: "\\)", c: [e.ASM, s, e.CNM, l] },
    ],
  };
});
hljs.registerLanguage("gauss", function (o) {
  function e(e, t, a) {
    var r = o.inherit(
      { cN: "function", bK: e, e: t, eE: !0, c: [].concat(d) },
      a || {}
    );
    return r.c.push(l), r.c.push(o.CNM), r.c.push(o.CBCM), r.c.push(n), r;
  }
  var t = {
      keyword:
        "bool break call callexe checkinterrupt clear clearg closeall cls comlog compile continue create debug declare delete disable dlibrary dllcall do dos ed edit else elseif enable end endfor endif endp endo errorlog errorlogat expr external fn for format goto gosub graph if keyword let lib library line load loadarray loadexe loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow matrix msym ndpclex new open output outwidth plot plotsym pop prcsn print printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen scroll setarray show sparse stop string struct system trace trap threadfor threadendfor threadbegin threadjoin threadstat threadend until use while winprint ne ge le gt lt and xor or not eq eqv",
      built_in:
        "abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 indicesf indicesfn indnv indsav integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics cdfEmpirical dot h5create h5open h5read h5readAttribute h5write h5writeAttribute ldl plotAddErrorBar plotAddSurface plotCDFEmpirical plotSetColormap plotSetContourLabels plotSetLegendFont plotSetTextInterpreter plotSetXTicCount plotSetYTicCount plotSetZLevels powerm strjoin sylvester strtrim",
      literal:
        "DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES DB_TRANSACTIONS DB_UNICODE DB_VIEWS __STDIN __STDOUT __STDERR __FILE_DIR",
    },
    n = o.C("@", "@"),
    a = {
      cN: "meta",
      b: "#",
      e: "$",
      k: {
        "meta-keyword":
          "define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline",
      },
      c: [
        { b: /\\\n/, relevance: 0 },
        {
          bK: "include",
          e: "$",
          k: { "meta-keyword": "include" },
          c: [{ cN: "meta-string", b: '"', e: '"', i: "\\n" }],
        },
        o.CLCM,
        o.CBCM,
        n,
      ],
    },
    r = {
      b: /\bstruct\s+/,
      e: /\s/,
      k: "struct",
      c: [{ cN: "type", b: o.UIR, relevance: 0 }],
    },
    d = [
      {
        cN: "params",
        b: /\(/,
        e: /\)/,
        eB: !0,
        eE: !0,
        eW: !0,
        relevance: 0,
        c: [{ cN: "literal", b: /\.\.\./ }, o.CNM, o.CBCM, n, r],
      },
    ],
    l = { cN: "title", b: o.UIR, relevance: 0 },
    s = {
      cN: "built_in",
      b: "\\b(" + t.built_in.split(" ").join("|") + ")\\b",
    },
    i = { cN: "string", b: '"', e: '"', c: [o.BE], relevance: 0 },
    c = {
      b: o.UIR + "\\s*\\(",
      rB: !0,
      k: t,
      relevance: 0,
      c: [{ bK: t.keyword }, s, { cN: "built_in", b: o.UIR, relevance: 0 }],
    },
    p = {
      b: /\(/,
      e: /\)/,
      relevance: 0,
      k: { built_in: t.built_in, literal: t.literal },
      c: [o.CNM, o.CBCM, n, s, c, i, "self"],
    };
  return (
    c.c.push(p),
    {
      aliases: ["gss"],
      cI: !0,
      k: t,
      i: /(\{[%#]|[%#]\}| <- )/,
      c: [
        o.CNM,
        o.CLCM,
        o.CBCM,
        n,
        i,
        a,
        {
          cN: "keyword",
          b: /\bexternal (matrix|string|array|sparse matrix|struct|proc|keyword|fn)/,
        },
        e("proc keyword", ";"),
        e("fn", "="),
        { bK: "for threadfor", e: /;/, relevance: 0, c: [o.CBCM, n, p] },
        {
          v: [{ b: o.UIR + "\\." + o.UIR }, { b: o.UIR + "\\s*=" }],
          relevance: 0,
        },
        c,
        r,
      ],
    }
  );
});
hljs.registerLanguage("sqf", function (e) {
  var t = {
      cN: "string",
      v: [
        { b: '"', e: '"', c: [{ b: '""', relevance: 0 }] },
        { b: "'", e: "'", c: [{ b: "''", relevance: 0 }] },
      ],
    },
    a = {
      cN: "meta",
      b: /#\s*[a-z]+\b/,
      e: /$/,
      k: { "meta-keyword": "define undef ifdef ifndef else endif include" },
      c: [
        { b: /\\\n/, relevance: 0 },
        e.inherit(t, { cN: "meta-string" }),
        { cN: "meta-string", b: /<[^\n>]*>/, e: /$/, i: "\\n" },
        e.CLCM,
        e.CBCM,
      ],
    };
  return {
    aliases: ["sqf"],
    cI: !0,
    k: {
      keyword:
        "case catch default do else exit exitWith for forEach from if private switch then throw to try waitUntil while with",
      built_in:
        "abs accTime acos action actionIDs actionKeys actionKeysImages actionKeysNames actionKeysNamesArray actionName actionParams activateAddons activatedAddons activateKey add3DENConnection add3DENEventHandler add3DENLayer addAction addBackpack addBackpackCargo addBackpackCargoGlobal addBackpackGlobal addCamShake addCuratorAddons addCuratorCameraArea addCuratorEditableObjects addCuratorEditingArea addCuratorPoints addEditorObject addEventHandler addForce addGoggles addGroupIcon addHandgunItem addHeadgear addItem addItemCargo addItemCargoGlobal addItemPool addItemToBackpack addItemToUniform addItemToVest addLiveStats addMagazine addMagazineAmmoCargo addMagazineCargo addMagazineCargoGlobal addMagazineGlobal addMagazinePool addMagazines addMagazineTurret addMenu addMenuItem addMissionEventHandler addMPEventHandler addMusicEventHandler addOwnedMine addPlayerScores addPrimaryWeaponItem addPublicVariableEventHandler addRating addResources addScore addScoreSide addSecondaryWeaponItem addSwitchableUnit addTeamMember addToRemainsCollector addTorque addUniform addVehicle addVest addWaypoint addWeapon addWeaponCargo addWeaponCargoGlobal addWeaponGlobal addWeaponItem addWeaponPool addWeaponTurret admin agent agents AGLToASL aimedAtTarget aimPos airDensityRTD airplaneThrottle airportSide AISFinishHeal alive all3DENEntities allAirports allControls allCurators allCutLayers allDead allDeadMen allDisplays allGroups allMapMarkers allMines allMissionObjects allow3DMode allowCrewInImmobile allowCuratorLogicIgnoreAreas allowDamage allowDammage allowFileOperations allowFleeing allowGetIn allowSprint allPlayers allSimpleObjects allSites allTurrets allUnits allUnitsUAV allVariables ammo ammoOnPylon and animate animateBay animateDoor animatePylon animateSource animationNames animationPhase animationSourcePhase animationState append apply armoryPoints arrayIntersect asin ASLToAGL ASLToATL assert assignAsCargo assignAsCargoIndex assignAsCommander assignAsDriver assignAsGunner assignAsTurret assignCurator assignedCargo assignedCommander assignedDriver assignedGunner assignedItems assignedTarget assignedTeam assignedVehicle assignedVehicleRole assignItem assignTeam assignToAirport atan atan2 atg ATLToASL attachedObject attachedObjects attachedTo attachObject attachTo attackEnabled backpack backpackCargo backpackContainer backpackItems backpackMagazines backpackSpaceFor behaviour benchmark binocular boundingBox boundingBoxReal boundingCenter breakOut breakTo briefingName buildingExit buildingPos buttonAction buttonSetAction cadetMode call callExtension camCommand camCommit camCommitPrepared camCommitted camConstuctionSetParams camCreate camDestroy cameraEffect cameraEffectEnableHUD cameraInterest cameraOn cameraView campaignConfigFile camPreload camPreloaded camPrepareBank camPrepareDir camPrepareDive camPrepareFocus camPrepareFov camPrepareFovRange camPreparePos camPrepareRelPos camPrepareTarget camSetBank camSetDir camSetDive camSetFocus camSetFov camSetFovRange camSetPos camSetRelPos camSetTarget camTarget camUseNVG canAdd canAddItemToBackpack canAddItemToUniform canAddItemToVest cancelSimpleTaskDestination canFire canMove canSlingLoad canStand canSuspend canTriggerDynamicSimulation canUnloadInCombat canVehicleCargo captive captiveNum cbChecked cbSetChecked ceil channelEnabled cheatsEnabled checkAIFeature checkVisibility className clearAllItemsFromBackpack clearBackpackCargo clearBackpackCargoGlobal clearGroupIcons clearItemCargo clearItemCargoGlobal clearItemPool clearMagazineCargo clearMagazineCargoGlobal clearMagazinePool clearOverlay clearRadio clearWeaponCargo clearWeaponCargoGlobal clearWeaponPool clientOwner closeDialog closeDisplay closeOverlay collapseObjectTree collect3DENHistory collectiveRTD combatMode commandArtilleryFire commandChat commander commandFire commandFollow commandFSM commandGetOut commandingMenu commandMove commandRadio commandStop commandSuppressiveFire commandTarget commandWatch comment commitOverlay compile compileFinal completedFSM composeText configClasses configFile configHierarchy configName configProperties configSourceAddonList configSourceMod configSourceModList confirmSensorTarget connectTerminalToUAV controlsGroupCtrl copyFromClipboard copyToClipboard copyWaypoints cos count countEnemy countFriendly countSide countType countUnknown create3DENComposition create3DENEntity createAgent createCenter createDialog createDiaryLink createDiaryRecord createDiarySubject createDisplay createGearDialog createGroup createGuardedPoint createLocation createMarker createMarkerLocal createMenu createMine createMissionDisplay createMPCampaignDisplay createSimpleObject createSimpleTask createSite createSoundSource createTask createTeam createTrigger createUnit createVehicle createVehicleCrew createVehicleLocal crew ctAddHeader ctAddRow ctClear ctCurSel ctData ctFindHeaderRows ctFindRowHeader ctHeaderControls ctHeaderCount ctRemoveHeaders ctRemoveRows ctrlActivate ctrlAddEventHandler ctrlAngle ctrlAutoScrollDelay ctrlAutoScrollRewind ctrlAutoScrollSpeed ctrlChecked ctrlClassName ctrlCommit ctrlCommitted ctrlCreate ctrlDelete ctrlEnable ctrlEnabled ctrlFade ctrlHTMLLoaded ctrlIDC ctrlIDD ctrlMapAnimAdd ctrlMapAnimClear ctrlMapAnimCommit ctrlMapAnimDone ctrlMapCursor ctrlMapMouseOver ctrlMapScale ctrlMapScreenToWorld ctrlMapWorldToScreen ctrlModel ctrlModelDirAndUp ctrlModelScale ctrlParent ctrlParentControlsGroup ctrlPosition ctrlRemoveAllEventHandlers ctrlRemoveEventHandler ctrlScale ctrlSetActiveColor ctrlSetAngle ctrlSetAutoScrollDelay ctrlSetAutoScrollRewind ctrlSetAutoScrollSpeed ctrlSetBackgroundColor ctrlSetChecked ctrlSetEventHandler ctrlSetFade ctrlSetFocus ctrlSetFont ctrlSetFontH1 ctrlSetFontH1B ctrlSetFontH2 ctrlSetFontH2B ctrlSetFontH3 ctrlSetFontH3B ctrlSetFontH4 ctrlSetFontH4B ctrlSetFontH5 ctrlSetFontH5B ctrlSetFontH6 ctrlSetFontH6B ctrlSetFontHeight ctrlSetFontHeightH1 ctrlSetFontHeightH2 ctrlSetFontHeightH3 ctrlSetFontHeightH4 ctrlSetFontHeightH5 ctrlSetFontHeightH6 ctrlSetFontHeightSecondary ctrlSetFontP ctrlSetFontPB ctrlSetFontSecondary ctrlSetForegroundColor ctrlSetModel ctrlSetModelDirAndUp ctrlSetModelScale ctrlSetPixelPrecision ctrlSetPosition ctrlSetScale ctrlSetStructuredText ctrlSetText ctrlSetTextColor ctrlSetTooltip ctrlSetTooltipColorBox ctrlSetTooltipColorShade ctrlSetTooltipColorText ctrlShow ctrlShown ctrlText ctrlTextHeight ctrlTextWidth ctrlType ctrlVisible ctRowControls ctRowCount ctSetCurSel ctSetData ctSetHeaderTemplate ctSetRowTemplate ctSetValue ctValue curatorAddons curatorCamera curatorCameraArea curatorCameraAreaCeiling curatorCoef curatorEditableObjects curatorEditingArea curatorEditingAreaType curatorMouseOver curatorPoints curatorRegisteredObjects curatorSelected curatorWaypointCost current3DENOperation currentChannel currentCommand currentMagazine currentMagazineDetail currentMagazineDetailTurret currentMagazineTurret currentMuzzle currentNamespace currentTask currentTasks currentThrowable currentVisionMode currentWaypoint currentWeapon currentWeaponMode currentWeaponTurret currentZeroing cursorObject cursorTarget customChat customRadio cutFadeOut cutObj cutRsc cutText damage date dateToNumber daytime deActivateKey debriefingText debugFSM debugLog deg delete3DENEntities deleteAt deleteCenter deleteCollection deleteEditorObject deleteGroup deleteGroupWhenEmpty deleteIdentity deleteLocation deleteMarker deleteMarkerLocal deleteRange deleteResources deleteSite deleteStatus deleteTeam deleteVehicle deleteVehicleCrew deleteWaypoint detach detectedMines diag_activeMissionFSMs diag_activeScripts diag_activeSQFScripts diag_activeSQSScripts diag_captureFrame diag_captureFrameToFile diag_captureSlowFrame diag_codePerformance diag_drawMode diag_enable diag_enabled diag_fps diag_fpsMin diag_frameNo diag_lightNewLoad diag_list diag_log diag_logSlowFrame diag_mergeConfigFile diag_recordTurretLimits diag_setLightNew diag_tickTime diag_toggle dialog diarySubjectExists didJIP didJIPOwner difficulty difficultyEnabled difficultyEnabledRTD difficultyOption direction directSay disableAI disableCollisionWith disableConversation disableDebriefingStats disableMapIndicators disableNVGEquipment disableRemoteSensors disableSerialization disableTIEquipment disableUAVConnectability disableUserInput displayAddEventHandler displayCtrl displayParent displayRemoveAllEventHandlers displayRemoveEventHandler displaySetEventHandler dissolveTeam distance distance2D distanceSqr distributionRegion do3DENAction doArtilleryFire doFire doFollow doFSM doGetOut doMove doorPhase doStop doSuppressiveFire doTarget doWatch drawArrow drawEllipse drawIcon drawIcon3D drawLine drawLine3D drawLink drawLocation drawPolygon drawRectangle drawTriangle driver drop dynamicSimulationDistance dynamicSimulationDistanceCoef dynamicSimulationEnabled dynamicSimulationSystemEnabled echo edit3DENMissionAttributes editObject editorSetEventHandler effectiveCommander emptyPositions enableAI enableAIFeature enableAimPrecision enableAttack enableAudioFeature enableAutoStartUpRTD enableAutoTrimRTD enableCamShake enableCaustics enableChannel enableCollisionWith enableCopilot enableDebriefingStats enableDiagLegend enableDynamicSimulation enableDynamicSimulationSystem enableEndDialog enableEngineArtillery enableEnvironment enableFatigue enableGunLights enableInfoPanelComponent enableIRLasers enableMimics enablePersonTurret enableRadio enableReload enableRopeAttach enableSatNormalOnDetail enableSaving enableSentences enableSimulation enableSimulationGlobal enableStamina enableTeamSwitch enableTraffic enableUAVConnectability enableUAVWaypoints enableVehicleCargo enableVehicleSensor enableWeaponDisassembly endLoadingScreen endMission engineOn enginesIsOnRTD enginesRpmRTD enginesTorqueRTD entities environmentEnabled estimatedEndServerTime estimatedTimeLeft evalObjectArgument everyBackpack everyContainer exec execEditorScript execFSM execVM exp expectedDestination exportJIPMessages eyeDirection eyePos face faction fadeMusic fadeRadio fadeSound fadeSpeech failMission fillWeaponsFromPool find findCover findDisplay findEditorObject findEmptyPosition findEmptyPositionReady findIf findNearestEnemy finishMissionInit finite fire fireAtTarget firstBackpack flag flagAnimationPhase flagOwner flagSide flagTexture fleeing floor flyInHeight flyInHeightASL fog fogForecast fogParams forceAddUniform forcedMap forceEnd forceFlagTexture forceFollowRoad forceMap forceRespawn forceSpeed forceWalk forceWeaponFire forceWeatherChange forEachMember forEachMemberAgent forEachMemberTeam forgetTarget format formation formationDirection formationLeader formationMembers formationPosition formationTask formatText formLeader freeLook fromEditor fuel fullCrew gearIDCAmmoCount gearSlotAmmoCount gearSlotData get3DENActionState get3DENAttribute get3DENCamera get3DENConnections get3DENEntity get3DENEntityID get3DENGrid get3DENIconsVisible get3DENLayerEntities get3DENLinesVisible get3DENMissionAttribute get3DENMouseOver get3DENSelected getAimingCoef getAllEnvSoundControllers getAllHitPointsDamage getAllOwnedMines getAllSoundControllers getAmmoCargo getAnimAimPrecision getAnimSpeedCoef getArray getArtilleryAmmo getArtilleryComputerSettings getArtilleryETA getAssignedCuratorLogic getAssignedCuratorUnit getBackpackCargo getBleedingRemaining getBurningValue getCameraViewDirection getCargoIndex getCenterOfMass getClientState getClientStateNumber getCompatiblePylonMagazines getConnectedUAV getContainerMaxLoad getCursorObjectParams getCustomAimCoef getDammage getDescription getDir getDirVisual getDLCAssetsUsage getDLCAssetsUsageByName getDLCs getEditorCamera getEditorMode getEditorObjectScope getElevationOffset getEnvSoundController getFatigue getForcedFlagTexture getFriend getFSMVariable getFuelCargo getGroupIcon getGroupIconParams getGroupIcons getHideFrom getHit getHitIndex getHitPointDamage getItemCargo getMagazineCargo getMarkerColor getMarkerPos getMarkerSize getMarkerType getMass getMissionConfig getMissionConfigValue getMissionDLCs getMissionLayerEntities getModelInfo getMousePosition getMusicPlayedTime getNumber getObjectArgument getObjectChildren getObjectDLC getObjectMaterials getObjectProxy getObjectTextures getObjectType getObjectViewDistance getOxygenRemaining getPersonUsedDLCs getPilotCameraDirection getPilotCameraPosition getPilotCameraRotation getPilotCameraTarget getPlateNumber getPlayerChannel getPlayerScores getPlayerUID getPos getPosASL getPosASLVisual getPosASLW getPosATL getPosATLVisual getPosVisual getPosWorld getPylonMagazines getRelDir getRelPos getRemoteSensorsDisabled getRepairCargo getResolution getShadowDistance getShotParents getSlingLoad getSoundController getSoundControllerResult getSpeed getStamina getStatValue getSuppression getTerrainGrid getTerrainHeightASL getText getTotalDLCUsageTime getUnitLoadout getUnitTrait getUserMFDText getUserMFDvalue getVariable getVehicleCargo getWeaponCargo getWeaponSway getWingsOrientationRTD getWingsPositionRTD getWPPos glanceAt globalChat globalRadio goggles goto group groupChat groupFromNetId groupIconSelectable groupIconsVisible groupId groupOwner groupRadio groupSelectedUnits groupSelectUnit gunner gusts halt handgunItems handgunMagazine handgunWeapon handsHit hasInterface hasPilotCamera hasWeapon hcAllGroups hcGroupParams hcLeader hcRemoveAllGroups hcRemoveGroup hcSelected hcSelectGroup hcSetGroup hcShowBar hcShownBar headgear hideBody hideObject hideObjectGlobal hideSelection hint hintC hintCadet hintSilent hmd hostMission htmlLoad HUDMovementLevels humidity image importAllGroups importance in inArea inAreaArray incapacitatedState inflame inflamed infoPanel infoPanelComponentEnabled infoPanelComponents infoPanels inGameUISetEventHandler inheritsFrom initAmbientLife inPolygon inputAction inRangeOfArtillery insertEditorObject intersect is3DEN is3DENMultiplayer isAbleToBreathe isAgent isArray isAutoHoverOn isAutonomous isAutotest isBleeding isBurning isClass isCollisionLightOn isCopilotEnabled isDamageAllowed isDedicated isDLCAvailable isEngineOn isEqualTo isEqualType isEqualTypeAll isEqualTypeAny isEqualTypeArray isEqualTypeParams isFilePatchingEnabled isFlashlightOn isFlatEmpty isForcedWalk isFormationLeader isGroupDeletedWhenEmpty isHidden isInRemainsCollector isInstructorFigureEnabled isIRLaserOn isKeyActive isKindOf isLaserOn isLightOn isLocalized isManualFire isMarkedForCollection isMultiplayer isMultiplayerSolo isNil isNull isNumber isObjectHidden isObjectRTD isOnRoad isPipEnabled isPlayer isRealTime isRemoteExecuted isRemoteExecutedJIP isServer isShowing3DIcons isSimpleObject isSprintAllowed isStaminaEnabled isSteamMission isStreamFriendlyUIEnabled isText isTouchingGround isTurnedOut isTutHintsEnabled isUAVConnectable isUAVConnected isUIContext isUniformAllowed isVehicleCargo isVehicleRadarOn isVehicleSensorEnabled isWalking isWeaponDeployed isWeaponRested itemCargo items itemsWithMagazines join joinAs joinAsSilent joinSilent joinString kbAddDatabase kbAddDatabaseTargets kbAddTopic kbHasTopic kbReact kbRemoveTopic kbTell kbWasSaid keyImage keyName knowsAbout land landAt landResult language laserTarget lbAdd lbClear lbColor lbColorRight lbCurSel lbData lbDelete lbIsSelected lbPicture lbPictureRight lbSelection lbSetColor lbSetColorRight lbSetCurSel lbSetData lbSetPicture lbSetPictureColor lbSetPictureColorDisabled lbSetPictureColorSelected lbSetPictureRight lbSetPictureRightColor lbSetPictureRightColorDisabled lbSetPictureRightColorSelected lbSetSelectColor lbSetSelectColorRight lbSetSelected lbSetText lbSetTextRight lbSetTooltip lbSetValue lbSize lbSort lbSortByValue lbText lbTextRight lbValue leader leaderboardDeInit leaderboardGetRows leaderboardInit leaderboardRequestRowsFriends leaderboardsRequestUploadScore leaderboardsRequestUploadScoreKeepBest leaderboardState leaveVehicle libraryCredits libraryDisclaimers lifeState lightAttachObject lightDetachObject lightIsOn lightnings limitSpeed linearConversion lineIntersects lineIntersectsObjs lineIntersectsSurfaces lineIntersectsWith linkItem list listObjects listRemoteTargets listVehicleSensors ln lnbAddArray lnbAddColumn lnbAddRow lnbClear lnbColor lnbCurSelRow lnbData lnbDeleteColumn lnbDeleteRow lnbGetColumnsPosition lnbPicture lnbSetColor lnbSetColumnsPos lnbSetCurSelRow lnbSetData lnbSetPicture lnbSetText lnbSetValue lnbSize lnbSort lnbSortByValue lnbText lnbValue load loadAbs loadBackpack loadFile loadGame loadIdentity loadMagazine loadOverlay loadStatus loadUniform loadVest local localize locationPosition lock lockCameraTo lockCargo lockDriver locked lockedCargo lockedDriver lockedTurret lockIdentity lockTurret lockWP log logEntities logNetwork logNetworkTerminate lookAt lookAtPos magazineCargo magazines magazinesAllTurrets magazinesAmmo magazinesAmmoCargo magazinesAmmoFull magazinesDetail magazinesDetailBackpack magazinesDetailUniform magazinesDetailVest magazinesTurret magazineTurretAmmo mapAnimAdd mapAnimClear mapAnimCommit mapAnimDone mapCenterOnCamera mapGridPosition markAsFinishedOnSteam markerAlpha markerBrush markerColor markerDir markerPos markerShape markerSize markerText markerType max members menuAction menuAdd menuChecked menuClear menuCollapse menuData menuDelete menuEnable menuEnabled menuExpand menuHover menuPicture menuSetAction menuSetCheck menuSetData menuSetPicture menuSetValue menuShortcut menuShortcutText menuSize menuSort menuText menuURL menuValue min mineActive mineDetectedBy missionConfigFile missionDifficulty missionName missionNamespace missionStart missionVersion mod modelToWorld modelToWorldVisual modelToWorldVisualWorld modelToWorldWorld modParams moonIntensity moonPhase morale move move3DENCamera moveInAny moveInCargo moveInCommander moveInDriver moveInGunner moveInTurret moveObjectToEnd moveOut moveTime moveTo moveToCompleted moveToFailed musicVolume name nameSound nearEntities nearestBuilding nearestLocation nearestLocations nearestLocationWithDubbing nearestObject nearestObjects nearestTerrainObjects nearObjects nearObjectsReady nearRoads nearSupplies nearTargets needReload netId netObjNull newOverlay nextMenuItemIndex nextWeatherChange nMenuItems not numberOfEnginesRTD numberToDate objectCurators objectFromNetId objectParent objStatus onBriefingGroup onBriefingNotes onBriefingPlan onBriefingTeamSwitch onCommandModeChanged onDoubleClick onEachFrame onGroupIconClick onGroupIconOverEnter onGroupIconOverLeave onHCGroupSelectionChanged onMapSingleClick onPlayerConnected onPlayerDisconnected onPreloadFinished onPreloadStarted onShowNewObject onTeamSwitch openCuratorInterface openDLCPage openMap openSteamApp openYoutubeVideo or orderGetIn overcast overcastForecast owner param params parseNumber parseSimpleArray parseText parsingNamespace particlesQuality pickWeaponPool pitch pixelGrid pixelGridBase pixelGridNoUIScale pixelH pixelW playableSlotsNumber playableUnits playAction playActionNow player playerRespawnTime playerSide playersNumber playGesture playMission playMove playMoveNow playMusic playScriptedMission playSound playSound3D position positionCameraToWorld posScreenToWorld posWorldToScreen ppEffectAdjust ppEffectCommit ppEffectCommitted ppEffectCreate ppEffectDestroy ppEffectEnable ppEffectEnabled ppEffectForceInNVG precision preloadCamera preloadObject preloadSound preloadTitleObj preloadTitleRsc preprocessFile preprocessFileLineNumbers primaryWeapon primaryWeaponItems primaryWeaponMagazine priority processDiaryLink productVersion profileName profileNamespace profileNameSteam progressLoadingScreen progressPosition progressSetPosition publicVariable publicVariableClient publicVariableServer pushBack pushBackUnique putWeaponPool queryItemsPool queryMagazinePool queryWeaponPool rad radioChannelAdd radioChannelCreate radioChannelRemove radioChannelSetCallSign radioChannelSetLabel radioVolume rain rainbow random rank rankId rating rectangular registeredTasks registerTask reload reloadEnabled remoteControl remoteExec remoteExecCall remoteExecutedOwner remove3DENConnection remove3DENEventHandler remove3DENLayer removeAction removeAll3DENEventHandlers removeAllActions removeAllAssignedItems removeAllContainers removeAllCuratorAddons removeAllCuratorCameraAreas removeAllCuratorEditingAreas removeAllEventHandlers removeAllHandgunItems removeAllItems removeAllItemsWithMagazines removeAllMissionEventHandlers removeAllMPEventHandlers removeAllMusicEventHandlers removeAllOwnedMines removeAllPrimaryWeaponItems removeAllWeapons removeBackpack removeBackpackGlobal removeCuratorAddons removeCuratorCameraArea removeCuratorEditableObjects removeCuratorEditingArea removeDrawIcon removeDrawLinks removeEventHandler removeFromRemainsCollector removeGoggles removeGroupIcon removeHandgunItem removeHeadgear removeItem removeItemFromBackpack removeItemFromUniform removeItemFromVest removeItems removeMagazine removeMagazineGlobal removeMagazines removeMagazinesTurret removeMagazineTurret removeMenuItem removeMissionEventHandler removeMPEventHandler removeMusicEventHandler removeOwnedMine removePrimaryWeaponItem removeSecondaryWeaponItem removeSimpleTask removeSwitchableUnit removeTeamMember removeUniform removeVest removeWeapon removeWeaponAttachmentCargo removeWeaponCargo removeWeaponGlobal removeWeaponTurret reportRemoteTarget requiredVersion resetCamShake resetSubgroupDirection resize resources respawnVehicle restartEditorCamera reveal revealMine reverse reversedMouseY roadAt roadsConnectedTo roleDescription ropeAttachedObjects ropeAttachedTo ropeAttachEnabled ropeAttachTo ropeCreate ropeCut ropeDestroy ropeDetach ropeEndPosition ropeLength ropes ropeUnwind ropeUnwound rotorsForcesRTD rotorsRpmRTD round runInitScript safeZoneH safeZoneW safeZoneWAbs safeZoneX safeZoneXAbs safeZoneY save3DENInventory saveGame saveIdentity saveJoysticks saveOverlay saveProfileNamespace saveStatus saveVar savingEnabled say say2D say3D scopeName score scoreSide screenshot screenToWorld scriptDone scriptName scudState secondaryWeapon secondaryWeaponItems secondaryWeaponMagazine select selectBestPlaces selectDiarySubject selectedEditorObjects selectEditorObject selectionNames selectionPosition selectLeader selectMax selectMin selectNoPlayer selectPlayer selectRandom selectRandomWeighted selectWeapon selectWeaponTurret sendAUMessage sendSimpleCommand sendTask sendTaskResult sendUDPMessage serverCommand serverCommandAvailable serverCommandExecutable serverName serverTime set set3DENAttribute set3DENAttributes set3DENGrid set3DENIconsVisible set3DENLayer set3DENLinesVisible set3DENLogicType set3DENMissionAttribute set3DENMissionAttributes set3DENModelsVisible set3DENObjectType set3DENSelected setAccTime setActualCollectiveRTD setAirplaneThrottle setAirportSide setAmmo setAmmoCargo setAmmoOnPylon setAnimSpeedCoef setAperture setApertureNew setArmoryPoints setAttributes setAutonomous setBehaviour setBleedingRemaining setBrakesRTD setCameraInterest setCamShakeDefParams setCamShakeParams setCamUseTI setCaptive setCenterOfMass setCollisionLight setCombatMode setCompassOscillation setConvoySeparation setCuratorCameraAreaCeiling setCuratorCoef setCuratorEditingAreaType setCuratorWaypointCost setCurrentChannel setCurrentTask setCurrentWaypoint setCustomAimCoef setCustomWeightRTD setDamage setDammage setDate setDebriefingText setDefaultCamera setDestination setDetailMapBlendPars setDir setDirection setDrawIcon setDriveOnPath setDropInterval setDynamicSimulationDistance setDynamicSimulationDistanceCoef setEditorMode setEditorObjectScope setEffectCondition setEngineRPMRTD setFace setFaceAnimation setFatigue setFeatureType setFlagAnimationPhase setFlagOwner setFlagSide setFlagTexture setFog setFormation setFormationTask setFormDir setFriend setFromEditor setFSMVariable setFuel setFuelCargo setGroupIcon setGroupIconParams setGroupIconsSelectable setGroupIconsVisible setGroupId setGroupIdGlobal setGroupOwner setGusts setHideBehind setHit setHitIndex setHitPointDamage setHorizonParallaxCoef setHUDMovementLevels setIdentity setImportance setInfoPanel setLeader setLightAmbient setLightAttenuation setLightBrightness setLightColor setLightDayLight setLightFlareMaxDistance setLightFlareSize setLightIntensity setLightnings setLightUseFlare setLocalWindParams setMagazineTurretAmmo setMarkerAlpha setMarkerAlphaLocal setMarkerBrush setMarkerBrushLocal setMarkerColor setMarkerColorLocal setMarkerDir setMarkerDirLocal setMarkerPos setMarkerPosLocal setMarkerShape setMarkerShapeLocal setMarkerSize setMarkerSizeLocal setMarkerText setMarkerTextLocal setMarkerType setMarkerTypeLocal setMass setMimic setMousePosition setMusicEffect setMusicEventHandler setName setNameSound setObjectArguments setObjectMaterial setObjectMaterialGlobal setObjectProxy setObjectTexture setObjectTextureGlobal setObjectViewDistance setOvercast setOwner setOxygenRemaining setParticleCircle setParticleClass setParticleFire setParticleParams setParticleRandom setPilotCameraDirection setPilotCameraRotation setPilotCameraTarget setPilotLight setPiPEffect setPitch setPlateNumber setPlayable setPlayerRespawnTime setPos setPosASL setPosASL2 setPosASLW setPosATL setPosition setPosWorld setPylonLoadOut setPylonsPriority setRadioMsg setRain setRainbow setRandomLip setRank setRectangular setRepairCargo setRotorBrakeRTD setShadowDistance setShotParents setSide setSimpleTaskAlwaysVisible setSimpleTaskCustomData setSimpleTaskDescription setSimpleTaskDestination setSimpleTaskTarget setSimpleTaskType setSimulWeatherLayers setSize setSkill setSlingLoad setSoundEffect setSpeaker setSpeech setSpeedMode setStamina setStaminaScheme setStatValue setSuppression setSystemOfUnits setTargetAge setTaskMarkerOffset setTaskResult setTaskState setTerrainGrid setText setTimeMultiplier setTitleEffect setTrafficDensity setTrafficDistance setTrafficGap setTrafficSpeed setTriggerActivation setTriggerArea setTriggerStatements setTriggerText setTriggerTimeout setTriggerType setType setUnconscious setUnitAbility setUnitLoadout setUnitPos setUnitPosWeak setUnitRank setUnitRecoilCoefficient setUnitTrait setUnloadInCombat setUserActionText setUserMFDText setUserMFDvalue setVariable setVectorDir setVectorDirAndUp setVectorUp setVehicleAmmo setVehicleAmmoDef setVehicleArmor setVehicleCargo setVehicleId setVehicleLock setVehiclePosition setVehicleRadar setVehicleReceiveRemoteTargets setVehicleReportOwnPosition setVehicleReportRemoteTargets setVehicleTIPars setVehicleVarName setVelocity setVelocityModelSpace setVelocityTransformation setViewDistance setVisibleIfTreeCollapsed setWantedRPMRTD setWaves setWaypointBehaviour setWaypointCombatMode setWaypointCompletionRadius setWaypointDescription setWaypointForceBehaviour setWaypointFormation setWaypointHousePosition setWaypointLoiterRadius setWaypointLoiterType setWaypointName setWaypointPosition setWaypointScript setWaypointSpeed setWaypointStatements setWaypointTimeout setWaypointType setWaypointVisible setWeaponReloadingTime setWind setWindDir setWindForce setWindStr setWingForceScaleRTD setWPPos show3DIcons showChat showCinemaBorder showCommandingMenu showCompass showCuratorCompass showGPS showHUD showLegend showMap shownArtilleryComputer shownChat shownCompass shownCuratorCompass showNewEditorObject shownGPS shownHUD shownMap shownPad shownRadio shownScoretable shownUAVFeed shownWarrant shownWatch showPad showRadio showScoretable showSubtitles showUAVFeed showWarrant showWatch showWaypoint showWaypoints side sideChat sideEnemy sideFriendly sideRadio simpleTasks simulationEnabled simulCloudDensity simulCloudOcclusion simulInClouds simulWeatherSync sin size sizeOf skill skillFinal skipTime sleep sliderPosition sliderRange sliderSetPosition sliderSetRange sliderSetSpeed sliderSpeed slingLoadAssistantShown soldierMagazines someAmmo sort soundVolume spawn speaker speed speedMode splitString sqrt squadParams stance startLoadingScreen step stop stopEngineRTD stopped str sunOrMoon supportInfo suppressFor surfaceIsWater surfaceNormal surfaceType swimInDepth switchableUnits switchAction switchCamera switchGesture switchLight switchMove synchronizedObjects synchronizedTriggers synchronizedWaypoints synchronizeObjectsAdd synchronizeObjectsRemove synchronizeTrigger synchronizeWaypoint systemChat systemOfUnits tan targetKnowledge targets targetsAggregate targetsQuery taskAlwaysVisible taskChildren taskCompleted taskCustomData taskDescription taskDestination taskHint taskMarkerOffset taskParent taskResult taskState taskType teamMember teamName teams teamSwitch teamSwitchEnabled teamType terminate terrainIntersect terrainIntersectASL terrainIntersectAtASL text textLog textLogFormat tg time timeMultiplier titleCut titleFadeOut titleObj titleRsc titleText toArray toFixed toLower toString toUpper triggerActivated triggerActivation triggerArea triggerAttachedVehicle triggerAttachObject triggerAttachVehicle triggerDynamicSimulation triggerStatements triggerText triggerTimeout triggerTimeoutCurrent triggerType turretLocal turretOwner turretUnit tvAdd tvClear tvCollapse tvCollapseAll tvCount tvCurSel tvData tvDelete tvExpand tvExpandAll tvPicture tvSetColor tvSetCurSel tvSetData tvSetPicture tvSetPictureColor tvSetPictureColorDisabled tvSetPictureColorSelected tvSetPictureRight tvSetPictureRightColor tvSetPictureRightColorDisabled tvSetPictureRightColorSelected tvSetText tvSetTooltip tvSetValue tvSort tvSortByValue tvText tvTooltip tvValue type typeName typeOf UAVControl uiNamespace uiSleep unassignCurator unassignItem unassignTeam unassignVehicle underwater uniform uniformContainer uniformItems uniformMagazines unitAddons unitAimPosition unitAimPositionVisual unitBackpack unitIsUAV unitPos unitReady unitRecoilCoefficient units unitsBelowHeight unlinkItem unlockAchievement unregisterTask updateDrawIcon updateMenuItem updateObjectTree useAISteeringComponent useAudioTimeForMoves userInputDisabled vectorAdd vectorCos vectorCrossProduct vectorDiff vectorDir vectorDirVisual vectorDistance vectorDistanceSqr vectorDotProduct vectorFromTo vectorMagnitude vectorMagnitudeSqr vectorModelToWorld vectorModelToWorldVisual vectorMultiply vectorNormalized vectorUp vectorUpVisual vectorWorldToModel vectorWorldToModelVisual vehicle vehicleCargoEnabled vehicleChat vehicleRadio vehicleReceiveRemoteTargets vehicleReportOwnPosition vehicleReportRemoteTargets vehicles vehicleVarName velocity velocityModelSpace verifySignature vest vestContainer vestItems vestMagazines viewDistance visibleCompass visibleGPS visibleMap visiblePosition visiblePositionASL visibleScoretable visibleWatch waves waypointAttachedObject waypointAttachedVehicle waypointAttachObject waypointAttachVehicle waypointBehaviour waypointCombatMode waypointCompletionRadius waypointDescription waypointForceBehaviour waypointFormation waypointHousePosition waypointLoiterRadius waypointLoiterType waypointName waypointPosition waypoints waypointScript waypointsEnabledUAV waypointShow waypointSpeed waypointStatements waypointTimeout waypointTimeoutCurrent waypointType waypointVisible weaponAccessories weaponAccessoriesCargo weaponCargo weaponDirection weaponInertia weaponLowered weapons weaponsItems weaponsItemsCargo weaponState weaponsTurret weightRTD WFSideText wind ",
      literal:
        "blufor civilian configNull controlNull displayNull east endl false grpNull independent lineBreak locationNull nil objNull opfor pi resistance scriptNull sideAmbientLife sideEmpty sideLogic sideUnknown taskNull teamMemberNull true west",
    },
    c: [
      e.CLCM,
      e.CBCM,
      e.NM,
      { cN: "variable", b: /\b_+[a-zA-Z_]\w*/ },
      { cN: "title", b: /[a-zA-Z][a-zA-Z0-9]+_fnc_\w*/ },
      t,
      a,
    ],
    i: /#|^\$ /,
  };
});
hljs.registerLanguage("rust", function (e) {
  var t = "([ui](8|16|32|64|128|size)|f(32|64))?",
    r =
      "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
  return {
    aliases: ["rs"],
    k: {
      keyword:
        "abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
      literal: "true false Some None Ok Err",
      built_in: r,
    },
    l: e.IR + "!?",
    i: "</",
    c: [
      e.CLCM,
      e.C("/\\*", "\\*/", { c: ["self"] }),
      e.inherit(e.QSM, { b: /b?"/, i: null }),
      {
        cN: "string",
        v: [
          { b: /r(#*)"(.|\n)*?"\1(?!#)/ },
          { b: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
        ],
      },
      { cN: "symbol", b: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
      {
        cN: "number",
        v: [
          { b: "\\b0b([01_]+)" + t },
          { b: "\\b0o([0-7_]+)" + t },
          { b: "\\b0x([A-Fa-f0-9_]+)" + t },
          { b: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t },
        ],
        relevance: 0,
      },
      { cN: "function", bK: "fn", e: "(\\(|<)", eE: !0, c: [e.UTM] },
      {
        cN: "meta",
        b: "#\\!?\\[",
        e: "\\]",
        c: [{ cN: "meta-string", b: /"/, e: /"/ }],
      },
      {
        cN: "class",
        bK: "type",
        e: ";",
        c: [e.inherit(e.UTM, { endsParent: !0 })],
        i: "\\S",
      },
      {
        cN: "class",
        bK: "trait enum struct union",
        e: "{",
        c: [e.inherit(e.UTM, { endsParent: !0 })],
        i: "[\\w\\d]",
      },
      { b: e.IR + "::", k: { built_in: r } },
      { b: "->" },
    ],
  };
});
hljs.registerLanguage("go", function (e) {
  var n = {
    keyword:
      "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
    literal: "true false iota nil",
    built_in:
      "append cap close complex copy imag len make new panic print println real recover delete",
  };
  return {
    aliases: ["golang"],
    k: n,
    i: "</",
    c: [
      e.CLCM,
      e.CBCM,
      { cN: "string", v: [e.QSM, e.ASM, { b: "`", e: "`" }] },
      { cN: "number", v: [{ b: e.CNR + "[i]", relevance: 1 }, e.CNM] },
      { b: /:=/ },
      {
        cN: "function",
        bK: "func",
        e: "\\s*(\\{|$)",
        eE: !0,
        c: [e.TM, { cN: "params", b: /\(/, e: /\)/, k: n, i: /["']/ }],
      },
    ],
  };
});
hljs.registerLanguage("profile", function (e) {
  return {
    c: [
      e.CNM,
      { b: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}", e: ":", eE: !0 },
      {
        b: "(ncalls|tottime|cumtime)",
        e: "$",
        k: "ncalls tottime|10 cumtime|10 filename",
        relevance: 10,
      },
      { b: "function calls", e: "$", c: [e.CNM], relevance: 10 },
      e.ASM,
      e.QSM,
      { cN: "string", b: "\\(", e: "\\)$", eB: !0, eE: !0, relevance: 0 },
    ],
  };
});
hljs.registerLanguage("hsp", function (e) {
  return {
    cI: !0,
    l: /[\w\._]+/,
    k: "goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop",
    c: [
      e.CLCM,
      e.CBCM,
      e.QSM,
      e.ASM,
      { cN: "string", b: '{"', e: '"}', c: [e.BE] },
      e.C(";", "$", { relevance: 0 }),
      {
        cN: "meta",
        b: "#",
        e: "$",
        k: {
          "meta-keyword":
            "addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib",
        },
        c: [
          e.inherit(e.QSM, { cN: "meta-string" }),
          e.NM,
          e.CNM,
          e.CLCM,
          e.CBCM,
        ],
      },
      { cN: "symbol", b: "^\\*(\\w+|@)" },
      e.NM,
      e.CNM,
    ],
  };
});
hljs.registerLanguage("erb", function (e) {
  return {
    sL: "xml",
    c: [
      e.C("<%#", "%>"),
      { b: "<%[%=-]?", e: "[%-]?%>", sL: "ruby", eB: !0, eE: !0 },
    ],
  };
});
hljs.registerLanguage("x86asm", function (s) {
  return {
    cI: !0,
    l: "[.%]?" + s.IR,
    k: {
      keyword:
        "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
      built_in:
        "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",
      meta: "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__",
    },
    c: [
      s.C(";", "$", { relevance: 0 }),
      {
        cN: "number",
        v: [
          {
            b: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
            relevance: 0,
          },
          { b: "\\$[0-9][0-9A-Fa-f]*", relevance: 0 },
          {
            b: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b",
          },
          {
            b: "\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b",
          },
        ],
      },
      s.QSM,
      {
        cN: "string",
        v: [
          { b: "'", e: "[^\\\\]'" },
          { b: "`", e: "[^\\\\]`" },
        ],
        relevance: 0,
      },
      {
        cN: "symbol",
        v: [
          { b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)" },
          { b: "^\\s*%%[A-Za-z0-9_$#@~.?]*:" },
        ],
        relevance: 0,
      },
      { cN: "subst", b: "%[0-9]+", relevance: 0 },
      { cN: "subst", b: "%!S+", relevance: 0 },
      { cN: "meta", b: /^\s*\.[\w_-]+/ },
    ],
  };
});
hljs.registerLanguage("cpp", function (e) {
  function t(e) {
    return "(?:" + e + ")?";
  }
  var r = "decltype\\(auto\\)",
    a = "[a-zA-Z_]\\w*::",
    i = (t(a), t("<.*?>"), { cN: "keyword", b: "\\b[a-z\\d_]*_t\\b" }),
    c = {
      cN: "string",
      v: [
        { b: '(u8?|U|L)?"', e: '"', i: "\\n", c: [e.BE] },
        {
          b: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          e: "'",
          i: ".",
        },
        { b: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/ },
      ],
    },
    s = {
      cN: "number",
      v: [
        { b: "\\b(0b[01']+)" },
        {
          b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
        },
        {
          b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
        },
      ],
      relevance: 0,
    },
    n = {
      cN: "meta",
      b: /#\s*[a-z]+\b/,
      e: /$/,
      k: {
        "meta-keyword":
          "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
      },
      c: [
        { b: /\\\n/, relevance: 0 },
        e.inherit(c, { cN: "meta-string" }),
        { cN: "meta-string", b: /<.*?>/, e: /$/, i: "\\n" },
        e.CLCM,
        e.CBCM,
      ],
    },
    o = { cN: "title", b: t(a) + e.IR, relevance: 0 },
    l = t(a) + e.IR + "\\s*\\(",
    u = {
      keyword:
        "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_tshort reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
      built_in:
        "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
      literal: "true false nullptr NULL",
    },
    p = [i, e.CLCM, e.CBCM, s, c],
    m = {
      v: [
        { b: /=/, e: /;/ },
        { b: /\(/, e: /\)/ },
        { bK: "new throw return else", e: /;/ },
      ],
      k: u,
      c: p.concat([
        { b: /\(/, e: /\)/, k: u, c: p.concat(["self"]), relevance: 0 },
      ]),
      relevance: 0,
    },
    d = {
      cN: "function",
      b:
        "((decltype\\(auto\\)|(?:[a-zA-Z_]\\w*::)?[a-zA-Z_]\\w*(?:<.*?>)?)[\\*&\\s]+)+" +
        l,
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: u,
      i: /[^\w\s\*&:<>]/,
      c: [
        { b: r, k: u, relevance: 0 },
        { b: l, rB: !0, c: [o], relevance: 0 },
        {
          cN: "params",
          b: /\(/,
          e: /\)/,
          k: u,
          relevance: 0,
          c: [
            e.CLCM,
            e.CBCM,
            c,
            s,
            i,
            {
              b: /\(/,
              e: /\)/,
              k: u,
              relevance: 0,
              c: ["self", e.CLCM, e.CBCM, c, s, i],
            },
          ],
        },
        i,
        e.CLCM,
        e.CBCM,
        n,
      ],
    };
  return {
    aliases: ["c", "cc", "h", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
    k: u,
    i: "</",
    c: [].concat(m, d, p, [
      n,
      {
        b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        e: ">",
        k: u,
        c: ["self", i],
      },
      { b: e.IR + "::", k: u },
      {
        cN: "class",
        bK: "class struct",
        e: /[{;:]/,
        c: [{ b: /</, e: />/, c: ["self"] }, e.TM],
      },
    ]),
    exports: { preprocessor: n, strings: c, k: u },
  };
});
hljs.registerLanguage("arduino", function (e) {
  var t = "boolean byte word String",
    r =
      "setup loopKeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",
    i =
      "DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW",
    o = e.requireLanguage("cpp").rawDefinition(),
    a = o.k;
  return (
    (a.keyword += " " + t), (a.literal += " " + i), (a.built_in += " " + r), o
  );
});
hljs.registerLanguage("ebnf", function (a) {
  var e = a.C(/\(\*/, /\*\)/);
  return {
    i: /\S/,
    c: [
      e,
      {
        cN: "attribute",
        b: /^[ ]*[a-zA-Z][a-zA-Z-_]*([\s-_]+[a-zA-Z][a-zA-Z]*)*/,
      },
      {
        b: /=/,
        e: /[.;]/,
        c: [
          e,
          { cN: "meta", b: /\?.*\?/ },
          { cN: "string", v: [a.ASM, a.QSM, { b: "`", e: "`" }] },
        ],
      },
    ],
  };
});
hljs.registerLanguage("sql", function (e) {
  var t = e.C("--", "$");
  return {
    cI: !0,
    i: /[<>{}*]/,
    c: [
      {
        bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
        e: /;/,
        eW: !0,
        l: /[\w\.]+/,
        k: {
          keyword:
            "as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
          literal: "true false null unknown",
          built_in:
            "array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void",
        },
        c: [
          { cN: "string", b: "'", e: "'", c: [{ b: "''" }] },
          { cN: "string", b: '"', e: '"', c: [{ b: '""' }] },
          { cN: "string", b: "`", e: "`" },
          e.CNM,
          e.CBCM,
          t,
          e.HCM,
        ],
      },
      e.CBCM,
      t,
      e.HCM,
    ],
  };
});
hljs.registerLanguage("inform7", function (e) {
  return {
    aliases: ["i7"],
    cI: !0,
    k: {
      keyword:
        "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule",
    },
    c: [
      {
        cN: "string",
        b: '"',
        e: '"',
        relevance: 0,
        c: [{ cN: "subst", b: "\\[", e: "\\]" }],
      },
      {
        cN: "section",
        b: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
        e: "$",
      },
      {
        b: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
        e: ":",
        c: [{ b: "\\(This", e: "\\)" }],
      },
      { cN: "comment", b: "\\[", e: "\\]", c: ["self"] },
    ],
  };
});
hljs.registerLanguage("cs", function (e) {
  var a = {
      keyword:
        "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let nameof on orderby partial remove select set value var when where yield",
      literal: "null false true",
    },
    i = {
      cN: "number",
      v: [
        { b: "\\b(0b[01']+)" },
        {
          b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
        },
        {
          b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
        },
      ],
      relevance: 0,
    },
    c = { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
    r = e.inherit(c, { i: /\n/ }),
    n = { cN: "subst", b: "{", e: "}", k: a },
    t = e.inherit(n, { i: /\n/ }),
    s = {
      cN: "string",
      b: /\$"/,
      e: '"',
      i: /\n/,
      c: [{ b: "{{" }, { b: "}}" }, e.BE, t],
    },
    l = {
      cN: "string",
      b: /\$@"/,
      e: '"',
      c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, n],
    },
    b = e.inherit(l, {
      i: /\n/,
      c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, t],
    });
  (n.c = [l, s, c, e.ASM, e.QSM, i, e.CBCM]),
    (t.c = [b, s, r, e.ASM, e.QSM, i, e.inherit(e.CBCM, { i: /\n/ })]);
  var o = { v: [l, s, c, e.ASM, e.QSM] },
    d = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
  return {
    aliases: ["csharp", "c#"],
    k: a,
    i: /::/,
    c: [
      e.C("///", "$", {
        rB: !0,
        c: [
          {
            cN: "doctag",
            v: [
              { b: "///", relevance: 0 },
              { b: "\x3c!--|--\x3e" },
              { b: "</?", e: ">" },
            ],
          },
        ],
      }),
      e.CLCM,
      e.CBCM,
      {
        cN: "meta",
        b: "#",
        e: "$",
        k: {
          "meta-keyword":
            "if else elif endif define undef warning error line region endregion pragma checksum",
        },
      },
      o,
      i,
      {
        bK: "class interface",
        e: /[{;=]/,
        i: /[^\s:,]/,
        c: [e.TM, e.CLCM, e.CBCM],
      },
      {
        bK: "namespace",
        e: /[{;=]/,
        i: /[^\s:]/,
        c: [e.inherit(e.TM, { b: "[a-zA-Z](\\.?\\w)*" }), e.CLCM, e.CBCM],
      },
      {
        cN: "meta",
        b: "^\\s*\\[",
        eB: !0,
        e: "\\]",
        eE: !0,
        c: [{ cN: "meta-string", b: /"/, e: /"/ }],
      },
      { bK: "new return throw await else", relevance: 0 },
      {
        cN: "function",
        b: "(" + d + "\\s+)+" + e.IR + "\\s*\\(",
        rB: !0,
        e: /\s*[{;=]/,
        eE: !0,
        k: a,
        c: [
          { b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], relevance: 0 },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            eB: !0,
            eE: !0,
            k: a,
            relevance: 0,
            c: [o, i, e.CBCM],
          },
          e.CLCM,
          e.CBCM,
        ],
      },
    ],
  };
});
hljs.registerLanguage("scss", function (e) {
  var t = "@[a-z-]+",
    r = { cN: "variable", b: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b" },
    i = { cN: "number", b: "#[0-9A-Fa-f]+" };
  e.CSSNM, e.QSM, e.ASM, e.CBCM;
  return {
    cI: !0,
    i: "[=/|']",
    c: [
      e.CLCM,
      e.CBCM,
      { cN: "selector-id", b: "\\#[A-Za-z0-9_-]+", relevance: 0 },
      { cN: "selector-class", b: "\\.[A-Za-z0-9_-]+", relevance: 0 },
      { cN: "selector-attr", b: "\\[", e: "\\]", i: "$" },
      {
        cN: "selector-tag",
        b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
        relevance: 0,
      },
      {
        cN: "selector-pseudo",
        b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)",
      },
      {
        cN: "selector-pseudo",
        b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)",
      },
      r,
      {
        cN: "attribute",
        b: "\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
        i: "[^\\s]",
      },
      {
        b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
      },
      {
        b: ":",
        e: ";",
        c: [r, i, e.CSSNM, e.QSM, e.ASM, { cN: "meta", b: "!important" }],
      },
      { b: "@(page|font-face)", l: t, k: "@page @font-face" },
      {
        b: "@",
        e: "[{;]",
        rB: !0,
        k: "and or not only",
        c: [{ b: t, cN: "keyword" }, r, e.QSM, e.ASM, i, e.CSSNM],
      },
    ],
  };
});
hljs.registerLanguage("processing", function (e) {
  return {
    k: {
      keyword:
        "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
      literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
      title: "setup draw",
      built_in:
        "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed",
    },
    c: [e.CLCM, e.CBCM, e.ASM, e.QSM, e.CNM],
  };
});
hljs.registerLanguage("coq", function (e) {
  return {
    k: {
      keyword:
        "_|0 as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies DependentDerive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with",
      built_in:
        "abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with",
    },
    c: [
      e.QSM,
      e.C("\\(\\*", "\\*\\)"),
      e.CNM,
      { cN: "type", eB: !0, b: "\\|\\s*", e: "\\w+" },
      { b: /[-=]>/ },
    ],
  };
});
hljs.registerLanguage("fortran", function (e) {
  return {
    cI: !0,
    aliases: ["f90", "f95"],
    k: {
      literal: ".False. .True.",
      keyword:
        "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then block endblock public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data",
      built_in:
        "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image",
    },
    i: /\/\*/,
    c: [
      e.inherit(e.ASM, { cN: "string", relevance: 0 }),
      e.inherit(e.QSM, { cN: "string", relevance: 0 }),
      {
        cN: "function",
        bK: "subroutine function program",
        i: "[${=\\n]",
        c: [e.UTM, { cN: "params", b: "\\(", e: "\\)" }],
      },
      e.C("!", "$", { relevance: 0 }),
      {
        cN: "number",
        b: "(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?",
        relevance: 0,
      },
    ],
  };
});
hljs.registerLanguage("brainfuck", function (e) {
  var r = { cN: "literal", b: "[\\+\\-]", relevance: 0 };
  return {
    aliases: ["bf"],
    c: [
      e.C("[^\\[\\]\\.,\\+\\-<> \r\n]", "[\\[\\]\\.,\\+\\-<> \r\n]", {
        rE: !0,
        relevance: 0,
      }),
      { cN: "title", b: "[\\[\\]]", relevance: 0 },
      { cN: "string", b: "[\\.,]", relevance: 0 },
      { b: /(?:\+\+|\-\-)/, c: [r] },
      r,
    ],
  };
});
hljs.registerLanguage("crystal", function (e) {
  var c = "(_*[ui](8|16|32|64|128))?",
    n =
      "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
    b = "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",
    i = {
      keyword:
        "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
      literal: "false nil true",
    },
    r = { cN: "subst", b: "#{", e: "}", k: i },
    a = {
      cN: "template-variable",
      v: [
        { b: "\\{\\{", e: "\\}\\}" },
        { b: "\\{%", e: "%\\}" },
      ],
      k: i,
    };
  function s(e, c) {
    var n = [{ b: e, e: c }];
    return (n[0].c = n);
  }
  var t = {
      cN: "string",
      c: [e.BE, r],
      v: [
        { b: /'/, e: /'/ },
        { b: /"/, e: /"/ },
        { b: /`/, e: /`/ },
        { b: "%[Qwi]?\\(", e: "\\)", c: s("\\(", "\\)") },
        { b: "%[Qwi]?\\[", e: "\\]", c: s("\\[", "\\]") },
        { b: "%[Qwi]?{", e: "}", c: s("{", "}") },
        { b: "%[Qwi]?<", e: ">", c: s("<", ">") },
        { b: "%[Qwi]?\\|", e: "\\|" },
        { b: /<<-\w+$/, e: /^\s*\w+$/ },
      ],
      relevance: 0,
    },
    l = {
      cN: "string",
      v: [
        { b: "%q\\(", e: "\\)", c: s("\\(", "\\)") },
        { b: "%q\\[", e: "\\]", c: s("\\[", "\\]") },
        { b: "%q{", e: "}", c: s("{", "}") },
        { b: "%q<", e: ">", c: s("<", ">") },
        { b: "%q\\|", e: "\\|" },
        { b: /<<-'\w+'$/, e: /^\s*\w+$/ },
      ],
      relevance: 0,
    },
    u = {
      b:
        "(?!%})(" +
        e.RSR +
        "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
      k: "case if select unless until when while",
      c: [
        {
          cN: "regexp",
          c: [e.BE, r],
          v: [
            { b: "//[a-z]*", relevance: 0 },
            { b: "/(?!\\/)", e: "/[a-z]*" },
          ],
        },
      ],
      relevance: 0,
    },
    _ = [
      a,
      t,
      l,
      {
        cN: "regexp",
        c: [e.BE, r],
        v: [
          { b: "%r\\(", e: "\\)", c: s("\\(", "\\)") },
          { b: "%r\\[", e: "\\]", c: s("\\[", "\\]") },
          { b: "%r{", e: "}", c: s("{", "}") },
          { b: "%r<", e: ">", c: s("<", ">") },
          { b: "%r\\|", e: "\\|" },
        ],
        relevance: 0,
      },
      u,
      {
        cN: "meta",
        b: "@\\[",
        e: "\\]",
        c: [e.inherit(e.QSM, { cN: "meta-string" })],
      },
      e.HCM,
      {
        cN: "class",
        bK: "class module struct",
        e: "$|;",
        i: /=/,
        c: [e.HCM, e.inherit(e.TM, { b: b }), { b: "<" }],
      },
      {
        cN: "class",
        bK: "lib enum union",
        e: "$|;",
        i: /=/,
        c: [e.HCM, e.inherit(e.TM, { b: b })],
        relevance: 10,
      },
      {
        bK: "annotation",
        e: "$|;",
        i: /=/,
        c: [e.HCM, e.inherit(e.TM, { b: b })],
        relevance: 10,
      },
      {
        cN: "function",
        bK: "def",
        e: /\B\b/,
        c: [e.inherit(e.TM, { b: n, endsParent: !0 })],
      },
      {
        cN: "function",
        bK: "fun macro",
        e: /\B\b/,
        c: [e.inherit(e.TM, { b: n, endsParent: !0 })],
        relevance: 5,
      },
      { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", relevance: 0 },
      { cN: "symbol", b: ":", c: [t, { b: n }], relevance: 0 },
      {
        cN: "number",
        v: [
          { b: "\\b0b([01_]+)" + c },
          { b: "\\b0o([0-7_]+)" + c },
          { b: "\\b0x([A-Fa-f0-9_]+)" + c },
          {
            b: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_*[-+]?[0-9_]*)?(_*f(32|64))?(?!_)",
          },
          { b: "\\b([1-9][0-9_]*|0)" + c },
        ],
        relevance: 0,
      },
    ];
  return (
    (r.c = _),
    (a.c = _.slice(1)),
    { aliases: ["cr"], l: "[a-zA-Z_]\\w*[!?=]?", k: i, c: _ }
  );
});
hljs.registerLanguage("purebasic", function (e) {
  return {
    aliases: ["pb", "pbi"],
    k: "Align And Array As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount Map Module NewList NewMap Next Not Or Procedure ProcedureC ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim Read Repeat Restore Return Runtime Select Shared Static Step Structure StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule UseModule Wend While With XIncludeFile XOr",
    c: [
      e.C(";", "$", { relevance: 0 }),
      {
        cN: "function",
        b: "\\b(Procedure|Declare)(C|CDLL|DLL)?\\b",
        e: "\\(",
        eE: !0,
        rB: !0,
        c: [
          { cN: "keyword", b: "(Procedure|Declare)(C|CDLL|DLL)?", eE: !0 },
          { cN: "type", b: "\\.\\w*" },
          e.UTM,
        ],
      },
      { cN: "string", b: '(~)?"', e: '"', i: "\\n" },
      { cN: "symbol", b: "#[a-zA-Z_]\\w*\\$?" },
    ],
  };
});
hljs.registerLanguage("basic", function (E) {
  return {
    cI: !0,
    i: "^.",
    l: "[a-zA-Z][a-zA-Z0-9_$%!#]*",
    k: {
      keyword:
        "ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR",
    },
    c: [
      E.QSM,
      E.C("REM", "$", { relevance: 10 }),
      E.C("'", "$", { relevance: 0 }),
      { cN: "symbol", b: "^[0-9]+ ", relevance: 10 },
      { cN: "number", b: "\\b([0-9]+[0-9edED.]*[#!]?)", relevance: 0 },
      { cN: "number", b: "(&[hH][0-9a-fA-F]{1,4})" },
      { cN: "number", b: "(&[oO][0-7]{1,6})" },
    ],
  };
});
hljs.registerLanguage("dns", function (d) {
  return {
    aliases: ["bind", "zone"],
    k: {
      keyword:
        "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT",
    },
    c: [
      d.C(";", "$", { relevance: 0 }),
      { cN: "meta", b: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/ },
      {
        cN: "number",
        b: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b",
      },
      {
        cN: "number",
        b: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b",
      },
      d.inherit(d.NM, { b: /\b\d+[dhwm]?/ }),
    ],
  };
});
hljs.registerLanguage("coffeescript", function (e) {
  var c = {
      keyword:
        "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
      literal: "true false null undefined yes no on off",
      built_in: "npm require console print module global window document",
    },
    n = "[A-Za-z$_][0-9A-Za-z$_]*",
    r = { cN: "subst", b: /#\{/, e: /}/, k: c },
    i = [
      e.BNM,
      e.inherit(e.CNM, { starts: { e: "(\\s*/)?", relevance: 0 } }),
      {
        cN: "string",
        v: [
          { b: /'''/, e: /'''/, c: [e.BE] },
          { b: /'/, e: /'/, c: [e.BE] },
          { b: /"""/, e: /"""/, c: [e.BE, r] },
          { b: /"/, e: /"/, c: [e.BE, r] },
        ],
      },
      {
        cN: "regexp",
        v: [
          { b: "///", e: "///", c: [r, e.HCM] },
          { b: "//[gim]*", relevance: 0 },
          { b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W)/ },
        ],
      },
      { b: "@" + n },
      {
        sL: "javascript",
        eB: !0,
        eE: !0,
        v: [
          { b: "```", e: "```" },
          { b: "`", e: "`" },
        ],
      },
    ];
  r.c = i;
  var s = e.inherit(e.TM, { b: n }),
    t = "(\\(.*\\))?\\s*\\B[-=]>",
    a = {
      cN: "params",
      b: "\\([^\\(]",
      rB: !0,
      c: [{ b: /\(/, e: /\)/, k: c, c: ["self"].concat(i) }],
    };
  return {
    aliases: ["coffee", "cson", "iced"],
    k: c,
    i: /\/\*/,
    c: i.concat([
      e.C("###", "###"),
      e.HCM,
      {
        cN: "function",
        b: "^\\s*" + n + "\\s*=\\s*" + t,
        e: "[-=]>",
        rB: !0,
        c: [s, a],
      },
      {
        b: /[:\(,=]\s*/,
        relevance: 0,
        c: [{ cN: "function", b: t, e: "[-=]>", rB: !0, c: [a] }],
      },
      {
        cN: "class",
        bK: "class",
        e: "$",
        i: /[:="\[\]]/,
        c: [{ bK: "extends", eW: !0, i: /[:="\[\]]/, c: [s] }, s],
      },
      { b: n + ":", e: ":", rB: !0, rE: !0, relevance: 0 },
    ]),
  };
});
hljs.registerLanguage("pf", function (t) {
  return {
    aliases: ["pf.conf"],
    l: /[a-z0-9_<>-]+/,
    k: {
      built_in: "block match pass load anchor|5 antispoof|10 set table",
      keyword:
        "in out log quick on rdomain inet inet6 proto from port os to routeallow-opts divert-packet divert-reply divert-to flags group icmp-typeicmp6-type label once probability recieved-on rtable prio queuetos tag tagged user keep fragment for os dropaf-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robinsource-hash static-portdup-to reply-to route-toparent bandwidth default min max qlimitblock-policy debug fingerprints hostid limit loginterface optimizationreassemble ruleset-optimization basic none profile skip state-defaultsstate-policy timeoutconst counters persistno modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppysource-track global rule max-src-nodes max-src-states max-src-connmax-src-conn-rate overload flushscrub|5 max-mss min-ttl no-df|10 random-id",
      literal: "all any no-route self urpf-failed egress|5 unknown",
    },
    c: [
      t.HCM,
      t.NM,
      t.QSM,
      { cN: "variable", b: /\$[\w\d#@][\w\d_]*/ },
      { cN: "variable", b: /<(?!\/)/, e: />/ },
    ],
  };
});
hljs.registerLanguage("dust", function (e) {
  return {
    aliases: ["dst"],
    cI: !0,
    sL: "xml",
    c: [
      {
        cN: "template-tag",
        b: /\{[#\/]/,
        e: /\}/,
        i: /;/,
        c: [
          {
            cN: "name",
            b: /[a-zA-Z\.-]+/,
            starts: { eW: !0, relevance: 0, c: [e.QSM] },
          },
        ],
      },
      {
        cN: "template-variable",
        b: /\{/,
        e: /\}/,
        i: /;/,
        k: "if eq ne lt lte gt gte select default math sep",
      },
    ],
  };
});
hljs.registerLanguage("haskell", function (e) {
  var i = { v: [e.C("--", "$"), e.C("{-", "-}", { c: ["self"] })] },
    a = { cN: "meta", b: "{-#", e: "#-}" },
    l = { cN: "meta", b: "^#", e: "$" },
    c = { cN: "type", b: "\\b[A-Z][\\w']*", relevance: 0 },
    n = {
      b: "\\(",
      e: "\\)",
      i: '"',
      c: [
        a,
        l,
        { cN: "type", b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?" },
        e.inherit(e.TM, { b: "[_a-z][\\w']*" }),
        i,
      ],
    };
  return {
    aliases: ["hs"],
    k: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
    c: [
      { bK: "module", e: "where", k: "module where", c: [n, i], i: "\\W\\.|;" },
      {
        b: "\\bimport\\b",
        e: "$",
        k: "import qualified as hiding",
        c: [n, i],
        i: "\\W\\.|;",
      },
      {
        cN: "class",
        b: "^(\\s*)?(class|instance)\\b",
        e: "where",
        k: "class family instance where",
        c: [c, n, i],
      },
      {
        cN: "class",
        b: "\\b(data|(new)?type)\\b",
        e: "$",
        k: "data family type newtype deriving",
        c: [a, c, n, { b: "{", e: "}", c: n.c }, i],
      },
      { bK: "default", e: "$", c: [c, n, i] },
      { bK: "infix infixl infixr", e: "$", c: [e.CNM, i] },
      {
        b: "\\bforeign\\b",
        e: "$",
        k: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
        c: [c, e.QSM, i],
      },
      { cN: "meta", b: "#!\\/usr\\/bin\\/env runhaskell", e: "$" },
      a,
      l,
      e.QSM,
      e.CNM,
      c,
      e.inherit(e.TM, { b: "^[_a-z][\\w']*" }),
      i,
      { b: "->|<-" },
    ],
  };
});
hljs.registerLanguage("dsconfig", function (e) {
  return {
    k: "dsconfig",
    c: [
      { cN: "keyword", b: "^dsconfig", e: "\\s", eE: !0, relevance: 10 },
      {
        cN: "built_in",
        b: "(list|create|get|set|delete)-(\\w+)",
        e: "\\s",
        eE: !0,
        i: "!@#$%^&*()",
        relevance: 10,
      },
      { cN: "built_in", b: "--(\\w+)", e: "\\s", eE: !0 },
      { cN: "string", b: /"/, e: /"/ },
      { cN: "string", b: /'/, e: /'/ },
      { cN: "string", b: "[\\w-?]+:\\w+", e: "\\W", relevance: 0 },
      { cN: "string", b: "\\w+-?\\w+", e: "\\W", relevance: 0 },
      e.HCM,
    ],
  };
});
hljs.registerLanguage("less", function (e) {
  function r(e) {
    return { cN: "string", b: "~?" + e + ".*?" + e };
  }
  function t(e, r, t) {
    return { cN: e, b: r, relevance: t };
  }
  var a = "[\\w-]+",
    c = "(" + a + "|@{" + a + "})",
    s = [],
    n = [],
    b = { b: "\\(", e: "\\)", c: n, relevance: 0 };
  n.push(
    e.CLCM,
    e.CBCM,
    r("'"),
    r('"'),
    e.CSSNM,
    { b: "(url|data-uri)\\(", starts: { cN: "string", e: "[\\)\\n]", eE: !0 } },
    t("number", "#[0-9A-Fa-f]+\\b"),
    b,
    t("variable", "@@?" + a, 10),
    t("variable", "@{" + a + "}"),
    t("built_in", "~?`[^`]*?`"),
    { cN: "attribute", b: a + "\\s*:", e: ":", rB: !0, eE: !0 },
    { cN: "meta", b: "!important" }
  );
  var i = n.concat({ b: "{", e: "}", c: s }),
    l = { bK: "when", eW: !0, c: [{ bK: "and not" }].concat(n) },
    o = {
      b: c + "\\s*:",
      rB: !0,
      e: "[;}]",
      relevance: 0,
      c: [
        {
          cN: "attribute",
          b: c,
          e: ":",
          eE: !0,
          starts: { eW: !0, i: "[<=$]", relevance: 0, c: n },
        },
      ],
    },
    u = {
      cN: "keyword",
      b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: { e: "[;{}]", rE: !0, c: n, relevance: 0 },
    },
    v = {
      cN: "variable",
      v: [{ b: "@" + a + "\\s*:", relevance: 15 }, { b: "@" + a }],
      starts: { e: "[;}]", rE: !0, c: i },
    },
    C = {
      v: [
        { b: "[\\.#:&\\[>]", e: "[;{}]" },
        { b: c, e: "{" },
      ],
      rB: !0,
      rE: !0,
      i: "[<='$\"]",
      relevance: 0,
      c: [
        e.CLCM,
        e.CBCM,
        l,
        t("keyword", "all\\b"),
        t("variable", "@{" + a + "}"),
        t("selector-tag", c + "%?", 0),
        t("selector-id", "#" + c),
        t("selector-class", "\\." + c, 0),
        t("selector-tag", "&", 0),
        { cN: "selector-attr", b: "\\[", e: "\\]" },
        { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
        { b: "\\(", e: "\\)", c: i },
        { b: "!important" },
      ],
    };
  return s.push(e.CLCM, e.CBCM, u, v, o, C), { cI: !0, i: "[=>'/<($\"]", c: s };
});
hljs.registerLanguage("markdown", function (e) {
  return {
    aliases: ["md", "mkdown", "mkd"],
    c: [
      {
        cN: "section",
        v: [{ b: "^#{1,6}", e: "$" }, { b: "^.+?\\n[=-]{2,}$" }],
      },
      { b: "<", e: ">", sL: "xml", relevance: 0 },
      { cN: "bullet", b: "^\\s*([*+-]|(\\d+\\.))\\s+" },
      { cN: "strong", b: "[*_]{2}.+?[*_]{2}" },
      { cN: "emphasis", v: [{ b: "\\*.+?\\*" }, { b: "_.+?_", relevance: 0 }] },
      { cN: "quote", b: "^>\\s+", e: "$" },
      {
        cN: "code",
        v: [
          { b: "^```\\w*\\s*$", e: "^```[ ]*$" },
          { b: "`.+?`" },
          { b: "^( {4}|\\t)", e: "$", relevance: 0 },
        ],
      },
      { b: "^[-\\*]{3,}", e: "$" },
      {
        b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
        rB: !0,
        c: [
          { cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, relevance: 0 },
          { cN: "link", b: "\\]\\(", e: "\\)", eB: !0, eE: !0 },
          { cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0 },
        ],
        relevance: 10,
      },
      {
        b: /^\[[^\n]+\]:/,
        rB: !0,
        c: [
          { cN: "symbol", b: /\[/, e: /\]/, eB: !0, eE: !0 },
          { cN: "link", b: /:\s*/, e: /$/, eB: !0 },
        ],
      },
    ],
  };
});
hljs.registerLanguage("erlang-repl", function (e) {
  return {
    k: {
      built_in: "spawn spawn_link self",
      keyword:
        "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor",
    },
    c: [
      { cN: "meta", b: "^[0-9]+> ", relevance: 10 },
      e.C("%", "$"),
      {
        cN: "number",
        b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
        relevance: 0,
      },
      e.ASM,
      e.QSM,
      { b: "\\?(::)?([A-Z]\\w*(::)?)+" },
      { b: "->" },
      { b: "ok" },
      { b: "!" },
      {
        b: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
        relevance: 0,
      },
      { b: "[A-Z][a-zA-Z0-9_']*", relevance: 0 },
    ],
  };
});
hljs.registerLanguage("java", function (e) {
  var a =
      "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
    t = {
      cN: "number",
      b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
      relevance: 0,
    };
  return {
    aliases: ["jsp"],
    k: a,
    i: /<\/|#/,
    c: [
      e.C("/\\*\\*", "\\*/", {
        relevance: 0,
        c: [
          { b: /\w+@/, relevance: 0 },
          { cN: "doctag", b: "@[A-Za-z]+" },
        ],
      }),
      e.CLCM,
      e.CBCM,
      e.ASM,
      e.QSM,
      {
        cN: "class",
        bK: "class interface",
        e: /[{;=]/,
        eE: !0,
        k: "class interface",
        i: /[:"\[\]]/,
        c: [{ bK: "extends implements" }, e.UTM],
      },
      { bK: "new throw return else", relevance: 0 },
      {
        cN: "function",
        b:
          "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" +
          e.UIR +
          "\\s*\\(",
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: a,
        c: [
          { b: e.UIR + "\\s*\\(", rB: !0, relevance: 0, c: [e.UTM] },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            k: a,
            relevance: 0,
            c: [e.ASM, e.QSM, e.CNM, e.CBCM],
          },
          e.CLCM,
          e.CBCM,
        ],
      },
      t,
      { cN: "meta", b: "@[A-Za-z]+" },
    ],
  };
});
hljs.registerLanguage("bnf", function (e) {
  return {
    c: [
      { cN: "attribute", b: /</, e: />/ },
      {
        b: /::=/,
        starts: {
          e: /$/,
          c: [{ b: /</, e: />/ }, e.CLCM, e.CBCM, e.ASM, e.QSM],
        },
      },
    ],
  };
});
hljs.registerLanguage("rib", function (e) {
  return {
    k: "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
    i: "</",
    c: [e.HCM, e.CNM, e.ASM, e.QSM],
  };
});
hljs.registerLanguage("plaintext", function (e) {
  return { disableAutodetect: !0 };
});
hljs.registerLanguage("dos", function (e) {
  var r = e.C(/^\s*@?rem\b/, /$/, { relevance: 10 });
  return {
    aliases: ["bat", "cmd"],
    cI: !0,
    i: /\/\*/,
    k: {
      keyword:
        "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
      built_in:
        "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del",
    },
    c: [
      { cN: "variable", b: /%%[^ ]|%[^ ]+?%|![^ ]+?!/ },
      {
        cN: "function",
        b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
        e: "goto:eof",
        c: [
          e.inherit(e.TM, {
            b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
          }),
          r,
        ],
      },
      { cN: "number", b: "\\b\\d+", relevance: 0 },
      r,
    ],
  };
});
hljs.registerLanguage("stata", function (e) {
  return {
    aliases: ["do", "ado"],
    case_insensitive: !0,
    keywords:
      "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey bias binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 bubble bubbleplot ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error esize est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 forest forestplot form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate funnel funnelplot g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labbe labbeplot labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize menl meqparse mer merg merge meta mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trimfill trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
    contains: [
      { className: "symbol", begin: /`[a-zA-Z0-9_]+'/ },
      { className: "variable", begin: /\$\{?[a-zA-Z0-9_]+\}?/ },
      {
        className: "string",
        variants: [{ begin: '`"[^\r\n]*?"\'' }, { b: '"[^\r\n"]*"' }],
      },
      {
        cN: "built_in",
        v: [
          {
            b: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\()",
          },
        ],
      },
      e.C("^[ \t]*\\*.*$", !1),
      e.CLCM,
      e.CBCM,
    ],
  };
});
hljs.registerLanguage("jboss-cli", function (e) {
  var a = {
    cN: "params",
    b: /\(/,
    e: /\)/,
    c: [
      {
        b: /[\w-]+ *=/,
        rB: !0,
        relevance: 0,
        c: [{ cN: "attr", b: /[\w-]+/ }],
      },
    ],
    relevance: 0,
  };
  return {
    aliases: ["wildfly-cli"],
    l: "[a-z-]+",
    k: {
      keyword:
        "alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source",
      literal: "true false",
    },
    c: [
      e.HCM,
      e.QSM,
      { cN: "params", b: /--[\w\-=\/]+/ },
      { cN: "function", b: /:[\w\-.]+/, relevance: 0 },
      { cN: "string", b: /\B(([\/.])[\w\-.\/=]+)+/ },
      a,
    ],
  };
});
hljs.registerLanguage("roboconf", function (e) {
  var a = "[a-zA-Z-_][^\\n{]+\\{",
    n = {
      cN: "attribute",
      b: /[a-zA-Z-_]+/,
      e: /\s*:/,
      eE: !0,
      starts: {
        e: ";",
        relevance: 0,
        c: [
          { cN: "variable", b: /\.[a-zA-Z-_]+/ },
          { cN: "keyword", b: /\(optional\)/ },
        ],
      },
    };
  return {
    aliases: ["graph", "instances"],
    cI: !0,
    k: "import",
    c: [
      { b: "^facet " + a, e: "}", k: "facet", c: [n, e.HCM] },
      {
        b: "^\\s*instance of " + a,
        e: "}",
        k: "name count channels instance-data instance-state instance of",
        i: /\S/,
        c: ["self", n, e.HCM],
      },
      { b: "^" + a, e: "}", c: [n, e.HCM] },
      e.HCM,
    ],
  };
});
hljs.registerLanguage("glsl", function (e) {
  return {
    k: {
      keyword:
        "break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
      type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
      built_in:
        "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
      literal: "true false",
    },
    i: '"',
    c: [e.CLCM, e.CBCM, e.CNM, { cN: "meta", b: "#", e: "$" }],
  };
});
hljs.registerLanguage("properties", function (e) {
  var r = "[ \\t\\f]*",
    t = "(" + r + "[:=]" + r + "|[ \\t\\f]+)",
    n = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",
    a = "([^\\\\:= \\t\\f\\n]|\\\\.)+",
    c = {
      e: t,
      relevance: 0,
      starts: { cN: "string", e: /$/, relevance: 0, c: [{ b: "\\\\\\n" }] },
    };
  return {
    cI: !0,
    i: /\S/,
    c: [
      e.C("^\\s*[!#]", "$"),
      {
        b: n + t,
        rB: !0,
        c: [{ cN: "attr", b: n, endsParent: !0, relevance: 0 }],
        starts: c,
      },
      {
        b: a + t,
        rB: !0,
        relevance: 0,
        c: [{ cN: "meta", b: a, endsParent: !0, relevance: 0 }],
        starts: c,
      },
      { cN: "attr", relevance: 0, b: a + r + "$" },
    ],
  };
});
hljs.registerLanguage("vala", function (e) {
  return {
    k: {
      keyword:
        "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
      built_in: "DBus GLib CCode Gee Object Gtk Posix",
      literal: "false true null",
    },
    c: [
      {
        cN: "class",
        bK: "class interface namespace",
        e: "{",
        eE: !0,
        i: "[^,:\\n\\s\\.]",
        c: [e.UTM],
      },
      e.CLCM,
      e.CBCM,
      { cN: "string", b: '"""', e: '"""', relevance: 5 },
      e.ASM,
      e.QSM,
      e.CNM,
      { cN: "meta", b: "^#", e: "$", relevance: 2 },
    ],
  };
});
hljs.registerLanguage("dart", function (e) {
  var t = { cN: "subst", v: [{ b: "\\$[A-Za-z0-9_]+" }] },
    r = {
      cN: "subst",
      v: [{ b: "\\${", e: "}" }],
      k: "true false null this is new super",
    },
    n = {
      cN: "string",
      v: [
        { b: "r'''", e: "'''" },
        { b: 'r"""', e: '"""' },
        { b: "r'", e: "'", i: "\\n" },
        { b: 'r"', e: '"', i: "\\n" },
        { b: "'''", e: "'''", c: [e.BE, t, r] },
        { b: '"""', e: '"""', c: [e.BE, t, r] },
        { b: "'", e: "'", i: "\\n", c: [e.BE, t, r] },
        { b: '"', e: '"', i: "\\n", c: [e.BE, t, r] },
      ],
    };
  r.c = [e.CNM, n];
  return {
    k: {
      keyword:
        "abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is library mixin new null on operator part rethrow return set show static super switch sync this throw true try typedef var void while with yield",
      built_in:
        "Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double dynamic int num print Element ElementList document querySelector querySelectorAll window",
    },
    c: [
      n,
      e.C("/\\*\\*", "\\*/", { sL: "markdown" }),
      e.C("///+\\s*", "$", { c: [{ sL: "markdown", b: ".", e: "$" }] }),
      e.CLCM,
      e.CBCM,
      {
        cN: "class",
        bK: "class interface",
        e: "{",
        eE: !0,
        c: [{ bK: "extends implements" }, e.UTM],
      },
      e.CNM,
      { cN: "meta", b: "@[A-Za-z]+" },
      { b: "=>" },
    ],
  };
});
hljs.registerLanguage("python", function (e) {
  var r = {
      keyword:
        "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",
      built_in: "Ellipsis NotImplemented",
      literal: "False None True",
    },
    b = { cN: "meta", b: /^(>>>|\.\.\.) / },
    c = { cN: "subst", b: /\{/, e: /\}/, k: r, i: /#/ },
    a = { b: /\{\{/, relevance: 0 },
    l = {
      cN: "string",
      c: [e.BE],
      v: [
        { b: /(u|b)?r?'''/, e: /'''/, c: [e.BE, b], relevance: 10 },
        { b: /(u|b)?r?"""/, e: /"""/, c: [e.BE, b], relevance: 10 },
        { b: /(fr|rf|f)'''/, e: /'''/, c: [e.BE, b, a, c] },
        { b: /(fr|rf|f)"""/, e: /"""/, c: [e.BE, b, a, c] },
        { b: /(u|r|ur)'/, e: /'/, relevance: 10 },
        { b: /(u|r|ur)"/, e: /"/, relevance: 10 },
        { b: /(b|br)'/, e: /'/ },
        { b: /(b|br)"/, e: /"/ },
        { b: /(fr|rf|f)'/, e: /'/, c: [e.BE, a, c] },
        { b: /(fr|rf|f)"/, e: /"/, c: [e.BE, a, c] },
        e.ASM,
        e.QSM,
      ],
    },
    n = {
      cN: "number",
      relevance: 0,
      v: [
        { b: e.BNR + "[lLjJ]?" },
        { b: "\\b(0o[0-7]+)[lLjJ]?" },
        { b: e.CNR + "[lLjJ]?" },
      ],
    },
    i = { cN: "params", b: /\(/, e: /\)/, c: ["self", b, n, l, e.HCM] };
  return (
    (c.c = [l, n, b]),
    {
      aliases: ["py", "gyp", "ipython"],
      k: r,
      i: /(<\/|->|\?)|=>/,
      c: [
        b,
        n,
        { bK: "if", relevance: 0 },
        l,
        e.HCM,
        {
          v: [
            { cN: "function", bK: "def" },
            { cN: "class", bK: "class" },
          ],
          e: /:/,
          i: /[${=;\n,]/,
          c: [e.UTM, i, { b: /->/, eW: !0, k: "None" }],
        },
        { cN: "meta", b: /^[\t ]*@/, e: /$/ },
        { b: /\b(print|exec)\(/ },
      ],
    }
  );
});
hljs.registerLanguage("axapta", function (e) {
  return {
    k: "false int abstract private char boolean static null if for true while long throw finally protected final return void enum else break new catch byte super case short default double public try this switch continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count order group by asc desc index hint like dispaly edit client server ttsbegin ttscommit str real date container anytype common div mod",
    c: [
      e.CLCM,
      e.CBCM,
      e.ASM,
      e.QSM,
      e.CNM,
      { cN: "meta", b: "#", e: "$" },
      {
        cN: "class",
        bK: "class interface",
        e: "{",
        eE: !0,
        i: ":",
        c: [{ bK: "extends implements" }, e.UTM],
      },
    ],
  };
});
hljs.registerLanguage("lasso", function (e) {
  var r = "[a-zA-Z_][\\w.]*",
    a = "<\\?(lasso(script)?|=)",
    t = "\\]|\\?>",
    n = {
      literal:
        "true false none minimal full all void and or not bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft",
      built_in:
        "array date decimal duration integer map pair string tag xml null boolean bytes keyword list locale queue set stack staticarray local var variable global data self inherited currentcapture givenblock",
      keyword:
        "cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else fail_if fail_ifnot fail if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome",
    },
    l = e.C("\x3c!--", "--\x3e", { relevance: 0 }),
    i = {
      cN: "meta",
      b: "\\[noprocess\\]",
      starts: { e: "\\[/noprocess\\]", rE: !0, c: [l] },
    },
    s = { cN: "meta", b: "\\[/noprocess|" + a },
    o = { cN: "symbol", b: "'" + r + "'" },
    c = [
      e.CLCM,
      e.CBCM,
      e.inherit(e.CNM, { b: e.CNR + "|(-?infinity|NaN)\\b" }),
      e.inherit(e.ASM, { i: null }),
      e.inherit(e.QSM, { i: null }),
      { cN: "string", b: "`", e: "`" },
      { v: [{ b: "[#$]" + r }, { b: "#", e: "\\d+", i: "\\W" }] },
      { cN: "type", b: "::\\s*", e: r, i: "\\W" },
      {
        cN: "params",
        v: [{ b: "-(?!infinity)" + r, relevance: 0 }, { b: "(\\.\\.\\.)" }],
      },
      { b: /(->|\.)\s*/, relevance: 0, c: [o] },
      {
        cN: "class",
        bK: "define",
        rE: !0,
        e: "\\(|=>",
        c: [e.inherit(e.TM, { b: r + "(=(?!>))?|[-+*/%](?!>)" })],
      },
    ];
  return {
    aliases: ["ls", "lassoscript"],
    cI: !0,
    l: r + "|&[lg]t;",
    k: n,
    c: [
      {
        cN: "meta",
        b: t,
        relevance: 0,
        starts: { e: "\\[|" + a, rE: !0, relevance: 0, c: [l] },
      },
      i,
      s,
      {
        cN: "meta",
        b: "\\[no_square_brackets",
        starts: {
          e: "\\[/no_square_brackets\\]",
          l: r + "|&[lg]t;",
          k: n,
          c: [
            {
              cN: "meta",
              b: t,
              relevance: 0,
              starts: { e: "\\[noprocess\\]|" + a, rE: !0, c: [l] },
            },
            i,
            s,
          ].concat(c),
        },
      },
      { cN: "meta", b: "\\[", relevance: 0 },
      { cN: "meta", b: "^#!", e: "lasso9$", relevance: 10 },
    ].concat(c),
  };
});
hljs.registerLanguage("scheme", function (e) {
  var t = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
    r = "(\\-|\\+)?\\d+([./]\\d+)?",
    a = { cN: "literal", b: "(#t|#f|#\\\\" + t + "|#\\\\.)" },
    i = {
      cN: "number",
      v: [
        { b: r, relevance: 0 },
        {
          b: "(\\-|\\+)?\\d+([./]\\d+)?[+\\-](\\-|\\+)?\\d+([./]\\d+)?i",
          relevance: 0,
        },
        { b: "#b[0-1]+(/[0-1]+)?" },
        { b: "#o[0-7]+(/[0-7]+)?" },
        { b: "#x[0-9a-f]+(/[0-9a-f]+)?" },
      ],
    },
    n = e.QSM,
    c = [e.C(";", "$", { relevance: 0 }), e.C("#\\|", "\\|#")],
    l = { b: t, relevance: 0 },
    s = { cN: "symbol", b: "'" + t },
    o = { eW: !0, relevance: 0 },
    u = {
      v: [{ b: /'/ }, { b: "`" }],
      c: [{ b: "\\(", e: "\\)", c: ["self", a, n, i, l, s] }],
    },
    p = {
      cN: "name",
      b: t,
      l: t,
      k: {
        "builtin-name":
          "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?",
      },
    },
    d = {
      v: [
        { b: "\\(", e: "\\)" },
        { b: "\\[", e: "\\]" },
      ],
      c: [
        {
          b: /lambda/,
          eW: !0,
          rB: !0,
          c: [p, { b: /\(/, e: /\)/, endsParent: !0, c: [l] }],
        },
        p,
        o,
      ],
    };
  return (
    (o.c = [a, i, n, l, s, u, d].concat(c)),
    { i: /\S/, c: [{ cN: "meta", b: "^#!", e: "$" }, i, n, s, u, d].concat(c) }
  );
});
hljs.registerLanguage("fsharp", function (e) {
  var t = { b: "<", e: ">", c: [e.inherit(e.TM, { b: /'[a-zA-Z0-9_]+/ })] };
  return {
    aliases: ["fs"],
    k: "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
    i: /\/\*/,
    c: [
      { cN: "keyword", b: /\b(yield|return|let|do)!/ },
      { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
      { cN: "string", b: '"""', e: '"""' },
      e.C("\\(\\*", "\\*\\)"),
      { cN: "class", bK: "type", e: "\\(|=|$", eE: !0, c: [e.UTM, t] },
      { cN: "meta", b: "\\[<", e: ">\\]", relevance: 10 },
      { cN: "symbol", b: "\\B('[A-Za-z])\\b", c: [e.BE] },
      e.CLCM,
      e.inherit(e.QSM, { i: null }),
      e.CNM,
    ],
  };
});
hljs.registerLanguage("parser3", function (e) {
  var r = e.C("{", "}", { c: ["self"] });
  return {
    sL: "xml",
    relevance: 0,
    c: [
      e.C("^#", "$"),
      e.C("\\^rem{", "}", { relevance: 10, c: [r] }),
      { cN: "meta", b: "^@(?:BASE|USE|CLASS|OPTIONS)$", relevance: 10 },
      {
        cN: "title",
        b: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$",
      },
      { cN: "variable", b: "\\$\\{?[\\w\\-\\.\\:]+\\}?" },
      { cN: "keyword", b: "\\^[\\w\\-\\.\\:]+" },
      { cN: "number", b: "\\^#[0-9a-fA-F]+" },
      e.CNM,
    ],
  };
});
hljs.registerLanguage("css", function (e) {
  var c = {
    b: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
    rB: !0,
    e: ";",
    eW: !0,
    c: [
      {
        cN: "attribute",
        b: /\S/,
        e: ":",
        eE: !0,
        starts: {
          eW: !0,
          eE: !0,
          c: [
            {
              b: /[\w-]+\(/,
              rB: !0,
              c: [
                { cN: "built_in", b: /[\w-]+/ },
                { b: /\(/, e: /\)/, c: [e.ASM, e.QSM, e.CSSNM] },
              ],
            },
            e.CSSNM,
            e.QSM,
            e.ASM,
            e.CBCM,
            { cN: "number", b: "#[0-9A-Fa-f]+" },
            { cN: "meta", b: "!important" },
          ],
        },
      },
    ],
  };
  return {
    cI: !0,
    i: /[=\/|'\$]/,
    c: [
      e.CBCM,
      { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ },
      { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ },
      { cN: "selector-attr", b: /\[/, e: /\]/, i: "$", c: [e.ASM, e.QSM] },
      { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
      { b: "@(page|font-face)", l: "@[a-z-]+", k: "@page @font-face" },
      {
        b: "@",
        e: "[{;]",
        i: /:/,
        rB: !0,
        c: [
          { cN: "keyword", b: /@\-?\w[\w]*(\-\w+)*/ },
          {
            b: /\s/,
            eW: !0,
            eE: !0,
            relevance: 0,
            k: "and or not only",
            c: [{ b: /[a-z-]+:/, cN: "attribute" }, e.ASM, e.QSM, e.CSSNM],
          },
        ],
      },
      { cN: "selector-tag", b: "[a-zA-Z-][a-zA-Z0-9_-]*", relevance: 0 },
      { b: "{", e: "}", i: /\S/, c: [e.CBCM, c] },
    ],
  };
});

/* highlightjs-line-numbers.js 2.6.0 | (C) 2018 Yauheni Pakala | MIT License | github.com/wcoder/highlightjs-line-numbers.js */
/* Edited by Hakim for reveal.js; removed async timeout */
!(function (n, e) {
  "use strict";
  function t() {
    var n = e.createElement("style");
    (n.type = "text/css"),
      (n.innerHTML = g(
        ".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",
        [v, L, b]
      )),
      e.getElementsByTagName("head")[0].appendChild(n);
  }
  function r(t) {
    "interactive" === e.readyState || "complete" === e.readyState
      ? i(t)
      : n.addEventListener("DOMContentLoaded", function () {
          i(t);
        });
  }
  function i(t) {
    try {
      var r = e.querySelectorAll("code.hljs,code.nohighlight");
      for (var i in r) r.hasOwnProperty(i) && l(r[i], t);
    } catch (o) {
      n.console.error("LineNumbers error: ", o);
    }
  }
  function l(n, e) {
    "object" == typeof n &&
      f(function () {
        n.innerHTML = s(n, e);
      });
  }
  function o(n, e) {
    if ("string" == typeof n) {
      var t = document.createElement("code");
      return (t.innerHTML = n), s(t, e);
    }
  }
  function s(n, e) {
    e = e || { singleLine: !1 };
    var t = e.singleLine ? 0 : 1;
    return c(n), a(n.innerHTML, t);
  }
  function a(n, e) {
    var t = u(n);
    if (("" === t[t.length - 1].trim() && t.pop(), t.length > e)) {
      for (var r = "", i = 0, l = t.length; i < l; i++)
        r += g(
          '<tr><td class="{0}"><div class="{1} {2}" {3}="{5}"></div></td><td class="{4}"><div class="{1}">{6}</div></td></tr>',
          [j, m, L, b, p, i + 1, t[i].length > 0 ? t[i] : " "]
        );
      return g('<table class="{0}">{1}</table>', [v, r]);
    }
    return n;
  }
  function c(n) {
    var e = n.childNodes;
    for (var t in e)
      if (e.hasOwnProperty(t)) {
        var r = e[t];
        h(r.textContent) > 0 &&
          (r.childNodes.length > 0 ? c(r) : d(r.parentNode));
      }
  }
  function d(n) {
    var e = n.className;
    if (/hljs-/.test(e)) {
      for (var t = u(n.innerHTML), r = 0, i = ""; r < t.length; r++) {
        var l = t[r].length > 0 ? t[r] : " ";
        i += g('<span class="{0}">{1}</span>\n', [e, l]);
      }
      n.innerHTML = i.trim();
    }
  }
  function u(n) {
    return 0 === n.length ? [] : n.split(y);
  }
  function h(n) {
    return (n.trim().match(y) || []).length;
  }
  function f(e) {
    e();
  }
  function g(n, e) {
    return n.replace(/\{(\d+)\}/g, function (n, t) {
      return e[t] ? e[t] : n;
    });
  }
  var v = "hljs-ln",
    m = "hljs-ln-line",
    p = "hljs-ln-code",
    j = "hljs-ln-numbers",
    L = "hljs-ln-n",
    b = "data-line-number",
    y = /\r\n|\r|\n/g;
  n.hljs
    ? ((n.hljs.initLineNumbersOnLoad = r),
      (n.hljs.lineNumbersBlock = l),
      (n.hljs.lineNumbersValue = o),
      t())
    : n.console.error("highlight.js not detected!");
})(window, document);

/**
 * This reveal.js plugin is wrapper around the highlight.js
 * syntax highlighting library.
 */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    root.RevealHighlight = factory();
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.RevealHighlight = factory();
  }
})(this, function () {
  // Function to perform a better "data-trim" on code snippets
  // Will slice an indentation amount on each line of the snippet (amount based on the line having the lowest indentation length)
  function betterTrim(snippetEl) {
    // Helper functions
    function trimLeft(val) {
      // Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
      return val.replace(/^[\s\uFEFF\xA0]+/g, "");
    }
    function trimLineBreaks(input) {
      var lines = input.split("\n");

      // Trim line-breaks from the beginning
      for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() === "") {
          lines.splice(i--, 1);
        } else break;
      }

      // Trim line-breaks from the end
      for (var i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim() === "") {
          lines.splice(i, 1);
        } else break;
      }

      return lines.join("\n");
    }

    // Main function for betterTrim()
    return (function (snippetEl) {
      var content = trimLineBreaks(snippetEl.innerHTML);
      var lines = content.split("\n");
      // Calculate the minimum amount to remove on each line start of the snippet (can be 0)
      var pad = lines.reduce(function (acc, line) {
        if (
          line.length > 0 &&
          trimLeft(line).length > 0 &&
          acc > line.length - trimLeft(line).length
        ) {
          return line.length - trimLeft(line).length;
        }
        return acc;
      }, Number.POSITIVE_INFINITY);
      // Slice each line with this amount
      return lines
        .map(function (line, index) {
          return line.slice(pad);
        })
        .join("\n");
    })(snippetEl);
  }

  var RevealHighlight = {
    HIGHLIGHT_STEP_DELIMITER: "|",
    HIGHLIGHT_LINE_DELIMITER: ",",
    HIGHLIGHT_LINE_RANGE_DELIMITER: "-",

    init: function () {
      // Read the plugin config options and provide fallbacks
      var config = Reveal.getConfig().highlight || {};
      config.highlightOnLoad =
        typeof config.highlightOnLoad === "boolean"
          ? config.highlightOnLoad
          : true;
      config.escapeHTML =
        typeof config.escapeHTML === "boolean" ? config.escapeHTML : true;

      [].slice
        .call(document.querySelectorAll(".reveal pre code"))
        .forEach(function (block) {
          // Trim whitespace if the "data-trim" attribute is present
          if (
            block.hasAttribute("data-trim") &&
            typeof block.innerHTML.trim === "function"
          ) {
            block.innerHTML = betterTrim(block);
          }

          // Escape HTML tags unless the "data-noescape" attrbute is present
          if (config.escapeHTML && !block.hasAttribute("data-noescape")) {
            block.innerHTML = block.innerHTML
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
          }

          // Re-highlight when focus is lost (for contenteditable code)
          block.addEventListener(
            "focusout",
            function (event) {
              hljs.highlightBlock(event.currentTarget);
            },
            false
          );

          if (config.highlightOnLoad) {
            RevealHighlight.highlightBlock(block);
          }
        });
    },

    /**
     * Highlights a code block. If the <code> node has the
     * 'data-line-numbers' attribute we also generate slide
     * numbers.
     *
     * If the block contains multiple line highlight steps,
     * we clone the block and create a fragment for each step.
     */
    highlightBlock: function (block) {
      hljs.highlightBlock(block);

      // Don't generate line numbers for empty code blocks
      if (block.innerHTML.trim().length === 0) return;

      if (block.hasAttribute("data-line-numbers")) {
        hljs.lineNumbersBlock(block, { singleLine: true });

        // If there is at least one highlight step, generate
        // fragments
        var highlightSteps = RevealHighlight.deserializeHighlightSteps(
          block.getAttribute("data-line-numbers")
        );
        if (highlightSteps.length > 1) {
          // If the original code block has a fragment-index,
          // each clone should follow in an incremental sequence
          var fragmentIndex = parseInt(
            block.getAttribute("data-fragment-index"),
            10
          );
          if (typeof fragmentIndex !== "number" || isNaN(fragmentIndex)) {
            fragmentIndex = null;
          }

          // Generate fragments for all steps except the original block
          highlightSteps.slice(1).forEach(function (highlight) {
            var fragmentBlock = block.cloneNode(true);
            fragmentBlock.setAttribute(
              "data-line-numbers",
              RevealHighlight.serializeHighlightSteps([highlight])
            );
            fragmentBlock.classList.add("fragment");
            block.parentNode.appendChild(fragmentBlock);
            RevealHighlight.highlightLines(fragmentBlock);

            if (typeof fragmentIndex === "number") {
              fragmentBlock.setAttribute("data-fragment-index", fragmentIndex);
              fragmentIndex += 1;
            } else {
              fragmentBlock.removeAttribute("data-fragment-index");
            }
          });

          block.removeAttribute("data-fragment-index");
          block.setAttribute(
            "data-line-numbers",
            RevealHighlight.serializeHighlightSteps([highlightSteps[0]])
          );
        }

        RevealHighlight.highlightLines(block);
      }
    },

    /**
     * Visually emphasize specific lines within a code block.
     * This only works on blocks with line numbering turned on.
     *
     * @param {HTMLElement} block a <code> block
     * @param {String} [linesToHighlight] The lines that should be
     * highlighted in this format:
     * "1" 		= highlights line 1
     * "2,5"	= highlights lines 2 & 5
     * "2,5-7"	= highlights lines 2, 5, 6 & 7
     */
    highlightLines: function (block, linesToHighlight) {
      var highlightSteps = RevealHighlight.deserializeHighlightSteps(
        linesToHighlight || block.getAttribute("data-line-numbers")
      );

      if (highlightSteps.length) {
        highlightSteps[0].forEach(function (highlight) {
          var elementsToHighlight = [];

          // Highlight a range
          if (typeof highlight.end === "number") {
            elementsToHighlight = [].slice.call(
              block.querySelectorAll(
                "table tr:nth-child(n+" +
                  highlight.start +
                  "):nth-child(-n+" +
                  highlight.end +
                  ")"
              )
            );
          }
          // Highlight a single line
          else if (typeof highlight.start === "number") {
            elementsToHighlight = [].slice.call(
              block.querySelectorAll(
                "table tr:nth-child(" + highlight.start + ")"
              )
            );
          }

          if (elementsToHighlight.length) {
            elementsToHighlight.forEach(function (lineElement) {
              lineElement.classList.add("highlight-line");
            });

            block.classList.add("has-highlights");
          }
        });
      }
    },

    /**
     * Parses and formats a user-defined string of line
     * numbers to highlight.
     *
     * @example
     * RevealHighlight.deserializeHighlightSteps( '1,2|3,5-10' )
     * // [
     * //   [ { start: 1 }, { start: 2 } ],
     * //   [ { start: 3 }, { start: 5, end: 10 } ]
     * // ]
     */
    deserializeHighlightSteps: function (highlightSteps) {
      // Remove whitespace
      highlightSteps = highlightSteps.replace(/\s/g, "");

      // Divide up our line number groups
      highlightSteps = highlightSteps.split(
        RevealHighlight.HIGHLIGHT_STEP_DELIMITER
      );

      return highlightSteps.map(function (highlights) {
        return highlights
          .split(RevealHighlight.HIGHLIGHT_LINE_DELIMITER)
          .map(function (highlight) {
            // Parse valid line numbers
            if (/^[\d-]+$/.test(highlight)) {
              highlight = highlight.split(
                RevealHighlight.HIGHLIGHT_LINE_RANGE_DELIMITER
              );

              var lineStart = parseInt(highlight[0], 10),
                lineEnd = parseInt(highlight[1], 10);

              if (isNaN(lineEnd)) {
                return {
                  start: lineStart,
                };
              } else {
                return {
                  start: lineStart,
                  end: lineEnd,
                };
              }
            }
            // If no line numbers are provided, no code will be highlighted
            else {
              return {};
            }
          });
      });
    },

    /**
     * Serializes parsed line number data into a string so
     * that we can store it in the DOM.
     */
    serializeHighlightSteps: function (highlightSteps) {
      return highlightSteps
        .map(function (highlights) {
          return highlights
            .map(function (highlight) {
              // Line range
              if (typeof highlight.end === "number") {
                return (
                  highlight.start +
                  RevealHighlight.HIGHLIGHT_LINE_RANGE_DELIMITER +
                  highlight.end
                );
              }
              // Single line
              else if (typeof highlight.start === "number") {
                return highlight.start;
              }
              // All lines
              else {
                return "";
              }
            })
            .join(RevealHighlight.HIGHLIGHT_LINE_DELIMITER);
        })
        .join(RevealHighlight.HIGHLIGHT_STEP_DELIMITER);
    },
  };

  Reveal.registerPlugin("highlight", RevealHighlight);

  return RevealHighlight;
});
