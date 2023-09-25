/* 
2. Given a number n ( n >= 0 ). Print n-th Fibonacci number. 
(Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8 ..., an
= an-1 + an-2)
*/
function fib(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    let a = 0
    let b = 1
    let c
    for (let i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }
    return c
}
let num = fib(20)
console.log(num)