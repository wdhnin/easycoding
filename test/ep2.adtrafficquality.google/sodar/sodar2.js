(function() {
    'use strict';

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var k = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
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
    var n = ba(this),
        p = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        r = {},
        u = {};

    function w(a, b, c) {
        if (!c || a != null) {
            c = u[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function x(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var g = d[0],
                f;!a && g in r ? f = r : f = n;
            for (g = 0; g < d.length - 1; g++) {
                var e = d[g];
                if (!(e in f)) break a;
                f = f[e]
            }
            d = d[d.length - 1];c = p && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? k(r, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (u[d] === void 0 && (a = Math.random() * 1E9 >>> 0, u[d] = p ? n.Symbol(d) : "$jscp$" + a + "$" + d), k(f, u[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    x("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + g++, f)
        }

        function c(f, e) {
            this.g = f;
            k(this, "description", {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            g = 0;
        return b
    }, "es6");
    x("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, r.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = n[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && k(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ca(aa(this))
                }
            })
        }
        return a
    }, "es6");

    function ca(a) {
        a = {
            next: a
        };
        a[w(r.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function y(a) {
        return da(a, a)
    }

    function da(a, b) {
        a.raw = b;
        Object.freeze && (Object.freeze(a), Object.freeze(b));
        return a
    }

    function ea(a) {
        var b = typeof r.Symbol != "undefined" && w(r.Symbol, "iterator") && a[w(r.Symbol, "iterator")];
        if (b) return b.call(a);
        if (typeof a.length == "number") return {
            next: aa(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    var fa = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        z;
    if (p && typeof Object.setPrototypeOf == "function") z = Object.setPrototypeOf;
    else {
        var A;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                A = ia.a;
                break a
            } catch (a) {}
            A = !1
        }
        z = A ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = z;

    function B(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.V = b.prototype
    }

    function C() {
        this.m = !1;
        this.h = null;
        this.i = void 0;
        this.g = 1;
        this.B = this.u = 0;
        this.l = null
    }

    function D(a) {
        if (a.m) throw new TypeError("Generator is already running");
        a.m = !0
    }
    C.prototype.s = function(a) {
        this.i = a
    };

    function E(a, b) {
        a.l = {
            P: b,
            R: !0
        };
        a.g = a.u || a.B
    }
    C.prototype.return = function(a) {
        this.l = {
            return: a
        };
        this.g = this.B
    };

    function F(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }

    function ka(a) {
        this.g = new C;
        this.h = a
    }

    function la(a, b) {
        D(a.g);
        var c = a.g.h;
        if (c) return G(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return H(a)
    }

    function G(a, b, c, d) {
        try {
            var g = b.call(a.g.h, c);
            if (!(g instanceof Object)) throw new TypeError("Iterator result " + g + " is not an object");
            if (!g.done) return a.g.m = !1, g;
            var f = g.value
        } catch (e) {
            return a.g.h = null, E(a.g, e), H(a)
        }
        a.g.h = null;
        d.call(a.g, f);
        return H(a)
    }

    function H(a) {
        for (; a.g.g;) try {
            var b = a.h(a.g);
            if (b) return a.g.m = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.i = void 0, E(a.g, c)
        }
        a.g.m = !1;
        if (a.g.l) {
            b = a.g.l;
            a.g.l = null;
            if (b.R) throw b.P;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function ma(a) {
        this.next = function(b) {
            D(a.g);
            a.g.h ? b = G(a, a.g.h.next, b, a.g.s) : (a.g.s(b), b = H(a));
            return b
        };
        this.throw = function(b) {
            D(a.g);
            a.g.h ? b = G(a, a.g.h["throw"], b, a.g.s) : (E(a.g, b), b = H(a));
            return b
        };
        this.return = function(b) {
            return la(a, b)
        };
        this[w(r.Symbol, "iterator")] = function() {
            return this
        }
    }

    function na(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new r.Promise(function(d, g) {
            function f(e) {
                e.done ? d(e.value) : r.Promise.resolve(e.value).then(b, c).then(f, g)
            }
            f(a.next())
        })
    }

    function I(a) {
        return na(new ma(new ka(a)))
    }

    function oa() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    x("Promise", function(a) {
        function b(e) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.u = !1;
            var h = this.l();
            try {
                e(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        }

        function c() {
            this.g = null
        }

        function d(e) {
            return e instanceof b ? e : new b(function(h) {
                h(e)
            })
        }
        if (a) return a;
        c.prototype.h = function(e) {
            if (this.g == null) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.m()
                })
            }
            this.g.push(e)
        };
        var g = n.setTimeout;
        c.prototype.i = function(e) {
            g(e, 0)
        };
        c.prototype.m = function() {
            for (; this.g && this.g.length;) {
                var e = this.g;
                this.g = [];
                for (var h = 0; h < e.length; ++h) {
                    var l =
                        e[h];
                    e[h] = null;
                    try {
                        l()
                    } catch (m) {
                        this.l(m)
                    }
                }
            }
            this.g = null
        };
        c.prototype.l = function(e) {
            this.i(function() {
                throw e;
            })
        };
        b.prototype.l = function() {
            function e(m) {
                return function(q) {
                    l || (l = !0, m.call(h, q))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: e(this.L),
                reject: e(this.m)
            }
        };
        b.prototype.L = function(e) {
            if (e === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (e instanceof b) this.N(e);
            else {
                a: switch (typeof e) {
                    case "object":
                        var h = e != null;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.K(e) : this.s(e)
            }
        };
        b.prototype.K = function(e) {
            var h = void 0;
            try {
                h = e.then
            } catch (l) {
                this.m(l);
                return
            }
            typeof h == "function" ? this.O(h, e) : this.s(e)
        };
        b.prototype.m = function(e) {
            this.B(2, e)
        };
        b.prototype.s = function(e) {
            this.B(1, e)
        };
        b.prototype.B = function(e, h) {
            if (this.h != 0) throw Error("Cannot settle(" + e + ", " + h + "): Promise already settled in state" + this.h);
            this.h = e;
            this.i = h;
            this.h === 2 && this.M();
            this.S()
        };
        b.prototype.M = function() {
            var e = this;
            g(function() {
                if (e.T()) {
                    var h = n.console;
                    typeof h !== "undefined" && h.error(e.i)
                }
            }, 1)
        };
        b.prototype.T =
            function() {
                if (this.u) return !1;
                var e = n.CustomEvent,
                    h = n.Event,
                    l = n.dispatchEvent;
                if (typeof l === "undefined") return !0;
                typeof e === "function" ? e = new e("unhandledrejection", {
                    cancelable: !0
                }) : typeof h === "function" ? e = new h("unhandledrejection", {
                    cancelable: !0
                }) : (e = n.document.createEvent("CustomEvent"), e.initCustomEvent("unhandledrejection", !1, !0, e));
                e.promise = this;
                e.reason = this.i;
                return l(e)
            };
        b.prototype.S = function() {
            if (this.g != null) {
                for (var e = 0; e < this.g.length; ++e) f.h(this.g[e]);
                this.g = null
            }
        };
        var f = new c;
        b.prototype.N =
            function(e) {
                var h = this.l();
                e.C(h.resolve, h.reject)
            };
        b.prototype.O = function(e, h) {
            var l = this.l();
            try {
                e.call(h, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        b.prototype.then = function(e, h) {
            function l(t, v) {
                return typeof t == "function" ? function(M) {
                    try {
                        m(t(M))
                    } catch (N) {
                        q(N)
                    }
                } : v
            }
            var m, q, O = new b(function(t, v) {
                m = t;
                q = v
            });
            this.C(l(e, m), l(h, q));
            return O
        };
        b.prototype.catch = function(e) {
            return this.then(void 0, e)
        };
        b.prototype.C = function(e, h) {
            function l() {
                switch (m.h) {
                    case 1:
                        e(m.i);
                        break;
                    case 2:
                        h(m.i);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            m.h);
                }
            }
            var m = this;
            this.g == null ? f.h(l) : this.g.push(l);
            this.u = !0
        };
        b.resolve = d;
        b.reject = function(e) {
            return new b(function(h, l) {
                l(e)
            })
        };
        b.race = function(e) {
            return new b(function(h, l) {
                for (var m = ea(e), q = m.next(); !q.done; q = m.next()) d(q.value).C(h, l)
            })
        };
        b.all = function(e) {
            var h = ea(e),
                l = h.next();
            return l.done ? d([]) : new b(function(m, q) {
                function O(M) {
                    return function(N) {
                        t[M] = N;
                        v--;
                        v == 0 && m(t)
                    }
                }
                var t = [],
                    v = 0;
                do t.push(void 0), v++, d(l.value).C(O(t.length - 1), q), l = h.next(); while (!l.done)
            })
        };
        return b
    }, "es6");
    x("globalThis", function(a) {
        return a || n
    }, "es_2020");
    x("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var g = [],
                f = typeof r.Symbol != "undefined" && w(r.Symbol, "iterator") && b[w(r.Symbol, "iterator")];
            if (typeof f == "function") {
                b = f.call(b);
                for (var e = 0; !(f = b.next()).done;) g.push(c.call(d, f.value, e++))
            } else
                for (f = b.length, e = 0; e < f; e++) g.push(c.call(d, b[e], e));
            return g
        }
    }, "es6");
    x("Promise.allSettled", function(a) {
        function b(d) {
            return {
                status: "fulfilled",
                value: d
            }
        }

        function c(d) {
            return {
                status: "rejected",
                reason: d
            }
        }
        return a ? a : function(d) {
            var g = this;
            d = w(Array, "from").call(Array, d, function(f) {
                return g.resolve(f).then(b, c)
            });
            return g.all(d)
        }
    }, "es_2020");
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var pa = r.globalThis.trustedTypes,
        J;

    function qa() {
        var a = null;
        if (!pa) return a;
        try {
            var b = function(c) {
                return c
            };
            a = pa.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    };

    function K(a) {
        this.g = a
    }
    K.prototype.toString = function() {
        return this.g + ""
    };

    function L(a) {
        J === void 0 && (J = qa());
        var b = J;
        return new K(b ? b.createScriptURL(a) : a)
    }

    function ra(a) {
        if (a instanceof K) return a.g;
        throw Error("");
    };

    function P(a) {
        var b = oa.apply(1, arguments);
        if (b.length === 0) return L(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return L(c)
    };
    var sa = y(["https://www.google.com/recaptcha/api2/aframe"]),
        ta = P(sa);

    function Q(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function ua(a, b) {
        a.src = ra(b);
        var c, d;
        (c = (b = (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function va(a, b) {
        var c = !1;
        c = c === void 0 ? !1 : c;
        return new r.Promise(function(d, g) {
            function f() {
                e.onload = null;
                e.onerror = null;
                var h;
                (h = e.parentElement) == null || h.removeChild(e)
            }
            var e = b.document.createElement("script");
            e.onload = function() {
                f();
                d()
            };
            e.onerror = function() {
                f();
                g(7)
            };
            e.type = "text/javascript";
            ua(e, a);
            c && b.document.readyState !== "complete" ? Q(b, "load", function() {
                b.document.body.appendChild(e)
            }) : b.document.body.appendChild(e)
        })
    }

    function wa(a, b) {
        var c = window;
        return new r.Promise(function(d) {
            b === void 0 && (b = c.document.createElement("iframe"));
            b.addEventListener("load", function() {
                d(b)
            });
            b.src = ra(a).toString();
            b.width = "0";
            b.height = "0";
            b.style.display = "none";
            c.document.body.appendChild(b)
        })
    };

    function xa(a) {
        return new r.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    }

    function ya(a) {
        a = a === void 0 ? document : a;
        return a.createElement("img")
    };
    var za = y(["https://ep1.adtrafficquality.google/bg/", ".js"]),
        Aa = y(["https://pagead2.googlesyndication.com/bg/", ".js"]);

    function R(a, b, c, d) {
        var g = window;
        g = g === void 0 ? window : g;
        this.J = b;
        this.h = g;
        this.o = c === void 0 ? 0 : c;
        this.i = (d === void 0 ? 0 : d) ? P(za, encodeURIComponent(a)) : P(Aa, encodeURIComponent(a))
    }

    function Ba(a) {
        return I(function(b) {
            switch (b.g) {
                case 1:
                    return F(b, Ca(a), 2);
                case 2:
                    return F(b, Da(a), 3);
                case 3:
                    if (!(a.o > 0)) {
                        b.g = 4;
                        break
                    }
                    return F(b, xa(a.o), 4);
                case 4:
                    return b.return(Ea(a))
            }
        })
    }

    function Ca(a) {
        var b;
        return I(function(c) {
            b = document.createElement("iframe");
            b.style.display = "none";
            document.body.appendChild(b);
            if (!b.contentWindow) throw 3;
            a.h = b.contentWindow;
            return c.return(va(a.i, a.h))
        })
    }

    function Da(a) {
        return new r.Promise(function(b, c) {
            a.h.botguard && a.h.botguard.bg ? a.g = new a.h.botguard.bg(a.J, b) : c(5)
        })
    }
    R.prototype.snapshotSync = function() {
        var a = void 0;
        if (this.g && this.g.invoke && (this.g.invoke(function(b) {
                a = b
            }, !1), a)) return a;
        throw 6;
    };

    function Ea(a) {
        return new r.Promise(function(b, c) {
            a.g && a.g.invoke ? a.g.invoke(function(d) {
                b(d)
            }, !0) : c(6)
        })
    };

    function Fa(a) {
        switch (a) {
            case "pt":
            case "cr":
                return a;
            default:
                return ""
        }
    }

    function Ga(a) {
        switch (a) {
            case "env":
            case "int":
                return a;
            default:
                return "env"
        }
    }

    function Ha(a) {
        return a === void 0 || a === "0" ? !1 : !0
    }

    function Ia() {
        var a = window.GoogleGcLKhOms;
        if (a && a.length > 0 && (a = a.shift())) return a._rc_ === void 0 ? {
            context: Fa(a._ctx_),
            A: a._bgv_,
            v: a._bgp_,
            G: a._li_,
            F: a._jk_,
            H: Ga(a._st_),
            o: a._dl_,
            D: a._g2_,
            j: Ha(a._atqg_)
        } : {
            context: Fa(a._ctx_),
            A: a._bgv_,
            v: a._bgp_,
            G: a._li_,
            F: a._jk_,
            H: Ga(a._st_),
            I: a._rc_,
            o: a._dl_,
            D: a._g2_,
            j: Ha(a._atqg_)
        }
    }

    function Ja() {
        var a = window;
        if (a.GoogleDX5YKUSk) return a.GoogleDX5YKUSk[0];
        var b = new r.Promise(function(c) {
            a.GoogleDX5YKUSk = [b, c]
        });
        return b
    }

    function Ka() {
        return window.GoogleGcLKhOms === void 0 ? 13 : 1
    };

    function S(a, b) {
        this.h = a;
        this.j = b
    }

    function La(a, b) {
        S.call(this, a, b);
        var c = this;
        this.g = !1;
        var d = new MessageChannel;
        this.port = d.port1;
        this.i = new r.Promise(function(g) {
            c.port.onmessage = function() {
                g()
            };
            var f = b ? "https://ep2.adtrafficquality.google" : "https://tpc.googlesyndication.com";
            c.h.postMessage("GoogleBasRYoCJlVEB", f.indexOf("https:") === -1 ? "http:" + f : f, [d.port2])
        })
    }
    B(La, S);

    function Ma(a, b) {
        return I(function(c) {
            return c.g == 1 ? F(c, a.i, 2) : c.return(new r.Promise(function(d, g) {
                var f = new MessageChannel;
                f.port1.onmessage = function(e) {
                    f.port1.close();
                    Array.isArray(e.data) ? d(e.data) : g(9)
                };
                a.port.postMessage(b, [f.port2])
            }))
        })
    }

    function Na(a, b) {
        var c;
        return I(function(d) {
            if (d.g == 1) return d.u = 2, F(d, Ma(a, [1, b.U, b.J, b.o]), 4);
            if (d.g != 2) return c = d.i, d.return({
                response: c[0],
                error: c[1]
            });
            d.u = 0;
            d.l = null;
            return d.return({
                error: 9
            })
        })
    }

    function Oa() {
        S.apply(this, arguments);
        this.g = !0
    }
    B(Oa, S);

    function Pa(a, b) {
        Qa(a, b === void 0 ? null : b)
    }

    function Qa(a, b) {
        var c = window,
            d = !1;
        d = d === void 0 ? !1 : d;
        c.google_image_requests || (c.google_image_requests = []);
        var g = ya(c.document);
        if (b) {
            var f = function(e) {
                b && b(e);
                g.removeEventListener && g.removeEventListener("load", f, !1);
                g.removeEventListener && g.removeEventListener("error", f, !1)
            };
            Q(g, "load", f);
            Q(g, "error", f)
        }
        d && (g.attributionSrc = "");
        g.src = a;
        c.google_image_requests.push(g)
    };

    function Ra(a) {
        this.url = (this.j = a) ? "https://ep1.adtrafficquality.google/pagead/gen_204?id=sodar2&v=232" : "https://pagead2.googlesyndication.com/pagead/gen_204?id=sodar2&v=232"
    }

    function T(a, b, c) {
        a.url += "&" + b + "=" + encodeURIComponent(c.toString())
    }

    function U(a, b, c) {
        var d = new Ra(b === void 0 ? !1 : b.j),
            g = b === void 0 || b.D !== "0";
        c !== !1 && g || (d.url = d.j ? "https://ep1.adtrafficquality.google/pagead/sodar?id=sodar2&v=232" : "https://pagead2.googlesyndication.com/pagead/sodar?id=sodar2&v=232");
        T(d, "t", a);
        b && (T(d, "li", b.G), T(d, b.context === "cr" ? "bgai" : "jk", b.F));
        return d
    }

    function V(a) {
        return new r.Promise(function(b) {
            Pa(a, function() {
                b()
            })
        })
    }

    function W(a, b) {
        b = U(1, b);
        T(b, "e", a);
        return V(b.url)
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    function Sa() {
        var a = this;
        this.promise = new r.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function X(a) {
        this.config = a;
        this.o = 0;
        this.j = !1;
        this.o = Number(this.config.o) || 0;
        this.j = a.j
    }

    function Ta(a) {
        return I(function(b) {
            if (b.g == 1) {
                if (Y(a)) throw 7;
                a.g = new R(a.config.A, a.config.v, a.o, a.j);
                return F(b, Ca(a.g), 2)
            }
            return F(b, Da(a.g), 0)
        })
    }
    X.prototype.snapshotSync = function() {
        if (this.g) return this.g.snapshotSync()
    };

    function Ua(a) {
        return I(function(b) {
            if (b.g == 1) {
                if (Y(a)) var c = Va(a);
                else a.g = new R(a.config.A, a.config.v, a.o, a.config.j), c = Ba(a.g);
                return F(b, c, 2)
            }
            a.l = b.i;
            if (a.l) {
                c = a.config;
                var d = a.l,
                    g = U(2, c, d !== void 0);
                d !== void 0 && T(g, "bg", d);
                c = g.url.length > 6E4 ? W(4, c) : V(g.url);
                b = F(b, c, 0)
            } else b.g = 0, b = void 0;
            return b
        })
    }

    function Wa(a, b) {
        function c(f) {
            f && f.data !== null && f.origin === "https://www.google.com" && f.source != null && f.source === b.contentWindow && (a.h = "id=sodar2&v=232", a.config && (a.h += "&li=" + encodeURIComponent(a.config.G.toString()), a.h += "&" + (a.config.context === "cr" ? "bgai" : "jk") + "=" + encodeURIComponent(a.config.F.toString()), f.source.postMessage(JSON.stringify({
                id: "sodar",
                params: a.h
            }), "https://www.google.com"), d.removeEventListener("message", c, !1)), g.resolve())
        }
        var d = window,
            g = new Sa;
        d.addEventListener("message",
            c, !1);
        return g.promise
    }

    function Xa(a) {
        var b, c, d, g;
        return I(function(f) {
            if (f.g == 1) {
                if (a.config.I !== "y") return f.return();
                b = window.document.createElement("iframe");
                c = wa(ta, b);
                d = Wa(a, b);
                return F(f, r.Promise.all([c, d]), 2)
            }
            g = f.i;
            if (g[0].contentWindow === null) throw 15;
            f.g = 0
        })
    }

    function Ya(a) {
        return I(function(b) {
            return F(b, w(r.Promise, "allSettled").call(r.Promise, [Ua(a), Xa(a)]), 0)
        })
    }

    function Y(a) {
        return window.location.host === (a.j ? "ep2.adtrafficquality.google" : "tpc.googlesyndication.com") || a.config.H === "int" ? !1 : !0
    }

    function Va(a) {
        var b, c, d;
        return I(function(g) {
            if (g.g == 1) return b = L((a.j ? "https://ep2.adtrafficquality.google/sodar/" : "https://tpc.googlesyndication.com/sodar/") + "sodar2/232/runner.html"), F(g, wa(b), 2);
            if (g.g != 4) {
                c = g.i;
                if (!c.contentWindow) throw 3;
                var f = c.contentWindow;
                var e = a.j;
                f = window.hasOwnProperty("MessageChannel") ? new La(f, e) : new Oa(f, e);
                a.i = f;
                return a.i.g ? (f = a.config, e = f.j ? "https://ep2.adtrafficquality.google" : "https://tpc.googlesyndication.com", e = e.indexOf("https:") === -1 ? "http:" + e : e, a.i.h.postMessage(JSON.stringify([f.context,
                    f.A, f.v, f.G, f.F, f.H, f.I === void 0 ? "n" : f.I, f.o === void 0 ? "0" : f.o, f.D === void 0 ? "1" : f.D, f.j === void 0 ? "0" : f.j ? "1" : "0"
                ]), e), g.return(void 0)) : F(g, Na(a.i, {
                    U: a.config.A,
                    J: a.config.v,
                    o: a.o,
                    j: a.config.j
                }), 4)
            }
            d = g.i;
            c.parentNode && c.parentNode.removeChild(c);
            if (d.error) throw d.error;
            return g.return(d.response)
        })
    };

    function Z() {
        X.apply(this, arguments)
    }
    B(Z, X);
    Z.prototype.m = function() {
        var a = this,
            b;
        return I(function(c) {
            if (c.g == 1) {
                if (a.config.H === "env") return F(c, Ya(a), 0);
                b = window;
                return b.GoogleA13IjpGc ? c.return() : F(c, Ta(a), 4)
            }
            b.GoogleA13IjpGc = a;
            c.g = 0
        })
    };

    function Za() {
        X.apply(this, arguments)
    }
    B(Za, X);
    Za.prototype.m = function() {
        var a = this;
        return I(function(b) {
            return F(b, Ya(a), 0)
        })
    };

    function $a(a, b) {
        if (typeof a === "number") b = W(a, b);
        else {
            var c = U(3, b);
            T(c, "c", "init");
            var d = a.toString();
            a.name && d.indexOf(a.name) == -1 && (d += ": " + a.name);
            a.message && d.indexOf(a.message) == -1 && (d += ": " + a.message);
            if (a.stack) a: {
                a = a.stack;
                var g = d;
                try {
                    a.indexOf(g) == -1 && (a = g + "\n" + a);
                    for (var f; a != f;) f = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    d = a.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (e) {
                    d = g;
                    break a
                }
                d = void 0
            }
            T(c, "ex", d);
            b = c.url.length > 6E4 ? W(11, b) : V(c.url)
        }
        return b
    }

    function ab(a) {
        switch (a.context) {
            case "pt":
                a = new Za(a);
                break;
            case "cr":
                a = new Z(a);
                break;
            default:
                throw 2;
        }
        if (!window.postMessage && Y(a)) throw 8;
        return a.m()
    };
    (function() {
        var a = Ia();
        try {
            return a ? ab(a) : r.Promise.race([Ja(), new r.Promise(function(b, c) {
                setTimeout(function() {
                    c(Ka())
                }, 5E3)
            })]).then(function() {
                a = Ia();
                if (!a) throw Ka();
                return ab(a)
            }, function(b) {
                return $a(b, a)
            })
        } catch (b) {
            return $a(b, a)
        }
    })();
}).call(this);