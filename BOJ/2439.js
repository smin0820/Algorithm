const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
const cnt = parseInt(input);

let result = new Array(cnt).fill(' ');

for (i = input - 1; i >= 0; i--) {
    result[i] = '*';
    console.log(result.join(''));
}