/* eslint-disable no-sequences */
const placeShip = (event, ships, shipIndex) => {
  console.log(shipIndex)
  const ship = ships[shipIndex]
  if (ship) {
    const pos = event.target.id
    const { length, name } = ship
    const position = parseInt(pos, 10)
    if ((position + length - 1) % 10 < length - 1 && window.isHorizontal)
      return false
    if ((position + length * 10) % 100 < length * 10 && !window.isHorizontal)
      return false
    for (
      let i = position, j = 0;
      i <= position + length, j < length;
      i += 1, j += 1
    ) {
      let node
      let newNode
      if (window.isHorizontal) {
        node = document.getElementById(i)
        newNode = document.querySelector(`#user-preview div[id="${i}"]`)
      } else {
        node = document.getElementById(i + j * 10)
        newNode = document.querySelector(
          `#user-preview div[id="${i + j * 10}"]`
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
    const actionText = document.querySelector('.popup__ship-name')
    if (ships[shipIndex + 1]) {
      actionText.textContent = ships[shipIndex + 1].name
    }
    return true
  }
  return false
}

export default placeShip
