(window.webpackJsonp=window.webpackJsonp||[]).push([[50,20,21,22],{354:function(t,e,o){var content=o(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(151).default)("9d8aa106",content,!0,{sourceMap:!1})},358:function(t,e,o){"use strict";o.r(e);var n={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var o=document.querySelector("#top");o?o.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript(),this.setFileURL()}},r=o(57),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},359:function(t,e,o){var content=o(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(151).default)("69fe1dcb",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(49),{head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),l=(o(370),o(57)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo dash",attrs:{src:"/dashboard-images/Landmark-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("div",{staticClass:"welcome-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("nuxt-link",{staticClass:"icon-holder gap",attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"top-header-holder"},[t("h1",{staticClass:"top-header"},[this._v("Welcome To Bitpal")])])},function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/bell-notification-icon.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},365:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(26),o(49),{data:function(){return{route:"",company:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return o=e.sent,e.next=6,o.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav(),this.getCompany()}}),l=(o(368),o(57)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit List")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposits.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @"+t._s(t.company.companyName)+" - "+t._s((new Date).getFullYear())+"\n      ")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        Thanks for choosing "+t._s(t.company.companyName)+", we'll be glad you tell\n        others about us.\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,o){"use strict";o(354)},369:function(t,e,o){var n=o(150)((function(i){return i[1]}));n.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),n.locals={},t.exports=n},370:function(t,e,o){"use strict";o(359)},371:function(t,e,o){var n=o(150)((function(i){return i[1]}));n.push([t.i,".image-14.dash{width:25px}.logo.dash{display:block;min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),n.locals={},t.exports=n},535:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(49),o(43),o(20),o(42),o(11),o(95),o(358)),l=o(360),c={data:function(){return{plans:[],transactions:[]}},methods:{capitalize:function(data){return data.charAt(0).toUpperCase()+data.slice(1)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getTransactions:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/?username=".concat(t.user.username));case 3:o=e.sent,t.transactions=o.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getTransactions()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:r.default,DashboardHeader:l.default}},d=o(57),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"deposit-list-holder"},[e("div",{staticClass:"deposit-list"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"deposit-list-second"},[e("div",{staticClass:"table-plan-holder"},[e("div",{staticClass:"table"},[e("div",{staticClass:"main-table"},[t._m(1),t._v(" "),t._l(t.transactions,(function(o){return e("div",{key:o._id,staticClass:"light-table-holder"},[t._m(2,!0),t._v(" "),t._m(3,!0),t._v(" "),t._m(4,!0),t._v(" "),t._m(5,!0),t._v(" "),t._m(6,!0)])}))],2)])])])],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"deposit-list-second"},[t("h1",{staticClass:"main-heading"},[this._v("All Transactions")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"light-table-holder table-green"},[e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header"},[t._v("S/N")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder"},[e("h1",{staticClass:"table-header"},[t._v("Transactions")])]),t._v(" "),e("div",{staticClass:"symbols"},[e("h1",{staticClass:"table-header"},[t._v("Wallet")])]),t._v(" "),e("div",{staticClass:"table-amount-holder"},[e("h1",{staticClass:"table-header"},[t._v("Amounts")])]),t._v(" "),e("div",{staticClass:"table-date-holder"},[e("h1",{staticClass:"table-header"},[t._v("Dates")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("1.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Deposit")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"symbols"},[e("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),e("img",{staticClass:"deposit-bitcoin slash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b902545affb4f6ea0516_bitcoin-cash-bch-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-amount-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("100")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-date-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:o(365).default,DashboardHeader:o(360).default,DashboardFooter:o(358).default})}}]);