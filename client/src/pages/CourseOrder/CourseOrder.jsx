import CourseResultsTable from "../../components/CourseResultsTable/CourseResultsTable";
import "./courseorder.css";

export default function CourseOrder() {
  const subjects = [
    { code: "S01", name: "Physics" },
    { code: "S02", name: "Chemistry" },
    { code: "S03", name: "Combined Mathematics" },
    { code: "S04", name: "Agricultural Science" },
    { code: "S05", name: "Biology" },
    { code: "S06", name: "Mathematics" },
    { code: "S07", name: "Higher Mathematics" },
    { code: "S09", name: "General English" },
    { code: "S10", name: "Civil Technology" },
    { code: "S11", name: "Mechanical Technology" },
    { code: "S12", name: "Electrical, Electronic and Information Technology" },
    { code: "S13", name: "Food Technology" },
    { code: "S14", name: "Agriculture Technology" },
    { code: "S15", name: "Bio Resource Technology" },
    { code: "S16", name: "Information & Communication Technology" },
    { code: "S17", name: "Economics" },
    { code: "S18", name: "Geography" },
    { code: "S19", name: "Political Science" },
    { code: "S20", name: "Logic and Scientific Method" },
    { code: "S21", name: "History" },
    { code: "S22", name: "Home Economics" },
    { code: "S23", name: "Communication & Media Studies" },
    { code: "S24", name: "Business Statistics" },
    { code: "S25", name: "Business Studies" },
    { code: "S26", name: "Accounting" },
    { code: "S27", name: "Buddhism" },
    { code: "S28", name: "Hinduism" },
    { code: "S29", name: "Christianity" },
    { code: "S30", name: "Islam" },
    { code: "S31", name: "Buddhist Civilization" },
    { code: "S32", name: "Hindu Civilization" },
    { code: "S33", name: "Islam Civilization" },
    { code: "S34", name: "Greek and Roman Civilization" },
    { code: "S35", name: "Christian Civilization" },
    { code: "S36", name: "Art" },
    { code: "S37", name: "Dancing (Indigenous)" },
    { code: "S38", name: "Dancing (Bharatha)" },
    { code: "S39", name: "Music (Oriental)" },
    { code: "S40", name: "Music (Carnatic)" },
    { code: "S41", name: "Music (Western)" },
    { code: "S42", name: "Drama and Theatre (Sinhala)" },
    { code: "S43", name: "Drama and Theatre (Tamil)" },
    { code: "S44", name: "Drama and Theatre (English)" },
    { code: "S45", name: "Engineering Technology" },
    { code: "S46", name: "Biosystems Technology" },
    { code: "S47", name: "Science for Technology" },
    { code: "S48", name: "Sinhala" },
    { code: "S49", name: "Tamil" },
    { code: "S50", name: "English" },
    { code: "S51", name: "Pali" },
    { code: "S52", name: "Sanskrit" },
    { code: "S53", name: "Arabic" },
    { code: "S54", name: "Malay" },
    { code: "S55", name: "French" },
    { code: "S56", name: "German" },
    { code: "S57", name: "Russian" },
    { code: "S58", name: "Hindi" },
    { code: "S59", name: "Chinese" },
    { code: "S60", name: "Japanese" },
  ];

  const results = ["A", "B", "C", "S", "W"];

  const districts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Monaragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  return (
    <>
      <section className="course-search-section">
        <div className="container">
          <div className="course-search">
            <h2
              style={{ marginBottom: "1.5rem", color: "var(--primary-color)" }}
            >
              Enter Your Details
            </h2>
            <form className="search-form">
              <div className="column">
                <div className="form-group row1">
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
                <div className="form-group row2">
                  <label htmlFor="district">District</label>
                  <select id="district" name="district" defaultValue="">
                    <option value="" disabled>
                      Select your district
                    </option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="column">
                {[1, 2, 3].map((num) => (
                  <div className="form-group" key={num}>
                    <label>{`Subject ${num}`}</label>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <select
                        className="subject-label"
                        name={`subject${num}`}
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Subject
                        </option>
                        {subjects.map((subject) => (
                          <option key={subject.code} value={subject.code}>
                            {subject.name}
                          </option>
                        ))}
                      </select>
                      <select name={`result${num}`} required defaultValue="">
                        <option value="" disabled>
                          Result
                        </option>
                        {results.map((result) => (
                          <option key={result} value={result}>
                            {result}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
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
