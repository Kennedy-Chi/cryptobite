(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{357:function(t,o,l){var content=l(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(151).default)("bd53866e",content,!0,{sourceMap:!1})},367:function(t,o,l){"use strict";l(357)},368:function(t,o,l){var n=l(150)((function(i){return i[1]}));n.push([t.i,"img.menu-close{cursor:pointer;right:-180px;top:20px}",""]),n.locals={},t.exports=n},371:function(t,o,l){"use strict";l.r(o);var n=l(8),c=(l(26),l(49),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return o.stop()}}),o)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),e=(l(367),l(57)),component=Object(e.a)(c,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"side-dash-board",class:{show:t.navState}},[o("div",{staticClass:"sticky-navigation"},[o("div",{staticClass:"board-logo-holder"},[o("img",{staticClass:"menu-close",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d690df7d5dc496a17_decrease-text-indent-icon%201.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),o("nuxt-link",{staticClass:"logo-holder",attrs:{to:"/"}},[o("img",{attrs:{src:"/Cryptobit-Light-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),o("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),o("div",{staticClass:"all-button-holder"},[o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cf4aba0ad5d0c1bc8ba2_four-squares-line-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Dashboard")])]),o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d85d0ef5c36bfabc9_wallet-money-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Deposit")])]),o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-withdraw-funds"==t.route},attrs:{to:"/dashboard/withdraw-funds"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460ca96a33287e54e85cda5_hand-money-income-dollar-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Withdraw")])]),o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c95a50cbb3577558d943_3d-modeling-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Transactions")])]),o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9ddd6192761285fb9b0_chart-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Deposit List")])]),o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-earnings"==t.route},attrs:{to:"/dashboard/earnings"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c7c6a5b90e89a2622c43_grow-money-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Earnings")])]),o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-notifications"==t.route},attrs:{to:"/dashboard/notifications"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Notification")])]),t._v(" "),o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9bd5a61c167cdd48963_user-persona-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Profile")])]),t._v(" "),o("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-referrals"==t.route},attrs:{to:"/dashboard/referrals"}},[o("img",{staticClass:"nav-link-img",attrs:{src:"/dashboard-images/referral.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",[t._v("Referrals")])]),t._v(" "),o("div",{staticClass:"each-button-flexer",on:{click:t.logout}},[o("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),o("div",{staticClass:"down-nav-holder"},[o("h1",{staticClass:"down-logo-header"},[t._v("\n        @Renex Holdings Aps - "+t._s((new Date).getFullYear())+"\n      ")])])])])}),[],!1,null,null,null);o.default=component.exports}}]);