import "../css/header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="UniCracker Logo" width="180" />
          <h1>UniCracker</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="index.html" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="courseorder.html">Course Order</a>
          </li>
          <li>
            <a href="aboutus.html">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
