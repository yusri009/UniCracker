import "../css/aboutus.css";

export default function AboutUs() {
  return (
    <>
      {/* Page Banner */}
      <section
        className="hero"
        style={{ height: "40vh", marginBottom: "2rem" }}
      >
        <div className="container">
          <div className="hero-content">
            <h2>About UniCracker</h2>
            <p>
              Discover our mission to empower Sri Lankan A/L students with the
              tools and guidance they need to confidently choose the right
              university courses — all based on data, transparency, and
              accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2
                style={{
                  color: "var(--primary-color)",
                  marginBottom: "1.5rem",
                  fontSize: "2.2rem",
                }}
              >
                Our Story
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                UniCracker was created to end the confusion many Sri Lankan A/L
                students face when applying to university. With outdated advice
                and unclear priorities, many students miss the courses they
                actually deserve.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                We built UniCracker as a free, smart, and transparent platform
                that uses historical Z-score data and UGC handbook content to
                help students choose the best-fitting courses — in the best
                possible order.
              </p>
              <p>
                More than just a course finder, UniCracker is a guide. Our goal
                is to make this the most reliable tool for university admissions
                in Sri Lanka — so no student has to pay third parties or guess
                their future again.
              </p>
              <p>
                At UniCracker, we believe that access to quality higher
                education guidance should be available to every student—no
                matter where they come from or what resources they have. That's
                why we’ve made our platform intuitive, accessible, and
                data-driven. By combining official university handbook data,
                historical Z-score analytics, and student-focused tools,
                UniCracker empowers A/L students to take control of their future
                with clarity and confidence.
              </p>
            </div>
            <div className="about-image">
              <div
                style={{
                  height: "350px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "#777" }}>About Us Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        style={{ padding: "5rem 0", backgroundColor: "var(--light-color)" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Our Mission</h2>
            <p>
              Empowering students to make confident decisions about their
              academic future
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Accessibility</h3>
              <p>
                Make higher education information accessible to all Sri Lankan
                students regardless of their background or location.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Accuracy</h3>
              <p>
                Provide precise and up-to-date information about university
                courses and admission requirements.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Guidance</h3>
              <p>
                Offer personalized guidance to help students navigate the
                complex university application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>The dedicated professionals behind UniCracker</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div
                  style={{
                    height: "250px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="member-image">
                    <img src="/images/hanfal.jpg" alt="Mohamed Hanfal" />
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>Mohamed Hanfal</h3>
                <p>Founder & Full-stack Developer</p>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/mohamedhanfal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/mohamedhanfal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="mailto:mohamedhanfal10@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div
                  style={{
                    height: "250px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="member-image">
                    <img src="/images/amri.jpg" alt="Mohamed Amri" />
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>Mohamed Amri</h3>
                <p>Data Analyst</p>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/mohamed-amri-881521350"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/Mohamedamri1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="mailto:mohamedamri.gm1@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div
                  style={{
                    height: "250px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="member-image">
                    <img src="/images/yusri.png" alt="Yusri Ahamed" />
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>Yusri Ahamed</h3>
                <p>Developer</p>
                <div className="social-links">
                  <a
                    href="http://www.linkedin.com/in/yusri-ahamed-97ab7828b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/yusri009"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="mailto:yusriahamed369@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uni Bot Section */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                fontSize: "3rem",
                color: "var(--primary-color)",
                marginBottom: "1.5rem",
              }}
            >
              <i className="fas fa-robot"></i>
            </div>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
                color: "var(--primary-color)",
              }}
            >
              Meet Uni Bot
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Our intelligent chatbot assistant is here to answer your questions
              about universities, courses, and the application process. Click
              the chatbot icon in the corner of any page to start a
              conversation!
            </p>
            <div
              style={{
                backgroundColor: "var(--light-color)",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "var(--shadow)",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--primary-color)",
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                }}
              >
                "Hi there! I'm Uni Bot, your personal assistant for all things
                related to university courses in Sri Lanka. How can I help you
                today?"
              </p>
              <p style={{ color: "#777" }}>
                Uni Bot can help with Z-score calculations, course
                recommendations, university information, and application
                deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        style={{ padding: "5rem 0", backgroundColor: "var(--light-color)" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Have questions or feedback? We'd love to hear from you!</p>
          </div>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "var(--shadow)",
            }}
          >
            <form>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontFamily: "inherit",
                  }}
                  required
                ></textarea>
              </div>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
