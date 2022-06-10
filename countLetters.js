const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ❌ ${actual} !== ${expected}`);
  }

};

const countLetters = (string) => {
   let result = {};
   for(const letter of string) {
     result[letter] = result[letter] ? result[letter] += 1 : 1
   }
   return result;
};

const obj = countLetters('sabastian')
assertEqual(obj["s"], 2);
assertEqual(obj["a"], 3);
assertEqual(obj["b"], 1);
assertEqual(obj["t"], 1);

module.exports = countLetters;


