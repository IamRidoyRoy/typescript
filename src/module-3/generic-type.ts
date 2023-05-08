
//Array 
// const rollNum1: Array<number> = [10, 20, 30, 40];
// const rollNum2: Array<string> = ['10', '20', '30', '40'];
// const rollNum3: Array<boolean> = [true, false];


// Convert it to Generic type array 
type GenericArray<T> = Array<T>;

const rollNum2: GenericArray<string> = ['10', '20', '30', '40'];
const rollNum1: GenericArray<number> = [10, 20, 30, 40];
const rollNum3: GenericArray<boolean> = [true, false];

// Array of object 
const userNameAndRoll: Array<{ name: string, roll: number }> = [{
    name: 'Mr Roy',
    roll: 398,
}]

// Generic type of array object 
type NameAndRoll = { name: string, roll: number }
const userNameAndRoll2: GenericArray<NameAndRoll> = [{
    name: 'Mr Roy',
    roll: 398,
}]


// Generic Tuple
type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = [
    'Ridoy', "It's me"
]

const relationWithSalary: GenericTuple<object, string> = [
    {
        name: 'Ridoy',
        salary: 100000000
    },
    'Ache ekjon'
]