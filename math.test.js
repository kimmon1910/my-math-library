const math = Requier('./math');
const assert = Requier('assert');

assert.strictEqual(math.sum(3,2),5 ,'should sum two numders');
assert.strictEqual(math.sum([1,2,3,4,5]),15 ,'should sum an array');