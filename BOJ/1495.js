const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, S, M] = input.shift().split(' ').map(Number);
const V = input.shift().split(' ').map(Number);

let dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
dp[0][S] = true;

for(let i = 0; i < N; i++) {
    for(let v = 0; v <= M; v++) {
        if(!dp[i][v]) continue;
        const up = v + V[i];
        const down = v - V[i];

        if (up <= M) dp[i + 1][up] = true;
        if (down >= 0) dp[i + 1][down] = true;
    }
} 

let result = -1;
for(let i = M; i >= 0; i--) {
    if(dp[N][i]) {
        result = i;
        break;
    }
}

console.log(result);