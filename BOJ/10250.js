const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const testCase = parseInt(input[0]);

for (i = 1; i <= testCase; i++) {
    const [H, W, N] = input[i].split(' ').map(Number);
    const floor = (N % H === 0 ? H : N % H) * 100;
    console.log(floor + Math.ceil(N / H));
};

