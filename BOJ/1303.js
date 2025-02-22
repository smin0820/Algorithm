const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let graph = [];

for(let i = 1; i <= M; i++) {
    graph.push(input[i].trim().split(''));
}
// 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let visited = Array.from({ length: M }, () => Array.from({ length: N }, () => false));


let wArr = [];
let bArr = [];

function dfs(x, y, color) {
    let count = 1;
    visited[x][y] = true;

    for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if(nx >= 0 && ny >= 0 && nx < M && ny < N && !visited[nx][ny] && color === graph[nx][ny]) {
            count += dfs(nx, ny, graph[nx][ny]);
        }
    }
    return count;
}

for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
        if(!visited[i][j]) {
            let size = dfs(i, j, graph[i][j]);
            if(graph[i][j] === 'W') {
                wArr.push(size);
            } else {
                bArr.push(size);
            }
        }
    }
}

const wPower = wArr.reduce((acc, cur) => acc + cur ** 2, 0);
const bPower = bArr.reduce((acc, cur) => acc + cur ** 2, 0);
console.log(wPower, bPower);

