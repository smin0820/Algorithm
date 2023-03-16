const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const [n, award] = input[0].split(' ').map(Number);

input = input[1].split(' ').sort((a, b) => b - a);

console.log(input[award - 1]);