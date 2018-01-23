import React from 'react';

import NavBar from './NavBar';

import '../styles/Header.css';

// When the user scrolls the page, execute myFunction
window.onscroll = () => {
  const navbar = document.querySelector('.Header');

  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

const Header = () => (
  <header className="Header">
    <div className="Header-background"></div>
    <NavBar />
  </header>
);

export default Header;
