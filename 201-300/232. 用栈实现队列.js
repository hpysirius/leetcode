class MyQueue {
    constructor() {
        this.list = [];
    }
    push(item) {
        this.list.push(item);
    }
    peek(item) {
        return this.list.length > 0 ? this.list[0] : -1;
    }
    pop() {
        return this.list.shift();
    }
    empty() {
        return !this.list.length;
    }
}