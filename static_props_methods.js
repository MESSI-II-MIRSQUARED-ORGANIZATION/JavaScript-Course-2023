console.log('Running...');

class User {
    static staticMethod(){
        console.log(`${this == User}`);
    }

        sayHi(){
            console.log(`Hi Ruth!`);
        }
}

// User.staticMethod();
// new User.sayHi();

class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }

let num = [1, 2, 3, 4, 5]
let num2 = num.filter; // num2 = [4,5] create a new array


  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];

articles.sort(Article.compare);// is going to use it and give you back 

// console.log(`${articles[0].title}`);

/*
in the animal class add a static method to compare animals speed
*/

let numArray = [];

class PowerArray extends Array {
    isEmpty(){
        return this.length === 0;
    }
}

// let isArrayEmpty = numArray.isEmpty();

// console.log(`isArrayEmpty ${isArrayEmpty}`);


let numArray3 = new PowerArray();

console.log(`numArray3 ${numArray3.isEmpty()}`);



//READ ON Class checking: "instanceof"