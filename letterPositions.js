const letterPositions = (sentence) => {
  const results = {};
  console.log("results1", results)
  for(let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]
    console.log(letter);
    if(letter !== ' '){
      if(results[letter]){
        results[letter].push(i)
        console.log('letter exist', results[letter].push(i) )
      } else{
        results[letter] = [i];
        
      }
    }
  }
  console.log("results2", results)
  return results;
};
const result = letterPositions("hello");

module.exports = letterPositions;

/*const eqArrays = function (arr1, arr2){
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
assertEqualArray(letterPositions('hello').e, [1]); */