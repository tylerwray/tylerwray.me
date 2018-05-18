import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Header from './Header'

const styles = {
  main: {
    paddingTop: 60
  }
}

function Layout({ classes, children }) {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        {children}
      </main>
    </Fragment>
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}

export default withStyles(styles)(Layout)
