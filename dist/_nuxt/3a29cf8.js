(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{344:function(t,n,e){var content=e(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(150).default)("ce3e630e",content,!0,{sourceMap:!1})},349:function(t,n,e){"use strict";e.r(n);var l=e(8),o=(e(49),{methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return n.stop()}}),n)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(e(359),e(57)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"nav-flex"},[n("nuxt-link",{staticClass:"brand w-nav-brand home-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[n("img",{staticClass:"brand-img",attrs:{src:"/Cryptobit-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),n("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("Blog")]),t._v(" "),t.isAuthenticated?n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")]),t._v(" "),t.isAuthenticated?n("span",{staticClass:"nav-link btn w-nav-link",on:{click:t.logout}},[t._v("Logout")]):n("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(1)],1)])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"top-header"},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"top-header-flex"},[n("div",{staticClass:"top-header-left"},[n("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6458514928a7f3d8471dae98_facebook-f.svg",loading:"lazy",alt:""}})]),n("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585149fd2b440b468b08d7_twitter.svg",loading:"lazy",alt:""}})]),n("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851498ef559cb9e9fef9b_google-plus-g.svg",loading:"lazy",alt:""}})]),n("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585149300ca47d15112434_linkedin-in.svg",loading:"lazy",alt:""}})])]),t._v(" "),n("div",{staticClass:"top-header-right"},[n("div",{staticClass:"each-top-right"},[n("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851497a0ca0e8ebeabcdb_phone-alt.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("+1 (234) 5888 8773")])]),t._v(" "),n("div",{staticClass:"each-top-right"},[n("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("contact@gmail.com")])]),t._v(" "),n("div",{staticClass:"each-top-right"},[n("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Mon - Sun : 8:0)- 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);n.default=component.exports},359:function(t,n,e){"use strict";e(344)},360:function(t,n,e){var l=e(149)((function(i){return i[1]}));l.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}.top-menu.w-nav-button{width:60px}.home-logo{width:150px}",""]),l.locals={},t.exports=l}}]);