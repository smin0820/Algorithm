const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const total = parseInt(input[0]);
let newArrTotal = 0;
const cnt = parseInt(input[1]);

for (i = 2; i <= cnt + 1; i++) {
    const newArr = input[i].split(' ').map(Number);
    newArrTotal += newArr[0] * newArr[1];
}


if (total === newArrTotal) {
    console.log('Yes');
} else {
    console.log('No');
}