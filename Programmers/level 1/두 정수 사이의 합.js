function solution(a, b) {
    var answer = 0;
    for(i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    }
    return answer;
}

console.log(solution(5, 3));