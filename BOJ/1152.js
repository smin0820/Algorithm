const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');
let countOfWords = 0;
for (i = 0; i < input.length; i++) {
    if (input[i] != '') {
        countOfWords++;
    }
}
console.log(countOfWords);