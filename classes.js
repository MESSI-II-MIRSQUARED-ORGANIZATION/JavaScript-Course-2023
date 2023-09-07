console.log('Running...');

//BASIC SYNTAX OF A CLASS
class NameOfClass {

    constructor() {}
    method1(){}
    method2(){}
    method3(){}

}


// class User{
//     constructor(name){
//         this.name = name;
//     }

//     sayHi(){
//         console.log(`Hello ${this.name}`);
//     }
// }

//usage:
// let user = new User("Ruth");
// user.sayHi();


let me = class {
    sayHi(){
        console.log(`Hello Ruth From Me Class`);
    }
}


// new me().sayHi()

class User{
    constructor(name){
        this.name = name;
    }

    // this._name = this.name

    set name(value){
        if (value.length < 4) {
            console.log("The name is too short");
            return;
        }
        this._name = value;
    }

        get name(){
            return this._name;
        }

    sayHi(){
        console.log(`Hello ${this.name}`);
    }
}

// let user = new User("");
// console.log(`${user.name}`);

class Me {
     name = "Austin";

     sayHi(){
        console.log(`Hello ${this.name}`);
    }


}

new Me().sayHi();