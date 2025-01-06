const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let data = input[1].split(' ').map(Number);

let end = 0;
let count = 0;
let sum = 0;

for(let start = 0; start < n; start++) {
    while(sum < m && end < n) {
        sum += data[end];
        end += 1;
    }
    if(sum === m) count += 1;
    sum -= data[start];
}

console.log(count);
