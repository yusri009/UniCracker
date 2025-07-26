const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Controller tests if the server is running
const test = (req, res) => {
  res.json("Test route is working!");
};

// Controller to register a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if name was provided
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    // check if password was provided
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        error: "User with this email already exists",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong on the server" });
  }
};

// Controller to log in a user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if email was provided
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    // check if password was provided
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    // find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    // compare password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT synchronously and send response
    const token = jwt.sign(
      { email: user.email, id: user._id, name: user.name },
      process.env.JWT_SECRET
    );

    res.cookie("token", token).status(200).json({
      jwt: token,
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong on the server" });
  }
};

const logoutUser = (req, res) => {
  try {
    res.clearCookie("token").status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong on the server" });
  }
};

const getProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong on the server" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  logoutUser,
  getProfile,
};
