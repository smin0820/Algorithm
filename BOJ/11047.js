const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

let arr = []
for(let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let count = 0;
for(let j = n - 1; j >= 0; j--) {
    count += parseInt(k / arr[j]);
    k %= arr[j];
}

console.log(count);