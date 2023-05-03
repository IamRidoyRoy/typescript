"use strict";
// String and Null type
const searchName = (value) => {
    if (value === null) {
        console.log('There is nothingh to search');
    }
    else {
        console.log('You are searchig!');
    }
};
searchName(null);
// Unknown Type  
const getMyCarSpeed = (speed) => {
    if (typeof speed == "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed == "string") {
        const [value] = speed.split(' ');
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My split speed is ${convertedSpeed}`);
    }
    else {
        console.log("This is not right type");
    }
};
getMyCarSpeed(10);
getMyCarSpeed('10 km^-1');
getMyCarSpeed(true);
// never type 
function errorDimu(message) {
    throw new Error(message);
}
errorDimu("Ja vai Tore ekta error maira Dilam");
