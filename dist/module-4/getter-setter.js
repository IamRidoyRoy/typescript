"use strict";
class MyBankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    // Getter // We can get the private variable outside the class using "get"
    get balance2() {
        return this.balance;
    }
    // setter - we set a new value by using set 
    set deposit(amount) {
        this.balance = this.balance + amount;
    }
    getBalance() {
        return `My balance is ${this.balance}`;
    }
}
class MyNewAccount extends MyBankAccount {
    test() {
        this.name;
    }
}
const osthirAccount = new MyBankAccount(33, 'John', 20);
console.log(osthirAccount.balance2);
osthirAccount.deposit = 30;
console.log(osthirAccount.balance2);
