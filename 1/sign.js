// 1. Find the sign of product of three numbers without multiplication operator. Display the specified sign.

/*
function sign(a,b,c) {
    let neg = 0
    if ( a == 0 || b == 0 || c == 0) {
        return 0
    }
    if (a < 0) {
        neg++
    }
    if(b<0) {
        neg++
    }
    if(c<0) {
        neg++
    }
    if (neg % 2 == 0) {
        return "+"
    } else {
        return "-"
    }
}
cake = sign(9,0,-9)
console.log(cake)
 */

function sign(a,b,c) {
    let obj = {
        'Infinity': "+",
        '-Infinity': "-",
        'NaN': 'unsigned'
    }
    num = a*b*c/0
    return obj[num]
}
check = sign(5,-6,-5)
console.log(check)