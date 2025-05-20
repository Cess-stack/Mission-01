import React from 'react';
import './styles/Hero.css';
import tina from '../assets/tina.jpg'; // Adjust the path based on your image name

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${tina.jpg})` }}>
      <div className="hero-content">
        <h1>Car Identifier</h1>
        <p>Identify your car with just a photo</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
