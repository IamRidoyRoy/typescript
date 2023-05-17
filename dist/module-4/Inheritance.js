"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name,
            this.age = age,
            this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} is sleep for ${hours}`;
    }
}
// Student class inherit the Parent class and get all property from parent 
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Ridoy', 25, 'Banglsdesh');
// Here Designation is teachers own property 
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(english) {
        return `This ${this.name} will take ${english} class!`;
    }
}
const teacher1 = new Teacher('Mr. Tugo', 33, 'uganda', 'Teacher');
