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

module.exports = middle;

