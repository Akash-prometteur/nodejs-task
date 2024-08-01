const path = require("path");
const express = require("express");

const userRouter = require("./routes/userRoutes")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", userRouter);

module.exports = app;
