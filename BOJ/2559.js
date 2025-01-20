const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);

let sum = data.slice(0, k).reduce((a, b) => a + b);

let answer = sum;

for(let i = 0; i < (n - k); i++) {
    sum += (data[i + k] - data[i]);
    if(answer < sum) {
        answer = sum;
    }
}

console.log(answer);
