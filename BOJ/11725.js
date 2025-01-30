const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const n = Number(input[0]);
let graph = [];
const parent = Array(n + 1).fill(0);

for(let i = 1; i <= n; i++) {
    graph[i] = [];
}

for(let i = 1; i < n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

function dfs(node) {
    for(const next of graph[node]) {
        if(!parent[next]) {
            parent[next] = node;
            dfs(next);
        }
    }
}

parent[1] = 1;
dfs(1);

console.log(parent.splice(2).join('\n'));
