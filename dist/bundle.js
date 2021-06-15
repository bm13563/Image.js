/*! For license information please see bundle.js.LICENSE.txt */
(() => {
    var t = {
            9742: (t, e) => {
                "use strict";
                (e.byteLength = function (t) {
                    var e = c(t),
                        r = e[0],
                        n = e[1];
                    return (3 * (r + n)) / 4 - n;
                }),
                    (e.toByteArray = function (t) {
                        var e,
                            r,
                            i = c(t),
                            s = i[0],
                            a = i[1],
                            l = new o(
                                (function (t, e, r) {
                                    return (3 * (e + r)) / 4 - r;
                                })(0, s, a),
                            ),
                            u = 0,
                            p = a > 0 ? s - 4 : s;
                        for (r = 0; r < p; r += 4)
                            (e =
                                (n[t.charCodeAt(r)] << 18) |
                                (n[t.charCodeAt(r + 1)] << 12) |
                                (n[t.charCodeAt(r + 2)] << 6) |
                                n[t.charCodeAt(r + 3)]),
                                (l[u++] = (e >> 16) & 255),
                                (l[u++] = (e >> 8) & 255),
                                (l[u++] = 255 & e);
                        return (
                            2 === a &&
                                ((e =
                                    (n[t.charCodeAt(r)] << 2) |
                                    (n[t.charCodeAt(r + 1)] >> 4)),
                                (l[u++] = 255 & e)),
                            1 === a &&
                                ((e =
                                    (n[t.charCodeAt(r)] << 10) |
                                    (n[t.charCodeAt(r + 1)] << 4) |
                                    (n[t.charCodeAt(r + 2)] >> 2)),
                                (l[u++] = (e >> 8) & 255),
                                (l[u++] = 255 & e)),
                            l
                        );
                    }),
                    (e.fromByteArray = function (t) {
                        for (
                            var e,
                                n = t.length,
                                o = n % 3,
                                i = [],
                                s = 16383,
                                a = 0,
                                c = n - o;
                            a < c;
                            a += s
                        )
                            i.push(l(t, a, a + s > c ? c : a + s));
                        return (
                            1 === o
                                ? ((e = t[n - 1]),
                                  i.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
                                : 2 === o &&
                                  ((e = (t[n - 2] << 8) + t[n - 1]),
                                  i.push(
                                      r[e >> 10] +
                                          r[(e >> 4) & 63] +
                                          r[(e << 2) & 63] +
                                          "=",
                                  )),
                            i.join("")
                        );
                    });
                for (
                    var r = [],
                        n = [],
                        o =
                            "undefined" != typeof Uint8Array
                                ? Uint8Array
                                : Array,
                        i =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        s = 0,
                        a = i.length;
                    s < a;
                    ++s
                )
                    (r[s] = i[s]), (n[i.charCodeAt(s)] = s);
                function c(t) {
                    var e = t.length;
                    if (e % 4 > 0)
                        throw new Error(
                            "Invalid string. Length must be a multiple of 4",
                        );
                    var r = t.indexOf("=");
                    return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
                }
                function l(t, e, n) {
                    for (var o, i, s = [], a = e; a < n; a += 3)
                        (o =
                            ((t[a] << 16) & 16711680) +
                            ((t[a + 1] << 8) & 65280) +
                            (255 & t[a + 2])),
                            s.push(
                                r[((i = o) >> 18) & 63] +
                                    r[(i >> 12) & 63] +
                                    r[(i >> 6) & 63] +
                                    r[63 & i],
                            );
                    return s.join("");
                }
                (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
            },
            8764: (t, e, r) => {
                "use strict";
                const n = r(9742),
                    o = r(645),
                    i =
                        "function" == typeof Symbol &&
                        "function" == typeof Symbol.for
                            ? Symbol.for("nodejs.util.inspect.custom")
                            : null;
                (e.Buffer = c),
                    (e.SlowBuffer = function (t) {
                        return +t != t && (t = 0), c.alloc(+t);
                    }),
                    (e.INSPECT_MAX_BYTES = 50);
                const s = 2147483647;
                function a(t) {
                    if (t > s)
                        throw new RangeError(
                            'The value "' +
                                t +
                                '" is invalid for option "size"',
                        );
                    const e = new Uint8Array(t);
                    return Object.setPrototypeOf(e, c.prototype), e;
                }
                function c(t, e, r) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e)
                            throw new TypeError(
                                'The "string" argument must be of type string. Received type number',
                            );
                        return p(t);
                    }
                    return l(t, e, r);
                }
                function l(t, e, r) {
                    if ("string" == typeof t)
                        return (function (t, e) {
                            if (
                                (("string" == typeof e && "" !== e) ||
                                    (e = "utf8"),
                                !c.isEncoding(e))
                            )
                                throw new TypeError("Unknown encoding: " + e);
                            const r = 0 | g(t, e);
                            let n = a(r);
                            const o = n.write(t, e);
                            return o !== r && (n = n.slice(0, o)), n;
                        })(t, e);
                    if (ArrayBuffer.isView(t))
                        return (function (t) {
                            if (X(t, Uint8Array)) {
                                const e = new Uint8Array(t);
                                return f(e.buffer, e.byteOffset, e.byteLength);
                            }
                            return h(t);
                        })(t);
                    if (null == t)
                        throw new TypeError(
                            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                                typeof t,
                        );
                    if (X(t, ArrayBuffer) || (t && X(t.buffer, ArrayBuffer)))
                        return f(t, e, r);
                    if (
                        "undefined" != typeof SharedArrayBuffer &&
                        (X(t, SharedArrayBuffer) ||
                            (t && X(t.buffer, SharedArrayBuffer)))
                    )
                        return f(t, e, r);
                    if ("number" == typeof t)
                        throw new TypeError(
                            'The "value" argument must not be of type number. Received type number',
                        );
                    const n = t.valueOf && t.valueOf();
                    if (null != n && n !== t) return c.from(n, e, r);
                    const o = (function (t) {
                        if (c.isBuffer(t)) {
                            const e = 0 | d(t.length),
                                r = a(e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r;
                        }
                        return void 0 !== t.length
                            ? "number" != typeof t.length || W(t.length)
                                ? a(0)
                                : h(t)
                            : "Buffer" === t.type && Array.isArray(t.data)
                            ? h(t.data)
                            : void 0;
                    })(t);
                    if (o) return o;
                    if (
                        "undefined" != typeof Symbol &&
                        null != Symbol.toPrimitive &&
                        "function" == typeof t[Symbol.toPrimitive]
                    )
                        return c.from(t[Symbol.toPrimitive]("string"), e, r);
                    throw new TypeError(
                        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                            typeof t,
                    );
                }
                function u(t) {
                    if ("number" != typeof t)
                        throw new TypeError(
                            '"size" argument must be of type number',
                        );
                    if (t < 0)
                        throw new RangeError(
                            'The value "' +
                                t +
                                '" is invalid for option "size"',
                        );
                }
                function p(t) {
                    return u(t), a(t < 0 ? 0 : 0 | d(t));
                }
                function h(t) {
                    const e = t.length < 0 ? 0 : 0 | d(t.length),
                        r = a(e);
                    for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                    return r;
                }
                function f(t, e, r) {
                    if (e < 0 || t.byteLength < e)
                        throw new RangeError(
                            '"offset" is outside of buffer bounds',
                        );
                    if (t.byteLength < e + (r || 0))
                        throw new RangeError(
                            '"length" is outside of buffer bounds',
                        );
                    let n;
                    return (
                        (n =
                            void 0 === e && void 0 === r
                                ? new Uint8Array(t)
                                : void 0 === r
                                ? new Uint8Array(t, e)
                                : new Uint8Array(t, e, r)),
                        Object.setPrototypeOf(n, c.prototype),
                        n
                    );
                }
                function d(t) {
                    if (t >= s)
                        throw new RangeError(
                            "Attempt to allocate Buffer larger than maximum size: 0x" +
                                s.toString(16) +
                                " bytes",
                        );
                    return 0 | t;
                }
                function g(t, e) {
                    if (c.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || X(t, ArrayBuffer))
                        return t.byteLength;
                    if ("string" != typeof t)
                        throw new TypeError(
                            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                                typeof t,
                        );
                    const r = t.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    let o = !1;
                    for (;;)
                        switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return J(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return Y(t).length;
                            default:
                                if (o) return n ? -1 : J(t).length;
                                (e = ("" + e).toLowerCase()), (o = !0);
                        }
                }
                function m(t, e, r) {
                    let n = !1;
                    if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                        return "";
                    if (
                        ((void 0 === r || r > this.length) && (r = this.length),
                        r <= 0)
                    )
                        return "";
                    if ((r >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                            case "hex":
                                return D(this, e, r);
                            case "utf8":
                            case "utf-8":
                                return T(this, e, r);
                            case "ascii":
                                return L(this, e, r);
                            case "latin1":
                            case "binary":
                                return k(this, e, r);
                            case "base64":
                                return S(this, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return N(this, e, r);
                            default:
                                if (n)
                                    throw new TypeError(
                                        "Unknown encoding: " + t,
                                    );
                                (t = (t + "").toLowerCase()), (n = !0);
                        }
                }
                function b(t, e, r) {
                    const n = t[e];
                    (t[e] = t[r]), (t[r] = n);
                }
                function y(t, e, r, n, o) {
                    if (0 === t.length) return -1;
                    if (
                        ("string" == typeof r
                            ? ((n = r), (r = 0))
                            : r > 2147483647
                            ? (r = 2147483647)
                            : r < -2147483648 && (r = -2147483648),
                        W((r = +r)) && (r = o ? 0 : t.length - 1),
                        r < 0 && (r = t.length + r),
                        r >= t.length)
                    ) {
                        if (o) return -1;
                        r = t.length - 1;
                    } else if (r < 0) {
                        if (!o) return -1;
                        r = 0;
                    }
                    if (
                        ("string" == typeof e && (e = c.from(e, n)),
                        c.isBuffer(e))
                    )
                        return 0 === e.length ? -1 : v(t, e, r, n, o);
                    if ("number" == typeof e)
                        return (
                            (e &= 255),
                            "function" == typeof Uint8Array.prototype.indexOf
                                ? o
                                    ? Uint8Array.prototype.indexOf.call(t, e, r)
                                    : Uint8Array.prototype.lastIndexOf.call(
                                          t,
                                          e,
                                          r,
                                      )
                                : v(t, [e], r, n, o)
                        );
                    throw new TypeError("val must be string, number or Buffer");
                }
                function v(t, e, r, n, o) {
                    let i,
                        s = 1,
                        a = t.length,
                        c = e.length;
                    if (
                        void 0 !== n &&
                        ("ucs2" === (n = String(n).toLowerCase()) ||
                            "ucs-2" === n ||
                            "utf16le" === n ||
                            "utf-16le" === n)
                    ) {
                        if (t.length < 2 || e.length < 2) return -1;
                        (s = 2), (a /= 2), (c /= 2), (r /= 2);
                    }
                    function l(t, e) {
                        return 1 === s ? t[e] : t.readUInt16BE(e * s);
                    }
                    if (o) {
                        let n = -1;
                        for (i = r; i < a; i++)
                            if (l(t, i) === l(e, -1 === n ? 0 : i - n)) {
                                if ((-1 === n && (n = i), i - n + 1 === c))
                                    return n * s;
                            } else -1 !== n && (i -= i - n), (n = -1);
                    } else
                        for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
                            let r = !0;
                            for (let n = 0; n < c; n++)
                                if (l(t, i + n) !== l(e, n)) {
                                    r = !1;
                                    break;
                                }
                            if (r) return i;
                        }
                    return -1;
                }
                function w(t, e, r, n) {
                    r = Number(r) || 0;
                    const o = t.length - r;
                    n ? (n = Number(n)) > o && (n = o) : (n = o);
                    const i = e.length;
                    let s;
                    for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
                        const n = parseInt(e.substr(2 * s, 2), 16);
                        if (W(n)) return s;
                        t[r + s] = n;
                    }
                    return s;
                }
                function _(t, e, r, n) {
                    return Z(J(e, t.length - r), t, r, n);
                }
                function q(t, e, r, n) {
                    return Z(
                        (function (t) {
                            const e = [];
                            for (let r = 0; r < t.length; ++r)
                                e.push(255 & t.charCodeAt(r));
                            return e;
                        })(e),
                        t,
                        r,
                        n,
                    );
                }
                function x(t, e, r, n) {
                    return Z(Y(e), t, r, n);
                }
                function E(t, e, r, n) {
                    return Z(
                        (function (t, e) {
                            let r, n, o;
                            const i = [];
                            for (
                                let s = 0;
                                s < t.length && !((e -= 2) < 0);
                                ++s
                            )
                                (r = t.charCodeAt(s)),
                                    (n = r >> 8),
                                    (o = r % 256),
                                    i.push(o),
                                    i.push(n);
                            return i;
                        })(e, t.length - r),
                        t,
                        r,
                        n,
                    );
                }
                function S(t, e, r) {
                    return 0 === e && r === t.length
                        ? n.fromByteArray(t)
                        : n.fromByteArray(t.slice(e, r));
                }
                function T(t, e, r) {
                    r = Math.min(t.length, r);
                    const n = [];
                    let o = e;
                    for (; o < r; ) {
                        const e = t[o];
                        let i = null,
                            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                        if (o + s <= r) {
                            let r, n, a, c;
                            switch (s) {
                                case 1:
                                    e < 128 && (i = e);
                                    break;
                                case 2:
                                    (r = t[o + 1]),
                                        128 == (192 & r) &&
                                            ((c = ((31 & e) << 6) | (63 & r)),
                                            c > 127 && (i = c));
                                    break;
                                case 3:
                                    (r = t[o + 1]),
                                        (n = t[o + 2]),
                                        128 == (192 & r) &&
                                            128 == (192 & n) &&
                                            ((c =
                                                ((15 & e) << 12) |
                                                ((63 & r) << 6) |
                                                (63 & n)),
                                            c > 2047 &&
                                                (c < 55296 || c > 57343) &&
                                                (i = c));
                                    break;
                                case 4:
                                    (r = t[o + 1]),
                                        (n = t[o + 2]),
                                        (a = t[o + 3]),
                                        128 == (192 & r) &&
                                            128 == (192 & n) &&
                                            128 == (192 & a) &&
                                            ((c =
                                                ((15 & e) << 18) |
                                                ((63 & r) << 12) |
                                                ((63 & n) << 6) |
                                                (63 & a)),
                                            c > 65535 &&
                                                c < 1114112 &&
                                                (i = c));
                            }
                        }
                        null === i
                            ? ((i = 65533), (s = 1))
                            : i > 65535 &&
                              ((i -= 65536),
                              n.push(((i >>> 10) & 1023) | 55296),
                              (i = 56320 | (1023 & i))),
                            n.push(i),
                            (o += s);
                    }
                    return (function (t) {
                        const e = t.length;
                        if (e <= A) return String.fromCharCode.apply(String, t);
                        let r = "",
                            n = 0;
                        for (; n < e; )
                            r += String.fromCharCode.apply(
                                String,
                                t.slice(n, (n += A)),
                            );
                        return r;
                    })(n);
                }
                (e.kMaxLength = s),
                    (c.TYPED_ARRAY_SUPPORT = (function () {
                        try {
                            const t = new Uint8Array(1),
                                e = {
                                    foo: function () {
                                        return 42;
                                    },
                                };
                            return (
                                Object.setPrototypeOf(e, Uint8Array.prototype),
                                Object.setPrototypeOf(t, e),
                                42 === t.foo()
                            );
                        } catch (t) {
                            return !1;
                        }
                    })()),
                    c.TYPED_ARRAY_SUPPORT ||
                        "undefined" == typeof console ||
                        "function" != typeof console.error ||
                        console.error(
                            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
                        ),
                    Object.defineProperty(c.prototype, "parent", {
                        enumerable: !0,
                        get: function () {
                            if (c.isBuffer(this)) return this.buffer;
                        },
                    }),
                    Object.defineProperty(c.prototype, "offset", {
                        enumerable: !0,
                        get: function () {
                            if (c.isBuffer(this)) return this.byteOffset;
                        },
                    }),
                    (c.poolSize = 8192),
                    (c.from = function (t, e, r) {
                        return l(t, e, r);
                    }),
                    Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
                    Object.setPrototypeOf(c, Uint8Array),
                    (c.alloc = function (t, e, r) {
                        return (function (t, e, r) {
                            return (
                                u(t),
                                t <= 0
                                    ? a(t)
                                    : void 0 !== e
                                    ? "string" == typeof r
                                        ? a(t).fill(e, r)
                                        : a(t).fill(e)
                                    : a(t)
                            );
                        })(t, e, r);
                    }),
                    (c.allocUnsafe = function (t) {
                        return p(t);
                    }),
                    (c.allocUnsafeSlow = function (t) {
                        return p(t);
                    }),
                    (c.isBuffer = function (t) {
                        return (
                            null != t && !0 === t._isBuffer && t !== c.prototype
                        );
                    }),
                    (c.compare = function (t, e) {
                        if (
                            (X(t, Uint8Array) &&
                                (t = c.from(t, t.offset, t.byteLength)),
                            X(e, Uint8Array) &&
                                (e = c.from(e, e.offset, e.byteLength)),
                            !c.isBuffer(t) || !c.isBuffer(e))
                        )
                            throw new TypeError(
                                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                            );
                        if (t === e) return 0;
                        let r = t.length,
                            n = e.length;
                        for (let o = 0, i = Math.min(r, n); o < i; ++o)
                            if (t[o] !== e[o]) {
                                (r = t[o]), (n = e[o]);
                                break;
                            }
                        return r < n ? -1 : n < r ? 1 : 0;
                    }),
                    (c.isEncoding = function (t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                    (c.concat = function (t, e) {
                        if (!Array.isArray(t))
                            throw new TypeError(
                                '"list" argument must be an Array of Buffers',
                            );
                        if (0 === t.length) return c.alloc(0);
                        let r;
                        if (void 0 === e)
                            for (e = 0, r = 0; r < t.length; ++r)
                                e += t[r].length;
                        const n = c.allocUnsafe(e);
                        let o = 0;
                        for (r = 0; r < t.length; ++r) {
                            let e = t[r];
                            if (X(e, Uint8Array))
                                o + e.length > n.length
                                    ? (c.isBuffer(e) || (e = c.from(e)),
                                      e.copy(n, o))
                                    : Uint8Array.prototype.set.call(n, e, o);
                            else {
                                if (!c.isBuffer(e))
                                    throw new TypeError(
                                        '"list" argument must be an Array of Buffers',
                                    );
                                e.copy(n, o);
                            }
                            o += e.length;
                        }
                        return n;
                    }),
                    (c.byteLength = g),
                    (c.prototype._isBuffer = !0),
                    (c.prototype.swap16 = function () {
                        const t = this.length;
                        if (t % 2 != 0)
                            throw new RangeError(
                                "Buffer size must be a multiple of 16-bits",
                            );
                        for (let e = 0; e < t; e += 2) b(this, e, e + 1);
                        return this;
                    }),
                    (c.prototype.swap32 = function () {
                        const t = this.length;
                        if (t % 4 != 0)
                            throw new RangeError(
                                "Buffer size must be a multiple of 32-bits",
                            );
                        for (let e = 0; e < t; e += 4)
                            b(this, e, e + 3), b(this, e + 1, e + 2);
                        return this;
                    }),
                    (c.prototype.swap64 = function () {
                        const t = this.length;
                        if (t % 8 != 0)
                            throw new RangeError(
                                "Buffer size must be a multiple of 64-bits",
                            );
                        for (let e = 0; e < t; e += 8)
                            b(this, e, e + 7),
                                b(this, e + 1, e + 6),
                                b(this, e + 2, e + 5),
                                b(this, e + 3, e + 4);
                        return this;
                    }),
                    (c.prototype.toString = function () {
                        const t = this.length;
                        return 0 === t
                            ? ""
                            : 0 === arguments.length
                            ? T(this, 0, t)
                            : m.apply(this, arguments);
                    }),
                    (c.prototype.toLocaleString = c.prototype.toString),
                    (c.prototype.equals = function (t) {
                        if (!c.isBuffer(t))
                            throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === c.compare(this, t);
                    }),
                    (c.prototype.inspect = function () {
                        let t = "";
                        const r = e.INSPECT_MAX_BYTES;
                        return (
                            (t = this.toString("hex", 0, r)
                                .replace(/(.{2})/g, "$1 ")
                                .trim()),
                            this.length > r && (t += " ... "),
                            "<Buffer " + t + ">"
                        );
                    }),
                    i && (c.prototype[i] = c.prototype.inspect),
                    (c.prototype.compare = function (t, e, r, n, o) {
                        if (
                            (X(t, Uint8Array) &&
                                (t = c.from(t, t.offset, t.byteLength)),
                            !c.isBuffer(t))
                        )
                            throw new TypeError(
                                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                                    typeof t,
                            );
                        if (
                            (void 0 === e && (e = 0),
                            void 0 === r && (r = t ? t.length : 0),
                            void 0 === n && (n = 0),
                            void 0 === o && (o = this.length),
                            e < 0 || r > t.length || n < 0 || o > this.length)
                        )
                            throw new RangeError("out of range index");
                        if (n >= o && e >= r) return 0;
                        if (n >= o) return -1;
                        if (e >= r) return 1;
                        if (this === t) return 0;
                        let i = (o >>>= 0) - (n >>>= 0),
                            s = (r >>>= 0) - (e >>>= 0);
                        const a = Math.min(i, s),
                            l = this.slice(n, o),
                            u = t.slice(e, r);
                        for (let t = 0; t < a; ++t)
                            if (l[t] !== u[t]) {
                                (i = l[t]), (s = u[t]);
                                break;
                            }
                        return i < s ? -1 : s < i ? 1 : 0;
                    }),
                    (c.prototype.includes = function (t, e, r) {
                        return -1 !== this.indexOf(t, e, r);
                    }),
                    (c.prototype.indexOf = function (t, e, r) {
                        return y(this, t, e, r, !0);
                    }),
                    (c.prototype.lastIndexOf = function (t, e, r) {
                        return y(this, t, e, r, !1);
                    }),
                    (c.prototype.write = function (t, e, r, n) {
                        if (void 0 === e)
                            (n = "utf8"), (r = this.length), (e = 0);
                        else if (void 0 === r && "string" == typeof e)
                            (n = e), (r = this.length), (e = 0);
                        else {
                            if (!isFinite(e))
                                throw new Error(
                                    "Buffer.write(string, encoding, offset[, length]) is no longer supported",
                                );
                            (e >>>= 0),
                                isFinite(r)
                                    ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                                    : ((n = r), (r = void 0));
                        }
                        const o = this.length - e;
                        if (
                            ((void 0 === r || r > o) && (r = o),
                            (t.length > 0 && (r < 0 || e < 0)) ||
                                e > this.length)
                        )
                            throw new RangeError(
                                "Attempt to write outside buffer bounds",
                            );
                        n || (n = "utf8");
                        let i = !1;
                        for (;;)
                            switch (n) {
                                case "hex":
                                    return w(this, t, e, r);
                                case "utf8":
                                case "utf-8":
                                    return _(this, t, e, r);
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return q(this, t, e, r);
                                case "base64":
                                    return x(this, t, e, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return E(this, t, e, r);
                                default:
                                    if (i)
                                        throw new TypeError(
                                            "Unknown encoding: " + n,
                                        );
                                    (n = ("" + n).toLowerCase()), (i = !0);
                            }
                    }),
                    (c.prototype.toJSON = function () {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(
                                this._arr || this,
                                0,
                            ),
                        };
                    });
                const A = 4096;
                function L(t, e, r) {
                    let n = "";
                    r = Math.min(t.length, r);
                    for (let o = e; o < r; ++o)
                        n += String.fromCharCode(127 & t[o]);
                    return n;
                }
                function k(t, e, r) {
                    let n = "";
                    r = Math.min(t.length, r);
                    for (let o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                    return n;
                }
                function D(t, e, r) {
                    const n = t.length;
                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                    let o = "";
                    for (let n = e; n < r; ++n) o += K[t[n]];
                    return o;
                }
                function N(t, e, r) {
                    const n = t.slice(e, r);
                    let o = "";
                    for (let t = 0; t < n.length - 1; t += 2)
                        o += String.fromCharCode(n[t] + 256 * n[t + 1]);
                    return o;
                }
                function C(t, e, r) {
                    if (t % 1 != 0 || t < 0)
                        throw new RangeError("offset is not uint");
                    if (t + e > r)
                        throw new RangeError(
                            "Trying to access beyond buffer length",
                        );
                }
                function B(t, e, r, n, o, i) {
                    if (!c.isBuffer(t))
                        throw new TypeError(
                            '"buffer" argument must be a Buffer instance',
                        );
                    if (e > o || e < i)
                        throw new RangeError(
                            '"value" argument is out of bounds',
                        );
                    if (r + n > t.length)
                        throw new RangeError("Index out of range");
                }
                function R(t, e, r, n, o) {
                    j(e, n, o, t, r, 7);
                    let i = Number(e & BigInt(4294967295));
                    (t[r++] = i),
                        (i >>= 8),
                        (t[r++] = i),
                        (i >>= 8),
                        (t[r++] = i),
                        (i >>= 8),
                        (t[r++] = i);
                    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
                    return (
                        (t[r++] = s),
                        (s >>= 8),
                        (t[r++] = s),
                        (s >>= 8),
                        (t[r++] = s),
                        (s >>= 8),
                        (t[r++] = s),
                        r
                    );
                }
                function O(t, e, r, n, o) {
                    j(e, n, o, t, r, 7);
                    let i = Number(e & BigInt(4294967295));
                    (t[r + 7] = i),
                        (i >>= 8),
                        (t[r + 6] = i),
                        (i >>= 8),
                        (t[r + 5] = i),
                        (i >>= 8),
                        (t[r + 4] = i);
                    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
                    return (
                        (t[r + 3] = s),
                        (s >>= 8),
                        (t[r + 2] = s),
                        (s >>= 8),
                        (t[r + 1] = s),
                        (s >>= 8),
                        (t[r] = s),
                        r + 8
                    );
                }
                function U(t, e, r, n, o, i) {
                    if (r + n > t.length)
                        throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range");
                }
                function I(t, e, r, n, i) {
                    return (
                        (e = +e),
                        (r >>>= 0),
                        i || U(t, 0, r, 4),
                        o.write(t, e, r, n, 23, 4),
                        r + 4
                    );
                }
                function V(t, e, r, n, i) {
                    return (
                        (e = +e),
                        (r >>>= 0),
                        i || U(t, 0, r, 8),
                        o.write(t, e, r, n, 52, 8),
                        r + 8
                    );
                }
                (c.prototype.slice = function (t, e) {
                    const r = this.length;
                    (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                        (e = void 0 === e ? r : ~~e) < 0
                            ? (e += r) < 0 && (e = 0)
                            : e > r && (e = r),
                        e < t && (e = t);
                    const n = this.subarray(t, e);
                    return Object.setPrototypeOf(n, c.prototype), n;
                }),
                    (c.prototype.readUintLE = c.prototype.readUIntLE =
                        function (t, e, r) {
                            (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                            let n = this[t],
                                o = 1,
                                i = 0;
                            for (; ++i < e && (o *= 256); )
                                n += this[t + i] * o;
                            return n;
                        }),
                    (c.prototype.readUintBE = c.prototype.readUIntBE =
                        function (t, e, r) {
                            (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                            let n = this[t + --e],
                                o = 1;
                            for (; e > 0 && (o *= 256); )
                                n += this[t + --e] * o;
                            return n;
                        }),
                    (c.prototype.readUint8 = c.prototype.readUInt8 =
                        function (t, e) {
                            return (
                                (t >>>= 0), e || C(t, 1, this.length), this[t]
                            );
                        }),
                    (c.prototype.readUint16LE = c.prototype.readUInt16LE =
                        function (t, e) {
                            return (
                                (t >>>= 0),
                                e || C(t, 2, this.length),
                                this[t] | (this[t + 1] << 8)
                            );
                        }),
                    (c.prototype.readUint16BE = c.prototype.readUInt16BE =
                        function (t, e) {
                            return (
                                (t >>>= 0),
                                e || C(t, 2, this.length),
                                (this[t] << 8) | this[t + 1]
                            );
                        }),
                    (c.prototype.readUint32LE = c.prototype.readUInt32LE =
                        function (t, e) {
                            return (
                                (t >>>= 0),
                                e || C(t, 4, this.length),
                                (this[t] |
                                    (this[t + 1] << 8) |
                                    (this[t + 2] << 16)) +
                                    16777216 * this[t + 3]
                            );
                        }),
                    (c.prototype.readUint32BE = c.prototype.readUInt32BE =
                        function (t, e) {
                            return (
                                (t >>>= 0),
                                e || C(t, 4, this.length),
                                16777216 * this[t] +
                                    ((this[t + 1] << 16) |
                                        (this[t + 2] << 8) |
                                        this[t + 3])
                            );
                        }),
                    (c.prototype.readBigUInt64LE = $(function (t) {
                        G((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n =
                                e +
                                256 * this[++t] +
                                65536 * this[++t] +
                                this[++t] * 2 ** 24,
                            o =
                                this[++t] +
                                256 * this[++t] +
                                65536 * this[++t] +
                                r * 2 ** 24;
                        return BigInt(n) + (BigInt(o) << BigInt(32));
                    })),
                    (c.prototype.readBigUInt64BE = $(function (t) {
                        G((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n =
                                e * 2 ** 24 +
                                65536 * this[++t] +
                                256 * this[++t] +
                                this[++t],
                            o =
                                this[++t] * 2 ** 24 +
                                65536 * this[++t] +
                                256 * this[++t] +
                                r;
                        return (BigInt(n) << BigInt(32)) + BigInt(o);
                    })),
                    (c.prototype.readIntLE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                        let n = this[t],
                            o = 1,
                            i = 0;
                        for (; ++i < e && (o *= 256); ) n += this[t + i] * o;
                        return (
                            (o *= 128), n >= o && (n -= Math.pow(2, 8 * e)), n
                        );
                    }),
                    (c.prototype.readIntBE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                        let n = e,
                            o = 1,
                            i = this[t + --n];
                        for (; n > 0 && (o *= 256); ) i += this[t + --n] * o;
                        return (
                            (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i
                        );
                    }),
                    (c.prototype.readInt8 = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 1, this.length),
                            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                        );
                    }),
                    (c.prototype.readInt16LE = function (t, e) {
                        (t >>>= 0), e || C(t, 2, this.length);
                        const r = this[t] | (this[t + 1] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (c.prototype.readInt16BE = function (t, e) {
                        (t >>>= 0), e || C(t, 2, this.length);
                        const r = this[t + 1] | (this[t] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (c.prototype.readInt32LE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 4, this.length),
                            this[t] |
                                (this[t + 1] << 8) |
                                (this[t + 2] << 16) |
                                (this[t + 3] << 24)
                        );
                    }),
                    (c.prototype.readInt32BE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 4, this.length),
                            (this[t] << 24) |
                                (this[t + 1] << 16) |
                                (this[t + 2] << 8) |
                                this[t + 3]
                        );
                    }),
                    (c.prototype.readBigInt64LE = $(function (t) {
                        G((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n =
                            this[t + 4] +
                            256 * this[t + 5] +
                            65536 * this[t + 6] +
                            (r << 24);
                        return (
                            (BigInt(n) << BigInt(32)) +
                            BigInt(
                                e +
                                    256 * this[++t] +
                                    65536 * this[++t] +
                                    this[++t] * 2 ** 24,
                            )
                        );
                    })),
                    (c.prototype.readBigInt64BE = $(function (t) {
                        G((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n =
                            (e << 24) +
                            65536 * this[++t] +
                            256 * this[++t] +
                            this[++t];
                        return (
                            (BigInt(n) << BigInt(32)) +
                            BigInt(
                                this[++t] * 2 ** 24 +
                                    65536 * this[++t] +
                                    256 * this[++t] +
                                    r,
                            )
                        );
                    })),
                    (c.prototype.readFloatLE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 4, this.length),
                            o.read(this, t, !0, 23, 4)
                        );
                    }),
                    (c.prototype.readFloatBE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 4, this.length),
                            o.read(this, t, !1, 23, 4)
                        );
                    }),
                    (c.prototype.readDoubleLE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 8, this.length),
                            o.read(this, t, !0, 52, 8)
                        );
                    }),
                    (c.prototype.readDoubleBE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 8, this.length),
                            o.read(this, t, !1, 52, 8)
                        );
                    }),
                    (c.prototype.writeUintLE = c.prototype.writeUIntLE =
                        function (t, e, r, n) {
                            (t = +t),
                                (e >>>= 0),
                                (r >>>= 0),
                                n ||
                                    B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                            let o = 1,
                                i = 0;
                            for (this[e] = 255 & t; ++i < r && (o *= 256); )
                                this[e + i] = (t / o) & 255;
                            return e + r;
                        }),
                    (c.prototype.writeUintBE = c.prototype.writeUIntBE =
                        function (t, e, r, n) {
                            (t = +t),
                                (e >>>= 0),
                                (r >>>= 0),
                                n ||
                                    B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                            let o = r - 1,
                                i = 1;
                            for (
                                this[e + o] = 255 & t;
                                --o >= 0 && (i *= 256);

                            )
                                this[e + o] = (t / i) & 255;
                            return e + r;
                        }),
                    (c.prototype.writeUint8 = c.prototype.writeUInt8 =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 1, 255, 0),
                                (this[e] = 255 & t),
                                e + 1
                            );
                        }),
                    (c.prototype.writeUint16LE = c.prototype.writeUInt16LE =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 2, 65535, 0),
                                (this[e] = 255 & t),
                                (this[e + 1] = t >>> 8),
                                e + 2
                            );
                        }),
                    (c.prototype.writeUint16BE = c.prototype.writeUInt16BE =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 2, 65535, 0),
                                (this[e] = t >>> 8),
                                (this[e + 1] = 255 & t),
                                e + 2
                            );
                        }),
                    (c.prototype.writeUint32LE = c.prototype.writeUInt32LE =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 4, 4294967295, 0),
                                (this[e + 3] = t >>> 24),
                                (this[e + 2] = t >>> 16),
                                (this[e + 1] = t >>> 8),
                                (this[e] = 255 & t),
                                e + 4
                            );
                        }),
                    (c.prototype.writeUint32BE = c.prototype.writeUInt32BE =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 4, 4294967295, 0),
                                (this[e] = t >>> 24),
                                (this[e + 1] = t >>> 16),
                                (this[e + 2] = t >>> 8),
                                (this[e + 3] = 255 & t),
                                e + 4
                            );
                        }),
                    (c.prototype.writeBigUInt64LE = $(function (t, e = 0) {
                        return R(
                            this,
                            t,
                            e,
                            BigInt(0),
                            BigInt("0xffffffffffffffff"),
                        );
                    })),
                    (c.prototype.writeBigUInt64BE = $(function (t, e = 0) {
                        return O(
                            this,
                            t,
                            e,
                            BigInt(0),
                            BigInt("0xffffffffffffffff"),
                        );
                    })),
                    (c.prototype.writeIntLE = function (t, e, r, n) {
                        if (((t = +t), (e >>>= 0), !n)) {
                            const n = Math.pow(2, 8 * r - 1);
                            B(this, t, e, r, n - 1, -n);
                        }
                        let o = 0,
                            i = 1,
                            s = 0;
                        for (this[e] = 255 & t; ++o < r && (i *= 256); )
                            t < 0 &&
                                0 === s &&
                                0 !== this[e + o - 1] &&
                                (s = 1),
                                (this[e + o] = (((t / i) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (c.prototype.writeIntBE = function (t, e, r, n) {
                        if (((t = +t), (e >>>= 0), !n)) {
                            const n = Math.pow(2, 8 * r - 1);
                            B(this, t, e, r, n - 1, -n);
                        }
                        let o = r - 1,
                            i = 1,
                            s = 0;
                        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
                            t < 0 &&
                                0 === s &&
                                0 !== this[e + o + 1] &&
                                (s = 1),
                                (this[e + o] = (((t / i) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (c.prototype.writeInt8 = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 1, 127, -128),
                            t < 0 && (t = 255 + t + 1),
                            (this[e] = 255 & t),
                            e + 1
                        );
                    }),
                    (c.prototype.writeInt16LE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 2, 32767, -32768),
                            (this[e] = 255 & t),
                            (this[e + 1] = t >>> 8),
                            e + 2
                        );
                    }),
                    (c.prototype.writeInt16BE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 2, 32767, -32768),
                            (this[e] = t >>> 8),
                            (this[e + 1] = 255 & t),
                            e + 2
                        );
                    }),
                    (c.prototype.writeInt32LE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 4, 2147483647, -2147483648),
                            (this[e] = 255 & t),
                            (this[e + 1] = t >>> 8),
                            (this[e + 2] = t >>> 16),
                            (this[e + 3] = t >>> 24),
                            e + 4
                        );
                    }),
                    (c.prototype.writeInt32BE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 4, 2147483647, -2147483648),
                            t < 0 && (t = 4294967295 + t + 1),
                            (this[e] = t >>> 24),
                            (this[e + 1] = t >>> 16),
                            (this[e + 2] = t >>> 8),
                            (this[e + 3] = 255 & t),
                            e + 4
                        );
                    }),
                    (c.prototype.writeBigInt64LE = $(function (t, e = 0) {
                        return R(
                            this,
                            t,
                            e,
                            -BigInt("0x8000000000000000"),
                            BigInt("0x7fffffffffffffff"),
                        );
                    })),
                    (c.prototype.writeBigInt64BE = $(function (t, e = 0) {
                        return O(
                            this,
                            t,
                            e,
                            -BigInt("0x8000000000000000"),
                            BigInt("0x7fffffffffffffff"),
                        );
                    })),
                    (c.prototype.writeFloatLE = function (t, e, r) {
                        return I(this, t, e, !0, r);
                    }),
                    (c.prototype.writeFloatBE = function (t, e, r) {
                        return I(this, t, e, !1, r);
                    }),
                    (c.prototype.writeDoubleLE = function (t, e, r) {
                        return V(this, t, e, !0, r);
                    }),
                    (c.prototype.writeDoubleBE = function (t, e, r) {
                        return V(this, t, e, !1, r);
                    }),
                    (c.prototype.copy = function (t, e, r, n) {
                        if (!c.isBuffer(t))
                            throw new TypeError("argument should be a Buffer");
                        if (
                            (r || (r = 0),
                            n || 0 === n || (n = this.length),
                            e >= t.length && (e = t.length),
                            e || (e = 0),
                            n > 0 && n < r && (n = r),
                            n === r)
                        )
                            return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0)
                            throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length)
                            throw new RangeError("Index out of range");
                        if (n < 0)
                            throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length),
                            t.length - e < n - r && (n = t.length - e + r);
                        const o = n - r;
                        return (
                            this === t &&
                            "function" == typeof Uint8Array.prototype.copyWithin
                                ? this.copyWithin(e, r, n)
                                : Uint8Array.prototype.set.call(
                                      t,
                                      this.subarray(r, n),
                                      e,
                                  ),
                            o
                        );
                    }),
                    (c.prototype.fill = function (t, e, r, n) {
                        if ("string" == typeof t) {
                            if (
                                ("string" == typeof e
                                    ? ((n = e), (e = 0), (r = this.length))
                                    : "string" == typeof r &&
                                      ((n = r), (r = this.length)),
                                void 0 !== n && "string" != typeof n)
                            )
                                throw new TypeError(
                                    "encoding must be a string",
                                );
                            if ("string" == typeof n && !c.isEncoding(n))
                                throw new TypeError("Unknown encoding: " + n);
                            if (1 === t.length) {
                                const e = t.charCodeAt(0);
                                (("utf8" === n && e < 128) || "latin1" === n) &&
                                    (t = e);
                            }
                        } else
                            "number" == typeof t
                                ? (t &= 255)
                                : "boolean" == typeof t && (t = Number(t));
                        if (e < 0 || this.length < e || this.length < r)
                            throw new RangeError("Out of range index");
                        if (r <= e) return this;
                        let o;
                        if (
                            ((e >>>= 0),
                            (r = void 0 === r ? this.length : r >>> 0),
                            t || (t = 0),
                            "number" == typeof t)
                        )
                            for (o = e; o < r; ++o) this[o] = t;
                        else {
                            const i = c.isBuffer(t) ? t : c.from(t, n),
                                s = i.length;
                            if (0 === s)
                                throw new TypeError(
                                    'The value "' +
                                        t +
                                        '" is invalid for argument "value"',
                                );
                            for (o = 0; o < r - e; ++o) this[o + e] = i[o % s];
                        }
                        return this;
                    });
                const P = {};
                function H(t, e, r) {
                    P[t] = class extends r {
                        constructor() {
                            super(),
                                Object.defineProperty(this, "message", {
                                    value: e.apply(this, arguments),
                                    writable: !0,
                                    configurable: !0,
                                }),
                                (this.name = `${this.name} [${t}]`),
                                this.stack,
                                delete this.name;
                        }
                        get code() {
                            return t;
                        }
                        set code(t) {
                            Object.defineProperty(this, "code", {
                                configurable: !0,
                                enumerable: !0,
                                value: t,
                                writable: !0,
                            });
                        }
                        toString() {
                            return `${this.name} [${t}]: ${this.message}`;
                        }
                    };
                }
                function M(t) {
                    let e = "",
                        r = t.length;
                    const n = "-" === t[0] ? 1 : 0;
                    for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
                    return `${t.slice(0, r)}${e}`;
                }
                function j(t, e, r, n, o, i) {
                    if (t > r || t < e) {
                        const n = "bigint" == typeof e ? "n" : "";
                        let o;
                        throw (
                            ((o =
                                i > 3
                                    ? 0 === e || e === BigInt(0)
                                        ? `>= 0${n} and < 2${n} ** ${
                                              8 * (i + 1)
                                          }${n}`
                                        : `>= -(2${n} ** ${
                                              8 * (i + 1) - 1
                                          }${n}) and < 2 ** ${
                                              8 * (i + 1) - 1
                                          }${n}`
                                    : `>= ${e}${n} and <= ${r}${n}`),
                            new P.ERR_OUT_OF_RANGE("value", o, t))
                        );
                    }
                    !(function (t, e, r) {
                        G(e, "offset"),
                            (void 0 !== t[e] && void 0 !== t[e + r]) ||
                                F(e, t.length - (r + 1));
                    })(n, o, i);
                }
                function G(t, e) {
                    if ("number" != typeof t)
                        throw new P.ERR_INVALID_ARG_TYPE(e, "number", t);
                }
                function F(t, e, r) {
                    if (Math.floor(t) !== t)
                        throw (
                            (G(t, r),
                            new P.ERR_OUT_OF_RANGE(
                                r || "offset",
                                "an integer",
                                t,
                            ))
                        );
                    if (e < 0) throw new P.ERR_BUFFER_OUT_OF_BOUNDS();
                    throw new P.ERR_OUT_OF_RANGE(
                        r || "offset",
                        `>= ${r ? 1 : 0} and <= ${e}`,
                        t,
                    );
                }
                H(
                    "ERR_BUFFER_OUT_OF_BOUNDS",
                    function (t) {
                        return t
                            ? `${t} is outside of buffer bounds`
                            : "Attempt to access memory outside buffer bounds";
                    },
                    RangeError,
                ),
                    H(
                        "ERR_INVALID_ARG_TYPE",
                        function (t, e) {
                            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
                        },
                        TypeError,
                    ),
                    H(
                        "ERR_OUT_OF_RANGE",
                        function (t, e, r) {
                            let n = `The value of "${t}" is out of range.`,
                                o = r;
                            return (
                                Number.isInteger(r) && Math.abs(r) > 2 ** 32
                                    ? (o = M(String(r)))
                                    : "bigint" == typeof r &&
                                      ((o = String(r)),
                                      (r > BigInt(2) ** BigInt(32) ||
                                          r < -(BigInt(2) ** BigInt(32))) &&
                                          (o = M(o)),
                                      (o += "n")),
                                (n += ` It must be ${e}. Received ${o}`),
                                n
                            );
                        },
                        RangeError,
                    );
                const z = /[^+/0-9A-Za-z-_]/g;
                function J(t, e) {
                    let r;
                    e = e || 1 / 0;
                    const n = t.length;
                    let o = null;
                    const i = [];
                    for (let s = 0; s < n; ++s) {
                        if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
                            if (!o) {
                                if (r > 56319) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue;
                                }
                                if (s + 1 === n) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue;
                                }
                                o = r;
                                continue;
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
                                continue;
                            }
                            r = 65536 + (((o - 55296) << 10) | (r - 56320));
                        } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                        if (((o = null), r < 128)) {
                            if ((e -= 1) < 0) break;
                            i.push(r);
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            i.push((r >> 6) | 192, (63 & r) | 128);
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            i.push(
                                (r >> 12) | 224,
                                ((r >> 6) & 63) | 128,
                                (63 & r) | 128,
                            );
                        } else {
                            if (!(r < 1114112))
                                throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            i.push(
                                (r >> 18) | 240,
                                ((r >> 12) & 63) | 128,
                                ((r >> 6) & 63) | 128,
                                (63 & r) | 128,
                            );
                        }
                    }
                    return i;
                }
                function Y(t) {
                    return n.toByteArray(
                        (function (t) {
                            if (
                                (t = (t = t.split("=")[0])
                                    .trim()
                                    .replace(z, "")).length < 2
                            )
                                return "";
                            for (; t.length % 4 != 0; ) t += "=";
                            return t;
                        })(t),
                    );
                }
                function Z(t, e, r, n) {
                    let o;
                    for (
                        o = 0;
                        o < n && !(o + r >= e.length || o >= t.length);
                        ++o
                    )
                        e[o + r] = t[o];
                    return o;
                }
                function X(t, e) {
                    return (
                        t instanceof e ||
                        (null != t &&
                            null != t.constructor &&
                            null != t.constructor.name &&
                            t.constructor.name === e.name)
                    );
                }
                function W(t) {
                    return t != t;
                }
                const K = (function () {
                    const t = "0123456789abcdef",
                        e = new Array(256);
                    for (let r = 0; r < 16; ++r) {
                        const n = 16 * r;
                        for (let o = 0; o < 16; ++o) e[n + o] = t[r] + t[o];
                    }
                    return e;
                })();
                function $(t) {
                    return "undefined" == typeof BigInt ? Q : t;
                }
                function Q() {
                    throw new Error("BigInt not supported");
                }
            },
            3237: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}',
                );
            },
            6138: (t, e, r) => {
                var n = r(3850),
                    o = r(3661),
                    i = r(3237);
                (i.elementNames.__proto__ = null),
                    (i.attributeNames.__proto__ = null);
                var s = {
                        __proto__: null,
                        style: !0,
                        script: !0,
                        xmp: !0,
                        iframe: !0,
                        noembed: !0,
                        noframes: !0,
                        plaintext: !0,
                        noscript: !0,
                    },
                    a = {
                        __proto__: null,
                        area: !0,
                        base: !0,
                        basefont: !0,
                        br: !0,
                        col: !0,
                        command: !0,
                        embed: !0,
                        frame: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        isindex: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0,
                    },
                    c = (t.exports = function (t, e) {
                        Array.isArray(t) || t.cheerio || (t = [t]),
                            (e = e || {});
                        for (var r = "", o = 0; o < t.length; o++) {
                            var i = t[o];
                            "root" === i.type
                                ? (r += c(i.children, e))
                                : n.isTag(i)
                                ? (r += u(i, e))
                                : i.type === n.Directive
                                ? (r += p(i))
                                : i.type === n.Comment
                                ? (r += d(i))
                                : i.type === n.CDATA
                                ? (r += f(i))
                                : (r += h(i, e));
                        }
                        return r;
                    }),
                    l = [
                        "mi",
                        "mo",
                        "mn",
                        "ms",
                        "mtext",
                        "annotation-xml",
                        "foreignObject",
                        "desc",
                        "title",
                    ];
                function u(t, e) {
                    "foreign" === e.xmlMode &&
                        ((t.name = i.elementNames[t.name] || t.name),
                        t.parent &&
                            l.indexOf(t.parent.name) >= 0 &&
                            (e = Object.assign({}, e, { xmlMode: !1 }))),
                        !e.xmlMode &&
                            ["svg", "math"].indexOf(t.name) >= 0 &&
                            (e = Object.assign({}, e, { xmlMode: "foreign" }));
                    var r = "<" + t.name,
                        n = (function (t, e) {
                            if (t) {
                                var r,
                                    n = "";
                                for (var s in t)
                                    (r = t[s]),
                                        n && (n += " "),
                                        "foreign" === e.xmlMode &&
                                            (s = i.attributeNames[s] || s),
                                        (n += s),
                                        ((null !== r && "" !== r) ||
                                            e.xmlMode) &&
                                            (n +=
                                                '="' +
                                                (e.decodeEntities
                                                    ? o.encodeXML(r)
                                                    : r.replace(
                                                          /\"/g,
                                                          "&quot;",
                                                      )) +
                                                '"');
                                return n;
                            }
                        })(t.attribs, e);
                    return (
                        n && (r += " " + n),
                        !e.xmlMode || (t.children && 0 !== t.children.length)
                            ? ((r += ">"),
                              t.children && (r += c(t.children, e)),
                              (a[t.name] && !e.xmlMode) ||
                                  (r += "</" + t.name + ">"))
                            : (r += "/>"),
                        r
                    );
                }
                function p(t) {
                    return "<" + t.data + ">";
                }
                function h(t, e) {
                    var r = t.data || "";
                    return (
                        !e.decodeEntities ||
                            (t.parent && t.parent.name in s) ||
                            (r = o.encodeXML(r)),
                        r
                    );
                }
                function f(t) {
                    return "<![CDATA[" + t.children[0].data + "]]>";
                }
                function d(t) {
                    return "\x3c!--" + t.data + "--\x3e";
                }
            },
            3850: (t, e) => {
                "use strict";
                var r;
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.Doctype =
                        e.CDATA =
                        e.Tag =
                        e.Style =
                        e.Script =
                        e.Comment =
                        e.Directive =
                        e.Text =
                        e.Root =
                        e.isTag =
                        e.ElementType =
                            void 0),
                    (function (t) {
                        (t.Root = "root"),
                            (t.Text = "text"),
                            (t.Directive = "directive"),
                            (t.Comment = "comment"),
                            (t.Script = "script"),
                            (t.Style = "style"),
                            (t.Tag = "tag"),
                            (t.CDATA = "cdata"),
                            (t.Doctype = "doctype");
                    })((r = e.ElementType || (e.ElementType = {}))),
                    (e.isTag = function (t) {
                        return (
                            t.type === r.Tag ||
                            t.type === r.Script ||
                            t.type === r.Style
                        );
                    }),
                    (e.Root = r.Root),
                    (e.Text = r.Text),
                    (e.Directive = r.Directive),
                    (e.Comment = r.Comment),
                    (e.Script = r.Script),
                    (e.Style = r.Style),
                    (e.Tag = r.Tag),
                    (e.CDATA = r.CDATA),
                    (e.Doctype = r.Doctype);
            },
            901: function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
                var o = n(r(3045)),
                    i = n(r(3946)),
                    s = n(r(5389)),
                    a = n(r(6312)),
                    c = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
                function l(t) {
                    var e = p(t);
                    return function (t) {
                        return String(t).replace(c, e);
                    };
                }
                (e.decodeXML = l(s.default)),
                    (e.decodeHTMLStrict = l(o.default));
                var u = function (t, e) {
                    return t < e ? 1 : -1;
                };
                function p(t) {
                    return function (e) {
                        if ("#" === e.charAt(1)) {
                            var r = e.charAt(2);
                            return "X" === r || "x" === r
                                ? a.default(parseInt(e.substr(3), 16))
                                : a.default(parseInt(e.substr(2), 10));
                        }
                        return t[e.slice(1, -1)] || e;
                    };
                }
                e.decodeHTML = (function () {
                    for (
                        var t = Object.keys(i.default).sort(u),
                            e = Object.keys(o.default).sort(u),
                            r = 0,
                            n = 0;
                        r < e.length;
                        r++
                    )
                        t[n] === e[r] ? ((e[r] += ";?"), n++) : (e[r] += ";");
                    var s = new RegExp(
                            "&(?:" +
                                e.join("|") +
                                "|#[xX][\\da-fA-F]+;?|#\\d+;?)",
                            "g",
                        ),
                        a = p(o.default);
                    function c(t) {
                        return ";" !== t.substr(-1) && (t += ";"), a(t);
                    }
                    return function (t) {
                        return String(t).replace(s, c);
                    };
                })();
            },
            6312: function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(r(705)),
                    i =
                        String.fromCodePoint ||
                        function (t) {
                            var e = "";
                            return (
                                t > 65535 &&
                                    ((t -= 65536),
                                    (e += String.fromCharCode(
                                        ((t >>> 10) & 1023) | 55296,
                                    )),
                                    (t = 56320 | (1023 & t))),
                                e + String.fromCharCode(t)
                            );
                        };
                e.default = function (t) {
                    return (t >= 55296 && t <= 57343) || t > 1114111
                        ? "�"
                        : (t in o.default && (t = o.default[t]), i(t));
                };
            },
            5278: function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.escapeUTF8 =
                        e.escape =
                        e.encodeNonAsciiHTML =
                        e.encodeHTML =
                        e.encodeXML =
                            void 0);
                var o = u(n(r(5389)).default),
                    i = p(o);
                e.encodeXML = m(o);
                var s,
                    a,
                    c = u(n(r(3045)).default),
                    l = p(c);
                function u(t) {
                    return Object.keys(t)
                        .sort()
                        .reduce(function (e, r) {
                            return (e[t[r]] = "&" + r + ";"), e;
                        }, {});
                }
                function p(t) {
                    for (
                        var e = [], r = [], n = 0, o = Object.keys(t);
                        n < o.length;
                        n++
                    ) {
                        var i = o[n];
                        1 === i.length ? e.push("\\" + i) : r.push(i);
                    }
                    e.sort();
                    for (var s = 0; s < e.length - 1; s++) {
                        for (
                            var a = s;
                            a < e.length - 1 &&
                            e[a].charCodeAt(1) + 1 === e[a + 1].charCodeAt(1);

                        )
                            a += 1;
                        var c = 1 + a - s;
                        c < 3 || e.splice(s, c, e[s] + "-" + e[a]);
                    }
                    return (
                        r.unshift("[" + e.join("") + "]"),
                        new RegExp(r.join("|"), "g")
                    );
                }
                (e.encodeHTML =
                    ((s = c),
                    (a = l),
                    function (t) {
                        return t
                            .replace(a, function (t) {
                                return s[t];
                            })
                            .replace(h, d);
                    })),
                    (e.encodeNonAsciiHTML = m(c));
                var h =
                        /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
                    f =
                        null != String.prototype.codePointAt
                            ? function (t) {
                                  return t.codePointAt(0);
                              }
                            : function (t) {
                                  return (
                                      1024 * (t.charCodeAt(0) - 55296) +
                                      t.charCodeAt(1) -
                                      56320 +
                                      65536
                                  );
                              };
                function d(t) {
                    return (
                        "&#x" +
                        (t.length > 1 ? f(t) : t.charCodeAt(0))
                            .toString(16)
                            .toUpperCase() +
                        ";"
                    );
                }
                var g = new RegExp(i.source + "|" + h.source, "g");
                function m(t) {
                    return function (e) {
                        return e.replace(g, function (e) {
                            return t[e] || d(e);
                        });
                    };
                }
                (e.escape = function (t) {
                    return t.replace(g, d);
                }),
                    (e.escapeUTF8 = function (t) {
                        return t.replace(i, d);
                    });
            },
            3661: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.decodeXMLStrict =
                        e.decodeHTML5Strict =
                        e.decodeHTML4Strict =
                        e.decodeHTML5 =
                        e.decodeHTML4 =
                        e.decodeHTMLStrict =
                        e.decodeHTML =
                        e.decodeXML =
                        e.encodeHTML5 =
                        e.encodeHTML4 =
                        e.escapeUTF8 =
                        e.escape =
                        e.encodeNonAsciiHTML =
                        e.encodeHTML =
                        e.encodeXML =
                        e.encode =
                        e.decodeStrict =
                        e.decode =
                            void 0);
                var n = r(901),
                    o = r(5278);
                (e.decode = function (t, e) {
                    return (!e || e <= 0 ? n.decodeXML : n.decodeHTML)(t);
                }),
                    (e.decodeStrict = function (t, e) {
                        return (
                            !e || e <= 0 ? n.decodeXML : n.decodeHTMLStrict
                        )(t);
                    }),
                    (e.encode = function (t, e) {
                        return (!e || e <= 0 ? o.encodeXML : o.encodeHTML)(t);
                    });
                var i = r(5278);
                Object.defineProperty(e, "encodeXML", {
                    enumerable: !0,
                    get: function () {
                        return i.encodeXML;
                    },
                }),
                    Object.defineProperty(e, "encodeHTML", {
                        enumerable: !0,
                        get: function () {
                            return i.encodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "encodeNonAsciiHTML", {
                        enumerable: !0,
                        get: function () {
                            return i.encodeNonAsciiHTML;
                        },
                    }),
                    Object.defineProperty(e, "escape", {
                        enumerable: !0,
                        get: function () {
                            return i.escape;
                        },
                    }),
                    Object.defineProperty(e, "escapeUTF8", {
                        enumerable: !0,
                        get: function () {
                            return i.escapeUTF8;
                        },
                    }),
                    Object.defineProperty(e, "encodeHTML4", {
                        enumerable: !0,
                        get: function () {
                            return i.encodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "encodeHTML5", {
                        enumerable: !0,
                        get: function () {
                            return i.encodeHTML;
                        },
                    });
                var s = r(901);
                Object.defineProperty(e, "decodeXML", {
                    enumerable: !0,
                    get: function () {
                        return s.decodeXML;
                    },
                }),
                    Object.defineProperty(e, "decodeHTML", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTMLStrict", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTMLStrict;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTML4", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTML5", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTML4Strict", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTMLStrict;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTML5Strict", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTMLStrict;
                        },
                    }),
                    Object.defineProperty(e, "decodeXMLStrict", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeXML;
                        },
                    });
            },
            705: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}',
                );
            },
            3045: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}',
                );
            },
            3946: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}',
                );
            },
            5389: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}',
                );
            },
            4431: (t) => {
                t.exports = {
                    Text: "text",
                    Directive: "directive",
                    Comment: "comment",
                    Script: "script",
                    Style: "style",
                    Tag: "tag",
                    CDATA: "cdata",
                    Doctype: "doctype",
                    isTag: function (t) {
                        return (
                            "tag" === t.type ||
                            "script" === t.type ||
                            "style" === t.type
                        );
                    },
                };
            },
            8753: (t, e, r) => {
                var n = r(4431),
                    o = /\s+/g,
                    i = r(7790),
                    s = r(4407);
                function a(t, e, r) {
                    "object" == typeof t
                        ? ((r = e), (e = t), (t = null))
                        : "function" == typeof e && ((r = e), (e = c)),
                        (this._callback = t),
                        (this._options = e || c),
                        (this._elementCB = r),
                        (this.dom = []),
                        (this._done = !1),
                        (this._tagStack = []),
                        (this._parser = this._parser || null);
                }
                var c = {
                    normalizeWhitespace: !1,
                    withStartIndices: !1,
                    withEndIndices: !1,
                };
                (a.prototype.onparserinit = function (t) {
                    this._parser = t;
                }),
                    (a.prototype.onreset = function () {
                        a.call(
                            this,
                            this._callback,
                            this._options,
                            this._elementCB,
                        );
                    }),
                    (a.prototype.onend = function () {
                        this._done ||
                            ((this._done = !0),
                            (this._parser = null),
                            this._handleCallback(null));
                    }),
                    (a.prototype._handleCallback = a.prototype.onerror =
                        function (t) {
                            if ("function" == typeof this._callback)
                                this._callback(t, this.dom);
                            else if (t) throw t;
                        }),
                    (a.prototype.onclosetag = function () {
                        var t = this._tagStack.pop();
                        this._options.withEndIndices &&
                            t &&
                            (t.endIndex = this._parser.endIndex),
                            this._elementCB && this._elementCB(t);
                    }),
                    (a.prototype._createDomElement = function (t) {
                        if (!this._options.withDomLvl1) return t;
                        var e;
                        for (var r in ((e =
                            "tag" === t.type
                                ? Object.create(s)
                                : Object.create(i)),
                        t))
                            t.hasOwnProperty(r) && (e[r] = t[r]);
                        return e;
                    }),
                    (a.prototype._addDomElement = function (t) {
                        var e = this._tagStack[this._tagStack.length - 1],
                            r = e ? e.children : this.dom,
                            n = r[r.length - 1];
                        (t.next = null),
                            this._options.withStartIndices &&
                                (t.startIndex = this._parser.startIndex),
                            this._options.withEndIndices &&
                                (t.endIndex = this._parser.endIndex),
                            n ? ((t.prev = n), (n.next = t)) : (t.prev = null),
                            r.push(t),
                            (t.parent = e || null);
                    }),
                    (a.prototype.onopentag = function (t, e) {
                        var r = {
                                type:
                                    "script" === t
                                        ? n.Script
                                        : "style" === t
                                        ? n.Style
                                        : n.Tag,
                                name: t,
                                attribs: e,
                                children: [],
                            },
                            o = this._createDomElement(r);
                        this._addDomElement(o), this._tagStack.push(o);
                    }),
                    (a.prototype.ontext = function (t) {
                        var e,
                            r =
                                this._options.normalizeWhitespace ||
                                this._options.ignoreWhitespace;
                        if (
                            !this._tagStack.length &&
                            this.dom.length &&
                            (e = this.dom[this.dom.length - 1]).type === n.Text
                        )
                            r
                                ? (e.data = (e.data + t).replace(o, " "))
                                : (e.data += t);
                        else if (
                            this._tagStack.length &&
                            (e = this._tagStack[this._tagStack.length - 1]) &&
                            (e = e.children[e.children.length - 1]) &&
                            e.type === n.Text
                        )
                            r
                                ? (e.data = (e.data + t).replace(o, " "))
                                : (e.data += t);
                        else {
                            r && (t = t.replace(o, " "));
                            var i = this._createDomElement({
                                data: t,
                                type: n.Text,
                            });
                            this._addDomElement(i);
                        }
                    }),
                    (a.prototype.oncomment = function (t) {
                        var e = this._tagStack[this._tagStack.length - 1];
                        if (e && e.type === n.Comment) e.data += t;
                        else {
                            var r = { data: t, type: n.Comment },
                                o = this._createDomElement(r);
                            this._addDomElement(o), this._tagStack.push(o);
                        }
                    }),
                    (a.prototype.oncdatastart = function () {
                        var t = {
                                children: [{ data: "", type: n.Text }],
                                type: n.CDATA,
                            },
                            e = this._createDomElement(t);
                        this._addDomElement(e), this._tagStack.push(e);
                    }),
                    (a.prototype.oncommentend = a.prototype.oncdataend =
                        function () {
                            this._tagStack.pop();
                        }),
                    (a.prototype.onprocessinginstruction = function (t, e) {
                        var r = this._createDomElement({
                            name: t,
                            data: e,
                            type: n.Directive,
                        });
                        this._addDomElement(r);
                    }),
                    (t.exports = a);
            },
            4407: (t, e, r) => {
                var n = r(7790),
                    o = (t.exports = Object.create(n)),
                    i = { tagName: "name" };
                Object.keys(i).forEach(function (t) {
                    var e = i[t];
                    Object.defineProperty(o, t, {
                        get: function () {
                            return this[e] || null;
                        },
                        set: function (t) {
                            return (this[e] = t), t;
                        },
                    });
                });
            },
            7790: (t) => {
                var e = (t.exports = {
                        get firstChild() {
                            var t = this.children;
                            return (t && t[0]) || null;
                        },
                        get lastChild() {
                            var t = this.children;
                            return (t && t[t.length - 1]) || null;
                        },
                        get nodeType() {
                            return n[this.type] || n.element;
                        },
                    }),
                    r = {
                        tagName: "name",
                        childNodes: "children",
                        parentNode: "parent",
                        previousSibling: "prev",
                        nextSibling: "next",
                        nodeValue: "data",
                    },
                    n = { element: 1, text: 3, cdata: 4, comment: 8 };
                Object.keys(r).forEach(function (t) {
                    var n = r[t];
                    Object.defineProperty(e, t, {
                        get: function () {
                            return this[n] || null;
                        },
                        set: function (t) {
                            return (this[n] = t), t;
                        },
                    });
                });
            },
            2417: (t, e, r) => {
                var n = t.exports;
                [r(3346), r(5010), r(6765), r(8043), r(3905), r(4975)].forEach(
                    function (t) {
                        Object.keys(t).forEach(function (e) {
                            n[e] = t[e].bind(n);
                        });
                    },
                );
            },
            4975: (t, e) => {
                e.removeSubsets = function (t) {
                    for (var e, r, n, o = t.length; --o > -1; ) {
                        for (e = r = t[o], t[o] = null, n = !0; r; ) {
                            if (t.indexOf(r) > -1) {
                                (n = !1), t.splice(o, 1);
                                break;
                            }
                            r = r.parent;
                        }
                        n && (t[o] = e);
                    }
                    return t;
                };
                var r = (e.compareDocumentPosition = function (t, e) {
                    var r,
                        n,
                        o,
                        i,
                        s,
                        a,
                        c = [],
                        l = [];
                    if (t === e) return 0;
                    for (r = t; r; ) c.unshift(r), (r = r.parent);
                    for (r = e; r; ) l.unshift(r), (r = r.parent);
                    for (a = 0; c[a] === l[a]; ) a++;
                    return 0 === a
                        ? 1
                        : ((o = (n = c[a - 1]).children),
                          (i = c[a]),
                          (s = l[a]),
                          o.indexOf(i) > o.indexOf(s)
                              ? n === e
                                  ? 20
                                  : 4
                              : n === t
                              ? 10
                              : 2);
                });
                e.uniqueSort = function (t) {
                    var e,
                        n,
                        o = t.length;
                    for (t = t.slice(); --o > -1; )
                        (e = t[o]),
                            (n = t.indexOf(e)) > -1 && n < o && t.splice(o, 1);
                    return (
                        t.sort(function (t, e) {
                            var n = r(t, e);
                            return 2 & n ? -1 : 4 & n ? 1 : 0;
                        }),
                        t
                    );
                };
            },
            3905: (t, e, r) => {
                var n = r(4431),
                    o = (e.isTag = n.isTag);
                e.testElement = function (t, e) {
                    for (var r in t)
                        if (t.hasOwnProperty(r))
                            if ("tag_name" === r) {
                                if (!o(e) || !t.tag_name(e.name)) return !1;
                            } else if ("tag_type" === r) {
                                if (!t.tag_type(e.type)) return !1;
                            } else if ("tag_contains" === r) {
                                if (o(e) || !t.tag_contains(e.data)) return !1;
                            } else if (!e.attribs || !t[r](e.attribs[r]))
                                return !1;
                    return !0;
                };
                var i = {
                    tag_name: function (t) {
                        return "function" == typeof t
                            ? function (e) {
                                  return o(e) && t(e.name);
                              }
                            : "*" === t
                            ? o
                            : function (e) {
                                  return o(e) && e.name === t;
                              };
                    },
                    tag_type: function (t) {
                        return "function" == typeof t
                            ? function (e) {
                                  return t(e.type);
                              }
                            : function (e) {
                                  return e.type === t;
                              };
                    },
                    tag_contains: function (t) {
                        return "function" == typeof t
                            ? function (e) {
                                  return !o(e) && t(e.data);
                              }
                            : function (e) {
                                  return !o(e) && e.data === t;
                              };
                    },
                };
                function s(t, e) {
                    return "function" == typeof e
                        ? function (r) {
                              return r.attribs && e(r.attribs[t]);
                          }
                        : function (r) {
                              return r.attribs && r.attribs[t] === e;
                          };
                }
                function a(t, e) {
                    return function (r) {
                        return t(r) || e(r);
                    };
                }
                (e.getElements = function (t, e, r, n) {
                    var o = Object.keys(t).map(function (e) {
                        var r = t[e];
                        return e in i ? i[e](r) : s(e, r);
                    });
                    return 0 === o.length
                        ? []
                        : this.filter(o.reduce(a), e, r, n);
                }),
                    (e.getElementById = function (t, e, r) {
                        return (
                            Array.isArray(e) || (e = [e]),
                            this.findOne(s("id", t), e, !1 !== r)
                        );
                    }),
                    (e.getElementsByTagName = function (t, e, r, n) {
                        return this.filter(i.tag_name(t), e, r, n);
                    }),
                    (e.getElementsByTagType = function (t, e, r, n) {
                        return this.filter(i.tag_type(t), e, r, n);
                    });
            },
            6765: (t, e) => {
                (e.removeElement = function (t) {
                    if (
                        (t.prev && (t.prev.next = t.next),
                        t.next && (t.next.prev = t.prev),
                        t.parent)
                    ) {
                        var e = t.parent.children;
                        e.splice(e.lastIndexOf(t), 1);
                    }
                }),
                    (e.replaceElement = function (t, e) {
                        var r = (e.prev = t.prev);
                        r && (r.next = e);
                        var n = (e.next = t.next);
                        n && (n.prev = e);
                        var o = (e.parent = t.parent);
                        if (o) {
                            var i = o.children;
                            i[i.lastIndexOf(t)] = e;
                        }
                    }),
                    (e.appendChild = function (t, e) {
                        if (((e.parent = t), 1 !== t.children.push(e))) {
                            var r = t.children[t.children.length - 2];
                            (r.next = e), (e.prev = r), (e.next = null);
                        }
                    }),
                    (e.append = function (t, e) {
                        var r = t.parent,
                            n = t.next;
                        if (
                            ((e.next = n),
                            (e.prev = t),
                            (t.next = e),
                            (e.parent = r),
                            n)
                        ) {
                            if (((n.prev = e), r)) {
                                var o = r.children;
                                o.splice(o.lastIndexOf(n), 0, e);
                            }
                        } else r && r.children.push(e);
                    }),
                    (e.prepend = function (t, e) {
                        var r = t.parent;
                        if (r) {
                            var n = r.children;
                            n.splice(n.lastIndexOf(t), 0, e);
                        }
                        t.prev && (t.prev.next = e),
                            (e.parent = r),
                            (e.prev = t.prev),
                            (e.next = t),
                            (t.prev = e);
                    });
            },
            8043: (t, e, r) => {
                var n = r(4431).isTag;
                function o(t, e, r, n) {
                    for (
                        var i, s = [], a = 0, c = e.length;
                        a < c &&
                        !(t(e[a]) && (s.push(e[a]), --n <= 0)) &&
                        ((i = e[a].children),
                        !(
                            r &&
                            i &&
                            i.length > 0 &&
                            ((i = o(t, i, r, n)),
                            (s = s.concat(i)),
                            (n -= i.length) <= 0)
                        ));
                        a++
                    );
                    return s;
                }
                t.exports = {
                    filter: function (t, e, r, n) {
                        return (
                            Array.isArray(e) || (e = [e]),
                            ("number" == typeof n && isFinite(n)) ||
                                (n = 1 / 0),
                            o(t, e, !1 !== r, n)
                        );
                    },
                    find: o,
                    findOneChild: function (t, e) {
                        for (var r = 0, n = e.length; r < n; r++)
                            if (t(e[r])) return e[r];
                        return null;
                    },
                    findOne: function t(e, r) {
                        for (
                            var o = null, i = 0, s = r.length;
                            i < s && !o;
                            i++
                        )
                            n(r[i]) &&
                                (e(r[i])
                                    ? (o = r[i])
                                    : r[i].children.length > 0 &&
                                      (o = t(e, r[i].children)));
                        return o;
                    },
                    existsOne: function t(e, r) {
                        for (var o = 0, i = r.length; o < i; o++)
                            if (
                                n(r[o]) &&
                                (e(r[o]) ||
                                    (r[o].children.length > 0 &&
                                        t(e, r[o].children)))
                            )
                                return !0;
                        return !1;
                    },
                    findAll: function (t, e) {
                        for (var r = [], o = e.slice(); o.length; ) {
                            var i = o.shift();
                            n(i) &&
                                (i.children &&
                                    i.children.length > 0 &&
                                    o.unshift.apply(o, i.children),
                                t(i) && r.push(i));
                        }
                        return r;
                    },
                };
            },
            3346: (t, e, r) => {
                var n = r(4431),
                    o = r(6138),
                    i = n.isTag;
                t.exports = {
                    getInnerHTML: function (t, e) {
                        return t.children
                            ? t.children
                                  .map(function (t) {
                                      return o(t, e);
                                  })
                                  .join("")
                            : "";
                    },
                    getOuterHTML: o,
                    getText: function t(e) {
                        return Array.isArray(e)
                            ? e.map(t).join("")
                            : i(e)
                            ? "br" === e.name
                                ? "\n"
                                : t(e.children)
                            : e.type === n.CDATA
                            ? t(e.children)
                            : e.type === n.Text
                            ? e.data
                            : "";
                    },
                };
            },
            5010: (t, e) => {
                var r = (e.getChildren = function (t) {
                        return t.children;
                    }),
                    n = (e.getParent = function (t) {
                        return t.parent;
                    });
                (e.getSiblings = function (t) {
                    var e = n(t);
                    return e ? r(e) : [t];
                }),
                    (e.getAttributeValue = function (t, e) {
                        return t.attribs && t.attribs[e];
                    }),
                    (e.hasAttrib = function (t, e) {
                        return !!t.attribs && hasOwnProperty.call(t.attribs, e);
                    }),
                    (e.getName = function (t) {
                        return t.name;
                    });
            },
            6751: (t, e, r) => {
                var n = r(3689),
                    o = r(5615);
                t.exports = function (t) {
                    if ("string" != typeof t)
                        throw new TypeError("Expected a String");
                    return t.replace(/&(#?[^;\W]+;?)/g, function (t, e) {
                        var r;
                        if ((r = /^#(\d+);?$/.exec(e)))
                            return n.ucs2.encode([parseInt(r[1], 10)]);
                        if ((r = /^#[Xx]([A-Fa-f0-9]+);?/.exec(e)))
                            return n.ucs2.encode([parseInt(r[1], 16)]);
                        var i = /;$/.test(e),
                            s = i ? e.replace(/;$/, "") : e,
                            a = o[s] || (i && o[e]);
                        return "number" == typeof a
                            ? n.ucs2.encode([a])
                            : "string" == typeof a
                            ? a
                            : "&" + e;
                    });
                };
            },
            9151: (t, e, r) => {
                var n = r(3689),
                    o = r(8245);
                t.exports = function (t, e) {
                    if ("string" != typeof t)
                        throw new TypeError("Expected a String");
                    e || (e = {});
                    var r = !0;
                    e.named && (r = !1),
                        void 0 !== e.numeric && (r = e.numeric);
                    for (
                        var i = e.special || {
                                '"': !0,
                                "'": !0,
                                "<": !0,
                                ">": !0,
                                "&": !0,
                            },
                            s = n.ucs2.decode(t),
                            a = [],
                            c = 0;
                        c < s.length;
                        c++
                    ) {
                        var l = s[c],
                            u = n.ucs2.encode([l]),
                            p = o[l];
                        p && (l >= 127 || i[u]) && !r
                            ? a.push("&" + (/;$/.test(p) ? p : p + ";"))
                            : l < 32 || l >= 127 || i[u]
                            ? a.push("&#" + l + ";")
                            : a.push(u);
                    }
                    return a.join("");
                };
            },
            5615: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute;":"Á","Aacute":"Á","aacute;":"á","aacute":"á","Abreve;":"Ă","abreve;":"ă","ac;":"∾","acd;":"∿","acE;":"∾̳","Acirc;":"Â","Acirc":"Â","acirc;":"â","acirc":"â","acute;":"´","acute":"´","Acy;":"А","acy;":"а","AElig;":"Æ","AElig":"Æ","aelig;":"æ","aelig":"æ","af;":"⁡","Afr;":"𝔄","afr;":"𝔞","Agrave;":"À","Agrave":"À","agrave;":"à","agrave":"à","alefsym;":"ℵ","aleph;":"ℵ","Alpha;":"Α","alpha;":"α","Amacr;":"Ā","amacr;":"ā","amalg;":"⨿","AMP;":"&","AMP":"&","amp;":"&","amp":"&","And;":"⩓","and;":"∧","andand;":"⩕","andd;":"⩜","andslope;":"⩘","andv;":"⩚","ang;":"∠","ange;":"⦤","angle;":"∠","angmsd;":"∡","angmsdaa;":"⦨","angmsdab;":"⦩","angmsdac;":"⦪","angmsdad;":"⦫","angmsdae;":"⦬","angmsdaf;":"⦭","angmsdag;":"⦮","angmsdah;":"⦯","angrt;":"∟","angrtvb;":"⊾","angrtvbd;":"⦝","angsph;":"∢","angst;":"Å","angzarr;":"⍼","Aogon;":"Ą","aogon;":"ą","Aopf;":"𝔸","aopf;":"𝕒","ap;":"≈","apacir;":"⩯","apE;":"⩰","ape;":"≊","apid;":"≋","apos;":"\'","ApplyFunction;":"⁡","approx;":"≈","approxeq;":"≊","Aring;":"Å","Aring":"Å","aring;":"å","aring":"å","Ascr;":"𝒜","ascr;":"𝒶","Assign;":"≔","ast;":"*","asymp;":"≈","asympeq;":"≍","Atilde;":"Ã","Atilde":"Ã","atilde;":"ã","atilde":"ã","Auml;":"Ä","Auml":"Ä","auml;":"ä","auml":"ä","awconint;":"∳","awint;":"⨑","backcong;":"≌","backepsilon;":"϶","backprime;":"‵","backsim;":"∽","backsimeq;":"⋍","Backslash;":"∖","Barv;":"⫧","barvee;":"⊽","Barwed;":"⌆","barwed;":"⌅","barwedge;":"⌅","bbrk;":"⎵","bbrktbrk;":"⎶","bcong;":"≌","Bcy;":"Б","bcy;":"б","bdquo;":"„","becaus;":"∵","Because;":"∵","because;":"∵","bemptyv;":"⦰","bepsi;":"϶","bernou;":"ℬ","Bernoullis;":"ℬ","Beta;":"Β","beta;":"β","beth;":"ℶ","between;":"≬","Bfr;":"𝔅","bfr;":"𝔟","bigcap;":"⋂","bigcirc;":"◯","bigcup;":"⋃","bigodot;":"⨀","bigoplus;":"⨁","bigotimes;":"⨂","bigsqcup;":"⨆","bigstar;":"★","bigtriangledown;":"▽","bigtriangleup;":"△","biguplus;":"⨄","bigvee;":"⋁","bigwedge;":"⋀","bkarow;":"⤍","blacklozenge;":"⧫","blacksquare;":"▪","blacktriangle;":"▴","blacktriangledown;":"▾","blacktriangleleft;":"◂","blacktriangleright;":"▸","blank;":"␣","blk12;":"▒","blk14;":"░","blk34;":"▓","block;":"█","bne;":"=⃥","bnequiv;":"≡⃥","bNot;":"⫭","bnot;":"⌐","Bopf;":"𝔹","bopf;":"𝕓","bot;":"⊥","bottom;":"⊥","bowtie;":"⋈","boxbox;":"⧉","boxDL;":"╗","boxDl;":"╖","boxdL;":"╕","boxdl;":"┐","boxDR;":"╔","boxDr;":"╓","boxdR;":"╒","boxdr;":"┌","boxH;":"═","boxh;":"─","boxHD;":"╦","boxHd;":"╤","boxhD;":"╥","boxhd;":"┬","boxHU;":"╩","boxHu;":"╧","boxhU;":"╨","boxhu;":"┴","boxminus;":"⊟","boxplus;":"⊞","boxtimes;":"⊠","boxUL;":"╝","boxUl;":"╜","boxuL;":"╛","boxul;":"┘","boxUR;":"╚","boxUr;":"╙","boxuR;":"╘","boxur;":"└","boxV;":"║","boxv;":"│","boxVH;":"╬","boxVh;":"╫","boxvH;":"╪","boxvh;":"┼","boxVL;":"╣","boxVl;":"╢","boxvL;":"╡","boxvl;":"┤","boxVR;":"╠","boxVr;":"╟","boxvR;":"╞","boxvr;":"├","bprime;":"‵","Breve;":"˘","breve;":"˘","brvbar;":"¦","brvbar":"¦","Bscr;":"ℬ","bscr;":"𝒷","bsemi;":"⁏","bsim;":"∽","bsime;":"⋍","bsol;":"\\\\","bsolb;":"⧅","bsolhsub;":"⟈","bull;":"•","bullet;":"•","bump;":"≎","bumpE;":"⪮","bumpe;":"≏","Bumpeq;":"≎","bumpeq;":"≏","Cacute;":"Ć","cacute;":"ć","Cap;":"⋒","cap;":"∩","capand;":"⩄","capbrcup;":"⩉","capcap;":"⩋","capcup;":"⩇","capdot;":"⩀","CapitalDifferentialD;":"ⅅ","caps;":"∩︀","caret;":"⁁","caron;":"ˇ","Cayleys;":"ℭ","ccaps;":"⩍","Ccaron;":"Č","ccaron;":"č","Ccedil;":"Ç","Ccedil":"Ç","ccedil;":"ç","ccedil":"ç","Ccirc;":"Ĉ","ccirc;":"ĉ","Cconint;":"∰","ccups;":"⩌","ccupssm;":"⩐","Cdot;":"Ċ","cdot;":"ċ","cedil;":"¸","cedil":"¸","Cedilla;":"¸","cemptyv;":"⦲","cent;":"¢","cent":"¢","CenterDot;":"·","centerdot;":"·","Cfr;":"ℭ","cfr;":"𝔠","CHcy;":"Ч","chcy;":"ч","check;":"✓","checkmark;":"✓","Chi;":"Χ","chi;":"χ","cir;":"○","circ;":"ˆ","circeq;":"≗","circlearrowleft;":"↺","circlearrowright;":"↻","circledast;":"⊛","circledcirc;":"⊚","circleddash;":"⊝","CircleDot;":"⊙","circledR;":"®","circledS;":"Ⓢ","CircleMinus;":"⊖","CirclePlus;":"⊕","CircleTimes;":"⊗","cirE;":"⧃","cire;":"≗","cirfnint;":"⨐","cirmid;":"⫯","cirscir;":"⧂","ClockwiseContourIntegral;":"∲","CloseCurlyDoubleQuote;":"”","CloseCurlyQuote;":"’","clubs;":"♣","clubsuit;":"♣","Colon;":"∷","colon;":":","Colone;":"⩴","colone;":"≔","coloneq;":"≔","comma;":",","commat;":"@","comp;":"∁","compfn;":"∘","complement;":"∁","complexes;":"ℂ","cong;":"≅","congdot;":"⩭","Congruent;":"≡","Conint;":"∯","conint;":"∮","ContourIntegral;":"∮","Copf;":"ℂ","copf;":"𝕔","coprod;":"∐","Coproduct;":"∐","COPY;":"©","COPY":"©","copy;":"©","copy":"©","copysr;":"℗","CounterClockwiseContourIntegral;":"∳","crarr;":"↵","Cross;":"⨯","cross;":"✗","Cscr;":"𝒞","cscr;":"𝒸","csub;":"⫏","csube;":"⫑","csup;":"⫐","csupe;":"⫒","ctdot;":"⋯","cudarrl;":"⤸","cudarrr;":"⤵","cuepr;":"⋞","cuesc;":"⋟","cularr;":"↶","cularrp;":"⤽","Cup;":"⋓","cup;":"∪","cupbrcap;":"⩈","CupCap;":"≍","cupcap;":"⩆","cupcup;":"⩊","cupdot;":"⊍","cupor;":"⩅","cups;":"∪︀","curarr;":"↷","curarrm;":"⤼","curlyeqprec;":"⋞","curlyeqsucc;":"⋟","curlyvee;":"⋎","curlywedge;":"⋏","curren;":"¤","curren":"¤","curvearrowleft;":"↶","curvearrowright;":"↷","cuvee;":"⋎","cuwed;":"⋏","cwconint;":"∲","cwint;":"∱","cylcty;":"⌭","Dagger;":"‡","dagger;":"†","daleth;":"ℸ","Darr;":"↡","dArr;":"⇓","darr;":"↓","dash;":"‐","Dashv;":"⫤","dashv;":"⊣","dbkarow;":"⤏","dblac;":"˝","Dcaron;":"Ď","dcaron;":"ď","Dcy;":"Д","dcy;":"д","DD;":"ⅅ","dd;":"ⅆ","ddagger;":"‡","ddarr;":"⇊","DDotrahd;":"⤑","ddotseq;":"⩷","deg;":"°","deg":"°","Del;":"∇","Delta;":"Δ","delta;":"δ","demptyv;":"⦱","dfisht;":"⥿","Dfr;":"𝔇","dfr;":"𝔡","dHar;":"⥥","dharl;":"⇃","dharr;":"⇂","DiacriticalAcute;":"´","DiacriticalDot;":"˙","DiacriticalDoubleAcute;":"˝","DiacriticalGrave;":"`","DiacriticalTilde;":"˜","diam;":"⋄","Diamond;":"⋄","diamond;":"⋄","diamondsuit;":"♦","diams;":"♦","die;":"¨","DifferentialD;":"ⅆ","digamma;":"ϝ","disin;":"⋲","div;":"÷","divide;":"÷","divide":"÷","divideontimes;":"⋇","divonx;":"⋇","DJcy;":"Ђ","djcy;":"ђ","dlcorn;":"⌞","dlcrop;":"⌍","dollar;":"$","Dopf;":"𝔻","dopf;":"𝕕","Dot;":"¨","dot;":"˙","DotDot;":"⃜","doteq;":"≐","doteqdot;":"≑","DotEqual;":"≐","dotminus;":"∸","dotplus;":"∔","dotsquare;":"⊡","doublebarwedge;":"⌆","DoubleContourIntegral;":"∯","DoubleDot;":"¨","DoubleDownArrow;":"⇓","DoubleLeftArrow;":"⇐","DoubleLeftRightArrow;":"⇔","DoubleLeftTee;":"⫤","DoubleLongLeftArrow;":"⟸","DoubleLongLeftRightArrow;":"⟺","DoubleLongRightArrow;":"⟹","DoubleRightArrow;":"⇒","DoubleRightTee;":"⊨","DoubleUpArrow;":"⇑","DoubleUpDownArrow;":"⇕","DoubleVerticalBar;":"∥","DownArrow;":"↓","Downarrow;":"⇓","downarrow;":"↓","DownArrowBar;":"⤓","DownArrowUpArrow;":"⇵","DownBreve;":"̑","downdownarrows;":"⇊","downharpoonleft;":"⇃","downharpoonright;":"⇂","DownLeftRightVector;":"⥐","DownLeftTeeVector;":"⥞","DownLeftVector;":"↽","DownLeftVectorBar;":"⥖","DownRightTeeVector;":"⥟","DownRightVector;":"⇁","DownRightVectorBar;":"⥗","DownTee;":"⊤","DownTeeArrow;":"↧","drbkarow;":"⤐","drcorn;":"⌟","drcrop;":"⌌","Dscr;":"𝒟","dscr;":"𝒹","DScy;":"Ѕ","dscy;":"ѕ","dsol;":"⧶","Dstrok;":"Đ","dstrok;":"đ","dtdot;":"⋱","dtri;":"▿","dtrif;":"▾","duarr;":"⇵","duhar;":"⥯","dwangle;":"⦦","DZcy;":"Џ","dzcy;":"џ","dzigrarr;":"⟿","Eacute;":"É","Eacute":"É","eacute;":"é","eacute":"é","easter;":"⩮","Ecaron;":"Ě","ecaron;":"ě","ecir;":"≖","Ecirc;":"Ê","Ecirc":"Ê","ecirc;":"ê","ecirc":"ê","ecolon;":"≕","Ecy;":"Э","ecy;":"э","eDDot;":"⩷","Edot;":"Ė","eDot;":"≑","edot;":"ė","ee;":"ⅇ","efDot;":"≒","Efr;":"𝔈","efr;":"𝔢","eg;":"⪚","Egrave;":"È","Egrave":"È","egrave;":"è","egrave":"è","egs;":"⪖","egsdot;":"⪘","el;":"⪙","Element;":"∈","elinters;":"⏧","ell;":"ℓ","els;":"⪕","elsdot;":"⪗","Emacr;":"Ē","emacr;":"ē","empty;":"∅","emptyset;":"∅","EmptySmallSquare;":"◻","emptyv;":"∅","EmptyVerySmallSquare;":"▫","emsp;":" ","emsp13;":" ","emsp14;":" ","ENG;":"Ŋ","eng;":"ŋ","ensp;":" ","Eogon;":"Ę","eogon;":"ę","Eopf;":"𝔼","eopf;":"𝕖","epar;":"⋕","eparsl;":"⧣","eplus;":"⩱","epsi;":"ε","Epsilon;":"Ε","epsilon;":"ε","epsiv;":"ϵ","eqcirc;":"≖","eqcolon;":"≕","eqsim;":"≂","eqslantgtr;":"⪖","eqslantless;":"⪕","Equal;":"⩵","equals;":"=","EqualTilde;":"≂","equest;":"≟","Equilibrium;":"⇌","equiv;":"≡","equivDD;":"⩸","eqvparsl;":"⧥","erarr;":"⥱","erDot;":"≓","Escr;":"ℰ","escr;":"ℯ","esdot;":"≐","Esim;":"⩳","esim;":"≂","Eta;":"Η","eta;":"η","ETH;":"Ð","ETH":"Ð","eth;":"ð","eth":"ð","Euml;":"Ë","Euml":"Ë","euml;":"ë","euml":"ë","euro;":"€","excl;":"!","exist;":"∃","Exists;":"∃","expectation;":"ℰ","ExponentialE;":"ⅇ","exponentiale;":"ⅇ","fallingdotseq;":"≒","Fcy;":"Ф","fcy;":"ф","female;":"♀","ffilig;":"ﬃ","fflig;":"ﬀ","ffllig;":"ﬄ","Ffr;":"𝔉","ffr;":"𝔣","filig;":"ﬁ","FilledSmallSquare;":"◼","FilledVerySmallSquare;":"▪","fjlig;":"fj","flat;":"♭","fllig;":"ﬂ","fltns;":"▱","fnof;":"ƒ","Fopf;":"𝔽","fopf;":"𝕗","ForAll;":"∀","forall;":"∀","fork;":"⋔","forkv;":"⫙","Fouriertrf;":"ℱ","fpartint;":"⨍","frac12;":"½","frac12":"½","frac13;":"⅓","frac14;":"¼","frac14":"¼","frac15;":"⅕","frac16;":"⅙","frac18;":"⅛","frac23;":"⅔","frac25;":"⅖","frac34;":"¾","frac34":"¾","frac35;":"⅗","frac38;":"⅜","frac45;":"⅘","frac56;":"⅚","frac58;":"⅝","frac78;":"⅞","frasl;":"⁄","frown;":"⌢","Fscr;":"ℱ","fscr;":"𝒻","gacute;":"ǵ","Gamma;":"Γ","gamma;":"γ","Gammad;":"Ϝ","gammad;":"ϝ","gap;":"⪆","Gbreve;":"Ğ","gbreve;":"ğ","Gcedil;":"Ģ","Gcirc;":"Ĝ","gcirc;":"ĝ","Gcy;":"Г","gcy;":"г","Gdot;":"Ġ","gdot;":"ġ","gE;":"≧","ge;":"≥","gEl;":"⪌","gel;":"⋛","geq;":"≥","geqq;":"≧","geqslant;":"⩾","ges;":"⩾","gescc;":"⪩","gesdot;":"⪀","gesdoto;":"⪂","gesdotol;":"⪄","gesl;":"⋛︀","gesles;":"⪔","Gfr;":"𝔊","gfr;":"𝔤","Gg;":"⋙","gg;":"≫","ggg;":"⋙","gimel;":"ℷ","GJcy;":"Ѓ","gjcy;":"ѓ","gl;":"≷","gla;":"⪥","glE;":"⪒","glj;":"⪤","gnap;":"⪊","gnapprox;":"⪊","gnE;":"≩","gne;":"⪈","gneq;":"⪈","gneqq;":"≩","gnsim;":"⋧","Gopf;":"𝔾","gopf;":"𝕘","grave;":"`","GreaterEqual;":"≥","GreaterEqualLess;":"⋛","GreaterFullEqual;":"≧","GreaterGreater;":"⪢","GreaterLess;":"≷","GreaterSlantEqual;":"⩾","GreaterTilde;":"≳","Gscr;":"𝒢","gscr;":"ℊ","gsim;":"≳","gsime;":"⪎","gsiml;":"⪐","GT;":">","GT":">","Gt;":"≫","gt;":">","gt":">","gtcc;":"⪧","gtcir;":"⩺","gtdot;":"⋗","gtlPar;":"⦕","gtquest;":"⩼","gtrapprox;":"⪆","gtrarr;":"⥸","gtrdot;":"⋗","gtreqless;":"⋛","gtreqqless;":"⪌","gtrless;":"≷","gtrsim;":"≳","gvertneqq;":"≩︀","gvnE;":"≩︀","Hacek;":"ˇ","hairsp;":" ","half;":"½","hamilt;":"ℋ","HARDcy;":"Ъ","hardcy;":"ъ","hArr;":"⇔","harr;":"↔","harrcir;":"⥈","harrw;":"↭","Hat;":"^","hbar;":"ℏ","Hcirc;":"Ĥ","hcirc;":"ĥ","hearts;":"♥","heartsuit;":"♥","hellip;":"…","hercon;":"⊹","Hfr;":"ℌ","hfr;":"𝔥","HilbertSpace;":"ℋ","hksearow;":"⤥","hkswarow;":"⤦","hoarr;":"⇿","homtht;":"∻","hookleftarrow;":"↩","hookrightarrow;":"↪","Hopf;":"ℍ","hopf;":"𝕙","horbar;":"―","HorizontalLine;":"─","Hscr;":"ℋ","hscr;":"𝒽","hslash;":"ℏ","Hstrok;":"Ħ","hstrok;":"ħ","HumpDownHump;":"≎","HumpEqual;":"≏","hybull;":"⁃","hyphen;":"‐","Iacute;":"Í","Iacute":"Í","iacute;":"í","iacute":"í","ic;":"⁣","Icirc;":"Î","Icirc":"Î","icirc;":"î","icirc":"î","Icy;":"И","icy;":"и","Idot;":"İ","IEcy;":"Е","iecy;":"е","iexcl;":"¡","iexcl":"¡","iff;":"⇔","Ifr;":"ℑ","ifr;":"𝔦","Igrave;":"Ì","Igrave":"Ì","igrave;":"ì","igrave":"ì","ii;":"ⅈ","iiiint;":"⨌","iiint;":"∭","iinfin;":"⧜","iiota;":"℩","IJlig;":"Ĳ","ijlig;":"ĳ","Im;":"ℑ","Imacr;":"Ī","imacr;":"ī","image;":"ℑ","ImaginaryI;":"ⅈ","imagline;":"ℐ","imagpart;":"ℑ","imath;":"ı","imof;":"⊷","imped;":"Ƶ","Implies;":"⇒","in;":"∈","incare;":"℅","infin;":"∞","infintie;":"⧝","inodot;":"ı","Int;":"∬","int;":"∫","intcal;":"⊺","integers;":"ℤ","Integral;":"∫","intercal;":"⊺","Intersection;":"⋂","intlarhk;":"⨗","intprod;":"⨼","InvisibleComma;":"⁣","InvisibleTimes;":"⁢","IOcy;":"Ё","iocy;":"ё","Iogon;":"Į","iogon;":"į","Iopf;":"𝕀","iopf;":"𝕚","Iota;":"Ι","iota;":"ι","iprod;":"⨼","iquest;":"¿","iquest":"¿","Iscr;":"ℐ","iscr;":"𝒾","isin;":"∈","isindot;":"⋵","isinE;":"⋹","isins;":"⋴","isinsv;":"⋳","isinv;":"∈","it;":"⁢","Itilde;":"Ĩ","itilde;":"ĩ","Iukcy;":"І","iukcy;":"і","Iuml;":"Ï","Iuml":"Ï","iuml;":"ï","iuml":"ï","Jcirc;":"Ĵ","jcirc;":"ĵ","Jcy;":"Й","jcy;":"й","Jfr;":"𝔍","jfr;":"𝔧","jmath;":"ȷ","Jopf;":"𝕁","jopf;":"𝕛","Jscr;":"𝒥","jscr;":"𝒿","Jsercy;":"Ј","jsercy;":"ј","Jukcy;":"Є","jukcy;":"є","Kappa;":"Κ","kappa;":"κ","kappav;":"ϰ","Kcedil;":"Ķ","kcedil;":"ķ","Kcy;":"К","kcy;":"к","Kfr;":"𝔎","kfr;":"𝔨","kgreen;":"ĸ","KHcy;":"Х","khcy;":"х","KJcy;":"Ќ","kjcy;":"ќ","Kopf;":"𝕂","kopf;":"𝕜","Kscr;":"𝒦","kscr;":"𝓀","lAarr;":"⇚","Lacute;":"Ĺ","lacute;":"ĺ","laemptyv;":"⦴","lagran;":"ℒ","Lambda;":"Λ","lambda;":"λ","Lang;":"⟪","lang;":"⟨","langd;":"⦑","langle;":"⟨","lap;":"⪅","Laplacetrf;":"ℒ","laquo;":"«","laquo":"«","Larr;":"↞","lArr;":"⇐","larr;":"←","larrb;":"⇤","larrbfs;":"⤟","larrfs;":"⤝","larrhk;":"↩","larrlp;":"↫","larrpl;":"⤹","larrsim;":"⥳","larrtl;":"↢","lat;":"⪫","lAtail;":"⤛","latail;":"⤙","late;":"⪭","lates;":"⪭︀","lBarr;":"⤎","lbarr;":"⤌","lbbrk;":"❲","lbrace;":"{","lbrack;":"[","lbrke;":"⦋","lbrksld;":"⦏","lbrkslu;":"⦍","Lcaron;":"Ľ","lcaron;":"ľ","Lcedil;":"Ļ","lcedil;":"ļ","lceil;":"⌈","lcub;":"{","Lcy;":"Л","lcy;":"л","ldca;":"⤶","ldquo;":"“","ldquor;":"„","ldrdhar;":"⥧","ldrushar;":"⥋","ldsh;":"↲","lE;":"≦","le;":"≤","LeftAngleBracket;":"⟨","LeftArrow;":"←","Leftarrow;":"⇐","leftarrow;":"←","LeftArrowBar;":"⇤","LeftArrowRightArrow;":"⇆","leftarrowtail;":"↢","LeftCeiling;":"⌈","LeftDoubleBracket;":"⟦","LeftDownTeeVector;":"⥡","LeftDownVector;":"⇃","LeftDownVectorBar;":"⥙","LeftFloor;":"⌊","leftharpoondown;":"↽","leftharpoonup;":"↼","leftleftarrows;":"⇇","LeftRightArrow;":"↔","Leftrightarrow;":"⇔","leftrightarrow;":"↔","leftrightarrows;":"⇆","leftrightharpoons;":"⇋","leftrightsquigarrow;":"↭","LeftRightVector;":"⥎","LeftTee;":"⊣","LeftTeeArrow;":"↤","LeftTeeVector;":"⥚","leftthreetimes;":"⋋","LeftTriangle;":"⊲","LeftTriangleBar;":"⧏","LeftTriangleEqual;":"⊴","LeftUpDownVector;":"⥑","LeftUpTeeVector;":"⥠","LeftUpVector;":"↿","LeftUpVectorBar;":"⥘","LeftVector;":"↼","LeftVectorBar;":"⥒","lEg;":"⪋","leg;":"⋚","leq;":"≤","leqq;":"≦","leqslant;":"⩽","les;":"⩽","lescc;":"⪨","lesdot;":"⩿","lesdoto;":"⪁","lesdotor;":"⪃","lesg;":"⋚︀","lesges;":"⪓","lessapprox;":"⪅","lessdot;":"⋖","lesseqgtr;":"⋚","lesseqqgtr;":"⪋","LessEqualGreater;":"⋚","LessFullEqual;":"≦","LessGreater;":"≶","lessgtr;":"≶","LessLess;":"⪡","lesssim;":"≲","LessSlantEqual;":"⩽","LessTilde;":"≲","lfisht;":"⥼","lfloor;":"⌊","Lfr;":"𝔏","lfr;":"𝔩","lg;":"≶","lgE;":"⪑","lHar;":"⥢","lhard;":"↽","lharu;":"↼","lharul;":"⥪","lhblk;":"▄","LJcy;":"Љ","ljcy;":"љ","Ll;":"⋘","ll;":"≪","llarr;":"⇇","llcorner;":"⌞","Lleftarrow;":"⇚","llhard;":"⥫","lltri;":"◺","Lmidot;":"Ŀ","lmidot;":"ŀ","lmoust;":"⎰","lmoustache;":"⎰","lnap;":"⪉","lnapprox;":"⪉","lnE;":"≨","lne;":"⪇","lneq;":"⪇","lneqq;":"≨","lnsim;":"⋦","loang;":"⟬","loarr;":"⇽","lobrk;":"⟦","LongLeftArrow;":"⟵","Longleftarrow;":"⟸","longleftarrow;":"⟵","LongLeftRightArrow;":"⟷","Longleftrightarrow;":"⟺","longleftrightarrow;":"⟷","longmapsto;":"⟼","LongRightArrow;":"⟶","Longrightarrow;":"⟹","longrightarrow;":"⟶","looparrowleft;":"↫","looparrowright;":"↬","lopar;":"⦅","Lopf;":"𝕃","lopf;":"𝕝","loplus;":"⨭","lotimes;":"⨴","lowast;":"∗","lowbar;":"_","LowerLeftArrow;":"↙","LowerRightArrow;":"↘","loz;":"◊","lozenge;":"◊","lozf;":"⧫","lpar;":"(","lparlt;":"⦓","lrarr;":"⇆","lrcorner;":"⌟","lrhar;":"⇋","lrhard;":"⥭","lrm;":"‎","lrtri;":"⊿","lsaquo;":"‹","Lscr;":"ℒ","lscr;":"𝓁","Lsh;":"↰","lsh;":"↰","lsim;":"≲","lsime;":"⪍","lsimg;":"⪏","lsqb;":"[","lsquo;":"‘","lsquor;":"‚","Lstrok;":"Ł","lstrok;":"ł","LT;":"<","LT":"<","Lt;":"≪","lt;":"<","lt":"<","ltcc;":"⪦","ltcir;":"⩹","ltdot;":"⋖","lthree;":"⋋","ltimes;":"⋉","ltlarr;":"⥶","ltquest;":"⩻","ltri;":"◃","ltrie;":"⊴","ltrif;":"◂","ltrPar;":"⦖","lurdshar;":"⥊","luruhar;":"⥦","lvertneqq;":"≨︀","lvnE;":"≨︀","macr;":"¯","macr":"¯","male;":"♂","malt;":"✠","maltese;":"✠","Map;":"⤅","map;":"↦","mapsto;":"↦","mapstodown;":"↧","mapstoleft;":"↤","mapstoup;":"↥","marker;":"▮","mcomma;":"⨩","Mcy;":"М","mcy;":"м","mdash;":"—","mDDot;":"∺","measuredangle;":"∡","MediumSpace;":" ","Mellintrf;":"ℳ","Mfr;":"𝔐","mfr;":"𝔪","mho;":"℧","micro;":"µ","micro":"µ","mid;":"∣","midast;":"*","midcir;":"⫰","middot;":"·","middot":"·","minus;":"−","minusb;":"⊟","minusd;":"∸","minusdu;":"⨪","MinusPlus;":"∓","mlcp;":"⫛","mldr;":"…","mnplus;":"∓","models;":"⊧","Mopf;":"𝕄","mopf;":"𝕞","mp;":"∓","Mscr;":"ℳ","mscr;":"𝓂","mstpos;":"∾","Mu;":"Μ","mu;":"μ","multimap;":"⊸","mumap;":"⊸","nabla;":"∇","Nacute;":"Ń","nacute;":"ń","nang;":"∠⃒","nap;":"≉","napE;":"⩰̸","napid;":"≋̸","napos;":"ŉ","napprox;":"≉","natur;":"♮","natural;":"♮","naturals;":"ℕ","nbsp;":" ","nbsp":" ","nbump;":"≎̸","nbumpe;":"≏̸","ncap;":"⩃","Ncaron;":"Ň","ncaron;":"ň","Ncedil;":"Ņ","ncedil;":"ņ","ncong;":"≇","ncongdot;":"⩭̸","ncup;":"⩂","Ncy;":"Н","ncy;":"н","ndash;":"–","ne;":"≠","nearhk;":"⤤","neArr;":"⇗","nearr;":"↗","nearrow;":"↗","nedot;":"≐̸","NegativeMediumSpace;":"​","NegativeThickSpace;":"​","NegativeThinSpace;":"​","NegativeVeryThinSpace;":"​","nequiv;":"≢","nesear;":"⤨","nesim;":"≂̸","NestedGreaterGreater;":"≫","NestedLessLess;":"≪","NewLine;":"\\n","nexist;":"∄","nexists;":"∄","Nfr;":"𝔑","nfr;":"𝔫","ngE;":"≧̸","nge;":"≱","ngeq;":"≱","ngeqq;":"≧̸","ngeqslant;":"⩾̸","nges;":"⩾̸","nGg;":"⋙̸","ngsim;":"≵","nGt;":"≫⃒","ngt;":"≯","ngtr;":"≯","nGtv;":"≫̸","nhArr;":"⇎","nharr;":"↮","nhpar;":"⫲","ni;":"∋","nis;":"⋼","nisd;":"⋺","niv;":"∋","NJcy;":"Њ","njcy;":"њ","nlArr;":"⇍","nlarr;":"↚","nldr;":"‥","nlE;":"≦̸","nle;":"≰","nLeftarrow;":"⇍","nleftarrow;":"↚","nLeftrightarrow;":"⇎","nleftrightarrow;":"↮","nleq;":"≰","nleqq;":"≦̸","nleqslant;":"⩽̸","nles;":"⩽̸","nless;":"≮","nLl;":"⋘̸","nlsim;":"≴","nLt;":"≪⃒","nlt;":"≮","nltri;":"⋪","nltrie;":"⋬","nLtv;":"≪̸","nmid;":"∤","NoBreak;":"⁠","NonBreakingSpace;":" ","Nopf;":"ℕ","nopf;":"𝕟","Not;":"⫬","not;":"¬","not":"¬","NotCongruent;":"≢","NotCupCap;":"≭","NotDoubleVerticalBar;":"∦","NotElement;":"∉","NotEqual;":"≠","NotEqualTilde;":"≂̸","NotExists;":"∄","NotGreater;":"≯","NotGreaterEqual;":"≱","NotGreaterFullEqual;":"≧̸","NotGreaterGreater;":"≫̸","NotGreaterLess;":"≹","NotGreaterSlantEqual;":"⩾̸","NotGreaterTilde;":"≵","NotHumpDownHump;":"≎̸","NotHumpEqual;":"≏̸","notin;":"∉","notindot;":"⋵̸","notinE;":"⋹̸","notinva;":"∉","notinvb;":"⋷","notinvc;":"⋶","NotLeftTriangle;":"⋪","NotLeftTriangleBar;":"⧏̸","NotLeftTriangleEqual;":"⋬","NotLess;":"≮","NotLessEqual;":"≰","NotLessGreater;":"≸","NotLessLess;":"≪̸","NotLessSlantEqual;":"⩽̸","NotLessTilde;":"≴","NotNestedGreaterGreater;":"⪢̸","NotNestedLessLess;":"⪡̸","notni;":"∌","notniva;":"∌","notnivb;":"⋾","notnivc;":"⋽","NotPrecedes;":"⊀","NotPrecedesEqual;":"⪯̸","NotPrecedesSlantEqual;":"⋠","NotReverseElement;":"∌","NotRightTriangle;":"⋫","NotRightTriangleBar;":"⧐̸","NotRightTriangleEqual;":"⋭","NotSquareSubset;":"⊏̸","NotSquareSubsetEqual;":"⋢","NotSquareSuperset;":"⊐̸","NotSquareSupersetEqual;":"⋣","NotSubset;":"⊂⃒","NotSubsetEqual;":"⊈","NotSucceeds;":"⊁","NotSucceedsEqual;":"⪰̸","NotSucceedsSlantEqual;":"⋡","NotSucceedsTilde;":"≿̸","NotSuperset;":"⊃⃒","NotSupersetEqual;":"⊉","NotTilde;":"≁","NotTildeEqual;":"≄","NotTildeFullEqual;":"≇","NotTildeTilde;":"≉","NotVerticalBar;":"∤","npar;":"∦","nparallel;":"∦","nparsl;":"⫽⃥","npart;":"∂̸","npolint;":"⨔","npr;":"⊀","nprcue;":"⋠","npre;":"⪯̸","nprec;":"⊀","npreceq;":"⪯̸","nrArr;":"⇏","nrarr;":"↛","nrarrc;":"⤳̸","nrarrw;":"↝̸","nRightarrow;":"⇏","nrightarrow;":"↛","nrtri;":"⋫","nrtrie;":"⋭","nsc;":"⊁","nsccue;":"⋡","nsce;":"⪰̸","Nscr;":"𝒩","nscr;":"𝓃","nshortmid;":"∤","nshortparallel;":"∦","nsim;":"≁","nsime;":"≄","nsimeq;":"≄","nsmid;":"∤","nspar;":"∦","nsqsube;":"⋢","nsqsupe;":"⋣","nsub;":"⊄","nsubE;":"⫅̸","nsube;":"⊈","nsubset;":"⊂⃒","nsubseteq;":"⊈","nsubseteqq;":"⫅̸","nsucc;":"⊁","nsucceq;":"⪰̸","nsup;":"⊅","nsupE;":"⫆̸","nsupe;":"⊉","nsupset;":"⊃⃒","nsupseteq;":"⊉","nsupseteqq;":"⫆̸","ntgl;":"≹","Ntilde;":"Ñ","Ntilde":"Ñ","ntilde;":"ñ","ntilde":"ñ","ntlg;":"≸","ntriangleleft;":"⋪","ntrianglelefteq;":"⋬","ntriangleright;":"⋫","ntrianglerighteq;":"⋭","Nu;":"Ν","nu;":"ν","num;":"#","numero;":"№","numsp;":" ","nvap;":"≍⃒","nVDash;":"⊯","nVdash;":"⊮","nvDash;":"⊭","nvdash;":"⊬","nvge;":"≥⃒","nvgt;":">⃒","nvHarr;":"⤄","nvinfin;":"⧞","nvlArr;":"⤂","nvle;":"≤⃒","nvlt;":"<⃒","nvltrie;":"⊴⃒","nvrArr;":"⤃","nvrtrie;":"⊵⃒","nvsim;":"∼⃒","nwarhk;":"⤣","nwArr;":"⇖","nwarr;":"↖","nwarrow;":"↖","nwnear;":"⤧","Oacute;":"Ó","Oacute":"Ó","oacute;":"ó","oacute":"ó","oast;":"⊛","ocir;":"⊚","Ocirc;":"Ô","Ocirc":"Ô","ocirc;":"ô","ocirc":"ô","Ocy;":"О","ocy;":"о","odash;":"⊝","Odblac;":"Ő","odblac;":"ő","odiv;":"⨸","odot;":"⊙","odsold;":"⦼","OElig;":"Œ","oelig;":"œ","ofcir;":"⦿","Ofr;":"𝔒","ofr;":"𝔬","ogon;":"˛","Ograve;":"Ò","Ograve":"Ò","ograve;":"ò","ograve":"ò","ogt;":"⧁","ohbar;":"⦵","ohm;":"Ω","oint;":"∮","olarr;":"↺","olcir;":"⦾","olcross;":"⦻","oline;":"‾","olt;":"⧀","Omacr;":"Ō","omacr;":"ō","Omega;":"Ω","omega;":"ω","Omicron;":"Ο","omicron;":"ο","omid;":"⦶","ominus;":"⊖","Oopf;":"𝕆","oopf;":"𝕠","opar;":"⦷","OpenCurlyDoubleQuote;":"“","OpenCurlyQuote;":"‘","operp;":"⦹","oplus;":"⊕","Or;":"⩔","or;":"∨","orarr;":"↻","ord;":"⩝","order;":"ℴ","orderof;":"ℴ","ordf;":"ª","ordf":"ª","ordm;":"º","ordm":"º","origof;":"⊶","oror;":"⩖","orslope;":"⩗","orv;":"⩛","oS;":"Ⓢ","Oscr;":"𝒪","oscr;":"ℴ","Oslash;":"Ø","Oslash":"Ø","oslash;":"ø","oslash":"ø","osol;":"⊘","Otilde;":"Õ","Otilde":"Õ","otilde;":"õ","otilde":"õ","Otimes;":"⨷","otimes;":"⊗","otimesas;":"⨶","Ouml;":"Ö","Ouml":"Ö","ouml;":"ö","ouml":"ö","ovbar;":"⌽","OverBar;":"‾","OverBrace;":"⏞","OverBracket;":"⎴","OverParenthesis;":"⏜","par;":"∥","para;":"¶","para":"¶","parallel;":"∥","parsim;":"⫳","parsl;":"⫽","part;":"∂","PartialD;":"∂","Pcy;":"П","pcy;":"п","percnt;":"%","period;":".","permil;":"‰","perp;":"⊥","pertenk;":"‱","Pfr;":"𝔓","pfr;":"𝔭","Phi;":"Φ","phi;":"φ","phiv;":"ϕ","phmmat;":"ℳ","phone;":"☎","Pi;":"Π","pi;":"π","pitchfork;":"⋔","piv;":"ϖ","planck;":"ℏ","planckh;":"ℎ","plankv;":"ℏ","plus;":"+","plusacir;":"⨣","plusb;":"⊞","pluscir;":"⨢","plusdo;":"∔","plusdu;":"⨥","pluse;":"⩲","PlusMinus;":"±","plusmn;":"±","plusmn":"±","plussim;":"⨦","plustwo;":"⨧","pm;":"±","Poincareplane;":"ℌ","pointint;":"⨕","Popf;":"ℙ","popf;":"𝕡","pound;":"£","pound":"£","Pr;":"⪻","pr;":"≺","prap;":"⪷","prcue;":"≼","prE;":"⪳","pre;":"⪯","prec;":"≺","precapprox;":"⪷","preccurlyeq;":"≼","Precedes;":"≺","PrecedesEqual;":"⪯","PrecedesSlantEqual;":"≼","PrecedesTilde;":"≾","preceq;":"⪯","precnapprox;":"⪹","precneqq;":"⪵","precnsim;":"⋨","precsim;":"≾","Prime;":"″","prime;":"′","primes;":"ℙ","prnap;":"⪹","prnE;":"⪵","prnsim;":"⋨","prod;":"∏","Product;":"∏","profalar;":"⌮","profline;":"⌒","profsurf;":"⌓","prop;":"∝","Proportion;":"∷","Proportional;":"∝","propto;":"∝","prsim;":"≾","prurel;":"⊰","Pscr;":"𝒫","pscr;":"𝓅","Psi;":"Ψ","psi;":"ψ","puncsp;":" ","Qfr;":"𝔔","qfr;":"𝔮","qint;":"⨌","Qopf;":"ℚ","qopf;":"𝕢","qprime;":"⁗","Qscr;":"𝒬","qscr;":"𝓆","quaternions;":"ℍ","quatint;":"⨖","quest;":"?","questeq;":"≟","QUOT;":"\\"","QUOT":"\\"","quot;":"\\"","quot":"\\"","rAarr;":"⇛","race;":"∽̱","Racute;":"Ŕ","racute;":"ŕ","radic;":"√","raemptyv;":"⦳","Rang;":"⟫","rang;":"⟩","rangd;":"⦒","range;":"⦥","rangle;":"⟩","raquo;":"»","raquo":"»","Rarr;":"↠","rArr;":"⇒","rarr;":"→","rarrap;":"⥵","rarrb;":"⇥","rarrbfs;":"⤠","rarrc;":"⤳","rarrfs;":"⤞","rarrhk;":"↪","rarrlp;":"↬","rarrpl;":"⥅","rarrsim;":"⥴","Rarrtl;":"⤖","rarrtl;":"↣","rarrw;":"↝","rAtail;":"⤜","ratail;":"⤚","ratio;":"∶","rationals;":"ℚ","RBarr;":"⤐","rBarr;":"⤏","rbarr;":"⤍","rbbrk;":"❳","rbrace;":"}","rbrack;":"]","rbrke;":"⦌","rbrksld;":"⦎","rbrkslu;":"⦐","Rcaron;":"Ř","rcaron;":"ř","Rcedil;":"Ŗ","rcedil;":"ŗ","rceil;":"⌉","rcub;":"}","Rcy;":"Р","rcy;":"р","rdca;":"⤷","rdldhar;":"⥩","rdquo;":"”","rdquor;":"”","rdsh;":"↳","Re;":"ℜ","real;":"ℜ","realine;":"ℛ","realpart;":"ℜ","reals;":"ℝ","rect;":"▭","REG;":"®","REG":"®","reg;":"®","reg":"®","ReverseElement;":"∋","ReverseEquilibrium;":"⇋","ReverseUpEquilibrium;":"⥯","rfisht;":"⥽","rfloor;":"⌋","Rfr;":"ℜ","rfr;":"𝔯","rHar;":"⥤","rhard;":"⇁","rharu;":"⇀","rharul;":"⥬","Rho;":"Ρ","rho;":"ρ","rhov;":"ϱ","RightAngleBracket;":"⟩","RightArrow;":"→","Rightarrow;":"⇒","rightarrow;":"→","RightArrowBar;":"⇥","RightArrowLeftArrow;":"⇄","rightarrowtail;":"↣","RightCeiling;":"⌉","RightDoubleBracket;":"⟧","RightDownTeeVector;":"⥝","RightDownVector;":"⇂","RightDownVectorBar;":"⥕","RightFloor;":"⌋","rightharpoondown;":"⇁","rightharpoonup;":"⇀","rightleftarrows;":"⇄","rightleftharpoons;":"⇌","rightrightarrows;":"⇉","rightsquigarrow;":"↝","RightTee;":"⊢","RightTeeArrow;":"↦","RightTeeVector;":"⥛","rightthreetimes;":"⋌","RightTriangle;":"⊳","RightTriangleBar;":"⧐","RightTriangleEqual;":"⊵","RightUpDownVector;":"⥏","RightUpTeeVector;":"⥜","RightUpVector;":"↾","RightUpVectorBar;":"⥔","RightVector;":"⇀","RightVectorBar;":"⥓","ring;":"˚","risingdotseq;":"≓","rlarr;":"⇄","rlhar;":"⇌","rlm;":"‏","rmoust;":"⎱","rmoustache;":"⎱","rnmid;":"⫮","roang;":"⟭","roarr;":"⇾","robrk;":"⟧","ropar;":"⦆","Ropf;":"ℝ","ropf;":"𝕣","roplus;":"⨮","rotimes;":"⨵","RoundImplies;":"⥰","rpar;":")","rpargt;":"⦔","rppolint;":"⨒","rrarr;":"⇉","Rrightarrow;":"⇛","rsaquo;":"›","Rscr;":"ℛ","rscr;":"𝓇","Rsh;":"↱","rsh;":"↱","rsqb;":"]","rsquo;":"’","rsquor;":"’","rthree;":"⋌","rtimes;":"⋊","rtri;":"▹","rtrie;":"⊵","rtrif;":"▸","rtriltri;":"⧎","RuleDelayed;":"⧴","ruluhar;":"⥨","rx;":"℞","Sacute;":"Ś","sacute;":"ś","sbquo;":"‚","Sc;":"⪼","sc;":"≻","scap;":"⪸","Scaron;":"Š","scaron;":"š","sccue;":"≽","scE;":"⪴","sce;":"⪰","Scedil;":"Ş","scedil;":"ş","Scirc;":"Ŝ","scirc;":"ŝ","scnap;":"⪺","scnE;":"⪶","scnsim;":"⋩","scpolint;":"⨓","scsim;":"≿","Scy;":"С","scy;":"с","sdot;":"⋅","sdotb;":"⊡","sdote;":"⩦","searhk;":"⤥","seArr;":"⇘","searr;":"↘","searrow;":"↘","sect;":"§","sect":"§","semi;":";","seswar;":"⤩","setminus;":"∖","setmn;":"∖","sext;":"✶","Sfr;":"𝔖","sfr;":"𝔰","sfrown;":"⌢","sharp;":"♯","SHCHcy;":"Щ","shchcy;":"щ","SHcy;":"Ш","shcy;":"ш","ShortDownArrow;":"↓","ShortLeftArrow;":"←","shortmid;":"∣","shortparallel;":"∥","ShortRightArrow;":"→","ShortUpArrow;":"↑","shy;":"­","shy":"­","Sigma;":"Σ","sigma;":"σ","sigmaf;":"ς","sigmav;":"ς","sim;":"∼","simdot;":"⩪","sime;":"≃","simeq;":"≃","simg;":"⪞","simgE;":"⪠","siml;":"⪝","simlE;":"⪟","simne;":"≆","simplus;":"⨤","simrarr;":"⥲","slarr;":"←","SmallCircle;":"∘","smallsetminus;":"∖","smashp;":"⨳","smeparsl;":"⧤","smid;":"∣","smile;":"⌣","smt;":"⪪","smte;":"⪬","smtes;":"⪬︀","SOFTcy;":"Ь","softcy;":"ь","sol;":"/","solb;":"⧄","solbar;":"⌿","Sopf;":"𝕊","sopf;":"𝕤","spades;":"♠","spadesuit;":"♠","spar;":"∥","sqcap;":"⊓","sqcaps;":"⊓︀","sqcup;":"⊔","sqcups;":"⊔︀","Sqrt;":"√","sqsub;":"⊏","sqsube;":"⊑","sqsubset;":"⊏","sqsubseteq;":"⊑","sqsup;":"⊐","sqsupe;":"⊒","sqsupset;":"⊐","sqsupseteq;":"⊒","squ;":"□","Square;":"□","square;":"□","SquareIntersection;":"⊓","SquareSubset;":"⊏","SquareSubsetEqual;":"⊑","SquareSuperset;":"⊐","SquareSupersetEqual;":"⊒","SquareUnion;":"⊔","squarf;":"▪","squf;":"▪","srarr;":"→","Sscr;":"𝒮","sscr;":"𝓈","ssetmn;":"∖","ssmile;":"⌣","sstarf;":"⋆","Star;":"⋆","star;":"☆","starf;":"★","straightepsilon;":"ϵ","straightphi;":"ϕ","strns;":"¯","Sub;":"⋐","sub;":"⊂","subdot;":"⪽","subE;":"⫅","sube;":"⊆","subedot;":"⫃","submult;":"⫁","subnE;":"⫋","subne;":"⊊","subplus;":"⪿","subrarr;":"⥹","Subset;":"⋐","subset;":"⊂","subseteq;":"⊆","subseteqq;":"⫅","SubsetEqual;":"⊆","subsetneq;":"⊊","subsetneqq;":"⫋","subsim;":"⫇","subsub;":"⫕","subsup;":"⫓","succ;":"≻","succapprox;":"⪸","succcurlyeq;":"≽","Succeeds;":"≻","SucceedsEqual;":"⪰","SucceedsSlantEqual;":"≽","SucceedsTilde;":"≿","succeq;":"⪰","succnapprox;":"⪺","succneqq;":"⪶","succnsim;":"⋩","succsim;":"≿","SuchThat;":"∋","Sum;":"∑","sum;":"∑","sung;":"♪","Sup;":"⋑","sup;":"⊃","sup1;":"¹","sup1":"¹","sup2;":"²","sup2":"²","sup3;":"³","sup3":"³","supdot;":"⪾","supdsub;":"⫘","supE;":"⫆","supe;":"⊇","supedot;":"⫄","Superset;":"⊃","SupersetEqual;":"⊇","suphsol;":"⟉","suphsub;":"⫗","suplarr;":"⥻","supmult;":"⫂","supnE;":"⫌","supne;":"⊋","supplus;":"⫀","Supset;":"⋑","supset;":"⊃","supseteq;":"⊇","supseteqq;":"⫆","supsetneq;":"⊋","supsetneqq;":"⫌","supsim;":"⫈","supsub;":"⫔","supsup;":"⫖","swarhk;":"⤦","swArr;":"⇙","swarr;":"↙","swarrow;":"↙","swnwar;":"⤪","szlig;":"ß","szlig":"ß","Tab;":"\\t","target;":"⌖","Tau;":"Τ","tau;":"τ","tbrk;":"⎴","Tcaron;":"Ť","tcaron;":"ť","Tcedil;":"Ţ","tcedil;":"ţ","Tcy;":"Т","tcy;":"т","tdot;":"⃛","telrec;":"⌕","Tfr;":"𝔗","tfr;":"𝔱","there4;":"∴","Therefore;":"∴","therefore;":"∴","Theta;":"Θ","theta;":"θ","thetasym;":"ϑ","thetav;":"ϑ","thickapprox;":"≈","thicksim;":"∼","ThickSpace;":"  ","thinsp;":" ","ThinSpace;":" ","thkap;":"≈","thksim;":"∼","THORN;":"Þ","THORN":"Þ","thorn;":"þ","thorn":"þ","Tilde;":"∼","tilde;":"˜","TildeEqual;":"≃","TildeFullEqual;":"≅","TildeTilde;":"≈","times;":"×","times":"×","timesb;":"⊠","timesbar;":"⨱","timesd;":"⨰","tint;":"∭","toea;":"⤨","top;":"⊤","topbot;":"⌶","topcir;":"⫱","Topf;":"𝕋","topf;":"𝕥","topfork;":"⫚","tosa;":"⤩","tprime;":"‴","TRADE;":"™","trade;":"™","triangle;":"▵","triangledown;":"▿","triangleleft;":"◃","trianglelefteq;":"⊴","triangleq;":"≜","triangleright;":"▹","trianglerighteq;":"⊵","tridot;":"◬","trie;":"≜","triminus;":"⨺","TripleDot;":"⃛","triplus;":"⨹","trisb;":"⧍","tritime;":"⨻","trpezium;":"⏢","Tscr;":"𝒯","tscr;":"𝓉","TScy;":"Ц","tscy;":"ц","TSHcy;":"Ћ","tshcy;":"ћ","Tstrok;":"Ŧ","tstrok;":"ŧ","twixt;":"≬","twoheadleftarrow;":"↞","twoheadrightarrow;":"↠","Uacute;":"Ú","Uacute":"Ú","uacute;":"ú","uacute":"ú","Uarr;":"↟","uArr;":"⇑","uarr;":"↑","Uarrocir;":"⥉","Ubrcy;":"Ў","ubrcy;":"ў","Ubreve;":"Ŭ","ubreve;":"ŭ","Ucirc;":"Û","Ucirc":"Û","ucirc;":"û","ucirc":"û","Ucy;":"У","ucy;":"у","udarr;":"⇅","Udblac;":"Ű","udblac;":"ű","udhar;":"⥮","ufisht;":"⥾","Ufr;":"𝔘","ufr;":"𝔲","Ugrave;":"Ù","Ugrave":"Ù","ugrave;":"ù","ugrave":"ù","uHar;":"⥣","uharl;":"↿","uharr;":"↾","uhblk;":"▀","ulcorn;":"⌜","ulcorner;":"⌜","ulcrop;":"⌏","ultri;":"◸","Umacr;":"Ū","umacr;":"ū","uml;":"¨","uml":"¨","UnderBar;":"_","UnderBrace;":"⏟","UnderBracket;":"⎵","UnderParenthesis;":"⏝","Union;":"⋃","UnionPlus;":"⊎","Uogon;":"Ų","uogon;":"ų","Uopf;":"𝕌","uopf;":"𝕦","UpArrow;":"↑","Uparrow;":"⇑","uparrow;":"↑","UpArrowBar;":"⤒","UpArrowDownArrow;":"⇅","UpDownArrow;":"↕","Updownarrow;":"⇕","updownarrow;":"↕","UpEquilibrium;":"⥮","upharpoonleft;":"↿","upharpoonright;":"↾","uplus;":"⊎","UpperLeftArrow;":"↖","UpperRightArrow;":"↗","Upsi;":"ϒ","upsi;":"υ","upsih;":"ϒ","Upsilon;":"Υ","upsilon;":"υ","UpTee;":"⊥","UpTeeArrow;":"↥","upuparrows;":"⇈","urcorn;":"⌝","urcorner;":"⌝","urcrop;":"⌎","Uring;":"Ů","uring;":"ů","urtri;":"◹","Uscr;":"𝒰","uscr;":"𝓊","utdot;":"⋰","Utilde;":"Ũ","utilde;":"ũ","utri;":"▵","utrif;":"▴","uuarr;":"⇈","Uuml;":"Ü","Uuml":"Ü","uuml;":"ü","uuml":"ü","uwangle;":"⦧","vangrt;":"⦜","varepsilon;":"ϵ","varkappa;":"ϰ","varnothing;":"∅","varphi;":"ϕ","varpi;":"ϖ","varpropto;":"∝","vArr;":"⇕","varr;":"↕","varrho;":"ϱ","varsigma;":"ς","varsubsetneq;":"⊊︀","varsubsetneqq;":"⫋︀","varsupsetneq;":"⊋︀","varsupsetneqq;":"⫌︀","vartheta;":"ϑ","vartriangleleft;":"⊲","vartriangleright;":"⊳","Vbar;":"⫫","vBar;":"⫨","vBarv;":"⫩","Vcy;":"В","vcy;":"в","VDash;":"⊫","Vdash;":"⊩","vDash;":"⊨","vdash;":"⊢","Vdashl;":"⫦","Vee;":"⋁","vee;":"∨","veebar;":"⊻","veeeq;":"≚","vellip;":"⋮","Verbar;":"‖","verbar;":"|","Vert;":"‖","vert;":"|","VerticalBar;":"∣","VerticalLine;":"|","VerticalSeparator;":"❘","VerticalTilde;":"≀","VeryThinSpace;":" ","Vfr;":"𝔙","vfr;":"𝔳","vltri;":"⊲","vnsub;":"⊂⃒","vnsup;":"⊃⃒","Vopf;":"𝕍","vopf;":"𝕧","vprop;":"∝","vrtri;":"⊳","Vscr;":"𝒱","vscr;":"𝓋","vsubnE;":"⫋︀","vsubne;":"⊊︀","vsupnE;":"⫌︀","vsupne;":"⊋︀","Vvdash;":"⊪","vzigzag;":"⦚","Wcirc;":"Ŵ","wcirc;":"ŵ","wedbar;":"⩟","Wedge;":"⋀","wedge;":"∧","wedgeq;":"≙","weierp;":"℘","Wfr;":"𝔚","wfr;":"𝔴","Wopf;":"𝕎","wopf;":"𝕨","wp;":"℘","wr;":"≀","wreath;":"≀","Wscr;":"𝒲","wscr;":"𝓌","xcap;":"⋂","xcirc;":"◯","xcup;":"⋃","xdtri;":"▽","Xfr;":"𝔛","xfr;":"𝔵","xhArr;":"⟺","xharr;":"⟷","Xi;":"Ξ","xi;":"ξ","xlArr;":"⟸","xlarr;":"⟵","xmap;":"⟼","xnis;":"⋻","xodot;":"⨀","Xopf;":"𝕏","xopf;":"𝕩","xoplus;":"⨁","xotime;":"⨂","xrArr;":"⟹","xrarr;":"⟶","Xscr;":"𝒳","xscr;":"𝓍","xsqcup;":"⨆","xuplus;":"⨄","xutri;":"△","xvee;":"⋁","xwedge;":"⋀","Yacute;":"Ý","Yacute":"Ý","yacute;":"ý","yacute":"ý","YAcy;":"Я","yacy;":"я","Ycirc;":"Ŷ","ycirc;":"ŷ","Ycy;":"Ы","ycy;":"ы","yen;":"¥","yen":"¥","Yfr;":"𝔜","yfr;":"𝔶","YIcy;":"Ї","yicy;":"ї","Yopf;":"𝕐","yopf;":"𝕪","Yscr;":"𝒴","yscr;":"𝓎","YUcy;":"Ю","yucy;":"ю","Yuml;":"Ÿ","yuml;":"ÿ","yuml":"ÿ","Zacute;":"Ź","zacute;":"ź","Zcaron;":"Ž","zcaron;":"ž","Zcy;":"З","zcy;":"з","Zdot;":"Ż","zdot;":"ż","zeetrf;":"ℨ","ZeroWidthSpace;":"​","Zeta;":"Ζ","zeta;":"ζ","Zfr;":"ℨ","zfr;":"𝔷","ZHcy;":"Ж","zhcy;":"ж","zigrarr;":"⇝","Zopf;":"ℤ","zopf;":"𝕫","Zscr;":"𝒵","zscr;":"𝓏","zwj;":"‍","zwnj;":"‌"}',
                );
            },
            3498: (t, e, r) => {
                r(9151), (e.decode = r(6751));
            },
            8245: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"9":"Tab;","10":"NewLine;","33":"excl;","34":"quot;","35":"num;","36":"dollar;","37":"percnt;","38":"amp;","39":"apos;","40":"lpar;","41":"rpar;","42":"midast;","43":"plus;","44":"comma;","46":"period;","47":"sol;","58":"colon;","59":"semi;","60":"lt;","61":"equals;","62":"gt;","63":"quest;","64":"commat;","91":"lsqb;","92":"bsol;","93":"rsqb;","94":"Hat;","95":"UnderBar;","96":"grave;","123":"lcub;","124":"VerticalLine;","125":"rcub;","160":"NonBreakingSpace;","161":"iexcl;","162":"cent;","163":"pound;","164":"curren;","165":"yen;","166":"brvbar;","167":"sect;","168":"uml;","169":"copy;","170":"ordf;","171":"laquo;","172":"not;","173":"shy;","174":"reg;","175":"strns;","176":"deg;","177":"pm;","178":"sup2;","179":"sup3;","180":"DiacriticalAcute;","181":"micro;","182":"para;","183":"middot;","184":"Cedilla;","185":"sup1;","186":"ordm;","187":"raquo;","188":"frac14;","189":"half;","190":"frac34;","191":"iquest;","192":"Agrave;","193":"Aacute;","194":"Acirc;","195":"Atilde;","196":"Auml;","197":"Aring;","198":"AElig;","199":"Ccedil;","200":"Egrave;","201":"Eacute;","202":"Ecirc;","203":"Euml;","204":"Igrave;","205":"Iacute;","206":"Icirc;","207":"Iuml;","208":"ETH;","209":"Ntilde;","210":"Ograve;","211":"Oacute;","212":"Ocirc;","213":"Otilde;","214":"Ouml;","215":"times;","216":"Oslash;","217":"Ugrave;","218":"Uacute;","219":"Ucirc;","220":"Uuml;","221":"Yacute;","222":"THORN;","223":"szlig;","224":"agrave;","225":"aacute;","226":"acirc;","227":"atilde;","228":"auml;","229":"aring;","230":"aelig;","231":"ccedil;","232":"egrave;","233":"eacute;","234":"ecirc;","235":"euml;","236":"igrave;","237":"iacute;","238":"icirc;","239":"iuml;","240":"eth;","241":"ntilde;","242":"ograve;","243":"oacute;","244":"ocirc;","245":"otilde;","246":"ouml;","247":"divide;","248":"oslash;","249":"ugrave;","250":"uacute;","251":"ucirc;","252":"uuml;","253":"yacute;","254":"thorn;","255":"yuml;","256":"Amacr;","257":"amacr;","258":"Abreve;","259":"abreve;","260":"Aogon;","261":"aogon;","262":"Cacute;","263":"cacute;","264":"Ccirc;","265":"ccirc;","266":"Cdot;","267":"cdot;","268":"Ccaron;","269":"ccaron;","270":"Dcaron;","271":"dcaron;","272":"Dstrok;","273":"dstrok;","274":"Emacr;","275":"emacr;","278":"Edot;","279":"edot;","280":"Eogon;","281":"eogon;","282":"Ecaron;","283":"ecaron;","284":"Gcirc;","285":"gcirc;","286":"Gbreve;","287":"gbreve;","288":"Gdot;","289":"gdot;","290":"Gcedil;","292":"Hcirc;","293":"hcirc;","294":"Hstrok;","295":"hstrok;","296":"Itilde;","297":"itilde;","298":"Imacr;","299":"imacr;","302":"Iogon;","303":"iogon;","304":"Idot;","305":"inodot;","306":"IJlig;","307":"ijlig;","308":"Jcirc;","309":"jcirc;","310":"Kcedil;","311":"kcedil;","312":"kgreen;","313":"Lacute;","314":"lacute;","315":"Lcedil;","316":"lcedil;","317":"Lcaron;","318":"lcaron;","319":"Lmidot;","320":"lmidot;","321":"Lstrok;","322":"lstrok;","323":"Nacute;","324":"nacute;","325":"Ncedil;","326":"ncedil;","327":"Ncaron;","328":"ncaron;","329":"napos;","330":"ENG;","331":"eng;","332":"Omacr;","333":"omacr;","336":"Odblac;","337":"odblac;","338":"OElig;","339":"oelig;","340":"Racute;","341":"racute;","342":"Rcedil;","343":"rcedil;","344":"Rcaron;","345":"rcaron;","346":"Sacute;","347":"sacute;","348":"Scirc;","349":"scirc;","350":"Scedil;","351":"scedil;","352":"Scaron;","353":"scaron;","354":"Tcedil;","355":"tcedil;","356":"Tcaron;","357":"tcaron;","358":"Tstrok;","359":"tstrok;","360":"Utilde;","361":"utilde;","362":"Umacr;","363":"umacr;","364":"Ubreve;","365":"ubreve;","366":"Uring;","367":"uring;","368":"Udblac;","369":"udblac;","370":"Uogon;","371":"uogon;","372":"Wcirc;","373":"wcirc;","374":"Ycirc;","375":"ycirc;","376":"Yuml;","377":"Zacute;","378":"zacute;","379":"Zdot;","380":"zdot;","381":"Zcaron;","382":"zcaron;","402":"fnof;","437":"imped;","501":"gacute;","567":"jmath;","710":"circ;","711":"Hacek;","728":"breve;","729":"dot;","730":"ring;","731":"ogon;","732":"tilde;","733":"DiacriticalDoubleAcute;","785":"DownBreve;","913":"Alpha;","914":"Beta;","915":"Gamma;","916":"Delta;","917":"Epsilon;","918":"Zeta;","919":"Eta;","920":"Theta;","921":"Iota;","922":"Kappa;","923":"Lambda;","924":"Mu;","925":"Nu;","926":"Xi;","927":"Omicron;","928":"Pi;","929":"Rho;","931":"Sigma;","932":"Tau;","933":"Upsilon;","934":"Phi;","935":"Chi;","936":"Psi;","937":"Omega;","945":"alpha;","946":"beta;","947":"gamma;","948":"delta;","949":"epsilon;","950":"zeta;","951":"eta;","952":"theta;","953":"iota;","954":"kappa;","955":"lambda;","956":"mu;","957":"nu;","958":"xi;","959":"omicron;","960":"pi;","961":"rho;","962":"varsigma;","963":"sigma;","964":"tau;","965":"upsilon;","966":"phi;","967":"chi;","968":"psi;","969":"omega;","977":"vartheta;","978":"upsih;","981":"varphi;","982":"varpi;","988":"Gammad;","989":"gammad;","1008":"varkappa;","1009":"varrho;","1013":"varepsilon;","1014":"bepsi;","1025":"IOcy;","1026":"DJcy;","1027":"GJcy;","1028":"Jukcy;","1029":"DScy;","1030":"Iukcy;","1031":"YIcy;","1032":"Jsercy;","1033":"LJcy;","1034":"NJcy;","1035":"TSHcy;","1036":"KJcy;","1038":"Ubrcy;","1039":"DZcy;","1040":"Acy;","1041":"Bcy;","1042":"Vcy;","1043":"Gcy;","1044":"Dcy;","1045":"IEcy;","1046":"ZHcy;","1047":"Zcy;","1048":"Icy;","1049":"Jcy;","1050":"Kcy;","1051":"Lcy;","1052":"Mcy;","1053":"Ncy;","1054":"Ocy;","1055":"Pcy;","1056":"Rcy;","1057":"Scy;","1058":"Tcy;","1059":"Ucy;","1060":"Fcy;","1061":"KHcy;","1062":"TScy;","1063":"CHcy;","1064":"SHcy;","1065":"SHCHcy;","1066":"HARDcy;","1067":"Ycy;","1068":"SOFTcy;","1069":"Ecy;","1070":"YUcy;","1071":"YAcy;","1072":"acy;","1073":"bcy;","1074":"vcy;","1075":"gcy;","1076":"dcy;","1077":"iecy;","1078":"zhcy;","1079":"zcy;","1080":"icy;","1081":"jcy;","1082":"kcy;","1083":"lcy;","1084":"mcy;","1085":"ncy;","1086":"ocy;","1087":"pcy;","1088":"rcy;","1089":"scy;","1090":"tcy;","1091":"ucy;","1092":"fcy;","1093":"khcy;","1094":"tscy;","1095":"chcy;","1096":"shcy;","1097":"shchcy;","1098":"hardcy;","1099":"ycy;","1100":"softcy;","1101":"ecy;","1102":"yucy;","1103":"yacy;","1105":"iocy;","1106":"djcy;","1107":"gjcy;","1108":"jukcy;","1109":"dscy;","1110":"iukcy;","1111":"yicy;","1112":"jsercy;","1113":"ljcy;","1114":"njcy;","1115":"tshcy;","1116":"kjcy;","1118":"ubrcy;","1119":"dzcy;","8194":"ensp;","8195":"emsp;","8196":"emsp13;","8197":"emsp14;","8199":"numsp;","8200":"puncsp;","8201":"ThinSpace;","8202":"VeryThinSpace;","8203":"ZeroWidthSpace;","8204":"zwnj;","8205":"zwj;","8206":"lrm;","8207":"rlm;","8208":"hyphen;","8211":"ndash;","8212":"mdash;","8213":"horbar;","8214":"Vert;","8216":"OpenCurlyQuote;","8217":"rsquor;","8218":"sbquo;","8220":"OpenCurlyDoubleQuote;","8221":"rdquor;","8222":"ldquor;","8224":"dagger;","8225":"ddagger;","8226":"bullet;","8229":"nldr;","8230":"mldr;","8240":"permil;","8241":"pertenk;","8242":"prime;","8243":"Prime;","8244":"tprime;","8245":"bprime;","8249":"lsaquo;","8250":"rsaquo;","8254":"OverBar;","8257":"caret;","8259":"hybull;","8260":"frasl;","8271":"bsemi;","8279":"qprime;","8287":"MediumSpace;","8288":"NoBreak;","8289":"ApplyFunction;","8290":"it;","8291":"InvisibleComma;","8364":"euro;","8411":"TripleDot;","8412":"DotDot;","8450":"Copf;","8453":"incare;","8458":"gscr;","8459":"Hscr;","8460":"Poincareplane;","8461":"quaternions;","8462":"planckh;","8463":"plankv;","8464":"Iscr;","8465":"imagpart;","8466":"Lscr;","8467":"ell;","8469":"Nopf;","8470":"numero;","8471":"copysr;","8472":"wp;","8473":"primes;","8474":"rationals;","8475":"Rscr;","8476":"Rfr;","8477":"Ropf;","8478":"rx;","8482":"trade;","8484":"Zopf;","8487":"mho;","8488":"Zfr;","8489":"iiota;","8492":"Bscr;","8493":"Cfr;","8495":"escr;","8496":"expectation;","8497":"Fscr;","8499":"phmmat;","8500":"oscr;","8501":"aleph;","8502":"beth;","8503":"gimel;","8504":"daleth;","8517":"DD;","8518":"DifferentialD;","8519":"exponentiale;","8520":"ImaginaryI;","8531":"frac13;","8532":"frac23;","8533":"frac15;","8534":"frac25;","8535":"frac35;","8536":"frac45;","8537":"frac16;","8538":"frac56;","8539":"frac18;","8540":"frac38;","8541":"frac58;","8542":"frac78;","8592":"slarr;","8593":"uparrow;","8594":"srarr;","8595":"ShortDownArrow;","8596":"leftrightarrow;","8597":"varr;","8598":"UpperLeftArrow;","8599":"UpperRightArrow;","8600":"searrow;","8601":"swarrow;","8602":"nleftarrow;","8603":"nrightarrow;","8605":"rightsquigarrow;","8606":"twoheadleftarrow;","8607":"Uarr;","8608":"twoheadrightarrow;","8609":"Darr;","8610":"leftarrowtail;","8611":"rightarrowtail;","8612":"mapstoleft;","8613":"UpTeeArrow;","8614":"RightTeeArrow;","8615":"mapstodown;","8617":"larrhk;","8618":"rarrhk;","8619":"looparrowleft;","8620":"rarrlp;","8621":"leftrightsquigarrow;","8622":"nleftrightarrow;","8624":"lsh;","8625":"rsh;","8626":"ldsh;","8627":"rdsh;","8629":"crarr;","8630":"curvearrowleft;","8631":"curvearrowright;","8634":"olarr;","8635":"orarr;","8636":"lharu;","8637":"lhard;","8638":"upharpoonright;","8639":"upharpoonleft;","8640":"RightVector;","8641":"rightharpoondown;","8642":"RightDownVector;","8643":"LeftDownVector;","8644":"rlarr;","8645":"UpArrowDownArrow;","8646":"lrarr;","8647":"llarr;","8648":"uuarr;","8649":"rrarr;","8650":"downdownarrows;","8651":"ReverseEquilibrium;","8652":"rlhar;","8653":"nLeftarrow;","8654":"nLeftrightarrow;","8655":"nRightarrow;","8656":"Leftarrow;","8657":"Uparrow;","8658":"Rightarrow;","8659":"Downarrow;","8660":"Leftrightarrow;","8661":"vArr;","8662":"nwArr;","8663":"neArr;","8664":"seArr;","8665":"swArr;","8666":"Lleftarrow;","8667":"Rrightarrow;","8669":"zigrarr;","8676":"LeftArrowBar;","8677":"RightArrowBar;","8693":"duarr;","8701":"loarr;","8702":"roarr;","8703":"hoarr;","8704":"forall;","8705":"complement;","8706":"PartialD;","8707":"Exists;","8708":"NotExists;","8709":"varnothing;","8711":"nabla;","8712":"isinv;","8713":"notinva;","8715":"SuchThat;","8716":"NotReverseElement;","8719":"Product;","8720":"Coproduct;","8721":"sum;","8722":"minus;","8723":"mp;","8724":"plusdo;","8726":"ssetmn;","8727":"lowast;","8728":"SmallCircle;","8730":"Sqrt;","8733":"vprop;","8734":"infin;","8735":"angrt;","8736":"angle;","8737":"measuredangle;","8738":"angsph;","8739":"VerticalBar;","8740":"nsmid;","8741":"spar;","8742":"nspar;","8743":"wedge;","8744":"vee;","8745":"cap;","8746":"cup;","8747":"Integral;","8748":"Int;","8749":"tint;","8750":"oint;","8751":"DoubleContourIntegral;","8752":"Cconint;","8753":"cwint;","8754":"cwconint;","8755":"CounterClockwiseContourIntegral;","8756":"therefore;","8757":"because;","8758":"ratio;","8759":"Proportion;","8760":"minusd;","8762":"mDDot;","8763":"homtht;","8764":"Tilde;","8765":"bsim;","8766":"mstpos;","8767":"acd;","8768":"wreath;","8769":"nsim;","8770":"esim;","8771":"TildeEqual;","8772":"nsimeq;","8773":"TildeFullEqual;","8774":"simne;","8775":"NotTildeFullEqual;","8776":"TildeTilde;","8777":"NotTildeTilde;","8778":"approxeq;","8779":"apid;","8780":"bcong;","8781":"CupCap;","8782":"HumpDownHump;","8783":"HumpEqual;","8784":"esdot;","8785":"eDot;","8786":"fallingdotseq;","8787":"risingdotseq;","8788":"coloneq;","8789":"eqcolon;","8790":"eqcirc;","8791":"cire;","8793":"wedgeq;","8794":"veeeq;","8796":"trie;","8799":"questeq;","8800":"NotEqual;","8801":"equiv;","8802":"NotCongruent;","8804":"leq;","8805":"GreaterEqual;","8806":"LessFullEqual;","8807":"GreaterFullEqual;","8808":"lneqq;","8809":"gneqq;","8810":"NestedLessLess;","8811":"NestedGreaterGreater;","8812":"twixt;","8813":"NotCupCap;","8814":"NotLess;","8815":"NotGreater;","8816":"NotLessEqual;","8817":"NotGreaterEqual;","8818":"lsim;","8819":"gtrsim;","8820":"NotLessTilde;","8821":"NotGreaterTilde;","8822":"lg;","8823":"gtrless;","8824":"ntlg;","8825":"ntgl;","8826":"Precedes;","8827":"Succeeds;","8828":"PrecedesSlantEqual;","8829":"SucceedsSlantEqual;","8830":"prsim;","8831":"succsim;","8832":"nprec;","8833":"nsucc;","8834":"subset;","8835":"supset;","8836":"nsub;","8837":"nsup;","8838":"SubsetEqual;","8839":"supseteq;","8840":"nsubseteq;","8841":"nsupseteq;","8842":"subsetneq;","8843":"supsetneq;","8845":"cupdot;","8846":"uplus;","8847":"SquareSubset;","8848":"SquareSuperset;","8849":"SquareSubsetEqual;","8850":"SquareSupersetEqual;","8851":"SquareIntersection;","8852":"SquareUnion;","8853":"oplus;","8854":"ominus;","8855":"otimes;","8856":"osol;","8857":"odot;","8858":"ocir;","8859":"oast;","8861":"odash;","8862":"plusb;","8863":"minusb;","8864":"timesb;","8865":"sdotb;","8866":"vdash;","8867":"LeftTee;","8868":"top;","8869":"UpTee;","8871":"models;","8872":"vDash;","8873":"Vdash;","8874":"Vvdash;","8875":"VDash;","8876":"nvdash;","8877":"nvDash;","8878":"nVdash;","8879":"nVDash;","8880":"prurel;","8882":"vltri;","8883":"vrtri;","8884":"trianglelefteq;","8885":"trianglerighteq;","8886":"origof;","8887":"imof;","8888":"mumap;","8889":"hercon;","8890":"intercal;","8891":"veebar;","8893":"barvee;","8894":"angrtvb;","8895":"lrtri;","8896":"xwedge;","8897":"xvee;","8898":"xcap;","8899":"xcup;","8900":"diamond;","8901":"sdot;","8902":"Star;","8903":"divonx;","8904":"bowtie;","8905":"ltimes;","8906":"rtimes;","8907":"lthree;","8908":"rthree;","8909":"bsime;","8910":"cuvee;","8911":"cuwed;","8912":"Subset;","8913":"Supset;","8914":"Cap;","8915":"Cup;","8916":"pitchfork;","8917":"epar;","8918":"ltdot;","8919":"gtrdot;","8920":"Ll;","8921":"ggg;","8922":"LessEqualGreater;","8923":"gtreqless;","8926":"curlyeqprec;","8927":"curlyeqsucc;","8928":"nprcue;","8929":"nsccue;","8930":"nsqsube;","8931":"nsqsupe;","8934":"lnsim;","8935":"gnsim;","8936":"prnsim;","8937":"succnsim;","8938":"ntriangleleft;","8939":"ntriangleright;","8940":"ntrianglelefteq;","8941":"ntrianglerighteq;","8942":"vellip;","8943":"ctdot;","8944":"utdot;","8945":"dtdot;","8946":"disin;","8947":"isinsv;","8948":"isins;","8949":"isindot;","8950":"notinvc;","8951":"notinvb;","8953":"isinE;","8954":"nisd;","8955":"xnis;","8956":"nis;","8957":"notnivc;","8958":"notnivb;","8965":"barwedge;","8966":"doublebarwedge;","8968":"LeftCeiling;","8969":"RightCeiling;","8970":"lfloor;","8971":"RightFloor;","8972":"drcrop;","8973":"dlcrop;","8974":"urcrop;","8975":"ulcrop;","8976":"bnot;","8978":"profline;","8979":"profsurf;","8981":"telrec;","8982":"target;","8988":"ulcorner;","8989":"urcorner;","8990":"llcorner;","8991":"lrcorner;","8994":"sfrown;","8995":"ssmile;","9005":"cylcty;","9006":"profalar;","9014":"topbot;","9021":"ovbar;","9023":"solbar;","9084":"angzarr;","9136":"lmoustache;","9137":"rmoustache;","9140":"tbrk;","9141":"UnderBracket;","9142":"bbrktbrk;","9180":"OverParenthesis;","9181":"UnderParenthesis;","9182":"OverBrace;","9183":"UnderBrace;","9186":"trpezium;","9191":"elinters;","9251":"blank;","9416":"oS;","9472":"HorizontalLine;","9474":"boxv;","9484":"boxdr;","9488":"boxdl;","9492":"boxur;","9496":"boxul;","9500":"boxvr;","9508":"boxvl;","9516":"boxhd;","9524":"boxhu;","9532":"boxvh;","9552":"boxH;","9553":"boxV;","9554":"boxdR;","9555":"boxDr;","9556":"boxDR;","9557":"boxdL;","9558":"boxDl;","9559":"boxDL;","9560":"boxuR;","9561":"boxUr;","9562":"boxUR;","9563":"boxuL;","9564":"boxUl;","9565":"boxUL;","9566":"boxvR;","9567":"boxVr;","9568":"boxVR;","9569":"boxvL;","9570":"boxVl;","9571":"boxVL;","9572":"boxHd;","9573":"boxhD;","9574":"boxHD;","9575":"boxHu;","9576":"boxhU;","9577":"boxHU;","9578":"boxvH;","9579":"boxVh;","9580":"boxVH;","9600":"uhblk;","9604":"lhblk;","9608":"block;","9617":"blk14;","9618":"blk12;","9619":"blk34;","9633":"square;","9642":"squf;","9643":"EmptyVerySmallSquare;","9645":"rect;","9646":"marker;","9649":"fltns;","9651":"xutri;","9652":"utrif;","9653":"utri;","9656":"rtrif;","9657":"triangleright;","9661":"xdtri;","9662":"dtrif;","9663":"triangledown;","9666":"ltrif;","9667":"triangleleft;","9674":"lozenge;","9675":"cir;","9708":"tridot;","9711":"xcirc;","9720":"ultri;","9721":"urtri;","9722":"lltri;","9723":"EmptySmallSquare;","9724":"FilledSmallSquare;","9733":"starf;","9734":"star;","9742":"phone;","9792":"female;","9794":"male;","9824":"spadesuit;","9827":"clubsuit;","9829":"heartsuit;","9830":"diams;","9834":"sung;","9837":"flat;","9838":"natural;","9839":"sharp;","10003":"checkmark;","10007":"cross;","10016":"maltese;","10038":"sext;","10072":"VerticalSeparator;","10098":"lbbrk;","10099":"rbbrk;","10184":"bsolhsub;","10185":"suphsol;","10214":"lobrk;","10215":"robrk;","10216":"LeftAngleBracket;","10217":"RightAngleBracket;","10218":"Lang;","10219":"Rang;","10220":"loang;","10221":"roang;","10229":"xlarr;","10230":"xrarr;","10231":"xharr;","10232":"xlArr;","10233":"xrArr;","10234":"xhArr;","10236":"xmap;","10239":"dzigrarr;","10498":"nvlArr;","10499":"nvrArr;","10500":"nvHarr;","10501":"Map;","10508":"lbarr;","10509":"rbarr;","10510":"lBarr;","10511":"rBarr;","10512":"RBarr;","10513":"DDotrahd;","10514":"UpArrowBar;","10515":"DownArrowBar;","10518":"Rarrtl;","10521":"latail;","10522":"ratail;","10523":"lAtail;","10524":"rAtail;","10525":"larrfs;","10526":"rarrfs;","10527":"larrbfs;","10528":"rarrbfs;","10531":"nwarhk;","10532":"nearhk;","10533":"searhk;","10534":"swarhk;","10535":"nwnear;","10536":"toea;","10537":"tosa;","10538":"swnwar;","10547":"rarrc;","10549":"cudarrr;","10550":"ldca;","10551":"rdca;","10552":"cudarrl;","10553":"larrpl;","10556":"curarrm;","10557":"cularrp;","10565":"rarrpl;","10568":"harrcir;","10569":"Uarrocir;","10570":"lurdshar;","10571":"ldrushar;","10574":"LeftRightVector;","10575":"RightUpDownVector;","10576":"DownLeftRightVector;","10577":"LeftUpDownVector;","10578":"LeftVectorBar;","10579":"RightVectorBar;","10580":"RightUpVectorBar;","10581":"RightDownVectorBar;","10582":"DownLeftVectorBar;","10583":"DownRightVectorBar;","10584":"LeftUpVectorBar;","10585":"LeftDownVectorBar;","10586":"LeftTeeVector;","10587":"RightTeeVector;","10588":"RightUpTeeVector;","10589":"RightDownTeeVector;","10590":"DownLeftTeeVector;","10591":"DownRightTeeVector;","10592":"LeftUpTeeVector;","10593":"LeftDownTeeVector;","10594":"lHar;","10595":"uHar;","10596":"rHar;","10597":"dHar;","10598":"luruhar;","10599":"ldrdhar;","10600":"ruluhar;","10601":"rdldhar;","10602":"lharul;","10603":"llhard;","10604":"rharul;","10605":"lrhard;","10606":"UpEquilibrium;","10607":"ReverseUpEquilibrium;","10608":"RoundImplies;","10609":"erarr;","10610":"simrarr;","10611":"larrsim;","10612":"rarrsim;","10613":"rarrap;","10614":"ltlarr;","10616":"gtrarr;","10617":"subrarr;","10619":"suplarr;","10620":"lfisht;","10621":"rfisht;","10622":"ufisht;","10623":"dfisht;","10629":"lopar;","10630":"ropar;","10635":"lbrke;","10636":"rbrke;","10637":"lbrkslu;","10638":"rbrksld;","10639":"lbrksld;","10640":"rbrkslu;","10641":"langd;","10642":"rangd;","10643":"lparlt;","10644":"rpargt;","10645":"gtlPar;","10646":"ltrPar;","10650":"vzigzag;","10652":"vangrt;","10653":"angrtvbd;","10660":"ange;","10661":"range;","10662":"dwangle;","10663":"uwangle;","10664":"angmsdaa;","10665":"angmsdab;","10666":"angmsdac;","10667":"angmsdad;","10668":"angmsdae;","10669":"angmsdaf;","10670":"angmsdag;","10671":"angmsdah;","10672":"bemptyv;","10673":"demptyv;","10674":"cemptyv;","10675":"raemptyv;","10676":"laemptyv;","10677":"ohbar;","10678":"omid;","10679":"opar;","10681":"operp;","10683":"olcross;","10684":"odsold;","10686":"olcir;","10687":"ofcir;","10688":"olt;","10689":"ogt;","10690":"cirscir;","10691":"cirE;","10692":"solb;","10693":"bsolb;","10697":"boxbox;","10701":"trisb;","10702":"rtriltri;","10703":"LeftTriangleBar;","10704":"RightTriangleBar;","10716":"iinfin;","10717":"infintie;","10718":"nvinfin;","10723":"eparsl;","10724":"smeparsl;","10725":"eqvparsl;","10731":"lozf;","10740":"RuleDelayed;","10742":"dsol;","10752":"xodot;","10753":"xoplus;","10754":"xotime;","10756":"xuplus;","10758":"xsqcup;","10764":"qint;","10765":"fpartint;","10768":"cirfnint;","10769":"awint;","10770":"rppolint;","10771":"scpolint;","10772":"npolint;","10773":"pointint;","10774":"quatint;","10775":"intlarhk;","10786":"pluscir;","10787":"plusacir;","10788":"simplus;","10789":"plusdu;","10790":"plussim;","10791":"plustwo;","10793":"mcomma;","10794":"minusdu;","10797":"loplus;","10798":"roplus;","10799":"Cross;","10800":"timesd;","10801":"timesbar;","10803":"smashp;","10804":"lotimes;","10805":"rotimes;","10806":"otimesas;","10807":"Otimes;","10808":"odiv;","10809":"triplus;","10810":"triminus;","10811":"tritime;","10812":"iprod;","10815":"amalg;","10816":"capdot;","10818":"ncup;","10819":"ncap;","10820":"capand;","10821":"cupor;","10822":"cupcap;","10823":"capcup;","10824":"cupbrcap;","10825":"capbrcup;","10826":"cupcup;","10827":"capcap;","10828":"ccups;","10829":"ccaps;","10832":"ccupssm;","10835":"And;","10836":"Or;","10837":"andand;","10838":"oror;","10839":"orslope;","10840":"andslope;","10842":"andv;","10843":"orv;","10844":"andd;","10845":"ord;","10847":"wedbar;","10854":"sdote;","10858":"simdot;","10861":"congdot;","10862":"easter;","10863":"apacir;","10864":"apE;","10865":"eplus;","10866":"pluse;","10867":"Esim;","10868":"Colone;","10869":"Equal;","10871":"eDDot;","10872":"equivDD;","10873":"ltcir;","10874":"gtcir;","10875":"ltquest;","10876":"gtquest;","10877":"LessSlantEqual;","10878":"GreaterSlantEqual;","10879":"lesdot;","10880":"gesdot;","10881":"lesdoto;","10882":"gesdoto;","10883":"lesdotor;","10884":"gesdotol;","10885":"lessapprox;","10886":"gtrapprox;","10887":"lneq;","10888":"gneq;","10889":"lnapprox;","10890":"gnapprox;","10891":"lesseqqgtr;","10892":"gtreqqless;","10893":"lsime;","10894":"gsime;","10895":"lsimg;","10896":"gsiml;","10897":"lgE;","10898":"glE;","10899":"lesges;","10900":"gesles;","10901":"eqslantless;","10902":"eqslantgtr;","10903":"elsdot;","10904":"egsdot;","10905":"el;","10906":"eg;","10909":"siml;","10910":"simg;","10911":"simlE;","10912":"simgE;","10913":"LessLess;","10914":"GreaterGreater;","10916":"glj;","10917":"gla;","10918":"ltcc;","10919":"gtcc;","10920":"lescc;","10921":"gescc;","10922":"smt;","10923":"lat;","10924":"smte;","10925":"late;","10926":"bumpE;","10927":"preceq;","10928":"succeq;","10931":"prE;","10932":"scE;","10933":"prnE;","10934":"succneqq;","10935":"precapprox;","10936":"succapprox;","10937":"prnap;","10938":"succnapprox;","10939":"Pr;","10940":"Sc;","10941":"subdot;","10942":"supdot;","10943":"subplus;","10944":"supplus;","10945":"submult;","10946":"supmult;","10947":"subedot;","10948":"supedot;","10949":"subseteqq;","10950":"supseteqq;","10951":"subsim;","10952":"supsim;","10955":"subsetneqq;","10956":"supsetneqq;","10959":"csub;","10960":"csup;","10961":"csube;","10962":"csupe;","10963":"subsup;","10964":"supsub;","10965":"subsub;","10966":"supsup;","10967":"suphsub;","10968":"supdsub;","10969":"forkv;","10970":"topfork;","10971":"mlcp;","10980":"DoubleLeftTee;","10982":"Vdashl;","10983":"Barv;","10984":"vBar;","10985":"vBarv;","10987":"Vbar;","10988":"Not;","10989":"bNot;","10990":"rnmid;","10991":"cirmid;","10992":"midcir;","10993":"topcir;","10994":"nhpar;","10995":"parsim;","11005":"parsl;","64256":"fflig;","64257":"filig;","64258":"fllig;","64259":"ffilig;","64260":"ffllig;"}',
                );
            },
            26: (t, e, r) => {
                var n = r(2549);
                t.exports = function (t) {
                    if ((t >= 55296 && t <= 57343) || t > 1114111) return "�";
                    t in n && (t = n[t]);
                    var e = "";
                    return (
                        t > 65535 &&
                            ((t -= 65536),
                            (e += String.fromCharCode(
                                ((t >>> 10) & 1023) | 55296,
                            )),
                            (t = 56320 | (1023 & t))),
                        e + String.fromCharCode(t)
                    );
                };
            },
            2549: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}',
                );
            },
            752: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}',
                );
            },
            5076: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}',
                );
            },
            1083: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}',
                );
            },
            7187: (t) => {
                "use strict";
                var e,
                    r = "object" == typeof Reflect ? Reflect : null,
                    n =
                        r && "function" == typeof r.apply
                            ? r.apply
                            : function (t, e, r) {
                                  return Function.prototype.apply.call(t, e, r);
                              };
                e =
                    r && "function" == typeof r.ownKeys
                        ? r.ownKeys
                        : Object.getOwnPropertySymbols
                        ? function (t) {
                              return Object.getOwnPropertyNames(t).concat(
                                  Object.getOwnPropertySymbols(t),
                              );
                          }
                        : function (t) {
                              return Object.getOwnPropertyNames(t);
                          };
                var o =
                    Number.isNaN ||
                    function (t) {
                        return t != t;
                    };
                function i() {
                    i.init.call(this);
                }
                (t.exports = i),
                    (t.exports.once = function (t, e) {
                        return new Promise(function (r, n) {
                            function o(r) {
                                t.removeListener(e, i), n(r);
                            }
                            function i() {
                                "function" == typeof t.removeListener &&
                                    t.removeListener("error", o),
                                    r([].slice.call(arguments));
                            }
                            g(t, e, i, { once: !0 }),
                                "error" !== e &&
                                    (function (t, e, r) {
                                        "function" == typeof t.on &&
                                            g(t, "error", e, { once: !0 });
                                    })(t, o);
                        });
                    }),
                    (i.EventEmitter = i),
                    (i.prototype._events = void 0),
                    (i.prototype._eventsCount = 0),
                    (i.prototype._maxListeners = void 0);
                var s = 10;
                function a(t) {
                    if ("function" != typeof t)
                        throw new TypeError(
                            'The "listener" argument must be of type Function. Received type ' +
                                typeof t,
                        );
                }
                function c(t) {
                    return void 0 === t._maxListeners
                        ? i.defaultMaxListeners
                        : t._maxListeners;
                }
                function l(t, e, r, n) {
                    var o, i, s, l;
                    if (
                        (a(r),
                        void 0 === (i = t._events)
                            ? ((i = t._events = Object.create(null)),
                              (t._eventsCount = 0))
                            : (void 0 !== i.newListener &&
                                  (t.emit(
                                      "newListener",
                                      e,
                                      r.listener ? r.listener : r,
                                  ),
                                  (i = t._events)),
                              (s = i[e])),
                        void 0 === s)
                    )
                        (s = i[e] = r), ++t._eventsCount;
                    else if (
                        ("function" == typeof s
                            ? (s = i[e] = n ? [r, s] : [s, r])
                            : n
                            ? s.unshift(r)
                            : s.push(r),
                        (o = c(t)) > 0 && s.length > o && !s.warned)
                    ) {
                        s.warned = !0;
                        var u = new Error(
                            "Possible EventEmitter memory leak detected. " +
                                s.length +
                                " " +
                                String(e) +
                                " listeners added. Use emitter.setMaxListeners() to increase limit",
                        );
                        (u.name = "MaxListenersExceededWarning"),
                            (u.emitter = t),
                            (u.type = e),
                            (u.count = s.length),
                            (l = u),
                            console && console.warn && console.warn(l);
                    }
                    return t;
                }
                function u() {
                    if (!this.fired)
                        return (
                            this.target.removeListener(this.type, this.wrapFn),
                            (this.fired = !0),
                            0 === arguments.length
                                ? this.listener.call(this.target)
                                : this.listener.apply(this.target, arguments)
                        );
                }
                function p(t, e, r) {
                    var n = {
                            fired: !1,
                            wrapFn: void 0,
                            target: t,
                            type: e,
                            listener: r,
                        },
                        o = u.bind(n);
                    return (o.listener = r), (n.wrapFn = o), o;
                }
                function h(t, e, r) {
                    var n = t._events;
                    if (void 0 === n) return [];
                    var o = n[e];
                    return void 0 === o
                        ? []
                        : "function" == typeof o
                        ? r
                            ? [o.listener || o]
                            : [o]
                        : r
                        ? (function (t) {
                              for (
                                  var e = new Array(t.length), r = 0;
                                  r < e.length;
                                  ++r
                              )
                                  e[r] = t[r].listener || t[r];
                              return e;
                          })(o)
                        : d(o, o.length);
                }
                function f(t) {
                    var e = this._events;
                    if (void 0 !== e) {
                        var r = e[t];
                        if ("function" == typeof r) return 1;
                        if (void 0 !== r) return r.length;
                    }
                    return 0;
                }
                function d(t, e) {
                    for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
                    return r;
                }
                function g(t, e, r, n) {
                    if ("function" == typeof t.on)
                        n.once ? t.once(e, r) : t.on(e, r);
                    else {
                        if ("function" != typeof t.addEventListener)
                            throw new TypeError(
                                'The "emitter" argument must be of type EventEmitter. Received type ' +
                                    typeof t,
                            );
                        t.addEventListener(e, function o(i) {
                            n.once && t.removeEventListener(e, o), r(i);
                        });
                    }
                }
                Object.defineProperty(i, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                    set: function (t) {
                        if ("number" != typeof t || t < 0 || o(t))
                            throw new RangeError(
                                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                                    t +
                                    ".",
                            );
                        s = t;
                    },
                }),
                    (i.init = function () {
                        (void 0 !== this._events &&
                            this._events !==
                                Object.getPrototypeOf(this)._events) ||
                            ((this._events = Object.create(null)),
                            (this._eventsCount = 0)),
                            (this._maxListeners = this._maxListeners || void 0);
                    }),
                    (i.prototype.setMaxListeners = function (t) {
                        if ("number" != typeof t || t < 0 || o(t))
                            throw new RangeError(
                                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                                    t +
                                    ".",
                            );
                        return (this._maxListeners = t), this;
                    }),
                    (i.prototype.getMaxListeners = function () {
                        return c(this);
                    }),
                    (i.prototype.emit = function (t) {
                        for (var e = [], r = 1; r < arguments.length; r++)
                            e.push(arguments[r]);
                        var o = "error" === t,
                            i = this._events;
                        if (void 0 !== i) o = o && void 0 === i.error;
                        else if (!o) return !1;
                        if (o) {
                            var s;
                            if (
                                (e.length > 0 && (s = e[0]), s instanceof Error)
                            )
                                throw s;
                            var a = new Error(
                                "Unhandled error." +
                                    (s ? " (" + s.message + ")" : ""),
                            );
                            throw ((a.context = s), a);
                        }
                        var c = i[t];
                        if (void 0 === c) return !1;
                        if ("function" == typeof c) n(c, this, e);
                        else {
                            var l = c.length,
                                u = d(c, l);
                            for (r = 0; r < l; ++r) n(u[r], this, e);
                        }
                        return !0;
                    }),
                    (i.prototype.addListener = function (t, e) {
                        return l(this, t, e, !1);
                    }),
                    (i.prototype.on = i.prototype.addListener),
                    (i.prototype.prependListener = function (t, e) {
                        return l(this, t, e, !0);
                    }),
                    (i.prototype.once = function (t, e) {
                        return a(e), this.on(t, p(this, t, e)), this;
                    }),
                    (i.prototype.prependOnceListener = function (t, e) {
                        return (
                            a(e), this.prependListener(t, p(this, t, e)), this
                        );
                    }),
                    (i.prototype.removeListener = function (t, e) {
                        var r, n, o, i, s;
                        if ((a(e), void 0 === (n = this._events))) return this;
                        if (void 0 === (r = n[t])) return this;
                        if (r === e || r.listener === e)
                            0 == --this._eventsCount
                                ? (this._events = Object.create(null))
                                : (delete n[t],
                                  n.removeListener &&
                                      this.emit(
                                          "removeListener",
                                          t,
                                          r.listener || e,
                                      ));
                        else if ("function" != typeof r) {
                            for (o = -1, i = r.length - 1; i >= 0; i--)
                                if (r[i] === e || r[i].listener === e) {
                                    (s = r[i].listener), (o = i);
                                    break;
                                }
                            if (o < 0) return this;
                            0 === o
                                ? r.shift()
                                : (function (t, e) {
                                      for (; e + 1 < t.length; e++)
                                          t[e] = t[e + 1];
                                      t.pop();
                                  })(r, o),
                                1 === r.length && (n[t] = r[0]),
                                void 0 !== n.removeListener &&
                                    this.emit("removeListener", t, s || e);
                        }
                        return this;
                    }),
                    (i.prototype.off = i.prototype.removeListener),
                    (i.prototype.removeAllListeners = function (t) {
                        var e, r, n;
                        if (void 0 === (r = this._events)) return this;
                        if (void 0 === r.removeListener)
                            return (
                                0 === arguments.length
                                    ? ((this._events = Object.create(null)),
                                      (this._eventsCount = 0))
                                    : void 0 !== r[t] &&
                                      (0 == --this._eventsCount
                                          ? (this._events = Object.create(null))
                                          : delete r[t]),
                                this
                            );
                        if (0 === arguments.length) {
                            var o,
                                i = Object.keys(r);
                            for (n = 0; n < i.length; ++n)
                                "removeListener" !== (o = i[n]) &&
                                    this.removeAllListeners(o);
                            return (
                                this.removeAllListeners("removeListener"),
                                (this._events = Object.create(null)),
                                (this._eventsCount = 0),
                                this
                            );
                        }
                        if ("function" == typeof (e = r[t]))
                            this.removeListener(t, e);
                        else if (void 0 !== e)
                            for (n = e.length - 1; n >= 0; n--)
                                this.removeListener(t, e[n]);
                        return this;
                    }),
                    (i.prototype.listeners = function (t) {
                        return h(this, t, !0);
                    }),
                    (i.prototype.rawListeners = function (t) {
                        return h(this, t, !1);
                    }),
                    (i.listenerCount = function (t, e) {
                        return "function" == typeof t.listenerCount
                            ? t.listenerCount(e)
                            : f.call(t, e);
                    }),
                    (i.prototype.listenerCount = f),
                    (i.prototype.eventNames = function () {
                        return this._eventsCount > 0 ? e(this._events) : [];
                    });
            },
            9144: (t, e, r) => {
                var n,
                    o =
                        void 0 !== r.g
                            ? r.g
                            : "undefined" != typeof window
                            ? window
                            : {},
                    i = r(5893);
                "undefined" != typeof document
                    ? (n = document)
                    : (n = o["__GLOBAL_DOCUMENT_CACHE@4"]) ||
                      (n = o["__GLOBAL_DOCUMENT_CACHE@4"] = i),
                    (t.exports = n);
            },
            5145: (t, e, r) => {
                var n = r(2379);
                t.exports = function (t) {
                    if (!t.VNode || !t.VText)
                        throw new Error(
                            "html-to-vdom needs to be initialized with VNode and VText",
                        );
                    return n(t.VNode, t.VText);
                };
            },
            5512: (t, e, r) => {
                var n = r(3498).decode;
                function o(t, e) {
                    return (t & e) === e;
                }
                var i,
                    s = RegExp.prototype.test.bind(
                        /^(data|aria)-[a-z_][a-z\d_.\-]*$/,
                    ),
                    a = {
                        Properties: {
                            accept: null,
                            acceptCharset: null,
                            accessKey: null,
                            action: null,
                            allowFullScreen: 9,
                            allowTransparency: 1,
                            alt: null,
                            async: 8,
                            autoComplete: null,
                            autoFocus: 8,
                            autoPlay: 8,
                            capture: 9,
                            cellPadding: null,
                            cellSpacing: null,
                            charSet: 1,
                            challenge: 1,
                            checked: 10,
                            classID: 1,
                            className: 1,
                            cols: 49,
                            colSpan: null,
                            content: null,
                            contentEditable: null,
                            contextMenu: 1,
                            controls: 10,
                            coords: null,
                            crossOrigin: null,
                            data: null,
                            dateTime: 1,
                            defer: 8,
                            dir: null,
                            disabled: 9,
                            download: 64,
                            draggable: null,
                            encType: null,
                            form: 1,
                            formAction: 1,
                            formEncType: 1,
                            formMethod: 1,
                            formNoValidate: 8,
                            formTarget: 1,
                            frameBorder: 1,
                            headers: null,
                            height: 1,
                            hidden: 9,
                            high: null,
                            href: null,
                            hrefLang: null,
                            htmlFor: null,
                            httpEquiv: null,
                            icon: null,
                            id: 2,
                            is: 1,
                            keyParams: 1,
                            keyType: 1,
                            label: null,
                            lang: null,
                            list: 1,
                            loop: 10,
                            low: null,
                            manifest: 1,
                            marginHeight: null,
                            marginWidth: null,
                            max: null,
                            maxLength: 1,
                            media: 1,
                            mediaGroup: null,
                            method: null,
                            min: null,
                            minLength: 1,
                            multiple: 10,
                            muted: 10,
                            name: null,
                            noValidate: 8,
                            open: 8,
                            optimum: null,
                            pattern: null,
                            placeholder: null,
                            poster: null,
                            preload: null,
                            radioGroup: null,
                            readOnly: 10,
                            rel: null,
                            required: 8,
                            role: 1,
                            rows: 49,
                            rowSpan: null,
                            sandbox: null,
                            scope: null,
                            scoped: 8,
                            scrolling: null,
                            seamless: 9,
                            selected: 10,
                            shape: null,
                            size: 49,
                            sizes: 1,
                            span: 48,
                            spellCheck: null,
                            src: null,
                            srcDoc: 2,
                            srcSet: 1,
                            start: 16,
                            step: null,
                            style: null,
                            tabIndex: null,
                            target: null,
                            title: null,
                            type: null,
                            useMap: null,
                            value: 2,
                            width: 1,
                            wmode: 1,
                            autoCapitalize: null,
                            autoCorrect: null,
                            itemProp: 1,
                            itemScope: 9,
                            itemType: 1,
                            itemID: 1,
                            itemRef: 1,
                            property: null,
                            unselectable: 1,
                        },
                    },
                    c = {
                        className: "class",
                        htmlFor: "for",
                        httpEquiv: "http-equiv",
                        acceptCharset: "accept-charset",
                    },
                    l = {
                        style: function (t) {
                            return t.split(";").reduce(function (t, e) {
                                var r = e.split(/:(.+)/);
                                return (
                                    r[0] &&
                                        r[1] &&
                                        (t[r[0].trim()] = r[1].trim()),
                                    t
                                );
                            }, {});
                        },
                        placeholder: n,
                        title: n,
                        alt: n,
                    },
                    u =
                        ((i = {}),
                        Object.keys(a.Properties).forEach(function (t) {
                            var e = a.Properties[t],
                                r = c[t] || t.toLowerCase(),
                                n = {
                                    attributeName: r,
                                    propertyName: t,
                                    mustUseAttribute: o(e, 1),
                                    mustUseProperty: o(e, 2),
                                    hasBooleanValue: o(e, 8),
                                    hasNumericValue: o(e, 16),
                                    hasPositiveNumericValue: o(e, 48),
                                    hasOverloadedBooleanValue: o(e, 64),
                                };
                            i[r] = n;
                        }),
                        function (t) {
                            return i[t];
                        });
                t.exports = function (t) {
                    var e = t.attribs,
                        r = { attributes: {} };
                    return (
                        Object.keys(e).forEach(function (t) {
                            var n = t.toLowerCase(),
                                o = u(n),
                                i = e[t];
                            if (!s(t) && o) {
                                var a,
                                    c = l[o.propertyName];
                                c && (i = c(i)),
                                    o.mustUseAttribute
                                        ? o.hasBooleanValue
                                            ? (r.attributes[o.attributeName] =
                                                  "")
                                            : (r.attributes[o.attributeName] =
                                                  i)
                                        : o.hasBooleanValue
                                        ? ((a =
                                              "" === i ||
                                              i.toLowerCase() ===
                                                  o.attributeName),
                                          (r[o.propertyName] = !!a))
                                        : o.hasOverloadedBooleanValue
                                        ? ((a = "" === i),
                                          (r[o.propertyName] = !!a || i))
                                        : o.hasNumericValue ||
                                          o.hasPositiveNumericValue
                                        ? (r[o.propertyName] = Number(i))
                                        : (r[o.propertyName] = i);
                            } else r.attributes[t] = i;
                        }),
                        r
                    );
                };
            },
            2379: (t, e, r) => {
                var n = r(8585),
                    o = r(1209);
                t.exports = function (t, e) {
                    var r = n(t, e);
                    return function (t, e) {
                        var n = void 0 === e && "string" == typeof t,
                            i = n ? t : e,
                            s = n ? void 0 : t.getVNodeKey,
                            a = o(i);
                        return a.length > 1
                            ? a.map(function (t) {
                                  return r.convert(t, s);
                              })
                            : r.convert(a[0], s);
                    };
                };
            },
            8585: (t, e, r) => {
                var n = r(3498).decode,
                    o = r(5512);
                t.exports = function (t, e) {
                    var r = {
                        convert: function (t, o) {
                            return "tag" === t.type ||
                                "script" === t.type ||
                                "style" === t.type
                                ? r.convertTag(t, o)
                                : "text" === t.type
                                ? new e(n(t.data))
                                : new e("");
                        },
                        convertTag: function (e, n) {
                            var i,
                                s = o(e);
                            n && (i = n(s));
                            var a = Array.prototype.map.call(
                                e.children || [],
                                function (t) {
                                    return r.convert(t, n);
                                },
                            );
                            return new t(e.name, s, a, i);
                        },
                    };
                    return r;
                };
            },
            1209: (t, e, r) => {
                var n = r(3719);
                t.exports = function (t) {
                    var e = new n.DomHandler();
                    return (
                        new n.Parser(e, {
                            lowerCaseAttributeNames: !1,
                        }).parseComplete(t),
                        e.dom
                    );
                };
            },
            5449: (t, e, r) => {
                function n(t) {
                    (this._cbs = t || {}), (this.events = []);
                }
                t.exports = n;
                var o = r(3719).EVENTS;
                Object.keys(o).forEach(function (t) {
                    if (0 === o[t])
                        (t = "on" + t),
                            (n.prototype[t] = function () {
                                this.events.push([t]),
                                    this._cbs[t] && this._cbs[t]();
                            });
                    else if (1 === o[t])
                        (t = "on" + t),
                            (n.prototype[t] = function (e) {
                                this.events.push([t, e]),
                                    this._cbs[t] && this._cbs[t](e);
                            });
                    else {
                        if (2 !== o[t])
                            throw Error("wrong number of arguments");
                        (t = "on" + t),
                            (n.prototype[t] = function (e, r) {
                                this.events.push([t, e, r]),
                                    this._cbs[t] && this._cbs[t](e, r);
                            });
                    }
                }),
                    (n.prototype.onreset = function () {
                        (this.events = []),
                            this._cbs.onreset && this._cbs.onreset();
                    }),
                    (n.prototype.restart = function () {
                        this._cbs.onreset && this._cbs.onreset();
                        for (var t = 0, e = this.events.length; t < e; t++)
                            if (this._cbs[this.events[t][0]]) {
                                var r = this.events[t].length;
                                1 === r
                                    ? this._cbs[this.events[t][0]]()
                                    : 2 === r
                                    ? this._cbs[this.events[t][0]](
                                          this.events[t][1],
                                      )
                                    : this._cbs[this.events[t][0]](
                                          this.events[t][1],
                                          this.events[t][2],
                                      );
                            }
                    });
            },
            3870: (t, e, r) => {
                var n = r(8753),
                    o = r(2417);
                function i(t, e) {
                    this.init(t, e);
                }
                function s(t, e) {
                    return o.getElementsByTagName(t, e, !0);
                }
                function a(t, e) {
                    return o.getElementsByTagName(t, e, !0, 1)[0];
                }
                function c(t, e, r) {
                    return o.getText(o.getElementsByTagName(t, e, r, 1)).trim();
                }
                function l(t, e, r, n, o) {
                    var i = c(r, n, o);
                    i && (t[e] = i);
                }
                r(5717)(i, n), (i.prototype.init = n);
                var u = function (t) {
                    return "rss" === t || "feed" === t || "rdf:RDF" === t;
                };
                (i.prototype.onend = function () {
                    var t,
                        e,
                        r = {},
                        o = a(u, this.dom);
                    o &&
                        ("feed" === o.name
                            ? ((e = o.children),
                              (r.type = "atom"),
                              l(r, "id", "id", e),
                              l(r, "title", "title", e),
                              (t = a("link", e)) &&
                                  (t = t.attribs) &&
                                  (t = t.href) &&
                                  (r.link = t),
                              l(r, "description", "subtitle", e),
                              (t = c("updated", e)) &&
                                  (r.updated = new Date(t)),
                              l(r, "author", "email", e, !0),
                              (r.items = s("entry", e).map(function (t) {
                                  var e,
                                      r = {};
                                  return (
                                      l(r, "id", "id", (t = t.children)),
                                      l(r, "title", "title", t),
                                      (e = a("link", t)) &&
                                          (e = e.attribs) &&
                                          (e = e.href) &&
                                          (r.link = e),
                                      (e =
                                          c("summary", t) || c("content", t)) &&
                                          (r.description = e),
                                      (e = c("updated", t)) &&
                                          (r.pubDate = new Date(e)),
                                      r
                                  );
                              })))
                            : ((e = a("channel", o.children).children),
                              (r.type = o.name.substr(0, 3)),
                              (r.id = ""),
                              l(r, "title", "title", e),
                              l(r, "link", "link", e),
                              l(r, "description", "description", e),
                              (t = c("lastBuildDate", e)) &&
                                  (r.updated = new Date(t)),
                              l(r, "author", "managingEditor", e, !0),
                              (r.items = s("item", o.children).map(function (
                                  t,
                              ) {
                                  var e,
                                      r = {};
                                  return (
                                      l(r, "id", "guid", (t = t.children)),
                                      l(r, "title", "title", t),
                                      l(r, "link", "link", t),
                                      l(r, "description", "description", t),
                                      (e = c("pubDate", t)) &&
                                          (r.pubDate = new Date(e)),
                                      r
                                  );
                              })))),
                        (this.dom = r),
                        n.prototype._handleCallback.call(
                            this,
                            o ? null : Error("couldn't find root of feed"),
                        );
                }),
                    (t.exports = i);
            },
            763: (t, e, r) => {
                var n = r(9889),
                    o = {
                        input: !0,
                        option: !0,
                        optgroup: !0,
                        select: !0,
                        button: !0,
                        datalist: !0,
                        textarea: !0,
                    },
                    i = {
                        tr: { tr: !0, th: !0, td: !0 },
                        th: { th: !0 },
                        td: { thead: !0, th: !0, td: !0 },
                        body: { head: !0, link: !0, script: !0 },
                        li: { li: !0 },
                        p: { p: !0 },
                        h1: { p: !0 },
                        h2: { p: !0 },
                        h3: { p: !0 },
                        h4: { p: !0 },
                        h5: { p: !0 },
                        h6: { p: !0 },
                        select: o,
                        input: o,
                        output: o,
                        button: o,
                        datalist: o,
                        textarea: o,
                        option: { option: !0 },
                        optgroup: { optgroup: !0 },
                    },
                    s = {
                        __proto__: null,
                        area: !0,
                        base: !0,
                        basefont: !0,
                        br: !0,
                        col: !0,
                        command: !0,
                        embed: !0,
                        frame: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        isindex: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0,
                    },
                    a = { __proto__: null, math: !0, svg: !0 },
                    c = {
                        __proto__: null,
                        mi: !0,
                        mo: !0,
                        mn: !0,
                        ms: !0,
                        mtext: !0,
                        "annotation-xml": !0,
                        foreignObject: !0,
                        desc: !0,
                        title: !0,
                    },
                    l = /\s|\//;
                function u(t, e) {
                    (this._options = e || {}),
                        (this._cbs = t || {}),
                        (this._tagname = ""),
                        (this._attribname = ""),
                        (this._attribvalue = ""),
                        (this._attribs = null),
                        (this._stack = []),
                        (this._foreignContext = []),
                        (this.startIndex = 0),
                        (this.endIndex = null),
                        (this._lowerCaseTagNames =
                            "lowerCaseTags" in this._options
                                ? !!this._options.lowerCaseTags
                                : !this._options.xmlMode),
                        (this._lowerCaseAttributeNames =
                            "lowerCaseAttributeNames" in this._options
                                ? !!this._options.lowerCaseAttributeNames
                                : !this._options.xmlMode),
                        this._options.Tokenizer &&
                            (n = this._options.Tokenizer),
                        (this._tokenizer = new n(this._options, this)),
                        this._cbs.onparserinit && this._cbs.onparserinit(this);
                }
                r(5717)(u, r(7187).EventEmitter),
                    (u.prototype._updatePosition = function (t) {
                        null === this.endIndex
                            ? this._tokenizer._sectionStart <= t
                                ? (this.startIndex = 0)
                                : (this.startIndex =
                                      this._tokenizer._sectionStart - t)
                            : (this.startIndex = this.endIndex + 1),
                            (this.endIndex =
                                this._tokenizer.getAbsoluteIndex());
                    }),
                    (u.prototype.ontext = function (t) {
                        this._updatePosition(1),
                            this.endIndex--,
                            this._cbs.ontext && this._cbs.ontext(t);
                    }),
                    (u.prototype.onopentagname = function (t) {
                        if (
                            (this._lowerCaseTagNames && (t = t.toLowerCase()),
                            (this._tagname = t),
                            !this._options.xmlMode && t in i)
                        )
                            for (
                                var e;
                                (e = this._stack[this._stack.length - 1]) in
                                i[t];
                                this.onclosetag(e)
                            );
                        (!this._options.xmlMode && t in s) ||
                            (this._stack.push(t),
                            t in a
                                ? this._foreignContext.push(!0)
                                : t in c && this._foreignContext.push(!1)),
                            this._cbs.onopentagname &&
                                this._cbs.onopentagname(t),
                            this._cbs.onopentag && (this._attribs = {});
                    }),
                    (u.prototype.onopentagend = function () {
                        this._updatePosition(1),
                            this._attribs &&
                                (this._cbs.onopentag &&
                                    this._cbs.onopentag(
                                        this._tagname,
                                        this._attribs,
                                    ),
                                (this._attribs = null)),
                            !this._options.xmlMode &&
                                this._cbs.onclosetag &&
                                this._tagname in s &&
                                this._cbs.onclosetag(this._tagname),
                            (this._tagname = "");
                    }),
                    (u.prototype.onclosetag = function (t) {
                        if (
                            (this._updatePosition(1),
                            this._lowerCaseTagNames && (t = t.toLowerCase()),
                            (t in a || t in c) && this._foreignContext.pop(),
                            !this._stack.length ||
                                (t in s && !this._options.xmlMode))
                        )
                            this._options.xmlMode ||
                                ("br" !== t && "p" !== t) ||
                                (this.onopentagname(t),
                                this._closeCurrentTag());
                        else {
                            var e = this._stack.lastIndexOf(t);
                            if (-1 !== e)
                                if (this._cbs.onclosetag)
                                    for (e = this._stack.length - e; e--; )
                                        this._cbs.onclosetag(this._stack.pop());
                                else this._stack.length = e;
                            else
                                "p" !== t ||
                                    this._options.xmlMode ||
                                    (this.onopentagname(t),
                                    this._closeCurrentTag());
                        }
                    }),
                    (u.prototype.onselfclosingtag = function () {
                        this._options.xmlMode ||
                        this._options.recognizeSelfClosing ||
                        this._foreignContext[this._foreignContext.length - 1]
                            ? this._closeCurrentTag()
                            : this.onopentagend();
                    }),
                    (u.prototype._closeCurrentTag = function () {
                        var t = this._tagname;
                        this.onopentagend(),
                            this._stack[this._stack.length - 1] === t &&
                                (this._cbs.onclosetag &&
                                    this._cbs.onclosetag(t),
                                this._stack.pop());
                    }),
                    (u.prototype.onattribname = function (t) {
                        this._lowerCaseAttributeNames && (t = t.toLowerCase()),
                            (this._attribname = t);
                    }),
                    (u.prototype.onattribdata = function (t) {
                        this._attribvalue += t;
                    }),
                    (u.prototype.onattribend = function () {
                        this._cbs.onattribute &&
                            this._cbs.onattribute(
                                this._attribname,
                                this._attribvalue,
                            ),
                            this._attribs &&
                                !Object.prototype.hasOwnProperty.call(
                                    this._attribs,
                                    this._attribname,
                                ) &&
                                (this._attribs[this._attribname] =
                                    this._attribvalue),
                            (this._attribname = ""),
                            (this._attribvalue = "");
                    }),
                    (u.prototype._getInstructionName = function (t) {
                        var e = t.search(l),
                            r = e < 0 ? t : t.substr(0, e);
                        return (
                            this._lowerCaseTagNames && (r = r.toLowerCase()), r
                        );
                    }),
                    (u.prototype.ondeclaration = function (t) {
                        if (this._cbs.onprocessinginstruction) {
                            var e = this._getInstructionName(t);
                            this._cbs.onprocessinginstruction("!" + e, "!" + t);
                        }
                    }),
                    (u.prototype.onprocessinginstruction = function (t) {
                        if (this._cbs.onprocessinginstruction) {
                            var e = this._getInstructionName(t);
                            this._cbs.onprocessinginstruction("?" + e, "?" + t);
                        }
                    }),
                    (u.prototype.oncomment = function (t) {
                        this._updatePosition(4),
                            this._cbs.oncomment && this._cbs.oncomment(t),
                            this._cbs.oncommentend && this._cbs.oncommentend();
                    }),
                    (u.prototype.oncdata = function (t) {
                        this._updatePosition(1),
                            this._options.xmlMode ||
                            this._options.recognizeCDATA
                                ? (this._cbs.oncdatastart &&
                                      this._cbs.oncdatastart(),
                                  this._cbs.ontext && this._cbs.ontext(t),
                                  this._cbs.oncdataend &&
                                      this._cbs.oncdataend())
                                : this.oncomment("[CDATA[" + t + "]]");
                    }),
                    (u.prototype.onerror = function (t) {
                        this._cbs.onerror && this._cbs.onerror(t);
                    }),
                    (u.prototype.onend = function () {
                        if (this._cbs.onclosetag)
                            for (
                                var t = this._stack.length;
                                t > 0;
                                this._cbs.onclosetag(this._stack[--t])
                            );
                        this._cbs.onend && this._cbs.onend();
                    }),
                    (u.prototype.reset = function () {
                        this._cbs.onreset && this._cbs.onreset(),
                            this._tokenizer.reset(),
                            (this._tagname = ""),
                            (this._attribname = ""),
                            (this._attribs = null),
                            (this._stack = []),
                            this._cbs.onparserinit &&
                                this._cbs.onparserinit(this);
                    }),
                    (u.prototype.parseComplete = function (t) {
                        this.reset(), this.end(t);
                    }),
                    (u.prototype.write = function (t) {
                        this._tokenizer.write(t);
                    }),
                    (u.prototype.end = function (t) {
                        this._tokenizer.end(t);
                    }),
                    (u.prototype.pause = function () {
                        this._tokenizer.pause();
                    }),
                    (u.prototype.resume = function () {
                        this._tokenizer.resume();
                    }),
                    (u.prototype.parseChunk = u.prototype.write),
                    (u.prototype.done = u.prototype.end),
                    (t.exports = u);
            },
            6321: (t, e, r) => {
                function n(t) {
                    this._cbs = t || {};
                }
                t.exports = n;
                var o = r(3719).EVENTS;
                Object.keys(o).forEach(function (t) {
                    if (0 === o[t])
                        (t = "on" + t),
                            (n.prototype[t] = function () {
                                this._cbs[t] && this._cbs[t]();
                            });
                    else if (1 === o[t])
                        (t = "on" + t),
                            (n.prototype[t] = function (e) {
                                this._cbs[t] && this._cbs[t](e);
                            });
                    else {
                        if (2 !== o[t])
                            throw Error("wrong number of arguments");
                        (t = "on" + t),
                            (n.prototype[t] = function (e, r) {
                                this._cbs[t] && this._cbs[t](e, r);
                            });
                    }
                });
            },
            9924: (t, e, r) => {
                t.exports = o;
                var n = r(3621);
                function o(t) {
                    n.call(this, new i(this), t);
                }
                function i(t) {
                    this.scope = t;
                }
                r(5717)(o, n), (o.prototype.readable = !0);
                var s = r(3719).EVENTS;
                Object.keys(s).forEach(function (t) {
                    if (0 === s[t])
                        i.prototype["on" + t] = function () {
                            this.scope.emit(t);
                        };
                    else if (1 === s[t])
                        i.prototype["on" + t] = function (e) {
                            this.scope.emit(t, e);
                        };
                    else {
                        if (2 !== s[t])
                            throw Error("wrong number of arguments!");
                        i.prototype["on" + t] = function (e, r) {
                            this.scope.emit(t, e, r);
                        };
                    }
                });
            },
            9889: (t, e, r) => {
                t.exports = mt;
                var n = r(26),
                    o = r(752),
                    i = r(5076),
                    s = r(1083),
                    a = 0,
                    c = a++,
                    l = a++,
                    u = a++,
                    p = a++,
                    h = a++,
                    f = a++,
                    d = a++,
                    g = a++,
                    m = a++,
                    b = a++,
                    y = a++,
                    v = a++,
                    w = a++,
                    _ = a++,
                    q = a++,
                    x = a++,
                    E = a++,
                    S = a++,
                    T = a++,
                    A = a++,
                    L = a++,
                    k = a++,
                    D = a++,
                    N = a++,
                    C = a++,
                    B = a++,
                    R = a++,
                    O = a++,
                    U = a++,
                    I = a++,
                    V = a++,
                    P = a++,
                    H = a++,
                    M = a++,
                    j = a++,
                    G = a++,
                    F = a++,
                    z = a++,
                    J = a++,
                    Y = a++,
                    Z = a++,
                    X = a++,
                    W = a++,
                    K = a++,
                    $ = a++,
                    Q = a++,
                    tt = a++,
                    et = a++,
                    rt = a++,
                    nt = a++,
                    ot = a++,
                    it = a++,
                    st = a++,
                    at = a++,
                    ct = a++,
                    lt = 0,
                    ut = lt++,
                    pt = lt++,
                    ht = lt++;
                function ft(t) {
                    return (
                        " " === t ||
                        "\n" === t ||
                        "\t" === t ||
                        "\f" === t ||
                        "\r" === t
                    );
                }
                function dt(t, e, r) {
                    var n = t.toLowerCase();
                    return t === n
                        ? function (t) {
                              t === n
                                  ? (this._state = e)
                                  : ((this._state = r), this._index--);
                          }
                        : function (o) {
                              o === n || o === t
                                  ? (this._state = e)
                                  : ((this._state = r), this._index--);
                          };
                }
                function gt(t, e) {
                    var r = t.toLowerCase();
                    return function (n) {
                        n === r || n === t
                            ? (this._state = e)
                            : ((this._state = u), this._index--);
                    };
                }
                function mt(t, e) {
                    (this._state = c),
                        (this._buffer = ""),
                        (this._sectionStart = 0),
                        (this._index = 0),
                        (this._bufferOffset = 0),
                        (this._baseState = c),
                        (this._special = ut),
                        (this._cbs = e),
                        (this._running = !0),
                        (this._ended = !1),
                        (this._xmlMode = !(!t || !t.xmlMode)),
                        (this._decodeEntities = !(!t || !t.decodeEntities));
                }
                (mt.prototype._stateText = function (t) {
                    "<" === t
                        ? (this._index > this._sectionStart &&
                              this._cbs.ontext(this._getSection()),
                          (this._state = l),
                          (this._sectionStart = this._index))
                        : this._decodeEntities &&
                          this._special === ut &&
                          "&" === t &&
                          (this._index > this._sectionStart &&
                              this._cbs.ontext(this._getSection()),
                          (this._baseState = c),
                          (this._state = ot),
                          (this._sectionStart = this._index));
                }),
                    (mt.prototype._stateBeforeTagName = function (t) {
                        "/" === t
                            ? (this._state = h)
                            : "<" === t
                            ? (this._cbs.ontext(this._getSection()),
                              (this._sectionStart = this._index))
                            : ">" === t || this._special !== ut || ft(t)
                            ? (this._state = c)
                            : "!" === t
                            ? ((this._state = q),
                              (this._sectionStart = this._index + 1))
                            : "?" === t
                            ? ((this._state = E),
                              (this._sectionStart = this._index + 1))
                            : ((this._state =
                                  this._xmlMode || ("s" !== t && "S" !== t)
                                      ? u
                                      : V),
                              (this._sectionStart = this._index));
                    }),
                    (mt.prototype._stateInTagName = function (t) {
                        ("/" === t || ">" === t || ft(t)) &&
                            (this._emitToken("onopentagname"),
                            (this._state = g),
                            this._index--);
                    }),
                    (mt.prototype._stateBeforeCloseingTagName = function (t) {
                        ft(t) ||
                            (">" === t
                                ? (this._state = c)
                                : this._special !== ut
                                ? "s" === t || "S" === t
                                    ? (this._state = P)
                                    : ((this._state = c), this._index--)
                                : ((this._state = f),
                                  (this._sectionStart = this._index)));
                    }),
                    (mt.prototype._stateInCloseingTagName = function (t) {
                        (">" === t || ft(t)) &&
                            (this._emitToken("onclosetag"),
                            (this._state = d),
                            this._index--);
                    }),
                    (mt.prototype._stateAfterCloseingTagName = function (t) {
                        ">" === t &&
                            ((this._state = c),
                            (this._sectionStart = this._index + 1));
                    }),
                    (mt.prototype._stateBeforeAttributeName = function (t) {
                        ">" === t
                            ? (this._cbs.onopentagend(),
                              (this._state = c),
                              (this._sectionStart = this._index + 1))
                            : "/" === t
                            ? (this._state = p)
                            : ft(t) ||
                              ((this._state = m),
                              (this._sectionStart = this._index));
                    }),
                    (mt.prototype._stateInSelfClosingTag = function (t) {
                        ">" === t
                            ? (this._cbs.onselfclosingtag(),
                              (this._state = c),
                              (this._sectionStart = this._index + 1))
                            : ft(t) || ((this._state = g), this._index--);
                    }),
                    (mt.prototype._stateInAttributeName = function (t) {
                        ("=" === t || "/" === t || ">" === t || ft(t)) &&
                            (this._cbs.onattribname(this._getSection()),
                            (this._sectionStart = -1),
                            (this._state = b),
                            this._index--);
                    }),
                    (mt.prototype._stateAfterAttributeName = function (t) {
                        "=" === t
                            ? (this._state = y)
                            : "/" === t || ">" === t
                            ? (this._cbs.onattribend(),
                              (this._state = g),
                              this._index--)
                            : ft(t) ||
                              (this._cbs.onattribend(),
                              (this._state = m),
                              (this._sectionStart = this._index));
                    }),
                    (mt.prototype._stateBeforeAttributeValue = function (t) {
                        '"' === t
                            ? ((this._state = v),
                              (this._sectionStart = this._index + 1))
                            : "'" === t
                            ? ((this._state = w),
                              (this._sectionStart = this._index + 1))
                            : ft(t) ||
                              ((this._state = _),
                              (this._sectionStart = this._index),
                              this._index--);
                    }),
                    (mt.prototype._stateInAttributeValueDoubleQuotes =
                        function (t) {
                            '"' === t
                                ? (this._emitToken("onattribdata"),
                                  this._cbs.onattribend(),
                                  (this._state = g))
                                : this._decodeEntities &&
                                  "&" === t &&
                                  (this._emitToken("onattribdata"),
                                  (this._baseState = this._state),
                                  (this._state = ot),
                                  (this._sectionStart = this._index));
                        }),
                    (mt.prototype._stateInAttributeValueSingleQuotes =
                        function (t) {
                            "'" === t
                                ? (this._emitToken("onattribdata"),
                                  this._cbs.onattribend(),
                                  (this._state = g))
                                : this._decodeEntities &&
                                  "&" === t &&
                                  (this._emitToken("onattribdata"),
                                  (this._baseState = this._state),
                                  (this._state = ot),
                                  (this._sectionStart = this._index));
                        }),
                    (mt.prototype._stateInAttributeValueNoQuotes = function (
                        t,
                    ) {
                        ft(t) || ">" === t
                            ? (this._emitToken("onattribdata"),
                              this._cbs.onattribend(),
                              (this._state = g),
                              this._index--)
                            : this._decodeEntities &&
                              "&" === t &&
                              (this._emitToken("onattribdata"),
                              (this._baseState = this._state),
                              (this._state = ot),
                              (this._sectionStart = this._index));
                    }),
                    (mt.prototype._stateBeforeDeclaration = function (t) {
                        this._state = "[" === t ? k : "-" === t ? S : x;
                    }),
                    (mt.prototype._stateInDeclaration = function (t) {
                        ">" === t &&
                            (this._cbs.ondeclaration(this._getSection()),
                            (this._state = c),
                            (this._sectionStart = this._index + 1));
                    }),
                    (mt.prototype._stateInProcessingInstruction = function (t) {
                        ">" === t &&
                            (this._cbs.onprocessinginstruction(
                                this._getSection(),
                            ),
                            (this._state = c),
                            (this._sectionStart = this._index + 1));
                    }),
                    (mt.prototype._stateBeforeComment = function (t) {
                        "-" === t
                            ? ((this._state = T),
                              (this._sectionStart = this._index + 1))
                            : (this._state = x);
                    }),
                    (mt.prototype._stateInComment = function (t) {
                        "-" === t && (this._state = A);
                    }),
                    (mt.prototype._stateAfterComment1 = function (t) {
                        this._state = "-" === t ? L : T;
                    }),
                    (mt.prototype._stateAfterComment2 = function (t) {
                        ">" === t
                            ? (this._cbs.oncomment(
                                  this._buffer.substring(
                                      this._sectionStart,
                                      this._index - 2,
                                  ),
                              ),
                              (this._state = c),
                              (this._sectionStart = this._index + 1))
                            : "-" !== t && (this._state = T);
                    }),
                    (mt.prototype._stateBeforeCdata1 = dt("C", D, x)),
                    (mt.prototype._stateBeforeCdata2 = dt("D", N, x)),
                    (mt.prototype._stateBeforeCdata3 = dt("A", C, x)),
                    (mt.prototype._stateBeforeCdata4 = dt("T", B, x)),
                    (mt.prototype._stateBeforeCdata5 = dt("A", R, x)),
                    (mt.prototype._stateBeforeCdata6 = function (t) {
                        "[" === t
                            ? ((this._state = O),
                              (this._sectionStart = this._index + 1))
                            : ((this._state = x), this._index--);
                    }),
                    (mt.prototype._stateInCdata = function (t) {
                        "]" === t && (this._state = U);
                    }),
                    (mt.prototype._stateAfterCdata1 = function (t) {
                        this._state = "]" === t ? I : O;
                    }),
                    (mt.prototype._stateAfterCdata2 = function (t) {
                        ">" === t
                            ? (this._cbs.oncdata(
                                  this._buffer.substring(
                                      this._sectionStart,
                                      this._index - 2,
                                  ),
                              ),
                              (this._state = c),
                              (this._sectionStart = this._index + 1))
                            : "]" !== t && (this._state = O);
                    }),
                    (mt.prototype._stateBeforeSpecial = function (t) {
                        "c" === t || "C" === t
                            ? (this._state = H)
                            : "t" === t || "T" === t
                            ? (this._state = W)
                            : ((this._state = u), this._index--);
                    }),
                    (mt.prototype._stateBeforeSpecialEnd = function (t) {
                        this._special !== pt || ("c" !== t && "C" !== t)
                            ? this._special !== ht || ("t" !== t && "T" !== t)
                                ? (this._state = c)
                                : (this._state = tt)
                            : (this._state = z);
                    }),
                    (mt.prototype._stateBeforeScript1 = gt("R", M)),
                    (mt.prototype._stateBeforeScript2 = gt("I", j)),
                    (mt.prototype._stateBeforeScript3 = gt("P", G)),
                    (mt.prototype._stateBeforeScript4 = gt("T", F)),
                    (mt.prototype._stateBeforeScript5 = function (t) {
                        ("/" === t || ">" === t || ft(t)) &&
                            (this._special = pt),
                            (this._state = u),
                            this._index--;
                    }),
                    (mt.prototype._stateAfterScript1 = dt("R", J, c)),
                    (mt.prototype._stateAfterScript2 = dt("I", Y, c)),
                    (mt.prototype._stateAfterScript3 = dt("P", Z, c)),
                    (mt.prototype._stateAfterScript4 = dt("T", X, c)),
                    (mt.prototype._stateAfterScript5 = function (t) {
                        ">" === t || ft(t)
                            ? ((this._special = ut),
                              (this._state = f),
                              (this._sectionStart = this._index - 6),
                              this._index--)
                            : (this._state = c);
                    }),
                    (mt.prototype._stateBeforeStyle1 = gt("Y", K)),
                    (mt.prototype._stateBeforeStyle2 = gt("L", $)),
                    (mt.prototype._stateBeforeStyle3 = gt("E", Q)),
                    (mt.prototype._stateBeforeStyle4 = function (t) {
                        ("/" === t || ">" === t || ft(t)) &&
                            (this._special = ht),
                            (this._state = u),
                            this._index--;
                    }),
                    (mt.prototype._stateAfterStyle1 = dt("Y", et, c)),
                    (mt.prototype._stateAfterStyle2 = dt("L", rt, c)),
                    (mt.prototype._stateAfterStyle3 = dt("E", nt, c)),
                    (mt.prototype._stateAfterStyle4 = function (t) {
                        ">" === t || ft(t)
                            ? ((this._special = ut),
                              (this._state = f),
                              (this._sectionStart = this._index - 5),
                              this._index--)
                            : (this._state = c);
                    }),
                    (mt.prototype._stateBeforeEntity = dt("#", it, st)),
                    (mt.prototype._stateBeforeNumericEntity = dt("X", ct, at)),
                    (mt.prototype._parseNamedEntityStrict = function () {
                        if (this._sectionStart + 1 < this._index) {
                            var t = this._buffer.substring(
                                    this._sectionStart + 1,
                                    this._index,
                                ),
                                e = this._xmlMode ? s : o;
                            e.hasOwnProperty(t) &&
                                (this._emitPartial(e[t]),
                                (this._sectionStart = this._index + 1));
                        }
                    }),
                    (mt.prototype._parseLegacyEntity = function () {
                        var t = this._sectionStart + 1,
                            e = this._index - t;
                        for (e > 6 && (e = 6); e >= 2; ) {
                            var r = this._buffer.substr(t, e);
                            if (i.hasOwnProperty(r))
                                return (
                                    this._emitPartial(i[r]),
                                    void (this._sectionStart += e + 1)
                                );
                            e--;
                        }
                    }),
                    (mt.prototype._stateInNamedEntity = function (t) {
                        ";" === t
                            ? (this._parseNamedEntityStrict(),
                              this._sectionStart + 1 < this._index &&
                                  !this._xmlMode &&
                                  this._parseLegacyEntity(),
                              (this._state = this._baseState))
                            : (t < "a" || t > "z") &&
                              (t < "A" || t > "Z") &&
                              (t < "0" || t > "9") &&
                              (this._xmlMode ||
                                  this._sectionStart + 1 === this._index ||
                                  (this._baseState !== c
                                      ? "=" !== t &&
                                        this._parseNamedEntityStrict()
                                      : this._parseLegacyEntity()),
                              (this._state = this._baseState),
                              this._index--);
                    }),
                    (mt.prototype._decodeNumericEntity = function (t, e) {
                        var r = this._sectionStart + t;
                        if (r !== this._index) {
                            var o = this._buffer.substring(r, this._index),
                                i = parseInt(o, e);
                            this._emitPartial(n(i)),
                                (this._sectionStart = this._index);
                        } else this._sectionStart--;
                        this._state = this._baseState;
                    }),
                    (mt.prototype._stateInNumericEntity = function (t) {
                        ";" === t
                            ? (this._decodeNumericEntity(2, 10),
                              this._sectionStart++)
                            : (t < "0" || t > "9") &&
                              (this._xmlMode
                                  ? (this._state = this._baseState)
                                  : this._decodeNumericEntity(2, 10),
                              this._index--);
                    }),
                    (mt.prototype._stateInHexEntity = function (t) {
                        ";" === t
                            ? (this._decodeNumericEntity(3, 16),
                              this._sectionStart++)
                            : (t < "a" || t > "f") &&
                              (t < "A" || t > "F") &&
                              (t < "0" || t > "9") &&
                              (this._xmlMode
                                  ? (this._state = this._baseState)
                                  : this._decodeNumericEntity(3, 16),
                              this._index--);
                    }),
                    (mt.prototype._cleanup = function () {
                        this._sectionStart < 0
                            ? ((this._buffer = ""),
                              (this._bufferOffset += this._index),
                              (this._index = 0))
                            : this._running &&
                              (this._state === c
                                  ? (this._sectionStart !== this._index &&
                                        this._cbs.ontext(
                                            this._buffer.substr(
                                                this._sectionStart,
                                            ),
                                        ),
                                    (this._buffer = ""),
                                    (this._bufferOffset += this._index),
                                    (this._index = 0))
                                  : this._sectionStart === this._index
                                  ? ((this._buffer = ""),
                                    (this._bufferOffset += this._index),
                                    (this._index = 0))
                                  : ((this._buffer = this._buffer.substr(
                                        this._sectionStart,
                                    )),
                                    (this._index -= this._sectionStart),
                                    (this._bufferOffset += this._sectionStart)),
                              (this._sectionStart = 0));
                    }),
                    (mt.prototype.write = function (t) {
                        this._ended &&
                            this._cbs.onerror(Error(".write() after done!")),
                            (this._buffer += t),
                            this._parse();
                    }),
                    (mt.prototype._parse = function () {
                        for (
                            ;
                            this._index < this._buffer.length && this._running;

                        ) {
                            var t = this._buffer.charAt(this._index);
                            this._state === c
                                ? this._stateText(t)
                                : this._state === l
                                ? this._stateBeforeTagName(t)
                                : this._state === u
                                ? this._stateInTagName(t)
                                : this._state === h
                                ? this._stateBeforeCloseingTagName(t)
                                : this._state === f
                                ? this._stateInCloseingTagName(t)
                                : this._state === d
                                ? this._stateAfterCloseingTagName(t)
                                : this._state === p
                                ? this._stateInSelfClosingTag(t)
                                : this._state === g
                                ? this._stateBeforeAttributeName(t)
                                : this._state === m
                                ? this._stateInAttributeName(t)
                                : this._state === b
                                ? this._stateAfterAttributeName(t)
                                : this._state === y
                                ? this._stateBeforeAttributeValue(t)
                                : this._state === v
                                ? this._stateInAttributeValueDoubleQuotes(t)
                                : this._state === w
                                ? this._stateInAttributeValueSingleQuotes(t)
                                : this._state === _
                                ? this._stateInAttributeValueNoQuotes(t)
                                : this._state === q
                                ? this._stateBeforeDeclaration(t)
                                : this._state === x
                                ? this._stateInDeclaration(t)
                                : this._state === E
                                ? this._stateInProcessingInstruction(t)
                                : this._state === S
                                ? this._stateBeforeComment(t)
                                : this._state === T
                                ? this._stateInComment(t)
                                : this._state === A
                                ? this._stateAfterComment1(t)
                                : this._state === L
                                ? this._stateAfterComment2(t)
                                : this._state === k
                                ? this._stateBeforeCdata1(t)
                                : this._state === D
                                ? this._stateBeforeCdata2(t)
                                : this._state === N
                                ? this._stateBeforeCdata3(t)
                                : this._state === C
                                ? this._stateBeforeCdata4(t)
                                : this._state === B
                                ? this._stateBeforeCdata5(t)
                                : this._state === R
                                ? this._stateBeforeCdata6(t)
                                : this._state === O
                                ? this._stateInCdata(t)
                                : this._state === U
                                ? this._stateAfterCdata1(t)
                                : this._state === I
                                ? this._stateAfterCdata2(t)
                                : this._state === V
                                ? this._stateBeforeSpecial(t)
                                : this._state === P
                                ? this._stateBeforeSpecialEnd(t)
                                : this._state === H
                                ? this._stateBeforeScript1(t)
                                : this._state === M
                                ? this._stateBeforeScript2(t)
                                : this._state === j
                                ? this._stateBeforeScript3(t)
                                : this._state === G
                                ? this._stateBeforeScript4(t)
                                : this._state === F
                                ? this._stateBeforeScript5(t)
                                : this._state === z
                                ? this._stateAfterScript1(t)
                                : this._state === J
                                ? this._stateAfterScript2(t)
                                : this._state === Y
                                ? this._stateAfterScript3(t)
                                : this._state === Z
                                ? this._stateAfterScript4(t)
                                : this._state === X
                                ? this._stateAfterScript5(t)
                                : this._state === W
                                ? this._stateBeforeStyle1(t)
                                : this._state === K
                                ? this._stateBeforeStyle2(t)
                                : this._state === $
                                ? this._stateBeforeStyle3(t)
                                : this._state === Q
                                ? this._stateBeforeStyle4(t)
                                : this._state === tt
                                ? this._stateAfterStyle1(t)
                                : this._state === et
                                ? this._stateAfterStyle2(t)
                                : this._state === rt
                                ? this._stateAfterStyle3(t)
                                : this._state === nt
                                ? this._stateAfterStyle4(t)
                                : this._state === ot
                                ? this._stateBeforeEntity(t)
                                : this._state === it
                                ? this._stateBeforeNumericEntity(t)
                                : this._state === st
                                ? this._stateInNamedEntity(t)
                                : this._state === at
                                ? this._stateInNumericEntity(t)
                                : this._state === ct
                                ? this._stateInHexEntity(t)
                                : this._cbs.onerror(
                                      Error("unknown _state"),
                                      this._state,
                                  ),
                                this._index++;
                        }
                        this._cleanup();
                    }),
                    (mt.prototype.pause = function () {
                        this._running = !1;
                    }),
                    (mt.prototype.resume = function () {
                        (this._running = !0),
                            this._index < this._buffer.length && this._parse(),
                            this._ended && this._finish();
                    }),
                    (mt.prototype.end = function (t) {
                        this._ended &&
                            this._cbs.onerror(Error(".end() after done!")),
                            t && this.write(t),
                            (this._ended = !0),
                            this._running && this._finish();
                    }),
                    (mt.prototype._finish = function () {
                        this._sectionStart < this._index &&
                            this._handleTrailingData(),
                            this._cbs.onend();
                    }),
                    (mt.prototype._handleTrailingData = function () {
                        var t = this._buffer.substr(this._sectionStart);
                        this._state === O ||
                        this._state === U ||
                        this._state === I
                            ? this._cbs.oncdata(t)
                            : this._state === T ||
                              this._state === A ||
                              this._state === L
                            ? this._cbs.oncomment(t)
                            : this._state !== st || this._xmlMode
                            ? this._state !== at || this._xmlMode
                                ? this._state !== ct || this._xmlMode
                                    ? this._state !== u &&
                                      this._state !== g &&
                                      this._state !== y &&
                                      this._state !== b &&
                                      this._state !== m &&
                                      this._state !== w &&
                                      this._state !== v &&
                                      this._state !== _ &&
                                      this._state !== f &&
                                      this._cbs.ontext(t)
                                    : (this._decodeNumericEntity(3, 16),
                                      this._sectionStart < this._index &&
                                          ((this._state = this._baseState),
                                          this._handleTrailingData()))
                                : (this._decodeNumericEntity(2, 10),
                                  this._sectionStart < this._index &&
                                      ((this._state = this._baseState),
                                      this._handleTrailingData()))
                            : (this._parseLegacyEntity(),
                              this._sectionStart < this._index &&
                                  ((this._state = this._baseState),
                                  this._handleTrailingData()));
                    }),
                    (mt.prototype.reset = function () {
                        mt.call(
                            this,
                            {
                                xmlMode: this._xmlMode,
                                decodeEntities: this._decodeEntities,
                            },
                            this._cbs,
                        );
                    }),
                    (mt.prototype.getAbsoluteIndex = function () {
                        return this._bufferOffset + this._index;
                    }),
                    (mt.prototype._getSection = function () {
                        return this._buffer.substring(
                            this._sectionStart,
                            this._index,
                        );
                    }),
                    (mt.prototype._emitToken = function (t) {
                        this._cbs[t](this._getSection()),
                            (this._sectionStart = -1);
                    }),
                    (mt.prototype._emitPartial = function (t) {
                        this._baseState !== c
                            ? this._cbs.onattribdata(t)
                            : this._cbs.ontext(t);
                    });
            },
            3621: (t, e, r) => {
                t.exports = a;
                var n = r(763),
                    o = r(247).Writable,
                    i = r(2553).s,
                    s = r(8764).Buffer;
                function a(t, e) {
                    var r = (this._parser = new n(t, e)),
                        s = (this._decoder = new i());
                    o.call(this, { decodeStrings: !1 }),
                        this.once("finish", function () {
                            r.end(s.end());
                        });
                }
                r(5717)(a, o),
                    (a.prototype._write = function (t, e, r) {
                        t instanceof s && (t = this._decoder.write(t)),
                            this._parser.write(t),
                            r();
                    });
            },
            3719: (t, e, r) => {
                var n = r(763),
                    o = r(8753);
                function i(e, r) {
                    return delete t.exports[e], (t.exports[e] = r), r;
                }
                t.exports = {
                    Parser: n,
                    Tokenizer: r(9889),
                    ElementType: r(4431),
                    DomHandler: o,
                    get FeedHandler() {
                        return i("FeedHandler", r(3870));
                    },
                    get Stream() {
                        return i("Stream", r(9924));
                    },
                    get WritableStream() {
                        return i("WritableStream", r(3621));
                    },
                    get ProxyHandler() {
                        return i("ProxyHandler", r(6321));
                    },
                    get DomUtils() {
                        return i("DomUtils", r(2417));
                    },
                    get CollectingHandler() {
                        return i("CollectingHandler", r(5449));
                    },
                    DefaultHandler: o,
                    get RssHandler() {
                        return i("RssHandler", this.FeedHandler);
                    },
                    parseDOM: function (t, e) {
                        var r = new o(e);
                        return new n(r, e).end(t), r.dom;
                    },
                    parseFeed: function (e, r) {
                        var o = new t.exports.FeedHandler(r);
                        return new n(o, r).end(e), o.dom;
                    },
                    createDomStream: function (t, e, r) {
                        var i = new o(t, e, r);
                        return new n(i, e);
                    },
                    EVENTS: {
                        attribute: 2,
                        cdatastart: 0,
                        cdataend: 0,
                        text: 1,
                        processinginstruction: 2,
                        comment: 1,
                        commentend: 0,
                        closetag: 1,
                        opentag: 2,
                        opentagname: 1,
                        error: 1,
                        end: 0,
                    },
                };
            },
            645: (t, e) => {
                (e.read = function (t, e, r, n, o) {
                    var i,
                        s,
                        a = 8 * o - n - 1,
                        c = (1 << a) - 1,
                        l = c >> 1,
                        u = -7,
                        p = r ? o - 1 : 0,
                        h = r ? -1 : 1,
                        f = t[e + p];
                    for (
                        p += h, i = f & ((1 << -u) - 1), f >>= -u, u += a;
                        u > 0;
                        i = 256 * i + t[e + p], p += h, u -= 8
                    );
                    for (
                        s = i & ((1 << -u) - 1), i >>= -u, u += n;
                        u > 0;
                        s = 256 * s + t[e + p], p += h, u -= 8
                    );
                    if (0 === i) i = 1 - l;
                    else {
                        if (i === c) return s ? NaN : (1 / 0) * (f ? -1 : 1);
                        (s += Math.pow(2, n)), (i -= l);
                    }
                    return (f ? -1 : 1) * s * Math.pow(2, i - n);
                }),
                    (e.write = function (t, e, r, n, o, i) {
                        var s,
                            a,
                            c,
                            l = 8 * i - o - 1,
                            u = (1 << l) - 1,
                            p = u >> 1,
                            h =
                                23 === o
                                    ? Math.pow(2, -24) - Math.pow(2, -77)
                                    : 0,
                            f = n ? 0 : i - 1,
                            d = n ? 1 : -1,
                            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                        for (
                            e = Math.abs(e),
                                isNaN(e) || e === 1 / 0
                                    ? ((a = isNaN(e) ? 1 : 0), (s = u))
                                    : ((s = Math.floor(Math.log(e) / Math.LN2)),
                                      e * (c = Math.pow(2, -s)) < 1 &&
                                          (s--, (c *= 2)),
                                      (e +=
                                          s + p >= 1
                                              ? h / c
                                              : h * Math.pow(2, 1 - p)) *
                                          c >=
                                          2 && (s++, (c /= 2)),
                                      s + p >= u
                                          ? ((a = 0), (s = u))
                                          : s + p >= 1
                                          ? ((a = (e * c - 1) * Math.pow(2, o)),
                                            (s += p))
                                          : ((a =
                                                e *
                                                Math.pow(2, p - 1) *
                                                Math.pow(2, o)),
                                            (s = 0)));
                            o >= 8;
                            t[r + f] = 255 & a, f += d, a /= 256, o -= 8
                        );
                        for (
                            s = (s << o) | a, l += o;
                            l > 0;
                            t[r + f] = 255 & s, f += d, s /= 256, l -= 8
                        );
                        t[r + f - d] |= 128 * g;
                    });
            },
            5717: (t) => {
                "function" == typeof Object.create
                    ? (t.exports = function (t, e) {
                          e &&
                              ((t.super_ = e),
                              (t.prototype = Object.create(e.prototype, {
                                  constructor: {
                                      value: t,
                                      enumerable: !1,
                                      writable: !0,
                                      configurable: !0,
                                  },
                              })));
                      })
                    : (t.exports = function (t, e) {
                          if (e) {
                              t.super_ = e;
                              var r = function () {};
                              (r.prototype = e.prototype),
                                  (t.prototype = new r()),
                                  (t.prototype.constructor = t);
                          }
                      });
            },
            6240: (t) => {
                "use strict";
                t.exports = function (t) {
                    return "object" == typeof t && null !== t;
                };
            },
            3689: (t, e, r) => {
                "use strict";
                r.r(e),
                    r.d(e, {
                        ucs2decode: () => f,
                        ucs2encode: () => d,
                        decode: () => b,
                        encode: () => y,
                        toASCII: () => w,
                        toUnicode: () => v,
                        default: () => _,
                    });
                const n = 2147483647,
                    o = 36,
                    i = /^xn--/,
                    s = /[^\0-\x7E]/,
                    a = /[\x2E\u3002\uFF0E\uFF61]/g,
                    c = {
                        overflow:
                            "Overflow: input needs wider integers to process",
                        "not-basic":
                            "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input",
                    },
                    l = Math.floor,
                    u = String.fromCharCode;
                function p(t) {
                    throw new RangeError(c[t]);
                }
                function h(t, e) {
                    const r = t.split("@");
                    let n = "";
                    r.length > 1 && ((n = r[0] + "@"), (t = r[1]));
                    const o = (function (t, e) {
                        const r = [];
                        let n = t.length;
                        for (; n--; ) r[n] = e(t[n]);
                        return r;
                    })((t = t.replace(a, ".")).split("."), e).join(".");
                    return n + o;
                }
                function f(t) {
                    const e = [];
                    let r = 0;
                    const n = t.length;
                    for (; r < n; ) {
                        const o = t.charCodeAt(r++);
                        if (o >= 55296 && o <= 56319 && r < n) {
                            const n = t.charCodeAt(r++);
                            56320 == (64512 & n)
                                ? e.push(
                                      ((1023 & o) << 10) + (1023 & n) + 65536,
                                  )
                                : (e.push(o), r--);
                        } else e.push(o);
                    }
                    return e;
                }
                const d = (t) => String.fromCodePoint(...t),
                    g = function (t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                    },
                    m = function (t, e, r) {
                        let n = 0;
                        for (
                            t = r ? l(t / 700) : t >> 1, t += l(t / e);
                            t > 455;
                            n += o
                        )
                            t = l(t / 35);
                        return l(n + (36 * t) / (t + 38));
                    },
                    b = function (t) {
                        const e = [],
                            r = t.length;
                        let i = 0,
                            s = 128,
                            a = 72,
                            c = t.lastIndexOf("-");
                        c < 0 && (c = 0);
                        for (let r = 0; r < c; ++r)
                            t.charCodeAt(r) >= 128 && p("not-basic"),
                                e.push(t.charCodeAt(r));
                        for (let h = c > 0 ? c + 1 : 0; h < r; ) {
                            let c = i;
                            for (let e = 1, s = o; ; s += o) {
                                h >= r && p("invalid-input");
                                const c =
                                    (u = t.charCodeAt(h++)) - 48 < 10
                                        ? u - 22
                                        : u - 65 < 26
                                        ? u - 65
                                        : u - 97 < 26
                                        ? u - 97
                                        : o;
                                (c >= o || c > l((n - i) / e)) && p("overflow"),
                                    (i += c * e);
                                const f = s <= a ? 1 : s >= a + 26 ? 26 : s - a;
                                if (c < f) break;
                                const d = o - f;
                                e > l(n / d) && p("overflow"), (e *= d);
                            }
                            const f = e.length + 1;
                            (a = m(i - c, f, 0 == c)),
                                l(i / f) > n - s && p("overflow"),
                                (s += l(i / f)),
                                (i %= f),
                                e.splice(i++, 0, s);
                        }
                        var u;
                        return String.fromCodePoint(...e);
                    },
                    y = function (t) {
                        const e = [];
                        let r = (t = f(t)).length,
                            i = 128,
                            s = 0,
                            a = 72;
                        for (const r of t) r < 128 && e.push(u(r));
                        let c = e.length,
                            h = c;
                        for (c && e.push("-"); h < r; ) {
                            let r = n;
                            for (const e of t) e >= i && e < r && (r = e);
                            const f = h + 1;
                            r - i > l((n - s) / f) && p("overflow"),
                                (s += (r - i) * f),
                                (i = r);
                            for (const r of t)
                                if (
                                    (r < i && ++s > n && p("overflow"), r == i)
                                ) {
                                    let t = s;
                                    for (let r = o; ; r += o) {
                                        const n =
                                            r <= a
                                                ? 1
                                                : r >= a + 26
                                                ? 26
                                                : r - a;
                                        if (t < n) break;
                                        const i = t - n,
                                            s = o - n;
                                        e.push(u(g(n + (i % s), 0))),
                                            (t = l(i / s));
                                    }
                                    e.push(u(g(t, 0))),
                                        (a = m(s, f, h == c)),
                                        (s = 0),
                                        ++h;
                                }
                            ++s, ++i;
                        }
                        return e.join("");
                    },
                    v = function (t) {
                        return h(t, function (t) {
                            return i.test(t) ? b(t.slice(4).toLowerCase()) : t;
                        });
                    },
                    w = function (t) {
                        return h(t, function (t) {
                            return s.test(t) ? "xn--" + y(t) : t;
                        });
                    },
                    _ = {
                        version: "2.1.0",
                        ucs2: { decode: f, encode: d },
                        decode: b,
                        encode: y,
                        toASCII: w,
                        toUnicode: v,
                    };
            },
            9509: (t, e, r) => {
                var n = r(8764),
                    o = n.Buffer;
                function i(t, e) {
                    for (var r in t) e[r] = t[r];
                }
                function s(t, e, r) {
                    return o(t, e, r);
                }
                o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
                    ? (t.exports = n)
                    : (i(n, e), (e.Buffer = s)),
                    (s.prototype = Object.create(o.prototype)),
                    i(o, s),
                    (s.from = function (t, e, r) {
                        if ("number" == typeof t)
                            throw new TypeError(
                                "Argument must not be a number",
                            );
                        return o(t, e, r);
                    }),
                    (s.alloc = function (t, e, r) {
                        if ("number" != typeof t)
                            throw new TypeError("Argument must be a number");
                        var n = o(t);
                        return (
                            void 0 !== e
                                ? "string" == typeof r
                                    ? n.fill(e, r)
                                    : n.fill(e)
                                : n.fill(0),
                            n
                        );
                    }),
                    (s.allocUnsafe = function (t) {
                        if ("number" != typeof t)
                            throw new TypeError("Argument must be a number");
                        return o(t);
                    }),
                    (s.allocUnsafeSlow = function (t) {
                        if ("number" != typeof t)
                            throw new TypeError("Argument must be a number");
                        return n.SlowBuffer(t);
                    });
            },
            2553: (t, e, r) => {
                "use strict";
                var n = r(9509).Buffer,
                    o =
                        n.isEncoding ||
                        function (t) {
                            switch ((t = "" + t) && t.toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                case "raw":
                                    return !0;
                                default:
                                    return !1;
                            }
                        };
                function i(t) {
                    var e;
                    switch (
                        ((this.encoding = (function (t) {
                            var e = (function (t) {
                                if (!t) return "utf8";
                                for (var e; ; )
                                    switch (t) {
                                        case "utf8":
                                        case "utf-8":
                                            return "utf8";
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return "utf16le";
                                        case "latin1":
                                        case "binary":
                                            return "latin1";
                                        case "base64":
                                        case "ascii":
                                        case "hex":
                                            return t;
                                        default:
                                            if (e) return;
                                            (t = ("" + t).toLowerCase()),
                                                (e = !0);
                                    }
                            })(t);
                            if (
                                "string" != typeof e &&
                                (n.isEncoding === o || !o(t))
                            )
                                throw new Error("Unknown encoding: " + t);
                            return e || t;
                        })(t)),
                        this.encoding)
                    ) {
                        case "utf16le":
                            (this.text = c), (this.end = l), (e = 4);
                            break;
                        case "utf8":
                            (this.fillLast = a), (e = 4);
                            break;
                        case "base64":
                            (this.text = u), (this.end = p), (e = 3);
                            break;
                        default:
                            return (this.write = h), void (this.end = f);
                    }
                    (this.lastNeed = 0),
                        (this.lastTotal = 0),
                        (this.lastChar = n.allocUnsafe(e));
                }
                function s(t) {
                    return t <= 127
                        ? 0
                        : t >> 5 == 6
                        ? 2
                        : t >> 4 == 14
                        ? 3
                        : t >> 3 == 30
                        ? 4
                        : t >> 6 == 2
                        ? -1
                        : -2;
                }
                function a(t) {
                    var e = this.lastTotal - this.lastNeed,
                        r = (function (t, e, r) {
                            if (128 != (192 & e[0]))
                                return (t.lastNeed = 0), "�";
                            if (t.lastNeed > 1 && e.length > 1) {
                                if (128 != (192 & e[1]))
                                    return (t.lastNeed = 1), "�";
                                if (
                                    t.lastNeed > 2 &&
                                    e.length > 2 &&
                                    128 != (192 & e[2])
                                )
                                    return (t.lastNeed = 2), "�";
                            }
                        })(this, t);
                    return void 0 !== r
                        ? r
                        : this.lastNeed <= t.length
                        ? (t.copy(this.lastChar, e, 0, this.lastNeed),
                          this.lastChar.toString(
                              this.encoding,
                              0,
                              this.lastTotal,
                          ))
                        : (t.copy(this.lastChar, e, 0, t.length),
                          void (this.lastNeed -= t.length));
                }
                function c(t, e) {
                    if ((t.length - e) % 2 == 0) {
                        var r = t.toString("utf16le", e);
                        if (r) {
                            var n = r.charCodeAt(r.length - 1);
                            if (n >= 55296 && n <= 56319)
                                return (
                                    (this.lastNeed = 2),
                                    (this.lastTotal = 4),
                                    (this.lastChar[0] = t[t.length - 2]),
                                    (this.lastChar[1] = t[t.length - 1]),
                                    r.slice(0, -1)
                                );
                        }
                        return r;
                    }
                    return (
                        (this.lastNeed = 1),
                        (this.lastTotal = 2),
                        (this.lastChar[0] = t[t.length - 1]),
                        t.toString("utf16le", e, t.length - 1)
                    );
                }
                function l(t) {
                    var e = t && t.length ? this.write(t) : "";
                    if (this.lastNeed) {
                        var r = this.lastTotal - this.lastNeed;
                        return e + this.lastChar.toString("utf16le", 0, r);
                    }
                    return e;
                }
                function u(t, e) {
                    var r = (t.length - e) % 3;
                    return 0 === r
                        ? t.toString("base64", e)
                        : ((this.lastNeed = 3 - r),
                          (this.lastTotal = 3),
                          1 === r
                              ? (this.lastChar[0] = t[t.length - 1])
                              : ((this.lastChar[0] = t[t.length - 2]),
                                (this.lastChar[1] = t[t.length - 1])),
                          t.toString("base64", e, t.length - r));
                }
                function p(t) {
                    var e = t && t.length ? this.write(t) : "";
                    return this.lastNeed
                        ? e +
                              this.lastChar.toString(
                                  "base64",
                                  0,
                                  3 - this.lastNeed,
                              )
                        : e;
                }
                function h(t) {
                    return t.toString(this.encoding);
                }
                function f(t) {
                    return t && t.length ? this.write(t) : "";
                }
                (e.s = i),
                    (i.prototype.write = function (t) {
                        if (0 === t.length) return "";
                        var e, r;
                        if (this.lastNeed) {
                            if (void 0 === (e = this.fillLast(t))) return "";
                            (r = this.lastNeed), (this.lastNeed = 0);
                        } else r = 0;
                        return r < t.length
                            ? e
                                ? e + this.text(t, r)
                                : this.text(t, r)
                            : e || "";
                    }),
                    (i.prototype.end = function (t) {
                        var e = t && t.length ? this.write(t) : "";
                        return this.lastNeed ? e + "�" : e;
                    }),
                    (i.prototype.text = function (t, e) {
                        var r = (function (t, e, r) {
                            var n = e.length - 1;
                            if (n < r) return 0;
                            var o = s(e[n]);
                            return o >= 0
                                ? (o > 0 && (t.lastNeed = o - 1), o)
                                : --n < r || -2 === o
                                ? 0
                                : (o = s(e[n])) >= 0
                                ? (o > 0 && (t.lastNeed = o - 2), o)
                                : --n < r || -2 === o
                                ? 0
                                : (o = s(e[n])) >= 0
                                ? (o > 0 &&
                                      (2 === o
                                          ? (o = 0)
                                          : (t.lastNeed = o - 3)),
                                  o)
                                : 0;
                        })(this, t, e);
                        if (!this.lastNeed) return t.toString("utf8", e);
                        this.lastTotal = r;
                        var n = t.length - (r - this.lastNeed);
                        return (
                            t.copy(this.lastChar, 0, n),
                            t.toString("utf8", e, n)
                        );
                    }),
                    (i.prototype.fillLast = function (t) {
                        if (this.lastNeed <= t.length)
                            return (
                                t.copy(
                                    this.lastChar,
                                    this.lastTotal - this.lastNeed,
                                    0,
                                    this.lastNeed,
                                ),
                                this.lastChar.toString(
                                    this.encoding,
                                    0,
                                    this.lastTotal,
                                )
                            );
                        t.copy(
                            this.lastChar,
                            this.lastTotal - this.lastNeed,
                            0,
                            t.length,
                        ),
                            (this.lastNeed -= t.length);
                    });
            },
            3188: function (t, e) {
                "use strict";
                var r =
                        (this && this.__assign) ||
                        function () {
                            return (r =
                                Object.assign ||
                                function (t) {
                                    for (
                                        var e, r = 1, n = arguments.length;
                                        r < n;
                                        r++
                                    )
                                        for (var o in (e = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                o,
                                            ) && (t[o] = e[o]);
                                    return t;
                                }).apply(this, arguments);
                        },
                    n =
                        (this && this.__spreadArray) ||
                        function (t, e) {
                            for (
                                var r = 0, n = e.length, o = t.length;
                                r < n;
                                r++, o++
                            )
                                t[o] = e[r];
                            return t;
                        };
                (e.__esModule = !0), (e.Image = void 0);
                var o = (function () {
                    function t(t, e) {
                        (this.imageId =
                            "i" +
                            ("" + (Date.now() + Math.random())).replace(
                                ".",
                                "",
                            )),
                            (this.html = ""),
                            (this.state = {}),
                            (this.children = {}),
                            (this.debug = ""),
                            (this.position = n([], t)),
                            (this.props = r({}, e));
                    }
                    return (
                        (t.prototype.mount = function () {}),
                        (t.prototype.compile = function (t) {
                            var e = (
                                '\n        <div \n            id="' +
                                this.imageId +
                                '"\n            style="position: absolute;\n                flex-flow: column;\n                top: ' +
                                this.position[0] +
                                "%; \n                left: " +
                                this.position[1] +
                                "%; \n                width: " +
                                this.position[2] +
                                "%; \n                height: " +
                                this.position[3] +
                                "%;\n                " +
                                ("" === this.debug
                                    ? ""
                                    : "background-color: " + this.debug + ";") +
                                '"\n        >\n            ' +
                                t +
                                "\n        </div>\n        <style>\n        div#" +
                                this.imageId +
                                " {}\n        </style>\n        "
                            )
                                .replace(/\s\s+/g, " ")
                                .replace(/\n/g, "")
                                .replace(/ </g, "<")
                                .replace(/< /g, "<")
                                .replace(/> /g, ">")
                                .replace(/ >/g, ">");
                            return (this.html = e), e;
                        }),
                        (t.prototype.event = function (t) {
                            var e =
                                "r" +
                                ("" + (Date.now() + Math.random())).replace(
                                    ".",
                                    "",
                                );
                            return (this.page.events[e] = t), e;
                        }),
                        (t.prototype.image = function (t) {
                            var e = new Error().stack.split("\n")[2],
                                r =
                                    "" +
                                    (e.split(":").slice(-2)[0] +
                                        e
                                            .split(":")
                                            .slice(-1)[0]
                                            .replace(")", ""));
                            return r in this.children
                                ? (this.children[r].mount(),
                                  this.children[r].html)
                                : ((t.page = this.page),
                                  (this.children[r] = t),
                                  t.mount(),
                                  t.html);
                        }),
                        (t.prototype.getState = function (t) {
                            return this.state[t];
                        }),
                        (t.prototype.setState = function (t, e) {
                            (this.state[t] = e), this.page.update();
                        }),
                        (t.prototype.debugOn = function (t) {
                            void 0 === t && (t = "#ff0000"), (this.debug = t);
                        }),
                        (t.prototype.debugOff = function () {
                            this.debug = "";
                        }),
                        t
                    );
                })();
                e.Image = o;
            },
            3282: function (t, e, r) {
                "use strict";
                var n,
                    o =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var r in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            r,
                                        ) && (t[r] = e[r]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " +
                                        String(e) +
                                        " is not a constructor or null",
                                );
                            function r() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype =
                                    null === e
                                        ? Object.create(e)
                                        : ((r.prototype = e.prototype),
                                          new r()));
                        }),
                    i =
                        (this && this.__assign) ||
                        function () {
                            return (i =
                                Object.assign ||
                                function (t) {
                                    for (
                                        var e, r = 1, n = arguments.length;
                                        r < n;
                                        r++
                                    )
                                        for (var o in (e = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                o,
                                            ) && (t[o] = e[o]);
                                    return t;
                                }).apply(this, arguments);
                        };
                (e.__esModule = !0),
                    (e.Counter = e.Container = e.Container1 = void 0);
                var s = r(3188),
                    a = (function (t) {
                        function e(e, r) {
                            return t.call(this, e, r) || this;
                        }
                        return (
                            o(e, t),
                            (e.prototype.mount = function () {
                                this.compile(
                                    "\n        <div>\n            " +
                                        this.image(new c([0, 0, 100, 100])) +
                                        "\n        </div>\n        ",
                                );
                            }),
                            e
                        );
                    })(s.Image);
                e.Container1 = a;
                var c = (function (t) {
                    function e(e, r) {
                        return t.call(this, e, r) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.mount = function () {
                            this.compile(
                                "\n            <div>\n                " +
                                    this.image(
                                        new l([0, 0, 50, 50], {
                                            title: "Counter 1",
                                        }),
                                    ) +
                                    "\n                " +
                                    this.image(
                                        new l([50, 50, 50, 50], {
                                            title: "Counter 2",
                                        }),
                                    ) +
                                    "\n            </div>\n        ",
                            );
                        }),
                        e
                    );
                })(s.Image);
                e.Container = c;
                var l = (function (t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        return (n.state = i(i({}, r), { count: 0 })), n;
                    }
                    return (
                        o(e, t),
                        (e.prototype.mount = function () {
                            var t = this;
                            this.compile(
                                "\n            <div>\n                " +
                                    this.getState("title") +
                                    "\n            </div>\n            <div>\n                " +
                                    this.getState("count") +
                                    "\n            </div>\n            <button onClick=" +
                                    this.event(function () {
                                        t.setState(
                                            "count",
                                            t.getState("count") + 1,
                                        );
                                    }) +
                                    ">A nice new button</button>\n            <style>\n                * {font-size: 25px;}\n            </style>\n        ",
                            );
                        }),
                        e
                    );
                })(s.Image);
                e.Counter = l;
            },
            9985: (t, e, r) => {
                "use strict";
                (e.__esModule = !0), (e.Page = void 0);
                var n = r(7921),
                    o = r(9720),
                    i = r(4935),
                    s = r(4282),
                    a = r(4268),
                    c = r(5145)({ VNode: s, VText: a }),
                    l = (function () {
                        function t(t) {
                            (this.events = {}), (this.name = t);
                        }
                        return (
                            (t.prototype.addRootImage = function (t) {
                                (this.child = t),
                                    (this.child.page = this),
                                    this.child.mount(),
                                    (this.newTree = this.convertHTMLWithKey(
                                        this.child.html,
                                    )),
                                    (this.currentNode = i(this.newTree[0])),
                                    document.body.appendChild(this.currentNode),
                                    this.replaceevents(this.newTree),
                                    (this.currentTree = this.newTree);
                            }),
                            (t.prototype.update = function () {
                                (this.events = {}),
                                    this.child.mount(),
                                    (this.newTree = this.convertHTMLWithKey(
                                        this.child.html,
                                    )),
                                    this.render();
                            }),
                            (t.prototype.render = function () {
                                var t = n(this.currentTree[0], this.newTree[0]);
                                (this.currentNode = o(this.currentNode, t)),
                                    this.replaceevents(this.newTree),
                                    (this.currentTree = this.newTree);
                            }),
                            (t.prototype.convertHTMLWithKey = function (t) {
                                return c(
                                    {
                                        getVNodeKey: function (t) {
                                            return t.id;
                                        },
                                    },
                                    t,
                                );
                            }),
                            (t.prototype.replaceevents = function (t) {
                                var e = this;
                                t.forEach(function (t) {
                                    if (
                                        "style" !== t.tagName &&
                                        void 0 !== t.tagName
                                    ) {
                                        for (var r in t.properties.attributes)
                                            if (
                                                t.properties.attributes[r] in
                                                e.events
                                            ) {
                                                var n = r.toLowerCase(),
                                                    o =
                                                        t.properties.attributes[
                                                            r
                                                        ];
                                                return void (document.querySelector(
                                                    "[" + n + "=" + o + "]",
                                                )[n] = e.events[o]);
                                            }
                                        e.replaceevents(t.children);
                                    }
                                });
                            }),
                            t
                        );
                    })();
                e.Page = l;
            },
            4935: (t, e, r) => {
                var n = r(3513);
                t.exports = n;
            },
            7921: (t, e, r) => {
                var n = r(6741);
                t.exports = n;
            },
            9720: (t, e, r) => {
                var n = r(6943);
                t.exports = n;
            },
            6672: (t, e, r) => {
                var n = r(6240),
                    o = r(7265);
                function i(t, e, r, n) {
                    if (n) {
                        var i = n[e];
                        if (o(i)) i.unhook && i.unhook(t, e, r);
                        else if ("attributes" === e)
                            for (var s in i) t.removeAttribute(s);
                        else if ("style" === e)
                            for (var a in i) t.style[a] = "";
                        else t[e] = "string" == typeof i ? "" : null;
                    }
                }
                function s(t, e, r, o, i) {
                    var s = r ? r[o] : void 0;
                    if ("attributes" !== o)
                        if (s && n(s) && a(s) !== a(i)) t[o] = i;
                        else {
                            n(t[o]) || (t[o] = {});
                            var c = "style" === o ? "" : void 0;
                            for (var l in i) {
                                var u = i[l];
                                t[o][l] = void 0 === u ? c : u;
                            }
                        }
                    else
                        for (var p in i) {
                            var h = i[p];
                            void 0 === h
                                ? t.removeAttribute(p)
                                : t.setAttribute(p, h);
                        }
                }
                function a(t) {
                    return Object.getPrototypeOf
                        ? Object.getPrototypeOf(t)
                        : t.__proto__
                        ? t.__proto__
                        : t.constructor
                        ? t.constructor.prototype
                        : void 0;
                }
                t.exports = function (t, e, r) {
                    for (var a in e) {
                        var c = e[a];
                        void 0 === c
                            ? i(t, a, c, r)
                            : o(c)
                            ? (i(t, a, c, r),
                              c.hook && c.hook(t, a, r ? r[a] : void 0))
                            : n(c)
                            ? s(t, 0, r, a, c)
                            : (t[a] = c);
                    }
                };
            },
            3513: (t, e, r) => {
                var n = r(9144),
                    o = r(6672),
                    i = r(5170),
                    s = r(6221),
                    a = r(4097),
                    c = r(6078);
                t.exports = function t(e, r) {
                    var l = (r && r.document) || n,
                        u = r ? r.warn : null;
                    if (((e = c(e).a), a(e))) return e.init();
                    if (s(e)) return l.createTextNode(e.text);
                    if (!i(e))
                        return (
                            u && u("Item is not a valid virtual dom node", e),
                            null
                        );
                    var p =
                            null === e.namespace
                                ? l.createElement(e.tagName)
                                : l.createElementNS(e.namespace, e.tagName),
                        h = e.properties;
                    o(p, h);
                    for (var f = e.children, d = 0; d < f.length; d++) {
                        var g = t(f[d], r);
                        g && p.appendChild(g);
                    }
                    return p;
                };
            },
            8992: (t) => {
                var e = {};
                function r(t, o, i, s, a) {
                    if (((s = s || {}), t)) {
                        n(i, a, a) && (s[a] = t);
                        var c = o.children;
                        if (c)
                            for (
                                var l = t.childNodes, u = 0;
                                u < o.children.length;
                                u++
                            ) {
                                a += 1;
                                var p = c[u] || e,
                                    h = a + (p.count || 0);
                                n(i, a, h) && r(l[u], p, i, s, a), (a = h);
                            }
                    }
                    return s;
                }
                function n(t, e, r) {
                    if (0 === t.length) return !1;
                    for (var n, o, i = 0, s = t.length - 1; i <= s; ) {
                        if (((o = t[(n = ((s + i) / 2) >> 0)]), i === s))
                            return o >= e && o <= r;
                        if (o < e) i = n + 1;
                        else {
                            if (!(o > r)) return !0;
                            s = n - 1;
                        }
                    }
                    return !1;
                }
                function o(t, e) {
                    return t > e ? 1 : -1;
                }
                t.exports = function (t, e, n, i) {
                    return n && 0 !== n.length
                        ? (n.sort(o), r(t, e, n, i, 0))
                        : {};
                };
            },
            9120: (t, e, r) => {
                var n = r(6672),
                    o = r(4097),
                    i = r(8057),
                    s = r(6670);
                function a(t, e) {
                    "function" == typeof e.destroy && o(e) && e.destroy(t);
                }
                t.exports = function (t, e, r) {
                    var o,
                        c,
                        l = t.type,
                        u = t.vNode,
                        p = t.patch;
                    switch (l) {
                        case i.REMOVE:
                            return (function (t, e) {
                                var r = t.parentNode;
                                return r && r.removeChild(t), a(t, e), null;
                            })(e, u);
                        case i.INSERT:
                            return (function (t, e, r) {
                                var n = r.render(e, r);
                                return t && t.appendChild(n), t;
                            })(e, p, r);
                        case i.VTEXT:
                            return (function (t, e, r, n) {
                                var o;
                                if (3 === t.nodeType)
                                    t.replaceData(0, t.length, r.text), (o = t);
                                else {
                                    var i = t.parentNode;
                                    (o = n.render(r, n)),
                                        i && o !== t && i.replaceChild(o, t);
                                }
                                return o;
                            })(e, 0, p, r);
                        case i.WIDGET:
                            return (function (t, e, r, n) {
                                var o,
                                    i = s(e, r);
                                o = i ? r.update(e, t) || t : n.render(r, n);
                                var c = t.parentNode;
                                return (
                                    c && o !== t && c.replaceChild(o, t),
                                    i || a(t, e),
                                    o
                                );
                            })(e, u, p, r);
                        case i.VNODE:
                            return (function (t, e, r, n) {
                                var o = t.parentNode,
                                    i = n.render(r, n);
                                return o && i !== t && o.replaceChild(i, t), i;
                            })(e, 0, p, r);
                        case i.ORDER:
                            return (
                                (function (t, e) {
                                    for (
                                        var r,
                                            n,
                                            o,
                                            i = t.childNodes,
                                            s = {},
                                            a = 0;
                                        a < e.removes.length;
                                        a++
                                    )
                                        (r = i[(n = e.removes[a]).from]),
                                            n.key && (s[n.key] = r),
                                            t.removeChild(r);
                                    for (
                                        var c = i.length, l = 0;
                                        l < e.inserts.length;
                                        l++
                                    )
                                        (r = s[(o = e.inserts[l]).key]),
                                            t.insertBefore(
                                                r,
                                                o.to >= c++ ? null : i[o.to],
                                            );
                                })(e, p),
                                e
                            );
                        case i.PROPS:
                            return n(e, p, u.properties), e;
                        case i.THUNK:
                            return (
                                (o = e),
                                (c = r.patch(e, p, r)),
                                o &&
                                    c &&
                                    o !== c &&
                                    o.parentNode &&
                                    o.parentNode.replaceChild(c, o),
                                c
                            );
                        default:
                            return e;
                    }
                };
            },
            6943: (t, e, r) => {
                var n = r(9144),
                    o = r(7362),
                    i = r(3513),
                    s = r(8992),
                    a = r(9120);
                function c(t, e, r) {
                    var o = (function (t) {
                        var e = [];
                        for (var r in t) "a" !== r && e.push(Number(r));
                        return e;
                    })(e);
                    if (0 === o.length) return t;
                    var i = s(t, e.a, o),
                        a = t.ownerDocument;
                    r.document || a === n || (r.document = a);
                    for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        t = l(t, i[u], e[u], r);
                    }
                    return t;
                }
                function l(t, e, r, n) {
                    if (!e) return t;
                    var i;
                    if (o(r))
                        for (var s = 0; s < r.length; s++)
                            (i = a(r[s], e, n)), e === t && (t = i);
                    else (i = a(r, e, n)), e === t && (t = i);
                    return t;
                }
                t.exports = function t(e, r, n) {
                    return (
                        ((n = n || {}).patch =
                            n.patch && n.patch !== t ? n.patch : c),
                        (n.render = n.render || i),
                        n.patch(e, r, n)
                    );
                };
            },
            6670: (t, e, r) => {
                var n = r(4097);
                t.exports = function (t, e) {
                    return (
                        !(!n(t) || !n(e)) &&
                        ("name" in t && "name" in e
                            ? t.id === e.id
                            : t.init === e.init)
                    );
                };
            },
            6078: (t, e, r) => {
                var n = r(5170),
                    o = r(6221),
                    i = r(4097),
                    s = r(1057);
                function a(t, e) {
                    var r = t.vnode;
                    if (
                        (r || (r = t.vnode = t.render(e)),
                        !(n(r) || o(r) || i(r)))
                    )
                        throw new Error("thunk did not return a valid node");
                    return r;
                }
                t.exports = function (t, e) {
                    var r = t,
                        n = e;
                    return (
                        s(e) && (n = a(e, t)),
                        s(t) && (r = a(t, null)),
                        { a: r, b: n }
                    );
                };
            },
            1057: (t) => {
                t.exports = function (t) {
                    return t && "Thunk" === t.type;
                };
            },
            7265: (t) => {
                t.exports = function (t) {
                    return (
                        t &&
                        (("function" == typeof t.hook &&
                            !t.hasOwnProperty("hook")) ||
                            ("function" == typeof t.unhook &&
                                !t.hasOwnProperty("unhook")))
                    );
                };
            },
            5170: (t, e, r) => {
                var n = r(9962);
                t.exports = function (t) {
                    return t && "VirtualNode" === t.type && t.version === n;
                };
            },
            6221: (t, e, r) => {
                var n = r(9962);
                t.exports = function (t) {
                    return t && "VirtualText" === t.type && t.version === n;
                };
            },
            4097: (t) => {
                t.exports = function (t) {
                    return t && "Widget" === t.type;
                };
            },
            9962: (t) => {
                t.exports = "2";
            },
            4282: (t, e, r) => {
                var n = r(9962),
                    o = r(5170),
                    i = r(4097),
                    s = r(1057),
                    a = r(7265);
                t.exports = u;
                var c = {},
                    l = [];
                function u(t, e, r, n, u) {
                    (this.tagName = t),
                        (this.properties = e || c),
                        (this.children = r || l),
                        (this.key = null != n ? String(n) : void 0),
                        (this.namespace = "string" == typeof u ? u : null);
                    var p,
                        h = (r && r.length) || 0,
                        f = 0,
                        d = !1,
                        g = !1,
                        m = !1;
                    for (var b in e)
                        if (e.hasOwnProperty(b)) {
                            var y = e[b];
                            a(y) && y.unhook && (p || (p = {}), (p[b] = y));
                        }
                    for (var v = 0; v < h; v++) {
                        var w = r[v];
                        o(w)
                            ? ((f += w.count || 0),
                              !d && w.hasWidgets && (d = !0),
                              !g && w.hasThunks && (g = !0),
                              m || (!w.hooks && !w.descendantHooks) || (m = !0))
                            : !d && i(w)
                            ? "function" == typeof w.destroy && (d = !0)
                            : !g && s(w) && (g = !0);
                    }
                    (this.count = h + f),
                        (this.hasWidgets = d),
                        (this.hasThunks = g),
                        (this.hooks = p),
                        (this.descendantHooks = m);
                }
                (u.prototype.version = n), (u.prototype.type = "VirtualNode");
            },
            8057: (t, e, r) => {
                var n = r(9962);
                function o(t, e, r) {
                    (this.type = Number(t)), (this.vNode = e), (this.patch = r);
                }
                (o.NONE = 0),
                    (o.VTEXT = 1),
                    (o.VNODE = 2),
                    (o.WIDGET = 3),
                    (o.PROPS = 4),
                    (o.ORDER = 5),
                    (o.INSERT = 6),
                    (o.REMOVE = 7),
                    (o.THUNK = 8),
                    (t.exports = o),
                    (o.prototype.version = n),
                    (o.prototype.type = "VirtualPatch");
            },
            4268: (t, e, r) => {
                var n = r(9962);
                function o(t) {
                    this.text = String(t);
                }
                (t.exports = o),
                    (o.prototype.version = n),
                    (o.prototype.type = "VirtualText");
            },
            9973: (t, e, r) => {
                var n = r(6240),
                    o = r(7265);
                function i(t) {
                    return Object.getPrototypeOf
                        ? Object.getPrototypeOf(t)
                        : t.__proto__
                        ? t.__proto__
                        : t.constructor
                        ? t.constructor.prototype
                        : void 0;
                }
                t.exports = function t(e, r) {
                    var s;
                    for (var a in e) {
                        a in r || ((s = s || {})[a] = void 0);
                        var c = e[a],
                            l = r[a];
                        if (c !== l)
                            if (n(c) && n(l))
                                if (i(l) !== i(c)) (s = s || {})[a] = l;
                                else if (o(l)) (s = s || {})[a] = l;
                                else {
                                    var u = t(c, l);
                                    u && ((s = s || {})[a] = u);
                                }
                            else (s = s || {})[a] = l;
                    }
                    for (var p in r) p in e || ((s = s || {})[p] = r[p]);
                    return s;
                };
            },
            6741: (t, e, r) => {
                var n = r(7362),
                    o = r(8057),
                    i = r(5170),
                    s = r(6221),
                    a = r(4097),
                    c = r(1057),
                    l = r(6078),
                    u = r(9973);
                function p(t, e) {
                    var r = { a: t };
                    return h(t, e, r, 0), r;
                }
                function h(t, e, r, n) {
                    if (t !== e) {
                        var l = r[n],
                            p = !1;
                        if (c(t) || c(e)) g(t, e, r, n);
                        else if (null == e)
                            a(t) || (f(t, r, n), (l = r[n])),
                                (l = v(l, new o(o.REMOVE, t, e)));
                        else if (i(e))
                            if (i(t))
                                if (
                                    t.tagName === e.tagName &&
                                    t.namespace === e.namespace &&
                                    t.key === e.key
                                ) {
                                    var d = u(t.properties, e.properties);
                                    d && (l = v(l, new o(o.PROPS, t, d))),
                                        (l = (function (t, e, r, n, s) {
                                            for (
                                                var a = t.children,
                                                    c = (function (t, e) {
                                                        var r = y(e),
                                                            n = r.keys,
                                                            o = r.free;
                                                        if (
                                                            o.length ===
                                                            e.length
                                                        )
                                                            return {
                                                                children: e,
                                                                moves: null,
                                                            };
                                                        var i = y(t),
                                                            s = i.keys;
                                                        if (
                                                            i.free.length ===
                                                            t.length
                                                        )
                                                            return {
                                                                children: e,
                                                                moves: null,
                                                            };
                                                        for (
                                                            var a = [],
                                                                c = 0,
                                                                l = o.length,
                                                                u = 0,
                                                                p = 0;
                                                            p < t.length;
                                                            p++
                                                        ) {
                                                            var h,
                                                                f = t[p];
                                                            f.key
                                                                ? n.hasOwnProperty(
                                                                      f.key,
                                                                  )
                                                                    ? ((h =
                                                                          n[
                                                                              f
                                                                                  .key
                                                                          ]),
                                                                      a.push(
                                                                          e[h],
                                                                      ))
                                                                    : ((h =
                                                                          p -
                                                                          u++),
                                                                      a.push(
                                                                          null,
                                                                      ))
                                                                : c < l
                                                                ? ((h = o[c++]),
                                                                  a.push(e[h]))
                                                                : ((h =
                                                                      p - u++),
                                                                  a.push(null));
                                                        }
                                                        for (
                                                            var d =
                                                                    c >=
                                                                    o.length
                                                                        ? e.length
                                                                        : o[c],
                                                                g = 0;
                                                            g < e.length;
                                                            g++
                                                        ) {
                                                            var m = e[g];
                                                            m.key
                                                                ? s.hasOwnProperty(
                                                                      m.key,
                                                                  ) || a.push(m)
                                                                : g >= d &&
                                                                  a.push(m);
                                                        }
                                                        for (
                                                            var v,
                                                                w = a.slice(),
                                                                _ = 0,
                                                                q = [],
                                                                x = [],
                                                                E = 0;
                                                            E < e.length;

                                                        ) {
                                                            var S = e[E];
                                                            for (
                                                                v = w[_];
                                                                null === v &&
                                                                w.length;

                                                            )
                                                                q.push(
                                                                    b(
                                                                        w,
                                                                        _,
                                                                        null,
                                                                    ),
                                                                ),
                                                                    (v = w[_]);
                                                            v && v.key === S.key
                                                                ? (_++, E++)
                                                                : S.key
                                                                ? (v &&
                                                                  v.key &&
                                                                  n[v.key] !==
                                                                      E + 1
                                                                      ? (q.push(
                                                                            b(
                                                                                w,
                                                                                _,
                                                                                v.key,
                                                                            ),
                                                                        ),
                                                                        (v =
                                                                            w[
                                                                                _
                                                                            ]) &&
                                                                        v.key ===
                                                                            S.key
                                                                            ? _++
                                                                            : x.push(
                                                                                  {
                                                                                      key: S.key,
                                                                                      to: E,
                                                                                  },
                                                                              ))
                                                                      : x.push({
                                                                            key: S.key,
                                                                            to: E,
                                                                        }),
                                                                  E++)
                                                                : v &&
                                                                  v.key &&
                                                                  q.push(
                                                                      b(
                                                                          w,
                                                                          _,
                                                                          v.key,
                                                                      ),
                                                                  );
                                                        }
                                                        for (; _ < w.length; )
                                                            (v = w[_]),
                                                                q.push(
                                                                    b(
                                                                        w,
                                                                        _,
                                                                        v &&
                                                                            v.key,
                                                                    ),
                                                                );
                                                        return q.length !== u ||
                                                            x.length
                                                            ? {
                                                                  children: a,
                                                                  moves: {
                                                                      removes:
                                                                          q,
                                                                      inserts:
                                                                          x,
                                                                  },
                                                              }
                                                            : {
                                                                  children: a,
                                                                  moves: null,
                                                              };
                                                    })(a, e.children),
                                                    l = c.children,
                                                    u = a.length,
                                                    p = l.length,
                                                    f = u > p ? u : p,
                                                    d = 0;
                                                d < f;
                                                d++
                                            ) {
                                                var g = a[d],
                                                    m = l[d];
                                                (s += 1),
                                                    g
                                                        ? h(g, m, r, s)
                                                        : m &&
                                                          (n = v(
                                                              n,
                                                              new o(
                                                                  o.INSERT,
                                                                  null,
                                                                  m,
                                                              ),
                                                          )),
                                                    i(g) &&
                                                        g.count &&
                                                        (s += g.count);
                                            }
                                            return (
                                                c.moves &&
                                                    (n = v(
                                                        n,
                                                        new o(
                                                            o.ORDER,
                                                            t,
                                                            c.moves,
                                                        ),
                                                    )),
                                                n
                                            );
                                        })(t, e, r, l, n));
                                } else
                                    (l = v(l, new o(o.VNODE, t, e))), (p = !0);
                            else (l = v(l, new o(o.VNODE, t, e))), (p = !0);
                        else
                            s(e)
                                ? s(t)
                                    ? t.text !== e.text &&
                                      (l = v(l, new o(o.VTEXT, t, e)))
                                    : ((l = v(l, new o(o.VTEXT, t, e))),
                                      (p = !0))
                                : a(e) &&
                                  (a(t) || (p = !0),
                                  (l = v(l, new o(o.WIDGET, t, e))));
                        l && (r[n] = l), p && f(t, r, n);
                    }
                }
                function f(t, e, r) {
                    m(t, e, r), d(t, e, r);
                }
                function d(t, e, r) {
                    if (a(t))
                        "function" == typeof t.destroy &&
                            (e[r] = v(e[r], new o(o.REMOVE, t, null)));
                    else if (i(t) && (t.hasWidgets || t.hasThunks))
                        for (
                            var n = t.children, s = n.length, l = 0;
                            l < s;
                            l++
                        ) {
                            var u = n[l];
                            d(u, e, (r += 1)),
                                i(u) && u.count && (r += u.count);
                        }
                    else c(t) && g(t, null, e, r);
                }
                function g(t, e, r, n) {
                    var i = l(t, e),
                        s = p(i.a, i.b);
                    (function (t) {
                        for (var e in t) if ("a" !== e) return !0;
                        return !1;
                    })(s) && (r[n] = new o(o.THUNK, null, s));
                }
                function m(t, e, r) {
                    if (i(t)) {
                        if (
                            (t.hooks &&
                                (e[r] = v(
                                    e[r],
                                    new o(
                                        o.PROPS,
                                        t,
                                        (function (t) {
                                            var e = {};
                                            for (var r in t) e[r] = void 0;
                                            return e;
                                        })(t.hooks),
                                    ),
                                )),
                            t.descendantHooks || t.hasThunks)
                        )
                            for (
                                var n = t.children, s = n.length, a = 0;
                                a < s;
                                a++
                            ) {
                                var l = n[a];
                                m(l, e, (r += 1)),
                                    i(l) && l.count && (r += l.count);
                            }
                    } else c(t) && g(t, null, e, r);
                }
                function b(t, e, r) {
                    return t.splice(e, 1), { from: e, key: r };
                }
                function y(t) {
                    for (var e = {}, r = [], n = t.length, o = 0; o < n; o++) {
                        var i = t[o];
                        i.key ? (e[i.key] = o) : r.push(o);
                    }
                    return { keys: e, free: r };
                }
                function v(t, e) {
                    return t ? (n(t) ? t.push(e) : (t = [t, e]), t) : e;
                }
                t.exports = p;
            },
            7362: (t) => {
                var e = Array.isArray,
                    r = Object.prototype.toString;
                t.exports =
                    e ||
                    function (t) {
                        return "[object Array]" === r.call(t);
                    };
            },
            5893: () => {},
            247: () => {},
        },
        e = {};
    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var i = (e[n] = { exports: {} });
        return t[n].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.d = (t, e) => {
        for (var n in e)
            r.o(e, n) &&
                !r.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
        (r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (r.r = (t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (() => {
            "use strict";
            var t = r(3282);
            new (r(9985).Page)("counter").addRootImage(
                new t.Container1([0, 0, 50, 50]),
            );
        })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1zZXJpYWxpemVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tc2VyaWFsaXplci9ub2RlX21vZHVsZXMvZG9tZWxlbWVudHR5cGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tc2VyaWFsaXplci9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tc2VyaWFsaXplci9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tZWxlbWVudHR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL2xlZ2FjeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL21hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3F1ZXJ5aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvdHJhdmVyc2FsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnQvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnQvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtdG8tdmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC10by12ZG9tL2xpYi9jb252ZXJ0LXRhZy1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sLXRvLXZkb20vbGliL2h0bWwtdG8tdmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC10by12ZG9tL2xpYi9odG1scGFyc2VyLXRvLXZkb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtdG8tdmRvbS9saWIvcGFyc2UtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL0NvbGxlY3RpbmdIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1scGFyc2VyMi9saWIvRmVlZEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Qcm94eUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9TdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Ub2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Xcml0YWJsZVN0cmVhbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3B1bnljb2RlL3B1bnljb2RlLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmluZ19kZWNvZGVyL2xpYi9zdHJpbmdfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vY2tpbmcvbW9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9wYWdlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vYXBwbHktcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9kb20taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vcGF0Y2gtb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vdXBkYXRlLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaGFuZGxlLXRodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy10aHVuay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtdmhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zub2RlL2lzLXZub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy12dGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92bm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvdnBhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92dGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdnRyZWUvZGlmZi1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdnRyZWUvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveC1pcy1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXhwb3J0cyIsImJ5dGVMZW5ndGgiLCJiNjQiLCJsZW5zIiwiZ2V0TGVucyIsInZhbGlkTGVuIiwicGxhY2VIb2xkZXJzTGVuIiwidG9CeXRlQXJyYXkiLCJ0bXAiLCJpIiwiYXJyIiwiQXJyIiwiX2J5dGVMZW5ndGgiLCJjdXJCeXRlIiwibGVuIiwicmV2TG9va3VwIiwiY2hhckNvZGVBdCIsImZyb21CeXRlQXJyYXkiLCJ1aW50OCIsImxlbmd0aCIsImV4dHJhQnl0ZXMiLCJwYXJ0cyIsIm1heENodW5rTGVuZ3RoIiwibGVuMiIsInB1c2giLCJlbmNvZGVDaHVuayIsImxvb2t1cCIsImpvaW4iLCJVaW50OEFycmF5IiwiQXJyYXkiLCJjb2RlIiwiRXJyb3IiLCJpbmRleE9mIiwic3RhcnQiLCJlbmQiLCJudW0iLCJvdXRwdXQiLCJiYXNlNjQiLCJpZWVlNzU0IiwiY3VzdG9tSW5zcGVjdFN5bWJvbCIsIlN5bWJvbCIsIkJ1ZmZlciIsIlNsb3dCdWZmZXIiLCJhbGxvYyIsIklOU1BFQ1RfTUFYX0JZVEVTIiwiS19NQVhfTEVOR1RIIiwiY3JlYXRlQnVmZmVyIiwiUmFuZ2VFcnJvciIsImJ1ZiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiYXJnIiwiZW5jb2RpbmdPck9mZnNldCIsIlR5cGVFcnJvciIsImFsbG9jVW5zYWZlIiwiZnJvbSIsInZhbHVlIiwic3RyaW5nIiwiZW5jb2RpbmciLCJpc0VuY29kaW5nIiwiYWN0dWFsIiwid3JpdGUiLCJzbGljZSIsImZyb21TdHJpbmciLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImFycmF5VmlldyIsImlzSW5zdGFuY2UiLCJjb3B5IiwiZnJvbUFycmF5QnVmZmVyIiwiYnVmZmVyIiwiYnl0ZU9mZnNldCIsImZyb21BcnJheUxpa2UiLCJmcm9tQXJyYXlWaWV3IiwiU2hhcmVkQXJyYXlCdWZmZXIiLCJ2YWx1ZU9mIiwiYiIsIm9iaiIsImlzQnVmZmVyIiwiY2hlY2tlZCIsInVuZGVmaW5lZCIsIm51bWJlcklzTmFOIiwidHlwZSIsImlzQXJyYXkiLCJkYXRhIiwiZnJvbU9iamVjdCIsInRvUHJpbWl0aXZlIiwiYXNzZXJ0U2l6ZSIsInNpemUiLCJhcnJheSIsInRvU3RyaW5nIiwibXVzdE1hdGNoIiwiYXJndW1lbnRzIiwibG93ZXJlZENhc2UiLCJ1dGY4VG9CeXRlcyIsImJhc2U2NFRvQnl0ZXMiLCJ0b0xvd2VyQ2FzZSIsInNsb3dUb1N0cmluZyIsInRoaXMiLCJoZXhTbGljZSIsInV0ZjhTbGljZSIsImFzY2lpU2xpY2UiLCJsYXRpbjFTbGljZSIsImJhc2U2NFNsaWNlIiwidXRmMTZsZVNsaWNlIiwic3dhcCIsIm4iLCJtIiwiYmlkaXJlY3Rpb25hbEluZGV4T2YiLCJ2YWwiLCJkaXIiLCJhcnJheUluZGV4T2YiLCJjYWxsIiwibGFzdEluZGV4T2YiLCJpbmRleFNpemUiLCJhcnJMZW5ndGgiLCJ2YWxMZW5ndGgiLCJTdHJpbmciLCJyZWFkIiwicmVhZFVJbnQxNkJFIiwiZm91bmRJbmRleCIsImZvdW5kIiwiaiIsImhleFdyaXRlIiwib2Zmc2V0IiwiTnVtYmVyIiwicmVtYWluaW5nIiwic3RyTGVuIiwicGFyc2VkIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJ1dGY4V3JpdGUiLCJibGl0QnVmZmVyIiwiYXNjaWlXcml0ZSIsInN0ciIsImJ5dGVBcnJheSIsImFzY2lpVG9CeXRlcyIsImJhc2U2NFdyaXRlIiwidWNzMldyaXRlIiwidW5pdHMiLCJjIiwiaGkiLCJsbyIsInV0ZjE2bGVUb0J5dGVzIiwiTWF0aCIsIm1pbiIsInJlcyIsImZpcnN0Qnl0ZSIsImNvZGVQb2ludCIsImJ5dGVzUGVyU2VxdWVuY2UiLCJzZWNvbmRCeXRlIiwidGhpcmRCeXRlIiwiZm91cnRoQnl0ZSIsInRlbXBDb2RlUG9pbnQiLCJjb2RlUG9pbnRzIiwiTUFYX0FSR1VNRU5UU19MRU5HVEgiLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsImRlY29kZUNvZGVQb2ludHNBcnJheSIsImtNYXhMZW5ndGgiLCJUWVBFRF9BUlJBWV9TVVBQT1JUIiwicHJvdG8iLCJmb28iLCJlIiwidHlwZWRBcnJheVN1cHBvcnQiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJwb29sU2l6ZSIsImZpbGwiLCJhbGxvY1Vuc2FmZVNsb3ciLCJfaXNCdWZmZXIiLCJjb21wYXJlIiwiYSIsIngiLCJ5IiwiY29uY2F0IiwibGlzdCIsInBvcyIsInNldCIsInN3YXAxNiIsInN3YXAzMiIsInN3YXA2NCIsInRvTG9jYWxlU3RyaW5nIiwiZXF1YWxzIiwiaW5zcGVjdCIsIm1heCIsInJlcGxhY2UiLCJ0cmltIiwidGFyZ2V0IiwidGhpc1N0YXJ0IiwidGhpc0VuZCIsInRoaXNDb3B5IiwidGFyZ2V0Q29weSIsImluY2x1ZGVzIiwiaXNGaW5pdGUiLCJ0b0pTT04iLCJfYXJyIiwicmV0Iiwib3V0IiwiaGV4U2xpY2VMb29rdXBUYWJsZSIsImJ5dGVzIiwiY2hlY2tPZmZzZXQiLCJleHQiLCJjaGVja0ludCIsIndydEJpZ1VJbnQ2NExFIiwiY2hlY2tJbnRCSSIsIkJpZ0ludCIsIndydEJpZ1VJbnQ2NEJFIiwiY2hlY2tJRUVFNzU0Iiwid3JpdGVGbG9hdCIsImxpdHRsZUVuZGlhbiIsIm5vQXNzZXJ0Iiwid3JpdGVEb3VibGUiLCJuZXdCdWYiLCJzdWJhcnJheSIsInJlYWRVaW50TEUiLCJyZWFkVUludExFIiwibXVsIiwicmVhZFVpbnRCRSIsInJlYWRVSW50QkUiLCJyZWFkVWludDgiLCJyZWFkVUludDgiLCJyZWFkVWludDE2TEUiLCJyZWFkVUludDE2TEUiLCJyZWFkVWludDE2QkUiLCJyZWFkVWludDMyTEUiLCJyZWFkVUludDMyTEUiLCJyZWFkVWludDMyQkUiLCJyZWFkVUludDMyQkUiLCJyZWFkQmlnVUludDY0TEUiLCJkZWZpbmVCaWdJbnRNZXRob2QiLCJ2YWxpZGF0ZU51bWJlciIsImZpcnN0IiwibGFzdCIsImJvdW5kc0Vycm9yIiwicmVhZEJpZ1VJbnQ2NEJFIiwicmVhZEludExFIiwicG93IiwicmVhZEludEJFIiwicmVhZEludDgiLCJyZWFkSW50MTZMRSIsInJlYWRJbnQxNkJFIiwicmVhZEludDMyTEUiLCJyZWFkSW50MzJCRSIsInJlYWRCaWdJbnQ2NExFIiwicmVhZEJpZ0ludDY0QkUiLCJyZWFkRmxvYXRMRSIsInJlYWRGbG9hdEJFIiwicmVhZERvdWJsZUxFIiwicmVhZERvdWJsZUJFIiwid3JpdGVVaW50TEUiLCJ3cml0ZVVJbnRMRSIsIndyaXRlVWludEJFIiwid3JpdGVVSW50QkUiLCJ3cml0ZVVpbnQ4Iiwid3JpdGVVSW50OCIsIndyaXRlVWludDE2TEUiLCJ3cml0ZVVJbnQxNkxFIiwid3JpdGVVaW50MTZCRSIsIndyaXRlVUludDE2QkUiLCJ3cml0ZVVpbnQzMkxFIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVWludDMyQkUiLCJ3cml0ZVVJbnQzMkJFIiwid3JpdGVCaWdVSW50NjRMRSIsIndyaXRlQmlnVUludDY0QkUiLCJ3cml0ZUludExFIiwibGltaXQiLCJzdWIiLCJ3cml0ZUludEJFIiwid3JpdGVJbnQ4Iiwid3JpdGVJbnQxNkxFIiwid3JpdGVJbnQxNkJFIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwid3JpdGVCaWdJbnQ2NExFIiwid3JpdGVCaWdJbnQ2NEJFIiwid3JpdGVGbG9hdExFIiwid3JpdGVGbG9hdEJFIiwid3JpdGVEb3VibGVMRSIsIndyaXRlRG91YmxlQkUiLCJ0YXJnZXRTdGFydCIsImNvcHlXaXRoaW4iLCJlcnJvcnMiLCJFIiwic3ltIiwiZ2V0TWVzc2FnZSIsIkJhc2UiLCJzdXBlciIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwibmFtZSIsInN0YWNrIiwibWVzc2FnZSIsImFkZE51bWVyaWNhbFNlcGFyYXRvciIsInJhbmdlIiwiRVJSX09VVF9PRl9SQU5HRSIsImNoZWNrQm91bmRzIiwiRVJSX0lOVkFMSURfQVJHX1RZUEUiLCJmbG9vciIsIkVSUl9CVUZGRVJfT1VUX09GX0JPVU5EUyIsImlucHV0IiwibXNnIiwicmVjZWl2ZWQiLCJpc0ludGVnZXIiLCJhYnMiLCJJTlZBTElEX0JBU0U2NF9SRSIsIkluZmluaXR5IiwibGVhZFN1cnJvZ2F0ZSIsInNwbGl0IiwiYmFzZTY0Y2xlYW4iLCJzcmMiLCJkc3QiLCJjb25zdHJ1Y3RvciIsImFscGhhYmV0IiwidGFibGUiLCJpMTYiLCJmbiIsIkJ1ZmZlckJpZ0ludE5vdERlZmluZWQiLCJFbGVtZW50VHlwZSIsImVudGl0aWVzIiwiZm9yZWlnbk5hbWVzIiwiZWxlbWVudE5hbWVzIiwiX19wcm90b19fIiwiYXR0cmlidXRlTmFtZXMiLCJ1bmVuY29kZWRFbGVtZW50cyIsInN0eWxlIiwic2NyaXB0IiwieG1wIiwiaWZyYW1lIiwibm9lbWJlZCIsIm5vZnJhbWVzIiwicGxhaW50ZXh0Iiwibm9zY3JpcHQiLCJzaW5nbGVUYWciLCJhcmVhIiwiYmFzZSIsImJhc2Vmb250IiwiYnIiLCJjb2wiLCJjb21tYW5kIiwiZW1iZWQiLCJmcmFtZSIsImhyIiwiaW1nIiwiaXNpbmRleCIsImtleWdlbiIsImxpbmsiLCJtZXRhIiwicGFyYW0iLCJzb3VyY2UiLCJ0cmFjayIsIndiciIsInJlbmRlciIsIm1vZHVsZSIsImRvbSIsIm9wdHMiLCJjaGVlcmlvIiwiZWxlbSIsImNoaWxkcmVuIiwiaXNUYWciLCJyZW5kZXJUYWciLCJEaXJlY3RpdmUiLCJyZW5kZXJEaXJlY3RpdmUiLCJDb21tZW50IiwicmVuZGVyQ29tbWVudCIsIkNEQVRBIiwicmVuZGVyQ2RhdGEiLCJyZW5kZXJUZXh0IiwiZm9yZWlnbk1vZGVJbnRlZ3JhdGlvblBvaW50cyIsInhtbE1vZGUiLCJwYXJlbnQiLCJhc3NpZ24iLCJ0YWciLCJhdHRyaWJzIiwiYXR0cmlidXRlcyIsImtleSIsImRlY29kZUVudGl0aWVzIiwiZW5jb2RlWE1MIiwiZm9ybWF0QXR0cnMiLCJEb2N0eXBlIiwiVGFnIiwiU3R5bGUiLCJTY3JpcHQiLCJUZXh0IiwiUm9vdCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJkZWNvZGVIVE1MIiwiZGVjb2RlSFRNTFN0cmljdCIsImRlY29kZVhNTCIsImVudGl0aWVzX2pzb25fMSIsImxlZ2FjeV9qc29uXzEiLCJ4bWxfanNvbl8xIiwiZGVjb2RlX2NvZGVwb2ludF8xIiwic3RyaWN0RW50aXR5UmUiLCJnZXRTdHJpY3REZWNvZGVyIiwibWFwIiwiZ2V0UmVwbGFjZXIiLCJkZWZhdWx0Iiwic29ydGVyIiwiY2hhckF0Iiwic2Vjb25kQ2hhciIsImxlZ2FjeSIsImtleXMiLCJzb3J0IiwicmUiLCJSZWdFeHAiLCJyZXBsYWNlciIsImRlY29kZV9qc29uXzEiLCJmcm9tQ29kZVBvaW50IiwiZXNjYXBlVVRGOCIsImVzY2FwZSIsImVuY29kZU5vbkFzY2lpSFRNTCIsImVuY29kZUhUTUwiLCJpbnZlcnNlWE1MIiwiZ2V0SW52ZXJzZU9iaiIsInhtbFJlcGxhY2VyIiwiZ2V0SW52ZXJzZVJlcGxhY2VyIiwiZ2V0QVNDSUlFbmNvZGVyIiwiaW52ZXJzZSIsImludmVyc2VIVE1MIiwiaHRtbFJlcGxhY2VyIiwicmVkdWNlIiwic2luZ2xlIiwibXVsdGlwbGUiLCJfaSIsIl9hIiwiayIsImNvdW50Iiwic3BsaWNlIiwidW5zaGlmdCIsInJlTm9uQVNDSUkiLCJzaW5nbGVDaGFyUmVwbGFjZXIiLCJnZXRDb2RlUG9pbnQiLCJjb2RlUG9pbnRBdCIsInRvVXBwZXJDYXNlIiwicmVFc2NhcGVDaGFycyIsImRlY29kZVhNTFN0cmljdCIsImRlY29kZUhUTUw1U3RyaWN0IiwiZGVjb2RlSFRNTDRTdHJpY3QiLCJkZWNvZGVIVE1MNSIsImRlY29kZUhUTUw0IiwiZW5jb2RlSFRNTDUiLCJlbmNvZGVIVE1MNCIsImVuY29kZSIsImRlY29kZVN0cmljdCIsImRlY29kZSIsImRlY29kZV8xIiwiZW5jb2RlXzEiLCJsZXZlbCIsImVuY29kZV8yIiwiZGVjb2RlXzIiLCJyZV93aGl0ZXNwYWNlIiwiTm9kZVByb3RvdHlwZSIsIkVsZW1lbnRQcm90b3R5cGUiLCJEb21IYW5kbGVyIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiZWxlbWVudENCIiwiZGVmYXVsdE9wdHMiLCJfY2FsbGJhY2siLCJfb3B0aW9ucyIsIl9lbGVtZW50Q0IiLCJfZG9uZSIsIl90YWdTdGFjayIsIl9wYXJzZXIiLCJub3JtYWxpemVXaGl0ZXNwYWNlIiwid2l0aFN0YXJ0SW5kaWNlcyIsIndpdGhFbmRJbmRpY2VzIiwib25wYXJzZXJpbml0IiwicGFyc2VyIiwib25yZXNldCIsIm9uZW5kIiwiX2hhbmRsZUNhbGxiYWNrIiwib25lcnJvciIsIm9uY2xvc2V0YWciLCJwb3AiLCJlbmRJbmRleCIsIl9jcmVhdGVEb21FbGVtZW50IiwicHJvcGVydGllcyIsIndpdGhEb21MdmwxIiwiZWxlbWVudCIsImNyZWF0ZSIsImhhc093blByb3BlcnR5IiwiX2FkZERvbUVsZW1lbnQiLCJzaWJsaW5ncyIsInByZXZpb3VzU2libGluZyIsIm5leHQiLCJzdGFydEluZGV4IiwicHJldiIsIm9ub3BlbnRhZyIsIm9udGV4dCIsImxhc3RUYWciLCJub3JtYWxpemUiLCJpZ25vcmVXaGl0ZXNwYWNlIiwib25jb21tZW50Iiwib25jZGF0YXN0YXJ0Iiwib25jb21tZW50ZW5kIiwib25jZGF0YWVuZCIsIm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uIiwiZG9tTHZsMSIsInRhZ05hbWUiLCJmb3JFYWNoIiwic2hvcnRoYW5kIiwibm9kZVR5cGVzIiwiY2hpbGROb2RlcyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsIm5vZGVWYWx1ZSIsInRleHQiLCJjZGF0YSIsImNvbW1lbnQiLCJEb21VdGlscyIsImJpbmQiLCJyZW1vdmVTdWJzZXRzIiwibm9kZXMiLCJub2RlIiwiYW5jZXN0b3IiLCJpZHgiLCJjb21wYXJlUG9zIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJub2RlQSIsIm5vZGVCIiwiY3VycmVudCIsInNoYXJlZFBhcmVudCIsImFTaWJsaW5nIiwiYlNpYmxpbmciLCJhUGFyZW50cyIsImJQYXJlbnRzIiwiUE9TSVRJT04iLCJ1bmlxdWVTb3J0IiwicG9zaXRpb24iLCJyZWxhdGl2ZSIsInRlc3RFbGVtZW50IiwidGFnX25hbWUiLCJ0YWdfdHlwZSIsInRhZ19jb250YWlucyIsIkNoZWNrcyIsImdldEF0dHJpYkNoZWNrIiwiYXR0cmliIiwiY29tYmluZUZ1bmNzIiwiZ2V0RWxlbWVudHMiLCJyZWN1cnNlIiwiZnVuY3MiLCJmaWx0ZXIiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZmluZE9uZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeVRhZ1R5cGUiLCJyZW1vdmVFbGVtZW50IiwiY2hpbGRzIiwicmVwbGFjZUVsZW1lbnQiLCJyZXBsYWNlbWVudCIsImFwcGVuZENoaWxkIiwiY2hpbGQiLCJzaWJsaW5nIiwiYXBwZW5kIiwiY3Vyck5leHQiLCJwcmVwZW5kIiwiZmluZCIsInRlc3QiLCJlbGVtcyIsInJlc3VsdCIsImZpbmRPbmVDaGlsZCIsImwiLCJleGlzdHNPbmUiLCJmaW5kQWxsIiwicm9vdEVsZW1zIiwic2hpZnQiLCJnZXRPdXRlckhUTUwiLCJnZXRJbm5lckhUTUwiLCJnZXRUZXh0IiwiZ2V0Q2hpbGRyZW4iLCJnZXRQYXJlbnQiLCJnZXRTaWJsaW5ncyIsImdldEF0dHJpYnV0ZVZhbHVlIiwiaGFzQXR0cmliIiwiZ2V0TmFtZSIsInB1bnljb2RlIiwiXyIsIm1hdGNoIiwiZXhlYyIsInVjczIiLCJoYXNTZW1pIiwid2l0aG91dFNlbWkiLCJyZXZFbnRpdGllcyIsIm51bWVyaWMiLCJuYW1lZCIsInNwZWNpYWwiLCJjaGFycyIsImNjIiwiZGVjb2RlTWFwIiwiUmVmbGVjdE93bktleXMiLCJSIiwiUmVmbGVjdCIsIlJlZmxlY3RBcHBseSIsInJlY2VpdmVyIiwiYXJncyIsIkZ1bmN0aW9uIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5TmFtZXMiLCJOdW1iZXJJc05hTiIsImlzTmFOIiwiRXZlbnRFbWl0dGVyIiwiaW5pdCIsIm9uY2UiLCJlbWl0dGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnJvckxpc3RlbmVyIiwiZXJyIiwicmVtb3ZlTGlzdGVuZXIiLCJyZXNvbHZlciIsImV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lciIsImhhbmRsZXIiLCJmbGFncyIsIm9uIiwiYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIiLCJfZXZlbnRzIiwiX2V2ZW50c0NvdW50IiwiX21heExpc3RlbmVycyIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJjaGVja0xpc3RlbmVyIiwibGlzdGVuZXIiLCJfZ2V0TWF4TGlzdGVuZXJzIiwidGhhdCIsIl9hZGRMaXN0ZW5lciIsImV2ZW50cyIsImV4aXN0aW5nIiwid2FybmluZyIsIm5ld0xpc3RlbmVyIiwiZW1pdCIsIndhcm5lZCIsInciLCJ3YXJuIiwib25jZVdyYXBwZXIiLCJmaXJlZCIsIndyYXBGbiIsIl9vbmNlV3JhcCIsInN0YXRlIiwid3JhcHBlZCIsIl9saXN0ZW5lcnMiLCJ1bndyYXAiLCJldmxpc3RlbmVyIiwidW53cmFwTGlzdGVuZXJzIiwiYXJyYXlDbG9uZSIsImxpc3RlbmVyQ291bnQiLCJhZGRFdmVudExpc3RlbmVyIiwid3JhcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFByb3RvdHlwZU9mIiwic2V0TWF4TGlzdGVuZXJzIiwiZ2V0TWF4TGlzdGVuZXJzIiwiZG9FcnJvciIsImVyIiwiY29udGV4dCIsImxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsIm9yaWdpbmFsTGlzdGVuZXIiLCJpbmRleCIsInNwbGljZU9uZSIsIm9mZiIsInJlbW92ZUFsbExpc3RlbmVycyIsInJhd0xpc3RlbmVycyIsImV2ZW50TmFtZXMiLCJkb2NjeSIsInRvcExldmVsIiwiZyIsIndpbmRvdyIsIm1pbkRvYyIsImRvY3VtZW50IiwiY29udmVydEhUTUwiLCJkZXBlbmRlbmNpZXMiLCJWTm9kZSIsIlZUZXh0IiwiY2hlY2tNYXNrIiwiYml0bWFzayIsInByb3BJbmZvQnlBdHRyaWJ1dGVOYW1lIiwiaXNDdXN0b21BdHRyaWJ1dGUiLCJIVE1MRE9NUHJvcGVydHlDb25maWciLCJQcm9wZXJ0aWVzIiwiYWNjZXB0IiwiYWNjZXB0Q2hhcnNldCIsImFjY2Vzc0tleSIsImFjdGlvbiIsImFsbG93RnVsbFNjcmVlbiIsIk1VU1RfVVNFX0FUVFJJQlVURSIsImFsbG93VHJhbnNwYXJlbmN5IiwiYWx0IiwiYXN5bmMiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJhdXRvUGxheSIsImNhcHR1cmUiLCJjZWxsUGFkZGluZyIsImNlbGxTcGFjaW5nIiwiY2hhclNldCIsImNoYWxsZW5nZSIsIk1VU1RfVVNFX1BST1BFUlRZIiwiY2xhc3NJRCIsImNsYXNzTmFtZSIsImNvbHMiLCJjb2xTcGFuIiwiY29udGVudCIsImNvbnRlbnRFZGl0YWJsZSIsImNvbnRleHRNZW51IiwiY29udHJvbHMiLCJjb29yZHMiLCJjcm9zc09yaWdpbiIsImRhdGVUaW1lIiwiZGVmZXIiLCJkaXNhYmxlZCIsImRvd25sb2FkIiwiZHJhZ2dhYmxlIiwiZW5jVHlwZSIsImZvcm0iLCJmb3JtQWN0aW9uIiwiZm9ybUVuY1R5cGUiLCJmb3JtTWV0aG9kIiwiZm9ybU5vVmFsaWRhdGUiLCJmb3JtVGFyZ2V0IiwiZnJhbWVCb3JkZXIiLCJoZWFkZXJzIiwiaGVpZ2h0IiwiaGlkZGVuIiwiaGlnaCIsImhyZWYiLCJocmVmTGFuZyIsImh0bWxGb3IiLCJodHRwRXF1aXYiLCJpY29uIiwiaXMiLCJrZXlQYXJhbXMiLCJrZXlUeXBlIiwibGFiZWwiLCJsYW5nIiwibG9vcCIsImxvdyIsIm1hbmlmZXN0IiwibWFyZ2luSGVpZ2h0IiwibWFyZ2luV2lkdGgiLCJtYXhMZW5ndGgiLCJtZWRpYSIsIm1lZGlhR3JvdXAiLCJtZXRob2QiLCJtaW5MZW5ndGgiLCJtdXRlZCIsIm5vVmFsaWRhdGUiLCJvcGVuIiwib3B0aW11bSIsInBhdHRlcm4iLCJwbGFjZWhvbGRlciIsInBvc3RlciIsInByZWxvYWQiLCJyYWRpb0dyb3VwIiwicmVhZE9ubHkiLCJyZWwiLCJyZXF1aXJlZCIsInJvbGUiLCJyb3dzIiwicm93U3BhbiIsInNhbmRib3giLCJzY29wZSIsInNjb3BlZCIsInNjcm9sbGluZyIsInNlYW1sZXNzIiwic2VsZWN0ZWQiLCJzaGFwZSIsInNpemVzIiwic3BhbiIsInNwZWxsQ2hlY2siLCJzcmNEb2MiLCJzcmNTZXQiLCJzdGVwIiwidGFiSW5kZXgiLCJ0aXRsZSIsInVzZU1hcCIsIndpZHRoIiwid21vZGUiLCJhdXRvQ2FwaXRhbGl6ZSIsImF1dG9Db3JyZWN0IiwiaXRlbVByb3AiLCJpdGVtU2NvcGUiLCJpdGVtVHlwZSIsIml0ZW1JRCIsIml0ZW1SZWYiLCJwcm9wZXJ0eSIsInVuc2VsZWN0YWJsZSIsInByb3BlcnR5VG9BdHRyaWJ1dGVNYXBwaW5nIiwicHJvcGVydHlWYWx1ZUNvbnZlcnNpb25zIiwib2JqZWN0IiwiYXR0cmlidXRlIiwiZW50cnkiLCJnZXRQcm9wZXJ0eUluZm8iLCJwcm9wTmFtZSIsInByb3BDb25maWciLCJhdHRyaWJ1dGVOYW1lIiwicHJvcGVydHlJbmZvIiwicHJvcGVydHlOYW1lIiwibXVzdFVzZUF0dHJpYnV0ZSIsIm11c3RVc2VQcm9wZXJ0eSIsImhhc0Jvb2xlYW5WYWx1ZSIsImhhc051bWVyaWNWYWx1ZSIsImhhc1Bvc2l0aXZlTnVtZXJpY1ZhbHVlIiwiaGFzT3ZlcmxvYWRlZEJvb2xlYW5WYWx1ZSIsInZkb21Qcm9wZXJ0aWVzIiwibG93ZXJDYXNlZCIsInByb3BJbmZvIiwiaXNUcnVlIiwidmFsdWVDb252ZXJ0ZXIiLCJjcmVhdGVDb252ZXJ0ZXIiLCJwYXJzZUhUTUwiLCJWVHJlZSIsImh0bWxwYXJzZXJUb1Zkb20iLCJodG1sIiwibm9PcHRpb25zIiwiaHRtbFRvQ29udmVydCIsImdldFZOb2RlS2V5IiwidGFncyIsImNvbnZlcnQiLCJjb252ZXJ0VGFnQXR0cmlidXRlcyIsImNvbnZlcnRlciIsImNvbnZlcnRUYWciLCJodG1scGFyc2VyIiwiUGFyc2VyIiwibG93ZXJDYXNlQXR0cmlidXRlTmFtZXMiLCJwYXJzZUNvbXBsZXRlIiwiQ29sbGVjdGluZ0hhbmRsZXIiLCJjYnMiLCJfY2JzIiwiRVZFTlRTIiwicmVzdGFydCIsIkZlZWRIYW5kbGVyIiwid2hhdCIsIndoZXJlIiwiZ2V0T25lRWxlbWVudCIsImZldGNoIiwiYWRkQ29uZGl0aW9uYWxseSIsInByb3AiLCJpc1ZhbGlkRmVlZCIsImZlZWQiLCJmZWVkUm9vdCIsInVwZGF0ZWQiLCJEYXRlIiwiaXRlbXMiLCJpdGVtIiwiZGVzY3JpcHRpb24iLCJwdWJEYXRlIiwiVG9rZW5pemVyIiwiZm9ybVRhZ3MiLCJvcHRpb24iLCJvcHRncm91cCIsInNlbGVjdCIsImJ1dHRvbiIsImRhdGFsaXN0IiwidGV4dGFyZWEiLCJvcGVuSW1wbGllc0Nsb3NlIiwidHIiLCJ0aCIsInRkIiwidGhlYWQiLCJib2R5IiwiaGVhZCIsImxpIiwicCIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInZvaWRFbGVtZW50cyIsImZvcmVpZ25Db250ZXh0RWxlbWVudHMiLCJtYXRoIiwic3ZnIiwiaHRtbEludGVncmF0aW9uRWxlbWVudHMiLCJtaSIsIm1vIiwibW4iLCJtcyIsIm10ZXh0IiwiZm9yZWlnbk9iamVjdCIsImRlc2MiLCJyZV9uYW1lRW5kIiwiX3RhZ25hbWUiLCJfYXR0cmlibmFtZSIsIl9hdHRyaWJ2YWx1ZSIsIl9hdHRyaWJzIiwiX3N0YWNrIiwiX2ZvcmVpZ25Db250ZXh0IiwiX2xvd2VyQ2FzZVRhZ05hbWVzIiwibG93ZXJDYXNlVGFncyIsIl9sb3dlckNhc2VBdHRyaWJ1dGVOYW1lcyIsIl90b2tlbml6ZXIiLCJfdXBkYXRlUG9zaXRpb24iLCJpbml0aWFsT2Zmc2V0IiwiX3NlY3Rpb25TdGFydCIsImdldEFic29sdXRlSW5kZXgiLCJvbm9wZW50YWduYW1lIiwiZWwiLCJvbm9wZW50YWdlbmQiLCJfY2xvc2VDdXJyZW50VGFnIiwib25zZWxmY2xvc2luZ3RhZyIsInJlY29nbml6ZVNlbGZDbG9zaW5nIiwib25hdHRyaWJuYW1lIiwib25hdHRyaWJkYXRhIiwib25hdHRyaWJlbmQiLCJvbmF0dHJpYnV0ZSIsIl9nZXRJbnN0cnVjdGlvbk5hbWUiLCJzZWFyY2giLCJvbmRlY2xhcmF0aW9uIiwib25jZGF0YSIsInJlY29nbml6ZUNEQVRBIiwicmVzZXQiLCJjaHVuayIsInBhdXNlIiwicmVzdW1lIiwicGFyc2VDaHVuayIsImRvbmUiLCJQcm94eUhhbmRsZXIiLCJTdHJlYW0iLCJDYnMiLCJyZWFkYWJsZSIsImRlY29kZUNvZGVQb2ludCIsImVudGl0eU1hcCIsImxlZ2FjeU1hcCIsInhtbE1hcCIsIlRFWFQiLCJCRUZPUkVfVEFHX05BTUUiLCJJTl9UQUdfTkFNRSIsIklOX1NFTEZfQ0xPU0lOR19UQUciLCJCRUZPUkVfQ0xPU0lOR19UQUdfTkFNRSIsIklOX0NMT1NJTkdfVEFHX05BTUUiLCJBRlRFUl9DTE9TSU5HX1RBR19OQU1FIiwiQkVGT1JFX0FUVFJJQlVURV9OQU1FIiwiSU5fQVRUUklCVVRFX05BTUUiLCJBRlRFUl9BVFRSSUJVVEVfTkFNRSIsIkJFRk9SRV9BVFRSSUJVVEVfVkFMVUUiLCJJTl9BVFRSSUJVVEVfVkFMVUVfRFEiLCJJTl9BVFRSSUJVVEVfVkFMVUVfU1EiLCJJTl9BVFRSSUJVVEVfVkFMVUVfTlEiLCJCRUZPUkVfREVDTEFSQVRJT04iLCJJTl9ERUNMQVJBVElPTiIsIklOX1BST0NFU1NJTkdfSU5TVFJVQ1RJT04iLCJCRUZPUkVfQ09NTUVOVCIsIklOX0NPTU1FTlQiLCJBRlRFUl9DT01NRU5UXzEiLCJBRlRFUl9DT01NRU5UXzIiLCJCRUZPUkVfQ0RBVEFfMSIsIkJFRk9SRV9DREFUQV8yIiwiQkVGT1JFX0NEQVRBXzMiLCJCRUZPUkVfQ0RBVEFfNCIsIkJFRk9SRV9DREFUQV81IiwiQkVGT1JFX0NEQVRBXzYiLCJJTl9DREFUQSIsIkFGVEVSX0NEQVRBXzEiLCJBRlRFUl9DREFUQV8yIiwiQkVGT1JFX1NQRUNJQUwiLCJCRUZPUkVfU1BFQ0lBTF9FTkQiLCJCRUZPUkVfU0NSSVBUXzEiLCJCRUZPUkVfU0NSSVBUXzIiLCJCRUZPUkVfU0NSSVBUXzMiLCJCRUZPUkVfU0NSSVBUXzQiLCJCRUZPUkVfU0NSSVBUXzUiLCJBRlRFUl9TQ1JJUFRfMSIsIkFGVEVSX1NDUklQVF8yIiwiQUZURVJfU0NSSVBUXzMiLCJBRlRFUl9TQ1JJUFRfNCIsIkFGVEVSX1NDUklQVF81IiwiQkVGT1JFX1NUWUxFXzEiLCJCRUZPUkVfU1RZTEVfMiIsIkJFRk9SRV9TVFlMRV8zIiwiQkVGT1JFX1NUWUxFXzQiLCJBRlRFUl9TVFlMRV8xIiwiQUZURVJfU1RZTEVfMiIsIkFGVEVSX1NUWUxFXzMiLCJBRlRFUl9TVFlMRV80IiwiQkVGT1JFX0VOVElUWSIsIkJFRk9SRV9OVU1FUklDX0VOVElUWSIsIklOX05BTUVEX0VOVElUWSIsIklOX05VTUVSSUNfRU5USVRZIiwiSU5fSEVYX0VOVElUWSIsIlNQRUNJQUxfTk9ORSIsIlNQRUNJQUxfU0NSSVBUIiwiU1BFQ0lBTF9TVFlMRSIsIndoaXRlc3BhY2UiLCJpZkVsc2VTdGF0ZSIsInVwcGVyIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJsb3dlciIsIl9zdGF0ZSIsIl9pbmRleCIsImNvbnN1bWVTcGVjaWFsTmFtZUNoYXIiLCJORVhUX1NUQVRFIiwiX2J1ZmZlciIsIl9idWZmZXJPZmZzZXQiLCJfYmFzZVN0YXRlIiwiX3NwZWNpYWwiLCJfcnVubmluZyIsIl9lbmRlZCIsIl94bWxNb2RlIiwiX2RlY29kZUVudGl0aWVzIiwiX3N0YXRlVGV4dCIsIl9nZXRTZWN0aW9uIiwiX3N0YXRlQmVmb3JlVGFnTmFtZSIsIl9zdGF0ZUluVGFnTmFtZSIsIl9lbWl0VG9rZW4iLCJfc3RhdGVCZWZvcmVDbG9zZWluZ1RhZ05hbWUiLCJfc3RhdGVJbkNsb3NlaW5nVGFnTmFtZSIsIl9zdGF0ZUFmdGVyQ2xvc2VpbmdUYWdOYW1lIiwiX3N0YXRlQmVmb3JlQXR0cmlidXRlTmFtZSIsIl9zdGF0ZUluU2VsZkNsb3NpbmdUYWciLCJfc3RhdGVJbkF0dHJpYnV0ZU5hbWUiLCJfc3RhdGVBZnRlckF0dHJpYnV0ZU5hbWUiLCJfc3RhdGVCZWZvcmVBdHRyaWJ1dGVWYWx1ZSIsIl9zdGF0ZUluQXR0cmlidXRlVmFsdWVEb3VibGVRdW90ZXMiLCJfc3RhdGVJbkF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVzIiwiX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZU5vUXVvdGVzIiwiX3N0YXRlQmVmb3JlRGVjbGFyYXRpb24iLCJfc3RhdGVJbkRlY2xhcmF0aW9uIiwiX3N0YXRlSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24iLCJfc3RhdGVCZWZvcmVDb21tZW50IiwiX3N0YXRlSW5Db21tZW50IiwiX3N0YXRlQWZ0ZXJDb21tZW50MSIsIl9zdGF0ZUFmdGVyQ29tbWVudDIiLCJzdWJzdHJpbmciLCJfc3RhdGVCZWZvcmVDZGF0YTEiLCJfc3RhdGVCZWZvcmVDZGF0YTIiLCJfc3RhdGVCZWZvcmVDZGF0YTMiLCJfc3RhdGVCZWZvcmVDZGF0YTQiLCJfc3RhdGVCZWZvcmVDZGF0YTUiLCJfc3RhdGVCZWZvcmVDZGF0YTYiLCJfc3RhdGVJbkNkYXRhIiwiX3N0YXRlQWZ0ZXJDZGF0YTEiLCJfc3RhdGVBZnRlckNkYXRhMiIsIl9zdGF0ZUJlZm9yZVNwZWNpYWwiLCJfc3RhdGVCZWZvcmVTcGVjaWFsRW5kIiwiX3N0YXRlQmVmb3JlU2NyaXB0MSIsIl9zdGF0ZUJlZm9yZVNjcmlwdDIiLCJfc3RhdGVCZWZvcmVTY3JpcHQzIiwiX3N0YXRlQmVmb3JlU2NyaXB0NCIsIl9zdGF0ZUJlZm9yZVNjcmlwdDUiLCJfc3RhdGVBZnRlclNjcmlwdDEiLCJfc3RhdGVBZnRlclNjcmlwdDIiLCJfc3RhdGVBZnRlclNjcmlwdDMiLCJfc3RhdGVBZnRlclNjcmlwdDQiLCJfc3RhdGVBZnRlclNjcmlwdDUiLCJfc3RhdGVCZWZvcmVTdHlsZTEiLCJfc3RhdGVCZWZvcmVTdHlsZTIiLCJfc3RhdGVCZWZvcmVTdHlsZTMiLCJfc3RhdGVCZWZvcmVTdHlsZTQiLCJfc3RhdGVBZnRlclN0eWxlMSIsIl9zdGF0ZUFmdGVyU3R5bGUyIiwiX3N0YXRlQWZ0ZXJTdHlsZTMiLCJfc3RhdGVBZnRlclN0eWxlNCIsIl9zdGF0ZUJlZm9yZUVudGl0eSIsIl9zdGF0ZUJlZm9yZU51bWVyaWNFbnRpdHkiLCJfcGFyc2VOYW1lZEVudGl0eVN0cmljdCIsImVudGl0eSIsIl9lbWl0UGFydGlhbCIsIl9wYXJzZUxlZ2FjeUVudGl0eSIsIl9zdGF0ZUluTmFtZWRFbnRpdHkiLCJfZGVjb2RlTnVtZXJpY0VudGl0eSIsInNlY3Rpb25TdGFydCIsIl9zdGF0ZUluTnVtZXJpY0VudGl0eSIsIl9zdGF0ZUluSGV4RW50aXR5IiwiX2NsZWFudXAiLCJfcGFyc2UiLCJfZmluaXNoIiwiX2hhbmRsZVRyYWlsaW5nRGF0YSIsIldyaXRhYmxlU3RyZWFtIiwiU3RyaW5nRGVjb2RlciIsImRlY29kZXIiLCJfZGVjb2RlciIsImRlY29kZVN0cmluZ3MiLCJfd3JpdGUiLCJjYiIsImRlZmluZVByb3AiLCJEZWZhdWx0SGFuZGxlciIsInBhcnNlRE9NIiwicGFyc2VGZWVkIiwiY3JlYXRlRG9tU3RyZWFtIiwiZWxlbWVudENiIiwiY2RhdGFzdGFydCIsImNkYXRhZW5kIiwicHJvY2Vzc2luZ2luc3RydWN0aW9uIiwiY29tbWVudGVuZCIsImNsb3NldGFnIiwib3BlbnRhZyIsIm9wZW50YWduYW1lIiwiaXNMRSIsIm1MZW4iLCJuQnl0ZXMiLCJlTGVuIiwiZU1heCIsImVCaWFzIiwibkJpdHMiLCJkIiwicyIsIk5hTiIsInJ0IiwibG9nIiwiTE4yIiwiY3RvciIsInN1cGVyQ3RvciIsInN1cGVyXyIsIlRlbXBDdG9yIiwibWF4SW50IiwicmVnZXhQdW55Y29kZSIsInJlZ2V4Tm9uQVNDSUkiLCJyZWdleFNlcGFyYXRvcnMiLCJzdHJpbmdGcm9tQ2hhckNvZGUiLCJtYXBEb21haW4iLCJlbmNvZGVkIiwidWNzMmRlY29kZSIsImNvdW50ZXIiLCJleHRyYSIsInVjczJlbmNvZGUiLCJkaWdpdFRvQmFzaWMiLCJkaWdpdCIsImZsYWciLCJhZGFwdCIsImRlbHRhIiwibnVtUG9pbnRzIiwiZmlyc3RUaW1lIiwiYmFzZU1pbnVzVE1pbiIsImlucHV0TGVuZ3RoIiwiYmlhcyIsImJhc2ljIiwib2xkaSIsInQiLCJiYXNlTWludXNUIiwiY3VycmVudFZhbHVlIiwiYmFzaWNMZW5ndGgiLCJoYW5kbGVkQ1BDb3VudCIsImhhbmRsZWRDUENvdW50UGx1c09uZSIsInEiLCJxTWludXNUIiwidG9Vbmljb2RlIiwidG9BU0NJSSIsImNvcHlQcm9wcyIsIlNhZmVCdWZmZXIiLCJuYiIsImVuYyIsIm5lbmMiLCJyZXRyaWVkIiwiX25vcm1hbGl6ZUVuY29kaW5nIiwibm9ybWFsaXplRW5jb2RpbmciLCJ1dGYxNlRleHQiLCJ1dGYxNkVuZCIsImZpbGxMYXN0IiwidXRmOEZpbGxMYXN0IiwiYmFzZTY0VGV4dCIsImJhc2U2NEVuZCIsInNpbXBsZVdyaXRlIiwic2ltcGxlRW5kIiwibGFzdE5lZWQiLCJsYXN0VG90YWwiLCJsYXN0Q2hhciIsInV0ZjhDaGVja0J5dGUiLCJieXRlIiwiciIsInNlbGYiLCJ1dGY4Q2hlY2tFeHRyYUJ5dGVzIiwidG90YWwiLCJ1dGY4Q2hlY2tJbmNvbXBsZXRlIiwiX19hc3NpZ24iLCJfX3NwcmVhZEFycmF5IiwidG8iLCJpbCIsIkltYWdlIiwicHJvcHMiLCJpbWFnZUlkIiwibm93IiwicmFuZG9tIiwiZGVidWciLCJtb3VudCIsImNvbXBpbGUiLCJwYXJzZWRIdG1sIiwiZXZlbnQiLCJyZW5kZXJQcm9wS2V5IiwicGFnZSIsImltYWdlIiwiZXJyb3JMaW5lcyIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGUiLCJkZWJ1Z09uIiwiZGVidWdDb2xvdXIiLCJkZWJ1Z09mZiIsImV4dGVuZFN0YXRpY3MiLCJfX2V4dGVuZHMiLCJfXyIsIkNvdW50ZXIiLCJDb250YWluZXIiLCJDb250YWluZXIxIiwiaW1hZ2VfMSIsIl9zdXBlciIsIl90aGlzIiwiUGFnZSIsImRpZmYiLCJwYXRjaCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRSb290SW1hZ2UiLCJuZXdUcmVlIiwiY29udmVydEhUTUxXaXRoS2V5IiwiY3VycmVudE5vZGUiLCJyZXBsYWNlZXZlbnRzIiwiY3VycmVudFRyZWUiLCJwYXRjaGVzIiwidHJlZSIsImxBdHRyaWJ1dGUiLCJldmVudHNLZXlzIiwicXVlcnlTZWxlY3RvciIsImlzT2JqZWN0IiwiaXNIb29rIiwicmVtb3ZlUHJvcGVydHkiLCJwcm9wVmFsdWUiLCJwcmV2aW91cyIsInByZXZpb3VzVmFsdWUiLCJ1bmhvb2siLCJhdHRyTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsInBhdGNoT2JqZWN0IiwiZ2V0UHJvdG90eXBlIiwiYXR0clZhbHVlIiwic2V0QXR0cmlidXRlIiwiaG9vayIsImFwcGx5UHJvcGVydGllcyIsImlzVk5vZGUiLCJpc1ZUZXh0IiwiaXNXaWRnZXQiLCJoYW5kbGVUaHVuayIsInZub2RlIiwiZG9jIiwiY3JlYXRlVGV4dE5vZGUiLCJuYW1lc3BhY2UiLCJjcmVhdGVFbGVtZW50TlMiLCJjaGlsZE5vZGUiLCJub0NoaWxkIiwicm9vdE5vZGUiLCJpbmRpY2VzIiwicm9vdEluZGV4IiwiaW5kZXhJblJhbmdlIiwidkNoaWxkcmVuIiwidkNoaWxkIiwibmV4dEluZGV4IiwibGVmdCIsInJpZ2h0IiwiY3VycmVudEluZGV4IiwiY3VycmVudEl0ZW0iLCJtaW5JbmRleCIsIm1heEluZGV4IiwiYXNjZW5kaW5nIiwiVlBhdGNoIiwidXBkYXRlV2lkZ2V0IiwiZGVzdHJveVdpZGdldCIsImRvbU5vZGUiLCJkZXN0cm95IiwidnBhdGNoIiwicmVuZGVyT3B0aW9ucyIsIm9sZFJvb3QiLCJuZXdSb290Iiwidk5vZGUiLCJSRU1PVkUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZU5vZGUiLCJJTlNFUlQiLCJuZXdOb2RlIiwiaW5zZXJ0Tm9kZSIsIlZURVhUIiwibGVmdFZOb2RlIiwidlRleHQiLCJub2RlVHlwZSIsInJlcGxhY2VEYXRhIiwicmVwbGFjZUNoaWxkIiwic3RyaW5nUGF0Y2giLCJXSURHRVQiLCJ3aWRnZXQiLCJ1cGRhdGluZyIsIndpZGdldFBhdGNoIiwiVk5PREUiLCJ2Tm9kZVBhdGNoIiwiT1JERVIiLCJtb3ZlcyIsInJlbW92ZSIsImluc2VydCIsImtleU1hcCIsInJlbW92ZXMiLCJpbnNlcnRzIiwiaW5zZXJ0QmVmb3JlIiwicmVvcmRlckNoaWxkcmVuIiwiUFJPUFMiLCJUSFVOSyIsImRvbUluZGV4IiwicGF0Y2hPcCIsInBhdGNoUmVjdXJzaXZlIiwicGF0Y2hJbmRpY2VzIiwib3duZXJEb2N1bWVudCIsIm5vZGVJbmRleCIsImFwcGx5UGF0Y2giLCJwYXRjaExpc3QiLCJpc1RodW5rIiwicmVuZGVyVGh1bmsiLCJ0aHVuayIsInJlbmRlcmVkVGh1bmsiLCJyZW5kZXJlZEEiLCJyZW5kZXJlZEIiLCJ2ZXJzaW9uIiwiaXNWSG9vayIsIlZpcnR1YWxOb2RlIiwibm9Qcm9wZXJ0aWVzIiwibm9DaGlsZHJlbiIsImhvb2tzIiwiZGVzY2VuZGFudHMiLCJoYXNXaWRnZXRzIiwiaGFzVGh1bmtzIiwiZGVzY2VuZGFudEhvb2tzIiwiVmlydHVhbFBhdGNoIiwiTk9ORSIsIlZpcnR1YWxUZXh0IiwiZGlmZlByb3BzIiwiYUtleSIsImFWYWx1ZSIsImJWYWx1ZSIsIm9iamVjdERpZmYiLCJiS2V5Iiwid2FsayIsImFwcGx5Q2xlYXIiLCJ0aHVua3MiLCJjbGVhclN0YXRlIiwiYXBwZW5kUGF0Y2giLCJwcm9wc1BhdGNoIiwiYUNoaWxkcmVuIiwib3JkZXJlZFNldCIsImJDaGlsZHJlbiIsImJDaGlsZEluZGV4Iiwia2V5SW5kZXgiLCJiS2V5cyIsImJGcmVlIiwiZnJlZSIsImFDaGlsZEluZGV4IiwiYUtleXMiLCJuZXdDaGlsZHJlbiIsImZyZWVJbmRleCIsImZyZWVDb3VudCIsImRlbGV0ZWRJdGVtcyIsIml0ZW1JbmRleCIsImFJdGVtIiwibGFzdEZyZWVJbmRleCIsIm5ld0l0ZW0iLCJzaW11bGF0ZUl0ZW0iLCJzaW11bGF0ZSIsInNpbXVsYXRlSW5kZXgiLCJ3YW50ZWRJdGVtIiwicmVvcmRlciIsImFMZW4iLCJiTGVuIiwibGVmdE5vZGUiLCJyaWdodE5vZGUiLCJkaWZmQ2hpbGRyZW4iLCJkZXN0cm95V2lkZ2V0cyIsInRodW5rUGF0Y2giLCJoYXNQYXRjaGVzIiwidW5kZWZpbmVkS2V5cyIsIm5hdGl2ZUlzQXJyYXkiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZGVmaW5pdGlvbiIsIm8iLCJnbG9iYWxUaGlzIiwidG9TdHJpbmdUYWciLCJtb2NrXzEiXSwibWFwcGluZ3MiOiI7dUNBRUFBLEVBQVFDLFdBdUNSLFNBQXFCQyxHQUNuQixJQUFJQyxFQUFPQyxFQUFRRixHQUNmRyxFQUFXRixFQUFLLEdBQ2hCRyxFQUFrQkgs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N0RSLE9BQU91SCxlQUFleEssRUFBUyxhQUFjLENBQUV5RCxPQUFPLEssbUJDSHZELElBQUlrekMsRUFBUyxFQUFRLE1BZUgsSUFkTCxFQUFRLE1BY1FoTCxNQUFLLFdBQVdJLGFBQWEsSUFBSTRLLEVBQU9wTCxXQUFXLENBQUMsRUFBRyxFQUFHLEdBQUksTyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG5jb25zdCBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5jb25zdCBjdXN0b21JbnNwZWN0U3ltYm9sID1cbiAgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbFsnZm9yJ10gPT09ICdmdW5jdGlvbicpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgPyBTeW1ib2xbJ2ZvciddKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgOiBudWxsXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuY29uc3QgS19NQVhfTEVOR1RIID0gMHg3ZmZmZmZmZlxuZXhwb3J0cy5rTWF4TGVuZ3RoID0gS19NQVhfTEVOR1RIXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFByaW50IHdhcm5pbmcgYW5kIHJlY29tbWVuZCB1c2luZyBgYnVmZmVyYCB2NC54IHdoaWNoIGhhcyBhbiBPYmplY3RcbiAqICAgICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIFdlIHJlcG9ydCB0aGF0IHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGlmIHRoZSBhcmUgbm90IHN1YmNsYXNzYWJsZVxuICogdXNpbmcgX19wcm90b19fLiBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YFxuICogKFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4KS4gSUUgMTAgbGFja3Mgc3VwcG9ydFxuICogZm9yIF9fcHJvdG9fXyBhbmQgaGFzIGEgYnVnZ3kgdHlwZWQgYXJyYXkgaW1wbGVtZW50YXRpb24uXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gdHlwZWRBcnJheVN1cHBvcnQoKVxuXG5pZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgJ1RoaXMgYnJvd3NlciBsYWNrcyB0eXBlZCBhcnJheSAoVWludDhBcnJheSkgc3VwcG9ydCB3aGljaCBpcyByZXF1aXJlZCBieSAnICtcbiAgICAnYGJ1ZmZlcmAgdjUueC4gVXNlIGBidWZmZXJgIHY0LnggaWYgeW91IHJlcXVpcmUgb2xkIGJyb3dzZXIgc3VwcG9ydC4nXG4gIClcbn1cblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICAvLyBDYW4gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWQ/XG4gIHRyeSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBjb25zdCBwcm90byA9IHsgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9IH1cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvdG8sIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihhcnIsIHByb3RvKVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ3BhcmVudCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5idWZmZXJcbiAgfVxufSlcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdvZmZzZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnl0ZU9mZnNldFxuICB9XG59KVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAobGVuZ3RoID4gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBsZW5ndGggKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBjb25zdCBidWYgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG4gIHJldHVybiBidWZcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZShhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20oYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG5mdW5jdGlvbiBmcm9tICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlWaWV3KHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICAgIClcbiAgfVxuXG4gIGlmIChpc0luc3RhbmNlKHZhbHVlLCBBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgQXJyYXlCdWZmZXIpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAoaXNJbnN0YW5jZSh2YWx1ZSwgU2hhcmVkQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIFNoYXJlZEFycmF5QnVmZmVyKSkpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IHZhbHVlT2YgPSB2YWx1ZS52YWx1ZU9mICYmIHZhbHVlLnZhbHVlT2YoKVxuICBpZiAodmFsdWVPZiAhPSBudWxsICYmIHZhbHVlT2YgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlT2YsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGNvbnN0IGIgPSBmcm9tT2JqZWN0KHZhbHVlKVxuICBpZiAoYikgcmV0dXJuIGJcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvUHJpbWl0aXZlICE9IG51bGwgJiZcbiAgICAgIHR5cGVvZiB2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0oJ3N0cmluZycpLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gIClcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG4vLyBOb3RlOiBDaGFuZ2UgcHJvdG90eXBlICphZnRlciogQnVmZmVyLmZyb20gaXMgZGVmaW5lZCB0byB3b3JrYXJvdW5kIENocm9tZSBidWc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzE0OFxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlci5wcm90b3R5cGUsIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlciwgVWludDhBcnJheSlcblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIHNpemUgKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgbGV0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG5cbiAgY29uc3QgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICBidWYgPSBidWYuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlIChhcnJheSkge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgY29uc3QgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZltpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlWaWV3IChhcnJheVZpZXcpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYXJyYXlWaWV3LCBVaW50OEFycmF5KSkge1xuICAgIGNvbnN0IGNvcHkgPSBuZXcgVWludDhBcnJheShhcnJheVZpZXcpXG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcihjb3B5LmJ1ZmZlciwgY29weS5ieXRlT2Zmc2V0LCBjb3B5LmJ5dGVMZW5ndGgpXG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheUxpa2UoYXJyYXlWaWV3KVxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wib2Zmc2V0XCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJsZW5ndGhcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgbGV0IGJ1ZlxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICBjb25zdCBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIGNvbnN0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW4pXG5cbiAgICBpZiAoYnVmLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJ1ZlxuICAgIH1cblxuICAgIG9iai5jb3B5KGJ1ZiwgMCwgMCwgbGVuKVxuICAgIHJldHVybiBidWZcbiAgfVxuXG4gIGlmIChvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IG51bWJlcklzTmFOKG9iai5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKDApXG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iailcbiAgfVxuXG4gIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgQXJyYXkuaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmouZGF0YSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwgS19NQVhfTEVOR1RIYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBLX01BWF9MRU5HVEgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiBiICE9IG51bGwgJiYgYi5faXNCdWZmZXIgPT09IHRydWUgJiZcbiAgICBiICE9PSBCdWZmZXIucHJvdG90eXBlIC8vIHNvIEJ1ZmZlci5pc0J1ZmZlcihCdWZmZXIucHJvdG90eXBlKSB3aWxsIGJlIGZhbHNlXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoaXNJbnN0YW5jZShhLCBVaW50OEFycmF5KSkgYSA9IEJ1ZmZlci5mcm9tKGEsIGEub2Zmc2V0LCBhLmJ5dGVMZW5ndGgpXG4gIGlmIChpc0luc3RhbmNlKGIsIFVpbnQ4QXJyYXkpKSBiID0gQnVmZmVyLmZyb20oYiwgYi5vZmZzZXQsIGIuYnl0ZUxlbmd0aClcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwiYnVmMVwiLCBcImJ1ZjJcIiBhcmd1bWVudHMgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheSdcbiAgICApXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICBsZXQgeCA9IGEubGVuZ3RoXG4gIGxldCB5ID0gYi5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIGxldCBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgbGV0IHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgYnVmID0gbGlzdFtpXVxuICAgIGlmIChpc0luc3RhbmNlKGJ1ZiwgVWludDhBcnJheSkpIHtcbiAgICAgIGlmIChwb3MgKyBidWYubGVuZ3RoID4gYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSBCdWZmZXIuZnJvbShidWYpXG4gICAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIGJ1ZixcbiAgICAgICAgICBwb3NcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICB9XG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgaXNJbnN0YW5jZShzdHJpbmcsIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgb3IgQXJyYXlCdWZmZXIuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBzdHJpbmdcbiAgICApXG4gIH1cblxuICBjb25zdCBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGNvbnN0IG11c3RNYXRjaCA9IChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gPT09IHRydWUpXG4gIGlmICghbXVzdE1hdGNoICYmIGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkge1xuICAgICAgICAgIHJldHVybiBtdXN0TWF0Y2ggPyAtMSA6IHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2VyY2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgKGFuZCB0aGUgYGlzLWJ1ZmZlcmAgbnBtIHBhY2thZ2UpXG4vLyB0byBkZXRlY3QgYSBCdWZmZXIgaW5zdGFuY2UuIEl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBgaW5zdGFuY2VvZiBCdWZmZXJgXG4vLyByZWxpYWJseSBpbiBhIGJyb3dzZXJpZnkgY29udGV4dCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlIGRpZmZlcmVudFxuLy8gY29waWVzIG9mIHRoZSAnYnVmZmVyJyBwYWNrYWdlIGluIHVzZS4gVGhpcyBtZXRob2Qgd29ya3MgZXZlbiBmb3IgQnVmZmVyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgZnJvbSBhbm90aGVyIGNvcHkgb2YgdGhlIGBidWZmZXJgIHBhY2thZ2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8xNTRcbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIGNvbnN0IGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nID0gQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZ1xuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIGxldCBzdHIgPSAnJ1xuICBjb25zdCBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkucmVwbGFjZSgvKC57Mn0pL2csICckMSAnKS50cmltKClcbiAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuaWYgKGN1c3RvbUluc3BlY3RTeW1ib2wpIHtcbiAgQnVmZmVyLnByb3RvdHlwZVtjdXN0b21JbnNwZWN0U3ltYm9sXSA9IEJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoaXNJbnN0YW5jZSh0YXJnZXQsIFVpbnQ4QXJyYXkpKSB7XG4gICAgdGFyZ2V0ID0gQnVmZmVyLmZyb20odGFyZ2V0LCB0YXJnZXQub2Zmc2V0LCB0YXJnZXQuYnl0ZUxlbmd0aClcbiAgfVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ0YXJnZXRcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5LiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHRhcmdldClcbiAgICApXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICBsZXQgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgbGV0IHkgPSBlbmQgLSBzdGFydFxuICBjb25zdCBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIGNvbnN0IHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIGNvbnN0IHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0IC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChudW1iZXJJc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFt2YWxdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICBsZXQgaW5kZXhTaXplID0gMVxuICBsZXQgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICBsZXQgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICBsZXQgaVxuICBpZiAoZGlyKSB7XG4gICAgbGV0IGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICBjb25zdCByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgbGV0IGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChudW1iZXJJc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoID4+PiAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIGNvbnN0IHJlcyA9IFtdXG5cbiAgbGV0IGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIGxldCBjb2RlUG9pbnQgPSBudWxsXG4gICAgbGV0IGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRilcbiAgICAgID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERilcbiAgICAgICAgICA/IDNcbiAgICAgICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKVxuICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICBsZXQgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG5jb25zdCBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgY29uc3QgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICBsZXQgcmVzID0gJydcbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGxldCByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBsZXQgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBjb25zdCBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgbGV0IG91dCA9ICcnXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IGhleFNsaWNlTG9va3VwVGFibGVbYnVmW2ldXVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgbGV0IHJlcyA9ICcnXG4gIC8vIElmIGJ5dGVzLmxlbmd0aCBpcyBvZGQsIHRoZSBsYXN0IDggYml0cyBtdXN0IGJlIGlnbm9yZWQgKHNhbWUgYXMgbm9kZS5qcylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIChieXRlc1tpICsgMV0gKiAyNTYpKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgY29uc3QgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YobmV3QnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldF1cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICBsZXQgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ1VJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdVSW50NjRMRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IGxvID0gZmlyc3QgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAyNFxuXG4gIGNvbnN0IGhpID0gdGhpc1srK29mZnNldF0gK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIGxhc3QgKiAyICoqIDI0XG5cbiAgcmV0dXJuIEJpZ0ludChsbykgKyAoQmlnSW50KGhpKSA8PCBCaWdJbnQoMzIpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnVUludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ1VJbnQ2NEJFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgaGkgPSBmaXJzdCAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdXG5cbiAgY29uc3QgbG8gPSB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIGxhc3RcblxuICByZXR1cm4gKEJpZ0ludChoaSkgPDwgQmlnSW50KDMyKSkgKyBCaWdJbnQobG8pXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXRdXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoXG4gIGxldCBtdWwgPSAxXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ0ludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ0ludDY0TEUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldCArIDRdICtcbiAgICB0aGlzW29mZnNldCArIDVdICogMiAqKiA4ICtcbiAgICB0aGlzW29mZnNldCArIDZdICogMiAqKiAxNiArXG4gICAgKGxhc3QgPDwgMjQpIC8vIE92ZXJmbG93XG5cbiAgcmV0dXJuIChCaWdJbnQodmFsKSA8PCBCaWdJbnQoMzIpKSArXG4gICAgQmlnSW50KGZpcnN0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdJbnQ2NEJFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgdmFsID0gKGZpcnN0IDw8IDI0KSArIC8vIE92ZXJmbG93XG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF1cblxuICByZXR1cm4gKEJpZ0ludCh2YWwpIDw8IEJpZ0ludCgzMikpICtcbiAgICBCaWdJbnQodGhpc1srK29mZnNldF0gKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICBsYXN0KVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICBsZXQgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIGxldCBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiB3cnRCaWdVSW50NjRMRSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBtaW4sIG1heCkge1xuICBjaGVja0ludEJJKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIDcpXG5cbiAgbGV0IGxvID0gTnVtYmVyKHZhbHVlICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbGV0IGhpID0gTnVtYmVyKHZhbHVlID4+IEJpZ0ludCgzMikgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICByZXR1cm4gb2Zmc2V0XG59XG5cbmZ1bmN0aW9uIHdydEJpZ1VJbnQ2NEJFIChidWYsIHZhbHVlLCBvZmZzZXQsIG1pbiwgbWF4KSB7XG4gIGNoZWNrSW50QkkodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgNylcblxuICBsZXQgbG8gPSBOdW1iZXIodmFsdWUgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQgKyA3XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNl0gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDVdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA0XSA9IGxvXG4gIGxldCBoaSA9IE51bWJlcih2YWx1ZSA+PiBCaWdJbnQoMzIpICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0ICsgM10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCArIDJdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQgKyAxXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0XSA9IGhpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdVSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ1VJbnQ2NExFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0TEUodGhpcywgdmFsdWUsIG9mZnNldCwgQmlnSW50KDApLCBCaWdJbnQoJzB4ZmZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ1VJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnVUludDY0QkUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRCRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBCaWdJbnQoMCksIEJpZ0ludCgnMHhmZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIGxldCBpID0gMFxuICBsZXQgbXVsID0gMVxuICBsZXQgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnSW50NjRMRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NExFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIC1CaWdJbnQoJzB4ODAwMDAwMDAwMDAwMDAwMCcpLCBCaWdJbnQoJzB4N2ZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ0ludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdJbnQ2NEJFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0QkUodGhpcywgdmFsdWUsIG9mZnNldCwgLUJpZ0ludCgnMHg4MDAwMDAwMDAwMDAwMDAwJyksIEJpZ0ludCgnMHg3ZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzaG91bGQgYmUgYSBCdWZmZXInKVxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgY29uc3QgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gVXNlIGJ1aWx0LWluIHdoZW4gYXZhaWxhYmxlLCBtaXNzaW5nIGZyb20gSUUxMVxuICAgIHRoaXMuY29weVdpdGhpbih0YXJnZXRTdGFydCwgc3RhcnQsIGVuZClcbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyAmJiBjb2RlIDwgMTI4KSB8fFxuICAgICAgICAgIGVuY29kaW5nID09PSAnbGF0aW4xJykge1xuICAgICAgICAvLyBGYXN0IHBhdGg6IElmIGB2YWxgIGZpdHMgaW50byBhIHNpbmdsZSBieXRlLCB1c2UgdGhhdCBudW1lcmljIHZhbHVlLlxuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbClcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICBsZXQgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gICAgY29uc3QgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHZhbHVlIFwiJyArIHZhbCArXG4gICAgICAgICdcIiBpcyBpbnZhbGlkIGZvciBhcmd1bWVudCBcInZhbHVlXCInKVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBDVVNUT00gRVJST1JTXG4vLyA9PT09PT09PT09PT09XG5cbi8vIFNpbXBsaWZpZWQgdmVyc2lvbnMgZnJvbSBOb2RlLCBjaGFuZ2VkIGZvciBCdWZmZXItb25seSB1c2FnZVxuY29uc3QgZXJyb3JzID0ge31cbmZ1bmN0aW9uIEUgKHN5bSwgZ2V0TWVzc2FnZSwgQmFzZSkge1xuICBlcnJvcnNbc3ltXSA9IGNsYXNzIE5vZGVFcnJvciBleHRlbmRzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKClcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdtZXNzYWdlJywge1xuICAgICAgICB2YWx1ZTogZ2V0TWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGQgdGhlIGVycm9yIGNvZGUgdG8gdGhlIG5hbWUgdG8gaW5jbHVkZSBpdCBpbiB0aGUgc3RhY2sgdHJhY2UuXG4gICAgICB0aGlzLm5hbWUgPSBgJHt0aGlzLm5hbWV9IFske3N5bX1dYFxuICAgICAgLy8gQWNjZXNzIHRoZSBzdGFjayB0byBnZW5lcmF0ZSB0aGUgZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGVycm9yIGNvZGVcbiAgICAgIC8vIGZyb20gdGhlIG5hbWUuXG4gICAgICB0aGlzLnN0YWNrIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAvLyBSZXNldCB0aGUgbmFtZSB0byB0aGUgYWN0dWFsIG5hbWUuXG4gICAgICBkZWxldGUgdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgZ2V0IGNvZGUgKCkge1xuICAgICAgcmV0dXJuIHN5bVxuICAgIH1cblxuICAgIHNldCBjb2RlICh2YWx1ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2RlJywge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0b1N0cmluZyAoKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSBbJHtzeW19XTogJHt0aGlzLm1lc3NhZ2V9YFxuICAgIH1cbiAgfVxufVxuXG5FKCdFUlJfQlVGRkVSX09VVF9PRl9CT1VORFMnLFxuICBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gYCR7bmFtZX0gaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzYFxuICAgIH1cblxuICAgIHJldHVybiAnQXR0ZW1wdCB0byBhY2Nlc3MgbWVtb3J5IG91dHNpZGUgYnVmZmVyIGJvdW5kcydcbiAgfSwgUmFuZ2VFcnJvcilcbkUoJ0VSUl9JTlZBTElEX0FSR19UWVBFJyxcbiAgZnVuY3Rpb24gKG5hbWUsIGFjdHVhbCkge1xuICAgIHJldHVybiBgVGhlIFwiJHtuYW1lfVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgYWN0dWFsfWBcbiAgfSwgVHlwZUVycm9yKVxuRSgnRVJSX09VVF9PRl9SQU5HRScsXG4gIGZ1bmN0aW9uIChzdHIsIHJhbmdlLCBpbnB1dCkge1xuICAgIGxldCBtc2cgPSBgVGhlIHZhbHVlIG9mIFwiJHtzdHJ9XCIgaXMgb3V0IG9mIHJhbmdlLmBcbiAgICBsZXQgcmVjZWl2ZWQgPSBpbnB1dFxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGlucHV0KSAmJiBNYXRoLmFicyhpbnB1dCkgPiAyICoqIDMyKSB7XG4gICAgICByZWNlaXZlZCA9IGFkZE51bWVyaWNhbFNlcGFyYXRvcihTdHJpbmcoaW5wdXQpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnYmlnaW50Jykge1xuICAgICAgcmVjZWl2ZWQgPSBTdHJpbmcoaW5wdXQpXG4gICAgICBpZiAoaW5wdXQgPiBCaWdJbnQoMikgKiogQmlnSW50KDMyKSB8fCBpbnB1dCA8IC0oQmlnSW50KDIpICoqIEJpZ0ludCgzMikpKSB7XG4gICAgICAgIHJlY2VpdmVkID0gYWRkTnVtZXJpY2FsU2VwYXJhdG9yKHJlY2VpdmVkKVxuICAgICAgfVxuICAgICAgcmVjZWl2ZWQgKz0gJ24nXG4gICAgfVxuICAgIG1zZyArPSBgIEl0IG11c3QgYmUgJHtyYW5nZX0uIFJlY2VpdmVkICR7cmVjZWl2ZWR9YFxuICAgIHJldHVybiBtc2dcbiAgfSwgUmFuZ2VFcnJvcilcblxuZnVuY3Rpb24gYWRkTnVtZXJpY2FsU2VwYXJhdG9yICh2YWwpIHtcbiAgbGV0IHJlcyA9ICcnXG4gIGxldCBpID0gdmFsLmxlbmd0aFxuICBjb25zdCBzdGFydCA9IHZhbFswXSA9PT0gJy0nID8gMSA6IDBcbiAgZm9yICg7IGkgPj0gc3RhcnQgKyA0OyBpIC09IDMpIHtcbiAgICByZXMgPSBgXyR7dmFsLnNsaWNlKGkgLSAzLCBpKX0ke3Jlc31gXG4gIH1cbiAgcmV0dXJuIGAke3ZhbC5zbGljZSgwLCBpKX0ke3Jlc31gXG59XG5cbi8vIENIRUNLIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNoZWNrQm91bmRzIChidWYsIG9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBpZiAoYnVmW29mZnNldF0gPT09IHVuZGVmaW5lZCB8fCBidWZbb2Zmc2V0ICsgYnl0ZUxlbmd0aF0gPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgYnVmLmxlbmd0aCAtIChieXRlTGVuZ3RoICsgMSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tJbnRCSSAodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHtcbiAgICBjb25zdCBuID0gdHlwZW9mIG1pbiA9PT0gJ2JpZ2ludCcgPyAnbicgOiAnJ1xuICAgIGxldCByYW5nZVxuICAgIGlmIChieXRlTGVuZ3RoID4gMykge1xuICAgICAgaWYgKG1pbiA9PT0gMCB8fCBtaW4gPT09IEJpZ0ludCgwKSkge1xuICAgICAgICByYW5nZSA9IGA+PSAwJHtufSBhbmQgPCAyJHtufSAqKiAkeyhieXRlTGVuZ3RoICsgMSkgKiA4fSR7bn1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5nZSA9IGA+PSAtKDIke259ICoqICR7KGJ5dGVMZW5ndGggKyAxKSAqIDggLSAxfSR7bn0pIGFuZCA8IDIgKiogYCArXG4gICAgICAgICAgICAgICAgYCR7KGJ5dGVMZW5ndGggKyAxKSAqIDggLSAxfSR7bn1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmdlID0gYD49ICR7bWlufSR7bn0gYW5kIDw9ICR7bWF4fSR7bn1gXG4gICAgfVxuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSgndmFsdWUnLCByYW5nZSwgdmFsdWUpXG4gIH1cbiAgY2hlY2tCb3VuZHMoYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyICh2YWx1ZSwgbmFtZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX0lOVkFMSURfQVJHX1RZUEUobmFtZSwgJ251bWJlcicsIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kc0Vycm9yICh2YWx1ZSwgbGVuZ3RoLCB0eXBlKSB7XG4gIGlmIChNYXRoLmZsb29yKHZhbHVlKSAhPT0gdmFsdWUpIHtcbiAgICB2YWxpZGF0ZU51bWJlcih2YWx1ZSwgdHlwZSlcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UodHlwZSB8fCAnb2Zmc2V0JywgJ2FuIGludGVnZXInLCB2YWx1ZSlcbiAgfVxuXG4gIGlmIChsZW5ndGggPCAwKSB7XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfQlVGRkVSX09VVF9PRl9CT1VORFMoKVxuICB9XG5cbiAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKHR5cGUgfHwgJ29mZnNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPj0gJHt0eXBlID8gMSA6IDB9IGFuZCA8PSAke2xlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUpXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuY29uc3QgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSB0YWtlcyBlcXVhbCBzaWducyBhcyBlbmQgb2YgdGhlIEJhc2U2NCBlbmNvZGluZ1xuICBzdHIgPSBzdHIuc3BsaXQoJz0nKVswXVxuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIGxldCBjb2RlUG9pbnRcbiAgY29uc3QgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICBsZXQgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgY29uc3QgYnl0ZXMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICBjb25zdCBieXRlQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIGxldCBjLCBoaSwgbG9cbiAgY29uc3QgYnl0ZUFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBsZXQgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuLy8gQXJyYXlCdWZmZXIgb3IgVWludDhBcnJheSBvYmplY3RzIGZyb20gb3RoZXIgY29udGV4dHMgKGkuZS4gaWZyYW1lcykgZG8gbm90IHBhc3Ncbi8vIHRoZSBgaW5zdGFuY2VvZmAgY2hlY2sgYnV0IHRoZXkgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgb2YgdGhhdCB0eXBlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTY2XG5mdW5jdGlvbiBpc0luc3RhbmNlIChvYmosIHR5cGUpIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHR5cGUgfHxcbiAgICAob2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT0gbnVsbCAmJlxuICAgICAgb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09IHR5cGUubmFtZSlcbn1cbmZ1bmN0aW9uIG51bWJlcklzTmFOIChvYmopIHtcbiAgLy8gRm9yIElFMTEgc3VwcG9ydFxuICByZXR1cm4gb2JqICE9PSBvYmogLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuLy8gQ3JlYXRlIGxvb2t1cCB0YWJsZSBmb3IgYHRvU3RyaW5nKCdoZXgnKWBcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzIxOVxuY29uc3QgaGV4U2xpY2VMb29rdXBUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFscGhhYmV0ID0gJzAxMjM0NTY3ODlhYmNkZWYnXG4gIGNvbnN0IHRhYmxlID0gbmV3IEFycmF5KDI1NilcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgY29uc3QgaTE2ID0gaSAqIDE2XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICB0YWJsZVtpMTYgKyBqXSA9IGFscGhhYmV0W2ldICsgYWxwaGFiZXRbal1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhYmxlXG59KSgpXG5cbi8vIFJldHVybiBub3QgZnVuY3Rpb24gd2l0aCBFcnJvciBpZiBCaWdJbnQgbm90IHN1cHBvcnRlZFxuZnVuY3Rpb24gZGVmaW5lQmlnSW50TWV0aG9kIChmbikge1xuICByZXR1cm4gdHlwZW9mIEJpZ0ludCA9PT0gJ3VuZGVmaW5lZCcgPyBCdWZmZXJCaWdJbnROb3REZWZpbmVkIDogZm5cbn1cblxuZnVuY3Rpb24gQnVmZmVyQmlnSW50Tm90RGVmaW5lZCAoKSB7XG4gIHRocm93IG5ldyBFcnJvcignQmlnSW50IG5vdCBzdXBwb3J0ZWQnKVxufVxuIiwiLypcbiAgTW9kdWxlIGRlcGVuZGVuY2llc1xuKi9cbnZhciBFbGVtZW50VHlwZSA9IHJlcXVpcmUoJ2RvbWVsZW1lbnR0eXBlJyk7XG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdlbnRpdGllcycpO1xuXG4vKiBtaXhlZC1jYXNlIFNWRyBhbmQgTWF0aE1MIHRhZ3MgJiBhdHRyaWJ1dGVzXG4gICByZWNvZ25pemVkIGJ5IHRoZSBIVE1MIHBhcnNlciwgc2VlXG4gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9wYXJzaW5nLmh0bWwjcGFyc2luZy1tYWluLWluZm9yZWlnblxuKi9cbnZhciBmb3JlaWduTmFtZXMgPSByZXF1aXJlKCcuL2ZvcmVpZ25OYW1lcy5qc29uJyk7XG5mb3JlaWduTmFtZXMuZWxlbWVudE5hbWVzLl9fcHJvdG9fXyA9IG51bGw7IC8qIHVzZSBhcyBhIHNpbXBsZSBkaWN0aW9uYXJ5ICovXG5mb3JlaWduTmFtZXMuYXR0cmlidXRlTmFtZXMuX19wcm90b19fID0gbnVsbDtcblxudmFyIHVuZW5jb2RlZEVsZW1lbnRzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIHN0eWxlOiB0cnVlLFxuICBzY3JpcHQ6IHRydWUsXG4gIHhtcDogdHJ1ZSxcbiAgaWZyYW1lOiB0cnVlLFxuICBub2VtYmVkOiB0cnVlLFxuICBub2ZyYW1lczogdHJ1ZSxcbiAgcGxhaW50ZXh0OiB0cnVlLFxuICBub3NjcmlwdDogdHJ1ZVxufTtcblxuLypcbiAgRm9ybWF0IGF0dHJpYnV0ZXNcbiovXG5mdW5jdGlvbiBmb3JtYXRBdHRycyhhdHRyaWJ1dGVzLCBvcHRzKSB7XG4gIGlmICghYXR0cmlidXRlcykgcmV0dXJuO1xuXG4gIHZhciBvdXRwdXQgPSAnJztcbiAgdmFyIHZhbHVlO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYXR0cmlidXRlc1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgIHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgIGlmIChvdXRwdXQpIHtcbiAgICAgIG91dHB1dCArPSAnICc7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMueG1sTW9kZSA9PT0gJ2ZvcmVpZ24nKSB7XG4gICAgICAvKiBmaXggdXAgbWl4ZWQtY2FzZSBhdHRyaWJ1dGUgbmFtZXMgKi9cbiAgICAgIGtleSA9IGZvcmVpZ25OYW1lcy5hdHRyaWJ1dGVOYW1lc1trZXldIHx8IGtleTtcbiAgICB9XG4gICAgb3V0cHV0ICs9IGtleTtcbiAgICBpZiAoKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJykgfHwgb3B0cy54bWxNb2RlKSB7XG4gICAgICBvdXRwdXQgKz1cbiAgICAgICAgJz1cIicgK1xuICAgICAgICAob3B0cy5kZWNvZGVFbnRpdGllc1xuICAgICAgICAgID8gZW50aXRpZXMuZW5jb2RlWE1MKHZhbHVlKVxuICAgICAgICAgIDogdmFsdWUucmVwbGFjZSgvXFxcIi9nLCAnJnF1b3Q7JykpICtcbiAgICAgICAgJ1wiJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKlxuICBTZWxmLWVuY2xvc2luZyB0YWdzIChzdG9sZW4gZnJvbSBub2RlLWh0bWxwYXJzZXIpXG4qL1xudmFyIHNpbmdsZVRhZyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBhcmVhOiB0cnVlLFxuICBiYXNlOiB0cnVlLFxuICBiYXNlZm9udDogdHJ1ZSxcbiAgYnI6IHRydWUsXG4gIGNvbDogdHJ1ZSxcbiAgY29tbWFuZDogdHJ1ZSxcbiAgZW1iZWQ6IHRydWUsXG4gIGZyYW1lOiB0cnVlLFxuICBocjogdHJ1ZSxcbiAgaW1nOiB0cnVlLFxuICBpbnB1dDogdHJ1ZSxcbiAgaXNpbmRleDogdHJ1ZSxcbiAga2V5Z2VuOiB0cnVlLFxuICBsaW5rOiB0cnVlLFxuICBtZXRhOiB0cnVlLFxuICBwYXJhbTogdHJ1ZSxcbiAgc291cmNlOiB0cnVlLFxuICB0cmFjazogdHJ1ZSxcbiAgd2JyOiB0cnVlXG59O1xuXG52YXIgcmVuZGVyID0gKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9tLCBvcHRzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkb20pICYmICFkb20uY2hlZXJpbykgZG9tID0gW2RvbV07XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIHZhciBvdXRwdXQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtID0gZG9tW2ldO1xuXG4gICAgaWYgKGVsZW0udHlwZSA9PT0gJ3Jvb3QnKSBvdXRwdXQgKz0gcmVuZGVyKGVsZW0uY2hpbGRyZW4sIG9wdHMpO1xuICAgIGVsc2UgaWYgKEVsZW1lbnRUeXBlLmlzVGFnKGVsZW0pKSBvdXRwdXQgKz0gcmVuZGVyVGFnKGVsZW0sIG9wdHMpO1xuICAgIGVsc2UgaWYgKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuRGlyZWN0aXZlKVxuICAgICAgb3V0cHV0ICs9IHJlbmRlckRpcmVjdGl2ZShlbGVtKTtcbiAgICBlbHNlIGlmIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLkNvbW1lbnQpIG91dHB1dCArPSByZW5kZXJDb21tZW50KGVsZW0pO1xuICAgIGVsc2UgaWYgKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuQ0RBVEEpIG91dHB1dCArPSByZW5kZXJDZGF0YShlbGVtKTtcbiAgICBlbHNlIG91dHB1dCArPSByZW5kZXJUZXh0KGVsZW0sIG9wdHMpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn0pO1xuXG52YXIgZm9yZWlnbk1vZGVJbnRlZ3JhdGlvblBvaW50cyA9IFtcbiAgJ21pJyxcbiAgJ21vJyxcbiAgJ21uJyxcbiAgJ21zJyxcbiAgJ210ZXh0JyxcbiAgJ2Fubm90YXRpb24teG1sJyxcbiAgJ2ZvcmVpZ25PYmplY3QnLFxuICAnZGVzYycsXG4gICd0aXRsZSdcbl07XG5cbmZ1bmN0aW9uIHJlbmRlclRhZyhlbGVtLCBvcHRzKSB7XG4gIC8vIEhhbmRsZSBTVkcgLyBNYXRoTUwgaW4gSFRNTFxuICBpZiAob3B0cy54bWxNb2RlID09PSAnZm9yZWlnbicpIHtcbiAgICAvKiBmaXggdXAgbWl4ZWQtY2FzZSBlbGVtZW50IG5hbWVzICovXG4gICAgZWxlbS5uYW1lID0gZm9yZWlnbk5hbWVzLmVsZW1lbnROYW1lc1tlbGVtLm5hbWVdIHx8IGVsZW0ubmFtZTtcbiAgICAvKiBleGl0IGZvcmVpZ24gbW9kZSBhdCBpbnRlZ3JhdGlvbiBwb2ludHMgKi9cbiAgICBpZiAoXG4gICAgICBlbGVtLnBhcmVudCAmJlxuICAgICAgZm9yZWlnbk1vZGVJbnRlZ3JhdGlvblBvaW50cy5pbmRleE9mKGVsZW0ucGFyZW50Lm5hbWUpID49IDBcbiAgICApXG4gICAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cywgeyB4bWxNb2RlOiBmYWxzZSB9KTtcbiAgfVxuICBpZiAoIW9wdHMueG1sTW9kZSAmJiBbJ3N2ZycsICdtYXRoJ10uaW5kZXhPZihlbGVtLm5hbWUpID49IDApIHtcbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cywgeyB4bWxNb2RlOiAnZm9yZWlnbicgfSk7XG4gIH1cblxuICB2YXIgdGFnID0gJzwnICsgZWxlbS5uYW1lO1xuICB2YXIgYXR0cmlicyA9IGZvcm1hdEF0dHJzKGVsZW0uYXR0cmlicywgb3B0cyk7XG5cbiAgaWYgKGF0dHJpYnMpIHtcbiAgICB0YWcgKz0gJyAnICsgYXR0cmlicztcbiAgfVxuXG4gIGlmIChvcHRzLnhtbE1vZGUgJiYgKCFlbGVtLmNoaWxkcmVuIHx8IGVsZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSkge1xuICAgIHRhZyArPSAnLz4nO1xuICB9IGVsc2Uge1xuICAgIHRhZyArPSAnPic7XG4gICAgaWYgKGVsZW0uY2hpbGRyZW4pIHtcbiAgICAgIHRhZyArPSByZW5kZXIoZWxlbS5jaGlsZHJlbiwgb3B0cyk7XG4gICAgfVxuXG4gICAgaWYgKCFzaW5nbGVUYWdbZWxlbS5uYW1lXSB8fCBvcHRzLnhtbE1vZGUpIHtcbiAgICAgIHRhZyArPSAnPC8nICsgZWxlbS5uYW1lICsgJz4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRpcmVjdGl2ZShlbGVtKSB7XG4gIHJldHVybiAnPCcgKyBlbGVtLmRhdGEgKyAnPic7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRleHQoZWxlbSwgb3B0cykge1xuICB2YXIgZGF0YSA9IGVsZW0uZGF0YSB8fCAnJztcblxuICAvLyBpZiBlbnRpdGllcyB3ZXJlbid0IGRlY29kZWQsIG5vIG5lZWQgdG8gZW5jb2RlIHRoZW0gYmFja1xuICBpZiAoXG4gICAgb3B0cy5kZWNvZGVFbnRpdGllcyAmJlxuICAgICEoZWxlbS5wYXJlbnQgJiYgZWxlbS5wYXJlbnQubmFtZSBpbiB1bmVuY29kZWRFbGVtZW50cylcbiAgKSB7XG4gICAgZGF0YSA9IGVudGl0aWVzLmVuY29kZVhNTChkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDZGF0YShlbGVtKSB7XG4gIHJldHVybiAnPCFbQ0RBVEFbJyArIGVsZW0uY2hpbGRyZW5bMF0uZGF0YSArICddXT4nO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb21tZW50KGVsZW0pIHtcbiAgcmV0dXJuICc8IS0tJyArIGVsZW0uZGF0YSArICctLT4nO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRvY3R5cGUgPSBleHBvcnRzLkNEQVRBID0gZXhwb3J0cy5UYWcgPSBleHBvcnRzLlN0eWxlID0gZXhwb3J0cy5TY3JpcHQgPSBleHBvcnRzLkNvbW1lbnQgPSBleHBvcnRzLkRpcmVjdGl2ZSA9IGV4cG9ydHMuVGV4dCA9IGV4cG9ydHMuUm9vdCA9IGV4cG9ydHMuaXNUYWcgPSBleHBvcnRzLkVsZW1lbnRUeXBlID0gdm9pZCAwO1xuLyoqIFR5cGVzIG9mIGVsZW1lbnRzIGZvdW5kIGluIGh0bWxwYXJzZXIyJ3MgRE9NICovXG52YXIgRWxlbWVudFR5cGU7XG4oZnVuY3Rpb24gKEVsZW1lbnRUeXBlKSB7XG4gICAgLyoqIFR5cGUgZm9yIHRoZSByb290IGVsZW1lbnQgb2YgYSBkb2N1bWVudCAqL1xuICAgIEVsZW1lbnRUeXBlW1wiUm9vdFwiXSA9IFwicm9vdFwiO1xuICAgIC8qKiBUeXBlIGZvciBUZXh0ICovXG4gICAgRWxlbWVudFR5cGVbXCJUZXh0XCJdID0gXCJ0ZXh0XCI7XG4gICAgLyoqIFR5cGUgZm9yIDw/IC4uLiA/PiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiRGlyZWN0aXZlXCJdID0gXCJkaXJlY3RpdmVcIjtcbiAgICAvKiogVHlwZSBmb3IgPCEtLSAuLi4gLS0+ICovXG4gICAgRWxlbWVudFR5cGVbXCJDb21tZW50XCJdID0gXCJjb21tZW50XCI7XG4gICAgLyoqIFR5cGUgZm9yIDxzY3JpcHQ+IHRhZ3MgKi9cbiAgICBFbGVtZW50VHlwZVtcIlNjcmlwdFwiXSA9IFwic2NyaXB0XCI7XG4gICAgLyoqIFR5cGUgZm9yIDxzdHlsZT4gdGFncyAqL1xuICAgIEVsZW1lbnRUeXBlW1wiU3R5bGVcIl0gPSBcInN0eWxlXCI7XG4gICAgLyoqIFR5cGUgZm9yIEFueSB0YWcgKi9cbiAgICBFbGVtZW50VHlwZVtcIlRhZ1wiXSA9IFwidGFnXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhW0NEQVRBWyAuLi4gXV0+ICovXG4gICAgRWxlbWVudFR5cGVbXCJDREFUQVwiXSA9IFwiY2RhdGFcIjtcbiAgICAvKiogVHlwZSBmb3IgPCFkb2N0eXBlIC4uLj4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkRvY3R5cGVcIl0gPSBcImRvY3R5cGVcIjtcbn0pKEVsZW1lbnRUeXBlID0gZXhwb3J0cy5FbGVtZW50VHlwZSB8fCAoZXhwb3J0cy5FbGVtZW50VHlwZSA9IHt9KSk7XG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhIHRhZyBvciBub3QuXG4gKlxuICogQHBhcmFtIGVsZW0gRWxlbWVudCB0byB0ZXN0XG4gKi9cbmZ1bmN0aW9uIGlzVGFnKGVsZW0pIHtcbiAgICByZXR1cm4gKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuVGFnIHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuU2NyaXB0IHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuU3R5bGUpO1xufVxuZXhwb3J0cy5pc1RhZyA9IGlzVGFnO1xuLy8gRXhwb3J0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbi8qKiBUeXBlIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIGEgZG9jdW1lbnQgKi9cbmV4cG9ydHMuUm9vdCA9IEVsZW1lbnRUeXBlLlJvb3Q7XG4vKiogVHlwZSBmb3IgVGV4dCAqL1xuZXhwb3J0cy5UZXh0ID0gRWxlbWVudFR5cGUuVGV4dDtcbi8qKiBUeXBlIGZvciA8PyAuLi4gPz4gKi9cbmV4cG9ydHMuRGlyZWN0aXZlID0gRWxlbWVudFR5cGUuRGlyZWN0aXZlO1xuLyoqIFR5cGUgZm9yIDwhLS0gLi4uIC0tPiAqL1xuZXhwb3J0cy5Db21tZW50ID0gRWxlbWVudFR5cGUuQ29tbWVudDtcbi8qKiBUeXBlIGZvciA8c2NyaXB0PiB0YWdzICovXG5leHBvcnRzLlNjcmlwdCA9IEVsZW1lbnRUeXBlLlNjcmlwdDtcbi8qKiBUeXBlIGZvciA8c3R5bGU+IHRhZ3MgKi9cbmV4cG9ydHMuU3R5bGUgPSBFbGVtZW50VHlwZS5TdHlsZTtcbi8qKiBUeXBlIGZvciBBbnkgdGFnICovXG5leHBvcnRzLlRhZyA9IEVsZW1lbnRUeXBlLlRhZztcbi8qKiBUeXBlIGZvciA8IVtDREFUQVsgLi4uIF1dPiAqL1xuZXhwb3J0cy5DREFUQSA9IEVsZW1lbnRUeXBlLkNEQVRBO1xuLyoqIFR5cGUgZm9yIDwhZG9jdHlwZSAuLi4+ICovXG5leHBvcnRzLkRvY3R5cGUgPSBFbGVtZW50VHlwZS5Eb2N0eXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlY29kZUhUTUwgPSBleHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBleHBvcnRzLmRlY29kZVhNTCA9IHZvaWQgMDtcbnZhciBlbnRpdGllc19qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9lbnRpdGllcy5qc29uXCIpKTtcbnZhciBsZWdhY3lfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvbGVnYWN5Lmpzb25cIikpO1xudmFyIHhtbF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy94bWwuanNvblwiKSk7XG52YXIgZGVjb2RlX2NvZGVwb2ludF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2RlY29kZV9jb2RlcG9pbnRcIikpO1xudmFyIHN0cmljdEVudGl0eVJlID0gLyYoPzpbYS16QS1aMC05XSt8I1t4WF1bXFxkYS1mQS1GXSt8I1xcZCspOy9nO1xuZXhwb3J0cy5kZWNvZGVYTUwgPSBnZXRTdHJpY3REZWNvZGVyKHhtbF9qc29uXzEuZGVmYXVsdCk7XG5leHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBnZXRTdHJpY3REZWNvZGVyKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbmZ1bmN0aW9uIGdldFN0cmljdERlY29kZXIobWFwKSB7XG4gICAgdmFyIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihtYXApO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHN0cmljdEVudGl0eVJlLCByZXBsYWNlKTsgfTtcbn1cbnZhciBzb3J0ZXIgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gKGEgPCBiID8gMSA6IC0xKTsgfTtcbmV4cG9ydHMuZGVjb2RlSFRNTCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZ2FjeSA9IE9iamVjdC5rZXlzKGxlZ2FjeV9qc29uXzEuZGVmYXVsdCkuc29ydChzb3J0ZXIpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpLnNvcnQoc29ydGVyKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsZWdhY3lbal0gPT09IGtleXNbaV0pIHtcbiAgICAgICAgICAgIGtleXNbaV0gKz0gXCI7P1wiO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5c1tpXSArPSBcIjtcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiJig/OlwiICsga2V5cy5qb2luKFwifFwiKSArIFwifCNbeFhdW1xcXFxkYS1mQS1GXSs7P3wjXFxcXGQrOz8pXCIsIFwiZ1wiKTtcbiAgICB2YXIgcmVwbGFjZSA9IGdldFJlcGxhY2VyKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbiAgICBmdW5jdGlvbiByZXBsYWNlcihzdHIpIHtcbiAgICAgICAgaWYgKHN0ci5zdWJzdHIoLTEpICE9PSBcIjtcIilcbiAgICAgICAgICAgIHN0ciArPSBcIjtcIjtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2Uoc3RyKTtcbiAgICB9XG4gICAgLy8gVE9ETyBjb25zaWRlciBjcmVhdGluZyBhIG1lcmdlZCBtYXBcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShyZSwgcmVwbGFjZXIpOyB9O1xufSkoKTtcbmZ1bmN0aW9uIGdldFJlcGxhY2VyKG1hcCkge1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKHN0cikge1xuICAgICAgICBpZiAoc3RyLmNoYXJBdCgxKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBzZWNvbmRDaGFyID0gc3RyLmNoYXJBdCgyKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmRDaGFyID09PSBcIlhcIiB8fCBzZWNvbmRDaGFyID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVfY29kZXBvaW50XzEuZGVmYXVsdChwYXJzZUludChzdHIuc3Vic3RyKDMpLCAxNikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZV9jb2RlcG9pbnRfMS5kZWZhdWx0KHBhcnNlSW50KHN0ci5zdWJzdHIoMiksIDEwKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItbnVsbGlzaC1jb2FsZXNjaW5nXG4gICAgICAgIHJldHVybiBtYXBbc3RyLnNsaWNlKDEsIC0xKV0gfHwgc3RyO1xuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWNvZGVfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZGVjb2RlLmpzb25cIikpO1xuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2hlL2Jsb2IvbWFzdGVyL3NyYy9oZS5qcyNMOTQtTDExOVxudmFyIGZyb21Db2RlUG9pbnQgPSBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktY29uZGl0aW9uXG5TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICAgIGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweGZmZmYpIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4+IDEwKSAmIDB4M2ZmKSB8IDB4ZDgwMCk7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSAweGRjMDAgfCAoY29kZVBvaW50ICYgMHgzZmYpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludChjb2RlUG9pbnQpIHtcbiAgICBpZiAoKGNvZGVQb2ludCA+PSAweGQ4MDAgJiYgY29kZVBvaW50IDw9IDB4ZGZmZikgfHwgY29kZVBvaW50ID4gMHgxMGZmZmYpIHtcbiAgICAgICAgcmV0dXJuIFwiXFx1RkZGRFwiO1xuICAgIH1cbiAgICBpZiAoY29kZVBvaW50IGluIGRlY29kZV9qc29uXzEuZGVmYXVsdCkge1xuICAgICAgICBjb2RlUG9pbnQgPSBkZWNvZGVfanNvbl8xLmRlZmF1bHRbY29kZVBvaW50XTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21Db2RlUG9pbnQoY29kZVBvaW50KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlY29kZUNvZGVQb2ludDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lc2NhcGVVVEY4ID0gZXhwb3J0cy5lc2NhcGUgPSBleHBvcnRzLmVuY29kZU5vbkFzY2lpSFRNTCA9IGV4cG9ydHMuZW5jb2RlSFRNTCA9IGV4cG9ydHMuZW5jb2RlWE1MID0gdm9pZCAwO1xudmFyIHhtbF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy94bWwuanNvblwiKSk7XG52YXIgaW52ZXJzZVhNTCA9IGdldEludmVyc2VPYmooeG1sX2pzb25fMS5kZWZhdWx0KTtcbnZhciB4bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlWE1MKTtcbi8qKlxuICogRW5jb2RlcyBhbGwgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGFzIHdlbGwgYXMgY2hhcmFjdGVycyBub3QgdmFsaWQgaW4gWE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgWE1MIGVudGl0aWVzLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnRzLmVuY29kZVhNTCA9IGdldEFTQ0lJRW5jb2RlcihpbnZlcnNlWE1MKTtcbnZhciBlbnRpdGllc19qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9lbnRpdGllcy5qc29uXCIpKTtcbnZhciBpbnZlcnNlSFRNTCA9IGdldEludmVyc2VPYmooZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpO1xudmFyIGh0bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlSFRNTCk7XG4vKipcbiAqIEVuY29kZXMgYWxsIGVudGl0aWVzIGFuZCBub24tQVNDSUkgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKlxuICogVGhpcyBpbmNsdWRlcyBjaGFyYWN0ZXJzIHRoYXQgYXJlIHZhbGlkIEFTQ0lJIGNoYXJhY3RlcnMgaW4gSFRNTCBkb2N1bWVudHMuXG4gKiBGb3IgZXhhbXBsZSBgI2Agd2lsbCBiZSBlbmNvZGVkIGFzIGAmbnVtO2AuIFRvIGdldCBhIG1vcmUgY29tcGFjdCBvdXRwdXQsXG4gKiBjb25zaWRlciB1c2luZyB0aGUgYGVuY29kZU5vbkFzY2lpSFRNTGAgZnVuY3Rpb24uXG4gKlxuICogSWYgYSBjaGFyYWN0ZXIgaGFzIG5vIGVxdWl2YWxlbnQgZW50aXR5LCBhXG4gKiBudW1lcmljIGhleGFkZWNpbWFsIHJlZmVyZW5jZSAoZWcuIGAmI3hmYztgKSB3aWxsIGJlIHVzZWQuXG4gKi9cbmV4cG9ydHMuZW5jb2RlSFRNTCA9IGdldEludmVyc2UoaW52ZXJzZUhUTUwsIGh0bWxSZXBsYWNlcik7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIEhUTUxcbiAqIGRvY3VtZW50cyB1c2luZyBIVE1MIGVudGl0aWVzLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnRzLmVuY29kZU5vbkFzY2lpSFRNTCA9IGdldEFTQ0lJRW5jb2RlcihpbnZlcnNlSFRNTCk7XG5mdW5jdGlvbiBnZXRJbnZlcnNlT2JqKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopXG4gICAgICAgIC5zb3J0KClcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoaW52ZXJzZSwgbmFtZSkge1xuICAgICAgICBpbnZlcnNlW29ialtuYW1lXV0gPSBcIiZcIiArIG5hbWUgKyBcIjtcIjtcbiAgICAgICAgcmV0dXJuIGludmVyc2U7XG4gICAgfSwge30pO1xufVxuZnVuY3Rpb24gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2UpIHtcbiAgICB2YXIgc2luZ2xlID0gW107XG4gICAgdmFyIG11bHRpcGxlID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKGludmVyc2UpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgayA9IF9hW19pXTtcbiAgICAgICAgaWYgKGsubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAvLyBBZGQgdmFsdWUgdG8gc2luZ2xlIGFycmF5XG4gICAgICAgICAgICBzaW5nbGUucHVzaChcIlxcXFxcIiArIGspO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkIHZhbHVlIHRvIG11bHRpcGxlIGFycmF5XG4gICAgICAgICAgICBtdWx0aXBsZS5wdXNoKGspO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCByYW5nZXMgdG8gc2luZ2xlIGNoYXJhY3RlcnMuXG4gICAgc2luZ2xlLnNvcnQoKTtcbiAgICBmb3IgKHZhciBzdGFydCA9IDA7IHN0YXJ0IDwgc2luZ2xlLmxlbmd0aCAtIDE7IHN0YXJ0KyspIHtcbiAgICAgICAgLy8gRmluZCB0aGUgZW5kIG9mIGEgcnVuIG9mIGNoYXJhY3RlcnNcbiAgICAgICAgdmFyIGVuZCA9IHN0YXJ0O1xuICAgICAgICB3aGlsZSAoZW5kIDwgc2luZ2xlLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgIHNpbmdsZVtlbmRdLmNoYXJDb2RlQXQoMSkgKyAxID09PSBzaW5nbGVbZW5kICsgMV0uY2hhckNvZGVBdCgxKSkge1xuICAgICAgICAgICAgZW5kICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvdW50ID0gMSArIGVuZCAtIHN0YXJ0O1xuICAgICAgICAvLyBXZSB3YW50IHRvIHJlcGxhY2UgYXQgbGVhc3QgdGhyZWUgY2hhcmFjdGVyc1xuICAgICAgICBpZiAoY291bnQgPCAzKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHNpbmdsZS5zcGxpY2Uoc3RhcnQsIGNvdW50LCBzaW5nbGVbc3RhcnRdICsgXCItXCIgKyBzaW5nbGVbZW5kXSk7XG4gICAgfVxuICAgIG11bHRpcGxlLnVuc2hpZnQoXCJbXCIgKyBzaW5nbGUuam9pbihcIlwiKSArIFwiXVwiKTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChtdWx0aXBsZS5qb2luKFwifFwiKSwgXCJnXCIpO1xufVxuLy8gL1teXFwwLVxceDdGXS9ndVxudmFyIHJlTm9uQVNDSUkgPSAvKD86W1xceDgwLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pL2c7XG52YXIgZ2V0Q29kZVBvaW50ID0gXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LWNvbmRpdGlvblxuU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdCAhPSBudWxsXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHIuY29kZVBvaW50QXQoMCk7IH1cbiAgICA6IC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gKGMuY2hhckNvZGVBdCgwKSAtIDB4ZDgwMCkgKiAweDQwMCArXG4gICAgICAgICAgICAgICAgYy5jaGFyQ29kZUF0KDEpIC1cbiAgICAgICAgICAgICAgICAweGRjMDAgK1xuICAgICAgICAgICAgICAgIDB4MTAwMDA7XG4gICAgICAgIH07XG5mdW5jdGlvbiBzaW5nbGVDaGFyUmVwbGFjZXIoYykge1xuICAgIHJldHVybiBcIiYjeFwiICsgKGMubGVuZ3RoID4gMSA/IGdldENvZGVQb2ludChjKSA6IGMuY2hhckNvZGVBdCgwKSlcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAudG9VcHBlckNhc2UoKSArIFwiO1wiO1xufVxuZnVuY3Rpb24gZ2V0SW52ZXJzZShpbnZlcnNlLCByZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgLnJlcGxhY2UocmUsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBpbnZlcnNlW25hbWVdOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UocmVOb25BU0NJSSwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbiAgICB9O1xufVxudmFyIHJlRXNjYXBlQ2hhcnMgPSBuZXcgUmVnRXhwKHhtbFJlcGxhY2VyLnNvdXJjZSArIFwifFwiICsgcmVOb25BU0NJSS5zb3VyY2UsIFwiZ1wiKTtcbi8qKlxuICogRW5jb2RlcyBhbGwgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGFzIHdlbGwgYXMgY2hhcmFjdGVycyBub3QgdmFsaWQgaW4gWE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkuXG4gKlxuICogSGF2ZSBhIGxvb2sgYXQgYGVzY2FwZVVURjhgIGlmIHlvdSB3YW50IGEgbW9yZSBjb25jaXNlIG91dHB1dCBhdCB0aGUgZXhwZW5zZVxuICogb2YgcmVkdWNlZCB0cmFuc3BvcnRhYmlsaXR5LlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlc2NhcGUuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucmVwbGFjZShyZUVzY2FwZUNoYXJzLCBzaW5nbGVDaGFyUmVwbGFjZXIpO1xufVxuZXhwb3J0cy5lc2NhcGUgPSBlc2NhcGU7XG4vKipcbiAqIEVuY29kZXMgYWxsIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTCBkb2N1bWVudHMgdXNpbmcgbnVtZXJpYyBoZXhhZGVjaW1hbFxuICogcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgb3V0cHV0IHdpbGwgYmUgY2hhcmFjdGVyLXNldCBkZXBlbmRlbnQuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGVzY2FwZS5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlVVRGOChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucmVwbGFjZSh4bWxSZXBsYWNlciwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cbmV4cG9ydHMuZXNjYXBlVVRGOCA9IGVzY2FwZVVURjg7XG5mdW5jdGlvbiBnZXRBU0NJSUVuY29kZXIob2JqKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnJlcGxhY2UocmVFc2NhcGVDaGFycywgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG9ialtjXSB8fCBzaW5nbGVDaGFyUmVwbGFjZXIoYyk7IH0pO1xuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVjb2RlWE1MU3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVIVE1MNVN0cmljdCA9IGV4cG9ydHMuZGVjb2RlSFRNTDRTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUw1ID0gZXhwb3J0cy5kZWNvZGVIVE1MNCA9IGV4cG9ydHMuZGVjb2RlSFRNTFN0cmljdCA9IGV4cG9ydHMuZGVjb2RlSFRNTCA9IGV4cG9ydHMuZGVjb2RlWE1MID0gZXhwb3J0cy5lbmNvZGVIVE1MNSA9IGV4cG9ydHMuZW5jb2RlSFRNTDQgPSBleHBvcnRzLmVzY2FwZVVURjggPSBleHBvcnRzLmVzY2FwZSA9IGV4cG9ydHMuZW5jb2RlTm9uQXNjaWlIVE1MID0gZXhwb3J0cy5lbmNvZGVIVE1MID0gZXhwb3J0cy5lbmNvZGVYTUwgPSBleHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuZGVjb2RlU3RyaWN0ID0gZXhwb3J0cy5kZWNvZGUgPSB2b2lkIDA7XG52YXIgZGVjb2RlXzEgPSByZXF1aXJlKFwiLi9kZWNvZGVcIik7XG52YXIgZW5jb2RlXzEgPSByZXF1aXJlKFwiLi9lbmNvZGVcIik7XG4vKipcbiAqIERlY29kZXMgYSBzdHJpbmcgd2l0aCBlbnRpdGllcy5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZGVjb2RlLlxuICogQHBhcmFtIGxldmVsIE9wdGlvbmFsIGxldmVsIHRvIGRlY29kZSBhdC4gMCA9IFhNTCwgMSA9IEhUTUwuIERlZmF1bHQgaXMgMC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgZGVjb2RlWE1MYCBvciBgZGVjb2RlSFRNTGAgZGlyZWN0bHkuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShkYXRhLCBsZXZlbCkge1xuICAgIHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGVfMS5kZWNvZGVYTUwgOiBkZWNvZGVfMS5kZWNvZGVIVE1MKShkYXRhKTtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIHdpdGggZW50aXRpZXMuIERvZXMgbm90IGFsbG93IG1pc3NpbmcgdHJhaWxpbmcgc2VtaWNvbG9ucyBmb3IgZW50aXRpZXMuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGRlY29kZS5cbiAqIEBwYXJhbSBsZXZlbCBPcHRpb25hbCBsZXZlbCB0byBkZWNvZGUgYXQuIDAgPSBYTUwsIDEgPSBIVE1MLiBEZWZhdWx0IGlzIDAuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGRlY29kZUhUTUxTdHJpY3RgIG9yIGBkZWNvZGVYTUxgIGRpcmVjdGx5LlxuICovXG5mdW5jdGlvbiBkZWNvZGVTdHJpY3QoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlXzEuZGVjb2RlWE1MIDogZGVjb2RlXzEuZGVjb2RlSFRNTFN0cmljdCkoZGF0YSk7XG59XG5leHBvcnRzLmRlY29kZVN0cmljdCA9IGRlY29kZVN0cmljdDtcbi8qKlxuICogRW5jb2RlcyBhIHN0cmluZyB3aXRoIGVudGl0aWVzLlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlbmNvZGUuXG4gKiBAcGFyYW0gbGV2ZWwgT3B0aW9uYWwgbGV2ZWwgdG8gZW5jb2RlIGF0LiAwID0gWE1MLCAxID0gSFRNTC4gRGVmYXVsdCBpcyAwLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBlbmNvZGVIVE1MYCwgYGVuY29kZVhNTGAgb3IgYGVuY29kZU5vbkFzY2lpSFRNTGAgZGlyZWN0bHkuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShkYXRhLCBsZXZlbCkge1xuICAgIHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBlbmNvZGVfMS5lbmNvZGVYTUwgOiBlbmNvZGVfMS5lbmNvZGVIVE1MKShkYXRhKTtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xudmFyIGVuY29kZV8yID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlWE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVYTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbmNvZGVIVE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlTm9uQXNjaWlIVE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVOb25Bc2NpaUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlc2NhcGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVzY2FwZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVzY2FwZVVURjhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVzY2FwZVVURjg7IH0gfSk7XG4vLyBMZWdhY3kgYWxpYXNlcyAoZGVwcmVjYXRlZClcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZUhUTUw0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlSFRNTDVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVuY29kZUhUTUw7IH0gfSk7XG52YXIgZGVjb2RlXzIgPSByZXF1aXJlKFwiLi9kZWNvZGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVYTUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZVhNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MU3RyaWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0OyB9IH0pO1xuLy8gTGVnYWN5IGFsaWFzZXMgKGRlcHJlY2F0ZWQpXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MNFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUw1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDRTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MNVN0cmljdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZVhNTFN0cmljdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlWE1MOyB9IH0pO1xuIiwiLy9UeXBlcyBvZiBlbGVtZW50cyBmb3VuZCBpbiB0aGUgRE9NXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VGV4dDogXCJ0ZXh0XCIsIC8vVGV4dFxuXHREaXJlY3RpdmU6IFwiZGlyZWN0aXZlXCIsIC8vPD8gLi4uID8+XG5cdENvbW1lbnQ6IFwiY29tbWVudFwiLCAvLzwhLS0gLi4uIC0tPlxuXHRTY3JpcHQ6IFwic2NyaXB0XCIsIC8vPHNjcmlwdD4gdGFnc1xuXHRTdHlsZTogXCJzdHlsZVwiLCAvLzxzdHlsZT4gdGFnc1xuXHRUYWc6IFwidGFnXCIsIC8vQW55IHRhZ1xuXHRDREFUQTogXCJjZGF0YVwiLCAvLzwhW0NEQVRBWyAuLi4gXV0+XG5cdERvY3R5cGU6IFwiZG9jdHlwZVwiLFxuXG5cdGlzVGFnOiBmdW5jdGlvbihlbGVtKXtcblx0XHRyZXR1cm4gZWxlbS50eXBlID09PSBcInRhZ1wiIHx8IGVsZW0udHlwZSA9PT0gXCJzY3JpcHRcIiB8fCBlbGVtLnR5cGUgPT09IFwic3R5bGVcIjtcblx0fVxufTtcbiIsInZhciBFbGVtZW50VHlwZSA9IHJlcXVpcmUoXCJkb21lbGVtZW50dHlwZVwiKTtcblxudmFyIHJlX3doaXRlc3BhY2UgPSAvXFxzKy9nO1xudmFyIE5vZGVQcm90b3R5cGUgPSByZXF1aXJlKFwiLi9saWIvbm9kZVwiKTtcbnZhciBFbGVtZW50UHJvdG90eXBlID0gcmVxdWlyZShcIi4vbGliL2VsZW1lbnRcIik7XG5cbmZ1bmN0aW9uIERvbUhhbmRsZXIoY2FsbGJhY2ssIG9wdGlvbnMsIGVsZW1lbnRDQil7XG5cdGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJvYmplY3RcIil7XG5cdFx0ZWxlbWVudENCID0gb3B0aW9ucztcblx0XHRvcHRpb25zID0gY2FsbGJhY2s7XG5cdFx0Y2FsbGJhY2sgPSBudWxsO1xuXHR9IGVsc2UgaWYodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIil7XG5cdFx0ZWxlbWVudENCID0gb3B0aW9ucztcblx0XHRvcHRpb25zID0gZGVmYXVsdE9wdHM7XG5cdH1cblx0dGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0dGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdE9wdHM7XG5cdHRoaXMuX2VsZW1lbnRDQiA9IGVsZW1lbnRDQjtcblx0dGhpcy5kb20gPSBbXTtcblx0dGhpcy5fZG9uZSA9IGZhbHNlO1xuXHR0aGlzLl90YWdTdGFjayA9IFtdO1xuXHR0aGlzLl9wYXJzZXIgPSB0aGlzLl9wYXJzZXIgfHwgbnVsbDtcbn1cblxuLy9kZWZhdWx0IG9wdGlvbnNcbnZhciBkZWZhdWx0T3B0cyA9IHtcblx0bm9ybWFsaXplV2hpdGVzcGFjZTogZmFsc2UsIC8vUmVwbGFjZSBhbGwgd2hpdGVzcGFjZSB3aXRoIHNpbmdsZSBzcGFjZXNcblx0d2l0aFN0YXJ0SW5kaWNlczogZmFsc2UsIC8vQWRkIHN0YXJ0SW5kZXggcHJvcGVydGllcyB0byBub2Rlc1xuXHR3aXRoRW5kSW5kaWNlczogZmFsc2UsIC8vQWRkIGVuZEluZGV4IHByb3BlcnRpZXMgdG8gbm9kZXNcbn07XG5cbkRvbUhhbmRsZXIucHJvdG90eXBlLm9ucGFyc2VyaW5pdCA9IGZ1bmN0aW9uKHBhcnNlcil7XG5cdHRoaXMuX3BhcnNlciA9IHBhcnNlcjtcbn07XG5cbi8vUmVzZXRzIHRoZSBoYW5kbGVyIGJhY2sgdG8gc3RhcnRpbmcgc3RhdGVcbkRvbUhhbmRsZXIucHJvdG90eXBlLm9ucmVzZXQgPSBmdW5jdGlvbigpe1xuXHREb21IYW5kbGVyLmNhbGwodGhpcywgdGhpcy5fY2FsbGJhY2ssIHRoaXMuX29wdGlvbnMsIHRoaXMuX2VsZW1lbnRDQik7XG59O1xuXG4vL1NpZ25hbHMgdGhlIGhhbmRsZXIgdGhhdCBwYXJzaW5nIGlzIGRvbmVcbkRvbUhhbmRsZXIucHJvdG90eXBlLm9uZW5kID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5fZG9uZSkgcmV0dXJuO1xuXHR0aGlzLl9kb25lID0gdHJ1ZTtcblx0dGhpcy5fcGFyc2VyID0gbnVsbDtcblx0dGhpcy5faGFuZGxlQ2FsbGJhY2sobnVsbCk7XG59O1xuXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5faGFuZGxlQ2FsbGJhY2sgPVxuRG9tSGFuZGxlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKXtcblx0aWYodHlwZW9mIHRoaXMuX2NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpe1xuXHRcdHRoaXMuX2NhbGxiYWNrKGVycm9yLCB0aGlzLmRvbSk7XG5cdH0gZWxzZSB7XG5cdFx0aWYoZXJyb3IpIHRocm93IGVycm9yO1xuXHR9XG59O1xuXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5vbmNsb3NldGFnID0gZnVuY3Rpb24oKXtcblx0Ly9pZih0aGlzLl90YWdTdGFjay5wb3AoKS5uYW1lICE9PSBuYW1lKSB0aGlzLl9oYW5kbGVDYWxsYmFjayhFcnJvcihcIlRhZ25hbWUgZGlkbid0IG1hdGNoIVwiKSk7XG5cdFxuXHR2YXIgZWxlbSA9IHRoaXMuX3RhZ1N0YWNrLnBvcCgpO1xuXG5cdGlmKHRoaXMuX29wdGlvbnMud2l0aEVuZEluZGljZXMgJiYgZWxlbSl7XG5cdFx0ZWxlbS5lbmRJbmRleCA9IHRoaXMuX3BhcnNlci5lbmRJbmRleDtcblx0fVxuXG5cdGlmKHRoaXMuX2VsZW1lbnRDQikgdGhpcy5fZWxlbWVudENCKGVsZW0pO1xufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUuX2NyZWF0ZURvbUVsZW1lbnQgPSBmdW5jdGlvbihwcm9wZXJ0aWVzKXtcblx0aWYgKCF0aGlzLl9vcHRpb25zLndpdGhEb21MdmwxKSByZXR1cm4gcHJvcGVydGllcztcblxuXHR2YXIgZWxlbWVudDtcblx0aWYgKHByb3BlcnRpZXMudHlwZSA9PT0gXCJ0YWdcIikge1xuXHRcdGVsZW1lbnQgPSBPYmplY3QuY3JlYXRlKEVsZW1lbnRQcm90b3R5cGUpO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW1lbnQgPSBPYmplY3QuY3JlYXRlKE5vZGVQcm90b3R5cGUpO1xuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIHByb3BlcnRpZXMpIHtcblx0XHRpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRlbGVtZW50W2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5fYWRkRG9tRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xuXHR2YXIgcGFyZW50ID0gdGhpcy5fdGFnU3RhY2tbdGhpcy5fdGFnU3RhY2subGVuZ3RoIC0gMV07XG5cdHZhciBzaWJsaW5ncyA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbiA6IHRoaXMuZG9tO1xuXHR2YXIgcHJldmlvdXNTaWJsaW5nID0gc2libGluZ3Nbc2libGluZ3MubGVuZ3RoIC0gMV07XG5cblx0ZWxlbWVudC5uZXh0ID0gbnVsbDtcblxuXHRpZih0aGlzLl9vcHRpb25zLndpdGhTdGFydEluZGljZXMpe1xuXHRcdGVsZW1lbnQuc3RhcnRJbmRleCA9IHRoaXMuX3BhcnNlci5zdGFydEluZGV4O1xuXHR9XG5cdGlmKHRoaXMuX29wdGlvbnMud2l0aEVuZEluZGljZXMpe1xuXHRcdGVsZW1lbnQuZW5kSW5kZXggPSB0aGlzLl9wYXJzZXIuZW5kSW5kZXg7XG5cdH1cblxuXHRpZihwcmV2aW91c1NpYmxpbmcpe1xuXHRcdGVsZW1lbnQucHJldiA9IHByZXZpb3VzU2libGluZztcblx0XHRwcmV2aW91c1NpYmxpbmcubmV4dCA9IGVsZW1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0ZWxlbWVudC5wcmV2ID0gbnVsbDtcblx0fVxuXG5cdHNpYmxpbmdzLnB1c2goZWxlbWVudCk7XG5cdGVsZW1lbnQucGFyZW50ID0gcGFyZW50IHx8IG51bGw7XG59O1xuXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5vbm9wZW50YWcgPSBmdW5jdGlvbihuYW1lLCBhdHRyaWJzKXtcblx0dmFyIHByb3BlcnRpZXMgPSB7XG5cdFx0dHlwZTogbmFtZSA9PT0gXCJzY3JpcHRcIiA/IEVsZW1lbnRUeXBlLlNjcmlwdCA6IG5hbWUgPT09IFwic3R5bGVcIiA/IEVsZW1lbnRUeXBlLlN0eWxlIDogRWxlbWVudFR5cGUuVGFnLFxuXHRcdG5hbWU6IG5hbWUsXG5cdFx0YXR0cmliczogYXR0cmlicyxcblx0XHRjaGlsZHJlbjogW11cblx0fTtcblxuXHR2YXIgZWxlbWVudCA9IHRoaXMuX2NyZWF0ZURvbUVsZW1lbnQocHJvcGVydGllcyk7XG5cblx0dGhpcy5fYWRkRG9tRWxlbWVudChlbGVtZW50KTtcblxuXHR0aGlzLl90YWdTdGFjay5wdXNoKGVsZW1lbnQpO1xufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUub250ZXh0ID0gZnVuY3Rpb24oZGF0YSl7XG5cdC8vdGhlIGlnbm9yZVdoaXRlc3BhY2UgaXMgb2ZmaWNpYWxseSBkcm9wcGVkLCBidXQgZm9yIG5vdyxcblx0Ly9pdCdzIGFuIGFsaWFzIGZvciBub3JtYWxpemVXaGl0ZXNwYWNlXG5cdHZhciBub3JtYWxpemUgPSB0aGlzLl9vcHRpb25zLm5vcm1hbGl6ZVdoaXRlc3BhY2UgfHwgdGhpcy5fb3B0aW9ucy5pZ25vcmVXaGl0ZXNwYWNlO1xuXG5cdHZhciBsYXN0VGFnO1xuXG5cdGlmKCF0aGlzLl90YWdTdGFjay5sZW5ndGggJiYgdGhpcy5kb20ubGVuZ3RoICYmIChsYXN0VGFnID0gdGhpcy5kb21bdGhpcy5kb20ubGVuZ3RoLTFdKS50eXBlID09PSBFbGVtZW50VHlwZS5UZXh0KXtcblx0XHRpZihub3JtYWxpemUpe1xuXHRcdFx0bGFzdFRhZy5kYXRhID0gKGxhc3RUYWcuZGF0YSArIGRhdGEpLnJlcGxhY2UocmVfd2hpdGVzcGFjZSwgXCIgXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYXN0VGFnLmRhdGEgKz0gZGF0YTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYoXG5cdFx0XHR0aGlzLl90YWdTdGFjay5sZW5ndGggJiZcblx0XHRcdChsYXN0VGFnID0gdGhpcy5fdGFnU3RhY2tbdGhpcy5fdGFnU3RhY2subGVuZ3RoIC0gMV0pICYmXG5cdFx0XHQobGFzdFRhZyA9IGxhc3RUYWcuY2hpbGRyZW5bbGFzdFRhZy5jaGlsZHJlbi5sZW5ndGggLSAxXSkgJiZcblx0XHRcdGxhc3RUYWcudHlwZSA9PT0gRWxlbWVudFR5cGUuVGV4dFxuXHRcdCl7XG5cdFx0XHRpZihub3JtYWxpemUpe1xuXHRcdFx0XHRsYXN0VGFnLmRhdGEgPSAobGFzdFRhZy5kYXRhICsgZGF0YSkucmVwbGFjZShyZV93aGl0ZXNwYWNlLCBcIiBcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsYXN0VGFnLmRhdGEgKz0gZGF0YTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYobm9ybWFsaXplKXtcblx0XHRcdFx0ZGF0YSA9IGRhdGEucmVwbGFjZShyZV93aGl0ZXNwYWNlLCBcIiBcIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBlbGVtZW50ID0gdGhpcy5fY3JlYXRlRG9tRWxlbWVudCh7XG5cdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdHR5cGU6IEVsZW1lbnRUeXBlLlRleHRcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLl9hZGREb21FbGVtZW50KGVsZW1lbnQpO1xuXHRcdH1cblx0fVxufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUub25jb21tZW50ID0gZnVuY3Rpb24oZGF0YSl7XG5cdHZhciBsYXN0VGFnID0gdGhpcy5fdGFnU3RhY2tbdGhpcy5fdGFnU3RhY2subGVuZ3RoIC0gMV07XG5cblx0aWYobGFzdFRhZyAmJiBsYXN0VGFnLnR5cGUgPT09IEVsZW1lbnRUeXBlLkNvbW1lbnQpe1xuXHRcdGxhc3RUYWcuZGF0YSArPSBkYXRhO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBwcm9wZXJ0aWVzID0ge1xuXHRcdGRhdGE6IGRhdGEsXG5cdFx0dHlwZTogRWxlbWVudFR5cGUuQ29tbWVudFxuXHR9O1xuXG5cdHZhciBlbGVtZW50ID0gdGhpcy5fY3JlYXRlRG9tRWxlbWVudChwcm9wZXJ0aWVzKTtcblxuXHR0aGlzLl9hZGREb21FbGVtZW50KGVsZW1lbnQpO1xuXHR0aGlzLl90YWdTdGFjay5wdXNoKGVsZW1lbnQpO1xufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUub25jZGF0YXN0YXJ0ID0gZnVuY3Rpb24oKXtcblx0dmFyIHByb3BlcnRpZXMgPSB7XG5cdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRkYXRhOiBcIlwiLFxuXHRcdFx0dHlwZTogRWxlbWVudFR5cGUuVGV4dFxuXHRcdH1dLFxuXHRcdHR5cGU6IEVsZW1lbnRUeXBlLkNEQVRBXG5cdH07XG5cblx0dmFyIGVsZW1lbnQgPSB0aGlzLl9jcmVhdGVEb21FbGVtZW50KHByb3BlcnRpZXMpO1xuXG5cdHRoaXMuX2FkZERvbUVsZW1lbnQoZWxlbWVudCk7XG5cdHRoaXMuX3RhZ1N0YWNrLnB1c2goZWxlbWVudCk7XG59O1xuXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5vbmNvbW1lbnRlbmQgPSBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNkYXRhZW5kID0gZnVuY3Rpb24oKXtcblx0dGhpcy5fdGFnU3RhY2sucG9wKCk7XG59O1xuXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpe1xuXHR2YXIgZWxlbWVudCA9IHRoaXMuX2NyZWF0ZURvbUVsZW1lbnQoe1xuXHRcdG5hbWU6IG5hbWUsXG5cdFx0ZGF0YTogZGF0YSxcblx0XHR0eXBlOiBFbGVtZW50VHlwZS5EaXJlY3RpdmVcblx0fSk7XG5cblx0dGhpcy5fYWRkRG9tRWxlbWVudChlbGVtZW50KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG9tSGFuZGxlcjtcbiIsIi8vIERPTS1MZXZlbC0xLWNvbXBsaWFudCBzdHJ1Y3R1cmVcbnZhciBOb2RlUHJvdG90eXBlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG52YXIgRWxlbWVudFByb3RvdHlwZSA9IG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZShOb2RlUHJvdG90eXBlKTtcblxudmFyIGRvbUx2bDEgPSB7XG5cdHRhZ05hbWU6IFwibmFtZVwiXG59O1xuXG5PYmplY3Qua2V5cyhkb21MdmwxKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHR2YXIgc2hvcnRoYW5kID0gZG9tTHZsMVtrZXldO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudFByb3RvdHlwZSwga2V5LCB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzW3Nob3J0aGFuZF0gfHwgbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHR0aGlzW3Nob3J0aGFuZF0gPSB2YWw7XG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsIi8vIFRoaXMgb2JqZWN0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcHJvdG90eXBlIGZvciBOb2RlcyB3aGVuIGNyZWF0aW5nIGFcbi8vIERPTS1MZXZlbC0xLWNvbXBsaWFudCBzdHJ1Y3R1cmUuXG52YXIgTm9kZVByb3RvdHlwZSA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXQgZmlyc3RDaGlsZCgpIHtcblx0XHR2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuXHRcdHJldHVybiBjaGlsZHJlbiAmJiBjaGlsZHJlblswXSB8fCBudWxsO1xuXHR9LFxuXHRnZXQgbGFzdENoaWxkKCkge1xuXHRcdHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG5cdFx0cmV0dXJuIGNoaWxkcmVuICYmIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdIHx8IG51bGw7XG5cdH0sXG5cdGdldCBub2RlVHlwZSgpIHtcblx0XHRyZXR1cm4gbm9kZVR5cGVzW3RoaXMudHlwZV0gfHwgbm9kZVR5cGVzLmVsZW1lbnQ7XG5cdH1cbn07XG5cbnZhciBkb21MdmwxID0ge1xuXHR0YWdOYW1lOiBcIm5hbWVcIixcblx0Y2hpbGROb2RlczogXCJjaGlsZHJlblwiLFxuXHRwYXJlbnROb2RlOiBcInBhcmVudFwiLFxuXHRwcmV2aW91c1NpYmxpbmc6IFwicHJldlwiLFxuXHRuZXh0U2libGluZzogXCJuZXh0XCIsXG5cdG5vZGVWYWx1ZTogXCJkYXRhXCJcbn07XG5cbnZhciBub2RlVHlwZXMgPSB7XG5cdGVsZW1lbnQ6IDEsXG5cdHRleHQ6IDMsXG5cdGNkYXRhOiA0LFxuXHRjb21tZW50OiA4XG59O1xuXG5PYmplY3Qua2V5cyhkb21MdmwxKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHR2YXIgc2hvcnRoYW5kID0gZG9tTHZsMVtrZXldO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZVByb3RvdHlwZSwga2V5LCB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzW3Nob3J0aGFuZF0gfHwgbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHR0aGlzW3Nob3J0aGFuZF0gPSB2YWw7XG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsInZhciBEb21VdGlscyA9IG1vZHVsZS5leHBvcnRzO1xuXG5bXG5cdHJlcXVpcmUoXCIuL2xpYi9zdHJpbmdpZnlcIiksXG5cdHJlcXVpcmUoXCIuL2xpYi90cmF2ZXJzYWxcIiksXG5cdHJlcXVpcmUoXCIuL2xpYi9tYW5pcHVsYXRpb25cIiksXG5cdHJlcXVpcmUoXCIuL2xpYi9xdWVyeWluZ1wiKSxcblx0cmVxdWlyZShcIi4vbGliL2xlZ2FjeVwiKSxcblx0cmVxdWlyZShcIi4vbGliL2hlbHBlcnNcIilcbl0uZm9yRWFjaChmdW5jdGlvbihleHQpe1xuXHRPYmplY3Qua2V5cyhleHQpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcblx0XHREb21VdGlsc1trZXldID0gZXh0W2tleV0uYmluZChEb21VdGlscyk7XG5cdH0pO1xufSk7XG4iLCIvLyByZW1vdmVTdWJzZXRzXG4vLyBHaXZlbiBhbiBhcnJheSBvZiBub2RlcywgcmVtb3ZlIGFueSBtZW1iZXIgdGhhdCBpcyBjb250YWluZWQgYnkgYW5vdGhlci5cbmV4cG9ydHMucmVtb3ZlU3Vic2V0cyA9IGZ1bmN0aW9uKG5vZGVzKSB7XG5cdHZhciBpZHggPSBub2Rlcy5sZW5ndGgsIG5vZGUsIGFuY2VzdG9yLCByZXBsYWNlO1xuXG5cdC8vIENoZWNrIGlmIGVhY2ggbm9kZSAob3Igb25lIG9mIGl0cyBhbmNlc3RvcnMpIGlzIGFscmVhZHkgY29udGFpbmVkIGluIHRoZVxuXHQvLyBhcnJheS5cblx0d2hpbGUgKC0taWR4ID4gLTEpIHtcblx0XHRub2RlID0gYW5jZXN0b3IgPSBub2Rlc1tpZHhdO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgcmVtb3ZlIHRoZSBub2RlIHVuZGVyIGNvbnNpZGVyYXRpb25cblx0XHRub2Rlc1tpZHhdID0gbnVsbDtcblx0XHRyZXBsYWNlID0gdHJ1ZTtcblxuXHRcdHdoaWxlIChhbmNlc3Rvcikge1xuXHRcdFx0aWYgKG5vZGVzLmluZGV4T2YoYW5jZXN0b3IpID4gLTEpIHtcblx0XHRcdFx0cmVwbGFjZSA9IGZhbHNlO1xuXHRcdFx0XHRub2Rlcy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbm9kZSBoYXMgYmVlbiBmb3VuZCB0byBiZSB1bmlxdWUsIHJlLWluc2VydCBpdC5cblx0XHRpZiAocmVwbGFjZSkge1xuXHRcdFx0bm9kZXNbaWR4XSA9IG5vZGU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5vZGVzO1xufTtcblxuLy8gU291cmNlOiBodHRwOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLW5vZGUtY29tcGFyZWRvY3VtZW50cG9zaXRpb25cbnZhciBQT1NJVElPTiA9IHtcblx0RElTQ09OTkVDVEVEOiAxLFxuXHRQUkVDRURJTkc6IDIsXG5cdEZPTExPV0lORzogNCxcblx0Q09OVEFJTlM6IDgsXG5cdENPTlRBSU5FRF9CWTogMTZcbn07XG5cbi8vIENvbXBhcmUgdGhlIHBvc2l0aW9uIG9mIG9uZSBub2RlIGFnYWluc3QgYW5vdGhlciBub2RlIGluIGFueSBvdGhlciBkb2N1bWVudC5cbi8vIFRoZSByZXR1cm4gdmFsdWUgaXMgYSBiaXRtYXNrIHdpdGggdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4vL1xuLy8gZG9jdW1lbnQgb3JkZXI6XG4vLyA+IFRoZXJlIGlzIGFuIG9yZGVyaW5nLCBkb2N1bWVudCBvcmRlciwgZGVmaW5lZCBvbiBhbGwgdGhlIG5vZGVzIGluIHRoZVxuLy8gPiBkb2N1bWVudCBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIHRoZVxuLy8gPiBYTUwgcmVwcmVzZW50YXRpb24gb2YgZWFjaCBub2RlIG9jY3VycyBpbiB0aGUgWE1MIHJlcHJlc2VudGF0aW9uIG9mIHRoZVxuLy8gPiBkb2N1bWVudCBhZnRlciBleHBhbnNpb24gb2YgZ2VuZXJhbCBlbnRpdGllcy4gVGh1cywgdGhlIGRvY3VtZW50IGVsZW1lbnRcbi8vID4gbm9kZSB3aWxsIGJlIHRoZSBmaXJzdCBub2RlLiBFbGVtZW50IG5vZGVzIG9jY3VyIGJlZm9yZSB0aGVpciBjaGlsZHJlbi5cbi8vID4gVGh1cywgZG9jdW1lbnQgb3JkZXIgb3JkZXJzIGVsZW1lbnQgbm9kZXMgaW4gb3JkZXIgb2YgdGhlIG9jY3VycmVuY2Ugb2Zcbi8vID4gdGhlaXIgc3RhcnQtdGFnIGluIHRoZSBYTUwgKGFmdGVyIGV4cGFuc2lvbiBvZiBlbnRpdGllcykuIFRoZSBhdHRyaWJ1dGVcbi8vID4gbm9kZXMgb2YgYW4gZWxlbWVudCBvY2N1ciBhZnRlciB0aGUgZWxlbWVudCBhbmQgYmVmb3JlIGl0cyBjaGlsZHJlbi4gVGhlXG4vLyA+IHJlbGF0aXZlIG9yZGVyIG9mIGF0dHJpYnV0ZSBub2RlcyBpcyBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQuL1xuLy8gU291cmNlOlxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtQ29yZS9nbG9zc2FyeS5odG1sI2R0LWRvY3VtZW50LW9yZGVyXG4vL1xuLy8gQGFyZ3VtZW50IHtOb2RlfSBub2RhQSBUaGUgZmlyc3Qgbm9kZSB0byB1c2UgaW4gdGhlIGNvbXBhcmlzb25cbi8vIEBhcmd1bWVudCB7Tm9kZX0gbm9kZUIgVGhlIHNlY29uZCBub2RlIHRvIHVzZSBpbiB0aGUgY29tcGFyaXNvblxuLy9cbi8vIEByZXR1cm4ge051bWJlcn0gQSBiaXRtYXNrIGRlc2NyaWJpbmcgdGhlIGlucHV0IG5vZGVzJyByZWxhdGl2ZSBwb3NpdGlvbi5cbi8vICAgICAgICAgU2VlIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tbm9kZS1jb21wYXJlZG9jdW1lbnRwb3NpdGlvbiBmb3Jcbi8vICAgICAgICAgYSBkZXNjcmlwdGlvbiBvZiB0aGVzZSB2YWx1ZXMuXG52YXIgY29tcGFyZVBvcyA9IGV4cG9ydHMuY29tcGFyZURvY3VtZW50UG9zaXRpb24gPSBmdW5jdGlvbihub2RlQSwgbm9kZUIpIHtcblx0dmFyIGFQYXJlbnRzID0gW107XG5cdHZhciBiUGFyZW50cyA9IFtdO1xuXHR2YXIgY3VycmVudCwgc2hhcmVkUGFyZW50LCBzaWJsaW5ncywgYVNpYmxpbmcsIGJTaWJsaW5nLCBpZHg7XG5cblx0aWYgKG5vZGVBID09PSBub2RlQikge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y3VycmVudCA9IG5vZGVBO1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGFQYXJlbnRzLnVuc2hpZnQoY3VycmVudCk7XG5cdFx0Y3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuXHR9XG5cdGN1cnJlbnQgPSBub2RlQjtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRiUGFyZW50cy51bnNoaWZ0KGN1cnJlbnQpO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcblx0fVxuXG5cdGlkeCA9IDA7XG5cdHdoaWxlIChhUGFyZW50c1tpZHhdID09PSBiUGFyZW50c1tpZHhdKSB7XG5cdFx0aWR4Kys7XG5cdH1cblxuXHRpZiAoaWR4ID09PSAwKSB7XG5cdFx0cmV0dXJuIFBPU0lUSU9OLkRJU0NPTk5FQ1RFRDtcblx0fVxuXG5cdHNoYXJlZFBhcmVudCA9IGFQYXJlbnRzW2lkeCAtIDFdO1xuXHRzaWJsaW5ncyA9IHNoYXJlZFBhcmVudC5jaGlsZHJlbjtcblx0YVNpYmxpbmcgPSBhUGFyZW50c1tpZHhdO1xuXHRiU2libGluZyA9IGJQYXJlbnRzW2lkeF07XG5cblx0aWYgKHNpYmxpbmdzLmluZGV4T2YoYVNpYmxpbmcpID4gc2libGluZ3MuaW5kZXhPZihiU2libGluZykpIHtcblx0XHRpZiAoc2hhcmVkUGFyZW50ID09PSBub2RlQikge1xuXHRcdFx0cmV0dXJuIFBPU0lUSU9OLkZPTExPV0lORyB8IFBPU0lUSU9OLkNPTlRBSU5FRF9CWTtcblx0XHR9XG5cdFx0cmV0dXJuIFBPU0lUSU9OLkZPTExPV0lORztcblx0fSBlbHNlIHtcblx0XHRpZiAoc2hhcmVkUGFyZW50ID09PSBub2RlQSkge1xuXHRcdFx0cmV0dXJuIFBPU0lUSU9OLlBSRUNFRElORyB8IFBPU0lUSU9OLkNPTlRBSU5TO1xuXHRcdH1cblx0XHRyZXR1cm4gUE9TSVRJT04uUFJFQ0VESU5HO1xuXHR9XG59O1xuXG4vLyBTb3J0IGFuIGFycmF5IG9mIG5vZGVzIGJhc2VkIG9uIHRoZWlyIHJlbGF0aXZlIHBvc2l0aW9uIGluIHRoZSBkb2N1bWVudCBhbmRcbi8vIHJlbW92ZSBhbnkgZHVwbGljYXRlIG5vZGVzLiBJZiB0aGUgYXJyYXkgY29udGFpbnMgbm9kZXMgdGhhdCBkbyBub3QgYmVsb25nXG4vLyB0byB0aGUgc2FtZSBkb2N1bWVudCwgc29ydCBvcmRlciBpcyB1bnNwZWNpZmllZC5cbi8vXG4vLyBAYXJndW1lbnQge0FycmF5fSBub2RlcyBBcnJheSBvZiBET00gbm9kZXNcbi8vXG4vLyBAcmV0dXJucyB7QXJyYXl9IGNvbGxlY3Rpb24gb2YgdW5pcXVlIG5vZGVzLCBzb3J0ZWQgaW4gZG9jdW1lbnQgb3JkZXJcbmV4cG9ydHMudW5pcXVlU29ydCA9IGZ1bmN0aW9uKG5vZGVzKSB7XG5cdHZhciBpZHggPSBub2Rlcy5sZW5ndGgsIG5vZGUsIHBvc2l0aW9uO1xuXG5cdG5vZGVzID0gbm9kZXMuc2xpY2UoKTtcblxuXHR3aGlsZSAoLS1pZHggPiAtMSkge1xuXHRcdG5vZGUgPSBub2Rlc1tpZHhdO1xuXHRcdHBvc2l0aW9uID0gbm9kZXMuaW5kZXhPZihub2RlKTtcblx0XHRpZiAocG9zaXRpb24gPiAtMSAmJiBwb3NpdGlvbiA8IGlkeCkge1xuXHRcdFx0bm9kZXMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fVxuXHR9XG5cdG5vZGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdHZhciByZWxhdGl2ZSA9IGNvbXBhcmVQb3MoYSwgYik7XG5cdFx0aWYgKHJlbGF0aXZlICYgUE9TSVRJT04uUFJFQ0VESU5HKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fSBlbHNlIGlmIChyZWxhdGl2ZSAmIFBPU0lUSU9OLkZPTExPV0lORykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9KTtcblxuXHRyZXR1cm4gbm9kZXM7XG59O1xuIiwidmFyIEVsZW1lbnRUeXBlID0gcmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpO1xudmFyIGlzVGFnID0gZXhwb3J0cy5pc1RhZyA9IEVsZW1lbnRUeXBlLmlzVGFnO1xuXG5leHBvcnRzLnRlc3RFbGVtZW50ID0gZnVuY3Rpb24ob3B0aW9ucywgZWxlbWVudCl7XG5cdGZvcih2YXIga2V5IGluIG9wdGlvbnMpe1xuXHRcdGlmKCFvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpO1xuXHRcdGVsc2UgaWYoa2V5ID09PSBcInRhZ19uYW1lXCIpe1xuXHRcdFx0aWYoIWlzVGFnKGVsZW1lbnQpIHx8ICFvcHRpb25zLnRhZ19uYW1lKGVsZW1lbnQubmFtZSkpe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKGtleSA9PT0gXCJ0YWdfdHlwZVwiKXtcblx0XHRcdGlmKCFvcHRpb25zLnRhZ190eXBlKGVsZW1lbnQudHlwZSkpIHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2UgaWYoa2V5ID09PSBcInRhZ19jb250YWluc1wiKXtcblx0XHRcdGlmKGlzVGFnKGVsZW1lbnQpIHx8ICFvcHRpb25zLnRhZ19jb250YWlucyhlbGVtZW50LmRhdGEpKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZighZWxlbWVudC5hdHRyaWJzIHx8ICFvcHRpb25zW2tleV0oZWxlbWVudC5hdHRyaWJzW2tleV0pKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG52YXIgQ2hlY2tzID0ge1xuXHR0YWdfbmFtZTogZnVuY3Rpb24obmFtZSl7XG5cdFx0aWYodHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIil7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZWxlbSl7IHJldHVybiBpc1RhZyhlbGVtKSAmJiBuYW1lKGVsZW0ubmFtZSk7IH07XG5cdFx0fSBlbHNlIGlmKG5hbWUgPT09IFwiKlwiKXtcblx0XHRcdHJldHVybiBpc1RhZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0peyByZXR1cm4gaXNUYWcoZWxlbSkgJiYgZWxlbS5uYW1lID09PSBuYW1lOyB9O1xuXHRcdH1cblx0fSxcblx0dGFnX3R5cGU6IGZ1bmN0aW9uKHR5cGUpe1xuXHRcdGlmKHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpe1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0peyByZXR1cm4gdHlwZShlbGVtLnR5cGUpOyB9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZWxlbSl7IHJldHVybiBlbGVtLnR5cGUgPT09IHR5cGU7IH07XG5cdFx0fVxuXHR9LFxuXHR0YWdfY29udGFpbnM6IGZ1bmN0aW9uKGRhdGEpe1xuXHRcdGlmKHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpe1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0peyByZXR1cm4gIWlzVGFnKGVsZW0pICYmIGRhdGEoZWxlbS5kYXRhKTsgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0peyByZXR1cm4gIWlzVGFnKGVsZW0pICYmIGVsZW0uZGF0YSA9PT0gZGF0YTsgfTtcblx0XHR9XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGdldEF0dHJpYkNoZWNrKGF0dHJpYiwgdmFsdWUpe1xuXHRpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0peyByZXR1cm4gZWxlbS5hdHRyaWJzICYmIHZhbHVlKGVsZW0uYXR0cmlic1thdHRyaWJdKTsgfTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oZWxlbSl7IHJldHVybiBlbGVtLmF0dHJpYnMgJiYgZWxlbS5hdHRyaWJzW2F0dHJpYl0gPT09IHZhbHVlOyB9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVGdW5jcyhhLCBiKXtcblx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0pe1xuXHRcdHJldHVybiBhKGVsZW0pIHx8IGIoZWxlbSk7XG5cdH07XG59XG5cbmV4cG9ydHMuZ2V0RWxlbWVudHMgPSBmdW5jdGlvbihvcHRpb25zLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCl7XG5cdHZhciBmdW5jcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcChmdW5jdGlvbihrZXkpe1xuXHRcdHZhciB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcblx0XHRyZXR1cm4ga2V5IGluIENoZWNrcyA/IENoZWNrc1trZXldKHZhbHVlKSA6IGdldEF0dHJpYkNoZWNrKGtleSwgdmFsdWUpO1xuXHR9KTtcblxuXHRyZXR1cm4gZnVuY3MubGVuZ3RoID09PSAwID8gW10gOiB0aGlzLmZpbHRlcihcblx0XHRmdW5jcy5yZWR1Y2UoY29tYmluZUZ1bmNzKSxcblx0XHRlbGVtZW50LCByZWN1cnNlLCBsaW1pdFxuXHQpO1xufTtcblxuZXhwb3J0cy5nZXRFbGVtZW50QnlJZCA9IGZ1bmN0aW9uKGlkLCBlbGVtZW50LCByZWN1cnNlKXtcblx0aWYoIUFycmF5LmlzQXJyYXkoZWxlbWVudCkpIGVsZW1lbnQgPSBbZWxlbWVudF07XG5cdHJldHVybiB0aGlzLmZpbmRPbmUoZ2V0QXR0cmliQ2hlY2soXCJpZFwiLCBpZCksIGVsZW1lbnQsIHJlY3Vyc2UgIT09IGZhbHNlKTtcbn07XG5cbmV4cG9ydHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBmdW5jdGlvbihuYW1lLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCl7XG5cdHJldHVybiB0aGlzLmZpbHRlcihDaGVja3MudGFnX25hbWUobmFtZSksIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KTtcbn07XG5cbmV4cG9ydHMuZ2V0RWxlbWVudHNCeVRhZ1R5cGUgPSBmdW5jdGlvbih0eXBlLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCl7XG5cdHJldHVybiB0aGlzLmZpbHRlcihDaGVja3MudGFnX3R5cGUodHlwZSksIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KTtcbn07XG4iLCJleHBvcnRzLnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtKXtcblx0aWYoZWxlbS5wcmV2KSBlbGVtLnByZXYubmV4dCA9IGVsZW0ubmV4dDtcblx0aWYoZWxlbS5uZXh0KSBlbGVtLm5leHQucHJldiA9IGVsZW0ucHJldjtcblxuXHRpZihlbGVtLnBhcmVudCl7XG5cdFx0dmFyIGNoaWxkcyA9IGVsZW0ucGFyZW50LmNoaWxkcmVuO1xuXHRcdGNoaWxkcy5zcGxpY2UoY2hpbGRzLmxhc3RJbmRleE9mKGVsZW0pLCAxKTtcblx0fVxufTtcblxuZXhwb3J0cy5yZXBsYWNlRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW0sIHJlcGxhY2VtZW50KXtcblx0dmFyIHByZXYgPSByZXBsYWNlbWVudC5wcmV2ID0gZWxlbS5wcmV2O1xuXHRpZihwcmV2KXtcblx0XHRwcmV2Lm5leHQgPSByZXBsYWNlbWVudDtcblx0fVxuXG5cdHZhciBuZXh0ID0gcmVwbGFjZW1lbnQubmV4dCA9IGVsZW0ubmV4dDtcblx0aWYobmV4dCl7XG5cdFx0bmV4dC5wcmV2ID0gcmVwbGFjZW1lbnQ7XG5cdH1cblxuXHR2YXIgcGFyZW50ID0gcmVwbGFjZW1lbnQucGFyZW50ID0gZWxlbS5wYXJlbnQ7XG5cdGlmKHBhcmVudCl7XG5cdFx0dmFyIGNoaWxkcyA9IHBhcmVudC5jaGlsZHJlbjtcblx0XHRjaGlsZHNbY2hpbGRzLmxhc3RJbmRleE9mKGVsZW0pXSA9IHJlcGxhY2VtZW50O1xuXHR9XG59O1xuXG5leHBvcnRzLmFwcGVuZENoaWxkID0gZnVuY3Rpb24oZWxlbSwgY2hpbGQpe1xuXHRjaGlsZC5wYXJlbnQgPSBlbGVtO1xuXG5cdGlmKGVsZW0uY2hpbGRyZW4ucHVzaChjaGlsZCkgIT09IDEpe1xuXHRcdHZhciBzaWJsaW5nID0gZWxlbS5jaGlsZHJlbltlbGVtLmNoaWxkcmVuLmxlbmd0aCAtIDJdO1xuXHRcdHNpYmxpbmcubmV4dCA9IGNoaWxkO1xuXHRcdGNoaWxkLnByZXYgPSBzaWJsaW5nO1xuXHRcdGNoaWxkLm5leHQgPSBudWxsO1xuXHR9XG59O1xuXG5leHBvcnRzLmFwcGVuZCA9IGZ1bmN0aW9uKGVsZW0sIG5leHQpe1xuXHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnQsXG5cdFx0Y3Vyck5leHQgPSBlbGVtLm5leHQ7XG5cblx0bmV4dC5uZXh0ID0gY3Vyck5leHQ7XG5cdG5leHQucHJldiA9IGVsZW07XG5cdGVsZW0ubmV4dCA9IG5leHQ7XG5cdG5leHQucGFyZW50ID0gcGFyZW50O1xuXG5cdGlmKGN1cnJOZXh0KXtcblx0XHRjdXJyTmV4dC5wcmV2ID0gbmV4dDtcblx0XHRpZihwYXJlbnQpe1xuXHRcdFx0dmFyIGNoaWxkcyA9IHBhcmVudC5jaGlsZHJlbjtcblx0XHRcdGNoaWxkcy5zcGxpY2UoY2hpbGRzLmxhc3RJbmRleE9mKGN1cnJOZXh0KSwgMCwgbmV4dCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYocGFyZW50KXtcblx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChuZXh0KTtcblx0fVxufTtcblxuZXhwb3J0cy5wcmVwZW5kID0gZnVuY3Rpb24oZWxlbSwgcHJldil7XG5cdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudDtcblx0aWYocGFyZW50KXtcblx0XHR2YXIgY2hpbGRzID0gcGFyZW50LmNoaWxkcmVuO1xuXHRcdGNoaWxkcy5zcGxpY2UoY2hpbGRzLmxhc3RJbmRleE9mKGVsZW0pLCAwLCBwcmV2KTtcblx0fVxuXG5cdGlmKGVsZW0ucHJldil7XG5cdFx0ZWxlbS5wcmV2Lm5leHQgPSBwcmV2O1xuXHR9XG5cdFxuXHRwcmV2LnBhcmVudCA9IHBhcmVudDtcblx0cHJldi5wcmV2ID0gZWxlbS5wcmV2O1xuXHRwcmV2Lm5leHQgPSBlbGVtO1xuXHRlbGVtLnByZXYgPSBwcmV2O1xufTtcblxuXG4iLCJ2YXIgaXNUYWcgPSByZXF1aXJlKFwiZG9tZWxlbWVudHR5cGVcIikuaXNUYWc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRmaWx0ZXI6IGZpbHRlcixcblx0ZmluZDogZmluZCxcblx0ZmluZE9uZUNoaWxkOiBmaW5kT25lQ2hpbGQsXG5cdGZpbmRPbmU6IGZpbmRPbmUsXG5cdGV4aXN0c09uZTogZXhpc3RzT25lLFxuXHRmaW5kQWxsOiBmaW5kQWxsXG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIodGVzdCwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpe1xuXHRpZighQXJyYXkuaXNBcnJheShlbGVtZW50KSkgZWxlbWVudCA9IFtlbGVtZW50XTtcblxuXHRpZih0eXBlb2YgbGltaXQgIT09IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKGxpbWl0KSl7XG5cdFx0bGltaXQgPSBJbmZpbml0eTtcblx0fVxuXHRyZXR1cm4gZmluZCh0ZXN0LCBlbGVtZW50LCByZWN1cnNlICE9PSBmYWxzZSwgbGltaXQpO1xufVxuXG5mdW5jdGlvbiBmaW5kKHRlc3QsIGVsZW1zLCByZWN1cnNlLCBsaW1pdCl7XG5cdHZhciByZXN1bHQgPSBbXSwgY2hpbGRzO1xuXG5cdGZvcih2YXIgaSA9IDAsIGogPSBlbGVtcy5sZW5ndGg7IGkgPCBqOyBpKyspe1xuXHRcdGlmKHRlc3QoZWxlbXNbaV0pKXtcblx0XHRcdHJlc3VsdC5wdXNoKGVsZW1zW2ldKTtcblx0XHRcdGlmKC0tbGltaXQgPD0gMCkgYnJlYWs7XG5cdFx0fVxuXG5cdFx0Y2hpbGRzID0gZWxlbXNbaV0uY2hpbGRyZW47XG5cdFx0aWYocmVjdXJzZSAmJiBjaGlsZHMgJiYgY2hpbGRzLmxlbmd0aCA+IDApe1xuXHRcdFx0Y2hpbGRzID0gZmluZCh0ZXN0LCBjaGlsZHMsIHJlY3Vyc2UsIGxpbWl0KTtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2hpbGRzKTtcblx0XHRcdGxpbWl0IC09IGNoaWxkcy5sZW5ndGg7XG5cdFx0XHRpZihsaW1pdCA8PSAwKSBicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaW5kT25lQ2hpbGQodGVzdCwgZWxlbXMpe1xuXHRmb3IodmFyIGkgPSAwLCBsID0gZWxlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKXtcblx0XHRpZih0ZXN0KGVsZW1zW2ldKSkgcmV0dXJuIGVsZW1zW2ldO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGZpbmRPbmUodGVzdCwgZWxlbXMpe1xuXHR2YXIgZWxlbSA9IG51bGw7XG5cblx0Zm9yKHZhciBpID0gMCwgbCA9IGVsZW1zLmxlbmd0aDsgaSA8IGwgJiYgIWVsZW07IGkrKyl7XG5cdFx0aWYoIWlzVGFnKGVsZW1zW2ldKSl7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9IGVsc2UgaWYodGVzdChlbGVtc1tpXSkpe1xuXHRcdFx0ZWxlbSA9IGVsZW1zW2ldO1xuXHRcdH0gZWxzZSBpZihlbGVtc1tpXS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcblx0XHRcdGVsZW0gPSBmaW5kT25lKHRlc3QsIGVsZW1zW2ldLmNoaWxkcmVuKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZXhpc3RzT25lKHRlc3QsIGVsZW1zKXtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGVsZW1zLmxlbmd0aDsgaSA8IGw7IGkrKyl7XG5cdFx0aWYoXG5cdFx0XHRpc1RhZyhlbGVtc1tpXSkgJiYgKFxuXHRcdFx0XHR0ZXN0KGVsZW1zW2ldKSB8fCAoXG5cdFx0XHRcdFx0ZWxlbXNbaV0uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdGV4aXN0c09uZSh0ZXN0LCBlbGVtc1tpXS5jaGlsZHJlbilcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRBbGwodGVzdCwgcm9vdEVsZW1zKXtcblx0dmFyIHJlc3VsdCA9IFtdO1xuXHR2YXIgc3RhY2sgPSByb290RWxlbXMuc2xpY2UoKTtcblx0d2hpbGUoc3RhY2subGVuZ3RoKXtcblx0XHR2YXIgZWxlbSA9IHN0YWNrLnNoaWZ0KCk7XG5cdFx0aWYoIWlzVGFnKGVsZW0pKSBjb250aW51ZTtcblx0XHRpZiAoZWxlbS5jaGlsZHJlbiAmJiBlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdHN0YWNrLnVuc2hpZnQuYXBwbHkoc3RhY2ssIGVsZW0uY2hpbGRyZW4pO1xuXHRcdH1cblx0XHRpZih0ZXN0KGVsZW0pKSByZXN1bHQucHVzaChlbGVtKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuIiwidmFyIEVsZW1lbnRUeXBlID0gcmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpLFxuICAgIGdldE91dGVySFRNTCA9IHJlcXVpcmUoXCJkb20tc2VyaWFsaXplclwiKSxcbiAgICBpc1RhZyA9IEVsZW1lbnRUeXBlLmlzVGFnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0SW5uZXJIVE1MOiBnZXRJbm5lckhUTUwsXG5cdGdldE91dGVySFRNTDogZ2V0T3V0ZXJIVE1MLFxuXHRnZXRUZXh0OiBnZXRUZXh0XG59O1xuXG5mdW5jdGlvbiBnZXRJbm5lckhUTUwoZWxlbSwgb3B0cyl7XG5cdHJldHVybiBlbGVtLmNoaWxkcmVuID8gZWxlbS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oZWxlbSl7XG5cdFx0cmV0dXJuIGdldE91dGVySFRNTChlbGVtLCBvcHRzKTtcblx0fSkuam9pbihcIlwiKSA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGdldFRleHQoZWxlbSl7XG5cdGlmKEFycmF5LmlzQXJyYXkoZWxlbSkpIHJldHVybiBlbGVtLm1hcChnZXRUZXh0KS5qb2luKFwiXCIpO1xuXHRpZihpc1RhZyhlbGVtKSkgcmV0dXJuIGVsZW0ubmFtZSA9PT0gXCJiclwiID8gXCJcXG5cIiA6IGdldFRleHQoZWxlbS5jaGlsZHJlbik7XG5cdGlmKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuQ0RBVEEpIHJldHVybiBnZXRUZXh0KGVsZW0uY2hpbGRyZW4pO1xuXHRpZihlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlRleHQpIHJldHVybiBlbGVtLmRhdGE7XG5cdHJldHVybiBcIlwiO1xufVxuIiwidmFyIGdldENoaWxkcmVuID0gZXhwb3J0cy5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGVsZW0pe1xuXHRyZXR1cm4gZWxlbS5jaGlsZHJlbjtcbn07XG5cbnZhciBnZXRQYXJlbnQgPSBleHBvcnRzLmdldFBhcmVudCA9IGZ1bmN0aW9uKGVsZW0pe1xuXHRyZXR1cm4gZWxlbS5wYXJlbnQ7XG59O1xuXG5leHBvcnRzLmdldFNpYmxpbmdzID0gZnVuY3Rpb24oZWxlbSl7XG5cdHZhciBwYXJlbnQgPSBnZXRQYXJlbnQoZWxlbSk7XG5cdHJldHVybiBwYXJlbnQgPyBnZXRDaGlsZHJlbihwYXJlbnQpIDogW2VsZW1dO1xufTtcblxuZXhwb3J0cy5nZXRBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKGVsZW0sIG5hbWUpe1xuXHRyZXR1cm4gZWxlbS5hdHRyaWJzICYmIGVsZW0uYXR0cmlic1tuYW1lXTtcbn07XG5cbmV4cG9ydHMuaGFzQXR0cmliID0gZnVuY3Rpb24oZWxlbSwgbmFtZSl7XG5cdHJldHVybiAhIWVsZW0uYXR0cmlicyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGVsZW0uYXR0cmlicywgbmFtZSk7XG59O1xuXG5leHBvcnRzLmdldE5hbWUgPSBmdW5jdGlvbihlbGVtKXtcblx0cmV0dXJuIGVsZW0ubmFtZTtcbn07XG4iLCJ2YXIgcHVueWNvZGUgPSByZXF1aXJlKCdwdW55Y29kZScpO1xudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnLi9lbnRpdGllcy5qc29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5mdW5jdGlvbiBkZWNvZGUgKHN0cikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIFN0cmluZycpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJigjP1teO1xcV10rOz8pL2csIGZ1bmN0aW9uIChfLCBtYXRjaCkge1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgaWYgKG0gPSAvXiMoXFxkKyk7PyQvLmV4ZWMobWF0Y2gpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHVueWNvZGUudWNzMi5lbmNvZGUoWyBwYXJzZUludChtWzFdLCAxMCkgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9IC9eI1tYeF0oW0EtRmEtZjAtOV0rKTs/Ly5leGVjKG1hdGNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHB1bnljb2RlLnVjczIuZW5jb2RlKFsgcGFyc2VJbnQobVsxXSwgMTYpIF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbmFtZWQgZW50aXR5XG4gICAgICAgICAgICB2YXIgaGFzU2VtaSA9IC87JC8udGVzdChtYXRjaCk7XG4gICAgICAgICAgICB2YXIgd2l0aG91dFNlbWkgPSBoYXNTZW1pID8gbWF0Y2gucmVwbGFjZSgvOyQvLCAnJykgOiBtYXRjaDtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlbnRpdGllc1t3aXRob3V0U2VtaV0gfHwgKGhhc1NlbWkgJiYgZW50aXRpZXNbbWF0Y2hdKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB1bnljb2RlLnVjczIuZW5jb2RlKFsgdGFyZ2V0IF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJicgKyBtYXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIHB1bnljb2RlID0gcmVxdWlyZSgncHVueWNvZGUnKTtcbnZhciByZXZFbnRpdGllcyA9IHJlcXVpcmUoJy4vcmV2ZXJzZWQuanNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuZnVuY3Rpb24gZW5jb2RlIChzdHIsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBTdHJpbmcnKTtcbiAgICB9XG4gICAgaWYgKCFvcHRzKSBvcHRzID0ge307XG5cbiAgICB2YXIgbnVtZXJpYyA9IHRydWU7XG4gICAgaWYgKG9wdHMubmFtZWQpIG51bWVyaWMgPSBmYWxzZTtcbiAgICBpZiAob3B0cy5udW1lcmljICE9PSB1bmRlZmluZWQpIG51bWVyaWMgPSBvcHRzLm51bWVyaWM7XG5cbiAgICB2YXIgc3BlY2lhbCA9IG9wdHMuc3BlY2lhbCB8fCB7XG4gICAgICAgICdcIic6IHRydWUsIFwiJ1wiOiB0cnVlLFxuICAgICAgICAnPCc6IHRydWUsICc+JzogdHJ1ZSxcbiAgICAgICAgJyYnOiB0cnVlXG4gICAgfTtcblxuICAgIHZhciBjb2RlUG9pbnRzID0gcHVueWNvZGUudWNzMi5kZWNvZGUoc3RyKTtcbiAgICB2YXIgY2hhcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvZGVQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNjID0gY29kZVBvaW50c1tpXTtcbiAgICAgICAgdmFyIGMgPSBwdW55Y29kZS51Y3MyLmVuY29kZShbIGNjIF0pO1xuICAgICAgICB2YXIgZSA9IHJldkVudGl0aWVzW2NjXTtcbiAgICAgICAgaWYgKGUgJiYgKGNjID49IDEyNyB8fCBzcGVjaWFsW2NdKSAmJiAhbnVtZXJpYykge1xuICAgICAgICAgICAgY2hhcnMucHVzaCgnJicgKyAoLzskLy50ZXN0KGUpID8gZSA6IGUgKyAnOycpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYyA8IDMyIHx8IGNjID49IDEyNyB8fCBzcGVjaWFsW2NdKSB7XG4gICAgICAgICAgICBjaGFycy5wdXNoKCcmIycgKyBjYyArICc7Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFycy5wdXNoKGMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbn1cbiIsImV4cG9ydHMuZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbmV4cG9ydHMuZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbiIsInZhciBkZWNvZGVNYXAgPSByZXF1aXJlKFwiLi4vbWFwcy9kZWNvZGUuanNvblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVDb2RlUG9pbnQ7XG5cbi8vIG1vZGlmaWVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvaGUvYmxvYi9tYXN0ZXIvc3JjL2hlLmpzI0w5NC1MMTE5XG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnQoY29kZVBvaW50KSB7XG4gICAgaWYgKChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRmZmYpIHx8IGNvZGVQb2ludCA+IDB4MTBmZmZmKSB7XG4gICAgICAgIHJldHVybiBcIlxcdUZGRkRcIjtcbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50IGluIGRlY29kZU1hcCkge1xuICAgICAgICBjb2RlUG9pbnQgPSBkZWNvZGVNYXBbY29kZVBvaW50XTtcbiAgICB9XG5cbiAgICB2YXIgb3V0cHV0ID0gXCJcIjtcblxuICAgIGlmIChjb2RlUG9pbnQgPiAweGZmZmYpIHtcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+PiAxMCkgJiAweDNmZikgfCAweGQ4MDApO1xuICAgICAgICBjb2RlUG9pbnQgPSAweGRjMDAgfCAoY29kZVBvaW50ICYgMHgzZmYpO1xuICAgIH1cblxuICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJ2YXIgdG9wTGV2ZWwgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fVxudmFyIG1pbkRvYyA9IHJlcXVpcmUoJ21pbi1kb2N1bWVudCcpO1xuXG52YXIgZG9jY3k7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jY3kgPSBkb2N1bWVudDtcbn0gZWxzZSB7XG4gICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddO1xuXG4gICAgaWYgKCFkb2NjeSkge1xuICAgICAgICBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J10gPSBtaW5Eb2M7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvY2N5O1xuIiwidmFyIGNvbnZlcnRIVE1MID0gcmVxdWlyZSgnLi9saWIvaHRtbC10by12ZG9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaXRpYWxpemVDb252ZXJ0ZXIgKGRlcGVuZGVuY2llcykge1xuICAgIGlmICghZGVwZW5kZW5jaWVzLlZOb2RlIHx8ICFkZXBlbmRlbmNpZXMuVlRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdodG1sLXRvLXZkb20gbmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWQgd2l0aCBWTm9kZSBhbmQgVlRleHQnKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnZlcnRIVE1MKGRlcGVuZGVuY2llcy5WTm9kZSwgZGVwZW5kZW5jaWVzLlZUZXh0KTtcbn07XG4iLCIvKlxuICAgIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9jMjY1NTA0ZmUyZmRlYWRmMGU1MzU4ODc5YTNjMTQxNjI4YjM3YTIzL3NyYy9yZW5kZXJlcnMvZG9tL3NoYXJlZC9IVE1MRE9NUHJvcGVydHlDb25maWcuanNcbiAqL1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJ2VudCcpLmRlY29kZTtcblxudmFyIE1VU1RfVVNFX0FUVFJJQlVURSA9IDB4MTtcbnZhciBNVVNUX1VTRV9QUk9QRVJUWSA9IDB4MjtcbnZhciBIQVNfQk9PTEVBTl9WQUxVRSA9IDB4ODtcbnZhciBIQVNfTlVNRVJJQ19WQUxVRSA9IDB4MTA7XG52YXIgSEFTX1BPU0lUSVZFX05VTUVSSUNfVkFMVUUgPSAweDIwIHwgMHgxMDtcbnZhciBIQVNfT1ZFUkxPQURFRF9CT09MRUFOX1ZBTFVFID0gMHg0MDtcblxuZnVuY3Rpb24gY2hlY2tNYXNrKHZhbHVlLCBiaXRtYXNrKSB7XG4gIHJldHVybiAodmFsdWUgJiBiaXRtYXNrKSA9PT0gYml0bWFzaztcbn1cblxudmFyIGlzQ3VzdG9tQXR0cmlidXRlID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0LmJpbmQoXG4gICAgL14oZGF0YXxhcmlhKS1bYS16X11bYS16XFxkXy5cXC1dKiQvXG4pO1xuXG52YXIgSFRNTERPTVByb3BlcnR5Q29uZmlnID0ge1xuICBcbiAgUHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIFByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBhY2NlcHQ6IG51bGwsXG4gICAgYWNjZXB0Q2hhcnNldDogbnVsbCxcbiAgICBhY2Nlc3NLZXk6IG51bGwsXG4gICAgYWN0aW9uOiBudWxsLFxuICAgIGFsbG93RnVsbFNjcmVlbjogTVVTVF9VU0VfQVRUUklCVVRFIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgYWxsb3dUcmFuc3BhcmVuY3k6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBhbHQ6IG51bGwsXG4gICAgYXN5bmM6IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGF1dG9Db21wbGV0ZTogbnVsbCxcbiAgICBhdXRvRm9jdXM6IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGF1dG9QbGF5OiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBjYXB0dXJlOiBNVVNUX1VTRV9BVFRSSUJVVEUgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBjZWxsUGFkZGluZzogbnVsbCxcbiAgICBjZWxsU3BhY2luZzogbnVsbCxcbiAgICBjaGFyU2V0OiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgY2hhbGxlbmdlOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgY2hlY2tlZDogTVVTVF9VU0VfUFJPUEVSVFkgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBjbGFzc0lEOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgLy8gVG8gc2V0IGNsYXNzTmFtZSBvbiBTVkcgZWxlbWVudHMsIGl0J3MgbmVjZXNzYXJ5IHRvIHVzZSAuc2V0QXR0cmlidXRlO1xuICAgIC8vIHRoaXMgd29ya3Mgb24gSFRNTCBlbGVtZW50cyB0b28gaW4gYWxsIGJyb3dzZXJzIGV4Y2VwdCBJRTguXG4gICAgY2xhc3NOYW1lOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgY29sczogTVVTVF9VU0VfQVRUUklCVVRFIHwgSEFTX1BPU0lUSVZFX05VTUVSSUNfVkFMVUUsXG4gICAgY29sU3BhbjogbnVsbCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGNvbnRlbnRFZGl0YWJsZTogbnVsbCxcbiAgICBjb250ZXh0TWVudTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGNvbnRyb2xzOiBNVVNUX1VTRV9QUk9QRVJUWSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGNvb3JkczogbnVsbCxcbiAgICBjcm9zc09yaWdpbjogbnVsbCxcbiAgICBkYXRhOiBudWxsLCAvLyBGb3IgYDxvYmplY3QgLz5gIGFjdHMgYXMgYHNyY2AuXG4gICAgZGF0ZVRpbWU6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBkZWZlcjogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgZGlyOiBudWxsLFxuICAgIGRpc2FibGVkOiBNVVNUX1VTRV9BVFRSSUJVVEUgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBkb3dubG9hZDogSEFTX09WRVJMT0FERURfQk9PTEVBTl9WQUxVRSxcbiAgICBkcmFnZ2FibGU6IG51bGwsXG4gICAgZW5jVHlwZTogbnVsbCxcbiAgICBmb3JtOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgZm9ybUFjdGlvbjogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGZvcm1FbmNUeXBlOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgZm9ybU1ldGhvZDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGZvcm1Ob1ZhbGlkYXRlOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBmb3JtVGFyZ2V0OiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgZnJhbWVCb3JkZXI6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBoZWFkZXJzOiBudWxsLFxuICAgIGhlaWdodDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGhpZGRlbjogTVVTVF9VU0VfQVRUUklCVVRFIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgaGlnaDogbnVsbCxcbiAgICBocmVmOiBudWxsLFxuICAgIGhyZWZMYW5nOiBudWxsLFxuICAgIGh0bWxGb3I6IG51bGwsXG4gICAgaHR0cEVxdWl2OiBudWxsLFxuICAgIGljb246IG51bGwsXG4gICAgaWQ6IE1VU1RfVVNFX1BST1BFUlRZLFxuICAgIGlzOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAga2V5UGFyYW1zOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAga2V5VHlwZTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIGxhbmc6IG51bGwsXG4gICAgbGlzdDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGxvb3A6IE1VU1RfVVNFX1BST1BFUlRZIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgbG93OiBudWxsLFxuICAgIG1hbmlmZXN0OiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgbWFyZ2luSGVpZ2h0OiBudWxsLFxuICAgIG1hcmdpbldpZHRoOiBudWxsLFxuICAgIG1heDogbnVsbCxcbiAgICBtYXhMZW5ndGg6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBtZWRpYTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIG1lZGlhR3JvdXA6IG51bGwsXG4gICAgbWV0aG9kOiBudWxsLFxuICAgIG1pbjogbnVsbCxcbiAgICBtaW5MZW5ndGg6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBtdWx0aXBsZTogTVVTVF9VU0VfUFJPUEVSVFkgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBtdXRlZDogTVVTVF9VU0VfUFJPUEVSVFkgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBuYW1lOiBudWxsLFxuICAgIG5vVmFsaWRhdGU6IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIG9wZW46IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIG9wdGltdW06IG51bGwsXG4gICAgcGF0dGVybjogbnVsbCxcbiAgICBwbGFjZWhvbGRlcjogbnVsbCxcbiAgICBwb3N0ZXI6IG51bGwsXG4gICAgcHJlbG9hZDogbnVsbCxcbiAgICByYWRpb0dyb3VwOiBudWxsLFxuICAgIHJlYWRPbmx5OiBNVVNUX1VTRV9QUk9QRVJUWSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIHJlbDogbnVsbCxcbiAgICByZXF1aXJlZDogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgcm9sZTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIHJvd3M6IE1VU1RfVVNFX0FUVFJJQlVURSB8IEhBU19QT1NJVElWRV9OVU1FUklDX1ZBTFVFLFxuICAgIHJvd1NwYW46IG51bGwsXG4gICAgc2FuZGJveDogbnVsbCxcbiAgICBzY29wZTogbnVsbCxcbiAgICBzY29wZWQ6IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIHNjcm9sbGluZzogbnVsbCxcbiAgICBzZWFtbGVzczogTVVTVF9VU0VfQVRUUklCVVRFIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgc2VsZWN0ZWQ6IE1VU1RfVVNFX1BST1BFUlRZIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgc2hhcGU6IG51bGwsXG4gICAgc2l6ZTogTVVTVF9VU0VfQVRUUklCVVRFIHwgSEFTX1BPU0lUSVZFX05VTUVSSUNfVkFMVUUsXG4gICAgc2l6ZXM6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBzcGFuOiBIQVNfUE9TSVRJVkVfTlVNRVJJQ19WQUxVRSxcbiAgICBzcGVsbENoZWNrOiBudWxsLFxuICAgIHNyYzogbnVsbCxcbiAgICBzcmNEb2M6IE1VU1RfVVNFX1BST1BFUlRZLFxuICAgIHNyY1NldDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIHN0YXJ0OiBIQVNfTlVNRVJJQ19WQUxVRSxcbiAgICBzdGVwOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHRhYkluZGV4OiBudWxsLFxuICAgIHRhcmdldDogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHVzZU1hcDogbnVsbCxcbiAgICB2YWx1ZTogTVVTVF9VU0VfUFJPUEVSVFksXG4gICAgd2lkdGg6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICB3bW9kZTogTVVTVF9VU0VfQVRUUklCVVRFLFxuXG4gICAgLyoqXG4gICAgICogTm9uLXN0YW5kYXJkIFByb3BlcnRpZXNcbiAgICAgKi9cbiAgICAvLyBhdXRvQ2FwaXRhbGl6ZSBhbmQgYXV0b0NvcnJlY3QgYXJlIHN1cHBvcnRlZCBpbiBNb2JpbGUgU2FmYXJpIGZvclxuICAgIC8vIGtleWJvYXJkIGhpbnRzLlxuICAgIGF1dG9DYXBpdGFsaXplOiBudWxsLFxuICAgIGF1dG9Db3JyZWN0OiBudWxsLFxuICAgIC8vIGl0ZW1Qcm9wLCBpdGVtU2NvcGUsIGl0ZW1UeXBlIGFyZSBmb3JcbiAgICAvLyBNaWNyb2RhdGEgc3VwcG9ydC4gU2VlIGh0dHA6Ly9zY2hlbWEub3JnL2RvY3MvZ3MuaHRtbFxuICAgIGl0ZW1Qcm9wOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgaXRlbVNjb3BlOiBNVVNUX1VTRV9BVFRSSUJVVEUgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBpdGVtVHlwZTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIC8vIGl0ZW1JRCBhbmQgaXRlbVJlZiBhcmUgZm9yIE1pY3JvZGF0YSBzdXBwb3J0IGFzIHdlbGwgYnV0XG4gICAgLy8gb25seSBzcGVjaWZpZWQgaW4gdGhlIHRoZSBXSEFUV0cgc3BlYyBkb2N1bWVudC4gU2VlXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvbWljcm9kYXRhLmh0bWwjbWljcm9kYXRhLWRvbS1hcGlcbiAgICBpdGVtSUQ6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBpdGVtUmVmOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgLy8gcHJvcGVydHkgaXMgc3VwcG9ydGVkIGZvciBPcGVuR3JhcGggaW4gbWV0YSB0YWdzLlxuICAgIHByb3BlcnR5OiBudWxsLFxuICAgIC8vIElFLW9ubHkgYXR0cmlidXRlIHRoYXQgY29udHJvbHMgZm9jdXMgYmVoYXZpb3JcbiAgICB1bnNlbGVjdGFibGU6IE1VU1RfVVNFX0FUVFJJQlVURVxuICB9XG59O1xuXG52YXIgcGFyc2VTdHlsZXMgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gaW5wdXQuc3BsaXQoJzsnKTtcbiAgICB2YXIgc3R5bGVzID0gYXR0cmlidXRlcy5yZWR1Y2UoZnVuY3Rpb24ob2JqZWN0LCBhdHRyaWJ1dGUpe1xuICAgICAgICB2YXIgZW50cnkgPSBhdHRyaWJ1dGUuc3BsaXQoLzooLispLyk7XG4gICAgICAgIGlmIChlbnRyeVswXSAmJiBlbnRyeVsxXSkge1xuICAgICAgICAgICAgb2JqZWN0W2VudHJ5WzBdLnRyaW0oKV0gPSBlbnRyeVsxXS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LHt9KTtcbiAgICByZXR1cm4gc3R5bGVzO1xufTtcblxudmFyIHByb3BlcnR5VG9BdHRyaWJ1dGVNYXBwaW5nID0ge1xuICAgICdjbGFzc05hbWUnOiAnY2xhc3MnLFxuICAgICdodG1sRm9yJzogJ2ZvcicsXG4gICAgJ2h0dHBFcXVpdic6ICdodHRwLWVxdWl2JyxcbiAgICAnYWNjZXB0Q2hhcnNldCc6ICdhY2NlcHQtY2hhcnNldCdcbn07XG5cbnZhciBwcm9wZXJ0eVZhbHVlQ29udmVyc2lvbnMgPSB7XG4gICAgJ3N0eWxlJzogcGFyc2VTdHlsZXMsXG4gICAgJ3BsYWNlaG9sZGVyJzogZGVjb2RlLFxuICAgICd0aXRsZSc6IGRlY29kZSxcbiAgICAnYWx0JzogZGVjb2RlXG59O1xuXG52YXIgZ2V0UHJvcGVydHlJbmZvID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvcEluZm9CeUF0dHJpYnV0ZU5hbWUgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKEhUTUxET01Qcm9wZXJ0eUNvbmZpZy5Qcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wTmFtZSkge1xuICAgICAgICB2YXIgcHJvcENvbmZpZyA9IEhUTUxET01Qcm9wZXJ0eUNvbmZpZy5Qcm9wZXJ0aWVzW3Byb3BOYW1lXTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eVRvQXR0cmlidXRlTWFwcGluZ1twcm9wTmFtZV0gfHwgcHJvcE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICB2YXIgcHJvcGVydHlJbmZvID0ge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcE5hbWUsXG5cbiAgICAgICAgICAgIG11c3RVc2VBdHRyaWJ1dGU6IGNoZWNrTWFzayhwcm9wQ29uZmlnLCBNVVNUX1VTRV9BVFRSSUJVVEUpLFxuICAgICAgICAgICAgbXVzdFVzZVByb3BlcnR5OiBjaGVja01hc2socHJvcENvbmZpZywgTVVTVF9VU0VfUFJPUEVSVFkpLFxuICAgICAgICAgICAgaGFzQm9vbGVhblZhbHVlOiBjaGVja01hc2socHJvcENvbmZpZywgSEFTX0JPT0xFQU5fVkFMVUUpLFxuICAgICAgICAgICAgaGFzTnVtZXJpY1ZhbHVlOiBjaGVja01hc2socHJvcENvbmZpZywgSEFTX05VTUVSSUNfVkFMVUUpLFxuICAgICAgICAgICAgaGFzUG9zaXRpdmVOdW1lcmljVmFsdWU6XG4gICAgICAgICAgICBjaGVja01hc2socHJvcENvbmZpZywgSEFTX1BPU0lUSVZFX05VTUVSSUNfVkFMVUUpLFxuICAgICAgICAgICAgaGFzT3ZlcmxvYWRlZEJvb2xlYW5WYWx1ZTpcbiAgICAgICAgICAgIGNoZWNrTWFzayhwcm9wQ29uZmlnLCBIQVNfT1ZFUkxPQURFRF9CT09MRUFOX1ZBTFVFKSxcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9wSW5mb0J5QXR0cmlidXRlTmFtZVthdHRyaWJ1dGVOYW1lXSA9IHByb3BlcnR5SW5mbztcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICAgICAgICByZXR1cm4gcHJvcEluZm9CeUF0dHJpYnV0ZU5hbWVbYXR0cmlidXRlTmFtZV07XG4gICAgfTtcbn0pKCk7XG5cblxudmFyIGNvbnZlcnRUYWdBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKHRhZykge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gdGFnLmF0dHJpYnM7XG5cbiAgICB2YXIgdmRvbVByb3BlcnRpZXMgPSB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgdmFyIGxvd2VyQ2FzZWQgPSBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBwcm9wSW5mbyA9IGdldFByb3BlcnR5SW5mbyhsb3dlckNhc2VkKTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICBpZiAoaXNDdXN0b21BdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgfHwgIXByb3BJbmZvKSB7XG4gICAgICAgICAgICB2ZG9tUHJvcGVydGllcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciB2YWx1ZUNvbnZlcnRlciA9IHByb3BlcnR5VmFsdWVDb252ZXJzaW9uc1twcm9wSW5mby5wcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAodmFsdWVDb252ZXJ0ZXIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVDb252ZXJ0ZXIodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BJbmZvLm11c3RVc2VBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5oYXNCb29sZWFuVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBCb29sZWFuIGF0dHJpYnV0ZXMgY29tZSBpbiBhcyBhbiBlbXB0eSBzdHJpbmcgb3IgdGhlIFxuICAgICAgICAgICAgICAgIHZkb21Qcm9wZXJ0aWVzLmF0dHJpYnV0ZXNbcHJvcEluZm8uYXR0cmlidXRlTmFtZV0gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZkb21Qcm9wZXJ0aWVzLmF0dHJpYnV0ZXNbcHJvcEluZm8uYXR0cmlidXRlTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBbnl0aGluZyB3ZSBkb24ndCBzZXQgYXMgYW4gYXR0cmlidXRlIGlzIHRyZWF0ZWQgYXMgYSBwcm9wZXJ0eVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpc1RydWU7XG4gICAgICAgICAgICBpZiAocHJvcEluZm8uaGFzQm9vbGVhblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaXNUcnVlID0gKHZhbHVlID09PSAnJyB8fCB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBwcm9wSW5mby5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICB2ZG9tUHJvcGVydGllc1twcm9wSW5mby5wcm9wZXJ0eU5hbWVdID0gaXNUcnVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcEluZm8uaGFzT3ZlcmxvYWRlZEJvb2xlYW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlzVHJ1ZSA9ICh2YWx1ZSA9PT0gJycpO1xuICAgICAgICAgICAgICAgIHZkb21Qcm9wZXJ0aWVzW3Byb3BJbmZvLnByb3BlcnR5TmFtZV0gPSBpc1RydWUgPyB0cnVlIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wSW5mby5oYXNOdW1lcmljVmFsdWUgfHwgcHJvcEluZm8uaGFzUG9zaXRpdmVOdW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2ZG9tUHJvcGVydGllc1twcm9wSW5mby5wcm9wZXJ0eU5hbWVdID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZkb21Qcm9wZXJ0aWVzW3Byb3BJbmZvLnByb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmRvbVByb3BlcnRpZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRUYWdBdHRyaWJ1dGVzO1xuIiwidmFyIGNyZWF0ZUNvbnZlcnRlciA9IHJlcXVpcmUoJy4vaHRtbHBhcnNlci10by12ZG9tJyk7XG52YXIgcGFyc2VIVE1MID0gcmVxdWlyZSgnLi9wYXJzZS1odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5pdGlhbGl6ZUh0bWxUb1Zkb20gKFZUcmVlLCBWVGV4dCkge1xuICAgIHZhciBodG1scGFyc2VyVG9WZG9tID0gY3JlYXRlQ29udmVydGVyKFZUcmVlLCBWVGV4dCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbnZlcnRIVE1MKG9wdGlvbnMsIGh0bWwpIHtcbiAgICAgICAgdmFyIG5vT3B0aW9ucyA9IHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZyc7XG4gICAgICAgIHZhciBoYXNPcHRpb25zID0gIW5vT3B0aW9ucztcblxuICAgICAgICAvLyB3YXMgaHRtbCBzdXBwbGllZCBhcyB0aGUgb25seSBhcmd1bWVudD9cbiAgICAgICAgdmFyIGh0bWxUb0NvbnZlcnQgPSBub09wdGlvbnMgPyBvcHRpb25zIDogaHRtbDtcbiAgICAgICAgdmFyIGdldFZOb2RlS2V5ID0gaGFzT3B0aW9ucyA/IG9wdGlvbnMuZ2V0Vk5vZGVLZXkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgdmFyIHRhZ3MgPSBwYXJzZUhUTUwoaHRtbFRvQ29udmVydCk7XG5cbiAgICAgICAgdmFyIGNvbnZlcnRlZEhUTUw7XG4gICAgICAgIGlmICh0YWdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZEhUTUwgPSB0YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxwYXJzZXJUb1Zkb20uY29udmVydCh0YWcsIGdldFZOb2RlS2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udmVydGVkSFRNTCA9IGh0bWxwYXJzZXJUb1Zkb20uY29udmVydCh0YWdzWzBdLCBnZXRWTm9kZUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRIVE1MO1xuICAgIH07XG59O1xuIiwidmFyIGRlY29kZSA9IHJlcXVpcmUoJ2VudCcpLmRlY29kZTtcbnZhciBjb252ZXJ0VGFnQXR0cmlidXRlcyA9IHJlcXVpcmUoJy4vY29udmVydC10YWctYXR0cmlidXRlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUNvbnZlcnRlciAoVk5vZGUsIFZUZXh0KSB7XG4gICAgdmFyIGNvbnZlcnRlciA9IHtcbiAgICAgICAgY29udmVydDogZnVuY3Rpb24gKG5vZGUsIGdldFZOb2RlS2V5KSB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAndGFnJyB8fCBub2RlLnR5cGUgPT09ICdzY3JpcHQnIHx8IG5vZGUudHlwZSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJ0ZXIuY29udmVydFRhZyhub2RlLCBnZXRWTm9kZUtleSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWVGV4dChkZWNvZGUobm9kZS5kYXRhKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnRpbmcgYW4gdW5zdXBwb3J0ZWQgbm9kZSwgcmV0dXJuIGFuIGVtcHR5IHRleHQgbm9kZSBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVlRleHQoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb252ZXJ0VGFnOiBmdW5jdGlvbiAodGFnLCBnZXRWTm9kZUtleSkge1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBjb252ZXJ0VGFnQXR0cmlidXRlcyh0YWcpO1xuICAgICAgICAgICAgdmFyIGtleTtcblxuICAgICAgICAgICAgaWYgKGdldFZOb2RlS2V5KSB7XG4gICAgICAgICAgICAgICAga2V5ID0gZ2V0Vk5vZGVLZXkoYXR0cmlidXRlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0YWcuY2hpbGRyZW4gfHwgW10sIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udmVydGVyLmNvbnZlcnQobm9kZSwgZ2V0Vk5vZGVLZXkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgVk5vZGUodGFnLm5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gY29udmVydGVyO1xufTtcbiIsInZhciBodG1scGFyc2VyID0gcmVxdWlyZSgnaHRtbHBhcnNlcjInKTtcblxudmFyIHBhcnNlSFRNTCA9IGZ1bmN0aW9uIHBhcnNlSFRNTCAoaHRtbCkge1xuICAgIHZhciBoYW5kbGVyID0gbmV3IGh0bWxwYXJzZXIuRG9tSGFuZGxlcigpO1xuXG4gICAgdmFyIHBhcnNlciA9IG5ldyBodG1scGFyc2VyLlBhcnNlcihoYW5kbGVyLCB7XG4gICAgICAgIGxvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzOiBmYWxzZVxuICAgIH0pO1xuICAgIHBhcnNlci5wYXJzZUNvbXBsZXRlKGh0bWwpO1xuICAgIHJldHVybiBoYW5kbGVyLmRvbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VIVE1MO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW5nSGFuZGxlcjtcblxuZnVuY3Rpb24gQ29sbGVjdGluZ0hhbmRsZXIoY2JzKSB7XG4gICAgdGhpcy5fY2JzID0gY2JzIHx8IHt9O1xuICAgIHRoaXMuZXZlbnRzID0gW107XG59XG5cbnZhciBFVkVOVFMgPSByZXF1aXJlKFwiLi9cIikuRVZFTlRTO1xuT2JqZWN0LmtleXMoRVZFTlRTKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAoRVZFTlRTW25hbWVdID09PSAwKSB7XG4gICAgICAgIG5hbWUgPSBcIm9uXCIgKyBuYW1lO1xuICAgICAgICBDb2xsZWN0aW5nSGFuZGxlci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goW25hbWVdKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnNbbmFtZV0pIHRoaXMuX2Nic1tuYW1lXSgpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoRVZFTlRTW25hbWVdID09PSAxKSB7XG4gICAgICAgIG5hbWUgPSBcIm9uXCIgKyBuYW1lO1xuICAgICAgICBDb2xsZWN0aW5nSGFuZGxlci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKFtuYW1lLCBhXSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzW25hbWVdKSB0aGlzLl9jYnNbbmFtZV0oYSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChFVkVOVFNbbmFtZV0gPT09IDIpIHtcbiAgICAgICAgbmFtZSA9IFwib25cIiArIG5hbWU7XG4gICAgICAgIENvbGxlY3RpbmdIYW5kbGVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goW25hbWUsIGEsIGJdKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnNbbmFtZV0pIHRoaXMuX2Nic1tuYW1lXShhLCBiKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcIndyb25nIG51bWJlciBvZiBhcmd1bWVudHNcIik7XG4gICAgfVxufSk7XG5cbkNvbGxlY3RpbmdIYW5kbGVyLnByb3RvdHlwZS5vbnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICBpZiAodGhpcy5fY2JzLm9ucmVzZXQpIHRoaXMuX2Nicy5vbnJlc2V0KCk7XG59O1xuXG5Db2xsZWN0aW5nSGFuZGxlci5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYnMub25yZXNldCkgdGhpcy5fY2JzLm9ucmVzZXQoKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmV2ZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGhpcy5fY2JzW3RoaXMuZXZlbnRzW2ldWzBdXSkge1xuICAgICAgICAgICAgdmFyIG51bSA9IHRoaXMuZXZlbnRzW2ldLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nic1t0aGlzLmV2ZW50c1tpXVswXV0oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzW3RoaXMuZXZlbnRzW2ldWzBdXSh0aGlzLmV2ZW50c1tpXVsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nic1t0aGlzLmV2ZW50c1tpXVswXV0oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzW2ldWzFdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1tpXVsyXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwidmFyIERvbUhhbmRsZXIgPSByZXF1aXJlKFwiZG9taGFuZGxlclwiKTtcbnZhciBEb21VdGlscyA9IHJlcXVpcmUoXCJkb211dGlsc1wiKTtcblxuLy9UT0RPOiBtYWtlIHRoaXMgYSBzdHJlYW1hYmxlIGhhbmRsZXJcbmZ1bmN0aW9uIEZlZWRIYW5kbGVyKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgdGhpcy5pbml0KGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cblxucmVxdWlyZShcImluaGVyaXRzXCIpKEZlZWRIYW5kbGVyLCBEb21IYW5kbGVyKTtcblxuRmVlZEhhbmRsZXIucHJvdG90eXBlLmluaXQgPSBEb21IYW5kbGVyO1xuXG5mdW5jdGlvbiBnZXRFbGVtZW50cyh3aGF0LCB3aGVyZSkge1xuICAgIHJldHVybiBEb21VdGlscy5nZXRFbGVtZW50c0J5VGFnTmFtZSh3aGF0LCB3aGVyZSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBnZXRPbmVFbGVtZW50KHdoYXQsIHdoZXJlKSB7XG4gICAgcmV0dXJuIERvbVV0aWxzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHdoYXQsIHdoZXJlLCB0cnVlLCAxKVswXTtcbn1cbmZ1bmN0aW9uIGZldGNoKHdoYXQsIHdoZXJlLCByZWN1cnNlKSB7XG4gICAgcmV0dXJuIERvbVV0aWxzLmdldFRleHQoXG4gICAgICAgIERvbVV0aWxzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHdoYXQsIHdoZXJlLCByZWN1cnNlLCAxKVxuICAgICkudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBhZGRDb25kaXRpb25hbGx5KG9iaiwgcHJvcCwgd2hhdCwgd2hlcmUsIHJlY3Vyc2UpIHtcbiAgICB2YXIgdG1wID0gZmV0Y2god2hhdCwgd2hlcmUsIHJlY3Vyc2UpO1xuICAgIGlmICh0bXApIG9ialtwcm9wXSA9IHRtcDtcbn1cblxudmFyIGlzVmFsaWRGZWVkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwicnNzXCIgfHwgdmFsdWUgPT09IFwiZmVlZFwiIHx8IHZhbHVlID09PSBcInJkZjpSREZcIjtcbn07XG5cbkZlZWRIYW5kbGVyLnByb3RvdHlwZS5vbmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmZWVkID0ge30sXG4gICAgICAgIGZlZWRSb290ID0gZ2V0T25lRWxlbWVudChpc1ZhbGlkRmVlZCwgdGhpcy5kb20pLFxuICAgICAgICB0bXAsXG4gICAgICAgIGNoaWxkcztcblxuICAgIGlmIChmZWVkUm9vdCkge1xuICAgICAgICBpZiAoZmVlZFJvb3QubmFtZSA9PT0gXCJmZWVkXCIpIHtcbiAgICAgICAgICAgIGNoaWxkcyA9IGZlZWRSb290LmNoaWxkcmVuO1xuXG4gICAgICAgICAgICBmZWVkLnR5cGUgPSBcImF0b21cIjtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJpZFwiLCBcImlkXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh0bXAgPSBnZXRPbmVFbGVtZW50KFwibGlua1wiLCBjaGlsZHMpKSAmJlxuICAgICAgICAgICAgICAgICh0bXAgPSB0bXAuYXR0cmlicykgJiZcbiAgICAgICAgICAgICAgICAodG1wID0gdG1wLmhyZWYpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZmVlZC5saW5rID0gdG1wO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImRlc2NyaXB0aW9uXCIsIFwic3VidGl0bGVcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgIGlmICgodG1wID0gZmV0Y2goXCJ1cGRhdGVkXCIsIGNoaWxkcykpKSBmZWVkLnVwZGF0ZWQgPSBuZXcgRGF0ZSh0bXApO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImF1dGhvclwiLCBcImVtYWlsXCIsIGNoaWxkcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGZlZWQuaXRlbXMgPSBnZXRFbGVtZW50cyhcImVudHJ5XCIsIGNoaWxkcykubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgdG1wO1xuXG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0uY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcImlkXCIsIFwiaWRcIiwgaXRlbSk7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKHRtcCA9IGdldE9uZUVsZW1lbnQoXCJsaW5rXCIsIGl0ZW0pKSAmJlxuICAgICAgICAgICAgICAgICAgICAodG1wID0gdG1wLmF0dHJpYnMpICYmXG4gICAgICAgICAgICAgICAgICAgICh0bXAgPSB0bXAuaHJlZilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmxpbmsgPSB0bXA7XG4gICAgICAgICAgICAgICAgaWYgKCh0bXAgPSBmZXRjaChcInN1bW1hcnlcIiwgaXRlbSkgfHwgZmV0Y2goXCJjb250ZW50XCIsIGl0ZW0pKSlcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZGVzY3JpcHRpb24gPSB0bXA7XG4gICAgICAgICAgICAgICAgaWYgKCh0bXAgPSBmZXRjaChcInVwZGF0ZWRcIiwgaXRlbSkpKVxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wdWJEYXRlID0gbmV3IERhdGUodG1wKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkcyA9IGdldE9uZUVsZW1lbnQoXCJjaGFubmVsXCIsIGZlZWRSb290LmNoaWxkcmVuKS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgZmVlZC50eXBlID0gZmVlZFJvb3QubmFtZS5zdWJzdHIoMCwgMyk7XG4gICAgICAgICAgICBmZWVkLmlkID0gXCJcIjtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwibGlua1wiLCBcImxpbmtcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICBpZiAoKHRtcCA9IGZldGNoKFwibGFzdEJ1aWxkRGF0ZVwiLCBjaGlsZHMpKSlcbiAgICAgICAgICAgICAgICBmZWVkLnVwZGF0ZWQgPSBuZXcgRGF0ZSh0bXApO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImF1dGhvclwiLCBcIm1hbmFnaW5nRWRpdG9yXCIsIGNoaWxkcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGZlZWQuaXRlbXMgPSBnZXRFbGVtZW50cyhcIml0ZW1cIiwgZmVlZFJvb3QuY2hpbGRyZW4pLm1hcChmdW5jdGlvbihcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgdG1wO1xuXG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0uY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcImlkXCIsIFwiZ3VpZFwiLCBpdGVtKTtcbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcInRpdGxlXCIsIFwidGl0bGVcIiwgaXRlbSk7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJsaW5rXCIsIFwibGlua1wiLCBpdGVtKTtcbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcImRlc2NyaXB0aW9uXCIsIFwiZGVzY3JpcHRpb25cIiwgaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKCh0bXAgPSBmZXRjaChcInB1YkRhdGVcIiwgaXRlbSkpKVxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wdWJEYXRlID0gbmV3IERhdGUodG1wKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRvbSA9IGZlZWQ7XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUuX2hhbmRsZUNhbGxiYWNrLmNhbGwoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGZlZWRSb290ID8gbnVsbCA6IEVycm9yKFwiY291bGRuJ3QgZmluZCByb290IG9mIGZlZWRcIilcbiAgICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGZWVkSGFuZGxlcjtcbiIsInZhciBUb2tlbml6ZXIgPSByZXF1aXJlKFwiLi9Ub2tlbml6ZXIuanNcIik7XG5cbi8qXG5cdE9wdGlvbnM6XG5cblx0eG1sTW9kZTogRGlzYWJsZXMgdGhlIHNwZWNpYWwgYmVoYXZpb3IgZm9yIHNjcmlwdC9zdHlsZSB0YWdzIChmYWxzZSBieSBkZWZhdWx0KVxuXHRsb3dlckNhc2VBdHRyaWJ1dGVOYW1lczogY2FsbCAudG9Mb3dlckNhc2UgZm9yIGVhY2ggYXR0cmlidXRlIG5hbWUgKHRydWUgaWYgeG1sTW9kZSBpcyBgZmFsc2VgKVxuXHRsb3dlckNhc2VUYWdzOiBjYWxsIC50b0xvd2VyQ2FzZSBmb3IgZWFjaCB0YWcgbmFtZSAodHJ1ZSBpZiB4bWxNb2RlIGlzIGBmYWxzZWApXG4qL1xuXG4vKlxuXHRDYWxsYmFja3M6XG5cblx0b25jZGF0YWVuZCxcblx0b25jZGF0YXN0YXJ0LFxuXHRvbmNsb3NldGFnLFxuXHRvbmNvbW1lbnQsXG5cdG9uY29tbWVudGVuZCxcblx0b25lcnJvcixcblx0b25vcGVudGFnLFxuXHRvbnByb2Nlc3NpbmdpbnN0cnVjdGlvbixcblx0b25yZXNldCxcblx0b250ZXh0XG4qL1xuXG52YXIgZm9ybVRhZ3MgPSB7XG4gICAgaW5wdXQ6IHRydWUsXG4gICAgb3B0aW9uOiB0cnVlLFxuICAgIG9wdGdyb3VwOiB0cnVlLFxuICAgIHNlbGVjdDogdHJ1ZSxcbiAgICBidXR0b246IHRydWUsXG4gICAgZGF0YWxpc3Q6IHRydWUsXG4gICAgdGV4dGFyZWE6IHRydWVcbn07XG5cbnZhciBvcGVuSW1wbGllc0Nsb3NlID0ge1xuICAgIHRyOiB7IHRyOiB0cnVlLCB0aDogdHJ1ZSwgdGQ6IHRydWUgfSxcbiAgICB0aDogeyB0aDogdHJ1ZSB9LFxuICAgIHRkOiB7IHRoZWFkOiB0cnVlLCB0aDogdHJ1ZSwgdGQ6IHRydWUgfSxcbiAgICBib2R5OiB7IGhlYWQ6IHRydWUsIGxpbms6IHRydWUsIHNjcmlwdDogdHJ1ZSB9LFxuICAgIGxpOiB7IGxpOiB0cnVlIH0sXG4gICAgcDogeyBwOiB0cnVlIH0sXG4gICAgaDE6IHsgcDogdHJ1ZSB9LFxuICAgIGgyOiB7IHA6IHRydWUgfSxcbiAgICBoMzogeyBwOiB0cnVlIH0sXG4gICAgaDQ6IHsgcDogdHJ1ZSB9LFxuICAgIGg1OiB7IHA6IHRydWUgfSxcbiAgICBoNjogeyBwOiB0cnVlIH0sXG4gICAgc2VsZWN0OiBmb3JtVGFncyxcbiAgICBpbnB1dDogZm9ybVRhZ3MsXG4gICAgb3V0cHV0OiBmb3JtVGFncyxcbiAgICBidXR0b246IGZvcm1UYWdzLFxuICAgIGRhdGFsaXN0OiBmb3JtVGFncyxcbiAgICB0ZXh0YXJlYTogZm9ybVRhZ3MsXG4gICAgb3B0aW9uOiB7IG9wdGlvbjogdHJ1ZSB9LFxuICAgIG9wdGdyb3VwOiB7IG9wdGdyb3VwOiB0cnVlIH1cbn07XG5cbnZhciB2b2lkRWxlbWVudHMgPSB7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGFyZWE6IHRydWUsXG4gICAgYmFzZTogdHJ1ZSxcbiAgICBiYXNlZm9udDogdHJ1ZSxcbiAgICBicjogdHJ1ZSxcbiAgICBjb2w6IHRydWUsXG4gICAgY29tbWFuZDogdHJ1ZSxcbiAgICBlbWJlZDogdHJ1ZSxcbiAgICBmcmFtZTogdHJ1ZSxcbiAgICBocjogdHJ1ZSxcbiAgICBpbWc6IHRydWUsXG4gICAgaW5wdXQ6IHRydWUsXG4gICAgaXNpbmRleDogdHJ1ZSxcbiAgICBrZXlnZW46IHRydWUsXG4gICAgbGluazogdHJ1ZSxcbiAgICBtZXRhOiB0cnVlLFxuICAgIHBhcmFtOiB0cnVlLFxuICAgIHNvdXJjZTogdHJ1ZSxcbiAgICB0cmFjazogdHJ1ZSxcbiAgICB3YnI6IHRydWVcbn07XG5cbnZhciBmb3JlaWduQ29udGV4dEVsZW1lbnRzID0ge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBtYXRoOiB0cnVlLFxuICAgIHN2ZzogdHJ1ZVxufTtcbnZhciBodG1sSW50ZWdyYXRpb25FbGVtZW50cyA9IHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgbWk6IHRydWUsXG4gICAgbW86IHRydWUsXG4gICAgbW46IHRydWUsXG4gICAgbXM6IHRydWUsXG4gICAgbXRleHQ6IHRydWUsXG4gICAgXCJhbm5vdGF0aW9uLXhtbFwiOiB0cnVlLFxuICAgIGZvcmVpZ25PYmplY3Q6IHRydWUsXG4gICAgZGVzYzogdHJ1ZSxcbiAgICB0aXRsZTogdHJ1ZVxufTtcblxudmFyIHJlX25hbWVFbmQgPSAvXFxzfFxcLy87XG5cbmZ1bmN0aW9uIFBhcnNlcihjYnMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLl9jYnMgPSBjYnMgfHwge307XG5cbiAgICB0aGlzLl90YWduYW1lID0gXCJcIjtcbiAgICB0aGlzLl9hdHRyaWJuYW1lID0gXCJcIjtcbiAgICB0aGlzLl9hdHRyaWJ2YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5fYXR0cmlicyA9IG51bGw7XG4gICAgdGhpcy5fc3RhY2sgPSBbXTtcbiAgICB0aGlzLl9mb3JlaWduQ29udGV4dCA9IFtdO1xuXG4gICAgdGhpcy5zdGFydEluZGV4ID0gMDtcbiAgICB0aGlzLmVuZEluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzID1cbiAgICAgICAgXCJsb3dlckNhc2VUYWdzXCIgaW4gdGhpcy5fb3B0aW9uc1xuICAgICAgICAgICAgPyAhIXRoaXMuX29wdGlvbnMubG93ZXJDYXNlVGFnc1xuICAgICAgICAgICAgOiAhdGhpcy5fb3B0aW9ucy54bWxNb2RlO1xuICAgIHRoaXMuX2xvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzID1cbiAgICAgICAgXCJsb3dlckNhc2VBdHRyaWJ1dGVOYW1lc1wiIGluIHRoaXMuX29wdGlvbnNcbiAgICAgICAgICAgID8gISF0aGlzLl9vcHRpb25zLmxvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzXG4gICAgICAgICAgICA6ICF0aGlzLl9vcHRpb25zLnhtbE1vZGU7XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5Ub2tlbml6ZXIpIHtcbiAgICAgICAgVG9rZW5pemVyID0gdGhpcy5fb3B0aW9ucy5Ub2tlbml6ZXI7XG4gICAgfVxuICAgIHRoaXMuX3Rva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodGhpcy5fb3B0aW9ucywgdGhpcyk7XG5cbiAgICBpZiAodGhpcy5fY2JzLm9ucGFyc2VyaW5pdCkgdGhpcy5fY2JzLm9ucGFyc2VyaW5pdCh0aGlzKTtcbn1cblxucmVxdWlyZShcImluaGVyaXRzXCIpKFBhcnNlciwgcmVxdWlyZShcImV2ZW50c1wiKS5FdmVudEVtaXR0ZXIpO1xuXG5QYXJzZXIucHJvdG90eXBlLl91cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uKGluaXRpYWxPZmZzZXQpIHtcbiAgICBpZiAodGhpcy5lbmRJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5fdG9rZW5pemVyLl9zZWN0aW9uU3RhcnQgPD0gaW5pdGlhbE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IHRoaXMuX3Rva2VuaXplci5fc2VjdGlvblN0YXJ0IC0gaW5pdGlhbE9mZnNldDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB0aGlzLnN0YXJ0SW5kZXggPSB0aGlzLmVuZEluZGV4ICsgMTtcbiAgICB0aGlzLmVuZEluZGV4ID0gdGhpcy5fdG9rZW5pemVyLmdldEFic29sdXRlSW5kZXgoKTtcbn07XG5cbi8vVG9rZW5pemVyIGV2ZW50IGhhbmRsZXJzXG5QYXJzZXIucHJvdG90eXBlLm9udGV4dCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB0aGlzLl91cGRhdGVQb3NpdGlvbigxKTtcbiAgICB0aGlzLmVuZEluZGV4LS07XG5cbiAgICBpZiAodGhpcy5fY2JzLm9udGV4dCkgdGhpcy5fY2JzLm9udGV4dChkYXRhKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub25vcGVudGFnbmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAodGhpcy5fbG93ZXJDYXNlVGFnTmFtZXMpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLl90YWduYW1lID0gbmFtZTtcblxuICAgIGlmICghdGhpcy5fb3B0aW9ucy54bWxNb2RlICYmIG5hbWUgaW4gb3BlbkltcGxpZXNDbG9zZSkge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgdmFyIGVsO1xuICAgICAgICAgICAgKGVsID0gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoIC0gMV0pIGluXG4gICAgICAgICAgICBvcGVuSW1wbGllc0Nsb3NlW25hbWVdO1xuICAgICAgICAgICAgdGhpcy5vbmNsb3NldGFnKGVsKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcHRpb25zLnhtbE1vZGUgfHwgIShuYW1lIGluIHZvaWRFbGVtZW50cykpIHtcbiAgICAgICAgdGhpcy5fc3RhY2sucHVzaChuYW1lKTtcbiAgICAgICAgaWYgKG5hbWUgaW4gZm9yZWlnbkNvbnRleHRFbGVtZW50cykgdGhpcy5fZm9yZWlnbkNvbnRleHQucHVzaCh0cnVlKTtcbiAgICAgICAgZWxzZSBpZiAobmFtZSBpbiBodG1sSW50ZWdyYXRpb25FbGVtZW50cylcbiAgICAgICAgICAgIHRoaXMuX2ZvcmVpZ25Db250ZXh0LnB1c2goZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jYnMub25vcGVudGFnbmFtZSkgdGhpcy5fY2JzLm9ub3BlbnRhZ25hbWUobmFtZSk7XG4gICAgaWYgKHRoaXMuX2Nicy5vbm9wZW50YWcpIHRoaXMuX2F0dHJpYnMgPSB7fTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub25vcGVudGFnZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG5cbiAgICBpZiAodGhpcy5fYXR0cmlicykge1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9ub3BlbnRhZylcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbm9wZW50YWcodGhpcy5fdGFnbmFtZSwgdGhpcy5fYXR0cmlicyk7XG4gICAgICAgIHRoaXMuX2F0dHJpYnMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgIXRoaXMuX29wdGlvbnMueG1sTW9kZSAmJlxuICAgICAgICB0aGlzLl9jYnMub25jbG9zZXRhZyAmJlxuICAgICAgICB0aGlzLl90YWduYW1lIGluIHZvaWRFbGVtZW50c1xuICAgICkge1xuICAgICAgICB0aGlzLl9jYnMub25jbG9zZXRhZyh0aGlzLl90YWduYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLl90YWduYW1lID0gXCJcIjtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub25jbG9zZXRhZyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB0aGlzLl91cGRhdGVQb3NpdGlvbigxKTtcblxuICAgIGlmICh0aGlzLl9sb3dlckNhc2VUYWdOYW1lcykge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBcbiAgICBpZiAobmFtZSBpbiBmb3JlaWduQ29udGV4dEVsZW1lbnRzIHx8IG5hbWUgaW4gaHRtbEludGVncmF0aW9uRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5fZm9yZWlnbkNvbnRleHQucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgICB0aGlzLl9zdGFjay5sZW5ndGggJiZcbiAgICAgICAgKCEobmFtZSBpbiB2b2lkRWxlbWVudHMpIHx8IHRoaXMuX29wdGlvbnMueG1sTW9kZSlcbiAgICApIHtcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmxhc3RJbmRleE9mKG5hbWUpO1xuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNsb3NldGFnKSB7XG4gICAgICAgICAgICAgICAgcG9zID0gdGhpcy5fc3RhY2subGVuZ3RoIC0gcG9zO1xuICAgICAgICAgICAgICAgIHdoaWxlIChwb3MtLSkgdGhpcy5fY2JzLm9uY2xvc2V0YWcodGhpcy5fc3RhY2sucG9wKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMuX3N0YWNrLmxlbmd0aCA9IHBvcztcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInBcIiAmJiAhdGhpcy5fb3B0aW9ucy54bWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLm9ub3BlbnRhZ25hbWUobmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9jbG9zZUN1cnJlbnRUYWcoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX29wdGlvbnMueG1sTW9kZSAmJiAobmFtZSA9PT0gXCJiclwiIHx8IG5hbWUgPT09IFwicFwiKSkge1xuICAgICAgICB0aGlzLm9ub3BlbnRhZ25hbWUobmFtZSk7XG4gICAgICAgIHRoaXMuX2Nsb3NlQ3VycmVudFRhZygpO1xuICAgIH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUub25zZWxmY2xvc2luZ3RhZyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChcbiAgICAgICAgdGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8XG4gICAgICAgIHRoaXMuX29wdGlvbnMucmVjb2duaXplU2VsZkNsb3NpbmcgfHxcbiAgICAgICAgdGhpcy5fZm9yZWlnbkNvbnRleHRbdGhpcy5fZm9yZWlnbkNvbnRleHQubGVuZ3RoIC0gMV1cbiAgICApIHtcbiAgICAgICAgdGhpcy5fY2xvc2VDdXJyZW50VGFnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbm9wZW50YWdlbmQoKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLl9jbG9zZUN1cnJlbnRUYWcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmFtZSA9IHRoaXMuX3RhZ25hbWU7XG5cbiAgICB0aGlzLm9ub3BlbnRhZ2VuZCgpO1xuXG4gICAgLy9zZWxmLWNsb3NpbmcgdGFncyB3aWxsIGJlIG9uIHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gICAgLy8oY2hlYXBlciBjaGVjayB0aGFuIGluIG9uY2xvc2V0YWcpXG4gICAgaWYgKHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aCAtIDFdID09PSBuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25jbG9zZXRhZykge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2xvc2V0YWcobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhY2sucG9wKCk7XG4gICAgICAgIFxuICAgIH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUub25hdHRyaWJuYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGlmICh0aGlzLl9sb3dlckNhc2VBdHRyaWJ1dGVOYW1lcykge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICB0aGlzLl9hdHRyaWJuYW1lID0gbmFtZTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub25hdHRyaWJkYXRhID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLl9hdHRyaWJ2YWx1ZSArPSB2YWx1ZTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub25hdHRyaWJlbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2JzLm9uYXR0cmlidXRlKVxuICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJ1dGUodGhpcy5fYXR0cmlibmFtZSwgdGhpcy5fYXR0cmlidmFsdWUpO1xuICAgIGlmIChcbiAgICAgICAgdGhpcy5fYXR0cmlicyAmJlxuICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX2F0dHJpYnMsIHRoaXMuX2F0dHJpYm5hbWUpXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2F0dHJpYnNbdGhpcy5fYXR0cmlibmFtZV0gPSB0aGlzLl9hdHRyaWJ2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fYXR0cmlibmFtZSA9IFwiXCI7XG4gICAgdGhpcy5fYXR0cmlidmFsdWUgPSBcIlwiO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5fZ2V0SW5zdHJ1Y3Rpb25OYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgaWR4ID0gdmFsdWUuc2VhcmNoKHJlX25hbWVFbmQpLFxuICAgICAgICBuYW1lID0gaWR4IDwgMCA/IHZhbHVlIDogdmFsdWUuc3Vic3RyKDAsIGlkeCk7XG5cbiAgICBpZiAodGhpcy5fbG93ZXJDYXNlVGFnTmFtZXMpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub25kZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbikge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuX2dldEluc3RydWN0aW9uTmFtZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbihcIiFcIiArIG5hbWUsIFwiIVwiICsgdmFsdWUpO1xuICAgIH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLl9nZXRJbnN0cnVjdGlvbk5hbWUodmFsdWUpO1xuICAgICAgICB0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24oXCI/XCIgKyBuYW1lLCBcIj9cIiArIHZhbHVlKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uY29tbWVudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oNCk7XG5cbiAgICBpZiAodGhpcy5fY2JzLm9uY29tbWVudCkgdGhpcy5fY2JzLm9uY29tbWVudCh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Nicy5vbmNvbW1lbnRlbmQpIHRoaXMuX2Nicy5vbmNvbW1lbnRlbmQoKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub25jZGF0YSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8IHRoaXMuX29wdGlvbnMucmVjb2duaXplQ0RBVEEpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNkYXRhc3RhcnQpIHRoaXMuX2Nicy5vbmNkYXRhc3RhcnQoKTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnRleHQpIHRoaXMuX2Nicy5vbnRleHQodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9uY2RhdGFlbmQpIHRoaXMuX2Nicy5vbmNkYXRhZW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbmNvbW1lbnQoXCJbQ0RBVEFbXCIgKyB2YWx1ZSArIFwiXV1cIik7XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKHRoaXMuX2Nicy5vbmVycm9yKSB0aGlzLl9jYnMub25lcnJvcihlcnIpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYnMub25jbG9zZXRhZykge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLl9zdGFjay5sZW5ndGg7XG4gICAgICAgICAgICBpID4gMDtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNsb3NldGFnKHRoaXMuX3N0YWNrWy0taV0pXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jYnMub25lbmQpIHRoaXMuX2Nicy5vbmVuZCgpO1xufTtcblxuLy9SZXNldHMgdGhlIHBhcnNlciB0byBhIGJsYW5rIHN0YXRlLCByZWFkeSB0byBwYXJzZSBhIG5ldyBIVE1MIGRvY3VtZW50XG5QYXJzZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2Nicy5vbnJlc2V0KSB0aGlzLl9jYnMub25yZXNldCgpO1xuICAgIHRoaXMuX3Rva2VuaXplci5yZXNldCgpO1xuXG4gICAgdGhpcy5fdGFnbmFtZSA9IFwiXCI7XG4gICAgdGhpcy5fYXR0cmlibmFtZSA9IFwiXCI7XG4gICAgdGhpcy5fYXR0cmlicyA9IG51bGw7XG4gICAgdGhpcy5fc3RhY2sgPSBbXTtcblxuICAgIGlmICh0aGlzLl9jYnMub25wYXJzZXJpbml0KSB0aGlzLl9jYnMub25wYXJzZXJpbml0KHRoaXMpO1xufTtcblxuLy9QYXJzZXMgYSBjb21wbGV0ZSBIVE1MIGRvY3VtZW50IGFuZCBwdXNoZXMgaXQgdG8gdGhlIGhhbmRsZXJcblBhcnNlci5wcm90b3R5cGUucGFyc2VDb21wbGV0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5lbmQoZGF0YSk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24oY2h1bmspIHtcbiAgICB0aGlzLl90b2tlbml6ZXIud3JpdGUoY2h1bmspO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihjaHVuaykge1xuICAgIHRoaXMuX3Rva2VuaXplci5lbmQoY2h1bmspO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Rva2VuaXplci5wYXVzZSgpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90b2tlbml6ZXIucmVzdW1lKCk7XG59O1xuXG4vL2FsaWFzIGZvciBiYWNrd2FyZHMgY29tcGF0XG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQ2h1bmsgPSBQYXJzZXIucHJvdG90eXBlLndyaXRlO1xuUGFyc2VyLnByb3RvdHlwZS5kb25lID0gUGFyc2VyLnByb3RvdHlwZS5lbmQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBQcm94eUhhbmRsZXI7XG5cbmZ1bmN0aW9uIFByb3h5SGFuZGxlcihjYnMpIHtcbiAgICB0aGlzLl9jYnMgPSBjYnMgfHwge307XG59XG5cbnZhciBFVkVOVFMgPSByZXF1aXJlKFwiLi9cIikuRVZFTlRTO1xuT2JqZWN0LmtleXMoRVZFTlRTKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAoRVZFTlRTW25hbWVdID09PSAwKSB7XG4gICAgICAgIG5hbWUgPSBcIm9uXCIgKyBuYW1lO1xuICAgICAgICBQcm94eUhhbmRsZXIucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzW25hbWVdKSB0aGlzLl9jYnNbbmFtZV0oKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKEVWRU5UU1tuYW1lXSA9PT0gMSkge1xuICAgICAgICBuYW1lID0gXCJvblwiICsgbmFtZTtcbiAgICAgICAgUHJveHlIYW5kbGVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnNbbmFtZV0pIHRoaXMuX2Nic1tuYW1lXShhKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKEVWRU5UU1tuYW1lXSA9PT0gMikge1xuICAgICAgICBuYW1lID0gXCJvblwiICsgbmFtZTtcbiAgICAgICAgUHJveHlIYW5kbGVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnNbbmFtZV0pIHRoaXMuX2Nic1tuYW1lXShhLCBiKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcIndyb25nIG51bWJlciBvZiBhcmd1bWVudHNcIik7XG4gICAgfVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFN0cmVhbTtcblxudmFyIFBhcnNlciA9IHJlcXVpcmUoXCIuL1dyaXRhYmxlU3RyZWFtLmpzXCIpO1xuXG5mdW5jdGlvbiBTdHJlYW0ob3B0aW9ucykge1xuICAgIFBhcnNlci5jYWxsKHRoaXMsIG5ldyBDYnModGhpcyksIG9wdGlvbnMpO1xufVxuXG5yZXF1aXJlKFwiaW5oZXJpdHNcIikoU3RyZWFtLCBQYXJzZXIpO1xuXG5TdHJlYW0ucHJvdG90eXBlLnJlYWRhYmxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gQ2JzKHNjb3BlKSB7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xufVxuXG52YXIgRVZFTlRTID0gcmVxdWlyZShcIi4uL1wiKS5FVkVOVFM7XG5cbk9iamVjdC5rZXlzKEVWRU5UUykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKEVWRU5UU1tuYW1lXSA9PT0gMCkge1xuICAgICAgICBDYnMucHJvdG90eXBlW1wib25cIiArIG5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmVtaXQobmFtZSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChFVkVOVFNbbmFtZV0gPT09IDEpIHtcbiAgICAgICAgQ2JzLnByb3RvdHlwZVtcIm9uXCIgKyBuYW1lXSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuZW1pdChuYW1lLCBhKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKEVWRU5UU1tuYW1lXSA9PT0gMikge1xuICAgICAgICBDYnMucHJvdG90eXBlW1wib25cIiArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5lbWl0KG5hbWUsIGEsIGIpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKFwid3JvbmcgbnVtYmVyIG9mIGFyZ3VtZW50cyFcIik7XG4gICAgfVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFRva2VuaXplcjtcblxudmFyIGRlY29kZUNvZGVQb2ludCA9IHJlcXVpcmUoXCJlbnRpdGllcy9saWIvZGVjb2RlX2NvZGVwb2ludC5qc1wiKTtcbnZhciBlbnRpdHlNYXAgPSByZXF1aXJlKFwiZW50aXRpZXMvbWFwcy9lbnRpdGllcy5qc29uXCIpO1xudmFyIGxlZ2FjeU1hcCA9IHJlcXVpcmUoXCJlbnRpdGllcy9tYXBzL2xlZ2FjeS5qc29uXCIpO1xudmFyIHhtbE1hcCA9IHJlcXVpcmUoXCJlbnRpdGllcy9tYXBzL3htbC5qc29uXCIpO1xuXG52YXIgaSA9IDA7XG5cbnZhciBURVhUID0gaSsrO1xudmFyIEJFRk9SRV9UQUdfTkFNRSA9IGkrKzsgLy9hZnRlciA8XG52YXIgSU5fVEFHX05BTUUgPSBpKys7XG52YXIgSU5fU0VMRl9DTE9TSU5HX1RBRyA9IGkrKztcbnZhciBCRUZPUkVfQ0xPU0lOR19UQUdfTkFNRSA9IGkrKztcbnZhciBJTl9DTE9TSU5HX1RBR19OQU1FID0gaSsrO1xudmFyIEFGVEVSX0NMT1NJTkdfVEFHX05BTUUgPSBpKys7XG5cbi8vYXR0cmlidXRlc1xudmFyIEJFRk9SRV9BVFRSSUJVVEVfTkFNRSA9IGkrKztcbnZhciBJTl9BVFRSSUJVVEVfTkFNRSA9IGkrKztcbnZhciBBRlRFUl9BVFRSSUJVVEVfTkFNRSA9IGkrKztcbnZhciBCRUZPUkVfQVRUUklCVVRFX1ZBTFVFID0gaSsrO1xudmFyIElOX0FUVFJJQlVURV9WQUxVRV9EUSA9IGkrKzsgLy8gXCJcbnZhciBJTl9BVFRSSUJVVEVfVkFMVUVfU1EgPSBpKys7IC8vICdcbnZhciBJTl9BVFRSSUJVVEVfVkFMVUVfTlEgPSBpKys7XG5cbi8vZGVjbGFyYXRpb25zXG52YXIgQkVGT1JFX0RFQ0xBUkFUSU9OID0gaSsrOyAvLyAhXG52YXIgSU5fREVDTEFSQVRJT04gPSBpKys7XG5cbi8vcHJvY2Vzc2luZyBpbnN0cnVjdGlvbnNcbnZhciBJTl9QUk9DRVNTSU5HX0lOU1RSVUNUSU9OID0gaSsrOyAvLyA/XG5cbi8vY29tbWVudHNcbnZhciBCRUZPUkVfQ09NTUVOVCA9IGkrKztcbnZhciBJTl9DT01NRU5UID0gaSsrO1xudmFyIEFGVEVSX0NPTU1FTlRfMSA9IGkrKztcbnZhciBBRlRFUl9DT01NRU5UXzIgPSBpKys7XG5cbi8vY2RhdGFcbnZhciBCRUZPUkVfQ0RBVEFfMSA9IGkrKzsgLy8gW1xudmFyIEJFRk9SRV9DREFUQV8yID0gaSsrOyAvLyBDXG52YXIgQkVGT1JFX0NEQVRBXzMgPSBpKys7IC8vIERcbnZhciBCRUZPUkVfQ0RBVEFfNCA9IGkrKzsgLy8gQVxudmFyIEJFRk9SRV9DREFUQV81ID0gaSsrOyAvLyBUXG52YXIgQkVGT1JFX0NEQVRBXzYgPSBpKys7IC8vIEFcbnZhciBJTl9DREFUQSA9IGkrKzsgLy8gW1xudmFyIEFGVEVSX0NEQVRBXzEgPSBpKys7IC8vIF1cbnZhciBBRlRFUl9DREFUQV8yID0gaSsrOyAvLyBdXG5cbi8vc3BlY2lhbCB0YWdzXG52YXIgQkVGT1JFX1NQRUNJQUwgPSBpKys7IC8vU1xudmFyIEJFRk9SRV9TUEVDSUFMX0VORCA9IGkrKzsgLy9TXG5cbnZhciBCRUZPUkVfU0NSSVBUXzEgPSBpKys7IC8vQ1xudmFyIEJFRk9SRV9TQ1JJUFRfMiA9IGkrKzsgLy9SXG52YXIgQkVGT1JFX1NDUklQVF8zID0gaSsrOyAvL0lcbnZhciBCRUZPUkVfU0NSSVBUXzQgPSBpKys7IC8vUFxudmFyIEJFRk9SRV9TQ1JJUFRfNSA9IGkrKzsgLy9UXG52YXIgQUZURVJfU0NSSVBUXzEgPSBpKys7IC8vQ1xudmFyIEFGVEVSX1NDUklQVF8yID0gaSsrOyAvL1JcbnZhciBBRlRFUl9TQ1JJUFRfMyA9IGkrKzsgLy9JXG52YXIgQUZURVJfU0NSSVBUXzQgPSBpKys7IC8vUFxudmFyIEFGVEVSX1NDUklQVF81ID0gaSsrOyAvL1RcblxudmFyIEJFRk9SRV9TVFlMRV8xID0gaSsrOyAvL1RcbnZhciBCRUZPUkVfU1RZTEVfMiA9IGkrKzsgLy9ZXG52YXIgQkVGT1JFX1NUWUxFXzMgPSBpKys7IC8vTFxudmFyIEJFRk9SRV9TVFlMRV80ID0gaSsrOyAvL0VcbnZhciBBRlRFUl9TVFlMRV8xID0gaSsrOyAvL1RcbnZhciBBRlRFUl9TVFlMRV8yID0gaSsrOyAvL1lcbnZhciBBRlRFUl9TVFlMRV8zID0gaSsrOyAvL0xcbnZhciBBRlRFUl9TVFlMRV80ID0gaSsrOyAvL0VcblxudmFyIEJFRk9SRV9FTlRJVFkgPSBpKys7IC8vJlxudmFyIEJFRk9SRV9OVU1FUklDX0VOVElUWSA9IGkrKzsgLy8jXG52YXIgSU5fTkFNRURfRU5USVRZID0gaSsrO1xudmFyIElOX05VTUVSSUNfRU5USVRZID0gaSsrO1xudmFyIElOX0hFWF9FTlRJVFkgPSBpKys7IC8vWFxuXG52YXIgaiA9IDA7XG5cbnZhciBTUEVDSUFMX05PTkUgPSBqKys7XG52YXIgU1BFQ0lBTF9TQ1JJUFQgPSBqKys7XG52YXIgU1BFQ0lBTF9TVFlMRSA9IGorKztcblxuZnVuY3Rpb24gd2hpdGVzcGFjZShjKSB7XG4gICAgcmV0dXJuIGMgPT09IFwiIFwiIHx8IGMgPT09IFwiXFxuXCIgfHwgYyA9PT0gXCJcXHRcIiB8fCBjID09PSBcIlxcZlwiIHx8IGMgPT09IFwiXFxyXCI7XG59XG5cbmZ1bmN0aW9uIGlmRWxzZVN0YXRlKHVwcGVyLCBTVUNDRVNTLCBGQUlMVVJFKSB7XG4gICAgdmFyIGxvd2VyID0gdXBwZXIudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh1cHBlciA9PT0gbG93ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIGlmIChjID09PSBsb3dlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gU1VDQ0VTUztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBGQUlMVVJFO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIGlmIChjID09PSBsb3dlciB8fCBjID09PSB1cHBlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gU1VDQ0VTUztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBGQUlMVVJFO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKHVwcGVyLCBORVhUX1NUQVRFKSB7XG4gICAgdmFyIGxvd2VyID0gdXBwZXIudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgICAgIGlmIChjID09PSBsb3dlciB8fCBjID09PSB1cHBlcikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBORVhUX1NUQVRFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9UQUdfTkFNRTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIFRva2VuaXplcihvcHRpb25zLCBjYnMpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG4gICAgdGhpcy5fYnVmZmVyID0gXCJcIjtcbiAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAwO1xuICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICB0aGlzLl9idWZmZXJPZmZzZXQgPSAwOyAvL2NoYXJzIHJlbW92ZWQgZnJvbSBfYnVmZmVyXG4gICAgdGhpcy5fYmFzZVN0YXRlID0gVEVYVDtcbiAgICB0aGlzLl9zcGVjaWFsID0gU1BFQ0lBTF9OT05FO1xuICAgIHRoaXMuX2NicyA9IGNicztcbiAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9lbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3htbE1vZGUgPSAhIShvcHRpb25zICYmIG9wdGlvbnMueG1sTW9kZSk7XG4gICAgdGhpcy5fZGVjb2RlRW50aXRpZXMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuZGVjb2RlRW50aXRpZXMpO1xufVxuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZVRleHQgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPFwiKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbmRleCA+IHRoaXMuX3NlY3Rpb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX1RBR19OQU1FO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLl9kZWNvZGVFbnRpdGllcyAmJlxuICAgICAgICB0aGlzLl9zcGVjaWFsID09PSBTUEVDSUFMX05PTkUgJiZcbiAgICAgICAgYyA9PT0gXCImXCJcbiAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuX2luZGV4ID4gdGhpcy5fc2VjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gVEVYVDtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfRU5USVRZO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVRhZ05hbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiL1wiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0NMT1NJTkdfVEFHX05BTUU7XG4gICAgfSBlbHNlIGlmIChjID09PSBcIjxcIikge1xuICAgICAgICB0aGlzLl9jYnMub250ZXh0KHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gXCI+XCIgfHwgdGhpcy5fc3BlY2lhbCAhPT0gU1BFQ0lBTF9OT05FIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBURVhUO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gXCIhXCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfREVDTEFSQVRJT047XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IFwiP1wiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fUFJPQ0VTU0lOR19JTlNUUlVDVElPTjtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID1cbiAgICAgICAgICAgICF0aGlzLl94bWxNb2RlICYmIChjID09PSBcInNcIiB8fCBjID09PSBcIlNcIilcbiAgICAgICAgICAgICAgICA/IEJFRk9SRV9TUEVDSUFMXG4gICAgICAgICAgICAgICAgOiBJTl9UQUdfTkFNRTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJblRhZ05hbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25vcGVudGFnbmFtZVwiKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfQVRUUklCVVRFX05BTUU7XG4gICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDbG9zZWluZ1RhZ05hbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKHdoaXRlc3BhY2UoYykpO1xuICAgIGVsc2UgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gVEVYVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3NwZWNpYWwgIT09IFNQRUNJQUxfTk9ORSkge1xuICAgICAgICBpZiAoYyA9PT0gXCJzXCIgfHwgYyA9PT0gXCJTXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX1NQRUNJQUxfRU5EO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBURVhUO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQ0xPU0lOR19UQUdfTkFNRTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkNsb3NlaW5nVGFnTmFtZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmNsb3NldGFnXCIpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEFGVEVSX0NMT1NJTkdfVEFHX05BTUU7XG4gICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNsb3NlaW5nVGFnTmFtZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAvL3NraXAgZXZlcnl0aGluZyB1bnRpbCBcIj5cIlxuICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbm9wZW50YWdlbmQoKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBURVhUO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgfSBlbHNlIGlmIChjID09PSBcIi9cIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX1NFTEZfQ0xPU0lOR19UQUc7XG4gICAgfSBlbHNlIGlmICghd2hpdGVzcGFjZShjKSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0FUVFJJQlVURV9OQU1FO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluU2VsZkNsb3NpbmdUYWcgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbnNlbGZjbG9zaW5ndGFnKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gVEVYVDtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgIH0gZWxzZSBpZiAoIXdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfQVRUUklCVVRFX05BTUU7XG4gICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPVwiIHx8IGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmlibmFtZSh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAtMTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBBRlRFUl9BVFRSSUJVVEVfTkFNRTtcbiAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQXR0cmlidXRlTmFtZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCI9XCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfQVRUUklCVVRFX1ZBTFVFO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9OQU1FO1xuICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgIH0gZWxzZSBpZiAoIXdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQVRUUklCVVRFX05BTUU7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09ICdcIicpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9BVFRSSUJVVEVfVkFMVUVfRFE7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQVRUUklCVVRFX1ZBTFVFX1NRO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgfSBlbHNlIGlmICghd2hpdGVzcGFjZShjKSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0FUVFJJQlVURV9WQUxVRV9OUTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIHRoaXMuX2luZGV4LS07IC8vcmVjb25zdW1lIHRva2VuXG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlRG91YmxlUXVvdGVzID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSAnXCInKSB7XG4gICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9OQU1FO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZGVjb2RlRW50aXRpZXMgJiYgYyA9PT0gXCImXCIpIHtcbiAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICB0aGlzLl9iYXNlU3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfRU5USVRZO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVTaW5nbGVRdW90ZXMgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9OQU1FO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZGVjb2RlRW50aXRpZXMgJiYgYyA9PT0gXCImXCIpIHtcbiAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICB0aGlzLl9iYXNlU3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfRU5USVRZO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVOb1F1b3RlcyA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAod2hpdGVzcGFjZShjKSB8fCBjID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9BVFRSSUJVVEVfTkFNRTtcbiAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2RlY29kZUVudGl0aWVzICYmIGMgPT09IFwiJlwiKSB7XG4gICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0VOVElUWTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKGMpIHtcbiAgICB0aGlzLl9zdGF0ZSA9XG4gICAgICAgIGMgPT09IFwiW1wiXG4gICAgICAgICAgICA/IEJFRk9SRV9DREFUQV8xXG4gICAgICAgICAgICA6IGMgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgPyBCRUZPUkVfQ09NTUVOVFxuICAgICAgICAgICAgICAgIDogSU5fREVDTEFSQVRJT047XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluRGVjbGFyYXRpb24gPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbmRlY2xhcmF0aW9uKHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gVEVYVDtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbih0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUNvbW1lbnQgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiLVwiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQ09NTUVOVDtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fREVDTEFSQVRJT047XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkNvbW1lbnQgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiLVwiKSB0aGlzLl9zdGF0ZSA9IEFGVEVSX0NPTU1FTlRfMTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDb21tZW50MSA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCItXCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBBRlRFUl9DT01NRU5UXzI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9DT01NRU5UO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDb21tZW50MiA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgLy9yZW1vdmUgMiB0cmFpbGluZyBjaGFyc1xuICAgICAgICB0aGlzLl9jYnMub25jb21tZW50KFxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyLnN1YnN0cmluZyh0aGlzLl9zZWN0aW9uU3RhcnQsIHRoaXMuX2luZGV4IC0gMilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBURVhUO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgfSBlbHNlIGlmIChjICE9PSBcIi1cIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0NPTU1FTlQ7XG4gICAgfVxuICAgIC8vIGVsc2U6IHN0YXkgaW4gQUZURVJfQ09NTUVOVF8yIChgLS0tPmApXG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUNkYXRhMSA9IGlmRWxzZVN0YXRlKFxuICAgIFwiQ1wiLFxuICAgIEJFRk9SRV9DREFUQV8yLFxuICAgIElOX0RFQ0xBUkFUSU9OXG4pO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDZGF0YTIgPSBpZkVsc2VTdGF0ZShcbiAgICBcIkRcIixcbiAgICBCRUZPUkVfQ0RBVEFfMyxcbiAgICBJTl9ERUNMQVJBVElPTlxuKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2RhdGEzID0gaWZFbHNlU3RhdGUoXG4gICAgXCJBXCIsXG4gICAgQkVGT1JFX0NEQVRBXzQsXG4gICAgSU5fREVDTEFSQVRJT05cbik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUNkYXRhNCA9IGlmRWxzZVN0YXRlKFxuICAgIFwiVFwiLFxuICAgIEJFRk9SRV9DREFUQV81LFxuICAgIElOX0RFQ0xBUkFUSU9OXG4pO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDZGF0YTUgPSBpZkVsc2VTdGF0ZShcbiAgICBcIkFcIixcbiAgICBCRUZPUkVfQ0RBVEFfNixcbiAgICBJTl9ERUNMQVJBVElPTlxuKTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDZGF0YTYgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiW1wiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQ0RBVEE7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0RFQ0xBUkFUSU9OO1xuICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5DZGF0YSA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCJdXCIpIHRoaXMuX3N0YXRlID0gQUZURVJfQ0RBVEFfMTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDZGF0YTEgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiXVwiKSB0aGlzLl9zdGF0ZSA9IEFGVEVSX0NEQVRBXzI7XG4gICAgZWxzZSB0aGlzLl9zdGF0ZSA9IElOX0NEQVRBO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNkYXRhMiA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgLy9yZW1vdmUgMiB0cmFpbGluZyBjaGFyc1xuICAgICAgICB0aGlzLl9jYnMub25jZGF0YShcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCAtIDIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gVEVYVDtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgIH0gZWxzZSBpZiAoYyAhPT0gXCJdXCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9DREFUQTtcbiAgICB9XG4gICAgLy9lbHNlOiBzdGF5IGluIEFGVEVSX0NEQVRBXzIgKGBdXV0+YClcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU3BlY2lhbCA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCJjXCIgfHwgYyA9PT0gXCJDXCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfU0NSSVBUXzE7XG4gICAgfSBlbHNlIGlmIChjID09PSBcInRcIiB8fCBjID09PSBcIlRcIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9TVFlMRV8xO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fVEFHX05BTUU7XG4gICAgICAgIHRoaXMuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNwZWNpYWxFbmQgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKHRoaXMuX3NwZWNpYWwgPT09IFNQRUNJQUxfU0NSSVBUICYmIChjID09PSBcImNcIiB8fCBjID09PSBcIkNcIikpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBBRlRFUl9TQ1JJUFRfMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3NwZWNpYWwgPT09IFNQRUNJQUxfU1RZTEUgJiYgKGMgPT09IFwidFwiIHx8IGMgPT09IFwiVFwiKSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEFGVEVSX1NUWUxFXzE7XG4gICAgfSBlbHNlIHRoaXMuX3N0YXRlID0gVEVYVDtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU2NyaXB0MSA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXG4gICAgXCJSXCIsXG4gICAgQkVGT1JFX1NDUklQVF8yXG4pO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTY3JpcHQyID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcbiAgICBcIklcIixcbiAgICBCRUZPUkVfU0NSSVBUXzNcbik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNjcmlwdDMgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFxuICAgIFwiUFwiLFxuICAgIEJFRk9SRV9TQ1JJUFRfNFxuKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU2NyaXB0NCA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXG4gICAgXCJUXCIsXG4gICAgQkVGT1JFX1NDUklQVF81XG4pO1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNjcmlwdDUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fc3BlY2lhbCA9IFNQRUNJQUxfU0NSSVBUO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZSA9IElOX1RBR19OQU1FO1xuICAgIHRoaXMuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQxID0gaWZFbHNlU3RhdGUoXCJSXCIsIEFGVEVSX1NDUklQVF8yLCBURVhUKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQyID0gaWZFbHNlU3RhdGUoXCJJXCIsIEFGVEVSX1NDUklQVF8zLCBURVhUKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQzID0gaWZFbHNlU3RhdGUoXCJQXCIsIEFGVEVSX1NDUklQVF80LCBURVhUKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQ0ID0gaWZFbHNlU3RhdGUoXCJUXCIsIEFGVEVSX1NDUklQVF81LCBURVhUKTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlclNjcmlwdDUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fc3BlY2lhbCA9IFNQRUNJQUxfTk9ORTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9DTE9TSU5HX1RBR19OQU1FO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCAtIDY7XG4gICAgICAgIHRoaXMuX2luZGV4LS07IC8vcmVjb25zdW1lIHRoZSB0b2tlblxuICAgIH0gZWxzZSB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVN0eWxlMSA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXG4gICAgXCJZXCIsXG4gICAgQkVGT1JFX1NUWUxFXzJcbik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVN0eWxlMiA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXG4gICAgXCJMXCIsXG4gICAgQkVGT1JFX1NUWUxFXzNcbik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVN0eWxlMyA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXG4gICAgXCJFXCIsXG4gICAgQkVGT1JFX1NUWUxFXzRcbik7XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU3R5bGU0ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgIHRoaXMuX3NwZWNpYWwgPSBTUEVDSUFMX1NUWUxFO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZSA9IElOX1RBR19OQU1FO1xuICAgIHRoaXMuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTdHlsZTEgPSBpZkVsc2VTdGF0ZShcIllcIiwgQUZURVJfU1RZTEVfMiwgVEVYVCk7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU3R5bGUyID0gaWZFbHNlU3RhdGUoXCJMXCIsIEFGVEVSX1NUWUxFXzMsIFRFWFQpO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlclN0eWxlMyA9IGlmRWxzZVN0YXRlKFwiRVwiLCBBRlRFUl9TVFlMRV80LCBURVhUKTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlclN0eWxlNCA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICB0aGlzLl9zcGVjaWFsID0gU1BFQ0lBTF9OT05FO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0NMT1NJTkdfVEFHX05BTUU7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4IC0gNTtcbiAgICAgICAgdGhpcy5faW5kZXgtLTsgLy9yZWNvbnN1bWUgdGhlIHRva2VuXG4gICAgfSBlbHNlIHRoaXMuX3N0YXRlID0gVEVYVDtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlRW50aXR5ID0gaWZFbHNlU3RhdGUoXG4gICAgXCIjXCIsXG4gICAgQkVGT1JFX05VTUVSSUNfRU5USVRZLFxuICAgIElOX05BTUVEX0VOVElUWVxuKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlTnVtZXJpY0VudGl0eSA9IGlmRWxzZVN0YXRlKFxuICAgIFwiWFwiLFxuICAgIElOX0hFWF9FTlRJVFksXG4gICAgSU5fTlVNRVJJQ19FTlRJVFlcbik7XG5cbi8vZm9yIGVudGl0aWVzIHRlcm1pbmF0ZWQgd2l0aCBhIHNlbWljb2xvblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcGFyc2VOYW1lZEVudGl0eVN0cmljdCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vb2Zmc2V0ID0gMVxuICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgKyAxIDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgdmFyIGVudGl0eSA9IHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ICsgMSxcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCA9IHRoaXMuX3htbE1vZGUgPyB4bWxNYXAgOiBlbnRpdHlNYXA7XG5cbiAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShlbnRpdHkpKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0UGFydGlhbChtYXBbZW50aXR5XSk7XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vL3BhcnNlcyBsZWdhY3kgZW50aXRpZXMgKHdpdGhvdXQgdHJhaWxpbmcgc2VtaWNvbG9uKVxuVG9rZW5pemVyLnByb3RvdHlwZS5fcGFyc2VMZWdhY3lFbnRpdHkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9zZWN0aW9uU3RhcnQgKyAxLFxuICAgICAgICBsaW1pdCA9IHRoaXMuX2luZGV4IC0gc3RhcnQ7XG5cbiAgICBpZiAobGltaXQgPiA2KSBsaW1pdCA9IDY7IC8vdGhlIG1heCBsZW5ndGggb2YgbGVnYWN5IGVudGl0aWVzIGlzIDZcblxuICAgIHdoaWxlIChsaW1pdCA+PSAyKSB7XG4gICAgICAgIC8vdGhlIG1pbiBsZW5ndGggb2YgbGVnYWN5IGVudGl0aWVzIGlzIDJcbiAgICAgICAgdmFyIGVudGl0eSA9IHRoaXMuX2J1ZmZlci5zdWJzdHIoc3RhcnQsIGxpbWl0KTtcblxuICAgICAgICBpZiAobGVnYWN5TWFwLmhhc093blByb3BlcnR5KGVudGl0eSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRQYXJ0aWFsKGxlZ2FjeU1hcFtlbnRpdHldKTtcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCArPSBsaW1pdCArIDE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW1pdC0tO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbk5hbWVkRW50aXR5ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIjtcIikge1xuICAgICAgICB0aGlzLl9wYXJzZU5hbWVkRW50aXR5U3RyaWN0KCk7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgKyAxIDwgdGhpcy5faW5kZXggJiYgIXRoaXMuX3htbE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlTGVnYWN5RW50aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGMgPCBcImFcIiB8fCBjID4gXCJ6XCIpICYmXG4gICAgICAgIChjIDwgXCJBXCIgfHwgYyA+IFwiWlwiKSAmJlxuICAgICAgICAoYyA8IFwiMFwiIHx8IGMgPiBcIjlcIilcbiAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuX3htbE1vZGUpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgKyAxID09PSB0aGlzLl9pbmRleCk7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2Jhc2VTdGF0ZSAhPT0gVEVYVCkge1xuICAgICAgICAgICAgaWYgKGMgIT09IFwiPVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VOYW1lZEVudGl0eVN0cmljdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VMZWdhY3lFbnRpdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2RlY29kZU51bWVyaWNFbnRpdHkgPSBmdW5jdGlvbihvZmZzZXQsIGJhc2UpIHtcbiAgICB2YXIgc2VjdGlvblN0YXJ0ID0gdGhpcy5fc2VjdGlvblN0YXJ0ICsgb2Zmc2V0O1xuXG4gICAgaWYgKHNlY3Rpb25TdGFydCAhPT0gdGhpcy5faW5kZXgpIHtcbiAgICAgICAgLy9wYXJzZSBlbnRpdHlcbiAgICAgICAgdmFyIGVudGl0eSA9IHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcoc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCk7XG4gICAgICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChlbnRpdHksIGJhc2UpO1xuXG4gICAgICAgIHRoaXMuX2VtaXRQYXJ0aWFsKGRlY29kZUNvZGVQb2ludChwYXJzZWQpKTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0LS07XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluTnVtZXJpY0VudGl0eSA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCI7XCIpIHtcbiAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgyLCAxMCk7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCsrO1xuICAgIH0gZWxzZSBpZiAoYyA8IFwiMFwiIHx8IGMgPiBcIjlcIikge1xuICAgICAgICBpZiAoIXRoaXMuX3htbE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMiwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluSGV4RW50aXR5ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIjtcIikge1xuICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDMsIDE2KTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0Kys7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGMgPCBcImFcIiB8fCBjID4gXCJmXCIpICYmXG4gICAgICAgIChjIDwgXCJBXCIgfHwgYyA+IFwiRlwiKSAmJlxuICAgICAgICAoYyA8IFwiMFwiIHx8IGMgPiBcIjlcIilcbiAgICApIHtcbiAgICAgICAgaWYgKCF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDMsIDE2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fY2xlYW51cCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPCAwKSB7XG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcnVubmluZykge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFRFWFQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgIT09IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh0aGlzLl9idWZmZXIuc3Vic3RyKHRoaXMuX3NlY3Rpb25TdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPT09IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAvL3RoZSBzZWN0aW9uIGp1c3Qgc3RhcnRlZFxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vcmVtb3ZlIGV2ZXJ5dGhpbmcgdW5uZWNlc3NhcnlcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IHRoaXMuX2J1ZmZlci5zdWJzdHIodGhpcy5fc2VjdGlvblN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4IC09IHRoaXMuX3NlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9zZWN0aW9uU3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAwO1xuICAgIH1cbn07XG5cbi8vVE9ETyBtYWtlIGV2ZW50cyBjb25kaXRpb25hbFxuVG9rZW5pemVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGNodW5rKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB0aGlzLl9jYnMub25lcnJvcihFcnJvcihcIi53cml0ZSgpIGFmdGVyIGRvbmUhXCIpKTtcblxuICAgIHRoaXMuX2J1ZmZlciArPSBjaHVuaztcbiAgICB0aGlzLl9wYXJzZSgpO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fcGFyc2UgPSBmdW5jdGlvbigpIHtcbiAgICB3aGlsZSAodGhpcy5faW5kZXggPCB0aGlzLl9idWZmZXIubGVuZ3RoICYmIHRoaXMuX3J1bm5pbmcpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLl9idWZmZXIuY2hhckF0KHRoaXMuX2luZGV4KTtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBURVhUKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVRleHQoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9UQUdfTkFNRSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVUYWdOYW1lKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9UQUdfTkFNRSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJblRhZ05hbWUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9DTE9TSU5HX1RBR19OQU1FKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUNsb3NlaW5nVGFnTmFtZShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fQ0xPU0lOR19UQUdfTkFNRSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkNsb3NlaW5nVGFnTmFtZShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ0xPU0lOR19UQUdfTkFNRSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNsb3NlaW5nVGFnTmFtZShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fU0VMRl9DTE9TSU5HX1RBRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJblNlbGZDbG9zaW5nVGFnKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQVRUUklCVVRFX05BTUUpIHtcblxuICAgICAgICAvKlxuXHRcdCpcdGF0dHJpYnV0ZXNcblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVBdHRyaWJ1dGVOYW1lKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9BVFRSSUJVVEVfTkFNRSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX0FUVFJJQlVURV9OQU1FKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQXR0cmlidXRlTmFtZShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0FUVFJJQlVURV9WQUxVRSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVBdHRyaWJ1dGVWYWx1ZShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fQVRUUklCVVRFX1ZBTFVFX0RRKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVEb3VibGVRdW90ZXMoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IElOX0FUVFJJQlVURV9WQUxVRV9TUSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVzKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9BVFRSSUJVVEVfVkFMVUVfTlEpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZU5vUXVvdGVzKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfREVDTEFSQVRJT04pIHtcblxuICAgICAgICAvKlxuXHRcdCpcdGRlY2xhcmF0aW9uc1xuXHRcdCovXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZURlY2xhcmF0aW9uKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9ERUNMQVJBVElPTikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkRlY2xhcmF0aW9uKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9QUk9DRVNTSU5HX0lOU1RSVUNUSU9OKSB7XG5cbiAgICAgICAgLypcblx0XHQqXHRwcm9jZXNzaW5nIGluc3RydWN0aW9uc1xuXHRcdCovXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUluUHJvY2Vzc2luZ0luc3RydWN0aW9uKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ09NTUVOVCkge1xuXG4gICAgICAgIC8qXG5cdFx0Klx0Y29tbWVudHNcblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDb21tZW50KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9DT01NRU5UKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUluQ29tbWVudChjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ09NTUVOVF8xKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQ29tbWVudDEoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX0NPTU1FTlRfMikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNvbW1lbnQyKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ0RBVEFfMSkge1xuXG4gICAgICAgIC8qXG5cdFx0Klx0Y2RhdGFcblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDZGF0YTEoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9DREFUQV8yKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUNkYXRhMihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0NEQVRBXzMpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQ2RhdGEzKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ0RBVEFfNCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDZGF0YTQoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9DREFUQV81KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUNkYXRhNShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0NEQVRBXzYpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQ2RhdGE2KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9DREFUQSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkNkYXRhKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9DREFUQV8xKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQ2RhdGExKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9DREFUQV8yKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQ2RhdGEyKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU1BFQ0lBTCkge1xuXG4gICAgICAgIC8qXG5cdFx0KiBzcGVjaWFsIHRhZ3Ncblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTcGVjaWFsKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU1BFQ0lBTF9FTkQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU3BlY2lhbEVuZChjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NDUklQVF8xKSB7XG5cbiAgICAgICAgLypcblx0XHQqIHNjcmlwdFxuXHRcdCovXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVNjcmlwdDEoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TQ1JJUFRfMikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTY3JpcHQyKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU0NSSVBUXzMpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU2NyaXB0MyhjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NDUklQVF80KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVNjcmlwdDQoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TQ1JJUFRfNSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTY3JpcHQ1KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TQ1JJUFRfMSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlclNjcmlwdDEoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NDUklQVF8yKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU2NyaXB0MihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQUZURVJfU0NSSVBUXzMpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTY3JpcHQzKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TQ1JJUFRfNCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlclNjcmlwdDQoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NDUklQVF81KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU2NyaXB0NShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NUWUxFXzEpIHtcblxuICAgICAgICAvKlxuXHRcdCogc3R5bGVcblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTdHlsZTEoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TVFlMRV8yKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVN0eWxlMihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NUWUxFXzMpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU3R5bGUzKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU1RZTEVfNCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTdHlsZTQoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NUWUxFXzEpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTdHlsZTEoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NUWUxFXzIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTdHlsZTIoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NUWUxFXzMpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTdHlsZTMoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NUWUxFXzQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTdHlsZTQoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9FTlRJVFkpIHtcblxuICAgICAgICAvKlxuXHRcdCogZW50aXRpZXNcblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVFbnRpdHkoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9OVU1FUklDX0VOVElUWSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVOdW1lcmljRW50aXR5KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9OQU1FRF9FTlRJVFkpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5OYW1lZEVudGl0eShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fTlVNRVJJQ19FTlRJVFkpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5OdW1lcmljRW50aXR5KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9IRVhfRU5USVRZKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUluSGV4RW50aXR5KGMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uZXJyb3IoRXJyb3IoXCJ1bmtub3duIF9zdGF0ZVwiKSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhbnVwKCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xufTtcblRva2VuaXplci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5faW5kZXggPCB0aGlzLl9idWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3BhcnNlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmRlZCkge1xuICAgICAgICB0aGlzLl9maW5pc2goKTtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGNodW5rKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB0aGlzLl9jYnMub25lcnJvcihFcnJvcihcIi5lbmQoKSBhZnRlciBkb25lIVwiKSk7XG4gICAgaWYgKGNodW5rKSB0aGlzLndyaXRlKGNodW5rKTtcblxuICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9ydW5uaW5nKSB0aGlzLl9maW5pc2goKTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2ZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vaWYgdGhlcmUgaXMgcmVtYWluaW5nIGRhdGEsIGVtaXQgaXQgaW4gYSByZWFzb25hYmxlIHdheVxuICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPCB0aGlzLl9pbmRleCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVUcmFpbGluZ0RhdGEoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jYnMub25lbmQoKTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2hhbmRsZVRyYWlsaW5nRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5fYnVmZmVyLnN1YnN0cih0aGlzLl9zZWN0aW9uU3RhcnQpO1xuXG4gICAgaWYgKFxuICAgICAgICB0aGlzLl9zdGF0ZSA9PT0gSU5fQ0RBVEEgfHxcbiAgICAgICAgdGhpcy5fc3RhdGUgPT09IEFGVEVSX0NEQVRBXzEgfHxcbiAgICAgICAgdGhpcy5fc3RhdGUgPT09IEFGVEVSX0NEQVRBXzJcbiAgICApIHtcbiAgICAgICAgdGhpcy5fY2JzLm9uY2RhdGEoZGF0YSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5fc3RhdGUgPT09IElOX0NPTU1FTlQgfHxcbiAgICAgICAgdGhpcy5fc3RhdGUgPT09IEFGVEVSX0NPTU1FTlRfMSB8fFxuICAgICAgICB0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ09NTUVOVF8yXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbmNvbW1lbnQoZGF0YSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fTkFNRURfRU5USVRZICYmICF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgIHRoaXMuX3BhcnNlTGVnYWN5RW50aXR5KCk7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPCB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVUcmFpbGluZ0RhdGEoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IElOX05VTUVSSUNfRU5USVRZICYmICF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMiwgMTApO1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlVHJhaWxpbmdEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9IRVhfRU5USVRZICYmICF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMywgMTYpO1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlVHJhaWxpbmdEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gSU5fVEFHX05BTUUgJiZcbiAgICAgICAgdGhpcy5fc3RhdGUgIT09IEJFRk9SRV9BVFRSSUJVVEVfTkFNRSAmJlxuICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gQkVGT1JFX0FUVFJJQlVURV9WQUxVRSAmJlxuICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gQUZURVJfQVRUUklCVVRFX05BTUUgJiZcbiAgICAgICAgdGhpcy5fc3RhdGUgIT09IElOX0FUVFJJQlVURV9OQU1FICYmXG4gICAgICAgIHRoaXMuX3N0YXRlICE9PSBJTl9BVFRSSUJVVEVfVkFMVUVfU1EgJiZcbiAgICAgICAgdGhpcy5fc3RhdGUgIT09IElOX0FUVFJJQlVURV9WQUxVRV9EUSAmJlxuICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gSU5fQVRUUklCVVRFX1ZBTFVFX05RICYmXG4gICAgICAgIHRoaXMuX3N0YXRlICE9PSBJTl9DTE9TSU5HX1RBR19OQU1FXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbnRleHQoZGF0YSk7XG4gICAgfVxuICAgIC8vZWxzZSwgaWdub3JlIHJlbWFpbmluZyBkYXRhXG4gICAgLy9UT0RPIGFkZCBhIHdheSB0byByZW1vdmUgY3VycmVudCB0YWdcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBUb2tlbml6ZXIuY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgeyB4bWxNb2RlOiB0aGlzLl94bWxNb2RlLCBkZWNvZGVFbnRpdGllczogdGhpcy5fZGVjb2RlRW50aXRpZXMgfSxcbiAgICAgICAgdGhpcy5fY2JzXG4gICAgKTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuZ2V0QWJzb2x1dGVJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9idWZmZXJPZmZzZXQgKyB0aGlzLl9pbmRleDtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2dldFNlY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyLnN1YnN0cmluZyh0aGlzLl9zZWN0aW9uU3RhcnQsIHRoaXMuX2luZGV4KTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2VtaXRUb2tlbiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB0aGlzLl9jYnNbbmFtZV0odGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAtMTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2VtaXRQYXJ0aWFsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5fYmFzZVN0YXRlICE9PSBURVhUKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmRhdGEodmFsdWUpOyAvL1RPRE8gaW1wbGVtZW50IHRoZSBuZXcgZXZlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jYnMub250ZXh0KHZhbHVlKTtcbiAgICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTdHJlYW07XG5cbnZhciBQYXJzZXIgPSByZXF1aXJlKFwiLi9QYXJzZXIuanNcIik7XG52YXIgV3JpdGFibGVTdHJlYW0gPSByZXF1aXJlKFwicmVhZGFibGUtc3RyZWFtXCIpLldyaXRhYmxlO1xudmFyIFN0cmluZ0RlY29kZXIgPSByZXF1aXJlKFwic3RyaW5nX2RlY29kZXJcIikuU3RyaW5nRGVjb2RlcjtcbnZhciBCdWZmZXIgPSByZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcjtcblxuZnVuY3Rpb24gU3RyZWFtKGNicywgb3B0aW9ucykge1xuICAgIHZhciBwYXJzZXIgPSAodGhpcy5fcGFyc2VyID0gbmV3IFBhcnNlcihjYnMsIG9wdGlvbnMpKTtcbiAgICB2YXIgZGVjb2RlciA9ICh0aGlzLl9kZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIoKSk7XG5cbiAgICBXcml0YWJsZVN0cmVhbS5jYWxsKHRoaXMsIHsgZGVjb2RlU3RyaW5nczogZmFsc2UgfSk7XG5cbiAgICB0aGlzLm9uY2UoXCJmaW5pc2hcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHBhcnNlci5lbmQoZGVjb2Rlci5lbmQoKSk7XG4gICAgfSk7XG59XG5cbnJlcXVpcmUoXCJpbmhlcml0c1wiKShTdHJlYW0sIFdyaXRhYmxlU3RyZWFtKTtcblxuU3RyZWFtLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbihjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gICAgaWYgKGNodW5rIGluc3RhbmNlb2YgQnVmZmVyKSBjaHVuayA9IHRoaXMuX2RlY29kZXIud3JpdGUoY2h1bmspO1xuICAgIHRoaXMuX3BhcnNlci53cml0ZShjaHVuayk7XG4gICAgY2IoKTtcbn07XG4iLCJ2YXIgUGFyc2VyID0gcmVxdWlyZShcIi4vUGFyc2VyLmpzXCIpO1xudmFyIERvbUhhbmRsZXIgPSByZXF1aXJlKFwiZG9taGFuZGxlclwiKTtcblxuZnVuY3Rpb24gZGVmaW5lUHJvcChuYW1lLCB2YWx1ZSkge1xuICAgIGRlbGV0ZSBtb2R1bGUuZXhwb3J0c1tuYW1lXTtcbiAgICBtb2R1bGUuZXhwb3J0c1tuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFyc2VyOiBQYXJzZXIsXG4gICAgVG9rZW5pemVyOiByZXF1aXJlKFwiLi9Ub2tlbml6ZXIuanNcIiksXG4gICAgRWxlbWVudFR5cGU6IHJlcXVpcmUoXCJkb21lbGVtZW50dHlwZVwiKSxcbiAgICBEb21IYW5kbGVyOiBEb21IYW5kbGVyLFxuICAgIGdldCBGZWVkSGFuZGxlcigpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3AoXCJGZWVkSGFuZGxlclwiLCByZXF1aXJlKFwiLi9GZWVkSGFuZGxlci5qc1wiKSk7XG4gICAgfSxcbiAgICBnZXQgU3RyZWFtKCkge1xuICAgICAgICByZXR1cm4gZGVmaW5lUHJvcChcIlN0cmVhbVwiLCByZXF1aXJlKFwiLi9TdHJlYW0uanNcIikpO1xuICAgIH0sXG4gICAgZ2V0IFdyaXRhYmxlU3RyZWFtKCkge1xuICAgICAgICByZXR1cm4gZGVmaW5lUHJvcChcIldyaXRhYmxlU3RyZWFtXCIsIHJlcXVpcmUoXCIuL1dyaXRhYmxlU3RyZWFtLmpzXCIpKTtcbiAgICB9LFxuICAgIGdldCBQcm94eUhhbmRsZXIoKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVQcm9wKFwiUHJveHlIYW5kbGVyXCIsIHJlcXVpcmUoXCIuL1Byb3h5SGFuZGxlci5qc1wiKSk7XG4gICAgfSxcbiAgICBnZXQgRG9tVXRpbHMoKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVQcm9wKFwiRG9tVXRpbHNcIiwgcmVxdWlyZShcImRvbXV0aWxzXCIpKTtcbiAgICB9LFxuICAgIGdldCBDb2xsZWN0aW5nSGFuZGxlcigpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3AoXG4gICAgICAgICAgICBcIkNvbGxlY3RpbmdIYW5kbGVyXCIsXG4gICAgICAgICAgICByZXF1aXJlKFwiLi9Db2xsZWN0aW5nSGFuZGxlci5qc1wiKVxuICAgICAgICApO1xuICAgIH0sXG4gICAgLy8gRm9yIGxlZ2FjeSBzdXBwb3J0XG4gICAgRGVmYXVsdEhhbmRsZXI6IERvbUhhbmRsZXIsXG4gICAgZ2V0IFJzc0hhbmRsZXIoKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVQcm9wKFwiUnNzSGFuZGxlclwiLCB0aGlzLkZlZWRIYW5kbGVyKTtcbiAgICB9LFxuICAgIC8vaGVscGVyIG1ldGhvZHNcbiAgICBwYXJzZURPTTogZnVuY3Rpb24oZGF0YSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgaGFuZGxlciA9IG5ldyBEb21IYW5kbGVyKG9wdGlvbnMpO1xuICAgICAgICBuZXcgUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpLmVuZChkYXRhKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIuZG9tO1xuICAgIH0sXG4gICAgcGFyc2VGZWVkOiBmdW5jdGlvbihmZWVkLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbmV3IG1vZHVsZS5leHBvcnRzLkZlZWRIYW5kbGVyKG9wdGlvbnMpO1xuICAgICAgICBuZXcgUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpLmVuZChmZWVkKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIuZG9tO1xuICAgIH0sXG4gICAgY3JlYXRlRG9tU3RyZWFtOiBmdW5jdGlvbihjYiwgb3B0aW9ucywgZWxlbWVudENiKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbmV3IERvbUhhbmRsZXIoY2IsIG9wdGlvbnMsIGVsZW1lbnRDYik7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLy8gTGlzdCBvZiBhbGwgZXZlbnRzIHRoYXQgdGhlIHBhcnNlciBlbWl0c1xuICAgIEVWRU5UUzoge1xuICAgICAgICAvKiBGb3JtYXQ6IGV2ZW50bmFtZTogbnVtYmVyIG9mIGFyZ3VtZW50cyAqL1xuICAgICAgICBhdHRyaWJ1dGU6IDIsXG4gICAgICAgIGNkYXRhc3RhcnQ6IDAsXG4gICAgICAgIGNkYXRhZW5kOiAwLFxuICAgICAgICB0ZXh0OiAxLFxuICAgICAgICBwcm9jZXNzaW5naW5zdHJ1Y3Rpb246IDIsXG4gICAgICAgIGNvbW1lbnQ6IDEsXG4gICAgICAgIGNvbW1lbnRlbmQ6IDAsXG4gICAgICAgIGNsb3NldGFnOiAxLFxuICAgICAgICBvcGVudGFnOiAyLFxuICAgICAgICBvcGVudGFnbmFtZTogMSxcbiAgICAgICAgZXJyb3I6IDEsXG4gICAgICAgIGVuZDogMFxuICAgIH1cbn07XG4iLCIvKiEgaWVlZTc1NC4gQlNELTMtQ2xhdXNlIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcblx0cmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqIEhpZ2hlc3QgcG9zaXRpdmUgc2lnbmVkIDMyLWJpdCBmbG9hdCB2YWx1ZSAqL1xuY29uc3QgbWF4SW50ID0gMjE0NzQ4MzY0NzsgLy8gYWthLiAweDdGRkZGRkZGIG9yIDJeMzEtMVxuXG4vKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5jb25zdCBiYXNlID0gMzY7XG5jb25zdCB0TWluID0gMTtcbmNvbnN0IHRNYXggPSAyNjtcbmNvbnN0IHNrZXcgPSAzODtcbmNvbnN0IGRhbXAgPSA3MDA7XG5jb25zdCBpbml0aWFsQmlhcyA9IDcyO1xuY29uc3QgaW5pdGlhbE4gPSAxMjg7IC8vIDB4ODBcbmNvbnN0IGRlbGltaXRlciA9ICctJzsgLy8gJ1xceDJEJ1xuXG4vKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuY29uc3QgcmVnZXhQdW55Y29kZSA9IC9eeG4tLS87XG5jb25zdCByZWdleE5vbkFTQ0lJID0gL1teXFwwLVxceDdFXS87IC8vIG5vbi1BU0NJSSBjaGFyc1xuY29uc3QgcmVnZXhTZXBhcmF0b3JzID0gL1tcXHgyRVxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZzsgLy8gUkZDIDM0OTAgc2VwYXJhdG9yc1xuXG4vKiogRXJyb3IgbWVzc2FnZXMgKi9cbmNvbnN0IGVycm9ycyA9IHtcblx0J292ZXJmbG93JzogJ092ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzJyxcblx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0J2ludmFsaWQtaW5wdXQnOiAnSW52YWxpZCBpbnB1dCdcbn07XG5cbi8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cbmNvbnN0IGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbjtcbmNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbmNvbnN0IHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKipcbiAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBlcnJvcih0eXBlKSB7XG5cdHRocm93IG5ldyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG59XG5cbi8qKlxuICogQSBnZW5lcmljIGBBcnJheSNtYXBgIHV0aWxpdHkgZnVuY3Rpb24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeSBhcnJheVxuICogaXRlbS5cbiAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgYXJyYXkgb2YgdmFsdWVzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblx0bGV0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0d2hpbGUgKGxlbmd0aC0tKSB7XG5cdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuICogYWRkcmVzc2VzLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcbiAqIGNoYXJhY3Rlci5cbiAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG4gKiBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWFwRG9tYWluKHN0cmluZywgZm4pIHtcblx0Y29uc3QgcGFydHMgPSBzdHJpbmcuc3BsaXQoJ0AnKTtcblx0bGV0IHJlc3VsdCA9ICcnO1xuXHRpZiAocGFydHMubGVuZ3RoID4gMSkge1xuXHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdHJlc3VsdCA9IHBhcnRzWzBdICsgJ0AnO1xuXHRcdHN0cmluZyA9IHBhcnRzWzFdO1xuXHR9XG5cdC8vIEF2b2lkIGBzcGxpdChyZWdleClgIGZvciBJRTggY29tcGF0aWJpbGl0eS4gU2VlICMxNy5cblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0Y29uc3QgbGFiZWxzID0gc3RyaW5nLnNwbGl0KCcuJyk7XG5cdGNvbnN0IGVuY29kZWQgPSBtYXAobGFiZWxzLCBmbikuam9pbignLicpO1xuXHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG4gKiBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZy4gV2hpbGUgSmF2YVNjcmlwdCB1c2VzIFVDUy0yIGludGVybmFsbHksXG4gKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG4gKiBtYXRjaGluZyBVVEYtMTYuXG4gKiBAc2VlIGBwdW55Y29kZS51Y3MyLmVuY29kZWBcbiAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcbiAqIEBuYW1lIGRlY29kZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIG5ldyBhcnJheSBvZiBjb2RlIHBvaW50cy5cbiAqL1xuZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0Y29uc3Qgb3V0cHV0ID0gW107XG5cdGxldCBjb3VudGVyID0gMDtcblx0Y29uc3QgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0Ly8gSXQncyBhIGhpZ2ggc3Vycm9nYXRlLCBhbmQgdGhlcmUgaXMgYSBuZXh0IGNoYXJhY3Rlci5cblx0XHRcdGNvbnN0IGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBMb3cgc3Vycm9nYXRlLlxuXHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSXQncyBhbiB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGVcblx0XHRcdFx0Ly8gbmV4dCBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXIuXG5cdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG4gKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuICogQG5hbWUgZW5jb2RlXG4gKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBVbmljb2RlIHN0cmluZyAoVUNTLTIpLlxuICovXG5jb25zdCB1Y3MyZW5jb2RlID0gYXJyYXkgPT4gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uYXJyYXkpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cbiAqIEBzZWUgYGRpZ2l0VG9CYXNpYygpYFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludCAoZm9yIHVzZSBpblxuICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpbiB0aGUgcmFuZ2UgYDBgIHRvIGBiYXNlIC0gMWAsIG9yIGBiYXNlYCBpZlxuICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG4gKi9cbmNvbnN0IGJhc2ljVG9EaWdpdCA9IGZ1bmN0aW9uKGNvZGVQb2ludCkge1xuXHRpZiAoY29kZVBvaW50IC0gMHgzMCA8IDB4MEEpIHtcblx0XHRyZXR1cm4gY29kZVBvaW50IC0gMHgxNjtcblx0fVxuXHRpZiAoY29kZVBvaW50IC0gMHg0MSA8IDB4MUEpIHtcblx0XHRyZXR1cm4gY29kZVBvaW50IC0gMHg0MTtcblx0fVxuXHRpZiAoY29kZVBvaW50IC0gMHg2MSA8IDB4MUEpIHtcblx0XHRyZXR1cm4gY29kZVBvaW50IC0gMHg2MTtcblx0fVxuXHRyZXR1cm4gYmFzZTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuICogQHNlZSBgYmFzaWNUb0RpZ2l0KClgXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBiYXNpYyBjb2RlIHBvaW50IHdob3NlIHZhbHVlICh3aGVuIHVzZWQgZm9yXG4gKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGlzIGBkaWdpdGAsIHdoaWNoIG5lZWRzIHRvIGJlIGluIHRoZSByYW5nZVxuICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG4gKiB1c2VkOyBlbHNlLCB0aGUgbG93ZXJjYXNlIGZvcm0gaXMgdXNlZC4gVGhlIGJlaGF2aW9yIGlzIHVuZGVmaW5lZFxuICogaWYgYGZsYWdgIGlzIG5vbi16ZXJvIGFuZCBgZGlnaXRgIGhhcyBubyB1cHBlcmNhc2UgZm9ybS5cbiAqL1xuY29uc3QgZGlnaXRUb0Jhc2ljID0gZnVuY3Rpb24oZGlnaXQsIGZsYWcpIHtcblx0Ly8gIDAuLjI1IG1hcCB0byBBU0NJSSBhLi56IG9yIEEuLlpcblx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG59O1xuXG4vKipcbiAqIEJpYXMgYWRhcHRhdGlvbiBmdW5jdGlvbiBhcyBwZXIgc2VjdGlvbiAzLjQgb2YgUkZDIDM0OTIuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgYWRhcHQgPSBmdW5jdGlvbihkZWx0YSwgbnVtUG9pbnRzLCBmaXJzdFRpbWUpIHtcblx0bGV0IGsgPSAwO1xuXHRkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuXHRkZWx0YSArPSBmbG9vcihkZWx0YSAvIG51bVBvaW50cyk7XG5cdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0ZGVsdGEgPSBmbG9vcihkZWx0YSAvIGJhc2VNaW51c1RNaW4pO1xuXHR9XG5cdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMgdG8gYSBzdHJpbmcgb2YgVW5pY29kZVxuICogc3ltYm9scy5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuICovXG5jb25zdCBkZWNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHQvLyBEb24ndCB1c2UgVUNTLTIuXG5cdGNvbnN0IG91dHB1dCA9IFtdO1xuXHRjb25zdCBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblx0bGV0IGkgPSAwO1xuXHRsZXQgbiA9IGluaXRpYWxOO1xuXHRsZXQgYmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHQvLyB0aGUgZmlyc3QgYmFzaWMgY29kZSBwb2ludHMgdG8gdGhlIG91dHB1dC5cblxuXHRsZXQgYmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRpZiAoYmFzaWMgPCAwKSB7XG5cdFx0YmFzaWMgPSAwO1xuXHR9XG5cblx0Zm9yIChsZXQgaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0aWYgKGlucHV0LmNoYXJDb2RlQXQoaikgPj0gMHg4MCkge1xuXHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdH1cblx0XHRvdXRwdXQucHVzaChpbnB1dC5jaGFyQ29kZUF0KGopKTtcblx0fVxuXG5cdC8vIE1haW4gZGVjb2RpbmcgbG9vcDogc3RhcnQganVzdCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIgaWYgYW55IGJhc2ljIGNvZGVcblx0Ly8gcG9pbnRzIHdlcmUgY29waWVkOyBzdGFydCBhdCB0aGUgYmVnaW5uaW5nIG90aGVyd2lzZS5cblxuXHRmb3IgKGxldCBpbmRleCA9IGJhc2ljID4gMCA/IGJhc2ljICsgMSA6IDA7IGluZGV4IDwgaW5wdXRMZW5ndGg7IC8qIG5vIGZpbmFsIGV4cHJlc3Npb24gKi8pIHtcblxuXHRcdC8vIGBpbmRleGAgaXMgdGhlIGluZGV4IG9mIHRoZSBuZXh0IGNoYXJhY3RlciB0byBiZSBjb25zdW1lZC5cblx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHQvLyBpZiB3ZSBpbmNyZWFzZSBgaWAgYXMgd2UgZ28sIHRoZW4gc3VidHJhY3Qgb2ZmIGl0cyBzdGFydGluZ1xuXHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0bGV0IG9sZGkgPSBpO1xuXHRcdGZvciAobGV0IHcgPSAxLCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblxuXHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdGVycm9yKCdpbnZhbGlkLWlucHV0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRpZiAoZGlnaXQgPj0gYmFzZSB8fCBkaWdpdCA+IGZsb29yKChtYXhJbnQgLSBpKSAvIHcpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRpICs9IGRpZ2l0ICogdztcblx0XHRcdGNvbnN0IHQgPSBrIDw9IGJpYXMgPyB0TWluIDogKGsgPj0gYmlhcyArIHRNYXggPyB0TWF4IDogayAtIGJpYXMpO1xuXG5cdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRpZiAodyA+IGZsb29yKG1heEludCAvIGJhc2VNaW51c1QpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cblx0XHR9XG5cblx0XHRjb25zdCBvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRiaWFzID0gYWRhcHQoaSAtIG9sZGksIG91dCwgb2xkaSA9PSAwKTtcblxuXHRcdC8vIGBpYCB3YXMgc3VwcG9zZWQgdG8gd3JhcCBhcm91bmQgZnJvbSBgb3V0YCB0byBgMGAsXG5cdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRpZiAoZmxvb3IoaSAvIG91dCkgPiBtYXhJbnQgLSBuKSB7XG5cdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHR9XG5cblx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdGkgJT0gb3V0O1xuXG5cdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dC5cblx0XHRvdXRwdXQuc3BsaWNlKGkrKywgMCwgbik7XG5cblx0fVxuXG5cdHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5vdXRwdXQpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuICogUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuICovXG5jb25zdCBlbmNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHRjb25zdCBvdXRwdXQgPSBbXTtcblxuXHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBhbiBhcnJheSBvZiBVbmljb2RlIGNvZGUgcG9pbnRzLlxuXHRpbnB1dCA9IHVjczJkZWNvZGUoaW5wdXQpO1xuXG5cdC8vIENhY2hlIHRoZSBsZW5ndGguXG5cdGxldCBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHQvLyBJbml0aWFsaXplIHRoZSBzdGF0ZS5cblx0bGV0IG4gPSBpbml0aWFsTjtcblx0bGV0IGRlbHRhID0gMDtcblx0bGV0IGJpYXMgPSBpbml0aWFsQmlhcztcblxuXHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzLlxuXHRmb3IgKGNvbnN0IGN1cnJlbnRWYWx1ZSBvZiBpbnB1dCkge1xuXHRcdGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG5cdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoY3VycmVudFZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblx0bGV0IGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGg7XG5cblx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblxuXHQvLyBGaW5pc2ggdGhlIGJhc2ljIHN0cmluZyB3aXRoIGEgZGVsaW1pdGVyIHVubGVzcyBpdCdzIGVtcHR5LlxuXHRpZiAoYmFzaWNMZW5ndGgpIHtcblx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHR9XG5cblx0Ly8gTWFpbiBlbmNvZGluZyBsb29wOlxuXHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0Ly8gQWxsIG5vbi1iYXNpYyBjb2RlIHBvaW50cyA8IG4gaGF2ZSBiZWVuIGhhbmRsZWQgYWxyZWFkeS4gRmluZCB0aGUgbmV4dFxuXHRcdC8vIGxhcmdlciBvbmU6XG5cdFx0bGV0IG0gPSBtYXhJbnQ7XG5cdFx0Zm9yIChjb25zdCBjdXJyZW50VmFsdWUgb2YgaW5wdXQpIHtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LFxuXHRcdC8vIGJ1dCBndWFyZCBhZ2FpbnN0IG92ZXJmbG93LlxuXHRcdGNvbnN0IGhhbmRsZWRDUENvdW50UGx1c09uZSA9IGhhbmRsZWRDUENvdW50ICsgMTtcblx0XHRpZiAobSAtIG4gPiBmbG9vcigobWF4SW50IC0gZGVsdGEpIC8gaGFuZGxlZENQQ291bnRQbHVzT25lKSkge1xuXHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0fVxuXG5cdFx0ZGVsdGEgKz0gKG0gLSBuKSAqIGhhbmRsZWRDUENvdW50UGx1c09uZTtcblx0XHRuID0gbTtcblxuXHRcdGZvciAoY29uc3QgY3VycmVudFZhbHVlIG9mIGlucHV0KSB7XG5cdFx0XHRpZiAoY3VycmVudFZhbHVlIDwgbiAmJiArK2RlbHRhID4gbWF4SW50KSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdC8vIFJlcHJlc2VudCBkZWx0YSBhcyBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuXHRcdFx0XHRsZXQgcSA9IGRlbHRhO1xuXHRcdFx0XHRmb3IgKGxldCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblx0XHRcdFx0XHRjb25zdCB0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRpZiAocSA8IHQpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0Y29uc3QgYmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0c3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShkaWdpdFRvQmFzaWMocSwgMCkpKTtcblx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0ZGVsdGEgPSAwO1xuXHRcdFx0XHQrK2hhbmRsZWRDUENvdW50O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCsrZGVsdGE7XG5cdFx0KytuO1xuXG5cdH1cblx0cmV0dXJuIG91dHB1dC5qb2luKCcnKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuICogdG8gVW5pY29kZS4gT25seSB0aGUgUHVueWNvZGVkIHBhcnRzIG9mIHRoZSBpbnB1dCB3aWxsIGJlIGNvbnZlcnRlZCwgaS5lLlxuICogaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgb24gYSBzdHJpbmcgdGhhdCBoYXMgYWxyZWFkeSBiZWVuXG4gKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZWQgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0b1xuICogY29udmVydCB0byBVbmljb2RlLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFVuaWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIFB1bnljb2RlXG4gKiBzdHJpbmcuXG4gKi9cbmNvbnN0IHRvVW5pY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdHJldHVybiByZWdleFB1bnljb2RlLnRlc3Qoc3RyaW5nKVxuXHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHQ6IHN0cmluZztcblx0fSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuICogUHVueWNvZGUuIE9ubHkgdGhlIG5vbi1BU0NJSSBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgd2lsbCBiZSBjb252ZXJ0ZWQsXG4gKiBpLmUuIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IHdpdGggYSBkb21haW4gdGhhdCdzIGFscmVhZHkgaW5cbiAqIEFTQ0lJLlxuICogQG1lbWJlck9mIHB1bnljb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG8gY29udmVydCwgYXMgYVxuICogVW5pY29kZSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgUHVueWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGRvbWFpbiBuYW1lIG9yXG4gKiBlbWFpbCBhZGRyZXNzLlxuICovXG5jb25zdCB0b0FTQ0lJID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlZ2V4Tm9uQVNDSUkudGVzdChzdHJpbmcpXG5cdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHQ6IHN0cmluZztcblx0fSk7XG59O1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuY29uc3QgcHVueWNvZGUgPSB7XG5cdC8qKlxuXHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAdHlwZSBTdHJpbmdcblx0ICovXG5cdCd2ZXJzaW9uJzogJzIuMS4wJyxcblx0LyoqXG5cdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdCAqIHJlcHJlc2VudGF0aW9uIChVQ1MtMikgdG8gVW5pY29kZSBjb2RlIHBvaW50cywgYW5kIGJhY2suXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHR5cGUgT2JqZWN0XG5cdCAqL1xuXHQndWNzMic6IHtcblx0XHQnZGVjb2RlJzogdWNzMmRlY29kZSxcblx0XHQnZW5jb2RlJzogdWNzMmVuY29kZVxuXHR9LFxuXHQnZGVjb2RlJzogZGVjb2RlLFxuXHQnZW5jb2RlJzogZW5jb2RlLFxuXHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdCd0b1VuaWNvZGUnOiB0b1VuaWNvZGVcbn07XG5cbmV4cG9ydCB7IHVjczJkZWNvZGUsIHVjczJlbmNvZGUsIGRlY29kZSwgZW5jb2RlLCB0b0FTQ0lJLCB0b1VuaWNvZGUgfTtcbmV4cG9ydCBkZWZhdWx0IHB1bnljb2RlO1xuIiwiLyohIHNhZmUtYnVmZmVyLiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJylcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyXG5cbi8vIGFsdGVybmF0aXZlIHRvIHVzaW5nIE9iamVjdC5rZXlzIGZvciBvbGQgYnJvd3NlcnNcbmZ1bmN0aW9uIGNvcHlQcm9wcyAoc3JjLCBkc3QpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGRzdFtrZXldID0gc3JjW2tleV1cbiAgfVxufVxuaWYgKEJ1ZmZlci5mcm9tICYmIEJ1ZmZlci5hbGxvYyAmJiBCdWZmZXIuYWxsb2NVbnNhZmUgJiYgQnVmZmVyLmFsbG9jVW5zYWZlU2xvdykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlclxufSBlbHNlIHtcbiAgLy8gQ29weSBwcm9wZXJ0aWVzIGZyb20gcmVxdWlyZSgnYnVmZmVyJylcbiAgY29weVByb3BzKGJ1ZmZlciwgZXhwb3J0cylcbiAgZXhwb3J0cy5CdWZmZXIgPSBTYWZlQnVmZmVyXG59XG5cbmZ1bmN0aW9uIFNhZmVCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cblNhZmVCdWZmZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCdWZmZXIucHJvdG90eXBlKVxuXG4vLyBDb3B5IHN0YXRpYyBtZXRob2RzIGZyb20gQnVmZmVyXG5jb3B5UHJvcHMoQnVmZmVyLCBTYWZlQnVmZmVyKVxuXG5TYWZlQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cblNhZmVCdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHZhciBidWYgPSBCdWZmZXIoc2l6ZSlcbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBidWYuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmZpbGwoZmlsbClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYnVmLmZpbGwoMClcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihzaXplKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gYnVmZmVyLlNsb3dCdWZmZXIoc2l6ZSlcbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgaXNFbmNvZGluZyA9IEJ1ZmZlci5pc0VuY29kaW5nIHx8IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBlbmNvZGluZyA9ICcnICsgZW5jb2Rpbmc7XG4gIHN3aXRjaCAoZW5jb2RpbmcgJiYgZW5jb2RpbmcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6Y2FzZSAndXRmOCc6Y2FzZSAndXRmLTgnOmNhc2UgJ2FzY2lpJzpjYXNlICdiaW5hcnknOmNhc2UgJ2Jhc2U2NCc6Y2FzZSAndWNzMic6Y2FzZSAndWNzLTInOmNhc2UgJ3V0ZjE2bGUnOmNhc2UgJ3V0Zi0xNmxlJzpjYXNlICdyYXcnOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gX25vcm1hbGl6ZUVuY29kaW5nKGVuYykge1xuICBpZiAoIWVuYykgcmV0dXJuICd1dGY4JztcbiAgdmFyIHJldHJpZWQ7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmMpIHtcbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gJ3V0ZjgnO1xuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuICd1dGYxNmxlJztcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gJ2xhdGluMSc7XG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGVuYztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChyZXRyaWVkKSByZXR1cm47IC8vIHVuZGVmaW5lZFxuICAgICAgICBlbmMgPSAoJycgKyBlbmMpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHJpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRG8gbm90IGNhY2hlIGBCdWZmZXIuaXNFbmNvZGluZ2Agd2hlbiBjaGVja2luZyBlbmNvZGluZyBuYW1lcyBhcyBzb21lXG4vLyBtb2R1bGVzIG1vbmtleS1wYXRjaCBpdCB0byBzdXBwb3J0IGFkZGl0aW9uYWwgZW5jb2RpbmdzXG5mdW5jdGlvbiBub3JtYWxpemVFbmNvZGluZyhlbmMpIHtcbiAgdmFyIG5lbmMgPSBfbm9ybWFsaXplRW5jb2RpbmcoZW5jKTtcbiAgaWYgKHR5cGVvZiBuZW5jICE9PSAnc3RyaW5nJyAmJiAoQnVmZmVyLmlzRW5jb2RpbmcgPT09IGlzRW5jb2RpbmcgfHwgIWlzRW5jb2RpbmcoZW5jKSkpIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuYyk7XG4gIHJldHVybiBuZW5jIHx8IGVuYztcbn1cblxuLy8gU3RyaW5nRGVjb2RlciBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIGVmZmljaWVudGx5IHNwbGl0dGluZyBhIHNlcmllcyBvZlxuLy8gYnVmZmVycyBpbnRvIGEgc2VyaWVzIG9mIEpTIHN0cmluZ3Mgd2l0aG91dCBicmVha2luZyBhcGFydCBtdWx0aS1ieXRlXG4vLyBjaGFyYWN0ZXJzLlxuZXhwb3J0cy5TdHJpbmdEZWNvZGVyID0gU3RyaW5nRGVjb2RlcjtcbmZ1bmN0aW9uIFN0cmluZ0RlY29kZXIoZW5jb2RpbmcpIHtcbiAgdGhpcy5lbmNvZGluZyA9IG5vcm1hbGl6ZUVuY29kaW5nKGVuY29kaW5nKTtcbiAgdmFyIG5iO1xuICBzd2l0Y2ggKHRoaXMuZW5jb2RpbmcpIHtcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIHRoaXMudGV4dCA9IHV0ZjE2VGV4dDtcbiAgICAgIHRoaXMuZW5kID0gdXRmMTZFbmQ7XG4gICAgICBuYiA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd1dGY4JzpcbiAgICAgIHRoaXMuZmlsbExhc3QgPSB1dGY4RmlsbExhc3Q7XG4gICAgICBuYiA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgdGhpcy50ZXh0ID0gYmFzZTY0VGV4dDtcbiAgICAgIHRoaXMuZW5kID0gYmFzZTY0RW5kO1xuICAgICAgbmIgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXMud3JpdGUgPSBzaW1wbGVXcml0ZTtcbiAgICAgIHRoaXMuZW5kID0gc2ltcGxlRW5kO1xuICAgICAgcmV0dXJuO1xuICB9XG4gIHRoaXMubGFzdE5lZWQgPSAwO1xuICB0aGlzLmxhc3RUb3RhbCA9IDA7XG4gIHRoaXMubGFzdENoYXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobmIpO1xufVxuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChidWYpIHtcbiAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHJldHVybiAnJztcbiAgdmFyIHI7XG4gIHZhciBpO1xuICBpZiAodGhpcy5sYXN0TmVlZCkge1xuICAgIHIgPSB0aGlzLmZpbGxMYXN0KGJ1Zik7XG4gICAgaWYgKHIgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuICAgIGkgPSB0aGlzLmxhc3ROZWVkO1xuICAgIHRoaXMubGFzdE5lZWQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGkgPSAwO1xuICB9XG4gIGlmIChpIDwgYnVmLmxlbmd0aCkgcmV0dXJuIHIgPyByICsgdGhpcy50ZXh0KGJ1ZiwgaSkgOiB0aGlzLnRleHQoYnVmLCBpKTtcbiAgcmV0dXJuIHIgfHwgJyc7XG59O1xuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5lbmQgPSB1dGY4RW5kO1xuXG4vLyBSZXR1cm5zIG9ubHkgY29tcGxldGUgY2hhcmFjdGVycyBpbiBhIEJ1ZmZlclxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUudGV4dCA9IHV0ZjhUZXh0O1xuXG4vLyBBdHRlbXB0cyB0byBjb21wbGV0ZSBhIHBhcnRpYWwgbm9uLVVURi04IGNoYXJhY3RlciB1c2luZyBieXRlcyBmcm9tIGEgQnVmZmVyXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5maWxsTGFzdCA9IGZ1bmN0aW9uIChidWYpIHtcbiAgaWYgKHRoaXMubGFzdE5lZWQgPD0gYnVmLmxlbmd0aCkge1xuICAgIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZCwgMCwgdGhpcy5sYXN0TmVlZCk7XG4gICAgcmV0dXJuIHRoaXMubGFzdENoYXIudG9TdHJpbmcodGhpcy5lbmNvZGluZywgMCwgdGhpcy5sYXN0VG90YWwpO1xuICB9XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZCwgMCwgYnVmLmxlbmd0aCk7XG4gIHRoaXMubGFzdE5lZWQgLT0gYnVmLmxlbmd0aDtcbn07XG5cbi8vIENoZWNrcyB0aGUgdHlwZSBvZiBhIFVURi04IGJ5dGUsIHdoZXRoZXIgaXQncyBBU0NJSSwgYSBsZWFkaW5nIGJ5dGUsIG9yIGFcbi8vIGNvbnRpbnVhdGlvbiBieXRlLiBJZiBhbiBpbnZhbGlkIGJ5dGUgaXMgZGV0ZWN0ZWQsIC0yIGlzIHJldHVybmVkLlxuZnVuY3Rpb24gdXRmOENoZWNrQnl0ZShieXRlKSB7XG4gIGlmIChieXRlIDw9IDB4N0YpIHJldHVybiAwO2Vsc2UgaWYgKGJ5dGUgPj4gNSA9PT0gMHgwNikgcmV0dXJuIDI7ZWxzZSBpZiAoYnl0ZSA+PiA0ID09PSAweDBFKSByZXR1cm4gMztlbHNlIGlmIChieXRlID4+IDMgPT09IDB4MUUpIHJldHVybiA0O1xuICByZXR1cm4gYnl0ZSA+PiA2ID09PSAweDAyID8gLTEgOiAtMjtcbn1cblxuLy8gQ2hlY2tzIGF0IG1vc3QgMyBieXRlcyBhdCB0aGUgZW5kIG9mIGEgQnVmZmVyIGluIG9yZGVyIHRvIGRldGVjdCBhblxuLy8gaW5jb21wbGV0ZSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3Rlci4gVGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyAoMiwgMywgb3IgNClcbi8vIG5lZWRlZCB0byBjb21wbGV0ZSB0aGUgVVRGLTggY2hhcmFjdGVyIChpZiBhcHBsaWNhYmxlKSBhcmUgcmV0dXJuZWQuXG5mdW5jdGlvbiB1dGY4Q2hlY2tJbmNvbXBsZXRlKHNlbGYsIGJ1ZiwgaSkge1xuICB2YXIgaiA9IGJ1Zi5sZW5ndGggLSAxO1xuICBpZiAoaiA8IGkpIHJldHVybiAwO1xuICB2YXIgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkgc2VsZi5sYXN0TmVlZCA9IG5iIC0gMTtcbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgaWYgKC0taiA8IGkgfHwgbmIgPT09IC0yKSByZXR1cm4gMDtcbiAgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkgc2VsZi5sYXN0TmVlZCA9IG5iIC0gMjtcbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgaWYgKC0taiA8IGkgfHwgbmIgPT09IC0yKSByZXR1cm4gMDtcbiAgbmIgPSB1dGY4Q2hlY2tCeXRlKGJ1ZltqXSk7XG4gIGlmIChuYiA+PSAwKSB7XG4gICAgaWYgKG5iID4gMCkge1xuICAgICAgaWYgKG5iID09PSAyKSBuYiA9IDA7ZWxzZSBzZWxmLmxhc3ROZWVkID0gbmIgLSAzO1xuICAgIH1cbiAgICByZXR1cm4gbmI7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbi8vIFZhbGlkYXRlcyBhcyBtYW55IGNvbnRpbnVhdGlvbiBieXRlcyBmb3IgYSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3RlciBhc1xuLy8gbmVlZGVkIG9yIGFyZSBhdmFpbGFibGUuIElmIHdlIHNlZSBhIG5vbi1jb250aW51YXRpb24gYnl0ZSB3aGVyZSB3ZSBleHBlY3Rcbi8vIG9uZSwgd2UgXCJyZXBsYWNlXCIgdGhlIHZhbGlkYXRlZCBjb250aW51YXRpb24gYnl0ZXMgd2UndmUgc2VlbiBzbyBmYXIgd2l0aFxuLy8gYSBzaW5nbGUgVVRGLTggcmVwbGFjZW1lbnQgY2hhcmFjdGVyICgnXFx1ZmZmZCcpLCB0byBtYXRjaCB2OCdzIFVURi04IGRlY29kaW5nXG4vLyBiZWhhdmlvci4gVGhlIGNvbnRpbnVhdGlvbiBieXRlIGNoZWNrIGlzIGluY2x1ZGVkIHRocmVlIHRpbWVzIGluIHRoZSBjYXNlXG4vLyB3aGVyZSBhbGwgb2YgdGhlIGNvbnRpbnVhdGlvbiBieXRlcyBmb3IgYSBjaGFyYWN0ZXIgZXhpc3QgaW4gdGhlIHNhbWUgYnVmZmVyLlxuLy8gSXQgaXMgYWxzbyBkb25lIHRoaXMgd2F5IGFzIGEgc2xpZ2h0IHBlcmZvcm1hbmNlIGluY3JlYXNlIGluc3RlYWQgb2YgdXNpbmcgYVxuLy8gbG9vcC5cbmZ1bmN0aW9uIHV0ZjhDaGVja0V4dHJhQnl0ZXMoc2VsZiwgYnVmLCBwKSB7XG4gIGlmICgoYnVmWzBdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICBzZWxmLmxhc3ROZWVkID0gMDtcbiAgICByZXR1cm4gJ1xcdWZmZmQnO1xuICB9XG4gIGlmIChzZWxmLmxhc3ROZWVkID4gMSAmJiBidWYubGVuZ3RoID4gMSkge1xuICAgIGlmICgoYnVmWzFdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICAgIHNlbGYubGFzdE5lZWQgPSAxO1xuICAgICAgcmV0dXJuICdcXHVmZmZkJztcbiAgICB9XG4gICAgaWYgKHNlbGYubGFzdE5lZWQgPiAyICYmIGJ1Zi5sZW5ndGggPiAyKSB7XG4gICAgICBpZiAoKGJ1ZlsyXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgICAgIHNlbGYubGFzdE5lZWQgPSAyO1xuICAgICAgICByZXR1cm4gJ1xcdWZmZmQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBdHRlbXB0cyB0byBjb21wbGV0ZSBhIG11bHRpLWJ5dGUgVVRGLTggY2hhcmFjdGVyIHVzaW5nIGJ5dGVzIGZyb20gYSBCdWZmZXIuXG5mdW5jdGlvbiB1dGY4RmlsbExhc3QoYnVmKSB7XG4gIHZhciBwID0gdGhpcy5sYXN0VG90YWwgLSB0aGlzLmxhc3ROZWVkO1xuICB2YXIgciA9IHV0ZjhDaGVja0V4dHJhQnl0ZXModGhpcywgYnVmLCBwKTtcbiAgaWYgKHIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHI7XG4gIGlmICh0aGlzLmxhc3ROZWVkIDw9IGJ1Zi5sZW5ndGgpIHtcbiAgICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCBwLCAwLCB0aGlzLmxhc3ROZWVkKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0Q2hhci50b1N0cmluZyh0aGlzLmVuY29kaW5nLCAwLCB0aGlzLmxhc3RUb3RhbCk7XG4gIH1cbiAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgcCwgMCwgYnVmLmxlbmd0aCk7XG4gIHRoaXMubGFzdE5lZWQgLT0gYnVmLmxlbmd0aDtcbn1cblxuLy8gUmV0dXJucyBhbGwgY29tcGxldGUgVVRGLTggY2hhcmFjdGVycyBpbiBhIEJ1ZmZlci4gSWYgdGhlIEJ1ZmZlciBlbmRlZCBvbiBhXG4vLyBwYXJ0aWFsIGNoYXJhY3RlciwgdGhlIGNoYXJhY3RlcidzIGJ5dGVzIGFyZSBidWZmZXJlZCB1bnRpbCB0aGUgcmVxdWlyZWRcbi8vIG51bWJlciBvZiBieXRlcyBhcmUgYXZhaWxhYmxlLlxuZnVuY3Rpb24gdXRmOFRleHQoYnVmLCBpKSB7XG4gIHZhciB0b3RhbCA9IHV0ZjhDaGVja0luY29tcGxldGUodGhpcywgYnVmLCBpKTtcbiAgaWYgKCF0aGlzLmxhc3ROZWVkKSByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGY4JywgaSk7XG4gIHRoaXMubGFzdFRvdGFsID0gdG90YWw7XG4gIHZhciBlbmQgPSBidWYubGVuZ3RoIC0gKHRvdGFsIC0gdGhpcy5sYXN0TmVlZCk7XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIDAsIGVuZCk7XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ3V0ZjgnLCBpLCBlbmQpO1xufVxuXG4vLyBGb3IgVVRGLTgsIGEgcmVwbGFjZW1lbnQgY2hhcmFjdGVyIGlzIGFkZGVkIHdoZW4gZW5kaW5nIG9uIGEgcGFydGlhbFxuLy8gY2hhcmFjdGVyLlxuZnVuY3Rpb24gdXRmOEVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkgcmV0dXJuIHIgKyAnXFx1ZmZmZCc7XG4gIHJldHVybiByO1xufVxuXG4vLyBVVEYtMTZMRSB0eXBpY2FsbHkgbmVlZHMgdHdvIGJ5dGVzIHBlciBjaGFyYWN0ZXIsIGJ1dCBldmVuIGlmIHdlIGhhdmUgYW4gZXZlblxuLy8gbnVtYmVyIG9mIGJ5dGVzIGF2YWlsYWJsZSwgd2UgbmVlZCB0byBjaGVjayBpZiB3ZSBlbmQgb24gYSBsZWFkaW5nL2hpZ2hcbi8vIHN1cnJvZ2F0ZS4gSW4gdGhhdCBjYXNlLCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBuZXh0IHR3byBieXRlcyBpbiBvcmRlciB0b1xuLy8gZGVjb2RlIHRoZSBsYXN0IGNoYXJhY3RlciBwcm9wZXJseS5cbmZ1bmN0aW9uIHV0ZjE2VGV4dChidWYsIGkpIHtcbiAgaWYgKChidWYubGVuZ3RoIC0gaSkgJSAyID09PSAwKSB7XG4gICAgdmFyIHIgPSBidWYudG9TdHJpbmcoJ3V0ZjE2bGUnLCBpKTtcbiAgICBpZiAocikge1xuICAgICAgdmFyIGMgPSByLmNoYXJDb2RlQXQoci5sZW5ndGggLSAxKTtcbiAgICAgIGlmIChjID49IDB4RDgwMCAmJiBjIDw9IDB4REJGRikge1xuICAgICAgICB0aGlzLmxhc3ROZWVkID0gMjtcbiAgICAgICAgdGhpcy5sYXN0VG90YWwgPSA0O1xuICAgICAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAyXTtcbiAgICAgICAgdGhpcy5sYXN0Q2hhclsxXSA9IGJ1ZltidWYubGVuZ3RoIC0gMV07XG4gICAgICAgIHJldHVybiByLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgdGhpcy5sYXN0TmVlZCA9IDE7XG4gIHRoaXMubGFzdFRvdGFsID0gMjtcbiAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMV07XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ3V0ZjE2bGUnLCBpLCBidWYubGVuZ3RoIC0gMSk7XG59XG5cbi8vIEZvciBVVEYtMTZMRSB3ZSBkbyBub3QgZXhwbGljaXRseSBhcHBlbmQgc3BlY2lhbCByZXBsYWNlbWVudCBjaGFyYWN0ZXJzIGlmIHdlXG4vLyBlbmQgb24gYSBwYXJ0aWFsIGNoYXJhY3Rlciwgd2Ugc2ltcGx5IGxldCB2OCBoYW5kbGUgdGhhdC5cbmZ1bmN0aW9uIHV0ZjE2RW5kKGJ1Zikge1xuICB2YXIgciA9IGJ1ZiAmJiBidWYubGVuZ3RoID8gdGhpcy53cml0ZShidWYpIDogJyc7XG4gIGlmICh0aGlzLmxhc3ROZWVkKSB7XG4gICAgdmFyIGVuZCA9IHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZDtcbiAgICByZXR1cm4gciArIHRoaXMubGFzdENoYXIudG9TdHJpbmcoJ3V0ZjE2bGUnLCAwLCBlbmQpO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBiYXNlNjRUZXh0KGJ1ZiwgaSkge1xuICB2YXIgbiA9IChidWYubGVuZ3RoIC0gaSkgJSAzO1xuICBpZiAobiA9PT0gMCkgcmV0dXJuIGJ1Zi50b1N0cmluZygnYmFzZTY0JywgaSk7XG4gIHRoaXMubGFzdE5lZWQgPSAzIC0gbjtcbiAgdGhpcy5sYXN0VG90YWwgPSAzO1xuICBpZiAobiA9PT0gMSkge1xuICAgIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDJdO1xuICAgIHRoaXMubGFzdENoYXJbMV0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICB9XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcsIGksIGJ1Zi5sZW5ndGggLSBuKTtcbn1cblxuZnVuY3Rpb24gYmFzZTY0RW5kKGJ1Zikge1xuICB2YXIgciA9IGJ1ZiAmJiBidWYubGVuZ3RoID8gdGhpcy53cml0ZShidWYpIDogJyc7XG4gIGlmICh0aGlzLmxhc3ROZWVkKSByZXR1cm4gciArIHRoaXMubGFzdENoYXIudG9TdHJpbmcoJ2Jhc2U2NCcsIDAsIDMgLSB0aGlzLmxhc3ROZWVkKTtcbiAgcmV0dXJuIHI7XG59XG5cbi8vIFBhc3MgYnl0ZXMgb24gdGhyb3VnaCBmb3Igc2luZ2xlLWJ5dGUgZW5jb2RpbmdzIChlLmcuIGFzY2lpLCBsYXRpbjEsIGhleClcbmZ1bmN0aW9uIHNpbXBsZVdyaXRlKGJ1Zikge1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcpO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVFbmQoYnVmKSB7XG4gIHJldHVybiBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xufSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xuICAgIHJldHVybiB0bztcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5JbWFnZSA9IHZvaWQgMDtcbnZhciBJbWFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbWFnZShwb3NpdGlvbiwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5pbWFnZUlkID0gXCJpXCIgKyAoXCJcIiArIChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSkpLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICAgICAgICB0aGlzLmh0bWwgPSBcIlwiO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IFwiXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBfX3NwcmVhZEFycmF5KFtdLCBwb3NpdGlvbik7XG4gICAgICAgIHRoaXMucHJvcHMgPSBfX2Fzc2lnbih7fSwgcHJvcHMpO1xuICAgIH1cbiAgICBJbWFnZS5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9O1xuICAgIEltYWdlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgdmFyIHdyYXBwZWRIdG1sID0gXCJcXG4gICAgICAgIDxkaXYgXFxuICAgICAgICAgICAgaWQ9XFxcIlwiICsgdGhpcy5pbWFnZUlkICsgXCJcXFwiXFxuICAgICAgICAgICAgc3R5bGU9XFxcInBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIHRvcDogXCIgKyB0aGlzLnBvc2l0aW9uWzBdICsgXCIlOyBcXG4gICAgICAgICAgICAgICAgbGVmdDogXCIgKyB0aGlzLnBvc2l0aW9uWzFdICsgXCIlOyBcXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiICsgdGhpcy5wb3NpdGlvblsyXSArIFwiJTsgXFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIgKyB0aGlzLnBvc2l0aW9uWzNdICsgXCIlO1xcbiAgICAgICAgICAgICAgICBcIiArICh0aGlzLmRlYnVnID09PSBcIlwiXG4gICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgIDogXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIHRoaXMuZGVidWcgKyBcIjtcIikgKyBcIlxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgICBcIiArIGh0bWwgKyBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8c3R5bGU+XFxuICAgICAgICBkaXYjXCIgKyB0aGlzLmltYWdlSWQgKyBcIiB7fVxcbiAgICAgICAgPC9zdHlsZT5cXG4gICAgICAgIFwiO1xuICAgICAgICB2YXIgcGFyc2VkSHRtbCA9IHdyYXBwZWRIdG1sXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCBcIiBcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gPC9nLCBcIjxcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC88IC9nLCBcIjxcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC8+IC9nLCBcIj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gPi9nLCBcIj5cIik7XG4gICAgICAgIHRoaXMuaHRtbCA9IHBhcnNlZEh0bWw7XG4gICAgICAgIHJldHVybiBwYXJzZWRIdG1sO1xuICAgIH07XG4gICAgSW1hZ2UucHJvdG90eXBlLmV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciByZW5kZXJQcm9wS2V5ID0gXCJyXCIgKyAoXCJcIiArIChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSkpLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICAgICAgICB0aGlzLnBhZ2UuZXZlbnRzW3JlbmRlclByb3BLZXldID0gZXZlbnQ7XG4gICAgICAgIHJldHVybiByZW5kZXJQcm9wS2V5O1xuICAgIH07XG4gICAgSW1hZ2UucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICB2YXIgZXJyb3JMaW5lcyA9IGVycm9yLnNwbGl0KFwiXFxuXCIpWzJdO1xuICAgICAgICB2YXIgbGluZU51bWJlciA9IGVycm9yTGluZXMuc3BsaXQoXCI6XCIpLnNsaWNlKC0yKVswXTtcbiAgICAgICAgdmFyIGNvbE51bWJlciA9IGVycm9yTGluZXMuc3BsaXQoXCI6XCIpLnNsaWNlKC0xKVswXS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcbiAgICAgICAgdmFyIGtleSA9IFwiXCIgKyAobGluZU51bWJlciArIGNvbE51bWJlcik7XG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldLm1vdW50KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldLmh0bWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbWFnZS5wYWdlID0gdGhpcy5wYWdlO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gaW1hZ2U7XG4gICAgICAgICAgICBpbWFnZS5tb3VudCgpO1xuICAgICAgICAgICAgcmV0dXJuIGltYWdlLmh0bWw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEltYWdlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICB9O1xuICAgIEltYWdlLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfTtcbiAgICBJbWFnZS5wcm90b3R5cGUuZGVidWdPbiA9IGZ1bmN0aW9uIChkZWJ1Z0NvbG91cikge1xuICAgICAgICBpZiAoZGVidWdDb2xvdXIgPT09IHZvaWQgMCkgeyBkZWJ1Z0NvbG91ciA9IFwiI2ZmMDAwMFwiOyB9XG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1Z0NvbG91cjtcbiAgICB9O1xuICAgIEltYWdlLnByb3RvdHlwZS5kZWJ1Z09mZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IFwiXCI7XG4gICAgfTtcbiAgICByZXR1cm4gSW1hZ2U7XG59KCkpO1xuZXhwb3J0cy5JbWFnZSA9IEltYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNvdW50ZXIgPSBleHBvcnRzLkNvbnRhaW5lciA9IGV4cG9ydHMuQ29udGFpbmVyMSA9IHZvaWQgMDtcbnZhciBpbWFnZV8xID0gcmVxdWlyZShcIi4uL2ltYWdlL2ltYWdlXCIpO1xudmFyIENvbnRhaW5lcjEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRhaW5lcjEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyMShwb3NpdGlvbiwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHBvc2l0aW9uLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29udGFpbmVyMS5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29tcGlsZShcIlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICBcIiArIHRoaXMuaW1hZ2UobmV3IENvbnRhaW5lcihbMCwgMCwgMTAwLCAxMDBdKSkgKyBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIik7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGFpbmVyMTtcbn0oaW1hZ2VfMS5JbWFnZSkpO1xuZXhwb3J0cy5Db250YWluZXIxID0gQ29udGFpbmVyMTtcbnZhciBDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRhaW5lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250YWluZXIocG9zaXRpb24sIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwb3NpdGlvbiwgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbnRhaW5lci5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29tcGlsZShcIlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIFwiICsgdGhpcy5pbWFnZShuZXcgQ291bnRlcihbMCwgMCwgNTAsIDUwXSwgeyB0aXRsZTogXCJDb3VudGVyIDFcIiB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIiArIHRoaXMuaW1hZ2UobmV3IENvdW50ZXIoWzUwLCA1MCwgNTAsIDUwXSwgeyB0aXRsZTogXCJDb3VudGVyIDJcIiB9KSkgKyBcIlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRhaW5lcjtcbn0oaW1hZ2VfMS5JbWFnZSkpO1xuZXhwb3J0cy5Db250YWluZXIgPSBDb250YWluZXI7XG52YXIgQ291bnRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ291bnRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb3VudGVyKHBvc2l0aW9uLCBwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwb3NpdGlvbiwgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzKSwgeyBjb3VudDogMCB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb3VudGVyLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFUZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoXCJjb3VudFwiLCBfdGhpcy5nZXRTdGF0ZShcImNvdW50XCIpICsgMSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29tcGlsZShcIlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIFwiICsgdGhpcy5nZXRTdGF0ZShcInRpdGxlXCIpICsgXCJcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICBcIiArIHRoaXMuZ2V0U3RhdGUoXCJjb3VudFwiKSArIFwiXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPVwiICsgdGhpcy5ldmVudChhVGVzdCkgKyBcIj5BIG5pY2UgbmV3IGJ1dHRvbjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxzdHlsZT5cXG4gICAgICAgICAgICAgICAgKiB7Zm9udC1zaXplOiAyNXB4O31cXG4gICAgICAgICAgICA8L3N0eWxlPlxcbiAgICAgICAgXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIENvdW50ZXI7XG59KGltYWdlXzEuSW1hZ2UpKTtcbmV4cG9ydHMuQ291bnRlciA9IENvdW50ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlBhZ2UgPSB2b2lkIDA7XG4vLyBAdHMtaWdub3JlXG52YXIgZGlmZiA9IHJlcXVpcmUoXCJ2aXJ0dWFsLWRvbS9kaWZmXCIpO1xudmFyIHBhdGNoID0gcmVxdWlyZShcInZpcnR1YWwtZG9tL3BhdGNoXCIpO1xuLy8gQHRzLWlnbm9yZVxudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKFwidmlydHVhbC1kb20vY3JlYXRlLWVsZW1lbnRcIik7XG52YXIgVk5vZGUgPSByZXF1aXJlKFwidmlydHVhbC1kb20vdm5vZGUvdm5vZGVcIik7XG52YXIgVlRleHQgPSByZXF1aXJlKFwidmlydHVhbC1kb20vdm5vZGUvdnRleHRcIik7XG52YXIgY29udmVydEhUTUwgPSByZXF1aXJlKFwiaHRtbC10by12ZG9tXCIpKHtcbiAgICBWTm9kZTogVk5vZGUsXG4gICAgVlRleHQ6IFZUZXh0LFxufSk7XG52YXIgUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYWdlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgUGFnZS5wcm90b3R5cGUuYWRkUm9vdEltYWdlID0gZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIHRoaXMuY2hpbGQgPSBpbWFnZTtcbiAgICAgICAgdGhpcy5jaGlsZC5wYWdlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZC5tb3VudCgpO1xuICAgICAgICB0aGlzLm5ld1RyZWUgPSB0aGlzLmNvbnZlcnRIVE1MV2l0aEtleSh0aGlzLmNoaWxkLmh0bWwpO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gY3JlYXRlRWxlbWVudCh0aGlzLm5ld1RyZWVbMF0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICB0aGlzLnJlcGxhY2VldmVudHModGhpcy5uZXdUcmVlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VHJlZSA9IHRoaXMubmV3VHJlZTtcbiAgICB9O1xuICAgIFBhZ2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5jaGlsZC5tb3VudCgpO1xuICAgICAgICB0aGlzLm5ld1RyZWUgPSB0aGlzLmNvbnZlcnRIVE1MV2l0aEtleSh0aGlzLmNoaWxkLmh0bWwpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH07XG4gICAgUGFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGF0Y2hlcyA9IGRpZmYodGhpcy5jdXJyZW50VHJlZVswXSwgdGhpcy5uZXdUcmVlWzBdKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHBhdGNoKHRoaXMuY3VycmVudE5vZGUsIHBhdGNoZXMpO1xuICAgICAgICB0aGlzLnJlcGxhY2VldmVudHModGhpcy5uZXdUcmVlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VHJlZSA9IHRoaXMubmV3VHJlZTtcbiAgICB9O1xuICAgIFBhZ2UucHJvdG90eXBlLmNvbnZlcnRIVE1MV2l0aEtleSA9IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0SFRNTCh7XG4gICAgICAgICAgICBnZXRWTm9kZUtleTogZnVuY3Rpb24gKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIGh0bWwpO1xuICAgIH07XG4gICAgUGFnZS5wcm90b3R5cGUucmVwbGFjZWV2ZW50cyA9IGZ1bmN0aW9uICh0cmVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyZWUuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lICE9PSBcInN0eWxlXCIgJiYgY2hpbGQudGFnTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlIGluIGNoaWxkLnByb3BlcnRpZXMuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQucHJvcGVydGllcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gaW4gX3RoaXMuZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbEF0dHJpYnV0ZSA9IGF0dHJpYnV0ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50c0tleXMgPSBjaGlsZC5wcm9wZXJ0aWVzLmF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW1wiICsgbEF0dHJpYnV0ZSArIFwiPVwiICsgZXZlbnRzS2V5cyArIFwiXVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtsQXR0cmlidXRlXSA9IF90aGlzLmV2ZW50c1tldmVudHNLZXlzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBsYWNlZXZlbnRzKGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHJldHVybiBQYWdlO1xufSgpKTtcbmV4cG9ydHMuUGFnZSA9IFBhZ2U7XG4iLCJ2YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoXCIuL3Zkb20vY3JlYXRlLWVsZW1lbnQuanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVFbGVtZW50XG4iLCJ2YXIgZGlmZiA9IHJlcXVpcmUoXCIuL3Z0cmVlL2RpZmYuanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG4iLCJ2YXIgcGF0Y2ggPSByZXF1aXJlKFwiLi92ZG9tL3BhdGNoLmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoXCJpcy1vYmplY3RcIilcbnZhciBpc0hvb2sgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdmhvb2suanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseVByb3BlcnRpZXNcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKG5vZGUsIHByb3BzLCBwcmV2aW91cykge1xuICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUsIHByZXZpb3VzKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0hvb2socHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgcmVtb3ZlUHJvcGVydHkobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSwgcHJldmlvdXMpXG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlLmhvb2spIHtcbiAgICAgICAgICAgICAgICBwcm9wVmFsdWUuaG9vayhub2RlLFxuICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMgPyBwcmV2aW91c1twcm9wTmFtZV0gOiB1bmRlZmluZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoT2JqZWN0KG5vZGUsIHByb3BzLCBwcmV2aW91cywgcHJvcE5hbWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVbcHJvcE5hbWVdID0gcHJvcFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUsIHByZXZpb3VzKSB7XG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKCFpc0hvb2socHJldmlvdXNWYWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyTmFtZSBpbiBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2ldID0gXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByZXZpb3VzVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlW3Byb3BOYW1lXSA9IFwiXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNWYWx1ZS51bmhvb2spIHtcbiAgICAgICAgICAgIHByZXZpb3VzVmFsdWUudW5ob29rKG5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhdGNoT2JqZWN0KG5vZGUsIHByb3BzLCBwcmV2aW91cywgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXMgPyBwcmV2aW91c1twcm9wTmFtZV0gOiB1bmRlZmluZWRcblxuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgaWYgKHByb3BOYW1lID09PSBcImF0dHJpYnV0ZXNcIikge1xuICAgICAgICBmb3IgKHZhciBhdHRyTmFtZSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBhdHRyVmFsdWUgPSBwcm9wVmFsdWVbYXR0ck5hbWVdXG5cbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYocHJldmlvdXNWYWx1ZSAmJiBpc09iamVjdChwcmV2aW91c1ZhbHVlKSAmJlxuICAgICAgICBnZXRQcm90b3R5cGUocHJldmlvdXNWYWx1ZSkgIT09IGdldFByb3RvdHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIG5vZGVbcHJvcE5hbWVdID0gcHJvcFZhbHVlXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3Qobm9kZVtwcm9wTmFtZV0pKSB7XG4gICAgICAgIG5vZGVbcHJvcE5hbWVdID0ge31cbiAgICB9XG5cbiAgICB2YXIgcmVwbGFjZXIgPSBwcm9wTmFtZSA9PT0gXCJzdHlsZVwiID8gXCJcIiA6IHVuZGVmaW5lZFxuXG4gICAgZm9yICh2YXIgayBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcFZhbHVlW2tdXG4gICAgICAgIG5vZGVbcHJvcE5hbWVdW2tdID0gKHZhbHVlID09PSB1bmRlZmluZWQpID8gcmVwbGFjZXIgOiB2YWx1ZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvdG90eXBlKHZhbHVlKSB7XG4gICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKVxuICAgIH0gZWxzZSBpZiAodmFsdWUuX19wcm90b19fKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5fX3Byb3RvX19cbiAgICB9IGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgICB9XG59XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG5cbnZhciBhcHBseVByb3BlcnRpZXMgPSByZXF1aXJlKFwiLi9hcHBseS1wcm9wZXJ0aWVzXCIpXG5cbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZub2RlLmpzXCIpXG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12dGV4dC5qc1wiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldC5qc1wiKVxudmFyIGhhbmRsZVRodW5rID0gcmVxdWlyZShcIi4uL3Zub2RlL2hhbmRsZS10aHVuay5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVsZW1lbnRcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh2bm9kZSwgb3B0cykge1xuICAgIHZhciBkb2MgPSBvcHRzID8gb3B0cy5kb2N1bWVudCB8fCBkb2N1bWVudCA6IGRvY3VtZW50XG4gICAgdmFyIHdhcm4gPSBvcHRzID8gb3B0cy53YXJuIDogbnVsbFxuXG4gICAgdm5vZGUgPSBoYW5kbGVUaHVuayh2bm9kZSkuYVxuXG4gICAgaWYgKGlzV2lkZ2V0KHZub2RlKSkge1xuICAgICAgICByZXR1cm4gdm5vZGUuaW5pdCgpXG4gICAgfSBlbHNlIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpXG4gICAgfSBlbHNlIGlmICghaXNWTm9kZSh2bm9kZSkpIHtcbiAgICAgICAgaWYgKHdhcm4pIHtcbiAgICAgICAgICAgIHdhcm4oXCJJdGVtIGlzIG5vdCBhIHZhbGlkIHZpcnR1YWwgZG9tIG5vZGVcIiwgdm5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9ICh2bm9kZS5uYW1lc3BhY2UgPT09IG51bGwpID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQodm5vZGUudGFnTmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKHZub2RlLm5hbWVzcGFjZSwgdm5vZGUudGFnTmFtZSlcblxuICAgIHZhciBwcm9wcyA9IHZub2RlLnByb3BlcnRpZXNcbiAgICBhcHBseVByb3BlcnRpZXMobm9kZSwgcHJvcHMpXG5cbiAgICB2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGROb2RlID0gY3JlYXRlRWxlbWVudChjaGlsZHJlbltpXSwgb3B0cylcbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVxufVxuIiwiLy8gTWFwcyBhIHZpcnR1YWwgRE9NIHRyZWUgb250byBhIHJlYWwgRE9NIHRyZWUgaW4gYW4gZWZmaWNpZW50IG1hbm5lci5cbi8vIFdlIGRvbid0IHdhbnQgdG8gcmVhZCBhbGwgb2YgdGhlIERPTSBub2RlcyBpbiB0aGUgdHJlZSBzbyB3ZSB1c2Vcbi8vIHRoZSBpbi1vcmRlciB0cmVlIGluZGV4aW5nIHRvIGVsaW1pbmF0ZSByZWN1cnNpb24gZG93biBjZXJ0YWluIGJyYW5jaGVzLlxuLy8gV2Ugb25seSByZWN1cnNlIGludG8gYSBET00gbm9kZSBpZiB3ZSBrbm93IHRoYXQgaXQgY29udGFpbnMgYSBjaGlsZCBvZlxuLy8gaW50ZXJlc3QuXG5cbnZhciBub0NoaWxkID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBkb21JbmRleFxuXG5mdW5jdGlvbiBkb21JbmRleChyb290Tm9kZSwgdHJlZSwgaW5kaWNlcywgbm9kZXMpIHtcbiAgICBpZiAoIWluZGljZXMgfHwgaW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5kaWNlcy5zb3J0KGFzY2VuZGluZylcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2Uocm9vdE5vZGUsIHRyZWUsIGluZGljZXMsIG5vZGVzLCAwKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzZShyb290Tm9kZSwgdHJlZSwgaW5kaWNlcywgbm9kZXMsIHJvb3RJbmRleCkge1xuICAgIG5vZGVzID0gbm9kZXMgfHwge31cblxuXG4gICAgaWYgKHJvb3ROb2RlKSB7XG4gICAgICAgIGlmIChpbmRleEluUmFuZ2UoaW5kaWNlcywgcm9vdEluZGV4LCByb290SW5kZXgpKSB7XG4gICAgICAgICAgICBub2Rlc1tyb290SW5kZXhdID0gcm9vdE5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2Q2hpbGRyZW4gPSB0cmVlLmNoaWxkcmVuXG5cbiAgICAgICAgaWYgKHZDaGlsZHJlbikge1xuXG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlcyA9IHJvb3ROb2RlLmNoaWxkTm9kZXNcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcm9vdEluZGV4ICs9IDFcblxuICAgICAgICAgICAgICAgIHZhciB2Q2hpbGQgPSB2Q2hpbGRyZW5baV0gfHwgbm9DaGlsZFxuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5kZXggPSByb290SW5kZXggKyAodkNoaWxkLmNvdW50IHx8IDApXG5cbiAgICAgICAgICAgICAgICAvLyBza2lwIHJlY3Vyc2lvbiBkb3duIHRoZSB0cmVlIGlmIHRoZXJlIGFyZSBubyBub2RlcyBkb3duIGhlcmVcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhJblJhbmdlKGluZGljZXMsIHJvb3RJbmRleCwgbmV4dEluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICByZWN1cnNlKGNoaWxkTm9kZXNbaV0sIHZDaGlsZCwgaW5kaWNlcywgbm9kZXMsIHJvb3RJbmRleClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByb290SW5kZXggPSBuZXh0SW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2Rlc1xufVxuXG4vLyBCaW5hcnkgc2VhcmNoIGZvciBhbiBpbmRleCBpbiB0aGUgaW50ZXJ2YWwgW2xlZnQsIHJpZ2h0XVxuZnVuY3Rpb24gaW5kZXhJblJhbmdlKGluZGljZXMsIGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHZhciBtaW5JbmRleCA9IDBcbiAgICB2YXIgbWF4SW5kZXggPSBpbmRpY2VzLmxlbmd0aCAtIDFcbiAgICB2YXIgY3VycmVudEluZGV4XG4gICAgdmFyIGN1cnJlbnRJdGVtXG5cbiAgICB3aGlsZSAobWluSW5kZXggPD0gbWF4SW5kZXgpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKChtYXhJbmRleCArIG1pbkluZGV4KSAvIDIpID4+IDBcbiAgICAgICAgY3VycmVudEl0ZW0gPSBpbmRpY2VzW2N1cnJlbnRJbmRleF1cblxuICAgICAgICBpZiAobWluSW5kZXggPT09IG1heEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW0gPj0gbGVmdCAmJiBjdXJyZW50SXRlbSA8PSByaWdodFxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJdGVtIDwgbGVmdCkge1xuICAgICAgICAgICAgbWluSW5kZXggPSBjdXJyZW50SW5kZXggKyAxXG4gICAgICAgIH0gZWxzZSAgaWYgKGN1cnJlbnRJdGVtID4gcmlnaHQpIHtcbiAgICAgICAgICAgIG1heEluZGV4ID0gY3VycmVudEluZGV4IC0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgICByZXR1cm4gYSA+IGIgPyAxIDogLTFcbn1cbiIsInZhciBhcHBseVByb3BlcnRpZXMgPSByZXF1aXJlKFwiLi9hcHBseS1wcm9wZXJ0aWVzXCIpXG5cbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy13aWRnZXQuanNcIilcbnZhciBWUGF0Y2ggPSByZXF1aXJlKFwiLi4vdm5vZGUvdnBhdGNoLmpzXCIpXG5cbnZhciB1cGRhdGVXaWRnZXQgPSByZXF1aXJlKFwiLi91cGRhdGUtd2lkZ2V0XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHlQYXRjaFxuXG5mdW5jdGlvbiBhcHBseVBhdGNoKHZwYXRjaCwgZG9tTm9kZSwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciB0eXBlID0gdnBhdGNoLnR5cGVcbiAgICB2YXIgdk5vZGUgPSB2cGF0Y2gudk5vZGVcbiAgICB2YXIgcGF0Y2ggPSB2cGF0Y2gucGF0Y2hcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFZQYXRjaC5SRU1PVkU6XG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlTm9kZShkb21Ob2RlLCB2Tm9kZSlcbiAgICAgICAgY2FzZSBWUGF0Y2guSU5TRVJUOlxuICAgICAgICAgICAgcmV0dXJuIGluc2VydE5vZGUoZG9tTm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpXG4gICAgICAgIGNhc2UgVlBhdGNoLlZURVhUOlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ1BhdGNoKGRvbU5vZGUsIHZOb2RlLCBwYXRjaCwgcmVuZGVyT3B0aW9ucylcbiAgICAgICAgY2FzZSBWUGF0Y2guV0lER0VUOlxuICAgICAgICAgICAgcmV0dXJuIHdpZGdldFBhdGNoKGRvbU5vZGUsIHZOb2RlLCBwYXRjaCwgcmVuZGVyT3B0aW9ucylcbiAgICAgICAgY2FzZSBWUGF0Y2guVk5PREU6XG4gICAgICAgICAgICByZXR1cm4gdk5vZGVQYXRjaChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpXG4gICAgICAgIGNhc2UgVlBhdGNoLk9SREVSOlxuICAgICAgICAgICAgcmVvcmRlckNoaWxkcmVuKGRvbU5vZGUsIHBhdGNoKVxuICAgICAgICAgICAgcmV0dXJuIGRvbU5vZGVcbiAgICAgICAgY2FzZSBWUGF0Y2guUFJPUFM6XG4gICAgICAgICAgICBhcHBseVByb3BlcnRpZXMoZG9tTm9kZSwgcGF0Y2gsIHZOb2RlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICByZXR1cm4gZG9tTm9kZVxuICAgICAgICBjYXNlIFZQYXRjaC5USFVOSzpcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlUm9vdChkb21Ob2RlLFxuICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbnMucGF0Y2goZG9tTm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpKVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGRvbU5vZGVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUoZG9tTm9kZSwgdk5vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUucGFyZW50Tm9kZVxuXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlKVxuICAgIH1cblxuICAgIGRlc3Ryb3lXaWRnZXQoZG9tTm9kZSwgdk5vZGUpO1xuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShwYXJlbnROb2RlLCB2Tm9kZSwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciBuZXdOb2RlID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIodk5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld05vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGVcbn1cblxuZnVuY3Rpb24gc3RyaW5nUGF0Y2goZG9tTm9kZSwgbGVmdFZOb2RlLCB2VGV4dCwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciBuZXdOb2RlXG5cbiAgICBpZiAoZG9tTm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICBkb21Ob2RlLnJlcGxhY2VEYXRhKDAsIGRvbU5vZGUubGVuZ3RoLCB2VGV4dC50ZXh0KVxuICAgICAgICBuZXdOb2RlID0gZG9tTm9kZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlXG4gICAgICAgIG5ld05vZGUgPSByZW5kZXJPcHRpb25zLnJlbmRlcih2VGV4dCwgcmVuZGVyT3B0aW9ucylcblxuICAgICAgICBpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBkb21Ob2RlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld05vZGVcbn1cblxuZnVuY3Rpb24gd2lkZ2V0UGF0Y2goZG9tTm9kZSwgbGVmdFZOb2RlLCB3aWRnZXQsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgdXBkYXRpbmcgPSB1cGRhdGVXaWRnZXQobGVmdFZOb2RlLCB3aWRnZXQpXG4gICAgdmFyIG5ld05vZGVcblxuICAgIGlmICh1cGRhdGluZykge1xuICAgICAgICBuZXdOb2RlID0gd2lkZ2V0LnVwZGF0ZShsZWZ0Vk5vZGUsIGRvbU5vZGUpIHx8IGRvbU5vZGVcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdOb2RlID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIod2lkZ2V0LCByZW5kZXJPcHRpb25zKVxuICAgIH1cblxuICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlXG5cbiAgICBpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIGRvbU5vZGUpXG4gICAgfVxuXG4gICAgaWYgKCF1cGRhdGluZykge1xuICAgICAgICBkZXN0cm95V2lkZ2V0KGRvbU5vZGUsIGxlZnRWTm9kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Tm9kZVxufVxuXG5mdW5jdGlvbiB2Tm9kZVBhdGNoKGRvbU5vZGUsIGxlZnRWTm9kZSwgdk5vZGUsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUucGFyZW50Tm9kZVxuICAgIHZhciBuZXdOb2RlID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIodk5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICBpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIGRvbU5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld05vZGVcbn1cblxuZnVuY3Rpb24gZGVzdHJveVdpZGdldChkb21Ob2RlLCB3KSB7XG4gICAgaWYgKHR5cGVvZiB3LmRlc3Ryb3kgPT09IFwiZnVuY3Rpb25cIiAmJiBpc1dpZGdldCh3KSkge1xuICAgICAgICB3LmRlc3Ryb3koZG9tTm9kZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXJDaGlsZHJlbihkb21Ob2RlLCBtb3Zlcykge1xuICAgIHZhciBjaGlsZE5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzXG4gICAgdmFyIGtleU1hcCA9IHt9XG4gICAgdmFyIG5vZGVcbiAgICB2YXIgcmVtb3ZlXG4gICAgdmFyIGluc2VydFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3Zlcy5yZW1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlbW92ZSA9IG1vdmVzLnJlbW92ZXNbaV1cbiAgICAgICAgbm9kZSA9IGNoaWxkTm9kZXNbcmVtb3ZlLmZyb21dXG4gICAgICAgIGlmIChyZW1vdmUua2V5KSB7XG4gICAgICAgICAgICBrZXlNYXBbcmVtb3ZlLmtleV0gPSBub2RlXG4gICAgICAgIH1cbiAgICAgICAgZG9tTm9kZS5yZW1vdmVDaGlsZChub2RlKVxuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbW92ZXMuaW5zZXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBpbnNlcnQgPSBtb3Zlcy5pbnNlcnRzW2pdXG4gICAgICAgIG5vZGUgPSBrZXlNYXBbaW5zZXJ0LmtleV1cbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgd2VpcmRlc3QgYnVnIGkndmUgZXZlciBzZWVuIGluIHdlYmtpdFxuICAgICAgICBkb21Ob2RlLmluc2VydEJlZm9yZShub2RlLCBpbnNlcnQudG8gPj0gbGVuZ3RoKysgPyBudWxsIDogY2hpbGROb2Rlc1tpbnNlcnQudG9dKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJvb3Qob2xkUm9vdCwgbmV3Um9vdCkge1xuICAgIGlmIChvbGRSb290ICYmIG5ld1Jvb3QgJiYgb2xkUm9vdCAhPT0gbmV3Um9vdCAmJiBvbGRSb290LnBhcmVudE5vZGUpIHtcbiAgICAgICAgb2xkUm9vdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb290LCBvbGRSb290KVxuICAgIH1cblxuICAgIHJldHVybiBuZXdSb290O1xufVxuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKFwieC1pcy1hcnJheVwiKVxuXG52YXIgcmVuZGVyID0gcmVxdWlyZShcIi4vY3JlYXRlLWVsZW1lbnRcIilcbnZhciBkb21JbmRleCA9IHJlcXVpcmUoXCIuL2RvbS1pbmRleFwiKVxudmFyIHBhdGNoT3AgPSByZXF1aXJlKFwiLi9wYXRjaC1vcFwiKVxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaFxuXG5mdW5jdGlvbiBwYXRjaChyb290Tm9kZSwgcGF0Y2hlcywgcmVuZGVyT3B0aW9ucykge1xuICAgIHJlbmRlck9wdGlvbnMgPSByZW5kZXJPcHRpb25zIHx8IHt9XG4gICAgcmVuZGVyT3B0aW9ucy5wYXRjaCA9IHJlbmRlck9wdGlvbnMucGF0Y2ggJiYgcmVuZGVyT3B0aW9ucy5wYXRjaCAhPT0gcGF0Y2hcbiAgICAgICAgPyByZW5kZXJPcHRpb25zLnBhdGNoXG4gICAgICAgIDogcGF0Y2hSZWN1cnNpdmVcbiAgICByZW5kZXJPcHRpb25zLnJlbmRlciA9IHJlbmRlck9wdGlvbnMucmVuZGVyIHx8IHJlbmRlclxuXG4gICAgcmV0dXJuIHJlbmRlck9wdGlvbnMucGF0Y2gocm9vdE5vZGUsIHBhdGNoZXMsIHJlbmRlck9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIHBhdGNoUmVjdXJzaXZlKHJvb3ROb2RlLCBwYXRjaGVzLCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIGluZGljZXMgPSBwYXRjaEluZGljZXMocGF0Y2hlcylcblxuICAgIGlmIChpbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGVcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBkb21JbmRleChyb290Tm9kZSwgcGF0Y2hlcy5hLCBpbmRpY2VzKVxuICAgIHZhciBvd25lckRvY3VtZW50ID0gcm9vdE5vZGUub3duZXJEb2N1bWVudFxuXG4gICAgaWYgKCFyZW5kZXJPcHRpb25zLmRvY3VtZW50ICYmIG93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIHJlbmRlck9wdGlvbnMuZG9jdW1lbnQgPSBvd25lckRvY3VtZW50XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlSW5kZXggPSBpbmRpY2VzW2ldXG4gICAgICAgIHJvb3ROb2RlID0gYXBwbHlQYXRjaChyb290Tm9kZSxcbiAgICAgICAgICAgIGluZGV4W25vZGVJbmRleF0sXG4gICAgICAgICAgICBwYXRjaGVzW25vZGVJbmRleF0sXG4gICAgICAgICAgICByZW5kZXJPcHRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiByb290Tm9kZVxufVxuXG5mdW5jdGlvbiBhcHBseVBhdGNoKHJvb3ROb2RlLCBkb21Ob2RlLCBwYXRjaExpc3QsIHJlbmRlck9wdGlvbnMpIHtcbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlXG4gICAgfVxuXG4gICAgdmFyIG5ld05vZGVcblxuICAgIGlmIChpc0FycmF5KHBhdGNoTGlzdCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRjaExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld05vZGUgPSBwYXRjaE9wKHBhdGNoTGlzdFtpXSwgZG9tTm9kZSwgcmVuZGVyT3B0aW9ucylcblxuICAgICAgICAgICAgaWYgKGRvbU5vZGUgPT09IHJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgcm9vdE5vZGUgPSBuZXdOb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdOb2RlID0gcGF0Y2hPcChwYXRjaExpc3QsIGRvbU5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICAgICAgaWYgKGRvbU5vZGUgPT09IHJvb3ROb2RlKSB7XG4gICAgICAgICAgICByb290Tm9kZSA9IG5ld05vZGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByb290Tm9kZVxufVxuXG5mdW5jdGlvbiBwYXRjaEluZGljZXMocGF0Y2hlcykge1xuICAgIHZhciBpbmRpY2VzID0gW11cblxuICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgIGlmIChrZXkgIT09IFwiYVwiKSB7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goTnVtYmVyKGtleSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuIiwidmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldC5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZVdpZGdldFxuXG5mdW5jdGlvbiB1cGRhdGVXaWRnZXQoYSwgYikge1xuICAgIGlmIChpc1dpZGdldChhKSAmJiBpc1dpZGdldChiKSkge1xuICAgICAgICBpZiAoXCJuYW1lXCIgaW4gYSAmJiBcIm5hbWVcIiBpbiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA9PT0gYi5pZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGEuaW5pdCA9PT0gYi5pbml0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cbiIsInZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4vaXMtdm5vZGVcIilcbnZhciBpc1ZUZXh0ID0gcmVxdWlyZShcIi4vaXMtdnRleHRcIilcbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoXCIuL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi9pcy10aHVua1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZVRodW5rXG5cbmZ1bmN0aW9uIGhhbmRsZVRodW5rKGEsIGIpIHtcbiAgICB2YXIgcmVuZGVyZWRBID0gYVxuICAgIHZhciByZW5kZXJlZEIgPSBiXG5cbiAgICBpZiAoaXNUaHVuayhiKSkge1xuICAgICAgICByZW5kZXJlZEIgPSByZW5kZXJUaHVuayhiLCBhKVxuICAgIH1cblxuICAgIGlmIChpc1RodW5rKGEpKSB7XG4gICAgICAgIHJlbmRlcmVkQSA9IHJlbmRlclRodW5rKGEsIG51bGwpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYTogcmVuZGVyZWRBLFxuICAgICAgICBiOiByZW5kZXJlZEJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRodW5rKHRodW5rLCBwcmV2aW91cykge1xuICAgIHZhciByZW5kZXJlZFRodW5rID0gdGh1bmsudm5vZGVcblxuICAgIGlmICghcmVuZGVyZWRUaHVuaykge1xuICAgICAgICByZW5kZXJlZFRodW5rID0gdGh1bmsudm5vZGUgPSB0aHVuay5yZW5kZXIocHJldmlvdXMpXG4gICAgfVxuXG4gICAgaWYgKCEoaXNWTm9kZShyZW5kZXJlZFRodW5rKSB8fFxuICAgICAgICAgICAgaXNWVGV4dChyZW5kZXJlZFRodW5rKSB8fFxuICAgICAgICAgICAgaXNXaWRnZXQocmVuZGVyZWRUaHVuaykpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInRodW5rIGRpZCBub3QgcmV0dXJuIGEgdmFsaWQgbm9kZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyZWRUaHVua1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc1RodW5rXHJcblxyXG5mdW5jdGlvbiBpc1RodW5rKHQpIHtcclxuICAgIHJldHVybiB0ICYmIHQudHlwZSA9PT0gXCJUaHVua1wiXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc0hvb2tcblxuZnVuY3Rpb24gaXNIb29rKGhvb2spIHtcbiAgICByZXR1cm4gaG9vayAmJlxuICAgICAgKHR5cGVvZiBob29rLmhvb2sgPT09IFwiZnVuY3Rpb25cIiAmJiAhaG9vay5oYXNPd25Qcm9wZXJ0eShcImhvb2tcIikgfHxcbiAgICAgICB0eXBlb2YgaG9vay51bmhvb2sgPT09IFwiZnVuY3Rpb25cIiAmJiAhaG9vay5oYXNPd25Qcm9wZXJ0eShcInVuaG9va1wiKSlcbn1cbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVmlydHVhbE5vZGVcblxuZnVuY3Rpb24gaXNWaXJ0dWFsTm9kZSh4KSB7XG4gICAgcmV0dXJuIHggJiYgeC50eXBlID09PSBcIlZpcnR1YWxOb2RlXCIgJiYgeC52ZXJzaW9uID09PSB2ZXJzaW9uXG59XG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcblxubW9kdWxlLmV4cG9ydHMgPSBpc1ZpcnR1YWxUZXh0XG5cbmZ1bmN0aW9uIGlzVmlydHVhbFRleHQoeCkge1xuICAgIHJldHVybiB4ICYmIHgudHlwZSA9PT0gXCJWaXJ0dWFsVGV4dFwiICYmIHgudmVyc2lvbiA9PT0gdmVyc2lvblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc1dpZGdldFxuXG5mdW5jdGlvbiBpc1dpZGdldCh3KSB7XG4gICAgcmV0dXJuIHcgJiYgdy50eXBlID09PSBcIldpZGdldFwiXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiMlwiXG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4vaXMtdm5vZGVcIilcbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoXCIuL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi9pcy10aHVua1wiKVxudmFyIGlzVkhvb2sgPSByZXF1aXJlKFwiLi9pcy12aG9va1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxOb2RlXG5cbnZhciBub1Byb3BlcnRpZXMgPSB7fVxudmFyIG5vQ2hpbGRyZW4gPSBbXVxuXG5mdW5jdGlvbiBWaXJ0dWFsTm9kZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbiwga2V5LCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLnRhZ05hbWUgPSB0YWdOYW1lXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBub1Byb3BlcnRpZXNcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgbm9DaGlsZHJlblxuICAgIHRoaXMua2V5ID0ga2V5ICE9IG51bGwgPyBTdHJpbmcoa2V5KSA6IHVuZGVmaW5lZFxuICAgIHRoaXMubmFtZXNwYWNlID0gKHR5cGVvZiBuYW1lc3BhY2UgPT09IFwic3RyaW5nXCIpID8gbmFtZXNwYWNlIDogbnVsbFxuXG4gICAgdmFyIGNvdW50ID0gKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkgfHwgMFxuICAgIHZhciBkZXNjZW5kYW50cyA9IDBcbiAgICB2YXIgaGFzV2lkZ2V0cyA9IGZhbHNlXG4gICAgdmFyIGhhc1RodW5rcyA9IGZhbHNlXG4gICAgdmFyIGRlc2NlbmRhbnRIb29rcyA9IGZhbHNlXG4gICAgdmFyIGhvb2tzXG5cbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1twcm9wTmFtZV1cbiAgICAgICAgICAgIGlmIChpc1ZIb29rKHByb3BlcnR5KSAmJiBwcm9wZXJ0eS51bmhvb2spIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhvb2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvb2tzID0ge31cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBob29rc1twcm9wTmFtZV0gPSBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgIGlmIChpc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgICAgICAgZGVzY2VuZGFudHMgKz0gY2hpbGQuY291bnQgfHwgMFxuXG4gICAgICAgICAgICBpZiAoIWhhc1dpZGdldHMgJiYgY2hpbGQuaGFzV2lkZ2V0cykge1xuICAgICAgICAgICAgICAgIGhhc1dpZGdldHMgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzVGh1bmtzICYmIGNoaWxkLmhhc1RodW5rcykge1xuICAgICAgICAgICAgICAgIGhhc1RodW5rcyA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFkZXNjZW5kYW50SG9va3MgJiYgKGNoaWxkLmhvb2tzIHx8IGNoaWxkLmRlc2NlbmRhbnRIb29rcykpIHtcbiAgICAgICAgICAgICAgICBkZXNjZW5kYW50SG9va3MgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc1dpZGdldHMgJiYgaXNXaWRnZXQoY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLmRlc3Ryb3kgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGhhc1dpZGdldHMgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc1RodW5rcyAmJiBpc1RodW5rKGNoaWxkKSkge1xuICAgICAgICAgICAgaGFzVGh1bmtzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY291bnQgPSBjb3VudCArIGRlc2NlbmRhbnRzXG4gICAgdGhpcy5oYXNXaWRnZXRzID0gaGFzV2lkZ2V0c1xuICAgIHRoaXMuaGFzVGh1bmtzID0gaGFzVGh1bmtzXG4gICAgdGhpcy5ob29rcyA9IGhvb2tzXG4gICAgdGhpcy5kZXNjZW5kYW50SG9va3MgPSBkZXNjZW5kYW50SG9va3Ncbn1cblxuVmlydHVhbE5vZGUucHJvdG90eXBlLnZlcnNpb24gPSB2ZXJzaW9uXG5WaXJ0dWFsTm9kZS5wcm90b3R5cGUudHlwZSA9IFwiVmlydHVhbE5vZGVcIlxuIiwidmFyIHZlcnNpb24gPSByZXF1aXJlKFwiLi92ZXJzaW9uXCIpXG5cblZpcnR1YWxQYXRjaC5OT05FID0gMFxuVmlydHVhbFBhdGNoLlZURVhUID0gMVxuVmlydHVhbFBhdGNoLlZOT0RFID0gMlxuVmlydHVhbFBhdGNoLldJREdFVCA9IDNcblZpcnR1YWxQYXRjaC5QUk9QUyA9IDRcblZpcnR1YWxQYXRjaC5PUkRFUiA9IDVcblZpcnR1YWxQYXRjaC5JTlNFUlQgPSA2XG5WaXJ0dWFsUGF0Y2guUkVNT1ZFID0gN1xuVmlydHVhbFBhdGNoLlRIVU5LID0gOFxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxQYXRjaFxuXG5mdW5jdGlvbiBWaXJ0dWFsUGF0Y2godHlwZSwgdk5vZGUsIHBhdGNoKSB7XG4gICAgdGhpcy50eXBlID0gTnVtYmVyKHR5cGUpXG4gICAgdGhpcy52Tm9kZSA9IHZOb2RlXG4gICAgdGhpcy5wYXRjaCA9IHBhdGNoXG59XG5cblZpcnR1YWxQYXRjaC5wcm90b3R5cGUudmVyc2lvbiA9IHZlcnNpb25cblZpcnR1YWxQYXRjaC5wcm90b3R5cGUudHlwZSA9IFwiVmlydHVhbFBhdGNoXCJcbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxUZXh0XG5cbmZ1bmN0aW9uIFZpcnR1YWxUZXh0KHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSBTdHJpbmcodGV4dClcbn1cblxuVmlydHVhbFRleHQucHJvdG90eXBlLnZlcnNpb24gPSB2ZXJzaW9uXG5WaXJ0dWFsVGV4dC5wcm90b3R5cGUudHlwZSA9IFwiVmlydHVhbFRleHRcIlxuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZShcImlzLW9iamVjdFwiKVxudmFyIGlzSG9vayA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12aG9va1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZQcm9wc1xuXG5mdW5jdGlvbiBkaWZmUHJvcHMoYSwgYikge1xuICAgIHZhciBkaWZmXG5cbiAgICBmb3IgKHZhciBhS2V5IGluIGEpIHtcbiAgICAgICAgaWYgKCEoYUtleSBpbiBiKSkge1xuICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgIGRpZmZbYUtleV0gPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhVmFsdWUgPSBhW2FLZXldXG4gICAgICAgIHZhciBiVmFsdWUgPSBiW2FLZXldXG5cbiAgICAgICAgaWYgKGFWYWx1ZSA9PT0gYlZhbHVlKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGFWYWx1ZSkgJiYgaXNPYmplY3QoYlZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGdldFByb3RvdHlwZShiVmFsdWUpICE9PSBnZXRQcm90b3R5cGUoYVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgZGlmZlthS2V5XSA9IGJWYWx1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hvb2soYlZhbHVlKSkge1xuICAgICAgICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgICAgICBkaWZmW2FLZXldID0gYlZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3REaWZmID0gZGlmZlByb3BzKGFWYWx1ZSwgYlZhbHVlKVxuICAgICAgICAgICAgICAgIGlmIChvYmplY3REaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIGRpZmZbYUtleV0gPSBvYmplY3REaWZmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgIGRpZmZbYUtleV0gPSBiVmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGJLZXkgaW4gYikge1xuICAgICAgICBpZiAoIShiS2V5IGluIGEpKSB7XG4gICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgZGlmZltiS2V5XSA9IGJbYktleV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaWZmXG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSlcbiAgfSBlbHNlIGlmICh2YWx1ZS5fX3Byb3RvX18pIHtcbiAgICByZXR1cm4gdmFsdWUuX19wcm90b19fXG4gIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlXG4gIH1cbn1cbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZShcIngtaXMtYXJyYXlcIilcblxudmFyIFZQYXRjaCA9IHJlcXVpcmUoXCIuLi92bm9kZS92cGF0Y2hcIilcbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZub2RlXCIpXG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12dGV4dFwiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdGh1bmtcIilcbnZhciBoYW5kbGVUaHVuayA9IHJlcXVpcmUoXCIuLi92bm9kZS9oYW5kbGUtdGh1bmtcIilcblxudmFyIGRpZmZQcm9wcyA9IHJlcXVpcmUoXCIuL2RpZmYtcHJvcHNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG5cbmZ1bmN0aW9uIGRpZmYoYSwgYikge1xuICAgIHZhciBwYXRjaCA9IHsgYTogYSB9XG4gICAgd2FsayhhLCBiLCBwYXRjaCwgMClcbiAgICByZXR1cm4gcGF0Y2hcbn1cblxuZnVuY3Rpb24gd2FsayhhLCBiLCBwYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYXBwbHkgPSBwYXRjaFtpbmRleF1cbiAgICB2YXIgYXBwbHlDbGVhciA9IGZhbHNlXG5cbiAgICBpZiAoaXNUaHVuayhhKSB8fCBpc1RodW5rKGIpKSB7XG4gICAgICAgIHRodW5rcyhhLCBiLCBwYXRjaCwgaW5kZXgpXG4gICAgfSBlbHNlIGlmIChiID09IG51bGwpIHtcblxuICAgICAgICAvLyBJZiBhIGlzIGEgd2lkZ2V0IHdlIHdpbGwgYWRkIGEgcmVtb3ZlIHBhdGNoIGZvciBpdFxuICAgICAgICAvLyBPdGhlcndpc2UgYW55IGNoaWxkIHdpZGdldHMvaG9va3MgbXVzdCBiZSBkZXN0cm95ZWQuXG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgYWRkaW5nIHR3byByZW1vdmUgcGF0Y2hlcyBmb3IgYSB3aWRnZXQuXG4gICAgICAgIGlmICghaXNXaWRnZXQoYSkpIHtcbiAgICAgICAgICAgIGNsZWFyU3RhdGUoYSwgcGF0Y2gsIGluZGV4KVxuICAgICAgICAgICAgYXBwbHkgPSBwYXRjaFtpbmRleF1cbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlJFTU9WRSwgYSwgYikpXG4gICAgfSBlbHNlIGlmIChpc1ZOb2RlKGIpKSB7XG4gICAgICAgIGlmIChpc1ZOb2RlKGEpKSB7XG4gICAgICAgICAgICBpZiAoYS50YWdOYW1lID09PSBiLnRhZ05hbWUgJiZcbiAgICAgICAgICAgICAgICBhLm5hbWVzcGFjZSA9PT0gYi5uYW1lc3BhY2UgJiZcbiAgICAgICAgICAgICAgICBhLmtleSA9PT0gYi5rZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHNQYXRjaCA9IGRpZmZQcm9wcyhhLnByb3BlcnRpZXMsIGIucHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNQYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZQYXRjaChWUGF0Y2guUFJPUFMsIGEsIHByb3BzUGF0Y2gpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBseSA9IGRpZmZDaGlsZHJlbihhLCBiLCBwYXRjaCwgYXBwbHksIGluZGV4KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WTk9ERSwgYSwgYikpXG4gICAgICAgICAgICAgICAgYXBwbHlDbGVhciA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlZOT0RFLCBhLCBiKSlcbiAgICAgICAgICAgIGFwcGx5Q2xlYXIgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVlRleHQoYikpIHtcbiAgICAgICAgaWYgKCFpc1ZUZXh0KGEpKSB7XG4gICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WVEVYVCwgYSwgYikpXG4gICAgICAgICAgICBhcHBseUNsZWFyID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGEudGV4dCAhPT0gYi50ZXh0KSB7XG4gICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WVEVYVCwgYSwgYikpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzV2lkZ2V0KGIpKSB7XG4gICAgICAgIGlmICghaXNXaWRnZXQoYSkpIHtcbiAgICAgICAgICAgIGFwcGx5Q2xlYXIgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5XSURHRVQsIGEsIGIpKVxuICAgIH1cblxuICAgIGlmIChhcHBseSkge1xuICAgICAgICBwYXRjaFtpbmRleF0gPSBhcHBseVxuICAgIH1cblxuICAgIGlmIChhcHBseUNsZWFyKSB7XG4gICAgICAgIGNsZWFyU3RhdGUoYSwgcGF0Y2gsIGluZGV4KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlmZkNoaWxkcmVuKGEsIGIsIHBhdGNoLCBhcHBseSwgaW5kZXgpIHtcbiAgICB2YXIgYUNoaWxkcmVuID0gYS5jaGlsZHJlblxuICAgIHZhciBvcmRlcmVkU2V0ID0gcmVvcmRlcihhQ2hpbGRyZW4sIGIuY2hpbGRyZW4pXG4gICAgdmFyIGJDaGlsZHJlbiA9IG9yZGVyZWRTZXQuY2hpbGRyZW5cblxuICAgIHZhciBhTGVuID0gYUNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciBiTGVuID0gYkNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciBsZW4gPSBhTGVuID4gYkxlbiA/IGFMZW4gOiBiTGVuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBsZWZ0Tm9kZSA9IGFDaGlsZHJlbltpXVxuICAgICAgICB2YXIgcmlnaHROb2RlID0gYkNoaWxkcmVuW2ldXG4gICAgICAgIGluZGV4ICs9IDFcblxuICAgICAgICBpZiAoIWxlZnROb2RlKSB7XG4gICAgICAgICAgICBpZiAocmlnaHROb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXNzIG5vZGVzIGluIGIgbmVlZCB0byBiZSBhZGRlZFxuICAgICAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWUGF0Y2goVlBhdGNoLklOU0VSVCwgbnVsbCwgcmlnaHROb2RlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhbGsobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgcGF0Y2gsIGluZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzVk5vZGUobGVmdE5vZGUpICYmIGxlZnROb2RlLmNvdW50KSB7XG4gICAgICAgICAgICBpbmRleCArPSBsZWZ0Tm9kZS5jb3VudFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yZGVyZWRTZXQubW92ZXMpIHtcbiAgICAgICAgLy8gUmVvcmRlciBub2RlcyBsYXN0XG4gICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goXG4gICAgICAgICAgICBWUGF0Y2guT1JERVIsXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgb3JkZXJlZFNldC5tb3Zlc1xuICAgICAgICApKVxuICAgIH1cblxuICAgIHJldHVybiBhcHBseVxufVxuXG5mdW5jdGlvbiBjbGVhclN0YXRlKHZOb2RlLCBwYXRjaCwgaW5kZXgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBzaW5nbGUgd2Fsaywgbm90IHR3b1xuICAgIHVuaG9vayh2Tm9kZSwgcGF0Y2gsIGluZGV4KVxuICAgIGRlc3Ryb3lXaWRnZXRzKHZOb2RlLCBwYXRjaCwgaW5kZXgpXG59XG5cbi8vIFBhdGNoIHJlY29yZHMgZm9yIGFsbCBkZXN0cm95ZWQgd2lkZ2V0cyBtdXN0IGJlIGFkZGVkIGJlY2F1c2Ugd2UgbmVlZFxuLy8gYSBET00gbm9kZSByZWZlcmVuY2UgZm9yIHRoZSBkZXN0cm95IGZ1bmN0aW9uXG5mdW5jdGlvbiBkZXN0cm95V2lkZ2V0cyh2Tm9kZSwgcGF0Y2gsIGluZGV4KSB7XG4gICAgaWYgKGlzV2lkZ2V0KHZOb2RlKSkge1xuICAgICAgICBpZiAodHlwZW9mIHZOb2RlLmRlc3Ryb3kgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcGF0Y2hbaW5kZXhdID0gYXBwZW5kUGF0Y2goXG4gICAgICAgICAgICAgICAgcGF0Y2hbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5ldyBWUGF0Y2goVlBhdGNoLlJFTU9WRSwgdk5vZGUsIG51bGwpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVk5vZGUodk5vZGUpICYmICh2Tm9kZS5oYXNXaWRnZXRzIHx8IHZOb2RlLmhhc1RodW5rcykpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW5cbiAgICAgICAgdmFyIGxlbiA9IGNoaWxkcmVuLmxlbmd0aFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgaW5kZXggKz0gMVxuXG4gICAgICAgICAgICBkZXN0cm95V2lkZ2V0cyhjaGlsZCwgcGF0Y2gsIGluZGV4KVxuXG4gICAgICAgICAgICBpZiAoaXNWTm9kZShjaGlsZCkgJiYgY2hpbGQuY291bnQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSBjaGlsZC5jb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RodW5rKHZOb2RlKSkge1xuICAgICAgICB0aHVua3Modk5vZGUsIG51bGwsIHBhdGNoLCBpbmRleClcbiAgICB9XG59XG5cbi8vIENyZWF0ZSBhIHN1Yi1wYXRjaCBmb3IgdGh1bmtzXG5mdW5jdGlvbiB0aHVua3MoYSwgYiwgcGF0Y2gsIGluZGV4KSB7XG4gICAgdmFyIG5vZGVzID0gaGFuZGxlVGh1bmsoYSwgYilcbiAgICB2YXIgdGh1bmtQYXRjaCA9IGRpZmYobm9kZXMuYSwgbm9kZXMuYilcbiAgICBpZiAoaGFzUGF0Y2hlcyh0aHVua1BhdGNoKSkge1xuICAgICAgICBwYXRjaFtpbmRleF0gPSBuZXcgVlBhdGNoKFZQYXRjaC5USFVOSywgbnVsbCwgdGh1bmtQYXRjaClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc1BhdGNoZXMocGF0Y2gpIHtcbiAgICBmb3IgKHZhciBpbmRleCBpbiBwYXRjaCkge1xuICAgICAgICBpZiAoaW5kZXggIT09IFwiYVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIEV4ZWN1dGUgaG9va3Mgd2hlbiB0d28gbm9kZXMgYXJlIGlkZW50aWNhbFxuZnVuY3Rpb24gdW5ob29rKHZOb2RlLCBwYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoaXNWTm9kZSh2Tm9kZSkpIHtcbiAgICAgICAgaWYgKHZOb2RlLmhvb2tzKSB7XG4gICAgICAgICAgICBwYXRjaFtpbmRleF0gPSBhcHBlbmRQYXRjaChcbiAgICAgICAgICAgICAgICBwYXRjaFtpbmRleF0sXG4gICAgICAgICAgICAgICAgbmV3IFZQYXRjaChcbiAgICAgICAgICAgICAgICAgICAgVlBhdGNoLlBST1BTLFxuICAgICAgICAgICAgICAgICAgICB2Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkS2V5cyh2Tm9kZS5ob29rcylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodk5vZGUuZGVzY2VuZGFudEhvb2tzIHx8IHZOb2RlLmhhc1RodW5rcykge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW5cbiAgICAgICAgICAgIHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgIGluZGV4ICs9IDFcblxuICAgICAgICAgICAgICAgIHVuaG9vayhjaGlsZCwgcGF0Y2gsIGluZGV4KVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzVk5vZGUoY2hpbGQpICYmIGNoaWxkLmNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IGNoaWxkLmNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RodW5rKHZOb2RlKSkge1xuICAgICAgICB0aHVua3Modk5vZGUsIG51bGwsIHBhdGNoLCBpbmRleClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVuZGVmaW5lZEtleXMob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBMaXN0IGRpZmYsIG5haXZlIGxlZnQgdG8gcmlnaHQgcmVvcmRlcmluZ1xuZnVuY3Rpb24gcmVvcmRlcihhQ2hpbGRyZW4sIGJDaGlsZHJlbikge1xuICAgIC8vIE8oTSkgdGltZSwgTyhNKSBtZW1vcnlcbiAgICB2YXIgYkNoaWxkSW5kZXggPSBrZXlJbmRleChiQ2hpbGRyZW4pXG4gICAgdmFyIGJLZXlzID0gYkNoaWxkSW5kZXgua2V5c1xuICAgIHZhciBiRnJlZSA9IGJDaGlsZEluZGV4LmZyZWVcblxuICAgIGlmIChiRnJlZS5sZW5ndGggPT09IGJDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBiQ2hpbGRyZW4sXG4gICAgICAgICAgICBtb3ZlczogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTyhOKSB0aW1lLCBPKE4pIG1lbW9yeVxuICAgIHZhciBhQ2hpbGRJbmRleCA9IGtleUluZGV4KGFDaGlsZHJlbilcbiAgICB2YXIgYUtleXMgPSBhQ2hpbGRJbmRleC5rZXlzXG4gICAgdmFyIGFGcmVlID0gYUNoaWxkSW5kZXguZnJlZVxuXG4gICAgaWYgKGFGcmVlLmxlbmd0aCA9PT0gYUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGJDaGlsZHJlbixcbiAgICAgICAgICAgIG1vdmVzOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPKE1BWChOLCBNKSkgbWVtb3J5XG4gICAgdmFyIG5ld0NoaWxkcmVuID0gW11cblxuICAgIHZhciBmcmVlSW5kZXggPSAwXG4gICAgdmFyIGZyZWVDb3VudCA9IGJGcmVlLmxlbmd0aFxuICAgIHZhciBkZWxldGVkSXRlbXMgPSAwXG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggYSBhbmQgbWF0Y2ggYSBub2RlIGluIGJcbiAgICAvLyBPKE4pIHRpbWUsXG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgYUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhSXRlbSA9IGFDaGlsZHJlbltpXVxuICAgICAgICB2YXIgaXRlbUluZGV4XG5cbiAgICAgICAgaWYgKGFJdGVtLmtleSkge1xuICAgICAgICAgICAgaWYgKGJLZXlzLmhhc093blByb3BlcnR5KGFJdGVtLmtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBNYXRjaCB1cCB0aGUgb2xkIGtleXNcbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBiS2V5c1thSXRlbS5rZXldXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChiQ2hpbGRyZW5baXRlbUluZGV4XSlcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgb2xkIGtleWVkIGl0ZW1zXG4gICAgICAgICAgICAgICAgaXRlbUluZGV4ID0gaSAtIGRlbGV0ZWRJdGVtcysrXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTWF0Y2ggdGhlIGl0ZW0gaW4gYSB3aXRoIHRoZSBuZXh0IGZyZWUgaXRlbSBpbiBiXG4gICAgICAgICAgICBpZiAoZnJlZUluZGV4IDwgZnJlZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgaXRlbUluZGV4ID0gYkZyZWVbZnJlZUluZGV4KytdXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChiQ2hpbGRyZW5baXRlbUluZGV4XSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgYXJlIG5vIGZyZWUgaXRlbXMgaW4gYiB0byBtYXRjaCB3aXRoXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZyZWUgaXRlbXMgaW4gYSwgc28gdGhlIGV4dHJhIGZyZWUgbm9kZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgZGVsZXRlZC5cbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBpIC0gZGVsZXRlZEl0ZW1zKytcbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGFzdEZyZWVJbmRleCA9IGZyZWVJbmRleCA+PSBiRnJlZS5sZW5ndGggP1xuICAgICAgICBiQ2hpbGRyZW4ubGVuZ3RoIDpcbiAgICAgICAgYkZyZWVbZnJlZUluZGV4XVxuXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGIgYW5kIGFwcGVuZCBhbnkgbmV3IGtleXNcbiAgICAvLyBPKE0pIHRpbWVcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJDaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbmV3SXRlbSA9IGJDaGlsZHJlbltqXVxuXG4gICAgICAgIGlmIChuZXdJdGVtLmtleSkge1xuICAgICAgICAgICAgaWYgKCFhS2V5cy5oYXNPd25Qcm9wZXJ0eShuZXdJdGVtLmtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgYW55IG5ldyBrZXllZCBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBhZGRpbmcgbmV3IGl0ZW1zIHRvIHRoZSBlbmQgYW5kIHRoZW4gc29ydGluZyB0aGVtXG4gICAgICAgICAgICAgICAgLy8gaW4gcGxhY2UuIEluIGZ1dHVyZSB3ZSBzaG91bGQgaW5zZXJ0IG5ldyBpdGVtcyBpbiBwbGFjZS5cbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0l0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaiA+PSBsYXN0RnJlZUluZGV4KSB7XG4gICAgICAgICAgICAvLyBBZGQgYW55IGxlZnRvdmVyIG5vbi1rZXllZCBpdGVtc1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXdJdGVtKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNpbXVsYXRlID0gbmV3Q2hpbGRyZW4uc2xpY2UoKVxuICAgIHZhciBzaW11bGF0ZUluZGV4ID0gMFxuICAgIHZhciByZW1vdmVzID0gW11cbiAgICB2YXIgaW5zZXJ0cyA9IFtdXG4gICAgdmFyIHNpbXVsYXRlSXRlbVxuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBiQ2hpbGRyZW4ubGVuZ3RoOykge1xuICAgICAgICB2YXIgd2FudGVkSXRlbSA9IGJDaGlsZHJlbltrXVxuICAgICAgICBzaW11bGF0ZUl0ZW0gPSBzaW11bGF0ZVtzaW11bGF0ZUluZGV4XVxuXG4gICAgICAgIC8vIHJlbW92ZSBpdGVtc1xuICAgICAgICB3aGlsZSAoc2ltdWxhdGVJdGVtID09PSBudWxsICYmIHNpbXVsYXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVtb3Zlcy5wdXNoKHJlbW92ZShzaW11bGF0ZSwgc2ltdWxhdGVJbmRleCwgbnVsbCkpXG4gICAgICAgICAgICBzaW11bGF0ZUl0ZW0gPSBzaW11bGF0ZVtzaW11bGF0ZUluZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaW11bGF0ZUl0ZW0gfHwgc2ltdWxhdGVJdGVtLmtleSAhPT0gd2FudGVkSXRlbS5rZXkpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIG5lZWQgYSBrZXkgaW4gdGhpcyBwb3NpdGlvbi4uLlxuICAgICAgICAgICAgaWYgKHdhbnRlZEl0ZW0ua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpbXVsYXRlSXRlbSAmJiBzaW11bGF0ZUl0ZW0ua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGFuIGluc2VydCBkb2Vzbid0IHB1dCB0aGlzIGtleSBpbiBwbGFjZSwgaXQgbmVlZHMgdG8gbW92ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYktleXNbc2ltdWxhdGVJdGVtLmtleV0gIT09IGsgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVzLnB1c2gocmVtb3ZlKHNpbXVsYXRlLCBzaW11bGF0ZUluZGV4LCBzaW11bGF0ZUl0ZW0ua2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbXVsYXRlSXRlbSA9IHNpbXVsYXRlW3NpbXVsYXRlSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmVtb3ZlIGRpZG4ndCBwdXQgdGhlIHdhbnRlZCBpdGVtIGluIHBsYWNlLCB3ZSBuZWVkIHRvIGluc2VydCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaW11bGF0ZUl0ZW0gfHwgc2ltdWxhdGVJdGVtLmtleSAhPT0gd2FudGVkSXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRzLnB1c2goe2tleTogd2FudGVkSXRlbS5rZXksIHRvOiBrfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZW1zIGFyZSBtYXRjaGluZywgc28gc2tpcCBhaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdGVJbmRleCsrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRzLnB1c2goe2tleTogd2FudGVkSXRlbS5rZXksIHRvOiBrfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0cy5wdXNoKHtrZXk6IHdhbnRlZEl0ZW0ua2V5LCB0bzoga30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYSBrZXkgaW4gc2ltdWxhdGUgaGFzIG5vIG1hdGNoaW5nIHdhbnRlZCBrZXksIHJlbW92ZSBpdFxuICAgICAgICAgICAgZWxzZSBpZiAoc2ltdWxhdGVJdGVtICYmIHNpbXVsYXRlSXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVzLnB1c2gocmVtb3ZlKHNpbXVsYXRlLCBzaW11bGF0ZUluZGV4LCBzaW11bGF0ZUl0ZW0ua2V5KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpbXVsYXRlSW5kZXgrK1xuICAgICAgICAgICAgaysrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIHRoZSByZW1haW5pbmcgbm9kZXMgZnJvbSBzaW11bGF0ZVxuICAgIHdoaWxlKHNpbXVsYXRlSW5kZXggPCBzaW11bGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgc2ltdWxhdGVJdGVtID0gc2ltdWxhdGVbc2ltdWxhdGVJbmRleF1cbiAgICAgICAgcmVtb3Zlcy5wdXNoKHJlbW92ZShzaW11bGF0ZSwgc2ltdWxhdGVJbmRleCwgc2ltdWxhdGVJdGVtICYmIHNpbXVsYXRlSXRlbS5rZXkpKVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBvbmx5IG1vdmVzIHdlIGhhdmUgYXJlIGRlbGV0ZXMgdGhlbiB3ZSBjYW4ganVzdFxuICAgIC8vIGxldCB0aGUgZGVsZXRlIHBhdGNoIHJlbW92ZSB0aGVzZSBpdGVtcy5cbiAgICBpZiAocmVtb3Zlcy5sZW5ndGggPT09IGRlbGV0ZWRJdGVtcyAmJiAhaW5zZXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBuZXdDaGlsZHJlbixcbiAgICAgICAgICAgIG1vdmVzOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZHJlbjogbmV3Q2hpbGRyZW4sXG4gICAgICAgIG1vdmVzOiB7XG4gICAgICAgICAgICByZW1vdmVzOiByZW1vdmVzLFxuICAgICAgICAgICAgaW5zZXJ0czogaW5zZXJ0c1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpbmRleCwga2V5KSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZyb206IGluZGV4LFxuICAgICAgICBrZXk6IGtleVxuICAgIH1cbn1cblxuZnVuY3Rpb24ga2V5SW5kZXgoY2hpbGRyZW4pIHtcbiAgICB2YXIga2V5cyA9IHt9XG4gICAgdmFyIGZyZWUgPSBbXVxuICAgIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblxuICAgICAgICBpZiAoY2hpbGQua2V5KSB7XG4gICAgICAgICAgICBrZXlzW2NoaWxkLmtleV0gPSBpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcmVlLnB1c2goaSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGtleXM6IGtleXMsICAgICAvLyBBIGhhc2ggb2Yga2V5IG5hbWUgdG8gaW5kZXhcbiAgICAgICAgZnJlZTogZnJlZSAgICAgIC8vIEFuIGFycmF5IG9mIHVua2V5ZWQgaXRlbSBpbmRpY2VzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRQYXRjaChhcHBseSwgcGF0Y2gpIHtcbiAgICBpZiAoYXBwbHkpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkoYXBwbHkpKSB7XG4gICAgICAgICAgICBhcHBseS5wdXNoKHBhdGNoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHkgPSBbYXBwbHksIHBhdGNoXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwcGx5XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGNoXG4gICAgfVxufVxuIiwidmFyIG5hdGl2ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlSXNBcnJheSB8fCBpc0FycmF5XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1vY2tfMSA9IHJlcXVpcmUoXCIuL21vY2tpbmcvbW9ja1wiKTtcbnZhciBwYWdlXzEgPSByZXF1aXJlKFwiLi9wYWdlL3BhZ2VcIik7XG4vLyBjb25zdCBtZW51MSA9IG5ldyBNZW51KFswLCAwLCA1MCwgNTBdLCB7XG4vLyAgICAgdGl0bGU6IFwiTXkgbWVudSFcIixcbi8vICAgICBtZW51SXRlbXM6IFtcInRlc3QxXCIsIFwidGVzdDJcIiwgXCJ0ZXN0M1wiXSxcbi8vIH0pO1xuLy8gbWVudTEuZGVidWdPbihcInJlZFwiKTtcbi8vIGNvbnN0IG1lbnUyID0gbmV3IE1lbnUoWzAsIDAsIDUwLCA1MF0sIHtcbi8vICAgICB0aXRsZTogXCJNeSBtZW51IGhhcyBjaGFuZ2VkXCIsXG4vLyAgICAgbWVudUl0ZW1zOiBbXCJ0ZXN0MVwiXSxcbi8vIH0pO1xuLy8gbWVudTIuZGVidWdPbihcInJlZFwiKTtcbi8vIGNvbnN0IHNpZGVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKFswLCAwLCAyNSwgMTAwXSwgeyBjaGlsZHJlbjogbWVudTEgfSk7XG4vLyBzaWRlQ29udGFpbmVyLmRlYnVnT24oXCJibHVlXCIpO1xuLy8gY29uc3QgdGVzdFBhZ2UgPSBuZXcgUGFnZShcInRlc3RQYWdlXCIsIHNpZGVDb250YWluZXIpO1xudmFyIGNvdW50ZXJQYWdlID0gbmV3IHBhZ2VfMS5QYWdlKFwiY291bnRlclwiKS5hZGRSb290SW1hZ2UobmV3IG1vY2tfMS5Db250YWluZXIxKFswLCAwLCA1MCwgNTBdKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
