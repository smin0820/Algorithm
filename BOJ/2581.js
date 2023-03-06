const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

const arr = [];
let isPrime = true;
let sum = 0;

for (let i = input[0]; i <= input[1]; i++) {
    if (i !== 1) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
            };
        };
    } else {
        isPrime = false
    };

    isPrime === true && arr.push(i);
    isPrime = true;
}
if (arr.length !== 0) sum = arr.reduce((acc, cur) => acc + cur);
arr.length !== 0 ? console.log(sum + '\n' + arr[0]) : console.log(-1);
