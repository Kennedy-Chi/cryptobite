(window.webpackJsonp=window.webpackJsonp||[]).push([[45,20,21,22],{354:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("9d8aa106",content,!0,{sourceMap:!1})},358:function(t,e,n){"use strict";n.r(e);var r={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#top");n?n.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript(),this.setFileURL()}},o=n(57),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},359:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("69fe1dcb",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),l=(n(370),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo dash",attrs:{src:"/dashboard-images/Landmark-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("div",{staticClass:"welcome-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("nuxt-link",{staticClass:"icon-holder gap",attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"top-header-holder"},[t("h1",{staticClass:"top-header"},[this._v("Welcome To Bitpal")])])},function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/bell-notification-icon.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(26),n(49),{data:function(){return{route:"",company:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav(),this.getCompany()}}),l=(n(368),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit List")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposits.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @"+t._s(t.company.companyName)+" - "+t._s((new Date).getFullYear())+"\n      ")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        Thanks for choosing "+t._s(t.company.companyName)+", we'll be glad you tell\n        others about us.\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,n){"use strict";n(354)},369:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),r.locals={},t.exports=r},370:function(t,e,n){"use strict";n(359)},371:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".image-14.dash{width:25px}.logo.dash{display:block;min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),r.locals={},t.exports=r},404:function(t,e,n){"use strict";var r=n(2),o=n(3),l=n(61),c=n(239),d=n(238),h=n(4),v=RangeError,m=String,f=Math.floor,_=o(d),C=o("".slice),y=o(1..toFixed),x=function(t,e,n){return 0===e?n:e%2==1?x(t,e-1,n*t):x(t*t,e/2,n)},k=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=f(r/1e7)},w=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=f(n/t),n=n%t*1e7},R=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:h((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!h((function(){y({})}))},{toFixed:function(t){var e,n,r,o,d=c(this),h=l(t),data=[0,0,0,0,0,0],f="",y="0";if(h<0||h>20)throw v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(f="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*x(2,69,1))-69)<0?d*x(2,-e,1):d/x(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(data,0,n),r=h;r>=7;)k(data,1e7,0),r-=7;for(k(data,x(10,r,1),0),r=e-1;r>=23;)w(data,1<<23),r-=23;w(data,1<<r),k(data,1,1),w(data,2),y=R(data)}else k(data,0,n),k(data,1<<-e,0),y=R(data)+_("0",h);return y=h>0?f+((o=y.length)<=h?"0."+_("0",h-o)+y:C(y,0,o-h)+"."+C(y,o-h)):f+y}})},423:function(t,e,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("78cfb1ba",content,!0,{sourceMap:!1})},489:function(t,e,n){"use strict";n(423)},490:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".text-field.amount{background-color:transparent;border:1px solid #fff;color:#fff}.button.custom{background:#7cb50c;border-radius:5px;color:#fff}",""]),r.locals={},t.exports=r},531:function(t,e,n){"use strict";n.r(e);n(26),n(58),n(404);var r=n(8),o=(n(49),n(20),n(42),n(11),n(95),n(93),n(41),n(237),n(358)),l=n(360),c=n(365),d={data:function(){return{wallets:[],plans:[],currencies:[],selectedPlan:"",selecetedWalletBalance:"",selectedWalletId:"",selectedCurrencyId:"",fromBalance:!1,amount:100,percent:"",maxArray:[],percentArray:[],response:"",isError:!1,showResponse:!1}},methods:{formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,setTimeout((function(){n.showResponse=!1}),6e3)},watchInput:function(){""!=this.selectedPlan?1==this.fromBalance&&this.selecetedWalletBalance<this.amount?this.callResponse("Sorry, you have insufficient balance in this wallet",!0):this.amount>this.selectedPlan.planMaximum&&(this.amount=this.selectedPlan.planMaximum):this.callResponse("Choose a Plan for deposit to proceed",!0)},selectWallet:function(t){0!=t.balance&&(this.wallets.forEach((function(t){t.checked=!1})),t.checked=!0,this.selecetedWalletBalance=t.balance,this.checkItems(this.currencies),this.fromBalance=!0,this.selectedWalletId=t._id)},selectSystem:function(t){this.currencies.forEach((function(t){t.checked=!1})),this.checkItems(this.wallets),this.selectedCurrencyId=t._id,this.fromBalance=!1,t.checked=!0},selectPlan:function(t){this.plans.forEach((function(t){t.checked=!1})),this.selectedPlan=t,t.checked=!0,this.amount=t.planMinimum,this.percent=t.planPercentage},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},setMaxArray:function(t){var e=this;t.forEach((function(t){e.maxArray.push(t.planMaximum),e.percentArray.push(t.planPercentage)}))},setPercentage:function(){this.watchInput(),Number(this.amount)<Number(this.maxArray[0])?this.percent=Number(this.percentArray[0]):Number(this.amount)>Number(this.maxArray[0])?this.percent=this.percentArray[1]:Number(this.amount)>Number(this.maxArray[1])&&(this.percent=this.percentArray[2])},proceedToDeposit:function(){""!=this.selectedPlan?""!=this.selectedWalletId||""!=this.selectedCurrencyId?1==this.fromBalance&&this.selecetedWalletBalance<this.amount?this.callResponse("Sorry, you have insufficient balance in this wallet",!0):this.$router.push("/dashboard/confirm-deposit/?planId=".concat(this.selectedPlan._id,"&amount=").concat(this.amount,"&walletId=").concat(this.selectedWalletId,"&currencyId=").concat(this.selectedCurrencyId,"&fromBalance=").concat(this.fromBalance)):this.callResponse("Please select a currency to deposit in",!0):this.callResponse("Please select a plan",!0)},getWallets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:n=e.sent,t.wallets=t.checkItems(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCurrencies:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/currency");case 3:n=e.sent,t.currencies=t.checkItems(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPlans:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:n=e.sent,t.plans=t.checkItems(n.data.data),t.setMaxArray(t.plans),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getWallets(),this.getPlans(),this.getCurrencies()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:o.default,DashboardNavigation:c.default,DashboardHeader:l.default}},h=(n(489),n(57)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"deposit-holder"},[e("div",{staticClass:"deposit"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"doposit-balance-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"short-card-holder"},t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[e("div",{staticClass:"main-header-holder"},[e("h1",{staticClass:"main-header"},[t._v(t._s(n.name))])]),t._v(" "),t._m(1,!0)]),t._v(" "),e("img",{staticClass:"edit-1",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("\n                "+t._s(t.formatMoney(n.balance))+" USD\n              ")])])])})),0)]),t._v(" "),e("div",{staticClass:"select-plan-holder"},[t._m(2),t._v(" "),e("div",{staticClass:"plan-card-holder"},t._l(t.plans,(function(n){return e("div",{key:n._id,staticClass:"each-plan-card",class:{active:n.checked},on:{click:function(e){return t.selectPlan(n)}}},[e("div",{staticClass:"plan-heading-holder"},[e("h1",{staticClass:"plan-heading card-header"},[t._v(t._s(n.planName))])]),t._v(" "),e("div",{staticClass:"plan-heading-holder"},[e("h1",{staticClass:"plan-heading"},[t._v(t._s(n.planPercentage)+"%")])]),t._v(" "),t._m(3,!0),t._v(" "),t._m(4,!0),t._v(" "),e("div",{staticClass:"plan-heading-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("Minimum : "+t._s(n.planMinimum)+"$")])]),t._v(" "),e("div",{staticClass:"plan-heading-holder"},[n.planMaximum>0?e("h1",{staticClass:"plan-heading"},[t._v("\n                Maximum : "+t._s(n.planMaximum)+"$\n              ")]):e("h1",{staticClass:"plan-heading"},[t._v("Unlimited")])])])})),0)]),t._v(" "),e("div",{staticClass:"select-payment"},[t._m(5),t._v(" "),e("div",{staticClass:"payment-type-holder"},[e("div",{staticClass:"each-payment-type"},[t._m(6),t._v(" "),e("div",{staticClass:"payment-method-holder"},t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"each-payment-method",class:{disable:0==n.balance,active:n.checked},on:{click:function(e){return t.selectWallet(n)}}},[e("img",{staticClass:"deposit-payment-bitcoin",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"paytype-header-holder"},[e("h1",{staticClass:"pay-header"},[t._v(t._s(n.name))])])])})),0)]),t._v(" "),e("div",{staticClass:"each-payment-type"},[t._m(7),t._v(" "),e("div",{staticClass:"payment-method-holder"},t._l(t.currencies,(function(n){return e("div",{key:n._id,staticClass:"each-payment-method",class:{active:n.checked},on:{click:function(e){return t.selectSystem(n)}}},[e("img",{staticClass:"deposit-payment-red",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"paytype-header-holder"},[e("h1",{staticClass:"pay-header"},[t._v(t._s(n.name))])])])})),0)])])]),t._v(" "),e("div",{staticClass:"payment-amount"},[t._m(8),t._v(" "),e("div",{staticClass:"amount-middle-holder"},[e("div",{staticClass:"payment-input-holder"},[e("div",{staticClass:"payment-input-form"},[e("div",{staticClass:"payment-form w-form"},[e("div",[e("div",{staticClass:"hold-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"text-field w-input amount",attrs:{type:"number",maxlength:"256",placeholder:"Enter Amount"},domProps:{value:t.amount},on:{keyup:t.setPercentage,input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"erro-holder"},[t.showResponse?e("div",{staticClass:"erro-text error",class:{error:t.isError}},[t._v("\n                      "+t._s(t.response)+"\n                    ")]):t._e()]),t._v(" "),e("button",{staticClass:"button w-button custom",on:{click:t.proceedToDeposit}},[t._v("\n                    Deposit\n                  ")])])])])]),t._v(" "),e("div",{staticClass:"payment-calender-holder"},[e("div",{staticClass:"each-daily-holder"},[e("img",{staticClass:"deposit-calender",attrs:{src:"/dashboard-images/hourly.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("\n                  $ "+t._s(t.formatMoney((t.amount*t.percent/100).toFixed(2)))+"\n                ")])]),t._v(" "),t._m(9)]),t._v(" "),e("div",{staticClass:"each-daily-holder"},[e("img",{staticClass:"deposit-calender",attrs:{src:"/dashboard-images/weekly.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("\n                  $\n                  "+t._s(t.formatMoney((t.amount*t.percent*7/100).toFixed(2)))+"\n                ")])]),t._v(" "),t._m(10)]),t._v(" "),e("div",{staticClass:"each-daily-holder"},[e("img",{staticClass:"deposit-calender",attrs:{src:"/dashboard-images/monthly.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"plan-heading"},[t._v("\n                  $\n                  "+t._s(t.formatMoney((t.amount*t.percent*30/100).toFixed(2)))+"\n                ")])]),t._v(" "),t._m(11)])])])])],1)],1),t._v(" "),e("DashboardFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"balance-top-header"},[e("div",{staticClass:"balance-header-holder"},[e("h1",{staticClass:"main-heading"},[t._v("Make Deposit")])]),t._v(" "),e("div",{staticClass:"balance-text-holder"},[e("h1",{staticClass:"sub-heading"},[t._v("Available Balance")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("a",{staticClass:"main-text",attrs:{href:"#"}},[t._v("Edit Account")])]),t._v(" "),e("a",{staticClass:"edit-img-link w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])])},function(){var t=this._self._c;return t("div",{staticClass:"plan-header-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Select Plan")])])},function(){var t=this._self._c;return t("div",{staticClass:"plan-heading-holder"},[t("h1",{staticClass:"plan-heading"},[this._v("Income : Daily")])])},function(){var t=this._self._c;return t("div",{staticClass:"plan-heading-holder"},[t("h1",{staticClass:"plan-heading"},[this._v("Deposit : Range")])])},function(){var t=this._self._c;return t("div",{staticClass:"payment-top-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Select Payment")])])},function(){var t=this._self._c;return t("div",{staticClass:"top-payment-holder"},[t("h1",{staticClass:"plan-heading"},[this._v("Select From Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"top-payment-holder"},[t("h1",{staticClass:"plan-heading"},[this._v("Select From System")])])},function(){var t=this._self._c;return t("div",{staticClass:"amount-top-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Amount")])])},function(){var t=this._self._c;return t("div",{staticClass:"day-texts-holder"},[t("h1",{staticClass:"pay-header"},[this._v("Profit Daily")])])},function(){var t=this._self._c;return t("div",{staticClass:"day-texts-holder"},[t("h1",{staticClass:"pay-header"},[this._v("Profit Weekly")])])},function(){var t=this._self._c;return t("div",{staticClass:"day-texts-holder"},[t("h1",{staticClass:"pay-header"},[this._v("Profit Monthly")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:n(365).default,DashboardHeader:n(360).default,DashboardFooter:n(358).default})}}]);