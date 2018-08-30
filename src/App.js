import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import theme from './theme'
import store from './store'
import Routes from './Routes'
import Layout from './shared/Layout'

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
