// src/components/features/Features.jsx
import React from 'react';
import '../../styles/components/Features.css';
import FeatureCard from './FeatureCard/FeatureCard';
import Map from '../../assets/images/Map.webp';
import Wizard from '../../assets/images/wizard.png';
import Laptop from '../../assets/images/laptop.png';

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
  },
  {
    image: Laptop,
    title: 'Comprehensive Database',
    description: 'Access to extensive car model information'
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