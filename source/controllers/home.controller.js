const controller = {};
const path = require("path");

// GETTERS 

controller.getIndex = (req, res) => {
    const nombre = req.cookies.nombre_usuario || null;
    res.render("index",
        {
        title: "Inicio - Odio JavaScript",
        nombre,
        });
};

controller.getDatos = (req, res) => {
    res.render("presentation/datos",
        { title: "Mis datos"},
    );
};

controller.getPasatiempos = (req, res) => {
    res.render("presentation/pasatiempos",
        { title: "Mis pasatiempos"},
    );
};

controller.getMusic = (req, res) => {
    res.render("presentation/musica", 
        { title: "Música"},
    );
};

module.exports = controller;