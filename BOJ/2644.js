const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
// 전체 사람 수 
const n = Number(input[0]);
// 두 사람 번호
const [a, b] = input[1].split(' ').map(Number);
// 관계의 개수
const m = Number(input[2]);
// 부모-자식 관계 배열
let graph = [];
for(let i = 0; i <= n; i++) {
    graph[i] = [];
}

let answer, depth = 0;


for(let i = 3; i < 3 + m; i++) {
    const[x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

let visited = Array.from({ length: n + 1}, () => false);

function dfs(start, depth) {
    if(start === b) answer = depth;
    for(let node of graph[start]) {
        if(!visited[node]) {
            visited[node] = true;
            dfs(node, depth + 1);
        }
    }
}

dfs(a, depth);
// 촌수가 없을 때 -1 출력
answer ? console.log(answer) : console.log(-1);