import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="" alt="" />
                <div className="brand">
                    <span className="brand-main">Car Identifier</span>
                    <span className="brand-sub">Identify your car</span>
                </div>  
            </div>  

            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Claims</a></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;