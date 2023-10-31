class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    append(data) {
        if(!this.head) {
            this.head = new Node(data)
        } else {
            let current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = new Node(data)
        }
        this.size++
    }

    prepend(data) {
        const node = new Node(data, this.head)
        this.head = node
        this.size++
    }

    insert(data, position) {
        if(position < 0 || position > this.size) {
            return console.log('Position out of range')
        }

        let newNode = new Node(data)
        if(position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let current = this.head
            let previous
            let index = 0
            while(index < position) {
                previous = current
                current = current.next
                index++
            }
            newNode.next = current
            previous.next = newNode
        }
        this.size++
    }
    print() {
        let current = this.head
        let result = []
        while(current) {
            result.push(current.data)
            current = current.next
        }
        console.log(result.join(' -> '))
    }

    printList() {
        console.log(this.head)
    }
    getSize() {
        return this.size
    }

    remove(value) {
        let current = this.head
        if(current.data === value) {
            this.head = current.next
        } else {
            let previous = current
            current = this.head.next
            let index = 1

            while(index < this.size) {
                if(current.data === value) {
                    previous.next = current.next
                }
                previous = current
                current = current.next
                index++
            }

        }
        this.size--
    }
    removeAt(position) {
        if(position < 0 || position >= this.size) {
            throw new Error('Position out of range')
        }

        let current = this.head
        if(position === 0) {
            this.head = current.next
        } else {
            let previous
            let index = 0
            while(index < position) {
                previous = current
                current = current.next
                index++
            }
            previous.next = current.next
        }
        this.size--
    }


}
const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insert(3, 3);
list.printList();
console.log("Size:", list.getSize());
list.remove(2);
list.removeAt(2);
list.printList(); 
console.log("Size:", list.getSize());