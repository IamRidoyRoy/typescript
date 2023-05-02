
// We can define tyoes alias for minimizing code 
type crushTypes = {
    name: string,
    age?: number,
    address: string,
    isSexy: boolean
}

const crush1: crushTypes = {
    name: 'Moyna Pakhi',
    age: 22,
    address: "New Mexico",
    isSexy: true
}
const crush2: crushTypes = {
    name: 'Tiya Pakhi',
    address: "Ululu",
    isSexy: true
}

// Another type alias example

type courseType = string;
const courseName: courseType = "Next Level Web dev"


// Create a function for multiple calculations using type alias
type operationTypes = (x: number, y: number) => number
const calculate = (
    num1: number,
    num2: number,
    operation: operationTypes) => {
    return console.log(operation(num1, num2))
}

calculate(20, 30, (x, y) => (x + y))
calculate(10, 90, (x, y) => x - y)
calculate(10, 90, (x, y) => x * y)
calculate(10, 90, (x, y) => x / y)