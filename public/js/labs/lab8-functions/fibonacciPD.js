function fibonacciPD(n) {
    // Caso base
    if (n <= 0) {
        console.log(`El número de Fibonacci ${n} con programación dinámica es 0`)
    } else {
    let fiboNumbers = [0,1]; // Los fibonacci de 0 y 1
    let number = 0;
    for (let i = 2; i <= n; i ++) {
        number = (fiboNumbers[i - 2]) + (fiboNumbers[i - 1]);
        fiboNumbers.push(number);
    }
    console.log(`El número de Fibonacci ${n} con programación dinámica es ${fiboNumbers[fiboNumbers.length - 1]}`)
    }
}

fibonacciPD(8)