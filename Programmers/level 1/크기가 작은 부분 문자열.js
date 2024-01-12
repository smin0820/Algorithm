function solution(t, p) {
    const numberP = Number(p);
    let answer = 0;
    for(i = 0; i < t.length - p.length + 1; i++) {
        const slicedT = t.slice(i, i + p.length);
        const numberT = Number(slicedT);
        if(numberT <= numberP) {
            answer += 1;
        }
    }
    return answer;
}