const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const num = parseInt(input[0]);
const arr = input[1].split('').map(Number);
let sum = 0;

for (i = 0; i < num; i++) {
    sum += arr[i];
}
console.log(sum);