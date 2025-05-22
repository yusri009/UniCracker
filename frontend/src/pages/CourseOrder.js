import CourseResultsTable from "../components/CourseResultsTable";
import "../css/courseorder.css";

export default function CourseOrder() {
  return (
    <>
      {/* Course Search Section */}
      <section className="course-search-section">
        <div className="container">
          <div className="course-search">
            <h2
              style={{
                marginBottom: "1.5rem",
                color: "var(--primary-color)",
              }}
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
              Discover the best-fit university courses ranked by your Z-score
              and preferences to maximize your admission chances.
            </p>
          </div>
          <CourseResultsTable />
        </div>
      </section>
    </>
  );
}
