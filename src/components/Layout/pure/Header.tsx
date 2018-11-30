import React from 'react'

import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'

import Nav from './Nav'
import SideNav from './SideNav'
import { NavItem } from '../types'

function styles(theme: Theme) {
  return createStyles({
    appBar: {
      backgroundColor: theme.palette.primary.main
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
  })
}

interface Props {
  classes: {
    appBar: string
    menuIcon: string
    name: string
  }
  navItems: Array<NavItem>
  menuOpen: boolean
  toggleMenu(event: React.MouseEvent): void
}

function Header({ classes, navItems, menuOpen, toggleMenu }: Props) {
  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
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

export default withStyles(styles)(Header)
