const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const arr = input[0].trim().split(' ');
const index = parseInt(arr[0]);
const num = parseInt(arr[1]);

const numArr = input[1].trim().split(' ');
let answer = [];

for (i = 0; i < index; i++) {
    if (num > numArr[i]) {
        answer.push(numArr[i]);
    }
}

console.log(answer.join(' '));