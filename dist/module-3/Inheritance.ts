
class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name,
            this.age = age,
            this.address = address
    }

    makeSleep(hours: number): string {
        return `This ${this.name} is sleep for ${hours}`;
    }
}

// Student class inherit the Parent class and get all property from parent 
class Student extends Parent {

    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}

const student1 = new Student('Ridoy', 25, 'Banglsdesh')


// Here Designation is teachers own property 
class Teacher extends Parent {

    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }


    takeClass(english: string): string {
        return `This ${this.name} will take ${english} class!`;
    }
}


const teacher1 = new Teacher('Mr. Tugo', 33, 'uganda', 'Teacher');