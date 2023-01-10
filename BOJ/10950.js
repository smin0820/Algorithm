const fs = require('fs');
const T = fs.readFileSync('./input.txt').toString().split('\n');

for (i = 1; i <= T[0]; i++) {
    const plus = T[i].split(' ').map(Number);
    console.log(plus[0] + plus[1]);
}