/*
Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
*/

"use string";

const searchVowels = (str) => {

    let count = 0;
    let vowels = {

                    a: 'a',
                    e: 'e',
                    i: 'i',
                    o: 'o',
                    u: 'u',

                  }

    for(let char of str) {
        (char in vowels) ? count++ : '';
    }

    return count;
}

console.log(searchVowels('hello'));
console.log(searchVowels('why'));