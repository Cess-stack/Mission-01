// src/components/hero/Hero.jsx
import React from 'react';
import '../../styles/components/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Car Identifier</h1>
        <p>Identify your car with just a photo</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;