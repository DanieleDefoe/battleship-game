/* eslint-disable no-continue */
/* eslint-disable no-sequences */
import { ships } from './shipClass'

const computerShips = [...ships]

const placeComputerShips = (computer) => {
  if (computerShips.length > 0) {
    const randomStartIndex = Math.floor(Math.random() * 100)
    const currentShip = computerShips[0]
    const { length } = currentShip
    const isHorizontal = Math.random() < 0.5
    if ((randomStartIndex + length - 1) % 10 < length - 1 && isHorizontal) {
      placeComputerShips(computer)
      return
    }
    if ((randomStartIndex + length * 10) % 100 < length * 10 && !isHorizontal) {
      placeComputerShips(computer)
      return
    }

    const shipNodes = []

    for (
      let i = randomStartIndex, j = 0;
      i <= randomStartIndex + length, j < length;
      i += 1, j += 1
    ) {
      let node
      if (isHorizontal) {
        node = computer.querySelector(`div[id="${i}"]`)
      } else {
        node = computer.querySelector(`div[id="${i + j * 10}"]`)
        i -= 1
      }

      if (node.classList.contains('taken')) {
        placeComputerShips(computer)
        return
      }
      shipNodes.push(node)
    }

    if (shipNodes.length === length) {
      for (let i = 0; i < shipNodes.length; i += 1) {
        shipNodes[i].classList.add('taken', currentShip.name)
      }
    }

    computerShips.shift()
    placeComputerShips(computer)
  }
}

export default placeComputerShips
