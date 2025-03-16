const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/set-cookie", authController.setCookie);

module.exports = router;
