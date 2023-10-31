/*
12. Write a recursive function to generate all permutations of a given string.
*/


function permutations(data, i = 0, length = data.length) {
    if(typeof(data) === 'string') {
        data = data.split('')
    }
    if (i === length) {
        let elem = ''
        for(let j = 0; j < length; j++) {
            elem +=data[j]
        }
        obj.push(elem)
    } else {
        for (let j = i; j < length; j++) {
            swap(data, i, j);
            permutations(data, i + 1, length);
            swap(data, i, j);
        }
    }
    
}

function swap(data, i, j) {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}


const obj = [];
let string = "hello";
permutations(string);
console.log(obj);
