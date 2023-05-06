import React from 'react';
import Hero from './img/restauranfood.jpg';

function Main(props) {
  return (
   <main>
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="main-heading">Little Lemon</h1>
        <h2 className="sub-heading">Chicago</h2>
        <p className="hero-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-btn">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={Hero} alt="Hero Image" />
      </div>
    </div>
    <div className='highlights'>

    </div>
    <div className='testimonials'>

    </div>
    <div className='about'>

    </div>
   </main>
  );
}

export default Main;
