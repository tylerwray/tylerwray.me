import React from 'react';
import PropTypes from 'prop-types';

import './NavItem.css';

function NavItem(props) {
  return <span>{props.name}</span>;
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavItem;
