console.log('Running....');


//
let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });

  // resolve provides an output when the operation is successful provides us with a value
  // reject provides an error when the operation is unsuccessful, failed or error  provides us with an error object


  //                    -----> fulfilled 
  //  state : pending
  //                     -----> reject


//   let promise1 = new Promise(function(resolve, reject) {
//     // function to execute automatically after 2 seconds
//     // setTimeout(() => resolve('I am done'), 2000)
//     reject(new Error("error occurred in the promise"));
//   })
// //   .then((value) => console.log(value))
//   .catch((err) => console.log(err.message))
//   .finally(( ) => console.log('hello'))



function fetchTodos(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const todos = [
                { id: 1, text: "Buy groceries", completed: false },
                { id: 2, text: "Read a book", completed: true },
                { id: 3, text: "Go for a walk", completed: false },
              ];
              resolve(todos); 
        }, 1000);
    })    
}

fetchTodos().then((todos) => {
    console.log(`Loaded todos:`);
    todos.slice(0,3).forEach((item, index) =>{
        console.log(`text: ${item.text}, completed: ${item.completed} ` );
    })
})



