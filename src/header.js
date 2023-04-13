const createHeader = (() => {
  const header = document.createElement('header')
  header.className = 'header'

  const headerTitle = document.createElement('h1')
  headerTitle.className = 'header__title'
  headerTitle.textContent = 'battleship'

  header.append(headerTitle)

  return header
})()

export default createHeader
