const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const n = Number(input[0]);
let graph = [0];
for(let i = 1; i <= n; i++) {
    graph.push(Number(input[i]));
}

let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
const answer = [];

for(let x = 1; x <= n; x++) {
    if(!visited[x]) {
        dfs(x, graph, visited, finished, answer);
    }
}

console.log(answer.length);
answer.sort((a, b) => a - b);
console.log(answer.join('\n'));


function dfs(x, graph, visited, finished, answer) {
    visited[x] = true;
    let y = graph[x];
    if(!visited[y]) {
        dfs(y, graph, visited, finished, answer);
    } else if(!finished[y]) {
        while(y !== x) {
            answer.push(y);
            y = graph[y];
        }
        answer.push(x);
    }
    finished[x] = true;
}
