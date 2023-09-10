/*
7. Create a function factory that generates functions for different operations.
 */
function calculate() {
    return  {
        add: function (a, b) {
          return a + b
        },
        multiply: function (a, b) {
          return a * b
        },
        divide: function(a, b) {
          return a / b
        },
        subtract: function (a, b) {
          return a - b
        },
    }
}
function createCalculator(todo) {
    return function (a, b){
      if (todo === "add") return a + b
      if (todo === "multiply") return a * b
      if(todo === "divide") return a / b
      if (todo === "subtract") return a - b
    }
}


// console.log(check(3, 5))


const add = createCalculator("add"); 
console.log(add(3, 5));
 
const multiply = createCalculator("multiply"); 
console.log(multiply(2, 9));