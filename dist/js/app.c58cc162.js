(function(t){function a(a){for(var s,r,o=a[0],l=a[1],c=a[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(f.length)f.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"25d0":function(t,a,e){"use strict";e("6be0")},"53ba":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(e("034f"),e("2877")),o={},l=Object(r["a"])(o,i,n,!1,null,null,null),c=l.exports,d=e("8c4f"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar",{attrs:{profile:t.profile}}),e("Header",{attrs:{profile:t.profile}}),e("div",{staticClass:"action-section bg-white",staticStyle:{overflow:"hidden"},attrs:{id:"profildesa"}},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6",attrs:{"data-aos":"fade-right","data-aos-delay":"300","data-aos-duration":"800"}},[e("div",{staticClass:"row justify-content-between"},[e("div",{staticClass:"col-md-4 img-profile"},[e("div",{staticClass:"d-flex justify-content-center"},[e("img",{staticClass:"img-fluid rounded-circle",attrs:{src:t.profile.logo,alt:"Logo"},on:{click:t.test}})])]),e("div",{staticClass:"col-md-8"},[e("h3",{staticClass:"text-green font-weight-bold"},[t._v(t._s(t.profile.nama))]),e("p",[t._v(t._s(t.profile.alamat))])])])]),e("div",{staticClass:"col-md-6",attrs:{"data-aos":"fade-left","data-aos-delay":"300","data-aos-duration":"800"}},[e("div",{staticClass:"row justify-content-between"},[e("div",{staticClass:"col-md-4 img-profile"},[e("div",{staticClass:"d-flex justify-content-center"},[e("img",{staticClass:"img-fluid rounded-circle",attrs:{src:t.profile.foto_kades,alt:"Profile"}})])]),e("div",{staticClass:"col-md-8"},[e("h3",{staticClass:"text-green font-weight-bold"},[t._v(t._s(t.profile.nama_kades))]),e("p",[t._v(t._s(t.profile.jabatan))])])])])])])]),e("div",{staticClass:"project-section",staticStyle:{overflow:"hidden"},attrs:{id:"visimisi"}},[e("div",{staticClass:"container"},[t._m(1),e("div",{staticClass:"row visi justify-content-center mt-5"},[e("div",{staticClass:"col-md-12 align-items-center"},[e("h3",{staticClass:"text-green font-weight-bold",attrs:{"data-aos":"fade-right","data-aos-delay":"200","data-aos-duration":"800"}},[t._v("VISI")]),e("div",{staticClass:"visi",attrs:{"data-aos":"fade-right","data-aos-delay":"200","data-aos-duration":"800"},domProps:{innerHTML:t._s(t.profile.visi)}})])])]),e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row misi justify-content-center mt-4"},[e("div",{staticClass:"col-md-12 align-items-center",attrs:{"data-aos":"fade-left","data-aos-delay":"200","data-aos-duration":"800"}},[e("h3",{staticClass:"text-green font-weight-bold"},[t._v("Misi")]),e("div",{staticClass:"misi",domProps:{innerHTML:t._s(t.profile.misi)}})])])])]),e("div",{staticClass:"action-section bg-white",staticStyle:{overflow:"hidden"},attrs:{id:"struktur"}},[e("div",{staticClass:"container"},[t._m(2),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("img",{staticClass:"img-struktur",attrs:{src:t.profile.struktur,alt:"","data-aos":"fade-up","data-aos-delay":"300","data-aos-duration":"800"}})])])])]),e("div",{staticClass:"project-section",staticStyle:{overflow:"hidden"},attrs:{id:"berita"}},[e("div",{staticClass:"container"},[t._m(3),e("div",{staticClass:"row m-0"},[t._l(t.pageOfItems,(function(a){return e("div",{key:a.id,staticClass:"col-md-4",attrs:{"data-aos":"fade-up-right","data-aos-delay":"500","data-aos-duration":"800"}},[e("div",{staticClass:"cards"},[e("div",{staticClass:"penampungimg"},[e("a",{attrs:{target:"new",href:"berita/"+a.id}},[e("img",{staticClass:"imgcontent",attrs:{src:a.featured_image}})])]),e("div",{staticClass:"dalemcards"},[e("a",{attrs:{href:"berita/"+a.id,target:"new"}},[e("h1",{staticClass:"juduldalam",attrs:{id:"juduld"}},[t._v(t._s(a.judul))])]),e("p",{staticClass:"text-muted tanggal"},[t._v(t._s(a.created_at))]),e("p",{staticClass:"sinopsiscard",domProps:{innerHTML:t._s(a.isi_berita)}}),e("hr"),e("div",{staticStyle:{display:"flex"}},[e("div",{staticClass:"icons"},[e("a",{attrs:{target:"_blank"},on:{click:function(e){return t.facebook(a.id)}}},[t._m(4,!0)]),e("a",{attrs:{target:"_blank"},on:{click:function(e){return t.twitter(a.id)}}},[t._m(5,!0)]),e("a",{attrs:{id:"copy","data-container":"body","data-toggle":"popover","data-placement":"top","data-content":"URL Copied"},on:{click:function(e){return t.copy(a.id)}}},[t._m(6,!0)])])])])])])})),e("div",{staticClass:" col-md-12 pb-0 py-3 row justify-content-center"},[e("jw-pagination",{attrs:{items:t.berita,pageSize:6},on:{changePage:t.onChangePage}})],1)],2)])]),e("Footer",{attrs:{profile:t.profile}})],1)},f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"font-weight-bold text-center mb-5",staticStyle:{color:"#076825 !important"},attrs:{"data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"}},[e("span",[t._v(" Profil Desa ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"font-weight-bold text-center",staticStyle:{color:"#076825 !important"},attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615256342335539.6009804439918","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"}},[e("span",[t._v(" Visi Misi Desa ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"font-weight-bold text-center mb-5",staticStyle:{color:"#076825 !important"},attrs:{"data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"}},[e("span",[t._v(" Struktur Organisasi ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"font-weight-bold text-center mb-5",staticStyle:{color:"#076825 !important"},attrs:{"data-aos":"fade-up","data-aos-delay":"400","data-aos-duration":"800"}},[e("span",[t._v(" Berita ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"imgfb",attrs:{title:""}},[e("i",{staticClass:"fab fa-facebook-f"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"imgtwit",attrs:{title:""}},[e("i",{staticClass:"fab fa-twitter"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"imgcop",attrs:{title:""}},[e("i",{staticClass:"fa fa-link example-popover"})])}],m=e("5530"),p=(e("a9e3"),e("2f62")),v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white",attrs:{id:"nav"}},[e("a",{staticClass:"navbar-brand",attrs:{href:"#","data-aos":"zoom-in"}},[e("img",{staticClass:"img-logo",attrs:{id:"logo-img",src:t.profile.logo,alt:"PrimaVillage"}})]),t._m(0),t._m(1)])},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[e("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#home","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[t._v("Home ")])]),e("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[e("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#profildesa","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[t._v("Profil Desa ")])]),e("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[e("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#visimisi","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[t._v("Visi Misi ")])]),e("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[e("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#struktur","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[t._v("Struktur ")])]),e("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[e("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#berita","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[t._v("Berita ")])]),e("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[e("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"http://bumdes.primakom.co.id/klego",target:"_blank","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[t._v("Portal ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"btn btn-nav btn-jejakin-white my-2 my-sm-0 d-none d-sm-inline aos-init aos-animate",attrs:{"data-v-af38669a":"",href:"https://adminklego.primavillage.id/",target:"_blank","data-translatable":"","data-aos":"zoom-in"}},[e("span",{attrs:{"data-v-af38669a":""}},[t._v(" Masuk "),e("i",{staticClass:"fas fa-arrow-right",attrs:{"data-v-af38669a":""}})])])}],b={name:"Navbar",props:["profile"],beforeCreate:function(){var t=this;setTimeout((function(){var a=document.getElementById("favicon");a.href=t.profile.logo}),500)}},g=b,_=Object(r["a"])(g,v,h,!1,null,null,null),C=_.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"intro-section"},[e("div",{staticClass:"overlay-bg"}),e("div",{staticStyle:{width:"100%"}},[e("video",{attrs:{autoplay:"",muted:"",loop:"",id:"myVideo",width:"100%"},domProps:{muted:!0}},[t.profile.header?e("source",{attrs:{src:t.profile.header,type:"video/mp4"}}):t._e()])]),e("div",{staticClass:"text-intro"},[e("h1",{staticClass:"text1"},[t._v(t._s(t.profile.slogan))]),e("h1",{staticClass:"text2"},[t._v("#MajuBersamaDesa")])])])])},w=[],k={name:"Header",props:["profile"]},x=k,j=(e("88ad"),Object(r["a"])(x,y,w,!1,null,"9efd6a6c",null)),E=j.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-between first-section"},[t._m(0),t._m(1),e("div",{staticClass:"col-md-3"},[e("ul",[t._m(2),e("li",{staticClass:"d-flex"},[t._m(3),e("span",{staticClass:"text"},[t._v(" "+t._s(t.profile.alamat)+" ")])])])])]),t._m(4)])])},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-3"},[e("ul",[e("li",[e("span",{staticClass:"header",attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891228.11464504790547"}},[t._v("Produk")])]),e("li",{attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891423.88676061147555"}},[t._v(" Induk BUMDesa ")]),e("li",{attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891423.88676061147555"}},[t._v(" Unit PPOB ")]),e("li",{attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891423.88676061147555"}},[t._v(" Unit Simpan Pinjam ")]),e("li",{attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891423.88676061147555"}},[t._v(" Unit Bank Sampah ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-3"},[e("ul",[e("li",[e("span",{staticClass:"header",attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891934.3232495058986"}},[t._v("Desa")])]),e("li",[e("a",{staticClass:"text",attrs:{target:"_blank","data-translatable":"",href:"http://klego.primavillage.id/","data-dom-i18n-id":"i18n1615261805891906.9956331339595"}},[t._v("BUMDesa Klego ")])]),e("li",[e("a",{staticClass:"text",attrs:{target:"_blank","data-translatable":"",href:"http://kendel.primavillage.id/","data-dom-i18n-id":"i18n1615261805891108.26124095196698"}},[t._v("BUMDesa Kendel ")])]),e("li",[e("a",{staticClass:"text",attrs:{target:"_blank","data-translatable":"",href:"http://banyuurip.primavillage.id/","data-dom-i18n-id":"i18n1615261805891108.26124095196698"}},[t._v("BUMDesa Banyuurip ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("span",{staticClass:"header",attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891140.395761716557"}},[t._v("Hubungi Kami ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"icon mr-2"},[e("i",{staticClass:"fas fa-map-marker-alt"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row second-section"},[e("div",{staticClass:"col-md d-flex order-2 order-md-1"},[e("span",{staticClass:"text-copyright",attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891852.0072758460451"}},[t._v("©2021 PT.Prima Mandiri Komunikasi ")])])])}],O={props:["profile"],name:"Footer"},S=O,B=(e("5a2b"),Object(r["a"])(S,P,$,!1,null,"00c4b599",null)),I=B.exports,T={props:{pageSize:{type:Number,default:1}},name:"Home",components:{Navbar:C,Header:E,Footer:I},data:function(){return{pageOfItems:[]}},methods:{facebook:function(t){window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href+t,"","width=400, height=500")},twitter:function(t){window.open("https://twitter.com/intent/tweet?text="+window.location.href+t,"","width=400, height=500")},test:function(){},copy:function(t){var a=document.createElement("input");a.setAttribute("value",window.location.href+t),document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a);var e=document.getElementById("copy");e.setAttribute("title","Copy")},onChangePage:function(t){this.pageOfItems=t}},computed:Object(m["a"])(Object(m["a"])({},Object(p["b"])(["profile"])),Object(p["b"])(["berita"])),beforeCreate:function(){this.$store.dispatch("getApi",{url:"profile",mutation:"GET_PROFILE"}),this.$store.dispatch("getApi",{url:"berita",mutation:"GET_BERITA"})}},M=T,L=(e("cccb"),Object(r["a"])(M,u,f,!1,null,null,null)),A=L.exports,D=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row m-0 justify-content-center align-items-center",staticStyle:{"min-height":"100vh"}},[e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"card shadow p-0",staticStyle:{overflow:"hidden"}},[e("div",{},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 p-4"},[e("div",{staticClass:"py-1 px-3"},[e("h2",{staticClass:"font-bold text-uppercase",staticStyle:{"font-weight":"bold","margin-bottom":"0"}},[t._v("MASUK")]),e("div",{staticClass:"mb10"},[e("small",[t._v("Masuk ke akun anda")])]),e("form",{attrs:{action:""}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"username"}},[t._v("Username")]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"username",id:"username"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"katasandi"}},[t._v("Kata Sandi")]),e("input",{staticClass:"form-control",attrs:{type:"password",name:"katasandi",id:"katasandi"}})]),e("div",{staticClass:"form-group mb-0"},[e("button",{staticClass:"btn btn-success",staticStyle:{color:"white"}},[t._v("Masuk")])])])])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"box-right"},[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"w-100 h-100",attrs:{src:"/img/klego.PNG",alt:""}})])])])])])])])])}],U={},F=U,G=(e("25d0"),Object(r["a"])(F,D,H,!1,null,"2de0cea1",null)),K=G.exports,N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar",{attrs:{profile:t.profile}}),t._m(0),e("div",{staticClass:"container my-4"},[e("div",{staticClass:"row justify-content-between"},[e("div",{staticClass:"col-md-9"},[t._m(1),t._m(2),e("div",{staticClass:"d-flex justify-content-start my-2"},[e("facebook-button",{attrs:{isBlank:!1,btnText:""}}),e("twitter-button",{attrs:{isBlank:!1,btnText:""}}),e("whatsapp-button",{attrs:{isBlank:!1,btnText:""}})],1),t._m(3)]),e("div",{staticClass:"col-md-3"},[t._m(4),e("div",{staticClass:"mb-3"},[e("h4",{staticClass:"text-green font-weight-bold"},[t._v("Berita Terbaru")]),e("hr"),t._l(3,(function(a){return e("div",{key:a.id,staticClass:"d-flex flex-column hover-card my-2"},[t._m(5,!0),t._m(6,!0)])}))],2)])])]),e("Footer",{attrs:{profile:t.profile}})],1)},R=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container my-4"},[e("div",{staticClass:"d-flex align-items-center justify-content-between bg-success linkatas"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"text-white my-3"},[t._v("Berita / Desa / Desa Contoh ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex justify-content-start "},[e("h3",{staticClass:"text-green font-weight-bold"},[t._v("Lorem Ipsum")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex justify-content-start my-2"},[e("p",[t._v("by Admin | 24 menit yang lalu ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"isi-berita"},[e("img",{staticClass:"img-fluid",attrs:{src:"/img/contoh.jpg"}}),e("p",{staticClass:"text-justify"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ")]),e("p",{staticClass:"text-justify"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mb-5"},[e("h4",{staticClass:"text-green font-weight-bold"},[t._v("Cari Berita")]),e("div",{staticClass:"form-group has-search"},[e("span",{staticClass:"fa fa-search form-control-feedback"}),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Kata Kunci"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"#"}},[e("div",{staticClass:"berita-img"},[e("img",{staticClass:"img-fluid",attrs:{src:"/img/contoh.jpg"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("a",{staticClass:"font-weight-bolder",attrs:{href:"#"}},[t._v("Berita Terkini Berita Terkini Berita Terkini Berita Terkini Berita Terkini")])])}],V={components:{Footer:I,Navbar:C},computed:Object(m["a"])(Object(m["a"])({},Object(p["b"])(["detailberita"])),Object(p["b"])(["profile"])),created:function(){this.$store.dispatch("getApi",{url:"profile",mutation:"GET_PROFILE"}),this.$store.dispatch("getApi",{url:"berita/"+this.$route.params.id,mutation:"GET_D_BERITA"})}},z=V,J=Object(r["a"])(z,N,R,!1,null,null,null),q=J.exports;s["a"].use(d["a"]);var Q=[{path:"/",name:"Home",component:A},{path:"/berita/:id",name:"Berita",component:q},{path:"/masuk",name:"Masuk",component:K}],W=new d["a"]({mode:"history",base:"/",routes:Q}),X=W,Y=(e("d3b7"),e("99af"),e("bc3a")),Z=e.n(Y);s["a"].use(p["a"]);var tt=new p["a"].Store({state:{profile:[],berita:[],detailberita:[]},mutations:{GET_PROFILE:function(t,a){t.profile=a[0]},GET_BERITA:function(t,a){t.berita=a},GET_D_BERITA:function(t,a){t.detailberita=a}},actions:{getApi:function(t,a){var e=t.commit;return new Promise((function(t,s){Z.a.get("".concat("https://adminklego.primavillage.id/api/").concat(a.url),a.headers).then((function(s){e(a.mutation,s.data),t(s.data),console.log(s.data)})).catch((function(t){s(new Error(t))}))}))},postApi:function(t,a){var e=t.commit;return new Promise((function(t,s){Z.a.post("".concat("https://adminklego.primavillage.id/api/").concat(a.url),a.data,a.headers).then((function(s){e(a.mutation,s.data),t(s)})).catch((function(t){s(new Error(t))}))}))},patchApi:function(t,a){var e=t.commit;return new Promise((function(t,s){Z.a.patch("".concat("https://adminklego.primavillage.id/api/").concat(a.url),a.data).then((function(s){e(a.mutation,s.data),t(s)})).catch((function(t){s(new Error(t))}))}))},deleteApi:function(t,a){t.commit;return new Promise((function(t,e){Z.a.delete("".concat("https://adminklego.primavillage.id/api/").concat(a.url),a.data).then((function(a){t(a)})).catch((function(t){e(new Error(t))}))}))}},modules:{}}),at=e("f5af"),et=e.n(at),st=(e("e829"),e("eb2e")),it=e.n(st);s["a"].component("jw-pagination",it.a),s["a"].config.productionTip=!1,new s["a"]({router:X,store:tt,created:function(){et.a.init()},render:function(t){return t(c)}}).$mount("#app")},"5a2b":function(t,a,e){"use strict";e("645d")},"5ced":function(t,a,e){},"645d":function(t,a,e){},"6be0":function(t,a,e){},"85ec":function(t,a,e){},"88ad":function(t,a,e){"use strict";e("53ba")},cccb:function(t,a,e){"use strict";e("5ced")}});
//# sourceMappingURL=app.c58cc162.js.map