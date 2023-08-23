console.log('Running...');

//Logical operators: OR -> ||, AND -> &&, NOT -> ! , Nullish Coalescing -> ??(Reading in free time)

//|| (OR)
//result = a || b;
/*
log( true || true );   // true ::first value returned and value on the right ignored
log( false || true );  // true
log( true || false );  // true
log( false || false ); // false :: look left and right and sees all values are false
-> return the last operand
*/

if (1 || 0) { // works just like if( true || false )
    // console.log( 'truthy!' );
  }

  /*
  The OR || operator does the following:

Evaluates operands from left to right.
For each operand, converts it to boolean. 
If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.
  */

// console.log('case 1:', 1 || 0 ); // 1 (1 is truthy)
// console.log('case 2:', null || 1 ); // 1 (1 is the first truthy value)
// console.log( 'case 3',null || 0 || 1 ); // 1 (the first truthy value)
// console.log('case 4', undefined || null || 0 ); 

/*
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); 
*/

//&& (AND)
//result = a && b;

/*
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
*/


if (1 && 0) { // evaluated as true && false
    console.log( "won't work, because the result is falsy" );
  }


/*
The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. 
If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.


*/

console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5 :: 1 && 2 -> 2
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); 
console.log( 1 && 2 && null && 3 );


// NOT !
//result = !value; 

/*
console.log( !true ); // false
console.log( !0 ); // true
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
*/

// DOUBLE BANG OPERATOR: !! 
// "A" -> !"A" -> false -> !false -> true
//Boolean("A") -> true