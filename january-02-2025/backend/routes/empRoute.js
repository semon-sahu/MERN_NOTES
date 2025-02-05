const express = require("express");
const router = express.Router();
const empController = require("../controller/empController");

router.post("/datasave", empController.empdata);

module.exports = router;
