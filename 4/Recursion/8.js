/*
8. Write a recursive function to flatten a nested object.
*/

function flattenObject(currentObject, newObject = {}, previousKeyName = '') {
    for (let key in currentObject) {
        let value = currentObject[key];
    
    if (typeof(value) !== "object") {
        if ( previousKeyName === '') {
            newObject[key] = value;
        } else {
            if(key == '') {
                 newObject[previousKeyName] = value;
            }else{
                newObject[previousKeyName + '.' + key] = value;
            }
        }
    } else {
            if (previousKeyName === '') {             
                flattenObject(value, newObject, key);
            } else {
                flattenObject(value, newObject, previousKeyName + '.' + key);
            }
       }
    }
    return newObject
}

const nestedObject = { 
    a: 1, 
    b: { 
      c: 2, 
      d: { 
        e: 3, 
        f: 4, 
      }, 
    }, 
    g: 5, 
  }; 
   
  const flattenedObject = flattenObject(nestedObject); 
  console.log(flattenedObject);