const controller = {};
const path = require("path");

// GETTERS 

controller.getIndex = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
};

controller.getDatos = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "presentation", "datos.html"));
};

controller.getPasatiempos = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "presentation", "hobbies.html"));
};

controller.getMusic = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "presentation", "music.html"));
};

module.exports = controller;