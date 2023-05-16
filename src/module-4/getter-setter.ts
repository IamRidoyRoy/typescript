class MyBankAccount {
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
    // Getter // We can get the private variable outside the class using "get"
    get balance2(): number {
        return this.balance;
    }

    // setter - we set a new value by using set 
    set deposit(amount: number) {
        this.balance = this.balance + amount;
    }
    getBalance() {
        return `My balance is ${this.balance}`
    }
}


class MyNewAccount extends MyBankAccount {
    test() {
        this.name
    }
}

const osthirAccount = new MyBankAccount(33, 'John', 20)


console.log(osthirAccount.balance2)
osthirAccount.deposit = 30;
console.log(osthirAccount.balance2)
