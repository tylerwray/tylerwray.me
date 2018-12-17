import React from 'react'
import { MuiThemeProvider, Theme } from '@material-ui/core/styles'

import Routes from './Routes'
import Layout from './containers/Layout'

interface Props {
  theme: Theme
}

function App({ theme }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Routes />
      </Layout>
    </MuiThemeProvider>
  )
}

export default App
