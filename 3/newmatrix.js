/*
5. Տրված է քառակսաձեւ մատրիցա(nxn), վերադարձնել նորը, որտեղ կլինեն միայն այն
տողերն  սյները որոնց գմարը չի գերազանցի նշված k թիվը
*/


const matrix = [
    [1, 2, 3, 4, 5],
    [7, 12, 5, 1, 9],
    [5, 6, 7, 8, 9],
    [3, 4, 9, 7, 2],
    [4, 8, 2, 6, 1],
  ];
  
  
  function change(obj, sum) {
    const newObj = [];
    let objLenght = obj.length
    let column = 0
    let row = 0
    for (let i = 1; i < objLenght; i++) {
      
      for (let j = 1; j < objLenght; j++) {
        console.log(++column)
      }
    }
  

    return column
  }
  console.log(change(matrix, 10));