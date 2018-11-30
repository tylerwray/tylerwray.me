import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import theme from './theme'
import Routes from './Routes'
import Layout from './components/Layout'

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Layout>
        <Routes />
      </Layout>
    </MuiThemeProvider>
  )
}

export default App
