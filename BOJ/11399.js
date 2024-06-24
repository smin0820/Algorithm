const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
let n = Number(input[0]);

let arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

let sum = 0;
let answer = 0;

for(let i = 0; i < n; i++) {
    sum += arr[i];
    answer += sum;    
}

console.log(answer);
