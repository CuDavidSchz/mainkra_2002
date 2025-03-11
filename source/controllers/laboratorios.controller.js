const controller = {};
const path = require("path");

// GETTERS 

controller.getqLab1 = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "labs", "qLab1.html"));
};

controller.getqLab3 = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "labs", "qLab3.html"));
};

controller.getqLab4 = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "labs", "qLab4.html"));
};

controller.getqLab5 = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "labs", "qLab5.html"));
};

module.exports = controller;