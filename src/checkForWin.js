import resultPopup from './resultPopup'

const checkForWin = () => {
  if (
    window.userSunkShips.length === 5 &&
    window.computerSunkShips.length === 5
  ) {
    resultPopup.querySelector('.popup__result').textContent = 'it is a draw'
    resultPopup.classList.remove('hidden')
  } else if (window.userSunkShips.length === 5) {
    resultPopup.querySelector('.popup__result').textContent = 'you win!'
    resultPopup.classList.remove('hidden')
  } else if (window.computerSunkShips.length === 5) {
    resultPopup.querySelector('.popup__result').textContent = 'you lose...'
    resultPopup.classList.remove('hidden')
  }
}

export default checkForWin
