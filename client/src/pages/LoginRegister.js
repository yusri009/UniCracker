import React, { useState, useEffect } from "react";
import "../css/loginregister.css";
import { Link } from "react-router-dom";

const LoginRegister = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    // Login form fields
    loginEmail: "",
    loginPassword: "",
    // Register form fields
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    registerConfirmPassword: "",
    registerZScore: "",
    registerDistrict: "",
    registerStream: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState({
    login: false,
    register: false,
  });
  const [animateForm, setAnimateForm] = useState(false);

  // Toggle between login and register forms with animation
  const toggleForm = () => {
    setAnimateForm(true);
    setTimeout(() => {
      setIsLoginForm(!isLoginForm);
      setAnimateForm(false);
    }, 400);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validateForm = (formType) => {
    let tempErrors = {};

    if (formType === "login") {
      // Login validation
      if (!formData.loginEmail) tempErrors.loginEmail = "Email is required";
      if (!formData.loginPassword)
        tempErrors.loginPassword = "Password is required";
    } else {
      // Register validation
      if (!formData.registerName) tempErrors.registerName = "Name is required";
      if (!formData.registerEmail)
        tempErrors.registerEmail = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.registerEmail))
        tempErrors.registerEmail = "Email is invalid";

      if (!formData.registerPassword)
        tempErrors.registerPassword = "Password is required";
      else if (formData.registerPassword.length < 6)
        tempErrors.registerPassword = "At least 6 characters";

      if (formData.registerPassword !== formData.registerConfirmPassword)
        tempErrors.registerConfirmPassword = "Passwords do not match";

      if (!formData.registerZScore)
        tempErrors.registerZScore = "Z-Score is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e, formType) => {
    e.preventDefault();

    if (validateForm(formType)) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Show success message or redirect
        alert(
          formType === "login"
            ? "Login successful!"
            : "Registration successful!"
        );
      }, 1500);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = (formType) => {
    setShowPassword({
      ...showPassword,
      [formType]: !showPassword[formType],
    });
  };

  // District options for dropdown
  const districtOptions = [
    "Colombo",
    "Gampaha",
    "Kalutara",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Galle",
    "Matara",
    "Hambantota",
    "Jaffna",
    "Kilinochchi",
    "Mannar",
    "Vavuniya",
    "Mullaitivu",
    "Batticaloa",
    "Ampara",
    "Trincomalee",
    "Kurunegala",
    "Puttalam",
    "Anuradhapura",
    "Polonnaruwa",
    "Badulla",
    "Monaragala",
    "Ratnapura",
    "Kegalle",
  ];

  // Stream options for dropdown
  const streamOptions = [
    "Science",
    "Commerce",
    "Arts",
    "Technology",
    "Engineering",
  ];

  return (
    <div className="login-register-page">
      <div className="login-register-container">
        <div className={`form-container ${animateForm ? "animate-out" : ""}`}>
          <div className="form-header">
            <div className="back-button">
              <Link to="/">
                <i id="i-left" className="fa-solid fa-angle-left"></i>
              </Link>
            </div>
            <div className="logo-container">
              <img
                src="/images/logo.png"
                alt="UniCracker Logo"
                className="logo-login"
              />
              <h1>UniCracker</h1>
            </div>
            <h2>{isLoginForm ? "Welcome Back!" : "Create Account"}</h2>
            <p>
              {isLoginForm
                ? "Sign in to continue your journey"
                : "Join us to discover your university path"}
            </p>
          </div>

          <div className="tabs">
            <button
              className={`tab ${isLoginForm ? "active" : ""}`}
              onClick={() => (isLoginForm ? null : toggleForm())}
            >
              Login
            </button>
            <button
              className={`tab ${!isLoginForm ? "active" : ""}`}
              onClick={() => (isLoginForm ? toggleForm() : null)}
            >
              Register
            </button>
          </div>

          <div className="forms-wrapper login-register-forms">
            {/* Login Form */}
            <div
              className={`form-content login-form ${
                isLoginForm ? "active" : ""
              }`}
            >
              <form onSubmit={(e) => handleSubmit(e, "login")}>
                <div className="form-group">
                  <div className="login-input-label">
                    <label className="login-label" htmlFor="loginEmail">
                      Email
                    </label>
                    {errors.loginEmail && (
                      <span className="error-message">{errors.loginEmail}</span>
                    )}
                  </div>
                  <div className="input-container">
                    <i className="fas fa-envelope icon"></i>
                    <input
                      type="email"
                      id="loginEmail"
                      name="loginEmail"
                      value={formData.loginEmail}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={errors.loginEmail ? "error" : ""}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="login-input-label">
                    <label htmlFor="loginPassword">Password</label>
                    {errors.loginPassword && (
                      <span className="error-message">
                        {errors.loginPassword}
                      </span>
                    )}
                  </div>
                  <div className="input-container">
                    <i className="fas fa-lock icon"></i>
                    <input
                      type={showPassword.login ? "text" : "password"}
                      id="loginPassword"
                      name="loginPassword"
                      value={formData.loginPassword}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={errors.loginPassword ? "error" : ""}
                    />
                    <i
                      className={`fas ${
                        showPassword.login ? "fa-eye-slash" : "fa-eye"
                      } toggle-password`}
                      onClick={() => togglePasswordVisibility("login")}
                    ></i>
                  </div>
                </div>

                <div className="form-options">
                  <div className="remember-me">
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a href="#" className="forgot-password">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <div className="spinner"></div> : "Login"}
                </button>

                <div className="social-login">
                  <p>Or login with</p>
                  <div className="social-icons">
                    <button type="button" className="social-btn google">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="social-btn facebook">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="social-btn twitter">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Register Form */}
            <div
              className={`form-content register-form ${
                !isLoginForm ? "active" : ""
              }`}
            >
              <form onSubmit={(e) => handleSubmit(e, "register")}>
                <div className="register-form-scrollable">
                  <div className="form-group">
                    <div className="login-input-label">
                      <label htmlFor="registerName">Full Name</label>
                      {errors.registerName && (
                        <span className="error-message">
                          {errors.registerName}
                        </span>
                      )}
                    </div>
                    <div className="input-container">
                      <i className="fas fa-user icon"></i>
                      <input
                        type="text"
                        id="registerName"
                        name="registerName"
                        value={formData.registerName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={errors.registerName ? "error" : ""}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="login-input-label">
                      <label htmlFor="registerEmail">Email</label>
                      {errors.registerEmail && (
                        <span className="error-message">
                          {errors.registerEmail}
                        </span>
                      )}
                    </div>
                    <div className="input-container">
                      <i className="fas fa-envelope icon"></i>
                      <input
                        type="email"
                        id="registerEmail"
                        name="registerEmail"
                        value={formData.registerEmail}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={errors.registerEmail ? "error" : ""}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="form-group half">
                      <div className="login-input-label">
                        <label htmlFor="registerPassword">Password</label>
                        {errors.registerPassword && (
                          <span className="error-message">
                            {errors.registerPassword}
                          </span>
                        )}
                      </div>
                      <div className="input-container">
                        <i className="fas fa-lock icon"></i>
                        <input
                          type={showPassword.register ? "text" : "password"}
                          id="registerPassword"
                          name="registerPassword"
                          value={formData.registerPassword}
                          onChange={handleChange}
                          placeholder="Create password"
                          className={errors.registerPassword ? "error" : ""}
                        />
                      </div>
                    </div>

                    <div className="form-group half">
                      <div className="login-input-label">
                        <label htmlFor="registerConfirmPassword">
                          Confirm Password
                        </label>
                        {errors.registerConfirmPassword && (
                          <span className="error-message">
                            {errors.registerConfirmPassword}
                          </span>
                        )}
                      </div>
                      <div className="input-container">
                        <i className="fas fa-lock icon"></i>
                        <input
                          type={showPassword.register ? "text" : "password"}
                          id="registerConfirmPassword"
                          name="registerConfirmPassword"
                          value={formData.registerConfirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm password"
                          className={
                            errors.registerConfirmPassword ? "error" : ""
                          }
                        />
                        <i
                          className={`fas ${
                            showPassword.register ? "fa-eye-slash" : "fa-eye"
                          } toggle-password`}
                          onClick={() => togglePasswordVisibility("register")}
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="login-input-label">
                      <label htmlFor="registerZScore">Z-Score</label>
                      {errors.registerZScore && (
                        <span className="error-message">
                          {errors.registerZScore}
                        </span>
                      )}
                    </div>
                    <div className="input-container">
                      <i className="fas fa-chart-line icon"></i>
                      <input
                        type="number"
                        step="0.0001"
                        id="registerZScore"
                        name="registerZScore"
                        value={formData.registerZScore}
                        onChange={handleChange}
                        placeholder="Enter your Z-Score"
                        className={errors.registerZScore ? "error" : ""}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="registerDistrict">District</label>
                      <div className="input-container">
                        <i className="fas fa-map-marker-alt icon"></i>
                        <select
                          id="registerDistrict"
                          name="registerDistrict"
                          value={formData.registerDistrict}
                          onChange={handleChange}
                          className={errors.registerDistrict ? "error" : ""}
                        >
                          <option value="">Select District</option>
                          {districtOptions.map((district, index) => (
                            <option key={index} value={district}>
                              {district}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.registerDistrict && (
                        <span className="error-message">
                          {errors.registerDistrict}
                        </span>
                      )}
                    </div>

                    {/* <div className="form-group half">
                    <label htmlFor="registerStream">Stream</label>
                    <div className="input-container">
                      <i className="fas fa-graduation-cap icon"></i>
                      <select
                        id="registerStream"
                        name="registerStream"
                        value={formData.registerStream}
                        onChange={handleChange}
                        className={errors.registerStream ? "error" : ""}
                      >
                        <option value="">Select Stream</option>
                        {streamOptions.map((stream, index) => (
                          <option key={index} value={stream}>
                            {stream}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.registerStream && (
                      <span className="error-message">
                        {errors.registerStream}
                      </span>
                    )}
                  </div> */}
                  </div>

                  <div className="terms-checkbox">
                    <input type="checkbox" id="termsAgreement" />
                    <label htmlFor="termsAgreement">
                      I agree to the <a href="#">Terms of Service</a> and{" "}
                      <a href="#">Privacy Policy</a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="spinner"></div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="form-footer">
            <p>
              {isLoginForm
                ? "Don't have an account? "
                : "Already have an account? "}
              <button type="button" className="toggle-btn" onClick={toggleForm}>
                {isLoginForm ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>

        <div className="illustration-container">
          <div className="illustration">
            <div className="illustration-content">
              <h2>{isLoginForm ? "New Here?" : "Welcome Back!"}</h2>
              <p>
                {isLoginForm
                  ? "Sign up and discover a great amount of university opportunities based on your Z-score!"
                  : "Login to access your personalized university recommendations and track your application progress!"}
              </p>
              <button className="illustration-btn" onClick={toggleForm}>
                {isLoginForm ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="animated-bg">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="square square-1"></div>
          <div className="square square-2"></div>
          <div className="triangle"></div>
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="particle-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
