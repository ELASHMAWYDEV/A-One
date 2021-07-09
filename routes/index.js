const express = require("express");
const router = express.Router();
const { checkToken } = require("../middlewares/jwt");



router.use("/auth", require("./auth"));
router.use("/transactions",checkToken, require("./transactions"));


module.exports = router;