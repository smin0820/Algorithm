function solution(want, number, discount) {
    var answer = 0;
    for(let i = 0; i < discount.length; i++) {
        let list = discount.slice(i, i + 10);
        
        if(list.length < 10) {
            break;
        }
        
        let flag = true;
        
        want.forEach((e, index) => {
            let count = 0;
            list.forEach((ele) => {
                if(e === ele) {
                    count++;
                }
            })
            if(count !== number[index]) {
                flag = false;
                return;
            }
        })
        if(flag) {
            answer++;
        }
    }
    return answer;
}