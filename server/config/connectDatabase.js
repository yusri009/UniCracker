const mongoose = require("mongoose");

const localDB = false; // Set to true for local MongoDB, false for remote MongoDB
const connectDatabase = () => {
  mongoose
    .connect(localDB ? process.env.DB_URL : process.env.MONGO_URL)
    .then((con) => {
      console.log("MongoDB connected to host: " + con.connection.host);
    })
    .catch((err) => {
      console.error("MongoDB connection error: ", err);
      process.exit(1); // Exit the process with failure
    });
};

module.exports = connectDatabase;
