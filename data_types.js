//Age

let myAge = 30;

// string -> number 
let message = "hello";
message = 12345;

let result = myAge / 2; // + / - *
let result2 = 1 / 0;
let result3 = "hello" / 2; //NaN -> Not A Number

//BigInt

//String
const hello1 = "1";
const hello2 = '2';
let hello3 = `3`;
let addValues = 1 + 3;

//Boolean -> True or False
let nameFieldChecked = true;
let isChecked = false;
let isLoggedIn = true;

let isGreater = 4 > 1;  // < >= <= == !=
let isNotEqual = 8 != 3;


// console.log(hello1, hello2, hello3);
// console.log(`This is hello1 ${hello1} ${hello2} ${hello3} {}`);
// console.log(`isChecked : ${isChecked}, isLoggedIn: ${isLoggedIn}, isGreater: ${isGreater}`);
// console.log(isNotEqual);

//NULL
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let hisAge = null;
hisAge = 3;
// console.log(hisAge);

//UNDEFINED
//The meaning of undefined is “value is not assigned”.
let yourAge;
// console.log(yourAge);

//OBJECTS
//To create an object we use {}
//Key - Value pairs

let person = {
    name: "John",
    age: 30,
    hobbies: ["cooking", "Sports"],
    greetings: () => "Welcome John"
};
// console.log(`${person.address = "123 main st"}`);
// console.log(person);
// console.log()

//TYEPOF
//Used to check the type of an operand

// console.log(typeof person, typeof myAge, typeof hello1);


let Foo = 46;
if(typeof (Foo) === "string") {
    console.log('This is a string');
} else {
    console.log("This is not a string");
}