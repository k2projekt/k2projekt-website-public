(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=a},"8Kt/":function(e,t,n){"use strict";var r=n("lSNA");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(o=n("Xuae"))&&o.__esModule?o:{default:o},u=n("lwAK"),c=n("FYa8"),l=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var u=0,c=h.length;u<c;u++){var l=h[u];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=i.props[l],d=r[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),r[l]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:o})}))}function y(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n("1OyB"),i=n("vuIU"),o=n("Ji7U"),a=n("md7G"),s=n("foSv"),u=n("MX0m"),c=n.n(u),l=n("q1tI"),f=n.n(l),d=(n("g4pe"),n("YFqc")),p=n.n(d),h=f.a.createElement,v={textIndent:"-9999px",width:"114px",height:"25px",margin:"0 auto",background:"url(/static/logo.png) no-repeat",backgroundSize:"contain"},y={position:"relative",background:"#000",padding:"10px 0",zIndex:"2"},m=function(){return h("div",{className:"jsx-2932956744"},h(c.a,{id:"2932956744"},[".navigation-container.jsx-2932956744{width:100%;z-index:2;}",".navigation-link.jsx-2932956744{display:block;padding:5px 0;color:#fff;text-align:center;-webkit-text-decoration:none;text-decoration:none;}","@media (min-width:48em){.navigation-container.jsx-2932956744{position:fixed;}.navigation.jsx-2932956744{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:48em;margin:0 auto;}.navigation-link.jsx-2932956744{display:inline-block;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}}"]),h("div",{className:"jsx-2932956744 navigation-container"},h("div",{style:y,className:"jsx-2932956744"},h("div",{className:"jsx-2932956744 navigation"},h(p.a,{prefetch:!0,href:"/"},h("a",{style:{padding:"3px 0"},className:"jsx-2932956744 navigation-link"},h("h1",{style:v,className:"jsx-2932956744"},"k2projekt"))),h(p.a,{prefetch:!0,href:"/about"},h("a",{className:"jsx-2932956744 navigation-link"},"O n\xe1s")),h(p.a,{href:"/projects"},h("a",{className:"jsx-2932956744 navigation-link"},"Projekty")),h(p.a,{prefetch:!0,href:"/studios"},h("a",{className:"jsx-2932956744 navigation-link"},"Pracujeme pre")),h(p.a,{prefetch:!0,href:"/blog"},h("a",{className:"jsx-2932956744 navigation-link"},"Blog")),h(p.a,{prefetch:!0,href:"/contact"},h("a",{className:"jsx-2932956744 navigation-link"},"Kontakt"))))))},g=n("vVMA"),b=n.n(g),_=f.a.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var i=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var S=function(e){Object(o.a)(n,e);var t=w(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){b.a.initialize("UA-87975022-3"),b.a.pageview(document.location.pathname)}},{key:"render",value:function(){return _("div",{style:{fontFamily:"Open Sans, Arial, sans-serif",lineHeight:"1.4em"},className:"jsx-3469226189"},_(c.a,{id:"3469226189"},[".link.jsx-3469226189{color:#000;font-weight:bold;}",".link.jsx-3469226189:hover{-webkit-text-decoration:none;text-decoration:none;}","@media (min-width:48em){.layout.jsx-3469226189{padding-top:52px;}}"]),_(m,null),_("div",{className:"jsx-3469226189 layout"},this.props.children),_("div",{style:{padding:"20px 0",fontSize:14,textAlign:"center"},className:"jsx-3469226189"},_("p",{className:"jsx-3469226189"},"Vytvoren\xe9 a spravovan\xe9 spolo\u010dnos\u0165ou"," ",_("a",{href:"https://www.vector011.com",target:"_blank",className:"jsx-3469226189 link"},"vector011"),". Inform\xe1cie ",_(p.a,{prefetch:!0,href:"/gdpr"},_("a",{className:"jsx-3469226189 link"},"GDPR")))))}}]),n}(f.a.Component)},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return i}))},MX0m:function(e,t,n){e.exports=n("3niX")},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||i(e)||o(e)||a()}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,a=void 0!==o&&o,s=t.isBrowser,u=void 0===s?"undefined"!==typeof window:s;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),i=n("lwsE"),o=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),s=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){a(n,e);var t=c(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,u=void 0===s?r:s,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;a(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",a("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,s,u=e.prototype;return u.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(a(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];a(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&a(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),s&&n(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var o=i(n("q1tI")),a=n("elyg"),s=n("nOHt"),u=n("vNVm"),c={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),i=n&&n.asPath||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(i,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,a.resolveHref)(i,e.as):s||o}}),[i,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var b=o.Children.only(h),_=b&&"object"===typeof b&&b.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),S=r(w,2),j=S[0],O=S[1],x=o.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);(0,o.useEffect)((function(){var e=O&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,i=c[d+"%"+p+(r?"%"+r:"")];e&&!i&&l(n,d,p,{locale:r})}),[p,d,O,g,t,n]);var k={ref:x,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o,locale:u,scroll:s}))}(e,n,d,p,v,y,m,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var C="undefined"!==typeof g?g:n&&n.locale,A=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);k.href=A||(0,a.addBasePath)((0,a.addLocale)(p,C,n&&n.defaultLocale))}return o.default.cloneElement(b,k)};t.default=f},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var i=n("JX7q");function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(i.a)(e):t}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,i.useRef)(),c=(0,i.useState)(!1),l=r(c,2),f=l[0],d=l[1],p=(0,i.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,i.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var i=n("q1tI"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var s=new Map},vVMA:function(e,t,n){var r;"undefined"!==typeof self&&self,r=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){console.warn("[react-ga]",e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/^\s+|\s+$/g,"")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.testModeAPI=t.OutboundLink=t.plugin=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.initialize=j,t.ga=O,t.set=x,t.send=k,t.pageview=C,t.modalview=A,t.timing=M,t.event=P,t.exception=R,t.outboundLink=E;var o=p(n(3)),a=p(n(6)),s=p(n(1)),u=p(n(7)),c=p(n(0)),l=p(n(8)),f=p(n(9)),d=p(n(10));function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function v(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var y=!1,m=!0,g=!1,b=function(){var e;return g?f.default.ga.apply(f.default,arguments):window.ga?(e=window).ga.apply(e,arguments):(0,c.default)("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually")};function _(e){return(0,o.default)(e,m)}function w(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0];"string"===typeof i?(b.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){b.apply(void 0,v([e+"."+i].concat(n.slice(1))))}))):(0,c.default)("ga command must be a string")}function S(e,t){e?(t&&(t.debug&&!0===t.debug&&(y=!0),!1===t.titleCase&&(m=!1)),t&&t.gaOptions?b("create",e,t.gaOptions):b("create",e,"auto")):(0,c.default)("gaTrackingID is required in initialize()")}function j(e,t){if(t&&!0===t.testMode)g=!0;else{if("undefined"===typeof window)return!1;(0,u.default)(t)}return Array.isArray(e)?e.forEach((function(e){"object"===("undefined"===typeof e?"undefined":i(e))?S(e.trackingId,e):(0,c.default)("All configs must be an object")})):S(e,t),!0}function O(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(b.apply(void 0,t),y&&((0,l.default)("called ga('arguments');"),(0,l.default)("with arguments: "+JSON.stringify(t)))),window.ga}function x(e,t){e?"object"===("undefined"===typeof e?"undefined":i(e))?(0===Object.keys(e).length&&(0,c.default)("empty `fieldsObject` given to .set()"),w(t,"set",e),y&&((0,l.default)("called ga('set', fieldsObject);"),(0,l.default)("with fieldsObject: "+JSON.stringify(e)))):(0,c.default)("Expected `fieldsObject` arg to be an Object"):(0,c.default)("`fieldsObject` is required in .set()")}function k(e,t){w(t,"send",e),y&&((0,l.default)("called ga('send', fieldObject);"),(0,l.default)("with fieldObject: "+JSON.stringify(e)),(0,l.default)("with trackers: "+JSON.stringify(t)))}function C(e,t,n){if(e){var i=(0,s.default)(e);if(""!==i){var o={};if(n&&(o.title=n),w(t,"send",r({hitType:"pageview",page:i},o)),y){(0,l.default)("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: "+n),(0,l.default)("with path: "+i+a)}}else(0,c.default)("path cannot be an empty string in .pageview()")}else(0,c.default)("path is required in .pageview()")}function A(e,t){if(e){var n=(0,a.default)((0,s.default)(e));if(""!==n){var r="/modal/"+n;w(t,"send","pageview",r),y&&((0,l.default)("called ga('send', 'pageview', path);"),(0,l.default)("with path: "+r))}else(0,c.default)("modalName cannot be an empty string or a single / in .modalview()")}else(0,c.default)("modalName is required in .modalview(modalName)")}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,i=e.label,o=arguments[1];if(t&&n&&r&&"number"===typeof r){var a={hitType:"timing",timingCategory:_(t),timingVar:_(n),timingValue:r};i&&(a.timingLabel=_(i)),k(a,o)}else(0,c.default)("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=e.category,r=e.action,i=e.label,o=e.value,a=e.nonInteraction,s=e.transport,u=h(e,["category","action","label","value","nonInteraction","transport"]);if(n&&r){var l={hitType:"event",eventCategory:_(n),eventAction:_(r)};i&&(l.eventLabel=_(i)),"undefined"!==typeof o&&("number"!==typeof o?(0,c.default)("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?(0,c.default)("`args.nonInteraction` must be a boolean."):l.nonInteraction=a),"undefined"!==typeof s&&("string"!==typeof s?(0,c.default)("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(s)&&(0,c.default)("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=s)),Object.keys(u).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=u[e]})),Object.keys(u).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=u[e]})),k(l,t)}else(0,c.default)("args.category AND args.action are required in event()")}function R(e,t){var n=e.description,r=e.fatal,i={hitType:"exception"};n&&(i.exDescription=_(n)),"undefined"!==typeof r&&("boolean"!==typeof r?(0,c.default)("`args.fatal` must be a boolean."):i.exFatal=r),k(i,t)}var I=t.plugin={require:function(e,t){if(e){var n=(0,s.default)(e);if(""!==n)if(t){if("object"!==("undefined"===typeof t?"undefined":i(t)))return void(0,c.default)("Expected `options` arg to be an Object");0===Object.keys(t).length&&(0,c.default)("Empty `options` given to .require()"),O("require",n,t),y&&(0,l.default)("called ga('require', '"+n+"', "+JSON.stringify(t))}else O("require",n),y&&(0,l.default)("called ga('require', '"+n+"');");else(0,c.default)("`name` cannot be an empty string in .require()")}else(0,c.default)("`name` is required in .require()")},execute:function(e,t){var n=void 0,r=void 0;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)(0,c.default)("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)(0,c.default)("Expected `action` arg to be a String.");else{var i=e+":"+t;n=n||null,r&&n?(O(i,r,n),y&&((0,l.default)("called ga('"+i+"');"),(0,l.default)('actionType: "'+r+'" with payload: '+JSON.stringify(n)))):n?(O(i,n),y&&((0,l.default)("called ga('"+i+"');"),(0,l.default)("with payload: "+JSON.stringify(n)))):(O(i),y&&(0,l.default)("called ga('"+i+"');"))}}};function E(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:_(e.label)},i=!1,o=setTimeout((function(){i=!0,t()}),250);r.hitCallback=function(){clearTimeout(o),i||t()},k(r,n)}else(0,c.default)("args.label is required in outboundLink()");else(0,c.default)("hitCallback function is required")}d.default.origTrackLink=d.default.trackLink,d.default.trackLink=E;var T=t.OutboundLink=d.default;t.testModeAPI=f.default,t.default={initialize:j,ga:O,set:x,send:k,pageview:C,modalview:A,timing:M,event:P,exception:R,plugin:I,outboundLink:E,OutboundLink:T,testModeAPI:f.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,r.default)(e)?((0,o.default)("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):t?(0,i.default)(e):e};var r=a(n(4)),i=a(n(5)),o=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return/[^@]+@[^@]+/.test(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(a)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))};var r,i=n(1),o=(r=i)&&r.__esModule?r:{default:r},a=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"/"===e.substring(0,1)?e.substring(1):e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,r,i,o,a,s;t=window,n=document,r="script",i=e&&e.gaAddress?e.gaAddress:"https://www.google-analytics.com/analytics.js",o="ga",t.GoogleAnalyticsObject=o,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,a=n.createElement(r),s=n.getElementsByTagName(r)[0],a.async=1,a.src=i,s.parentNode.insertBefore(a,s)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){console.info("[react-ga]",e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.gaCalls=[];t.default={calls:r,ga:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.push([].concat(t))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(11),a=c(o),s=c(n(12)),u=c(n(0));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d="_blank",p=function(e){function t(){var e,n,r;l(this,t);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleClick=function(e){var n=r.props,i=n.target,o=n.eventLabel,a=n.to,s=n.onClick,u={label:o},c=i!==d,l=!(e.ctrlKey||e.shiftKey||e.metaKey||1===e.button);c&&l?(e.preventDefault(),t.trackLink(u,(function(){window.location.href=a}))):t.trackLink(u,(function(){})),s&&s(e)},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=r({},this.props,{href:this.props.to,onClick:this.handleClick});return delete e.eventLabel,a.default.createElement("a",e)}}]),t}(o.Component);p.propTypes={eventLabel:s.default.string.isRequired,target:s.default.string,to:s.default.string,onClick:s.default.func},p.defaultProps={target:null,to:null,onClick:null},p.trackLink=function(){(0,u.default)("ga tracking not enabled")},t.default=p},function(t,n){t.exports=e},function(e,n){e.exports=t}])},e.exports=r(n("q1tI"),n("17x9"))},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))}}]);