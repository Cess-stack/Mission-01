// src/components/Features.jsx
import React from 'react';
import '../styles/Features.css';  // Updated path to styles folder
import FeatureCard from './FeatureCard';  // Component is in the same folder

const features = [
  {
    image: '../assets/features/Map.webp',
    title: 'Feature One',
    description: 'Highlight a key feature of your page.'
  },
  {
    image: '../assets/features/wizard.png',
    title: 'Feature Two',
    description: 'Another important section with relevant details.'
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