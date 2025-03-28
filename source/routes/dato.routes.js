const express = require("express");
const router = express.Router();
const datoController = require("../controllers/dato.controller");

router.post("/guardar-dato", datoController.guardarDato);
router.get("/", datoController.obtenerDatos); // Ahora obtiene datos y los envía al index

module.exports = router;
