import React from 'react';
import Hero from '../components/Hero';
import "../styles/Home.css";

function HomePage() {
  return (
    <>
      <Hero />
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