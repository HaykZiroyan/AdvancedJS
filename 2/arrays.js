/**
12. Create a function that takes an array of numbers arr, a string str and return an array of numbers as
per the following rules:
  - "Asc" returns a sorted array in ascending order. 
  - "Desc" returns a sorted array in descending order.
 */

function ascending(arr) {
    arr.sort(function(a, b) {
        return a - b;
      });
    return arr
}
function descending(arr) {
    arr.sort(function(a, b) {
        return b-a;
      });
    return arr
}

function sortBy(arr, str = "Asc") {
    if(str == "Asc") {
        return ascending(arr)
    }
    return descending(arr)
}


  console.log(sortBy([4, 3, 2, 1], "Asc"));
  console.log(sortBy([7, 8, 11, 66, 18]));
  console.log(sortBy([7, 8, 11, 1, 66], "Desc"));