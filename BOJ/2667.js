const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = Number(input[0]);
let graph = [];

for(let i = 1; i <= n; i++) {
    graph.push(input[i].trim().split('').map(Number));
}

let total = 0;
let answer = [];
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        total = dfs(i, j);
        if(total > 0) answer.push(total);
    }
}

function dfs(x, y) {
    if(x >= n || x <= -1 || y <= -1 || y >= n) {
        return 0;
    }
 
    if(graph[x][y] === 1) {
        graph[x][y] = -1;
        let result = 1;
        result += dfs(x, y + 1);
        result += dfs(x, y - 1);
        result += dfs(x + 1, y);
        result += dfs(x - 1, y);
        return result;
    }
    return 0;
}
answer.sort((a, b) => a - b);

console.log(answer.length);
console.log(answer.join('\n'));







































// const n = Number(input[0]);
// const graph = [];

// for(let i = 1; i <= n; i++) {
//     graph.push(input[i].trim().split('').map(Number));
// }

// let answer = [];

// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < n; j++) {
//         let total = dfs(i, j);
//         if(total > 0) answer.push(total);
//     }
// }

// function dfs(x, y) {
//     if(x <= -1 || y <= -1 || x >= n || y >= n) {
//         return 0;
//     }

//     if(1 <= graph[x][y]) {
//         graph[x][y] = -1;
//         let result = 1;
//         result += dfs(x, y + 1);
//         result += dfs(x, y - 1);
//         result += dfs(x + 1, y);
//         result += dfs(x - 1, y);
//         return result;
//     }

//     return 0;
// }

// answer.sort((a, b) => a - b);
// console.log(`${answer.length}\n${answer.join('\n')}`);


