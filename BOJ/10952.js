const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

for (i = 0; i < input.length; i++) {
    const num = input[i].split(' ').map(Number);
    if (num[0] === 0 && num[1] === 0) {
        break;
    }
    console.log(num[0] + num[1]);
}