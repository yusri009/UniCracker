import "../css/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>UniCracker</h3>
            <p style={{ color: "#bbb", marginBottom: "1rem" }}>
              Your trusted companion for navigating Sri Lankan university
              admissions — powered by
              <br />
              Z-score insights.
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courseorder">Course Order</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Z-Score Calculator</a>
              </li>
              <li>
                <a href="#">University Guide</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li style={{ fontSize: "0.84rem" }}>
                <i
                  className="fas fa-envelope"
                  style={{
                    marginRight: 10,
                    color: "var(--secondary-color)",
                    fontSize: "1rem",
                  }}
                ></i>
                mohamedhanfal10@gmail.com
              </li>
              <li>
                <i
                  className="fas fa-phone"
                  style={{ marginRight: 10, color: "var(--secondary-color)" }}
                ></i>
                +94 74 001 6080
              </li>
              <li>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ marginRight: 10, color: "var(--secondary-color)" }}
                ></i>
                Kalmunai, Sri Lanka
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 UniCracker. All Rights Reserved. — Prototype</p>
        </div>
      </div>
    </footer>
  );
}
