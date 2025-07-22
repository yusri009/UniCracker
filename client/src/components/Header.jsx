import "../css/header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-default fixed w-full top-0 z-1000">
      <nav className="navbar">
        <NavLink to="/">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="UniCracker Logo"
              className="h-10 mt-[-8px]"
            />
            <h1 className="text-[1.8rem] font-bold text-primary ml-2">
              UniCracker
            </h1>
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

          <NavLink to="/login">
            <div className="btn">Login</div>
          </NavLink>

          <button
            className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={handleToggle}
            // className="ml-4 flex flex-col justify-center items-center md:hidden w-10 h-10"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="bar" aria-hidden="true"></span>
            <span className="bar" aria-hidden="true"></span>
            <span className="bar" aria-hidden="true"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
