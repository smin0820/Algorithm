const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);
let arr = [];
for (i = 0; i < input.length; i++) {
    if (!arr.includes(input[i] % 42)) {
        arr.push(input[i] % 42);
    }
}

console.log(arr.length);