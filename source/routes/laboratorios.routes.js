const express = require("express");
const router = express.Router();
const path = require("path");
const controller = require("../controllers/laboratorios.controller");

router.get("/laboratorios/qLab1", controller.getqLab1);

router.get("/laboratorios/qLab3", controller.getqLab3);

router.get("/laboratorios/qLab4", controller.getqLab4);

router.get("/laboratorios/qLab5", controller.getqLab5);

module.exports = router;
