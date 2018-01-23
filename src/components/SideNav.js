import React from 'react';
import PropTypes from 'prop-types';

import '../styles/SideNav.css';

const SideNav = ({ open, navItems, closeSideNav }) => (
  <div className="SideNav-container">
    <div className="SideNav-overlay" open={open} onClick={closeSideNav}></div>
    <div className="SideNav" open={open}>
      {navItems.map((item, key) =>
        <a key={key} className="SideNav-Item" onClick={closeSideNav} href={item.href}>{item.name}</a>
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
