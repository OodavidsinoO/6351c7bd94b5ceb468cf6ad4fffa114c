(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0954":function(t,i,a){"use strict";a.r(i);var e=a("e291"),s=a("0c18");for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("f860");var o,l=a("f0c5"),c=Object(l["a"])(s["default"],e["b"],e["c"],!1,null,"21ebd28d",null,!1,e["a"],o);i["default"]=c.exports},"0c18":function(t,i,a){"use strict";a.r(i);var e=a("da06"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},"683e":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".swiper-container[data-v-21ebd28d]{min-height:44vw}",""]),t.exports=i},d10c:function(t,i,a){var e=a("683e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("b040c6bc",e,!0,{sourceMap:!1,shadowMode:!1})},da06:function(t,i,a){"use strict";var e=a("4ea4");a("4e82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("96cf");var s=e(a("1da1")),n=(e(a("5438")),e(a("67c6"))),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,status:"none",is_coupon:!1,IOSsharebox:!1,ANDsharebox:!1,scrollLeft:0,nineCindex:0,nineCid:-1,nineOpCategories:[],subCategories:[],nineGoods:[],catalogues:[],pageId:1,tuijian:[]}},onLoad:function(){this.getCouponSetting(),this.getCatalogues(),this.getNineOpCategories(),this.getNineOpGoodsList()},onReady:function(){},onPullDownRefresh:function(){this.getCatalogues(),this.getNineOpCategories(),this.getNineOpGoodsList(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},onReachBottom:function(){"noMore"!=this.status&&(this.status="loading",this.getNineOpGoodsList(!1))},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},showAPPads:function(){"ios"==uni.getSystemInfoSync().platform?this.IOSsharebox=!0:this.ANDsharebox=!0},goPlayStore:function(){window.open("https://android.tbsave.money")},goUrl:function(t){var i=t.currentTarget.dataset.url;uni.navigateTo({url:i})},getCouponSetting:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,n.default.couponSetting();case 2:t.is_coupon=i.sent;case 3:case"end":return i.stop()}}),i)})))()},closeBox:function(){this.IOSsharebox=!1,this.ANDsharebox=!1},getCatalogues:function(){var t=this;n.default.topicCatalogue().then((function(i){var a=[];if(0===i.code){var e=i.data.sort((function(t,i){return.5-Math.random()}));for(var s in e){var n=i.data[s];n.banner.length>0&&a.push(n)}}t.catalogues=a}))},nineOpCategoryTap:function(t){var i=t.currentTarget.dataset.index,a=t.currentTarget.dataset.id;this.scrollLeft=60*(i-1),this.nineCindex=i,this.cid=a,this.pageId=1,this.status="loading",this.getNineOpGoodsList()},getNineOpGoodsList:function(){var t=this,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.nineGoods=i?[]:this.nineGoods,n.default.getGoodsList({cids:this.cid,pageId:this.pageId}).then((function(i){if(0===i.code){var a=i.data.list.sort((function(t,i){return.5-Math.random()}));if(a.length>0){for(var e in a)t.nineGoods.push(a[e]);t.pageId++,t.status="none"}else t.status="noMore"}}))},getNineOpCategories:function(){this.nineOpCategories=[{id:null,name:"精選"},{id:1,name:"女装"},{id:2,name:"母嬰"},{id:3,name:"美妝"},{id:4,name:"居家日用"},{id:5,name:"鞋品"},{id:6,name:"美食"},{id:7,name:"文娛車品"},{id:8,name:"數碼電器"},{id:9,name:"男裝"},{id:10,name:"內衣"},{id:11,name:"箱包"},{id:12,name:"配飾"},{id:13,name:"户外運動"},{id:14,name:"家俬"}]}}};i.default=o},e291:function(t,i,a){"use strict";a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var e={uniLoadMore:a("5795").default},s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"bg-gradual-pink",style:"padding-top:"+t.StatusBar+"px;"},[a("v-uni-view",{staticClass:"cu-bar search"},[a("v-uni-view",{staticClass:"search-form radius"},[a("v-uni-text",{staticClass:"cuIcon-search"}),a("v-uni-input",{attrs:{"data-url":"/pages/classify/index","adjust-position":!1,placeholder:"輸入商品名或貼上商品標題搜索 🧡",disabled:"disabled"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"action",attrs:{"data-url":"/pages/classify/index"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-searchlist"})],1)],1)],1),a("v-uni-view",{staticClass:"swiper-main-imgs margin-lr-xs margin-tb-xs"},[a("v-uni-swiper",{staticClass:"swiper-container",attrs:{autoplay:!0,interval:4e3,circular:!0,"indicator-dots":!0,"indicator-active-color":"#91feff","indicator-color":"#FFFFFF"}},[t._l(t.catalogues,(function(i,e){return[a("v-uni-swiper-item",{key:e+"_0",staticClass:"swiper-wrapper",attrs:{"data-url":"/pages/nine/catalogue?topicId="+i.topicId+"&name="+i.topicName},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"is-response response radius",attrs:{"lazy-load":!0,src:i.banner[0],mode:"widthFix"}})],1)]}))],2)],1),a("v-uni-view",{staticClass:"bg-white margin-bottom-xs"},[a("v-uni-view",{staticClass:"flex solid-bottom"},[a("v-uni-view",{staticClass:"flex-sub solid-right"},[a("v-uni-view",{staticClass:"bg-img flex align-center",staticStyle:{"background-image":"url('https://img.alicdn.com/imgextra/i1/2053469401/O1CN01DKsIHJ2JJi0Bt78I3_!!2053469401.jpg')",height:"200rpx"},attrs:{"data-url":"/pages/classify/nine"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:" padding-bottom-xl"},[a("v-uni-view",{staticClass:"padding-left-sm text-lg text-pink"},[t._v("9個9包郵精選")]),a("v-uni-view",{staticClass:"padding-left-sm text-sm text-gray"},[t._v("十蚊封頂")])],1)],1)],1),a("v-uni-view",{staticClass:"flex-sub"},[a("v-uni-view",{staticClass:"grid text-center col-2"},[a("v-uni-view",{staticClass:"solid-right",attrs:{"data-url":"/pages/nine/list?subcid=117943&name=鮮果時光"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"bg-img flex align-center",staticStyle:{"background-image":"url('https://img.alicdn.com/imgextra/i1/2053469401/O1CN01mZcTK02JJi0LuUxnJ_!!2053469401.jpg')",height:"200rpx"}},[a("v-uni-view",{staticClass:"padding-bottom-xl"},[a("v-uni-view",{staticClass:"text-orange padding-left-sm text-lg text-left"},[t._v("鮮果時光")]),a("v-uni-view",{staticClass:"padding-left-sm text-sm text-gray text-left"},[t._v("補充維C")])],1)],1)],1),a("v-uni-view",{staticClass:"solid-right",attrs:{"data-url":"/pages/nine/list?subcid=8409&name=休閒零食"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"bg-img flex align-center",staticStyle:{"background-image":"url('https://img.alicdn.com/imgextra/i1/2053469401/O1CN01OdcVs42JJi0psQkwy_!!2053469401.jpg')",height:"200rpx"}},[a("v-uni-view",{staticClass:"padding-bottom-xl"},[a("v-uni-view",{staticClass:"text-orange padding-left-sm text-lg text-olive"},[t._v("休閒零食")]),a("v-uni-view",{staticClass:"padding-left-sm text-sm text-gray text-left"},[t._v("🍔 🍟 🌭")])],1)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"flex-sub solid-right"},[a("v-uni-view",{staticClass:"bg-img flex align-center",staticStyle:{"background-image":"url('https://img.alicdn.com/imgextra/i2/2053469401/O1CN019KHY9k2JJi0Bt8k5B_!!2053469401.jpg')",height:"200rpx"},attrs:{"data-url":"/pages/classify/nineteen"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:" padding-bottom-xl"},[a("v-uni-view",{staticClass:"padding-left-sm text-lg text-red"},[t._v("19.9蚊專區")]),a("v-uni-view",{staticClass:"padding-left-sm text-sm text-gray"},[t._v("半價搶到顛咗")])],1)],1)],1),a("v-uni-view",{staticClass:"flex-sub"},[a("v-uni-view",{staticClass:"grid text-center col-2"},[a("v-uni-view",{staticClass:"solid-right",attrs:{"data-url":"/pages/nine/list?subcid=117947&name=杯子控"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"bg-img flex align-center",staticStyle:{"background-image":"url('https://img.alicdn.com/imgextra/i1/2053469401/O1CN01stGnhq2JJi0giLh4R_!!2053469401.jpg')",height:"200rpx"}},[a("v-uni-view",{staticClass:"padding-bottom-xl"},[a("v-uni-view",{staticClass:"text-cyan padding-left-sm text-lg text-left"},[t._v("杯子控")]),a("v-uni-view",{staticClass:"padding-left-sm text-sm text-gray text-left"},[t._v("一日8杯水")])],1)],1)],1),a("v-uni-view",{staticClass:"solid-right",attrs:{"data-url":"/pages/nine/list?subcid=86700&name=户外運動"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"bg-img flex align-center",staticStyle:{"background-image":"url('https://img.alicdn.com/imgextra/i3/2053469401/O1CN01etq6vr2JJi0ohfjwb_!!2053469401.jpg')",height:"200rpx"}},[a("v-uni-view",{staticClass:"padding-bottom-xl"},[a("v-uni-view",{staticClass:"text-purple padding-left-sm text-lg text-left"},[t._v("户外運動")]),a("v-uni-view",{staticClass:"padding-left-sm text-sm text-gray text-left"},[t._v("🔥 🔥 🔥")])],1)],1)],1)],1)],1)],1)],1),a("v-uni-scroll-view",{staticClass:"bg-white nav nine-op-categories",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.nineOpCategories,(function(i,e){return a("v-uni-view",{key:e,staticClass:"cu-item",class:t.nineCindex==e?"text-bold text-red cur":"",attrs:{"data-index":e,"data-id":i.id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nineOpCategoryTap.apply(void 0,arguments)}}},[t._v(t._s(i.name))])})),1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"grid col-2"},t._l(t.nineGoods,(function(i,e){return a("v-uni-view",{key:e,staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"bg-white",attrs:{"data-url":"/pages/index/detail?id="+i.id+"&goodsId="+i.goodsId,"data-id":i.id,"data-goodsid":i.goodsId},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUrl.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-image",{attrs:{"lazy-load":!0,src:i.mainPic||i.marketingMainPic}})],1),a("v-uni-view",{staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"response"},[a("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==i.shopType?"bg-gradual-red":"bg-gradual-orange"},[t._v(t._s(1==i.shopType?"天貓":"淘寶"))]),a("br"),t._v(t._s(i.dtitle))],1),a("hr",{staticStyle:{"border-top":"2px dashed","margin-top":"5%","margin-bottom":"3%"}}),t.is_coupon?a("v-uni-view",{staticClass:"flex-sub"},[t._v("優惠價"),a("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[t._v(t._s(i.actualPrice))]),a("br"),t._v("約為港紙"),a("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[t._v(t._s(Math.round(1.2*i.actualPrice))+" 蚊")]),a("v-uni-view",{staticClass:"text-sm"},[t._v("原價"),a("v-uni-text",{staticClass:"text-price margin-left-xs text-bold"},[a("strike",[t._v(t._s(i.originalPrice))])],1),a("v-uni-view",{staticClass:"cu-capsule radius flex-sub",staticStyle:{float:"right"}},[a("v-uni-view",{staticClass:"cu-tag bg-red sm"},[t._v("慳咗")]),a("v-uni-view",{staticClass:"cu-tag line-red sm"},[t._v("￥ "+t._s(i.couponPrice))])],1)],1)],1):t._e()],1)],1)],1)})),1)],1),a("uni-load-more",{attrs:{iconType:"circle",status:t.status}}),a("v-uni-view",{staticClass:"radius",staticStyle:{"font-size":"30px",background:"rgba(0, 0, 0, 0.5)","z-index":"999",position:"fixed",right:"30px",bottom:"80px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-top text-white"})],1),a("v-uni-view",{staticClass:"cu-modal",class:t.IOSsharebox?"show":""},[a("v-uni-view",{staticClass:"cu-dialog  bg-white"},[a("v-uni-view",{staticClass:"cu-bar justify-end"},[a("v-uni-view",{staticClass:"content"},[t._v("✨ 添加到桌面 ✨")]),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closeBox.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticStyle:{"font-size":"1.3rem"}},[a("font",[t._v("由於本App暫未有IOS版本")]),a("br"),a("font",[t._v("請點擊下方工具列上的"),a("v-uni-image",{staticStyle:{height:"1.8rem"},attrs:{mode:"heightFix",src:"/static/img/ios-up.png"}})],1),a("br"),a("font",[t._v("並選擇"),a("v-uni-image",{staticStyle:{height:"1.8rem"},attrs:{mode:"heightFix",src:"/static/img/ios-addtohome.png"}}),t._v("「加至主畫面」")],1),a("br"),a("v-uni-image",{staticStyle:{width:"120%",height:"auto",display:"block",margin:"0 auto","margin-top":"10px"},attrs:{mode:"widthFix",src:"/static/img/ios-addtohome-screenshot.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:t.ANDsharebox?"show":""},[a("v-uni-view",{staticClass:"cu-dialog  bg-white"},[a("v-uni-view",{staticClass:"cu-bar justify-end"},[a("v-uni-view",{staticClass:"content"},[t._v("✨ Android版本 ✨")]),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closeBox.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticStyle:{"font-size":"1.3rem"}},[a("font",[t._v("宜家 慳多D 可以喺Google Play下載")]),a("br"),a("font",[t._v("快D去Down黎玩下 la~")]),a("br"),a("v-uni-image",{staticStyle:{"max-width":"10rem",margin:"0 auto","margin-top":"10px","border-radius":"30px"},attrs:{mode:"widthFix",src:"/static/img/App_1024x1024.png"}}),a("v-uni-view",{staticClass:"flex padding-bottom-sm"},[a("v-uni-button",{staticClass:"cu-btn bg-red margin-top-sm lg",staticStyle:{"margin-left":"auto","margin-right":"auto","min-width":"40%"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPlayStore.apply(void 0,arguments)}}},[t._v("立即下載 ⬇️")])],1)],1)],1)],1)],1)},n=[]},f860:function(t,i,a){"use strict";var e=a("d10c"),s=a.n(e);s.a}}]);