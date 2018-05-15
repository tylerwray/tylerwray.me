import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>
        {children}
      </main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
