/* eslint-disable import/no-extraneous-dependencies */
import './styles/style.css'

import header from './header'
import main from './mains'
import footer from './footer'

const App = () => {
  const { body } = document
  body.className = 'page'

  body.append(header, main, footer)
}

App()
