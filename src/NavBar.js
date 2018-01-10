import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import NavItem from './NavItem';

import './NavBar.css';

const NAV_ITEMS = [
  {
    name: 'Profile',
    href: '/profile'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];

function NavBar() {
  return (
    <Grid className="Nav">
      <Row>
        <Col xs={4}>
          <span className="Name">
            <span className="First-name">Tyler</span>
            &nbsp;
            <span className="Last-name">Wray</span>
          </span>
        </Col>
        {NAV_ITEMS.map((item, key) => (
          <Col xs={2} key={key}>
            <NavItem name={item.name} href={item.href} />
          </Col>
        ))}
      </Row>
    </Grid>
  );
}

export default NavBar;
