import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

function styles(theme) {
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
      margin: '10px 10px 10px 0px',
      borderRadius: '0px 50px 50px 0px',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: `${SIDE_NAV_LINK_HEIGHT}px`,
      display: 'block',
      height: SIDE_NAV_LINK_HEIGHT,
      '&:hover': {
        backgroundColor: theme.palette.grey[300]
      },
      textDecoration: 'none',
      color: theme.palette.common.black
    },
    activeSideNavLink: {
      backgroundColor: theme.palette.primary.lightest,
      color: theme.palette.primary.darkest,
      '&:hover': {
        backgroundColor: theme.palette.primary.lightest,
        color: theme.palette.primary.darkest
      }
    }
  }
}

function SideNav({ classes, items, open, onClose }) {
  return (
    <Fragment>
      <div
        onClick={onClose}
        className={`${classes.overlay} ${open && classes.visible}`}
      />
      <div
        className={`${classes.sideNav} ${open ? classes.open : classes.closed}`}
      >
        {items.map(x => (
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
  items: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(SideNav)
