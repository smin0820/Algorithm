const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let graph = [];
for(let i = 0; i < input.length; i++) {
    graph.push(input[i].split(' ').map(Number));
}

const set = new Set();
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y, str) {
    if(str.length === 6) {
        set.add(str);
        return;
    }

    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if(nx >= 0 && ny >= 0 && nx <= 4 && ny <= 4) {
            dfs(nx, ny, str + graph[nx][ny]);
        }
    }
}

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        dfs(i, j, graph[i][j].toString());
    }
} 

console.log(set.size);