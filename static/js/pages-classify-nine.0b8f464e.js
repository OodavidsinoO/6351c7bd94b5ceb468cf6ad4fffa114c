(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-classify-nine"],{"1f89":function(t,e,i){"use strict";i.r(e);var s=i("a12e"),a=i("8d01");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var o,u=i("f0c5"),r=Object(u["a"])(a["default"],s["b"],s["c"],!1,null,"1b6ada14",null,!1,s["a"],o);e["default"]=r.exports},"8d01":function(t,e,i){"use strict";i.r(e);var s=i("e540"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},a12e:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={uniLoadMore:i("890a").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-red",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("上一頁")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("9個9包郵精選")])],2),i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-view",{staticClass:"cu-bar search"},[i("v-uni-view",{staticClass:"search-form radius"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{"data-url":"/pages/classify/index","adjust-position":!1,placeholder:"輸入商品名或貼上商品標題搜索 🧡"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl.apply(void 0,arguments)}}})],1)],1)],1),i("v-uni-view",{staticClass:"box-goods bg-white"},[i("v-uni-view",{staticClass:"content-goods"},[i("v-uni-view",{staticClass:"grid col-2"},t._l(t.goods,(function(e,s){return i("v-uni-view",{key:s,staticClass:"padding-xs"},[i("v-uni-view",{staticClass:"bg-white",attrs:{"data-id":e.id,"data-goodsid":e.goodsId},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetailClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{mode:"widthFix","lazy-load":!0,src:e.mainPic||e.marketingMainPic}})],1),i("v-uni-view",{staticClass:"padding-xs"},[i("v-uni-view",{staticClass:"response"},[i("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==e.shopType?"bg-gradual-red":"bg-gradual-orange"},[t._v(t._s(1==e.shopType?"天貓":"淘寶"))]),t._v(t._s(e.title))],1),i("hr",{staticStyle:{"border-top":"2px dashed","margin-top":"5%","margin-bottom":"3%"}}),t.is_coupon?i("v-uni-view",{staticClass:"flex-sub"},[t._v("優惠價"),i("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[t._v(t._s(e.actualPrice))]),i("br"),t._v("約為港紙"),i("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[t._v(t._s(Math.round(1.2*e.actualPrice))+" 蚊")]),i("v-uni-view",{staticClass:"text-sm"},[t._v("原價"),i("v-uni-text",{staticClass:"text-price margin-left-xs text-bold"},[i("strike",[t._v(t._s(e.originalPrice))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0!==e.couponPrice,expression:"item.couponPrice !== 0"}],staticClass:"cu-capsule radius flex-sub",staticStyle:{float:"right"}},[i("v-uni-view",{staticClass:"cu-tag bg-red sm"},[t._v("慳咗")]),i("v-uni-view",{staticClass:"cu-tag line-red sm"},[t._v("￥ "+t._s(e.couponPrice))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"response"},[i("v-uni-text",{staticClass:"cu-tag text-gray sm"},[t._v("本月賣咗 "+t._s(e.monthSales)+" 件")])],1)],1)],1)],1)})),1)],1)],1),i("uni-load-more",{attrs:{iconType:"circle",status:t.status}}),i("v-uni-view",{staticClass:"radius",staticStyle:{"font-size":"30px",background:"rgba(0, 0, 0, 0.5)","z-index":"999",position:"fixed",right:"30px",bottom:"80px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goTop.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-top text-white"})],1)],1)},n=[]},e540:function(t,e,i){"use strict";var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=s(i("1da1")),n=(s(i("dcf0")),s(i("e70d"))),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,is_coupon:!1,goods:[],status:"none",pageId:1}},onPullDownRefresh:function(){this.getCouponSetting(),this.getGoods(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},onLoad:function(t){this.getCouponSetting(),this.getGoods()},onReachBottom:function(){"noMore"!=this.status&&(this.status="loading",this.getGoods(!1))},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},goUrl:function(t){var e=t.currentTarget.dataset.url;uni.navigateTo({url:e})},getGoods:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i={pageId:this.pageId,priceUpperLimit:9};this.goods=e?[]:this.goods,n.default.getGoodsList(i).then((function(e){if(0===e.code){var i=e.data,s=i.list;for(var a in s)t.goods.push(s[a]);t.pageId++,t.status="none"}else t.status="noMore"}))},goDetailClick:function(t){var e=t.currentTarget.dataset.id,i=t.currentTarget.dataset.goodsid;uni.navigateTo({url:"/pages/index/detail?id="+e+"&goodsId="+i})},getCouponSetting:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.default.couponSetting();case 2:t.is_coupon=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}};e.default=o}}]);