import React from 'react';
import Navbar from "./components/navbar/Navbar"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Identify from './pages/Identify';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;