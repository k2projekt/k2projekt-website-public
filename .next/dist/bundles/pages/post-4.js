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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 34:
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
                            'Zdravotn\xEDcke zariadenia \u2014 projekcia a mana\u017Ement riadenia K2projekt'
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
                                'Predstavujeme v\xE1m v\xFDber zdravotn\xEDckych zariaden\xED, ktor\xE9 boli spracovan\xE9 u n\xE1s v K2projekt-e.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Mestsk\xE1 poliklinika'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Prv\xFDm \u201Cdiplomov\xFDm projektom\u201D, ktor\xFD sme spracovali je zdravotn\xEDcke stredisko mestskej polikliniky.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/04/01.jpeg', alt: 'Mestsk\xE1 poliklinika obr\xE1zok', className: 'jsx-2292024780'
                            }),
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
                                    'Zdravotn\xEDcke zariadenia maj\xFA sl\xFA\u017Ei\u0165 nielen na ozdravie tela. Svojou architekt\xFArou a koncepciou maj\xFA umo\u017Eni\u0165 aj uzdravenie du\u0161e.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'U\u017Eitkov\xE1 plocha'
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
                                    'viac ako 6000m2'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Stupe\u0148 projektov\xE9ho rie\u0161enia'
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
                                    'Podrobn\xE1 architektonick\xE1 \u0161t\xFAdia stavby a jej okolia. Projektov\xE1 dokument\xE1cia bola vo vybran\xFDch \u010Dastiach spracovan\xE1 ako realiza\u010Dn\xFD projekt.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Projektov\xE9 rie\u0161enie'
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
                                    'Navrhovan\xE9 zdravotn\xEDcke stredisko malo p\xE4\u0165 nadzemn\xFDch podla\u017E\xED a jedno podzemn\xE9 podla\u017Eie.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Odborn\xE9 zamerania zdravotn\xEDckeho strediska bolo definovan\xE9 ako \u201Czdravotn\xEDcke zariadenie s preva\u017Euj\xFAcou ambulantnou zdravotnou starostlivos\u0165ou a jednod\u0148ov\xE1 chirurgia\u201D.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Projektov\xE9 rie\u0161enie koncep\u010Dne a typologicky vytvorilo v poliklinike priestory pre ambulancie r\xF4zneho zamerania od detsk\xFDch lek\xE1rov, cez v\u0161eobecn\xFDch lek\xE1rov a\u017E po infektologick\xE9 ambulancie.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Jedno cel\xE9 podla\u017Eie stavby bolo vy\u010Dlenen\xE9 pre jednod\u0148ov\xFA chirurgiu. Umiestnen\xE9 tu boli opera\u010Dn\xE9 s\xE1ly, pozorovacie a zotavovacie miestnosti, technick\xE9 vybavenie a hygienick\xE9 z\xE1zemia.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'S\xFA\u010Das\u0165ou celkov\xE9ho dispozi\u010Dn\xE9ho rie\u0161enia zdravotn\xEDckeho zariadenia boli aj obslu\u017Eno-prev\xE1dzkov\xE9 a stravovacie zariadenia a slu\u017Eby.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Celistvos\u0165 konceptu tvoria zdanliv\xE9 detaily. Pohodlie pacientom, ale aj person\xE1lu dotv\xE1raj\xFA funk\u010Dn\xE9 celky ako vlastn\xE1 jed\xE1le\u0148 a oddychov\xE1 z\xF3na pre person\xE1l na streche budovy. Bufet a lek\xE1re\u0148 na pr\xEDzem\xED, \u010Di parkov\xE9 \xFApravy pln\xE9 zelene v okol\xED polikliniky.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Dispozi\u010Dn\xE9 rie\u0161enie a architekt\xFAra polikliniky umo\u017E\u0148ovali aj vybudovanie pohotovosti, \u010Di strediska v\xFDjazdu RZP.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Stomatologick\xE1 klinika'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Zubn\xE9 lek\xE1rstvo je \u0161pecializovan\xFD odbor, kde spracovanie zdravotn\xEDckeho zariadenia je \xFAzko sp\xE4t\xE9 so spr\xE1vnym technologick\xFDm n\xE1vrhom rie\u0161enia priestoru. Pr\xE1ve symbi\xF3za medzi technol\xF3giami a architekt\xFArou, d\xE1va cel\xE9mu priestoru funk\u010Dnos\u0165 a logiku. Stomatologick\xE9 ambulancie s\xFA pr\xE1ve ',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'b',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'TEN'
                                ),
                                ' typ zdravotn\xEDckeho zariadenia, kde je v\xFDber projek\u010Dnej kancel\xE1rie ve\u013Emi d\xF4le\u017Eit\xFD. Ak\xFDko\u013Evek nes\xFAlad medzi funkciou, technol\xF3giou a architekt\xFArou sa uk\xE1\u017Ee pri u\u017E\xEDvan\xED priestoru ako dysfunkcia.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/04/02.jpeg', alt: 'Stomatologick\xE1 klinika obr\xE1zok', className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'U\u017Eitkov\xE1 plocha'
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
                                    'viac ako 180 m2'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Stupe\u0148 projektov\xE9ho rie\u0161enia'
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
                                    'architektonick\xE1 \u0161t\xFAdia, ktor\xE1 bola \u010Falej dopracovan\xE1 do realiza\u010Dnej projektovej dokument\xE1cie.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Projektov\xE9 rie\u0161enie'
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
                                    'Stomatologick\xE1 klinika dispozi\u010Dne obsiahla priestory ako recepcia, z\xE1zemie pre person\xE1l, ambulancia zubn\xE9ho technika, dve stomatologick\xE9 ambulancie, ambulancia implantologie, hygienick\xE9 a technick\xE9 miestnosti. Priestor opl\xFDva modern\xFDmi technol\xF3giami vykurovania, chladenia a vetrania. Ka\u017Ed\xE1 ambulancia m\xE1 in\u0161talovan\xE9 technologick\xE9 vybavenie pre svoj \xFA\u010Del pou\u017Eitia.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Stomatologick\xE1 klinika bola projektovan\xE1 na pr\xEDzem\xED bytov\xE9ho domu. D\xF4raz projektov\xE9ho rie\u0161enia bol kladen\xFD na plynul\xFA a neru\u0161en\xFA prev\xE1dzku ambulanci\xED, vhodn\xFA akustiku priestoru a dodr\u017Eanie v\u0161etk\xFDch hygienick\xFDch \u0161tandardov. Z\xE1rove\u0148, nemenej d\xF4le\u017Eit\xFDm prvkom n\xE1vrhu bola architekt\xFAra a dizajn, ktor\xE9 vizu\xE1lne dotv\xE1raj\xFA cel\xE9 dielo.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Ortopedick\xE1 klinika'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Komplexn\xE1 dispozi\u010Dn\xE1 a prev\xE1dzkov\xE1 prestavba p\xF4vodne administrat\xEDvnej budovy.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/04/03.jpeg', alt: 'Ortopedick\xE1 klinika obr\xE1zok', className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'U\u017Eitkov\xE1 plocha'
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
                                    'viac ako 1300m2'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Stupe\u0148 projektov\xE9ho rie\u0161enia'
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
                                    'Projektov\xE9 rie\u0161enie ortopedickej kliniky bolo zadan\xE9 ako podrobn\xE1 architektonick\xE1 \u0161t\xFAdia budovy a jej okolia. N\xE1sledne vybran\xE9 podla\u017Eia stavby boli dopracovan\xE9 do realiza\u010Dnej projektovej dokument\xE1cie.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Projektov\xE9 rie\u0161enie'
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
                                    'P\xF4vodn\xE1 administrat\xEDvna budova najsk\xF4r pre\u0161la ve\u013Emi podrobnou pred projektovou pr\xEDpravou. Projektov\xE9 rie\u0161enie bolo zah\xE1jen\xE9 podrobn\xFDm zameran\xEDm a digitaliz\xE1ciou stavby tzv. pasport stavby.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Nasledovala architektonick\xE1 \u0161t\xFAdia, ktor\xE1 rie\u0161ila prev\xE1dzkov\xE9 a funk\u010Dn\xE9 celky stavby, ako aj nadv\xE4znos\u0165 na parkov\xE9 \xFApravy a statick\xFA dopravu. Do realiza\u010Dnej projektovej dokument\xE1cie boli n\xE1sledne dopracovan\xE9 vybran\xE9 podla\u017Eia stavby, pod\u013Ea potreby klienta.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'Ortopedick\xE1 klinika sa rozprestiera na troch nadzemn\xFDch podla\u017Eiach a na jednom podzemnom podla\u017E\xED. Komplexnos\u0165 ortopedickej kliny ako aj potrebu jej d\xF4myseln\xE9ho a presn\xE9ho projektovania pod\u010Diarkuje fakt, \u017Ee v budove sa nach\xE1dzaj\xFA ambulancie, v\xFDdaj\u0148a ortopedick\xFDch pom\xF4cok, ale aj v\xFDroba ortopedick\xFDch a protetick\xFDch pom\xF4cok a komplexn\xE1 administrat\xEDvna agenda.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'li',
                                    {
                                        className: 'jsx-2292024780'
                                    },
                                    'S\xFA\u010Das\u0165ou architektonickej \u0161t\xFAdie v\u0161ak nebolo len koncep\u010Dn\xE9 a dispozi\u010Dn\xE9 rie\u0161enie ortopedickej kliniky, ale aj funk\u010Dn\xFD n\xE1vrh exteri\xE9ru. Pridan\xE9 boli bezbari\xE9rov\xE9 prvky, dorie\u0161en\xE1 statick\xE1 doprava, \u010Di plochy pre umiestnenie kontajnerov. V neposlednom rade celkov\xE9 stv\xE1rnenie dop\u013A\u0148a parkov\xE1 a sadov\xE1 \xFAprava. V\u0161ade, kde to bolo mo\u017En\xE9 bola doplnen\xE1 zele\u0148, stromy a v\xFDsadba. Architektonick\xE1 \u0161t\xFAdia ortopedickej kliniky tak komplexne zobrazuje dispozi\u010Dn\xE9, stavebno-kon\u0161truk\u010Dn\xE9 a funk\u010Dn\xE9 rie\u0161enie budovy, a jej okolia.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Oslovila v\xE1s na\u0161a pr\xE1ca? Sme tu pre v\xE1s a va\u0161e projekty.'
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
                                    { href: 'https://medium.com/@k2projekt.sk/zdravotn%C3%ADcke-zariadenia-projekcia-a-mana%C5%BEment-riadenia-k2projekt-1bcd25c7d372',
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