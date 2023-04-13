const createGridRotate = (() => {
  const gridRotateBtn = document.createElement('button')
  gridRotateBtn.className = 'popup__rotate'
  gridRotateBtn.textContent = 'Rotate'

  window.isHorizontal = true

  const toggleAxis = () => {
    window.isHorizontal = !window.isHorizontal
  }

  gridRotateBtn.addEventListener('click', toggleAxis)

  return gridRotateBtn
})()

export default createGridRotate
