const { log } = require("console");

console.log('Running....');

//LOOPS: WHILE, DO-WHILE, FOR, SWITCH

//WHILE
/*
while (condition){
    body to be executed
}

**iteration... is a complete loop execution
*/

let i = 0;
while ( i > 3){ //true -> 0 < 3 = true
    console.log(i);
   
//if increment condition isn't provided then we enter an infinite loop
 i++;
}

//DO-WHILE LOOP
/**
 do{
// body to be executed or loop body
 }while(condition)

 */

 let j = 0;

 do{
    console.log("This is J:",j);
    j++
 }while(j > 3) // execution stopped when condition becomes falsy

 //FOR LOOP
 /**
  for (begin; condition;step){
    //loop body to be executed
  }
  */

  let k = 0

// for(k=0; k <= 5; k++) {
//     //stop at 3
//    if (k === 3) { // value and type at the same time
//     break; //execution stopped when condition becomes truthy
// }
// console.log(k);
// }

//DISPLAY ODD NUMBER
//  for(k=0; k <= 10; k++) {
    
//      if(k % 2 === 0 ) continue; //analogous to skip over

//  console.log(k);
//  }


//SWITCH STATEMENTS
/**
 switch (x){
    case value1: //if (x === 'value1')
    exp1;
    break;

    case value2: 
    exp2;
    break;

    case value3:
    exp3;
    break;

default:
    expr4
 }
 */

 let a = 2 + 1;
switch (a) {
  case 3: // 4 === 3
    console.log( 'Too small' );
    // break;
  case 4: // else if
    console.log( 'Exactly!' );
    // break;
  case 5: // else if (4 === 5)
    console.log( 'Too big' );
    break;
    case 6: // else if (4 === 5)
    console.log( 'Way too big' );
    break;
  default: // else
    console.log( "I don't know such values" ); // when no case matches 
}

