
// Declare A Class
class Animal {
    // if use public here we don't have to use this.something 
    constructor(
        public name: string,
        public species: string,
        public sound: string
    ) { }

    makeSound() {
        console.log(` The ${this.name} says ${this.sound}...Haha!`);
    }

}

// declare Object 
const dog = new Animal('German Sheper', 'Dog', 'Ghew ghew')
const cat = new Animal('Dolly', 'Cat', 'Mew mew');
dog.makeSound();
cat.makeSound();