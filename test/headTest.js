

const assert = require('assert')
const head = require('../head');

describe('#head', () => {
  it('should return 1 for [1, 2, 3]', () => {
     assert.deepStrictEqual(head([1, 2, 3]), 1)
  });
  it("returns '5' for ['5']", () => {
    assert.deepStrictEqual(head(['5']), '5');
  });
  it('should return "hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepStrictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello')
  });
});
