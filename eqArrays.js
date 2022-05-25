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

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ['1',' 2', '3']), true);