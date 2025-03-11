const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const sharkMap = input.map(e => e.split(' ').map(Number));

const dx = [0, 0, -1, 1, -1, 1, 1, -1];
const dy = [1, -1, 0, 0, 1, 1, -1, -1];

let distance = Array.from({ length: N }, () => Array(M).fill(-1));
let queue = [];


let minDistance = Infinity;
for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(sharkMap[i][j] === 1) {
            queue.push([i, j]);
            distance[i][j] = 0;  //상어가 있는 칸의 거리 0
        }
    }
}

let maxDistance = 0;
while(queue.length) {
    const [x, y] = queue.shift();

    for(let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < N && ny < M && distance[nx][ny] === -1) {
            distance[nx][ny] = distance[x][y] + 1;
            maxDistance = Math.max(maxDistance, distance[nx][ny]); // 최댓값 갱신
            queue.push([nx, ny]);
        }    
    }
}

console.log(maxDistance);