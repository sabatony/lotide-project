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

const assertEqualArray = function(actual, expected){
   
   let arr1 = [];
   let arr2 = [];
   
  if(actual === eqArrays(arr1, arr2)){
    console.log(`Assertion passed: ✅ ${actual} === ${expected}`);
  } else if (actual !== eqArrays(arr1, arr2)) {
    console.log(`Assertion failed: ❌ ${actual} !== ${expected}`);
  }


};
const flatten = function (arr){
  return arr.flat();
}
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]