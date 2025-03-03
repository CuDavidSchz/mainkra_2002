const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/laboratorios/qLab1", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "labs", "qLab1.html"));
});

router.get("/laboratorios/qLab3", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "labs", "qLab3.html"));
});

router.get("/laboratorios/qLab4", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "labs", "qLab4.html"));
});

router.get("/laboratorios/qLab5", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "labs", "qLab5.html"));
});

module.exports = router;
