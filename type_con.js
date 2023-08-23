//TYPE CONVERSIONS 

//Boolen -> String
let value = true;
// console.log(typeof value);
let formattedValue = String(value);
// console.log('This is the formattedValue: ',typeof formattedValue);

//String -> Number

let value2 = '123adfadsf';
let formattedValue2 = Number(value2);
// console.log('This is the formattedValue2: ',formattedValue2);


//Number -> Boolean
console.log('This is a number to boolean', Boolean(0));  // 1 -> true and 0 -> false
/**
  FALSY VALUES : Falsy values equivalent in number is 0
  - null
  - 0
  - ''
  - undefined

 */

if ('0') {
    console.log('This is a truthy value');
} else{
    console.log('This is a falsy value');
}


