import { myShips } from './shipClass'

const computerGo = () => {
  const randomIndex = Math.floor(Math.random() * 100)
  const randomNode = document.querySelector(`#user div[id="${randomIndex}"]`)
  if (
    randomNode.classList.contains('hit-red') ||
    randomNode.classList.contains('miss-gray')
  ) {
    computerGo()
    return
  }
  const { className } = randomNode
  const shipNamesRegex = /Carrier|Battleship|Destroyer|Submarine|Patrol-boat/i
  const matchName = className.match(shipNamesRegex)
  if (matchName) {
    randomNode.classList.add('hit-red')
    const shipsName = matchName[0]
    const currentShip = myShips.find((ship) => ship.name === shipsName)
    currentShip.hit()
    if (currentShip.isSunk()) window.computerSunkShips.push(currentShip)
  } else {
    randomNode.classList.add('miss-gray')
  }
}

export default computerGo
