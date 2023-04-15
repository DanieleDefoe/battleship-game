'use strict'
;(self['webpackChunkbattleship'] = self['webpackChunkbattleship'] || []).push([
  ['main'],
  {
    /***/ 514:
      /*!**************************!*\
  !*** ./src/blankArea.js ***!
  \**************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* eslint-disable no-sequences */
        var blankArea = function blankArea(event, shipLength, isHorizontal) {
          if (event.target === event.currentTarget) return
          var pos = event.target.id
          var position = parseInt(pos, 10)
          if ((position + shipLength - 1) % 10 < shipLength - 1 && isHorizontal)
            return
          if (
            (position + shipLength * 10) % 100 < shipLength * 10 &&
            !isHorizontal
          )
            return
          for (
            var i = position, j = 0;
            i <= position + shipLength, j < shipLength;
            i += 1, j += 1
          ) {
            var node = void 0
            if (isHorizontal) {
              node = document.querySelector(
                '#user-preview div[id="'.concat(i, '"]')
              )
            } else {
              node = document.querySelector(
                '#user-preview div[id="'.concat(i + j * 10, '"]')
              )
              i -= 1
            }
            node.classList.remove('green-hover')
          }
        }
        /* harmony default export */ __webpack_exports__['default'] = blankArea

        /***/
      },

    /***/ 394:
      /*!****************************!*\
  !*** ./src/checkForWin.js ***!
  \****************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _resultPopup__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./resultPopup */ 632)

        var checkForWin = function checkForWin() {
          if (
            window.userSunkShips.length === 5 &&
            window.computerSunkShips.length === 5
          ) {
            _resultPopup__WEBPACK_IMPORTED_MODULE_0__['default'].querySelector(
              '.popup__result'
            ).textContent = 'it is a draw'
            _resultPopup__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ].classList.remove('hidden')
          } else if (window.userSunkShips.length === 5) {
            _resultPopup__WEBPACK_IMPORTED_MODULE_0__['default'].querySelector(
              '.popup__result'
            ).textContent = 'you win!'
            _resultPopup__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ].classList.remove('hidden')
          } else if (window.computerSunkShips.length === 5) {
            _resultPopup__WEBPACK_IMPORTED_MODULE_0__['default'].querySelector(
              '.popup__result'
            ).textContent = 'you lose...'
            _resultPopup__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ].classList.remove('hidden')
          }
        }
        /* harmony default export */ __webpack_exports__['default'] =
          checkForWin

        /***/
      },

    /***/ 989:
      /*!***************************!*\
  !*** ./src/computerGo.js ***!
  \***************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./shipClass */ 453)

        var computerGo = function computerGo() {
          var randomIndex = Math.floor(Math.random() * 100)
          var randomNode = document.querySelector(
            '#user div[id="'.concat(randomIndex, '"]')
          )
          if (
            randomNode.classList.contains('hit-red') ||
            randomNode.classList.contains('miss-gray')
          ) {
            computerGo()
            return
          }
          var className = randomNode.className
          var shipNamesRegex =
            /Carrier|Battleship|Destroyer|Submarine|Patrol-boat/i
          var matchName = className.match(shipNamesRegex)
          if (matchName) {
            randomNode.classList.add('hit-red')
            var shipsName = matchName[0]
            var currentShip =
              _shipClass__WEBPACK_IMPORTED_MODULE_0__.myShips.find(function (
                ship
              ) {
                return ship.name === shipsName
              })
            currentShip.hit()
            if (currentShip.isSunk()) window.computerSunkShips.push(currentShip)
          } else {
            randomNode.classList.add('miss-gray')
          }
        }
        /* harmony default export */ __webpack_exports__['default'] = computerGo

        /***/
      },

    /***/ 755:
      /*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./images/github.svg */ 926)

        var createFooter = (function () {
          var footer = document.createElement('footer')
          footer.className = 'footer'
          var copyright = document.createElement('p')
          copyright.className = 'footer__copyright'
          copyright.textContent = 'Copyright \xA9 '.concat(
            new Date().getFullYear(),
            ' Abuzar Mamedov'
          )
          var githubIcon = new Image()
          githubIcon.className = 'footer__icon'
          githubIcon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_0__
          githubIcon.alt = 'github icon'
          var linkToGithub = document.createElement('a')
          linkToGithub.className = 'footer__link'
          linkToGithub.href = 'https://github.com/DanieleDefoe'
          linkToGithub.rel = 'noreferrer noopener nofollow'
          linkToGithub.append(githubIcon)
          footer.append(copyright, linkToGithub)
          return footer
        })()
        /* harmony default export */ __webpack_exports__['default'] =
          createFooter

        /***/
      },

    /***/ 145:
      /*!***************************!*\
  !*** ./src/gridRotate.js ***!
  \***************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        var createGridRotate = (function () {
          var gridRotateBtn = document.createElement('button')
          gridRotateBtn.className = 'popup__rotate'
          gridRotateBtn.textContent = 'Rotate'
          window.isHorizontal = true
          var toggleAxis = function toggleAxis() {
            window.isHorizontal = !window.isHorizontal
          }
          gridRotateBtn.addEventListener('click', toggleAxis)
          return gridRotateBtn
        })()
        /* harmony default export */ __webpack_exports__['default'] =
          createGridRotate

        /***/
      },

    /***/ 623:
      /*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        var createHeader = (function () {
          var header = document.createElement('header')
          header.className = 'header'
          var headerTitle = document.createElement('h1')
          headerTitle.className = 'header__title'
          headerTitle.textContent = 'battleship'
          header.append(headerTitle)
          return header
        })()
        /* harmony default export */ __webpack_exports__['default'] =
          createHeader

        /***/
      },

    /***/ 1:
      /*!**************************!*\
  !*** ./src/heroPopup.js ***!
  \**************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _playgroundGrid__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./playgroundGrid */ 772)
        /* harmony import */ var _highlightArea__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./highlightArea */ 203)
        /* harmony import */ var _blankArea__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./blankArea */ 514)
        /* harmony import */ var _placeShip__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./placeShip */ 524)
        /* harmony import */ var _gridRotate__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./gridRotate */ 145)
        /* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./shipClass */ 453)

        var createHeroPopup = (function () {
          var user = (0,
          _playgroundGrid__WEBPACK_IMPORTED_MODULE_0__['default'])(
            'user-preview'
          )
          var popup = document.createElement('section')
          popup.className = 'popup hero-popup'
          var shipIndex = 0
          var callback1 = function callback1(event) {
            return (0, _highlightArea__WEBPACK_IMPORTED_MODULE_1__['default'])(
              event,
              _shipClass__WEBPACK_IMPORTED_MODULE_5__.ships[shipIndex].length,
              window.isHorizontal
            )
          }
          var callback2 = function callback2(event) {
            return (0, _blankArea__WEBPACK_IMPORTED_MODULE_2__['default'])(
              event,
              _shipClass__WEBPACK_IMPORTED_MODULE_5__.ships[shipIndex].length,
              window.isHorizontal
            )
          }
          var callback3 = function callback3(event) {
            var result = (0,
            _placeShip__WEBPACK_IMPORTED_MODULE_3__['default'])(
              event,
              _shipClass__WEBPACK_IMPORTED_MODULE_5__.ships,
              shipIndex
            )
            if (result) {
              shipIndex += 1
            }
            if (
              shipIndex === _shipClass__WEBPACK_IMPORTED_MODULE_5__.ships.length
            ) {
              user.removeEventListener('mouseover', callback1)
              user.removeEventListener('mouseout', callback2)
              user.removeEventListener('click', callback3)
              popup.classList.add('hidden')
            }
          }
          user.addEventListener('mouseover', callback1)
          user.addEventListener('mouseout', callback2)
          user.addEventListener('click', callback3)
          var popupContainer = document.createElement('div')
          popupContainer.className = 'popup__container'
          var title = document.createElement('h2')
          title.className = 'popup__title'
          title.textContent = 'Welcome to battleship game'
          var actionText = document.createElement('p')
          actionText.className = 'popup__action'
          actionText.textContent = 'Place your '
          var shipName = document.createElement('span')
          shipName.className = 'popup__ship-name'
          shipName.textContent = 'Carrier'
          actionText.append(shipName)
          popupContainer.append(
            title,
            actionText,
            _gridRotate__WEBPACK_IMPORTED_MODULE_4__['default'],
            user
          )
          popup.append(popupContainer)
          return popup
        })()
        /* harmony default export */ __webpack_exports__['default'] =
          createHeroPopup

        /***/
      },

    /***/ 203:
      /*!******************************!*\
  !*** ./src/highlightArea.js ***!
  \******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _blankArea__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./blankArea */ 514)
        /* eslint-disable no-sequences */

        var highlightArea = function highlightArea(
          event,
          shipLength,
          isHorizontal
        ) {
          if (event.target === event.currentTarget) return
          var pos = event.target.id
          var position = parseInt(pos, 10)
          if ((position + shipLength - 1) % 10 < shipLength - 1 && isHorizontal)
            return
          if (
            (position + shipLength * 10) % 100 < shipLength * 10 &&
            !isHorizontal
          )
            return
          for (
            var i = position, j = 0;
            i <= position + shipLength, j < shipLength;
            i += 1, j += 1
          ) {
            var node = void 0
            if (isHorizontal) {
              node = document.querySelector(
                '#user-preview div[id="'.concat(i, '"]')
              )
              if (node.classList.contains('black-ship')) {
                ;(0, _blankArea__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  event,
                  shipLength,
                  isHorizontal
                )
                return
              }
            } else {
              node = document.querySelector(
                '#user-preview div[id="'.concat(i + j * 10, '"]')
              )
              i -= 1
              if (node.classList.contains('black-ship')) {
                ;(0, _blankArea__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  event,
                  shipLength,
                  isHorizontal
                )
                return
              }
            }
            node.classList.add('green-hover')
          }
        }
        /* harmony default export */ __webpack_exports__['default'] =
          highlightArea

        /***/
      },

    /***/ 579:
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./styles/style.css */ 915)
        /* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./header */ 623)
        /* harmony import */ var _mains__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./mains */ 498)
        /* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./footer */ 755)
        /* harmony import */ var _heroPopup__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./heroPopup */ 1)
        /* harmony import */ var _resultPopup__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./resultPopup */ 632)
        /* eslint-disable import/no-extraneous-dependencies */

        var App = function App() {
          var _document = document,
            body = _document.body
          body.className = 'page'
          body.append(
            _header__WEBPACK_IMPORTED_MODULE_1__['default'],
            _mains__WEBPACK_IMPORTED_MODULE_2__['default'],
            _footer__WEBPACK_IMPORTED_MODULE_3__['default'],
            _heroPopup__WEBPACK_IMPORTED_MODULE_4__['default'],
            _resultPopup__WEBPACK_IMPORTED_MODULE_5__['default']
          )
        }
        App()

        /***/
      },

    /***/ 498:
      /*!**********************!*\
  !*** ./src/mains.js ***!
  \**********************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _playgroundGrid__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./playgroundGrid */ 772)
        /* harmony import */ var _placeComputerShips__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./placeComputerShips */ 93)
        /* harmony import */ var _playGame__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./playGame */ 156)

        var createMain = (function () {
          var main = document.createElement('main')
          main.className = 'main'
          var user = (0,
          _playgroundGrid__WEBPACK_IMPORTED_MODULE_0__['default'])('user')
          var computer = (0,
          _playgroundGrid__WEBPACK_IMPORTED_MODULE_0__['default'])('computer')
          window.userSunkShips = []
          window.computerSunkShips = []
          ;(0, _placeComputerShips__WEBPACK_IMPORTED_MODULE_1__['default'])(
            computer
          )
          computer.addEventListener(
            'click',
            _playGame__WEBPACK_IMPORTED_MODULE_2__['default']
          )
          main.append(user, computer)
          return main
        })()
        /* harmony default export */ __webpack_exports__['default'] = createMain

        /***/
      },

    /***/ 93:
      /*!***********************************!*\
  !*** ./src/placeComputerShips.js ***!
  \***********************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./shipClass */ 453)
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          )
        }
        function _nonIterableSpread() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
          var n = Object.prototype.toString.call(o).slice(8, -1)
          if (n === 'Object' && o.constructor) n = o.constructor.name
          if (n === 'Map' || n === 'Set') return Array.from(o)
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen)
        }
        function _iterableToArray(iter) {
          if (
            (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
            iter['@@iterator'] != null
          )
            return Array.from(iter)
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr)
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
          return arr2
        }
        /* eslint-disable no-continue */
        /* eslint-disable no-sequences */

        var computerShips = _toConsumableArray(
          _shipClass__WEBPACK_IMPORTED_MODULE_0__.ships
        )
        var placeComputerShips = function placeComputerShips(computer) {
          if (computerShips.length > 0) {
            var randomStartIndex = Math.floor(Math.random() * 100)
            var currentShip = computerShips[0]
            var length = currentShip.length
            var isHorizontal = Math.random() < 0.5
            if (
              (randomStartIndex + length - 1) % 10 < length - 1 &&
              isHorizontal
            ) {
              placeComputerShips(computer)
              return
            }
            if (
              (randomStartIndex + length * 10) % 100 < length * 10 &&
              !isHorizontal
            ) {
              placeComputerShips(computer)
              return
            }
            var shipNodes = []
            for (
              var i = randomStartIndex, j = 0;
              i <= randomStartIndex + length, j < length;
              i += 1, j += 1
            ) {
              var node = void 0
              if (isHorizontal) {
                node = computer.querySelector('div[id="'.concat(i, '"]'))
              } else {
                node = computer.querySelector(
                  'div[id="'.concat(i + j * 10, '"]')
                )
                i -= 1
              }
              if (node.classList.contains('taken')) {
                placeComputerShips(computer)
                return
              }
              shipNodes.push(node)
            }
            if (shipNodes.length === length) {
              for (var _i = 0; _i < shipNodes.length; _i += 1) {
                shipNodes[_i].classList.add('taken', currentShip.name)
              }
            }
            computerShips.shift()
            placeComputerShips(computer)
          }
        }
        /* harmony default export */ __webpack_exports__['default'] =
          placeComputerShips

        /***/
      },

    /***/ 524:
      /*!**************************!*\
  !*** ./src/placeShip.js ***!
  \**************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* eslint-disable no-sequences */
        var placeShip = function placeShip(event, ships, shipIndex) {
          console.log(shipIndex)
          var ship = ships[shipIndex]
          if (ship) {
            var pos = event.target.id
            var length = ship.length,
              name = ship.name
            var position = parseInt(pos, 10)
            if (
              (position + length - 1) % 10 < length - 1 &&
              window.isHorizontal
            )
              return false
            if (
              (position + length * 10) % 100 < length * 10 &&
              !window.isHorizontal
            )
              return false
            for (
              var i = position, j = 0;
              i <= position + length, j < length;
              i += 1, j += 1
            ) {
              var node = void 0
              var newNode = void 0
              if (window.isHorizontal) {
                node = document.getElementById(i)
                newNode = document.querySelector(
                  '#user-preview div[id="'.concat(i, '"]')
                )
              } else {
                node = document.getElementById(i + j * 10)
                newNode = document.querySelector(
                  '#user-preview div[id="'.concat(i + j * 10, '"]')
                )
                i -= 1
              }
              if (node.classList.contains('black-ship')) {
                return false
              }
              node.classList.remove('green-hover')
              node.classList.add('black-ship', name)
              newNode.classList.add('black-ship')
            }
            var actionText = document.querySelector('.popup__ship-name')
            if (ships[shipIndex + 1]) {
              actionText.textContent = ships[shipIndex + 1].name
            }
            return true
          }
          return false
        }
        /* harmony default export */ __webpack_exports__['default'] = placeShip

        /***/
      },

    /***/ 156:
      /*!*************************!*\
  !*** ./src/playGame.js ***!
  \*************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./shipClass */ 453)
        /* harmony import */ var _computerGo__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./computerGo */ 989)
        /* harmony import */ var _checkForWin__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./checkForWin */ 394)

        var playGame = function playGame(event) {
          var target = event.target
          if (target === event.currentTarget) return
          var className = target.className
          if (
            target.classList.contains('hit-red') ||
            target.classList.contains('miss-gray')
          )
            return
          var shipNamesRegex =
            /Carrier|Battleship|Destroyer|Submarine|Patrol-boat/i
          var matchName = className.match(shipNamesRegex)
          if (matchName) {
            var shipsName = matchName[0]
            target.classList.add('hit-red')
            var currentShip =
              _shipClass__WEBPACK_IMPORTED_MODULE_0__.ships.find(function (
                ship
              ) {
                return ship.name === shipsName
              })
            currentShip.hit()
            if (currentShip.isSunk()) window.userSunkShips.push(currentShip)
          } else {
            target.classList.add('miss-gray')
          }
          ;(0, _computerGo__WEBPACK_IMPORTED_MODULE_1__['default'])()
          ;(0, _checkForWin__WEBPACK_IMPORTED_MODULE_2__['default'])()
        }
        /* harmony default export */ __webpack_exports__['default'] = playGame

        /***/
      },

    /***/ 772:
      /*!*******************************!*\
  !*** ./src/playgroundGrid.js ***!
  \*******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        var createGrid = function createGrid(player) {
          var grid = document.createElement('section')
          grid.className = 'playground-grid'
          grid.id = player
          for (var i = 0; i < 100; i += 1) {
            var block = document.createElement('div')
            block.className = 'playground__block'
            block.id = i
            grid.append(block)
          }
          return grid
        }
        /* harmony default export */ __webpack_exports__['default'] = createGrid

        /***/
      },

    /***/ 716:
      /*!****************************!*\
  !*** ./src/restartGame.js ***!
  \****************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        var restartGame = function restartGame() {
          window.location.reload()
        }
        /* harmony default export */ __webpack_exports__['default'] =
          restartGame

        /***/
      },

    /***/ 632:
      /*!****************************!*\
  !*** ./src/resultPopup.js ***!
  \****************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _restartGame__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./restartGame */ 716)

        var createResultPopup = (function () {
          var popup = document.createElement('div')
          popup.className = 'popup hidden result-popup'
          var popupContainer = document.createElement('section')
          popupContainer.className = 'popup__victory-section'
          var resultText = document.createElement('p')
          resultText.className = 'popup__result'
          resultText.textContent = 'you win!'
          var playAgainBtn = document.createElement('button')
          playAgainBtn.type = 'button'
          playAgainBtn.className = 'popup__play-again'
          playAgainBtn.textContent = 'play again'
          playAgainBtn.addEventListener(
            'click',
            _restartGame__WEBPACK_IMPORTED_MODULE_0__['default']
          )
          popupContainer.append(resultText, playAgainBtn)
          popup.append(popupContainer)
          return popup
        })()
        /* harmony default export */ __webpack_exports__['default'] =
          createResultPopup

        /***/
      },

    /***/ 453:
      /*!**************************!*\
  !*** ./src/shipClass.js ***!
  \**************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ myShips: function () {
            return /* binding */ myShips
          },
          /* harmony export */ ships: function () {
            return /* binding */ ships
          },
          /* harmony export */
        })
        function _typeof(obj) {
          '@babel/helpers - typeof'
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj
                  }
                : function (obj) {
                    return obj &&
                      'function' == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? 'symbol'
                      : typeof obj
                  }),
            _typeof(obj)
          )
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            )
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          Object.defineProperty(Constructor, 'prototype', { writable: false })
          return Constructor
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, 'string')
          return _typeof(key) === 'symbol' ? key : String(key)
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== 'object' || input === null) return input
          var prim = input[Symbol.toPrimitive]
          if (prim !== undefined) {
            var res = prim.call(input, hint || 'default')
            if (_typeof(res) !== 'object') return res
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return (hint === 'string' ? String : Number)(input)
        }
        var Ship = /*#__PURE__*/ (function () {
          function Ship(name, length) {
            _classCallCheck(this, Ship)
            this.name = name
            this.length = length
            this.damage = 0
          }
          _createClass(Ship, [
            {
              key: 'hit',
              value: function hit() {
                this.damage += 1
              },
            },
            {
              key: 'isSunk',
              value: function isSunk() {
                return this.damage === this.length
              },
            },
          ])
          return Ship
        })()
        var carrier = new Ship('Carrier', 5)
        var battleship = new Ship('Battleship', 4)
        var destroyer = new Ship('Destroyer', 3)
        var submarine = new Ship('Submarine', 3)
        var patrolBoat = new Ship('Patrol-boat', 2)
        var myCarrier = new Ship('Carrier', 5)
        var myBattleship = new Ship('Battleship', 4)
        var myDestroyer = new Ship('Destroyer', 3)
        var mySubmarine = new Ship('Submarine', 3)
        var myPatrolBoat = new Ship('Patrol-boat', 2)
        var ships = [carrier, battleship, destroyer, submarine, patrolBoat]
        var myShips = [
          myCarrier,
          myBattleship,
          myDestroyer,
          mySubmarine,
          myPatrolBoat,
        ]
        /* harmony default export */ __webpack_exports__['default'] = Ship

        /***/
      },

    /***/ 891:
      /*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/marker.css ***!
  \********************************************************************/
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ 645
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ 667
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          )
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./PermanentMarker-Regular.ttf */ 612
          ),
          __webpack_require__.b
        )
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          )
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          )
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "@font-face {\n  font-family: 'Permanent Marker';\n  src: url(" +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ');\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/fonts/marker.css'],
            names: [],
            mappings:
              'AAAA;EACE,+BAA+B;EAC/B,4CAAuC;EACvC,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB',
            sourcesContent: [
              "@font-face {\n  font-family: 'Permanent Marker';\n  src: url(./PermanentMarker-Regular.ttf);\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n",
            ],
            sourceRoot: '',
          },
        ])
        // Exports
        /* harmony default export */ __webpack_exports__['default'] =
          ___CSS_LOADER_EXPORT___

        /***/
      },

    /***/ 890:
      /*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ 645
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_marker_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/marker.css */ 891
          )
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          )
        ___CSS_LOADER_EXPORT___.i(
          _node_modules_css_loader_dist_cjs_js_fonts_marker_css__WEBPACK_IMPORTED_MODULE_2__[
            'default'
          ]
        )
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --header-height: clamp(150px, 20vh, 500px);\n}\n\n.page {\n  min-height: 100vh;\n  width: 100%;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n  height: var(--header-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 20px 0 20px 0 rgba(0, 0, 0, 0.5);\n}\n\n.header__title {\n  text-transform: uppercase;\n  font-size: 10rem;\n  text-align: center;\n}\n\n.main {\n  width: 100%;\n  height: calc(100vh - var(--header-height) - 70px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n.playground-grid {\n  width: 500px;\n  height: 500px;\n  box-sizing: unset;\n  display: flex;\n  flex-flow: row wrap;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block {\n  width: 50px;\n  height: 50px;\n  border-top: 2px solid rgba(0, 0, 0, 0.8);\n  border-left: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block:nth-of-type(10n) {\n  border-right: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.footer {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  box-shadow: -20px 0 20px 0 rgba(0, 0, 0, 0.5);\n  font-size: 2.5rem;\n  gap: 2rem;\n}\n\n.footer__link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s ease-in;\n}\n\n.footer__icon {\n  object-fit: contain;\n  width: 4rem;\n}\n\n.popup {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.popup.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.popup__container {\n  width: 560px;\n  height: 90%;\n  background: floralwhite;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.popup__title {\n  font-size: 3.5rem;\n}\n\n.popup__action {\n  font-size: 3rem;\n}\n\n.popup__ship-name {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.popup__rotate {\n  font-size: 3.5rem;\n  padding: 1.5rem 2.5rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: opacity 0.2s ease-in;\n  cursor: pointer;\n}\n\n.popup__victory-section {\n  background: #fff;\n  width: 100%;\n  max-width: 600px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2rem;\n  gap: 4rem;\n}\n\n.popup__result {\n  font-size: 6rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n}\n\n.popup__play-again {\n  padding: 1.5rem 3rem;\n  font-size: 4rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: all 0.2s ease-in;\n}\n\n.green-hover {\n  background: lightgreen;\n}\n\n.black-ship {\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.enemy-hidden-ship {\n  background: transparent;\n}\n\n.hit-red {\n  background-color: crimson;\n}\n\n.miss-gray {\n  background-color: gray;\n}\n\n@media (hover: hover) {\n  .footer__link:hover,\n  .popup__rotate:hover,\n  .popup__play-again:hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n\n  .playground__block:hover {\n    cursor: pointer;\n  }\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/styles/style.css'],
            names: [],
            mappings:
              'AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,oDAAoD;EACpD;wEACsE;AACxE;;AAEA;EACE,6DAA6D;EAC7D,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,6CAA6C;EAC7C,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,oDAAoD;EACpD,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,6DAA6D;AAC/D;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,oDAAoD;EACpD,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;;;IAGE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;AACF',
            sourcesContent: [
              "@import url(../fonts/marker.css);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --header-height: clamp(150px, 20vh, 500px);\n}\n\n.page {\n  min-height: 100vh;\n  width: 100%;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n  height: var(--header-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 20px 0 20px 0 rgba(0, 0, 0, 0.5);\n}\n\n.header__title {\n  text-transform: uppercase;\n  font-size: 10rem;\n  text-align: center;\n}\n\n.main {\n  width: 100%;\n  height: calc(100vh - var(--header-height) - 70px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n.playground-grid {\n  width: 500px;\n  height: 500px;\n  box-sizing: unset;\n  display: flex;\n  flex-flow: row wrap;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block {\n  width: 50px;\n  height: 50px;\n  border-top: 2px solid rgba(0, 0, 0, 0.8);\n  border-left: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.playground__block:nth-of-type(10n) {\n  border-right: 2px solid rgba(0, 0, 0, 0.8);\n}\n\n.footer {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  box-shadow: -20px 0 20px 0 rgba(0, 0, 0, 0.5);\n  font-size: 2.5rem;\n  gap: 2rem;\n}\n\n.footer__link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s ease-in;\n}\n\n.footer__icon {\n  object-fit: contain;\n  width: 4rem;\n}\n\n.popup {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.popup.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.popup__container {\n  width: 560px;\n  height: 90%;\n  background: floralwhite;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.popup__title {\n  font-size: 3.5rem;\n}\n\n.popup__action {\n  font-size: 3rem;\n}\n\n.popup__ship-name {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.popup__rotate {\n  font-size: 3.5rem;\n  padding: 1.5rem 2.5rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: opacity 0.2s ease-in;\n  cursor: pointer;\n}\n\n.popup__victory-section {\n  background: #fff;\n  width: 100%;\n  max-width: 600px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2rem;\n  gap: 4rem;\n}\n\n.popup__result {\n  font-size: 6rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: 'Permanent Marker', Arial, Helvetica, sans-serif;\n}\n\n.popup__play-again {\n  padding: 1.5rem 3rem;\n  font-size: 4rem;\n  border-radius: 1rem;\n  border: none;\n  background: linear-gradient(90deg, #00d2ff, #3a7bd5);\n  transition: all 0.2s ease-in;\n}\n\n.green-hover {\n  background: lightgreen;\n}\n\n.black-ship {\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.enemy-hidden-ship {\n  background: transparent;\n}\n\n.hit-red {\n  background-color: crimson;\n}\n\n.miss-gray {\n  background-color: gray;\n}\n\n@media (hover: hover) {\n  .footer__link:hover,\n  .popup__rotate:hover,\n  .popup__play-again:hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n\n  .playground__block:hover {\n    cursor: pointer;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ])
        // Exports
        /* harmony default export */ __webpack_exports__['default'] =
          ___CSS_LOADER_EXPORT___

        /***/
      },

    /***/ 645:
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ function (module) {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = []

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = ''
              var needLayer = typeof item[5] !== 'undefined'
              if (item[4]) {
                content += '@supports ('.concat(item[4], ') {')
              }
              if (item[2]) {
                content += '@media '.concat(item[2], ' {')
              }
              if (needLayer) {
                content += '@layer'.concat(
                  item[5].length > 0 ? ' '.concat(item[5]) : '',
                  ' {'
                )
              }
              content += cssWithMappingToString(item)
              if (needLayer) {
                content += '}'
              }
              if (item[2]) {
                content += '}'
              }
              if (item[4]) {
                content += '}'
              }
              return content
            }).join('')
          }

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === 'string') {
              modules = [[null, modules, undefined]]
            }
            var alreadyImportedModules = {}
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0]
                if (id != null) {
                  alreadyImportedModules[id] = true
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k])
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue
              }
              if (typeof layer !== 'undefined') {
                if (typeof item[5] === 'undefined') {
                  item[5] = layer
                } else {
                  item[1] = '@layer'
                    .concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')
                    .concat(item[1], '}')
                  item[5] = layer
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media
                } else {
                  item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}')
                  item[2] = media
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = ''.concat(supports)
                } else {
                  item[1] = '@supports ('
                    .concat(item[4], ') {')
                    .concat(item[1], '}')
                  item[4] = supports
                }
              }
              list.push(item)
            }
          }
          return list
        }

        /***/
      },

    /***/ 667:
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ function (module) {
        module.exports = function (url, options) {
          if (!options) {
            options = {}
          }
          if (!url) {
            return url
          }
          url = String(url.__esModule ? url.default : url)

          // If url is already wrapped in quotes, remove them
          if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1)
          }
          if (options.hash) {
            url += options.hash
          }

          // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls
          if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
              '"'
            )
          }
          return url
        }

        /***/
      },

    /***/ 537:
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ function (module) {
        module.exports = function (item) {
          var content = item[1]
          var cssMapping = item[3]
          if (!cssMapping) {
            return content
          }
          if (typeof btoa === 'function') {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            )
            var data =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                base64
              )
            var sourceMapping = '/*# '.concat(data, ' */')
            return [content].concat([sourceMapping]).join('\n')
          }
          return [content].join('\n')
        }

        /***/
      },

    /***/ 915:
      /*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589
          )
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          )
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ 890
          )

        var options = {}

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head'
          )

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default()

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options
          )

        /* harmony default export */ __webpack_exports__['default'] =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined

        /***/
      },

    /***/ 379:
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ function (module) {
        var stylesInDOM = []
        function getIndexByIdentifier(identifier) {
          var result = -1
          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i
              break
            }
          }
          return result
        }
        function modulesToDom(list, options) {
          var idCountMap = {}
          var identifiers = []
          for (var i = 0; i < list.length; i++) {
            var item = list[i]
            var id = options.base ? item[0] + options.base : item[0]
            var count = idCountMap[id] || 0
            var identifier = ''.concat(id, ' ').concat(count)
            idCountMap[id] = count + 1
            var indexByIdentifier = getIndexByIdentifier(identifier)
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            }
            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++
              stylesInDOM[indexByIdentifier].updater(obj)
            } else {
              var updater = addElementStyle(obj, options)
              options.byIndex = i
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              })
            }
            identifiers.push(identifier)
          }
          return identifiers
        }
        function addElementStyle(obj, options) {
          var api = options.domAPI(options)
          api.update(obj)
          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return
              }
              api.update((obj = newObj))
            } else {
              api.remove()
            }
          }
          return updater
        }
        module.exports = function (list, options) {
          options = options || {}
          list = list || []
          var lastIdentifiers = modulesToDom(list, options)
          return function update(newList) {
            newList = newList || []
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i]
              var index = getIndexByIdentifier(identifier)
              stylesInDOM[index].references--
            }
            var newLastIdentifiers = modulesToDom(newList, options)
            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i]
              var _index = getIndexByIdentifier(_identifier)
              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater()
                stylesInDOM.splice(_index, 1)
              }
            }
            lastIdentifiers = newLastIdentifiers
          }
        }

        /***/
      },

    /***/ 569:
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ function (module) {
        var memo = {}

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target)

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head
              } catch (e) {
                // istanbul ignore next
                styleTarget = null
              }
            }
            memo[target] = styleTarget
          }
          return memo[target]
        }

        /* istanbul ignore next  */
        function insertBySelector(insert, style) {
          var target = getTarget(insert)
          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          }
          target.appendChild(style)
        }
        module.exports = insertBySelector

        /***/
      },

    /***/ 216:
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ function (module) {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement('style')
          options.setAttributes(element, options.attributes)
          options.insert(element, options.options)
          return element
        }
        module.exports = insertStyleElement

        /***/
      },

    /***/ 565:
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0
          if (nonce) {
            styleElement.setAttribute('nonce', nonce)
          }
        }
        module.exports = setAttributesWithoutAttributes

        /***/
      },

    /***/ 795:
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ function (module) {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = ''
          if (obj.supports) {
            css += '@supports ('.concat(obj.supports, ') {')
          }
          if (obj.media) {
            css += '@media '.concat(obj.media, ' {')
          }
          var needLayer = typeof obj.layer !== 'undefined'
          if (needLayer) {
            css += '@layer'.concat(
              obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
              ' {'
            )
          }
          css += obj.css
          if (needLayer) {
            css += '}'
          }
          if (obj.media) {
            css += '}'
          }
          if (obj.supports) {
            css += '}'
          }
          var sourceMap = obj.sourceMap
          if (sourceMap && typeof btoa !== 'undefined') {
            css +=
              '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                ' */'
              )
          }

          // For old IE
          /* istanbul ignore if  */
          options.styleTagTransform(css, styleElement, options.options)
        }
        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false
          }
          styleElement.parentNode.removeChild(styleElement)
        }

        /* istanbul ignore next  */
        function domAPI(options) {
          if (typeof document === 'undefined') {
            return {
              update: function update() {},
              remove: function remove() {},
            }
          }
          var styleElement = options.insertStyleElement(options)
          return {
            update: function update(obj) {
              apply(styleElement, options, obj)
            },
            remove: function remove() {
              removeStyleElement(styleElement)
            },
          }
        }
        module.exports = domAPI

        /***/
      },

    /***/ 589:
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ function (module) {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild)
            }
            styleElement.appendChild(document.createTextNode(css))
          }
        }
        module.exports = styleTagTransform

        /***/
      },

    /***/ 612:
      /*!***********************************************!*\
  !*** ./src/fonts/PermanentMarker-Regular.ttf ***!
  \***********************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        module.exports = __webpack_require__.p + '73b4d2d7c9141a94b91c.ttf'

        /***/
      },

    /***/ 926:
      /*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        module.exports = __webpack_require__.p + 'e21209f267368a1bd797.svg'

        /***/
      },
  },
  /******/ function (__webpack_require__) {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = function (moduleId) {
      return __webpack_require__((__webpack_require__.s = moduleId))
    }
    /******/ var __webpack_exports__ = __webpack_exec__(579)
    /******/
  },
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYmM1NDYxZTU5NGI3ZTUwODI2My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBSztFQUNyRCxJQUFJRixLQUFLLENBQUNHLE1BQU0sS0FBS0gsS0FBSyxDQUFDSSxhQUFhLEVBQUU7RUFDMUMsSUFBTUMsR0FBRyxHQUFHTCxLQUFLLENBQUNHLE1BQU0sQ0FBQ0csRUFBRTtFQUMzQixJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0gsR0FBRyxFQUFFLEVBQUUsQ0FBQztFQUVsQyxJQUFJLENBQUNFLFFBQVEsR0FBR04sVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUdBLFVBQVUsR0FBRyxDQUFDLElBQUlDLFlBQVksRUFBRTtFQUN2RSxJQUFJLENBQUNLLFFBQVEsR0FBR04sVUFBVSxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUdBLFVBQVUsR0FBRyxFQUFFLElBQUksQ0FBQ0MsWUFBWSxFQUN2RTtFQUVGLEtBQ0UsSUFBSU8sQ0FBQyxHQUFHRixRQUFRLEVBQUVHLENBQUMsR0FBRyxDQUFDLEVBQ3ZCRCxDQUFDLElBQUlGLFFBQVEsR0FBR04sVUFBVSxFQUFFUyxDQUFDLEdBQUdULFVBQVUsRUFDMUNRLENBQUMsSUFBSSxDQUFDLEVBQUVDLENBQUMsSUFBSSxDQUFDLEVBQ2Q7SUFDQSxJQUFJQyxJQUFJO0lBQ1IsSUFBSVQsWUFBWSxFQUFFO01BQ2hCUyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSwyQkFBQUMsTUFBQSxDQUEwQkwsQ0FBQyxTQUFLO0lBQy9ELENBQUMsTUFBTTtNQUNMRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSwyQkFBQUMsTUFBQSxDQUEwQkwsQ0FBQyxHQUFHQyxDQUFDLEdBQUcsRUFBRSxTQUFLO01BQ3RFRCxDQUFDLElBQUksQ0FBQztJQUNSO0lBQ0FFLElBQUksQ0FBQ0ksU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO0VBQ3RDO0FBQ0YsQ0FBQztBQUVELCtEQUFlakIsU0FBUzs7Ozs7Ozs7Ozs7O0FDMUJlO0FBRXZDLElBQU1tQixXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3hCLElBQ0VDLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQyxNQUFNLEtBQUssQ0FBQyxJQUNqQ0YsTUFBTSxDQUFDRyxpQkFBaUIsQ0FBQ0QsTUFBTSxLQUFLLENBQUMsRUFDckM7SUFDQUosa0VBQXlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ00sV0FBVyxHQUFHLGNBQWM7SUFDeEVOLHFFQUE0QixDQUFDLFFBQVEsQ0FBQztFQUN4QyxDQUFDLE1BQU0sSUFBSUUsTUFBTSxDQUFDQyxhQUFhLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDNUNKLGtFQUF5QixDQUFDLGdCQUFnQixDQUFDLENBQUNNLFdBQVcsR0FBRyxVQUFVO0lBQ3BFTixxRUFBNEIsQ0FBQyxRQUFRLENBQUM7RUFDeEMsQ0FBQyxNQUFNLElBQUlFLE1BQU0sQ0FBQ0csaUJBQWlCLENBQUNELE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDaERKLGtFQUF5QixDQUFDLGdCQUFnQixDQUFDLENBQUNNLFdBQVcsR0FBRyxhQUFhO0lBQ3ZFTixxRUFBNEIsQ0FBQyxRQUFRLENBQUM7RUFDeEM7QUFDRixDQUFDO0FBRUQsK0RBQWVDLFdBQVc7Ozs7Ozs7Ozs7OztBQ2xCVztBQUVyQyxJQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0VBQ25ELElBQU1DLFVBQVUsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBYSxtQkFBQUMsTUFBQSxDQUFrQlksV0FBVyxTQUFLO0VBQzNFLElBQ0VJLFVBQVUsQ0FBQ2YsU0FBUyxDQUFDZ0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUN4Q0QsVUFBVSxDQUFDZixTQUFTLENBQUNnQixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQzFDO0lBQ0FOLFVBQVUsRUFBRTtJQUNaO0VBQ0Y7RUFDQSxJQUFRTyxTQUFTLEdBQUtGLFVBQVUsQ0FBeEJFLFNBQVM7RUFDakIsSUFBTUMsY0FBYyxHQUFHLHFEQUFxRDtFQUM1RSxJQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0csS0FBSyxDQUFDRixjQUFjLENBQUM7RUFDakQsSUFBSUMsU0FBUyxFQUFFO0lBQ2JKLFVBQVUsQ0FBQ2YsU0FBUyxDQUFDcUIsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxJQUFNQyxTQUFTLEdBQUdILFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBTUksV0FBVyxHQUFHZCxvREFBWSxDQUFDLFVBQUNnQixJQUFJO01BQUEsT0FBS0EsSUFBSSxDQUFDQyxJQUFJLEtBQUtKLFNBQVM7SUFBQSxFQUFDO0lBQ25FQyxXQUFXLENBQUNJLEdBQUcsRUFBRTtJQUNqQixJQUFJSixXQUFXLENBQUNLLE1BQU0sRUFBRSxFQUFFeEIsTUFBTSxDQUFDRyxpQkFBaUIsQ0FBQ3NCLElBQUksQ0FBQ04sV0FBVyxDQUFDO0VBQ3RFLENBQUMsTUFBTTtJQUNMUixVQUFVLENBQUNmLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDdkM7QUFDRixDQUFDO0FBRUQsK0RBQWVYLFVBQVU7Ozs7Ozs7Ozs7OztBQzFCYTtBQUV0QyxJQUFNcUIsWUFBWSxHQUFJLFlBQU07RUFDMUIsSUFBTUMsTUFBTSxHQUFHbkMsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQ0QsTUFBTSxDQUFDZixTQUFTLEdBQUcsUUFBUTtFQUUzQixJQUFNaUIsU0FBUyxHQUFHckMsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM3Q0MsU0FBUyxDQUFDakIsU0FBUyxHQUFHLG1CQUFtQjtFQUN6Q2lCLFNBQVMsQ0FBQzFCLFdBQVcscUJBQUFULE1BQUEsQ0FBa0IsSUFBSW9DLElBQUksRUFBRSxDQUFDQyxXQUFXLEVBQUUsb0JBQWlCO0VBRWhGLElBQU1DLFVBQVUsR0FBRyxJQUFJQyxLQUFLLEVBQUU7RUFDOUJELFVBQVUsQ0FBQ3BCLFNBQVMsR0FBRyxjQUFjO0VBQ3JDb0IsVUFBVSxDQUFDRSxHQUFHLEdBQUdULCtDQUFJO0VBQ3JCTyxVQUFVLENBQUNHLEdBQUcsR0FBRyxhQUFhO0VBRTlCLElBQU1DLFlBQVksR0FBRzVDLFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDaERRLFlBQVksQ0FBQ3hCLFNBQVMsR0FBRyxjQUFjO0VBQ3ZDd0IsWUFBWSxDQUFDQyxJQUFJLEdBQUcsaUNBQWlDO0VBQ3JERCxZQUFZLENBQUNFLEdBQUcsR0FBRyw4QkFBOEI7RUFFakRGLFlBQVksQ0FBQ0csTUFBTSxDQUFDUCxVQUFVLENBQUM7RUFFL0JMLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDVixTQUFTLEVBQUVPLFlBQVksQ0FBQztFQUV0QyxPQUFPVCxNQUFNO0FBQ2YsQ0FBQyxFQUFHO0FBRUosK0RBQWVELFlBQVk7Ozs7Ozs7Ozs7O0FDM0IzQixJQUFNYyxnQkFBZ0IsR0FBSSxZQUFNO0VBQzlCLElBQU1DLGFBQWEsR0FBR2pELFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDdERhLGFBQWEsQ0FBQzdCLFNBQVMsR0FBRyxlQUFlO0VBQ3pDNkIsYUFBYSxDQUFDdEMsV0FBVyxHQUFHLFFBQVE7RUFFcENKLE1BQU0sQ0FBQ2pCLFlBQVksR0FBRyxJQUFJO0VBRTFCLElBQU00RCxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3ZCM0MsTUFBTSxDQUFDakIsWUFBWSxHQUFHLENBQUNpQixNQUFNLENBQUNqQixZQUFZO0VBQzVDLENBQUM7RUFFRDJELGFBQWEsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFRCxVQUFVLENBQUM7RUFFbkQsT0FBT0QsYUFBYTtBQUN0QixDQUFDLEVBQUc7QUFFSiwrREFBZUQsZ0JBQWdCOzs7Ozs7Ozs7OztBQ2hCL0IsSUFBTUksWUFBWSxHQUFJLFlBQU07RUFDMUIsSUFBTUMsTUFBTSxHQUFHckQsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQ2lCLE1BQU0sQ0FBQ2pDLFNBQVMsR0FBRyxRQUFRO0VBRTNCLElBQU1rQyxXQUFXLEdBQUd0RCxRQUFRLENBQUNvQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2hEa0IsV0FBVyxDQUFDbEMsU0FBUyxHQUFHLGVBQWU7RUFDdkNrQyxXQUFXLENBQUMzQyxXQUFXLEdBQUcsWUFBWTtFQUV0QzBDLE1BQU0sQ0FBQ04sTUFBTSxDQUFDTyxXQUFXLENBQUM7RUFFMUIsT0FBT0QsTUFBTTtBQUNmLENBQUMsRUFBRztBQUVKLCtEQUFlRCxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JrQjtBQUVGO0FBQ1I7QUFFQTtBQUVLO0FBRUw7QUFFbkMsSUFBTU8sZUFBZSxHQUFJLFlBQU07RUFDN0IsSUFBTUMsSUFBSSxHQUFHTCwyREFBYyxDQUFDLGNBQWMsQ0FBQztFQUUzQyxJQUFNTSxLQUFLLEdBQUc3RCxRQUFRLENBQUNvQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQy9DeUIsS0FBSyxDQUFDekMsU0FBUyxHQUFHLGtCQUFrQjtFQUVwQyxJQUFJMEMsU0FBUyxHQUFHLENBQUM7RUFFakIsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUkzRSxLQUFLO0lBQUEsT0FDdEJvRSwwREFBYSxDQUFDcEUsS0FBSyxFQUFFc0UsNkNBQUssQ0FBQ0ksU0FBUyxDQUFDLENBQUNyRCxNQUFNLEVBQUVGLE1BQU0sQ0FBQ2pCLFlBQVksQ0FBQztFQUFBO0VBRXBFLElBQU0wRSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSTVFLEtBQUs7SUFBQSxPQUN0QkQsc0RBQVMsQ0FBQ0MsS0FBSyxFQUFFc0UsNkNBQUssQ0FBQ0ksU0FBUyxDQUFDLENBQUNyRCxNQUFNLEVBQUVGLE1BQU0sQ0FBQ2pCLFlBQVksQ0FBQztFQUFBO0VBRWhFLElBQU0yRSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSTdFLEtBQUssRUFBSztJQUMzQixJQUFNOEUsTUFBTSxHQUFHVCxzREFBUyxDQUFDckUsS0FBSyxFQUFFc0UsNkNBQUssRUFBRUksU0FBUyxDQUFDO0lBQ2pELElBQUlJLE1BQU0sRUFBRTtNQUNWSixTQUFTLElBQUksQ0FBQztJQUNoQjtJQUNBLElBQUlBLFNBQVMsS0FBS0osb0RBQVksRUFBRTtNQUM5QkUsSUFBSSxDQUFDTyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUVKLFNBQVMsQ0FBQztNQUNoREgsSUFBSSxDQUFDTyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUVILFNBQVMsQ0FBQztNQUMvQ0osSUFBSSxDQUFDTyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUVGLFNBQVMsQ0FBQztNQUM1Q0osS0FBSyxDQUFDMUQsU0FBUyxDQUFDcUIsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMvQjtFQUNGLENBQUM7RUFFRG9DLElBQUksQ0FBQ1QsZ0JBQWdCLENBQUMsV0FBVyxFQUFFWSxTQUFTLENBQUM7RUFDN0NILElBQUksQ0FBQ1QsZ0JBQWdCLENBQUMsVUFBVSxFQUFFYSxTQUFTLENBQUM7RUFFNUNKLElBQUksQ0FBQ1QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFYyxTQUFTLENBQUM7RUFFekMsSUFBTUcsY0FBYyxHQUFHcEUsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRGdDLGNBQWMsQ0FBQ2hELFNBQVMsR0FBRyxrQkFBa0I7RUFFN0MsSUFBTWlELEtBQUssR0FBR3JFLFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDMUNpQyxLQUFLLENBQUNqRCxTQUFTLEdBQUcsY0FBYztFQUNoQ2lELEtBQUssQ0FBQzFELFdBQVcsR0FBRyw0QkFBNEI7RUFFaEQsSUFBTTJELFVBQVUsR0FBR3RFLFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDOUNrQyxVQUFVLENBQUNsRCxTQUFTLEdBQUcsZUFBZTtFQUN0Q2tELFVBQVUsQ0FBQzNELFdBQVcsR0FBRyxhQUFhO0VBRXRDLElBQU00RCxRQUFRLEdBQUd2RSxRQUFRLENBQUNvQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQy9DbUMsUUFBUSxDQUFDbkQsU0FBUyxHQUFHLGtCQUFrQjtFQUN2Q21ELFFBQVEsQ0FBQzVELFdBQVcsR0FBRyxTQUFTO0VBRWhDMkQsVUFBVSxDQUFDdkIsTUFBTSxDQUFDd0IsUUFBUSxDQUFDO0VBRTNCSCxjQUFjLENBQUNyQixNQUFNLENBQUNzQixLQUFLLEVBQUVDLFVBQVUsRUFBRXJCLG1EQUFhLEVBQUVXLElBQUksQ0FBQztFQUU3REMsS0FBSyxDQUFDZCxNQUFNLENBQUNxQixjQUFjLENBQUM7RUFFNUIsT0FBT1AsS0FBSztBQUNkLENBQUMsRUFBRztBQUVKLCtEQUFlRixlQUFlOzs7Ozs7Ozs7Ozs7QUNuRTlCO0FBQ21DO0FBRW5DLElBQU1ILGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSXBFLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUs7RUFDekQsSUFBSUYsS0FBSyxDQUFDRyxNQUFNLEtBQUtILEtBQUssQ0FBQ0ksYUFBYSxFQUFFO0VBQzFDLElBQU1DLEdBQUcsR0FBR0wsS0FBSyxDQUFDRyxNQUFNLENBQUNHLEVBQUU7RUFDM0IsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNILEdBQUcsRUFBRSxFQUFFLENBQUM7RUFDbEMsSUFBSSxDQUFDRSxRQUFRLEdBQUdOLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHQSxVQUFVLEdBQUcsQ0FBQyxJQUFJQyxZQUFZLEVBQUU7RUFDdkUsSUFBSSxDQUFDSyxRQUFRLEdBQUdOLFVBQVUsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHQSxVQUFVLEdBQUcsRUFBRSxJQUFJLENBQUNDLFlBQVksRUFDdkU7RUFFRixLQUNFLElBQUlPLENBQUMsR0FBR0YsUUFBUSxFQUFFRyxDQUFDLEdBQUcsQ0FBQyxFQUN2QkQsQ0FBQyxJQUFJRixRQUFRLEdBQUdOLFVBQVUsRUFBRVMsQ0FBQyxHQUFHVCxVQUFVLEVBQzFDUSxDQUFDLElBQUksQ0FBQyxFQUFFQyxDQUFDLElBQUksQ0FBQyxFQUNkO0lBQ0EsSUFBSUMsSUFBSTtJQUNSLElBQUlULFlBQVksRUFBRTtNQUNoQlMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsMkJBQUFDLE1BQUEsQ0FBMEJMLENBQUMsU0FBSztNQUM3RCxJQUFJRSxJQUFJLENBQUNJLFNBQVMsQ0FBQ2dCLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN6Q2hDLHNEQUFTLENBQUNDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxZQUFZLENBQUM7UUFDMUM7TUFDRjtJQUNGLENBQUMsTUFBTTtNQUNMUyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSwyQkFBQUMsTUFBQSxDQUEwQkwsQ0FBQyxHQUFHQyxDQUFDLEdBQUcsRUFBRSxTQUFLO01BQ3RFRCxDQUFDLElBQUksQ0FBQztNQUNOLElBQUlFLElBQUksQ0FBQ0ksU0FBUyxDQUFDZ0IsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3pDaEMsc0RBQVMsQ0FBQ0MsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksQ0FBQztRQUMxQztNQUNGO0lBQ0Y7SUFDQVMsSUFBSSxDQUFDSSxTQUFTLENBQUNxQixHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ25DO0FBQ0YsQ0FBQztBQUVELCtEQUFlZ0MsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQzVCO0FBQzJCO0FBRUU7QUFDSDtBQUNHO0FBQ0U7QUFDUTtBQUV2QyxJQUFNaUIsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNoQixJQUFBQyxTQUFBLEdBQWlCMUUsUUFBUTtJQUFqQjJFLElBQUksR0FBQUQsU0FBQSxDQUFKQyxJQUFJO0VBQ1pBLElBQUksQ0FBQ3ZELFNBQVMsR0FBRyxNQUFNO0VBRXZCdUQsSUFBSSxDQUFDNUIsTUFBTSxDQUFDTSwrQ0FBTSxFQUFFbUIsOENBQUksRUFBRXJDLCtDQUFNLEVBQUUwQixrREFBSyxFQUFFeEQsb0RBQVcsQ0FBQztBQUN2RCxDQUFDO0FBRURvRSxHQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FDaEJ3QztBQUVRO0FBRXBCO0FBRWpDLElBQU1LLFVBQVUsR0FBSSxZQUFNO0VBQ3hCLElBQU1OLElBQUksR0FBR3hFLFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDM0NvQyxJQUFJLENBQUNwRCxTQUFTLEdBQUcsTUFBTTtFQUV2QixJQUFNd0MsSUFBSSxHQUFHTCwyREFBYyxDQUFDLE1BQU0sQ0FBQztFQUVuQyxJQUFNd0IsUUFBUSxHQUFHeEIsMkRBQWMsQ0FBQyxVQUFVLENBQUM7RUFFM0NoRCxNQUFNLENBQUNDLGFBQWEsR0FBRyxFQUFFO0VBQ3pCRCxNQUFNLENBQUNHLGlCQUFpQixHQUFHLEVBQUU7RUFFN0JrRSwrREFBa0IsQ0FBQ0csUUFBUSxDQUFDO0VBQzVCQSxRQUFRLENBQUM1QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUwQixpREFBUSxDQUFDO0VBRTVDTCxJQUFJLENBQUN6QixNQUFNLENBQUNhLElBQUksRUFBRW1CLFFBQVEsQ0FBQztFQUMzQixPQUFPUCxJQUFJO0FBQ2IsQ0FBQyxFQUFHO0FBRUosK0RBQWVNLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCekI7QUFDQTtBQUNtQztBQUVuQyxJQUFNRSxhQUFhLEdBQUFDLGtCQUFBLENBQU92Qiw2Q0FBSyxDQUFDO0FBRWhDLElBQU1rQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJRyxRQUFRLEVBQUs7RUFDdkMsSUFBSUMsYUFBYSxDQUFDdkUsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUM1QixJQUFNeUUsZ0JBQWdCLEdBQUduRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDeEQsSUFBTVMsV0FBVyxHQUFHc0QsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNwQyxJQUFRdkUsTUFBTSxHQUFLaUIsV0FBVyxDQUF0QmpCLE1BQU07SUFDZCxJQUFNbkIsWUFBWSxHQUFHeUIsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxHQUFHO0lBQ3hDLElBQUksQ0FBQ2lFLGdCQUFnQixHQUFHekUsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUdBLE1BQU0sR0FBRyxDQUFDLElBQUluQixZQUFZLEVBQUU7TUFDckVzRixrQkFBa0IsQ0FBQ0csUUFBUSxDQUFDO01BQzVCO0lBQ0Y7SUFDQSxJQUFJLENBQUNHLGdCQUFnQixHQUFHekUsTUFBTSxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUdBLE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQ25CLFlBQVksRUFBRTtNQUN6RXNGLGtCQUFrQixDQUFDRyxRQUFRLENBQUM7TUFDNUI7SUFDRjtJQUVBLElBQU1JLFNBQVMsR0FBRyxFQUFFO0lBRXBCLEtBQ0UsSUFBSXRGLENBQUMsR0FBR3FGLGdCQUFnQixFQUFFcEYsQ0FBQyxHQUFHLENBQUMsRUFDL0JELENBQUMsSUFBSXFGLGdCQUFnQixHQUFHekUsTUFBTSxFQUFFWCxDQUFDLEdBQUdXLE1BQU0sRUFDMUNaLENBQUMsSUFBSSxDQUFDLEVBQUVDLENBQUMsSUFBSSxDQUFDLEVBQ2Q7TUFDQSxJQUFJQyxJQUFJO01BQ1IsSUFBSVQsWUFBWSxFQUFFO1FBQ2hCUyxJQUFJLEdBQUdnRixRQUFRLENBQUM5RSxhQUFhLGFBQUFDLE1BQUEsQ0FBWUwsQ0FBQyxTQUFLO01BQ2pELENBQUMsTUFBTTtRQUNMRSxJQUFJLEdBQUdnRixRQUFRLENBQUM5RSxhQUFhLGFBQUFDLE1BQUEsQ0FBWUwsQ0FBQyxHQUFHQyxDQUFDLEdBQUcsRUFBRSxTQUFLO1FBQ3hERCxDQUFDLElBQUksQ0FBQztNQUNSO01BRUEsSUFBSUUsSUFBSSxDQUFDSSxTQUFTLENBQUNnQixRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDcEN5RCxrQkFBa0IsQ0FBQ0csUUFBUSxDQUFDO1FBQzVCO01BQ0Y7TUFDQUksU0FBUyxDQUFDbkQsSUFBSSxDQUFDakMsSUFBSSxDQUFDO0lBQ3RCO0lBRUEsSUFBSW9GLFNBQVMsQ0FBQzFFLE1BQU0sS0FBS0EsTUFBTSxFQUFFO01BQy9CLEtBQUssSUFBSVosRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxHQUFHc0YsU0FBUyxDQUFDMUUsTUFBTSxFQUFFWixFQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVDc0YsU0FBUyxDQUFDdEYsRUFBQyxDQUFDLENBQUNNLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxPQUFPLEVBQUVFLFdBQVcsQ0FBQ0csSUFBSSxDQUFDO01BQ3ZEO0lBQ0Y7SUFFQW1ELGFBQWEsQ0FBQ0ksS0FBSyxFQUFFO0lBQ3JCUixrQkFBa0IsQ0FBQ0csUUFBUSxDQUFDO0VBQzlCO0FBQ0YsQ0FBQztBQUVELCtEQUFlSCxrQkFBa0I7Ozs7Ozs7Ozs7O0FDdERqQztBQUNBLElBQU1uQixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSXJFLEtBQUssRUFBRXNFLEtBQUssRUFBRUksU0FBUyxFQUFLO0VBQzdDdUIsT0FBTyxDQUFDQyxHQUFHLENBQUN4QixTQUFTLENBQUM7RUFDdEIsSUFBTWxDLElBQUksR0FBRzhCLEtBQUssQ0FBQ0ksU0FBUyxDQUFDO0VBQzdCLElBQUlsQyxJQUFJLEVBQUU7SUFDUixJQUFNbkMsR0FBRyxHQUFHTCxLQUFLLENBQUNHLE1BQU0sQ0FBQ0csRUFBRTtJQUMzQixJQUFRZSxNQUFNLEdBQVdtQixJQUFJLENBQXJCbkIsTUFBTTtNQUFFb0IsSUFBSSxHQUFLRCxJQUFJLENBQWJDLElBQUk7SUFDcEIsSUFBTWxDLFFBQVEsR0FBR0MsUUFBUSxDQUFDSCxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0UsUUFBUSxHQUFHYyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBR0EsTUFBTSxHQUFHLENBQUMsSUFBSUYsTUFBTSxDQUFDakIsWUFBWSxFQUNsRSxPQUFPLEtBQUs7SUFDZCxJQUFJLENBQUNLLFFBQVEsR0FBR2MsTUFBTSxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUdBLE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQ0YsTUFBTSxDQUFDakIsWUFBWSxFQUN0RSxPQUFPLEtBQUs7SUFDZCxLQUNFLElBQUlPLENBQUMsR0FBR0YsUUFBUSxFQUFFRyxDQUFDLEdBQUcsQ0FBQyxFQUN2QkQsQ0FBQyxJQUFJRixRQUFRLEdBQUdjLE1BQU0sRUFBRVgsQ0FBQyxHQUFHVyxNQUFNLEVBQ2xDWixDQUFDLElBQUksQ0FBQyxFQUFFQyxDQUFDLElBQUksQ0FBQyxFQUNkO01BQ0EsSUFBSUMsSUFBSTtNQUNSLElBQUl3RixPQUFPO01BQ1gsSUFBSWhGLE1BQU0sQ0FBQ2pCLFlBQVksRUFBRTtRQUN2QlMsSUFBSSxHQUFHQyxRQUFRLENBQUN3RixjQUFjLENBQUMzRixDQUFDLENBQUM7UUFDakMwRixPQUFPLEdBQUd2RixRQUFRLENBQUNDLGFBQWEsMkJBQUFDLE1BQUEsQ0FBMEJMLENBQUMsU0FBSztNQUNsRSxDQUFDLE1BQU07UUFDTEUsSUFBSSxHQUFHQyxRQUFRLENBQUN3RixjQUFjLENBQUMzRixDQUFDLEdBQUdDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUN5RixPQUFPLEdBQUd2RixRQUFRLENBQUNDLGFBQWEsMkJBQUFDLE1BQUEsQ0FDTEwsQ0FBQyxHQUFHQyxDQUFDLEdBQUcsRUFBRSxTQUNwQztRQUNERCxDQUFDLElBQUksQ0FBQztNQUNSO01BQ0EsSUFBSUUsSUFBSSxDQUFDSSxTQUFTLENBQUNnQixRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDekMsT0FBTyxLQUFLO01BQ2Q7TUFDQXBCLElBQUksQ0FBQ0ksU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO01BQ3BDTCxJQUFJLENBQUNJLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxZQUFZLEVBQUVLLElBQUksQ0FBQztNQUN0QzBELE9BQU8sQ0FBQ3BGLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDckM7SUFDQSxJQUFNOEMsVUFBVSxHQUFHdEUsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDOUQsSUFBSXlELEtBQUssQ0FBQ0ksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO01BQ3hCUSxVQUFVLENBQUMzRCxXQUFXLEdBQUcrQyxLQUFLLENBQUNJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQ2pDLElBQUk7SUFDcEQ7SUFDQSxPQUFPLElBQUk7RUFDYjtFQUNBLE9BQU8sS0FBSztBQUNkLENBQUM7QUFFRCwrREFBZTRCLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDN0NXO0FBRUU7QUFDRTtBQUV2QyxJQUFNb0IsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUl6RixLQUFLLEVBQUs7RUFDMUIsSUFBUUcsTUFBTSxHQUFLSCxLQUFLLENBQWhCRyxNQUFNO0VBQ2QsSUFBSUEsTUFBTSxLQUFLSCxLQUFLLENBQUNJLGFBQWEsRUFBRTtFQUNwQyxJQUFRNEIsU0FBUyxHQUFLN0IsTUFBTSxDQUFwQjZCLFNBQVM7RUFDakIsSUFDRTdCLE1BQU0sQ0FBQ1ksU0FBUyxDQUFDZ0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwQzVCLE1BQU0sQ0FBQ1ksU0FBUyxDQUFDZ0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUV0QztFQUNGLElBQU1FLGNBQWMsR0FBRyxxREFBcUQ7RUFDNUUsSUFBTUMsU0FBUyxHQUFHRixTQUFTLENBQUNHLEtBQUssQ0FBQ0YsY0FBYyxDQUFDO0VBQ2pELElBQUlDLFNBQVMsRUFBRTtJQUNiLElBQU1HLFNBQVMsR0FBR0gsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM5Qi9CLE1BQU0sQ0FBQ1ksU0FBUyxDQUFDcUIsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMvQixJQUFNRSxXQUFXLEdBQUdnQyxrREFBVSxDQUFDLFVBQUM5QixJQUFJO01BQUEsT0FBS0EsSUFBSSxDQUFDQyxJQUFJLEtBQUtKLFNBQVM7SUFBQSxFQUFDO0lBQ2pFQyxXQUFXLENBQUNJLEdBQUcsRUFBRTtJQUNqQixJQUFJSixXQUFXLENBQUNLLE1BQU0sRUFBRSxFQUFFeEIsTUFBTSxDQUFDQyxhQUFhLENBQUN3QixJQUFJLENBQUNOLFdBQVcsQ0FBQztFQUNsRSxDQUFDLE1BQU07SUFDTG5DLE1BQU0sQ0FBQ1ksU0FBUyxDQUFDcUIsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUNuQztFQUNBWCx1REFBVSxFQUFFO0VBQ1pQLHdEQUFXLEVBQUU7QUFDZixDQUFDO0FBRUQsK0RBQWV1RSxRQUFROzs7Ozs7Ozs7OztBQzdCdkIsSUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLE1BQU0sRUFBSztFQUM3QixJQUFNQyxJQUFJLEdBQUczRixRQUFRLENBQUNvQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQzlDdUQsSUFBSSxDQUFDdkUsU0FBUyxHQUFHLGlCQUFpQjtFQUNsQ3VFLElBQUksQ0FBQ2pHLEVBQUUsR0FBR2dHLE1BQU07RUFFaEIsS0FBSyxJQUFJN0YsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEdBQUcsRUFBRUEsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUMvQixJQUFNK0YsS0FBSyxHQUFHNUYsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQ3dELEtBQUssQ0FBQ3hFLFNBQVMsR0FBRyxtQkFBbUI7SUFDckN3RSxLQUFLLENBQUNsRyxFQUFFLEdBQUdHLENBQUM7SUFDWjhGLElBQUksQ0FBQzVDLE1BQU0sQ0FBQzZDLEtBQUssQ0FBQztFQUNwQjtFQUVBLE9BQU9ELElBQUk7QUFDYixDQUFDO0FBRUQsK0RBQWVGLFVBQVU7Ozs7Ozs7Ozs7O0FDZnpCLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDeEJ0RixNQUFNLENBQUN1RixRQUFRLENBQUNDLE1BQU0sRUFBRTtBQUMxQixDQUFDO0FBRUQsK0RBQWVGLFdBQVc7Ozs7Ozs7Ozs7OztBQ0phO0FBRXZDLElBQU1HLGlCQUFpQixHQUFJLFlBQU07RUFDL0IsSUFBTW5DLEtBQUssR0FBRzdELFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDM0N5QixLQUFLLENBQUN6QyxTQUFTLEdBQUcsMkJBQTJCO0VBRTdDLElBQU1nRCxjQUFjLEdBQUdwRSxRQUFRLENBQUNvQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ3hEZ0MsY0FBYyxDQUFDaEQsU0FBUyxHQUFHLHdCQUF3QjtFQUVuRCxJQUFNNkUsVUFBVSxHQUFHakcsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM5QzZELFVBQVUsQ0FBQzdFLFNBQVMsR0FBRyxlQUFlO0VBQ3RDNkUsVUFBVSxDQUFDdEYsV0FBVyxHQUFHLFVBQVU7RUFFbkMsSUFBTXVGLFlBQVksR0FBR2xHLFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDckQ4RCxZQUFZLENBQUNDLElBQUksR0FBRyxRQUFRO0VBQzVCRCxZQUFZLENBQUM5RSxTQUFTLEdBQUcsbUJBQW1CO0VBQzVDOEUsWUFBWSxDQUFDdkYsV0FBVyxHQUFHLFlBQVk7RUFFdkN1RixZQUFZLENBQUMvQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUwQyxvREFBVyxDQUFDO0VBRW5EekIsY0FBYyxDQUFDckIsTUFBTSxDQUFDa0QsVUFBVSxFQUFFQyxZQUFZLENBQUM7RUFFL0NyQyxLQUFLLENBQUNkLE1BQU0sQ0FBQ3FCLGNBQWMsQ0FBQztFQUU1QixPQUFPUCxLQUFLO0FBQ2QsQ0FBQyxFQUFHO0FBRUosK0RBQWVtQyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzNCMUJJLElBQUk7RUFDUixTQUFBQSxLQUFZdkUsSUFBSSxFQUFFcEIsTUFBTSxFQUFFO0lBQUE0RixlQUFBLE9BQUFELElBQUE7SUFDeEIsSUFBSSxDQUFDdkUsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ3BCLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUM2RixNQUFNLEdBQUcsQ0FBQztFQUNqQjtFQUFDQyxZQUFBLENBQUFILElBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTNFLElBQUEsRUFBTTtNQUNKLElBQUksQ0FBQ3dFLE1BQU0sSUFBSSxDQUFDO0lBQ2xCO0VBQUM7SUFBQUUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTFFLE9BQUEsRUFBUztNQUNQLE9BQU8sSUFBSSxDQUFDdUUsTUFBTSxLQUFLLElBQUksQ0FBQzdGLE1BQU07SUFDcEM7RUFBQztFQUFBLE9BQUEyRixJQUFBO0FBQUE7QUFHSCxJQUFNTSxPQUFPLEdBQUcsSUFBSU4sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDdEMsSUFBTU8sVUFBVSxHQUFHLElBQUlQLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLElBQU1RLFNBQVMsR0FBRyxJQUFJUixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMxQyxJQUFNUyxTQUFTLEdBQUcsSUFBSVQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDMUMsSUFBTVUsVUFBVSxHQUFHLElBQUlWLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBRTdDLElBQU1XLFNBQVMsR0FBRyxJQUFJWCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN4QyxJQUFNWSxZQUFZLEdBQUcsSUFBSVosSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDOUMsSUFBTWEsV0FBVyxHQUFHLElBQUliLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLElBQU1jLFdBQVcsR0FBRyxJQUFJZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUM1QyxJQUFNZSxZQUFZLEdBQUcsSUFBSWYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFFeEMsSUFBTTFDLEtBQUssR0FBRyxDQUFDZ0QsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLENBQUM7QUFDckUsSUFBTWxHLE9BQU8sR0FBRyxDQUNyQm1HLFNBQVMsRUFDVEMsWUFBWSxFQUNaQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsWUFBWSxDQUNiO0FBRUQsK0RBQWVmLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNuQjtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx1R0FBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELG9DQUFvQyx5REFBeUQsdUJBQXVCLHFCQUFxQix1QkFBdUIsR0FBRyxTQUFTLHVGQUF1RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsc0NBQXNDLG9DQUFvQyw0Q0FBNEMsdUJBQXVCLHFCQUFxQix1QkFBdUIsR0FBRyxxQkFBcUI7QUFDMWtCO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnZDO0FBQzZHO0FBQ2pCO0FBQ29CO0FBQ2hILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMEJBQTBCLDZGQUFpQztBQUMzRDtBQUNBLG9FQUFvRSxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsV0FBVyxxQkFBcUIsK0NBQStDLEdBQUcsV0FBVyxzQkFBc0IsZ0JBQWdCLHlEQUF5RCw2SkFBNkosR0FBRyxhQUFhLGtFQUFrRSxpQ0FBaUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaURBQWlELEdBQUcsb0JBQW9CLDhCQUE4QixxQkFBcUIsdUJBQXVCLEdBQUcsV0FBVyxnQkFBZ0Isc0RBQXNELGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixzQkFBc0Isa0JBQWtCLHdCQUF3QixnREFBZ0QsR0FBRyx3QkFBd0IsZ0JBQWdCLGlCQUFpQiw2Q0FBNkMsOENBQThDLEdBQUcseUNBQXlDLCtDQUErQyxHQUFHLGFBQWEsZ0JBQWdCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixrQkFBa0Isa0RBQWtELHNCQUFzQixjQUFjLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFDQUFxQyxHQUFHLG1CQUFtQix3QkFBd0IsZ0JBQWdCLEdBQUcsWUFBWSx1QkFBdUIsZ0JBQWdCLGtCQUFrQixXQUFXLFlBQVksbUNBQW1DLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHFDQUFxQyxHQUFHLG1CQUFtQixlQUFlLHVCQUF1QixHQUFHLHVCQUF1QixpQkFBaUIsZ0JBQWdCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLDJCQUEyQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsdUJBQXVCLCtCQUErQixzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLDJCQUEyQix3QkFBd0IsaUJBQWlCLHlEQUF5RCxxQ0FBcUMsb0JBQW9CLEdBQUcsNkJBQTZCLHFCQUFxQixnQkFBZ0IscUJBQXFCLGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLDhCQUE4QixzQkFBc0Isa0VBQWtFLEdBQUcsd0JBQXdCLHlCQUF5QixvQkFBb0Isd0JBQXdCLGlCQUFpQix5REFBeUQsaUNBQWlDLEdBQUcsa0JBQWtCLDJCQUEyQixHQUFHLGlCQUFpQixtQ0FBbUMsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsY0FBYyw4QkFBOEIsR0FBRyxnQkFBZ0IsMkJBQTJCLEdBQUcsMkJBQTJCLCtFQUErRSxzQkFBc0IsbUJBQW1CLEtBQUssZ0NBQWdDLHNCQUFzQixLQUFLLEdBQUcsU0FBUyx5RkFBeUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSwwREFBMEQsOEJBQThCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxXQUFXLHFCQUFxQiwrQ0FBK0MsR0FBRyxXQUFXLHNCQUFzQixnQkFBZ0IseURBQXlELDZKQUE2SixHQUFHLGFBQWEsa0VBQWtFLGlDQUFpQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixpREFBaUQsR0FBRyxvQkFBb0IsOEJBQThCLHFCQUFxQix1QkFBdUIsR0FBRyxXQUFXLGdCQUFnQixzREFBc0Qsa0JBQWtCLDRCQUE0Qix3QkFBd0IsY0FBYyxHQUFHLHNCQUFzQixpQkFBaUIsa0JBQWtCLHNCQUFzQixrQkFBa0Isd0JBQXdCLGdEQUFnRCxHQUFHLHdCQUF3QixnQkFBZ0IsaUJBQWlCLDZDQUE2Qyw4Q0FBOEMsR0FBRyx5Q0FBeUMsK0NBQStDLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixrREFBa0Qsc0JBQXNCLGNBQWMsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIscUNBQXFDLEdBQUcsbUJBQW1CLHdCQUF3QixnQkFBZ0IsR0FBRyxZQUFZLHVCQUF1QixnQkFBZ0Isa0JBQWtCLFdBQVcsWUFBWSxtQ0FBbUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUNBQXFDLEdBQUcsbUJBQW1CLGVBQWUsdUJBQXVCLEdBQUcsdUJBQXVCLGlCQUFpQixnQkFBZ0IsNEJBQTRCLHdCQUF3QixrQkFBa0IsMkJBQTJCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyx1QkFBdUIsK0JBQStCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsMkJBQTJCLHdCQUF3QixpQkFBaUIseURBQXlELHFDQUFxQyxvQkFBb0IsR0FBRyw2QkFBNkIscUJBQXFCLGdCQUFnQixxQkFBcUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix3QkFBd0IsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsOEJBQThCLHNCQUFzQixrRUFBa0UsR0FBRyx3QkFBd0IseUJBQXlCLG9CQUFvQix3QkFBd0IsaUJBQWlCLHlEQUF5RCxpQ0FBaUMsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsaUJBQWlCLG1DQUFtQyxHQUFHLHdCQUF3Qiw0QkFBNEIsR0FBRyxjQUFjLDhCQUE4QixHQUFHLGdCQUFnQiwyQkFBMkIsR0FBRywyQkFBMkIsK0VBQStFLHNCQUFzQixtQkFBbUIsS0FBSyxnQ0FBZ0Msc0JBQXNCLEtBQUssR0FBRyxxQkFBcUI7QUFDaHBTO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTywrREFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ibGFua0FyZWEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jaGVja0Zvcldpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXB1dGVyR28uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ncmlkUm90YXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVyb1BvcHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGlnaGxpZ2h0QXJlYS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZUNvbXB1dGVyU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXlncm91bmRHcmlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVzdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZXN1bHRQb3B1cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBDbGFzcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZvbnRzL21hcmtlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXNlcXVlbmNlcyAqL1xuY29uc3QgYmxhbmtBcmVhID0gKGV2ZW50LCBzaGlwTGVuZ3RoLCBpc0hvcml6b250YWwpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgcmV0dXJuXG4gIGNvbnN0IHBvcyA9IGV2ZW50LnRhcmdldC5pZFxuICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHBvcywgMTApXG5cbiAgaWYgKChwb3NpdGlvbiArIHNoaXBMZW5ndGggLSAxKSAlIDEwIDwgc2hpcExlbmd0aCAtIDEgJiYgaXNIb3Jpem9udGFsKSByZXR1cm5cbiAgaWYgKChwb3NpdGlvbiArIHNoaXBMZW5ndGggKiAxMCkgJSAxMDAgPCBzaGlwTGVuZ3RoICogMTAgJiYgIWlzSG9yaXpvbnRhbClcbiAgICByZXR1cm5cblxuICBmb3IgKFxuICAgIGxldCBpID0gcG9zaXRpb24sIGogPSAwO1xuICAgIGkgPD0gcG9zaXRpb24gKyBzaGlwTGVuZ3RoLCBqIDwgc2hpcExlbmd0aDtcbiAgICBpICs9IDEsIGogKz0gMVxuICApIHtcbiAgICBsZXQgbm9kZVxuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdXNlci1wcmV2aWV3IGRpdltpZD1cIiR7aX1cIl1gKVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3VzZXItcHJldmlldyBkaXZbaWQ9XCIke2kgKyBqICogMTB9XCJdYClcbiAgICAgIGkgLT0gMVxuICAgIH1cbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuLWhvdmVyJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBibGFua0FyZWFcbiIsImltcG9ydCByZXN1bHRQb3B1cCBmcm9tICcuL3Jlc3VsdFBvcHVwJ1xuXG5jb25zdCBjaGVja0ZvcldpbiA9ICgpID0+IHtcbiAgaWYgKFxuICAgIHdpbmRvdy51c2VyU3Vua1NoaXBzLmxlbmd0aCA9PT0gNSAmJlxuICAgIHdpbmRvdy5jb21wdXRlclN1bmtTaGlwcy5sZW5ndGggPT09IDVcbiAgKSB7XG4gICAgcmVzdWx0UG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19yZXN1bHQnKS50ZXh0Q29udGVudCA9ICdpdCBpcyBhIGRyYXcnXG4gICAgcmVzdWx0UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfSBlbHNlIGlmICh3aW5kb3cudXNlclN1bmtTaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICByZXN1bHRQb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Jlc3VsdCcpLnRleHRDb250ZW50ID0gJ3lvdSB3aW4hJ1xuICAgIHJlc3VsdFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIH0gZWxzZSBpZiAod2luZG93LmNvbXB1dGVyU3Vua1NoaXBzLmxlbmd0aCA9PT0gNSkge1xuICAgIHJlc3VsdFBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fcmVzdWx0JykudGV4dENvbnRlbnQgPSAneW91IGxvc2UuLi4nXG4gICAgcmVzdWx0UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja0ZvcldpblxuIiwiaW1wb3J0IHsgbXlTaGlwcyB9IGZyb20gJy4vc2hpcENsYXNzJ1xuXG5jb25zdCBjb21wdXRlckdvID0gKCkgPT4ge1xuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgY29uc3QgcmFuZG9tTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1c2VyIGRpdltpZD1cIiR7cmFuZG9tSW5kZXh9XCJdYClcbiAgaWYgKFxuICAgIHJhbmRvbU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQtcmVkJykgfHxcbiAgICByYW5kb21Ob2RlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcy1ncmF5JylcbiAgKSB7XG4gICAgY29tcHV0ZXJHbygpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHJhbmRvbU5vZGVcbiAgY29uc3Qgc2hpcE5hbWVzUmVnZXggPSAvQ2FycmllcnxCYXR0bGVzaGlwfERlc3Ryb3llcnxTdWJtYXJpbmV8UGF0cm9sLWJvYXQvaVxuICBjb25zdCBtYXRjaE5hbWUgPSBjbGFzc05hbWUubWF0Y2goc2hpcE5hbWVzUmVnZXgpXG4gIGlmIChtYXRjaE5hbWUpIHtcbiAgICByYW5kb21Ob2RlLmNsYXNzTGlzdC5hZGQoJ2hpdC1yZWQnKVxuICAgIGNvbnN0IHNoaXBzTmFtZSA9IG1hdGNoTmFtZVswXVxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gbXlTaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IHNoaXBzTmFtZSlcbiAgICBjdXJyZW50U2hpcC5oaXQoKVxuICAgIGlmIChjdXJyZW50U2hpcC5pc1N1bmsoKSkgd2luZG93LmNvbXB1dGVyU3Vua1NoaXBzLnB1c2goY3VycmVudFNoaXApXG4gIH0gZWxzZSB7XG4gICAgcmFuZG9tTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzLWdyYXknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVyR29cbiIsImltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi5zdmcnXG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gIGZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyJ1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb3B5cmlnaHQuY2xhc3NOYW1lID0gJ2Zvb3Rlcl9fY29weXJpZ2h0J1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBBYnV6YXIgTWFtZWRvdmBcblxuICBjb25zdCBnaXRodWJJY29uID0gbmV3IEltYWdlKClcbiAgZ2l0aHViSWNvbi5jbGFzc05hbWUgPSAnZm9vdGVyX19pY29uJ1xuICBnaXRodWJJY29uLnNyYyA9IEljb25cbiAgZ2l0aHViSWNvbi5hbHQgPSAnZ2l0aHViIGljb24nXG5cbiAgY29uc3QgbGlua1RvR2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gIGxpbmtUb0dpdGh1Yi5jbGFzc05hbWUgPSAnZm9vdGVyX19saW5rJ1xuICBsaW5rVG9HaXRodWIuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRGFuaWVsZURlZm9lJ1xuICBsaW5rVG9HaXRodWIucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXIgbm9mb2xsb3cnXG5cbiAgbGlua1RvR2l0aHViLmFwcGVuZChnaXRodWJJY29uKVxuXG4gIGZvb3Rlci5hcHBlbmQoY29weXJpZ2h0LCBsaW5rVG9HaXRodWIpXG5cbiAgcmV0dXJuIGZvb3RlclxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXJcbiIsImNvbnN0IGNyZWF0ZUdyaWRSb3RhdGUgPSAoKCkgPT4ge1xuICBjb25zdCBncmlkUm90YXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgZ3JpZFJvdGF0ZUJ0bi5jbGFzc05hbWUgPSAncG9wdXBfX3JvdGF0ZSdcbiAgZ3JpZFJvdGF0ZUJ0bi50ZXh0Q29udGVudCA9ICdSb3RhdGUnXG5cbiAgd2luZG93LmlzSG9yaXpvbnRhbCA9IHRydWVcblxuICBjb25zdCB0b2dnbGVBeGlzID0gKCkgPT4ge1xuICAgIHdpbmRvdy5pc0hvcml6b250YWwgPSAhd2luZG93LmlzSG9yaXpvbnRhbFxuICB9XG5cbiAgZ3JpZFJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUF4aXMpXG5cbiAgcmV0dXJuIGdyaWRSb3RhdGVCdG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR3JpZFJvdGF0ZVxuIiwiY29uc3QgY3JlYXRlSGVhZGVyID0gKCgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInXG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGhlYWRlclRpdGxlLmNsYXNzTmFtZSA9ICdoZWFkZXJfX3RpdGxlJ1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdiYXR0bGVzaGlwJ1xuXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyVGl0bGUpXG5cbiAgcmV0dXJuIGhlYWRlclxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXJcbiIsImltcG9ydCBwbGF5Z3JvdW5kR3JpZCBmcm9tICcuL3BsYXlncm91bmRHcmlkJ1xuXG5pbXBvcnQgaGlnaGxpZ2h0QXJlYSBmcm9tICcuL2hpZ2hsaWdodEFyZWEnXG5pbXBvcnQgYmxhbmtBcmVhIGZyb20gJy4vYmxhbmtBcmVhJ1xuXG5pbXBvcnQgcGxhY2VTaGlwIGZyb20gJy4vcGxhY2VTaGlwJ1xuXG5pbXBvcnQgZ3JpZFJvdGF0ZUJ0biBmcm9tICcuL2dyaWRSb3RhdGUnXG5cbmltcG9ydCB7IHNoaXBzIH0gZnJvbSAnLi9zaGlwQ2xhc3MnXG5cbmNvbnN0IGNyZWF0ZUhlcm9Qb3B1cCA9ICgoKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBwbGF5Z3JvdW5kR3JpZCgndXNlci1wcmV2aWV3JylcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAgaGVyby1wb3B1cCdcblxuICBsZXQgc2hpcEluZGV4ID0gMFxuXG4gIGNvbnN0IGNhbGxiYWNrMSA9IChldmVudCkgPT5cbiAgICBoaWdobGlnaHRBcmVhKGV2ZW50LCBzaGlwc1tzaGlwSW5kZXhdLmxlbmd0aCwgd2luZG93LmlzSG9yaXpvbnRhbClcblxuICBjb25zdCBjYWxsYmFjazIgPSAoZXZlbnQpID0+XG4gICAgYmxhbmtBcmVhKGV2ZW50LCBzaGlwc1tzaGlwSW5kZXhdLmxlbmd0aCwgd2luZG93LmlzSG9yaXpvbnRhbClcblxuICBjb25zdCBjYWxsYmFjazMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBwbGFjZVNoaXAoZXZlbnQsIHNoaXBzLCBzaGlwSW5kZXgpXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgc2hpcEluZGV4ICs9IDFcbiAgICB9XG4gICAgaWYgKHNoaXBJbmRleCA9PT0gc2hpcHMubGVuZ3RoKSB7XG4gICAgICB1c2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNhbGxiYWNrMSlcbiAgICAgIHVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBjYWxsYmFjazIpXG4gICAgICB1c2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2szKVxuICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9XG4gIH1cblxuICB1c2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNhbGxiYWNrMSlcbiAgdXNlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbGxiYWNrMilcblxuICB1c2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2szKVxuXG4gIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcG9wdXBDb250YWluZXIuY2xhc3NOYW1lID0gJ3BvcHVwX19jb250YWluZXInXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdwb3B1cF9fdGl0bGUnXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gYmF0dGxlc2hpcCBnYW1lJ1xuXG4gIGNvbnN0IGFjdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgYWN0aW9uVGV4dC5jbGFzc05hbWUgPSAncG9wdXBfX2FjdGlvbidcbiAgYWN0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyICdcblxuICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzaGlwTmFtZS5jbGFzc05hbWUgPSAncG9wdXBfX3NoaXAtbmFtZSdcbiAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSAnQ2FycmllcidcblxuICBhY3Rpb25UZXh0LmFwcGVuZChzaGlwTmFtZSlcblxuICBwb3B1cENvbnRhaW5lci5hcHBlbmQodGl0bGUsIGFjdGlvblRleHQsIGdyaWRSb3RhdGVCdG4sIHVzZXIpXG5cbiAgcG9wdXAuYXBwZW5kKHBvcHVwQ29udGFpbmVyKVxuXG4gIHJldHVybiBwb3B1cFxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZXJvUG9wdXBcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXNlcXVlbmNlcyAqL1xuaW1wb3J0IGJsYW5rQXJlYSBmcm9tICcuL2JsYW5rQXJlYSdcblxuY29uc3QgaGlnaGxpZ2h0QXJlYSA9IChldmVudCwgc2hpcExlbmd0aCwgaXNIb3Jpem9udGFsKSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVyblxuICBjb25zdCBwb3MgPSBldmVudC50YXJnZXQuaWRcbiAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludChwb3MsIDEwKVxuICBpZiAoKHBvc2l0aW9uICsgc2hpcExlbmd0aCAtIDEpICUgMTAgPCBzaGlwTGVuZ3RoIC0gMSAmJiBpc0hvcml6b250YWwpIHJldHVyblxuICBpZiAoKHBvc2l0aW9uICsgc2hpcExlbmd0aCAqIDEwKSAlIDEwMCA8IHNoaXBMZW5ndGggKiAxMCAmJiAhaXNIb3Jpem9udGFsKVxuICAgIHJldHVyblxuXG4gIGZvciAoXG4gICAgbGV0IGkgPSBwb3NpdGlvbiwgaiA9IDA7XG4gICAgaSA8PSBwb3NpdGlvbiArIHNoaXBMZW5ndGgsIGogPCBzaGlwTGVuZ3RoO1xuICAgIGkgKz0gMSwgaiArPSAxXG4gICkge1xuICAgIGxldCBub2RlXG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1c2VyLXByZXZpZXcgZGl2W2lkPVwiJHtpfVwiXWApXG4gICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JsYWNrLXNoaXAnKSkge1xuICAgICAgICBibGFua0FyZWEoZXZlbnQsIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdXNlci1wcmV2aWV3IGRpdltpZD1cIiR7aSArIGogKiAxMH1cIl1gKVxuICAgICAgaSAtPSAxXG4gICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JsYWNrLXNoaXAnKSkge1xuICAgICAgICBibGFua0FyZWEoZXZlbnQsIHNoaXBMZW5ndGgsIGlzSG9yaXpvbnRhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnZ3JlZW4taG92ZXInKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhpZ2hsaWdodEFyZWFcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW5zJ1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3RlcidcbmltcG9ydCBwb3B1cCBmcm9tICcuL2hlcm9Qb3B1cCdcbmltcG9ydCByZXN1bHRQb3B1cCBmcm9tICcuL3Jlc3VsdFBvcHVwJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnRcbiAgYm9keS5jbGFzc05hbWUgPSAncGFnZSdcblxuICBib2R5LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3RlciwgcG9wdXAsIHJlc3VsdFBvcHVwKVxufVxuXG5BcHAoKVxuIiwiaW1wb3J0IHBsYXlncm91bmRHcmlkIGZyb20gJy4vcGxheWdyb3VuZEdyaWQnXG5cbmltcG9ydCBwbGFjZUNvbXB1dGVyU2hpcHMgZnJvbSAnLi9wbGFjZUNvbXB1dGVyU2hpcHMnXG5cbmltcG9ydCBwbGF5R2FtZSBmcm9tICcuL3BsYXlHYW1lJ1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJ1xuXG4gIGNvbnN0IHVzZXIgPSBwbGF5Z3JvdW5kR3JpZCgndXNlcicpXG5cbiAgY29uc3QgY29tcHV0ZXIgPSBwbGF5Z3JvdW5kR3JpZCgnY29tcHV0ZXInKVxuXG4gIHdpbmRvdy51c2VyU3Vua1NoaXBzID0gW11cbiAgd2luZG93LmNvbXB1dGVyU3Vua1NoaXBzID0gW11cblxuICBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpXG4gIGNvbXB1dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUdhbWUpXG5cbiAgbWFpbi5hcHBlbmQodXNlciwgY29tcHV0ZXIpXG4gIHJldHVybiBtYWluXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cbmltcG9ydCB7IHNoaXBzIH0gZnJvbSAnLi9zaGlwQ2xhc3MnXG5cbmNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbLi4uc2hpcHNdXG5cbmNvbnN0IHBsYWNlQ29tcHV0ZXJTaGlwcyA9IChjb21wdXRlcikgPT4ge1xuICBpZiAoY29tcHV0ZXJTaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmFuZG9tU3RhcnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IGNvbXB1dGVyU2hpcHNbMF1cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gY3VycmVudFNoaXBcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41XG4gICAgaWYgKChyYW5kb21TdGFydEluZGV4ICsgbGVuZ3RoIC0gMSkgJSAxMCA8IGxlbmd0aCAtIDEgJiYgaXNIb3Jpem9udGFsKSB7XG4gICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKChyYW5kb21TdGFydEluZGV4ICsgbGVuZ3RoICogMTApICUgMTAwIDwgbGVuZ3RoICogMTAgJiYgIWlzSG9yaXpvbnRhbCkge1xuICAgICAgcGxhY2VDb21wdXRlclNoaXBzKGNvbXB1dGVyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcE5vZGVzID0gW11cblxuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IHJhbmRvbVN0YXJ0SW5kZXgsIGogPSAwO1xuICAgICAgaSA8PSByYW5kb21TdGFydEluZGV4ICsgbGVuZ3RoLCBqIDwgbGVuZ3RoO1xuICAgICAgaSArPSAxLCBqICs9IDFcbiAgICApIHtcbiAgICAgIGxldCBub2RlXG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIG5vZGUgPSBjb21wdXRlci5xdWVyeVNlbGVjdG9yKGBkaXZbaWQ9XCIke2l9XCJdYClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBjb21wdXRlci5xdWVyeVNlbGVjdG9yKGBkaXZbaWQ9XCIke2kgKyBqICogMTB9XCJdYClcbiAgICAgICAgaSAtPSAxXG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygndGFrZW4nKSkge1xuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2hpcE5vZGVzLnB1c2gobm9kZSlcbiAgICB9XG5cbiAgICBpZiAoc2hpcE5vZGVzLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBOb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzaGlwTm9kZXNbaV0uY2xhc3NMaXN0LmFkZCgndGFrZW4nLCBjdXJyZW50U2hpcC5uYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVyU2hpcHMuc2hpZnQoKVxuICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyhjb21wdXRlcilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGFjZUNvbXB1dGVyU2hpcHNcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXNlcXVlbmNlcyAqL1xuY29uc3QgcGxhY2VTaGlwID0gKGV2ZW50LCBzaGlwcywgc2hpcEluZGV4KSA9PiB7XG4gIGNvbnNvbGUubG9nKHNoaXBJbmRleClcbiAgY29uc3Qgc2hpcCA9IHNoaXBzW3NoaXBJbmRleF1cbiAgaWYgKHNoaXApIHtcbiAgICBjb25zdCBwb3MgPSBldmVudC50YXJnZXQuaWRcbiAgICBjb25zdCB7IGxlbmd0aCwgbmFtZSB9ID0gc2hpcFxuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQocG9zLCAxMClcbiAgICBpZiAoKHBvc2l0aW9uICsgbGVuZ3RoIC0gMSkgJSAxMCA8IGxlbmd0aCAtIDEgJiYgd2luZG93LmlzSG9yaXpvbnRhbClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGlmICgocG9zaXRpb24gKyBsZW5ndGggKiAxMCkgJSAxMDAgPCBsZW5ndGggKiAxMCAmJiAhd2luZG93LmlzSG9yaXpvbnRhbClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IHBvc2l0aW9uLCBqID0gMDtcbiAgICAgIGkgPD0gcG9zaXRpb24gKyBsZW5ndGgsIGogPCBsZW5ndGg7XG4gICAgICBpICs9IDEsIGogKz0gMVxuICAgICkge1xuICAgICAgbGV0IG5vZGVcbiAgICAgIGxldCBuZXdOb2RlXG4gICAgICBpZiAod2luZG93LmlzSG9yaXpvbnRhbCkge1xuICAgICAgICBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSlcbiAgICAgICAgbmV3Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1c2VyLXByZXZpZXcgZGl2W2lkPVwiJHtpfVwiXWApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSArIGogKiAxMClcbiAgICAgICAgbmV3Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCN1c2VyLXByZXZpZXcgZGl2W2lkPVwiJHtpICsgaiAqIDEwfVwiXWBcbiAgICAgICAgKVxuICAgICAgICBpIC09IDFcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygnYmxhY2stc2hpcCcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbi1ob3ZlcicpXG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2JsYWNrLXNoaXAnLCBuYW1lKVxuICAgICAgbmV3Tm9kZS5jbGFzc0xpc3QuYWRkKCdibGFjay1zaGlwJylcbiAgICB9XG4gICAgY29uc3QgYWN0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc2hpcC1uYW1lJylcbiAgICBpZiAoc2hpcHNbc2hpcEluZGV4ICsgMV0pIHtcbiAgICAgIGFjdGlvblRleHQudGV4dENvbnRlbnQgPSBzaGlwc1tzaGlwSW5kZXggKyAxXS5uYW1lXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYWNlU2hpcFxuIiwiaW1wb3J0IHsgc2hpcHMgfSBmcm9tICcuL3NoaXBDbGFzcydcblxuaW1wb3J0IGNvbXB1dGVyR28gZnJvbSAnLi9jb21wdXRlckdvJ1xuaW1wb3J0IGNoZWNrRm9yV2luIGZyb20gJy4vY2hlY2tGb3JXaW4nXG5cbmNvbnN0IHBsYXlHYW1lID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuICBpZiAodGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm5cbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRhcmdldFxuICBpZiAoXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGl0LXJlZCcpIHx8XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWlzcy1ncmF5JylcbiAgKVxuICAgIHJldHVyblxuICBjb25zdCBzaGlwTmFtZXNSZWdleCA9IC9DYXJyaWVyfEJhdHRsZXNoaXB8RGVzdHJveWVyfFN1Ym1hcmluZXxQYXRyb2wtYm9hdC9pXG4gIGNvbnN0IG1hdGNoTmFtZSA9IGNsYXNzTmFtZS5tYXRjaChzaGlwTmFtZXNSZWdleClcbiAgaWYgKG1hdGNoTmFtZSkge1xuICAgIGNvbnN0IHNoaXBzTmFtZSA9IG1hdGNoTmFtZVswXVxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaXQtcmVkJylcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcHNOYW1lKVxuICAgIGN1cnJlbnRTaGlwLmhpdCgpXG4gICAgaWYgKGN1cnJlbnRTaGlwLmlzU3VuaygpKSB3aW5kb3cudXNlclN1bmtTaGlwcy5wdXNoKGN1cnJlbnRTaGlwKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzLWdyYXknKVxuICB9XG4gIGNvbXB1dGVyR28oKVxuICBjaGVja0ZvcldpbigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlHYW1lXG4iLCJjb25zdCBjcmVhdGVHcmlkID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGdyaWQuY2xhc3NOYW1lID0gJ3BsYXlncm91bmQtZ3JpZCdcbiAgZ3JpZC5pZCA9IHBsYXllclxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYmxvY2suY2xhc3NOYW1lID0gJ3BsYXlncm91bmRfX2Jsb2NrJ1xuICAgIGJsb2NrLmlkID0gaVxuICAgIGdyaWQuYXBwZW5kKGJsb2NrKVxuICB9XG5cbiAgcmV0dXJuIGdyaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR3JpZFxuIiwiY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXN0YXJ0R2FtZVxuIiwiaW1wb3J0IHJlc3RhcnRHYW1lIGZyb20gJy4vcmVzdGFydEdhbWUnXG5cbmNvbnN0IGNyZWF0ZVJlc3VsdFBvcHVwID0gKCgpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAgaGlkZGVuIHJlc3VsdC1wb3B1cCdcblxuICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICBwb3B1cENvbnRhaW5lci5jbGFzc05hbWUgPSAncG9wdXBfX3ZpY3Rvcnktc2VjdGlvbidcblxuICBjb25zdCByZXN1bHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHJlc3VsdFRleHQuY2xhc3NOYW1lID0gJ3BvcHVwX19yZXN1bHQnXG4gIHJlc3VsdFRleHQudGV4dENvbnRlbnQgPSAneW91IHdpbiEnXG5cbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcGxheUFnYWluQnRuLnR5cGUgPSAnYnV0dG9uJ1xuICBwbGF5QWdhaW5CdG4uY2xhc3NOYW1lID0gJ3BvcHVwX19wbGF5LWFnYWluJ1xuICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSAncGxheSBhZ2FpbidcblxuICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSlcblxuICBwb3B1cENvbnRhaW5lci5hcHBlbmQocmVzdWx0VGV4dCwgcGxheUFnYWluQnRuKVxuXG4gIHBvcHVwLmFwcGVuZChwb3B1cENvbnRhaW5lcilcblxuICByZXR1cm4gcG9wdXBcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVzdWx0UG9wdXBcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGlzLmRhbWFnZSA9IDBcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmRhbWFnZSArPSAxXG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aFxuICB9XG59XG5cbmNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCgnQ2FycmllcicsIDUpXG5jb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoJ0JhdHRsZXNoaXAnLCA0KVxuY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoJ0Rlc3Ryb3llcicsIDMpXG5jb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgnU3VibWFyaW5lJywgMylcbmNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcCgnUGF0cm9sLWJvYXQnLCAyKVxuXG5jb25zdCBteUNhcnJpZXIgPSBuZXcgU2hpcCgnQ2FycmllcicsIDUpXG5jb25zdCBteUJhdHRsZXNoaXAgPSBuZXcgU2hpcCgnQmF0dGxlc2hpcCcsIDQpXG5jb25zdCBteURlc3Ryb3llciA9IG5ldyBTaGlwKCdEZXN0cm95ZXInLCAzKVxuY29uc3QgbXlTdWJtYXJpbmUgPSBuZXcgU2hpcCgnU3VibWFyaW5lJywgMylcbmNvbnN0IG15UGF0cm9sQm9hdCA9IG5ldyBTaGlwKCdQYXRyb2wtYm9hdCcsIDIpXG5cbmV4cG9ydCBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF1cbmV4cG9ydCBjb25zdCBteVNoaXBzID0gW1xuICBteUNhcnJpZXIsXG4gIG15QmF0dGxlc2hpcCxcbiAgbXlEZXN0cm95ZXIsXG4gIG15U3VibWFyaW5lLFxuICBteVBhdHJvbEJvYXQsXG5dXG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1Blcm1hbmVudE1hcmtlci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb250cy9tYXJrZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLDRDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcic7XFxuICBzcmM6IHVybCguL1Blcm1hbmVudE1hcmtlci1SZWd1bGFyLnR0Zik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL2ZvbnRzL21hcmtlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBjbGFtcCgxNTBweCwgMjB2aCwgNTAwcHgpO1xcbn1cXG5cXG4ucGFnZSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBkMmZmLCAjM2E3YmQ1KTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAyMHB4IDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkgLSA3MHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi5wbGF5Z3JvdW5kLWdyaWQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ucGxheWdyb3VuZF9fYmxvY2sge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5wbGF5Z3JvdW5kX19ibG9jazpudGgtb2YtdHlwZSgxMG4pIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm94LXNoYWRvdzogLTIwcHggMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5mb290ZXJfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xcbn1cXG5cXG4uZm9vdGVyX19pY29uIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICB3aWR0aDogNHJlbTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wb3B1cC5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnBvcHVwX19jb250YWluZXIge1xcbiAgd2lkdGg6IDU2MHB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBiYWNrZ3JvdW5kOiBmbG9yYWx3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucG9wdXBfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbn1cXG5cXG4ucG9wdXBfX2FjdGlvbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5wb3B1cF9fc2hpcC1uYW1lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3B1cF9fcm90YXRlIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgcGFkZGluZzogMS41cmVtIDIuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYsICMzYTdiZDUpO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cF9fdmljdG9yeS1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4ucG9wdXBfX3Jlc3VsdCB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucG9wdXBfX3BsYXktYWdhaW4ge1xcbiAgcGFkZGluZzogMS41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBkMmZmLCAjM2E3YmQ1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5ncmVlbi1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYmxhY2stc2hpcCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5lbmVteS1oaWRkZW4tc2hpcCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmhpdC1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLm1pc3MtZ3JheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgLmZvb3Rlcl9fbGluazpob3ZlcixcXG4gIC5wb3B1cF9fcm90YXRlOmhvdmVyLFxcbiAgLnBvcHVwX19wbGF5LWFnYWluOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAucGxheWdyb3VuZF9fYmxvY2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG9EQUFvRDtFQUNwRDt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlEQUFpRDtFQUNqRCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9EQUFvRDtFQUNwRCxnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7OztJQUdFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi4vZm9udHMvbWFya2VyLmNzcyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLWhlYWRlci1oZWlnaHQ6IGNsYW1wKDE1MHB4LCAyMHZoLCA1MDBweCk7XFxufVxcblxcbi5wYWdlIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYsICMzYTdiZDUpO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDIwcHggMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uaGVhZGVyX190aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDcwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLnBsYXlncm91bmQtZ3JpZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm94LXNpemluZzogdW5zZXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5wbGF5Z3JvdW5kX19ibG9jayB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLnBsYXlncm91bmRfX2Jsb2NrOm50aC1vZi10eXBlKDEwbikge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3gtc2hhZG93OiAtMjBweCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmZvb3Rlcl9fbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5mb290ZXJfX2ljb24ge1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBvcHVwLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucG9wdXBfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogNTYwcHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3B1cF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcblxcbi5wb3B1cF9fYWN0aW9uIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnBvcHVwX19zaGlwLW5hbWUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBvcHVwX19yb3RhdGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBwYWRkaW5nOiAxLjVyZW0gMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwZDJmZiwgIzNhN2JkNSk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwX192aWN0b3J5LXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBnYXA6IDRyZW07XFxufVxcblxcbi5wb3B1cF9fcmVzdWx0IHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wb3B1cF9fcGxheS1hZ2FpbiB7XFxuICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYsICMzYTdiZDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuXFxuLmdyZWVuLWhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5ibGFjay1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmVuZW15LWhpZGRlbi1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaGl0LXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4ubWlzcy1ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAuZm9vdGVyX19saW5rOmhvdmVyLFxcbiAgLnBvcHVwX19yb3RhdGU6aG92ZXIsXFxuICAucG9wdXBfX3BsYXktYWdhaW46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG5cXG4gIC5wbGF5Z3JvdW5kX19ibG9jazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiYmxhbmtBcmVhIiwiZXZlbnQiLCJzaGlwTGVuZ3RoIiwiaXNIb3Jpem9udGFsIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInBvcyIsImlkIiwicG9zaXRpb24iLCJwYXJzZUludCIsImkiLCJqIiwibm9kZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlc3VsdFBvcHVwIiwiY2hlY2tGb3JXaW4iLCJ3aW5kb3ciLCJ1c2VyU3Vua1NoaXBzIiwibGVuZ3RoIiwiY29tcHV0ZXJTdW5rU2hpcHMiLCJ0ZXh0Q29udGVudCIsIm15U2hpcHMiLCJjb21wdXRlckdvIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Ob2RlIiwiY29udGFpbnMiLCJjbGFzc05hbWUiLCJzaGlwTmFtZXNSZWdleCIsIm1hdGNoTmFtZSIsIm1hdGNoIiwiYWRkIiwic2hpcHNOYW1lIiwiY3VycmVudFNoaXAiLCJmaW5kIiwic2hpcCIsIm5hbWUiLCJoaXQiLCJpc1N1bmsiLCJwdXNoIiwiSWNvbiIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImNyZWF0ZUVsZW1lbnQiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnaXRodWJJY29uIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJsaW5rVG9HaXRodWIiLCJocmVmIiwicmVsIiwiYXBwZW5kIiwiY3JlYXRlR3JpZFJvdGF0ZSIsImdyaWRSb3RhdGVCdG4iLCJ0b2dnbGVBeGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUhlYWRlciIsImhlYWRlciIsImhlYWRlclRpdGxlIiwicGxheWdyb3VuZEdyaWQiLCJoaWdobGlnaHRBcmVhIiwicGxhY2VTaGlwIiwic2hpcHMiLCJjcmVhdGVIZXJvUG9wdXAiLCJ1c2VyIiwicG9wdXAiLCJzaGlwSW5kZXgiLCJjYWxsYmFjazEiLCJjYWxsYmFjazIiLCJjYWxsYmFjazMiLCJyZXN1bHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicG9wdXBDb250YWluZXIiLCJ0aXRsZSIsImFjdGlvblRleHQiLCJzaGlwTmFtZSIsIm1haW4iLCJBcHAiLCJfZG9jdW1lbnQiLCJib2R5IiwicGxhY2VDb21wdXRlclNoaXBzIiwicGxheUdhbWUiLCJjcmVhdGVNYWluIiwiY29tcHV0ZXIiLCJjb21wdXRlclNoaXBzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicmFuZG9tU3RhcnRJbmRleCIsInNoaXBOb2RlcyIsInNoaWZ0IiwiY29uc29sZSIsImxvZyIsIm5ld05vZGUiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUdyaWQiLCJwbGF5ZXIiLCJncmlkIiwiYmxvY2siLCJyZXN0YXJ0R2FtZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY3JlYXRlUmVzdWx0UG9wdXAiLCJyZXN1bHRUZXh0IiwicGxheUFnYWluQnRuIiwidHlwZSIsIlNoaXAiLCJfY2xhc3NDYWxsQ2hlY2siLCJkYW1hZ2UiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sQm9hdCIsIm15Q2FycmllciIsIm15QmF0dGxlc2hpcCIsIm15RGVzdHJveWVyIiwibXlTdWJtYXJpbmUiLCJteVBhdHJvbEJvYXQiXSwic291cmNlUm9vdCI6IiJ9
