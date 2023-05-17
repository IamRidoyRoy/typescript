"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    getBalance() {
        return `My balance is ${this.balance}`;
    }
}
class NewAccount extends BankAccount {
    test() {
        this.name;
    }
}
const myAccount = new BankAccount(33, 'John', 20);
console.log(myAccount);
// class NewAccount =
