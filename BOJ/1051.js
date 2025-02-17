const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = [];
for(let i = 1; i < n + 1; i++) {
    arr.push(input[i].trim().split('').map(Number));
}

let least = Math.min(n, m);
let answer = 1;

for(let size = least; size > 1; size--) {
    for(let i = 0; i <= n - size; i++) {
        for(let j = 0; j <= m - size; j++) {
            let num = arr[i][j];
            if(num === arr[i + size - 1][j] && num === arr[i][j + size - 1] && num === arr[i + size - 1][j + size - 1]) {
                answer = size * size;
                console.log(answer);
                return;
            }
        }
    }
}


console.log(answer);