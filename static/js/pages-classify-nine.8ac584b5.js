(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-classify-nine"],{2123:function(t,i,e){"use strict";var s=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var a=s(e("1da1")),n=(s(e("5438")),s(e("67c6"))),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,is_coupon:!1,goods:[],status:"none",pageId:1}},onPullDownRefresh:function(){this.getCouponSetting(),this.getGoods(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},onLoad:function(t){this.getCouponSetting(),this.getGoods()},onReachBottom:function(){"noMore"!=this.status&&(this.status="loading",this.getGoods(!1))},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},goUrl:function(t){var i=t.currentTarget.dataset.url;uni.navigateTo({url:i})},getGoods:function(){var t=this,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e={pageId:this.pageId,priceUpperLimit:9};this.goods=i?[]:this.goods,n.default.getGoodsList(e).then((function(i){if(0===i.code){var e=i.data,s=e.list;for(var a in s)t.goods.push(s[a]);t.pageId++,t.status="none"}else t.status="noMore"}))},goDetailClick:function(t){var i=t.currentTarget.dataset.id,e=t.currentTarget.dataset.goodsid;uni.navigateTo({url:"/pages/index/detail?id="+i+"&goodsId="+e})},getCouponSetting:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,n.default.couponSetting();case 2:t.is_coupon=i.sent;case 3:case"end":return i.stop()}}),i)})))()}}};i.default=o},"21ef":function(t,i,e){"use strict";e.r(i);var s=e("2123"),a=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);i["default"]=a.a},"81bb":function(t,i,e){"use strict";e.r(i);var s=e("f6e7"),a=e("21ef");for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);var o,u=e("f0c5"),r=Object(u["a"])(a["default"],s["b"],s["c"],!1,null,"b6668c94",null,!1,s["a"],o);i["default"]=r.exports},f6e7:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return s}));var s={uniLoadMore:e("5795").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("上一頁")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("9個9包郵精選")])],2),e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"cu-bar search"},[e("v-uni-view",{staticClass:"search-form radius"},[e("v-uni-text",{staticClass:"cuIcon-search"}),e("v-uni-input",{attrs:{"data-url":"/pages/classify/index","adjust-position":!1,placeholder:"輸入商品名或貼上商品標題搜索 🧡"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"box-goods bg-white"},[e("v-uni-view",{staticClass:"content-goods"},[e("v-uni-view",{staticClass:"grid col-2"},t._l(t.goods,(function(i,s){return e("v-uni-view",{key:s,staticClass:"padding-xs"},[e("v-uni-view",{staticClass:"bg-white",attrs:{"data-id":i.id,"data-goodsid":i.goodsId},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetailClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-image",{attrs:{src:i.mainPic||i.marketingMainPic}})],1),e("v-uni-view",{staticClass:"padding-xs"},[e("v-uni-view",{staticClass:"response"},[e("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==i.shopType?"bg-gradual-red":"bg-gradual-orange"},[t._v(t._s(1==i.shopType?"天貓":"淘寶"))]),t._v(t._s(i.dtitle))],1),e("hr",{staticStyle:{"border-top":"2px dashed","margin-top":"5%","margin-bottom":"3%"}}),t.is_coupon?e("v-uni-view",{staticClass:"flex-sub"},[t._v("優惠價"),e("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[t._v(t._s(i.actualPrice))]),e("br"),t._v("約為港紙"),e("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[t._v(t._s(Math.round(1.2*i.actualPrice))+" 蚊")]),e("v-uni-view",{staticClass:"text-sm"},[t._v("原價"),e("v-uni-text",{staticClass:"text-price margin-left-xs text-bold"},[e("strike",[t._v(t._s(i.originalPrice))])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0!==i.couponPrice,expression:"item.couponPrice !== 0"}],staticClass:"cu-capsule radius flex-sub",staticStyle:{float:"right"}},[e("v-uni-view",{staticClass:"cu-tag bg-red sm"},[t._v("慳咗")]),e("v-uni-view",{staticClass:"cu-tag line-red sm"},[t._v("￥ "+t._s(i.couponPrice))])],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"response"},[e("v-uni-text",{staticClass:"cu-tag text-gray sm"},[t._v("本月賣咗 "+t._s(i.monthSales)+" 件")])],1)],1)],1)],1)})),1)],1)],1),e("uni-load-more",{attrs:{iconType:"circle",status:t.status}}),e("v-uni-view",{staticClass:"radius",staticStyle:{"font-size":"30px",background:"rgba(0, 0, 0, 0.5)","z-index":"999",position:"fixed",right:"30px",bottom:"80px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-top text-white"})],1)],1)},n=[]}}]);