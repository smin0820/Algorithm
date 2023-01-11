const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const cnt = parseInt(input[0]);
let result = '';
for (i = 1; i <= cnt; i++) {
    const number = input[i].split(' ').map(Number);
    result += number[0] + number[1] + '\n';
}
console.log(result);