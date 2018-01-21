import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/SideNav.css';

const SideNav = ({ open, navItems, closeSideNav }) => (
  <div className="SideNav-container">
    <div className="SideNav-overlay" open={open} onClick={closeSideNav}></div>
    <div className="SideNav" open={open}>
      {navItems.map((item, key) =>
        <Link key={key} className="SideNav-Item" onClick={closeSideNav} to={item.href}>{item.name}</Link>
      )}
    </div>
  </div>
);

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  navItems: PropTypes.array,
  closeSideNav: PropTypes.func
};

export default SideNav;
