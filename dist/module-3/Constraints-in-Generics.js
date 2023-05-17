"use strict";
// Use Generic constrains 
const crushMind = (myInfo) => {
    const crush = 'Monisha';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "Mr. Roy",
    age: 25,
    salary: 30000,
};
const result11 = crushMind(myInfo);
console.log(result11);
