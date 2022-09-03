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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(3);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// CONCATENATED MODULE: ./components/project.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ProjectStyle = {
  position: 'relative',
  minHeight: '80vh',
  padding: '30px'
};

var ProjectTextStyle = {
  position: 'absolute',
  top: '100px',
  right: '30px',
  width: '600px',
  maxWidth: '50%',
  padding: '10px 20px',
  background: '#000',
  borderRadius: '1px',
  color: '#fff',
  fontSize: '15px',
  opacity: '.85',
  zIndex: 2,
  textAlign: 'justify'
};

var getProjectImageStyle = function getProjectImageStyle(image) {
  return {
    position: 'absolute',
    backgroundImage: 'url(' + image + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%'
  };
};

var project_Project = function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
  }

  _createClass(Project, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var images = this.props.images.map(function (image, index) {
        return external__react__default.a.createElement(
          'div',
          { className: 'swiper-slide', key: index },
          external__react__default.a.createElement(
            'section',
            { style: ProjectStyle },
            external__react__default.a.createElement('div', { style: getProjectImageStyle(_this2.props.folder + image) })
          )
        );
      });
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2129183328'
        },
        external__react__default.a.createElement(style__default.a, {
          styleId: '2129183328',
          css: ['.swiper-button-prev.jsx-2129183328{background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 27 44\'%3E%3Cpath d=\'M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z\' fill=\'%23fff\'/%3E%3C/svg%3E");}', '.swiper-button-next.jsx-2129183328{background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 27 44\'%3E%3Cpath d=\'M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z\' fill=\'%23fff\'/%3E%3C/svg%3E");}', '.swiper-button-prev.jsx-2129183328,.swiper-button-next.jsx-2129183328{top:70%;background-color:rgba(0,0,0,0.8);padding:15px 15px;}', '@media (min-width:48em){.swiper-button-prev.jsx-2129183328,.swiper-button-next.jsx-2129183328{top:50%;}}']
        }),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-2129183328' + ' ' + 'swiper-container'
          },
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-2129183328' + ' ' + 'swiper-wrapper'
            },
            images
          ),
          external__react__default.a.createElement(
            'h2',
            {
              style: {
                display: 'inline-block',
                position: 'absolute',
                marginTop: 0,
                top: 0,
                left: 0,
                right: 0,
                color: '#fff',
                zIndex: 2,
                padding: '8px 20px',
                lineHeight: '1.5em',
                background: '#000',
                borderRadius: '1px'
              },
              className: 'jsx-2129183328'
            },
            this.props.title
          ),
          external__react__default.a.createElement(
            'p',
            { style: ProjectTextStyle, className: 'jsx-2129183328'
            },
            this.props.description
          ),
          external__react__default.a.createElement('div', {
            className: 'jsx-2129183328' + ' ' + 'swiper-pagination'
          }),
          external__react__default.a.createElement('div', {
            className: 'jsx-2129183328' + ' ' + 'swiper-button-prev'
          }),
          external__react__default.a.createElement('div', {
            className: 'jsx-2129183328' + ' ' + 'swiper-button-next'
          })
        )
      );
    }
  }]);

  return Project;
}(external__react__default.a.Component);

/* harmony default export */ var components_project = (project_Project);
// CONCATENATED MODULE: ./pages/projects.js


var projects__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function projects__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function projects__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function projects__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




__webpack_require__(7);

var ImageStyle = {
  backgroundImage: 'url(/static/projects.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  width: '100%',
  height: '100%'
};

var TextBlockStyle = {
  textAlign: 'justify'
};

var projects_Projects = function (_React$Component) {
  projects__inherits(Projects, _React$Component);

  function Projects() {
    projects__classCallCheck(this, Projects);

    return projects__possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
  }

  projects__createClass(Projects, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(
          layout["a" /* default */],
          null,
          external__react__default.a.createElement(style__default.a, {
            styleId: '1158333359',
            css: ['.project-block.jsx-1158333359{background:#eee;}', '.text-block.jsx-1158333359{padding:30px;}', '.project-block.jsx-1158333359{min-height:80vh;}', '.project-block.jsx-1158333359>div.jsx-1158333359{height:100%;}', '.text-block.jsx-1158333359{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:0 5em;}']
          }),
          external__react__default.a.createElement(
            'section',
            {
              style: { minHeight: '60vh', height: 700 },
              className: 'jsx-1158333359' + ' ' + 'pure-g project-block'
            },
            external__react__default.a.createElement(
              'div',
              {
                style: { position: 'relative' },
                className: 'jsx-1158333359' + ' ' + 'pure-u-1 pure-u-md-1-2'
              },
              external__react__default.a.createElement(
                'div',
                {
                  className: 'jsx-1158333359' + ' ' + 'text-block'
                },
                external__react__default.a.createElement(
                  'h2',
                  { style: { marginTop: '0' }, className: 'jsx-1158333359'
                  },
                  'Projekty'
                ),
                external__react__default.a.createElement(
                  'p',
                  { style: TextBlockStyle, className: 'jsx-1158333359'
                  },
                  'Pozrite si projekty, na ktor\xFDch sme spolupracovali. Ka\u017Ed\xFD projekt je individu\xE1lny, a preto si vy\u017Eaduje osobn\xFD pr\xEDstup. D\xE1vame si z\xE1le\u017Ea\u0165 na tom, aby sa predstava autora naplno zhmotnila v dizajne a v hlavnej my\u0161lienke diela. Zabezpe\u010Dujeme spolupr\xE1cu medzi profesion\xE1lmi, ktor\xED vedia projekt obohati\u0165. Komplexne sa star\xE1me o v\u0161etky \u0161pecifick\xE9 detaily. Podporujeme inov\xE1cie a kreativitu. In\u0161pirujte sa na\u0161ou kooper\xE1ciou profesion\xE1lov a projektov\xFDm mana\u017Ementom, ktor\xE9 vytvorili tieto nev\u0161edn\xE9 diela. Kontaktujte n\xE1s a vytvorte svoj nov\xFD projekt s nami.'
                )
              )
            ),
            external__react__default.a.createElement(
              'div',
              {
                style: { position: 'relative', minHeight: '300px' },
                className: 'jsx-1158333359' + ' ' + 'pure-u-1 pure-u-md-1-2'
              },
              external__react__default.a.createElement('div', { style: ImageStyle, className: 'jsx-1158333359'
              })
            )
          ),
          this.props.projects ? this.props.projects.map(function (project) {
            var images = project.attributes.image.data.map(function (image) {
              return image.attributes.formats.large.url;
            });
            return external__react__default.a.createElement(components_project, {
              title: project.attributes.name,
              description: project.attributes.description,
              folder: '',
              images: images
            });
          }) : ''
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee() {
        var res, json;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://k2projekt-cms.herokuapp.com/api/projects?populate=*');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt('return', { projects: json.data });

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

  return Projects;
}(external__react__default.a.Component);

/* harmony default export */ var projects = __webpack_exports__["default"] = (projects_Projects);

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

/***/ })

/******/ });