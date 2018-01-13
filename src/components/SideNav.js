import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/SideNav.css';

const SideNav = ({ open, navItems }) => (
  <div className="SideNav" open={open}>
    {navItems.map((item, key) =>
      <Link to={item.href} key={key}>item.name</Link>
    )}
  </div>
);

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  navItems: PropTypes.array
};

export default SideNav;
