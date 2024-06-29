let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let N = Number(input[0]);
let h = input[1].split(' ').map(Number);
let count = 0;
let arr = new Array(N + 1).fill(0);

for(let x of h) {
    if(arr[x] > 0) {
        arr[x] -= 1;
        arr[x - 1] += 1;
    } else {
        arr[x - 1] += 1;
        count += 1;
    } 
}

console.log(count);