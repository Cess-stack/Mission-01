import { Link } from "react-router-dom";
import "./Navbar.css";
import turnersLogo from "../../assets/turnersLogo.png";

 function Navbar() {
  return (
<nav className="navbar">
  <div className="navbar-left">
    <img src={turnersLogo} alt="Brand Logo" className="logo" />
    <div className="brand">
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