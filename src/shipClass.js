class Ship {
  constructor(name, length) {
    this.name = name
    this.length = length
    this.damage = 0
    this.isSunk = false
  }

  hit() {
    this.damage += 1
  }

  isSunk() {
    return this.damage === this.length
  }
}

const carrier = new Ship('Carrier', 5)
const battleship = new Ship('Battleship', 4)
const destroyer = new Ship('Destroyer', 3)
const submarine = new Ship('Submarine', 3)
const patrolBoat = new Ship('Patrol-boat', 2)

export const ships = [carrier, battleship, destroyer, submarine, patrolBoat]

export default Ship
