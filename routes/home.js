const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/datos", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "presentation", "datos.html"));
});

router.get("/pasatiempos", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "presentation", "hobbies.html"));
});

router.get("/musica", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "presentation", "music.html"));
});


module.exports = router;
