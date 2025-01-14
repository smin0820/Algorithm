let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let [n, m] = [Number(input[0]), Number(input[1])];
let graph = [];
for(let i = 1; i <= n; i++) {
    graph[i] = [];
}
for(let i = 2; i <= m + 1; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

let count = 0;
function dfs(graph, v, visited) {
    visited[v] = true;
    count++;
    for(i of graph[v]) {
        if(!visited[i]) dfs(graph, i, visited);
    }
}


let visited = Array(n + 1).fill(false);

dfs(graph, 1, visited);
console.log(count - 1);


// let [n, m] = [Number(input[0]), Number(input[1])];
// let graph = [];
// for(let i = 1; i <= n; i++) graph[i] = [];
// for(let i = 2; i <= m + 1; i++) {
//     let [x, y] = input[i].split(' ').map(Number);
//     graph[x].push(y);
//     graph[y].push(x);
// } 

// let count = 0;
// let visited = new Array(n).fill(false);
// function dfs(x) {
//     visited[x] = true;
//     count++;
//     for(let y of graph[x]) {
//         if(!visited[y]) dfs(y);
//     }
// }
// dfs(1);
// console.log(count - 1);
