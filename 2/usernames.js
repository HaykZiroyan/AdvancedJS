/*
4. Write a function which returns array of usernames.
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
   
  function getUserNames(arr) {
    const newArr = []
    arr.map(item => newArr.push(item['username']) )
    return newArr
  }

  console.log(getUserNames(users)); 