import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Card.css';

const Card = ({ children }) => (
  <div className="Card">
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.element
};

export default Card;
