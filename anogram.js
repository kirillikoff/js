/*
Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/
"use strict";

let anagram = (firstString, secondString) => {

    if (firstString.length != secondString.length) return false;

    let newFirstString = firstString.toLowerCase().split('').sort().join('');
    let newSecondString = secondString.toLowerCase().split('').sort().join('');

    return (newFirstString === newSecondString) ? true : false;

}

console.log(anagram('акт', 'так'));
console.log(anagram('hello', 'bye1'));
console.log(anagram('finder', 'Friend'));


