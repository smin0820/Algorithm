function solution(num) {
    let answer = 0;
    while(num !== 1) {
        if(answer >= 500) {
            return -1;
        } else if(num % 2 === 0) {
            num /= 2;
            answer++;
        } else {
            num = (num * 3) + 1;
            answer++;
        }
    }
    return answer;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
console.log(solution(1));