const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n").map(Number);
for (let i = 0; i < input.length - 1; i++) {
    const num = input[i];
    let count = 0;
    if (num === 1) {
        count++;
        console.log(count);
        // 다음 i로 넘어가면서 count 초기화
        continue;
    }
    outer: for (let j = num + 1; j <= 2 * num; j++) {
        // j에 대하여 소수 판별 진행
        inner: for (let k = 2; k * k <= j; k++) {
            // k로 나누어 떨어지면 소수가 아니므로 outer 반복문 continue
            if (j % k === 0) {
                continue outer;
            }
        }
        // inner 반복문을 통과하면 소수이므로 count 증가
        count++;
    }
    // num에 대한 최종 count 출력
    console.log(count);
}