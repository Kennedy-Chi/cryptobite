(window.webpackJsonp=window.webpackJsonp||[]).push([[43,20,21,22],{315:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("8ff03d06",content,!0,{sourceMap:!1})},316:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("baade864",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n(315)},325:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".dashboard-logo{max-width:120px}",""]),r.locals={},t.exports=r},326:function(t,e,n){"use strict";n(316)},327:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,"img.menu-close{cursor:pointer;right:-180px;top:20px}",""]),r.locals={},t.exports=r},328:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(48),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),c=n(56),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-footer"},[e("div",[t._v("\n    "+t._s((new Date).getFullYear())+" Copyright "+t._s(t.company.companyName)+", All\n    Rights Reserved.\n  ")])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);n(57);var r=n(8),o=(n(48),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#top");n?n.appendChild(e):console.error("Could not find app node to append script element")},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadScript(),this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},head:function(){return{link:[{href:"/css/Dashboard.css",type:"text/css",rel:"stylesheet"}]}}}),c=(n(324),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6445ef4447bf1a3b248f87b6_hamburger-menu-icon%203.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),e("img",{staticClass:"dashboard-logo",attrs:{src:"/Cryptobit-Light-Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("div",{attrs:{id:"ytWidget"}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header dash"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("\n          Hi, "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+" Welcome back.\n        ")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("div",{staticClass:"icon-holder gap"},[t.user.profilePicture?e("div",{staticClass:"top-profile-pics",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")"),backgroundSize:"cover",backgroundPosition:"center"}}):e("div",{staticClass:"top-profile-pics",style:{backgroundImage:"url(/images/avatar.svg)",backgroundSize:"cover",backgroundPosition:"center"}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-15",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(26),n(48),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),c=(n(326),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{show:t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d690df7d5dc496a17_decrease-text-indent-icon%201.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder",attrs:{to:"/"}},[e("img",{attrs:{src:"/Cryptobit-Light-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cf4aba0ad5d0c1bc8ba2_four-squares-line-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Dashboard")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d85d0ef5c36bfabc9_wallet-money-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-withdraw-funds"==t.route},attrs:{to:"/dashboard/withdraw-funds"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460ca96a33287e54e85cda5_hand-money-income-dollar-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Withdraw")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c95a50cbb3577558d943_3d-modeling-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transactions")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9ddd6192761285fb9b0_chart-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit List")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-earnings"==t.route},attrs:{to:"/dashboard/earnings"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c7c6a5b90e89a2622c43_grow-money-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Earnings")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-notifications"==t.route},attrs:{to:"/dashboard/notifications"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Notification")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9bd5a61c167cdd48963_user-persona-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Profile")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-referrals"==t.route},attrs:{to:"/dashboard/referrals"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"/dashboard-images/referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Referrals")])]),t._v(" "),e("div",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @Renex Holdings Aps - "+t._s((new Date).getFullYear())+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";var r=n(2),o=n(3),c=n(59),l=n(216),d=n(215),h=n(4),v=RangeError,m=String,f=Math.floor,_=o(d),C=o("".slice),y=o(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},x=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=f(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=f(n/t),n=n%t*1e7},R=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:h((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!h((function(){y({})}))},{toFixed:function(t){var e,n,r,o,d=l(this),h=c(t),data=[0,0,0,0,0,0],f="",y="0";if(h<0||h>20)throw v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(f="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*w(2,69,1))-69)<0?d*w(2,-e,1):d/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(x(data,0,n),r=h;r>=7;)x(data,1e7,0),r-=7;for(x(data,w(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),x(data,1,1),k(data,2),y=R(data)}else x(data,0,n),x(data,1<<-e,0),y=R(data)+_("0",h);return y=h>0?f+((o=y.length)<=h?"0."+_("0",h-o)+y:C(y,0,o-h)+"."+C(y,o-h)):f+y}})},371:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("6a9b2ed0",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";n(371)},412:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".short-card-holder.currency{display:flex;flex-wrap:wrap}.short-card-holder.currency>div{margin-bottom:20px}.text-field.w-input{background:transparent;color:#fff}",""]),r.locals={},t.exports=r},458:function(t,e,n){"use strict";n.r(e);n(26),n(57),n(331),n(214);var r=n(8),o=(n(48),n(20),n(40),n(13),n(92),n(91),n(39),n(328)),c=n(329),l={data:function(){return{wallets:[],plans:[],currencies:[],selectedPlan:"",selecetedWalletBalance:"",selectedWalletId:"",selectedCurrencyId:"",fromBalance:!1,amount:1e3,percent:"",paymentMethod:"",maxArray:[],percentArray:[],response:"",isError:!1,showResponse:!1,onRequest:!1}},methods:{formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},callResponse:function(t,e){var n=this;this.onRequest=!1,this.response=t,this.isError=e,this.showResponse=!0,setTimeout((function(){n.showResponse=!1}),6e3)},watchInput:function(){""!=this.selectedPlan?1==this.fromBalance&&this.selecetedWalletBalance<this.amount?this.callResponse("Sorry, you have insufficient balance in this wallet",!0):this.amount>this.selectedPlan.planMaximum&&(this.amount=this.selectedPlan.planMaximum):this.callResponse("Choose a Plan for deposit to proceed",!0)},selectWallet:function(t){var e=this;0!=t.balance&&(this.wallets.forEach((function(t){t.checked=!1})),t.checked=!0,this.selecetedWalletBalance=t.balance,this.checkItems(this.currencies),this.fromBalance=!0,this.selectedWalletId=t._id,this.currencies.forEach((function(n){n.name==t.name&&(e.selectedCurrencyId=n._id)})),this.paymentMethod=t.paymentMethod)},selectSystem:function(t){this.currencies.forEach((function(t){t.checked=!1})),this.checkItems(this.wallets),this.selectedCurrencyId=t._id,this.fromBalance=!1,t.checked=!0,this.paymentMethod=t.paymentMethod},selectPlan:function(t){this.plans.forEach((function(t){t.checked=!1})),this.selectedPlan=t,t.checked=!0,this.amount=t.planMinimum,this.percent=t.planPercentage},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},setMaxArray:function(t){var e=this;t.forEach((function(t){e.maxArray.push(t.planMaximum),e.percentArray.push(t.planPercentage)}))},setPercentage:function(){this.watchInput(),Number(this.amount)<Number(this.maxArray[0])?this.percent=Number(this.percentArray[0]):Number(this.amount)>Number(this.maxArray[0])?this.percent=this.percentArray[1]:Number(this.amount)>Number(this.maxArray[1])&&(this.percent=this.percentArray[2])},proceedToDeposit:function(){this.onRequest=!0,""!=this.selectedPlan?""!=this.selectedWalletId||""!=this.selectedCurrencyId?1==this.fromBalance&&this.selecetedWalletBalance<this.amount?this.callResponse("Sorry, you have insufficient balance in this wallet",!0):this.$router.push("/dashboard/confirm-deposit/?paymentMethod=".concat(this.paymentMethod,"&planId=").concat(this.selectedPlan._id,"&amount=").concat(this.amount,"&walletId=").concat(this.selectedWalletId,"&currencyId=").concat(this.selectedCurrencyId,"&fromBalance=").concat(this.fromBalance)):this.callResponse("Please select a currency to deposit in",!0):this.callResponse("Please select a plan",!0)},getWallets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:n=e.sent,t.wallets=t.checkItems(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCurrencies:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/currency");case 3:n=e.sent,t.currencies=t.checkItems(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPlans:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:n=e.sent,t.plans=t.checkItems(n.data.data),t.setMaxArray(t.plans),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getWallets(),this.getPlans(),this.getCurrencies()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardNavigation:n(330).default,DashboardHeader:c.default,DashboardFooter:o.default}},d=(n(411),n(56)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"deposit-holde"},[e("div",{staticClass:"deposit"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"doposit-balance-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"short-card-holder currency"},t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[e("div",{staticClass:"main-header-holder"},[e("h1",{staticClass:"main-header"},[t._v(t._s(n.name))])]),t._v(" "),t._m(1,!0)]),t._v(" "),n.online?e("img",{staticClass:"edit-1",attrs:{src:"".concat(n.image),loading:"lazy",alt:""}}):e("img",{staticClass:"edit-1",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.image),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("\n                $"+t._s(t.formatMoney(Number(n.balance).toFixed(2)))+" USD\n              ")])])])})),0)]),t._v(" "),e("div",{staticClass:"select-plan-holder"},[t._m(2),t._v(" "),e("div",{staticClass:"plan-card-holder dash"},t._l(t.plans,(function(n){return e("div",{key:n._id,staticClass:"each-plan-card dash",class:{active:n.checked},on:{click:function(e){return t.selectPlan(n)}}},[e("div",{staticClass:"plan-heading-holder"},[e("h1",{staticClass:"plan-heading card-header"},[t._v(t._s(n.planName))])]),t._v(" "),e("div",{staticClass:"plan-heading-holder"},[e("h1",{staticClass:"plan-heading"},[t._v(t._s(n.planPercentage)+"%")])]),t._v(" "),e("div",{staticClass:"plan-heading-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("Income : "+t._s(n.planPeriod))])]),t._v(" "),t._m(3,!0),t._v(" "),e("div",{staticClass:"plan-heading-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("\n                Minimum :\n                "+t._s(t.formatMoney(Number(n.planMinimum).toFixed(2)))+"$\n              ")])]),t._v(" "),e("div",{staticClass:"plan-heading-holder"},[n.planMaximum>0?e("h1",{staticClass:"plan-heading"},[t._v("\n                Maximum : "+t._s(t.formatMoney(Number(n.planMaximum)))+"$\n              ")]):e("h1",{staticClass:"plan-heading"},[t._v("Maximum : UNLIMITED")])])])})),0)]),t._v(" "),e("div",{staticClass:"select-payment"},[t._m(4),t._v(" "),e("div",{staticClass:"payment-type-holder"},[e("div",{staticClass:"each-payment-type"},[t._m(5),t._v(" "),e("div",{staticClass:"payment-method-holder"},t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"each-payment-method",class:{active:n.checked,disable:0==n.balance},on:{click:function(e){return t.selectWallet(n)}}},[n.online?e("img",{staticClass:"deposit-payment-bitcoin",attrs:{src:"".concat(n.image),loading:"lazy",alt:""}}):e("img",{staticClass:"deposit-payment-bitcoin",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.image),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"paytype-header-holder"},[e("h1",{staticClass:"pay-header"},[t._v(t._s(n.name))])])])})),0)]),t._v(" "),e("div",{staticClass:"each-payment-type"},[t._m(6),t._v(" "),e("div",{staticClass:"payment-method-holder"},t._l(t.currencies,(function(n){return e("div",{key:n._id,staticClass:"each-payment-method",class:{active:n.checked},on:{click:function(e){return t.selectSystem(n)}}},[n.online?e("img",{staticClass:"deposit-payment-red",attrs:{src:"".concat(n.image),loading:"lazy",alt:""}}):e("img",{staticClass:"deposit-payment-red",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.image),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"paytype-header-holder"},[e("h1",{staticClass:"pay-header"},[t._v(t._s(n.name))])])])})),0)])])]),t._v(" "),e("div",{staticClass:"payment-amount"},[t._m(7),t._v(" "),e("div",{staticClass:"amount-middle-holder"},[e("div",{staticClass:"payment-input-holder"},[e("div",{staticClass:"payment-input-form amount"},[e("div",{staticClass:"payment-form w-form"},[e("div",[e("div",{staticClass:"hold-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"text-field w-input",attrs:{type:"number",maxlength:"256",placeholder:""},domProps:{value:t.amount},on:{keyup:t.setPercentage,input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"erro-holder"},[t.showResponse?e("div",{staticClass:"erro-text",class:{error:t.isError}},[t._v("\n                      "+t._s(t.response)+"\n                    ")]):t._e()]),t._v(" "),t.onRequest?e("div",{staticClass:"custom-btn processing"},[e("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Processing")])]):e("span",{staticClass:"custom-btn w-button",on:{click:t.proceedToDeposit}},[t._v("Deposit")])])])])]),t._v(" "),e("div",{staticClass:"payment-calender-holder"},[e("div",{staticClass:"each-daily-holder"},[e("img",{staticClass:"deposit-calender",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/64336f09d57930655b40c007_24-hour-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("\n                  $ "+t._s(t.formatMoney((t.amount*t.percent/100).toFixed(2)))+"\n                ")])]),t._v(" "),t._m(8)]),t._v(" "),e("div",{staticClass:"each-daily-holder"},[e("img",{staticClass:"deposit-calender",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/64336ee53f44a774257132a9_week-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("\n                  $\n                  "+t._s(t.formatMoney((t.amount*t.percent*7/100).toFixed(2)))+"\n                ")])]),t._v(" "),t._m(9)]),t._v(" "),e("div",{staticClass:"each-daily-holder"},[e("img",{staticClass:"deposit-calender",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/64336efc72548f96b3014bfa_daily-schedule-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("\n                  $\n                  "+t._s(t.formatMoney((t.amount*t.percent*30/100).toFixed(2)))+"\n                ")])]),t._v(" "),t._m(10)])])])])],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"balance-top-header"},[e("div",{staticClass:"balance-header-holder"},[e("h1",{staticClass:"main-heading"},[t._v("Make Deposit")])]),t._v(" "),e("div",{staticClass:"balance-text-holder"},[e("h1",{staticClass:"sub-heading"},[t._v("Available Balance")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("a",{staticClass:"main-text",attrs:{href:"#"}},[t._v("Edit Account")])]),t._v(" "),e("a",{staticClass:"edit-img-link w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-18",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432a18f57e24b363fc634e5_link-icon%201.svg",loading:"lazy",alt:""}})])])},function(){var t=this._self._c;return t("div",{staticClass:"plan-header-holder dash"},[t("h1",{staticClass:"main-heading dash select"},[this._v("Select Plan")])])},function(){var t=this._self._c;return t("div",{staticClass:"plan-heading-holder"},[t("h1",{staticClass:"plan-heading"},[this._v("Deposit : Range")])])},function(){var t=this._self._c;return t("div",{staticClass:"payment-top-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Select Payment")])])},function(){var t=this._self._c;return t("div",{staticClass:"top-payment-holder"},[t("h1",{staticClass:"plan-heading"},[this._v("Select From Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"top-payment-holder"},[t("h1",{staticClass:"plan-heading"},[this._v("Select From System")])])},function(){var t=this._self._c;return t("div",{staticClass:"amount-top-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Amount")])])},function(){var t=this._self._c;return t("div",{staticClass:"day-texts-holder"},[t("h1",{staticClass:"pay-header"},[this._v("Profit Daily")])])},function(){var t=this._self._c;return t("div",{staticClass:"day-texts-holder"},[t("h1",{staticClass:"pay-header"},[this._v("Profit Weekly")])])},function(){var t=this._self._c;return t("div",{staticClass:"day-texts-holder"},[t("h1",{staticClass:"pay-header"},[this._v("Profit Monthly")])])}],!1,null,null,null);e.default=component.exports}}]);