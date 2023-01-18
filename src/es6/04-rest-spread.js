//Arrays destructuring
let fruits = ['Apple','Banana'];
let[a,b]= fruits;
console.log(a,b);

//Object destructuring
let user ={username: 'Juanes', age:34};
let {username,age} = user;
console.log(username, user.age || user);

// spread operator

let person = {name: 'oscar', age: 28};
let country = 'MX';
let data = {id: 1, ...person, country};
console.log(data);

// rest

function sumar(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values [0];
}
sumar(1,2,3,4,5);