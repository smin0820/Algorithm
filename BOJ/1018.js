const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(v => v.trim().split(''));


let minRepaint = Infinity;


for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let countCase1 = 0; // 왼쪽 상단이 'W'인 경우
      let countCase2 = 0; // 왼쪽 상단이 'B'인 경우
  
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          // (x+y)가 짝수면 첫 번째 칸과 같은 색이어야 함.
          if ((x + y) % 2 === 0) {
            if (board[i + x][j + y] !== 'W') countCase1++;
            if (board[i + x][j + y] !== 'B') countCase2++;
          } else {
            if (board[i + x][j + y] !== 'B') countCase1++;
            if (board[i + x][j + y] !== 'W') countCase2++;
          }
        }
      }
      // 최소 변경 횟수를 갱신합니다.
      minRepaint = Math.min(minRepaint, countCase1, countCase2);
    }
  }
  
  console.log(minRepaint);