// Create a interface 
interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    moveOn(): void;
}

// I use interface in my class by using implements
class MyVehicle implements IVehicle {

    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {

    }
    startEngine(): void {
        console.log('I just start the car!')
    }

    stopEngine(): void {
        console.log("I just stop the car!")
    }
    moveOn(): void {
        console.log('I just start again the car!')
    }
    test() {
        console.log('I am just testing the car')
    }
}

// crate some instance 
const vehicle1 = new MyVehicle('Car', 'Toyota', 2000);
console.log(vehicle1);


//Another example with abstract class 
abstract class MyVehicle2 {

    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {

    }
    abstract startEngine(): void;

    abstract stopEngine(): void;
    moveOn(): void {
        console.log('I just start again the car!')
    }

}
// We inherit  abstract class and abstract methods here
class Car extends MyVehicle2 {
    startEngine(): void {
        console.log('I am starting the engine')
    }
    stopEngine(): void {
        console.log('I am stop the engine!')
    }
}
// We can't directly create instance from the abstruct class
//  but we can do it by child class
const vehicle2 = new Car('Car', 'Toyota', 2022)