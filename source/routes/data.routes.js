const express = require("express");
const router = express.Router();
const dataController = require("../controllers/data.controller");

router.post("/enviar-datos", dataController.sendData);

module.exports = router;
