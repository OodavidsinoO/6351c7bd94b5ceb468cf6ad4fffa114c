(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-nine-list"],{"0c38":function(t,s,i){"use strict";i.r(s);var a=i("c80a"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(s,t,(function(){return a[t]}))}(n);s["default"]=e.a},"7bc6":function(t,s,i){"use strict";i.d(s,"b",(function(){return e})),i.d(s,"c",(function(){return n})),i.d(s,"a",(function(){return a}));var a={uniLoadMore:i("5795").default},e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("上一頁")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.subcat.name))])],2),i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-view",{staticClass:"cu-bar search"},[i("v-uni-view",{staticClass:"search-form radius"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{"data-url":"/pages/classify/index","adjust-position":!1,placeholder:"輸入商品名或貼上商品標題搜索 🧡"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goUrl.apply(void 0,arguments)}}})],1)],1)],1),i("v-uni-view",{staticClass:"box-goods bg-white"},[i("v-uni-view",{staticClass:"content-goods"},[i("v-uni-view",{staticClass:"grid col-2"},t._l(t.goods,(function(s,a){return i("v-uni-view",{key:a,staticClass:"padding-xs"},[i("v-uni-view",{staticClass:"bg-white",attrs:{"data-id":s.id,"data-goodsid":s.goodsId},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goDetailClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-image",{attrs:{src:s.mainPic||s.marketingMainPic}})],1),i("v-uni-view",{staticClass:"padding-xs"},[i("v-uni-view",{staticClass:"response"},[i("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==s.shopType?"bg-gradual-red":"bg-gradual-orange"},[t._v(t._s(1==s.shopType?"天貓":"淘寶"))]),t._v(t._s(s.dtitle))],1),i("hr",{staticStyle:{"border-top":"2px dashed","margin-top":"5%","margin-bottom":"3%"}}),t.is_coupon?i("v-uni-view",{staticClass:"flex-sub"},[t._v("優惠價"),i("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[t._v(t._s(s.actualPrice))]),i("br"),t._v("約為港紙"),i("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[t._v(t._s(Math.round(1.2*s.actualPrice))+" 蚊")]),i("v-uni-view",{staticClass:"text-sm"},[t._v("原價"),i("v-uni-text",{staticClass:"text-price margin-left-xs text-bold"},[i("strike",[t._v(t._s(s.originalPrice))])],1),i("v-uni-view",{staticClass:"cu-capsule radius flex-sub",staticStyle:{float:"right"}},[i("v-uni-view",{staticClass:"cu-tag bg-red sm"},[t._v("慳咗")]),i("v-uni-view",{staticClass:"cu-tag line-red sm"},[t._v("￥ "+t._s(s.couponPrice))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"response"},[i("v-uni-text",{staticClass:"cu-tag text-gray sm"},[t._v("本月賣咗 "+t._s(s.monthSales)+" 件")])],1)],1)],1)],1)})),1)],1)],1),i("uni-load-more",{attrs:{iconType:"circle",status:t.status}}),i("v-uni-view",{staticClass:"radius",staticStyle:{"font-size":"30px",background:"rgba(0, 0, 0, 0.5)","z-index":"999",position:"fixed",right:"30px",bottom:"80px"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goTop.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-top text-white"})],1)],1)},n=[]},c80a:function(t,s,i){"use strict";var a=i("4ea4");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,i("96cf");var e=a(i("1da1")),n=(a(i("5438")),a(i("67c6"))),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,is_coupon:!1,goods:[],status:"none",subcat:{},pageId:1}},onLoad:function(t){this.subcat=t,this.getCouponSetting(),this.getGoods()},onPullDownRefresh:function(){this.getCouponSetting(),this.getGoods(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},onReachBottom:function(){"noMore"!=this.status&&(this.status="loading",this.getGoods(!1))},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},goUrl:function(t){var s=t.currentTarget.dataset.url;uni.navigateTo({url:s})},getGoods:function(){var t=this,s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i={pageId:this.pageId,subcid:this.subcat.subcid};this.goods=s?[]:this.goods,n.default.getGoodsList(i).then((function(s){if(0===s.code){var i=s.data,a=i.list;for(var e in a)t.goods.push(a[e]);t.pageId++,t.status="none"}else t.status="noMore"}))},goDetailClick:function(t){var s=t.currentTarget.dataset.id,i=t.currentTarget.dataset.goodsid;uni.navigateTo({url:"/pages/index/detail?id="+s+"&goodsId="+i})},getCouponSetting:function(){var t=this;return(0,e.default)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,n.default.couponSetting();case 2:t.is_coupon=s.sent;case 3:case"end":return s.stop()}}),s)})))()}}};s.default=o},ddea:function(t,s,i){"use strict";i.r(s);var a=i("7bc6"),e=i("0c38");for(var n in e)"default"!==n&&function(t){i.d(s,t,(function(){return e[t]}))}(n);var o,u=i("f0c5"),c=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"7238fc96",null,!1,a["a"],o);s["default"]=c.exports}}]);