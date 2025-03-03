const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log(`Solicitud recibida: ${req.url}`);

    // Si el usuario está en la raíz, servimos index.html
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);

    // Si el usuario accede a rutas como "/datos", "/musica", "/pasatiempos"
    const rutasHTML = {
        "/datos": "datos.html",
        "/pasatiempos": "hobbies.html",
        "/musica": "music.html",
    };

    if (rutasHTML[req.url]) {
        filePath = path.join(__dirname, "public", "html", "presentation", rutasHTML[req.url]);
    }

    // Si la URL es un archivo CSS o JS, servimos con el tipo de contenido correcto
    const extname = path.extname(filePath);
    let contentType = "text/html";
    if (extname === ".css") contentType = "text/css";
    if (extname === ".js") contentType = "text/javascript";
    if (extname === ".png") contentType = "image/png";
    if (extname === ".jpg" || extname === ".jpeg") contentType = "image/jpeg";

    // Leer y servir el archivo
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>Error 404: Página no encontrada</h1>");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
