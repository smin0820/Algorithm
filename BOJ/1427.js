const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('').sort((a, b) => b - a).join('');
console.log(input);