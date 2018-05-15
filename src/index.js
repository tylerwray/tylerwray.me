import React from 'react'
import { render } from 'react-dom'

import App from './App'

import './index.css'

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, document.getElementById('root'))
  })
}
