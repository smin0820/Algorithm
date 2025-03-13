const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

// 접시 수, 초밥 가짓수, 연속 먹는 접시 수, 쿠폰 번호
const [N, d, k, c] = input.shift().split(' ').map(Number);

let check = Array(d + 1).fill(0);
const sushi = input.map(Number);

let count = 0;
let answer = 0;

// 🔹 초기 슬라이딩 윈도우 설정 (첫 k개 초밥)
for (let i = 0; i < k; i++) {
    if (check[sushi[i]] === 0) count++;
    check[sushi[i]]++;
}

// 🔹 쿠폰 초밥 고려
answer = count + (check[c] === 0 ? 1 : 0);

// 🔹 슬라이딩 윈도우 시작 0 ~ 7
for (let i = 0; i < N; i++) {
    let end = (i + k) % N; // 회전 벨트 처리

    // 왼쪽 초밥 제거
    check[sushi[i]]--;
    if (check[sushi[i]] === 0) count--;

    // 오른쪽 초밥 추가
    if (check[sushi[end]] === 0) count++;
    check[sushi[end]]++;

    // 쿠폰 초밥 고려
    answer = Math.max(answer, count + (check[c] === 0 ? 1 : 0));
}

console.log(answer);