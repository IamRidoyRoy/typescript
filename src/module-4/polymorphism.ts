class Person {
    takeNap(): void {
        console.log(`I am a Human i am sleeping 8 hour per day`)
    }
}

class Students extends Person {
    takeNap(): void {
        console.log(`I am a student i am sleeping 10 hour per day`)
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log(`I am a developer i am sleeping 5 hour per day!`)
    }
}

function getNap(params: Person) {
    params.takeNap();
}

const person1 = new Person()
const person2 = new Students()
const person3 = new Developer()
getNap(person1)
getNap(person2)
getNap(person3)


// Another Example to find area 
class Shape {
    getArea(): number {
        return 0;
    }
}

// area of a circle = Pi*r^2
class Circle extends Shape {
    r: number;
    constructor(r: number) {
        super();
        this.r = r;
    }
    getArea(): number {
        return Math.PI * this.r * this.r;
    }
}

const areaOfCircle = new Circle(1);
console.log(areaOfCircle.getArea())