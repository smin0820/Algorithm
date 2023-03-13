const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
input.shift();
input.sort((a, b) => a - b);

console.log(input.join('\n'));