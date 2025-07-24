import "./header.css";
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/userContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen((prev) => !prev);

  const dropdownRef = useRef(null);
  const iconRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post("/logout");
      toast.success(response.data.message || "Operation successful!");
      navigate("/");
      setUser(null);
      setShowMenu(false);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);
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

            <div className="header-login">
              <div
                ref={iconRef}
                className={`login-icon ${user ? "logged-in" : "logged-out"}`}
                onClick={() =>
                  user ? setShowMenu(!showMenu) : navigate("/login")
                }
              >
                <i className="ri-user-line nav-login"></i>
              </div>
              {/* Dropdown */}
              {showMenu && user && (
                <div
                  ref={dropdownRef}
                  className={`user-dropdown ${showMenu ? "show" : ""}`}
                >
                  <div onClick={() => navigate("/dashboard")}>My Dashboard</div>
                  {/* <div onClick={() => navigate("/saved-courses")}>
                  Saved Course Order
                </div> */}
                  <div onClick={handleLogout}>Logout</div>
                </div>
              )}
            </div>
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
