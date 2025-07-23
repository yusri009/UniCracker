import "./header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">
          <div className="logo">
            <img src="/images/logo.png" alt="UniCracker Logo" />
            <h1>UniCracker</h1>
          </div>
        </NavLink>
        <div className="nav-tab">
          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courseorder"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Course Order
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-actions">
            {/* <i className="ri-search-line nav-search"></i> */}

            <NavLink to="/login">
              <i className="ri-user-line nav-login"></i>
            </NavLink>

            <button
              className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={handleToggle}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="bar" aria-hidden="true"></span>
              <span className="bar" aria-hidden="true"></span>
              <span className="bar" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
