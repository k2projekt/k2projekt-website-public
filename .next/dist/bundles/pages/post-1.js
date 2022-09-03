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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),

/***/ 28:
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
                            'Mana\u017E\xE9r riadenia projektov'
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
                                    'Spr\xE1vna koordin\xE1cia projektu a jeho nosn\xFDch \u010Dl\xE1nkov, ak\xFDmi s\xFA jednotliv\xE9 odborn\xE9 profesie, prin\xE1\u0161a so sebou mnoho pozit\xEDv. Mana\u017E\xE9r riadenia projektu m\xE1 za \xFAlohu najm\xE4 spr\xE1vne, odborne a technicky realizovate\u013Ene sk\u013Abi\u0165 my\u0161lienku a ideu architekta. Kontroluje a overuje projek\u010Dn\xFD n\xE1vrh s technick\xFDmi mo\u017Enos\u0165ami realiz\xE1cie a platnou legislat\xEDvou. \u010Castokr\xE1t je t\xE1to funkcia spojen\xE1 do jednej funkcie s projektantom diela. Pre\u010Do je mana\u017E\xE9r pre riadenie projektu mimoriadne d\xF4le\u017Eit\xFD, v\xE1m prezrad\xEDme v nasleduj\xFAcom \u010Dl\xE1nku.'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Cie\u013Eom spolupr\xE1ce architektov s ich klientami je vytvori\u0165 hodnotn\xE9 dielo, v ktorom bude sk\u013Aben\xE1 my\u0161lienka architekta s predstavou klienta. V\xFDsledkom ich vz\xE1jomnej kooper\xE1cie je architektonick\xE1 \u0161t\xFAdia, ktor\xE1 d\xE1va a\u017E hmatate\u013En\xFD obraz o tom, ako m\xE1 dielo vyzera\u0165.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Cie\u013Eom developera, ako aj investora je postavi\u0165 dielo/stavbu, ktor\xE9 bude jeho spolo\u010Dnos\u0165 reprezentova\u0165. Na trhu zaujme svojou nev\u0161ednos\u0165ou, \u010D\xEDm z\xEDska pozornos\u0165 a lep\u0161iu strat\xE9giu pre predaj a zisk.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                '\xDAlohou mana\u017E\xE9ra riadenia projektu je:',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                '- Naplni\u0165 ciele a o\u010Dak\xE1vania architekta, developera a investora z\xE1rove\u0148.',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                '- Zachova\u0165 dizajn, my\u0161lienku a ideu architekta v s\xFAhre a vz\xE1jomnej symbi\xF3ze s technick\xFDm a odborn\xFDm rie\u0161en\xEDm stavby.',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                '- Prebra\u0165 na seba mieru zodpovednosti za spr\xE1vny kon\u0161truk\u010Dn\xFD a technick\xFD n\xE1vrh diela.',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                'V\u010Faka mana\u017E\xE9rovi riadenia projektov, maj\xFA jeho klienti viac \u010Dasu na rie\u0161enie svojich prim\xE1rnych cie\u013Eov a aktiv\xEDt. A to v pracovnom i osobnom \u017Eivote.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: '../static/blog/01/fists.jpg', alt: 'Fists together image', className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Ako to funguje?'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Z\xE1kladom je d\xF4vera. Mana\u017E\xE9r riadenia projektu je va\u0161\xEDm partnerom. Jeho cie\u013Eom je aplik\xE1ciou svojich vedomost\xED a zru\u010Dnost\xED odovzda\u0165 do va\u0161ich r\xFAk hotov\xE9 projek\u010Dn\xE9 dielo. Dielo, ktor\xE9 bude plne pripraven\xE9 na tendrovanie dod\xE1vate\u013Ea alebo aj priamo na realiz\xE1ciu.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                '\u010Co ak m\xE1m svoj projek\u010Dn\xFD t\xEDm?'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'M\xE1te svoj overen\xFD projek\u010Dn\xFDm t\xEDm? Pre n\xE1s to nie je \u017Eiadna prek\xE1\u017Eka! Mana\u017E\xE9r riadenia projektu dok\xE1\u017Ee koordinova\u0165 aj va\u0161ich odborn\xEDkov, dr\u017Ea\u0165 z\xE1\u0161titu nad cel\xFDm procesom riadenia, vyhodnocova\u0165 rizik\xE1 a spr\xE1vne delegova\u0165 pr\xE1cu. Tak, aby ste mali rozviazan\xE9 ruky a mohli sa venova\u0165 \u010Fal\u0161\xEDm projektom, klientom, podnikaniu a sebe..'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Je vhodn\xE9 aby mana\u017E\xE9r riadenia projektu bol aj jeho hlavn\xFDm projektantom?'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Riadenie projektu si vy\u017Eaduje sk\xFAsenosti, vedomosti v oblasti projekcie a realiz\xE1cie stavieb, technick\xE9 a odborn\xE9 zru\u010Dnosti. Potrebn\xE9 s\xFA tie\u017E empatick\xE9 a mana\u017E\xE9rske vlastnosti a schopnosti a v neposlednom rade \u010Das. Architektonicko-kon\u0161truk\u010Dn\xE9 projektovanie stavieb si vy\u017Eaduje technick\xE9 zru\u010Dnosti a myslenie, zmysel pre detail, a cit pre kon\u0161trukcie. Architektonicko-kon\u0161truk\u010Dn\xE9 projektovanie aj mana\u017Ement riadenia projektu s\xFA ve\u013Emi \xFAzko s\xFAvisiace funkcie, ktor\xE9 jedna bez druhej nefunguj\xFA spr\xE1vne. Kedy je potrebn\xE9, aby tieto dve funkcie zast\xE1vali aspo\u0148 dvaja odborn\xEDci? O tom rozhoduj\xFA najm\xE4 rozmer diela a \u010Dasov\xE1 n\xE1ro\u010Dnos\u0165 na logistiku projektovania.',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                'U n\xE1s v ',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'a',
                                    { href: 'https://www.k2projekt.sk', className: 'jsx-2292024780'
                                    },
                                    'K2projekt-e'
                                ),
                                ' tieto rozhodnutia nemusia robi\u0165 na\u0161i klienti. Vieme v\xE1m odporu\u010Di\u0165, ako spr\xE1vne projekt nastavi\u0165, ko\u013Eko odborn\xEDkov do neho anga\u017Eova\u0165 tak, aby boli naplnen\xE9 va\u0161e o\u010Dak\xE1vania.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Kedy m\xE1m mana\u017E\xE9ra riadenia projektu oslovi\u0165?'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'O tom, kedy dovol\xEDte aby mana\u017E\xE9r riadenia projektu vst\xFApil s vami do spolupr\xE1ce, rozhodujete vy. My odpor\xFA\u010Dame, aby ste n\xE1s prizvali do procesu pri tvoren\xED architektonickej \u0161t\xFAdie. U\u017E tu v\xE1m vieme by\u0165 n\xE1pomocn\xED odborn\xFDmi radami a postrehmi. Na\u0161a pr\xE1ca v\u0161ak naplno za\u010D\xEDna projektom pre stavebn\xE9 povolenie.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Kedy m\xF4\u017Eem vidie\u0165 v\xFDsledky?'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'V\xFDsledky na\u0161ej spolupr\xE1ce s\xFA vidite\u013En\xE9 okam\u017Eite. Napr\xEDklad t\xFDm, \u017Ee z\xEDskavate \u010Das na rozv\xEDjanie svojho podnikania, zatia\u013E \u010Do my sa postar\xE1me o technick\xE9 detaily v\xE1\u0161ho projektu.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Ako m\xE1m presko\u010Di\u0165 konkurenciu a z\xEDska\u0165 priestor na rozvoj svojej spolo\u010Dnosti?'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'So spr\xE1vnym mana\u017E\xE9rom pre riadenie va\u0161ich projektov sa v\xE1m otv\xE1raj\xFA mo\u017Enosti. Mo\u017Enos\u0165 s\xFAstredi\u0165 sa na svoje z\xE1ujmy, budova\u0165 nov\xE9 a upev\u0148ova\u0165 jestvuj\xFAce spolupr\xE1ce. Budete tie\u017E m\xF4c\u0165 venova\u0165 svoj \u010Das a energiu t\xFDm spr\xE1vnym projektom a s\xFAstredi\u0165 sa na vlastn\xFD rast.',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    className: 'jsx-2292024780'
                                }),
                                'My v ',
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'a',
                                    { href: 'https://www.k2projekt.sk', className: 'jsx-2292024780'
                                    },
                                    'K2projekt-e'
                                ),
                                ' si v\xE1\u017Eime v\xE1\u0161 \u010Das. Neplytv\xE1me n\xEDm tak, ako neplytv\xE1me ani svoj\xEDm \u010Dasom. V\xE1\u0161 \xFAspech a spokojnos\u0165 s\xFA z\xE1rukou na\u0161ej dlhodobej a spokojnej spolupr\xE1ce.'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                className: 'jsx-2292024780'
                            }),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'h2',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Ako m\xE1m za\u010Da\u0165 spolupr\xE1cu?'
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'p',
                                {
                                    className: 'jsx-2292024780'
                                },
                                'Zaklad\xE1me si na d\xF4vere, budovan\xED spolupr\xE1c a absol\xFAtnej spokojnosti na\u0161ich klientov. Od toho, ako dnes pracujete, k tomu, ako by ste mohli pracova\u0165, v\xE1s del\xED len jedno rozhodnutie. Ak sa rozhodnete, \u017Ee nastal \u010Das pre zmenu, sme tu pre v\xE1s.'
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
                                    { href: 'https://medium.com/@k2projekt.sk/mana%C5%BE%C3%A9r-riadenia-projektov-3c51b422094a',
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

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ })

/******/ });