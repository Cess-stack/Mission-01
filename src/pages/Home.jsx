import React from 'react';
import "../styles/Home.css";

function HomePage() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Your Catchy Headline</h1>
          <p>A sleek, professional landing page to make an impression.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
      <div className="info-section">
        <div className="card">
          <h2>Feature One</h2>
          <p>Highlight a key feature of your page.</p>
        </div>
        <div className="card">
          <h2>Feature Two</h2>
          <p>Another important section with relevant details.</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;