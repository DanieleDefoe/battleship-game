/* eslint-disable import/no-extraneous-dependencies */
import './styles/style.css'

import header from './header'

const App = () => {
  const { body } = document
  body.className = 'page'

  body.append(header)
}

App()
