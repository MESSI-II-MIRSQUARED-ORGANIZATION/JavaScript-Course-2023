console.log('Running...');

//OBJECT
let user = new Object();
let thisObj = {};
// let thisMap = {} this is an object not a map
//Objects accept only strings, numbers to be keys
thisObj = {
    name: "John",
    age: 30,
    "likes birds": true,
    1 : 3,
}

//get values
// console.log(thisObj.age);
thisObj.isAdmin = true;

delete thisObj.isAdmin;

// thisObj['likes birds'] = false;
// console.log(thisObj[age]); // won't work

//OBJECT REFERENCING AND COPYING
let user3 = {name: "John"};
let user4 = {...user3};
let user5 = {name: "John"};

// user3.age = 20;
console.log(`${user3 == user4}`);
// user3   
//   ====> {name: "John", age: 30}
//user4


/*

HELLO SIR, I JUST CREATED A NEW BRANCH IN THIS REPOSITORY
git checkout -b <BRANCH-NAME> 

*/
