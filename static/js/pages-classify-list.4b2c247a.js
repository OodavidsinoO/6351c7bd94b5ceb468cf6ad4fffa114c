(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-classify-list"],{"19d8":function(t,s,i){"use strict";i.r(s);var a=i("5c13"),e=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(s,t,(function(){return a[t]}))}(n);s["default"]=e.a},"398f":function(t,s,i){"use strict";i.d(s,"b",(function(){return e})),i.d(s,"c",(function(){return n})),i.d(s,"a",(function(){return a}));var a={uniLoadMore:i("5795").default},e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("上一頁")]),"clean"==t.skin?i("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.kwt))]):i("template",{attrs:{slot:"content"},slot:"content"},[t._v("關鍵詞「"+t._s(t.kwt)+"」")])],2),"clean"==t.skin?i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-view",{staticClass:"cu-bar search"},[i("v-uni-view",{staticClass:"search-form radius"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{"data-url":"/pages/classify/index","adjust-position":!1,placeholder:"輸入商品名或貼上商品標題搜索 🧡"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goUrl.apply(void 0,arguments)}}})],1)],1)],1):i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-view",{staticClass:"cu-bar search"},[i("v-uni-view",{staticClass:"search-form radius"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{"data-url":"/pages/classify/index",value:t.kw,"adjust-position":!1,disabled:"disabled",placeholder:"輸入商品名或貼上商品標題搜索 🧡","confirm-type":"search"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goUrl.apply(void 0,arguments)},input:function(s){arguments[0]=s=t.$handleEvent(s),t.kwInputHandle.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"action",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goSearch.apply(void 0,arguments)}}},[t._v("尋找")])],1)],1),i("v-uni-view",{staticClass:"box-goods bg-white"},["clean"!=t.skin?i("v-uni-scroll-view",{staticClass:"bg-white nav text-center",staticStyle:{"border-bottom":"#DDDDDD 1px solid"},attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"cu-item",class:"rq"==t.sort?"text-pink cur":"",attrs:{"data-sort":"rq"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.tabSortHandle.apply(void 0,arguments)}}},[t._v("人氣")]),i("v-uni-view",{staticClass:"cu-item",class:"total_sales"==t.sort?"text-pink cur":"",attrs:{"data-sort":"total_sales"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.tabSortHandle.apply(void 0,arguments)}}},["total_sales"==t.sort?i("v-uni-text",{class:"_des"==t.order?"cuIcon-triangledownfill":"cuIcon-triangleupfill"},[t._v("銷量")]):i("v-uni-text",[t._v("銷量")])],1),i("v-uni-view",{staticClass:"cu-item",class:"price"==t.sort?"text-pink cur":"",attrs:{"data-sort":"price"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.tabSortHandle.apply(void 0,arguments)}}},["price"==t.sort?i("v-uni-text",{class:"_des"==t.order?"cuIcon-triangledownfill":"cuIcon-triangleupfill"},[t._v("價格")]):i("v-uni-text",[t._v("價格")])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-text",[t._v("僅顯示有優惠券商品：")]),i("v-uni-switch",{attrs:{color:"#E03997 !important"},on:{change:function(s){arguments[0]=s=t.$handleEvent(s),t.onlyCouponHandle.apply(void 0,arguments)}}})],1)],1):t._e(),i("v-uni-view",{staticClass:"content-goods"},[i("v-uni-view",{staticClass:"grid col-2"},t._l(t.goods,(function(s,a){return i("v-uni-view",{key:a,staticClass:"padding-xs"},[i("v-uni-view",{staticClass:"bg-white",attrs:{"data-id":s.id,"data-goodsid":s.goodsId},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goDetailClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-image",{attrs:{src:s.mainPic||s.marketingMainPic}})],1),i("v-uni-view",{staticClass:"padding-xs"},[i("v-uni-view",{staticClass:"response"},[i("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==s.shopType?"bg-gradual-red":"bg-gradual-orange"},[t._v(t._s(1==s.shopType?"天貓":"淘寶"))]),t._v(t._s(s.dtitle))],1),i("hr",{staticStyle:{"border-top":"2px dashed","margin-top":"5%","margin-bottom":"3%"}}),t.is_coupon?i("v-uni-view",{staticClass:"flex-sub"},[t._v("優惠價"),i("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[t._v(t._s(s.actualPrice))]),i("br"),t._v("約為港紙"),i("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[t._v(t._s(Math.round(1.2*s.actualPrice))+" 蚊")]),i("v-uni-view",{staticClass:"text-sm"},[t._v("原價"),i("v-uni-text",{staticClass:"text-price margin-left-xs text-bold"},[i("strike",[t._v(t._s(s.originalPrice))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0!==s.couponPrice,expression:"item.couponPrice !== 0"}],staticClass:"cu-capsule radius flex-sub",staticStyle:{float:"right"}},[i("v-uni-view",{staticClass:"cu-tag bg-red sm"},[t._v("慳咗")]),i("v-uni-view",{staticClass:"cu-tag line-red sm"},[t._v("￥ "+t._s(s.couponPrice))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"response"},[i("v-uni-text",{staticClass:"text-gray sm"},[t._v("本月賣咗 "+t._s(s.monthSales)+" 件")])],1)],1)],1)],1)})),1)],1)],1),i("uni-load-more",{attrs:{iconType:"circle",status:t.status}}),i("v-uni-view",{staticClass:"radius",staticStyle:{"font-size":"30px",background:"rgba(0, 0, 0, 0.5)","z-index":"999",position:"fixed",right:"30px",bottom:"80px"},on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goTop.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-top text-white"})],1)],1)},n=[]},"5c13":function(t,s,i){"use strict";(function(t){var a=i("4ea4");i("4e82"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,i("96cf");var e=a(i("1da1")),n=a(i("5438")),o=a(i("67c6")),c={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,is_coupon:!1,only_coupon:!1,goods:[],status:"none",kw:"",kwt:"",sort:"rq",order:"_des",skin:"default",pageId:1}},onLoad:function(t){n.default.isBlank(t.kw)||(this.kw=t.kw,this.kwt=t.kw),n.default.isBlank(t.skin)||(this.skin=t.skin),this.getCouponSetting(),this.getSearchGoods()},onPullDownRefresh:function(){this.getCouponSetting(),this.getSearchGoods(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},onReachBottom:function(){"noMore"!=this.status&&(this.status="loading",this.getSearchGoods(!1))},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},goUrl:function(t){var s=t.currentTarget.dataset.url;uni.navigateTo({url:s})},goSearch:function(){var t=this.kw;""!=t&&(this.kws=n.default.getKW(t),this.kwt=t,uni.navigateTo({url:"/pages/classify/list?kw="+t}))},tabSortHandle:function(t){var s=t.currentTarget.dataset.sort;"rq"!==s&&(this.order="_des"===this.order?"_asc":"_des"),this.sort=s,this.status="loading",this.getSearchGoods()},onlyCouponHandle:function(t){t.target.value?this.only_coupon=!0:this.only_coupon=!1,this.getSearchGoods()},kwInputHandle:function(t){var s=t.detail.value;this.kw=s},goDetailClick:function(t){var s=t.currentTarget.dataset.id,i=t.currentTarget.dataset.goodsid;uni.navigateTo({url:"/pages/index/detail?id="+s+"&goodsId="+i})},getSearchGoods:function(){var s=this,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a={pageId:this.pageId,keyWords:o.default.t2cn(this.kw)};"rq"!=this.sort&&(a.sort=this.sort+this.order),a.hasCoupon=this.only_coupon?1:null,t("log","data.hasCoupon"+this.only_coupon," at pages/classify/list.vue:191"),this.goods=i?[]:this.goods,o.default.listSuperGoods(a).then((function(t){if(0===t.code){var i=t.data,a=i.list;for(var e in a)s.goods.push(a[e]);s.pageId++,s.status="none"}else s.status="noMore"}))},getCouponSetting:function(){var t=this;return(0,e.default)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,o.default.couponSetting();case 2:t.is_coupon=s.sent;case 3:case"end":return s.stop()}}),s)})))()}}};s.default=c}).call(this,i("0de9")["log"])},e097:function(t,s,i){"use strict";i.r(s);var a=i("398f"),e=i("19d8");for(var n in e)"default"!==n&&function(t){i.d(s,t,(function(){return e[t]}))}(n);var o,c=i("f0c5"),r=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"f125c024",null,!1,a["a"],o);s["default"]=r.exports}}]);