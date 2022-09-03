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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 3:
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);




var StudiosHeadingStyle = {
    minHeight: '30vh',
    height: 300,
    boxSizing: 'border-box',
    paddingTop: 80,
    background: 'url(/static/studios.jpg) no-repeat',
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

/* harmony default export */ __webpack_exports__["default"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                styleId: '2292024780',
                css: ['.new-style.jsx-2292024780{margin-top:25px;margin-left:auto;margin-right:auto;width:1000px;}', '.new-style-inner-header.jsx-2292024780{padding:19px 30px;width:940px;background-color:#000000;color:#FFFFFF;}', '.new-style-inner-header.jsx-2292024780 h1.jsx-2292024780{font-size:46px;line-height:54px;}', '.new-style-inner-header.jsx-2292024780 p.jsx-2292024780{font-size:14px;line-height:22px;}', '.new-style-inner.jsx-2292024780{padding:19px 30px;width:940px;}', '.new-style-inner.jsx-2292024780 p.jsx-2292024780{font-size:18px;line-height:25px;text-align:justify;}', '.new-style-inner.jsx-2292024780 a.jsx-2292024780{color:#000;font-weight:bold;}', '.new-style-inner.jsx-2292024780 a.jsx-2292024780:hover{text-decoration:none;}', '.new-style-inner.jsx-2292024780 img.jsx-2292024780{width:100%;}', 'div.jsx-2292024780 .div-class.jsx-2292024780{width:500px;height:500px;background-color:#000000;}', '.date.jsx-2292024780{font-size:14px;font-height:22px;color:#434343;}', '@media (max-width:970px){.new-style-inner.jsx-2292024780{width:auto;margin:0px 30px;}.new-style-inner-header.jsx-2292024780{width:auto;margin:0px 30px;}.new-style.jsx-2292024780{width:auto;}}', '@media (min-width:48em){.studio-block.jsx-2292024780{max-width:1200px;min-height:70vh;margin:0 auto;}}']
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'section',
                { style: StudiosHeadingStyle, className: 'jsx-2292024780'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { style: StudiosHeadingTextStyle, className: 'jsx-2292024780'
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'h2',
                        {
                            className: 'jsx-2292024780'
                        },
                        'Blog'
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'section',
                { style: { width: '100%', backgroundColor: '#FFFFFF' }, className: 'jsx-2292024780'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-2292024780' + ' ' + 'new-style'
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-2292024780' + ' ' + 'new-style-inner-header'
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'h1',
                            {
                                className: 'jsx-2292024780'
                            },
                            'Projektovanie zdravotn\xEDckych zariaden\xED'
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'p',
                            {
                                className: 'jsx-2292024780'
                            },
                            '26. Marec 2022'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-2292024780' + ' ' + 'new-style-inner'
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            {
                                className: 'jsx-2292024780'
                            },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'i',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Nemocnice, polikliniky, kliniky, domovy soci\xE1lnych slu\u017Eieb, \u010Di ambulancie. Toto je iba h\u0155stka zdravotn\xEDckych zariaden\xED, ktor\xE9 by svojim architektonick\xFDm, stavebno-kon\u0161truk\u010Dn\xFDm a technick\xFDm rie\u0161en\xEDm mali by\u0165 \u0161pi\u010Dkou medzi budovami. Ich priestory musia u\u013Eah\u010Di\u0165 lek\xE1rom a zdravotn\xEDckemu person\xE1lu vykona\u0165 kvalitne svoju pr\xE1cu. Pacientom by mali pon\xFAknu\u0165 pr\xEDjemn\xE9 prostredie na zotavenia tela aj du\u0161e.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                '\u010Co sa skr\xFDva za projektovou a stavebnou pr\xEDpravou rekon\u0161trukcie, moderniz\xE1cie, novej v\xFDstavby t\xFDchto budov? Po\u010Fte s nami nahliadnu\u0165 do z\xE1kulisia jednej z t\xE9m.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/03/01.jpeg', alt: 'Stetoskop obr\xE1zok', className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Predprojektov\xE1 pr\xEDprava a projektovanie zdravotn\xEDckych zariaden\xED'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Projektovanie zdravotn\xEDckych zariaden\xED je t\xEDmov\xE1 pr\xE1ca. Vy\u017Eaduje si odborn\xE9 znalosti, praktick\xE9 sk\xFAsenosti a flexibiln\xFD t\xEDm odborn\xEDkov. Zdravotn\xEDcke zariadenia s\xFA jedine\u010Dn\xE9 stavby, preto k n\xEDm v\u017Edy zauj\xEDmame individu\xE1lny pr\xEDstup.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                '\xDAspech kvality, premyslenia a spracovania projektu sa ukr\xFDva v prec\xEDznej predprojektovej pr\xEDprave. Zn\xE1me pre n\xE1s mus\xED by\u0165 nielen prostredie, kde sa stavba nach\xE1dza, ale aj jej \xFAlohy a funkcie. Od t\xFDch s\xFA\u010Dasn\xFDch, po tie navrhovan\xE9. Ka\u017Ed\xE1 medic\xEDnska stavba si vy\u017Eaduje individu\xE1lny pr\xEDstup, individu\xE1lny rozsah projek\u010Dn\xFDch pr\xE1c a cielen\xFD mana\u017Ement riadenia procesov projektovania.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Pri rekon\u0161trukci\xE1ch alebo zmen\xE1ch stavieb netreba opomen\xFA\u0165 statick\xE9 prieskumy a anal\xFDzy, ktor\xE9 pripravia investora, ale aj projektanta, na \u010Fal\u0161ie etapy pr\xE1ce. Z\xE1kladom kvalitn\xE9ho spracovania projektu je podrobn\xE9 zameranie stavby a jej digitaliz\xE1cia. Nasleduje spracovanie stavebno-kon\u0161truk\u010Dn\xE9ho rie\u0161enia , ktor\xE9 zoh\u013Ead\u0148uje aj nadv\xE4znost\xED na okolie a lokalitu. Kvalitn\xE1 predprojektov\xE1 pr\xEDprava so sebou prin\xE1\u0161a aj kvalitn\xFD model stavby. Tak\xE1to pr\xEDprava na seba postupne \u201Cnaba\u013Euje\u201D mnoho d\xF4le\u017Eit\xFDch detailov, ktor\xE9 v kone\u010Dnom d\xF4sledku tvoria ucelen\xFD koncept a prin\xE1\u0161aj\xFA komplexn\xE9 rie\u0161enia pre investora, ale aj realiz\xE1tora.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Pri novostavb\xE1ch je nedelite\u013Enou s\xFA\u010Das\u0165ou, projektu zdravotn\xEDckeho zariadenia, spolupr\xE1ca s vn\xEDmav\xFDm a sk\xFAsen\xFDm architektom. Vz\xE1jomn\xE1 spolupr\xE1ca sa dop\u013A\u0148a sk\xFAsenos\u0165ami jednotliv\xFDch odborn\xEDkov. Spolo\u010Dn\xFDm \xFAsil\xEDm vznik\xE1 koncept nov\xE9ho zdravotn\xEDckeho zariadenia.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Predprojektov\xE1 pr\xEDprava je spojen\xE1 s t\xFDm, \u010Do sa na prv\xFD poh\u013Ead d\xE1 len \u0165a\u017Eko vytla\u010Di\u0165 formou v\xFDkresov a sk\xEDc. Je tvoren\xE1 najm\xE4 hodinami \u0161t\xFAdi\xED mikrolokality, prem\xFD\u0161\u013Ean\xEDm nad spr\xE1vnou a logickou funk\u010Dnos\u0165ou zdravotn\xEDckeho zariadenia a d\xF4myselnou tvorbou nov\xE9ho okolia, ktor\xE9 ma pod\u010Diarknu\u0165 cel\xFD koncept rie\u0161enia. S\xFA\u010Das\u0165ou predprojektovej pr\xEDpravy s\xFA konzult\xE1cie s odborn\xEDkmi, s investorom, konzult\xE1cie s lek\xE1rmi, obhliadky stavby, zamerania, modelovania aktu\xE1lneho stavu stavby, h\u013Eadanie rie\u0161en\xED, optimaliz\xE1cia n\xE1vrhu a mnoho inej, \u010Dastokr\xE1t nevidite\u013Enej \u201Cmraven\u010Dej pr\xE1ce\u201D.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'To. \u010Di bola predprojektov\xE1 pr\xEDprava zvl\xE1dnut\xE1, sa uk\xE1\u017Ee pri projektovan\xED zdravotn\xEDckeho zariadenia takmer okam\u017Eite. Ako? Logika, nadv\xE4znos\u0165, zainteresovanie spr\xE1vnych odborn\xEDkov do projektu, a efektivita projektovej \xFArovne. Vz\xE1jomn\xE9 zos\xFAladenie t\xFDchto \u010Dast\xED prin\xE1\u0161a investorovi dielo, ktor\xE9 bez probl\xE9mov zvl\xE1dne legislat\xEDvny proces schva\u013Eovania a plynule prech\xE1dza do \xFArovne realiz\xE1cie.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Z na\u0161ej kancel\xE1rie vych\xE1dzaj\xFA men\u0161ie a aj v\xE4\u010D\u0161ie projekty zdravotn\xEDckych zariaden\xED. Sme ich akt\xEDvnou s\xFA\u010Das\u0165ou od prvej my\u0161lienky, s ktorou n\xE1s klient oslov\xED, a\u017E po \xFAplne odovzdanie pacientom a lek\xE1rom. Ciele si stanovuje klient, obsah, teda technick\xE9 zadanie, funkcionalitu a formu, teda hmotov\xE9 a technologick\xE9 rie\u0161enie, prin\xE1\u0161a n\xE1\u0161 t\xEDm \u0161pecialistov.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Pozrite sa, \u010Do sme projektovali ',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'a',
                                    { href: 'https://k2projekt.medium.com/zdravotn%C3%ADcke-zariadenia-projekcia-a-mana%C5%BEment-riadenia-k2projekt-2c4e6090598f', className: 'jsx-2292024780'
                                    },
                                    'tu'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Na\u0161i odborn\xEDci s\xFA tu pre v\xE1s a v\u0161ae projekty.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { style: { width: 150, margin: "0 auto" }, className: 'jsx-2292024780'
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'a',
                                    { href: 'https://medium.com/@k2projekt.sk/projektovanie-zdravotn%C3%ADckych-zariaden%C3%AD-e301edef0c45',
                                        target: '_blank', className: 'jsx-2292024780'
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/medium-logo.svg', style: { width: 150 }, className: 'jsx-2292024780'
                                    })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
});

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ })

/******/ });