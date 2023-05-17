"use strict";
function add(param1, param2) {
    if (param1 == 'number' && param2 == "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
console.log(add(1, 2));
console.log(add('5', '2'));
function getUser(user) {
    if ("role" in user) {
        return `This is an ${user.role}`;
    }
    else {
        return `This is an normal user!`;
    }
}
const normal = { name: 'Mr Kallu' };
const adminUser = { name: 'Mr Khallu', role: 'admin' };
console.log(getUser(normal));
console.log(getUser(adminUser));
// instanceof of type Guard 
class Animal2 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSOund() {
        console.log('I am poor animal');
    }
}
class Cat extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log("I am a Cat, Mew Mew");
    }
}
class Dog extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log('i am a dog, Ghew Ghew');
    }
}
function isDog(obj) {
    return obj instanceof Dog;
}
// create a function 
function getAmimal(obj) {
    if (isDog(obj)) {
        obj.makeBark();
    }
    else if (obj instanceof Cat) {
        obj.makeMew();
    }
    else {
        obj.makeSOund();
    }
}
const animal1 = new Cat('Olla', 'Cat');
const animal2 = new Dog('German', 'Dog');
getAmimal(animal2);
// console.log(getAmimal(animal2));
