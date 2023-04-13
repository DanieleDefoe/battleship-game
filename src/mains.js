import playgroundGrid from './playgroundGrid'

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  const user = playgroundGrid('user')
  const computer = playgroundGrid('computer')

  main.append(user, computer)

  return main
})()

export default createMain
