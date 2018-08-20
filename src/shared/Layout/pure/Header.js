import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'

import Nav from './Nav'
import SideNav from './SideNav'

function styles(theme) {
  return {
    appBar: {
      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${
        theme.palette.secondary.main
      })`
    },
    menuIcon: {
      color: 'white',
      fontSize: 36
    },
    name: {
      fontFamily: 'Satisfy, Roboto, Helvetica',
      color: theme.palette.common.white,
      fontSize: 40,
      [theme.breakpoints.down('xs')]: {
        fontSize: 24
      }
    }
  }
}

function Header({ classes, navItems, menuOpen, toggleMenu }) {
  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolBar}>
        <Grid container justify="space-between" alignItems="center">
          <Hidden mdUp>
            <Grid item>
              <IconButton onClick={toggleMenu}>
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Nav items={navItems} />
          </Hidden>
          <Grid item>
            <Typography component="span" className={classes.name}>
              Tyler Wray
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
      <Hidden mdUp>
        <SideNav items={navItems} open={menuOpen} onClose={toggleMenu} />
      </Hidden>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.object),
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default withStyles(styles)(Header)
