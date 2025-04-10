const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost", // Servidor de base de datos
    user: "root", 
    password: "12345678", 
    database: "laboratorios", // Nombre de la base de datos
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();

// Comprobar conexión
pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Error de conexión:", err.message);
    } else {
        console.log("✅ Conexión exitosa a la base de datos");
        connection.release();
    }
});