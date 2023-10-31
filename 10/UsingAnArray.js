class Stack {
    constructor() {
        this.storages = []
    }
    push(data) {
       this.storages.push(data) 
    }
    pop() { 
        return this.storages.pop()
    }
    top() {
        return this.storages[0]
    }
    isEmpty() {  
        return this.storages.length === 0
    }
    getSize() {
        return this.storages.length
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1