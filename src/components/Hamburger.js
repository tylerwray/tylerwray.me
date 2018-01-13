import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Hamburger.css';

const Hamburger = ({ open, onClick }) => (
  <div className="Hamburger" open={open} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Hamburger;
