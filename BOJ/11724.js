const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for(let i = 1; i <= n; i++) {
    graph[i] = [];
}

for(let i = 1; i <= m; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

let visited = new Array(n + 1).fill(false);
let count = 0;

for(let i = 1; i <= n; i++) {
    if(!visited[i]) {
        dfs(i);
        count += 1;
    }
}


function dfs(start) {
    visited[start] = true;
    for(let node of graph[start]) {
        if(!visited[node]) {
            dfs(node);
        }
    }
}

console.log(count);
