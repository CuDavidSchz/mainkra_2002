const express = require("express");
const router = express.Router();
const controller = require("../controllers/laboratorios.controller");

router.get("/laboratorios/qLab1", controller.getqLab1);

router.get("/laboratorios/qLab3", controller.getqLab3);

// router.get("/laboratorios/qLab4", controller.getqLab4); // No lo he terminado xd

router.get("/laboratorios/qLab5", controller.getqLab5);

router.get("/laboratorios/qLab12", controller.getqLab12);

router.get("/laboratorios/qLab13", controller.getqLab13);

module.exports = router;
