(window.webpackJsonp=window.webpackJsonp||[]).push([[51,20,21,22],{321:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("4e2a392f",content,!0,{sourceMap:!1})},322:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("42955574",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n(321)},325:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".dashboard-logo{max-width:120px}",""]),r.locals={},t.exports=r},326:function(t,e,n){"use strict";n(322)},327:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,"img.menu-close{cursor:pointer;right:-180px;top:20px}",""]),r.locals={},t.exports=r},328:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(48),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),c=n(56),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-footer"},[e("div",[t._v("\n    "+t._s((new Date).getFullYear())+" Copyright "+t._s(t.company.companyName)+", All\n    Rights Reserved.\n  ")])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(48),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#top");n?n.appendChild(e):console.error("Could not find app node to append script element")},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadScript(),this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},head:function(){return{link:[{href:"/css/Dashboard.css",type:"text/css",rel:"stylesheet"}]}}}),c=(n(324),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6445ef4447bf1a3b248f87b6_hamburger-menu-icon%203.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),e("img",{staticClass:"dashboard-logo",attrs:{src:"/images/Renex-Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("div",{attrs:{id:"ytWidget"}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("\n          Hi, "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+" Welcome back.\n        ")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-15",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("div",{staticClass:"top-profile-pics"}),this._v(" "),t("img",{staticClass:"image-13 hide",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/643176b59d91c6b6a9b955c3_user-persona-icon%202.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(26),n(48),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name}}),c=(n(326),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{show:t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d690df7d5dc496a17_decrease-text-indent-icon%201.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Renex-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cf4aba0ad5d0c1bc8ba2_four-squares-line-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Dashboard")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d85d0ef5c36bfabc9_wallet-money-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-withdraw-funds"==t.route},attrs:{to:"/dashboard/withdraw-funds"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460ca96a33287e54e85cda5_hand-money-income-dollar-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Withdraw")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c95a50cbb3577558d943_3d-modeling-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transactions")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9ddd6192761285fb9b0_chart-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit List")])]),e("nuxt-link",{staticClass:"nav-links",attrs:{to:"/dashboard/earnings"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c7c6a5b90e89a2622c43_grow-money-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Earnings")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-notifications"==t.route},attrs:{to:"/dashboard/notifications"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Notification")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9bd5a61c167cdd48963_user-persona-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Profile")])]),t._v(" "),e("div",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @Renex Holdings Aps - "+t._s((new Date).getFullYear())+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";var r=n(2),o=n(3),c=n(59),l=n(216),d=n(215),h=n(4),v=RangeError,m=String,f=Math.floor,_=o(d),w=o("".slice),C=o(1..toFixed),x=function(t,e,n){return 0===e?n:e%2==1?x(t,e-1,n*t):x(t*t,e/2,n)},y=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=f(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=f(n/t),n=n%t*1e7},R=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:h((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!h((function(){C({})}))},{toFixed:function(t){var e,n,r,o,d=l(this),h=c(t),data=[0,0,0,0,0,0],f="",C="0";if(h<0||h>20)throw v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(f="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*x(2,69,1))-69)<0?d*x(2,-e,1):d/x(2,e,1),n*=4503599627370496,(e=52-e)>0){for(y(data,0,n),r=h;r>=7;)y(data,1e7,0),r-=7;for(y(data,x(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),y(data,1,1),k(data,2),C=R(data)}else y(data,0,n),y(data,1<<-e,0),C=R(data)+_("0",h);return C=h>0?f+((o=C.length)<=h?"0."+_("0",h-o)+C:w(C,0,o-h)+"."+w(C,o-h)):f+C}})},369:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("03507f74",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n(369)},405:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".each-other-card{cursor:pointer;margin-bottom:20px}.each-other-card.active{background:#229ea3}.custom-btn.processing{margin-right:auto;max-width:200px;width:auto}",""]),r.locals={},t.exports=r},447:function(t,e,n){"use strict";n.r(e);n(331),n(214),n(57);var r=n(8),o=(n(48),n(20),n(40),n(11),n(92),n(90),n(39),n(26),n(328)),c=n(329),l={data:function(){return{wallets:[],plans:[],currencies:[],user:"",selectedWallet:"",amount:10,percent:"",showInput:!1,pendingWithdrawal:"",maxArray:[],percentArray:[],response:"",isError:!1,showResponse:!1,onRequest:!1}},methods:{formatMoney:function(t){return""==t||null==t||null==t?0:t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},callResponse:function(t,e){var n=this;this.onRequest=!1,this.response=t,this.isError=e,this.showResponse=!0,setTimeout((function(){n.showResponse=!1}),6e3)},selectWallet:function(t){0!=t.balance&&(this.wallets.forEach((function(t){t.checked=!1})),t.checked=!0,this.selectedWallet=t,this.showInput=!0)},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},setMaxArray:function(t){var e=this;t.forEach((function(t){e.maxArray.push(t.planMaximum),e.percentArray.push(t.planPercentage)}))},setPercentage:function(){Number(this.amount)<Number(this.maxArray[0])?this.percent=Number(this.percentArray[0]):Number(this.amount)>Number(this.maxArray[0])?this.percent=this.percentArray[1]:Number(this.amount)>Number(this.maxArray[1])&&(this.percent=this.percentArray[2])},setPendingWithdrawal:function(data){if(data.length>0){var t=0;return data.forEach((function(e){t+=e.pendingWithdrawal})),t}},proceedToWithdraw:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.onRequest=!0,""!=t.selectedWallet){e.next=4;break}return t.callResponse("Please Select Wallet to continue the withdrawal process.",!0),e.abrupt("return");case 4:if(!(t.selectedWallet.balance<t.amount)){e.next=7;break}return t.callResponse("Sorry, the selected wallet have insufficient fund for this transaction",!0),e.abrupt("return");case 7:if(""!=t.selectedWallet.walletAddress){e.next=10;break}return t.callResponse("Sorry, please set wallet address for this wallet.",!0),e.abrupt("return");case 10:return form={amount:t.amount,symbol:t.selectedWallet.symbol,transactionType:"withdrawal",username:t.user.username,user:t.user,planName:"Not Available",planDuration:0,walletName:t.selectedWallet.name,walletId:t.selectedWallet._id,time:(new Date).getTime()},e.prev=11,e.next=14,t.$axios.post("/transactions",form);case 14:e.sent,t.callResponse("The withdrawal is pending and will be approved after confirmation",!1),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),console.log(e.t0.response.data.message);case 21:case"end":return e.stop()}}),e,null,[[11,18]])})))()},getWallets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.currentUser.username));case 3:n=e.sent,t.wallets=t.checkItems(n.data.data),t.pendingWithdrawal=t.setPendingWithdrawal(n.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,t.getWallets(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getUser()},computed:{FILE_URL:function(){return this.$store.state.fileURL},currentUser:function(){return this.$store.state.auth.user}},components:{DashboardNavigation:n(330).default,DashboardHeader:c.default,DashboardFooter:o.default}},d=(n(404),n(56)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"deposit-holde"},[e("div",{staticClass:"deposit"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"account"},[t._m(1),t._v(" "),e("div",{staticClass:"account-card"},[e("div",{staticClass:"top-card-one"},[e("div",{staticClass:"circle-bg"},[e("div",{staticClass:"middle-holder"},[e("div",{staticClass:"middle-side-content"},[t._m(2),t._v(" "),e("div",{staticClass:"sub-text-holder"},[e("div",{staticClass:"plan-heading sm"},[t._v("\n                      $"+t._s(t.formatMoney(Number(t.user.totalBalance).toFixed(2)))+"\n                      USD\n                    ")])])]),t._v(" "),t._m(3)])])]),t._v(" "),e("div",{staticClass:"top-card-one"},[e("div",{staticClass:"circle-bg"},[e("div",{staticClass:"middle-holder"},[e("div",{staticClass:"middle-side-content"},[t._m(4),t._v(" "),e("div",{staticClass:"sub-text-holder"},[e("div",{staticClass:"plan-heading sm"},[t._v("\n                      $"+t._s(t.formatMoney(Number(t.pendingWithdrawal).toFixed(2)))+"\n                    ")])])]),t._v(" "),t._m(5)])])])]),t._v(" "),e("div",{staticClass:"other-card-holder"},t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"each-other-card",class:{active:n.checked},on:{click:function(e){return t.selectWallet(n)}}},[e("div",{staticClass:"img-other"},[e("img",{staticClass:"account-bitcoin",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("nuxt-link",{staticClass:"w-inline-block",attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-36",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/643bfe657467a16ed74d14fc_edit-pen-icon%20(1)%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"other-inside-middle pading"},[t._m(6,!0),t._v(" "),e("div",{staticClass:"other-middle-text"},[e("div",{staticClass:"pay-header"},[t._v("\n                  $"+t._s(t.formatMoney(Number(n.balance).toFixed(2)))+" USD\n                ")])])]),t._v(" "),e("div",{staticClass:"other-white-line"}),t._v(" "),e("div",{staticClass:"other-inside-middle"},[t._m(7,!0),t._v(" "),e("div",{staticClass:"other-middle-text"},[e("div",{staticClass:"pay-header"},[t._v("\n                  $"+t._s(t.formatMoney(Number(n.pendingWithdrawal).toFixed(2)))+"\n                  USD\n                ")])])])],1)})),0),t._v(" "),e("div",{staticClass:"account-buttom-content"},[t._m(8),t._v(" "),t._m(9),t._v(" "),e("div",{staticClass:"account-payment-input"},[e("div",{staticClass:"payment-input-form"},[e("div",{staticClass:"payment-form w-form"},[e("div",[e("div",{staticClass:"hold-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"text-field w-input",attrs:{type:"number",maxlength:"256"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"erro-holder"},[t.showResponse?e("div",{staticClass:"erro-text",class:{error:t.isError}},[t._v("\n                      "+t._s(t.response)+"\n                    ")]):t._e()]),t._v(" "),t.onRequest?e("div",{staticClass:"custom-btn processing"},[e("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Processing")])]):e("span",{staticClass:"custom-btn w-button",on:{click:t.proceedToWithdraw}},[t._v("Withdraw")])])])])])])])],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"account-top-header"},[t("h1",{staticClass:"main-heading"},[this._v("Withdrawal funds")])])},function(){var t=this._self._c;return t("div",{staticClass:"account-subtext-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("ACCOUNT STATISTICS")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-heading-holder"},[t("h1",{staticClass:"plan-heading card-header"},[this._v("Total Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"thick-header-holder"},[t("img",{staticClass:"account-topicon-1",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432a9798e9cf5a7506b6a92_bank-deposit-icon%201.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"sub-heading-holder"},[t("h1",{staticClass:"plan-heading card-header"},[this._v("\n                      pending withdrawal\n                    ")])])},function(){var t=this._self._c;return t("div",{staticClass:"thick-header-holder"},[t("img",{staticClass:"account-topicon-two",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432acb43030fd0243cf3bcb_dollar-money-bag-icon%201.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"other-middle-header"},[t("h1",{staticClass:"sub-heading"},[this._v("Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"other-middle-header"},[t("h1",{staticClass:"sub-heading"},[this._v("Pending Withdrawal")])])},function(){var t=this._self._c;return t("div",{staticClass:"account-button-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Select Payment")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-buttom-cover"},[e("img",{staticClass:"select-cover-arrow",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432920fe2d057d532fa6d87_white-arrow.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"sub-heading"},[t._v("Select from the balance")])])}],!1,null,null,null);e.default=component.exports}}]);