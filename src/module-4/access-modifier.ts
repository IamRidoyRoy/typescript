class BankAccount {
    // when we use public it is global
    // When we use private it can't be used outside the class
    // When we use protected we will able to use it another class by extends it


    id: number;
    protected name: string;
    private balance: number;


    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }


    getBalance() {
        return `My balance is ${this.balance}`
    }
}


class NewAccount extends BankAccount {
    test() {
        this.name
    }
}




const myAccount = new BankAccount(33, 'John', 20)


console.log(myAccount)
// class NewAccount =
