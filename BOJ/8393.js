const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split();

let sum = 0;

for (i = 1; i <= input; i++) {
    sum += i;
}
console.log(sum);