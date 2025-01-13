const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);

console.log(n,m);

// let line = 0;
// while(true) {
//     let graph = [];
//     let [n, m] = input[line].split('').map(Number);
//     for(let i = 1; i <= n; i++) {
//         graph[i] = [];
//     }
//     console.log(graph);
    
//     for(let i = line; i < line + m; i++) {

//     }

//     line += m + 1;
// }


