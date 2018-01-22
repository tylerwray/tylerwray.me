import React from 'react';
import PropTypes from 'prop-types';

import Hamburger from '../components/Hamburger';

import '../styles/FAB.css';

const FAB = ({ onClick, open }) => (
  <div className="FAB">
    <Hamburger onClick={onClick} open={open} />
  </div>
);

FAB.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool
};

export default FAB;
