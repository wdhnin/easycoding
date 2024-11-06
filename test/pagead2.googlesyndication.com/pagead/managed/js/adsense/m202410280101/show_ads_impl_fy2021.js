(function(sttc) {
    'use strict';
    var q, aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ea = {},
        ha = {};

    function ia(a, b, c) {
        if (!c || a != null) {
            c = ha[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ha[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ha[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var ka = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        la;
    if (da && typeof Object.setPrototypeOf == "function") la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                ma = pa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = la;

    function sa(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (ra) ra(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Nh = b.prototype
    }
    ja("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    ja("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    ja("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        sa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ja("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ea.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var t = this || self;

    function ta(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = t, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ua(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function wa(a) {
        var b = ua(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function xa(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function ya(a) {
        return Object.prototype.hasOwnProperty.call(a, za) && a[za] || (a[za] = ++Aa)
    }
    var za = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Aa = 0;

    function Ba(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ca(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Da(a, b, c) {
        Da = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ba : Ca;
        return Da.apply(null, arguments)
    }

    function Ea(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Fa(a, b, c) {
        a = a.split(".");
        c = c || t;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ga(a) {
        return a
    }

    function Ha(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Nh = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.zo = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
    var Ia = {
        wn: 0,
        vn: 1,
        un: 2
    };
    var Ja;

    function La(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ma(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Na(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Oa(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Pa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Qa(a, b, c) {
        let d = c;
        Ma(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ra(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Sa(a, b) {
        return La(a, b) >= 0
    }

    function Ta(a, b) {
        b = La(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Ua(a, b) {
        let c = 0;
        Na(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function Va(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Wa(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Xa(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (wa(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function Ya(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Za(a, b, c) {
        c = c || $a;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            h > 0 ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function bb(a, b) {
        if (!wa(a) || !wa(b) || a.length != b.length) return !1;
        const c = a.length,
            d = cb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function $a(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function cb(a, b) {
        return a === b
    }

    function db(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = db.apply(null, Ya(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function eb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var fb = {
        Fk: "google_adtest",
        Jk: "google_ad_client",
        Sk: "google_ad_intent_query",
        Rk: "google_ad_intent_qetid",
        Qk: "google_ad_intent_eids",
        Kk: "google_ad_format",
        Mk: "google_ad_height",
        fl: "google_ad_width",
        Tk: "google_ad_layout",
        Uk: "google_ad_layout_key",
        Wk: "google_ad_output",
        Xk: "google_ad_region",
        al: "google_ad_slot",
        dl: "google_ad_type",
        el: "google_ad_url",
        Ul: "google_gl",
        jm: "google_enable_ose",
        tm: "google_full_width_responsive",
        zn: "google_rl_filtering",
        yn: "google_rl_mode",
        An: "google_rt",
        xn: "google_rl_dest_url",
        bn: "google_max_radlink_len",
        gn: "google_num_radlinks",
        hn: "google_num_radlinks_per_unit",
        Ik: "google_ad_channel",
        Zm: "google_max_num_ads",
        cn: "google_max_responsive_height",
        Gl: "google_color_border",
        im: "google_enable_content_recommendations",
        Rl: "google_content_recommendation_ui_type",
        Ql: "google_source_type",
        Pl: "google_content_recommendation_rows_num",
        Ol: "google_content_recommendation_columns_num",
        Nl: "google_content_recommendation_ad_positions",
        Sl: "google_content_recommendation_use_square_imgs",
        Il: "google_color_link",
        Hl: "google_color_line",
        Kl: "google_color_url",
        Gk: "google_ad_block",
        Zk: "google_ad_section",
        Hk: "google_ad_callback",
        Dl: "google_captcha_token",
        Jl: "google_color_text",
        xl: "google_alternate_ad_url",
        Pk: "google_ad_host_tier_id",
        El: "google_city",
        Nk: "google_ad_host",
        Ok: "google_ad_host_channel",
        yl: "google_alternate_color",
        Fl: "google_color_bg",
        km: "google_encoding",
        rm: "google_font_face",
        vm: "google_hints",
        Lm: "google_image_size",
        dn: "google_mtl",
        bo: "google_cpm",
        Ml: "google_contents",
        en: "google_native_settings_key",
        Tl: "google_country",
        Un: "google_targeting",
        sm: "google_font_size",
        Zl: "google_disable_video_autoplay",
        so: "google_video_product_type",
        ro: "google_video_doc_id",
        qo: "google_cust_gender",
        On: "google_cust_lh",
        Nn: "google_cust_l",
        ao: "google_tfs",
        Sm: "google_kw",
        Rn: "google_tag_for_child_directed_treatment",
        Sn: "google_tag_for_under_age_of_consent",
        Cn: "google_region",
        Wl: "google_cust_criteria",
        Yk: "google_safe",
        Vl: "google_ctr_threshold",
        En: "google_resizing_allowed",
        Gn: "google_resizing_width",
        Fn: "google_resizing_height",
        po: "google_cust_age",
        Vm: "google_language",
        Tm: "google_kw_type",
        qn: "google_pucrd",
        nn: "google_page_url",
        Tn: "google_tag_partner",
        Kn: "google_restrict_data_processing",
        Bk: "google_adbreak_test",
        Lk: "google_ad_frequency_hint",
        Dk: "google_admob_interstitial_slot",
        Ek: "google_admob_rewarded_slot",
        Ck: "google_admob_ads_only",
        bl: "google_ad_start_delay_hint",
        Ym: "google_max_ad_content_rating",
        sn: "google_ad_public_floor",
        rn: "google_ad_private_floor",
        no: "google_traffic_source",
        kn: "google_overlays",
        on: "google_privacy_treatments",
        Pn: "google_special_category_data",
        uo: "google_wrap_fullscreen_ad",
        Vk: "google_ad_loaded_callback"
    };

    function gb() {
        return !1
    }

    function hb() {
        return !0
    }

    function ib(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function jb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function kb(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function lb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function mb(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function nb(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var ob = {
            passive: !0
        },
        pb = kb(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function qb(a) {
        return a ? a.passive && pb() ? a : a.capture || !1 : !1
    }

    function rb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, qb(d)), !0) : !1
    }

    function sb(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, qb(d)), !0) : !1
    };

    function tb(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function ub(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function vb(a) {
        return ub.apply(null, arguments) / arguments.length
    };

    function wb(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    wb.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    wb.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    wb.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    wb.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function xb(a, b) {
        this.width = a;
        this.height = b
    }

    function yb(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    q = xb.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    q.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Bb(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Cb(a) {
        var b = Db;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Eb(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Fb(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Gb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Hb(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Gb.length; f++) c = Gb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Ib(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Jb(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    let Kb = globalThis.trustedTypes,
        Lb;

    function Mb() {
        let a = null;
        if (!Kb) return a;
        try {
            const b = c => c;
            a = Kb.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    }

    function Nb() {
        Lb === void 0 && (Lb = Mb());
        return Lb
    };
    var Ob = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function Qb(a) {
        const b = Nb();
        return new Ob(b ? b.createScriptURL(a) : a)
    }

    function Rb(a) {
        if (a instanceof Ob) return a.g;
        throw Error("");
    };
    var Sb = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        Tb = new Sb("about:invalid#zClosurez");

    function Ub(a) {
        if (a instanceof Sb) return a.g;
        throw Error("");
    };
    class Vb {
        constructor(a) {
            this.Gj = a
        }
    }

    function Wb(a) {
        return new Vb(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Xb = [Wb("data"), Wb("http"), Wb("https"), Wb("mailto"), Wb("ftp"), new Vb(a => /^[^:]*([/?#]|$)/.test(a))];

    function Yb(a, b = Xb) {
        if (a instanceof Sb) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Vb && d.Gj(a)) return new Sb(a)
        }
    }
    var Zb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function $b(a) {
        if (Zb.test(a)) return a
    }

    function ac(a) {
        return a instanceof Sb ? Ub(a) : $b(a)
    };

    function bc(a) {
        var b = Yb("#", Xb) || Tb;
        b = ac(b);
        b !== void 0 && (a.href = b)
    };
    var cc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };
    var dc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function ec(a) {
        const b = Nb();
        return new dc(b ? b.createHTML(a) : a)
    }

    function fc(a) {
        if (a instanceof dc) return a.g;
        throw Error("");
    };

    function gc(a, b) {
        if (a.nodeType === 1 && /^(script|style)$/i.test(a.tagName)) throw Error("");
        a.innerHTML = fc(b)
    }

    function hc(a, b, c) {
        var d = [ic `width`, ic `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof cc) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function jc(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const kc = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function lc(a = document) {
        a = ("document" in a ? a.document : a).querySelector ? .("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function mc(a, b) {
        a.src = Rb(b);
        (b = lc(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    };
    var nc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function oc(a) {
        if (a instanceof nc) return a.g;
        throw Error("");
    };

    function pc(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function qc(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(rc, function(e, f) {
            let g = c[e];
            if (g) return g;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (gc(d, ec(e + " ")), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var rc = /&([^;\s<&]+);?/g;

    function sc(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function tc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function uc(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var vc = ta(610401301, !1),
        wc = ta(653718497, ta(1, !0));

    function xc() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var yc;
    const zc = t.navigator;
    yc = zc ? zc.userAgentData || null : null;

    function Ac(a) {
        return vc ? yc ? yc.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function u(a) {
        return xc().indexOf(a) != -1
    };

    function Bc() {
        return vc ? !!yc && yc.brands.length > 0 : !1
    }

    function Cc() {
        return Bc() ? !1 : u("Opera")
    }

    function Dc() {
        return Bc() ? !1 : u("Trident") || u("MSIE")
    }

    function Ec() {
        return u("Firefox") || u("FxiOS")
    }

    function Fc() {
        return u("Safari") && !(Gc() || (Bc() ? 0 : u("Coast")) || Cc() || (Bc() ? 0 : u("Edge")) || (Bc() ? Ac("Microsoft Edge") : u("Edg/")) || (Bc() ? Ac("Opera") : u("OPR")) || Ec() || u("Silk") || u("Android"))
    }

    function Gc() {
        return Bc() ? Ac("Chromium") : (u("Chrome") || u("CriOS")) && !(Bc() ? 0 : u("Edge")) || u("Silk")
    }

    function Hc() {
        return u("Android") && !(Gc() || Ec() || Cc() || u("Silk"))
    };

    function Ic(a) {
        Ic[" "](a);
        return a
    }
    Ic[" "] = function() {};

    function Jc(a, b) {
        try {
            return Ic(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Kc = Dc(),
        Lc = u("Edge") || Kc,
        Mc = u("Gecko") && !(Jb(xc(), "WebKit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        Nc = Jb(xc(), "WebKit") && !u("Edge");

    function ic(a) {
        return new cc(a[0].toLowerCase())
    };

    function Oc(a) {
        return new nc(a[0])
    };

    function Pc(a) {
        return a instanceof dc ? a : ec(Qc(String(a)))
    }

    function Qc(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Rc(a) {
        const b = Pc("");
        return ec(a.map(c => fc(Pc(c))).join(fc(b).toString()))
    }
    const Sc = /^[a-z][a-z\d-]*$/i,
        Tc = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var Uc = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const Vc = ["action", "formaction", "href"];

    function Wc(a) {
        if (!Sc.test(a)) throw Error("");
        if (Tc.indexOf(a.toUpperCase()) !== -1) throw Error("");
    }

    function Xc(a, b, c) {
        Wc(a);
        let d = `<${a}`;
        b && (d += Yc(b));
        Array.isArray(c) || (c = c === void 0 ? [] : [c]);
        Uc.indexOf(a.toUpperCase()) !== -1 ? d += ">" : (b = Rc(c.map(e => e instanceof dc ? e : Pc(String(e)))), d += ">" + b.toString() + "</" + a + ">");
        return ec(d)
    }

    function Yc(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!Sc.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on./i.test(d)) throw Error("");
                Vc.indexOf(d.toLowerCase()) !== -1 && (e = e instanceof Sb ? e.toString() : $b(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${Pc(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function Zc(a, ...b) {
        if (b.length === 0) return Qb(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Qb(c)
    }

    function $c(a, b) {
        a = Rb(a).toString();
        const c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return ad(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function ad(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(k => e(k, h)) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        let f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(g => e(g[1], g[0])) : d.forEach(e);
        return Qb(a + b + c)
    };

    function bd(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return c
    };

    function cd(a) {
        return a ? new dd(ed(a)) : Ja || (Ja = new dd)
    }

    function fd(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new xb(a.clientWidth, a.clientHeight)
    }

    function gd(a) {
        var b = a.scrollingElement ? a.scrollingElement : Nc || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = a.defaultView;
        return new wb(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function hd(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function id(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function ed(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var jd = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        kd = {
            IMG: " ",
            BR: "\n"
        };

    function ld(a) {
        var b = [];
        md(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function md(a, b, c) {
        if (!(a.nodeName in jd))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in kd) b.push(kd[a.nodeName]);
        else
            for (a = a.firstChild; a;) md(a, b, c), a = a.nextSibling
    }

    function nd(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return od(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && Sa(e.className.split(/\s+/), c))
        })
    }

    function od(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function dd(a) {
        this.g = a || t.document || document
    }
    q = dd.prototype;
    q.Yh = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    q.Ak = dd.prototype.Yh;

    function pd(a, b) {
        return hd(a.g, b)
    }

    function qd(a, b) {
        var c = a.g;
        a = hd(c, "DIV");
        gc(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    q.da = function() {
        return this.g.defaultView
    };
    q.getChildren = function(a) {
        return a.children
    };
    q.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };
    q.hj = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (c == 1) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function rd() {
        return vc && yc ? yc.mobile : !sd() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function sd() {
        return vc && yc ? !yc.mobile && (u("iPad") || u("Android") || u("Silk")) : u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };
    var td = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ud(a) {
        try {
            return !!a && a.location.href != null && Jc(a, "foo")
        } catch {
            return !1
        }
    }

    function vd(a, b = t) {
        b = wd(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = wd(b)
    }

    function wd(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function xd(a) {
        return ud(a.top) ? a.top : null
    }

    function yd(a, b) {
        const c = zd("SCRIPT", a);
        mc(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Ad(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Bd() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Cd(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Dd(a) {
        const b = [];
        Cd(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ed(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var Gd = kb(() => Ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Fd) || Math.random() < 1E-4);
    const Fd = a => xc().indexOf(a) != -1;
    var Hd = /^([0-9.]+)px$/,
        Id = /^(-?[0-9.]{1,30})$/;

    function Jd(a) {
        if (!Id.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Ld(a) {
        return (a = Hd.exec(a)) ? +a[1] : null
    }
    var Md = {
        gl: "allow-forms",
        il: "allow-modals",
        jl: "allow-orientation-lock",
        kl: "allow-pointer-lock",
        ll: "allow-popups",
        ml: "allow-popups-to-escape-sandbox",
        ql: "allow-presentation",
        rl: "allow-same-origin",
        ul: "allow-scripts",
        vl: "allow-top-navigation",
        wl: "allow-top-navigation-by-user-activation"
    };
    const Nd = kb(() => Dd(Md));

    function Od() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Nd();
        return a.length ? Oa(b, c => !Sa(a, c)) : b
    }

    function Pd() {
        const a = zd("IFRAME"),
            b = {};
        Ma(Nd(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Qd = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Rd = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (Qd(a, b)) return a;
                if (!(a = wd(a))) break
            }
            return null
        },
        Sd = kb(() => rd() ? 2 : sd() ? 1 : 0),
        v = (a, b) => {
            Cd(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Ud = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Td(a.style.cssText), Cd(a, b)
        },
        Td = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ma((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d &&
                            e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Vd = a => {
            const b = /!\s*important/i;
            Ud(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const Wd = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Xd = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Yd = /.*domain\.test$/,
        Zd = /\.prod\.google\.com(:\d+)?$/;
    var $d = a => Wd[a] || Xd.test(a) || Yd.test(a) || Zd.test(a);
    let ae = [];
    const be = () => {
        const a = ae;
        ae = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var ce = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        de = (a, b) => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: ce(),
                    configurable: !1
                })
            } catch (c) {
                b && b.aa(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || a <= 0) && b.aa(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        ee = (a, b) => {
            a.document.readyState === "complete" ? (ae.push(b), ae.length == 1 && (window.Promise ? Promise.resolve().then(be) : window.setImmediate ? setImmediate(be) : setTimeout(be, 0))) : a.addEventListener("load", b)
        },
        fe = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function zd(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var ge = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, ud(a) && (b = a);
            return b
        },
        ie = a => Gc() && rd() ? he(a) : 1,
        he = a => {
            var b = xd(a);
            if (!b) return 1;
            a = Sd() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };
    let je;

    function ke(a) {
        return (je || (je = new TextEncoder)).encode(a)
    };

    function le(a) {
        t.setTimeout(() => {
            throw a;
        }, 0)
    };
    Hc();
    Gc();
    Fc();
    var me = {},
        ne = null;

    function oe(a) {
        var b = 3;
        b === void 0 && (b = 0);
        pe();
        b = me[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function qe(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return oe(b)
    }

    function re(a) {
        var b = [];
        se(a, function(c) {
            b.push(c)
        });
        return b
    }

    function se(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = ne[l];
                if (m != null) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        pe();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (h === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
        }
    }

    function pe() {
        if (!ne) {
            ne = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                me[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    ne[f] === void 0 && (ne[f] = e)
                }
            }
        }
    };

    function te(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const ue = /[-_.]/g,
        ve = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function we(a) {
        return ve[a] || ""
    }

    function xe(a) {
        return a != null && a instanceof Uint8Array
    }
    var ye = {},
        ze = typeof structuredClone != "undefined";
    let Ae;

    function Be(a) {
        if (a !== ye) throw Error("illegal external caller");
    }

    function Ce() {
        return Ae || (Ae = new De(null, ye))
    }
    var De = class {
        constructor(a, b) {
            Be(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return this.g == null
        }
    };

    function Ee(a, b) {
        const c = Fe;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function Ge(a) {
        a.Fo = !0;
        return a
    }
    let Fe = void 0;
    const He = Ge(a => a !== null && a !== void 0);
    var Ie = Ge(a => typeof a === "number"),
        Je = Ge(a => typeof a === "string"),
        Ke = Ge(a => a === void 0);

    function Le() {
        var a = Me;
        return Ge(b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    }
    var Ne = Ge(a => !!a && (typeof a === "object" || typeof a === "function"));

    function Oe(a) {
        a.Ej = !0;
        return a
    };

    function Pe(a) {
        if (Je(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
        } else if (Ie(a) && !Number.isSafeInteger(a)) throw Error(String(a));
        return BigInt(a)
    }
    var Se = Ge(a => a >= Qe && a <= Re);
    const Qe = BigInt(Number.MIN_SAFE_INTEGER),
        Re = BigInt(Number.MAX_SAFE_INTEGER);
    let Te = 0,
        Ue = 0,
        Ve;

    function We(a) {
        const b = a >>> 0;
        Te = b;
        Ue = (a - b) / 4294967296 >>> 0
    }

    function Xe(a) {
        if (a < 0) {
            We(-a);
            a = Te;
            var b = Ue;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Te = c >>> 0;
            Ue = d >>> 0
        } else We(a)
    }

    function Ye(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Ze() {
        var a = Te,
            b = Ue,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Ye(a, b);
        return c
    }

    function $e(a) {
        a.length < 16 ? Xe(Number(a)) : (a = BigInt(a), Te = Number(a & BigInt(4294967295)) >>> 0, Ue = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function af(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        bf = Symbol(),
        cf = Symbol(),
        df = Symbol(),
        ef = Symbol();

    function ff(a) {
        return !!((a[x] | 0) & 2)
    }

    function gf(a) {
        a[x] |= 34;
        return a
    }

    function hf(a) {
        a[x] |= 32;
        return a
    }

    function jf(a, b) {
        b[x] = (a | 0) & -30975
    }

    function kf(a, b) {
        b[x] = (a | 34) & -30941
    };
    var lf = {},
        mf = {};

    function nf(a) {
        return !(!a || typeof a !== "object" || a.Kj !== mf)
    }

    function of (a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function pf(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function qf(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new De(a, ye) : Ce();
            else if (a.constructor !== De)
            if (xe(a)) a = a.length ? new De(c ? a : new Uint8Array(a), ye) : Ce();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function rf(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[x] | 0) & 1 ? !0 : !1
    }
    var uf;
    const vf = [];
    vf[x] = 55;
    uf = Object.freeze(vf);

    function wf(a) {
        if (a & 2) throw Error();
    }

    function xf(a, b) {
        if (typeof b !== "number" || b < 0 || b > a.length) throw Error();
    }
    class yf {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new yf(this.g, this.i, this.l)
        }
    }
    var zf = Object.freeze({}),
        Af = Object.freeze({}),
        Bf = Object.freeze({});
    let Cf, Df;

    function Ef(a) {
        if (Df) throw Error("");
        Df = b => {
            t.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function Ff(a) {
        if (Df) try {
            Df(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Gf() {
        const a = Error();
        pc(a, "incident");
        Df ? Ff(a) : le(a)
    }

    function Hf(a) {
        a = Error(a);
        pc(a, "warning");
        Ff(a);
        return a
    };

    function If(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function Jf(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function Kf(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${ua(a)}: ${a}`);
        return a
    }

    function Lf(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    const Mf = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Nf(a) {
        const b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : Mf.test(a)
    }

    function Of(a) {
        if (!Number.isFinite(a)) throw Hf("enum");
        return a | 0
    }

    function Pf(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Qf(a) {
        if (typeof a !== "number") throw Hf("int32");
        if (!Number.isFinite(a)) throw Hf("int32");
        return a | 0
    }

    function Rf(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Sf(a) {
        if (typeof a !== "number") throw Hf("uint32");
        if (!Number.isFinite(a)) throw Hf("uint32");
        return a >>> 0
    }

    function Tf(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Uf(a, b = 0) {
        if (!Nf(a)) throw Hf("int64");
        const c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return Vf(a);
                    case "bigint":
                        return String(BigInt.asIntN(64, a));
                    default:
                        return Wf(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return Xf(a);
                    case "bigint":
                        return Pe(BigInt.asIntN(64, a));
                    default:
                        return Yf(a)
                }
            case 0:
                switch (c) {
                    case "string":
                        return Vf(a);
                    case "bigint":
                        return Pe(BigInt.asIntN(64, a));
                    default:
                        return Zf(a)
                }
            default:
                return jc(b, "Unknown format requested type for int64")
        }
    }

    function $f(a) {
        return a == null ? a : Uf(a, 0)
    }

    function ag(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function bg(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function cg(a) {
        if (a < 0) {
            Xe(a);
            const b = Ye(Te, Ue);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (ag(String(a))) return a;
        Xe(a);
        return Ue * 4294967296 + (Te >>> 0)
    }

    function Zf(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Xe(a);
            var b = Te,
                c = Ue;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function dg(a) {
        a = Math.trunc(a);
        return a >= 0 && Number.isSafeInteger(a) ? a : cg(a)
    }

    function Wf(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                bg(b) ? a = b : (Xe(a), a = Ze())
            }
        }
        return a
    }

    function eg(a) {
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                ag(b) ? a = b : (Xe(a), a = Ye(Te, Ue))
            }
        }
        return a
    }

    function Vf(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        bg(a) || ($e(a), a = Ze());
        return a
    }

    function Xf(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return Pe(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return Pe(BigInt.asIntN(64, BigInt(a)))
    }

    function Yf(a) {
        return Number.isSafeInteger(a) ? Pe(Zf(a)) : Pe(Wf(a))
    }

    function fg(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        ag(a) || ($e(a), a = Ye(Te, Ue));
        return a
    }

    function gg(a) {
        if (a == null) return a;
        if (typeof a === "bigint") return Se(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = Se(a) ? Number(a) : String(a)), a;
        if (Nf(a)) return typeof a === "number" ? Zf(a) : Vf(a)
    }

    function hg(a, b = 0) {
        if (!Nf(a)) throw Hf("uint64");
        const c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return fg(a);
                    case "bigint":
                        return String(BigInt.asUintN(64, a));
                    default:
                        return eg(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return b = Math.trunc(Number(a)), Number.isSafeInteger(b) && b >= 0 ? a = Pe(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = Pe(BigInt.asUintN(64, BigInt(a)))), a;
                    case "bigint":
                        return Pe(BigInt.asUintN(64, a));
                    default:
                        return Number.isSafeInteger(a) ? Pe(dg(a)) : Pe(eg(a))
                }
            case 0:
                switch (c) {
                    case "string":
                        return fg(a);
                    case "bigint":
                        return Pe(BigInt.asUintN(64, a));
                    default:
                        return dg(a)
                }
            default:
                return jc(b, "Unknown format requested type for int64")
        }
    }

    function ig(a) {
        return a == null ? a : hg(a, 0)
    }

    function jg(a) {
        const b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return String(BigInt.asUintN(64, a));
        if (Nf(a)) return b === "string" ? fg(a) : eg(a)
    }

    function kg(a) {
        if (a == null) return a;
        const b = typeof a;
        if (b === "bigint") return String(BigInt.asIntN(64, a));
        if (Nf(a)) {
            if (b === "string") return Vf(a);
            if (b === "number") return Zf(a)
        }
    }

    function lg(a) {
        if (a == null) return a;
        const b = typeof a;
        if (b === "bigint") return String(BigInt.asUintN(64, a));
        if (Nf(a)) {
            if (b === "string") return fg(a);
            if (b === "number") return dg(a)
        }
    }

    function mg(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function ng(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function og(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function pg(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Nd === lf) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? qg(b) : new b : void 0;
        let e = c = a[x] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[x] = e);
        return new b(a)
    }

    function qg(a) {
        var b = a[bf];
        if (b) return b;
        b = new a;
        gf(b.P);
        return a[bf] = b
    }

    function rg(a, b, c) {
        return b ? mg(a) : og(a) ? ? (c ? "" : void 0)
    };

    function sg(a) {
        tg === void 0 && (tg = typeof Proxy === "function" ? ug(Proxy) : null);
        if (!tg || !vg()) return a;
        let b = wg ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        xg(a);
        b = new tg(a, {
            set(c, d, e) {
                yg();
                c[d] = e;
                return !0
            }
        });
        zg(a, b);
        return b
    }

    function yg() {
        Gf()
    }
    let wg = void 0,
        Ag = void 0;

    function zg(a, b) {
        (wg || (wg = new Bg)).set(a, b);
        (Ag || (Ag = new Bg)).set(b, a)
    }
    let tg = void 0,
        Bg = void 0;

    function vg() {
        Bg === void 0 && (Bg = typeof WeakMap === "function" ? ug(WeakMap) : null);
        return Bg
    }

    function ug(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch {
            return null
        }
    }
    let Cg = void 0;

    function xg(a) {
        if (Cg === void 0) {
            const b = new tg([], {});
            Cg = Array.prototype.concat.call([], b).length === 1
        }
        Cg && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }

    function Dg(a, b, c) {
        if (vg()) {
            if (Eg ? .get(b) ? .get(a)) {
                if (c) return
            } else if (Math.random() > .01) return;
            var d = a.length;
            c = {
                length: d
            };
            for (var e = 0; e < Math.min(d, 10); e++) {
                if (d <= 10) var f = e;
                else {
                    f = d / 10;
                    const g = Math.floor(e * f);
                    f = g + Math.floor(Math.random() * (Math.floor((e + 1) * f) - g))
                }
                c[f] = a[f]
            }
            Fg(a, c) ? (d = Eg || (Eg = new Bg), e = d.get(b), e || (e = new Bg, d.set(b, e)), e.set(a, c)) : (Gf(), Gg(a, b))
        }
    }

    function Hg(a, b) {
        const c = Eg ? .get(b) ? .get(a);
        c && !Fg(a, c) && (Ig(), Gg(a, b))
    }

    function Fg(a, b) {
        if (a.length !== b.length) return !1;
        for (const e in b) {
            var c = Number(e),
                d;
            if (d = pf(b, e) && Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
            if (d) return !1
        }
        return !0
    }

    function Jg(a) {
        if (a && Eg ? .has(a)) {
            var b = a.P;
            if (b)
                for (let c = 0; c < b.length; c++) {
                    const d = b[c];
                    if (c === b.length - 1 && of (d))
                        for (const e in d) {
                            if (!pf(d, e)) continue;
                            const f = d[e];
                            Array.isArray(f) && Hg(f, a)
                        } else Array.isArray(d) && Hg(d, a)
                }
        }
    }

    function Ig() {
        Gf()
    }
    let Eg = void 0;

    function Gg(a, b) {
        Eg ? .get(b) ? .delete(a)
    };
    let Kg;

    function Lg(a, b) {
        Kg = b;
        a = new a(b);
        Kg = void 0;
        return a
    }
    let Mg, Ng;

    function Og(a) {
        switch (typeof a) {
            case "boolean":
                return Mg || (Mg = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? Ng || (Ng = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function Pg(a, b, c) {
        a = Qg(a, b[0], b[1], c ? 1 : 2);
        b !== Mg && c && (a[x] |= 16384);
        return a
    }

    function Qg(a, b, c, d) {
        d = d ? ? 0;
        a == null && (a = Kg);
        Kg = void 0;
        if (a == null) {
            var e = 96;
            c ? (a = [c], e |= 512) : a = [];
            b && (e = e & -33521665 | (b & 1023) << 15)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            e = a[x] | 0;
            if (e & 2048) throw Error("farr");
            if (e & 64) return a;
            d === 1 || d === 2 || (e |= 64);
            if (c && (e |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                if (d = c.length) {
                    const f = d - 1;
                    if ( of (c[f])) {
                        e |= 256;
                        b = f - (+!!(e & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        e = e & -33521665 | (b & 1023) << 15;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, d - (+!!(e & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    e = e & -33521665 | (b & 1023) << 15
                }
            }
        }
        a[x] = e;
        return a
    };
    const Rg = {},
        Sg = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function Tg(a) {
        return a
    }

    function Ug(a) {
        if (a.Xb & 2) throw Error("Cannot mutate an immutable Map");
    }
    var Yg = class extends Sg {
        constructor(a, b, c = Tg, d = Tg) {
            super();
            let e = a[x] | 0;
            e |= 64;
            this.Xb = a[x] = e;
            this.ie = b;
            this.Ac = c;
            this.dg = this.ie ? Vg : d;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? k === void 0 && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        ag(a = Wg) {
            if (this.size !== 0) return this.Zf(a)
        }
        Zf(a = Wg) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            Ug(this);
            super.clear()
        }
        delete(a) {
            Ug(this);
            return super.delete(this.Ac(a, !0, !1))
        }
        entries() {
            var a = this.Zg();
            return new yf(a, Xg, this)
        }
        keys() {
            return this.Hj()
        }
        values() {
            var a = this.Zg();
            return new yf(a, Yg.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            Ug(this);
            a = this.Ac(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.dg(b, !0, !0, this.ie, !1, this.Xb))
        }
        has(a) {
            return super.has(this.Ac(a, !1, !1))
        }
        get(a) {
            a = this.Ac(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.ie;
                return c ? (c = this.dg(b, !1, !0, c, this.Fi,
                    this.Xb), c !== b && super.set(a, c), c) : b
            }
        }
        Zg() {
            return Array.from(super.keys())
        }
        Hj() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    Yg.prototype.toJSON = void 0;
    Yg.prototype.Kj = mf;

    function Vg(a, b, c, d, e, f) {
        a = pg(a, d, c, f);
        e && (a = Zg(a));
        return a
    }

    function Wg(a) {
        return a
    }

    function Xg(a) {
        return [a, this.get(a)]
    }
    let $g;

    function ah() {
        return $g || ($g = new Yg(gf([]), void 0, void 0, void 0, Rg))
    };

    function bh(a, b) {
        return ch(b)
    }

    function ch(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return Se(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (rf(a)) return
                    } else {
                        if (xe(a)) return te(a);
                        if (a instanceof De) {
                            const b = a.g;
                            return b == null ? "" : typeof b === "string" ? b : a.g = te(b)
                        }
                        if (a instanceof Yg) return a.ag()
                    }
        }
        return a
    };

    function dh(a, b, c) {
        a = af(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) pf(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function eh(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = rf(a) ? void 0 : e && (a[x] | 0) & 2 ? a : fh(a, b, c, d !== void 0, e);
            else if ( of (a)) {
                const f = {};
                for (let g in a) pf(a, g) && (f[g] = eh(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function fh(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = af(a);
        for (let g = 0; g < a.length; g++) a[g] = eh(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function gh(a) {
        return eh(a, hh, void 0, void 0, !1)
    }

    function hh(a) {
        a.Nd === lf ? a = a.toJSON() : a instanceof De ? (a = a.g || "", a = typeof a === "string" ? a : new Uint8Array(a)) : a = xe(a) ? new Uint8Array(a) : a instanceof Yg ? a.ag(gh) : a;
        return a
    }

    function ih(a) {
        return eh(a, jh, void 0, void 0, !1)
    }

    function jh(a) {
        return a.Nd === lf ? a.toJSON() : a instanceof Yg ? a.ag(ih) : ch(a)
    }
    var kh = ze ? structuredClone : a => fh(a, hh, void 0, void 0, !1);

    function lh(a, b, c = kf) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : fh(a, lh, d & 4 ? kf : c, !0, !0)
            }
            a.Nd === lf ? (c = a.P, d = c[x], a = d & 2 ? a : mh(a, c, d, !0)) : a instanceof Yg && !(a.Xb & 2) && (c = gf(a.Zf(lh)), a = new Yg(c, a.ie, a.Ac, a.dg));
            return a
        }
    }

    function nh(a) {
        const b = a.P;
        return mh(a, b, b[x], !1)
    }

    function mh(a, b, c, d) {
        Jg(a);
        return Lg(a.constructor, oh(b, c, d))
    }

    function oh(a, b, c) {
        const d = c || b & 2 ? kf : jf,
            e = !!(b & 32);
        a = dh(a, b, f => lh(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function Zg(a) {
        const b = a.P,
            c = b[x];
        return c & 2 ? mh(a, b, c, !1) : a
    };
    const ph = Pe(0);

    function qh(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[ef] = (a.constructor[ef] | 0) + 1) < 5 && Gf();
        return c === 0 ? !1 : !(c & b)
    }

    function rh(a, b) {
        a = a.P;
        return sh(a, a[x], b)
    }

    function th(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function sh(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (th(a, b, e, c) && cf != null && (a = Cf ? ? (Cf = {}), b = a[cf] || 0, b >= 4 || (a[cf] = b + 1, Gf())), d) : th(a, b, e, c)
        }
    }

    function uh(a, b, c) {
        const d = a.P;
        let e = d[x];
        wf(e);
        vh(d, e, b, c);
        return a
    }

    function vh(a, b, c, d) {
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            let f, g = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (d == null) return g;
                f = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[x] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function wh(a, b, c) {
        return xh(a, b, c, !1) !== void 0
    }

    function yh(a, b, c, d) {
        return xh(a, b, zh(a, d, c)) !== void 0
    }

    function Ah(a, b) {
        a = a.P;
        let c = a[x];
        const d = sh(a, c, b),
            e = Jf(d);
        e != null && e !== d && vh(a, c, b, e);
        return e
    }

    function y(a) {
        return a === zf ? 2 : 5
    }

    function Bh(a, b, c, d, e, f, g) {
        const h = a.P;
        let k = h[x];
        d = 2 & k ? 1 : d;
        f = !!f;
        e = Ch(h, k, b, e);
        var l = e[x] | 0,
            m = e;
        Hg(m, a);
        d !== 2 && d !== 1 || Gg(m, a);
        if (qh(a, l, g, f)) {
            4 & l && (e = af(e), l = Dh(l, k), k = vh(h, k, b, e));
            let p = m = 0;
            for (; m < e.length; m++) {
                const r = c(e[m]);
                r != null && (e[p++] = r)
            }
            p < m && (e.length = p);
            l = Eh(l, k);
            l = (l | 20) & -4097;
            l &= -8193;
            g && (l |= g);
            e[x] = l;
            2 & l && Object.freeze(e)
        }
        let n;
        d === 1 || d === 4 && 32 & l ? Fh(l) || (a = l, l |= 2, l !== a && (e[x] = l), Object.freeze(e)) : (g = d !== 5 ? !1 : !!(32 & l) || Fh(l) || !!wg ? .get(e), (d === 2 || g) && Fh(l) && (e = af(e), l = Dh(l, k), l = Gh(l,
            k, f), e[x] = l, k = vh(h, k, b, e)), Fh(l) || (b = l, l = Gh(l, k, f), l !== b && (e[x] = l)), g ? (n = sg(e), Dg(e, a, !0)) : d !== 2 || f || wg ? .delete(e));
        return n || e
    }

    function Ch(a, b, c, d) {
        a = sh(a, b, c, d);
        return Array.isArray(a) ? a : uf
    }

    function Eh(a, b) {
        a === 0 && (a = Dh(a, b));
        return a | 1
    }

    function Fh(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Hh(a) {
        var b = Ih,
            c = a.P;
        const d = c[x];
        var e = sh(c, d, 14);
        a = d & 2;
        a: {
            var f = e,
                g = d & 2;e = !1;
            if (f == null) {
                if (g) {
                    c = ah();
                    break a
                }
                f = []
            } else if (f.constructor === Yg) {
                if ((f.Xb & 2) == 0 || g) {
                    c = f;
                    break a
                }
                f = f.Zf()
            } else Array.isArray(f) ? e = ff(f) : f = [];
            if (g) {
                if (!f.length) {
                    c = ah();
                    break a
                }
                e || (e = !0, gf(f))
            } else if (e) {
                e = !1;
                g = af(f);
                for (f = 0; f < g.length; f++) {
                    const h = g[f] = af(g[f]);
                    Array.isArray(h[1]) && (h[1] = gf(h[1]))
                }
                f = g
            }
            e || ((f[x] | 0) & 64 ? f[x] &= -33 : 32 & d && hf(f));e = new Yg(f, b, rg, void 0);vh(c, d, 14, e);c = e
        }!a && b && (c.Fi = !0);
        return c
    }

    function Jh(a, b, c, d) {
        const e = a.P;
        let f = e[x];
        wf(f);
        if (c == null) return vh(e, f, b), a;
        c = Ag ? .get(c) || c;
        let g = c[x] | 0,
            h = g;
        const k = !!(2 & g) || Object.isFrozen(c);
        var l;
        if (l = !k)(l = void 0 === Bf) || (l = (wc || !1) && void 0 !== Af);
        if (qh(a, g)) {
            g = 21;
            k && (c = af(c), h = 0, g = Dh(g, f), g = Gh(g, f, !0));
            for (let m = 0; m < c.length; m++) c[m] = d(c[m])
        }
        l ? (c = af(c), h = 0, g = Dh(g, f), g = Gh(g, f, !0)) : k || Dg(c, a);
        g !== h && (c[x] = g);
        vh(e, f, b, c);
        return a
    }

    function Kh(a, b, c, d) {
        const e = a.P;
        let f = e[x];
        wf(f);
        vh(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Lh(a, b, c, d) {
        const e = a.P;
        var f = e[x];
        wf(f);
        if (d == null) {
            var g = Mh(e);
            if (Nh(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = Mh(e);
            const h = Nh(g, e, f, c);
            h !== b && (h && (f = vh(e, f, h)), g.set(c, b))
        }
        vh(e, f, b, d);
        return a
    }

    function zh(a, b, c) {
        return Oh(a, b) === c ? c : -1
    }

    function Oh(a, b) {
        a = a.P;
        return Nh(Mh(a), a, a[x], b)
    }

    function Mh(a) {
        return a[df] ? ? (a[df] = new Map)
    }

    function Nh(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            sh(b, c, g) != null && (e !== 0 && (c = vh(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Ph(a) {
        var b = Qh;
        a = a.P;
        let c = a[x];
        wf(c);
        const d = sh(a, c, 26);
        b = Zg(pg(d, b, !0, c));
        d !== b && vh(a, c, 26, b);
        return b
    }

    function xh(a, b, c, d) {
        a = a.P;
        let e = a[x];
        d = sh(a, e, c, d);
        b = pg(d, b, !1, e);
        b !== d && b != null && vh(a, e, c, b);
        return b
    }

    function Rh(a, b) {
        return (a = xh(a, b, 1, !1)) ? a : qg(b)
    }

    function z(a, b, c) {
        b = xh(a, b, c, !1);
        if (b == null) return b;
        a = a.P;
        let d = a[x];
        if (!(d & 2)) {
            const e = Zg(b);
            e !== b && (b = e, vh(a, d, c, b))
        }
        return b
    }

    function Sh(a, b, c, d, e, f, g, h) {
        const k = a.P;
        var l = !!(2 & b);
        e = l ? 1 : e;
        g = !!g;
        h && (h = !l);
        f = Ch(k, b, d, f);
        var m = f[x] | 0;
        l = f;
        Hg(l, a);
        e !== 2 && e !== 1 || Gg(l, a);
        l = !!(4 & m);
        if (!l) {
            m = Eh(m, b);
            var n = f,
                p = b;
            const w = !!(2 & m);
            w && (p |= 2);
            let D = !w,
                C = !0,
                F = 0,
                E = 0;
            for (; F < n.length; F++) {
                const A = pg(n[F], c, !1, p);
                if (A instanceof c) {
                    if (!w) {
                        const J = ff(A.P);
                        D && (D = !J);
                        C && (C = J)
                    }
                    n[E++] = A
                }
            }
            E < F && (n.length = E);
            m |= 4;
            m = C ? m | 16 : m & -17;
            m = D ? m | 8 : m & -9;
            n[x] = m;
            w && Object.freeze(n)
        }
        if (h && !(8 & m || !f.length && (e === 1 || e === 4 && 32 & m))) {
            Fh(m) ? (f = af(f), m = Dh(m, b), b = vh(k, b,
                d, f)) : Gg(f, a);
            c = f;
            h = m;
            for (n = 0; n < c.length; n++) m = c[n], p = Zg(m), m !== p && (c[n] = p);
            h |= 8;
            h = c.length ? h & -17 : h | 16;
            m = c[x] = h
        }
        let r;
        e === 1 || e === 4 && 32 & m ? Fh(m) || (a = m, m |= !f.length || 16 & m && (!l || 32 & m) ? 2 : 2048, m !== a && (f[x] = m), Object.freeze(f)) : (l = e !== 5 ? !1 : !!(32 & m) || Fh(m) || !!wg ? .get(f), (e === 2 || l) && Fh(m) && (f = af(f), m = Dh(m, b), m = Gh(m, b, g), f[x] = m, b = vh(k, b, d, f)), Fh(m) || (d = m, m = Gh(m, b, g), m !== d && (f[x] = m)), l ? (r = sg(f), Dg(f, a, !0)) : e !== 2 || g || wg ? .delete(f));
        return r || f
    }

    function Th(a, b, c, d) {
        const e = a.P[x];
        return Sh(a, e, b, c, d, void 0, !1, !(2 & e))
    }

    function B(a, b, c) {
        c == null && (c = void 0);
        return uh(a, b, c)
    }

    function G(a, b, c, d) {
        d == null && (d = void 0);
        return Lh(a, b, c, d)
    }

    function Uh(a, b, c) {
        const d = a.P;
        let e = d[x];
        wf(e);
        if (c == null) return vh(d, e, b), a;
        c = Ag ? .get(c) || c;
        let f = c[x] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === Bf || (wc || !1) && void 0 !== Af);
        let m = !0,
            n = !0;
        for (let r = 0; r < c.length; r++) {
            var p = c[r];
            h || (p = ff(p.P), m && (m = !p), n && (n = p))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = n ? f | 16 : f & -17);
        l || k && f !== g ? (c = af(c), g = 0, f = Dh(f, e), f = Gh(f, e, !0)) : k || Dg(c, a);
        f !== g && (c[x] = f);
        vh(d, e, b, c);
        return a
    }

    function Dh(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Gh(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function Vh(a, b, c, d, e, f, g) {
        wf(a.P[x]);
        b = e(a, b, 2, void 0, !0);
        e = b[x] | 0;
        e = (4 & e ? 4096 & e ? 4096 : 8192 & e ? 8192 : 0 : void 0) ? ? 0;
        if (g)
            if (Array.isArray(d))
                for (d = Ag ? .get(d) || d, f = d.length, g = 0; g < f; g++) b.push(c(d[g], e));
            else
                for (const h of d) b.push(c(h, e));
        else f && xf(b), b.push(c(d, e));
        return a
    }

    function Wh(a, b, c, d, e, f, g, h) {
        const k = a.P[x];
        wf(k);
        a = Sh(a, k, c, b, 2, f, !0);
        if (g && h) {
            e ? ? (e = a.length - 1);
            if (typeof e !== "number" || e < 0 || e >= a.length) throw Error();
            a.splice(e, g)
        } else g ? xf(a, e) : d = d != null ? d : new c, e != void 0 ? a.splice(e, g, d) : a.push(d), a[x] = ff(d.P) ? a[x] & -9 : a[x] & -17
    }

    function Xh(a, b, c, d) {
        Wh(a, b, c, d);
        return a
    }

    function Yh(a, b) {
        return gg(rh(a, b))
    }

    function Zh(a, b, c, d, e) {
        return Bh(a, b, gg, c, d, e, 0)
    }

    function $h(a, b) {
        return a ? ? b
    }

    function ai(a, b) {
        return Lf(rh(a, b))
    }

    function bi(a, b) {
        return Rf(rh(a, b))
    }

    function I(a, b) {
        return og(rh(a, b))
    }

    function ci(a, b) {
        return Pf(rh(a, b))
    }

    function K(a, b, c = !1) {
        return $h(ai(a, b), c)
    }

    function di(a, b) {
        return $h(bi(a, b), 0)
    }

    function ei(a, b) {
        return $h(Yh(a, b), 0)
    }

    function fi(a, b) {
        a = rh(a, b);
        b = typeof a;
        a = a == null ? a : b === "bigint" ? Pe(BigInt.asIntN(64, a)) : Nf(a) ? b === "string" ? Xf(a) : Yf(a) : void 0;
        return a ? ? ph
    }

    function gi(a, b, c = 0) {
        return $h(Ah(a, b), c)
    }

    function L(a, b) {
        return $h(I(a, b), "")
    }

    function hi(a, b) {
        return $h(ci(a, b), 0)
    }

    function ii(a, b) {
        return Bh(a, b, Rf, y())
    }

    function ji(a, b, c, d, e) {
        return Bh(a, b, og, c, d, e)
    }

    function ki(a, b, c, d, e) {
        return Bh(a, b, Pf, c, d, e)
    }

    function li(a, b, c, d) {
        return z(a, b, zh(a, d, c))
    }

    function mi(a, b) {
        a = ai(a, b);
        return a == null ? void 0 : a
    }

    function ni(a, b) {
        a = bi(a, b);
        return a == null ? void 0 : a
    }

    function oi(a) {
        a = Ah(a, 4);
        return a == null ? void 0 : a
    }

    function pi(a, b) {
        a = I(a, b);
        return a == null ? void 0 : a
    }

    function qi(a, b) {
        a = ci(a, b);
        return a == null ? void 0 : a
    }

    function ri(a, b, c) {
        return uh(a, b, c == null ? c : Kf(c))
    }

    function M(a, b, c) {
        return Kh(a, b, c == null ? c : Kf(c), !1)
    }

    function si(a, b, c) {
        return uh(a, b, c == null ? c : Qf(c))
    }

    function ti(a, b, c) {
        return Kh(a, b, c == null ? c : Qf(c), 0)
    }

    function ui(a, b, c) {
        return uh(a, b, $f(c))
    }

    function vi(a, b, c) {
        return Kh(a, b, $f(c), "0")
    }

    function wi(a, b, c) {
        return uh(a, b, ng(c))
    }

    function xi(a, b, c) {
        return Kh(a, b, ng(c), "")
    }

    function yi(a, b, c) {
        return uh(a, b, c == null ? c : Of(c))
    }

    function N(a, b, c) {
        return Kh(a, b, c == null ? c : Of(c), 0)
    }

    function zi(a, b) {
        return ai(a, b) != null
    };
    let Ai;

    function Bi(a) {
        try {
            return Ai = !0, JSON.stringify(Ci(a), bh)
        } finally {
            Ai = !1
        }
    }
    var O = class {
        constructor(a) {
            this.P = Qg(a)
        }
        toJSON() {
            return Ci(this)
        }
        i() {
            const a = this.P,
                b = a[x];
            return b & 2 ? this : mh(this, a, b, !0)
        }
    };
    O.prototype.Nd = lf;

    function Ci(a) {
        Jg(a);
        a = Ai ? a.P : fh(a.P, jh, void 0, void 0, !1); {
            var b = !Ai;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = of (c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g;
                        var h = !1;
                        if (f)
                            for (let m in f) pf(f, m) && (isNaN(+m) ? (g ? ? (g = {}))[m] = f[m] : (d = f[m], Array.isArray(d) && (rf(d) || nf(d) && d.size === 0) && (d = null), d == null && (h = !0), d != null && ((g ? ? (g = {}))[m] = d)));h || (g = f);
                        if (g)
                            for (let m in g) {
                                h = g;
                                break b
                            }
                        h = null
                    }
                    f = h == null ? c != null : h !== c
                }
                for (; l > 0; l--) {
                    g = e[l - 1];
                    if (!(g == null || rf(g) || nf(g) && g.size === 0)) break;
                    var k = !0
                }
                if (e !== a || f || k) {
                    if (!b) e =
                        Array.prototype.slice.call(e, 0, l);
                    else if (k || f || h) e.length = l;
                    h && e.push(h)
                }
                k = e
            } else k = a
        }
        return k
    }

    function Di(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[x] |= 128;
        return Lg(a, hf(b))
    };

    function Ei(a) {
        a = BigInt.asUintN(64, a);
        return new Fi(Number(a & BigInt(4294967295)), Number(a >> BigInt(32)))
    }

    function Gi(a) {
        if (!a) return Hi || (Hi = new Fi(0, 0));
        if (!/^\d+$/.test(a)) return null;
        $e(a);
        return new Fi(Te, Ue)
    }
    var Fi = class {
        constructor(a, b) {
            this.i = a >>> 0;
            this.g = b >>> 0
        }
    };
    let Hi;

    function Ii(a) {
        a = BigInt.asUintN(64, a);
        return new Ji(Number(a & BigInt(4294967295)), Number(a >> BigInt(32)))
    }

    function Ki(a) {
        if (!a) return Li || (Li = new Ji(0, 0));
        if (!/^-?\d+$/.test(a)) return null;
        $e(a);
        return new Ji(Te, Ue)
    }
    var Ji = class {
        constructor(a, b) {
            this.i = a >>> 0;
            this.g = b >>> 0
        }
    };
    let Li;

    function Mi(a, b, c) {
        for (; c > 0 || b > 127;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.g.push(b)
    }

    function Ni(a, b) {
        for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }

    function Oi(a, b) {
        if (b >= 0) Ni(a, b);
        else {
            for (let c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
            a.g.push(1)
        }
    }

    function Pi(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    }
    var Qi = class {
        constructor() {
            this.g = []
        }
        length() {
            return this.g.length
        }
        end() {
            const a = this.g;
            this.g = [];
            return a
        }
    };

    function Ri(a, b) {
        b.length !== 0 && (a.j.push(b), a.i += b.length)
    }

    function Si(a, b) {
        Ri(a, a.g.end());
        Ri(a, b)
    }

    function Ti(a, b, c) {
        Ni(a.g, b * 8 + c)
    }

    function Ui(a, b) {
        Ti(a, b, 2);
        b = a.g.end();
        Ri(a, b);
        b.push(a.i);
        return b
    }

    function Vi(a, b) {
        var c = b.pop();
        for (c = a.i + a.g.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.i++;
        b.push(c);
        a.i++
    }

    function Wi(a) {
        Ri(a, a.g.end());
        const b = new Uint8Array(a.i),
            c = a.j,
            d = c.length;
        let e = 0;
        for (let f = 0; f < d; f++) {
            const g = c[f];
            b.set(g, e);
            e += g.length
        }
        a.j = [b];
        return b
    }

    function Xi(a, b, c, d) {
        c != null && (b = Ui(a, b), d(c, a), Vi(a, b))
    }

    function Yi(a, b, c) {
        var d = Zi;
        if (c != null)
            for (let e = 0; e < c.length; e++) {
                const f = Ui(a, b);
                d(c[e], a);
                Vi(a, f)
            }
    }
    var $i = class {
        constructor() {
            this.j = [];
            this.i = 0;
            this.g = new Qi
        }
    };

    function aj() {
        const a = class {
            constructor() {
                throw Error();
            }
        };
        Object.setPrototypeOf(a, a.prototype);
        return a
    }
    var bj = aj(),
        cj = aj(),
        dj = aj(),
        ej = aj(),
        fj = aj(),
        gj = aj(),
        hj = aj(),
        ij = aj();
    var jj = class {
        constructor(a, b) {
            this.g = a;
            a = Ga(bj);
            this.i = !!a && b === a || !1
        }
    };

    function kj(a, b, c, d, e) {
        Xi(a, c, lj(b, d), e)
    }
    const mj = new jj(kj, bj),
        nj = new jj(kj, bj);
    var oj = Symbol(),
        pj = Symbol();
    let qj, rj;

    function sj(a) {
        var b = tj,
            c = uj,
            d = a[oj];
        if (d) return d;
        d = {};
        d.fh = Og(a[0]);
        var e = a[1];
        let f = 1;
        e && e.constructor === Object && (d.fj = e, e = a[++f], typeof e === "function" && (d.Dj = !0, qj ? ? (qj = e), rj ? ? (rj = a[f + 1]), e = a[f += 2]));
        const g = {};
        for (; e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0;) {
            for (var h = 0; h < e.length; h++) g[e[h]] = e;
            e = a[++f]
        }
        for (h = 1; e !== void 0;) {
            typeof e === "number" && (h += e, e = a[++f]);
            let m;
            var k = void 0;
            e instanceof jj ? m = e : (m = mj, f--);
            if (m ? .i) {
                e = a[++f];
                k = a;
                var l = f;
                typeof e === "function" && (e = e(), k[l] =
                    e);
                k = e
            }
            e = a[++f];
            l = h + 1;
            typeof e === "number" && e < 0 && (l -= e, e = a[++f]);
            for (; h < l; h++) {
                const n = g[h];
                k ? c(d, h, m, k, n) : b(d, h, m, n)
            }
        }
        return a[oj] = d
    }

    function lj(a, b) {
        if (a instanceof O) return Jg(a), a.P;
        if (Array.isArray(a)) return Pg(a, b, !1)
    };

    function tj(a, b, c) {
        a[b] = c.g
    }

    function uj(a, b, c, d) {
        let e, f;
        const g = c.g;
        a[b] = (h, k, l) => g(h, k, l, f || (f = sj(d).fh), e || (e = vj(d)))
    }

    function vj(a) {
        let b = a[pj];
        if (!b) {
            const c = sj(a);
            b = (d, e) => wj(d, e, c);
            a[pj] = b
        }
        return b
    }

    function wj(a, b, c) {
        var d = a[x] | 0,
            e = +!!(d & 512) - 1,
            f = a.length,
            g = d & 512 ? 1 : 0;
        const h = f + (d & 256 ? -1 : 0);
        for (; g < h; g++) {
            const k = a[g];
            if (k == null) continue;
            const l = g - e,
                m = xj(c, l);
            m && m(b, k, l)
        }
        if (d & 256) {
            a = a[f - 1];
            for (const k in a) pf(a, k) && (d = +k, Number.isNaN(d) || (e = a[d], e != null && (f = xj(c, d)) && f(b, e, d)))
        }
    }

    function xj(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.fj)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof jj ? c : [nj, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    const e = vj(c),
                        f = sj(c).fh;
                    c = a.Dj ? rj(f, e) : (g, h, k) => d(g, h, k, f, e)
                } else c = d;
                return a[b] = c
            }
    };

    function yj(a, b, c) {
        if (Array.isArray(b)) {
            var d = b[x] | 0;
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                const g = a(b[e]);
                g != null && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (b[x] = (d | 5) & -12289, d & 2 && Object.freeze(b));
            return b
        }
    }

    function zj(a, b) {
        return new jj(a, b)
    }

    function Aj(a, b) {
        return new jj(a, b)
    }
    var Bj = new jj(function(a, b, c, d, e) {
        if (b instanceof Yg) b.forEach((f, g) => {
            Xi(a, c, Pg([g, f], d, !1), e)
        });
        else if (Array.isArray(b))
            for (let f = 0; f < b.length; f++) {
                const g = b[f];
                Array.isArray(g) && Xi(a, c, Pg(g, d, !1), e)
            }
    }, bj);

    function Cj(a, b, c) {
        b = Jf(b);
        b != null && (Ti(a, c, 1), a = a.g, c = Ve || (Ve = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Te = c.getUint32(0, !0), Ue = c.getUint32(4, !0), Pi(a, Te), Pi(a, Ue))
    }

    function Dj(a, b, c) {
        b = kg(b);
        if (b != null) {
            switch (typeof b) {
                case "string":
                    Ki(b)
            }
            if (b != null) switch (Ti(a, c, 0), typeof b) {
                case "number":
                    a = a.g;
                    Xe(b);
                    Mi(a, Te, Ue);
                    break;
                case "bigint":
                    c = Ii(b);
                    Mi(a.g, c.i, c.g);
                    break;
                default:
                    c = Ki(b), Mi(a.g, c.i, c.g)
            }
        }
    }

    function Ej(a, b, c) {
        b = yj(kg, b, !1);
        if (b != null && b.length) {
            c = Ui(a, c);
            for (let e = 0; e < b.length; e++) {
                const f = b[e];
                switch (typeof f) {
                    case "number":
                        var d = a.g;
                        Xe(f);
                        Mi(d, Te, Ue);
                        break;
                    case "bigint":
                        d = Ii(f);
                        Mi(a.g, d.i, d.g);
                        break;
                    default:
                        d = Ki(f), Mi(a.g, d.i, d.g)
                }
            }
            Vi(a, c)
        }
    }

    function Fj(a, b, c) {
        b = lg(b);
        if (b != null) {
            switch (typeof b) {
                case "string":
                    Gi(b)
            }
            if (b != null) switch (Ti(a, c, 0), typeof b) {
                case "number":
                    a = a.g;
                    Xe(b);
                    Mi(a, Te, Ue);
                    break;
                case "bigint":
                    c = Ei(b);
                    Mi(a.g, c.i, c.g);
                    break;
                default:
                    c = Gi(b), Mi(a.g, c.i, c.g)
            }
        }
    }

    function Gj(a, b, c) {
        b = Rf(b);
        b != null && b != null && (Ti(a, c, 0), Oi(a.g, b))
    }

    function Hj(a, b, c) {
        b = Lf(b);
        b != null && (Ti(a, c, 0), a.g.g.push(b ? 1 : 0))
    }

    function Ij(a, b, c) {
        b = og(b);
        b != null && (b = ke(b), Ti(a, c, 2), Ni(a.g, b.length), Si(a, b))
    }

    function Jj(a, b, c, d, e) {
        Xi(a, c, lj(b, d), e)
    }

    function Kj(a, b, c) {
        b = Rf(b);
        b != null && (b = parseInt(b, 10), Ti(a, c, 0), Oi(a.g, b))
    }
    var Lj = zj(Cj, hj),
        Mj = zj(Cj, hj),
        Nj = zj(function(a, b, c) {
            b = Jf(b);
            b != null && (Ti(a, c, 5), a = a.g, c = Ve || (Ve = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Ue = 0, Te = c.getUint32(0, !0), Pi(a, Te))
        }, aj()),
        Oj = Aj(Ej, fj),
        Pj = zj(Dj, fj),
        Tj = Aj(Ej, fj),
        Uj = zj(Dj, fj),
        Vj = zj(Dj, fj),
        Wj = zj(Fj, gj),
        Xj = Aj(function(a, b, c) {
            b = yj(lg, b, !1);
            if (b != null && b.length) {
                c = Ui(a, c);
                for (let f = 0; f < b.length; f++) {
                    var d = b[f];
                    switch (typeof d) {
                        case "number":
                            var e = a.g;
                            Xe(d);
                            Mi(e, Te, Ue);
                            break;
                        case "bigint":
                            e = Number(d);
                            Number.isSafeInteger(e) ? (d = a.g,
                                Xe(e), Mi(d, Te, Ue)) : (d = Ei(d), Mi(a.g, d.i, d.g));
                            break;
                        default:
                            d = Gi(d), Mi(a.g, d.i, d.g)
                    }
                }
                Vi(a, c)
            }
        }, gj),
        Yj = zj(Fj, gj),
        Zj = zj(Gj, ej),
        ak = Aj(function(a, b, c) {
            b = yj(Rf, b, !0);
            if (b != null && b.length) {
                c = Ui(a, c);
                for (let d = 0; d < b.length; d++) Oi(a.g, b[d]);
                Vi(a, c)
            }
        }, ej),
        bk = zj(Gj, ej),
        ck = zj(function(a, b, c) {
            b = Tf(b);
            b != null && (Ti(a, c, 5), Pi(a.g, b))
        }, aj()),
        dk = zj(Hj, cj),
        ek = zj(Hj, cj),
        fk = zj(Hj, cj),
        gk = zj(Ij, dj),
        hk = Aj(function(a, b, c) {
            b = yj(og, b, !0);
            if (b != null)
                for (let g = 0; g < b.length; g++) {
                    var d = a,
                        e = c,
                        f = b[g];
                    f != null && (f = ke(f), Ti(d, e, 2),
                        Ni(d.g, f.length), Si(d, f))
                }
        }, dj),
        ik = zj(Ij, dj),
        jk = zj(Ij, dj),
        kk = function(a, b, c = bj) {
            return new jj(b, c)
        }(function(a, b, c, d, e) {
            if (a.g() !== 2) return !1;
            var f = a.i;
            d = Pg(void 0, d, !0);
            var g = b[x];
            wf(g);
            var h = g;
            const k = h & 2;
            g = sh(b, h, c);
            Array.isArray(g) || (g = uf);
            var l = g[x] | 0;
            l === 0 && h & 32 && !k ? (l |= 33, g[x] = l) : l & 1 || (l |= 1, g[x] = l);
            k && (h = !1, l & 2 || (gf(g), h = !!(4 & l)), h && Object.freeze(g));
            l = g;
            g = b[x];
            (l[x] | 0) & 4 && (l = af(l), l[x] = (l[x] | 1) & -2079, vh(b, g, c, l));
            l.push(d);
            f.call(a, d, e);
            return !0
        }, function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (let f =
                        0; f < b.length; f++) Jj(a, b[f], c, d, e)
        }),
        P = new jj(Jj, bj),
        lk = zj(function(a, b, c) {
            b = Tf(b);
            b != null && b != null && (Ti(a, c, 0), Ni(a.g, b))
        }, aj()),
        mk = zj(Kj, ij),
        nk = Aj(function(a, b, c) {
            b = yj(Rf, b, !0);
            if (b != null && b.length) {
                c = Ui(a, c);
                for (let d = 0; d < b.length; d++) Oi(a.g, b[d]);
                Vi(a, c)
            }
        }, ij),
        ok = zj(Kj, ij);

    function pk(a) {
        return () => qg(a)
    }

    function qk(a) {
        return b => {
            Jg(b);
            const c = new $i;
            wj(b.P, c, sj(a));
            return Wi(c)
        }
    }

    function rk(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = Lg(a, hf(b))
            }
            return b
        }
    };
    Zc `https://www.google.com/recaptcha/api2/aframe`;

    function sk(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            mc(f, a);
            b.document.readyState !== "complete" ? rb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function tk(a) {
        var b = `${a.Qa?"https://ep1.adtrafficquality.google/getconfig/sodar":"https://pagead2.googlesyndication.com/getconfig/sodar"}?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Sb}`;
        let c = void 0;
        try {
            c = await uk(b)
        } catch (g) {}
        if (c) {
            b = a.zc || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Ai: c.bg_hash_basename,
                zi: c.bg_binary,
                Ij: a.g + "_" + a.i,
                zc: b,
                Sb: a.Sb,
                Dd: d,
                ee: e,
                Bd: f,
                Qa: a.Qa
            }
        }
    }
    let uk = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function vk(a) {
        if (a = await tk(a)) {
            var b = window,
                c = b.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = b.GoogleGcLKhOms = []);
            c.push({
                _ctx_: a.context,
                _bgv_: a.Ai,
                _bgp_: a.zi,
                _li_: a.Ij,
                _jk_: a.zc,
                _st_: a.Sb,
                _rc_: a.Dd,
                _dl_: a.ee,
                _g2_: a.Bd,
                _atqg_: a.Qa === void 0 ? "0" : a.Qa ? "1" : "0"
            });
            if (c = b.GoogleDX5YKUSk) b.GoogleDX5YKUSk = void 0, c[1]();
            a = a.Qa ? Zc `https://ep2.adtrafficquality.google/sodar/${"sodar2"}.js` : Zc `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            sk(a)
        }
    };

    function wk(a, b) {
        return xi(a, 1, b)
    }
    var xk = class extends O {
        g() {
            return L(this, 1)
        }
    };

    function yk(a, b) {
        return B(a, 5, b)
    }

    function zk(a, b) {
        return xi(a, 3, b)
    }

    function Ak(a, b) {
        return M(a, 6, b)
    }
    var Bk = class extends O {
        constructor() {
            super()
        }
    };

    function Ck(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Dk = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.zc = a.zc;
                this.win = a.da();
                this.Sb = a.Sb;
                this.Dd = a.Dd;
                this.ee = a.ee;
                this.Bd = a.Bd;
                this.j = a.g;
                this.Qa = a.Qa
            }
        },
        Ek = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.Sb = "env";
                this.Dd = "n";
                this.ee = "0";
                this.Bd = "1";
                this.g = !0;
                this.Qa = !1
            }
            da() {
                return this.win
            }
            build() {
                return new Dk(this)
            }
        };

    function Fk(a) {
        var b = new Gk;
        return wi(b, 1, a)
    }
    var Gk = class extends O {
        getValue() {
            return L(this, 1)
        }
        getVersion() {
            return hi(this, 5)
        }
    };
    var Hk = class extends O {
        removeCookies(a) {
            Wh(this, 4, Gk, void 0, a, void 0, 1, !0);
            return this
        }
    };
    var Ik = class extends O {};

    function Jk(a, b, c = null, d = !1, e = !1) {
        Kk(a, b, c, d, e)
    }

    function Kk(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = zd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Ta(a.google_image_requests, f);
                sb(f, "load", g);
                sb(f, "error", g)
            };
            rb(f, "load", g);
            rb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Mk = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Cd(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            Lk(c)
        },
        Lk = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Jk(b, a, void 0, !1, !1)
        };
    let Nk = null;
    var Ok = window;
    var Pk = class extends O {
        constructor() {
            super()
        }
    };
    var Qk = class extends O {
        constructor() {
            super()
        }
        getCorrelator() {
            return fi(this, 1)
        }
        setCorrelator(a) {
            return vi(this, 1, a)
        }
    };
    var Rk = class extends O {
        constructor() {
            super()
        }
        setParameters(a) {
            return B(this, 1, a)
        }
    };
    let Sk = null,
        Tk = null;

    function Uk() {
        if (Sk != null) return Sk;
        Sk = !1;
        try {
            const a = xd(t);
            a && a.location.hash.indexOf("google_logging") !== -1 && (Sk = !0)
        } catch (a) {}
        return Sk
    }

    function Vk() {
        if (Tk != null) return Tk;
        Tk = !1;
        try {
            const a = xd(t);
            a && a.location.hash.indexOf("auto_ads_logging") !== -1 && (Tk = !0)
        } catch (a) {}
        return Tk
    }
    var Wk = (a, b = []) => {
        let c = !1;
        t.google_logging_queue || (c = !0, t.google_logging_queue = []);
        t.google_logging_queue.push([a, b]);
        c && Uk() && yd(t.document, Zc `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Xk(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    q = Xk.prototype;
    q.getWidth = function() {
        return this.right - this.left
    };
    q.getHeight = function() {
        return this.bottom - this.top
    };

    function Yk(a) {
        return new Xk(a.top, a.right, a.bottom, a.left)
    }
    q.contains = function(a) {
        return this && a ? a instanceof Xk ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Zk(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    q.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    q.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    q.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    q.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function $k(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function al(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new $k(c, e, d - c, a - e)
        }
        return null
    }

    function bl(a, b) {
        var c = al(a, b);
        if (!c || !c.height || !c.width) return [new $k(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new $k(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new $k(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new $k(a.left, d, b.left - a.left, e));
        h < f && c.push(new $k(h, d, f - h, e));
        return c
    }
    q = $k.prototype;
    q.contains = function(a) {
        return a instanceof wb ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    q.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    q.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const cl = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function dl(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function el(a = dl()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function fl(a = dl()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(cl[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function gl() {
        var a = dl();
        return a && a.initialIntersection
    }

    function hl() {
        const a = gl();
        return a && xa(a.rootBounds) ? new xb(a.rootBounds.width, a.rootBounds.height) : null
    }

    function il(a = dl()) {
        return a ? ud(a.master) ? a.master : null : null
    }

    function jl(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Ta(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = g.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || yd(a.document, g ? Zc `https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js` : Zc `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, rb(a, "message", f), d = () => {
            sb(a, "message", f)
        });
        return e
    };

    function kl(a, b, c) {
        if (typeof b === "string")(b = ll(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = ll(c, d);
                f && (c.style[f] = e)
            }
    }
    var ml = {};

    function ll(a, b) {
        var c = ml[b];
        if (!c) {
            var d = tc(b);
            c = d;
            a.style[d] === void 0 && (d = (Nc ? "Webkit" : Mc ? "Moz" : Kc ? "ms" : null) + uc(d), a.style[d] !== void 0 && (c = d));
            ml[b] = c
        }
        return c
    }

    function nl(a, b) {
        var c = a.style[tc(b)];
        return typeof c !== "undefined" ? c : a.style[ll(a, b)] || ""
    }

    function ol(a, b) {
        var c = ed(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function pl(a, b) {
        return ol(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function ql(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function rl(a) {
        var b = ed(a),
            c = new wb(0, 0);
        if (a == (b ? ed(b) : document).documentElement) return c;
        a = ql(a);
        b = gd(cd(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function sl(a) {
        var b = tl;
        if (pl(a, "display") != "none") return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function tl(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Nc && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = ql(a), new xb(a.right - a.left, a.bottom - a.top)) : new xb(b, c)
    };
    var ul = a => typeof a === "number" && a > 0,
        wl = (a, b) => {
            a = vl(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        vl = a => Object.entries(xl(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        xl = a => {
            const b = {};
            Cd(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        yl = a => {
            a = il(dl(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        zl = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        Al = a => {
            let b;
            b = a.nodeType !== 9 && a.id;
            a: {
                if (a && a.nodeName &&
                    a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Bl = a => (a = a.google_ad_format) ? a.indexOf("_0ads") > 0 : !1,
        Cl = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f =
                                e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (g > 0 && h > 0) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    var Dl = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };

    function El(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = Fl(a.stack, b));
        return b
    }

    function Fl(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    };
    const Gl = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Hl = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        Il = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Wg = !!c;
                this.depth = null
            }
        };
    let Jl = null;

    function Kl() {
        if (Jl === null) {
            Jl = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Jl = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Jl
    };

    function Ll() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Ml() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    var Nl = class {
        constructor(a, b) {
            var c = Ml() || Ll();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Ol = t.performance,
        Pl = !!(Ol && Ol.mark && Ol.measure && Ol.clearMarks),
        Ql = kb(() => {
            var a;
            if (a = Pl) a = Kl(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Rl(a) {
        a && Ol && Ql() && (Ol.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Ol.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Sl(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Rl(c), e;
        }
        a.end(c);
        return d
    }
    class Tl {
        constructor(a) {
            this.events = [];
            this.i = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Ql() || (b != null ? b : Math.random() < 1)
        }
        disable() {
            this.g = !1;
            this.events != this.i.google_js_reporting_queue && (Ql() && Ma(this.events, Rl), this.events.length = 0)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Nl(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Ol && Ql() && Ol.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value ===
                "number") {
                a.duration = (Ml() || Ll()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Ol && Ql() && Ol.mark(b);
                !this.g || this.events.length > 2048 || this.events.push(a)
            }
        }
    };

    function Ul(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Vl(a, b, c, d, e) {
        const f = [];
        Cd(a, (g, h) => {
            (g = Wl(g, b, c, d, e)) && f.push(`${h}=${g}`)
        });
        return f.join(b)
    }

    function Wl(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Wl(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(Vl(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Xl(a) {
        let b = 1;
        for (const c in a.i) c.length > b && (b = c.length);
        return 3997 - b - a.j.length - 1
    }

    function Yl(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Xl(a) - b.length;
        if (d < 0) return "";
        a.g.sort((f, g) => f - g);
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let l = Vl(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        }
        a = "";
        b != null && (a = `${e}${"trn"}=${b}`);
        return c + a
    }
    var Zl = class {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function $l(a, b) {
        a.g = b
    }
    var bm = class {
        constructor(a, b, c = null) {
            this.G = a;
            this.l = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.A = this.aa
        }
        tb(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.l;
                try {
                    Rl(e), b = this.A(a, new Dl(f, {
                        message: El(f)
                    }), void 0, c)
                } catch (g) {
                    this.aa(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Ca(a, b, c, d) {
            return (...e) => this.tb(a, () => b.apply(c, e), d)
        }
        aa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const H = new Zl;
                var g = H;
                g.g.push(1);
                g.i[1] = Ul("context",
                    a);
                b.error && b.meta && b.id || (b = new Dl(b, {
                    message: El(b)
                }));
                if (b.msg) {
                    g = H;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = Ul("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (na) {}
                if (d) try {
                    d(b)
                } catch (na) {}
                d = H;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = t;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (ud(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new Il(m || "", l));
                    try {
                        d = l.parent
                    } catch (na) {
                        d = null
                    }
                } while (d && l != d);
                for (let na = 0, qa = k.length - 1; na <= qa; ++na) k[na].depth = qa - na;
                l = t;
                if (l.location &&
                    l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.Wg = !0)
                    }
                var p = k;
                let fa = new Il(t.location.href, t, !1);
                l = null;
                const ab = p.length - 1;
                for (n = ab; n >= 0; --n) {
                    var r = p[n];
                    !l && Gl.test(r.url) && (l = r);
                    if (r.url && !r.Wg) {
                        fa = r;
                        break
                    }
                }
                r = null;
                const Ka = p.length && p[ab].url;
                fa.depth != 0 && Ka && (r = p[ab]);
                f = new Hl(fa, r);
                if (f.i) {
                    p = H;
                    var w = f.i.url || "";
                    p.g.push(4);
                    p.i[4] = Ul("top", w)
                }
                var D = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var C =
                        f.g.url.match(td),
                        F = C[1],
                        E = C[3],
                        A = C[4];
                    w = "";
                    F && (w += F + ":");
                    E && (w += "//", w += E, A && (w += ":" + A));
                    var J = w
                } else J = "";
                F = H;
                D = [D, {
                    url: J
                }];
                F.g.push(5);
                F.i[5] = D;
                am(this.G, e, H, this.j, c)
            } catch (H) {
                try {
                    am(this.G, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: El(H),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (fa) {}
            }
            return this.l
        }
        la(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.aa(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var cm = class extends O {
        constructor() {
            super()
        }
    };
    var dm = qk([0, ok, ik]);

    function em(a, b) {
        try {
            const c = d => [{
                [d.Pa]: d.Md
            }];
            return JSON.stringify([a.filter(d => d.Ia).map(c), Ci(b), a.filter(d => !d.Ia).map(c)])
        } catch (c) {
            return fm(c, b), ""
        }
    }

    function gm(a, b) {
        const c = new $i;
        try {
            const d = a.filter(f => f.Ia).map(hm);
            Yi(c, 1, d);
            Xi(c, 2, dm(b), Zi);
            const e = a.filter(f => !f.Ia).map(hm);
            Yi(c, 3, e)
        } catch (d) {
            fm(d, b)
        }
        return Wi(c)
    }

    function fm(a, b) {
        try {
            Mk({
                m: El(a instanceof Error ? a : Error(String(a))),
                b: hi(b, 1) || null,
                v: L(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }

    function hm(a) {
        const b = new $i;
        Xi(b, a.Pa, a.de, Zi);
        return Wi(b)
    }

    function Zi(a, b) {
        Si(b, a.subarray(0, a.length))
    }
    var im = class {
        constructor(a, b) {
            var c = new cm;
            a = N(c, 1, a);
            this.i = xi(a, 2, b).i()
        }
    };

    function jm(a) {
        return Math.round(a)
    };

    function km(a, b) {
        return Lh(a, 1, lm, ng(b))
    }

    function mm(a, b) {
        return Lh(a, 2, lm, $f(b))
    }

    function nm(a, b) {
        return Lh(a, 3, lm, b == null ? b : Kf(b))
    }
    var Q = class extends O {},
        lm = [1, 2, 3];

    function om(a, b) {
        return Lh(a, 2, pm, $f(b))
    }

    function qm(a, b) {
        return Lh(a, 4, pm, If(b))
    }
    var rm = class extends O {
            constructor() {
                super()
            }
        },
        pm = [2, 4];

    function sm(a) {
        var b = new tm;
        return xi(b, 1, a)
    }

    function um(a, b) {
        return B(a, 3, b)
    }

    function R(a, b) {
        return Xh(a, 4, Q, b)
    }
    var tm = class extends O {
        constructor() {
            super()
        }
    };
    var vm = qk([0, ik, 1, [0, pm, 1, Vj, 1, Mj], kk, [0, lm, jk, Vj, fk]]);
    var wm = class extends O {
        j() {
            return L(this, 2)
        }
        getWidth() {
            return L(this, 3)
        }
        getHeight() {
            return L(this, 4)
        }
        setHeight(a) {
            return wi(this, 4, a)
        }
    };
    var xm = class extends O {};
    var ym = class extends O {};
    var zm = class extends O {};
    var Am = class extends O {},
        Bm = [5, 6];
    var Cm = [0, Pj, -1];
    var Dm = [0, kk, [0, nk, [0, Zj, -3]], Cm, -1];
    var Em = class extends O {
        getValue() {
            return hi(this, 1)
        }
    };

    function Fm(a) {
        var b = new Gm;
        return yi(b, 1, a)
    }
    var Gm = class extends O {
        getValue() {
            return hi(this, 1)
        }
    };
    var Hm = class extends O {
        constructor() {
            super()
        }
        getValue() {
            return hi(this, 1)
        }
    };

    function Im(a, b) {
        return vi(a, 1, b)
    }

    function Jm(a, b) {
        return vi(a, 2, b)
    }

    function Km(a, b) {
        return vi(a, 3, b)
    }

    function Lm(a, b) {
        return vi(a, 4, b)
    }

    function Mm(a, b) {
        return vi(a, 5, b)
    }

    function Nm(a, b) {
        return Kh(a, 8, If(b), 0)
    }

    function Om(a, b) {
        return Kh(a, 9, If(b), 0)
    }
    var Pm = class extends O {
        constructor() {
            super()
        }
    };

    function Qm(a, b) {
        return vi(a, 1, b)
    }

    function Rm(a, b) {
        return vi(a, 2, b)
    }
    var Sm = class extends O {};

    function Tm(a, b) {
        Xh(a, 1, Sm, b)
    }
    var Ih = class extends O {
        Gh(a) {
            Wh(this, 1, Sm, void 0, a, !1, 1);
            return this
        }
    };
    var Um = class extends O {
        constructor() {
            super()
        }
    };

    function Vm(a, b) {
        return Jh(a, 1, b, mg)
    }

    function Wm(a, b) {
        return Jh(a, 12, b, hg)
    }

    function Xm() {
        var a = new Ym;
        return Vh(a, 2, mg, "irr", ji)
    }

    function Zm(a, b) {
        return M(a, 3, b)
    }

    function $m(a, b) {
        return M(a, 4, b)
    }

    function an(a, b) {
        return M(a, 5, b)
    }

    function bn(a, b) {
        return M(a, 7, b)
    }

    function cn(a, b) {
        return M(a, 8, b)
    }

    function dn(a, b) {
        return vi(a, 9, b)
    }

    function en(a, b) {
        return Uh(a, 10, b)
    }

    function fn(a, b) {
        return Jh(a, 11, b, Uf)
    }
    var Ym = class extends O {
        constructor() {
            super()
        }
    };

    function gn(a) {
        var b = hn();
        B(a, 1, b)
    }

    function jn(a, b) {
        return vi(a, 2, b)
    }

    function kn(a, b) {
        return Uh(a, 3, b)
    }

    function ln(a, b) {
        return Uh(a, 4, b)
    }

    function mn(a, b) {
        return Xh(a, 4, Gm, b)
    }

    function nn(a, b) {
        return Uh(a, 5, b)
    }

    function on(a, b) {
        return Jh(a, 6, b, mg)
    }

    function pn(a, b) {
        return vi(a, 7, b)
    }

    function qn(a, b) {
        B(a, 9, b)
    }

    function rn(a, b) {
        return M(a, 10, b)
    }

    function sn(a, b) {
        return M(a, 11, b)
    }

    function tn(a, b) {
        return M(a, 12, b)
    }
    var un = class extends O {
        constructor() {
            super()
        }
        H(a) {
            Wh(this, 3, Em, void 0, a, !1, 1);
            return this
        }
        I(a) {
            return vi(this, 8, a)
        }
    };
    var vn = class extends O {
        constructor() {
            super()
        }
    };
    var wn = class extends O {};

    function xn(a) {
        var b = new yn;
        return N(b, 1, a)
    }
    var yn = class extends O {
        constructor() {
            super()
        }
    };
    var zn = class extends O {
        constructor() {
            super()
        }
    };
    var An = class extends O {
        constructor() {
            super()
        }
    };
    var Bn = class extends O {
        constructor() {
            super()
        }
    };
    var Cn = class extends O {
            constructor() {
                super()
            }
        },
        Dn = [1, 2];
    var En = class extends O {
        constructor() {
            super()
        }
    };
    var Fn = class extends O {
            constructor() {
                super()
            }
        },
        Gn = [1];

    function Hn(a) {
        var b = new In;
        return N(b, 1, a)
    }
    var In = class extends O {
        constructor() {
            super()
        }
    };
    var Jn = class extends O {
        constructor() {
            super()
        }
    };
    var Kn = class extends O {
        constructor() {
            super()
        }
    };
    var Ln = class extends O {
        constructor() {
            super()
        }
    };
    var Mn = class extends O {
        constructor() {
            super()
        }
    };
    var Nn = class extends O {
        constructor() {
            super()
        }
    };
    var On = class extends O {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 1)
        }
    };
    var Pn = class extends O {
        constructor() {
            super()
        }
    };

    function Qn(a) {
        var b = new Rn;
        return Jh(b, 1, a, Of)
    }
    var Rn = class extends O {
        constructor() {
            super()
        }
    };
    var Sn = class extends O {
        constructor() {
            super()
        }
    };

    function Tn() {
        var a = new Un,
            b = new Sn;
        return G(a, 1, Vn, b)
    }

    function Wn() {
        var a = new Un,
            b = new Sn;
        return G(a, 3, Vn, b)
    }

    function Xn() {
        var a = new Un,
            b = new Sn;
        return G(a, 13, Vn, b)
    }

    function Yn(a, b) {
        return G(a, 14, Vn, b)
    }
    var Un = class extends O {},
        Vn = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var Zn = class extends O {};
    var $n = class extends O {
        constructor() {
            super()
        }
    };
    var eo = class extends O {
        constructor() {
            super()
        }
    };
    var fo = class extends O {
        constructor() {
            super()
        }
        getFont() {
            return L(this, 1)
        }
        setFont(a) {
            return xi(this, 1, a)
        }
        clearFont() {
            return uh(this, 1)
        }
    };

    function go(a, b) {
        return Kh(a, 10, ig(b), "0")
    }

    function ho(a, b) {
        return N(a, 1, b)
    }
    var io = class extends O {};
    var jo = class extends O {};
    var ko = class extends O {
        constructor() {
            super()
        }
    };
    var mo = class extends O {
            constructor() {
                super()
            }
            j() {
                return li(this, jo, 4, lo)
            }
            g() {
                return yh(this, jo, 4, lo)
            }
        },
        lo = [4, 5];

    function no(a) {
        var b = new oo;
        return xi(b, 4, a)
    }

    function po(a, b) {
        return uh(a, 6, ig(b))
    }
    var oo = class extends O {
        constructor() {
            super()
        }
    };
    var qo = class extends O {
        constructor() {
            super()
        }
    };
    var ro = class extends O {
        constructor() {
            super()
        }
        j() {
            return z(this, jo, 1)
        }
        g() {
            return wh(this, jo, 1)
        }
    };
    var so = class extends O {
        constructor() {
            super()
        }
    };
    var to = class extends O {
        constructor() {
            super()
        }
    };
    var uo = class extends O {};
    var vo = class extends O {};
    var wo = class extends O {
            constructor() {
                super()
            }
        },
        xo = [2, 3];
    var yo = class extends O {
            constructor() {
                super()
            }
        },
        zo = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];
    var Ao = class extends O {
        constructor() {
            super()
        }
    };

    function Bo(a, b) {
        return ui(a, 1, b)
    }
    var Co = class extends O {
        constructor() {
            super()
        }
        getWidth() {
            return fi(this, 1)
        }
        getHeight() {
            return fi(this, 2)
        }
        setHeight(a) {
            return ui(this, 2, a)
        }
    };
    var Do = class extends O {
        constructor() {
            super()
        }
    };

    function Eo(a, b) {
        return B(a, 1, b)
    }
    var Fo = class extends O {
        constructor() {
            super()
        }
    };
    var Go = class extends O {
        constructor() {
            super()
        }
    };
    var Ho = class extends O {
        constructor() {
            super()
        }
    };

    function Io(a, b) {
        return G(a, 3, Jo, b)
    }
    var Ko = class extends O {
            constructor() {
                super()
            }
        },
        Jo = [1, 2, 3, 4];

    function Lo(a, b) {
        return vi(a, 3, b)
    }
    var Mo = class extends O {
            constructor() {
                super()
            }
            Oc(a) {
                return xi(this, 2, a)
            }
        },
        No = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var Oo = [0];
    var Po = [0, ek, kk, [0, ok, ik, -2, bk, -2, [0, ik, 2, bk, -1, ik, [0, bk, -2, Nj], -1], kk, [0, ik, hk], Yj, gk, Zj], Uj, [0, ek, Uj, ek, -2]];
    var Qo = [0, Pj, -1];
    var Ro = qk([0, No, Uj, ik, Uj, P, [0, Cm, -1, [0, mk], ik, ek], P, [0, [0, hk, -1, ek, -5, Uj, kk, [0, ik, Uj, ek, -1], Tj, Xj, Yj], Uj, kk, [0, mk], kk, [0, mk], kk, [0, mk], hk, Uj, -1, [0, Uj, -4, 2, Lj, -1], ek, -2, 1, Bj, [!0, gk, [0, kk, [0, Uj, -1]]], kk, [0, ik, -2]], P, [0, zo, Uj, -1, P, [0, lo, [0, ik, -1, ek, Pj],
            [0, hk, ik, -1], Uj, P, Po, P, [0, kk, [0, Vn, P, Oo, -2, 1, P, Oo, -1, P, [0, Uj], P, Oo, -5, P, [0, nk]]],
            [0, Zj, -1, lk, -2, Zj]
        ], P, [0, Uj, Yj], P, [0, Uj], P, [0, Pj, Wj, gk, ik, ek, Zj], P, [0, Uj], P, [0, Pj, -2, ik, dk, Wj, Pj], P, [0, xo, Uj, P, [0], P, [0]],
        [0, Uj, bk, Tj], P, [0, ok], P, [0, Uj, ik, Yj], P, [0], P, [0,
            Po, Uj
        ], dk, P, [0, Yj], P, [0, Uj]
    ], Uj, P, [0, ik, [0, bk, -1, [0, Lj, -5, ek]], Uj, Dm], P, [0, ok, ak], P, [0, ok, -1, ik, -1], P, [0, Gn, P, [0, dk, -1]], P, [0, ok, ek, -9], P, [0, Dn, P, [0, [0, ok, ik, -1]], P, [0, bk, -1, ik, [0, bk, -1], -1, ek, nk, bk, -1]], P, [0, Jo, P, [0, [0, Pj, -1], Qo], P, [0], P, [0, Qo], P, [0]], P, [0, [3, 4, 5, 6, 7, 8], Pj, [0, Oj], P, [0], P, [0], P, [0], P, [0], P, [0], P, [0, [1, 2, 3, 4, 5], P, [0], -4]], P, [0, Bm, Pj, -2, [0, gk, -2, dk, [0, gk, -3]], P, [0], P, [0]], P, Dm]);

    function So(a, b) {
        return vi(a, 1, b)
    }

    function To(a, b) {
        return vi(a, 2, b)
    }
    var Uo = class extends O {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return fi(this, 1)
        }
    };
    var Vo = qk([0, Uj, -1, ok]);
    var Wo = class extends O {
        constructor() {
            super()
        }
    };
    var Xo = [0, [0, Pj, ck, -1], ik];
    var Yo = class extends O {
        constructor() {
            super()
        }
    };
    var Zo = class extends O {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return fi(this, 1)
        }
    };
    var $o = class extends O {
            constructor() {
                super()
            }
        },
        ap = [1, 7],
        bp = [4, 6, 8];
    var cp = qk([0, ap, bp, P, [0, ok, ik, -1, hk, -1, Xo],
        [0, Uj, ak, ik], 1, P, [0, ik, bk, hk], Uj, P, [0, ik, -1, gk, [0, ak]], P, [0, ik, -1, hk, -1, Xo], P, [0, [1], P, [0, [0, ik, -2, ok, ik]],
            [0, Uj, -1]
        ]
    ]);
    class dp {
        constructor(a) {
            this.G = a;
            this.ge = new ep(this.G)
        }
    }
    class ep {
        constructor(a) {
            this.G = a;
            this.Vc = new fp(this.G)
        }
    }
    class fp {
        constructor(a) {
            this.G = a;
            this.g = new gp(this.G);
            this.Hh = new hp(this.G)
        }
    }
    class gp {
        constructor(a) {
            this.G = a;
            this.i = new ip(this.G);
            this.g = new jp(this.G)
        }
    }
    class ip {
        constructor(a) {
            this.G = a
        }
        Jc(a) {
            this.G.g(um(R(sm("xR0Czf"), km(new Q, a.status)), qm(new rm, a.Mc)))
        }
    }
    class jp {
        constructor(a) {
            this.G = a
        }
        Jc(a) {
            this.G.g(um(R(sm("jM4CPd"), mm(new Q, jm(a.uk))), qm(new rm, a.Mc)))
        }
    }
    class hp {
        constructor(a) {
            this.G = a;
            this.gi = new kp(this.G);
            this.hi = new lp(this.G);
            this.Ae = new mp(this.G);
            this.ii = new np(this.G);
            this.ji = new op(this.G);
            this.ki = new pp(this.G);
            this.li = new qp(this.G);
            this.Ce = new rp(this.G);
            this.Hi = new sp(this.G);
            this.Ti = new tp(this.G);
            this.jj = new up(this.G);
            this.dk = new vp(this.G)
        }
    }
    class kp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(sm("VEDP7d"), km(new Q, a.language)), mm(new Q, a.browser)), om(new rm, jm(a.ha))))
        }
    }
    class lp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(sm("igjuhc"), km(new Q, a.language)), mm(new Q, a.browser)), om(new rm, jm(a.ha))))
        }
    }
    class mp {
        constructor(a) {
            this.G = a
        }
        Jc(a) {
            this.G.g(um(R(R(R(R(R(sm("i3zJEd"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.outcome)), nm(new Q, a.yc)), nm(new Q, a.gf)), qm(new rm, a.Mc)))
        }
    }
    class np {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(R(R(sm("JN0hVd"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.outcome)), nm(new Q, a.yc)), nm(new Q, a.gf)), om(new rm, jm(a.ha))))
        }
    }
    class op {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("rmHfOd"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.reason)), om(new rm, jm(a.ha))))
        }
    }
    class pp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("VEyQic"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), om(new rm, jm(a.ha))))
        }
    }
    class qp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("QFcNxc"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), om(new rm, jm(a.ha))))
        }
    }
    class rp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(R(sm("SIhp4"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), nm(new Q, a.yc)), om(new rm, jm(a.ha))))
        }
    }
    class sp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("Eeiun"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), om(new rm, jm(a.ha))))
        }
    }
    class tp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("SmbJl"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.type)), om(new rm, jm(a.ha))))
        }
    }
    class up {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("qleBg"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.format)), om(new rm, jm(a.ha))))
        }
    }
    class vp {
        constructor(a) {
            this.G = a
        }
        Ha(a) {
            this.G.g(um(R(R(R(sm("pYLGPe"), km(new Q, a.language)), mm(new Q, a.browser)), mm(new Q, a.type)), om(new rm, jm(a.ha))))
        }
    }
    class wp extends im {
        constructor() {
            super(...arguments);
            this.Od = new dp(this)
        }
    }
    var xp = class extends wp {
            I(...a) {
                this.A(...a.map(b => ({
                    Ia: !0,
                    Pa: 3,
                    Md: Ci(b)
                })))
            }
            Za(...a) {
                this.A(...a.map(b => ({
                    Ia: !0,
                    Pa: 7,
                    Md: Ci(b)
                })))
            }
            F(...a) {
                this.A(...a.map(b => ({
                    Ia: !0,
                    Pa: 16,
                    Md: Ci(b)
                })))
            }
            g(...a) {
                this.A(...a.map(b => ({
                    Ia: !1,
                    Pa: 1,
                    Md: Ci(b)
                })))
            }
        },
        zp = class extends wp {
            I(...a) {
                yp(this, ...a.map(b => ({
                    Ia: !0,
                    Pa: 3,
                    de: cp(b)
                })))
            }
            Za(...a) {
                yp(this, ...a.map(b => ({
                    Ia: !0,
                    Pa: 7,
                    de: Ro(b)
                })))
            }
            F(...a) {
                yp(this, ...a.map(b => ({
                    Ia: !0,
                    Pa: 16,
                    de: Vo(b)
                })))
            }
            g(...a) {
                yp(this, ...a.map(b => ({
                    Ia: !1,
                    Pa: 1,
                    de: vm(b)
                })))
            }
        };
    var Ap = (a, b) => {
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(() => {})
        },
        Bp = class extends xp {
            constructor(a) {
                super(2, a);
                this.j = Ap
            }
            A(...a) {
                try {
                    const b = em(a, this.i);
                    this.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    fm(b, this.i)
                }
            }
        },
        Cp = class extends Bp {};

    function Dp(a) {
        a.l !== null && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = em(a.j, a.i);
            a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Fp = class extends xp {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.H = Ap;
                this.W = b;
                this.L = c;
                this.R = d;
                this.C = e;
                this.j = [];
                this.l = null;
                this.B = !1
            }
            A(...a) {
                try {
                    this.R && em(this.j.concat(a), this.i).length >= 65536 && Dp(this), this.C && !this.B && (this.B = !0, Ep(this.C, () => {
                        Dp(this)
                    })), this.j.push(...a), this.j.length >= this.L && Dp(this), this.j.length && this.l === null && (this.l = setTimeout(() => {
                        Dp(this)
                    }, this.W))
                } catch (b) {
                    fm(b, this.i)
                }
            }
        },
        Gp = class extends Fp {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var Hp = a => {
        var b = "qf";
        if (a.qf && a.hasOwnProperty(b)) return a.qf;
        b = new a;
        return a.qf = b
    };

    function Ip(a, b, c) {
        return b[a] || c
    };

    function Jp(a, b) {
        a.i = (c, d) => Ip(2, b, () => [])(c, 1, d);
        a.g = () => Ip(3, b, () => [])(1)
    }
    class Kp {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function Lp(a, b) {
        return Hp(Kp).i(a, b)
    };

    function am(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Zl ? f = c : (f = new Zl, Cd(c, (h, k) => {
                var l = f;
                const m = l.l++;
                h = Ul(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = Yl(f, "/pagead/gen_204?id=" + b + "&");
            g && Jk(t, g)
        } catch (f) {}
    }

    function Mp(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Np {
        constructor() {
            this.g = Math.random()
        }
    };
    let Op, Pp;
    const Qp = new Tl(window);
    (a => {
        Op = a ? ? new Np;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Mp(Op, window.google_srt);
        Pp = new bm(Op, !0, Qp);
        $l(Pp, () => {});
        Pp.j = !0;
        window.document.readyState == "complete" ? window.google_measure_js_timing || Qp.disable() : Qp.g && rb(window, "load", () => {
            window.google_measure_js_timing || Qp.disable()
        })
    })();
    let Rp = (new Date).getTime();
    var Sp = {
        Gm: 0,
        Fm: 1,
        Cm: 2,
        xm: 3,
        Dm: 4,
        ym: 5,
        Em: 6,
        Am: 7,
        Bm: 8,
        wm: 9,
        zm: 10,
        Hm: 11
    };
    var Tp = {
        Jm: 0,
        Km: 1,
        Im: 2
    };

    function Up(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Vp(a) {
        a = Pa(a, b => new Xk(b.top, b.right, b.bottom, b.left));
        a = Wp(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Wp(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Qa(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Yk(a[0]))
    };
    var Db = {
        Bn: 0,
        lm: 1,
        om: 2,
        mm: 3,
        nm: 4,
        um: 8,
        Ln: 9,
        Wm: 10,
        Xm: 11,
        Jn: 16,
        Yl: 17,
        Xl: 24,
        Um: 25,
        Al: 26,
        zl: 27,
        ai: 30,
        Nm: 32,
        Rm: 40,
        Qn: 41,
        Mn: 42
    };
    var Xp = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Yp = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var Zp = 728 * 1.38;

    function $p(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = aq(a, !0, !0),
                    d = bq(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function cq(a, b = 420, c = !1, d = !1) {
        return (a = aq(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function dq(a) {
        return Math.max(0, eq(a, !0) - bq(a))
    }

    function fq(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function bq(a, b = !1) {
        const c = fq(a).clientHeight;
        return b ? c * ie(a) : c
    }

    function aq(a, b = !1, c = !1) {
        c = fq(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * ie(a) : c
    }

    function eq(a, b) {
        const c = fq(a);
        return b ? (a = bq(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function gq(a, b) {
        return hq(b) || b === 10 || !a.adCount ? !1 : b == 1 || b == 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function iq(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function jq(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function kq(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function lq(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function mq(a, b, c, d) {
        am(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function nq(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ma(Object.keys(b), c => {
            nl(a, c) || kl(a, c, b[c])
        });
        Vd(a)
    }

    function hq(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function oq() {}
    oq.prototype.next = function() {
        return pq
    };
    var pq = {
        done: !0,
        value: void 0
    };
    oq.prototype.Sa = function() {
        return this
    };

    function qq(a) {
        if (a instanceof oq) return a;
        if (typeof a.Sa == "function") return a.Sa(!1);
        if (wa(a)) {
            let b = 0;
            const c = new oq;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) return pq;
                    if (b in a) return {
                        value: a[b++],
                        done: !1
                    };
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function rq(a, b) {
        if (wa(a)) Ma(a, b);
        else
            for (a = qq(a);;) {
                const {
                    done: c,
                    value: d
                } = a.next();
                if (c) break;
                b.call(void 0, d, void 0, a)
            }
    };
    class sq {
        constructor(a, b) {
            this.g = a[t.Symbol.iterator]();
            this.i = b
        }[Symbol.iterator]() {
            return this
        }
        next() {
            const a = this.g.next();
            return {
                value: a.done ? void 0 : this.i.call(void 0, a.value),
                done: a.done
            }
        }
    }

    function tq(a, b) {
        return new sq(a, b)
    };

    function uq(a) {
        if (a instanceof vq || a instanceof wq || a instanceof xq) return a;
        if (typeof a.next == "function") return new vq(() => a);
        if (typeof a[Symbol.iterator] == "function") return new vq(() => a[Symbol.iterator]());
        if (typeof a.Sa == "function") return new vq(() => a.Sa());
        throw Error("Not an iterator or iterable.");
    }
    class vq {
        constructor(a) {
            this.g = a
        }
        Sa() {
            return new wq(this.g())
        }[Symbol.iterator]() {
            return new xq(this.g())
        }
        i() {
            return new xq(this.g())
        }
    }
    class wq extends oq {
        constructor(a) {
            super();
            this.g = a
        }
        next() {
            return this.g.next()
        }[Symbol.iterator]() {
            return new xq(this.g)
        }
        i() {
            return new xq(this.g)
        }
    }
    class xq extends vq {
        constructor(a) {
            super(() => a);
            this.j = a
        }
        next() {
            return this.j.next()
        }
    };

    function yq(a, b) {
        this.i = {};
        this.g = [];
        this.j = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof yq)
                for (c = zq(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    q = yq.prototype;
    q.ob = function() {
        return this.size
    };

    function zq(a) {
        Aq(a);
        return a.g.concat()
    }
    q.has = function(a) {
        return Bq(this.i, a)
    };
    q.isEmpty = function() {
        return this.size == 0
    };
    q.clear = function() {
        this.i = {};
        this.j = this.size = this.g.length = 0
    };
    q.remove = function(a) {
        return this.delete(a)
    };
    q.delete = function(a) {
        return Bq(this.i, a) ? (delete this.i[a], --this.size, this.j++, this.g.length > 2 * this.size && Aq(this), !0) : !1
    };

    function Aq(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                Bq(a.i, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], Bq(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    }
    q.get = function(a, b) {
        return Bq(this.i, a) ? this.i[a] : b
    };
    q.set = function(a, b) {
        Bq(this.i, a) || (this.size += 1, this.g.push(a), this.j++);
        this.i[a] = b
    };
    q.forEach = function(a, b) {
        for (var c = zq(this), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    q.keys = function() {
        return uq(this.Sa(!0)).i()
    };
    q.values = function() {
        return uq(this.Sa(!1)).i()
    };
    q.entries = function() {
        const a = this;
        return tq(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    q.Sa = function(a) {
        Aq(this);
        var b = 0,
            c = this.j,
            d = this,
            e = new oq;
        e.next = function() {
            if (c != d.j) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return pq;
            var f = d.g[b++];
            return {
                value: a ? f : d.i[f],
                done: !1
            }
        };
        return e
    };

    function Bq(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Cq(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function S() {
        this.C = this.C;
        this.I = this.I
    }
    S.prototype.C = !1;
    S.prototype.dispose = function() {
        this.C || (this.C = !0, this.g())
    };
    S.prototype[ia(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function Dq(a, b) {
        Eq(a, Ea(Cq, b))
    }

    function Eq(a, b) {
        a.C ? b() : (a.I || (a.I = []), a.I.push(b))
    }
    S.prototype.g = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };

    function Fq(a, b) {
        S.call(this);
        this.j = null;
        this.A = b;
        this.l = [];
        if (a > this.A) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
        for (b = 0; b < a; b++) this.l.push(this.i())
    }
    Ha(Fq, S);

    function Gq(a, b) {
        a.j = b
    }
    Fq.prototype.i = function() {
        return this.j ? this.j() : {}
    };
    Fq.prototype.g = function() {
        Fq.Nh.g.call(this);
        for (var a = this.l; a.length;) {
            var b = void 0,
                c = a.pop();
            if (xa(c))
                if (typeof c.dispose === "function") c.dispose();
                else
                    for (b in c) delete c[b]
        }
        delete this.l
    };

    function Hq() {
        this.g = [];
        this.i = new yq;
        this.j = new yq;
        this.C = 1;
        this.l = new Fq(0, 4E3);
        this.l.i = function() {
            return new Iq
        };
        this.B = new Fq(0, 50);
        this.B.i = function() {
            return new Jq
        };
        var a = this;
        this.A = new Fq(0, 2E3);
        Gq(this.A, function() {
            return a.C++
        })
    }

    function Jq() {
        this.time = this.count = 0
    }
    Jq.prototype.toString = function() {
        var a = [];
        a.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
        return a.join("")
    };

    function Iq() {}

    function Kq(a, b, c) {
        var d = [];
        b == -1 ? d.push("    ") : d.push(Lq(a.eventTime - b));
        d.push(" ", Mq(a.eventTime));
        a.eventType == 0 ? d.push(" Start        ") : a.eventType == 1 ? (d.push(" Done "), d.push(Lq(a.g - a.startTime), " ms ")) : d.push(" Comment      ");
        d.push(c, a);
        return d.join("")
    }
    Iq.prototype.toString = function() {
        return this.type == null ? this.comment : "[" + this.type + "] " + this.comment
    };
    Hq.prototype.toString = function() {
        for (var a = [], b = -1, c = [], d = 0; d < this.g.length; d++) {
            var e = this.g[d];
            e.eventType == 1 && c.pop();
            a.push(" ", Kq(e, b, c.join("")));
            b = e.eventTime;
            a.push("\n");
            e.eventType == 0 && c.push("|  ")
        }
        if (this.i.ob() != 0) {
            var f = Date.now();
            a.push(" Unstopped timers:\n");
            rq(this.i, function(g) {
                a.push("  ", g, " (", f - g.startTime, " ms, started at ", Mq(g.startTime), ")\n")
            })
        }
        b = zq(this.j);
        for (d = 0; d < b.length; d++) c = this.j.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n");
        a.push("Total tracers created ", 0, "\n",
            "Total comments created ", 0, "\n", "Overhead start: ", 0, " ms\n", "Overhead end: ", 0, " ms\n", "Overhead comment: ", 0, " ms\n");
        return a.join("")
    };

    function Lq(a) {
        a = Math.round(a);
        var b = "";
        a < 1E3 && (b = " ");
        a < 100 && (b = "  ");
        a < 10 && (b = "   ");
        return b + a
    }

    function Mq(a) {
        a = Math.round(a);
        return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
    }
    new Hq;

    function Nq(a, b) {
        Oq(a).forEach(b, void 0)
    }

    function Oq(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Pq(a, b) {
        return a.g[Qq(b)] !== void 0
    }

    function Rq(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function Sq(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const Tq = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = Qq(a);
            this.g[c] = b;
            this.i[c] = a
        }
        remove(a) {
            a = Qq(a);
            this.g[a] = void 0;
            this.i[a] = void 0
        }
        get(a, b) {
            a = Qq(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        ob() {
            return Rq(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function Qq(a) {
        return a instanceof Object ? String(ya(a)) : a + ""
    };
    const Uq = class {
        constructor(a) {
            this.g = new Tq;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        remove(a) {
            this.g.remove(a)
        }
        removeAll() {
            this.g.clear()
        }
        contains(a) {
            return Pq(this.g, a)
        }
    };
    const Vq = new Uq("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Wq(a, {
        gb: b,
        Va: c,
        zb: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? Xq(a, {
            gb: b,
            Va: c,
            zb: !0
        }) : null
    }

    function Xq(a, {
        gb: b,
        Va: c,
        zb: d = !1
    }) {
        const e = Yq({
                gb: b,
                Va: c,
                zb: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = Wq(a, {
            gb: b,
            Va: c,
            zb: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var Zq = class {
        constructor() {
            this.g = new Map
        }
    };

    function Yq({
        gb: a,
        Va: b,
        zb: c
    }) {
        a = ya(a);
        b = ya(b);
        return `${a}:${b}:${c}`
    };

    function $q(a) {
        Ic(a.document.body.offsetHeight)
    };

    function ar(a) {
        a.i.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function br(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.i.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.i.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var cr = class extends S {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.i = b
        }
        g() {
            ar(this);
            super.g()
        }
    };

    function dr(a) {
        const b = new T(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function er(a, b) {
        const c = new T({
            first: a.O,
            second: b.O
        });
        a.listen(() => c.g({
            first: a.O,
            second: b.O
        }));
        b.listen(() => c.g({
            first: a.O,
            second: b.O
        }));
        return c
    }

    function fr(...a) {
        const b = [...a],
            c = () => b.every(f => f.O),
            d = new T(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return gr(d)
    }

    function hr(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.O) !== -1,
            d = new T(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return gr(d)
    }

    function gr(a, b = ir) {
        var c = a.O;
        const d = new T(a.O);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function jr(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function kr(a, b, c) {
        if (a.O === b) return c(), () => {};
        const d = {
            Zb: null
        };
        d.Zb = jr(a, b, () => {
            d.Zb && (d.Zb(), d.Zb = null);
            c()
        });
        return d.Zb
    }

    function lr(a, b, c) {
        gr(a).listen(d => {
            d === b && c()
        })
    }

    function mr(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function nr(a, b, c, d) {
        const e = new T(!1);
        var f = null;
        a = a.map(d);
        jr(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        jr(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return gr(e)
    }

    function or(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.O
        }
    }
    class T {
        constructor(a) {
            this.O = a;
            this.j = new Map;
            this.C = 1;
            this.l = null
        }
        listen(a, b = !1) {
            const c = this.C++;
            this.j.set(c, a);
            b && a(this.O);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.O
        }
        g(a) {
            this.O = a;
            this.j.forEach(b => {
                b(this.O)
            })
        }
        map(a) {
            const b = new T(a(this.O));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function ir(a, b) {
        return a == b
    };

    function pr(a) {
        return new qr(a)
    }

    function rr(a, b) {
        Ma(a.g, c => {
            c(b)
        })
    }
    var sr = class {
        constructor() {
            this.g = []
        }
    };
    class qr {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new sr;
            this.listen(c => rr(b, a(c)));
            return pr(b)
        }
        delay(a, b) {
            const c = new sr;
            this.listen(d => {
                a.setTimeout(() => {
                    rr(c, d)
                }, b)
            });
            return pr(c)
        }
    }

    function tr(...a) {
        const b = new sr;
        a.forEach(c => {
            c.listen(d => {
                rr(b, d)
            })
        });
        return pr(b)
    };

    function ur(a) {
        return gr(er(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : vr(c, b)
        }))
    }
    var xr = class {
        constructor(a) {
            this.i = a;
            this.g = new T(null);
            this.j = new T(null);
            this.l = new sr;
            this.B = b => {
                this.g.O == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.A = b => {
                const c = this.g.O;
                c != null && (b = wr(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), rr(this.l, vr(c, b))))
            };
            this.C = b => {
                var c = this.g.O;
                c != null && (c = wr(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function vr(a, b) {
        return {
            Uh: b.pageX - a.pageX,
            Vh: b.pageY - a.pageY
        }
    }

    function wr(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function yr(a) {
        return gr(er(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : zr(c, b)
        }))
    }
    var Ar = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new T(null);
            this.i = new T(null);
            this.j = new sr;
            this.I = c => {
                this.g.g(c)
            };
            this.C = c => {
                const d = this.g.O;
                d != null && (this.g.g(null), this.i.g(null), rr(this.j, zr(d, c)))
            };
            this.B = c => {
                this.g.O != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function zr(a, b) {
        return {
            Uh: b.screenX - a.screenX,
            Vh: b.screenY - a.screenY
        }
    };
    var Dr = (a, b, c) => {
        const d = new Br(a, b, c);
        return () => Cr(d)
    };

    function Cr(a) {
        if (a.g) return !1;
        if (a.i == null) return Er(a), !0;
        const b = a.i + a.A - (new Date).getTime();
        if (b < 1) return Er(a), !0;
        Fr(a, b);
        return !0
    }

    function Er(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function Fr(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            Er(a)
        }, b)
    }
    class Br {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function Gr(a) {
        return Hr(yr(a.g), ur(a.i))
    }

    function Ir(a) {
        return tr(pr(a.g.j), pr(a.i.l))
    }
    var Jr = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function Hr(a, b) {
        return er(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var Kr = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function Lr(a) {
        a.A == null && (a.A = new T(a.B.getBoundingClientRect()));
        return a.A
    }
    class Mr extends S {
        constructor(a, b) {
            super();
            this.i = a;
            this.B = b;
            this.F = !1;
            this.A = null;
            this.l = () => {
                Lr(this).g(this.B.getBoundingClientRect())
            }
        }
        j() {
            this.F || (this.F = !0, this.i.addEventListener("resize", this.l), this.i.addEventListener("scroll", this.l));
            return Lr(this)
        }
        g() {
            this.i.removeEventListener("resize", this.l);
            this.i.removeEventListener("scroll", this.l);
            super.g()
        }
    };

    function Nr(a, b) {
        return new Or(a, b)
    }

    function Pr(a) {
        a.i || (a.i = !0, a.l.observe(a.element));
        return gr(a.j, yb)
    }
    var Or = class extends S {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.i = !1;
            this.j = new T(new xb(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                this.update()
            })
        }
        update() {
            this.win.requestAnimationFrame(() => {
                this.C || this.j.g(new xb(this.element.offsetWidth, this.element.offsetHeight))
            })
        }
        g() {
            this.l.disconnect();
            super.g()
        }
    };

    function Qr(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class Rr {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function Sr(a, b) {
        a = a.getBoundingClientRect();
        return new Tr(a.top + jq(b), a.bottom - a.top)
    }

    function Ur(a) {
        return new Tr(Math.round(a.g), Math.round(a.i))
    }
    class Tr {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var Wr = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new Uq(c);
        b = b.filter(e => !d.contains(e));
        b.length && (Vr(a, b), Xa(c, b))
    };

    function Vr(a, b) {
        for (const d of b) {
            const e = zd("LINK", a.document);
            e.type = "text/css";
            b = e;
            var c = Zc `//fonts.googleapis.com/css?family=${d}`;
            b.href = Rb(c).toString();
            b.rel = "stylesheet";
            a.document.head.appendChild(e)
        }
    };

    function Xr(a, b) {
        a.F = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class Yr extends S {
        constructor(a) {
            super();
            this.i = a;
            this.j = [];
            this.F = !1;
            this.B = this.l = null;
            this.H = Dr(a, 1E3, () => {
                if (this.B != null) {
                    var b = eq(this.i, !0) - this.B;
                    b > 1E3 && Xr(this, b)
                }
            });
            this.A = null
        }
        M(a, b) {
            a == null ? (this.B = a = eq(this.i, !0), this.i.addEventListener("scroll", this.H), b != null && b(a)) : this.A = this.i.setTimeout(() => {
                this.M(void 0, b)
            }, a)
        }
        g() {
            this.A != null && this.i.clearTimeout(this.A);
            this.i.removeEventListener("scroll", this.H);
            this.j = [];
            this.l = null;
            super.g()
        }
        addListener(a) {
            this.F ? a(this.l) : this.j.push(a)
        }
    };
    var Zr = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class $r {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function as(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new bs(d)
    }

    function cs(a) {
        return a.g.slice(0)
    }

    function ds(a, b = 1) {
        a = cs(a);
        const c = new $r(b);
        eb(a, () => c.next());
        return new bs(a)
    }
    const bs = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new bs(Oa(this.g, a))
        }
        apply(a) {
            return new bs(a(cs(this)))
        }
        sort(a) {
            return new bs(cs(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = cs(this);
            b.push(a);
            return new bs(b)
        }
        count() {
            return this.g.length
        }
    };
    class es {
        constructor(a) {
            this.g = new Uq(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function fs(a) {
        return new gs({
            value: a
        }, null)
    }

    function hs(a) {
        return new gs(null, Error(a))
    }

    function is(a) {
        try {
            return fs(a())
        } catch (b) {
            return new gs(null, b)
        }
    }

    function js(a) {
        return a.g != null ? a.getValue() : null
    }

    function ks(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function ls(a, b) {
        return a.isError() ? new gs(null, b(a.i)) : a
    }

    function ms(a, b) {
        return ls(a, c => Error(`${b}${c.message}`))
    }

    function ns(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class gs {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        isError() {
            return this.g == null
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof gs ? a : fs(a)) : this
        }
    };
    class os {
        constructor() {
            this.g = new Tq
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Uq, this.g.set(a, c));
            c.add(b)
        }
    };

    function ps(a) {
        return !a
    }

    function qs(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function rs(a) {
        return a !== null
    };
    var ss = class extends O {
        getId() {
            return I(this, 3)
        }
    };
    class ts {
        constructor(a, {
            ng: b,
            ei: c,
            wj: d,
            Bh: e
        }) {
            this.A = a;
            this.j = c;
            this.l = new bs(b || []);
            this.i = e;
            this.g = d
        }
    };
    var us = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new Tq;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        ws = a => {
            var b = vs(a);
            a = [];
            for (let c of b) b = String(c.ic), a.push(c.shortName + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const vs = a => {
            const b = [],
                c = a.l;
            c && c.count() && b.push({
                shortName: "a",
                ic: xs(c)
            });
            a.j != null && b.push({
                shortName: "as",
                ic: a.j
            });
            a.g != null && b.push({
                shortName: "i",
                ic: String(a.g)
            });
            a.i != null && b.push({
                shortName: "rp",
                ic: String(a.i)
            });
            b.sort(function(d, e) {
                return d.shortName.localeCompare(e.shortName)
            });
            b.unshift({
                shortName: "t",
                ic: ys(a.A)
            });
            return b
        },
        ys = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        xs = a => {
            a = cs(a).map(zs);
            a = JSON.stringify(a);
            return Ed(a)
        },
        zs = a => {
            const b = {};
            I(a, 7) != null && (b.q = I(a, 7));
            bi(a, 2) != null && (b.o = bi(a, 2));
            bi(a, 5) != null && (b.p = bi(a, 5));
            return b
        };

    function As() {
        var a = new Bs;
        return yi(a, 2, 1)
    }
    var Bs = class extends O {
        setLocation(a) {
            return yi(this, 1, a)
        }
        g() {
            return qi(this, 1)
        }
    };

    function Cs(a) {
        const b = [].slice.call(arguments).filter(jb(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.rg || []);
            d = Object.assign(d, e.xc())
        });
        return new Ds(c, d)
    }

    function Es(a) {
        switch (a) {
            case 1:
                return new Ds(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Ds(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Ds(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Ds(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Fs(a) {
        return a == null ? null : new Ds(null, {
            google_ml_rank: a
        })
    }

    function Gs(a) {
        return a == null ? null : new Ds(null, {
            google_placement_id: ws(a)
        })
    }

    function Hs({
        Oi: a,
        ej: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new Ds(null, a)
    }
    class Ds {
        constructor(a, b) {
            this.rg = a;
            this.g = b
        }
        xc() {
            return this.g
        }
    };
    var Is = class extends O {};
    var Js = class extends O {};
    var Ks = class extends O {
        C() {
            return I(this, 2)
        }
        A() {
            return I(this, 5)
        }
        g() {
            return Th(this, Js, 3, y())
        }
        j() {
            return bi(this, 4)
        }
        l() {
            return Ah(this, 6)
        }
        B() {
            return wh(this, Is, 7)
        }
    };
    var Ls = class extends O {};
    var Ms = class extends O {
        l() {
            return K(this, 12, !1)
        }
        j() {
            return Yh(this, 13)
        }
        g() {
            return mi(this, 23)
        }
    };
    var Ns = class extends O {
        constructor() {
            super()
        }
    };
    var Os = class extends O {
        g() {
            return ci(this, 3)
        }
        j() {
            return ai(this, 6)
        }
    };
    var Ps = class extends O {};
    var Qs = class extends O {};
    var Rs = class extends O {
        ia() {
            return z(this, ss, 1)
        }
        j() {
            return ci(this, 2)
        }
    };
    var Ss = class extends O {};
    var Ts = class extends O {};
    var Us = class extends O {
            getName() {
                return I(this, 4)
            }
        },
        Vs = [1, 2, 3];
    var Ws = class extends O {
        g() {
            return z(this, Os, 10)
        }
    };
    var Xs = class extends O {
        g() {
            return ai(this, 2)
        }
        j() {
            return ai(this, 3)
        }
    };
    var Ys = class extends O {
        g() {
            return Yh(this, 1)
        }
    };
    var Zs = class extends O {};
    var $s = class extends O {
        g() {
            return ei(this, 1)
        }
    };
    var at = class extends O {
        g() {
            return L(this, 1)
        }
        j() {
            return L(this, 2)
        }
    };
    var bt = class extends O {};
    var ct = class extends O {
        l() {
            return K(this, 1)
        }
        A() {
            return K(this, 3)
        }
        C() {
            return K(this, 7)
        }
        g() {
            return K(this, 4)
        }
        j() {
            return K(this, 5)
        }
    };
    var dt = class extends O {
        g() {
            return z(this, $s, 6)
        }
        j() {
            return z(this, ct, 12)
        }
    };
    var et = class extends O {};
    var ft = class extends O {
        g() {
            return z(this, et, 1)
        }
    };
    var gt = class extends O {};
    var ht = class extends O {};
    var it = class extends O {
        g() {
            return Th(this, ht, 1, y())
        }
    };
    var jt = class extends O {
        setProperty(a) {
            return wi(this, 1, a)
        }
        getValue() {
            return I(this, 2)
        }
    };
    var kt = class extends O {};
    var lt = class extends O {};
    var mt = class extends O {
        ia() {
            return z(this, ss, 1)
        }
        j() {
            return ci(this, 2)
        }
    };
    var nt = class extends O {};
    var ot = class extends O {};
    var pt = class extends O {
        g() {
            return ji(this, 6, y())
        }
    };
    var qt = class extends O {
        hf() {
            return wh(this, ot, 2)
        }
    };
    var rt = class extends O {
        g() {
            return ei(this, 1)
        }
    };
    var st = class extends O {};
    var ut = class extends O {
            g() {
                return li(this, st, 2, tt)
            }
        },
        tt = [1, 2];
    var vt = class extends O {
        g() {
            return z(this, ut, 3)
        }
    };
    var wt = class extends O {};
    var xt = class extends O {
        g() {
            return Th(this, wt, 1, y())
        }
    };
    var yt = class extends O {
        g() {
            return ji(this, 1, y())
        }
        j() {
            return z(this, vt, 3)
        }
    };
    var zt = rk(class extends O {
        getMetadata() {
            return z(this, it, 6)
        }
        g() {
            return z(this, Ms, 15)
        }
    });
    var At = class extends O {},
        Bt = rk(At);

    function Ct(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Bt(b) : null
        } catch (b) {
            return null
        }
    }

    function Dt(a, b) {
        if (a.Ve !== void 0) {
            var c = Ct(b);
            c || (c = new At);
            a.Ve !== void 0 && ri(c, 2, a.Ve);
            a = Date.now() + 864E5;
            Number.isFinite(a) && ui(c, 1, Math.round(a));
            c = Bi(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = Ct(b)) && Yh(c, 1) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var Et = {
            Eb: "ama_success",
            Ya: .1,
            pb: !0,
            Hb: !0
        },
        Ft = {
            Eb: "ama_failure",
            Ya: .1,
            pb: !0,
            Hb: !0
        },
        Gt = {
            Eb: "ama_coverage",
            Ya: .1,
            pb: !0,
            Hb: !0
        },
        Ht = {
            Eb: "ama_opt",
            Ya: .1,
            pb: !0,
            Hb: !1
        },
        It = {
            Eb: "ama_auto_rs",
            Ya: 1,
            pb: !0,
            Hb: !1
        },
        Jt = {
            Eb: "ama_constraints",
            Ya: 0,
            pb: !0,
            Hb: !0
        };

    function Kt(a, b) {
        Lt(a.i, It, { ...b,
            evt: "place",
            vh: bq(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: z(a.g, at, 5) ? .g() || ""
        })
    }

    function Mt(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Fl(c.stack, "") || "");
        Kt(a, b)
    }
    var Nt = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    const Ot = ["-webkit-text-fill-color"];

    function Pt(a) {
        if (Lc) {
            {
                const c = Ad(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Qt(a)
                } else a = Rt()
            }
        } else a = Rt();
        return a
    }
    var Rt = () => {
        const a = {
            all: "initial"
        };
        Ma(Ot, b => {
            a[b] = "unset"
        });
        return a
    };

    function Qt(a) {
        Ma(Ot, b => {
            delete a[b]
        });
        return a
    };
    var St = class {
        constructor(a) {
            this.g = a
        }
        getContent(a) {
            const b = a.document.createElement("div");
            v(b, Pt(a));
            v(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            v(c, Pt(a));
            v(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function Tt(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Ut(a) {
        return Oq(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Vt(a, b) {
        a = pd(new dd(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Wt(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Tt(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Xt(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Tt(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var U = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        V = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Yt = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        Zt = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        $t = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var au = new V(619278254, 10),
        bu = new U(687716473),
        cu = new U(687747818),
        du = new U(1377),
        eu = new U(676894296, !0),
        fu = new U(1371, !0),
        gu = new U(682658313),
        hu = new V(1130, 100),
        iu = new V(1339, .3),
        ju = new V(1032, 200),
        ku = new Yt(14),
        lu = new U(1370, !0),
        mu = new V(1224, .01),
        nu = new U(654220660, !0),
        ou = new V(1346, 6),
        pu = new V(1347, 3),
        qu = new U(1367),
        ru = new U(1260),
        su = new U(316),
        tu = new U(1290),
        uu = new U(334),
        vu = new V(1263, -1),
        wu = new V(54),
        xu = new V(1323, -1),
        yu = new V(1265, -1),
        zu = new V(1264, -1),
        Au = new U(1291),
        Bu = new U(1267, !0),
        Cu =
        new U(1266),
        Du = new U(313),
        Eu = new V(66, -1),
        Fu = new V(65, -1),
        Gu = new U(1256),
        Hu = new U(369),
        Iu = new U(1241, !0),
        Ju = new U(368),
        Ku = new U(1300, !0),
        Lu = new Zt(1273, ["en", "de", "fr", "es", "ja"]),
        Mu = new Zt(1261, ["44786015", "44786016"]),
        Nu = new U(1309),
        Ou = new U(1361),
        Pu = new U(1349),
        Qu = new U(1372),
        Ru = new U(290),
        Su = new U(1368, !0),
        Tu = new U(1222),
        Uu = new U(1354),
        Vu = new U(1341),
        Wu = new V(1366),
        Xu = new V(1365),
        Yu = new V(1364, 300),
        Zu = new U(1350),
        $u = new U(1356),
        av = new U(626390500),
        bv = new U(686013513),
        cv = new $t(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        dv = new V(643258048),
        ev = new V(643258049),
        fv = new U(682250248),
        gv = new Yt(622128249, "#FFFFFF"),
        hv = new Yt(622128250, "#1A73E8"),
        iv = new $t(641845510, ["33"]),
        jv = new U(686023322),
        kv = new U(566279275),
        lv = new U(622128248),
        mv = new U(566279276),
        nv = new U(681379804, !0),
        ov = new U(676863674, !0),
        pv = new Yt(589752731, "#FFFFFF"),
        qv = new Yt(589752730, "#1A73E8"),
        rv = new $t(635821288, ["29_18", "30_19"]),
        sv = new $t(631402549),
        tv = new $t(636146137, ["29_5", "30_6"]),
        uv = new U(636570127, !0),
        vv = new $t(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        wv = new V(652486359, 1),
        xv = new V(626062006, 670),
        yv = new V(688905693),
        zv = new V(666400580, 22),
        Av = new V(687270738),
        Bv = new U(626062008),
        Cv = new U(679043940),
        Dv = new $t(683929765),
        Ev = new U(643258050),
        Fv = new U(686891043),
        Gv = new U(683614711),
        Hv = new U(688113706),
        Iv = new U(506914611),
        Jv = new U(655991266, !0),
        Kv = new U(597181299),
        Lv = new U(626062007),
        Mv = new U(686111728),
        Nv = new U(683976695),
        Ov = new U(686102333),
        Pv = new U(689318127),
        Qv = new $t(630330362),
        Rv = new V(618163195, 15E3),
        Sv = new V(624950166, 15E3),
        Tv = new V(623405755,
            300),
        Uv = new V(508040914, 500),
        Vv = new V(547455356, 49),
        Wv = new V(650548030, 2),
        Xv = new V(650548032, 300),
        Yv = new V(650548031, 1),
        Zv = new V(655966487, 300),
        $v = new V(655966486, 250),
        aw = new V(469675170, 6E4),
        bw = new U(562896595),
        cw = new U(675298507),
        dw = new U(644381219),
        ew = new U(644381220),
        fw = new U(676460084),
        gw = new U(680702595),
        hw = new U(45650663),
        iw = new V(684147713, -1),
        jw = new U(678806782, !0),
        kw = new U(570863962, !0),
        lw = new Yt(570879859, "control_1\\.\\d"),
        mw = new V(570863961, 50),
        nw = new U(570879858, !0),
        ow = new V(63, 30),
        pw = new U(1134),
        qw = new U(562874197),
        rw = new U(562874196),
        sw = new U(555237685, !0),
        tw = new U(45460956),
        uw = new U(45414947, !0),
        vw = new V(472785970, 500),
        ww = new V(550718588, 250),
        xw = new V(624290870, 50),
        yw = new U(506738118),
        zw = new U(77),
        Aw = new U(78),
        Bw = new U(83),
        Cw = new U(80),
        Dw = new U(76),
        Ew = new U(84),
        Fw = new U(1973),
        Gw = new U(188),
        Hw = new U(485990406);
    var Iw = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function W(a) {
        return Hp(Iw).j(a.g, a.defaultValue)
    }

    function X(a) {
        return Hp(Iw).A(a.g, a.defaultValue)
    }

    function Jw(a) {
        return Hp(Iw).C(a.g, a.defaultValue)
    }

    function Kw(a) {
        return Hp(Iw).l(a.g, a.defaultValue)
    };
    var Mw = (a, b, c, d = 0) => {
            var e = Lw(b, c, d);
            if (e.M) {
                for (c = b = e.M; c = e.xd(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Vd
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Wt(a, e.anchor, e.position)
        },
        Nw = (a, b, c, d = 0) => {
            W(Du) ? Mw(a, b, c, d) : Wt(a, b, c)
        };

    function Lw(a, b, c) {
        const d = f => {
                f = Ow(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = Ow(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    M: Pw(a.previousSibling, d),
                    xd: f => Pw(f.previousSibling, d),
                    Vd: 0
                };
            case 2:
                return {
                    M: Pw(a.lastChild, d),
                    xd: f => Pw(f.previousSibling, d),
                    Vd: 0
                };
            case 3:
                return {
                    M: Pw(a.nextSibling, e),
                    xd: f => Pw(f.nextSibling, e),
                    Vd: 3
                };
            case 1:
                return {
                    M: Pw(a.firstChild, e),
                    xd: f => Pw(f.nextSibling, e),
                    Vd: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Ow(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Pw(a, b) {
        return a && b(a) ? a : null
    };

    function Qw(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function Rw(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function Sw(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function Tw(a, b, c) {
        a = Qw(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function Uw(a, b) {
        b = b.parentElement;
        return b ? (a = Ad(b, a)) ? a.direction : "" : ""
    }

    function Vw(a, b, c) {
        if (Tw(a, b, c) !== 0) {
            Sw(b, c, "0px");
            var d = Tw(a, b, c);
            Sw(b, c, `${-1*d}px`);
            a = Tw(a, b, c);
            a !== 0 && a !== d && Sw(b, c, `${d/(a-d)*d}px`)
        }
    };
    const Ww = RegExp("(^| )adsbygoogle($| )");

    function Xw(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = tc(d.property);
            a[e] = d.value
        }
    }

    function Yw(a, b, c, d, e, f) {
        a = Zw(a, e);
        a.ta.setAttribute("data-ad-format", d ? d : "auto");
        $w(a, b, c, f);
        return a
    }

    function ax(a, b, c = null) {
        a = Zw(a, {});
        $w(a, b, null, c);
        return a
    }

    function $w(a, b, c, d) {
        var e = [];
        if (d = d && d.rg) a.mb.className = d.join(" ");
        a = a.ta;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Zw(a, b) {
        const c = Vt(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Ud && Xw(d, b.Ud);
        a = pd(new dd(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.bg && (d.marginTop = b.bg);
        b.Fe && (d.marginBottom = b.Fe);
        b.Vb && Xw(d, b.Vb);
        c.appendChild(a);
        return {
            mb: c,
            ta: a
        }
    }

    function bx(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.xc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function cx(a) {
        const b = Ut(a.document);
        Ma(b, function(c) {
            const d = dx(a, c);
            var e;
            if (e = d) {
                e = (e = Qw(c, a)) ? e.y : 0;
                const f = bq(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), bx(a, c))
        })
    }

    function dx(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in fb) a[fb[c]] && (b[fb[c]] = a[fb[c]]);
        return b
    };
    var fx = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (ex(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const ex = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? qc(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && Vq.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (ex(a, b[c])) return !0
        }
        return !1
    };
    var gx = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const hx = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return Yw(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return gx(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function ix(a) {
        var b = [];
        Nq(a.getElementsByTagName("p"), function(c) {
            jx(c) >= 100 && b.push(c)
        });
        return b
    }

    function jx(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        Nq(a.childNodes, function(c) {
            b += jx(c)
        });
        return b
    }

    function kx(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function lx(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const mx = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length) return [];
            a = Wa(b);
            a = lx(this, a);
            typeof this.i === "number" && (b = this.i, b < 0 && (b += a.length), a = b >= 0 && b < a.length ? [a[b]] : []);
            if (typeof this.j === "number") {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = ix(a[c]),
                        e = this.j;
                    e < 0 && (e += d.length);
                    e >= 0 && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class nx {
        constructor() {
            this.g = Zc `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`
        }
        aa(a, b, c = .01, d = "jserror") {
            if (Math.random() > c) return !1;
            b.error && b.meta && b.id || (b = new Dl(b, {
                context: a,
                id: d
            }));
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (yd(t.document, this.g), t.error_rep_loaded = !0);
            return !1
        }
        tb(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.aa(a, c, .01, "jserror")) throw c;
            }
        }
        Ca(a, b, c) {
            return (...d) => this.tb(a, () => b.apply(c, d))
        }
        la(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.aa(a, c instanceof Error ? c : Error(c), void 0)
            })
        }
    };
    const ox = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var px = (a, b, c, d) => {
            const e = d || window,
                f = typeof queueMicrotask !== "undefined";
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = Ml();
                let h, k = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (l) {
                    k = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && ox({
                        label: a.toString(),
                        value: g,
                        duration: (Ml() || 0) - g,
                        type: k,
                        ...(f && {
                            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                        })
                    }, e)
                }
                return h
            }
        },
        qx = (a, b) => px(754,
            a, (c, d) => {
                (new nx).aa(c, d)
            }, b);

    function rx(a, b, c) {
        return px(a, b, void 0, c).apply()
    }

    function sx(a, b) {
        return qx(a, b).apply()
    }

    function tx(a) {
        if (!a) return null;
        var b = I(a, 7);
        if (I(a, 1) || a.getId() || ji(a, 4, y()).length > 0) {
            var c = I(a, 3),
                d = I(a, 1),
                e = ji(a, 4, y(zf));
            b = bi(a, 2);
            var f = bi(a, 5);
            a = ux(ci(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + kx(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + kx(e[c]);
            b = (e = g) ? new mx(e, b, f, a) : null
        } else b = b ? new mx(b, bi(a, 2), bi(a, 5), ux(ci(a, 6))) : null;
        return b
    }
    var vx = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function ux(a) {
        return a == null ? a : vx[a]
    }

    function wx(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = I(a[c], 1),
                e = I(a[c], 2);
            if (d && e != null) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function xx(a, b) {
        var c = {};
        a && (c.bg = I(a, 1), c.Fe = I(a, 2), c.clearBoth = !!ai(a, 3));
        b && (c.Ud = wx(Th(b, jt, 3, y(zf))), a = Th(b, jt, 4, y(zf)), c.Vb = wx(a));
        return c
    }
    var yx = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        zx = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Ax = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return Yw(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class Bx {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = gx(a);
            return new Ds(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Cx = class {
        constructor(a, b) {
            this.l = a;
            this.i = b
        }
        g() {
            return this.l
        }
        j() {
            return this.i
        }
    };
    const Dx = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = Th(this.g, kt, 9, y()).length > 0 ? Th(this.g, kt, 9, y())[0] : null,
                f = xx(z(this.g, lt, 3), e);
            if (!e) return null;
            if (e = I(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = pd(new dd(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                g == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Ud && Xw(c.style, f.Ud);
                d = pd(new dd(d), "INS");
                f.Vb && Xw(d.style, f.Vb);
                c.appendChild(d);
                f = {
                    mb: c,
                    ta: d
                };
                f.ta.setAttribute("data-ad-type", "text");
                f.ta.setAttribute("data-native-settings-key",
                    e);
                $w(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = Th(this.g, kt, 9, y()).length > 0 ? Th(this.g, kt, 9, y())[0] : null;
            if (!a) return null;
            a = Th(a, jt, 3, y());
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (I(c, 1) == "height" && parseInt(I(c, 2), 10) > 0) return parseInt(I(c, 2), 10)
            }
            return null
        }
    };
    const Ex = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    k !== "width" && k !== "height" && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Vb: g
                }
            } else c = {};
            a = Yw(d.document, a, f, e, c, b);
            a.ta.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        xc() {
            return this.g
        }
    };
    class Fx {
        constructor(a) {
            this.i = a
        }
        g() {
            return new Ds([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Gx = class {
        constructor(a, b) {
            this.l = a;
            this.i = b
        }
        j() {
            return this.i
        }
        g(a) {
            a = this.l.query(a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function Hx(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.ia();
            if (k) {
                var l = tx(k);
                if (l) {
                    var m = ci(e, 2);
                    m = yx[m];
                    var n = m === void 0 ? null : m;
                    if (n === null) e = null;
                    else {
                        m = (m = z(e, lt, 3)) ? ai(m, 3) : null;
                        l = new Gx(l, n);
                        n = ki(e, 10, y()).slice(0);
                        bi(k, 5) != null && n.push(1);
                        var p = h ? h : {};
                        h = bi(e, 12);
                        k = wh(e, Bs, 4) ? z(e, Bs, 4) : null;
                        ci(e, 8) == 1 ? (p = p.xi || null, e = new Ix(l, new Ax(xx(z(e, lt, 3), null)), p, m, 0, n, k, g, f, h, e)) : e = ci(e, 8) == 2 ? new Ix(l, new Dx(e), p.xj || new Fx("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e =
                null;
            e !== null && d.push(e)
        }
        return d
    }

    function Mx(a) {
        return a.l
    }

    function Nx(a) {
        return a.sa
    }

    function Ox(a) {
        return a.C instanceof Ex ? a.C.xc() : null
    }

    function Px(a, b, c) {
        Pq(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function Qx(a) {
        return Vt(a.g.document, a.F || !1)
    }

    function Rx(a) {
        return a.C.j(a.g)
    }

    function Sx(a, b = null, c = null) {
        return new Ix(a.I, b || a.C, c || a.R, a.F, a.Ib, a.Bc, a.ce, a.g, a.na, a.B, a.i, a.A, a.W)
    }
    class Ix {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.I = a;
            this.C = b;
            this.R = c;
            this.F = d;
            this.Ib = e;
            this.Bc = f;
            this.ce = g ? g : new Bs;
            this.g = h;
            this.na = k;
            this.B = l;
            this.i = m;
            (a = !m) || (a = !(m.ia() && bi(m.ia(), 5) != null));
            this.sa = !a;
            this.A = n;
            this.W = p;
            this.H = [];
            this.l = !1;
            this.L = new Tq
        }
        da() {
            return this.g
        }
        j() {
            return this.I.j()
        }
    };

    function Tx(a, b, c, d, e, f) {
        const g = As();
        return new Ix(new Cx(c, e), new hx, new Bx(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function Ux(a, b, c, d, e) {
        const f = As();
        return new Ix(new Cx(b, d), new Ax({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var Vx = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        da() {
            return this.win
        }
        A(a) {
            return Tx(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return Ux(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const Wx = {
        TABLE: {
            nc: new es([1, 2])
        },
        THEAD: {
            nc: new es([0, 3, 1, 2])
        },
        TBODY: {
            nc: new es([0, 3, 1, 2])
        },
        TR: {
            nc: new es([0, 3, 1, 2])
        },
        TD: {
            nc: new es([0, 3])
        }
    };

    function Xx(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = La(e, f), c < 0 || b.push(new Yx(a, [f], c, f, 3, ld(f).trim(), d));
        return b
    }

    function Zx(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (l.nodeType == 1 || l.nodeType == 3) {
                if (l.nodeType != 1) var m = null;
                else l.tagName == "BR" ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"), m = m == "inline" || m == "inline-block" ? null : l);
                m ? (d.length && k && e.push(new Yx(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = ld(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Yx(a, d, h, b, 2, k, c));
        return e
    }

    function $x(a, b) {
        return a.g - b.g
    }
    class Yx {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.hd = b.slice(0);
            this.g = c;
            this.je = d;
            this.ke = e;
            this.C = f;
            this.i = g
        }
        da() {
            return this.i
        }
        A(a) {
            return Tx(a, this.l, this.je, this.i, this.ke, this.g)
        }
        j() {
            return Ux(this.l, this.je, this.i, this.ke, this.g)
        }
    };

    function ay(a) {
        return Va(a.C ? Zx(a.g, a.j, a.i) : [], a.A ? Xx(a.g, a.A, a.j, a.i) : []).filter(b => {
            var c = b.je.tagName;
            c ? (c = Wx[c.toUpperCase()], b = c != null && c.nc.contains(b.ke)) : b = !1;
            return !b
        })
    }
    class by {
        constructor(a, b, c) {
            this.j = a;
            this.A = b.dd;
            this.C = b.Gg;
            this.g = b.articleStructure;
            this.i = c;
            this.l = b.mg
        }
    };

    function cy(a, b) {
        if (!b) return !1;
        const c = ya(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = cy(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function dy(a, b) {
        return Ra(b.hd, c => cy(a, c))
    }
    class ey {
        constructor(a) {
            this.g = new Tq;
            this.i = a
        }
    };
    class fy {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var hy = (a, {
            Sg: b = !1,
            Sf: c = !1,
            gh: d = c ? 2 : 3,
            Rf: e = null
        } = {}) => {
            a = ay(a);
            return gy(a, {
                Sg: b,
                Sf: c,
                gh: d,
                Rf: e
            })
        },
        gy = (a, {
            Sg: b = !1,
            Sf: c = !1,
            gh: d = c ? 2 : 3,
            Rf: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort($x);
            a = [];
            b = new fy(b, e);
            for (const g of f) {
                e = {
                    Wd: g,
                    zd: g.C.length < 51 ? !1 : b.j != null ? !dy(b.j, g) : !0
                };
                if (b.l || e.zd) b.g.length ? (f = b.g[b.g.length - 1].Wd, f = fx(f.da(), f.hd[f.hd.length - 1], e.Wd.hd[0])) : f = !0, f ? (b.g.push(e), e.zd && b.i.push(e.Wd)) : (b.g = [e], b.i = e.zd ? [e.Wd] : []);
                if (b.i.length >=
                    d) {
                    e = b;
                    f = c ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].zd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var jy = (a, b, c = !1) => {
            a = iy(a, b);
            const d = new ey(b);
            return Zr(a, e => hy(e, {
                Sf: c,
                Rf: d
            }))
        },
        ky = (a, b) => {
            a = iy(a, b);
            const c = new ey(b);
            return Zr(a, d => {
                if (d.l) {
                    var e = d.g;
                    var f = d.i;
                    d = d.j.querySelectorAll(d.l);
                    var g = [];
                    for (var h of d) g.push(new Vx(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        const m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if (l.name.toLowerCase() === "style" && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k =
                            h.element.tagName;k = k === "IMG" || k === "SVG"
                        }(k || h.element.textContent.length > 1) && !cy(c, f.element) && fx(m.da(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        iy = (a, b) => {
            const c = new Tq;
            a.forEach(d => {
                var e = tx(z(d, ss, 1));
                if (e) {
                    var f = e.toString();
                    Pq(c, f) || c.set(f, {
                        articleStructure: d,
                        oi: e,
                        dd: null,
                        Gg: !1,
                        mg: null
                    });
                    e = c.get(f);
                    (f = (f = z(d, ss, 2)) ? I(f, 7) : null) ? e.dd = e.dd ? e.dd + "," + f : f: e.Gg = !0;
                    d = z(d, ss, 4);
                    e.mg = d ? I(d, 7) : null
                }
            });
            return Sq(c).map(d => {
                const e = d.oi.query(b.document);
                return e.length ? new by(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var ly = a => a ? .google_ad_slot ? fs(new ts(1, {
            ei: a.google_ad_slot
        })) : hs("Missing dimension when creating placement id"),
        ny = a => {
            switch (a.Ib) {
                case 0:
                case 1:
                    var b = a.i;
                    b == null ? a = null : (a = b.ia(), a == null ? a = null : (b = ci(b, 2), a = b == null ? null : new ts(0, {
                        ng: [a],
                        Bh: b
                    })));
                    return a != null ? fs(a) : hs("Missing dimension when creating placement id");
                case 2:
                    return a = my(a), a != null ? fs(a) : hs("Missing dimension when creating placement id");
                default:
                    return hs("Invalid type: " + a.Ib)
            }
        };
    const my = a => {
        if (a == null || a.A == null) return null;
        const b = z(a.A, ss, 1),
            c = z(a.A, ss, 2);
        if (b == null || c == null) return null;
        const d = a.W;
        if (d == null) return null;
        a = a.j();
        return a == null ? null : new ts(0, {
            ng: [b, c],
            wj: d,
            Bh: zx[a]
        })
    };

    function oy(a) {
        const b = Ox(a.ea);
        return (b ? ly(b) : ny(a.ea)).map(c => ws(c))
    }

    function py(a) {
        a.g = a.g || oy(a);
        return a.g
    }

    function qy(a, b) {
        if (a.ea.l) throw Error("AMA:AP:AP");
        Nw(b, a.ia(), a.ea.j());
        a = a.ea;
        a.l = !0;
        b != null && a.H.push(b)
    }
    const ry = class {
        constructor(a, b, c) {
            this.ea = a;
            this.i = b;
            this.ma = c;
            this.g = null
        }
        ia() {
            return this.i
        }
        fill(a, b) {
            var c = this.ea;
            (a = c.C.i(a, b, this.i, c.g)) && qy(this, a.mb);
            return a
        }
    };

    function sy(a, b) {
        return sx(() => {
            const c = [],
                d = [];
            try {
                var e = [];
                for (var f = 0; f < a.length; f++) {
                    var g = a[f],
                        h = g.I.g(g.g);
                    h && e.push({
                        th: g,
                        anchorElement: h
                    })
                }
                for (g = 0; g < e.length; g++) {
                    f = d;
                    var k = f.push; {
                        var l = e[g];
                        const C = l.anchorElement,
                            F = l.th;
                        var m = F.F,
                            n = F.g.document.createElement("div");
                        n.className = "google-auto-placed";
                        var p = n.style;
                        p.textAlign = "center";
                        p.width = "100%";
                        p.height = "0px";
                        p.clear = m ? "both" : "none";
                        h = n;
                        try {
                            Nw(h, C, F.j());
                            var r = h
                        } catch (E) {
                            throw Xt(h), E;
                        }
                    }
                    k.call(f, r)
                }
                const w = jq(b),
                    D = kq(b);
                for (k = 0; k < d.length; k++) {
                    const C =
                        d[k].getBoundingClientRect(),
                        F = e[k];
                    c.push(new ry(F.th, F.anchorElement, new Rr(C.left + D, C.top + w, C.right - C.left)))
                }
            } finally {
                for (e = 0; e < d.length; e++) Xt(d[e])
            }
            return c
        }, b)
    };
    const ty = {
            1: "0.5vp",
            2: "300px"
        },
        uy = {
            1: 700,
            2: 1200
        },
        vy = {
            [1]: {
                Kh: "3vp",
                Tf: "1vp",
                Jh: "0.3vp"
            },
            [2]: {
                Kh: "900px",
                Tf: "300px",
                Jh: "90px"
            }
        };

    function wy(a, b, c) {
        var d = xy(a),
            e = bq(a) || uy[d],
            f = void 0;
        c && (f = (c = (c = yy(Th(c, Ks, 2, y()), d)) ? z(c, Is, 7) : void 0) ? zy(c, e) : void 0);
        c = f;
        f = xy(a);
        a = bq(a) || uy[f];
        const g = Ay(vy[f].Tf, a);
        a = g === null ? By(f, a) : new Cy(g, g, Dy(g, 8), 8, .3, c);
        c = Ay(vy[d].Kh, e);
        f = Ay(vy[d].Tf, e);
        d = Ay(vy[d].Jh, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Cy(e, e, Dy(e, a.i), a.i, a.l, a.g)
    }

    function Ey(a, b) {
        const c = Yh(a, 4);
        a = Ah(a, 5);
        return c == null || a == null ? b : new Cy(a, 0, [], c, 1)
    }

    function Fy(a, b) {
        const c = xy(a);
        a = bq(a) || uy[c];
        if (!b) return By(c, a);
        if (b = yy(Th(b, Ks, 2, y()), c))
            if (b = Gy(b, a)) return b;
        return By(c, a)
    }

    function Hy(a) {
        const b = xy(a);
        a = bq(a) || uy[b];
        return By(b, a)
    }

    function Iy() {
        return W(tu) ? new Cy(0, null, [], 8, .3) : new Cy(0, null, [], 3, null)
    }

    function Jy(a, b) {
        let c = {
            Ic: a.j,
            rb: a.C
        };
        for (let d of a.A) d.adCount <= b && (c = d.Qc);
        return c
    }

    function Ky(a, b, c) {
        var d = ai(b, 2);
        b = z(b, Ks, 1);
        var e = xy(c);
        var f = bq(c) || uy[e];
        c = Ay(b ? .C(), f) ? ? a.j;
        e = Ay(b ? .A(), f) ? ? a.C;
        d = d ? [] : Ly(b ? .g(), f) ? ? a.A;
        const g = b ? .j() ? ? a.i,
            h = b ? .l() ? ? a.l;
        a = (b ? .B() ? zy(z(b, Is, 7), f) : null) ? ? a.g;
        return new Cy(c, e, d, g, h, a)
    }

    function My(a, b) {
        var c = xy(b);
        const d = new Ls,
            e = new Ks;
        let f = !1;
        var g = X(vu);
        g >= 0 && (si(e, 4, g), f = !0);
        g = null;
        c === 1 ? (c = X(zu), c >= 0 && (g = c + "vp")) : (c = X(yu), c >= 0 && (g = c + "px"));
        c = X(xu);
        c >= 0 && (g = c + "px");
        g !== null && (wi(e, 2, g), f = !0);
        c = W(Bu) ? "0px" : null;
        c !== null && (wi(e, 5, c), f = !0);
        if (W(Cu)) ri(d, 2, !0), f = !0;
        else if (c !== null || g !== null) {
            const m = [];
            for (const n of a.A) {
                var h = m,
                    k = h.push;
                var l = new Js;
                l = si(l, 1, n.adCount);
                l = wi(l, 3, c ? ? n.Qc.rb + "px");
                l = wi(l, 2, g ? ? n.Qc.Ic + "px");
                k.call(h, l)
            }
            Uh(e, 3, m)
        }
        return f ? (B(d, 1, e), Ky(a, d, b)) : a
    }
    class Cy {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.A = c.sort((g, h) => g.adCount - h.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
    }

    function yy(a, b) {
        for (let c of a)
            if (ci(c, 1) == b) return c;
        return null
    }

    function Ly(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = bi(d, 1);
            const e = Ay(I(d, 2), b),
                f = Ay(I(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Qc: {
                    Ic: e,
                    rb: f
                }
            })
        }
        return c
    }

    function Gy(a, b) {
        const c = Ay(I(a, 2), b),
            d = Ay(I(a, 5), b);
        if (c === null) return null;
        const e = bi(a, 4);
        if (e == null) return null;
        var f = a.g();
        f = Ly(f, b);
        if (f === null) return null;
        const g = z(a, Is, 7);
        b = g ? zy(g, b) : void 0;
        return new Cy(c, d, f, e, Ah(a, 6), b)
    }

    function By(a, b) {
        a = Ay(ty[a], b);
        return W(tu) ? new Cy(a === null ? Infinity : a, null, [], 8, .3) : new Cy(a === null ? Infinity : a, null, [], 3, null)
    }

    function Ay(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function xy(a) {
        a = aq(a) >= 900;
        return rd() && !a ? 1 : 2
    }

    function Dy(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Qc: {
                Ic: a * 2,
                rb: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Qc: {
                Ic: a * 3,
                rb: a * 3
            }
        }]
    }

    function zy(a, b) {
        const c = Ay(I(a, 2), b) || 0,
            d = bi(a, 3) || 1;
        a = Ay(I(a, 1), b) || 0;
        return {
            hh: c,
            bh: d,
            ec: a
        }
    };

    function Ny(a, b, c) {
        return Up({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function Oy(a) {
        if (!a.length) return null;
        const b = Vp(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new Py(b, a)
    }
    class Py {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };
    var Qy = class extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, Qy) : this.stack = Error().stack || ""
        }
    };
    let Ry, Y;
    const Sy = new Tl(t);
    ((a, b = !0) => {
        Ry = a || new Np;
        typeof t.google_srt !== "number" && (t.google_srt = Math.random());
        Mp(Ry, t.google_srt);
        Y = new bm(Ry, b, Sy);
        Y.j = !0;
        t.document.readyState == "complete" ? t.google_measure_js_timing || Sy.disable() : Sy.g && rb(t, "load", () => {
            t.google_measure_js_timing || Sy.disable()
        })
    })();
    var Ty = (a, b) => Y.tb(a, b),
        Uy = (a, b) => Y.Ca(a, b),
        Vy = (a, b, c) => {
            const d = Hp(Kp).g();
            !b.eid && d.length && (b.eid = d.toString());
            am(Ry, a, b, !0, c)
        },
        Wy = (a, b, c) => {
            Y.la(a, b, c)
        };

    function Xy(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var bz = (a, b) => {
        var c = Wa(b.document.querySelectorAll(".google-auto-placed"));
        const d = Wa(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = Yy(b),
            f = Zy(b),
            g = $y(b),
            h = Wa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Wa(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = Wa(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(Wa(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Wa(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.yd, c],
                [a.Gb, d],
                [a.uj, e],
                [a.mf, f],
                [a.nf, g],
                [a.sj, h],
                [a.tj, k],
                [a.vj, l]
            ]) n === !1 ? b = b.concat(p) : m = m.concat(p);
        a = az(m);
        c = az(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    };
    const cz = a => {
            const b = Xy(a);
            return b ? Oa(Pa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        Yy = a => Wa(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Zy = a => (cz(a) || Wa(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Wa(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        $y = a => Wa(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var az = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var dz = Y.Ca(453, bz),
        ez;
    ez = Y.Ca(454, (a, b) => {
        const c = Wa(b.document.querySelectorAll(".google-auto-placed")),
            d = Wa(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = Yy(b),
            f = Zy(b),
            g = $y(b),
            h = Wa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Wa(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = Wa(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return az([].concat(a.yd === !0 ? c : [], a.Gb === !0 ? d : [], a.uj === !0 ? e : [], a.mf === !0 ? f : [], a.nf === !0 ? g : [], a.sj === !0 ? h : [], a.tj === !0 ? k : [], a.vj ===
            !0 ? b : []))
    });

    function fz(a, b, c) {
        const d = gz(a);
        b = hz(d, b, c);
        return new iz(a, d, b)
    }

    function jz(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function kz(a) {
        return a.g.map(b => b.box)
    }

    function lz(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class iz {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function gz(a) {
        const b = dz({
                Gb: !1
            }, a),
            c = kq(a),
            d = jq(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && e.className.indexOf("google-auto-placed") != -1) || jz(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                vo: e ? 1 : 0
            } : null
        }).filter(jb(e => e === null))
    }

    function hz(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? mz(a, b) : Pa(a, d => new Py(d.box, 1))
    }

    function mz(a, b) {
        a = Pa(a, d => new Py(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Ny(d, a[f], b)) {
                        d = Oy([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function nz(a, b, c) {
        const d = Qr(c, b);
        return !Ra(a, e => Up(e, d))
    }

    function oz(a, b, c, d, e) {
        e = e.ma;
        const f = Qr(e, b),
            g = Qr(e, c),
            h = Qr(e, d);
        return !Ra(a, k => Up(k, g) || Up(k, f) && !Up(k, h))
    }

    function pz(a, b, c, d) {
        const e = kz(a);
        if (nz(e, b, d.ma)) return !0;
        if (!oz(e, b, c.hh, c.ec, d)) return !1;
        const f = new Py(Qr(d.ma, 0), 1);
        a = Oa(a.l, g => Ny(g, f, c.ec));
        b = Qa(a, (g, h) => g + h.i, 1);
        return a.length === 0 || b > c.bh ? !1 : !0
    };
    var qz = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function rz(a, b) {
        const c = new os,
            d = new Uq;
        b.forEach(e => {
            if (li(e, Ss, 1, Vs)) {
                e = li(e, Ss, 1, Vs);
                if (z(e, Rs, 1) && z(e, Rs, 1).ia() && z(e, Rs, 2) && z(e, Rs, 2).ia()) {
                    const g = sz(a, z(e, Rs, 1).ia()),
                        h = sz(a, z(e, Rs, 2).ia());
                    if (g && h)
                        for (var f of qz({
                                anchor: g,
                                position: ci(z(e, Rs, 1), 2)
                            }, {
                                anchor: h,
                                position: ci(z(e, Rs, 2), 2)
                            })) c.set(ya(f.anchor), f.position)
                }
                z(e, Rs, 3) && z(e, Rs, 3).ia() && (f = sz(a, z(e, Rs, 3).ia())) && c.set(ya(f), ci(z(e, Rs, 3), 2))
            } else li(e, Ts, 2, Vs) ? tz(a, li(e, Ts, 2, Vs), c) : li(e, Qs, 3, Vs) && uz(a, li(e, Qs, 3, Vs), d)
        });
        return new vz(c,
            d)
    }
    class vz {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const tz = (a, b, c) => {
            z(b, Rs, 2) ? (b = z(b, Rs, 2), (a = sz(a, b.ia())) && c.set(ya(a), ci(b, 2))) : z(b, ss, 1) && (a = wz(a, z(b, ss, 1))) && a.forEach(d => {
                d = ya(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        uz = (a, b, c) => {
            z(b, ss, 1) && (a = wz(a, z(b, ss, 1))) && a.forEach(d => {
                c.add(ya(d))
            })
        },
        sz = (a, b) => (a = wz(a, b)) && a.length > 0 ? a[0] : null,
        wz = (a, b) => (b = tx(b)) ? b.query(a) : null;
    var xz = class {
        constructor() {
            this.g = ce();
            this.i = 0
        }
    };

    function yz(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (zz(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Az(a) {
        a = Bz(a);
        return a.has("all") || a.has("after")
    }

    function Cz(a) {
        a = Bz(a);
        return a.has("all") || a.has("before")
    }

    function Bz(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function zz(a) {
        const b = Bz(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Dz = class {
        constructor() {
            this.g = new Set;
            this.i = new xz
        }
    };

    function Ez(a) {
        return function(b) {
            return sy(b, a)
        }
    }

    function Fz(a) {
        const b = bq(a);
        return b ? Ea(Gz, b + jq(a)) : gb
    }

    function Hz(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return gb;
        const d = kz(c || fz(b));
        return e => nz(d, a, e.ma)
    }

    function Iz(a, b, c, d) {
        if (a < 0 || b.hh < 0 || b.bh < 0 || b.ec < 0) throw Error("ama::ead:nd");
        return a === Infinity ? gb : e => pz(d || fz(c, b.ec), a, b, e)
    }

    function Jz(a) {
        if (!a.length) return gb;
        const b = new es(a);
        return c => b.contains(c.Ib)
    }

    function Kz(a) {
        return function(b) {
            for (let c of b.Bc)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function Lz(a) {
        return a.length ? function(b) {
            const c = b.Bc;
            return a.some(d => c.indexOf(d) > -1)
        } : hb
    }

    function Mz(a, b) {
        if (a <= 0) return hb;
        const c = fq(b).scrollHeight - a;
        return function(d) {
            return d.ma.g <= c
        }
    }

    function Nz(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[ci(c.ce, 2) || 0]
        }
    }

    function Oz(a) {
        return a.length ? b => a.includes(ci(b.ce, 1) || 0) : hb
    }

    function Pz(a, b) {
        const c = rz(a, b);
        return function(d) {
            var e = d.ia();
            d = zx[d.ea.j()];
            var f = c.i,
                g = ya(e);
            f = f.g.get(g);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(ya(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(ya(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Qz() {
        const a = new Dz;
        return function(b) {
            var c = b.ia(),
                d = zx[b.ea.j()];
            a: switch (d) {
                case 1:
                    b = Az(c.previousElementSibling) || Cz(c);
                    break a;
                case 4:
                    b = Az(c) || Cz(c.nextElementSibling);
                    break a;
                case 2:
                    b = Cz(c.firstElementChild);
                    break a;
                case 3:
                    b = Az(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = yz(a, c, d);
            d = a.i;
            Vy("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: Sd()
            }, .1);
            return !(b || c)
        }
    }
    const Gz = (a, b) => b.ma.g >= a,
        Rz = (a, b, c) => {
            c = c.ma.i;
            return a <= c && c <= b
        };

    function Sz(a, b, c, d, e) {
        var f = Tz(Uz(a, b), a);
        if (f.length === 0) {
            var g = !!b.getMetadata() ? .g() ? .length;
            f = z(b, dt, 28) ? .j() ? .j() && g ? Tz(Vz(a, b), a) : f
        }
        if (f.length === 0) return Mt(d, "pfno"), [];
        b = f;
        a = e.nd ? Wz(a, b, c) : {
            jb: b,
            pd: null
        };
        const {
            jb: h,
            pd: k
        } = a;
        f = h;
        return f.length === 0 && k ? (Mt(d, k), []) : [f[e.wk ? 0 : e.vk ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function Wz(a, b, c) {
        c = c ? Th(c, Us, 5, y()) : [];
        const d = Pz(a.document, c),
            e = Qz();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            jb: [],
            pd: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            jb: [],
            pd: "pfet"
        } : {
            jb: b,
            pd: null
        }
    }

    function Xz(a, b) {
        return a.ma.g - b.ma.g
    }

    function Uz(a, b) {
        const c = b.getMetadata();
        if (!c) return [];
        b = z(b, dt, 28) ? .j();
        return (b ? .g() ? ky(c.g(), a) : jy(c.g(), a, !!b ? .l())).map(d => d.j())
    }

    function Vz(a, b) {
        b = Th(b, mt, 1, y()) || [];
        return Hx(b, a, {}).filter(c => !c.Bc.includes(6))
    }

    function Tz(a, b) {
        a = sy(a, b);
        const c = Fz(b);
        a = a.filter(d => c(d));
        return a.sort(Xz)
    };
    var Yz = {},
        Zz = {},
        $z = {},
        aA = {},
        bA = {};

    function cA() {
        throw Error("Do not instantiate directly");
    }
    cA.prototype.tg = null;
    cA.prototype.getContent = function() {
        return this.content
    };
    cA.prototype.toString = function() {
        return this.content
    };

    function dA(a) {
        if (a.ug !== Yz) throw Error("Sanitized content was not of kind HTML.");
        return ec(a.toString())
    }

    function eA() {
        cA.call(this)
    }
    Ha(eA, cA);
    eA.prototype.ug = Yz;

    function fA(a) {
        if (a != null) switch (a.tg) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function gA(a) {
        return hA(a, Yz) ? a : a instanceof dc ? iA(fc(a).toString()) : iA(String(String(a)).replace(jA, kA), fA(a))
    }
    var iA = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.tg = d);
            return c
        }
    }(eA);

    function lA(a) {
        return mA(String(a), () => "").replace(nA, "&lt;")
    }
    const oA = RegExp.prototype.hasOwnProperty("sticky"),
        pA = new RegExp((oA ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", oA ? "gy" : "g");

    function mA(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            g, h, k = 0;
        for (; k < d;) {
            switch (e) {
                case 0:
                    var l = a.indexOf("<", k);
                    if (l < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(k));
                        k = d
                    } else c.push(a.substring(k, l)), h = l, k = l + 1, oA ? (pA.lastIndex = k, l = pA.exec(a)) : (pA.lastIndex = 0, l = pA.exec(a.substring(k))), l ? (f = ["<", l[0]], g = l[1], e = 1, k += l[0].length) : c.push("<");
                    break;
                case 1:
                    l = a.charAt(k++);
                    switch (l) {
                        case "'":
                        case '"':
                            let m = a.indexOf(l, k);
                            m < 0 ? k = d : (f.push(l, a.substring(k, m + 1)), k = m + 1);
                            break;
                        case ">":
                            f.push(l);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(l)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && k >= d && (k = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function qA(a, b) {
        a = a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
        return b ? a.replace(/{/g, " \\{").replace(/}/g, " \\}").replace(/\/\*/g, "/ *").replace(/\\$/, "\\ ") : a
    }

    function rA(a) {
        return hA(a, Yz) ? String(lA(a.getContent())).replace(sA, kA) : String(a).replace(jA, kA)
    }

    function tA(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && h <= "Z" ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0;
            (c = a.indexOf("<", c)) != -1;) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function uA(a) {
        if (a == null) return " null ";
        if (hA(a, Zz)) return a.getContent();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(vA, wA) + "'"
        }
    }
    const xA = /['()]/g;

    function yA(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function Z(a) {
        return hA(a, bA) ? qA(a.getContent(), !1) : a == null ? "" : a instanceof nc ? qA(oc(a), !1) : qA(String(a), !0)
    }

    function hA(a, b) {
        return a != null && a.ug === b
    }
    const zA = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function kA(a) {
        return zA[a]
    }
    const AA = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function wA(a) {
        return AA[a]
    }
    const BA = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function CA(a) {
        return BA[a]
    }
    const jA = /[\x00\x22\x26\x27\x3c\x3e]/g,
        sA = /[\x00\x22\x27\x3c\x3e]/g,
        vA = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        DA = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        EA = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        nA = /</g;
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const FA = Math.floor;
    var GA = /^xn--/,
        HA = /[\x2E\u3002\uFF0E\uFF61]/g;
    const IA = {
        jn: "Overflow: input needs wider integers to process",
        fn: "Illegal input >= 0x80 (not a basic code point)",
        Qm: "Invalid input"
    };

    function JA(a) {
        throw RangeError(IA[a]);
    }

    function KA(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(HA, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function LA(a) {
        return KA(a, b => {
            if (GA.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && JA("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let n = 1, p = 36;; p += 36) {
                        d >= k && JA("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > FA((2147483647 - l) / n)) && JA("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g) break;
                        f = 36 - g;
                        n > FA(2147483647 / f) && JA("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = e == 0 ? FA(c / 700) : c >> 1;
                    for (c += FA(c / f); c > 455; g += 36) c = FA(c / 35);
                    c = FA(g + 36 * c / (c + 38));
                    FA(l / f) > 2147483647 - m && JA("Overflow: input needs wider integers to process");
                    m += FA(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };

    function MA(a, b, c) {
        var d = a.Na.contentWindow;
        const e = !a.A && typeof a.g === "number";
        a.C ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, e && (b.experimentId = a.g), a.i.length > 0 && (b.adfiliateWp = a.i), d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.B), c = {
            rsToken: c,
            hostName: a.host
        }, e && (c.afsExperimentId = a.g), a.i.length > 0 && (c.adfiliateWp = a.i), d.execute(b, void 0, c))
    }
    var NA = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n = !1, p = !1, r = !1, w = "") {
            this.Na = a;
            this.l = b;
            this.B = c;
            this.j = d;
            this.R = e;
            this.host = f.host;
            this.origin = f.origin;
            this.language = g;
            this.I = h;
            this.g = k;
            this.H = n;
            this.C = l;
            this.F = m;
            this.L = p;
            this.A = r;
            this.i = w
        }
        M() {
            this.Na.setAttribute("id", "prose-iframe");
            this.Na.setAttribute("width", "100%");
            this.Na.setAttribute("height", "100%");
            var a = bd `box-sizing:border-box;border:unset;`;
            this.Na.style.cssText = a;
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var b = Yb(a, Xb) || Tb;
            var c = LA(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.B;
            var d = this.j,
                e = this.R;
            const f = this.host;
            c = this.I.replace("${website}", c);
            const g = this.L;
            var h = iA,
                k = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.H ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(vA, wA) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            hA(b, $z) || hA(b, aA) ? b = String(b).replace(DA, CA) : b instanceof Sb ? b = String(Ub(b)).replace(DA, CA) : b instanceof Ob ? b = String(Rb(b).toString()).replace(DA, CA) : (b = String(b), b = EA.test(b) ? b.replace(DA, CA) : "about:invalid#zSoyz");
            a = h(k + rA(b) + '" alt="' + rA(f) + ' icon"><p class="cse-header"><strong>' +
                gA(c) + '</strong></p><div class="gcse-search" data-gname="' + rA(a) + '" data-adclient="' + rA(d) + '" data-adchannel="' + rA(e) + '" data-as_sitesearch="' + rA(f) + '" data-personalizedAds="false"></div></div>' + (g ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = dA(a);
            this.C ? (a = this.Na, d = Zc `https://www.gstatic.com/prose/protected/${this.F||"558153351"}/iframe.html?cx=${this.l}&host=${this.host}&hl=${this.language}&lrh=${this.I}&client=${this.j}&origin=${this.origin}`, a.src = Rb(d).toString()) : (d = new Map([
                ["cx", this.l],
                ["language", this.language]
            ]), this.A && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), d = $c(Zc `https://cse.google.com/cse.js`, d), d = Rb(d).toString(), d = ec(`<script src="${Qc(d)}"` + ">\x3c/script>"), a = Xc("body", {
                style: bd `margin:${0};`
            }, [a, d]), this.Na.srcdoc = fc(a))
        }
    };

    function OA(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new PA;
        return a.google_reactive_ads_global_state
    }
    class PA {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new QA;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.g =
                null;
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var QA = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function RA(a, b) {
        return new SA(a, b)
    }

    function TA(a) {
        const b = UA(a);
        Ma(a.g.maxZIndexListeners, c => c(b))
    }

    function UA(a) {
        a = Dd(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class VA {
        constructor(a) {
            this.g = OA(a).floatingAdsStacking
        }
        addListener(a) {
            this.g.maxZIndexListeners.push(a);
            a(UA(this))
        }
        removeListener(a) {
            Ua(this.g.maxZIndexListeners, b => b === a)
        }
    }

    function WA(a) {
        if (a.g == null) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            TA(b);
            a.g = d
        }
    }

    function XA(a) {
        if (a.g != null) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            TA(b);
            a.g = null
        }
    }
    class SA {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function YA(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? YA(b) || a : a
    }

    function ZA(a, b) {
        return $A(b, a.document.body).flatMap(c => aB(c))
    }

    function $A(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function aB(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function bB(a) {
        a.state !== null && (a.state.bj.forEach(b => {
            b.inert = !1
        }), a.state.ck ? .focus(), a.state = null)
    }

    function cB(a, b) {
        bB(a);
        const c = YA(a.win.document);
        b = ZA(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.state = {
            ck: c,
            bj: b
        }
    }
    var dB = class {
        constructor(a) {
            this.win = a;
            this.state = null
        }
        he() {
            bB(this)
        }
    };

    function eB(a) {
        return new fB(a, new cr(a, a.document.body), new cr(a, a.document.documentElement), new cr(a, a.document.documentElement))
    }

    function gB(a) {
        br(a.j, "scroll-behavior", "auto");
        const b = hB(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        br(a.g, "position", "fixed");
        br(a.g, "top", `${-b.previousWindowScroll}px`);
        br(a.g, "width", "100%");
        hB(a.win).overrideBodyHeightOnPreventScrolling && (br(a.g, "height", "auto"), br(a.g, "max-height", "none"));
        br(a.g, "overflow-x", "hidden");
        br(a.g, "overflow-y", "hidden");
        br(a.i, "overflow-x", "hidden");
        br(a.i, "overflow-y", "hidden")
    }

    function iB(a) {
        ar(a.g);
        ar(a.i);
        const b = hB(a.win);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        ar(a.j)
    }
    var fB = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function hB(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set,
            overrideBodyHeightOnPreventScrolling: !1
        }
    }

    function jB(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function kB(a, b) {
        return lB(`#${a}`, b)
    }

    function mB(a, b) {
        return lB(`.${a}`, b)
    }

    function lB(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function nB(a, b) {
        const c = a.document.createElement("div");
        v(c, Pt(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            bb: c,
            shadowRoot: a
        }
    };

    function oB(a, b) {
        b = nB(a, b);
        a.document.body.appendChild(b.bb);
        return b
    }

    function pB(a, b) {
        const c = new T(b.O);
        lr(b, !0, () => void c.g(!0));
        lr(b, !1, () => {
            a.setTimeout(() => {
                b.O || c.g(!1)
            }, 700)
        });
        return gr(c)
    };

    function qB(a) {
        const b = a.ud;
        var c = a.Of,
            d = a.od;
        const e = a.gd,
            f = a.pg,
            g = a.ze,
            h = a.Ma;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Z(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            Z(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? h ? 20 : 16 : 0;
        a += Z(c) + "px; transition: transform " + Z(g) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + Z(c) + "px; border-bottom-right-radius: " + Z(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + Z(c) + "px; border-bottom-left-radius: " + Z(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (h ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            rA(f) + '">';
        d = h ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + rA(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + rA(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + rA(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return iA(a)
    };

    function rB(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && typeof b.pushState === "function" ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new sB(a, b);
        b.M();
        return b ? a.googNavStack = b : null
    }

    function tB(a, b) {
        return b ? b.googNavStackId === a.i ? b : null : null
    }

    function uB(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].mk({
                isFinal: d
            }))
        }
    }

    function vB(a, b) {
        b = Za(a.stack, b, (c, d) => c - d.Og.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class sB extends S {
        constructor(a, b) {
            super();
            this.K = a;
            this.history = b;
            this.stack = [];
            this.i = Math.random() * 1E9 >>> 0;
            this.l = 0;
            this.j = c => {
                (c = tB(this, c.state)) ? uB(this, vB(this, c.googNavStackStateId + .5)): uB(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.i,
                    googNavStackStateId: this.l++
                },
                b = new Promise(c => {
                    this.stack.push({
                        mk: c,
                        Og: a
                    })
                });
            this.history.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = vB(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length >
                        0) {
                        d = c[0].Og;
                        const e = tB(this, this.history.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.history.go(-c.length);
                    uB(this, c)
                }
            }
        }
        M() {
            this.K.addEventListener("popstate", this.j)
        }
        g() {
            this.K.removeEventListener("popstate", this.j);
            super.g()
        }
    };

    function wB(a) {
        return (a = rB(a)) ? new xB(a) : null
    }

    function yB(a) {
        if (!a.i) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.i = c;
            b.then(() => {
                a.i && !a.C && (a.i = null, rr(a.j))
            })
        }
    }
    var xB = class extends S {
        constructor(a) {
            super();
            this.l = a;
            this.j = new sr;
            this.i = null
        }
    };

    function zB(a, b, c) {
        var d = c.Se ? null : new dB(a);
        const e = RA(new VA(a), c.zIndex - 1);
        b = AB(a, b, c);
        d = new BB(a, b, d, c.uc, eB(a), e);
        d.M();
        (c.Bg || c.Bg === void 0) && CB(d);
        c.qc && ((a = wB(a)) ? DB(d, a, c.Bf) : c.Bf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function CB(a) {
        a.A = b => {
            b.key === "Escape" && a.i.O && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function DB(a, b, c) {
        lr(a.i, !0, () => {
            try {
                yB(b)
            } catch (d) {
                c ? .(d)
            }
        });
        lr(a.i, !1, () => {
            try {
                b.i && (b.i(), b.i = null)
            } catch (d) {
                c ? .(d)
            }
        });
        pr(b.j).listen(() => void a.collapse());
        Dq(a, b)
    }

    function EB(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function FB(a) {
        a.win.setTimeout(() => {
            a.i.O && EB(a).Ga.focus()
        }, 500)
    }

    function GB(a) {
        const {
            Af: b,
            Ii: c
        } = EB(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function HB(a) {
        lr(a.j, !1, () => {
            EB(a).Ga.classList.add("hd-hidden")
        })
    }
    var BB = class extends S {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.B = b;
            this.l = c;
            this.uc = d;
            this.i = new T(!1);
            this.j = pB(a, this.i);
            lr(this.j, !0, () => {
                gB(e);
                WA(f)
            });
            lr(this.j, !1, () => {
                iB(e);
                XA(f)
            })
        }
        show({
            yg: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            EB(this).Ga.classList.remove("hd-hidden");
            $q(this.win);
            EB(this).Ga.classList.add("hd-revealed");
            this.i.g(!0);
            this.l && (cB(this.l, EB(this).eb.bb), this.uc && FB(this));
            a && lr(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            EB(this).Ga.classList.remove("hd-revealed");
            this.i.g(!1);
            this.l ? .he()
        }
        isVisible() {
            return this.j
        }
        M() {
            GB(this);
            HB(this)
        }
        g() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.B.eb.bb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .he();
            super.g()
        }
    };

    function AB(a, b, c) {
        const d = oB(a, c.Te),
            e = d.shadowRoot;
        e.appendChild(qd(new dd(a.document), dA(qB({
            ud: c.ud,
            Of: c.Of ? ? !0,
            od: c.od || !1,
            gd: c.gd,
            pg: c.pg || "",
            zIndex: c.zIndex,
            ze: .5,
            Ma: c.Ma || !1
        }))));
        const f = kB("hd-drawer-container", e);
        c.af ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = kB("hd-content-container", e);
        c.appendChild(b);
        $q(a);
        return {
            Ga: f,
            Af: kB("hd-modal-background", e),
            Ne: c,
            Ii: kB("hd-close-button", e),
            yo: kB("hd-back-arrow-button", e),
            eb: d
        }
    };

    function IB(a) {
        const b = a.Yj,
            c = a.lj;
        var d = a.ze;
        const e = a.Ma;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Z(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            Z(c) + "%; transition: transform " + Z(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += Z(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            Z(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + Z((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            Z(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + Z(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + Z(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            Z(d) + "px " + Z(d) + "px 0 0; background: white; display: flex; height: " + Z(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            JB("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + JB("ved-fixed-handle") + "</div></div></div>";
        return iA(a)
    }

    function JB(a) {
        return iA('<div class="ved-handle" id="' + rA(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function KB(a) {
        return Gr(a.g).map(b => b ? LB(a, b) : 0)
    }

    function LB(a, b) {
        switch (a.direction) {
            case 0:
                return MB(-b.Vh);
            case 1:
                return MB(-b.Uh);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function NB(a) {
        return Ir(a.g).map(b => LB(a, b))
    }
    var OB = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function MB(a) {
        return a === 0 ? 0 : a
    };

    function PB(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function QB(a) {
        a.win.setTimeout(() => {
            a.i.O && PB(a).Ga.focus()
        }, 500)
    }

    function RB(a) {
        PB(a).Ga.classList.remove("ved-hidden");
        $q(a.win);
        const {
            qa: b,
            Wa: c
        } = PB(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || SB(a);
        PB(a).Ga.classList.add("ved-revealed");
        a.i.g(!0);
        a.j && (cB(a.j, PB(a).eb.bb), a.uc && QB(a))
    }

    function TB(a) {
        return pB(a.win, a.i)
    }

    function UB(a, b) {
        const c = new T(b());
        pr(a.H).listen(() => void c.g(b()));
        return gr(c)
    }

    function VB(a) {
        const {
            qa: b,
            Td: c
        } = PB(a);
        return UB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function WB(a) {
        const {
            qa: b,
            Td: c
        } = PB(a);
        return UB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function XB(a) {
        const {
            qa: b
        } = PB(a);
        return UB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function YB(a) {
        return hr(VB(a), XB(a))
    }

    function ZB(a) {
        const {
            qa: b,
            Wa: c
        } = PB(a);
        return UB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function SB(a) {
        PB(a).Wa.classList.add("ved-snap-point-top");
        var b = $B(a, PB(a).Wa);
        PB(a).qa.scrollTop = b;
        aC(a)
    }

    function bC(a) {
        jr(VB(a), !0, () => {
            const {
                Ig: b,
                Nc: c
            } = PB(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        jr(VB(a), !1, () => {
            const {
                Ig: b,
                Nc: c
            } = PB(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function cC(a) {
        const b = Nr(a.win, PB(a).Ne);
        Pr(b).i(() => void dC(a));
        Dq(a, b)
    }

    function eC(a) {
        jr(fC(a), !0, () => {
            PB(a).mh.classList.remove("ved-hidden")
        });
        jr(fC(a), !1, () => {
            PB(a).mh.classList.add("ved-hidden")
        })
    }

    function gC(a) {
        const b = () => void rr(a.F),
            {
                Af: c,
                Wa: d,
                kj: e
            } = PB(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        lr(hC(a), !0, b)
    }

    function iC(a) {
        lr(TB(a), !1, () => {
            SB(a);
            PB(a).Ga.classList.add("ved-hidden")
        })
    }

    function aC(a) {
        kr(a.l, !1, () => void rr(a.H))
    }

    function dC(a) {
        if (!a.l.O) {
            var {
                vg: b,
                Ne: c
            } = PB(a), d = c.getBoundingClientRect().height;
            d = Math.max(jC(a), d);
            a.l.g(!0);
            var e = kC(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function fC(a) {
        const {
            qa: b,
            Wa: c
        } = PB(a);
        return UB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function hC(a) {
        return fr(a.A.map(ps), lC(a))
    }

    function lC(a) {
        return UB(a, () => PB(a).qa.scrollTop === 0)
    }

    function $B(a, b) {
        ({
            Nc: a
        } = PB(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function mC(a, b) {
        a.A.g(!0);
        const {
            Nc: c,
            qa: d
        } = PB(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void nC(a, b)
    }

    function nC(a, b) {
        const {
            Nc: c,
            qa: d
        } = PB(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        PB(a).qa.scrollTop = b;
        aC(a);
        a.A.g(!1)
    }

    function kC(a) {
        const b = PB(a).qa.scrollTop;
        mC(a, b);
        return () => void nC(a, b)
    }

    function jC(a) {
        const {
            qa: b,
            Td: c,
            vg: d,
            Wa: e
        } = PB(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var oC = class extends S {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.B = b;
            this.L = c;
            this.j = d;
            this.uc = e;
            this.F = new sr;
            this.H = new sr;
            this.i = new T(!1);
            this.A = new T(!1);
            this.l = new T(!1)
        }
        M() {
            SB(this);
            bC(this);
            cC(this);
            eC(this);
            gC(this);
            iC(this);
            PB(this).qa.addEventListener("scroll", () => void aC(this))
        }
        g() {
            const a = this.B.eb.bb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .he();
            super.g()
        }
    };

    function pC(a, b, c) {
        const d = oB(a, c.Te),
            e = d.shadowRoot;
        e.appendChild(qd(new dd(a.document), dA(IB({
            Yj: c.rh * 100,
            lj: c.Jg * 100,
            zIndex: c.zIndex,
            ze: .5,
            Ma: c.Ma || !1
        }))));
        const f = kB("ved-drawer-container", e);
        c.af ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = kB("ved-content-container", e);
        c.appendChild(b);
        $q(a);
        return {
            Ga: f,
            Af: kB("ved-modal-background", e),
            Qh: kB("ved-ui-revealer", e),
            qa: kB("ved-scroller", e),
            Nc: kB("ved-scrolled-stack", e),
            kj: kB("ved-fully-closed-anchor", e),
            Wa: kB("ved-partially-extended-anchor", e),
            vg: kB("ved-content-sizer",
                e),
            Ne: c,
            Go: kB("ved-moving-handle", e),
            Td: kB("ved-moving-handle-holder", e),
            ij: kB("ved-fixed-handle", e),
            Ig: kB("ved-fixed-handle-holder", e),
            mh: kB("ved-over-scroll-block", e),
            eb: d
        }
    };

    function qC(a, b, c) {
        var d = RA(new VA(a), c.zIndex - 1);
        b = pC(a, b, c);
        const e = c.Se ? null : new dB(a);
        var f = b.ij;
        f = new Jr(new Ar(a, f), new xr(f));
        var g = f.g;
        g.A.addEventListener("mousedown", g.I);
        g.l.addEventListener("mouseup", g.C);
        g.l.addEventListener("mousemove", g.B, {
            passive: !1
        });
        g = f.i;
        g.i.addEventListener("touchstart", g.B);
        g.i.addEventListener("touchend", g.A);
        g.i.addEventListener("touchmove", g.C, {
            passive: !1
        });
        b = new oC(a, b, new OB(f), e, c.uc);
        b.M();
        d = new rC(a, b, eB(a), d);
        Dq(d, b);
        d.M();
        c.qc && ((a = wB(a)) ? sC(d, a, c.Bf) :
            c.Bf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function sC(a, b, c) {
        lr(a.i.i, !0, () => {
            try {
                yB(b)
            } catch (d) {
                c ? .(d)
            }
        });
        lr(a.i.i, !1, () => {
            try {
                b.i && (b.i(), b.i = null)
            } catch (d) {
                c ? .(d)
            }
        });
        pr(b.j).listen(() => void a.collapse());
        Dq(a, b)
    }

    function tC(a) {
        lr(fr(YB(a.i), ZB(a.i)), !0, () => {
            PB(a.i).Wa.classList.remove("ved-snap-point-top")
        });
        jr(WB(a.i), !0, () => {
            PB(a.i).qa.classList.add("ved-no-snap")
        });
        jr(WB(a.i), !1, () => {
            PB(a.i).qa.classList.remove("ved-no-snap")
        });
        lr(WB(a.i), !1, () => {
            var b = a.i;
            var c = PB(b).Td;
            c = mC(b, $B(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function uC(a) {
        const b = a.i.L;
        KB(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    Qh: d
                } = PB(a.i);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Qh: c
            } = PB(a.i)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        NB(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var rC = class extends S {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.i = b;
            lr(TB(b), !0, () => {
                gB(c);
                WA(d)
            });
            lr(TB(b), !1, () => {
                iB(c);
                XA(d)
            })
        }
        show({
            yg: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            RB(this.i);
            a && lr(TB(this.i), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.i;
            PB(a).Ga.classList.remove("ved-revealed");
            a.i.g(!1);
            a.j ? .he()
        }
        isVisible() {
            return TB(this.i)
        }
        M() {
            pr(this.i.F).listen(() => {
                this.collapse()
            });
            tC(this);
            uC(this);
            $q(this.win)
        }
    };

    function vC(a, b) {
        return Sd() === 2 ? qC(a.win, b, {
            rh: .95,
            Jg: .95,
            zIndex: 2147483645,
            qc: !0,
            Ma: !0
        }) : zB(a.win, b, {
            ud: "min(65vw, 768px)",
            gd: "",
            od: !1,
            zIndex: 2147483645,
            qc: !0,
            Of: !1,
            Ma: !0
        })
    }

    function wC(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.R.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.F,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.l,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.Tc.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.H
            };
        a.sa && (c.adLoadedCallback = a.yb.bind(a));
        a.i && a.j instanceof
        Array && (c.fexp = a.j.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }

    function xC(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.A.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var yC = class extends S {
        constructor(a, b, c, d, e, f, g, h, k = () => {}) {
            super();
            this.win = a;
            this.R = b;
            this.L = e;
            this.l = f;
            this.Ra = h;
            this.Sc = k;
            this.language = d ? .g() || "en";
            this.Rc = d ? .j() || "Search results from ${website}";
            this.sa = W(Iu);
            this.F = c.replace("ca", "partner");
            this.W = new dd(a.document);
            this.A = pd(this.W, "IFRAME");
            this.H = g.i ? g.g : "9d449ff4a772956c6";
            this.j = (this.i = W(Nu)) ? Hp(Kp).g().concat(this.l) : this.l;
            this.B = new NA(this.A, this.H, "auto-rs-prose", this.F, "AutoRsVariant", a.location, this.language, this.Rc, this.j, !0,
                this.Ra, this.i);
            this.na = vC(this, this.A);
            Dq(this, this.na)
        }
        M() {
            this.R.length !== 0 && (this.sa || rx(1075, () => {
                this.B.M()
            }, this.win), rx(1076, () => {
                const a = pd(this.W, "SCRIPT");
                mc(a, Zc `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), wC(this), Kt(this.L, {
                sts: "ok"
            }), xC(this))
        }
        yb(a, b) {
            b ? rx(1075, () => {
                this.B.M()
            }, this.win) : (this.Sc(), Mt(this.L, "pfns"))
        }
        Tc(a, b) {
            MA(this.B, a, b);
            (() => {
                this.na.show()
            })()
        }
    };
    var zC = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function AC(a) {
        const b = Qx(a.i.ea),
            c = a.C.getContent(a.A, () => a.remove());
        b.appendChild(c);
        a.l && (b.className = a.l);
        return {
            Yi: b,
            Mi: c
        }
    }
    class BC {
        constructor(a, b, c) {
            this.A = a;
            this.i = b;
            this.C = c;
            this.l = "autors-widget";
            this.g = null;
            this.j = new T(null)
        }
        M() {
            const a = AC(this);
            this.g = a.Yi;
            qy(this.i, this.g);
            this.j.g(a.Mi)
        }
        remove() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
    };
    async function CC(a) {
        await new Promise(b => {
            setTimeout(() => {
                a.run();
                b()
            })
        })
    }

    function DC(a) {
        if ((!a.nd || !EC(a.config, a.ca, a.i)) && FC(z(a.g, at, 5), a.i)) {
            var b = a.g.j();
            b = Sz(a.win, a.config, a.ca, a.i, {
                wk: !!b ? .A(),
                nd: a.nd,
                Ho: !!b ? .g(),
                vk: !!b ? .C()
            });
            b = GC(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g.g() ? .g() || 0,
                f = HC(a.g),
                g = String(L(a.g, 13));
            if (!z(a.config, Xs, 25) ? .g()) {
                var h = () => {
                    d.forEach(k => {
                        k.remove()
                    })
                };
                rx(1074, () => {
                    (new yC(a.win, c, a.webPropertyCode, z(a.g, at, 5), a.i, e, f, g, h)).M()
                }, a.win)
            }
        }
    }
    var IC = class {
        constructor(a, b, c, d, e) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.ca = e;
            this.nd = !0;
            this.g = z(this.config, dt, 28);
            this.i = new Nt(a, b, this.g)
        }
        run() {
            try {
                DC(this)
            } catch (a) {
                Mt(this.i, "pfere", a)
            }
        }
    };

    function EC(a, b, c) {
        a = z(a, dt, 28) ? .g() ? .g() || 0;
        const d = Hp(Iw).g(Mu.g, Mu.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? ki(b, 2, y()) : []).length === 0 ? (Mt(c, "pfeu"), !0) : !1
    }

    function FC(a, b) {
        const c = Hp(Iw).g(Lu.g, Lu.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (Mt(b, "pflna"), !1) : !0
    }

    function GC(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            d = new BC(b, d, new St(g));
            d.M();
            c[f] = d
        }
        return c
    }

    function HC(a) {
        const b = K(a, 11) || !1;
        a = L(a, 8) || "";
        return new zC(b, a)
    };
    var JC = (a, b) => {
        const c = [];
        z(a, nt, 18) && c.push(2);
        b.ca && c.push(0);
        z(a, dt, 28) && hi(z(a, dt, 28), 1) == 1 && c.push(1);
        z(a, bt, 31) && hi(z(a, bt, 31), 1) == 1 && c.push(5);
        z(a, Zs, 32) && c.push(6);
        z(a, qt, 34) && K(z(a, qt, 34), 3) && c.push(7);
        return c
    };
    var KC = a => a.googlefc = a.googlefc || {},
        LC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        MC = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new et;
                b = wi(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = wi(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = wi(b, 3, a.defaultFloatingToolbarDismissPrivacySettings).i()
            } else a = null;
            return a
        };

    function NC(a, b) {
        b = b.filter(c => z(c, Bs, 4) ? .g() === 5 && qi(c, 8) === 1);
        b = Hx(b, a);
        a = sy(b, a);
        a.sort((c, d) => d.ma.g - c.ma.g);
        return a[0] || null
    };

    function OC({
        Uf: a,
        cf: b,
        Cf: c,
        Vf: d,
        df: e,
        Df: f
    }) {
        const g = [];
        for (let n = 0; n < f; n++)
            for (let p = 0; p < c; p++) {
                var h = p,
                    k = c - 1,
                    l = n,
                    m = f - 1;
                g.push({
                    x: a + (k === 0 ? 0 : h / k) * (b - a),
                    y: d + (m === 0 ? 0 : l / m) * (e - d)
                })
            }
        return g
    }

    function PC(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function QC(a, b) {
        var c = OC({
            Uf: b.left,
            cf: b.right,
            Cf: 10,
            Vf: b.top,
            df: b.bottom,
            Df: 10
        });
        b = new Set;
        for (const d of c)(c = RC(a, d)) && b.add(c);
        return b
    }

    function SC(a, b) {
        for (const c of b)
            if (b = RC(a, c)) return b;
        return null
    }

    function TC(a, b, c) {
        if (pl(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || sl(b).width <= 1 && sl(b).height <= 1 || a.settings.Zi && !a.settings.Zi(b) ? !0 : !1;
        a.settings.Hg && a.settings.Hg(b, c, d);
        return d ? null : b
    }

    function RC(a, b) {
        var c = PC(a.K.document, b);
        if (c) {
            var d;
            if (!(d = TC(a, c, b))) a: {
                d = a.K.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = TC(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var UC = class {
        constructor(a, b = {}) {
            this.K = a;
            this.settings = b
        }
    };
    var VC = class {
        constructor(a, b, c) {
            this.position = a;
            this.xb = b;
            this.jf = c
        }
    };

    function WC(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function XC(a, b, c) {
        var d = bq(a);
        d = new VC(b.Qb.ih(b.lb), b.xb + 2 * b.lb, Math.min(d, b.Id) - b.Qb.wd() + 2 * b.lb);
        d = d.position.wg(a, d.xb, d.jf);
        var e = aq(a),
            f = bq(a);
        c = YC(a, new Xk(tb(d.top, 0, f - 1), tb(d.right, 0, e - 1), tb(d.bottom, 0, f - 1), tb(d.left, 0, e - 1)), c);
        f = ZC(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && e.push(new WC(g, f[h].start)), g = f[h].end;
        g < d.bottom && e.push(new WC(g, d.bottom));
        a = bq(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new WC(a - e[f].end, a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.lb, a >
                    b.Qb.wd() + b.vf ? a = null : (d = Math.min(h.end - b.lb, b.Id) - a, a = d < b.zf ? null : {
                        position: b.Qb.Th(a),
                        Fc: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            Ee: b,
            xo: c
        }
    }

    function YC(a, b, c) {
        const d = QC(new UC(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function ZC(a) {
        return Array.from(a).map($C).sort((b, c) => b.start - c.start)
    }

    function $C(a) {
        a = a.getBoundingClientRect();
        return new WC(a.top, a.bottom)
    };

    function aD({
        ga: a,
        Ba: b
    }) {
        return new bD(a, b)
    }
    var bD = class {
        constructor(a, b) {
            this.ga = a;
            this.Ba = b
        }
        ih(a) {
            return new bD(this.ga - a, this.Ba - a)
        }
        wg(a, b, c) {
            a = bq(a) - this.ga - c;
            return new Xk(a, this.Ba + b, a + c, this.Ba)
        }
        og(a) {
            a.bottom = `${this.ga}px`;
            a.left = `${this.Ba}px`;
            a.right = ""
        }
        Kg() {
            return 0
        }
        wd() {
            return this.ga
        }
        Th(a) {
            return new bD(a, this.Ba)
        }
    };

    function cD({
        ga: a,
        Ja: b
    }) {
        return new dD(a, b)
    }
    var dD = class {
        constructor(a, b) {
            this.ga = a;
            this.Ja = b
        }
        ih(a) {
            return new dD(this.ga - a, this.Ja - a)
        }
        wg(a, b, c) {
            var d = aq(a);
            a = bq(a) - this.ga - c;
            d = d - this.Ja - b;
            return new Xk(a, d + b, a + c, d)
        }
        og(a) {
            a.bottom = `${this.ga}px`;
            a.right = `${this.Ja}px`;
            a.left = ""
        }
        Kg() {
            return 1
        }
        wd() {
            return this.ga
        }
        Th(a) {
            return new dD(a, this.Ja)
        }
    };

    function eD(a) {
        const b = a.dj,
            c = a.Ki,
            d = a.Ci,
            e = a.rk,
            f = a.Di;
        a = a.Bi;
        return iA('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text_old:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + Z(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            Z(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + Z(a) + "px; border-radius: " + Z(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + Z(a) + "px; margin: 0; border-radius: " + Z(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            Z(d) + "px; height: " + Z(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + Z(d) + "px; margin-bottom: " + Z(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + Z(d) + "px; width: " + Z(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            Z(d - 6) + "px; width: " + Z(d - 6) + "px; border-radius: " + Z(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            Z(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + Z(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            Z(16) + "px; max-width: calc(90vw - " + Z(d * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + Z(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + Z(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            Z(d * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            rA(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + rA(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function fD(a) {
        const b = a.googleIconName,
            c = a.backgroundColorCss,
            d = a.iconColorCss;
        return iA('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' + rA(a.ariaLabel) + '" style="background-color: ' + rA(Z(c)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + rA(Z(d)) + '" aria-hidden="true">' + gA(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const gD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function hD(a, b) {
        a = new iD(a, b, jD(a, b));
        a.M();
        return a
    }

    function kD() {
        ({
            hc: a
        } = {
            hc: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function lD(a, b, c) {
        mD(a) === 0 && b.classList.remove("ft-collapsed");
        nD(b, c);
        $q(a.win);
        b.classList.remove("ft-collapsed");
        oD(a);
        return () => void pD(a, b, c)
    }

    function qD(a) {
        rD(a.i.ja.Hc).length === 0 ? (a.j.O ? .gk(), a.j.g(null), a.i.ja.hf.g(!1), a.i.ja.Vg.g(!1), a.i.ja.rf.g(!1)) : (a.i.ja.hf.g(!0), sD(a))
    }

    function tD(a, {
        fi: b = 0,
        wo: c = 0
    }) {
        b = Math.max(rD(a.i.Bb).length + b, 0);
        c = Math.max(rD(a.i.kb).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.settings.hc && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function mD(a) {
        const b = a.i.kb;
        return rD(a.i.Bb).length + rD(b).length
    }

    function oD(a) {
        const b = a.i.kb,
            c = a.i.separator;
        rD(a.i.Bb).length > 0 && rD(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        mD(a) >= a.settings.hc ? a.i.Ug.g(!0) : a.i.Ug.g(!1);
        mD(a) > 1 ? a.i.Ng.g(!0) : a.i.Ng.g(!1);
        mD(a) > 0 ? a.i.isVisible.g(!0) : a.i.isVisible.g(!1);
        uD(a);
        vD(a)
    }

    function pD(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), oD(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function uD(a) {
        const b = rD(a.i.Bb).concat(rD(a.i.kb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        mD(a) >= a.settings.hc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function vD(a) {
        const b = rD(a.i.Bb).concat(rD(a.i.kb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.B.g(b.length > 0)
    }

    function wD(a) {
        Nq(a.i.ja.Hc.children, b => {
            const c = a.i.ja.Kc;
            pD(a, b, a.i.ja.Hc);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        qD(a)
    }

    function sD(a) {
        if (!a.j.O) {
            var b = xD(a.win, {
                googleIconName: "verified_user",
                ariaLabel: L(a.settings.Oa, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.i.ja.Vg.g(!a.i.ja.isVisible.O);
                    for (const [, c] of a.i.ja.Kc) c.Yg = !0;
                    a.i.ja.rf.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Zc.classList.add("ft-reg-button");
            lD(a, b.Zc, a.i.kb);
            mr(b.Cj, a.i.ja.isVisible);
            a.j.g({
                Ao: b,
                gk: () => void pD(a, b.Zc, a.i.kb)
            })
        }
    }

    function yD(a) {
        var b = a.i.ja.rf,
            c = b.g;
        a: {
            for ([, d] of a.i.ja.Kc)
                if (a = d, a.showUnlessUserInControl && !a.Yg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function zD(a) {
        a.i.ja.Ji.listen(() => {
            wD(a)
        })
    }
    var iD = class extends S {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.settings = b;
            this.i = c;
            this.j = new T(null);
            this.B = new T(!1)
        }
        addButton(a) {
            a = xD(this.win, a);
            return lD(this, a.Zc, this.i.Bb)
        }
        addRegulatoryMessage(a) {
            const b = this.i.ja.Hc,
                c = AD(this.win, a);
            nD(c.yf, b);
            this.i.ja.Kc.set(c.yf, c);
            qD(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    yD(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    yD(this)
                },
                isDismissed: or(c.isDismissed),
                removeCallback: () => {
                    var d = c.yf;
                    const e =
                        this.i.ja.Hc;
                    d.parentNode === e && e.removeChild(d);
                    this.i.ja.Kc.delete(d);
                    qD(this)
                }
            }
        }
        F() {
            return gr(this.j.map(a => a != null))
        }
        A() {
            return gr(this.B)
        }
        l() {
            return [this.i.container]
        }
        g() {
            const a = this.i.eb.bb;
            a.parentNode ? .removeChild(a);
            super.g()
        }
        M() {
            Wr(this.win, gD);
            mr(this.i.zk, this.settings.Gc);
            this.win.document.body.appendChild(this.i.eb.bb);
            zD(this)
        }
    };

    function jD(a, b) {
        const c = nB(a),
            d = c.shadowRoot;
        d.appendChild(qd(new dd(a.document), dA(eD({
            dj: L(b.Oa, 1),
            Ki: L(b.Oa, 3),
            Ci: 50,
            rk: 11,
            Di: 10,
            Bi: 5
        }))));
        const e = mB("ft-container", d),
            f = mB("ft-expand-toggle", d),
            g = mB("ft-expand-toggle-container", d),
            h = new T(null);
        h.i(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        const k = new T(!0);
        jr(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        jr(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.g(!k.O)
            });
        const l = new T(!1);
        jr(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        jr(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.g(!0)
        });
        const m = new T(!1);
        jr(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        jr(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(p => {
            if (p) {
                p.og(e.style);
                p = p.Kg();
                switch (p) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                $q(a)
            }
        });
        const n = new T(!1);
        b = fr(BD(a, d), n, b.position.map(p => p !== null));
        jr(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        jr(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = CD(a, mB("ft-reg-bubble", d));
        return {
            container: e,
            Bb: mB("ft-button-holder", d),
            kb: mB("ft-bottom-button-holder", d),
            separator: mB("ft-separator", d),
            eb: c,
            zk: h,
            Eo: k,
            Ug: l,
            Ng: m,
            isVisible: n,
            ja: b
        }
    }

    function CD(a, b) {
        const c = new T(!1),
            d = new T(!1),
            e = hr(c, d);
        jr(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        jr(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new T(!1);
        jr(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        jr(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const g = mB("ft-reg-bubble-close", b),
            h = new sr;
        g.addEventListener("click", () => {
            rr(h)
        });
        const k = mB("ft-reg-message-holder", b);
        Pr(Nr(a, k)).i(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            Hc: k,
            Vg: c,
            rf: d,
            isVisible: e,
            hf: f,
            Kc: new Map,
            Ji: pr(h)
        }
    }

    function xD(a, b) {
        const c = qd(new dd(a.document), dA(fD({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043"
        })));
        b.buttonExtension ? .styleSheet && c.appendChild(b.buttonExtension.styleSheet);
        if (b.cornerNumber !== void 0) {
            const d = tb(Math.round(b.cornerNumber), 0, 99);
            mB("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick &&
            lB("BUTTON", c).addEventListener("click", b.onClick);
        a = new T(!1);
        jr(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        jr(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Zc: c,
            Cj: a
        }
    }

    function AD(a, b) {
        a = new dd(a.document);
        var c = iA('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = qd(a, dA(c));
        c = mB("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = mB("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            yf: a,
            showUnlessUserInControl: !1,
            Yg: !1,
            isDismissed: new T(!1)
        }
    }

    function nD(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function rD(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function BD(a, b) {
        const c = new T(!1),
            d = mB("ft-symbol-font-load-test", b);
        b = mB("ft-symbol-reference", d);
        const e = mB("ft-text-reference", d),
            f = Nr(a, b);
        kr(Pr(f).map(g => g.width > 0 && g.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function DD(a) {
        const b = new sr,
            c = Dr(a, 2500, () => void rr(b));
        return new ED(a, () => void FD(a, () => void c()), pr(b))
    }

    function GD(a) {
        const b = new MutationObserver(() => {
            a.i()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        Eq(a, () => void b.disconnect())
    }

    function HD(a) {
        a.win.addEventListener("resize", a.i);
        Eq(a, () => void a.win.removeEventListener("resize", a.i))
    }
    var ED = class extends S {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.i = b;
            this.l = c;
            this.j = !1
        }
    };

    function FD(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function ID(a) {
        return a.g[a.g.length - 1]
    }
    var KD = class {
        constructor() {
            this.i = JD;
            this.g = [];
            this.items = new Set
        }
        add(a) {
            if (this.items.has(a)) return !1;
            const b = Za(this.g, a, this.i);
            this.g.splice(b >= 0 ? b : -b - 1, 0, a);
            this.items.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.items.has(a)
        }
        delete(a) {
            Ua(this.g, b => b === a);
            return this.items.delete(a)
        }
        clear() {
            this.items.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function LD(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.cg = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function MD(a, b) {
        b.cg && b.cg();
        b.cg = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var ND = class {
        constructor(a, b) {
            this.Fc = a;
            this.j = b;
            this.g = new KD;
            this.i = new KD;
            this.l = 0;
            this.Fc.listen(() => void this.update())
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                eg: this.l++,
                isInToolbar: new T(!1)
            };
            this.g.add(b);
            this.update();
            return {
                isInToolbar: or(gr(b.isInToolbar)),
                removeCallback: () => {
                    MD(this, b);
                    this.g.delete(b);
                    this.update()
                }
            }
        }
        update() {
            var a = this.Fc.O;
            let b;
            for (; this.j.Ni() > a && (b = this.i.first());) {
                var c = b;
                MD(this, c);
                this.g.add(c)
            }
            for (;
                (c = ID(this.g)) && this.j.qj() <= a;) LD(this,
                c);
            for (;
                (c = ID(this.g)) && (b = this.i.first()) && c.priority > b.priority;) a = b, MD(this, a), this.g.add(a), LD(this, c)
        }
    };

    function JD(a, b) {
        return a.priority === b.priority ? b.eg - a.eg : a.priority - b.priority
    };

    function OD(a) {
        if (!jB(a.win)) {
            if (a.j.O) {
                const b = jq(a.win);
                if (b > a.i + 100 || b < a.i - 100) a.j.g(!1), a.i = dq(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void PD(a), 200)
        }
    }

    function PD(a) {
        if (!jB(a.win)) {
            var b = dq(a.win);
            a.i && a.i > b && (a.i = b);
            b = jq(a.win);
            b >= a.i - 100 && (a.i = Math.max(a.i, b), a.j.g(!0))
        }
    }
    var QD = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.j = new T(!1);
            this.i = 0;
            this.l = null;
            this.A = () => void OD(this)
        }
        M() {
            this.win.addEventListener("scroll", this.A);
            this.i = dq(this.win);
            PD(this)
        }
        g() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.g()
        }
    };

    function RD(a) {
        if (!a.i) {
            var b = new QD(a.win);
            b.M();
            a.i = gr(b.j);
            Dq(a, b)
        }
        return a.i
    }

    function SD(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || TD(a, d, c);
        kr(c, !0, () => {
            d.removeCallback()
        })
    }

    function TD(a, b, c) {
        a = RD(a);
        const d = jr(a, !0, () => void b.showUnlessUserInControl()),
            e = jr(a, !1, () => void b.hideUnlessUserInControl());
        jr(dr(b.isDismissed), !0, () => {
            d();
            e()
        });
        kr(c, !0, () => {
            d();
            e()
        })
    }
    var UD = class extends S {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.i = null
        }
        addRegulatoryMessage(a) {
            const b = new T(!1),
                c = kr(RD(this), !0, () => {
                    SD(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function VD(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new WD(a, b));
        return a.googFloatingToolbarManager
    }

    function XD(a) {
        a.i || (a.i = YD(a.win, a.j, a.Gc), Dq(a, a.i.Db), Dq(a, a.i.Ah), ZD(a), $D(a, a.i.Db));
        return a.i
    }

    function aE(a) {
        a.Gc.O === null && a.i ? .position.g(bE(a))
    }

    function cE(a) {
        a.win.requestAnimationFrame(() => void aE(a))
    }

    function bE(a) {
        var b = [];
        a.i ? .Db ? .A().A() ? (b.push(() => dE(a)), b.push(() => eE(a))) : (b.push(() => eE(a)), b.push(() => dE(a)));
        a.i ? .Db ? .F() ? .A() && b.push(() => {
            const c = bq(a.win);
            return {
                position: aD({
                    ga: Math.floor(c / 3),
                    Ba: 10
                }),
                Fc: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function ZD(a) {
        a.win.googFloatingToolbarManagerAsyncPositionUpdate ? cE(a) : aE(a)
    }

    function $D(a, b) {
        const c = DD(a.win);
        c.j || (GD(c), HD(c), c.j = !0);
        c.l.listen(() => void ZD(a));
        Dq(a, c);
        b.F().listen(() => void ZD(a));
        b.A().listen(() => void ZD(a));
        a.Gc.listen(() => void ZD(a))
    }

    function dE(a) {
        var b = a.win;
        const c = bq(a.win);
        return XC(b, {
            Qb: cD({
                ga: 50,
                Ja: 10
            }),
            vf: Math.floor(c / 3),
            xb: 60,
            zf: kD(),
            Id: Math.floor(c / 2),
            lb: 20
        }, [...(a.i ? .Db.l() ? ? []), a.win.document.body]).Ee
    }

    function eE(a) {
        var b = a.win;
        const c = bq(a.win);
        return XC(b, {
            Qb: aD({
                ga: 50,
                Ba: 10
            }),
            vf: Math.floor(c / 3),
            xb: 60,
            zf: kD(),
            Id: Math.floor(c / 2),
            lb: 40
        }, [...(a.i ? .Db.l() ? ? []), a.win.document.body]).Ee
    }
    class WD extends S {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.i = null;
            this.Gc = fE(this.win, this)
        }
        addButton(a) {
            return XD(this).Tj.addButton(a)
        }
        addRegulatoryMessage(a) {
            return XD(this).Ah.addRegulatoryMessage(a)
        }
    }

    function YD(a, b, c) {
        const d = new T(null),
            e = hD(a, {
                hc: 2,
                position: d.map(f => f ? .position ? ? null),
                Oa: b,
                Gc: c
            });
        b = new ND(d.map(f => f ? .Fc || 0), {
            addButton: f => e.addButton(f),
            Ni: () => tD(e, {}),
            qj: () => tD(e, {
                fi: 1
            })
        });
        a = new UD(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Db: e,
            position: d,
            Tj: b,
            Ah: a
        }
    }

    function fE(a, b) {
        const c = new VA(a),
            d = new T(null),
            e = f => void d.g(f);
        Eq(b, () => {
            c.removeListener(e)
        });
        c.addListener(e);
        return d
    };
    const gE = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function hE(a, b, c, d, e) {
        a = new iE(a, b, c, d, e);
        if (a.l) {
            Wr(a.win, gE);
            var f = a.win;
            b = a.message;
            c = nB(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new dd(f.document);
            var g = iA('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text_old:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                qd(f, dA(g)));
            d = mB("ipr-container", e);
            e = mB("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = mB("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.i = c.bb;
            qy(a.l, a.i);
            a.j && a.j(Hn(1));
            jE(a)
        } else kE(a);
        return a
    }

    function jE(a) {
        const b = new Yr(a.win);
        b.M(2E3);
        Dq(a, b);
        b.addListener(() => {
            lE(a);
            kE(a);
            b.dispose()
        })
    }

    function kE(a) {
        const b = VD(a.win, a.A).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        Eq(a, () => void b.removeCallback());
        a.j && a.j(Hn(2))
    }

    function lE(a) {
        a.i && (a.i.parentNode ? .removeChild(a.i), a.i = null)
    }
    var iE = class extends S {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.A = d;
            this.j = e;
            this.i = null
        }
        g() {
            lE(this);
            super.g()
        }
    };
    var nE = (a, b, c, d) => mE(a, b, c, d);

    function mE(a, b, c, d) {
        const e = hE(a, NC(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, oE(a));
        return () => e.dispose()
    }

    function oE(a) {
        if (a = MC(a)) return a;
        Y.aa(1234, Error("No messages"), void 0, void 0);
        return (new et).i()
    };

    function pE(a, b) {
        b && (a.g = nE(a.i, b.localizedDnsText, () => qE(a, b), a.l))
    }

    function rE(a) {
        const b = KC(a.i);
        b.callbackQueue = b.callbackQueue || [];
        LC(a.i).overrideDnsLink = !0;
        b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => pE(a, c)
        })
    }

    function qE(a, b) {
        WA(a.j);
        b.openConfirmationDialog(c => {
            c && a.g && (a.g(), a.g = null);
            XA(a.j)
        })
    }
    class sE {
        constructor(a, b, c) {
            this.i = a;
            this.j = RA(b, 2147483643);
            this.l = c;
            this.g = null
        }
    };

    function tE(a) {
        uE(a.j, b => {
            var c = a.i,
                d = b.nk,
                e = b.si,
                f = b.showRevocationMessage;
            b = NC(c, a.l);
            d = {
                actionButton: {
                    buttonText: c.document.createTextNode(d),
                    onClick: f
                },
                informationText: c.document.createTextNode(e)
            };
            e = MC(c);
            e || (Y.aa(1233, Error("No messages"), void 0, void 0), e = (new et).i());
            hE(c, b, d, e)
        }, () => {
            XA(a.g);
            vE(a)
        })
    }

    function wE(a) {
        WA(a.g);
        tE(a)
    }

    function vE(a) {
        a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? WA(a.g) : XA(a.g)
        }) : Y.aa(1250, Error("No TCF API function"), void 0, void 0)
    }
    class xE {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = RA(b, 2147483643);
            this.l = c;
            this.j = d
        }
    };
    var yE = a => {
            if (!a || ci(a, 1) == null) return !1;
            a = ci(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        zE = a => {
            if (!a || ci(a, 3) == null) return !1;
            a = ci(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        AE = a => a ? ai(a, 5) === !0 : !1,
        BE = a => a ? ai(a, 6) === !0 : !1;

    function CE() {
        return "m202410280101"
    };

    function DE(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            tf: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            tf: c
        }
    };

    function EE(a, b) {
        Cd(a, (c, d) => {
            b[d] = c
        })
    }

    function FE(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && ud(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function GE() {
        if (HE) return HE;
        const a = il() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? HE = b : a.google_persistent_state_async = HE = new IE
    }

    function JE(a, b, c) {
        b = KE[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function LE(a, b, c) {
        return JE(a, b, () => c)
    }

    function ME(a, b, c) {
        return a.S[KE[b] || `google_ps_${b}`] = c
    }

    function NE(a, b) {
        return ME(a, b, LE(a, b, 0) + 1)
    }

    function OE() {
        var a = GE();
        return LE(a, 20, {})
    }

    function PE() {
        var a = GE();
        const b = LE(a, 31, !1);
        b || ME(a, 31, !0);
        return !b
    }

    function QE() {
        var a = GE();
        const b = LE(a, 41, !1);
        b || ME(a, 41, !0);
        return !b
    }

    function RE() {
        var a = GE();
        return LE(a, 26)
    }

    function SE() {
        var a = GE();
        return LE(a, 28, [])
    }

    function TE() {
        var a = GE();
        return JE(a, 39, UE)
    }
    var IE = class {
            constructor() {
                this.S = {}
            }
        },
        HE = null;
    const KE = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function VE(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function WE(a, b) {
        a = VE(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function Ep(a, b) {
        a.i.size > 0 || XE(a);
        const c = a.i.get(0);
        c ? c.push(b) : a.i.set(0, [b])
    }

    function YE(a, b, c, d) {
        rb(b, c, d);
        Eq(a, () => sb(b, c, d))
    }

    function ZE(a, b) {
        a.state !== 1 && (a.state = 1, a.i.size > 0 && $E(a, b))
    }

    function XE(a) {
        a.win.document.visibilityState ? YE(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && ZE(a, b);
            a.win.document.visibilityState === "visible" && (a.state = 0)
        }) : "onpagehide" in a.win ? (YE(a, a.win, "pagehide", b => {
            ZE(a, b)
        }), YE(a, a.win, "pageshow", () => {
            a.state = 0
        })) : YE(a, a.win, "beforeunload", b => {
            ZE(a, b)
        })
    }

    function $E(a, b) {
        for (let c = 9; c >= 0; c--) a.i.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var aF = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.state = 0;
            this.i = new Map
        }
    };
    async function bF(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function cF() {
        return Hp(dF)
    }

    function eF(a) {
        const b = a.state.pc;
        return b !== null && b !== 0 ? b : a.state.pc = de(a.win)
    }

    function fF(a) {
        var b = a.state.wpc;
        if (b === null || b === "") b = a.state, a = a.win, a = a.google_ad_client ? String(a.google_ad_client) : VE(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? "", b = b.wpc = a;
        return b
    }

    function gF(a, b) {
        var c = new Mo;
        var d = eF(a);
        c = vi(c, 1, d);
        c = Lo(c.Oc(fF(a)), a.state.sd);
        return vi(c, 7, Math.round(b || a.win.performance.now()))
    }

    function hF(a, b, c) {
        b(a.G.Od.ge.Vc).Ha(c)
    }

    function iF(a, b, c) {
        b(a.G.Od.ge.Vc).Jc(c)
    }
    async function jF(a) {
        await bF(a.win, () => !(!eF(a) || !fF(a)))
    }

    function kF() {
        var a = cF();
        a.g && (a.state.tar += 1)
    }

    function lF(a) {
        var b = cF();
        if (b.g) {
            var c = b.j;
            a(c);
            b.state.cc = Ci(c)
        }
    }
    async function mF(a, b, c) {
        if (a.g && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await jF(a);
            var e = a.G,
                f = e.Za;
            a = gF(a, d);
            d = new vn;
            b = N(d, 1, b);
            c = Jh(b, 2, c, Qf);
            c = G(a, 9, No, c);
            f.call(e, c)
        }
    }
    async function nF(a, b) {
        await jF(a);
        var c = gF(a);
        b = G(c, 5, No, b);
        a.g && !a.state.le.includes(2) && (a.state.le.push(2), a.G.Za(b))
    }
    async function oF(a, b, c) {
        await jF(a);
        var d = a.G,
            e = d.Za;
        a = Lo(gF(a, c), 1);
        b = G(a, 6, No, b);
        e.call(d, b)
    }
    async function pF(a, b, c) {
        await jF(a);
        hF(a, d => b(d.Hh), c)
    }
    async function qF(a, b, c) {
        await jF(a);
        iF(a, d => b(d.Hh), c)
    }
    async function rF(a, b) {
        await jF(a);
        var c = a.G,
            d = c.Za;
        a = Lo(gF(a), 1);
        b = G(a, 13, No, b);
        d.call(c, b)
    }
    async function sF(a, b) {
        if (a.g) {
            await jF(a);
            var c = a.G,
                d = c.Za;
            a = gF(a);
            b = G(a, 11, No, b);
            d.call(c, b)
        }
    }
    async function tF(a, b) {
        await jF(a);
        var c = a.G,
            d = c.Za;
        a = Lo(gF(a), 1);
        b = G(a, 14, No, b);
        d.call(c, b)
    }
    async function uF(a, b) {
        await jF(a);
        var c = a.G,
            d = c.Za;
        a = Lo(gF(a), 1);
        b = G(a, 16, No, b);
        d.call(c, b)
    }
    var dF = class {
        constructor(a, b) {
            this.win = il() || window;
            this.i = b ? ? new aF(this.win);
            this.G = a ? ? new Gp(CE(), 100, 100, !0, this.i);
            this.state = JE(GE(), 33, () => {
                const c = X(hu);
                return {
                    sd: c,
                    ssp: c > 0 && Bd() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get g() {
            return this.state.ssp
        }
        get jd() {
            return this.state.cu
        }
        set jd(a) {
            this.state.cu = a
        }
        get j() {
            return Ty(1227, () => Di(wn, kh(this.state.cc || []))) || new wn
        }
    };

    function vF(a) {
        var b = new wF;
        return ri(b, 1, a)
    }
    var wF = class extends O {
        constructor() {
            super()
        }
    };
    class xF {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
        run() {
            if (this.i.adsbygoogle_ama_fc_has_run !== !0) {
                var a = yE(this.g),
                    b = zE(this.g),
                    c = !1;
                a && (wE(new xE(this.i, this.A, this.l || Th(this.g, mt, 4, y(zf)), this.j)), c = !0);
                b && (rE(new sE(this.i, this.A, this.l || Th(this.g, mt, 4, y(zf)))), c = !0);
                lF(f => {
                    f = M(f, 9, !0);
                    f = M(f, 10, a);
                    M(f, 11, b)
                });
                var d = AE(this.g),
                    e = BE(this.g);
                d && (c = !0);
                c && (c = vF(d && e), this.j.start(!0, c), this.i.adsbygoogle_ama_fc_has_run = !0)
            }
        }
    };

    function yF(a, b, c, d, e, f) {
        try {
            const g = a.g,
                h = zd("SCRIPT", g);
            h.async = !0;
            mc(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", () => {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", () => {
                c > 0 ? yF(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (g) {
            f()
        }
    }

    function zF(a, b, c = () => {}, d = () => {}) {
        yF(cd(a), b, 0, !1, c, d)
    };

    function AF(a = null) {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    Eb(Sp).map(a => Number(a));
    Eb(Tp).map(a => Number(a));
    const BF = t.URL;

    function CF(a) {
        const b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function DF(a) {
        var b = (new BF(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function EF(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new BF(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function FF(a) {
        var b = new BF(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + CF(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new BF(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function GF(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = zd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var HF = class extends O {};
    var IF = rk(class extends O {
        getStatus() {
            return z(this, HF, 2)
        }
    });

    function JF(a) {
        if (a.i) return a.i;
        a.L && a.L(a.j) ? a.i = a.j : a.i = Rd(a.j, a.R);
        return a.i ? ? null
    }

    function KF(a) {
        a.l || (a.l = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.Hf,
                        e = a.F.get(d);
                    e && (e.persistent || a.F.delete(d), e.Nb ? .(e.Qi, c.payload))
                }
            } catch (f) {}
        }, rb(a.j, "message", a.l))
    }

    function LF(a, b, c) {
        if (JF(a))
            if (a.i === a.j)(b = a.B.get(b)) && b(a.i, c);
            else {
                var d = a.A.get(b);
                if (d && d.Dc) {
                    KF(a);
                    var e = ++a.W;
                    a.F.set(e, {
                        Nb: d.Nb,
                        Qi: d.Fd(c),
                        persistent: b === "addEventListener"
                    });
                    a.i.postMessage(d.Dc(c, e), "*")
                }
            }
    }
    var MF = class extends S {
        constructor(a, b, c, d) {
            super();
            this.R = b;
            this.L = c;
            this.H = d;
            this.B = new Map;
            this.W = 0;
            this.A = new Map;
            this.F = new Map;
            this.l = void 0;
            this.j = a
        }
        g() {
            delete this.i;
            this.B.clear();
            this.A.clear();
            this.F.clear();
            this.l && (sb(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.H;
            super.g()
        }
    };
    const NF = (a, b) => {
            const c = {
                cb: d => {
                    d = IF(d);
                    b.La({
                        jc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        OF = {
            Fd: a => a.La,
            Dc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Nb: (a, b) => {
                a({
                    jc: b
                })
            }
        };

    function PF(a) {
        a = IF(a.data.__fciReturn);
        return {
            payload: a,
            Hf: ei(a, 1)
        }
    }

    function QF(a, b = !1) {
        if (b) return !1;
        a.j || (a.i = !!JF(a.caller), a.j = !0);
        return a.i
    }

    function RF(a) {
        return new Promise(b => {
            QF(a) && LF(a.caller, "getDataWithCallback", {
                command: "loaded",
                La: c => {
                    b(c.jc)
                }
            })
        })
    }

    function SF(a, b) {
        QF(a) && LF(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: Bi(b),
            La: () => {}
        })
    }
    var TF = class extends S {
        constructor(a) {
            super();
            this.i = this.j = !1;
            this.caller = new MF(a, "googlefcPresent", void 0, PF);
            this.caller.B.set("getDataWithCallback", NF);
            this.caller.A.set("getDataWithCallback", OF)
        }
        g() {
            this.caller.dispose();
            super.g()
        }
    };
    const UF = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function VF(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = UF(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Mk({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function WF(a, b = {}) {
        return VF(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.Do) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? XF(a, "1", 0) : !0 : !1
    }

    function XF(a, b, c) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (d !== void 0) {
                    d = d["755"];
                    break a
                }
            }
            d = void 0
        }
        if (d === 0) return !1;
        let e = c;c === 2 ? (e = 0, d === 2 && (e = 1)) : c === 3 && (e = 1, d === 1 && (e = 0));
        if (e === 0) a = a.purpose && a.vendor ? (c = YF(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && YF(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? YF(a.purpose.legitimateInterests, b) && YF(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function YF(a, b) {
        return !(!a || !a[b])
    }

    function ZF(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => XF(a, d, c))
    }

    function $F(a) {
        if (a.i) return a.i;
        a.i = Rd(a.j, "__tcfapiLocator");
        return a.i
    }

    function aG(a) {
        return typeof a.j.__tcfapi === "function" || $F(a) != null
    }

    function bG(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if ($F(a)) {
            cG(a);
            const e = ++a.H;
            a.B[e] = c;
            a.i && a.i.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function dG(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = lb(() => b(c));
        let e = 0;
        a.F !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        bG(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = UF(c), c.internalBlockOnErrors = a.A, VF(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), bG(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function cG(a) {
        a.l || (a.l = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, rb(a.j, "message", a.l))
    }
    class eG extends S {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.i = null;
            this.B = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.yi ? ? !1;
            this.l = null
        }
        g() {
            this.B = {};
            this.l && (sb(this.j, "message", this.l), delete this.l);
            delete this.B;
            delete this.j;
            delete this.i;
            super.g()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = lb(() => a(b));
            let d = 0;
            this.F !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = UF(b),
                    b.internalBlockOnErrors = this.A, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                bG(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && bG(this, "removeEventListener", null, a.listenerId)
        }
    };

    function uE(a, b, c) {
        const d = AF(a.win);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = AF(a.win),
                    f = new eG(a.win);
                aG(f) && dG(f, g => {
                    g.cmpId === 300 && g.tcString && g.tcString !== "tcunavailable" && b({
                        nk: (0, e.getDefaultConsentRevocationText)(),
                        Bo: (0, e.getDefaultConsentRevocationCloseText)(),
                        si: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function fG(a, b = !1, c) {
        const d = {};
        try {
            const f = DF(a.win),
                g = EF(a.win);
            d.fc = f;
            d.fctype = g
        } catch (f) {}
        let e;
        try {
            e = FF(a.win.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = gG(a.g, d);
        zF(a.win, b, () => {}, () => {});
        c && SF(new TF(a.win), c)
    }
    var hG = class {
        constructor(a, b) {
            this.win = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.win === this.win.top) try {
                GF(this.win, "googlefcPresent"), fG(this, a, b)
            } catch (c) {}
        }
    };

    function gG(a, b) {
        a = Zc `https://fundingchoicesmessages.google.com/i/${a}`;
        return $c(a, { ...b,
            ers: 2
        })
    };
    const iG = new Set(["ARTICLE", "SECTION"]);
    var jG = class {
        constructor(a) {
            this.g = a
        }
    };

    function kG(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function lG(a) {
        return a.classList.length > 0
    }

    function mG(a) {
        return iG.has(a.tagName)
    };
    var nG = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function oG(a) {
        return xa(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? oG(a) : null
    };
    var pG = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = oG(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new nG(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var qG = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        deleteAll(a) {
            return this.map.delete(a)
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function() {
                return function*() {
                    for (const b of a.values()) yield* b
                }()
            }()
        }[Symbol.iterator]() {
            const a =
                this.map;
            return function() {
                return function*() {
                    for (const [b, c] of a) {
                        const d = b,
                            e = c;
                        for (const f of e) yield [d, f]
                    }
                }()
            }()
        }
    };

    function rG(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function sG(a) {
        return Array.from(tG(a).map.values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function uG(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new WC(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && Xq(a.j, {
                gb: c.g,
                Va: vG,
                zb: !0
            }) === null
        })
    }

    function wG(a) {
        return sG(a).sort(xG).find(b => uG(a, b)) || []
    }

    function tG(a) {
        return yG(Array.from(a.win.document.getElementsByTagName("IMG")).map(pG).filter(rs), b => {
            var c = [...kG("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? kG("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? kG("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = Xq(a.i.g, {
                gb: b.g,
                Va: lG
            })) ? kG("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(Xq(a.i.g, {
                gb: b.g,
                Va: mG
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var zG = class {
        constructor(a, b, c, d, e) {
            var f = new Kr;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function yG(a, b) {
        const c = new qG;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function vG(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function xG(a, b) {
        return b.length - a.length
    };

    function AG(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = BG(a.j),
            d = CG(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.A.j().i(e => {
            var f = a.j;
            const g = d.getBoundingClientRect(),
                h = g.top - e.top,
                k = g.left - e.left,
                l = g.width - e.width;
            e = g.height - e.height;
            Math.abs(h) < 1 && Math.abs(k) < 1 && Math.abs(l) < 1 && Math.abs(e) < 1 || (f = f.getComputedStyle(d), v(d, {
                top: parseInt(f.top, 10) - h + "px",
                left: parseInt(f.left, 10) - k + "px",
                width: parseInt(f.width, 10) - l + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function DG(a) {
        a.i || (a.i = AG(a));
        return a.i
    }
    var EG = class extends S {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.A = c;
            this.i = null
        }
        g() {
            if (this.i) {
                var a = this.i;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.i = null
            }
            super.g()
        }
    };

    function CG(a) {
        const b = a.document.createElement("div");
        v(b, Pt(a));
        v(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function BG(a) {
        const b = a.document.createElement("div");
        v(b, Pt(a));
        v(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function FG(a) {
        const b = new T(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return gr(b)
    };
    const GG = ["Google Material Icons", "Roboto"];

    function HG({
        win: a,
        wa: b,
        rj: c,
        webPropertyCode: d,
        Oa: e,
        V: f
    }) {
        const g = new Mr(a, c);
        c = new EG(a, c, g);
        Dq(c, g);
        a = new IG(a, d, e, b, c, f);
        Dq(a, c);
        a.M()
    }
    var IG = class extends S {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Oa = c;
            this.wa = d;
            this.j = e;
            this.V = f;
            this.i = new T(!1)
        }
        M() {
            const a = JG(this.win, this.webPropertyCode, this.Oa);
            DG(this.j).appendChild(a.aj);
            bx(this.win, a.ta);
            FG(a.ta).i(b => {
                if (b !== null) {
                    switch (b) {
                        case "unfilled":
                            this.dispose();
                            break;
                        case "filled":
                            this.i.g(!0);
                            break;
                        default:
                            this.V ? .reportError("Unhandled AdStatus: " + String(b)), this.dispose()
                    }
                    this.V ? .jk(this.wa, b)
                }
            });
            kr(this.i, !0, () => void a.zj.g(!0));
            a.Vi.listen(() =>
                void this.dispose());
            a.Ui.listen(() => void this.V ? .hk(this.wa))
        }
    };

    function JG(a, b, c) {
        const d = new T(!1),
            e = a.document.createElement("div");
        v(e, Pt(a));
        v(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        jr(d, !0, () => void v(e, {
            opacity: "1"
        }));
        jr(d, !1, () => void v(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        v(f, Pt(a));
        v(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            di: g,
            yj: h
        } = KG(a, b);
        f.appendChild(g);
        e.appendChild(LG(a, L(c, 1)));
        b = MG(a, L(c, 2));
        e.appendChild(b.Ei);
        b.Me.listen(() => void d.g(!1));
        return {
            zj: d,
            aj: e,
            ta: h,
            Ui: b.Me,
            Vi: b.Me.delay(a, 450)
        }
    }

    function LG(a, b) {
        const c = a.document.createElement("div");
        v(c, Pt(a));
        v(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function MG(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        v(c, Pt(a));
        v(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new sr;
        c.addEventListener("click", () => void rr(d));
        return {
            Ei: c,
            Me: pr(d)
        }
    }

    function KG(a, b) {
        a = Yw(a.document, b, null, null, {});
        return {
            di: a.mb,
            yj: a.ta
        }
    };

    function NG({
        target: a,
        threshold: b = 0
    }) {
        const c = new OG;
        c.M(a, b);
        return c
    }
    var OG = class extends S {
        constructor() {
            super();
            this.i = new T(!1)
        }
        M(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.i.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            Eq(this, () => void c.disconnect())
        }
    };

    function PG(a) {
        const b = QG(a.win, ni(a.settings, 2) ? ? 250, ni(a.settings, 3) ? ? 300);
        let c = 1;
        return wG(a.j).map(d => ({
            wa: c++,
            image: d,
            hb: b(d)
        }))
    }

    function RG(a, b) {
        const c = NG({
            target: b.image.g,
            threshold: oi(a.settings) ? ? .8
        });
        a.i.push(c);
        kr(nr(c.i, a.win, ni(a.settings, 5) ? ? 3E3, d => d), !0, () => {
            if (a.g < (ni(a.settings, 1) ? ? 1)) {
                HG({
                    win: a.win,
                    wa: b.wa,
                    rj: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Oa: a.Oa,
                    V: a.V
                });
                a.g++;
                if (!(a.g < (ni(a.settings, 1) ? ? 1)))
                    for (; a.i.length;) a.i.pop() ? .dispose();
                a.V ? .ik(b.wa)
            }
        })
    }
    var TG = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.settings = c;
            this.Oa = d;
            this.j = e;
            this.V = f;
            this.i = [];
            this.g = 0
        }
        run() {
            const a = PG(this);
            a.filter(SG).forEach(b => void RG(this, b));
            this.V ? .kk(a.map(b => ({
                wa: b.wa,
                hb: b.hb
            })))
        }
    };

    function SG(a) {
        return a.hb.rejectionReasons.length === 0
    }

    function QG(a, b, c) {
        const d = bq(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                xb: e.width,
                jf: e.height,
                Wi: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function UG(a, b) {
        a.wa = b;
        return a
    }
    var VG = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.wa = this.g = null
        }
    };

    function WG(a, b) {
        return new VG(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function XG(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = Ll(), a = 0) : a = Ll() - a.g;
        var e = b.A,
            f = b.webPropertyCode,
            g = b.hostname,
            h = b.j,
            k = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var l = {
                imcnt: b.g.length
            };
            var m = Math.min(b.g.length, 10);
            for (let n = 0; n < m; n++) {
                const p = `im${n}`;
                l[`${p}_id`] = b.g[n].wa;
                l[`${p}_s_w`] = b.g[n].hb.xb;
                l[`${p}_s_h`] = b.g[n].hb.jf;
                l[`${p}_s_dbf`] = b.g[n].hb.Wi;
                b.g[n].hb.rejectionReasons.length > 0 && (l[`${p}_s_rej`] = b.g[n].hb.rejectionReasons.join(","))
            }
        } else l = null;
        Vy("abg::imovad", {
            typ: e,
            wpc: f,
            hst: g,
            pvsid: h,
            peid: k,
            rate: c,
            num: d,
            tim: a,
            ...(b.wa === null ? {} : {
                imid: b.wa
            }),
            ...(b.i === null ? {} : {
                astat: b.i
            }),
            ...(b.errorMessage === null ? {} : {
                errm: b.errorMessage
            }),
            ...l
        }, c)
    }
    var YG = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        kk(a) {
            var b = WG(this, "fndi");
            b.g = a;
            XG(this, b, a.length > 0 ? 1 : .1)
        }
        ik(a) {
            a = UG(WG(this, "adpl"), a);
            XG(this, a, 1)
        }
        jk(a, b) {
            a = UG(WG(this, "adst"), a);
            a.i = b;
            XG(this, a, 1)
        }
        hk(a) {
            a = UG(WG(this, "adis"), a);
            XG(this, a, 1)
        }
        reportError(a) {
            var b = WG(this, "err");
            b.errorMessage = a;
            XG(this, b, .1)
        }
    };

    function ZG(a, b, c) {
        return (a = a.g()) && ai(a, 11) ? c.map(d => d.j()) : c.map(d => d.A(b))
    };
    var $G = class extends O {
        getHeight() {
            return di(this, 2)
        }
        setHeight(a) {
            return si(this, 2, a)
        }
    };

    function aH(a, b) {
        return si(a, 1, b)
    }

    function bH(a, b) {
        return Uh(a, 2, b)
    }
    var cH = class extends O {};
    var dH = class extends O {
        constructor() {
            super()
        }
    };
    var eH = class extends O {
            constructor() {
                super()
            }
        },
        fH = [1, 2];
    const gH = new Set([7, 1]);
    var hH = class {
        constructor() {
            this.j = new qG;
            this.l = []
        }
        g(a, b) {
            gH.has(b) || ns(ks(py(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function iH(a) {
        return new Ds(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class jH {
        g(a) {
            return iH(Math.floor(a.i))
        }
    };
    var kH = class extends O {
        constructor() {
            super()
        }
    };

    function lH(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.me = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        xa(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        ul(a.l) && ul(a.i) || Vy("rctnosize", b);
        return !0
    }
    var mH = class {
        constructor() {
            this.C = this.D = this.j = this.me = null;
            this.i = this.l = 0
        }
        B() {
            return !0
        }
    };

    function nH(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function oH(a, b = []) {
        const c = Date.now();
        return Oa(b, d => c - d < a * 1E3)
    }

    function pH(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Ra(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = oH(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function qH(a, b, c) {
        return b <= 0 || a == null || !nH(a) ? null : pH(a, b, c)
    };
    var rH = (a, b, c) => {
        let d = 0;
        try {
            var e = d |= $p(a);
            const h = aq(a),
                k = a.innerWidth;
            var f = h && k ? h / k : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= cq(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var g;
            if (g = b) g = qH(c, 3600, "__lsv__") ? .length !== 0;
            g && (d |= 134217728)
        } catch (h) {
            d |= 32
        }
        return d
    };
    var sH = class extends mH {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        B(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = zt(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const tH = {};

    function uH(a, b, c) {
        let d = vH(a, c, b);
        if (!d) return !0;
        const e = c.B.i;
        for (; d.Xa && d.Xa.length;) {
            const f = d.Xa.shift(),
                g = Rx(f.ea);
            if (g && !(g <= d.Yc)) c.C ? .g(f, 18);
            else if (wH(c, f, {
                    Gd: d.Yc
                })) {
                if (d.Uc.g.length + 1 >= e) return c.C ? .i(d.Xa, 19), !0;
                d = vH(a, c, b);
                if (!d) return !0
            }
        }
        return c.j
    }
    const vH = (a, b, c) => {
        var d = b.B.i,
            e = b.B.l,
            f = b.B;
        f = fz(b.da(), f.g ? f.g.ec : void 0, d);
        if (f.g.length >= d) return b.C ? .i(xH(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = fq(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : f.i * e - lz(f)) : e = void 0;
        const g = (d = e == null || e >= 50) ? xH(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .i(xH(b, f, {
            types: a
        }, c), 18);
        return {
            Uc: f,
            Yc: e,
            Xa: g
        }
    };
    tH[2] = Ea(function(a, b) {
        a = xH(b, fz(b.da()), {
            types: a,
            ib: Hy(b.da())
        }, 2);
        if (a.length == 0) return !0;
        for (var c = 0; c < a.length; c++)
            if (wH(b, a[c])) return !0;
        return b.j ? (b.l.push(11), !0) : !1
    }, [0]);
    tH[5] = Ea(uH, [0], 5);
    tH[10] = Ea(function(a, b) {
        a = [];
        const c = b.yb;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && a.push(1);
        return uH(a, 10, b)
    }, 10);
    tH[3] = function(a) {
        if (!a.j) return !1;
        var b = xH(a, fz(a.da()), {
            types: [0],
            ib: Hy(a.da())
        }, 3);
        if (b.length == 0) return !0;
        for (var c = b.length - 1; c >= 0; c--)
            if (wH(a, b[c])) return !0;
        a.l.push(11);
        return !0
    };
    const zH = a => {
            const b = a.da().document.body.getBoundingClientRect().width;
            yH(a, iH(b))
        },
        BH = (a, b) => {
            var c = {
                types: [0],
                ib: Iy(),
                lk: [5]
            };
            c = xH(a, fz(a.da()), c, 8);
            AH(a, c.reverse(), b)
        },
        AH = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.ma), wH(a, d, {
                        ne: b
                    })) return !0;
            return !1
        };
    tH[8] = function(a) {
        var b = a.da().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => tH[8](a), {
            once: !0
        }), !0;
        if (!a.j) return !1;
        if (!a.Cd()) return !0;
        b = {
            types: [0],
            ib: Iy(),
            Mf: [2, 4, 5]
        };
        b = xH(a, fz(a.da()), b, 8);
        const c = new jH;
        if (AH(a, b, c)) return !0;
        if (a.A.Cg) switch (a.A.sh || 0) {
            case 1:
                BH(a, c);
                break;
            default:
                zH(a)
        }
        return !0
    };
    tH[6] = Ea(uH, [2], 6);
    tH[7] = Ea(uH, [1], 7);
    tH[9] = function(a) {
        const b = vH([0, 2], a, 9);
        if (!b || !b.Xa) return a.l.push(17), a.j;
        for (var c of b.Xa) {
            var d = a.A.ef || null;
            d == null ? d = null : (d = Sx(c.ea, new CH, new DH(d, a.da())), d = new ry(d, c.ia(), c.ma));
            if (d && !(Rx(d.ea) > b.Yc) && wH(a, d, {
                    Gd: b.Yc,
                    Ie: !0
                })) return a = d.ea.H, c = c.ea, a = a.length > 0 ? a[0] : null, c.l = !0, a != null && c.H.push(a), !0
        }
        a.l.push(17);
        return a.j
    };
    class CH {
        i(a, b, c, d) {
            return ax(d.document, a, b)
        }
        j(a) {
            return bq(a) || 0
        }
    };
    var EH = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Uc = c
        }
        Aa(a) {
            return this.g ? Iz(this.i, this.g, a, this.Uc) : Hz(this.i, a, this.Uc)
        }
        va() {
            return this.g ? 16 : 9
        }
    };
    var FH = class {
        constructor(a) {
            this.pe = a
        }
        Aa(a) {
            return Pz(a.document, this.pe)
        }
        va() {
            return 11
        }
    };
    var GH = class {
        constructor(a) {
            this.rb = a
        }
        Aa(a) {
            return Mz(this.rb, a)
        }
        va() {
            return 13
        }
    };
    var HH = class {
        Aa(a) {
            return Fz(a)
        }
        va() {
            return 12
        }
    };
    var IH = class {
        constructor(a) {
            this.tc = a
        }
        Aa() {
            return Kz(this.tc)
        }
        va() {
            return 2
        }
    };
    var JH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return Nz(this.g)
        }
        va() {
            return 3
        }
    };
    var KH = class {
        Aa() {
            return Qz()
        }
        va() {
            return 17
        }
    };
    var LH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return Jz(this.g)
        }
        va() {
            return 1
        }
    };
    var MH = class {
        Aa() {
            return jb(Mx)
        }
        va() {
            return 7
        }
    };
    var NH = class {
        constructor(a) {
            this.Mf = a
        }
        Aa() {
            return Lz(this.Mf)
        }
        va() {
            return 6
        }
    };
    var OH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return Oz(this.g)
        }
        va() {
            return 5
        }
    };
    var PH = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Aa() {
            return Ea(Rz, this.minWidth, this.maxWidth)
        }
        va() {
            return 10
        }
    };
    var QH = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    };

    function RH(a) {
        var b = new SH;
        b.A = a;
        b.i.push(new LH(a));
        return b
    }

    function TH(a, b) {
        a.i.push(new NH(b));
        return a
    }

    function UH(a, b) {
        a.i.push(new IH(b));
        return a
    }

    function VH(a, b) {
        a.i.push(new OH(b));
        return a
    }

    function WH(a, b) {
        a.i.push(new JH(b));
        return a
    }

    function XH(a) {
        a.i.push(new MH);
        return a
    }

    function YH(a) {
        a.g.push(new HH);
        return a
    }

    function ZH(a, b = 0, c, d) {
        a.g.push(new EH(b, c, d));
        return a
    }

    function $H(a, b = 0, c = Infinity) {
        a.g.push(new PH(b, c));
        return a
    }

    function aI(a) {
        a.g.push(new KH);
        return a
    }

    function bI(a, b = 0) {
        a.g.push(new GH(b));
        return a
    }
    var SH = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        orderBy(a) {
            this.j = a;
            return this
        }
        build() {
            return new QH(this)
        }
    };
    class DH {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.D || {};
            c.google_ad_client = a.me;
            c.google_ad_height = bq(b) || 0;
            c.google_ad_width = aq(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new kH;
            b = ri(b, 1, a.A);
            a.g && B(b, 2, a.g);
            c.google_rasc = Bi(b);
            a.j && (c.google_adtest = "on");
            return new Ds(["fsi_container"], c)
        }
    };
    var cI = ws(new ts(0, {})),
        dI = ws(new ts(1, {})),
        eI = a => a === cI || a === dI;

    function fI(a, b, c) {
        Pq(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class gI {
        constructor() {
            this.g = new Tq
        }
    };

    function hI(a, b) {
        for (var c = 0; c < b.length; c++) a.xa(b[c]);
        return a
    }

    function iI(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class jI {
        constructor(a) {
            this.B = {};
            this.B.c = a;
            this.A = [];
            this.j = null;
            this.C = [];
            this.F = 0
        }
        Oc(a) {
            this.B.wpc = a;
            return this
        }
        xa(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        l(a) {
            var b = Fb(this.B);
            this.F > 0 && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.C.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && Fl(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function kI(a, b) {
        b && (a.g.apv = I(b, 4), wh(b, Ys, 23) && (a.g.sat = "" + Yh(z(b, Ys, 23), 1)));
        return a
    }

    function lI(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var mI = class extends jI {
        constructor(a) {
            super(a);
            this.g = {}
        }
        H(a) {
            this.g.a = a.join(",");
            return this
        }
        I(a) {
            a != null && (this.g.allp = a);
            return this
        }
        Gh(a) {
            if (a) {
                const b = [];
                for (const c of Rq(a))
                    if (a.get(c).length > 0) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.jb, d.Rh].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            Hb(a, this.g);
            return a
        }
    };

    function nI(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function oI(a, b, c, d = 30) {
        c.length <= d ? a[b] = pI(c) : (a[b] = pI(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function pI(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ia(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function qI(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function rI(a, b) {
        a.i.op = qI(b)
    }

    function sI(a, b, c) {
        oI(a.i, "fap", b);
        a.i.fad = qI(c)
    }

    function tI(a, b, c) {
        oI(a.i, "fmp", b);
        a.i.fmd = qI(c)
    }

    function uI(a, b, c) {
        oI(a.i, "vap", b);
        a.i.vad = qI(c)
    }

    function vI(a, b, c) {
        oI(a.i, "vmp", b);
        a.i.vmd = qI(c)
    }

    function wI(a, b, c) {
        oI(a.i, "pap", b);
        a.i.pad = qI(c)
    }

    function xI(a, b, c) {
        oI(a.i, "pmp", b);
        a.i.pmd = qI(c)
    }

    function yI(a, b) {
        oI(a.i, "psq", b)
    }
    var zI = class extends mI {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = pI(this.errors));
            return a
        }
    };

    function AI(a, b, c) {
        const d = b.ea;
        Pq(a.g, d) || a.g.set(d, new BI(js(py(b)) ? ? ""));
        c(a.g.get(d))
    }

    function CI(a, b) {
        AI(a, b, c => {
            c.isAvailable = !0
        })
    }

    function DI(a, b) {
        AI(a, b, c => {
            c.g = !0
        })
    }

    function EI(a, b) {
        AI(a, b, c => {
            c.i = !0
        });
        a.L.push(b.ea)
    }

    function FI(a, b, c) {
        AI(a, b, d => {
            d.Jb = c
        })
    }

    function GI(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) eI(f.Jb ? ? "") ? ++e : (b = a.i.get(f.Jb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Kb: e
        }
    }

    function HI(a, b) {
        rI(b, a.i.ob());
        var c = Sq(a.g).filter(f => (f.vb.startsWith(cI) ? 0 : 1) === 0),
            d = Sq(a.g).filter(f => (f.vb.startsWith(cI) ? 0 : 1) === 1),
            e = GI(a, f => f.isAvailable, c);
        sI(b, e.list, e.Kb);
        e = GI(a, f => f.isAvailable, d);
        tI(b, e.list, e.Kb);
        e = GI(a, f => f.g, c);
        uI(b, e.list, e.Kb);
        e = GI(a, f => f.g, d);
        vI(b, e.list, e.Kb);
        c = GI(a, f => f.i, c);
        wI(b, c.list, c.Kb);
        d = GI(a, f => f.i, d);
        xI(b, d.list, d.Kb);
        yI(b, a.L.map(f => a.g.get(f) ? .Jb).map(f => a.i.get(f) ? ? null))
    }

    function hn() {
        var a = Hp(II);
        if (!a.A) return Xm();
        const b = fn(en(dn(cn(bn(an($m(Zm(Wm(Vm(new Ym, a.A ? ? []), a.H ? ? []), a.C), a.I), a.F), a.R), a.W), a.B ? ? 0), Sq(a.g).map(c => {
            var d = new Um;
            d = xi(d, 1, c.vb);
            var e = a.i.get(c.Jb ? ? "", -1);
            d = vi(d, 2, e);
            d = M(d, 3, c.isAvailable);
            return M(d, 4, c.g)
        })), a.L.map(c => a.g.get(c) ? .Jb).map(c => a.i.get(c) ? ? -1));
        a.j != null && M(b, 6, a.j);
        a.l != null && Kh(b, 13, ig(a.l), "0");
        return b
    }
    var II = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.F = this.I = !1;
            this.j = null;
            this.W = this.C = this.R = !1;
            this.B = null;
            this.i = new Tq;
            this.g = new Tq;
            this.L = []
        }
    };
    class BI {
        constructor(a) {
            this.i = this.g = this.isAvailable = !1;
            this.Jb = null;
            this.vb = a
        }
    };
    class JI {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function KI(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function LI(a, b) {
        const c = a.H.filter(d => Rq(d.kd).every(e => d.kd.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.kd.ob() > e.kd.ob() ? d : e, c[0])
    }

    function MI(a, b) {
        b = py(b);
        if (b.isError()) return a.i.push(18), null;
        b = b.getValue();
        if (Pq(a.j, b)) return a.j.get(b);
        var c = us(b);
        c = LI(a, c);
        a.j.set(b, c);
        return c
    }
    var NI = class {
        constructor(a) {
            this.g = a;
            this.j = new Tq;
            this.H = (z(a, xt, 2) ? .g() || []).map(b => {
                const c = us(L(b, 1)),
                    d = ei(b, 2);
                return {
                    kd: c,
                    xh: d,
                    vb: L(b, 1)
                }
            });
            this.i = []
        }
        F() {
            const a = Hp(II);
            var b = this.l();
            a.A = b;
            b = this.C();
            a.H = b;
            b = this.A();
            b != null && (a.l = b);
            b = !!this.g.j() ? .g() ? .g();
            a.F = b;
            b = new Tq;
            for (const c of z(this.g, xt, 2) ? .g() ? ? []) b.set(L(c, 1), ei(c, 2));
            a.i = b
        }
        B() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        C() {
            return [...Zh(this.g, 4, y())]
        }
        A() {
            return z(this.g, rt, 5) ? .g() ? ? null
        }
        I(a) {
            const b = MI(this, a);
            b ? .vb != null &&
                FI(Hp(II), a, b.vb)
        }
        L(a) {
            return a.length == 0 ? !0 : .75 <= (new bs(a)).filter(b => {
                b = MI(this, b) ? .vb || "";
                return b != "" && !(b === cI || b === dI)
            }).count() / a.length
        }
    };

    function OI(a, b) {
        return b.count() == 0 ? b : b.sort((c, d) => (MI(a.g, c) ? .xh ? ? Number.MAX_VALUE) - (MI(a.g, d) ? .xh ? ? Number.MAX_VALUE))
    }

    function PI(a, b) {
        var c = b.ma.g,
            d = Math,
            e = d.min;
        const f = b.ia(),
            g = b.ea.j();
        c += 200 * e.call(d, 20, g == 0 || g == 3 ? KI(f.parentElement) : KI(f));
        a = a.i;
        a.g < 0 && (a.g = fq(a.i).scrollHeight || 0);
        a = a.g - b.ma.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ia();
        return a
    }

    function QI(a, b) {
        return b.count() == 0 ? b : b.sort((c, d) => PI(a, c) - PI(a, d))
    }

    function RI(a, b) {
        return b.sort((c, d) => {
            const e = c.ea.B,
                f = d.ea.B;
            var g;
            e == null || f == null ? g = e == null && f == null ? PI(a, c) - PI(a, d) : e == null ? 1 : -1 : g = e - f;
            return g
        })
    }
    class SI {
        constructor(a, b = null) {
            this.i = new JI(a);
            this.g = b && new NI(b)
        }
    };

    function TI(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = as(e, f.Aa(a.j), UI(f.va(), c));
        f = e = e.apply(Ez(a.j));
        for (const g of b.i) f = as(f, g.Aa(a.j), qs([VI(g.va(), c), h => {
            d ? .g(h, g.va())
        }]));
        switch (b.j) {
            case 1:
                f = QI(a.g, f);
                break;
            case 2:
                f = RI(a.g, f);
                break;
            case 3:
                const g = Hp(II);
                f = OI(a.g, f);
                e.forEach(h => {
                    CI(g, h);
                    a.g.g ? .I(h)
                });
                f.forEach(h => DI(g, h))
        }
        b.A && (f = ds(f, sc(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && fI(a.l, b.g[0], {
            jb: e.count(),
            Rh: f.count()
        });
        return cs(f)
    }
    class WI {
        constructor(a, b, c = null) {
            this.i = new bs(a);
            this.g = new SI(b, c);
            this.j = b;
            this.l = new gI
        }
        count() {
            return this.i.count()
        }
    }
    const UI = (a, b) => c => Px(c, b, a),
        VI = (a, b) => c => Px(c.ea, b, a);

    function XI(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = YI(ZI(c), a);
                    break a;
                case 3:
                    a = YI(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = YI(e ? e.nodeType == 1 ? e : ZI(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !$I(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !Tt(b) && b.offsetWidth <= 0);
        return d
    }

    function YI(a, b) {
        if (!a) return !1;
        a = Ad(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function ZI(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function $I(a) {
        return !!a.nextSibling || !!a.parentNode && $I(a.parentNode)
    };
    var aJ = !Kc && !Fc();

    function bJ(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (aJ && a.dataset) {
            if (Hc() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var cJ = (a, b, c) => {
            if (!b) return null;
            const d = hd(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && e.position != "static") {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if (a.getComputedStyle(g).display != "none") {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = bq(a);
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && c > 0 && g > 0 && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        dJ = a => {
            const b = a.document.body;
            var c = cJ(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; d.length >
                    0;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    h.depth > 0 && g > e && (e = g, f = k);
                    if (h.depth < 5)
                        for (g = 0; g < k.children.length; g++) {
                            const l = k.children[g],
                                m = l.getBoundingClientRect().width;
                            (m == null || c == null ? 0 : m >= c * .9 && m <= c * 1.01) && d.push({
                                element: l,
                                depth: h.depth + 1,
                                height: l.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? cJ(a, c.parentNode || b, c) : null
        },
        fJ = a => {
            let b = 0;
            try {
                b |= $p(a), rd() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), eJ(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        eJ = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if (bJ(a[b]) == "autorelaxed") return !0;
            return !1
        };

    function gJ(a) {
        const b = eq(a, !0),
            c = fq(a).scrollWidth,
            d = fq(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = jq(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let r = 0,
            w = 0,
            D = Infinity,
            C = Infinity,
            F = null;
        var E = bz({
            Gb: !1
        }, a);
        for (var A of E) {
            E = A.getBoundingClientRect();
            const fa = b - (E.bottom + f);
            var J = void 0,
                H = void 0;
            if (A.className && A.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                J = A.getAttribute("google_element_uid");
                H = a.google_sv_map;
                if (!J ||
                    !H || !H[J]) continue;
                J = (H = Cl(H[J])) ? H.height : 0;
                H = H ? H.width : 0
            } else if (J = E.bottom - E.top, H = E.right - E.left, J <= 1 || H <= 1) continue;
            g.push(J);
            k.push(H);
            l.push(J * H);
            A.className && A.className.indexOf("google-auto-placed") != -1 ? (w += 1, A.className && A.className.indexOf("pedestal_container") != -1 && (F = J)) : (D = Math.min(D, fa), n.push(E), r += 1, h.push(J), m.push(J * H));
            C = Math.min(C, fa);
            p.push(E)
        }
        D = D === Infinity ? null : D;
        C = C === Infinity ? null : C;
        f = hJ(n);
        p = hJ(p);
        h = iJ(b, h);
        n = iJ(b, g);
        m = iJ(b * c, m);
        A = iJ(b * c, l);
        return new jJ(a, {
            Xi: e,
            Gf: b,
            Xj: c,
            Wj: d,
            Jj: r,
            ti: w,
            vi: kJ(g),
            wi: kJ(k),
            ui: kJ(l),
            Rj: f,
            Qj: p,
            Pj: D,
            Oj: C,
            Re: h,
            Qe: n,
            ni: m,
            mi: A,
            Zj: F
        })
    }

    function lJ(a, b, c, d) {
        const e = rd() && !(aq(a.i) >= 900);
        d = Oa(d, f => Sa(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.Xi,
            pg_h: mJ(a.g.Gf),
            pg_w: mJ(a.g.Xj),
            pg_hs: mJ(a.g.Wj),
            c: mJ(a.g.Jj),
            aa_c: mJ(a.g.ti),
            av_h: mJ(a.g.vi),
            av_w: mJ(a.g.wi),
            av_a: mJ(a.g.ui),
            s: mJ(a.g.Rj),
            all_s: mJ(a.g.Qj),
            b: mJ(a.g.Pj),
            all_b: mJ(a.g.Oj),
            d: mJ(a.g.Re),
            all_d: mJ(a.g.Qe),
            ard: mJ(a.g.ni),
            all_ard: mJ(a.g.mi),
            pd_h: mJ(a.g.Zj),
            dt: e ? "m" : "d"
        }
    }
    class jJ {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function kJ(a) {
        return vb.apply(null, Oa(a, b => b > 0)) || null
    }

    function iJ(a, b) {
        return a <= 0 ? null : ub.apply(null, b) / a
    }

    function hJ(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function mJ(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function nJ(a) {
        var b = dz({
            Gb: !1,
            yd: !1
        }, a);
        a = (bq(a) || 0) - jq(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            jz(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function oJ(a) {
        const b = {};
        var c = dz({
            Gb: !1,
            yd: !1,
            mf: !1,
            nf: !1
        }, a).map(d => d.getBoundingClientRect()).filter(jz);
        b.fg = c.length;
        c = ez({
            mf: !0
        }, a).map(d => d.getBoundingClientRect()).filter(jz);
        b.Ag = c.length;
        c = ez({
            nf: !0
        }, a).map(d => d.getBoundingClientRect()).filter(jz);
        b.jh = c.length;
        c = ez({
            yd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(jz);
        b.kg = c.length;
        c = (bq(a) || 0) - jq(a);
        c = dz({
            Gb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(jz).filter(Da(pJ, null, c));
        b.gg = c.length;
        a = gJ(a);
        c = a.g.Re != null ? a.g.Re : null;
        c !=
            null && (b.ah = c);
        a = a.g.Qe != null ? a.g.Qe : null;
        a != null && (b.hg = a);
        return b
    }

    function wH(a, b, {
        Gd: c,
        ne: d,
        Ie: e
    } = {}) {
        return rx(997, () => qJ(a, b, {
            Gd: c,
            ne: d,
            Ie: e
        }), a.g)
    }

    function xH(a, b, c, d) {
        var e = c.ib ? c.ib : a.B;
        const f = Jy(e, b.g.length);
        e = a.A.ig ? e.g : void 0;
        const g = aI(bI(YH($H(ZH(XH(VH(WH(TH(UH(RH(c.types), a.sa), c.Mf || []), a.na), c.lk || [])), f.Ic || void 0, e, b), c.minWidth, c.maxWidth)), f.rb || void 0));
        a.W && g.g.push(new FH(a.W));
        b = 1;
        a.qb() && (b = 3);
        g.orderBy(b);
        a.A.Ih && (g.l = !0);
        return rx(995, () => TI(a.i, g.build(), d, a.C || void 0), a.g)
    }

    function yH(a, b) {
        const c = dJ(a.g);
        if (c) {
            const d = Cs(a.L, b),
                e = Yw(a.g.document, a.I, null, null, {}, d);
            e && (Nw(e.mb, c, 2, 256), rx(996, () => rJ(a, e, d), a.g))
        }
    }

    function sJ(a) {
        return a.F ? a.F : a.F = a.g.google_ama_state
    }

    function qJ(a, b, {
        Gd: c,
        ne: d,
        Ie: e
    } = {}) {
        const f = b.ea;
        if (f.l) return !1;
        var g = b.ia(),
            h = f.j();
        if (!XI(a.g, h, g, a.j)) return !1;
        h = null;
        f.Bc ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new Ds(null, {
            google_max_responsive_height: c == null ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = c == null ? null : new Ds(null, {
            google_max_responsive_height: c
        });
        c = Es(ci(f.ce, 2) || 0);
        g = Fs(f.B);
        const k = tJ(a, f),
            l = uJ(a),
            m = Cs(a.L, f.R ? f.R.g(b.ma) : null, h, d || null, c, g, k, l),
            n = b.fill(a.I, m);
        if (e && !vJ(a, n, m) || !rx(996,
                () => rJ(a, n, m), a.g)) return !1;
        Wk(9, [f.B, f.Ib]);
        a.qb() && EI(Hp(II), b);
        return !0
    }

    function tJ(a, b) {
        return js(ns(ny(b).map(Gs), () => {
            a.l.push(18)
        }))
    }

    function uJ(a) {
        if (!a.qb()) return null;
        var b = a.i.g.g ? .C();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .A() ? ? null;
        return Hs({
            Oi: b,
            ej: a
        })
    }

    function vJ(a, b, c) {
        if (!b) return !1;
        var d = b.ta,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.ta;
        c = c && c.xc() || {};
        var g = X(iu);
        if (d !== d.top) g = xd(d) ? 3 : 16;
        else if (aq(d) < 488)
            if (d.innerHeight >= d.innerWidth) {
                var h = aq(d);
                if (!h || (h - f) / h > g) g = 6;
                else {
                    if (g = c.google_full_width_responsive !== "true") b: {
                        h = e.parentElement;
                        for (g = aq(d); h; h = h.parentElement) {
                            const k = Ad(h, d);
                            if (!k) continue;
                            const l = Ld(k.width);
                            if (l && !(l >= g) && k.overflow !== "visible") {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
            } else g = 5;
        else g =
            4;
        if (g !== !0) f = g;
        else {
            if (!(c = c.google_full_width_responsive === "true")) a: {
                do
                    if ((c = Ad(e, d)) && c.position == "fixed") {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = aq(d), f = d - f, f = d && f >= 0 ? !0 : d ? f < -10 ? 11 : f < 0 ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.ta;
            if (d = Uw(a, b)) f = b.style, f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none", f.borderSpacing = f.padding = "0", Sw(b, d, "0px"), f.width = `${aq(a)}px`, Vw(a, b, d), f.zIndex = "30";
            return !0
        }
        Xt(b.mb);
        return !1
    }

    function rJ(a, b, c) {
        if (!b) return !1;
        try {
            bx(a.g, b.ta, c)
        } catch (d) {
            return Xt(b.mb), a.l.push(6), !1
        }
        return !0
    }
    class wJ {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.i = a;
            this.I = b;
            this.g = c;
            this.B = d.ib;
            this.sa = d.tc || [];
            this.L = d.gj || null;
            this.na = d.Si || [];
            this.W = d.pe || [];
            this.A = e;
            this.j = !1;
            this.R = [];
            this.l = [];
            this.H = this.F = void 0;
            this.yb = f;
            this.C = g ? new hH : null
        }
        da() {
            return this.g
        }
        xa(a) {
            this.R.push(a)
        }
        qb() {
            if ((this.i.g.g ? .l().length ? ? 0) == 0) return !1;
            if (this.H === void 0) {
                const a = YH(XH(RH([0, 1, 2]))).orderBy(1).build(),
                    b = rx(995, () => TI(this.i, a), this.g);
                this.H = this.i.g.g ? .L(b) || !1
            }
            return this.H
        }
        sf() {
            return !!this.A.Dh
        }
        Cd() {
            return !eJ(this.g)
        }
        Ra() {
            return this.C
        }
    }
    const pJ = (a, b) => b.top <= a;

    function xJ(a, b, c, d, e, f = 0, g = 0) {
        this.Ta = a;
        this.Yd = f;
        this.Xd = g;
        this.errors = b;
        this.wb = c;
        this.g = d;
        this.i = e
    };
    var yJ = (a, {
        Cd: b = !1,
        sf: c = !1,
        pk: d = !1,
        qb: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function zJ(a, b, c) {
        a = yJ(a, {
            Cd: b.Cd(),
            sf: b.sf(),
            pk: !!b.A.ef,
            qb: b.qb()
        });
        return new AJ(a, b, c)
    }

    function BJ(a, b) {
        const c = tH[b];
        return c ? rx(998, () => c(a.g), a.A) : (a.g.xa(12), !0)
    }

    function CJ(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(BJ(a, b))
            })
        })
    }

    function DJ(a) {
        a.g.j = !0;
        return Promise.all(a.i.map(b => CJ(a, b))).then(b => {
            b.includes(!1) && a.g.xa(5);
            a.i.splice(0, a.i.length)
        })
    }
    class AJ {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = Ta(this.i, 1);
            this.g = b;
            this.A = c
        }
    };
    const EJ = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function FJ(a) {
        return DJ(a).then(() => {
            var b = a.g.i.i.filter(Mx).count();
            var c = a.g.R.slice(0);
            var d = a.g;
            d = [...d.l, ...(d.i.g.g ? .B() || [])];
            b = new xJ(b, c, d, a.g.i.count(), a.g.i.l.g, a.g.i.i.filter(Mx).filter(Nx).count(), a.g.i.i.filter(Nx).count());
            return new EJ(b)
        })
    };
    class GJ {
        g() {
            return new Ds([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class HJ {
        g() {
            return new Ds(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function IJ(a) {
        return Ut(a.g.document).map(b => {
            const c = new Cx(b, 3);
            b = new Ex(dx(a.g, b));
            return new Ix(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class JJ {
        constructor(a) {
            var b = new HJ;
            this.g = a;
            this.i = b || null
        }
    };
    const KJ = {
        bg: "10px",
        Fe: "10px"
    };

    function LJ(a) {
        return Oq(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Ix(new Cx(b, 1), new Ax(KJ), a.i, !1, 0, [], null, a.g, null))
    }
    class MJ {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function NJ(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ia(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        oI(a.i, "cnstr", c, 80)
    }
    var OJ = class extends jI {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    };

    function PJ(a, b) {
        return a == null ? b + "ShouldNotBeNull" : a == 0 ? b + "ShouldNotBeZero" : a < -1 ? b + "ShouldNotBeLessMinusOne" : null
    }

    function QJ(a, b, c) {
        const d = PJ(c.vd, "gapsMeasurementWindow") || PJ(c.wc, "gapsPerMeasurementWindow") || PJ(c.Ec, "maxGapsToReport");
        return d != null ? hs(d) : c.jg || c.wc != -1 || c.Ec != -1 ? fs(new RJ(a, b, c)) : hs("ShouldHaveLimits")
    }

    function SJ(a) {
        return sJ(a.j) && sJ(a.j).placed || []
    }

    function TJ(a) {
        return SJ(a).map(b => Ur(Sr(b.element, a.g)))
    }

    function UJ(a) {
        return SJ(a).map(b => b.index)
    }

    function VJ(a, b) {
        const c = b.ea;
        return !a.C && c.i && ci(c.i, 8) != null && ci(c.i, 8) == 1 ? [] : c.l ? (c.H || []).map(d => Ur(Sr(d, a.g))) : [Ur(new Tr(b.ma.g, 0))]
    }

    function WJ(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new Tr(c, f - c)), c = d)
        }
        return b
    }

    function XJ(a, b) {
        b = b.map(c => {
            var d = new $G;
            return si(d, 1, c.g).setHeight(c.getHeight())
        });
        return bH(aH(new cH, a), b)
    }

    function YJ(a) {
        const b = Th(a, $G, 2, y()).map(c => `G${di(c,1)}~${c.getHeight()}`);
        return `W${di(a,1)}${b.join("")}`
    }

    function ZJ(a, b) {
        const c = [];
        let d = 0;
        for (const e of Rq(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.B && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(XJ(e, f));
            d += f.length;
            if (!a.B && d >= a.i) break
        }
        return c
    }

    function $J(a) {
        const b = Th(a, cH, 5, y()).map(c => YJ(c));
        return `M${di(a,1)}H${di(a,2)}C${di(a,3)}B${Number(!!K(a,4))}${b.join("")}`
    }

    function aK(a) {
        var b = sy(cs(a.j.i.i), a.g),
            c = TJ(a),
            d = new Uq(UJ(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = VJ(a, b[e]);
                c.push(...f)
            }
        c.push(new Tr(0, 0));
        c.push(Ur(new Tr(fq(a.g).scrollHeight, 0)));
        b = WJ(c);
        c = new Tq;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.I ? 0 : Math.floor(e.g / a.l), Pq(c, f) || c.set(f, []), c.get(f).push(e);
        b = ZJ(a, c);
        c = new dH;
        c = si(c, 1, a.i);
        c = si(c, 2, a.l);
        c = si(c, 3, a.A);
        a = ri(c, 4, a.C);
        return Uh(a, 5, b)
    }

    function bK(a) {
        a = aK(a);
        return $J(a)
    }
    var RJ = class {
        constructor(a, b, c) {
            this.I = c.vd == -1;
            this.l = c.vd;
            this.F = c.wc == -1;
            this.A = c.wc;
            this.B = c.Ec == -1;
            this.i = c.Ec;
            this.C = c.Rg;
            this.j = b;
            this.g = a
        }
    };

    function Lt(a, b, c) {
        let d = b.Ya;
        b.Hb && W(Gu) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.pb || "pvc" in c || (c.pvc = de(a.g)), Vy(b.Eb, c, d))
    }

    function cK(a, b, c) {
        c = c.l(a.g);
        b.pb && (c.pvc = de(a.g));
        0 <= b.Ya && (c.r = b.Ya, Lt(a, b, c))
    }
    var dK = class {
        constructor(a) {
            this.g = a
        }
    };
    const eK = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function fK(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Vy("ama", b, .01)
    }

    function gK(a) {
        const b = {};
        Cd(eK, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function hK(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function iK(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function jK(a, b) {
        a = ki(a, 2, y());
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function kK(a, b) {
        a = iK(hK(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Ed(a),
            d = lK(a);
        return b.find(e => {
            const f = wh(e, Ps, 7) ? Tf(rh(z(e, Ps, 7), 1)) : Tf(rh(e, 1));
            e = wh(e, Ps, 7) ? ci(z(e, Ps, 7), 2) : 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function lK(a) {
        const b = {};
        for (;;) {
            b[Ed(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function mK(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            fK(a, {
                lserr: 1
            })
        }
    };
    var oK = (a, b, c, d, e, f, g = null, h = null) => {
            nK(a, new dK(a), b, c, d, e, f, g, h)
        },
        nK = (a, b, c, d, e, f, g, h = null, k = null) => {
            if (c)
                if (d) {
                    var l = JC(d, e);
                    try {
                        const m = new pK(a, b, c, d, e, l, f, g, h, k);
                        rx(990, () => qK(m), a)
                    } catch (m) {
                        Vk() && Wk(15, [m]), cK(b, Ft, iI(lI(kI((new mI(0)).Oc(c), d), l).xa(1), m)), nF(cF(), mn(new un, Fm(1)))
                    }
                } else cK(b, Ft, (new mI(0)).Oc(c).xa(8)), nF(cF(), mn(new un, Fm(8)));
            else cK(b, Ft, (new mI(0)).xa(9)), nF(cF(), mn(new un, Fm(9)))
        };

    function qK(a) {
        a.H.forEach(b => {
            switch (b) {
                case 0:
                    rx(991, () => rK(a), a.g);
                    break;
                case 1:
                    rx(1073, () => {
                        CC(new IC(a.g, a.C, a.j, a.A, a.i.ca))
                    }, a.g);
                    break;
                case 2:
                    sK(a);
                    break;
                case 7:
                    rx(1203, () => {
                        var c = z(a.j, qt, 34);
                        if (c) {
                            var d = a.g,
                                e = a.A,
                                f = c.i();
                            c = d.location.hostname;
                            var g = z(f, pt, 1) ? .g() ? ? [];
                            c = new YG(e, c, de(t), g);
                            if (g = z(f, pt, 1))
                                if (f = z(f, ot, 2)) {
                                    Wr(d, GG);
                                    const l = new Zq;
                                    var h = d.innerWidth;
                                    var k = .375 * h;
                                    h = new WC(k, h - k);
                                    k = d.innerWidth;
                                    k = aq(d) >= 900 ? .2 * k : .5 * k;
                                    (new TG(d, e, g, f, new zG(d, h, k, l, new jG(l)), c)).run()
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g);
                    break;
                case 6:
                    rx(1270, () => a.runAutoGames(), a.g)
            }
        })
    }

    function rK(a) {
        var b = W(tu) ? void 0 : a.i.bk;
        let c = null;
        c = W(tu) ? Hy(a.g) : Fy(a.g, b);
        if (a.i.ca && wh(a.i.ca, Os, 10)) {
            var d = Ah(a.i.ca.g(), 1);
            d !== null && d !== void 0 && (c = wy(a.g, d, b));
            W(Ku) && a.i.ca.g() ? .g() === 2 && (c = Ey(a.i.ca.g(), c))
        }
        wh(a.j, Ls, 26) && (c = Ky(c, z(a.j, Ls, 26), a.g));
        c = My(c, a.g);
        b = a.i.ca ? ki(a.i.ca, 6, y(zf)) : [];
        d = a.i.ca ? Th(a.i.ca, Us, 5, y(zf)) : [];
        const e = a.i.ca ? ki(a.i.ca, 2, y(zf)) : [],
            f = rx(993, () => {
                var g = a.j,
                    h = Th(g, mt, 1, y(zf)),
                    k = a.i.ca && jK(a.i.ca, 1) ? "text_image" : "text",
                    l = new GJ,
                    m = Hx(h, a.g, {
                        xi: l,
                        xj: new Fx(k)
                    });
                h.length !=
                    m.length && a.F.push(13);
                m = m.concat(LJ(new MJ(a.g, l)));
                h = W(Hu);
                l = z(g, yt, 24) ? .j() ? .g() ? .g() || !1;
                if (h || l) h = IJ(new JJ(a.g)), l = Hp(II), m = m.concat(h), l.R = !0, l.B = h.length, a.I === "n" && (a.I = z(g, yt, 24) ? .g() ? .length ? "o" : "p");
                h = W(Ku) && a.i.ca.g() ? .g() === 2 && a.i.ca.g() ? .j();
                h = W(ru) || h;
                a: {
                    if (l = g.getMetadata())
                        for (n of l.g())
                            if (wh(n, ss, 4)) {
                                var n = !0;
                                break a
                            }
                    n = !1
                }
                h && n ? (n = m.concat, h = a.g, (l = g.getMetadata()) ? (h = ky(l.g(), h), k = ZG(g, k, h)) : k = [], k = n.call(m, k)) : (n = m.concat, h = a.g, (l = g.getMetadata()) ? (h = jy(l.g(), h), k = ZG(g, k, h)) :
                    k = [], k = n.call(m, k));
                m = k;
                g = z(g, yt, 24);
                return new WI(m, a.g, g)
            }, a.g);
        a.l = new wJ(f, a.A, a.g, {
            ib: c,
            gj: a.R,
            tc: a.i.tc,
            Si: b,
            pe: d
        }, tK(a), e, W(Gu));
        sJ(a.l) ? .optimization ? .ablatingThisPageview && !a.l.qb() && (cx(a.g), Hp(II).C = !0, a.I = "f");
        a.B = zJ(e, a.l, a.g);
        rx(992, () => FJ(a.B), a.g).then(rx(994, () => a.sa.bind(a), a.g), a.na.bind(a))
    }

    function sK(a) {
        const b = z(a.j, nt, 18);
        b && (new xF(a.g, new hG(a.g, a.A), b, new VA(a.g), Th(a.j, mt, 1, y(zf)))).run()
    }

    function tK(a) {
        const b = W(Ju);
        if (!a.j.g()) return {
            Ih: b,
            Cg: !1,
            Dh: !1,
            ak: 0,
            sh: 0,
            ig: uK(a),
            ef: a.L
        };
        const c = a.j.g();
        return {
            Ih: b || K(c, 14, !1),
            Cg: K(c, 5, !1),
            Dh: K(c, 6, !1),
            ak: gi(c, 8, 0),
            sh: ci(c, 10),
            ig: uK(a),
            ef: a.L
        }
    }

    function uK(a) {
        return W(Au) || W(Ku) && a.i.ca ? .g() ? .g() === 2 ? !1 : a.i.ca && wh(a.i.ca, Os, 10) ? (Ah(a.i.ca.g(), 1) || 0) >= .5 : !0
    }

    function vK(a, b) {
        for (var c = hI(hI(new mI(b.Ta), b.errors), a.F), d = b.wb, e = 0; e < d.length; e++) a: {
            for (var f = c, g = d[e], h = 0; h < f.C.length; h++)
                if (f.C[h] == g) break a;f.C.push(g)
        }
        c.g.pp = b.Xd;
        c.g.ppp = b.Yd;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.lc;
        c.g.eatfAbg = b.mc;
        c.g.reatf = b.Fb;
        c = lI(kI(c.H(a.B.l.slice(0)), a.j), a.H).Oc(a.A);
        if (d = b.Fa) c.g.as_count = d.fg, c.g.d_count = d.Ag, c.g.ng_count = d.jh, c.g.am_count = d.kg, c.g.atf_count = d.gg, c.g.mdns = nI(d.ah), c.g.alldns = nI(d.hg);
        c = c.I(b.Ob).Gh(b.rd);
        d = b.Gf;
        d != null && (c.g.pgh = d);
        c.g.abl = b.Mg;
        c.g.rr = a.I;
        b.exception !== void 0 && iI(c, b.exception).xa(1);
        return c
    }

    function wK(a, b) {
        var c = vK(a, b);
        cK(a.C, b.errors.length > 0 || a.F.length > 0 || b.exception !== void 0 ? Ft : Et, c);
        if (z(a.j, yt, 24)) {
            a.l.i.g.g ? .F();
            b = sJ(a.l);
            const d = Hp(II);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.I = !0);
            d.W = !!b ? .optimization ? .availableAbg;
            b = Hp(II);
            c = new zI(c);
            b.A ? (c.i.sl = pI(b.A ? ? []), c.i.daaos = pI(b.H ? ? []), c.i.ab = qI(b.I), c.i.rr = qI(b.R), c.i.oab = qI(b.F), b.j != null && (c.i.sab = qI(b.j)), b.C && (c.i.fb = qI(b.C)), c.i.ls = qI(b.W), rI(c, b.i.ob()), b.B != null && (c.i.rp = qI(b.B)),
                b.l != null && (c.i.expl = qI(b.l)), HI(b, c)) : c.errors.push("irr");
            cK(a.C, Ht, c)
        }
        c = a.l ? .Ra();
        W(Gu) && c != null && (c = new Map([...c.j.map.entries()].map(rG)), b = new OJ, NJ(b, c), cK(a.C, Jt, b))
    }

    function xK(a, b) {
        const c = cF();
        if (c.g) {
            var d = new un,
                e = b.wb.filter(g => g !== null),
                f = a.F.concat(b.errors, b.exception ? [1] : []).filter(g => g !== null);
            qn(on(tn(sn(rn(pn(jn(ln(nn(kn(d, a.B.l.slice(0).map(g => {
                var h = new Em;
                return yi(h, 1, g)
            })), e.map(g => {
                var h = new Hm;
                return yi(h, 1, g)
            })), f.map(g => Fm(g))), z(a.j, Ys, 23) ? .g()), b.Ta).I(b.Ob), b.Fb), b.lc), b.mc), a.H.map(g => g.toString())), Om(Nm(Mm(Lm(Km(Jm(Im(new Pm, b.Fa ? .fg), b.Fa ? .Ag), b.Fa ? .jh), b.Fa ? .kg), b.Fa ? .gg), b.Fa ? .ah), b.Fa ? .hg));
            if (b.rd)
                for (let g of Rq(b.rd)) {
                    e = new Ih;
                    for (let h of b.rd.get(g)) Tm(e, Rm(Qm(new Sm, h.jb), h.Rh));
                    Hh(d).set(g.toString(), e)
                }
            z(a.j, yt, 24) && gn(d);
            nF(c, d)
        }
    }

    function yK(a, b, c) {
        {
            var d = sJ(a.l),
                e = b.g;
            const f = e.g,
                g = e.Xd;
            let h = e.Ta,
                k = e.Yd,
                l = e.errors.slice(),
                m = e.wb.slice(),
                n = b.exception;
            const p = VE(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.B.j && m.push(13), d.exception !== void 0 && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Ta: h,
                Xd: g,
                Yd: k,
                Ob: f,
                errors: e.errors.slice(),
                wb: m,
                exception: n,
                Fb: c,
                lc: !!d.eatf,
                mc: !!d.eatfAbg,
                Mg: p
            }) : (m.push(12), a.B.j && m.push(13), c = {
                Ta: h,
                Xd: g,
                Yd: k,
                Ob: f,
                errors: l,
                wb: m,
                exception: n,
                Fb: c,
                lc: !1,
                mc: !1,
                Mg: p
            })
        }
        c.Fa = oJ(a.l.g);
        if (b = b.g.i) c.rd = b;
        c.Gf = fq(a.g).scrollHeight;
        if (Vk() || z(a.j, Xs, 25) ? .j()) {
            d = cs(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of Rq(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.I.g(f.g),
                    position: f.j(),
                    clearBoth: f.F,
                    locationType: f.Ib,
                    placed: f.l,
                    placementProto: f.i ? Ci(f.i) : null,
                    articleStructure: f.A ? Ci(f.A) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Wk(14, [{
                placementIdentifiers: b
            }, a.l.I, c.Fa])
        }
        return c
    }

    function zK(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Ob;
        c.numAutoAdsPlaced = b.Ta;
        c.hasAtfAd = b.Fb;
        b.exception !== void 0 && (c.exception = b.exception);
        a.l != null && (a = QJ(a.g, a.l, {
            vd: -1,
            wc: -1,
            Ec: -1,
            Rg: !0,
            jg: !0
        }), a.g != null ? (c.placementPositionDiffs = bK(a.getValue()), b = aK(a.getValue()), a = new eH, a = G(a, 2, fH, b), c.placementPositionDiffsReport = Bi(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new eH, a = Lh(a, 1, fH, ng(b)), c.placementPositionDiffsReport = Bi(a)))
    }

    function AK(a, b) {
        wK(a, {
            Ta: 0,
            Ob: void 0,
            errors: [],
            wb: [],
            exception: b,
            Fb: void 0,
            lc: void 0,
            mc: void 0,
            Fa: void 0
        });
        xK(a, {
            Ta: 0,
            Ob: void 0,
            errors: [],
            wb: [],
            exception: b,
            Fb: void 0,
            lc: void 0,
            mc: void 0,
            Fa: void 0
        })
    }
    class pK {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.g = a;
            this.C = b;
            this.A = c;
            this.j = d;
            this.i = e;
            this.H = f;
            this.R = k || null;
            this.F = [];
            this.L = l;
            this.Ra = g;
            this.W = h;
            this.I = "n"
        }
        runAutoGames() {
            const a = z(this.j, Zs, 32);
            a && this.W.runAutoGames({
                win: this.g,
                webPropertyCode: this.A,
                config: a.i(),
                floatingToolbarManager: VD(this.g, z(this.j, ft, 33) ? .g() ? .i() ? ? null),
                ri: this.j.getMetadata() ? .g() ? ? [],
                Xa: Th(this.j, mt, 1, y()) ? ? [],
                storage: this.Ra ? ? void 0
            })
        }
        sa(a) {
            try {
                const b = nJ(this.l.g) || void 0;
                Dt({
                    Ve: b
                }, this.g);
                const c = yK(this, a, nJ(this.l.g));
                wh(this.j, Xs, 25) && ai(z(this.j, Xs, 25), 1) && zK(this, c);
                wK(this, c);
                xK(this, c);
                Uy(753, () => {
                    if (W(uu) && this.l != null) {
                        var d = QJ(this.g, this.l, {
                                vd: X(Fu),
                                wc: X(Eu),
                                Ec: X(wu),
                                Rg: !0,
                                jg: !1
                            }),
                            e = Fb(c);
                        d.g != null ? (d = bK(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = vK(this, e);
                        cK(this.C, Gt, e)
                    }
                })()
            } catch (b) {
                AK(this, b)
            }
        }
        na(a) {
            AK(this, a)
        }
    };
    var BK = class extends O {},
        CK = rk(BK);

    function DK(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? is(() => CK(c)) : fs(null)
    };

    function EK(a) {
        this.g = a || {
            cookie: ""
        }
    }
    q = EK.prototype;
    q.isEnabled = function() {
        if (!t.navigator.cookieEnabled) return !1;
        if (!this.isEmpty()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            maxAge: 60
        });
        if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    q.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.sameSite, g = c.secure || !1, f = c.domain || void 0, e = c.path || void 0, d = c.maxAge);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h :
            "")
    };
    q.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Ib(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    q.remove = function(a, b, c) {
        const d = this.get(a) !== void 0;
        this.set(a, "", {
            maxAge: 0,
            path: b,
            domain: c
        });
        return d
    };
    q.isEmpty = function() {
        return !this.g.cookie
    };
    q.ob = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    q.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Ib(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) this.remove(b[a])
    };

    function FK(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }
    let GK;

    function HK(a) {
        return GK ? GK : a.origin === "null" ? GK = !1 : GK = IK(a)
    }

    function IK(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new EK(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            maxAge: 60,
            sameSite: a.isSecureContext ? "none" : void 0,
            secure: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        b.remove("TESTCOOKIESENABLED");
        return !0
    }

    function JK(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new EK({
            cookie: b
        })).get(a) || ""
    }

    function KK(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            sameSite: "none",
            secure: !0
        }), (new EK(d.document)).set(a, b, c))
    };

    function LK(a, b) {
        return ri(a, 5, b)
    }

    function MK(a, b) {
        return ri(a, 8, b)
    }

    function NK(a, b) {
        return ri(a, 12, b)
    }
    var OK = class extends O {
        constructor() {
            super()
        }
        l() {
            return I(this, 1) != null
        }
        j() {
            return I(this, 2) != null
        }
        A() {
            return K(this, 3)
        }
        g() {
            return K(this, 5)
        }
    };
    var RK = ({
        win: a,
        Ka: b,
        Pg: c = !1,
        Qg: d = !1
    }) => PK({
        win: a,
        Ka: b,
        Pg: c,
        Qg: d
    }) ? (b = LE(GE(), 24)) ? QK(a, LK(new OK, WF(b))) : new gs(null, Error("tcunav")) : QK(a, LK(new OK, !0));

    function PK({
        win: a,
        Ka: b,
        Pg: c,
        Qg: d
    }) {
        if (!(d = !d && aG(new eG(a)))) {
            if (c = !c) {
                if (b) {
                    a = DK(a);
                    if (a.isError()) Y.aa(806, a.i, void 0, void 0), a = !1;
                    else if ((a = a.getValue()) && ci(a, 1) != null) b: switch (a = ci(a, 1), a) {
                        case 1:
                            a = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                    } else a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function QK(a, b) {
        return (a = FK(b, a)) ? fs(a) : new gs(null, Error("unav"))
    };
    var SK = class extends O {};
    class TK {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.C = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
        run() {
            const a = z(this.C, nt, 1);
            if (this.i) {
                var b = this.g;
                if (this.j && !yE(a)) {
                    var c = new BK;
                    c = yi(c, 1, 1)
                } else c = null;
                if (c) {
                    c = Bi(c);
                    try {
                        b.localStorage.setItem("google_auto_fc_cmp_setting", c)
                    } catch (d) {}
                }
            }
            b = yE(a) && (this.j || this.A);
            a && b && (new xF(this.g, new hG(this.g, this.l), a, new VA(this.g))).run()
        }
    };
    var UK = class extends O {
        constructor() {
            super()
        }
        getName() {
            return hi(this, 1)
        }
        getVersion() {
            return L(this, 3)
        }
    };
    var VK = [0, mk, -1, gk];
    var WK = class extends O {
        constructor() {
            super()
        }
        mj() {
            return hi(this, 3)
        }
    };
    const XK = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var YK = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return di(this, 2)
        }
    };

    function ZK(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function $K(a) {
        return re(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function aL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function bL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function cL(a, b) {
        a = $K(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function dL(a) {
        var b = $K(a),
            c = aL(b.slice(0, 6));
        a = aL(b.slice(6, 12));
        var d = new YK;
        c = ti(d, 1, c);
        a = ti(c, 2, a);
        b = b.slice(12);
        c = aL(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = aL(e[0]) === 0;
            e = e.slice(1);
            var g = eL(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = bL(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = eL(e, b);
                g = bL(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Jh(a, 3, d, Qf)
    }

    function eL(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var fL = class extends O {
        constructor() {
            super()
        }
    };
    var gL = class extends O {
        constructor() {
            super()
        }
    };
    var hL = class extends O {
        getVersion() {
            return di(this, 1)
        }
    };
    var iL = class extends O {
        constructor() {
            super()
        }
    };

    function jL(a) {
        var b = new kL;
        return B(b, 1, a)
    }
    var kL = class extends O {
        constructor() {
            super()
        }
    };
    const lL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        mL = 6 + lL.reduce((a, b) => a + b);

    function nL(a) {
        if (a.length === 0) throw Error("Cannot decode empty USCA section string.");
        var b = a.split(".");
        if (b.length > 2) throw Error(`Expected at most 1 sub-section but got ${b.length-1} when decoding ${a}.`);
        a = b[0];
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = cL(a, mL),
            d = aL(c.slice(0, 6));
        c = c.slice(6);
        if (d !== 1) throw Error(`Unable to decode unsupported USCA Section specification version ${d} - only version 1 is supported.`);
        var e = 0;
        a = [];
        for (let f = 0; f < lL.length; f++) {
            const g =
                lL[f];
            a.push(aL(c.slice(e, e + g)));
            e += g
        }
        c = new hL;
        d = ti(c, 1, d);
        c = a.shift();
        d = N(d, 2, c);
        c = a.shift();
        d = N(d, 3, c);
        c = a.shift();
        d = N(d, 4, c);
        c = a.shift();
        d = N(d, 5, c);
        c = a.shift();
        d = N(d, 6, c);
        c = new gL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        e = a.shift();
        c = N(c, 4, e);
        e = a.shift();
        c = N(c, 5, e);
        e = a.shift();
        c = N(c, 6, e);
        e = a.shift();
        c = N(c, 7, e);
        e = a.shift();
        c = N(c, 8, e);
        e = a.shift();
        c = N(c, 9, e);
        d = B(d, 7, c);
        c = new fL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        d = B(d, 8, c);
        c = a.shift();
        d = N(d, 9, c);
        c = a.shift();
        d = N(d, 10, c);
        c = a.shift();
        d = N(d, 11, c);
        a = a.shift();
        a = N(d, 12, a);
        if (b.length === 1) b = jL(a);
        else {
            a = jL(a);
            b = b[1];
            if (b.length === 0) throw Error("Cannot decode empty GPC segment string.");
            d = cL(b, 3);
            b = aL(d.slice(0, 2));
            if (b < 0 || b > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            d = aL(d.charAt(2));
            c = new iL;
            b = N(c, 2, b);
            b = M(b, 1, !!d);
            b = B(a, 2, b)
        }
        return b
    };
    var oL = class extends O {
        constructor() {
            super()
        }
    };
    var pL = class extends O {
        getVersion() {
            return di(this, 1)
        }
    };
    var qL = class extends O {
        constructor() {
            super()
        }
    };

    function rL(a) {
        var b = new sL;
        return B(b, 1, a)
    }
    var sL = class extends O {
        constructor() {
            super()
        }
    };
    const tL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        uL = 6 + tL.reduce((a, b) => a + b);

    function vL(a) {
        if (a.length === 0) throw Error("Cannot decode empty USCO section string.");
        var b = a.split(".");
        if (b.length > 2) throw Error(`Expected at most 2 segments but got ${b.length} when decoding ${a}.`);
        a = b[0];
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = cL(a, uL),
            d = aL(c.slice(0, 6));
        c = c.slice(6);
        if (d !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${d} - only version 1 is supported.`);
        var e = 0;
        a = [];
        for (let f = 0; f < tL.length; f++) {
            const g =
                tL[f];
            a.push(aL(c.slice(e, e + g)));
            e += g
        }
        c = new pL;
        d = ti(c, 1, d);
        c = a.shift();
        d = N(d, 2, c);
        c = a.shift();
        d = N(d, 3, c);
        c = a.shift();
        d = N(d, 4, c);
        c = a.shift();
        d = N(d, 5, c);
        c = a.shift();
        d = N(d, 6, c);
        c = new oL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        e = a.shift();
        c = N(c, 4, e);
        e = a.shift();
        c = N(c, 5, e);
        e = a.shift();
        c = N(c, 6, e);
        e = a.shift();
        c = N(c, 7, e);
        d = B(d, 7, c);
        c = a.shift();
        d = N(d, 8, c);
        c = a.shift();
        d = N(d, 9, c);
        c = a.shift();
        d = N(d, 10, c);
        a = a.shift();
        a = N(d, 11, a);
        if (b.length === 1) b = rL(a);
        else {
            a = rL(a);
            b = b[1];
            if (b.length ===
                0) throw Error("Cannot decode empty GPC segment string.");
            d = cL(b, 3);
            b = aL(d.slice(0, 2));
            if (b < 0 || b > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            d = aL(d.charAt(2));
            c = new qL;
            b = N(c, 2, b);
            b = M(b, 1, !!d);
            b = B(a, 2, b)
        }
        return b
    };
    var wL = class extends O {
        constructor() {
            super()
        }
    };
    var xL = class extends O {
        constructor() {
            super()
        }
    };
    var yL = class extends O {
        getVersion() {
            return di(this, 1)
        }
    };
    var zL = class extends O {
        constructor() {
            super()
        }
    };

    function AL(a) {
        var b = new BL;
        return B(b, 1, a)
    }
    var BL = class extends O {
        constructor() {
            super()
        }
    };
    const CL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        DL = 6 + CL.reduce((a, b) => a + b);

    function EL(a) {
        if (a.length === 0) throw Error("Cannot decode empty usct section string.");
        var b = a.split(".");
        if (b.length > 2) throw Error(`Expected at most 2 segments but got ${b.length} when decoding ${a}.`);
        a = b[0];
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = cL(a, DL),
            d = aL(c.slice(0, 6));
        c = c.slice(6);
        if (d !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${d} - only version 1 is supported.`);
        var e = 0;
        a = [];
        for (let f = 0; f < CL.length; f++) {
            const g =
                CL[f];
            a.push(aL(c.slice(e, e + g)));
            e += g
        }
        c = new yL;
        d = ti(c, 1, d);
        c = a.shift();
        d = N(d, 2, c);
        c = a.shift();
        d = N(d, 3, c);
        c = a.shift();
        d = N(d, 4, c);
        c = a.shift();
        d = N(d, 5, c);
        c = a.shift();
        d = N(d, 6, c);
        c = new xL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        e = a.shift();
        c = N(c, 4, e);
        e = a.shift();
        c = N(c, 5, e);
        e = a.shift();
        c = N(c, 6, e);
        e = a.shift();
        c = N(c, 7, e);
        e = a.shift();
        c = N(c, 8, e);
        d = B(d, 7, c);
        c = new wL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        d = B(d, 8, c);
        c = a.shift();
        d = N(d, 9, c);
        c = a.shift();
        d = N(d, 10, c);
        a = a.shift();
        a = N(d, 11, a);
        if (b.length === 1) b = AL(a);
        else {
            a = AL(a);
            b = b[1];
            if (b.length === 0) throw Error("Cannot decode empty GPC segment string.");
            d = cL(b, 3);
            b = aL(d.slice(0, 2));
            if (b < 0 || b > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            d = aL(d.charAt(2));
            c = new zL;
            b = N(c, 2, b);
            b = M(b, 1, !!d);
            b = B(a, 2, b)
        }
        return b
    };
    var FL = class extends O {
        constructor() {
            super()
        }
    };
    var GL = class extends O {
        constructor() {
            super()
        }
    };
    var HL = class extends O {
        getVersion() {
            return di(this, 1)
        }
    };
    var IL = class extends O {
        constructor() {
            super()
        }
    };

    function JL(a) {
        var b = new KL;
        return B(b, 1, a)
    }
    var KL = class extends O {
        constructor() {
            super()
        }
    };
    const LL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        ML = 6 + LL.reduce((a, b) => a + b);

    function NL(a) {
        if (a.length === 0) throw Error("Cannot decode empty USNat section string.");
        var b = a.split(".");
        if (b.length > 2) throw Error(`Expected at most 2 segments but got ${b.length} when decoding ${a}.`);
        a = b[0];
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = cL(a, ML),
            d = aL(c.slice(0, 6));
        c = c.slice(6);
        if (d !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${d} - only version 1 is supported.`);
        var e = 0;
        a = [];
        for (let f = 0; f < LL.length; f++) {
            const g =
                LL[f];
            a.push(aL(c.slice(e, e + g)));
            e += g
        }
        c = new HL;
        d = ti(c, 1, d);
        c = a.shift();
        d = N(d, 2, c);
        c = a.shift();
        d = N(d, 3, c);
        c = a.shift();
        d = N(d, 4, c);
        c = a.shift();
        d = N(d, 5, c);
        c = a.shift();
        d = N(d, 6, c);
        c = a.shift();
        d = N(d, 7, c);
        c = a.shift();
        d = N(d, 8, c);
        c = a.shift();
        d = N(d, 9, c);
        c = a.shift();
        d = N(d, 10, c);
        c = new GL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        e = a.shift();
        c = N(c, 3, e);
        e = a.shift();
        c = N(c, 4, e);
        e = a.shift();
        c = N(c, 5, e);
        e = a.shift();
        c = N(c, 6, e);
        e = a.shift();
        c = N(c, 7, e);
        e = a.shift();
        c = N(c, 8, e);
        e = a.shift();
        c = N(c, 9, e);
        e = a.shift();
        c = N(c,
            10, e);
        e = a.shift();
        c = N(c, 11, e);
        e = a.shift();
        c = N(c, 12, e);
        d = B(d, 11, c);
        c = new FL;
        e = a.shift();
        c = N(c, 1, e);
        e = a.shift();
        c = N(c, 2, e);
        d = B(d, 12, c);
        c = a.shift();
        d = N(d, 13, c);
        c = a.shift();
        d = N(d, 14, c);
        c = a.shift();
        d = N(d, 15, c);
        a = a.shift();
        a = N(d, 16, a);
        if (b.length === 1) b = JL(a);
        else {
            a = JL(a);
            b = b[1];
            if (b.length === 0) throw Error("Cannot decode empty GPC segment string.");
            d = cL(b, 3);
            b = aL(d.slice(0, 2));
            if (b < 0 || b > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            d = aL(d.charAt(2));
            c = new IL;
            b = N(c,
                2, b);
            b = M(b, 1, !!d);
            b = B(a, 2, b)
        }
        return b
    };
    var OL = class extends O {
        constructor() {
            super()
        }
    };
    var PL = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return di(this, 1)
        }
    };
    const QL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        RL = 6 + QL.reduce((a, b) => a + b);

    function SL(a) {
        if (a.length === 0) throw Error("Cannot decode empty USVA section string.");
        var b = cL(a, RL),
            c = aL(b.slice(0, 6));
        b = b.slice(6);
        if (c !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${c} - only version 1 is supported.`);
        var d = 0;
        a = [];
        for (let e = 0; e < QL.length; e++) {
            const f = QL[e];
            a.push(aL(b.slice(d, d + f)));
            d += f
        }
        b = new PL;
        c = ti(b, 1, c);
        b = a.shift();
        c = N(c, 2, b);
        b = a.shift();
        c = N(c, 3, b);
        b = a.shift();
        c = N(c, 4, b);
        b = a.shift();
        c = N(c, 5, b);
        b = a.shift();
        c = N(c, 6, b);
        b = new OL;
        d = a.shift();
        b = N(b, 1, d);
        d = a.shift();
        b = N(b, 2, d);
        d = a.shift();
        b = N(b, 3, d);
        d = a.shift();
        b = N(b, 4, d);
        d = a.shift();
        b = N(b, 5, d);
        d = a.shift();
        b = N(b, 6, d);
        d = a.shift();
        b = N(b, 7, d);
        d = a.shift();
        b = N(b, 8, d);
        c = B(c, 7, b);
        b = a.shift();
        c = N(c, 8, b);
        b = a.shift();
        c = N(c, 9, b);
        b = a.shift();
        c = N(c, 10, b);
        a = a.shift();
        return N(c, 11, a)
    };
    var TL = class extends O {};

    function UL(a, b) {
        return Jh(a, 1, b, Of)
    }

    function VL(a, b) {
        return Jh(a, 2, b, Of)
    }

    function WL(a, b) {
        return Jh(a, 3, b, Qf)
    }

    function XL(a, b) {
        Jh(a, 4, b, Qf)
    }
    var YL = class extends O {};

    function ZL(a, b) {
        return vi(a, 1, b)
    }

    function $L(a) {
        var b = Number; {
            var c = rh(a, 1);
            const d = typeof c;
            c = c == null ? c : d === "bigint" ? String(BigInt.asIntN(64, c)) : Nf(c) ? d === "string" ? Vf(c) : Wf(c) : void 0
        }
        b = b(c ? ? "0");
        a = di(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var aM = class extends O {};

    function bM(a, b) {
        return ti(a, 1, b)
    }

    function cM(a, b) {
        return B(a, 2, b)
    }

    function dM(a, b) {
        return B(a, 3, b)
    }

    function eM(a, b) {
        return ti(a, 4, b)
    }

    function fM(a, b) {
        return ti(a, 5, b)
    }

    function gM(a, b) {
        return ti(a, 6, b)
    }

    function hM(a, b) {
        return xi(a, 7, b)
    }

    function iM(a, b) {
        return ti(a, 8, b)
    }

    function jM(a, b) {
        return ti(a, 9, b)
    }

    function kM(a, b) {
        return M(a, 10, b)
    }

    function lM(a, b) {
        return M(a, 11, b)
    }

    function mM(a, b) {
        return Jh(a, 12, b, Of)
    }

    function nM(a, b) {
        return Jh(a, 13, b, Of)
    }

    function oM(a, b) {
        return Jh(a, 14, b, Of)
    }

    function pM(a, b) {
        return M(a, 15, b)
    }

    function qM(a, b) {
        return xi(a, 16, b)
    }

    function rM(a, b) {
        return Jh(a, 17, b, Qf)
    }

    function sM(a, b) {
        return Jh(a, 18, b, Qf)
    }

    function tM(a, b) {
        return Uh(a, 19, b)
    }
    var uM = class extends O {
        getVersion() {
            return di(this, 1)
        }
    };
    var vM = class extends O {
        constructor() {
            super()
        }
    };
    var wM = "a".charCodeAt(),
        xM = Eb(Sp),
        yM = Eb(Tp);

    function zM(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function AM(a) {
        a = zM(a, 36);
        var b = ZL(new aM, Math.floor(a / 10));
        return ti(b, 2, a % 10 * 1E8)
    }

    function BM(a) {
        return String.fromCharCode(wM + zM(a, 6)) + String.fromCharCode(wM + zM(a, 6))
    }

    function CM(a) {
        let b = zM(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!zM(a, 1) === !0,
                e = zM(a, 16);
            if (d)
                for (d = zM(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function DM(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (zM(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function EM(a) {
        const b = zM(a, 16);
        return !!zM(a, 1) === !0 ? (a = CM(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : DM(a, b)
    }

    function FM(a) {
        const b = [];
        let c = zM(a, 12);
        for (; c--;) {
            const k = zM(a, 6);
            var d = zM(a, 2),
                e = CM(a),
                f = b,
                g = f.push;
            var h = new TL;
            h = N(h, 1, k);
            d = N(h, 2, d);
            e = Jh(d, 3, e, Qf);
            g.call(f, e)
        }
        return b
    }
    class GM {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var HM = a => {
        try {
            const b = re(a).map(f => f.toString(2).padStart(8, "0")).join(""),
                c = new GM(b);
            if (zM(c, 3) !== 3) return null;
            const d = VL(UL(new YL, DM(c, 24, xM)), DM(c, 24, xM)),
                e = zM(c, 6);
            e !== 0 && XL(WL(d, DM(c, e)), DM(c, e));
            return d
        } catch (b) {
            return null
        }
    };
    var IM = a => {
        try {
            const b = re(a).map(d => d.toString(2).padStart(8, "0")).join(""),
                c = new GM(b);
            return tM(sM(rM(qM(pM(oM(nM(mM(lM(kM(jM(iM(hM(gM(fM(eM(dM(cM(bM(new uM, zM(c, 6)), AM(c)), AM(c)), zM(c, 12)), zM(c, 12)), zM(c, 6)), BM(c)), zM(c, 12)), zM(c, 6)), !!zM(c, 1)), !!zM(c, 1)), DM(c, 12, yM)), DM(c, 24, xM)), DM(c, 24, xM)), !!zM(c, 1)), BM(c)), EM(c)), EM(c)), FM(c))
        } catch (b) {
            return null
        }
    };
    var KM = a => {
        if (!a) return null;
        a = a.split(".");
        if (a.length > 4) return null;
        var b = IM(a[0]);
        if (!b) return null;
        var c = new vM;
        b = B(c, 1, b);
        a.shift();
        for (const d of a) switch (JM(d)) {
            case 1:
            case 2:
                break;
            case 3:
                a = HM(d);
                if (!a) return null;
                B(b, 2, a);
                break;
            default:
                return null
        }
        return b
    };
    const JM = a => {
        try {
            const b = re(a).map(c => c.toString(2).padStart(8, "0")).join("");
            return zM(new GM(b), 3)
        } catch (b) {
            return -1
        }
    };
    const LM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var NM = a => {
        try {
            var b = re(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new GM(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = zM(c, 12);
            b.cmpVersion = zM(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = zM(c, 6);
            b.isServiceSpecific = !!zM(c, 1);
            b.useNonStandardStacks = !!zM(c, 1);
            b.specialFeatureOptins = MM(DM(c, 12, yM), yM);
            b.purpose = {
                consents: MM(DM(c, 24, xM), xM),
                legitimateInterests: MM(DM(c, 24, xM), xM)
            };
            b.purposeOneTreatment = !!zM(c, 1);
            b.publisherCC = BM(c);
            b.vendor = {
                consents: MM(EM(c), null),
                legitimateInterests: MM(EM(c),
                    null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const MM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function yp(a, ...b) {
        try {
            const c = encodeURIComponent(oe(gm(b, a.i)));
            a.j(`${"https://pagead2.googlesyndication.com/pagead/ping"}?e=${4}&d=${c}`)
        } catch (c) {
            fm(c, a.i)
        }
    }
    var OM = class extends zp {
        constructor(a) {
            super(7, CE());
            this.j = a
        }
    };
    var PM = class extends O {
        g() {
            return I(this, 2) != null
        }
    };
    var QM = class extends O {
        l() {
            return I(this, 2) != null
        }
    };
    var RM = class extends O {
        j() {
            return I(this, 1) != null
        }
    };
    var SM = rk(class extends O {});

    function TM(a) {
        a = UM(a);
        try {
            var b = a ? SM(a) : null
        } catch (c) {
            b = null
        }
        return b ? z(b, RM, 4) || null : null
    }

    function UM(a) {
        a = (new EK(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function VM(a) {
        a.__tcfapiPostMessageReady || WM(new XM(a))
    }

    function WM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.win.__tcfapi)(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.win.addEventListener("message", a.g);
        a.win.__tcfapiPostMessageReady = !0
    }
    var XM = class {
        constructor(a) {
            this.win = a
        }
    };

    function YM(a) {
        a.__uspapiPostMessageReady || ZM(new $M(a))
    }

    function ZM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.win.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var $M = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };
    var aN = class extends O {};
    var bN = rk(class extends O {
        g() {
            return I(this, 1) != null
        }
    });

    function cN(a, b, c) {
        function d(p) {
            if (p.length < 10) return null;
            var r = k(p.slice(0, 4));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function e(p) {
            if (p.length < 10) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function f(p) {
            if (p.length < 12) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(8, 12));
            p = m(p);
            return "1" + r + p + "N"
        }

        function g(p) {
            if (p.length < 18) return null;
            var r = k(p.slice(0, 8));
            r = l(r);
            p = k(p.slice(12, 18));
            p = m(p);
            return "1" + r + p + "N"
        }

        function h(p) {
            if (p.length <
                10) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function k(p) {
            const r = [];
            let w = 0;
            for (let D = 0; D < p.length / 2; D++) r.push(aL(p.slice(w, w + 2))), w += 2;
            return r
        }

        function l(p) {
            return p.every(r => r === 1) ? "Y" : "N"
        }

        function m(p) {
            return p.some(r => r === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = $K(a[0]);
        const n = aL(a.slice(0, 6));
        a = a.slice(6);
        if (n !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return g(a);
            case 13:
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function dN(a) {
        !a.l || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", GF(a.win, "__uspapiLocator"), Fa("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && (b = a.i && !K(a.j, 3), d({
                version: 1,
                uspString: b ? "1---" : a.l
            }, !0))
        }, a.win), YM(a.win))
    }

    function eN(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", GF(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], Fa("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.win.__tcfapiEventListeners, b) {
                    case "ping":
                        b = {
                            gdprApplies: !(a.i && !K(a.j, 1)),
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.2",
                            cmpVersion: 2,
                            cmpId: 300
                        };
                        d(b);
                        break;
                    case "addEventListener":
                        b = c.push(d) -
                            1;
                        a.tcString ? (e = NM(a.tcString), e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                        d(b, !0);
                        break;
                    case "removeEventListener":
                        e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        d(null, !1);
                        break;
                    case "getTCData":
                        d(null, !1)
                }
        }, a.win), VM(a.win))
    }

    function fN(a, b) {
        if (!b ? .g() || L(b, 1).length === 0 || Th(b, aN, 2, y()).length === 0) return null;
        const c = L(b, 1);
        let d;
        try {
            var e = dL(c.split("~")[0]);
            d = ZK(c)
        } catch (f) {
            return null
        }
        b = Th(b, aN, 2, y()).reduce((f, g) => ei(gN(f), 1) > ei(gN(g), 1) ? f : g);
        e = ii(e, 3).indexOf(di(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: cN(d[e], di(b, 1), a.A),
            Pe: $L(gN(b))
        }
    }

    function hN(a) {
        a = a.find(b => b && hi(b, 1) === 13);
        if (a ? .g()) try {
            return bN(L(a, 2))
        } catch (b) {}
        return null
    }

    function gN(a) {
        return wh(a, aM, 2) ? z(a, aM, 2) : ZL(new aM, 0)
    }
    var iN = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.j = b;
            this.A = c;
            this.i = d;
            b = UM(this.win.document);
            try {
                var e = b ? SM(b) : null
            } catch (f) {
                e = null
            }(b = e) ? (e = z(b, QM, 5) || null, b = Th(b, PM, 7, y()), b = hN(b ? ? []), e = {
                qg: e,
                Lg: b
            }) : e = {
                qg: null,
                Lg: null
            };
            b = e;
            e = fN(this, b.Lg);
            b = b.qg;
            b ? .l() && L(b, 2).length !== 0 ? (c = wh(b, aM, 1) ? z(b, aM, 1) : ZL(new aM, 0), b = {
                uspString: L(b, 2),
                Pe: $L(c)
            }) : b = null;
            this.l = b && e ? e.Pe > b.Pe ? e.uspString : b.uspString : b ? b.uspString : e ? e.uspString : null;
            this.tcString = (e = TM(a.document)) && e.j() ? L(e, 1) : null;
            this.g = (a = TM(a.document)) &&
                I(a, 2) != null ? L(a, 2) : null
        }
    };

    function jN() {
        const a = xc();
        return a ? Ra("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => Jb(a, b)) || Jb(a, "OMI/") && !Jb(a, "XiaoMi/") ? !0 : Jb(a, "Presto") && Jb(a, "Linux") && !Jb(a, "X11") && !Jb(a, "Android") && !Jb(a, "Mobi") : !1
    };

    function kN(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var lN = (a, b) => {
        a = kN(a);
        b = kN(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var mN = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            rb(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = sb(a, "message", e));
                return g
            }
        },
        nN = (a, b, c, d = null) => {
            const e = mN(a, b, ib(c, () => e()), d);
            return e
        },
        oN = (a, b, c, d, e) => {
            if (!(e <= 0) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) e > 1 && oN(a[f], b, c, d, --e)
        };

    function pN(a, b, c, d) {
        return mN(a, "fullscreen", d.Ca(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    class qN {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };
    async function rN(a) {
        return a.l.promise
    }
    async function sN(a) {
        return a.i.promise
    }
    async function tN(a) {
        return a.j.promise
    }

    function uN(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.A.sk;
        b.version = a.A.version;
        am(a.G, "fullscreen_tag", b, !1, .25)
    }
    class vN extends S {
        constructor(a, b, c) {
            var d = Y,
                e = Ry,
                f = {
                    sk: 2,
                    version: CE()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.Oe = c;
            this.za = d;
            this.G = e;
            this.A = f;
            this.state = 1;
            this.qem = null;
            this.l = new qN;
            this.i = new qN;
            this.j = new qN
        }
        M() {
            const a = pN(this.pubWin, this.Oe, b => {
                if (b.eventType === "adError") this.j.resolve(), this.state = 4;
                else if (b.eventType === "adReady" && this.state === 1) this.qem = b.qem, b.slotType !== this.slotType && (uN(this, {
                        cur_st: this.state,
                        evt: b.eventType,
                        adp_tp: b.slotType
                    }), this.state = 4), this.l.resolve(), this.state =
                    2;
                else if (b.eventType === "adClosed" && this.state === 2) this.i.resolve(b.result), this.state = 3;
                else if (b.eventType !== "adClosed" || this.state !== 3) uN(this, {
                    cur_st: this.state,
                    evt: b.eventType
                }), this.state = 4
            }, this.za);
            Eq(this, a)
        }
    };
    var wN = Promise;
    class xN {
        constructor(a) {
            this.i = a
        }
        send(a, b, c) {
            this.i.then(d => {
                d.send(a, b, c)
            })
        }
        g(a, b) {
            return this.i.then(c => c.g(a, b))
        }
    };
    class yN {
        constructor(a) {
            this.data = a
        }
    };

    function zN(a, b) {
        AN(a, b);
        return new BN(a)
    }
    class BN {
        constructor(a) {
            this.i = a
        }
        send(a, b, c = []) {
            const d = new MessageChannel;
            AN(d.port1, b);
            this.i.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new wN(c => {
                this.send(a, c, b)
            })
        }
    }

    function AN(a, b) {
        b && (a.onmessage = c => {
            b(new yN(c.data, zN(c.ports[0])))
        })
    };
    var CN = class {
        constructor(a) {
            this.g = a
        }
    };
    const DN = a => {
        const b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var FN = ({
        destination: a,
        Na: b,
        origin: c,
        He: d = "ZNWN1d",
        onMessage: e,
        lh: f
    }) => EN({
        destination: a,
        nj: () => b.contentWindow,
        Uj: c instanceof CN ? c : typeof c === "function" ? new CN(c) : new CN(DN(c)),
        He: d,
        onMessage: e,
        lh: f
    });
    const EN = ({
        destination: a,
        nj: b,
        Uj: c,
        token: d,
        He: e,
        onMessage: f,
        lh: g
    }) => new xN(new wN((h, k) => {
        const l = m => {
            m.source && m.source === b() && c.g(m.origin) && (m.data.n || m.data) === e && (a.removeEventListener("message", l, !1), d && m.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${m.data.t}.`)) : (h(zN(m.ports[0], f)), g && g(m)))
        };
        a.addEventListener("message", l, !1)
    }));
    var GN = pk(xm);
    var HN = pk(ym);
    var IN = pk(Am);
    var JN = pk(wm);
    var KN = pk(zm);

    function LN() {
        const {
            promise: a,
            resolve: b
        } = new qN;
        return {
            promise: a,
            resolve: b
        }
    };

    function MN(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = LN();
        b[a] = d;
        c();
        return d
    }

    function NN(a, b, c) {
        return MN(a, b, () => {
            yd(b.document, c)
        }).promise
    };
    var ON = class {
        constructor(a) {
            this.Yb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            config: c,
            floatingToolbarManager: d,
            ri: e,
            Xa: f,
            storage: g
        }) {
            Wy(1116, NN(12, a, this.Yb).then(h => {
                h.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedConfig: Bi(c),
                    floatingToolbarManager: d,
                    serializedArticleStructures: e.map(k => Bi(k)),
                    serializedPlacements: f.map(k => Bi(k)),
                    storage: g
                })
            }))
        }
    };
    var PN = {
            Bl: "google_ads_preview",
            am: "google_mc_lab",
            qm: "google_anchor_debug",
            pm: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Mm: "google_scr_debug",
            Pm: "google_ia_debug_allow_onclick",
            mn: "googleads",
            ai: "google_pedestal_debug",
            In: "google_responsive_slot_preview",
            Hn: "google_responsive_dummy_ad"
        },
        QN = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var RN = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function SN(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = TN(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function TN(a) {
        let b = "";
        Cd(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function UN() {
        var a = t.location;
        let b = !1;
        Cd(PN, c => {
            SN(a, c) && (b = !0)
        });
        return b
    }

    function VN(a, b) {
        switch (a) {
            case 1:
                return SN(b, "google_ia_debug");
            case 2:
                return SN(b, "google_bottom_anchor_debug");
            case 3:
                return SN(b, "google_anchor_debug") || SN(b, "googleads")
        }
    };

    function WN(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function XN(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => c.indexOf("ID=") === 0) || null, a.i = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null)
    }
    var YN = class {
            constructor() {
                this.j = new Date(Date.now());
                this.i = this.g = null;
                this.properties = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.properties[3] = {
                    [71]: (...a) => {
                        var b = this.g;
                        var c = this.j,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? Ed(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    }
                };
                this.properties[4] = {
                    [15]: () => {
                        var a = Number(this.i || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        ZN;
    var $N = class extends O {
        g() {
            return K(this, 10)
        }
    };
    var aO = class extends O {
        g() {
            return ji(this, 1, y())
        }
        j() {
            return L(this, 4)
        }
    };
    var Qh = class extends O {};
    var bO = class extends O {},
        cO = [13, 14];
    let dO = void 0;

    function eO() {
        Ee(dO, He);
        return dO
    };

    function fO(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Bb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function gO(a = t) {
        return a.ggeac || (a.ggeac = {})
    };

    function hO(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function iO(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function jO(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    }

    function kO(a, b, c = b.document) {
        return !!(a && "sharedStorage" in b && b.sharedStorage && iO("shared-storage", c))
    };

    function lO(a = Bd()) {
        return b => Ed(`${b} + ${a}`) % 1E3
    };

    function mO(a, b) {
        a.g = Ip(14, b, () => {})
    }
    class nO {
        constructor() {
            this.g = () => {}
        }
    }

    function oO(a) {
        Hp(nO).g(a)
    };

    function pO(a = gO()) {
        Jp(Hp(Kp), a);
        qO(a);
        mO(Hp(nO), a);
        Hp(Iw).i()
    }

    function qO(a) {
        const b = Hp(Iw);
        b.j = (c, d) => Ip(5, a, () => !1)(c, d, 1);
        b.A = (c, d) => Ip(6, a, () => 0)(c, d, 1);
        b.C = (c, d) => Ip(7, a, () => "")(c, d, 1);
        b.g = (c, d) => Ip(8, a, () => [])(c, d, 1);
        b.l = (c, d) => Ip(17, a, () => [])(c, d, 1);
        b.i = () => {
            Ip(15, a, () => {})(1)
        }
    };

    function rO(a, b, c) {
        c ? (a = a.win, b = c.g() ? JK(b, a) : null) : b = null;
        return b
    }

    function sO(a, b, c, d) {
        if (d) {
            var e = ei(c, 2) - Date.now() / 1E3;
            e = {
                maxAge: Math.max(e, 0),
                path: L(c, 3),
                domain: L(c, 4),
                secure: !1
            };
            c = c.getValue();
            a = a.win;
            d.g() && KK(b, c, e, a)
        }
    }

    function tO(a, b, c) {
        var d;
        (d = !c) || (d = a.win, d = !(c.g() && JK(b, d)));
        if (!d)
            for (const f of uO(a.win.location.hostname)) {
                d = b;
                var e = a.win;
                c.g() && e.origin !== "null" && (new EK(e.document)).remove(d, "/", f)
            }
    }
    var vO = class {
        constructor(a) {
            this.win = a
        }
        isSupported(a) {
            return HK(this.win) ? !!a.g() : !1
        }
    };

    function uO(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function wO(a, b, c) {
        var d = {
            [0]: lO(de(b).toString())
        };
        if (c) {
            c = rO(new vO(b), "__gads", c) || "";
            ZN || (ZN = new YN);
            b = ZN;
            XN(b, c);
            oO(b.properties);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? lO(e)(f) : void 0
        }
        d = Lp(a, d);
        Pp.la(1085, mF(cF(), a, d))
    }

    function xO(a, b) {
        wO(20, a, b);
        wO(17, a, b)
    }

    function yO(a) {
        const b = Hp(Kp).g();
        a = WN(a);
        return b.concat(a).join(",")
    }

    function zO(a) {
        const b = Kl();
        b && (a.debug_experiment_id = b)
    };

    function AO(a, b) {
        if (a && !VE(a).ads_density_stats_processed && !dl(a) && (VE(a).ads_density_stats_processed = !0, W(Ru) || Bd() < .01)) {
            const c = () => {
                if (a) {
                    var d = lJ(gJ(a), b.google_ad_client, a.location.hostname, yO(b).split(","));
                    Vy("ama_stats", d, 1)
                }
            };
            ee(a, () => {
                t.setTimeout(c, 1E3)
            })
        }
    };

    function BO(a, b, c, d, e, f, g = null) {
        if (e) {
            if (W(su)) var h = null;
            else try {
                h = e.getItem("google_ama_config")
            } catch (m) {
                h = null
            }
            try {
                var k = h ? zt(h) : null
            } catch (m) {
                k = null
            }
        } else k = null;
        a: {
            if (d) try {
                var l = zt(d);
                break a
            } catch (m) {
                fK(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            l = null
        }
        if (d = l) {
            if (e) {
                l = new Ns;
                B(d, 3, l);
                k = d ? .g() ? .j() || 1;
                k = Date.now() + 864E5 * k;
                Number.isFinite(k) && ui(l, 1, Math.round(k));
                l = nh(d);
                d.g() && (k = new Ms, h = d ? .g() ? .g(), k = ri(k, 23, h), h = d ? .g() ? .l(), k = ri(k, 12, h), B(l, 15, k));
                k = Th(l, mt, 1, y());
                for (h = 0; h < k.length; h++) uh(k[h], 11);
                uh(l, 22);
                if (W(su)) mK(a,
                    e);
                else try {
                    e.setItem("google_ama_config", Bi(l))
                } catch (m) {
                    fK(a, {
                        lserr: 1
                    })
                }
            }
            l = kK(a, Th(d, Ws, 7, y()));
            k = {};
            W(tu) || (k.bk = z(d, gt, 8) || new gt);
            l && (k.ca = l);
            l && jK(l, 3) && (k.tc = [1]);
            l = k;
            WE(a, 2) && (Wk(5, [Ci(d)]), c = gK(c), f = new ON(f), k = (k = l.ca) && I(k, 4) || "", c.google_package = k, oK(a, b, d, l, e, f, new Ds(["google-auto-placed"], c), g));
            return !0
        }
        k && (fK(a, {
            cfg: 1,
            cl: 1
        }), e != null && mK(a, e));
        return !1
    };

    function CO(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = fd(a.g.da() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = DO(a, b, c, a.g.g.elementsFromPoint(tb(c.left + c.width / 2, c.left, c.right - 1), tb(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = DO(a, b, c, a.g.g.elementsFromPoint(tb(c.left + c.width / 2, c.left, c.right - 1), tb(c.top + 2, c.top, c.bottom - 1)), 2, e.nb),
            g = DO(a, b, c, a.g.g.elementsFromPoint(tb(c.left + 2, c.left, c.right - 1), tb(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.nb, ...f.nb]);
        const h = DO(a, b, c, a.g.g.elementsFromPoint(tb(c.right - 1 - 2, c.left, c.right - 1), tb(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.nb, ...f.nb, ...g.nb]);
        var k = EO(a, b, c),
            l = n => Sa(a.j, n.sb) && Sa(a.l, n.oh) && Sa(a.i, n.qh);
        e = Oa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Oa(k, l);
        k = [...e, ...l];
        f = c.left < -2 || c.right > d.width + 2;
        f = k.length > 0 || f;
        g = gd(a.g.g);
        const m = new $k(c.left, c.top, c.width, c.height);
        e = [...Pa(e, n => new $k(n.oc.left, n.oc.top, n.oc.width, n.oc.height)), ...db(Pa(l,
            n => bl(m, n.oc))), ...Oa(bl(m, new $k(0, 0, d.width, d.height)), n => n.top >= 0 && n.top + n.height <= d.height)];
        return {
            entries: k,
            Xg: f,
            Eh: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            Ub: c,
            Sh: {
                width: d.width,
                height: d.height
            },
            Vj: e.length < 20 ? FO(m, e) : GO(c, e)
        }
    }

    function HO(a, b) {
        const c = a.g.da(),
            d = a.g.g;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Tl,
                                        m = Sl(l, () => CO(a, k));
                                    m && (l.events.length && (m.cj = Math.round(Number(l.events[0].duration))), h.disconnect(), e(m))
                                }, IO);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function DO(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            nb: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b) continue;
            if (Sa(f, n)) continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.g.contains(n, b)) {
                g.push(JO(a, c, n, p, 1, e));
                continue
            }
            if (a.g.contains(b, n)) {
                g.push(JO(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const D = k.g.hj(l, n);
                if (!D) {
                    k = null;
                    break a
                }
                const {
                    Ea: C,
                    condition: F
                } = KO(k, l, D, n) || {},
                {
                    Ea: E,
                    condition: A
                } = KO(k, n, D, l) || {};k = C && F && E && A ? F <= A ? {
                    Ea: C,
                    sb: LO[F]
                } : {
                    Ea: E,
                    sb: MO[A]
                } : C && F ? {
                    Ea: C,
                    sb: LO[F]
                } : E && A ? {
                    Ea: E,
                    sb: MO[A]
                } : null
            }
            const {
                Ea: r,
                sb: w
            } = k || {};
            r && w ? g.push(JO(a, c, n, p, w, e, r)) : g.push(JO(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            nb: h
        }
    }

    function EO(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Ad(b, a.g.da());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(JO(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(JO(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(JO(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function FO(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = al(e, b[g]), e)); g++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function GO(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function JO(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            oc: d,
            sb: e,
            qh: f
        };
        if (Sa(a.j, e) && Sa(a.i, f)) {
            b = new Xk(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = NO(a, c)) && Zk(b, a)) c = 4;
            else {
                a = OO(c, d);
                e = ol(c, "paddingLeft");
                f = ol(c, "paddingRight");
                var k = ol(c, "paddingTop"),
                    l = ol(c, "paddingBottom");
                e = new Xk(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Zk(b, new Xk(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = OO(c, d), c = Zk(b, c) ? 2 : 1)
            }
            h.oh = c
        }
        g && (h.Ea = g);
        return h
    }

    function KO(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Ad(h, c);
            if (g) {
                if (g.position === "fixed") return {
                    Ea: h,
                    condition: 1
                };
                if (g.position === "sticky" && a.g.contains(h.parentElement, d)) return {
                    Ea: h,
                    condition: 2
                };
                if (g.position === "absolute") return {
                    Ea: h,
                    condition: 3
                };
                if (g.cssFloat !== "none") {
                    g = h === e[0];
                    const k = PO(a, e.slice(0, f), h);
                    if (g || k) return {
                        Ea: h,
                        condition: 4
                    }
                }
            }
        }
        return (a = PO(a, e, b)) ? {
            Ea: a,
            condition: 5
        } : null
    }

    function PO(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Ad(f, a.g.da());
            if (h && d.bottom > g.bottom + 2 && h.overflowY === "visible") return f
        }
        return null
    }

    function NO(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return a.width === 0 || a.height === 0 ? null : new Xk(a.top, a.right, a.bottom, a.left)
    }

    function OO(a, b) {
        var c = ol(a, "borderLeftWidth");
        var d = ol(a, "borderRightWidth"),
            e = ol(a, "borderTopWidth");
        a = ol(a, "borderBottomWidth");
        c = new Xk(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new Xk(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class QO {
        constructor(a) {
            var b = RO;
            this.g = cd(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const LO = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        MO = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Oa(Dd({
        gm: 1,
        hm: 2,
        Wn: 3,
        Xn: 4,
        Zn: 5,
        cm: 6,
        dm: 7,
        fm: 8,
        OTHER: 9,
        Yn: 10,
        em: 11,
        Vn: 12,
        bm: 13
    }), a => !Sa([1, 2], a));
    Dd({
        Cl: 1,
        ln: 2,
        Ll: 3,
        TEXT: 4
    });
    const RO = Dd({
            BOTTOM: 1,
            TOP: 2,
            LEFT: 3,
            RIGHT: 4
        }),
        IO = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function SO(a) {
        a.i != null || a.C || (a.i = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) xa(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && rr(b.j, d))
        }), a.i.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var TO = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.j = new sr;
            this.i = null;
            Eq(this, () => {
                this.i ? .disconnect();
                this.i = null
            })
        }
    };

    function UO(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? fs(xn(4)) : d.startsWith("#") ? fs(xn(5)) : VO(d, c) : hs("Empty href");
            if (c.isError()) a.i(c.i);
            else {
                d = c.getValue();
                c = a.V;
                var e = new zn;
                d = B(e, 1, d);
                c.call(a, d)
            }
        })
    }
    var XO = class {
        constructor(a, b, c) {
            var d = WO();
            this.win = a;
            this.g = b;
            this.V = c;
            this.i = d
        }
        M() {
            const a = new TO(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                UO(this, b)
            });
            SO(a);
            pr(a.j).listen(b => {
                UO(this, b)
            })
        }
    };

    function VO(a, b) {
        return YO(a, b).map(c => YO(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = xn(2);
                e = xi(e, 2, `${c.host}${c.pathname}`);
                d = xi(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? xn(3) : xn(1);
            return d
        }))
    }

    function YO(a, b) {
        return ls(is(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function ZO(a) {
        if (a < 0 || !Number.isInteger(a)) return hs(`Not a non-negative integer: ${a}`);
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return fs(b.reverse().join(""))
    };
    class $O {
        constructor() {
            this.Zh = 5E3
        }
        Li() {
            return 5E3
        }
    }

    function aP(a, b) {
        return a.g ? Math.floor(b / 5E3) * 5E3 / a.g.Zh : b
    }

    function bP(a, b) {
        b = b.map(c => aP(a, c));
        return cP(b, a.i === void 0 ? void 0 : aP(a, a.i)).map(c => {
            a: {
                var d = dP;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (c.isError()) {
                        d = new gs(null, c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = fs(e)
            }
            return d
        }).map(c => c.join(".")).map(c => eP(c, a.g ? .Li()))
    }
    var fP = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function dP(a) {
        const b = ZO(a.value);
        if (b.isError()) return b;
        const c = b.getValue();
        return a.be === 1 ? fs(`${c}`) : a.be === 2 ? fs(`${c}${"~"}`) : ns(ZO(a.be - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function cP(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return hs("Sparse but no default");
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                be: 1
            }) : c[c.length - 1].be++
        }
        return fs(c)
    }

    function eP(a, b) {
        return a === "" ? fs("") : gP(b).map(c => `${c}${a}`)
    }

    function gP(a) {
        return a === void 0 || a === 1 ? fs("") : ms(ZO(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var hP = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.j = new T(!1);
            this.i = () => {
                this.j.g(this.win.document.hasFocus())
            }
        }
        M() {
            this.win.addEventListener("focus", this.i);
            this.win.addEventListener("blur", this.i);
            Eq(this, () => void this.win.removeEventListener("focus", this.i));
            Eq(this, () => void this.win.removeEventListener("blur", this.i));
            this.j.g(this.win.document.hasFocus())
        }
    };

    function iP(a) {
        a.j.g(a.win.document.visibilityState === "visible")
    }
    var jP = class extends S {
        constructor(a) {
            super();
            this.win = a;
            this.j = new T(!1);
            this.i = () => void iP(this)
        }
        M() {
            this.win.addEventListener("visibilitychange", this.i);
            Eq(this, () => void this.win.removeEventListener("visibilitychange", this.i));
            iP(this)
        }
    };

    function kP(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var mP = class {
        constructor(a) {
            this.win = a;
            this.i = 0;
            this.g = null;
            this.j = lP(this.win)
        }
        start() {
            this.g === null && (this.g = this.j())
        }
        pause() {
            this.g !== null && (this.i += this.j() - this.g);
            this.g = null
        }
    };

    function lP(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function nP(a) {
        a = new oP(a);
        a.M();
        return a
    }

    function pP(a) {
        const b = Dr(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function qP(a) {
        const b = rP(a.win),
            c = () => {
                const d = rP(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.F = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function sP(a) {
        a.l = !a.g.O;
        kr(a.g, !1, () => {
            a.win.setTimeout(() => {
                a.l = !0
            }, 100)
        })
    }

    function tP(a) {
        jr(a.g, !0, () => void a.j.start());
        jr(a.g, !1, () => void a.j.pause());
        a.I.start()
    }

    function uP(a) {
        var b = a.win.scrollY;
        var c = bq(a.win);
        b = {
            fe: Math.floor(b / 100),
            md: Math.floor((b + c) / 100),
            Ph: a.win.performance.now()
        };
        if (b.fe < 0 || b.md < 0 || b.fe > 1E3 || b.md > 1E3) a.B = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new WC(c.fe, c.md),
                    e = new WC(b.fe, b.md);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new WC(f, d) : null)
                    for (c = b.Ph - c.Ph, d = f.start; d <= f.end; d++) a.C[d] = (a.C[d] ? ? 0) + c
            }
            a.i = a.A.O ? b : null
        }
    }
    var oP = class {
        constructor(a) {
            this.win = a;
            this.C = [];
            this.F = this.l = this.B = !1;
            this.i = null;
            a = this.win;
            var b = new hP(a);
            b.M();
            b = gr(b.j);
            a = new jP(a);
            a.M();
            this.A = this.g = fr(b, gr(a.j));
            this.j = new mP(this.win);
            this.I = new mP(this.win);
            this.H = new fP((new fP(new $O)).g, 0)
        }
        M() {
            pP(this);
            qP(this);
            sP(this);
            tP(this);
            this.A.listen(() => void uP(this));
            t.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.A.O && uP(this)
        }
    };

    function rP(a) {
        return new xb(aq(a), bq(a))
    };

    function vP(a, {
        Ka: b
    }) {
        a = new wP(a, b);
        if (!a.Ka && W(Zu)) {
            b = a.win;
            var c = xP(yP(a));
            (new XO(b, b.document.baseURI, c)).M()
        }
        zP(a)
    }

    function zP(a) {
        if (W($u)) {
            var b = nP(a.win);
            Ep(new aF(a.win), AP(() => {
                var c = yP(a),
                    d = new Cn,
                    e = bP(b.H, b.C);
                if (e.isError()) throw ms(e, "PVDC: ").i;
                var f = new Bn;
                f = ti(f, 2, 5E3);
                f = ti(f, 1, 100);
                e = e.getValue();
                e = xi(f, 3, e);
                f = rP(b.win);
                var g = new An;
                g = ti(g, 1, f.width);
                f = ti(g, 2, f.height);
                e = B(e, 4, f);
                f = new An;
                f = ti(f, 1, fq(b.win).scrollWidth);
                f = ti(f, 2, fq(b.win).scrollHeight);
                e = B(e, 5, f);
                e = M(e, 6, b.l);
                f = Math.round(kP(b.I) / 1E3);
                e = ti(e, 8, f);
                f = Math.round(kP(b.j) / 1E3);
                e = ti(e, 9, f);
                b.B && Vh(e, 7, Of, 1, ki);
                b.F && Vh(e, 7, Of, 2, ki);
                d = G(d,
                    2, Dn, e);
                c(d)
            }))
        }
    }

    function yP(a) {
        if (!a.V) {
            const b = cF();
            a.V = c => {
                rF(b, c)
            }
        }
        return a.V
    }
    var wP = class {
        constructor(a, b) {
            this.win = a;
            this.Ka = b;
            this.V = null
        }
    };

    function xP(a) {
        return b => {
            var c = new Cn;
            b = G(c, 1, Dn, b);
            return void a(b)
        }
    }

    function WO() {
        return a => {
            Y.aa(1243, a, void 0, BP("LCC"))
        }
    }

    function AP(a) {
        return () => void Y.tb(1243, a, BP("PVC"))
    }

    function BP(a) {
        return b => {
            b.errSrc = a
        }
    };
    var CP = class extends S {
        constructor(a, b) {
            super();
            this.value = a;
            Eq(this, b)
        }
    };

    function DP(a, b) {
        const c = EP(a.getBoundingClientRect()),
            d = new T(c),
            e = FP(a, b, f => {
                d.g(EP(f.boundingClientRect))
            });
        return new CP(gr(d), () => void e.disconnect())
    }

    function FP(a, b, c) {
        b = new IntersectionObserver(d => {
            d.filter(e => e.target === a).forEach(c)
        }, {
            root: b
        });
        b.observe(a);
        return b
    }

    function EP(a) {
        return a.height > 0 || a.width > 0
    };
    var GP = {
        Om: 0,
        oo: 1,
        Dn: 2,
        0: "INITIAL_RENDER",
        1: "UNRENDER",
        2: "RENDER_BACK"
    };

    function HP(a, b, c) {
        var d = [1, 2];
        const e = DP(b, c),
            f = e.value,
            g = new sr;
        kr(f, !0, () => void IP(a, f, g, d));
        return new CP(pr(g), () => void e.dispose())
    }

    function IP(a, b, c, d) {
        const e = new mP(a);
        let f = new mP(a);
        e.start();
        f.start();
        let g = 0;
        const h = k => {
            k = {
                type: k,
                kh: ++g,
                Nj: kP(f),
                Mj: kP(e)
            };
            f = new mP(a);
            f.start();
            return k
        };
        d && !d.includes(0) || rr(c, h(0));
        b.listen(k => {
            k = k ? 2 : 1;
            d && !d.includes(k) || rr(c, h(k))
        })
    };

    function JP(a, b) {
        var c = cF();
        Ty(1282, () => void KP(a, b, c))
    }

    function KP(a, b, c) {
        const d = LP(a);
        if (!d) throw Error("No adsbygoogle INS found");
        const e = HP(a.pubWin, b, d);
        e.value.listen(f => {
            MP(f, d, c, () => void e.dispose())
        })
    }

    function LP(a) {
        return (a = a.Z.parentElement) && Ww.test(a.className) ? a : null
    }

    function MP(a, b, c, d) {
        if (a.kh > 5) d();
        else {
            var e = a.type === 1;
            d = a.type === 2;
            if (!e && !d) throw Error(`Unsupported event type: ${GP[a.type]}`);
            var f = Zg(IN());
            f = ui(f, 1, a.Nj);
            f = ui(f, 2, a.Mj);
            a = ui(f, 3, a.kh);
            f = b.dataset.vignetteLoaded;
            var g = Zg(GN());
            g = wi(g, 1, b.dataset.adStatus);
            g = wi(g, 2, b.dataset.sideRailStatus);
            g = wi(g, 3, b.dataset.anchorStatus);
            f = ri(g, 4, f !== void 0 ? f === "true" : void 0);
            b = getComputedStyle(b);
            g = JN();
            g = Zg(g);
            g = wi(g, 1, b.display);
            g = wi(g, 2, b.position);
            b = wi(g, 3, b.width).setHeight(b.height).i();
            b = B(f, 5, b).i();
            a = B(a, 4, b);
            e = e ? KN() : void 0;
            e = G(a, 5, Bm, e);
            d = d ? HN() : void 0;
            d = G(e, 6, Bm, d);
            d = Zg(d.i()).i();
            uF(c, d)
        }
    };
    var OP = a => {
        const b = a.D;
        b.google_ad_output == null && (b.google_ad_output = "html");
        if (b.google_ad_client != null) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), c.substring(0, 3) != "ca-" && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!Ok.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = NP(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = NP(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = NP(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = NP(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = NP(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = NP(a, b.google_color_line, c))
    };

    function NP(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    };
    const PP = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    Zc `https://securepubads.g.doubleclick.net/pagead/js/car.js`;
    Zc `https://securepubads.g.doubleclick.net/pagead/js/cocar.js`;
    var QP = Zc `https://ep3.adtrafficquality.google/ivt/worklet/caw.js`;

    function RP(a) {
        const b = [];
        for (let c = 0; c < 8; ++c) {
            const d = new OM(f => {
                    b.push({
                        url: f
                    })
                }),
                e = N(To(So(new Uo, a), c), 3, 6);
            d.F(e)
        }
        return b
    }
    async function SP(a) {
        var b = window;
        if (b.sharedStorage && (a = await (await b.sharedStorage.createWorklet(QP.toString(), {
                dataOrigin: "script-origin"
            })).selectURL("ps_caus", RP(a), {
                resolveToConfig: !0
            }))) {
            b = b.document.body;
            const c = document.createElement("fencedframe");
            c.id = "ps_caff";
            c.name = "ps_caff";
            c.mode = "opaque-ads";
            c.config = a;
            kl(c, "border", "0");
            b.appendChild(c)
        }
    };

    function TP(a, b) {
        const c = kO(a.isSecureContext, a, a.document),
            d = !!a.sharedStorage ? .createWorklet;
        b && c && d && !LE(GE(), 34, !1) && (ME(GE(), 34, !0), a = SP(de(a)), Y.la(1279, a))
    };
    const UP = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        VP = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        WP = {
            Fd: a => a.listener,
            Dc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Nb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        XP = {
            Fd: a => a.listener,
            Dc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Nb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function YP(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Hf: b.__gppReturn.callId
        }
    }

    function ZP(a, b) {
        if (!a) return !1;
        var c = dL(a.split("~")[0]);
        a = ZK(a);
        c = ii(c, 3);
        for (let d = 0; d < c.length; ++d) {
            const e = c[d];
            if (!b.includes(e)) continue;
            const f = a[d];
            switch (e) {
                case 7:
                    if ($P(NL(f))) return !0;
                    break;
                case 8:
                    if (aQ(nL(f))) return !0;
                    break;
                case 9:
                    if (bQ(SL(f))) return !0;
                    break;
                case 10:
                    if (cQ(vL(f))) return !0;
                    break;
                case 12:
                    if (dQ(EL(f))) return !0
            }
        }
        return !1
    }
    var hQ = class extends S {
        constructor(a) {
            ({
                timeoutMs: c,
                cmpInteractionEventReporter: b
            } = {});
            var b, c;
            super();
            this.caller = new MF(a, "__gppLocator", d => typeof d.__gpp === "function", YP);
            this.caller.B.set("addEventListener", UP);
            this.caller.A.set("addEventListener", WP);
            this.caller.B.set("removeEventListener", VP);
            this.caller.A.set("removeEventListener", XP);
            this.timeoutMs = c ? ? 500;
            this.cmpInteractionEventReporter = b
        }
        g() {
            this.caller.dispose();
            super.g()
        }
        addEventListener(a) {
            const b = lb(() => {
                    a(eQ, !0)
                }),
                c = this.timeoutMs ===
                -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            LF(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e);
                        this.cmpInteractionEventReporter ? .g()
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(fQ, !0);
                            return
                        }
                        a(gQ, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            LF(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const gQ = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        eQ = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        fQ = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function $P(a) {
        a = z(a, HL, 1);
        return hi(a, 8) === 1 || hi(a, 9) === 1 || hi(a, 10) === 1 ? !0 : !1
    }

    function aQ(a) {
        a = z(a, hL, 1);
        return hi(a, 5) === 1 || hi(a, 6) === 1 ? !0 : !1
    }

    function bQ(a) {
        return hi(a, 5) === 1 || hi(a, 6) === 1 ? !0 : !1
    }

    function cQ(a) {
        a = z(a, pL, 1);
        return hi(a, 5) === 1 || hi(a, 6) === 1 ? !0 : !1
    }

    function dQ(a) {
        a = z(a, yL, 1);
        return hi(a, 5) === 1 || hi(a, 6) === 1 ? !0 : !1
    }

    function iQ(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function jQ(a) {
        a = new hQ(a);
        if (!JF(a.caller)) return Promise.resolve(null);
        const b = GE(),
            c = LE(b, 35);
        if (c) return Promise.resolve(c);
        const d = new Promise(e => {
            e = {
                resolve: e
            };
            const f = LE(b, 36, []);
            f.push(e);
            ME(b, 36, f)
        });
        c || c === null || (ME(b, 35, null), a.addEventListener(e => {
            if (e.pingData.signalStatus === "ready" || iQ(e.pingData.applicableSections)) {
                e = e.pingData;
                ME(b, 35, e);
                for (const f of LE(b, 36, [])) f.resolve(e);
                ME(b, 36, [])
            }
        }));
        return d
    };

    function kQ(a) {
        a = new eG(a, {
            timeoutMs: -1,
            yi: !0
        });
        if (!aG(a)) return Promise.resolve(null);
        const b = GE(),
            c = LE(b, 24);
        if (c) return Promise.resolve(c);
        const d = new Promise(e => {
            e = {
                resolve: e
            };
            const f = LE(b, 25, []);
            f.push(e);
            ME(b, 25, f)
        });
        c || c === null || (ME(b, 24, null), a.addEventListener(e => {
            if (VF(e)) {
                ME(b, 24, e);
                for (const f of LE(b, 25, [])) f.resolve(e);
                ME(b, 25, [])
            } else ME(b, 24, null)
        }));
        return d
    };
    const lQ = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.La({
                    jc: c ? ? void 0,
                    Fg: d ? void 0 : 2
                })
            })
        },
        mQ = {
            Fd: a => a.La,
            Dc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Nb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    jc: b.returnValue ? ? void 0,
                    Fg: b.success ? void 0 : 2
                })
            }
        };

    function nQ(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Hf: b.__uspapiReturn.callId
        }
    }

    function oQ(a, b) {
        let c = {};
        if (JF(a.caller)) {
            var d = lb(() => {
                b(c)
            });
            LF(a.caller, "getDataWithCallback", {
                La: e => {
                    e.Fg || (c = e.jc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var pQ = class extends S {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new MF(a, "__uspapiLocator", b => typeof b.__uspapi === "function", nQ);
            this.caller.B.set("getDataWithCallback", lQ);
            this.caller.A.set("getDataWithCallback", mQ)
        }
        g() {
            this.caller.dispose();
            super.g()
        }
    };

    function qQ(a) {
        const b = new pQ(a);
        return new Promise(c => {
            oQ(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function rQ(a, {
        tk: b,
        xk: c,
        pj: d
    }) {
        var e = new OK;
        var f = W(fw) ? zi(d, 5) ? d.g() : zi(b, 5) ? b.g() : a.g() : zi(b, 5) ? b.g() : a.g();
        e = LK(e, f);
        f = W(fw) ? zi(d, 8) ? K(d, 8) : zi(b, 8) ? K(b, 8) : void 0 : mi(b, 8);
        e = MK(e, f);
        a = mi(a, 14);
        a = ri(e, 14, a);
        f = mi(b, 3);
        a = ri(a, 3, f);
        f = pi(b, 2);
        a = wi(a, 2, f);
        f = pi(b, 4);
        a = wi(a, 4, f);
        f = qi(b, 7);
        a = yi(a, 7, f);
        b = mi(b, 9);
        b = ri(a, 9, b);
        a = pi(c, 1);
        b = wi(b, 1, a);
        c = mi(c, 13);
        c = ri(b, 13, c);
        b = pi(d, 11);
        c = wi(c, 11, b);
        b = Zh(d, 10, y());
        c = Jh(c, 10, b, Uf);
        NK(c, mi(d, 12));
        return e
    }
    async function sQ(a, {
        Ka: b,
        Bj: c
    }) {
        const [d, e, f] = await Promise.all([kQ(a.pubWin), qQ(a.pubWin), jQ(a.pubWin)]), g = !!b && !jN();
        var h = LK(new OK, !g);
        c = ri(h, 14, c && navigator.globalPrivacyControl);
        h = new OK;
        if (d) {
            b = W(gw) ? g : b ? ? !1;
            b = LK(h, WF(d, {
                idpcApplies: b
            }));
            b = wi(b, 2, d.tcString);
            b = wi(b, 4, d.addtlConsent || "");
            b = yi(b, 7, d.internalErrorState);
            var k = !ZF(d, ["3", "4"], 0);
            b = ri(b, 9, k);
            MK(b, !ZF(d, ["2", "7", "9", "10"], 3));
            d.gdprApplies != null && ri(h, 3, d.gdprApplies)
        }
        b = new OK;
        if (e) {
            k = wi(b, 1, e);
            var l = e.toUpperCase();
            if (l.length ==
                4 && (l.indexOf("-") == -1 || l.substring(1) === "---") && l[0] >= "1" && l[0] <= "9" && XK.hasOwnProperty(l[1]) && XK.hasOwnProperty(l[2]) && XK.hasOwnProperty(l[3])) {
                var m = new WK;
                m = ti(m, 1, parseInt(l[0], 10));
                m = N(m, 2, XK[l[1]]);
                m = N(m, 3, XK[l[2]]);
                l = N(m, 4, XK[l[3]])
            } else l = null;
            l = l ? .mj() === 2;
            ri(k, 13, l)
        }
        k = new OK;
        if (f)
            if (f.internalErrorState) wi(k, 11, f.gppString);
            else if (iQ(f.applicableSections)) NK(Jh(k, 10, f.applicableSections, Uf), !1), W(fw) && LK(k, !0);
        else if (l = Jh(k, 10, f.applicableSections, Uf), wi(l, 11, f.gppString), W(fw)) try {
            var n =
                f.gppString,
                p = f.applicableSections;
            l = {
                idpcApplies: g,
                supportTcfeu: !0
            };
            let sf = !(p.includes(2) && l ? .idpcApplies),
                Jx = m = !1;
            if (n && !n.startsWith("GPP_ERROR_STRING_")) {
                var r = dL(n.split("~")[0]);
                const BT = ZK(n),
                    Kx = ii(r, 3);
                for (n = 0; n < Kx.length; ++n) {
                    const Lx = Kx[n];
                    if (!p.includes(Lx)) continue;
                    const Kd = BT[n];
                    switch (Lx) {
                        case 2:
                            if (l ? .supportTcfeu) {
                                a: {
                                    var w = r = void 0,
                                        D = void 0,
                                        C = void 0,
                                        F = void 0,
                                        E = void 0,
                                        A = void 0,
                                        J = void 0,
                                        H = void 0,
                                        fa = void 0;
                                    const ao = KM(Kd);
                                    if (!ao || !Kd) {
                                        var ab = null;
                                        break a
                                    }
                                    const Pb = z(ao, uM, 1),
                                        Qj = z(ao, YL,
                                            2) || new YL;
                                    var Ka = di(Pb, 9),
                                        na = di(Pb, 4),
                                        qa = di(Pb, 5),
                                        zb = K(Pb, 10),
                                        Ab = K(Pb, 11),
                                        Rj = L(Pb, 16),
                                        va = K(Pb, 15);fa = ki(Pb, 13, y());
                                    var tf = LM(fa, xM);H = ki(Pb, 14, y());
                                    var CT = {
                                        consents: tf,
                                        legitimateInterests: LM(H, xM)
                                    };J = ii(Pb, 17);
                                    var DT = LM(J);A = ii(Pb, 18);
                                    var ET = {
                                        consents: DT,
                                        legitimateInterests: LM(A)
                                    };E = ki(Pb, 12, y());
                                    var FT = LM(E, yM);F = Th(Pb, TL, 19, y());E = {};
                                    for (const bo of F) {
                                        const co = hi(bo, 1);
                                        E[co] = E[co] || {};
                                        for (const GT of ii(bo, 3)) E[co][GT] = hi(bo, 2)
                                    }
                                    C = ki(Qj, 1, y());
                                    var HT = LM(C, xM);D = ki(Qj, 2, y());
                                    var IT = LM(D, xM);w = ii(Qj,
                                        3);
                                    var JT = LM(w);r = ii(Qj, 4);ab = {
                                        tcString: Kd,
                                        tcfPolicyVersion: Ka,
                                        gdprApplies: !0,
                                        cmpId: na,
                                        cmpVersion: qa,
                                        isServiceSpecific: zb,
                                        useNonStandardStacks: Ab,
                                        publisherCC: Rj,
                                        purposeOneTreatment: va,
                                        purpose: CT,
                                        vendor: ET,
                                        specialFeatureOptins: FT,
                                        publisher: {
                                            restrictions: E,
                                            consents: HT,
                                            legitimateInterests: IT,
                                            customPurposes: {
                                                consents: JT,
                                                legitimateInterests: LM(r)
                                            }
                                        }
                                    }
                                }
                                r = ab;
                                if (!r) throw Error("Cannot decode TCF V2 section string.");sf = WF(r);!ZF(r, ["3", "4"], 0) && (m = !0);!ZF(r, ["2", "7", "9", "10"], 3) && (Jx = !0)
                            }
                            break;
                        case 7:
                            $P(NL(Kd)) &&
                                (m = !0);
                            break;
                        case 8:
                            aQ(nL(Kd)) && (m = !0);
                            break;
                        case 9:
                            bQ(SL(Kd)) && (m = !0);
                            break;
                        case 10:
                            cQ(vL(Kd)) && (m = !0);
                            break;
                        case 12:
                            dQ(EL(Kd)) && (m = !0)
                    }
                }
            }
            var Sj = sf;
            var KT = m;
            var LT = Jx;
            MK(NK(LK(k, Sj), KT), LT)
        } catch (sf) {
            Y.aa(1182, sf, void 0, void 0), MK(NK(LK(k, !g), !1), !1)
        } else {
            Sj = !1;
            try {
                Sj = ZP(f.gppString, f.applicableSections)
            } catch (sf) {
                Y.aa(1182, sf, void 0, void 0)
            }
            NK(k, Sj)
        }
        a.g = rQ(c, {
            tk: h,
            xk: b,
            pj: k
        })
    };
    async function tQ(a) {
        const b = Ll(),
            c = a.ra,
            d = a.pageState.g();
        lF(g => {
            if (hi(g, 1) === 0) {
                var h = !(d.j() ? !K(d, 4) : !K(c, 6));
                g = M(g, 2, h);
                h = !(zi(d, 5) ? !K(d, 5) : !K(c, 20));
                g = M(g, 6, h);
                N(g, 1, 1)
            }
        });
        uQ(a.pubWin, Ph(c));
        vQ(a.D.google_ad_client);
        lF(g => {
            hi(g, 1) === 1 && N(g, 1, 2)
        });
        const e = new TF(a.pubWin);
        await wQ(e, L(d, 8) || L(c, 8));
        lF(g => {
            hi(g, 1) === 2 && (g = M(g, 3, !0), N(g, 1, 3))
        });
        await sQ(a, {
            Ka: d.j() ? K(d, 4) : K(c, 6),
            Bj: zi(d, 7) ? K(d, 7) : K(c, 25)
        });
        const f = Ll();
        lF(g => {
            if (hi(g, 1) === 3) {
                g = M(g, 3, f - b > 500);
                var h = !!a.g ? .A();
                g = M(g, 4, h);
                h = !!a.g ? .g();
                g = M(g, 5, h);
                h = !!a.g ? .j();
                g = M(g, 7, h);
                h = !!a.g ? .l();
                g = M(g, 8, h);
                N(g, 1, 4)
            }
        })
    }

    function uQ(a, b) {
        var c = W(fu),
            d = W(hw);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new iN(a, b, c, d), dN(a), eN(a))
    }

    function vQ(a) {
        var b = Qd(t.top, "googlefcPresent");
        t.googlefc && !b && Vy("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function wQ(a, b) {
        return QF(a, b === ".google.cn") ? RF(a) : Promise.resolve(null)
    };
    var xQ = (a, b = !1) => {
        try {
            return b ? (new xb(a.innerWidth, a.innerHeight)).round() : fd(a || window).round()
        } catch (c) {
            return new xb(-12245933, -12245933)
        }
    };

    function yQ(a = t) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function zQ(a, b = t) {
        a = a.scrollingElement || (a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return new wb(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function AQ(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function BQ(a, b) {
        var c = Y,
            d;
        var e;
        d = (e = (e = dl()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new $k(d.left, d.top, d.width, d.height) : null) ? new wb(e.left, e.top) : (d = gl()) && xa(d.rootBounds) ? new wb(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new wb(0, 0),
                g = ed(b);
            var h = g ? g.defaultView : window;
            if (Jc(h, "parent")) {
                do {
                    if (h == a) var k = rl(b);
                    else {
                        var l = ql(b);
                        k = new wb(l.left, l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.aa(888, m), new wb(-12245933, -12245933)
        }
    }

    function CQ(a, b, c, d = !1) {
        a = BQ(a, c);
        c = hl() || xQ(b.top);
        if (!a || a.y === -12245933 || c.width === -12245933 || c.height === -12245933 || !c.height) return 0;
        let e = 0;
        try {
            const f = b.top;
            e = zQ(f.document, f).y
        } catch (f) {
            return 0
        }
        b = e + c.height;
        return a.y < e ? d ? 0 : (e - a.y) / c.height : a.y > b ? (a.y - b) / c.height : 0
    };

    function DQ(a, b, c) {
        var d = rO(a, "__gpi_opt_out", b);
        d && (d = wi(ui(Fk(d), 2, 2147483647), 3, "/"), c = wi(d, 4, c), sO(a, "__gpi_opt_out", c, b))
    }

    function EQ(a, b, c, d) {
        const e = mN(a, "gpi-uoo", (f, g) => {
            if (g.source === c) {
                g = wi(ui(Fk(f.userOptOut ? "1" : "0"), 2, 2147483647), 3, "/");
                g = wi(g, 4, a.location.hostname);
                var h = new vO(a);
                sO(h, "__gpi_opt_out", g, b);
                if (f.userOptOut || f.clearAdsData) tO(h, "__gads", b), tO(h, "__gpi", b)
            }
        });
        d.push(e)
    };

    function FQ(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = OE();
        let f = null;
        const g = mN(c, "pvt", (h, k) => {
            typeof h.token === "string" && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.j.push(g);
        return () => {
            f && Array.isArray(e[d]) && (Ta(e[d], f), e[d].length || delete e[d], f = null)
        }
    };

    function GQ(a) {
        return a.length ? a.join("~") : void 0
    };

    function HQ({
        K: a,
        Sj: b,
        Lj: c,
        Gi: d,
        Ko: e,
        Lo: f,
        G: g
    }) {
        let h = 0;
        try {
            h |= $p(a, f);
            const m = Math.min(a.screen.width || 0, a.screen.height || 0);
            h |= m ? m < 320 ? 8192 : 0 : 2048;
            h |= a.navigator && IQ(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = h;
                const n = a.innerHeight;
                var k = ie(a) * n >= b;
                var l = f | (k ? 0 : 1024)
            } else l = h | (a.innerHeight >= a.innerWidth ? 0 : 8);
            h = l;
            h |= cq(a, c, !0, e)
        } catch {
            h |= 32
        }
        switch (d) {
            case 2:
                JQ(a, g) && (h |= 16777216);
                break;
            case 1:
                KQ(a, g) && (h |= 16777216)
        }
        return h
    }

    function IQ(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var JQ = (a, b = null) => {
            const c = OC({
                Uf: 0,
                cf: a.innerWidth,
                Cf: 3,
                Vf: 0,
                df: Math.min(Math.round(a.innerWidth / 320 * 50), LQ) + 15,
                Df: 3
            });
            return SC(MQ(a, b), c) != null
        },
        KQ = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), LQ) + 15,
                f = OC({
                    Uf: 0,
                    cf: c,
                    Cf: 3,
                    Vf: d - e,
                    df: d,
                    Df: 3
                });
            e > 25 && f.push({
                x: c - 25,
                y: d - 25
            });
            return SC(MQ(a, b), f) != null
        };

    function MQ(a, b = null) {
        return new UC(a, {
            Hg: NQ(a, b)
        })
    }

    function NQ(a, b = null) {
        if (b) return (c, d, e) => {
            am(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const LQ = 90 * 1.38;

    function OQ(a, b) {
        return HQ({
            K: a,
            Lj: 3E3,
            Sj: W(cu) ? -1 : a.innerWidth > Zp ? 650 : 0,
            G: Ry,
            Gi: b
        })
    };

    function PQ(a) {
        let b = 0;
        try {
            b |= $p(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function QQ(a) {
        let b = 0;
        try {
            b |= $p(a), b |= cq(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var RQ = class extends O {
        g() {
            return L(this, 3)
        }
        j() {
            return zi(this, 4)
        }
    };
    var SQ = class extends O {
            g() {
                return Rh(this, RQ)
            }
        },
        TQ = rk(SQ);

    function UQ() {
        var a = t.adsbygoogle;
        try {
            const b = a.pageState;
            Ee(b, Je);
            return TQ(b)
        } catch (b) {
            return new SQ
        }
    };

    function VQ() {
        const a = {};
        Jw(ku) && (a.bust = Jw(ku));
        return a
    };

    function WQ(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function XQ(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function YQ(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function ZQ(a, b) {
        if (WQ(b) == 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                sb(b, "prerenderingchange", d);
                a()
            };
            rb(b, "prerenderingchange", d)
        }
    };
    var $Q = (a, b = !1) => {
        let c = 0;
        try {
            c |= $p(a);
            var d;
            if (!(d = !a.navigator)) {
                var e = a.navigator;
                d = "brave" in e && "isBrave" in e.brave || !1
            }
            c |= d || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            c |= cq(a, b ? Number.MAX_SAFE_INTEGER : 2500, !0)
        } catch (f) {
            c |= 32
        }
        return c
    };
    const aR = "body div footer header html main section".split(" ");

    function bR(a, b = null, c = !1, d = !1, e = !1) {
        let f = $p(a);
        IQ(a.navigator ? .userAgent) && (f |= 1048576);
        const g = a.innerWidth;
        g < 1200 && (f |= 65536);
        const h = a.innerHeight;
        h < 650 && (f |= 2097152);
        b && f === 0 && (b = b === 3 ? "left" : "right", (c = cR({
            K: a,
            Fj: !1,
            qk: 1,
            position: b,
            T: g,
            X: h,
            Cb: new Set,
            minWidth: 120,
            minHeight: 500,
            lf: c,
            Ff: d,
            Ef: e
        })) ? OA(a).sideRailPlasParam.set(b, `${c.width}x${c.height}_${String(b).charAt(0)}`) : f |= 16);
        return f
    }

    function dR(a) {
        a = OA(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function eR(a, b) {
        return od(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function fR(a, b) {
        return od(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function gR(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function hR(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function iR(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function jR(a) {
        return `${a.position}-${iR(a.T)}x${iR(a.X)}-${iR(a.scrollY+a.Pb)}Y`
    }

    function kR(a) {
        return `f-${jR({position:a.position,Pb:a.Pb,scrollY:0,T:a.T,X:a.X})}`
    }

    function lR(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function mR(a, b, c) {
        const d = OA(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.X),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.T);
                for (var k = c.T * .3; f <= g; f += 10) {
                    if (e > 0 && h < k) {
                        var l = kR({
                            position: "left",
                            Pb: f,
                            T: c.T,
                            X: c.X
                        });
                        b.set(l, lR(b.get(l), h))
                    }
                    if (h < c.T && e > c.T - k) {
                        l = kR({
                            position: "right",
                            Pb: f,
                            T: c.T,
                            X: c.X
                        });
                        const m = c.T - e;
                        b.set(l, lR(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function nR(a, b) {
        const c = b.K,
            d = b.lf,
            e = b.Ef;
        var f = `f-${iR(b.T)}x${iR(b.X)}`;
        a.has(f) || (a.set(f, 0), f = gR(c), d || e ? (oR(a, b, f.filter(g => hR(c, g))), pR(c, f.filter(g => !hR(c, g)).concat(e ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : oR(a, b, f))
    }

    function oR(a, b, c) {
        var d = b.Cb;
        const e = b.K;
        OA(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) eR(f, d) || mR(f, a, b)
    }

    function qR(a) {
        if (a.T < 1200 || a.X < 650) return null;
        var b = OA(a.K).sideRailAvailableSpace;
        a.Fj || nR(b, {
            K: a.K,
            T: a.T,
            X: a.X,
            Cb: a.Cb,
            lf: a.lf,
            Ef: a.Ef
        });
        const c = [];
        var d = a.X * .9,
            e = jq(a.K),
            f = (a.X - d) / 2,
            g = f,
            h = d / 7;
        for (var k = 0; k < 8; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    r = b,
                    w = {
                        K: a.K,
                        T: a.T,
                        X: a.X,
                        Cb: a.Cb,
                        Ff: a.Ff
                    };
                const E = kR({
                        position: p,
                        Pb: n,
                        T: w.T,
                        X: w.X
                    }),
                    A = jR({
                        position: p,
                        Pb: n,
                        scrollY: e,
                        T: w.T,
                        X: w.X
                    });
                if (r.has(A)) {
                    n = lR(r.get(E), r.get(A));
                    break a
                }
                const J = p === "left" ? 20 : w.T - 20;
                let H = J;p = w.T * .3 / 5 * (p === "left" ? 1 : -1);
                for (let fa = 0; fa < 6; fa++) {
                    var D = PC(w.K.document, {
                            x: Math.round(H),
                            y: Math.round(n)
                        }),
                        C = eR(D, w.Cb),
                        F = fR(D, w.K);
                    if (!C && F !== null) {
                        mR(F, r, w);
                        r.delete(A);
                        break
                    }
                    C || (C = w, D.getAttribute("google-side-rail-overlap") === "true" ? C = !0 : D.getAttribute("google-side-rail-overlap") === "false" || C.Ff && !aR.includes(D.tagName.toLowerCase()) ? C = !1 : (F = D.offsetHeight >= C.X * .25, C = D.offsetWidth >= C.T * .9 && F));
                    if (C) r.set(A, Math.round(Math.abs(H - J) + 20));
                    else if (H !== J) H -= p, p /= 2;
                    else {
                        r.set(A, 0);
                        break
                    }
                    H += p
                }
                n = lR(r.get(E), r.get(A))
            }
            m.call(l,
                n);
            g += h
        }
        b = a.qk;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = m.length === 0 ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; n >= 0; n--) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = m.length === 0 ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: e,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) *
                        d),
                    offsetY: f + h[k] * d
                }, r = n.width >= g && n.height >= a, b === 0 && r) {
                m = n;
                break
            } else b === 1 && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    }

    function pR(a, b) {
        const c = OA(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    rR(a);
                    for (const e of c.sideRailMutationCallbacks) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function rR(a) {
        ({
            sideRailAvailableSpace: a
        } = OA(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function cR(a) {
        if (a.za) return a.za.tb(1228, () => qR(a)) || null;
        try {
            return qR(a)
        } catch {}
        return null
    };
    const sR = {
        [27]: 512,
        [26]: 128
    };
    var tR = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return OQ(a, c) === 0;
                case 3:
                case 4:
                    return bR(a, c, !0, W(Vu), W(nu)) === 0;
                case 8:
                    return $Q(a, W(bu)) === 0;
                case 9:
                    return b = !(b.google_adtest === "on" || SN(a.location, "google_scr_debug")), !rH(a, b, d);
                case 30:
                    return fJ(a) == 0;
                case 26:
                    return QQ(a) === 0;
                case 27:
                    return PQ(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        uR = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return OQ(a, c);
                case 3:
                case 4:
                    return bR(a, c, !1, W(Vu));
                case 8:
                    return $Q(a, W(bu));
                case 9:
                    return rH(a, !(b.google_adtest === "on" || SN(a.location, "google_scr_debug")), d);
                case 16:
                    return Rw(b, a) ? 0 : 8388608;
                case 30:
                    return fJ(a);
                case 26:
                    return QQ(a);
                case 27:
                    return PQ(a);
                default:
                    return 32
            }
        },
        vR = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Cb(d)) return !1;
            a = xd(a);
            if (!a || !tR(a, b, d, c)) return !1;
            b = OA(a);
            if (gq(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        xR = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && wR(a) && b !== 16 && b !== 10 && b !== 11 && b !== 40 && b !== 41
        },
        yR = a => {
            if (!a.hash) return null;
            let b = null;
            Cd(PN, c => {
                !b && SN(a, c) && (b = QN[c] || null)
            });
            return b
        },
        AR = (a, b) => {
            const c = OA(a).tagSpecificState[1] || null;
            c !== null && c.debugCard == null && Cd(RN, d => {
                !c.debugCardRequested && typeof d === "number" && VN(d, a.location) && (c.debugCardRequested = !0, zR(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        CR = (a, b, c) => {
            if (!b) return null;
            const d = OA(b);
            let e = 0;
            Cd(Db, f => {
                const g = sR[f];
                g && BR(a, b, f, c) === 0 && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? `${e}` :
                null
        },
        DR = (a, b, c) => {
            const d = [];
            Cd(Db, e => {
                const f = BR(b, a, e, c);
                f !== 0 && d.push(`${e}:${f}`)
            });
            return d.join(",") || null
        },
        ER = a => {
            const b = [],
                c = {};
            Cd(a, (d, e) => {
                if ((e = Xp[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(`${e}:${d}`)
                }
            });
            return b.join(",")
        },
        FR = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        BR = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = OA(b),
                g = gq(f, c);
            if (a.google_reactive_ad_format === c || g) e |= 64;
            let h = !1;
            Cd(f.reactiveTypeDisabledByPublisher,
                (k, l) => {
                    String(c) === String(l) && (h = !0)
                });
            return h && yR(b.location) !== c && (e |= 128, c === 2 || c === 1 || c === 3 || c === 4 || c === 8) ? e : e | uR(b, a, c, d)
        },
        GR = (a, b) => {
            if (a) {
                var c = OA(a),
                    d = {};
                Cd(b, (e, f) => {
                    (f = Xp[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                Cd(Db, e => {
                    d[Yp[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        HR = (a, b, c) => {
            b = Y.Ca(b, c);
            c = { ...VQ()
            };
            const d = X(iw);
            [0, 1].includes(d) && (c.osttc = `${d}`);
            return NN(1, window, $c(a, new Map(Object.entries(c)))).then(b)
        },
        zR = (a, b, c) => {
            c = Y.Ca(212, c);
            NN(3, a, b).then(c)
        },
        IR = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle || (c.adsbygoogle = [], yd(c.document, Zc `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        JR = a => {
            a = a.google_reactive_ad_format;
            return Cb(a) ? `${a}` : null
        },
        wR = a => !!JR(a) || a.google_pgb_reactive != null,
        KR = a => {
            a = Number(JR(a));
            return a === 26 || a === 27 || a === 30 || a === 16 || a === 40 || a === 41
        };

    function LR(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function MR(a, b, c) {
        const d = b.K || b.pubWin,
            e = b.D;
        var f = DR(d, e, c);
        e.google_reactive_plat = f;
        (f = ER(a)) && (e.google_reactive_plaf = f);
        (f = FR(a)) && (e.google_reactive_fba = f);
        (f = dR(d)) && (e.google_plas = f);
        NR(a, e);
        f = yR(b.pubWin.location);
        OR(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.asro = W(Iv);
        e.aihb = W(av);
        e.ailel = GQ(Kw(vv));
        e.aiael = GQ(Kw(cv));
        e.aifxl = GQ(Kw(rv));
        e.aiixl = GQ(Kw(tv));
        W(lv) || (e.aiict = !0, e.aicel = GQ(Kw(iv)));
        W(Bv) && (e.aipaq = !0);
        W(Lv) && (e.aigda = !0);
        X(dv) && (e.aiapm = X(dv));
        X(ev) &&
            (e.aiapmi = X(ev));
        W(Ev) && (e.aiombap = !0);
        W(ov) && (e.aief = !0);
        W(Cv) && (e.aiopts = !0);
        e.aiof = GQ(Kw(Dv));
        e.fsapi = !0;
        f !== 8 && (c && nH(c) ? (f = qH(c, 86400, "__lsv__"), f ? .length && (f = Math.floor((Date.now() - Math.max(...f)) / 6E4), f >= 0 && (e.vmsli = f))) : e.vmsli = -1);
        f = qH(c, 600, "__lsa__");
        f ? .length && Math.floor((Date.now() - Math.max(...f)) / 6E4) <= X(au) && (e.dap = 3);
        hl() || xQ(b.pubWin.top);
        f = nN(b.pubWin, "rsrai", Uy(429, (g, h) => PR(b, d, e.google_ad_client, a, g, h, c)), Uy(430, (g, h) => mq(b.pubWin, "431", Ry, h)));
        b.j.push(f);
        OA(d).wasReactiveTagRequestSent = !0;
        QR(b, a, c)
    }

    function QR(a, b, c) {
        const d = a.D,
            e = xa(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = nN(a.pubWin, "apcnf", Uy(353, (f, g) => {
            const h = $c(a.ua.Yb, new Map(Object.entries(VQ())));
            var k = a.pubWin,
                l = d.google_ad_client;
            return $d(g.origin) ? BO(k, l, e, f.config, c, h, null) : !1
        }), Uy(353, (f, g) => mq(a.pubWin, "353", Ry, g)));
        a.j.push(b)
    }

    function PR(a, b, c, d, e, f, g) {
        if (!$d(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!WE(b, 1)) return !0;
        f && Wk(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = OA(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const p = f[n],
                r = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (r === 9 && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, RR(d, p));
                    const w = new sH;
                    if (lH(w, p) && w.B(p)) {
                        m = w;
                        continue
                    }
                }
                h.push(p);
                k.push(r)
            }
        }
        h.length && HR(a.ua.yh,
            522, n => {
                SR(h, b, n, d, g)
            });
        e && BO(b, c, d, e, g, $c(a.ua.Yb, new Map(Object.entries(VQ()))), m);
        return !0
    }

    function RR(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        xa(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function SR(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g],
                k = h.adFormat,
                l = h.adKey,
                m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = RR(d, h), delete h.google_reactive_sra_index, f.push(k), Ty(466, () => m.verifyAndProcessConfig(b, h, e)))
        }
    }

    function NR(a, b) {
        const c = [];
        let d = !1;
        Cd(Xp, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function OR(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    Ic("script");
    var TR = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function UR(a, b) {
        if (!Rw(b, a)) return () => {};
        a = VR(b, a);
        if (!a) return () => {};
        const c = SE();
        b = Fb(b);
        const d = {
            ub: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Ta(c, d)
    }

    function VR(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Ww.test(a.className);) a = a.parentElement;
        return a
    }

    function WR(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const g = {},
                h = a.childNodes[f];
            var c = h.style,
                d = ["width", "height"];
            for (let k = 0; k < d.length; k++) {
                const l = "google_ad_" + d[k];
                if (!g.hasOwnProperty(l)) {
                    var e = Ld(c[d[k]]);
                    e = e === null ? null : Math.round(e);
                    e != null && (g[l] = e)
                }
            }
            if (g.google_ad_width == b.google_ad_width && g.google_ad_height == b.google_ad_height) return h
        }
        return null
    }

    function YR(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function ZR(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.i != c) {
            a.i = c;
            a = SE();
            for (const d of a)
                if (d.ub.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.ub.offsetWidth, Ty(467, () => {
                    var e = d.ub,
                        f = d.D;
                    const g = WR(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = WR(e, f);
                    !h && g && e.childNodes.length == 1 ? (YR(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", IR(e, f, b)) : h && g && h != g && (YR(g, !1), YR(h, !0))
                })
        }
    }
    var $R = class extends S {
        constructor() {
            super(...arguments);
            this.i = null
        }
        M(a) {
            const b = GE();
            if (!LE(b, 27, !1)) {
                ME(b, 27, !0);
                this.i = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    ZR(this, a)
                };
                rb(a, "resize", c);
                Eq(this, () => {
                    sb(a, "resize", c)
                })
            }
        }
    };
    var aS = class {
        constructor(a, b) {
            this.K = a;
            this.ub = b;
            this.g = null;
            this.j = 0
        }
        run() {
            this.g = t.setInterval(Da(this.i, this), 500);
            this.i()
        }
        i() {
            ++this.j >= 10 && t.clearInterval(this.g);
            var a = Uw(this.K, this.ub);
            Vw(this.K, this.ub, a);
            a = Qw(this.ub, this.K);
            a != null && a.x === 0 || t.clearInterval(this.g)
        }
    };
    var bS = class {
        constructor(a) {
            this.i = 0;
            this.g = this.L = null;
            this.H = 0;
            this.j = [];
            this.sc = this.I = "";
            this.A = this.F = null;
            this.B = !1;
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.ra = a.ra;
            this.ua = a.ua;
            this.Ua = a.Ua;
            this.Z = a.Z;
            this.pageState = a.pageState
        }
    };

    function cS(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    var Me = {
        mo: 0,
        ho: 1,
        jo: 9,
        co: 2,
        eo: 3,
        lo: 5,
        ko: 7,
        fo: 10
    };
    var dS = class extends O {},
        eS = rk(dS),
        fS = [1, 3];
    const gS = Zc `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function hS(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.g(h).then(({
                    data: k
                }) => k)
            }
            const e = zd("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Rb(gS).toString();
            const f = (new URL(gS.toString())).origin,
                g = FN({
                    destination: a,
                    Na: e,
                    origin: f,
                    He: "goog:gRpYw:doubleclick"
                });
            g.g("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                h === "goog:topics:frame:handshake:ack" &&
                    c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function iS(a, b, c) {
        var d = Y,
            e = W(uw);
        const {
            cd: f,
            bd: g
        } = jS(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(h => {
            let k = g;
            if (h instanceof Uint8Array) k || (k = !(f instanceof Uint8Array && bb(h, f)));
            else if (Le()(h)) k || (k = h !== f);
            else return d.aa(989, Error(JSON.stringify(h))), 7;
            if (k && c) try {
                var l = new dS;
                var m = ui(l, 2, Ll());
                h instanceof Uint8Array ? Lh(m, 1, fS, qf(h, !1, !1)) : Lh(m, 3, fS, h == null ? h : Of(h));
                c.setItem("goog:cached:topics",
                    Bi(m))
            } catch {}
            return h
        }), b.getTopicsPromise = a);
        return f && !g ? Promise.resolve(f) : b.getTopicsPromise
    }

    function jS(a) {
        if (!a) return {
            cd: null,
            bd: !0
        };
        try {
            const l = a.getItem("goog:cached:topics");
            if (!l) return {
                cd: null,
                bd: !0
            };
            const m = eS(l);
            let n;
            const p = Oh(m, fS);
            switch (p) {
                case 0:
                    n = null;
                    break;
                case 1:
                    a = m;
                    var b = zh(m, fS, 1);
                    const w = a.P;
                    let D = w[x];
                    const C = sh(w, D, b),
                        F = qf(C, !0, !!(D & 34));
                    F != null && F !== C && vh(w, D, b, F);
                    var c = F;
                    var d = c == null ? Ce() : c;
                    b = Uint8Array;
                    Be(ye);
                    var e = d.g;
                    if (e == null || xe(e)) var f = e;
                    else {
                        if (typeof e === "string") {
                            ue.test(e) && (e = e.replace(ue, we));
                            let E;
                            E = atob(e);
                            const A = new Uint8Array(E.length);
                            for (e =
                                0; e < E.length; e++) A[e] = E.charCodeAt(e);
                            var g = A
                        } else g = null;
                        f = g
                    }
                    var h = f;
                    var k = h == null ? h : d.g = h;
                    n = new b(k || 0);
                    break;
                case 3:
                    n = hi(m, zh(m, fS, 3));
                    break;
                default:
                    jc(p, void 0)
            }
            const r = ei(m, 2) + 6048E5 < Ll();
            return {
                cd: n,
                bd: r
            }
        } catch {
            return {
                cd: null,
                bd: !0
            }
        }
    };

    function kS(a) {
        return W(nw) && a ? !!a.match(Jw(lw)) : !1
    }

    function lS(a, b) {
        if (!W(sw) && b.g()) {
            b = iO("shared-storage", a.document);
            const c = iO("browsing-topics", a.document);
            if (b || c) try {
                return hS(a)
            } catch (d) {
                Y.aa(984, d, void 0, void 0)
            }
        }
        return null
    }
    async function mS(a, b, c, d, e, f) {
        if (iO("browsing-topics", b.document) && e && !W(rw) && !kS(f ? .label))
            if (nS(c, d)) {
                a.A = 1;
                const g = FK(c, b);
                c = e.then(async h => {
                    await iS(h, b, g).then(k => {
                        a.A = k
                    })
                });
                W(tw) && (d = X(vw), d > 0 ? await Promise.race([c, fe(d)]) : await c)
            } else a.A = 5
    }

    function nS(a, b) {
        return !b.google_restrict_data_processing && b.google_tag_for_under_age_of_consent !== 1 && b.google_tag_for_child_directed_treatment !== 1 && !!a.g() && !RE() && !K(a, 9) && !K(a, 13) && !K(a, 12) && (typeof b.google_privacy_treatments !== "string" || !b.google_privacy_treatments.split(",").includes("disablePersonalization")) && !K(a, 14)
    };
    var pS = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => oS(d));
        return nN(a, "adpnt", (e, f) => {
            if (iq(f, c.contentWindow)) {
                e = lq(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function oS(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function qS(a, b, {
        Jf: c,
        Kf: d
    }) {
        if (a.isEnabled(b, {
                Jf: c,
                Kf: d
            })) return JK("__eoi", a.g) ? ? void 0
    }
    var rS = class {
        constructor(a) {
            this.g = a
        }
        isEnabled(a, {
            Jf: b,
            Kf: c
        }) {
            return !HK(this.g) || K(a, 8) || (b || !a.g()) && c ? !1 : !0
        }
    };

    function sS(a, b, c) {
        try {
            if (!$d(c.origin) || !iq(c, a.i.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        typeof d === "string" && (e = a.Ra[d]) && a.za.tb(168, () => {
            e.call(a, b, c)
        })
    }
    class tS extends S {
        constructor(a, b) {
            var c = Y,
                d = Ry;
            super();
            this.j = a;
            this.i = b;
            this.za = c;
            this.G = d;
            this.Ra = {};
            this.yb = this.za.Ca(168, (e, f) => void sS(this, e, f));
            this.Tc = this.za.Ca(169, (e, f) => mq(this.j, "ras::xsf", this.G, f));
            this.na = [];
            this.W(this.Ra);
            this.na.push(mN(this.j, "sth", this.yb, this.Tc))
        }
        g() {
            for (const a of this.na) a();
            this.na.length = 0;
            super.g()
        }
    };
    var uS = class extends tS {};

    function vS(a, b, c = null) {
        return new wS(a, b, c)
    }
    var wS = class extends uS {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.B = cF();
            this.l = () => {};
            rb(this.i, "load", this.l)
        }
        g() {
            sb(this.i, "load", this.l);
            super.g()
        }
        W(a) {
            a["adsense-labs"] = b => {
                if (b = lq(b).settings)
                    if (b = Di(Hk, JSON.parse(b)), I(b, 1) != null) {
                        if (Sh(b, b.P[x], Gk, 4, 3, !1, !0).length > 0) {
                            var c = Th(b, Gk, 4, y(zf)),
                                d = c,
                                e = this.B;
                            const h = new En;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    ri(h, 1, !0);
                                    break;
                                case 2:
                                    ri(h, 2, !0)
                            }
                            f = new Fn;
                            f = G(f, 1, Gn, h);
                            sF(e, f);
                            e = this.j;
                            f = this.A;
                            if (!LE(GE(), 37, !1)) {
                                e = new vO(e);
                                for (var g of c) switch (g.getVersion()) {
                                    case 1:
                                        sO(e,
                                            "__gads", g, f);
                                        break;
                                    case 2:
                                        sO(e, "__gpi", g, f)
                                }
                                ME(GE(), 37, !0)
                            }
                            uh(b, 4)
                        }
                        if (g = z(b, Gk, 5)) c = this.j, LE(GE(), 40, !1) || (c = new rS(c), e = ei(g, 2) - Date.now() / 1E3, e = {
                            maxAge: Math.max(e, 0),
                            path: L(g, 3),
                            domain: L(g, 4),
                            secure: !1
                        }, KK("__eoi", g.getValue(), e, c.g), ME(GE(), 40, !0));
                        uh(b, 5);
                        g = this.j;
                        c = L(b, 1) || "";
                        if (RK({
                                win: g,
                                Ka: eO()
                            }).g != null) {
                            e = RK({
                                win: g,
                                Ka: eO()
                            });
                            e = e.g != null ? fO(e.getValue()) : {};
                            b !== null && (e[c] = Ci(b));
                            try {
                                g.localStorage.setItem("google_adsense_settings", JSON.stringify(e))
                            } catch (h) {}
                        }
                    }
            }
        }
    };

    function xS(a) {
        a.A = a.B;
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.i.style.transition = "height 500ms";
        yS(a)
    }

    function zS(a, b) {
        a.i.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function yS(a) {
        const b = `rect(0px, ${a.i.width}px, ${a.A}px, 0px)`;
        a.i.style.clip = b;
        a.l.style.clip = b;
        a.i.setAttribute("height", a.A);
        a.i.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function AS(a, b) {
        b = Jd(b.r_nh);
        a.B = b == null ? 0 : b;
        if (a.B <= 0) return "1";
        a.L = rl(a.F).y;
        a.H = jq(a.j);
        if (a.L + a.A < a.H) return "2";
        if (a.L > eq(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.i.setAttribute("height", a.B);
        a.i.style.height = a.B + "px";
        a.l.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.i.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.L, a.A);
        kl(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.i.width}px, ${b}px, 0px)`;
        kl(a.i, {
            clip: b
        });
        kl(a.l, {
            clip: b
        });
        return "0"
    }
    class BS extends uS {
        constructor(a, b) {
            super(a.K, b);
            this.l = a.Z;
            this.F = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Rc = this.Sc = !1;
            this.sa = this.H = this.B = 0;
            this.ci = this.A / 5;
            this.L = rl(this.F).y;
            this.bi = nb(Uy(651, () => {
                this.L = rl(this.F).y;
                var c = this.H;
                this.H = jq(this.j);
                this.A < this.B ? (c = this.H - c, c > 0 && (this.sa += c, this.sa >= this.ci ? (xS(this), zS(this, this.B)) : (this.A = Math.min(this.B, this.A + c), zS(this, c), yS(this)))) :
                    sb(this.j, "scroll", this.R)
            }), this);
            this.R = () => {
                var c = this.bi;
                Ok.requestAnimationFrame ? Ok.requestAnimationFrame(c) : c()
            }
        }
        W(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = lq(b);
                this.Sc || (this.Sc = !0, b = AS(this, b), b === "0" && rb(this.j, "scroll", this.R, ob), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0",
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Rc || (this.Rc = !0, xS(this), sb(this.j, "scroll", this.R))
            }
        }
        g() {
            this.R && sb(this.j, "scroll", this.R, ob);
            super.g()
        }
    };

    function CS(a) {
        const b = a.L.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.j.innerHeight) && !c
    }
    class DS extends S {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.L = c;
            this.B = 0;
            this.l = CS(this);
            this.H = mb(this.F, this);
            this.i = Uy(433, () => {
                var d = this.H;
                Ok.requestAnimationFrame ? Ok.requestAnimationFrame(d) : d()
            });
            rb(this.j, "scroll", this.i, ob)
        }
        F() {
            const a = CS(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (oN(c, "ig", b, "*", 2), ++this.B >= 10 && this.i && sb(this.j, "scroll", this.i, ob))
            }
            this.l = a
        }
    };

    function ES(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        kl(a, "transition", b.join(","))
    }
    var FS = kb(function() {
        var a = hd(document, "DIV"),
            b = Nc ? "-webkit" : Mc ? "-moz" : Kc ? "-ms" : null;
        let c = "transition:opacity 1s linear;";
        b && (c += b + "-transition:opacity 1s linear;");
        gc(a, Xc("div", {
            style: c
        }));
        return nl(a.firstChild, "transition") != ""
    });

    function GS(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function HS(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function IS(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace(JS, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function KS(a) {
        var b = IS(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var LS = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        xa(a) {
            this.errors.indexOf(a) < 0 && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function MS(a) {
        let b = a.W;
        a.I = () => {};
        NS(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Ad(c, b)
            } catch (g) {
                a.g.xa("c")
            }
            const f = OS(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.R = !0);
            if (d && !f && PS(e)) {
                HS(a.g, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && QS(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !ud(b)) {
                        HS(a.g, "c");
                        break
                    }
                } catch (g) {
                    HS(a.g,
                        "c");
                    break
                }
            }
        }
        a.B && a.A && RS(a);
        return a.g
    }

    function SS(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) kl(k, m[n], "0px")
        }

        function c() {
            TS(d, g, h);
            !k || l || h || (b(US), b(VS))
        }
        const d = a.C;
        d.style.overflow = a.Wc ? "visible" : "hidden";
        a.B && (a.F ? (ES(d, WS()), ES(a.F, WS())) : ES(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.L !== null && (d.style.opacity = String(a.L));
        const e = a.width != null && a.j != null && (a.ae || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.ae || a.i > a.height) ? a.i : null;
        if (a.H) {
            const m =
                a.H.length;
            for (let n = 0; n < m; n++) TS(a.H[n], e, f)
        }
        const g = a.j,
            h = a.i,
            k = a.F,
            l = a.R;
        a.B ? t.setTimeout(c, 1E3) : c()
    }

    function XS(a) {
        if (a.A && !a.na || a.j == null && a.i == null && a.L == null && a.A) return a.g;
        var b = a.A;
        a.A = !1;
        MS(a);
        a.A = b;
        if (!b || a.check != null && !IS(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.B = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        SS(a);
        return MS(a)
    }

    function QS(a, b) {
        let c = !1;
        b.display == "none" && (HS(a.g, "n"), a.A && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || HS(a.g, "v");
        b.overflow == "hidden" && HS(a.g, "o");
        b.position == "absolute" ? (HS(a.g, "a"), c = !0) : b.position == "fixed" && (HS(a.g, "f"), c = !0);
        return c
    }

    function NS(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = YS(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && GS(a.g, 0, "o"), d & 4 && GS(a.g, 1, "o"));
        return !(d & 1)
    }

    function OS(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (D) {
            a.g.xa("s")
        }
        var f = c.getAttribute("width"),
            g = Jd(f),
            h = c.getAttribute("height"),
            k = Jd(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = NS(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            r = e && e.height,
            w = Ld(m) == a.width && Ld(n) == a.height;
        m = w ? m : p;
        r = w ? n : r;
        p = Ld(m);
        w = Ld(r);
        g = a.width !== null && (p !== null && a.width >= p || g !== null && a.width >= g);
        w = a.height !== null && (w !== null && a.height >= w || k !== null && a.height >= k);
        k = !b && PS(d);
        w = b || w || k || !(f ||
            m || d && (!ZS(String(d.minWidth)) || !$S(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!ZS(String(d.minHeight)) || !$S(String(d.maxHeight))));
        aT(a, 0, w, c, "width", f, a.width, a.j);
        bT(a, 0, "d", w, e, d, "width", m, a.width, a.j);
        bT(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        bT(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.Nf ? (c = /^html|body$/i.test(c.nodeName), f = Ld(n), h = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, h = a.i != null && d && f && Math.round(f) !== a.i && !h && d.minHeight !== "100%", a.A && !c && h && (e.setProperty("height",
            "auto", "important"), d && !ZS(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !$S(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (aT(a, 1, l, c, "height", h, a.height, a.i), bT(a, 1, "d", l, e, d, "height", r, a.height, a.i), bT(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.i), bT(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function RS(a) {
        function b() {
            if (c > 0) {
                var l = Ad(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = Ld(l.width);
                l = Ld(l.height);
                m !== null && f !== null && h && h(0, f - m);
                l !== null && g !== null && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.W,
            e = a.C,
            f = a.j,
            g = a.i,
            h = a.I;
        let k;
        t.setTimeout(() => {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function YS(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Ad(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.l.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function aT(a, b, c, d, e, f, g, h) {
        if (h != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = Jd(f);
                f == null && (a.g.xa("n"), GS(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.A)
                        if (a.B) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.I;
                            a.I = (m, n) => {
                                m == b && hc(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else hc(d, e, String(h))
                } else GS(a.g, b, "d")
        }
    }

    function bT(a, b, c, d, e, f, g, h, k, l) {
        if (l != null) {
            f = f && f[g];
            typeof f != "string" || (c == "m" ? ZS(f) : $S(f)) || (f = Ld(f), f == null ? HS(a.g, "p") : k != null && HS(a.g, f == k ? "E" : "e"));
            if (typeof h == "string") {
                if (c == "m" ? ZS(h) : $S(h)) return;
                h = Ld(h);
                h == null && (a.g.xa("p"), GS(a.g, b, c))
            }
            if (h != null)
                if (d && e) {
                    if (a.A)
                        if (a.B) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.I;
                            a.I = (p, r) => {
                                p == b && (e[g] = m - r + "px");
                                n && n(p, r)
                            }
                        } else e[g] = l + "px"
                } else GS(a.g, b, c)
        }
    }
    var gT = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.C = b;
            this.H = c;
            this.l = new cT(this.C);
            this.F = this.I = null;
            this.R = !1;
            this.W = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new cT(this.C);
            this.A = g;
            this.na = dT(this.l, d.Xf, d.height, d.Lc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = eT(d.width);
            this.i = eT(d.height);
            this.L = this.A ? eT(d.opacity) : null;
            this.check = d.check;
            this.Lc = !!d.Lc;
            this.B = d.Xf == "animate" && !fT(this.l, this.i, this.Lc) && FS();
            this.Wc = !!d.Wc;
            this.g = new LS;
            fT(this.l, this.i, this.Lc) && HS(this.g, "r");
            e = this.l;
            e.g && e.i >= e.X && HS(this.g, "b");
            this.ae = !!d.ae;
            this.Nf = !!d.Nf
        }
    };

    function fT(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, eT(a.getHeight())), a = a.g && b >= a.X) : a = a.g && a.i >= a.X, d = a);
        return d
    }
    var cT = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && xd(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.i = e;
            c = c || t;
            this.X = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && WQ(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function dT(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return fT(a, c, d)
        }
    }

    function PS(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function hT(a, b, c, d) {
        return XS(new gT(a, b, d, c, null, null, !0))
    }
    var iT = new LS("s", ""),
        JS = RegExp("[lonvafrbpEe]", "g");

    function $S(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function ZS(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function TS(a, b, c) {
        b !== null && Jd(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && Jd(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = b + "px");
        c !== null && (a.style.height = c + "px")
    }
    var US = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        VS = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function WS() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = US;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = VS;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function eT(a) {
        return typeof a === "string" ? Jd(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var jT = class extends uS {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        W(a) {
            a["resize-me"] = (b, c) => {
                b = lq(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = Jd(b.r_nw),
                        f = Jd(b.r_nh),
                        g = Jd(b.r_no);
                    g != null || e !== 0 && f !== 0 || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = /^true$/.test(b.r_ao),
                            l = /^true$/.test(b.r_ifr),
                            m = /^true$/.test(b.r_cab);
                        const r = window;
                        if (r)
                            if (h === "no_rsz") b.err = "7", e = !0;
                            else {
                                var n = new cT(this.i);
                                if (n.g) {
                                    var p = n.getWidth();
                                    p != null && (b.w = p);
                                    p = n.getHeight();
                                    p != null && (b.h = p);
                                    dT(n, h, f, m) ? (n = this.l, d = hT(r, n, {
                                        width: e,
                                        height: f,
                                        opacity: g,
                                        check: d,
                                        Xf: h,
                                        Wc: k,
                                        ae: l,
                                        Lc: m
                                    }, [this.i]), b.r_cui && /^true$/.test(b.r_cui.toString()) && v(n, {
                                        height: (f === null ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = KS(d), b.frsz = (h === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.i.dataset.googleQueryId || this.i.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };
    const kT = ["google_ad_client", "google_ad_format", "google_ad_height", "google_ad_width", "google_page_url"];

    function lT(a, b) {
        return new IntersectionObserver(b, a)
    }

    function mT(a, b, c) {
        rb(a, b, c);
        return () => sb(a, b, c)
    }
    let nT = null;

    function oT() {
        nT = Ll()
    }

    function pT(a, b) {
        return b ? nT === null ? (rb(a, "mousemove", oT, {
            passive: !0
        }), rb(a, "scroll", oT, {
            passive: !0
        }), oT(), !1) : Ll() - nT >= b * 1E3 : !1
    }

    function qT({
        win: a,
        element: b,
        Oh: c,
        Mh: d,
        Lh: e = 0,
        La: f,
        Eg: g,
        options: h = {},
        eh: k = !0,
        Tg: l = lT
    }) {
        let m, n = !1,
            p = !1;
        const r = [],
            w = l(h, (D, C) => {
                try {
                    const F = () => {
                        r.length || (d && (r.push(mT(b, "mouseenter", () => {
                            n = !0;
                            F()
                        })), r.push(mT(b, "mouseleave", () => {
                            n = !1;
                            F()
                        }))), r.push(mT(a.document, "visibilitychange", () => F())));
                        const E = pT(a, e),
                            A = YQ(a.document);
                        if (p && !n && !E && !A) m = m || a.setTimeout(() => {
                            pT(a, e) ? F() : (f(), C.disconnect())
                        }, c * 1E3);
                        else if (k || n || E || A) a.clearTimeout(m), m = void 0
                    };
                    ({
                        isIntersecting: p
                    } = D[D.length - 1]);
                    F()
                } catch (F) {
                    g &&
                        g(F)
                }
            });
        w.observe(b);
        return () => {
            w.disconnect();
            for (const D of r) D();
            m != null && a.clearTimeout(m)
        }
    };

    function rT(a, b, c, d = null) {
        return d ? (d = FK(d, a)) ? new sT(a, b, c, d) : null : null
    }

    function tT(a, b) {
        b = lq(b);
        tF(a.l, Io(new Ko, Eo(new Fo, Bo(new Co, Jd(b.s_w) ? ? 0).setHeight(Jd(b.s_h) ? ? 0).i()).i()).i());
        a.A = qT({
            win: a.j,
            element: a.Z,
            Oh: 1,
            Mh: !rd(),
            Lh: 0,
            La: () => {
                var c = a.l;
                var d = new Ko;
                var e = (new Ho).i();
                d = G(d, 4, Jo, e);
                return void tF(c, d.i())
            },
            Eg: c => Y.aa(1268, c, void 0, void 0),
            options: {
                threshold: .5
            },
            eh: !0,
            Tg: void 0
        })
    }
    var sT = class extends uS {
        constructor(a, b, c, d) {
            super(a, b);
            this.Z = c;
            this.storage = d;
            this.l = cF();
            this.A = null
        }
        W(a) {
            a["survey-submitted"] = () => {
                var b = Ll() + X(Xu) * 1E3;
                this.storage.setItem("google_survey_fcap", String(b));
                b = this.l;
                var c = new Ko;
                var d = (new Go).i();
                c = G(c, 2, Jo, d);
                tF(b, c.i())
            };
            a["survey-rendered"] = b => void tT(this, b)
        }
        g() {
            this.A ? .();
            super.g()
        }
    };

    function uT(a, b, c, d, e) {
        return new vT(a, b, c, d, e)
    }

    function wT(a, b, c) {
        const d = a.i,
            e = a.F;
        if (e != null && d != null && iq(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = new Ik(f)
            } catch (g) {
                return
            }
            a.dispose();
            f = di(a.l, 1);
            f <= 0 || (a.B = qT({
                win: a.j,
                element: e,
                Oh: f - .2,
                Mh: !rd(),
                Lh: di(a.l, 3),
                La: () => void xT(a, e),
                Eg: g => Pp.aa(1223, g, void 0, void 0),
                options: {
                    threshold: gi(a.l, 2, 1)
                },
                eh: !0,
                Tg: void 0
            }))
        }
    }

    function xT(a, b) {
        a.H();
        setTimeout(Pp.Ca(1224, () => {
            a.A.rc = (parseInt(a.A.rc, 10) || 0) + 1;
            var c = b.parentElement || null;
            c && Ww.test(c.className) || (c = hd(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            W(Ou) ? (yT(a, c, b), a.A.no_resize = !0, kr(FG(c), "filled", () => {
                id(b)
            })) : id(b);
            IR(c, a.A, a.j)
        }), 200)
    }

    function yT(a, b, c) {
        a.j.getComputedStyle(b).position == "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var vT = class extends uS {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = d;
            this.A = c;
            this.H = e;
            this.l = this.B = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.na.push(mN(b, "sth", this.yb, this.Tc))
        }
        W(a) {
            a.av_ref = (b, c) => wT(this, b, c)
        }
        g() {
            super.g();
            this.F = null;
            this.B && this.B()
        }
    };

    function zT(a) {
        if (W(Pu)) {
            var b = a.Z.parentElement || null;
            b && Ww.test(b.className) && kr(FG(b), "unfilled", () => {
                var c;
                if (c = W(Pu))
                    if (c = !LE(GE(), 42, !1)) {
                        a: switch (a.D.google_reactive_ad_format) {
                            case 0:
                            case 27:
                            case 40:
                                c = !0;
                                break a;
                            default:
                                c = !1
                        }
                        if (c = c && a.D.google_ad_width >= X(Yu) && (a.g ? (new vO(a.pubWin)).isSupported(a.g) : !1)) c = (c = a.g ? FK(a.g, a.pubWin) : null) ? (c.getItem("google_survey_fcap") ? Number(c.getItem("google_survey_fcap")) : 0) <= Ll() : !1;
                        if (c) a: if (W(qu) || Fc() || Ec()) c = !0;
                            else {
                                if (Gc() && a.l && a.l.label) switch (a.l.label) {
                                    case "treatment_1.1":
                                    case "treatment_1.2":
                                    case "treatment_1.3":
                                    case "control_2":
                                        c = !0;
                                        break a
                                }
                                c = !1
                            }
                        c && (c = (c = bq(a.pubWin)) ? b.getBoundingClientRect().top > c : !1)
                    }
                if (c) {
                    c = a.pubWin.document.createElement("ins");
                    var d = b.getAttribute("style");
                    d && c.setAttribute("style", d);
                    a.D.google_ad_height && (c.style.height = `${a.D.google_ad_height}px`);
                    (d = b.getAttribute("class")) && c.setAttribute("class", d);
                    (d = b.getAttribute("id")) && c.setAttribute("id", d);
                    b.replaceWith(c);
                    d = a.D;
                    var e = {};
                    for (f of kT) d[f] && (e[f] = d[f]);
                    e.sso = !0;
                    IR(c, e, a.pubWin);
                    var f = c;
                    ME(GE(), 42, !0);
                    if (d = a.g ? FK(a.g, a.pubWin) : null) c = Ll() +
                        X(Wu) * 1E3, d.setItem("google_survey_fcap", String(c));
                    e = kq(a.pubWin);
                    var g = jq(a.pubWin);
                    const k = f.getBoundingClientRect();
                    f = cF();
                    c = new Ko;
                    d = new Do;
                    var h = new Ao;
                    g = ui(h, 1, Math.round(k.top + g));
                    e = ui(g, 2, Math.round(k.left + e)).i();
                    d = B(d, 1, e);
                    e = Bo(new Co, Math.round(a.D.google_ad_width ? ? 0)).setHeight(Math.round(a.D.google_ad_height ? ? 0)).i();
                    d = B(d, 2, e).i();
                    c = G(c, 1, Jo, d);
                    tF(f, c.i())
                }
            })
        }
    };
    const AT = /^blogger$/,
        MT = /^wordpress(.|\s|$)/i,
        NT = /^joomla!/i,
        OT = /^drupal/i,
        PT = /\/wp-content\//,
        QT = /\/wp-content\/plugins\/advanced-ads/,
        RT = /\/wp-content\/themes\/genesis/,
        ST = /\/wp-content\/plugins\/genesis/;

    function TT(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (QT.test(e)) return 5;
                if (ST.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", RT.test(e) || ST.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (AT.test(f)) return 1;
                if (MT.test(f)) return 2;
                if (NT.test(f)) return 3;
                if (OT.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", PT.test(d))) return 2;
        return 0
    };
    var UT = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intent_qetid: "aiqeid",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        abgtt: "abgtt",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        sso: "sso",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        aihb: "aihb",
        aiof: "aiof",
        asro: "asro",
        ailel: "ailel",
        aiael: "aiael",
        aicel: "aicel",
        aifxl: "aifxl",
        aiixl: "aiixl",
        aiict: "aiict",
        aigda: "aifgd",
        aipaq: "aipaq",
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiombap: "aiombap",
        aipecl: "aipecl",
        aiopts: "aiopts",
        aief: "aief"
    };

    function VT(a) {
        a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var WT = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function XT() {
        const a = new WT;
        "SVGElement" in t && "createElementNS" in t.document && a.set(0);
        const b = Pd();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        "TextDecoder" in t && "TextEncoder" in t && a.set(4);
        return VT(a)
    };
    var YT = qk(VK);

    function ZT(a = document) {
        const b = [],
            c = [];
        for (const f of Array.from(a.querySelectorAll("meta[name=generator][content]"))) {
            if (!f) continue;
            var d = f.getAttribute("content") ? ? "";
            const [, g, h] = /^([^0-9]+)(?:\s([0-9]+(?:\.[0-9]+){0,2})[.0-9]*)?[^0-9]*$/.exec(d) ? ? [], k = g, l = h;
            a = new UK;
            l && wi(a, 3, l.substring(0, 20));
            let m, n;
            if (k) {
                for (const [p, r] of (new Map([
                        [1, "WordPress"],
                        [2, "Drupal"],
                        [3, "MediaWiki"],
                        [4, "Blogger"],
                        [5, "SEOmatic"],
                        [7, "Flutter"],
                        [8, "Joomla! - Open Source Content Management"]
                    ])).entries()) {
                    var e = p;
                    if (r ===
                        k.trim()) {
                        m = e;
                        break
                    }
                }
                for (const [p, r] of (new Map([
                        [1, "All in One SEO (AIOSEO)"],
                        [2, "All in One SEO Pro (AIOSEO)"],
                        [3, "AMP for WP"],
                        [4, "Site Kit by Google"],
                        [5, "Elementor"],
                        [6, "Powered by WPBakery Page Builder - drag and drop page builder for WordPress."]
                    ])).entries())
                    if (e = p, r === k.trim()) {
                        n = e;
                        break
                    }
            }
            n ? (d = yi(a, 1, 1), yi(d, 2, n)) : m ? yi(a, 1, m) : (e = yi(a, 1, 0), uh(e, 3), c.push({
                content: d,
                name: k,
                version: l
            }));
            b.push(a)
        }
        return {
            labels: b,
            Jo: c
        }
    };
    const $T = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        aU = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function bU(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return $T.get(b.type) ? ? null
        } catch {}
        return aU.get(a.performance ? .navigation ? .type) ? ? null
    };
    var cU = class extends O {
        constructor() {
            super()
        }
    };
    var dU = class extends O {
        constructor() {
            super()
        }
    };

    function eU(a, b) {
        if (Gc()) {
            var c = a.document.documentElement.lang;
            fU(a) ? gU(b, de(a), !0, "", c) : (new MutationObserver((d, e) => {
                fU(a) && (gU(b, de(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function fU(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function gU(a, b, c, d, e) {
        Mk({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function hU(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const iU = /[+, ]/;

    function jU(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document,
            g = ge(d),
            h = !1,
            k = "",
            l = 1;
        a: {
            l = c.google_ad_width || d.google_ad_width;
            var m = c.google_ad_height || d.google_ad_height;
            if (d && d.top === d) h = !1;
            else {
                h = d.document;
                k = h.documentElement;
                if (l && m) {
                    var n = 1;
                    let r = 1;
                    d.innerHeight ? (n = d.innerWidth, r = d.innerHeight) : k && k.clientHeight ? (n = k.clientWidth, r = k.clientHeight) : h.body && (n = h.body.clientWidth, r = h.body.clientHeight);
                    if (r > 2 * m || n > 2 * l) {
                        h = !1;
                        break a
                    }
                }
                h = !0
            }
        }
        k = h;
        l = DE(g).tf;
        m = d.top == d ? 0 : ud(d.top) ? 1 : 2;
        n = 4;
        k || m !== 1 ? k ||
            m !== 2 ? k && m === 1 ? n = 7 : k && m === 2 && (n = 8) : n = 6 : n = 5;
        l && (n |= 16);
        k = String(n);
        l = FE(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        l !== 0 && (e.google_iframing_environment = l);
        if (!m && f.domain === "ad.yieldmanager.com") {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); k.indexOf("%") > -1;) try {
                k = decodeURIComponent(k)
            } catch (r) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && ud(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url =
            d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var p = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            p = null
        } else p = null;
        e.google_last_modified_time = p;
        d = g === g.top ? g.document.referrer : (d = dl()) && d.referrer || "";
        e.google_referrer_url = d;
        EE(e, c);
        b.g() ? (e = c.google_page_location || c.google_page_url, "EMPTY" === e && (e = c.google_page_url), e ? (e = e.toString(), e.indexOf("http://") == 0 ? e = e.substring(7, e.length) : e.indexOf("https://") == 0 && (e = e.substring(8,
            e.length)), d = e.indexOf("/"), d === -1 && (d = e.length), e = e.substring(0, d).split("."), d = !1, e.length >= 3 && (d = e[e.length - 3] in PP), e.length >= 2 && (d = d || e[e.length - 2] in PP), e = d) : e = !1, e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net") : e = "pagead2.googlesyndication.com";
        b = kU(a, b);
        d = a.D;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        d.google_ad_client === "ca-pub-6219811747049371" && lU.test(f) && (g = "/pagead/lopri?");
        e = `https://${e}${g}`;
        a = (zi(a.pageState.g(), 6) ? K(a.pageState.g(), 6) : K(a.ra, 9)) && c.google_debug_params ?
            c.google_debug_params : "";
        a = wl(b, e + a);
        return c.google_ad_url = a
    }

    function mU(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                const c = a ? a.defaultView : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && ud(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function nU(a, b) {
        var c = yO(a.pubWin);
        a.D.saaei && (c += (c === "" ? "" : ",") + a.D.saaei);
        a.D.google_ad_intent_eids && (c += `${c===""?"":","}${a.D.google_ad_intent_eids}`);
        b.eid = c;
        c = a.D.google_loeid;
        typeof c === "string" && (a.i |= 4096, b.loeid = c)
    }

    function oU(a, b) {
        a = (a = xd(a.pubWin)) && a.document ? zQ(a.document, a) : new wb(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function pU(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function qU(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.K,
            g = ge(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = dl(e)) && xa(h.data) && typeof h.data.type === "string" ? (h = h.data.type.toLowerCase(), h = h == "doubleclick" || h == "adsense" ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = DE(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.tf || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.sc && (b.etu = a.sc);
        c = f ? FK(c, f) : null;
        (c = CR(d, f, c)) && (b.fc = c);
        if (!Bl(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = pd(new dd(c), "IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const va = h.contentWindow.document;
                    va.open();
                    var k = ec("<!DOCTYPE html>");
                    va.write(fc(k));
                    va.close();
                    g += va.documentMode
                } catch (va) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, m, n, p, r, w, D, C, F, E;
        try {
            l = e.screenX, m = e.screenY
        } catch (va) {}
        try {
            n = e.outerWidth, p = e.outerHeight
        } catch (va) {}
        try {
            r = e.innerWidth, w = e.innerHeight
        } catch (va) {}
        try {
            D = e.screenLeft, C = e.screenTop
        } catch (va) {}
        try {
            r =
                e.innerWidth, w = e.innerHeight
        } catch (va) {}
        try {
            F = e.screen.availWidth, E = e.screen.availTop
        } catch (va) {}
        b.brdim = [D, C, l, m, F, E, n, p, r, w].join();
        k = 0;
        t.postMessage === void 0 && (k |= 1);
        k > 0 && (b.osd = k);
        b.vis = WQ(e.document);
        k = a.Z;
        e = wR(d) ? iT : XS(new gT(e, k, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = KS(e);
        if (!wR(d) && (e = Cl(d), e != null)) {
            k = 0;
            a: {
                try {
                    {
                        var A = d.google_async_iframe_id;
                        const va = window.document;
                        if (A) var J = va.getElementById(A);
                        else {
                            var H = va.getElementsByTagName("script"),
                                fa = H[H.length - 1];
                            J = fa && fa.parentNode || null
                        }
                    }
                    if (A = J) {
                        J = [];
                        H = 0;
                        for (var ab = Date.now(); ++H <= 100 && Date.now() - ab < 50 && (A = mU(A));) A.nodeType === 1 && J.push(A);
                        var Ka = J;
                        b: {
                            for (ab = 0; ab < Ka.length; ab++) {
                                c: {
                                    var na = Ka[ab];
                                    try {
                                        if (na.parentNode && na.offsetWidth > 0 && na.offsetHeight > 0 && na.style && na.style.display !== "none" && na.style.visibility !== "hidden" && (!na.style.opacity || Number(na.style.opacity) !== 0)) {
                                            const va = na.getBoundingClientRect();
                                            var qa = va.right > 0 && va.bottom > 0;
                                            break c
                                        }
                                    } catch (va) {}
                                    qa = !1
                                }
                                if (!qa) {
                                    var zb = !1;
                                    break b
                                }
                            }
                            zb = !0
                        }
                        if (zb) {
                            b: {
                                const va = Date.now();zb = /^html|body$/i;qa = /^fixed/i;
                                for (na = 0; na < Ka.length && Date.now() - va < 50; na++) {
                                    const tf = Ka[na];
                                    if (!zb.test(tf.tagName) && qa.test(tf.style.position || pl(tf, "position"))) {
                                        var Ab = tf;
                                        break b
                                    }
                                }
                                Ab = null
                            }
                            break a
                        }
                    }
                } catch {}
                Ab = null
            }
            Ab && Ab.offsetWidth * Ab.offsetHeight <= e.width * e.height * 4 && (k = 1);
            b.pfx = k
        }
        a: {
            if (Math.random() < .05 && f) try {
                const va = f.document.getElementsByTagName("head")[0];
                var Rj = va ? TT(va) : 0;
                break a
            } catch (va) {}
            Rj = 0
        }
        f = Rj;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Ua && (b.alvm = d.google_lrv ||
            "none")
    }

    function rU(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : vd(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function sU(a, b) {
        const c = LE(b, 8, {});
        b = LE(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function tU(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = Rp;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (m) {}
            g = null
        }(e = (e = g) ? cS(e, t.Date.now() - Rp, 1E6) : null) && (b.bdt = e);
        b.idt = cS(a.H, Rp);
        e = a.D;
        b.shv = a.pageState.g().g() || L(a.ra, 2);
        a.Ua && (b.mjsv = a.Ua);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) &&
            (b.saldr = e.google_loader_used);
        if (e = dl(a.pubWin)) b.is_amp = 1, b.amp_v = el(e), (e = fl(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new vO(a.pubWin);
        (g = rO(e, "__gads", c)) ? b.cookie = g: e.isSupported(c) && (b.cookie_enabled = "1");
        (g = rO(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        rO(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new rS(a.pubWin);
        g = {
            Jf: !1,
            Kf: !a.B
        };
        (f = qS(e, c, g)) ? b.eo_id_str = f: e.isEnabled(c, g) && (b.eoidce = "1");
        c = GE();
        g = LE(c, 8, {});
        e = d.google_ad_section;
        g[e] && (b.prev_fmts = g[e]);
        g = LE(c, 9, {});
        g[e] && (b.prev_slotnames =
            g[e].toLowerCase());
        sU(d, c);
        e = LE(c, 15, 0);
        e > 0 && (b.nras = String(e));
        (g = dl(window)) ? (g ? (e = g.pageViewId, g = g.clientId, typeof g === "string" && (e += g.replace(/\D/g, "").substr(0, 6))) : e = null, e = +e) : (e = ge(window), g = e.google_global_correlator, g || (e.google_global_correlator = g = 1 + Math.floor(Math.random() * 8796093022208)), e = g);
        b.correlator = LE(c, 7, e);
        W(Bw) && (b.rume = 1);
        if (d.google_ad_channel) {
            e = LE(c, 10, {});
            g = "";
            f = d.google_ad_channel.split(iU);
            for (var h = 0; h < f.length; h++) {
                var k = f[h];
                e[k] ? g += k + "+" : e[k] = !0
            }
            b.pv_ch = g
        }
        if (d.google_ad_host_channel) {
            e =
                d.google_ad_host_channel;
            g = LE(c, 11, []);
            f = e.split("|");
            c = -1;
            e = [];
            for (h = 0; h < f.length; h++) {
                k = f[h].split(iU);
                g[h] || (g[h] = {});
                let m = "";
                for (let n = 0; n < k.length; n++) {
                    const p = k[n];
                    p !== "" && (g[h][p] ? m += "+" + p : g[h][p] = !0)
                }
                m = m.slice(1);
                e[h] = m;
                m !== "" && (c = h)
            }
            g = "";
            if (c > -1) {
                for (f = 0; f < c; f++) g += e[f] + "|";
                g += e[c]
            }
            b.pv_h_ch = g
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        a: {
            c = d.google_ad_client;
            try {
                const m = ge(window);
                let n = m.google_prev_clients;
                n || (n = m.google_prev_clients = {});
                if (c in n) {
                    var l = 1;
                    break a
                }
                n[c] = !0;
                l = 2;
                break a
            } catch {
                l = 0;
                break a
            }
            l = void 0
        }
        b.pv = l;
        a.K && W(Tu) && (l = a.K, l = Gc() && fU(l) ? l.document.documentElement.lang : void 0, l && (b.tl = l));
        W(Uu) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        rU(a.pubWin, b);
        (a = d.google_ad_layout) && TR[a] >= 0 && (b.rplot = TR[a])
    }

    function uU(a, b) {
        a = a.g;
        RE() && (b.npa = 1);
        if (a) {
            zi(a, 3) && (b.gdpr = a.A() ? "1" : "0");
            var c = I(a, 1);
            c && (b.us_privacy = c);
            (c = I(a, 2)) && (b.gdpr_consent = c);
            (c = I(a, 4)) && (b.addtl_consent = c);
            (c = ci(a, 7)) && (b.tcfe = c);
            (c = L(a, 11)) && (b.gpp = c);
            (a = Zh(a, 10, y())) && a.length > 0 && (b.gpp_sid = a.join(","))
        }
    }

    function vU(a, b) {
        const c = a.D;
        uU(a, b);
        Cd(UT, (d, e) => {
            b[d] = c[e]
        });
        wR(c) && (a = JR(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = ly(c), a.g != null && (a = ws(a.getValue()), b.pi = a))
    }

    function wU(a, b) {
        var c = hl() || xQ(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = xQ(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function xU(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = xQ(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Ed(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function yU(a, b) {
        (a = OE()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function zU(a, b) {
        (a = di(a.pageState.g(), 2)) && a >= 0 && (b.tmod = a)
    }

    function AU(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = qe(a))
    }

    function BU(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                d >= 0 && (b.wsm = d + 1)
            }
        } catch {}
    }

    function CU(a, b) {
        a.D.google_ad_public_floor >= 0 && (b.pubf = a.D.google_ad_public_floor);
        a.D.google_ad_private_floor >= 0 && (b.pvtf = a.D.google_ad_private_floor)
    }

    function DU(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Ia).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function EU(a, b) {
        var c;
        if (c = !W(Hw)) c = a.l ? .label, c = !(W(nw) && c && c.match(Jw(lw)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && iO("run-ad-auction", a.pubWin.document) && (c = new WT, c.set(1, jO(a.pubWin.navigator)), b.tdf = VT(c)))
    }

    function FU(a, b) {
        if (W(jw) && navigator.deprecatedRunAdAuctionEnforcesKAnonymity) {
            var c = new dU;
            var d = new cU;
            d = xi(d, 4, "deprecated_kanon");
            c = B(c, 2, d)
        }
        a.l != null && Gc() && (c ? ? (c = new dU), d = xi(c, 3, a.l.label), N(d, 4, a.l.status));
        c && (b.psd = qe(Bi(c)))
    }

    function GU(a, b) {
        W(yw) || iO("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function HU(a, b) {
        if (typeof a.D.google_privacy_treatments === "string") {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.D.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function IU(a, b) {
        if (a.C) {
            a.C.Aj && (b.xatf = 1);
            try {
                a.C.kf ? .disconnect(), a.C.kf = void 0
            } catch {}
        }
    }

    function JU(a, b = document) {
        if (W(gu)) try {
            const {
                labels: c
            } = ZT(b);
            c.length && (a.pgls = c.map(d => oe(YT(d))).join("~"))
        } catch (c) {
            Y.aa(1278, c)
        }
    }

    function kU(a, b) {
        const c = {};
        vU(a, c);
        AU(a, c);
        tU(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        try {
            var d = Ok.history.length
        } catch (e) {
            d = 0
        }
        c.u_his = d;
        c.u_h = Ok.screen ? .height;
        c.u_w = Ok.screen ? .width;
        c.u_ah = Ok.screen ? .availHeight;
        c.u_aw = Ok.screen ? .availWidth;
        c.u_cd = Ok.screen ? .colorDepth;
        c.u_sd = yQ(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        Ty(889, () => {
            if (a.K == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = BQ(a.K, a.Z);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                AQ(a.Z) || (c.adx = -12245933, c.ady = -12245933, a.i |= 32768)
            }
        });
        wU(a, c);
        xU(a, c);
        oU(a, c);
        nU(a, c);
        c.oid = 2;
        yU(a, c);
        c.pvsid = de(a.pubWin, Y);
        zU(a, c);
        BU(a, c);
        c.uas = hU(a.pubWin);
        (d = bU(a.pubWin)) && (c.nvt = d);
        a.I && (c.scar = a.I);
        a.A instanceof Uint8Array ? c.topics = oe(a.A) : a.A && (c.topics = a.A, c.tps = a.A);
        IU(a, c);
        qU(a, c, b);
        c.fu = a.i;
        c.bc = XT();
        if (zi(a.pageState.g(), 6) ? K(a.pageState.g(), 6) : K(a.ra, 9))
            if (zO(c), c.creatives = pU(/\b(?:creatives)=([\d,]+)/), c.adgroups = pU(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0;
        Uk() && (c.atl = !0);
        c.bz = he(a.pubWin);
        CU(a, c);
        DU(a, c);
        EU(a, c);
        FU(a, c);
        GU(a, c);
        HU(a, c);
        String(a.D.google_special_category_data) === "true" && (c.scd = 1);
        JU(c, a.pubWin.document);
        return c
    }
    const lU = /YtLoPri/;
    var KU = class extends O {};

    function LU(a) {
        return Th(a, KU, 15, y())
    }
    var MU = class extends O {},
        NU = rk(MU);

    function OU() {
        var a = new PU;
        var b = new mt;
        b = yi(b, 2, 4);
        b = yi(b, 8, 1);
        var c = new ss;
        c = wi(c, 7, "#dpId");
        b = B(b, 1, c);
        return Xh(a, 3, mt, b)
    }
    var PU = class extends O {},
        QU = rk(PU);

    function RU(a, b) {
        return L(a, 10).replace("TERM", b)
    };
    var SU = class {
        constructor(a) {
            this.Mb = a.Mb ? ? [];
            this.We = !!a.We;
            this.Ye = !!a.Ye;
            this.Rd = a.Rd ? ? 250;
            this.Qd = a.Qd ? ? 300;
            this.ve = a.ve ? ? 15E3;
            this.se = a.se ? ? "#FFFFFF";
            this.Ab = a.Ab ? ? "#1A73E8";
            this.ue = a.ue ? ? 15E3;
            this.we = a.we ? ? 0;
            this.Xe = a.Xe ? ? !0;
            this.Je = a.Je || "#0B57D0";
            this.ed = a.ed || "#FFFFFF";
            this.Ld = a.Ld ? ? 670;
            this.Pc = !!a.Pc;
            this.ff = a.ff ? ? [];
            this.Tb = !!a.Tb;
            this.pf = !!a.pf;
            this.Kd = a.Kd ? ? 0;
            this.Lf = a.Lf ? ? !0;
            this.re = !!a.re;
            this.Hd = a.Hd ? ? 0;
            this.bf = !!a.bf;
            this.ac = !!a.ac;
            this.If = !!a.If;
            this.wh = !!a.wh;
            this.Ue = !!a.Ue;
            this.Wf = !!a.Wf;
            this.Pd = a.Pd ? ? 0;
            this.Lb = a.Lb ? ? 0
        }
    };

    function TU(a, b, c, d, e, f, g, h, k) {
        const l = k(999, a.top, m => {
            m.data.action === "init" && m.data.adChannel === "ShoppingVariant" && UU(a, b, d, c, e, f, g, h)
        });
        g(() => {
            a.top.removeEventListener("message", l)
        })
    }

    function UU(a, b, c, d, e, f, g, h) {
        K(f, 13) || MA(c, d, e);
        const k = b.contentDocument.documentElement,
            l = new ResizeObserver(() => {
                b.height = `${Math.ceil(k.offsetHeight+26)}px`
            });
        l.observe(k);
        const m = h(1066, a, () => {
            const n = k.offsetHeight;
            n && (b.height = `${n+26}px`)
        }, 1E3);
        g(() => {
            l.disconnect();
            a.clearInterval(m)
        })
    }
    var VU = class {
        constructor(a) {
            this.g = a
        }
        Ge(a) {
            const b = a.win.document.createElement("iframe"),
                c = a.U,
                d = new NA(b, L(c, 16), "anno-cse", this.g.replace("ca", "partner"), "ShoppingVariant", a.win.location, L(c, 7), RU(c, a.Da), a.J.Mb.filter(e => e !== 42), !1, void 0, !0, void 0, !0, this.g);
            d.M();
            TU(a.win, b, a.Da, d, a.Ch, c, a.zh, a.Rb, a.Wb);
            return b
        }
    };
    var WU = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        Ge(a) {
            var b = a.win;
            b = a.pa ? .95 * b.innerHeight - 30 : b.innerHeight;
            var c = a.Da;
            var d = a.Dg || "",
                e = this.g,
                f = a.zg,
                g = a.ba,
                h = !!K(a.U, 13),
                k = a.J.ff.join(",");
            const l = a.J.Lf,
                m = this.i ? ? -1;
            var n = iA;
            g = "<style>#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans Text'; padding-bottom: 6px;" + (g ? "padding-right: 16px;" : "padding-left: 16px;") + '}</style><div id="gda-search-term">' + gA(c) + "</div>" + (m !== -1 ? "<script>window[" +
                tA(uA("goog_pvsid")) + "] = " + tA(uA(m)) + ";\x3c/script>" : "");
            h ? d = "" : (d = '<script data-ad-intent-query="' + rA(c) + '" data-ad-intent-qetid="' + rA(d) + '" data-ad-intent-eids="' + rA(k) + '" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', k = encodeURIComponent(String(e)), xA.lastIndex = 0, k = xA.test(k) ? k.replace(xA, yA) : k, d = d + k + '" crossorigin="anonymous">\x3c/script>');
            c = n(g + d + '<ins class="adsbygoogle" style="display:inline-block;width:' + rA(Z(f)) + "px;height:" + rA(Z(b - 30)) + 'px" data-ad-client="' +
                rA(e) + '"></ins>' + (l ? "<script>(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>" : "") + (h ? "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " + String(c).replace(vA, wA) + ' and " + "property code = ' + String(e).replace(vA, wA) + '";\x3c/script>' : ""));
            c = Xc("body", {
                dir: a.ba ? "rtl" : "ltr",
                lang: L(a.U, 7),
                style: "margin:0px;height:100%;padding-top: 0px;overflow: hidden;"
            }, dA(c));
            a = a.win.document.createElement("IFRAME");
            v(a, {
                border: "0",
                width: "100%",
                height: b + "px"
            });
            a.srcdoc = fc(c);
            return a
        }
    };

    function XU(a, b) {
        a = sy(Hx([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.ma.g > d.ma.g ? c : d)
    };

    function YU(a, b, c, d, e, f, g, h) {
        var k = new mo,
            l = new On;
        c = xi(l, 1, c);
        d = xi(c, 2, d);
        b = M(d, 3, b);
        k = B(k, 1, b);
        b = new Pn;
        b = xi(b, 2, a.language);
        e = xi(b, 3, e);
        e = B(k, 2, e);
        g = vi(e, 3, Math.round(g));
        c = LU(f);
        f = e = k = b = d = 0;
        for (m of c) d += ZU(L(m, 6) !== "") + ZU(L(m, 7) !== "") + ZU(L(m, 5) !== ""), b += ZU(L(m, 6) !== "") + ZU(L(m, 7) !== "") + ZU(L(m, 5) !== ""), k += ZU(L(m, 6) !== ""), e += ZU(L(m, 7) !== ""), f += ZU(L(m, 5) !== "");
        var m = new ko;
        m = si(m, 1, c.length);
        m = si(m, 2, d);
        m = uh(m, 3, b == null ? b : Sf(b));
        m = uh(m, 4, k == null ? k : Sf(k));
        m = uh(m, 5, e == null ? e : Sf(e));
        m = si(m, 6, f);
        m = B(g,
            6, m);
        if (h.length) {
            var n = new Zn;
            n = Uh(n, 1, h);
            G(m, 5, lo, n)
        } else {
            a.g = a.entries.length;
            h = new jo;
            e = a.entries;
            a = h.P[x];
            wf(a);
            a = Sh(h, a, io, 2, 2, !1, !0);
            g = f = 0;
            if (Array.isArray(e))
                for (e = Ag ? .get(e) || e, n = e.length, k = 0; k < n; k++) b = e[k], a.push(b), (b = ff(b.P)) && !f++ && (a[x] &= -9), b || g++ || (a[x] &= -17);
            else
                for (n of e) e = n, a.push(e), (e = ff(e.P)) && !f++ && (a[x] &= -9), e || g++ || (a[x] &= -17);
            G(m, 4, lo, h)
        }
        return m
    }

    function $U(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new ro,
            e = new jo;
        a = Uh(e, 2, a.entries.slice(c));
        d = B(d, 1, a);
        b !== 0 && vi(d, 2, Math.round(b));
        return d
    }
    var aV = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.g = 0
        }
    };

    function ZU(a) {
        return a ? 1 : 0
    };
    async function bV(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.i = a.g.ka(b) + a.j
    }
    var cV = class {
        constructor(a, b) {
            var c = X(Vv);
            this.win = a;
            this.g = b;
            this.j = c;
            this.i = b.ka(2) + c
        }
    };
    var dV = class {
            constructor(a) {
                this.performance = a
            }
            ka() {
                return this.performance.now()
            }
        },
        eV = class {
            ka() {
                return Date.now()
            }
        };
    const fV = [255, 255, 255];

    function gV(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function hV(a) {
        var b = getComputedStyle(a);
        if (b.backgroundImage !== "none") return null;
        b = gV(b.backgroundColor);
        var c = iV(b);
        if (c) return c;
        a = (a = a.parentElement) ? hV(a) : fV;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function iV(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };

    function jV(a) {
        return a.Jd > 0 && a.i.j >= a.Jd
    }
    var lV = class {
        constructor(a, b, c, d) {
            this.Pf = b;
            this.De = c;
            this.Jd = d;
            this.g = 0;
            this.i = new kV(a)
        }
    };

    function mV(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }

    function nV(a, b, c) {
        let d = [];
        a.g.has(b) && (d = a.g.get(b));
        d.push(c);
        a.i++;
        a.g.set(b, d)
    }
    class kV {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function oV(a) {
        v(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    }

    function pV(a, b) {
        b = a.document.createElement(b);
        v(b, Pt(a));
        v(b, {
            color: "inherit",
            direction: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-weight": "inherit",
            "text-align": "inherit",
            "text-orientation": "inherit",
            "writing-mode": "inherit"
        });
        return b
    }

    function qV(a) {
        a.dataset.googleVignette = "false";
        a.dataset.googleInterstitial = "false"
    };

    function rV(a, b) {
        a = sV(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z");
        v(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function tV(a, b, c) {
        a = uV(a, "20px", b.Ab, c);
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function vV(a, b, c) {
        a = sV(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        v(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: b.Ab
        });
        a.role = "button";
        a.ariaLabel = c;
        a.tabIndex = 0;
        return a
    }
    const wV = {
        [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
        [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
        [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
        [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
        [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
        [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
        [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
        [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
        [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"
    };

    function uV(a, b, c, d) {
        a = sV(a, "0 -960 960 960", b, b, wV[d]);
        v(a, {
            fill: c,
            cursor: "inherit"
        });
        return a
    }

    function sV(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        v(e, Pt(a));
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        oV(e);
        e.appendChild(f);
        return e
    };

    function xV(a, b, c, d) {
        const e = b.J.ac ? pV(a, "div") : a.document.createElement("DIV");
        e.classList.add("google-anno-skip", "google-anno-sc");
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild;
        var g = b.J;
        var h = b.g.get(c) || 0;
        g = uV(a, d, g.ed, h);
        v(g, {
            position: "relative",
            top: "3px"
        });
        h = b.J.ac ? pV(a, "span") : document.createElement("SPAN");
        v(h, {
            display: "inline-block",
            "padding-left": b.ba() ? "" : "3px",
            "padding-right": b.ba() ? "3px" : ""
        });
        h.appendChild(g);
        f.call(e, h);
        f = e.appendChild;
        g = b.J.ac ? pV(a, "span") : a.document.createElement("SPAN");
        g.appendChild(a.document.createTextNode(c));
        v(g, {
            position: "relative",
            left: b.ba() ? "" : "3px",
            right: b.ba() ? "3px" : "",
            "padding-left": b.ba() ? "6px" : "",
            "padding-right": b.ba() ? "" : "6px"
        });
        f.call(e, g);
        v(e, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.ba() ? "7px" : "6px",
            "padding-right": b.ba() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: b.J.ed,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: b.J.Je,
            cursor: "pointer",
            "margin-top": "-3px"
        });
        e.tabIndex = 0;
        e.role = "link";
        e.ariaLabel = c;
        return e
    };
    const yV = [{
        Qf: "1907259590",
        Sd: 480,
        qe: 220
    }, {
        Qf: "2837189651",
        Sd: 400,
        qe: 180
    }, {
        Qf: "9211025045",
        Sd: 360,
        qe: 160
    }, {
        Qf: "6584860439",
        Sd: -Infinity,
        qe: 150
    }];

    function zV(a) {
        yV.find(b => b.Sd <= a)
    };
    const AV = new class {
        constructor() {
            this.g = []
        }
    };
    let BV = !1;

    function CV(a) {
        DV(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new wo;
                b = vi(b, 1, a.i);
                var c = new vo;
                b = G(b, 2, xo, c);
                a.config.V.Zd(b)
            }
        }, 1E4)
    }
    class EV {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function FV(a) {
        AV.g.push(a)
    }

    function GV(a, b, c, d, e, f = null) {
        zV(a.document.body.clientWidth);
        d = b.pa ? HV(a, b, d, e, f) : IV(a, b, d, e, f);
        lr(d.isVisible(), !1, () => {
            BV = !1;
            for (const h of AV.g) h();
            AV.g.length = 0
        });
        d.show({
            yg: !0
        });
        BV = !0;
        const g = new EV(a, b, c);
        CV(g);
        AV.g.push(() => {
            var h = b.V,
                k = h.Zd;
            var l = new wo;
            l = vi(l, 1, c);
            var m = new uo;
            l = G(l, 3, xo, m);
            k.call(h, l);
            g.g = !0
        })
    }

    function HV(a, b, c, d, e) {
        d = b.ld.Ge({
            win: a,
            Da: c,
            Ch: d,
            J: b.J,
            pa: b.pa,
            ba: b.ba(),
            U: b.U,
            Dg: e,
            zg: b.pa ? a.innerWidth : Math.min(a.document.body.clientWidth, b.J.Ld),
            Wb: b.Wb.bind(b),
            Rb: b.Rb.bind(b),
            zh: FV
        });
        return qC(a, d, {
            rh: .95,
            Jg: .95,
            zIndex: 2147483647,
            qc: !0,
            Te: "adpub-drawer-root",
            Se: !1,
            Ma: !0,
            af: new T(RU(b.U, c))
        })
    }

    function IV(a, b, c, d, e) {
        const f = b.pa ? a.innerWidth : Math.min(a.document.body.clientWidth, b.J.Ld);
        d = b.ld.Ge({
            win: a,
            Da: c,
            Ch: d,
            J: b.J,
            pa: b.pa,
            ba: b.ba(),
            U: b.U,
            Dg: e,
            zg: f,
            Wb: b.Wb.bind(b),
            Rb: b.Rb.bind(b),
            zh: FV
        });
        return zB(a, d, {
            ud: `${f}px`,
            od: b.ba(),
            gd: L(b.U, 14),
            zIndex: 2147483647,
            qc: !0,
            Bg: !0,
            Te: "adpub-drawer-root",
            Se: !1,
            Ma: !0,
            af: new T(RU(b.U, c))
        })
    };
    const JV = ["BTN", "BUTTON"];

    function KV(a, b) {
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "A":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1
        }
        return !((a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB")) && a.offsetHeight <=
            50) && (!b.Ue || !LV(a))
    }

    function LV(a) {
        return JV.some(b => a.className.toUpperCase ? .() ? .includes(b) || a.id.toUpperCase ? .() ? .includes(b))
    };

    function MV(a, b, c) {
        b = b.getBoundingClientRect();
        a = ho(go(new io, a), 3);
        c = xi(a, 4, c);
        c = ti(c, 6, Math.round(b.x));
        return ti(c, 7, Math.round(b.y))
    }

    function NV(a) {
        a = gV(a);
        var b = new eo;
        b = ti(b, 1, a[0]);
        b = ti(b, 2, a[1]);
        b = ti(b, 3, a[2]);
        return Kh(b, 4, If(a[3]), 0)
    };
    const OV = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function PV(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || OV.test(a)
        }
    };

    function QV(a, b) {
        const c = new RV(b);
        for (const d of a) L(d, 5) && ji(d, 3, y()).forEach(e => {
            SV(c, e, e)
        });
        TV(c);
        return new UV(c)
    }

    function VV(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.g, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return Array.from(a.values())
    }
    var UV = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };

    function SV(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.l++;
        a.i.set(c, d);
        a.A.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new WV), a.g[a.size].parentId = c, a.g[a.size].C = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].l = !0;
        a.g[c].A = d;
        a.g[c].B = a.j.length;
        a.j.push(b.length)
    }

    function TV(a) {
        const b = [];
        for (b.push(0); b.length > 0;) {
            const f = b.shift();
            var c = a,
                d = c.g[f];
            if (f === 0) d.g = 0, d.i = 0;
            else if (d.parentId === 0) d.g = 0, d.i = d.l ? f : c.g[c.g[f].g].i;
            else {
                d = c.g[c.g[f].parentId].g;
                for (var e = c.g[f].C;;) {
                    if (c.g[d].contains(e)) {
                        c.g[f].g = c.g[d].j.get(e);
                        break
                    }
                    if (d === 0) {
                        c.g[f].g = 0;
                        break
                    }
                    d = c.g[d].g
                }
                c.g[f].i = c.g[f].l ? f : c.g[c.g[f].g].i
            }
            for (const g of a.g[f].sa) b.push(g)
        }
    }
    class RV {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.g = [new WV];
            this.j = [];
            this.i = new Map;
            this.A = new Map;
            this.l = 0
        }
        isEmpty() {
            return this.l === 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let g = 0; g < a.length; g++) {
                for (;;) {
                    var d = a.charCodeAt(g),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.g
                }
                let h = b;
                for (;;) {
                    h = this.g[h].i;
                    if (h === 0) break;
                    const k = g + 1 - this.j[this.g[h].B],
                        l = g;
                    d = a;
                    e = l;
                    var f = this.C;
                    PV(d.charAt(k - 1), f) && PV(d.charAt(e + 1), f) && c.push(new XV(k, l, this.A.get(this.g[h].A)));
                    h = this.g[h].g
                }
            }
            return c
        }
    }
    class WV {
        constructor() {
            this.j = new Map;
            this.H = !1;
            this.na = this.F = this.I = this.W = this.L = this.R = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set parentId(a) {
            this.R = a
        }
        get parentId() {
            return this.R
        }
        set C(a) {
            this.L = a
        }
        get C() {
            return this.L
        }
        set l(a) {
            this.H = a
        }
        get l() {
            return this.H
        }
        set A(a) {
            this.F = a
        }
        get A() {
            return this.F
        }
        set g(a) {
            this.W = a
        }
        get g() {
            return this.W
        }
        set i(a) {
            this.I = a
        }
        get i() {
            return this.I
        }
        set B(a) {
            this.na = a
        }
        get B() {
            return this.na
        }
        get sa() {
            return this.j.values()
        }
    }
    var XV = class {
        constructor(a, b, c) {
            this.j = a;
            this.i = b;
            this.A = c
        }
        get g() {
            return this.j
        }
        get l() {
            return this.i
        }
        get Da() {
            return this.A
        }
        get length() {
            return this.i - this.j
        }
    };
    async function YV(a, b, c, d, e) {
        const f = QV(LU(b.U), b.i);
        if (!f.isEmpty()) {
            var g = new Map;
            for (const h of LU(b.U).filter(k => L(k, 5))) ji(h, 3, y()).forEach(k => {
                g.set(k, L(h, 1))
            });
            await ZV(a, a.document.body, b, f, g, new Set, c, d, b.J.Kd ? new lV(0, 0, 0, b.J.Kd) : null, b.J.Pd ? new $V(b.J.Pd) : null, e)
        }
    }
    async function ZV(a, b, c, d, e, f, g, h, k, l, m) {
        g.g.ka(9) >= g.i && await bV(g, 10);
        if (b.nodeType !== Node.ELEMENT_NODE || !(b.classList ? .contains("google-anno-skip") || c.J.bf && !KV(b, c.J)))
            if (c.J.pf && f.size && b.nodeType === Node.ELEMENT_NODE && aW(a, b) && b.parentElement && !bW(a, c, b.parentElement) && cW(a, l, b.getBoundingClientRect().top) && dW(a, f, c, h, b.parentElement, b, k, l), b.nodeType === Node.TEXT_NODE && b.textContent) VV(d, b.textContent).map(n => e.get(n.Da)).filter(n => !!n).forEach(n => void f.add(n));
            else {
                for (const n of b.childNodes) await ZV(a,
                    n, c, d, e, f, g, h, k, l, m);
                f.size && b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) && !bW(a, c, b) && cW(a, l, b.getBoundingClientRect().bottom) && dW(a, f, c, h, b, null, k, l)
            }
    }

    function dW(a, b, c, d, e, f, g, h) {
        for (const [l, m] of [...b].entries()) {
            var k = l;
            const n = m;
            if (g && jV(g) || c.J.Lb && k === c.J.Lb) return;
            c.J.Lb && b.delete(n);
            const p = MV(c.V.Xc(), f ? ? e, n);
            d.entries.push(nh(p));
            g && nV(g.i, n, g.g);
            if (K(c.U, 17)) continue;
            k = xV(a, c, n, e);
            const r = eW(k, c, $h(jg(rh(p, 10)), "0"));
            c.J.Tb && qV(k);
            fW(c, 999, k, w => {
                try {
                    var D = c.V,
                        C = D.dc,
                        F = po(no(n), $h(jg(rh(p, 10)), "0"));
                    var E = ui(F, 7, r.i);
                    const A = C.call(D, E);
                    GV(a, c, A, n, c.A.get(n) || "");
                    return !1
                } finally {
                    w.preventDefault(), c.J.Wf && w.stopImmediatePropagation()
                }
            });
            e.insertBefore(k, f);
            h && gW(h, k.getBoundingClientRect().bottom + window.scrollY)
        }
        c.J.Lb || b.clear()
    }

    function aW(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }

    function bW(a, b, c) {
        if (!b.J.Hd) return !1;
        a = Ld(a.getComputedStyle(c).fontSize);
        return a !== null && a > b.J.Hd
    }

    function cW(a, b, c) {
        return b ? b.g === void 0 || c + a.scrollY - b.g > b.i : !0
    }
    class hW {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function eW(a, b, c) {
        const d = new hW;
        iW(b, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = c;
                    e = b.V;
                    var g = e.Le,
                        h = new Kn;
                    f = Kh(h, 1, ig(f), "0");
                    d.g = g.call(e, f)
                } else d.g && (e = b.V, g = e.Ke, f = new Jn, f = vi(f, 1, d.g), g.call(e, f), d.g = null)
        }).observe(a);
        return d
    }

    function gW(a, b) {
        a.g = b
    }
    class $V {
        constructor(a) {
            this.i = a;
            this.g = void 0
        }
    };

    function jW(a, b, c, d, e, f) {
        if (!a.g) {
            var g = b.document.createElement("span");
            g.appendChild(rV(b, "12px"));
            g.appendChild(b.document.createTextNode(d));
            hE(b, c || null, {
                informationText: g
            }, e, f ? h => {
                f.Ze(h)
            } : f);
            a.g = !0
        }
    }
    var kW = class {
        constructor() {
            this.g = !1
        }
    };

    function lW(a, b) {
        const c = b.pa === b.ba;
        var d = mW(a, b, c);
        if (!d) return null;
        d = d.position.wd();
        a = nW(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.T - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = b.T;
        return {
            Ba: c ? e - a : 16,
            Ja: c ? 16 : e - a,
            ga: d
        }
    }

    function oW(a, b) {
        const c = aq(a),
            d = bq(a);
        return QC(new UC(a), new Xk(d - b.ga - 50, c - b.Ja, d - b.ga, b.Ba)).size > 0
    }

    function mW(a, b, c) {
        b = Math.floor(b.X * .3);
        return b < 66 ? null : XC(a, {
            Qb: c ? cD({
                ga: 16,
                Ja: 16
            }) : aD({
                ga: 16,
                Ba: 16
            }),
            vf: b - 66,
            xb: 200,
            zf: 50,
            Id: b,
            lb: 16
        }, [a.document.body]).Ee
    }

    function nW(a, b, c, d) {
        a = c.pa ? pW(a, b, c) : qW(a, b, c);
        b = c.T;
        let e = c.pa ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function pW(a, b, c) {
        const d = c.X;
        return QC(new UC(a), new Xk(d - b - 50, c.T - 16, d - b, 16))
    }

    function qW(a, b, c) {
        const d = c.X,
            e = c.T;
        c = c.ba;
        return QC(new UC(a), new Xk(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function rW(a, b, c) {
        const d = a.ba;
        return {
            Ba: d ? sW(a, b, c) : c,
            Ja: d ? c : sW(a, b, c),
            ga: 16
        }
    }

    function sW(a, b, c) {
        const d = a.T;
        return a.pa ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function tW(a, b) {
        const c = b.ba,
            d = b.T;
        a = b.pa ? pW(a, 16, b) : qW(a, 16, b);
        return Array.from(a).map(e => new WC(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function uW(a, b, c, d) {
        const e = document.createElement("SPAN");
        v(e, Pt(a));
        e.id = "gda";
        e.appendChild(vV(a, b.J, L(b.U, 18)));
        b.J.Tb && qV(e);
        fW(b, 1064, e, f => {
            d ? .();
            id(c);
            f.preventDefault();
            f.stopImmediatePropagation();
            return !1
        });
        return e
    }

    function vW(a, b, c, d) {
        const e = document.createElement("SPAN");
        v(e, Pt(a));
        oV(e);
        v(e, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (b.ba(), "50px"),
            right: b.ba() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: b.J.Ab,
            cursor: "pointer",
            transition: "width 5s"
        });
        b.pa || v(e, {
            "justify-content": ""
        });
        const f = tV(a, b.J, b.g.get(d.ya) || 0),
            g = document.createElement("SPAN");
        v(g, {
            display: "inline-block",
            cursor: "inherit"
        });
        v(g, {
            "margin-left": b.ba() ? "6px" : "4px",
            "margin-right": b.ba() ? "4px" : "6px",
            "margin-top": "12px"
        });
        e.appendChild(g);
        g.appendChild(f);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        c.tabIndex = 0;
        c.role = "link";
        c.ariaLive = "polite";
        wW(c, d.ya, L(b.U, 19));
        v(c, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: b.J.Ab
        });
        b.J.Tb && qV(e);
        fW(b, 999, e, h => {
            h.preventDefault();
            if ((d.lg ? ? 0) + 800 <= b.ka(26)) {
                h =
                    d.ya;
                const n = b.l.get(h) || "";
                var k = b.V,
                    l = k.dc;
                var m = po(no(h), d.Cc);
                m = ui(m, 3, d.Ed);
                k = l.call(k, m);
                GV(a, b, k, h, n, b.J.Pc ? b.j.get(h) || "" : null)
            }
            return !1
        });
        e.appendChild(c);
        return e
    }

    function xW(a, b, c, d, e) {
        const f = document.createElement("div");
        v(f, Pt(a));
        f.id = "google-anno-sa";
        f.dir = b.ba() ? "rtl" : "ltr";
        f.tabIndex = 0;
        v(f, {
            background: b.J.se,
            "border-style": "solid",
            bottom: d.ga + "px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: d.Ba + "px",
            right: d.Ja + "px",
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        });
        v(f, {
            fill: "white"
        });
        d = document.createElement("SPAN");
        v(d, Pt(a));
        v(d, {
            cursor: "inherit"
        });
        f.appendChild(vW(a, b, d, c));
        f.appendChild(uW(a, b, f, e));
        return f
    }

    function yW(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.ya);
        if ((d.g.get(e) || 0) !== (d.g.get(a.ya) || 0)) {
            b = tV(b, d.J, d.g.get(a.ya) || 0);
            for (const g of c.getElementsByClassName("google-anno-sa-intent-icon")) g.replaceWith(b)
        }
        wW(f, a.ya, L(d.U, 19));
        c = d.V;
        d = c.ye;
        f = new Nn;
        f = uh(f, 2, ig(a.Cc));
        f = xi(f, 4, a.ya);
        a = wi(f, 3, a.g);
        return d.call(c, a)
    }

    function zW(a, b, c, d) {
        if (oW(b, d)) return null;
        a.lg = c.ka(25);
        d = xW(b, c, a, d, () => {
            a.collapsed = !0;
            var f = c.V,
                g = f.te;
            var h = new Ln;
            h = Kh(h, 3, ig(a.Cc), "0");
            h = xi(h, 2, a.ya);
            g.call(f, h)
        });
        const e = yW(a, b, d, c, a.ya);
        b.document.body.appendChild(d);
        return e
    }

    function AW(a, b, c, d, e, f, g, h) {
        if (!(a.collapsed || a.ya === e && a.Cc === d && a.i === g)) {
            if (a.Ed !== null) {
                var k = a.Ed,
                    l = c.V,
                    m = l.xe,
                    n = new Mn;
                k = vi(n, 1, k);
                m.call(l, k)
            }
            l = a.ya;
            a.ya = e;
            a.g = f;
            a.Cc = d;
            a.i = g;
            K(c.U, 17) || (d = b.document.getElementById("google-anno-sa"), a.Ed = d ? yW(a, b, d, c, l) : zW(a, b, c, h))
        }
    }
    var BW = class {
        constructor() {
            this.ya = "";
            this.g = void 0;
            this.Cc = null;
            this.i = "";
            this.Ed = null;
            this.collapsed = !1;
            this.lg = null
        }
    };

    function wW(a, b, c) {
        a.ariaLabel = c.replace("TERM", b)
    };

    function CW(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (BV) AV.g.push(() => void CW(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            AW(a.A, a.win, a.config, c.i, c.Da, c.g, c.j, a.l);
            DV(a.config, 898, a.win, () => void CW(a, b), a.Yf)
        }
    }
    var DW = class {
        constructor(a, b, c) {
            var d = new BW;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.Yf = b.params.Yf
        }
    };
    class EW {
        constructor(a, b, c, d) {
            this.i = a;
            this.Da = b;
            this.g = c;
            this.j = d
        }
    };
    const FW = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function GW(a, b, c, d, e) {
        d.g.ka(5) >= d.i && await bV(d, 6);
        c.J.We || HW(a, b, c, e, LU(c.U));
        c.J.Xe && !IW(a) || await c.la(898, YV(a, c, d, e, b));
        c.J.Ye || await JW(a, c, () => new kW, d, e)
    }

    function IW(a) {
        try {
            const b = a.location ? .href ? .match(/goog_fac=1/);
            return b !== null && b !== void 0
        } catch (b) {
            return !1
        }
    }
    async function JW(a, b, c, d, e) {
        var f = LU(b.U);
        var g = new RV(b.i);
        for (const h of f) L(h, 6) !== "" && (f = L(h, 1), SV(g, f, f));
        TV(g);
        g = new UV(g);
        g.isEmpty() || await b.la(898, KW(a, b, d, e, g, new lV(b.params.yk, b.params.Pf, b.params.De, b.params.Jd), c()))
    }
    async function KW(a, b, c, d, e, f, g) {
        var h = a.document.body;
        if (K(b.U, 17) || z(b.U, et, 21))
            for (; h;) {
                c.g.ka(7) >= c.i && await bV(c, 8);
                if (h.nodeType === Node.TEXT_NODE && h.textContent !== "" && h.parentElement) {
                    var k = h.parentElement;
                    a: {
                        var l = a;
                        var m = b,
                            n = k,
                            p = h.textContent,
                            r = d,
                            w = e,
                            D = f;
                        const zb = [];b: {
                            var C = p;
                            switch (m.i) {
                                case 1:
                                    var F = Array(C.length),
                                        E = 0;
                                    for (var A = 0; A < C.length; A++) OV.test(C[A]) || E++, F[A] = E;
                                    C = F;
                                    break b;
                                default:
                                    F = Array(C.length);
                                    for (A = E = 0; A < C.length;) {
                                        for (;
                                            /\s/.test(C[A]);) F[A] = E, A++;
                                        for (var J = !1; A < C.length &&
                                            !/\s/.test(C[A]);) J = !0, F[A] = E, A++;
                                        J && (E++, F[A - 1] = E)
                                    }
                                    C = F
                            }
                        }
                        w = p.includes("\u00bb") ? [] : VV(w, p);E = -1;
                        for (const Ab of w)
                            if (w = Ab.g, F = Ab.l, !(w < E)) {
                                A = D;
                                var H = Ab.Da;
                                mV(A.i, A.g + C[w]);
                                J = A;
                                var fa = J.i;
                                if ((fa.g.has(H) ? fa.g.get(H).length : 0) < J.Pf && A.i.j < A.De) {
                                    A = l.getComputedStyle(n);
                                    J = A.fontSize.match(/\d+/);
                                    if (!(J && Number(J[0]) >= 12 && Number(J[0]) <= 22 && Sa(FW, A.display))) {
                                        D.g += C[C.length - 1];
                                        l = [];
                                        break a
                                    }
                                    E += 1;
                                    E < w && zb.push(l.document.createTextNode(p.substring(E, w)));
                                    E = p.substring(w, F + 1);
                                    A = p;
                                    J = w;
                                    fa = F + 1;
                                    fa = A.substring(Math.max(J -
                                        30, 0), J) + "~~" + A.substring(fa, Math.min(fa + 30, A.length));
                                    J = l;
                                    var ab = m.V.Xc();
                                    A = n;
                                    var Ka = E,
                                        na = fa,
                                        qa = Ab.Da;
                                    H = C[w];
                                    fa = A.getBoundingClientRect();
                                    ab = ho(go(new io, ab), 2);
                                    Ka = xi(ab, 2, Ka);
                                    Ka = xi(Ka, 3, na);
                                    qa = xi(Ka, 4, qa);
                                    H = ti(qa, 5, H);
                                    H = ti(H, 6, Math.round(fa.x));
                                    fa = ti(H, 7, Math.round(fa.y));
                                    J = J.getComputedStyle(A);
                                    H = (new fo).setFont(J.fontFamily);
                                    qa = NV(J.color);
                                    H = B(H, 7, qa);
                                    qa = NV(J.backgroundColor);
                                    H = B(H, 8, qa);
                                    qa = J.fontSize.match(/^(\d+(\.\d+)?)px$/);
                                    H = ti(H, 4, qa ? Math.round(Number(qa[1])) : 0);
                                    qa = Math.round(Number(J.fontWeight));
                                    isNaN(qa) || qa === 400 || ti(H, 5, qa);
                                    J.textDecorationLine !== "none" && xi(H, 6, J.textDecorationLine);
                                    J = B(fa, 8, H);
                                    fa = [];
                                    for (Ka = A; Ka && fa.length < 20;) {
                                        A = fa;
                                        H = A.push;
                                        qa = Ka;
                                        na = new $n;
                                        na = xi(na, 1, qa.tagName);
                                        qa.className !== "" && Jh(na, 2, qa.className.split(" "), mg);
                                        H.call(A, na);
                                        if (Ka.tagName === "BODY") break;
                                        Ka = Ka.parentElement
                                    }
                                    A = fa.reverse();
                                    A = Uh(J, 9, A);
                                    r.entries.push(nh(A));
                                    zb.push(LW(l, m, $h(jg(rh(A, 10)), "0"), Ab.Da, E, n));
                                    nV(D.i, Ab.Da, D.g + C[w]);
                                    E = F;
                                    if (jV(D)) break
                                }
                            }
                        m = E + 1;m !== 0 && m < p.length && zb.push(l.document.createTextNode(p.substring(m)));
                        D.g += C[C.length - 1];l = zb
                    }
                    if (l.length && !K(b.U, 17)) {
                        !b.J.Pc && jW(g, a, b.params.xg ? XU(a, b.params.xg) : void 0, L(b.U, 3), z(b.U, et, 21).i(), b.V);
                        for (const zb of l) k.insertBefore(zb, h), MW(zb);
                        k.removeChild(h);
                        for (h = l[l.length - 1]; h.lastChild;) h = h.lastChild;
                        if (jV(f)) break
                    }
                }
                a: {
                    k = a;p = f;l = b.i;D = b.J;
                    if (h.firstChild && (h.nodeType !== Node.ELEMENT_NODE ? 0 : !h.classList ? .contains("google-anno-skip") && (h.offsetHeight || k.getComputedStyle(h).display === "contents"))) {
                        if (KV(h, D)) {
                            h = h.firstChild;
                            break a
                        }
                        if (h.textContent ? .length) {
                            k =
                                p;
                            b: switch (p = h.textContent, l) {
                                case 1:
                                    l = p;
                                    p = 0;
                                    for (D = l.length - 1; D >= 0; D--) OV.test(l[D]) || p++;
                                    l = p;
                                    break b;
                                default:
                                    l = p.trim(), l = l === "" ? 0 : l.split(/\s+/).length
                            }
                            mV(k.i, k.g + l)
                        }
                    }
                    for (;;) {
                        if (h.nextSibling) {
                            h = h.nextSibling;
                            break a
                        }
                        if (!h.parentNode) {
                            h = null;
                            break a
                        }
                        h = h.parentNode
                    }
                    h = void 0
                }
            }
    }

    function NW(a, b) {
        b = {
            ba: b.ba(),
            pa: b.pa,
            T: aq(a),
            X: bq(a)
        };
        if (b.X >= 400) {
            var c;
            if ((c = lW(a, b)) != null) var d = c;
            else a: {
                c = b.T;
                var e = tW(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = rW(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? rW(b, c, a) : null
            }
        } else d = null;
        return d
    }

    function HW(a, b, c, d, e) {
        function f() {
            return h ? ? (h = c.Rb(898, a, () => {
                if (!g) {
                    var l = c.ka(12);
                    a.clearInterval(h);
                    g = !0;
                    var m = NW(a, c);
                    m && OW(a, b, c, d, l, e, m)
                }
            }, c.J.ve))
        }
        if (e.filter(l => L(l, 7).length).length) {
            var g = !1,
                h = void 0,
                k = PW(c, a, () => {
                    if (!(a.scrollY <= c.J.we || g)) {
                        var l = c.ka(12),
                            m = NW(a, c);
                        m ? (g = !0, a.removeEventListener("scroll", k), OW(a, b, c, d, l, e, m)) : h = f()
                    }
                });
            DV(c, 898, a, () => {
                if (!g) {
                    var l = c.ka(12),
                        m = NW(a, c);
                    m ? (g = !0, OW(a, b, c, d, l, e, m)) : h = f()
                }
            }, c.J.ue)
        }
    }

    function OW(a, b, c, d, e, f, g) {
        const h = new DW(a, c, g);
        f.filter(k => L(k, 7).length).forEach(k => {
            var l = c.V.Xc(),
                m = L(k, 1),
                n = pi(k, 2);
            var p = ni(k, 4);
            l = ho(go(new io, l), 1);
            m = xi(l, 4, m);
            n = wi(m, 11, n);
            p = si(n, 12, p);
            d.entries.push(nh(p));
            p = $h(jg(rh(p, 10)), "0");
            n = L(k, 1);
            m = pi(k, 2);
            k = L(k, 1);
            h.i.push(new EW(p, n, m, k));
            h.j && CW(h, b)
        });
        c.V.uf($U(d, c.ka(13) - e))
    }

    function MW(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = iV(gV(getComputedStyle(a.parentElement).color)),
                    c = iV(gV(getComputedStyle(a).color));
                var d = hV(a);
                if (d = b && c && d ? lN(c, d) < Math.min(lN(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    v(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) MW(a.children[b])
        }
    }
    class QW {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function LW(a, b, c, d, e, f) {
        const g = a.document.createElement("SPAN");
        g.className = "google-anno-t";
        oV(g);
        v(g, {
            "text-decoration": "underline"
        });
        v(g, {
            "text-decoration-style": "dotted"
        });
        v(g, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        v(g, {
            color: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            "font-weight": "inherit"
        });
        g.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        oV(e);
        v(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        bc(e);
        e.className = "google-anno";
        b.J.Tb && qV(e);
        e.appendChild(rV(a, a.getComputedStyle(f).fontSize));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(g);
        const h = RW(b, c, e);
        fW(b, 999, e, k => {
            try {
                var l = b.V,
                    m = l.dc,
                    n = po(no(d), c);
                var p = ui(n, 2, h.i);
                const r = m.call(l, p);
                GV(a, b, r, d, b.C.get(d) || "", b.J.Pc ? b.j.get(d) || "" : null);
                return !1
            } finally {
                k.preventDefault(), k.stopImmediatePropagation()
            }
        });
        return e
    }

    function RW(a, b, c) {
        const d = new QW;
        iW(a, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.V;
                    var g = e.xf,
                        h = new to;
                    f = Kh(h, 2, ig(f), "0");
                    d.g = g.call(e, f)
                } else d.g && (e = a.V, g = e.wf, f = new so, f = vi(f, 1, d.g), g.call(e, f), d.g = null)
        }).observe(c);
        return d
    };

    function SW(a, b, c) {
        TW(a);
        var d = new Map;
        for (const e of b) b = UW(e), d.set(b, (d.get(b) ? ? 0) + 1);
        for (const [e, f] of d) d = e, VW(a, f, d, c), WW(a, d)
    }

    function XW(a, b, c, d) {
        a.i.forEach(e => {
            YW(e, { ...a.g,
                outcome: b,
                yc: c,
                gf: d
            })
        })
    }

    function ZW(a, b, c, d, e) {
        a.i.forEach(f => {
            f.Ae(b, { ...a.g,
                outcome: c,
                yc: d,
                gf: e
            })
        })
    }

    function TW(a) {
        a.l || (a.l = !0, a.i.forEach(b => {
            $W(b, a.g)
        }))
    }

    function VW(a, b, c, d) {
        a.i.forEach(e => {
            e.Ce(b, { ...a.g,
                format: c,
                yc: d
            })
        })
    }

    function WW(a, b) {
        a.A.has(b) || (a.A.add(b), a.i.forEach(c => {
            aX(c, { ...a.g,
                format: b
            })
        }))
    }

    function bX(a, b) {
        a.i.forEach(c => {
            cX(c, { ...a.g,
                reason: dX(b)
            })
        })
    }
    var kX = class {
        constructor(a, b) {
            this.language = a;
            this.C = this.j = 1;
            this.l = !1;
            this.g = {
                language: this.language,
                browser: Hc() ? 1 : Gc() ? 2 : (Bc() ? 0 : u("Edge")) ? 3 : Ec() ? 4 : Dc() ? 5 : !u("iPad") && !u("iPhone") || Fc() || Gc() || (Bc() ? 0 : u("Coast")) || Ec() || !u("AppleWebKit") ? Cc() ? 6 : Fc() ? 7 : u("Silk") ? 8 : 0 : 9
            };
            this.A = new Set;
            this.i = [...b]
        }
        Xc() {
            return this.C++
        }
        Be(a) {
            a: switch (Oh(a, lo)) {
                case 4:
                    var b = 1;
                    break a;
                case 5:
                    b = 2;
                    break a;
                default:
                    b = 0
            }
            const c = eX(a);
            var d = ei(a, 3),
                e = c.length > 0;XW(this, b, !1, e);ZW(this, d, b, !1, e);a.g() && c.length > 0 && SW(this,
                c, !1);
            if (yh(a, Zn, 5, lo)) {
                a = li(a, Zn, 5, lo);
                for (const f of Th(a, Un, 1, y())) bX(this, f)
            }
            this.j++
        }
        uf(a) {
            const b = a.g() ? 1 : 0,
                c = eX(a);
            var d = ei(a, 2),
                e = c.length > 0;
            XW(this, b, !0, e);
            ZW(this, d, b, !0, e);
            a.g() && c.length > 0 && SW(this, c, !0);
            this.j++
        }
        xf() {
            this.i.forEach(a => {
                fX(a, { ...this.g,
                    format: 2
                })
            });
            return this.j++
        }
        wf() {
            this.i.forEach(a => {
                gX(a, { ...this.g,
                    format: 2
                })
            });
            this.j++
        }
        ye() {
            this.i.forEach(a => {
                fX(a, { ...this.g,
                    format: 1
                })
            });
            return this.j++
        }
        xe() {
            this.i.forEach(a => {
                gX(a, { ...this.g,
                    format: 1
                })
            });
            this.j++
        }
        Le() {
            this.i.forEach(a => {
                fX(a, { ...this.g,
                    format: 3
                })
            });
            return this.j++
        }
        Ke() {
            this.i.forEach(a => {
                gX(a, { ...this.g,
                    format: 3
                })
            });
            this.j++
        }
        dc(a) {
            let b = 0;
            Yh(a, 2) != null ? b = 2 : Yh(a, 3) != null ? b = 1 : Yh(a, 7) != null && (b = 3);
            this.i.forEach(c => {
                c.click({ ...this.g,
                    format: b
                })
            });
            return this.j++
        }
        Zd(a) {
            let b = 0;
            yh(a, vo, 2, xo) ? b = 1 : yh(a, uo, 3, xo) && (b = 2);
            this.i.forEach(c => {
                hX(c, { ...this.g,
                    type: b
                })
            });
            this.j++
        }
        Ze(a) {
            a: switch (hi(a, 1)) {
                case 1:
                    a = 1;
                    break a;
                case 2:
                    a = 2;
                    break a;
                default:
                    a = 0
            }
            const b = a;this.i.forEach(c => {
                iX(c, { ...this.g,
                    type: b
                })
            });this.j++
        }
        te() {
            this.i.forEach(a => {
                jX(a, this.g)
            });
            this.j++
        }
    };

    function eX(a) {
        a.g() ? (a = a.j(), a = [...Th(a, io, 2, y())]) : a = [];
        return a
    }

    function dX(a) {
        switch (Oh(a, Vn)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 9:
                return 4;
            case 11:
                return 5;
            case 12:
                return 6;
            case 13:
                return 7;
            default:
                return 0
        }
    }

    function UW(a) {
        switch (hi(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return 0
        }
    };

    function lX(a, b) {
        var c = new yo;
        var d = a.j++;
        c = vi(c, 1, d);
        b = vi(c, 2, Math.round(a.l.ka(b) - a.C));
        b = B(b, 10, a.B);
        return ri(b, 15, a.I ? !0 : void 0)
    }
    var mX = class {
        constructor(a, b, c, d, e, f, g) {
            this.l = b;
            this.C = c;
            this.B = d;
            this.I = e;
            this.i = this.j = 1;
            this.A = [...f];
            this.g = g.length ? new kX(a, g) : null
        }
        Xc() {
            return this.i++
        }
        Be(a) {
            this.g ? .Be(a);
            var b = this.handle,
                c = lX(this, 11);
            a = G(c, 3, zo, a);
            b.call(this, a)
        }
        uf(a) {
            this.g ? .uf(a);
            var b = this.handle,
                c = lX(this, 11);
            a = G(c, 14, zo, a);
            b.call(this, a)
        }
        xf(a) {
            this.g ? .xf(a);
            var b = this.handle,
                c = lX(this, 15);
            a = G(c, 4, zo, a);
            return b.call(this, a)
        }
        wf(a) {
            this.g ? .wf(a);
            var b = this.handle,
                c = lX(this, 16);
            a = G(c, 5, zo, a);
            b.call(this, a)
        }
        ye(a) {
            this.g ? .ye(a);
            var b = this.handle,
                c = lX(this, 17);
            a = G(c, 6, zo, a);
            return b.call(this, a)
        }
        xe(a) {
            this.g ? .xe(a);
            var b = this.handle,
                c = lX(this, 18);
            a = G(c, 7, zo, a);
            b.call(this, a)
        }
        Le(a) {
            this.g ? .Le(a);
            var b = this.handle,
                c = lX(this, 19);
            a = G(c, 16, zo, a);
            return b.call(this, a)
        }
        Ke(a) {
            this.g ? .Ke(a);
            var b = this.handle,
                c = lX(this, 20);
            a = G(c, 17, zo, a);
            b.call(this, a)
        }
        dc(a) {
            this.g ? .dc(a);
            var b = this.handle,
                c = lX(this, 14);
            a = G(c, 8, zo, a);
            return b.call(this, a)
        }
        Zd(a) {
            this.g ? .Zd(a);
            var b = this.handle,
                c = lX(this, 21);
            a = G(c, 9, zo, a);
            b.call(this, a)
        }
        Ze(a) {
            this.g ? .Ze(a);
            var b = this.handle,
                c = lX(this, 22);
            a = G(c, 11, zo, a);
            b.call(this, a)
        }
        te(a) {
            this.g ? .te(a);
            var b = this.handle,
                c = lX(this, 24);
            a = G(c, 12, zo, a);
            b.call(this, a)
        }
        handle(a) {
            for (const b of this.A) b(a);
            return ei(a, 1)
        }
    };

    function DV(a, b, c, d, e) {
        c.setTimeout(nX(a, b, d), e)
    }

    function fW(a, b, c, d) {
        c.addEventListener("click", nX(a, b, d))
    }

    function iW(a, b) {
        return new IntersectionObserver(nX(a, 1065, b), {
            threshold: .98
        })
    }

    function PW(a, b, c) {
        a = nX(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function nX(a, b, c) {
        return a.za.Ca(b, c, void 0, d => {
            d.es = a.J.Mb.join(",")
        })
    }
    var pX = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.pa = a;
            this.U = b;
            this.za = c;
            this.V = d;
            this.B = e;
            this.params = f;
            this.J = g;
            this.ld = h;
            this.C = new Map;
            this.l = new Map;
            this.A = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = Sa(oX, L(b, 7)) ? 1 : 0;
            for (const k of LU(this.U)) I(k, 6) != null && this.C.set(L(k, 1), L(k, 6)), I(k, 7) != null && this.l.set(L(k, 1), L(k, 7)), I(k, 5) != null && this.A.set(L(k, 1), L(k, 5)), ci(k, 10) != null && this.g.set(L(k, 1), hi(k, 10)), I(k, 11) != null && this.j.set(L(k, 1), L(k, 11))
        }
        Wb(a, b, c) {
            a = nX(this, a, c);
            b.addEventListener("message",
                a);
            return a
        }
        Rb(a, b, c, d) {
            return b.setInterval(nX(this, a, c), d)
        }
        la(a, b) {
            this.za.la(a, b, c => {
                c.es = this.J.Mb.join(",")
            });
            return b
        }
        ka(a) {
            return this.B.ka(a)
        }
        ba() {
            return hi(this.U, 12) === 2
        }
    };
    const oX = ["ja", "zh_CN", "zh_TW"];
    const qX = new Map([
        [1, 1],
        [2, 2]
    ]);
    async function rX(a, b, c, d, e, f, g, h) {
        var k = Y,
            l = ((h = rO(new vO(a), "__gads", h)) ? Ed(h + "t2Z7mVic") % 20 : null) ? ? Math.floor(Bd() * 20);
        h = f.ka(0);
        const m = aq(a) < 488,
            n = c.U;
        var p;
        p = (p = L(n, 7)) ? (p = p.match(/^[a-z]{2,3}/i)) ? p[0].toLowerCase() : "" : "";
        var r = c.J,
            w = new qo;
        l = ti(w, 2, l);
        l = Vh(l, 3, Uf, r.Mb, Zh, void 0, !0);
        d = new mX(p, f, h, l, K(n, 17), d, e);
        e = new pX(m, n, k, d, f, c.params, c.J, c.ld);
        k = new aV;
        k.language = p;
        b = await sX(a, b, e, g, k);
        d.Be(YU(k, m, c.jd, a.location.hostname, c.oj, n, f.ka(11) - h, b))
    }
    async function sX(a, b, c, d, e) {
        var f = a.document.body;
        if (!f || !tX(f)) return [Tn()];
        d.g.ka(3) >= d.i && await bV(d, 4);
        f = [];
        !c.J.re && a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]') && f.push(Wn());
        (c.J.Rd && aq(a) < c.J.Rd || c.J.Qd && bq(a) < c.J.Qd) && f.push(Tn());
        if (ki(c.U, 1, y()).length) {
            const g = ki(c.U, 1, y()).map(h => qX.get(h) ? ? 0);
            f.push(Yn(new Un, Qn(g)))
        }
        Gd() && f.push(Xn());
        f.length || (await GW(a, b, c, d, e), c.J.If && e.entries.length && !K(c.U, 17) && uX(a, c));
        return f
    }

    function tX(a) {
        try {
            (new ResizeObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    }

    function uX(a, b) {
        if (b.params.uh)
            for (const c of b.params.uh) {
                b = a.document.createElement("link");
                if (c instanceof Ob) b.href = Rb(c).toString(), b.rel = "prefetch";
                else {
                    if (kc.indexOf("prefetch") === -1) throw Error('TrustedResourceUrl href attribute required with rel="prefetch"');
                    const d = ac(c);
                    d !== void 0 && (b.href = d, b.rel = "prefetch")
                }
                b.as = "script";
                b.g = "low";
                a.document.head.appendChild(b)
            }
    };
    async function vX(a, b, c, d, e, f, g) {
        W(Kv) || (a = await wX(a, b, c, d, e, f, g), a.qd.length && (b = YU(new aV, !!b && aq(b) < 488, xX(c), b ? .location ? .hostname ? ? "", g, a.kc ? ? new MU, 0, a.qd), g = Math.floor(Bd() * 20), c = new yo, c = vi(c, 1, 1), c = vi(c, 2, 0), d = new qo, g = ti(d, 2, g), d = yX(a.kc), g = Vh(g, 3, Uf, d, Zh, void 0, !0), c = B(c, 10, g), b = G(c, 3, zo, b), zX(cF(), b, Date.now(), a.kc)))
    }
    async function wX(a, b, c, d, e, f, g) {
        const h = a.performance ? .now ? new dV(a.performance) : new eV,
            k = new cV(a, h);
        if (typeof e !== "string") {
            if (W(Ov)) throw Error(`Invalid config string ${e}`);
            e = new Un;
            b = new Sn;
            return {
                kc: null,
                qd: [G(e, 12, Vn, b)]
            }
        }
        const l = QU(e);
        e = Rh(l, MU);
        if (!b) return b = new Un, d = new Sn, b = G(b, 9, Vn, d), {
            kc: e,
            qd: [b]
        };
        var m = c.google_ad_client;
        if (typeof m !== "string") throw new Qy(`Invalid property code ${m}`);
        const n = (W(Pv) ? hi(l, 4) === 2 : W(Lv)) ? new WU(m, W(Hv) ? de(a) : null) : new VU(m);
        a = cF();
        c = xX(c);
        var p = yX(e);
        a: {
            try {
                const D = b ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (!D) {
                    var r = null;
                    break a
                }
                var w = decodeURIComponent(D[1]);
                r = NU(w);
                break a
            } catch (D) {
                r = null;
                break a
            }
            r = void 0
        }
        r = r || Rh(l, MU);
        w = Sh(l, l.P[x], mt, 3, 1);
        m = W(Fv) ? (W(Pv) ? hi(l, 4) === 2 : W(Lv)) ? [Zc `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${m}`] : [] : void 0;
        m = {
            yk: X(Uv),
            Pf: X(Yv),
            De: X(Wv),
            Jd: X(Xv),
            xg: w,
            Yf: X(aw),
            uh: m
        };
        g = {
            U: r,
            jd: c,
            oj: g,
            params: m,
            J: new SU({
                Mb: p,
                We: W(kv),
                Ye: W(mv),
                Rd: X($v),
                Qd: X(Zv),
                ve: X(Sv),
                se: Jw(pv),
                Ab: Jw(qv),
                ue: X(Rv),
                we: X(Tv),
                Xe: W(lv),
                Je: Jw(gv),
                ed: Jw(hv),
                Ld: X(xv),
                Pc: W(Pv) ? hi(l, 4) === 2 : W(Lv),
                ff: Kw(sv),
                pf: W(uv),
                Kd: X(wv),
                Lf: W(Jv),
                re: W(bv),
                Hd: X(zv),
                Tb: W(Nv),
                bf: W(nv),
                If: W(Fv),
                ac: W(fv),
                wh: W(Gv),
                Ue: W(jv),
                Wf: W(Mv),
                Pd: X(Av),
                Lb: X(yv)
            }),
            ld: n
        };
        await AX(b, d, a, g, h, k, f);
        return {
            kc: e,
            qd: []
        }
    }

    function yX(a) {
        const b = Hp(Kp).g();
        a && b.push(...ii(a, 24));
        b.push(...Kw(Qv).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }
    async function AX(a, b, c, d, e, f, g) {
        const h = OA(a);
        h.wasReactiveAdConfigReceived[42] || (h.wasReactiveAdConfigReceived[42] = !0, await rX(a, b, d, [k => {
            zX(c, k, e.ka(23), d.U)
        }], [new BX(c, d.U)], e, f, g))
    }

    function zX(a, b, c, d) {
        a && Y.la(1214, oF(a, b, c), e => void CX(e, d))
    }

    function $W(a, b) {
        DX(a, c => c.hi, {
            ha: 1,
            ...b
        })
    }

    function aX(a, b) {
        DX(a, c => c.jj, {
            ha: 1,
            ...b
        })
    }

    function YW(a, b) {
        DX(a, c => c.ii, {
            ha: 1,
            ...b
        })
    }

    function cX(a, b) {
        DX(a, c => c.ji, {
            ha: 1,
            ...b
        })
    }

    function fX(a, b) {
        DX(a, c => c.li, {
            ha: 1,
            ...b
        })
    }

    function gX(a, b) {
        DX(a, c => c.ki, {
            ha: 1,
            ...b
        })
    }

    function hX(a, b) {
        DX(a, c => c.dk, {
            ha: 1,
            ...b
        })
    }

    function iX(a, b) {
        DX(a, c => c.Ti, {
            ha: 1,
            ...b
        })
    }

    function jX(a, b) {
        DX(a, c => c.gi, {
            ha: 1,
            ...b
        })
    }

    function DX(a, b, c) {
        a.g && a.za.la(1214, pF(a.g, b, c), d => void CX(d, a.i))
    }

    function EX(a, b, c) {
        a.g && a.za.la(1214, qF(a.g, b, c), d => void CX(d, a.i))
    }
    class BX {
        constructor(a, b) {
            var c = Y;
            this.g = a;
            this.za = c;
            this.i = b
        }
        Ae(a, b) {
            EX(this, c => c.Ae, {
                Mc: a,
                ...b
            })
        }
        Ce(a, b) {
            DX(this, c => c.Ce, {
                ha: a,
                ...b
            })
        }
        click(a) {
            DX(this, b => b.Hi, {
                ha: 1,
                ...a
            })
        }
    }

    function CX(a, b) {
        a.es = yX(b).join(",")
    }

    function xX(a) {
        a = a.google_page_url;
        return typeof a === "string" ? a : ""
    };

    function FX(a, b) {
        const c = zd("STYLE", a);
        c.textContent = oc(Oc `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    }

    function GX(a, b, c) {
        if (!a.body) return null;
        const d = new HX;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && FX(b.document, e);
            kl(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.l,
                top: d.A
            });
            b.scrollTo(0, d.i)
        }
    }
    class HX {
        constructor() {
            this.g = this.A = this.l = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.l = a.body.style.position;
            this.A = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = jq(b);
            kl(a.body, "top", `${-this.i}px`)
        }
    };

    function IX(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.i.parentElement; c;) {
                a.j.push(c);
                if (a.H(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var JX = class extends S {
        constructor(a, b, c) {
            super();
            this.i = a;
            this.R = b;
            this.B = c;
            this.j = null;
            Eq(this, () => this.j = null)
        }
        H(a) {
            return this.B === a
        }
    };

    function KX(a, b) {
        const c = a.B;
        c && (b ? (WA(a.F), v(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = GX(a.A, a.R, a.W)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (XA(a.F), v(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function LX(a) {
        KX(a, !1);
        const b = a.B;
        if (b) {
            var c = MX(a.L);
            IX(a, d => {
                v(d, c);
                nq(d)
            });
            a.i.setAttribute("width", "");
            a.i.setAttribute("height", "");
            kl(a.i, c);
            kl(a.i, NX);
            kl(b, OX);
            kl(b, {
                background: "transparent"
            });
            v(b, {
                display: "none",
                position: "fixed"
            });
            nq(b);
            nq(a.i);
            ie(a.L) <= 1 || (kl(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Vd(b))
        }
    }
    class PX extends JX {
        constructor(a, b, c) {
            var d = X(ww);
            super(a, b, c);
            this.l = null;
            this.A = b.document;
            this.W = d;
            this.F = RA(new VA(b), 2147483646);
            this.L = b
        }
        hide() {
            KX(this, !1)
        }
    }

    function MX(a) {
        a = ie(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var OX = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        NX = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var QX = class extends PX {
        constructor(a, b, c) {
            super(b, a, c);
            LX(this)
        }
        H(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : Sa(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const RX = {
        [1]: "closed",
        [2]: "viewed",
        [3]: "dismissed"
    };
    async function SX(a, b, c, d) {
        a = new TX(a, b, c, d);
        await a.M();
        return a
    }

    function UX(a) {
        return setTimeout(Uy(728, () => {
            VX(() => {
                a.A.reject()
            });
            a.dispose()
        }), X(ow) * 1E3)
    }

    function WX(a, b) {
        var c = rN(a.i).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        Y.la(1005, c);
        c = sN(a.i).then(d => {
            a.hide(RX[d.status], d.payload)
        });
        Y.la(1006, c);
        c = tN(a.i).then(() => {
            a.hide("error")
        });
        Y.la(1004, c)
    }

    function XX(a) {
        if (W(pw)) {
            a.win.location.hash !== "" && Vy("pub_hash", {
                o_url: a.win.location.href
            }, .1);
            a.win.location.hash = "goog_fullscreen_ad";
            var b = Uy(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.l === 10 ? a.hide("closed") : a.i.Oe.postMessage(JSON.stringify({
                    eventType: "backButton",
                    googMsgType: "fullscreen"
                }), "*"), a.win.removeEventListener("hashchange", b))
            });
            a.win.addEventListener("hashchange", b);
            Eq(a, () => {
                a.win.removeEventListener("hashchange", b);
                a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
            })
        }
    }

    function VX(a) {
        try {
            a()
        } catch (b) {}
    }
    var TX = class extends S {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.B = b;
            this.H = c;
            this.l = d;
            this.j = null;
            this.F = new QX(a, c, b);
            a = new vN(this.l === 10 ? 1 : 2, this.win, this.H.contentWindow);
            a.M();
            this.i = a;
            this.A = new qN;
            this.B.dataset["slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async M() {
            const a = UX(this);
            WX(this, a);
            Eq(this, () => {
                this.i.dispose();
                clearTimeout(a);
                id(this.B)
            });
            await this.A.promise
        }
        show(a) {
            this.C || (this.j = a, KX(this.F, !0), t.IntersectionObserver || this.i.Oe.postMessage(JSON.stringify({
                    eventType: "visible",
                    googMsgType: "fullscreen"
                }),
                "*"), XX(this))
        }
        disposeAd() {
            this.dispose()
        }
        hide(a, b) {
            this.F.hide();
            this.j && (W(lu) && b && (a === "granted" || a === "viewed") ? VX(() => {
                this.j({
                    status: a,
                    reward: b
                })
            }) : VX(() => {
                this.j({
                    status: a
                })
            }));
            this.dispose()
        }
    };

    function YX({
        sg: a,
        Fh: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function ZX(a) {
        $l(Y, b => {
            b.shv = String(a);
            b.mjsv = YX({
                sg: CE(),
                Fh: a
            });
            b.eid = yO(t)
        })
    }

    function $X(a, b) {
        const c = b ? .g();
        b = c ? .g() || L(a, 2);
        a = c ? .j() ? K(c, 4) : K(a, 6);
        ZX(b);
        Ee(dO, Ke);
        dO = a
    };
    var aY = typeof sttc === "undefined" ? void 0 : sttc;

    function bY(a) {
        var b = Y;
        try {
            return Ee(a, Je), new bO(JSON.parse(a))
        } catch (c) {
            b.aa(838, c instanceof Error ? c : Error(String(c)))
        }
        return new bO
    };

    function cY(a, b, c, d) {
        const e = new qN;
        let f = "";
        const g = k => {
            try {
                const l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                f === l.paw_id && (sb(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (h) return rb(a, "message", g), f = c(h), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(Bd() * 2147483647)), rb(a, "message", g), b(c, f), e.promise) : null
    }

    function dY(a) {
        return cY(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    }(function(a) {
        return Ge(b => {
            if (!Ne(b)) return !1;
            for (const [c, d] of Object.entries(a)) {
                const e = c,
                    f = d;
                if (!(e in b)) {
                    if (f.Ej === !0) continue;
                    return !1
                }
                if (!f(b[e])) return !1
            }
            return !0
        })
    })({
        vc: Je,
        pn: Je,
        eid: Je,
        vnm: function(a) {
            return Oe(Ge((b, c) => b === void 0 ? !0 : a(b, c)))
        }(Je),
        js: Je
    }, "RawGmaSdkStaticSignalObject");
    const eY = (a, b) => {
        try {
            const l = K(b, 6) === void 0 ? !0 : K(b, 6);
            var c = Ck(hi(b, 2)),
                d = L(b, 3);
            a: switch (hi(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Ek(c, d, e),
                g = z(b, xk, 5) ? .g() ? ? "";
            f.zc = g;
            f.g = l;
            var h = !!K(b, 7);
            f.Qa = h;
            f.win = a;
            var k = f.build();
            vk(k)
        } catch {}
    };

    function fY(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? eY(a, b) : rb(a, "load", () => void eY(a, b)))
    };

    function gY(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function hY(a) {
        if (a === a.top || ud(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && gY(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new qN;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                sc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function UE() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), fe(X(mw), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function iY(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function jY({
        ra: a,
        ua: b,
        Ua: c,
        slot: d,
        pageState: e
    }) {
        const f = d.vars,
            g = xd(d.pubWin),
            h = iY(d),
            k = new bS({
                K: g,
                pubWin: d.pubWin,
                D: f,
                ra: a,
                ua: b,
                Ua: c,
                Z: h,
                pageState: e
            });
        k.H = Date.now();
        Wk(1, [k.D]);
        Ty(1032, () => {
            if (g && W(Fw)) {
                var l = k.D;
                LE(GE(), 32, !1) || (ME(GE(), 32, !0), eU(g, l.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            await kY(k)
        } catch (l) {
            if (!Y.aa(159, l, void 0, void 0)) throw l;
        }
        Ty(639, () => {
            var l;
            var m = k.D;
            (l = k.K) && m.google_responsive_auto_format === 1 && m.google_full_width_responsive_allowed === !0 ? (m = (m = l.document.getElementById(m.google_async_iframe_id)) ?
                nd(m, "INS", "adsbygoogle") : null) ? ((new aS(l, m)).run(), l = !0) : l = !1 : l = !1;
            return l
        });
        g ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? Wy(1008, lY(d.pubWin, g, f, k.j, Bi(OU()), k.g, L(e.g(), 8) || L(a, 8)), l => void CX(l, null)) : nN(k.pubWin, "affa", l => {
            Wy(1008, lY(d.pubWin, g, f, k.j, l.config, k.g, L(e.g(), 8) || L(a, 8)), m => void CX(m, null));
            return !0
        });
        mY(k);
        return k
    }
    async function lY(a, b, c, d, e, f, g) {
        await vX(a, b, c, d, e, f, g)
    }

    function kY(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        wO(13, b);
        wO(11, b);
        a.B = li(a.ra, $N, 13, cO) ? .g() ? ? !0;
        b = GE();
        var c = LE(b, 23, !1);
        c || ME(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.ra;
            b = yh(c, $N, 13, cO) ? z(li(c, $N, 13, cO), SK, 2) : yh(c, aO, 14, cO) && li(c, aO, 14, cO) ? .j() === b || bb(li(c, aO, 14, cO) ? .g() ? ? [], [b]) ? z(z(li(c, aO, 14, cO), $N, 2), SK, 2) : new SK;
            c = a.pubWin;
            var d = a.D.google_ad_client,
                e = K(a.ra, 6),
                f = K(a.ra, 20);
            b = new TK(c, d, b, e, f);
            b.i = !0;
            b.run()
        }
        W(Su) && (hB(a.pubWin).overrideBodyHeightOnPreventScrolling = !0, a.K && a.K !== a.pubWin && (hB(a.K).overrideBodyHeightOnPreventScrolling = !0));
        W(Qu) && (a.pubWin.googFloatingToolbarManagerAsyncPositionUpdate = !0, a.K && a.K !== a.pubWin && (a.K.googFloatingToolbarManagerAsyncPositionUpdate = !0));
        b = !dl() && !Cc();
        return !b || b && !nY(a) ? oY(a) : Promise.resolve()
    }

    function nY(a) {
        return pY(a) || qY(a)
    }

    function pY(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                Vy("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = Uy(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!nY(a)) {
                    const e = oY(a);
                    Y.la(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function qY(a) {
        const b = a.pubWin.document,
            c = a.Z;
        if (WQ(b) === 3) return ZQ(Uy(332, () => {
            if (!rY(a, sY().visible, c)) {
                const g = oY(a);
                Y.la(1222, g)
            }
        }), b), !0;
        const d = sY();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = XQ(b);
        if (!e) return !1;
        if (!YQ(b)) return rY(a, d.visible, c);
        if (CQ(a.K, a.pubWin, c) <= d.hidden) return !1;
        let f = Uy(332, () => {
            if (!YQ(b) && f) {
                sb(b, e, f);
                if (!rY(a, d.visible, c)) {
                    const g = oY(a);
                    Y.la(1222, g)
                }
                f = null
            }
        });
        return rb(b, e, f)
    }

    function sY() {
        var a = X(ou);
        const b = X(pu);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, t.IntersectionObserver || (a.visible = -1), rd() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: t.IntersectionObserver ? rd() ? a : b : -1
        }
    }

    function rY(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.D;
        if (!hq(d.google_reactive_ad_format) && (wR(d) || d.google_reactive_ads_config) || !AQ(c) || CQ(a.K, a.pubWin, c) <= b) return !1;
        var e = GE(),
            f = LE(e, 8, {});
        e = LE(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                Ma(l, n => {
                    n.intersectionRatio <= 0 || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${b*100}%`
            });
            a.L = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event", () => {
                h(void 0)
            })
        });
        ia(Promise, "any").call(Promise, [f, e]).then(() => {
            Ty(294, () => {
                const h = oY(a);
                Y.la(1222, h)
            })
        });
        return !0
    }

    function oY(a) {
        Ty(326, () => {
            var c = a.pubWin,
                d = a.K,
                e = a.ra,
                f = a.pageState,
                g = a.ua;
            if (zl(a.D) === 1) {
                var h = W(Gw);
                if ((h || W(Ew)) && c === d) {
                    var k = new Qk;
                    d = new Rk;
                    var l = k.setCorrelator(de(c));
                    var m = yO(c);
                    l = xi(l, 5, m);
                    N(l, 2, 1);
                    k = d.setParameters(k);
                    l = new Pk;
                    l = M(l, 10, !0);
                    m = W(zw);
                    l = M(l, 8, m);
                    m = W(Aw);
                    l = M(l, 12, m);
                    m = W(Dw);
                    l = M(l, 7, m);
                    m = W(Cw);
                    l = M(l, 13, m);
                    B(k, 2, l);
                    c.google_rum_config = Ci(d);
                    e = (zi(f.g(), 6) ? K(f.g(), 6) : K(e, 9)) && h ? g.ek : g.fk;
                    yd(c.document, e)
                } else Sy.disable()
            }
        });
        a.D.google_ad_channel = tY(a, a.D.google_ad_channel);
        a.D.google_tag_partner = uY(a, a.D.google_tag_partner);
        AO(a.K, a.D);
        const b = a.D.google_start_time;
        typeof b === "number" && (Rp = b, a.D.google_start_time = null);
        OP(a);
        a.K && AR(a.K, $c(a.ua.Pi, new Map(Object.entries(VQ()))));
        PE() && $c(a.ua.Yb, new Map(Object.entries(VQ())));
        wR(a.D) && (UN() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return vY(a)
    }

    function tY(a, b) {
        return (b ? [b] : []).concat(VE(a.pubWin).ad_channels || []).join("+")
    }

    function uY(a, b) {
        return (b ? [b] : []).concat(VE(a.pubWin).tag_partners || []).join("+")
    }

    function wY(a) {
        const b = zd("IFRAME");
        Cd(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function xY(a, b, c) {
        return a.D.google_reactive_ad_format === 9 && nd(a.Z, null, "fsi_container") ? (a.Z.appendChild(b), Promise.resolve(b)) : HR(a.ua.yh, 525, d => {
            a.Z.appendChild(b);
            const e = FK(c, a.pubWin);
            d.createAdSlot(a.K, a.D, b, a.Z.parentElement, e);
            return b
        })
    }

    function yY(a, b, c, d) {
        kF();
        cF().jd = a.D.google_page_url;
        d = Ak(zk(N(N(yk(new Bk, wk(new xk, String(de(a.pubWin)))), 4, 1), 2, 1), a.pageState.g().g() || L(a.ra, 2)), d.g());
        W(eu) && M(d, 7, !0);
        fY(a.pubWin, d);
        const e = a.K;
        if (a.D.google_acr)
            if (a.D.google_wrap_fullscreen_ad) {
                const h = a.D.google_acr;
                SX(a.pubWin, a.Z.parentElement, b, a.D.google_reactive_ad_format).then(h).catch(() => {
                    h(null)
                })
            } else a.D.google_acr(b);
        rb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const h = e ? VE(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp ||
                h) && e && e === a.pubWin && zY(e, a, a.Z, b)
        });
        d = h => {
            h && a.j.push(() => {
                h.dispose()
            })
        };
        const f = FQ(a, b);
        EQ(a.pubWin, a.g, b.contentWindow, a.j);
        !e || wR(a.D) && !KR(a.D) || (a.D.no_resize || d(new jT(e, b, a.Z)), d(new BS(a, b)), d(e.IntersectionObserver ? null : new DS(e, b, a.Z)), e.IntersectionObserver && d(uT(e, b, a.D, a.Z, Uy(1225, () => {
            f();
            for (const h of a.j) h();
            a.j.length = 0
        }))));
        if (e) {
            d(vS(e, b, a.g));
            if (W(Pu)) {
                var g = rT(e, b, a.Z, a.g);
                g && d(g)
            }
            a.j.push(UR(e, a.D));
            Hp($R).M(e);
            a.j.push(pS(e, a.Z, b))
        }
        b && b.setAttribute("data-google-container-id",
            c);
        c = a.D.iaaso;
        c != null && (d = a.Z, g = d.parentElement, (g && Ww.test(g.className) ? g : d).setAttribute("data-auto-ad-size", c));
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        AY(a);
        zT(a);
        W(du) && JP(a, b)
    }

    function AY(a) {
        const b = dl(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                rb(a.pubWin, "message", Y.Ca(616, c));
                a.j.push(() => {
                    sb(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function zY(a, b, c, d) {
        HO(new QO(a), c).then(e => {
            Wk(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && Ww.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.Xg));
            return e
        }).then(e => {
            const f = b.D.armr || "",
                g = e.cj || "",
                h = b.D.iaaso == null ? "" : Number(b.D.iaaso),
                k = Number(e.Xg),
                l = Pa(e.entries, C => `${C.sb}:${C.oh}:${C.qh}`),
                m = Number(e.Vj.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p = m * e.Ub.width * e.Ub.height,
                r = `${e.Eh.scrollX},${e.Eh.scrollY}`,
                w = Al(e.target),
                D = [e.Ub.left, e.Ub.top, e.Ub.right,
                    e.Ub.bottom
                ].join();
            e = `${e.Sh.width}x${e.Sh.height}`;
            Vy("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: yO(b.D),
                et: g,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.D.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.D.google_responsive_auto_format,
                roa: p,
                slot: b.D.google_ad_slot,
                sp: r,
                tgt: w,
                tr: D,
                url: b.D.google_page_url,
                vp: e,
                pvc: de(a)
            }, 1)
        }).catch(e => {
            Wk(8, ["Error:", e.message, c]);
            Vy("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function BY(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function CY(a, b, c) {
        var d = a.D,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            g = d.google_ad_height,
            h = LR(d);
        e = {
            id: e,
            name: e
        };
        var k = a.D,
            l = a.l;
        iO("browsing-topics", a.pubWin.document) && nS(c, k) && !W(qw) && !kS(l ? .label) && (e.browsingTopics = "true");
        e.style = h ? [`width:${f}px !IMPORTANT`, `height:${g}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${g}px;`;
        k = Pd();
        if (k["allow-top-navigation-by-user-activation"] && k["allow-popups-to-escape-sandbox"]) {
            if (!h)
                if (k = b, b =
                    "fsb=" + encodeURIComponent("1")) {
                    l = k.indexOf("#");
                    l < 0 && (l = k.length);
                    var m = k.indexOf("?");
                    if (m < 0 || m > l) {
                        m = l;
                        var n = ""
                    } else n = k.substring(m + 1, l);
                    k = [k.slice(0, m), n, k.slice(l)];
                    l = k[1];
                    k[1] = b ? l ? l + "&" + b : b : l;
                    b = k[0] + (k[1] ? "?" + k[1] : "") + k[2]
                } else b = k;
            e.sandbox = Od().join(" ")
        }
        d.google_video_play_muted === !1 && BY("autoplay", e);
        k = b;
        k.length > 61440 && (k = k.substring(0, 61432), k = k.replace(/%\w?$/, ""), k = k.replace(/&[^=]*=?$/, ""), k += "&trunc=1");
        k !== b && (l = b.lastIndexOf("&", 61432), l === -1 && (l = b.lastIndexOf("?", 61432)), Vy("trn", {
            ol: b.length,
            tr: l === -1 ? "" : b.substring(l + 1),
            url: b
        }, .01));
        b = k;
        f != null && (e.width = String(f));
        g != null && (e.height = String(g));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency = "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        hO("attribution-reporting", a.pubWin.document) && BY("attribution-reporting", e);
        hO("run-ad-auction", a.pubWin.document) && BY("run-ad-auction", e);
        W(dw) && (d = a.pubWin, d.credentialless !== void 0 && (W(ew) || d.crossOriginIsolated) && (e.credentialless =
            "true"));
        if (h) e.src = b, e = wY(e), a = xY(a, e, c);
        else {
            c = {};
            c.dtd = cS((new Date).getTime(), Rp);
            c = wl(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = wY(e);
            c && a.j.push(jl(a.pubWin, e));
            a.Z.style.visibility = "visible";
            for (a = a.Z; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function DY(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.g;
        EY(a);
        d.g() && DQ(new vO(a.pubWin), a.g, a.pubWin.location.hostname);
        var e = FK(d, a.pubWin);
        if (!d.g() && !a.B) return Vy("afc_noc_req", {
            client: a.D.google_ad_client,
            isGdprCountry: (a.pageState.g().j() ? K(a.pageState.g(), 4) : K(a.ra, 6)).toString()
        }, X(mu)), Promise.resolve();
        var f = FY(a.ua, d);
        f && document.documentElement.appendChild(f);
        W(kw) && d.g() && (a.l = await TE());
        a.F = lS(a.pubWin, d);
        xO(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) {
            GR(a.K, f);
            const g = FK(d);
            MR(f,
                a, g);
            f = f.page_level_pubvars;
            xa(f) && Hb(a.D, f)
        }
        f = iO("shared-storage", a.pubWin.document);
        W(cw) ? TP(a.pubWin, a.B) : a.F && d.g() && f && !W(bw) && !LE(GE(), 34, !1) && (ME(GE(), 34, !0), f = a.F.then(g => {
            g({
                message: "goog:spam:client_age",
                pvsid: de(a.pubWin)
            })
        }), Y.la(1069, f));
        await mS(a, a.pubWin, d, a.D, a.F, a.l);
        await a.C ? .Ri;
        f = "";
        LR(b) ? (f = (d.g() ? a.ua.Xh : a.ua.Wh).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + vl({
                adk: b.google_ad_unit_key,
                client: b.google_ad_client,
                fa: b.google_reactive_ad_format
            })),
            sU(b, GE()), GY(b)) : (b.google_pgb_reactive === 5 && b.google_reactive_ads_config || !xR(b) || vR(c, b, e)) && GY(b) && (f = jU(a, d));
        Wk(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || yl(c);
        e = zl(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`;
        c = CQ(a.K, a.pubWin, a.Z, !0) > 0;
        e = {
            ifi: e,
            uci: b
        };
        c && (c = GE(), e.btvi = LE(c, 21, 1), NE(c, 21));
        f = wl(e, f);
        c = CY(a, f, d);
        a.D.rpe && hT(a.pubWin,
            a.Z, {
                height: a.D.google_ad_height,
                Xf: "force",
                Wc: !0,
                Nf: !0,
                me: a.D.google_ad_client
            });
        c = await c;
        try {
            yY(a, c, b, d)
        } catch (g) {
            Y.aa(223, g, void 0, void 0)
        }
    }

    function HY(a) {
        const b = X(ju);
        if (b <= 0) return null;
        const c = Ll(),
            d = dY(a.pubWin);
        if (!d) return null;
        a.I = "0";
        return Promise.race([d, fe(b, "0")]).then(e => {
            Vy("adsense_paw", {
                time: Ll() - c
            });
            e ? .length > 1E4 ? Y.aa(809, Error(`ML:${e.length}`), void 0, void 0) : a.I = e
        }).catch(e => {
            Y.aa(809, e, void 0, void 0)
        })
    }

    function EY(a) {
        var b = a.pubWin;
        const c = a.Z;
        var d = a.D;
        const e = a.Ua,
            f = X(xw);
        d = !hq(d.google_reactive_ad_format) && (wR(d) || d.google_reactive_ads_config);
        if (!(a.C ? .kf || f <= 0 || xd(b) || !t.IntersectionObserver || d)) {
            a.C = {};
            var g = new Cp(e),
                h = Ll();
            b = new Promise(k => {
                let l = 0;
                const m = a.C,
                    n = new t.IntersectionObserver(Uy(1236, p => {
                        if (p = p.find(r => r.target === c)) g.Od.ge.Vc.g.g.Jc({
                            Mc: Ll() - h,
                            uk: ++l
                        }), m.Aj = p.isIntersecting && p.intersectionRatio >= .8, k()
                    }), {
                        threshold: [.8]
                    });
                n.observe(c);
                m.kf = n
            });
            a.C.Ri = Promise.race([b, fe(f, null)]).then(k => {
                g.Od.ge.Vc.g.i.Jc({
                    Mc: Ll() - h,
                    status: k === null ? "TIMEOUT" : "OK"
                })
            })
        }
    }

    function IY(a) {
        const b = Ll();
        return Promise.race([Ty(832, () => hY(a)), fe(200)]).then(c => {
            Vy("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Ll() - b,
                tms: 200
            });
            return c ? .sc
        })
    }
    async function JY(a) {
        const b = HY(a),
            c = Ty(868, () => IY(a.pubWin));
        await tQ(a);
        await b;
        a.sc = await c || "";
        await DY(a)
    }

    function vY(a) {
        ge(a.pubWin) !== a.pubWin && (a.i |= 4);
        WQ(a.pubWin.document) === 3 && (a.i |= 32);
        var b;
        if (b = a.K) {
            b = a.K;
            const c = aq(b);
            b = !(fq(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype ? .Version && (a.i |= 16384);
        a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
        return JY(a)
    }

    function GY(a) {
        const b = GE(),
            c = a.google_ad_section;
        wR(a) && NE(b, 15);
        if (Bl(a)) {
            if (NE(b, 5) > 100) return !1
        } else if (NE(b, 6) - LE(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function FY(a, b) {
        a: {
            var c = [t.top];
            var d = [];
            let f = 0,
                g;
            for (; g = c[f++];) {
                d.push(g);
                try {
                    if (g.frames)
                        for (let h = 0; h < g.frames.length && c.length < 1024; ++h) c.push(g.frames[h])
                } catch {}
            }
            c = d;
            for (d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    Nk = e;
                    break a
                }
            } catch (h) {}
            Nk = null
        }
        if (Nk) return null;e = zd("IFRAME");e.id = "google_esf";e.name = "google_esf";a = b.g() ? a.Xh : a.Wh;e.src = Rb(a).toString();e.style.display = "none";
        return e
    }

    function mY(a) {
        QE() && t.setTimeout(Uy(1244, () => void vP(a.K || a.pubWin, {
            Ka: a.pageState.g().j() ? K(a.pageState.g(), 4) : K(a.ra, 6)
        })), 1E3)
    };
    (function(a, b, c) {
        Ty(843, () => {
            if (!t.google_sa_impl) {
                var d = new Gp(b);
                try {
                    Ef(l => {
                        var m = new $o;
                        var n = new Zo;
                        try {
                            var p = de(window);
                            vi(n, 1, p)
                        } catch (C) {}
                        try {
                            var r = Hp(Kp).g();
                            Jh(n, 2, r, Qf)
                        } catch (C) {}
                        try {
                            xi(n, 3, window.document.URL)
                        } catch (C) {}
                        m = B(m, 2, n);
                        n = new Yo;
                        n = N(n, 1, 1192);
                        try {
                            var w = Je(l ? .name) ? l.name : "Unknown error";
                            xi(n, 2, w)
                        } catch (C) {}
                        try {
                            var D = Je(l ? .message) ? l.message : `Caught ${l}`;
                            xi(n, 3, D)
                        } catch (C) {}
                        try {
                            const C = Je(l ? .stack) ? l.stack : Error().stack;
                            C && Jh(n, 4, C.split(/\n\s*/), mg)
                        } catch (C) {}
                        l = G(m, 1, ap, n);
                        w = new Wo;
                        try {
                            xi(w, 1, CE())
                        } catch {}
                        G(l, 6, bp, w);
                        vi(l, 5, 1);
                        d.I(l)
                    })
                } catch (l) {}
                var e = UQ(),
                    f = e.g(),
                    g = bY(a);
                $X(g, e);
                Wk(16, [3, Ci(g)]);
                var h = YX({
                        sg: b,
                        Fh: f.g() || L(g, 2)
                    }),
                    k = c(h, g, di(f, 1), f.g(), L(f, 9));
                t.google_sa_impl = l => jY({
                    ra: g,
                    ua: k,
                    Ua: h,
                    slot: l,
                    pageState: e
                });
                pO(gO(t));
                t.google_process_slots ? .();
                f = (t.Prototype || {}).Version;
                f != null && Vy("prtpjs", {
                    version: f
                })
            }
        })
    })(aY, CE(), function(a, b, c, d, e) {
        c = c > 2012 ? `_fy${c}` : "";
        e || (e = L(b, 3));
        d || (d = L(b, 2));
        return {
            fk: Zc `https://pagead2.googlesyndication.com/pagead/js/${d}/${e}/rum${c}.js`,
            ek: Zc `https://pagead2.googlesyndication.com/pagead/js/${d}/${e}/rum_debug${c}.js`,
            yh: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            Pi: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            Io: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            Co: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            Yb: Zc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/autogames${c}.js`,
            Xh: Zc `https://googleads.g.doubleclick.net/pagead/html/${d}/${e}/zrt_lookup${c}.html`,
            Wh: Zc `https://pagead2.googlesyndication.com/pagead/html/${d}/${e}/zrt_lookup${c}.html`
        }
    });
}).call(this, "[2021,\"r20241030\",\"r20110914\",null,null,null,null,\".google.tn\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[0,0,0]]");