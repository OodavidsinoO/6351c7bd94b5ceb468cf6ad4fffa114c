(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-history-index"],{"0770":function(t,i,a){"use strict";a.r(i);var s=a("943e"),e=a("50f2");for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);var o,r=a("f0c5"),c=Object(r["a"])(e["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);i["default"]=c.exports},"50f2":function(t,i,a){"use strict";a.r(i);var s=a("8b2f"),e=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);i["default"]=e.a},"8b2f":function(t,i,a){"use strict";var s=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;s(a("5438")),s(a("67c6"));var e={data:function(){return{goods:[]}},onLoad:function(){this.loadHistory()},onReady:function(){setInterval(this.loadHistory,1e3)},onPullDownRefresh:function(){this.loadHistory(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},goUrl:function(t){var i=t.currentTarget.dataset.url;uni.navigateTo({url:i})},loadHistory:function(){try{this.goods=uni.getStorageSync("history")}catch(t){this.goods=[]}},goDetailClick:function(t){var i=t.currentTarget.dataset.id,a=t.currentTarget.dataset.goodsid;uni.navigateTo({url:"/pages/index/detail?id="+i+"&goodsId="+a})}}};i.default=e},"943e":function(t,i,a){"use strict";var s;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return s}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"bg-gradual-pink",style:"padding-top:"+t.StatusBar+"px;"},[a("v-uni-view",{staticClass:"cu-bar search"},[a("v-uni-view",{staticClass:"search-form radius"},[a("v-uni-text",{staticClass:"cuIcon-search"}),a("v-uni-input",{attrs:{"data-url":"/pages/classify/index","adjust-position":!1,placeholder:"輸入商品名或貼上商品標題搜索 🧡"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"action",attrs:{"data-url":"/pages/classify/index"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-searchlist"})],1)],1)],1),a("v-uni-view",{staticClass:"box-step bg-white margin-top-sm padding-lr-sm padding-bottom-sm"},[a("v-uni-view",{staticClass:"cu-bar margin-top-xs"},[a("v-uni-view",{staticClass:"action text-shadow text-pink",staticStyle:{margin:"0 auto","font-size":"1.5em"}},[a("v-uni-text",{staticClass:"cuIcon-more",staticStyle:{"margin-right":"0.5em"}}),t._v("⭐ 瀏覽歷史 ⭐"),a("v-uni-text",{staticClass:"cuIcon-more"})],1)],1),a("hr",{staticClass:"text-pink",staticStyle:{"border-top":"2px dashed","margin-bottom":"3%"}})],1),a("v-uni-view",{staticClass:"box-goods bg-white"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"grid col-2"},t._l(t.goods,(function(i,s){return a("v-uni-view",{key:s,staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"bg-white",attrs:{"data-id":i.id,"data-goodsid":i.goodsId},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetailClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-image",{staticStyle:{width:"100%"},attrs:{mode:"aspectFill","lazy-load":!0,src:i.mainPic||i.marketingMainPic}})],1),a("v-uni-view",{staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"response"},[a("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==i.shopType?"bg-gradual-red":"bg-gradual-orange"},[t._v(t._s(1==i.shopType?"天貓":"淘寶"))]),t._v(t._s(i.title))],1),a("hr",{staticStyle:{"border-top":"2px dashed","margin-top":"5%","margin-bottom":"3%"}}),a("v-uni-view",{staticClass:"flex-sub"},[t._v("優惠價"),a("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[t._v(t._s(i.actualPrice))]),a("br"),t._v("約為港紙"),a("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[t._v(t._s(Math.round(1.2*i.actualPrice))+" 蚊")]),a("v-uni-view",{staticClass:"text-sm"},[t._v("原價"),a("v-uni-text",{staticClass:"text-price margin-left-xs text-bold"},[a("strike",[t._v(t._s(i.originalPrice))])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0!==i.couponPrice,expression:"item.couponPrice !== 0"}],staticClass:"cu-capsule radius flex-sub",staticStyle:{float:"right"}},[a("v-uni-view",{staticClass:"cu-tag bg-red sm"},[t._v("慳咗")]),a("v-uni-view",{staticClass:"cu-tag line-red sm"},[t._v("￥ "+t._s(i.couponPrice))])],1)],1)],1),a("v-uni-view",{staticClass:"response"},[a("v-uni-text",{staticClass:"text-gray sm"},[t._v("本月賣咗 "+t._s(i.monthSales)+" 件")])],1)],1)],1)],1)})),1)],1)],1)],1)},n=[]}}]);