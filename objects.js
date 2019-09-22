/*let user = {
    name: "John",
    age: 30,
    isAdmin: true,
};

for (let key in user){
    console.log(key + ': ' + user[key]);
}

let clone = {};

for (let key in user){
    clone[key] = user[key];
}

console.log (clone.name = "Вася");
*/

/*
let user = {};
user.name = "John";
user.surname = "Smith";

user.name = "Pete";
delete user.name;

for (let key in user){
    console.log(key + ': ' + user[key]);
}
*/
/*
function isEmpty(obj){
    for (let key in obj){
        if (key) return console.log(false);
    }
    return console.log(true);
}

let a = {};
a.name = "Вася";
isEmpty(a);
*/

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let a = {};

console.log(sumSalaries(salaries));
console.log(sumSalaries(a));

function sumSalaries(obj) {
    let sum = 0;
    for(let key in obj){
        sum += obj[key];
    }
    return sum;
}
*/

function multiplyNumeric(obj){
    for(let key in obj){
       if (typeof obj[key] == 'number') obj[key] *= 2;
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

for(let key in menu){
    console.log(key + ': ' + menu[key]);
}

