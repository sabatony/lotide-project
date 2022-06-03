const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ❌ ${actual} !== ${expected}`);
  }

};
const eqArrays = function (arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;

  
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const cd = {c: '1', d: ["2", 3]};
const dc = {d: ['2', 3], c: '1'};
assertEqual(eqObjects(cd, dc), true);
const cd2 = {c: '1', d: ['2', 3, 4]};
assertEqual(eqObjects(cd, cd2), false)

assertEqual(eqArrays(['2', 3], ['2', 3, 4]), false);