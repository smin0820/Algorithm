function solution(n) {
    const fibo = new Array(n + 1).fill(0);
    if(n === 0) {
        return 0;
    }
    fibo[1] = 1;
    fibo[2] = 2;
    
    for(let i = 3; i <= n; i++) {
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567 ;
    }
    return fibo[n];
}