(window.webpackJsonp=window.webpackJsonp||[]).push([[43,20,22],{354:function(t,e,l){var content=l(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(151).default)("6ab3ce08",content,!0,{sourceMap:!1})},358:function(t,e,l){"use strict";l.r(e);var o={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var l=document.querySelector("#top");l?l.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript(),this.setFileURL()}},n=l(57),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},365:function(t,e,l){"use strict";l.r(e);var o=l(8),n=(l(26),l(49),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),d=(l(368),l(57)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit List")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposits.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("@ Bitpal - 2023")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        This is some text inside of a div block.\n      ")])])}],!1,null,null,null);e.default=component.exports},368:function(t,e,l){"use strict";l(354)},369:function(t,e,l){var o=l(150)((function(i){return i[1]}));o.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),o.locals={},t.exports=o},529:function(t,e,l){"use strict";l.r(e);var o=l(358),n=l(365),d={components:{DashboardFooter:o.default,DashboardNavigation:n.default}},r=l(57),component=Object(r.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"change-password-holder"},[e("div",{staticClass:"change-password"},[e("DashboardNavigation"),t._v(" "),t._m(0)],1),t._v(" "),e("DashboardFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-dash-board"},[e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo"},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6445ef4447bf1a3b248f87b6_hamburger-menu-icon%203.svg",loading:"lazy",alt:""}}),e("img",{staticClass:"logo",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/643161bb5c88a3d7ea2476b4_header-logo-light.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header"},[t._v("Welcome To Bitpal")])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, Justice Kingsley Welcome back.")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("div",{staticClass:"icon-holder gap"},[e("img",{staticClass:"image-13",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/643176b59d91c6b6a9b955c3_user-persona-icon%202.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder gap"},[e("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6431bbad57e24b175db8f417_add-bell-notification-icon%20(1)%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder"},[e("img",{staticClass:"image-15",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6431bdc3443cd2f53390fa6e_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"profile-top-holder"},[e("h1",{staticClass:"main-heading"},[t._v("profile")])]),t._v(" "),e("div",{staticClass:"profile-content-1"},[e("div",{staticClass:"input-holder"},[e("div",{staticClass:"profile-form w-form"},[e("form",{attrs:{id:"email-form-3",name:"email-form-3","data-name":"Email Form 3",method:"get"}},[e("div",{staticClass:"profile-form-content"},[e("div",{staticClass:"profile-form-holder"},[e("div",{staticClass:"sub-top-holder"},[e("h1",{staticClass:"sub-heading"},[t._v("Personal Information")])]),t._v(" "),e("div",{staticClass:"profile-inputs-holder"},[e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("Username")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("E-mail")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("Full Name")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])])])]),t._v(" "),e("div",{staticClass:"profile-form-holder"},[e("div",{staticClass:"sub-top-holder"},[e("h1",{staticClass:"sub-heading"},[t._v("Chang Password")])]),t._v(" "),e("div",{staticClass:"profile-inputs-holder"},[e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("Old Password")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("Password")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("Change Password")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])])]),t._v(" "),e("div",{staticClass:"profile-button-holder"},[e("a",{staticClass:"green-button w-button",attrs:{href:"#"}},[t._v("Update Password")])])]),t._v(" "),e("div",{staticClass:"profile-form-holder"},[e("div",{staticClass:"sub-top-holder"},[e("h1",{staticClass:"sub-heading"},[t._v("Payment Details")])]),t._v(" "),e("div",{staticClass:"profile-inputs-holder"},[e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("Ethereum")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("Tron")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("Bitcoin")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])]),t._v(" "),e("div",{staticClass:"profile-full-holder long"},[e("div",{staticClass:"each-input-holder"},[e("div",{staticClass:"input-header-holder"},[e("div",{staticClass:"input-text"},[t._v("USDT TRC20")])]),t._v(" "),e("input",{staticClass:"profile-text-input w-input",attrs:{type:"text",maxlength:"256",name:"name-5","data-name":"Name 5",placeholder:"",id:"name-5"}})])])]),t._v(" "),e("div",{staticClass:"profile-button-holder"},[e("a",{staticClass:"green-button w-button",attrs:{href:"#"}},[t._v("Update Wallet")])])])])]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:l(365).default,DashboardFooter:l(358).default})}}]);