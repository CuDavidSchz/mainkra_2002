function guardarNombre() {
    const nombre = prompt("Escribe tu nombre:");
    if (nombre) {
        document.cookie = `nombre_usuario=${nombre}; path=/; max-age=15`; // Dura 15 segundos
        location.reload(); // Recarga la página para actualizar el nombre
    }
}

function obtenerCookie(nombre) {
    const cookies = document.cookie.split("; ").map(cookie => cookie.split("="));
    const cookie = cookies.find(c => cookie[0] === nombre);
    return cookie ? cookie[1] : null;
}

// Al cargar la página, enviamos el nombre al servidor para que lo renderice
document.addEventListener("DOMContentLoaded", () => {
    const nombre = obtenerCookie("nombre_usuario");
    if (nombre) {
        fetch("/set-cookie", { method: "POST", body: JSON.stringify({ nombre }), headers: { "Content-Type": "application/json" }});
    }
});
