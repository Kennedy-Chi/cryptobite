(window.webpackJsonp=window.webpackJsonp||[]).push([[55,25,26],{344:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("35bc7e6b",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("0e6c3315",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),{methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(n(360),n(57)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"nav-flex"},[e("div",[e("nuxt-link",{staticClass:"brand w-nav-brand home-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"brand-img",attrs:{src:"/Cryptobit-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("Blog")]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")]),t._v(" "),t.isAuthenticated?e("span",{staticClass:"nav-link btn w-nav-link",on:{click:t.logout}},[t._v("Logout")]):e("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-header"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"top-header-flex"},[e("div",{staticClass:"top-header-right"},[e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("support@cryptobitlimited.com")])]),t._v(" "),e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Mon - Sun : 8:00 - 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),{data:function(){return{company:"",address:"",phone:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.address=n.data.data.media[0],t.phone=n.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadScript(),this.setFileURL(),this.getCompany()}}),l=(n(358),n(57)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer1",attrs:{id:"footer"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-25"},[e("div",{staticClass:"div-block-20"},[e("div",{staticClass:"div-block-19"},[e("h1",{staticClass:"heading-10"},[t._v("QUICK LINKS")]),t._v(" "),e("div",{staticClass:"div-block-21"},[e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/about"}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/plan"}},[t._v("Plans")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/news"}},[t._v("Blog")])],1),t._v(" "),e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/signup"}},[t._v("Sign up")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/terms-conditions"}},[t._v("Terms & Conditions")])],1)])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"div-block-23"},[e("h1",{staticClass:"heading-15"},[t._v("GET IN TOUCH")]),t._v(" "),t.phone?e("div",{staticClass:"div-block-24"},[t._m(1),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.phone.text))])]):t._e(),t._v(" "),e("div",{staticClass:"div-block-24 b"},[t._m(2),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.company.systemEmail))])]),t._v(" "),t.address?e("h1",{staticClass:"heading-18"},[t._v(t._s(t.address.text))]):t._e()])])])]),t._v(" "),e("div",{staticClass:"footer-line"}),t._v(" "),e("h1",{staticClass:"heading-20"},[t._v("\n    "+t._s(t.company.companyName)+" © "+t._s((new Date).getFullYear())+" Copyrights. All\n    rights reserved.\n  ")])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-22"},[e("h1",{staticClass:"heading-12"},[t._v("NEWSLETTER SIGNUP")]),t._v(" "),e("h1",{staticClass:"heading-13"},[t._v("\n            By subscribing to our mailing list you will always be update with\n            the latest news from us.\n          ")]),t._v(" "),e("div",{staticClass:"form-block w-form"},[e("form",{staticClass:"form",attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",id:"email",required:""}}),e("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Sign Up","data-wait":"Please wait..."}})])]),t._v(" "),e("h1",{staticClass:"heading-14"},[t._v("We don't spam.")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Phone "),e("span",{staticClass:"text-span-3"},[t._v(":")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Email "),e("span",{staticClass:"text-span-3"},[t._v(":")])])}],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n(344)},359:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,".custom-container.footer{background:#00040f}.w-inline-block a{color:#fff;display:block;font-weight:300}",""]),o.locals={},t.exports=o},360:function(t,e,n){"use strict";n(345)},361:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}.top-menu.w-nav-button{width:60px}.home-logo{width:150px}",""]),o.locals={},t.exports=o},416:function(t,e,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("5615a6d5",content,!0,{sourceMap:!1})},487:function(t,e,n){"use strict";n(416)},488:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,"a.terms{color:#ffb426;font-weight:700}",""]),o.locals={},t.exports=o},549:function(t,e,n){"use strict";n.r(e);n(58);var o=n(8),r=(n(49),n(20),n(94),n(13),n(41),n(26),n(350)),l={data:function(){return{banner:"",email:"",showResponse:!1,isError:!1,response:"",onRequest:!1}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},checkErrorInputs:function(input,data){if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".email").classList.remove("active"),this.isError=!0}},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},processUserData:function(){var t=this;this.onRequest=!0,this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&this.processEmail()},processEmail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={email:t.email},e.prev=1,e.next=4,t.$axios.patch("/users/forgotten-password",form);case 4:t.callResponse("Please verify your email and click on the link button to continue.",!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.callResponse(e.t0.response.data.message,!0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},getBanner:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=Login");case 3:n=e.sent,t.banner=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},setArray:function(){this.checkArray=[{name:"email",data:this.email}]}},mounted:function(){this.loadScript(),this.getBanner()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeNavigation:n(349).default,HomeFooter:r.default}},c=(n(487),n(57)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"forgotten-password"},[e("home-navigation"),t._v(" "),e("div",{staticClass:"about-us-section faq",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.banner.bannerImage,")")}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"hero-section"},[e("h1",{staticClass:"heading-21 faq"},[t._v(t._s(t.banner.bannerTitle))])])]),t._v(" "),e("div",{staticClass:"hero-section-cover"})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"login-section3"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-48"},[e("div",{staticClass:"form-block-3 w-form"},[e("div",{staticClass:"form-3"},[t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"text-field-4 w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Email"},domProps:{value:t.email},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.processUserData.apply(null,arguments)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.showResponse?e("div",[t._v("\n              "+t._s(t.response)+"\n            ")]):t._e(),t._v(" "),t.onRequest?e("input",{staticClass:"submit-button-3 w-button",attrs:{type:"button",value:"Processing..."}}):e("input",{staticClass:"submit-button-3 w-button",attrs:{type:"button",value:"Login","data-wait":"Please wait..."},on:{click:t.processUserData}}),t._v(" "),e("div",{staticClass:"link-block-8 w-inline-block"},[e("h1",{staticClass:"heading-36 forgotten-password"},[e("strong",[t._v("Already have an account?,\n                  "),e("nuxt-link",{staticClass:"terms",attrs:{to:"/login"}},[t._v("Login")])],1)])]),t._v(" "),e("div",{staticClass:"link-block-8 w-inline-block"},[e("h1",{staticClass:"heading-36 forgotten-password"},[t._v("\n                If you don't have an account,\n                "),e("nuxt-link",{staticClass:"terms",attrs:{to:"/signup"}},[t._v("create an account")])],1)])])])])])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-us-section2 login"},[e("div",{staticClass:"custom-container"},[e("div",[e("div",{staticClass:"div-block-27 faq"},[e("div",{staticClass:"div-block-28"},[e("img",{staticClass:"image-4",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0e746818cacc5ca3e96_home-icon-silhouette-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-23"},[t._v("Home")]),t._v(" "),e("img",{staticClass:"image-5",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0eddea363a6792c4285_left-arrow-next-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-24"},[t._v("Recover Account")])])])]),t._v(" "),e("div",{staticClass:"div-block-29"})])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"email",attrs:{for:""}},[this._v("Please enter a valid email")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeNavigation:n(349).default,HomeFooter:n(350).default})}}]);