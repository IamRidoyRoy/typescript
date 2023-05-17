
class Counter {
    static count: number = 0;


    static increment(): number {
        return Counter.count = Counter.count + 1;
    }
    static decrement(): number {
        return Counter.count = Counter.count - 1;
    }
}

// const instance1 = new Counter();
// const instance2 = new Counter();

// As we make all static so we have to acces the static value using class 
console.log(Counter.increment());
console.log(Counter.increment());
