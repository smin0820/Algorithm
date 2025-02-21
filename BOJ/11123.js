const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let line = 1;

while(testCase--) {
    let [H, W] = input[line].split(' ').map(Number);
    let graph = [];
    for(let i = line + 1; i <= line + H; i++) {
        graph.push(input[i].trim().split(''));
    }
    
    let visited = Array.from({ length: H }, () => Array.from({ length: W }, () => false));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let sheepCount = 0;

    function dfs(x, y) {
        visited[x][y] = true;
        
        for(let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if(nx >= 0 && ny >= 0 && nx < H && ny < W && !visited[nx][ny] && graph[nx][ny] === '#') {
                dfs(nx, ny);
            }
        }
    }

    for(let i = 0; i < H; i++) {
        for(let j = 0; j < W; j++) {
            if(!visited[i][j] && graph[i][j] === '#') {
                sheepCount++;
                dfs(i, j);
            }
        }
    }
    console.log(sheepCount);
    line = line + H + 1;
}