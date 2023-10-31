class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next;
    }
}

class Stack {
        #top = null
        #size = 0
    push(data) {
        if(!this.#top) {
            this.#top = new Node(data)
        }else {
            let current = this.#top
            while(current.next) {
                current = current.next
            }
            current.next = new Node(data)
        }
        this.#size++
    }
    pop() { 
        if (this.#size === 0) return "stack is empty"
        if (this.#size === 1) {
            let value = this.#top.data
            this.#top = null
            return value
        }
        let currentNode = this.#top
        let nextNode = this.#top.next
        let value
        while (nextNode) {
            value = nextNode.data
            if(!nextNode.next) {
                currentNode.next = null
                break
            }
            currentNode = nextNode
            nextNode = currentNode.next            
        }

        this.#size--
        return value 
        
    }
    top() {
        if (this.#size === 0) return "stack is empty"
        return this.#top.data
    }
    isEmpty() {
        if(this.#size === 0) return true
        return false
    }
    getSize() {
        return this.#size
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1