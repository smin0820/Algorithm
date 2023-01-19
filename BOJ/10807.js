const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const a = input[1].trim().split(' ');
let count = 0;

for (i = 0; i < input[0]; i++) {
    if (a[i] === input[2]) {
        count++;
    }
}
console.log(count);