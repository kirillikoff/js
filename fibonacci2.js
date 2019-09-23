/*
Нужно написать функцию,
которая возвращает n-ную запись в определенной последовательности,
причем n — число, которое передается в качестве аргумента функции.

Реккурсия
 */

const fibonacci = num => {

    if(num < 2) {
        return num
    }

    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(12));