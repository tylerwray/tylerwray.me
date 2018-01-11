import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css';

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
        <Col xs={2} smHidden mdHidden lgHidden>
          <div className="Hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Col>
        <Col xs={10} sm={4}>
          <Link to={'/'} className="Name">
            <span className="First-name">Tyler</span>
            &nbsp;
            <span className="Last-name">Wray</span>
          </Link>
        </Col>
        {NAV_ITEMS.map((item, key) => (
          <Col xs={2} xsHidden key={key}>
            <Link className="Nav-item" to={item.href}>
              {item.name}
            </Link>
          </Col>
        ))}
      </Row>
    </Grid>
  );
}

export default NavBar;
