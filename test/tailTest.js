

const assert = require('assert')
const tail = require('../tail');

describe('#tail', function (){
  it("should return ['lighthouse', 'labs'] for ['yo yo', 'lighthouse', 'labs']", function(){
    assert.deepStrictEqual(tail(["Yo Yo", 'lighthouse', 'labs']), ['lighthouse', 'labs'])
  });
  it('should return 3 for original array length', function(){
    const words = ["Yo Yo", 'lighthouse', 'labs'];
    tail(words);
    assert.deepStrictEqual(words.length, 3)
  })
});