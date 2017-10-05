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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

var _menu2 = _interopRequireDefault(_menu);

var _btn = __webpack_require__(2);

var _btn2 = _interopRequireDefault(_btn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerMenu = new _menu2.default();
var btnPrimary = new _btn2.default("btn--primary");
var btnSecondary = new _btn2.default("btn--secondary");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    _classCallCheck(this, Menu);

    // menu title
    this.menu = document.getElementsByClassName("menu__title")[0];
    // menu links box
    this.menuContent = document.getElementsByClassName("menu__links")[0];
    // mobile hamburger icon
    this.menuIcon = document.getElementsByClassName("menu__menu-icon")[0];
    this.events();
  }

  _createClass(Menu, [{
    key: "events",
    value: function events() {
      // click handler for sticky menu title
      this.menu.addEventListener("click", this.handleTitleClick.bind(this));
      // click handler for mobile
      this.menuIcon.addEventListener("click", this.handleTitleClick.bind(this));
    }
  }, {
    key: "handleTitleClick",
    value: function handleTitleClick(e) {
      // toggle active class from menu title
      this.menu.classList.toggle("menu__title--is-active");
      // toggle menu visibility
      this.menuContent.classList.toggle("menu__links--is-visible");
      // change menu icon
      this.menuIcon.classList.toggle("menu__menu-icon--close-x");
    }
  }]);

  return Menu;
}();

exports.default = Menu;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Btn = function () {
  function Btn(my_class) {
    _classCallCheck(this, Btn);

    this.my_class = my_class;
    this.btns = document.getElementsByClassName(my_class);
    this.events();
  }

  _createClass(Btn, [{
    key: "events",
    value: function events() {
      for (var i = 0; i < this.btns.length; i++) {
        this.btns[i].addEventListener("mousedown", this.handleMouseDown.bind(this));
        this.btns[i].addEventListener("mouseup", this.handleMouseUp.bind(this));
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      e.target.classList.add(this.my_class + "--pressed");
      e.stopPropagation();
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      e.target.classList.remove(this.my_class + "--pressed");
    }
  }]);

  return Btn;
}();

exports.default = Btn;

/***/ })
/******/ ]);