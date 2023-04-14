import playgroundGrid from './playgroundGrid'

import highlightArea from './highlightArea'
import blankArea from './blankArea'

import placeShip from './placeShip'

import gridRotateBtn from './gridRotate'

import { ships } from './shipClass'

const createHeroPopup = (() => {
  const user = playgroundGrid('user-preview')

  const popup = document.createElement('section')
  popup.className = 'popup'

  let shipIndex = 0

  const callback1 = (event) =>
    highlightArea(event, ships[shipIndex].length, window.isHorizontal)

  const callback2 = (event) =>
    blankArea(event, ships[shipIndex].length, window.isHorizontal)

  const callback3 = (event) => {
    const result = placeShip(event, ships, shipIndex)
    if (result) {
      shipIndex += 1
    }
    if (shipIndex === ships.length) {
      user.removeEventListener('mouseover', callback1)
      user.removeEventListener('mouseout', callback2)
      user.removeEventListener('click', callback3)
      popup.classList.add('hidden')
    }
  }

  user.addEventListener('mouseover', callback1)
  user.addEventListener('mouseout', callback2)

  user.addEventListener('click', callback3)

  const popupContainer = document.createElement('div')
  popupContainer.className = 'popup__container'

  const title = document.createElement('h2')
  title.className = 'popup__title'
  title.textContent = 'Welcome to battleship game'

  const actionText = document.createElement('p')
  actionText.className = 'popup__action'
  actionText.textContent = 'Place your '

  const shipName = document.createElement('span')
  shipName.className = 'popup__ship-name'
  shipName.textContent = 'Carrier'

  actionText.append(shipName)

  popupContainer.append(title, actionText, gridRotateBtn, user)

  popup.append(popupContainer)

  return popup
})()

export default createHeroPopup
