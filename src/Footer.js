import React from 'react';

function Footer(props) {
  return (
    <footer>
    <div class="footer-container">
      <div class="column">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
      <div class="column">
        <h3>Contact</h3>
        <ul>
          <li><a href="#">Address</a></li>
          <li><a href="#">Phone number</a></li>
          <li><a href="#">Email</a></li>
        </ul>
      </div>
      <div class="column">
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Pinterest</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
      <div class="logo">
        <img src="logo.png" alt="Website logo" />
      </div>
    </div>
    </footer>  
  );
}

export default Footer;
