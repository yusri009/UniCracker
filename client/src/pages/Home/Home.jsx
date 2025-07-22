import { Link } from "react-router-dom";
import "./home.css";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Simplify Your University Admission Journey</h2>
            <p>
              Struggling with university course selection after A/Ls?
              <br />
              UniCracker helps you choose the right course, order them smartly,
              <br />
              and complete the UGC application — all for free.
            </p>
            <p style={{ fontSize: "0.8rem", marginTop: "-1rem" }}>
              Made for Sri Lankan Students | 100% Free | Based on Z-Score
              History
            </p>
            <Link to="/courseorder" className="btn">
              Find Courses
            </Link>
          </div>
          <div className="hero-image">
            <img src="/images/home-img.png" alt="Hero" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose UniCracker</h2>
            <p>
              Empowering A/L students in Sri Lanka to navigate university
              admissions with clarity, confidence, and ease.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Smart Course Planning</h3>
              <p>
                Get personalized recommendations on how to order your course
                preferences based on your Z-score and interests.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>All-in-One Guidance</h3>
              <p>
                From choosing the right course to completing your UGC form
                UniCracker guides you through every step of the process.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3>Data-Driven Insights</h3>
              <p>
                Explore historical Z-score trends and admission statistics to
                make smarter decisions backed by real data.
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
            <p>
              Guiding Sri Lankan students from Z-score to university success
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>Input Z-Score & Stream</h3>
              <p>
                Start by entering your A/L Z-score, subjects and results to
                unlock relevant course options.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-filter"></i>
              </div>
              <h3>Explore & Compare</h3>
              <p>
                Browse universities and filter by district, faculty, or interest
                area for a perfect fit.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-list-ol"></i>
              </div>
              <h3>Generate Course Order</h3>
              <p>
                Get a smart, ranked list of course preferences based on trends
                and your profile.
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
            Start your higher education journey with confidence. Use UniCracker
            to find the best-fit courses based on your Z-score, interests,
            <br />
            and university dreams.
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
