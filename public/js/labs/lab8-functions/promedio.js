function calcularPromedio(arr) {
    if (arr.length === 0) return 0; 
    let suma = arr.reduce((total, num) => total + num, 0);
    return suma / arr.length;
}

let numeros = [10, 20, 30, 40, 50];
console.log("El promedio es:", calcularPromedio(numeros));
