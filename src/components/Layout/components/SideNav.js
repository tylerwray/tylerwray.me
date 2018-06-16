import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

function styles(theme) {
  console.log(theme)
  const SIDE_NAV_WIDTH = 250
  const SIDE_NAV_LINK_HEIGHT = 50

  return {
    sideNav: {
      position: 'fixed',
      left: 0,
      top: 0,
      height: '100%',
      width: SIDE_NAV_WIDTH,
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[10],
      transition: 'all 300ms'
    },
    open: {
      marginLeft: 0
    },
    closed: {
      marginLeft: -SIDE_NAV_WIDTH
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      height: '100%',
      width: '100%',
      position: 'fixed',
      left: 0,
      right: 0,
      visibility: 'hidden',
      opacity: 0,
      transition: 'all 300ms'
    },
    visible: {
      visibility: 'visible',
      opacity: 1
    },
    sideNavLink: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 16,
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: `${SIDE_NAV_LINK_HEIGHT}px`,
      display: 'block',
      height: SIDE_NAV_LINK_HEIGHT,
      width: '100%',
      '&:hover': {
        backgroundColor: theme.palette.grey[300]
      },
      textDecoration: 'none',
      color: theme.palette.common.black
    },
    activeSideNavLink: {
      backgroundColor: theme.palette.grey[300]
    }
  }
}

function SideNav(props) {
  const {
    classes,
    open,
    onClose
  } = props

  const NAV_ITEMS = [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'Projects',
      to: '/projects'
    }
  ]

  return (
    <Fragment>
      <div onClick={onClose} className={`${classes.overlay} ${open && classes.visible}`} />
      <div className={`${classes.sideNav} ${open ? classes.open : classes.closed}`}>
        {NAV_ITEMS.map(x => (
          <NavLink
            key={x.label}
            className={classes.sideNavLink}
            exact
            activeClassName={classes.activeSideNavLink}
            onClick={onClose}
            to={x.to}
          >
            {x.label}
          </NavLink>
        ))}
      </div>
    </Fragment>
  )
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(SideNav)
