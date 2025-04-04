const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);

const dp = new Array(N + 1).fill(Infinity);
dp[0] = 0;

for(let i = 1; i <= N; i++) {
    for(let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}
console.log(dp[N]);