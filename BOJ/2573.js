const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const iceberg = input.map(v => v.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 빙산 녹이기
function melt() {
    const newIceberg = iceberg.map(row => [...row]);

    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            if (iceberg[x][y] > 0) {
                let count = 0;
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];

                    if (nx >= 0 && ny >= 0 && nx < N && ny < M && iceberg[nx][ny] === 0) {
                        count++;
                    }
                }

                newIceberg[x][y] = Math.max(0, iceberg[x][y] - count);
            }
        }
    }

    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            iceberg[x][y] = newIceberg[x][y];
        }
    }
}

// DFS로 빙산 덩어리 개수 확인
function dfs(x, y, visited) {
    const stack = [[x, y]];
    visited[x][y] = true;

    while (stack.length) {
        const [cx, cy] = stack.pop();

        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];

            if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && iceberg[nx][ny] > 0) {
                visited[nx][ny] = true;
                stack.push([nx, ny]);
            }
        }
    }
}

// 실행
let year = 0;
while (true) {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    let count = 0;

    // 빙산 덩어리 개수 세기
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!visited[i][j] && iceberg[i][j] > 0) {
                dfs(i, j, visited);
                count++;
            }
        }
    }

    // 2개 이상으로 나뉘었으면 종료
    if (count >= 2) {
        console.log(year);
        break;
    }

    // 다 녹았으면 종료
    if (count === 0) {
        console.log(0);
        break;
    }

    // 빙산 녹이기
    melt();
    year++;
}

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().split('\n');

// const [N, M] = input.shift().split(' ').map(Number);
// const iceberg = input.map(v => v.split(' ').map(Number));

// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];

// function melt() {
//     iceberg.forEach((row, x) => {
//         row.forEach((height, y) => {
//             if (height > 0) {
//                 let count = 0;
//                 for (let i = 0; i < 4; i++) {
//                     const nx = x + dx[i];
//                     const ny = y + dy[i];
                    
//                     if (iceberg[nx][ny] === 0) {
//                         count++;
//                     }
//                 }
                    
//                 iceberg[x][y] -= count;
                
//                 if (iceberg[x][y] <= 0) {
//                     iceberg[x][y] = -1;
//                 }
//             }
//         })
//     })
// }

// function dfs(start, visited) {
//     const stack = [start];
//     while (stack.length) {
//         const [x, y] = stack.pop();
        
//         for (let i = 0; i < 4; i++) {
//             const nx = x + dx[i];
//             const ny = y + dy[i];
            
//             if (!visited[nx][ny] && iceberg[nx][ny] > 0) {
//                 visited[nx][ny] = true;
//                 stack.push([nx, ny]);
//             }
//         }
//     }
// }


// function changeMinusToZero() {
//     iceberg.forEach((row, x) => {
//         row.forEach((height, y) => {
        
//             if (height === -1) {
//                 iceberg[x][y] = 0;
//             }
//         })
//     })
// }

// let year = 0;

// while (true) {
//     const visited = [...Array(N)].map(() => Array(M).fill(false));
//     let count = 0;
    
//     for (let i = 1; i < N - 1; i++) {
//         for (let j = 1; j < M - 1; j++) {
//             if (!visited[i][j] && iceberg[i][j] > 0) {
//                 visited[i][j] = true;
//                 dfs([i, j], visited);
//                 count++;
//             }
//         }
//     }

//     if (count >= 2) {
//         console.log(year);
//         break;
//     } else if (count === 0) {
//         console.log(0);
//         break;
//     }
    
//     melt();
//     changeMinusToZero();
//     year++;
// }