
// Dependencias: 

const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");

// Middlewares

const userData = require("./middlewares/userData");

const app = express();
const PORT = 3000;

/*
    Middlewares para ejecutar módulos.
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

*/

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());

app.use(userData.setUserData);

app.use(express.urlencoded({ extended: true }));

/*
    R U T A S
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

*/ 

const homeRoutes = require("./routes/home.routes");
app.use(homeRoutes);

const laboratoriosRoutes = require("./routes/laboratorios.routes");
app.use(laboratoriosRoutes);

const dataRoutes = require("./routes/data.routes");
app.use("/", dataRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

/*
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/

// Archivos estáticos
app.use(express.static(path.join(__dirname, ".." ,"public")));

// Error
app.use((req, res) => {
    res.status(404).send("<h1>⚠ Error 404: Página no encontrada</h1>");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
