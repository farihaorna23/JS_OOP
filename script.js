class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(hobby) {
    this.hobbies = this.hobbies.filter(hob => hob != hobby);
  }

  greeting() {
    console.log(`Hello fellow person!`);
  }
}

//exercise 2
class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(`Hello this another object!`);
  }
}

//exercise 3

let person = new Person("Jane", 0, "Queens", [
  "reading",
  "diy",
  "jumping",
  "swiming",
  "running"
]);

let coder = new Coder("Janny", 2, "Jamaica", [
  "eating",
  "traveling",
  "skating"
]);

person.addHobby("cycling");
person.removeHobby("cycling");
console.log(person);

console.log(coder);
coder.greeting();
coder.addHobby("gardening");
coder.addHobby("shopping");
console.log(coder);
coder.removeHobby("traveling");
console.log(coder);

//exercise4

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num1, num2) {
    return (this.result = num1 + num2);
  }

  subtract(num1, num2) {
    return (this.result = num1 - num2);
  }

  mutiply(num1, num2) {
    return (this.result = num1 * num2);
  }

  divide(num1, num2) {
    return (this.result = num1 / num2);
  }

  displayResult() {
    console.log(this.result);
  }
}

let cal = new Calculator();
console.log(cal.add(2, 3));
console.log(cal.subtract(6, 2));
console.log(cal.mutiply(4, 4));
console.log(cal.divide(8, 2));

console.log(cal.add(3));
