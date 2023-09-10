/*
8. Implement a currying function using closures.
*/

// function add(a){
//     function sum(b){
//        a =   a+b;
//        return sum;
//     }
//     sum.toString = function(){return a;}
//     return sum;
//    }
function add(a, b, c) {
  return a + b + c;
}

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };

// }

function curry(func) {
  return function curried(...args) {
    if (args.length === func.length) {
      return func(...args);
    } else {
      return function(...newArgs) {
        return curried(...args, ...newArgs);
      }
    }
  };

}

const curriedAdd = curry(add); 
// console.log(curriedAdd(1, 2))
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1, 2, 3));