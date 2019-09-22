//Напишите код, который выводит все простые числа из интервала от a до b.
let simpleNumber = function (a, b) {
    nextNumber:
    for (let i = a; i <= b; i++) {
        for (let j = 2; j < i; j++) {
            if ((i % j) == 0 ) continue nextNumber;
        }
        console.log(i);
    }
};

//simpleNumber(80, 101);

//Напишите if..else, соответствующий следующему switch
let checkBrowser = function(browser) {
    let msg;
    if (browser === 'Edge') {
        msg = "You've got the Edge!";
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        msg = "Okay we support these browsers too";
    } else {
        msg = 'We hope that this page looks ok!';
    }
    return msg;
};

//console.log(checkBrowser('Firefox'));

//Перепишите код с использованием одной конструкции switch
let checkNumber = function(number) {
    let msg;
    switch (number){
        case 0:
            msg = 'Вы ввели число 0';
            break;
        case 1:
            msg = 'Вы ввели число 1';
            break;
        case 2:
        case 3:
            msg = 'Вы ввели число 2, а может и 3';
            break;
        default:
            msg = 'Другое число';
    }
    return msg;
};

//console.log(checkNumber(5));

//Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
let msg;

function checkAge(age) {
    return (age > 18) || 'Родители разрешили?';
}

//console.log(checkAge(3));

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
let min = function(a,b) {
    return (a < b) ? a : b;
};

/*
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
*/

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
let pow = function(x,n) {
    let i = 1;
    let result = x;
    while (i != n){
        result *= x;
        i++;
    }
    return result;
};

//console.log(pow(3, 2));
//console.log(pow(3, 4));
//console.log(pow(1, 100));

//Замените код Function Expression стрелочной функцией

let ask = (question, yes, no) => {
    return (question == 1) ? yes() : no();
}

/*
ask(
    0,
    function() { console.log ("Вы согласились."); },
    function() { console.log ("Вы отменили выполнение."); }
);
*/
