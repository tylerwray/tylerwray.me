import React, { useState } from 'react'

import Header from '../components/Header'
import Main from '../components/Main'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Work history', to: '/work-history' }
]

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Header
        navItems={NAV_ITEMS}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
