webpackJsonp([21],{E2Go:function(t,i){},ZFIF:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("7+uW"),o=0,l={data:function(){return{navShow:!1,menus:[{title:"Basic",children:[{icon:"favorite_border",title:"Icon",link:"/icon"},{icon:"looks_one",title:"Badge",link:"/badge"},{icon:"crop_7_5",title:"Button",link:"/button"},{icon:"stars",title:"Float Button",link:"/floatButton"},{icon:"spinner2",title:"Circular",link:"/circular"},{icon:"move-down",title:"Refresh Control",link:"/refreshControl"},{icon:"move-up",title:"Infinite Scroll",link:"/infiniteScroll"},{icon:"sort-alpha-asc",title:"Index List",link:"/indexList"},{icon:"sort-numeric-asc",title:"Number Animate",link:"/numberAnimate"}]},{title:"CSS",children:[{icon:"payment",title:"Header Bar",link:"/headerBar"},{icon:"featured_video",title:"Tab Bar",link:"/tabBar"},{icon:"search",title:"Search Bar",link:"/searchBar"},{icon:"branding_watermark",title:"Bottom Nav",link:"/bottomNav"},{icon:"settings_cell",title:"SnackBar",link:"/snackBar"},{icon:"list",title:"List View",link:"/listView"},{icon:"newspaper",title:"Card",link:"/card"},{icon:"file-text2",title:"Content Block",link:"/contentBlock"}]},{title:"Forms",children:[{icon:"border_color",title:"Text Field",link:"/inputs"},{icon:"flickr2",title:"Switch",link:"/switch"},{icon:"equalizer",title:"Range",link:"/range"},{icon:"radio-checked",title:"Checkbox And Radio",link:"/check"},{icon:"unfold_more",title:"Select Field",link:"/select"},{icon:"calendar",title:"Date Select",link:"/dateSelect"}]},{title:"Popups",children:[{icon:"content_copy",title:"Overlay",link:"/overlay"},{icon:"check_box",title:"Toast",link:"/toast"},{icon:"insert_comment",title:"Modal",link:"/modal"},{icon:"stack",title:"Popup",link:"/popup"},{icon:"menu4",title:"Action Sheet",link:"/actionSheet"},{icon:"copy",title:"Popover",link:"/popover"},{icon:"spinner3",title:"Indicator",link:"/indicator"},{icon:"line_weight",title:"Picker",link:"/picker"}]}]}},activated:function(){var t=this;e.a.nextTick(function(){t.$refs.scroller.$el.scrollTop=o})},deactivated:function(){o=this.$refs.scroller.$el.scrollTop},methods:{showNav:function(){this.$parent.navShow=!0,this.$emit("menuShow")},goTo:function(t){this.$router.push(t)},goGithub:function(){window.open("https://github.com/WeberLong/long-ui")}}},c={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"ui-page"},[n("header-bar",[n("icon-button",{attrs:{slot:"left",icon:"menu"},nativeOn:{click:function(i){return t.showNav(i)}},slot:"left"}),t._v(" "),n("span",[t._v("long-ui")]),t._v(" "),n("icon-button",{attrs:{slot:"right",icon:"github"},nativeOn:{click:function(i){return t.goGithub(i)}},slot:"right"})],1),t._v(" "),n("scroll-view",{ref:"scroller"},[n("content-block",[t._v("\n      long-ui 是基于 vue 开发的material design ui 库。\n    ")]),t._v(" "),t._l(t.menus,function(i,e){return n("div",{key:e},[n("content-title",[t._v(t._s(i.title))]),t._v(" "),n("list",t._l(i.children,function(i,e){return n("item-cell",{key:e,attrs:{link:""},nativeOn:{click:function(n){t.goTo(i.link)}}},[n("item-media",[n("icon",{staticClass:"icon-logo",attrs:{value:i.icon}})],1),t._v(" "),n("item-title",[t._v("\n            "+t._s(i.title)+"\n          ")])],1)}))],1)})],2)],1)])},staticRenderFns:[]};var r=n("VU/8")(l,c,!1,function(t){n("E2Go")},"data-v-2ffc519a",null);i.default=r.exports}});
//# sourceMappingURL=21.9dd201d2bc2a8a514ba3.js.map