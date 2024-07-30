let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

let n = Number(input[0]);
let m = Number(input[1]);

let arr = [];
for(let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected = [];

let answer = '';
function dfs(arr, depth, start) {
    if(depth === m) {
        let result = [];
        for(let x of selected) result.push(arr[x]);
        for(let y of result) answer += y + ' ';
        answer += '\n'; 
        return;
    }
    for(let i = start; i < arr.length; i++) {
        if(visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr, depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
} 

dfs(arr, 0, 0);

console.log(answer);