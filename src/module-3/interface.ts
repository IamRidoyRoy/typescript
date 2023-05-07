type User = {
    name: string;
    age: number;
}

interface IUser {
    name: string,
    age: number,
}

const userWithTypeAlias: User = {
    name: 'TypeAlias',
    age: 200,
}

const userWithInterface: IUser = {
    name: 'interface',
    age: 200,
}

// We can extend interface 
interface IExtend extends IUser {
    role: string,
}

const Iuser: IExtend = {
    name: "Bhoot",
    age: 200,
    role: 'Akam',
}

// Objects , function array 
type AddNumber = (num1: number, num2: number) => number;
// We also can define the type of number using interface 
interface IAddNumber {
    (num1: number, num2: number): number;
}

// Arrow function to add two number 
const addNumber: AddNumber = (num1, num2) => {
    return num1 + num2;
}

// Define array type data 
type TypeRollNumber = number[];

// or we can use interface 
interface IRoll {
    [index: number]: number;
}
const rollNumbers: IRoll = [1, 2, 4,]


// So, Type Alial & interface are almost same -
//  When we will use function, object we should use Interface
// And for others we should use type Alias.
