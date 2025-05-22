import "../css/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <div className="logo">
            <img src="/images/logo.png" alt="UniCracker Logo" width="180" />
            <h1>UniCracker</h1>
          </div>
        </Link>
        <div className="nav-tab">
          <ul className="nav-links">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courseorder">Course Order</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
          <Link to="/login">
            <div className="btn">Login</div>
          </Link>
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
