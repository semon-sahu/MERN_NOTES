const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  empno: Number,
  empname: String,
  empdep: String,
  empsal: Number,
});

module.exports = mongoose.model("empd", employeeSchema);
