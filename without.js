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

const without = function (source, itemsToRemove){
  let myArr = []
  for(let i = 0; i < source.length; i++){
    if(source[i] !== itemsToRemove[i]){
      myArr.push(source[i]);
      

    }
  }
  return myArr;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqualArray(words, ["hello", "world", "lighthouse"]);

module.exports = without;