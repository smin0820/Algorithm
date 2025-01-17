const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

for(let i = 1; i <= n; i++) {
    arr[i] = [0, ...input[i].split(' ').map(Number)];
}

const k = parseInt(input[n + 1]);
let queries = [];

for(let line = n + 2; line < n + k + 2; line++) {
    let [i, j, x, y] = input[line].split(' ').map(Number);
    queries.push([i, j, x, y]);
}

let sum = [];
for (let i = 0; i <= n; i++) {
    sum.push(new Array(m + 1).fill(0));
}

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= m; j++) {
        sum[i][j] = arr[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    }
}

for(let index = 0; index < k; index++) {
    const [i, j, x, y] = queries[index];
    const answer = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] - sum[i - 1][j - 1];
    console.log(answer);
}