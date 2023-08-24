console.log('Running...');

//FUNCTION
/*
function funcName(params){}

We can pass arbitrary data to functions using parameters.
*/

//Global variable 
let msg; //Hi Ruth
//HOISTING: 
showMessage;

//a function body is defined by {} curly braces
function showMessage(){

    msg= "Hi Ruth!" // local variable
    console.log(`Inner ${msg}`);
}
// console.log(`Outer ${msg}`);


// function greetUser(name){
//     let greetings = "Hello! " + name ;
//     console.log(greetings);
// }

// greetUser("Ruth");
// greetUser("Elisabeth");
// greetUser("Austin");


// function greet(callback,name="Elisabeth"){
//     console.log(`Hello ${name}`);
//     callback();
// }

// function afterGreeting(){
//     console.log('Nice meeting you');
// }

// greet(afterGreeting)

// add(2) => 3


function greetUser2(name    ){
    // if (name === undefined) {
    //     name = "Austin";
    // }

    name = name || "Austin"

// console.log(name);
}

// greetUser2()

//nullish coalescing operator ??

function sum(a,b){
    return;
}

let value2 = sum(1,2); 
// console.log(value2);

//let age = 

//Write a function that checks
//for a user's age > 18 and print either you can watch this movie, if not sorry you ca
//n't watch this movie

//FUNCTION EXPRESSIONS


function sayHi(){ //This is a function declaration  
    console.log('Hello');
}

let sayHi2 = function sayHi(){ //function expression
    console.log('hey!');
}

// sayHi2();

let sayHi3 = function(){ 
console.log('HEY AGAIN!');
}

// sayHi3();


//ARROW FUNCTIONS
/*
let func = (arg1, arg2, ..., argN) => expression;
*/