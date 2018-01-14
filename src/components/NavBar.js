import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router-dom';

import NavStore from '../stores/NavStore';
import NavActions from '../actions/NavActions';

import SideNav from './SideNav';
import Hamburger from './Hamburger';

import '../styles/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.closeSideNav = this.closeSideNav.bind(this);

    this.state = {
      isSideNavOpen: NavStore.isSideNavOpen,
      navItems: NavStore.navItems
    };
  }

  componentWillMount() {
    NavStore.on('change', () => {
      this.setState({ isSideNavOpen: NavStore.isSideNavOpen });
    });
  }

  toggleSideNav() {
    if (this.state.isSideNavOpen) {
      NavActions.closeSideNav();
    } else {
      NavActions.openSideNav();
    }
  }

  closeSideNav() {
    NavActions.closeSideNav();
  }

  render() {
    return (
      <div>
        <SideNav open={this.state.isSideNavOpen} navItems={this.state.navItems} closeSideNav={this.closeSideNav} />
        <Grid className="Nav">
          <Row>
            <Col xs={2} smHidden mdHidden lgHidden>
              <Hamburger onClick={this.toggleSideNav} open={this.state.isSideNavOpen} />
            </Col>
            <Col xs={8} sm={2}>
              <Link to={'/'} className="Name">
                <span className="First-name">Tyler</span>
                &nbsp;
                <span className="Last-name">Wray</span>
              </Link>
            </Col>
            <Col className="Pages" sm={8} xsHidden>
              {NavStore.navItems.map((item, key) => (
                <Link key={key} className="Nav-item" to={item.href}>
                  {item.name}
                </Link>
              ))}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NavBar;
