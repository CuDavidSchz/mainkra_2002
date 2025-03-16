const controller = {};

// GETTERS 

controller.getIndex = (req, res) => {
    res.render("index",
        {
            title: "Inicio - Odio JavaScript",
        },
    );
};

controller.getDatos = (req, res) => {
    res.render("presentation/datos",
        { 
            title: "Mis datos",
        },
    );
};

controller.getPasatiempos = (req, res) => {
    res.render("presentation/pasatiempos",
        { 
            title: "Mis pasatiempos",
        },
    );
};

controller.getMusic = (req, res) => {
    res.render("presentation/musica", 
        { 
            title: "Música",
        },
    );
};

module.exports = controller;