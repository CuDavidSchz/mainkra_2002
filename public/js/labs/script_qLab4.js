

function generarTabla() {
    let num = parseInt(document.getElementById("pNumber1").value);
    let html = "<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
    for (let i = 1; i <= num; i++) {
        html += `<tr>
                    <td>${i}</td>
                    <td>${i ** 2}</td>
                    <td>${i ** 3}</td>
                </tr>`;
    }
    html += "</table>";
    document.write(html);  // O, mejor, asignarlo a un contenedor existente.
}

