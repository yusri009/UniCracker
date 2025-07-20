import "../css/header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
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
          {/* <div className="menu-toggle">
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </label>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
