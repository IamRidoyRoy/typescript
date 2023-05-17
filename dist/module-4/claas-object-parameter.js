"use strict";
// Declare A Class
class Animal {
    // if use public here we don't have to use this.something 
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(` The ${this.name} says ${this.sound}...Haha!`);
    }
}
// declare Object 
const dog = new Animal('German Sheper', 'Dog', 'Ghew ghew');
const cat = new Animal('Dolly', 'Cat', 'Mew mew');
dog.makeSound();
cat.makeSound();
