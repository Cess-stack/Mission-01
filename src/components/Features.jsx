// src/components/Features.jsx
import React from 'react';
import '../styles/Features.css';
import Map from '../assets/features/Map.webp';
import Wizard from '../assets/features/wizard.png';
import FeatureCard from './FeatureCard';
  
const features = [
  {
    image: Map,
    title: 'Accurate Identification',
    description: 'Get precise results with our advanced AI technology'
  },
  {
    image: Wizard,
    title: 'Instant Results',
    description: 'Quick and efficient processing for fast identification'
  }
];

const Features = () => {
  return (
    <div className="features-section">
      <h2 className="section-title">Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;