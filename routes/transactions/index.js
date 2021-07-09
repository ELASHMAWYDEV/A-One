const express = require("express");
const router = express.Router();


router.use("/create", require("./create"));
router.use("/get", require("./get"));


module.exports = router;