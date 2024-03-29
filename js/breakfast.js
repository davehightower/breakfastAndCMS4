/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */

function calcTime(e) {
    d = new Date;
    var t = -d.getTimezoneOffset() / 60;
    return new Date(d.getTime() - (t - e) * 36e5)
}
function isDST() {
    var e = new Date,
        t = e.getFullYear(),
        n = new Date("March 14, " + t + " 02:00:00"),
        r = new Date("November 07, " + t + " 02:00:00"),
        i = n.getDay();
    return n.setDate(14 - i), i = r.getDay(), r.setDate(7 - i), e >= n && e < r
}
function setTime() {
    function n(e) {
        var t = e.getHours() + 1,
            n = t >= 12 ? "pm" : "am";
        t == 24 && (n = "am");
        var r = e.getMinutes();
        t > 12 && (t -= 12), t < 10 && (t = "0" + t), r < 10 && (r = "0" + r);
        var i = timeInt % 2 == 0 ? "<span>:</span>" : "<span class='grey'>:</span>";
        return t + i + r + '<span class="info_text_smaller">' + n + "</span>"
    }
    clearTimeout(clockTimeout), timeInt++;
    var e = calcTime(sfOffset),
        t = calcTime(nyOffset);
    $("#sf_time").html(n(e)), $("#ny_time").html(n(t)), clockTimeout = setTimeout(setTime, 500)
}(function(e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0
        }), t
    }
    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }
    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }
    function et() {
        return !1
    }
    function tt() {
        return !0
    }
    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function at(e, t) {
        do e = e[t];
        while (e && e.nodeType !== 1);
        return e
    }
    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function(e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function(e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }
    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u) for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }
    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }
    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }
    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }
    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }
    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }
    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }
    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }
    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }
    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function(t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object") for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }
    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n)) for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }
    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }
    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }
    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i) for (s in a) if (a[s] && a[s].test(i)) {
            f.unshift(s);
            break
        }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }
    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {},
            f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];) if (i !== "*") {
            if (u !== "*" && u !== i) {
                n = a[u + " " + i] || a["* " + i];
                if (!n) for (r in a) {
                    s = r.split(" ");
                    if (s[1] === i) {
                        n = a[u + " " + s[0]] || a["* " + s[0]];
                        if (n) {
                            n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                            break
                        }
                    }
                }
                if (n !== !0) if (n && e["throws"]) t = n(t);
                else try {
                    t = n(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: n ? l : "No conversion from " + u + " to " + i
                    }
                }
            }
            u = i
        }
        return {
            state: "success",
            data: t
        }
    }
    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function $n() {
        return setTimeout(function() {
            qn = t
        }, 0), qn = v.now()
    }
    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++) if (r[i].call(e, t, n)) return
        })
    }
    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }
    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
                v(e).hide()
            }), h.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }
    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }
    function Zn(e, t) {
        var n, r = {
            height: e
        },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function(e, t) {
            return new v.fn.init(e, t, n)
        },
        m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function(e, t) {
            return (t + "").toUpperCase()
        },
        A = function() {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        },
        O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return v.each(this, e, t)
        },
        ready: function(e) {
            return v.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++) if ((e = arguments[a]) != null) for (n in e) {
            r = u[n], i = e[n];
            if (u === i) continue;
            l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
        }
        return u
    }, v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray ||
        function(e) {
            return v.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e) if (n.apply(e[i], r) === !1) break
                } else for (; s < o;) if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e) if (n.call(e[i], i, e[i]) === !1) break
            } else for (; s < o;) if (n.call(e[s], s, e[s++]) === !1) break;
            return e
        },
        trim: d && !d.call("﻿ ") ?
        function(e) {
            return e == null ? "" : d.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number") for (; s < r; s++) e[i++] = n[s];
            else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !! n;
            for (; s < o; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f) for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n) for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll &&
                function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++) if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function(t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function() {
                    return a && v.each(arguments, function(e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function(e) {
                    return v.inArray(e, a) > -1
                },
                empty: function() {
                    return a = [], this
                },
                disable: function() {
                    return a = f = n = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, n || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                ["notify", "progress", v.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return v.Deferred(function(n) {
                            v.each(t, function(t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ?
                                function() {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? v.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, v.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent) for (l in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !! e && !B(e)
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function() {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;
                    else {
                        s = " " + i.className + " ";
                        for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                        i.className = v.trim(s)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++) while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function(e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
            r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                return typeof v == "undefined" || !! e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d), m = a[c];
                if (!m) {
                    m = a[c] = [], m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events)) return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                if (!u) {
                    for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                    b = [];
                if (Y.test(y + v.event.triggered)) return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1) return;
                m = [
                    [s, p.bindType || y]
                ];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
            }
            return
        },
        dispatch: function(n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                m = d.delegateCount,
                g = l.call(arguments),
                y = !n.exclusive && !n.namespace,
                b = v.event.special[n.type] || {},
                w = [];
            g[0] = n, n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
            if (m && (!n.button || n.type !== "click")) for (s = n.target; s != this; s = s.parentNode || this) if (s.disabled !== !0 || n.type !== "click") {
                u = {}, f = [];
                for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                f.length && w.push({
                    elem: s,
                    matches: f
                })
            }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r], n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n), n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, s, o, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[v.expando]) return e;
            var t, n, r = e,
                s = v.event.fixHooks[e.type] || {},
                o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t;) n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
    }, v.Event = function(e, t) {
        if (!(this instanceof v.Event)) return new v.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
    }, v.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    }, v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj,
                    o = s.selector;
                if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), v.support.submitBubbles || (v.event.special.submit = {
        setup: function() {
            if (v.nodeName(this, "form")) return !1;
            v.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), v._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (v.nodeName(this, "form")) return !1;
            v.event.remove(this, "._submit")
        }
    }), v.support.changeBubbles || (v.event.special.change = {
        setup: function() {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), v.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }), v._data(t, "_change_attached", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return v.event.remove(this, "._change"), !$.test(this.nodeName)
        }
    }), v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                v.event.simulate(t, e.target, v.event.fix(e), !0)
            };
        v.event.special[t] = {
            setup: function() {
                n++ === 0 && i.addEventListener(e, r, !0)
            },
            teardown: function() {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }), v.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = et;
            else if (!i) return this;
            return s === 1 && (o = i, i = function(e) {
                return v().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                v.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = et), this.each(function() {
                v.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return v(this.context).on(e, this.selector, t, n), this
        },
        die: function(e, t) {
            return v(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0]) return v.event.trigger(e, t, this[0], !0)
        },
        toggle: function(e) {
            var t = arguments,
                n = e.guid || v.guid++,
                r = 0,
                i = function(n) {
                    var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                    return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        v.fn[t] = function(e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }), function(e, t) {
        function nt(e, t, n, r) {
            n = n || [], t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string") return n;
            if (l !== 1 && l !== 9) return [];
            a = o(t);
            if (!a && !r) if (i = R.exec(e)) if (f = i[1]) {
                if (l === 9) {
                    s = t.getElementById(f);
                    if (!s || !s.parentNode) return n;
                    if (s.id === f) return n.push(s), n
                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
            } else {
                if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
            }
            return vt(e.replace(j, "$1"), t, n, r, a)
        }
        function rt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function it(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function st(e) {
            return N(function(t) {
                return t = +t, N(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ot(e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }
        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                if (!n) break
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
        }
        function at(e, t, r) {
            var i = t.dir,
                s = r && t.dir === "parentNode",
                o = w++;
            return t.first ?
            function(t, n, r) {
                while (t = t[i]) if (s || t.nodeType === 1) return e(t, n, r)
            } : function(t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ",
                        l = f + n;
                    while (t = t[i]) if (s || t.nodeType === 1) {
                        if ((a = t[d]) === l) return t.sizset;
                        if (typeof a == "string" && a.indexOf(f) === 0) {
                            if (t.sizset) return t
                        } else {
                            t[d] = l;
                            if (e(t, r, u)) return t.sizset = !0, t;
                            t.sizset = !1
                        }
                    }
                } else while (t = t[i]) if (s || t.nodeType === 1) if (e(t, r, u)) return t
            }
        }
        function ft(e) {
            return e.length > 1 ?
            function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function lt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }
        function ct(e, t, n, r, i, s) {
            return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = lt(g, p), r(f, [], u, a), l = f.length;
                    while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
            })
        }
        function ht(e) {
            var t, n, r, s = e.length,
                o = i.relative[e[0].type],
                u = o || i.relative[" "],
                a = o ? 1 : 0,
                f = at(function(e) {
                    return e === t
                }, u, !0),
                l = at(function(e) {
                    return T.call(t, e) > -1
                }, u, !0),
                h = [function(e, n, r) {
                    return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                }];
            for (; a < s; a++) if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
            else {
                n = i.filter[e[a].type].apply(null, e[a].matches);
                if (n[d]) {
                    r = ++a;
                    for (; r < s; r++) if (i.relative[e[r].type]) break;
                    return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                }
                h.push(n)
            }
            return ft(h)
        }
        function pt(e, t) {
            var r = t.length > 0,
                s = e.length > 0,
                o = function(u, a, f, l, h) {
                    var p, d, v, m = [],
                        y = 0,
                        w = "0",
                        x = u && [],
                        T = h != null,
                        N = c,
                        C = u || s && i.find.TAG("*", h && a.parentNode || a),
                        k = b += N == null ? 1 : Math.E;
                    T && (c = a !== g && a, n = o.el);
                    for (;
                    (p = C[w]) != null; w++) {
                        if (s && p) {
                            for (d = 0; v = e[d]; d++) if (v(p, a, f)) {
                                l.push(p);
                                break
                            }
                            T && (b = k, n = ++o.el)
                        }
                        r && ((p = !v && p) && y--, u && x.push(p))
                    }
                    y += w;
                    if (r && w !== y) {
                        for (d = 0; v = t[d]; d++) v(x, m, a, f);
                        if (u) {
                            if (y > 0) while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
                            m = lt(m)
                        }
                        S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                    }
                    return T && (b = k, c = N), x
                };
            return o.el = 0, r ? N(o) : o
        }
        function dt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) nt(e, t[r], n);
            return n
        }
        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e),
                p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t) return n;
                    e = e.slice(u.shift().length)
                }
                for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type]) break;
                    if (c = i.find[l]) if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                        u.splice(o, 1), e = r.length && u.join("");
                        if (!e) return S.apply(n, x.call(r, 0)), n;
                        break
                    }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)), n
        }
        function mt() {}
        var n, r, i, s, o, u, a, f, l, c, h = !0,
            p = "undefined",
            d = ("sizcache" + Math.random()).replace(".", ""),
            m = String,
            g = e.document,
            y = g.documentElement,
            b = 0,
            w = 0,
            E = [].pop,
            S = [].push,
            x = [].slice,
            T = [].indexOf ||
        function(e) {
            var t = 0,
                n = this.length;
            for (; t < n; t++) if (this[t] === e) return t;
            return -1
        }, N = function(e, t) {
            return e[d] = t == null || t, e
        }, C = function() {
            var e = {},
                t = [];
            return N(function(n, r) {
                return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
            }, e)
        }, k = C(), L = C(), A = C(), O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", _ = M.replace("w", "w#"), D = "([*^$|!~]?=)", P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]", H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)", B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"), F = new RegExp("^" + O + "*," + O + "*"), I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"), q = new RegExp(H), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, U = /^:not/, z = /[\x20\t\r\n\f]*[+~]/, W = /:not\($/, X = /h\d/i, V = /input|select|textarea|button/i, $ = /\\(?!\\)/g, J = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + H),
            POS: new RegExp(B, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
            needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
        }, K = function(e) {
            var t = g.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }, Q = K(function(e) {
            return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
        }), G = K(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
        }), Y = K(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string"
        }), Z = K(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
        }), et = K(function(e) {
            e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
            var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
            return r = !g.getElementById(d), y.removeChild(e), t
        });
        try {
            x.call(y.childNodes, 0)[0].nodeType
        } catch (tt) {
            x = function(e) {
                var t, n = [];
                for (; t = this[e]; e++) n.push(t);
                return n
            }
        }
        nt.matches = function(e, t) {
            return nt(e, null, null, t)
        }, nt.matchesSelector = function(e, t) {
            return nt(t, null, null, [e]).length > 0
        }, s = nt.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (i === 3 || i === 4) return e.nodeValue
            } else for (; t = e[r]; r++) n += s(t);
            return n
        }, o = nt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, u = nt.contains = y.contains ?
        function(e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !! (r && r.nodeType === 1 && n.contains && n.contains(r))
        } : y.compareDocumentPosition ?
        function(e, t) {
            return t && !! (e.compareDocumentPosition(t) & 16)
        } : function(e, t) {
            while (t = t.parentNode) if (t === e) return !0;
            return !1
        }, nt.attr = function(e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: r ?
                function(e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                } : function(e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                },
                TAG: Q ?
                function(e, t) {
                    if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                } : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [],
                            s = 0;
                        for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                },
                NAME: et &&
                function(e, t) {
                    if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                },
                CLASS: Z &&
                function(e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n;
                    if (J.CHILD.test(e[0])) return null;
                    if (e[3]) e[2] = e[3];
                    else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: r ?
                function(e) {
                    return e = e.replace($, ""), function(t) {
                        return t.getAttribute("id") === e
                    }
                } : function(e) {
                    return e = e.replace($, ""), function(t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                },
                TAG: function(e) {
                    return e === "*" ?
                    function() {
                        return !0
                    } : (e = e.replace($, "").toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = k[d][e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r) {
                    return e === "nth" ?
                    function(e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0) return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling) if (t.nodeType === 1) {
                                i++;
                                if (e === t) break
                            }
                        }
                        return i -= r, i === n || i % n === 0 && i / n >= 0
                    } : function(t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            while (n = n.previousSibling) if (n.nodeType === 1) return !1;
                            if (e === "first") return !0;
                            n = t;
                        case "last":
                            while (n = n.nextSibling) if (n.nodeType === 1) return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: N(function(e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(j, "$1"));
                    return r[d] ? N(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--) if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: N(function(e) {
                    return function(t) {
                        return nt(e, t).length > 0
                    }
                }),
                contains: N(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !! e.checked || t === "option" && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                empty: function(e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function(e) {
                    return X.test(e.nodeName)
                },
                text: function(e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function(e) {
                    return V.test(e.nodeName)
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                },
                first: st(function() {
                    return [0]
                }),
                last: st(function(e, t) {
                    return [t - 1]
                }),
                eq: st(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: st(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: st(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, f = y.compareDocumentPosition ?
        function(e, t) {
            return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        } : function(e, t) {
            if (e === t) return l = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                u = t.parentNode,
                a = o;
            if (o === u) return ot(e, t);
            if (!o) return -1;
            if (!u) return 1;
            while (a) i.unshift(a), a = a.parentNode;
            a = u;
            while (a) s.unshift(a), a = a.parentNode;
            n = i.length, r = s.length;
            for (var f = 0; f < n && f < r; f++) if (i[f] !== s[f]) return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
        }, [0, 0].sort(f), h = !l, nt.uniqueSort = function(e) {
            var t, n = [],
                r = 1,
                i = 0;
            l = h, e.sort(f);
            if (l) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, nt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a = nt.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = A[d][e + " "];
            if (!s) {
                t || (t = ut(e)), n = t.length;
                while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r))
            }
            return s
        }, g.querySelectorAll &&
        function() {
            var e, t = vt,
                n = /'|\\/g,
                r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                i = [":focus"],
                s = [":active"],
                u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
            }), K(function(e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }), i = new RegExp(i.join("|")), vt = function(e, r, s, o, u) {
                if (!o && !u && !i.test(e)) {
                    var a, f, l = !0,
                        c = d,
                        h = r,
                        p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                        while (f--) a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r, p = a.join(",")
                    }
                    if (p) try {
                        return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                    } catch (v) {} finally {
                        l || r.removeAttribute("id")
                    }
                }
                return t(e, r, s, o, u)
            }, u && (K(function(t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                } catch (n) {}
            }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && !i.test(n)) try {
                    var a = u.call(t, n);
                    if (a || e || t.document && t.document.nodeType !== 11) return a
                } catch (f) {}
                return nt(n, null, null, [t]).length > 0
            })
        }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
    }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function() {
                for (t = 0, n = u.length; t < n; t++) if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0) for (i = r; i < o.length; i++) for (s = 0; s < r; s++) if (o[s] === o[i]) {
                    o.splice(i--, 1);
                    break
                }
            }
            return o
        },
        has: function(e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++) if (v.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function(e) {
            return at(e, "nextSibling")
        },
        prev: function(e) {
            return at(e, "previousSibling")
        },
        nextAll: function(e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return v.sibling(e.firstChild)
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
        text: function(e) {
            return v.access(this, function(e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return v.isFunction(e) ? this.each(function(t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = v(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = v.isFunction(e);
            return this.each(function(n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, t) {
            var n, r = 0;
            for (;
            (n = this[r]) != null; r++) if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
            (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild) e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return v.clone(this, e, t)
            })
        },
        html: function(e) {
            return v.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                var n = v(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                var t = this.nextSibling,
                    n = this.parentNode;
                v(this).remove(), t ? v(t).before(e) : v(n).append(e)
            }))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0,
                f = e[0],
                l = [],
                c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                v(this).domManip(e, n, r)
            });
            if (v.isFunction(f)) return this.each(function(i) {
                var s = v(this);
                e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null, l.length && v.each(l, function(e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), v.buildFragment = function(e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
            fragment: s,
            cacheable: o
        }
    }, v.fragments = {}, v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        v.fn[e] = function(n) {
            var r, i = 0,
                s = [],
                o = v(n),
                u = o.length,
                a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
            for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }), v.extend({
        clone: function(e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o), r = Mt(e), i = Mt(o);
                for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) At(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function(e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                b = [];
            if (!t || typeof t.createDocumentFragment == "undefined") t = i;
            for (s = 0;
            (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u) continue;
                if (typeof u == "string") if (!gt.test(u)) u = t.createTextNode(u);
                else {
                    y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                    while (l--) c = c.lastChild;
                    if (!v.support.tbody) {
                        h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                        for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                    }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                }
                u.nodeType ? b.push(u) : v.merge(b, u)
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked) for (s = 0;
            (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function(e) {
                    if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                };
                for (s = 0;
                (u = b[s]) != null; s++) if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
            }
            return b
        },
        cleanData: function(e, t) {
            var n, r, i, s, o = 0,
                u = v.expando,
                a = v.cache,
                f = v.support.deleteExpando,
                l = v.event.special;
            for (;
            (i = e[o]) != null; o++) if (t || v.acceptData(i)) {
                r = i[u], n = r && a[r];
                if (n) {
                    if (n.events) for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                    a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                }
            }
        }
    }), function() {
        var e, t;
        v.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        },
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Yt(this, !0)
        },
        hide: function() {
            return Yt(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
            s(this.name, this.value)
        });
        else for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {},
        xn = {},
        Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {},
                b = {},
                w = {},
                E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2) for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ?
    function() {
        for (var e in Hn) Hn[e](0, 1)
    } : !1, jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return !this.isLocal && Fn() || In()
    } : Fn, function(e) {
        v.extend(v.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (p) {}
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(0, 1)
                }
            }
        }
    });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    s = zn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = v.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, v.style(i.elem, e, u + r);
                        while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function() {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function() {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
            top: 0,
            left: 0
        },
            l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v
    })
})(window), function(e, t) {
    var n = function() {
            var t = e._data(document, "events");
            return t && t.click && e.grep(t.click, function(e) {
                return e.namespace === "rails"
            }).length
        };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function(e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    xhrFields: {
                        withCredentials: f
                    },
                    crossDomain: a
                }, s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function(n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function(t) {
            t.find(r.disableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(r.enableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function(t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function() {
                s = e(this), o = s.is(":checkbox,:radio") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is(":radio") && a.filter('input:radio:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function(e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function(n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function(e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function() {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function(n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function() {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function(t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function(n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function() {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function() {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function() {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function(t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function() {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery), function(e, t) {
    function n(t, n) {
        var i = t.nodeName.toLowerCase();
        return "area" === i ? (n = t.parentNode, i = n.name, !t.href || !i || n.nodeName.toLowerCase() !== "map" ? !1 : (t = e("img[usemap=#" + i + "]")[0], !! t && r(t))) : (/input|select|textarea|button|object/.test(i) ? !t.disabled : "a" == i ? t.href || n : n) && r(t)
    }
    function r(t) {
        return !e(t).parents().andSelf().filter(function() {
            return e.curCSS(this, "visibility") === "hidden" || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.8.13",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, n) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                n = e(this[0]);
                for (var r; n.length && n[0] !== document;) {
                    r = n.css("position");
                    if (r === "absolute" || r === "relative" || r === "fixed") {
                        r = parseInt(n.css("zIndex"), 10);
                        if (!isNaN(r) && r !== 0) return r
                    }
                    n = n.parent()
                }
            }
            return 0
        },
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.each(["Width", "Height"], function(n, r) {
        function i(t, n, r, i) {
            return e.each(s, function() {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, r && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), i && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), n
        }
        var s = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            o = r.toLowerCase(),
            u = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function(n) {
            return n === t ? u["inner" + r].call(this) : this.each(function() {
                e(this).css(o, i(this, n) + "px")
            })
        }, e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function() {
                e(this).css(o, i(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var r = e.attr(t, "tabindex"),
                i = isNaN(r);
            return (i || r >= 0) && n(t, !i)
        }
    }), e(function() {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                t = e.ui[t].prototype;
                for (var i in r) t.plugins[i] = t.plugins[i] || [], t.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                if ((t = e.plugins[t]) && e.element[0].parentNode) for (var r = 0; r < t.length; r++) e.options[t[r][0]] && t[r][1].apply(e.element, n)
            }
        },
        contains: function(e, t) {
            return document.compareDocumentPosition ? e.compareDocumentPosition(t) & 16 : e !== t && e.contains(t)
        },
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            n = n && n === "left" ? "scrollLeft" : "scrollTop";
            var r = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, r = t[n] > 0, t[n] = 0, r)
        },
        isOverAxis: function(e, t, n) {
            return e > t && e < t + n
        },
        isOver: function(t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    }))
}(jQuery), function(e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function(t) {
            for (var r = 0, i;
            (i = t[r]) != null; r++) e(i).triggerHandler("remove");
            n(t)
        }
    } else {
        var r = e.fn.remove;
        e.fn.remove = function(t, n) {
            return this.each(function() {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function() {
                    e(this).triggerHandler("remove")
                }), r.call(e(this), t, n)
            })
        }
    }
    e.widget = function(t, n, r) {
        var i = t.split(".")[0],
            s;
        t = t.split(".")[1], s = i + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][s] = function(n) {
            return !!e.data(n, t)
        }, e[i] = e[i] || {}, e[i][t] = function(e, t) {
            arguments.length && this._createWidget(e, t)
        }, n = new n, n.options = e.extend(!0, {}, n.options), e[i][t].prototype = e.extend(!0, n, {
            namespace: i,
            widgetName: t,
            widgetEventPrefix: e[i][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: s
        }, r), e.widget.bridge(t, e[i][t])
    }, e.widget.bridge = function(n, r) {
        e.fn[n] = function(i) {
            var s = typeof i == "string",
                o = Array.prototype.slice.call(arguments, 1),
                u = this;
            return i = !s && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i, s && i.charAt(0) === "_" ? u : (s ? this.each(function() {
                var r = e.data(this, n),
                    s = r && e.isFunction(r[i]) ? r[i].apply(r, o) : r;
                if (s !== r && s !== t) return u = s, !1
            }) : this.each(function() {
                var t = e.data(this, n);
                t ? t.option(i || {})._init() : e.data(this, n, new r(i, this))
            }), u)
        }
    }, e.Widget = function(e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(t, n) {
            e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function() {
                r.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function() {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n;
            if (arguments.length === 0) return e.extend({}, this.options);
            if (typeof n == "string") {
                if (r === t) return this.options[n];
                i = {}, i[n] = r
            }
            return this._setOptions(i), this
        },
        _setOptions: function(t) {
            var n = this;
            return e.each(t, function(e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, e === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(t, n, r) {
            var i = this.options[t];
            n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), r = r || {};
            if (n.originalEvent) {
                t = e.event.props.length;
                for (var s; t;) s = e.event.props[--t], n[s] = n.originalEvent[s]
            }
            return this.element.trigger(n, r), !(e.isFunction(i) && i.call(this.element[0], n, r) === !1 || n.isDefaultPrevented())
        }
    }
}(jQuery), function(e) {
    var t = !1;
    e(document).mousedown(function() {
        t = !1
    }), e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var r = this,
                    i = n.which == 1,
                    s = typeof this.options.cancel == "string" ? e(n.target).parents().add(n.target).filter(this.options.cancel).length : !1;
                if (!i || s || !this._mouseCapture(n)) return !0;
                this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(n) && this._mouseDelayMet(n)) {
                    this._mouseStarted = this._mouseStart(n) !== !1;
                    if (!this._mouseStarted) return n.preventDefault(), !0
                }
                return !0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return r._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return r._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0
            }
        },
        _mouseMove: function(t) {
            return !e.browser.msie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1) ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery), function(e) {
    e.ui = e.ui || {};
    var t = /left|center|right/,
        n = /top|center|bottom/,
        r = e.fn.position,
        i = e.fn.offset;
    e.fn.position = function(i) {
        if (!i || !i.of) return r.apply(this, arguments);
        i = e.extend({}, i);
        var s = e(i.of),
            u = s[0],
            a = (i.collision || "flip").split(" "),
            f = i.offset ? i.offset.split(" ") : [0, 0],
            l, h, p;
        return u.nodeType === 9 ? (l = s.width(), h = s.height(), p = {
            top: 0,
            left: 0
        }) : u.setTimeout ? (l = s.width(), h = s.height(), p = {
            top: s.scrollTop(),
            left: s.scrollLeft()
        }) : u.preventDefault ? (i.at = "left top", l = h = 0, p = {
            top: i.of.pageY,
            left: i.of.pageX
        }) : (l = s.outerWidth(), h = s.outerHeight(), p = s.offset()), e.each(["my", "at"], function() {
            var e = (i[this] || "").split(" ");
            e.length === 1 && (e = t.test(e[0]) ? e.concat(["center"]) : n.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = t.test(e[0]) ? e[0] : "center", e[1] = n.test(e[1]) ? e[1] : "center", i[this] = e
        }), a.length === 1 && (a[1] = a[0]), f[0] = parseInt(f[0], 10) || 0, f.length === 1 && (f[1] = f[0]), f[1] = parseInt(f[1], 10) || 0, i.at[0] === "right" ? p.left += l : i.at[0] === "center" && (p.left += l / 2), i.at[1] === "bottom" ? p.top += h : i.at[1] === "center" && (p.top += h / 2), p.left += f[0], p.top += f[1], this.each(function() {
            var t = e(this),
                n = t.outerWidth(),
                r = t.outerHeight(),
                s = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
                o = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
                u = n + s + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
                d = r + o + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
                v = e.extend({}, p),
                m;
            i.my[0] === "right" ? v.left -= n : i.my[0] === "center" && (v.left -= n / 2), i.my[1] === "bottom" ? v.top -= r : i.my[1] === "center" && (v.top -= r / 2), v.left = Math.round(v.left), v.top = Math.round(v.top), m = {
                left: v.left - s,
                top: v.top - o
            }, e.each(["left", "top"], function(t, s) {
                e.ui.position[a[t]] && e.ui.position[a[t]][s](v, {
                    targetWidth: l,
                    targetHeight: h,
                    elemWidth: n,
                    elemHeight: r,
                    collisionPosition: m,
                    collisionWidth: u,
                    collisionHeight: d,
                    offset: f,
                    my: i.my,
                    at: i.at
                })
            }), e.fn.bgiframe && t.bgiframe(), t.offset(e.extend(v, {
                using: i.using
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function(t, n) {
                var r = e(window);
                r = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft(), t.left = r > 0 ? t.left - r : Math.max(t.left - n.collisionPosition.left, t.left)
            },
            top: function(t, n) {
                var r = e(window);
                r = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop(), t.top = r > 0 ? t.top - r : Math.max(t.top - n.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function(t, n) {
                if (n.at[0] !== "center") {
                    var r = e(window);
                    r = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft();
                    var i = n.my[0] === "left" ? -n.elemWidth : n.my[0] === "right" ? n.elemWidth : 0,
                        s = n.at[0] === "left" ? n.targetWidth : -n.targetWidth,
                        o = -2 * n.offset[0];
                    t.left += n.collisionPosition.left < 0 ? i + s + o : r > 0 ? i + s + o : 0
                }
            },
            top: function(t, n) {
                if (n.at[1] !== "center") {
                    var r = e(window);
                    r = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop();
                    var i = n.my[1] === "top" ? -n.elemHeight : n.my[1] === "bottom" ? n.elemHeight : 0,
                        s = n.at[1] === "top" ? n.targetHeight : -n.targetHeight,
                        o = -2 * n.offset[1];
                    t.top += n.collisionPosition.top < 0 ? i + s + o : r > 0 ? i + s + o : 0
                }
            }
        }
    }, e.offset.setOffset || (e.offset.setOffset = function(t, n) {
        /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
        var r = e(t),
            i = r.offset(),
            s = parseInt(e.curCSS(t, "top", !0), 10) || 0,
            o = parseInt(e.curCSS(t, "left", !0), 10) || 0;
        i = {
            top: n.top - i.top + s,
            left: n.left - i.left + o
        }, "using" in n ? n.using.call(t, i) : r.css(i)
    }, e.fn.offset = function(t) {
        var n = this[0];
        return !n || !n.ownerDocument ? null : t ? this.each(function() {
            e.offset.setOffset(this, t)
        }) : i.call(this)
    })
}(jQuery), function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(t, !0), !0)
        },
        _mouseDrag: function(t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                n = this._uiHash();
                if (this._trigger("drag", t, n) === !1) return this._mouseUp({}), !1;
                this.position = n.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var r = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    r._trigger("stop", t) !== !1 && r._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function(t) {
            return this.options.iframeFix === !0 && e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (n = !0)
            }), n
        },
        _createHelper: function(t) {
            var n = this.options;
            return t = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element, t.parents("body").length || t.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), t[0] != this.element[0] && !/(fixed|absolute)/.test(t.css("position")) && t.css("position", "absolute"), t
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [(t.containment == "document" ? 0 : e(window).scrollLeft()) - this.offset.relative.left - this.offset.parent.left, (t.containment == "document" ? 0 : e(window).scrollTop()) - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                t = e(t.containment);
                var n = t[0];
                if (n) {
                    t.offset();
                    var r = e(n).css("overflow") != "hidden";
                    this.containment = [(parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0), (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0), (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t
                }
            } else t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position), t = t == "absolute" ? 1 : -1;
            var r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * t + this.offset.parent.top * t - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()) * t),
                left: n.left + this.offset.relative.left * t + this.offset.parent.left * t - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft()) * t)
            }
        },
        _generatePosition: function(t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName),
                s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                var u;
                this.containment && (this.relative_container ? (u = this.relative_container.offset(), u = [this.containment[0] + u.left, this.containment[1] + u.top, this.containment[2] + u.left, this.containment[3] + u.top]) : u = this.containment, t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)), n.grid && (o = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = u ? o - this.offset.click.top < u[1] || o - this.offset.click.top > u[3] ? o - this.offset.click.top < u[1] ? o + n.grid[1] : o - n.grid[1] : o : o, s = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = u ? s - this.offset.click.left < u[0] || s - this.offset.click.left > u[2] ? s - this.offset.click.left < u[0] ? s + n.grid[0] : s - n.grid[0] : s : s)
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.extend(e.ui.draggable, {
        version: "1.8.13"
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function() {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function(t, n) {
            var r = e(this).data("draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function(t, n) {
            var r = e(this).data("draggable"),
                i = this;
            e.each(r.sortables, function() {
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
                n = e(this).data("draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
        },
        stop: function() {
            var t = e(this).data("draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            t = e(n.helper), n = e(this).data("draggable").options, t.css("opacity") && (n._opacity = t.css("opacity")), t.css("opacity", n.opacity)
        },
        stop: function(t, n) {
            t = e(this).data("draggable").options, t._opacity && e(n.helper).css("opacity", t._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("draggable");
            t.scrollParent[0] != document && t.scrollParent[0].tagName != "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var n = e(this).data("draggable"),
                r = n.options,
                i = !1;
            if (n.scrollParent[0] != document && n.scrollParent[0].tagName != "HTML") {
                if (!r.axis || r.axis != "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
                if (!r.axis || r.axis != "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)
            } else {
                if (!r.axis || r.axis != "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
                if (!r.axis || r.axis != "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))
            }
            i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("draggable"),
                n = t.options;
            t.snapElements = [], e(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function() {
                var n = e(this),
                    r = n.offset();
                this != t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function(t, n) {
            for (var r = e(this).data("draggable"), i = r.options, s = i.snapTolerance, o = n.offset.left, u = o + r.helperProportions.width, a = n.offset.top, f = a + r.helperProportions.height, l = r.snapElements.length - 1; l >= 0; l--) {
                var c = r.snapElements[l].left,
                    h = c + r.snapElements[l].width,
                    p = r.snapElements[l].top,
                    v = p + r.snapElements[l].height;
                if (c - s < o && o < h + s && p - s < a && a < v + s || c - s < o && o < h + s && p - s < f && f < v + s || c - s < u && u < h + s && p - s < a && a < v + s || c - s < u && u < h + s && p - s < f && f < v + s) {
                    if (i.snapMode != "inner") {
                        var m = Math.abs(p - f) <= s,
                            g = Math.abs(v - a) <= s,
                            y = Math.abs(c - u) <= s,
                            b = Math.abs(h - o) <= s;
                        m && (n.position.top = r._convertPositionTo("relative", {
                            top: p - r.helperProportions.height,
                            left: 0
                        }).top - r.margins.top), g && (n.position.top = r._convertPositionTo("relative", {
                            top: v,
                            left: 0
                        }).top - r.margins.top), y && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: c - r.helperProportions.width
                        }).left - r.margins.left), b && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: h
                        }).left - r.margins.left)
                    }
                    var w = m || g || y || b;
                    i.snapMode != "outer" && (m = Math.abs(p - a) <= s, g = Math.abs(v - f) <= s, y = Math.abs(c - o) <= s, b = Math.abs(h - u) <= s, m && (n.position.top = r._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - r.margins.top), g && (n.position.top = r._convertPositionTo("relative", {
                        top: v - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left - r.margins.left), b && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h - r.helperProportions.width
                    }).left - r.margins.left)), !r.snapElements[l].snapping && (m || g || y || b || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })), r.snapElements[l].snapping = m || g || y || b || w
                } else r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[l].item
                })), r.snapElements[l].snapping = !1
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t = e(this).data("draggable").options;
            t = e.makeArray(e(t.stack)).sort(function(t, n) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
            });
            if (t.length) {
                var n = parseInt(t[0].style.zIndex) || 0;
                e(t).each(function(e) {
                    this.style.zIndex = n + e
                }), this[0].style.zIndex = n + t.length
            }
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            t = e(n.helper), n = e(this).data("draggable").options, t.css("zIndex") && (n._zIndex = t.css("zIndex")), t.css("zIndex", n.zIndex)
        },
        stop: function(t, n) {
            t = e(this).data("draggable").options, t._zIndex && e(n.helper).css("zIndex", t._zIndex)
        }
    })
}(jQuery), function(e) {
    e.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var t = this.options,
                n = t.accept;
            this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            for (var t = e.ui.ddmanager.droppables[this.options.scope], n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function(t, n) {
            t == "accept" && (this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function(t) {
            var n = e.ui.ddmanager.current; !! n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function(t) {
            var n = e.ui.ddmanager.current; !! n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function(t, n) {
            var r = n || e.ui.ddmanager.current;
            if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
            var i = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance)) return i = !0, !1
            }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.extend(e.ui.droppable, {
        version: "1.8.13"
    }), e.ui.intersect = function(t, n, r) {
        if (!n.offset) return !1;
        var i = (t.positionAbs || t.position.absolute).left,
            s = i + t.helperProportions.width,
            o = (t.positionAbs || t.position.absolute).top,
            u = o + t.helperProportions.height,
            a = n.offset.left,
            f = a + n.proportions.width,
            l = n.offset.top,
            c = l + n.proportions.height;
        switch (r) {
        case "fit":
            return a <= i && s <= f && l <= o && u <= c;
        case "intersect":
            return a < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < f && l < o + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < c;
        case "pointer":
            return e.ui.isOver((t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, l, a, n.proportions.height, n.proportions.width);
        case "touch":
            return (o >= l && o <= c || u >= l && u <= c || o < l && u > c) && (i >= a && i <= f || s >= a && s <= f || i < a && s > f);
        default:
            return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, n) {
            var r = e.ui.ddmanager.droppables[t.options.scope] || [],
                i = n ? n.type : null,
                s = (t.currentItem || t.element).find(":data(droppable)").andSelf(),
                o = 0;
            e: for (; o < r.length; o++) if (!(r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element))) {
                for (var u = 0; u < s.length; u++) if (s[u] == r[o].element[0]) {
                    r[o].proportions.height = 0;
                    continue e
                }
                r[o].visible = r[o].element.css("display") != "none", r[o].visible && (i == "mousedown" && r[o]._activate.call(r[o], n), r[o].offset = r[o].element.offset(), r[o].proportions = {
                    width: r[o].element[0].offsetWidth,
                    height: r[o].element[0].offsetHeight
                })
            }
        },
        drop: function(t, n) {
            var r = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = r || this._drop.call(this, n)), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n)))
            }), r
        },
        drag: function(t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                    var r = e.ui.intersect(t, this, this.options.tolerance);
                    if (r = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null) {
                        var i;
                        if (this.options.greedy) {
                            var s = this.element.parents(":data(droppable):eq(0)");
                            s.length && (i = e.data(s[0], "droppable"), i.greedyChild = r == "isover" ? 1 : 0)
                        }
                        i && r == "isover" && (i.isover = 0, i.isout = 1, i._out.call(i, n)), this[r] = 1, this[r == "isout" ? "isover" : "isout"] = 0, this[r == "isover" ? "_over" : "_out"].call(this, n), i && r == "isout" && (i.isout = 0, i.isover = 1, i._over.call(i, n))
                    }
                }
            })
        }
    }
}(jQuery), function(e) {
    e.widget("ui.resizable", e.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var t = this,
                n = this.options;
            this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! n.aspectRatio,
                aspectRatio: n.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var r = this.handles.split(",");
                this.handles = {};
                for (var i = 0; i < r.length; i++) {
                    var s = e.trim(r[i]),
                        o = e('<div class="ui-resizable-handle ' + ("ui-resizable-" + s) + '"></div>');
                    /sw|se|ne|nw/.test(s) && o.css({
                        zIndex: ++n.zIndex
                    }), "se" == s && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(o)
                }
            }
            this._renderAxis = function(t) {
                t = t || this.element;
                for (var n in this.handles) {
                    this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var r = e(this.handles[n], this.element),
                            i = 0;
                        i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), r = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(r, i), this._proportionallyResize()
                    }
                    e(this.handles[n])
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                if (!t.resizing) {
                    if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    t.axis = e && e[1] ? e[1] : "se"
                }
            }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").hover(function() {
                n.disabled || (e(this).removeClass("ui-resizable-autohide"), t._handles.show())
            }, function() {
                n.disabled || t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
            })), this._mouseInit()
        },
        destroy: function() {
            this._mouseDestroy();
            var t = function(t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
            if (this.elementIsWrapper) {
                t(this.element);
                var n = this.element;
                n.after(this.originalElement.css({
                    position: n.css("position"),
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: n.css("top"),
                    left: n.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var n = !1;
            for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(n) {
            var r = this.options,
                i = this.element.position(),
                s = this.element;
            this.resizing = !0, this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            }, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
                position: "absolute",
                top: i.top,
                left: i.left
            }), e.browser.opera && /relative/.test(s.css("position")) && s.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this._renderProxy(), i = t(this.helper.css("left"));
            var o = t(this.helper.css("top"));
            return r.containment && (i += e(r.containment).scrollLeft() || 0, o += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: o
            }, this.size = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalPosition = {
                left: i,
                top: o
            }, this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            }, this.originalMousePosition = {
                left: n.pageX,
                top: n.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, r = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", r == "auto" ? this.axis + "-resize" : r), s.addClass("ui-resizable-resizing"), this._propagate("start", n), !0
        },
        _mouseDrag: function(e) {
            var t = this.helper,
                n = this.originalMousePosition,
                r = this._change[this.axis];
            if (!r) return !1;
            n = r.apply(this, [e, e.pageX - n.left || 0, e.pageY - n.top || 0]);
            if (this._aspectRatio || e.shiftKey) n = this._updateRatio(n, e);
            return n = this._respectSize(n, e), this._propagate("resize", e), t.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(n), this._trigger("resize", e, this.ui()), !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var n = this.options,
                r = this;
            if (this._helper) {
                var i = this._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName);
                i = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height, s = s ? 0 : r.sizeDiff.width, s = {
                    width: r.helper.width() - s,
                    height: r.helper.height() - i
                }, i = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null;
                var o = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
                n.animate || this.element.css(e.extend(s, {
                    top: o,
                    left: i
                })), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
            }
            return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(), n(e.left) && (this.position.left = e.left), n(e.top) && (this.position.top = e.top), n(e.height) && (this.size.height = e.height), n(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position,
                n = this.size,
                r = this.axis;
            return e.height ? e.width = n.height * this.aspectRatio : e.width && (e.height = n.width / this.aspectRatio), r == "sw" && (e.left = t.left + (n.width - e.width), e.top = null), r == "nw" && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
        },
        _respectSize: function(e) {
            var t = this.options,
                r = this.axis,
                i = n(e.width) && t.maxWidth && t.maxWidth < e.width,
                s = n(e.height) && t.maxHeight && t.maxHeight < e.height,
                o = n(e.width) && t.minWidth && t.minWidth > e.width,
                u = n(e.height) && t.minHeight && t.minHeight > e.height;
            o && (e.width = t.minWidth), u && (e.height = t.minHeight), i && (e.width = t.maxWidth), s && (e.height = t.maxHeight);
            var a = this.originalPosition.left + this.originalSize.width,
                f = this.position.top + this.size.height,
                c = /sw|nw|w/.test(r);
            return r = /nw|ne|n/.test(r), o && c && (e.left = a - t.minWidth), i && c && (e.left = a - t.maxWidth), u && r && (e.top = f - t.minHeight), s && r && (e.top = f - t.maxHeight), (t = !e.width && !e.height) && !e.left && e.top ? e.top = null : t && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var t = this.helper || this.element, n = 0; n < this._proportionallyResizeElements.length; n++) {
                var r = this._proportionallyResizeElements[n];
                if (!this.borderDif) {
                    var i = [r.css("borderTopWidth"), r.css("borderRightWidth"), r.css("borderBottomWidth"), r.css("borderLeftWidth")],
                        s = [r.css("paddingTop"), r.css("paddingRight"), r.css("paddingBottom"), r.css("paddingLeft")];
                    this.borderDif = e.map(i, function(e, t) {
                        return e = parseInt(e, 10) || 0, t = parseInt(s[t], 10) || 0, e + t
                    })
                }
                e.browser.msie && (e(t).is(":hidden") || e(t).parents(":hidden").length) || r.css({
                    height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: t.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function() {
            var t = this.options;
            this.elementOffset = this.element.offset();
            if (this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var n = e.browser.msie && e.browser.version < 7,
                    r = n ? 1 : 0;
                n = n ? 2 : -1, this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + n,
                    height: this.element.outerHeight() + n,
                    position: "absolute",
                    left: this.elementOffset.left - r + "px",
                    top: this.elementOffset.top - r + "px",
                    zIndex: ++t.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                return {
                    left: this.originalPosition.left + t,
                    width: this.originalSize.width - t
                }
            },
            n: function(e, t, n) {
                return {
                    top: this.originalPosition.top + n,
                    height: this.originalSize.height - n
                }
            },
            s: function(e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function(t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function(t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function(t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function(t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function(t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.extend(e.ui.resizable, {
        version: "1.8.13"
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).data("resizable").options,
                n = function(t) {
                    e(t).each(function() {
                        var t = e(this);
                        t.data("resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10),
                            position: t.css("position")
                        })
                    })
                };
            typeof t.alsoResize == "object" && !t.alsoResize.parentNode ? t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], n(t.alsoResize)) : e.each(t.alsoResize, function(e) {
                n(e)
            }) : n(t.alsoResize)
        },
        resize: function(t, n) {
            var r = e(this).data("resizable");
            t = r.options;
            var i = r.originalSize,
                s = r.originalPosition,
                o = {
                    height: r.size.height - i.height || 0,
                    width: r.size.width - i.width || 0,
                    top: r.position.top - s.top || 0,
                    left: r.position.left - s.left || 0
                },
                u = function(t, i) {
                    e(t).each(function() {
                        var t = e(this),
                            s = e(this).data("resizable-alsoresize"),
                            u = {},
                            f = i && i.length ? i : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(f, function(e, t) {
                            (e = (s[t] || 0) + (o[t] || 0)) && e >= 0 && (u[t] = e || null)
                        }), e.browser.opera && /relative/.test(t.css("position")) && (r._revertToRelativePosition = !0, t.css({
                            position: "absolute",
                            top: "auto",
                            left: "auto"
                        })), t.css(u)
                    })
                };
            typeof t.alsoResize == "object" && !t.alsoResize.nodeType ? e.each(t.alsoResize, function(e, t) {
                u(e, t)
            }) : u(t.alsoResize)
        },
        stop: function() {
            var t = e(this).data("resizable"),
                n = t.options,
                r = function(t) {
                    e(t).each(function() {
                        var t = e(this);
                        t.css({
                            position: t.data("resizable-alsoresize").position
                        })
                    })
                };
            t._revertToRelativePosition && (t._revertToRelativePosition = !1, typeof n.alsoResize == "object" && !n.alsoResize.nodeType ? e.each(n.alsoResize, function(e) {
                r(e)
            }) : r(n.alsoResize)), e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var n = e(this).data("resizable"),
                r = n.options,
                i = n._proportionallyResizeElements,
                s = i.length && /textarea/i.test(i[0].nodeName),
                o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height;
            s = {
                width: n.size.width - (s ? 0 : n.sizeDiff.width),
                height: n.size.height - o
            }, o = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null;
            var u = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            n.element.animate(e.extend(s, u && o ? {
                top: u,
                left: o
            } : {}), {
                duration: r.animateDuration,
                easing: r.animateEasing,
                step: function() {
                    var r = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    i && i.length && e(i[0]).css({
                        width: r.width,
                        height: r.height
                    }), n._updateCache(r), n._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var n = e(this).data("resizable"),
                r = n.element,
                i = n.options.containment;
            if (r = i instanceof e ? i.get(0) : /parent/.test(i) ? r.parent().get(0) : i) {
                n.containerElement = e(r);
                if (/document/.test(i) || i == document) n.containerOffset = {
                    left: 0,
                    top: 0
                }, n.containerPosition = {
                    left: 0,
                    top: 0
                }, n.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    var s = e(r),
                        o = [];
                    e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                        o[e] = t(s.css("padding" + n))
                    }), n.containerOffset = s.offset(), n.containerPosition = s.position(), n.containerSize = {
                        height: s.innerHeight() - o[3],
                        width: s.innerWidth() - o[1]
                    }, i = n.containerOffset;
                    var u = n.containerSize.height,
                        a = n.containerSize.width;
                    a = e.ui.hasScroll(r, "left") ? r.scrollWidth : a, u = e.ui.hasScroll(r) ? r.scrollHeight : u, n.parentData = {
                        element: r,
                        left: i.left,
                        top: i.top,
                        width: a,
                        height: u
                    }
                }
            }
        },
        resize: function(t) {
            var n = e(this).data("resizable"),
                r = n.options,
                i = n.containerOffset,
                s = n.position;
            t = n._aspectRatio || t.shiftKey;
            var o = {
                top: 0,
                left: 0
            },
                u = n.containerElement;
            u[0] != document && /static/.test(u.css("position")) && (o = i), s.left < (n._helper ? i.left : 0) && (n.size.width += n._helper ? n.position.left - i.left : n.position.left - o.left, t && (n.size.height = n.size.width / r.aspectRatio), n.position.left = r.helper ? i.left : 0), s.top < (n._helper ? i.top : 0) && (n.size.height += n._helper ? n.position.top - i.top : n.position.top, t && (n.size.width = n.size.height * r.aspectRatio), n.position.top = n._helper ? i.top : 0), n.offset.left = n.parentData.left + n.position.left, n.offset.top = n.parentData.top + n.position.top, r = Math.abs((n._helper ? n.offset.left - o.left : n.offset.left - o.left) + n.sizeDiff.width), i = Math.abs((n._helper ? n.offset.top - o.top : n.offset.top - i.top) + n.sizeDiff.height), s = n.containerElement.get(0) == n.element.parent().get(0), o = /relative|absolute/.test(n.containerElement.css("position")), s && o && (r -= n.parentData.left), r + n.size.width >= n.parentData.width && (n.size.width = n.parentData.width - r, t && (n.size.height = n.size.width / n.aspectRatio)), i + n.size.height >= n.parentData.height && (n.size.height = n.parentData.height - i, t && (n.size.width = n.size.height * n.aspectRatio))
        },
        stop: function() {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.containerOffset,
                i = t.containerPosition,
                s = t.containerElement,
                o = e(t.helper),
                u = o.offset(),
                a = o.outerWidth() - t.sizeDiff.width;
            o = o.outerHeight() - t.sizeDiff.height, t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: o
            }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: o
            })
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).data("resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).data("resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.size,
                i = t.originalSize,
                s = t.originalPosition,
                o = t.axis;
            n.grid = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid;
            var u = Math.round((r.width - i.width) / (n.grid[0] || 1)) * (n.grid[0] || 1);
            n = Math.round((r.height - i.height) / (n.grid[1] || 1)) * (n.grid[1] || 1), /^(se|s|e)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n) : /^(ne)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n, t.position.top = s.top - n) : (/^(sw)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n) : (t.size.width = i.width + u, t.size.height = i.height + n, t.position.top = s.top - n), t.position.left = s.left - u)
        }
    });
    var t = function(e) {
            return parseInt(e, 10) || 0
        },
        n = function(e) {
            return !isNaN(parseInt(e, 10))
        }
}(jQuery), function(e) {
    e.widget("ui.selectable", e.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var t = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var n;
            this.refresh = function() {
                n = e(t.options.filter, t.element[0]), n.each(function() {
                    var t = e(this),
                        n = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: n.left,
                        top: n.top,
                        right: n.left + t.outerWidth(),
                        bottom: n.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        destroy: function() {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function(t) {
            var n = this;
            this.opos = [t.pageX, t.pageY];
            if (!this.options.disabled) {
                var r = this.options;
                this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                    left: t.clientX,
                    top: t.clientY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var r = e.data(this, "selectable-item");
                    r.startselected = !0, t.metaKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                        unselecting: r.element
                    }))
                }), e(t.target).parents().andSelf().each(function() {
                    var r = e.data(this, "selectable-item");
                    if (r) {
                        var i = !t.metaKey || !r.$element.hasClass("ui-selected");
                        return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, (r.selected = i) ? n._trigger("selecting", t, {
                            selecting: r.element
                        }) : n._trigger("unselecting", t, {
                            unselecting: r.element
                        }), !1
                    }
                })
            }
        },
        _mouseDrag: function(t) {
            var n = this;
            this.dragged = !0;
            if (!this.options.disabled) {
                var r = this.options,
                    i = this.opos[0],
                    s = this.opos[1],
                    o = t.pageX,
                    u = t.pageY;
                if (i > o) {
                    var a = o;
                    o = i, i = a
                }
                return s > u && (a = u, u = s, s = a), this.helper.css({
                    left: i,
                    top: s,
                    width: o - i,
                    height: u - s
                }), this.selectees.each(function() {
                    var a = e.data(this, "selectable-item");
                    if ( !! a && a.element != n.element[0]) {
                        var l = !1;
                        r.tolerance == "touch" ? l = !(a.left > o || a.right < i || a.top > u || a.bottom < s) : r.tolerance == "fit" && (l = a.left > i && a.right < o && a.top > s && a.bottom < u), l ? (a.selected && (a.$element.removeClass("ui-selected"), a.selected = !1), a.unselecting && (a.$element.removeClass("ui-unselecting"), a.unselecting = !1), a.selecting || (a.$element.addClass("ui-selecting"), a.selecting = !0, n._trigger("selecting", t, {
                            selecting: a.element
                        }))) : (a.selecting && (t.metaKey && a.startselected ? (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.$element.addClass("ui-selected"), a.selected = !0) : (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.startselected && (a.$element.addClass("ui-unselecting"), a.unselecting = !0), n._trigger("unselecting", t, {
                            unselecting: a.element
                        }))), a.selected && !t.metaKey && !a.startselected && (a.$element.removeClass("ui-selected"), a.selected = !1, a.$element.addClass("ui-unselecting"), a.unselecting = !0, n._trigger("unselecting", t, {
                            unselecting: a.element
                        })))
                    }
                }), !1
            }
        },
        _mouseStop: function(t) {
            var n = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                    unselected: r.element
                })
            }), e(".ui-selecting", this.element[0]).each(function() {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    }), e.extend(e.ui.selectable, {
        version: "1.8.13"
    })
}(jQuery), function(e) {
    e.widget("ui.sortable", e.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData("sortable-item");
            return this
        },
        _setOption: function(t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget()[n ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, n) {
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t);
            var r = null,
                i = this;
            e(t.target).parents().each(function() {
                if (e.data(this, "sortable-item") == i) return r = e(this), !1
            }), e.data(t.target, "sortable-item") == i && (r = e(t.target));
            if (!r) return !1;
            if (this.options.handle && !n) {
                var s = !1;
                e(this.options.handle, r).find("*").andSelf().each(function() {
                    this == t.target && (s = !0)
                });
                if (!s) return !1
            }
            return this.currentItem = r, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(t, n, r) {
            n = this.options;
            var i = this;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", t, i._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n = this.options,
                    r = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n];
                var i = r.item[0],
                    s = this._intersectsWithPointer(r);
                if (s && i != this.currentItem[0] && this.placeholder[s == 1 ? "next" : "prev"]()[0] != i && !e.ui.contains(this.placeholder[0], i) && (this.options.type == "semi-dynamic" ? !e.ui.contains(this.element[0], i) : !0)) {
                    this.direction = s == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(r)) break;
                    this._rearrange(t, r), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, n) {
            if (t) {
                e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
                if (this.options.revert) {
                    var r = this;
                    n = r.placeholder.offset(), r.reverting = !0, e(this.helper).animate({
                        left: n.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: n.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        r._clear(t)
                    })
                } else this._clear(t, n);
                return !1
            }
        },
        cancel: function() {
            var t = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("deactivate", null, t._uiHash(this)), this.containers[n].containerCache.over && (this.containers[n]._trigger("out", null, t._uiHash(this)), this.containers[n].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function() {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left;
            return f = r + f > u && r + f < a && t + l > s && t + l < o, this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? f : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function(t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height);
            t = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = n && t, t = this._getDragVerticalDirection();
            var r = this._getDragHorizontalDirection();
            return n ? this.floating ? r && r == "right" || t == "down" ? 2 : 1 : t && (t == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height);
            t = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width);
            var r = this._getDragVerticalDirection(),
                i = this._getDragHorizontalDirection();
            return this.floating && i ? i == "right" && t || i == "left" && !t : r && (r == "down" && n || r == "up" && !n)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e != 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e != 0 && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var n = [],
                r = [],
                i = this._connectWith();
            if (i && t) for (t = i.length - 1; t >= 0; t--) for (var s = e(i[t]), o = s.length - 1; o >= 0; o--) {
                var u = e.data(s[o], "sortable");
                u && u != this && !u.options.disabled && r.push([e.isFunction(u.options.items) ? u.options.items.call(u.element) : e(u.options.items, u.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), u])
            }
            r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (t = r.length - 1; t >= 0; t--) r[t][0].each(function() {
                n.push(this)
            });
            return e(n)
        },
        _removeCurrentsFromItems: function() {
            for (var e = this.currentItem.find(":data(sortable-item)"), t = 0; t < this.items.length; t++) for (var n = 0; n < e.length; n++) e[n] == this.items[t].item[0] && this.items.splice(t, 1)
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var n = this.items,
                r = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                i = this._connectWith();
            if (i) for (var s = i.length - 1; s >= 0; s--) for (var o = e(i[s]), u = o.length - 1; u >= 0; u--) {
                var a = e.data(o[u], "sortable");
                a && a != this && !a.options.disabled && (r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                    item: this.currentItem
                }) : e(a.options.items, a.element), a]), this.containers.push(a))
            }
            for (s = r.length - 1; s >= 0; s--) {
                t = r[s][1], i = r[s][0], u = 0;
                for (o = i.length; u < o; u++) a = e(i[u]), a.data("sortable-item", t), n.push({
                    item: a,
                    instance: t,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var n = this.items.length - 1; n >= 0; n--) {
                var r = this.items[n];
                if (r.instance == this.currentContainer || !this.currentContainer || r.item[0] == this.currentItem[0]) {
                    var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
                    t || (r.width = i.outerWidth(), r.height = i.outerHeight()), i = i.offset(), r.left = i.left, r.top = i.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (n = this.containers.length - 1; n >= 0; n--) i = this.containers[n].element.offset(), this.containers[n].containerCache.left = i.left, this.containers[n].containerCache.top = i.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            var n = t || this,
                r = n.options;
            if (!r.placeholder || r.placeholder.constructor == String) {
                var i = r.placeholder;
                r.placeholder = {
                    element: function() {
                        var t = e(document.createElement(n.currentItem[0].nodeName)).addClass(i || n.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return i || (t.style.visibility = "hidden"), t
                    },
                    update: function(e, t) {
                        if (!i || !! r.forcePlaceholderSize) t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            n.placeholder = e(r.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), r.placeholder.update(n, n.placeholder)
        },
        _contactContainers: function(t) {
            for (var n = null, r = null, i = this.containers.length - 1; i >= 0; i--) if (!e.ui.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (!n || !e.ui.contains(this.containers[i].element[0], n.element[0])) n = this.containers[i], r = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (n) if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
            else if (this.currentContainer != this.containers[r]) {
                n = 1e4, i = null;
                for (var s = this.positionAbs[this.containers[r].floating ? "left" : "top"], o = this.items.length - 1; o >= 0; o--) if (e.ui.contains(this.containers[r].element[0], this.items[o].item[0])) {
                    var u = this.items[o][this.containers[r].floating ? "left" : "top"];
                    Math.abs(u - s) < n && (n = Math.abs(u - s), i = this.items[o])
                }
                if (i || this.options.dropOnEmpty) this.currentContainer = this.containers[r], i ? this._rearrange(t, i, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var n = this.options;
            return t = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem, t.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(t[0]), t[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (t[0].style.width == "" || n.forceHelperSize) && t.width(this.currentItem.width()), (t[0].style.height == "" || n.forceHelperSize) && t.height(this.currentItem.height()), t
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment)) {
                var n = e(t.containment)[0];
                t = e(t.containment).offset();
                var r = e(n).css("overflow") != "hidden";
                this.containment = [t.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position), t = t == "absolute" ? 1 : -1;
            var r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * t + this.offset.parent.top * t - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()) * t),
                left: n.left + this.offset.relative.left * t + this.offset.parent.left * t - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft()) * t)
            }
        },
        _generatePosition: function(t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var s = t.pageX,
                o = t.pageY;
            return this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (o = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + n.grid[1] : o - n.grid[1] : o : o, s = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = this.containment ? s - this.offset.click.left < this.containment[0] || s - this.offset.click.left > this.containment[2] ? s - this.offset.click.left < this.containment[0] ? s + n.grid[0] : s - n.grid[0] : s : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this,
                s = this.counter;
            window.setTimeout(function() {
                s == i.counter && i.refreshPositions(!r)
            }, 0)
        },
        _clear: function(t, n) {
            this.reverting = !1;
            var r = [];
            !this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var i in this._storedCSS) if (this._storedCSS[i] == "auto" || this._storedCSS[i] == "static") this._storedCSS[i] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && r.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function(e) {
                this._trigger("update", e, this._uiHash())
            });
            if (!e.ui.contains(this.element[0], this.currentItem[0])) {
                n || r.push(function(e) {
                    this._trigger("remove", e, this._uiHash())
                });
                for (i = this.containers.length - 1; i >= 0; i--) e.ui.contains(this.containers[i].element[0], this.currentItem[0]) && !n && (r.push(function(e) {
                    return function(t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), r.push(function(e) {
                    return function(t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.containers[i])))
            }
            for (i = this.containers.length - 1; i >= 0; i--) n || r.push(function(e) {
                return function(t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (r.push(function(e) {
                return function(t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (i = 0; i < r.length; i++) r[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n) {
                for (i = 0; i < r.length; i++) r[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    }), e.extend(e.ui.sortable, {
        version: "1.8.13"
    })
}(jQuery), function(e) {
    e.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function() {
            var t = this,
                n = t.options;
            t.running = 0, t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), t.headers = t.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                n.disabled || e(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function() {
                n.disabled || e(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function() {
                n.disabled || e(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function() {
                n.disabled || e(this).removeClass("ui-state-focus")
            }), t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if (n.navigation) {
                var r = t.element.find("a").filter(n.navigationFilter).eq(0);
                if (r.length) {
                    var i = r.closest(".ui-accordion-header");
                    t.active = i.length ? i : r.closest(".ui-accordion-content").prev()
                }
            }
            t.active = t._findActive(t.active || n.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), t.active.next().addClass("ui-accordion-content-active"), t._createIcons(), t.resize(), t.element.attr("role", "tablist"), t.headers.attr("role", "tab").bind("keydown.accordion", function(e) {
                return t._keydown(e)
            }).next().attr("role", "tabpanel"), t.headers.not(t.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide(), t.active.length ? t.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : t.headers.eq(0).attr("tabIndex", 0), e.browser.safari || t.headers.find("a").attr("tabIndex", -1), n.event && t.headers.bind(n.event.split(" ").join(".accordion ") + ".accordion", function(e) {
                t._clickHandler.call(t, e, this), e.preventDefault()
            })
        },
        _createIcons: function() {
            var t = this.options;
            t.icons && (e("<span></span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
        },
        destroy: function() {
            var t = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
            var n = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            return (t.autoHeight || t.fillHeight) && n.css("height", ""), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t == "active" && this.activate(n), t == "icons" && (this._destroyIcons(), n && this._createIcons()), t == "disabled" && this.headers.add(this.headers.next())[n ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function(t) {
            if (!(this.options.disabled || t.altKey || t.ctrlKey)) {
                var n = e.ui.keyCode,
                    r = this.headers.length,
                    i = this.headers.index(t.target),
                    s = !1;
                switch (t.keyCode) {
                case n.RIGHT:
                case n.DOWN:
                    s = this.headers[(i + 1) % r];
                    break;
                case n.LEFT:
                case n.UP:
                    s = this.headers[(i - 1 + r) % r];
                    break;
                case n.SPACE:
                case n.ENTER:
                    this._clickHandler({
                        target: t.target
                    }, t.target), t.preventDefault()
                }
                return s ? (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), !1) : !0
            }
        },
        resize: function() {
            var t = this.options,
                n;
            if (t.fillSpace) {
                if (e.browser.msie) {
                    var r = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                n = this.element.parent().height(), e.browser.msie && this.element.parent().css("overflow", r), this.headers.each(function() {
                    n -= e(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")
            } else t.autoHeight && (n = 0, this.headers.next().each(function() {
                n = Math.max(n, e(this).height("").height())
            }).height(n));
            return this
        },
        activate: function(e) {
            return this.options.active = e, e = this._findActive(e)[0], this._clickHandler({
                target: e
            }, e), this
        },
        _findActive: function(t) {
            return t ? typeof t == "number" ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? e([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function(t, n) {
            var r = this.options;
            if (!r.disabled) if (t.target) {
                t = e(t.currentTarget || n), n = t[0] === this.active[0], r.active = r.collapsible && n ? !1 : this.headers.index(t);
                if (!(this.running || !r.collapsible && n)) {
                    var i = this.active;
                    a = t.next(), o = this.active.next(), u = {
                        options: r,
                        newHeader: n && r.collapsible ? e([]) : t,
                        oldHeader: this.active,
                        newContent: n && r.collapsible ? e([]) : a,
                        oldContent: o
                    };
                    var s = this.headers.index(this.active[0]) > this.headers.index(t[0]);
                    this.active = n ? e([]) : t, this._toggle(a, o, u, n, s), i.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), n || (t.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected), t.next().addClass("ui-accordion-content-active"))
                }
            } else if (r.collapsible) {
                this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), this.active.next().addClass("ui-accordion-content-active");
                var o = this.active.next(),
                    u = {
                        options: r,
                        newHeader: e([]),
                        oldHeader: r.active,
                        newContent: e([]),
                        oldContent: o
                    },
                    a = this.active = e([]);
                this._toggle(a, o, u)
            }
        },
        _toggle: function(t, n, r, i, s) {
            var o = this,
                u = o.options;
            o.toShow = t, o.toHide = n, o.data = r;
            var a = function() {
                    if (o) return o._completed.apply(o, arguments)
                };
            o._trigger("changestart", null, o.data), o.running = n.size() === 0 ? t.size() : n.size();
            if (u.animated) {
                r = {}, r = u.collapsible && i ? {
                    toShow: e([]),
                    toHide: n,
                    complete: a,
                    down: s,
                    autoHeight: u.autoHeight || u.fillSpace
                } : {
                    toShow: t,
                    toHide: n,
                    complete: a,
                    down: s,
                    autoHeight: u.autoHeight || u.fillSpace
                }, u.proxied || (u.proxied = u.animated), u.proxiedDuration || (u.proxiedDuration = u.duration), u.animated = e.isFunction(u.proxied) ? u.proxied(r) : u.proxied, u.duration = e.isFunction(u.proxiedDuration) ? u.proxiedDuration(r) : u.proxiedDuration, i = e.ui.accordion.animations;
                var f = u.duration,
                    l = u.animated;
                l && !i[l] && !e.easing[l] && (l = "slide"), i[l] || (i[l] = function(e) {
                    this.slide(e, {
                        easing: l,
                        duration: f || 700
                    })
                }), i[l](r)
            } else u.collapsible && i ? t.toggle() : (n.hide(), t.show()), a(!0);
            n.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur(), t.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function(e) {
            this.running = e ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
        }
    }), e.extend(e.ui.accordion, {
        version: "1.8.13",
        animations: {
            slide: function(t, n) {
                t = e.extend({
                    easing: "swing",
                    duration: 300
                }, t, n);
                if (t.toHide.size()) if (t.toShow.size()) {
                    var r = t.toShow.css("overflow"),
                        i = 0,
                        s = {},
                        o = {},
                        u;
                    n = t.toShow, u = n[0].style.width, n.width(parseInt(n.parent().width(), 10) - parseInt(n.css("paddingLeft"), 10) - parseInt(n.css("paddingRight"), 10) - (parseInt(n.css("borderLeftWidth"), 10) || 0) - (parseInt(n.css("borderRightWidth"), 10) || 0)), e.each(["height", "paddingTop", "paddingBottom"], function(n, r) {
                        o[r] = "hide", n = ("" + e.css(t.toShow[0], r)).match(/^([\d+-.]+)(.*)$/), s[r] = {
                            value: n[1],
                            unit: n[2] || "px"
                        }
                    }), t.toShow.css({
                        height: 0,
                        overflow: "hidden"
                    }).show(), t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(o, {
                        step: function(e, n) {
                            n.prop == "height" && (i = n.end - n.start === 0 ? 0 : (n.now - n.start) / (n.end - n.start)), t.toShow[0].style[n.prop] = i * s[n.prop].value + s[n.prop].unit
                        },
                        duration: t.duration,
                        easing: t.easing,
                        complete: function() {
                            t.autoHeight || t.toShow.css("height", ""), t.toShow.css({
                                width: u,
                                overflow: r
                            }), t.complete()
                        }
                    })
                } else t.toHide.animate({
                    height: "hide",
                    paddingTop: "hide",
                    paddingBottom: "hide"
                }, t);
                else t.toShow.animate({
                    height: "show",
                    paddingTop: "show",
                    paddingBottom: "show"
                }, t)
            },
            bounceslide: function(e) {
                this.slide(e, {
                    easing: e.down ? "easeOutBounce" : "swing",
                    duration: e.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery), function(e) {
    var t = 0;
    e.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var t = this,
                n = this.element[0].ownerDocument,
                r;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function(n) {
                if (!t.options.disabled && !t.element.attr("readonly")) {
                    r = !1;
                    var i = e.ui.keyCode;
                    switch (n.keyCode) {
                    case i.PAGE_UP:
                        t._move("previousPage", n);
                        break;
                    case i.PAGE_DOWN:
                        t._move("nextPage", n);
                        break;
                    case i.UP:
                        t._move("previous", n), n.preventDefault();
                        break;
                    case i.DOWN:
                        t._move("next", n), n.preventDefault();
                        break;
                    case i.ENTER:
                    case i.NUMPAD_ENTER:
                        t.menu.active && (r = !0, n.preventDefault());
                    case i.TAB:
                        if (!t.menu.active) return;
                        t.menu.select(n);
                        break;
                    case i.ESCAPE:
                        t.element.val(t.term), t.close(n);
                        break;
                    default:
                        clearTimeout(t.searching), t.searching = setTimeout(function() {
                            t.term != t.element.val() && (t.selectedItem = null, t.search(null, n))
                        }, t.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function(e) {
                r && (r = !1, e.preventDefault())
            }).bind("focus.autocomplete", function() {
                t.options.disabled || (t.selectedItem = null, t.previous = t.element.val())
            }).bind("blur.autocomplete", function(e) {
                t.options.disabled || (clearTimeout(t.searching), t.closing = setTimeout(function() {
                    t.close(e), t._change(e)
                }, 150))
            }), this._initSource(), this.response = function() {
                return t._response.apply(t, arguments)
            }, this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", n)[0]).mousedown(function(n) {
                var r = t.menu.element[0];
                e(n.target).closest(".ui-menu-item").length || setTimeout(function() {
                    e(document).one("mousedown", function(n) {
                        n.target !== t.element[0] && n.target !== r && !e.ui.contains(r, n.target) && t.close()
                    })
                }, 1), setTimeout(function() {
                    clearTimeout(t.closing)
                }, 13)
            }).menu({
                focus: function(e, n) {
                    n = n.item.data("item.autocomplete"), !1 !== t._trigger("focus", e, {
                        item: n
                    }) && /^key/.test(e.originalEvent.type) && t.element.val(n.value)
                },
                selected: function(e, r) {
                    var i = r.item.data("item.autocomplete"),
                        s = t.previous;
                    t.element[0] !== n.activeElement && (t.element.focus(), t.previous = s, setTimeout(function() {
                        t.previous = s, t.selectedItem = i
                    }, 1)), !1 !== t._trigger("select", e, {
                        item: i
                    }) && t.element.val(i.value), t.term = t.element.val(), t.close(e), t.selectedItem = i
                },
                blur: function() {
                    t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t === "source" && this._initSource(), t === "appendTo" && this.menu.element.appendTo(e(n || "body", this.element[0].ownerDocument)[0]), t === "disabled" && n && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var n = this,
                r, i;
            e.isArray(this.options.source) ? (r = this.options.source, this.source = function(t, n) {
                n(e.ui.autocomplete.filter(r, t.term))
            }) : typeof this.options.source == "string" ? (i = this.options.source, this.source = function(r, s) {
                n.xhr && n.xhr.abort(), n.xhr = e.ajax({
                    url: i,
                    data: r,
                    dataType: "json",
                    autocompleteRequest: ++t,
                    success: function(e) {
                        this.autocompleteRequest === t && s(e)
                    },
                    error: function() {
                        this.autocompleteRequest === t && s([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function(e, t) {
            e = e != null ? e : this.element.val(), this.term = this.element.val();
            if (e.length < this.options.minLength) return this.close(t);
            clearTimeout(this.closing);
            if (this._trigger("search", t) !== !1) return this._search(e)
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: e
            }, this.response)
        },
        _response: function(e) {
            !this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close(), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function(e) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this.element.val() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t), this.menu.deactivate(), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function(t, n) {
            var r = this;
            e.each(n, function(e, n) {
                r._renderItem(t, n)
            })
        },
        _renderItem: function(t, n) {
            return e("<li></li>").data("item.autocomplete", n).append(e("<a></a>").text(n.label)).appendTo(t)
        },
        _move: function(e, t) {
            this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e) ? (this.element.val(this.term), this.menu.deactivate()) : this.menu[e](t) : this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function(e) {
                return r.test(e.label || e.value || e)
            })
        }
    })
}(jQuery), function(e) {
    e.widget("ui.menu", {
        _create: function() {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(n) {
                e(n.target).closest(".ui-menu-item a").length && (n.preventDefault(), t.select(n))
            }), this.refresh()
        },
        refresh: function() {
            var t = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(n) {
                t.activate(n, e(this).parent())
            }).mouseleave(function() {
                t.deactivate()
            })
        },
        activate: function(e, t) {
            this.deactivate();
            if (this.hasScroll()) {
                var n = t.offset().top - this.element.offset().top,
                    r = this.element.scrollTop(),
                    i = this.element.height();
                n < 0 ? this.element.scrollTop(r + n) : n >= i && this.element.scrollTop(r + n - i + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
                item: t
            })
        },
        deactivate: function() {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function(e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function(e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function(e, t, n) {
            this.active ? (e = this.active[e + "All"](".ui-menu-item").eq(0), e.length ? this.activate(n, e) : this.activate(n, this.element.children(t))) : this.activate(n, this.element.children(t))
        },
        nextPage: function(t) {
            if (this.hasScroll()) if (!this.active || this.last()) this.activate(t, this.element.children(".ui-menu-item:first"));
            else {
                var n = this.active.offset().top,
                    r = this.element.height(),
                    i = this.element.children(".ui-menu-item").filter(function() {
                        var t = e(this).offset().top - n - r + e(this).height();
                        return t < 10 && t > -10
                    });
                i.length || (i = this.element.children(".ui-menu-item:last")), this.activate(t, i)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function(t) {
            if (this.hasScroll()) if (!this.active || this.first()) this.activate(t, this.element.children(".ui-menu-item:last"));
            else {
                var n = this.active.offset().top,
                    r = this.element.height();
                result = this.element.children(".ui-menu-item").filter(function() {
                    var t = e(this).offset().top - n + r - e(this).height();
                    return t < 10 && t > -10
                }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(t, result)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[e.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function(e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}(jQuery), function(e) {
    var t, n = function(t) {
            e(":ui-button", t.target.form).each(function() {
                var t = e(this).data("button");
                setTimeout(function() {
                    t.refresh()
                }, 1)
            })
        },
        r = function(t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (i = r ? e(r).find("[name='" + n + "']") : e("[name='" + n + "']", t.ownerDocument).filter(function() {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset.button").bind("reset.button", n), typeof this.options.disabled != "boolean" && (this.options.disabled = this.element.attr("disabled")), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var s = this,
                o = this.options,
                u = this.type === "checkbox" || this.type === "radio",
                f = "ui-state-hover" + (u ? "" : " ui-state-active");
            o.label === null && (o.label = this.buttonElement.html()), this.element.is(":disabled") && (o.disabled = !0), this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function() {
                o.disabled || (e(this).addClass("ui-state-hover"), this === t && e(this).addClass("ui-state-active"))
            }).bind("mouseleave.button", function() {
                o.disabled || e(this).removeClass(f)
            }).bind("focus.button", function() {
                e(this).addClass("ui-state-focus")
            }).bind("blur.button", function() {
                e(this).removeClass("ui-state-focus")
            }).bind("click.button", function(e) {
                o.disabled && e.stopImmediatePropagation()
            }), u && this.element.bind("change.button", function() {
                s.refresh()
            }), this.type === "checkbox" ? this.buttonElement.bind("click.button", function() {
                if (o.disabled) return !1;
                e(this).toggleClass("ui-state-active"), s.buttonElement.attr("aria-pressed", s.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click.button", function() {
                if (o.disabled) return !1;
                e(this).addClass("ui-state-active"), s.buttonElement.attr("aria-pressed", !0);
                var t = s.element[0];
                r(t).not(t).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", !1)
            }) : (this.buttonElement.bind("mousedown.button", function() {
                if (o.disabled) return !1;
                e(this).addClass("ui-state-active"), t = this, e(document).one("mouseup", function() {
                    t = null
                })
            }).bind("mouseup.button", function() {
                if (o.disabled) return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown.button", function(t) {
                if (o.disabled) return !1;
                (t.keyCode == e.ui.keyCode.SPACE || t.keyCode == e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup.button", function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", o.disabled)
        },
        _determineButtonType: function() {
            this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
            if (this.type === "checkbox" || this.type === "radio") {
                var e = this.element.parents().filter(":last"),
                    t = "label[for=" + this.element.attr("id") + "]";
                this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), (e = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", e)
            } else this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t === "disabled" && (n ? this.element.attr("disabled", !0) : this.element.removeAttr("disabled")), this._resetButton()
        },
        refresh: function() {
            var t = this.element.is(":disabled");
            t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? r(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", !0) : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", !1)
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", !0) : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", !1))
        },
        _resetButton: function() {
            if (this.type === "input") this.options.label && this.element.val(this.options.label);
            else {
                var t = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                    n = e("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                    r = this.options.icons,
                    i = r.primary && r.secondary,
                    s = [];
                r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", n))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
            }
        }
    }), e.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, n) {
            t === "disabled" && this.buttons.button("option", t, n), e.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function() {
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()
        },
        destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), e.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery), function(e, t) {
    var n = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    },
        r = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        i = e.attrFn || {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0,
            click: !0
        };
    e.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var t = this,
                n = t.options,
                r = n.title || "&#160;",
                i = e.ui.dialog.getTitleId(t.element),
                s = (t.uiDialog = e("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + n.dialogClass).css({
                    zIndex: n.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function(r) {
                    n.closeOnEscape && r.keyCode && r.keyCode === e.ui.keyCode.ESCAPE && (t.close(r), r.preventDefault())
                }).attr({
                    role: "dialog",
                    "aria-labelledby": i
                }).mousedown(function(e) {
                    t.moveToTop(!1, e)
                });
            t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s);
            var o = (t.uiDialogTitlebar = e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(s),
                u = e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                    u.addClass("ui-state-hover")
                }, function() {
                    u.removeClass("ui-state-hover")
                }).focus(function() {
                    u.addClass("ui-state-focus")
                }).blur(function() {
                    u.removeClass("ui-state-focus")
                }).click(function(e) {
                    return t.close(e), !1
                }).appendTo(o);
            (t.uiDialogTitlebarCloseText = e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(n.closeText).appendTo(u), e("<span></span>").addClass("ui-dialog-title").attr("id", i).html(r).prependTo(o), e.isFunction(n.beforeclose) && !e.isFunction(n.beforeClose) && (n.beforeClose = n.beforeclose), o.find("*").add(o).disableSelection(), n.draggable && e.fn.draggable && t._makeDraggable(), n.resizable && e.fn.resizable && t._makeResizable(), t._createButtons(n.buttons), t._isOpen = !1, e.fn.bgiframe && s.bgiframe()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        destroy: function() {
            var e = this;
            return e.overlay && e.overlay.destroy(), e.uiDialog.hide(), e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), e.uiDialog.remove(), e.originalTitle && e.element.attr("title", e.originalTitle), e
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(t) {
            var n = this,
                r, i;
            if (!1 !== n._trigger("beforeClose", t)) return n.overlay && n.overlay.destroy(), n.uiDialog.unbind("keypress.ui-dialog"), n._isOpen = !1, n.options.hide ? n.uiDialog.hide(n.options.hide, function() {
                n._trigger("close", t)
            }) : (n.uiDialog.hide(), n._trigger("close", t)), e.ui.dialog.overlay.resize(), n.options.modal && (r = 0, e(".ui-dialog").each(function() {
                this !== n.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (r = Math.max(r, i)))
            }), e.ui.dialog.maxZ = r), n
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(t, n) {
            var r = this,
                i = r.options;
            return i.modal && !t || !i.stack && !i.modal ? r._trigger("focus", n) : (i.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = i.zIndex), r.overlay && (e.ui.dialog.maxZ += 1, r.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ)), t = {
                scrollTop: r.element.attr("scrollTop"),
                scrollLeft: r.element.attr("scrollLeft")
            }, e.ui.dialog.maxZ += 1, r.uiDialog.css("z-index", e.ui.dialog.maxZ), r.element.attr(t), r._trigger("focus", n), r)
        },
        open: function() {
            if (!this._isOpen) {
                var t = this,
                    n = t.options,
                    r = t.uiDialog;
                return t.overlay = n.modal ? new e.ui.dialog.overlay(t) : null, t._size(), t._position(n.position), r.show(n.show), t.moveToTop(!0), n.modal && r.bind("keypress.ui-dialog", function(t) {
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var n = e(":tabbable", this),
                            r = n.filter(":first");
                        n = n.filter(":last");
                        if (t.target === n[0] && !t.shiftKey) return r.focus(1), !1;
                        if (t.target === r[0] && t.shiftKey) return n.focus(1), !1
                    }
                }), e(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(), t._isOpen = !0, t._trigger("open"), t
            }
        },
        _createButtons: function(t) {
            var n = this,
                r = !1,
                s = e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                u = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(s);
            n.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof t == "object" && t !== null && e.each(t, function() {
                return !(r = !0)
            }), r && (e.each(t, function(t, r) {
                r = e.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                var s = e('<button type="button"></button>').click(function() {
                    r.click.apply(n.element[0], arguments)
                }).appendTo(u);
                e.each(r, function(e, t) {
                    e !== "click" && (e in i ? s[e](t) : s.attr(e, t))
                }), e.fn.button && s.button()
            }), s.appendTo(n.uiDialog))
        },
        _makeDraggable: function() {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var n = this,
                r = n.options,
                i = e(document),
                s;
            n.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(i, o) {
                    s = r.height === "auto" ? "auto" : e(this).height(), e(this).height(e(this).height()).addClass("ui-dialog-dragging"), n._trigger("dragStart", i, t(o))
                },
                drag: function(e, r) {
                    n._trigger("drag", e, t(r))
                },
                stop: function(o, u) {
                    r.position = [u.position.left - i.scrollLeft(), u.position.top - i.scrollTop()], e(this).removeClass("ui-dialog-dragging").height(s), n._trigger("dragStop", o, t(u)), e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(n) {
            function r(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            n = n === t ? this.options.resizable : n;
            var i = this,
                s = i.options,
                o = i.uiDialog.css("position");
            n = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw", i.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: i.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: i._minHeight(),
                handles: n,
                start: function(t, n) {
                    e(this).addClass("ui-dialog-resizing"), i._trigger("resizeStart", t, r(n))
                },
                resize: function(e, t) {
                    i._trigger("resize", e, r(t))
                },
                stop: function(t, n) {
                    e(this).removeClass("ui-dialog-resizing"), s.height = e(this).height(), s.width = e(this).width(), i._trigger("resizeStop", t, r(n)), e.ui.dialog.overlay.resize()
                }
            }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function(t) {
            var n = [],
                r = [0, 0],
                i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function(e, t) {
                    +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                }), t = {
                    my: n.join(" "),
                    at: n.join(" "),
                    offset: r.join(" ")
                };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else t = e.ui.dialog.prototype.options.position;
            (i = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(e.extend({
                of: window
            }, t)), i || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                s = {},
                o = !1;
            e.each(t, function(e, t) {
                i._setOption(e, t), e in n && (o = !0), e in r && (s[e] = t)
            }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(t, n) {
            var r = this,
                i = r.uiDialog;
            switch (t) {
            case "beforeclose":
                t = "beforeClose";
                break;
            case "buttons":
                r._createButtons(n);
                break;
            case "closeText":
                r.uiDialogTitlebarCloseText.text("" + n);
                break;
            case "dialogClass":
                i.removeClass(r.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + n);
                break;
            case "disabled":
                n ? i.addClass("ui-dialog-disabled") : i.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                var s = i.is(":data(draggable)");
                s && !n && i.draggable("destroy"), !s && n && r._makeDraggable();
                break;
            case "position":
                r._position(n);
                break;
            case "resizable":
                (s = i.is(":data(resizable)")) && !n && i.resizable("destroy"), s && typeof n == "string" && i.resizable("option", "handles", n), !s && n !== !1 && r._makeResizable(n);
                break;
            case "title":
                e(".ui-dialog-title", r.uiDialogTitlebar).html("" + (n || "&#160;"))
            }
            e.Widget.prototype._setOption.apply(r, arguments)
        },
        _size: function() {
            var t = this.options,
                n, r, i = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), t.minWidth > t.width && (t.width = t.minWidth), n = this.uiDialog.css({
                height: "auto",
                width: t.width
            }).height(), r = Math.max(0, t.minHeight - n), t.height === "auto" ? e.support.minHeight ? this.element.css({
                minHeight: r,
                height: "auto"
            }) : (this.uiDialog.show(), t = this.element.css("height", "auto").height(), i || this.uiDialog.hide(), this.element.height(Math.max(t, r))) : this.element.height(Math.max(t.height - n, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), e.extend(e.ui.dialog, {
        version: "1.8.13",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(e) {
            return e = e.attr("id"), e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
        },
        overlay: function(t) {
            this.$el = e.ui.dialog.overlay.create(t)
        }
    }), e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e) {
            return e + ".dialog-overlay"
        }).join(" "),
        create: function(t) {
            this.instances.length === 0 && (setTimeout(function() {
                e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function(t) {
                    if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
                })
            }, 1), e(document).bind("keydown.dialog-overlay", function(n) {
                t.options.closeOnEscape && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
            }), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
            var n = (this.oldInstances.pop() || e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
        },
        destroy: function(t) {
            var n = e.inArray(t, this.instances);
            n != -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.remove();
            var r = 0;
            e.each(this.instances, function() {
                r = Math.max(r, this.css("z-index"))
            }), this.maxZ = r
        },
        height: function() {
            var t, n;
            return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
        },
        width: function() {
            var t, n;
            return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
        },
        resize: function() {
            var t = e([]);
            e.each(e.ui.dialog.overlay.instances, function() {
                t = t.add(this)
            }), t.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    }), e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function() {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery), function(e) {
    e.widget("ui.slider", e.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var t = this,
                n = this.options,
                r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                i = n.values && n.values.length || 1,
                s = [];
            this._mouseSliding = this._keySliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (n.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), n.range && (n.range === !0 && (n.values || (n.values = [this._valueMin(), this._valueMin()]), n.values.length && n.values.length !== 2 && (n.values = [n.values[0], n.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (n.range === "min" || n.range === "max" ? " ui-slider-range-" + n.range : "")));
            for (var o = r.length; o < i; o += 1) s.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = r.add(e(s.join("")).appendTo(t.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
                e.preventDefault()
            }).hover(function() {
                n.disabled || e(this).addClass("ui-state-hover")
            }, function() {
                e(this).removeClass("ui-state-hover")
            }).focus(function() {
                n.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function() {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function(t) {
                e(this).data("index.ui-slider-handle", t)
            }), this.handles.keydown(function(n) {
                var r = !0,
                    i = e(this).data("index.ui-slider-handle"),
                    s, o, u;
                if (!t.options.disabled) {
                    switch (n.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        r = !1;
                        if (!t._keySliding) {
                            t._keySliding = !0, e(this).addClass("ui-state-active"), s = t._start(n, i);
                            if (s === !1) return
                        }
                    }
                    u = t.options.step, s = t.options.values && t.options.values.length ? o = t.values(i) : o = t.value();
                    switch (n.keyCode) {
                    case e.ui.keyCode.HOME:
                        o = t._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        o = t._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        o = t._trimAlignValue(s + (t._valueMax() - t._valueMin()) / 5);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        o = t._trimAlignValue(s - (t._valueMax() - t._valueMin()) / 5);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (s === t._valueMax()) return;
                        o = t._trimAlignValue(s + u);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (s === t._valueMin()) return;
                        o = t._trimAlignValue(s - u)
                    }
                    return t._slide(n, i, o), r
                }
            }).keyup(function(n) {
                var r = e(this).data("index.ui-slider-handle");
                t._keySliding && (t._keySliding = !1, t._stop(n, r), t._change(n, r), e(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function() {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function(t) {
            var n = this.options,
                r, i, s, o, u;
            return n.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), r = this._normValueFromMouse({
                x: t.pageX,
                y: t.pageY
            }), i = this._valueMax() - this._valueMin() + 1, o = this, this.handles.each(function(t) {
                var n = Math.abs(r - o.values(t));
                i > n && (i = n, s = e(this), u = t)
            }), n.range === !0 && this.values(1) === n.min && (u += 1, s = e(this.handles[u])), this._start(t, u) === !1 ? !1 : (this._mouseSliding = !0, o._handleIndex = u, s.addClass("ui-state-active").focus(), n = s.offset(), this._clickOffset = e(t.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: t.pageX - n.left - s.width() / 2,
                top: t.pageY - n.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            } : {
                left: 0,
                top: 0
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, r), this._animateOff = !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = this._normValueFromMouse({
                x: e.pageX,
                y: e.pageY
            });
            return this._slide(e, this._handleIndex, t), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._clickOffset = this._handleIndex = null, this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, e = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, e = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = e / t, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), e = this._valueMax() - this._valueMin(), this._trimAlignValue(this._valueMin() + t * e)
        },
        _start: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function(e, t, n) {
            var r;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (r = this.values(), r[t] = n, e = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: r
            }), this.values(t ? 0 : 1), e !== !1 && this.values(t, n, !0))) : n !== this.value() && (e = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), e !== !1 && this.value(n))
        },
        _stop: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
            }
        },
        value: function(e) {
            if (!arguments.length) return this._value();
            this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0)
        },
        values: function(t, n) {
            var r, i, s;
            if (arguments.length > 1) this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
            else {
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                r = this.options.values, i = arguments[0];
                for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
                this._refreshValue()
            }
        },
        _setOption: function(t, n) {
            var r, i = 0;
            e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case "disabled":
                n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.attr("disabled", "disabled"), this.element.addClass("ui-disabled")) : (this.handles.removeAttr("disabled"), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                this._animateOff = !0, this._refreshValue();
                for (r = 0; r < i; r += 1) this._change(null, r);
                this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, n;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            t = this.options.values.slice();
            for (n = 0; n < t.length; n += 1) t[n] = this._trimAlignValue(t[n]);
            return t
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t;
            return alignValue = e - n, Math.abs(n) * 2 >= t && (alignValue += n > 0 ? t : -t), parseFloat(alignValue.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t = this.options.range,
                n = this.options,
                r = this,
                i = this._animateOff ? !1 : n.animate,
                s, o = {},
                u, a, f, l;
            this.options.values && this.options.values.length ? this.handles.each(function(t) {
                s = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", e(this).stop(1, 1)[i ? "animate" : "css"](o, n.animate), r.options.range === !0 && (r.orientation === "horizontal" ? (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
                    left: s + "%"
                }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
                    width: s - u + "%"
                }, {
                    queue: !1,
                    duration: n.animate
                })) : (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
                    bottom: s + "%"
                }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
                    height: s - u + "%"
                }, {
                    queue: !1,
                    duration: n.animate
                }))), u = s
            }) : (a = this.value(), f = this._valueMin(), l = this._valueMax(), s = l !== f ? (a - f) / (l - f) * 100 : 0, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", this.handle.stop(1, 1)[i ? "animate" : "css"](o, n.animate), t === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[i ? "animate" : "css"]({
                width: s + "%"
            }, n.animate), t === "max" && this.orientation === "horizontal" && this.range[i ? "animate" : "css"]({
                width: 100 - s + "%"
            }, {
                queue: !1,
                duration: n.animate
            }), t === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[i ? "animate" : "css"]({
                height: s + "%"
            }, n.animate), t === "max" && this.orientation === "vertical" && this.range[i ? "animate" : "css"]({
                height: 100 - s + "%"
            }, {
                queue: !1,
                duration: n.animate
            }))
        }
    }), e.extend(e.ui.slider, {
        version: "1.8.13"
    })
}(jQuery), function(e, n) {
    function r() {
        return ++s
    }
    function i() {
        return ++o
    }
    var s = 0,
        o = 0;
    e.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function() {
            this._tabify(!0)
        },
        _setOption: function(e, t) {
            e == "selected" ? this.options.collapsible && t == this.options.selected || this.select(t) : (this.options[e] = t, this._tabify())
        },
        _tabId: function(e) {
            return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + r()
        },
        _sanitizeSelector: function(e) {
            return e.replace(/:/g, "\\:")
        },
        _cookie: function() {
            var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + i());
            return e.cookie.apply(null, [t].concat(e.makeArray(arguments)))
        },
        _ui: function(e, t) {
            return {
                tab: e,
                panel: t,
                index: this.anchors.index(e)
            }
        },
        _cleanup: function() {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                var t = e(this);
                t.html(t.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function(t) {
            function r(t, n) {
                t.css("display", ""), !e.support.opacity && n.opacity && t[0].style.removeAttribute("filter")
            }
            var i = this,
                s = this.options,
                o = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0), this.lis = e(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function() {
                return e("a", this)[0]
            }), this.panels = e([]), this.anchors.each(function(t, n) {
                var r = e(n).attr("href"),
                    u = r.split("#")[0],
                    a;
                u && (u === location.toString().split("#")[0] || (a = e("base")[0]) && u === a.href) && (r = n.hash, n.href = r), o.test(r) ? i.panels = i.panels.add(i.element.find(i._sanitizeSelector(r))) : r && r !== "#" ? (e.data(n, "href.tabs", r), e.data(n, "load.tabs", r.replace(/#.*$/, "")), r = i._tabId(n), n.href = "#" + r, n = i.element.find("#" + r), n.length || (n = e(s.panelTemplate).attr("id", r).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(i.panels[t - 1] || i.list), n.data("destroy.tabs", !0)), i.panels = i.panels.add(n)) : s.disabled.push(t)
            }), t ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), s.selected === n ? (location.hash && this.anchors.each(function(e, t) {
                if (t.hash == location.hash) return s.selected = e, !1
            }), typeof s.selected != "number" && s.cookie && (s.selected = parseInt(i._cookie(), 10)), typeof s.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (s.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), s.selected = s.selected || (this.lis.length ? 0 : -1)) : s.selected === null && (s.selected = -1), s.selected = s.selected >= 0 && this.anchors[s.selected] || s.selected < 0 ? s.selected : 0, s.disabled = e.unique(s.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"), function(e) {
                return i.lis.index(e)
            }))).sort(), e.inArray(s.selected, s.disabled) != -1 && s.disabled.splice(e.inArray(s.selected, s.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), s.selected >= 0 && this.anchors.length && (i.element.find(i._sanitizeSelector(i.anchors[s.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(s.selected).addClass("ui-tabs-selected ui-state-active"), i.element.queue("tabs", function() {
                i._trigger("show", null, i._ui(i.anchors[s.selected], i.element.find(i._sanitizeSelector(i.anchors[s.selected].hash))[0]))
            }), this.load(s.selected)), e(window).bind("unload", function() {
                i.lis.add(i.anchors).unbind(".tabs"), i.lis = i.anchors = i.panels = null
            })) : s.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[s.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), s.cookie && this._cookie(s.selected, s.cookie), t = 0;
            for (var u; u = this.lis[t]; t++) e(u)[e.inArray(t, s.disabled) != -1 && !e(u).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            s.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
            if (s.event !== "mouseover") {
                var a = function(e, t) {
                        t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e)
                    },
                    f = function(e, t) {
                        t.removeClass("ui-state-" + e)
                    };
                this.lis.bind("mouseover.tabs", function() {
                    a("hover", e(this))
                }), this.lis.bind("mouseout.tabs", function() {
                    f("hover", e(this))
                }), this.anchors.bind("focus.tabs", function() {
                    a("focus", e(this).closest("li"))
                }), this.anchors.bind("blur.tabs", function() {
                    f("focus", e(this).closest("li"))
                })
            }
            var l, c;
            s.fx && (e.isArray(s.fx) ? (l = s.fx[0], c = s.fx[1]) : l = c = s.fx);
            var h = c ?
            function(t, n) {
                e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.hide().removeClass("ui-tabs-hide").animate(c, c.duration || "normal", function() {
                    r(n, c), i._trigger("show", null, i._ui(t, n[0]))
                })
            } : function(t, n) {
                e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.removeClass("ui-tabs-hide"), i._trigger("show", null, i._ui(t, n[0]))
            }, v = l ?
            function(e, t) {
                t.animate(l, l.duration || "normal", function() {
                    i.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), r(t, l), i.element.dequeue("tabs")
                })
            } : function(e, t) {
                i.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), i.element.dequeue("tabs")
            };
            this.anchors.bind(s.event + ".tabs", function() {
                var t = this,
                    n = e(t).closest("li"),
                    r = i.panels.filter(":not(.ui-tabs-hide)"),
                    o = i.element.find(i._sanitizeSelector(t.hash));
                if (n.hasClass("ui-tabs-selected") && !s.collapsible || n.hasClass("ui-state-disabled") || n.hasClass("ui-state-processing") || i.panels.filter(":animated").length || i._trigger("select", null, i._ui(this, o[0])) === !1) return this.blur(), !1;
                s.selected = i.anchors.index(this), i.abort();
                if (s.collapsible) {
                    if (n.hasClass("ui-tabs-selected")) return s.selected = -1, s.cookie && i._cookie(s.selected, s.cookie), i.element.queue("tabs", function() {
                        v(t, r)
                    }).dequeue("tabs"), this.blur(), !1;
                    if (!r.length) return s.cookie && i._cookie(s.selected, s.cookie), i.element.queue("tabs", function() {
                        h(t, o)
                    }), i.load(i.anchors.index(this)), this.blur(), !1
                }
                s.cookie && i._cookie(s.selected, s.cookie);
                if (!o.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                r.length && i.element.queue("tabs", function() {
                    v(t, r)
                }), i.element.queue("tabs", function() {
                    h(t, o)
                }), i.load(i.anchors.index(this)), e.browser.msie && this.blur()
            }), this.anchors.bind("click.tabs", function() {
                return !1
            })
        },
        _getIndex: function(e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"))), e
        },
        destroy: function() {
            var t = this.options;
            return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function() {
                var t = e.data(this, "href.tabs");
                t && (this.href = t);
                var n = e(this).unbind(".tabs");
                e.each(["href", "load", "cache"], function(e, t) {
                    n.removeData(t + ".tabs")
                })
            }), this.lis.unbind(".tabs").add(this.panels).each(function() {
                e.data(this, "destroy.tabs") ? e(this).remove() : e(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
            }), t.cookie && this._cookie(null, t.cookie), this
        },
        add: function(t, r, i) {
            i === n && (i = this.anchors.length);
            var s = this,
                o = this.options;
            r = e(o.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, r)), t = t.indexOf("#") ? this._tabId(e("a", r)[0]) : t.replace("#", ""), r.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
            var u = s.element.find("#" + t);
            return u.length || (u = e(o.panelTemplate).attr("id", t).data("destroy.tabs", !0)), u.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), i >= this.lis.length ? (r.appendTo(this.list), u.appendTo(this.list[0].parentNode)) : (r.insertBefore(this.lis[i]), u.insertBefore(this.panels[i])), o.disabled = e.map(o.disabled, function(e) {
                return e >= i ? ++e : e
            }), this._tabify(), this.anchors.length == 1 && (o.selected = 0, r.addClass("ui-tabs-selected ui-state-active"), u.removeClass("ui-tabs-hide"), this.element.queue("tabs", function() {
                s._trigger("show", null, s._ui(s.anchors[0], s.panels[0]))
            }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
        },
        remove: function(t) {
            t = this._getIndex(t);
            var n = this.options,
                r = this.lis.eq(t).remove(),
                i = this.panels.eq(t).remove();
            return r.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function(e) {
                return e != t
            }), function(e) {
                return e >= t ? --e : e
            }), this._tabify(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
        },
        enable: function(t) {
            t = this._getIndex(t);
            var n = this.options;
            if (e.inArray(t, n.disabled) != -1) return this.lis.eq(t).removeClass("ui-state-disabled"), n.disabled = e.grep(n.disabled, function(e) {
                return e != t
            }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this
        },
        disable: function(e) {
            e = this._getIndex(e);
            var t = this.options;
            return e != t.selected && (this.lis.eq(e).addClass("ui-state-disabled"), t.disabled.push(e), t.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))), this
        },
        select: function(e) {
            e = this._getIndex(e);
            if (e == -1) {
                if (!this.options.collapsible || this.options.selected == -1) return this;
                e = this.options.selected
            }
            return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this
        },
        load: function(t) {
            t = this._getIndex(t);
            var n = this,
                r = this.options,
                i = this.anchors.eq(t)[0],
                s = e.data(i, "load.tabs");
            this.abort();
            if (!(!s || this.element.queue("tabs").length !== 0 && e.data(i, "cache.tabs"))) {
                this.lis.eq(t).addClass("ui-state-processing");
                if (r.spinner) {
                    var o = e("span", i);
                    o.data("label.tabs", o.html()).html(r.spinner)
                }
                return this.xhr = e.ajax(e.extend({}, r.ajaxOptions, {
                    url: s,
                    success: function(s, o) {
                        n.element.find(n._sanitizeSelector(i.hash)).html(s), n._cleanup(), r.cache && e.data(i, "cache.tabs", !0), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
                        try {
                            r.ajaxOptions.success(s, o)
                        } catch (u) {}
                    },
                    error: function(e, s) {
                        n._cleanup(), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
                        try {
                            r.ajaxOptions.error(e, s, t, i)
                        } catch (o) {}
                    }
                })), n.element.dequeue("tabs"), this
            }
            this.element.dequeue("tabs")
        },
        abort: function() {
            return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
        },
        url: function(e, t) {
            return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
        },
        length: function() {
            return this.anchors.length
        }
    }), e.extend(e.ui.tabs, {
        version: "1.8.13"
    }), e.extend(e.ui.tabs.prototype, {
        rotation: null,
        rotate: function(e, n) {
            var r = this,
                i = this.options,
                s = r._rotate || (r._rotate = function(t) {
                    clearTimeout(r.rotation), r.rotation = setTimeout(function() {
                        var e = i.selected;
                        r.select(++e < r.anchors.length ? e : 0)
                    }, e), t && t.stopPropagation()
                });
            return n = r._unrotate || (r._unrotate = n ?
            function() {
                t = i.selected, s()
            } : function(e) {
                e.clientX && r.rotate(null)
            }), e ? (this.element.bind("tabsshow", s), this.anchors.bind(i.event + ".tabs", n), s()) : (clearTimeout(r.rotation), this.element.unbind("tabsshow", s), this.anchors.unbind(i.event + ".tabs", n), delete this._rotate, delete this._unrotate), this
        }
    })
}(jQuery), function(d, B) {
    function M() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._inDialog = this._datepickerShowing = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1
        }, d.extend(this._defaults, this.regional[""]), this.dpDiv = N(d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function N(e) {
        return e.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout", function() {
            d(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && d(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && d(this).removeClass("ui-datepicker-next-hover")
        }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", function() {
            d.datepicker._isDisabledDatepicker(J.inline ? e.parent()[0] : J.input[0]) || (d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && d(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && d(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function H(e, t) {
        d.extend(e, t);
        for (var n in t) if (t[n] == null || t[n] == B) e[n] = t[n];
        return e
    }
    d.extend(d.ui, {
        datepicker: {
            version: "1.8.13"
        }
    });
    var z = (new Date).getTime(),
        J;
    d.extend(M.prototype, {
        markerClassName: "hasDatepicker",
        log: function() {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return H(this._defaults, e || {}), this
        },
        _attachDatepicker: function(a, b) {
            var c = null;
            for (var e in this._defaults) {
                var f = a.getAttribute("date:" + e);
                if (f) {
                    c = c || {};
                    try {
                        c[e] = eval(f)
                    } catch (h) {
                        c[e] = f
                    }
                }
            }
            e = a.nodeName.toLowerCase(), f = e == "div" || e == "span", a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
            var i = this._newInst(d(a), f);
            i.settings = d.extend({}, b || {}, c || {}), e == "input" ? this._connectDatepicker(a, i) : f && this._inlineDatepicker(a, i)
        },
        _newInst: function(e, t) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? N(d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, t) {
            var n = d(e);
            t.append = d([]), t.trigger = d([]), n.hasClass(this.markerClassName) || (this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function(e, n) {
                return this._get(t, n)
            }), this._autoSize(t), d.data(e, "datepicker", t))
        },
        _attachments: function(e, t) {
            var n = this._get(t, "appendText"),
                r = this._get(t, "isRTL");
            t.append && t.append.remove(), n && (t.append = d('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove(), n = this._get(t, "showOn"), (n == "focus" || n == "both") && e.focus(this._showDatepicker);
            if (n == "button" || n == "both") {
                n = this._get(t, "buttonText");
                var i = this._get(t, "buttonImage");
                t.trigger = d(this._get(t, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
                    src: i,
                    alt: n,
                    title: n
                }) : d('<button type="button"></button>').addClass(this._triggerClass).html(i == "" ? n : d("<img/>").attr({
                    src: i,
                    alt: n,
                    title: n
                }))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function() {
                    return d.datepicker._datepickerShowing && d.datepicker._lastInput == e[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(e[0]), !1
                })
            }
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t = new Date(2009, 11, 20),
                    n = this._get(e, "dateFormat");
                if (n.match(/[DM]/)) {
                    var r = function(e) {
                            for (var t = 0, n = 0, r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
                            return n
                        };
                    t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                }
                e.input.attr("size", this._formatDate(e, t).length)
            }
        },
        _inlineDatepicker: function(e, t) {
            var n = d(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function(e, n) {
                return this._get(t, n)
            }), d.data(e, "datepicker", t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.dpDiv.show())
        },
        _dialogDatepicker: function(e, t, n, r, i) {
            return e = this._dialogInst, e || (this.uuid += 1, this._dialogInput = d('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), d("body").append(this._dialogInput), e = this._dialogInst = this._newInst(this._dialogInput, !1), e.settings = {}, d.data(this._dialogInput[0], "datepicker", e)), H(e.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(e, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null, this._pos || (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), e.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), d.blockUI && d.blockUI(this.dpDiv), d.data(this._dialogInput[0], "datepicker", e), this
        },
        _destroyDatepicker: function(e) {
            var t = d(e),
                n = d.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                d.removeData(e, "datepicker"), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function(e) {
            var t = d(e),
                n = d.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                if (r == "input") e.disabled = !1, n.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if (r == "div" || r == "span") t = t.children("." + this._inlineClass), t.children().removeClass("ui-state-disabled"), t.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
                this._disabledInputs = d.map(this._disabledInputs, function(t) {
                    return t == e ? null : t
                })
            }
        },
        _disableDatepicker: function(e) {
            var t = d(e),
                n = d.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if (r == "div" || r == "span") t = t.children("." + this._inlineClass), t.children().addClass("ui-state-disabled"), t.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
                this._disabledInputs = d.map(this._disabledInputs, function(t) {
                    return t == e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e
            }
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == e) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return d.data(e, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, t, n) {
            var r = this._getInst(e);
            if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? d.extend({}, d.datepicker._defaults) : r ? t == "all" ? d.extend({}, r.settings) : this._get(r, t) : null;
            var i = t || {};
            typeof t == "string" && (i = {}, i[t] = n);
            if (r) {
                this._curInst == r && this._hideDatepicker();
                var s = this._getDateDatepicker(e, !0),
                    o = this._getMinMaxDate(r, "min"),
                    u = this._getMinMaxDate(r, "max");
                H(r.settings, i), o !== null && i.dateFormat !== B && i.minDate === B && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== B && i.maxDate === B && (r.settings.maxDate = this._formatDate(r, u)), this._attachments(d(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
            }
        },
        _changeDatepicker: function(e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function(e) {
            (e = this._getInst(e)) && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(e, t) {
            if (e = this._getInst(e)) this._setDate(e, t), this._updateDatepicker(e), this._updateAlternate(e)
        },
        _getDateDatepicker: function(e, t) {
            return (e = this._getInst(e)) && !e.inline && this._setDateFromField(e, t), e ? this._getDate(e) : null
        },
        _doKeyDown: function(e) {
            var t = d.datepicker._getInst(e.target),
                n = !0,
                r = t.dpDiv.is(".ui-datepicker-rtl");
            t._keyEvent = !0;
            if (d.datepicker._datepickerShowing) switch (e.keyCode) {
            case 9:
                d.datepicker._hideDatepicker(), n = !1;
                break;
            case 13:
                return n = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", t.dpDiv), n[0] ? d.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, n[0]) : d.datepicker._hideDatepicker(), !1;
            case 27:
                d.datepicker._hideDatepicker();
                break;
            case 33:
                d.datepicker._adjustDate(e.target, e.ctrlKey ? -d.datepicker._get(t, "stepBigMonths") : -d.datepicker._get(t, "stepMonths"), "M");
                break;
            case 34:
                d.datepicker._adjustDate(e.target, e.ctrlKey ? +d.datepicker._get(t, "stepBigMonths") : +d.datepicker._get(t, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && d.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && d.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && d.datepicker._adjustDate(e.target, e.ctrlKey ? -d.datepicker._get(t, "stepBigMonths") : -d.datepicker._get(t, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && d.datepicker._adjustDate(e.target, e.ctrlKey ? +d.datepicker._get(t, "stepBigMonths") : +d.datepicker._get(t, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && d.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                break;
            default:
                n = !1
            } else e.keyCode == 36 && e.ctrlKey ? d.datepicker._showDatepicker(this) : n = !1;
            n && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var t = d.datepicker._getInst(e.target);
            if (d.datepicker._get(t, "constrainInput")) {
                t = d.datepicker._possibleChars(d.datepicker._get(t, "dateFormat"));
                var n = String.fromCharCode(e.charCode == B ? e.keyCode : e.charCode);
                return e.ctrlKey || e.metaKey || n < " " || !t || t.indexOf(n) > -1
            }
        },
        _doKeyUp: function(e) {
            e = d.datepicker._getInst(e.target);
            if (e.input.val() != e.lastVal) try {
                d.datepicker.parseDate(d.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, d.datepicker._getFormatConfig(e)) && (d.datepicker._setDateFromField(e), d.datepicker._updateAlternate(e), d.datepicker._updateDatepicker(e))
            } catch (t) {
                d.datepicker.log(t)
            }
            return !0
        },
        _showDatepicker: function(e) {
            e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = d("input", e.parentNode)[0]);
            if (!d.datepicker._isDisabledDatepicker(e) && d.datepicker._lastInput != e) {
                var t = d.datepicker._getInst(e);
                d.datepicker._curInst && d.datepicker._curInst != t && d.datepicker._curInst.dpDiv.stop(!0, !0);
                var n = d.datepicker._get(t, "beforeShow");
                H(t.settings, n ? n.apply(e, [e, t]) : {}), t.lastVal = null, d.datepicker._lastInput = e, d.datepicker._setDateFromField(t), d.datepicker._inDialog && (e.value = ""), d.datepicker._pos || (d.datepicker._pos = d.datepicker._findPos(e), d.datepicker._pos[1] += e.offsetHeight);
                var r = !1;
                d(e).parents().each(function() {
                    return r |= d(this).css("position") == "fixed", !r
                }), r && d.browser.opera && (d.datepicker._pos[0] -= document.documentElement.scrollLeft, d.datepicker._pos[1] -= document.documentElement.scrollTop), n = {
                    left: d.datepicker._pos[0],
                    top: d.datepicker._pos[1]
                }, d.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), d.datepicker._updateDatepicker(t), n = d.datepicker._checkOffset(t, n, r), t.dpDiv.css({
                    position: d.datepicker._inDialog && d.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: n.left + "px",
                    top: n.top + "px"
                });
                if (!t.inline) {
                    n = d.datepicker._get(t, "showAnim");
                    var i = d.datepicker._get(t, "duration"),
                        s = function() {
                            var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                            if (e.length) {
                                var n = d.datepicker._getBorders(t.dpDiv);
                                e.css({
                                    left: -n[0],
                                    top: -n[1],
                                    width: t.dpDiv.outerWidth(),
                                    height: t.dpDiv.outerHeight()
                                })
                            }
                        };
                    t.dpDiv.zIndex(d(e).zIndex() + 1), d.datepicker._datepickerShowing = !0, d.effects && d.effects[n] ? t.dpDiv.show(n, d.datepicker._get(t, "showOptions"), i, s) : t.dpDiv[n || "show"](n ? i : null, s), (!n || !i) && s(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), d.datepicker._curInst = t
                }
            }
        },
        _updateDatepicker: function(e) {
            var t = d.datepicker._getBorders(e.dpDiv);
            J = e, e.dpDiv.empty().append(this._generateHTML(e));
            var n = e.dpDiv.find("iframe.ui-datepicker-cover");
            n.length && n.css({
                left: -t[0],
                top: -t[1],
                width: e.dpDiv.outerWidth(),
                height: e.dpDiv.outerHeight()
            }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover(), t = this._getNumberOfMonths(e), n = t[1], e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), e.dpDiv[(t[0] != 1 || t[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == d.datepicker._curInst && d.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
            if (e.yearshtml) {
                var r = e.yearshtml;
                setTimeout(function() {
                    r === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), r = e.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function(e) {
            var t = function(e) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[e] || e
                };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function(e, t, n) {
            var r = e.dpDiv.outerWidth(),
                i = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                o = e.input ? e.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + d(document).scrollLeft(),
                a = document.documentElement.clientHeight + d(document).scrollTop();
            return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? d(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? d(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
        },
        _findPos: function(e) {
            for (var t = this._get(this._getInst(e), "isRTL"); e && (e.type == "hidden" || e.nodeType != 1 || d.expr.filters.hidden(e));) e = e[t ? "previousSibling" : "nextSibling"];
            return e = d(e).offset(), [e.left, e.top]
        },
        _hideDatepicker: function(e) {
            var t = this._curInst;
            if (!(!t || e && t != d.data(e, "datepicker")) && this._datepickerShowing) {
                e = this._get(t, "showAnim");
                var n = this._get(t, "duration"),
                    r = function() {
                        d.datepicker._tidyDialog(t), this._curInst = null
                    };
                d.effects && d.effects[e] ? t.dpDiv.hide(e, d.datepicker._get(t, "showOptions"), n, r) : t.dpDiv[e == "slideDown" ? "slideUp" : e == "fadeIn" ? "fadeOut" : "hide"](e ? n : null, r), e || r(), (e = this._get(t, "onClose")) && e.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._datepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), d.blockUI && (d.unblockUI(), d("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            d.datepicker._curInst && (e = d(e.target), e[0].id != d.datepicker._mainDivId && e.parents("#" + d.datepicker._mainDivId).length == 0 && !e.hasClass(d.datepicker.markerClassName) && !e.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && (!d.datepicker._inDialog || !d.blockUI) && d.datepicker._hideDatepicker())
        },
        _adjustDate: function(e, t, n) {
            e = d(e);
            var r = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(r, t + (n == "M" ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
        },
        _gotoToday: function(e) {
            e = d(e);
            var t = this._getInst(e[0]);
            if (this._get(t, "gotoCurrent") && t.currentDay) t.selectedDay = t.currentDay, t.drawMonth = t.selectedMonth = t.currentMonth, t.drawYear = t.selectedYear = t.currentYear;
            else {
                var n = new Date;
                t.selectedDay = n.getDate(), t.drawMonth = t.selectedMonth = n.getMonth(), t.drawYear = t.selectedYear = n.getFullYear()
            }
            this._notifyChange(t), this._adjustDate(e)
        },
        _selectMonthYear: function(e, t, n) {
            e = d(e);
            var r = this._getInst(e[0]);
            r._selectingMonthYear = !1, r["selected" + (n == "M" ? "Month" : "Year")] = r["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(e)
        },
        _clickMonthYear: function(e) {
            var t = this._getInst(d(e)[0]);
            t.input && t._selectingMonthYear && setTimeout(function() {
                t.input.focus()
            }, 0), t._selectingMonthYear = !t._selectingMonthYear
        },
        _selectDay: function(e, t, n, r) {
            var i = d(e);
            !d(r).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(i[0]) && (i = this._getInst(i[0]), i.selectedDay = i.currentDay = d("a", r).html(), i.selectedMonth = i.currentMonth = t, i.selectedYear = i.currentYear = n, this._selectDate(e, this._formatDate(i, i.currentDay, i.currentMonth, i.currentYear)))
        },
        _clearDate: function(e) {
            e = d(e), this._getInst(e[0]), this._selectDate(e, "")
        },
        _selectDate: function(e, t) {
            e = this._getInst(d(e)[0]), t = t != null ? t : this._formatDate(e), e.input && e.input.val(t), this._updateAlternate(e);
            var n = this._get(e, "onSelect");
            n ? n.apply(e.input ? e.input[0] : null, [t, e]) : e.input && e.input.trigger("change"), e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], typeof e.input[0] != "object" && e.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var t = this._get(e, "altField");
            if (t) {
                var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    r = this._getDate(e),
                    i = this.formatDate(n, r, this._getFormatConfig(e));
                d(t).each(function() {
                    d(this).val(i)
                })
            }
        },
        noWeekends: function(e) {
            return e = e.getDay(), [e > 0 && e < 6, ""]
        },
        iso8601Week: function(e) {
            e = new Date(e.getTime()), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
            var t = e.getTime();
            return e.setMonth(0), e.setDate(1), Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        },
        parseDate: function(e, t, n) {
            if (e == null || t == null) throw "Invalid arguments";
            t = typeof t == "object" ? t.toString() : t + "";
            if (t == "") return null;
            var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
            for (var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, s = (n ? n.dayNames : null) || this._defaults.dayNames, o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, u = (n ? n.monthNames : null) || this._defaults.monthNames, a = n = -1, f = -1, l = -1, c = !1, h = function(t) {
                    return (t = y + 1 < e.length && e.charAt(y + 1) == t) && y++, t
                }, p = function(e) {
                    var n = h(e);
                    e = new RegExp("^\\d{1," + (e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2) + "}"), e = t.substring(g).match(e);
                    if (!e) throw "Missing number at position " + g;
                    return g += e[0].length, parseInt(e[0], 10)
                }, v = function(e, n, r) {
                    e = d.map(h(e) ? r : n, function(e, t) {
                        return [[t, e]]
                    }).sort(function(e, t) {
                        return -(e[1].length - t[1].length)
                    });
                    var i = -1;
                    d.each(e, function(e, n) {
                        e = n[1];
                        if (t.substr(g, e.length).toLowerCase() == e.toLowerCase()) return i = n[0], g += e.length, !1
                    });
                    if (i != -1) return i + 1;
                    throw "Unknown name at position " + g
                }, m = function() {
                    if (t.charAt(g) != e.charAt(y)) throw "Unexpected literal at position " + g;
                    g++
                }, g = 0, y = 0; y < e.length; y++) if (c) e.charAt(y) == "'" && !h("'") ? c = !1 : m();
            else switch (e.charAt(y)) {
            case "d":
                f = p("d");
                break;
            case "D":
                v("D", i, s);
                break;
            case "o":
                l = p("o");
                break;
            case "m":
                a = p("m");
                break;
            case "M":
                a = v("M", o, u);
                break;
            case "y":
                n = p("y");
                break;
            case "@":
                var b = new Date(p("@"));
                n = b.getFullYear(), a = b.getMonth() + 1, f = b.getDate();
                break;
            case "!":
                b = new Date((p("!") - this._ticksTo1970) / 1e4), n = b.getFullYear(), a = b.getMonth() + 1, f = b.getDate();
                break;
            case "'":
                h("'") ? m() : c = !0;
                break;
            default:
                m()
            }
            n == -1 ? n = (new Date).getFullYear() : n < 100 && (n += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n <= r ? 0 : -100));
            if (l > -1) {
                a = 1, f = l;
                do {
                    r = this._getDaysInMonth(n, a - 1);
                    if (f <= r) break;
                    a++, f -= r
                } while (1)
            }
            b = this._daylightSavingAdjust(new Date(n, a - 1, f));
            if (b.getFullYear() != n || b.getMonth() + 1 != a || b.getDate() != f) throw "Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function(e, t, n) {
            if (!t) return "";
            var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                i = (n ? n.dayNames : null) || this._defaults.dayNames,
                s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort;
            n = (n ? n.monthNames : null) || this._defaults.monthNames;
            var o = function(t) {
                    return (t = c + 1 < e.length && e.charAt(c + 1) == t) && c++, t
                },
                u = function(e, t, n) {
                    t = "" + t;
                    if (o(e)) for (; t.length < n;) t = "0" + t;
                    return t
                },
                a = function(e, t, n, r) {
                    return o(e) ? r[t] : n[t]
                },
                f = "",
                l = !1;
            if (t) for (var c = 0; c < e.length; c++) if (l) e.charAt(c) == "'" && !o("'") ? l = !1 : f += e.charAt(c);
            else switch (e.charAt(c)) {
            case "d":
                f += u("d", t.getDate(), 2);
                break;
            case "D":
                f += a("D", t.getDay(), r, i);
                break;
            case "o":
                f += u("o", (t.getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5, 3);
                break;
            case "m":
                f += u("m", t.getMonth() + 1, 2);
                break;
            case "M":
                f += a("M", t.getMonth(), s, n);
                break;
            case "y":
                f += o("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                break;
            case "@":
                f += t.getTime();
                break;
            case "!":
                f += t.getTime() * 1e4 + this._ticksTo1970;
                break;
            case "'":
                o("'") ? f += "'" : l = !0;
                break;
            default:
                f += e.charAt(c)
            }
            return f
        },
        _possibleChars: function(e) {
            for (var t = "", n = !1, r = function(t) {
                    return (t = i + 1 < e.length && e.charAt(i + 1) == t) && i++, t
                }, i = 0; i < e.length; i++) if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
            else switch (e.charAt(i)) {
            case "d":
            case "m":
            case "y":
            case "@":
                t += "0123456789";
                break;
            case "D":
            case "M":
                return null;
            case "'":
                r("'") ? t += "'" : n = !0;
                break;
            default:
                t += e.charAt(i)
            }
            return t
        },
        _get: function(e, t) {
            return e.settings[t] !== B ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() != e.lastVal) {
                var n = this._get(e, "dateFormat"),
                    r = e.lastVal = e.input ? e.input.val() : null,
                    i, s;
                i = s = this._getDefaultDate(e);
                var o = this._getFormatConfig(e);
                try {
                    i = this.parseDate(n, r, o) || s
                } catch (u) {
                    this.log(u), r = t ? "" : r
                }
                e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(e, t, n) {
            var r = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                i = function(t) {
                    try {
                        return d.datepicker.parseDate(d.datepicker._get(e, "dateFormat"), t, d.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    var r = (t.toLowerCase().match(/^c/) ? d.datepicker._getDate(e) : null) || new Date,
                        i = r.getFullYear(),
                        s = r.getMonth();
                    r = r.getDate();
                    for (var o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = o.exec(t); u;) {
                        switch (u[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(u[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += parseInt(u[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            s += parseInt(u[1], 10), r = Math.min(r, d.datepicker._getDaysInMonth(i, s));
                            break;
                        case "y":
                        case "Y":
                            i += parseInt(u[1], 10), r = Math.min(r, d.datepicker._getDaysInMonth(i, s))
                        }
                        u = o.exec(t)
                    }
                    return new Date(i, s, r)
                };
            if (t = (t = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime())) && t.toString() == "Invalid Date" ? n : t) t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0);
            return this._daylightSavingAdjust(t)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear;
            t = this._restrictMinMax(e, this._determineDate(e, t, new Date)), e.selectedDay = e.currentDay = t.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth(), e.drawYear = e.selectedYear = e.currentYear = t.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            return !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
        },
        _generateHTML: function(e) {
            var t = new Date;
            t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
            var n = this._get(e, "isRTL"),
                r = this._get(e, "showButtonPanel"),
                i = this._get(e, "hideIfNoPrevNext"),
                s = this._get(e, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(e),
                u = this._get(e, "showCurrentAtPos"),
                a = this._get(e, "stepMonths"),
                f = o[0] != 1 || o[1] != 1,
                l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                c = this._getMinMaxDate(e, "min"),
                h = this._getMinMaxDate(e, "max");
            u = e.drawMonth - u;
            var p = e.drawYear;
            u < 0 && (u += 12, p--);
            if (h) {
                var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
                for (v = c && v < c ? c : v; this._daylightSavingAdjust(new Date(p, u, 1)) > v;) u--, u < 0 && (u = 11, p--)
            }
            e.drawMonth = u, e.drawYear = p, v = this._get(e, "prevText"), v = s ? this.formatDate(v, this._daylightSavingAdjust(new Date(p, u - a, 1)), this._getFormatConfig(e)) : v, v = this._canAdjustMonth(e, -1, p, u) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + z + ".datepicker._adjustDate('#" + e.id + "', -" + a + ", 'M');\" title=\"" + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + v + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + v + "</span></a>";
            var m = this._get(e, "nextText");
            m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(p, u + a, 1)), this._getFormatConfig(e)) : m, i = this._canAdjustMonth(e, 1, p, u) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + z + ".datepicker._adjustDate('#" + e.id + "', +" + a + ", 'M');\" title=\"" + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + m + "</span></a>", a = this._get(e, "currentText"), m = this._get(e, "gotoCurrent") && e.currentDay ? l : t, a = s ? this.formatDate(a, m, this._getFormatConfig(e)) : a, s = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + z + '.datepicker._hideDatepicker();">' + this._get(e, "closeText") + "</button>", r = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? s : "") + (this._isInRange(e, m) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + z + ".datepicker._gotoToday('#" + e.id + "');\">" + a + "</button>" : "") + (n ? "" : s) + "</div>" : "", s = parseInt(this._get(e, "firstDay"), 10), s = isNaN(s) ? 0 : s, a = this._get(e, "showWeek"), m = this._get(e, "dayNames"), this._get(e, "dayNamesShort");
            var g = this._get(e, "dayNamesMin"),
                y = this._get(e, "monthNames"),
                b = this._get(e, "monthNamesShort"),
                w = this._get(e, "beforeShowDay"),
                E = this._get(e, "showOtherMonths"),
                S = this._get(e, "selectOtherMonths");
            this._get(e, "calculateWeek");
            for (var x = this._getDefaultDate(e), T = "", N = 0; N < o[0]; N++) {
                for (var C = "", k = 0; k < o[1]; k++) {
                    var L = this._daylightSavingAdjust(new Date(p, u, e.selectedDay)),
                        A = " ui-corner-all",
                        O = "";
                    if (f) {
                        O += '<div class="ui-datepicker-group';
                        if (o[1] > 1) switch (k) {
                        case 0:
                            O += " ui-datepicker-group-first", A = " ui-corner-" + (n ? "right" : "left");
                            break;
                        case o[1] - 1:
                            O += " ui-datepicker-group-last", A = " ui-corner-" + (n ? "left" : "right");
                            break;
                        default:
                            O += " ui-datepicker-group-middle", A = ""
                        }
                        O += '">'
                    }
                    O += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + A + '">' + (/all|left/.test(A) && N == 0 ? n ? i : v : "") + (/all|right/.test(A) && N == 0 ? n ? v : i : "") + this._generateMonthYearHeader(e, u, p, c, h, N > 0 || k > 0, y, b) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var M = a ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                    for (A = 0; A < 7; A++) {
                        var _ = (A + s) % 7;
                        M += "<th" + ((A + s + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + m[_] + '">' + g[_] + "</span></th>"
                    }
                    O += M + "</tr></thead><tbody>", M = this._getDaysInMonth(p, u), p == e.selectedYear && u == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, M)), A = (this._getFirstDayOfMonth(p, u) - s + 7) % 7, M = f ? 6 : Math.ceil((A + M) / 7), _ = this._daylightSavingAdjust(new Date(p, u, 1 - A));
                    for (var D = 0; D < M; D++) {
                        O += "<tr>";
                        var P = a ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(_) + "</td>" : "";
                        for (A = 0; A < 7; A++) {
                            var H = w ? w.apply(e.input ? e.input[0] : null, [_]) : [!0, ""],
                                B = _.getMonth() != u,
                                j = B && !S || !H[0] || c && _ < c || h && _ > h;
                            P += '<td class="' + ((A + s + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (_.getTime() == L.getTime() && u == e.selectedMonth && e._keyEvent || x.getTime() == _.getTime() && x.getTime() == L.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B && !E ? "" : " " + H[1] + (_.getTime() == l.getTime() ? " " + this._currentClass : "") + (_.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!B || E) && H[2] ? ' title="' + H[2] + '"' : "") + (j ? "" : ' onclick="DP_jQuery_' + z + ".datepicker._selectDay('#" + e.id + "'," + _.getMonth() + "," + _.getFullYear() + ', this);return false;"') + ">" + (B && !E ? "&#xa0;" : j ? '<span class="ui-state-default">' + _.getDate() + "</span>" : '<a class="ui-state-default' + (_.getTime() == t.getTime() ? " ui-state-highlight" : "") + (_.getTime() == l.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + '" href="#">' + _.getDate() + "</a>") + "</td>", _.setDate(_.getDate() + 1), _ = this._daylightSavingAdjust(_)
                        }
                        O += P + "</tr>"
                    }
                    u++, u > 11 && (u = 0, p++), O += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && k == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), C += O
                }
                T += C
            }
            return T += r + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, T
        },
        _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
            var a = this._get(e, "changeMonth"),
                f = this._get(e, "changeYear"),
                l = this._get(e, "showMonthAfterYear"),
                c = '<div class="ui-datepicker-title">',
                h = "";
            if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
            else {
                o = r && r.getFullYear() == n;
                var p = i && i.getFullYear() == n;
                h += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + z + ".datepicker._selectMonthYear('#" + e.id + "', this, 'M');\" onclick=\"DP_jQuery_" + z + ".datepicker._clickMonthYear('#" + e.id + "');\">";
                for (var d = 0; d < 12; d++)(!o || d >= r.getMonth()) && (!p || d <= i.getMonth()) && (h += '<option value="' + d + '"' + (d == t ? ' selected="selected"' : "") + ">" + u[d] + "</option>");
                h += "</select>"
            }
            l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
            if (!e.yearshtml) {
                e.yearshtml = "";
                if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
                else {
                    u = this._get(e, "yearRange").split(":");
                    var v = (new Date).getFullYear();
                    o = function(e) {
                        return e = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10), isNaN(e) ? v : e
                    }, t = o(u[0]), u = Math.max(t, o(u[1] || "")), t = r ? Math.max(t, r.getFullYear()) : t, u = i ? Math.min(u, i.getFullYear()) : u;
                    for (e.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + z + ".datepicker._selectMonthYear('#" + e.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + z + ".datepicker._clickMonthYear('#" + e.id + "');\">"; t <= u; t++) e.yearshtml += '<option value="' + t + '"' + (t == n ? ' selected="selected"' : "") + ">" + t + "</option>";
                    e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
                }
            }
            return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
        },
        _adjustInstDate: function(e, t, n) {
            var r = e.drawYear + (n == "Y" ? t : 0),
                i = e.drawMonth + (n == "M" ? t : 0);
            t = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, t))), e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var n = this._getMinMaxDate(e, "min");
            return e = this._getMinMaxDate(e, "max"), t = n && t < n ? n : t, t = e && t > e ? e : t
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            return e = this._get(e, "numberOfMonths"), e == null ? [1, 1] : typeof e == "number" ? [1, e] : e
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function(e, t, n, r) {
            var i = this._getNumberOfMonths(e);
            return n = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1)), t < 0 && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function(e, t) {
            var n = this._getMinMaxDate(e, "min");
            return e = this._getMinMaxDate(e, "max"), (!n || t.getTime() >= n.getTime()) && (!e || t.getTime() <= e.getTime())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, n, r) {
            return t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear), t = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)), this.formatDate(this._get(e, "dateFormat"), t, this._getFormatConfig(e))
        }
    }), d.fn.datepicker = function(e) {
        if (!this.length) return this;
        d.datepicker.initialized || (d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv), d.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this[0]].concat(t)) : this.each(function() {
            typeof e == "string" ? d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this].concat(t)) : d.datepicker._attachDatepicker(this, e)
        }) : d.datepicker["_" + e + "Datepicker"].apply(d.datepicker, [this[0]].concat(t))
    }, d.datepicker = new M, d.datepicker.initialized = !1, d.datepicker.uuid = (new Date).getTime(), d.datepicker.version = "1.8.13", window["DP_jQuery_" + z] = d
}(jQuery), function(e, t) {
    e.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), e.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function(e) {
            return e === t ? this._value() : (this._setOption("value", e), this)
        },
        _setOption: function(t, n) {
            t === "value" && (this.options.value = n, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function() {
            var e = this.options.value;
            return typeof e != "number" && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var e = this.value(),
                t = this._percentage();
            this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
        }
    }), e.extend(e.ui.progressbar, {
        version: "1.8.13"
    })
}(jQuery), jQuery.effects ||
function(e, t) {
    function n(t) {
        var n;
        return t && t.constructor == Array && t.length == 3 ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(n[1]) * 2.55, parseFloat(n[2]) * 2.55, parseFloat(n[3]) * 2.55] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(t) ? f.transparent : f[e.trim(t).toLowerCase()]
    }
    function r(t, r) {
        var i;
        do {
            i = e.curCSS(t, r);
            if (i != "" && i != "transparent" || e.nodeName(t, "body")) break;
            r = "backgroundColor"
        } while (t = t.parentNode);
        return n(i)
    }
    function i() {
        var e = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            t = {},
            n, r;
        if (e && e.length && e[0] && e[e[0]]) for (var i = e.length; i--;) n = e[i], typeof e[n] == "string" && (r = n.replace(/\-(\w)/g, function(e, t) {
            return t.toUpperCase()
        }), t[r] = e[n]);
        else for (n in e) typeof e[n] == "string" && (t[n] = e[n]);
        return t
    }
    function s(t) {
        var n, r;
        for (n in t) r = t[n], (r == null || e.isFunction(r) || n in c || /scrollbar/.test(n) || !/color/i.test(n) && isNaN(parseFloat(r))) && delete t[n];
        return t
    }
    function o(e, t) {
        var n = {
            _: 0
        },
            r;
        for (r in t) e[r] != t[r] && (n[r] = t[r]);
        return n
    }
    function u(t, n, r, i) {
        typeof t == "object" && (i = n, r = null, n = t, t = n.effect), e.isFunction(n) && (i = n, r = null, n = {});
        if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
        return e.isFunction(r) && (i = r, r = null), n = n || {}, r = r || n.duration, r = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, i = i || n.complete, [t, n, r, i]
    }
    function a(t) {
        return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects[t] ? !0 : !1
    }
    e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(t, i) {
        e.fx.step[i] = function(e) {
            e.colorInit || (e.start = r(e.elem, i), e.end = n(e.end), e.colorInit = !0), e.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
        }
    });
    var f = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    },
        l = ["add", "remove", "toggle"],
        c = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    e.effects.animateClass = function(t, n, r, u) {
        return e.isFunction(r) && (u = r, r = null), this.queue(function() {
            var a = e(this),
                f = a.attr("style") || " ",
                c = s(i.call(this)),
                h, v = a.attr("class");
            e.each(l, function(e, n) {
                t[n] && a[n + "Class"](t[n])
            }), h = s(i.call(this)), a.attr("class", v), a.animate(o(c, h), {
                queue: !1,
                duration: n,
                easding: r,
                complete: function() {
                    e.each(l, function(e, n) {
                        t[n] && a[n + "Class"](t[n])
                    }), typeof a.attr("style") == "object" ? (a.attr("style").cssText = "", a.attr("style").cssText = f) : a.attr("style", f), u && u.apply(this, arguments), e.dequeue(this)
                }
            })
        })
    }, e.fn.extend({
        _addClass: e.fn.addClass,
        addClass: function(t, n, r, i) {
            return n ? e.effects.animateClass.apply(this, [{
                add: t
            },
            n, r, i]) : this._addClass(t)
        },
        _removeClass: e.fn.removeClass,
        removeClass: function(t, n, r, i) {
            return n ? e.effects.animateClass.apply(this, [{
                remove: t
            },
            n, r, i]) : this._removeClass(t)
        },
        _toggleClass: e.fn.toggleClass,
        toggleClass: function(n, r, i, s, o) {
            return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.apply(this, [r ? {
                add: n
            } : {
                remove: n
            },
            i, s, o]) : this._toggleClass(n, r) : e.effects.animateClass.apply(this, [{
                toggle: n
            },
            r, i, s])
        },
        switchClass: function(t, n, r, i, s) {
            return e.effects.animateClass.apply(this, [{
                add: n,
                remove: t
            },
            r, i, s])
        }
    }), e.extend(e.effects, {
        version: "1.8.13",
        save: function(e, t) {
            for (var n = 0; n < t.length; n++) t[n] !== null && e.data("ec.storage." + t[n], e[0].style[t[n]])
        },
        restore: function(e, t) {
            for (var n = 0; n < t.length; n++) t[n] !== null && e.css(t[n], e.data("ec.storage." + t[n]))
        },
        setMode: function(e, t) {
            return t == "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function(e, t) {
            var n;
            switch (e[0]) {
            case "top":
                n = 0;
                break;
            case "middle":
                n = .5;
                break;
            case "bottom":
                n = 1;
                break;
            default:
                n = e[0] / t.height
            }
            switch (e[1]) {
            case "left":
                e = 0;
                break;
            case "center":
                e = .5;
                break;
            case "right":
                e = 1;
                break;
            default:
                e = e[1] / t.width
            }
            return {
                x: e,
                y: n
            }
        },
        createWrapper: function(t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var n = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                "float": t.css("float")
            },
                r = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                });
            return t.wrap(r), r = t.parent(), t.css("position") == "static" ? (r.css({
                position: "relative"
            }), t.css({
                position: "relative"
            })) : (e.extend(n, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }), e.each(["top", "left", "bottom", "right"], function(e, r) {
                n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
            }), t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), r.css(n).show()
        },
        removeWrapper: function(e) {
            return e.parent().is(".ui-effects-wrapper") ? e.parent().replaceWith(e) : e
        },
        setTransition: function(t, n, r, i) {
            return i = i || {}, e.each(n, function(e, n) {
                unit = t.cssUnit(n), unit[0] > 0 && (i[n] = unit[0] * r + unit[1])
            }), i
        }
    }), e.fn.extend({
        effect: function(t) {
            var n = u.apply(this, arguments),
                r = {
                    options: n[1],
                    duration: n[2],
                    callback: n[3]
                };
            n = r.options.mode;
            var i = e.effects[t];
            return e.fx.off || !i ? n ? this[n](r.duration, r.callback) : this.each(function() {
                r.callback && r.callback.call(this)
            }) : i.call(this, r)
        },
        _show: e.fn.show,
        show: function(e) {
            if (a(e)) return this._show.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "show", this.effect.apply(this, t)
        },
        _hide: e.fn.hide,
        hide: function(e) {
            if (a(e)) return this._hide.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "hide", this.effect.apply(this, t)
        },
        __toggle: e.fn.toggle,
        toggle: function(t) {
            if (a(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
            var n = u.apply(this, arguments);
            return n[1].mode = "toggle", this.effect.apply(this, n)
        },
        cssUnit: function(t) {
            var n = this.css(t),
                r = [];
            return e.each(["em", "px", "%", "pt"], function(e, t) {
                n.indexOf(t) > 0 && (r = [parseFloat(n), t])
            }), r
        }
    }), e.easing.jswing = e.easing.swing, e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function(t, n, r, i, s) {
            return e.easing[e.easing.def](t, n, r, i, s)
        },
        easeInQuad: function(e, t, n, r, i) {
            return r * (t /= i) * t + n
        },
        easeOutQuad: function(e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        },
        easeOutCubic: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function(e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        },
        easeInExpo: function(e, t, n, r, i) {
            return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        },
        easeOutExpo: function(e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        },
        easeInOutExpo: function(e, t, n, r, i) {
            return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i) == 1 ? n + r : (s || (s = i * .3), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s)) + n)
        },
        easeOutElastic: function(e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i) == 1 ? n + r : (s || (s = i * .3), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), o * Math.pow(2, -10 * t) * Math.sin((t * i - e) * 2 * Math.PI / s) + r + n)
        },
        easeInOutElastic: function(e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i / 2) == 2 ? n + r : (s || (s = i * .3 * 1.5), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), t < 1 ? -0.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s) + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s) * .5 + r + n)
        },
        easeInBack: function(e, n, r, i, s, o) {
            return o == t && (o = 1.70158), i * (n /= s) * n * ((o + 1) * n - o) + r
        },
        easeOutBack: function(e, n, r, i, s, o) {
            return o == t && (o = 1.70158), i * ((n = n / s - 1) * n * ((o + 1) * n + o) + 1) + r
        },
        easeInOutBack: function(e, n, r, i, s, o) {
            return o == t && (o = 1.70158), (n /= s / 2) < 1 ? i / 2 * n * n * (((o *= 1.525) + 1) * n - o) + r : i / 2 * ((n -= 2) * n * (((o *= 1.525) + 1) * n + o) + 2) + r
        },
        easeInBounce: function(t, n, r, i, s) {
            return i - e.easing.easeOutBounce(t, s - n, 0, i, s) + r
        },
        easeOutBounce: function(e, t, n, r, i) {
            return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(t, n, r, i, s) {
            return n < s / 2 ? e.easing.easeInBounce(t, n * 2, 0, i, s) * .5 + r : e.easing.easeOutBounce(t, n * 2 - s, 0, i, s) * .5 + i * .5 + r
        }
    })
}(jQuery), function(e) {
    e.effects.blind = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "vertical";
            e.effects.save(n, r), n.show();
            var o = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                u = s == "vertical" ? "height" : "width";
            s = s == "vertical" ? o.height() : o.width(), i == "show" && o.css(u, 0);
            var a = {};
            a[u] = i == "show" ? s : 0, o.animate(a, t.duration, t.options.easing, function() {
                i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery), function(e) {
    e.effects.bounce = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = t.options.direction || "up",
                o = t.options.distance || 20,
                u = t.options.times || 5,
                a = t.duration || 250;
            /show|hide/.test(i) && r.push("opacity"), e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var f = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg", o = t.options.distance || (f == "top" ? n.outerHeight({
                margin: !0
            }) / 3 : n.outerWidth({
                margin: !0
            }) / 3), i == "show" && n.css("opacity", 0).css(f, s == "pos" ? -o : o), i == "hide" && (o /= u * 2), i != "hide" && u--;
            if (i == "show") {
                var l = {
                    opacity: 1
                };
                l[f] = (s == "pos" ? "+=" : "-=") + o, n.animate(l, a / 2, t.options.easing), o /= 2, u--
            }
            for (l = 0; l < u; l++) {
                var c = {},
                    h = {};
                c[f] = (s == "pos" ? "-=" : "+=") + o, h[f] = (s == "pos" ? "+=" : "-=") + o, n.animate(c, a / 2, t.options.easing).animate(h, a / 2, t.options.easing), o = i == "hide" ? o * 2 : o / 2
            }
            i == "hide" ? (l = {
                opacity: 0
            }, l[f] = (s == "pos" ? "-=" : "+=") + o, n.animate(l, a / 2, t.options.easing, function() {
                n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            })) : (c = {}, h = {}, c[f] = (s == "pos" ? "-=" : "+=") + o, h[f] = (s == "pos" ? "+=" : "-=") + o, n.animate(c, a / 2, t.options.easing).animate(h, a / 2, t.options.easing, function() {
                e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            })), n.queue("fx", function() {
                n.dequeue()
            }), n.dequeue()
        })
    }
}(jQuery), function(e) {
    e.effects.clip = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "vertical";
            e.effects.save(n, r), n.show();
            var o = e.effects.createWrapper(n).css({
                overflow: "hidden"
            });
            o = n[0].tagName == "IMG" ? o : n;
            var u = {
                size: s == "vertical" ? "height" : "width",
                position: s == "vertical" ? "top" : "left"
            };
            s = s == "vertical" ? o.height() : o.width(), i == "show" && (o.css(u.size, 0), o.css(u.position, s / 2));
            var a = {};
            a[u.size] = i == "show" ? s : 0, a[u.position] = i == "show" ? 0 : s / 2, o.animate(a, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery), function(e) {
    e.effects.drop = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "opacity"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "left";
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var o = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg";
            var u = t.options.distance || (o == "top" ? n.outerHeight({
                margin: !0
            }) / 2 : n.outerWidth({
                margin: !0
            }) / 2);
            i == "show" && n.css("opacity", 0).css(o, s == "pos" ? -u : u);
            var a = {
                opacity: i == "show" ? 1 : 0
            };
            a[o] = (i == "show" ? s == "pos" ? "+=" : "-=" : s == "pos" ? "-=" : "+=") + u, n.animate(a, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery), function(e) {
    e.effects.explode = function(t) {
        return this.queue(function() {
            var n = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
            t.options.mode = t.options.mode == "toggle" ? e(this).is(":visible") ? "hide" : "show" : t.options.mode;
            var i = e(this).show().css("visibility", "hidden"),
                s = i.offset();
            s.top -= parseInt(i.css("marginTop"), 10) || 0, s.left -= parseInt(i.css("marginLeft"), 10) || 0;
            for (var o = i.outerWidth(!0), u = i.outerHeight(!0), f = 0; f < n; f++) for (var l = 0; l < r; l++) i.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -l * (o / r),
                top: -f * (u / n)
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: o / r,
                height: u / n,
                left: s.left + l * (o / r) + (t.options.mode == "show" ? (l - Math.floor(r / 2)) * (o / r) : 0),
                top: s.top + f * (u / n) + (t.options.mode == "show" ? (f - Math.floor(n / 2)) * (u / n) : 0),
                opacity: t.options.mode == "show" ? 0 : 1
            }).animate({
                left: s.left + l * (o / r) + (t.options.mode == "show" ? 0 : (l - Math.floor(r / 2)) * (o / r)),
                top: s.top + f * (u / n) + (t.options.mode == "show" ? 0 : (f - Math.floor(n / 2)) * (u / n)),
                opacity: t.options.mode == "show" ? 1 : 0
            }, t.duration || 500);
            setTimeout(function() {
                t.options.mode == "show" ? i.css({
                    visibility: "visible"
                }) : i.css({
                    visibility: "visible"
                }).hide(), t.callback && t.callback.apply(i[0]), i.dequeue(), e("div.ui-effects-explode").remove()
            }, t.duration || 500)
        })
    }
}(jQuery), function(e) {
    e.effects.fade = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "hide");
            n.animate({
                opacity: r
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery), function(e) {
    e.effects.fold = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.size || 15,
                o = !! t.options.horizFirst,
                u = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
            e.effects.save(n, r), n.show();
            var f = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                l = i == "show" != o,
                h = l ? ["width", "height"] : ["height", "width"];
            l = l ? [f.width(), f.height()] : [f.height(), f.width()];
            var p = /([0-9]+)%/.exec(s);
            p && (s = parseInt(p[1], 10) / 100 * l[i == "hide" ? 0 : 1]), i == "show" && f.css(o ? {
                height: 0,
                width: s
            } : {
                height: s,
                width: 0
            }), o = {}, p = {}, o[h[0]] = i == "show" ? l[0] : s, p[h[1]] = i == "show" ? l[1] : 0, f.animate(o, u, t.options.easing).animate(p, u, t.options.easing, function() {
                i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery), function(e) {
    e.effects.highlight = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["backgroundImage", "backgroundColor", "opacity"],
                i = e.effects.setMode(n, t.options.mode || "show"),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            i == "hide" && (s.opacity = 0), e.effects.save(n, r), n.show().css({
                backgroundImage: "none",
                backgroundColor: t.options.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    i == "hide" && n.hide(), e.effects.restore(n, r), i == "show" && !e.support.opacity && this.style.removeAttribute("filter"), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery), function(e) {
    e.effects.pulsate = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "show");
            times = (t.options.times || 5) * 2 - 1, duration = t.duration ? t.duration / 2 : e.fx.speeds._default / 2, isVisible = n.is(":visible"), animateTo = 0, isVisible || (n.css("opacity", 0).show(), animateTo = 1), (r == "hide" && isVisible || r == "show" && !isVisible) && times--;
            for (r = 0; r < times; r++) n.animate({
                opacity: animateTo
            }, duration, t.options.easing), animateTo = (animateTo + 1) % 2;
            n.animate({
                opacity: animateTo
            }, duration, t.options.easing, function() {
                animateTo == 0 && n.hide(), t.callback && t.callback.apply(this, arguments)
            }), n.queue("fx", function() {
                n.dequeue()
            }).dequeue()
        })
    }
}(jQuery), function(e) {
    e.effects.puff = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "hide"),
                i = parseInt(t.options.percent, 10) || 150,
                s = i / 100,
                o = {
                    height: n.height(),
                    width: n.width()
                };
            e.extend(t.options, {
                fade: !0,
                mode: r,
                percent: r == "hide" ? i : 100,
                from: r == "hide" ? o : {
                    height: o.height * s,
                    width: o.width * s
                }
            }), n.effect("scale", t.options, t.duration, t.callback), n.dequeue()
        })
    }, e.effects.scale = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = e.extend(!0, {}, t.options),
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : i == "hide" ? 0 : 100),
                o = t.options.direction || "both",
                u = t.options.origin;
            i != "effect" && (r.origin = u || ["middle", "center"], r.restore = !0), u = {
                height: n.height(),
                width: n.width()
            }, n.from = t.options.from || (i == "show" ? {
                height: 0,
                width: 0
            } : u), s = {
                y: o != "horizontal" ? s / 100 : 1,
                x: o != "vertical" ? s / 100 : 1
            }, n.to = {
                height: u.height * s.y,
                width: u.width * s.x
            }, t.options.fade && (i == "show" && (n.from.opacity = 0, n.to.opacity = 1), i == "hide" && (n.from.opacity = 1, n.to.opacity = 0)), r.from = n.from, r.to = n.to, r.mode = i, n.effect("size", r, t.duration, t.callback), n.dequeue()
        })
    }, e.effects.size = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                s = ["width", "height", "overflow"],
                o = ["fontSize"],
                u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                a = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                f = e.effects.setMode(n, t.options.mode || "effect"),
                l = t.options.restore || !1,
                h = t.options.scale || "both",
                p = t.options.origin,
                d = {
                    height: n.height(),
                    width: n.width()
                };
            n.from = t.options.from || d, n.to = t.options.to || d, p && (p = e.effects.getBaseline(p, d), n.from.top = (d.height - n.from.height) * p.y, n.from.left = (d.width - n.from.width) * p.x, n.to.top = (d.height - n.to.height) * p.y, n.to.left = (d.width - n.to.width) * p.x);
            var v = {
                from: {
                    y: n.from.height / d.height,
                    x: n.from.width / d.width
                },
                to: {
                    y: n.to.height / d.height,
                    x: n.to.width / d.width
                }
            };
            if (h == "box" || h == "both") v.from.y != v.to.y && (r = r.concat(u), n.from = e.effects.setTransition(n, u, v.from.y, n.from), n.to = e.effects.setTransition(n, u, v.to.y, n.to)), v.from.x != v.to.x && (r = r.concat(a), n.from = e.effects.setTransition(n, a, v.from.x, n.from), n.to = e.effects.setTransition(n, a, v.to.x, n.to));
            (h == "content" || h == "both") && v.from.y != v.to.y && (r = r.concat(o), n.from = e.effects.setTransition(n, o, v.from.y, n.from), n.to = e.effects.setTransition(n, o, v.to.y, n.to)), e.effects.save(n, l ? r : i), n.show(), e.effects.createWrapper(n), n.css("overflow", "hidden").css(n.from);
            if (h == "content" || h == "both") u = u.concat(["marginTop", "marginBottom"]).concat(o), a = a.concat(["marginLeft", "marginRight"]), s = r.concat(u).concat(a), n.find("*[width]").each(function() {
                child = e(this), l && e.effects.save(child, s);
                var n = {
                    height: child.height(),
                    width: child.width()
                };
                child.from = {
                    height: n.height * v.from.y,
                    width: n.width * v.from.x
                }, child.to = {
                    height: n.height * v.to.y,
                    width: n.width * v.to.x
                }, v.from.y != v.to.y && (child.from = e.effects.setTransition(child, u, v.from.y, child.from), child.to = e.effects.setTransition(child, u, v.to.y, child.to)), v.from.x != v.to.x && (child.from = e.effects.setTransition(child, a, v.from.x, child.from), child.to = e.effects.setTransition(child, a, v.to.x, child.to)), child.css(child.from), child.animate(child.to, t.duration, t.options.easing, function() {
                    l && e.effects.restore(child, s)
                })
            });
            n.animate(n.to, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    n.to.opacity === 0 && n.css("opacity", n.from.opacity), f == "hide" && n.hide(), e.effects.restore(n, l ? r : i), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery), function(e) {
    e.effects.shake = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"];
            e.effects.setMode(n, t.options.mode || "effect");
            var i = t.options.direction || "left",
                s = t.options.distance || 20,
                o = t.options.times || 3,
                u = t.duration || t.options.duration || 140;
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var f = i == "up" || i == "down" ? "top" : "left",
                l = i == "up" || i == "left" ? "pos" : "neg";
            i = {};
            var c = {},
                h = {};
            i[f] = (l == "pos" ? "-=" : "+=") + s, c[f] = (l == "pos" ? "+=" : "-=") + s * 2, h[f] = (l == "pos" ? "-=" : "+=") + s * 2, n.animate(i, u, t.options.easing);
            for (s = 1; s < o; s++) n.animate(c, u, t.options.easing).animate(h, u, t.options.easing);
            n.animate(c, u, t.options.easing).animate(i, u / 2, t.options.easing, function() {
                e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            }), n.queue("fx", function() {
                n.dequeue()
            }), n.dequeue()
        })
    }
}(jQuery), function(e) {
    e.effects.slide = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "show"),
                s = t.options.direction || "left";
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n).css({
                overflow: "hidden"
            });
            var o = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg";
            var u = t.options.distance || (o == "top" ? n.outerHeight({
                margin: !0
            }) : n.outerWidth({
                margin: !0
            }));
            i == "show" && n.css(o, s == "pos" ? isNaN(u) ? "-" + u : -u : u);
            var a = {};
            a[o] = (i == "show" ? s == "pos" ? "+=" : "-=" : s == "pos" ? "-=" : "+=") + u, n.animate(a, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery), function(e) {
    e.effects.transfer = function(t) {
        return this.queue(function() {
            var n = e(this),
                r = e(t.options.to),
                i = r.offset();
            r = {
                top: i.top,
                left: i.left,
                height: r.innerHeight(),
                width: r.innerWidth()
            }, i = n.offset();
            var s = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.options.className).css({
                top: i.top,
                left: i.left,
                height: n.innerHeight(),
                width: n.innerWidth(),
                position: "absolute"
            }).animate(r, t.duration, t.options.easing, function() {
                s.remove(), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery), function(e) {
    function n(t) {
        var n = [].slice.call(arguments, 1),
            r = 0,
            i = !0;
        return t = e.event.fix(t || window.event), t.type = "mousewheel", t.wheelDelta && (r = t.wheelDelta / 120), t.detail && (r = -t.detail / 3), n.unshift(t, r), e.event.handle.apply(this, n)
    }
    var t = ["DOMMouseScroll", "mousewheel"];
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var e = t.length; e;) this.addEventListener(t[--e], n, !1);
            else this.onmousewheel = n
        },
        teardown: function() {
            if (this.removeEventListener) for (var e = t.length; e;) this.removeEventListener(t[--e], n, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery);
if (is404 == undefined) var is404 = !1;
$.debug = function(e) {
    $("#debug").prepend(e + "<br />")
}, $.scrollTo = function(e, t) {
    t == null && (t = 2e3), $.debug("ScrollTO: " + e + " ---- " + $(e).offset().top), $("body,html").animate({
        scrollTop: e.offset().top
    }, t)
}, $.isIOS = function() {
    var e = navigator.userAgent.indexOf("iPhone") != -1,
        t = navigator.userAgent.indexOf("iPod") != -1,
        n = navigator.userAgent.indexOf("iPad") != -1,
        r = navigator.userAgent.indexOf("android") != -1;
    return e || t || n || r
}, $.haltEvent = function(e) {
    e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
}, $.getHref = function() {
    return window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, "").replace("#", "").replace(window.location.hash.replace("#", ""), "")
}, $.getHash = function() {
    return window.location.hash.replace("#!/", "")
}, $.getURL = function() {
    var e = $.getHref(),
        t = $.getHash();
    return "/" + (t == "" ? e : t)
}, $.setURL = function(e, t, n) {
    n = n || !1, t = t || document.title, history && history.pushState ? e != $.getURL() && history.pushState({
        mine: !0,
        foo: "bar"
    }, t, e) : (window.location.hash = "!" + e, n && ($.lastURL = e)), document.title = t
}, Array.indexOf || (Array.prototype.indexOf = function(e) {
    for (var t = 0; t < this.length; t++) if (this[t] == e) return t;
    return -1
}), $.events = {
    KEY_UP: "event_key_up",
    KEY_DOWN: "event_key_down",
    KEY_LEFT: "event_key_left",
    KEY_RIGHT: "event_key_right",
    CASE_STUDY_SHOW: "case_study_show"
}, function($) {
    $.fn.instantiate = function() {
        this.each(function() {
            var self = $(this),
                controller = self.data("controller");
            eval("self." + controller + "()")
        })
    }
}(jQuery), $.fn.keyboard = function() {
    function t(e) {}
    function n() {
        return $.browser.msie ? !1 : $("*:focus").get(0) != undefined ? ["SELECT", "INPUT", "TEXTAREA"].indexOf($("*:focus").get(0).tagName) >= 0 : !1
    }
    function r(t) {
        var r = t.which;
        if (!n()) switch (r) {
        case 39:
            $.haltEvent(t), e.trigger($.events.KEY_RIGHT);
            break;
        case 37:
            $.haltEvent(t), e.trigger($.events.KEY_LEFT);
            break;
        case 38:
            $.haltEvent(t), e.trigger($.events.KEY_UP);
            break;
        case 40:
            $.haltEvent(t), e.trigger($.events.KEY_DOWN);
            break;
        case 13:
            break;
        case 27:
        }
    }
    $(document).bind("keydown", r).bind("keyup", t);
    var e = $(this)
}, $(window).load(function() {
    $("body").keyboard()
}), $(window).load(function() {
    $("img[data-rollover]").hover(function() {
        $(this).data("original", $(this).attr("src")), $(this).attr("src", $(this).data("rollover"))
    }, function() {
        $(this).attr("src", $(this).data("original"))
    })
}), $(window).load(function() {
    $(".file_field_container").each(function() {})
}), $(window).load(function() {
    function i() {
        n.hover(function() {
            var n = $(this).offset().top - $("div#footer-container").offset().top - t.outerHeight() + 1,
                r = $(this).offset().left - $("div#footer-container").offset().left;
            $.debug("toTop: " + n + " - toLeft: " + r), t.css({
                left: r,
                top: n
            }), t.fadeIn(e)
        }, function() {
            t.fadeOut(e)
        })
    }
    var e = 500,
        t = $("div#twitter-box"),
        n = $("div#twitter-footer"),
        r = $("#twitter-box-content");
    i()
}), $(window).load(function() {
    var e = 500,
        t = $("#keybord-link"),
        n = $("#keyboard-box");
    t.click(function(e) {
        return !1
    }), t.hover(function() {
        n.fadeIn(e)
    }, function() {
        n.fadeOut(e)
    })
}), $.fn.homeSlideshow = function(e) {
    function w() {
        var e = c;
        e = e == h - 1 ? 0 : e + 1, S(e)
    }
    function E() {
        var e = c;
        e = e == 0 ? h - 1 : e - 1, S(e)
    }
    function S(e) {
        if (e >= 0 && e <= h - 1 && e != c && !p) {
            T();
            function t(e) {
                var t = Math.max($(n).children(".slide-image").height() + b);
                t = e ? t * -1 : t, p = !0, r.css({
                    left: "0px",
                    top: t + "px",
                    "z-index": 101,
                    position: "absolute"
                }), n.css({
                    "z-index": 90
                }), n.animate({
                    top: t * -1 + "px"
                }, g, function() {
                    $(this).css("top", "-1000px")
                }), r.animate({
                    top: "0px"
                }, g, function() {
                    p = !1, x()
                })
            }
            var n = $(o[c]),
                r = $(o[e]),
                i = c < e;
            c == o.length - 1 && e == 0 && (i = !0), e == o.length - 1 && c == 0 && (i = !1), t(i), c = e, $(l).removeClass("current"), $(l[c]).addClass("current")
        }
    }
    function x() {
        v && (d = setTimeout(w, y))
    }
    function T() {
        clearTimeout(d)
    }
    function N() {
        v = !v, v ? x() : T()
    }
    function C() {
        r.click(function() {
            return E(), !1
        }), i.click(function() {
            return w(), !1
        }), $("body").bind($.events.KEY_UP, function() {
            E()
        }), $("body").bind($.events.KEY_DOWN, function() {
            w()
        }), f.click(function() {
            return N(), f.attr("class", ""), f.addClass(v ? "pause" : "play"), !1
        }), a.find("a[data-slide]").click(function() {
            var e = $(this).data("slide");
            return S(e), !1
        })
    }
    var t = $(this),
        n = t.children("#slideshow-inner"),
        r = n.children("#slideshow-left-arrow").children("a"),
        i = n.children("#slideshow-right-arrow").children("a"),
        s = n.children("#slideshow-slides"),
        o = s.children(".slide"),
        u = n.children(".slideshow-btn"),
        a = $("#slideshow-controls"),
        f = a.find("#slideshow-autorotate-btn"),
        l = a.find("a.slideLink"),
        c = 0,
        h = o.length,
        p = !1,
        d, v = !0,
        m = 300,
        g = 1e3,
        y = 7e3,
        b = 20;
    o.each(function(e) {
        e > 0 && $(this).css({
            "z-index": 90,
            top: "-1000px"
        })
    }), u.hide(), C(), x(), S(0)
}, $.fn.hScroller = function(e) {
    function v(e) {
        e < 0 && (e = 0), e > 1 && (e = 1), h = e;
        var t = (c - f) * h * -1,
            r = h * l;
        s.css("left", r), n.css("left", t)
    }
    function m(e) {
        var t = e / c;
        v(h - t)
    }
    e == undefined && (e = {
        content: $("#hscroll-content"),
        container: $("#hscroll-container"),
        track: $("#hscroll-track"),
        thumb: $("#hscroll-thumb"),
        left: $("#hscroll-left"),
        right: $("#hscroll-right")
    });
    var t = $(this),
        n = e.content,
        r = e.container,
        i = e.track,
        s = e.thumb,
        o = e.left,
        u = e.right,
        a = n.children("div"),
        f = r.width(),
        l = i.width() - s.width(),
        c = 0,
        h = 0;
    a.each(function(e) {
        c += $(this).outerWidth(!0)
    }), n.css({
        width: c + "px"
    });
    if ($.isIOS()) {
        r.css({
            overflow: "hidden"
        }), s.css("height", "20px"), s.css("position", "absolute"), $("#hscroll-track-container").css("margin-top", "-4px"), i.css({
            "background-color": "#ffffff",
            width: "980px",
            height: "20px",
            position: "absolute"
        }), o.css({
            position: "absolute",
            left: "20px",
            "padding-top": "8px"
        }), u.css({
            position: "absolute",
            right: "0px",
            "padding-top": "8px"
        }), l = i.width() - s.width() - 42;
        var p = !1;
        i.bind("touchstart", function(e) {
            $.haltEvent(e), p = !0
        }), $("body").bind("touchmove", function(e) {
            if (p) {
                var t = e.pageX || e.originalEvent.targetTouches[0].clientX,
                    n = t - i.offset().left;
                n < 0 && (n = 0), n > l && (n = l);
                var r = n / l;
                v(r)
            }
        }), i.bind("touchend", function(e) {
            $.haltEvent(e), p = !1
        }), $.debug(c - f)
    } else {
        r.css({
            overflow: "hidden"
        }), r.bind("mousewheel", function(e, t) {
            return m(t), !1
        }), s.draggable({
            containment: i,
            scroll: !1
        }), s.bind("drag", function(e, t) {
            var n = parseInt(s.css("left"), 10) / l;
            v(n)
        }), o.click(function() {
            return !1
        }), u.click(function() {
            return !1
        });
        var d = !1;
        o.mousedown(function(e) {
            function t() {
                d && (m(10), setTimeout(t, 10))
            }
            return e.preventDefault(), d = !0, t(), !1
        }).mouseup(function(e) {
            return e.preventDefault(), d = !1, !1
        }), u.mousedown(function(e) {
            function t() {
                d && (m(-10), setTimeout(t, 10))
            }
            return e.preventDefault(), d = !0, t(), !1
        }).mouseup(function(e) {
            return e.preventDefault(), d = !1, !1
        })
    }
}, $.fn.expertise = function() {
    function i() {
        var e = t;
        e = e == r.length - 1 ? 0 : e + 1, o(e)
    }
    function s() {
        var e = t;
        e = e == 0 ? r.length - 1 : e - 1, o(e)
    }
    function o(e) {
        if (t != e && !n) {
            r.removeClass("current");
            var i = $(r[e]);
            if (t != null) {
                var s = $(r[t]);
                u(s)
            }
            a(i), t = e
        }
    }
    function u(t) {
        var n = t.find("div.expertise-reveal");
        n.animate({
            height: 0
        }, e, function() {
            n.hide(), t.find("a.more-btn").show()
        })
    }
    function a(t) {
        t.addClass("current");
        var r = t.find("div.expertise-reveal");
        n = !0, r.show().animate({
            height: r.data("original-height")
        }, e, function() {
            n = !1
        }), t.find("a.more-btn").hide()
    }
    var e = 500,
        t, n = !1,
        r = $("div.expertise-area");
    r.each(function(e) {
        $(this).find(".more-btn").click(function() {
            return o(e), !1
        }), $(this).find(".more-btn-header").click(function() {
            return o(e), !1
        });
        var t = $(this).find("div.expertise-reveal");
        t.show();
        var n = t.height();
        t.hide(), t.data("original-height", n), t.css({
            height: 0
        })
    }), $("body").bind($.events.KEY_UP, function() {
        s()
    }), $("body").bind($.events.KEY_DOWN, function() {
        i()
    }), o(0)
}, $.fn.bios = function() {
    function o() {
        var e = r;
        e = e == i.length - 1 ? 0 : e + 1, a(e)
    }
    function u() {
        var e = r;
        e = e == 0 ? i.length - 1 : e - 1, a(e)
    }
    function a(e) {
        if (r != e && !s) {
            var t = $(i[e]);
            if (r != null) {
                var n = $(i[r]);
                f(n)
            }
            l(t), r = e
        }
    }
    function f(n) {
        n.removeClass("current");
        var r = $(n).find("img"),
            i = $(n).find(".bio-content");
        r.animate({
            height: r.data("original-size") + "px",
            width: r.data("original-size") + "px"
        }, e), i.animate({
            height: t
        }, e), $(n).find("a.more-btn").show()
    }
    function l(t) {
        $(t).addClass("current");
        var r = $(t).find("img"),
            i = $(t).find(".bio-content");
        s = !0, r.animate({
            height: n + "px",
            width: n + "px"
        }, e, function() {
            s = !1
        }), i.animate({
            height: i.data("original-height")
        }, e), $(t).find("a.more-btn").hide()
    }
    var e = 500,
        t = 63,
        n = 115,
        r, i = $("div.bio"),
        s = !1;
    $.ajax({
        url: "/about/right_panel",
        dataType: "html",
        type: "GET",
        success: function(e, t, n) {
            $("#about-right-col").html(e)
        },
        error: function() {}
    }), i.each(function(e) {
        var n = $(this).find(".bio-content"),
            r = $(this).find("img"),
            i = n.height() + 30;
        n.css({
            height: t,
            overflow: "hidden"
        }), n.data("original-height", i), r.data("original-size", r.height()), $(this).find("a.more-btn").click(function() {
            return a(e), !1
        }), $(this).find(".more-btn-header").click(function() {
            return a(e), !1
        })
    }), $("body").bind($.events.KEY_UP, function() {
        u()
    }), $("body").bind($.events.KEY_DOWN, function() {
        o()
    }), a(0)
};
var sfOffset = -9,
    nyOffset = -6;
isDST() && (sfOffset = -8, nyOffset = -5);
var clockTimeout, timeInt = 0;
$.fn.news = function() {
    function s() {
        var e = r;
        e = e == t.length - 1 ? 0 : e + 1, u(e)
    }
    function o() {
        var e = r;
        e = e == 0 ? t.length - 1 : e - 1, u(e)
    }
    function u(e) {
        r != e && !i && (r != null && a(r), f(e), r = e)
    }
    function a(r) {
        var i = $(n[r]),
            s = $(t[r]);
        $.browser.msie ? i.hide() : i.fadeOut(e), s.removeClass("current")
    }
    function f(r) {
        var s = $(n[r]),
            o = $(t[r]);
        i = !0, $.browser.msie ? (s.show(), i = !1) : s.fadeIn(e, function() {
            i = !1
        }), o.addClass("current")
    }
    var e = 500,
        t = $("div.news-list-item"),
        n = $("div.news-article"),
        r, i = !1;
    n.hide(), t.each(function(e) {
        var t = $(this).find("a");
        t.click(function() {
            return u(e), !1
        })
    }), $("body").bind($.events.KEY_UP, function() {
        o()
    }), $("body").bind($.events.KEY_DOWN, function() {
        s()
    });
    var l = !1;
    n.each(function(e) {
        if ($(this).hasClass("current")) {
            u(e), l = !0;
            return
        }
    }), l || u(0)
}, $.fn.newsletterForm = function() {
    var e = 500,
        t = $(this),
        n = $("#newsletter-form-thanks"),
        r = t.children("form");
    r.children("input[data-default-value]").focus(function() {
        $(this).val() === $(this).data("default-value") && $(this).val("")
    }), r.children("input[data-default-value]").blur(function() {
        $(this).val() === "" && $(this).val($(this).data("default-value"))
    })
}, $.lastURL = null, $(function() {
    function f() {
        var e, t = a.indexOf($("a.current").attr("href"));
        t == 0 ? e = a.length - 1 : e = t - 1, o ? N(a[e]) : v(a[e])
    }
    function l() {
        var e, t = a.indexOf($("a.current").attr("href"));
        t == a.length - 1 ? e = 0 : e = t + 1, o ? N(a[e]) : v(a[e])
    }
    function c() {
        return $.getHref()
    }
    function h() {
        return $.getHash()
    }
    function p() {
        return $.getURL()
    }
    function d(e) {
        return e.split("?")[0] == "/"
    }
    function v(e, t) {
        $.setURL(e, t)
    }
    function m() {
        $("[data-controller]").instantiate()
    }
    function g(r, s) {
        s = s == undefined ? !1 : s;
        var o = function() {
                var s = Math.max($("#content").height(), $("#content").data("fallback-height"));
                footerPosition = r.find("#home").length > 0 ? s + n.height() : s, t.animate({
                    height: s
                }, e), i.animate({
                    top: footerPosition
                }, e)
            };
        o()
    }
    function y(e) {
        var t = e.find("#title").text(),
            n = e.find("#meta-description").attr("content"),
            r = e.find("#meta-keywords").attr("content");
        $("head meta[name=description]").attr("content", n), $("head meta[name=keywords]").attr("content", r), document.title = t
    }
    function b(e, t) {
        function i() {
            if (--r > 0) return;
            setTimeout(t, 0)
        }
        var n = e.find("img"),
            r = n.length;
        if (r <= 0) return t();
        n.load(i)
    }
    function w() {
        var e = $("nav#site-nav a"),
            t = !1;
        e.each(function(e, n) {
            var r = $(n);
            if (r.hasClass("current")) {
                r.parent("li").addClass("current"), t = !0;
                return
            }
            r.parent("li").removeClass("current"), t ? (r.removeClass("up"), r.addClass("down")) : (r.removeClass("down"), r.addClass("up"))
        })
    }
    function E(e) {
        n.animate({
            top: 390
        }, e), u.fadeIn(e)
    }
    function S(e, n, r, i) {
        var s = $(n),
            o = s.find("#content"),
            u = o.attr("data-fallback-height") ? new Number(o.attr("data-fallback-height")) : o.height(),
            a = "down" == r ? t.height() : -u,
            f = u;
        o.hide().css({
            position: "relative",
            visibility: "hidden",
            top: a
        }).show(), b(s, function() {
            t.html(""), t.append(o), d(e) ? o.css({
                visibility: "visible"
            }).css("top", a * -1).animate({
                top: 0
            }, i, function() {}) : o.css({
                visibility: "visible"
            }).animate({
                top: 0
            }, i, function() {}), $("body,html").animate({
                scrollTop: 0
            }, i), g(o), y(s), v(e), m()
        })
    }
    function x(e, n, i) {
        var s = Math.max(r.height(), new Number(r.attr("data-fallback-height") || 0), $(window).height()),
            o = Math.max(s, $(window).height()),
            u = "down" == e ? 0 - (s + 600) : o;
        t.css({
            height: o
        }), r.css({
            position: "relative",
            height: s
        }), $("#content").animate({
            top: u
        }, n, function() {
            $(this).hide().remove(), i()
        })
    }
    function T(e) {
        if (!is404) {
            e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
            var t = $(this).attr("href");
            t != p() && (o ? N(t) : v(t))
        } else o || (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), window.location.href = "/#!" + $(this).attr("href"))
    }
    function N(t, r) {
        r = r || {
            force: !1
        };
        var i = $('a[href="' + t + '"]'),
            s = r.force ? 0 : e,
            o = i.hasClass("up") ? "up" : "down",
            a = !1;
        C(t), $("body").trigger("pageChange"), n.animate({
            top: d(t) ? 390 : 0
        }, s), d(t) ? u.fadeIn(s) : u.fadeOut(s), $.ajax({
            url: t,
            dataType: "html",
            success: function(e, n, r) {
                function i() {
                    if (!a) return window.setTimeout(i, 10);
                    S(t, e, o, s)
                }
                i()
            },
            error: function() {
                window.location.href = p()
            }
        }), x(o, s, function() {
            a = !0
        }), w()
    }
    function C(e) {
        $(s).removeClass("current"), $('a[href="' + e + '"]').addClass("current")
    }
    function k() {
        $("#viewport").css({
            "min-height": "400px"
        });
        if (!is404) {
            if (!o && c() != "") {
                window.location.href = "/#!/" + c();
                return
            }
            if (o && h() != "") {
                window.location.href = h();
                return
            }
        }
        $.debug("is404: " + is404);
        var e = p();
        d(e) ? (E(0), m(), g($("#content"), !0), $('a[href="' + e + '"]').addClass("current")) : !o && !is404 ? N(e, {
            force: !0
        }) : ($('a[href="' + e + '"]').addClass("current"), g($("#content"), !0), m()), L()
    }
    function L() {
        s.click(T), o ? $(window).bind("popstate", function(e) {
            e.originalEvent.state && N(p())
        }) : ($.lastURL = p(), setInterval(function() {
            var e = p();
            if (e == $.lastURL) return;
            N(e), $.lastURL = e
        }, 250))
    }
    var e = 600,
        t = $("#viewport"),
        n = $("div#site-nav"),
        r = $("#content"),
        i = $("div#footer-container"),
        s = $("a.nav-link"),
        o = history && history.pushState,
        u = $("#corner-icon"),
        a = ["/", "/work", "/expertise", "/about", "/news", "/careers"];
    $("body").bind($.events.KEY_LEFT, f), $("body").bind($.events.KEY_RIGHT, l), $(document).ready(function() {
        k()
    })
}), function(e) {
    jQuery.easing.def = "easeOutExpo", e(document).ready(function() {
        e.isIOS() && e("#keybord-link").hide()
    }), e(function() {
        function E(t) {
            switch (t) {
            case "sf":
                S(h), $el = e("#location-" + t);
                if (d == t) {
                    T(!0);
                    return
                }
                break;
            case "ny":
                S(p), $el = e("#location-" + t);
                if (d == t) {
                    T(!0);
                    return
                }
            }
            $el && x({
                id: t,
                mapOptions: {
                    center: new google.maps.LatLng($el.data("lat"), $el.data("lng")),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },
                markerOptions: {
                    position: new google.maps.LatLng($el.data("lat"), $el.data("lng")),
                    title: $el.data("title"),
                    icon: new google.maps.MarkerImage("/assets/map_icon-32c11fd8f296eb83a80f7c663afc903c.png", new google.maps.Size(51, 37), new google.maps.Point(0, 0), new google.maps.Point(10, 20))
                }
            })
        }
        function S(e) {
            c.html(c.attr("data-closed-text")), e != null && e.html(e.attr("data-open-text"))
        }
        function x(t) {
            if (!y || t.id != d) {
                d = t.id, v = new google.maps.Map(a.get(0), t.mapOptions);
                var n = t.markerOptions;
                n.map = v;
                var r = new google.maps.Marker(n),
                    i = new google.maps.InfoWindow({
                        content: n.title
                    });
                google.maps.event.addListener(v, "tilesloaded", function() {
                    !y && g && (e.debug("your map is showing...."), y = !0, a.animate({
                        top: b
                    }, w), k(a.height()), google.maps.event.clearListeners(v, "tilesloaded"))
                }), google.maps.event.addListener(r, "click", function() {
                    i.open(v, r)
                })
            }
        }
        function T(e) {
            S(), e == null && (e = !1);
            if (y) {
                if (e) {
                    var t = a.offset().top * -1;
                    k(t)
                }
                a.animate({
                    top: 0
                }, w, function() {
                    y = !1, d = null, v = null, a.html("")
                })
            }
        }
        function N() {
            if (m) return window.setTimeout(N, 10);
            s.hide(), b = n.offset().top * -1, k(b), n.animate({
                top: 0
            }, w, function() {
                m = !1
            }), m = !0, g = !0
        }
        function C() {
            if (m) return window.setTimeout(C, 10);
            var e = b * -1;
            L(), n.animate({
                top: e
            }, w, function() {
                m = !1, s.show()
            }), T(), m = !0, g = !1
        }
        function k(n) {
            for (var r = 0; r < t.length; r++) {
                var i = e(t[r]),
                    s = parseInt(i.css("top"), 10),
                    o = s + n;
                i.data("original-top") == null && i.data("original-top", s), i.animate({
                    top: o
                }, w)
            }
        }
        function L() {
            for (var n = 0; n < t.length; n++) {
                var r = e(t[n]),
                    i = parseInt(r.data("original-top"), 10);
                r.animate({
                    top: i
                }, w, function() {
                    e(this).data("original-top", null), e.debug(e(this).attr("id") + " - " + e(this).data("original-top"))
                })
            }
        }
        function A() {
            e("body").bind("pageChange", function() {
                g && C()
            }), o.click(function() {
                return g ? C() : N(), !1
            }), u.click(function() {
                return C(), !1
            }), O()
        }
        function O() {
            h.click(function() {
                return E("sf"), !1
            }), f.click(function() {
                return E("sf"), !1
            }), p.click(function() {
                return E("ny"), !1
            }), l.click(function() {
                return E("ny"), !1
            })
        }
        var t = [e("#viewport"), e("#site-nav"), e("#heading"), e("div#footer-container"), e("div#corner-icon")],
            n = e("#header-bar"),
            r = e("#header-bar-container"),
            i = e("#header-bar-content"),
            s = e("#header-bar-tab"),
            o = e(".contact-link"),
            u = e(".header-close-btn"),
            a = e("#header-map"),
            f = e("#map-link-sf"),
            l = e("#map-link-ny"),
            c = e(".map-show-link"),
            h = e("#map-show-sf"),
            p = e("#map-show-ny"),
            d, v, m = !1,
            g = !1,
            y = !1,
            b, w = 600;
        A()
    })
}(jQuery), $.fn.careers = function() {
    function o() {
        $("#opening-form").fadeOut(e), $("#opening-form-thanks").fadeIn(e), setTimeout(function() {
            $("#opening-form-thanks").fadeOut(e), u(), l(s, !0)
        }, 6e3)
    }
    function u() {
        r.fadeOut(e)
    }
    function a() {
        var e = s;
        e = e == t.length - 1 ? 0 : e + 1, l(e)
    }
    function f() {
        var e = s;
        e = e == 0 ? t.length - 1 : e - 1, l(e)
    }
    function l(e, t) {
        t == null && (t = !1), u();
        if (s != e && !i || t) s != null && c(s), h(e), s = e
    }
    function c(r, i) {
        i == null && (i = !1);
        var s = $(n[r]),
            o = $(t[r]);
        $.browser.msie ? s.hide() : s.fadeOut(e), i || (t.removeClass("current"), o.removeClass("current"))
    }
    function h(r) {
        var s = $(n[r]),
            o = $(t[r]);
        i = !0, $.browser.msie ? (s.show(), i = !1) : s.fadeIn(e, function() {
            i = !1
        }), o.addClass("current")
    }
    var e = 500,
        t = $("div.opening-list-item"),
        n = $("div.opening-copy"),
        r = $("div#opening-form-container"),
        i = !1,
        s;
    n.hide(), t.each(function(e) {
        var t = $(this).children("a");
        t.click(function() {
            return l(e), !1
        })
    }), $("body").bind("careerFormLoaded", function() {
        c(s, !0)
    }), $("body").bind("careerSubmitted", function() {
        o()
    }), $("body").bind("careerCanceled", function() {
        return l(s, !0), !1
    }), $("body").bind($.events.KEY_UP, function() {
        f()
    }), $("body").bind($.events.KEY_DOWN, function() {
        a()
    });
    var p = !1;
    n.each(function(e) {
        if ($(this).hasClass("current")) {
            l(e), p = !0;
            return
        }
    }), p || l(0)
}, function(e) {
    e.fn.caseStudies = function() {
        function y(e, t) {
            N(t), d.removeClass("current"), d.filter("[data-id=" + t + "]").addClass("current")
        }
        function b() {
            var t = d.filter("li.current").index(),
                n = t + 1 < d.length ? t + 1 : 0;
            e(d[n]).find("a").click()
        }
        function w() {
            var t = d.filter("li.current").index(),
                n = t > 0 ? t - 1 : d.length - 1;
            e(d[n]).find("a").click()
        }
        function E(e) {
            var t = d.outerHeight(),
                n = p.position().top,
                r = n + e * t * 3;
            S(r)
        }
        function S(e) {
            var n = (p.height() - h.height()) * -1;
            e < n && (e = n), e > 0 && (e = 0), p.animate({
                top: e
            }, t)
        }
        function x() {
            E(-1)
        }
        function T() {
            E(1)
        }
        function N(e) {
            var t = d.filter("[data-id=" + e + "]"),
                n = t.position().top * -1;
            S(n)
        }
        function C() {
            s.slideDown(t), e("body,html").animate({
                scrollTop: s.offset().top - 10
            }, t)
        }
        function k() {
            s.slideUp(t)
        }
        function L() {
            s.is(":visible") ? k() : C()
        }
        function A() {
            e("body").bind(e.events.CASE_STUDY_SHOW, y), e("body").bind(e.events.KEY_UP, function() {
                w()
            }), e("body").bind(e.events.KEY_DOWN, function() {
                b()
            }), a.click(function(e) {
                e.preventDefault(), L()
            }), f.click(function(e) {
                e.preventDefault(), k()
            }), l.click(function(n) {
                e("body,html").animate({
                    scrollTop: u.offset().top - s.height() - 60
                }, t), k()
            }), v.click(function(e) {
                e.preventDefault(), T()
            }), m.click(function(e) {
                e.preventDefault(), x()
            })
        }
        function O() {
            var t = d.filter(".current");
            e("body").trigger(e.events.CASE_STUDY_SHOW, t.data("id"))
        }
        var t = 500,
            n = 15,
            r = 5,
            i = e(this),
            s = e("#case-studies-view-all"),
            o = e("#case-studies-nav"),
            u = e("#case-studies-content"),
            a = o.find("#view-all-btn"),
            f = s.find("a.close-btn"),
            l = s.find("a.view"),
            c = s.find("li.case-study"),
            h = e("#case-studies-icons-container"),
            p = e("#case-studies-icons"),
            d = p.find("li"),
            v = o.find("a.up-btn"),
            m = o.find("a.down-btn"),
            g;
        A(), O()
    }
}(jQuery);