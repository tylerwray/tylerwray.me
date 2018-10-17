import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import theme from './theme'
import Routes from './Routes'
import Layout from './components/Layout'

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
