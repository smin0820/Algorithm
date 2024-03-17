function solution(n) {
    let answer = 0;
    // 0번째랑 1번째는 고정
    let newArr = [0, 1];
    for(i = 2; i <= n; i++) {
        newArr.push((newArr[i - 2] + newArr[i - 1]) % 1234567);
    }
    answer = newArr[n];
    return answer;
}