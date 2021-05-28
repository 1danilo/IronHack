/*
print the numbers 1 through 50,
if the number is divisible by 5, skip it,
if the number is divisible by 10 or 15, print “Donkey!”,
if the number is not divisible by 2 and the previous number is divisible by 10, print “Monkey!”.

for (let i = 1; i <= 50; i++){
    console.log(i)
  }
    if (i % 5 === 0) { 
      continue; 
    }
      console.log(i)
    
   if (i % 10 === 0 || i % 15 === 0){ 
      console.log("Donkey"); 
    
    } if (i % 2 !== 0 && i.lenght -1 % 10 === 0){ 
      console.log("Monkey"); 
    }
*/

/*
for (let i = 1; i <= 50; i++) { 
    if (i % 10 === 0 || i % 15 === 0) { 
     console.log("Donkey"); 
      } else if(i % 2 !== 0 && i-1 % 10 === 0) {
        console.log("Monkey"); 
    }
  else if(i % 5 === 0){ 
         continue; 
    }  else {
        console.log(i)
    }
}
*/

/*
//Create an array with 6 of your favorite foods. With the loop of your choice, iterate through the array, but only print out the foods with an even index.

const favoriteFoods = ['rice', 'meat', 'potato', 'candy', 'banana', 'coffee'];
for(i = 0; i <=favoriteFoods.length; i++)
if (i % 2 === 0)
console.log(i)
*/

/*
//Check if the word appears in given array and print out if it does or doesn’t:
let word = 'miami';
let arr = ['bcn', 'mia', 'sao', 'mex', 'par', 'miami', 'ams', 'ber', 'paris', 'lis', 'mad'];

for(i=0; i < arr.length; i++) {
  if(arr[i] === word){
    console.log("Yes it appears")
  }
}
*/


/*
//Given array of numbers, calculate the sum:

const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

for (i=0; i<=prices.length; i++){
  sum += prices[i];
}
sum.toFixed(2);
console.log (sum);
*/


/*
Find the value of the price property, and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. Update the object with :

the new property - discount and the corresponding value (7% or 10%) and
the new price.

let product = {
  name: 'headphones',
  price: 100
  discount: 
};

let discount1 = product.price * .1;
let discount2 = product.price * .07;

let newPrice1 = product.price - discount1;
let newPrice2 = product.price - discount2;

if (product.price > 100){
    product.price = newPrice1;
} else {
    product.price = newPrice2;
}    
*/


/*
Using the given array of objects:
let products = [
  {
    name: 'iPhone',
    price: 799.99
  },
  {
    name: 'Samsung Galaxy S10',
    price: 900.0
  }
];

display price of iPhone,
console.log(products[0].price)

display both phones’ names,
console.log(products[0].name)
console.log(products[1].name)

add a new phone at the beginning of the array,
products.unshift({name: "Windows",price: 800})
console.log(products)

remove the last element of the array
products.pop()

/*
Given the array, print:

let course = {
  name: 'Web Development',
  type: ['full-time', 'part-time'],
  topics: ['HTML/CSS & Responsive Design', 'JavaScript', 'MongoDB', 'Node', 'Express', 'React']
};

your course type (full-time or part-time)
console.log(course.type[0])

the most familiar topic
console.log(course.topics[0])

the least familiar topic
console.log(course.topics[2])
*/


/*
Given the object with nested objects in it, print:
let student = {
  firstName: 'Ana',
  lastName: 'Blair',
  course: {
    name: 'Web Development',
    type: 'part-time'
  },
  attendedIn: 'Madrid',
  address: {
    street: 'Happy Street',
    number: 123,
    city: 'Barcelona',
    zip: 08015,
    country: 'Spain'
  }
};
 
// console.log(???); // => Web Development
console.log(student.course.name)

// console.log(???); // => Happy Street
console.log(student.address.street)

// console.log(???);
// => Ana moved from Barcelona to Madrid to take part-time Web Development course.
console.log(student.firstName + " " + "moved from" " " + student.address.city + " " + "to" + " " + student.attendedIn + " " + "to take" + " " + student.course.type + " " + student.course.name + " " + "course")

/*
Given a 2D array, print the following:
const ironCampuses = [
  ["Mexico City", "Miami", "Sao Paulo"],
  ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
];
console.log(ironCampuses[?][?]); // => Miami
console.log(ironCampuses[0][1])

console.log(ironCampuses[?][?]); // => Amsterdam
console.log(ironCampuses[1][0])

console.log(ironCampuses[?][?]); // => Paris

Use the example from the lesson with frameworks to retrieve the following:
// console.log(???); // => ExpressJS

// console.log(???); // => In Ironhack, I'll learn ExpressJS and ReactJS.
console.log(basic.frameworks[0].list[0].name)

//Functions 

The function declaration is the process of creating a function, but not executing it.
function sayHello() {
  console.log('Hello!');
}

The process of executing (calling) the function is known as function invocation.
This step is actually super easy. To call/invoke the function, we just need to use the name we gave the function (in our case: sayHello) and add empty parenthesis after it: sayHello():
sayHello(); // => Hello!
sayHello(); // => Hello!
sayHello(); // => Hello!

Function Syntax
We saw how we can create a function so now let’s just summarize what is the rule when creating any function:
function <name> ([<argument_list>]) {
  <instructions>
 
  [return <expression>;]
}

Word function is the reserved word - whenever you want to create a function, it has to have this word (it is not optional neither can be replaced with some other word);
Anything that is placed between [] symbolizes optional content - it can be there but doesn’t have to.
In simple English:
// keyword  function   parameters (if any)
// ^         name  ________|
// |          |   |
function sayHello() {
  // the code or so called the body of the function
}

Arguments and Parameters
We already mentioned that function might have some arguments/, so let’s see what is that all about.
In our previous example, the function does the same thing all over again, and we really can’t add much too it - it will always just be able to print Hello.
If we wanted to sayHello in different languages, we would have to create different functions:
function sayHelloFr() {
  console.log('Bonjour!');
}
function sayHelloGer() {
  console.log('Hallo!');
}
function sayHelloEsp() {
  console.log('Hola!');
}
sayHelloFr(); // => Bonjour!
sayHelloGer(); // => Hallo!
sayHelloEsp(); // => Hola!

It seems a bit redundant, wouldn’t you say so? There is one thing we can change definitely and make our life easier and our code more readable: to create one function that will receive parameter which will define the language and the proper greeting. Let’s see how to do this:
function sayHello(language) {
  switch (language) {
    case 'fr':
      console.log('Bonjour!');
      break;
    case 'ger':
      console.log('Hallo!');
      break;
    case 'esp':
      console.log('Hola!');
      break;
    default:
      console.log('Hello!');
  }
}
 
sayHello('ger'); // => Hallo!
sayHello('fr'); // => Bonjour!
sayHello('esp'); // => Hola!
sayHello(); // => Hello!

Not too bad, right?
Now let’s see what an argument is and what is a parameter.

Parameter: the variable name, which is part of the function declaration.
Argument is the value passed to function in the moment of its invocation.
In our case in the function sayHello(language){} - language is a parameter; this word is a placeholder and can be any word possible. The only thing you have to worry about is to stay consistent: whichever word you use when declaring the function, the same word needs to be used in it:
function sayHello(language) {
  //                  |
  //             -----
  //            |
  switch (language) {
  }
}

Or any other word - but make it meaningful:
function sayHello(lang) {
  //                 |
  //        ----------
  //        |
  switch (lang) {
  }
}

So when declaring a function we are talking about parameters, but when invoking a function we are talking about arguments:
// we passed argument "ger"
//                      |
//           -----------
//          |
sayHello('ger'); // => Hallo!
 
// we passed argument "fr"
sayHello('fr'); // => Bonjour!
 
// we passed argument "esp"
sayHello('esp'); // => Hola!
 
// we didn't pass any arguments, so the default part was executed
sayHello(); // => Hello!

Let’s take a look at a couple of examples:
Create a function that will print out the inputted argument:
function printInput(theInput) {
  console.log(`Passed input is: ${theInput}`);
}

And let’s invoke the function:
printInput(2); // => Passed input is: 2
printInput('Ironhack is the best!');
// => Passed input is: Ironhack is the best!

What will happen if we pass two arguments when invoking the function?
printInput('Barca', 'Ana');
// => Passed input is: Barca

Well, don’t get confused here - it will print only the first argument and ignore the second one, but just because when we defined our function, we said it would expect one parameter: function printInput(theInput){...}. However, if we define the function with two parameters, the situation will be slightly different. Let’s see.

Create a function that will print inputted value a certain number of times:

function printInput(theInput, numberOfTimes) {
  for (let i = 0; i < numberOfTimes; i++) {
    console.log(`Inputted: ${theInput}`);
  }
}

When invoking the function, as we did earlier, but passing a second argument:
printInput(2, 3);
// prints out the first argument (number 2) three times (second argument)
// Inputted: 2
// Inputted: 2
// Inputted: 2

printInput('Ironhack is the best!', 2); 
// Inputted: Ironhack is the best!
// Inputted: Ironhack is the best!

Arrays as arguments
Although we used mostly strings and numbers as arguments so far, arguments can have any type. Let’s see the example with array as argument:
// declare the function-array as parameters:
function printElements (someArray){
  for(let i=0; i<someArray.length; i++){
    console.log(`Element: ${someArray[i]}`)
  }
}

// example 1:
// invoke the function - pass an array as the parameter:
printElements(["hello", "kitty", "pizza", 3, 78, false]); 
// Element: hello
// Element: kitty
// Element: pizza
// Element: 3
// Element: 78
// Element: false

// example 2:
const funnyArray = ["dog", 4, "miami", true];
printElements(funnyArray);
// Element: dog
// Element: 4
// Element: miami
// Element: true

Returning Values
Functions won’t always be going to print something in the console. Sometimes you want to do some action and return a value back.
Let’s think of a function that calculates the sum:
the function gets two arguments
the instructions inside the function body will perform the activity and summarize two numbers,
the function will return the sum.
To return a value, use the keyword return in your function.
function calculateSum(num1, num2) {
  return num1 + num2;
}
 
calculateSum(4, 5); // => 9
calculateSum(11.4, 11.4); // 22.8

Be aware, return ends the function immediately. Only use it when you want to return a value and end the function.
A function can only return one value, but the type of that value can be any: string, number, boolean, object, array, …
Why return a value? Because we can later use that returned value inside an expression, assign it to a variable, etc.
Let’s take a look at the following example:
create a function that will calculate a sum of two numbers
create a function that will reuse return from the first function and print the following: The result is ….
// STEP 1:
function calculateSum(num1, num2) {
  return num1 + num2;
}
function printResult() {
  const result = calculateSum(3, 6);
  console.log(`The result is ${result}.`);
}
printResult();
As we can see, we have created a function calculateSum(num1, num2) that receives two parameters and returns the sum of them.
Then we defined the second function, printResult(), and the first function has been invoked inside here and returning value (the sum of two numbers) has been assigned to a newly created variable, result.
We just show you why having functions is great - we wrote the code only once, and we can reuse it as many times as we need in our code.
You can see the code in the CodePen below (feel free to play around a bit with it):

function calculateSum(num1, num2){ 
  return num1 + num2;      
}
                  
function printResult(){
    const result = calculateSum(3,6);
    console.log(`The result is ${result}.`);
}
printResult();

function multiplyNumbers (a, b) {
  // your code here
}

Challenge: Try changing this CodePen to print “The result is 18” calling the function multiplyNumbers(a, b) and passing it values 3 and 6.
function multiplyNumber(a, b){ 
  return a * b;      
}       
function printResult(){
    const result = multiplyNumber(3,6);
    console.log(`The result is ${result}.`);

/*
Guided example
Toward the end of the Functions lesson, we played a bit with sum and multiply, and we planted in your heads the idea of building calculator-like function. The approach we previously had would ask from us to create separate functions for adding, subtracting, multiplying, and dividing the two passed numbers. This means having 4 functions and then the 5th one to display the result.

If we have a chance to reuse these functions in some other parts of our code, this approach might work. However, if we want to make and maintain our code clean and neat, we will probably try to find a better solution.

Before we start writing code, we have to think of the process:

we will have two numbers that need to be added, subtracted, multiplied or divided;
we can ask the user to pass as arguments these two numbers;
we will have (for now) four operations: +, -, * and /;
we can ask the user to pass an operator as an argument as well;
we need to check what does a user want to do - which operator did they pass;
depending on that, we will know which operation to execute.
Let’s see what we can do so far. We know our function will have 3 arguments: two numbers and an operator.

function calculator(num1, num2, operator) {
  // code
}
To invoke this function, we do the following:

calculator(6, 7, '+');
To resume, what happened here was:



We covered the first four steps. In step 5, we need to check what is the passed operator, and depending on that, do the math. What is the potential approach? … True, chained if-else statements.


if (operator === '+') {
  // do the math
} else if (operator === '-') {
  // do the math
} else if (operator === '*') {
  // do the math
} else {
  // do the math
}
Looks good, but if we have a lot of chained if-else’s, usually we want to make it more readable with using switch:

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  let response = `${num1} ${operator} ${num2} = ${result}`;
  return response;
}
 
calculator(6, 7, '+'); // => 6 + 7 = 13
calculator(20, 4, '-'); // => 20 - 4 = 16
calculator(3, 55, '*'); // => 3 * 55 = 165
calculator(20, 4, '/'); // => 12 / 4 = 3

Not bad at all! Clean, neat, and does the job perfectly. But we will go one step further:

make sure the user always passes all three arguments
if the user passes just numbers with no operator or just one number and operator, our function will break and won’t do what we want it to do. Here are examples of what we want to prevent:

calculator(7, '+'); // <== wrong!
calculator(6, 7, ''); // <== wrong!
make sure the user passes numeric values for numbers
if we want to complete math operations, we have to make sure the user doesn’t, by mistake, pass non-numeric value and break our code. Example of what we want to prevent:

calculator('a', 7, '-'); // <== wrong!
make sure the user passes a valid operator
we want to make sure we can add, subtract, multiply or divide the passed numbers; anything else needs to be sanctioned. Example of bad function invocation:

calculator(6, 7, '='); // <== wrong!
calculator(6, 7, 'blah'); // <== wrong!
So our final code looks like this:

function calculator(num1, num2, operator) {
  // makes sure user always passes three args
  if (!num1 || !num2 || !operator) {
    console.log('Please provide both numbers and operator!');
    return;
  }
  // makes sure user passes numeric values
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log('Please add a numeric value only!');
    return;
  }
 
  // make sure the user passes one of the valid operators (+, -, *, /)
  if (operator !== '+' && operator != '-' && operator != '*' && operator != '/') {
    console.log('Please provide valid operator.');
    return;
  }
 
  // initialize a variable that will hold the result
  let result;
 
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  let response = `${num1} ${operator} ${num2} = ${result}`;
  return response;
}

/*
Define function welcome() that will receive one argument, your name, and greet you with your name.

function welcome(name){
  console.log(`Hi ${name}!`)
}
welcome("Danilo")
*/

/*
Define a function printToTwenty() that will print the numbers from 0 to 20 to the console ( don’t forget we have to invoke/call the function to see it working )
function printToTwenty(){
for(let i = 0; i <= 20; i++)
  console.log(i)
}
printToTwenty()
*/

/*
Define a function printNumbers() that receives one argument and prints the numbers from 0 to whatever number we pass to it as an argument
function printNumbers(theInput){
  for(let i = 0; i <= theInput; i++){
    console.log(i)
}
}
  printNumbers(5)
*/

/*
//Define a function printArrElements(someArr) that will loop through array and print all the elements of that array. Use the following array to pass it as an argument to the function you have just defined:

let ironCities = [
  'Amsterdam',
  'Barcelona',
  'Berlin',
  'Lisbon',
  'Madrid',
  'Mexico City',
  'Miami',
  'Paris',
  'Sao Paulo'
];

function printArrElements(someArr){
    for(let i = 0; i < someArr.length; i++){
      console.log(someArr[i])
    }
  }
  
  printArrElements(ironCities)
  
*/

/*
Define an array of your favorite cities and pass it as an argument to the previously defined function. Invoke a function.
let favCities = [
    'Rio',
    'SP',
    'Lisbon',
  ];
  function printArrElements(someArr){
      for(let i = 0; i < someArr.length; i++){
        console.log(someArr[i])
      }
    }
    printArrElements(favCities)
    */

    /*
    Define a function printEvens(someArr) and use the ironCities array and print only its even elements. The output should be:


/*
Define a function getCredentials() that will receive the following object as argument and print the following result:    
let user = {
username: 'ironhacker',
password: '123iron345'
};

function getCredentials(fromUser){
  console.log(`Username is: ${fromUser.username} and the password is ${fromUser.password}.`)
}
getCredentials(user)

/*
let property = {
           owner: 
           {
           firstName: 'John',
           lastName: 'Doe',
           age: 44
           },
  isForSale: true,
  sqrm: 120,
  address: {
    street: 'Happy St',
    number: 123,
    city: 'Miami',
    state: 'FL',
    country: 'US'
  },
  amenities: ['pool', 'tennis court', 'private parking', 'yard']
};
 

function checkProperty(isAvailable){
  if(isAvailable.isForSale === false){
      console.log(`The owner, ${isAvailable.owner.firstName} ${isAvailable.owner.lastName} put the home for sale. The property has ${isAvailable.amenities.length}`);
    } else {
    console.log(`The home in ${isAvailable.address.street} no. ${isAvailable.address.number} is not for sale`);
  }
}

checkProperty(property)
*/

/*
Mars Rover Kata

const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  TravelLog: [{x: 0, y: 0}]
}

//function turnLeft 
function turnLeft(rover) {
  switch (rover.direction) {
      case 'N': 
        rover.direction === 'W';
        break;
      case 'W': 
        rover.direction === 'S';
        break;
      case 'S': 
        rover.direction === 'E';
        break;
      case 'E': 
        rover.direction === 'N';
        break;
    }
         console.log(`turnLeft was called! Rover is now facing ${rover.direction}`); 
}

  //function turnRight 
  function turnRight(rover) {
    switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;      
  } 
    console.log(`turnRight was called! Rover is now facing ${rover.direction}`); 
}
 
// function moveForward
function moveForward(theRover) {
  
  if (rover.direction === "W" && rover.location.x < 9) {
      rover.location.x -= 1; 
    console.log(`Rover has position: x=${theRover.x}, y=${theRover.y}`);
    
   } else if (rover.direction === "N" && rover.location.x < 9) {
      rover.location.x -= 1;
     console.log(`Rover has position: x=${theRover.x}, y=${theRover.y}`);
     
   } else if (rover.direction === "E" && rover.location.y < 9) {
      rover.location.y += 1;    
     console.log(`Rover has position: x=${theRover.x}, y=${theRover.y}`);
   
   } else { (rover.direction === "S" && rover.location.y < 9) 
      rover.location.y += 1;     
    console.log(`Rover has position: x=${theRover.x}, y=${theRover.y}`);
   }
}
  
//function Command
function command(theRover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    switch (order) {
      case 'f': 
        moveForward(theRover, order);
        break;
      case 'r': 
        turnRight(theRover, order);
        break;
      case 'l': 
        turnLeft(theRover, order);
        break;
    }
  }
}
 
command (rover, 'rffrfflfrff');

  
  let newPosition = { x: theRover.x, y: theRover.y };
    theRover.travelLog.push(newPosition);
 
    console.log(`Rover ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);


 
https://codepen.io/1danilo/pen/vYxmBmd?editors=0011