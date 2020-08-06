(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f1d1"],{b1f2:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"items-page"},[i("v-toolbar",{attrs:{dense:"",color:"primary",dark:!0}},[i("v-icon",{staticClass:"mr-4",on:{click:t.backToList}},[t._v("mdi-arrow-left")]),i("v-toolbar-title",[i("p",{staticClass:"text large"},[t._v("Random Picker")]),i("p",{staticClass:"text small"},[t._v("Select / Edit List Items")])]),i("v-spacer")],1),i("v-main",[i("center",[i("v-card",[i("v-row",{staticClass:"py-1 px-4 align-center"},[i("v-col",{staticClass:"pa-0 mr-3 text-center"},[i("p",{staticClass:"text grey--text"},[t._v("List Name:")])]),i("p",{staticClass:"text pink--text text-body-1"},[t._v(t._s(t.listData.text))]),i("v-spacer"),i("v-icon",{staticClass:"mx-2",attrs:{color:"grey",size:"20px"},on:{click:t.showEditListNameDialog}},[t._v("mdi-pencil")])],1)],1),t.listData.options.length?t._e():i("p",{staticClass:"text small grey--text text--darken-2 ma-4"},[t._v("Press the + button to add new item to the list.")])],1),i("v-list",{attrs:{flat:"",dense:""}},[i("v-list-item-group",{attrs:{color:"pink"}},[t._l(t.listData.options,(function(e,a){return[i("v-list-item",{key:"list-option_"+a,on:{click:function(i){return t.showAddDialog(e)}}},[i("color-picker",{attrs:{color:e.color}}),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1),i("v-spacer"),i("v-list-item-icon",{on:{click:function(i){return t.showDeleteDialog(i,e)}}},[i("v-icon",{staticClass:"mx-2",attrs:{color:"grey",size:"20px"}},[t._v("mdi-delete-forever")])],1)],1),a+1<t.listData.options.length?i("v-divider",{key:a}):t._e()]}))],2)],1),t.editNameDialog.show?i("edit-name",{attrs:{dialog:t.editNameDialog,editMode:!0},on:{save:t.editListName}}):t._e(),t.addState.show?i("edit-option",{attrs:{dialog:t.addState},on:{setColor:t.selectColor,save:t.updateOptions}}):t._e(),t.deleteState.show?i("delete-dialog",{attrs:{dialog:t.deleteState,text:"Are you sure you want to delete the item:"},on:{delete:t.deleteOption}}):t._e(),i("v-fab-transition",[t.addState.show?t._e():i("v-btn",{attrs:{fixed:"",fab:"",dark:"",small:"",bottom:"",right:"",color:"pink"},on:{click:function(e){return t.showAddDialog()}}},[i("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1)},o=[],s=(i("7db0"),i("d3b7"),i("ac1f"),i("5319"),i("5530")),n=i("2f62"),l={name:"Items",props:["id"],components:{EditName:function(){return Promise.all([i.e("chunk-fbaf9712"),i.e("chunk-56177c72"),i.e("chunk-2d213356")]).then(i.bind(null,"ac64"))},DeleteDialog:function(){return Promise.all([i.e("chunk-fbaf9712"),i.e("chunk-2d20f955")]).then(i.bind(null,"b3f4"))},EditOption:function(){return Promise.all([i.e("chunk-fbaf9712"),i.e("chunk-56177c72"),i.e("chunk-65d8a33c")]).then(i.bind(null,"6f71"))},ColorPicker:function(){return i.e("chunk-2d0deca7").then(i.bind(null,"86c6"))}},data:function(){return{editNameDialog:{show:!1,item:null},deleteState:{show:!1,item:null},newOption:{text:"New Item",color:"",id:null},addState:{show:!1,item:null}}},methods:{showEditListNameDialog:function(){this.editNameDialog.show=!0,this.editNameDialog.item=Object.assign({},this.listData)},editListName:function(){this.editNameDialog.show=!1,this.$store.commit("updateList",this.editNameDialog.item)},selectColor:function(t){this.addState.item.color=t},showAddDialog:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(s["a"])({},this.newOption);this.addState.show=!0,t.color||(t.colorIndex=this.listData.options.length),this.addState.item=t},updateOptions:function(){this.addState.show=!1,this.$store.commit("updateOptions",{item:this.listData,option:this.addState.item})},showDeleteDialog:function(t,e){t.stopPropagation(),this.deleteState.show=!0,this.deleteState.item=e},deleteOption:function(){this.deleteState.show=!1,this.$store.commit("removeOption",{item:this.listData,option:this.deleteState.item})},backToList:function(){this.$router.push({name:"List"})}},computed:Object(s["a"])({listData:function(){var t=this;return this.list.find((function(e){return e.id==t.id}))}},Object(n["b"])(["list"])),created:function(){this.$store.getters.listData(this.id)||this.$router.replace({name:"List"})}},r=l,c=i("2877"),d=i("6544"),m=i.n(d),h=i("8336"),u=i("b0af"),p=i("62ad"),f=i("ce7e"),v=i("0789"),b=i("132d"),g=i("8860"),w=i("da13"),k=i("5d23"),D=i("1baa"),x=i("34c3"),_=i("f6c4"),C=i("0fd9b"),S=i("2fa4"),L=i("71d9"),V=i("2a7f"),N=Object(c["a"])(r,a,o,!1,null,null,null);e["default"]=N.exports;m()(N,{VBtn:h["a"],VCard:u["a"],VCol:p["a"],VDivider:f["a"],VFabTransition:v["b"],VIcon:b["a"],VList:g["a"],VListItem:w["a"],VListItemContent:k["a"],VListItemGroup:D["a"],VListItemIcon:x["a"],VListItemTitle:k["b"],VMain:_["a"],VRow:C["a"],VSpacer:S["a"],VToolbar:L["a"],VToolbarTitle:V["a"]})}}]);
//# sourceMappingURL=chunk-2d20f1d1.77585ec8.js.map