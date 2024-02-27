function solution(n, m, section) {
    var answer = 0;
    var tempArr = new Array(8).fill(true);
    for(i = 0; i < section.length; i++) {
        tempArr[section[i] - 1] = false;
    }
    section.forEach((e, i) => {
        if(tempArr[e - 1] === false) {
            for(i = 0; i < m; i++) {
                tempArr[e - 1 + i] = true;
            }
            answer += 1;
        }
    })
    return answer;
}