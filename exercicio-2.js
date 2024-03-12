function fibonacciSequencia(num) {
    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] < num) {
        console.log(fibonacci.length)
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }

    if (fibonacci.includes(num)) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

console.log(fibonacciSequencia(5));