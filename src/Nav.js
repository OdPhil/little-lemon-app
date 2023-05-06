import React from 'react';
import Logo from './img/logo.png';

function Nav() {
  return (
    <header>
  <div class="logo">
    <img src={Logo} alt="Website Logo" />
  </div>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;
