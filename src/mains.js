import playgroundGrid from './playgroundGrid'

import placeComputerShips from './placeComputerShips'

import playGame from './playGame'

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  const user = playgroundGrid('user')

  const computer = playgroundGrid('computer')

  window.userSunkShips = []
  window.computerSunkShips = []

  placeComputerShips(computer)
  computer.addEventListener('click', playGame)

  main.append(user, computer)
  return main
})()

export default createMain
