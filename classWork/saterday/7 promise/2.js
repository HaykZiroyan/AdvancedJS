// /*
// Create a function named squarePromise, that takes a promise that resolves with a
// number or a string. Function should return a promise such that:
// ● If the input promise resolves with a number, the output promise resolves with the
// square of that number.
// ● If the input promise resolves with a string that we can turn into a number (like
// "1234"), the output promise resolves with the square of that number (1522756 in
// this example)
// ● If the input promise resolves with a string that we cannot turn into a number (like
// "asdf"), then we reject with a message like "Cannot convert 'asdf' to a
// number!"
// ● If the input promise rejects with an error, the output promise rejects with the same
// error
// */

function squarePromise(promise) {
    
    promise.then((value) => {
        console.log(isNaN(+value))
    //     if(typeof value === "number") {
    //         console.log(value * value)
    //     } else if(isNaN(Number("005"))){
    //         console.log("numeric string")
    //         console.log(value * value)
    //     }
      }) 
}
const prom1 = new Promise((res) => res(6))
const prom2 = new Promise((res) => res("4"))
const prom3 = new Promise((res) => res("adw"))
// // const prom4 = new Promise((res, rej) => rej(true))

squarePromise(prom2)

// console.log(isNaN(Number("005")))

// console.log("5"*"5")