import { Link } from "react-router-dom";
import "./Navbar.css";

 function Navbar() {
  return (
<nav className="navbar">
  <div className="navbar-left">
    <img src="logo.png" alt="Brand Logo" className="logo" />
    <div className="brand">
      <span className="brand-main">YourBrand</span>
      <span className="brand-sub">Your tagline</span>
    </div>
  </div>
  <ul className="navbar-links">
    <li><a href="/">Home</a></li>
    <li><a href="/identify">Identify</a></li>
    <li><a href="/about">About</a></li>
  </ul>
  <button className="login-button">Login</button>
</nav>

  );
}
export default Navbar;  