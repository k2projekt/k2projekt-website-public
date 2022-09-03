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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




__webpack_require__(7);

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

var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post() {
        _classCallCheck(this, Post);

        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
    }

    _createClass(Post, [{
        key: 'sliceDescription',
        value: function sliceDescription(description) {
            var str = description.toLowerCase();
            var result = [];
            var idx = str.indexOf("\n");

            while (idx !== -1) {
                result.push(idx);
                idx = str.indexOf("\n", idx + 1);
            }
            return description.substring(0, result[1] + 1);
        }
    }, {
        key: 'formatDate',
        value: function formatDate(date) {
            return __WEBPACK_IMPORTED_MODULE_3_moment___default()(date).format('DD.MM.YYYY HH:mm:ss');
        }
    }, {
        key: 'getArticleId',
        value: function getArticleId(id) {
            return id.substring(id.lastIndexOf('/') + 1, id.length);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(this.props);
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'style',
                        { scoped: true },
                        '\n                    .new-style{        \n                        margin-top: 25px;\n                        margin-left:auto;\n                        margin-right: auto;\n                        width: 1000px;\n                    }\n                    .new-style-inner-header{\n                        padding: 19px 30px;\n                        width: 940px;\n                        background-color: #000000;\n                        color: #FFFFFF;\n                    }\n                    .new-style-inner-header h1{\n                        font-size: 46px;\n                        line-height: 54px;\n                    }\n                    .new-style-inner-header p{\n                        font-size: 14px;\n                        line-height: 22px;\n                    }\n                    .new-style-inner{\n                        padding: 19px 30px;\n                        width: 940px;\n                    }\n                    .innerHtml p{\n                        font-size: 18px;\n                        line-height: 25px;\n                        text-align: justify;\n                    }\n                    .innerHtml a{\n                        color: #000;\n                        font-weight: bold;          \n                    }\n                    .innerHtml a:hover{\n                        text-decoration: none;        \n                    }\n                    .innerHtml img {\n                      width: 100%;\n                  }\n                    div .div-class{\n                        width:500px; height:500px; background-color:#000000;\n                    }        \n                    .date{\n                        font-size: 14px;\n                        font-height: 22px;\n                        color: #434343;\n                    }\n                    @media (max-width: 1020px) {\n                    .new-style-inner{\n                        width: auto;\n                        margin: 0px 30px;\n                    }\n                    .new-style-inner-header{\n                        width: auto;\n                        margin: 0px 30px;\n                    }\n                    .new-style{\n                        width: auto;\n                    }\n                    \n                    }\n                    @media (min-width: 48em) {\n                      .studio-block {\n                        max-width: 1200px;\n                        min-height: 70vh;\n                        margin: 0 auto;\n                      }\n                    }\n                  '
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'section',
                        { style: StudiosHeadingStyle },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { style: StudiosHeadingTextStyle },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                null,
                                'Blog'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'section',
                        { style: { width: '100%', backgroundColor: '#FFFFFF' } },
                        this.props.articles ? this.props.articles.map(function (article) {
                            var articleId = article.guid.substring(article.guid.lastIndexOf('/') + 1, article.length);
                            if (articleId == _this2.props.url.query.id) {
                                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'new-style' },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        'div',
                                        { className: 'new-style-inner-header' },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'h1',
                                            null,
                                            article.title
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'p',
                                            null,
                                            _this2.formatDate(article.pubDate)
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        'div',
                                        { className: 'new-style-inner' },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'div',
                                            null,
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { className: 'innerHtml', dangerouslySetInnerHTML: { __html: article.content } }),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                                'div',
                                                { style: { width: 150, margin: "0 auto" } },
                                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                                    'a',
                                                    { href: article.link,
                                                        target: '_blank' },
                                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/medium-logo.svg', style: { width: 150 } })
                                                )
                                            )
                                        )
                                    )
                                );
                            }
                        }) : ''
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var res, json;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@k2projekt.sk');

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res.json();

                            case 5:
                                json = _context.sent;
                                return _context.abrupt('return', { articles: json.items });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Post;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });