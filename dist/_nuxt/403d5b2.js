(window.webpackJsonp=window.webpackJsonp||[]).push([[53,23,24],{303:function(t,n,e){var content=e(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(143).default)("472ec456",content,!0,{sourceMap:!1})},304:function(t,n,e){var content=e(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(143).default)("22942c42",content,!0,{sourceMap:!1})},309:function(t,n,e){"use strict";e.r(n);var l=e(8),o=(e(48),{methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return n.stop()}}),n)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(e(319),e(56)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"nav-flex"},[n("nuxt-link",{staticClass:"brand w-nav-brand",attrs:{to:"/"}},[n("img",{staticClass:"brand-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645855be5e11ed1dc93e1422_logo%20(1).png",loading:"lazy",alt:""}})]),t._v(" "),n("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/"}},[t._v("Home")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/about"}},[t._v("About")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/plan"}},[t._v("Plan")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/faq"}},[t._v("FAQ")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/news"}},[t._v("Blog")]),n("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/signup"}},[t._v("Sign up")]),n("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t._m(1)],1)])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"top-header"},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"top-header-flex"},[n("div",{staticClass:"top-header-left"},[n("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6458514928a7f3d8471dae98_facebook-f.svg",loading:"lazy",alt:""}})]),n("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585149fd2b440b468b08d7_twitter.svg",loading:"lazy",alt:""}})]),n("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851498ef559cb9e9fef9b_google-plus-g.svg",loading:"lazy",alt:""}})]),n("a",{staticClass:"top-header-links w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"top-links-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585149300ca47d15112434_linkedin-in.svg",loading:"lazy",alt:""}})])]),t._v(" "),n("div",{staticClass:"top-header-right"},[n("div",{staticClass:"each-top-right"},[n("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851497a0ca0e8ebeabcdb_phone-alt.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("+1 (234) 5888 8773")])]),t._v(" "),n("div",{staticClass:"each-top-right"},[n("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("contact@gmail.com")])]),t._v(" "),n("div",{staticClass:"each-top-right"},[n("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Mon - Sun : 8:0)- 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);n.default=component.exports},311:function(t,n,e){"use strict";e.r(n);var l=e(8),o=(e(48),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/company");case 3:return e=n.sent,n.next=6,e.data.data;case 6:t.company=n.sent,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.response.data);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}},mounted:function(){this.setFileURL()}}),c=(e(317),e(56)),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"footer1",attrs:{id:"footer"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"div-block-25"},[n("div",{staticClass:"div-block-20"},[n("div",{staticClass:"div-block-19"},[n("h1",{staticClass:"heading-10"},[t._v("FOOTER MENU")]),t._v(" "),n("div",{staticClass:"div-block-21"},[n("a",{staticClass:"link-block-3 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-11"},[t._v("About Us")]),t._v(" "),n("h1",{staticClass:"heading-11"},[t._v("Services")]),t._v(" "),n("h1",{staticClass:"heading-11"},[t._v("Pages")]),t._v(" "),n("h1",{staticClass:"heading-11"},[t._v("Shop")])]),n("a",{staticClass:"link-block-3 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-11"},[t._v("Login")]),t._v(" "),n("h1",{staticClass:"heading-11"},[t._v("New Account")]),t._v(" "),n("h1",{staticClass:"heading-11"},[t._v("Contact")]),t._v(" "),n("h1",{staticClass:"heading-11"},[t._v("Blog")])])])]),t._v(" "),n("div",{staticClass:"div-block-22"},[n("h1",{staticClass:"heading-12"},[t._v("NEWSLETTER SIGNUP")]),t._v(" "),n("h1",{staticClass:"heading-13"},[t._v("\n            By subscribing to our mailing list you will always be update with\n            the latest news from us.\n          ")]),t._v(" "),n("div",{staticClass:"form-block w-form"},[n("form",{staticClass:"form",attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[n("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",id:"email",required:""}}),n("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Sign Up","data-wait":"Please wait..."}})]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])]),t._v(" "),n("h1",{staticClass:"heading-14"},[t._v("We don't spam.")])]),t._v(" "),n("div",{staticClass:"div-block-23"},[n("h1",{staticClass:"heading-15"},[t._v("GET IN TOUCH")]),t._v(" "),n("div",{staticClass:"div-block-24"},[n("h1",{staticClass:"heading-16"},[t._v("\n              Phone "),n("span",{staticClass:"text-span-3"},[t._v(":")])]),t._v(" "),n("h1",{staticClass:"heading-17"},[t._v("+1 (234) 567-890")])]),t._v(" "),n("div",{staticClass:"div-block-24 b"},[n("h1",{staticClass:"heading-16"},[t._v("\n              Email "),n("span",{staticClass:"text-span-3"},[t._v(":")])]),t._v(" "),n("h1",{staticClass:"heading-17"},[t._v("contact@yourmail.com")])]),t._v(" "),n("h1",{staticClass:"heading-18"},[t._v("228 Park Ave SNew York, NY 10003-1502US")]),t._v(" "),n("a",{staticClass:"link-block-4 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-19"},[t._v("Open in Google Map")])])])])])]),t._v(" "),n("div",{staticClass:"footer-line"}),t._v(" "),n("h1",{staticClass:"heading-20"},[t._v("© 2018 cryptobit joomla template")])])}],!1,null,null,null);n.default=component.exports},317:function(t,n,e){"use strict";e(303)},318:function(t,n,e){var l=e(142)((function(i){return i[1]}));l.push([t.i,".custom-container.footer{background:#00040f}",""]),l.locals={},t.exports=l},319:function(t,n,e){"use strict";e(304)},320:function(t,n,e){var l=e(142)((function(i){return i[1]}));l.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}",""]),l.locals={},t.exports=l},438:function(t,n,e){"use strict";e.r(n);e(311);var l={methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var n=document.querySelector("#footer");n?n.appendChild(script):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript()},components:{HomeNavigation:e(309).default}},o=e(56),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"page forgotten"},[t._m(0),t._v(" "),n("div",{staticClass:"landing"},[n("home-navigation"),t._v(" "),t._m(1)],1),t._v(" "),t._m(2),t._v(" "),n("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"scroll-up"},[t("img",{staticClass:"scroll-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a57fff24418be062a10b3_line-angle.svg",loading:"lazy",alt:""}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"landing-flex full login"},[n("div",{staticClass:"cover"}),t._v(" "),n("div",{staticClass:"custom-container login"},[n("div",{staticClass:"signed"},[t._v("\n          Home / "),n("span",{staticClass:"text-span-6"},[t._v("Login")])]),t._v(" "),n("h1",{staticClass:"main-title login"},[t._v("Recover Password")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"custom-container"},[n("div",{staticClass:"blog-body full login"},[n("div",{staticClass:"form-signup w-form"},[n("form",{staticClass:"login-form",attrs:{id:"email-form-3",name:"email-form-3","data-name":"Email Form 3",method:"get"}},[n("h1",{staticClass:"main-title left"},[t._v("Forgotten Password")]),t._v(" "),n("div",{staticClass:"each full"},[n("label",{staticClass:"sign-label error",attrs:{for:"email-6"}},[t._v("Please enter a valid email address")]),n("input",{staticClass:"login-input pad w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"email",placeholder:"Enter Email",id:"email-6"}})]),t._v(" "),n("div",{staticClass:"sign-label response error"},[t._v("\n            Sorry, Passwords do not match!\n          ")]),t._v(" "),n("div",{staticClass:"btn-holder"},[n("input",{staticClass:"custom-btn top w-button",attrs:{type:"submit",value:"Loging","data-wait":"Please wait..."}}),t._v(" "),n("div",{staticClass:"custom-btn processing"},[n("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",[t._v("Processing")])])])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])]),t._v(" "),n("div",{staticClass:"radial-gradient"})])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{HomeNavigation:e(309).default,HomeFooter:e(311).default})}}]);