function solution(s){
    let answer = true;
    let count = 0;

    for(i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            count += 1;
        } else {
            count -= 1;
        }

        if(count < 0) {
            return false;
        }
    }

    return count == 0 ? true : false;
}