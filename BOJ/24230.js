const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let n = Number(input[0]);
let colors = input[1].split(' ').map(Number);
colors.unshift(undefined);
let graph = Array.from({ length: n + 1 }, () => []);
let visited = new Array(n + 1).fill(false);
let paintCount = 0;

for(let i = 2; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

function dfs(current, parentColor) {
    visited[current] = true;

    if (colors[current] !== parentColor) {
        paintCount++;
    }
    
    for(let next of graph[current]) {
        if(!visited[next]) {
            dfs(next, colors[current]);
        }
    }
}

dfs(1, 0);
console.log(paintCount);