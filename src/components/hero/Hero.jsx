// src/components/hero/Hero.jsx
import React from 'react';
import '../../styles/components/Hero.css';
import heroImage from '../../assets/images/hero.png';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Smarter Car Identification</h1>
        <h2>Just upload a photo – we’ll handle the rest.</h2>
        <button className="cta-button">Try It Now</button>
      </div>
    </div>
  );
};

export default Hero;
