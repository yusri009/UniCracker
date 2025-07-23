const User = require("../models/user");

const test = (req, res) => {
  res.json("Test route is working!");
};

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
    // create user
    const user = await User.create({
      name,
      email,
      password,
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

module.exports = {
  test,
  registerUser,
};
