(window.webpackJsonp=window.webpackJsonp||[]).push([[53,23,24],{303:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("472ec456",content,!0,{sourceMap:!1})},304:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("1b865063",content,!0,{sourceMap:!1})},309:function(t,e,n){"use strict";n.r(e);var l=n(8),o=(n(48),{methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(319),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"nav-flex"},[e("nuxt-link",{staticClass:"brand w-nav-brand home-logo",attrs:{to:"/"}},[e("img",{staticClass:"brand-img",attrs:{src:"/Cryptobit-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/"}},[t._v("Home")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/about"}},[t._v("About")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/plan"}},[t._v("Plan")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/faq"}},[t._v("FAQ")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/news"}},[t._v("Blog")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/signup"}},[t._v("Sign up")]),e("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t._m(1)],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-header"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"top-header-flex"},[e("div",{staticClass:"top-header-left"},[e("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6458514928a7f3d8471dae98_facebook-f.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585149fd2b440b468b08d7_twitter.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851498ef559cb9e9fef9b_google-plus-g.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585149300ca47d15112434_linkedin-in.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"top-header-right"},[e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851497a0ca0e8ebeabcdb_phone-alt.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("+1 (234) 5888 8773")])]),t._v(" "),e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("contact@gmail.com")])]),t._v(" "),e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Mon - Sun : 8:0)- 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var l=n(8),o=(n(48),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.setFileURL()}}),c=(n(317),n(56)),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer1",attrs:{id:"footer"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-25"},[e("div",{staticClass:"div-block-20"},[e("div",{staticClass:"div-block-19"},[e("h1",{staticClass:"heading-10"},[t._v("FOOTER MENU")]),t._v(" "),e("div",{staticClass:"div-block-21"},[e("a",{staticClass:"link-block-3 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-11"},[t._v("About Us")]),t._v(" "),e("h1",{staticClass:"heading-11"},[t._v("Services")]),t._v(" "),e("h1",{staticClass:"heading-11"},[t._v("Pages")]),t._v(" "),e("h1",{staticClass:"heading-11"},[t._v("Shop")])]),e("a",{staticClass:"link-block-3 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-11"},[t._v("Login")]),t._v(" "),e("h1",{staticClass:"heading-11"},[t._v("New Account")]),t._v(" "),e("h1",{staticClass:"heading-11"},[t._v("Contact")]),t._v(" "),e("h1",{staticClass:"heading-11"},[t._v("Blog")])])])]),t._v(" "),e("div",{staticClass:"div-block-22"},[e("h1",{staticClass:"heading-12"},[t._v("NEWSLETTER SIGNUP")]),t._v(" "),e("h1",{staticClass:"heading-13"},[t._v("\n            By subscribing to our mailing list you will always be update with\n            the latest news from us.\n          ")]),t._v(" "),e("div",{staticClass:"form-block w-form"},[e("form",{staticClass:"form",attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",id:"email",required:""}}),e("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Sign Up","data-wait":"Please wait..."}})]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("Oops! Something went wrong while submitting the form.")])])]),t._v(" "),e("h1",{staticClass:"heading-14"},[t._v("We don't spam.")])]),t._v(" "),e("div",{staticClass:"div-block-23"},[e("h1",{staticClass:"heading-15"},[t._v("GET IN TOUCH")]),t._v(" "),e("div",{staticClass:"div-block-24"},[e("h1",{staticClass:"heading-16"},[t._v("\n              Phone "),e("span",{staticClass:"text-span-3"},[t._v(":")])]),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v("+1 (234) 567-890")])]),t._v(" "),e("div",{staticClass:"div-block-24 b"},[e("h1",{staticClass:"heading-16"},[t._v("\n              Email "),e("span",{staticClass:"text-span-3"},[t._v(":")])]),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v("contact@yourmail.com")])]),t._v(" "),e("h1",{staticClass:"heading-18"},[t._v("228 Park Ave SNew York, NY 10003-1502US")]),t._v(" "),e("a",{staticClass:"link-block-4 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Open in Google Map")])])])])])]),t._v(" "),e("div",{staticClass:"footer-line"}),t._v(" "),e("h1",{staticClass:"heading-20"},[t._v("© 2018 cryptobit joomla template")])])}],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n(303)},318:function(t,e,n){var l=n(142)((function(i){return i[1]}));l.push([t.i,".custom-container.footer{background:#00040f}",""]),l.locals={},t.exports=l},319:function(t,e,n){"use strict";n(304)},320:function(t,e,n){var l=n(142)((function(i){return i[1]}));l.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}.top-menu.w-nav-button{width:60px}.home-logo{width:150px}",""]),l.locals={},t.exports=l},438:function(t,e,n){"use strict";n.r(e);var l=n(311),o={methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript()},components:{HomeNavigation:n(309).default,HomeFooter:l.default}},c=n(56),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"forgotten-password"},[e("home-navigation"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-us-section faq"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"hero-section"},[e("h1",{staticClass:"heading-21 faq"},[t._v("Faq")]),t._v(" "),e("h1",{staticClass:"heading-22 faq"},[t._v("ANSWERS")])])]),t._v(" "),e("div",{staticClass:"hero-section-cover"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-us-section2 login"},[e("div",{staticClass:"custom-container"},[e("div",[e("div",{staticClass:"div-block-27 faq"},[e("div",{staticClass:"div-block-28"},[e("img",{staticClass:"image-4",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0e746818cacc5ca3e96_home-icon-silhouette-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-23"},[t._v("Home")]),t._v(" "),e("img",{staticClass:"image-5",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0eddea363a6792c4285_left-arrow-next-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-23"},[t._v("Page")]),t._v(" "),e("img",{staticClass:"image-5",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0eddea363a6792c4285_left-arrow-next-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-24"},[t._v("RECOVER YOUR ACCOUNT")])])])]),t._v(" "),e("div",{staticClass:"div-block-29"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-section3"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-48"},[e("div",{staticClass:"form-block-3 w-form"},[e("form",{staticClass:"form-3",attrs:{id:"email-form-3",name:"email-form-3","data-name":"Email Form 3",method:"get"}},[e("div",[e("h1",{staticClass:"heading-37"},[t._v("\n                If you have an account, enter your email to recorver it.\n              ")])]),t._v(" "),e("input",{staticClass:"text-field-4 w-input",attrs:{type:"text",maxlength:"256",name:"name-3","data-name":"Name 3",placeholder:"Email",id:"name-3"}}),t._v(" "),e("div",{staticClass:"div-block-47"},[e("div",{staticClass:"div-block-46"}),t._v(" "),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-35"},[t._v("Remember me")])])]),t._v(" "),e("input",{staticClass:"submit-button-3 w-button",attrs:{type:"submit",value:"Login","data-wait":"Please wait..."}}),e("a",{staticClass:"link-block-8 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-36 forgotten-password"},[e("strong",[t._v("Already have an account, Login.")])])]),e("a",{staticClass:"link-block-8 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-36 forgotten-password"},[t._v("\n                If you don't have an account, create an account.\n              ")])])]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeNavigation:n(309).default,HomeFooter:n(311).default})}}]);