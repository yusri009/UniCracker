import { useState, useContext } from "react";
import {
  User,
  BookOpen,
  Award,
  LogOut,
  Settings,
  Save,
  Bell,
  Download,
} from "lucide-react";
// import { UserContext } from "../../../context/userContext";
import "./dashboard.css";
// import CourseOrderManager from "./CourseOrderManager";
import CourseResultsTableCopy from "../../components/CourseResultsTable/CourseResultsTableCopy";
import LogoutModal from "./LogoutModal";

export default function Dashboard() {
  // const { user } = useContext(UserContext);
  // Sample user data - in a real app, this would come from props or context
  const [user] = useState({
    username: "Hanfal",
    email: "hanfal@gmail.com",
    district: "Ampara",
    fullName: "Hanfal",
    studentId: "ST2024001",
    sub1: "Physics",
    sub2: "Combined Mathematics",
    sub3: "Information & Communication Technology",
  });

  // Sample subjects and results
  const [results] = useState([
    { subject: "Mathematics", grade: "A", marks: 85 },
    { subject: "Physics", grade: "B+", marks: 78 },
    { subject: "Chemistry", grade: "A-", marks: 82 },
    { subject: "Biology", grade: "A", marks: 88 },
    { subject: "English", grade: "B+", marks: 75 },
    { subject: "ICT", grade: "A+", marks: 92 },
  ]);

  // Sample course order preferences
  const [courseOrder, setCourseOrder] = useState([
    { id: 1, name: "Computer Science", code: "CS101", priority: 1 },
    { id: 2, name: "Software Engineering", code: "SE102", priority: 2 },
    { id: 3, name: "Information Technology", code: "IT103", priority: 3 },
    { id: 4, name: "Data Science", code: "DS104", priority: 4 },
    { id: 5, name: "Cybersecurity", code: "CY105", priority: 5 },
  ]);

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      message: "UGC Sri Lanka released 2023/2024 university Z-score cutoffs",
      type: "warning",
    },
    {
      id: 2,
      message:
        "We’ve added district-wise Z-score comparison and PDF download features to help you analyze university cutoffs faster and smarter!",
      type: "info",
    },
    { id: 3, message: "Profile update required", type: "error" },
  ]);

  const handleSaveCourseOrder = (newOrder) => {
    setCourseOrder(newOrder);
    // In a real app, this would save to backend
    alert("Course order saved successfully!");
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    // In a real app, this would clear auth tokens and redirect
    setShowLogoutModal(false);
    alert("Logged out successfully! Redirecting to login page...");
  };

  const downloadResults = () => {
    // In a real app, this would generate and download a PDF
    alert("Results PDF download started...");
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getGradeColor = (grade) => {
    if (grade.includes("A")) return "grade-A";
    if (grade.includes("B")) return "grade-B";
    if (grade.includes("C")) return "grade-C";
    return "grade-D";
  };

  const calculateGPA = () => {
    const gradePoints = {
      "A+": 4.0,
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      D: 1.0,
      F: 0.0,
    };

    const totalPoints = results.reduce(
      (sum, result) => sum + (gradePoints[result.grade] || 0),
      0
    );
    return (totalPoints / results.length).toFixed(2);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div>
            <h1 className="header-title">Welcome back, {user.fullName}!</h1>
            <p className="header-subtitle">
              Manage your profile and course preferences
            </p>
          </div>

          <div className="header-icons">
            <div className="notification-icon-wrapper">
              <Bell className="notification-icon" size={24} />
              {notifications.length > 0 && (
                <span className="notification-badge">
                  {notifications.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="notifications-section">
          <h3 className="notifications-title">
            <Bell size={18} />
            Notifications
          </h3>
          <div className="notifications-list">
            {notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                • {notification.message}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Profile Section */}
      <div className="profile-card">
        <div className="profile-card-content">
          <div className="profile-avatar">{getInitials(user.fullName)}</div>
          <div className="profile-details">
            <h2 className="profile-name">{user.fullName}</h2>
            <p className="profile-student-id">Student ID: {user.studentId}</p>

            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">Username</span>
                <span className="info-value">{user.username}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{user.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">District</span>
                <span className="info-value">{user.district}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Subject 1</span>
                <span className="info-value">{user.sub1} : C</span>
              </div>
              <div className="info-item">
                <span className="info-label">Subject 2</span>
                <span className="info-value">{user.sub2} : S</span>
              </div>
              <div className="info-item">
                <span className="info-label">Subject 3</span>
                <span className="info-value">{user.sub3} : B</span>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-primary">
            <Settings size={20} />
            Edit Profile
          </button>
          <button className="btn-danger" onClick={handleLogout}>
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Results Section */}
      {/* <div className="results-section">
        <div className="results-header">
          <div className="results-title-group">
            <Award className="results-icon" size={24} />
            <h2 className="results-title">Academic Results</h2>
          </div>

          <div className="results-summary">
            <div className="gpa-display">
              <p className="gpa-label">Overall GPA</p>
              <p className="gpa-value">{calculateGPA()}</p>
            </div>
            <button onClick={downloadResults} className="btn-secondary">
              <Download size={20} />
              Download PDF
            </button>
          </div>
        </div>

        <div className="results-grid">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              <div className="result-subject">{result.subject}</div>
              <div className={`result-grade ${getGradeColor(result.grade)}`}>
                {result.grade}
              </div>
              <div className="result-marks">{result.marks}%</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Course Order Section */}
      {/* <div className="course-order-section">
        <div className="course-order-header">
          <BookOpen className="course-order-icon" size={24} />
          <h2 className="course-order-title">Course Preferences</h2>
        </div>

        <CourseOrderManager
          initialCourses={courseOrder}
          onSave={handleSaveCourseOrder}
        />
      </div> */}
      <CourseResultsTableCopy />

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
        userInfo={user}
      />
    </div>
  );
}
