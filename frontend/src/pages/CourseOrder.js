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
              <div className="column">
                <div className="form-group row1">
                  <label htmlFor="zscore" id="zscore">
                    Your Z-Score
                  </label>
                  <input
                    type="number"
                    id="zscore"
                    name="zscore"
                    step="0.0001"
                    placeholder="e.g., 1.8543"
                    required
                  />
                </div>
                {/* District */}
                <div className="form-group row2">
                  <label htmlFor="district">District</label>
                  <select id="district" name="district" defaultValue="">
                    <option value="" disabled>
                      Select your district
                    </option>
                    {/* districts... */}
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
              </div>
              <div className="column">
                {/* Subject 1 */}
                <div className="form-group">
                  <label>Subject 1</label>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <select
                      className="subject-label"
                      name="subject1"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Subject
                      </option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="combined-maths">Combined Maths</option>
                      <option value="ict">ICT</option>
                      <option value="accounting">Accounting</option>
                      <option value="economics">Economics</option>
                      <option value="business-studies">Business Studies</option>
                      <option value="geography">Geography</option>
                      <option value="political-science">
                        Political Science
                      </option>
                      <option value="sinhala">Sinhala</option>
                      <option value="tamil">Tamil</option>
                      <option value="english">English</option>
                    </select>
                    <select name="result1" required defaultValue="">
                      <option value="" disabled>
                        Result
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="S">S</option>
                      <option value="W">W</option>
                    </select>
                  </div>
                </div>

                {/* Subject 2 */}
                <div className="form-group">
                  <label>Subject 2</label>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <select
                      className="subject-label"
                      name="subject2"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Subject
                      </option>
                      {/* same subject options as above */}
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="combined-maths">Combined Maths</option>
                      <option value="ict">ICT</option>
                      <option value="accounting">Accounting</option>
                      <option value="economics">Economics</option>
                      <option value="business-studies">Business Studies</option>
                      <option value="geography">Geography</option>
                      <option value="political-science">
                        Political Science
                      </option>
                      <option value="sinhala">Sinhala</option>
                      <option value="tamil">Tamil</option>
                      <option value="english">English</option>
                    </select>
                    <select name="result2" required defaultValue="">
                      <option value="" disabled>
                        Result
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="S">S</option>
                      <option value="W">W</option>
                    </select>
                  </div>
                </div>

                {/* Subject 3 */}
                <div className="form-group">
                  <label>Subject 3</label>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <select
                      className="subject-label"
                      name="subject3"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Subject
                      </option>
                      {/* same subject options as above */}
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="combined-maths">Combined Maths</option>
                      <option value="ict">ICT</option>
                      <option value="accounting">Accounting</option>
                      <option value="economics">Economics</option>
                      <option value="business-studies">Business Studies</option>
                      <option value="geography">Geography</option>
                      <option value="political-science">
                        Political Science
                      </option>
                      <option value="sinhala">Sinhala</option>
                      <option value="tamil">Tamil</option>
                      <option value="english">English</option>
                    </select>
                    <select name="result3" required defaultValue="">
                      <option value="" disabled>
                        Result
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="S">S</option>
                      <option value="W">W</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Button */}
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
