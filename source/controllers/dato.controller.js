const db = require("../config/database");

// Guardar un nuevo dato en la base de datos
exports.guardarDato = async (req, res) => {
    const { dato } = req.body;

    if (!dato) {
        return res.status(400).send("El campo no puede estar vacío.");
    }

    try {
        await db.execute("INSERT INTO datoSinUsuario (dato) VALUES (?)", [dato]);
        res.redirect("/"); // Redirige al index después de guardar el dato
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al guardar el dato.");
    }
};

// Obtener todos los datos almacenados
exports.obtenerDatos = async (req, res) => {
    try {
        const [datos] = await db.execute("SELECT * FROM datoSinUsuario");
        res.render("index", { title: "Inicio - Odio JavaScript", datos: datos || [] }); // Asegura que 'datos' siempre tenga un valor
    } catch (error) {
        console.error(error);
        res.render("index", { title: "Inicio - Odio JavaScript", datos: [] }); // En caso de error, envía una lista vacía
    }
};

