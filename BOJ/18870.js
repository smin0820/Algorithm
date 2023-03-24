const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const n = input.shift();

// 정렬
const arr = input[0].split(' ').map(e => +e).sort((a, b) => a - b);

// 중복 제거
const set = new Set(arr);
const map = new Map();

// index 지정
[...set].forEach((item, index) => {
    map.set(item, index);
})

let answer = '';

input[0].split(' ').forEach((item, index) => {
    answer += map.get(+item) + ' ';
})

console.log(answer);