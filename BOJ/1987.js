let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let [r, c] = input[0].split(' ').map(Number);
let arr = [];
for(let i = 1; i <= r; i++) arr.push(input[i]);
let visited = new Set();
let maxDepth = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(depth, x, y) {
    maxDepth = Math.max(maxDepth, depth);
    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
        if(visited.has(arr[nx][ny])) continue;
        visited.add(arr[nx][ny]);
        dfs(depth + 1, nx, ny);
        visited.delete(arr[nx][ny]);
    }
}

visited.add(arr[0][0]);
dfs(1, 0, 0);
console.log(maxDepth);
