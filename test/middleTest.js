

const assert = require('assert')
const middle = require('../middle');

describe('#middle', function (){
  it("should return [2, 3] for [1, 2, 3, 4]", function(){
    assert.deepStrictEqual(middle([1, 2, 3, 4]), [2, 3])
  });
  it('should return [1] for [1, 2, 3]', function(){
    assert.deepStrictEqual(middle([1, 2, 3]), [2])
  })
});



