(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-detail"],{"53fb":function(n,t,i){"use strict";i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return s}));var s={uniLoadMore:i("5795").default},e=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("v-uni-view",{staticClass:"s-page-wrapper"},[s("v-uni-view",{},[s("v-uni-swiper",{staticClass:"swiper-container main-pic",attrs:{autoplay:!0,interval:4e3,circular:!0,"indicator-dots":!0,"indicator-active-color":"#FF5000","indicator-color":"#FFFFFF"}},[n._l(n.goods.imgs,(function(n,t){return[s("v-uni-swiper-item",{key:t+"_0",staticClass:"swiper-wrapper"},[s("v-uni-image",{staticClass:"is-response response",attrs:{"lazy-load":!0,src:n,mode:"widthFix"}})],1)]}))],2)],1),n.is_coupon?s("v-uni-view",{staticClass:"main-info margin-bottom-xs bg-white"},[s("v-uni-view",{staticClass:"response padding-lr padding-tb-sm"},[s("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==n.goods.shopType?"bg-gradual-red":"bg-gradual-orange"},[n._v(n._s(1==n.goods.shopType?"天貓":"淘寶"))]),s("br"),n._v(n._s(n.goods.title))],1),s("v-uni-view",{staticClass:"padding padding-bottom-sm"},[n._v("優惠價"),s("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[n._v(n._s(n.goods.actualPrice))]),s("br"),n._v("約為港紙"),s("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[n._v(n._s(Math.round(1.2*n.goods.actualPrice))+" 蚊")])],1),s("v-uni-view",{staticClass:"padding-left text-sm"},[n._v("原價"),s("v-uni-text",{staticClass:"text-price margin-left-xs"},[s("strike",[n._v(n._s(n.goods.originalPrice))])],1)],1),s("v-uni-view",{staticClass:"response flex padding-lr padding-tb-sm"},[s("v-uni-view",{staticClass:"flex-sub"},[s("v-uni-text",[n._v("✅ 大陸段包郵")]),1==n.goods.yunfeixian?s("v-uni-text",{staticClass:"margin-left-sm"},[n._v("✅ 運費險")]):n._e(),n.goods.hzQuanOver>0?s("v-uni-text",{staticClass:"margin-left-sm"},[n._v("✅ 購買立減")]):n._e()],1),s("v-uni-view",{staticClass:"flex-sub text-right"},[n._v("本月賣咗"),s("v-uni-text",{staticClass:"text-red"},[n._v(n._s(n.goods.monthSales))]),n._v("件")],1)],1),n.goods.couponPrice>0?s("v-uni-view",{staticClass:"coupon padding-left padding-right"},[s("v-uni-view",{staticClass:"padding-sm"},[s("v-uni-view",{staticClass:"bg-gradual-red padding radius-sm flex",attrs:{"data-goodsid":n.goods.goodsId},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goBuy.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"flex-sub"},[s("v-uni-view",{staticClass:"text-white margin-bottom-sm"},[n._v(n._s(n.goods.couponPrice)+" 蚊優惠券")]),s("v-uni-view",{staticClass:"text-white text-sm"},[n._v("開始日期:"),s("br"),n._v(n._s(n.goods.couponStartTime)),s("br"),n._v("過期日期:"),s("br"),n._v(n._s(n.goods.couponEndTime))])],1),s("v-uni-view",{staticClass:"flex-sub",staticStyle:{position:"relative"}},[s("v-uni-text",{staticClass:"cuIcon-ticket text-white",staticStyle:{position:"absolute","font-size":"150px",top:"-50px",right:"-20px"}})],1)],1)],1)],1):n._e(),""!==n.goods.desc?s("v-uni-view",{staticClass:"description padding-lr padding-tb-sm"},[n._v(n._s(n.goods.desc))]):n._e()],1):n._e(),s("v-uni-view",{staticClass:"shop-info margin-bottom-xs bg-white"},[s("v-uni-view",{staticClass:"padding-sm"},[s("v-uni-view",{staticClass:"padding-lr padding-top-xs radius-sm cf"},[s("v-uni-view",{staticClass:"action fl"},[""!==n.goods.shopLogo?s("v-uni-image",{staticClass:"margin-right-sm",staticStyle:{width:"50px"},attrs:{src:n.goods.shopLogo,mode:"widthFix"}}):s("v-uni-image",{staticClass:"margin-right-sm",staticStyle:{width:"50px"},attrs:{src:i("bc80"),mode:"widthFix"}})],1),s("v-uni-view",{staticClass:"content fl padding-top-xs"},[s("v-uni-view",[n._v(n._s(n.goods.shopName))]),s("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==n.goods.shopType?"bg-gradual-red":"bg-gradual-orange"},[n._v(n._s(1==n.goods.shopType?"天貓店鋪":"淘寶認證"))])],1)],1)],1),-1!==n.goods.dsrScore||-1!==n.goods.serviceScore||-1!==n.goods.shipScore?s("v-uni-view",{staticClass:"padding-sm flex"},[s("v-uni-view",{staticClass:"flex-sub"},[n._v("商品描述"),s("v-uni-text",{staticClass:"margin-left-sm"},[n._v(n._s(n.goods.dsrScore))]),s("v-uni-view",{staticClass:"cu-tag sm radius bg-gray"},[n._v(n._s(n.goods.dsrPercent>0?"高":0==n.goods.dsrPercent?"平":"低"))])],1),s("v-uni-view",{staticClass:"flex-sub"},[n._v("賣家服務"),s("v-uni-text",{staticClass:"margin-left-sm"},[n._v(n._s(n.goods.serviceScore))]),s("v-uni-view",{staticClass:"cu-tag sm radius bg-gray"},[n._v(n._s(n.goods.servicePercent>0?"高":0==n.goods.servicePercent?"平":"低"))])],1),s("v-uni-view",{staticClass:"flex-sub"},[n._v("物流服務"),s("v-uni-text",{staticClass:"margin-left-sm"},[n._v(n._s(n.goods.shipScore))]),s("v-uni-view",{staticClass:"cu-tag sm radius bg-gray"},[n._v(n._s(n.goods.shipPercent>0?"高":0==n.goods.shipPercent?"平":"低"))])],1)],1):n._e()],1),s("v-uni-view",{staticClass:"bg-white nav",attrs:{"scroll-with-animation":!0}},[s("v-uni-view",{staticClass:"cu-item",class:n.tabInfo?"text-bold text-red cur":"",staticStyle:{width:"33%","text-align":"center"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.tabSwapInfo.apply(void 0,arguments)}}},[n._v("商品詳情")]),s("v-uni-view",{staticClass:"cu-item",class:n.tabComments?"text-bold text-red cur":"",staticStyle:{width:"33%","text-align":"center"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.tabSwapComments.apply(void 0,arguments)}}},[n._v("用家評論")]),s("v-uni-view",{staticClass:"cu-item",class:n.tabInfo||n.tabComments?"":"text-bold text-red cur",staticStyle:{width:"auto","text-align":"center"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.tabHideAll.apply(void 0,arguments)}}},[n._v("估你鍾意")])],1),n.tabInfo?s("v-uni-view",{staticClass:"content-info margin-bottom-xs bg-white",staticStyle:{"margin-bottom":"50px"}},[s("v-uni-view",{staticClass:"imglist"},[n._l(n.goods.detailPics,(function(n,t){return[s("v-uni-image",{key:t+"_0",staticClass:"is-response response",staticStyle:{display:"block !important"},attrs:{"lazy-load":!0,src:n,mode:"widthFix"}})]}))],2)],1):n._e(),n.tabComments?s("v-uni-view",{staticClass:"uni-comment bg-white"},n._l(this.comments,(function(t,e){return s("v-uni-view",{key:e,staticClass:"uni-comment-list"},[s("v-uni-view",{staticClass:"uni-comment-face"},[""!==t.headPicUrl?s("v-uni-image",{attrs:{"lazy-load":!0,src:t.headPicUrl,mode:"widthFix"}}):s("v-uni-image",{attrs:{src:i("6163"),mode:"widthFix"}})],1),s("v-uni-view",{staticClass:"uni-comment-body"},[s("v-uni-view",{staticClass:"uni-comment-top"},[s("v-uni-text",[n._v(n._s(t.userNick))])],1),s("v-uni-view",{staticClass:"uni-comment-content"},[n._v(n._s(t.commentContent))]),s("v-uni-view",{staticClass:"uni-comment-date"},[s("v-uni-text",[n._v(n._s(t.commentDate))])],1)],1)],1)})),1):n._e(),s("v-uni-view",{staticClass:"cu-bar bg-white margin-top-xs"},[s("v-uni-view",{staticClass:"action text-shadow text-pink",staticStyle:{margin:"0 auto"}},[s("v-uni-text",{staticClass:"cuIcon-more",staticStyle:{"margin-right":"0.5em"}}),n._v("估你鍾意"),s("v-uni-text",{staticClass:"cuIcon-more"})],1)],1),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"grid col-2"},n._l(n.similarGoods,(function(t,i){return s("v-uni-view",{key:i,staticClass:"padding-xs"},[s("v-uni-view",{staticClass:"bg-white",attrs:{"data-url":"/pages/index/detail?id="+t.id+"&goodsId="+t.goodsId,"data-id":t.id,"data-goodsid":t.goodsId},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goUrl.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"bg-white"},[s("v-uni-image",{staticStyle:{width:"100%"},attrs:{mode:"aspectFill","lazy-load":!0,src:t.mainPic||t.marketingMainPic}})],1),s("v-uni-view",{staticClass:"padding-xs"},[s("v-uni-view",{staticClass:"response"},[s("v-uni-view",{staticClass:"cu-tag radius sm margin-right-xs",class:1==t.shopType?"bg-gradual-red":"bg-gradual-orange"},[n._v(n._s(1==t.shopType?"天貓":"淘寶"))]),s("br"),n._v(n._s(t.title))],1),s("hr",{staticStyle:{"border-top":"2px dashed","margin-top":"5%","margin-bottom":"3%"}}),n.is_coupon?s("v-uni-view",{staticClass:"flex-sub"},[n._v("優惠價"),s("v-uni-text",{staticClass:"text-price margin-left-xs text-bold text-red"},[n._v(n._s(t.actualPrice))]),s("br"),n._v("約為港紙"),s("v-uni-text",{staticClass:"margin-left-xs text-bold text-red"},[n._v(n._s(Math.round(1.2*t.actualPrice))+" 蚊")]),s("v-uni-view",{staticClass:"text-sm"},[n._v("原價"),s("v-uni-text",{staticClass:"text-price margin-left-xs text-bold"},[s("strike",[n._v(n._s(t.originalPrice))])],1),s("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0!==t.couponPrice,expression:"item.couponPrice !== 0"}],staticClass:"cu-capsule radius flex-sub",staticStyle:{float:"right"}},[s("v-uni-view",{staticClass:"cu-tag bg-red sm"},[n._v("慳咗")]),s("v-uni-view",{staticClass:"cu-tag line-red sm"},[n._v("￥ "+n._s(t.couponPrice))])],1)],1)],1):n._e()],1)],1)],1)})),1)],1),n.is_coupon?s("v-uni-view",{staticClass:"cu-bar bg-white tabbar border shop foot"},[s("v-uni-view",{staticClass:"action",attrs:{"data-url":"/pages/index/index"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goUrl.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"cuIcon-home"}),n._v("首頁")],1),s("v-uni-view",{staticClass:"action",attrs:{"data-url":"/pages/classify/index"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goUrl.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"cuIcon-search"}),n._v("尋找")],1),s("v-uni-button",{staticClass:"btn-share bg-orange light submit text-lg",attrs:{"open-type":"share","data-id":"share"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goShare.apply(void 0,arguments)}}},[n._v("分享"),s("v-uni-text",{staticClass:"cuIcon-we",staticStyle:{"font-size":"20px","margin-left":"2px"}})],1),s("v-uni-view",{staticClass:"bg-gradual-red submit padding-xs",staticStyle:{display:"block"},attrs:{"data-goodsid":n.goods.goodsId},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goBuy.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"response text-xl"},[s("v-uni-text",{staticClass:"text-price"},[n._v(n._s(n.goods.actualPrice))]),s("v-uni-text",{staticClass:"text-price text-gray text-sm",staticStyle:{"margin-left":"5px","text-decoration":"line-through"}},[n._v(n._s(n.goods.originalPrice))])],1),s("v-uni-view",{staticClass:"response text-xs"},[n._v("領券購買")])],1)],1):n._e(),s("uni-load-more",{attrs:{iconType:"circle",status:n.status}}),s("v-uni-view",{staticClass:"cu-modal",class:n.sharebox?"show":""},[s("v-uni-view",{staticClass:"cu-dialog  bg-white"},[s("v-uni-view",{staticClass:"cu-bar justify-end"},[s("v-uni-view",{staticClass:"content"},[n._v("📄 使用方法 📄")]),s("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.closeBox.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),s("v-uni-view",{staticClass:"padding-left-xl padding-right-xl"},[s("v-uni-view",{staticClass:"text-sm",staticStyle:{"margin-bottom":"5px"}},[n._v("1️⃣ 複製文字"),s("br"),n._v("2️⃣ 開啓淘寶"),s("br"),n._v("3️⃣ 等待數秒"),s("br"),n._v("4️⃣ 點擊領取"),s("br")]),s("v-uni-view",{staticClass:"bg-orange light radius-sm padding-top-xl padding-bottom-xl",staticStyle:{color:"#111",border:"#FF5000 solid 1px !important"}},[s("v-uni-view",[n._v("複製框內整段文字， 打開【手-機-淘-寶】")]),s("v-uni-view",[n._v("即可領券購買。"+n._s(n.tbwd))])],1),s("v-uni-view",{staticStyle:{"margin-top":"5px"}},[s("v-uni-text",{staticClass:"text-sm text-gray"},[n._v("長按文字區域手動複製淘口令")])],1)],1),s("v-uni-view",{staticClass:"flex padding-bottom-sm"},[s("v-uni-button",{staticClass:"cu-btn bg-red margin-top-sm lg",staticStyle:{"margin-left":"auto","margin-right":"auto","min-width":"40%"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.copyTbCode.apply(void 0,arguments)}}},[n._v("點擊複製")])],1)],1)],1),s("v-uni-view",{staticClass:"radius",staticStyle:{"font-size":"30px",background:"rgba(0, 0, 0, 0.5)","z-index":"999",position:"fixed",right:"30px",bottom:"80px"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goTop.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"cuIcon-top text-white"})],1)],1)},a=[]},6163:function(n,t){n.exports="data:image/png;base64,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"},"61a7":function(n,t,i){"use strict";var s=i("b912"),e=i.n(s);e.a},"622c":function(n,t,i){var s=i("d60c");"string"===typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);var e=i("4f06").default;e("73350dc2",s,!0,{sourceMap:!1,shadowMode:!1})},8580:function(n,t,i){var s=i("24fb");t=s(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* comment */uni-page-body[data-v-b009db20]{background-color:#f8f8f8}.uni-padding-wrap[data-v-b009db20]{padding:%?30?%}uni-view[data-v-b009db20]{font-size:%?28?%}.uni-comment[data-v-b009db20]{padding:%?5?% 0 %?100?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-comment-list[data-v-b009db20]{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding:%?10?% 0;margin:%?10?% 0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-comment-face[data-v-b009db20]{width:%?70?%;height:%?70?%;border-radius:100%;margin-right:%?20?%;-webkit-flex-shrink:0;flex-shrink:0;overflow:hidden}.uni-comment-face uni-image[data-v-b009db20]{width:100%;border-radius:100%}.uni-comment-body[data-v-b009db20]{width:100%}.uni-comment-top[data-v-b009db20]{line-height:1.5em;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-comment-top uni-text[data-v-b009db20]{color:#ff5000;font-size:%?24?%}.uni-comment-date[data-v-b009db20]{line-height:%?38?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;display:-webkit-box!important;display:-webkit-flex!important;display:flex!important;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.uni-comment-date uni-view[data-v-b009db20]{color:#666;font-size:%?24?%;line-height:%?38?%}.uni-comment-content[data-v-b009db20]{line-height:1.6em;font-size:%?28?%;padding:%?8?% 0}body.?%PAGE?%[data-v-b009db20]{background-color:#f8f8f8}",""]),n.exports=t},"8a39":function(n,t,i){"use strict";i.r(t);var s=i("53fb"),e=i("9012");for(var a in e)"default"!==a&&function(n){i.d(t,n,(function(){return e[n]}))}(a);i("cf85"),i("61a7");var o,c=i("f0c5"),d=Object(c["a"])(e["default"],s["b"],s["c"],!1,null,"b009db20",null,!1,s["a"],o);t["default"]=d.exports},9012:function(n,t,i){"use strict";i.r(t);var s=i("f1f3"),e=i.n(s);for(var a in s)"default"!==a&&function(n){i.d(t,n,(function(){return s[n]}))}(a);t["default"]=e.a},b912:function(n,t,i){var s=i("8580");"string"===typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);var e=i("4f06").default;e("e6dffc40",s,!0,{sourceMap:!1,shadowMode:!1})},bc80:function(n,t,i){n.exports=i.p+"static/img/tao.38fa61aa.jpg"},cf85:function(n,t,i){"use strict";var s=i("622c"),e=i.n(s);e.a},d60c:function(n,t,i){var s=i("24fb");t=s(!1),t.push([n.i,".main-pic[data-v-b009db20],\n.main-pic uni-image[data-v-b009db20]{min-height:100vw;width:100%}.btn-share[data-v-b009db20],\n.btn-share[data-v-b009db20]:after{border-radius:0!important}",""]),n.exports=t},f1f3:function(n,t,i){"use strict";(function(n){var s=i("4ea4");i("fb6a"),i("ac1f"),i("466d"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=s(i("2909"));i("96cf");var a=s(i("1da1")),o=s(i("5438")),c=s(i("67c6")),d={data:function(){return{status:"none",StatusBar:this.StatusBar,CustomBar:this.CustomBar,width:this.ScreenWidth,is_coupon:!1,sharebox:!1,tbwd:"",goods:[],similarGoods:[],comments:[],tabInfo:!0,tabComments:!1}},onLoad:function(n){o.default.isBlank(n.id)||o.default.isBlank(n.goodsId)?uni.navigateBack():(this.getDetail(n.id,n.goodsId),this.getSimilerGoods(n.id,n.goodsId)),this.getCouponSetting()},onPullDownRefresh:function(n){this.getDetail(this.goods.id,this.goods.goodsId),setTimeout((function(){uni.stopPullDownRefresh()}),500)},onReachBottom:function(){"noMore"!=this.status&&(this.status="loading",this.getSimilerGoods(this.goods.id,this.goods.goodsId))},methods:{goTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})},goUrl:function(n){var t=n.currentTarget.dataset.url;"/pages/index/index"===t?uni.switchTab({url:t}):uni.navigateTo({url:t})},updateSEO:function(){document.title=this.goods.title+" | 慳多D 淘寶天貓優惠券",document.querySelector('[property="og:title"]').setAttribute("content",this.goods.title),document.querySelector('[property="og:url"]').setAttribute("content","https://tbsave.money"+this.$mp.page.__page__.fullPath),document.querySelector('[property="og:description"]').setAttribute("content",this.goods.desc),document.querySelector('[property="og:image"]').setAttribute("content",this.goods.mainPic)},saveHistory:function(t){try{var i=uni.getStorageSync("history"),s=!1;for(var e in i)i[e].goodsId!=t.goodsId&&i[e].id!=t.id||(s=!0);n("log",i," at pages/index/detail.vue:352"),0==s&&i.unshift(t),uni.setStorageSync("history",i.slice(0,50))}catch(o){var a=[];a.push(t),uni.setStorageSync("history",a)}},getCouponSetting:function(){var n=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.default.couponSetting();case 2:n.is_coupon=t.sent;case 3:case"end":return t.stop()}}),t)})))()},goShare:function(n){var t={type:"text",content:"我係 慳多D 呢個App搵到好多淘寶天貓優惠券\n特價"+this.goods.actualPrice+"蚊包郵, "+this.goods.dtitle+"\n 快啲嚟Play Store Down個App試下",href:"https://tbsave.money/pages/index/detail?id="+this.goods.id+"&goodsId="+this.goods.goodsId};try{plus.share.sendWithSystem(t)}catch(i){uni.showToast({title:"網頁版暫時無法分享 請使用APP版本",icon:"none",duration:3e3})}},goBack:function(n){uni.navigateBack({delta:1})},goBuy:function(t){var i=this,s=t.currentTarget.dataset.goodsid;c.default.getPrivilegeLink({goodsId:s}).then((function(t){if(0===t.code){var s,e;""===t.data.couponClickUrl?(s=t.data.itemUrl,e=s):(s=t.data.couponClickUrl,e=s),n("log",t," at pages/index/detail.vue:402"),"https"===s.substr(0,5)?e="taobao://".concat(s.substr(8)):"http"===s.substr(0,4)&&(e="taobao://".concat(s.substr(7)));try{n("log","Opening Taobao"," at pages/index/detail.vue:409"),uni.showToast({title:"啟動淘寶中...",icon:"none",duration:3e3}),window.open(e),i.tbwd=t.data.tpwd,i.sharebox=!0}catch(a){uni.showToast({title:"😣 無法自動啟動淘寶 😣\n請複制密碼並手動啟動淘寶",icon:"none",duration:3e3}),i.tbwd=t.data.tpwd,i.sharebox=!0}}else uni.navigateBack()}))},copyTbCode:function(){n("log","HTML5不支持"," at pages/index/detail.vue:449")},closeBox:function(){this.sharebox=!1},tabSwapInfo:function(){this.tabInfo=!0,this.tabComments=!1},tabSwapComments:function(){0==this.comments.length&&this.getComments(this.goods.id,this.goods.goodsId),n("log",this.comments," at pages/index/detail.vue:462"),this.tabInfo=!1,this.tabComments=!0},tabHideAll:function(){this.tabInfo=!1,this.tabComments=!1},getDetail:function(n,t){var i=this;o.default.showLoading("加載中..."),c.default.getGoodsDetails({id:-1==n?null:n,goodsId:t}).then((function(n){if(0===n.code){var t=n.data;t.imgs=t.imgs.split(","),t.imgs.unshift(t.mainPic),""!==t.detailPics?t.detailPics=(0,e.default)(t.detailPics.match(/((http|https):\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.!~#?&\/\/=]*)/g)):t.detailPics=t.imgs,i.goods=t,i.saveHistory(t),i.updateSEO(),o.default.showLoading("加載結束",!0)}else uni.navigateBack()}))},getComments:function(n,t){var i=this;o.default.showLoading("加載評論中..."),c.default.getComments({id:-1==n?null:n,goodsId:t}).then((function(n){i.comments=n.data.commentList,o.default.showLoading("評論加載結束",!0)}))},getSimilerGoods:function(n,t){var i=this;c.default.getSimilerGoods({id:n,goodsId:t}).then((function(n){var t;(t=i.similarGoods).push.apply(t,(0,e.default)(n.data)),i.status="none"}))}}};t.default=d}).call(this,i("0de9")["log"])}}]);