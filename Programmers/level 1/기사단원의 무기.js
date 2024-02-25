function solution(number, limit, power) {
    var answer = 0;
    for(i = 1; i <= number; i++) {
        let count = 0;
        for(j = 1; j <= Math.sqrt(i); j++) {
            if(j === Math.sqrt(i)) {
                count += 1;
            } else if(i % j === 0){
                count += 2;
            }
        }
        count > limit ? answer += power : answer += count;
    } 
    
    return answer;
}