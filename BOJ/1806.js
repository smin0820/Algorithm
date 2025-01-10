const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [n, s] = input[0].split(' ').map(Number);
let data = input[1].split(' ').map(Number);

let minLength = Infinity;
let start = 0;
let end = 0;
let partialSum = 0;

while(end < n) {
    partialSum += data[end];

    while(partialSum >= s) {
        partialSum -= data[start];
        minLength = Math.min(((end - start) + 1), minLength);
        start += 1;
    }

    end += 1;
}

console.log(minLength === Infinity ? 0 : minLength);
