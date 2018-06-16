import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { NAV_ITEMS } from '../constants'

function styles(theme) {
  return {
    navLink: {
      padding: 10,
      textDecoration: 'none',
      fontSize: 18,
      marginRight: 15,
      fontFamily: theme.typography.fontFamily,
      borderRadius: 50,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    activeNavLink: {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[5]
    }
  }
}

function Nav({ classes }) {
  return (
    <Grid item>
      <Grid container>
        {NAV_ITEMS.map(x => (
          <Grid item key={x.label}>
            <NavLink
              key={x.label}
              className={classes.navLink}
              exact
              activeClassName={classes.activeNavLink}
              to={x.to}
            >
              {x.label}
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Nav)
