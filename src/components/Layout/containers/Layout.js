import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from '../pure/Header'

import { toggleNavMenu } from '../actions'
import { selectMenuOpen, selectNavItems } from '../selectors'

function Layout(props) {
  const { children, navItems, menuOpen, toggleMenu } = props

  return (
    <Fragment>
      <Header navItems={navItems} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main style={{ paddingTop: 60 }}>{children}</main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    menuOpen: selectMenuOpen(state),
    navItems: selectNavItems(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => {
      dispatch(toggleNavMenu())
    }
  }
}

// withRouter allows routing to this component
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
)
