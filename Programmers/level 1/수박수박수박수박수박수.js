function solution(n) {
    var answer = '수박';
    return answer.repeat(n / 2) + (n % 2 === 0 ? '' : '수');
}
console.log(solution(3));
console.log(solution(4));