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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var TeamBox = {
  paddingLeft: 30
};

var TeamImgStyle = {
  borderRadius: '50%'
};

var StudiosHeadingStyle = {
  minHeight: '30vh',
  height: 300,
  boxSizing: 'border-box',
  paddingTop: 80,
  background: 'url(/static/about.jpg) no-repeat',
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

var ImageStyle = {
  backgroundImage: 'url(/static/about1.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  width: '100%',
  height: '100%'
};

var SecondImageStyle = _extends({}, ImageStyle, {
  backgroundImage: 'url(/static/sketch.jpg)'
});

var TextBlockStyle = {
  textAlign: 'justify'
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '1627446745',
        css: ['a.jsx-1627446745{color:#000;}', 'a.jsx-1627446745:hover{text-decoration:none;}', '.text-team-block.jsx-1627446745{margin-top:0px;}', '.text-block.jsx-1627446745,.paragraph.jsx-1627446745{padding:30px;}', '@media (min-width:65em){.about-block.jsx-1627446745{min-height:80vh;}.about-header-block.jsx-1627446745>div.jsx-1627446745{height:40%;}.about-block.jsx-1627446745>div.jsx-1627446745{height:100%;}.text-block.jsx-1627446745{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:5em;}}', '@media (max-width:900px){.text-team-block.jsx-1627446745{margin-top:100px;}}', '@media (max-width:600px){.text-team-block.jsx-1627446745{margin-top:200px;}}', '@media (max-width:480px){.text-team-block.jsx-1627446745{margin-top:400px;}}', '@media (max-width:320px){.text-team-block.jsx-1627446745{margin-top:600px;}}']
      }),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'section',
        { style: StudiosHeadingStyle, className: 'jsx-1627446745'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          { style: StudiosHeadingTextStyle, className: 'jsx-1627446745'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h2',
            { style: { lineHeight: "35px" }, className: 'jsx-1627446745'
            },
            'K2projekt je komplexn\xFD priestor pre inov\xE1ciu a spolupr\xE1cu \u0161pi\u010Dkov\xFDch odborn\xEDkov v oblasti projektovania. Ste jeden z nich?'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'section',
        {
          className: 'jsx-1627446745' + ' ' + 'pure-g about-block'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            style: {
              position: 'relative',
              maxWidth: 600,
              margin: '0px auto',
              padding: 30
            },
            className: 'jsx-1627446745' + ' ' + 'pure-u-1'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1627446745' + ' ' + 'paragraph'
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              { style: { margin: '0', textAlign: 'center' }, className: 'jsx-1627446745'
              },
              'U n\xE1s n\xE1jdete'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
              className: 'jsx-1627446745'
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'ul',
              { style: { margin: 0, padding: 0 }, className: 'jsx-1627446745'
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-1627446745'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h3',
                  {
                    className: 'jsx-1627446745'
                  },
                  'Komplexn\xE9 \u0161irok\xE9 slu\u017Eby'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                { style: TextBlockStyle, className: 'jsx-1627446745'
                },
                'K2projekt m\xE1 pod kontrolou v\u0161etko, \u010Do realiz\xE1cia projektu vy\u017Eaduje. Spracov\xE1vame projekty pozemn\xFDch stavieb vo v\u0161etk\xFDch projek\u010Dn\xFDch stup\u0148och. Na\u0161e portf\xF3lio poskytovan\xFDch slu\u017Eieb v oblasti stavebn\xEDctva je \u0161irok\xE9. Profesion\xE1li u n\xE1s maj\xFA ide\xE1lny priestor na naplnenie potrieb projektu, klienta a aj vlastnej kreat\xEDvnej realiz\xE1cie.'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-1627446745'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h3',
                  {
                    className: 'jsx-1627446745'
                  },
                  'Projektov\xFD mana\u017Ement'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                { style: TextBlockStyle, className: 'jsx-1627446745'
                },
                'V projektovom mana\u017Emente sme odborn\xEDci. Koordinujeme, riadime a realizujeme va\u0161e n\xE1pady. Priprav\xEDme pre v\xE1s ucelen\xE9 rie\u0161enia. Vybudujeme pre v\xE1s profesion\xE1lny t\xEDm a spolupr\xE1ce, ktor\xE9 pr\xE1ve potrebujete. Va\u0161a spokojnos\u0165 je pre n\xE1s prioritou.'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-1627446745'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h3',
                  {
                    className: 'jsx-1627446745'
                  },
                  'Inov\xE1cia'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                { style: TextBlockStyle, className: 'jsx-1627446745'
                },
                'Sledujeme pre v\xE1s najnov\u0161ie trendy a neust\xE1le sa vzdel\xE1vame. Dohliadame na to, aby bol projekt v\u017Edy v s\xFAlade s aktu\xE1lnou legislat\xEDvou. Inovat\xEDvne diela vytv\xE1rame pomocou BIM softv\xE9ru, a pod\u013Ea v\xE1\u0161ho zadania pon\xFAkame komplexn\xFD alebo \u010Diastkov\xFD projekt. Aktu\xE1lne dianie v oblasti technick\xE9ho a materi\xE1lneho in\u017Einierstva m\xE1me pod doh\u013Eadom, s nami o \u017Eiadne novinky a modern\xE9 sp\xF4soby rie\u0161enia nepr\xEDdete.'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-1627446745'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h3',
                  {
                    className: 'jsx-1627446745'
                  },
                  'Detaily a kvalita'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                { style: TextBlockStyle, className: 'jsx-1627446745'
                },
                'Celistv\xE9 vn\xEDmanie projektu so zameran\xEDm na detailn\xE9 spracovanie vytv\xE1ra naozaj kvalitn\xFD koncept, ktor\xE9mu dod\xE1vame technick\xFA a materi\xE1lnu akos\u0165 prvej triedy. K2projekt v\xE1m poskytuje \u010Das a priestor pre va\u0161u kreativitu. Vy tvor\xEDte, my sa o zvy\u0161ok postar\xE1me. Spolo\u010Dne tak vytv\xE1rame jedine\u010Dn\xE9, zauj\xEDmav\xE9 a kvalitn\xE9 projekty.'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'li',
                {
                  className: 'jsx-1627446745'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h3',
                  {
                    className: 'jsx-1627446745'
                  },
                  'Jednotka na trhu'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                { style: TextBlockStyle, className: 'jsx-1627446745'
                },
                'U n\xE1s dostanete viac ako len projekt. Dlhoro\u010Dn\xE1 spolupr\xE1ca s architektmi a ateli\xE9rmi, d\xF4veryhodnos\u0165 klientov, dodr\u017Eovanie term\xEDnov a hlavne kvalitn\xE9 diela s\xFA d\xF4vodom, pre\u010Do sa K2projekt dr\u017E\xED nad konkurenciou. Spokojn\xED developeri, investori a architekti sa k n\xE1m s rados\u0165ou op\xE4tovne vracaj\xFA. \u0160etr\xEDme v\xE1\u0161 \u010Das, aby ste sa mohli venova\u0165 svojim z\xE1ujmom naplno.'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'section',
        {
          style: { minHeight: '60vh', height: 700 },
          className: 'jsx-1627446745' + ' ' + 'pure-g about-block'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            style: { position: 'relative', background: '#eee' },
            className: 'jsx-1627446745' + ' ' + 'pure-u-1 pure-u-md-1-2'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1627446745' + ' ' + 'text-block'
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              { style: { marginTop: '0' }, className: 'jsx-1627446745'
              },
              'O n\xE1s'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'p',
              { style: TextBlockStyle, className: 'jsx-1627446745'
              },
              'K2projekt je na slovenskom trhu od roku 2012. T\xE1to architektonicko-projek\u010Dn\xE1 kancel\xE1ria vytv\xE1ra priestor pre odborn\xEDkov v oblasti poskytovania profesion\xE1lnych a kvalitn\xFDch projek\u010Dn\xFDch slu\u017Eieb. Na\u0161i klienti s\xFA \xFAspe\u0161n\xED architekti, investori a developeri.',
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                className: 'jsx-1627446745'
              }),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                className: 'jsx-1627446745'
              }),
              'K2projekt zalo\u017Eili traja absolventi Slovenskej Technickej Univerzity. Ich hlavnou v\xEDziou bolo prinies\u0165 na trh inov\xE1ciu v projektovan\xED a vytvori\u0165 priestor komplexn\xE9mu poh\u013Eadu profesion\xE1lov a ich spolupr\xE1ci, materi\xE1lnej i technickej kvalite, modern\xFDm n\xE1padom a d\xF4veryhodnosti. Od zalo\u017Eenia firmy pre\u0161lo na\u0161imi rukami \u0161irok\xE9 spektrum projektov. Ka\u017Ed\xE9 nov\xE9 zadanie n\xE1m pomohlo pri budovan\xED siln\xE9ho, stabiln\xE9ho a profesion\xE1lneho t\xEDmu, ktor\xFD v\xE1m dnes pon\xFAka ucelen\xFD a kvalitn\xFD servis. Vytv\xE1rame pre v\xE1s in\u0161pirat\xEDvny priestor na kreativitu a nov\xE9 idey pre \xFAspe\u0161nos\u0165 a spokojnos\u0165 klientov.',
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                className: 'jsx-1627446745'
              }),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                className: 'jsx-1627446745'
              }),
              'Na\u0161a kancel\xE1ria neust\xE1le rastie a jej cie\u013Eom je obohati\u0165 oblas\u0165 projek\u010Dn\xFDch slu\u017Eieb nov\xFDmi n\xE1padmi. Zvy\u0161ujeme \u0161tandardy v oblasti projektovania, db\xE1me na aktu\xE1lne trendy, inov\xE1cie a na po\u017Eiadavky z\xE1kazn\xEDka. Posu\u0148te svoje hranice a vytvorte s nami ucelen\xE9 dielo!'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            style: { position: 'relative', minHeight: '300px' },
            className: 'jsx-1627446745' + ' ' + 'pure-u-1 pure-u-md-1-2'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { style: SecondImageStyle, className: 'jsx-1627446745'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        { style: { maxWidth: 600, margin: '0 auto' }, className: 'jsx-1627446745'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'section',
          {
            className: 'jsx-1627446745' + ' ' + 'pure-g about-block'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { style: { position: 'relative', paddingLeft: 20, paddingRight: 20 }, className: 'jsx-1627446745' + ' ' + 'pure-u-1 text-team-block'
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                style: {
                  marginTop: '50px',
                  marginBottom: '50px',
                  textAlign: 'center'
                },
                className: 'jsx-1627446745'
              },
              'My'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              { style: { marginBottom: 30 }, className: 'jsx-1627446745' + ' ' + 'pure-g'
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1627446745' + ' ' + 'pure-u-1-3'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', {
                  style: TeamImgStyle,
                  src: '/static/team/michaela.jpg',
                  className: 'jsx-1627446745' + ' ' + 'pure-img'
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1627446745' + ' ' + 'pure-u-2-3'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  { style: TeamBox, className: 'jsx-1627446745'
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'h2',
                    {
                      className: 'jsx-1627446745'
                    },
                    'Ing. Michaela Kov\xE1rov\xE1'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'p',
                    { style: TextBlockStyle, className: 'jsx-1627446745'
                    },
                    'Projektov\xE1 mana\u017E\xE9rka a koordin\xE1torka projektov \u0160pecialistka po\u017Eiarnej ochrany',
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    'Ako ka\u017Ed\xE1 \u017Eena m\xE1m prirodzene organiza\u010Dn\xFD talent a vyvinut\xFD cit pre detail. Svoju z\xE1\u013Eubu v organizovan\xED som premietla do svojej pr\xE1ce a svoj cit pre detail pretavujem do na\u0161ich projektov.',
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'b',
                      {
                        className: 'jsx-1627446745'
                      },
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'a',
                        { href: 'mailto: michaela@k2projekt.sk', className: 'jsx-1627446745'
                        },
                        'michaela@k2projekt.sk'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'b',
                      {
                        className: 'jsx-1627446745'
                      },
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'a',
                        { href: 'tel: 0902 434 766', className: 'jsx-1627446745'
                        },
                        '+421 902 434 766'
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              { style: { marginBottom: 30 }, className: 'jsx-1627446745' + ' ' + 'pure-g'
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1627446745' + ' ' + 'pure-u-1-3'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', {
                  style: TeamImgStyle,
                  src: '/static/team/milan.jpg',
                  className: 'jsx-1627446745' + ' ' + 'pure-img'
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1627446745' + ' ' + 'pure-u-2-3'
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  { style: TeamBox, className: 'jsx-1627446745'
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'h2',
                    {
                      className: 'jsx-1627446745'
                    },
                    'Ing. Milan Kov\xE1r'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'p',
                    { style: TextBlockStyle, className: 'jsx-1627446745'
                    },
                    'Odborn\xFD a technick\xFD konzultant',
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    'Svoj \u010Das si organizujem pod\u013Ea svojich predst\xE1v, aby som z toho \u010Do rob\xEDm mal rados\u0165.',
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'b',
                      {
                        className: 'jsx-1627446745'
                      },
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'a',
                        { href: 'mailto: milan@k2projekt.sk\u200B', className: 'jsx-1627446745'
                        },
                        'milan@k2projekt.sk\u200B'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                      className: 'jsx-1627446745'
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'b',
                      {
                        className: 'jsx-1627446745'
                      },
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'a',
                        { href: 'tel: +421 948 434 325', className: 'jsx-1627446745'
                        },
                        '+421 948 434 325'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
});

/***/ })
/******/ ]);