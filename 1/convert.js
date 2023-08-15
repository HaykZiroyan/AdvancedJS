/* 
5. Convert base-2 number to base-10
*/

function convert(result) {
    let numTen = 0
    let power = result.length -1
    for (let i = 0; i<result.length; i++) {
        numTen = numTen + result[i] * Math.pow(2,power);
        power--
    }
    return numTen
}
let based = convert("01010");
console.log(based)