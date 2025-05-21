import { Link } from "react-router-dom";
import "../css/home.css";
import CarouselCard from "../components/CarouselCard";
export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Find Your Perfect University Course</h2>
            <p>
              UniCracker helps Sri Lankan students find university courses based
              on their Z-score, making the selection process easier and more
              informed.
            </p>
            <Link to="/courseorder" className="btn">
              Find Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose UniCracker</h2>
            <p>
              We provide comprehensive tools to help you make the best decision
              for your academic future.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Z-Score Based Search</h3>
              <p>
                Find university courses that match your Z-score and academic
                achievements, ensuring you target the right opportunities.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>Comprehensive University Database</h3>
              <p>
                Access information about all Sri Lankan universities and their
                course offerings in one convenient place.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Trend Analysis</h3>
              <p>
                View historical Z-score cutoffs and admission trends to make
                informed decisions about your university applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="how-it-works"
        style={{ padding: "5rem 0", backgroundColor: "var(--light-color)" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>How UniCracker Works</h2>
            <p>Simple steps to find your ideal university course path</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>Enter Your Z-Score</h3>
              <p>
                Input your A/L Z-score and subject stream to start the course
                matching process.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-filter"></i>
              </div>
              <h3>Filter Your Preferences</h3>
              <p>
                Narrow down results by university, location, or specific course
                interests.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-list-ol"></i>
              </div>
              <h3>Get Your Course Order</h3>
              <p>
                Receive a personalized list of courses ordered by your
                likelihood of admission based on historical data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CarouselCard />

      {/* CTA Section */}
      <section
        className="cta"
        style={{
          padding: "5rem 0",
          background:
            "linear-gradient(135deg, rgba(74, 44, 143, 0.9) 0%, rgba(0, 188, 212, 0.8) 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
            Ready to Find Your Perfect University Course?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Start your journey to higher education with confidence. Use
            UniCracker to discover courses that match your Z-score and academic
            goals.
          </p>
          <Link
            to="/courseorder"
            className="btn"
            style={{ backgroundColor: "white", color: "var(--primary-color)" }}
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
