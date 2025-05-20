// src/App.jsx
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Identify from './pages/Identify';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', paddingBottom: '70px', position: 'relative' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
