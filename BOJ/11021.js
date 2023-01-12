const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const T = parseInt(input[0]);

for (i = 1; i <= T; i++) {
    const num = input[i].split(' ').map(Number);
    console.log('Case #' + i + ': ' + `${num[0] + num[1]}`);
}