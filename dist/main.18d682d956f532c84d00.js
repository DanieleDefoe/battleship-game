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
  if ((position + shipLength * 10 - 10) % 100 < shipLength * 10 - 10 && !isHorizontal) return;
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

/***/ 394:
/*!****************************!*\
  !*** ./src/checkForWin.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resultPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resultPopup */ 632);

var checkForWin = function checkForWin() {
  if (window.userSunkShips.length === 5 && window.computerSunkShips.length === 5) {
    _resultPopup__WEBPACK_IMPORTED_MODULE_0__["default"].querySelector('.popup__result').textContent = 'it is a draw';
    _resultPopup__WEBPACK_IMPORTED_MODULE_0__["default"].classList.remove('hidden');
  } else if (window.userSunkShips.length === 5) {
    _resultPopup__WEBPACK_IMPORTED_MODULE_0__["default"].querySelector('.popup__result').textContent = 'you win!';
    _resultPopup__WEBPACK_IMPORTED_MODULE_0__["default"].classList.remove('hidden');
  } else if (window.computerSunkShips.length === 5) {
    _resultPopup__WEBPACK_IMPORTED_MODULE_0__["default"].querySelector('.popup__result').textContent = 'you lose...';
    _resultPopup__WEBPACK_IMPORTED_MODULE_0__["default"].classList.remove('hidden');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (checkForWin);

/***/ }),

/***/ 989:
/*!***************************!*\
  !*** ./src/computerGo.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipClass */ 453);

var computerGo = function computerGo() {
  var randomIndex = Math.floor(Math.random() * 100);
  var randomNode = document.querySelector("#user div[id=\"".concat(randomIndex, "\"]"));
  if (randomNode.classList.contains('hit-red') || randomNode.classList.contains('miss-gray')) {
    computerGo();
    return;
  }
  var className = randomNode.className;
  var shipNamesRegex = /Carrier|Battleship|Destroyer|Submarine|Patrol-boat/i;
  var matchName = className.match(shipNamesRegex);
  if (matchName) {
    randomNode.classList.add('hit-red');
    var shipsName = matchName[0];
    var currentShip = _shipClass__WEBPACK_IMPORTED_MODULE_0__.myShips.find(function (ship) {
      return ship.name === shipsName;
    });
    currentShip.hit();
    if (currentShip.isSunk()) window.computerSunkShips.push(currentShip);
  } else {
    randomNode.classList.add('miss-gray');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (computerGo);

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
  popup.className = 'popup hero-popup';
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
  if ((position + shipLength * 10 - 10) % 100 < shipLength * 10 - 10 && !isHorizontal) return;
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
/* harmony import */ var _resultPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resultPopup */ 632);
/* eslint-disable import/no-extraneous-dependencies */






var App = function App() {
  var _document = document,
    body = _document.body;
  body.className = 'page';
  body.append(_header__WEBPACK_IMPORTED_MODULE_1__["default"], _mains__WEBPACK_IMPORTED_MODULE_2__["default"], _footer__WEBPACK_IMPORTED_MODULE_3__["default"], _heroPopup__WEBPACK_IMPORTED_MODULE_4__["default"], _resultPopup__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
/* harmony import */ var _playGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playGame */ 156);



var createMain = function () {
  var main = document.createElement('main');
  main.className = 'main';
  var user = (0,_playgroundGrid__WEBPACK_IMPORTED_MODULE_0__["default"])('user');
  var computer = (0,_playgroundGrid__WEBPACK_IMPORTED_MODULE_0__["default"])('computer');
  window.userSunkShips = [];
  window.computerSunkShips = [];
  (0,_placeComputerShips__WEBPACK_IMPORTED_MODULE_1__["default"])(computer);
  computer.addEventListener('click', _playGame__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* eslint-disable no-continue */
/* eslint-disable no-sequences */

var computerShips = _toConsumableArray(_shipClass__WEBPACK_IMPORTED_MODULE_0__.ships);
var placeComputerShips = function placeComputerShips(computer) {
  if (computerShips.length > 0) {
    var randomStartIndex = Math.floor(Math.random() * 100);
    var currentShip = computerShips[0];
    var length = currentShip.length;
    var isHorizontal = Math.random() < 0.5;
    if ((randomStartIndex + length - 1) % 10 < length - 1 && isHorizontal) {
      placeComputerShips(computer);
      return;
    }
    if ((randomStartIndex + length * 10) % 100 < length * 10 && !isHorizontal) {
      placeComputerShips(computer);
      return;
    }
    var shipNodes = [];
    for (var i = randomStartIndex, j = 0; i <= randomStartIndex + length, j < length; i += 1, j += 1) {
      var node = void 0;
      if (isHorizontal) {
        node = computer.querySelector("div[id=\"".concat(i, "\"]"));
      } else {
        node = computer.querySelector("div[id=\"".concat(i + j * 10, "\"]"));
        i -= 1;
      }
      if (node.classList.contains('taken')) {
        placeComputerShips(computer);
        return;
      }
      shipNodes.push(node);
    }
    if (shipNodes.length === length) {
      for (var _i = 0; _i < shipNodes.length; _i += 1) {
        shipNodes[_i].classList.add('taken', currentShip.name);
      }
    }
    computerShips.shift();
    placeComputerShips(computer);
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
    if ((position + length * 10 - 10) % 100 < length * 10 - 10 && !window.isHorizontal) return false;
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

/***/ 156:
/*!*************************!*\
  !*** ./src/playGame.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipClass */ 453);
/* harmony import */ var _computerGo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerGo */ 989);
/* harmony import */ var _checkForWin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkForWin */ 394);



var playGame = function playGame(event) {
  var target = event.target;
  if (target === event.currentTarget) return;
  var className = target.className;
  if (target.classList.contains('hit-red') || target.classList.contains('miss-gray')) return;
  var shipNamesRegex = /Carrier|Battleship|Destroyer|Submarine|Patrol-boat/i;
  var matchName = className.match(shipNamesRegex);
  if (matchName) {
    var shipsName = matchName[0];
    target.classList.add('hit-red');
    var currentShip = _shipClass__WEBPACK_IMPORTED_MODULE_0__.ships.find(function (ship) {
      return ship.name === shipsName;
    });
    currentShip.hit();
    if (currentShip.isSunk()) window.userSunkShips.push(currentShip);
  } else {
    target.classList.add('miss-gray');
  }
  (0,_computerGo__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_checkForWin__WEBPACK_IMPORTED_MODULE_2__["default"])();
};
/* harmony default export */ __webpack_exports__["default"] = (playGame);

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

/***/ 716:
/*!****************************!*\
  !*** ./src/restartGame.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var restartGame = function restartGame() {
  window.location.reload();
};
/* harmony default export */ __webpack_exports__["default"] = (restartGame);

/***/ }),

/***/ 632:
/*!****************************!*\
  !*** ./src/resultPopup.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restartGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restartGame */ 716);

var createResultPopup = function () {
  var popup = document.createElement('div');
  popup.className = 'popup hidden result-popup';
  var popupContainer = document.createElement('section');
  popupContainer.className = 'popup__victory-section';
  var resultText = document.createElement('p');
  resultText.className = 'popup__result';
  resultText.textContent = 'you win!';
  var playAgainBtn = document.createElement('button');
  playAgainBtn.type = 'button';
  playAgainBtn.className = 'popup__play-again';
  playAgainBtn.textContent = 'play again';
  playAgainBtn.addEventListener('click', _restartGame__WEBPACK_IMPORTED_MODULE_0__["default"]);
  popupContainer.append(resultText, playAgainBtn);
  popup.append(popupContainer);
  return popup;
}();
/* harmony default export */ __webpack_exports__["default"] = (createResultPopup);

/***/ }),

/***/ 453:
/*!**************************!*\
  !*** ./src/shipClass.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myShips": function() { return /* binding */ myShips; },
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
var myCarrier = new Ship('Carrier', 5);
var myBattleship = new Ship('Battleship', 4);
var myDestroyer = new Ship('Destroyer', 3);
var mySubmarine = new Ship('Submarine', 3);
var myPatrolBoat = new Ship('Patrol-boat', 2);
var ships = [carrier, battleship, destroyer, submarine, patrolBoat];
var myShips = [myCarrier, myBattleship, myDestroyer, mySubmarine, myPatrolBoat];
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --header-height: clamp(150px, 20vh, 500px);\n}\n\n.page {\n  min-height: 100vh;\n  width: 100%;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n  height: var(--header-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 20px 0 20px 0 rgba(0, 0, 0, 0.5);\n}\n\n.header__title {\n  text-transform: uppercase;\n  font-size: 10rem;\n  text-align: center;\n}\n\n.main {\n  width: 100%;\n  height: calc(100vh - var(--header-height) - 70px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n.playground-grid {\n  width: 500px;\n  height: 500px;\n  box-sizing: unset;\n  display: flex;\n  flex-flow: row wrap;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block {\n  width: 50px;\n  height: 50px;\n  border-top: 2px solid rgba(0, 0, 0, 0.8);\n  border-left: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block:nth-of-type(10n) {\n  border-right: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.footer {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  box-shadow: -20px 0 20px 0 rgba(0, 0, 0, 0.5);\n  font-size: 2.5rem;\n  gap: 2rem;\n}\n\n.footer__link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s ease-in;\n}\n\n.footer__icon {\n  object-fit: contain;\n  width: 4rem;\n}\n\n.popup {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.popup.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.popup__container {\n  width: 560px;\n  height: 90%;\n  background: floralwhite;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.popup__title {\n  font-size: 3.5rem;\n}\n\n.popup__action {\n  font-size: 3rem;\n}\n\n.popup__ship-name {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.popup__rotate {\n  font-size: 3.5rem;\n  padding: 1.5rem 2.5rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: opacity 0.2s ease-in;\n  cursor: pointer;\n}\n\n.popup__victory-section {\n  background: #fff;\n  width: 100%;\n  max-width: 600px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2rem;\n  gap: 4rem;\n}\n\n.popup__result {\n  font-size: 6rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n}\n\n.popup__play-again {\n  padding: 1.5rem 3rem;\n  font-size: 4rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: all 0.2s ease-in;\n}\n\n.green-hover {\n  background: lightgreen;\n}\n\n.black-ship {\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.enemy-hidden-ship {\n  background: transparent;\n}\n\n.hit-red {\n  background-color: crimson;\n}\n\n.miss-gray {\n  background-color: gray;\n}\n\n@media (hover: hover) {\n  .footer__link:hover,\n  .popup__rotate:hover,\n  .popup__play-again:hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n\n  .playground__block:hover {\n    cursor: pointer;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,oDAAoD;EACpD;wEACsE;AACxE;;AAEA;EACE,6DAA6D;EAC7D,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,6CAA6C;EAC7C,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,oDAAoD;EACpD,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,6DAA6D;AAC/D;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,oDAAoD;EACpD,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;;;IAGE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["@import url(../fonts/marker.css);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --header-height: clamp(150px, 20vh, 500px);\n}\n\n.page {\n  min-height: 100vh;\n  width: 100%;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n  height: var(--header-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 20px 0 20px 0 rgba(0, 0, 0, 0.5);\n}\n\n.header__title {\n  text-transform: uppercase;\n  font-size: 10rem;\n  text-align: center;\n}\n\n.main {\n  width: 100%;\n  height: calc(100vh - var(--header-height) - 70px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n.playground-grid {\n  width: 500px;\n  height: 500px;\n  box-sizing: unset;\n  display: flex;\n  flex-flow: row wrap;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block {\n  width: 50px;\n  height: 50px;\n  border-top: 2px solid rgba(0, 0, 0, 0.8);\n  border-left: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block:nth-of-type(10n) {\n  border-right: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.footer {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  box-shadow: -20px 0 20px 0 rgba(0, 0, 0, 0.5);\n  font-size: 2.5rem;\n  gap: 2rem;\n}\n\n.footer__link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s ease-in;\n}\n\n.footer__icon {\n  object-fit: contain;\n  width: 4rem;\n}\n\n.popup {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.popup.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.popup__container {\n  width: 560px;\n  height: 90%;\n  background: floralwhite;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.popup__title {\n  font-size: 3.5rem;\n}\n\n.popup__action {\n  font-size: 3rem;\n}\n\n.popup__ship-name {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.popup__rotate {\n  font-size: 3.5rem;\n  padding: 1.5rem 2.5rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: opacity 0.2s ease-in;\n  cursor: pointer;\n}\n\n.popup__victory-section {\n  background: #fff;\n  width: 100%;\n  max-width: 600px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2rem;\n  gap: 4rem;\n}\n\n.popup__result {\n  font-size: 6rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n}\n\n.popup__play-again {\n  padding: 1.5rem 3rem;\n  font-size: 4rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: all 0.2s ease-in;\n}\n\n.green-hover {\n  background: lightgreen;\n}\n\n.black-ship {\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.enemy-hidden-ship {\n  background: transparent;\n}\n\n.hit-red {\n  background-color: crimson;\n}\n\n.miss-gray {\n  background-color: gray;\n}\n\n@media (hover: hover) {\n  .footer__link:hover,\n  .popup__rotate:hover,\n  .popup__play-again:hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n\n  .playground__block:hover {\n    cursor: pointer;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmxhbmtBcmVhLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2hlY2tGb3JXaW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlckdvLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZFJvdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlcm9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hpZ2hsaWdodEFyZWEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW5zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VDb21wdXRlclNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheUdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5Z3JvdW5kR3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Jlc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVzdWx0UG9wdXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mb250cy9tYXJrZXIuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cbmNvbnN0IGJsYW5rQXJlYSA9IChldmVudCwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVyblxuICBjb25zdCBwb3MgPSBldmVudC50YXJnZXQuaWRcbiAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludChwb3MsIDEwKVxuXG4gIGlmICgocG9zaXRpb24gKyBzaGlwTGVuZ3RoIC0gMSkgJSAxMCA8IHNoaXBMZW5ndGggLSAxICYmIGlzSG9yaXpvbnRhbCkgcmV0dXJuXG4gIGlmIChcbiAgICAocG9zaXRpb24gKyBzaGlwTGVuZ3RoICogMTAgLSAxMCkgJSAxMDAgPCBzaGlwTGVuZ3RoICogMTAgLSAxMCAmJlxuICAgICFpc0hvcml6b250YWxcbiAgKVxuICAgIHJldHVyblxuXG4gIGZvciAoXG4gICAgbGV0IGkgPSBwb3NpdGlvbiwgaiA9IDA7XG4gICAgaSA8PSBwb3NpdGlvbiArIHNoaXBMZW5ndGgsIGogPCBzaGlwTGVuZ3RoO1xuICAgIGkgKz0gMSwgaiArPSAxXG4gICkge1xuICAgIGxldCBub2RlXG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1c2VyLXByZXZpZXcgZGl2W2lkPVwiJHtpfVwiXWApXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdXNlci1wcmV2aWV3IGRpdltpZD1cIiR7aSArIGogKiAxMH1cIl1gKVxuICAgICAgaSAtPSAxXG4gICAgfVxuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4taG92ZXInKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJsYW5rQXJlYVxuIiwiaW1wb3J0IHJlc3VsdFBvcHVwIGZyb20gJy4vcmVzdWx0UG9wdXAnXG5cbmNvbnN0IGNoZWNrRm9yV2luID0gKCkgPT4ge1xuICBpZiAoXG4gICAgd2luZG93LnVzZXJTdW5rU2hpcHMubGVuZ3RoID09PSA1ICYmXG4gICAgd2luZG93LmNvbXB1dGVyU3Vua1NoaXBzLmxlbmd0aCA9PT0gNVxuICApIHtcbiAgICByZXN1bHRQb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Jlc3VsdCcpLnRleHRDb250ZW50ID0gJ2l0IGlzIGEgZHJhdydcbiAgICByZXN1bHRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9IGVsc2UgaWYgKHdpbmRvdy51c2VyU3Vua1NoaXBzLmxlbmd0aCA9PT0gNSkge1xuICAgIHJlc3VsdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fcmVzdWx0JykudGV4dENvbnRlbnQgPSAneW91IHdpbiEnXG4gICAgcmVzdWx0UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfSBlbHNlIGlmICh3aW5kb3cuY29tcHV0ZXJTdW5rU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgcmVzdWx0UG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19yZXN1bHQnKS50ZXh0Q29udGVudCA9ICd5b3UgbG9zZS4uLidcbiAgICByZXN1bHRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrRm9yV2luXG4iLCJpbXBvcnQgeyBteVNoaXBzIH0gZnJvbSAnLi9zaGlwQ2xhc3MnXG5cbmNvbnN0IGNvbXB1dGVyR28gPSAoKSA9PiB7XG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICBjb25zdCByYW5kb21Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3VzZXIgZGl2W2lkPVwiJHtyYW5kb21JbmRleH1cIl1gKVxuICBpZiAoXG4gICAgcmFuZG9tTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdC1yZWQnKSB8fFxuICAgIHJhbmRvbU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzLWdyYXknKVxuICApIHtcbiAgICBjb21wdXRlckdvKClcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcmFuZG9tTm9kZVxuICBjb25zdCBzaGlwTmFtZXNSZWdleCA9IC9DYXJyaWVyfEJhdHRsZXNoaXB8RGVzdHJveWVyfFN1Ym1hcmluZXxQYXRyb2wtYm9hdC9pXG4gIGNvbnN0IG1hdGNoTmFtZSA9IGNsYXNzTmFtZS5tYXRjaChzaGlwTmFtZXNSZWdleClcbiAgaWYgKG1hdGNoTmFtZSkge1xuICAgIHJhbmRvbU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0LXJlZCcpXG4gICAgY29uc3Qgc2hpcHNOYW1lID0gbWF0Y2hOYW1lWzBdXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBteVNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcHNOYW1lKVxuICAgIGN1cnJlbnRTaGlwLmhpdCgpXG4gICAgaWYgKGN1cnJlbnRTaGlwLmlzU3VuaygpKSB3aW5kb3cuY29tcHV0ZXJTdW5rU2hpcHMucHVzaChjdXJyZW50U2hpcClcbiAgfSBlbHNlIHtcbiAgICByYW5kb21Ob2RlLmNsYXNzTGlzdC5hZGQoJ21pc3MtZ3JheScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXJHb1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvZ2l0aHViLnN2ZydcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgZm9vdGVyLmNsYXNzTmFtZSA9ICdmb290ZXInXG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGNvcHlyaWdodC5jbGFzc05hbWUgPSAnZm9vdGVyX19jb3B5cmlnaHQnXG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEFidXphciBNYW1lZG92YFxuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBuZXcgSW1hZ2UoKVxuICBnaXRodWJJY29uLmNsYXNzTmFtZSA9ICdmb290ZXJfX2ljb24nXG4gIGdpdGh1Ykljb24uc3JjID0gSWNvblxuICBnaXRodWJJY29uLmFsdCA9ICdnaXRodWIgaWNvbidcblxuICBjb25zdCBsaW5rVG9HaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgbGlua1RvR2l0aHViLmNsYXNzTmFtZSA9ICdmb290ZXJfX2xpbmsnXG4gIGxpbmtUb0dpdGh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9EYW5pZWxlRGVmb2UnXG4gIGxpbmtUb0dpdGh1Yi5yZWwgPSAnbm9yZWZlcnJlciBub29wZW5lciBub2ZvbGxvdydcblxuICBsaW5rVG9HaXRodWIuYXBwZW5kKGdpdGh1Ykljb24pXG5cbiAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQsIGxpbmtUb0dpdGh1YilcblxuICByZXR1cm4gZm9vdGVyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlclxuIiwiY29uc3QgY3JlYXRlR3JpZFJvdGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGdyaWRSb3RhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBncmlkUm90YXRlQnRuLmNsYXNzTmFtZSA9ICdwb3B1cF9fcm90YXRlJ1xuICBncmlkUm90YXRlQnRuLnRleHRDb250ZW50ID0gJ1JvdGF0ZSdcblxuICB3aW5kb3cuaXNIb3Jpem9udGFsID0gdHJ1ZVxuXG4gIGNvbnN0IHRvZ2dsZUF4aXMgPSAoKSA9PiB7XG4gICAgd2luZG93LmlzSG9yaXpvbnRhbCA9ICF3aW5kb3cuaXNIb3Jpem9udGFsXG4gIH1cblxuICBncmlkUm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQXhpcylcblxuICByZXR1cm4gZ3JpZFJvdGF0ZUJ0blxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHcmlkUm90YXRlXG4iLCJjb25zdCBjcmVhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcidcblxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgaGVhZGVyVGl0bGUuY2xhc3NOYW1lID0gJ2hlYWRlcl9fdGl0bGUnXG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ2JhdHRsZXNoaXAnXG5cbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZSlcblxuICByZXR1cm4gaGVhZGVyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlclxuIiwiaW1wb3J0IHBsYXlncm91bmRHcmlkIGZyb20gJy4vcGxheWdyb3VuZEdyaWQnXG5cbmltcG9ydCBoaWdobGlnaHRBcmVhIGZyb20gJy4vaGlnaGxpZ2h0QXJlYSdcbmltcG9ydCBibGFua0FyZWEgZnJvbSAnLi9ibGFua0FyZWEnXG5cbmltcG9ydCBwbGFjZVNoaXAgZnJvbSAnLi9wbGFjZVNoaXAnXG5cbmltcG9ydCBncmlkUm90YXRlQnRuIGZyb20gJy4vZ3JpZFJvdGF0ZSdcblxuaW1wb3J0IHsgc2hpcHMgfSBmcm9tICcuL3NoaXBDbGFzcydcblxuY29uc3QgY3JlYXRlSGVyb1BvcHVwID0gKCgpID0+IHtcbiAgY29uc3QgdXNlciA9IHBsYXlncm91bmRHcmlkKCd1c2VyLXByZXZpZXcnKVxuXG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIHBvcHVwLmNsYXNzTmFtZSA9ICdwb3B1cCBoZXJvLXBvcHVwJ1xuXG4gIGxldCBzaGlwSW5kZXggPSAwXG5cbiAgY29uc3QgY2FsbGJhY2sxID0gKGV2ZW50KSA9PlxuICAgIGhpZ2hsaWdodEFyZWEoZXZlbnQsIHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoLCB3aW5kb3cuaXNIb3Jpem9udGFsKVxuXG4gIGNvbnN0IGNhbGxiYWNrMiA9IChldmVudCkgPT5cbiAgICBibGFua0FyZWEoZXZlbnQsIHNoaXBzW3NoaXBJbmRleF0ubGVuZ3RoLCB3aW5kb3cuaXNIb3Jpem9udGFsKVxuXG4gIGNvbnN0IGNhbGxiYWNrMyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBsYWNlU2hpcChldmVudCwgc2hpcHMsIHNoaXBJbmRleClcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzaGlwSW5kZXggKz0gMVxuICAgIH1cbiAgICBpZiAoc2hpcEluZGV4ID09PSBzaGlwcy5sZW5ndGgpIHtcbiAgICAgIHVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgY2FsbGJhY2sxKVxuICAgICAgdXNlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbGxiYWNrMilcbiAgICAgIHVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjazMpXG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cbiAgfVxuXG4gIHVzZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgY2FsbGJhY2sxKVxuICB1c2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2FsbGJhY2syKVxuXG4gIHVzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjazMpXG5cbiAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwb3B1cENvbnRhaW5lci5jbGFzc05hbWUgPSAncG9wdXBfX2NvbnRhaW5lcidcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ3BvcHVwX190aXRsZSdcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBiYXR0bGVzaGlwIGdhbWUnXG5cbiAgY29uc3QgYWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBhY3Rpb25UZXh0LmNsYXNzTmFtZSA9ICdwb3B1cF9fYWN0aW9uJ1xuICBhY3Rpb25UZXh0LnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgJ1xuXG4gIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIHNoaXBOYW1lLmNsYXNzTmFtZSA9ICdwb3B1cF9fc2hpcC1uYW1lJ1xuICBzaGlwTmFtZS50ZXh0Q29udGVudCA9ICdDYXJyaWVyJ1xuXG4gIGFjdGlvblRleHQuYXBwZW5kKHNoaXBOYW1lKVxuXG4gIHBvcHVwQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgYWN0aW9uVGV4dCwgZ3JpZFJvdGF0ZUJ0biwgdXNlcilcblxuICBwb3B1cC5hcHBlbmQocG9wdXBDb250YWluZXIpXG5cbiAgcmV0dXJuIHBvcHVwXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlcm9Qb3B1cFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tc2VxdWVuY2VzICovXG5pbXBvcnQgYmxhbmtBcmVhIGZyb20gJy4vYmxhbmtBcmVhJ1xuXG5jb25zdCBoaWdobGlnaHRBcmVhID0gKGV2ZW50LCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgcmV0dXJuXG4gIGNvbnN0IHBvcyA9IGV2ZW50LnRhcmdldC5pZFxuICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHBvcywgMTApXG4gIGlmICgocG9zaXRpb24gKyBzaGlwTGVuZ3RoIC0gMSkgJSAxMCA8IHNoaXBMZW5ndGggLSAxICYmIGlzSG9yaXpvbnRhbCkgcmV0dXJuXG4gIGlmIChcbiAgICAocG9zaXRpb24gKyBzaGlwTGVuZ3RoICogMTAgLSAxMCkgJSAxMDAgPCBzaGlwTGVuZ3RoICogMTAgLSAxMCAmJlxuICAgICFpc0hvcml6b250YWxcbiAgKVxuICAgIHJldHVyblxuXG4gIGZvciAoXG4gICAgbGV0IGkgPSBwb3NpdGlvbiwgaiA9IDA7XG4gICAgaSA8PSBwb3NpdGlvbiArIHNoaXBMZW5ndGgsIGogPCBzaGlwTGVuZ3RoO1xuICAgIGkgKz0gMSwgaiArPSAxXG4gICkge1xuICAgIGxldCBub2RlXG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1c2VyLXByZXZpZXcgZGl2W2lkPVwiJHtpfVwiXWApXG4gICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JsYWNrLXNoaXAnKSkge1xuICAgICAgICBibGFua0FyZWEoZXZlbnQsIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdXNlci1wcmV2aWV3IGRpdltpZD1cIiR7aSArIGogKiAxMH1cIl1gKVxuICAgICAgaSAtPSAxXG4gICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JsYWNrLXNoaXAnKSkge1xuICAgICAgICBibGFua0FyZWEoZXZlbnQsIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnZ3JlZW4taG92ZXInKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhpZ2hsaWdodEFyZWFcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW5zJ1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3RlcidcbmltcG9ydCBwb3B1cCBmcm9tICcuL2hlcm9Qb3B1cCdcbmltcG9ydCByZXN1bHRQb3B1cCBmcm9tICcuL3Jlc3VsdFBvcHVwJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnRcbiAgYm9keS5jbGFzc05hbWUgPSAncGFnZSdcblxuICBib2R5LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3RlciwgcG9wdXAsIHJlc3VsdFBvcHVwKVxufVxuXG5BcHAoKVxuIiwiaW1wb3J0IHBsYXlncm91bmRHcmlkIGZyb20gJy4vcGxheWdyb3VuZEdyaWQnXG5cbmltcG9ydCBwbGFjZUNvbXB1dGVyU2hpcHMgZnJvbSAnLi9wbGFjZUNvbXB1dGVyU2hpcHMnXG5cbmltcG9ydCBwbGF5R2FtZSBmcm9tICcuL3BsYXlHYW1lJ1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJ1xuXG4gIGNvbnN0IHVzZXIgPSBwbGF5Z3JvdW5kR3JpZCgndXNlcicpXG5cbiAgY29uc3QgY29tcHV0ZXIgPSBwbGF5Z3JvdW5kR3JpZCgnY29tcHV0ZXInKVxuXG4gIHdpbmRvdy51c2VyU3Vua1NoaXBzID0gW11cbiAgd2luZG93LmNvbXB1dGVyU3Vua1NoaXBzID0gW11cblxuICBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpXG4gIGNvbXB1dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUdhbWUpXG5cbiAgbWFpbi5hcHBlbmQodXNlciwgY29tcHV0ZXIpXG4gIHJldHVybiBtYWluXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cbmltcG9ydCB7IHNoaXBzIH0gZnJvbSAnLi9zaGlwQ2xhc3MnXG5cbmNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbLi4uc2hpcHNdXG5cbmNvbnN0IHBsYWNlQ29tcHV0ZXJTaGlwcyA9IChjb21wdXRlcikgPT4ge1xuICBpZiAoY29tcHV0ZXJTaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmFuZG9tU3RhcnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IGNvbXB1dGVyU2hpcHNbMF1cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gY3VycmVudFNoaXBcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41XG4gICAgaWYgKChyYW5kb21TdGFydEluZGV4ICsgbGVuZ3RoIC0gMSkgJSAxMCA8IGxlbmd0aCAtIDEgJiYgaXNIb3Jpem9udGFsKSB7XG4gICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKChyYW5kb21TdGFydEluZGV4ICsgbGVuZ3RoICogMTApICUgMTAwIDwgbGVuZ3RoICogMTAgJiYgIWlzSG9yaXpvbnRhbCkge1xuICAgICAgcGxhY2VDb21wdXRlclNoaXBzKGNvbXB1dGVyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcE5vZGVzID0gW11cblxuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IHJhbmRvbVN0YXJ0SW5kZXgsIGogPSAwO1xuICAgICAgaSA8PSByYW5kb21TdGFydEluZGV4ICsgbGVuZ3RoLCBqIDwgbGVuZ3RoO1xuICAgICAgaSArPSAxLCBqICs9IDFcbiAgICApIHtcbiAgICAgIGxldCBub2RlXG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIG5vZGUgPSBjb21wdXRlci5xdWVyeVNlbGVjdG9yKGBkaXZbaWQ9XCIke2l9XCJdYClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBjb21wdXRlci5xdWVyeVNlbGVjdG9yKGBkaXZbaWQ9XCIke2kgKyBqICogMTB9XCJdYClcbiAgICAgICAgaSAtPSAxXG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygndGFrZW4nKSkge1xuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2hpcE5vZGVzLnB1c2gobm9kZSlcbiAgICB9XG5cbiAgICBpZiAoc2hpcE5vZGVzLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBOb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzaGlwTm9kZXNbaV0uY2xhc3NMaXN0LmFkZCgndGFrZW4nLCBjdXJyZW50U2hpcC5uYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVyU2hpcHMuc2hpZnQoKVxuICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyhjb21wdXRlcilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGFjZUNvbXB1dGVyU2hpcHNcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXNlcXVlbmNlcyAqL1xuY29uc3QgcGxhY2VTaGlwID0gKGV2ZW50LCBzaGlwcywgc2hpcEluZGV4KSA9PiB7XG4gIGNvbnNvbGUubG9nKHNoaXBJbmRleClcbiAgY29uc3Qgc2hpcCA9IHNoaXBzW3NoaXBJbmRleF1cbiAgaWYgKHNoaXApIHtcbiAgICBjb25zdCBwb3MgPSBldmVudC50YXJnZXQuaWRcbiAgICBjb25zdCB7IGxlbmd0aCwgbmFtZSB9ID0gc2hpcFxuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQocG9zLCAxMClcbiAgICBpZiAoKHBvc2l0aW9uICsgbGVuZ3RoIC0gMSkgJSAxMCA8IGxlbmd0aCAtIDEgJiYgd2luZG93LmlzSG9yaXpvbnRhbClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGlmIChcbiAgICAgIChwb3NpdGlvbiArIGxlbmd0aCAqIDEwIC0gMTApICUgMTAwIDwgbGVuZ3RoICogMTAgLSAxMCAmJlxuICAgICAgIXdpbmRvdy5pc0hvcml6b250YWxcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBmb3IgKFxuICAgICAgbGV0IGkgPSBwb3NpdGlvbiwgaiA9IDA7XG4gICAgICBpIDw9IHBvc2l0aW9uICsgbGVuZ3RoLCBqIDwgbGVuZ3RoO1xuICAgICAgaSArPSAxLCBqICs9IDFcbiAgICApIHtcbiAgICAgIGxldCBub2RlXG4gICAgICBsZXQgbmV3Tm9kZVxuICAgICAgaWYgKHdpbmRvdy5pc0hvcml6b250YWwpIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpXG4gICAgICAgIG5ld05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdXNlci1wcmV2aWV3IGRpdltpZD1cIiR7aX1cIl1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkgKyBqICogMTApXG4gICAgICAgIG5ld05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAjdXNlci1wcmV2aWV3IGRpdltpZD1cIiR7aSArIGogKiAxMH1cIl1gXG4gICAgICAgIClcbiAgICAgICAgaSAtPSAxXG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JsYWNrLXNoaXAnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4taG92ZXInKVxuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdibGFjay1zaGlwJywgbmFtZSlcbiAgICAgIG5ld05vZGUuY2xhc3NMaXN0LmFkZCgnYmxhY2stc2hpcCcpXG4gICAgfVxuICAgIGNvbnN0IGFjdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3NoaXAtbmFtZScpXG4gICAgaWYgKHNoaXBzW3NoaXBJbmRleCArIDFdKSB7XG4gICAgICBhY3Rpb25UZXh0LnRleHRDb250ZW50ID0gc2hpcHNbc2hpcEluZGV4ICsgMV0ubmFtZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGFjZVNoaXBcbiIsImltcG9ydCB7IHNoaXBzIH0gZnJvbSAnLi9zaGlwQ2xhc3MnXG5cbmltcG9ydCBjb21wdXRlckdvIGZyb20gJy4vY29tcHV0ZXJHbydcbmltcG9ydCBjaGVja0ZvcldpbiBmcm9tICcuL2NoZWNrRm9yV2luJ1xuXG5jb25zdCBwbGF5R2FtZSA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcbiAgaWYgKHRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgcmV0dXJuXG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0YXJnZXRcbiAgaWYgKFxuICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdC1yZWQnKSB8fFxuICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MtZ3JheScpXG4gIClcbiAgICByZXR1cm5cbiAgY29uc3Qgc2hpcE5hbWVzUmVnZXggPSAvQ2FycmllcnxCYXR0bGVzaGlwfERlc3Ryb3llcnxTdWJtYXJpbmV8UGF0cm9sLWJvYXQvaVxuICBjb25zdCBtYXRjaE5hbWUgPSBjbGFzc05hbWUubWF0Y2goc2hpcE5hbWVzUmVnZXgpXG4gIGlmIChtYXRjaE5hbWUpIHtcbiAgICBjb25zdCBzaGlwc05hbWUgPSBtYXRjaE5hbWVbMF1cbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGl0LXJlZCcpXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IHNoaXBzTmFtZSlcbiAgICBjdXJyZW50U2hpcC5oaXQoKVxuICAgIGlmIChjdXJyZW50U2hpcC5pc1N1bmsoKSkgd2luZG93LnVzZXJTdW5rU2hpcHMucHVzaChjdXJyZW50U2hpcClcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWlzcy1ncmF5JylcbiAgfVxuICBjb21wdXRlckdvKClcbiAgY2hlY2tGb3JXaW4oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5R2FtZVxuIiwiY29uc3QgY3JlYXRlR3JpZCA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICBncmlkLmNsYXNzTmFtZSA9ICdwbGF5Z3JvdW5kLWdyaWQnXG4gIGdyaWQuaWQgPSBwbGF5ZXJcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJsb2NrLmNsYXNzTmFtZSA9ICdwbGF5Z3JvdW5kX19ibG9jaydcbiAgICBibG9jay5pZCA9IGlcbiAgICBncmlkLmFwcGVuZChibG9jaylcbiAgfVxuXG4gIHJldHVybiBncmlkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdyaWRcbiIsImNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzdGFydEdhbWVcbiIsImltcG9ydCByZXN0YXJ0R2FtZSBmcm9tICcuL3Jlc3RhcnRHYW1lJ1xuXG5jb25zdCBjcmVhdGVSZXN1bHRQb3B1cCA9ICgoKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcG9wdXAuY2xhc3NOYW1lID0gJ3BvcHVwIGhpZGRlbiByZXN1bHQtcG9wdXAnXG5cbiAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgcG9wdXBDb250YWluZXIuY2xhc3NOYW1lID0gJ3BvcHVwX192aWN0b3J5LXNlY3Rpb24nXG5cbiAgY29uc3QgcmVzdWx0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICByZXN1bHRUZXh0LmNsYXNzTmFtZSA9ICdwb3B1cF9fcmVzdWx0J1xuICByZXN1bHRUZXh0LnRleHRDb250ZW50ID0gJ3lvdSB3aW4hJ1xuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHBsYXlBZ2FpbkJ0bi50eXBlID0gJ2J1dHRvbidcbiAgcGxheUFnYWluQnRuLmNsYXNzTmFtZSA9ICdwb3B1cF9fcGxheS1hZ2FpbidcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ3BsYXkgYWdhaW4nXG5cbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEdhbWUpXG5cbiAgcG9wdXBDb250YWluZXIuYXBwZW5kKHJlc3VsdFRleHQsIHBsYXlBZ2FpbkJ0bilcblxuICBwb3B1cC5hcHBlbmQocG9wdXBDb250YWluZXIpXG5cbiAgcmV0dXJuIHBvcHVwXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlc3VsdFBvcHVwXG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgdGhpcy5kYW1hZ2UgPSAwXG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5kYW1hZ2UgKz0gMVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmRhbWFnZSA9PT0gdGhpcy5sZW5ndGhcbiAgfVxufVxuXG5jb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoJ0NhcnJpZXInLCA1KVxuY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKCdCYXR0bGVzaGlwJywgNClcbmNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKCdEZXN0cm95ZXInLCAzKVxuY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoJ1N1Ym1hcmluZScsIDMpXG5jb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoJ1BhdHJvbC1ib2F0JywgMilcblxuY29uc3QgbXlDYXJyaWVyID0gbmV3IFNoaXAoJ0NhcnJpZXInLCA1KVxuY29uc3QgbXlCYXR0bGVzaGlwID0gbmV3IFNoaXAoJ0JhdHRsZXNoaXAnLCA0KVxuY29uc3QgbXlEZXN0cm95ZXIgPSBuZXcgU2hpcCgnRGVzdHJveWVyJywgMylcbmNvbnN0IG15U3VibWFyaW5lID0gbmV3IFNoaXAoJ1N1Ym1hcmluZScsIDMpXG5jb25zdCBteVBhdHJvbEJvYXQgPSBuZXcgU2hpcCgnUGF0cm9sLWJvYXQnLCAyKVxuXG5leHBvcnQgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdXG5leHBvcnQgY29uc3QgbXlTaGlwcyA9IFtcbiAgbXlDYXJyaWVyLFxuICBteUJhdHRsZXNoaXAsXG4gIG15RGVzdHJveWVyLFxuICBteVN1Ym1hcmluZSxcbiAgbXlQYXRyb2xCb2F0LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9QZXJtYW5lbnRNYXJrZXItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9udHMvbWFya2VyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUErQjtFQUMvQiw0Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInO1xcbiAgc3JjOiB1cmwoLi9QZXJtYW5lbnRNYXJrZXItUmVndWxhci50dGYpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9mb250cy9tYXJrZXIuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC0taGVhZGVyLWhlaWdodDogY2xhbXAoMTUwcHgsIDIwdmgsIDUwMHB4KTtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwZDJmZiwgIzNhN2JkNSk7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMjBweCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEwcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gNzBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4ucGxheWdyb3VuZC1ncmlkIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLnBsYXlncm91bmRfX2Jsb2NrIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ucGxheWdyb3VuZF9fYmxvY2s6bnRoLW9mLXR5cGUoMTBuKSB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJveC1zaGFkb3c6IC0yMHB4IDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZm9vdGVyX19saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcXG59XFxuXFxuLmZvb3Rlcl9faWNvbiB7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucG9wdXAuaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wb3B1cF9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1NjBweDtcXG4gIGhlaWdodDogOTAlO1xcbiAgYmFja2dyb3VuZDogZmxvcmFsd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBvcHVwX190aXRsZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG59XFxuXFxuLnBvcHVwX19hY3Rpb24ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ucG9wdXBfX3NoaXAtbmFtZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wdXBfX3JvdGF0ZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIHBhZGRpbmc6IDEuNXJlbSAyLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBkMmZmLCAjM2E3YmQ1KTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXBfX3ZpY3Rvcnktc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGdhcDogNHJlbTtcXG59XFxuXFxuLnBvcHVwX19yZXN1bHQge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnBvcHVwX19wbGF5LWFnYWluIHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwZDJmZiwgIzNhN2JkNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbn1cXG5cXG4uZ3JlZW4taG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuXFxuLmJsYWNrLXNoaXAge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uZW5lbXktaGlkZGVuLXNoaXAge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5oaXQtcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5taXNzLWdyYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIC5mb290ZXJfX2xpbms6aG92ZXIsXFxuICAucG9wdXBfX3JvdGF0ZTpob3ZlcixcXG4gIC5wb3B1cF9fcGxheS1hZ2Fpbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgLnBsYXlncm91bmRfX2Jsb2NrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvREFBb0Q7RUFDcEQ7d0VBQ3NFO0FBQ3hFOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztFQUN4Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0RBQW9EO0VBQ3BELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFOzs7SUFHRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC4uL2ZvbnRzL21hcmtlci5jc3MpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBjbGFtcCgxNTBweCwgMjB2aCwgNTAwcHgpO1xcbn1cXG5cXG4ucGFnZSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBkMmZmLCAjM2E3YmQ1KTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAyMHB4IDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSA3MHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi5wbGF5Z3JvdW5kLWdyaWQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ucGxheWdyb3VuZF9fYmxvY2sge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5wbGF5Z3JvdW5kX19ibG9jazpudGgtb2YtdHlwZSgxMG4pIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm94LXNoYWRvdzogLTIwcHggMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5mb290ZXJfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xcbn1cXG5cXG4uZm9vdGVyX19pY29uIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICB3aWR0aDogNHJlbTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wb3B1cC5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnBvcHVwX19jb250YWluZXIge1xcbiAgd2lkdGg6IDU2MHB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBiYWNrZ3JvdW5kOiBmbG9yYWx3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucG9wdXBfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbn1cXG5cXG4ucG9wdXBfX2FjdGlvbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5wb3B1cF9fc2hpcC1uYW1lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3B1cF9fcm90YXRlIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgcGFkZGluZzogMS41cmVtIDIuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYsICMzYTdiZDUpO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cF9fdmljdG9yeS1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4ucG9wdXBfX3Jlc3VsdCB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucG9wdXBfX3BsYXktYWdhaW4ge1xcbiAgcGFkZGluZzogMS41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBkMmZmLCAjM2E3YmQ1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5ncmVlbi1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYmxhY2stc2hpcCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5lbmVteS1oaWRkZW4tc2hpcCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmhpdC1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLm1pc3MtZ3JheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgLmZvb3Rlcl9fbGluazpob3ZlcixcXG4gIC5wb3B1cF9fcm90YXRlOmhvdmVyLFxcbiAgLnBvcHVwX19wbGF5LWFnYWluOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAucGxheWdyb3VuZF9fYmxvY2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImJsYW5rQXJlYSIsImV2ZW50Iiwic2hpcExlbmd0aCIsImlzSG9yaXpvbnRhbCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJwb3MiLCJpZCIsInBvc2l0aW9uIiwicGFyc2VJbnQiLCJpIiwiaiIsIm5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZXN1bHRQb3B1cCIsImNoZWNrRm9yV2luIiwid2luZG93IiwidXNlclN1bmtTaGlwcyIsImxlbmd0aCIsImNvbXB1dGVyU3Vua1NoaXBzIiwidGV4dENvbnRlbnQiLCJteVNoaXBzIiwiY29tcHV0ZXJHbyIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tTm9kZSIsImNvbnRhaW5zIiwiY2xhc3NOYW1lIiwic2hpcE5hbWVzUmVnZXgiLCJtYXRjaE5hbWUiLCJtYXRjaCIsImFkZCIsInNoaXBzTmFtZSIsImN1cnJlbnRTaGlwIiwiZmluZCIsInNoaXAiLCJuYW1lIiwiaGl0IiwiaXNTdW5rIiwicHVzaCIsIkljb24iLCJjcmVhdGVGb290ZXIiLCJmb290ZXIiLCJjcmVhdGVFbGVtZW50IiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2l0aHViSWNvbiIsIkltYWdlIiwic3JjIiwiYWx0IiwibGlua1RvR2l0aHViIiwiaHJlZiIsInJlbCIsImFwcGVuZCIsImNyZWF0ZUdyaWRSb3RhdGUiLCJncmlkUm90YXRlQnRuIiwidG9nZ2xlQXhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSIsInBsYXlncm91bmRHcmlkIiwiaGlnaGxpZ2h0QXJlYSIsInBsYWNlU2hpcCIsInNoaXBzIiwiY3JlYXRlSGVyb1BvcHVwIiwidXNlciIsInBvcHVwIiwic2hpcEluZGV4IiwiY2FsbGJhY2sxIiwiY2FsbGJhY2syIiwiY2FsbGJhY2szIiwicmVzdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBvcHVwQ29udGFpbmVyIiwidGl0bGUiLCJhY3Rpb25UZXh0Iiwic2hpcE5hbWUiLCJtYWluIiwiQXBwIiwiX2RvY3VtZW50IiwiYm9keSIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsInBsYXlHYW1lIiwiY3JlYXRlTWFpbiIsImNvbXB1dGVyIiwiY29tcHV0ZXJTaGlwcyIsIl90b0NvbnN1bWFibGVBcnJheSIsInJhbmRvbVN0YXJ0SW5kZXgiLCJzaGlwTm9kZXMiLCJzaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJuZXdOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVHcmlkIiwicGxheWVyIiwiZ3JpZCIsImJsb2NrIiwicmVzdGFydEdhbWUiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNyZWF0ZVJlc3VsdFBvcHVwIiwicmVzdWx0VGV4dCIsInBsYXlBZ2FpbkJ0biIsInR5cGUiLCJTaGlwIiwiX2NsYXNzQ2FsbENoZWNrIiwiZGFtYWdlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsInBhdHJvbEJvYXQiLCJteUNhcnJpZXIiLCJteUJhdHRsZXNoaXAiLCJteURlc3Ryb3llciIsIm15U3VibWFyaW5lIiwibXlQYXRyb2xCb2F0Il0sInNvdXJjZVJvb3QiOiIifQ==