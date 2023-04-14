/* eslint-disable no-sequences */
import blankArea from './blankArea'

const highlightArea = (event, shipLength, isHorizontal) => {
  if (event.target === event.currentTarget) return
  const pos = event.target.id
  const position = parseInt(pos, 10)
  if ((position + shipLength - 1) % 10 < shipLength - 1 && isHorizontal) return
  if ((position + shipLength * 10) % 100 < shipLength * 10 && !isHorizontal)
    return

  for (
    let i = position, j = 0;
    i <= position + shipLength, j < shipLength;
    i += 1, j += 1
  ) {
    let node
    if (isHorizontal) {
      node = document.querySelector(`#user-preview div[id="${i}"]`)
      if (node.classList.contains('black-ship')) {
        blankArea(event, shipLength, isHorizontal)
        return
      }
    } else {
      node = document.querySelector(`#user-preview div[id="${i + j * 10}"]`)
      i -= 1
      if (node.classList.contains('black-ship')) {
        blankArea(event, shipLength, isHorizontal)
        return
      }
    }
    node.classList.add('green-hover')
  }
}

export default highlightArea
