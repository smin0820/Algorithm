const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]);
arr.sort((a, b) => a - b);

let start = 1;
let end = arr[arr.length - 1];

let result = 0;
while(start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for(let x of arr) {
        total += Math.min(mid, x);
    }
    if(total <= m) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(end);