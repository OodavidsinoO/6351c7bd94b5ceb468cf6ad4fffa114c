(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-classify-index"],{"20be":function(t,s,i){"use strict";i.r(s);var a=i("7f95"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(s,t,(function(){return a[t]}))}(n);s["default"]=e.a},"78bc":function(t,s,i){"use strict";i.r(s);var a=i("f821"),e=i("20be");for(var n in e)"default"!==n&&function(t){i.d(s,t,(function(){return e[t]}))}(n);var o,c=i("f0c5"),u=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"50ef4ed4",null,!1,a["a"],o);s["default"]=u.exports},"7f95":function(t,s,i){"use strict";var a=i("4ea4");i("4e82"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,i("96cf");var e=a(i("1da1")),n=a(i("5438")),o=a(i("67c6")),c={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,is_coupon:!1,hotWords:[],hotGoods:[],kws:[],kw:""}},onLoad:function(t){this.getCouponSetting(),this.getHotWords(),this.getHotGoods()},onShow:function(){this.kws=n.default.getKW()},onPullDownRefresh:function(){this.getCouponSetting(),this.getHotWords(),this.getHotGoods(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},methods:{goSearch:function(){var t=this.kw;""!=t&&(this.kws=n.default.getKW(t),uni.navigateTo({url:"/pages/classify/list?kw="+t}))},goSearch2:function(t){var s=t.currentTarget.dataset.kw;""!=s&&(this.kws=n.default.getKW(s),uni.navigateTo({url:"/pages/classify/list?kw="+s}))},clearnKW:function(){n.default.cleanKW()},kwInputHandle:function(t){var s=t.detail.value;this.kw=s},goDetailClick:function(t){var s=t.currentTarget.dataset.id;t.currentTarget.dataset.goodsid;uni.navigateTo({url:"/pages/index/detail?id="+s})},getHotGoods:function(){var t=this;o.default.getRankingList({rankType:6}).then((function(s){0===s.code&&(t.hotGoods=s.data)}))},getHotWords:function(){var t=this;o.default.getTop100().then((function(s){if(0===s.code){var i=s.data;t.hotWords=i.hotWords.sort((function(t,s){return.5-Math.random()}))}}))},getCouponSetting:function(){var t=this;return(0,e.default)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,o.default.couponSetting();case 2:t.is_coupon=s.sent;case 3:case"end":return s.stop()}}),s)})))()}}};s.default=c},f821:function(t,s,i){"use strict";var a;i.d(s,"b",(function(){return e})),i.d(s,"c",(function(){return n})),i.d(s,"a",(function(){return a}));var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("上一頁")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("淘寶天貓優惠券")])],2),i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-view",{staticClass:"cu-bar search"},[i("v-uni-view",{staticClass:"search-form radius"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{"adjust-position":!1,placeholder:"輸入商品名或貼上商品標題搜索 🧡"},on:{confirm:function(s){arguments[0]=s=t.$handleEvent(s),t.goSearch.apply(void 0,arguments)},input:function(s){arguments[0]=s=t.$handleEvent(s),t.kwInputHandle.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"action",attrs:{"data-kw":t.kw},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goSearch.apply(void 0,arguments)}}},[t._v("尋找")])],1)],1),t.is_coupon?i("v-uni-view",{staticClass:"box-step bg-white margin-top-sm padding-lr-sm padding-bottom-sm"},[i("v-uni-view",{staticClass:"cu-bar"},[i("v-uni-view",{staticClass:"text-black text-bold padding-lr"},[t._v("三步輕鬆獲取優惠券 😍")])],1),i("v-uni-image",{staticStyle:{display:"block",margin:"0 auto"},attrs:{mode:"heightFix",src:"/static/img/search-default.png"}}),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"flex-sub"},[i("v-uni-text",{staticClass:"cuIcon-shop bg-red round padding-xs"}),i("v-uni-text",{staticClass:"text-sm margin-left-xs"},[t._v("1. 進入淘寶")])],1),i("v-uni-view",{staticClass:"flex-sub"},[i("v-uni-text",{staticClass:"cuIcon-copy bg-red round padding-xs"}),i("v-uni-text",{staticClass:"text-sm margin-left-xs"},[t._v("2. 複製商品標題")])],1),i("v-uni-view",{staticClass:"flex-sub"},[i("v-uni-text",{staticClass:"cuIcon-ticket bg-red round padding-xs"}),i("v-uni-text",{staticClass:"text-sm margin-left-xs"},[t._v("3. 點擊尋找查詢")])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"box-history bg-white margin-top-sm"},[i("v-uni-view",{staticClass:"cu-bar"},[i("v-uni-view",{staticClass:"text-black text-bold padding-lr"},[t._v("歷史記錄")])],1),i("v-uni-view",{staticClass:"content-history margin-lr-xl padding-bottom-sm",staticStyle:{"border-bottom":"1px #CCCCCC solid !important"}},t._l(t.kws,(function(s,a){return i("v-uni-view",{key:a,staticClass:"cu-tag round margin-tb-xs",attrs:{"data-kw":s},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goSearch2.apply(void 0,arguments)}}},[t._v(t._s(s))])})),1),i("v-uni-view",{staticClass:"cu-bar"},[i("v-uni-view",{staticClass:"text-black text-bold padding-lr"},[t._v("你可能鐘意 ❤")])],1),i("v-uni-view",{staticClass:"content-discover padding-lr-xl padding-bottom-sm"},t._l(t.hotWords,(function(s,a){return a<10?i("v-uni-view",{key:a,staticClass:"cu-tag round margin-tb-xs",attrs:{"data-kw":s},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goSearch2.apply(void 0,arguments)}}},[t._v(t._s(s))]):t._e()})),1)],1),i("v-uni-view",{staticClass:"box-hotgoods bg-white margin-top-sm"},[i("v-uni-view",{staticClass:"cu-bar"},[i("v-uni-view",{staticClass:"text-black text-bold padding-lr"},[t._v("So Hot 商品 🌡")])],1),i("v-uni-view",{staticClass:"content-hotgoods"},t._l(t.hotGoods,(function(s,a){return i("v-uni-view",{key:a,staticClass:"padding-lr-xs bg-white",staticStyle:{"border-bottom":"#DDDDDD 1px solid !important"}},[i("v-uni-view",{staticClass:"bg-white padding-tb-sm",attrs:{"data-id":s.goodsList[0].id,"data-goodsid":s.goodsList[0].goodsId},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goDetailClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"basis-sm"},[i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-image",{staticClass:"response",attrs:{mode:"widthFix",src:s.goodsList[0].mainPic||s.goodsList[0].marketingMainPic}})],1)],1),i("v-uni-view",{staticClass:"basis-df"},[i("v-uni-view",{staticClass:"padding-lr-sm margin-0"},[i("v-uni-view",{staticClass:"response"},[i("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==s.goodsList[0].shopType?"bg-gradual-red":"bg-gradual-orange"},[t._v(t._s(1==s.goodsList[0].shopType?"天貓":"淘寶"))]),t._v(t._s(s.goodsList[0].dtitle))],1),i("v-uni-view",{staticClass:"margin-top"},[i("hr",{staticStyle:{"border-top":"2px dashed","margin-top":"5%","margin-bottom":"3%"}}),t.is_coupon?i("v-uni-view",{staticClass:"basis-df"},[t._v("優惠價"),i("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[t._v(t._s(s.goodsList[0].actualPrice))]),i("br"),t._v("約為港紙"),i("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[t._v(t._s(Math.round(1.2*s.goodsList[0].actualPrice))+" 蚊")])],1):t._e(),i("v-uni-view",{staticClass:"text-sm"},[t._v("原價"),i("v-uni-text",{staticClass:"text-price margin-left-xs text-bold"},[i("strike",[t._v(t._s(s.goodsList[0].originalPrice))])],1)],1),t.is_coupon?i("v-uni-view",{staticClass:"cu-capsule radius",staticStyle:{"margin-top":"2px"}},[i("v-uni-view",{staticClass:"cu-tag bg-red sm"},[t._v("慳咗")]),i("v-uni-view",{staticClass:"cu-tag line-red sm"},[t._v("￥ "+t._s(s.goodsList[0].couponPrice))])],1):t._e(),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"text-sm"},[t._v("今日賣咗: "+t._s(s.goodsList[0].dailySales)+" 件")])],1),i("v-uni-view",{staticStyle:{"margin-top":"2px"}},[i("v-uni-text",{staticClass:"text-sm"},[t._v("本月賣咗: "+t._s(s.goodsList[0].monthSales)+" 件")])],1)],1)],1)],1)],1)],1)],1)})),1)],1)],1)},n=[]}}]);