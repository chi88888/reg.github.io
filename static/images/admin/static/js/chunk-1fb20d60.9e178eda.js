(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fb20d60"],{"1d04":function(e,t,o){},2793:function(e,t,o){"use strict";o("1d04")},"3daa":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content-page"},[o("div",{staticClass:"content-nav"},[o("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[o("el-breadcrumb-item",[e._v("显示设置")])],1),o("div",{staticClass:"operation-nav"},[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitInfo}},[e._v("确定保存")])],1)],1),o("div",{staticClass:"content-main"},[o("div",{staticClass:"form-table-box"},[o("el-form",{ref:"infoForm",attrs:{model:e.infoForm,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"广告",prop:"type"}},[o("el-radio-group",{model:{value:e.infoForm.banner,callback:function(t){e.$set(e.infoForm,"banner",t)},expression:"infoForm.banner"}},[o("el-radio",{attrs:{label:1}},[e._v("显示")]),o("el-radio",{attrs:{label:0}},[e._v("不显示")])],1)],1),o("el-form-item",{attrs:{label:"公告"}},[o("el-radio-group",{model:{value:e.infoForm.notice,callback:function(t){e.$set(e.infoForm,"notice",t)},expression:"infoForm.notice"}},[o("el-radio",{attrs:{label:1}},[e._v("显示")]),o("el-radio",{attrs:{label:0}},[e._v("不显示")])],1)],1),o("el-form-item",{attrs:{label:"广告下的图标"}},[o("el-radio-group",{model:{value:e.infoForm.channel,callback:function(t){e.$set(e.infoForm,"channel",t)},expression:"infoForm.channel"}},[o("el-radio",{attrs:{label:1}},[e._v("显示")]),o("el-radio",{attrs:{label:0}},[e._v("不显示")])],1),o("div",{staticClass:"form-tip"},[e._v("那几个图标")])],1),o("el-form-item",{attrs:{label:"首页分类图片或文字"}},[o("el-radio-group",{model:{value:e.infoForm.index_banner_img,callback:function(t){e.$set(e.infoForm,"index_banner_img",t)},expression:"infoForm.index_banner_img"}},[o("el-radio",{attrs:{label:1}},[e._v("图片")]),o("el-radio",{attrs:{label:0}},[e._v("文字")])],1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitInfo}},[e._v("确定保存")]),o("el-button",{on:{click:e.goBackPage}},[e._v("取消")])],1)],1)],1)])])},n=[],i=(o("a3be"),{data:function(){return{value:[],infoForm:{}}},methods:{test:function(){console.log(this.value)},goBackPage:function(){this.$router.go(-1)},onSubmitInfo:function(){var e=this;this.$refs["infoForm"].validate((function(t){if(!t)return!1;e.axios.post("admin/showsetStore",e.infoForm).then((function(t){0===t.data.errno?e.$message({type:"success",message:"保存成功"}):e.$message({type:"error",message:"保存失败"})}))}))},getInfo:function(){if(this.infoForm.id<=0)return!1;var e=this;this.axios.get("admin/showset").then((function(t){var o=t.data.data;e.infoForm=o}))}},components:{},mounted:function(){this.getInfo()}}),r=i,l=(o("2793"),o("1805")),s=Object(l["a"])(r,a,n,!1,null,"89de1d2a",null);t["default"]=s.exports}}]);