const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ❌ ${actual} !== ${expected}`);
  }

};

const head = function (arr) {
  const first = arr[0];
  return first;


};
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log();