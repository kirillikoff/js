let wordPalindrome = function (str){
    const wordPlm = str.toLowerCase().split('').reverse().join('');
    return (wordPlm === str.toLowerCase());
}

console.log(wordPalindrome('One'));
console.log(wordPalindrome('ANna'));
console.log(wordPalindrome('raceCAr'));

