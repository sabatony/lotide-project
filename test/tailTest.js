const assertEqual = require('../assertEqual');
const tail = require('../tail')

const words = ["Yo Yo", 'lighthouse', 'labs'];
(tail(words));
assertEqual(words.length, 3);