const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
let graph  = Array.from({ length : N }, () => Array.from({ length: M }, () => '.'));
for(let i = 1; i <= K; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x - 1][y - 1] = '#';
}

let visited = Array.from({ length : N }, () => Array.from({ length: M }, () => false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let maxCount = 0;

function dfs(x, y) {
    let count = 1;
    visited[x][y] = true;

    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && graph[nx][ny] === '#') {
            count += dfs(nx, ny);
        }
    }
    return count;
}

for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(!visited[i][j] && graph[i][j] === '#') {
            let currentCount = dfs(i, j);
            maxCount = Math.max(currentCount, maxCount);
        }
    }
}



console.log(maxCount);