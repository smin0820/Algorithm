const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');


const [n, m] = input[0].split(' ').map(Number);


let arr = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));


for (let i = 1; i <= n; i++) {
    arr[i] = [0, ...input[i].split(' ').map(Number)];
}


let queries = [];
for (let line = n + 1; line < n + m + 1; line++) {
    let [x1, y1, x2, y2] = input[line].split(' ').map(Number);
    queries.push([x1, y1, x2, y2]);
}


let sum = [];
for (let i = 0; i <= n; i++) {
    sum.push(new Array(n + 1).fill(0));
}


for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        sum[i][j] = arr[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    }
}


for (let index = 0; index < m; index++) {
    const [x1, y1, x2, y2] = queries[index];
    const answer = sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1];
    console.log(answer);
}



