(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0], {
    42: function(e, a, t) {
      e.exports = t(67)
    },
    48: function(e, a, t) {},
    49: function(e, a, t) {},
    59: function(e, a, t) {},
    60: function(e, a, t) {},
    61: function(e, a, t) {},
    62: function(e, a, t) {},
    63: function(e, a, t) {},
    64: function(e, a, t) {},
    65: function(e, a, t) {},
    66: function(e, a, t) {},
    67: function(e, a, t) {
      "use strict";
      t.r(a);
      var l = t(0),
        n = t.n(l),
        r = t(11),
        c = t.n(r),
        m = (t(47), t(13)),
        u = t(6),
        i = t(17);
      t(48), t(49);
      var s = function(e) {
          return n.a.createElement("div", {
            className: "service-card text-black"
          }, n.a.createElement("h6", null, e.title), n.a.createElement("p", null, e.content))
        },
        o = [{
          id: 0,
          title: "Doctor",
          content: "Book an appointment"
        }, {
          id: 1,
          title: "Cosmetics",
          content: "Book an appointment"
        }, {
          id: 2,
          title: "Saloon",
          content: "Book an appointment"
        }],
        E = t(14),
        b = t(19);
      var d = function() {
          return n.a.createElement("header", null, n.a.createElement(E.a, null, n.a.createElement(m.a, null, n.a.createElement(u.a, null, n.a.createElement(b.a, null, n.a.createElement(b.b, {
            to: "/"
          }, n.a.createElement("h2", {
            className: "logo"
          }, "Logo")))), n.a.createElement(u.a, {
            className: "header-services",
            lg: 7
          }, n.a.createElement(m.a, null, n.a.createElement(b.a, null, o.map((function(e) {
            return n.a.createElement(b.b, {
              to: "/result",
              key: e.id
            }, n.a.createElement(u.a, null, n.a.createElement(s, {
              title: e.title,
              content: e.content
            })))
          }))))), n.a.createElement(u.a, null, n.a.createElement(i.a, {
            variant: "outline-dark float-right"
          }, "Sign In")))))
        },
        p = t(33),
        v = t(40);
      t(59);
      var h = function() {
        var e = Object(v.a)();
        return n.a.createElement(E.a, {
          className: "srch-container"
        }, n.a.createElement(m.a, null, n.a.createElement(u.a, {
          sm: 6,
          lg: 4
        }, n.a.createElement(p.a, {
          options: [{
            id: 0,
            label: "Sydney",
            value: 0
          }, {
            id: 1,
            label: "India",
            value: 1
          }, {
            id: 2,
            label: "America",
            value: 2
          }],
          components: e,
          placeholder: "Location . . ",
          className: "srch-box"
        })), n.a.createElement(u.a, {
          sm: 6,
          lg: 4
        }, n.a.createElement(p.a, {
          options: [{
            id: 0,
            label: "Doctor",
            value: 0
          }, {
            id: 1,
            label: "Cosmetics",
            value: 1
          }, {
            id: 2,
            label: "Saloon",
            value: 2
          }],
          components: e,
          placeholder: "Service . . ",
          isMulti: !0,
          className: "srch-box"
        })), n.a.createElement(u.a, {
          sm: 12,
          lg: 4
        }, n.a.createElement(b.a, null, n.a.createElement(b.b, {
          to: "/result"
        }, n.a.createElement(i.a, {
          className: "srch-btn mx-auto d-block"
        }, " Search "))))))
      };
      t(60), t(61);
      var g = function() {
        return n.a.createElement("div", {
          className: "card"
        }, n.a.createElement("img", {
          alt: "card-img",
          src: "https://picsum.photos/200/200"
        }), n.a.createElement("div", {
          className: "card-info"
        }, n.a.createElement("h4", null, "Title"), n.a.createElement("p", null, "Description"), n.a.createElement(i.a, null, "Read More")))
      };
      var N = function() {
        return n.a.createElement(E.a, {
          className: "banner-container"
        }, n.a.createElement("h1", {
          className: "banner-heading"
        }, "Introducing Remote Consultations.", n.a.createElement("br", null), "No need to leave your house.", n.a.createElement("br", null)), n.a.createElement(E.a, {
          className: "card-container"
        }, n.a.createElement(m.a, null, n.a.createElement(u.a, null, n.a.createElement(g, null)), n.a.createElement(u.a, null, n.a.createElement(g, null)))))
      };
      t(62);
      var f = function() {
          var e = (new Date).getFullYear();
          return n.a.createElement("footer", null, n.a.createElement(E.a, null, n.a.createElement(m.a, null, n.a.createElement(u.a, {
            className: "text-center my-4",
            sm: 12,
            lg: 4
          }, n.a.createElement("h3", null, "SiteName"), "Doctors ", n.a.createElement("br", null), " Cosmetics", n.a.createElement("br", null), " Saloons"), n.a.createElement(u.a, {
            className: "text-center my-4",
            sm: 12,
            lg: 2
          }, n.a.createElement("h5", null, "For Doctors"), n.a.createElement("br", null), "Apply Your Clinic", n.a.createElement("br", null), "Book Appointment"), n.a.createElement(u.a, {
            className: "text-center my-4",
            sm: 12,
            lg: 2
          }, n.a.createElement("h5", null, "For Cosmetics")), n.a.createElement(u.a, {
            className: "text-center my-4",
            sm: 12,
            lg: 2
          }, n.a.createElement("h5", null, "For Cosmetics")), n.a.createElement(u.a, {
            className: "text-center my-4",
            sm: 12,
            lg: 2
          }, n.a.createElement("h5", null, "FAQs"))), n.a.createElement("br", null), n.a.createElement(m.a, null, n.a.createElement(u.a, null, n.a.createElement("h1", {
            className: "logo text-center d-block mx-auto text-white"
          }, "Logo"), n.a.createElement("p", {
            className: "d-block mx-auto text-center"
          }, "Copyright \xa9 ", e, ", Designed by", " ", n.a.createElement("a", {
            href: "https://www.webquanta.in",
            target: "\r _blank",
            className: "wq"
          }, "WebQuanta"))))))
        },
        x = t(7),
        y = t(39),
        k = t(41);
      t(63);
      var w = function() {
        return n.a.createElement("div", {
          className: "result-card"
        }, n.a.createElement(m.a, null, n.a.createElement(u.a, {
          sm: 12,
          lg: 3
        }, n.a.createElement("img", {
          className: "result-card-img",
          alt: "img",
          src: "https://picsum.photos/200/200"
        })), n.a.createElement(u.a, {
          sm: 12,
          lg: 6
        }, n.a.createElement("h4", null, "Name"), n.a.createElement("p", null, "Category ", n.a.createElement("br", null), "Description ", n.a.createElement("br", null)), n.a.createElement("p", null, n.a.createElement("b", null, "Location"), " ", n.a.createElement("br", null), n.a.createElement("a", {
          href: "#"
        }, "Organization Name/Clinic Name/Parlour Name/Brand"), n.a.createElement("br", null), "Charges ", n.a.createElement("br", null), n.a.createElement("div", {
          className: "feedback"
        }, n.a.createElement(y.a, {
          variant: "success rating"
        }, "\ud83d\udc4d 96%"), n.a.createElement("span", {
          className: "reviews"
        }, "50 patient stories")))), n.a.createElement(u.a, {
          sm: 12,
          lg: 3
        }, n.a.createElement("p", {
          className: "mx-auto d-block text-center"
        }, n.a.createElement(k.a, null), '\xa0 Available on "Timing"'), n.a.createElement(i.a, {
          className: "result-btn",
          variant: "primary"
        }, "Book Appointment"), " ", n.a.createElement("br", null), n.a.createElement(i.a, {
          className: "result-btn",
          variant: "outline-primary"
        }, "Call"))))
      };
      var C = function() {
          return n.a.createElement("div", null, n.a.createElement(E.a, null, n.a.createElement(w, null), n.a.createElement(w, null), n.a.createElement(w, null), n.a.createElement(w, null), n.a.createElement(w, null)))
        },
        D = t(25);
      t(64);
      var S = function() {
        return n.a.createElement("div", null, n.a.createElement(D.a, {
          id: "reviews-section",
          interval: 1e3
        }, n.a.createElement(D.a.Item, null, n.a.createElement("div", {
          className: "slide-bg"
        }, n.a.createElement("h1", {
          className: " text-center text-black "
        }, "What are users have to say?"), n.a.createElement("br", null), n.a.createElement("p", {
          className: "text-center"
        }, "Nulla vitae elit libero, a pharetra augue mollis interduNulla vitae elit libero, a pharetra augue mollis interduNulla vitae elit libero, a pharetra augue mollis interdu"))), n.a.createElement(D.a.Item, null, n.a.createElement("div", {
          className: "slide-bg"
        }, n.a.createElement("h1", {
          className: " text-center text-black"
        }, "What are users have to say?"), n.a.createElement("br", null), n.a.createElement("p", {
          className: "text-center"
        }, "Nulla vitae elit libero, a pharetra augue mollis interduNulla vitae elit libero, a pharetra augue mollis interduNulla vitae elit libero, a pharetra augue mollis interdu"))), n.a.createElement(D.a.Item, null, n.a.createElement("div", {
          className: "slide-bg"
        }, n.a.createElement("h1", {
          className: " text-center text-black"
        }, "What are users have to say?"), n.a.createElement("br", null), n.a.createElement("p", {
          className: "text-center"
        }, "Nulla vitae elit libero, a pharetra augue mollis interduNulla vitae elit libero, a pharetra augue mollis interduNulla vitae elit libero, a pharetra augue mollis interdu")))))
      };
      t(65);
      var B = function() {
        return n.a.createElement("div", {
          className: "service-box"
        }, n.a.createElement("img", {
          className: "service-box-img",
          src: "https://picsum.photos/300/200",
          alt: "img"
        }), n.a.createElement("br", null), n.a.createElement("br", null), n.a.createElement("h3", null, "Service Heading"), n.a.createElement("p", null, "Description"), n.a.createElement("br", null), n.a.createElement(i.a, {
          variant: "outline-light"
        }, "Buy Now "))
      };
      t(66);
      var I = function() {
        return n.a.createElement("div", {
          id: "services-section"
        }, n.a.createElement(E.a, null, n.a.createElement("h2", null, "Heading"), n.a.createElement(m.a, null, n.a.createElement(u.a, {
          sm: 12,
          lg: 4
        }, n.a.createElement(B, null)), n.a.createElement(u.a, {
          sm: 12,
          lg: 4
        }, n.a.createElement(B, null)), n.a.createElement(u.a, {
          sm: 12,
          lg: 4
        }, n.a.createElement(B, null)))))
      };
      var A = function() {
        return n.a.createElement("div", null, n.a.createElement(d, null), n.a.createElement(h, null), n.a.createElement(b.a, null, n.a.createElement(x.a, {
          exact: !0,
          path: "/",
          component: N
        }), n.a.createElement(x.a, {
          exact: !0,
          path: "/Result",
          component: C
        })), n.a.createElement(I, null), n.a.createElement(S, null), n.a.createElement(f, null))
      };
      c.a.render(n.a.createElement(A, null), document.getElementById("root"))
    }
  },
  [
    [42, 1, 2]
  ]
]);
//# sourceMappingURL=main.4da9f63d.chunk.js.map
