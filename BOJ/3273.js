const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const n = Number(input[0]);
const data = input[1].split(' ').map(Number);
const x = Number(input[2]);

data.sort((a, b) => a - b);

let count = 0;
let start= 0;
let end = n - 1;

while(true) {
    while(end > 0 && data[start] + data[end] > x) {
        end -= 1;
    }

    if(data[start] + data[end] === x) {
        count += 1;
        end -= 1;
    }

    start += 1;

    if(start >= end) break;
    
}

console.log(count);
