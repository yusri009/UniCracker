import React, { useState, useEffect } from "react";
import {
  ChevronUp,
  ChevronDown,
  Save,
  RotateCcw,
  Plus,
  Trash2,
} from "lucide-react";
import "./dashboard.css";

const CourseOrderManager = ({ initialCourses = [], onSave }) => {
  const [courses, setCourses] = useState(initialCourses);
  const [hasChanges, setHasChanges] = useState(false);
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseCode, setNewCourseCode] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    setCourses(initialCourses);
  }, [initialCourses]);

  const updatePriorities = (courseList) => {
    return courseList.map((course, index) => ({
      ...course,
      priority: index + 1,
    }));
  };

  const moveCourse = (fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= courses.length) return;

    const newCourses = [...courses];
    const [movedCourse] = newCourses.splice(fromIndex, 1);
    newCourses.splice(toIndex, 0, movedCourse);

    const updatedCourses = updatePriorities(newCourses);
    setCourses(updatedCourses);
    setHasChanges(true);
  };

  const removeCourse = (courseId) => {
    const newCourses = courses.filter((course) => course.id !== courseId);
    const updatedCourses = updatePriorities(newCourses);
    setCourses(updatedCourses);
    setHasChanges(true);
  };

  const addCourse = () => {
    if (!newCourseName.trim() || !newCourseCode.trim()) return;

    const newCourse = {
      id: Date.now(), // Simple ID generation
      name: newCourseName.trim(),
      code: newCourseCode.trim(),
      priority: courses.length + 1,
    };

    setCourses([...courses, newCourse]);
    setNewCourseName("");
    setNewCourseCode("");
    setShowAddForm(false);
    setHasChanges(true);
  };

  const resetOrder = () => {
    setCourses(initialCourses);
    setHasChanges(false);
  };

  const saveOrder = () => {
    if (onSave) {
      onSave(courses);
    }
    setHasChanges(false);
  };

  const getPriorityColorClass = (priority) => {
    if (priority <= 2) return "priority-green";
    if (priority <= 4) return "priority-yellow";
    return "priority-red";
  };

  return (
    <div className="course-order-manager">
      <div className="manager-header">
        <div>
          <h3 className="manager-title">Course Order Management</h3>
          <p className="manager-subtitle">
            Arrange your course preferences in order of priority
          </p>
        </div>

        <div className="manager-actions">
          {hasChanges && (
            <button onClick={resetOrder} className="btn-reset">
              <RotateCcw size={16} />
              Reset
            </button>
          )}

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn-add-course"
          >
            <Plus size={16} />
            Add Course
          </button>

          <button
            onClick={saveOrder}
            disabled={!hasChanges}
            className="btn-save-order"
          >
            <Save size={16} />
            Save Order
          </button>
        </div>
      </div>

      {/* Add Course Form */}
      {showAddForm && (
        <div className="add-course-form">
          <h4 className="add-course-title">Add New Course</h4>
          <div className="add-course-inputs">
            <input
              type="text"
              placeholder="Course Name"
              value={newCourseName}
              onChange={(e) => setNewCourseName(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Course Code"
              value={newCourseCode}
              onChange={(e) => setNewCourseCode(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="add-course-buttons">
            <button
              onClick={addCourse}
              disabled={!newCourseName.trim() || !newCourseCode.trim()}
              className="btn-add-confirm"
            >
              Add Course
            </button>
            <button
              onClick={() => {
                setShowAddForm(false);
                setNewCourseName("");
                setNewCourseCode("");
              }}
              className="btn-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Course List */}
      <div className="course-list-container">
        {courses.length === 0 ? (
          <div className="no-courses-message">
            <p>No courses added yet. Click "Add Course" to get started.</p>
          </div>
        ) : (
          courses.map((course, index) => (
            <div key={course.id} className="course-item-card">
              <div className="course-item-content">
                <div
                  className={`course-priority-circle ${getPriorityColorClass(
                    course.priority
                  )}`}
                >
                  {course.priority}
                </div>

                <div>
                  <h4 className="course-item-name">{course.name}</h4>
                  <p className="course-item-code">{course.code}</p>
                </div>
              </div>

              <div className="course-item-actions">
                <div className="course-move-buttons">
                  <button
                    onClick={() => moveCourse(index, index - 1)}
                    disabled={index === 0}
                    className="btn-move-up"
                    title="Move up"
                  >
                    <ChevronUp size={20} />
                  </button>
                  <button
                    onClick={() => moveCourse(index, index + 1)}
                    disabled={index === courses.length - 1}
                    className="btn-move-down"
                    title="Move down"
                  >
                    <ChevronDown size={20} />
                  </button>
                </div>

                <button
                  onClick={() => removeCourse(course.id)}
                  className="btn-remove-course"
                  title="Remove course"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {hasChanges && (
        <div className="unsaved-changes-message">
          <p>
            You have unsaved changes. Don't forget to save your course order!
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseOrderManager;
