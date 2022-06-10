const assertEqualArray = require('../assertArrayEquals');
const eqArrays = require('../eqArrays')


assertEqualArray(eqArrays([1, 2, 3,], ['1', '2', '3',]), false);