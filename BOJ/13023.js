const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let graph = Array.from({ length: n }, () => []);
let visited = Array.from({ length: n }, () => false);

for(let i = 1; i <= m; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
let found = false;

function dfs(node, depth) {
    if(depth === 4) {
        found = true;
        return;
    }

    visited[node] = true;

    for(let friend of graph[node]) {
        if(!visited[friend]) {
            dfs(friend, depth + 1);
        }
    }

    visited[node] = false;
}

for(let i = 0; i < n; i++) {
    visited.fill(false);
    dfs(i, 0);
    if(found) break;
}

console.log(found ? 1 : 0);