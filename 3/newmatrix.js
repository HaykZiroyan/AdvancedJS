/*
5. Տրված է քառակսաձեւ մատրիցա(nxn), վերադարձնել նորը, որտեղ կլինեն միայն այն
տողերն  սյները որոնց գմարը չի գերազանցի նշված k թիվը
*/


const matrix = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [3, 4, 9, 7, 2],
    [4, 8, 2, 6, 1],
    [7, 4, 5, 1, 9],
  ];
  
  
  function change(obj, sum) {
    const newObj = [];
    
    for (let i = 0; i < obj.length; i++) {
        sum = 0
      for (let j = 0; j < obj.length; j++) {
        sum +=  obj[j][i]
      }
      console.log(sum)
    }
    return newObj;
  }
  console.log(change(matrix, 40));