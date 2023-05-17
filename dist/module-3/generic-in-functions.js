"use strict";
// Arrow Finction 
const createArray = (params) => {
    return [params];
};
// Generic arrow functions 
const createArray2 = (params) => {
    return [params];
};
const result1 = createArray("Bangladesh");
const result2 = createArray2(true);
const result3 = createArray2('Check the string');
const result4 = createArray2(325);
const result5 = createArray2({ name: 'Ridoy' });
console.log(result1, result2, result3, result4, result5);
