const fs = require('fs');
const num = fs.readFileSync('./input.txt').toString().split(' ').map(Number);

let cash = 0;
let maxNum = 0;

if (num[0] === num[1] && num[1] === num[2]) {
    cash = 10000 + (num[0] * 1000);
} else if (num[0] === num[1] || num[1] === num[2] || num[0] === num[2]) {
    if (num[0] === num[1] || num[0] == num[2]) {
        cash = 1000 + (num[0] * 100);
    } else {
        cash = 1000 + (num[1] * 100);
    }
} else if (num[0] != num[1] && num[1] != num[2]) {
    maxNum = num[0] > num[1] ? num[0] : num[1];
    maxNum = maxNum > num[2] ? maxNum : num[2];
    cash = maxNum * 100;
}

console.log(cash);