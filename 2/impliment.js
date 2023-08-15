/*
13. Implement these array methods
unshift
shift
pop
push
forEach
findIndex
find
every
some
map
filter
reduce
slice
splice
flat

 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];


// unshift
function unshiftCheck(arr, elem) {

  if(typeof(elem) === 'object') {
    let move = elem.length
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i + move] = arr[i];
    }
    for (i = 0; i < move; i++) {
      arr[i] = elem[i]
    }
  } else {
    for (let i = arr.length; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = elem;
  }
}

//shift
function shiftCheck(arr) {
  let shifted = arr[0]  
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1
  return shifted;
}

// pop
function popCheck(arr) {
  let shifted = arr[arr.length - 1]  
  arr.length = arr.length - 1
  return shifted;
}


// push
function pushCheck(arr, elem) {
  let num = arr.length
  if(typeof(elem) === 'object') {
    for (i = 0; i < elem.length; i++) {
      arr[num + i] = elem[i];
      num++
    }
  } else {
    arr[num] = elem;
    num++
  }
  return num
}


// forEach
function con(elem) {
  console.log(elem)
}
function forEachCheck(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}


// findIndex
function findIndexCheck(arr, value) {
  if(arr.length === 0) return "-1"
 
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === value) return i
  }
  return "-1"
}

// find 

const ages = [3, 10, 18, 20];

function condition(elem) {
  let k
  if(elem > 14) {
    k = elem
  }
  return k

}

function findCheck(arr, func) {
  let value
  for (let i = 0; i < arr.length; i++) {
    value = func(arr[i])
    if (value) {
      break
    }
  }
  return value
}


// every
function cond(elem) {
  let k
  if(elem > 0) {
    k = elem
  }
  return k
}
function everyCheck(arr, func) {
  let a = 0
  for (let i = 0; i < arr.length; i++) {
    value = func(arr[i])
    if(!value) {
      a++
    }

  }
  if (a === 0) {
    return true
  } 
  return false
}

// some
function somecon(elem) {
  let k
  if(elem > 21) {
    k = elem
  }
  return k
}
function someCheck(arr, func) {
  let a = 0
  for (let i = 0; i < arr.length; i++) {
    value = func(arr[i])
    if(value) {
      a++
    }

  }
  if (a > 0) {
    return true
  } 
  return false
}


//map
function mapToDo(elem) {
  let changed = elem * 10
  return changed
}

function mapCheck(arr, func) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let value = mapToDo(arr[i])
    newArr[i] = value
  }
  return newArr
}



// filter
function filterToDo(elem) {
  let k
  if(elem < 18) {
    k = elem
  }
  return k
}
function someCheck(arr, func) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let value = func(arr[i])
    if(value) {
      newArr[newArr.length] = value
    }
  }
  return newArr
}


// reduce


// slice
function sliceCheck(arr, start, end = arr.length) {
  let newArr = []
  for (let i = start; i < end; i++) {
    newArr[newArr.length] = arr[i]
  }
  return newArr
}


// splice
function spliceCheck(arr, start, end, ...items) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if(i === start) {
      for(let j = 0; j < items.length; j++) {
        newArr.push(items[j])
      }
    }
    if(i >= start && i < start + end) {
      continue
    }
    newArr[newArr.length] = arr[i]
  }
  arr = newArr
  return arr
} 
 
// flat

function flatCCheck(array, depth = 1) {
  const newArr = [];

  for (const el of array) {
    if (Array.isArray(el) && depth) {
      newArr.push(...flatCCheck(el, depth - 1));
    } else {
      newArr.push(el);
    }
  }

  return newArr;
}
const myArr = [[1, 2], [3, [4, 5, 6], 7], 8];
console.log(flatCCheck(myArr, 2))