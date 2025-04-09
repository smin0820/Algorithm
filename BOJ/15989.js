const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());
const nums = input.map(v => Number(v));

const MAX = 10000;
let dp = Array.from({ length: MAX + 1}, () => Array(4).fill(0));

dp[1][1] = 1;

dp[2][1] = 1;
dp[2][2] = 1;

dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for(let i = 4; i < MAX + 1; i++) {
    dp[i][1] = dp[i - 1][1];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
}

for(let n of nums) {
    console.log(dp[n][1] + dp[n][2] + dp[n][3]);
}