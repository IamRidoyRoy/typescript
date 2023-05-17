"use strict";
// I use interface in my class by using implements
class MyVehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log('I just start the car!');
    }
    stopEngine() {
        console.log("I just stop the car!");
    }
    moveOn() {
        console.log('I just start again the car!');
    }
    test() {
        console.log('I am just testing the car');
    }
}
// crate some instance 
const vehicle1 = new MyVehicle('Car', 'Toyota', 2000);
console.log(vehicle1);
//Another example with abstract class 
class MyVehicle2 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    moveOn() {
        console.log('I just start again the car!');
    }
}
// We inherit  abstract class and abstract methods here
class Car extends MyVehicle2 {
    startEngine() {
        console.log('I am starting the engine');
    }
    stopEngine() {
        console.log('I am stop the engine!');
    }
}
// We can't directly create instance from the abstruct class
//  but we can do it by child class
const vehicle2 = new Car('Car', 'Toyota', 2022);
