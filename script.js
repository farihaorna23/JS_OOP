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

let person = new Person("Jane", 0, "Queens", ["reading", "swiming", "running"]);

person.addHobby("cycling");
person.removeHobby("reading");
console.log(person);
