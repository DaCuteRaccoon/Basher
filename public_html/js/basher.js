//Notify.js 
//New version

(function(e) { typeof define == "function" && define.amd ? define(["jquery"], e) : typeof module == "object" && module.exports ? module.exports = function(t, n) { return n === undefined && (typeof window != "undefined" ? n = require("jquery") : n = require("jquery")(t)), e(n), n } : e(jQuery) })(function(e) {
    function A(t, n, i) { typeof i == "string" && (i = { className: i }), this.options = E(w, e.isPlainObject(i) ? i : {}), this.loadHTML(), this.wrapper = e(h.html), this.options.clickToHide && this.wrapper.addClass(r + "-hidable"), this.wrapper.data(r, this), this.arrow = this.wrapper.find("." + r + "-arrow"), this.container = this.wrapper.find("." + r + "-container"), this.container.append(this.userContainer), t && t.length && (this.elementType = t.attr("type"), this.originalElement = t, this.elem = N(t), this.elem.data(r, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(n) }
    var t = [].indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e) return t;
            return -1
        },
        n = "notify",
        r = n + "js",
        i = n + "!blank",
        s = { t: "top", m: "middle", b: "bottom", l: "left", c: "center", r: "right" },
        o = ["l", "c", "r"],
        u = ["t", "m", "b"],
        a = ["t", "b", "l", "r"],
        f = { t: "b", m: null, b: "t", l: "r", c: null, r: "l" },
        l = function(t) {
            var n;
            return n = [], e.each(t.split(/\W+/), function(e, t) {
                var r;
                r = t.toLowerCase().charAt(0);
                if (s[r]) return n.push(r)
            }), n
        },
        c = {},
        h = { name: "core", html: '<div class="' + r + '-wrapper">\n	<div class="' + r + '-arrow"></div>\n	<div class="' + r + '-container"></div>\n</div>', css: "." + r + "-corner {\n	position: fixed;\n	margin: 5px;\n	z-index: 1050;\n}\n\n." + r + "-corner ." + r + "-wrapper,\n." + r + "-corner ." + r + "-container {\n	position: relative;\n	display: block;\n	height: inherit;\n	width: inherit;\n	margin: 3px;\n}\n\n." + r + "-wrapper {\n	z-index: 1;\n	position: absolute;\n	display: inline-block;\n	height: 0;\n	width: 0;\n}\n\n." + r + "-container {\n	display: none;\n	z-index: 1;\n	position: absolute;\n}\n\n." + r + "-hidable {\n	cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n	position: relative;\n}\n\n." + r + "-arrow {\n	position: absolute;\n	z-index: 2;\n	width: 0;\n	height: 0;\n}" },
        p = { "border-radius": ["-webkit-", "-moz-"] },
        d = function(e) { return c[e] },
        v = function(e) {
            if (!e) throw "Missing Style name";
            c[e] && delete c[e]
        },
        m = function(t, i) {
            if (!t) throw "Missing Style name";
            if (!i) throw "Missing Style definition";
            if (!i.html) throw "Missing Style HTML";
            var s = c[t];
            s && s.cssElem && (window.console && console.warn(n + ": overwriting style '" + t + "'"), c[t].cssElem.remove()), i.name = t, c[t] = i;
            var o = "";
            i.classes && e.each(i.classes, function(t, n) { return o += "." + r + "-" + i.name + "-" + t + " {\n", e.each(n, function(t, n) { return p[t] && e.each(p[t], function(e, r) { return o += "	" + r + t + ": " + n + ";\n" }), o += "	" + t + ": " + n + ";\n" }), o += "}\n" }), i.css && (o += "/* styles for " + i.name + " */\n" + i.css), o && (i.cssElem = g(o), i.cssElem.attr("id", "notify-" + i.name));
            var u = {},
                a = e(i.html);
            y("html", a, u), y("text", a, u), i.fields = u
        },
        g = function(t) {
            var n, r, i;
            r = x("style"), r.attr("type", "text/css"), e("head").append(r);
            try { r.html(t) } catch (s) { r[0].styleSheet.cssText = t }
            return r
        },
        y = function(t, n, r) {
            var s;
            return t !== "html" && (t = "text"), s = "data-notify-" + t, b(n, "[" + s + "]").each(function() {
                var n;
                n = e(this).attr(s), n || (n = i), r[n] = t
            })
        },
        b = function(e, t) { return e.is(t) ? e : e.find(t) },
        w = { clickToHide: !0, autoHide: !0, autoHideDelay: 5e3, arrowShow: !0, arrowSize: 5, breakNewLines: !0, elementPosition: "bottom", globalPosition: "top right", style: "bootstrap", className: "error", showAnimation: "slideDown", showDuration: 400, hideAnimation: "slideUp", hideDuration: 200, gap: 5 },
        E = function(t, n) { var r; return r = function() {}, r.prototype = t, e.extend(!0, new r, n) },
        S = function(t) { return e.extend(w, t) },
        x = function(t) { return e("<" + t + "></" + t + ">") },
        T = {},
        N = function(t) { var n; return t.is("[type=radio]") && (n = t.parents("form:first").find("[type=radio]").filter(function(n, r) { return e(r).attr("name") === t.attr("name") }), t = n.first()), t },
        C = function(e, t, n) {
            var r, i;
            if (typeof n == "string") n = parseInt(n, 10);
            else if (typeof n != "number") return;
            if (isNaN(n)) return;
            return r = s[f[t.charAt(0)]], i = t, e[r] !== undefined && (t = s[r.charAt(0)], n = -n), e[t] === undefined ? e[t] = n : e[t] += n, null
        },
        k = function(e, t, n) { if (e === "l" || e === "t") return 0; if (e === "c" || e === "m") return n / 2 - t / 2; if (e === "r" || e === "b") return n - t; throw "Invalid alignment" },
        L = function(e) { return L.e = L.e || x("div"), L.e.text(e).html() };
    A.prototype.loadHTML = function() {
        var t;
        t = this.getStyle(), this.userContainer = e(t.html), this.userFields = t.fields
    }, A.prototype.show = function(e, t) {
        var n, r, i, s, o;
        r = function(n) { return function() {!e && !n.elem && n.destroy(); if (t) return t() } }(this), o = this.container.parent().parents(":hidden").length > 0, i = this.container.add(this.arrow), n = [];
        if (o && e) s = "show";
        else if (o && !e) s = "hide";
        else if (!o && e) s = this.options.showAnimation, n.push(this.options.showDuration);
        else {
            if (!!o || !!e) return r();
            s = this.options.hideAnimation, n.push(this.options.hideDuration)
        }
        return n.push(r), i[s].apply(i, n)
    }, A.prototype.setGlobalPosition = function() {
        var t = this.getPosition(),
            n = t[0],
            i = t[1],
            o = s[n],
            u = s[i],
            a = n + "|" + i,
            f = T[a];
        if (!f || !document.body.contains(f[0])) {
            f = T[a] = x("div");
            var l = {};
            l[o] = 0, u === "middle" ? l.top = "45%" : u === "center" ? l.left = "45%" : l[u] = 0, f.css(l).addClass(r + "-corner"), e("body").append(f)
        }
        return f.prepend(this.wrapper)
    }, A.prototype.setElementPosition = function() {
        var n, r, i, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, L, A, O, M, _, D, P, H, B, j;
        H = this.getPosition(), _ = H[0], O = H[1], M = H[2], g = this.elem.position(), d = this.elem.outerHeight(), y = this.elem.outerWidth(), v = this.elem.innerHeight(), m = this.elem.innerWidth(), j = this.wrapper.position(), c = this.container.height(), h = this.container.width(), T = s[_], L = f[_], A = s[L], p = {}, p[A] = _ === "b" ? d : _ === "r" ? y : 0, C(p, "top", g.top - j.top), C(p, "left", g.left - j.left), B = ["top", "left"];
        for (w = 0, S = B.length; w < S; w++) D = B[w], N = parseInt(this.elem.css("margin-" + D), 10), N && C(p, D, N);
        b = Math.max(0, this.options.gap - (this.options.arrowShow ? i : 0)), C(p, A, b);
        if (!this.options.arrowShow) this.arrow.hide();
        else {
            i = this.options.arrowSize, r = e.extend({}, p), n = this.userContainer.css("border-color") || this.userContainer.css("border-top-color") || this.userContainer.css("background-color") || "white";
            for (E = 0, x = a.length; E < x; E++) {
                D = a[E], P = s[D];
                if (D === L) continue;
                l = P === T ? n : "transparent", r["border-" + P] = i + "px solid " + l
            }
            C(p, s[L], i), t.call(a, O) >= 0 && C(r, s[O], i * 2)
        }
        t.call(u, _) >= 0 ? (C(p, "left", k(O, h, y)), r && C(r, "left", k(O, i, m))) : t.call(o, _) >= 0 && (C(p, "top", k(O, c, d)), r && C(r, "top", k(O, i, v))), this.container.is(":visible") && (p.display = "block"), this.container.removeAttr("style").css(p);
        if (r) return this.arrow.removeAttr("style").css(r)
    }, A.prototype.getPosition = function() {
        var e, n, r, i, s, f, c, h;
        h = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), e = l(h), e.length === 0 && (e[0] = "b");
        if (n = e[0], t.call(a, n) < 0) throw "Must be one of [" + a + "]";
        if (e.length === 1 || (r = e[0], t.call(u, r) >= 0) && (i = e[1], t.call(o, i) < 0) || (s = e[0], t.call(o, s) >= 0) && (f = e[1], t.call(u, f) < 0)) e[1] = (c = e[0], t.call(o, c) >= 0) ? "m" : "l";
        return e.length === 2 && (e[2] = e[1]), e
    }, A.prototype.getStyle = function(e) {
        var t;
        e || (e = this.options.style), e || (e = "default"), t = c[e];
        if (!t) throw "Missing style: " + e;
        return t
    }, A.prototype.updateClasses = function() { var t, n; return t = ["base"], e.isArray(this.options.className) ? t = t.concat(this.options.className) : this.options.className && t.push(this.options.className), n = this.getStyle(), t = e.map(t, function(e) { return r + "-" + n.name + "-" + e }).join(" "), this.userContainer.attr("class", t) }, A.prototype.run = function(t, n) {
        var r, s, o, u, a;
        e.isPlainObject(n) ? e.extend(this.options, n) : e.type(n) === "string" && (this.options.className = n);
        if (this.container && !t) { this.show(!1); return }
        if (!this.container && !t) return;
        s = {}, e.isPlainObject(t) ? s = t : s[i] = t;
        for (o in s) {
            r = s[o], u = this.userFields[o];
            if (!u) continue;
            u === "text" && (r = L(r), this.options.breakNewLines && (r = r.replace(/\n/g, "<br/>"))), a = o === i ? "" : "=" + o, b(this.userContainer, "[data-notify-" + u + a + "]").html(r)
        }
        this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide && (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(this.show.bind(this, !1), this.options.autoHideDelay))
    }, A.prototype.destroy = function() { this.wrapper.data(r, null), this.wrapper.remove() }, e[n] = function(t, r, i) { return t && t.nodeName || t.jquery ? e(t)[n](r, i) : (i = r, r = t, new A(null, r, i)), t }, e.fn[n] = function(t, n) {
        return e(this).each(function() {
            var i = N(e(this)).data(r);
            i && i.destroy();
            var s = new A(e(this), t, n)
        }), this
    }, e.extend(e[n], { defaults: S, addStyle: m, removeStyle: v, pluginOptions: w, getStyle: d, insertCSS: g }), m("bootstrap", { html: "<div>\n<span data-notify-text></span>\n</div>", classes: { base: { "font-weight": "bold", padding: "8px 15px 8px 14px", "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)", "background-color": "#fcf8e3", border: "1px solid #fbeed5", "border-radius": "4px", "white-space": "nowrap", "padding-left": "25px", "background-repeat": "no-repeat", "background-position": "3px 7px" }, error: { color: "#B94A48", "background-color": "#F2DEDE", "border-color": "#EED3D7", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)" }, success: { color: "#468847", "background-color": "#DFF0D8", "border-color": "#D6E9C6", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)" }, info: { color: "#3A87AD", "background-color": "#D9EDF7", "border-color": "#BCE8F1", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)" }, warn: { color: "#C09853", "background-color": "#FCF8E3", "border-color": "#FBEED5", "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)" } } }), e(function() {
        g(h.css).attr("id", "core-notify"), e(document).on("click", "." + r + "-hidable", function(t) { e(this).trigger("notify-hide") }), e(document).on("notify-hide", "." + r + "-wrapper", function(t) {
            var n = e(this).data(r);
            n && n.show(!1)
        })
    })
});

// Initialize This Thing

firebase.initializeApp({
    "apiKey": "AIzaSyABh29lA-bxkGCtNHYgq5sxnAElx-AfSJI",
    "appId": "1:909516160776:web:6b53bd4f94f8a712",
    "databaseURL": "https://milli0ns0fm0nkeys.firebaseio.com",
    "storageBucket": "milli0ns0fm0nkeys.appspot.com",
    "authDomain": "basher.app",
    "messagingSenderId": "909516160776",
    "projectId": "milli0ns0fm0nkeys"
});


var perf = firebase.performance();

let story_db = {};
let global_tables = {};
let queued_rates = [];
let queued_titles = [];
let queued_stories = [];

const punc = [".", ",", "!", "?"];
const warning_message = { "title": "Warning", "message": "Several of your submissions have been rejected by other users. Please ensure you are making quality submissions!", "timestamp": 0 };
const in_progress_string = '<span class="progress">in progress</span>';
const default_title = "Basher! Write One Word Of The Next Great Story!";
let my_photo_url = "https://basher.app/images/user.png";

// DIp switches
const max_demerit_percentage = 50; // not server enforced
const number_of_messages = 10;
const limit_count = 100; // firebase rule 
const stories_per_page = 25; // 4 pages
const recent_user_count = 24; // firebase rule
const score_to_stories_ratio = 25 * 5; // 25 words -- firebase rule (currently at 50)
const number_of_recent_words = 10;
const minimum_story_length = 39; // 49? -- firebase rule
const max_title_length = 30; // firebase rule
const tweet_vote_threshold = 25; // firebase and index
const tweet_rating_threshold = 4; // firebase andindex -- not used rn

// Checks if user meant to submmit non dictionary word
let are_you_sure = last_entry = "";

// TUrn off snapshots. make them blank just in case they get called at wrong time
let stop_score = function() {};
let stop_story = function() {};
let stop_queue = function() {};
let stop_messages = function() {};

// I should add in user_loaded
let global_user = user_stories = queue_loaded = top_stories_loaded = recent_stories_loaded = loading = load_when_finshed = on_dead_queue = warning_shown = flag_end_confirmation = user_has_messages = schema_generated = false;



// Tracks queue - Tracks Which story in your personal queue you're on - Tracks when you get to start
let counter = {
    queue: 0, // where ou are in the queue
    story: 0, // within your personal story queue
    start: 0, // how many start_stories you've done
    rate: 0, // how many ratings youve done (gets x at a time)
    title: 0 // how many titles youve done (gets x at a time)
};




// For detecting errors with uploading new profile images.
let new_profile_pic = new Image();

// Queue
const writes = 8; // 40 words 
const rates = 1; // 5 ratings 
const titles = 1; // 5 votes
const starts = 1; // ? new stories. Only works when available. (score / created > 30 ) match on RULES


// Queue Order
const queue_write = 0;
const queue_rate = queue_write + writes;
const queue_title = queue_rate + rates;
const queue_start = queue_title + titles;
const queue_rounds = queue_start + starts;

// Jquery 

$(document).ready(function() {

    $.notify.defaults({

        globalPosition: 'bottom right',
        className: 'success'

    });

});

// Initialize Firebase

let db = firebase.firestore();
let storage = firebase.storage();
let ui = new firebaseui.auth.AuthUI(firebase.auth());
let uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            // User successfully signed in.
            // console.log(authResult, redirectUrl);
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            $("#register").hide();
            return false;
        },
        uiShown: () => {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';

        }
    },

    // testing. replace with one-touch when avail.
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,

    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'https://basher.app',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        },
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID

    ],
    // Terms of service url.
    tosUrl: 'https://basher.app/tos.html',
    // Privacy policy url.
    privacyPolicyUrl: 'https://basher.app/privacy.html'
};

ui.start('#firebaseui-auth-container', uiConfig);

// not using this callback at the moment but
let email_config = {};

firebase.auth().onAuthStateChanged((user) => {

    // Logged in or out, we're gonna blank the user data:

    blank();

    if (user) {

        // Clones user object into our modifyable one
        global_user = $.extend(global_user, user);
        global_user.uid = firebase.auth().currentUser.uid;

        email_config = {
            url: 'https://basher.app/?email=' + global_user.email
        };

        if (!global_user.emailVerified) {
            $(".resend").show();
        }


        db.collection("Users").doc(global_user.uid).get().then((user_data) => {

            if (user_data.exists) {

                // User Has Logged In To The Site Before

                // Merge public-facing data with private auth data, public-facing takes precedence
                Object.assign(global_user, user_data.data());


                // trying to find the right way to pass a name to the server, since it doesnt get there on account creation. shouldnt this come from the clone?
                //  global_user.displayName = firebase.auth().currentUser.displayName.substring(0, 15);

                //don't used old queued stories, more will come shortly
                queued_stories = [];

                // Get User's Story Collection

                db.collection("Users").doc(global_user.uid).collection("Stories").get().then((story_collection) => {

                        story_collection.forEach((doc) => {

                            user_stories[doc.id] = doc.data();

                        })

                    }).then(() => {
                        console.log("Got User's Story Info");

                        // Reload Top Stories to add personal stars, in case they looked before login. will reload when clicked with fresh user data.
                        top_stories_loaded = recent_stories_loaded = false;

                    })
                    .catch(log_error);

                // Tell The Server We're Logged In, Gives Points For Login

                if (gtag || false) {
                    gtag('event', global_user.providerData.length + " " + global_user.providerData[0].providerId, {
                        'event_category': 'Login'
                    });
                }

                db.collection("Users").doc(global_user.uid).set({
                        "logged_in": true,
                        "displayName": global_user.displayName
                    }, { merge: true }).then(() => {

                        console.log("Told server we're logged in!");

                    })
                    .catch(log_error);



            } else {

                // New User!

                // The server will generate all this in a second, but let's have it now:
                global_user.score = 0;
                queued_stories = [];
                global_user.recent_words = [];
                global_user.displayName = firebase.auth().currentUser.displayName.substring(0, 15);

                if (!(global_user.photoURL || false))
                    global_user.photoURL = "https://basher.app/images/user.png";

                user.sendEmailVerification(email_config);

            }

            // All users: Get interface ready




            if (global_user.photoURL.substring(0, 5) !== "https") {

                let starsRef1 = storage.ref().child("Custom_Photos/" + global_user.photoURL);

                starsRef1.getDownloadURL().then((url) => {

                    my_photo_url = url;
                    $("user-photo.self").html('<img src="' + my_photo_url + '">');


                }).catch(log_error);

            } else {
                my_photo_url = global_user.photoURL;
                $("user-photo.self").html('<img src="' + my_photo_url + '">');
            }

            $(".user_id").html(global_user.displayName);
            $(".score").html(numberWithCommas(global_user.score));


            // Recent USers

            $("#recent_users_div").html("");

            db.collection("Users").orderBy('last_login', 'desc').limit(recent_user_count).get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    if (doc.exists) {

                        let the_info = doc.data();

                        let purl = the_info.photoURL;
                        let pdn = the_info.displayName;
                        let pun = doc.id;

                        if (purl.substring(0, 4).toLowerCase() === "http")
                            $("#recent_users_div").append("<img title=\"" + pdn + "\" src=\"" + purl + "\" onclick=\"get_user('" + pun + "')\"/>");
                        else {
                            storage.ref().child("Custom_Photos/" + purl).getDownloadURL().then((url) => {

                                $("#recent_users_div").append("<img title=\"" + pdn + "\" src=\"" + url + "\" onclick=\"get_user('" + pun + "')\"/>");

                            });
                        }
                    }
                });
            });

            // FUn stats

            $(".logged_in loader-icon").show();
            $.get({
                url: "//us-central1-milli0ns0fm0nkeys.cloudfunctions.net/stats_check",
                type: 'GET',
                dataType: 'json'
            }).done((data) => {

                $(".logged_in loader-icon").hide();
                $("#cool_stats").append("<tr style=\"display: none\"><td></td></tr><tr><td><b>Number Of Bashers:</b> " + numberWithCommas(data.total_users) + "</td></tr>");
                $("#cool_stats").append("<tr><td><b>Stories Completed:</b> " + numberWithCommas(data.completed_stories) + "</td></tr>");
                $("#cool_stats").append("<tr><td><b>Stories In Progress:</b> " + numberWithCommas(data.total_stories - data.completed_stories) + "</td></tr>");


                db.collection("Users").doc(data.most_points.user).get().then((un) => {

                    if (un.exists) {

                        let cont = un.data();
                        let purl = cont.photoURL;

                        if (cont.photoURL.substring(0, 4).toLowerCase() !== "http") {
                            storage.ref().child("Custom_Photos/" + cont.photoURL).getDownloadURL().then((url) => {
                                purl = url;
                                $("#cool_stats").append("<tr><td id=\"highest\" onclick=\"get_user('" + data.most_points.user + "')\"><img title=\"" + cont.displayName + "\" src=\"" + purl + "\" /><b>Highest Ranked Basher:</b><br />" + cont.displayName + " (" + numberWithCommas(cont.score) + ")" + "</td></tr>");

                            });
                        } else
                            $("#cool_stats").append("<tr><td id=\"highest\" onclick=\"get_user('" + data.most_points.user + "')\"><img title=\"" + cont.displayName + "\" src=\"" + purl + "\" /><b>Highest Ranked Basher:</b><br />" + cont.displayName + " (" + numberWithCommas(cont.score) + ")" + "</td></tr>");



                    }


                }).catch(log_error);

            });

            // Listen For Server Updates, Spefically for Score and Write Queue

            stop_messages = db.collection("Messages").doc(global_user.uid).onSnapshot((doc) => {


                if (!doc.exists)
                    return;

                let message_data = doc.data().messages;

                $("#messages_div").html('<tr id="warning"><td><b>' + warning_message.title + '</b> ' + warning_message.message + '</td></tr>');


                for (let i = message_data.length - 1; i >= 0 && i >= (message_data.length - number_of_messages); i--) {

                    $("#messages_div").append('<tr><td><b>' + (message_data[i].title || "") + '</b> ' + (message_data[i].message || "") + '</td></tr>');
                    user_has_messages = true;

                    if (i >= (last_message_data_length || message_data.length))
                        $.notify(message_data[i].title);
                }


                var last_message_data_length = message_data.length;

            });


            $("#announcements_div").html("");
            db.collection("Messages").doc("global").get().then((doc) => {


                if (!doc.exists)
                    return;

                let announcement_data = doc.data().announcements;

                for (let i = announcement_data.length - 1; i >= 0; i--) {

                    $("#announcements_div").append('<p><b>' + announcement_data[i].title + '</b> ' + announcement_data[i].message);
                }


            });

            stop_queue = db.collection("Private").doc(global_user.uid).onSnapshot((doc) => {



                if (!doc.exists)
                    return;

                let private_data = doc.data();

                if (typeof global_user.demerits === "undefined")
                    global_user.demerits = private_data.demerits;

                if (new Date().getTime() - (doc.data().queue_time || 0) > 60 * 3 * 1000) {
                    db.collection("Users").doc(global_user.uid).update({
                        "logged_in": true
                    });
                    console.log("requesting fresh stories asap");
                }

                queued_stories = private_data.queued_stories;

                if (on_dead_queue)
                    get_queue(true);

                // New demerit added
                if (private_data.demerits > global_user.demerits) {

                    // over threshold for first time
                    if (!warning_shown && (global_user.score / private_data.demerits < max_demerit_percentage)) {

                        warning_shown = true;
                        $("#warning").show();
                        $.notify("Please ensure you are making quality submissions!", "warn");
                        $.notify("Several of your submissions have been rejected by other users.", "warn");
                    } else {
                        // new demerit but not new threshold
                        $.notify("One of your submissions was rejected by other users.", "error");
                    }
                }

                global_user.demerits = private_data.demerits;

                console.log("queue updated", private_data);

            });

            stop_score = db.collection("Users").doc(global_user.uid).onSnapshot((doc) => {

                if (!doc.exists)
                    return;

                let score_data = doc.data();

                if (score_data.score > global_user.score) {
                    $.notify("Your score went up " + (score_data.score - global_user.score) + (((score_data.score - global_user.score) === 1) ? " point!" : " points!"));
                    $(".score").html(numberWithCommas(score_data.score));

                    // If score went up enough to fix warning
                    if (score_data.score / global_user.demerits < max_demerit_percentage)
                        $("#warning").hide();

                }
                Object.assign(global_user, score_data);

                // THIS IS BAD
                // global_user.displayName = firebase.auth().currentUser.displayName.substring(0, 15);

                console.log("score updated");

            });


            // End of ALl Users workflow load
            get_more_titles();
            get_more_rates();
            hash();

        });



    } else {

        // No user is signed in.

        //Force reload of all lists, removes your ratings, etc.
        blank();

        // Testing: 
        ui.start('#firebaseui-auth-container', uiConfig);


        hash();

    }



}); // End of Auth Change


// Utility Functions 

function blank() {



    user_stories = {};
    global_user = {};
    queued_stories = [];
    global_user.recent_words = [];
    queue_loaded = top_stories_loaded = recent_stories_loaded = warning_shown = false;
    my_photo_url = "https://basher.app/images/user.png";

    counter = {
        queue: 0, // where ou are in the queue
        story: 0, // within your personal story queue
        start: 0, // how many start_stories you've done
        rate: 0, // how many ratings youve done (gets x at a time)
        title: 0 // how many titles youve done (gets x at a time)
    };

}

//toBlob polyfill
if (!HTMLCanvasElement.prototype.toBlob) {
    Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function(callback, type, quality) {
            let dataURL = this.toDataURL(type, quality).split(',')[1];
            setTimeout(function() {
                let binStr = atob(dataURL),
                    len = binStr.length,
                    arr = new Uint8Array(len);
                for (let i = 0; i < len; i++) {
                    arr[i] = binStr.charCodeAt(i);
                }
                callback(new Blob([arr], { type: type || 'image/png' }));
            });
        }
    });
}


function compress(e) {
    const fileType = e.type;
    const reader = new FileReader();
    reader.readAsDataURL(e);
    console.log("3");
    reader.onload = event => {
        console.log("2");
        let img = new Image();
        img.src = event.target.result;
        img.onerror = (error) => {
            console.log(error);
        }
        img.onload = () => {

                const elem = document.createElement('canvas');
                const ctx = elem.getContext('2d');
                const height = 200; // fixed height in pixels
                const scaleFactor = height / img.height;
                elem.height = height;
                elem.width = img.width * scaleFactor;
                ctx.drawImage(img, 0, 0, img.width * scaleFactor, height);
                console.log((ctx || false), (ctx.canvas || false));
                ctx.canvas.toBlob((blob) => {

                    upload_new_image(new File([blob], "new_pic", {
                        type: 'image/jpeg'
                    }));
                }, 'image/jpeg', 1);
            },
            reader.onerror = error => console.log(error);
    };
}

function hash() {

    let show_hash = getQueryVariable("show");
    let id_hash = getQueryVariable("id");

    if (global_user.uid || false) {
        $(".not_logged_in").hide();
        $(".logged_in").show();
    } else {
        $(".logged_in").hide();
        $(".not_logged_in").show();
    }

    if (show_hash == "top")
        get_top_stories();
    else if (show_hash == "recent")
        get_recent_stories();
    else if (show_hash == "write" && (queued_stories[counter.story] || false))
        get_queue();
    else if (show_hash == "profile" && ((global_user.uid || false) || id_hash))
        get_user(id_hash);
    else if (show_hash == "story" && id_hash)
        get_story(id_hash);
    else if (show_hash == "about")
        get_about();
    else
        get_start();


}


window.onpopstate = function(event) {
    hash();
}

function log_error(error) {
    console.error(error);
    return (true);
}

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function sanitize(word) {



    return word.replace(/[^-'0-9a-zÀ-ÿ]|[Þß÷þø]/ig, "").toLowerCase().trim();

}

function check_input() {

    let the_input = sanitize($("#f1").val());

    // Sanitize input on the fly
    $("#f1").val(the_input);

    if (the_input == "") {
        $(".queue new-word .approve").hide();
        if ((story_db.story || false) && story_db.story.length > minimum_story_length) {
            $(".queue h2").html("Write The Next Word, Or Mark The Story Finished");
            $(".flag").show();
        }
    } else {
        if (story_db.id || false)
            $(".queue h2").html("Write The Next Word");

        $(".queue new-word .approve").show();
        $(".flag").hide();
    }
}

function logout() {
    stop_queue();
    stop_score();
    stop_story();
    stop_messages();
    $("#register").show();
    firebase.auth().signOut();
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}


function star(raw_number, user_score) {

    // Shouldnt need these but just in case? 

    if (raw_number > 5)
        raw_number = 5;

    if (user_score > 5)
        user_score = 5;

    if (raw_number < 0)
        raw_number = 0;

    if (user_score < 0)
        user_score = 0;

    // Either black or gold star, wholes only, then maybe half

    let stars = Math.floor(raw_number);
    if (user_score)
        stars = Math.floor(user_score);



    let return_string = '';
    let half_star = (raw_number - stars >= .25 && raw_number - stars < .75) ? 1 : 0;

    if (raw_number - stars >= .75)
        stars++;

    // Draw Black or Gold Stars 



    for (let i = 0; i < stars; i++) {
        return_string += '<svg class="star ' + ((user_score) ? "gold" : "") + ' star_' + (i + 1) + '" data-value="' + (i + 1) + '" width="260" height="245" viewBox="0 0 260 245" xmlns="http://www.w3.org/2000/svg"><path d="m55,237 74-228 74,228L9,96h240"/></svg>';

    }

    // Draw Half Star 

    if (half_star && !user_score) {
        stars++;
        return_string += '<svg class="star half star_' + stars + '" data-value="' + stars + '" width="260" height="245" viewBox="0 0 260 245" xmlns="http://www.w3.org/2000/svg"><path d="m55,237 74-228 74,228L9,96h240"/></svg>';
        return_string += '<svg class="star halfoff off star_' + stars + '" data-value="' + stars + '" width="260" height="245" viewBox="0 0 260 245" xmlns="http://www.w3.org/2000/svg"><path d="m55,237 74-228 74,228L9,96h240"/></svg>';

    }

    // Draw Empty Gray Stars
    for (let i = stars; i < 5; i++) {
        return_string += '<svg class="star star_' + (i + 1) + ' off" data-value="' + (i + 1) + '" width="260" height="245" viewBox="0 0 260 245" xmlns="http://www.w3.org/2000/svg"><path d="m55,237 74-228 74,228L9,96h240"/></svg>';

    }
    // Returns a bunch of SVGS
    return return_string

}


// USER FUNCTIONS

function resend_email() {

    $(".resend").hide();

    firebase.auth().currentUser.sendEmailVerification(email_config);

}

function change_name() {

    let new_name = $("#new_name").val();


    if (new_name.length > 15 || new_name.length <= 1) {
        $.notify("There was an error. Please choose a different name.", "error");
        return;
    }



    return $.get({
        url: "//us-central1-milli0ns0fm0nkeys.cloudfunctions.net/addTitle",
        data: {
            word: name
        },
        type: 'GET',
        dataType: 'json'
    }).done(() => {

        document.getElementById("reset_me_name").reset();


        db.collection("Users").doc(global_user.uid).update({
                "displayName": new_name
            }).then(() => {

                $(".user_id").html(new_name);
                global_user.displayName = new_name;
                $.notify("Display name updated.");
                $("change-name").hide();

            })
            .catch((error) => {
                $.notify("There was an error. Please choose a different name.", "error");
                console.error(error);
            });

        return;

    }).fail(() => {

        $.notify("There was an error. Please choose a different name.", "error");
        return;

    });

}

function change_email() {

    let new_email = $("#new_email").val();
    let their_password = $("#new_email_password").val();


    if (!validateEmail(new_email) || their_password.length < 6) {
        $.notify("There was an error. Please check your email address.", "error");
        return;
    }


    document.getElementById("reset_me_email").reset();



    let credential = firebase.auth.EmailAuthProvider.credential(global_user.email, their_password);

    firebase.auth().currentUser.reauthenticateWithCredential(credential).then(() => {
        // User re-authenticated.

        db.collection("Users").doc(global_user.uid).update({
                "email": new_email
            }).then(() => {

                // $(".email").html(new_email);
                //  global_user.email = new_email;
                $.notify("Email address updated.");
                $("change-email").hide();
                $(".email").html(new_email);
                firebase.auth().currentUser.sendEmailVerification(email_config);




            })
            .catch((error) => {
                $.notify("There was an error. Please check your email address.", "error");
                console.error(error);
            });

    }).catch(log_error);

}


function change_password() {

    let old_password = $("#old_password").val();
    let new_password = $("#new_password").val();
    let confirm_password = $("#confirm_password").val();

    if (new_password !== confirm_password || new_password.length < 6 || new_password == old_password) {
        $.notify("There was an error. Please choose a different password.", "error");
        return;
    }

    document.getElementById("reset_me_password").reset();


    let credential = firebase.auth.EmailAuthProvider.credential(global_user.email, old_password);

    global_user.reauthenticateWithCredential(credential).then(() => {
        // User re-authenticated.

        global_user.updatePassword(new_password).then(() => {


            $.notify("Password changed.");
            $("change-password").hide();

        }).catch((error) => {

            console.log(error)
            $.notify("There was an error. Please choose a different password.", "error");
        });

    }).catch(log_error);

}


function imageFound(found) {
    imageNotFound(true);
}

function imageNotFound(found) {

    // This function runs after the image is stored, when it renders. If it fails to load, we go back to default image.

    let write_this = "https://basher.app/images/user.png";
    global_user.photoURL = write_this;

    if (found) {
        global_user.photoURL = new_profile_pic.src;
        write_this = global_user.uid
    }

    $("loader-icon").hide();
    $("user-photo").html('<img src="' + global_user.photoURL + '">');
    $.notify("Profile photo updated.");
    my_photo_url = global_user.photoURL;

    db.collection("Users").doc(global_user.uid).update({
        "photoURL": write_this
    }).catch(log_error);
}


document.getElementById("change_photo").onchange = function() {
    compress($("#change_photo")[0].files[0] || null);
};

function upload_new_image(the_file) {


    if (!the_file)
        return;

    if (the_file.size > 1024 * 1024 * 1.2) {
        $.notify("There was an error. Please try a different image.", "error");
        return;
    }


    //      document.getElementById("reset_me_upload").reset();
    $("loader-icon").css("display", "inline");

    let uploadTask = storage.ref().child("Custom_Photos/" + global_user.uid).put(the_file);

    uploadTask.on('state_changed', (snapshot) => {

        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log('Upload is ' + progress + '% done and running is ' + firebase.storage.TaskState.RUNNING);


    }, (error) => {
        // Handle unsuccessful uploads
        console.log(error);

        $("loader-icon").hide();
        $.notify("There was an error. Please choose a different image.", "error");


    }, () => {

        // Handle successful uploads

        uploadTask.snapshot.ref.getDownloadURL().then((url) => {

            new_profile_pic.onload = imageFound;
            new_profile_pic.onerror = imageNotFound;
            new_profile_pic.src = url;

        }).catch(log_error);

    });

}

// LOADING STRUCTURE

function div_loading(finished, load_this, instant) {

    if (load_this !== "error")
        on_dead_queue = false;
    else
        queue_loaded = false;


    // Call this function to let app know when loading is starting or finished. Allows for "loading" screen, and maybe transitions.

    // No loading needed so just show stuff
    if (instant) {
        load_when_finshed = load_this;
        finished = true;

    }

    // Ready To Display
    if (finished && load_when_finshed == load_this) {

        loading = false;

        // Queue, Read Story, Top Stories, Recent Stories, User
        $("main section").hide();
        $("main ." + load_this).show();
        $("main").show();

        // console.log("Page: ", load_this);

        //           $("main h2:visible,the-story:visible")[0].scrollIntoView();

    }

    // First Load Request
    else if (!finished && !loading) {

        loading = true;

        $("main").hide();
        $("main section").hide();

        load_when_finshed = load_this;

        //  console.log("Loading: ", load_this);

    }

    // Another Load Request Before Previous One Is Finished
    else if (!finished && loading) {

        load_when_finshed = load_this;

        //  console.log("New load request: ", load_this);
    }

}


// QUEUE FUNCTIONS 

function get_start() {

    update_history();
    div_loading(false, "start", true);


}


function update_history(url, title, update) {

    let little_hash = url;

    full_title = (title ? "Basher! " + title : default_title);

    if (location.hostname !== "localhost") {

        url = (url ? "?show=" + url : "");

        if (gtag || false)
            gtag('config', 'UA-139149604-1', {
                'page_title': title,
                'page_location': "https://basher.app/" + url,
                'page_path': '/' + url
            });

        history.pushState(null, full_title, "https://basher.app/" + url);
    }

    document.title = full_title;

    if (!schema_generated) {

        schema_generated = true;

        var schema_data = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Basher! Write One Word Of The Next Great Story!",
            "url": "https://basher.app/" + url

        };

        if (update) {
            // A Story we're reading

            if (typeof addthis !== undefined) {

                //+ "&title=" + uri
                addthis.update('share', 'url', "https://basher.app/" + url);
                addthis.update('share', 'title', 'Basher! Story: "' + full_title + '"');
                addthis.update('share', 'description', "Read this story written one word at a time by people of the Internet.");
                addthis.update('share', 'media', "https://basher.app/images/logo.png");
            }


            schema_data["@type"] = "Article";
            schema_data.headline = title;
            schema_data.datePublished = new Date(update).toISOString();
            schema_data.dateModified = new Date(update).toISOString();
            schema_data.author = {
                "@type": "Organization",
                "name": "Basher"
            };
            schema_data.publisher = {
                "@type": "Organization",
                "name": "Basher",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://basher.app/images/logo.png",
                    "width": 750,
                    "height": 500
                }
            };
            schema_data.mainEntityOfPage = {
                "@type": "WebPage",
                "@id": "https://basher.app/?show=top"
            };

            schema_data.image = {
                "@type": "ImageObject",
                "url": "https://basher.app/images/logo.png",
                "width": 750,
                "height": 500
            };



        } else if (little_hash == "top" || little_hash == "recent" || little_hash == "about") {

            schema_data["@type"] = "BreadcrumbList";
            schema_data.itemListElement = [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://basher.app"
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": "https://basher.app/" + url
            }];
        } else {
            schema_data["@type"] = "WebSite";
            schema_data.datePublished = new Date().toISOString();
        }

        var script = document.createElement('script');
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(schema_data);
        console.log(JSON.stringify(schema_data));
        document.getElementsByTagName('body')[0].appendChild(script);
    }
}

function get_about() {

    update_history("about", "About Us");

    div_loading(false, "about", true);


}

function get_queue(ready_for_new_queue) {

    update_history("write", "Write");

    // If the queue has already been loaded once, just show it. Doesn't need to be reloaded.

    if (queue_loaded && !ready_for_new_queue) {
        div_loading(true, "queue", true);
        return;
    }

    // Turn off snapshot on previous story. on 1st run its a blank function
    stop_story();

    // From Now on, just show it unless ready_for_new_queue is true.
    queue_loaded = true;

    div_loading(false, "queue");

    // Check init for size of queue, but here's where it plays out:

    let to_load = "";

    if (counter.queue % queue_rounds < queue_rate) {
        to_load = "write";
    } else if (counter.queue % queue_rounds < queue_title) {
        to_load = "rate";
    } else if (counter.queue % queue_rounds < queue_start) {
        to_load = "title";
    } else // if (counter.queue % queue_rounds < queue_rounds)
    {
        to_load = "start";
    }

    // Iterates through
    counter.queue++;

    // Here we download the queues, make sure there's a good match, before generating the pages.

    switch (to_load) {

        case "write":

            // Server queues writes, just go to the next one on the list.

            if (queued_stories[counter.story] || false) {

                load_queue(queued_stories[counter.story], "write");

                counter.story++;
                console.log("story counter: ", counter.story);

            } else {
                // originally theis was  counter.queue = queue_rate and then no break, but no other section did that... why do it with write?
                console.log("write failed, trying next");
                counter.queue = queue_rate;
                get_queue(true);
            }

            break;

        case "rate":



            if (counter.rate + 1 >= queued_rates.length) {
                get_more_rates();
            }

            if (queued_rates[counter.rate] || false) {

                load_queue(queued_rates[counter.rate], "rate");
                counter.rate++;
            } else {
                console.log("rate finisihed. trying whats after.");
                get_more_rates();
                counter.queue = queue_title;
                get_queue(true);
            }

            break;

        case "title":



            if (counter.title + 1 >= queued_titles.length) {
                get_more_titles();
            }

            if (queued_titles[counter.title] || false) {

                load_queue(queued_titles[counter.title], "title");
                counter.title++;
            } else {
                console.log("title finisihed. trying whats after.");
                get_more_titles();
                counter.queue = queue_start;
                get_queue(true);
            }
            break;

        case "start":

            counter.start++;

            // This shouldbe same condition as in RULES
            if (global_user.stories_created === 0 || (global_user.score / global_user.stories_created > score_to_stories_ratio)) {

                load_queue(null, "start");

            } else {

                console.log("not ready to start yet.");

                if (queued_stories[counter.story] || false) {
                    console.log("ready to write, tho");
                    counter.queue = queue_write;
                    get_queue(true);
                } else if (queued_rates[counter.rate] || false) {
                    console.log("ready to rate, tho");
                    counter.queue = queue_rate;
                    get_queue(true);

                } else if (queued_titles[counter.title] || false) {
                    console.log("ready to title, tho");
                    counter.queue = queue_title;
                    get_queue(true);
                } else {
                    div_loading(true, "error", true);
                    queue_loaded = false;
                    on_dead_queue = true;
                }

            }
            break;

        default:
            div_loading(true, "error", true);
            on_dead_queue = true;
            queue_loaded = false;


    }
}

function get_more_titles() {

    console.log('grabbing titles');

    queued_titles = [];
    counter.title = 0;

    db.collection("Stories").where('title', "==", 0).where('date_finished', ">", 0).orderBy('date_finished', 'asc').limit(limit_count).get().then((snapshot) => {

            if (!snapshot.empty) {

                snapshot.forEach((doc) => {

                    if (doc.exists) {

                        // THIS IS WHAT DOESN'T ALLOW DOUBLES

                        if (user_stories[doc.id] || false)
                            return;

                        queued_titles.push(doc.id);

                    }

                });

            }
        })
        .catch(log_error);

}


function get_more_rates() {

    console.log('grabbing rates');
    queued_rates = [];
    counter.rate = 0;

    db.collection("Stories").where('pending_title', "==", null).orderBy('rating.votes', 'asc').limit(limit_count).get().then((snapshot) => {

            if (!snapshot.empty) {

                snapshot.forEach((doc) => {

                    if (doc.exists) {

                        // THIS IS WHAT DOESN'T ALLOW DOUBLES

                        if (user_stories[doc.id] || false)
                            return;

                        queued_rates.push(doc.id);

                    }

                });



            }
        })
        .catch(log_error);
}


function load_queue(story_id, lets_do_this) {

    // Once we know what type of queue we're loading, do this. Reset everything, then show what we need.

    $(".queue button").attr("disabled", false);
    $("#queue_rating").removeClass();
    $(".queue input, select").val("");
    $(".queue contributors-wrapper ul, .queue the-title, .queue the-story, .queue suggest-title ul, .queue pending-word").html("");
    $("select, .queue new-word, .queue approval-wrapper, .queue rating-wrapper, .queue suggest-title, .queue the-title, .queue approval-wrapper, .queue new-word .approve, .queue .flag, .queue .error-code, button.deny").hide();

    if (lets_do_this == "start") {


        document.getElementById("f1").focus();
        $('new-word').css("display", "inline");

        $(".queue h2").html("Write The First Word Of The Next&nbsp;Great&nbsp;Story");
        $(".queue contributors-wrapper ul").html('<li onclick="get_user(\'' + global_user.uid + '\')">' + global_user.displayName + '</li>');

        story_db = {};

        div_loading(true, "queue");
        return;

        // No story fetch needed for start.
    }

    db.collection("Stories").doc(story_id).get().then((doc) => {

        if (doc.exists) {

            story_db = doc.data();
            story_db.id = story_id;

            let story_string = "";

            story_db.story.forEach((value) => {
                story_string = story_string + value;

            });


            // Load Rating

            let user_rating = null;

            if (user_stories || false) {

                if (user_stories[story_id] || false)

                    user_rating = (user_stories[story_id].rating || null);

            }


            // Load Story Basics 

            if (story_db.title)
                $(".queue the-title").html(story_db.title);

            $(".queue the-story").html(story_string);
            $(".queue rating-wrapper .votes_cast").html("(" + story_db.rating.score.toFixed(2) + " rating - " + story_db.rating.votes + ((story_db.rating.votes !== 1) ? " votes)" : " vote)"));
            $("#queue_rating").addClass(story_id);
            $("#queue_rating").html(star(story_db.rating.score, user_rating));
            $("button.deny").show();


            // Load contributors 

            story_db.contributors.forEach((one) => {


                db.collection("Users").doc(one).get().then((un) => {

                    if (un.exists) {

                        let cont = un.data();

                        $(".queue contributors-wrapper ul").append('<li onclick="get_user(\'' + one + '\')">' + cont.displayName + '</li>');
                    } else
                        console.error("Get user name failed.", one);
                });

            });


            // Load For Queue 

            if (lets_do_this == "title") {

                if (!story_db.pending_title)
                    return get_queue(true);


                story_db.pending_title.forEach((one, index) => {
                    $(".queue suggest-title ul").prepend("<li> <input type=\"radio\" name=\"title_radio\" value=\"" + (index + 2) + "\" />" + one.title + "</li>");
                });

                $(".queue h2").html("Suggest/Vote On The Title");
                $(".queue suggest-title ul").append('<li><input type="radio" name=\"title_radio\" value="1"' + ((story_db.pending_title.length === 0) ? " checked" : "") + ' /><input type="text" maxlength="45" id="submit_title" /></li>');


                $(".queue suggest-title").show();

                $("#queue_rating").addClass("star_wrap");

                $(".queue .star_wrap .star").click(function(data) {

                    // You can rate without voting in title mode
                    vote(parseInt($(this).attr("data-value")), story_db);

                });

                $(".queue rating-wrapper").show();

            } else if (lets_do_this == "rate") {

                $(".queue h2").html("Rate This Story");

                $(".queue the-title").show();

                $("#queue_rating").addClass("star_wrap");

                $(".queue .star_wrap .star").click(function(data) {

                    vote(parseInt($(this).attr("data-value")), story_db);

                    get_queue(true);

                });

                $(".queue rating-wrapper").show();

            } else if (lets_do_this == "write") {


                stop_story = db.collection("Stories").doc(story_id).onSnapshot((doc) => {

                    if (!doc.exists)
                        return;

                    let the_data = doc.data();

                    if (the_data.story.length !== story_db.story.length || the_data.date_finished !== story_db.date_finished) {

                        console.log("story refresh");
                        counter.queue--;
                        get_queue(true);

                    } else
                        console.log("story updated, no reresh");

                });




                $(".queue approval-wrapper").css("display", "inline");

                if (story_db.pending_word.word.trim() == "[END]") {
                    $("select.end").show();
                    $(".queue pending-word").hide();
                    $(".queue h2").html("Is this story finished?");



                } else {

                    $(".queue h2").html("Approve Or Reject The The Last Word");

                    let pendingword = story_db.pending_word.word;
                    if (punc.indexOf(pendingword.substring(0, 1)) === -1)
                        pendingword = (story_db.pending_word.punctuation || "") + "&nbsp;" + pendingword.trim();
                    $(".queue pending-word").html(pendingword);
                    $(".queue pending-word").show();

                }
            }

            // shit's loaded now, it was all jquery no promise shere, accept contributors which can wait
            div_loading(true, "queue");


        } else {

            console.log("Error, story doc was not found.");
            $("section .queue").hide();
            queue_loaded = false;
            $("main .error").show();
            $("main").show();
            get_queue(true);

        }

        // ENd of get story promise
    });

    // End of load story function
}

// USER ACTION FUNCTIONS

function approve() {

    $(".queue button").attr("disabled", true);

    if (story_db.pending_word.upvotes == 0) {

        db.collection("Users").doc(global_user.uid).collection("Stories").doc(story_db.id).set({

                "yes_vote": true

            }).then(() => {
                console.log("Yes vote accepted.");
                $.notify("Your vote has been counted!");
                return;

            })
            .catch(log_error);


        return get_queue(true);

    }



    if (story_db.pending_word.word.trim() == "[END]") {

        // Last person said we should end the story.

        $("main h2:visible")[0].scrollIntoView();
        //window.scrollTo(0, Math.abs(document.getElementsByTagName("nav")[0].getBoundingClientRect().top) + Math.abs(document.getElementsByTagName("nav")[0].getBoundingClientRect().bottom));

        $(".queue h2").html("Great! Suggest A Title And Rate");

        $(".queue suggest-title ul").html('<li><input type="radio" name=\"title_radio\" value="1" checked /><input type="text" id="submit_title"  maxlength="45" /></li>');

        $(".queue suggest-title").show();

        $("#queue_rating").addClass("star_wrap");
        $(".queue approval-wrapper").hide();
        $(".queue rating-wrapper").show();

        $(".queue .star_wrap .star").click(function(data) {

            vote(parseInt($(this).attr("data-value")), story_db);


        });

        if (gtag || false) {
            gtag('event', "[END VOTE]", {
                'event_category': 'Word Submit'
            });
        }

        db.collection("Users").doc(global_user.uid).collection("Stories").doc(story_db.id).set({

                "yes_vote": true

            }).then(() => {
                console.log("Yes vote accepted.");
                $.notify("You finished a story!");
                return;
            })
            .catch(log_error);

        $(".queue button").attr("disabled", false);
        stop_story();
        return;

    }

    // If it's time to write (not finished, adequate votes) pending word is approved

    // Append new word and contributor 

    $(".queue the-story").append((story_db.pending_word.punctuation || "") + " " + story_db.pending_word.word);

    db.collection("Users").doc(story_db.pending_word.contributor).get().then((un) => {

        if (un.exists) {

            let cont = un.data();

            $(".queue contributors-wrapper ul").append('<li onclick="get_user(\'' + story_db.pending_word.contributor + '\')">' + cont.displayName + '</li>');

        } else
            console.error("Get newest contributor user name failed.");
    });


    // Money!
    write_next();

}


function write_next() {

    $(".queue button").attr("disabled", false);

    $("main h2:visible")[0].scrollIntoView();
    // window.scrollTo(0, Math.abs(document.getElementsByTagName("nav")[0].getBoundingClientRect().top) + Math.abs(document.getElementsByTagName("nav")[0].getBoundingClientRect().bottom));

    $(".queue h2").html("Write The Next Word");

    if (story_db.story.length > minimum_story_length) {
        $(".flag").show();
        $(".queue h2").html("Write The Next Word, Or Mark The Story Finished");
    }

    $('approval-wrapper').hide();
    // these next 2  appears conditionally
    $(".queue new-word .approve").hide();
    $("select.regular").show();

    $('new-word').css("display", "inline");
    document.getElementById("f1").focus();
}

function deny() {

    $(".queue button").attr("disabled", true);

    if (story_db.pending_word.word.trim() == "[END]") {
        $(".flag").hide();

        write_next();

    } else {

        div_loading(false, "queue");
        if (gtag || false) {
            gtag('event', "[NO VOTE]", {
                'event_category': 'Word Submit'
            });
        }
        db.collection("Users").doc(global_user.uid).collection("Stories").doc(story_db.id).set({

                "no_vote": true

            }, { merge: true }).then(() => {
                console.log("No vote counted.");
                $.notify("Your vote has been counted!");
                return;



            })
            .catch(log_error);


        get_queue(true);

    }
}

$(document).on('keypress', function(e) {


    if (e.which == 13) {
        e.preventDefault();

        if ($("change-email:visible").length === 1)
            change_email();
        else if ($("change-name:visible").length === 1)
            change_name();
        else if ($("change-password:visible").length === 1)
            change_password();
        else if ($("new-word input:visible").length === 1)
            submit();
    }
});

function dictionary_check(passed, sanitized) {

    if (!passed) {
        if (global_user.score > 1000) {
            $(".queue .error-code").html("That word wasn't found in our dictionary. Are you sure you want to submit it?");
            are_you_sure = sanitized;
            last_entry = "";
        } else
            $(".queue .error-code").html("Sorry, that word wasn't found in our dictionary. You need a score of 1,000 to submit non-dictionary words.");
        $(".queue loader-icon").hide();
        $(".queue .error-code").show();

        if (gtag || false) {

            gtag('event', sanitized, {
                'event_category': 'Dictionary Check Failed'
            });


        }

        $(".queue button").attr("disabled", false);
        return;
    } else {

        are_you_sure = "";

        div_loading(false, "queue");

        if (story_db.id || false) {

            submit_word(sanitized);

        } else {
            // If creating a new story
            db.collection("Users").doc(global_user.uid).collection("Stories").add({

                    "new_word": sanitized

                }).then(() => {
                    console.log("New word posted to new story.");
                    $.notify("Your story has entered the queue!");
                    return;

                })
                .catch(log_error);

            $(".queue loader-icon").hide();
            get_queue(true);


        }



    }

}

function submit(flag_end) {

    if (flag_end && !flag_end_confirmation) {
        $(".queue h2").html("Are you sure this story is finished?");
        flag_end_confirmation = true;
        return;
    }

    flag_end_confirmation = false;

    $(".queue button").attr("disabled", true);

    if (flag_end) {

        submit_word("[END]");
        div_loading(false, "queue");

        return;

    }

    let sanitized = sanitize($("new-word input").val());

    if (sanitized == "") {
        $(".queue button").attr("disabled", false);
        return;
    } else if (sanitized == last_entry) {
        $(".queue .error-code").html("You already submitted that word.");
        $(".queue .error-code").show();
        $(".queue button").attr("disabled", false);
        return;
    }

    $(".queue .error-code").hide();
    $(".queue loader-icon").show();

    last_entry = sanitized;

    if (are_you_sure == "" || are_you_sure !== sanitized) {

        $.get({
            url: "//us-central1-milli0ns0fm0nkeys.cloudfunctions.net/addWord",
            data: {
                word: sanitized
            },
            type: 'GET',
            dataType: 'json'
        }).done((data) => {

            console.log(data);
            dictionary_check(data, sanitized);

        }).fail((error) => {

            $(".queue .error-code").html("An error occured submitting that word.");
            $(".queue .error-code").show();
            $(".queue button").attr("disabled", false);
            return;
        });

    } else {
        dictionary_check(true, sanitized);
    }



}

function submit_word(this_word) {

    if (gtag || false) {
        gtag('event', this_word, {
            'event_category': 'Word Submit'
        });
    }
    db.collection("Users").doc(global_user.uid).collection("Stories").doc(story_db.id).set({

            "new_word": this_word,
            "punctuation": $("select.regular").val()

        }, { merge: true }).then(() => {
            console.log("New word accepted.");
            if (this_word === "[END]")
                $.notify("Your ending has been queued for approval!");
            else
                $.notify("Your word has been queued for approval!");

            return;

        })
        .catch(log_error);

    $(".queue loader-icon").hide();
    get_queue(true);


}

function vote(num_stars, which_db) {

    console.log(num_stars, which_db);

    which_story = which_db.id;

    if (user_stories[which_story] || false)
        user_stories[which_story].rating = num_stars;
    else
        user_stories[which_story] = {
            "rating": num_stars
        };



    if (num_stars >= 1)
        $("." + which_story + " .star").removeClass("gold");

    $("." + which_story + " .star").addClass("off");

    if (num_stars >= 1)
        $("." + which_story + " .star_1").addClass("gold");
    if (num_stars >= 2)
        $("." + which_story + " .star_2").addClass("gold");
    if (num_stars >= 3)
        $("." + which_story + " .star_3").addClass("gold");
    if (num_stars >= 4)
        $("." + which_story + " .star_4").addClass("gold");
    if (num_stars == 5)
        $("." + which_story + " .star_5").addClass("gold");


    let new_votes = which_db.rating.votes + 1;
    let new_score = (which_db.rating.votes * which_db.rating.score + num_stars) / new_votes;

    console.log(new_votes, new_score);

    $(".votes_cast").html("(" + new_score.toFixed(2) + " rating - " + new_votes + ((new_votes !== 1) ? " votes)" : " vote)"));

    if (gtag || false) {
        gtag('event', JSON.stringify(num_stars), {
            'event_category': 'Rating Submit'
        });
    }

    db.collection("Users").doc(global_user.uid).collection("Stories").doc(which_db.id).set({

            "rating": num_stars

        }, { merge: true }).then(() => {
            console.log("Ratigng submitted!");
            $.notify("Rating accepted!");

            return;
        })
        .catch(log_error);


}

function submit_approved_title(vote, title_to_submit) {

    if (gtag || false) {
        gtag('event', vote + " " + (title_to_submit || ""), {
            'event_category': 'Title'
        });
    }

    db.collection("Users").doc(global_user.uid).collection("Stories").doc(story_db.id).set({

        "title_vote": vote,
        "submit_title": (title_to_submit || "")

    }, { merge: true }).then(() => {
        $.notify("Title vote submitted!");
        return;
    }).catch(log_error);





    get_queue(true);

};

function vote_on_title() {

    $(".queue button").attr("disabled", true);

    let vote = parseInt($('input[name=title_radio]:checked').val() || 0);

    let submit_title = "";

    // if none is checked val will be 0
    if (!vote) {
        $(".queue button").attr("disabled", false);
        return;
    }

    // if submitting a new title
    if (vote === 1) {

        submit_title = $('#submit_title').val().trim();

        // if they checked it but wrote nothing(orjust spaces)
        if (submit_title == "") {
            $(".queue button").attr("disabled", false);
            return;

        }

        $.get({
            url: "//us-central1-milli0ns0fm0nkeys.cloudfunctions.net/addTitle",
            data: {
                word: submit_title
            },
            type: 'GET',
            dataType: 'json'
        }).done((data) => {

            console.log(data);
            submit_approved_title(vote, submit_title);

        }).fail((error) => {
            console.log(error);
            $(".queue .error-code").html("An error occured submitting that title.");
            $(".queue .error-code").show();
            $(".queue button").attr("disabled", false);
            return;
        });
    } else
        submit_approved_title(vote);
}


function short_title(story_string, page_title) {

    if (page_title)
        return page_title;

    story_string = story_string.trim();

    if (story_string.length > max_title_length)
        story_string = story_string.substring(0, story_string.lastIndexOf(" ", max_title_length - 3));

    if (punc.indexOf(story_string.substring(story_string.length - 1)) > -1)
        story_string = story_string.substring(0, story_string.length - 1);

    story_string += "...";

    return story_string;

}

// PAGE LOADING FUNCTIONS

function get_story(story_id) {

    div_loading(false, "story");

    $(".story the-title").hide();

    db.collection("Stories").doc(story_id).get().then((doc) => {

        if (doc.exists) {

            read_db = doc.data();
            read_db.id = story_id;

            // Load Story Basics 
            let story_string = "";

            read_db.story.forEach((value) => {
                story_string = story_string + value;
            });
            $(".story the-story").html(story_string);


            // Load Title

            if (read_db.title) {

                $(".story the-title").html(read_db.title);
                $(".story the-title").show();
            }


            // + "&title=" + uri
            update_history("story&id=" + read_db.id, 'Story: "' + short_title(story_string, read_db.title) + '"', read_db.last_update);


            // Load Rating
            $(".story rating-wrapper .votes_cast").html("(" + read_db.rating.score.toFixed(2) + " rating - " + read_db.rating.votes + ((read_db.rating.votes !== 1) ? " votes)" : " vote)"));
            $("#story_rating").removeClass();

            let user_rating = null;


            if (user_stories[read_db.id] || false)
                user_rating = (user_stories[read_db.id].rating || null);

            $("#story_rating").html(star(read_db.rating.score, user_rating));

            if ((global_user.uid || false) && (read_db.date_finished > 0)) {

                $("#story_rating").addClass("star_wrap " + read_db.id);

                $(".story .star_wrap .star").click(function(data) {
                    vote(parseInt($(this).attr("data-value")), read_db);
                });

            }

            // Load contributors 

            $(".story contributors-wrapper ul").html("");
            read_db.contributors.forEach((one) => {

                db.collection("Users").doc(one).get().then((un) => {

                    if (un.exists) {

                        let cont = un.data();

                        $(".story contributors-wrapper ul").append('<li onclick="get_user(\'' + one + '\')">' + cont.displayName + '</li>');
                    } else
                        console.log("Get user name failed.");
                });
            });

            // Doen
            div_loading(true, "story");

        } else {
            console.log("No story doc found.");
        }
    });
}


function get_user(diff_user) {


    div_loading(false, "user");

    $(".your_stories, .started_stories, .favorite_stories, user-settings, .recent_words, .messages").hide();
    $("recent-words").html("");

    if (diff_user && diff_user !== global_user.uid) {

        db.collection("Users").doc(diff_user).get().then((doc) => {

            if (doc.exists) {

                let local_user = doc.data();
                local_user.uid = doc.id;

                update_history("profile&id=" + local_user.uid, "Profile: " + local_user.displayName, local_user.last_login);

                process_user(local_user);

            } else
                console.error("User doc doesn't exist.");

        });

    } else {

        // add settings  if its your profile we're loading

        if (user_has_messages)
            $(".messages").show();
        else
            $(".messages").hide();

        $("user-settings").show();
        $(".email").html(global_user.email);

        update_history("profile", "Your Profile");

        process_user(global_user);

    }

}

function process_user(local_user) {

    local_user.photoURL = local_user.photoURL || "https://basher.app/images/user.png";

    $("#user_h2").html("<a href=\"https://basher.app/?show=profile&id=" + local_user.uid + "\"><span " + ((local_user == global_user) ? 'class="user_id">' : ">") + local_user.displayName + "</span> <span " + ((local_user == global_user) ? 'class="score" ' : 'class="other_score" ') + ">" + numberWithCommas(local_user.score) + "</span></a>");

    $("#change_photo").prop("disabled", true);
    $("user-photo").removeClass("self");

    if (local_user.recent_words.length > 0) {

        $("recent-words").html('<table><tr style="display:none"><td></td></tr></table>');

        for (let i = 0; i < local_user.recent_words.length && i < number_of_recent_words; i++) {

            $("recent-words table").append("<tr><td>" + local_user.recent_words[local_user.recent_words.length - 1 - i] + "</td></tr>");


        }


        $(".user .recent_words").show();

    }

    if (local_user.photoURL == global_user.photoURL) {
        $("user-photo").addClass("self");
        $("#change_photo").prop("disabled", false);
        $("user-photo").html('<img src="' + my_photo_url + '">');

    } else if (local_user.photoURL.substring(0, 5) === "https")
        $("user-photo").html('<img src="' + local_user.photoURL + '">');

    else {

        let starsRef = storage.ref().child("Custom_Photos/" + local_user.photoURL);

        starsRef.getDownloadURL().then((url) => {

            $("user-photo").html('<img src="' + url + '">');

        }).catch(log_error);

    }

    get_stories("your", local_user);

    get_stories("favorite", local_user);

    $(".started_stories h2").html("Started By " + ((local_user == global_user) ? "You" : local_user.displayName) + "</span>");
    $(".your_stories h2").html("Co-Written By " + ((local_user == global_user) ? "You" : local_user.displayName) + "</span>");
    $(".favorite_stories h2").html("Loved By " + ((local_user == global_user) ? "You" : local_user.displayName) + "</span>");


    $(".rankings span").removeClass("earned");

    if (local_user.score >= 1000)
        $(".score_1000").addClass("earned");
    else if (local_user.score >= 500)
        $(".score_500").addClass("earned");
    else if (local_user.score >= 100)
        $(".score_100").addClass("earned");
    else
        $(".score_0").addClass("earned");
}

function get_stories(which_type, local_user) {


    if (which_type == "your") {

        // console.log("loading co-written stories");

        db.collection("Stories").where("contributors", "array-contains", local_user.uid).orderBy('rating', 'desc').limit(limit_count).get().then((snapshot) => {

            process_snapshot(snapshot, which_type);
            process_snapshot(snapshot, "started", local_user.uid);

            div_loading(true, "user");


        }).catch(log_error);
    } else if (which_type == "favorite") {

        //  console.log("loading favorited stories");

        db.collection("Stories").where("favorites", "array-contains", local_user.uid).orderBy('date_finished', 'desc').limit(limit_count).get().then((snapshot) => {

            process_snapshot(snapshot, which_type);

            div_loading(true, "user");


        }).catch(log_error);
    } else if (which_type == "recent") {

        db.collection("Stories").orderBy('date_finished', 'desc').limit(limit_count).get().then((snapshot) => {

            //   console.log("loading recently finished stories");

            process_snapshot(snapshot, which_type);

            div_loading(true, "recent_stories");


        }).catch(log_error);

    } else if (which_type == "top") {

        db.collection("Stories").orderBy('rating.score', 'desc').limit(limit_count).get().then((snapshot) => {

            //   console.log("loading highest rated stories");

            process_snapshot(snapshot, which_type);
            div_loading(true, "top_stories");


        }).catch(log_error);

    }

}




function process_snapshot(snapshot, which_type, local_uid) {

    let stories = [];

    snapshot.forEach((doc) => {
        if (doc.exists) {
            let data = doc.data();
            data.id = doc.id;
            stories.push(data);

        } else {
            console.log("This story in the list doesn't exist.", doc);
        }
    });

    // $("." + which_type + "_stories table").html("<tr><th>Story</th><th>Rating</th><th class=\"date\">Completed</th></tr>");

    // Your stories also includes a "started" stories table, which is your stories but where your word is first

    let which_page = "";
    let page_counter = 0;
    let at_least_one = 0;
    global_tables[which_type] = {};
    global_tables[which_type]["page1"] = "<tr><th>Story</th><th>Rating</th><th class=\"date\">Completed</th></tr>";

    if (which_type == "started" || which_type == "top") {
        at_least_one = 1;
        which_page = "page1";
    }

    stories.forEach((the_story, index) => {

        if (index % stories_per_page === 0 && (which_type !== "started" && which_type !== "top")) {
            page_counter++;
            which_page = "page" + page_counter;

        } else if ((which_type == "started" || which_type == "top") && at_least_one % stories_per_page === 0) {
            page_counter++;
            which_page = "page" + page_counter;

        }


        let story_string = "";

        the_story.story.forEach((value) => {
            story_string += value;
        });

        let the_date = in_progress_string;

        if (the_story.date_finished) {
            let new_date = new Date(parseInt(the_story.date_finished));
            the_date = (new_date.getMonth() + 1) + '/' + new_date.getDate() + '/' + new_date.getFullYear();
        }

        let title = short_title(story_string, the_story.title);

        let user_rating = null;

        if (user_stories || false) {

            if (user_stories[the_story.id || false])
                user_rating = (user_stories[the_story.id].rating || null);

        }

        // if the first word was written by this user, flip it to started stories (not in both)

        if ((which_type !== "started" && which_type !== "top") || (which_type == "top" && the_story.rating.votes > tweet_vote_threshold) || (which_type == "started" && the_story.contributors[0] == local_uid)) {
            at_least_one++;

            // $("." + which_type + "_stories table").append("<tr class=\"" + the_story.id + "\"><td class=\"title\" onclick=\"get_story('" + the_story.id + "')\">" + title + "</td><td class=\"rating\">" + star(the_story.rating.score, user_rating) + "</td><td class=\"date\">" + the_date + "</td></tr>");
            global_tables[which_type][which_page] += "<tr class=\"" + the_story.id + "\"><td class=\"title\" onclick=\"get_story('" + the_story.id + "')\">" + title + "</td><td class=\"rating\">" + star(the_story.rating.score, user_rating) + "</td><td class=\"date\">" + the_date + "</td></tr>";

        }


    });

    if ((which_type !== "started" && which_type !== "top" && at_least_one) || ((which_type == "top" || which_type == "started") && at_least_one > 1)) {

        $('.' + which_type + '_stories table').html(global_tables[which_type]["page1"]);

        if (global_tables[which_type]["page2"] || false)
            $('.' + which_type + '_stories table').append('<tr class="more"><td colspan=3 alt="Load More" onclick="load_more(\'' + which_type + '\',2)">...</td></tr>');


        $('.' + which_type + '_stories').show();
    }


}

function load_more(which_type, which_page) {

    $('.' + which_type + '_stories table tr:last').remove();

    $('.' + which_type + '_stories table').append(global_tables[which_type]["page" + which_page]);

    if (global_tables[which_type]["page" + (which_page + 1)] || false)
        $('.' + which_type + '_stories table').append('<tr class="more"><td colspan=3 onclick="load_more(\'' + which_type + '\',' + (which_page + 1) + ')">...</td></tr>');

}


function get_top_stories() {

    update_history("top", "Top Stories");

    if (top_stories_loaded) {

        div_loading(true, "top_stories", true);

        return;

    }

    div_loading(false, "top_stories");

    top_stories_loaded = true;

    get_stories("top", global_user);

}


function get_recent_stories() {

    update_history("recent", "Just Finished");

    if (recent_stories_loaded) {

        div_loading(true, "recent_stories", true);

        return;

    }

    div_loading(false, "recent_stories");

    recent_stories_loaded = true;

    get_stories("recent", global_user);

}