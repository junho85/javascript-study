const assert = require('assert');

// normal
assert.deepStrictEqual("hello-world".split("-")[0], "hello");
assert.deepStrictEqual("hello-world".split("-")[1], "world");

// 3 length separator
assert.deepStrictEqual("hello-+xworld".split("-+x")[0], "hello");
assert.deepStrictEqual("hello-+xworld".split("-+x")[1], "world");

// limit
assert.deepStrictEqual("nice-to-meet-you".split("-", 1)[0], "nice");
assert.deepStrictEqual("nice-to-meet-you".split("-", 1)[1], undefined);

// out of range - undefined
assert.deepStrictEqual("hello-world".split("-")[2], undefined);

// split string and get two variables in one line
const [left, right] = "hello-world".split("-");
console.log(left, right); // hello world