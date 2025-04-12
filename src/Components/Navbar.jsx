import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">FakeStore</Link>

        <button className="menu-toggle" onClick={toggleMenu}>☰</button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>

          <li className="dropdown" onClick={() => toggleDropdown("pages")}>
            <span className="dropdown-toggle">Pages ▾</span>
            {openDropdown === "pages" && (
              <ul className="dropdown-menu">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/Addcart">AddCart</Link>
          </li>

          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>


        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
