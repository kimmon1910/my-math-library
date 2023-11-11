// test.js
const sum = require('./mymath');
const assert = require('assert');

assert.strictEqual(sum(3, 2), 5, 'should sum two numbers');
assert.strictEqual(sum([1, 2, 3, 4, 5]), 15, 'should sum an array');

