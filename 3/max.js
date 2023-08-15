
/*
1. Տրված է թվերի մատրիցա(զանվածների երկարթյնը կարող է տարբեր լինել) գտնել
ամենամեծ գմարը նեցող array-ի ինդեքսը:
 */
const matrix = [
  [9, 5, 16, 178],
  [4, 5, 58],
  [9, 2, 16, 3, 65, 4, 567],
  [78, 6, 13, 25, 20, 36, 40],
];

function check(obj) {
  let index = 0
  let sum = 0
  obj.map((elem, key) => {
    let check = 0
    // console.log(elem)
    elem.map(elems => {
      check += elems
    })
    // elem.map(elems => {
    //   check += elems
    // })
    if (check > sum) {
      sum = check
      index = key
    }
})
  return index
}
console.log(check(matrix))