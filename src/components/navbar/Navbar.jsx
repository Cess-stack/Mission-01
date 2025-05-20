import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import turnersLogo from '../../assets/logos/turnersLogo.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <img src={turnersLogo} alt="Turners AI Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/identify">Identify</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <button className="login-button">Login</button>
    </nav>
  );
}

export default Navbar;
