function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b)=> b-a)
    for(i = 0; i < score.length; i += m) {
        let values = score.slice(i, i + m)
        if(values.length === m) {
            answer += m * values[values.length - 1];
        }
    }

    return answer;
}