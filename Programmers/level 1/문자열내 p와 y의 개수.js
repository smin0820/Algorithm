function solution(s){
    let answer = true;
    let pCount = 0;
    let yCount = 0;
    s = s.toUpperCase().split('');
    s.map(e => e === 'P' && pCount++);
    s.map(e => e === 'Y' && yCount++);
    answer = pCount !== yCount ? false : true;
    return answer;
}
console.log(solution("pPoooyY"));

