"use strict";(self["webpackChunkui"]=self["webpackChunkui"]||[]).push([[900],{1900:function(t,i,e){e.r(i),e.d(i,{default:function(){return k}});var n=function(){var t=this,i=t._self._c;return i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("div",{staticClass:"ui-page"},[i("header-bar",[i("icon-button",{attrs:{slot:"left",icon:"menu"},nativeOn:{click:function(i){return t.showNav.apply(null,arguments)}},slot:"left"}),i("span",[t._v("long-ui")]),i("icon-button",{attrs:{slot:"right",icon:"github"},nativeOn:{click:function(i){return t.goGithub.apply(null,arguments)}},slot:"right"})],1),i("scroll-view",{ref:"scroller"},[i("content-block",[t._v(" long-ui 是基于 vue 开发的material design ui 库。 ")]),t._l(t.menus,(function(e,n){return i("div",{key:n},[i("content-title",[t._v(t._s(e.title))]),i("list",t._l(e.children,(function(e,n){return i("item-cell",{key:n,attrs:{link:""},nativeOn:{click:function(i){return t.goTo(e.link)}}},[i("item-media",[i("icon",{staticClass:"icon-logo",attrs:{value:e.icon}})],1),i("item-title",[t._v(" "+t._s(e.title)+" ")])],1)})),1)],1)}))],2)],1)])},l=[],o=(e(7658),e(7195));let c=0;var r={data(){return{navShow:!1,menus:[{title:"Basic",children:[{icon:"favorite_border",title:"Icon",link:"/icon"},{icon:"looks_one",title:"Badge",link:"/badge"},{icon:"crop_7_5",title:"Button",link:"/button"},{icon:"stars",title:"Float Button",link:"/floatButton"},{icon:"spinner2",title:"Circular",link:"/circular"},{icon:"move-down",title:"Refresh Control",link:"/refreshControl"},{icon:"move-up",title:"Infinite Scroll",link:"/infiniteScroll"},{icon:"sort-alpha-asc",title:"Index List",link:"/indexList"},{icon:"sort-numeric-asc",title:"Number Animate",link:"/numberAnimate"},{icon:"images",title:"Swiper",link:"/swiper"}]},{title:"CSS",children:[{icon:"payment",title:"Header Bar",link:"/headerBar"},{icon:"featured_video",title:"Tab Bar",link:"/tabBar"},{icon:"search",title:"Search Bar",link:"/searchBar"},{icon:"branding_watermark",title:"Bottom Nav",link:"/bottomNav"},{icon:"settings_cell",title:"SnackBar",link:"/snackBar"},{icon:"list",title:"List View",link:"/listView"},{icon:"newspaper",title:"Card",link:"/card"},{icon:"file-text2",title:"Content Block",link:"/contentBlock"}]},{title:"Forms",children:[{icon:"border_color",title:"Text Field",link:"/inputs"},{icon:"flickr2",title:"Switch",link:"/switch"},{icon:"equalizer",title:"Range",link:"/range"},{icon:"radio-checked",title:"Checkbox And Radio",link:"/check"},{icon:"unfold_more",title:"Select Field",link:"/select"},{icon:"calendar",title:"Date Select",link:"/dateSelect"}]},{title:"Popups",children:[{icon:"content_copy",title:"Overlay",link:"/overlay"},{icon:"check_box",title:"Toast",link:"/toast"},{icon:"insert_comment",title:"Modal",link:"/modal"},{icon:"stack",title:"Popup",link:"/popup"},{icon:"menu4",title:"Action Sheet",link:"/actionSheet"},{icon:"copy",title:"Popover",link:"/popover"},{icon:"spinner3",title:"Indicator",link:"/indicator"},{icon:"line_weight",title:"Picker",link:"/picker"}]}]}},activated(){o.ZP.nextTick((()=>{this.$refs.scroller.$el.scrollTop=c}))},deactivated(){c=this.$refs.scroller.$el.scrollTop},methods:{showNav(){this.$parent.navShow=!0,this.$emit("menuShow")},goTo(t){this.$router.push(t)},goGithub(){window.open("https://github.com/WeberLong/long-ui")}}},a=r,s=e(1001),u=(0,s.Z)(a,n,l,!1,null,"05689395",null),k=u.exports}}]);