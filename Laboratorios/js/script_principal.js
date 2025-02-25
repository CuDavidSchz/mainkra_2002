
/* 
Función del menu laboratorios SIN BULMA
*/

document.getElementById("laboratorios").addEventListener("change", function() {
    const url = this.value;
    if (url) {
        window.location.href = url; 
    }
});

/*
    Función del menú con BULMA  Mobile
*/

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active")
});
