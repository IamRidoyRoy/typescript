"use strict";
class Person {
    takeNap() {
        console.log(`I am a Human i am sleeping 8 hour per day`);
    }
}
class Students extends Person {
    takeNap() {
        console.log(`I am a student i am sleeping 10 hour per day`);
    }
}
class Developer extends Person {
    takeNap() {
        console.log(`I am a developer i am sleeping 5 hour per day!`);
    }
}
function getNap(params) {
    params.takeNap();
}
const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
// Another Example to find area 
class Shape {
    getArea() {
        return 0;
    }
}
// area of a circle = Pi*r^2
class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return Math.PI * this.r * this.r;
    }
}
const areaOfCircle = new Circle(1);
console.log(areaOfCircle.getArea());
