const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const caseNum = Number(input[0]);
let count = 0;

for (i = 1; i <= caseNum; i++) {
    const word = input[i];
    const arr = [];
    let isWordGroup = true;
    for (j = 0; j < word.length; j++) {
        if (arr.indexOf(word[j]) === -1) {
            arr.push(word[j]);
        } else {
            if (arr.indexOf(word[j]) != arr.length - 1) {
                isWordGroup = false;
                break;
            }
        }
    }
    if (isWordGroup) {
        count += 1;
    }
}
console.log(count);
