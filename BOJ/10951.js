const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

for (i = 0; i < input.length; i++) {
    let sum = input[i].split(' ').map(Number);
    console.log(sum[0] + sum[1]);
}
