/* 
4. Implement a simple person object with private properties using closures
*/
function createPerson(names, ages) {
  let name = names
  let age = ages
  // return name
  return  {
    setName: function (changed) {
      name = changed
    },
    getName: function () {
      return name
    },
    getAge: function() {
      return age
    },
    setAge: function (changed) {
      age = changed
    },
  }
}


const person = createPerson("Alice", 30); 
// console.log(person)
console.log(person.getName());
console.log(person.getAge()); 
person.setName("Bob"); 
person.setAge(25); 
console.log(person.getName());
console.log(person.getAge());