const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [R, C, K] = input[0].split(' ').map(Number);

let graph = [];
for(let i = 1; i <= R; i++) {
    graph.push(input[i].trim().split(''));
}
let visited = Array.from({ length: R }, () => Array.from({ length : C }, () => false));


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let count = 0;

function dfs(x, y, dist) {
    if(x === 0 && y === C - 1) {
        if(dist === K) count++;
        return;
    }

    for(let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(nx >= 0 && ny >= 0 && nx < R && ny < C && !visited[nx][ny] && graph[nx][ny] !== 'T') {
            visited[nx][ny] = true;
            dfs(nx, ny, dist + 1);
            visited[nx][ny] = false;
        }
    }
}

visited[R - 1][0] = true;
dfs(R - 1, 0, 1);

console.log(count);