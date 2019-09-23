/*
Нужно написать функцию,
которая возвращает n-ную запись в определенной последовательности,
причем n — число, которое передается в качестве аргумента функции.
 */

const fibonacci = num => {

    let fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }

    return fib[num];
}

console.log(fibonacci(3));
console.log(fibonacci(8));
console.log(fibonacci(12));