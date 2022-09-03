module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/navigation.js




var LogoStyle = {
  textIndent: '-9999px',
  width: '114px',
  height: '25px',
  margin: '0 auto',
  background: 'url(/static/logo.png) no-repeat',
  backgroundSize: 'contain'
};

var NavigationStyle = {
  position: 'relative',
  background: '#000',
  padding: '10px 0',
  zIndex: '2'
};

var navigation_Navigation = function Navigation() {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-2932956744'
    },
    external__react__default.a.createElement(style__default.a, {
      styleId: '2932956744',
      css: ['.navigation-container.jsx-2932956744{width:100%;z-index:2;}', '.navigation-link.jsx-2932956744{display:block;padding:5px 0;color:#fff;text-align:center;text-decoration:none;}', '@media (min-width:48em){.navigation-container.jsx-2932956744{position:fixed;}.navigation.jsx-2932956744{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:48em;margin:0 auto;}.navigation-link.jsx-2932956744{display:inline-block;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}}']
    }),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-2932956744' + ' ' + 'navigation-container'
      },
      external__react__default.a.createElement(
        'div',
        { style: NavigationStyle, className: 'jsx-2932956744'
        },
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-2932956744' + ' ' + 'navigation'
          },
          external__react__default.a.createElement(
            link__default.a,
            { prefetch: true, href: '/' },
            external__react__default.a.createElement(
              'a',
              { style: { padding: '3px 0' }, className: 'jsx-2932956744' + ' ' + 'navigation-link'
              },
              external__react__default.a.createElement(
                'h1',
                { style: LogoStyle, className: 'jsx-2932956744'
                },
                'k2projekt'
              )
            )
          ),
          external__react__default.a.createElement(
            link__default.a,
            { prefetch: true, href: '/about' },
            external__react__default.a.createElement(
              'a',
              {
                className: 'jsx-2932956744' + ' ' + 'navigation-link'
              },
              'O n\xE1s'
            )
          ),
          external__react__default.a.createElement(
            link__default.a,
            { href: '/projects' },
            external__react__default.a.createElement(
              'a',
              {
                className: 'jsx-2932956744' + ' ' + 'navigation-link'
              },
              'Projekty'
            )
          ),
          external__react__default.a.createElement(
            link__default.a,
            { prefetch: true, href: '/studios' },
            external__react__default.a.createElement(
              'a',
              {
                className: 'jsx-2932956744' + ' ' + 'navigation-link'
              },
              'Pracujeme pre'
            )
          ),
          external__react__default.a.createElement(
            link__default.a,
            { prefetch: true, href: '/blog' },
            external__react__default.a.createElement(
              'a',
              {
                className: 'jsx-2932956744' + ' ' + 'navigation-link'
              },
              'Blog'
            )
          ),
          external__react__default.a.createElement(
            link__default.a,
            { prefetch: true, href: '/contact' },
            external__react__default.a.createElement(
              'a',
              {
                className: 'jsx-2932956744' + ' ' + 'navigation-link'
              },
              'Kontakt'
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ var navigation = (navigation_Navigation);
// EXTERNAL MODULE: external "react-ga"
var external__react_ga_ = __webpack_require__(5);
var external__react_ga__default = /*#__PURE__*/__webpack_require__.n(external__react_ga_);

// CONCATENATED MODULE: ./components/layout.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var layout_Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      external__react_ga__default.a.initialize('UA-87975022-3');
      external__react_ga__default.a.pageview(document.location.pathname);
    }
  }, {
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          style: {
            fontFamily: 'Open Sans, Arial, sans-serif',
            lineHeight: '1.4em'
          },
          className: 'jsx-3469226189'
        },
        external__react__default.a.createElement(style__default.a, {
          styleId: '3469226189',
          css: ['.link.jsx-3469226189{color:#000;font-weight:bold;}', '.link.jsx-3469226189:hover{text-decoration:none;}', '@media (min-width:48em){.layout.jsx-3469226189{padding-top:52px;}}']
        }),
        external__react__default.a.createElement(navigation, null),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-3469226189' + ' ' + 'layout'
          },
          this.props.children
        ),
        external__react__default.a.createElement(
          'div',
          { style: { padding: '20px 0', fontSize: 14, textAlign: 'center' }, className: 'jsx-3469226189'
          },
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3469226189'
            },
            'Vytvoren\xE9 a spravovan\xE9 spolo\u010Dnos\u0165ou',
            ' ',
            external__react__default.a.createElement(
              'a',
              {
                href: 'https://www.vector011.com',

                target: '_blank',
                className: 'jsx-3469226189' + ' ' + 'link'
              },
              'vector011'
            ),
            '. Inform\xE1cie ',
            external__react__default.a.createElement(
              link__default.a,
              { prefetch: true, href: '/gdpr' },
              external__react__default.a.createElement(
                'a',
                {
                  className: 'jsx-3469226189' + ' ' + 'link'
                },
                'GDPR'
              )
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(external__react__default.a.Component);

/* harmony default export */ var layout = __webpack_exports__["a"] = (layout_Layout);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__(3);




var StudiosHeadingStyle = {
    minHeight: '30vh',
    height: 300,
    boxSizing: 'border-box',
    paddingTop: 80,
    background: 'url(/static/gdpr.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center, center',
    color: '#000'
};

var StudiosHeadingTextStyle = {
    maxWidth: '600px',
    padding: '10px 20px 20px',
    borderRadius: '1px',
    backgroundColor: 'rgba(0, 0, 0, .85)',
    margin: '0 auto',
    textAlign: 'center',
    color: '#fff'
};

var StudiosHeadingGroupStyle = {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0)',
    padding: '20px 0px 20px 0px',
    textAlign: 'center',
    color: '#fff'
};

var ImageStyle = {
    maxWidth: 300,
    margin: 'auto',
    marginBottom: 100,
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                styleId: '45020812',
                css: ['.studio-block.jsx-45020812{color:#000;}', '.new-style-inner.jsx-45020812{width:940px;margin:0 auto;height:auto;text-align:justify;}', '@media (max-width:970px){.new-style-inner.jsx-45020812{width:auto;margin:0px 30px;}}', '@media (min-width.jsx-45020812:48em) .studio-block{max-width:1200px;min-height:70vh;margin:0 auto;}']
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'section',
                { style: StudiosHeadingStyle, className: 'jsx-45020812'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: StudiosHeadingTextStyle, className: 'jsx-45020812'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        {
                            className: 'jsx-45020812'
                        },
                        'GDPR'
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'section',
                { style: { width: '100%', backgroundColor: '#FFFFFF', marginTop: 30 }, className: 'jsx-45020812'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: { letterSpacing: 'normal' }, className: 'jsx-45020812' + ' ' + 'pure-g new-style-inner'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        {
                            className: 'jsx-45020812'
                        },
                        'Prehl\xE1senie o uchov\xE1van\xED osobn\xFDch \xFAdajov'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-45020812'
                        },
                        'Tento web pou\u017E\xEDva k poskytovaniu slu\u017Eieb, personaliz\xE1cii rekl\xE1m a anal\xFDze n\xE1v\u0161tevnosti s\xFAbory cookie. Pou\u017E\xEDvan\xEDm tohoto webu s t\xFDm s\xFAhlas\xEDte.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h3',
                        {
                            className: 'jsx-45020812'
                        },
                        '\u010Co s\xFA cookies?'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-45020812'
                        },
                        'Cookie je mal\xFD s\xFAbor tvoren\xFD p\xEDsmenami a \u010D\xEDslicami, ktor\xFD po\u010D\xEDta\u010D s webovou str\xE1nkou prostredn\xEDctvom prehliada\u010Da odosiela do v\xE1\u0161ho po\u010D\xEDta\u010Da alebo mobiln\xE9ho telef\xF3nu (\u010Falej ozna\u010Dovan\xFDch ako \u201Ezariadenie\u201C) a uklad\xE1 na pevnom disku v\xE1\u0161ho zariadenia. S\xFAbory cookie n\xE1m umo\u017E\u0148uj\xFA rozl\xED\u0161i\u0165 v\xE1s od ostatn\xFDch u\u017E\xEDvate\u013Eov na\u0161ich webov\xFDch str\xE1nok. V\u010Faka nim v\xE1m m\xF4\u017Eeme pon\xFAknu\u0165 lep\u0161ie z\xE1\u017Eitky pri prehliadan\xED na\u0161ich webov\xFDch str\xE1nok a neust\xE1le zlep\u0161ova\u0165 svoje slu\u017Eby.',
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                            className: 'jsx-45020812'
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                            className: 'jsx-45020812'
                        }),
                        'Ka\u017Ed\xE1 webov\xE1 str\xE1nka m\xF4\u017Ee do v\xE1\u0161ho prehliada\u010Da odosiela\u0165 svoje vlastn\xE9 s\xFAbory cookie, pokia\u013E to umo\u017E\u0148uje nastavenie v\xE1\u0161ho prehlada\u010Da. V\xE1\u0161 prehliada\u010D v\u0161ak (v z\xE1ujme ochrany v\xE1\u0161ho s\xFAkromia) umo\u017E\u0148uje webov\xFDm str\xE1nkam pr\xEDstup iba k t\xFDm s\xFAborom cookie, ktor\xE9 tieto str\xE1nky do v\xE1\u0161ho zariadenia sam\xE9 odoslali, nie k s\xFAborom cookie odoslan\xFDch in\xFDmi webov\xFDmi str\xE1nkami. Mnoh\xE9 webov\xE9 str\xE1nky to robia v\u017Edy, ke\u010F ich u\u017E\xEDvate\u013E nav\u0161t\xEDvi. M\xF4\u017Eu tak lep\u0161ie sledova\u0165 on-line prev\xE1dzku.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h3',
                        {
                            className: 'jsx-45020812'
                        },
                        'S\xFAbory cookie tret\xEDch str\xE1n'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-45020812'
                        },
                        'V niektor\xFDch pr\xEDpadoch pou\u017E\xEDvame reklamn\xE9 s\xFAbory cookie tret\xEDch str\xE1n, ktor\xE9 n\xE1m umo\u017E\u0148uj\xFA pochopi\u0165 a zlep\u0161i\u0165 \xFA\u010Dinnos\u0165 na\u0161ej reklamy ako na na\u0161ich vlastn\xFDch webov\xFDch str\xE1nkach, tak na webov\xFDch str\xE1nkach tret\xEDch str\xE1n. Tieto s\xFAbory cookie sa niekedy pou\u017E\xEDvaj\xFA pre personaliz\xE1ciu, zmenu zacielenia a optimaliz\xE1ciu on-line reklamy.',
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                            className: 'jsx-45020812'
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                            className: 'jsx-45020812'
                        }),
                        'T\xE1to str\xE1nka pou\u017E\xEDva slu\u017Ebu Google Analytics, poskytovan\xFA spolo\u010Dnos\u0165ou Google, Inc. (\u010Falej len "Google"). Slu\u017Eba Google Analytics pou\u017E\xEDva s\xFAbory "cookies", ktor\xE9 s\xFA textov\xFDmi s\xFAbormi ukladan\xE9 do v\xE1\u0161ho po\u010D\xEDta\u010Da umo\u017E\u0148uj\xFAceho anal\xFDzu sp\xF4sobu u\u017E\xEDvania tejto str\xE1nky ich u\u017E\xEDvate\u013Emi. Inform\xE1cie vygenerovan\xE9 s\xFAborom cookie o u\u017E\xEDvan\xED str\xE1nky (vr\xE1tane va\u0161ej IP adresy) bud\xFA spolo\u010Dnos\u0165ou Google prenesen\xE9 a ulo\u017Een\xE9 na serveroch v Spojen\xFDch \u0161t\xE1toch. Google bude pou\u017E\xEDva\u0165 tieto inform\xE1cie pre \xFA\u010Dely vyhodnocovania u\u017E\xEDvania str\xE1nky a vytv\xE1rania spr\xE1v o jej aktivite, ur\u010Den\xFDch pre ich prev\xE1dzkovate\u013Eov, a pre poskytovanie \u010Fal\u0161\xEDch slu\u017Eieb t\xFDkaj\xFAcich sa \u010Dinnost\xED na str\xE1nke a u\u017E\xEDvan\xED internetu v\xF4bec. Google m\xF4\u017Ee tie\u017E poskytn\xFA\u0165 tieto inform\xE1cie tret\xEDm osob\xE1m, ak to bude po\u017Eadovan\xE9 z\xE1konom alebo bud\xFA tieto tretie osoby spracov\xE1va\u0165 tieto inform\xE1cie pre  Google. Google nebude sp\xE1ja\u0165 va\u0161u IP adresu s ak\xFDmiko\u013Evek in\xFDmi d\xE1tami, ktor\xE9 m\xE1 k dispoz\xEDcii. M\xF4\u017Eete odmietnu\u0165 pou\u017E\xEDvanie s\xFAborov cookies vo\u013Ebou v pr\xEDslu\u0161nom nastaven\xED vo va\u0161om prehliada\u010Di, av\u0161ak uvedomte si, \u017Ee pokia\u013E tak urob\xEDte,  nebudete schopn\xED plne vyu\u017E\xEDva\u0165 v\u0161etky funkcie tejto str\xE1nky. Pou\u017E\xEDvan\xEDm tejto str\xE1nky s\xFAhlas\xEDte so spracov\xE1van\xEDm \xFAdajov o v\xE1s spolo\u010Dnosti Google, a to sp\xF4sobom a k \xFA\u010Delom hore uveden\xFDm.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h3',
                        {
                            className: 'jsx-45020812'
                        },
                        'Ako odmietnu\u0165 s\xFAbory cookie?'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-45020812'
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        {
                            className: 'jsx-45020812'
                        },
                        'Pou\u017E\xEDvan\xEDm na\u0161ich webov\xFDch str\xE1nok vyjadrujete svoj s\xFAhlas s pou\u017E\xEDvan\xEDm tu pop\xEDsan\xFDch s\xFAborov cookie'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-45020812'
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-45020812'
                        },
                        'V\u0161etky modern\xE9 prehliada\u010De v\xE1m  umo\u017E\u0148uj\xFA zmeni\u0165 nastavenia souborov cookie. Svoje zariadenie si m\xF4\u017Eete nastavi\u0165 tak, aby prij\xEDmalo v\u0161etky s\xFAbory cookie, aby v\xE1s upozornilo na vydanie s\xFAboru cookie, alebo aby nikdy neprij\xEDmalo s\xFAbory cookie. Pokia\u013E zvol\xEDte posledn\xFA mo\u017Enos\u0165, znamen\xE1 to, \u017Ee v\xE1m nem\xF4\u017Eu by\u0165 pon\xFAknut\xE9 ur\u010Dit\xE9 personalizovan\xE9 funkcie, a preto nebudete m\xF4c\u0165 plne vyu\u017E\xEDva\u0165 v\u0161etky funkcie pr\xEDslu\u0161n\xFDch webov\xFDch str\xE1nok. Ka\u017Ed\xFD prehliada\u010D je in\xFD, prejdite si preto vo svojom prehliada\u010Di ponuku \u201En\xE1poveda\u201C, \u201Emo\u017Enosti\u201C alebo \u201Epredvo\u013Eby\u201C, kde sa dozviete, ako zmeni\u0165 nastavenie s\xFAborov cookie.'
                    )
                )
            )
        )
    );
});

/***/ })
/******/ ]);