import playgroundGrid from './playgroundGrid'

import highlightArea from './highlightArea'
import blankArea from './blankArea'

import gridRotateBtn from './gridRotate'

const createHeroPopup = (() => {
  const user = playgroundGrid('user')

  user.addEventListener('mouseover', (event) =>
    highlightArea(event, 3, window.isHorizontal)
  )
  user.addEventListener('mouseout', (event) =>
    blankArea(event, 3, window.isHorizontal)
  )

  const popup = document.createElement('section')
  popup.className = 'popup'

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
