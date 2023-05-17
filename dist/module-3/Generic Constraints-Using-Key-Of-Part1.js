"use strict";
// here Y makes a union type Y = 'name' | 'age'
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'Mr. X', age: 100 }, 'age');
