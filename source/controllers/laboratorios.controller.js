const controller = {};
const path = require("path");

/*

    G E T T E R S 
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

*/

controller.getqLab1 = (req, res) => {
    res.render("labs/qLab1", 
        {   
            title: "Laboratorio 1 - HTML",
            isLab: true,
        }
    );
};

controller.getqLab3 = (req, res) => {
    res.render("labs/qLab3", 
        {   
            title: "Laboratorio 3 - CSS",
            isLab: true,
        }
    );
};


/*
controller.getqLab4 = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "html", "labs", "qLab4.html"));
};
*/

controller.getqLab5 = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "html", "labs", "qLab5.html"));
};

controller.getqLab12 = (req, res) => {
    res.render("labs/qLab12", 
        {
            title: "Laboratorio 12 - HTML Dinámico",
            isLab: true,
        }
    );
};

controller.getqLab13 = (req, res) => {
    res.render("labs/qLab13", 
        {
            title: "Laboratorio 13 - MVC",
            isLab: true,
        }
    );
};

/*

    P O S T E R S  
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

*/



module.exports = controller;