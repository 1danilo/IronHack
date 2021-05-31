//Data types - Primitive
//Numbers 1 2 3 4 0.5
//String 'Lisbon' 'Miguel' '2'
//Bolean: true false
//Undefined
//Null

const age = 25; //=> Number
const doorNumber = '14' //=>String
console.log(typeof age);
console.log(typeof doorNumber);
const greeting = "Hello I'm a developer"; //=>String
const isVegetarian = false; //=>Boolean
const isFlexitarian = true; //=>Boolean
let address;
console.log(typeof address);
address = "Lisbon, Portugal";
//console.log(address);
//address = null; 
console.log(address);

//String interpolation => Concatenating variables values
console.log(`${greeting} ${address} yada yada`);

let number1 = 2;
let number2 = 3;
const result = number1 + number2;
console.log(result);

console.log(5 * 4);
console.log(8 / 2);
console.log(8 % 3);
//% (module) by 2 can be used to check if a number is even or odd

//String operations
address = "Av de baixo";
let zipcode = "1200 Lisbon, Portugal";
//string concatenation
let fullAddress = address + " " + zipcode;
console.log(fullAddress);

//Get the string's lenght
let size = fullAddress.length;
console.log(size)










