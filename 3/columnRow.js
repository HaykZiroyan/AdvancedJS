const matrix = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [3, 4, 9, 7, 2],
  [4, 8, 2, 6, 1],
  [7, 4, 5, 1, 9],
];


function change(obj) {
  const newObj = [];

  for (let i = 0; i < obj.length; i++) {
    newObj[i] = [];
    for (let j = 0; j < obj.length; j++) {
      newObj[i][j] = obj[j][i];
    }
  }
  return newObj;
}
console.log(change(matrix));