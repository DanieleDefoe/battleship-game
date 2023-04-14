"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ 514:
/*!**************************!*\
  !*** ./src/blankArea.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-sequences */
var blankArea = function blankArea(event, shipLength, isHorizontal) {
  if (event.target === event.currentTarget) return;
  var pos = event.target.id;
  var position = parseInt(pos, 10);
  if ((position + shipLength - 1) % 10 < shipLength - 1 && isHorizontal) return;
  if ((position + shipLength * 10) % 100 < shipLength * 10 && !isHorizontal) return;
  for (var i = position, j = 0; i <= position + shipLength, j < shipLength; i += 1, j += 1) {
    var node = void 0;
    if (isHorizontal) {
      node = document.querySelector("#user-preview div[id=\"".concat(i, "\"]"));
    } else {
      node = document.querySelector("#user-preview div[id=\"".concat(i + j * 10, "\"]"));
      i -= 1;
    }
    node.classList.remove('green-hover');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (blankArea);

/***/ }),

/***/ 755:
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github.svg */ 926);

var createFooter = function () {
  var footer = document.createElement('footer');
  footer.className = 'footer';
  var copyright = document.createElement('p');
  copyright.className = 'footer__copyright';
  copyright.textContent = "Copyright \xA9 ".concat(new Date().getFullYear(), " Abuzar Mamedov");
  var githubIcon = new Image();
  githubIcon.className = 'footer__icon';
  githubIcon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_0__;
  githubIcon.alt = 'github icon';
  var linkToGithub = document.createElement('a');
  linkToGithub.className = 'footer__link';
  linkToGithub.href = 'https://github.com/DanieleDefoe';
  linkToGithub.rel = 'noreferrer noopener nofollow';
  linkToGithub.append(githubIcon);
  footer.append(copyright, linkToGithub);
  return footer;
}();
/* harmony default export */ __webpack_exports__["default"] = (createFooter);

/***/ }),

/***/ 145:
/*!***************************!*\
  !*** ./src/gridRotate.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var createGridRotate = function () {
  var gridRotateBtn = document.createElement('button');
  gridRotateBtn.className = 'popup__rotate';
  gridRotateBtn.textContent = 'Rotate';
  window.isHorizontal = true;
  var toggleAxis = function toggleAxis() {
    window.isHorizontal = !window.isHorizontal;
  };
  gridRotateBtn.addEventListener('click', toggleAxis);
  return gridRotateBtn;
}();
/* harmony default export */ __webpack_exports__["default"] = (createGridRotate);

/***/ }),

/***/ 623:
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var createHeader = function () {
  var header = document.createElement('header');
  header.className = 'header';
  var headerTitle = document.createElement('h1');
  headerTitle.className = 'header__title';
  headerTitle.textContent = 'battleship';
  header.append(headerTitle);
  return header;
}();
/* harmony default export */ __webpack_exports__["default"] = (createHeader);

/***/ }),

/***/ 1:
/*!**************************!*\
  !*** ./src/heroPopup.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playgroundGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playgroundGrid */ 772);
/* harmony import */ var _highlightArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlightArea */ 203);
/* harmony import */ var _blankArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blankArea */ 514);
/* harmony import */ var _placeShip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeShip */ 524);
/* harmony import */ var _gridRotate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gridRotate */ 145);
/* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipClass */ 453);






var createHeroPopup = function () {
  var user = (0,_playgroundGrid__WEBPACK_IMPORTED_MODULE_0__["default"])('user-preview');
  var popup = document.createElement('section');
  popup.className = 'popup';
  var shipIndex = 0;
  var callback1 = function callback1(event) {
    return (0,_highlightArea__WEBPACK_IMPORTED_MODULE_1__["default"])(event, _shipClass__WEBPACK_IMPORTED_MODULE_5__.ships[shipIndex].length, window.isHorizontal);
  };
  var callback2 = function callback2(event) {
    return (0,_blankArea__WEBPACK_IMPORTED_MODULE_2__["default"])(event, _shipClass__WEBPACK_IMPORTED_MODULE_5__.ships[shipIndex].length, window.isHorizontal);
  };
  var callback3 = function callback3(event) {
    var result = (0,_placeShip__WEBPACK_IMPORTED_MODULE_3__["default"])(event, _shipClass__WEBPACK_IMPORTED_MODULE_5__.ships, shipIndex);
    if (result) {
      shipIndex += 1;
    }
    if (shipIndex === _shipClass__WEBPACK_IMPORTED_MODULE_5__.ships.length) {
      user.removeEventListener('mouseover', callback1);
      user.removeEventListener('mouseout', callback2);
      user.removeEventListener('click', callback3);
      popup.classList.add('hidden');
    }
  };
  user.addEventListener('mouseover', callback1);
  user.addEventListener('mouseout', callback2);
  user.addEventListener('click', callback3);
  var popupContainer = document.createElement('div');
  popupContainer.className = 'popup__container';
  var title = document.createElement('h2');
  title.className = 'popup__title';
  title.textContent = 'Welcome to battleship game';
  var actionText = document.createElement('p');
  actionText.className = 'popup__action';
  actionText.textContent = 'Place your ';
  var shipName = document.createElement('span');
  shipName.className = 'popup__ship-name';
  shipName.textContent = 'Carrier';
  actionText.append(shipName);
  popupContainer.append(title, actionText, _gridRotate__WEBPACK_IMPORTED_MODULE_4__["default"], user);
  popup.append(popupContainer);
  return popup;
}();
/* harmony default export */ __webpack_exports__["default"] = (createHeroPopup);

/***/ }),

/***/ 203:
/*!******************************!*\
  !*** ./src/highlightArea.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blankArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blankArea */ 514);
/* eslint-disable no-sequences */

var highlightArea = function highlightArea(event, shipLength, isHorizontal) {
  if (event.target === event.currentTarget) return;
  var pos = event.target.id;
  var position = parseInt(pos, 10);
  if ((position + shipLength - 1) % 10 < shipLength - 1 && isHorizontal) return;
  if ((position + shipLength * 10) % 100 < shipLength * 10 && !isHorizontal) return;
  for (var i = position, j = 0; i <= position + shipLength, j < shipLength; i += 1, j += 1) {
    var node = void 0;
    if (isHorizontal) {
      node = document.querySelector("#user-preview div[id=\"".concat(i, "\"]"));
      if (node.classList.contains('black-ship')) {
        (0,_blankArea__WEBPACK_IMPORTED_MODULE_0__["default"])(event, shipLength, isHorizontal);
        return;
      }
    } else {
      node = document.querySelector("#user-preview div[id=\"".concat(i + j * 10, "\"]"));
      i -= 1;
      if (node.classList.contains('black-ship')) {
        (0,_blankArea__WEBPACK_IMPORTED_MODULE_0__["default"])(event, shipLength, isHorizontal);
        return;
      }
    }
    node.classList.add('green-hover');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (highlightArea);

/***/ }),

/***/ 579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ 915);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ 623);
/* harmony import */ var _mains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mains */ 498);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ 755);
/* harmony import */ var _heroPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroPopup */ 1);
/* eslint-disable import/no-extraneous-dependencies */





var App = function App() {
  var _document = document,
    body = _document.body;
  body.className = 'page';
  body.append(_header__WEBPACK_IMPORTED_MODULE_1__["default"], _mains__WEBPACK_IMPORTED_MODULE_2__["default"], _footer__WEBPACK_IMPORTED_MODULE_3__["default"], _heroPopup__WEBPACK_IMPORTED_MODULE_4__["default"]);
};
App();

/***/ }),

/***/ 498:
/*!**********************!*\
  !*** ./src/mains.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playgroundGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playgroundGrid */ 772);
/* harmony import */ var _placeComputerShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeComputerShips */ 93);


var createMain = function () {
  var main = document.createElement('main');
  main.className = 'main';
  var user = (0,_playgroundGrid__WEBPACK_IMPORTED_MODULE_0__["default"])('user');
  var computer = (0,_playgroundGrid__WEBPACK_IMPORTED_MODULE_0__["default"])('computer');
  (0,_placeComputerShips__WEBPACK_IMPORTED_MODULE_1__["default"])(computer);
  main.append(user, computer);
  return main;
}();
/* harmony default export */ __webpack_exports__["default"] = (createMain);

/***/ }),

/***/ 93:
/*!***********************************!*\
  !*** ./src/placeComputerShips.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipClass */ 453);
/* eslint-disable no-continue */
/* eslint-disable no-sequences */

var placeComputerShips = function placeComputerShips(computer) {
  var carrier = new _shipClass__WEBPACK_IMPORTED_MODULE_0__["default"]('Carrier', 5);
  var battleship = new _shipClass__WEBPACK_IMPORTED_MODULE_0__["default"]('Battleship', 4);
  var destroyer = new _shipClass__WEBPACK_IMPORTED_MODULE_0__["default"]('Destroyer', 3);
  var submarine = new _shipClass__WEBPACK_IMPORTED_MODULE_0__["default"]('Submarine', 3);
  var patrolBoat = new _shipClass__WEBPACK_IMPORTED_MODULE_0__["default"]('Patrol-boat', 2);
  var ships = [carrier, battleship, destroyer, submarine, patrolBoat];
  for (var i = 0; i < ships.length; i += 1) {
    var currentShip = ships[i];
    var length = currentShip.length;
    var isHorizontal = Math.random() < 0.5;
    var randomStartIndex = Math.floor(Math.random() * 100);
    if ((randomStartIndex + length - 1) % 10 < length - 1 && isHorizontal) {
      i -= 1;
      continue;
    }
    if ((randomStartIndex + length * 10) % 100 < length * 10 && !isHorizontal) {
      i -= 1;
      continue;
    }
    if (computer.querySelector("div[id=\"".concat(randomStartIndex, "\"]")).classList.contains('black-ship')) {
      i -= 1;
      continue;
    }
    for (var j = randomStartIndex, k = 0; j <= randomStartIndex + length, k < length; j += 1, k += 1) {
      var node = void 0;
      if (isHorizontal) {
        node = computer.querySelector("div[id=\"".concat(j, "\"]"));
      } else {
        node = computer.querySelector("div[id=\"".concat(j + k * 10, "\"]"));
        j -= 1;
      }
      if (node.classList.contains('black-ship')) {
        i -= 1;
        continue;
      }
      node.classList.add('black-ship', currentShip.name);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (placeComputerShips);

/***/ }),

/***/ 524:
/*!**************************!*\
  !*** ./src/placeShip.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-sequences */
var placeShip = function placeShip(event, ships, shipIndex) {
  console.log(shipIndex);
  var ship = ships[shipIndex];
  if (ship) {
    var pos = event.target.id;
    var length = ship.length,
      name = ship.name;
    var position = parseInt(pos, 10);
    if ((position + length - 1) % 10 < length - 1 && window.isHorizontal) return false;
    if ((position + length * 10) % 100 < length * 10 && !window.isHorizontal) return false;
    for (var i = position, j = 0; i <= position + length, j < length; i += 1, j += 1) {
      var node = void 0;
      var newNode = void 0;
      if (window.isHorizontal) {
        node = document.getElementById(i);
        newNode = document.querySelector("#user-preview div[id=\"".concat(i, "\"]"));
      } else {
        node = document.getElementById(i + j * 10);
        newNode = document.querySelector("#user-preview div[id=\"".concat(i + j * 10, "\"]"));
        i -= 1;
      }
      if (node.classList.contains('black-ship')) {
        return false;
      }
      node.classList.remove('green-hover');
      node.classList.add('black-ship', name);
      newNode.classList.add('black-ship');
    }
    var actionText = document.querySelector('.popup__ship-name');
    if (ships[shipIndex + 1]) {
      actionText.textContent = ships[shipIndex + 1].name;
    }
    return true;
  }
  return false;
};
/* harmony default export */ __webpack_exports__["default"] = (placeShip);

/***/ }),

/***/ 772:
/*!*******************************!*\
  !*** ./src/playgroundGrid.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var createGrid = function createGrid(player) {
  var grid = document.createElement('section');
  grid.className = 'playground-grid';
  grid.id = player;
  for (var i = 0; i < 100; i += 1) {
    var block = document.createElement('div');
    block.className = 'playground__block';
    block.id = i;
    grid.append(block);
  }
  return grid;
};
/* harmony default export */ __webpack_exports__["default"] = (createGrid);

/***/ }),

/***/ 453:
/*!**************************!*\
  !*** ./src/shipClass.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ships": function() { return /* binding */ ships; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(name, length) {
    _classCallCheck(this, Ship);
    this.name = name;
    this.length = length;
    this.damage = 0;
    this.isSunk = false;
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.damage += 1;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.damage === this.length;
    }
  }]);
  return Ship;
}();
var carrier = new Ship('Carrier', 5);
var battleship = new Ship('Battleship', 4);
var destroyer = new Ship('Destroyer', 3);
var submarine = new Ship('Submarine', 3);
var patrolBoat = new Ship('Patrol-boat', 2);
var ships = [carrier, battleship, destroyer, submarine, patrolBoat];
/* harmony default export */ __webpack_exports__["default"] = (Ship);

/***/ }),

/***/ 891:
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/marker.css ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ 667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./PermanentMarker-Regular.ttf */ 612), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Permanent Marker';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n", "",{"version":3,"sources":["webpack://./src/fonts/marker.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,4CAAuC;EACvC,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB","sourcesContent":["@font-face {\n  font-family: 'Permanent Marker';\n  src: url(./PermanentMarker-Regular.ttf);\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 890:
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_marker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/marker.css */ 891);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_marker_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --header-height: clamp(150px, 20vh, 500px);\n}\n\n.page {\n  min-height: 100vh;\n  width: 100%;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n  height: var(--header-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 20px 0 20px 0 rgba(0, 0, 0, 0.5);\n}\n\n.header__title {\n  text-transform: uppercase;\n  font-size: 10rem;\n  text-align: center;\n}\n\n.main {\n  width: 100%;\n  height: calc(100vh - var(--header-height) - 70px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n.playground-grid {\n  width: 500px;\n  height: 500px;\n  box-sizing: unset;\n  display: flex;\n  flex-flow: row wrap;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block {\n  width: 50px;\n  height: 50px;\n  border-top: 2px solid rgba(0, 0, 0, 0.8);\n  border-left: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block:nth-of-type(10n) {\n  border-right: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.footer {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  box-shadow: -20px 0 20px 0 rgba(0, 0, 0, 0.5);\n  font-size: 2.5rem;\n  gap: 2rem;\n}\n\n.footer__link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s ease-in;\n}\n\n.footer__icon {\n  object-fit: contain;\n  width: 4rem;\n}\n\n.popup {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.popup.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.popup__container {\n  width: 560px;\n  height: 90%;\n  background: floralwhite;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.popup__title {\n  font-size: 3.5rem;\n}\n\n.popup__action {\n  font-size: 3rem;\n}\n\n.popup__ship-name {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.popup__rotate {\n  font-size: 3.5rem;\n  padding: 1.5rem 2.5rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: opacity 0.2s ease-in;\n  cursor: pointer;\n}\n\n.green-hover {\n  background: lightgreen;\n}\n\n.black-ship {\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.enemy-hidden-ship {\n  background: transparent;\n}\n\n@media (hover: hover) {\n  .footer__link:hover,\n  .popup__rotate:hover {\n    opacity: 0.7;\n  }\n\n  .playground__block:hover {\n    cursor: pointer;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,oDAAoD;EACpD;wEACsE;AACxE;;AAEA;EACE,6DAA6D;EAC7D,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,6CAA6C;EAC7C,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,oDAAoD;EACpD,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE;;IAEE,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["@import url(../fonts/marker.css);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --header-height: clamp(150px, 20vh, 500px);\n}\n\n.page {\n  min-height: 100vh;\n  width: 100%;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n  height: var(--header-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 20px 0 20px 0 rgba(0, 0, 0, 0.5);\n}\n\n.header__title {\n  text-transform: uppercase;\n  font-size: 10rem;\n  text-align: center;\n}\n\n.main {\n  width: 100%;\n  height: calc(100vh - var(--header-height) - 70px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n.playground-grid {\n  width: 500px;\n  height: 500px;\n  box-sizing: unset;\n  display: flex;\n  flex-flow: row wrap;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block {\n  width: 50px;\n  height: 50px;\n  border-top: 2px solid rgba(0, 0, 0, 0.8);\n  border-left: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block:nth-of-type(10n) {\n  border-right: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.footer {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  box-shadow: -20px 0 20px 0 rgba(0, 0, 0, 0.5);\n  font-size: 2.5rem;\n  gap: 2rem;\n}\n\n.footer__link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s ease-in;\n}\n\n.footer__icon {\n  object-fit: contain;\n  width: 4rem;\n}\n\n.popup {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.popup.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.popup__container {\n  width: 560px;\n  height: 90%;\n  background: floralwhite;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.popup__title {\n  font-size: 3.5rem;\n}\n\n.popup__action {\n  font-size: 3rem;\n}\n\n.popup__ship-name {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.popup__rotate {\n  font-size: 3.5rem;\n  padding: 1.5rem 2.5rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: opacity 0.2s ease-in;\n  cursor: pointer;\n}\n\n.green-hover {\n  background: lightgreen;\n}\n\n.black-ship {\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.enemy-hidden-ship {\n  background: transparent;\n}\n\n@media (hover: hover) {\n  .footer__link:hover,\n  .popup__rotate:hover {\n    opacity: 0.7;\n  }\n\n  .playground__block:hover {\n    cursor: pointer;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 667:
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 537:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 915:
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ 890);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 612:
/*!***********************************************!*\
  !*** ./src/fonts/PermanentMarker-Regular.ttf ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "73b4d2d7c9141a94b91c.ttf";

/***/ }),

/***/ 926:
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e21209f267368a1bd797.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(579));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmxhbmtBcmVhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZFJvdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlcm9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hpZ2hsaWdodEFyZWEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW5zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VDb21wdXRlclNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWdyb3VuZEdyaWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mb250cy9tYXJrZXIuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cbmNvbnN0IGJsYW5rQXJlYSA9IChldmVudCwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVyblxuICBjb25zdCBwb3MgPSBldmVudC50YXJnZXQuaWRcbiAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludChwb3MsIDEwKVxuXG4gIGlmICgocG9zaXRpb24gKyBzaGlwTGVuZ3RoIC0gMSkgJSAxMCA8IHNoaXBMZW5ndGggLSAxICYmIGlzSG9yaXpvbnRhbCkgcmV0dXJuXG4gIGlmICgocG9zaXRpb24gKyBzaGlwTGVuZ3RoICogMTApICUgMTAwIDwgc2hpcExlbmd0aCAqIDEwICYmICFpc0hvcml6b250YWwpXG4gICAgcmV0dXJuXG5cbiAgZm9yIChcbiAgICBsZXQgaSA9IHBvc2l0aW9uLCBqID0gMDtcbiAgICBpIDw9IHBvc2l0aW9uICsgc2hpcExlbmd0aCwgaiA8IHNoaXBMZW5ndGg7XG4gICAgaSArPSAxLCBqICs9IDFcbiAgKSB7XG4gICAgbGV0IG5vZGVcbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3VzZXItcHJldmlldyBkaXZbaWQ9XCIke2l9XCJdYClcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1c2VyLXByZXZpZXcgZGl2W2lkPVwiJHtpICsgaiAqIDEwfVwiXWApXG4gICAgICBpIC09IDFcbiAgICB9XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbi1ob3ZlcicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxhbmtBcmVhXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlcy9naXRodWIuc3ZnJ1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3RlcidcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29weXJpZ2h0LmNsYXNzTmFtZSA9ICdmb290ZXJfX2NvcHlyaWdodCdcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQWJ1emFyIE1hbWVkb3ZgXG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IG5ldyBJbWFnZSgpXG4gIGdpdGh1Ykljb24uY2xhc3NOYW1lID0gJ2Zvb3Rlcl9faWNvbidcbiAgZ2l0aHViSWNvbi5zcmMgPSBJY29uXG4gIGdpdGh1Ykljb24uYWx0ID0gJ2dpdGh1YiBpY29uJ1xuXG4gIGNvbnN0IGxpbmtUb0dpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBsaW5rVG9HaXRodWIuY2xhc3NOYW1lID0gJ2Zvb3Rlcl9fbGluaydcbiAgbGlua1RvR2l0aHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0RhbmllbGVEZWZvZSdcbiAgbGlua1RvR2l0aHViLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyIG5vZm9sbG93J1xuXG4gIGxpbmtUb0dpdGh1Yi5hcHBlbmQoZ2l0aHViSWNvbilcblxuICBmb290ZXIuYXBwZW5kKGNvcHlyaWdodCwgbGlua1RvR2l0aHViKVxuXG4gIHJldHVybiBmb290ZXJcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyXG4iLCJjb25zdCBjcmVhdGVHcmlkUm90YXRlID0gKCgpID0+IHtcbiAgY29uc3QgZ3JpZFJvdGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGdyaWRSb3RhdGVCdG4uY2xhc3NOYW1lID0gJ3BvcHVwX19yb3RhdGUnXG4gIGdyaWRSb3RhdGVCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlJ1xuXG4gIHdpbmRvdy5pc0hvcml6b250YWwgPSB0cnVlXG5cbiAgY29uc3QgdG9nZ2xlQXhpcyA9ICgpID0+IHtcbiAgICB3aW5kb3cuaXNIb3Jpem9udGFsID0gIXdpbmRvdy5pc0hvcml6b250YWxcbiAgfVxuXG4gIGdyaWRSb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBeGlzKVxuXG4gIHJldHVybiBncmlkUm90YXRlQnRuXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdyaWRSb3RhdGVcbiIsImNvbnN0IGNyZWF0ZUhlYWRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJ1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoZWFkZXJUaXRsZS5jbGFzc05hbWUgPSAnaGVhZGVyX190aXRsZSdcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnYmF0dGxlc2hpcCdcblxuICBoZWFkZXIuYXBwZW5kKGhlYWRlclRpdGxlKVxuXG4gIHJldHVybiBoZWFkZXJcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyXG4iLCJpbXBvcnQgcGxheWdyb3VuZEdyaWQgZnJvbSAnLi9wbGF5Z3JvdW5kR3JpZCdcblxuaW1wb3J0IGhpZ2hsaWdodEFyZWEgZnJvbSAnLi9oaWdobGlnaHRBcmVhJ1xuaW1wb3J0IGJsYW5rQXJlYSBmcm9tICcuL2JsYW5rQXJlYSdcblxuaW1wb3J0IHBsYWNlU2hpcCBmcm9tICcuL3BsYWNlU2hpcCdcblxuaW1wb3J0IGdyaWRSb3RhdGVCdG4gZnJvbSAnLi9ncmlkUm90YXRlJ1xuXG5pbXBvcnQgeyBzaGlwcyB9IGZyb20gJy4vc2hpcENsYXNzJ1xuXG5jb25zdCBjcmVhdGVIZXJvUG9wdXAgPSAoKCkgPT4ge1xuICBjb25zdCB1c2VyID0gcGxheWdyb3VuZEdyaWQoJ3VzZXItcHJldmlldycpXG5cbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwJ1xuXG4gIGxldCBzaGlwSW5kZXggPSAwXG5cbiAgY29uc3QgY2FsbGJhY2sxID0gKGV2ZW50KSA9PlxuICAgIGhpZ2hsaWdodEFyZWEoZXZlbnQsIHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoLCB3aW5kb3cuaXNIb3Jpem9udGFsKVxuXG4gIGNvbnN0IGNhbGxiYWNrMiA9IChldmVudCkgPT5cbiAgICBibGFua0FyZWEoZXZlbnQsIHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoLCB3aW5kb3cuaXNIb3Jpem9udGFsKVxuXG4gIGNvbnN0IGNhbGxiYWNrMyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBsYWNlU2hpcChldmVudCwgc2hpcHMsIHNoaXBJbmRleClcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzaGlwSW5kZXggKz0gMVxuICAgIH1cbiAgICBpZiAoc2hpcEluZGV4ID09PSBzaGlwcy5sZW5ndGgpIHtcbiAgICAgIHVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgY2FsbGJhY2sxKVxuICAgICAgdXNlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbGxiYWNrMilcbiAgICAgIHVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjazMpXG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cbiAgfVxuXG4gIHVzZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgY2FsbGJhY2sxKVxuICB1c2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2FsbGJhY2syKVxuXG4gIHVzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjazMpXG5cbiAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwb3B1cENvbnRhaW5lci5jbGFzc05hbWUgPSAncG9wdXBfX2NvbnRhaW5lcidcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ3BvcHVwX190aXRsZSdcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBiYXR0bGVzaGlwIGdhbWUnXG5cbiAgY29uc3QgYWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBhY3Rpb25UZXh0LmNsYXNzTmFtZSA9ICdwb3B1cF9fYWN0aW9uJ1xuICBhY3Rpb25UZXh0LnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgJ1xuXG4gIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIHNoaXBOYW1lLmNsYXNzTmFtZSA9ICdwb3B1cF9fc2hpcC1uYW1lJ1xuICBzaGlwTmFtZS50ZXh0Q29udGVudCA9ICdDYXJyaWVyJ1xuXG4gIGFjdGlvblRleHQuYXBwZW5kKHNoaXBOYW1lKVxuXG4gIHBvcHVwQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgYWN0aW9uVGV4dCwgZ3JpZFJvdGF0ZUJ0biwgdXNlcilcblxuICBwb3B1cC5hcHBlbmQocG9wdXBDb250YWluZXIpXG5cbiAgcmV0dXJuIHBvcHVwXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlcm9Qb3B1cFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tc2VxdWVuY2VzICovXG5pbXBvcnQgYmxhbmtBcmVhIGZyb20gJy4vYmxhbmtBcmVhJ1xuXG5jb25zdCBoaWdobGlnaHRBcmVhID0gKGV2ZW50LCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgcmV0dXJuXG4gIGNvbnN0IHBvcyA9IGV2ZW50LnRhcmdldC5pZFxuICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHBvcywgMTApXG4gIGlmICgocG9zaXRpb24gKyBzaGlwTGVuZ3RoIC0gMSkgJSAxMCA8IHNoaXBMZW5ndGggLSAxICYmIGlzSG9yaXpvbnRhbCkgcmV0dXJuXG4gIGlmICgocG9zaXRpb24gKyBzaGlwTGVuZ3RoICogMTApICUgMTAwIDwgc2hpcExlbmd0aCAqIDEwICYmICFpc0hvcml6b250YWwpXG4gICAgcmV0dXJuXG5cbiAgZm9yIChcbiAgICBsZXQgaSA9IHBvc2l0aW9uLCBqID0gMDtcbiAgICBpIDw9IHBvc2l0aW9uICsgc2hpcExlbmd0aCwgaiA8IHNoaXBMZW5ndGg7XG4gICAgaSArPSAxLCBqICs9IDFcbiAgKSB7XG4gICAgbGV0IG5vZGVcbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3VzZXItcHJldmlldyBkaXZbaWQ9XCIke2l9XCJdYClcbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygnYmxhY2stc2hpcCcpKSB7XG4gICAgICAgIGJsYW5rQXJlYShldmVudCwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1c2VyLXByZXZpZXcgZGl2W2lkPVwiJHtpICsgaiAqIDEwfVwiXWApXG4gICAgICBpIC09IDFcbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygnYmxhY2stc2hpcCcpKSB7XG4gICAgICAgIGJsYW5rQXJlYShldmVudCwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdncmVlbi1ob3ZlcicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGlnaGxpZ2h0QXJlYVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcydcblxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbnMnXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xuaW1wb3J0IHBvcHVwIGZyb20gJy4vaGVyb1BvcHVwJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnRcbiAgYm9keS5jbGFzc05hbWUgPSAncGFnZSdcblxuICBib2R5LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3RlciwgcG9wdXApXG59XG5cbkFwcCgpXG4iLCJpbXBvcnQgcGxheWdyb3VuZEdyaWQgZnJvbSAnLi9wbGF5Z3JvdW5kR3JpZCdcblxuaW1wb3J0IHBsYWNlQ29tcHV0ZXJTaGlwcyBmcm9tICcuL3BsYWNlQ29tcHV0ZXJTaGlwcydcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbidcblxuICBjb25zdCB1c2VyID0gcGxheWdyb3VuZEdyaWQoJ3VzZXInKVxuXG4gIGNvbnN0IGNvbXB1dGVyID0gcGxheWdyb3VuZEdyaWQoJ2NvbXB1dGVyJylcbiAgcGxhY2VDb21wdXRlclNoaXBzKGNvbXB1dGVyKVxuXG4gIG1haW4uYXBwZW5kKHVzZXIsIGNvbXB1dGVyKVxuICByZXR1cm4gbWFpblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb250aW51ZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc2VxdWVuY2VzICovXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBDbGFzcydcblxuY29uc3QgcGxhY2VDb21wdXRlclNoaXBzID0gKGNvbXB1dGVyKSA9PiB7XG4gIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCgnQ2FycmllcicsIDUpXG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCgnQmF0dGxlc2hpcCcsIDQpXG4gIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKCdEZXN0cm95ZXInLCAzKVxuICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgnU3VibWFyaW5lJywgMylcbiAgY29uc3QgcGF0cm9sQm9hdCA9IG5ldyBTaGlwKCdQYXRyb2wtYm9hdCcsIDIpXG5cbiAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcHNbaV1cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gY3VycmVudFNoaXBcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41XG5cbiAgICBjb25zdCByYW5kb21TdGFydEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgIGlmICgocmFuZG9tU3RhcnRJbmRleCArIGxlbmd0aCAtIDEpICUgMTAgPCBsZW5ndGggLSAxICYmIGlzSG9yaXpvbnRhbCkge1xuICAgICAgaSAtPSAxXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoKHJhbmRvbVN0YXJ0SW5kZXggKyBsZW5ndGggKiAxMCkgJSAxMDAgPCBsZW5ndGggKiAxMCAmJiAhaXNIb3Jpem9udGFsKSB7XG4gICAgICBpIC09IDFcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNvbXB1dGVyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBkaXZbaWQ9XCIke3JhbmRvbVN0YXJ0SW5kZXh9XCJdYClcbiAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucygnYmxhY2stc2hpcCcpXG4gICAgKSB7XG4gICAgICBpIC09IDFcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgZm9yIChcbiAgICAgIGxldCBqID0gcmFuZG9tU3RhcnRJbmRleCwgayA9IDA7XG4gICAgICBqIDw9IHJhbmRvbVN0YXJ0SW5kZXggKyBsZW5ndGgsIGsgPCBsZW5ndGg7XG4gICAgICBqICs9IDEsIGsgKz0gMVxuICAgICkge1xuICAgICAgbGV0IG5vZGVcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgbm9kZSA9IGNvbXB1dGVyLnF1ZXJ5U2VsZWN0b3IoYGRpdltpZD1cIiR7an1cIl1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IGNvbXB1dGVyLnF1ZXJ5U2VsZWN0b3IoYGRpdltpZD1cIiR7aiArIGsgKiAxMH1cIl1gKVxuICAgICAgICBqIC09IDFcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygnYmxhY2stc2hpcCcpKSB7XG4gICAgICAgIGkgLT0gMVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdibGFjay1zaGlwJywgY3VycmVudFNoaXAubmFtZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VDb21wdXRlclNoaXBzXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cbmNvbnN0IHBsYWNlU2hpcCA9IChldmVudCwgc2hpcHMsIHNoaXBJbmRleCkgPT4ge1xuICBjb25zb2xlLmxvZyhzaGlwSW5kZXgpXG4gIGNvbnN0IHNoaXAgPSBzaGlwc1tzaGlwSW5kZXhdXG4gIGlmIChzaGlwKSB7XG4gICAgY29uc3QgcG9zID0gZXZlbnQudGFyZ2V0LmlkXG4gICAgY29uc3QgeyBsZW5ndGgsIG5hbWUgfSA9IHNoaXBcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHBvcywgMTApXG4gICAgaWYgKChwb3NpdGlvbiArIGxlbmd0aCAtIDEpICUgMTAgPCBsZW5ndGggLSAxICYmIHdpbmRvdy5pc0hvcml6b250YWwpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBpZiAoKHBvc2l0aW9uICsgbGVuZ3RoICogMTApICUgMTAwIDwgbGVuZ3RoICogMTAgJiYgIXdpbmRvdy5pc0hvcml6b250YWwpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBmb3IgKFxuICAgICAgbGV0IGkgPSBwb3NpdGlvbiwgaiA9IDA7XG4gICAgICBpIDw9IHBvc2l0aW9uICsgbGVuZ3RoLCBqIDwgbGVuZ3RoO1xuICAgICAgaSArPSAxLCBqICs9IDFcbiAgICApIHtcbiAgICAgIGxldCBub2RlXG4gICAgICBsZXQgbmV3Tm9kZVxuICAgICAgaWYgKHdpbmRvdy5pc0hvcml6b250YWwpIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpXG4gICAgICAgIG5ld05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdXNlci1wcmV2aWV3IGRpdltpZD1cIiR7aX1cIl1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkgKyBqICogMTApXG4gICAgICAgIG5ld05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAjdXNlci1wcmV2aWV3IGRpdltpZD1cIiR7aSArIGogKiAxMH1cIl1gXG4gICAgICAgIClcbiAgICAgICAgaSAtPSAxXG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JsYWNrLXNoaXAnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4taG92ZXInKVxuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdibGFjay1zaGlwJywgbmFtZSlcbiAgICAgIG5ld05vZGUuY2xhc3NMaXN0LmFkZCgnYmxhY2stc2hpcCcpXG4gICAgfVxuICAgIGNvbnN0IGFjdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3NoaXAtbmFtZScpXG4gICAgaWYgKHNoaXBzW3NoaXBJbmRleCArIDFdKSB7XG4gICAgICBhY3Rpb25UZXh0LnRleHRDb250ZW50ID0gc2hpcHNbc2hpcEluZGV4ICsgMV0ubmFtZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGFjZVNoaXBcbiIsImNvbnN0IGNyZWF0ZUdyaWQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgZ3JpZC5jbGFzc05hbWUgPSAncGxheWdyb3VuZC1ncmlkJ1xuICBncmlkLmlkID0gcGxheWVyXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBibG9jay5jbGFzc05hbWUgPSAncGxheWdyb3VuZF9fYmxvY2snXG4gICAgYmxvY2suaWQgPSBpXG4gICAgZ3JpZC5hcHBlbmQoYmxvY2spXG4gIH1cblxuICByZXR1cm4gZ3JpZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHcmlkXG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgdGhpcy5kYW1hZ2UgPSAwXG4gICAgdGhpcy5pc1N1bmsgPSBmYWxzZVxuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuZGFtYWdlICs9IDFcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5kYW1hZ2UgPT09IHRoaXMubGVuZ3RoXG4gIH1cbn1cblxuY29uc3QgY2FycmllciA9IG5ldyBTaGlwKCdDYXJyaWVyJywgNSlcbmNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCgnQmF0dGxlc2hpcCcsIDQpXG5jb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgnRGVzdHJveWVyJywgMylcbmNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKCdTdWJtYXJpbmUnLCAzKVxuY29uc3QgcGF0cm9sQm9hdCA9IG5ldyBTaGlwKCdQYXRyb2wtYm9hdCcsIDIpXG5cbmV4cG9ydCBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcFxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUGVybWFuZW50TWFya2VyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZvbnRzL21hcmtlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJztcXG4gIHNyYzogdXJsKC4vUGVybWFuZW50TWFya2VyLVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vZm9udHMvbWFya2VyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLWhlYWRlci1oZWlnaHQ6IGNsYW1wKDE1MHB4LCAyMHZoLCA1MDBweCk7XFxufVxcblxcbi5wYWdlIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYsICMzYTdiZDUpO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDIwcHggMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uaGVhZGVyX190aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDcwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLnBsYXlncm91bmQtZ3JpZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm94LXNpemluZzogdW5zZXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5wbGF5Z3JvdW5kX19ibG9jayB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLnBsYXlncm91bmRfX2Jsb2NrOm50aC1vZi10eXBlKDEwbikge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3gtc2hhZG93OiAtMjBweCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmZvb3Rlcl9fbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5mb290ZXJfX2ljb24ge1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBvcHVwLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucG9wdXBfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogNTYwcHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3B1cF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcblxcbi5wb3B1cF9fYWN0aW9uIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnBvcHVwX19zaGlwLW5hbWUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcHVwX19yb3RhdGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBwYWRkaW5nOiAxLjVyZW0gMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwZDJmZiwgIzNhN2JkNSk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyZWVuLWhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5ibGFjay1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmVuZW15LWhpZGRlbi1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgLmZvb3Rlcl9fbGluazpob3ZlcixcXG4gIC5wb3B1cF9fcm90YXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgLnBsYXlncm91bmRfX2Jsb2NrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvREFBb0Q7RUFDcEQ7d0VBQ3NFO0FBQ3hFOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztFQUN4Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi4vZm9udHMvbWFya2VyLmNzcyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLWhlYWRlci1oZWlnaHQ6IGNsYW1wKDE1MHB4LCAyMHZoLCA1MDBweCk7XFxufVxcblxcbi5wYWdlIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYsICMzYTdiZDUpO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDIwcHggMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uaGVhZGVyX190aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDcwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLnBsYXlncm91bmQtZ3JpZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm94LXNpemluZzogdW5zZXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5wbGF5Z3JvdW5kX19ibG9jayB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLnBsYXlncm91bmRfX2Jsb2NrOm50aC1vZi10eXBlKDEwbikge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3gtc2hhZG93OiAtMjBweCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmZvb3Rlcl9fbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5mb290ZXJfX2ljb24ge1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBvcHVwLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucG9wdXBfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogNTYwcHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3B1cF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcblxcbi5wb3B1cF9fYWN0aW9uIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnBvcHVwX19zaGlwLW5hbWUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcHVwX19yb3RhdGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBwYWRkaW5nOiAxLjVyZW0gMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwZDJmZiwgIzNhN2JkNSk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyZWVuLWhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5ibGFjay1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmVuZW15LWhpZGRlbi1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgLmZvb3Rlcl9fbGluazpob3ZlcixcXG4gIC5wb3B1cF9fcm90YXRlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgLnBsYXlncm91bmRfX2Jsb2NrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJibGFua0FyZWEiLCJldmVudCIsInNoaXBMZW5ndGgiLCJpc0hvcml6b250YWwiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwicG9zIiwiaWQiLCJwb3NpdGlvbiIsInBhcnNlSW50IiwiaSIsImoiLCJub2RlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiSWNvbiIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb3B5cmlnaHQiLCJ0ZXh0Q29udGVudCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdpdGh1Ykljb24iLCJJbWFnZSIsInNyYyIsImFsdCIsImxpbmtUb0dpdGh1YiIsImhyZWYiLCJyZWwiLCJhcHBlbmQiLCJjcmVhdGVHcmlkUm90YXRlIiwiZ3JpZFJvdGF0ZUJ0biIsIndpbmRvdyIsInRvZ2dsZUF4aXMiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJwbGF5Z3JvdW5kR3JpZCIsImhpZ2hsaWdodEFyZWEiLCJwbGFjZVNoaXAiLCJzaGlwcyIsImNyZWF0ZUhlcm9Qb3B1cCIsInVzZXIiLCJwb3B1cCIsInNoaXBJbmRleCIsImNhbGxiYWNrMSIsImxlbmd0aCIsImNhbGxiYWNrMiIsImNhbGxiYWNrMyIsInJlc3VsdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGQiLCJwb3B1cENvbnRhaW5lciIsInRpdGxlIiwiYWN0aW9uVGV4dCIsInNoaXBOYW1lIiwiY29udGFpbnMiLCJtYWluIiwiQXBwIiwiX2RvY3VtZW50IiwiYm9keSIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsImNyZWF0ZU1haW4iLCJjb21wdXRlciIsIlNoaXAiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsInBhdHJvbEJvYXQiLCJjdXJyZW50U2hpcCIsIk1hdGgiLCJyYW5kb20iLCJyYW5kb21TdGFydEluZGV4IiwiZmxvb3IiLCJrIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzaGlwIiwibmV3Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlR3JpZCIsInBsYXllciIsImdyaWQiLCJibG9jayIsIl9jbGFzc0NhbGxDaGVjayIsImRhbWFnZSIsImlzU3VuayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaGl0Il0sInNvdXJjZVJvb3QiOiIifQ==