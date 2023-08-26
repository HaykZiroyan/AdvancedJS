/*
6. Տրված է քառակսաձեւ մատրիցա (nxn) բաղկացած զրոներից եւ մեկերից. գտնել միայն
մեկերից բաղկացած ամենամեծ ներդրված քառակսաձեւ(kxk) մատրիցայի երկարթյնը
(k).
*/

let matrix = [
    [0, 1, 1],
    [0, 1, 1],
    [1, 1, 0],


]


function matrixOne(obj) {
    let objLenght = obj.length
    let newLenght = 0
    for (let i = 1; i < objLenght; i++) {
        for (let j = 1; j < objLenght ; j++) {
            if(obj[i][j]) {
                obj[i][j] = Math.min(obj[i][j - 1], obj[i - 1][j], obj[i - 1][j - 1]) + 1
                if(obj[i][j] > newLenght) {
                    newLenght = obj[i][j]
                }
            }
        }
    }

    return newLenght
}


console.log(matrixOne(matrix))