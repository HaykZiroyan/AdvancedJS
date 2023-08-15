/*
2. Տրված է թվերի մատրիցա (nxm), դրս բերել բոլոր տողերի մինիմմներից բաղկացած
զանգվածը
*/

const matrix = [
    [9, 5, 16, 178],
    [4, 5, 58],
    [34, 49, 2, 16, 3, 65, 4, 567],
    [78, 6, 13, 25, 20, 36, 40],
];

function minArr(obj) {
    const newArr = []
    obj.map(elem => {
        let newElem = Math.min(...elem)
        newArr.push(newElem)
    })
    return(newArr)
}
console.log(minArr(matrix))
