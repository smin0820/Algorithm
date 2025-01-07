const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

// const n = parseInt(input[0]);
// let arr = [];

// for(let i = 0; i < n; i++) {
//     let c = Number(input[i + 1].split(' ')[0]);
//     let s = Number(input[i + 1].split(' ')[1]); 
//     arr.push([c, s, i]);
// }

// arr.sort((a, b) => a[1] - b[1]);

// // 전체 누적합
// let sum = 0;
// let colorSum = Array(20001).fill(0);
// let result = Array(n).fill(0);



// let start = 0;

// while(start < n) {
//     // 크기가 같은 공의 마지막 인덱스 찾기
//     let end = start;
//     while(end < n && arr[start][1] === arr[end][1]) {
//         end += 1;
//     }
    
//     // 자기보다 작은 공들의 크기 합 - 같은 색상인 공들의 크기 합
//     for(let i = start; i < end; i++) {
//         result[arr[i][2]] = sum - colorSum[arr[i][0]];
//     }
    
//     // 누적 합 갱신
//     for(let i = start; i < end; i++) {
//         colorSum[arr[i][0]] += arr[i][1]; // 색상별 누적합
//         sum += arr[i][1]; // 전체 누적합
//     }
//     start = end;
// }

// console.log(result.join('\n'));












