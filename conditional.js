console.log('Running...');
//CONDITIONALS: IF, IF-ELSE, IF-ELSE IF,
//we need to perform different actions based on different conditions.
//prompt
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('Please enter your age: ', (ageInput) => {
//   const age = parseInt(ageInput); //parseFloat

//   if (isNaN(age)) { // '1213adfa' -> NaN, fxn: isNaN(value)
//    //BLOCK-SCOPE

//     console.log('Invalid input. Please enter a valid number for age.');
//   } else if (age > 20) {
//     console.log('You are older than 20.');
//   } else {
//     console.log('You are 20 years old or younger.');
//   }

//   rl.close();
// });

let allowedAccessToDrink;
let age = "How old are you?";
// let myAge = 15;

//   18 19<-myAge >= 20, 23,30, 43
// if(myAge >= 20){
//     console.log(`${allowedAccessToDrink = true}`);
// } else {
//     console.log(`${allowedAccessToDrink = false}`);
// }

// Conditional operator ‘?’ //Tenary operator
// condition ? exp1 : exp2;
let myAge = 25;
myAge >= 20 ? console.log(`exp1 executed...`) : console.log(`exp2 executed...`);