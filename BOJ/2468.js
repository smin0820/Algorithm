const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
let graph = [];
const n = Number(input[0]);

// 상 하 좌 우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for(let i = 1; i <= n; i++) {
    graph.push(input[i].trim().split(' ').map(Number));
}

// 최대 높이 찾기
let max = 0;
for(let x of graph) {
    max = Math.max(max, ...x);
}

function dfs(graph, x, y, target) {
    if(x <= -1 || y <= -1 || x >= n || y >= n) {
        return false;
    }

    if(graph[x][y] <= target) {
        return false;
    }

    graph[x][y] = 0;
    for(let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        dfs(graph, nx, ny, target);
    }

    return true;
}

let answer = 0;
let count = 0;

while(max > -1) {
    let newGraph = graph.map((item) => [...item]);
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(dfs(newGraph, i, j, max)) {
                count++;
            }
        }
    }

    answer = Math.max(answer, count);
    count = 0;

    max--;
}

console.log(answer);