function solution(n) {
    return n.toString().split('').map(e => Number(e)).reverse();
}

console.log(solution(12345));