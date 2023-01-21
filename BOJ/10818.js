const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const num = input[1].split(' ').map(Number);
let min = num[0];
let max = num[0];
for (i = 0; i < Number(input[0]); i++) {
    if (min > num[i]) {
        min = num[i];

    }
    if (max < num[i]) {
        max = num[i];
    }
}

console.log(`${min} ${max}`);