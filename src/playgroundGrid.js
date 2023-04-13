const createGrid = (player) => {
  const grid = document.createElement('section')
  grid.className = 'playground-grid'
  grid.id = player

  for (let i = 0; i < 100; i += 1) {
    const block = document.createElement('div')
    block.className = 'playground__block'
    block.id = i
    grid.append(block)
  }

  return grid
}

export default createGrid
