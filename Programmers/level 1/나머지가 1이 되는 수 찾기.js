function solution(n) {
    var answer = 0;
    for(i = 1; i <= n; i++) {
        if(n % i === 1) {
            answer = i;
            break;
        }
    }
    return answer;
}

console.log(solution(10));