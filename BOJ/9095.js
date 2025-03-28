const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const T = Number(input[0]);

let dp = new Array(11).fill(0);

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for(let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for(let i = 1; i <= T; i++) {
    console.log(dp[Number(input[i])]);    
}