const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const T = Number(input.shift());
const Nums = input.map(v => Number(v));
const dp = Array(101).fill(0);

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

for(let i = 6; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
}

for(let i = 0; i < T; i++) {
    console.log(dp[Nums[i]]);
}
