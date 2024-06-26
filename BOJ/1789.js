const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split();
const S = Number(input[0]);

let cur = 0;
let sum = 0;

while(sum <= S) {
    cur += 1;
    sum += cur;
}

console.log(cur - 1);