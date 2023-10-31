/*
Stack
Create a class of a stack data structure with the following functionalities:
1. push: Add an element onto the stack.
2. pop: Remove and return the top element from the stack.
3. top: Retrieve the top element of the stack without removing it.
4. isEmpty: Check if the stack is empty.
5. getSize: Get the number of elements in the stack

Implementation Options:
1. Using an Array:
Create a class named Stack.
Initialize an empty array as the stack's storage.
Implement the push, pop, peek, isEmpty, and getSize methods.
Test the stack by pushing and popping elements.
*/

// class Stack {
//     #arr = []
//     push(elem) {
//         this.#arr.push(elem)
//     }
//     pop() {
//         if(this.#arr.length === 0) {
//             console.log("#array is empty")
//             return
//         }
//         console.log(this.#arr[this.#arr.length - 1])
//         return this.#arr.pop()

//     }
//     top() {
//         if(this.#arr.length === 0) {
//             console.log("#array is empty")
//             return
//         }
//         return this.#arr[this.#arr.length - 1]
//     }
//     peek() {

//     }
//     isEmpty() {
//         return !this.#arr.length
//     }
//     getSize(){
//         return this.#arr.length
//     }
// }

// const stack = new Stack(); 
// stack.push(1); 
// stack.push(2); 
// console.log(stack.pop());
// console.log(stack.top());
// console.log(stack.isEmpty());
// console.log(stack.getSize());

class Stack {
    #items = [];
    push(val) {
      this.#items.push(val);
    }
    pop() {
      return this.#items.pop();
    }
    top() {
      return this.#items[this.#items.length - 1];
    }
    isEmpty() {
      return !this.#items.length;
    }
    getSize() {
      return this.#items.length;
    }
  }
  
  function isValidParentheses(str) {
    const stack = new Stack();
  
    const parenthesesMap = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (const el of str) {
      if (el === "(" || el === "{" || el === "[") {
        stack.push(el);
      } else if (el === ")" || el === "}" || el === "]") {
        if (stack.isEmpty()) {
          return false;
        }
  
        const top = stack.pop();
        if (parenthesesMap[top] !== el) {
          return false;
        }
      }
    }
  
    return stack.isEmpty();
}

console.log(isValidParentheses("(("));
console.log(isValidParentheses("{{}}()[]"));
console.log(isValidParentheses("(){}{}"));
console.log(isValidParentheses("({})"));
console.log(isValidParentheses("({])"));