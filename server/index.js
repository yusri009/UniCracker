const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDatabase = require("./config/connectDatabase");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

// DB connection
connectDatabase();

// Middleware
app.use(express.json());

app.use("/", require("./routes/authRoute"));

app.listen(process.env.PORT, () =>
  console.log(
    `Server started! Listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  )
);
