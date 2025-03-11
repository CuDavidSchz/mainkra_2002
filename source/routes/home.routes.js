const express = require("express");
const router = express.Router();
const controller = require("../controllers/home.controller")

router.get("/", controller.getIndex);

router.get("/datos", controller.getDatos);

router.get("/pasatiempos", controller.getPasatiempos)

router.get("/musica", controller.getMusic)


module.exports = router;
