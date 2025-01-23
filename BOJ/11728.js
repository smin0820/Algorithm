const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let answer = [];
let i = 0;
let j = 0;

while(i < n && j < m) {
    if(a[i] < b[j]) {
        answer.push(a[i]);
        i += 1;
    } else {
        answer.push(b[j]);
        j += 1;
    }
}

while (i < n) {
    answer.push(a[i]);
    i += 1;
}
while(j < m) {
    answer.push(b[j]);
    j += 1;
}

console.log(answer.join(' '));


