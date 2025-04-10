const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());
const nums = input.map(v => Number(v));

const MAX = 100000;
const MOD = 1000000009;

const dp = Array.from({ length: MAX + 1 }, () => Array(4).fill(0));

dp[1][1] = 1;

dp[2][2] = 1;

dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for(let i = 4; i <= MAX; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
}

for(let n of nums) {
    console.log((dp[n][1] + dp[n][2] + dp[n][3]) % MOD);
}
