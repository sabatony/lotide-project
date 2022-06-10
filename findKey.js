const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ❌ ${actual} !== ${expected}`);
  }

};

const findKey = function (object, callback){
  const keys = Object.keys(object);
  for(const key of keys){
    const currentValue = object[key];
    const myResult = callback(currentValue);
    console.log('this is my result:', myResult, key, currentValue);
    if(myResult){
      return key
    }

    }
    
  return undefined;
};
const myObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const myCallback = x => x.stars === 2;

const response = findKey(myObject, myCallback) // => "noma"
console.log(response);

module.exports = findKey;
