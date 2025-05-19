import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🚗 Car Identifier</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/identify">Identify</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
