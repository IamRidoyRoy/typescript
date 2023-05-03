
// Ternary operator 
const myAge: number = 25;
const isAdult = myAge > 18 ? 'yes' : 'No';
console.log(isAdult);


// Nullish Coeslancing Operator - This operator is work only for null and undefined 
const isAuthenticated = null;
const userName = isAuthenticated ?? "Guest"
console.log(userName)


// Explore and use use nullish operator  
type Manush = {
    name: string,
    age: number,
    address: {
        road: string,
        city: string,
        home?: string
    }
}

const manush1: Manush = {
    name: "ROy",
    age: 22,
    address: {
        road: "No Road",
        city: "No City"
    }
}

// Declare a default home 
const home = manush1?.address.home ?? "Default Home"
console.log({ home })