const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);

let nums = input[1].split(' ').map(Number);
let dp = Array(N).fill(0);
dp[0] = nums[0];
let maxSum = dp[0];

for(let i = 1; i < N; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    maxSum = Math.max(maxSum, dp[i]);
}

console.log(maxSum);