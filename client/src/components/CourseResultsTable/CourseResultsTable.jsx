import React, { useState, useEffect } from "react";
import "./courseresultstable.css";

export default function CourseResultsTable() {
  const initialCourses = [
    {
      id: 1,
      uniCode: "UOC001",
      course: "Law",
      university: "University of Colombo",
      zScore2024: 1.918,
      zScore2023: 1.8334,
      zScore2022: 1.8029,
      avgZScore: 1.8514,
      disabled: false,
    },
    {
      id: 2,
      uniCode: "UOC002",
      course: "Management",
      university: "University of Colombo",
      zScore2024: 1.3553,
      zScore2023: 1.3091,
      zScore2022: 1.2183,
      avgZScore: 1.2942,
      disabled: false,
    },
    {
      id: 3,
      uniCode: "UOK003",
      course: "Commerce",
      university: "University of Kelaniya",
      zScore2024: 1.1875,
      zScore2023: 1.0833,
      zScore2022: 1.0573,
      avgZScore: 1.1094,
      disabled: false,
    },
    {
      id: 4,
      uniCode: "UOJ004",
      course: "Computer Science",
      university: "University of Jaffna",
      zScore2024: 1.3798,
      zScore2023: 1.3719,
      zScore2022: 1.2744,
      avgZScore: 1.342,
      disabled: false,
    },
    {
      id: 5,
      uniCode: "UOM005",
      course: "Architecture",
      university: "University of Moratuwa",
      zScore2024: 1.5112,
      zScore2023: 1.4167,
      zScore2022: 1.3485,
      avgZScore: 1.4255,
      disabled: false,
    },
    {
      id: 6,
      uniCode: "UOC006",
      course: "Medicine",
      university: "University of Colombo",
      zScore2024: 2.1606,
      zScore2023: 2.1409,
      zScore2022: 2.0302,
      avgZScore: 2.1106,
      disabled: false,
    },
    {
      id: 7,
      uniCode: "EUSL007",
      course: "Nursing",
      university: "Eastern University of Sri Lanka",
      zScore2024: 1.4985,
      zScore2023: 1.4798,
      zScore2022: 1.3217,
      avgZScore: 1.4333,
      disabled: false,
    },
    {
      id: 8,
      uniCode: "UOP008",
      course: "Engineering",
      university: "University of Peradeniya",
      zScore2024: 1.789,
      zScore2023: 1.8012,
      zScore2022: 1.7543,
      avgZScore: 1.7815,
      disabled: false,
    },
    {
      id: 9,
      uniCode: "USJP009",
      course: "Information Systems",
      university: "University of Sri Jayewardenepura",
      zScore2024: 1.4352,
      zScore2023: 1.4018,
      zScore2022: 1.3829,
      avgZScore: 1.4066,
      disabled: false,
    },
    {
      id: 10,
      uniCode: "UOK010",
      course: "Psychology",
      university: "University of Kelaniya",
      zScore2024: 1.2679,
      zScore2023: 1.2204,
      zScore2022: 1.1743,
      avgZScore: 1.2209,
      disabled: false,
    },
    {
      id: 11,
      uniCode: "UOM123",
      course: "Computer Science",
      university: "University of Moratuwa",
      zScore2024: 1.789,
      zScore2023: 1.8012,
      zScore2022: 1.7543,
      avgZScore: 1.7815,
      disabled: false,
    },
    {
      id: 13,
      uniCode: "UOP789",
      course: "Engineering",
      university: "University of Peradeniya",
      zScore2024: 1.834,
      zScore2023: 1.821,
      zScore2022: 1.815,
      avgZScore: 1.8233,
      disabled: false,
    },
    {
      id: 14,
      uniCode: "UOJ101",
      course: "Business Administration",
      university: "University of Jaffna",
      zScore2024: 1.654,
      zScore2023: 1.672,
      zScore2022: 1.643,
      avgZScore: 1.6563,
      disabled: false,
    },
    {
      id: 16,
      uniCode: "UOK101",
      course: "Computer Science",
      university: "University of Kelaniya",
      zScore2024: 1.735,
      zScore2023: 1.721,
      zScore2022: 1.69,
      avgZScore: 1.715,
      disabled: false,
    },
    {
      id: 17,
      uniCode: "UOC303",
      course: "Software Engineering",
      university: "University of Colombo School of Computing",
      zScore2024: 1.823,
      zScore2023: 1.791,
      zScore2022: 1.805,
      avgZScore: 1.806,
      disabled: false,
    },
    {
      id: 18,
      uniCode: "UOJ606",
      course: "Computer Science",
      university: "University of Jaffna",
      zScore2024: 1.412,
      zScore2023: 1.43,
      zScore2022: 1.41,
      avgZScore: 1.417,
      disabled: false,
    },
    {
      id: 19,
      uniCode: "EUSL707",
      course: "Information Technology",
      university: "Eastern University of Sri Lanka",
      zScore2024: 1.298,
      zScore2023: 1.31,
      zScore2022: 1.285,
      avgZScore: 1.298,
      disabled: false,
    },
    {
      id: 20,
      uniCode: "UWU010",
      course: "Software Engineering",
      university: "Uva Wellassa University",
      zScore2024: 1.412,
      zScore2023: 1.395,
      zScore2022: 1.38,
      avgZScore: 1.396,
      disabled: false,
    },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [filteredCourses, setFilteredCourses] = useState(initialCourses);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [courseCategories, setCourseCategories] = useState([]);
  const [universityCategories, setUniversityCategories] = useState([]);
  const [selectedCourseCategories, setSelectedCourseCategories] = useState([]);
  const [selectedUniversityCategories, setSelectedUniversityCategories] =
    useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverItem, setDragOverItem] = useState(null);

  useEffect(() => {
    const uniqueCourses = [...new Set(courses.map((item) => item.course))];
    const uniqueUniversities = [
      ...new Set(courses.map((item) => item.university)),
    ];

    setCourseCategories(uniqueCourses);
    setUniversityCategories(uniqueUniversities);

    setSelectedCourseCategories(uniqueCourses);
    setSelectedUniversityCategories(uniqueUniversities);
  }, []);

  useEffect(() => {
    let result = [...courses];

    if (
      selectedCourseCategories.length > 0 ||
      selectedUniversityCategories.length > 0
    ) {
      result = result.filter(
        (course) =>
          selectedCourseCategories.includes(course.course) &&
          selectedUniversityCategories.includes(course.university)
      );
    }

    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredCourses(result);
  }, [
    courses,
    selectedCourseCategories,
    selectedUniversityCategories,
    sortConfig,
  ]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionIndicator = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "ascending" ? "⇣" : "⇡";
  };

  const handleCourseFilterChange = (category) => {
    setSelectedCourseCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleUniversityFilterChange = (category) => {
    setSelectedUniversityCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const toggleRowDisabled = (id, e) => {
    if (e.target.className === "drag-btn") return;

    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, disabled: !course.disabled } : course
      )
    );
  };

  const handleSummarize = () => {
    const enabledCourses = courses.filter((course) => !course.disabled);
    const disabledCourses = courses.filter((course) => course.disabled);

    const sortedEnabled = [...enabledCourses].sort(
      (a, b) => b.avgZScore - a.avgZScore
    );

    setCourses([...sortedEnabled, ...disabledCourses]);

    const tableElement = document.querySelector(".custom-course-table");
    if (tableElement) {
      tableElement.classList.add("summarize-animation");
      setTimeout(() => {
        tableElement.classList.remove("summarize-animation");
      }, 1000);
    }
  };

  const handleDragStart = (e, position) => {
    setDraggedItem(position);
    e.target.style.opacity = "0.4";
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnter = (e, position) => {
    setDragOverItem(position);
    e.target.closest("tr").classList.add("drag-over");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragLeave = (e) => {
    e.target.closest("tr")?.classList.remove("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.target.closest("tr")?.classList.remove("drag-over");

    const _courses = [...courses];
    const draggedItemContent = _courses[draggedItem];
    _courses.splice(draggedItem, 1);
    _courses.splice(dragOverItem, 0, draggedItemContent);

    setDraggedItem(null);
    setDragOverItem(null);
    setCourses(_courses);
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    e.target.classList.remove("dragging");
  };

  return (
    <div className="course-results">
      <div className="table-header">
        <h2>Course Result Table</h2>
        <div className="toggle-year">
          <button className="btn year-btn">2024</button>
          <button className="btn year-btn">2023</button>
          <button className="btn year-btn disabled">2022</button>
        </div>
        <div className="table-actions">
          <button className="btn summarize-btn" onClick={handleSummarize}>
            Summarize
          </button>
          <button className="btn save-btn">Save Order</button>
        </div>
      </div>

      <div className="table-layout">
        <div className="filter-sidebar">
          <h3 className="filter-title">Filter by</h3>

          <div className="filter-section">
            <h4>Course Categories</h4>
            <div className="filter-options">
              {courseCategories.map((category) => (
                <label key={category} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedCourseCategories.includes(category)}
                    onChange={() => handleCourseFilterChange(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>University Categories</h4>
            <div className="filter-options">
              {universityCategories.map((category) => (
                <label key={category} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedUniversityCategories.includes(category)}
                    onChange={() => handleUniversityFilterChange(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="table-content">
          <div className="custom-table-container">
            <table className="custom-course-table">
              <thead>
                <tr>
                  {/* <th onClick={() => requestSort("id")}>
                    No. {getSortDirectionIndicator("id")}
                  </th> */}
                  <th onClick={() => requestSort("uniCode")}>
                    Uni Code {getSortDirectionIndicator("uniCode")}
                  </th>
                  <th onClick={() => requestSort("course")}>
                    Course {getSortDirectionIndicator("course")}
                  </th>
                  <th onClick={() => requestSort("university")}>
                    University {getSortDirectionIndicator("university")}
                  </th>
                  <th onClick={() => requestSort("zScore2024")}>
                    2024 Z Score {getSortDirectionIndicator("zScore2024")}
                  </th>
                  <th onClick={() => requestSort("zScore2023")}>
                    2023 Z Score {getSortDirectionIndicator("zScore2023")}
                  </th>
                  {/* <th onClick={() => requestSort("zScore2022")}>
                    2022 Z Score {getSortDirectionIndicator("zScore2022")}
                  </th> */}
                  <th onClick={() => requestSort("avgZScore")}>
                    Average Z Score {getSortDirectionIndicator("avgZScore")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course, index) => (
                  <tr
                    key={course.id}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDragEnter={(e) => handleDragEnter(e, index)}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onDragEnd={handleDragEnd}
                    onClick={(e) => toggleRowDisabled(course.id, e)}
                    className={course.disabled ? "disabled-row" : ""}
                  >
                    {/* <td>{course.id}</td> */}
                    <td>{course.uniCode}</td>
                    <td>{course.course}</td>
                    <td>{course.university}</td>
                    <td>{course.zScore2024.toFixed(4)}</td>
                    <td>{course.zScore2023.toFixed(4)}</td>
                    {/* <td>{course.zScore2022.toFixed(4)}</td> */}
                    <td>{course.avgZScore.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
