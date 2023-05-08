"use strict";
// I know the type better than TS 
let emni;
emni = "I am the next level web developer";
emni;
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted value of kg to gram ${value}`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return `The converted value of kg to gram ${value}`;
    }
}
// we know more than ts as it's number or string so that we deine it as string or number
const resultTOBe = kgToGram(100);
const resultTOBes = kgToGram('100');
console.log(resultTOBe, resultTOBes);
try {
}
catch (err) {
    console.log(err.message);
}
