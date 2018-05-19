import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import theme from './theme'
import store from './store'
import Routes from './Routes'
import { Layout } from './components'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <Layout>
            <Routes />
          </Layout>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
