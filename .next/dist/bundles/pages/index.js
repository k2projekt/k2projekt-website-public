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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parallax_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parallax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parallax_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_animejs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_animejs__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var AnimatedTextStyle = {
  position: 'absolute',
  top: 12,
  left: 20
};

var SceneStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  right: 0
};

var SceneLayerStyle = {
  width: '100%',
  height: '100%'
};

var TextStyle = {
  fontWeight: 900,
  fontSize: '3.5em'
};

var ImageStyle = {
  width: '100%',
  height: '100%'
};

var ImageLayer0 = {
  background: 'url("/static/home.jpg") no-repeat center center',
  backgroundSize: 'cover'
};

var ImageLayer1 = {
  background: 'url("/static/parallax/1.png") no-repeat top left',
  backgroundSize: 'cover'
};

var ImageLayer2 = {
  background: 'url("/static/parallax/2.png") no-repeat bottom right',
  backgroundSize: 'cover'
};

var ImageLayer3 = {
  background: 'url("/static/parallax/3.png") no-repeat bottom left',
  backgroundSize: 'cover'
};

var IndexPage = function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    _classCallCheck(this, IndexPage);

    return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
  }

  _createClass(IndexPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scene = document.getElementById('scene');
      new __WEBPACK_IMPORTED_MODULE_2_parallax_js___default.a(scene);

      __WEBPACK_IMPORTED_MODULE_4_animejs___default.a.timeline({ loop: true }).add({
        targets: '.animate-text-0 span',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: function delay(el, i) {
          return 150 * (i + 1);
        }
      }).add({
        targets: '.animate-text-0',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo'
      }).add({
        targets: '.animate-text-1 span',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: function delay(el, i) {
          return 150 * (i + 1);
        }
      }).add({
        targets: '.animate-text-1',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo'
      }).add({
        targets: '.animate-text-2 span',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: function delay(el, i) {
          return 150 * (i + 1);
        }
      }).add({
        targets: '.animate-text-2',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo'
      }).add({
        targets: '.animate-text-3 span',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: function delay(el, i) {
          return 150 * (i + 1);
        }
      }).add({
        targets: '.animate-text-3',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo'
      }).add({
        targets: '.animate-text-4 span',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: function delay(el, i) {
          return 150 * (i + 1);
        }
      }).add({
        targets: '.animate-text-4',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var ideas = ['Myslieť na detail...', 'Vnímať komplexne...', 'Tvoriť ucelené dielo...', 'Pracovať inovatívne...', 'Posúvať hranice...'];
      var textElements = ideas.map(function (idea, index) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'div',
          {
            style: AnimatedTextStyle,
            className: 'animate-text-' + index,
            key: index
          },
          idea.split('').map(function (letter, index) {
            return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'span',
              { key: index, style: { opacity: 0 } },
              letter
            );
          })
        );
      });
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '209661647',
            css: ['.index-label.jsx-209661647{display:none;position:absolute;left:40%;top:120px;right:0;text-align:center;font-size:25px;}', '#scene.jsx-209661647{top:180px;}', '@media (min-width:48em){.index-label.jsx-209661647{display:block;}#scene.jsx-209661647{top:50px;}}']
          }),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'div',
            {
              id: 'scene',
              'data-limit-y': '30',
              'data-limit-x': '60',
              style: SceneStyle,
              className: 'jsx-209661647'
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'div',
              { 'data-depth': '0', style: SceneLayerStyle, className: 'jsx-209661647'
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { style: _extends({}, ImageStyle, ImageLayer0), className: 'jsx-209661647'
              })
            ),
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'div',
              {
                'data-depth': '0.2',
                style: _extends({}, SceneLayerStyle, {
                  marginLeft: '-30px',
                  marginTop: '-15px'
                }),
                className: 'jsx-209661647'
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { style: _extends({}, ImageStyle, ImageLayer1), className: 'jsx-209661647'
              })
            ),
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'div',
              {
                'data-depth': '0.4',
                style: _extends({}, SceneLayerStyle, {
                  marginLeft: '30px',
                  marginTop: '30px'
                }),
                className: 'jsx-209661647'
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { style: _extends({}, ImageStyle, ImageLayer2), className: 'jsx-209661647'
              })
            ),
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'div',
              {
                'data-depth': '0.6',
                style: _extends({}, SceneLayerStyle, {
                  marginLeft: '-40px',
                  marginTop: '30px'
                }),
                className: 'jsx-209661647'
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { style: _extends({}, ImageStyle, ImageLayer3), className: 'jsx-209661647'
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'div',
            {
              className: 'jsx-209661647' + ' ' + 'index-label'
            },
            textElements
          )
        )
      );
    }
  }]);

  return IndexPage;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("parallax-js");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ })
/******/ ]);