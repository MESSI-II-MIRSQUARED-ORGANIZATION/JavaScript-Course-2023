console.log('Running...');

//An object is an instance of a class 
//A class is a blueprit for creating an object
class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run (speed){
        this.speed = speed;
        console.log(`${this.name} is running with the speed of ${this.speed} m/s`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} is standing still`);
    }

  

}

class Rabbit extends Animal{

    constructor(name, earLength) {
        //this is going to throw an error
        // this.speed = 0;
        // this.name = name;
        // this.earLength = earLength;

        //working code
        super(name)
        this.earLength = earLength;
      }


    hide(){
        console.log(`${this.name} is hiding`);
    }

    // stop(){
    //     console.log(`${this.name} has stopped from rabbit class`);
    // }
    stop(){

        //super.method() -> calling parent method
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit("White Rabbit",10);
//               Rabbit(name, earlength)
//               constructor(name, earLength,numberOfFeet)



// rabbit.run(10)
// rabbit.stop();
// rabbit.hide();
// rabbit.stop();



//super(...) to call a parent constructor (inside our constructor only).

//ASSIGNMENT
/*
provide a method in the rabbit class to display the ear length
*/