function solution(n) {
    var answer = 0;
    // 숫자 10까지 넣어야되기 때문에  n + 1
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    // 아이디어가 떠오르지 않을거 같으면 외우기
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i * i; j <= n; j += i) {
            isPrime[j] = false;
        }
    }    
    
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            answer += 1;
        }
    }
    return answer;
}