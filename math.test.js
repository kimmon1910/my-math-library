const math = requier('./math');
const assert = requier('assert');

assert.strictEqual(math.sum(3,2),5 ,'should sum two numders');
assert.strictEqual(math.sum([1,2,3,4,5]),15 ,'should sum an array');