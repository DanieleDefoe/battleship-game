import { ships } from './shipClass'

import computerGo from './computerGo'
import checkForWin from './checkForWin'

const playGame = (event) => {
  const { target } = event
  if (target === event.currentTarget) return
  const { className } = target
  if (
    target.classList.contains('hit-red') ||
    target.classList.contains('miss-gray')
  )
    return
  const shipNamesRegex = /Carrier|Battleship|Destroyer|Submarine|Patrol-boat/i
  const matchName = className.match(shipNamesRegex)
  if (matchName) {
    const shipsName = matchName[0]
    target.classList.add('hit-red')
    const currentShip = ships.find((ship) => ship.name === shipsName)
    currentShip.hit()
    if (currentShip.isSunk()) window.userSunkShips.push(currentShip)
  } else {
    target.classList.add('miss-gray')
  }
  computerGo()
  checkForWin()
}

export default playGame
