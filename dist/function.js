"use strict";
// Normal function 
function add(num1, num2 = 30) {
    return num1 + num2;
}
add(20, 50);
// Arrow Function 
const addArrow = (num1, num2) => num1 + num2;
// Multiplication a array with arrow function
const arr = [10, 20, 30, 40, 50];
const newArr = arr.map((dual) => { dual * dual; });
// Use function in an objects
const person = {
    name: 'Hridoy',
    age: 25,
    balance: 10000,
    newBalance(money) {
        return this.balance + money;
    }
};
// Spread operator - it is use to copy previous elements 
const myFriends = ['Tanvir', 'Mamum', 'Konok'];
const newFriends = ['Najnim', 'Hafsa', 'Shilla'];
myFriends.push(...newFriends);
// console.log(myFriends);
// Rest parameter
const restFriends = (...friends) => {
    friends.forEach(friend => { console.log(`Hi ${friend}`); });
};
restFriends("Ridoy", "Roy", "Monisha");
// Destructuring 
const bestFriends = {
    nam: 'Myself',
    age: 25,
};
const { nam, age } = bestFriends;
