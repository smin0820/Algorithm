const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const X = Number(input[M + 1]);
let reverseGraph = Array.from({ length : N + 1}, () => []);
let visited = Array.from({ length : N + 1}, () => false);
for(let i = 1; i <= M; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    reverseGraph[y].push(x);
}
let count = 0;
function dfs(node) {
    for(let prev of reverseGraph[node]) {
        if(!visited[prev]) {
            visited[prev] = true;
            count++;
            dfs(prev);
        }
    }
}
visited[X] = true;
dfs(X);

console.log(count);