const fs = require('fs');

function escribirArchivo(texto) {
    fs.writeFile('mensaje.txt', texto, (err) => {
        if (err) {
            console.error("Error al escribir en el archivo:", err);
        } else {
            console.log("Texto guardado en mensaje.txt");
        }
    });
}


escribirArchivo("Apruebeme profe. Le prometo no ejercer.");
