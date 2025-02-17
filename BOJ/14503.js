const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let [x, y, d] = input.shift().split(" ").map(Number);
const room = input.map(i => i.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let cleanCount = 0;
let cnt = 0;

while (1) {
  if (cnt === 4) {
    const [backx, backy] = [x + dx[(d + 6) % 4], y + dy[(d + 6) % 4]];
    if (room[backx][backy] === 1) break;
    else {
      x = backx;
      y = backy;
      cnt = 0;
    }
  }
  
  if (!visited[x][y]) {
    visited[x][y] = true;
    room[x][y] = 2;
    cleanCount++;
  }

  const [leftx, lefty] = [x + dx[(d + 3) % 4], y + dy[(d + 3) % 4]];
  if (room[leftx][lefty] === 0) {
    x = leftx;
    y = lefty;
    cnt = 0;
  } else {
    cnt++;
  }
  d = (d + 3) % 4;
}

console.log(cleanCount);