/* eslint-disable no-continue */
/* eslint-disable no-sequences */
import Ship from './shipClass'

const placeComputerShips = (computer) => {
  const carrier = new Ship('Carrier', 5)
  const battleship = new Ship('Battleship', 4)
  const destroyer = new Ship('Destroyer', 3)
  const submarine = new Ship('Submarine', 3)
  const patrolBoat = new Ship('Patrol-boat', 2)

  const ships = [carrier, battleship, destroyer, submarine, patrolBoat]

  for (let i = 0; i < ships.length; i += 1) {
    const currentShip = ships[i]
    const { length } = currentShip
    const isHorizontal = Math.random() < 0.5

    const randomStartIndex = Math.floor(Math.random() * 100)
    if ((randomStartIndex + length - 1) % 10 < length - 1 && isHorizontal) {
      i -= 1
      continue
    }
    if ((randomStartIndex + length * 10) % 100 < length * 10 && !isHorizontal) {
      i -= 1
      continue
    }
    if (
      computer
        .querySelector(`div[id="${randomStartIndex}"]`)
        .classList.contains('black-ship')
    ) {
      i -= 1
      continue
    }

    for (
      let j = randomStartIndex, k = 0;
      j <= randomStartIndex + length, k < length;
      j += 1, k += 1
    ) {
      let node
      if (isHorizontal) {
        node = computer.querySelector(`div[id="${j}"]`)
      } else {
        node = computer.querySelector(`div[id="${j + k * 10}"]`)
        j -= 1
      }
      if (node.classList.contains('black-ship')) {
        i -= 1
        continue
      }
      node.classList.add('black-ship', currentShip.name)
    }
  }
}

export default placeComputerShips
