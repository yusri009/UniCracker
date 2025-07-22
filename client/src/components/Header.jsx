import "../css/header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const handleToggle = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  };
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">
          <div className="logo">
            <img src="/images/logo.png" alt="UniCracker Logo" width="180" />
            <h1>UniCracker</h1>
          </div>
        </NavLink>
        <div className="nav-tab">
          <ul className="nav-links">
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
          <div className="nav-toggle" onClick={handleToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
