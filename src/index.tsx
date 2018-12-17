import React from 'react'
import { render } from 'react-dom'
import { createMuiTheme } from '@material-ui/core/styles'

import App from './App'

import theme from './theme'

import './index.css'

const customTheme = createMuiTheme(theme)

render(<App theme={customTheme} />, document.getElementById('root'))
