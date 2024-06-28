let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let N = Number(input[0]);

let arr = [];
for(let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
}
arr.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]);
console.log(arr);
let count = 1, cur = 0;

for(let j = 1; j < N; j++) {
    if(arr[cur][1] <= arr[j][0]) {
        cur = j;
        count += 1;
    }
}

console.log(count);


