import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function styles(theme) {
  console.log(theme)

  return {
    root: {
      flexGrow: 1
    },
    appBar: {
      paddingLeft: 150,
      paddingRight: 150,
      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    flex: {
      flex: 1
    },
    navLink: {
      color: theme.palette.common.white,
      textDecoration: 'none',
      padding: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    activeNavLink: {
      borderRadius: 3,
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[14],
      transformOrigin: 'bottom',
      transitionProperty: 'box-shadow',
      transitionTimingFunction: 'ease-in',
      transitionDuration: '250ms'
    },
    name: {
      fontFamily: 'Satisfy',
      margin: '0 auto',
      color: theme.palette.common.white,
      fontSize: 40,
      [theme.breakpoints.down('xs')]: {
        fontSize: 24
      }
    }
  }
}

function Header({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <NavLink to="/" exact={true} className={classes.navLink} activeClassName={classes.activeNavLink}>Home</NavLink>
            <NavLink to="/projects" className={classes.navLink} activeClassName={classes.activeNavLink}>Projects</NavLink>
          </Typography>
          <Typography className={classes.name}>Tyler Wray</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
