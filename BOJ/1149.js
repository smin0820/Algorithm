const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
let color = [];
for(let i = 1; i <= N; i++) {
    color.push(input[i].split(' ').map(Number));
}

let dp = Array.from({ length: N }, () => Array(3).fill(0));

dp[0][0] = color[0][0];
dp[0][1] = color[0][1];
dp[0][2] = color[0][2];

for(let i = 1; i < N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + color[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + color[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + color[i][2];
}

const result = Math.min(...dp[N - 1]);
console.log(result);