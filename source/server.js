
// Dependencias: 

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/enviar-datos", (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).send("El campo no puede estar vacío.");
    }

    const contenido = `Dato recibido: ${nombre}\n`;

    fs.appendFile("datos-recibidos.txt", contenido, (err) => {
        if (err) {
            return res.status(500).send("Error al guardar los datos.");
        }
        
        res.redirect("/");
    });
});

const homeRoutes = require("./routes/home.routes");
app.use(homeRoutes);

const laboratoriosRoutes = require("./routes/laboratorios.routes");
app.use(laboratoriosRoutes);

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Error
app.use((req, res) => {
    res.status(404).send("<h1>⚠ Error 404: Página no encontrada</h1>");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
