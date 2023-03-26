const fs = require('fs');
let [a, b] = fs.readFileSync('./input.txt').toString().split(' ').map(Number);
const originalA = a, originalB = b;
while (a % b !== 0) {
    let r = a % b;
    if (r !== 0) {
        a = b;
        b = r;
    }
}
console.log(originalA * originalB / b);