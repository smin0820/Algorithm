function solution(n) {
    var answer = 0;
    let n_count = 0;
    n.toString(2).split('').filter((e) => {
        if(e === '1') {
            n_count++;
        }
    });
    while(true) {
        let next_count = 0;
        n += 1;
        n.toString(2).split('').filter((e) => {
        if(e === '1') {
            next_count++;
        }
    });
        if(n_count == next_count) {
            answer = n;
            break;
        }
    }
    return answer;
}