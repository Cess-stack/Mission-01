// src/components/FeatureCard.jsx
import React from 'react';
import '../styles/FeatureCard.css';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;