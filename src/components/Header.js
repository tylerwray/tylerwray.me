import React from 'react';

import NavBar from './NavBar';

import '../styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header-background"></div>
      <NavBar />
    </header>
  );
}

export default Header;
