_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{D85t:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("RHEb")}])},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(p){return void n(p)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return i}))},K64n:function(t,e,n){"use strict";e.Headers=self.Headers,e.Request=self.Request,e.Response=self.Response,e.fetch=self.fetch},LpSC:function(t,e,n){n("K64n"),t.exports=self.fetch.bind(self)},RHEb:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return E}));var r=n("o0o1"),i=n.n(r),o=n("HaE+"),a=n("1OyB"),s=n("vuIU"),c=n("Ji7U"),p=n("md7G"),u=n("foSv"),l=n("MX0m"),f=n.n(l),d=n("q1tI"),v=n.n(d),m=n("CafY"),j=v.a.createElement;function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var i=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var h={position:"relative",minHeight:"80vh",padding:"30px"},b={position:"absolute",top:"100px",right:"30px",width:"600px",maxWidth:"50%",padding:"10px 20px",background:"#000",borderRadius:"1px",color:"#fff",fontSize:"15px",opacity:".85",zIndex:2,textAlign:"justify"},g=function(t){return{position:"absolute",backgroundImage:"url("+t+")",backgroundSize:"cover",backgroundPosition:"center center",left:"0",top:"0",width:"100%",height:"100%"}},w=function(t){Object(c.a)(n,t);var e=x(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationType:"custom",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:0})}},{key:"render",value:function(){var t=this,e=this.props.images.map((function(e,n){return j("div",{className:"swiper-slide",key:n},j("section",{style:h},j("div",{style:g(t.props.folder+e)})))}));return j("div",{className:"jsx-2129183328"},j(f.a,{id:"2129183328"},[".swiper-button-prev.jsx-2129183328{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z' fill='%23fff'/%3E%3C/svg%3E\");}",".swiper-button-next.jsx-2129183328{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z' fill='%23fff'/%3E%3C/svg%3E\");}",".swiper-button-prev.jsx-2129183328,.swiper-button-next.jsx-2129183328{top:70%;background-color:rgba(0,0,0,0.8);padding:15px 15px;}","@media (min-width:48em){.swiper-button-prev.jsx-2129183328,.swiper-button-next.jsx-2129183328{top:50%;}}"]),j("div",{className:"jsx-2129183328 swiper-container"},j("div",{className:"jsx-2129183328 swiper-wrapper"},e),j("h2",{style:{display:"inline-block",position:"absolute",marginTop:0,top:0,left:0,right:0,color:"#fff",zIndex:2,padding:"8px 20px",lineHeight:"1.5em",background:"#000",borderRadius:"1px"},className:"jsx-2129183328"},this.props.title),j("p",{style:b,className:"jsx-2129183328"},this.props.description),j("div",{className:"jsx-2129183328 swiper-pagination"}),j("div",{className:"jsx-2129183328 swiper-button-prev"}),j("div",{className:"jsx-2129183328 swiper-button-next"})))}}]),n}(v.a.Component),y=v.a.createElement;function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var i=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}n("LpSC");var N={backgroundImage:"url(/static/projects.jpg)",backgroundSize:"cover",backgroundPosition:"center center",width:"100%",height:"100%"},R={textAlign:"justify"},E=function(t){Object(c.a)(n,t);var e=k(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return y("div",null,y(m.a,null,y(f.a,{id:"1924336733"},[".project-block.jsx-1924336733{background:#eee;}",".text-block.jsx-1924336733{padding:30px;}",".project-block.jsx-1924336733{min-height:80vh;}",".project-block.jsx-1924336733>div.jsx-1924336733{height:100%;}",".text-block.jsx-1924336733{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:0 5em;}"]),y("section",{style:{minHeight:"60vh",height:700},className:"jsx-1924336733 pure-g project-block"},y("div",{style:{position:"relative"},className:"jsx-1924336733 pure-u-1 pure-u-md-1-2"},y("div",{className:"jsx-1924336733 text-block"},y("h2",{style:{marginTop:"0"},className:"jsx-1924336733"},"Projekty"),y("p",{style:R,className:"jsx-1924336733"},"Pozrite si projekty, na ktor\xfdch sme spolupracovali. Ka\u017ed\xfd projekt je individu\xe1lny, a preto si vy\u017eaduje osobn\xfd pr\xedstup. D\xe1vame si z\xe1le\u017ea\u0165 na tom, aby sa predstava autora naplno zhmotnila v dizajne a v hlavnej my\u0161lienke diela. Zabezpe\u010dujeme spolupr\xe1cu medzi profesion\xe1lmi, ktor\xed vedia projekt obohati\u0165. Komplexne sa star\xe1me o v\u0161etky \u0161pecifick\xe9 detaily. Podporujeme inov\xe1cie a kreativitu. In\u0161pirujte sa na\u0161ou kooper\xe1ciou profesion\xe1lov a projektov\xfdm mana\u017ementom, ktor\xe9 vytvorili tieto nev\u0161edn\xe9 diela. Kontaktujte n\xe1s a vytvorte svoj nov\xfd projekt s nami."))),y("div",{style:{position:"relative",minHeight:"300px"},className:"jsx-1924336733 pure-u-1 pure-u-md-1-2"},y("div",{style:N,className:"jsx-1924336733"}))),this.props.projects?this.props.projects.map((function(t){var e=t.attributes.image.data.map((function(t){return t.attributes.formats.large.url}));return y(w,{title:t.attributes.name,description:t.attributes.description,folder:"",images:e})})):""))}}],[{key:"getInitialProps",value:function(){var t=Object(o.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://k2projekt-cms.herokuapp.com/api/projects?populate=*");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",{projects:n.data});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),n}(v.a.Component)}},[["D85t",0,2,1,3]]]);