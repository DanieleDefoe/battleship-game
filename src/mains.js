import playgroundGrid from './playgroundGrid'

import placeComputerShips from './placeComputerShips'

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  const user = playgroundGrid('user')

  const computer = playgroundGrid('computer')
  placeComputerShips(computer)

  main.append(user, computer)
  return main
})()

export default createMain
