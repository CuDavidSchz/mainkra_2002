const DataModel = require("../models/data.model");

const dataController = {
    sendData: (req, res) => {
        const { nombre } = req.body;

        DataModel.saveData(nombre, (err) => {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.redirect("/");
        });
    }
};

module.exports = dataController;
