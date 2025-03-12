const fs = require("fs");
const path = require("path");

const DataModel = {
    saveData: (nombre, callback) => {
        if (!nombre) {
            return callback(new Error("El campo no puede estar vacío."));
        }

        const contenido = `Dato recibido: ${nombre}\n`;
        const filePath = path.join(__dirname, "../datos-recibidos.txt");

        fs.appendFile(filePath, contenido, (err) => {
            if (err) {
                return callback(new Error("Error al guardar los datos."));
            }
            callback(null);
        });
    }
};

module.exports = DataModel;
