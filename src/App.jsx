import React from 'react';
import CarIdentifier from './CarIdentifier';
import Navbar from "./components/navbar/Navbar"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Identify from './pages/Identify';



function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<CarIdentifier />} />
        <Route path="/identify" element={<Identify />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
