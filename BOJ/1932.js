const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const size = Number(input[0]);
let triangle = [];
for (let i = 1; i <= size; i++) {
    triangle.push(input[i].split(' ').map(Number));
}

let dp = Array.from({ length: size }, (_, i) => Array(i + 1).fill(0));
dp[0][0] = triangle[0][0]; 

for(let i = 1; i < size; i++) {
    for(let j = 0; j <= i; j++) {
        if(j === 0) {
            dp[i][j] = dp[i - 1][j] + triangle[i][j];
        } else if(j === i) {
            dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
        } else {
            dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
        }
    }
}

const result = Math.max(...dp[size - 1]);

console.log(result);