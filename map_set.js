console.log('Running...');
//Objects are used for storing keyed collections
//Arrays are used for storing ordered collections
//Maps allow storing of keys to be any data type while objects do not

let thisMap = new Map(); //Create a map

//storing values in a Map
// thisMap.set('1', 'string'); //string key
// thisMap.set(3, 'number'); //number key
// thisMap.set(true, 'bool1'); // a boolean key


//Getting values in a Map
const str = thisMap.get(9);// if the key doesn't exist we get undefined

// const doesExist = thisMap.has(3);
// console.log(str);
// thisMap.delete()
// console.log(thisMap);
// thisMap.delete(3)
//thisMap.clear()
// console.log(thisMap.size);

//Another of using the set method
// thisMap[8] = 'number 8';
// console.log(thisMap[1]);

//READ ON OBJECTS IN MAPS 


//Using chain method to set a value
thisMap.set('1', 'string').set(3, 'number').set(true, 'bool1'); 

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

  // iterate over keys 
//   for (const key of recipeMap.keys()) {
//     console.log(key);
//   }


//iterate over values
//   for (const value of recipeMap.values()) {
//     console.log(value);
//   }

recipeMap.forEach((value, key) => {
    // console.log(`${value}: ${key}`);
})

// FOR EACH METHOD
let arr = [1,2,3,4,5,6];

//value, index, array 
arr.forEach((value, index, arr) =>{
    // console.log(arr);
})

//SET
let thisSet = new Set();

let john = { name: "John" };
let peter = { name: "Peter" };
let mary = { name: "Mary" };

thisSet.add(john).add(peter).add(mary);

const value = thisSet.delete(peter) //returns true or false, true -> if present
//.has, .clear(), .size

//for of
//.forEach loop to iteration
//set.keys(), set.values(), 
console.log(value);


