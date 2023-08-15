
/*
5. Write a function which returns array of lengths of user names

*/
const users = [ 
  { 
    username: "Yuri Gagarin", 
    lang: "ru", 
  }, 
  { 
    username: "Nil Armstrong", 
    lang: "ENG", 
  }, 
]; 

function getUsernameLengths(arr) {
  const newArr = []
  arr.map(item => newArr.push(item['username'].length) )
  return newArr
}

console.log(getUsernameLengths(users))
