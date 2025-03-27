const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const day = input.shift().split(' ').map(Number);

let answer = 0;
let sum = 0;
for(let i = 0; i < K; i++) {
    sum += day[i];
}

for(let i = K; i < day.length; i++) {
    sum += day[i] - day[i - K];
    answer = Math.max(answer, sum);
}

console.log(answer);