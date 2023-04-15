/* eslint-disable import/no-extraneous-dependencies */
import './styles/style.css'

import header from './header'
import main from './mains'
import footer from './footer'
import popup from './heroPopup'
import resultPopup from './resultPopup'

const App = () => {
  const { body } = document
  body.className = 'page'

  body.append(header, main, footer, popup, resultPopup)
}

App()
