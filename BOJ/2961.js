let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n; i++) {
    let [s, b] = input[i].split(' ').map(Number);
    arr.push([s, b]);
}
let visited = new Array(n).fill(false);
let selected = [];

let min = 1e9;
function dfs(depth) {
    if(depth >= 1) {
        totalS = 1;
        totalB = 0;
        for(let [x, y] of selected) {
            totalS *= x;
            totalB += y;
        }
        min = Math.min(min, Math.abs(totalS - totalB));
    }
    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        selected.push(arr[i]);
        dfs(depth + 1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(0);
console.log(min);
