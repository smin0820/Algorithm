const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(e => +e);
const n = parseInt(input.shift());
input.sort((a, b) => a - b);

let answer = [];

answer.push(Math.round(input.reduce((a, b) => a + b) / n));

answer.push(input[Math.floor(input.length / 2)]);

let map = new Map();
let max = 1;
for (let i of input) {
    if (!map.has(i)) {
        map.set(i, 1); // key, value값 저장
    } else {
        max = Math.max(max, map.get(i) + 1);
        map.set(i, map.get(i) + 1);
    }
}

const maxArr = [];
for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
}
answer.push(maxArr.length === 1 ? maxArr[0] : maxArr[1]);

answer.push(Math.max(...input) - Math.min(...input));
console.log(answer.join('\n'));