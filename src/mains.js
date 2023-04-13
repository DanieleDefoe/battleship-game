import playgroundGrid from './playgroundGrid'

import gridRotateBtn from './gridRotate'

import highlightArea from './highlightArea'
import blankArea from './blankArea'

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  const user = playgroundGrid('user')
  user.addEventListener('mouseover', (event) =>
    highlightArea(event, 3, window.isHorizontal)
  )
  user.addEventListener('mouseout', (event) =>
    blankArea(event, 3, window.isHorizontal)
  )

  const computer = playgroundGrid('computer')

  main.append(gridRotateBtn, user, computer)
  return main
})()

export default createMain
