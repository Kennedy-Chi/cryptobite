(window.webpackJsonp=window.webpackJsonp||[]).push([[38,7,9,10,20],{343:function(t,e,n){"use strict";var r=n(2),c=n(3),o=n(39),l=n(27),v=n(40),d=n(235),m=n(14),f=n(4),_=n(234),h=n(152),C=n(347),w=n(348),y=n(93),k=n(349),x=[],R=c(x.sort),z=c(x.push),A=f((function(){x.sort(void 0)})),I=f((function(){x.sort(null)})),L=h("sort"),$=!f((function(){if(y)return y<70;if(!(C&&C>3)){if(w)return!0;if(k)return k<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)x.push({k:t+n,v:e})}for(x.sort((function(a,b){return b.v-a.v})),n=0;n<x.length;n++)t=x[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:A||!I||!L||!$},{sort:function(t){void 0!==t&&o(t);var e=l(this);if($)return void 0===t?R(e):R(e,t);var n,r,c=[],f=v(e);for(r=0;r<f;r++)r in e&&z(c,e[r]);for(_(c,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:m(e)>m(n)?1:-1}}(t)),n=v(c),r=0;r<n;)e[r]=c[r++];for(;r<f;)d(e,r++);return e}})},347:function(t,e,n){var r=n(72).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},348:function(t,e,n){var r=n(72);t.exports=/MSIE|Trident/.test(r)},349:function(t,e,n){var r=n(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},352:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("4c814224",content,!0,{sourceMap:!1})},353:function(t,e,n){"use strict";n.r(e);var r={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},c=n(57),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);e.default=component.exports},354:function(t,e,n){"use strict";n.r(e);n(50),n(59);var r=n(8),c=(n(26),n(49),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),o=(n(362),n(57)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[e("div",{staticClass:"sticky-navbar"},[e("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[e("img",{staticClass:"brand",attrs:{src:"/admin-images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/admin-images/Logo.png 500w, /admin-images/Logo.png 800w, /admin-images/Logo.png 1080w, /admin-images/Logo.png 2284w",alt:""}})]),t._v(" "),e("img",{staticClass:"menu-close",attrs:{src:"/admin-images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",{staticClass:"nav-list"},[e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-plans"==t.route},attrs:{to:"/admin/plans"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Plans")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-active-deposits"==t.route},attrs:{to:"/admin/active-deposits"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-active-deposits"==t.route?"colored-active.svg":"active.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Active Deposits")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),e("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(49),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.status&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),o=n(57),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-header"},[e("img",{staticClass:"menu",attrs:{src:"/admin-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("div",{staticClass:"top-icons"},[e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification"},[e("div",{staticClass:"badge"}),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"custom-card pie-chart-holder notify"},[e("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);e.default=component.exports},362:function(t,e,n){"use strict";n(352)},363:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),r.locals={},t.exports=r},364:function(t,e,n){"use strict";n.r(e);var r={},c=n(57),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),e("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),e("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),e("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);e.default=component.exports},423:function(t,e,n){var content=n(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("7e79525e",content,!0,{sourceMap:!1})},499:function(t,e,n){"use strict";n(423)},500:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,"li.filter-items{display:flex}li .flag{margin-right:5px;width:60px}",""]),r.locals={},t.exports=r},551:function(t,e,n){"use strict";n.r(e);n(58);var r=n(8),c=n(28),o=(n(49),n(343),n(353)),l=n(354),v=n(355),d={data:function(){var t;return t={reviews:[],username:"",country:"",selectedCountry:"Select Country",selectedFlag:"",image:"",rating:"",date:"",content:[],showReviewCountries:!1},Object(c.a)(t,"country","Select Country"),Object(c.a)(t,"editingState",!1),Object(c.a)(t,"editingId",""),Object(c.a)(t,"confirmMessage",""),Object(c.a)(t,"confirmStatus",!0),Object(c.a)(t,"deleteId",""),Object(c.a)(t,"sort","-time"),Object(c.a)(t,"limit",3),Object(c.a)(t,"resultLength",""),Object(c.a)(t,"currentPage",1),Object(c.a)(t,"pages",(function(){for(var t=[],e=Math.ceil(this.resultLength/this.limit),i=0;i<e;i++)t.push("i");return t})),t},methods:{formatDate:function(data){if(null==data||null==data)return"N/A";var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},setCountry:function(t){this.country=t,this.selectedCountry=t.country,this.selectedFlag=t.flagUrl,this.showReviewCountries=!1},setImage:function(t){this.image=t.target.files[0]},clearInputs:function(){this.editingId="",this.editingState=!1,this.country="Select Country",this.rating="",this.content="",this.image="",this.date="",this.username=""},toggleReviewStatus:function(t,e){this.editingId=t;var data={status:!e};this.updateReview(data)},showConfirmation:function(t,e){this.deleteId=e,this.confirmMessage=t,this.confirmStatus=!1},returnConfirmation:function(data){"yes"==data&&this.deleteReview(this.deleteId),this.confirmStatus=!0},prepareReview:function(t){this.editingId=t._id,this.editingState=!0,this.image=t.image,this.username=t.username,this.rating=t.rating,this.content=t.content,this.country=t.country,this.date=t.time},sortResult:function(){this.sort="-time"==this.sort?"time":"-time",this.getReview()},paginate:function(t){this.currentPage=t,this.getReview()},processReview:function(){var form=new FormData;form.append("rating",this.rating),form.append("comment",this.content),form.append("profilePicture",this.image),form.append("country",this.selectedCountry),form.append("flag",this.selectedFlag),form.append("commented",!0),form.append("username",this.username),form.append("time",(new Date).getTime()),this.editingState?this.updateReview(form):this.createReview(form)},updateReview:function(form){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort,"&&commented=true"),e.prev=1,e.next=4,t.$axios.patch("/review/".concat(t.editingId,"/").concat(n),form);case 4:r=e.sent,t.clearInputs(),t.reviews=r.data.data,t.resultLength=r.data.resultLength,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},createReview:function(form){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort,"&&commented=true"),e.prev=1,e.next=4,t.$axios.post("/review/".concat(n),form);case 4:r=e.sent,t.clearInputs(),t.reviews=r.data.data,t.resultLength=r.data.resultLength,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getReview:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort,"&&commented=true"),e.prev=1,e.next=4,t.$axios.get("/review/".concat(n));case 4:r=e.sent,t.reviews=r.data.data,t.resultLength=r.data.resultLength,console.log(t.reviews),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},deleteReview:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="?limit=".concat(e.limit,"&page=").concat(e.currentPage,"&sort=").concat(e.sort,"&&commented=true"),n.prev=1,n.next=4,e.$axios.delete("/review/".concat(t,"/").concat(r));case 4:c=n.sent,e.reviews=c.data.data,e.resultLength=c.data.resultLength,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.response.data.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}},mounted:function(){this.getReview()},computed:{FILE_URL:function(){return this.$store.state.fileURL},countries:function(){return this.$store.state.registrationDetails.countries}},components:{Instruction:n(364).default,AdminNavigation:l.default,AdminTopHeader:v.default,AdminFooter:o.default}},m=(n(499),n(57)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper blog"},[e("admin-navigation"),t._v(" "),e("div",{staticClass:"body-wrapper"},[e("admin-top-header"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("Users Comments")]),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),e("tbody",t._l(t.reviews,(function(n,r){return e("tr",{key:n._id},[e("td",[t._v(t._s(r+1))]),t._v(" "),e("td",[e("img",{staticClass:"banner",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.profilePicture),alt:""}})]),t._v(" "),e("td",[t._v(t._s(n.username))]),t._v(" "),e("td",[t._v(t._s(n.country))]),t._v(" "),e("td",[t._v("\n                  "+t._s(n.rating)+"\n                ")]),t._v(" "),e("td",[t._v(t._s(n.comment))]),t._v(" "),e("td",[t._v(t._s(t.formatDate(n.time)))]),t._v(" "),e("td",[n.status?e("div",{staticClass:"status",class:{success:n.status},on:{click:function(e){return t.toggleReviewStatus(n._id,n.status)}}},[t._v("\n                    Active\n                  ")]):e("div",{staticClass:"status",class:{success:n.status},on:{click:function(e){return t.toggleReviewStatus(n._id,n.status)}}},[t._v("\n                    Draft\n                  ")])]),t._v(" "),e("td",[e("div",{staticClass:"filter-box",on:{click:function(e){return t.prepareReview(n)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/edit-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.showConfirmation("Are you sure you want to delete this Blog",n._id)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/delete-gray.svg",loading:"lazy",alt:""}})])])])})),0)])]),t._v(" "),e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": "+t._s(t.resultLength)+"\n            "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" "+t._s(t.currentPage)+" of\n            "+t._s(t.pages().length)+"\n          ")]),t._v(" "),t.pages().length>1?e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[1!=t.currentPage?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage-1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-left.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages().length,(function(n,r){return e("li",{key:r,staticClass:"pagination-item",class:{active:r==t.currentPage-1,hide:r>=3+t.currentPage||r<t.currentPage-3,show:r+1==t.pages().length},on:{click:function(e){return t.paginate(r+1)}}},[e("div",[t._v(t._s(r+1))])])})),t._v(" "),t.currentPage<t.pages(t.currentPage+1).length?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage+1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-right.svg",loading:"lazy",alt:""}})]):t._e()],2):t._e()]),t._v(" "),e("div",{staticClass:"input-wrapper w-form"},[e("div",{staticClass:"input-form"},[e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"name-3"}},[t._v("Country")]),t._v(" "),e("h4",{staticClass:"select-display",on:{click:function(e){t.showReviewCountries=!t.showReviewCountries}}},[t.selectedFlag?e("img",{staticClass:"flag",attrs:{src:"".concat(t.selectedFlag),loading:"lazy",alt:""}}):t._e(),t._v("\n                "+t._s(t.selectedCountry)+"\n              ")]),t._v(" "),t.showReviewCountries?e("ul",{staticClass:"filter-list",attrs:{role:"list"}},t._l(t.countries,(function(n,r){return e("li",{key:r,staticClass:"filter-items",on:{click:function(e){return t.setCountry(n)}}},[e("img",{staticClass:"flag",attrs:{src:"".concat(n.flagUrl),loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v(t._s(n.country))])])})),0):t._e(),t._v(" "),e("img",{staticClass:"filter-icon middle",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showReviewCountries=!t.showReviewCountries}}})]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"plan-input w-input",attrs:{type:"text",placeholder:"Enter Banner Title"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"password-3"}},[t._v("Rating")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rating,expression:"rating"}],staticClass:"plan-input w-input",attrs:{type:"number"},domProps:{value:t.rating},on:{input:function(e){e.target.composing||(t.rating=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"password-3"}},[t._v("Content")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"plan-input w-input",domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"password-3"}},[t._v("Date")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"plan-input w-input",attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"button-holder"},[e("label",{staticClass:"upload-btn banner",attrs:{for:"banner"}},[e("img",{staticClass:"upload-icon",attrs:{src:"/admin-images/white-upload.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{staticClass:"file-input",attrs:{type:"file",id:"banner"},on:{change:t.setImage}}),t._v(" "),e("div",[t._v("Upload Image")])]),t._v(" "),e("input",{staticClass:"button w-button",attrs:{type:"button",value:"Add Comment"},on:{click:t.processReview}}),e("input",{staticClass:"button w-button",attrs:{type:"button",value:"Cancel"},on:{click:t.clearInputs}})])])])]),t._v(" "),e("Instruction")],1),t._v(" "),e("admin-footer")],1)],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Image")]),t._v(" "),e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Country")]),t._v(" "),e("td",[t._v("Rating")]),t._v(" "),e("td",[t._v("Content")]),t._v(" "),e("td",[t._v("Date")]),t._v(" "),e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("Actions")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminNavigation:n(354).default,AdminTopHeader:n(355).default,AdminFooter:n(353).default})}}]);