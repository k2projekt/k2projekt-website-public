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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ContactBlockStyle = {
  background: 'url(/static/contact.jpg) no-repeat',
  backgroundSize: 'cover'
};

var ContactContainerStyle = {
  maxWidth: 600,
  margin: '0 auto',
  padding: '30px',
  background: 'rgba(0, 0, 0, .85)',
  color: '#fff'
};

var FbLinkStyle = {
  color: '#fff',
  cursor: 'pointer'
};

var ContactButtonStyle = {
  background: '#fff',
  color: '#000'
};

var ErrorStyle = {
  color: '#f50057'
};

var ContactPage = function (_React$Component) {
  _inherits(ContactPage, _React$Component);

  function ContactPage(props) {
    _classCallCheck(this, ContactPage);

    var _this = _possibleConstructorReturn(this, (ContactPage.__proto__ || Object.getPrototypeOf(ContactPage)).call(this, props));

    _this.state = {
      email: '',
      text: '',
      submited: false,
      emailError: false,
      textError: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ContactPage, [{
    key: 'handleChange',
    value: function handleChange(prop, e) {
      this.setState(_defineProperty({}, prop, e.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.setState({ emailError: false, textError: false });
      if (!this.state.email) {
        this.setState({ emailError: true });
      }
      if (!this.state.text) {
        this.setState({ textError: true });
      }
      if (this.state.email && this.state.text) {
        fetch('/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.state.email,
            text: this.state.text
          })
        });
        this.setState({ submited: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '736478306',
            css: ['input.jsx-736478306,textarea.jsx-736478306{color:#000;}', 'a.jsx-736478306{color:#fff;}', 'a.jsx-736478306:hover{text-decoration:none;}']
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: ContactBlockStyle, className: 'jsx-736478306'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { style: ContactContainerStyle, className: 'jsx-736478306'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h2',
                {
                  className: 'jsx-736478306'
                },
                'Kontakt'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-736478306' + ' ' + 'pure-g'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-736478306' + ' ' + 'pure-u-1'
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                    className: 'jsx-736478306'
                  }),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-736478306' + ' ' + 'pure-u-1 pure-u-md-1-2'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'p',
                      {
                        className: 'jsx-736478306'
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'b',
                        {
                          className: 'jsx-736478306'
                        },
                        'K2projekt'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        {
                          href: 'https://www.google.com/maps/search/?api=1&query=Osvetov\xE1 24, 821 05 Bratislava',
                          target: '_blank',
                          className: 'jsx-736478306'
                        },
                        'Osvetov\xE1 24',
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                          className: 'jsx-736478306'
                        }),
                        '821 05 Bratislava'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      'I\u010CO: 46 756 311',
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      'DI\u010C: 2023 585 157',
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      'I\u010C DPH: SK2023 585 157'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-736478306' + ' ' + 'pure-u-1 pure-u-md-1-2'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'p',
                      {
                        className: 'jsx-736478306'
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        { href: 'mailto: k2projekt@k2projekt.sk', className: 'jsx-736478306'
                        },
                        'k2projekt@k2projekt.sk'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        { href: 'tel:+421 902 434 766', className: 'jsx-736478306'
                        },
                        '+421 902 434 766'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        {
                          style: FbLinkStyle,
                          target: '_blank',
                          href: 'https://www.facebook.com/K2projekt.sk',
                          className: 'jsx-736478306'
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', {
                          className: 'jsx-736478306' + ' ' + 'fab fa-facebook fa-2x'
                        })
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-736478306' + ' ' + 'pure-u-1'
                  },
                  !this.state.submited && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    {
                      onSubmit: this.handleSubmit,
                      className: 'jsx-736478306' + ' ' + 'pure-form pure-form-stacked'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'fieldset',
                      {
                        className: 'jsx-736478306'
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { htmlFor: 'text', className: 'jsx-736478306'
                        },
                        'S \u010D\xEDm m\xF4\u017Eeme pom\xF4c\u0165?'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('textarea', {
                        name: 'text',
                        value: this.state.text,
                        onChange: this.handleChange.bind(this, 'text'),

                        id: 'text',
                        cols: '30',
                        rows: '10',
                        className: 'jsx-736478306' + ' ' + 'pure-input-1'
                      }),
                      this.state.textError && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        {
                          style: ErrorStyle,
                          className: 'jsx-736478306' + ' ' + 'pure-form-message'
                        },
                        'Zadajte text spr\xE1vy.'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { htmlFor: 'email', className: 'jsx-736478306'
                        },
                        'Mailov\xE1 adresa, na ktor\xFA odpovieme'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                        type: 'email',
                        value: this.state.email,
                        onChange: this.handleChange.bind(this, 'email'),

                        name: 'email',
                        id: 'email',
                        className: 'jsx-736478306' + ' ' + 'pure-input-1'
                      }),
                      this.state.emailError && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        {
                          style: ErrorStyle,
                          className: 'jsx-736478306' + ' ' + 'pure-form-message'
                        },
                        'Zadajte mailov\xFA adresu.'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-736478306'
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { style: { textAlign: 'right' }, className: 'jsx-736478306'
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                          style: ContactButtonStyle,
                          type: 'submit',

                          value: 'Posla\u0165',
                          className: 'jsx-736478306' + ' ' + 'pure-button'
                        })
                      )
                    )
                  ),
                  this.state.submited && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h2',
                    {
                      className: 'jsx-736478306'
                    },
                    '\u010Eakujeme za spr\xE1vu. Budeme V\xE1s kontaktova\u0165.'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('iframe', {
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.9125368838218!2d17.174495900000004!3d48.1504914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c88ccdb67817b%3A0x7938866aaf3a2b7!2sOsvetov%C3%A1+17375%2F24%2C+821+05+Bratislava!5e0!3m2!1ssk!2ssk!4v1518960364697',
            width: '100%',
            height: '600',
            frameBorder: '0',
            allowFullScreen: true,
            className: 'jsx-736478306'
          })
        )
      );
    }
  }]);

  return ContactPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ })
/******/ ]);