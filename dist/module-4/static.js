"use strict";
class Counter {
    constructor(count) {
        this.count = count;
    }
    increment() {
        return this.count = this.count + 1;
    }
    decrement() {
        return this.count = this.count - 1;
    }
}
const instance1 = new Counter(0);
const instance2 = new Counter(1);
console.log(instance1.increment());
console.log(instance1.increment());
