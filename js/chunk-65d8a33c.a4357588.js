(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65d8a33c","chunk-2d0deca7"],{"6f71":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{staticClass:"edit-name-component",attrs:{"max-width":"290"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Edit Item name")]),a("v-card-text",{staticClass:"pb-2"},[a("v-container",{staticClass:"pt-0"},[a("v-row",{staticClass:"align-center"},[a("v-col",{staticClass:"pa-0 my-2 text-center"},[a("p",{staticClass:"text grey--text"},[t._v("List Name")])]),t.dialog.item?a("v-col",{staticClass:"px-0"},[a("v-text-field",{ref:"qInput",attrs:{autofocus:"",label:"",placeholder:"",color:"pink"},on:{focus:function(t){return t.target.select()}},model:{value:t.dialog.item.text,callback:function(e){t.$set(t.dialog.item,"text",e)},expression:"dialog.item.text"}})],1):t._e()],1),t.dialog.item?a("v-row",t._l(t.colors,(function(e){return a("div",{key:e,on:{click:function(a){return t.$emit("setColor",e)}}},[a("color-picker",{attrs:{rounded:!0,color:e,selected:t.dialog.item.color==e}})],1)})),0):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog.show=!1}}},[t._v("CANCEL")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.$emit("save")}}},[t._v("SAVE")])],1)],1)],1)},r=[],n=a("86c6"),i={name:"EditOption",props:["dialog"],components:{ColorPicker:n["default"]},data:function(){return{colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#00bcd4","#009688","#4caf50","#ff5722","#795548","#9e9e9e","#607d8b"]}},created:function(){var t=this.dialog.item.colorIndex;void 0!==t&&(t>=this.colors.length&&(t%=this.colors.length),this.dialog.item.color=this.colors[t],delete this.dialog.item.colorIndex)}},c=i,s=a("2877"),l=a("6544"),d=a.n(l),u=a("8336"),f=a("b0af"),p=a("99d9"),v=a("62ad"),m=(a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a"),a("2b0e"));function g(t){return m["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var o=a.props,r=a.data,n=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var i=r.attrs;if(i){r.attrs={};var c=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(r.staticClass+=" ".concat(c.join(" ")))}return o.id&&(r.domProps=r.domProps||{},r.domProps.id=o.id),e(o.tag,r,n)}})}var b=a("d9f7"),h=g("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,o=e.props,r=e.data,n=e.children,i=r.attrs;return i&&(r.attrs={},a=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),o.id&&(r.domProps=r.domProps||{},r.domProps.id=o.id),t(o.tag,Object(b["a"])(r,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(a||[])}),n)}}),C=a("169a"),x=a("0fd9b"),k=a("2fa4"),w=a("8654"),V=Object(s["a"])(c,o,r,!1,null,null,null);e["default"]=V.exports;d()(V,{VBtn:u["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:v["a"],VContainer:h,VDialog:C["a"],VRow:x["a"],VSpacer:k["a"],VTextField:w["a"]})},"86c6":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"color-picker-component"},[a("div",{class:t.rounded?"round":"",style:{backgroundColor:t.color}}),t.selected?a("v-icon",{attrs:{color:"white"}},[t._v("mdi-check")]):t._e()],1)},r=[],n={name:"ColorPicker",props:["color","rounded","selected"],data:function(){return{}}},i=n,c=a("2877"),s=a("6544"),l=a.n(s),d=a("132d"),u=Object(c["a"])(i,o,r,!1,null,null,null);e["default"]=u.exports;l()(u,{VIcon:d["a"]})}}]);
//# sourceMappingURL=chunk-65d8a33c.a4357588.js.map