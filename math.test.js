// test.js
const math = require('./mymath');
const assert = require('assert');

assert.strictEqual(math.sum(3, 2), 5, 'should sum two numbers');
assert.strictEqual(math.sum([1, 2, 3, 4, 5]), 15, 'should sum an array');
