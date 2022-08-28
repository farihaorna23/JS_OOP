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

let person = new Person("Jane", 0, "Queens", [
  "reading",
  "diy",
  "jumping",
  "swiming",
  "running"
]);

person.addHobby("cycling");
person.removeHobby("cycling");
console.log(person);

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

let coder = new Coder("Janny", 2, "Jamaica", [
  "eating",
  "travelling",
  "skating"
]);

console.log(coder);
coder.greeting();
