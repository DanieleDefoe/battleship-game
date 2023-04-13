/* eslint-disable no-sequences */
const blankArea = (event, shipLength, isHorizontal) => {
  const pos = event.target.id
  const position = parseInt(pos, 10)
  for (
    let i = position, j = 0;
    i <= position + shipLength, j <= shipLength;
    i += 1, j += 1
  ) {
    let node
    if (isHorizontal) {
      node = document.getElementById(i)
    } else {
      node = document.getElementById(i + j * 10)
      i -= 1
    }
    node.classList.remove('green-hover')
  }
}

export default blankArea
