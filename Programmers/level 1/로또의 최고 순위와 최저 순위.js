function solution(lottos, win_nums) {
    let answer = [];
    let zeroCnt = lottos.filter((e) => 0 === e).length;
    let fixedAnswer = win_nums.filter((e) => lottos.includes(e)).length;
    let maxRank = fixedAnswer + zeroCnt;
    if (maxRank > 0) {
        answer.push(7 - maxRank); 
    } else {
        answer.push(6);
    }

    if (fixedAnswer > 0) {
        answer.push(7 - fixedAnswer);
    } else {
        answer.push(6);
    }

    return answer;
}