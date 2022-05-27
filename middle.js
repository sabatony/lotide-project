const middle = function(arr){
  if(arr.length <= 2){
    return [];
  }
  const mid = arr[Math.round((arr.length - 1) / 2)];
  if(arr.length % 2 === 1){
    return [mid]
  } else if (arr.length % 2 === 0){
    return [mid - 1, mid];


  }
    
  
};
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5,])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]