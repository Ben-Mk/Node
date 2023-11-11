const loadAsh = require("lodash");
const name = "ben";
const arr = [1, [2, [3, [4]]]];

const newArr = loadAsh.flattenDeep(arr);
const newName = loadAsh.toUpper(name);

console.log(newArr);
console.log(newName);
