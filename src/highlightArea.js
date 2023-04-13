/* eslint-disable no-sequences */
const highlightArea = (event, shipLength, isHorizontal) => {
  const pos = event.target.id
  const position = parseInt(pos, 10)
  if ((position + shipLength) % 10 < shipLength && isHorizontal) return
  if ((position + shipLength * 10) % 100 < shipLength * 10) return

  console.log(position, position + shipLength * 10)

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
    node.classList.add('green-hover')
  }
}

export default highlightArea
