const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split().map(Number);

let count = 1;
let block = 1;

while (block < input) {
    block += 6 * count;
    count++;
}
console.log(count);