const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split().map(Number);
let count = 0;

for (let i = 1; i ** 2 <= input; i++) {
    count++;
}
console.log(count);