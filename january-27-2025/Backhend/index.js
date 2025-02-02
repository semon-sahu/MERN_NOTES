const express = require("express");
const app = express();
const stuRoute = require("./routes/stuRoute");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/reactData");
app.use(cors());
app.use("/students", stuRoute);
app.listen(8000, () => {
  console.log("listening");
});
