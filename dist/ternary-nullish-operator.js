"use strict";
var _a;
// Ternary operator 
const myAge = 25;
const isAdult = myAge > 18 ? 'yes' : 'No';
console.log(isAdult);
// Nullish Coeslancing Operator - This operator is work only for null and undefined 
const isAuthenticated = null;
const userName = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
console.log(userName);
const manush1 = {
    name: "ROy",
    age: 22,
    address: {
        road: "No Road",
        city: "No City"
    }
};
// Declare a default home 
const home = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address.home) !== null && _a !== void 0 ? _a : "Default Home";
console.log({ home });
