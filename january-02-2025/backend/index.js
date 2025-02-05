const express = require("express");
const empRoute = require("./routes/empRoute");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

mongoose.connect("mongodb://127.0.0.1:27017/Empppp").then(() => {
  console.log("connected to database");
});

app.use(cors());
app.use("/employee", empRoute);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
