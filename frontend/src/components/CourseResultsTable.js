import React, { useState, useEffect } from "react";
import "../css/courseresultstable.css";

export default function CourseResultsTable() {
  // Sample data for demonstration
  const initialCourses = [
    {
      id: 1,
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
      id: 2,
      uniCode: "UOC456",
      course: "Medicine",
      university: "University of Colombo",
      zScore2024: 1.923,
      zScore2023: 1.945,
      zScore2022: 1.912,
      avgZScore: 1.9267,
      disabled: false,
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
      uniCode: "SLIIT202",
      course: "Information Technology",
      university: "Sri Lanka Institute of Information Technology",
      zScore2024: 1.598,
      zScore2023: 1.612,
      zScore2022: 1.587,
      avgZScore: 1.599,
      disabled: false,
    },
    {
      id: 6,
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
      id: 7,
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
      id: 8,
      uniCode: "OUSL201",
      course: "Information Systems",
      university: "Open University of Sri Lanka",
      zScore2024: 1.356,
      zScore2023: 1.324,
      zScore2022: 1.31,
      avgZScore: 1.33,
      disabled: false,
    },
    {
      id: 9,
      uniCode: "UOM404",
      course: "Computer Engineering",
      university: "University of Moratuwa",
      zScore2024: 1.902,
      zScore2023: 1.89,
      zScore2022: 1.875,
      avgZScore: 1.889,
      disabled: false,
    },
    {
      id: 10,
      uniCode: "UOP505",
      course: "Data Science",
      university: "University of Peradeniya",
      zScore2024: 1.678,
      zScore2023: 1.655,
      zScore2022: 1.642,
      avgZScore: 1.658,
      disabled: false,
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
      uniCode: "RUSL808",
      course: "Information and Communication Technology",
      university: "Rajarata University of Sri Lanka",
      zScore2024: 1.344,
      zScore2023: 1.332,
      zScore2022: 1.3,
      avgZScore: 1.325,
      disabled: false,
    },
    {
      id: 14,
      uniCode: "SEUSL909",
      course: "Computer Science and Technology",
      university: "South Eastern University of Sri Lanka",
      zScore2024: 1.378,
      zScore2023: 1.36,
      zScore2022: 1.34,
      avgZScore: 1.359,
      disabled: false,
    },
    {
      id: 15,
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

  // State management
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

  // Extract unique categories on component mount
  useEffect(() => {
    const uniqueCourses = [...new Set(courses.map((item) => item.course))];
    const uniqueUniversities = [
      ...new Set(courses.map((item) => item.university)),
    ];

    setCourseCategories(uniqueCourses);
    setUniversityCategories(uniqueUniversities);

    // Initially select all categories
    setSelectedCourseCategories(uniqueCourses);
    setSelectedUniversityCategories(uniqueUniversities);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...courses];

    // Apply category filters
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

    // Apply sorting
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

  // Sorting handler
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Get sort direction indicator
  const getSortDirectionIndicator = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "ascending" ? "⇣" : "⇡";
  };

  // Toggle course category selection
  const handleCourseFilterChange = (category) => {
    setSelectedCourseCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Toggle university category selection
  const handleUniversityFilterChange = (category) => {
    setSelectedUniversityCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Toggle row disabled state
  const toggleRowDisabled = (id, e) => {
    // Prevent row disabling when clicking on drag button
    if (e.target.className === "drag-btn") return;

    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, disabled: !course.disabled } : course
      )
    );
  };

  // Summarize and reorder enabled rows
  const handleSummarize = () => {
    const enabledCourses = courses.filter((course) => !course.disabled);
    const disabledCourses = courses.filter((course) => course.disabled);

    // Sort enabled courses by average Z-score (or any other criteria)
    const sortedEnabled = [...enabledCourses].sort(
      (a, b) => b.avgZScore - a.avgZScore
    );

    // Combine sorted enabled courses with disabled courses at the end
    setCourses([...sortedEnabled, ...disabledCourses]);

    // Visual feedback for summarize action
    const tableElement = document.querySelector(".custom-course-table");
    if (tableElement) {
      tableElement.classList.add("summarize-animation");
      setTimeout(() => {
        tableElement.classList.remove("summarize-animation");
      }, 1000);
    }
  };

  // Drag and drop handlers
  const handleDragStart = (e, position) => {
    setDraggedItem(position);
    // Add visual feedback
    e.target.style.opacity = "0.4";
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnter = (e, position) => {
    setDragOverItem(position);
    // Add visual feedback for drop target
    e.target.closest("tr").classList.add("drag-over");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragLeave = (e) => {
    // Remove visual feedback
    e.target.closest("tr")?.classList.remove("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();

    // Remove visual feedback
    e.target.closest("tr")?.classList.remove("drag-over");

    // Copy the array to avoid direct state mutation
    const _courses = [...courses];

    // Remove the dragged item
    const draggedItemContent = _courses[draggedItem];

    // Remove from original position
    _courses.splice(draggedItem, 1);

    // Add at new position
    _courses.splice(dragOverItem, 0, draggedItemContent);

    // Reset drag state
    setDraggedItem(null);
    setDragOverItem(null);

    // Update the array
    setCourses(_courses);
  };

  const handleDragEnd = (e) => {
    // Reset opacity
    e.target.style.opacity = "1";
    e.target.classList.remove("dragging");
  };

  return (
    <div className="course-results">
      <div className="table-header">
        <h2>Course Result Table</h2>
        <button className="btn summarize-btn" onClick={handleSummarize}>
          Summarize
        </button>
      </div>

      <div className="table-layout">
        {/* Category Filters - Now aligned to the left */}
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
                  <th onClick={() => requestSort("id")}>
                    No. {getSortDirectionIndicator("id")}
                  </th>
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
                  <th onClick={() => requestSort("zScore2022")}>
                    2022 Z Score {getSortDirectionIndicator("zScore2022")}
                  </th>
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
                    <td>{course.id}</td>
                    <td>{course.uniCode}</td>
                    <td>{course.course}</td>
                    <td>{course.university}</td>
                    <td>{course.zScore2024.toFixed(4)}</td>
                    <td>{course.zScore2023.toFixed(4)}</td>
                    <td>{course.zScore2022.toFixed(4)}</td>
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
