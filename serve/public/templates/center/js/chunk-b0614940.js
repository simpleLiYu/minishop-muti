(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0614940"],{"437a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"certify-body"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),i("div",{staticClass:"certify-desc"},[t._v("提交网站认证后，可使用更多收款方式、短信等功能，并自动开启代收服务。")]),i("div",{staticClass:"certify-tip"},[t._v("个人认证审核周期为1-3个工作日，企业认证审核周期为3-7个工作日，如审核不通过，需重新提交认证申请。")]),t.certify.status&&"failed"===t.certify.status?i("div",{staticClass:"certify-status-tip"},[t._v(" 审核不通过，请修改认证资料。 ")]):t._e(),t.certify.status&&"pending"===t.certify.status&&!t.isEdit?i("div",{staticClass:"certify-status-tip"},[t._v(" 审核已提交，请等待审核结果。 ")]):t._e(),t.loading||t.certify.status?t._e():i("div",{staticClass:"certify-status-tip"},[t._v(" 暂未实名认证，请填写下列信息进行认证。 ")]),t.certify.name?i("div",{staticStyle:{"margin-bottom":"20px"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){t.isEdit=!0}}},[t._v("修改")]),t.isEdit?i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.isEdit=!1}}},[t._v("取消")]):t._e()],1):t._e(),t.isEdit?t._e():i("div",{staticClass:"certify-form"},[i("div",[i("div",{staticClass:"form-title"},[t._v("认证类型")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.type_value))])]),"person"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("真实姓名")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.name))])]):t._e(),i("div",[i("div",{staticClass:"form-title"},[t._v("手机号码")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.mobile))])]),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("座机号码")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.telephone))])]):t._e(),i("div",[i("div",{staticClass:"form-title"},[t._v(t._s("company"===t.certify.type?"企业":"身份证")+"地址")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.address))])]),"person"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("身份证号码")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.id_no))])]):t._e(),"person"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("手持证件")]),i("el-image",{staticStyle:{width:"300px",height:"200px","border-radius":"5px",border:"1px solid #eee"},attrs:{fit:"scale-down",src:t.certify.images[0]}},[i("div",{staticClass:"image-error",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"iconfont icontupian1"})]),i("div",{staticClass:"image-error",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian1"})])])],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("企业名称")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.company_name))])]):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("统一社会信用代码/企业注册号")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.id_no))])]):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("企业法人姓名")]),i("div",{staticClass:"form-content"},[t._v(t._s(t.certify.name))])]):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("营业执照")]),i("el-image",{staticStyle:{width:"300px",height:"200px","border-radius":"5px",border:"1px solid #eee"},attrs:{fit:"scale-down",src:t.certify.images[0]}},[i("div",{staticClass:"image-error",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"iconfont icontupian1"})]),i("div",{staticClass:"image-error",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian1"})])])],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("法人身份证（正面）")]),i("el-image",{staticStyle:{width:"300px",height:"200px","border-radius":"5px",border:"1px solid #eee"},attrs:{fit:"scale-down",src:t.certify.images[1]}},[i("div",{staticClass:"image-error",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"iconfont icontupian1"})]),i("div",{staticClass:"image-error",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian1"})])])],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("法人身份证（反面）")]),i("el-image",{staticStyle:{width:"300px",height:"200px","border-radius":"5px",border:"1px solid #eee"},attrs:{fit:"scale-down",src:t.certify.images[2]}},[i("div",{staticClass:"image-error",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"iconfont icontupian1"})]),i("div",{staticClass:"image-error",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian1"})])])],1):t._e()]),t.isEdit?i("div",{staticClass:"certify-form"},[i("div",[i("div",{staticClass:"form-title"},[t._v("认证类型")]),i("el-radio",{attrs:{border:"",label:"person"},on:{change:function(e){return t.changeType("person")}},model:{value:t.certify.type,callback:function(e){t.$set(t.certify,"type",e)},expression:"certify.type"}},[t._v("个人认证")]),i("el-radio",{attrs:{border:"",label:"company"},on:{change:function(e){return t.changeType("company")}},model:{value:t.certify.type,callback:function(e){t.$set(t.certify,"type",e)},expression:"certify.type"}},[t._v("企业认证")])],1),"person"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("真实姓名")]),i("el-input",{model:{value:t.certify.name,callback:function(e){t.$set(t.certify,"name",e)},expression:"certify.name"}})],1):t._e(),i("div",[i("div",{staticClass:"form-title"},[t._v("手机号码")]),i("el-input",{model:{value:t.certify.mobile,callback:function(e){t.$set(t.certify,"mobile",e)},expression:"certify.mobile"}})],1),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("座机号码")]),i("el-input",{model:{value:t.certify.telephone,callback:function(e){t.$set(t.certify,"telephone",e)},expression:"certify.telephone"}})],1):t._e(),i("div",[i("div",{staticClass:"form-title"},[t._v(t._s("company"===t.certify.type?"企业":"身份证")+"地址")]),i("el-input",{model:{value:t.certify.address,callback:function(e){t.$set(t.certify,"address",e)},expression:"certify.address"}})],1),"person"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("身份证号码")]),i("el-input",{model:{value:t.certify.id_no,callback:function(e){t.$set(t.certify,"id_no",e)},expression:"certify.id_no"}})],1):t._e(),"person"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("手持证件")]),i("el-image",{staticStyle:{width:"300px",height:"200px","border-radius":"5px",border:"1px solid #eee"},attrs:{fit:"scale-down",src:t.certify.image_0}},[i("div",{staticClass:"image-error",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("加载中...")]),i("div",{staticClass:"image-error",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian1"})])]),i("el-upload",{attrs:{name:"file",headers:{Authorization:"Bearer "+t.$store.getters.token},action:"//"+t.$store.getters.shop_url+"."+t.$store.getters.shop_host+"/api/center/shop/authenticate/image","before-upload":t.beforeUpload,"show-file-list":!1,"on-success":t.successUploadPic}},[i("el-button",{attrs:{type:"text"}},[t._v("上传照片")])],1)],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("企业名称")]),i("el-input",{model:{value:t.certify.company_name,callback:function(e){t.$set(t.certify,"company_name",e)},expression:"certify.company_name"}})],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("统一社会信用代码/企业注册号")]),i("el-input",{model:{value:t.certify.id_no,callback:function(e){t.$set(t.certify,"id_no",e)},expression:"certify.id_no"}})],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("企业法人姓名")]),i("el-input",{model:{value:t.certify.name,callback:function(e){t.$set(t.certify,"name",e)},expression:"certify.name"}})],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("营业执照")]),t._v(" "+t._s(t.certify.images[0])+" "),i("el-image",{staticStyle:{width:"300px",height:"200px","border-radius":"5px",border:"1px solid #eee"},attrs:{fit:"scale-down",src:t.certify.image_0}},[i("div",{staticClass:"image-error",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("加载中...")]),i("div",{staticClass:"image-error",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian1"})])]),i("el-upload",{attrs:{name:"file",headers:{Authorization:"Bearer "+t.$store.getters.token},action:"//"+t.$store.getters.shop_url+"."+t.$store.getters.shop_host+"/api/center/shop/authenticate/image","before-upload":t.beforeUpload,"show-file-list":!1,"on-success":t.successUploadPass}},[i("el-button",{attrs:{type:"text"}},[t._v("上传照片")])],1)],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("法人身份证（正面）")]),i("el-image",{staticStyle:{width:"300px",height:"200px","border-radius":"5px",border:"1px solid #eee"},attrs:{fit:"scale-down",src:t.certify.image_1}},[i("div",{staticClass:"image-error",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("加载中...")]),i("div",{staticClass:"image-error",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian1"})])]),i("el-upload",{attrs:{name:"file",headers:{Authorization:"Bearer "+t.$store.getters.token},action:"//"+t.$store.getters.shop_url+"."+t.$store.getters.shop_host+"/api/center/shop/authenticate/image","before-upload":t.beforeUpload,"show-file-list":!1,"on-success":t.successUploadCover}},[i("el-button",{attrs:{type:"text"}},[t._v("上传照片")])],1)],1):t._e(),"company"===t.certify.type?i("div",[i("div",{staticClass:"form-title"},[t._v("法人身份证（反面）")]),i("el-image",{staticStyle:{width:"300px",height:"200px","border-radius":"5px",border:"1px solid #eee"},attrs:{fit:"scale-down",src:t.certify.image_2}},[i("div",{staticClass:"image-error",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("加载中...")]),i("div",{staticClass:"image-error",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian1"})])]),i("el-upload",{attrs:{name:"file",headers:{Authorization:"Bearer "+t.$store.getters.token},action:"//"+t.$store.getters.shop_url+"."+t.$store.getters.shop_host+"/api/center/shop/authenticate/image","before-upload":t.beforeUpload,"show-file-list":!1,"on-success":t.successUploadBack}},[i("el-button",{attrs:{type:"text"}},[t._v("上传照片")])],1)],1):t._e(),i("div",[i("el-checkbox",{staticStyle:{"margin-bottom":"15px"},model:{value:t.contrast_confirm,callback:function(e){t.contrast_confirm=e},expression:"contrast_confirm"}},[t._v(" 我已阅读并同意 ")]),i("span",{staticClass:"contrast-btn",on:{click:function(e){t.contrastShow=!0}}},[t._v("代收服务协议")])],1)]):t._e(),t.isEdit?i("div",{staticStyle:{"margin-bottom":"20px"}},[i("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirm}},[t._v("提交认证")])],1):t._e()],1),i("el-dialog",{attrs:{visible:t.contrastShow,title:"代收服务协议",center:""},on:{close:function(e){t.contrastShow=!1}}},[i("div",[t._v(t._s(t.contrast))]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.contrastShow=!1}}},[t._v("关闭")])],1)])],1)},o=[],a=(i("d81d"),i("b0c0"),i("9c1a")),r=i("825f"),c={data:function(){return{loading:!1,certify:{type:"person",address:"",id_no:"",mobile:"",name:"",company_name:"",status:"",telephone:"",images:[]},ori_type:"",ori_info:{type:"",address:"",id_no:"",mobile:"",name:"",company_name:"",status:"",telephone:"",images:[]},contrast_confirm:!0,isEdit:!1,btnLoading:!1,contrastShow:!1,contrast:""}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this;this.loading=!0,Object(a["b"])().then((function(e){Object(r["b"])().then((function(e){t.contrast=e.data})),e.data.body?(e.data.body["image_0"]="",e.data.body["image_1"]="",e.data.body["image_2"]="",0!==e.data.body.images.length&&e.data.body.images.map((function(t,i){e.data.body["image_"+i]=t})),t.ori_type=e.data.body.type,t.certify=e.data.body,t.ori_info=e.data.body,"failed"===e.data.body.status?t.isEdit=!0:t.isEdit=!1):(t.isEdit=!0,t.certify["image_0"]="",t.certify["image_1"]="",t.certify["image_2"]="",t.ori_type["image_0"]="",t.ori_type["image_1"]="",t.ori_type["image_2"]=""),t.loading=!1})).catch((function(){t.loading=!1}))},changeType:function(t){t!==this.ori_type?(this.certify={type:t,address:"",id_no:"",mobile:"",name:"",company_name:"",status:"",telephone:"",images:[]},this.certify.images="company"===t?["","",""]:[""]):(this.certify.type=t,this.certify.address=this.ori_info.address,this.certify.id_no=this.ori_info.id_no,this.certify.mobile=this.ori_info.mobile,this.certify.name=this.ori_info.name,this.certify.company_name=this.ori_info.company_name,this.certify.status=this.ori_info.status,this.certify.telephone=this.ori_info.telephone,this.certify.images=this.ori_info.images,this.$set(this.certify,"image_0",this.ori_info.image_0),this.$set(this.certify,"image_1",this.ori_info.image_1),this.$set(this.certify,"image_2",this.ori_info.image_2))},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type,i=t.size/1024/1024<2;return e||this.$message.error("上传图片只能是 JPG 或 PNG 格式!"),i||this.$message.error("上传图片大小不能超过 2MB!"),e&&i},successUploadPic:function(t){this.certify.images[0]=t.body,this.certify.image_0=t.body,this.ori_info.images[0]=t.body,this.ori_info.image_0=t.body},successUploadPass:function(t){this.certify.images[0]=t.body,this.certify.image_0=t.body,this.ori_info.images[0]=t.body,this.ori_info.image_0=t.body},successUploadCover:function(t){this.certify.images[1]=t.body,this.certify.image_1=t.body,this.ori_info.images[1]=t.body,this.ori_info.image_1=t.body},successUploadBack:function(t){this.certify.images[2]=t.body,this.certify.image_2=t.body,this.ori_info.images[2]=t.body,this.ori_info.image_2=t.body},confirm:function(){this.contrast_confirm?(this.btnLoading=!0,this.certify.status?this.updateCertify():this.createCertify()):this.$message.warning("请阅读并同意")},createCertify:function(){var t=this;Object(a["a"])(this.certify).then((function(){t.btnLoading=!1,t.isEdit=!1,t.$emit("认证申请已成功提交，请等待审核结果"),t.getInfo()})).catch((function(){t.btnLoading=!1}))},updateCertify:function(){var t=this;Object(a["c"])(this.certify).then((function(){t.btnLoading=!1,t.isEdit=!1,t.$emit("认证申请已修改，请等待审核结果"),t.getInfo()})).catch((function(){t.btnLoading=!1}))}}},n=c,l=(i("cf48"),i("8e7a"),i("2877")),d=Object(l["a"])(n,s,o,!1,null,"6fcfee39",null);e["default"]=d.exports},"7fbc":function(t,e,i){},"825f":function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"c",(function(){return m})),i.d(e,"d",(function(){return h})),i.d(e,"f",(function(){return _})),i.d(e,"b",(function(){return v})),i.d(e,"e",(function(){return g}));i("d3b7"),i("ac1f"),i("1276");var s=i("d4ec"),o=i("bee2"),a=i("bc3a"),r=i.n(a),c=i("4360"),n=i("5f87"),l=i("5c96"),d=r.a.create({baseURL:location.origin+"/api"}),f=function(){function t(){Object(s["a"])(this,t)}return Object(o["a"])(t,[{key:"success",value:function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[t]("success",e,i)}},{key:"warning",value:function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[t]("warning",e,i)}},{key:"info",value:function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[t]("info",e,i)}},{key:"error",value:function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[t]("error",e,i)}},{key:t,value:function(t,e,i){i?0===document.getElementsByClassName("el-message").length&&l["Message"][t](e):l["Message"][t](e)}}]),t}(),p=new f;d.interceptors.request.use((function(t){return c["a"].getters.token&&(t.headers["Authorization"]="Bearer "+Object(n["b"])()),t}),(function(t){return Promise.reject(t)})),d.interceptors.response.use((function(t){return t}),(function(t){if(401===t.response.status){p.error("登录超时，请重新登录");var e=location.origin.split("."),i="//account."+e[e.length-2]+"."+e[e.length-1]+"/login";c["a"].dispatch("logout"),setTimeout((function(){location.href=i}),500)}return Promise.reject(t)}));var y=d;function u(t){return y({url:"/shop/order",method:"post",data:t})}function m(t){return y({url:"/shop/order/"+t,method:"get"})}function h(){return y({url:"/shop/sys/payment_method",method:"get"})}function _(){return y({url:"/shop/sys/sms",method:"get"})}function v(){return y({url:"/account/contrast",method:"get"})}function g(){return y({url:"/shop/sys/level",method:"get"})}},"8e7a":function(t,e,i){"use strict";var s=i("7fbc"),o=i.n(s);o.a},"9c1a":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return a})),i.d(e,"c",(function(){return r}));var s=i("b775");function o(){return Object(s["a"])({url:"shop/authenticate",method:"get"})}function a(t){return Object(s["a"])({url:"shop/authenticate",method:"post",data:t})}function r(t){return Object(s["a"])({url:"shop/authenticate",method:"put",data:t})}},a63b:function(t,e,i){},cf48:function(t,e,i){"use strict";var s=i("a63b"),o=i.n(s);o.a}}]);