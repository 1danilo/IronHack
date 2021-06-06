
/*

1. Let’s write a loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and print that on the screen. You will need the remainder operator to do the exercise. Expected output:

is odd 2 is even … 19 is odd 20 is even

for(let i = 0; i <= 20; i++) {
  if(i === 0){
    console.log(i + " is even");
  } 
  else if (i % 2 === 0){
    console.log(i + " is even");
  }
  else {
    console.log(i + " is odd");
  }
}



*/


const age = parseInt(prompt('Welcome to Ironhack cinema. How old are you?'));

if (age <= 16) {
  console.log('You have a teenager discount.');
} else if (age >= 65) {
  console.log('You have a senior citizen discount :)');
} else {
  console.log("Sorry, you don't have any discount :(");
}