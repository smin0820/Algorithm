const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const [H, W, K] = input[0].split(' ').map(Number);
let graph = Array.from(Array(H), () => Array(W).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const visited = Array.from(Array(H), () => Array(W).fill(false));

for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);

  for (let y = H - y2; y < H - y1; y++) {
    for (let x = x1; x < x2; x++) {
      graph[y][x] = 1;
    }
  }
}

let count = 0; // 영역 너비 카운트할 변수
const dfs = (x, y) => {
  count++;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < H && ny >= 0 && ny < W && !graph[nx][ny] && !visited[nx][ny]) {
      dfs(nx, ny);
    }
  }
};

let result = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    count = 0; // 영역 너비 초기화
    if (!visited[i][j] && !graph[i][j]) {
      dfs(i, j);
      result.push(count); // DFS 진행 후의 영역 너비 저장
    }
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join(' '));