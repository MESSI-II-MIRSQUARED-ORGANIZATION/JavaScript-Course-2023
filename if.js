const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your age: ', (ageInput) => {
  const age = parseInt(ageInput);

  if (isNaN(age)) {
    console.log('Invalid input. Please enter a valid number for age.');
  } else if (age > 20) {
    console.log('You are older than 20.');
  } else {
    console.log('You are 20 years old or younger.');
  }

  rl.close();
});
