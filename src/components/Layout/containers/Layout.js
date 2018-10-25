import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import Header from '../pure/Header'
import Main from '../pure/Main'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Work history', to: '/work-history' }
]

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <Fragment>
      <Header
        navItems={NAV_ITEMS}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
      <Main>{children}</Main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
