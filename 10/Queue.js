class Queue {
    #top = []
    #size = 0
    
    enqueue(item) {
        this.#top.push(item)
        this.#size++
    }

    print() {
        console.log(this.#top.toString().replaceAll(",", " "))
    }

    front() {
        return this.#top[0]
    }

    dequeue() {
        this.#size--
        return this.#top.shift()
    }

    size() {
        return this.#size
    }

    isEmpty() {
        if (this.#size) return false
        return true
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1 2 3
console.log("Front element: " + queue.front()); // Output: Front element: 1
queue.dequeue();
queue.print(); // Output: 2 3
console.log("Queue size: " + queue.size()); // Output: Queue size: 2