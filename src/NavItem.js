import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './NavItem.css';

function NavItem(props) {
  return (
    <Link className="Nav-item" to={props.href}>
      {props.name}
    </Link>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default NavItem;
