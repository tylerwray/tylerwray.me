import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/SideNav.css';

const SideNav = ({ open, navItems, closeSideNav }) => (
  <div className="SideNav-container">
    <div className="SideNav-overlay" open={open} onClick={closeSideNav}></div>
    <div className="SideNav" open={open}>
      <div className="SideNav-Item">
        <Link onClick={closeSideNav} to={'/'}>Home</Link>
      </div>
      {navItems.map((item, key) =>
        <div className="SideNav-Item" key={key}>
          <Link onClick={closeSideNav} to={item.href}>{item.name}</Link>
        </div>
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
