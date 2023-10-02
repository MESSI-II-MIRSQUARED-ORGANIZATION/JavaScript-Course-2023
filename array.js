console.log('Running...');

// SYNTAXES
let arr = new Array(); // NOT USED OFTEN
let arr2 = []; // USED OFTEN

let fruits = ["Apple", "Orange", "Mango",]; //An array of strings 
//             0         1          2   <--- index

// console.log(fruits[1]); //[] 
fruits[3] = 'Pear'
// console.log(fruits);
// console.log(fruits.length); // length starts as from 1 while index starts as from 0


let arr3 = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ]; // 

// console.log(arr3[1].name);
// console.log(arr3[3]());

// GETTING LAST ITEM IN AN ARRAY
const value1 = fruits[fruits.length - 1 ]; // 4 - 
const value2 = fruits.at(-2);  // 
// console.log(value2);

// PUSH POP SHIFT UNSHIFT

// fruits.push('Plum', 'Grape')
// console.log(fruits);
// fruits.pop();
// fruits.pop();
// console.log(fruits);

// fruits.unshift("Pear")
// console.log(fruits);
// fruits.shift();
// fruits.shift();
// console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
//    console.log('I love this fruit:', fruits[i]);
    
}

for (const fruit of fruits) { // fruit -> fruits[i]
    // console.log('Do you like this fruit?', fruit);

}


//FRIST SYNTAX
let arr5 = new Array('Apple', "Pear", "Grape");
// console.log(arr5[2]);


// MUST KNOW
// splice method
// arr.splice(start, deleteCount, insert_element)

// let arr6 = ["I", "study", "JavaScript"];
// arr6.splice(1,1)
let arr6 = ["I", "study", "JavaScript", "right", "now"];
// arr6.splice(0,3,"let's", 'dance','makossa','with ',)
// console.log(arr6);
// can also take negative values

//slice method 
//creates a new array
const newArray = arr6.slice(1,3); //doesn't count last index
const newArray2 = arr6.slice();
// console.log(newArray);

// concat
let arr7 = [1, 2];

// create an array from: arr and [3,4]
// console.log( arr7.concat([3, 4]) );

// FOREACH
// arr6.forEach((value, index) => {
//     console.log(` ${index} : ${value}`);
// })

//SEARCH IN AN ARRAY
let arr8 = [1, 0, false];

// console.log( arr8.indexOf(1) ); // returns the value at that index otherwise -1
// console.log( arr8.includes(false) ); // true or false


//Working with objects in an array
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Ruth"},
    {id: 3, name: "Mary"},  
    {id: 4, name: "Jane"},    
    {id: 5, name: "Mark"},    
    {id: 6, name: "Amelia"},    

  ];
  
  //find 
  let user = users.find(item => item.id == 2); 
  let index = users.findIndex(user => user.name == 'Ruth')
    // returns array of the first two users
  let someUsers = users.filter(item => item.name.includes('Jo'));

//   console.log(user, 'This is Ruth\'s index ', index);
console.log(someUsers);


  // MAP
  // SORT
  // SPLIT AND JOIN
  // REVERSE
  //  REDUCE
  