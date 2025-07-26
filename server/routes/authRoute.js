const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  logoutUser,
  getProfile,
} = require("../controllers/authController");

// Middleware to handle CORS
router.use(
  cors({
    credentials: true,
    // origin: "http://localhost:5173",
    origin: "*", // temporarily allowing all origins for sharing
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", getProfile);

module.exports = router;
