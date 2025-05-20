import "../css/courseorder.css";

export default function CourseOrder() {
  return (
    <>
      {/* Page Banner */}
      <section
        className="hero"
        style={{ height: "40vh", marginBottom: "2rem" }}
      >
        <div className="container">
          <div className="hero-content">
            <h2>Find Your Course Order</h2>
            <p>
              Enter your Z-score and preferences to discover the best university
              courses for your profile.
            </p>
          </div>
        </div>
      </section>

      {/* Course Search Section */}
      <section className="course-search-section" style={{ padding: "3rem 0" }}>
        <div className="container">
          <div className="course-search">
            <h2
              style={{ marginBottom: "1.5rem", color: "var(--primary-color)" }}
            >
              Enter Your Details
            </h2>
            <form className="search-form">
              <div className="form-group">
                <label htmlFor="zscore">Your Z-Score</label>
                <input
                  type="number"
                  id="zscore"
                  name="zscore"
                  step="0.0001"
                  placeholder="e.g., 1.8543"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="stream">Subject Stream</label>
                <select id="stream" name="stream" required defaultValue="">
                  <option value="" disabled>
                    Select your stream
                  </option>
                  <option value="physical-science">Physical Science</option>
                  <option value="biological-science">Biological Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="district">District</label>
                <select id="district" name="district" defaultValue="">
                  <option value="" disabled>
                    Select your district
                  </option>
                  <option value="colombo">Colombo</option>
                  <option value="gampaha">Gampaha</option>
                  <option value="kalutara">Kalutara</option>
                  <option value="kandy">Kandy</option>
                  <option value="matale">Matale</option>
                  <option value="nuwara-eliya">Nuwara Eliya</option>
                  <option value="galle">Galle</option>
                  <option value="matara">Matara</option>
                  <option value="hambantota">Hambantota</option>
                  <option value="jaffna">Jaffna</option>
                  <option value="kilinochchi">Kilinochchi</option>
                  <option value="mannar">Mannar</option>
                  <option value="vavuniya">Vavuniya</option>
                  <option value="mullaitivu">Mullaitivu</option>
                  <option value="batticaloa">Batticaloa</option>
                  <option value="ampara">Ampara</option>
                  <option value="trincomalee">Trincomalee</option>
                  <option value="kurunegala">Kurunegala</option>
                  <option value="puttalam">Puttalam</option>
                  <option value="anuradhapura">Anuradhapura</option>
                  <option value="polonnaruwa">Polonnaruwa</option>
                  <option value="badulla">Badulla</option>
                  <option value="monaragala">Monaragala</option>
                  <option value="ratnapura">Ratnapura</option>
                  <option value="kegalle">Kegalle</option>
                </select>
              </div>
              <div
                className="form-group"
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                <button
                  type="button"
                  className="btn"
                  style={{ width: "200px" }}
                >
                  Find Courses
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Course Results Section */}
      <section
        className="course-results-section"
        style={{ padding: "2rem 0 5rem" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Your Recommended Course Order</h2>
            <p>
              Based on your Z-score and preferences, here are the courses you're
              eligible for, ordered by admission probability.
            </p>
          </div>

          {/* Sample Results (These would be dynamically generated in a real application) */}
          <div className="course-results">
            <div className="course-card">
              <h3>BSc in Computer Science</h3>
              <p>University of Moratuwa</p>
              <div className="course-details">
                <span className="detail-item">
                  <i className="fas fa-chart-line"></i> Min Z-Score: 1.7890
                </span>
                <span className="detail-item">
                  <i className="fas fa-users"></i> Intake: 150 students
                </span>
                <span className="detail-item">
                  <i className="fas fa-check-circle"></i> High Match (95%)
                </span>
              </div>
            </div>

            <div className="course-card">
              <h3>BSc in Software Engineering</h3>
              <p>University of Colombo School of Computing</p>
              <div className="course-details">
                <span className="detail-item">
                  <i className="fas fa-chart-line"></i> Min Z-Score: 1.7650
                </span>
                <span className="detail-item">
                  <i className="fas fa-users"></i> Intake: 120 students
                </span>
                <span className="detail-item">
                  <i className="fas fa-check-circle"></i> High Match (92%)
                </span>
              </div>
            </div>

            <div className="course-card">
              <h3>BSc in Information Technology</h3>
              <p>University of Sri Jayewardenepura</p>
              <div className="course-details">
                <span className="detail-item">
                  <i className="fas fa-chart-line"></i> Min Z-Score: 1.6980
                </span>
                <span className="detail-item">
                  <i className="fas fa-users"></i> Intake: 180 students
                </span>
                <span className="detail-item">
                  <i className="fas fa-check-circle"></i> Good Match (85%)
                </span>
              </div>
            </div>

            <div className="course-card">
              <h3>BSc in Information Systems</h3>
              <p>University of Kelaniya</p>
              <div className="course-details">
                <span className="detail-item">
                  <i className="fas fa-chart-line"></i> Min Z-Score: 1.6540
                </span>
                <span className="detail-item">
                  <i className="fas fa-users"></i> Intake: 160 students
                </span>
                <span className="detail-item">
                  <i className="fas fa-check-circle"></i> Good Match (80%)
                </span>
              </div>
            </div>

            <div className="course-card">
              <h3>BSc in Computer Engineering</h3>
              <p>University of Peradeniya</p>
              <div className="course-details">
                <span className="detail-item">
                  <i className="fas fa-chart-line"></i> Min Z-Score: 1.7320
                </span>
                <span className="detail-item">
                  <i className="fas fa-users"></i> Intake: 100 students
                </span>
                <span className="detail-item">
                  <i className="fas fa-check-circle"></i> Moderate Match (75%)
                </span>
              </div>
            </div>
          </div>

          {/* Z-Score Trends Section */}
          <div style={{ marginTop: "4rem" }}>
            <div className="section-title">
              <h2>Historical Z-Score Trends</h2>
              <p>
                View how the minimum Z-scores for popular courses have changed
                over the years.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "var(--shadow)",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  color: "#777",
                  marginBottom: "1rem",
                }}
              >
                Interactive chart would be displayed here in the actual
                application
              </p>
              <div
                style={{
                  height: "300px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "#777" }}>Z-Score Trend Chart Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
