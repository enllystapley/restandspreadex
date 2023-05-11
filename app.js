/* function filterOutOdds(...args) {
    var nums = Array.prototype.slice.call(args);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  } */
// above code refactored to use the rest operator 
// and arrow functions.
  const filterOutOdds = (...nums) => {
    return nums.filter((num) => num % 2 === 0)
  }

 /* ## **findMin**

Write a function called findMin that accepts a 
variable number of arguments and returns the 
smallest argument.

Make sure to do this using the rest and 
spread operator. */

function findMin(...nums){
    return Math.min(...nums);
}

/*
## **mergeObjects**

Write a function called ***mergeObjects*** that accepts two objects
 and returns a new object which contains all the keys and values of 
 the first object and second object.
*/

const objA = {
                person: "charles",
                aged: 47,
                nicknames: "barrel"
            };

const objB = {
                name: "Enlly",
                age: 33,
                nickname: "En"
            };

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

/*
## **doubleAndReturnArgs**

Write a function called ***doubleAndReturnArgs*** which accepts
 an array and a variable number of arguments. The function should 
 return a new array with the original array values and all of 
 additional arguments doubled.
*/

function doubleAndReturnArgs(arr, ...otherVals){
    let doubledVals = otherVals.map((val) => val * 2)
    return [...arr, ...doubledVals];
}

/*
## **Slice and Dice!**

For this section, write the following functions using rest, 
spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and 
not modifying the existing inputs.
*/



/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  /** Return a new array with every item in array1 and array2. */
  
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  /** Return a new object with all the keys and values
  from obj and a new key/value pair */
  
  const addKeyVal = (obj, key, val) => {
  
    // OPTION 1
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }
  
  /** Return a new object with a key removed. */
  
  const removeKey = (obj, key) => {
  
    // OPTION 1
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // ({ [key]: undefined, ...obj } = obj);
    // return obj;
  }
  
  /** Combine two objects and return a new object. */
  
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  
  /** Return a new object with a modified key and value. */
  
  const update = (obj, key, val) => {
  
    // OPTION 1
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 this uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }