// src/pages/Home.jsx
import React from 'react';
import '../styles/components/Home.css';  // Updated path to styles/components
import Hero from '../components/hero/Hero';  // Updated path to components/hero
import Features from '../components/features/Features';  // Updated path to components/features

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

export default HomePage;