import React from 'react';
import './styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1>Car Identifier</h1>
      <p>Identify your car with just a photo</p>
      <button className="cta-button">Get Started</button>
    </div>
  );
};

export default Hero;