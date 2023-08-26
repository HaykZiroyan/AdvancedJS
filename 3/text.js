/* 
3. Տրված է տողերի մատրիցա (nxm) եւ բառ: Հայտնաբերել արդյոք բառը գոյթյն նի
մատրիցայմ թե ոչ
*/

function check(matrix, str) {
    let horizontal = 0
    let vertical = 0
    let textLength = str.length
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; i < matrix[i].length; j++) {
            if(matrix[i][j] === str[0]) {
                for(let k = 1; k < textLength; k++) {
                    if(matrix[i + k][j + k] === str[k]) {
                        horizontal++
                    }
                    if(matrix[j + k][i + k] === str[k]) {
                        vertical++
                    }
                } 
            }
        } 
    }
    if(horizontal === textLength || vertical === textLength) {
        return "the word contains in the matrix"
    }
    return "the word doesn't contain in the matrix"
}