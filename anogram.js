/*
Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/
let anagram = (str1, str2) => {

    let ind = 0;

    if (str1.length != str2.length) return false;

    let arr1 = str1.toLowerCase().split('').sort();
    let arr2 = str2.toLowerCase().split('').sort();

    for (let i = 0; i< str1.length; i++){
        (arr1[i] == arr2[i]) ? ind++ : '';
    }
    return (ind == str1.length) ?  true : false;


}

console.log(anagram('акт', 'тaк'));
console.log(anagram('hello', 'bye1'));


