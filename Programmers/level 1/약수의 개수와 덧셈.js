function solution(left, right) {
    let sum = 0;
    for(i = left; i <= right; i++) {
        let isDiviser = 0;
        for(j = 1; j <= i; j++) {
            if(i % j === 0) {
                isDiviser++;
            }
        }
        isDiviser % 2 === 0 ? sum += i : sum -= i;
    }
    return sum;
}
console.log(solution(13, 17));
console.log(solution(24, 27));


// 제곱근이 정수면 약수의 개수가 홀수이다.
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i;
    }
    return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));