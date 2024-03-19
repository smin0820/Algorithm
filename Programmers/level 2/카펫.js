function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;
    for(y = 3; y <= brown; y++) {
        if(sum % y === 0) {
            let x = sum / y;
            if( (y - 2) * (x - 2) === yellow){
                return [x, y];
            }   
        }
    }
    return answer;
}