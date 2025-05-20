import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>UniCracker</h3>
            <p style={{ color: "#bbb", marginBottom: "1rem" }}>
              Your trusted guide to Sri Lankan university courses based on
              Z-score analysis.
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="courseorder.html">Course Order</a>
              </li>
              <li>
                <a href="aboutus.html">About Us</a>
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
              <li>
                <i
                  className="fas fa-envelope"
                  style={{ marginRight: 10, color: "var(--secondary-color)" }}
                ></i>
                info@unicracker.lk
              </li>
              <li>
                <i
                  className="fas fa-phone"
                  style={{ marginRight: 10, color: "var(--secondary-color)" }}
                ></i>
                +94 11 234 5678
              </li>
              <li>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ marginRight: 10, color: "var(--secondary-color)" }}
                ></i>
                Colombo, Sri Lanka
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 UniCracker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
