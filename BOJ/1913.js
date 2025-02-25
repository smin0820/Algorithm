const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const target = Number(input[1]);

// N x N 2차원 배열 초기화
let graph = Array.from({ length: N }, () => Array(N).fill(0));

// 방향: 위(상) → 오른쪽(우) → 아래(하) → 왼쪽(좌)
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 중앙에서 시작
let x = Math.floor(N / 2);
let y = Math.floor(N / 2);
let num = 1; // 채울 숫자
let direction = 0; // 현재 방향 (위부터 시작)

// target의 위치 저장
let targetX = x, targetY = y;
let step = 1;
graph[x][y] = num;


while (num < N * N) {
    for(let _ = 0; _ < 2; _++) {
        for(let i = 0; i < step; i++) {
            if(num >= N * N) break;
            x += dx[direction];
            y += dy[direction];
            num++;
            graph[x][y] = num;
            if(num === target) {
                targetX = x;
                targetY = y;
            }
        }
        direction = (direction + 1) % 4;
    }
    step++;
}

// 결과 출력
console.log(graph.map(row => row.join(' ')).join('\n'));
console.log(targetX + 1, targetY + 1);