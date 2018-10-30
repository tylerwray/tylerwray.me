import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from '@reach/router'

function styles(theme) {
  return {
    navLink: {
      padding: 17,
      textDecoration: 'none',
      fontSize: 18,
      marginRight: 15,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.grey[400],
      transition: 'color 300ms ease',
      transitionOrigin: 'bottom',
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    },
    activeNavLink: {
      color: theme.palette.common.white,
      borderBottom: '3px solid white'
    }
  }
}

function Nav({ classes, items }) {
  return (
    <Grid item>
      <Grid container>
        {items.map(x => (
          <Grid item key={x.label}>
            <Link
              key={x.label}
              to={x.to}
              getProps={({ isCurrent }) => {
                return {
                  className: classNames(classes.navLink, {
                    [classes.activeNavLink]: isCurrent
                  })
                }
              }}
            >
              {x.label}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default withStyles(styles)(Nav)
