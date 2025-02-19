
/* 
Función del menu laboratorios
*/

document.getElementById("laboratorios").addEventListener("change", function() {
    const url = this.value;
    if (url) {
        window.location.href = url; 
    }
});
