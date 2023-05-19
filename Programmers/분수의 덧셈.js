function solution(numer1, denom1, numer2, denom2) {
    var topNum = (numer1 * denom2) + (denom1 * numer2);
    var botNum = denom1 * denom2;
    var lcm = 1;
    for(i = 1; i <= topNum; i++) {
        if(topNum % i === 0 && botNum % i === 0) {
            var lcm = i;
        }
    }
    var answer = [topNum / lcm, botNum / lcm];
    return answer;
}