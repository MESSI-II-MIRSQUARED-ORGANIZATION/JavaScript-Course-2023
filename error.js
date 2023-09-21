console.log('Running...');


// try...catch

try {
    //code to run
    // bunch of code here...
    // console.log('hello world this is try block');
    // blabla
} catch (error) {
    // error handling code
    // console.log('hello world this is error block');

}

/*
An error object contains two main used parts:
- name : Error name like ReferenceError
-
 message : more details about the error
- stack

*/


try {

//  blablabla;    
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

let json = '{"name":"John", "age": 30}'; // data from the server JSON FORMAT

let user = JSON.parse(json); 
//JSON.stringify to move from Js object to JSON object

// console.log(user.name);

let json2 = "{ bad json }";



// try {
//     let user2 = JSON.parse(json2);
// console.log(user2);

// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);

// }

let json3 = '{ "age": 30 }'; // database holding users information User we need a name and an age

try {
    let user = JSON.parse(json3);

    // if(!json.name){
    //     throw new SyntaxError("Incomplete data: No name provided");
    //      //when you wish to throw your own exception or errors
    // }

    // console.log(user.name);

    let blablabla;

    //  if(!blablabla) {
    //     throw new ReferenceError("what is blablabla?");
    //  }


} catch (error) {
    console.log(error.name);
    console.log(error.message);
//    if (error instanceof SyntaxError) {
//     console.log(error.name);
//     console.log(error.message);
//    } else {
//     throw error ; // this is what we call rethrow
//    }

}


//rethrow



try {
    let user = JSON.parse(json3);
    
    blablabla
} catch (error) {
    console.log('Ruth there\'s an error here');
} finally{
console.log('Ruth this will always run');
}