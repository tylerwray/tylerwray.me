import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../pure/Header'
import Main from '../pure/Main'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  navItems = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' }
  ]

  state = {
    menuOpen: false
  }

  constructor(props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }))
  }

  render() {
    const { children } = this.props
    const { menuOpen } = this.state

    return (
      <Fragment>
        <Header
          navItems={this.navItems}
          menuOpen={menuOpen}
          toggleMenu={this.toggleMenu}
        />
        <Main>{children}</Main>
      </Fragment>
    )
  }
}

export default Layout
