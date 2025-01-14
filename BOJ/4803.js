const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

let line = 0;
let testCase = 1;

while(true) {
    let [n, m] = input[line].split(' ').map(Number);
    if(n === 0 && m === 0) break;

    graph = [];
    for(let i = 1; i <= n; i++) {
        graph[i] = [];
    }

    for(let i = 1; i <= m; i++) {
        let [x, y] = input[line + i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }

    visited = new Array(n + 1).fill(false);
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(!visited[i]) {
            if(!isCycle(i, 0)) count++;
        }
    }
    
    if (count > 1) {
        console.log(`Case ${testCase}: A forest of ${count} trees.`);
    } else if (count === 1) {
        console.log(`Case ${testCase}: There is one tree.`);
    } else {
        console.log(`Case ${testCase}: No trees.`);
    }
    line += m + 1;
    testCase += 1;
}
 
function isCycle(x, prev) {
    visited[x] = true;

    for(let y of graph[x]) {
        if(!visited[y]) {
            if(isCycle(y, x)) return true;
        } else if(y !== prev) {
            return true;
        }
    }

    return false;
}



