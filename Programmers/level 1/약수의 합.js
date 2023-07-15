function solution(n) {
    let answer = 0;
    let arr = [];
    for(i = 1; i <= n; i++) {
        Number.isInteger(n / i) && arr.push(i);  
    }
    answer = arr.reduce((acc, cur) => acc + cur);
    return answer;
}

console.log(solution(12));


/* 굳이 배열을 만들 필요 x
function solution(n) {
    let answer = 0;
    for(i = 1; i <= n; i++) {
        if(n % i === 0) {
            answer += i;
        }
    }
    return answer;
}

console.log(solution(12));

*/