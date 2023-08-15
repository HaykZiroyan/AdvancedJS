/*
7. Enter a positive number. 
   Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1)
*/

function factorial(n) {
    if (n == 0 || n==1) {
        return 1
    }
    let num = 1
    for (let i = 2; i <= n; i++) {
        num *= i
    }
    return num
}
fac = factorial(1) 
console.log(fac)