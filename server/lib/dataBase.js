const mongoose = require("mongoose");
const dotenv = require("dotenv");

const databaseConnection = async () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.log("Database Error", error.message);
    });
};

module.exports = databaseConnection;
