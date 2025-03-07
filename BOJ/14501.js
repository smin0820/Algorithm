const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input.shift());
const schedule = input.map(line => line.split(' ').map(Number));

// 최대 이익을 저장할 DP 배열
const dp = Array(N + 1).fill(0);

for(let i = 0; i < N; i++) {
    const [time, profit] = schedule[i];
    const nextDay = i + time;

    if(i > 0) {
        dp[i] = Math.max(dp[i], dp[i - 1]);
    }

    // 상담을 진행할 수 있으면 DP 갱신
    if(nextDay <= N) {
        dp[nextDay] = Math.max(dp[nextDay], dp[i] + profit);
    }
}

console.log(Math.max(...dp));