const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [m, n] = input[0].split(' ').map(Number);
let graph = [];
for(let i = 1; i <= m; i++) {
    graph.push(input[i].split(' ').map(Number));
}

let visited = Array.from({ length : m }, () => Array.from({ length: n }, () => false));

// 상, 하, 좌, 우, 좌상, 좌하, 우상, 우하
const dx = [-1, 1, 0, 0, -1, 1, -1, 1];
const dy = [0, 0, -1, 1, -1, -1, 1, 1];

 function dfs(x, y) {
    visited[x][y] = true;
    for(let i = 0; i < 8; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if(nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny] && graph[nx][ny] === 1) {
            dfs(nx, ny);
        }
    }
 }

 let textCount = 0;
 for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
        if(!visited[i][j] && graph[i][j] === 1) {
            textCount++;
            dfs(i, j);
        }
    }
 }

console.log(textCount);