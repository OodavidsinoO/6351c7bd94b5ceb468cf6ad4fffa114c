(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cates-index"],{3699:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".nav[data-v-0fc93583]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.nav-left[data-v-0fc93583]{width:30%}.nav-left-item[data-v-0fc93583]{height:50px;border-right:solid 1px #e0e0e0;border-bottom:solid 1px #e0e0e0;font-size:16px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.nav-right[data-v-0fc93583]{width:70%;padding-top:11px}.nav-right-item[data-v-0fc93583]{width:45%;height:180px;float:left;text-align:center;padding:10px;font-size:15px}.nav-right-item uni-image[data-v-0fc93583]{max-width:100px;max-height:100px}.active[data-v-0fc93583]{color:#f24544}.padding[data-v-0fc93583]{height:0;width:100%;top:0;position:fixed;background-color:#f24544}",""]),t.exports=e},"3e94":function(t,e,i){"use strict";var a=i("dd86"),n=i.n(a);n.a},"585d":function(t,e,i){"use strict";i.r(e);var a=i("8c68"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);e["default"]=n.a},"8c68":function(t,e,i){"use strict";var a=i("4ea4");i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(i("dcf0"));var n=a(i("e70d")),c=a(i("e77b")),r={components:{category:c.default},data:function(){return{categoryList:[],subCategoryList:[]}},onLoad:function(){this.getSuperCategory()},onReady:function(){},onPullDownRefresh:function(){this.getSuperCategory(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},methods:{goUrl:function(t){var e=t.currentTarget.dataset.url;uni.navigateTo({url:e})},getSuperCategory:function(t){var e=this;n.default.getSuperCategory({}).then((function(t){e.categoryList=JSON.parse(JSON.stringify(t.data).replace(/subcname/gm,"cname")),e.subCategoryList=e.categoryList[0].subcategories}))},categoryMainClick:function(t){this.subCategoryList=t.subcategories},categorySubClick:function(t){var e="/pages/nine/list?subcid="+t.subcid+"&name="+t.cname;this.goUrl(e)}}};e.default=r},a28c:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"nav"},[i("v-uni-view",{staticClass:"nav-left"},[i("v-uni-scroll-view",{style:"height:"+t.height+"px",attrs:{"scroll-y":!0}},t._l(t.categoryList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-left-item",style:a==t.categoryActive?"color:"+t.activeTextColor+";background-color:"+t.activeBackgroundColor:"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.categoryClickMain(e,a)}}},[t._v(t._s(e[t.label]))])})),1)],1),i("v-uni-view",{staticClass:"nav-right"},[i("v-uni-scroll-view",{style:"height:"+t.height+"px",attrs:{"scroll-y":!0,"scroll-top":t.scrollTop,"scroll-with-animation":!0},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},t._l(t.subCategoryList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-right-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.categoryClickSub(e)}}},[i("v-uni-image",{attrs:{src:e[t.imgSrc]}}),i("v-uni-view",[t._v(t._s(e[t.label]))])],1)})),1)],1)],1)],1)},c=[]},b6d0:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"bg-gradual-red",style:"padding-top:"+t.StatusBar+"px;"},[i("v-uni-view",{staticClass:"cu-bar search"},[i("v-uni-view",{staticClass:"search-form radius"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{"adjust-position":!1,"data-url":"/pages/classify/index",placeholder:"輸入商品名或貼上商品標題搜索 🧡",disabled:"disabled"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"action",attrs:{"data-url":"/pages/classify/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUrl.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-search"})],1)],1)],1),i("v-uni-view",{staticClass:"box-step bg-white"},[i("v-uni-view",[i("category",{attrs:{categoryList:t.categoryList,subCategoryList:t.subCategoryList,activeTextColor:"#F24544",activeBackgroundColor:"#e5e5e5",label:"cname",imgSrc:"scpic"},on:{categoryMainClick:function(e){arguments[0]=e=t.$handleEvent(e),t.categoryMainClick.apply(void 0,arguments)},categorySubClick:function(e){arguments[0]=e=t.$handleEvent(e),t.categorySubClick.apply(void 0,arguments)}}})],1)],1)],1)},c=[]},c380:function(t,e,i){"use strict";i.r(e);var a=i("e6a0"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);e["default"]=n.a},dd86:function(t,e,i){var a=i("3699");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("21531e37",a,!0,{sourceMap:!1,shadowMode:!1})},e40f:function(t,e,i){"use strict";i.r(e);var a=i("b6d0"),n=i("585d");for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);var r,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=s.exports},e6a0:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"category",data:function(){return{height:0,scrollTop:0,scrollHeight:0,categoryActive:0,activeStyle:{color:this.activeTextColor,backgroundColor:this.activeBackgroundColor}}},props:{defaultActive:{type:Number,default:0},categoryList:{type:Array,default:function(){return null}},subCategoryList:{type:Array,default:function(){return null}},activeTextColor:{type:String,default:"#F24544"},activeBackgroundColor:{type:String,default:"#e5e5e5"},label:{type:String,default:"name"},imgSrc:{type:String,default:"logo"},categoryMainClick:{},categorySubClick:{}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.$emit("categoryMainClick",t),this.categoryActive=e,this.scrollTop=-this.scrollHeight*e},categoryClickSub:function(t){this.$emit("categorySubClick",t)}},mounted:function(){var t=this;this.categoryActive=this.defaultActive,uni.getSystemInfo({success:function(e){t.height=e.screenHeight}})},watch:{subCategoryList:function(t,e){}}};e.default=a},e77b:function(t,e,i){"use strict";i.r(e);var a=i("a28c"),n=i("c380");for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);i("3e94");var r,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"0fc93583",null,!1,a["a"],r);e["default"]=s.exports}}]);