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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


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

/***/ 30:
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
                            'Korunou kr\xE1sy je strecha'
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
                                    'Ploch\xE1, \u0161ikm\xE1, obl\xFAkov\xE1. Nech je ak\xE1ko\u013Evek, je neodmyslite\u013Enou s\xFA\u010Das\u0165ou stavieb. Chr\xE1ni vn\xFAtorn\xE9 priestory pred vonkaj\u0161\xEDmi vplyvmi, odv\xE1dza zr\xE1\u017Ekov\xFA vodu a sl\xFA\u017Ei ako technick\xFD priestor pre r\xF4zne in\u0161tal\xE1cie. Strecha m\xE1 v\u0161ak ove\u013Ea v\xE4\u010D\u0161\xED potenci\xE1l! U n\xE1s sme sa rozhodli, \u017Ee strech\xE1m d\xE1me nov\xFD v\xFDznam, a to, \u010Do sa zd\xE1 by\u0165 netradi\u010Dn\xE9, premen\xEDme na \u0161tandard.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'S \u010Doraz viac otep\u013Euj\xFAcou sa kl\xEDmou a zmenami, ktor\xE9 sp\xF4sobilo \u013Eudstvo samo, prich\xE1dzaj\xFA do na\u0161ich zemepisn\xFDch \u0161\xEDrok teplotn\xE9 a zr\xE1\u017Ekov\xE9 v\xFDkyvy. S meniacou sa kl\xEDmou je potrebn\xE9 sa adaptova\u0165 a zmeni\u0165 aj na\u0161e n\xE1vyky. Spr\xE1vne zmeny v na\u0161om myslen\xED toti\u017Eto dok\xE1\u017Eu spomali\u0165, ak nie rovno zastavi\u0165, hroziv\xE9 scen\xE1re klimatick\xFDch zmien.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Pr\xE1ve obnovenie \u017Eivotn\xE9ho prostredia, vy\u010Distenie ovzdu\u0161ia a zv\xFD\u0161enie produkcie kysl\xEDka, \u010Do priamo\xFAmerne zni\u017Euje hladinu oxidu uhli\u010Dit\xE9ho v atmosf\xE9re, s\xFA k\u013E\xFA\u010Dov\xE9 faktory, ktor\xFDm sa budeme venova\u0165 na pr\xEDklade a realiz\xE1cii vegeta\u010Dn\xFDch striech. V K2flore sme stavili na profesionalitu, odbornos\u0165 a maxim\xE1lne \xFAsilie pribl\xED\u017Ei\u0165 vegeta\u010Dn\xE9 strechy \u0161irok\xE9mu spektru \u013Eud\xED, a t\xFDm prispie\u0165 svojou tro\u0161kou k ich akt\xEDvnej implement\xE1cii. Preto\u017Ee s nimi je \u017Eivot a na\u0161e prostredie ove\u013Ea zdrav\u0161ie.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/02/01.jpeg', alt: 'Vegeta\u010Dn\xE1 strecha obr\xE1zok', className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Vegeta\u010Dn\xE9 strechy s\xFA spom\xEDnan\xE9 u\u017E v staroveku a ich hist\xF3ria plynule pokra\u010Duje cez antiku a\u017E po novovek. Nie s\xFA \u017Eiadnym novotvarom ani fenom\xE9nom dne\u0161nej doby. Len sa na ne akoby medzi\u010Dasom pozabudlo a ich kr\xE1su a funk\u010Dnos\u0165 znovu objavujeme.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'O d\xF4le\u017Eitosti vegeta\u010Dn\xFDch striech hovoria samotn\xE9 dejiny. Visut\xE9 z\xE1hrady kr\xE1\u013Eovnej Semiramis (z pribli\u017Ene 8. storo\u010Dia p. n. l.) patria medzi jeden zo siedmich divov sveta napriek tomu, \u017Ee sa do dne\u0161nej doby nezachovali.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Zelen\xE9 strechy s\xFA atrakt\xEDvnym a v\xFDrazn\xFDm architektonick\xFDm prvkom stavieb. Do prostredia, v ktorom sa nach\xE1dzaj\xFA, prin\xE1\u0161aj\xFA \u0161irok\xE9 spektrum pozit\xEDvnych aspektov ako napr\xEDklad:'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'ul',
                                {
                                    className: 'jsx-2292024780'
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Zlep\u0161uj\xFA mikrokl\xEDmu prostredia.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Zvlh\u010Duj\xFA vzduch, \u010D\xEDm priaznivo ochladzuj\xFA prostredie v ich okol\xED.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'S\xFA prirodzen\xFDm absorb\xE9rom prachov\xFDch \u010Dast\xEDc.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Tlmia hluk a zlep\u0161uj\xFA tak akustick\xFA pohodu v ich okol\xED.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Pohlcuj\xFA oxid uhli\u010Dit\xFD a, naopak, produkuj\xFA kysl\xEDk.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Zadr\u017Eiavaj\xFA da\u017E\u010Fov\xFA vody, \u010D\xEDm priaznivo od\u013Eah\u010Duj\xFA stokov\xE9 syst\xE9my miest a obc\xED.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'S\xFA dokonal\xFDm izolantom stre\u0161n\xE9ho pl\xE1\u0161\u0165a. Napom\xE1haj\xFA k zn\xED\u017Eeniu n\xE1kladov na vykurovanie a chladenie budov.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'S\xFA domovom r\xF4znych \u017Eivo\u010D\xEDchov, mot\xFD\u013Eov a ope\u013Eova\u010Dov.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Pri spr\xE1vnej a funk\u010Dnej realiz\xE1cii predl\u017Euj\xFA \u017Eivotnos\u0165 stre\u0161nej kon\u0161trukcie ako celku, \u010D\xEDm v\xFDznamne zni\u017Euj\xFA n\xE1klady na obnovu budov.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Na na\u0161e \xFAzemie sa vegeta\u010Dn\xE9 strechy op\xE4\u0165 prinavr\xE1tili v 19. storo\u010D\xED. Odvtedy viac, \u010Di menej prib\xFAda ich implement\xE1cia do stavieb. Vegeta\u010Dn\xE9 strechy s\xFA neoddelite\u013Enou s\xFA\u010Das\u0165ou urbanistick\xE9ho priestoru. Vytv\xE1raj\xFA zauj\xEDmav\xE9 a hodnotn\xE9 priestory.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Ich realiz\xE1cia nem\xE1 takmer \u017Eiadne limity. Vhodn\xE9 s\xFA pre v\u0161etky typy striech, od ploch\xFDch, cez \u0161ikm\xE9 a\u017E po atypick\xE9 tvary striech \u0161krup\xEDn, hyperbolick\xFDch paraboloidov, \u010Di obl\xFAkov\xFDch striech.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Z h\u013Eadiska typu vegeta\u010Dnej v\xFDsadby a v\xFD\u0161ky substr\xE1tu sa rozde\u013Euj\xFA na:'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'ul',
                                {
                                    className: 'jsx-2292024780'
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'extenz\xEDvne,'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'polointenz\xEDvne a'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'intenz\xEDvne.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Extenz\xEDvne vegeta\u010Dn\xE9 strechy'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'V\xFD\u0161ka substr\xE1tu extenz\xEDvnej vegeta\u010Dnej strechy je do 150 mm, v pr\xEDpade v\xFDsadby krov, substr\xE1t mus\xED sp\u013A\u0148a\u0165 v\xFD\u0161ku od 150\u2013200 mm. Extenz\xEDvna zelen\xE1 strecha m\xF4\u017Ee by\u0165 realizovan\xE1 aj na kon\u0161trukci\xE1ch s ni\u017E\u0161ou \xFAnosnos\u0165ou do 300 kg/m2. V\xFDber veget\xE1cie extenz\xEDvnej zelenej strechy tvoria preva\u017Ene such\xE9 tr\xE1vy, rozchodn\xEDky, skalni\u010Dky a n\xEDzke kr\xEDky a pod. Tento druh zelenej strechy nie je ur\u010Den\xFD pre be\u017En\xFD pohyb os\xF4b, pln\xED ekologick\xFA, estetick\xFA a izola\u010Dn\xFA funkciu. Extenz\xEDvne zelen\xE9 strechy s\xFA menej n\xE1ro\u010Dn\xE9 na \xFAdr\u017Ebu. Strechy tohto typu v\xE4\u010D\u0161inou nepotrebuj\xFA zavla\u017Eovanie a dok\xE1\u017Eu akumulova\u0165 vodu. Pri dlh\u0161ie trvaj\xFAcom suchu a vysok\xFDch teplot\xE1ch sa z\xE1vlaha, aspo\u0148 manu\xE1lna, odpor\xFA\u010Da. Veget\xE1cia sa navrhuje tak, aby sa dok\xE1zala rozrasta\u0165 aj sama. Extenz\xEDvne vegeta\u010Dn\xE9 strechy nie s\xFA na realiz\xE1ciu finan\u010Dne n\xE1ro\u010Dn\xE9.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/02/02.png', alt: 'Extenz\xEDvne vegeta\u010Dn\xE9 strechy obr\xE1zok', className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Vedeli ste, \u017Ee:'
                            ),
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
                                    '\xDA\u010Dinnos\u0165 fotovoltaick\xFDch elektr\xE1rn\xED na zelen\xFDch strech\xE1ch exponenci\xE1lne rastie. Pr\xE1ve zele\u0148 okolo fotovoltaick\xFDch \u010Dl\xE1nkov odparovan\xEDm vody prirodzene ochladzuje vzduch nad strechou, a t\xFDm priaznivo vpl\xFDva na chod sol\xE1rnej elektr\xE1rne, zvy\u0161uje jej \xFA\u010Dinnos\u0165 a \u0161etr\xED viac va\u0161e financie.'
                                )
                            ),
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
                                    'Tzv. \u201Ezelen\xE1\u201C strecha nemus\xED by\u0165 len zelen\xE1. Kr\xE1snym pr\xEDkladom s\xFA pr\xE1ve extenz\xEDvne strechy. R\xF4znorodos\u0165 druhov nen\xE1ro\u010Dn\xFDch sukulentov, ktor\xE9 tvoria druhov\xFA v\xFDsadbu na extenz\xEDvnych strech\xE1ch v priebehu roka, men\xED svoju farbu, a tak strecha doslova hr\xE1 farbami.'
                                )
                            ),
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
                                    'Pri orient\xE1cii na ve\u013Emi slne\u010Dn\xE9 strany je z\xE1vlaha na mieste. Plat\xED to najm\xE4 pri strech\xE1ch orientovan\xFDch a juh a z\xE1pad. Tieto strechy s\xFA viac nam\xE1han\xE9 teplotn\xFDmi rozdielmi, vetrom a priamym \u017Eiaren\xEDm. Pri dlh\u0161ie trvaj\xFAcom teple a obdob\xED bez zr\xE1\u017Eok sa preto odpor\xFA\u010Da rastlink\xE1m pom\xF4c\u0165, a strechu polia\u0165.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Intenz\xEDvne vegeta\u010Dn\xE9 strechy'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Absol\xFAtnym l\xEDdrom v \u201Ezelen\xFDch\u201C strech\xE1ch s\xFA intenz\xEDvne vegeta\u010Dn\xE9 strechy. Technicky n\xE1ro\u010Dnej\u0161ia realiz\xE1cia v\u0161ak prin\xE1\u0161a doslova dych ber\xFAci priestor. Intenz\xEDvne strechy s\xFA pr\xEDroda na dosah. Je to vlastn\xFD park, \u010Di z\xE1hrada priamo nad va\u0161imi hlavami, ktor\xE1 okrem toho, \u017Ee prin\xE1\u0161a priestor na relax, akt\xEDvny odpo\u010Dinok, priamo spolup\xF4sob\xED so stavbou a jej vn\xFAtorn\xFDm prostred\xEDm. Intenz\xEDvne strechy prin\xE1\u0161aj\xFA so sebou \xFAspory na vykurovan\xED a chladen\xED budov, ktor\xFDch hodnoty m\xF4\u017Eu dosahova\u0165 aj viac ako 300 % \xFAspory.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Intenz\xEDvne zelen\xE9 strechy s\xFA atrakt\xEDvnym priestorom. Svoje miesto si u n\xE1s na\u0161li na ka\u017Edom zauj\xEDmavom projekte biznis centra, \u010Di n\xE1kupn\xE9ho centra. Ich potenci\xE1l bol objaven\xFD. Stali sa p\xFAta\u010Dom a l\xE1kadlom pre z\xE1kazn\xEDkov, ktor\xFDch l\xE1kaj\xFA na posedenie \u010Di k\xE1vi\u010Dku.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/02/03.jpeg', alt: 'Intenz\xEDvne vegeta\u010Dn\xE9 strechy obr\xE1zok', className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Vedeli ste, \u017Ee:'
                            ),
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
                                    'Intenz\xEDvna zelen\xE1 strecha sa realizuje s plne automatick\xFDm z\xE1vlahov\xFDm syst\xE9mom. Ten je \xFA\u010Delovo nadstaven\xFD na optimaliz\xE1ciu n\xE1kladov na z\xE1vlahu, pri\u010Dom mus\xED zoh\u013Ead\u0148ova\u0165 aj druhov\xFA v\xFDsadbu na danom mieste.'
                                )
                            ),
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
                                    'V\xE1ha intenz\xEDvnej zelenej strechy sa pohybuje okolo 1 500 kg/m2. Vzh\u013Eadom na jej v\xE1hu, je to typ strechy, ktor\xFD je potrebn\xE9, a aj vhodn\xE9 pl\xE1nova\u0165 u\u017E v projek\u010Dn\xFDch za\u010Diatkoch stavby.'
                                )
                            ),
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
                                    'Dok\xE1\u017Eu ochladi\u0165 vzduch a\u017E o nieko\u013Eko \xB0C, a t\xFDm vytvori\u0165 pr\xEDjemn\xE9 prostredie aj v hor\xFAcich letn\xFDch d\u0148och. Odparuj\xFAca sa voda ochladzuje a zvlh\u010Duje vzduch v okol\xED vegeta\u010Dnej strechy. Tak\xE9to prostredie praje v\u0161etk\xFDm \u017Eiv\xFDm organizmom najm\xE4 v hor\xFAcich d\u0148och.'
                                )
                            ),
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
                                    'Svojou kon\u0161truk\u010Dnou skladbou a v\xFD\u0161kou substr\xE1tu (okolo 300\u2013800 mm) v\u0161ak tvoria dokonal\xFA izol\xE1ciu a napom\xE1haj\xFA k zn\xED\u017Eeniu prev\xE1dzkov\xFDch n\xE1kladov budov na vykurovanie a chladenie.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Vegeta\u010Dn\xE9 strechy s\xFA najm\xE4 o rastlin\xE1ch, ich r\xF4znorodosti a druhovej pestrosti. V\u010Faka \u010Ditate\u013Enej v\xFDsadbe dok\xE1\u017Eu vytvori\u0165 ok\xFAz\u013Euj\xFAci a harmonick\xFD priestor. Rastliny vysaden\xE9 na vegeta\u010Dn\xFDch strech\xE1ch s\xFA v\u0161ak vystavovan\xE9 extr\xE9mnym podmienkam ako napr\xEDklad priamemu intenz\xEDvnemu \u017Eiareniu, striedaniu teplotn\xFDch rozdielov, siln\xE9mu vetru a mrazu \u010Di lok\xE1lne nadmern\xE9mu \xFAhrnu zr\xE1\u017Eok. Pri ich v\xFDbere je nutn\xE9 ma\u0165 po ruke odborn\xEDka, ktor\xFD sa rozumie nielen stavebn\xFDm kon\u0161trukci\xE1m, ale aj botanike, floristike a z\xE1hradnej architekt\xFAre.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'K2flora je centrum, ktor\xE9 sp\xE1ja t\xFDch najlep\u0161\xEDch odborn\xEDkov do projek\u010Dn\xFDch a realiza\u010Dn\xFDch t\xEDmov, a to s jedin\xFDm cie\u013Eom. \xDAspe\u0161ne zrealizova\u0165 funk\u010Dn\xFA vegeta\u010Dn\xFA strechu, ktor\xE1 bude svojmu \xFA\u010Delu sl\xFA\u017Ei\u0165 desiatky rokov bez potreby z\xE1sahu do syst\xE9mu strechy.'
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
                                    { href: 'https://medium.com/@k2projekt.sk/korunou-kr%C3%A1sy-je-strecha-24c7b9b34a97',
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