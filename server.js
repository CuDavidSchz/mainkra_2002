const http = require("http");
const fs = require("fs");
const path = require("path");
const { parse } = require("querystring");

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

    if (req.method === "GET" && rutasHTML[req.url]) {
        const filePath = path.join(__dirname, "public", rutasHTML[req.url]);
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>Error 500: Error interno del servidor</h1>");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(content);
            }
        });
        return;
    }

    if (req.method === "POST" && req.url === "/enviar-datos") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const datos = parse(body);

            const contenido = `Nombre: ${datos.nombre}\n---\n`;

            fs.appendFile("datos.txt", contenido, err => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/html" });
                    res.end("<h1>Error al guardar los datos</h1>");
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end("<h1>Datos guardados correctamente</h1>");
                }
            });
        });
        return;
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
