"use strict";
const userWithTypeAlias = {
    name: 'TypeAlias',
    age: 200,
};
const userWithInterface = {
    name: 'interface',
    age: 200,
};
const Iuser = {
    name: "Bhoot",
    age: 200,
    role: 'Akam',
};
// Arrow function to add two number 
const addNumber = (num1, num2) => {
    return num1 + num2;
};
const rollNumbers = [1, 2, 4,];
// So, Type Alial & interface are almost same -
//  When we will use function, object we should use Interface
// And for others we should use type Alias.
