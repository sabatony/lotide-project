const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
if(key1.length !== key2.length){
  return false;
} 
for(const key of key1){
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if(!eqArrays(object1[key],object2[key])){
        return false;
      }
    }
}
return true;
  

};
const assertObjectsEqual = function(actual, expected) {
  object1 = {};
  object2 = {};

  if(eqObjects(object1, object2) === actual){
    console.log(`Assertion passed: ${actual} === ${expected}`)
  } else (
    console.log(`Assertion failed: ${actual} !== ${expected}`)
  )
};



const ab = {a : 1, b : '2'};
const ba = {a : 1, b : '2', c: 3};

console.log((assertObjectsEqual(eqObjects(ab, ba), true)));

module.exports = assertObjectsEqual;