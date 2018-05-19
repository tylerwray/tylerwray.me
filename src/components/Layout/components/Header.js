import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function styles(theme) {
  const navActive = {
    zIndex: -1,
    height: 37,
    borderRadius: 5,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[14],
    transition: 'all 250ms'
  }

  return {
    appBar: {
      flexGrow: 1,
      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
    },
    toolBar: {
      justifyContent: 'space-between'
    },
    flex: {
      flex: 1
    },
    navContainer: {
      width: 0
    },
    navLink: {
      color: theme.palette.common.white,
      textDecoration: 'none',
      padding: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    homeNavActive: {
      ...navActive,
      right: 183,
      paddingRight: 75
    },
    projectsNavActive: {
      ...navActive,
      right: 105,
      paddingRight: 100
    },
    name: {
      flex: '0 0 auto',
      fontFamily: 'Satisfy, Roboto, Helvetica',
      color: theme.palette.common.white,
      fontSize: 40,
      [theme.breakpoints.down('xs')]: {
        fontSize: 24
      }
    }
  }
}

function Header(props) {
  const { classes, location } = props

  let activeNavClass = classes.homeNavActive

  switch (location.pathname) {
    case '/':
      activeNavClass = classes.homeNavActive
      break
    case '/projects':
      activeNavClass = classes.projectsNavActive
      break
    default:
      break
  }

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolBar}>
        <Typography component="div" variant="title" color="inherit" className={classes.navContainer}>
          <NavLink to="/" exact={true} className={classes.navLink} activeClassName={classes.activeNavLink}>Home</NavLink>
          <NavLink to="/projects" className={classes.navLink} activeClassName={classes.activeNavLink}>Projects</NavLink>
          <span className={activeNavClass} />
        </Typography>
        <Typography className={classes.name}>Tyler Wray</Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default withStyles(styles)(withRouter(Header))
