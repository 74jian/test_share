(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6b56500"],{"020a":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"#_magnifier_layer{position:absolute;z-index:9999;background:#f9f9f9}._magnifier{position:relative;display:inline-block}._magnifier img{vertical-align:middle}._magnifier_zoom{position:absolute;top:0;left:0;z-index:10;pointer-events:none}",""])},"0798":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdGNUM1MDdFQ0RGRDExRTlBNkRBOUIzQ0UyRjQ4OTRBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdGNUM1MDdGQ0RGRDExRTlBNkRBOUIzQ0UyRjQ4OTRBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0Y1QzUwN0NDREZEMTFFOUE2REE5QjNDRTJGNDg5NEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0Y1QzUwN0RDREZEMTFFOUE2REE5QjNDRTJGNDg5NEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7myAgDAAABU0lEQVR42rSUPUvDUBSGb+qFWARnRRddHAQFf4KziKObW8BV/EBcBSn9AZos6uDg6OjiLAhaaxUR3DspNRXBgvG55RSuIaalSQ883MubkzfJPS9xfN+fVEqdwqLKVlewpsXsG+bho0+zUSgZLy1vNgcP/Th5ntdegyDYYbkviB6q7NX+uoLKuQZuWIQy7IMWzZUDL8leyTXTU+bshm0DHTNchU3Z38AFrMC2aLdwDkuwJ9ojnPxnWIEvaEFNNDP9T2vfWUO5v5L2hncwDj/W5J9Es9PwChPmyIhNI83QVCNBC3vUBjdlNwcvt2NYhY0spkTHFY+qw99mQeIxZk3zT78Vm3U4SOgZgTosa8nWNMwkDGlKcncG7xJ6k9PrWJ+J2QsTb2lLqCU82WTsGA6hCZdwlPS3SYtNvHbhGYZgtltzL4ZvsCVhr3drdqIoyjWHvwIMAFX+UqY3U9LcAAAAAElFTkSuQmCC"},"0aea":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"goods-details con-box"},[e("div",{staticClass:"page-breadcrumb"},[e("span",[t._v("您当前的位置：")]),e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",{attrs:{to:{path:"flash"==t.$route.query.type?"/flashsale":"/goods"}}},[t._v(t._s("flash"==t.$route.query.type?"限时购":"商品中心"))]),e("el-breadcrumb-item",[t._v("商品详情")])],1)],1),e("div",{staticClass:"details-main"},[t._m(0),e("div",{staticClass:"details-con"},[e("div",{staticClass:"con-tab"},[e("el-tabs",{attrs:{type:"card"},model:{value:t.contype,callback:function(i){t.contype=i},expression:"contype"}},[e("el-tab-pane",{attrs:{label:"商品详情",name:"1"}}),e("el-tab-pane",{attrs:{label:"评论列表",name:"2"}})],1)],1),1==t.contype?e("div",{staticClass:"goods-rich-text"},[t._m(1)]):t._e(),2==t.contype?e("div",{staticClass:"comments-list"},t._l(5,function(i,a){return e("div",{key:a,staticClass:"comment-item"},[e("div",{staticClass:"comment-hd"},[t._m(2,!0),e("div",{staticClass:"comment-rate"},[t._v("商品评价\n                            "),e("el-rate",{attrs:{colors:t.ratecolor,"disabled-void-icon-class":"el-icon-star-off","disabled-void-color":"#999999",disabled:""},model:{value:t.rate,callback:function(i){t.rate=i},expression:"rate"}})],1)]),e("div",{staticClass:"comment-text"},[t._v("这个储料罐品质很好，用起来也很方便，操作简单，商家服务也很好！这个储料罐品质很好，用起来也很方便，操作简单，商家服务也很好！这个储料罐品质很好，用起来也很方便，操作简单，商家服务也很好！")]),e("div",{staticClass:"comment-imgs"}),t._m(3,!0)])}),0):t._e()])])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"details-header"},[e("div",{staticClass:"d-props"}),e("div",{staticClass:"right-info"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"goods-parameters"},[e("div",{staticClass:"parameter-item"},[t._v("型号型号 HZS180搅拌站")]),e("div",{staticClass:"parameter-item"},[t._v("生产率（m3/h） 180 搅拌主机")]),e("div",{staticClass:"parameter-item"},[t._v("型号 JS3000搅拌机")]),e("div",{staticClass:"parameter-item"},[t._v("功率（kw） 2×55")]),e("div",{staticClass:"parameter-item"},[t._v("出料容积（m3） 3")]),e("div",{staticClass:"parameter-item"},[t._v("骨料粒径（mm） ≤150")]),e("div",{staticClass:"parameter-item"},[t._v("骨料仓容积（m3） 4*20")]),e("div",{staticClass:"parameter-item"},[t._v("仓格数 4")]),e("div",{staticClass:"parameter-item"},[t._v("称量精度 骨料（kg） 6500±2%")]),e("div",{staticClass:"parameter-item"},[t._v("水泥（kg） 1800±1%")]),e("div",{staticClass:"parameter-item"},[t._v("粉煤灰（kg） 600±1%")]),e("div",{staticClass:"parameter-item"},[t._v("水（kg） 800±1%")]),e("div",{staticClass:"parameter-item"},[t._v("外加剂（kg） 50±1%")]),e("div",{staticClass:"parameter-item"},[t._v("总功率（kw） 178")]),e("div",{staticClass:"parameter-item"},[t._v("卸料高度（m） 3.8")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"comment-avatar"},[a("img",{attrs:{src:e("1195")}})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"comment-bottom"},[a("span",[t._v("2019-08-28")]),a("span",[t._v("型号：001")]),a("span",[t._v("颜色：白")]),a("a",{staticClass:"pull-right"},[a("img",{attrs:{src:e("0798")}}),t._v("回复")])])}],o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"_magnifier"},[e("img",{attrs:{src:t.src,width:t.width,height:t.height},on:{mouseover:t.handOver,mousemove:t.handMove,mouseout:t.handOut}})])},d=[],l={name:"app",props:{src:{type:String,required:!0},bigsrc:{type:String,required:!0},width:{type:String,default:"auto"},height:{type:String,default:"auto"},configs:{type:Object,default:function(){return{width:750,height:450,maskWidth:50,maskHeight:50,maskColor:"#fff",maskOpacity:.5}}}},data:function(){return{imgObj:{},bigImg:{},mouseMask:{},imgLayer:{},imgRect:{}}},methods:{handMove:function(t){var i=t.pageX-this.imgRect.left,e=t.pageY-this.imgRect.top,a=i*(Math.ceil(this.bigImg.width/this.imgObj.offsetWidth)/1.5),s=e*(Math.ceil(this.bigImg.height/this.imgObj.offsetHeight)/1.5),o=i-this.mouseMask.offsetHeight/2,d=e-this.mouseMask.offsetWidth/2;d<=0&&(d=0),d+this.mouseMask.offsetHeight>=this.imgRect.height&&(d=this.imgRect.height-this.mouseMask.offsetHeight),o<=0&&(o=0),o+this.mouseMask.offsetWidth>=this.imgRect.width&&(o=this.imgRect.width-this.mouseMask.offsetWidth),this.mouseMask.style.webkitTransform="translate3d(".concat(o,"px,").concat(d,"px,0)"),s+this.configs.height>=this.bigImg.height&&(s=this.bigImg.height-this.configs.height),a+this.configs.width>=this.bigImg.width&&(a=this.bigImg.width-this.configs.width),this.imgLayer.style.backgroundPositionX="-".concat(a,"px "),this.imgLayer.style.backgroundPositionY="-".concat(s,"px ")},handOut:function(t){this.imgLayer.remove(),this.mouseMask.remove()},handOver:function(t){if(!document.getElementById("_magnifier_layer")){this.imgObj=this.$el.getElementsByTagName("img")[0],this.imgRect=this.imgObj.getBoundingClientRect(),this.bigImg=new Image,this.bigImg.src=this.bigsrc,this.mouseMask=document.createElement("div"),this.mouseMask.className="_magnifier_zoom",this.mouseMask.style.background=this.configs.maskColor,this.mouseMask.style.height=this.configs.maskWidth+"px",this.mouseMask.style.width=this.configs.maskHeight+"px",this.mouseMask.style.opacity=this.configs.maskOpacity,this.imgObj.parentNode.appendChild(this.mouseMask);var i=document.createElement("div");this.imgLayer=i;var e=this.configs.height,a=this.configs.width;i.id="_magnifier_layer",i.style.width=a+"px",i.style.height=e+"px",i.style.left=this.imgRect.left+this.imgRect.width+"px",i.style.top=this.imgRect.top+"px",i.style.backgroundImage="url('".concat(this.bigsrc,"')"),i.style.backgroundRepeat="no-repeat",document.body.appendChild(i)}}}},m=l,n=(e("84c8"),e("2877")),r=Object(n["a"])(m,o,d,!1,null,null,null),c=r.exports,g={components:{imgZoom:c},data:function(){return{attr1:"",attr2:"",num:1,contype:"1",rate:4,ratecolor:["#FEB915","#FEB915","#FEB915"],viewurl:"",configs:{width:500,height:500,maskWidth:80,maskHeight:80,maskColor:"#E6A23C",maskOpacity:.3},commends:[21,41,12,51],thumbs:["https://img14.360buyimg.com/n0/jfs/t1/62778/39/4104/72770/5d245ebbE9f5d9a39/715f9b3d091b0913.jpg","https://img14.360buyimg.com/n5/jfs/t1/17520/36/5320/128131/5c3d85d1E012b39a4/3400260d8736c2eb.jpg","https://img14.360buyimg.com/n5/jfs/t1/19271/40/5454/126905/5c3d85c0E7868b41b/b076ff4f9e7f94e2.jpg","https://img14.360buyimg.com/n5/jfs/t1/26253/11/9079/77170/5c7c8f99E02262e7f/216ddc202d5f738b.jpg","https://img14.360buyimg.com/n5/jfs/t1/27486/12/5453/150953/5c3d867bE82cd2f27/985e00a3c2536166.jpg"],details:'<div id="description" class="J_DetailSection tshop-psm ke-post"><div id="J_DivItemDesc" class="content"><div class="dm_module" data-id="2506097" data-title="XPS配置" id="ids-module-2506097">&nbsp;</div><div class="dm_module" data-id="2506097" data-title="XPS配置"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/38307713/O1CN01CpIaoy26qbPWlRWOc_!!38307713.jpg" style="max-width: 750.0px;" data-spm-anchor-id="2013.1.0.i0.5c003e49tqdFWk"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/38307713/O1CN01Jshib426qbPUIxuYv_!!38307713.jpg" style="max-width: 750.0px;"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/38307713/O1CN015k2mTe26qbPZd23Zx_!!38307713.jpg" style="max-width: 750.0px;"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/38307713/O1CN01AtvkcC26qbPa8lu5a_!!38307713.jpg" style="max-width: 750.0px;"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/38307713/O1CN01JidLf226qbPYCkNRc_!!38307713.jpg" class="" style="max-width: 750.0px;" width="748" height="704"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/38307713/O1CN01MyJoMS26qbPXLD2Dt_!!38307713.jpg" class="" style="max-width: 750.0px;" width="748" height="1117"></div><div class="dm_module" data-id="2506097" data-title="XPS配置">&nbsp;</div><div class="dm_module" data-id="2506098" data-title="XPS配置" id="ids-module-2506098"><span style="color: #000000;text-align: center;line-height: 1.5;">&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</span><strong style="text-align: center;line-height: 1.5;"><span style="color: #0000ff;">灵越INS13/14/15 7000触控本请移步：</span><a href="http://item.taobao.com/item.htm?id=37166237432" target="_blank"><span style="color: #0000ff;">http://item.taobao.com/item.htm?id=37166237432</span></a><span style="color: #0000ff;">&nbsp;</span></strong></div><div data-id="2506075" data-title="关联推荐" id="ids-module-2506075"><p><strong><span style="font-size: 14.0px;"><span style="color: #0000ff;">Latitude商务超级本请移步：</span><span style="color: #0000ff;"><a href="http://item.taobao.com/item.htm?id=18157005157" target="_blank">http://item.taobao.com/item.htm?id=18157005157</a></span></span></strong></p><p><strong><span style="font-size: 14.0px;"><span style="color: #0000ff;">外星人笔记本介绍请移步：</span><span style="color: #0000ff;"><a href="http://item.taobao.com/item.htm?spm=0.0.0.0.Ku0eGx&amp;id=19634533267" target="_blank">http://item.taobao.com/item.htm?spm=0.0.0.0.Ku0eGx&amp;id=19634533267</a></span></span></strong></p><p><strong><span style="color: #0000ff;">外星人台式机介绍请移步：</span><span style="color: #0000ff;"><a href="https://item.taobao.com/item.htm?spm=a230r.1.14.11.LTfbyu&amp;id=37427787064&amp;ns=1&amp;abbucket=9#detail" target="_blank">http://item.taobao.com/item.htm?spm=0.0.0.0.Ku0eGx&amp;id=19634533267</a></span></strong></p></div><div class="dm_module" data-id="2506133" data-title="产品特色" id="ids-module-2506133"><p>&nbsp;<span style="line-height: 1.5;text-align: center;color: #000000;">&nbsp;</span></p></div><div class="dm_module" data-id="2506145" data-title="实物图" id="ids-module-2506145"><p style="margin-top: 1.12em;margin-bottom: 1.12em;color: #000000;">&nbsp;<span style="color: #0000ff;line-height: 36.0px;font-family: 微软雅黑;font-size: 13.5pt;font-weight: bold;">本店提供免费的中文包安装指导和固态硬盘等配件安装指导服务&nbsp;</span></p></div><p>&nbsp;</p></div></div>'}},created:function(){this.viewurl=this.thumbs[0]},methods:{gobuy:function(){},addcart:function(){}}},p=g,h=(e("7e2f"),Object(n["a"])(p,a,s,!1,null,"f113ae86",null));i["default"]=h.exports},1195:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIzMjQwNzBCQ0RGRjExRTk5QUE0ODMxNTg4MzUzNjdDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIzMjQwNzBDQ0RGRjExRTk5QUE0ODMxNTg4MzUzNjdDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjMyNDA3MDlDREZGMTFFOTlBQTQ4MzE1ODgzNTM2N0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjMyNDA3MEFDREZGMTFFOTlBQTQ4MzE1ODgzNTM2N0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oieaRAAADnElEQVR42uyc646jMAyFl5RCgb7/S/ZnCZRe5yyRItTdUYHYhlAfaUajkQrJ5wsmcZqcTqc/qnFK8VNVlYL4KGutUQrjpbAUlsJSWApLYakUlsJSWApLYSksVbr4CF6v1+PxeD6fj17+/0mS7HY7Y8yu17fDut/v1+v1jdFQt9vNU0vTNMsysPs6WMB0uVzwe6Tr3XuBLJAdDoelkC0A69JrxgcRquAFamVZgtrGEzx8pGmaeaSGyOq6BrUtexYmCVIjQ++jcClcECG5Qc/CxKy1VKR8OLdtu0FYmNVvj7wQdb02BQsu4IoApotzmGEZWJgJq/Hx0IDb4vcWYMHy3DNBKuTzXDlYcCuZachkLl5YYtWQjFUYYSH6ZNxq+CIZKyy3liAGC7fjTo68sCQrxmevWGFJupWLeoU1jVfECV5hfa8YYSVJorDWC4t7uZnx6vJbMgprwu3ihiW5DYPbcQc+b87a7/disATuZWKfgHer6GGlvQRgZVkWd+ngJLBbBbfaCCx4Vp7nrLcoikKmppN4WmEyfMEIzxXbyhd6tJdlyVFGIPokN6WFYIFUVVW0vPD4gw028m74bxo+Ho9UIYM8KH/yT3SJxvkXAickH7uLIA/KrzpIdzkBE2Ahgtq2ndonAkz4YCDrmGANQ/Jjm6Tn+9VtksP63jXg+h7cN0am1yJ9fuuC5aGIvRXFlOBj1wL2dBH3Gmi8D3q5/vjNwnK9G0jqJPvsi2R9CVhg5FqyCff1fHN813UOmcB6VsrtTTPqqanUbr2ADJUqa2wyOjBsfj6fWUkNhRvVdc3a1ZYyWbtpGsnmLH9f58h4weao8g1H6MHC8qSGKRID4GhLMRw+JdyZ9V+DWWvJ+0SIYWGIi5Pi40UJi/BoDlXKpz2vQgbr2mttLyi0o6KBBW8PPBjHJ8JTC4bKgPJNkSPljnSuBRbsJnk0a155TOJcBLCQR1frVt65SJ48BLAWrD+FB2nCYzAWWOGRaMJjUL6Fe55RwyMxFNZK6nWZoZpAc608tb+l+cAg+CJYk9b7uRJ8RLDWteqgsFREsCI6oBM+1CBYrq0lFljhO4yhnpXneRRtCjBqeEczQc6qqgrIVhuPriOMpE0wJRlNURSwW9d1VO/3JKNyXxaIgVHtvJJFEAZUlqX/tkNXAfo/ZOi4hhGIqXMkJR9xFClM6yyFpbAUlsJSKSyFpbAUlsJSWCqFpbDY9XeFwFqrIMboR4ABAHbUYjCs7mUjAAAAAElFTkSuQmCC"},"7e2f":function(t,i,e){"use strict";var a=e("95ca"),s=e.n(a);s.a},"84c8":function(t,i,e){"use strict";var a=e("8e26"),s=e.n(a);s.a},"8e26":function(t,i,e){var a=e("020a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("499e").default;s("23b5763b",a,!0,{sourceMap:!1,shadowMode:!1})},"95ca":function(t,i,e){var a=e("fa09");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("499e").default;s("638cdc2c",a,!0,{sourceMap:!1,shadowMode:!1})},fa09:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".page-breadcrumb[data-v-f113ae86]{height:58px;line-height:58px;font-size:14px}.page-breadcrumb>span[data-v-f113ae86]{vertical-align:middle;color:#666}.page-breadcrumb .el-breadcrumb[data-v-f113ae86]{display:inline-block;vertical-align:middle;line-height:58px;font-size:14px}.page-breadcrumb[data-v-f113ae86] .el-breadcrumb__inner.is-link{color:#3e86f2;font-weight:400}.page-breadcrumb[data-v-f113ae86] .el-breadcrumb__item:last-child .el-breadcrumb__inner{color:#666}.details-header[data-v-f113ae86]{height:560px}.d-props[data-v-f113ae86]{float:left;width:959px;height:528px;border:1px solid #ebebeb;border-right:none;padding:20px}.goods-imgs[data-v-f113ae86]{width:400px;float:left;margin-right:20px}.d-desc[data-v-f113ae86]{float:left;width:539px}.goods-imgs .imgs-view[data-v-f113ae86]{margin-bottom:20px}.goods-imgs .imgs-view[data-v-f113ae86] img{display:block;width:400px;height:400px;cursor:move}.goods-imgs .imgs-thumb[data-v-f113ae86]{overflow:hidden}.goods-imgs .imgs-thumb img[data-v-f113ae86]{float:left;display:block;width:54px;height:54px;margin-right:10px;border:2px solid #ebebeb;cursor:pointer}.goods-imgs .imgs-thumb img[data-v-f113ae86]:last-child{margin-right:0}.goods-imgs .imgs-thumb img.active[data-v-f113ae86]{border-color:#feb915}.goods-tips[data-v-f113ae86]{margin-top:16px;line-height:28px;font-size:14px;color:#666}.goods-tips span[data-v-f113ae86]{display:inline-block;margin-right:40px}.goods-tips img[data-v-f113ae86]{vertical-align:sub;margin-right:10px}.count-tip[data-v-f113ae86]{font-size:20px;line-height:36px;color:#3e86f2;padding-top:10px}.goods-title[data-v-f113ae86]{line-height:36px;font-size:18px;font-weight:400}.goods-desc-text[data-v-f113ae86]{font-size:14px;color:#999;line-height:20px;height:40px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.goods-price[data-v-f113ae86]{font-size:22px;line-height:68px;color:#ff4149}.goods-price span[data-v-f113ae86]{text-decoration:line-through;font-size:16px;color:#999;margin-left:10px}.goods-attr[data-v-f113ae86]{overflow:hidden}.goods-attr .attr-item[data-v-f113ae86]{font-size:16px;color:#666;line-height:32px;margin-bottom:20px}.attr-item.has-radio[data-v-f113ae86]{margin-bottom:30px}.attr-item[data-v-f113ae86] .el-radio__input{display:none}.attr-item[data-v-f113ae86] .el-radio__label{padding-left:0;color:#666}.attr-item[data-v-f113ae86] .el-radio.is-bordered{height:32px;line-height:32px;padding:0 7px;border-radius:0;margin-right:0}.attr-item[data-v-f113ae86] .el-radio.is-bordered.is-checked{border-color:#feb915;background-color:#ffe6b6}.attr-item[data-v-f113ae86] .el-radio.is-bordered.is-checked .el-radio__label{color:#f40}.attr-item .el-input-number[data-v-f113ae86]{width:140px;line-height:34px}.attr-item[data-v-f113ae86] .el-input__inner{height:36px;line-height:36px}.attr-item[data-v-f113ae86] .el-input-number__decrease,.attr-item[data-v-f113ae86] .el-input-number__increase{background-color:#fafafa;width:34px}.d-props .goods-attr .attr-item[data-v-f113ae86] .el-input-number .el-input__inner:not(.is-disabled){border-color:#dcdfe6}.goods-desc-btn[data-v-f113ae86]{padding-top:10px}.goods-desc-btn .el-button[data-v-f113ae86]{width:200px;padding:16px 0;text-align:center;margin-right:10px;font-size:18px;border-radius:0}.goods-desc-btn .buy-btn[data-v-f113ae86]{background-color:#ffe6b6;border-color:#feb915;color:#f40}.goods-desc-btn .collect-btn[data-v-f113ae86]{background-color:#f40;border-color:#f40;color:#fff}.goods-desc-btn .collect-btn img[data-v-f113ae86]{margin-right:10px;position:relative;top:1px}.right-info[data-v-f113ae86]{width:198px;height:568px;border:1px solid #feb915;float:left}",""])}}]);