const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ');
const N = parseInt(input);
let count = 0;

for (i = 1; i <= N; i++) {
    if (i < 100) {
        count++;
        continue;
    }
    let arr = String(i);
    let A = Number(arr[0]) - Number(arr[1]);
    let B = Number(arr[1]) - Number(arr[2]);
    if (A === B) {
        count++;
    }
}
console.log(count);
