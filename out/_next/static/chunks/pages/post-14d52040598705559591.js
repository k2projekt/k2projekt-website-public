_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{EhLH:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return y}));var r=e("o0o1"),i=e.n(r),o=e("HaE+"),a=e("1OyB"),s=e("vuIU"),u=e("Ji7U"),l=e("md7G"),c=e("foSv"),p=e("CafY"),d=e("q1tI"),h=e.n(d),f=e("wd/R"),g=e.n(f),m=h.a.createElement;function x(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(c.a)(n);if(t){var i=Object(c.a)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return Object(l.a)(this,e)}}e("LpSC");var w={minHeight:"30vh",height:300,boxSizing:"border-box",paddingTop:80,background:"url(/static/studios.jpg) no-repeat",backgroundSize:"cover",backgroundPosition:"center, center",color:"#000"},v={maxWidth:"600px",padding:"10px 20px 20px",borderRadius:"1px",backgroundColor:"rgba(0, 0, 0, .85)",margin:"0 auto",textAlign:"center",color:"#fff"},y=function(n){Object(u.a)(e,n);var t=x(e);function e(){return Object(a.a)(this,e),t.apply(this,arguments)}return Object(s.a)(e,[{key:"sliceDescription",value:function(n){for(var t=n.toLowerCase(),e=[],r=t.indexOf("\n");-1!==r;)e.push(r),r=t.indexOf("\n",r+1);return n.substring(0,e[1]+1)}},{key:"formatDate",value:function(n){return g()(n).format("DD.MM.YYYY HH:mm:ss")}},{key:"getArticleId",value:function(n){return n.substring(n.lastIndexOf("/")+1,n.length)}},{key:"render",value:function(){var n=this;return console.log(this.props),m("div",null,m(p.a,null,m("style",{scoped:!0},"\n                    .new-style{        \n                        margin-top: 25px;\n                        margin-left:auto;\n                        margin-right: auto;\n                        width: 1000px;\n                    }\n                    .new-style-inner-header{\n                        padding: 19px 30px;\n                        width: 940px;\n                        background-color: #000000;\n                        color: #FFFFFF;\n                    }\n                    .new-style-inner-header h1{\n                        font-size: 46px;\n                        line-height: 54px;\n                    }\n                    .new-style-inner-header p{\n                        font-size: 14px;\n                        line-height: 22px;\n                    }\n                    .new-style-inner{\n                        padding: 19px 30px;\n                        width: 940px;\n                    }\n                    .innerHtml p{\n                        font-size: 18px;\n                        line-height: 25px;\n                        text-align: justify;\n                    }\n                    .innerHtml a{\n                        color: #000;\n                        font-weight: bold;          \n                    }\n                    .innerHtml a:hover{\n                        text-decoration: none;        \n                    }\n                    .innerHtml img {\n                      width: 100%;\n                  }\n                    div .div-class{\n                        width:500px; height:500px; background-color:#000000;\n                    }        \n                    .date{\n                        font-size: 14px;\n                        font-height: 22px;\n                        color: #434343;\n                    }\n                    @media (max-width: 1020px) {\n                    .new-style-inner{\n                        width: auto;\n                        margin: 0px 30px;\n                    }\n                    .new-style-inner-header{\n                        width: auto;\n                        margin: 0px 30px;\n                    }\n                    .new-style{\n                        width: auto;\n                    }\n                    \n                    }\n                    @media (min-width: 48em) {\n                      .studio-block {\n                        max-width: 1200px;\n                        min-height: 70vh;\n                        margin: 0 auto;\n                      }\n                    }\n                  "),m("section",{style:w},m("div",{style:v},m("h2",null,"Blog"))),m("section",{style:{width:"100%",backgroundColor:"#FFFFFF"}},this.props.articles?this.props.articles.map((function(t){if(t.guid.substring(t.guid.lastIndexOf("/")+1,t.length)==n.props.url.query.id)return m("div",{className:"new-style"},m("div",{className:"new-style-inner-header"},m("h1",null,t.title),m("p",null,n.formatDate(t.pubDate))),m("div",{className:"new-style-inner"},m("div",null,m("div",{className:"innerHtml",dangerouslySetInnerHTML:{__html:t.content}}),m("br",null),m("br",null),m("div",{style:{width:150,margin:"0 auto"}},m("a",{href:t.link,target:"_blank"},m("img",{src:"../static/blog/medium-logo.svg",style:{width:150}}))))))})):"")))}}],[{key:"getInitialProps",value:function(){var n=Object(o.a)(i.a.mark((function n(){var t,e;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@k2projekt.sk");case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",{articles:e.items});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}]),e}(h.a.Component)},MDTK:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return e("EhLH")}])}},[["MDTK",0,2,4,1,3,5]]]);