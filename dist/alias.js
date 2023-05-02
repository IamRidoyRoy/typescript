"use strict";
const crush1 = {
    name: 'Moyna Pakhi',
    age: 22,
    address: "New Mexico",
    isSexy: true
};
const crush2 = {
    name: 'Tiya Pakhi',
    address: "Ululu",
    isSexy: true
};
const courseName = "Next Level Web dev";
const calculate = (num1, num2, operation) => {
    return console.log(operation(num1, num2));
};
calculate(20, 30, (x, y) => (x + y));
calculate(10, 90, (x, y) => x - y);
calculate(10, 90, (x, y) => x * y);
calculate(10, 90, (x, y) => x / y);
