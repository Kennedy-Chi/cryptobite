(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{303:function(e,t,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(143).default)("4b4be529",content,!0,{sourceMap:!1})},307:function(e,t,o){"use strict";o.r(t);o(49),o(58),o(26);var r={data:function(){return{navItems:[{name:"Dashboard",image:"dashboard.svg",colored:"colored-dashboard.svg",route:"/admin",activeLink:!1,imageSrc:"dashboard.svg",routePath:"admin"},{name:"Profile",image:"profile.svg",colored:"colored-profile.svg",route:"/admin/profile",activeLink:!1,imageSrc:"profile.svg",routePath:"admin-profile"},{name:"Users",image:"users.svg",colored:"colored-users.svg",route:"/admin/users",activeLink:!1,imageSrc:"users.svg",routePath:"admin-users"},{name:"Add User",image:"user.svg",colored:"colored-user.svg",route:"/admin/add-user/new",activeLink:!1,imageSrc:"user.svg",routePath:"admin-add-user"},{name:"Plans/Accounts",image:"plans.svg",colored:"colored-plans.svg",route:"/admin/plans",activeLink:!1,imageSrc:"plans.svg",routePath:"admin-plans"},{name:"Reviews",image:"reviews.svg",colored:"colored-reviews.svg",route:"/admin/reviews",activeLink:!1,imageSrc:"reviews.svg",routePath:"admin-reviews"},{route:"/admin/currencies",name:"Currency",image:"currency.svg",colored:"colored-currency.svg",activeLink:!1,imageSrc:"currency.svg",routePath:"admin-currencies"},{route:"/admin/transactions/list",name:"Transactions",image:"deposit.svg",colored:"colored-deposit.svg",activeLink:!1,imageSrc:"deposit.svg",routePath:"admin-transactions"},{route:"/admin/email",name:"Emails",image:"emails.svg",colored:"colored-emails.svg",activeLink:!1,imageSrc:"emails.svg",routePath:"admin-email"},{route:"/admin/pages",name:"Pages",image:"pages.svg",colored:"colored-pages.svg",activeLink:!1,imageSrc:"pages.svg",routePath:"admin-pages"},{route:"/admin/settings",name:"Settings",image:"settings.svg",colored:"colored-settings.svg",activeLink:!1,imageSrc:"settings.svg",routePath:"admin-settings"},{name:"Referrals",image:"referrals.svg",colored:"colored-referrals.svg",activeLink:!1,imageSrc:"referrals.svg"},{name:"Logout",image:"logout.svg",colored:"colored-logout.svg",activeLink:!1,imageSrc:"logout.svg"}],route:""}},computed:{navState:function(){return this.$store.state.navState}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},activateLink:function(e){e.activeLink=!0,e.imageSrc=e.colored},deactivateLink:function(e){e.activeLink=!1,e.imageSrc=e.image}},mounted:function(){this.route=this.$route.name}},n=(o(309),o(56)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"vertical-navbar",class:{show:e.navState}},[t("div",{staticClass:"sticky-navbar"},[t("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[t("img",{staticClass:"brand",attrs:{src:"/images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/images/Logo.png 500w, /images/Logo.png 800w, /images/Logo.png 1080w, /images/Logo.png 2284w",alt:""}})]),e._v(" "),t("img",{staticClass:"menu-close",attrs:{src:"/images/menu-close.svg",alt:""},on:{click:e.toggleNav}}),e._v(" "),t("ul",{staticClass:"nav-list",attrs:{role:"list"}},[t("li",{staticClass:"nav-list"},e._l(e.navItems,(function(o,i){return t("nuxt-link",{key:i,staticClass:"nav-link w-inline-block",class:{active:e.route==o.routePath||e.route.includes(o.routePath)||o.activeLink},attrs:{to:"".concat(o.route)},on:{mouseenter:function(t){return e.activateLink(o)},mouseleave:function(t){return e.deactivateLink(o)}}},[t("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(e.route==o.routePath||e.route.includes(o.routePath)?o.colored:o.imageSrc),loading:"lazy",alt:""}}),e._v(" "),t("div",{staticClass:"link-text"},[e._v(e._s(o.name))])])})),1)])],1)])}),[],!1,null,null,null);t.default=component.exports},309:function(e,t,o){"use strict";o(303)},310:function(e,t,o){var r=o(142)((function(i){return i[1]}));r.push([e.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),r.locals={},e.exports=r}}]);