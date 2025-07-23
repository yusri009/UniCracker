import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>UniCracker</h3>
            <p className="footer-description">
              Your trusted companion for navigating Sri Lankan university
              admissions — powered by
              <br />
              Z-score insights.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
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

          {/* Column 3 */}
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

          {/* Column 4 */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <span style={{ fontSize: "0.8rem" }}>
                  mohamedhanfal10@gmail.com
                </span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                +94 74 001 6080
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Kalmunai, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 UniCracker. All Rights Reserved. — Pre Alpha</p>
        </div>
      </div>
    </footer>
  );
}
