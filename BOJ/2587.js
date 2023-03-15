const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);
let sum = 0;

for (i = 0; i < input.length; i++) {
    sum += input[i];
}
input.sort((a, b) => a - b);
const num = Math.floor(input.length / 2);
console.log(sum / input.length + '\n' + input[num]);