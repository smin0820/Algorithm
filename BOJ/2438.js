const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split();

let result = '';
for (i = 1; i <= input; i++) {
    result += '*';
    console.log(result);
}