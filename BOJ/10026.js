const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const n = Number(input[0]);
let graph = [];

for (let i = 1; i <= n; i++) {
    graph.push(input[i].trim().split(''));
}

let notCount = 0; 
let RGWeakCount = 0; 

let visited = Array.from({ length: n }, () => Array(n).fill(false));

// 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y, color, graph) {
    visited[x][y] = true;

    for(let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(nx >= 0 && nx < n && ny >= 0 && ny < n) {
            if(!visited[nx][ny] && color === graph[nx][ny]) {
                dfs(nx, ny, color, graph);
            }
        }
    }
}

// 색약 x
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(!visited[i][j]) {
            notCount++;
            dfs(i, j, graph[i][j], graph);
        }
    }
}

// 색약 o => visited 초기화
visited = Array.from({ length: n }, () => Array(n).fill(false));

// 빨간, 초록 => #
let rgWeakGraph = graph.map(row => row.map(color => (color === 'R' || color === 'G' ? '#' : color)));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
            RGWeakCount++;     
            dfs(i, j, rgWeakGraph[i][j], rgWeakGraph);
        }
    }
}

console.log(notCount, RGWeakCount);
