import React from 'react';
import "./Navbar.css";
import logo from '../../assets/logo.png';   

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="turners logo" />
                <div className="brand">
                    <span className="brand-main">CarVision</span>
                    <span className="brand-sub">Car Identifier</span>
                </div>  
            </div>  

            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Identify</a></li>
                <li><a href="#">Results</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;