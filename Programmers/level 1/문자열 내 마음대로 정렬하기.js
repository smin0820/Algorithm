function solution(strings, n) {
    strings.sort((a, b) => {
        // n번째로 비교
        if(a[n] !== b[n]) {
            return a[n] > b[n] ? 1 : -1;
        }
        // 문자열 자체를 비교
        return a > b ? 1 : -1;
    })
    return strings;
}