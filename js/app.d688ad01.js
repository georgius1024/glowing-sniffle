(function(t){function e(e){for(var o,r,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/glowing-sniffle/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0089":function(t,e,n){},"05b3":function(t,e,n){"use strict";n("c4fa")},"2d43":function(t,e,n){"use strict";n("7400")},"31c5":function(t,e,n){},"320f":function(t,e,n){"use strict";n("ea19")},3686:function(t,e,n){"use strict";n("31c5")},"3cba":function(t,e,n){},"4be8":function(t,e,n){"use strict";n("0089")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=n("2f62"),a=n("1881"),r=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("composer")],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"composer"},[n("div",{staticClass:"preview"},[n("Preview",{attrs:{rows:t.rows,selection:t.selection,editable:""},on:{select:function(e){t.selection=e},delete:t.removeBlock,sort:function(e){t.showSorter=!0}}}),n("add-block-toolbar",{on:{add:t.add}}),n("modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" Sort blocks ")]},proxy:!0}]),model:{value:t.showSorter,callback:function(e){t.showSorter=e},expression:"showSorter"}},[n("sorter",{attrs:{rows:t.rows},on:{sort:t.sortBlocks}})],1)],1),n("div",{staticClass:"editor"},[n("div",{staticClass:"sticky"},[n("div",{staticClass:"toolbar"},[n("button",{staticClass:"btn",attrs:{disabled:0===t.blocks.length},on:{click:function(e){t.showSorter=!0}}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M22.67,12L18.18,16.5L15.67,14L17.65,12L15.67,10.04L18.18,7.53L22.67,12M12,1.33L16.47,5.82L13.96,8.33L12,6.35L10,8.33L7.5,5.82L12,1.33M12,22.67L7.53,18.18L10.04,15.67L12,17.65L14,15.67L16.5,18.18L12,22.67M1.33,12L5.82,7.5L8.33,10L6.35,12L8.33,13.96L5.82,16.47L1.33,12M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"}})]),n("span",[t._v(" Sort blocks ")])]),n("button",{staticClass:"btn",attrs:{disabled:!t.canUndo},on:{click:t.undo}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"}})]),n("span",[t._v(" Undo ")])]),n("button",{staticClass:"btn",attrs:{disabled:!t.canRedo},on:{click:t.redo}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"}})]),n("span",[t._v(" Redo ")])]),n("button",{staticClass:"btn",on:{click:t.resetBlocks}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z"}})]),n("span",[t._v(" Reset ")])]),n("button",{staticClass:"btn",attrs:{disabled:!t.hasUnsavedChanges},on:{click:t.saveBlocks}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"}})]),n("span",[t._v(" Save ")])])]),t.selectedBlock?n("div",{staticClass:"block-editor"},[n("h3",[t._v("Edit selected block")]),n("div",[n("button",{staticClass:"btn block",on:{click:t.toggleBackgroundColor}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z"}})]),n("span",[t._v("Change color scheme")])]),"image"===t.selectedBlock.type?n("button",{staticClass:"btn block",on:{click:t.toggleImage}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z"}})]),n("span",[t._v("Change image")])]):t._e(),"text"===t.selectedBlock.type?n("button",{staticClass:"btn block",on:{click:t.toggleHeader}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z"}})]),n("span",[t._v("Change header")])]):t._e(),"text"===t.selectedBlock.type?n("button",{staticClass:"btn block",on:{click:t.toggleText}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z"}})]),n("span",[t._v("Change text")])]):t._e(),"button"===t.selectedBlock.type?n("button",{staticClass:"btn block",on:{click:t.toggleButtonText}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z"}})]),n("span",[t._v("Change text")])]):t._e()])]):t._e()])])])},u=[],d=(n("7db0"),n("d81d"),n("ac1f"),n("5530")),p=n("ec26"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{attrs:{tag:"section",id:"preview-rows",name:"list"}},t._l(t.rows,(function(e,o){return n("preview-row",{key:o,attrs:{value:e,editable:t.editable,selection:t.selection},on:{delete:function(e){return t.$emit("delete",e)},select:function(e){return t.$emit("select",e)},sort:function(e){return t.$emit("sort")}}})})),1)},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"preview-row"}},t._l(t.blocksWithComponents,(function(e){return n("div",{key:e.id,class:{col:!0,selected:t.selection===e.id},style:t.columnStyle,on:{click:function(n){return t.$emit("select",e.id)}}},[t.editable?n("button",{staticClass:"drag",on:{click:function(e){return t.$emit("sort")}}},[n("svg",{staticStyle:{width:"32px",height:"32px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M22.67,12L18.18,16.5L15.67,14L17.65,12L15.67,10.04L18.18,7.53L22.67,12M12,1.33L16.47,5.82L13.96,8.33L12,6.35L10,8.33L7.5,5.82L12,1.33M12,22.67L7.53,18.18L10.04,15.67L12,17.65L14,15.67L16.5,18.18L12,22.67M1.33,12L5.82,7.5L8.33,10L6.35,12L8.33,13.96L5.82,16.47L1.33,12M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"}})])]):t._e(),t.editable?n("button",{staticClass:"delete",on:{click:function(n){return t.$emit("delete",e.id)}}},[n("svg",{staticStyle:{width:"32px",height:"32px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}})])]):t._e(),n(e.component,t._b({key:e.id,tag:"component"},"component",e.props,!1))],1)})),0)},b=[],v=(n("b680"),n("15fd")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"block text-block",style:t.blockStyle},[n("header",{domProps:{textContent:t._s(t.header)}}),n("section",{domProps:{innerHTML:t._s(t.text)}})])},k=[],w={name:"TextBlock",props:{header:{type:String,required:!0},text:{type:String,required:!0},color:{type:String,default:"#333"},background:{type:String,default:"#fff"}},computed:{blockStyle:function(){return{backgroundColor:this.background,color:this.color}}}},y=w,x=(n("3686"),n("2877")),A=Object(x["a"])(y,g,k,!1,null,"d307e070",null),C=A.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"block text-block",style:t.blockStyle},[n("a",{style:t.buttonStyle,attrs:{href:t.url,target:"_blank"},domProps:{innerHTML:t._s(t.text)},on:{click:function(t){t.preventDefault()}}})])},S=[],B=(n("a9e3"),{name:"ButtonBlock",props:{text:{type:String,required:!0},url:{type:String,required:!0},color:{type:String,default:"#333"},button:{type:String,default:"#ccc"},background:{type:String,default:"#fff"},size:{type:Number,default:100}},computed:{blockStyle:function(){return{backgroundColor:this.background,color:this.color}},buttonStyle:function(){return{backgroundColor:this.button,color:this.color,width:"".concat(this.size,"px")}}}}),M=B,_=(n("05b3"),Object(x["a"])(M,L,S,!1,null,"ac35407a",null)),O=_.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"block image-block",style:t.blockStyle},[n("a",{attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.preventDefault()}}},[n("img",{attrs:{src:t.src,alt:t.alt,width:"100%"}})])])},H=[],q={name:"ImageBlock",props:{src:{type:String,required:!0},url:{type:String,required:!0},alt:{type:String,default:"image"},background:{type:String,default:"#fff"},width:{type:String,default:"auto"}},computed:{blockStyle:function(){return{backgroundColor:this.background}}}},V=q,E=(n("4be8"),Object(x["a"])(V,j,H,!1,null,"5e41a210",null)),P=E.exports,$={name:"PreviewRow",props:{value:{type:Array,requied:!0},editable:{type:Boolean,default:!1},selection:{type:String,requied:!1}},computed:{blocksWithComponents:function(){var t=function(t,e){var n=t.id,o=t.row,i=t.column,a=t.type,r=Object(v["a"])(t,["id","row","column","type"]);return{component:e,id:n,row:o,column:i,type:a,props:r}};return this.value.map((function(e){switch(e.type){case"text":return t(e,C);case"button":return t(e,O);case"image":return t(e,P)}}))},cols:function(){return this.value.length},columnStyle:function(){return{width:"".concat((100/this.cols).toFixed(2),"%")}}}},T=$,Z=(n("57c6"),Object(x["a"])(T,h,b,!1,null,"502295f0",null)),R=Z.exports,U={name:"Preview",components:{PreviewRow:R},props:{rows:{type:Array,required:!0},editable:{type:Boolean,default:!1},selection:{type:String,requied:!1}}},I=U,D=(n("af84"),Object(x["a"])(I,m,f,!1,null,"6d826a2e",null)),N=D.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-block"},[n("div",{staticClass:"caption"},[t._v(" Add block ")]),n("div",{staticClass:"toolbar"},[n("button",{on:{click:function(e){return t.add("text")}}},[t._v(" Text ")]),n("button",{on:{click:function(e){return t.add("button")}}},[t._v(" Button ")]),n("button",{on:{click:function(e){return t.add("image")}}},[t._v(" Image ")])])])},K=[],z={name:"AddBlockToolbar",methods:{add:function(t){this.$emit("add",t)}}},J=z,W=(n("2d43"),Object(x["a"])(J,Q,K,!1,null,"1b7fe7e4",null)),F=W.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],ref:"wrapper",staticClass:"wrapper",on:{click:t.checkClickOutside}},[n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"modal"},[n("div",{staticClass:"header"},[n("button",{staticClass:"close",on:{click:function(e){return t.$emit("input",!1)}}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"}})])]),t._t("header")],2),n("div",{staticClass:"body"},[t._t("default")],2)])])],1)},Y=[],X={name:"Modal",data:function(){return{visible:!1}},mounted:function(){var t=this;this.handler=function(e){"Escape"===e.code&&t.value&&t.$emit("input",!1)},document.addEventListener("keydown",this.handler)},beforeDestroy:function(){document.removeEventListener("keydown",this.handler)},watch:{value:function(t){document.body.style.overflow=t?"hidden":""}},props:{value:{type:Boolean,default:!1}},methods:{checkClickOutside:function(t){t.target===this.$refs.wrapper&&this.$emit("input",!1)}}},tt=X,et=(n("ebce"),Object(x["a"])(tt,G,Y,!1,null,"49520da8",null)),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("draggable",{attrs:{group:"rows",id:"sorter",animation:150,swapThreshold:.75,value:t.rows},on:{input:t.input}},t._l(t.list,(function(e,o){return n("SortableRow",{key:o,attrs:{value:e,sortable:t.active>=0,active:t.active===o},on:{input:function(e){return t.updateRow(o,e)},"move-out":function(e){return t.moveOut(o,e)},activate:function(e){t.active=o},deactivate:function(e){t.active=-1}}})})),1)},it=[],at=(n("4de4"),n("0481"),n("a434"),n("4069"),n("2909")),rt=n("b76a"),st=n.n(rt),ct=n("f7fe"),lt=n.n(ct),ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:{active:t.active},on:{click:t.activate,mouseleave:t.mouseLeave}},[n("button",{staticClass:"move-out",attrs:{disabled:1===t.cols,title:"Move first block out of group"},on:{click:function(e){return t.moveOut(0)}}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M11.92,19.92L4,12L11.92,4.08L13.33,5.5L7.83,11H22V13H7.83L13.34,18.5L11.92,19.92M4,12V2H2V22H4V12Z"}})])]),n("draggable",{staticClass:"row",attrs:{group:t.group,fallbackOnBody:"",animation:150,disabled:!t.isSortable,swapThreshold:.75,value:t.value},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.blocksWithComponents,(function(e){return n("div",{key:e.id,staticClass:"col",style:t.columnStyle},[n(e.component,t._b({key:e.id,tag:"component"},"component",e.props,!1))],1)})),0),n("button",{staticClass:"move-in",attrs:{disabled:1===t.cols,title:"Move next block into group"},on:{click:function(e){return t.moveOut(t.cols-1)}}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M12.08,4.08L20,12L12.08,19.92L10.67,18.5L16.17,13H2V11H16.17L10.67,5.5L12.08,4.08M20,12V22H22V2H20V12Z"}})])])],1)},dt=[],pt={name:"SortableRow",components:{draggable:st.a},props:{value:{type:Array,requied:!0},sortable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},data:function(){return{}},computed:{blocksWithComponents:function(){var t=function(t,e){var n=t.id,o=t.row,i=t.column,a=t.type,r=Object(v["a"])(t,["id","row","column","type"]);return{component:e,id:n,row:o,column:i,type:a,props:r}};return this.value.map((function(e){switch(e.type){case"text":return t(e,C);case"button":return t(e,O);case"image":return t(e,P)}}))},cols:function(){return this.value.length},isSortable:function(){return this.sortable},columnStyle:function(){return{width:"".concat((100/this.cols).toFixed(2),"%")}},group:function(){return this.cols<3||this.active?"cols":"none"}},methods:{activate:function(){this.$emit("activate")},deactivate:function(){this.$emit("deactivate")},mouseEnter:function(){var t=this;this.timer=setTimeout((function(){return t.activate()}),1e3)},mouseLeave:function(t){t.buttons||(this.deactivate(),clearTimeout(this.timer))},moveOut:function(t){this.$emit("move-out",t)}}},mt=pt,ft=(n("9a39"),Object(x["a"])(mt,ut,dt,!1,null,"727bfb63",null)),ht=ft.exports,bt={name:"Sorter",components:{SortableRow:ht,draggable:st.a},props:{rows:{type:Array,required:!0}},data:function(){return{sortableRows:!1,list:[],active:-1,lastSortEvent:null}},created:function(){var t=this;this.postInputEvent=lt()((function(){var e=t.list.filter((function(t){return Boolean(t)})).map((function(t,e){return t.filter((function(t){return Boolean(t)})).map((function(t,n){return Object(d["a"])(Object(d["a"])({},t),{},{row:e,column:n})}))})).flat();t.$emit("sort",e)}),100)},beforeMount:function(){this.list=this.rows},watch:{rows:function(t,e){t!==e&&(console.log("updated"),this.list=this.rows)}},methods:{emit:function(t){this.list=t,this.postInputEvent()},input:function(t){this.emit(t)},updateRow:function(t,e){var n=this.list.map((function(n,o){return o===t?e:n})).filter((function(t){return t.length}));this.emit(n)},moveOut:function(t,e){var n=Object(at["a"])(this.list),o=n[t][e];n[t].splice(e,1),0===e?(this.active=t,n.splice(t,0,[o])):(n.splice(t+1,0,[o]),this.active=t+1),this.emit(n)}}},vt=bt,gt=(n("320f"),Object(x["a"])(vt,ot,it,!1,null,null,null)),kt=gt.exports,wt=(n("a15b"),["Sed aliquet tempus mauris, ac mollis magna semper sit amet. Nunc nulla dolor, sollicitudin et nisi sed, sagittis mattis arcu. Morbi blandit sagittis enim sed ullamcorper.","Vivamus sed consequat massa, at dignissim orci. Mauris nec augue et quam mollis luctus ut vel orci. Vestibulum eget vestibulum metus, et pharetra nibh.","Curabitur non sapien id urna euismod viverra. Pellentesque gravida consectetur justo, in sodales nisi convallis vel.","Proin sollicitudin ultricies mi, quis rutrum neque sollicitudin sit amet. Sed sed suscipit nibh, ultrices tristique risus. Aenean vel rutrum tellus, eu aliquet enim.","Morbi porttitor varius ante id tristique. Nam interdum libero in enim interdum, vehicula iaculis purus bibendum.","In ligula turpis, aliquam sit amet pharetra at, aliquet sed nunc. Suspendisse vel magna felis.","Duis imperdiet porttitor lacus, non euismod nunc consectetur a. Nam laoreet ante nec nisi faucibus, id tristique enim tincidunt.","Donec a elit erat. Nunc magna quam, tempor sed tempus id, maximus vel dui. Maecenas sodales nibh velit, at lobortis nisi condimentum sed.","Etiam pellentesque neque sed accumsan blandit. Quisque posuere ex molestie odio maximus, nec commodo diam condimentum.","Mauris imperdiet gravida orci eget fringilla. Suspendisse eu erat vitae nibh venenatis placerat et vitae arcu.","Cras consequat purus at velit auctor, at sollicitudin leo rhoncus. In eleifend ut ipsum tincidunt bibendum.","Nulla vitae hendrerit odio. Curabitur lectus enim, lobortis sit amet tellus sit amet, fringilla cursus nisl.","Integer finibus luctus lacus, ac iaculis leo cursus sed. Donec ac nibh mi. Ut accumsan, mi vitae feugiat pulvinar, lorem eros cursus tellus, non malesuada turpis nunc nec ligula.","Integer semper, sem nec tempus ullamcorper, odio lacus vehicula leo, at congue massa enim eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.","Donec at pharetra dui, ac lacinia risus. Cras convallis risus sed tortor iaculis rhoncus. Quisque lacinia lectus in urna vestibulum, ac ornare neque tincidunt."]);function yt(t){var e=[];while(e.length<t)e.push(wt[Math.floor(Math.random()*wt.length)]);return"<p>"+e.join("</p>\n<p>")+"</p>"}var xt=["Vita brevis ars longa","Ultra posse nemo obligatur","A capite ad calcem","A potiori fit denominatio","A probis probari, ab improbis improbari aequa laus est","Pictoribus atque poetis","Porta itineri longissima","Quid est veritas?","Invia virtuti nulla est via","Aquĭla non captat muscas","Cetĕrum censeo Carthagĭnem esse delendam","Cujusvis homĭnis est errāre; nullīus, sine insipientis, in irrōre perseverāre","Homo sum: humāni nihil a me aliēnum puto","Parturiunt montes, nascētur ridicŭlus mus","Repetitio est mater studiōrum","Virtūtem primam esse puta compescĕre linguam","Vivĕre est militāre","Trahit sua quemque voluptas","Semper homo bonus tiro est","Tertium non datur"];function At(){return xt[Math.floor(Math.random()*xt.length)]}var Ct=["Picto","Volens nolens","Urbi et orbi","Ultĭma ratio","Status quo","Vade mecum","Sine irā","Sapienti sat","Quo vadis?","Sub rosā","Aeternitātis","Gloria Mundi","Persōna","Post factum","Post scriptum","Prosit","Panem et Circenses","Qui pro quo","Honōris causā"];function Lt(){return Ct[Math.floor(Math.random()*Ct.length)]}var St={name:"Composer",components:{Preview:N,AddBlockToolbar:F,Modal:nt,Sorter:kt},data:function(){return{showSorter:!1,selection:""}},computed:Object(d["a"])(Object(d["a"])({},Object(i["c"])(["rows","blocks","canUndo","canRedo","hasUnsavedChanges"])),{},{selectedBlock:function(){var t=this;return this.blocks.find((function(e){return e.id===t.selection}))}}),mounted:function(){var t=this;localStorage.blocks?this.loadBlocks():this.resetBlocks(),this.keyboardHandler=function(e){return"KeyS"===e.code&&e.ctrlKey&&t.hasUnsavedChanges?(t.saveBlocks(),e.preventDefault(),!1):"KeyZ"===e.code&&e.ctrlKey&&t.canUndo?(t.undo(),e.preventDefault(),!1):"KeyY"===e.code&&e.ctrlKey&&t.canRedo?(t.redo(),e.preventDefault(),!1):void 0},this.unloadHandler=function(e){t.hasUnsavedChanges&&(e.preventDefault(),e.returnValue="")},document.addEventListener("keydown",this.keyboardHandler),window.addEventListener("beforeunload",this.unloadHandler)},beforeDestroy:function(){document.removeEventListener("keydown",this.keyboardHandler),window.removeEventListener("beforeunload",this.unloadHandler)},methods:Object(d["a"])(Object(d["a"])(Object(d["a"])({},Object(i["b"])(["loadExample","load","save"])),Object(i["d"])(["addBlock","removeBlock","updateBlock","sortBlocks","undo","redo"])),{},{add:function(t){var e=Math.max.apply(Math,this.blocks.map((function(t){return t.row}))),n={id:Object(p["a"])(),type:t};switch(t){case"text":n.header=At(),n.text=yt(2),n.color="#777777",n.background="#ffe6ff",n.row=e+1,n.column=0;break;case"button":n.text=Lt(),n.url="#",n.button="#000",n.color="#777777",n.background="#ffe6ff",n.row=e+1,n.column=0;break;case"image":n.alt=At(),n.src="images/img".concat(Math.ceil(3*Math.random()),".jpg"),n.url="#",n.button="#000",n.color="#777777",n.background="#ffe6ff",n.row=e+1,n.column=0;break}this.addBlock(n)},toggleBackgroundColor:function(){this.selectedBlock&&("#194d19"===this.selectedBlock.background?this.updateBlock({id:this.selectedBlock.id,background:"#ffe6ff",color:"#777777",button:"#000000"}):this.updateBlock({id:this.selectedBlock.id,color:"#777777",button:"#cccccc",background:"#194d19"}))},toggleImage:function(){if(this.selectedBlock){var t=/(\d+)/g.exec(this.selectedBlock.src),e=parseInt(t[0])||1;this.updateBlock({id:this.selectedBlock.id,src:"images/img".concat(e<3?e+1:1,".jpg")})}},toggleHeader:function(){this.selectedBlock&&this.updateBlock({id:this.selectedBlock.id,header:At()})},toggleText:function(){this.selectedBlock&&this.updateBlock({id:this.selectedBlock.id,text:yt(2)})},toggleButtonText:function(){this.selectedBlock&&this.updateBlock({id:this.selectedBlock.id,text:Lt()})},resetBlocks:function(){this.loadExample(),this.selection=this.blocks.length&&this.blocks[0].id},saveBlocks:function(){this.save()},loadBlocks:function(){this.load(),this.selection=this.blocks.length&&this.blocks[0].id}})},Bt=St,Mt=(n("9061"),Object(x["a"])(Bt,l,u,!1,null,"679ee440",null)),_t=Mt.exports,Ot={name:"App",components:{Composer:_t},methods:{sort:function(){this.showSorter=!0}}},jt=Ot,Ht=(n("5c0b"),Object(x["a"])(jt,s,c,!1,null,null,null)),qt=Ht.exports,Vt={changes:[],initialState:[],position:0},Et=(n("13d5"),n("fb6a"),n("99af"),"add"),Pt="remove",$t="update",Tt="sort";function Zt(t,e){switch(e.action){case Et:return[].concat(Object(at["a"])(t),[e.block]).map((function(t){return Object(d["a"])({},t)}));case Pt:return t.filter((function(t){return t.id!==e.id}));case $t:return t.map((function(t){return t.id===e.id?Object(d["a"])(Object(d["a"])({},t),e.changes):Object(d["a"])({},t)}));case Tt:return t.map((function(t){var n=e.order.find((function(e){return e.id===t.id}));return n?Object(d["a"])(Object(d["a"])({},t),n):Object(d["a"])({},t)}));default:throw new Error("unknown action")}}function Rt(t,e,n){var o=Object(at["a"])(t),i=Object(d["a"])({},e),a="row"in i?i.row:n;return o[a]=o[a]||[],o[a].push(i),o}var Ut={blocks:function(t){var e=t.changes,n=t.initialState,o=t.position;return e.slice(0,o).reduce(Zt,n)},rows:function(t,e){var n=Object(at["a"])(e.blocks).sort((function(t,e){return t.row-e.row||t.column-e.column}));return n.reduce(Rt,[]).filter((function(t){return Boolean(t)}))},normalizedBlocks:function(t,e){return e.rows.filter((function(t){return Boolean(t)})).map((function(t,e){return t.filter((function(t){return Boolean(t)})).map((function(t,n){return Object(d["a"])(Object(d["a"])({},t),{},{row:e,column:n})}))})).flat()},canUndo:function(t){var e=t.position;return e>0},canRedo:function(t){var e=t.changes,n=t.position;return n<e.length},hasUnsavedChanges:function(t){var e=t.changes;return e.length}},It={addBlock:function(t,e){t.changes=[].concat(Object(at["a"])(t.changes.slice(0,t.position)),[{action:Et,block:e}]),t.position=t.changes.length},removeBlock:function(t,e){t.changes=[].concat(Object(at["a"])(t.changes.slice(0,t.position)),[{action:Pt,id:e}]),t.position=t.changes.length},updateBlock:function(t,e){var n=e.id,o=Object(v["a"])(e,["id"]);t.changes=[].concat(Object(at["a"])(t.changes.slice(0,t.position)),[{action:$t,id:n,changes:o}]),t.position=t.changes.length},sortBlocks:function(t,e){t.changes=[].concat(Object(at["a"])(t.changes.slice(0,t.position)),[{action:Tt,order:e}]),t.position=t.changes.length},undo:function(t){t.position>0&&t.position--},redo:function(t){t.position<t.changes.length&&t.position++},replace:function(t,e){for(var n in e)t[n]=e[n]}},Dt=[{id:"i1",type:"image",src:"images/img1.jpg",url:"#",alt:"Ultra posse nemo obligatur",background:"#194d19",row:0,column:0},{id:"i2",type:"image",src:"images/img2.jpg",url:"#",alt:"Semper homo bonus tiro est",background:"#194d19",row:0,column:1},{id:"i3",type:"image",src:"images/img3.jpg",url:"#",alt:"Quid est veritas?",background:"#194d19",row:0,column:2},{id:"t1",type:"text",header:"Vita brevis ars longa",text:"Sed aliquet tempus mauris, ac mollis magna semper sit amet. Nunc nulla dolor, sollicitudin et nisi sed, sagittis mattis arcu. Morbi blandit sagittis enim sed ullamcorper.",color:"#777777",background:"#ffe6ff",row:1,column:0},{id:"b1",type:"button",text:"Picto",color:"#ccc",url:"#",button:"#000",background:"#ffe6ff",row:1,column:1},{id:"t2",type:"text",header:"Virtūtem primam esse puta compescĕre linguam",text:"Etiam pellentesque neque sed accumsan blandit. Quisque posuere ex molestie odio maximus, nec commodo diam condimentum.",color:"#777777",background:"#ffe6ff",row:2,column:0},{id:"b2",type:"button",text:"Persōna",color:"#777777",url:"#",button:"#ccc",background:"#194d19",row:3,column:0},{id:"b3",type:"button",text:"Aeternitātis",color:"#777777",url:"#",button:"#ccc",background:"#194d19",row:3,column:1},{id:"b4",type:"button",text:"Prosit",color:"#777777",url:"#",button:"#ccc",background:"#194d19",row:3,column:2}],Nt={save:function(t){var e=t.commit,n=t.getters;localStorage.blocks=JSON.stringify(n.normalizedBlocks),e("replace",{initialState:n.normalizedBlocks,changes:[],position:0})},load:function(t){var e=t.commit;e("replace",{initialState:JSON.parse(localStorage.blocks||"[]"),changes:[],position:0})},loadExample:function(t){var e=t.commit;e("replace",{initialState:Dt,changes:[],position:0})}},Qt=!0,Kt={state:Vt,getters:Ut,mutations:It,actions:Nt,strict:Qt};o["a"].use(i["a"]),o["a"].use(r.a);var zt=new i["a"].Store(Kt);o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(qt)},store:zt}).$mount("#app")},"57c6":function(t,e,n){"use strict";n("639b")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"639b":function(t,e,n){},7400:function(t,e,n){},9061:function(t,e,n){"use strict";n("3cba")},"9a39":function(t,e,n){"use strict";n("a9ff")},"9c0c":function(t,e,n){},a398:function(t,e,n){},a9ff:function(t,e,n){},af84:function(t,e,n){"use strict";n("a398")},c4fa:function(t,e,n){},e2cb:function(t,e,n){},ea19:function(t,e,n){},ebce:function(t,e,n){"use strict";n("e2cb")}});
//# sourceMappingURL=app.d688ad01.js.map