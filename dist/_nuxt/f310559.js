(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{314:function(e,t,n){"use strict";var r=n(2),o=n(3),c=n(59),f=n(215),l=n(214),d=n(4),v=RangeError,m=String,h=Math.floor,w=o(l),x=o("".slice),_=o(1..toFixed),k=function(e,t,n){return 0===t?n:t%2==1?k(e,t-1,n*e):k(e*e,t/2,n)},F=function(data,e,t){for(var n=-1,r=t;++n<6;)r+=e*data[n],data[n]=r%1e7,r=h(r/1e7)},N=function(data,e){for(var t=6,n=0;--t>=0;)n+=data[t],data[t]=h(n/e),n=n%e*1e7},y=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=m(data[e]);s=""===s?t:s+w("0",7-t.length)+t}return s};r({target:"Number",proto:!0,forced:d((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!d((function(){_({})}))},{toFixed:function(e){var t,n,r,o,l=f(this),d=c(e),data=[0,0,0,0,0,0],h="",_="0";if(d<0||d>20)throw v("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return m(l);if(l<0&&(h="-",l=-l),l>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(l*k(2,69,1))-69)<0?l*k(2,-t,1):l/k(2,t,1),n*=4503599627370496,(t=52-t)>0){for(F(data,0,n),r=d;r>=7;)F(data,1e7,0),r-=7;for(F(data,k(10,r,1),0),r=t-1;r>=23;)N(data,1<<23),r-=23;N(data,1<<r),F(data,1,1),N(data,2),_=y(data)}else F(data,0,n),F(data,1<<-t,0),_=y(data)+w("0",d);return _=d>0?h+((o=_.length)<=d?"0."+w("0",d-o)+_:x(_,0,o-d)+"."+x(_,o-d)):h+_}})},351:function(e,t,n){"use strict";n.r(t);n(314),n(212);var r=n(8),o=(n(48),n(20),n(37),n(13),n(91),n(26),n(38),{data:function(){return{savings:0,fixed:0,current:0,user:""}},methods:{formatMoney:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatDate:function(){var e=(new Date).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(e){return 1===e||21===e||31===e?"st":2===e||22===e?"nd":3===e||23===e?"rd":"th"}}).format(e)},checkAccounts:function(e){var t;return this.user.accounts.some((function(t){return t.name===e}))?(this.user.accounts.forEach((function(n){n.name==e&&(t=Number(n.balance).toFixed(2))})),t):0},getUser:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/users/get-user");case 3:n=t.sent,e.user=n.data.user,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},mounted:function(){this.getUser()}}),c=n(56),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"account-wrapper"},[t("h1",{staticClass:"balance-title"},[e._v("Your Savings Balance")]),e._v(" "),e.user.accounts[0]?t("h1",{staticClass:"balance"},[e._v("\n    $"+e._s(e.formatMoney(Number(e.user.accounts[0].balance).toFixed(2)))+"\n  ")]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);