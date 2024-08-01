const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const dbConnection = mongoose.connect(DB, {}).then(() => {
  console.log("DB connection successful!");
});

module.exports = dbConnection;
