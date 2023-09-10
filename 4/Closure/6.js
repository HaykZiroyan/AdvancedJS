/*
6. Implement a memoization function using closure to cache expensive function calls.
*/


function fibonacci(n) {
    
        if (n <= 1) {
          return n;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoize(func) {
    const cache = {};
    
    return function(num) {
      
      if (cache[num]) {
        return cache[num] + "(cached)";
      }
      
      const result = func(num);
      cache[num] = result;
      
      return result + "(calculated)";
    };
}

const memoizedFibonacci = memoize(fibonacci); 
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));