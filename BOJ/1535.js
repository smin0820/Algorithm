const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]);
const L = input[1].split(' ').map(Number);
const J = input[2].split(' ').map(Number);


const dp = Array(101).fill(0);

for (let i = 0; i < n; i++) {
    for (let hp = 100; hp > L[i]; hp--) {  // 체력 100부터 감소 방향으로 탐색
        dp[hp] = Math.max(dp[hp], dp[hp - L[i]] + J[i]);
    }
}
console.log(Math.max(...dp));