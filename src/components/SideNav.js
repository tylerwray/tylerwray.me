import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/SideNav.css';

const SideNav = ({ open, navItems, onClose }) => (
  <div className="SideNav-container">
    <div className="SideNav-overlay" open={open} onClick={onClose}></div>
    <div className="SideNav" open={open}>
      {navItems.map((item, key) =>
        <div key={key}>
          <Link to={item.href}>item.name</Link>
        </div>
      )}
    </div>
  </div>
);

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  navItems: PropTypes.array,
  onClose: PropTypes.func
};

export default SideNav;
