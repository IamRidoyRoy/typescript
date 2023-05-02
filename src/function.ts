// Normal function 
function add(num1: number, num2: number = 30): number {
    return num1 + num2;
}

add(20, 50)

// Arrow Function 
const addArrow = (num1: number, num2: number): number => num1 + num2;


// Multiplication a array with arrow function
const arr = [10, 20, 30, 40, 50];
const newArr = arr.map((dual: number) => { dual * dual })


// Use function in an objects
const person: {
    name: string,
    age: number,
    balance: number,
    newBalance(money: number): number;
} = {
    name: 'Hridoy',
    age: 25,
    balance: 10000,
    newBalance(money: number) {
        return this.balance + money;
    }
}


// Spread operator - it is use to copy previous elements 

const myFriends = ['Tanvir', 'Mamum', 'Konok'];
const newFriends = ['Najnim', 'Hafsa', 'Shilla'];

myFriends.push(...newFriends);
// console.log(myFriends);


// Rest parameter
const restFriends = (...friends: string[]): void => {
    friends.forEach(friend => { console.log(`Hi ${friend}`) })
}

restFriends(
    "Ridoy",
    "Roy",
    "Monisha"
)


// Destructuring 

const bestFriends = {
    nam: 'Myself',
    age: 25,
}

const { nam, age } = bestFriends;