(() => {
  "use strict";
  function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
  }
  function e(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(t) {
    return (
      (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      n(t)
    );
  }
  function i(t, e) {
    for (var i = 0; i < e.length; i++) {
      var o = e[i];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(
          t,
          ((r = o.key),
          (a = void 0),
          (a = (function (t, e) {
            if ("object" !== n(t) || null === t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var o = i.call(t, "string");
              if ("object" !== n(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(r)),
          "symbol" === n(a) ? a : String(a)),
          o
        );
    }
    var r, a;
  }
  function o(t, e, n) {
    return (
      e && i(t.prototype, e),
      n && i(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  var r = (function () {
      function n(t) {
        e(this, n),
          (this.sections = document.querySelectorAll(t)),
          (this.windowHalf = 0.5 * window.innerHeight),
          (this.scroll = this.scroll.bind(this));
      }
      return (
        o(n, [
          {
            key: "getDistance",
            value: function () {
              var e,
                n = this;
              this.distance = ((e = this.sections),
              (function (e) {
                if (Array.isArray(e)) return t(e);
              })(e) ||
                (function (t) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != t[Symbol.iterator]) ||
                    null != t["@@iterator"]
                  )
                    return Array.from(t);
                })(e) ||
                (function (e, n) {
                  if (e) {
                    if ("string" == typeof e) return t(e, n);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === i &&
                        e.constructor &&
                        (i = e.constructor.name),
                      "Map" === i || "Set" === i
                        ? Array.from(e)
                        : "Arguments" === i ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                        ? t(e, n)
                        : void 0
                    );
                  }
                })(e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()).map(function (t) {
                return (
                  (n.sectionTop = t.offsetTop),
                  {
                    element: t,
                    offset: Math.floor(n.sectionTop - n.windowHalf),
                  }
                );
              });
            },
          },
          {
            key: "scroll",
            value: function () {
              this.distance.forEach(function (t) {
                window.scrollY > t.offset
                  ? t.element.classList.add("ativo")
                  : t.element.classList.contains("ativo") &&
                    t.element.classList.remove("ativo");
              });
            },
          },
          {
            key: "init",
            value: function () {
              this.getDistance(),
                this.scroll(),
                window.addEventListener("scroll", this.scroll);
            },
          },
        ]),
        n
      );
    })(),
    a = (function () {
      function t(n, i) {
        e(this, t),
          (this.container = document.querySelector(n)),
          (this.item = document.querySelectorAll(i));
      }
      return (
        o(t, [
          {
            key: "move",
            value: function (t) {
              t.preventDefault(), console.log("oi");
            },
          },
          {
            key: "init",
            value: function () {
              var t = this;
              this.initBind(),
                this.item.forEach(function (e) {
                  e.addEventListener("", t.move);
                });
            },
          },
          {
            key: "initBind",
            value: function () {
              (this.init = this.init.bind(this)),
                (this.move = this.move.bind(this));
            },
          },
        ]),
        t
      );
    })();
  new r('[data-anime="scroll"]').init(),
    new a("[data-slide='slide']", '[data-anima="slide"]').init();
})();
