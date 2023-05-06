import React, { useState } from 'react';
import './App.css';
import Logo from './img/logo.png';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}


export default Header;
