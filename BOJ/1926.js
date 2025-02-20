const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let graph = [];
for(let i = 1; i <= n; i++) {
    graph.push(input[i].split(' ').map(Number));
}
let visited = Array.from({ length : n }, () => Array.from({ length : m }, () => false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let count = 0;     // 그림의 개수
let maxArea = 0;   // 가장 넓은 그림의 넓이


function dfs(x, y) {
    visited[x][y] = true;
    let area = 1;
    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if(nx >= 0 && ny >= 0 && nx < n && ny < m && graph[nx][ny] === 1 && !visited[nx][ny]) {
            area += dfs(nx, ny);
        }
    }
    return area;
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(!visited[i][j] && graph[i][j] === 1) {
            count++;
            let area = dfs(i, j);
            if(area > maxArea) maxArea = area;
        }
    }
}

console.log(count);
console.log(maxArea);