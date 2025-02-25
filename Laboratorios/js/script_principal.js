
/* 
Función del menu laboratorios SIN BULMA
*/

document.getElementById("laboratorios").addEventListener("change", function() {
    const url = this.value;
    if (url) {
        window.location.href = url; 
    }
});
