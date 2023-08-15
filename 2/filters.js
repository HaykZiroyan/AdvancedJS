/*

9. Write a function which filters object by field.
*/

const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
      isAstronaut: true, 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
      isAstronaut: true, 
    }, 
    { 
      username: "Elon Musk", 
      isAstronaut: false, 
    }, 
  ];

function filterByField(user, str) {
    const newUser = []
    user.map(elem => {
        if(elem[str]) {
            newUser.push(elem)
        }
    } )

    return newUser
}

console.log(filterByField(users, "isAstronaut"))