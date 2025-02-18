
/* La interfaz de comunicación entre HTML y JS es el DOM. 


*/


// Objetos en JS

const objeto = {};
    // Atributos
    objeto.color = "Verde";
    objeto.valor = "Orquídea";


const boton = document.getElementById("boton_regar");

const imagen_menta = () => {
    const imagen = document.getElementById("imagen_menta");
    imagen.innerHTML = `<img alt="Foto de una planta de menta" 
        src="https://media.admagazine.com/photos/618a61cc51ab72df0a764124/3:2/w_3024,h_2016,c_limit/83664.jpg">`;

};

const imagen_jacaranda = () => {
    const imagen = document.getElementById("imagen_jacaranda");
    imagen.innerHTML = `<img alt="Foto de una planta de jacaranda" 
        src="https://www.tijuana.gob.mx/webpanel/catalogoPlantas/categorias/2021818112651439.png">`;

};

const imagen_macintosh = () => {
    const imagen = document.getElementById("imagen_macintosh");
    imagen.innerHTML = `<img alt="Foto de una planta de macintosh" 
        src="https://revistasumma.com/wp-content/uploads/2024/01/apple.jpg">`;
};

const regar_plantas = () => {
    imagen_menta();
    imagen_jacaranda();
    imagen_macintosh();

    boton.textContent = "Cortar";
    boton.onclick = cortar_plantas;
};

const cortar_plantas = () => {
    const imagen_tierra = "https://www.expoagro.com.ar/wp-content/uploads/close-up-female-gardener-s-hand-holding-seedling-scaled.jpg"

    document.getElementById("imagen_menta").innerHTML = 
        `<img alt="Foto de tierra" 
        src="${imagen_tierra}">`;
    
    document.getElementById("imagen_macintosh").innerHTML = 
        `<img alt="Foto de tierra" 
        src="${imagen_tierra}">`;

    document.getElementById("imagen_jacaranda").innerHTML = 
        `<img alt="Foto de tierra" 
        src="${imagen_tierra}">`;

    boton.textContent = "Regar";
    boton.onclick = regar_plantas;
};

boton.onclick = regar_plantas;
