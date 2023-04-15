import restartGame from './restartGame'

const createResultPopup = (() => {
  const popup = document.createElement('div')
  popup.className = 'popup hidden result-popup'

  const popupContainer = document.createElement('section')
  popupContainer.className = 'popup__victory-section'

  const resultText = document.createElement('p')
  resultText.className = 'popup__result'
  resultText.textContent = 'you win!'

  const playAgainBtn = document.createElement('button')
  playAgainBtn.type = 'button'
  playAgainBtn.className = 'popup__play-again'
  playAgainBtn.textContent = 'play again'

  playAgainBtn.addEventListener('click', restartGame)

  popupContainer.append(resultText, playAgainBtn)

  popup.append(popupContainer)

  return popup
})()

export default createResultPopup
