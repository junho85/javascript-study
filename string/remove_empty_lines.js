const sample = `hello world

nice to meet you
`;

const result = sample.replace(/^\s*$(?:\r\n?|\n)/gm, '').trim();

console.log("===\n" + result + "\n===");
console.log("count=" + result.split("\n").length);
console.log("count=" + countItems(result));

function countItems(str) {
    return str.replace(/^\s*$(?:\r\n?|\n)/gm, '').trim().split("\n").length;
}
