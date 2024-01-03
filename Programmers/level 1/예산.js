function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    for(i = 0; i < d.length; i++) {
        if (budget >= d[i]) {
            budget = budget - d[i];
            answer += 1;
        }
    }
    return answer;
}