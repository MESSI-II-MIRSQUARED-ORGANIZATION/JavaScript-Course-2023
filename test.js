class Animal{
    constructor(name, speed){
      this.name = name;
      this.speed = speed;
    }
    static compare(animalA , animalB){
      return animalA.speed - animalB.speed;
    }
  }
  let animals = [
    new Animal("lion", 1000),
    new Animal("tiger", 2000),
    new Animal("cat", 500)
  ];


  animals.sort(Animal.compare);

console.log('Animals',animals);