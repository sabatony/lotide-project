const takeUntil = function(array, callback) {
  results = [];
  for(let element of array){
    if(!callback(element)){
      results.push(element)
    } else{
      break;
    }
    
    
  }
  return results
  
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


module.exports = takeUntil;