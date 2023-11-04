function mapPromise(promise, transformer) {
    return new Promise((resolve, reject) => {
       promise
         .then(value => {
           try {
             const transformedValue = transformer(value);
             resolve(transformedValue);
           } catch (error) {
             reject(error);
           }
         })
         .catch(error => {
           reject(error);
         });
    });
   }

const myPromise = new Promise((resolve, reject) => { resolve(2) })
const timesTwo = (val) => val * 2
mapPromise(myPromise, timesTwo).then(result => console.log(result))