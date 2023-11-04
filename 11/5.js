// Promise.resolve()
//     .then(() => console.log(1))       // will print 1 in console
//     .catch(() => console.log(3))      //will not print anything in console, because catch() is catching and prints errors, but there isn't an error
//     .then(() => { console.log(2); throw new Error(); })  //in console will print 2 and an error for "new Error()" 
//     .then(() => console.log(4))        //will pass this
//     .then(() => console.log(4))         //will pass this
// Promise.resolve()
//     .then(() => console.log(11))    // will print 11 in console
//     .then(() => { console.log(12); throw new Error(); })    // will print 12 in console and will get an error
//     .catch(() => console.log(13))   // will print 13 in console, cause catch error to console 13 
//     .catch(() => console.log(14))   //will pass, cause no new error
//     .then(() => console.log(15))    //will print 15 in console
// Promise.resolve()
//     .then(data => {
//         throw new Error('Api Error');
//         return 1;
//     })                                  // throwing an error with a message "Api Error"
//     .then(data => console.log('ok'))    //passing this code cause was an error 
//     .catch(error => {
//         console.log(error.message);
//         return "2";
//     })                                  // catching last error and printing its message in console and returns new promise with a data value 2
//     .then(data => {
//         console.log(data);
//     })                                  // will print 2 in console 
//     console.log(1)          // will print 1 in console
//     setTimeout(() => {
//         console.log(2)
//     }, 20)                  // will print 2 in console 2ms later
Promise.resolve()
    .then(() => {
        console.log(3)
        return 1
    })
    .catch(e => console.log(e, 4))
    .finally(res => console.log(res, 5))
    .then((res) => console.log(res))

// console.log(6)
// let a = 5;
// setTimeout(() => {
//     console.log(a);
//     a = 10;
// }, 0);
// let p = new Promise((resolve, reject) => {
//     console.log(a);
//     a = 25;
//     resolve();
// });
// p.then(res => {
//     console.log('final result ', res)
// });
//     console.log(a);