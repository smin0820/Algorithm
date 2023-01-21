const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

let maxNum = input[0];
let indexNum = 0;
for (i = 0; i < input.length; i++) {
    if (maxNum < input[i]) {
        maxNum = input[i];
    }
}
// cosnt maxNum = Math.max(...input);

for (i = 0; i < input.length; i++) {
    if (maxNum === input[i]) {
        break;
    }
    indexNum++;
}
// const indexNum = input.indexOf(maxNum);
console.log(`${maxNum}`);
console.log(`${indexNum + 1}`);