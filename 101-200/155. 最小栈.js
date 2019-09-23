class MinStack {
    constructor() {
        this.stack = [];
    }
    push(v) {
        this.stack.push(v);
    }
    pop() {
        this.stack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return Math.min(...this.stack);
    }
}
